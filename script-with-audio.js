// Efecto de aparición suave al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.hero > *');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Efecto de parallax suave en el scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.video-container');
    
    if (parallax) {
        const speed = scrolled * 0.3;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Efecto de hover mejorado para el botón CTA
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    ctaButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
}

// Control de audio del video
const unmuteBtn = document.getElementById('unmute-btn');
const video = document.getElementById('youtube-video');

if (unmuteBtn && video) {
    unmuteBtn.addEventListener('click', function() {
        // Cambiar el src del video para activar el audio
        const currentSrc = video.src;
        const newSrc = currentSrc.replace('mute=1', 'mute=0');
        video.src = newSrc;
        
        // Actualizar el botón
        this.innerHTML = '<span>🔊 Audio Activado</span>';
        this.classList.add('active');
        
        // Cambiar el texto de la nota
        const audioNote = document.querySelector('.audio-note');
        if (audioNote) {
            audioNote.textContent = '¡Disfruta de la música!';
        }
    });
}

// Animación de partículas de fondo (opcional)
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = 'rgba(255, 107, 107, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    particle.style.animation = 'float 6s linear infinite';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 6000);
}

// Crear partículas cada 2 segundos
setInterval(createParticle, 2000);

// Agregar estilos CSS para la animación de partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 