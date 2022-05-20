/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
const hero = (() => {
    //create elements
    const container = document.createElement('section');
    const title = document.createElement('h1');

    //add content
    container.classList.add('hero');
    title.textContent = 'Contact Us';

    //append to container
    container.appendChild(title);

    return container;
})();

const content = (() => {
    //create elements
    const container = document.createElement('div');
    const location = document.createElement('section');
    const info = document.createElement('section');
    const locationH = document.createElement('h2');
    const locationS = document.createElement('span');
    const infoH = document.createElement('h2');
    const phone = document.createElement('span');
    const email = document.createElement('a');

    //add content
    container.classList.add('content');
    location.classList.add('card');
    info.classList.add('card');

    locationH.textContent = 'Location';
    locationS.textContent = '123 Main Street, Somewhereville AB';

    infoH.textContent = 'Reach Out';
    phone.textContent ='(555) 123-4567';
    email.setAttribute('href','mailto:#');
    email.setAttribute('target', '_blank');
    email.textContent = 'Click to email';

    //append children
    info.append(infoH, phone, email);
    location.append(locationH, locationS);
    container.append(location, info);

    return container
})();

const contact = (() => {
    const container = document.createElement('div');
    
    container.setAttribute('id', 'contact');
    container.classList.add('tab');

    container.append(hero, content);

    return container;
})();



/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footer": () => (/* binding */ footer)
/* harmony export */ });
const footer = (() => {
    //create elements
    const footer = document.createElement('footer');
    const footerContent = document.createElement('span');

    //add content
    footerContent.textContent = '©2022 Katelyn Grimoldby';

    //append children
    footer.appendChild(footerContent);

    return footer;
})();



/***/ }),

/***/ "./src/components/heading.js":
/*!***********************************!*\
  !*** ./src/components/heading.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "heading": () => (/* binding */ heading)
/* harmony export */ });
const heading = (() => {
    //creating elements
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');
    const logo = document.createElement('span');

    //Adding text content
    logo.classList.add('logo');
    logo.textContent = 'Restaurant';
    home.setAttribute('id', 'homeBtn');
    home.textContent = 'Home';
    menu.setAttribute('id', 'menuBtn');
    menu.textContent = 'Menu';
    contact.setAttribute('id', 'contactBtn')
    contact.textContent = 'Contact';

    //appending children
    ul.appendChild(home);
    ul.appendChild(menu);
    ul.appendChild(contact);
    nav.appendChild(ul);
    header.appendChild(logo);
    header.appendChild(nav);

    //return parent
    return header
})();



/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
const hero = (() => {
    //create elements
    const container = document.createElement('section');
    const title = document.createElement('h1');

    //add content
    container.classList.add('hero');
    title.textContent = 'Local Restaurant';

    //append to container
    container.appendChild(title);

    return container;
})();

const content = (() => {
    //create elements
    const container = document.createElement('div');
    const about = document.createElement('section');
    const hours = document.createElement('section');
    const aboutH = document.createElement('h2');
    const aboutP = document.createElement('p');
    const hoursH = document.createElement('h2');
    const hoursS = document.createElement('span');

    //add content
    container.classList.add('content');

    about.classList.add('card');
    aboutH.textContent = 'About Us';
    aboutP.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula risus vel metus molestie convallis. Curabitur tempor odio non massa aliquet elementum. Vestibulum quis fringilla neque. Pellentesque ac diam sit amet est condimentum vestibulum non ut nisi. Nunc vulputate ultricies lacus. Nulla tincidunt sagittis ligula in elementum. Sed convallis enim et dolor lobortis fermentum. Ut a suscipit justo, eu sodales eros. Morbi tempus accumsan metus in dapibus. Aenean in magna viverra mi efficitur tincidunt. Ut eget aliquet nunc. Maecenas lacinia tincidunt ex sit amet sollicitudin. Fusce vehicula mi ac viverra feugiat. Quisque eu arcu ipsum. Fusce pharetra rhoncus nibh ultricies elementum.';

    hours.classList.add('card');
    hoursH.textContent = 'Hours of Operation';
    hoursS.textContent = 'Open all week from 10am to 9pm';

    //appending children
    about.append(aboutH, aboutP);
    hours.append(hoursH, hoursS);
    container.append(about, hours);

    return container;
})();

