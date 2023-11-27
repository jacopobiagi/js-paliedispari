let submit = document.getElementById("subButton");

submit.addEventListener("click", funzioneControllo);

function funzioneControllo(){
    let myInput = document.getElementById("palInput").value;

    let string = myInput.replaceAll(' ', '');
    let stringApp = string.split("").reverse().join("");
    

    if(string == stringApp){
        alert("la frase è palindroma")
    }else{
        alert("la frase non è palindroma")
    }
}