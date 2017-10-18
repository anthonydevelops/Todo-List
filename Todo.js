var counter = 0; 
var table = document.getElementById("mainTable");
var btnPress = document.getElementById("formBtn");
var pressedEnter = false;

document.onkeypress = function(e) {
    var keyCode = e.keyCode;
    if(keyCode == 13) {
        pressedEnter = true;
        doList();
        keyCode = 0;
    }
}

function doList () {
    var userInput = document.getElementById("newItem").value;
    var form = document.getElementById("mainForm");
    var clear = document.getElementById("clearBtn");
    pressedEnter = false;

    if(counter < 10 && userInput.length > 0) {
        var BTN = document.createElement("BUTTON");
        var check = document.createElement("BUTTON");
        var I = document.createElement("i");
        check.id = counter;
        check.className = "btn btn-warning float-right";
        I.className = "fa fa-trash";
        BTN.id = counter;
        BTN.className = "list-group-item list-group-item-action bttn";
        BTN.innerHTML = userInput;
        form.reset();

        table.appendChild(BTN);
        BTN.appendChild(check); 
        check.appendChild(I);
        counter++; 
    } else {
        alert("Lets focus on our most important planned todo's at the moment!");
        form.reset();
    }

    //check-off event
    check.addEventListener("click", function() {
        this.style.visibility = "hidden";
        BTN.style.textDecoration = "line-through";
    });

    //clear checked-off events
    clear.addEventListener("click", function(){
        var items = document.getElementsByClassName("bttn");
        for(var i = 0; i < items.length; i++) {
            if(items[i].style.textDecoration === "line-through"){
                items[i].outerHTML = "";
                delete items[i];
                counter--;
            }
        }
    });
} 




