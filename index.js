class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = this.determinarAtaque();
    }

    determinarAtaque() {
        const ataques = {
            "mago": "magia",
            "guerreiro": "espada",
            "monge": "artes marciais",
            "ninja": "shuriken"
        };

        return ataques[this.tipo] || "ataque indefinido";
    }

    atacar() {
        console.log(`O ${this.nome} atacou usando ${this.ataque}`);
    }
}

const guerreiro = new Heroi("Guerreiro", 30, "guerreiro");
const mago = new Heroi("Mago", 100, "mago");
const monge = new Heroi("Monge", 50, "monge");
const ninja = new Heroi("Ninja", 25, "ninja");

guerreiro.atacar();  
mago.atacar();       
monge.atacar();      
ninja.atacar();      
