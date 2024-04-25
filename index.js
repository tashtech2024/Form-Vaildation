const str = 'Hello ALL programmers start with a hello World application!';

const regex1 = /World/ig; // Search for words 
//? Regex Method 
console.log(regex1.test(str)); //return true or false if matches regex 
console.log(regex1.exec(str)); // 

//? str method 
console.log(str.match(regex1)); //returns array of matches 
console.log(str.search(regex1)); //returns the index
console.log(str.replace(regex1,'XXX')); // find and replace 