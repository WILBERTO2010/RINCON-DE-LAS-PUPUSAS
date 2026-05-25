document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. MENÚ HAMBURGUESA (Responsivo) ---
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-item");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        // Cambiar el icono dinámicamente de barras a "X"
        const icon = menuToggle.querySelector("i");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
    });

    // Cerrar el menú al hacer clic en un enlace de sección (anclas)
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("active");
            const icon = menuToggle.querySelector("i");
            icon.classList.add("fa-bars");
            icon.classList.remove("fa-times");
        });
    });


    // --- 2. INTERACCIÓN CON EL DOM (Contador dinámico de antojos) ---
    const btnAntojo = document.getElementById("btn-antojo");
    const counterValue = document.getElementById("counter-value");
    let count = 0;

    btnAntojo.addEventListener("click", () => {
        count++;
        counterValue.textContent = count;
        
        // Modificación del DOM extra: efecto visual temporal al presionar
        btnAntojo.style.transform = "scale(0.95)";
        setTimeout(() => {
            btnAntojo.style.transform = "scale(1)";
        }, 100);
    });


    // --- 3. VALIDACIÓN DEL FORMULARIO CON JS ---
    const form = document.getElementById("contact-form");
    const successMsg = document.getElementById("form-success");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Detener envío por defecto
        
        // Inputs
        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const mensaje = document.getElementById("mensaje");

        // Elementos de Error
        const errorNombre = document.getElementById("error-nombre");
        const errorEmail = document.getElementById("error-email");
        const errorMensaje = document.getElementById("error-mensaje");

        let isValid = true;

        // Validación de Nombre
        if (nombre.value.trim().length < 3) {
            errorNombre.style.display = "block";
            nombre.style.borderColor = "#dc2626";
            isValid = false;
        } else {
            errorNombre.style.display = "none";
            nombre.style.borderColor = "#16a34a";
        }

        // Validación de Email (Regex estándar)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            errorEmail.style.display = "block";
            email.style.borderColor = "#dc2626";
            isValid = false;
        } else {
            errorEmail.style.display = "none";
            email.style.borderColor = "#16a34a";
        }

        // Validación de Mensaje
        if (mensaje.value.trim() === "") {
            errorMensaje.style.display = "block";
            mensaje.style.borderColor = "#dc2626";
            isValid = false;
        } else {
            errorMensaje.style.display = "none";
            mensaje.style.borderColor = "#16a34a";
        }

        // Si todo está correcto
        if (isValid) {
            successMsg.style.display = "block";
            form.reset(); // Limpia los campos del formulario
            
            // Resetear bordes de éxito tras unos segundos
            setTimeout(() => {
                nombre.style.borderColor = "#ccc";
                email.style.borderColor = "#ccc";
                mensaje.style.borderColor = "#ccc";
                successMsg.style.display = "none";
            }, 5000);
        }
    });


    // --- 4. AÑO DINÁMICO EN EL FOOTER ---
    document.getElementById("year").textContent = new Date().getFullYear();
});