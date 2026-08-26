var nasc = 1991;
let nome = "Andressa";
const viva = true;

function calcIdade(ano=2026){
    let idade = ano - nasc;
    let menor;
    if (idade < 18){
        menor = true;
        var podebeber = false;
    }else{
        menor = false;
        var podebeber = true;
    }

    alert(`${nome} é menor de idade? ${menor}\nIdade: ${idade}\nPode beber: ${podebeber}`)
    return idade;
}

calcIdade();
alert(`Pode beber: ${podebeber}`);
/*
alert(`Fora da funcao: Idade ${idade}`); 
Erro pois a variavel let nao existe fora do escopo dela
*/
alert(`Fora da funcao: Chamado calcIdade ${calcIdade(2027)}`);
