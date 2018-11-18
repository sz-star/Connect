const app = require('connect')();
app.use((req,res,next)=>{
  res.end('hello ,connect')
})

app.listen(3000)