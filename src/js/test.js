let score = 0 // Переменная для подсчёта баллов
const totalQuestions = 5 // Общее количество вопросов, можно увеличить по мере добавления вопросов

export function nextQuestion(currentQuestion, isCorrect) {
  // Увеличиваем баллы, если ответ правильный (клик по элементу с классом "right")
  if (isCorrect) {
    score++
  }

  // Скрываем текущий вопрос, добавляем класс 'hidden'
  const currentElement = document.getElementById(`question${currentQuestion}`)
  currentElement.classList.add('hidden')

  // Отображаем следующий вопрос, удаляем класс 'hidden'
  const nextElement = document.getElementById(`question${currentQuestion + 1}`)
  if (nextElement) {
    nextElement.classList.remove('hidden') // Показываем следующий вопрос
  } else {
    // Когда все вопросы пройдены, показываем результаты
    showResults()
  }
}

function showResults() {
  // Скрываем все вопросы, добавляем класс 'hidden'
  const questions = document.querySelectorAll('.O_Test')
  questions.forEach((question) => question.classList.add('hidden'))

  // Показываем блок с результатами, удаляем класс 'hidden'
  const resultBlock = document.getElementById('result')
  resultBlock.classList.remove('hidden')

  // Отображаем количество набранных баллов
  const scoreElement = document.getElementById('score')
  scoreElement.textContent = `${score}`

  // Добавляем текст в заголовок в зависимости от набранных баллов
  const resultHeader = document.getElementById('resultHeader')
  const resultText = document.getElementById('resultText')
  if (score <= 1) {
    resultHeader.innerHTML = 'Упс :(('
    resultText.innerHTML =
      'Кажется, ты&nbsp;только начинаешь погружаться в&nbsp;мир райдеров. Советуем перечитать статью ещё&nbsp;раз и&nbsp;желаем удачи!'
  } else if (score <= 3) {
    resultHeader.innerHTML = 'Неплохо!'
    resultText.innerHTML =
      'Ты&nbsp;только влетаешь в&nbsp;тему, и&nbsp;это&nbsp;нормально. Главное — не&nbsp;останавливайся! Читай, смотри, пробуй — и&nbsp;скоро будешь на&nbsp;коне (или&nbsp;на&nbsp;доске).'
  } else {
    resultHeader.innerHTML = 'Круто!'
    resultText.innerHTML =
      'Сразу видно, что&nbsp;ты&nbsp;опытный райдер. Только не&nbsp;зазнавайся. Желаем тебе покорения новых высот!'
  }
}
