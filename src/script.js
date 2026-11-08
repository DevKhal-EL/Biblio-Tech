alert("JavaScript funcionando!");

const formulario = document.getElementById("formulario-cadastro-usuarios");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("input-nome").value;
    const email = document.getElementById("input-email").value;

    console.log("Nome:", nome);
    console.log("E-mail:", email);
});