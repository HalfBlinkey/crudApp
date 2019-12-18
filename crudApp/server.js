//Server
const express = require('express');
const app = express();
const body_parser = require('body-parser');
const issue_manager = require('./scripts/issue_manager');
const ejs = require('ejs');

app.use(express.static('_dirname' + 'public'));
app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

//send a static html file
app.get('/', function (req,res){
  res.sendFile('_dirname/views' + "/index.html")
})



//instantiate our db
issue_manager.connectTo();

//create local variables for our b instance to work with
var issues;
var users;

app.get('/issues', function (req, res) {
	var issues = issue_manager.issues();
	console.log(issues);
	res.render('_dirname/index.ejs', { 'issues' : issues });
	});

// to add issue
app.post('/issues/issues.json', function (req, res) {
	console.log('put');
	//var workingList;
	issue_manager.createIssue(req.body.id,req.body.title, req.body.status, req.body.assignmee, req.body.created, req.body.updated, req.body.details);
	res.writeHead(200);
	res.end();
})

// //update an issue
 app.put('/issues/:issue_id.json', function (req, res) {
	var id = parseInt(req.params.issue_id);
	issue_manager.updateIssue(id, req.body.title,req.body.status, req.body.assignmee, req.body.created, req.body.updated, req.body.details);
	console.log("Issue " + id + " was updated");
	res.send("Issue " + id + " was updated");
})

//delete an issue
app.delete('/issues/:issue_id', function (req, res) {
	var id = parseInt(req.params.issue_id);
	console.log("Id to delete: " + id);
	issue_manager.deleteIssue(id);
	res.send("1 issue deleted");
})

//bind server to port
console.log("listen");
app.listen(3000, function() {
	console.log('listening on 3000')
})
