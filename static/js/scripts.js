/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   Scripts del portafolio
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   1. Cambio entre modo claro y modo oscuro.
   2. Indicador del enlace activo en el menú al hacer scroll.
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


/* ~~~~~~~~~~ 1. Lógica del modo oscuro ~~~~~~~~~~ */

const themeToggle = document.getElementById('boton-tema');
const body = document.body;
const icon = document.getElementById('icono-tema');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        icon.innerText = 'light_mode';
    } else {
        icon.innerText = 'dark_mode';
    }
});


/* ~~~~~~~~~~ 2. Indicador del enlace activo en la barra de navegación ~~~~~~~~~~ */

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.seccion');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('nav-activo');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('nav-activo');
        }
    });
});


const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        formStatus.textContent = '';
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: new FormData(contactForm),
            });
            const data = await response.json();
            if (data.success) {
                formStatus.textContent = '¡Mensaje enviado! Gracias por escribir.';
                contactForm.reset();
            } else {
                formStatus.textContent = 'Hubo un problema. Intenta de nuevo.';
            }
        } catch (error) {
            formStatus.textContent = 'Error de conexión. Intenta más tarde.';
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}