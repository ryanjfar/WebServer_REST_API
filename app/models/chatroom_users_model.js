//Creating a Model for the Chat_Room_Users Table	
module.exports = function(bookshelf,Users,ChatRoom)
{
	return bookshelf.Model.extend({
		"tableName":'chat_room_users',
		idAttribute: null,
		"hasTimestamps":["joined"],
		"Room_id": function(){
			return this.hasOne(ChatRoom,["chat_id"])
		},
		"User_id": function(){
			return this.hasOne(Users,["User_id"])
		}
	});
}