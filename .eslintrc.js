module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  env: {
    jest: true
  },
  rules: {
    'prettier/prettier': 'warn',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    semi: [2, 'never']
  },
  globals: {
    fetch: false
  }
}
