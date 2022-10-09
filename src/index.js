import './style.css';
import menu from './menu';
import home from './home';
import access from './access';
import pageload from './pageload'



pageload();
home();

// Nav Buttons
const homeBtn = document.querySelector('#home');
homeBtn.addEventListener('click', home)

const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', menu)

const accessBtn = document.getElementById('access');
accessBtn.addEventListener('click', access)