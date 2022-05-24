// Chiedo all'utente 2 valori   1       done 
    // verifico se sono dei numeri  2   done
    // se no : riprova                  done 
    // se si : calcolo prezzo al KM     done
        //  controllo età            3   
        // se <18 : -20% 
        // se >= 65 : -40% 
            // stampo prezzo su html   4



let nKM = parseInt(prompt('Quanti KM devi fare ?'));
let etaPasseggero = parseInt(prompt('Quanti anni hai?'));

// isNaN è una funzione che restituisce true qual'ora il valora inserito sia una string
if (isNaN(nKM) || isNaN(etaPasseggero)) alert('hai inserito i valori errati, Riprova') 

let prezzo = nKM * 0.21;
// 2 is in-line 
prezzo = etaPasseggero <18 ?  prezzo * 0.8 : etaPasseggero >= 65 ? prezzo * 0.6: prezzo

// math.ceil arrotonda per eccesso i numeri 
document.getElementById("idPrezzo").innerHTML= `Prezzo del biglietto : ${Math.ceil(prezzo)}`;