const home = (() => {
    const container = document.createElement('div');

    container.setAttribute('id', 'home');
    container.classList.add('tab');

    container.append(hero, content);
    return container;
})();



/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
const hero = (() => {
    //create elements
    const container = document.createElement('section');
    const title = document.createElement('h1');

    //add content
    container.classList.add('hero');
    title.textContent = 'Menu';

    //append to container
    container.appendChild(title);

    return container;
})();

const content = (() => {
    //helper function
    const addMenuItem = (header, description, price) => {
        const item = document.createElement('section');
        const itemH = document.createElement('h3');
        const itemD = document.createElement('p');
        const itemP = document.createElement('span');

        item.classList.add('menuItem');
        itemH.textContent = header;
        itemD.textContent = description;
        itemP.textContent = price;
        
        item.appendChild(itemH);
        item.appendChild(itemD);
        item.appendChild(itemP);

        return item;
    }

    //create elements
    const container = document.createElement('div');
    const starters = document.createElement('section');
    const mains = document.createElement('section');
    const desserts = document.createElement('section');
    const startersH = document.createElement('h2');
    const mainsH = document.createElement('h2');
    const dessertsH = document.createElement('h2');
    
    //create menu items
    const starter1 = addMenuItem(
        'Flatbread',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula risus vel metus molestie convallis. Curabitur tempor odio non massa aliquet elementum.', 
        '$8'
    );
    const starter2 = addMenuItem(
        'Calamari',
        'Vestibulum quis fringilla neque. Pellentesque ac diam sit amet est condimentum vestibulum non ut nisi. Nunc vulputate ultricies lacus.', 
        '$12'
    );
    const starter3 = addMenuItem(
        'A salad', 
        'Morbi tempus accumsan metus in dapibus. Aenean in magna viverra mi efficitur tincidunt. Ut eget aliquet nunc. Maecenas lacinia tincidunt ex sit amet sollicitudin. Fusce vehicula mi ac viverra feugiat.', 
        '$10'
    );

    const main1 = addMenuItem(
        'Steak', 
        'Aliquam pellentesque justo nibh, vel finibus eros varius ut. Integer libero lorem, aliquet et erat et, lacinia gravida eros.', 
        '$19'
    );
    const main2 = addMenuItem(
        'Fish',
        'Cras non purus non massa suscipit laoreet sed in nunc. Aliquam enim lacus, dignissim vel maximus tincidunt, hendrerit et dolor. Fusce in gravida massa.',
        '$17'
    );
    const main3 = addMenuItem(
        'Chicken',
        'Pellentesque sed lorem justo. Morbi in ante eu neque tempor vehicula. Etiam posuere dui at varius dapibus.',
        '$15'
    )
    const main4 = addMenuItem(
        'Vegetarian',
        'Aliquam erat volutpat. Mauris quis lobortis mauris. In varius lacus non quam vehicula laoreet sit amet eu nunc.',
        "$18"
    );

    const dessert1 = addMenuItem(
        'Cheesecake',
        'Integer sit amet turpis vitae eros gravida fringilla. Nam viverra mattis sapien, a gravida metus interdum sed.',
        '$10'
    );

    //add content
    container.classList.add('content')
    starters.classList.add('menuCard');
    mains.classList.add('menuCard');
    desserts.classList.add('menuCard');

    startersH.textContent = 'Starters';
    mainsH.textContent = 'Main Entrees';
    dessertsH.textContent = 'Desserts';

    //append children
    starters.append(startersH, starter1, starter2, starter3);
    mains.append(mainsH, main1, main2, main3, main4);
    desserts.append(dessertsH, dessert1);
    container.append(starters, mains, desserts);

    return container;
})();

const menu = (() => {
    const container = document.createElement('div');
    
    container.setAttribute('id', 'menu');
    container.classList.add('tab');

    container.append(hero, content);

    return container;
})();



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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_heading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/heading.js */ "./src/components/heading.js");
/* harmony import */ var _components_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home.js */ "./src/components/home.js");
/* harmony import */ var _components_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu.js */ "./src/components/menu.js");
/* harmony import */ var _components_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact.js */ "./src/components/contact.js");
/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer.js */ "./src/components/footer.js");






