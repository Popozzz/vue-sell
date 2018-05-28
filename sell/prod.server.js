var express = require('express')
var config = require('./config/index')

var port = process.env.PORT

var app = express()

var router = express.Router()
router.get('/',function (req, res, next) {
  req.url = '/index.html'
  next()
})

app.use(router)

var appData = require('./data.json')
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings
//设置接口
var apiRouters = express.Router();

app.get('/seller',function (req,res) {
  res.json({
    errno: 0,
    data: seller,
  })
}),
app.get('/goods',function (req,res) {
  res.json({
    errno: 0,
    data: goods,
  })
}),
app.get('/ratings',function (req,res) {
  res.json({
    errno: 0,
    data: ratings,
  })
})
app.use('/api',apiRouters); // 通过路由请求数据
app.use(express.static('./dist'))

//启动express
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
}
