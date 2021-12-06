import { Gallery } from './gallery';
import { FullScreen } from './fullscreen';
import {Uploader} from './uploader';
import { Storage } from './imagestorage';

const galleryElement: HTMLElement | null = document.querySelector<HTMLElement>('[data-gallery]');
const fullScreenElement: HTMLElement | null = document.querySelector<HTMLElement>('[data-full-screen]');
const fullScreenCloseElement: HTMLElement | null = document.querySelector<HTMLElement>('[data-full-screen-close]');
const fullScreenImage: HTMLElement | null = document.querySelector<HTMLElement>('[data-full-screen-image]');
const inputElement: HTMLElement | null = document.querySelector<HTMLElement>('[data-image-uploader-input]');
const inputFullScreenElement: HTMLElement | null = document.querySelector<HTMLElement>('[data-image-uploader-full-screen]');
const imageStorage = new Storage();

new Gallery(
    imageStorage,
    galleryElement,

    new FullScreen(
        fullScreenElement,
        fullScreenCloseElement,
        fullScreenImage
    ),

    new Uploader(
        imageStorage,
        inputElement,
        inputFullScreenElement,
    )
);



