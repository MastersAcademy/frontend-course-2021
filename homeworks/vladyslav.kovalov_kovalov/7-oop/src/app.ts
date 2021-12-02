import { Gallery } from './gallery';
import { Uploader } from './uploader';
import { FullScreen } from './fullscreen';

new Gallery(
    document.querySelector('[data-gallery]') as HTMLElement,
    FullScreen,
    Uploader
);
