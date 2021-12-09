
-- To check if mongodb is installed or not:

	mongo --version
	
-- To start mongodb server:

	mongod
	
	(Default Port: 27017)
	(Default Data Directory: c:/data/db)
	
-- To start mongo client:

	mongo 
	
	(Default Port: 27017)
	
---------------------------------------------------------

-- To see list of database:

	show dbs;
	
-- To create your own database or use existing database:

	use tcsdb;
	
-- To check which database you are using:

	db;
	
-- To create a collection(table) in used database:

	db.createCollection('users');
	db.createCollection('employees');
	
-- To get the list of collections:

	show collections;
	
-- To insert JSON documents into `users` collection:

	db.users.insert({"name": "King", "age": 23, "gender": "male"});
	db.users.insert({"name": "Kochhar", "age": 33, "gender": "male"});
	db.users.insert({"name": "Shreya", "age": 40, "gender": "female"});
	db.users.insert({"name": "Sarah", "age": 25, "gender": "female"});
	db.users.insert({"name": "Roger", "age": 29, "gender": "male"});

-- To see the records:

	db.users.find();
	
-- To see the record based upon condition:

	db.users.find({"name": "King"});
	db.users.find({"age": 23})
	
-- Conditional(Relational) Operators:	
	
	db.users.find({"age": {$gt: 23}})
	db.users.find({"age": {$gte: 23}})
	db.users.find({"age": {$lt: 30}})
	db.users.find({"age": {$lte: 30}})
	db.users.find({"age": {$eq: 33}})
	db.users.find({"age": {$ne: 33}})
	
-- Misc Operators:

	db.users.find({"name": {$in: ["King", "Kochhar", "Bhawna"]} });
	db.users.find({"name": {$nin: ["King", "Kochhar", "Bhawna"]} });
	
	db.users.find({"name": 
		{ $nin: ["King", "Kochhar", "Bhawna"]} 
	});
	
-- Logical Operators:

	AND, OR, NOT
	
	db.users.find({ $and: [{"name": "King"}, {"age": 23}] });
	
	db.users.find({$or: [{"name": "Kochhar"}, {"age": 23}] });
	
	db.users.find({"age" : {$not: {$gt: 30}}});
	
-- To update one document:

	db.users.find();

	db.users.updateOne(
		{ "name": "King" },	
		{ $set: {"age": 35 } }
	);

-- To update multiple documents:

	db.users.updateMany(
		{ "gender": "male" },
		{ $set: {"age": 45, "status": "A"} }
	)
	
-- To delete one document:

	db.users.deleteOne({ "status": "A" });

-- To delete multiple documents:

	db.users.deleteMany({ "status": "A" });
	
-- To delete all documents:

	db.users.deleteMany({});

	
	
	
	