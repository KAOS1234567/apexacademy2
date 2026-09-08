/* أكاديمية أبيكس — سكربت بسيط للتنقل على الأجهزة المحمولة */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");

    if (toggle && links) {
      toggle.addEventListener("click", function () {
        var isOpen = links.classList.toggle("open");
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });

      // إغلاق القائمة عند اختيار رابط (على الشاشات الصغيرة)
      links.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
          links.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    }

    // تحديث سنة حقوق النشر تلقائياً
    var yearEl = document.querySelector("[data-current-year]");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  });
})();
