//create 3 strings
var s1="This is a Node JS";
var s2=new String("I like it.");
s3="Softege";
console.log(" s1 :"+s1);
console.log(" s2 :"+s2);
console.log(" s3 :"+s3);
console.log(" Length of s1       :"+s1.length);
console.log(" s1.concat(s2)      :"+s1.concat(s2));
console.log(s1+" at "+s3);
console.log("s1 in upper case    :"+s1.toUpperCase());
console.log("s1 in lower case    :"+s1.toLowerCase());
console.log("s1.indexOf('i')     :"+s1.indexOf('i'));
console.log("s1.lastIndexOf('i') :"+s1.lastIndexOf('i'));
console.log(" s1.charAt(10)      :"+s1.charAt(10));
var p=s2.substring(0,7);
var q=s3.substring(0);
console.log("(p+q) "+(p+q));
console.log(" s1.substring(3,4) :"+s1.substring(3,4));
console.log(" s1.substr(3,4)    :"+s1.substr(3,4));
console.log("Result             :"+(s1==s2));
console.log("s1==s1             :"+(s1==s1));
console.log("s1.compareTo(s2)   :"+s1.localeCompare(s2));
console.log("s1.compareTo(s1)   :"+s1.localeCompare(s1));
console.log("s2.compareTo(s1)   :"+s2.localeCompare(s1));
console.log(10+10);
console.log(""+10+10);
console.log(typeof(""+(10+10)));



