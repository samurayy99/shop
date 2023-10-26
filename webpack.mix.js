let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .js('resources/js/auth-login.js', 'public/js')
   .js('resources/js/auth-register.js', 'public/js')
   .js('resources/js/custom.js', 'public/js')
   .styles(['resources/css/app.css'], 'public/css/app.css');