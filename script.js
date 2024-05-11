let questions = [
  {
    question: "Wer hat HTML erfunden",
    answer_1: "Robie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Bernes-Lee",
    answer_4: "Justin Biber",
    right_answer: 3,
  },

  {
    question: "Klaas Heufer-Umlauf hat früher eine...",
    answer_1: "...Lagerfachkraftausbildung gemacht",
    answer_2: "...Bäckerausbildung gemacht",
    answer_3: "...Friseurausbildung gemacht",
    answer_4: "...Masseurausbildung gemacht",
    right_answer: 3,
  },

  {
    question:
      " Nur 4% aller Auszubildenden zum/zur Kraftfahrzeugmechatroniker*in sind...",
    answer_1: "nicht zum Abschluss angetreten",
    answer_2: "Ausländer",
    answer_3: "über 20 Jahre",
    answer_4: "weiblich",
    right_answer: 4,
  },

  {
    question: "34% aller Deutschen träumen nachts von...",
    answer_1: "ihrer Kindheit",
    answer_2: "ihrer Arbeit",
    answer_3: "Essen",
    answer_4: "Autos",
    right_answer: 2,
  },

  {
    question: "In Maryland ist es verboten...",
    answer_1: "einen Löwen mit ins Kino zu nehmen",
    answer_2: "ohne Schwimmprüfung schwimmen zu gehen",
    answer_3: "in der Öffentlichkeit Schimpfwörter zu verwenden",
    answer_4: "zu Jagen",
    right_answer: 1,
  },
];

let currentQuestion = 0;

function init() {
  document.getElementById("questionLength").innerHTML = questions.length;
  numberCurrentQuestion();
  showCurrentQuestion();
  showCurrentAnswers();
}

function numberCurrentQuestion() {
  document.getElementById("numberCurrentQuestion").innerHTML =
    currentQuestion + 1;
}

function showCurrentQuestion() {
  let askedQuestions = questions[currentQuestion];
  document.getElementById("card-title").innerHTML = askedQuestions["question"];
}

function showCurrentAnswers() {
  showAnswerOne();
  showAnswerTwo();
  showAnswerThree();
  showAnswerFour();
}

function showAnswerOne() {
  answerOne = document.getElementById("answer_1");
  answerOne.innerHTML = `
  <div>${questions[currentQuestion].answer_1}</div>
  `;
}

function showAnswerTwo() {
  answerTwo = document.getElementById("answer_2");
  answerTwo.innerHTML = `         
         <div>${questions[currentQuestion].answer_2}</div>
         `;
}

function showAnswerThree() {
  answerThree = document.getElementById("answer_3");
  answerThree.innerHTML = `
        <div>${questions[currentQuestion].answer_3}</div>
        `;
}

function showAnswerFour() {
  answerFour = document.getElementById("answer_4");
  answerFour.innerHTML = `
        <div>${questions[currentQuestion].answer_4}</div>
        `;
}

function answer(selection) {
  let rightAnswer = questions[currentQuestion].right_answer;

  let selectedQuestionNumber = selection.slice(-1);

  let idOfRightAnswer = `answer_${rightAnswer}`;

  if (selectedQuestionNumber == questions[currentQuestion].right_answer) {
    document.getElementById("result").innerHTML = `<div>right</div>`;
    document.getElementById(selection).parentNode.classList.add("bg-success");
  } else {
    document.getElementById("result").innerHTML = `<div>wrong</div>`;
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }

  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    currentQuestion = 0;
  }
  deleteQuestionColor();
  init();
}

function deleteQuestionColor() {
  document.getElementById("next-button").disabled = true;
  for (let i = 1; i <= 4; i++) {
    document
      .getElementById(`card-mb${i}`)
      .classList.remove("bg-success", "bg-danger");
  }
}
