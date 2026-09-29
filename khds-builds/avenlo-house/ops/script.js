"use strict";

/* =======================================================
   AVENLO OPERATIONS CONSOLE
   KHDS SYNTHESIS BUILD 02
   Kodawa Labs

   Prototype operational logic.
   No real guests, bookings, inventory or property systems.
======================================================= */


/* -------------------------------------------------------
   ELEMENTS
------------------------------------------------------- */

const attentionList = document.getElementById("attentionList");
const attentionCount = document.getElementById("attentionCount");

const contextDrawer = document.getElementById("contextDrawer");
const contextTitle = document.getElementById("contextTitle");
const contextBody = document.getElementById("contextBody");

const commandButton = document.getElementById("commandButton");
const commandPalette = document.getElementById("commandPalette");
const opsAssistantForm = document.getElementById("opsAssistantForm");
const opsAssistantInput = document.getElementById("opsAssistantInput");
const opsAssistantResponse = document.getElementById("opsAssistantResponse");

const toast = document.getElementById("toast");

const navigationButtons = document.querySelectorAll("[data-view]");
const revenueButtons = document.querySelectorAll("[data-revenue-action]");

let toastTimer = null;


/* -------------------------------------------------------
   DATE
------------------------------------------------------- */

const currentDateElement = document.getElementById("currentDate");

if (currentDateElement) {
  const now = new Date();

  currentDateElement.textContent =
    new Intl.DateTimeFormat("en-CA", {
      weekday: "long",
      month: "long",
      day: "numeric"
    }).format(now);
}


/* -------------------------------------------------------
   DEMO CONTEXT

   The useful unit is not simply "guest data".
   It is context relevant to the decision being made.
------------------------------------------------------- */

const contextLibrary = {

  arrival: {
    title: "Maya Thompson",
    sections: [
      {
        heading: "Current situation",
        body:
          "Maya arrived at 12:15 for Room 318, 2 hours and 45 minutes before standard check-in. She asked for somewhere to work while waiting."
      },
      {
        heading: "Access context",
        body:
          "Maya is a hotel guest but not an Avenlo member. Lounge access is appropriate; dedicated member workspace access should not be assumed."
      },
      {
        heading: "Room context",
        body:
          "Room 318 is currently estimated at 72% readiness. Housekeeping has not yet marked it ready for release."
      },
      {
        heading: "Recommended operating response",
        body:
          "Offer an appropriate lounge workspace, preserve luggage context, notify housekeeping of the early arrival and message Maya when the room is actually ready."
      }
    ]
  },


  allergy: {
    title: "Jordan Lee +2",
    sections: [
      {
        heading: "Reservation",
        body:
          "Luma reservation for three guests at 18:30, Table 14."
      },
      {
        heading: "Safety context",
        body:
          "A serious shellfish allergy was disclosed during the guest interaction. The system has preserved the information instead of allowing the AI to make a safety guarantee."
      },
      {
        heading: "Current status",
        body:
          "Restaurant acknowledgement is still pending. The allergy should remain an active operational exception until the appropriate human team confirms review."
      },
      {
        heading: "Required action",
        body:
          "Obtain kitchen or restaurant-team acknowledgement before service and keep the guest-facing response within verified operational limits."
      }
    ]
  },


  event: {
    title: "North & Vale Workshop",
    sections: [
      {
        heading: "Event",
        body:
          "Forty-person workshop in the Garden Room. Guest arrival begins before the 18:30 programme start."
      },
      {
        heading: "Readiness",
        body:
          "Room setup is complete and the AV check is marked complete."
      },
      {
        heading: "Current dependency",
        body:
          "The client host has not yet been marked on property. The event lead should receive final arrival and guest-count context when the host arrives."
      },
      {
        heading: "Why it remains visible",
        body:
          "A prepared room does not mean the event handoff is complete. Operational readiness includes the people and information required to deliver the service."
      }
    ]
  },


  service: {
    title: "AI-to-human handoff",
    sections: [
      {
        heading: "Guest request",
        body:
          "The guest asked whether Avenlo could arrange a helicopter transfer from the airport."
      },
      {
        heading: "AI behaviour",
        body:
          "The concierge had no verified property knowledge supporting that service and therefore withheld an answer rather than inventing one."
      },
      {
        heading: "Context preservation",
        body:
          "The original request and preceding conversation are available to guest services, so the guest should not need to repeat the interaction."
      },
      {
        heading: "Operating principle",
        body:
          "AI when it knows. Human when it matters. Context preserved either way."
      }
    ]
  }

};


/* -------------------------------------------------------
   TOAST
------------------------------------------------------- */

function showToast(message) {
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("is-visible");

  if (toastTimer) {
    window.clearTimeout(toastTimer);
  }

  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2400);
}


/* -------------------------------------------------------
   ATTENTION COUNT
------------------------------------------------------- */

function updateAttentionCount() {
  if (!attentionList || !attentionCount) {
    return;
  }

  const unresolved =
    attentionList.querySelectorAll(
      ".attention-card:not(.is-resolved)"
    ).length;

  attentionCount.textContent = String(unresolved);
}


