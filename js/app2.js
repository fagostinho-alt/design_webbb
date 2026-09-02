let dia = prompt("Escolha um dia da semana\n sendo 1:Domingo - 7:Sábado");
dia = Number(dia);
if (dia <=0 || dia >=8){
    alert("dia inválido");
}else if (dia == 1){
    alert("você escolheu domingo");
}else if (dia == 2){
    alert("você escolheu segunda");
}else if (dia == 3){
    alert("você escolheu terça");
}else if (dia == 4){
    alert("você escolheu quarta");
}else if (dia == 5){
    alert("você escolheu quinta");
}else if (dia == 6){
    alert("você escolheu sexta");
}else {
    alert("você escolheu sábado");
}