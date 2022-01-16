// ! Errors are intentional for demonstration purposes

// * Ensures all DOM content loaded before initialising quiz script
document.addEventListener("DOMContentLoaded", () => {
  // * html elements
  (() => {
    const questionPara = document.getElementById("question");
    const answerParas = document.getElementsByClassName("answer");
    const answerButtons = document.getElementsByTagName("button");
    const score = document.getElementById("score");
  })();

  /**
   * Creates a quiz
   * @constructor
   * @param {Object} questionData - an array of question objects
   */
  class Quiz {
    constructor() {
      this.questionNumber = 0;
      this.questionData = questionData;
      this.acceptingAnswer = false;
      /**
       * Inserts text into DOM
       * @param {boolean} acceptingAnswer - Sets to true
       */
      this.insertText = () => {
        questionPara.textContent = this.question.question;
        for (let i = 0; i < this.question.answers.length; i++) {
          answerParas[i].textContent = this.question.answers[i];
          answerParas[i].dataset.answer = this.question.answers[i];
          }
        this.acceptingAnswer = true;
      };
      /**
       * Checks user answer
       * - If answer correct, increment score
       * - Show visual feedback to indicate (in)correct answer
       * - Increment question number
       * @param {HTMLElement} userInput - button clicked by user 
       */
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
      /**
       * Allows user input if accepting answers
       * @param {Event} e - _Click_ on answer button
       */
      this.userInput = (e) => {
        if (this.acceptingAnswer) {
          this.acceptingAnswer = false;
          this.checkAnswer(e.currentTarget);
        }
      };
      /**
       * Increments question number if possible
       * - Removes color classes from answer buttons
       * - Ends quiz when no more questions available
       */
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
      /**
       * runs quiz question
       * - continues through questions for length of question data
       */
      this.runQuestion = () => {
        if (this.questionNumber <= questionData.length) {
          this.question = questionData[this.questionNumber];
          this.insertText();
        }
      };
      /**
       * Ends the quiz
       * - Details score and displays funky faces
       */
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

  (async () => {
    const quiz = new Quiz(await fetch("assets/js/error-questions.json")
      .then (response => response.json())
      // .catch(e => console.error(e))
    );
    for (let button of answerButtons) {
      button.addEventListener("click", quiz.userInput);
    }
    // try {
      runQuestion();
    // } catch(e) {
    //   console.error(e);
    // }
  })();
});