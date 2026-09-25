const amigos = []
const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc;
const whatsapp = cadastro.whatsapp;
const lista = document.getElementById("lista");
let editando = null;
cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    let item = [nome.value, nasc.value, whatsapp.value];
    if (editando == null){
        //Se editando nulo, comece adicionar
    
    let check = amigos.find(item => item[0] == nome.value);
    if (check ==  undefined){
        amigos.unshift(item);
        //Adiciona se não existir
        cadastro.reset();
        //Limpa om formulário
    }else{
        alert(`${nome.value} já cadastrado.`)
    }
    }else{
        //Se editando diferente de nulo, atualizar
        let amigo = amigos[editando] //[nome, nasc, whatsapp]
        amigo[0] =  nome.value; //Valor digitado em input name=nome
        amigo[1] = nasc.value; //Valor digitado em input name=nasc
        amigo[2] = whatsapp.value; //Valor digitado em input name=whatsapp
    }
    //Atualiza Lista
    exibirLista();
});

function exibirLista(){
    let itens ="";
    for(let i = 0; i<amigos.length; i++){
        let item = amigos[i]; //item = [Nome, Nasc, Whatsapp]
        // cria botão para remover
        let remover = `<button onclick=remover(${i})>Remover</button>`
        let atualizar = `<button onclick="atualizar(${i})">Atualizar</button>`
        //Cria uma tag li
        let li = `<li>${item[0]} | ${item[1]} | ${item[2]} | ${remover} ${atualizar} </li>`;
        //Junta oli nos itens
        itens = itens + li;
    }
    //Alterar o html da lista para ser igual aos itens
    lista.innerHTML = itens;
} 

function remover(i){
    let item = amigos[i]; //[nome, nasc, whatsapp]
    let check = confirm(`Deseja realmente excluir ${item[0]}?`);
    if (check == true){
        amigos.splice(i,1); //splice
    }
    exibirLista();
} 


function atualizar(i){
    editando = i;
    let item = amigos[editando]; //[nome, nasc, whatsapp]
    nome.value = item[0];
    nasc.value = item[1];
    whatsapp.value = item[2];

}