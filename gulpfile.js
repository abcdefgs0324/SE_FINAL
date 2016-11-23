var gulp = require('gulp'),
    connect = require('gulp-connect'),
    jade = require('gulp-jade'),
    jshint = require('gulp-jshint'),
    exec = require('child_process').exec;
 

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

gulp.task('jshint', function() {
    return gulp.src('client/app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('serve', function(cb) {
    exec('node client/app.js', function(err) {
        if (err) {
            return cb(err);
        }
        cb();
    });
});
