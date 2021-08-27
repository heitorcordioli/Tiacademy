/*Jeremias possui um cronômetro que consegue marcar o tempo apenas em segundos.
Sabendo disso, desenvolva um algoritmo que receba o tempo cronometrado, em
segundos, e diga quantas horas, minutos e segundos se passaram a partir do tempo
cronometrado.*/

var seg = parseInt(prompt("Insira o tempo cronometrado: "));
var hr = parseInt();
var min = parseInt();

hr = seg / 3600;
seg = seg % 3600;
min = seg / 60;
seg = seg % 60;

console.log("horas: ",hr);
console.log("minutos: ",min);
console.log("segundos: ",seg);