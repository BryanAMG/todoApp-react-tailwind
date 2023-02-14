/** srctype {import('tailwindcss').Config} */

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "check-bg":
                    "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
            },
        },
    },
    darkMode: "class",
    plugins: [],
};
