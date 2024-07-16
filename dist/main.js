/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutpage.js":
/*!**************************!*\
  !*** ./src/aboutpage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadContactPage: () => (/* binding */ loadContactPage)
/* harmony export */ });
function loadContactPage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
  
    const heading = document.createElement('h2');
    heading.textContent = 'Contact Us';
  
    const address = document.createElement('p');
    address.textContent = '123 Restaurant Street, City, Country';
  
    const email = document.createElement('p');
    email.textContent = 'Email: info@myrestaurant.com';
  
    const phone = document.createElement('p');
    phone.textContent = 'Phone: +123 456 7890';
  
    contentDiv.appendChild(heading);
    contentDiv.appendChild(address);
    contentDiv.appendChild(email);
    contentDiv.appendChild(phone);
  }  

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHomePage: () => (/* binding */ loadHomePage)
/* harmony export */ });
function loadHomePage() {
    const contentDiv = document.getElementById('content');
  
    // Create elements
    const heading = document.createElement('h2');
    heading.textContent = 'Discover Our Delicious Cuisine';
  
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = `At My Restaurant, we pride ourselves on serving exquisite dishes made from the freshest ingredients sourced locally. Whether you're craving a hearty meal or a light snack, our menu has something for everyone.`;
  
    const paragraph2 = document.createElement('p');
    paragraph2.textContent = `Come and experience a warm and inviting atmosphere where every meal is a delightful experience.`;
  
    // Append elements to contentDiv
    contentDiv.appendChild(heading);
    contentDiv.appendChild(paragraph1);
    contentDiv.appendChild(paragraph2);
  }
  

/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenuPage: () => (/* binding */ loadMenuPage)
/* harmony export */ });
function loadMenuPage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
  
    const heading = document.createElement('h2');
    heading.textContent = 'Our Menu';
  
    const menuList = document.createElement('ul');
    const items = ['Appetizers', 'Main Courses', 'Desserts'];
  
    items.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      menuList.appendChild(listItem);
    });
  
    contentDiv.appendChild(heading);
    contentDiv.appendChild(menuList);
  }
  

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _menupage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menupage */ "./src/menupage.js");
/* harmony import */ var _aboutpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutpage */ "./src/aboutpage.js");




document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');

  // Initial load
  (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();

  // Event listeners for tab buttons
  document.getElementById('home').addEventListener('click', () => {
    contentDiv.innerHTML = '';
    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();
  });

  document.getElementById('menu').addEventListener('click', () => {
    contentDiv.innerHTML = '';
    (0,_menupage__WEBPACK_IMPORTED_MODULE_1__.loadMenuPage)();
  });

  document.getElementById('contact').addEventListener('click', () => {
    contentDiv.innerHTML = '';
    (0,_aboutpage__WEBPACK_IMPORTED_MODULE_2__.loadContactPage)();
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwQk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDbkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEM7QUFDQTtBQUNJOztBQUU5QztBQUNBOztBQUVBO0FBQ0EsRUFBRSx1REFBWTs7QUFFZDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFZO0FBQ2hCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksdURBQVk7QUFDaEIsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBSSwyREFBZTtBQUNuQixHQUFHO0FBQ0gsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0cGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbG9hZENvbnRhY3RQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XG4gIFxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XG4gIFxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICcxMjMgUmVzdGF1cmFudCBTdHJlZXQsIENpdHksIENvdW50cnknO1xuICBcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9ICdFbWFpbDogaW5mb0BteXJlc3RhdXJhbnQuY29tJztcbiAgXG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmUudGV4dENvbnRlbnQgPSAnUGhvbmU6ICsxMjMgNDU2IDc4OTAnO1xuICBcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChlbWFpbCk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwaG9uZSk7XG4gIH0gICIsImV4cG9ydCBmdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIFxuICAgIC8vIENyZWF0ZSBlbGVtZW50c1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnRGlzY292ZXIgT3VyIERlbGljaW91cyBDdWlzaW5lJztcbiAgXG4gICAgY29uc3QgcGFyYWdyYXBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhZ3JhcGgxLnRleHRDb250ZW50ID0gYEF0IE15IFJlc3RhdXJhbnQsIHdlIHByaWRlIG91cnNlbHZlcyBvbiBzZXJ2aW5nIGV4cXVpc2l0ZSBkaXNoZXMgbWFkZSBmcm9tIHRoZSBmcmVzaGVzdCBpbmdyZWRpZW50cyBzb3VyY2VkIGxvY2FsbHkuIFdoZXRoZXIgeW91J3JlIGNyYXZpbmcgYSBoZWFydHkgbWVhbCBvciBhIGxpZ2h0IHNuYWNrLCBvdXIgbWVudSBoYXMgc29tZXRoaW5nIGZvciBldmVyeW9uZS5gO1xuICBcbiAgICBjb25zdCBwYXJhZ3JhcGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmFncmFwaDIudGV4dENvbnRlbnQgPSBgQ29tZSBhbmQgZXhwZXJpZW5jZSBhIHdhcm0gYW5kIGludml0aW5nIGF0bW9zcGhlcmUgd2hlcmUgZXZlcnkgbWVhbCBpcyBhIGRlbGlnaHRmdWwgZXhwZXJpZW5jZS5gO1xuICBcbiAgICAvLyBBcHBlbmQgZWxlbWVudHMgdG8gY29udGVudERpdlxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGgxKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHBhcmFncmFwaDIpO1xuICB9XG4gICIsImV4cG9ydCBmdW5jdGlvbiBsb2FkTWVudVBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJztcbiAgXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdPdXIgTWVudSc7XG4gIFxuICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBpdGVtcyA9IFsnQXBwZXRpemVycycsICdNYWluIENvdXJzZXMnLCAnRGVzc2VydHMnXTtcbiAgXG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9KTtcbiAgXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVMaXN0KTtcbiAgfVxuICAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvYWRIb21lUGFnZSB9IGZyb20gXCIuL2hvbWVwYWdlXCI7XG5pbXBvcnQgeyBsb2FkTWVudVBhZ2UgfSBmcm9tIFwiLi9tZW51cGFnZVwiO1xuaW1wb3J0IHsgbG9hZENvbnRhY3RQYWdlIH0gZnJvbSBcIi4vYWJvdXRwYWdlXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgLy8gSW5pdGlhbCBsb2FkXG4gIGxvYWRIb21lUGFnZSgpO1xuXG4gIC8vIEV2ZW50IGxpc3RlbmVycyBmb3IgdGFiIGJ1dHRvbnNcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuICAgIGxvYWRIb21lUGFnZSgpO1xuICB9KTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgbG9hZE1lbnVQYWdlKCk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJztcbiAgICBsb2FkQ29udGFjdFBhZ2UoKTtcbiAgfSk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=