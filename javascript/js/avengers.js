var avengers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoff', 'Steve Rogers','Scot Lang']

function listaVingadores() {

    var ul = document.getElementById('avengers')
    ul.innerHTML = '' // Para não duplicar a lista, pois antes de criar a lista a anterior é esvaziada

    avengers.forEach(function (a) { // Para cada elemento em avengers, irá executar uma função vazia que receberá o a
        var li = document.createElement('li') // Criando a estrutura da tabela
        var text = document.createTextNode(a) // Criando o texto que irá ficar dentro do elemento
        li.appendChild(text) // Junção da li + conteúdo do elemento
        ul.appendChild(li) // adicionando a li dentro da ul
    })
}