// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Reveal animation using IntersectionObserver
const sections = document.querySelectorAll('.section, .proyecto-card, .timeline-item');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.12 });

sections.forEach(s => io.observe(s));


// Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".open-modal").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const imgSrc = link.getAttribute("data-img");
    modalImg.src = imgSrc;
    modal.style.display = "block";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera de la imagen
modal.addEventListener("click", e => {
  if(e.target === modal) {
    modal.style.display = "none";
  }
});



// Diccionario de traducciones
// Diccionario de traducciones optimizado
const translations = {
  es: {
    "subtitulo": "Desarrollador Web & Automatización",
    "nav-sobre": "Sobre mí",
    "nav-skills": "Skills",
    "nav-proyectos": "Proyectos",
    "nav-experiencia": "Experiencia",
    "nav-contacto": "Contacto",
    "sobre-titulo": "Sobre mí",
    "sobre-texto1": "Soy un desarrollador web y especialista en automatización de procesos, con pasión por crear soluciones que ahorran tiempo y optimizan tareas. Busco oportunidades de trabajo remoto para aplicar mis conocimientos en proyectos reales y mejorar la eficiencia de equipos y empresas.",
    "sobre-texto2": "He trabajado con tecnologías y herramientas de automatización. Me motiva aprender constantemente y enfrentar desafíos de desarrollo y automatización.",
    "skills-titulo": "Skills",
    "proyectos-titulo": "Proyectos & Emprendimientos",
    "proyecto1-titulo": "Portfolio Web",
    "proyecto1-texto": "Este mismo sitio que estás viendo. Muestra mi experiencia, habilidades y proyectos de forma profesional y moderna.",
    "proyecto2-titulo": "Automatización de reservas",
    "proyecto2-texto": "Flujo automatizado de WhatsApp + Calendly para restaurantes, reduciendo errores y optimizando la gestión de citas.",
    "proyecto3-titulo": "Chatbot básico",
    "proyecto3-texto": "Desarrollé un chatbot que interactúa conmigo para automatizar tareas y consultas simples.",
    "proyecto4-titulo": "E-commerce 3D y Dropshipping",
    "proyecto4-texto": "Creé dos tiendas online: una de dropshipping y otra de productos impresos en 3D, incluyendo diseño, desarrollo y marketing digital.",
    "proyecto5-titulo": "Herramienta interna Python",
    "proyecto5-texto": "Programa propio para optimizar la gestión de usuarios en Active Directory, ahorrando tiempo al consultar datos y realizar tareas administrativas.",
    "proyecto6-titulo": "Mini proyectos rápidos",
    "proyecto6-texto": "Pequeños proyectos para portfolio rápido, como calculadoras interactivas, dashboards y scripts de automatización.",
    "ver": "Ver",
    "ver-flujo": "Ver flujo",
    "ver-tienda": "Ver Tienda",
    "ver-ejemplos": "Ver Ejemplos",
    "codigo": "Código",
    "experiencia-titulo": "Experiencia",
    "exp1-fecha": "2024 - 2025  Año completo",
    "exp1-titulo": "Help Desk — Andorra Telecom",
    "exp1-texto1": "Gestioné soporte técnico y administración de sistemas durante un año completo, configurando portátiles y atendiendo tickets de usuarios.",
    "exp1-li1": "Administración de Active Directory y gestión de usuarios y permisos.",
    "exp1-li2": "Despliegue de aplicaciones con SCCM y soporte de hardware.",
    "exp1-li3": "Optimización de procesos internos mediante scripts y herramientas propias.",
    "exp1-texto2": "Todo esto contribuyó a mantener la infraestructura estable y eficiente.",
    "exp2-fecha": "2024",
    "exp2-titulo": "R&C Associats",
    "exp2-texto": "Desarrollo de automatizaciones en Visual Basic para Excel con macros, logrando un ahorro significativo de horas diarias para empleados.",
    "contacto-titulo": "Contacto",
    "contacto-texto": "¿Quieres trabajar conmigo? Escríbeme:",
    "footer": "© 2025 Cristian García — CV Profesional"
  },
  ca: {
    "subtitulo": "Desenvolupador Web & Automatització",
    "nav-sobre": "Sobre mi",
    "nav-skills": "Habilitats",
    "nav-proyectos": "Projectes",
    "nav-experiencia": "Experiència",
    "nav-contacto": "Contacte",
    "sobre-titulo": "Sobre mi",
    "sobre-texto1": "Sóc un desenvolupador web i especialista en automatització de processos, amb passió per crear solucions que estalvien temps i optimitzen tasques. Busco oportunitats de treball remot per aplicar els meus coneixements en projectes reals i millorar l'eficiència d'equips i empreses.",
    "sobre-texto2": "He treballat amb tecnologies i eines d'automatització. Em motiva aprendre constantment i afrontar reptes de desenvolupament i automatització.",
    "skills-titulo": "Habilitats",
    "proyectos-titulo": "Projectes & Emprenedories",
    "proyecto1-titulo": "Portfolio Web",
    "proyecto1-texto": "Aquest mateix lloc que estàs veient. Mostra la meva experiència, habilitats i projectes de manera professional i moderna.",
    "proyecto2-titulo": "Automatització de reserves",
    "proyecto2-texto": "Flux automatitzat de WhatsApp + Calendly per a restaurants, reduint errors i optimitzant la gestió de cites.",
    "proyecto3-titulo": "Chatbot bàsic",
    "proyecto3-texto": "Vaig desenvolupar un chatbot que interactua amb mi per automatitzar tasques i consultes simples.",
    "proyecto4-titulo": "E-commerce 3D i Dropshipping",
    "proyecto4-texto": "Vaig crear dues botigues en línia: una de dropshipping i una altra de productes impresos en 3D, incloent disseny, desenvolupament i màrqueting digital.",
    "proyecto5-titulo": "Eina interna Python",
    "proyecto5-texto": "Programa propi per optimitzar la gestió d'usuaris a Active Directory, estalviant temps en consultar dades i realitzar tasques administratives.",
    "proyecto6-titulo": "Mini projectes ràpids",
    "proyecto6-texto": "Petits projectes per portfoli ràpid, com calculadores interactives, dashboards i scripts d'automatització de tasques.",
    "ver": "Veure",
    "ver-flujo": "Veure flux",
    "ver-tienda": "Veure Botiga",
    "ver-ejemplos": "Veure Exemples",
    "codigo": "Codi",
    "experiencia-titulo": "Experiència",
    "exp1-fecha": "2024 - 2025  Any complet",
    "exp1-titulo": "Help Desk — Andorra Telecom",
    "exp1-texto1": "Vaig gestionar suport tècnic i administració de sistemes durant un any complet, configurant portàtils i atenent tiquets d'usuaris.",
    "exp1-li1": "Administració d'Active Directory i gestió d'usuaris i permisos.",
    "exp1-li2": "Desplegament d'aplicacions amb SCCM i suport de hardware.",
    "exp1-li3": "Optimització de processos interns mitjançant scripts i eines pròpies.",
    "exp1-texto2": "Tot això va contribuir a mantenir la infraestructura estable i eficient.",
    "exp2-fecha": "2024",
    "exp2-titulo": "R&C Associats",
    "exp2-texto": "Desenvolupament d'automatitzacions en Visual Basic per Excel amb macros, aconseguint un estalvi significatiu d'hores diàries per a empleats.",
    "contacto-titulo": "Contacte",
    "contacto-texto": "Vols treballar amb mi? Escriu-me:",
    "footer": "© 2025 Cristian García — CV Professional"
  },
  en: {
    "subtitulo": "Web Developer & Automation Specialist",
    "nav-sobre": "About Me",
    "nav-skills": "Skills",
    "nav-proyectos": "Projects",
    "nav-experiencia": "Experience",
    "nav-contacto": "Contact",
    "sobre-titulo": "About Me",
    "sobre-texto1": "I am a web developer and process automation specialist, passionate about creating solutions that save time and optimize tasks. I am seeking remote work opportunities to apply my knowledge in real projects and improve team and company efficiency.",
    "sobre-texto2": "I have worked with technologies and automation tools. I am motivated to constantly learn and tackle development and automation challenges.",
    "skills-titulo": "Skills",
    "proyectos-titulo": "Projects & Ventures",
    "proyecto1-titulo": "Web Portfolio",
    "proyecto1-texto": "This very website you are viewing. Showcases my experience, skills, and projects professionally and modernly.",
    "proyecto2-titulo": "Reservation Automation",
    "proyecto2-texto": "Automated WhatsApp + Calendly workflow for restaurants, reducing errors and optimizing appointment management.",
    "proyecto3-titulo": "Basic Chatbot",
    "proyecto3-texto": "I developed a chatbot that interacts with me to automate tasks and simple queries.",
    "proyecto4-titulo": "3D E-commerce & Dropshipping",
    "proyecto4-texto": "I created two online stores: one for dropshipping and another for 3D printed products, including design, development, and digital marketing.",
    "proyecto5-titulo": "Internal Python Tool",
    "proyecto5-texto": "Own program to optimize user management in Active Directory, saving time when consulting data and performing administrative tasks.",
    "proyecto6-titulo": "Quick Mini Projects",
    "proyecto6-texto": "Small projects for a fast portfolio, such as interactive calculators, dashboards, and task automation scripts.",
    "ver": "View",
    "ver-flujo": "View Flow",
    "ver-tienda": "View Store",
    "ver-ejemplos": "View Examples",
    "codigo": "Code",
    "experiencia-titulo": "Experience",
    "exp1-fecha": "2024 - 2025 Full Year",
    "exp1-titulo": "Help Desk — Andorra Telecom",
    "exp1-texto1": "Managed technical support and system administration for a full year, configuring laptops and handling user tickets.",
    "exp1-li1": "Active Directory administration and user/permission management.",
    "exp1-li2": "Application deployment with SCCM and hardware support.",
    "exp1-li3": "Optimization of internal processes via scripts and custom tools.",
    "exp1-texto2": "All this contributed to keeping the infrastructure stable and efficient.",
    "exp2-fecha": "2024",
    "exp2-titulo": "R&C Associats",
    "exp2-texto": "Development of automations in Visual Basic for Excel with macros, achieving significant daily time savings for employees.",
    "contacto-titulo": "Contact",
    "contacto-texto": "Want to work with me? Get in touch:",
    "footer": "© 2025 Cristian García — Professional CV"
  }
};


// Función para cambiar idioma
function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Evento del selector
document.getElementById("lang-switcher").addEventListener("change", (e) => {
  setLanguage(e.target.value);
});

// Idioma inicial (Español)
setLanguage("es");
