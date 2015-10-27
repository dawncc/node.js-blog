var settings = require('../settings'),
	Db = require('mongodb').Db,
	Connection = require('mongdb').Connection,
	Server = require('mongdb').Server;

module.exprots = new Db(settings.db, new Server(settings.host, settings.port), {safe:true});
