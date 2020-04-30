let num = [5, 8, 2, 9, 3]

num[5] = 6

for (let x in num){
    console.log(`${num[x]}`)
}

let pos = num.indexOf(8)

console.log(`O valor 8 está na posição ${pos}`)