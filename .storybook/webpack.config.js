module.exports = async ({ config, mode }) => {
    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
  
    // Make whatever fine-grained changes you need
    console.log(config.devtool);
    config.devtool = 'source-map'
  
    return config;
  };