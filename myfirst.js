var pug = require('pug');

var html = pug.renderFile('/Users/user/Desktop/node/tst.html', options);

const http = require ('http')
const port = 3000

const server =  http.createServer(function(req, res){
      res.writehead(200, { 'content-type':'text/html'})
      fs.readfile('tst.html',function(error,data) {
        if(error){
          res.writeHead(404)
          res.write('error :  file not found')
        } else {
          res.write(data)
        }
        res.end()
      })



  res.write('test test')
  res.end()
})

server.listen(port, function(error) {
  if(error){
    console.log ("somthing went wrong", error)
  }
  else{
    console.log('server is lestening on port' + port)
  }
})
