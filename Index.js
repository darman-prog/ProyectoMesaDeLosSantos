document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector('.carrusel-items');
    const items = carrusel.querySelectorAll('.carrusel-item');
    const prev = document.querySelector('.carrusel-control-previo');
    const next = document.querySelector('.carrusel-control-siguiente');
    let current = 0;
    let interval = null;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('activo', i === index);
        });
    }

    function nextItem() {
        current = (current + 1) % items.length;
        showItem(current);
    }

    function prevItem() {
        current = (current - 1 + items.length) % items.length;
        showItem(current);
    }

    prev.addEventListener('click', function (e) {
        e.preventDefault();
        prevItem();
        resetInterval();
    });

    next.addEventListener('click', function (e) {
        e.preventDefault();
        nextItem();
        resetInterval();
    });

    function startInterval() {
        interval = setInterval(nextItem, 5000);
    }

    function resetInterval() {
        clearInterval(interval);
        startInterval();
    }

    // Inicializar
    showItem(current);
    startInterval();
});

document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector("#carruselEncabezado");
    const carruselItems = carrusel.querySelector(".carrusel-items");
    const items = carrusel.querySelectorAll(".carrusel-item");
    const totalItems = items.length;

    let currentIndex = 0;

    function mostrarSlide(index) {
        carruselItems.style.transform = `translateX(-${index * 100}%)`;
    }

    document.querySelector(".carrusel-control-previo").addEventListener("click", function (e) {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        mostrarSlide(currentIndex);
    });

    document.querySelector(".carrusel-control-siguiente").addEventListener("click", function (e) {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % totalItems;
        mostrarSlide(currentIndex);
    });

    // Carrusel automático cada 5 segundos
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        mostrarSlide(currentIndex);
    }, 5000);
});

// mini carrusel
  const imagenes = [
    "https://i.postimg.cc/kXFbzBPV/Mesa1.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/d2/34/70/img-20180720-064648650.jpg?w=1000&h=-1&s=1"
  ];

  let indice = 0;
  const imagenElemento = document.getElementById("imagenSobre");

  setInterval(() => {
    // Apaga la imagen
    imagenElemento.classList.remove("fade-in");
    imagenElemento.classList.add("fade-out");

    // Espera 500ms antes de cambiar la imagen
    setTimeout(() => {
      indice = (indice + 1) % imagenes.length;
      imagenElemento.src = imagenes[indice];

      // Enciende con fade-in
      imagenElemento.classList.remove("fade-out");
      imagenElemento.classList.add("fade-in");
    }, 500);
  }, 4000);