/* -------------------------------------------------------
   CONTEXT DRAWER
------------------------------------------------------- */

function openContext(issueType) {
  const context = contextLibrary[issueType];

  if (!context || !contextDrawer) {
    return;
  }

  contextTitle.textContent = context.title;
  contextBody.replaceChildren();

  context.sections.forEach((section) => {
    const wrapper = document.createElement("section");
    wrapper.className = "context-section";

    const heading = document.createElement("h3");
    heading.textContent = section.heading;

    const paragraph = document.createElement("p");
    paragraph.textContent = section.body;

    wrapper.appendChild(heading);
    wrapper.appendChild(paragraph);

    contextBody.appendChild(wrapper);
  });

  contextDrawer.classList.add("is-open");
  contextDrawer.setAttribute("aria-hidden", "false");
}


function closeContext() {
  if (!contextDrawer) {
    return;
  }

  contextDrawer.classList.remove("is-open");
  contextDrawer.setAttribute("aria-hidden", "true");
}


document
  .querySelectorAll("[data-close-context]")
  .forEach((button) => {
    button.addEventListener("click", closeContext);
  });


/* -------------------------------------------------------
   EXCEPTION ACTIONS
------------------------------------------------------- */

if (attentionList) {
  attentionList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");

    if (!button) {
      return;
    }

    const card = button.closest(".attention-card");

    if (!card) {
      return;
    }

    const issueType = card.dataset.issue;
    const action = button.dataset.action;


    /* View connected context */

    if (action === "note") {
      openContext(issueType);
      return;
    }


    /* Resolve exception */

    if (action === "resolve") {
      if (card.classList.contains("is-resolved")) {
        showToast("This issue is already resolved.");
        return;
      }

      const label =
        button.dataset.label ||
        "Issue resolved";

      card.classList.add("is-resolved");

      button.disabled = true;
      button.textContent = "Resolved";

      const secondaryButtons =
        card.querySelectorAll(".secondary-action");

      secondaryButtons.forEach((secondaryButton) => {
        secondaryButton.disabled = false;
      });

      updateAttentionCount();
      showToast(label);
    }
  });
}


/* -------------------------------------------------------
   DIRECT-REVENUE ACTIONS
------------------------------------------------------- */

revenueButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.disabled) {
      return;
    }

    const label =
      button.dataset.label ||
      "Revenue action completed";

    button.disabled = true;
    button.textContent = "Sent";

    showToast(label);
  });
});


/* -------------------------------------------------------
   OPERATOR ASSISTANT
------------------------------------------------------- */

const opsKnowledge = [

  {
    terms: [
      "attention",
      "priority",
      "urgent",
      "needs attention",
      "what should i do",
      "what matters"
    ],

    response:
      "Four exceptions currently require attention: Maya Thompson's early arrival and workspace request, Jordan Lee's pending shellfish-allergy acknowledgement, the North & Vale event handoff, and the unresolved guest-services transfer request. The allergy acknowledgement carries the clearest safety dependency."
  },


  {
    terms: [
      "dinner",
      "dining",
      "luma",
      "restaurant",
      "allergy",
      "kitchen"
    ],

    response:
      "Before dinner, the most important unresolved item is Jordan Lee's serious shellfish allergy. The 18:30 Luma reservation is recorded, but kitchen acknowledgement is still pending. Luma currently shows 46 confirmed covers, or approximately 76% of the demonstrated capacity state."
  },


  {
    terms: [
      "arrival",
      "arrivals",
      "check in",
      "check-in",
      "maya"
    ],

    response:
      "There are 12 arrivals today, with three before 15:00. Maya Thompson is already on property before standard check-in. Room 318 is at 72% readiness, and she requested workspace access. Because she is not a member, the recommended response is lounge access rather than assuming member-workspace entitlement."
  },


  {
    terms: [
      "room",
      "rooms",
      "occupancy",
      "occupied"
    ],

    response:
      "Thirty-one of 38 rooms are shown occupied tonight, approximately 82%. The active room-related exception is Room 318, where an early-arriving guest is waiting on readiness."
  },


  {
    terms: [
      "event",
      "events",
      "gather",
      "workshop",
      "north"
    ],

    response:
      "One event is active today: the North & Vale Workshop in the Garden Room for 40 guests. The room and AV setup are complete; the remaining checkpoint is host arrival and final event-lead handoff."
  },


  {
    terms: [
      "member",
      "members",
      "membership",
      "workspace"
    ],

    response:
      "Seventeen members are shown currently in-house, with the member workspace at approximately 68% in this prototype. Hotel-guest status should not be treated as automatic member-workspace entitlement."
  },


  {
    terms: [
      "revenue",
      "money",
      "upsell",
      "upgrade",
      "opportunity",
      "opportunities"
    ],

    response:
      "Two direct-revenue opportunities are surfaced: a +$120 room-upgrade opportunity for Chris Morgan and an estimated +$160 dining-conversion opportunity for Room 221. These are prompts for action, not guaranteed revenue."
  },


  {
    terms: [
      "service",
      "handoff",
      "helicopter",
      "ai",
      "concierge"
    ],

    response:
      "One AI-to-human service handoff remains open. The concierge withheld an unsupported answer about a helicopter transfer and preserved the conversation for guest services. The goal is continuity without fabricated certainty."
  },


  {
    terms: [
      "capacity",
      "full",
      "availability"
    ],

    response:
      "The demonstrated capacity view shows rooms at 82%, Luma at 76%, the Garden Room at 100% because of the private workshop, and member workspace at 68%. These capacities remain service-specific rather than being treated as one property-wide availability state."
  }

];


