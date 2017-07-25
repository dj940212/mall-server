## 启动项目
+ 克隆 `git@github.com:dj940212/mall-server.git`
+ 安装依赖 `npm install`
+ 启动MongoDB 数据库
+ 运行 `node app`
+ 查看 `http://localhost:3000`

## 接口
+ 用户登录(post)
`http://localhost:3000/api/user/login`

body:
{
    userName: userName,
    userPwd: userPwd
}

+ 用户登出(post)
`http://localhost:3000/api/user/logout`

+ 获取商品列表(get)
`http://localhost:3000/api/cart/cartList`

query:
{
    page: page,
    pageSize: pageSize
    sort: 0/1,
    priceLevel: 0/1/2/3
}

+ 删除购物车商品(post)
`http://localhost:3000/api/cart/cartDel`

body:
{
    productId: productId
}

+ 编辑购物车商品

