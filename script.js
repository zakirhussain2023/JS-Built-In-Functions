//Number methods
//toFixed()
var num=parseInt(prompt("Enter a decimal number: "));
console.log(num.toFixed())

//toString()
var num=parseInt(prompt("Enter a number: "));
console.log(num.toString());

//valueOf()
var int=parseInt(prompt("Enter a integer: "));
console.log(int.valueOf());

//Boolean methods
//toString()
var boolean=true;
console.log(boolean.toString());

//valueOf()
var boolean_value=false;
console.log(boolean_value.valueOf());

// String Methods
// 	charAt()
var fly="dragon";
console.log(fly.charAt("3"));

// 	concat()
var fruits=['Apple','Orange'];
var fruits_2=['Banana','Watermelon'];
console.log(fruits.concat(fruits_2));

// 	indexOf()
var text="Welcome to earth";
console.log(text.indexOf("to"));

// 	lastIndexOf()
var text = "Hello planet earth, you are a great planet.";
console.log(text.lastIndexOf("planet"));

// 	length()
var text="Hello , I wrote a book";
console.log(text.length);

// 	split()
var text = "How are you doing today?";
var splitindex=text.split(" ");
console.log(splitindex[2]);

// 	slice()
var text = "How are you doing today?";
var slicing=text.slice(2,7);
console.log(slicing);

// 	toLowerCase()
var text = "How are you doing today?";
console.log(text.toLowerCase());

// 	toUpperCase()
var text = "How are you doing today?";
console.log(text.toUpperCase());

// 	toString()
var text = "How are you doing today?";
console.log(text.toString());

// 	valueOf()
var text = "How are you doing today?";
console.log(text.valueOf());

// Date Methods
	
// 	Date()
var todayDate=new Date();
console.log(todayDate);

// 	getDate()
var todayDate=new Date();
var res=todayDate.getDate();
console.log(res);

// 	getDay()
var todayDate=new Date();
var res=todayDate.getDay();
console.log(res);

// 	getFullYear()
var todayDate=new Date();
var res=todayDate.getFullYear();
console.log(res);

// 	getHours()
var todayDate=new Date();
var res=todayDate.getHours();
console.log(res);

// 	getMilliseconds()
var todayDate=new Date();
var res=todayDate.getMilliseconds();
console.log(res);

// 	getMinutes()
var todayDate=new Date();
var res=todayDate.getMinutes();
console.log(res);

// 	getMonth()
var todayDate=new Date();
var res=todayDate.getMonth();
console.log(res);

// 	getSeconds()
var todayDate=new Date();
var res=todayDate.getSeconds();
console.log(res);