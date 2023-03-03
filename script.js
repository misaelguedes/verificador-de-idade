function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criança-homem.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-homem.png')
            } else {
                img.setAttribute('src', 'idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criança-mulher.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-mulher.png')
            } else {
                img.setAttribute('src', 'idoso-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${gênero}</strong> com <strong>${idade}</strong> anos.`
        res.appendChild(img)
    }
}