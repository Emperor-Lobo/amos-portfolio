/* ============================================================
   Portfolio — JS vanilla, aucune dépendance.
   - Menu mobile
   - Onglets compétences (accessibles, clavier)
   - Filtre projets par data-attribute
   - Année du footer
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Ouvrir le menu" : "Fermer le menu");
      menu.classList.toggle("is-open", !open);
    });

    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Ouvrir le menu");
        menu.classList.remove("is-open");
      }
    });
  }

  /* ---------- Onglets compétences ---------- */
  var tabWrap = document.querySelector("[data-tabs]");

  if (tabWrap) {
    var tabs = Array.prototype.slice.call(tabWrap.querySelectorAll('[role="tab"]'));

    function selectTab(tab) {
      tabs.forEach(function (t) {
        var selected = t === tab;
        t.setAttribute("aria-selected", String(selected));
        t.tabIndex = selected ? 0 : -1;
        var panel = document.getElementById(t.getAttribute("aria-controls"));
        if (panel) panel.hidden = !selected;
      });
    }

    tabWrap.addEventListener("click", function (e) {
      var tab = e.target.closest('[role="tab"]');
      if (tab) selectTab(tab);
    });

    tabWrap.addEventListener("keydown", function (e) {
      var i = tabs.indexOf(document.activeElement);
      if (i === -1) return;
      var next;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next = tabs[(i + 1) % tabs.length];
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (e.key === "Home") next = tabs[0];
      else if (e.key === "End") next = tabs[tabs.length - 1];
      if (next) {
        e.preventDefault();
        next.focus();
        selectTab(next);
      }
    });
  }

  /* ---------- Filtre projets ---------- */
  var filterBtns = Array.prototype.slice.call(document.querySelectorAll(".filter"));
  var cards = Array.prototype.slice.call(document.querySelectorAll(".project-card"));
  var emptyMsg = document.getElementById("project-empty");

  function applyFilter(value) {
    var visible = 0;
    cards.forEach(function (card) {
      var cats = (card.getAttribute("data-category") || "").split(/\s+/);
      var show = value === "all" || cats.indexOf(value) !== -1;
      card.classList.toggle("is-hidden", !show);
      if (show) visible++;
    });
    if (emptyMsg) emptyMsg.hidden = visible !== 0;
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
        b.setAttribute("aria-pressed", String(b === btn));
      });
      applyFilter(btn.getAttribute("data-filter"));
    });
  });

  /* ---------- Année footer ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
