export class AnimationLoading {
    constructor(
        imageElements,
    ) {
        this.imageElements = imageElements;
        this.initObserver();
    }

    initObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated-image');
                    observer.unobserve(entry.target);
                }
            });
        });

        this.imageElements.forEach((image) => observer.observe(image));
    }
}
