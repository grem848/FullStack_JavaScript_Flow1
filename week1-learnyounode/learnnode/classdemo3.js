const fs = require("fs");
const path = require("path");
const pathToFile = process.argv[2];
const ext = "." + process.argv[3];

fs.readdir(pathToFile, (err, data) => {
    if (err) {
        throw new Exception("Oops: " + err);
    }
    const filtered = data.filter(filename => path.extname(filename) === ext);
    console.log("result: " + filtered.join("\n"))

});

// node classdemo3 . js