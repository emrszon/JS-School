// load audio
var keyid = ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "b", "c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "b"]





document.write("<span id=\"f\"></span>");

for (i = 0; i < 24; i++) {
    var sound = document.createElement('audio');
    sound.id = i + keyid[i] + "-sound";
    sound.src = "medias\\" + i + keyid[i] + ".mp3";
    sound.type = 'audio/mpeg';
    document.getElementById("f").appendChild(sound);
}




var blackKeys = document.getElementsByClassName('black');
for (var i = 0; i < blackKeys.length; i++) {
    blackKeys.item(i).addEventListener('mousedown', function(event) {
        var audio = document.getElementById(this.id + "-sound");
        audio.play();
    });
}

var blackKeys = document.getElementsByClassName("black");
for (var i = 0; i < blackKeys.length; i++) {
    blackKeys.item(i).addEventListener("mouseup", function(event) {
        var audio = document.getElementById(this.id + "-sound");
        audio.pause();
        audio.currentTime = 0;
    });
}

var whiteKeys = document.getElementsByClassName("white");
for (var i = 0; i < whiteKeys.length; i++) {
    whiteKeys.item(i).addEventListener("mousedown", function(event) {
        var audio = document.getElementById(this.id + "-sound");
        audio.play();
    });
}

var whiteKeys = document.getElementsByClassName("white");
for (var i = 0; i < whiteKeys.length; i++) {
    whiteKeys.item(i).addEventListener("mouseup", function(event) {
        var audio = document.getElementById(this.id + "-sound");
        audio.pause();
        audio.currentTime = 0;
    });
}