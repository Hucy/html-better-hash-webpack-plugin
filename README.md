# 作废
 发现已有更好的方案


## HTML better hash Webpack Plugin

the better hash for `html-webpack-plugin`

### Installation

  Install the plugin with npm:

  `$ npm install html-better-hash-webpack-plugin --save-dev`


### Basic Usage

The plugin will setting better hash for `html-webpack-plugin`,you must install [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin/) and add the plugin to your webpack
config as follows:

```javascript
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlBetterHash = require('html-better-hash-webpack-plugin')
var webpackConfig = {
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash:true
    }),
    new HtmlBetterHash()
  ]
};
```
This will generate a file `dist/index.html` containing the following:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Webpack App</title>
  </head>
  <body>
    <script src="index_bundle.js"></script>
  </body>
</html>
```
