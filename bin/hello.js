const chalk = require("chalk");
const pkg = require("../package.json");

console.log(`

${chalk.green("Selamat datang! 👋")}

Blog ${pkg.name} kamu sudah hampir siap. 🎉

Sekarang ketik ${chalk.yellow.bold("npm run setup")} untuk:
  - Mebuat file ${chalk.yellow("./.env.development")} dan ${chalk.yellow("./.env.production")}
  - Membuat ${chalk.green("Content Model")} di akun Contentful-mu

Ketika semua sudah selesai, ketik:

${chalk.yellow(
  "npm run dev"
)} untuk menjalankan blog Gatsby + Contentful-mu di ${chalk.green("localhost:8000")}


Baca tutorial lengkapnya di:
(https://www.evetry.com/membuat-blog-gatsby-dan-contentful)

`);
