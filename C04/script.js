// load audio
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

document.getElementById("sustain").addEventListener("click", function(event) {
    var checkBox = document.getElementById("sustain")
    if (checkBox.checked == true) {

    } else {


    }

});

var blackKeys = document.getElementsByClassName("black");
for (var i = 0; i < blackKeys.length; i++) {
    blackKeys.item(i).addEventListener("mousedown", function(event) {
        document.getElementById(this.id).classList.add("blackactive");
        var audio = document.getElementById(this.id + "-sound");
        audio.pause();
        audio.volume = 1;
        audio.currentTime = 0;
        audio.play();
    });
}

var blackKeys = document.getElementsByClassName("black");
for (var i = 0; i < blackKeys.length; i++) {
    blackKeys.item(i).addEventListener("touchstart", function(event) {
        event.preventDefault();
        document.getElementById(this.id).classList.add("blackactive");
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
            }, 8);
        }
    });
}

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
            }, 8);
        }
    });
}

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
            }, 8);
        }
    });
}

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
            }, 8);
        }

    });
}























document.addEventListener("keydown", function myFunction(event) {
    var x = event.which || event.codekey;
    var repeat = event.repeat;
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


document.addEventListener("keyup", function myFunction(event) {
    var x = event.which || event.codekey;
    var repeat = event.repeat;
    if (repeat) {
        return;
    }
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
            }, 8);
        }

    }

});

function keyindex(x) {
    for (var i = 0; i < codekey.length; i++) {
        if (codekey[i] == x) {
            return i;
        }
    }
    return -1;
}

function keycolorRemove(x) {
    var keycolor = document.getElementById(x).classList;
    if (keycolor[0] == "white") {
        document.getElementById(x).classList.remove("whiteactive");
    } else {
        document.getElementById(x).classList.remove("blackactive");
    }
}

function keycolorAdd(x) {
    var keycolor = document.getElementById(x).classList;
    if (keycolor[0] == "white") {
        document.getElementById(x).classList.add("whiteactive");
    } else {
        document.getElementById(x).classList.add("blackactive");
    }
}




























var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
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
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
      metroStop();
      var checkBox = document.getElementById("metronome");
      checkBox.checked=false;
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
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
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);




























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
}
function metroStop(){
    var e = document.getElementsByClassName("select-selected");
    var audio = document.getElementById(e[0].innerText + "-metro");    
    audio.pause();
    audio.currentTime = 0;

}