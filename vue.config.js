module.exports = {
  lintOnSave: false,
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8086, // CHANGE YOUR PORT HERE!
    https: true,
    hotOnly: false,
},
}