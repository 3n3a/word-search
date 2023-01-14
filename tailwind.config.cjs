module.exports = {
    content: [
        './src/**/*.{svelte,js,ts}',
        './src/app.html'
    ],
    plugins: [require("@tailwindcss/typography"), require('daisyui')],
    daisyui: {
        themes: ["night"],
        darkTheme: "night",
    }
};
  