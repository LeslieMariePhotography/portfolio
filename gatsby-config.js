module.exports = {
  siteMetadata: {
    title: 'Leslie Marie Photography',
    description:
      'Photography portfolio for Leslie Marie Photography using GatsbyJS.',
    siteUrl: '',
    author: 'Rey Vera',
    twitter: '',
    adsense: '',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'rqwmpn6dp5kg',
        accessToken:
          'f386519baa67ee88e6aa7d710f0738fcdca9eabed94d24c210b1c712e2ba0bef',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom: 1.0725rem;',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatstrap',
        short_name: 'Gatstrap',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#673ab7',
        display: 'minimal-ui',
        icons: [
          {
            src: '/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [`Lato:100,300`, `Roberto Condensed`],
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-twitter',
    'gatsby-transformer-sharp',
  ],
}
