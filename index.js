const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000

app.use(bodyParser.json());

app.get('/', function(req,res) {
    if(req.body.verify_Token == 'abc@123'){
        res.send('verified');
    }else {
        res.send(req.body);
    }

})

app.listen(PORT);