var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("styles", async function() {
  gulp
    .src("styles/style.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("build"));
});

gulp.task('watch', function() {
  gulp.watch('styles/style.css', gulp.series('styles'));
});
