//API calls for /api/gcm to save registration ids
module.exports = function(router, GCMDB, knex)
{
	var gcm = require('gcm');
	router.route('/gcm/send')
	.post(function(req,res) {
		var result = gcm(req.body.data,[req.body.uid],GCMDB, knex);
		res.json({message:result});
	});
}