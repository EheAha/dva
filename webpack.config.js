const path = require('path')

const resolve = (url)=>{
    return path.resolve(__dirname,'./',url)
}

module.exports = function override(config, env) {
    config.resolve.alias={
        "@":resolve('src'),
        "css":resolve('src/assets/css'),
        "images":resolve('src/assets/images'),
        "components":resolve('src/components'),
        "models":resolve('src/models'),
        "routes":resolve('src/routes'),
        "utils":resolve('src/utils'),
        "services":resolve('src/services')
    }
    return config;
  };
