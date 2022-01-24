 // Crie um array que receba 5 itens e exiba no console.
let games = ["Minecraft", "League of Legends", "The Witcher", "Call Of Duty", "Battlefield"]
console.log(games)
console.log("____________________________________")
// Utilize um método para adicionar um nome ao inicio do array.
let nomes = ["Luiz","Paulo","Pablo", "João", "Ana", "Luzia"]

nomes.unshift("André")
console.log(nomes)

console.log("____________________________________")

// Utilize um método para remover o último nome do array.
nomes.pop()
console.log(nomes)

console.log("____________________________________")

// Utilize um método para adicionar dois nomes ao fim do array.

nomes.push("Camilly", "Ester")

console.log(nomes)

console.log("____________________________________")

// Utilize um método para remover o primeiro nome do array.

nomes.shift()
console.log(nomes)

console.log("____________________________________")

// Utilize um método para organizar em ordem crescente o seguinte array:
// const numbers = [7,5,6,3,8,9,2,1,4]

const numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort(function(a,b){
    return a-b
})
console.log(numbers)