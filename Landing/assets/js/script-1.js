let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;
let Zindex = document.getElementById("layer");
let rigth = document.getElementById("layerimg");

boton.addEventListener("click", function(e){
    
    e.preventDefault();
    if(contador==0){
        enlaces.className = ("enlaces dos")
        contador=1;
        Zindex.style.display ="none";
        rigth.style.marginRight ="-800em";
        rigth.style.transition ="1s ease";
        rigth.style.display = "none";
        rigth.style.transition ="1s ease";
    }else{
        enlaces.classList.remove("dos")
        enlaces.className = ("enlaces uno")
        contador=0;
         Zindex.style.display ="block";
         rigth.style.marginRight ="1px";
         rigth.style.display = "block";
    }
    
})

AOS.init();

document.addEventListener("mousemove", parallax);

        function parallax(A) {
            this.querySelectorAll('.layer').forEach(layer => {
                const speed = layer.getAttribute('data-speed');
                const x = (window.innerWidth - A.pageX * speed) / 100;
                const y = (window.innerHeight - A.pageY * speed) / 100;

                layer.style.transform = ` translateX(${x}px) translateY(${y}px)`;
            });
        }

    const  imagenes = document.querySelectorAll('.img-gallery');
    const imagenesLight = document.querySelector('.agregar-img');
    const contenedorLight = document.querySelector('.img-light');

    // console.log(imagenes);
    // console.log(imagenesLight);
    // console.log(contenedorLight);

    imagenes.forEach(imagen =>{
        imagen.addEventListener('click', ()=>{
            aparecerImagen(imagen.getAttribute('src'))
            
        })
    })

    contenedorLight.addEventListener('click', (e)=>{
        if(e.target !== imagenesLight){
            contenedorLight.classList.toggle('show');
            imagenesLight.classList.toggle('showImage');
        }  
    })

    const aparecerImagen = (imagen)=>{
        imagenesLight.src = imagen;
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('.showImagen')
    }

    // slider

      
        // Paralax

        // formulary
