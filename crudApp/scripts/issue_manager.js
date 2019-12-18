//function that returns a list of provided issues

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://hb:Ikillyou123@floatingcloud-iao6s.azure.mongodb.net/test?retryWrites=true&w=majority';
var db;
var issues;

	//function that passes the issueList and turns it into a JSON string object
function issues() {
		//return issuesJSON;
		var dbo = db.db("issues");
		dbo.collection("issues").find().toArray(function(err, result) {
		if (err) throw err;
		issues = result;
		});
	return issues;
}

//function to create an issue
function createIssue(id, title, status, assignee, created, updated, details){
	//declaration for the Issue class
	var newIssue = new Issue(id, title, status, assignee, created, updated, details);
	var dbo = db.db("tissue");

	dbo.collection('issues').save(newIssue, (err, result) => {
		if (err) return console.log(err)
			console.log('saved to database');
		})
 }

//function to update an issue
https://www.w3schools.com/nodejs/nodejs_mongodb_update.asp
function updateIssue(id, title, status, assignee, created, updated, details){
	var dbo = db.db("tissue");
	dbo.collection("issues").findOneAndUpdate({ "id": id }, { "$set": { "title": title, "status": status, "assignee": assignee, "created": created, "updated": updated, "details": details}
	})
	console.log("1 Issue Updated");
}
function deleteIssue(id){
	var dbo = db.db("tissue");
	dbo.collection("issues").findOneAndDelete({id: id},(err, res) =>{
  	console.log(id);
	if(err) return res.send(500, err);
		console.log("1 document deleted with id " + id);
	});
}

function connectTo() {
	//connect to the mongodb called tissue
	//must call before using the module
	MongoClient.connect(url , { useNewUrlParser: true,  useUnifiedTopology: true  },(err, database) => {
		if (err) return console.log(err);
			db = database;
	});
}
function Issue (id, title, status, assignee, created, updated, details){
		this.id = id;
		this.title = title;
		this.status = status;
		this.assignee = assignee;
		this.created = created;
		this.updated = updated;
		this.details = details;
}

//export functions for portable use in issues.js routes
module.exports = {issues, createIssue, updateIssue, deleteIssue, connectTo};
