let totalDeDias = parseInt(gets());

let qtdAnos, qtdMeses,qtdDias;

if(totalDeDias > 0){
  
  qtdAnos = parseInt(totalDeDias / 365);
  
  qtdMeses= parseInt((totalDeDias % 365) / 30);
  
  qtdDias = parseInt((totalDeDias % 365) % 30);
  
  let resultado = (qtdAnos + " ano(s) " + '\n' + 
  qtdMeses +" mes(es)" + '\n' +
  qtdDias + " dia(s)");
  
  print(resultado);
} else {
  
  print("Valor inserido é Inválido")
}


console.log(resultado);