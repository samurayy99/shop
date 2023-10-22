const mix = require('laravel-mix');

// Compile only existing CSS and JS files from resources directory
// Make sure to place your actual CSS and JS files in the resources directory

mix.styles([
    // 'resources/css/existing-file-1.css',
    // 'resources/css/existing-file-2.css',
    // ... other existing CSS files
], 'public/css/all.css');

mix.scripts([
    // 'resources/js/existing-file-1.js',
    // 'resources/js/existing-file-2.js',
    // ... other existing JS files
], 'public/js/all.js');
