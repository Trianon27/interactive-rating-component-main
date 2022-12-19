let flag = "0";
const submitButton = document.getElementById("submit-button");

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


submitButton.addEventListener("click", function(){
    if (flag == "0"){
        alert("Please select an option");
    }else{    
        var card = document.getElementById('first-card');
        var card2 = document.getElementById('final-card');
        card.style.display = "none";
        card2.style.display = "flex";
        card2.style.flexDirection = "column";
        card2.style.justifyContent = "center";
        card2.style.alignItems = "center";
        document.getElementById("rate-number").innerHTML = flag;
}
        

});

/* 
    Things that i must do:
        learn how to make properly a formulary and search how can i improve mi js skills. 
 */