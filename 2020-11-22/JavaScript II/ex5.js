function printCount (sColor1, sColor2) {
	var paragraphs = document.getElementsByTagName("p");
	console.log(paragraphs.length);
	var headertitle = document.getElementsByClassName("headertitle");
	console.log(headertitle.length);
	
	document.title = paragraphs.length + " параграфа," + headertitle.length + " елемента с клас <headertitle>";
	
	
	for (let i = 0; i < paragraphs.length; i++) {
		paragraphs[i].style.color = sColor1;
	}
	
	for (let i = 0; i < headertitle.length; i++) {
		headertitle[i].style.color = sColor2;
	}
}