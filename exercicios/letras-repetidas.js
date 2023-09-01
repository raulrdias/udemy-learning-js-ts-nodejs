const palavra = "Raul Rodrigues Dias";
const palavraEdit = palavra.toLowerCase().replaceAll(" ", "");
let letras = {}

for (let i = 0; i < palavraEdit.length; i++) {
    if (letras[palavraEdit[i]]) {
        letras[palavraEdit[i]]++
    }else {
        letras[palavraEdit[i]] = 1;
    }
}

console.log(letras)