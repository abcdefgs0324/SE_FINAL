var gulp = require('gulp'),
    connect = require('gulp-connect'),
    jade = require('gulp-jade'),
    jshint = require('gulp-jshint'),
    exec = require('child_process').exec,
    sass = require('gulp-sass');
 

gulp.task('hello', function() {
    console.log('Hello Gulp.js');
});

gulp.task('jadeIndex', function() {
    return gulp.src('client/views/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('client/'));
});

gulp.task('jadeOther', function() {
    return gulp.src('client/views/*/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('client/app/'));
});

gulp.task('jshint', function() {
    return gulp.src('client/app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('styles', function() {
    return gulp.src('client/static/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('client/static/css/'));
});

gulp.task('watch', function() {
    gulp.watch('client/static/scss/*.scss', ['styles']);
    gulp.watch('client/views/*.jade', ['jadeIndex']);
    gulp.watch('client/views/*/*.jade', ['jadeOther']);
});

gulp.task('serve', function(cb) {
    exec('node client/app.js', function(err) {
        if (err) {
            return cb(err);
        }
        cb();
    });
});

gulp.task('jade', ['jadeIndex', 'jadeOther']);
gulp.task('run', ['jadeIndex', 'jadeOther', 'serve']);


