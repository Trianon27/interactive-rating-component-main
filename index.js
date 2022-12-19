let flag = "0";
const submitButton = document.getElementById("submit-button");

function changeColor(option) {
    
    var element = document.getElementById(option.id);
    if(option.id == flag ){
        element.style.backgroundColor = "hsl(25, 97%, 53%)";
    } else{
        element.style.backgroundColor = "hsl(216, 12%, 54%)";
        //element.style.transition = "all 0.1s ease-in-out";

      }  
}

function permanent(option){
    var before = flag
    if (option.id != null){
        flag = option.id;
    }

    if(before == flag){
     
    }else{
        var element = document.getElementById(option.id);
        var element2 = document.getElementById(before);
        element.style.backgroundColor = "hsl(25, 97%, 53%)";
        element2.style.backgroundColor = "hsla(217, 12%, 63%, 0.164)";
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