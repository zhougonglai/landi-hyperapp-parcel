## project build by hyperapp

> start to project:

```shell
yarn install

yarn start
```

---
项目轻盈. 针对活动页面而开发
集成:
- hyperapp
- @hyperapp/router
- parcel
- postcss

> build 测试: (参考值)
- js: 17kb
- css: 20kb

成品活动案例:(width out `@hyperapp/router`)
- js: 144kb
- css: 20kb
- 含有图片总重量 (1.8M)

> hyperapp

 [ state, view, actions ]

`hyperapp`类React的 MVVM framework
jsx,veturdom

> parcel

zero config server package

使用0配置开发工具 `parcel` 能轻松配合各类Framework 进行开发工作

> postcss

[post 配置方案](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)

- postcss-import 文件引用
- postcss-url 引用文件处理
- autoprefixer(postcss-cssnext) 兼容样式属性自动补偿

vw布局

- postcss-aspect-ratio-mini
- postcss-px-to-viewport
- postcss-write-svg
- postcss-cssnext
- cssnano
- postcss-viewport-units
