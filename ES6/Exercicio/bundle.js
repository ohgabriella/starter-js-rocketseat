"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Exercicio 1
var Usuario = /*#__PURE__*/function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return false;
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin() {
    _classCallCheck(this, Admin);

    return _super.apply(this, arguments);
  }

  _createClass(Admin, [{
    key: "isAdmin",
    value: function isAdmin() {
      return true;
    }
  }]);

  return Admin;
}(Usuario);

var User1 = new Usuario('email@email.com', '123');
var Admin1 = new Admin('admin@email.com', '1233');
console.log(User1);
console.log(Admin1);
console.log(User1.isAdmin());
console.log(Admin1.isAdmin()); //Exercicio 2

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //retornar a idade dos usuarios usando map

var userAge = usuarios.map(function (item, index) {
  return item.idade;
});
console.log(userAge); //filtrar usuarios que trabalham na rocketseat e com mais de 18 anos

var userRocketseat = usuarios.filter(function (item) {
  if (item.empresa == 'Rocketseat' && item.idade === 23) {
    return item;
  }
});
console.log(userRocketseat); //procurar um usuario que trabalhe na Google

var findGoogle = usuarios.find(function (item) {
  return item.empresa == 'Google';
});
console.log(findGoogle); //Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
//no máximo 50 anos

var sumAgeUser = usuarios.filter(function (item, index) {
  item.idade = item.idade * 2;

  if (item.idade <= 50) {
    return item;
  }
});
console.log(sumAgeUser); //Exercicio 3
// 3.1

var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
});
console.log(arr); // 3.2
// Dica: Utilize uma constante pra function

var usuario = {
  nome: 'Diego',
  idade: 23
};

var fun = function fun(usuario) {
  return usuario.idade;
};

console.log(fun(usuario)); // 3.3
// Dica: Utilize uma constante pra function

var nome = "Diego";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

mostraUsuario(nome, idade);
mostraUsuario(nome);
console.log(mostraUsuario(nome, idade)); // 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; //Exercicio 4 - desestruturação simples


var empresa = {
  name: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var name = empresa.name,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(name);
console.log(cidade);
console.log(estado); //desestruturação em parametros

function mostraInfo(empresa) {
  return "".concat(name, " \xE9 de ").concat(cidade, ".");
}

mostraInfo(empresa);
console.log(mostraInfo(empresa)); //Exercicio 5 

var arr1 = [1, 2, 3, 4, 5, 6];
var x = arr1[0],
    y = arr1.slice(1);
console.log(x);
console.log(y);

function somarNumeros() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(somarNumeros(1, 2, 3));
var newUsuario = {
  nomeUsuario: 'Diego',
  idadeUsuario: 23,
  enderecoUsuario: {
    cidadeU: 'Rio do Sul',
    ufU: 'SC',
    paisU: 'Brasil'
  }
}; //Exercicio 6

console.log("O usu\xE1rio ".concat(nome, " possui ").concat(idade, " anos")); //Exercicio 7

var nnome = 'Diego';
var aage = 23;
var uusuario = {
  nnome: nnome,
  aage: aage,
  ccidade: 'Rio do Sul'
};
console.log(uusuario);
