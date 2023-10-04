document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Obtenha os valores do formulário de login
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Simula a lógica de login 
      const loggedIn = (username === "teste" && password === "teste" ) 

      if (loggedIn) {
          // Redireciona para a página compras.html
          window.location.href = 'compras.html';
      } else {
          // Adicione uma mensagem de erro (neste exemplo, estamos apenas exibindo um alerta)
          alert('Usuário ou senha incorretos.');
      }

      // Limpar campos do formulário após o envio
      loginForm.reset();
  });
});

