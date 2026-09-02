let dia = prompt("Escolha um dia da semana\n sendo 1:Domingo - 7:Sábado");
dia = Number(dia);
switch(dia){
    case 1: alert("você escolheu domingo")
    case 2: alert("você escolheu segunda")
    case 3: alert("você escolheu terça")
    case 4: alert("você escolheu quarta")
    case 5: alert("você escolheu quinta")
    case 6: alert("você escolheu sexta")
    case 7: alert("você escolheu sábado")
    default: alert("Di inválido");
}