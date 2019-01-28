gulp=require("gulp");

gulp.task("write",function(){
console.log("write TypeScript file....")
});

gulp.task("save",function(){
console.log("save TypeScript file....")
});

gulp.task("complied",function(){
console.log("complied TypeScript file....")
});

gulp.task("move",function(){
console.log("move genrated js file in output folder....")
});

gulp.task("embed",function(){
console.log("embed js file in html....")
});

gulp.task("run",function(){
console.log("run angular app....")
});

gulp.task("default",["write","save","move","complied"],function(){
console.log("welcome to Gulp app...")
});

gulp.task("default",function(){
console.log("welcome to Gulp app...")
});