const CracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        aliases: {
          '@features': './src/features',
          '@ui': './src/ui',
          '@pages': './src/pages',
          '@lib': './src/lib',
          '@api': './src/api'
        }
      }
    }
  ]
}
