/*
JSnack 1
1. Creare un array di 10 oggetti che rappresentano una zucchina, indicando varietà, peso e lunghezza.
2. Calcolare quanto pesano tutte le zucchine
*/

const zucchine = [
    {
        "id": 1,
        "varietà": "Nera",
        "peso": 50,
        "lunghezza": 5,
    },
    {
        "id": 2,
        "varietà": "Romanesco",
        "peso": 20,
        "lunghezza": 50,
    },
    {
        "id": 3,
        "varietà": "Fiorentina",
        "peso": 80,
        "lunghezza": 15,
    },
    {
        "id": 4,
        "varietà": "Napoletana",
        "peso": 25,
        "lunghezza": 25,
    },
    {
        "id": 5,
        "varietà": "Tonde",
        "peso": 10,
        "lunghezza": 30,
    },
    {
        "id": 6,
        "varietà": "Trombetta",
        "peso": 30,
        "lunghezza": 7,
    },
    {
        "id": 7,
        "varietà": "Giallo",
        "peso": 36,
        "lunghezza": 9,
    },
    {
        "id": 8,
        "varietà": "Rugoso friulano",
        "peso": 40,
        "lunghezza": 14,
    },
    {
        "id": 9,
        "varietà": "Crookneck",
        "peso": 23,
        "lunghezza": 8,
    },
    {
        "id": 10,
        "varietà": "Patisson",
        "peso": 14,
        "lunghezza": 27,
    }
];

let pesoTotaleZucchine = 0;

for (let index = 0; index < zucchine.length; index++) {
    const zucchina = zucchine[index];
    pesoTotaleZucchine = zucchina.peso + pesoTotaleZucchine;
}

document.getElementById("pesoTotaleZucchine").textContent = `Peso totale zucchine: ${pesoTotaleZucchine}kg`