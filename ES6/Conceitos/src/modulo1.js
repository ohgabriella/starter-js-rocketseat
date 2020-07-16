/*---Classes em javascript---*/
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data)
        console.log(this.data)
    }
}

class TodoList extends List {
    constructor() {
        super();
        this.usuario = 'Diego'
    }

    mostrarUsuario() {
        console.log(this.usuario)
    }
 }


var MinhaLista = new TodoList()


//adiciono o evento na dom
document.getElementById('adicionar').onclick = function() {
    MinhaLista.add('New todo');
}


MinhaLista.mostrarUsuario();


/*---Metodos estaticos: passa informação e retorna outra informação, ou seja, não depende de nenhuma outra informação da nossa classe---*/
class ToList {
    constructor() {
        this.tolist = []
    }

    static addList() {
        return 'classe estatica'
    }

    static mathSum(a, b) {
        return a + b;
    }
}

console.log(ToList.addList());
console.log(ToList.mathSum(2, 3));

/*---Constantes: não podemos atribuir outro valor a variavel---*/

// const a = 1;
// a = 3
// console.log(a)

const usuario = { nome: 'Cleiton'}
console.log(usuario.nome)

//variaveis de escopo
function todo(x) {
    let y = 2;

    if(x>5) {
        console.log(x, y)
    }
}

todo(10)

/*---Operações com vetores---*/

const arr = [1, 2, 3, 4, 5]
//usa map pra trabalhar as propriedades dentor do array
const newArray = arr.map(function(item, index) {
    return item * index
})

console.log(newArray)
//reduce
const sum = arr.reduce(function(total, next) {
    return total + next;
})

console.log(sum)

//o filter ele seleciona os elementos com uma condição
const filter = arr.filter(function(item) {
    return item %2 === 0;
})

console.log(filter)

//find para verificar se existe alguma informação no array
const find = arr.find(function(item) {
    return item === 4;
})

console.log(find)


/*---Arrow functions---*/

//funcão anonima
const otherArray = arr.map(item => item*2)

console.log(otherArray)


//da pra usar nesse formato também, mas não funciona se quiser retornar objetos
const teste = () => 3

console.log(teste())

//nesse formato da certo
const testeArray = () => ({ nome: 'Gasbi'})

console.log(testeArray())

/*--- Valores padrao ---*/

const soma = (a=3, b=5) => a + b;
console.log(soma(2));
console.log(soma());

/*--- Desestruturação ---*/
const user = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    }
}

const { nome, idade, endereco: { cidade, estado }} = user;

console.log(nome)
console.log(idade)
console.log(cidade)

function mostraNome ({nome, idade}) {
    console.log(nome, idade)
}

mostraNome(user)


/*--- Rest e Spread ---*/

//Rest
const rest = {
    restNome: 'Diego',
    idade: 23
}

const { restNome, ...resto } = rest;

console.log(restNome)
console.log(resto)

const array = [1,2,3,4]

const [ a, b, ...c ] = array
console.log(a)
console.log(c)

function somar(...params) {
    return params.reduce((total, next) => total + next )
}

console.log(somar(1,2,3))

//SPREAD

const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1, ...arr2]
console.log(arr3)


/*---Template Literals---*/

const name = "Gabi"
const age = 23

console.log(`Meu nome é ${name} e minha idade é ${age}`)


/*--- Object Short Syntax ---*/
const newUser =  {
    name, 
    age,
}

console.log(newUser)