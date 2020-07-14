const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://chain.courses',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '/src/components/images/logo.png',
    logoLink: 'https://chain.courses/',
    title:
      "<a href='https://chain.courses/'><img class='img-responsive' src='/src/components/images/logo.png' alt='Chain.courses logo' /></a>",
    githubUrl: 'https://github.com/chain-courses/blockchain-course',
    helpUrl: '',
    tweetText: '',
    /*social: `<li>
		    <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,*/
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '',
      '/introduction', // add trailing slash if enabled above
      '/scalability',
      '/privacy',
      '/hackability',
      '/oracles',
      '/stablecoins',
      '/exchanges',
    ],
    collapsedNav: [

    ],
    links: [],
    frontline: false,
    ignoreIndex: false,
    title: "Blockchain",
  },
  siteMetadata: {
    title: 'Chain.Courses | Learn Blockchain',
    description: 'A Blockchain course based in the underlying technology, research, and innovation in the industry: not just hype.',
    ogImage: null,
    docsLocation: 'https://github.com/chain-courses/blockchain-course',
    favicon: '/src/components/images/logo-favicon.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Blockchain Course by James & Rishub',
      short_name: 'chain.courses',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
