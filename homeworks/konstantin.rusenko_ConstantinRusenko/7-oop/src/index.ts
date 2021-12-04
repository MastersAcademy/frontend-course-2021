const BODY = document.querySelector<HTMLElement>('body');
const PANEL = document.querySelector<HTMLElement>('[data-panel]');
const HEADER = document.querySelector<HTMLElement>('[data-header]');
const GALLERY_EL = PANEL.querySelector<HTMLElement>('[data-gallery]');
const USERS_BAR_EL = PANEL.querySelector<HTMLElement>('[data-users-bar');
const LOADER_EL = PANEL.querySelector<HTMLElement>('[data-loader');
let currentUser: User;

const DATA_SET = [
    {userName: 'User 1', images: ['img/first.jpg', 'img/second.jpg', 'img/third.jpg']},
    {userName: 'User 2', images: ['img/second.jpg', 'img/third.jpg', 'img/first.jpg']},
    {userName: 'User 3', images: ['img/third.jpg', 'img/second.jpg', 'img/first.jpg']}
];

if (!GALLERY_EL) {
    throw new Error('Missing [data-gallery]')
}

class ImageGallery {
    private bigImageEL: HTMLImageElement;
    private imagePreviewEl: HTMLElement;
    private readonly imageEl: HTMLImageElement;
    private readonly closeButtonEl: HTMLElement;

    constructor(public images: string[]) {
        const imagePreviewEl = PANEL.querySelector<HTMLElement>('[data-image-preview]');
        const bigImageEL = PANEL.querySelector<HTMLImageElement>('[data-big-image]');

        this.imagePreviewEl = imagePreviewEl;
        this.bigImageEL = bigImageEL;
        this.listenEvents();
    }

    public addImage(image: string) {
        this.images.push(image);
    }

    public render() {
        GALLERY_EL.innerHTML = '';
        this.images.forEach((image) => {
            ImageUploader.createImage(image);
        });
    }

    private listenEvents() {
        GALLERY_EL.addEventListener('click', (event) => {
            const target = event.target as Element;
            if (target.hasAttribute('data-image')) {
                this.toggleContent(target);
            }
        });

        this.imagePreviewEl.addEventListener('click', () => {
            this.imagePreviewEl.classList.add('hidden');
            BODY.classList.toggle('overflow--hidden');
        })
    }

    public toggleContent(target: Element) {
        this.bigImageEL.src = target.getAttribute('src');
        this.imagePreviewEl.classList.remove('hidden');
        BODY.classList.toggle('overflow--hidden');
    }
}

class ImageUploader {

    static createImage(source: string) {
        const newImage = document.createElement('img');
        newImage.src = source;
        newImage.setAttribute('data-image', '');
        newImage.classList.add('image');
        GALLERY_EL.prepend(newImage);
    }

    static listenEvents() {
        const uploadEl = PANEL.querySelector<HTMLInputElement>('[data-upload]')
        uploadEl.addEventListener('change', (event) => {
            LOADER_EL.classList.remove('hidden');
            BODY.classList.remove('overflow--hidden');
            setTimeout(() =>{
                const imageUrl = URL.createObjectURL((<HTMLInputElement>event.target).files[0])
                this.createImage(imageUrl)
                currentUser.gallery.addImage(imageUrl);
                LOADER_EL.classList.add('hidden');
                BODY.classList.remove('overflow--hidden');
            }, 2000);

        });
    }

    static toggleMenu() {
        const burgerEl = HEADER.querySelector<SVGElement>('[data-burger]');
        burgerEl.addEventListener('click', () => {
            USERS_BAR_EL.classList.toggle('visible');
            if (USERS_BAR_EL.classList.contains('visible')) {
                burgerEl.setAttribute('href','img/burger.svg#close');
            } else {
                burgerEl.setAttribute('href','img/burger.svg#burger');
            }
        })
    }  
}

class User {
    private burgerEl: SVGElement;
    public gallery: ImageGallery;
    
    constructor(private name: string, private images: string[]) {
        const burgerEl = HEADER.querySelector<SVGElement>('[data-burger]');

        this.burgerEl = burgerEl;
        this.name = name;
        this.gallery = new ImageGallery(images);
    }

    public isCurrentUser(): boolean {
        return this === currentUser
    }

    public loadUserImages() {
        currentUser = this
        this.gallery.render();
    }

    public render() {
        const newUser = document.createElement('div') as HTMLDivElement;
        newUser.innerHTML = this.name;
        newUser.setAttribute('data-user', '');
        newUser.classList.add('user-new');
        USERS_BAR_EL.appendChild(newUser);
        if (this.isCurrentUser()) this.gallery.render();
        newUser.addEventListener('click', () => {
            currentUser = this;
            this.gallery.render();
        });
    }  
}

DATA_SET.forEach(({ userName, images }) => {
    const user = new User(userName, images)
    currentUser = currentUser || user;
    user.render();
});
ImageUploader.listenEvents();
ImageUploader.toggleMenu();
