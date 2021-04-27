// this is all page menu JS and any elements that happen on all pages

//const mainNav = document.getElementById('js-menu')

//const navBarToggle = document.getElementById('js-navbar-toggle')

//navBarToggle.addEventListener('click', () => {
  //mainNav.classList.toggle('show')
 // console.log("hi")
//})

const menuButton = document.getElementById('js-navbar-toggle')
const menuLinks = document.getElementsByClassName('menu')[0]

menuButton.addEventListener('click', ( )=> {
  menuLinks.classList.toggle('active')
} )