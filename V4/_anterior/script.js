/**
 * CRISTIAN GARCÍA · CV
 * Todo el contenido es visible sin JavaScript; esto solo añade mejoras.
 */
(function () {
    'use strict';

    // MartiMotos: desde el 1 de noviembre de 2025.
    var MARTIMOTOS_START = new Date(2025, 10, 1);
    // Experiencia previa en meses: R&C Associats (3) + Andorra Telecom (12).
    var PREVIOUS_MONTHS = 15;

    function monthsSince(start, now) {
        var months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
        if (now.getDate() < start.getDate()) months -= 1;
        return Math.max(1, months);
    }

    function formatDuration(months) {
        if (months < 12) return months === 1 ? '1 mes' : months + ' meses';
        var years = Math.floor(months / 12);
        var rest = months % 12;
        var text = years === 1 ? '1 año' : years + ' años';
        if (rest) text += ' y ' + (rest === 1 ? '1 mes' : rest + ' meses');
        return text;
    }

    function initDates() {
        var now = new Date();
        var months = monthsSince(MARTIMOTOS_START, now);

        var duration = document.getElementById('martimotos-duration');
        if (duration) duration.textContent = formatDuration(months);

        var years = document.getElementById('experience-years');
        if (years) years.textContent = String(Math.floor((PREVIOUS_MONTHS + months) / 12));

        var year = document.getElementById('year');
        if (year) year.textContent = String(now.getFullYear());
    }

    function initNavbar() {
        var navbar = document.getElementById('navbar');
        if (!navbar) return;
        var onScroll = function () {
            navbar.classList.toggle('scrolled', window.scrollY > 10);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    function initMobileMenu() {
        var toggle = document.getElementById('nav-toggle');
        var menu = document.getElementById('nav-menu');
        if (!toggle || !menu) return;

        var setOpen = function (open) {
            menu.classList.toggle('open', open);
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
        };

        toggle.addEventListener('click', function () {
            setOpen(!menu.classList.contains('open'));
        });

        menu.addEventListener('click', function (e) {
            if (e.target.closest('a')) setOpen(false);
        });

        document.addEventListener('click', function (e) {
            if (!toggle.contains(e.target) && !menu.contains(e.target)) setOpen(false);
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') setOpen(false);
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 760) setOpen(false);
        });
    }

    function initActiveLink() {
        if (!('IntersectionObserver' in window)) return;
        var links = document.querySelectorAll('.nav-link');
        var byId = {};
        links.forEach(function (link) {
            byId[link.getAttribute('href').slice(1)] = link;
        });

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                links.forEach(function (l) { l.classList.remove('active'); });
                var link = byId[entry.target.id];
                if (link) link.classList.add('active');
            });
        }, { rootMargin: '-45% 0px -50% 0px' });

        document.querySelectorAll('main section[id]').forEach(function (s) { observer.observe(s); });
    }

    // Animación suave al aparecer. Si algo falla, el contenido sigue visible.
    function initReveal() {
        var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce || !('IntersectionObserver' in window)) return;

        var items = document.querySelectorAll(
            '.section-header, .case, .also, .job, .project, .hobby, .skill-group, .edu-col, .contact-item'
        );

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

        items.forEach(function (el) {
            el.classList.add('reveal');
            observer.observe(el);
        });
        document.documentElement.classList.add('js-anim');

        // Al imprimir o guardar como PDF, mostrarlo todo.
        window.addEventListener('beforeprint', function () {
            items.forEach(function (el) { el.classList.add('visible'); });
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        initDates();
        initNavbar();
        initMobileMenu();
        initActiveLink();
        initReveal();
    });
})();
