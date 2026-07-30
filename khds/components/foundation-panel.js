
/**
 * KHDS Foundation Panel
 *
 * Internal design review component.
 *
 * Every Kodawa Labs hospitality project
 * can mount this panel while designing.
 */

export class FoundationPanel  {
  constructor() {
   this.rules = [
  "Emotion before interface",
  "Story before features",
  "Photography before decoration",
  "Restraint before complexity",
  "Motion with purpose",
  "Mobile is the primary experience",
  "Pacing is our signature",
  "Respect the brand",
  "Create emotion or business value",
  "Own the guest relationship",
  "Build for legacy",
  "Craft over convenience",
];
  }

  mount() {
    const panel = document.createElement("aside");
    panel.className = "khds-principles";
    panel.dataset.collapsed = localStorage.getItem("khds-principles-collapsed") ?? "true";
    panel.setAttribute("aria-label", "Kodawa Labs foundation principles");
    panel.innerHTML = `
      <button class="khds-principles__toggle" type="button" aria-expanded="${panel.dataset.collapsed !== "true"}">
        <strong>Kodawa Foundation</strong>
        <span class="khds-principles__status">Click a rule to flag it</span>
      </button>
      <div class="khds-principles__body">
        ${this.rules.map((rule, index) => `
          <button class="khds-principles__rule" type="button" data-index="${index}" data-state="clear">
            <span>${rule}</span>
          </button>
        `).join("")}
      </div>
    `;

    panel.querySelector(".khds-principles__toggle").addEventListener("click", () => {
      const collapsed = panel.dataset.collapsed === "true";
      panel.dataset.collapsed = String(!collapsed);
      panel.querySelector(".khds-principles__toggle").setAttribute("aria-expanded", String(collapsed));
      localStorage.setItem("khds-principles-collapsed", String(!collapsed));
    });

    panel.querySelectorAll(".khds-principles__rule").forEach((button) => {
      button.addEventListener("click", () => {
        const next = { clear: "watch", watch: "risk", risk: "clear" }[button.dataset.state];
        button.dataset.state = next;
        this.updateStatus(panel);
      });
    });

    document.body.appendChild(panel);
  }

  updateStatus(panel) {
    const watch = panel.querySelectorAll('[data-state="watch"]').length;
    const risk = panel.querySelectorAll('[data-state="risk"]').length;
    const status = panel.querySelector(".khds-principles__status");

    if (risk) status.textContent = `${risk} principle${risk > 1 ? "s" : ""} at risk`;
    else if (watch) status.textContent = `${watch} principle${watch > 1 ? "s" : ""} to watch`;
    else status.textContent = "Foundation aligned";
  }
}

if (new URLSearchParams(location.search).get("principles") !== "off") {
  new FoundationPanel().mount();
}
