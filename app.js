const a=document.querySelector("a");

a.addEventListener("mouseover",(event)=>{
    const x=(event.pageX-a.offsetLeft);
    const y=(event.pageY-a.offsetTop);
    a.style.setProperty("--xPos", x + "px");
    a.style.setProperty("--yPos", y + "px");
});