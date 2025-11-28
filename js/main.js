// =====================
// Smooth scroll for anchor links
// =====================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20; // 20px de espacio adicional
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// =====================
// Reveal animation using IntersectionObserver
// =====================
const sections = document.querySelectorAll('.section, .proyecto-card, .timeline-item');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.12 });

sections.forEach(s => io.observe(s));

// =====================
// Modal
// =====================
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
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// =====================
// Diccionario de traducciones
// =====================
const translations = {
  es: {
    "subtitulo": "Desarrollador Web & Automatización",
    "nav-sobre": "Sobre mí",
    "nav-skills": "Skills",
    "nav-proyectos": "Proyectos",
    "nav-experiencia": "Experiencia",
    "nav-estudios": "Estudios",
    "nav-certificaciones": "Certificaciones",
    "nav-contacto": "Contacto",
    "sobre-titulo": "Sobre mí",
    "sobre-texto1": "Soy un desarrollador web y especialista en automatización de procesos, con pasión por crear soluciones que ahorran tiempo y optimizan tareas. Busco oportunidades de trabajo remoto para aplicar mis conocimientos en proyectos reales y mejorar la eficiencia de equipos y empresas.",
    "sobre-texto2": "He trabajado con tecnologías y herramientas de automatización. Me motiva aprender constantemente y enfrentar desafíos de desarrollo y automatización.",
    "skills-titulo": "Skills",
    "idiomas-titulo": "Idiomas",
    "idioma-nativo": "Nativo",
    "idioma-buen-nivel": "Buen nivel",
    "idioma-basico": "Básico",
    "idioma-bien": "Bien",
    "idioma-avanzado": "Avanzado",
    "idioma-intermedio": "Intermedio",
    "proyectos-titulo": "Proyectos & Emprendimientos",
    "proyecto1-titulo": "Portfolio Web",
    "proyecto1-texto": "Este mismo sitio que estás viendo. Muestra mi experiencia, habilidades y proyectos de forma profesional y moderna.",
    "proyecto2-titulo": "Automatización de reservas",
    "proyecto2-texto": "Flujo automatizado de WhatsApp + Calendly para restaurantes, reduciendo errores y optimizando la gestión de citas.",
    "proyecto3-titulo": "Chatbot básico",
    "proyecto3-texto": "Chatbot desarrollado en Python que automatiza tareas y consultas simples mediante conversación inteligente.",
    "proyecto4-titulo": "E-commerce 3D y Dropshipping",
    "proyecto4-texto": "Dos tiendas online: dropshipping y productos 3D impresos. Incluye diseño, desarrollo y marketing digital.",
    "proyecto5-titulo": "Task Flow en Java",
    "proyecto5-texto": "Aplicación Java para automatizar la gestión de usuarios en Active Directory, centralizando consultas y tareas administrativas desde una única interfaz.",
    "proyecto6-titulo": "Mini proyectos rápidos",
    "proyecto6-texto": "Mini proyectos: calculadoras interactivas en JavaScript, dashboards con APIs públicas y scripts de automatización.",
    "ver": "Ver",
    "ver-flujo": "Ver flujo",
    "ver-tienda": "Ver Tienda",
    "ver-ejemplos": "Ver Ejemplos",
    "codigo": "Código",
    "experiencia-titulo": "Experiencia",
    "experiencia-subtitulo": "Abierto a nuevas oportunidades profesionales",
    "exp0-fecha": "Enero 2025 — Actual",
    "exp0-titulo": "Desarrollador — MartiMotos",
    "exp0-texto": "Desarrollo y mantenimiento de sistemas e-commerce y gestión empresarial. Trabajo con PrestaShop, Sage, desarrollo frontend, programación de archivos CSHTML (Razor) y sistemas TPV.",
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
    "estudios-titulo": "Estudios",
    "certificaciones-titulo": "Certificaciones",
    "cert1-titulo": "PHP, HTML & CSS",
    "cert1-texto": "Mastermind.ac",
    "cert2-titulo": "Linux",
    "cert2-texto": "Mastermind.ac — 9 horas",
    "descargar-cv": "Descargar CV",
    "est1-fecha": "En curso",
    "est1-titulo": "Ingeniería Informática",
    "est1-texto": "Universitat d'Andorra (UdA) —",
    "est1-estado": "1 año y medio completado, actualmente en pausa",
    "est2-fecha": "Anterior",
    "est2-titulo": "BP — Batxillerat Professional en Sistemes i Xarxes Informàtiques",
    "est2-texto": "Centre de Formació Professional d'Aixovall",
    "est3-fecha": "Anterior",
    "est3-titulo": "DEP — Diploma d'Ensenyament Professional en Microinformàtica i Xarxes",
    "est3-texto": "Centre de Formació Professional d'Aixovall",
    "contacto-titulo": "Contacto",
    "contacto-texto": "¿Quieres trabajar conmigo? Escríbeme:",
    "contacto-email-titulo": "Email",
    "contacto-telefono-titulo": "Teléfono",
    "contacto-github-titulo": "GitHub",
    "contacto-linkedin-titulo": "LinkedIn",
    "footer": "© 2025 Cristian García — CV Profesional"
  },
  ca: {
    "subtitulo": "Desenvolupador Web & Automatització",
    "nav-sobre": "Sobre mi",
    "nav-skills": "Habilitats",
    "nav-proyectos": "Projectes",
    "nav-experiencia": "Experiència",
    "nav-estudios": "Estudis",
    "nav-certificaciones": "Certificacions",
    "nav-contacto": "Contacte",
    "sobre-titulo": "Sobre mi",
    "sobre-texto1": "Sóc un desenvolupador web i especialista en automatització de processos, amb passió per crear solucions que estalvien temps i optimitzen tasques. Busco oportunitats de treball remot per aplicar els meus coneixements en projectes reals i millorar l'eficiència d'equips i empreses.",
    "sobre-texto2": "He treballat amb tecnologies i eines d'automatització. Em motiva aprendre constantment i afrontar reptes de desenvolupament i automatització.",
    "skills-titulo": "Habilitats",
    "idiomas-titulo": "Idiomes",
    "idioma-nativo": "Nadiu",
    "idioma-buen-nivel": "Bon nivell",
    "idioma-basico": "Bàsic",
    "idioma-bien": "Bé",
    "idioma-avanzado": "Avançat",
    "idioma-intermedio": "Intermedi",
    "proyectos-titulo": "Projectes & Emprenedories",
    "proyecto1-titulo": "Portfolio Web",
    "proyecto1-texto": "Aquest mateix lloc que estàs veient. Mostra la meva experiència, habilitats i projectes de manera professional i moderna.",
    "proyecto2-titulo": "Automatització de reserves",
    "proyecto2-texto": "Flux automatitzat de WhatsApp + Calendly per a restaurants, reduint errors i optimitzant la gestió de cites.",
    "proyecto3-titulo": "Chatbot bàsic",
    "proyecto3-texto": "Chatbot desenvolupat en Python que automatitza tasques i consultes simples mitjançant conversa intel·ligent.",
    "proyecto4-titulo": "E-commerce 3D i Dropshipping",
    "proyecto4-texto": "Dues botigues en línia: dropshipping i productes 3D impresos. Inclou disseny, desenvolupament i màrqueting digital.",
    "proyecto5-titulo": "Task Flow en Java",
    "proyecto5-texto": "Aplicació Java per automatitzar la gestió d'usuaris a Active Directory, centralitzant consultes i tasques administratives des d'una única interfície.",
    "proyecto6-titulo": "Mini projectes ràpids",
    "proyecto6-texto": "Mini projectes: calculadores interactives en JavaScript, dashboards amb APIs públiques i scripts d'automatització.",
    "ver": "Veure",
    "ver-flujo": "Veure flux",
    "ver-tienda": "Veure Botiga",
    "ver-ejemplos": "Veure Exemples",
    "codigo": "Codi",
    "experiencia-titulo": "Experiència",
    "experiencia-subtitulo": "Obert a noves oportunitats professionals",
    "exp0-fecha": "Gener 2025 — Actual",
    "exp0-titulo": "Desenvolupador — MartiMotos",
    "exp0-texto": "Desenvolupament i manteniment de sistemes e-commerce i gestió empresarial. Treballo amb PrestaShop, Sage, desenvolupament frontend, programació d'arxius CSHTML (Razor) i sistemes TPV.",
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
    "estudios-titulo": "Estudis",
    "certificaciones-titulo": "Certificacions",
    "cert1-titulo": "PHP, HTML & CSS",
    "cert1-texto": "Mastermind.ac",
    "cert2-titulo": "Linux",
    "cert2-texto": "Mastermind.ac — 9 hores",
    "est1-fecha": "En curs",
    "est1-titulo": "Enginyeria Informàtica",
    "est1-texto": "Universitat d'Andorra (UdA) —",
    "est1-estado": "1 any i mig completat, actualment en pausa",
    "est2-fecha": "Anterior",
    "est2-titulo": "BP — Batxillerat Professional en Sistemes i Xarxes Informàtiques",
    "est2-texto": "Centre de Formació Professional d'Aixovall",
    "est3-fecha": "Anterior",
    "est3-titulo": "DEP — Diploma d'Ensenyament Professional en Microinformàtica i Xarxes",
    "est3-texto": "Centre de Formació Professional d'Aixovall",
    "contacto-titulo": "Contacte",
    "contacto-texto": "Vols treballar amb mi? Escriu-me:",
    "contacto-email-titulo": "Email",
    "contacto-telefono-titulo": "Telèfon",
    "contacto-github-titulo": "GitHub",
    "contacto-linkedin-titulo": "LinkedIn",
    "footer": "© 2025 Cristian García — CV Professional"
  },
  en: {
    "subtitulo": "Web Developer & Automation Specialist",
    "nav-sobre": "About Me",
    "nav-skills": "Skills",
    "nav-proyectos": "Projects",
    "nav-experiencia": "Experience",
    "nav-estudios": "Education",
    "nav-contacto": "Contact",
    "sobre-titulo": "About Me",
    "sobre-texto1": "I am a web developer and process automation specialist, passionate about creating solutions that save time and optimize tasks. I am seeking remote work opportunities to apply my knowledge in real projects and improve team and company efficiency.",
    "sobre-texto2": "I have worked with technologies and automation tools. I am motivated to constantly learn and tackle development and automation challenges.",
    "skills-titulo": "Skills",
    "idiomas-titulo": "Languages",
    "idioma-nativo": "Native",
    "idioma-buen-nivel": "Good level",
    "idioma-basico": "Basic",
    "idioma-bien": "Good",
    "idioma-avanzado": "Advanced",
    "idioma-intermedio": "Intermediate",
    "proyectos-titulo": "Projects & Ventures",
    "proyecto1-titulo": "Web Portfolio",
    "proyecto1-texto": "This very website you are viewing. Showcases my experience, skills, and projects professionally and modernly.",
    "proyecto2-titulo": "Reservation Automation",
    "proyecto2-texto": "Automated WhatsApp + Calendly workflow for restaurants, reducing errors and optimizing appointment management.",
    "proyecto3-titulo": "Basic Chatbot",
    "proyecto3-texto": "Chatbot developed in Python that automates tasks and simple queries through intelligent conversation.",
    "proyecto4-titulo": "3D E-commerce & Dropshipping",
    "proyecto4-texto": "Two online stores: dropshipping and 3D printed products. Includes design, development and digital marketing.",
    "proyecto5-titulo": "Task Flow in Java",
    "proyecto5-texto": "Java application to automate user management in Active Directory, centralizing queries and administrative tasks from a single interface.",
    "proyecto6-titulo": "Quick Mini Projects",
    "proyecto6-texto": "Mini projects: interactive calculators in JavaScript, dashboards with public APIs and automation scripts.",
    "ver": "View",
    "ver-flujo": "View Flow",
    "ver-tienda": "View Store",
    "ver-ejemplos": "View Examples",
    "codigo": "Code",
    "experiencia-titulo": "Experience",
    "experiencia-subtitulo": "Open to new professional opportunities",
    "exp0-fecha": "January 2025 — Current",
    "exp0-titulo": "Developer — MartiMotos",
    "exp0-texto": "Development and maintenance of e-commerce systems and business management. Working with PrestaShop, Sage, frontend development, CSHTML (Razor) file programming, and POS systems.",
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
    "estudios-titulo": "Education",
    "certificaciones-titulo": "Certifications",
    "cert1-titulo": "PHP, HTML & CSS",
    "cert1-texto": "Mastermind.ac",
    "cert2-titulo": "Linux",
    "cert2-texto": "Mastermind.ac — 9 hours",
    "est1-fecha": "In progress",
    "est1-titulo": "Computer Engineering",
    "est1-texto": "Universitat d'Andorra (UdA) —",
    "est1-estado": "1.5 years completed, currently on hold",
    "est2-fecha": "Previous",
    "est2-titulo": "BP — Professional Baccalaureate in Computer Systems and Networks",
    "est2-texto": "Centre de Formació Professional d'Aixovall",
    "est3-fecha": "Previous",
    "est3-titulo": "DEP — Professional Education Diploma in Microcomputing and Networks",
    "est3-texto": "Centre de Formació Professional d'Aixovall",
    "contacto-titulo": "Contact",
    "contacto-texto": "Want to work with me? Get in touch:",
    "contacto-email-titulo": "Email",
    "contacto-telefono-titulo": "Phone",
    "contacto-github-titulo": "GitHub",
    "contacto-linkedin-titulo": "LinkedIn",
    "footer": "© 2025 Cristian García — Professional CV"
  },
  fr: {
    "subtitulo": "Développeur Web & Spécialiste en Automatisation",
    "nav-sobre": "À propos de moi",
    "nav-skills": "Compétences",
    "nav-proyectos": "Projets",
    "nav-experiencia": "Expérience",
    "nav-estudios": "Études",
    "nav-certificaciones": "Certifications",
    "nav-contacto": "Contact",
    "sobre-titulo": "À propos de moi",
    "sobre-texto1": "Je suis un développeur web et un spécialiste de l'automatisation des processus, passionné par la création de solutions qui font gagner du temps et optimisent les tâches. Je cherche des opportunités de travail à distance pour appliquer mes connaissances à des projets réels et améliorer l'efficacité des équipes et des entreprises.",
    "sobre-texto2": "J'ai travaillé avec des technologies et des outils d'automatisation. J'aime apprendre continuellement et relever les défis du développement et de l'automatisation.",
    "skills-titulo": "Compétences",
    "idiomas-titulo": "Langues",
    "idioma-nativo": "Natif",
    "idioma-buen-nivel": "Bon niveau",
    "idioma-basico": "Basique",
    "idioma-bien": "Bien",
    "idioma-avanzado": "Avancé",
    "idioma-intermedio": "Intermédiaire",
    "proyectos-titulo": "Projets & Entreprises",
    "proyecto1-titulo": "Portfolio Web",
    "proyecto1-texto": "Ce même site que vous consultez. Il présente mon expérience, mes compétences et mes projets de manière professionnelle et moderne.",
    "proyecto2-titulo": "Automatisation des réservations",
    "proyecto2-texto": "Flux automatisé WhatsApp + Calendly pour les restaurants, réduisant les erreurs et optimisant la gestion des rendez-vous.",
    "proyecto3-titulo": "Chatbot basique",
    "proyecto3-texto": "Chatbot développé en Python qui automatise les tâches et requêtes simples via une conversation intelligente.",
    "proyecto4-titulo": "E-commerce 3D & Dropshipping",
    "proyecto4-texto": "Deux boutiques en ligne : dropshipping et produits 3D imprimés. Inclut design, développement et marketing digital.",
    "proyecto5-titulo": "Task Flow en Java",
    "proyecto5-texto": "Application Java pour automatiser la gestion des utilisateurs dans Active Directory, centralisant les requêtes et tâches administratives depuis une interface unique.",
    "proyecto6-titulo": "Mini projets rapides",
    "proyecto6-texto": "Mini projets : calculatrices interactives en JavaScript, tableaux de bord avec APIs publiques et scripts d'automatisation.",
    "ver": "Voir",
    "ver-flujo": "Voir le flux",
    "ver-tienda": "Voir la boutique",
    "ver-ejemplos": "Voir des exemples",
    "codigo": "Code",
    "experiencia-titulo": "Expérience",
    "experiencia-subtitulo": "Ouvert à de nouvelles opportunités professionnelles",
    "exp0-fecha": "Janvier 2025 — Actuel",
    "exp0-titulo": "Développeur — MartiMotos",
    "exp0-texto": "Développement et maintenance de systèmes e-commerce et de gestion d'entreprise. Travail avec PrestaShop, Sage, développement frontend, programmation de fichiers CSHTML (Razor) et systèmes TPV.",
    "exp1-fecha": "2024 - 2025  Année complète",
    "exp1-titulo": "Help Desk — Andorra Telecom",
    "exp1-texto1": "J'ai géré le support technique et l'administration des systèmes pendant une année complète, en configurant des ordinateurs portables et en traitant les tickets utilisateurs.",
    "exp1-li1": "Administration d'Active Directory et gestion des utilisateurs et des permissions.",
    "exp1-li2": "Déploiement d'applications avec SCCM et support matériel.",
    "exp1-li3": "Optimisation des processus internes via des scripts et outils personnalisés.",
    "exp1-texto2": "Tout cela a contribué à maintenir une infrastructure stable et efficace.",
    "exp2-fecha": "2024",
    "exp2-titulo": "R&C Associats",
    "exp2-texto": "Développement d'automatisations en Visual Basic pour Excel avec macros, permettant un gain de temps significatif au quotidien pour les employés.",
    "estudios-titulo": "Études",
    "certificaciones-titulo": "Certifications",
    "cert1-titulo": "PHP, HTML & CSS",
    "cert1-texto": "Mastermind.ac",
    "cert2-titulo": "Linux",
    "cert2-texto": "Mastermind.ac — 9 heures",
    "est1-fecha": "En cours",
    "est1-titulo": "Ingénierie Informatique",
    "est1-texto": "Universitat d'Andorra (UdA) —",
    "est1-estado": "1 an et demi complété, actuellement en pause",
    "est2-fecha": "Précédent",
    "est2-titulo": "BP — Baccalauréat Professionnel en Systèmes et Réseaux Informatiques",
    "est2-texto": "Centre de Formació Professional d'Aixovall",
    "est3-fecha": "Précédent",
    "est3-titulo": "DEP — Diplôme d'Enseignement Professionnel en Microinformatique et Réseaux",
    "est3-texto": "Centre de Formació Professional d'Aixovall",
    "contacto-titulo": "Contact",
    "contacto-texto": "Envie de collaborer avec moi ? Écris-moi :",
    "contacto-email-titulo": "Email",
    "contacto-telefono-titulo": "Téléphone",
    "contacto-github-titulo": "GitHub",
    "contacto-linkedin-titulo": "LinkedIn",
    "footer": "© 2025 Cristian García — CV Professionnel"
  }
};

