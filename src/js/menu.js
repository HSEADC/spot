document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu()
})
// function initBurgerMenu() {
//   // Toggle the nav menu
//   $('#toggleBtn').click(function () {
//     $('#navMenu').toggleClass('active')
//   })

//   // Change the burger menu icon image on click
//   $('#toggleBtn').click(function () {
//     var img = $('#burgerIcon') // Select the image

//     // Check the current image source and toggle between two icons
//     if (
//       img.attr('src') ===
//       'https://raw.githubusercontent.com/HSEADC/spot/refs/heads/main/src/images/components/02_Atoms/A_BurgerMenu.svg'
//     ) {
//       img.attr(
//         'src',
//         'https://raw.githubusercontent.com/HSEADC/spot/refs/heads/main/src/images/components/02_Atoms/A_BurgerClose.svg'
//       )
//     } else {
//       img.attr(
//         'src',
//         'https://raw.githubusercontent.com/HSEADC/spot/refs/heads/main/src/images/components/02_Atoms/A_BurgerMenu.svg'
//       )
//     }
//   })
// }

/* van js*/
function initBurgerMenu() {
  // Toggle the nav menu
  const toggleButton = document.querySelector('#toggleBtn')

  toggleButton.addEventListener('click', () => {
    document.querySelector('#navMenu').classList.toggle('active')
  })

  toggleButton.addEventListener('click', () => {
    let img = document.querySelector('#burgerIcon')
    if (
      img.src ===
      'https://raw.githubusercontent.com/HSEADC/spot/refs/heads/main/src/images/components/02_Atoms/A_BurgerMenu.svg'
    ) {
      img.src =
        'https://raw.githubusercontent.com/HSEADC/spot/refs/heads/main/src/images/components/02_Atoms/A_BurgerClose.svg'
    } else {
      img.src =
        'https://raw.githubusercontent.com/HSEADC/spot/refs/heads/main/src/images/components/02_Atoms/A_BurgerMenu.svg'
    }
  })
}

// if (document.readyState === 'loading') {
//   document.addEventListener('DOMContentLoaded', initBurgerMenu)
// } else {
//   initBurgerMenu()
// }

// function initBurgerMenu() {
//   const toggleButton = document.querySelector('#toggleBtn')
//   const navMenu = document.querySelector('#navMenu')
//   const img = document.querySelector('#burgerIcon')

//   toggleButton.addEventListener('click', () => {
//     navMenu.classList.toggle('active')

//     const menuIcon = 'A_BurgerMenu.svg'
//     const closeIcon = 'A_BurgerClose.svg'

//     if (img.src.includes(menuIcon)) {
//       img.src = img.src.replace(menuIcon, closeIcon)
//     } else {
//       img.src = img.src.replace(closeIcon, menuIcon)
//     }
//   })
// }
