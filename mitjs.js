//funktion1 (ersynlig)
//lyt om brugeren scroller//
//Document.addEventListener();

//function2
// når 50% er synligt, så afspil//

function erSynlig(elementId) {
    var elementBoks = document.getElementById(elementId).getBoundingClientRect();
    var halvtredsPct = elementBoks.height * 0.5;
    var start = window.innerHeight - halvtredsPct;

    if (elementBoks.top <= start && elementBoks.bottom - halvtredsPct > 0) {
        return true;

    }
    else{
        return false;
    }
}


function aktiverMultimedier(elementIdListe, AVIdListe) {

    for (var i = 0; i < elementIdListe.length; i++) {

        if (erSynlig(elementIdListe[i])) {
            document.getElementById(AVIdListe[i]).play();
        } else {
            document.getElementById(AVIdListe[i]).pause();
        }
    }
}








//hovedprogram
//function1
var elementIdliste = ["paris", "istanbul", "firenze", "video"];
var AVIDListe = ["bouncy", "walker", "funky", "video"];

//function2
window.addEventListener("scroll", function () {
    aktiverMultimedier(elementIdliste, AVIDListe);
});
