const botones = document.querySelectorAll('.botonMostrar');

botones.forEach(boton => {
  boton.addEventListener("click", function() {
    const targetId = this.getAttribute("data-target");
    const informacion = document.getElementById(targetId);

    if (informacion.style.display === "none" || informacion.style.display === "") {
      informacion.style.display = "inline-block";
      this.textContent = "Leer menos";
    } else {
      informacion.style.display = "none";
      this.textContent = "Leer más";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const emprendimientosLink = document.querySelector("#sub-menu-emprendimientos");
  
  // Agrega un evento click al enlace "emprendimientos"
  emprendimientosLink.previousElementSibling.addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir que el enlace superior se abra
    
    if (emprendimientosLink.style.display === "block") {
      emprendimientosLink.style.display = "none"; // Oculta el submenú
    } else {
      emprendimientosLink.style.display = "block"; // Muestra el submenú
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const emprendimientosLink = document.querySelector("#sub-menu-Pasos");
  
  // Agrega un evento click al enlace "emprendimientos"
  emprendimientosLink.previousElementSibling.addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir que el enlace superior se abra
    
    if (emprendimientosLink.style.display === "block") {
      emprendimientosLink.style.display = "none"; // Oculta el submenú
    } else {
      emprendimientosLink.style.display = "block"; // Muestra el submenú
    }
  });
});


