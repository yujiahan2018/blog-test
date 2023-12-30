export const data = JSON.parse("{\"key\":\"v-76fdf177\",\"path\":\"/blogs/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"modules\":[\"BannerBrand\",\"Footer\"],\"bannerBrand\":{\"bgImage\":\"/bg.svg\",\"title\":\"Mr.Yu's blog\",\"description\":\"一名后端菜鸡的技术博客\",\"tagline\":\"欢迎来到我的博客。\",\"buttons\":[{\"text\":\"进入博客\",\"link\":\"/docs/guide/introduce\"},{\"text\":\"Default Style\",\"link\":\"/docs/style-default-api/introduce\",\"type\":\"plain\"}],\"socialLinks\":[{\"icon\":\"LogoGithub\",\"link\":\"https://github.com/vuepress-reco/vuepress-theme-reco\"}]},\"blog\":{\"socialLinks\":[{\"icon\":\"LogoGithub\",\"link\":\"https://github.com/recoluan\"}]},\"isShowTitleInHome\":true,\"actionText\":\"About\",\"actionLink\":\"/views/other/about\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"blogs/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
