const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE_URL = "https://showcase.ouniverse.space/previews";

const projects = [
  "ke-270-rooftop",
  "ke-about-thyme",
  "ke-akira-modern-asian",
  "ke-carnivore",
  "ke-cjs",
  "ke-cultiva-living-restaurant",
  "ke-hero-restaurant",
  "ke-inti-nikkei",
  "ke-kilimanjaro-jamia",
  "ke-mama-oliech",
  "ke-mawimbi-one-evening",
  "ke-oliveira-restaurant",
  "ke-sikia-fine-dining",
  "ke-summer-lounge",
  "ke-tamarind-group",
  "ke-the-branch-restaurant",
  "ke-top-rise-restaurant",
  "ke-trattoria-nairobi",
];

const outputDirectory = path.join(__dirname, "screenshots");

async function captureProject(page, project) {
  const url = `${BASE_URL}/${project}/`;
  const outputPath = path.join(outputDirectory, `${project}.jpg`);

  console.log(`Capturing ${project}...`);

  await page.goto(url, {
    waitUntil: "networkidle",
    timeout: 60000,
  });

  await page.addStyleTag({
    content: `
      html {
        scroll-behavior: auto !important;
      }

      html,
      body {
        scrollbar-width: none !important;
      }

      body::-webkit-scrollbar {
        display: none !important;
      }

      *,
      *::before,
      *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
        caret-color: transparent !important;
      }
    `,
  });

  await page.evaluate(async () => {
    if (document.fonts?.ready) {
      await document.fonts.ready;
    }

    window.scrollTo(0, 0);
  });

  await page.waitForTimeout(1500);

  await page.screenshot({
    path: outputPath,
    type: "jpeg",
    quality: 90,
    fullPage: false,
  });

  console.log(`Saved screenshots/${project}.jpg`);
}

async function main() {
  fs.mkdirSync(outputDirectory, { recursive: true });

  const browser = await chromium.launch({
    headless: true,
  });

  const context = await browser.newContext({
    viewport: {
      width: 1600,
      height: 1000,
    },
    deviceScaleFactor: 1,
    colorScheme: "light",
  });

  const page = await context.newPage();

  for (const project of projects) {
    try {
      await captureProject(page, project);
    } catch (error) {
      console.error(`Failed to capture ${project}:`, error.message);
    }
  }

  await browser.close();
  console.log("Screenshot capture complete.");
}

main().catch((error) => {
  console.error("Capture failed:", error);
  process.exit(1);
});