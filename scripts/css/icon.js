var fs = require('fs'),
  postcss = require('postcss');
module.exports = function(mixin, dir) {
  fs.readdirSync('src/images/' + dir).forEach(function (file) {

      var icon = file.replace(/\.svg$/, '');
      var rule = postcss.rule('.icon.icon-' + icon);

      rule.append({
          prop:  'background',
          value: 'url(' + dir + '/' + file +')'
      });

      mixin.replaceWith(rule);
  });
};
