

 const checkbox=document.getElementById("checkbox");
 checkbox.disabled = true;

 const submitBtn = document.querySelector("button[type=submit]");
 submitBtn.disabled=true;

 const elements = document.querySelectorAll(".element");


 const selectColor=document.getElementById("SelectColor");

//assign color to elements 


 elements.forEach(function(element){
const color = getrandomcolor();

element.style.backgroundColor = color;
element.innerHTML= color;
selectColor.innerHTML= color;
 });

// generate random colors func
 function getrandomcolor(){
    const letter = "0123456789ABCDEF"
    let color = "#";
    for (let i =0 ; i<6; i++){
        color += letter[Math.floor(Math.random() * 16)];

    }
    return color;
 }

 // check if write colour

 elements.forEach(function(element){
element.addEventListener('click',function(){
 if (element.innerHTML === selectColor.innerHTML){


checkbox.checked= true;
submitBtn.disabled=false;
alert("You Are Human!!");
submitBtn.classList.remove("btn-light");
submitBtn.classList.add("btn-success");
 } else{
alert("Please Verify that You are Human!")
 location.reload(true);
 


 }


});




 });

 