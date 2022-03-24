module.exports = {
    purge: {
        content: [
            "./src/pages/**/*.{js,ts,jsx,tsx}",
            "./src/components/**/*.{js,ts,jsx,tsx}",
        ],
        safelist: [
            /^gb-/,
            /^to-/,
            /^from-/,
        ]
    },
    theme: {
        extend: {},
    },
    plugins: [],
}