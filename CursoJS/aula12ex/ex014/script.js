function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'xmanha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'xtarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'xnoite.jpg'
        document.body.style.background = '#515154'
    }
}