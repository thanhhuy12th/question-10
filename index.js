var http = require('http');
var port = 3000;
const fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(port);

console.log("App starting on port: " + port);




// Problem 1
let generateString = () => {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

	for (var i = 0; i < 20; i++){
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}

let generateInt = () => {
	var text = "";
	var possible = "1234567890";

	for (var i = 0; i < 12; i++){
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}

let generateAlphaNumberic = () => {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (var i = 0; i < 12; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
}

let generateRealNumber = () => {
	var text = "";
	var possible1 = "0123456789";
	var possible2 = "0123456789";
	for (var i = 0; i < 6; i++){
		text += (possible1.charAt(Math.floor(Math.random() * possible1.length)));
	}
	text += ".";
	for (var j = 0; j < 6; j++){
		text += (possible2.charAt(Math.floor(Math.random() * possible2.length)));
	}
	return text;
} 

// Write file 4 type
// Uncomment to use this code
// var stream = fs.createWriteStream("result.txt");
// stream.once('open', function(fd) {
//   for(let i = 0; i< 10; i ++) {
//   	 stream.write(generateString() + " , " + generateInt() + " , " + generateAlphaNumberic() + " , " + generateRealNumber() );
//   	 stream.write("\n");
//   }
//   stream.end();
// });






// Problem 2
// Uncomment to use this code


// let checkText = str => {
// 	str = str.trim();
// 	if(str.match(/^[a-zA-Z0-9]+$/)) {
// 		if(str.match(/^[a-zA-Z]+$/)) {
// 			return "alphabetical string";
// 		}
// 		else if(str.match(/^[0-9]+$/)) return "Interger string";
// 		else {
// 			return "alphanumberic string";
// 		}
// 	}
// 	else return "real numbber string";

// }


// filePath = './result.txt';

// var readedText = fs.readFileSync(filePath, 'utf8');

// let arrTotal = readedText.split("\n");

// arrTotal.forEach(function(val,index) { 
// 	arrItem = val.split(",");
// 	arrItem.forEach(function(valItem,indexItem) { 
// 		//checkText(valItem);
// 		console.log(valItem + ": " + checkText(valItem));
// 	});
// }) 


// Problem 3
// 
filePath = './result.txt';

var readedText = fs.readFileSync(filePath, 'utf8');
let arrTotal = readedText.split("\n");

arrTotal.forEach(function(val,index) { 
	let arrItem = val.split(",");
	arrItem.forEach(function(valItem,indexItem) { 
		console.log("======================================");
		let arrItemLv2 = valItem.trim().split("");
		arrItemLv2.forEach(function(valItemLv2,indexItemLv2){
			if(valItemLv2) console.log(valItemLv2 + ":" + indexItemLv2 + "\n");
			
		})
	});
}) 
