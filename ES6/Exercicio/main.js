//Exercicio 1
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return false;
    }
}

class Admin extends Usuario {
    isAdmin() {
        return true
    }
}

const User1 = new Usuario('email@email.com', '123')
const Admin1 = new Admin('admin@email.com', '1233')

console.log(User1)
console.log(Admin1)

console.log(User1.isAdmin())
console.log(Admin1.isAdmin())

//Exercicio 2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//retornar a idade dos usuarios usando map
const userAge = usuarios.map(function (item, index) {
    return item.idade;
})

console.log(userAge)

//filtrar usuarios que trabalham na rocketseat e com mais de 18 anos
const userRocketseat = usuarios.filter(function (item) {
    if (item.empresa == 'Rocketseat' && item.idade === 23) {
        return item;
    }
})

console.log(userRocketseat);

//procurar um usuario que trabalhe na Google
const findGoogle = usuarios.find(function (item) {
    return item.empresa == 'Google'
})

console.log(findGoogle)

//Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
//no máximo 50 anos
const sumAgeUser = usuarios.filter(function (item, index) {
    item.idade = item.idade * 2;

    if (item.idade <= 50) {
        return item;
    }

})

console.log(sumAgeUser)



//Exercicio 3

// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);
console.log(arr)

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const fun = (usuario) => usuario.idade;
console.log(fun(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => {
    return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);

console.log(mostraUsuario(nome, idade))

// 3.4
const promise = () => {
    return new Promise(function (resolve, reject) {
        return resolve();
    })
}


//Exercicio 4 - desestruturação simples

const empresa = {
    name: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { name, endereco: { cidade, estado } } = empresa;

console.log(name);
console.log(cidade);
console.log(estado);

//desestruturação em parametros


function mostraInfo(empresa) {
    return `${name} é de ${cidade}.`;
}

mostraInfo(empresa)
console.log(mostraInfo(empresa))


//Exercicio 5 
const arr1 = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr1

console.log(x)
console.log(y)

function somarNumeros(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(somarNumeros(1, 2, 3))

const newUsuario = {

};

const newUsuario = ['Diego', 23, 'Rio do Sul', 'SC', 'Brasil']


//Exercicio 6
console.log(`O usuário ${nome} possui ${idade} anos`);

//Exercicio 7
const nnome = 'Diego';
const aage = 23;

const uusuario = {
    nnome,
    aage,
    ccidade: 'Rio do Sul',
};

console.log(uusuario)



