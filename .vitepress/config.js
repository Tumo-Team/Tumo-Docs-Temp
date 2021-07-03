// @ts-check
/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  base: '/tumo-docs',
  title: 'Tumo Docs',
  lang: 'zh-CN',
  description: 'Tumo Docs Template',
  head: createHead(),
  themeConfig: {
    docsRepo: 'Tumo-Team',
    logo: '/logo.png',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '为此页提供修改建议',
    nav: createNav(),
    sidebar: createSidebar(),
  },
};

/**
 * @type {()=>import('vitepress').HeadConfig[]}
 */

function createHead() {
  return [
    ['meta', { name: 'author', content: 'Vbenjs Team' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'tumo-cloud, springcloud, springboot, vite, ant-design-vue, vue',
      },
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'tumo cloud docs' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ];
}

/**
 * @type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
function createNav() {
  return [
    {
      text: 'Head1',
      link: '/head1/',
      items: [
        {
          text: 'nav1',
          link: '/head1/side1/f1',
        },
        {
          text: 'nav2',
          link: '/head1/side2/f1',
        },
      ],
    },
    {
      text: 'Head2',
      link: '/head2/',
      items: [
        {
          text: 'nav1',
          link: '/head2/side1/f1',
        },
      ],
    },
  ];
}

function createSidebar() {
  return {
    '/head1/': [
      {
        text: 'side1',
        children: [
          {
            text: 'side1-f1',
            link: '/head1/side1/f1',
          },
          {
            text: 'side1-f2',
            link: '/head1/side1/f2',
          },
        ],
      },
      {
        text: 'side2',
        children: [
          {
            text: 'side2-f1',
            link: '/head1/side2/f1',
          },
          {
            text: 'side2-f2',
            link: '/head1/side2/f2',
          },
        ],
      },
    ],
    '/head2/': [
      {
        text: 'side2',
        children: [
          {
            text: 'side2-f1',
            link: '/head2/side1/f1',
          },
        ],
      },
    ],
  };
}

// /**
//  * @type {(namespace:string,items:string[])=>string[]}
//  */
// function urlWrapper(namespace, items) {
//   return items.map((item) => namespace + item);
// }

// function getGuildNav() {
//   return urlWrapper('/guide', ['/']);
// }
