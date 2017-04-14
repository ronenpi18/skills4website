/**
 * Created by ronen on 4/7/17.
 */
var express = require('express');
var app = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
// used to create, sign, and verify tokens
var port = process.env.PORT || 8084;

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// use morgan to log requests to the console
app.use(morgan('dev'));

/**
 * post paras
 * param1: sentence - the sentence to pos
 * param2: token - secret user token for authentication
 * return -Array with tokens in the next format: "word / tag"
 */
app.post('/tokenize',function (req,res) {
    //TODO - add post with token to host/api/ - authenticated route. to check if the token is valid
    var sentence = req.body.sentence;
    var words = []

    res.json({value:words})
    // extend the lexicon
})
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