// =====================
// Función para cambiar idioma y guardarlo
// =====================
function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("preferredLang", lang);
}

// =====================
// Evento del selector
// =====================
const langSwitcher = document.getElementById("lang-switcher");
langSwitcher.addEventListener("change", (e) => {
  setLanguage(e.target.value);
});

// =====================
// Idioma inicial (detecta o guarda preferencia)
// =====================
const savedLang = localStorage.getItem("preferredLang") || "es";
setLanguage(savedLang);
langSwitcher.value = savedLang;

// =====================
// Funcionalidad de descarga PDF
// =====================
const downloadCvBtn = document.getElementById("download-cv");
if (downloadCvBtn) {
  downloadCvBtn.addEventListener("click", function(e) {
    e.preventDefault();
    
    // Guardar estados originales
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const modal = document.getElementById("modal");
    const downloadBtn = document.getElementById("download-cv");
    const langSwitcher = document.getElementById("lang-switcher");
    
    const originalHeaderDisplay = header ? header.style.display : "";
    const originalFooterDisplay = footer ? footer.style.display : "";
    const originalModalDisplay = modal ? modal.style.display : "";
    const originalBtnDisplay = downloadBtn ? downloadBtn.style.display : "";
    const originalLangDisplay = langSwitcher ? langSwitcher.style.display : "";
    
    // Ocultar elementos que no queremos en el PDF
    if (header) header.style.display = "none";
    if (footer) footer.style.display = "none";
    if (modal) modal.style.display = "none";
    if (downloadBtn) downloadBtn.style.display = "none";
    if (langSwitcher) langSwitcher.style.display = "none";
    
    // Obtener el contenido principal
    const content = document.body;
    
    // Configuración del PDF
    const opt = {
      margin: [10, 10, 10, 10],
      filename: "CV_Cristian_Garcia.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        letterRendering: true,
        backgroundColor: "#0a0e27",
        windowWidth: 1200
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };
    
    // Generar PDF
    html2pdf().set(opt).from(content).save().then(() => {
      // Restaurar estados originales
      if (header) header.style.display = originalHeaderDisplay;
      if (footer) footer.style.display = originalFooterDisplay;
      if (modal) modal.style.display = originalModalDisplay;
      if (downloadBtn) downloadBtn.style.display = originalBtnDisplay;
      if (langSwitcher) langSwitcher.style.display = originalLangDisplay;
    }).catch(err => {
      console.error("Error al generar PDF:", err);
      // Restaurar estados originales incluso si hay error
      if (header) header.style.display = originalHeaderDisplay;
      if (footer) footer.style.display = originalFooterDisplay;
      if (modal) modal.style.display = originalModalDisplay;
      if (downloadBtn) downloadBtn.style.display = originalBtnDisplay;
      if (langSwitcher) langSwitcher.style.display = originalLangDisplay;
    });
  });
}
