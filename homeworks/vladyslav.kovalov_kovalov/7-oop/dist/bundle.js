/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

const galleryElement = document.querySelector('[data-gallery]');
const fullScreenElement = document.querySelector('[data-full-screen]');
const imageSelectorElement = galleryElement === null || galleryElement === void 0 ? void 0 : galleryElement.addEventListener('click', event => {
    const { image: currentImage } = event.target.dataset;
    toggleFullSizeImage(currentImage, fullScreenElement);
});
fullScreenElement === null || fullScreenElement === void 0 ? void 0 : fullScreenElement.addEventListener('click', event => {
    const currentImage = event.target.dataset;
    console.log(currentImage);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDaEUsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDdkUsTUFBTSxvQkFBb0IsR0FFMUIsY0FBYyxhQUFkLGNBQWMsdUJBQWQsY0FBYyxDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtJQUM5QyxNQUFNLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBQyxHQUFJLEtBQUssQ0FBQyxNQUE0QixDQUFDLE9BQU8sQ0FBQztJQUMxRSxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUN6RCxDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFpQixhQUFqQixpQkFBaUIsdUJBQWpCLGlCQUFpQixDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtJQUNqRCxNQUFNLFlBQVksR0FBSSxLQUFLLENBQUMsTUFBNEIsQ0FBQyxPQUFPLENBQUM7SUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQixJQUFHLFlBQVksQ0FBQyxlQUFlLEtBQUssRUFBRSxFQUFFO1FBQ3BDLGlCQUFpQixhQUFqQixpQkFBaUIsdUJBQWpCLGlCQUFpQixDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsaUJBQWlCLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztLQUNwQztBQUNMLENBQUMsQ0FBQztBQUVGLGdEQUFnRDtBQUNoRCxrREFBa0Q7QUFDbEQsS0FBSztBQUVMLFNBQVMsbUJBQW1CLENBQUMsR0FBUTtJQUNqQyxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDZCQUE2QixDQUF3QixDQUFDO0lBQzlGLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFJLE9BQTRCLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDeEYsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFlBQVksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbEMsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQztBQUVELFNBQVMsbUJBQW1CLENBQUMsWUFBaUIsRUFBRSxTQUFjO0lBQzFELE1BQU0sU0FBUyxHQUFHLFdBQVcsWUFBWSxNQUFNLENBQUM7SUFDaEQsTUFBTSxLQUFLLEdBQUcsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0MsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixpQkFBaUIsYUFBakIsaUJBQWlCLHVCQUFqQixpQkFBaUIsQ0FBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2xELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1nYWxsZXJ5XScpO1xuY29uc3QgZnVsbFNjcmVlbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mdWxsLXNjcmVlbl0nKTtcbmNvbnN0IGltYWdlU2VsZWN0b3JFbGVtZW50ID1cblxuZ2FsbGVyeUVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgIGNvbnN0IHtpbWFnZTogY3VycmVudEltYWdlfSA9IChldmVudC50YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRhdGFzZXQ7XG4gICAgdG9nZ2xlRnVsbFNpemVJbWFnZShjdXJyZW50SW1hZ2UsIGZ1bGxTY3JlZW5FbGVtZW50KTtcbn0pO1xuXG5mdWxsU2NyZWVuRWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgY29uc3QgY3VycmVudEltYWdlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGF0YXNldDtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50SW1hZ2UpO1xuICAgIGlmKGN1cnJlbnRJbWFnZS5mdWxsU2NyZWVuSW1hZ2UgIT09ICcnKSB7XG4gICAgICAgIGZ1bGxTY3JlZW5FbGVtZW50Py5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgZnVsbFNjcmVlbkVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxufSlcblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coKGV2ZW50LnRhcmdldCBhcyBFdmVudFRhcmdldCkpO1xuLy8gfSlcblxuZnVuY3Rpb24gY3JlYXRlRnVsbFNpemVJbWFnZShzcmM6IGFueSkge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZnVsbC1zY3JlZW4tdGVtcGxhdGVdJykgYXMgSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgICBjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc3QgZWxlbWVudCA9IChjb250ZW50IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZ1bGwtc2NyZWVuLWltYWdlXScpO1xuICAgIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRnVsbFNpemVJbWFnZShjdXJyZW50SW1hZ2U6IGFueSwgY29udGFpbmVyOiBhbnkpIHtcbiAgICBjb25zdCBpbWFnZVBhdGggPSBgaW1nL2ltZy0ke2N1cnJlbnRJbWFnZX0uanBnYDtcbiAgICBjb25zdCBpbWFnZSA9IGNyZWF0ZUZ1bGxTaXplSW1hZ2UoaW1hZ2VQYXRoKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGltYWdlKTtcbiAgICBmdWxsU2NyZWVuRWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=