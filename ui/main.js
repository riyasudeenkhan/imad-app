console.log('Loaded!');

alert("main.js");

var element=document.getElementById('content');

element.innerHTML = "newValue";

var img = document.getElementById('img');

var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}

img.onClick = function() {
    var interval = setInterval(moveRight, 50);
}