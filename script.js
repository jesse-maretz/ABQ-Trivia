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
        question: 'What is Walter White diagnosed with that prompts him to "break bad?"',
        answers: [
        {answer: 'Lung Cancer', correct: true},
        {answer: 'Dementia', correct: false},
        {answer: 'ALS/Lou Gehrigs Disease', correct: false},
        {answer: "Parkinson's disease", correct: false}
        ]
    },
    {
        question: "What is Saul Goodman's real name?",
        answers: [
        {answer: 'Chuck McGill'},
        {answer: 'Howard Hamlin'},
        {correct: 'Jimmy McGill'},
        {wrong3: 'Don Wachtell'}
        ]
    }, 
    {
        question: 'What kind of car does Walt drive?',
        answers: [
        { answer: 'PT Cruiser', correct: false },
        { answer: 'Pontiac Aztek', correct: false }, 
        { answer: 'Ford Pinto', correct: false }, 
        { answer: 'Oldsmobile Cutlass', correct: false }
        ]
    }
]
//assigning all the needed html references to JS variables
let score = 0
let startBtn = document.querySelector('#startBtn')
let qBox = document.querySelector('#qBox')
let currentQ = document.querySelector('#question')
let answerBtns = document.querySelectorAll('.answerBtns')
let answerParent = document.querySelector('.btnGrid')
let nextBtn = document.querySelector('#nextBtn')
let qCtr = 0
//adding event listenener to the start button
    //when clicked, the first question should load
startBtn.addEventListener('click', startFunc)

//the function to begin the quiz and hide the start prompt is startFunc()
    //this function should only be called once since it's only invoked through an event listener on the start button
    //at the end of this function, invoke the function that sets up the first question and answer prompt
function startFunc(){
    console.log('peepee')
    startBtn.classList.add('hide')
    qBox.classList.remove('hide')
    loadQNA()
}

//populate the question container with the first question from the question array
//populate the answer buttons with the question array's answer choices
    //add click event listeners to the answer buttons
    //then 
function loadQNA(){
    console.log('stinky')
    
    for (let i = 0; i < questionArr[qCtr].answers.length; i++) {
        answerBtns[i].innerText = questionArr[qCtr].answers[i].answer
    }


    //this event listener should handle all click events through the parent
    answerParent.addEventListener('click', handleClick)
    //this ev
    function handleClick(e) {
       if (e.target !== e.currentTarget) {
           //let clickedItem = e.target.id;
          // if (questionArr[i].)
          console.log('consider the click hadnled!')
       }
   }
}     

function ansResult(){
    nextBtn.classList.remove('hide')
}
