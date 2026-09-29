"use strict";

/* =======================================================
   AVENLO HOUSE
   KHDS SYNTHESIS BUILD 02

   Prototype logic only.
   No real inventory, reservations or guest data are used.
======================================================= */


/* -------------------------------------------------------
   ELEMENTS
------------------------------------------------------- */

const body = document.body;

const bookingPanel = document.getElementById("bookingPanel");
const bookingStage = document.getElementById("bookingStage");

const openBookingButtons = document.querySelectorAll("[data-open-booking]");
const closeBookingButtons = document.querySelectorAll("[data-close-booking]");
const bookingTypeButtons = document.querySelectorAll("[data-booking-type]");

const openDiningButtons = document.querySelectorAll("[data-open-dining]");
const openEventButtons = document.querySelectorAll("[data-open-event]");
const openMembershipButtons = document.querySelectorAll("[data-open-membership]");

const conciergeForm = document.getElementById("conciergeForm");
const conciergeInput = document.getElementById("conciergeInput");
const conciergeConversation = document.getElementById("conciergeConversation");


/* -------------------------------------------------------
   BOOKING RELATIONSHIPS

   KHDS principle:
   Shared institutional identity != uniform entitlement.

   Each relationship gets its own conversion logic.
------------------------------------------------------- */

const bookingFlows = {

  stay: {
    label: "Stay",
    html: `
      <h3>Find your room</h3>

      <p>
        Hotel availability is handled independently from restaurant,
        event and membership capacity.
      </p>

      <div class="stage-grid">
        <label>
          <span>Arrival</span>
          <input type="date" id="stayArrival">
        </label>

        <label>
          <span>Departure</span>
          <input type="date" id="stayDeparture">
        </label>

        <label>
          <span>Guests</span>
          <select id="stayGuests">
            <option value="1">1 guest</option>
            <option value="2" selected>2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
          </select>
        </label>

        <label>
          <span>Room preference</span>
          <select id="stayRoom">
            <option>Best available</option>
            <option>King</option>
            <option>Corner King</option>
            <option>Suite</option>
          </select>
        </label>
      </div>

      <button
        class="stage-action"
        data-stage-action="stay"
      >
        Check direct availability
      </button>

      <div class="stage-result" data-stage-result></div>
    `
  },


  dine: {
    label: "Dine",
    html: `
      <h3>Reserve Luma</h3>

      <p>
        A room reservation does not guarantee restaurant capacity.
        Dining availability is checked separately.
      </p>

      <div class="stage-grid">
        <label>
          <span>Date</span>
          <input type="date" id="dineDate">
        </label>

        <label>
          <span>Time</span>
          <select id="dineTime">
            <option>17:30</option>
            <option>18:00</option>
            <option>18:30</option>
            <option>19:00</option>
            <option>19:30</option>
            <option>20:00</option>
            <option>20:30</option>
            <option>21:00</option>
          </select>
        </label>

        <label>
          <span>Party size</span>
          <select id="dineGuests">
            <option>1 guest</option>
            <option selected>2 guests</option>
            <option>3 guests</option>
            <option>4 guests</option>
            <option>5 guests</option>
            <option>6 guests</option>
          </select>
        </label>

        <label>
          <span>Occasion</span>
          <select id="dineOccasion">
            <option>No occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Business dinner</option>
            <option>Celebration</option>
          </select>
        </label>
      </div>

      <button
        class="stage-action"
        data-stage-action="dine"
      >
        Find a table
      </button>

      <div class="stage-result" data-stage-result></div>
    `
  },


  gather: {
    label: "Gather",
    html: `
      <h3>Tell us what you are planning</h3>

      <p>
        Events are qualification-led rather than forced through the
        same instant-booking flow as rooms or restaurant tables.
      </p>

      <div class="stage-grid">
        <label>
          <span>Event type</span>
          <select id="eventType">
            <option>Private dinner</option>
            <option>Workshop</option>
            <option>Launch</option>
            <option>Wedding</option>
            <option>Celebration</option>
            <option>Corporate gathering</option>
          </select>
        </label>

        <label>
          <span>Estimated guests</span>
          <select id="eventGuests">
            <option>Up to 12</option>
            <option>13 - 40</option>
            <option>41 - 90</option>
            <option>90+</option>
          </select>
        </label>

        <label>
          <span>Preferred date</span>
          <input type="date" id="eventDate">
        </label>

        <label>
          <span>Planning stage</span>
          <select id="eventStage">
            <option>Exploring options</option>
            <option>Shortlisting venues</option>
            <option>Ready for proposal</option>
          </select>
        </label>
      </div>

      <button
        class="stage-action"
        data-stage-action="gather"
      >
        Build my enquiry
      </button>

      <div class="stage-result" data-stage-result></div>
    `
  },


  belong: {
    label: "Belong",
    html: `
      <h3>Explore membership</h3>

      <p>
        Membership creates a continuing relationship with Avenlo,
        but individual spaces and services remain subject to their
        own access rules and capacity.
      </p>

      <div class="stage-grid">
        <label>
          <span>Primary interest</span>
          <select id="memberInterest">
            <option>Workspace</option>
            <option>Community</option>
            <option>Dining benefits</option>
            <option>Events & programming</option>
            <option>All of the above</option>
          </select>
        </label>

        <label>
          <span>Typical use</span>
          <select id="memberUse">
            <option>Several times a week</option>
            <option>Weekly</option>
            <option>A few times a month</option>
            <option>Mostly for events</option>
          </select>
        </label>
      </div>

      <button
        class="stage-action"
        data-stage-action="belong"
      >
        See membership path
      </button>

      <div class="stage-result" data-stage-result></div>
    `
  }

};


