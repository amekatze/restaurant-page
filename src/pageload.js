const content = document.querySelector('.content');

function pageload(){
    // Header & Nav
    const header = document.createElement('header');
    const nav = document. createElement('nav');
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerText = '有りもしない飲食店';
    const navUnorderedList = document.createElement('ul');
    const navListItems = ['home', 'menu', 'access'];
    navListItems.forEach(item => {
        const navListItem = document.createElement('li');
        const navButton = document.createElement('button');
        navButton.setAttribute('id', `${item}`);
        navButton.innerText = `${item}`
        navListItem.appendChild(navButton)
        navUnorderedList.appendChild(navListItem)
    })
    header.appendChild(nav)
    nav.appendChild(logo)
    nav.appendChild(navUnorderedList)

    // Main
    const main = document.createElement('main');
    // Footer
    const footer = document.createElement('footer');

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
}



export default pageload;