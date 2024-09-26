// https://github.com/michael-ciniawsky/postcss-load-config
// vw适配 https://github.com/evrone/postcss-px-to-viewport/blob/HEAD/README_CN.md

module.exports = {
  "plugins": {
    // "postcss-import": {},
    // "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    // "autoprefixer": {},
    "postcss-px-to-viewport": {		//移动端适配解决方案
        viewportWidth: 750,		// 视窗的宽度，对应的是我们设计稿的宽度，一般是750
        viewportHeight: 1334,	// 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
        unitPrecision: 3,		// 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
        viewportUnit: 'vw',		// 指定需要转换成的视窗单位，建议使用vw
        selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        minPixelValue: 1,		// 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
        mediaQuery: true,		// 允许在媒体查询中转换`px`
        disableConvertComment: 'no',//某个样式不转换
        unitToConvert: 'px',//需要转换的单位，默认为"px"
        fontViewportUnit: 'vw',  // 字体使用什么单位
        propList: ['*'],//能转化为vw的属性列表
        replace: true,// 是否直接更换属性值，而不添加备用属性
        //landscapeWidth (Number) 横屏时使用的视口宽度
        landscape: false,//是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
        landscapeUnit: 'vw',// 横屏时使用的单位
        exclude: [/(\/|\\)(node_modules)(\/|\\)/, /(src)(\/|\\)(common)(\/|\\)/],//忽略某些文件夹下的文件或特定文件
    }
  }
}
