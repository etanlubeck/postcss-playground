var
  gulp = require('gulp'),
  path = require('path'),
  postcss = require('gulp-postcss'),
  plugins = require('postcss-load-plugins')();
  plugins.precss = require('precss');


gulp.task('styles', function (){
  var processors = [
    plugins.mixins,
    plugins.precss,
    plugins.calc
  ];
  return gulp.src(['*.css'], {cwd: 'src/css'})
    .pipe(postcss(processors))
    .pipe(gulp.dest('build/stylesheets/'));
});

gulp.watch(['src/css/*.css', 'src/css/partials/*.css'], ['styles']);

gulp.task('default', ['styles']);


module.exports = gulp;
