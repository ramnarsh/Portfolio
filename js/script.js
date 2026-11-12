/* =========================================================
   Portfolio scripts: Atul Kumar (vanilla JavaScript)
   ========================================================= */
(function () {
  "use strict";
  var root = document.documentElement;

  /* ---------- Theme toggle (saved in localStorage) ---------- */
  var themeBtn = document.getElementById("themeToggle");
  function setThemeLabel() {
    var dark = root.getAttribute("data-theme") === "dark";
    themeBtn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }
  setThemeLabel();
  themeBtn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) { /* storage blocked: ignore */ }
    setThemeLabel();
  });

  /* ---------- Mobile menu ---------- */
  var menu = document.getElementById("menu");
  var menuBtn = document.getElementById("menuBtn");
  function closeMenu() {
    menu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open menu");
  }
  menuBtn.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  menu.addEventListener("click", function (e) { if (e.target.tagName === "A") closeMenu(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  /* ---------- Highlight the menu link of the section in view ---------- */
  var links = menu.querySelectorAll("a");
  var sections = [];
  links.forEach(function (a) {
    var s = document.querySelector(a.getAttribute("href"));
    if (s) sections.push({ link: a, el: s });
  });
  var toTop = document.getElementById("toTop");
  function onScroll() {
    var y = window.scrollY + 120, current = null;
    sections.forEach(function (s) { if (s.el.offsetTop <= y) current = s; });
    links.forEach(function (a) { a.classList.remove("active"); });
    if (current) current.link.classList.add("active");
    toTop.classList.toggle("show", window.scrollY > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Back to top ---------- */
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- Photo and project image fallbacks ---------- */
  function fallback(img, box, cls) {
    if (!img || !box) return;
    function fail() { box.classList.add(cls); }
    img.addEventListener("error", fail);
    if (img.complete && img.naturalWidth === 0) fail();
  }
  fallback(document.getElementById("profilePhoto"), document.getElementById("photoFrame"), "no-photo");
  fallback(document.querySelector("#proj1 img"), document.getElementById("proj1"), "no-img");

  /* ---------- Footer year ---------- */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
