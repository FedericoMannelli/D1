/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Datatype:

// il tipo di assegnazione che vogliamo dare a un valore


// Di tipo Stringa (String)

// Nelle stringhe troviamo solo parole o frasi messe in sequenze di caratteri. 
let name = 'Federico'  

// Di tipo Numero (Number)

// se troviamo come datatype una variabile numerica "number" la possiamo usare per definire delle quantità, si possono usare anche i decimali e si possono usare per fare calcoli come addizione sottrazione divisione etc.
let number1 = 5 
let number2 = 10
let number3 = 15
let number4 = number1 + number2 + number3
console.log ('controllo il number4', number4)


// di tipo Booleano (Boolean)
// una variabile Boleana ha solo due tipi di risposte: vero(true) falso(false)


let isGreatenThan20 = number4 > 20

console.log('il valore di number4 è maggiore di 20', isGreatenThan20);

//  di tipo 

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName = 'federico' 
console.log('il mio nome è', myName);



/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(12 + 20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12 

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName = 'Mannelli' 
console.log('il mio cognome è', myName);
const FM = 'leMieIniziali' 
console.log('le mie iniziali sono:', leMieIniziali);



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
