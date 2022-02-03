let eingabeFelder = ['tfnote1','tfnote2','tfnote3','tfnote4','tfnote5','tfnote6']
let noten = [];

let summe = 0;
let anzahlNoten = 0;
let ergebnis; //erechnete Durchschnitt
let aktuelleEingabe;

//refactor auf -> notenAuslesen()

function tfAuslesen () {
    for (let i = 0; i < eingabeFelder.length; i = i + 1) {

        aktuelleEingabe = parseInt(document.getElementById(eingabeFelder[i]).value);
        eingabeUeberpruefen(aktuelleEingabe);

    }
//Schleife angelegt

    ergebnis = summe / anzahlNoten; //Rechenschnitt zum Ergebnis

    document.getElementById("ausgabe").innerHTML = ergebnis;

    document.getElementById("ausgabe").style.color = "crimson"

    if (ergebnis < 5) {
        document.getElementById("ausgabe").style.color = "crimson"
    } else {
        document.getElementById("ausgabe").style.color = "green"
        if (ergebnis > 10) {
            document.getElementById("ausgabe").style.color = "blueviolet"
        }
    }
}
//Aenderung der Farbe des Ergebnisses

function eingabeUeberpruefen (punkte) {
    if (isNaN(punkte)){
        console.log("Keine Zahl");
    } else {
        anzahlNoten = anzahlNoten + 1;
        summe = summe + punkte;
    }
}
//Ergebnis ausrechnen