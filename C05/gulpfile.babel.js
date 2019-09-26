// var gulp = require('gulp');
// const babel = require('gulp-babel');

// gulp.task('es6', () => {
//     return gulp.src('scripts/*.js')
//         .pipe(babel({
//             "presets": ["env"]
//         }))
//         .pipe(gulp.dest('scripts/build/'));
// });
const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify')
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

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
gulp.task('watch', async function() {
    gulp.watch('scripts/*.js', gulp.parallel('es6'));
});

gulp.task('default', gulp.parallel('es6', 'watch'));