/* -------------------------------------------------------
   BOOKING PANEL
------------------------------------------------------- */

function openBookingPanel(type = null) {
  bookingPanel.classList.add("is-open");
  bookingPanel.setAttribute("aria-hidden", "false");
  body.classList.add("booking-open");

  if (type) {
    selectBookingType(type);
  }
}


function closeBookingPanel() {
  bookingPanel.classList.remove("is-open");
  bookingPanel.setAttribute("aria-hidden", "true");
  body.classList.remove("booking-open");

  bookingTypeButtons.forEach((button) => {
    button.classList.remove("is-active");
  });
}


function selectBookingType(type) {
  const flow = bookingFlows[type];

  if (!flow) {
    return;
  }

  bookingTypeButtons.forEach((button) => {
    const active = button.dataset.bookingType === type;
    button.classList.toggle("is-active", active);
  });

  bookingStage.innerHTML = flow.html;
}


/* General room-booking buttons */

openBookingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openBookingPanel("stay");
  });
});


/* Context-specific calls to action */

openDiningButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openBookingPanel("dine");
  });
});

openEventButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openBookingPanel("gather");
  });
});

openMembershipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openBookingPanel("belong");
  });
});


/* Booking relationship selector */

bookingTypeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectBookingType(button.dataset.bookingType);
  });
});


/* Close controls */

closeBookingButtons.forEach((button) => {
  button.addEventListener("click", closeBookingPanel);
});


document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && bookingPanel.classList.contains("is-open")) {
    closeBookingPanel();
  }
});


/* -------------------------------------------------------
   SIMULATED DIRECT-CONVERSION RESPONSES

   These demonstrate system behavior.
   They do NOT represent real inventory.
------------------------------------------------------- */

bookingStage.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-stage-action]");

  if (!actionButton) {
    return;
  }

  const type = actionButton.dataset.stageAction;
  const result = bookingStage.querySelector("[data-stage-result]");

  if (!result) {
    return;
  }

  if (type === "stay") {
    result.innerHTML = `
      <div class="result-card">
        <span class="result-label">Direct availability demo</span>

        <strong>3 room types available</strong>

        <p>
          Booking directly would continue into live room inventory,
          rate comparison and first-party guest capture.
        </p>

        <div class="result-meta">
          <span>King / from $329</span>
          <span>Corner King / from $389</span>
          <span>Suite / from $515</span>
        </div>
      </div>
    `;
  }


  if (type === "dine") {
    const time = document.getElementById("dineTime")?.value || "19:00";

    result.innerHTML = `
      <div class="result-card">
        <span class="result-label">Luma availability demo</span>

        <strong>Table options around ${time}</strong>

        <p>
          Restaurant inventory remains independent of hotel-room
          availability and membership status.
        </p>

        <div class="result-meta">
          <span>${time}</span>
          <span>+30 minutes</span>
          <span>-30 minutes</span>
        </div>
      </div>
    `;
  }


  if (type === "gather") {
    const eventType =
      document.getElementById("eventType")?.value ||
      "Private event";

    const eventGuests =
      document.getElementById("eventGuests")?.value ||
      "Guest count pending";

    result.innerHTML = `
      <div class="result-card">
        <span class="result-label">Qualified enquiry</span>

        <strong>${eventType}</strong>

        <p>
          ${eventGuests}. A real system would now route this brief to
          the correct event space and sales workflow rather than treating
          it like a room reservation.
        </p>

        <div class="result-meta">
          <span>Space match</span>
          <span>Proposal</span>
          <span>Human follow-up</span>
        </div>
      </div>
    `;
  }


  if (type === "belong") {
    const interest =
      document.getElementById("memberInterest")?.value ||
      "Membership";

    result.innerHTML = `
      <div class="result-card">
        <span class="result-label">Membership relationship</span>

        <strong>${interest}</strong>

        <p>
          The next step would qualify fit, explain access rules and
          establish the member relationship without implying unlimited
          capacity across every Avenlo service.
        </p>

        <div class="result-meta">
          <span>Eligibility</span>
          <span>Benefits</span>
          <span>Access rules</span>
        </div>
      </div>
    `;
  }
});


