// Ensures all DOM content loaded before initialising quiz script
document.addEventListener("DOMContentLoaded", () => {
  const questionPara = document.getElementById("question");
  const answerParas = document.getElementsByClassName("answer");
  const score = document.getElementById("score");
  const questionData = [
    {
      question: "What is 1 + 1",
      answers: [
        "1",
        "2",
        "3",
        "4",
      ],
      correctAnswer: "2",
    },
    {
      question: "What is the 13th letter of the alphabet",
      answers: [
        "K",
        "L",
        "M",
        "N",
      ],
      correctAnswer: "M",
    },
    {
      question: "What colour is made when mixing red and yellow",
      answers: [
        "Green",
        "Brown",
        "Pink",
        "Orange",
      ],
      correctAnswer: "Orange",
    },
    {
      question: "What is the planet third closest to the sun",
      answers: [
        "Earth",
        "Mercury",
        "Venus",
        "Mars",
      ],
      correctAnswer: "Earth",
    },
    {
      question: "How many hearts does a quid have",
      answers: [
        "1",
        "2",
        "3",
        "4",
      ],
      correctAnswer: "3",
    },
  ];
  const answerButtons = document.getElementsByTagName("button");
  
  class Quiz {
    constructor() {
      this.questionNumber = 0;
      this.acceptingAnswer = false;
      this.insertText = () => {
        questionPara.textContent = this.question.question;
        for (let i = 0; i < this.question.answers.length; i++) {
          answerParas[i].textContent = this.question.answers[i];
          answerParas[i].dataset.answer = this.question.answers[i];
          }
        this.acceptingAnswer = true;
      };
      this.checkAnswer = (userInput) => {
        let userAnswer = userInput.children[0];
        if (this.question.correctAnswer === userAnswer.dataset.answer) {
          score.textContent = ++score.textContent;
          userInput.classList.toggle("correct");
        } else {
          userInput.classList.toggle("incorrect");
          for (let button of answerButtons) {
            let assignedAnswer = button.children[0].dataset.answer;
            if (this.question.correctAnswer === assignedAnswer) {
              button.classList.toggle("correct");
            }
          }
        }
        setTimeout(this.incrementQuestion, 2000);
      };
      this.userInput = (e) => {
        if (this.acceptingAnswer) {
          this.acceptingAnswer = false;
          this.checkAnswer(e.currentTarget);
        }
      };
      this.incrementQuestion = () => {
        this.questionNumber++;
        for (let button of answerButtons) {
          button.classList.remove("correct");
          button.classList.remove("incorrect");
        }
        if (this.questionNumber < questionData.length) {
          this.runQuestion();
        } else {
          this.end();
        }
      };
      this.runQuestion = () => {
        if (this.questionNumber <= questionData.length) {
          this.question = questionData[this.questionNumber];
          this.insertText();
        }
      };
      this.end = () => {
        questionPara.
          textContent = `Thanks for playing, you scored ${score.textContent}`;
        questionPara.nextElementSibling.textContent = "!";
        for (let para of answerParas) {
          para.textContent = `(⌐■_■)`;
        }
      };
    }
  }

  const quiz = new Quiz();

  for (let button of answerButtons) {
    button.addEventListener("click", quiz.userInput);
  }
  
  quiz.runQuestion();
});