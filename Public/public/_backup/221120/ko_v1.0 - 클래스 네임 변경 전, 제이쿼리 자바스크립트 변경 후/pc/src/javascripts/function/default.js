"use strict";
let windowWidth; // Window Width
let windowHeight;  // Window Height
let windowScrollTop; // Window Scroll Page YOffset

/* Window Size Report */
let reportWindowSize = () => {
	windowMeasurement();
	windowScrollTop = window.pageYOffset;
	window.addEventListener('resize', windowMeasurement);
	window.addEventListener('scroll', windowPageYOffset);
	layout();
	main();
}

/* Window Width Height  */
let windowMeasurement = () => {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

/* Window Scroll Offset  */
let windowPageYOffset = () => {
	windowScrollTop = window.pageYOffset;
	document.querySelector('.top').innerHTML = windowScrollTop;
}

/* Window Load */
window.addEventListener('load', reportWindowSize);