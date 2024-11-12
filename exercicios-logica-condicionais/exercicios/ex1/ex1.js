var num1 = parseInt(prompt("Informe um número: "));
var num2 = parseInt(prompt("Informe outro número: "));

if(num1 > num2){
    alert(num1+" é maior que "+num2);
}else if (num1 < num2){
    alert(num2+" é maior que "+num1);
}else{
    alert(num1+" e "+num2+" são iguais")
}