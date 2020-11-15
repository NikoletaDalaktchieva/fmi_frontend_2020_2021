
// 1.1
let A = [10, 5, 13, 18, 51];

A.forEach(el => console.log(el));

// 1.2
let B = Array.from(A, el => el * 2);

console.log(B);

// 1.3
console.log(A.filter(el => !(el % 2)));

// 1.4
console.log(A.some(el => el < 10));
console.log(B.some(el => el < 10));

// 1.5
console.log(A.filter(el => !(el % 3)));

// 1.6
console.log(A.reduce((accumulator, currentValue) => accumulator + currentValue));

// 1.7
B = A.slice(A.length - 2, A.length);

console.log(B);

// 2.1

let dates = Array.of(new Date());

console.log(dates);

// 2.2
let date = new Date();
date.setFullYear(2018, 11, 08);
date.setHours(19, 0, 0, 0);

dates.push(date);

console.log(dates);

// 2.3

let getDay = (d) => d.getDay();
let getMonthLength = (d) => new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();


let daysOfWeek = dates.map(getDay);

console.log(daysOfWeek);

// 2.4

var weekday = ["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"];

let dateStrings = dates.map(d => "Дата: " + d.getUTCDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear() + ", час: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ", " + weekday[getDay(d)] + ", " + getMonthLength(d) + " дни");

console.log(dateStrings);
