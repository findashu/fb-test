const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());

app.get('/', function(req,res) {
    console.log(req.url)
    //console.log(req.query.hub.verify_token);
    if(req.query['hub.verify_token'] == 'abc123'){
        res.status(200).send(req.query['hub.challenge']);
    }else {
        console.log('Else', req.query.hub.verify_token)
        res.send(req.body);
    }

})

app.get('/platform', (req,res) => {
    res.render('platform',{})
})

app.listen(PORT);

// ?hub.mode= subscribe&hub.challenge= 1965077546&hub.verify_token=abc%40123" host=vast-journey-78218.herokuapp.com request_id=f4ddd06e-9eb2-4446-93c2-5c8679149da4 fwd="69.171.251.20" dyno=web.1 connect=0ms service=18ms status=200 bytes=207 protocol=https
