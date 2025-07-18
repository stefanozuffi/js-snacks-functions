/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const vowels = ['a','e','i','o','u']
const count_vowels = (parola) => {
    let count = 0
    const lowercased = parola.toLowerCase()
    for (i = 0; i <= lowercased.length -1; i++) {
        for (j = 0; j <= vowels.length -1; j++) {
            if (lowercased[i] === vowels[j]) {
                count += 1
            }
        }
    }
    return count
}

// Invoca la funzione qui e stampa il risultato in console
console.log(count_vowels(word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)