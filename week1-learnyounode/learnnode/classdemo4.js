const filterDir = require("./classdemo4module")

const pathToFile = process.argv[2];
const ext = "." + process.argv[3];

filterDir(pathToFile, ext, (err, data) => {
    if (err) {
        throw new Error("Oops: " + err);
    }
    console.log(data.join("\n"));
});