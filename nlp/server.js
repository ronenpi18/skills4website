/**
 * Created by ronen on 4/8/17.
 */
var natural = require('natural');
var express = require('express');
var app = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var port = process.env.PORT || 8084;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(morgan('dev'));

app.post('/nlp/wordTokenizer',urlencodedParser,function (req,res) {
    var tokenizer = new natural.WordTokenizer();
    var sentence = req.body.sentence;
    res.json({tokenizer:tokenizer.tokenize(sentence)});
})
app.post('/nlp/TreebankWordTokenizer',urlencodedParser,function (req,res) {
    var tokenizer = new natural.TreebankWordTokenizer();
    var sentence = req.body.sentence;
    res.json({tokenizer:tokenizer.tokenize(sentence)});
})
app.post('/nlp/WordPunctTokenizer',urlencodedParser,function (req,res) {
    var tokenizer = new natural.WordPunctTokenizer();
    var sentence = req.body.sentence;
    res.json({tokenizer:tokenizer.tokenize(sentence)});
})
//String Distance
/**
 *  params : two sentences or words
 */
app.post('/nlp/strDist',urlencodedParser,function (req,res) {
    var first_sentence = req.body.first_sentence;
    var sec_sentence = req.body.sec_sentence;
    res.json({dist:(natural.JaroWinklerDistance(first_sentence,sec_sentence)*100)});
})

app.listen(port)
console.log("server is running on port:"+port)