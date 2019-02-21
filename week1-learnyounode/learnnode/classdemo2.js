const fs = require("fs");
// const x = require("./idontexist");

const fileName = process.argv[2];
// const content = fs.readFileSync(fileName);
// console.log(content.toString());
const content = fs.readFile(fileName, (err, data) => {
    if (err) {
        throw new Error("OOPSIE " + err);
    }
    const d = data.toString();
    console.log(d);

});
console.log("Hi");

// node classdemo2 classdemo2.js