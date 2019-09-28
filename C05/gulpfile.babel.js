const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify')
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('es6', async() => {
    return browserify('scripts/scripts.js')
        .transform('babelify', {
            presets: ['env']
        })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('scripts/build/'));
});


gulp.task('sass', async function() {
    return gulp.src('./css/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', async function() {
    gulp.watch('scripts/*.js', gulp.parallel('es6'));
    gulp.watch('./css/*.scss', gulp.parallel('sass'));
});
gulp.task('default', gulp.parallel('es6', 'watch', 'sass'));