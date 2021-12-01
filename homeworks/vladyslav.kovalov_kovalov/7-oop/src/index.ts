const galleryElement = document.querySelector('[data-gallery]')!;
const fullScreenElement = document.querySelector('[data-full-screen]');
const imageUploaderElement = document.querySelector('[data-image-upload]');

galleryElement?.addEventListener('click', event => {
    const image = (event.target as HTMLButtonElement);
    const imageSource = image.getAttribute('src');
    if(imageSource !== null) toggleFullSizeImage(imageSource, fullScreenElement);
});

fullScreenElement?.addEventListener('click', event => {
    const currentImage = (event.target as HTMLButtonElement).dataset;
    if(currentImage.fullScreenImage !== '') {
        fullScreenElement?.classList.add('hidden');
        fullScreenElement.innerHTML = '';
    }
})

function createFullSizeImage(src: any) {
    const template = document.querySelector('[data-full-screen-template]') as HTMLTemplateElement;
    const content = template.content.cloneNode(true);
    const element = (content as HTMLImageElement).querySelector('[data-full-screen-image]');
    element?.setAttribute('src', src);
    return element;
}

function toggleFullSizeImage(imageSource: any, container: any) {
    const imagePath = imageSource;
    const image = createFullSizeImage(imagePath);
    container.append(image);
    fullScreenElement?.classList.remove('hidden');
}

imageUploaderElement?.addEventListener('change', event => {
    const element = (event.target as HTMLInputElement);
    const file = (element.files as FileList)[0];

    getBase64(file).then(imageSrc => {
        addImage(imageSrc, galleryElement);
    });
})

function getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
}

function addImage(imageSrc: any, container: any) {
    const template = document.querySelector('[data-new-image-template]') as HTMLTemplateElement;
    const content = template.content.cloneNode(true);
    const element = (content as HTMLImageElement).querySelector('[data-new-image-template-element]');
    element?.setAttribute('src', imageSrc);
    element?.removeAttribute('data-new-image-template-element');
    container.append(element);
}
