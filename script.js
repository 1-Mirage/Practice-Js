const butn1=document.getElementById("val1");
const butn2=document.getElementById("val2");
const output=document.getElementById("out");
const add=document.getElementById("add");
const sub=document.getElementById("sub");
const div=document.getElementById("div");
const mul=document.getElementById("mul");

const addition=function()
{
    output.value=Number(butn1.value)+Number(butn2.value);
}
const subtraction=function()
{
    output.value=butn1.value-butn2.value;
}
const division=function()
{
    output.value=butn1.value/butn2.value;
}
const multiplication=function()
{
    output.value=butn1.value*butn2.value;
}

add.addEventListener("click",addition);
sub.addEventListener("click",subtraction);
div.addEventListener("click",division);
mul.addEventListener("click",multiplication);





