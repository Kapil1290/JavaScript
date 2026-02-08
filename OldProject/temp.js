let red = document.querySelector("#red");
let Yellow = document.querySelector("#yellow");
let Green = document.querySelector("#green");
let Blue = document.querySelector("#blue");
let Pink = document.querySelector("#pink");
let pista = document.querySelector("#bisque");
let orange = document.querySelector("#cream");
let white = document.querySelector("#white");
let maroon = document.querySelector("#maroon")
let h1 = document.querySelector("h1");

red.onclick=()=>{
   document.body.style.backgroundColor=red.getAttribute("id");
   h1.style.color = "white";
   // red.style.backgroundColor = "red";
}
maroon.onclick=()=>{
   document.body.style.backgroundColor= "#780c28";
   h1.style.color = "white";
   // red.style.backgroundColor = "red";
}
Yellow.onclick=()=>{
   document.body.style.backgroundColor=Yellow.getAttribute("id");
   h1.style.color = "black";
   // Yellow.style.backgroundColor = "yellow";
}
Green.onclick=()=>{
   document.body.style.backgroundColor=Green.getAttribute("id");
   h1.style.color = "white";
   // Green.style.backgroundColor = "green";
}
Blue.onclick=()=>{
   document.body.style.backgroundColor=Blue.getAttribute("id");
   h1.style.color = "white";
   // Blue.style.backgroundColor = "blue";
}
Pink.onclick=()=>{
   document.body.style.backgroundColor=Pink.getAttribute("id");
   h1.style.color = "black";
   // Pink.style.backgroundColor = "pink";
}
pista.onclick=()=>{
   document.body.style.backgroundColor="#cae0bc";
   h1.style.color = "black";
   // bisque.style.backgroundColor = "bisque";
}
orange.onclick=()=>{
   document.body.style.backgroundColor= "#E9762b";
   h1.style.color = "black";
   // cream.style.backgroundColor = "cream";
}
white.onclick=()=>{
   document.body.style.backgroundColor=white.getAttribute("id");
   h1.style.color = "black";
}

