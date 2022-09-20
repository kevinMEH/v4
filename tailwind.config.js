const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
	content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./frames/**/*.{js,ts,jsx,tsx}",
    ],
	theme: {
        colors: {
            "transparent": "transparent",
            "current": "currentColor",

            "white": "#FFFFFF",
            "dark": "#1e1e1f",
            "black": "#000000",
            "off-white": "#EDEDF0",
            "off-black": "#3D3D3D",
            "main": {
                light: "#363B40",
                dark: "#acb4bd"
            },
            "sub": {
                light: "#4B5258",
                dark: "#949ba1"
            },
            "quiet": {
                light: "#5F6266",
                dark: "#888f94"
            }
        },
        fontFamily: {
            "inter": ["InterVariable", ...defaultTheme.fontFamily.sans],
            "mono": ["Fira CodeVariable", ...defaultTheme.fontFamily.mono],
        },
        screens: {
            "sm": "400px",
            "md": "600px",
            "lg": "700px"
        }
	},
	plugins: [],
};
