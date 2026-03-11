//Solo la lógica para cambiar entre modo claro y oscuro.// 
const btn = document.querySelector(".btn-toggle");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});