# 执楠 Koa 后端模板项目


### 运行命令
```
yarn install
yarn start
```

### swagger 文档
http://localhost:3000/swagger-html

### 文件结构
```
- src                    # 源代码目录
 |- class                # class
   |- exception.js       # 异常处理类
 |- middleware           # 中间件
   |- errorHandle.js     # 错误处理中间件
 |- models               # 数据库模型
 |- routes               # 路由
 |- server               # 针对某一模型的服务，如计算用户的 Token
 |- utils                # 工具
   |- pathCheck.js       # 路径检查
 |- config.js            # 配置文件
 |- db.js                # 数据库连接实例
 |- jsconfig.json        # VSCode 配置文件
 |- main.js              # 入口文件
```
