const webpack = require('webpack');
const path = require('path');

const config = {
	mode: "production",
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './'),
		filename: 'convertNumbers.js'
	}
}

module.exports = config;