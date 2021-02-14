const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
export const themeSwitch = document.querySelector('#theme-switch-toggle');
const body = document.querySelector("body");
/* export let setItemLs = localStorage.setItem("them", Theme.LIGHT) */
/* export let valueThem = body.classList.add(Theme.LIGHT); */
export let valueThem = body.classList.toggle(localStorage.getItem("them"));
/* export let chekedSwitch =() => {if (valueThem === Theme.DARK) {themeSwitch.checked = true}}; */
if (valueThem === Theme.DARK) {themeSwitch.checked = true}


const cb = () => {
    /* valueThem = body.classList.toggle(Theme.DARK); */
    /* setItemLs = localStorage.setItem("them", Theme.DARK); */
    

    if (localStorage.getItem("them") === Theme.LIGHT) {
        localStorage.setItem("them", Theme.DARK)
    } else if (localStorage.getItem("them") === Theme.DARK) {
        localStorage.setItem("them", Theme.LIGHT) 
    };
};

export const btnSwitch = themeSwitch.addEventListener('change', cb);
