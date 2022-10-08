const MenuItem = (title, description, image) => {
    return {
        title,
        description,
        image
    }
}

const kitakeUdon = MenuItem('Kitake Udon', 'Freshly picked forest mushrooms & hearty home-cooked broth', './kitakeudon.jpg');

function menu(){

    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');
    menuCard.innerHTML = `<img src='${kitakeUdon.image}'>`;
    const description = document.createElement('div');
    description.classList.add('description');
    description.innerHTML = `<span>${kitakeUdon.title}</span>` + kitakeUdon.description;
    menuCard.appendChild(description)

    return menuCard;
}

export default menu;