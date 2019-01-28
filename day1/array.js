var cities=["PUNE","MUMBAI","DELHI","NOIDA"];

var films=new Array(3);

films[0]="SHOLAY";
films[1]="ANAND";
films[2]="GHAYAL";

console.log("Cities :"+cities);
console.log("Films :"+films);
console.log("=============================")
console.log("Cities :"+cities.toString());
console.log("Films :"+films.toString());

films.push("GHATAK");
films.push("GADAR");

cities.pop();
cities.pop();

console.log("After removal & push======================");
console.log("Cities :"+cities);
console.log("Films :"+films);

films.sort();

console.log("After sort =================");
console.log("Cities :"+cities);
console.log("Films :"+films);

films.reverse();

console.log("After reversing ====================");
console.log("Cities :"+cities);
console.log("Films :"+films);



console.log("==================");
for(i=0;i<films.length;i++)
console.log("*** :"+films[i]);

console.log("===================");
for(i in films)
console.log("### :"+films[i]);




console.log("====================");
var names=new Array(3);
names[0]="Pradeep";

for(i in names)
console.log("### :"+names[i]);


for(i=0;i<names.length;i++)
console.log("*** :"+names[i]);

console.log("ForEach Demo...==========================");
films.forEach(function(element,index) {
 console.log(element,index) ;  
});


var s=films.filter(function(element){
return element.charAt(element.length-1)=='D';
});

console.log("Display movies with last char as D \n============================");
console.log(s);





films.map(function(element,index){
if(element=="SHOLAY" || element=="ANAND"){
films[index]=films[index].toLowerCase();
console.log(element+"  "+index+"   "+true);}
}
);

console.log("updaed....--------------------------");
console.log(films);
