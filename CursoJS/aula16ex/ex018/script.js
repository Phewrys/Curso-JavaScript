var x = document.getElementById('p')
var vetor = []
var tab = document.getElementById('seltab')
var maior = 0
var menor = 100
var soma = 0
var media = 0

function adicionar() {
    x.innerHTML = ''
    var numx = document.getElementById('txtn')
    var num = Number(numx.value)
    vetor.push(num)

    if (numx.value.length == 0) {
        alert('Valor é inválido ou já encontrado na lista.')
        //falta comparar se já existe.
    } else if (numx.value < 1 || numx.value > 100) {
        alert('Valor é inválido.')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        tab.appendChild(item)

        soma += num
        if(maior <= num){
            maior = num
        }
        if(menor >= num){
            menor = num
        }
    }
    numx.value = ''
    numx.focus()
}

function finalizar() {
    for(let y in vetor) {
        count = y.length
    }

    x.innerHTML = `<p>Ao todo ${vetor.length} números cadastrados</p>
    <p>O maior valor informado foi ${maior}</p>
    <p>O menor valor informado foi ${menor}</p>
    <p>Somando todos os valores temos ${soma}</p>
    <p>A média dos valores digitados é ${soma / vetor.length}</p>
    `
}