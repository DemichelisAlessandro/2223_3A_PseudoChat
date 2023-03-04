/*
    TESTO DELLA VERIFICA DI TPSIT
    Viene richiesto di modificare i file html e js in modo tale da:

    - visualizzare DINAMICAMENTE gli utenti nell'aside (barra laterale sinistra) 
        # ogni utente è un nuovo LI
        # ogni utente in base al genere dovrà essere raffigurato tramite l'icona corretta
        # sotto l'icona dovrà essere rafficurato il nome con l'iniziale maiuscola del nome e l'iniziale maiuscola del cognome
        # il cognome dovrà essere troncato e seguito da . (come si vede nel file originale)

    - aggiornare automaticamente l'header della sezione nel momento in cui clicco su un utente dell'aside
        # modificare l'icona
        # modificare il nome e cognome
        # aggiornare l'ora a proprio piacimento (PER IL MASSIMO DEL PUNTEGGIO: creare un array parallelo con le ore)
    
    - aggiungere DINAMICAMENTE I MESSAGGI
        #Non importa se si utilizza ut1 per l'utente 0 o ut2, l'importante è la coerenza

    - PER IL 10. Gestite il bottone di invio in basso 
        #se il campo di testo non è vuoto aggiungere il messaggio in coda agli altri del personaggio selezionato

                <li>
                    <div class="material-symbols-outlined icone">
                        face
                    </div>
                    Mario R.
                </li>
                <li>
                    <div class="material-symbols-outlined icone">
                        face_3
                    </div>
                    Maria B.
                </li>

*/

console.log("ciao");

function generafaccie() {
    let faccie = document.getElementById("listUtenti");
    let i = 0;
    let nome;
    let cognome;
    let disegno;
    for (i = 0; i < 5; i++) {
        nome = nomeUtenti[i];
        cognome = cognomeUtenti[i];
        cognome = cognome[0];
        if (genereUt[i] == "m") {
            disegno = "face";
        } else {
            disegno = "face_3";
        }
        if (nomeUtenti[i] != "Ut") {
            faccie.innerHTML += `
                 <li>
                    <div class="material-symbols-outlined icone" onclick="conversazioni("${nome}")">
                        ${disegno}
                    </div>
                    ${nome} ${cognome}.
                </li>
`
        }
    }
   
}
generafaccie()
function conversazioni(nome) {
    let cognome;
    let nom;
    let disegno;
    let chat = document.getElementById("head");
    let id = nome;
    for (let i = 0; i < 5; i++) {
        cognome = cognomeUtenti[i];
        if (genereUt[i] == "m") {
            disegno = "face";
        } else {
            disegno = "face_3";
        }
        nom = nomeUtenti[i];
        if (nomeUtenti[i] != "Ut") {
            if (nom == id) {
                chat.innerHTML = `
                <div class="material-symbols-outlined icone">
                    ${disegno}
                </div>
                <div>
                    <div id="divNome">${id} ${cognome}</div>
                    <div id="divUltimoMes">Oggi alle 9:45</div>
                </div>
`
            }
        }
    }
    chat(id);
}

function chat(nome) {
    let id = nome;
    let ut = 0;
    let amico;
    if (id == "Mario") {
        amico = 1;
    }
    if (id == "Maria") {
        amico = 2;
    }
    if (id == "Elena") {
        amico = 3;
    }
    if (id == "Ginevra") {
        amico = 4;
    }
    if (id == "Luigi") {
        amico = 5;
    }
    let sommames = mittenti.length;
    let inizio;
    let fine;
    let ini = false;
    for (let i = 0; i < sommames; i++) {
        if (amico == mittenti[i]) {
            messaggi++;
            console.log(messaggi[i]);
            if (mittenti[i - 1] == "300") {
                inizio = i;
                ini = true;
            }
        }
        else if (amico != mittenti[i] && mittenti[i] == ut) {
            messaggi++;
            console.log(messaggi[i]);
            if (mittenti[i - 1] == "300") {
                inizio = i;
                ini = true;
            }
        }
        else if (mittenti[i] == "300" && ini) {
            fine = i;
        }
    }

    let messaggi = (sommames - inizio) - (sommames - fine);// 0 0 0 0 1 1 1 1 0 0
    for (let i = 0; i < messaggi; i++) {
        //stampo i messaggi
        /*
         * 
         * 
         * 
         * */
    }
}