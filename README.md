# Tumo 文档模板

> 基于 [https://github.com/anncwb/vue-vben-admin-doc](https://github.com/anncwb/vue-vben-admin-doc)

## 修改文档配置

编辑 `.vitepress/config.js`

### 修改路由菜单

```js
/* 创建顶部菜单 */
function createNav() {
  return [
    {
      // 一级菜单名称
      text: 'Head1',
      // 一级菜单路由地址
      link: '/head1/',
      items: [
        {
          // 二级菜单名称
          text: 'nav1',
          // 二级菜单对应Markdown文件地址
          link: '/head1/side1/f1',
        },
      ],
    },
  ];
}

/* 创建侧边栏菜单 */
function createSidebar() {
  return {
    // 侧边栏URL前缀，如果和head1路由地址相同，则此节点下的所有child都在head1下
    '/head1/': [
      {
        // 侧边栏一级标题
        text: 'side1',
        children: [
          {
            // 侧边栏二级标题
            text: 'side1-f1',
            // 此二级标题对应文件地址
            link: '/head1/side1/f1',
          },
        ],
      },
    ],
  };
}
```

## 如何本地开发

```bash
# 克隆本仓库
$ git clone https://github.com/Tumo-Team/Tumo-Docs-Temp

# 或者使用 yarn
$ yarn install

# 启动开发服务器
$ yarn dev
```
