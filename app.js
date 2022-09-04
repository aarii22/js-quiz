const quizData = [
    {
      question: "What is the color of sky?",
      a: "pink",
      b: "blue",
      c: "green",
      d: "red",
      correct: "b"
    },
    {
      question: "Number of letters in alphabet?",
      a: "20",
      b: "40",
      c: "26",
      d: "32",
      correct: "c"
    }
];
  
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const ans_a = document.getElementById("ans_a");
const ans_b = document.getElementById("ans_b");
const ans_c = document.getElementById("ans_c");
const ans_d = document.getElementById("ans_d");
const submit = document.getElementById("submit");
  
let currentQuiz = 0;
let score = 0;
  
const clearAns = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
  
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked){
        answer = answerElement.id;
      }
    });
    return answer;
};
  
const loadQuiz = () => {
    clearAns();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    ans_a.innerText = currentQuizData.a;
    ans_b.innerText = currentQuizData.b;
    ans_c.innerText = currentQuizData.c;
    ans_d.innerText = currentQuizData.d;
};
  
loadQuiz();
  
submit.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
      currentQuiz++;
      if (currentQuiz < quizData.length){
        loadQuiz();
      }
      else {
        quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="history.go(0)">Play Again</button>
          `;
      }
    }
});
  