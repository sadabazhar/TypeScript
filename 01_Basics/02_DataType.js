// 1. number
var UserID = 202;
console.log("UserID: ".concat(UserID));
//2. string
var UserName = "Sadab";
console.log("UserName: ".concat(UserName));
//3. boolean
var LogIn = false;
console.log("LogIn: ".concat(LogIn));
//4. void
function printHello() {
    console.log("Hello!");
}
//5. null and undefined
var nullValue = null;
console.log("nullValue: ".concat(nullValue));
var undefinedValue = undefined;
console.log("undefinedValue: ".concat(undefinedValue));
//6. array
var numbers = [1, 2, 3];
console.log("numbers: ".concat(numbers));
var names = ["Sadab", "Wasif", "Saif"];
console.log("names: ".concat(names));
//7. object
var person = { name: "Sadab", age: 25 };
console.log("person: ".concat(JSON.stringify(person)));
//8. any: Represents any type of value. like javascript
var anyValue = 10;
anyValue = "Hello";
anyValue = true;
console.log("anyValue: ".concat(anyValue));
//9. unknown: Represents a value that could be any type but is safer than any because you must perform type checking before performing operations.
var unknownValue = 10;
console.log("unknownValue: ".concat(undefinedValue));
//10. tuple: Fixed-length array of elements of different types
var tuple = [10, "Hello", true];
console.log("tuple: ".concat(JSON.stringify(tuple)));
// 11. enum: Defines a set of named constants.
var color;
(function (color) {
    color["red"] = "RED";
    color["green"] = "GREEN";
    color["blue"] = "BLUE";
})(color || (color = {}));
// color.red = "white"; => gives error because of read only property
//12. Union: Allow a variable to be one of several types.
var unionValue = 10;
unionValue = "Hello";
console.log("unionValue: ".concat(unionValue));
var contactPerson = {
    name: "Sadab",
    age: 25,
    email: "sadab@example.com",
    phone: "123-456-7890"
};
console.log("Combine Value: ".concat(JSON.stringify(contactPerson)));
//NOTE: JSON.stringify(xyz) is used to convert the tuple array into a JSON-formatted string.
