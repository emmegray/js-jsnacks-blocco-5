/*
JSnack 3
1. Scrivere una funzione con una stringa come argomento
2. Ritornare la stringa girata
*/

function stringaRovesciata(stringa) {
    let stringaRovesciata = ""
    for (let index = stringa.length - 1; index >= 0; index--) {
        const lettera = stringa[index];
        stringaRovesciata += lettera;
    }
    return stringaRovesciata
}
console.log(
    stringaRovesciata("hello")
);