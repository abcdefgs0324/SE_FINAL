var gulp = require('gulp'),
    connect = require('gulp-connect'),
    pug = require('gulp-pug'),
    jshint = require('gulp-jshint'),
    exec = require('child_process').exec,
    sass = require('gulp-sass');
 

gulp.task('hello', function() {
    console.log('Hello Gulp.js');
});

gulp.task('pugIndex', function() {
    return gulp.src('client/views/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('client/'));
});

gulp.task('pugOther', function() {
    return gulp.src('client/views/*/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('client/app/'));
});

gulp.task('lint', function() {
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
    gulp.watch('client/views/*.pug', ['pugIndex']);
    gulp.watch('client/views/*/*.pug', ['pugOther']);
});

gulp.task('serve', function(cb) {
    exec('node client/app.js', function(err) {
        if (err) {
            return cb(err);
        }
        cb();
    });
});

gulp.task('pug', ['pugIndex', 'pugOther']);
gulp.task('run', ['pugIndex', 'pugOther', 'serve']);


