// Menú mobile (hamburguesa)
var menu = document.querySelector('.hamburger');
var menuMobile = document.querySelector('.menuppal');

function toggleMenu(event) {
    event.preventDefault();
    this.classList.toggle('is-active');
    menuMobile.classList.toggle('is_active');
    if (menuMobile.classList.contains("is_active")) {
        playSound(menuOpenSound);
    } else {
        playSound(menuCloseSound);
    }
}
// Audio menú mobile
menu.addEventListener('click', toggleMenu, false);


// Menú desktop - Búsqueda en la barra
function buscar() {
    let query = document.getElementById("search").value.trim().toLowerCase();

    // Validar entrada
    if (query === "" || /^[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]+$/.test(query)) {
        alert("Por favor, escribe una búsqueda válida.");
        return;
    }

    // Remover resaltado previo
    document.querySelectorAll('.highlight').forEach(el => el.outerHTML = el.innerHTML);

    let found = false;
    document.querySelectorAll("p, h1, h2, li").forEach(element => {
        let text = element.innerHTML.toLowerCase();
        if (text.includes(query)) {
            let regex = new RegExp(query, "gi");
            element.innerHTML = element.innerHTML.replace(regex, match => `<span class='highlight'>${match}</span>`);
            found = true;
        }
    });

    if (!found) alert("No se encontraron coincidencias.");
}

// Detectar ENTER en el campo de búsqueda
document.getElementById("search").addEventListener("keypress", function(event) {
    if (event.key === "Enter") buscar();
});

// Manejo de sonidos
const basePath = window.location.pathname.includes("/pages/") ? "../assets/audio/" : "assets/audio/";
const hoverSound = new Audio(basePath + "hover.mp3");
const clickSound = new Audio(basePath + "click.mp3");
const menuOpenSound = new Audio(basePath + "menu-open.mp3");
const menuCloseSound = new Audio(basePath + "menu-close.mp3");
// Función para reproducir sonido de manera segura
function playSound(audio) {
    audio.currentTime = 0;
    audio.play().catch(error => console.error("Error al reproducir sonido:", error));
}
// Botones en lista de localizaciones
const localizaciones = document.querySelectorAll(".localizaciones li");
localizaciones.forEach(boton => {
    boton.addEventListener("mouseenter", () => playSound(hoverSound));
    boton.addEventListener("click", () => playSound(clickSound));
});
// Botón de scroll-up
const scrollUpBtn = document.querySelector(".scroll-up-btn");
if (scrollUpBtn) {
    scrollUpBtn.addEventListener("mouseenter", () => playSound(hoverSound));
    scrollUpBtn.addEventListener("click", () => playSound(clickSound));
}
// Enlaces en la lista de capítulos
const capitulos = document.querySelectorAll(".cap_lista li a");
capitulos.forEach(cap => {
    cap.addEventListener("mouseenter", () => playSound(hoverSound));
    cap.addEventListener("click", () => playSound(clickSound));
});
// Enlaces en la lista de los logos
const logos = document.querySelectorAll(".logos li");
logos.forEach(boton => {
    boton.addEventListener("mouseenter", () => playSound(hoverSound));
    boton.addEventListener("click", () => playSound(clickSound));
})



