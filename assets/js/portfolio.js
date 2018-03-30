var image=document.getElementById("image");
var currentPos = 0;
var images = ["assets/images/AC2.jpg", "assets/images/AC95.jpg","assets/images/AC3.jpg"]

function volgendefoto() {
		if (++currentPos >= images.length) currentPos = 0;
		image.src = images[currentPos];
}

setInterval(volgendefoto, 8000);