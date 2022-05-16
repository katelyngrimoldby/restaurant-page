import {heading} from './components/heading.js';
import {home} from './components/home.js';


const content = document.getElementById('content')
const load = (() => {
    content.appendChild(heading);
    content.appendChild(home);
})();

load