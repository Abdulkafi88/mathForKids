const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const audio = document.getElementById("myAudio")
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const scores = document.querySelector(".userScore")
let score = 0
function generMath() {
  const random1 = Math.floor(Math.random() * 11)
  const random2 = Math.floor(Math.random() * 11)
  const answer = random1 + random2
  const notCorrectAnswer2 = random1 - random2
  const notCorrectAnswer1 = random1 * random2
  num1.textContent = random1
  num2.textContent = random2
  option1.textContent = answer
  option2.textContent = notCorrectAnswer1
  option3.textContent = notCorrectAnswer2
  option1.removeEventListener("click", handOptionlClick)
  option1.addEventListener("click", handOptionlClick)
}
function handOptionlClick() {
  const userFainl = (scores.innerHTML = "score :" + score++)
  generMath()
}

option2.addEventListener("click", () => {
  audio.play()
})
option3.addEventListener("click", () => {
  audio.play()
})

generMath()
