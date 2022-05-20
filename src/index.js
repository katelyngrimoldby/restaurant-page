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
        heading.nextElementSibling.remove();
        removeActive();

        //inputs specified tab
        heading.insertAdjacentElement('afterend', home);
        homeBtn.classList.add('active');
    })
    menuBtn.addEventListener('click', () => {
        //removes current tab
        heading.nextElementSibling.remove();
        removeActive();

        //inputs specified tab
        heading.insertAdjacentElement('afterend', menu);
        menuBtn.classList.add('active');
    })
    contactBtn.addEventListener('click', () => {
        //removes current tab
        heading.nextElementSibling.remove();
        removeActive();

        //inputs specified tab
        heading.insertAdjacentElement('afterend', contact);
        contactBtn.classList.add('active');
    })
})();
