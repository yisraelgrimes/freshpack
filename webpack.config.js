const path = require(`path`)

module.exports = {
	entry: [`babel-polyfill`, `./src/scripts/index.js`],
	// If multiple pages with different js files
	// entry: {
	// 	index: [`babel-polyfill`, `./src/scripts/index.js`],
	// 	about: [`babel-polyfill`, `./src/scripts/about.js`],
	// },
	output: {
		path: path.resolve(__dirname, `public/scripts`),
		filename: `main.js`,
		// If multiple pages with different js files
		// filename: `[name]-bundle.js`, // replaces [name] with "entry" object-key.
	},
	module: {
		rules: [{
			enforce: `pre`,
			test: /\.js$/,
			exclude: /node_modules/,
			loader: `eslint-loader`,
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: `babel-loader`,
				options: {
					presets: [`@babel/env`],
					plugins: [`transform-object-rest-spread`],
				},
			},
		}],
	},
	devServer: {
		// Path or array of paths for files that aren't generated dynamically
		contentBase: path.resolve(__dirname, `public`),
		publicPath: `/scripts/`,
		port: 9000,
		stats: `errors-only`, // Display only errors to reduce the amount of output.
		open: true, // Open the page in browser
		overlay: true, // Overlay errors onto the webpage
	},
	devtool: `source-map`,
}
