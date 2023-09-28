// alert('Olá, mundo!');

// Solicitar um número ao usuário
var numero = parseInt(prompt("Digite um número:"));

// Verificar se o número atende aos critérios
if (numero > 0 && numero % 2 === 0 && numero < 100) {
  alert("O número atende aos critérios. :)");
} 

else {
  alert("O número não atende aos critérios. :'(");
}
