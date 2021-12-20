import { ThemeToggler } from './themetoggler.js';
import { ScrollUpButton } from './scrollupbutton.js';
import { AnimationLoading } from './animationLoading.js';

function initThemeToggler() {
    return new ThemeToggler(
        document.querySelector('[data-theme-toggler]'),
        document.querySelector('[data-page-container]'),
        document.querySelector('[data-theme]'),
        document.querySelector('[data-theme-toggler-icon]'),
    );
}

function initScrollUpButton() {
    return new ScrollUpButton(
        document.querySelector('[data-main-section]'),
        document.querySelector('[data-scroll-up-button]'),
    );
}

function initAnimationLoading() {
    return new AnimationLoading(
        document.querySelectorAll('[data-page-image]'),
    );
}

initThemeToggler();
initScrollUpButton();
initAnimationLoading();
