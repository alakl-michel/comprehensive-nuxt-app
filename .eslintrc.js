module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
       //'@nuxtjs',
    //'plugin:nuxt/recommended',
    //'plugin:vue/recommended',
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {}
}
