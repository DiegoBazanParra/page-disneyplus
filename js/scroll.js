const scroll = document.querySelector("#scroll");
var isDown = false;
var scrollX;
var scrollLeft;

// Mouse Up Function
scroll.addEventListener("mouseup", () => {
	isDown = false;
});
// Mouse Down Function
scroll.addEventListener("mousedown", (e) => {
	e.preventDefault();
	isDown = true;
	scrollX = e.pageX - scroll.offsetLeft;
	scrollLeft = scroll.scrollLeft;
});
// Mouse Move Function
scroll.addEventListener("mousemove", (e) => {
	if (!isDown) return;
	e.preventDefault();
	var element = e.pageX - scroll.offsetLeft;
	var scrolling = (element - scrollX) * 2;
	scroll.scrollLeft = scrollLeft - scrolling;
});
// Scroll1
const scroll1 = document.querySelector("#scroll1");
scroll1.addEventListener("mouseup", () => {
	isDown = false;
});
scroll1.addEventListener("mousedown", (e) => {
	e.preventDefault();
	isDown = true;
	scrollX = e.pageX - scroll1.offsetLeft;
	scrollLeft = scroll1.scrollLeft;
});
scroll1.addEventListener("mousemove", (e) => {
	if (!isDown) return;
	e.preventDefault();
	var element = e.pageX - scroll1.offsetLeft;
	var scrolling = (element - scrollX) * 2;
	scroll1.scrollLeft = scrollLeft - scrolling;
});
// Scroll2
const scroll2 = document.querySelector("#scroll2");
scroll2.addEventListener("mouseup", () => {
	isDown = false;
});
scroll2.addEventListener("mousedown", (e) => {
	e.preventDefault();
	isDown = true;
	scrollX = e.pageX - scroll2.offsetLeft;
	scrollLeft = scroll2.scrollLeft;
});
scroll2.addEventListener("mousemove", (e) => {
	if (!isDown) return;
	e.preventDefault();
	var element = e.pageX - scroll2.offsetLeft;
	var scrolling = (element - scrollX) * 2;
	scroll2.scrollLeft = scrollLeft - scrolling;
});

// Scroll3
const scroll3 = document.querySelector("#scroll3");
scroll3.addEventListener("mouseup", () => {
	isDown = false;
});
scroll3.addEventListener("mousedown", (e) => {
	e.preventDefault();
	isDown = true;
	scrollX = e.pageX - scroll3.offsetLeft;
	scrollLeft = scroll3.scrollLeft;
});
scroll3.addEventListener("mousemove", (e) => {
	if (!isDown) return;
	e.preventDefault();
	var element = e.pageX - scroll3.offsetLeft;
	var scrolling = (element - scrollX) * 2;
	scroll3.scrollLeft = scrollLeft - scrolling;
});

// Scroll4
const scroll4 = document.querySelector("#scroll4");
scroll4.addEventListener("mouseup", () => {
	isDown = false;
});
scroll4.addEventListener("mousedown", (e) => {
	e.preventDefault();
	isDown = true;
	scrollX = e.pageX - scroll4.offsetLeft;
	scrollLeft = scroll4.scrollLeft;
});
scroll4.addEventListener("mousemove", (e) => {
	if (!isDown) return;
	e.preventDefault();
	var element = e.pageX - scroll4.offsetLeft;
	var scrolling = (element - scrollX) * 2;
	scroll4.scrollLeft = scrollLeft - scrolling;
});