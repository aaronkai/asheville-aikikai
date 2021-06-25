const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				Mullish: ['Mullish', 'sans-serif'],
				Roboto: ['Roboto', 'sans-serif']
			},
			backgroundImage: (theme) => ({
				hero:
					"linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('$lib/assets/PalmerSensei.jpg')"
			}),
			gridTemplateColumns: {
				fullbleed: '2fr 10fr 5fr'
			}
		}
	},
	plugins: []
};

module.exports = config;
