
class: middle, center  
background-color: 

# JS.LA: Module of the Month
## PostCSS


---
class: middle, center

# What is it?
## PostCSS is a tool for transforming CSS with JS plugins. 
These plugins can support variables and mixins, transpile future CSS syntax, inline images, and more.


---
class: middle, center

## CSS parser, a CSS node tree API, a source map generator, and a node tree stringifier


---

# Installing
Package: ``` npm install postcss ```  
Gulp: ``` npm install gulp-postcss ```  
CLI: ``` npm install -g postcss-cli ```  



---


## Gulp

```javascript
gulp.task('css', function () {
    var postcss = require('gulp-postcss');
    return gulp.src('src/**/*.css')
        .pipe( postcss([ require('cssnext')(), require('cssnano')() ]) )
        .pipe( gulp.dest('build/') );
});
```

## API

```javascript
var postcss = require('postcss');
postcss([ require('cssnext')(), require('cssnano')() ])
    .process(css, { from: 'src/app.css', to: 'app.css' })
    .then(function (result) {
        fs.writeFileSync('app.css', result.css);
        if ( result.map ) fs.writeFileSync('app.css.map', result.map);
    });
```

