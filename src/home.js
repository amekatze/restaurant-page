function home(){
    const main = document.querySelector('main');
    main.classList.remove('menu')
    main.innerHTML = ' ';
    main.innerHTML = '<img src="images/inside.jpg">This restaurant may or may not exist...<br> Though it most certainly exists in your imagination. Speaking of unreal - so are also our flavors! <span class="highlight">We take classic flavors and add a twist.</span> You will feel both the comfort of a home-cooked meal, as well as the excitement of a culinary adventure.'
}

export default home;