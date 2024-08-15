function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var msg2 = document.getElementById('msg2')
    var data = new Date()
    var hora = data.getHours()
    var minute = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minute} minutos`
    if (hora >=0 && hora < 6){
        img.src= 'madrugada.jpg'
        document.body.style.background ='#25338aff'
        msg2.innerHTML = `Boa Madrugada!!`
    } else if (hora >= 6 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background ='#77c0e9ff'
        msg2.innerHTML = `Bom Dia!!`
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background ='#ffc07aff'
        msg2.innerHTML = `Boa Tarde!!`
    } else {
        img.src = 'noite.jpg'
        document.body.style.background ='#1a2340ff'
        msg2.innerHTML = `Boa Noite!!`
    }
}
