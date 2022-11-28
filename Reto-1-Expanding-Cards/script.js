// Evento Click a las cards para su despliegue
const card = document.querySelectorAll(".img");
const contenedorCard = document.querySelectorAll(".contenedor-imagen");

card.forEach((img, i)=>{
    card[i].addEventListener("click",()=>{
        card.forEach((img, i)=>{
            contenedorCard[i].classList.remove("activo");
            contenedorCard[i].style.transition = "all 0.8s";
        });
        contenedorCard[i].classList.add("activo");
        contenedorCard[i].style.transition = "all 0.8s";
    });
});