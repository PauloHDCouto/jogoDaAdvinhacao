alert("I wanna play a game!")
let numeroEscolhido = Number(prompt("Advinhe o numero que eu estou pesando! Está entre 0 à 10"))

const numeroSortido = Math.round(Math.random() * 10)
let tentativas = 1

while(numeroEscolhido != numeroSortido){
  numeroEscolhido = prompt("Erro tente novamente")
  tentativas++
 }
alert(`Vc acertou o numero em ${tentativas} tentativas`)