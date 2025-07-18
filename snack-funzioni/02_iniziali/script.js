/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const initials = (listNames) => {
    let res = []
    for (let i = 0; i <= listNames.length - 1; i++) {
        res.push(listNames[i][0])
    }
    return res

}

// Invoca la funzione qui e stampa il risultato in console
console.log(initials(names))


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]