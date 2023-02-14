let btn = document.querySelector(".up");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

let x = 0;
but.onclick = function dropDown(){
    if(x == 0){
        document.getElementById("dropdown").style.display="none";
        x = 1
    }else{
        document.getElementById("dropdown").style.display="block";
        x = 0
      }
}

but.onblur = function out(){
  document.getElementById("dropdown").style.display="none";
}

