function e(x){
  return document.getElementById(x);
}

function popUpImg(img){
  e("popup-container").innerHTML = "<div id=\"popup-img\" onclick=\"closepopup()\"><img src=\"" + img.src + "\"></div>";
}

function closepopup(){
  e("popup-container").innerHTML = "";
}
