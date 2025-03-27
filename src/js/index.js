$(document).ready(function () {
  console.log(' Script loaded!')
  // When clicking .main_cover, add 'none' class to <nav>
  $('.main_cover').click(function () {
    $('nav').addClass('none')
  })

  // Toggle 'active' class on #navMenu when clicking #toggleBtn
})

// Burger menu toggle and image swap
function initBurgerMenu() {
  // Toggle the nav menu
  $('#toggleBtn').click(function () {
    console.log('burger menu')
    $('#navMenu').toggleClass('active')
  })

  // Change the burger menu icon image on click
  $('#toggleBtn').click(function () {
    var img = $('#burgerIcon') // Select the image

    // Check the current image source and toggle between two icons
    if (
      img.attr('src') ===
      'https://raw.githubusercontent.com/HSEADC/spot/refs/heads/main/src/images/components/02_Atoms/A_BurgerMenu.svg'
    ) {
      img.attr(
        'src',
        'https://raw.githubusercontent.com/HSEADC/spot/refs/heads/main/src/images/components/02_Atoms/A_BurgerClose.svg'
      )
    } else {
      img.attr(
        'src',
        'https://raw.githubusercontent.com/HSEADC/spot/refs/heads/main/src/images/components/02_Atoms/A_BurgerMenu.svg'
      )
    }
  })
}
