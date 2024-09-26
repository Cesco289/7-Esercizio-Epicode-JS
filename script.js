//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*
let a = 10;
let b = 5;

console.log(Math.max (a,b));
*/

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/*
let num = 20;

if (num < 5)
  {console.log('Tiny')}
else if (num < 10)
  {console.log('Small')}
else if (num < 15)
  {console.log('Medium')}
else if(num < 20)
{console.log('Large')}
else if (num >= 20)
{console.log('Huge')}
*/

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/*
let numeri = ('');

for (let i = 0; i <= 10; i++) {
  if (i === 3)
    {continue;}
  else if (i === 8)
    {continue;}
numeri = numeri + i;}

console.log(numeri);
*/

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare che il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/*
  for (let i = 0; i <= 15; i++){
  if (i % 2 === 0) {console.log(i, "pari")}
  else console.log(i, "dispari")}
*/

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/*
let numero1 = 20;
let numero2 = 12;
if (numero1 === 8 || numero2 === 8 || numero1 + numero2 === 8 || numero1 - numero2 === 8)
  {console.log('Una delle operazione fa 8')};
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*
let totalShoppingCart = '60€'
let totaleConSpedizione = '0€'
let spedizione = '10€'

if (totalShoppingCart > '50€')
{console.log(totaleConSpedizione = totalShoppingCart)}
else{console.log(totaleConSpedizione = totalShoppingCart + spedizione)};
*/

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e calcolando il totale.
*/

/*
let totalShoppingCart = 60
let totaleConSpedizione = 0
let spedizione = 10
let promo = (totalShoppingCart * 20) / 100;

if (promo > 50)
{console.log(totaleConSpedizione = promo)}
else{console.log(totaleConSpedizione = promo + spedizione)};
*/

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/*
let gender = ('');
let isMale = true;

if(isMale){gender = "male"}
else{gender = 'female'};

isMale ? (gender = "male") : (gender = "female");
console.log(gender);
*/

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/*
for (let i = 1; i <= 100; i++) {
  let risultato = i
  let divisoreDiTre = i % 3 === 0
  let divisoreDiCinque = i % 5 === 0
    if (divisoreDiCinque && divisoreDiTre)
    {risultato = "FizzBuzz"}
    else if (divisoreDiTre){risultato = "Fizz"}
    else if (divisoreDiCinque){risultato = "Buzz"}

  console.log(risultato)}
*/