function answerOpsQuestion(question) {
  const normalized = question.toLowerCase();

  for (const item of opsKnowledge) {
    const matched = item.terms.some((term) =>
      normalized.includes(term)
    );

    if (matched) {
      return item.response;
    }
  }

  return (
    "I do not have a reliable operational answer for that question in " +
    "this prototype. A production system should either query the relevant " +
    "property system or route the question to the responsible operator " +
    "rather than inventing an answer."
  );
}


/* -------------------------------------------------------
   COMMAND PALETTE
------------------------------------------------------- */

function openCommandPalette() {
  if (!commandPalette) {
    return;
  }

  commandPalette.classList.add("is-open");
  commandPalette.setAttribute("aria-hidden", "false");

  window.setTimeout(() => {
    opsAssistantInput?.focus();
  }, 80);
}


function closeCommandPalette() {
  if (!commandPalette) {
    return;
  }

  commandPalette.classList.remove("is-open");
  commandPalette.setAttribute("aria-hidden", "true");
}


commandButton?.addEventListener(
  "click",
  openCommandPalette
);


document
  .querySelectorAll("[data-close-command]")
  .forEach((button) => {
    button.addEventListener(
      "click",
      closeCommandPalette
    );
  });


opsAssistantForm?.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();

    const question =
      opsAssistantInput.value.trim();

    if (!question) {
      return;
    }

    opsAssistantResponse.textContent =
      answerOpsQuestion(question);
  }
);


/* -------------------------------------------------------
   NAVIGATION

   Prototype navigation focuses the relevant operational
   evidence instead of pretending every area is a complete
   production module.
------------------------------------------------------- */

function setActiveNavigation(selectedButton) {
  navigationButtons.forEach((button) => {
    button.classList.toggle(
      "is-active",
      button === selectedButton
    );
  });
}


function scrollToElement(element) {
  if (!element) {
    return;
  }

  element.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


navigationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const view = button.dataset.view;

    setActiveNavigation(button);


    if (view === "today") {
      scrollToElement(
        document.querySelector(".ops-header")
      );

      return;
    }


    if (view === "arrivals") {
      scrollToElement(
        document.querySelector(
          '[data-issue="arrival"]'
        )
      );

      showToast(
        "Arrival exception focused"
      );

      return;
    }


    if (view === "dining") {
      scrollToElement(
        document.querySelector(
          '[data-issue="allergy"]'
        )
      );

      showToast(
        "Dining operations focused"
      );

      return;
    }


    if (view === "events") {
      scrollToElement(
        document.querySelector(
          '[data-issue="event"]'
        )
      );

      showToast(
        "Event operations focused"
      );

      return;
    }


    if (view === "service") {
      scrollToElement(
        document.querySelector(
          '[data-issue="service"]'
        )
      );

      showToast(
        "Service handoff focused"
      );

      return;
    }


    if (view === "revenue") {
      scrollToElement(
        document.querySelector(
          ".revenue-panel"
        )
      );

      showToast(
        "Direct-revenue opportunities focused"
      );

      return;
    }


    if (view === "rooms") {
      scrollToElement(
        document.querySelector(
          ".capacity-panel"
        )
      );

      showToast(
        "Room and service capacity focused"
      );

      return;
    }


    if (view === "members") {
      scrollToElement(
        document.querySelector(
          ".capacity-panel"
        )
      );

      showToast(
        "Member capacity focused"
      );
    }
  });
});


/* -------------------------------------------------------
   KEYBOARD
------------------------------------------------------- */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {

      if (
        commandPalette?.classList.contains(
          "is-open"
        )
      ) {
        closeCommandPalette();
        return;
      }

      if (
        contextDrawer?.classList.contains(
          "is-open"
        )
      ) {
        closeContext();
      }

    }


    /* Ctrl/Cmd + K opens operator assistant */

    if (
      (event.ctrlKey || event.metaKey) &&
      event.key.toLowerCase() === "k"
    ) {
      event.preventDefault();

      openCommandPalette();
    }

  }
);


/* -------------------------------------------------------
   INITIAL STATE
------------------------------------------------------- */

updateAttentionCount();

console.info(
  "Avenlo Operations Console — KHDS synthesis build 02 / Kodawa Labs"
);