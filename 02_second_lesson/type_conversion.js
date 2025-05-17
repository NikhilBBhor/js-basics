const value = 33
console.log(typeof value) 
console.log(typeof(value))  // produces same result

// type of number in string format
console.log("number in string format");
let value2 = "33"
console.log(typeof value2);

// number string conversion
console.log("string number converted");
let converted = Number(value2)
console.log(typeof converted);

// alphanumeric characters conversion
console.log("string converted");
let value3 = "33abc"
console.log(typeof value3);
let converted2 = Number(value3)
console.log(typeof converted2);
console.log(converted2);  // NaN has type "number"

// null conversion into number
console.log('null to number');
let value4 = null
let converted3 = Number(value4)
console.log(converted3);

/*
Number(null) => 0
Number(alphabetical sting) => NaN
Number(undefined) => NaN
Number(boolean) => 1-> true, 0-> false
Boolean(0 or "") => false
Boolean(everything else) => true

Remember: NaN has type number
*/
