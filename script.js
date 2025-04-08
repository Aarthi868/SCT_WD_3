
const questions = [
    {
      question: "Which is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Mars", "Saturn"],
      answer: "Jupiter"
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Rome"],
      answer: "Paris"
    },
    {
      question: "HTML stands for?",
      options: ["HighText Machine Language", "HyperText Markup Language", "Hyperloop Machine Language", "None of the above"],
      answer: "HyperText Markup Language"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const nextBtn = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result-container");
  const scoreEl = document.getElementById("score");
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option);
      answersEl.appendChild(btn);
    });
  }
  
  function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("question-container").classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreEl.textContent = `${score} / ${questions.length}`;
  }
  
  nextBtn.addEventListener("click", () => {
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  
  showQuestion();
  