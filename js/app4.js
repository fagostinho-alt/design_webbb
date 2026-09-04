let vezes = Number(prompt("Digite o número de vezes: "));
for (let i = 1; i<vezes; i++){
    if (vezes > 100){
        alert("Valor inválido, recarregue a página e digite um bvalor de 0 a 100");
        break // quebra totalmente o bloco de repetição
    }
    alert(`Cotei ${i} vezes`);
    if (i%2!=0){ //é impar?
        continue; //se impar, continua = voltar para o inicio.
    }
    alert(`${1} é par`);
}