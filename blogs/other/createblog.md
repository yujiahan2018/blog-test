---
title: 通过VuePress 搭建 blog
date: 2019/04/09
categories:
 - reco
tags:
 - 入门
---

> 主题选用vuepress-theme-reco，默认无Latex支持
## 官方文档
![vuepress](https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg)
![leancloud-storage](https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg)
![valine](https://img.shields.io/badge/valine-1.3.4-blue.svg)

::: tip 介绍
1. 这是一个vuepress主题，旨在添加博客所需的分类、TAB墙、分页、评论等能；<br>
2. 主题追求极简，根据 vuepress 的默认主题修改而成，官方的主题配置仍然适用；<br>
3. 你可以打开 [午后南杂](http://recoluan.gitlab.io) 来查看效果。
:::

## 快速开始
> [官方文档](https://vuepress-theme-reco.recoluan.com/docs/guide/introduce.html)。

**npx**

```bash
# 初始化，并选择 2.x
npx @vuepress-reco/theme-cli init
```

**npm**

```bash
# 初始化，并选择 2.x
npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
```

**yarn**

```bash
# 初始化，并选择 2.x
yarn global add @vuepress-reco/theme-cli@1.0.7
theme-cli init
```

**Build**

```bash
npm run build

# or

yarn build
```

**Server**

```bash
npm run dev

# or

yarn dev
```

## 配置Latex支持
> [官方文档](https://plugin-md-enhance.vuejs.press/zh/)

markdown默认不支持latex语法，但是我们在写博客的时候又往往需要通过Latex语法写数学公式。这个时候就需要通过插件去解决。

虽然网上有许多开源插件可供选择，但是绝大部分都已经停止维护1年以上了，考虑到后面的迭代性，故一直在寻找替代品。

theme-hope.vuejs.press的内置插件：**vuepress-plugin-md-enhance**，功能强大且目前一直在维护，故将其引入到自己使用的主题中

### 配置过程
安装vuepress-plugin-md-enhance核心包
```bash
npm i vuepress-plugin-md-enhance
```

安装相关数学环境支持包：katex 或 mathjax-full:
```bash
npm i -D katex
# or
npm i -D mathjax-full
```
**导包**
```bash
// .vuepress/config.ts
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
```

**引入插件**

```bash
export default {
  plugins: [
    mdEnhancePlugin({
      // 使用 KaTeX 启用 TeX 支持
      katex: true,
      // 使用 mathjax 启用 TeX 支持
      mathjax: true,
    }),
  ],
};

```


### 使用测试
$$
\begin{equation}
\left\{
\begin{array}{cl}
 & x+y+z=0 \\
 & 5*x+3*y+\frac{z}{3}=100  \\
\end{array} \right.
\end{equation}
$$