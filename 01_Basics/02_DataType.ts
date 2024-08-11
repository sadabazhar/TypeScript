export {}

// 1. number

let UserID: number = 202;
console.log(`UserID: ${UserID}`);

//2. string

let UserName: string = "Sadab";
console.log(`UserName: ${UserName}`);

//3. boolean

let LogIn: boolean = false;
console.log(`LogIn: ${LogIn}`);

//4. void

function printHello(): void {
    console.log("Hello!");
}

//5. null and undefined

let nullValue: null = null;
console.log(`nullValue: ${nullValue}`);

let undefinedValue: undefined = undefined;
console.log(`undefinedValue: ${undefinedValue}`);

//6. array
let numbers: number[] = [1,2,3];
console.log(`numbers: ${numbers}`);

let names: string[] = ["Sadab", "Wasif", "Saif"];
console.log(`names: ${names}`);

//7. object

let person: {name: string, age: number} = {name: "Sadab", age: 25};
console.log(`person: ${JSON.stringify(person)}`);

//8. any: Represents any type of value. like javascript

let anyValue: any = 10;
anyValue = "Hello";
anyValue = true;
console.log(`anyValue: ${anyValue}`);

//9. unknown: Represents a value that could be any type but is safer than any because you must perform type checking before performing operations.

let unknownValue: unknown = 10;
console.log(`unknownValue: ${undefinedValue}`);

//10. tuple: Fixed-length array of elements of different types

let tuple: [number, string, boolean] = [10, "Hello", true];
console.log(`tuple: ${JSON.stringify(tuple)}`);

// 11. enum: Defines a set of named constants.
enum color{
    red = "RED",
    green = "GREEN",
    blue = "BLUE"
}
// color.red = "white"; => gives error because of read only property

//12. Union: Allow a variable to be one of several types.

let unionValue: number | string = 10;
unionValue = "Hello";
console.log(`unionValue: ${unionValue}`);

//13. Intersection: Combine two or more types into a new type.

type Person = { name: string; age: number };
type Contact = { email: string; phone: string };

type ContactPerson = Person & Contact;

let contactPerson: ContactPerson = {
  name: "Sadab",
  age: 25,
  email: "sadab@example.com",
  phone: "123-456-7890"
};

console.log(`Combine Value: ${JSON.stringify(contactPerson)}`);


//NOTE: JSON.stringify(xyz) is used to convert the tuple array into a JSON-formatted string.

//NOTE: Using export {} is a way to explicitly define a TypeScript file as a module, ensuring that its contents do not leak into the global scope and maintaining modularity in your codebase. It’s a good practice for maintaining clean and organized code, especially in larger projects.