import {heading} from './components/heading.js';


const content = document.getElementById('content')
const load = (() => {
    content.appendChild(heading)
})();

window.onload(load)