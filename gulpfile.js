var gulp = require('gulp');
var sass = require('gulp-sass');

// compile the sass in the current directory
gulp.task('sass', function(){
    return gulp.src('./styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./styles'))
});

gulp.task('default',
gulp.series(['sass']));

