/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filter_by_initial(listStrings, char) {
    let res = []
    for (i = 0; i <= listStrings.length - 1; i++) {
        if (listStrings[i][0] === char) {
            res.push(listStrings[i])
        }
    }
    return res
}

// Invoca la funzione qui e stampa il risultato in console
console.log(filter_by_initial(names,'A'))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]