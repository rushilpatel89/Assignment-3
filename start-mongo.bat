set datadir=%~dp0data
echo %datadir%

::cd C:\Program Files\MongoDB 2.6 Standard\bin
mongod --dbpath %datadir%

::https:::egghead.io/lessons/nodejs-first-api-with-node-js-express-and-mongodb
::http:::docs.mongodb.org/manual/tutorial/getting-started-with-the-mongo-shell/
::Start mongo.
::mongod --dbpath %datadir%

:: Insert some data.
::mongoimport --db simple --collection people --jsonArray people.json

:: Connect to mongo.
::mongo

:: Connect to db.
::use simple

:: Find one.
::db.people.findOne()

:: Remove all.
::db.people.remove({})

:: Drop database.
::db.dropDatabase()

:: Show DBs
::show dbs

:: Check currently selected db
::db

:: Exit.
::quit()