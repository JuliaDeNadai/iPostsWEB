const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = 'development';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: /* isDevelopment ? */ 'eval-source-map' /* :  'source-map'*/,
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/iPosts'
  },
  resolve: {
    extensions: ['.html','.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html',
      hash: true
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(s(a|c)ss)$/,
        // exclude: /node_modules/,gta
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: ['file-loader', 'image-webpack-loader'],
      },
    ],
  },

  /* Não é necesário alterar nada a partir desse ponto para produção visto que só funciona em dev */
  devServer: {
    hot: true,
    port: 3000, /* Porta onde a aplicação vai rodar */
    historyApiFallback: {
			index:'/iPosts/index.html'
		},
		proxy: {
      '/api': {
        target: 'http://localhost:3333', /* endereço do serviço */
      },
    },
  },
};