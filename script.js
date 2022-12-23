const mapa = document.getElementById("mapa");
const img = document.querySelector("img");

mapa.addEventListener("mousemove",(e) =>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log(x,y);

    mapa.style.transformOrigin = `${x}px ${y}px`;
    mapa.style.transform = "scale(3)";

})

mapa.addEventListener("mouseleave", () =>{
    mapa.style.transformOrigin = "center center";
    mapa.style.transform = "scale(1)";
})