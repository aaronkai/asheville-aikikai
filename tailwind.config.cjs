const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				Mullish: ['Mullish', 'sans-serif'],
				Roboto: ['Roboto', 'sans-serif'],
				Montserrat: ['Montserrat', 'sans-serif']
			},
			backgroundImage: (theme) => ({
				cta: "url('$lib/assets/manInGi.jpg')"
			}),
			gridTemplateColumns: {
				fullbleed: '2fr 10fr 5fr'
			},
			gridTemplateRows: {
				header: '4fr 1fr'
			},
			colors: {
				brutalred: {
					DEFAULT: '#ff0000'
				}
			},
			height: {
				vh50: '50vh',
				vh75: '75vh'
			}
		}
	},
	plugins: []
};

module.exports = config;
