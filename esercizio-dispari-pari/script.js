let sub = document.getElementById("sub");

sub.addEventListener("click", confronto);

function confronto(){
    let number = document.getElementById("number").value;
    let numeroRandom = Math.floor(Math.random()*(6-1)+1);
    let selectiont = document.getElementById("seleziona");

    if (((parseInt(number) + numeroRandom) % 2 == 0) && (parseInt(selectiont.value) == 0)) {
        alert("hai vinto");
    } else if (((parseInt(number) + numeroRandom) % 2 !== 0) && (parseInt(selectiont.value) !== 0)) {
        alert("hai vinto");
    } else {
        alert("hai perso");
    }
    

    console.log(numeroRandom)

}