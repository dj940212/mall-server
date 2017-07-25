## 启动项目
#### 克隆 
`git@github.com:dj940212/mall-server.git`
#### 安装依赖 
`npm install`
#### 启动MongoDB 数据库
#### 运行 
`node app`
#### 查看
`http://localhost:3000`

## 目录

[1、用户登录](#1用户登录)<br/>
[2、用户登出](#2用户登出)<br/>
[3、删除购物车商品](#3删除购物车商品)<br/>
[4、获取购物车列表](#4获取购物车列表)<br/>
[5、获取商品列表](#5获取商品列表)<br/>

## 接口列表
### 1、用户登录

#### 请求URL:
```
http://localhost:3000/api/user/login
```

#### 示例:

#### 请求方式：
```
POST
```

#### 参数类型：query

| 参数     | 是否必选 | 类型    | 说明     |
| :------: | :------: | :-----: | :------: |
| userName | Y        | string  | 用户名   |
| userPwd  | Y        | string  | 密码     |

#### 返回示例
> 成功
```javascript
{
    "status": "0",
    "msg": "",
    "result": {
        "userName": "dingjian"
    }
}
```
> 失败
```javascript
{
    "status": "1",
    "msg": "登录失败",
    "result": ""
}
```
### 2、用户登出

#### 请求URL:
```
http://localhost:3000/api/user/logout
```

#### 示例:
[http://localhost:3000/api/user/logout](http://localhost:3000/api/user/logout)

#### 请求方式：
```
GET
```

#### 参数类型：
| 参数 | 是否必选 | 类型    | 说明     |
| :------: | :------: | :-----: | :------: |
|      |          |         |          |

#### 返回示例
> 成功
```javascript
{
    "status": "0",
    "msg": "登出",
    "result": ""
}
```

### 3、删除购物车商品

#### 请求URL:
```
http://localhost:3000/api/cart/cartDel
```

#### 示例:
[http://localhost:3000/api/cart/cartDel](http://localhost:3000/api/cart/cartDel )

#### 请求方式：
```
POST
```

#### 参数类型：

| 参数      | 是否必选 | 类型    | 说明     |
| :------: | :------: | :-----: | :------: |
| productId | Y        | String  | 商品ID   |


#### 返回示例
> 成功
```javascript
{
    status:'0',
    msg:'',
    result:'suc'
}
```
> 失败

```javascript
{
    status:'1',
    msg:err.message,
    result:''
}
```

### 4、获取购物车列表

#### 请求URL:
```
http://localhost:3000/api/cart/cartList
```

#### 示例:
[http://localhost:3000/api/cart/cartList](http://localhost:3000/api/cart/cartList)

#### 请求方式：
```
GET
```

#### 参数类型：query

| 参数 | 是否必选 | 类型    | 说明     |
| :------: | :------: | :-----: | :------: |
|      |          |         |          |

#### 返回示例
> 成功
```javascript
{
  status:'1',
  msg:'',
  result:doc.cartList
}
```
> 失败

```javascript
{
    status:'1',
    msg:err.message,
    result:''
}
```

### 5、获取商品列表

#### 请求URL
```
http://localhost:3000/api/goods/goodsList
```

#### 示例
[http://localhost:3000/api/goods/goodsList?page=1&pageSize=2&priceLevel=0&sort=1](http://localhost:3000/api/goods/goodsList?page=1&pageSize=2&priceLevel=0&sort=1)

#### 请求方式
```
GET
```

#### 参数类型：query
| 参数       | 是否必选 | 类型    | 说明          |
| :------: | :------: | :-----: | :------: |
| page       | Y        | Number  | 页码          |
| pageSize   | Y        | Number  | 页数据条数    |
| priceLevel | Y        | String  | 价格区间      |
| sort       | Y        | Number  | 排序（1正序） |

#### 返回示例

```javascript
{
status: "0",
msg: "",
    result: {
    count: 2,
        list: [
            {
                _id: "58e7050398dab115d336b3f2",
                productId: "201710007",
                productName: "自拍杆",
                salePrice: 39,
                productImage: "zipai.jpg",
                productUrl: "",
                checked: "1"
            },
            {
                _id: "58e704ef98dab115d336b3f1",
                productId: "201710002",
                productName: "智能插线板",
                salePrice: 59,
                productImage: "6.jpg",
                productUrl: "",
                checked: "1"
            }
        ]
    }
}
```