const fs = require("fs"),
    path = require("path"),
    pkg = require("./package.json");

const name = path.basename(__dirname);

pkg.name = name;
pkg.description = "";
delete pkg.repository;
delete pkg.author;
delete pkg.homepage;
delete pkg.url;
delete pkg.keywords;
delete pkg.bugs;
delete pkg.license;
delete pkg.scripts.preinstall;


fs.writeFile(__dirname + "/package.json", JSON.stringify(pkg, null, 4), "utf8", () => {
    fs.unlink(__dirname + "/preproject.js", () => { });
})