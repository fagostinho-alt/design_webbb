let nasc = prompt("Digite seu ano de nascimento: ");
nasc = parseInt(nasc);

let viva = confirm("Se você está viva, cçique em ok.");

if (viva){
    alert(`Você tem ${2026-nasc} anos.`);
}else{
    alert("Você morreu.");
}
