var gulp = require('gulp');
var sass = require('gulp-sass');  
var minifyCSS = require('gulp-minify-css');  
// Minification dependencies
var minifyHTML = require('gulp-minify-html'); // Minify HTML  
var concat = require('gulp-concat'); // Join all JS files together to save space  
var stripDebug = require('gulp-strip-debug'); // Remove debugging stuffs  
var uglify = require('gulp-uglify'); // Minify JavaScript  
var imagemin = require('gulp-imagemin'); // Minify images  
var browserSync = require('browser-sync'); // Reload the browser on file changes  
//var jshint = require('jshint'); // Debug JS files  
var jshint = require('gulp-jshint'); // Debug JS files  

var stylish = require('jshint-stylish'); // More stylish debugging  
var size = require('gulp-size'); // Get the size of the project  


gulp.task('A', function() {  
 console.log("A Task");
 });


gulp.task('B', function() {  
 console.log("B  Task");
 });

gulp.task('C', function() {  
 console.log("C Task");
 });

gulp.task('default',["A","B","C"], function() {  
 console.log("Default  Task Executed ");
 });





// Task to compile Sass file into CSS, and minify CSS into build directory
gulp.task('styles', function() {  
  gulp.src('./app/saas/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/styles/'));
});









// Task to minify new or changed HTML pages
gulp.task('html', function() {  
  return gulp.src('./app/*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./build/html'));
});




// Task to minify images into build
gulp.task('images', function() {  
  gulp.src('./app/images/*')
  .pipe(imagemin({
    progressive: true,
  }))
  .pipe(gulp.dest('./build/images'));
});


// Task to concat, strip debugging and minify JS files
gulp.task('scripts', function() {  
  gulp.src(['./app/scripts/lib.js', './app/scripts/*.js'])
    .pipe(concat('script.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts/'));
});




// Task to run JS hint
gulp.task('jshint', function() {  
  gulp.src('./app/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});



// Task to run JS hint (with some style)
gulp.task('jshint1', function() {  
  gulp.src('./app/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});


// Task to get the size of the app project
gulp.task('size', function() {  
  gulp.src('./app/**')
    .pipe(size({
    showFiles: false,
  }));
});




// Task to get the size of the build project
gulp.task('build-size', function() {  
  gulp.src('./build/**')
  .pipe(size({
    showFiles: false,
  }));
});


/*
Serving your application
Now finally we want to be able to run our application on a server and for the browser to automatically reload every time we make a change to any file. Let's install browser-sync and add it to the gulpfile to start this off.
*/

// Serve application
gulp.task('server', ['styles', 'html', 'scripts', 'images','size'], function() {  
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  });
});


// Run all Gulp tasks and serve application
gulp.task('default1', ['server', 'styles'], function() {  
  gulp.watch('app/sass/**/*.scss', ['styles']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/scripts/**/*.js', browserSync.reload);
});




/*
npm install -g gulp

npm init

npm install --save-dev gulp

npm install --save-dev gulp-sass


npm install --save-dev gulp-minify-css

npm install gulp-minify-html --save-dev

npm install gulp-concat --save-dev

npm install gulp-strip-debug --save-dev

npm install gulp-uglify --save--dev

npm install gulp-imagemin --save-dev

npm install -g jshint

npm install gulp-jshint --save-dev

npm install jshint-stylish --save-dev
*/