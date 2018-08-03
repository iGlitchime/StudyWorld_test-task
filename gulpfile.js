let gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  clean = require('gulp-clean-css');



gulp.task('sass', () => {
  gulp.src('src/assets/scss/**.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(clean())
    .pipe(gulp.dest('build'));
});

gulp.task('watch', () => {
  gulp.watch('src/assets/scss/**.scss', ['sass']);
});

gulp.task('default', ['watch']);