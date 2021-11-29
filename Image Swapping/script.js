function swapImage(image){
   document.getElementById('mainImage').src = image;
}

mainImage.addEventListener("dblclick", function(){

  var currentSet = document.getElementById('img1').src;
  
  if(currentSet.includes("flower1.jpeg")){
      document.getElementById('img1').src='white1.jpeg';
      document.getElementById('img2').src='white2.jpeg';
      document.getElementById('img3').src='white3.jpeg';
      document.getElementById('img4').src='white4.jpeg';
     
  }
  
  if(currentSet.includes("white1.jpeg"))
  {
      document.getElementById('img1').src='flower1.jpeg';
      document.getElementById('img2').src='flower2.jpeg';
      document.getElementById('img3').src='flower3.jpeg';
      document.getElementById('img4').src='flower4.jpeg';
  }
  
})