const path = require(`path`)

module.exports = {
	entry: `./src/index.js`,
	output: {
		path: path.resolve(__dirname, `public/scripts`),
		filename: `main.js`
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
				},
			},
		}],
	},
	devServer: {
		contentBase: path.resolve(__dirname, `public`),
		publicPath: `/scripts/`,
		port: 9000,
	},
	devtool: `source-map`,
}
