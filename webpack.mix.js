const mix = require('laravel-mix');
const {postCss} = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'js')
    .sass('resources/scss/app.scss', 'css')
    .setPublicPath('public')
    .options({
        postCss:[
        require('postcss-import'),
        require('tailwindcss'),
        ],
    })
    .copyDirectory('resources/images','public/image');

if (mix.inProduction()) {
    mix.version();
}else{
    mix.browserSync({
        proxy: 'localhost:8000'
    });
}
