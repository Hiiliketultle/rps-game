for(var i = 0;i <document.querySelectorAll("button").length; i++){ 
    document.querySelectorAll("button")[i].addEventListener("click",handleClick) }
document.addEventListener("keydown",handleClick)

function handleClick(event){
var computerPick = Math.floor((Math.random()*3)+1);
console.log(computerPick)
var buttonInnerHTML = this.innerHTML;
var buttonPressInnerHTML = event.key;
switch (buttonInnerHTML || buttonPressInnerHTML) {
    case "r": 
    var rock1 =new Audio ("sounds/rock.mp3");
    var userPick = 1
    console.log(userPick)
    rock1.play();
        
        break;
        case "p": 
        var paper1 =new Audio ("sounds/paper.mp3");
        var userPick = 2
    console.log(userPick)
        paper1.play();
            
            break;
            case "s": 
            var scissors1 =new Audio ("sounds/scissors.mp3");
            var userPick = 3
    console.log(userPick)
            scissors1.play();
                
                break;
                
    default:
        console.log(buttonInnerHTML);
        break;
}            


if(userPick == computerPick){
    document.querySelector("h1.h1").innerHTML = ("Draw")
}

else if(userPick == 1 && computerPick == 3){
    document.querySelector("h1.h1").innerHTML = ("You win!!")
}

else if(userPick == 1 && computerPick == 2){
    document.querySelector("h1.h1").innerHTML = ("You Lose!!")
}

else if(userPick == 2 && computerPick == 1){
    document.querySelector("h1.h1").innerHTML = ("You win!!")
}

else if(userPick == 2 && computerPick == 3){
    document.querySelector("h1.h1").innerHTML = ("You Lose!!")
}

else if(userPick == 3 && computerPick == 2){
    document.querySelector("h1.h1").innerHTML = ("You win!!")
}

else if(userPick == 3 && computerPick == 1){
    document.querySelector("h1.h1").innerHTML = ("You Lose!!")
}




}




















 
 

 


