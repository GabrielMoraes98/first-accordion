const questionsAndAnswers = document.querySelectorAll(".questions-and-answers");
questionsAndAnswers.forEach((element) => {
  element.addEventListener("click", () => {
    const active = document.querySelector(".active");
    active.classList.remove("active");
    element.classList.add("active");
  });
});
