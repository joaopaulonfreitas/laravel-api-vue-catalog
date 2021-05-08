const mix = require('laravel-mix');
const domain = process.env.APP_DOMAIN

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .browserSync({
        host: domain,
        proxy: domain,
        files: [
            'app/**/*',
            'config/**/*',
            'public/**/*',
            'resources/views/**/*',
            'resources/lang/**/*',
            'routes/**/*',
        ],
    });
