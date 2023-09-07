const { FontAssetType, OtherAssetType, generateFonts } = require("fantasticon");
const generateIconFonts = () =>
  generateFonts({
    inputDir: "./src/icons",
    outputDir: "./dist",
    assetTypes: [
      OtherAssetType.CSS,
      OtherAssetType.SCSS,
      OtherAssetType.SASS,
      OtherAssetType.TS,
      OtherAssetType.JSON,
    ],
    fontTypes: [
      FontAssetType.EOT,
      FontAssetType.TTF,
      FontAssetType.WOFF,
      FontAssetType.WOFF2,
    ],
    round: 0,
    normalize: true,
    prefix: "ip",
    tag: "span",
    fontHeight: 250,
    name: "icon-pack",
    formatOptions: {
      json: { indent: 2 },
    },
    pathOptions: {
      css: "./dist/styles/ip.css",
      scss: "./dist/styles/ip.scss",
      sass: "./dist/styles/ip.sass",
      ttf: "./dist/fonts/ip.ttf",
      woff: "./dist/fonts/ip.woff",
      woff2: "./dist/fonts/ip.woff2",
      eot: "./dist/fonts/ip.eot",
      ts: "./dist/types/ip.types.ts",
      json: "./dist/misc/ip.json",
    },
  })
    .then(() => console.log("📦 Assets generated!"))
    .catch(console.error);

const bootstrap = () => {
  generateIconFonts();
};

bootstrap();
