document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu()
})

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
