var elementosDuvida = document.querySelectorAll('.duvida') 
//pegando todos os elementos

//executar uma funçao para cada elemento duvida 
//para cada função click 
elementosDuvida.forEach(function (duvida) {
     duvida.addEventListener('click', function (){
        duvida.classList.toggle('ativa')

     })
})
