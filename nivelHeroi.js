var sair=1
while(sair){
    const nome = prompt('Digite o Nome do Herói!')
    const experiencia = parseInt(prompt('Digite a Experiência do Herói! ou 0 pra sair'))
    var nivel = ""
    switch(true){
        case (experiencia<=1000):{
            nivel = "Ferro"
            break
        }case (experiencia<=2000):{
            nivel = "Bronze"
            break
        }case (experiencia<=5000):{
            nivel = "Prata"
            break
        }case (experiencia<=7000):{
            nivel = "Ouro"
            break
        }case (experiencia<=8000):{
            nivel = "Platina"
            break
        }case (experiencia<=9000):{
            nivel = "Ascendente"
            break
        }case (experiencia<=10000):{
            nivel = "Imortal"
            break
        }case (experiencia>10000):{
            nivel = "Radiante"
            break
        }
    }
    if (experiencia!=0) alert(`O Herói de nome ${nome} está no nível de ${nivel}`)
    sair=experiencia;
}