(() => {
    //initial page load
    const content = document.getElementById('content');
    content.append(_components_heading_js__WEBPACK_IMPORTED_MODULE_0__.heading, _components_home_js__WEBPACK_IMPORTED_MODULE_1__.home, _components_footer_js__WEBPACK_IMPORTED_MODULE_4__.footer);

    //btn variables
    const homeBtn = document.getElementById('homeBtn');
    const menuBtn = document.getElementById('menuBtn');
    const conatctBtn = document.getElementById('contactBtn');

    //event listeners
    homeBtn.addEventListener('click', () => {
        //removes current tab
        _components_heading_js__WEBPACK_IMPORTED_MODULE_0__.heading.nextElementSibling.remove();

        //inputs specified tab
        _components_heading_js__WEBPACK_IMPORTED_MODULE_0__.heading.insertAdjacentElement('afterend', _components_home_js__WEBPACK_IMPORTED_MODULE_1__.home);
    })
    menuBtn.addEventListener('click', () => {
        //removes current tab
        _components_heading_js__WEBPACK_IMPORTED_MODULE_0__.heading.nextElementSibling.remove();

        //inputs specified tab
        _components_heading_js__WEBPACK_IMPORTED_MODULE_0__.heading.insertAdjacentElement('afterend', _components_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu);
    })
    contactBtn.addEventListener('click', () => {
        //removes current tab
        _components_heading_js__WEBPACK_IMPORTED_MODULE_0__.heading.nextElementSibling.remove();

        //inputs specified tab
        _components_heading_js__WEBPACK_IMPORTED_MODULE_0__.heading.insertAdjacentElement('afterend', _components_contact_js__WEBPACK_IMPORTED_MODULE_3__.contact);
    })
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDekREO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7O1VDcEhEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmdEO0FBQ047QUFDQTtBQUNNO0FBQ0Y7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBTyxFQUFFLHFEQUFJLEVBQUUseURBQU07O0FBRXhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUZBQWlDOztBQUV6QztBQUNBLFFBQVEsaUZBQTZCLGFBQWEscURBQUk7QUFDdEQsS0FBSztBQUNMO0FBQ0E7QUFDQSxRQUFRLHFGQUFpQzs7QUFFekM7QUFDQSxRQUFRLGlGQUE2QixhQUFhLHFEQUFJO0FBQ3RELEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUSxxRkFBaUM7O0FBRXpDO0FBQ0EsUUFBUSxpRkFBNkIsYUFBYSwyREFBTztBQUN6RCxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoZXJvID0gKCgpID0+IHtcbiAgICAvL2NyZWF0ZSBlbGVtZW50c1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICAvL2FkZCBjb250ZW50XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcblxuICAgIC8vYXBwZW5kIHRvIGNvbnRhaW5lclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufSkoKTtcblxuY29uc3QgY29udGVudCA9ICgoKSA9PiB7XG4gICAgLy9jcmVhdGUgZWxlbWVudHNcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IGxvY2F0aW9uSCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgbG9jYXRpb25TID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGluZm9IID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIC8vYWRkIGNvbnRlbnRcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcblxuICAgIGxvY2F0aW9uSC50ZXh0Q29udGVudCA9ICdMb2NhdGlvbic7XG4gICAgbG9jYXRpb25TLnRleHRDb250ZW50ID0gJzEyMyBNYWluIFN0cmVldCwgU29tZXdoZXJldmlsbGUgQUInO1xuXG4gICAgaW5mb0gudGV4dENvbnRlbnQgPSAnUmVhY2ggT3V0JztcbiAgICBwaG9uZS50ZXh0Q29udGVudCA9Jyg1NTUpIDEyMy00NTY3JztcbiAgICBlbWFpbC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCdtYWlsdG86IycpO1xuICAgIGVtYWlsLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgIGVtYWlsLnRleHRDb250ZW50ID0gJ0NsaWNrIHRvIGVtYWlsJztcblxuICAgIC8vYXBwZW5kIGNoaWxkcmVuXG4gICAgaW5mby5hcHBlbmQoaW5mb0gsIHBob25lLCBlbWFpbCk7XG4gICAgbG9jYXRpb24uYXBwZW5kKGxvY2F0aW9uSCwgbG9jYXRpb25TKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGxvY2F0aW9uLCBpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXJcbn0pKCk7XG5cbmNvbnN0IGNvbnRhY3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGhlcm8sIGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0pKCk7XG5cbmV4cG9ydCB7Y29udGFjdH0iLCJjb25zdCBmb290ZXIgPSAoKCkgPT4ge1xuICAgIC8vY3JlYXRlIGVsZW1lbnRzXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgIC8vYWRkIGNvbnRlbnRcbiAgICBmb290ZXJDb250ZW50LnRleHRDb250ZW50ID0gJ8KpMjAyMiBLYXRlbHluIEdyaW1vbGRieSc7XG5cbiAgICAvL2FwcGVuZCBjaGlsZHJlblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJDb250ZW50KTtcblxuICAgIHJldHVybiBmb290ZXI7XG59KSgpO1xuXG5leHBvcnQge2Zvb3Rlcn07IiwiY29uc3QgaGVhZGluZyA9ICgoKSA9PiB7XG4gICAgLy9jcmVhdGluZyBlbGVtZW50c1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgLy9BZGRpbmcgdGV4dCBjb250ZW50XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICAgbG9nby50ZXh0Q29udGVudCA9ICdSZXN0YXVyYW50JztcbiAgICBob21lLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZUJ0bicpO1xuICAgIGhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVCdG4nKTtcbiAgICBtZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIGNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0QnRuJylcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gICAgLy9hcHBlbmRpbmcgY2hpbGRyZW5cbiAgICB1bC5hcHBlbmRDaGlsZChob21lKTtcbiAgICB1bC5hcHBlbmRDaGlsZChtZW51KTtcbiAgICB1bC5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIC8vcmV0dXJuIHBhcmVudFxuICAgIHJldHVybiBoZWFkZXJcbn0pKCk7XG5cbmV4cG9ydCB7aGVhZGluZ30iLCJjb25zdCBoZXJvID0gKCgpID0+IHtcbiAgICAvL2NyZWF0ZSBlbGVtZW50c1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICAvL2FkZCBjb250ZW50XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdMb2NhbCBSZXN0YXVyYW50JztcblxuICAgIC8vYXBwZW5kIHRvIGNvbnRhaW5lclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufSkoKTtcblxuY29uc3QgY29udGVudCA9ICgoKSA9PiB7XG4gICAgLy9jcmVhdGUgZWxlbWVudHNcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBhYm91dEggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGFib3V0UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBob3Vyc0ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGhvdXJzUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgIC8vYWRkIGNvbnRlbnRcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuXG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgIGFib3V0SC50ZXh0Q29udGVudCA9ICdBYm91dCBVcyc7XG4gICAgYWJvdXRQLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hdXJpcyB2ZWhpY3VsYSByaXN1cyB2ZWwgbWV0dXMgbW9sZXN0aWUgY29udmFsbGlzLiBDdXJhYml0dXIgdGVtcG9yIG9kaW8gbm9uIG1hc3NhIGFsaXF1ZXQgZWxlbWVudHVtLiBWZXN0aWJ1bHVtIHF1aXMgZnJpbmdpbGxhIG5lcXVlLiBQZWxsZW50ZXNxdWUgYWMgZGlhbSBzaXQgYW1ldCBlc3QgY29uZGltZW50dW0gdmVzdGlidWx1bSBub24gdXQgbmlzaS4gTnVuYyB2dWxwdXRhdGUgdWx0cmljaWVzIGxhY3VzLiBOdWxsYSB0aW5jaWR1bnQgc2FnaXR0aXMgbGlndWxhIGluIGVsZW1lbnR1bS4gU2VkIGNvbnZhbGxpcyBlbmltIGV0IGRvbG9yIGxvYm9ydGlzIGZlcm1lbnR1bS4gVXQgYSBzdXNjaXBpdCBqdXN0bywgZXUgc29kYWxlcyBlcm9zLiBNb3JiaSB0ZW1wdXMgYWNjdW1zYW4gbWV0dXMgaW4gZGFwaWJ1cy4gQWVuZWFuIGluIG1hZ25hIHZpdmVycmEgbWkgZWZmaWNpdHVyIHRpbmNpZHVudC4gVXQgZWdldCBhbGlxdWV0IG51bmMuIE1hZWNlbmFzIGxhY2luaWEgdGluY2lkdW50IGV4IHNpdCBhbWV0IHNvbGxpY2l0dWRpbi4gRnVzY2UgdmVoaWN1bGEgbWkgYWMgdml2ZXJyYSBmZXVnaWF0LiBRdWlzcXVlIGV1IGFyY3UgaXBzdW0uIEZ1c2NlIHBoYXJldHJhIHJob25jdXMgbmliaCB1bHRyaWNpZXMgZWxlbWVudHVtLic7XG5cbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgaG91cnNILnRleHRDb250ZW50ID0gJ0hvdXJzIG9mIE9wZXJhdGlvbic7XG4gICAgaG91cnNTLnRleHRDb250ZW50ID0gJ09wZW4gYWxsIHdlZWsgZnJvbSAxMGFtIHRvIDlwbSc7XG5cbiAgICAvL2FwcGVuZGluZyBjaGlsZHJlblxuICAgIGFib3V0LmFwcGVuZChhYm91dEgsIGFib3V0UCk7XG4gICAgaG91cnMuYXBwZW5kKGhvdXJzSCwgaG91cnNTKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGFib3V0LCBob3Vycyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufSkoKTtcblxuY29uc3QgaG9tZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChoZXJvLCBjb250ZW50KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufSkoKTtcblxuZXhwb3J0IHtob21lfSIsImNvbnN0IGhlcm8gPSAoKCkgPT4ge1xuICAgIC8vY3JlYXRlIGVsZW1lbnRzXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgIC8vYWRkIGNvbnRlbnRcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG4gICAgLy9hcHBlbmQgdG8gY29udGFpbmVyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59KSgpO1xuXG5jb25zdCBjb250ZW50ID0gKCgpID0+IHtcbiAgICAvL2hlbHBlciBmdW5jdGlvblxuICAgIGNvbnN0IGFkZE1lbnVJdGVtID0gKGhlYWRlciwgZGVzY3JpcHRpb24sIHByaWNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1IID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY29uc3QgaXRlbUQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW0nKTtcbiAgICAgICAgaXRlbUgudGV4dENvbnRlbnQgPSBoZWFkZXI7XG4gICAgICAgIGl0ZW1ELnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgICAgIGl0ZW1QLnRleHRDb250ZW50ID0gcHJpY2U7XG4gICAgICAgIFxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1IKTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtRCk7XG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVApO1xuXG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIC8vY3JlYXRlIGVsZW1lbnRzXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc3RhcnRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3QgbWFpbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3QgZGVzc2VydHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3Qgc3RhcnRlcnNIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBtYWluc0ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGRlc3NlcnRzSCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgXG4gICAgLy9jcmVhdGUgbWVudSBpdGVtc1xuICAgIGNvbnN0IHN0YXJ0ZXIxID0gYWRkTWVudUl0ZW0oXG4gICAgICAgICdGbGF0YnJlYWQnLFxuICAgICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWF1cmlzIHZlaGljdWxhIHJpc3VzIHZlbCBtZXR1cyBtb2xlc3RpZSBjb252YWxsaXMuIEN1cmFiaXR1ciB0ZW1wb3Igb2RpbyBub24gbWFzc2EgYWxpcXVldCBlbGVtZW50dW0uJywgXG4gICAgICAgICckOCdcbiAgICApO1xuICAgIGNvbnN0IHN0YXJ0ZXIyID0gYWRkTWVudUl0ZW0oXG4gICAgICAgICdDYWxhbWFyaScsXG4gICAgICAgICdWZXN0aWJ1bHVtIHF1aXMgZnJpbmdpbGxhIG5lcXVlLiBQZWxsZW50ZXNxdWUgYWMgZGlhbSBzaXQgYW1ldCBlc3QgY29uZGltZW50dW0gdmVzdGlidWx1bSBub24gdXQgbmlzaS4gTnVuYyB2dWxwdXRhdGUgdWx0cmljaWVzIGxhY3VzLicsIFxuICAgICAgICAnJDEyJ1xuICAgICk7XG4gICAgY29uc3Qgc3RhcnRlcjMgPSBhZGRNZW51SXRlbShcbiAgICAgICAgJ0Egc2FsYWQnLCBcbiAgICAgICAgJ01vcmJpIHRlbXB1cyBhY2N1bXNhbiBtZXR1cyBpbiBkYXBpYnVzLiBBZW5lYW4gaW4gbWFnbmEgdml2ZXJyYSBtaSBlZmZpY2l0dXIgdGluY2lkdW50LiBVdCBlZ2V0IGFsaXF1ZXQgbnVuYy4gTWFlY2VuYXMgbGFjaW5pYSB0aW5jaWR1bnQgZXggc2l0IGFtZXQgc29sbGljaXR1ZGluLiBGdXNjZSB2ZWhpY3VsYSBtaSBhYyB2aXZlcnJhIGZldWdpYXQuJywgXG4gICAgICAgICckMTAnXG4gICAgKTtcblxuICAgIGNvbnN0IG1haW4xID0gYWRkTWVudUl0ZW0oXG4gICAgICAgICdTdGVhaycsIFxuICAgICAgICAnQWxpcXVhbSBwZWxsZW50ZXNxdWUganVzdG8gbmliaCwgdmVsIGZpbmlidXMgZXJvcyB2YXJpdXMgdXQuIEludGVnZXIgbGliZXJvIGxvcmVtLCBhbGlxdWV0IGV0IGVyYXQgZXQsIGxhY2luaWEgZ3JhdmlkYSBlcm9zLicsIFxuICAgICAgICAnJDE5J1xuICAgICk7XG4gICAgY29uc3QgbWFpbjIgPSBhZGRNZW51SXRlbShcbiAgICAgICAgJ0Zpc2gnLFxuICAgICAgICAnQ3JhcyBub24gcHVydXMgbm9uIG1hc3NhIHN1c2NpcGl0IGxhb3JlZXQgc2VkIGluIG51bmMuIEFsaXF1YW0gZW5pbSBsYWN1cywgZGlnbmlzc2ltIHZlbCBtYXhpbXVzIHRpbmNpZHVudCwgaGVuZHJlcml0IGV0IGRvbG9yLiBGdXNjZSBpbiBncmF2aWRhIG1hc3NhLicsXG4gICAgICAgICckMTcnXG4gICAgKTtcbiAgICBjb25zdCBtYWluMyA9IGFkZE1lbnVJdGVtKFxuICAgICAgICAnQ2hpY2tlbicsXG4gICAgICAgICdQZWxsZW50ZXNxdWUgc2VkIGxvcmVtIGp1c3RvLiBNb3JiaSBpbiBhbnRlIGV1IG5lcXVlIHRlbXBvciB2ZWhpY3VsYS4gRXRpYW0gcG9zdWVyZSBkdWkgYXQgdmFyaXVzIGRhcGlidXMuJyxcbiAgICAgICAgJyQxNSdcbiAgICApXG4gICAgY29uc3QgbWFpbjQgPSBhZGRNZW51SXRlbShcbiAgICAgICAgJ1ZlZ2V0YXJpYW4nLFxuICAgICAgICAnQWxpcXVhbSBlcmF0IHZvbHV0cGF0LiBNYXVyaXMgcXVpcyBsb2JvcnRpcyBtYXVyaXMuIEluIHZhcml1cyBsYWN1cyBub24gcXVhbSB2ZWhpY3VsYSBsYW9yZWV0IHNpdCBhbWV0IGV1IG51bmMuJyxcbiAgICAgICAgXCIkMThcIlxuICAgICk7XG5cbiAgICBjb25zdCBkZXNzZXJ0MSA9IGFkZE1lbnVJdGVtKFxuICAgICAgICAnQ2hlZXNlY2FrZScsXG4gICAgICAgICdJbnRlZ2VyIHNpdCBhbWV0IHR1cnBpcyB2aXRhZSBlcm9zIGdyYXZpZGEgZnJpbmdpbGxhLiBOYW0gdml2ZXJyYSBtYXR0aXMgc2FwaWVuLCBhIGdyYXZpZGEgbWV0dXMgaW50ZXJkdW0gc2VkLicsXG4gICAgICAgICckMTAnXG4gICAgKTtcblxuICAgIC8vYWRkIGNvbnRlbnRcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpXG4gICAgc3RhcnRlcnMuY2xhc3NMaXN0LmFkZCgnbWVudUNhcmQnKTtcbiAgICBtYWlucy5jbGFzc0xpc3QuYWRkKCdtZW51Q2FyZCcpO1xuICAgIGRlc3NlcnRzLmNsYXNzTGlzdC5hZGQoJ21lbnVDYXJkJyk7XG5cbiAgICBzdGFydGVyc0gudGV4dENvbnRlbnQgPSAnU3RhcnRlcnMnO1xuICAgIG1haW5zSC50ZXh0Q29udGVudCA9ICdNYWluIEVudHJlZXMnO1xuICAgIGRlc3NlcnRzSC50ZXh0Q29udGVudCA9ICdEZXNzZXJ0cyc7XG5cbiAgICAvL2FwcGVuZCBjaGlsZHJlblxuICAgIHN0YXJ0ZXJzLmFwcGVuZChzdGFydGVyc0gsIHN0YXJ0ZXIxLCBzdGFydGVyMiwgc3RhcnRlcjMpO1xuICAgIG1haW5zLmFwcGVuZChtYWluc0gsIG1haW4xLCBtYWluMiwgbWFpbjMsIG1haW40KTtcbiAgICBkZXNzZXJ0cy5hcHBlbmQoZGVzc2VydHNILCBkZXNzZXJ0MSk7XG4gICAgY29udGFpbmVyLmFwcGVuZChzdGFydGVycywgbWFpbnMsIGRlc3NlcnRzKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59KSgpO1xuXG5jb25zdCBtZW51ID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChoZXJvLCBjb250ZW50KTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59KSgpO1xuXG5leHBvcnQge21lbnV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtoZWFkaW5nfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGluZy5qcyc7XG5pbXBvcnQge2hvbWV9IGZyb20gJy4vY29tcG9uZW50cy9ob21lLmpzJztcbmltcG9ydCB7bWVudX0gZnJvbSAnLi9jb21wb25lbnRzL21lbnUuanMnO1xuaW1wb3J0IHtjb250YWN0fSBmcm9tICcuL2NvbXBvbmVudHMvY29udGFjdC5qcyc7XG5pbXBvcnQge2Zvb3Rlcn0gZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlci5qcyc7XG5cbigoKSA9PiB7XG4gICAgLy9pbml0aWFsIHBhZ2UgbG9hZFxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kKGhlYWRpbmcsIGhvbWUsIGZvb3Rlcik7XG5cbiAgICAvL2J0biB2YXJpYWJsZXNcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVCdG4nKTtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVCdG4nKTtcbiAgICBjb25zdCBjb25hdGN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RCdG4nKTtcblxuICAgIC8vZXZlbnQgbGlzdGVuZXJzXG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy9yZW1vdmVzIGN1cnJlbnQgdGFiXG4gICAgICAgIGhlYWRpbmcubmV4dEVsZW1lbnRTaWJsaW5nLnJlbW92ZSgpO1xuXG4gICAgICAgIC8vaW5wdXRzIHNwZWNpZmllZCB0YWJcbiAgICAgICAgaGVhZGluZy5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgaG9tZSk7XG4gICAgfSlcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvL3JlbW92ZXMgY3VycmVudCB0YWJcbiAgICAgICAgaGVhZGluZy5uZXh0RWxlbWVudFNpYmxpbmcucmVtb3ZlKCk7XG5cbiAgICAgICAgLy9pbnB1dHMgc3BlY2lmaWVkIHRhYlxuICAgICAgICBoZWFkaW5nLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBtZW51KTtcbiAgICB9KVxuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vcmVtb3ZlcyBjdXJyZW50IHRhYlxuICAgICAgICBoZWFkaW5nLm5leHRFbGVtZW50U2libGluZy5yZW1vdmUoKTtcblxuICAgICAgICAvL2lucHV0cyBzcGVjaWZpZWQgdGFiXG4gICAgICAgIGhlYWRpbmcuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGNvbnRhY3QpO1xuICAgIH0pXG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9