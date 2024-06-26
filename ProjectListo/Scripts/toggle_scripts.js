const container = document.getElementById("container");
const findBtn = document.getElementById("findBtn");
const logBtn = document.getElementById("login");

findBtn.addEventListener("click", () => {
  container.classList.add("active");
});

logBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
