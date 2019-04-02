/**
 *  基于create-react-app 配置的react 基础项目模板, http请求依赖于axios, css模块用less
 *
    --build  打包好的目录
    --config webpack配置文件
    --public 静态资源存放处
    --scripts webpack指令执行的脚本文件
    --src  文件依赖
    
 *
 *
 *
 */



 /**
  *  如果直接用此模板的话   直接 cnpm install / npm install 下载所有的依赖   并且直接跳转到第四步开始开发.
  *
  *
  *
  *  如果用 create-react-app 模板重新配置,那么就要依次按照 一二三步骤开始搭建.
  */

        第一步   npm install -g create-react-app    安装全局的 create-react-app (create-react-app的用法)

        第二步   创建项目     create-react-app  项目名

        第三步   安装开发的时候需要的依赖  (直接在package.json 里面添加依赖)   比如
            "axios": "^0.18.0" ,
            "react-router-dom": "^4.3.1"

            /**
             *  css 样式依赖块
             */
             "devDependencies": {
              "chalk": "2.4.1",
              "css-loader": "1.0.0",
              "eslint-plugin-react": "7.11.1",
              "less": "2.7.3",
              "less-loader": "4.0.5",
              "style-loader": "0.23.0"
            },

第四步   然后就可以开始进行路由的编写

第五步  开始样式的编写       需要进行css模块方案 利用 命名规范 来编写css , (直接在package.json 里面添加依赖)



第六步   代理服务器  (直接在package.json 里面添加依赖)
"proxy": "http://demo3.renrunkeji.com:8091/“,

第七步   介绍简单的生命周期

	生命周期 第一步（组建初始化阶段）

	constructor  用来初始化一些 数据用的，比如state的值 或者 初始化一些组件之间传参

	生命周期 第二步   （组建渲染阶段）
				 componentWillMount  （组建渲染前）

				 render （组建渲染时）

				componentDidMount （组建渲染后）


	生命周期第三步  update （组建更新阶段）

		componentWillReceiveProps(nextProps) {
    		// console.log(nextProps);
	    }

	生命周期第四步  componentWillUnmount （卸载阶段)

/**
 * 本地编译  npm run start  打包   npm run build
 */







