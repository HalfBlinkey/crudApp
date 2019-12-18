# crudApp
simple crud api
1st run npm init and npm update to get all the needed node modules


To run the issues server application
  npm run dev

To test for request 1 (list of issues),
   a: run the server in cmd
   b: in another cmd type the following command
		curl -X GET http://localhost:3000/

To test for request 2 (add a new JSON issue)
   a: run the server if it is not already running from test 1
   b: type the following command
		curl -X POST http://localhost:3000/newIssue.json -d "{\"6\":{\"id\":6,\"title\":\"inactive button\",\"status\":\"closed\",\"assignee\":\"Janet Lang\",\"created\":\"10/20/18\",\"updated\":\"10/20/18\",\"details\":\"add button does not respond\"}}"

due to the mongodb driver being deprecated, and the fetch command in our main.js not being supported in all browsers
some of this applications features might not work , its simply serves as an api that can post a cursor object returned from a mongodb cloud database and post
an array of its contents to screen using the ejs templating engine



