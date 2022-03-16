const { defineConfig } = require('@vue/cli-service')
module.exports = {
  configureWebpack: (config) => {
    config.devtool = 'source-map'
  },
  transpileDependencies: [
    'vuetify'
  ]
}

