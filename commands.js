// https://egghead.io/lessons/nodejs-first-api-with-node-js-express-and-mongodb
// http://docs.mongodb.org/manual/tutorial/getting-started-with-the-mongo-shell/
// https://docs.mongodb.org/manual/reference/mongo-shell/

// Insert some data.
mongoimport --db StateDetail --collection state --jsonArray state.json

// Connect to mongo.
mongo

// Show DBs
show dbs

// Connect to db.
use StateDetail

// Check currently selected db
db

// Show all collections
show collections

// Get count.
db.state.count()

// Query all
db.state.find()

// Query all (formatted)
db.state.find().pretty()

// Find one.
db.state.findOne()

// Query.
db.state.find({zipcode: '67687'}).sort({name: 1}).pretty() // -1 for desc.

// Query with and operator.
db.state.find({
  zipcode: '67687',
  $and: [{"name": /.*And.*/}]
}).pretty() // -1 for desc.

// Insert.
db.state.insert({
  "name": "Maryland",
  "zipcode": "67687",

})

// Update.
db.state.update(                  // collection
  {zipcode: '67687'},           // update criteria
  {$set: {zipcode: '785442'}},// update action
  {multi: true})                   // update option

// See last insert.
db.state.find().sort({_id: -1}).limit(1)

// Remove all.
db.state.remove({})

// Get count.
db.state.count()

// Exit mongo shell.
quit()

// Drop database.
db.dropDatabase()

// Show DBs
show dbs

// Insert data again.
mongoimport --db StateDetail --collection state --jsonArray state.json

// Connect to mongo.
mongo

// Show DBs
show dbs

// Connect to db.
use StateDetail


//load("scripts/myjstest.js")

// Exit.
//quit()


// Sort.
db.restaurants.find().sort({"borough": 1, "address.zipcode": 1})