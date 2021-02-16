import './styles.css';
import { btnSwitch } from './modul-js/theme-switch';
import menuTemplate from './templates/menu.hbs';
import menuData from './menu.json'
const jsMenu = document.querySelector('.js-menu');
console.log(jsMenu);
const markup = menuTemplate(menuData);
jsMenu.insertAdjacentHTML('beforeend', markup)


