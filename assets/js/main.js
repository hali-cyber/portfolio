/* Hossam Ali — Portfolio */
(function () {
  "use strict";
  var root = document.documentElement;

  /* ---- Lingua ---- */
  var LANGS = ["it", "en"];
  function getLang() {
    var s;
    try { s = localStorage.getItem("lang"); } catch (e) {}
    if (LANGS.indexOf(s) !== -1) return s;
    return (navigator.language || "it").toLowerCase().indexOf("it") === 0 ? "it" : "en";
  }
  function setLang(l) {
    if (LANGS.indexOf(l) === -1) l = "it";
    root.setAttribute("data-lang", l);
    root.setAttribute("lang", l);
    try { localStorage.setItem("lang", l); } catch (e) {}
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-set") === l);
      b.setAttribute("aria-pressed", b.getAttribute("data-set") === l ? "true" : "false");
    });
    // elementi con attributi tradotti (es. href CV, aria-label)
    document.querySelectorAll("[data-href-" + l + "]").forEach(function (el) {
      el.setAttribute("href", el.getAttribute("data-href-" + l));
    });
    var t = document.querySelector("title");
    if (t && t.getAttribute("data-" + l)) document.title = t.getAttribute("data-" + l);
  }
  setLang(getLang());
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-set")); });
  });

  /* ---- Header scroll ---- */
  var header = document.querySelector(".site-header");
  function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 20); }
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Menu mobile ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
    });
  }

  /* ---- Anno ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Nav attiva in base alla sezione ---- */
  var navMap = {};
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(function (a) {
    var id = a.getAttribute("href").slice(1); if (id) navMap[id] = a;
  });
  var sections = Object.keys(navMap).map(function (id) { return document.getElementById(id); }).filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          Object.values(navMap).forEach(function (a) { a.classList.remove("active"); });
          var a = navMap[en.target.id]; if (a) a.classList.add("active");
        }
      });
    }, { threshold: 0.5, rootMargin: "-20% 0px -40% 0px" });
    sections.forEach(function (s) { so.observe(s); });
  }
})();
