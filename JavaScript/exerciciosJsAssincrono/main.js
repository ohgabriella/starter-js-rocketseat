//funcão que retorna se a idade é maior ou menor que 18 anos
function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (idade > 18) {
                resolve()
            } else {
                reject()
            }
        }, 2000)
    })
}
checaIdade(20)
    .then(function () { console.log("Maior que 18"); })
    .catch(function () { console.log("Menor que 18"); })



//AXIOS

var nome = document.querySelector('#app input')
var add = document.querySelector('#app button')
var lista = document.querySelector('#app ul')

function adicionar() {
    lista.innerHTML = '';
    axios.get('https://api.github.com/users/' + nome.value + '/repos')
    .then(function (response) {
        for (data of response.data){
            //adiciono a li
            var listaRepos = document.createElement('li')
            var repo = document.createTextNode(data.name)
            //jogo a li na tela
            listaRepos.appendChild(repo)
            lista.appendChild(listaRepos)
        }
        //console.log(response.data)
    })
    .catch(function (response) {
         //adiciono a li
         var listaRepos = document.createElement('p')
         var repo = document.createTextNode('Usuario não existe!')
         //jogo a li na tela
         listaRepos.appendChild(repo)
         lista.appendChild(listaRepos)
        
         //console.warn(response.status)
    })

    

    
}








