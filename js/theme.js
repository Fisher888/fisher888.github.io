// Light/dark button. With no choice saved the site follows the device; the first press picks the opposite of what is showing.
(function () {
  var btn = document.getElementById("themebtn");
  if (!btn) return;
  var root = document.documentElement;
  var media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  function dark() {
    var t = root.getAttribute("data-theme");
    return t ? t === "dark" : !!(media && media.matches);
  }
  function label() { btn.setAttribute("aria-label", dark() ? "Switch to light mode" : "Switch to dark mode"); }
  btn.addEventListener("click", function () {
    var next = dark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    label();
  });
  if (media && media.addEventListener) media.addEventListener("change", label);
  label();
})();