/* -------------------------------------------------------
   AVENLO AI CONCIERGE

   Demonstration knowledge base.

   Principle:
   Automation != no human recovery.
------------------------------------------------------- */

const conciergeKnowledge = [

  {
    terms: [
      "check in",
      "check-in",
      "checkin",
      "arrival",
      "room ready"
    ],

    response:
      "Check-in begins at 3:00 PM. If you arrive earlier, I can help with luggage storage and available waiting options. Early room access depends on actual room readiness, so I would confirm that rather than promise it."
  },


  {
    terms: [
      "check out",
      "check-out",
      "checkout",
      "departure"
    ],

    response:
      "Standard check-out is 11:00 AM. Late departure depends on room availability. I can request it, but I should not confirm it until the room team approves."
  },


  {
    terms: [
      "restaurant",
      "dinner",
      "luma",
      "table",
      "eat",
      "dining"
    ],

    response:
      "Luma serves breakfast from 7:00 to 11:00 and dinner from 5:30 PM. Restaurant capacity is separate from hotel-room availability, so I can help you check for a table rather than assume one is available."
  },


  {
    terms: [
      "breakfast"
    ],

    response:
      "Breakfast at Luma runs from 7:00 to 11:00. Whether it is included would depend on your booked room rate, so I would verify your reservation before saying it is complimentary."
  },


  {
    terms: [
      "workspace",
      "work",
      "cowork",
      "coworking",
      "desk"
    ],

    response:
      "Avenlo has spaces where hotel guests can work while waiting, but the dedicated member workspace has separate access rules. I can help identify an appropriate space without assuming membership access."
  },


  {
    terms: [
      "member",
      "membership",
      "belong"
    ],

    response:
      "Avenlo membership includes workspace, programming, preferred access and selected guest privileges. Membership does not mean every service is always available; restaurant, event and workspace capacity still apply independently."
  },


  {
    terms: [
      "event",
      "wedding",
      "meeting",
      "party",
      "gather"
    ],

    response:
      "Avenlo has three primary gathering spaces: The Library for up to 12, the Garden Room for up to 40 and The Hall for up to 90. I can help narrow the fit, then an events specialist should handle pricing and final availability."
  },


  {
    terms: [
      "allergy",
      "allergic",
      "dietary"
    ],

    response:
      "I can record dietary information and share it with the appropriate team, but I should not independently guarantee that a dish is safe for a serious allergy. For an allergy concern, I would involve the restaurant team directly."
  },


  {
    terms: [
      "accessible",
      "accessibility",
      "wheelchair",
      "mobility"
    ],

    response:
      "I can help with published accessibility information, but individual mobility requirements can be specific. I would confirm the exact room, route or event-space setup with the team before making a guarantee."
  },


  {
    terms: [
      "parking",
      "car"
    ],

    response:
      "Avenlo does not assume every arriving guest needs the same arrival path. For this prototype, parking arrangements require confirmation by the front desk, so I would connect you rather than invent availability."
  },


  {
    terms: [
      "late",
      "delay",
      "delayed"
    ],

    response:
      "That is something I can help coordinate. I would update the relevant arrival context and make sure the operating team knows about the delay rather than treating the original arrival time as unchanged."
  }

];


/* Higher-risk requests automatically escalate. */

