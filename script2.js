const h11=document.getElementById("h1");
const h22=document.getElementById("h2");
const h33=document.getElementById("h3");
const inp=document.getElementById("val");

const h1box=document.getElementsByTagName("H1");
const h2box=document.getElementsByTagName("H2");
const h3box=document.getElementsByTagName("H3");


const call1=function()
{
    h1box[0].innerHTML=inp.value;
    h2box[0].innerHTML="";
    h3box[0].innerHTML="";
}
const call2=function()
{
    h2box[0].innerHTML=inp.value;
    h1box[0].innerHTML="";
    h3box[0].innerHTML="";

}

const call3=function()
{
    h3box[0].innerHTML=inp.value;
    h1box[0].innerHTML="";
    h2box[0].innerHTML="";
}


h11.addEventListener("click",call1);
h22.addEventListener("click",call2);
h33.addEventListener("click",call3);




