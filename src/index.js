import './index.css'
window.nextQuestion = nextQuestion
import { nextQuestion } from './js/test.js'

console.log(
  'SPOT—Медиа для райдеров, где ты найдешь вдохновляющий и полезный контент, поддержку и мотивацию, чтобы убедиться в достижимости пределов и нового уровня, возможности сделать жизнь ярче!'
)

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu()
})

function initBurgerMenu() {
  // Получаем элементы
  const toggleBtn = document.getElementById('toggleBtn')
  const navMenu = document.getElementById('navMenu')

  // Добавляем обработчик событий на кнопку
  toggleBtn.addEventListener('click', () => {
    // Добавляем или убираем класс 'active' при каждом клике
    navMenu.classList.toggle('active')
  })
}
