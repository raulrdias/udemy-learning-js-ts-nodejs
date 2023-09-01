// Função para calcular o índice de massa corporal (IMC)
function imc(peso, altura) {
    // Exibe informações de peso e altura
    console.log(`Peso: ${peso} / Altura: ${altura}`);
    // Calcula o IMC usando a fórmula peso / altura^2
    return (peso / altura ** 2);
}

// Função para determinar o resultado com base no IMC calculado
function resultado(resImc) {
    // Exibe o valor do IMC com duas casas decimais
    console.log(`IMC = ${resImc.toFixed(2)}`);

    // Verifica em qual faixa o IMC se encaixa e exibe uma mensagem correspondente
    if (resImc < 17) {
        return console.log('Muito abaixo do Peso');
    } else if (resImc < 18.49) {
        return console.log('Abaixo do Peso');
    } else if (resImc < 24.99) {
        return console.log('Peso normal');
    } else if (resImc < 29.99) {
        return console.log('Acima do peso');
    } else if (resImc < 34.99) {
        return console.log('Obesidade I');
    } else {
        return console.log('Obesidade II');
    }
}

// Chamada da função imc para calcular o IMC com valores de peso (67) e altura (1.87)
const calculoImc = imc(67, 1.87);

// Chamada da função resultado para determinar e exibir o resultado com base no IMC calculado
const resultadoFinal = resultado(calculoImc);
