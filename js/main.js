/* ==========================================================================
   Apex Football Academy — Core JavaScript
   Mobile navigation, active-link highlighting, and registration form
   validation. Vanilla JS, no dependencies.
   ========================================================================== */
(function () {
  "use strict";

  /* ----- Mobile navigation toggle -------------------------------------- */
  function initNavToggle() {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (!toggle || !links) return;

    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close the menu when a link is tapped (mobile).
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  /* ----- Highlight the current page in the nav ------------------------- */
  function initActiveLink() {
    var path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      var href = a.getAttribute("href");
      if (!href) return;
      var target = href.split("/").pop();
      if (target === path) a.classList.add("active");
    });
  }

  /* ----- Footer year --------------------------------------------------- */
  function initYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ----- Form validation (registration + contact) --------------------- */
  function initForm(form, successMessage) {
    if (!form) return;

    var note = form.querySelector(".form-note");

    function setError(field, message) {
      var wrap = field.closest(".field");
      if (!wrap) return;
      var msg = wrap.querySelector(".error-msg");
      if (message) {
        wrap.classList.add("invalid");
        if (msg) msg.textContent = message;
      } else {
        wrap.classList.remove("invalid");
        if (msg) msg.textContent = "";
      }
    }

    function validate() {
      var ok = true;
      var required = form.querySelectorAll("[required]");

      required.forEach(function (field) {
        var value = (field.value || "").trim();
        if (!value) {
          setError(field, "هذا الحقل مطلوب");
          ok = false;
          return;
        }
        setError(field, "");

        if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          setError(field, "يرجى إدخال بريد إلكتروني صحيح");
          ok = false;
        }
        if (field.type === "tel" && !/^[0-9+\-\s]{7,}$/.test(value)) {
          setError(field, "يرجى إدخال رقم هاتف صحيح");
          ok = false;
        }
      });

      return ok;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validate()) {
        if (note) { note.classList.remove("show"); }
        return;
      }
      form.reset();
      if (note) {
        note.textContent = successMessage;
        note.classList.add("show");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNavToggle();
    initActiveLink();
    initYear();
    initForm(
      document.querySelector("#registration-form"),
      "تم استلام طلب التسجيل بنجاح! سيتواصل معك فريق الأكاديمية قريباً."
    );
    initForm(
      document.querySelector("#contact-form"),
      "تم إرسال رسالتك بنجاح! سنرد عليك في أقرب وقت."
    );
  });
})();
