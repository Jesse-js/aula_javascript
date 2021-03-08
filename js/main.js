var nome="Jessé Jorge";
var idade=29;/*//-comentando em JS*/
var idade2 = "10";
//alert(nome +" tem "+idade+" anos");
alert(idade+idade2);
/*O JS tem tipagem dinâmica*/
console.log(idade+idade2);
function botao(){
  alert("Obrigado por clicar!")
}
function obrigado(){
  document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
}

/*arrays*/
var lista = ['maçã', 'pêra', 'laranja'];
console.log(lista[1]);
lista.push('uva');
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.join('.'));
console.log(lista.toString());

/*dicionário*/
var fruta = {nome:'maçã', cor:'vermelha'}
console.log(fruta.cor);
