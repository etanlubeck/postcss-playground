
class: middle, center  
background-color: #f5dd3d  

# JS.LA: Module of the Month
## PostCSS


---
class: middle, center  
background-color: #f5dd3d  

# What is it?
## PostCSS is a tool for transforming CSS with JS plugins. 
These plugins can support variables and mixins, transpile future CSS syntax, inline images, and more.


---
class: middle, center  
background-color: #f5dd3d  

# How does it work?
Small plain JS functions, which receive a CSS node tree, transform it, and return a modified tree.


---
background-color: #f5dd3d  
# How do I use it?

__Package__  
```npm install postcss```  
```javascript
var postcss = require('postcss');
postcss([ require('cssnext')(), require('cssnano')() ])
    .process(css, { from: 'src/app.css', to: 'app.css' })
    .then(function (result) {
        fs.writeFileSync('app.css', result.css);
        if ( result.map ) fs.writeFileSync('app.css.map', result.map);
    });
```

__Gulp__  
```npm install gulp-postcss```  

```javascript
gulp.task('css', function () {
    var postcss = require('gulp-postcss');
    return gulp.src('src/**/*.css')
        .pipe( postcss([ require('cssnext')(), require('cssnano')() ]) )
        .pipe( gulp.dest('build/') );
});
```  
---
class: middle, center  
background-color: #f5dd3d  

# Fin


@etanlubeck
