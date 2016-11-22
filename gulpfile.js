var gulp = require('gulp'),
    connect = require('gulp-connect'),
    jade = require('gulp-jade'),
    jshint = require('gulp-jshint');
 
gulp.task('hello', function() {
    console.log('Hello Gulp.js');
});

gulp.task('jade', function() {
    return gulp.src('client/views/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('client/'));
});

