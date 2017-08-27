console.log('Loaded!');

var button = document.getElementById("counter");

button.onclick = function(){
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var count=document.getElementById("count");
            count.innerHTML=xhttp.responseText;
        }
    };
    
    xhttp.open("GET", "http://riyasudeenkhan.imad.hasura-app.io/counter", true);
    xhttp.send();
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