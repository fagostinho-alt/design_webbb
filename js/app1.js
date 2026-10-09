const balu = {
    nome:"Balu Brasil",
    cor:"Preto",
    altura:0.58,
    peso:11.5,
    raca:"vira-vala",
    latir(){
        alert("au au");
    },
    comer(kg){
        this.peso = this.peso + kg;
        alert("comi");
    },
    cagar(kg){
        this.peso = this.peso -kg;
        alert("Caguei");
    },
    saudar(){
        let msg = `Ola meu nome é ${this.nome}\n`;
        msg = msg + `Cor: ${this.cor} Raça: ${this.raca}\n`;
        msg = msg + `Peso: ${this.peso}\n`;
        msg = msg + `Altura ${this.altura}\n`;
        alert(msg)
    }
}