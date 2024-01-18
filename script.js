//Header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-times')
})

// Inicio de transicion de titulo

const title = document.getElementById("title");
    const phrase = document.getElementById("phrase");

    const languages = [
        { title: "Hola, soy <br>Pipe Rojas", phrase: "Soy <span class='auto-input'>Ingeniero de Software</span>" },
        { title: "Hi, I'm  <br>Pipe Rojas", phrase: "I'm <span class='auto-input'>Software Engineer</span>" },
        { title: "Bonjour, je m'appelle  <br>Pipe Rojas", phrase: "je suis  <span class='auto-input'>ingénieur logiciel</span>" }

        //agregar dos idiomas mas 
    ];

    let currentLanguageIndex = 0;

    // Cambia el idioma cada 4 segundos
    setInterval(changeLanguage, 8000);

function changeLanguage() {
    // Oculta suavemente el contenido anterior
    title.style.opacity = 0;
    title.style.transform = "translateY(-20px)";
    phrase.style.opacity = 0;
    phrase.style.transform = "translateY(-20px)";

    setTimeout(function () {
        // Cambia el contenido después de la transición
        title.innerHTML = languages[currentLanguageIndex].title;
        phrase.innerHTML = languages[currentLanguageIndex].phrase;

        // Mostrar suavemente el nuevo contenido
        title.style.opacity = 2;
        title.style.transform = "translateY(0)";
        phrase.style.opacity = 1;
        phrase.style.transform = "translateY(0)";
        
        currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
    }, 800); // 500ms (0.5 segundos) es el tiempo de la transición
}
//Finalizacion de transición de titulo. 



// typing Effect
// esto esta interesante ponerselo a algo con efectos de escribir
document.addEventListener("DOMContentLoaded", function() {
    let typed = new Typed('.typing-effect', {
        strings: ['Junior Developer Python','Data Engineer','Software Engineer', 'Web Developer ','Freelancer' ,'Junior Developer Java'],
        typeSpeed: 100,
        backSpeed: 100,
        BackDelay: 2000, // Corregido: "BackDelay" a "backDelay"
        loop: true,
    });
});


//------------------------------------------------------------------------------

//skill section animation start //

const progressBars = document.querySelectorAll('.inner-line');
window.addEventListener('scroll',function() {
    progressBars.forEach(function(progressBars){
        const rect = progressBars.getBoundingClientRect();

        if (rect.top <window.innerHeight && rect.bottom >= 0 ){
            const width = progressBars.getAttribute('data-width');
            progressBars.style.width = width + '%';
        } 
    });
});


//Active link state on scroll //
let navLinks = document.querySelectorAll('nav ul li a')
let section = document.querySelectorAll('section')

window.addEventListener('scroll',function(){
    const scrollPos = window.scrollY + 20
    section.forEach(section=>{
        if(scrollPos>section.offsetTop && scrollPos< (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link=>{
                link.classList.remove('active');
                if(section.getAttribute('id')==link.getAttribute('href').substring(1)){
                    link.classList.add('active');
                }
            });
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('miFormulario');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma convencional

        // Obtener los valores de los campos
        const nombre = document.getElementById('name').value;
        const correo = document.getElementById('E-mail').value;
        const asunto = document.getElementById('subject').value;
        const mensaje = document.getElementById('msg').value;

        // Validar campos (puedes agregar más validaciones según tus necesidades)
        if (nombre === '' || correo === '' || asunto === '' || mensaje === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Crear un objeto con los datos del formulario
        const datos = {
            nombre: nombre,
            correo: correo,
            asunto: asunto,
            mensaje: mensaje
        };

        // Almacenar los datos en el almacenamiento local
        localStorage.setItem('formularioDatos', JSON.stringify(datos));

        // Opcional: Puedes mostrar un mensaje de éxito al usuario
        alert('¡Datos enviados con éxito!');

        // Limpia los campos después de enviar el formulario
        formulario.reset();
    });

    // Al cargar la página, verifica si hay datos almacenados y muéstralos si existen
    const datosGuardados = localStorage.getItem('formularioDatos');
    if (datosGuardados) {
        const datosObjeto = JSON.parse(datosGuardados);
        mostrarDatosGuardados(datosObjeto);
    }

    // Función para mostrar los datos almacenados
    function mostrarDatosGuardados(datos) {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `
            <h2>Datos almacenados</h2>
            <p><strong>Nombre:</strong> ${datos.nombre}</p>
            <p><strong>Correo:</strong> ${datos.correo}</p>
            <p><strong>Asunto:</strong> ${datos.asunto}</p>
            <p><strong>Mensaje:</strong> ${datos.mensaje}</p>
        `;
    }
});



  
  
  
  
  






