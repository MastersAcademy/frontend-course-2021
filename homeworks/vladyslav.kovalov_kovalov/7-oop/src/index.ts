const galleryElement = document.querySelector('[data-gallery]');
const fullScreenElement = document.querySelector('[data-full-screen]');
const imageSelectorElement = document.querySelector

galleryElement?.addEventListener('click', event => {
    const {image: currentImage} = (event.target as HTMLButtonElement).dataset;
    if(currentImage !== undefined) toggleFullSizeImage(currentImage, fullScreenElement);
});

fullScreenElement?.addEventListener('click', event => {
    const currentImage = (event.target as HTMLButtonElement).dataset;
    if(currentImage.fullScreenImage !== '') {
        fullScreenElement?.classList.add('hidden');
        fullScreenElement.innerHTML = '';
    }
})

// window.addEventListener('keydown', event => {
//     console.log((event.target as EventTarget));
// })

function createFullSizeImage(src: any) {
    const template = document.querySelector('[data-full-screen-template]') as HTMLTemplateElement;
    const content = template.content.cloneNode(true);
    const element = (content as HTMLImageElement).querySelector('[data-full-screen-image]');
    element?.setAttribute('src', src);
    return element;
}

function toggleFullSizeImage(currentImage: any, container: any) {
    const imagePath = `img/img-${currentImage}.jpg`;
    const image = createFullSizeImage(imagePath);
    container.append(image);
    fullScreenElement?.classList.remove('hidden');
}
