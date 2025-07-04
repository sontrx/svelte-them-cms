module.exports = {
  plugins: [
    require('postcss-preset-env')(),
    ...(process.env.NODE_ENV === 'production' ? [require('cssnano')()] : [])
  ]
}; 