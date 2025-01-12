const text=document.getElementById("text");


const totalCharecter=document.querySelector(".total");
const remainCharecter=document.querySelector(".remaining");
text.addEventListener("keyup",()=>{
     updateCounter();
    
})

function updateCounter(){
     totalCharecter.innerHTML= text.value.length;
     remainCharecter.innerHTML=text.getAttribute("maxlength")-text.value.length;

}