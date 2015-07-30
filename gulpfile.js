var
  gulp = require('gulp'),
  path = require('path'),
  postcss = require('gulp-postcss'),
  plugins = require('postcss-load-plugins')();

  plugins.precss = require('precss');
  plugins.cssnext = require('cssnext');
  plugins.autoprefixer = require('autoprefixer-core');
  plugins.csswring = require('csswring');


gulp.task('styles', function (cb){
  var processors = [
    plugins.autoprefixer('last 3 versions'),
    plugins.precss({mixins: { mixinsDir: path.join(__dirname, '/scripts/css/')}}),
    plugins.calc,
    plugins.cssnext
  ];
  gulp.src(['*.css'], {cwd: 'src/css'})
    .pipe(postcss(processors))
    .pipe(gulp.dest('build/stylesheets/'));

  cb();
});

gulp.watch(['src/css/*.css', 'src/css/partials/*.css'], ['styles']);

gulp.task('default', ['styles']);


module.exports = gulp;
