function verificarIdade() {


            
    var nome = document.querySelector('input[name=nome]'); //query selector é o elemento de seleção CSS
    var idade = document.querySelector('input[name=idade]')

    if (idade.value.length == 0) {
        alert('Idade é um campo obrigatório!')
        return // Break
    }

    var idadeNum = parseInt(idade.value) // Converte idade para número

    if (idadeNum >= 18) {
        alert('OK, você pode tirar sua CNH.')
    } else if (idadeNum > 4){
        alert('Você é menor de idade. Por enquanto sugiro andar de bike.')
    } else {
        alert('Melhor você tomar leite...')
    }

    console.log(nome.value) // Buscando pelo valor que tá no elemento
    console.log(typeof nome.value)
    console.log(idadeNum)
    console.log(typeof idadeNum)
}