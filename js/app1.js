let i = 1;
const imagem = document.getElementById("foto");

function proximo(e){
    e.preventDefault();
    if (i < 6){
        i = i + 1;
    }
    imagem.setAttribute("src",`./img/foto${i}.jpg`);
}

const prox = document.getElementById("prox");
prox.addEventListener("click", proximo);

function anterior(e){
    e.preventDefault();
    if (i>1){
        i = i - 1;
    }
    imagem.setAttribute("src", `./img/foto${i}.jpg`);
}

const ant = document.getElementById("ant");
ant.addEventListener("click", anterior);

function selecionar(e){
    e.preventDefault();
    i = cbbox.value;
    imagem.setAttribute("src",`./img/foto${i}.jpg`);
}

const cbbox = document.getElementById("combobox");
cbbox.addEventListener("change", selecionar);

const opacidade = document.getElementById("opacidade");
opacidade.addEventListener("input", function(e){
    e.preventDefault();
    let valor = opacidade.value;
    foto.setAttribute("style", `opacity:${valor}`);
});

const li1 = document.getElementById("li1");
li1.addEventListener("mouseover", function(e){
    e.preventDefault();
    i = 1;
    imagem.setAttribute("src", `./img/foto${i}.jpg`);
});

const li2 = document.getElementById("li2");
li2.addEventListener("mouseover", function(e){
    e.preventDefault();
    i = 2;
    imagem.setAttribute("src", `./img/foto${i}.jpg`);
});

const li3 = document.getElementById("li3");
li3.addEventListener("mouseover", function(e){
    e.addEventListener();
    i = 3;
    imagem.setAttribute("src", `./img/foto${i}.jpg`);
});

const li4 = document.getElementById("li4");
li4.addEventListener("mouseover", function(e){
    e.preventDefault();
    i = 4;
    imagem.setAttribute("src", `./img/foto${i}.jpg`);
})