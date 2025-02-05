tailwind.config = {
    theme: {
        extend: {
            colors: {
                // Primary Colors
                SoftOrange: 'hsl(35, 77%, 62%)',
                SoftRed: 'hsl(5, 85%, 63%)',

                // Neutral Colors
                OffWhite: 'hsl(36, 100%, 99%)',
                GrayishBlue: 'hsl(233, 8%, 79%)',
                DarkGrayishBlue: 'hsl(236, 13%, 42%)',
                VeryDarkBlue: 'hsl(240, 100%, 5%)',
            },
        },
        fontFamily: {
            Inter: ['Inter', 'serif'], // 400, 700, 800
        },
    },
    plugins: [],
}