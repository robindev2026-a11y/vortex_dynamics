(function () {
  const data = window.VORTIQ_DATA;
  if (!data) return;

  const iconMap = {
    network: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="7" r="2"></circle><circle cx="18" cy="7" r="2"></circle><circle cx="12" cy="17" r="2"></circle><path d="M8 8.5l3 5"></path><path d="M16 8.5l-3 5"></path><path d="M8 7h8"></path></svg>',
    cloud: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18h10a4 4 0 0 0 .4-8 6 6 0 0 0-11.3 1.7A3.3 3.3 0 0 0 7 18z"></path></svg>',
    layout: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="2"></rect><path d="M4 9h16"></path><path d="M9 9v10"></path></svg>',
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="3" width="10" height="18" rx="2"></rect><path d="M11 17h2"></path></svg>',
    globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18"></path><path d="M12 3a13 13 0 0 1 0 18"></path><path d="M12 3a13 13 0 0 0 0 18"></path></svg>',
    chip: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"></rect><path d="M4 9h3"></path><path d="M4 15h3"></path><path d="M17 9h3"></path><path d="M17 15h3"></path><path d="M9 4v3"></path><path d="M15 4v3"></path><path d="M9 17v3"></path><path d="M15 17v3"></path></svg>',
    processor: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"></rect><circle cx="12" cy="12" r="3"></circle><path d="M12 2v4"></path><path d="M12 18v4"></path><path d="M2 12h4"></path><path d="M18 12h4"></path></svg>'
  };

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  function activePage() {
    return document.body.dataset.page || "home";
  }

  function renderHeader() {
    const mount = document.querySelector("[data-header]");
    if (!mount) return;
    const current = activePage();
    const nav = data.nav
      .map((item) => {
        const active = item.id === current ? ' aria-current="page"' : "";
        return `<a href="${item.href}"${active}>${item.label}</a>`;
      })
      .join("");

    mount.innerHTML = `
      <header class="site-header" data-site-header>
        <a class="brand" href="index.html" aria-label="${data.site.name} home">
          <span class="brand-mark">VD</span>
          <span>${data.site.name}</span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
          <span></span><span></span><span></span>
          <span class="sr-only">Menu</span>
        </button>
        <nav class="site-nav" id="site-nav" aria-label="Primary navigation">
          ${nav}
        </nav>
        <div class="header-actions-wrap">
          <button class="theme-toggle" type="button" aria-label="Toggle dark/light theme">
            <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>
            <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
          </button>
          <a class="header-cta" href="request-quote.html">Request Quote</a>
        </div>
      </header>
    `;
  }

  function renderFooter() {
    const mount = document.querySelector("[data-footer]");
    if (!mount) return;
    const navLinks = data.nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join("");
    const serviceLinks = data.services.map((item) => `<a href="services.html#${item.id}">${item.title}</a>`).join("");
    const socialLinks = data.site.social.map((item) => `<a href="${item.href}" target="_blank" rel="noopener noreferrer">${item.label}</a>`).join("");
    mount.innerHTML = `
      <footer class="site-footer">
        <div class="footer-brand">
          <a class="brand" href="index.html">
            <span class="brand-mark">VD</span>
            <span>${data.site.name}</span>
          </a>
          <p>${data.site.tagline}</p>
        </div>
        <div>
          <h2>Quick Links</h2>
          <div class="footer-links">${navLinks}</div>
        </div>
        <div>
          <h2>Services</h2>
          <div class="footer-links">${serviceLinks}</div>
        </div>
        <div>
          <h2>Contact</h2>
          <p><a href="mailto:${data.site.email}">${data.site.email}</a></p>
          <p><a href="tel:${data.site.phone.replaceAll(" ", "")}">${data.site.phone}</a></p>
          <p>${data.site.location}</p>
          <div class="social-links">${socialLinks}</div>
        </div>
        <div class="footer-bottom">Copyright ${new Date().getFullYear()} ${data.site.name}. All rights reserved.</div>
      </footer>
    `;
  }

  function serviceCard(service, index) {
    return `
      <article class="service-card reveal" id="${service.id}" style="--delay:${index * 70}ms">
        <div class="icon-box">${iconMap[service.icon] || iconMap.chip}</div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </article>
    `;
  }

  function renderServices() {
    document.querySelectorAll("[data-render='services']").forEach((mount) => {
      mount.innerHTML = data.services.map(serviceCard).join("");
    });
  }

  function renderFlow() {
    document.querySelectorAll("[data-render='flow']").forEach((mount) => {
      mount.innerHTML = `
        <div class="flow-track" aria-label="Capability flow">
          ${data.flow
            .map(
              (item, index) => `
                <article class="flow-node reveal" style="--delay:${index * 80}ms">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <h3>${item.title}</h3>
                  <p>${item.detail}</p>
                </article>
              `
            )
            .join("")}
        </div>
      `;
    });
  }

  function renderRDLab() {
    document.querySelectorAll("[data-render='rd-lab']").forEach((mount) => {
      mount.innerHTML = data.rdLab
        .map(
          (item, index) => `
            <article class="lab-card ${item.featured ? "featured" : ""} reveal" style="--delay:${index * 80}ms">
              <div class="ambient-media compact">
                <img class="ambient-bg" src="${item.image}" alt="" aria-hidden="true">
                <img class="ambient-main" src="${item.image}" alt="${escapeHtml(item.alt)}">
              </div>
              <div class="lab-card-body">
                <p>${escapeHtml(item.category)}</p>
                <h3>${escapeHtml(item.title)}</h3>
                <span>${escapeHtml(item.description)}</span>
                <div class="lab-tags">
                  ${item.tags.map((tag) => `<em>${escapeHtml(tag)}</em>`).join("")}
                </div>
              </div>
            </article>
          `
        )
        .join("");
    });
  }

  function renderProcess() {
    document.querySelectorAll("[data-render='process']").forEach((mount) => {
      mount.innerHTML = data.process
        .map(
          (item, index) => `
            <article class="process-step reveal" style="--delay:${index * 80}ms">
              <span>Step ${index + 1}</span>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </article>
          `
        )
        .join("");
    });
  }

  function renderTechStack() {
    document.querySelectorAll("[data-render='tech']").forEach((mount) => {
      mount.innerHTML = data.techStack
        .map(
          (group, index) => `
            <article class="tech-card reveal" style="--delay:${index * 70}ms">
              <h3>${group.title}</h3>
              <div class="chip-list">
                ${group.items.map((item) => `<span>${item}</span>`).join("")}
              </div>
            </article>
          `
        )
        .join("");
    });
  }

  function renderCaseStudies() {
    document.querySelectorAll("[data-render='cases']").forEach((mount) => {
      mount.innerHTML = data.caseStudies
        .map(
          (item, index) => `
            <article class="case-card reveal" style="--delay:${index * 90}ms">
              <div class="ambient-media compact">
                <img class="ambient-bg" src="${item.image}" alt="" aria-hidden="true">
                <img class="ambient-main" src="${item.image}" alt="">
              </div>
              <div class="case-content">
                <h3>${item.title}</h3>
                <dl>
                  <dt>Problem</dt>
                  <dd>${item.problem}</dd>
                  <dt>Solution</dt>
                  <dd>${item.solution}</dd>
                  <dt>Result</dt>
                  <dd>${item.result}</dd>
                </dl>
              </div>
            </article>
          `
        )
        .join("");
    });
  }

  function initGalleryCarousel() {
    const carousel = document.querySelector("[data-render='gallery-carousel']");
    if (!carousel) return;

    carousel.innerHTML = `
      <div class="gallery-carousel">
        <div class="carousel-track">
          ${data.gallery
            .map(
              (item, index) => `
                <div class="carousel-slide ${index === 0 ? "active" : ""}">
                  <div class="ambient-media">
                    <img class="ambient-bg" src="" alt="" aria-hidden="true">
                    <img class="ambient-main" src="${item.image}" alt="${escapeHtml(item.alt)}">
                  </div>
                  <div class="carousel-info">
                    <span class="carousel-category">${escapeHtml(item.category)}</span>
                    <h3 class="carousel-title">${escapeHtml(item.title)}</h3>
                    <p class="carousel-description">${escapeHtml(item.description)}</p>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="carousel-nav">
          <button class="carousel-prev" type="button" aria-label="Previous slide">
            <svg viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>
          </button>
          <button class="carousel-next" type="button" aria-label="Next slide">
            <svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>
          </button>
        </div>
        <div class="carousel-dots">
          ${data.gallery
            .map(
              (_, index) => `
                <button class="carousel-dot ${index === 0 ? "active" : ""}" data-slide="${index}" type="button" aria-label="Go to slide ${index + 1}"></button>
              `
            )
            .join("")}
        </div>
      </div>
    `;

    const slides = carousel.querySelectorAll(".carousel-slide");
    const dots = carousel.querySelectorAll(".carousel-dot");
    const prevBtn = carousel.querySelector(".carousel-prev");
    const nextBtn = carousel.querySelector(".carousel-next");
    if (!slides.length) return;

    let currentIndex = 0;
    let timer = null;

    function showSlide(index) {
      slides[currentIndex].classList.remove("active");
      dots[currentIndex].classList.remove("active");
      currentIndex = (index + slides.length) % slides.length;
      slides[currentIndex].classList.add("active");
      dots[currentIndex].classList.add("active");
      initAmbientMediaInside(slides[currentIndex]);
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    function prevSlide() {
      showSlide(currentIndex - 1);
    }

    function startTimer() {
      stopTimer();
      timer = window.setInterval(nextSlide, 5000);
    }

    function stopTimer() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    function initAmbientMediaInside(slide) {
      const main = slide.querySelector(".ambient-main");
      const bg = slide.querySelector(".ambient-bg");
      if (main && bg && !bg.getAttribute("src")) {
        bg.setAttribute("src", main.getAttribute("src"));
      }
    }

    initAmbientMediaInside(slides[0]);

    prevBtn.addEventListener("click", () => {
      prevSlide();
      startTimer();
    });
    nextBtn.addEventListener("click", () => {
      nextSlide();
      startTimer();
    });

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        showSlide(parseInt(dot.dataset.slide, 10));
        startTimer();
      });
    });

    carousel.addEventListener("mouseenter", stopTimer);
    carousel.addEventListener("mouseleave", startTimer);

    startTimer();
  }

  function renderFaq() {
    document.querySelectorAll("[data-render='faq']").forEach((mount) => {
      mount.innerHTML = data.faqs
        .map(
          (item, index) => `
            <details class="faq-item reveal" style="--delay:${index * 60}ms">
              <summary>${item.question}</summary>
              <p>${item.answer}</p>
            </details>
          `
        )
        .join("");
    });
  }

  function initNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".site-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      document.body.classList.toggle("nav-open", !open);
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
      }
    });
  }

  function initHeaderScroll() {
    const header = document.querySelector("[data-site-header]");
    if (!header) return;
    const update = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initReveal() {
    const items = Array.from(document.querySelectorAll(".reveal"));
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );
    items.forEach((item) => observer.observe(item));
  }

  function initTypewriter() {
    const target = document.querySelector("[data-typewriter]");
    if (!target) return;
    const lines = data.hero.typewriter;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      target.textContent = lines[0];
      return;
    }
    let line = 0;
    let character = 0;
    let deleting = false;

    function tick() {
      const current = lines[line];
      target.textContent = current.slice(0, character);
      if (!deleting && character < current.length) {
        character += 1;
        window.setTimeout(tick, 42);
        return;
      }
      if (!deleting && character === current.length) {
        deleting = true;
        window.setTimeout(tick, 1700);
        return;
      }
      if (deleting && character > 0) {
        character -= 1;
        window.setTimeout(tick, 22);
        return;
      }
      deleting = false;
      line = (line + 1) % lines.length;
      window.setTimeout(tick, 260);
    }

    tick();
  }

  function initForms() {
    document.querySelectorAll("form[data-static-form]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const status = form.querySelector("[data-form-status]");
        if (status) {
          status.textContent = "Thanks. This static demo captured the request locally. We can connect real email/API submission later.";
          status.removeAttribute("hidden");
        }
        form.reset();
      });
    });
  }

  function initAmbientMedia() {
    document.querySelectorAll(".ambient-media").forEach((media) => {
      const main = media.querySelector(".ambient-main");
      const bg = media.querySelector(".ambient-bg");
      if (main && bg && !bg.getAttribute("src")) {
        bg.setAttribute("src", main.getAttribute("src"));
      }
    });
  }

  function initAdminSchema() {
    const mounts = document.querySelectorAll("[data-admin-slots]");
    mounts.forEach((mount) => {
      mount.innerHTML = data.mediaSlots
        .map((slot) => `<span>${escapeHtml(slot)}</span>`)
        .join("");
    });
  }

  function initContactInfo() {
    const emailLink = document.querySelector("[data-contact-email]");
    const phoneLink = document.querySelector("[data-contact-phone]");
    const locationSpan = document.querySelector("[data-contact-location]");
    
    if (emailLink) {
      emailLink.href = `mailto:${data.site.email}`;
      emailLink.textContent = data.site.email;
    }
    if (phoneLink) {
      phoneLink.href = `tel:${data.site.phone.replaceAll(" ", "")}`;
      phoneLink.textContent = data.site.phone;
    }
    if (locationSpan) {
      locationSpan.textContent = data.site.location;
    }
  }

  function initTheme() {
    const toggle = document.querySelector(".theme-toggle");
    if (!toggle) return;
    
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true;
    
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    
    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  function initLenis() {
    if (typeof Lenis === "undefined") return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false
    });
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  function initPageTransitions() {
    const shell = document.querySelector(".site-shell");
    if (!shell) return;
    
    shell.classList.add("page-loaded");
    
    document.body.addEventListener("click", (event) => {
      const link = event.target.closest("a");
      if (!link) return;
      
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || link.getAttribute("target") === "_blank") {
        return;
      }
      
      if (href.endsWith(".html")) {
        event.preventDefault();
        shell.classList.remove("page-loaded");
        shell.classList.add("page-leaving");
        
        setTimeout(() => {
          window.location.href = href;
        }, 350);
      }
    });
  }

  function initCircuitMap() {
    const map = document.querySelector(".circuit-map");
    if (!map) return;
    const nodes = map.querySelectorAll(".node");
    const traces = map.querySelectorAll(".trace");
    
    nodes.forEach((node) => {
      node.style.cursor = "pointer";
      node.style.transformOrigin = `${node.getAttribute("cx")}px ${node.getAttribute("cy")}px`;
      node.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), fill 0.4s ease";
      node.style.outline = "none";
      
      node.addEventListener("mouseenter", () => {
        node.style.transform = "scale(1.25)";
        node.style.fill = "var(--green)";
        traces.forEach((t) => {
          t.style.strokeWidth = "3.5px";
          t.style.animationDuration = "2.2s";
        });
      });
      
      node.addEventListener("mouseleave", () => {
        node.style.transform = "scale(1)";
        node.style.fill = "";
        traces.forEach((t) => {
          t.style.strokeWidth = "";
          t.style.animationDuration = "";
        });
      });
    });
  }

  renderHeader();
  renderFooter();
  renderServices();
  renderFlow();
  renderRDLab();
  renderProcess();
  renderTechStack();
  renderCaseStudies();
  initGalleryCarousel();
  renderFaq();
  initAmbientMedia();
  initAdminSchema();
  initContactInfo();
  initTheme();
  initLenis();
  initPageTransitions();
  initCircuitMap();
  initNav();
  initHeaderScroll();
  initTypewriter();
  initForms();
  initReveal();
})();
