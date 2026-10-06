import "./styles.css";

const greetButton = document.querySelector("#greet-button");
const greeting = document.querySelector("#greeting");

greetButton.addEventListener("click", () => {
  greeting.textContent = "Xin chào! Bạn vừa chạy JavaScript thành công.";
});
