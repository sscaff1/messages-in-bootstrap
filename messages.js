Messages = {
	collection: new Mongo.Collection(null),
	throw: function (message, type) {
		Messages.collection.insert({
			message: message, 
			type: type
		});
	}
};