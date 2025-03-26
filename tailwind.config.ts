import type { Config } from "tailwindcss";
import tailwindcss_animated from "tailwindcss-animated";
import tailwindcss_animate from "tailwindcss-animate";
import colors from "tailwindcss/colors";

const config: Config = {
	// darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/layouts/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			textShadow: {
				solid: "-1px -1px 0 var(--tw-shadow-color), 1px -1px 0 var(--tw-shadow-color),-1px 1px 0 var(--tw-shadow-color),1px 1px 0 var(--tw-shadow-color);",
				sm: "0 1px 2px var(--tw-shadow-color)",
				DEFAULT: "0 2px 4px var(--tw-shadow-color)",
				lg: "0 8px 16px var(--tw-shadow-color)"
			},
			keyframes: {
				blink: {
					"0%, 100%": {
						"text-decoration-color": "transparent"
					},
					"50%": {
						"text-decoration-color": "currentColor"
					}
				},
				"border-top": {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(300%)" }
				},
				"border-right": {
					"0%": { transform: "translateY(-100%)" },
					"100%": { transform: "translateY(300%)" }
				},
				"border-bottom": {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(-300%)" }
				},
				"border-left": {
					"0%": { transform: "translateY(100%)" },
					"100%": { transform: "translateY(-300%)" }
				}
			},
			animation: {
				blink: "blink 1.2s step-start infinite",
				"border-top": "border-top 2s infinite linear",
				"border-right": "border-right 2s infinite linear 0.5s",
				"border-bottom": "border-bottom 2s infinite linear 1s",
				"border-left": "border-left 2s infinite linear 1.5s"
			},

			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},

			colors: {
				headerButtonColor: "#F78154",
				borderColor: "#404040",
				// Background
				"base-100": colors.zinc[950],
				// Primary title
				"base-content": colors.zinc[200],
				// Subtitle
				"secondary-content": colors.zinc[300],
				// Button etc.
				"base-200": "#0e0e10",
				"base-300": "#141414",
				// Text color
				color: colors.zinc[100],
				//
				// "#54E210""#42CA13" "#368f00"
				accent: "#42CA13",
				"accent-content": colors.zinc[800],
				error: colors.red[600],
				"error-content": colors.zinc[800],
				info: "#0EA5E9",
				success: "#22C55E",
				warning: "#F59E0B"
			}
		},
		// Common breakpoints are 320px — 480px for mobile devices, 481px — 768px for iPads & tablets, 769px — 1024px for small screens like laptop, 1025px — 1200px for large screens like Desktops, and 1201px and above for extra large screens.
		screens: {
			xs: "320px",
			sm: "360px",
			md: "480px"
		}
	},
	plugins: [
		tailwindcss_animated,
		// plugin(({ matchUtilities, theme }: { matchUtilities: any; theme: any }) => {
		// 	matchUtilities(
		// 		{
		// 			"text-shadow": (value: any) => ({
		// 				textShadow: value
		// 			})
		// 		},
		// 		{ values: theme("textShadow") }
		// 	);
		// }),
		tailwindcss_animate
	]
};

export default config;
