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
