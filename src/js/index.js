$(document).ready(function () {
  console.log(' Script loaded!')
  // When clicking .main_cover, add 'none' class to <nav>
  $('.main_cover').click(function () {
    $('nav').addClass('none')
  })

  // Toggle 'active' class on #navMenu when clicking #toggleBtn
})
