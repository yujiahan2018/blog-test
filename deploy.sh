# 生成静态文件
npm run build

# 进入生成的文件夹
#cd .vuepress/dist

git remote add  origin https://github.com/yujiahan2018/myblogsite.git
git init
git add -A
git commit -m 'blogcommit'

# 发布到 https://<USERNAME>.github.io/<REPO>
git push origin main

