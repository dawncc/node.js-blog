var mongodb = require('./db');

/*
定义构造函数
 */
function User(user){
	this.name = name;
	this.pwd = pwd;
	this.email = email;
}

module.exports = User;

// 存储用户信息,使用prototype为User追加方法
User.prototype.save = function(callback){
	//获取参数
	var user = {
		name: this.name,
		pwd: this.pwd,
		email: this.email
	};

	//打开数据
	mongodb.open(function(err, db){
		if(err){
			return callback(err);
		}
		db.Collection('users', function(err, collection){
			if(err){
				mongodb.close();
				return callback(err);
			}
			collection.insert(user,{safe:true}, function(err, user){
				mongodb.close();
				if(err){
					return callback(err);
				}
				callback(null, user[0]);
			});
		});
	});
};

