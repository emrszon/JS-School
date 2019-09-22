/* 
    ==============================================
    ==============================================
    Load audios
    ==============================================
    ==============================================
*/

var keyid = ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "b", "c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "b"]
var codekey = [81, 50, 87, 51, 69, 82, 53, 84, 54, 89, 55, 85, 86, 71, 66, 72, 78, 77, 75, 188, 76, 190, 192, 189]
var metro = ["60-bpm", "70-bpm", "80-bpm", "90-bpm", "100-bpm", "120-bpm", "140-bpm"]

document.write("<span id=\"f\"></span>");
for (var i = 0; i < 7; i++) {
    var sound = document.createElement('audio');
    sound.id = metro[i] + "-metro";
    sound.src = "medias\\" + metro[i] + ".mp3";
    sound.type = 'audio/mpeg';
    document.getElementById("f").appendChild(sound);
}

for (var i = 0; i < 24; i++) {
    var sound = document.createElement('audio');
    sound.id = i + keyid[i] + "-sound";
    sound.src = "medias\\" + i + keyid[i] + ".mp3";
    sound.type = 'audio/mpeg';
    document.getElementById("f").appendChild(sound);
}

/* 
    =============================================================
    =============================================================
    functions to add event listeners to the keys, click and touch
    =============================================================
    =============================================================


These functions have the task to remove the class "active" to the keys
 when the click or the touch is released, outside the key field 
*/
document.addEventListener("mouseup", function(event) {
    var nontarget = document.getElementsByTagName("LI");
    for (var i = 0; i < nontarget.length; i++) {
        keycolorRemove(nontarget.item(i).id);
    }
    
});
document.addEventListener("touchend", function(event) {
    var nontarget = document.getElementsByTagName("LI");
    for (var i = 0; i < nontarget.length; i++) {
        keycolorRemove(nontarget.item(i).id);
    }
});


/*
This function have the task to add the class "active" 
to the black keys when the click is pressed and play the sound
*/
var blackKeys = document.getElementsByClassName("black");
for (var i = 0; i < blackKeys.length; i++) {
    blackKeys.item(i).addEventListener("mousedown", function(event) {
        document.getElementById(this.id).classList.add("blackactive");
        var audio = document.getElementById(this.id + "-sound");
        audio.pause();          //pause the sound if before is playing
        audio.volume = 1;       //restore the volume to maximum value 
        audio.currentTime = 0;  //reset the time to 0 
        audio.play();           //play the sound
    });
}


/*
This function have the task to remove the class "active" to the black keys
 when the click is released, inside the key field and stop the sound 
*/
var blackKeys = document.getElementsByClassName("black");
for (var i = 0; i < blackKeys.length; i++) {
    blackKeys.item(i).addEventListener("mouseup", function(event) {
        var audio = document.getElementById(this.id + "-sound");
        var checkBox = document.getElementById("sustain")//these variable allow control the sustain button functionality
        if (checkBox.checked == true) { //if sustain is active
            audio.play();               //play the sound totally
        } else {                        // if sustain is off
            var volume = 100;           // Fade volume progressively to 0
            var fadeVolume = setInterval(function() {
                volume -= 10;
                audio.volume = volume / 100;
                if (volume === 0) {
                    clearInterval(fadeVolume);
                }
            }, 10);
        }
    });
}


/*
This function have the task to add the class "active" 
to the black keys when the key is touched and play the sound
*/
var blackKeys = document.getElementsByClassName("black");
for (var i = 0; i < blackKeys.length; i++) {
    blackKeys.item(i).addEventListener("touchstart", function(event) {
        event.preventDefault();// this line avoid call onclick function
        document.getElementById(this.id).classList.add("blackactive");
        var audio = document.getElementById(this.id + "-sound");
        audio.pause();
        audio.volume = 1;
        audio.currentTime = 0;
        audio.play();
    });
}

/*
This function have the task to remove the class "active" to the black keys
 when the touch is released, inside the key field and stop the sound 
*/
var blackKeys = document.getElementsByClassName("black");
for (var i = 0; i < blackKeys.length; i++) {
    blackKeys.item(i).addEventListener("touchend", function(event) {
        var audio = document.getElementById(this.id + "-sound");
        var checkBox = document.getElementById("sustain")
        if (checkBox.checked == true) {
            audio.play();
        } else {
            var volume = 100;
            var fadeVolume = setInterval(function() {
                volume -= 10;
                audio.volume = volume / 100;
                if (volume === 0) {
                    clearInterval(fadeVolume);
                }
            }, 10);
        }
    });
}

/*
This function have the task to add the class "active" 
to the white keys when the click is pressed and play the sound
*/
var whiteKeys = document.getElementsByClassName("white");
for (var i = 0; i < whiteKeys.length; i++) {
    whiteKeys.item(i).addEventListener("mousedown", function(event) {
        document.getElementById(this.id).classList.add("whiteactive");
        var audio = document.getElementById(this.id + "-sound");
        audio.pause();
        audio.currentTime = 0;
        audio.volume = 1;
        audio.play();
    });
}
/*
This function have the task to remove the class "active" to the white keys
 when the click is released, inside the key field and stop the sound 
*/
var whiteKeys = document.getElementsByClassName("white");
for (var i = 0; i < whiteKeys.length; i++) {
    whiteKeys.item(i).addEventListener("mouseup", function(event) {
        var audio = document.getElementById(this.id + "-sound");
        var checkBox = document.getElementById("sustain")
        if (checkBox.checked == true) {
            audio.play();
        } else {
            var volume = 100;
            var fadeVolume = setInterval(function() {
                volume -= 10;
                audio.volume = volume / 100;
                if (volume === 0) {
                    clearInterval(fadeVolume);
                }
            }, 10);
        }
    });
}