// Eventos para enlaces del menú (desktop y mobile)
const navLinks = document.querySelectorAll(".nav-links a, .menuppal ul li a");
navLinks.forEach(link => {
    link.addEventListener("mouseover", () => playSound(hoverSound));

    link.addEventListener("click", (event) => {
        event.preventDefault();
        playSound(clickSound);
        setTimeout(() => { window.location.href = link.href; }, 200);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const audios = document.querySelectorAll("audio");
    let currentAudio = null;

    audios.forEach(audio => {
        audio.addEventListener("play", function () {
            if (currentAudio && currentAudio !== this) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            currentAudio = this;
        });

        audio.addEventListener("ended", function () {
            if (currentAudio === this) {
                currentAudio = null;
            }
        });
    });
});

// Tada en cualquier imagen con clase específica (ej. animatable)
document.addEventListener("DOMContentLoaded", function () {
    const animatedImgs = document.querySelectorAll(".animatable");

    animatedImgs.forEach(function (img) {
        img.addEventListener("mouseenter", function () {
            img.classList.add("animate__animated", "animate__tada");
        });

        img.addEventListener("animationend", function () {
            img.classList.remove("animate__animated", "animate__tada");
        });
    });
});


// Capítulos 3 y 4. No disponibles hasta NS2
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        const href = link.getAttribute("href");

        if (!href || href.trim() === "") {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                alert("Gracias por tu interés 😊 Este capítulo estará disponible el 5 de junio de 2025. ¡Te esperamos!");
            });
        }
        else if (!href || href.trim() === "no-link") {
            link.addEventListener("click", function(event) {
                event.preventDefault();
                alert("Gracias por tu interés para jugar en esta plataforma 😊 Desafortunadamente aún no se encuentra disponible, pero puedes esperar hasta el 5 de junio de 2025 para poder disfrutar de este capítulo en esta plataforma. ¡Te esperamos!");
            });
        }
        else if (!href || href.trim() === "no-cap") {
            link.addEventListener("click", function(event) {
                event.preventDefault();
                alert("☠︎□︎ ⧫︎♓︎♏︎■︎♏︎ ♋︎♍︎♍︎♏︎⬧︎□︎ ♋︎ ♏︎⬧︎⧫︎♏︎ ♍︎□︎■︎⧫︎♏︎■︎♓︎♎︎□︎📪︎ ⬧︎♓︎ ♎︎♏︎⬧︎♏︎♋︎ ♋︎♍︎♍︎♏︎♎︎♏︎❒︎ ♋︎ ♏︎⬧︎⧫︎♏︎ ❍︎♓︎⬧︎❍︎□︎ ◻︎□︎❒︎ ♐︎♋︎❖︎□︎❒︎ ♍︎□︎❍︎◆︎■︎◻︎❑︎◆︎♏︎⬧︎♏︎ ♍︎□︎■︎ ♏︎●︎ ♎︎□︎♍︎⧫︎□︎❒︎ ☝︎");
            });
        }
    });
});

// Scroll botón
const btn = document.querySelector(".scroll-up-btn");
btn.addEventListener("click", () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// Botones 3D
document.addEventListener('DOMContentLoaded', () => {
    const apply3DEffect = (selector) => {
    const listItems = document.querySelectorAll(`${selector} li`);
    listItems.forEach((item) => {
        item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = -(y - centerY) / 10;
        const rotateY = (x - centerX) / 10;
        item.style.transform = `perspective(1000px) scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        item.classList.add('hovered');
        });
        item.addEventListener('mouseleave', () => {
        item.style.transform = 'perspective(1000px)';
        item.classList.remove('hovered');
        });
        item.addEventListener('mouseenter', () => {
        item.classList.add('hovered');
        });
    });
    };
    // Aplica el efecto tanto a cap_lista como a localizaciones
    apply3DEffect('.cap_lista');
    apply3DEffect('.localizaciones');
    apply3DEffect('.logos');
});

// Lancer
document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('clickableImage');
    const counterEl = document.getElementById('counter');
    const audio = document.getElementById('sound');

    // Detectar si estamos en una subcarpeta como /pages
    const isInSubfolder = window.location.pathname.includes('/pages/');

    // Rutas relativas correctas
    const staticImg = isInSubfolder ? '../assets/img/lancer-spin.png' : 'assets/img/lancer-spin.png';
    const gifImg = isInSubfolder ? '../assets/img/lancer-spin.gif' : 'assets/img/lancer-spin.gif';
    const audioSrc = isInSubfolder ? '../assets/audio/lancer-spin.mp3' : 'assets/audio/lancer-spin.mp3';

    // Asignar audio
    audio.src = audioSrc;

    // Obtener el contador desde localStorage
    let counter = parseInt(localStorage.getItem('clickCounter')) || 0;

    // Ocultar contador si aún no hay clics
    if (counter > 0) {
    counterEl.style.display = 'block';
    counterEl.textContent = counter;
    }

    let isPlaying = false;

    image.addEventListener('click', () => {
    if (isPlaying) return;

    isPlaying = true;
    image.src = gifImg;
    audio.currentTime = 0;
    audio.play();

    audio.addEventListener('ended', () => {
        image.src = staticImg;

        counter++;
        localStorage.setItem('clickCounter', counter);

        counterEl.textContent = counter;
        counterEl.style.display = 'block'; // Mostrar solo después del primer clic
        isPlaying = false;
    }, { once: true });
    });
});

