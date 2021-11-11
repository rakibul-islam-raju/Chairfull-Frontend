const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				orange: colors.orange,
				coolGray: colors.coolGray,
			},
			fontFamily: {
				lora: "'Lora', serif",
				dm: "'DM Mono', monospace",
				poppins: "'Poppins', sans-serif",
				dancing: "'Dancing Script', cursive",
			},
		},
	},
	variants: {
		extend: {
			visibility: ["hover", "focus", "group-hover"],
			scale: ["active", "hover", "group-hover"],
			transform: ["hover", "group-hover"],
			translate: ["hover", "group-hover"],
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
