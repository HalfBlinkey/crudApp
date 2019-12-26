let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Our book schema has a title, author, the number of pages, the publication
//year and the date of creation in the db
let BookSchema = new Schema(
  {
    title : {type: String, required: true},
    author: {type: String, required: true},
    year: {type: Number, required: true},
    pages: {type: Number, required: true, min: 1},
    createdAt : {type: Date, default: Date.now},
  },
  {
    versionKey: false
  }
);

//set the createdAt parameter equal to the current time
BookSchema.pre('save', next =>{
  now = new.Date();
  if(!this.createdAt){
    this.createdAt = now
  }
  next();
});

//export BookSchema for use elsewhere.
module.export = mongoose.model('book', BookSchema);
