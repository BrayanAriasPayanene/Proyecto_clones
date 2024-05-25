document.addEventListener('DOMContentLoaded', function(){
    const inputDato = document.getElementById('inputDato');
    const btnMostrar = document.getElementById('btnMostrar');
    const resultado = document.getElementById('resultado');
 
    btnMostrar.addEventListener('click',function(){
        const dato = inputDato.value;
        resultado.textContent='Has ingresado: ' + dato;
    });
});