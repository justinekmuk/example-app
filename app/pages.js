module.exports = {
	getPage: function(name, callback) {
		switch(name) {
		case "home":
			require([], function() {
				callback(require("./home.jade"));
			});
			break;
		case "test1":
			require(["./test1"], function(item) {
				callback(item);
			});
			break;
		case "test2":
			require.ensure([], function() {
				callback(require("./test2.jade"));
			}, "test2+3");
			break;
		case "test3":
			require.ensure([], function() {
				callback(require("./test3.jade"));
			}, "test2+3");
			break;
		default: callback(null);
		}
	}
};