/* Desenvolva um algoritmo para percorrer um vetor de 15 elementos
inteiros já preenchido e imprima todos os valores pares.*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
document.write('Exercício 1 Os vetores são:')
for (num of numeros) {
    if (num % 2 == 0) {
        document.write(` ${num},`)
    }
    
}

/*Desenvolva um algoritmo para percorrer um vetor de 20 elementos
inteiros e no final mostre a soma de todos os elementos.*/

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let soma = 0
document.write('</br>Exercício 2: A soma total é')
for (let num2 of numeros2) {
    soma += num2
}

document.write(` ${soma}.`)

/*Desenvolva um algoritmo que preenche um vetor com os 4
primeiros números perfeitos.*/

let numerospftos = [];
let numero = 1;

while (numerospftos.length < 4) {
    let somadivs = 0;

    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            somadivs += i;
        }
    }

    if (somadivs === numero) {
        numerospftos.push(numero);
    }

    numero++;
}

document.write('</br>Exercício 3 Os números perfeitos são:')

document.write(` ${numerospftos}`)

/*Desenvolva um algoritmo que declare uma lista de 10 números e
solicite um número para o usuário e no final informe se o número
que o usuário digitou está dentro da lista ou não.*/

const lista = [...Array(10)].map(()=>Math.round(Math.random() * 10))

const numerousuario = prompt("Digite um número:")

let encontrado = false

for (let i = 0; i <= lista.length; i++) {
    if (numerousuario === lista[i]) {
        encontrado = true
        break
    } else {
        encontrado = false
    }

}


document.write('</br>Exercício 4:')

    if (encontrado = true) {
        document.write("O número digitado está na lista.")
     } else if (encontrado = false) {
         document.write("O número digitado não está na lista.")
     }


/*Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
e que exiba a lista desses nomes na tela. Após exibir essa lista, o
programa deve mostrar também os nomes na ordem inversa em
que o usuário os digitou.

Ex:
Entrada: Édson, Marcelo, Letícia, Ju, Thobias
Saída: Thobias, Ju, Letícia, Marcelo, Édson*/


const listapessoas = []

const indice = 0

do {const nomes = prompt('Digite um nome.')
listapessoas.push(nomes)
} while (listapessoas.length <= 4)

document.write('</br>Exercício 5:')
document.write(`</br>Entrada: ${listapessoas}`)
document.write(`</br>Saída: ${listapessoas.reverse()}`)