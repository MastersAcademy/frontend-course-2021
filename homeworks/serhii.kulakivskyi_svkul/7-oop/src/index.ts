import { ImageLoader } from './js/image-loader';
import { ImageGallery } from './js/image-gallery';

import './css/normalize.css';
import './css/animations.css';
import './css/index.css';

const imageControl: Element = document.querySelector('[data-image]');

new ImageLoader(imageControl);
new ImageGallery(imageControl);
