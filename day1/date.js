var d=new Date();
//var d=new Date("July 11, 2021 11:45:00") 
//var d=new Date("July 31, 1982")
var d=new Date(2050,08,11,11,55,11) 
//var d=new Date(2020,07,11)
console.log("Today is :"+d);
console.log("Today is :"+d.toString());
console.log(d);

console.log("Locale Date String :"+d.toLocaleString());

console.log("Date     :"+d.getDate());
console.log("Month    :"+d.getMonth());
console.log("Year     :"+(d.getYear()+1900));
console.log("Year     :"+d.getFullYear());
console.log("Hours    :"+d.getHours());
console.log("Minutes  :"+d.getMinutes());
console.log("Seconds  :"+d.getSeconds());
console.log("Time     :"+d.getTime());


