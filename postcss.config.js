module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    process.env.PURGE === 'true' && require('@fullhuman/postcss-purgecss')({
      content: [
        './src/**/*.svelte'
      ],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g)
        .map(hit => hit.includes('class:') ? hit.substr('class:'.length) : hit) || []
    })
  ]
}