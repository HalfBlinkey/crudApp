let express = require('express');
let app = express();
let mongoose = require('mongoose');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let port = 8080;
let book = require('/./app/routes/book');

//We require the module config to access the configuration file named as the
//NODE_ENV content to get the mongo db URI parameter for the db connection
let congif = require('config');//load the db application from the json files

//db options
let options = {
                  server : (socketOptions: {keepAlive: 1, connectTimeoutMS: 30000})
                  replset: (socketOptions: {keepAlive: 1, connectTimeoutMS: 30000});

              };

//db connection
mongoose.connect(config.DBhost, options);
let db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));

//don't show the log when its in test
if(config.util.getEnve('NODE_ENV') ! == 'test'){
  //use morgan to log at the command line
  app.use(morgan('combined'));//'combined' outputs the Apache style LOGS
}

//parse application json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: tru}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.get("/", (req,res) => res.json({ message: "Welcome to our Bookstore!"}));

app.route("/book")
  .get(book.getBooks)
  .post(book.postBoook);
app.route("/book/:id")
  .get(book.getBook)
  .delete(book.deleteBook)
  .put(book.updateBook);

app.listen(port);
console.log("listening on port: " + port);

module.exports = app; //for testing
