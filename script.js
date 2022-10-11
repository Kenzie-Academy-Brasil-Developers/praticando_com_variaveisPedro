//Exercício 1://

let valorDaCompra = parseFloat(prompt("A gasolina está custando R$ 6,80. Quanto deseja abastecer?"))

let valorLitro = parseFloat(6, 80)

let litros = valorDaCompra / valorLitro

alert(`O Cliente abasteceu ${litros}L.`)

//Exercício 2://

let C = parseFloat(prompt("Graus Celsius:"))

let F = (9 * C + 160) / 5

alert(`O valor ${C}°c em Fahrenheit é: ${F}.`)

//Exercício 3://

let fahrenheit = parseFloat(prompt("Graus Fahrenheit:"))

let celsius = ((fahrenheit - 32) * 5) / 9

alert(`O valor ${fahrenheit}°f em Celsius é: ${celsius}.`)

//Exercício 4://

let comprimento = parseFloat(prompt("Comprimento:"))

let largura = parseFloat(prompt("Largura:"))

let altura = parseFloat(prompt("Altura:"))

let volume = comprimento * largura * altura

alert(`O volume é de: ${volume}m³.`)

//Exercício 5://

let valorInteiro = parseInt(prompt("Valor inteiro:"))

let valorAoQuadrado = valorInteiro ** 2

alert(`O valor ${valorInteiro} elevado ao quadrado é ${valorAoQuadrado}.`)

//Exercício 6://

let valorUm = parseFloat(prompt("Valor 'Um':"))

let valorDois = parseFloat(prompt("Valor 'Dois':"))

let valorTres = parseFloat(prompt("Valor 'Três':"))

let valorQuatro = parseFloat(prompt("Valor 'Quatro':"))

let valorCinco = parseFloat(prompt("Valor 'Cinco':"))

let somaValores = valorUm + valorDois + valorTres + valorQuatro + valorCinco

let media = (valorUm + valorDois + valorTres + valorQuatro + valorCinco) / 5

alert(`A soma dos valores informados é: ${somaValores} e a média das notas é: ${media}.`)

//Exercício 7://

let valorNumeroUm = parseInt(prompt("Valor número um:"))

let valorNumeroDois = parseInt(prompt("Valor número dois:"))

let restoDivisao = valorNumeroUm % valorNumeroDois

alert(`O resto da divisão de ${valorNumeroUm} por ${valorNumeroDois} é: ${restoDivisao}.`)

//Exercício 8://

let texto = (prompt("Texto:"))

let tamanhoTexto = texto.length

alert(`Este texto tem ${tamanhoTexto} caracteres.`)

//Exercício 9://

let palavraOuFrase = (prompt("Palavra ou frase:"))

let primeiraLetra = palavraOuFrase[0].toUpperCase()

let palavraOuFraseLenght = palavraOuFrase.length

let ultimaLetra = palavraOuFrase[palavraOuFraseLenght-1].toLowerCase()

alert(`A primeira letra deste texto é ${primeiraLetra} e última é ${ultimaLetra}.`)

//Exercício 10://

let nome = (prompt("Nome:"))

let sobrenome = (prompt("Sobrenome:"))

let idade = parseInt(prompt("Idade:"))

let setor = (prompt("Setor:"))

let nomeLetraMaiuscula = nome[0].toUpperCase() 

let sobrenomeLetraMaiuscula = sobrenome[0].toUpperCase()

let setorLetraMaiuscula = setor[0].toUpperCase()

alert(`Nome: ${nomeLetraMaiuscula + nome.substring(1)} - Sobrenome: ${sobrenomeLetraMaiuscula + sobrenome.substring(1)} - Idade: ${idade} - Setor: ${setorLetraMaiuscula + setor.substring(1)}.`)

