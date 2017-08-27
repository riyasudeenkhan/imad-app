console.log('Loaded!');

var button = document.getElementById("counter");
var counter=0;

button.onclick = function(){
    counter=counter+1;
    var count=document.getElementById("count");
    count.innerHTML=counter.toString();
};

// var element=document.getElementById('content');

// element.innerHTML = "newValue";

// var img = document.getElementById('img');

// var marginLeft = 0;
// function moveRight(){
//     marginLeft = marginLeft+1;
//     img.style.marginLeft=marginLeft+'px';
// }

// img.onclick = function() {
//     var interval = setInterval(moveRight, 50);
//}