/*
This function have the task to add the class "active" 
to the white keys when the key is touched and play the sound
*/
var whiteKeys = document.getElementsByClassName("white");
for (var i = 0; i < whiteKeys.length; i++) {
    whiteKeys.item(i).addEventListener("touchstart", function(event) {
        event.preventDefault();
        document.getElementById(this.id).classList.add("whiteactive");
        var audio = document.getElementById(this.id + "-sound");
        audio.pause();
        audio.currentTime = 0;
        audio.volume = 1;
        audio.play();
    });
}

/*
This function have the task to remove the class "active" to the black keys
 when the touch is released, inside the key field and stop the sound 
*/
var whiteKeys = document.getElementsByClassName("white");
for (var i = 0; i < whiteKeys.length; i++) {
    whiteKeys.item(i).addEventListener("touchend", function(event) {
        var audio = document.getElementById(this.id + "-sound");
        var checkBox = document.getElementById("sustain")
        if (checkBox.checked == true) {
            audio.play();
        } else {
            var volume = 100;
            var fadeVolume = setInterval(function() {
                volume -= 10;
                audio.volume = volume / 100;
                if (volume === 0) {
                    clearInterval(fadeVolume);
                }
            }, 10);
        }

    });
}

/* 
    ===============================================================
    ===============================================================
    functions to add event listeners to the keys, physical keyboard
    ===============================================================
    ===============================================================

This function have the task to stop sound when the mapped physical keyboard keys are pressed
*/
document.addEventListener("keydown", function myFunction(event) {
    var x = event.which || event.codekey;
    var repeat = event.repeat;// these lines avoid play sound 
    if (repeat) {
        return;
    }
    if (keyindex(x) !== -1) {
        keycolorAdd(keyindex(x) + keyid[keyindex(x)]);
        var audio = document.getElementById(keyindex(x) + keyid[keyindex(x)] + "-sound");
        audio.pause();
        audio.currentTime = 0;
        audio.volume = 1;
        audio.play();
    }
});

/*
This function have the task to stop sound when the mapped physical keyboard keys are released
*/
document.addEventListener("keyup", function myFunction(event) {
    var x = event.which || event.codekey;
    var audio = document.getElementById(keyindex(x) + keyid[keyindex(x)] + "-sound");
    if (keyindex(x) !== -1) {
        keycolorRemove(keyindex(x) + keyid[keyindex(x)]);
        var checkBox = document.getElementById("sustain")
        if (checkBox.checked == true) {
            audio.play();
        } else {
            var volume = 100;
            var fadeVolume = setInterval(function() {
                volume -= 10;
                audio.volume = volume / 100;
                if (volume === 0) {
                    clearInterval(fadeVolume);
                }
            }, 10); 
        }

    }

});

/*
This function have the task to find which keys of physical keyboard is pressed 
and look the array of mapped physical keyboard keys, return the index if found or -1 if not found 
*/
function keyindex(x) {
    for (var i = 0; i < codekey.length; i++) {
        if (codekey[i] == x) {
            return i;
        }
    }
    return -1;
}

/*
This function have the task to remove the class "active" 
to the keys when some physical keyboard key is released 
*/
function keycolorRemove(x) {
    var keycolor = document.getElementById(x).classList;
    if (keycolor[0] == "white") {
        document.getElementById(x).classList.remove("whiteactive");
    } else {
        document.getElementById(x).classList.remove("blackactive");
    }
}
/*
This function have the task to add the class "active" 
to the keys when some physical keyboard key is pressed 
*/
function keycolorAdd(x) {
    var keycolor = document.getElementById(x).classList;
    if (keycolor[0] == "white") {
        document.getElementById(x).classList.add("whiteactive");
    } else {
        document.getElementById(x).classList.add("blackactive");
    }
}



/* 
    ===============================================================
    ===============================================================
    functions to add metronome custom select 
    ===============================================================
    ===============================================================
*/

var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
      metroStop();                             //stop the metronome sound and switch off the button
      var checkBox = document.getElementById("metronome");
      checkBox.checked=false;
    });
}
function closeAllSelect(elmnt) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);



/* 
    ==================================================================
    ==================================================================
    functions to play and stop metronome when switch status is changed 
    ==================================================================
    ==================================================================
*/
document.getElementById("metronome").addEventListener("click", function(event){
var checkBox = document.getElementById("metronome");
        if (checkBox.checked == true) {
            metroPlay();
        } else {
            metroStop();
        }
});

function metroPlay(){
    var e = document.getElementsByClassName("select-selected");
    var audio = document.getElementById(e[0].innerText + "-metro");
    audio.play();
    audio.loop=true;
}
function metroStop(){
    var e = document.getElementsByClassName("select-selected");
    var audio = document.getElementById(e[0].innerText + "-metro");    
    audio.pause();
    audio.currentTime = 0;

}