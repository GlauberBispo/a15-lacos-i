// let maisCoxinha = prompt('Você deseja pedir uma coxinha?(S/N)').toUpperCase();
// let conta = 0;

// while (maisCoxinha !== "N") {
//     conta += 2.50;
//     maisCoxinha = prompt('Deseja comer mais uma coxinha?(S/N)').toUpperCase();
// }

// alert(`sua conta deu um total de R$ ${conta}.` );

//Criando carrinho de compras:

let acessarMenu = prompt('Deseja acessar o nosso menu interativo? (S/N)').toUpperCase();
let conta = 0
let opcoesMenu = 0
let coxinhaFrango = 0
let coxinhaFrangoCatupiry = 0
let empadaFrango = 0
let empadaFrangoCatupiry = 0
let refri350ml = 0 
let refri1L = 0
if (acessarMenu === "S") {
    while (acessarMenu !== "N"){
    opcoesMenu = +prompt(`Escolha o item que deseja adicionar ao pedido:
    [1]Coxinha de frango - R$5,00;
    [2]Coxinha de frango com catupiry - R$6,00;
    [3]Empada de frango - R$5,00;
    [4]Empada de frango com catupiry - R$6,00;
    [5]Refrigerante lata 350ml - R$4,00;
    [6]Refrigerante 1L - R$7,00.`);
        switch (opcoesMenu) {
            case 1:
                conta += 5
                coxinhaFrango++
                break;
            case 2:
                conta += 6
                coxinhaFrangoCatupiry++
                break;
            case 3:
                conta += 5
                empadaFrango++
                break;
            case 4:
                conta += 6
                empadaFrangoCatupiry++
                break;
            case 5:
                conta += 4
                refri350ml++
                break;
            case 6:
                conta += 7
                refri1L++
                break;
            default:
                alert('Escolha um item existente do menu para adicinar ao carrinho:')
        }
        acessarMenu = prompt('Deseja incluir outro item ao seu pedido? (S/N)').toUpperCase()
        
    }
    alert(`Com o consumo de:
    ${coxinhaFrango} Coxinha(s);
    ${coxinhaFrangoCatupiry} Coxinha(s) de frango com catupiry;
    ${empadaFrango} Empada(s) de frango;
    ${empadaFrangoCatupiry} Empada(s) de frango com catupiry;
    ${refri350ml} Refrigerante(s) lata;
    ${refri1L} Refrigerante(s) 1L.
    O total de sua conta é R$${conta}.
    
    Obrigado e volte sempre!`);
}else {
    alert('Mesagem de finalização sem consumo aqui!')
};