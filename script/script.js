
var maiorNumero;
var menorNumero;
var somaDosCadastrados;

var numeroDigitado;
var caixaSelect;
var mostrarResultados;

var numeros = [];

function adicionar() {
   caixaSelect = document.querySelector('#caixaSelect')
   numeroDigitado = Number(document.querySelector('#numeroDigitado').value)


   if (numeroDigitado >= 1 && numeroDigitado <= 100 && numeros.indexOf(numeroDigitado) == -1) {
      numeros.push(numeroDigitado)

      var adicionar =  document.createElement('option')
      adicionar.innerHTML = `Numero ${numeroDigitado} foi adicionado.` 

      caixaSelect.appendChild(adicionar)

   }else {
      alert('Número inválido!')
      return
   }

}

function finalizar() {

    maiorNumero = numeros[0];
    menorNumero = numeros[0];
     somaDosCadastrados = 0;

   for(var i = 0; i < numeros.length; i++) {

      if(numeros[i] > maiorNumero) {
         maiorNumero = numeros[i]
      }

      if(numeros[i] < menorNumero) {
         menorNumero = numeros[i]
      }

      somaDosCadastrados = somaDosCadastrados + numeros[i]
   }

   mostrarResultados = document.querySelector('#mostrar-resultados')
   mostrarResultados.innerHTML = ""

   var qtdNumerosCadastrados = document.createElement('p')
   qtdNumerosCadastrados.innerHTML = `Ao todo temos ${numeros.length} numeros adicionados. `

   var maiorNumeroCadastrado = document.createElement('p')
   maiorNumeroCadastrado.innerHTML = `O maior numero cadastrado foi o ${maiorNumero}`

   var menorNumeroCadastrado =  document.createElement('p')
   menorNumeroCadastrado.innerHTML = `O menor numero cadastrado foi o ${menorNumero}`

   var soma = document.createElement('p')
   soma.innerHTML = `Somando todos os valores, temos ${somaDosCadastrados}`

   var media = somaDosCadastrados / numeros.length

   var mediaDosValores = document.createElement('p')
   mediaDosValores.innerHTML = `A média de todos os valores é ${media}`


   mostrarResultados.append(qtdNumerosCadastrados, maiorNumeroCadastrado, menorNumeroCadastrado, soma, mediaDosValores)

}