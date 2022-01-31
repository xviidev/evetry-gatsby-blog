const spaceImport = require("contentful-import");
const exportFile = require("./contentful-export.json");
const inquirer = require("inquirer");
const chalk = require("chalk");
const path = require("path");
const { writeFileSync } = require("fs");

const argv = require("yargs-parser")(process.argv.slice(2));

console.log(`
  Halo! Kami akan membantu kamu mempersiapkan
  blog Gatsby + Contentful kamu. 

  Untuk memulai, kami membutuhkan :

      ✔ ${chalk.green("Space ID")}
      ✔ ${chalk.green("Content Delivery API - access token")}
      ✔ ${chalk.green("Content management tokens")}
    
  Yang dapat kamu dapatkan di:
  ${chalk.yellow(
    `app.contentful.com ${chalk.red("->")} Space Settings ${chalk.red(
      "->"
    )} API keys`
  )}

  Silahkan baca tutorial lengkapnya di:
  ${chalk.green.underline.bold("(https://www.evetry.com/membuat-blog-gatsby-dan-contentful)")}


  Sudah siap? Ayo kita mulai! 🎉


`);

const questions = [
  {
    name: "spaceId",
    message: "Masukkan Space ID kamu",
    when: !argv.spaceId && !process.env.CONTENTFUL_SPACE_ID,
    validate: (input) =>
      /^[a-z0-9]{12}$/.test(input) ||
      "Space ID kamu harus terdiri dari 12 huruf kecil.",
  },
  {
    name: "accessToken",
    when:
      !argv.accessToken &&
      !process.env.CONTENTFUL_ACCESS_TOKEN &&
      !argv.deliveryToken &&
      !process.env.CONTENTFUL_DELIVERY_TOKEN,
    message: "Masukkan Content Delivery API - access token kamu",
  },
  {
    name: "managementToken",
    when: !argv.managementToken,
    message: "Masukkan Content management tokens kamu",
  },
];

inquirer
  .prompt(questions)
  .then(({ spaceId, managementToken, accessToken }) => {
    const {
      CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN,
      CONTENTFUL_DELIVERY_TOKEN,
    } = process.env;


    spaceId = CONTENTFUL_SPACE_ID || argv.spaceId || spaceId;
    managementToken = argv.managementToken || managementToken;

    accessToken =
      CONTENTFUL_ACCESS_TOKEN ||
      CONTENTFUL_DELIVERY_TOKEN ||
      argv.accessToken ||
      argv.deliveryToken ||
      accessToken;

    console.log("Membuat file konfigurasi...");
    const configFiles = [`.env.development`, `.env.production`].map((file) =>
      path.join(__dirname, "..", file)
    );

    const fileContents =
      [ `CONTENTFUL_SPACE_ID='${spaceId}'`,
        `CONTENTFUL_ACCESS_TOKEN='${accessToken}'`,
      ].join("\n") + "\n";

    configFiles.forEach((file) => {
      writeFileSync(file, fileContents, "utf8");
      console.log(`Config file ${chalk.yellow(file)} written`);
    });
    return { spaceId, managementToken };
  })
  .then(({ spaceId, managementToken }) =>
    spaceImport({ spaceId, managementToken, content: exportFile })
  )
  .then((_, error) => {
    console.log(
      `Berhasil! Sekarang jalankan ${chalk.yellow(
        "npm run dev"
      )} dan liat hasilnya 🔥🔥.`
    );
  })
  .catch((error) => console.error(error));
