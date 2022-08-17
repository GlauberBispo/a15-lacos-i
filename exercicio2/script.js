let numeroUsuario = +prompt('Informe um número para saber sua tabuada até 10.')
let tabuada
console.log(`Tabuada de ${numeroUsuario}:`)
for (let i = 1; i <= 10; i++) {
    tabuada = i * numeroUsuario;
    console.log(`${numeroUsuario} * ${i} = ${tabuada}`)
};
