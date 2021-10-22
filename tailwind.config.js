const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/views/**/*.php',
        './resources/views/**/*.html',
        './resources/views/**/*.js',
        './resources/views/**/*.vue',
        './src/**/*.php',
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.vue',
    ],

    theme: {
        borderColor: (theme)=>({
            ...theme('colors'),DEFAULT:'#e5e5e5'
        }),
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],
};
