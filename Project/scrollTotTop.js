let button = document.getElementById("go-to-the-top");

window.onscroll = function() {scrollFunction()};

function ScrollFunction(){
    indow.scrollY > window.innerHeight
    ? button.classList.add("show")
    : button.classList.remove("show");
}


function toFunction(){
  document.body.scrollTop = 0 , "slow";
  document.documentElement.scrollTop = 0
}
let moreButton = document.getElementById("more-button");
var isPressed = 0;
if(moreButton.onclick()){
    switch(isPressed){
        case 0:
            isPressed = 1;
            document.getElementById("unseeanList").style.display = "block";
            break;
        case 1:
            isPressed = 0;
            document.getElementById("unseeanList").style.display = "none";
            break;
    }

}