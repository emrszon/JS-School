var gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('es6', () => {
    return gulp.src('scripts/*.js')
        .pipe(babel({
            "presets": ["env"]
        }))
        .pipe(gulp.dest('scripts/build/'));
});