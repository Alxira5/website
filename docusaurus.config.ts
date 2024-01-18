import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Alxira5',
  tagline: 'Software developer and digital artist, defender of free culture',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://alxira5.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          blogTitle: 'Blog',
          blogDescription: 'The Alxira5 blog',
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `© ${new Date().getFullYear()} Guillermo Brito. Some rights reserved`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {name: 'keywords', content: 'tech, blog'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:creator', content: '@Alxira5'},
      {name: 'google-site-verification', content: 'dGGfSr0CqYOO8aqpUMRluHF8tzj9wNxBURV_prRd3Vs'},
      {name: 'msvalidate.01', content: '29C8E8925A64BE85BDB69C975B67DDD0'},
    ],
    headTags: [
      {
        tagName: 'script',
        attributes: {
          type: 'application/ld+json',
        },
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          image: 'img/alxira5.jpg',
          jobTitle: 'Software Developer',
          name: 'Guillermo Brito',
          url: 'https://alxira5.vercel.app/',
        }),
      },
    ],
    // Replace with your project's social card
    image: 'img/social-card.png',
    navbar: {
      title: 'Alxira5',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
            links: [
        {
          title: 'Alxira5',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'About',
              to: '/about',
            },
            {
              label: 'Contact',
              to: '/contact',
            },
          ],
        },
        {
          title: 'Website',
          items: [
            {
              label: 'Copyright',
              to: '/copyright',
            },
            {
              label: 'Tags',
              to: '/blog/tags',
            },
            {
              label: 'Archive',
              to: '/blog/archive',
            },
          ],
        },
        {
          title: 'Social Networks',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Alxira5',
            },
            {
              html: `
                  <a class="footer__link-item" href="https://mastodon.social/@Alxira5" tarjet="_blank" rel="me noopener noreferrer">Mastodon<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>
                `,
            },
            {
              label: 'X',
              href: 'https://x.com/Alxira5',
            },
          ],
        },
      ],
      copyright: `&copy; ${new Date().getFullYear()} Guillermo Brito. Some rights reserved`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
