const express = require("express");

const app = express();
const PORT = 8080;

app.use((req,res,next)=> {
    console.log(req.method, req.url);
    next();
})

app.get('/', function (req, res) {
    res.status(200).send('Hello World')
  })
  
  app.get('/test', function (req, res) {
    res.json({ msg:"This is a new page i guess???" });
});
  

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
});

