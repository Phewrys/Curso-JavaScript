function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        // alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = `Contando: <br/>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(let x = i; x <= f; x += p) {
                res.innerHTML += ` ${x} \u{1F449}`
            }
        } else {
            // Contagem regresiva
            for(let c = 1; c >= f; c-= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}







// var contar = document.querySelector('input#contar')
// contar.addEventListener('click', contagem)

// function contagem() {
//     var inicio = document.querySelector('input#inicio')
//     var fim = document.querySelector('input#fim')
//     var passo = document.querySelector('input#passo')
//     var res = document.querySelector('div#res')

//     if (inicio.value == '' || fim.value == '' || passo.value == ''){
//         res.innerHTML = 'Impossível contar!'
        
//     } else if (passo.value == 0) {
//         alert(`Passo inválido! Considerando PASSO 1.`)
//         passo.value = 1
//     }
     
//     var i = Number(inicio.value)
//     var f = Number(fim.value)
//     var p = Number(passo.value)

//     for (i; i <= f; i += p){
//         res.innerHTML = i
//     }
// }

// // function StartContagem() {
// //     var inicio = parseInt(document.getElementById('inicio').value)
// //     var fim = parseInt(document.getElementById('fim').value)
// //     var passo = parseInt(document.getElementById('passo').value)
// //     var res = ''
// //     for(var i=0; i <= fim; i+=passo) {
// //         res += (` => ${i}`)
// //     }
// //     document.getElementById('contagem').innerText = (res)
// // }

// // function StartContagem(inicio, fim, passo) {
// //     var res = ''
// //     for(var i=parseInt(inicio); i <= parseInt(fim); i+=parseInt(passo)) {
// //         res += (` => ${i}`)
// //     }
// //     document.getElementById('contagem').innerText = (res)
// // }
// // function Validação() {
// //     var inicio = document.getElementById('inicio').value
// //     var fim = document.getElementById('fim').value
// //     var passo =document.getElementById('passo').value
// //     if (passo == 0) {
// //         window.alert('Passo invalido, CONSIDERANDO PASSO = 1')
// //         passo = 1
// //     }
// //     if (inicio == '' || fim == '') {
// //         document.getElementById('contagem').innerText = ('Impossivel contar')
// //     }
// //     else {
// //         StartContagem(inicio, fim, passo)
// //     }
// // }