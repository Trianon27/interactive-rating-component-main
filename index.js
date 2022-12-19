let flag = "0";

function changeColor(option) {
    var numOption = parseInt(option.id);
    var element = document.getElementById(option.id);
    if (numOption >= 2) {
        var element_2 = document.getElementById( (numOption - 1).toString() );
        element.style.backgroundColor = "hsl(25, 97%, 53%)";
        element_2.style.backgroundColor = "hsl(216, 12%, 54%)";
        element.style.transition = "all 0.1s ease-in-out";
        element_2.style.transition = "all 0.25s ease-in-out";
    }
    element.style.backgroundColor = "hsl(25, 97%, 53%)";
}

function permanent(option){
    if (option.id != null){
        flag = option.id;
    }

}

function unDo (){
    var elements = document.getElementsByClassName('option-container');
    for (element of elements) {
        if (element.id == flag){
            element.style.backgroundColor = "hsl(25, 97%, 53%)";
        } else{
       element.style.backgroundColor = "hsla(217, 12%, 63%, 0.164)";
        }
    }
}

function submit(){
    //take the value of the option selected
    var value = document.getElementById(flag).value;
    var card = document.getElementById('first-card');
    var card2 = document.getElementById('final-card');
    card = card.style.display = "none";
    card2 = card2.style.display = "block";
}