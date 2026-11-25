// objeto
const hero = {
    name: "Thor",
    team: "Vingadores",
    power: 98,
    weapons: ["Stormbreaker", "Mjolnir"],
    origin: { planet: "Asgard" }
}

// lendo objeto
hero.name   // notação de ponto - maneira de fazer uma leitura de um valor específico dentro de um objeto
console.log(hero.name);

hero["team"] // notação de colchete - para usos mais específicos como quando a chave é um número ou variável com um valor que está no obj
console.log(hero["team"]);

hero.origin.planet // obj dentro de obj
console.log(hero.origin.planet);

hero.weapons[0] // array dentro do obj - primeiro item de array e index sempre 0, não 1
console.log(hero.weapons[0]);

const key = "power" // colcheites aceitam variável
console.log(hero[key]);

hero.age // undefined -> não existe - não foi definida

// Alterando adicionando e removendo

hero.power = 99
console.log(hero);

hero.nickname = "Deus do Trovão"
console.log(hero);

delete hero.nickname
console.log(hero);

hero.age = 1500
// Percorrendo um objeto
for (const prop in hero) { // cria uma variável de escopo - pertence só ao for - o for percorre o obj de acordo com a quantidade de chaves
    console.log(`${prop}: `, hero[prop]);
}

Object.keys(hero) // lista de chaves 
Object.values(hero) // lista de valores

// Desestruturação
const { name, team } = hero
console.log(name, team);


// método - ação praticada pelo obj
const villain = {
    name: "Doutor Destino",
    power: 500,
    attack(target) {
        return `${this.name} atacou ${target}!` // this é esse objeto - this = villain neste caso
    },
    powerUp(amount) {
        this.power += amount
        return this.power
    }
}

console.log(villain.attack("Thor"))
console.log(villain.powerUp(50))

// referência x cópia
const ref = hero // Uma referência, não uma cópia

ref.power = 1

console.log(hero.power);