const escalationTerms = [
  "emergency",
  "medical",
  "fire",
  "police",
  "unsafe",
  "injured",
  "injury",
  "stolen",
  "security",
  "locked out",
  "serious allergy"
];


function addMessage(text, type) {
  const message = document.createElement("div");

  message.className = `message message-${type}`;
  message.textContent = text;

  conciergeConversation.appendChild(message);

  conciergeConversation.scrollTop =
    conciergeConversation.scrollHeight;
}


function findConciergeResponse(question) {
  const normalized = question.toLowerCase();


  /* High-risk / urgent handoff */

  const needsEscalation = escalationTerms.some((term) =>
    normalized.includes(term)
  );

  if (needsEscalation) {
    return {
      type: "escalation",
      text:
        "This needs human attention rather than an automated answer. I would connect you with the Avenlo team immediately and pass along the context you already provided so you do not need to start again."
    };
  }


  /* Known property knowledge */

  for (const item of conciergeKnowledge) {
    const matched = item.terms.some((term) =>
      normalized.includes(term)
    );

    if (matched) {
      return {
        type: "known",
        text: item.response
      };
    }
  }


  /* Unknown / low-confidence */

  return {
    type: "unknown",
    text:
      "I do not have enough verified information to answer that confidently. Instead of guessing, I would send your question and this conversation context to a member of the Avenlo team."
  };
}


if (conciergeForm) {
  conciergeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const question = conciergeInput.value.trim();

    if (!question) {
      return;
    }

    addMessage(question, "user");

    conciergeInput.value = "";

    const answer = findConciergeResponse(question);

    window.setTimeout(() => {
      addMessage(answer.text, "ai");

      if (
        answer.type === "unknown" ||
        answer.type === "escalation"
      ) {
        const handoffMessage = document.createElement("div");

        handoffMessage.className = "handoff-card";

        handoffMessage.innerHTML = `
          <span>Human handoff</span>
          <strong>Context ready for the team</strong>
          <p>
            A real implementation would now create a service request
            with the conversation attached.
          </p>
          <button type="button" data-demo-handoff>
            Request assistance
          </button>
        `;

        conciergeConversation.appendChild(handoffMessage);

        conciergeConversation.scrollTop =
          conciergeConversation.scrollHeight;
      }

    }, 350);
  });
}


/* -------------------------------------------------------
   HUMAN HANDOFF DEMO
------------------------------------------------------- */

if (conciergeConversation) {
  conciergeConversation.addEventListener("click", (event) => {
    const handoffButton =
      event.target.closest("[data-demo-handoff]");

    if (!handoffButton) {
      return;
    }

    handoffButton.disabled = true;
    handoffButton.textContent = "Request sent";

    const confirmation = document.createElement("div");

    confirmation.className = "message message-ai";
    confirmation.textContent =
      "Your request has been prepared for the guest-services team with the conversation context attached.";

    conciergeConversation.appendChild(confirmation);

    conciergeConversation.scrollTop =
      conciergeConversation.scrollHeight;
  });
}


/* -------------------------------------------------------
   DEMO DATE DEFAULTS
------------------------------------------------------- */

function isoDateFromToday(daysFromToday) {
  const date = new Date();

  date.setDate(date.getDate() + daysFromToday);

  return date.toISOString().split("T")[0];
}


document.addEventListener("click", () => {
  const todayPlusOne = isoDateFromToday(1);
  const todayPlusTwo = isoDateFromToday(2);

  const arrival = document.getElementById("stayArrival");
  const departure = document.getElementById("stayDeparture");
  const dineDate = document.getElementById("dineDate");
  const eventDate = document.getElementById("eventDate");

  if (arrival && !arrival.value) {
    arrival.min = isoDateFromToday(0);
    arrival.value = todayPlusOne;
  }

  if (departure && !departure.value) {
    departure.min = todayPlusOne;
    departure.value = todayPlusTwo;
  }

  if (dineDate && !dineDate.value) {
    dineDate.min = isoDateFromToday(0);
    dineDate.value = todayPlusOne;
  }

  if (eventDate && !eventDate.value) {
    eventDate.min = isoDateFromToday(0);
  }
});


/* -------------------------------------------------------
   DEVELOPMENT SIGNAL
------------------------------------------------------- */

console.info(
  "Avenlo House — KHDS synthesis build 02 / Kodawa Labs"
);