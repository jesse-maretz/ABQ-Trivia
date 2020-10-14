/*
const splash = document.querySelector('.splash')

document.addEventListener('DOMContentLoaded', function(e) {
    e.preventDefault()
    setTimeout(()=>{
        splash.classList.add('display-none')
    }, 2000)
})
*/

let questionArr = [
    {
        question1: 'What is Walter White diagnosed with that prompts him to "break bad?"',
        rightAns: 'Lung Cancer',
        wrong1: 'Dementia',
        wrong2: 'ALS/Lou Gehrigs Disease',
        wrong3: "Parkinson's disease"
    },
    {
        question2: "What is Saul Goodman's real name?",
        wrong1: 'Chuck McGill',
        wrong2: 'Howard Hamlin',
        correct: 'Jimmy McGill',
        wrong3: 'Don Wachtell'
    },
    {
        question3: 'What kind of car does Walt drive?',
        wrong1: 'PT Cruiser',
        correct: 'Pontiac Aztek',
        wrong2: 'Ford Pinto',
        wrong3: 'Oldsmobile Cutlass'
    }
]
let score = 0

function startQuiz(){}
function loadNextQ(){}
function chooseAns(){}
function ansResult(){}sessionStorage
