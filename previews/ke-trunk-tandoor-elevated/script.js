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

let lastReserveTrigger = null;


/* =========================================
   STEP MANAGEMENT
   ========================================= */

function showStep(stepNumber) {
  bookingSteps.forEach((step) => {
    const isActive =
      step.dataset.step === String(stepNumber);

    step.classList.toggle("is-active", isActive);

    step.setAttribute(
      "aria-hidden",
      isActive ? "false" : "true"
    );
  });
}


/* =========================================
   RESET
   ========================================= */

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


/* =========================================
   FORMATTING
   ========================================= */

function formatDate(dateValue) {
  if (!dateValue) return "";

  const [year, month, day] =
    dateValue.split("-").map(Number);

  const date = new Date(
    year,
    month - 1,
    day
  );

  return new Intl.DateTimeFormat("en-KE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}


function formatTime(timeValue) {
  if (!timeValue) return "";

  const [hours, minutes] =
    timeValue.split(":").map(Number);

  const date = new Date();

  date.setHours(
    hours,
    minutes,
    0,
    0
  );

  return new Intl.DateTimeFormat("en-KE", {
    hour: "numeric",
    minute: "2-digit"
  }).format(date);
}


/* =========================================
   REQUEST SUMMARY
   ========================================= */

function buildReservationSummary() {
  const formattedDate =
    formatDate(reservationState.date);

  const formattedTime =
    formatTime(reservationState.time);

  const guestLabel =
    reservationState.guests === "1"
      ? "1 guest"
      : `${reservationState.guests} guests`;

  return [
    reservationState.name,
    guestLabel,
    formattedDate,
    formattedTime
  ].join(" · ");
}


/* =========================================
   EMAIL REQUEST
   ========================================= */

function buildReservationEmail() {
  const formattedDate =
    formatDate(reservationState.date);

  const formattedTime =
    formatTime(reservationState.time);

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
  const recipient =
    "reservations@trunkandtandoor.com";

  return (
    `mailto:${recipient}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`
  );
}


/* =========================================
   HEADER STATE
   ========================================= */

function updateHeader() {
  if (!header) return;

  header.classList.toggle(
    "is-scrolled",
    window.scrollY > 24
  );
}


/* =========================================
   SCROLL EVENTS
   ========================================= */

window.addEventListener(
  "scroll",
  updateHeader,
  {
    passive: true
  }
);

updateHeader();


/* =========================================
   OPEN RESERVATION REQUEST
   ========================================= */

reserveTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    if (!bookingSheet) return;

    lastReserveTrigger = trigger;

    resetReservation();

    bookingSheet.showModal();

    /*
    Allow the dialog to render first,
    then place focus on the close control.
    */
    window.requestAnimationFrame(() => {
      bookingClose?.focus();
    });
  });
});


/* =========================================
   GUEST COUNT
   ========================================= */

guestButtons.forEach((button) => {
  button.setAttribute(
    "aria-pressed",
    "false"
  );

  button.addEventListener("click", () => {
    reservationState.guests =
      button.dataset.guests || "";

    guestButtons.forEach((candidate) => {
      const selected =
        candidate === button;

      candidate.classList.toggle(
        "is-selected",
        selected
      );

      candidate.setAttribute(
        "aria-pressed",
        selected ? "true" : "false"
      );
    });

    /*
    Brief interaction feedback only.
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

  const dateValid =
    bookingDate.reportValidity();

  if (!dateValid) {
    bookingDate.focus();
    return;
  }

  const timeValid =
    bookingTime.reportValidity();

  if (!timeValid) {
    bookingTime.focus();
    return;
  }

  reservationState.date =
    bookingDate.value;

  reservationState.time =
    bookingTime.value;

  showStep(3);

  bookingName?.focus();
});


/* =========================================
   GUEST DETAILS
   ========================================= */

completeBooking?.addEventListener(
  "click",
  () => {
    if (!bookingName || !bookingPhone) {
      return;
    }

    const nameValid =
      bookingName.reportValidity();

    if (!nameValid) {
      bookingName.focus();
      return;
    }

    const phoneValid =
      bookingPhone.reportValidity();

    if (!phoneValid) {
      bookingPhone.focus();
      return;
    }

    reservationState.name =
      bookingName.value.trim();

    reservationState.phone =
      bookingPhone.value.trim();

    if (!reservationState.guests) {
      showStep(1);

      guestButtons[0]?.focus();

      return;
    }

    reservationState.date =
      bookingDate?.value || "";

    reservationState.time =
      bookingTime?.value || "";

    if (bookingSummary) {
      bookingSummary.textContent =
        buildReservationSummary();
    }

    if (emailReservation) {
      emailReservation.href =
        buildReservationEmail();
    }

    showStep(4);

    emailReservation?.focus();
  }
);


/* =========================================
   MINIMUM DATE
   ========================================= */

if (bookingDate) {
  const today = new Date();

  const localYear =
    today.getFullYear();

  const localMonth =
    String(
      today.getMonth() + 1
    ).padStart(2, "0");

  const localDay =
    String(
      today.getDate()
    ).padStart(2, "0");

  bookingDate.min =
    `${localYear}-${localMonth}-${localDay}`;
}


/* =========================================
   CLOSE RESERVATION REQUEST
   ========================================= */

bookingClose?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (bookingSheet?.open) {
    bookingSheet.close();
  }
});

/* =========================================
   DIALOG BACKDROP CLOSE
   ========================================= */

bookingSheet?.addEventListener(
  "click",
  (event) => {
    if (event.target === bookingSheet) {
      bookingSheet.close();
    }
  }
);


/* =========================================
   ESCAPE / CANCEL
   ========================================= */

bookingSheet?.addEventListener(
  "cancel",
  () => {
    /*
    Native dialog behaviour closes the
    dialog when Escape is pressed.
    The close event below handles reset
    and focus restoration.
    */
  }
);


/* =========================================
   CLEAN STATE + RESTORE FOCUS
   ========================================= */

bookingSheet?.addEventListener(
  "close",
  () => {
    resetReservation();

    /*
    Return keyboard focus to the exact
    Reserve control that opened the dialog.
    */
    window.requestAnimationFrame(() => {
      lastReserveTrigger?.focus();
    });
  }
);