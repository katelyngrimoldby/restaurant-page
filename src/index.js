import {heading} from './components/heading.js';
import {home} from './components/home.js';
import {menu} from './components/menu.js';


const content = document.getElementById('content')
const load = (() => {
    content.appendChild(heading);
    content.appendChild(home);
    content.appendChild(menu);
})();

load