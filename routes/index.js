var express = require('express');
var axios = require('axios');
var router = express.Router();

const config = {
  chatId: 0,
  botToken: ""
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var alert = req.body;
  axios.get("https://api.telegram.org/bot" + config.botToken + "/sendMessage", {
    params: {
      chat_id: config.chatId,
      text: "*" + alert.commonAnnotations.summary + "*\n" + alert.commonAnnotations.description + "\n-------------------------------------",
      parse_mode: 'Markdown'
    }
  }).then( res => {
    res.json({message: "ok"})
  }, err => {
    console.log("error", err);
    res.status(500);
  });
});


module.exports = router;
