var road
var catBegin;
var huskyBegin;
var catTeam =  document.getElementById("c")
var huskyTeam = document.getElementById("h")   
var catIma = document.getElementById("cat")
var huskyIma =  document.getElementById("husky")
    
function raceBegin(){
    catBegin = 0;
    catTeam.style.left = catBegin + "px";
    catIma.src = "cat.png";
    catIma.style.display = "block";
    document.getElementById("catWins").style.display = "none";
    huskyBegin = 0;   
    huskyTeam.style.left = huskyBegin + "px";
    huskyIma.src = "husky.png";  
    huskyIma.style.display = "block";
    document.getElementById("huskyWins").style.display = "none";
    document.getElementById("green").style.display = "none";    
    document.getElementById("red").style.display = "inline-block";
    document.getElementById("red").style.width = "100px";
    document.getElementById("red").style.height = "270px";     
} 

function raceRun(){            
    document.getElementById("green").style.display = "block";
    document.getElementById("green").style.width = "100px";
    document.getElementById("green").style.height = "270px";    
    document.getElementById("red").style.display = "none";           
    road = setInterval(raceCal);
} 

function raceCal(){
    var randomNum = Math.floor(Math.random()*10);
    var distance = Math.floor(Math.random()*7); 
    if(randomNum == 0)
    {
      var distance1 = catBegin + distance;
      catBegin+=distance;
      catTeam.style.left = distance1 + "px";
    } 
    else if(randomNum == 2)
    {
      var distance2 = huskyBegin + distance;
      huskyBegin+=distance;
      huskyTeam.style.left = distance2 + "px";  
    }     
    if (distance1>= 1000 ||  distance2>= 1000) 
    {
      clearInterval(road);
      if (distance1>= 1000)
    {
    catIma.style.display = "none";
    huskyIma.style.display = "none";
    document.getElementById("catWins").style.display = "block";
    document.getElementById("green").style.display = "none"; 
    document.getElementById("red").style.display = "none"; 
    } 
    else
    {
    catIma.style.display = "none";
    huskyIma.style.display = "none";
    document.getElementById("huskyWins").style.display = "block"
    document.getElementById("green").style.display = "none"; 
    document.getElementById("red").style.display = "none"; 
    }    
  } 
} 