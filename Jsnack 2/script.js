/*
JSnack 2
1. Creare 10 oggetti che rappresentano una zucchina
2. Divido in 2 array separati di zucchine che misurano meno o più di 15cm.
3. Stampare separatamente quanto pesano i due gruppi di zucchine.
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

const zucchineGrandi = []
const zucchinePiccole = []
let pesoGrandi = 0;
let pesoPiccole = 0;

for (let index = 0; index < zucchine.length; index++) {
    const zucchina = zucchine[index];
    const { peso, lunghezza } = zucchina;

    if (lunghezza > 15) {
        zucchineGrandi.push(zucchina)
        pesoGrandi += peso
    } else {
        zucchinePiccole.push(zucchina)
        pesoPiccole += peso
    }
}

document.getElementById("PesoZucchineGrandi").textContent = `Peso totale zucchine grandi: ${pesoGrandi}kg`
document.getElementById("PesoZucchinePiccola").textContent = `Peso totale zucchine piccole: ${pesoPiccole}kg`