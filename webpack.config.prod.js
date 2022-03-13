module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                syntax: 'postcss-scss',
                plugins: [
                  require('postcss-import'),
                  require('tailwindcss'),
                  require('autoprefixer'),
                  require('@fullhuman/postcss-purgecss')({
                    content: [
                      './src/**/*.html',
                      './src/**/*.ts',
                    ],
                    defaultExtractor: content =>
                      content.match(/[A-Za-z0-9-_:/]+/g) || []
                  }),
                ],
              }
            },
          },
          {
            loader: 'sass-loader',
            options: {},
          },
        ],
      },
    ],
  },
};