// function sum(n){
//     let result = 0;
//     for (let i = 0; i <= n; i++) {
//         result =+ i;





//     }
//     return result;
// }

// console.log(sum(4));










// function getSum(n){

//     if (n==1){
//         return n;
//     }
//     else{
//         return n + getSum(n-1)
//     }
// }

// console.log(getSum(3));












// function getFactorial(n){
//     if (n==1){
//         return n;
//     }else{
//         return n* getSum(n-1)
//     }
// }

// console.log(getFactorial(3));










// let students = ["Azer", "Huseyn", "Togrul"];

// students.forEach((elem, index) => {
//     console.log(elem + "-" + index);
// });

// for (let item of students){
//     console.log(item);
// }













// let users = [
// {
//     email: "Azerrh@code.edu.az",
//     password: "Necesen123"
// }, 
// {
//     email: "Huseynnt@code.edu.az",
//     password: "Necesen123"
// }, 
// {
//     email: "Orxanhn@code.edu.az",
//     password: "Necesen123"
// }];







// for (const key in users) {
//     console.log(key);
//     console.log(users[key]);
//     console.log(users[key].email);
// }



// for (const key in users) {
//     for (const key in users) {
//        console.log(key);
//     }
// }












// let book = {
//     name: "Xosrov",
//     author: "Nizami Gencevi",
//     pageCount:300
// }

// for (const key in book) {
//    console.log(key);
//    console.log(book[key]);
//    console.log(book[key].name);
// }










// let students = ["Azer", "Huseyn", "Orxan"];

// function getStudents(t,m,...arr){
//     for (const item of arr) {
//         console.log(item);
//     }

//     console.log(t + "-t");
//     console.log(m + "-m");
// }

// getStudents("Azer", "Huseyn", "Orxan");








// function evenNum(n){
//     return n % 2 == 0
// }

// function oddNum(n){
//     return n % 2 != 0
// }

// function thanThree(n){
//     return n >= 3;
// }

// let evenNum = n => n % 2 == 0;

// let oddNum = n => n % 2 != 0;

// let thanThree = n => n >= 3;


// function numsByConditions(arr, callback){
//     let sum=0;
//     for (const item of arr) {
//         if (callback(item)){
//             sum+=item
//         }
//     }
//     return sum;
// }















// function sumOddNums(arr, callback){
//     let sum=0;
//     for (const item of arr) {
//         if (callback(item)){
//             sum+=item
//         }
//     }
//     return sum;
// }

// function sumThanThree(arr, callback){
//     let sum=0;
//     for (const item of arr) {
//         if (callback(item)){
//             sum+=item
//         }
//     }
//     return sum;
// }









// console.log(sumThanThree([1,2,3,5,6,7,8,9,10], thanThree));

// console.log(sumOddNums([1,2,3,5,6,7,8,9,10], oddNum));

// console.log(sumEvenNums([1,2,3,5,6,7,8,9,10], evenNum));

// console.log(numsByConditions([1,2,3,5,6,7,8,9,10], evenNum));

// console.log(numsByConditions([1,2,3,5,6,7,8,9,10], n => n % 2 != 0));













// let numbers = [1,2,3,4,5,6,7,8,9,10,30,45,66,81];

// let filteredNumbers = numbers.filter(m=>m>8);










// function sumNumbers(arr){
//     let sum = 0;
//     for (const item of filteredNumbers) {
//         sum+=item;
//     }
//     return sum;
// }

// console.log(sumNumbers(filteredNumbers));



// let numbers = [1,2,3,4,5,6,7,8,9,10,30,45,66,81];

// console.log(numbers);

// numbers.forEach((item, index) => {
//         numbers[index] = item *2;
// });


// console.log(numbers);

// let result = numbers.map(m=>m*20);
// console.log(resuilt);

// console.log(numbers);







// let users = [
//     { name: "Azer", surname: "Humbetov", age:21 },
//     { name: "Huseyn", surname: "Necefov", age:22},
//     { name: "Orxan", surname: "Elekberov", age:26}
// ]

// let date = new Date();

// console.log(date);

// let result = users.map(m=>{
//     return {
//         fullname: `${m.name} ${m.surname}`,
//         yearOfBirth: date.getFullYear() - m.age
//     }
// })

// console.log(result); 