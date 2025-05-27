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


// menu hamburguesa
document.addEventListener('DOMContentLoaded', () => {
  const btnMenu = document.querySelector('.MenuDeslegable');
  const menu = document.getElementById('barraNavegacionColapso');

  btnMenu.addEventListener('click', () => {
    const isExpanded = btnMenu.getAttribute('aria-expanded') === 'true';
    btnMenu.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('show');
    if(menu.hasAttribute('hidden')) {
      menu.removeAttribute('hidden');
    } else {
      menu.setAttribute('hidden', '');
    }
  });

  // Opcional: cerrar menú al hacer clic en un link (ideal para móviles)
  document.querySelectorAll('.barra-navegacion-item').forEach(link => {
    link.addEventListener('click', () => {
      if(window.innerWidth <= 768){
        menu.classList.remove('show');
        btnMenu.setAttribute('aria-expanded', 'false');
        menu.setAttribute('hidden', '');
      }
    });
  });
});

function iniciarMap(){
    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}


// mapa interactivo
function iniciarMap(){
    var coord = {lat: 6.7813, lng: -73.0862};  // Coordenadas de la Mesa de los Santos
    var map = new google.maps.Map(document.getElementById('mapa-interactivo'), {
        zoom: 13,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}
