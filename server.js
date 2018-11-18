const connect = require('connect');
const setup = require('./logger.js')
 
function hello(req, res) {
  // foo();   此函数假如不存在,connect默认的处理方式是返回响应状态码500
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello world');
}

const app = connect()
  .use(setup(':method :url'))
  .use(hello)
  .listen(3000);