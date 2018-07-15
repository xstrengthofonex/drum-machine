
const validKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const drumNames = {Q: "Long Bass", W: "Short Bass", E: "Clap", 
                   A: "Claves", S: "Closed Hat", D: "Cymbal",
                   Z: "Open Hat", X: "Snare", C: "Tom"};

function playSoundWithId(id){
    if (validKeys.includes(id)){
        let audioElement =  $("#" + id);
        let drumPad = $(audioElement[0].parentNode);
        let src = audioElement.attr("src");

        let audio = new Audio(src);
        audio.play();  
        audio.onplay = function(){
            drumPad.css("background-color", "#bdc3c7");
            setTimeout(function(){
                drumPad.css("background-color", "#ecf0f1");
            }, 100);
        };
    }
};

function displayTriggeredKey(id){
    if (validKeys.includes(id))
        $("#triggered-pad").text(drumNames[id]);
}

$(document).ready(function(){
    $(".drum-pad").click(function(){
        let id = $(this).text().trim();
        playSoundWithId(id);
        displayTriggeredKey(id);
    });

    $(document).keypress(function(e){
        let keyCode = e.keyCode;
        let id = String.fromCharCode(keyCode).toUpperCase();
        playSoundWithId(id);
        displayTriggeredKey(id);
    });
    
});