function preloadFunc() {
	var clock = document.querySelector('.clock');
	if (window.innerWidth > window.innerHeight) {
		clock.style.width = "75vh";
		clock.style.height = "75vh";
	} else {
		clock.style.width = "75vw";
		clock.style.height = "75vw";
	}
	time = new Date();
	if (time.getHours() >= 18) {
		document.querySelector("body").style.backgroundColor = "#222";
	} else {
		document.querySelector("body").style.backgroundColor = "#fff";
	}
}
window.onpaint = preloadFunc();


setInterval(function () {
	d = new Date();
	htime = d.getHours();
	mtime = d.getMinutes();
	stime = d.getSeconds();
	hrotation = 30 * htime + mtime / 2;
	mrotation = 6 * mtime;
	srotation = 6 * stime;

	document.querySelector('.hours').style.transform = `translate(-50%,-100%) rotate(${hrotation}deg)`;
	document.querySelector('.minutes').style.transform = `translate(-50%,-100%) rotate(${mrotation}deg)`;
	document.querySelector('.seconds').style.transform = `translate(-50%,-100%) rotate(${srotation}deg)`;
}, 1000);
