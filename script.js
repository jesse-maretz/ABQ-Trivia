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
        question: 'What is Walter White diagnosed with that prompts him to "break bad?"', answers: [
        {answer: 'Lung Cancer', correct: true},
        {answer: 'Dementia', correct: false},
        {answer: 'ALS/Lou Gehrigs Disease', correct: false},
        {answer: "Parkinson's disease", correct: false}
        ]
    },
    {
        question: "What is Saul Goodman's real name?", answers: [
        {answer: 'Chuck McGill'},
        {answer: 'Howard Hamlin'},
        {correct: 'Jimmy McGill'},
        {wrong3: 'Don Wachtell'}
        ]
    }, 
    {
        question: 'What kind of car does Walt drive?', answers: [
        { answer: 'PT Cruiser', correct: false },
        { answer: 'Pontiac Aztek', correct: false }, 
        { answer: 'Ford Pinto', correct: false }, 
        { answer: 'Oldsmobile Cutlass', correct: false }
        ]
    }
]
let score = 0
let startBtn = document.querySelector('#startBtn')
let qBox = document.querySelector('#qBox')
let currentQ = document.querySelector('#question')
let answerBtns = document.querySelectorAll('.answerBtns')
startBtn.addEventListener('click', startFunc)
function startFunc(){
    console.log('peepee')
    startBtn.classList.add('hide')
    qBox.classList.remove('hide')
    answerFunc()
}
function answerFunc(){
    //currentQ.innerText = questionArr.question
    console.log('stinky')
    answerBtns.forEach(answerBtns.addEventListener("click", e =>
        console.log('bootycakes'))
    )
    /*
    for (let i = 0; i < questionArr.length; i++) {

    }
    */
}
function chooseAns(){}
function ansResult(){}
