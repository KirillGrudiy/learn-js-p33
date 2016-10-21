var h1 = document.getElementById("h1");

h1.onclick = function(e) {
    if(h1.innerText == "Click test")
        h1.innerText = "Head 1"
    else
        h1.innerText = "Click test"
};

h1.onmousemove = function (e) {
    console.log(e);

    h1.style.color = "red";
};

h1.onmouseout = function () {
    h1.style.color = "green";
};
