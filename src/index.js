import {heading} from './components/heading.js';
import {home} from './components/home.js';
import {menu} from './components/menu.js';
import {contact} from './components/contact.js';
import {footer} from './components/footer.js';

(() => {
    //initial page load
    const content = document.getElementById('content');
    content.append(heading, home, footer);

    //btn variables
    const homeBtn = document.getElementById('homeBtn');
    const menuBtn = document.getElementById('menuBtn');
    const conatctBtn = document.getElementById('contactBtn');

    //event listeners
    homeBtn.addEventListener('click', () => {
        //removes current tab
        heading.nextElementSibling.remove();

        //inputs specified tab
        heading.insertAdjacentElement('afterend', home);
    })
    menuBtn.addEventListener('click', () => {
        //removes current tab
        heading.nextElementSibling.remove();

        //inputs specified tab
        heading.insertAdjacentElement('afterend', menu);
    })
    contactBtn.addEventListener('click', () => {
        //removes current tab
        heading.nextElementSibling.remove();

        //inputs specified tab
        heading.insertAdjacentElement('afterend', contact);
    })
})();
