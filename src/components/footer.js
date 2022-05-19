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

export {footer};