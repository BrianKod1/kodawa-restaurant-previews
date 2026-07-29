const loader = document.querySelector('#pageLoader');
const header = document.querySelector('#siteHeader');
const floatingReserve = document.querySelector('.floating-reserve');
const sheet = document.querySelector('#bookingSheet');
const triggers = document.querySelectorAll('.reserve-trigger');
const steps = [...document.querySelectorAll('.booking-step')];
const guestButtons = document.querySelectorAll('[data-guests]');
const dateInput = document.querySelector('#bookingDate');
const timeInput = document.querySelector('#bookingTime');
const nameInput = document.querySelector('#bookingName');
const phoneInput = document.querySelector('#bookingPhone');
const summary = document.querySelector('#bookingSummary');
const emailLink = document.querySelector('#emailReservation');
let guests = '';

const showStep = (number) => {
  steps.forEach((step) => step.classList.toggle('is-active', Number(step.dataset.step) === number));
};

window.addEventListener('load', () => {
  window.setTimeout(() => loader?.classList.add('is-hidden'), 1050);
});

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 24;
  header?.classList.toggle('is-scrolled', scrolled);
  floatingReserve?.classList.toggle('is-visible', window.scrollY > window.innerHeight * .65);
}, { passive: true });

triggers.forEach((trigger) => trigger.addEventListener('click', () => {
  showStep(1);
  if (typeof sheet.showModal === 'function') sheet.showModal();
}));

guestButtons.forEach((button) => button.addEventListener('click', () => {
  guests = button.dataset.guests;
  guestButtons.forEach((item) => item.classList.toggle('is-selected', item === button));
  window.setTimeout(() => showStep(2), 180);
}));

document.querySelector('#toDetails')?.addEventListener('click', () => {
  if (!dateInput.value || !timeInput.value) {
    dateInput.reportValidity();
    timeInput.reportValidity();
    return;
  }
  showStep(3);
});

document.querySelector('#completeBooking')?.addEventListener('click', () => {
  if (!nameInput.value.trim() || !phoneInput.value.trim()) {
    nameInput.reportValidity();
    phoneInput.reportValidity();
    return;
  }

  const selectedDate = new Date(`${dateInput.value}T12:00:00`);
  const formattedDate = selectedDate.toLocaleDateString('en-KE', { weekday: 'long', month: 'long', day: 'numeric' });
  const details = `${nameInput.value.trim()}, ${guests} guests · ${formattedDate} at ${timeInput.value}.`;
  summary.textContent = details;

  const subject = encodeURIComponent('Reservation request — Trunk & Tandoor');
  const body = encodeURIComponent(`Hello Trunk & Tandoor,\n\nI would like to request a reservation.\n\nName: ${nameInput.value.trim()}\nGuests: ${guests}\nDate: ${formattedDate}\nTime: ${timeInput.value}\nPhone: ${phoneInput.value.trim()}\n\nThank you.`);
  emailLink.href = `mailto:reservations@trunkandtandoor.com?subject=${subject}&body=${body}`;
  showStep(4);
});

sheet?.addEventListener('click', (event) => {
  const rect = sheet.getBoundingClientRect();
  const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
  if (!inside) sheet.close();
});

const today = new Date();
today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
dateInput.min = today.toISOString().split('T')[0];
