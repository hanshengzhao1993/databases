var models = require('../models');


var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {
    get: function (req, res) {
      // this function will be called when someone makes a get request to the local server
      res.writeHead(200, headers);
      models.messages.get(function (rows) {
        // console.log('rows', JSON.stringify(rows));
        // console.log('ressssssssssssssssfasdfasdfasdfasdfasd', res)
        res.end( JSON.stringify(rows) );
      }); 
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      res.writeHead(201, headers);
      console.log('date, ', new Date(), 'typeof date', typeof (new Date()) );
      models.messages.post(req.body['message'], null, req.body['roomname']);
      res.end( /*JSON.stringify(data) */); 
      console.log('post request made to messages');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.writeHead(200, headers);
      res.end( /*JSON.stringify(data) */); 
      console.log('get request made to users');
    },
    post: function (req, res) {
      console.log('req123', req.body);
      res.writeHead(201, headers);
      models.users.post(req.body['username']);
      res.end( /*JSON.stringify(data) */); 
      console.log('post request made to users');
    }
  }
};



exports.sendResponse = function(response, data, statusCode) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};