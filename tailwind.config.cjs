/** srctype {import('tailwindcss').Config} */

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "desk-dark": "url('./src/assets/images/bg-desktop-dark.jpg')",
                "desk-light": "url('./src/assets/images/bg-desktop-light.jpg')",
                "mobile-dark": "url('./src/assets/images/bg-mobile-dark.jpg')",
                "mobile-light":
                    "url('./src/assets/images/bg-mobile-light.jpg')",
                "check-bg":
                    "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
            },
        },
    },
    darkMode : 'class',
    plugins: [],
};
