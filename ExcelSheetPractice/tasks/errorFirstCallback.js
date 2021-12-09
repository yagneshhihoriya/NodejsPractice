const fs = require("fs");
const file = "./demoFile.txt";

const ErrorFirstCallback = (err, data) => {
	if (err) {
		return console.log(err);
	}
	console.log("Function readFile successfully executed");
};

fs.readFile(file, ErrorFirstCallback);

setTimeout(() => {
	let result = fs.readFileSync(file)
	console.log("Function readFileSync successfully executed")
},0)



