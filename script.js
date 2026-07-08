// Wienerlingo — interactions
(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Hero-Banner: vom Lehrer auf der Plattform gesetzter Text ---------- */
  function applyHeroBadge() {
    var el = document.getElementById("heroBadgeText");
    if (!el) return;
    var custom = "";
    try { custom = localStorage.getItem("dw-herobadge") || ""; } catch (e) {}
    if (custom) el.textContent = custom;
  }
  // i18n.apply() setzt den Standardtext und feuert dann "dw:lang" — danach überschreiben wir.
  document.addEventListener("dw:lang", applyHeroBadge);
  applyHeroBadge();

  /* ---------- Nav: scrolled state ---------- */
  var nav = document.getElementById("nav");
  if (nav) {
    var onScroll = function () { nav.classList.toggle("scrolled", window.scrollY > 10); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile menu ---------- */
  var burger = document.getElementById("burger");
  var navLinks = document.getElementById("navLinks");
  if (burger && navLinks) {
    burger.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Hero word rotator (мова — з i18n) ---------- */
  var rotatorEl = document.getElementById("rotatorWord");
  if (rotatorEl) {
    var idx = 0;
    document.addEventListener("dw:lang", function () {
      idx = 0;
      rotatorEl.textContent = window.DW.rotatorWords()[0];
    });
    if (!reducedMotion) {
      setInterval(function () {
        var words = window.DW.rotatorWords();
        rotatorEl.classList.add("out");
        setTimeout(function () {
          idx = (idx + 1) % words.length;
          rotatorEl.textContent = words[idx];
          rotatorEl.classList.remove("out");
        }, 300);
      }, 2800);
    }
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reducedMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- Counters ---------- */
  var counters = document.querySelectorAll("[data-count]");
  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    if (reducedMotion) { el.textContent = target; return; }
    var duration = 1400;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(function (el) { el.textContent = el.getAttribute("data-count"); });
  }

  /* ---------- Accordions (levels + faq) ---------- */
  function setupAccordion(headSelector, bodySelector) {
    document.querySelectorAll(headSelector).forEach(function (head) {
      head.addEventListener("click", function () {
        var expanded = head.getAttribute("aria-expanded") === "true";
        var body = head.parentElement.querySelector(bodySelector);
        head.closest(".levels, .faq").querySelectorAll(headSelector).forEach(function (other) {
          if (other !== head) {
            other.setAttribute("aria-expanded", "false");
            other.parentElement.querySelector(bodySelector).style.maxHeight = null;
          }
        });
        head.setAttribute("aria-expanded", String(!expanded));
        body.style.maxHeight = expanded ? null : body.scrollHeight + "px";
      });
    });
  }
  setupAccordion(".level-head", ".level-body");
  setupAccordion(".faq-q", ".faq-a");

  /* ---------- Form → Telegram ---------- */
  var form = document.getElementById("ctaForm");
  var status = document.getElementById("formStatus");
  var TG_LINK = "https://t.me/wienerlingo";

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var t = window.DW.t;
      var name = document.getElementById("fName");
      var contact = document.getElementById("fContact");
      var level = document.getElementById("fLevel");
      var consent = document.getElementById("fConsent");

      [name, contact].forEach(function (f) { f.classList.remove("invalid"); });
      status.className = "form-status";

      if (!name.value.trim()) {
        name.classList.add("invalid");
        status.textContent = t("cta.errName");
        status.classList.add("err");
        name.focus();
        return;
      }
      if (contact.value.trim().length < 5) {
        contact.classList.add("invalid");
        status.textContent = t("cta.errContact");
        status.classList.add("err");
        contact.focus();
        return;
      }
      if (!consent.checked) {
        status.textContent = t("cta.errConsent");
        status.classList.add("err");
        consent.focus();
        return;
      }

      var msg = t("cta.msgIntro") + "\n"
        + t("cta.msgName") + ": " + name.value.trim() + "\n"
        + t("cta.msgContact") + ": " + contact.value.trim() + "\n"
        + t("cta.msgLevel") + ": " + level.value;

      status.textContent = t("cta.ok").replace("{name}", name.value.trim());
      status.classList.add("ok");

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(msg).catch(function () {});
      }
      window.open(TG_LINK, "_blank", "noopener");
      form.reset();
    });
  }
})();
