let codiceSconto = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

let portfolio = [{
    nomeSito : "Cabin Website",
    img : "cabin.png"
}, {
    nomeSito : "Cake Website",
    img : "cake.png"
}, {
    nomeSito : "Circus Website",
    img : "circus.png"
}, {
    nomeSito : "Game Website",
    img : "game.png"
}, {
    nomeSito : "Safe Website",
    img : "safe.png"
}, {
    nomeSito : "Submarine Website",
    img : "submarine.png"
}]


printPortfolio(portfolio);









// ----------------- Funzioni -----------------

function submitForm(event){
    event.preventDefault();
    costo= calcoloPrezzo();
    inputSconto=document.getElementById("inputDiscount").value;
    let prezzoTotale = applicaSconto(costo, inputSconto);
    document.getElementById("price").innerHTML="Il prezzo è: " + prezzoTotale.toFixed(2) + " €"

}


function applicaSconto(prezzoBase, codiceInserito){
    for (sconto of codiceSconto){
        if (sconto == codiceInserito){
            document.getElementById("inputDiscount").classList.remove("text-danger")
            let indiceSconto=codiceSconto.indexOf(sconto);
            codiceSconto.splice(indiceSconto,1)
            return prezzoScontato = prezzoBase*0.75
        }
        
    }
    document.getElementById("inputDiscount").classList.add("text-danger")
    alert("CODICE SCONTO ERRATO O SCADUTO");
    return prezzoBase
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


function printPortfolio(Portfolio){
    for (webSite of Portfolio){
        document.getElementById("portfolio").innerHTML+= 
        `<div class="col-12 col-md-6 col-lg-4">
        <div class="card shadow p-3 mb-5 bg-white rounded">
            <img src="./img/portfolio/${webSite.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">${webSite.nomeSito}</h3>
            </div>
            <div class="card-body">
                <button type="button" class="btn btn-lg btn-info btn mx-3">Preview</button>
                <button type="button" class="btn btn-lg btn-outline-info">Visit Site</button>
            </div>
        </div>

    </div>`
    }
}