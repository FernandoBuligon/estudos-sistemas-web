const inputNome = document.getElementById("nome");
const mensagem = document.getElementById("mensagem");

inputNome.addEventListener("input", function () {
  const nome = inputNome.value;

  if (nome.length < 3) {
    mensagem.textContent = "O tamanho do nome deve ser >= 3 caracteres.";
    inputNome.classList.remove("border-gray-400", "border-green-500");
    inputNome.classList.add("border-red-500");
    mensagem.classList.remove("text-green-600");
    mensagem.classList.add("text-red-600");
  } else {
    mensagem.textContent = "Nome válido";
    inputNome.classList.remove("border-gray-400", "border-red-500");
    inputNome.classList.add("border-green-500");
    mensagem.classList.remove("text-red-600");
    mensagem.classList.add("text-green-600");
  }
});
