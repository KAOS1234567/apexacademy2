/* ==========================================================================
   Apex Football Academy — Main Script
   Handles the responsive navigation toggle and active-link highlighting.
   ========================================================================== */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector("[data-nav-toggle]");
    var menu = document.querySelector("[data-nav-menu]");

    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        var isOpen = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
      });

      // Close the menu after a link is tapped (mobile).
      menu.addEventListener("click", function (event) {
        if (event.target.closest(".navbar__link")) {
          menu.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    }

    // Update the footer year automatically.
    var yearEl = document.querySelector("[data-year]");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  });
})();
