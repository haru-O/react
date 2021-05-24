module.exports =  {
  "presets": ['@babel/preset-react', '@babel/preset-env',"module:metro-react-native-babel-preset"],
  "env": {
    "production": {
      "plugins": [
        "ignite-ignore-reactotron",
        "@babel/plugin-proposal-class-properties"
      ]
    }
  }
}