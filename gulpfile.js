const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "scr"
        }
    });
});

gulp.task('style',function(){
    return gulp.src("scr/sass/*.+(scss|sass)")
    .pipe()
})