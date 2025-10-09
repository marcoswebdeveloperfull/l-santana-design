document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  }

  const form = document.querySelector(".contato-form");

  if (form) {
    form.addEventListener("submit", function (e) {

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const nicho = document.getElementById("nicho").value;
      const servico = document.getElementById("servico").value;

      let isValid = true;
      let errorMessage = "";

      if (nome === "" || email === "" || nicho === "" || servico === "") {
        errorMessage +=
          "Por favor, preencha todos os campos obrigatórios (*).\n";
        isValid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email !== "" && !emailPattern.test(email)) {
        errorMessage += "O formato do e-mail é inválido.\n";
        isValid = false;
      }

      if (!isValid) {
        e.preventDefault();
        alert("Erro de Envio:\n" + errorMessage);
      }
    });
  }
});
