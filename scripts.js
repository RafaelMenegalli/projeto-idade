function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = document.getElementById('inascimento')
    var resultado = document.getElementById('resultado')

    if(nascimento.value.length == 0 || nascimento.value > ano){
        alert('[ERRO] Verifique os dados e tente Novamente!')
    } else{
        var idade = ano - Number(nascimento.value)
        var sexo1 = document.getElementById('imasculino')
        var sexo2 = document.getElementById('ifeminino')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        genero = ''
        if(sexo1.checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'imagens/crianca_homem.jpg')
            } else if(idade <= 21){
                img.setAttribute('src', 'imagens/jovem_homem.jpg')
            } else if(idade <= 50){
                //Adulto
                img.setAttribute('src', 'imagens/adulto_homem.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'imagens/idoso_homem.jpg')
            }
        } else if(sexo2.checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'imagens/crianca_mulher.jpg')
            } else if(idade <= 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem_mulher.jpg')
            } else if(idade <= 50){
                //Adulto
                img.setAttribute('src', 'imagens/adulto_mulher.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'imagens/idoso_mulher.jpg')
            }
        }
        resultado.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} Anos de Idade!`
        resultado.style.textAlign = 'center'
        resultado.appendChild(img)
        img.style.padding = '20px'
    }
}