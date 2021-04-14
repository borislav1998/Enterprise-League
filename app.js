const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/',router);
app.listen(8000,() => {
  console.log(`Example app listening on port 8000!`)
})

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'content-type': 'text/html' })
//   fs.createReadStream('index.html').pipe(res)
// })

// server.listen(process.env.PORT || 8000)