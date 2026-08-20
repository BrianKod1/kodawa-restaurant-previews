/*
=========================================
Trunk & Tandoor

Phase 2 interaction layer.

Prototype reservation flow:
this prepares a reservation request.
It does not check live availability
or confirm a table.
=========================================
*/


/* =========================================
   ELEMENTS
   ========================================= */

const header = document.querySelector("#siteHeader");
function updateFloatingReserve() {
  if (!floatingReserve) return;

  const shouldShow =
    window.scrollY > window.innerHeight * 0.65;

  floatingReserve.classList.toggle("is-visible", shouldShow);
}
const reserveTriggers = document.querySelectorAll(".reserve-trigger");

const bookingSheet = document.querySelector("#bookingSheet");
const bookingForm = document.querySelector("#bookingForm");
const bookingClose = document.querySelector("#bookingClose");
const bookingSteps = document.querySelectorAll(".booking-step");
const guestButtons = document.querySelectorAll("[data-guests]");

const bookingDate = document.querySelector("#bookingDate");
const bookingTime = document.querySelector("#bookingTime");
const bookingName = document.querySelector("#bookingName");
const bookingPhone = document.querySelector("#bookingPhone");

const toDetails = document.querySelector("#toDetails");
const completeBooking = document.querySelector("#completeBooking");

const bookingSummary = document.querySelector("#bookingSummary");
const emailReservation = document.querySelector("#emailReservation");


/* =========================================
   RESERVATION STATE
   ========================================= */

const reservationState = {
  guests: "",
  date: "",
  time: "",
  name: "",
  phone: ""
};


/* =========================================
   UTILITIES
   ========================================= */

function showStep(stepNumber) {
  bookingSteps.forEach((step) => {
    const isActive = step.dataset.step === String(stepNumber);

    step.classList.toggle("is-active", isActive);
  });
}


function resetReservation() {
  reservationState.guests = "";
  reservationState.date = "";
  reservationState.time = "";
  reservationState.name = "";
  reservationState.phone = "";

  bookingForm?.reset();

  guestButtons.forEach((button) => {
    button.classList.remove("is-selected");
    button.setAttribute("aria-pressed", "false");
  });

  if (bookingSummary) {
    bookingSummary.textContent = "";
  }

  if (emailReservation) {
    emailReservation.href = "#";
  }

  showStep(1);
}


function formatDate(dateValue) {
  if (!dateValue) return "";

  const [year, month, day] = dateValue.split("-").map(Number);

  const date = new Date(year, month - 1, day);

  return new Intl.DateTimeFormat("en-KE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}


function formatTime(timeValue) {
  if (!timeValue) return "";

  const [hours, minutes] = timeValue.split(":").map(Number);

  const date = new Date();
  date.setHours(hours, minutes, 0, 0);

  return new Intl.DateTimeFormat("en-KE", {
    hour: "numeric",
    minute: "2-digit"
  }).format(date);
}


function buildReservationSummary() {
  const formattedDate = formatDate(reservationState.date);
  const formattedTime = formatTime(reservationState.time);

  const guestLabel =
    reservationState.guests === "1"
      ? "1 guest"
      : `${reservationState.guests} guests`;

  return `${reservationState.name} · ${guestLabel} · ${formattedDate} · ${formattedTime}`;
}


function buildReservationEmail() {
  const formattedDate = formatDate(reservationState.date);
  const formattedTime = formatTime(reservationState.time);

  const guestLabel =
    reservationState.guests === "1"
      ? "1 guest"
      : `${reservationState.guests} guests`;

  const subject =
    `Reservation request — ${formattedDate} at ${formattedTime}`;

  const body = [
    "Hello Trunk & Tandoor,",
    "",
    "I would like to request a table.",
    "",
    `Name: ${reservationState.name}`,
    `Phone: ${reservationState.phone}`,
    `Guests: ${guestLabel}`,
    `Preferred date: ${formattedDate}`,
    `Preferred time: ${formattedTime}`,
    "",
    "I understand that this is a reservation request and that the table is not confirmed until the restaurant responds.",
    "",
    "Thank you."
  ].join("\n");

  /*
  IMPORTANT:
  This address remains a prototype assumption
  until the restaurant confirms the real
  reservation channel.
  */
  const recipient = "reservations@trunkandtandoor.com";

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}


/* =========================================
   HEADER STATE
   ========================================= */

function updateHeader() {
  if (!header) return;

  header.classList.toggle("is-scrolled", window.scrollY > 24);
}


/* =========================================
   FLOATING MOBILE RESERVE
   ========================================= */

function updateFloatingReserve() {
  if (!floatingReserve) return;

  const shouldShow =
    window.scrollY > window.innerHeight * 0.65;

  floatingReserve.classList.toggle("is-visible", shouldShow);
}


/* =========================================
   SCROLL EVENTS
   ========================================= */

function handleScroll() {
  updateHeader();
}

window.addEventListener("scroll", handleScroll, {
  passive: true
});

handleScroll();


/* =========================================
   OPEN RESERVATION REQUEST
   ========================================= */

reserveTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    if (!bookingSheet) return;

    resetReservation();

    bookingSheet.showModal();
  });
});


