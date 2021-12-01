/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

const galleryElement = document.querySelector('[data-gallery]');
const fullScreenElement = document.querySelector('[data-full-screen]');
const imageSelectorElement = document.querySelector;
galleryElement === null || galleryElement === void 0 ? void 0 : galleryElement.addEventListener('click', event => {
    const { image: currentImage } = event.target.dataset;
    if (currentImage !== undefined)
        toggleFullSizeImage(currentImage, fullScreenElement);
});
fullScreenElement === null || fullScreenElement === void 0 ? void 0 : fullScreenElement.addEventListener('click', event => {
    const currentImage = event.target.dataset;
    if (currentImage.fullScreenImage !== '') {
        fullScreenElement === null || fullScreenElement === void 0 ? void 0 : fullScreenElement.classList.add('hidden');
        fullScreenElement.innerHTML = '';
    }
});
// window.addEventListener('keydown', event => {
//     console.log((event.target as EventTarget));
// })
function createFullSizeImage(src) {
    const template = document.querySelector('[data-full-screen-template]');
    const content = template.content.cloneNode(true);
    const element = content.querySelector('[data-full-screen-image]');
    element === null || element === void 0 ? void 0 : element.setAttribute('src', src);
    return element;
}
function toggleFullSizeImage(currentImage, container) {
    const imagePath = `img/img-${currentImage}.jpg`;
    const image = createFullSizeImage(imagePath);
    container.append(image);
    fullScreenElement === null || fullScreenElement === void 0 ? void 0 : fullScreenElement.classList.remove('hidden');
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDaEUsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDdkUsTUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsYUFBYTtBQUVuRCxjQUFjLGFBQWQsY0FBYyx1QkFBZCxjQUFjLENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQzlDLE1BQU0sRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFDLEdBQUksS0FBSyxDQUFDLE1BQTRCLENBQUMsT0FBTyxDQUFDO0lBQzFFLElBQUcsWUFBWSxLQUFLLFNBQVM7UUFBRSxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUN4RixDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFpQixhQUFqQixpQkFBaUIsdUJBQWpCLGlCQUFpQixDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtJQUNqRCxNQUFNLFlBQVksR0FBSSxLQUFLLENBQUMsTUFBNEIsQ0FBQyxPQUFPLENBQUM7SUFDakUsSUFBRyxZQUFZLENBQUMsZUFBZSxLQUFLLEVBQUUsRUFBRTtRQUNwQyxpQkFBaUIsYUFBakIsaUJBQWlCLHVCQUFqQixpQkFBaUIsQ0FBRSxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDcEM7QUFDTCxDQUFDLENBQUM7QUFFRixnREFBZ0Q7QUFDaEQsa0RBQWtEO0FBQ2xELEtBQUs7QUFFTCxTQUFTLG1CQUFtQixDQUFDLEdBQVE7SUFDakMsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBd0IsQ0FBQztJQUM5RixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBSSxPQUE0QixDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ3hGLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFFRCxTQUFTLG1CQUFtQixDQUFDLFlBQWlCLEVBQUUsU0FBYztJQUMxRCxNQUFNLFNBQVMsR0FBRyxXQUFXLFlBQVksTUFBTSxDQUFDO0lBQ2hELE1BQU0sS0FBSyxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsaUJBQWlCLGFBQWpCLGlCQUFpQix1QkFBakIsaUJBQWlCLENBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNsRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZ2FsbGVyeV0nKTtcbmNvbnN0IGZ1bGxTY3JlZW5FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZnVsbC1zY3JlZW5dJyk7XG5jb25zdCBpbWFnZVNlbGVjdG9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JcblxuZ2FsbGVyeUVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgIGNvbnN0IHtpbWFnZTogY3VycmVudEltYWdlfSA9IChldmVudC50YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRhdGFzZXQ7XG4gICAgaWYoY3VycmVudEltYWdlICE9PSB1bmRlZmluZWQpIHRvZ2dsZUZ1bGxTaXplSW1hZ2UoY3VycmVudEltYWdlLCBmdWxsU2NyZWVuRWxlbWVudCk7XG59KTtcblxuZnVsbFNjcmVlbkVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRJbWFnZSA9IChldmVudC50YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRhdGFzZXQ7XG4gICAgaWYoY3VycmVudEltYWdlLmZ1bGxTY3JlZW5JbWFnZSAhPT0gJycpIHtcbiAgICAgICAgZnVsbFNjcmVlbkVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBmdWxsU2NyZWVuRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG59KVxuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcbi8vICAgICBjb25zb2xlLmxvZygoZXZlbnQudGFyZ2V0IGFzIEV2ZW50VGFyZ2V0KSk7XG4vLyB9KVxuXG5mdW5jdGlvbiBjcmVhdGVGdWxsU2l6ZUltYWdlKHNyYzogYW55KSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mdWxsLXNjcmVlbi10ZW1wbGF0ZV0nKSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50O1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBjb25zdCBlbGVtZW50ID0gKGNvbnRlbnQgYXMgSFRNTEltYWdlRWxlbWVudCkucXVlcnlTZWxlY3RvcignW2RhdGEtZnVsbC1zY3JlZW4taW1hZ2VdJyk7XG4gICAgZWxlbWVudD8uc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVGdWxsU2l6ZUltYWdlKGN1cnJlbnRJbWFnZTogYW55LCBjb250YWluZXI6IGFueSkge1xuICAgIGNvbnN0IGltYWdlUGF0aCA9IGBpbWcvaW1nLSR7Y3VycmVudEltYWdlfS5qcGdgO1xuICAgIGNvbnN0IGltYWdlID0gY3JlYXRlRnVsbFNpemVJbWFnZShpbWFnZVBhdGgpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoaW1hZ2UpO1xuICAgIGZ1bGxTY3JlZW5FbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==