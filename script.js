// Seleciona os botões de resposta
var button1 = document.getElementById("b1");
var button2 = document.getElementById("b2");
var button3 = document.getElementById("b3");

// Adiciona um ouvinte de eventos de clique para cada botão de resposta
button1.addEventListener("click", function() {
  if (this.textContent === "7 cores") { // verifica se a resposta selecionada está correta
    this.style.backgroundColor = "green"; // atualiza a cor do botão correto para verde
  } else {
    this.style.backgroundColor = "red"; // atualiza a cor do botão incorreto para vermelho
  }
});

button2.addEventListener("click", function() {
  if (this.textContent === "7 cores") { // verifica se a resposta selecionada está correta
    this.style.backgroundColor = "green"; // atualiza a cor do botão correto para verde
  } else {
    this.style.backgroundColor = "red"; // atualiza a cor do botão incorreto para vermelho
  }
});

button3.addEventListener("click", function() {
  if (this.textContent === "7 cores") { // verifica se a resposta selecionada está correta
    this.style.backgroundColor = "green"; // atualiza a cor do botão correto para verde
  } else {
    this.style.backgroundColor = "red"; // atualiza a cor do botão incorreto para vermelho
  }
});


function validaForm(form) {
  var resposta = form.elements["name"].value;
  if (resposta.toLowerCase() === "refração da luz") {
    form.elements["name"].style.backgroundColor = "green";
    form.elements["name"].value = "Resposta Certa!";
  } else {
    form.elements["name"].style.backgroundColor = "red";
    form.elements["name"].value = "Resposta Errada!";
  }
  return false;
}
