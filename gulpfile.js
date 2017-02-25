var gulp = require('gulp'),
    connect = require('gulp-connect'),
    pug = require('gulp-pug'),
    jshint = require('gulp-jshint'),
    exec = require('child_process').exec,
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    pump = require('pump');
 

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

gulp.task('compress', function(cb) {
    pump([
            gulp.src([
                'client/app.js',
                'client/app/app.js',
                'client/app/**/*.js',
                'client/function/**/*.js',
                'client/web3/*.js'
            ]),
            concat('all.js'),
            uglify(),
            gulp.dest('./dist/')
        ],
        cb
    );
});

gulp.task('watch', function() {
    gulp.watch('client/static/scss/*.scss', ['styles']);
    gulp.watch('client/views/*.pug', ['pugIndex']);
    gulp.watch('client/views/*/*.pug', ['pugOther']);
});

gulp.task('geth', function(cb) {
    exec('geth --identity "team9" --rpc --rpcaddr "0.0.0.0" --rpccorsdomain "*" --port "30303" --nodiscover --rpcapi "admin,personal,debug,eth,net,web3" --networkid 1900 --nat "any" --maxpeers 6 --autodag --mine --minerthreads 2', function(err) {
        if (err) {
            return cb(err);
        }
        cb();
    });
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
gulp.task('run', ['pugIndex', 'pugOther', 'geth', 'serve']);


