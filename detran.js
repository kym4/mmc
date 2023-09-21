class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}
class Carro extends veiculo {
    constructor(marca, modelo, ano, hp) {
        this.hp = ph;
        super(marca, modelo, ano, hp)


    }
}
class Moto extends veiculo {
    constructor(marca, modelo, ano, cc) {
        this.cc = cc;
        super(marca, modelo, ano, cc)
    }
}
let marca = prompt("marca");
let modelo = prompt("modelo");
let ano = parseInt(prompt("ano"));
let hp = prompt("pontecia do carro");
let cc = prompt("pontecia da moto");

const veiculo = new veiculo(marca, modelo, ano)
alert(veiculo.marca + "\n" + veiculo.modelo + "n\ +" veiculo.ano);

let opcao = prompt("garagem da kimberly n\ 1.moto + n\ 2.carro");
switch (opcao){
   case '1':
    var mar= prompt("marca");
    let modelo= prompt("modelo");
    let ano= prompt("ano");
    let potencia= prompt("potencia");
    const corro1 =mew Carro (marca, modelo, ano, potencia);
         alert(`${carro1.marca}\n${carro1.modelo}\n${carro1.ano}\n`);

    case'2':
        alert("corro");break;
        
    default: alert("opcao invalida");    
}








