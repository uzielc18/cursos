const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.vue',
        './resources/**/*.php',
        './resources/**/*.html',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],

    theme: {
        extend: {
            borderColor: (theme) => ({
                ...theme('colors'),
                DEFAULT: "#e5e5e5"
            }),
            colors:{

                'paprika': {
                    '50': '#f9f3f5',
                    '100': '#f4e7eb',
                    '200': '#e3c4cd',
                    '300': '#d3a0ae',
                    '400': '#b15872',
                    '500': '#901135',
                    '600': '#820f30',
                    '700': '#6c0d28',
                    '800': '#560a20',
                    '900': '#47081a'
                },


            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            container:{
                center: true,
            },
            screens: {
                'mini': '320px',
                '3xs': '375px',
                '2xs': '414px',
                'xs': '540px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'lgx': '1120px',
                'xl': '1280px',
                '2xl': '1440px',
                '3xl': '1536px',
                'big': '1600px',
            }
        },
    },

    variant: {
        extend: {
            opacity:['disabled'],
            zIndex:['responsive','hover'],
            position:['responsive','hover'],
            padding:['responsive','last'],
            margin:['responsive','last'],
        }
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
