module.exports = {
	content: [],
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/common/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				mainBg: '#F5F5F5',
				yellowBg: '#F8B400',
				blueDark: '#0B00AE',
				mcq: '#F6F9FF',
				blueDark: '#4141f9',
				grayLight: '#c1c1c1',
				submissionCard: '#f6f8ff',
				grayDark: '#D0D6EE',
				grayBorder: '#DADADA',
				gray99: '#999999',
			},
			fontFamily: {
				lato: ['Lato', 'sans-serif'],
			},
			lineClamp: {
				3: '3',
				12: '12',
			},
			screens: {
				sm: { max: '639px' },
			},
		},
	},

	plugins: [require('@tailwindcss/line-clamp')],
};
