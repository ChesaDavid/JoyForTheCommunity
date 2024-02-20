let button = document.getElementById("go-to-the-top");

window.onscroll = function() {scrollFunction()};

function ScrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        button.style.display = "block";
    }
    else{
        button.style.display = "none";
    }
}
function toFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0
}