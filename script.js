
const splash = document.querySelector('.splash')

document.addEventListener('DOMContentLoaded', function(e) {
    e.preventDefault()
    setTimeout(()=>{
        splash.classList.add('display-none')
    }, 2000)
})


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
        {answer: 'Chuck McGill', correct: false},
        {answer: 'Howard Hamlin', correct: false},
        {answer: 'Jimmy McGill', correct: true},
        {answer: 'Don Wachtell', correct: false}
        ]
    }, 
    {
        question: 'What kind of car does Walt drive?',
        answers: [
        {answer: 'PT Cruiser', correct: false},
        {answer: 'Pontiac Aztek', correct: true}, 
        {answer: 'Ford Pinto', correct: false}, 
        {answer: 'Oldsmobile Cutlass', correct: false}
        ]
    }
]
//assigning all the needed html references to JS variables
let score = 0
let scoreCtr = document.querySelector('#score')
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
    console.log('it has been started')
    startBtn.classList.add('hide')
    qBox.classList.remove('hide')
    loadQNA()
}

//populate the question container with the first question from the question array
//populate the answer buttons with the question array's answer choices
    //add click event listeners to the answer buttons
    //then 
function loadQNA(){
    console.log('consider this bad boy loaded')
    console.log(qCtr)
    currentQ.innerText = questionArr[qCtr].question
    for (let i = 0; i < questionArr[qCtr].answers.length; i++) {
        answerBtns[i].innerText = questionArr[qCtr].answers[i].answer
        answerParent.addEventListener('click', handleClick)
    //this event handles the click
    function handleClick(e) {
       if (e.target !== e.currentTarget) {
           //let clickedItem = e.target.id;
          //alert('consider the click handled!')
          //console.log(questionArr[qCtr].answers[i].correct)
          //console.log(e.target.innerText)
          if(questionArr[qCtr].answers[i].answer == e.target.innerText && questionArr[qCtr].answers[i].correct === true) {
            score++
            scoreCtr.innerText = score
          }
       }
       nextQ()
       /*
       answerBtns[e.target] = questionArr[qCtr].answers[e.target].correct
       if (answerBtns[e.target] === true) {
           console.log("that's correct!")
       }3
       */
    }
   }


    //this event listener should handle all click events through the parent
    
}     

function nextQ() {
    //unhides the next button
    nextBtn.classList.remove('hide')
    //adds event listener to the next button
    nextBtn.addEventListener('click', function(e) {
        qCtr++
        loadQNA()
    })
    //increment date counter
    //invokes the loadQNA() function
}
function checkAns() {
    score++
}
function endGame(){
    console.log('im done')
}