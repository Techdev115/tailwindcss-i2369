module.exports = {
  theme: {},
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
}
