(function () {
  "use strict";
  var root = document.documentElement;
  var drawer = document.getElementById("mob-drawer");
  var overlay = document.getElementById("mob-overlay");
  var burger = document.getElementById("hamburger");
  var BP = 768;

  function openMenu() {
    if (!drawer) return;
    drawer.classList.add("open");
    overlay.classList.add("open");
    burger.setAttribute("aria-expanded", "true");
    root.style.overflow = "hidden";
  }
  function closeMenu() {
    if (!drawer) return;
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    root.style.overflow = "";
  }
  if (burger) {
    burger.addEventListener("click", function () {
      if (drawer.classList.contains("open")) { closeMenu(); } else { openMenu(); }
    });
    overlay.addEventListener("click", closeMenu);
    var closeBtn = document.getElementById("mob-close");
    if (closeBtn) closeBtn.addEventListener("click", closeMenu);
    drawer.addEventListener("click", function (e) {
      var t = e.target;
      while (t && t !== drawer) {
        if (t.tagName === "A") { closeMenu(); break; }
        t = t.parentNode;
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > BP) closeMenu();
    });
  }

  var qs = document.querySelectorAll(".faq .q");
  for (var i = 0; i < qs.length; i++) {
    qs[i].addEventListener("click", function () {
      var btn = this;
      var panel = btn.nextElementSibling;
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      panel.style.maxHeight = open ? "0px" : panel.scrollHeight + "px";
    });
  }
})();
