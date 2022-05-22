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
    const image = document.createElement('img')
    const title = document.createElement('h1');

    //add content
    container.classList.add('hero');
    image.setAttribute('src', './../../dist/hero_img.jpg')
    title.textContent = 'Contact Us';

    //append to container
    container.append(title, image);

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
    home.classList.add('active');
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
    const image = document.createElement('img')
    const title = document.createElement('h1');

    //add content
    container.classList.add('hero');
    image.setAttribute('src', './../../dist/hero_img.jpg')
    title.textContent = 'Local Restaurant';

    //append to container
    container.append(title, image);

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
    const image = document.createElement('img')
    const title = document.createElement('h1');

    //add content
    container.classList.add('hero');
    image.setAttribute('src', './../../dist/hero_img.jpg')
    title.textContent = 'Our Menu';

    //append to container
    container.append(title, image);

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
    const contactBtn = document.getElementById('contactBtn');

    //helper function
    const removeActive = () => {
        const btns = document.querySelectorAll('li');
        btns.forEach(e => {
            if(e.classList.contains('active')) {
                e.classList.remove('active');
            }
        });
    }

    //event listeners
    homeBtn.addEventListener('click', () => {
        //removes current tab
        _components_heading_js__WEBPACK_IMPORTED_MODULE_0__.heading.nextElementSibling.remove();
        removeActive();

        //inputs specified tab
        _components_heading_js__WEBPACK_IMPORTED_MODULE_0__.heading.insertAdjacentElement('afterend', _components_home_js__WEBPACK_IMPORTED_MODULE_1__.home);
        homeBtn.classList.add('active');
    })
    menuBtn.addEventListener('click', () => {
        //removes current tab
        _components_heading_js__WEBPACK_IMPORTED_MODULE_0__.heading.nextElementSibling.remove();
        removeActive();

        //inputs specified tab
        _components_heading_js__WEBPACK_IMPORTED_MODULE_0__.heading.insertAdjacentElement('afterend', _components_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu);
        menuBtn.classList.add('active');
    })
    contactBtn.addEventListener('click', () => {
        //removes current tab
        _components_heading_js__WEBPACK_IMPORTED_MODULE_0__.heading.nextElementSibling.remove();
        removeActive();

        //inputs specified tab
        _components_heading_js__WEBPACK_IMPORTED_MODULE_0__.heading.insertAdjacentElement('afterend', _components_contact_js__WEBPACK_IMPORTED_MODULE_3__.contact);
        contactBtn.classList.add('active');
    })
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzNERDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7VUN0SEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZ0Q7QUFDTjtBQUNBO0FBQ007QUFDRjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFPLEVBQUUscURBQUksRUFBRSx5REFBTTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRkFBaUM7QUFDekM7O0FBRUE7QUFDQSxRQUFRLGlGQUE2QixhQUFhLHFEQUFJO0FBQ3REO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxRQUFRLHFGQUFpQztBQUN6Qzs7QUFFQTtBQUNBLFFBQVEsaUZBQTZCLGFBQWEscURBQUk7QUFDdEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFFBQVEscUZBQWlDO0FBQ3pDOztBQUVBO0FBQ0EsUUFBUSxpRkFBNkIsYUFBYSwyREFBTztBQUN6RDtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlcm8gPSAoKCkgPT4ge1xuICAgIC8vY3JlYXRlIGVsZW1lbnRzXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICAvL2FkZCBjb250ZW50XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLy4uLy4uL2Rpc3QvaGVyb19pbWcuanBnJylcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcblxuICAgIC8vYXBwZW5kIHRvIGNvbnRhaW5lclxuICAgIGNvbnRhaW5lci5hcHBlbmQodGl0bGUsIGltYWdlKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59KSgpO1xuXG5jb25zdCBjb250ZW50ID0gKCgpID0+IHtcbiAgICAvL2NyZWF0ZSBlbGVtZW50c1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3QgbG9jYXRpb25IID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBsb2NhdGlvblMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgaW5mb0ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgLy9hZGQgY29udGVudFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gICAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuXG4gICAgbG9jYXRpb25ILnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJztcbiAgICBsb2NhdGlvblMudGV4dENvbnRlbnQgPSAnMTIzIE1haW4gU3RyZWV0LCBTb21ld2hlcmV2aWxsZSBBQic7XG5cbiAgICBpbmZvSC50ZXh0Q29udGVudCA9ICdSZWFjaCBPdXQnO1xuICAgIHBob25lLnRleHRDb250ZW50ID0nKDU1NSkgMTIzLTQ1NjcnO1xuICAgIGVtYWlsLnNldEF0dHJpYnV0ZSgnaHJlZicsJ21haWx0bzojJyk7XG4gICAgZW1haWwuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgZW1haWwudGV4dENvbnRlbnQgPSAnQ2xpY2sgdG8gZW1haWwnO1xuXG4gICAgLy9hcHBlbmQgY2hpbGRyZW5cbiAgICBpbmZvLmFwcGVuZChpbmZvSCwgcGhvbmUsIGVtYWlsKTtcbiAgICBsb2NhdGlvbi5hcHBlbmQobG9jYXRpb25ILCBsb2NhdGlvblMpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQobG9jYXRpb24sIGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lclxufSkoKTtcblxuY29uc3QgY29udGFjdCA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdCcpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQoaGVybywgY29udGVudCk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufSkoKTtcblxuZXhwb3J0IHtjb250YWN0fSIsImNvbnN0IGZvb3RlciA9ICgoKSA9PiB7XG4gICAgLy9jcmVhdGUgZWxlbWVudHNcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBjb25zdCBmb290ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgLy9hZGQgY29udGVudFxuICAgIGZvb3RlckNvbnRlbnQudGV4dENvbnRlbnQgPSAnwqkyMDIyIEthdGVseW4gR3JpbW9sZGJ5JztcblxuICAgIC8vYXBwZW5kIGNoaWxkcmVuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn0pKCk7XG5cbmV4cG9ydCB7Zm9vdGVyfTsiLCJjb25zdCBoZWFkaW5nID0gKCgpID0+IHtcbiAgICAvL2NyZWF0aW5nIGVsZW1lbnRzXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAvL0FkZGluZyB0ZXh0IGNvbnRlbnRcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICBsb2dvLnRleHRDb250ZW50ID0gJ1Jlc3RhdXJhbnQnO1xuICAgIGhvbWUuc2V0QXR0cmlidXRlKCdpZCcsICdob21lQnRuJyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBob21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51QnRuJyk7XG4gICAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBjb250YWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdEJ0bicpXG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICAgIC8vYXBwZW5kaW5nIGNoaWxkcmVuXG4gICAgdWwuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICAvL3JldHVybiBwYXJlbnRcbiAgICByZXR1cm4gaGVhZGVyXG59KSgpO1xuXG5leHBvcnQge2hlYWRpbmd9IiwiY29uc3QgaGVybyA9ICgoKSA9PiB7XG4gICAgLy9jcmVhdGUgZWxlbWVudHNcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgIC8vYWRkIGNvbnRlbnRcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vLi4vLi4vZGlzdC9oZXJvX2ltZy5qcGcnKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0xvY2FsIFJlc3RhdXJhbnQnO1xuXG4gICAgLy9hcHBlbmQgdG8gY29udGFpbmVyXG4gICAgY29udGFpbmVyLmFwcGVuZCh0aXRsZSwgaW1hZ2UpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0pKCk7XG5cbmNvbnN0IGNvbnRlbnQgPSAoKCkgPT4ge1xuICAgIC8vY3JlYXRlIGVsZW1lbnRzXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3QgYWJvdXRIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBhYm91dFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaG91cnNIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBob3Vyc1MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAvL2FkZCBjb250ZW50XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICBhYm91dEgudGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnO1xuICAgIGFib3V0UC50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYXVyaXMgdmVoaWN1bGEgcmlzdXMgdmVsIG1ldHVzIG1vbGVzdGllIGNvbnZhbGxpcy4gQ3VyYWJpdHVyIHRlbXBvciBvZGlvIG5vbiBtYXNzYSBhbGlxdWV0IGVsZW1lbnR1bS4gVmVzdGlidWx1bSBxdWlzIGZyaW5naWxsYSBuZXF1ZS4gUGVsbGVudGVzcXVlIGFjIGRpYW0gc2l0IGFtZXQgZXN0IGNvbmRpbWVudHVtIHZlc3RpYnVsdW0gbm9uIHV0IG5pc2kuIE51bmMgdnVscHV0YXRlIHVsdHJpY2llcyBsYWN1cy4gTnVsbGEgdGluY2lkdW50IHNhZ2l0dGlzIGxpZ3VsYSBpbiBlbGVtZW50dW0uIFNlZCBjb252YWxsaXMgZW5pbSBldCBkb2xvciBsb2JvcnRpcyBmZXJtZW50dW0uIFV0IGEgc3VzY2lwaXQganVzdG8sIGV1IHNvZGFsZXMgZXJvcy4gTW9yYmkgdGVtcHVzIGFjY3Vtc2FuIG1ldHVzIGluIGRhcGlidXMuIEFlbmVhbiBpbiBtYWduYSB2aXZlcnJhIG1pIGVmZmljaXR1ciB0aW5jaWR1bnQuIFV0IGVnZXQgYWxpcXVldCBudW5jLiBNYWVjZW5hcyBsYWNpbmlhIHRpbmNpZHVudCBleCBzaXQgYW1ldCBzb2xsaWNpdHVkaW4uIEZ1c2NlIHZlaGljdWxhIG1pIGFjIHZpdmVycmEgZmV1Z2lhdC4gUXVpc3F1ZSBldSBhcmN1IGlwc3VtLiBGdXNjZSBwaGFyZXRyYSByaG9uY3VzIG5pYmggdWx0cmljaWVzIGVsZW1lbnR1bS4nO1xuXG4gICAgaG91cnMuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgIGhvdXJzSC50ZXh0Q29udGVudCA9ICdIb3VycyBvZiBPcGVyYXRpb24nO1xuICAgIGhvdXJzUy50ZXh0Q29udGVudCA9ICdPcGVuIGFsbCB3ZWVrIGZyb20gMTBhbSB0byA5cG0nO1xuXG4gICAgLy9hcHBlbmRpbmcgY2hpbGRyZW5cbiAgICBhYm91dC5hcHBlbmQoYWJvdXRILCBhYm91dFApO1xuICAgIGhvdXJzLmFwcGVuZChob3Vyc0gsIGhvdXJzUyk7XG4gICAgY29udGFpbmVyLmFwcGVuZChhYm91dCwgaG91cnMpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0pKCk7XG5cbmNvbnN0IGhvbWUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZScpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQoaGVybywgY29udGVudCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0pKCk7XG5cbmV4cG9ydCB7aG9tZX0iLCJjb25zdCBoZXJvID0gKCgpID0+IHtcbiAgICAvL2NyZWF0ZSBlbGVtZW50c1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgLy9hZGQgY29udGVudFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi8uLi8uLi9kaXN0L2hlcm9faW1nLmpwZycpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnT3VyIE1lbnUnO1xuXG4gICAgLy9hcHBlbmQgdG8gY29udGFpbmVyXG4gICAgY29udGFpbmVyLmFwcGVuZCh0aXRsZSwgaW1hZ2UpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0pKCk7XG5cbmNvbnN0IGNvbnRlbnQgPSAoKCkgPT4ge1xuICAgIC8vaGVscGVyIGZ1bmN0aW9uXG4gICAgY29uc3QgYWRkTWVudUl0ZW0gPSAoaGVhZGVyLCBkZXNjcmlwdGlvbiwgcHJpY2UpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgY29uc3QgaXRlbUggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjb25zdCBpdGVtRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgaXRlbVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbScpO1xuICAgICAgICBpdGVtSC50ZXh0Q29udGVudCA9IGhlYWRlcjtcbiAgICAgICAgaXRlbUQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgaXRlbVAudGV4dENvbnRlbnQgPSBwcmljZTtcbiAgICAgICAgXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUgpO1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1EKTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtUCk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgLy9jcmVhdGUgZWxlbWVudHNcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzdGFydGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBtYWlucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBkZXNzZXJ0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBzdGFydGVyc0ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IG1haW5zSCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgZGVzc2VydHNIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBcbiAgICAvL2NyZWF0ZSBtZW51IGl0ZW1zXG4gICAgY29uc3Qgc3RhcnRlcjEgPSBhZGRNZW51SXRlbShcbiAgICAgICAgJ0ZsYXRicmVhZCcsXG4gICAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYXVyaXMgdmVoaWN1bGEgcmlzdXMgdmVsIG1ldHVzIG1vbGVzdGllIGNvbnZhbGxpcy4gQ3VyYWJpdHVyIHRlbXBvciBvZGlvIG5vbiBtYXNzYSBhbGlxdWV0IGVsZW1lbnR1bS4nLCBcbiAgICAgICAgJyQ4J1xuICAgICk7XG4gICAgY29uc3Qgc3RhcnRlcjIgPSBhZGRNZW51SXRlbShcbiAgICAgICAgJ0NhbGFtYXJpJyxcbiAgICAgICAgJ1Zlc3RpYnVsdW0gcXVpcyBmcmluZ2lsbGEgbmVxdWUuIFBlbGxlbnRlc3F1ZSBhYyBkaWFtIHNpdCBhbWV0IGVzdCBjb25kaW1lbnR1bSB2ZXN0aWJ1bHVtIG5vbiB1dCBuaXNpLiBOdW5jIHZ1bHB1dGF0ZSB1bHRyaWNpZXMgbGFjdXMuJywgXG4gICAgICAgICckMTInXG4gICAgKTtcbiAgICBjb25zdCBzdGFydGVyMyA9IGFkZE1lbnVJdGVtKFxuICAgICAgICAnQSBzYWxhZCcsIFxuICAgICAgICAnTW9yYmkgdGVtcHVzIGFjY3Vtc2FuIG1ldHVzIGluIGRhcGlidXMuIEFlbmVhbiBpbiBtYWduYSB2aXZlcnJhIG1pIGVmZmljaXR1ciB0aW5jaWR1bnQuIFV0IGVnZXQgYWxpcXVldCBudW5jLiBNYWVjZW5hcyBsYWNpbmlhIHRpbmNpZHVudCBleCBzaXQgYW1ldCBzb2xsaWNpdHVkaW4uIEZ1c2NlIHZlaGljdWxhIG1pIGFjIHZpdmVycmEgZmV1Z2lhdC4nLCBcbiAgICAgICAgJyQxMCdcbiAgICApO1xuXG4gICAgY29uc3QgbWFpbjEgPSBhZGRNZW51SXRlbShcbiAgICAgICAgJ1N0ZWFrJywgXG4gICAgICAgICdBbGlxdWFtIHBlbGxlbnRlc3F1ZSBqdXN0byBuaWJoLCB2ZWwgZmluaWJ1cyBlcm9zIHZhcml1cyB1dC4gSW50ZWdlciBsaWJlcm8gbG9yZW0sIGFsaXF1ZXQgZXQgZXJhdCBldCwgbGFjaW5pYSBncmF2aWRhIGVyb3MuJywgXG4gICAgICAgICckMTknXG4gICAgKTtcbiAgICBjb25zdCBtYWluMiA9IGFkZE1lbnVJdGVtKFxuICAgICAgICAnRmlzaCcsXG4gICAgICAgICdDcmFzIG5vbiBwdXJ1cyBub24gbWFzc2Egc3VzY2lwaXQgbGFvcmVldCBzZWQgaW4gbnVuYy4gQWxpcXVhbSBlbmltIGxhY3VzLCBkaWduaXNzaW0gdmVsIG1heGltdXMgdGluY2lkdW50LCBoZW5kcmVyaXQgZXQgZG9sb3IuIEZ1c2NlIGluIGdyYXZpZGEgbWFzc2EuJyxcbiAgICAgICAgJyQxNydcbiAgICApO1xuICAgIGNvbnN0IG1haW4zID0gYWRkTWVudUl0ZW0oXG4gICAgICAgICdDaGlja2VuJyxcbiAgICAgICAgJ1BlbGxlbnRlc3F1ZSBzZWQgbG9yZW0ganVzdG8uIE1vcmJpIGluIGFudGUgZXUgbmVxdWUgdGVtcG9yIHZlaGljdWxhLiBFdGlhbSBwb3N1ZXJlIGR1aSBhdCB2YXJpdXMgZGFwaWJ1cy4nLFxuICAgICAgICAnJDE1J1xuICAgIClcbiAgICBjb25zdCBtYWluNCA9IGFkZE1lbnVJdGVtKFxuICAgICAgICAnVmVnZXRhcmlhbicsXG4gICAgICAgICdBbGlxdWFtIGVyYXQgdm9sdXRwYXQuIE1hdXJpcyBxdWlzIGxvYm9ydGlzIG1hdXJpcy4gSW4gdmFyaXVzIGxhY3VzIG5vbiBxdWFtIHZlaGljdWxhIGxhb3JlZXQgc2l0IGFtZXQgZXUgbnVuYy4nLFxuICAgICAgICBcIiQxOFwiXG4gICAgKTtcblxuICAgIGNvbnN0IGRlc3NlcnQxID0gYWRkTWVudUl0ZW0oXG4gICAgICAgICdDaGVlc2VjYWtlJyxcbiAgICAgICAgJ0ludGVnZXIgc2l0IGFtZXQgdHVycGlzIHZpdGFlIGVyb3MgZ3JhdmlkYSBmcmluZ2lsbGEuIE5hbSB2aXZlcnJhIG1hdHRpcyBzYXBpZW4sIGEgZ3JhdmlkYSBtZXR1cyBpbnRlcmR1bSBzZWQuJyxcbiAgICAgICAgJyQxMCdcbiAgICApO1xuXG4gICAgLy9hZGQgY29udGVudFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250ZW50JylcbiAgICBzdGFydGVycy5jbGFzc0xpc3QuYWRkKCdtZW51Q2FyZCcpO1xuICAgIG1haW5zLmNsYXNzTGlzdC5hZGQoJ21lbnVDYXJkJyk7XG4gICAgZGVzc2VydHMuY2xhc3NMaXN0LmFkZCgnbWVudUNhcmQnKTtcblxuICAgIHN0YXJ0ZXJzSC50ZXh0Q29udGVudCA9ICdTdGFydGVycyc7XG4gICAgbWFpbnNILnRleHRDb250ZW50ID0gJ01haW4gRW50cmVlcyc7XG4gICAgZGVzc2VydHNILnRleHRDb250ZW50ID0gJ0Rlc3NlcnRzJztcblxuICAgIC8vYXBwZW5kIGNoaWxkcmVuXG4gICAgc3RhcnRlcnMuYXBwZW5kKHN0YXJ0ZXJzSCwgc3RhcnRlcjEsIHN0YXJ0ZXIyLCBzdGFydGVyMyk7XG4gICAgbWFpbnMuYXBwZW5kKG1haW5zSCwgbWFpbjEsIG1haW4yLCBtYWluMywgbWFpbjQpO1xuICAgIGRlc3NlcnRzLmFwcGVuZChkZXNzZXJ0c0gsIGRlc3NlcnQxKTtcbiAgICBjb250YWluZXIuYXBwZW5kKHN0YXJ0ZXJzLCBtYWlucywgZGVzc2VydHMpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0pKCk7XG5cbmNvbnN0IG1lbnUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGhlcm8sIGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0pKCk7XG5cbmV4cG9ydCB7bWVudX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2hlYWRpbmd9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkaW5nLmpzJztcbmltcG9ydCB7aG9tZX0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUuanMnO1xuaW1wb3J0IHttZW51fSBmcm9tICcuL2NvbXBvbmVudHMvbWVudS5qcyc7XG5pbXBvcnQge2NvbnRhY3R9IGZyb20gJy4vY29tcG9uZW50cy9jb250YWN0LmpzJztcbmltcG9ydCB7Zm9vdGVyfSBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyLmpzJztcblxuKCgpID0+IHtcbiAgICAvL2luaXRpYWwgcGFnZSBsb2FkXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5hcHBlbmQoaGVhZGluZywgaG9tZSwgZm9vdGVyKTtcblxuICAgIC8vYnRuIHZhcmlhYmxlc1xuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZUJ0bicpO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudUJ0bicpO1xuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEJ0bicpO1xuXG4gICAgLy9oZWxwZXIgZnVuY3Rpb25cbiAgICBjb25zdCByZW1vdmVBY3RpdmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICAgICAgICBidG5zLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBpZihlLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL2V2ZW50IGxpc3RlbmVyc1xuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vcmVtb3ZlcyBjdXJyZW50IHRhYlxuICAgICAgICBoZWFkaW5nLm5leHRFbGVtZW50U2libGluZy5yZW1vdmUoKTtcbiAgICAgICAgcmVtb3ZlQWN0aXZlKCk7XG5cbiAgICAgICAgLy9pbnB1dHMgc3BlY2lmaWVkIHRhYlxuICAgICAgICBoZWFkaW5nLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBob21lKTtcbiAgICAgICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9KVxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vcmVtb3ZlcyBjdXJyZW50IHRhYlxuICAgICAgICBoZWFkaW5nLm5leHRFbGVtZW50U2libGluZy5yZW1vdmUoKTtcbiAgICAgICAgcmVtb3ZlQWN0aXZlKCk7XG5cbiAgICAgICAgLy9pbnB1dHMgc3BlY2lmaWVkIHRhYlxuICAgICAgICBoZWFkaW5nLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBtZW51KTtcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9KVxuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vcmVtb3ZlcyBjdXJyZW50IHRhYlxuICAgICAgICBoZWFkaW5nLm5leHRFbGVtZW50U2libGluZy5yZW1vdmUoKTtcbiAgICAgICAgcmVtb3ZlQWN0aXZlKCk7XG5cbiAgICAgICAgLy9pbnB1dHMgc3BlY2lmaWVkIHRhYlxuICAgICAgICBoZWFkaW5nLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBjb250YWN0KTtcbiAgICAgICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9KVxufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==