// QUESTION NO. - 1
// For the given JSON iterate over all for loops (for, for in, for of, forEach)

// CODE-
// 1. FOR LOOP -
// INPUT - 
var object = [
  { person: "Mohan", age: 2, company: "Guvi" },
  { person: "Rohan", age: 3, company: "Guvi Geeks" },
  { person: "Raju", age: 4, company: "Guvi Geek Network" },
];
for(var i = 0;i<object.length;i++)
{
  console.log(`
    person: ${object[i].person}
    age: ${object[i].age}
    company: ${object[i].company}`
  )
}

// OUTPUT-
//     person: Mohan
//     age: 2
//     company: Guvi
// script.js:8 
//     person: Rohan
//     age: 3
//     company: Guvi Geeks
// script.js:8 
//     person: Raju
//     age: 4
//     company: Guvi Geek Network


// 2. FOR IN LOOP
// INPUT -
var object = [
  { person: "Mohan", age: 2, company: "Guvi" },
  { person: "Rohan", age: 3, company: "Guvi Geeks" },
  { person: "Raju", age: 4, company: "Guvi Geek Network" },
];
for(let i in object)
{
  console.log(`
    person: ${object[i].person}
    age: ${object[i].age}
    company: ${object[i].company}`
  )
}

// OUTPUT-

//     person: Mohan
//     age: 2
//     company: Guvi
// script.js:8 
//     person: Rohan
//     age: 3
//     company: Guvi Geeks
// script.js:8 
//     person: Raju
//     age: 4
//     company: Guvi Geek Network


// 3.FOR OF LOOP
// INPUT -
var object = [
  { person: "Mohan", age: 2, company: "Guvi" },
  { person: "Rohan", age: 3, company: "Guvi Geeks" },
  { person: "Raju", age: 4, company: "Guvi Geek Network" },
];
for(let i of object)
{
  console.log(`
    person: ${i.person}
    age: ${i.age}
    company: ${i.company}`
  )
}

// OUTPUT-

//     person: Mohan
//     age: 2
//     company: Guvi
// script.js:8 
//     person: Rohan
//     age: 3
//     company: Guvi Geeks
// script.js:8 
//     person: Raju
//     age: 4
//     company: Guvi Geek Network


// 4. FOR EACH LOOP
// INPUT -
var object = [
  { person: "Mohan", age: 2, company: "Guvi" },
  { person: "Rohan", age: 3, company: "Guvi Geeks" },
  { person: "Raju", age: 4, company: "Guvi Geek Network" },
];
object.forEach((i) => 
{
  console.log(`
    person: ${i.person}
    age: ${i.age}
    company: ${i.company}`
  )
});

// OUTPUT - 

//     person: Mohan
//     age: 2
//     company: Guvi
// script.js:8 
//     person: Rohan
//     age: 3
//     company: Guvi Geeks
// script.js:8 
//     person: Raju
//     age: 4
//     company: Guvi Geek Network


    
