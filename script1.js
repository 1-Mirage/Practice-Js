const butn=document.getElementById("inp");
let boxx=document.getElementById("box");
const butn1=document.getElementById("val");
const inc=document.getElementById("increase");
const dec=document.getElementById("decrease");
let size=14;
const call=function()
{
     boxx.innerHTML+=butn1.value;
}
const incf=function()
{
    size+=2;
    boxx.style.fontSize=String(size)+"px";
}
const decf=function()
{
    size-=2;
    boxx.style.fontSize=String(size)+"px";
}





butn.addEventListener("click",call);
inc.addEventListener("click",incf);
dec.addEventListener("click",decf);
