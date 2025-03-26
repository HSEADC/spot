$(document).ready(function () {
  //
  $('.main_cover').click(function () {
    $('nav').addClass('none')
  })
})
document.getElementById('toggleBtn').addEventListener('click', function () {
  const navMenu = document.getElementById('navMenu')

  // Toggle 'active' class
  navMenu.classList.toggle('active')
})
