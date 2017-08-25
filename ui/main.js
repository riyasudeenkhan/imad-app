console.log('Loaded!');

alert("main.js");

var element=document.getElementById('content');

element.innerHTML = "newValue";

var img = document.getElementById('img');
img.onClick = function() {
    img.style.marginLeft='100px';
}