// load audio
var keyid = ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "b", "c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "b"]
var codekey = [81, 50, 87, 51, 69, 82, 53, 84, 54, 89, 55, 85, 86, 71, 66, 72, 78, 77, 75, 188, 76, 190, 192, 189]




document.write("<span id=\"f\"></span>");

for (var i = 0; i < 24; i++) {
    var sound = document.createElement('audio');
    sound.id = i + keyid[i] + "-sound";
    sound.src = "medias\\" + i + keyid[i] + ".mp3";
    sound.type = 'audio/mpeg';
    document.getElementById("f").appendChild(sound);
}


var blackKeys = document.getElementsByClassName("black");
for (var i = 0; i < blackKeys.length; i++) {
    blackKeys.item(i).addEventListener("mousedown", function(event) {
        var audio = document.getElementById(this.id + "-sound");
        audio.pause();
        audio.volume = 1;
        audio.currentTime = 0;
        audio.play();
    });
}

var blackKeys = document.getElementsByClassName("black");
for (var i = 0; i < blackKeys.length; i++) {
    blackKeys.item(i).addEventListener("mouseup", function(event) {
        var audio = document.getElementById(this.id + "-sound");
        var volume = 100;
        var fadeVolume = setInterval(function() {
            volume -= 10;
            audio.volume = volume / 100;
            if (volume === 0) {
                clearInterval(fadeVolume);
            }
        }, 23);
    });
}

var whiteKeys = document.getElementsByClassName("white");
for (var i = 0; i < whiteKeys.length; i++) {
    whiteKeys.item(i).addEventListener("mousedown", function(event) {
        var audio = document.getElementById(this.id + "-sound");
        audio.pause();
        audio.currentTime = 0;
        audio.volume = 1;
        audio.play();
    });
}

var whiteKeys = document.getElementsByClassName("white");
for (var i = 0; i < whiteKeys.length; i++) {
    whiteKeys.item(i).addEventListener("mouseup", function(event) {
        var audio = document.getElementById(this.id + "-sound");

        var volume = 100;
        var fadeVolume = setInterval(function() {
            volume -= 10;
            audio.volume = volume / 100;
            if (volume === 0) {
                clearInterval(fadeVolume);
                //audio.pause();
            }
        }, 23);
    });
}
var pianoKeys = document.getElementsByTagName('li');
var pianoKeysArr = Array.from(pianoKeys);

document.addEventListener("keydown", function myFunction(event) {
    var x = event.which || event.codekey;
    if (keyindex(x) !== -1) {
        var audio = document.getElementById(keyindex(x) + keyid[keyindex(x)] + "-sound");
        audio.pause();
        audio.currentTime = 0;
        audio.volume = 1;
        audio.play();
    }
});

// document.addEventListener("keyup", function myFunction(event) {
//     var x = event.which || event.codekey;
//     console.log(x);

// });

// document.addEventListener("keyup", function myFunction(event) {
//     var x = event.which || event.codekey;
//     console.log(keyindex(x));
//     var audio = document.getElementById(keyindex(x) + keyid[keyindex(x)] + "-sound");

//     var volume = 100;
//     var fadeVolume = setInterval(function() {
//         volume -= 10;
//         audio.volume = volume / 100;
//         if (volume === 0) {
//             clearInterval(fadeVolume);
//             //audio.pause();
//         }
//     }, 23);

// });

function keyindex(x) {
    for (var i = 0; i < codekey.length; i++) {
        if (codekey[i] == x) {
            return i;
        }

    }

    return -1;
}