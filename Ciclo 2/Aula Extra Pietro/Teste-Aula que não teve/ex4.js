salario = parseFloat(prompt("Insira o salario base: "));

sal_liq = (salario + 600 - (salario*0.1));

console.log("Salário líquido a receber: R$", sal_liq);
