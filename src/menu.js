//const MenuItem = (title, description, image) => {
//    return {
//        title,
//        description,
//        image
//    }
//}

let menuBook = [
    {
        title: 'Kinoko Udon',
        description: 'Freshly Picked Forest Mushrooms & Hearty Home-cooked Broth',
        image: 'images/kitakeudon.jpg'
    },
    {
        title: 'Gomadare Soumen',
        description: 'Soumen Noodles in Creamy Miso & Sesame Sauce.',
        image: 'images/gomasoumen.jpg'
    },
    {
        title: 'Uji Green Soba',
        description: 'Green Tea Soba, Chilled or Hot.',
        image: 'images/soba-natsu.jpg'
    },
    {
        title: 'Gyudon',
        description: 'Flavorful Stirfried Beef over Freshly Steamed Rice.',
        image: 'images/gyudon.jpg'
    },
    {
        title: 'Sukiyaki',
        description: 'Tofu, Mushroom Sukiyaki served with Raw Egg and Homemade Ponzu.',
        image: 'images/sukiya.jpg'
    },
]

function menu(){
    const main = document.querySelector('main');
    main.innerHTML = ' ';
    main.classList.add('menu')
    const header = document.createElement('h2')
    header.innerText = 'メニュー';
    main.appendChild(header)
    menuBook.forEach(item => {
        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-card');
        menuCard.innerHTML = `<img src='${item.image}'>`;
        const description = document.createElement('div');
        description.classList.add('description');
        description.innerHTML = `<span>${item.title}</span>` + item.description;
        menuCard.appendChild(description);
        main.appendChild(menuCard)
    })
}

export default menu;