
// function getTotal(numbers:Array<number>){
//     return numbers.reduce((acc,item)=>{
//         return acc + item;
//     },0);
// };


// console.log(getTotal([2,3,1])); 



// const user = {
//     firstName:"Raza",
//     lastName:"Ali",
//     role:"Developer"
// };   


// console.log(user);




// number
// string
// array[]
// boolean


// Type alias
// type User = {
//     name: string,
//     age: number,
//     address?: string
// };



// function login(userData: User): User {
//     return userData;
// };


// const user: User = {
//     name: "Raza A",
//     age: 22,
//     // address: "main street"
// };

// console.log(login(user));


// type ID = number | string;

// const userId:ID = '123';




// Interfaces

// interface Transaction {
//     payerAccountNumber:number;
//     payeeAccountNumber:number;
// };

// interface BankAccount{
//     accountNumber:number;
//     accountHolder:string;
//     balance:number;
//     isActive:boolean;
//     transactions:Transaction[];
// };

//  const transaction1:Transaction = {
//     payerAccountNumber:1234,
//     payeeAccountNumber:455
//  };

//  const transaction2:Transaction = {
//     payerAccountNumber:1234,
//     payeeAccountNumber:455
//  };

// const bankAccount:BankAccount = {
//     accountNumber:123,
//     accountHolder:"Raza Ali",
//     balance:4000,
//     isActive:true,
//     transactions:[transaction1,transaction2]
// };

// console.log(bankAccount);

// Extends
// interface Book {
//     name:string;
//     price:number;
// };

// interface EBook extends Book {
//     // name:string;
//     // price:number;
//     fileSize:number;
//     format:string;
// };

// interface AudioBook extends EBook {
//     // name:string;
//     // price:number;
//     // fileSize:number;
//     // format:string;
//     duration:number;
// }

// const book:AudioBook = {
//     name:"Atomic Habits",
//     price:2200,
//     fileSize:300,
//     format:"pdf",
//     duration:5
// };

// console.log(book);


// Merge
// interface Book {
//     name: string;
//     price: number;
// };

// interface Book {
//     size:number;
// }

// const book: Book = {
//     name: "Atomic Habits",
//     price: 3000,
//     size: 399
// };



// types are not allowing the merging 
// type Book = {
//     name:string;
//     price:number;
// }

// type Book = {
//     size:9000
// }


// type SaniTizedString = string;
// type EvenNumber = number;

// interface X extends string{

// };


// Unions
// type ID = number | string;

// // Narrowing
// function printId(id: ID) {
//     if (typeof id === "string") {
//         console.log(id.toUpperCase());
//     }else{
//         console.log(id)
//     };
// };

// console.log(printId('3'));

// function getFirstThree(x:string | number[]){
//     return x.slice(0,3);
// };


// console.log(getFirstThree([1,2,3,4,5,6,7,8]));



// Generics

// function logString(arg:string){
//     console.log(arg);
//     return arg;
// };

// function logNumber(arg:number){
//     console.log(arg);
//     return arg;
// }

// function logArray(arg:any[]){
//     console.log(arg);
//     return arg;    
// }

// Don't use any keywords in typescript
// function logAnyThing(arg:any){
//     console.log(arg);
//     return arg;
// };


// console.log(logString("logged in"));
// console.log(logNumber(33));
// console.log(logArray([1,2,3,4,5]));
// console.log(logAnyThing("Pring anything")); // Don't use any , bcz we are using typescript not javascript


// function logAnyThing<T>(arg: T): T {
//     console.log(arg);
//     return arg;
// };

// logAnyThing([3]);


// interface HasAge {
//     age: number;
// };

// function getOldest<T extends HasAge>(persons: T[]): T {
//     return persons.sort((a, b) => b.age - a.age)[0];
// };

// const persons = [
//     { age: 30 },
//     { age: 34 },
//     { age: 23 },
//     { age: 15 },
//     { age: 90 },
//     { age: 80 },
//     { age: 101 }
// ];
// console.log(getOldest(persons).age);

// interface Players{
//     name:string;
//     age:number;
// }

// const players:Players[] = [
//     { name: "John Doe", age: 34 },
//     { name: "Alex Hales", age: 27 },
//     { name: "Alisa Doe", age: 70 },
//     { name: "Andrew Foul", age: 21 },
//     { name: "James Kurus", age: 98 },
//     { name: "Jose Elison", age: 58 },
// ];

// Assertion
// const pers = getOldest(players) as Players;
// console.log(pers.name," , ",pers.age);

// Generics

// const pers = getOldest(players);
// console.log(pers.name);


// interface IPost {
//     title: string;
//     id: number;
//     description: string;
// };

// interface IUser {
//     name:string;
//     id:number;
//     age:number;
// }

// const fetchPostData = async (path: string): Promise<IPost[]> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json()
// };

// ; (async () => {
//     const posts = await fetchPostData('/posts');
//     posts[0];
// })();

// const fetchUserData = async (path:string):Promise<IUser[]> =>{
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// }

// ;(async ()=>{
//     const user = await fetchUserData("/user");
//     user[0]
// })();

// const fetchData = async <ResultType>(path:string):Promise<ResultType>=>{
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// };

// ;(async()=>{
//     // const posts = await fetchData<IPost[]>("/posts")
//     // posts[0]
//     const user =  await fetchData<IUser[]>("/user");
//     user[0]
// })();



// Structural and Duck typing 

// interface ICreadential{
//     username:string;
//     password:string;
//     isAdmin?:boolean;
// }

// function login(creadential:ICreadential):boolean{
//     console.log(creadential);
//     return true;
// }

// const user = {
//     username:"ali",
//     password:"ali123",
//     isAdmin:true
// }

// login(user);

// interface IAuth {
//     username: string;
//     password: string;
//     login(username: string, password: string): void;
// }

// const auth:IAuth = {
//     username: "raza",
//     password: "secret",
//     login(username: string, password: string) {
//         //
//     }
// }


// inference

// let num = '2';




