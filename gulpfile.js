var gulp = require('gulp'),
    connect = require('gulp-connect'),
    pug = require('gulp-pug'),
    jshint = require('gulp-jshint'),
    exec = require('child_process').exec,
    sass = require('gulp-sass'),
    pump = require('pump');
 

gulp.task('hello', function() {
    console.log('Hello Gulp.js');
});

gulp.task('pugIndex', function(cb) {
    pump([
            gulp.src('client/views/*.pug'),
            pug({ pretty: true }),
            gulp.dest('client/')
        ],
        cb
    );
});

gulp.task('pugOther', function(cb) {
    pump([
            gulp.src('client/views/*/*.pug'),
            pug({ pretty: true }),
            gulp.dest('client/app/')
        ],
        cb
    );
});

gulp.task('lint', function(cb) {
    pump([
            gulp.src('client/app/**/*.js'),
            jshint(),
            jshint.reporter('jshint-stylish')
        ],
        cb
    );
});

gulp.task('styles', function(cb) {
    pump([
            gulp.src('client/static/scss/*.scss'),
            sass(),
            gulp.dest('client/static/css/')
        ],
        cb
    );
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


