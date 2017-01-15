var db = require('../db');

module.exports = {
  messages: {
    get: function (callBack) {
      db.dbConnection.query('SELECT * FROM messages', function (err, rows) {
        if (err) {
          throw err;
        }
        // console.log('rows', rows.length);
        if (rows.length === 0) {
          rows = [{id:null, text:null, createdAt: null, user_id:null, roomname:null}];
        }
        callBack(rows);
      });
    }, // a function which produces all the messages
    post: function (text, createdAt, roomname) {
      console.log(text);
      var queryString = `insert into messages (text, createdAt, roomname) VALUES ("${text}", '${createdAt}', '${roomname}')`;
      db.dbConnection.query(queryString, function (err, rows) {
        if (err) {
          console.log(err);
          throw err;
        }
        // console.log('insert successfully', rows);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      return db.dbConnection.query('SELECT * FROM users', function (err, rows) {
        if (err) {
          throw err;
        }
        return rows;
      });
    },
    post: function (username) {
      var queryString = `insert into users (name) VALUES ('${username}')`;
      db.dbConnection.query(queryString, function (err, rows) {
        if (err) {
          throw err;
        }
        // console.log('insert successfully', rows);
      });
    }
  },

  // rooms: {
  //   // Ditto as above.
  //   get: function () {
  //     return db.dbConnection.query('SELECT * FROM rooms', function (err, rows) {
  //       if (err) {
  //         throw err;
  //       }
  //       return rows;
  //     });
  //   },
  //   post: function (roomname) {
  //     var queryString = `insert into rooms (name) Values (${roomname})`;
  //     db.dbConnection.query(queryString, function (err, rows) {
  //       if (err) {
  //         throw err;
  //       }
  //       // console.log('insert successfully', rows);
  //     });
  //   }
  // }
};


// db.dbConnection.query('INSERT INTO MESSAGES (id, text) VALUES (2, "hey guys")', function (err, rows) {
//   if (err) {
//     throw err;
//   }
//   console.log('insert successfully', rows);
// });
// db.dbConnection.query('SELECT * FROM messages', function (err, rows) {
//   if (err) {
//     throw err;
//   }
//   console.log('Data received form BD', typeof rows[0], Array.isArray(rows));
//   // console.log(rows);
// });