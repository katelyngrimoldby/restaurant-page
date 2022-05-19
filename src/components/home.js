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

export {home}