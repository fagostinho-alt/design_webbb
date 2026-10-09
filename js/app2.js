class Animal{
    constructor(n, c="desconhecido", a=0.0, p=0, r="vira-lata"){
        this.nome = n;
        this.cor = c;
        this.altura = a;
        this.peso = p;
        this.raca = r;
    }
    falar(){
        alert("oi");
    }
    comer(kg){
        this.peso = this.peso + kg;
        alert("comi");
    }
    cagar(kg){
        this.peso = this.peso -kg;
        alert("Caguei");
    }
    saudar(){
        let msg = `Ola meu nome é ${this.nome}\n`;
        msg = msg + `Cor: ${this.cor} Raça: ${this.raca}\n`;
        msg = msg + `Peso: ${this.peso}\n`;
        msg = msg + `Altura ${this.altura}\n`;
        alert(msg)
    }
}

const balu = new Animal("Balu Brasil");
const mel = new Animal("Mel", "Amarelo", 1.10, 45, "Labrador")