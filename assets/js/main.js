let doppelt = document.getElementById("customButton")

function untoggleInput() {
    let eingabeText = document.getElementById("eingabeText");
    doppelt.checked ? eingabeText.style.display = "none" : eingabeText.style.display = "none";
}
document.getElementById("AusgabefensterRestVersuche").innerHTML = "4/4";

function EinblendungVier() {
    document.getElementById("AusgabefensterRestVersuche").innerHTML = "4/4";
}
a
function EinblendungFunf() {
    document.getElementById("AusgabefensterRestVersuche").innerHTML = "5/5";
}

function EinblendungSechs() {
    document.getElementById("AusgabefensterRestVersuche").innerHTML = "6/6";
}

function EinblendungLeer() {
    document.getElementById("AusgabefensterRestVersuche").innerHTML = "?/?";
}

function EinblendungRandom() {
    document.getElementById("AusgabefensterRestVersuche").innerHTML = eingabeText.value + "/" + eingabeText.value;
}

function toggleInput() {
    let eingabeText = document.getElementById("eingabeText");
    doppelt.checked ? eingabeText.style.display = "block" : eingabeText.style.display = "none";
    return eingabeText;
}

// Generierung einer Zufallszahl
let zufallsZahl = Math.floor(Math.random() * 100) + 1;
console.log(zufallsZahl)
// Generierung einer Zufallszahl


// WIE OFT DARF ICH NOCH MICH PROBIEREN?
// let wieoft;
// let four = document.getElementById("four");
// let five = document.getElementById("five");
// let six = document.getElementById("six");

// if (doppelt.checked) {
//     wieoft = eingabeText.value;
// } else if (four.checked) {
//     wieoft = 4;
// } else if (five.checked) {
//     wieoft = 5;
// } else if (six.checked) {
//     wieoft = 6;
// }
// else { }

// WIE OFT DARF ICH NOCH MICH PROBIEREN?
let wieoft = eingabeText.value;
let wieOftInsgesamt = wieoft;

function wieOftTracker() {
    wieoft--;
    console.log(wieoft)
    return wieoft;
}

function randomTest() {
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let six = document.getElementById("six");

    if (doppelt.checked) {
        wieoft = eingabeText.value;
    } else if (four.checked) {
        wieoft = 4;
    } else if (five.checked) {
        wieoft = 5;
    } else if (six.checked) {
        wieoft = 6;
    }
    else { }


    document.getElementById("AusgabefensterRestVersuche").innerHTML = wieoft + "/" + wieOftInsgesamt;

    if (wieoft > 0) {

        // ---------------------- Ratezahl wird eingeben ----------------------
        let RateZahl = document.getElementById("RateZahl").value;
        console.log(RateZahl)
        // ---------------------- Ratezahl wird eingeben ----------------------


        // ---------------------- Output ob richtig geraten wurde, wird generiert -----------------
        if (RateZahl == zufallsZahl) {
            console.log("Epic - You win")
            eingabeButton.style.display = "none"
        } else if (RateZahl < zufallsZahl) {
            console.log("Fail - Deine Zahl ist zu klein")
        } else if (RateZahl > zufallsZahl) {
            console.log("Fail - Deine Zahl ist zu groß")
        }
        // ---------------------- Output ob richtig geraten wurde, wird generiert -----------------
    }
    else if (wieoft == 0) {
        console.log("Es sind keine Versuche mehr übrig")
        eingabeButton.style.display = "none"
    }
    else { }
}



