const btn           = document.querySelectorAll(".boton");
const cargaNum      = document.querySelectorAll(".carga-numero");
const cargaBarra    = document.querySelectorAll(".carga-barra");

let contador = 0;
btn[0].addEventListener("click", ()=>{
    contador = Math.max(contador, 1)
    cargaBarra[contador-1].classList.remove("activo");
    cargaNum[contador].classList.remove("activo"); 
    contador-- 
});
btn[1].addEventListener("click", ()=>{
    contador++
    contador = Math.min(contador, cargaNum.length-1)
    cargaBarra[contador-1].classList.add("activo");
    cargaNum[contador].classList.add("activo"); 
});
