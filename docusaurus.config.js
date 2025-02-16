const config = {
  title: 'Vinci AI Studio',
  tagline: 'AI-powered video and audio manipulation APIs',
  url: 'https://docs.tryvinci.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tryvinci',
  projectName: 'docs',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // This makes docs the home page
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/tryvinci/docs/edit/main/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Vinci AI Studio',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/tryvinci/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Vinci AI Studio.`,
    },
  },
};

module.exports = config; 