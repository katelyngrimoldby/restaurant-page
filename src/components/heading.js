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
    home.textContent = 'Home';
    menu.textContent = 'Menu';
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

export {heading}