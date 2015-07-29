var
  gulp = require('gulp'),
  fs = require('fs'),
  path = require('path'),
  g = require('gulp-load-plugins')(),
  ifElse = require('gulp-if-else'),
  postcss = require('gulp-postcss'),
  plugins = require('postcss-load-plugins')();
  plugins.precss = require('precss');
  plugins.cssnext = require('cssnext');
  plugins.autoprefixer = require('autoprefixer-core');
  plugins.csswring = require('csswring');

gulp.task('styles', function (cb){
  var processors = [
    plugins.autoprefixer('last 3 version'),
    plugins.mixins({mixinsDir: path.join(__dirname, '/scripts/css/')}),
    plugins.precss,
    plugins.calc,
    plugins.cssnext
  ];
  return gulp.src(['*.css'], {cwd: 'src/css'})
    .pipe(g.sourcemaps.init())
    .pipe(ifElse(process.env.NODE_ENV === 'production', function() { processors.push(plugins.csswring); return postcss(processors);}, function() { return postcss(processors);}))
    .pipe(g.sourcemaps.write('.'))
    .pipe(gulp.dest('build/stylesheets/'));
});

gulp.watch(['src/css/*.css', 'src/css/partials/*.css'], ['styles']);

gulp.task('default', ['styles']);


module.exports = gulp;
