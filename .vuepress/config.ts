import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";


export default defineUserConfig({
  title: "vuepress-theme-reco",
  description: "Just playing around",
  base: "/myblogsite/",
  
  plugins: [
    mdEnhancePlugin({
      // 使用 KaTeX 启用 TeX 支持
      katex: true,
      // 使用 mathjax 启用 TeX 支持
      mathjax: false,
    }),
  ],

  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "YuJiahan",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",

     // 自动设置分类
    // autoSetBlogCategories: true,
    // // 自动将分类和标签添加至头部导航条，API 后期会做调整，但不会废弃，请谨慎使用
    // autoAddCategoryToNavbar: {
    //   location: 1, // 默认 0
    //   categoryText: '分类', // 默认 categories
    //   tagText: '标签' // 默认 tags
    // },


    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "Home", link: "/" },
      { text: "Categories", link: "/categories/reco/1/" },
      { text: "Tags", link: "/tags/tag1/1/" },
      {
        text: "Docs",
        children: [
          { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
          { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
        ],
      },
    ],
    // commentConfig: {
    //   type: 'valie',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
