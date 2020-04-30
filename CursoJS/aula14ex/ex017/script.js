function tabuada () {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 0
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
    
    // res.innerHTML = `Tabuada de ${num.value}: <br/>`
    // for(let count = 0; count <= 10; count++) {
    //     let x = count*n
    //     res.innerHTML += `${count} X ${num.value} = ${x} <br/>`
    // }

}