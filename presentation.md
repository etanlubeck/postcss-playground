
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

# How does it work?
Small plain JS functions, which receive a CSS node tree, transform it, and return a modified tree.


---
# Installing

__Package__  
```npm install postcss```  

__Gulp__  
```npm install gulp-postcss```  


__CLI__  
```npm install -g postcss-cli```  



---
__Gulp__  

```javascript
gulp.task('css', function () {
    var postcss = require('gulp-postcss');
    return gulp.src('src/**/*.css')
        .pipe( postcss([ require('cssnext')(), require('cssnano')() ]) )
        .pipe( gulp.dest('build/') );
});
```

__API__  

```javascript
var postcss = require('postcss');
postcss([ require('cssnext')(), require('cssnano')() ])
    .process(css, { from: 'src/app.css', to: 'app.css' })
    .then(function (result) {
        fs.writeFileSync('app.css', result.css);
        if ( result.map ) fs.writeFileSync('app.css.map', result.map);
    });
```


__CLI__  

``` postcss --config config.json -o output.css input.css ```  

```javascript
{
    "autoprefixer": {
        "browsers": "> 5%"
    },
    "postcss-cachify": {
        "baseUrl": "/res"
    }
}
```  
___
