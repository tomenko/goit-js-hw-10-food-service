/* const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
export const themeSwitch = document.querySelector('#theme-switch-toggle');
const body = document.querySelector("body");
export let valueThem = body.classList.toggle(localStorage.getItem("them"));
if (valueThem === Theme.DARK) {themeSwitch.checked = true}


const cb = () => {
    if (localStorage.getItem("them") === Theme.LIGHT) {
        localStorage.setItem("them", Theme.DARK)
    } else if (localStorage.getItem("them") === Theme.DARK) {
        localStorage.setItem("them", Theme.LIGHT) 
    };
};

export const btnSwitch = themeSwitch.addEventListener('change', cb); */

const checkBox = document.querySelector( '.switch__input' );
const body = document.querySelector( 'body' );
const bodyTheme = {
    light: 'light-theme',
    dark: 'dark-theme'
}
const currentTheme = localStorage.getItem( 'bodyTheme' );
if( currentTheme ) {
    body.classList.add( currentTheme );
}
if( currentTheme === bodyTheme.dark ) {
    checkBox.checked = true;
}

checkBox.addEventListener( 'change', ( e ) => {
    if( e.target.checked ) {
        body.classList.remove( 'light-theme' );
        localStorage.setItem( 'bodyTheme', bodyTheme.dark );
        body.classList.add( localStorage.getItem( 'bodyTheme' ) );
    } else if( e.target.checked === false ) {
        body.classList.remove( 'dark-theme' );
        localStorage.setItem( 'bodyTheme', bodyTheme.light );
        body.classList.add( localStorage.getItem( 'bodyTheme' ) );
    }
} );
