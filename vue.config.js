module.exports = {
  devServer: {
    host: '0.0.0.0',  // Aceitará conexões em todas as interfaces de rede
    port: 8080,       // Porta padrão (pode alterar se necessário)
  },
};

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
  
module.exports = {
  configureWebpack: {
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        path: require.resolve('path-browserify')
      }
    }
  }
}
