
class: middle, center  
color: red

# JS.LA: Module of the Month
## PostCSS


---
class: middle, center

# What is it?
preprocessor? postprocessor? linter?


---
class: middle, center

## CSS parser, a CSS node tree API, a source map generator, and a node tree stringifier


---

class: middle, center

# Installing

- Gulp: ``` npm install gulp-postcss ```
- CLI: ``` npm install -g postcss-cli ```


---

class: middle, center

## Gulp

```javascript
gulp.task('css', function () {
    var postcss = require('gulp-postcss');
    return gulp.src('src/**/*.css')
        .pipe( postcss([ require('cssnext')(), require('cssnano')() ]) )
        .pipe( gulp.dest('build/') );
});
```

## CLI

```javascript
var postcss = require('postcss');
postcss([ require('cssnext')(), require('cssnano')() ])
    .process(css, { from: 'src/app.css', to: 'app.css' })
    .then(function (result) {
        fs.writeFileSync('app.css', result.css);
        if ( result.map ) fs.writeFileSync('app.css.map', result.map);
    });
```

---
