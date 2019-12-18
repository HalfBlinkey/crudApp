//get the elements will be working with from the DOM
var add = document.getElementByID('add');
var issue = document.getElementByID('form');
var del = document.getElementByID('delete');
var update = document.getElementByID('update');

//set event listener on add button use the fetch api to to send the
//contents of the form element to the route we've specefied for
//handling post request
add.addEventListener('click', function(){
  //fetch api only works in chrome, opera, and firefox
  fetch('/issues/:issue_id.json',{
    method : 'post',
    headers : {'Content-type' : 'Application/json'},
    body : json.stringify({
      'title' : 'Everything alright!',
      'status' : 'Current',
      'assignee' : 'Everyone',
      'created' : 'Right now',
      'updated' : 'Yes',
      'details' : 'Kowabunga!!'
    })
  })
  //fetch returns a promisified object
  .then(res =>{
    if(res.ok) return res.json
  })
  .then(data =>{
    console.log(data);
    // were just going to reload the browser in a real api we manipulate the
    // DOM to display our new issues
    window.location.reload();
  })
})

//add event listener to our delete button connect it to our delete route
del.addEventListener('click', function(){
   fetch('/issues/issues_id',{
     method : 'delete',
     headers : {'Content-type' : 'Application/json'},
     body : json.stringify({
       'id' : form.id,
     })
   })
   //fetch returns a promisified object
   .then(res =>{
     if(res.ok) return res.json
   })
   .then(data =>{
     console.log(data);
     // were just going to reload the browser in a real api we manipulate the
     // DOM to display our new issues
     window.location.reload();
   })
 })

 //add event listener to our update button connect it to our update route
 update.addEventListener('click', function(){
    fetch('/issues/:issue_id.json',{
      method : 'put',
      headers : {'Content-type' : 'Application/json'},
      body : json.stringify({
        'id' : form.id,
        'title' : form.title,
        'status' : form.status,
        'assignee' : form.assinee,
        'created' : form.created,
        'updated' : form.updated,
        'details' : form.details
      })
    })
    //fetch returns a promisified object
    .then(res =>{
      if(res.ok) return res.json
    })
    .then(data =>{
      console.log(data);
      // were just going to reload the browser in a real api we manipulate the
      // DOM to display our new issues
      window.location.reload();
    })
  })
