/*Bonus...images into array...*/
var imgArray = new Array();

imgArray[1] = new image();
imgArray[1].src='flower1.jpeg';
imgArray[1].src='flower2.jpeg';
imgArray[1].src='flower3.jpeg';
imgArray[1].src='flower4.jpeg';

imgArray[2] = new image();
imgArray[1].src='white1.jpeg';
imgArray[1].src='white2.jpeg';
imgArray[1].src='white3.jpeg';
imgArray[1].src='white4.jpeg';

/*Bonus...window load...*/
Window.onload = (event) => {
  console.log("Loaded');
};

/*Single function*/
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

/*anonymous function*/ 
document.getElementById("expandedImg").addEventListener("dblclick",function() {
document.getElementById("thumbnails1").src="white1.jpeg;
document.getElementById("thumbnails2").src="white2.jpeg;
document.getElementById("thumbnails3").src="white3.jpeg;
document.getElementById("thumbnails4").src="white4.jpeg;}





