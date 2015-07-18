var
  gulp = require('gulp'),
  g = require('gulp-load-plugins')(),
  postcss = require('gulp-postcss'),
  plugins = require('postcss-load-plugins')(),
  precss = require('precss');

gulp.task('styles', function (cb){
  var processors = [
    precss
  ];
  return gulp.src(['*.css'], {cwd: 'src/css'})
    .pipe(g.sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(g.sourcemaps.write('.'))
    .pipe(gulp.dest('build/stylesheets/'));
});

gulp.watch(['src/css/*.css', 'src/css/partials/*.css'], ['styles']);

gulp.task('default', ['styles']);

module.exports = gulp;
