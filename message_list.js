Messages = {
	collection: new Mongo.Collection(null),
	throw: function (message, type) {
		Messages.collection.insert({
			message: message, 
			type: type
		});
	}
};


Template.messageList.helpers({
	messages: function() {
		return Messages.collection.find();
	}
});

Template.messageItem.rendered = function() {
  var messageCurrent = this.data;
  Meteor.setTimeout(function () {
    Messages.collection.remove(messageCurrent._id);
  }, 3000);
};