/* =========================================
   GUEST COUNT
   ========================================= */

guestButtons.forEach((button) => {
  button.setAttribute("aria-pressed", "false");

  button.addEventListener("click", () => {
    reservationState.guests = button.dataset.guests || "";

    guestButtons.forEach((candidate) => {
      const selected = candidate === button;

      candidate.classList.toggle("is-selected", selected);

      candidate.setAttribute(
        "aria-pressed",
        selected ? "true" : "false"
      );
    });

    /*
    Small response delay only.
    This is interaction feedback,
    not cinematic pacing.
    */
    window.setTimeout(() => {
      showStep(2);

      bookingDate?.focus();
    }, 120);
  });
});


/* =========================================
   DATE + TIME
   ========================================= */

toDetails?.addEventListener("click", () => {
  if (!bookingDate || !bookingTime) return;

  const dateValid = bookingDate.reportValidity();
  const timeValid = bookingTime.reportValidity();

  if (!dateValid || !timeValid) return;

  reservationState.date = bookingDate.value;
  reservationState.time = bookingTime.value;

  showStep(3);

  bookingName?.focus();
});


/* =========================================
   GUEST DETAILS
   ========================================= */

completeBooking?.addEventListener("click", () => {
  if (!bookingName || !bookingPhone) return;

  const nameValid = bookingName.reportValidity();
  const phoneValid = bookingPhone.reportValidity();

  if (!nameValid || !phoneValid) return;

  reservationState.name = bookingName.value.trim();
  reservationState.phone = bookingPhone.value.trim();

  if (!reservationState.guests) {
    showStep(1);
    return;
  }

  reservationState.date = bookingDate?.value || "";
  reservationState.time = bookingTime?.value || "";

  if (bookingSummary) {
    bookingSummary.textContent = buildReservationSummary();
  }

  if (emailReservation) {
    emailReservation.href = buildReservationEmail();
  }

  showStep(4);

  emailReservation?.focus();
});


/* =========================================
   MINIMUM DATE
   ========================================= */

if (bookingDate) {
  const today = new Date();

  const localYear = today.getFullYear();
  const localMonth = String(today.getMonth() + 1).padStart(2, "0");
  const localDay = String(today.getDate()).padStart(2, "0");

  bookingDate.min =
    `${localYear}-${localMonth}-${localDay}`;
}

/* =========================================
   CLOSE RESERVATION REQUEST
   ========================================= */

bookingClose?.addEventListener("click", () => {
  bookingSheet?.close();
});


/* =========================================
   DIALOG BACKDROP CLOSE
   ========================================= */

bookingSheet?.addEventListener("click", (event) => {
  if (event.target === bookingSheet) {
    bookingSheet.close();
  }
});


/* =========================================
   CLEAN STATE AFTER CLOSE
   ========================================= */

bookingSheet?.addEventListener("close", () => {
  resetReservation();
});