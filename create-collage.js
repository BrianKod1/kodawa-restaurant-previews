const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const WIDTH = 1600;
const HEIGHT = 1000;
const COLUMNS = 3;
const ROWS = 2;
const GAP = 16;

const screenshotsDir = path.join(__dirname, "screenshots");
const outputPath = path.join(
  screenshotsDir,
  "restaurants-collage.jpg"
);

const projects = [
  "ke-tamarind-group.jpg",
  "ke-mawimbi-one-evening.jpg",
  "ke-inti-nikkei.jpg",
  "ke-cultiva-living-restaurant.jpg",
  "ke-carnivore.jpg",
  "ke-oliveira-restaurant.jpg",
];

const labels = [
  "Tamarind Group",
  "Mawimbi",
  "INTI Nikkei",
  "Cultiva",
  "Carnivore",
  "Oliveira",
];

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function createLabelSvg(label, width, height) {
  return Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tileGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="40%" stop-color="rgba(0,0,0,0)" />
          <stop offset="100%" stop-color="rgba(0,0,0,0.72)" />
        </linearGradient>
      </defs>

      <rect width="${width}" height="${height}" fill="url(#tileGradient)" />

      <text
        x="24"
        y="${height - 28}"
        fill="#ffffff"
        font-family="Arial, Helvetica, sans-serif"
        font-size="24"
        font-weight="700"
        letter-spacing="-0.5"
      >
        ${escapeXml(label)}
      </text>
    </svg>
  `);
}

function createMainOverlaySvg() {
  return Buffer.from(`
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mainGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="48%" stop-color="rgba(0,0,0,0)" />
          <stop offset="100%" stop-color="rgba(0,0,0,0.9)" />
        </linearGradient>

        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="8"
            flood-color="#000000"
            flood-opacity="0.35"
          />
        </filter>
      </defs>

      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#mainGradient)" />

      <g filter="url(#shadow)">
        <rect
          x="56"
          y="55"
          width="180"
          height="40"
          rx="20"
          fill="rgba(17,18,22,0.82)"
        />

        <text
          x="146"
          y="81"
          text-anchor="middle"
          fill="#d8ff49"
          font-family="Arial, Helvetica, sans-serif"
          font-size="13"
          font-weight="800"
          letter-spacing="2.5"
        >
          LATEST CONCEPTS
        </text>

        <text
          x="58"
          y="855"
          fill="#ffffff"
          font-family="Arial, Helvetica, sans-serif"
          font-size="76"
          font-weight="800"
          letter-spacing="-3"
        >
          Restaurant Websites
        </text>

        <text
          x="61"
          y="910"
          fill="rgba(255,255,255,0.76)"
          font-family="Arial, Helvetica, sans-serif"
          font-size="26"
          font-weight="500"
          letter-spacing="0.4"
        >
          Kenya Hospitality Collection
        </text>
      </g>
    </svg>
  `);
}

async function createTile(filename, label, tileWidth, tileHeight) {
  const inputPath = path.join(screenshotsDir, filename);

  if (!fs.existsSync(inputPath)) {
    throw new Error(`Missing screenshot: ${inputPath}`);
  }

  const resizedImage = await sharp(inputPath)
    .resize(tileWidth, tileHeight, {
      fit: "cover",
      position: "top",
    })
    .jpeg({
      quality: 91,
      mozjpeg: true,
    })
    .toBuffer();

  return sharp({
    create: {
      width: tileWidth,
      height: tileHeight,
      channels: 3,
      background: "#17181b",
    },
  })
    .composite([
      {
        input: resizedImage,
      },
      {
        input: createLabelSvg(label, tileWidth, tileHeight),
      },
    ])
    .jpeg({
      quality: 91,
      mozjpeg: true,
    })
    .toBuffer();
}

async function main() {
  fs.mkdirSync(screenshotsDir, {
    recursive: true,
  });

  const tileWidth = Math.floor(
    (WIDTH - GAP * (COLUMNS - 1)) / COLUMNS
  );

  const tileHeight = Math.floor(
    (HEIGHT - GAP * (ROWS - 1)) / ROWS
  );

  const compositeLayers = [];

  for (let index = 0; index < projects.length; index += 1) {
    const row = Math.floor(index / COLUMNS);
    const column = index % COLUMNS;

    const left = column * (tileWidth + GAP);
    const top = row * (tileHeight + GAP);

    const tile = await createTile(
      projects[index],
      labels[index],
      tileWidth,
      tileHeight
    );

    compositeLayers.push({
      input: tile,
      left,
      top,
    });
  }

  compositeLayers.push({
    input: createMainOverlaySvg(),
    left: 0,
    top: 0,
  });

  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 3,
      background: "#111216",
    },
  })
    .composite(compositeLayers)
    .jpeg({
      quality: 92,
      mozjpeg: true,
    })
    .toFile(outputPath);

  console.log(`Collage created: ${outputPath}`);
}

main().catch((error) => {
  console.error("Failed to create collage:");
  console.error(error.message);
  process.exit(1);
});