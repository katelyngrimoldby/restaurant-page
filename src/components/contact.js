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

export {contact}