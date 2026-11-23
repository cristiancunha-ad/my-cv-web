(function () {
    // Menú en móvil
    var toggle = document.getElementById('nav-toggle');
    var menu = document.getElementById('nav-menu');
    if (toggle && menu) {
        var setOpen = function (open) {
            menu.classList.toggle('open', open);
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
        };
        toggle.addEventListener('click', function () { setOpen(!menu.classList.contains('open')); });
        menu.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
        window.addEventListener('resize', function () { if (window.innerWidth > 760) setOpen(false); });
    }

    // Marca en el menú la sección que se está leyendo
    if (!('IntersectionObserver' in window)) return;
    var links = document.querySelectorAll('.nav-menu a[href^="#"]');
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            links.forEach(function (a) { a.classList.remove('active'); });
            if (byId[entry.target.id]) byId[entry.target.id].classList.add('active');
        });
    }, { rootMargin: '-40% 0px -55% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { observer.observe(s); });
})();
