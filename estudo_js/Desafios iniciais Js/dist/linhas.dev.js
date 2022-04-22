"use strict";

var totalDeDias = parseInt(gets());
var qtdAnos, qtdMeses, qtdDias;

if (totalDeDias > 0) {
  qtdAnos = parseInt(totalDeDias / 365);
  qtdMeses = parseInt(totalDeDias % 365 / 30);
  qtdDias = parseInt(totalDeDias % 30 % 30);

  var _resultado = qtdAnos + " ano(s) " + '\n' + qtdMeses + " mes(es)" + '\n' + qtdDias + " dia(s)";

  print(_resultado);
} else {
  print("Valor inserido é Inválido");
}

console.log(resultado);