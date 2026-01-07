const kursy = {
    usd: { usd: 1.0, gbp: 0.77, eur: 0.88, pln: 3.88, krw: 1332.5, cny: 7.12 },
    gbp: { usd: 1.30, gbp: 1.0, eur: 1.14, pln: 5.01, krw: 1728.6, cny: 9.24 },
    eur: { usd: 1.14, gbp: 0.88, eur: 1.0, pln: 4.20, krw: 1518.3, cny: 8.12 },
    pln: { usd: 0.26, gbp: 0.20, eur: 0.24, pln: 1.0, krw: 361.7, cny: 1.93 },
    krw: { usd: 0.00075, gbp: 0.00058, eur: 0.00066, pln: 0.0028, krw: 1.0, cny: 0.0053 },
    cny: { usd: 0.14, gbp: 0.11, eur: 0.12, pln: 0.52, krw: 189.0, cny: 1.0 }
};

function przeliczKwote(){
    
    let podanaKwota = parseFloat(document.getElementById("kwotaWpisana").value);
    let walutaWybrana = document.getElementById("waluty1").value;
    let walutaDocelowa = document.getElementById("waluty2").value;

    let brakWalutyDocelowej = document.getElementById("napis2").value;
    let brakWalutyWybranej = document.getElementById("napis1").value;
    
    if(isNaN(podanaKwota)){
        alert("Wprowadź kwotę.")
    }else if(podanaKwota <= 0){
        alert("Podana kwota jest ujemna, wprowadź poprawną kwotę.");
    }else if(walutaDocelowa == brakWalutyDocelowej || walutaWybrana == brakWalutyWybranej){
        alert("Któraś waluta nie została wybrana.")
    }else if(walutaWybrana == walutaDocelowa){
        alert("Waluty są równe, zmień jedną z walut.");
    }else{
        let przeliczonaKwota = kursy[walutaWybrana][walutaDocelowa]*podanaKwota;
        document.getElementById("kwotaPrzeliczona").value = przeliczonaKwota.toFixed(2);
    }
}

function wyczysc(){
    document.getElementById("kwotaWpisana").value = null;
    document.getElementById("kwotaPrzeliczona").value = "";
    walutaWybrana = document.getElementById("waluty1").value = "";
    walutaDocelowa = documentgetElementById("waluty2").value = "";
}

function zmianaWidoku(){

   let widok1 = document.querySelector(".container")
   let widok2 = document.querySelector(".container2")

   if(widok2.style.display == "none"){
    widok1.style.display = "none"
    widok2.style.display = "block"
   }else{
    widok1.style.display = "block"
    widok2.style.display = "none"
   }
}

function policzWszystkie(){
    let podanaKwota = parseFloat(document.getElementById("kwotaWpisana2").value);
    let walutaWybrana = document.getElementById("waluty3").value;

    let brakWalutyWybranej = document.getElementById("napis3").value;

    if(isNaN(podanaKwota)){
        alert("Wprowadź kwotę.")
    }else if(walutaWybrana == brakWalutyWybranej){
        alert("Wybierz swoją walutę.")
    }else if(podanaKwota <= 0){
        alert("Podana kwota jest ujemna, wprowadź poprawną kwotę.");
    }else{
        let przeliczoneGBP = kursy[walutaWybrana]["gbp"]*podanaKwota;
        let przeliczoneEUR = kursy[walutaWybrana]["eur"]*podanaKwota;
        let przeliczonePLN = kursy[walutaWybrana]["pln"]*podanaKwota;
        let przeliczoneUSD = kursy[walutaWybrana]["usd"]*podanaKwota;
        let przeliczoneKRW = kursy[walutaWybrana]["krw"]*podanaKwota;
        let przeliczoneCNY = kursy[walutaWybrana]["cny"]*podanaKwota; 

        document.getElementById("gbpPrzeliczone").value = przeliczoneGBP.toFixed(2);
        document.getElementById("eurPrzeliczone").value = przeliczoneEUR.toFixed(2);
        document.getElementById("plnPrzeliczone").value = przeliczonePLN.toFixed(2);
        document.getElementById("usdPrzeliczone").value = przeliczoneUSD.toFixed(2);
        document.getElementById("krwPrzeliczone").value = przeliczoneKRW.toFixed(2);
        document.getElementById("cnyPrzeliczone").value = przeliczoneCNY.toFixed(2);
    }
}

function wyczyscWszystkie(){
    document.getElementById("kwotaWpisana2").value = null;
    walutaWybrana = document.getElementById("waluty3").value = "";

    document.getElementById("gbpPrzeliczone").value = null;
    document.getElementById("eurPrzeliczone").value = null;
    document.getElementById("plnPrzeliczone").value = null;
    document.getElementById("usdPrzeliczone").value = null;
    document.getElementById("krwPrzeliczone").value = null;
    document.getElementById("cnyPrzeliczone").value = null;
}

function zmianaWidoku2(){

    let widok1 = document.querySelector(".container");
    let widok2 = document.querySelector(".container2");
 
    if(widok2.style.display == "none"){
     widok1.style.display = "none"
     widok2.style.display = "block"
    }else{
     widok1.style.display = "block"
     widok2.style.display = "none"
    }
 }

