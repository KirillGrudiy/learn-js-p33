var gallery = document.getElementById("gallery");

var show = document.getElementById("show");

gallery.onmousemove = function(e) {
    if ( e.target.nodeName == 'IMG' ) {
        show.style.display = "block";
        console.log(e)
        show.style.top = e.y + 10 + "px";
        show.style.left = e.x + 10 + "px";
        var image = show.querySelector('img');
        image.src = e.target.attributes.src.nodeValue;

    }

    e.target.onmouseout = function (j) {
        show.style.display = "none"
    }
};
