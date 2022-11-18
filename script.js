let codiceSconto = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];












// ----------------- Funzioni -----------------

function submitForm(event){
    event.preventDefault();
    costo= calcoloPrezzo();
    inputSconto=document.getElementById("inputDiscount").value;
    let prezzoTotale = applicaSconto(costo, inputSconto);
    document.getElementById("price").innerHTML="Il prezzo è: " + prezzoTotale.toFixed(2) + " €"

}


function applicaSconto(prezzoBase, codiceInserito){
    for (sconto in codiceSconto){
        if (sconto == codiceInserito){
            let indiceSconto=codiceSconto.indexOf(sconto);
            codiceSconto.splice(indiceSconto,1)
            return prezzoScontato = prezzoBase*0.75
        }
        document.getElementById("inputDiscount").classList.add("text-danger")
        return prezzoBase
    }
}

function calcoloPrezzo (){
    let valueLavoro=document.getElementById("inputWork").value
    let lavoro=0
    if (valueLavoro==1){
        lavoro=20.5;
    }
    else if(valueLavoro==2){
        lavoro=15.3;
    }else {
        lavoro=33.6
    }
    let oreLavoro=document.getElementById("hoursRequested").value
    let costo= oreLavoro* lavoro
    return costo
}