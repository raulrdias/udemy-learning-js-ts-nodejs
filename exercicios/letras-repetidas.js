// Definir uma string de exemplo contendo o nome "Raul Rodrigues Dias"
const palavra = "Raul Rodrigues Dias";

// Transformar a string em letras minúsculas e remover espaços em branco
const palavraEdit = palavra.toLowerCase().replaceAll(" ", "");

// Inicializar um objeto vazio para armazenar a contagem de letras
let letras = {}

// Loop através de cada caractere na string editada
for (let i = 0; i < palavraEdit.length; i++) {
    // Verificar se a letra já existe no objeto "letras"
    if (letras[palavraEdit[i]]) {
        // Se existir, incrementar o contador para essa letra
        letras[palavraEdit[i]]++;
    } else {
        // Se não existir, criar a entrada no objeto com contagem 1
        letras[palavraEdit[i]] = 1;
    }
}

// Exibir o objeto "letras" que contém a contagem de cada letra
console.log(letras);
