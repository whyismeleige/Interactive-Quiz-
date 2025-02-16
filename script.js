//Quiz List
const quiz = [
  {
    question: `What is the brain of the Computer?`,
    answers: [
      { text: `Hard Drive`, correct: false },
      { text: `Monitor`, correct: false },
      { text: `CPU`, correct: true },
      { text: `Keyboard`, correct: false },
    ],
  },
  {
    question: `One purpose of a network is?`,
    answers: [
      { text: `Sharing Software`, correct: true },
      { text: `Compiling Program`, correct: false },
      { text: `Changing Software`, correct: false },
      { text: `Starting up the Computer`, correct: false },
    ],
  },
  {
    question: `The Miss Porters Network is`,
    answers: [
      { text: `MAN`, correct: true },
      { text: `SAN`, correct: false },
      { text: `LAN`, correct: false },
      { text: `WAN`, correct: false },
    ],
  },
  {
    question: `What Program do you run to enter the Python Editor?`,
    answers: [
      { text: `Windows`, correct: false },
      { text: `Python`, correct: false },
      { text: `IDLE`, correct: true },
      { text: `Interactive Mode`, correct: false },
    ],
  },
  {
    question: `The Computer Malware that disguises users by representing itself as legitimate software/program is known as?`,
    answers: [
      { text: `Virus`, correct: true },
      { text: `Worms`, correct: false },
      { text: `Trojans`, correct: false },
      { text: `Spyware`, correct: false },
    ],
  },
  {
    question: `The Second Generation Computer used ?`,
    answers:[
      {text: `Transistors`,correct: false},
      {text: `Integrated Circuit`,correct: false},
      {text: `Vacuum Tube`,correct: true},
      {text: `Chip`,correct: false}
    ]
  },
  {
    question: `To store data and perform calculation, computer uses ....... number system.`,
    answers:[
      {text: `Hexadecimal`,correct: false},
      {text: `Octadecimal`,correct: false},
      {text: `Binary`,correct: true},
      {text: `Decimal`,correct: false}
    ]
  },
  {
    question: `A Web Address is usually known as ...`,
    answers:[
      {text: `URL`,correct: true},
      {text: `UWL`,correct: false},
      {text: `WWW`,correct: false},
      {text: `UVL`,correct: false}
    ]
  },
  {
    question: `One of the major works of software is to transform data into .....`,
    answers:[
      {text: `Information`,correct: true},
      {text: `Video`,correct: false},
      {text: `Website`,correct: false},
      {text: `Software Program`,correct: false}
    ]
  },
  {
    question: `Which among the following is not correctly defines a functional domain name?`,
    answers:[
      {text: `.net`,correct: false},
      {text: `.org`,correct: false},
      {text: `.gov`,correct: false},
      {text: `.god`,correct: true}
    ]
  },
];

const questionElement = document.querySelector(".question-text");
const optionsElement = document.querySelectorAll(".options");
const nextButton = document.querySelector("#after-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetStyles();
  let currentQuestion = quiz[currentQuestionIndex];
  questionElement.innerHTML = `Q.${currentQuestionIndex+1} : ${currentQuestion.question}`;
  let optionIdx = 0;
  optionsElement.forEach((option) => {
    let currentOption = currentQuestion.answers[optionIdx];
    option.innerHTML = currentOption.text;
    option.dataset.correct = currentOption.correct;
    option.onclick = function () {
      checkAnswer(option);
    }
    optionIdx++;
  });
}

function resetStyles(){
  optionsElement.forEach((option) => {
    option.classList.remove("correct-option");
    option.classList.remove("wrong-option");
  })
}

function checkAnswer(selectedOption){
  optionsElement.forEach((option) => {
    if(option.dataset.correct === "true"){
      option.classList.add("correct-option");
      score++;
    }else{
      if(option === selectedOption){
        option.classList.add("wrong-option");
        score--;
      }
    }
  });
}


nextButton.addEventListener("click",() => {
  if(currentQuestionIndex < quiz.length - 1){
    currentQuestionIndex++;
    showQuestion();
  }else{
    alert(`Quiz Completed - Your Score is ${score}`);
    startQuiz();
  }
})

startQuiz();