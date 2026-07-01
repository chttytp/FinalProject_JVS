function upDate(previewPic) {
	document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
	document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo() {
	document.getElementById('image').style.backgroundImage = "url('')";
	document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}

function initialize() {
	console.log("Page loaded. Initialization started.");
	let images = document.getElementsByClassName("preview");
	for (let i = 0; i < images.length; i++) {
		images[i].setAttribute("tabindex", "0");
		console.log("Added tabindex to image " + (i + 1));
	}
}
