"use strict";

const menuButton = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector(".site-nav");
const menuBackgroundContent = document.querySelectorAll(".skip-link, main, .site-footer");

function setMenuBackgroundInert(isInert) {
  menuBackgroundContent.forEach((element) => {
    element.inert = isInert;
  });
}

function closeMenu({ returnFocus = false } = {}) {
  if (!menuButton || !primaryNavigation) return;
  primaryNavigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.querySelector(".sr-only").textContent = "Åbn menu";
  document.body.classList.remove("menu-open");
  setMenuBackgroundInert(false);
  if (returnFocus) menuButton.focus();
}

if (menuButton && primaryNavigation) {
  menuButton.addEventListener("click", () => {
    const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(willOpen));
    menuButton.querySelector(".sr-only").textContent = willOpen ? "Luk menu" : "Åbn menu";
    primaryNavigation.classList.toggle("is-open", willOpen);
    document.body.classList.toggle("menu-open", willOpen);
    setMenuBackgroundInert(willOpen);
    if (willOpen) primaryNavigation.querySelector("a")?.focus();
  });

  primaryNavigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu({ returnFocus: true });
    }
    if (event.key === "Tab" && menuButton.getAttribute("aria-expanded") === "true") {
      const menuFocusables = [menuButton, ...primaryNavigation.querySelectorAll("a")];
      const first = menuFocusables[0];
      const last = menuFocusables[menuFocusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  const desktopQuery = window.matchMedia("(min-width: 900px)");
  desktopQuery.addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });
}

const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

document.querySelectorAll(".card-scroller, .ticket-grid[tabindex]").forEach((scroller) => {
  scroller.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    scroller.scrollBy({
      left: direction * scroller.clientWidth * 0.8,
      behavior: reducedMotionQuery.matches ? "auto" : "smooth"
    });
  });
});

const validationMessages = {
  valueMissing: "Feltet skal udfyldes.",
  typeMismatch: "Indtast en gyldig e-mailadresse.",
  tooShort: "Indholdet er for kort.",
  patternMismatch: "Indtast et gyldigt telefonnummer med mindst otte tegn."
};

function getValidationMessage(field) {
  if (field.validity.valueMissing) return validationMessages.valueMissing;
  if (field.validity.typeMismatch) return validationMessages.typeMismatch;
  if (field.validity.tooShort) return validationMessages.tooShort;
  if (field.validity.patternMismatch) return validationMessages.patternMismatch;
  return "Kontrollér feltets indhold.";
}

function setFieldState(field, showError) {
  const errorElement = document.getElementById(`${field.id}-error`);
  if (!errorElement) return field.validity.valid;
  const isValid = field.validity.valid;
  field.setAttribute("aria-invalid", String(!isValid));
  errorElement.textContent = !isValid && showError ? `Fejl: ${getValidationMessage(field)}` : "";
  return isValid;
}

function validateForm(form) {
  const fields = [...form.querySelectorAll("input[required], select[required], textarea[required]")];
  let firstInvalid = null;
  fields.forEach((field) => {
    if (!setFieldState(field, true) && !firstInvalid) firstInvalid = field;
  });
  firstInvalid?.focus();
  return !firstInvalid;
}

document.querySelectorAll("form[novalidate]").forEach((form) => {
  form.querySelectorAll(".field-error").forEach((error) => error.setAttribute("aria-live", "polite"));
  form.querySelectorAll("input, select, textarea").forEach((field) => {
    field.addEventListener("input", () => setFieldState(field, field.getAttribute("aria-invalid") === "true"));
    field.addEventListener("change", () => setFieldState(field, field.getAttribute("aria-invalid") === "true"));
    field.addEventListener("blur", () => setFieldState(field, true));
  });
});

const ticketType = document.getElementById("ticket-type");
const ticketQuantity = document.getElementById("ticket-quantity");
const quantitySummary = document.getElementById("quantity-summary");

function updateQuantitySummary() {
  if (!ticketType || !ticketQuantity || !quantitySummary) return;
  const quantity = Number(ticketQuantity.value);
  const option = ticketType.selectedOptions[0];
  if (!ticketType.value || !quantity) {
    quantitySummary.textContent = "Vælg billettype og antal.";
    return;
  }
  const peoplePerTicket = Number(option.dataset.people || 1);
  const participants = quantity * peoplePerTicket;
  const ticketWord = quantity === 1 ? "billet/billetpakke" : "billetter/billetpakker";
  const participantWord = participants === 1 ? "deltager" : "deltagere";
  quantitySummary.textContent = `${quantity} ${ticketWord} giver adgang for ${participants} ${participantWord}.`;
}

ticketType?.addEventListener("change", updateQuantitySummary);
ticketQuantity?.addEventListener("change", updateQuantitySummary);

const signupForm = document.getElementById("signup-form");
const signupDialog = document.getElementById("signup-confirmation");
let dialogTrigger = null;

function getFocusableElements(container) {
  return [...container.querySelectorAll("button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])")];
}

function closeDialog() {
  if (!signupDialog?.open) return;
  signupDialog.close();
  dialogTrigger?.focus();
}

signupForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateForm(signupForm)) return;
  dialogTrigger = event.submitter;
  signupDialog?.showModal();
  signupDialog?.querySelector("[data-dialog-close]")?.focus();
});

signupDialog?.querySelector("[data-dialog-close]")?.addEventListener("click", closeDialog);
signupDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeDialog();
});
signupDialog?.addEventListener("click", (event) => {
  if (event.target === signupDialog) closeDialog();
});
signupDialog?.addEventListener("keydown", (event) => {
  if (event.key !== "Tab") return;
  const focusable = getFocusableElements(signupDialog);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

const contactForm = document.getElementById("contact-form");
const contactSuccess = document.getElementById("contact-success");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  contactSuccess.hidden = true;
  if (!validateForm(contactForm)) return;
  contactSuccess.hidden = false;
  contactSuccess.focus();
});
