// var points = [40, 100, 1, 5, 25, 10, 1005];
// console.log(points.sort(function (a, b) { return a - b }));


// let students = [
//     { name: "Heyder", surname: "Elekberli" },
//     { name: "Parvin", surname: "Pashazade" },
//     { name: "Ayaz", surname: "Mehdiyev" },
//     { name: "Elnur", surname: "Hasanzade" },
//     { name: "Rauf", surname: "Allahverdiyev" },
//     { name: "Rauf", surname: "Qocayev" }
// ];

// // console.log(sortByName(students));
// console.log(sortBySurname(students));

// function sortByName(arr) {
//     arr.sort(
//         function (a, b) {
//             let nameA = a.name.toLowerCase();
//             let nameB = b.name.toLowerCase();
//             if (nameA < nameB) {
//                 return -1;
//             }
//             if (nameA > nameB) {
//                 return 1;
//             }

//             return 0;
//         }
//     );
//     return arr;
// }

// function sortBySurname(arr) {
//     arr.sort(
//         function (a, b) {
//             let surnameA = a.surname.toLowerCase();
//             let surnameB = b.surname.toLowerCase();
//             if (surnameA < surnameB) {
//                 return -1;
//             }
//             if (surnameA > surnameB) {
//                 return 1;
//             }

//             return 0;
//         }
//     );
//     return arr;
//  }



let counter = 0;
var numbers1 = [45, 4, 9, 16, 25, 16, 4];
var a = numbers1.lastIndexOf(4);
console.log(a);

// var numbers2 = numbers1.filter(myFunction);
// console.log(numbers2);
// function myFunction(value, index, array) {
//     console.log(value, index, array);
//     if(index > 1 && index < 5){
//         return true;
//     }
// }
// var sum = numbers1.reduce(myFunction);
// console.log(sum);
// function myFunction(total, value, index, array) {
//   return total + value;
// }
