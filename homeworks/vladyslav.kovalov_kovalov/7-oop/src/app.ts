import { Gallery } from './Gallery';
import { FullScreen } from './FullScreen';
import { Uploader } from './Uploader';
import { Storage } from './ImageStorage';

const galleryElement: HTMLElement | null = document.querySelector<HTMLElement>('[data-gallery]');
const fullScreenElement: HTMLElement | null = document.querySelector<HTMLElement>('[data-full-screen]');
const fullScreenCloseElement: HTMLElement | null = document.querySelector<HTMLElement>('[data-full-screen-close]');
const fullScreenImage: HTMLElement | null = document.querySelector<HTMLElement>('[data-full-screen-image]');
const inputElement: HTMLElement | null = document.querySelector<HTMLElement>('[data-image-uploader-input]');
const inputFullScreenElement: HTMLElement | null = document.querySelector<HTMLElement>('[data-image-uploader-full-screen]');

new Gallery(
    new Storage(),
    galleryElement,

    new FullScreen(
        fullScreenElement,
        fullScreenCloseElement,
        fullScreenImage
    ),

    new Uploader(
        inputElement,
        inputFullScreenElement,
    )
);



