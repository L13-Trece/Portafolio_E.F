
let numero1=parseInt(prompt("Ingresa el primer numero"));
let numero2=parseInt(prompt("Ingresa el segundo numero"));

if (numero1>numero2) {
    alert(numero1+" es mayor que "+numero2);
    
} else if (numero1<numero2) {
    alert(numero2+" es mayor que "+numero1);
    
}else if(numero1=numero2){
    alert("Ambos numeros son iguales");
}