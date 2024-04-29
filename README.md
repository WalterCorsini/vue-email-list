Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
Buon lavoro e buon divertimento :api: :laptop_parrot:

## INPUT
1. creo un array

## LOGIC
2. in created invoco la funzione "createdEmails"
        -creo un ciclo for
            - ad ogni ciclo faccio una chiamata al server per generare con un api un email casuale
            - una volta creata inserisco in "arrayMail" la variabile che mi interessa all'interno del risultato ( rndMail.data.response)

## OUTPUT
3. quando ho creato tutte e 10 l'Email (v-if arrayMail === 10) mostro a video l'array con un ciclo v-for creando una lista numerata
