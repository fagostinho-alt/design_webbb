let num = Number(prompt("Digite um número:"));

if (num % 2 != 0){
    alert(`${num} é impar `);
}else if(num == 0){
    alert(`${num} é zero `);
}else{
    alert(`${num} é par`);
}