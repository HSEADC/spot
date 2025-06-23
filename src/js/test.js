let score = 0
const totalQuestions = 5

export function nextQuestion(currentQuestion, isCorrect) {
  if (isCorrect) {
    score++
  }

  const currentElement = document.getElementById(`question${currentQuestion}`)
  currentElement.classList.add('hidden')

  const nextElement = document.getElementById(`question${currentQuestion + 1}`)
  if (nextElement) {
    nextElement.classList.remove('hidden')
  } else {
    showResults()
  }
}

window.nextQuestion = nextQuestion

function showResults() {
  const questions = document.querySelectorAll('.O_Test')
  questions.forEach((question) => question.classList.add('hidden'))

  const resultBlock = document.getElementById('result')
  resultBlock.classList.remove('hidden')

  const scoreElement = document.getElementById('score')
  scoreElement.textContent = `${score}`

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
