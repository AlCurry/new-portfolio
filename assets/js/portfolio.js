var image=document.getElementById("image");
var currentPos = 0;
var images = ["assets/images/ACReichstag2.jpg", "assets/images/AC95resize2.jpg","assets/images/ACPinesBeach.jpg"]

function volgendefoto() {
		if (++currentPos >= images.length) currentPos = 0;
		image.src = images[currentPos];
}

setInterval(volgendefoto, 8000);