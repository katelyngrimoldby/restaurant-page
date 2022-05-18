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
    starters.classList.add('starters');
    mains.classList.add('mains');
    desserts.classList.add('desserts');

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

export {menu};