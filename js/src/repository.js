var repo = (function(table){
	var db = new Lawnchair(table, function () {
    console.log("Lawnchair DB initialized");
  });

  function save(item, callback){
		db.save(item, callback);
	}

  function all(callback){
		db.all(callback);
	}
	
	function remove(item, callback){
		db.remove(item, callback);
	}
  
  function get(key, callback){
		db.get(key, callback);
	}
	
	//async test
	// function removeKey(key, callback){
	// 	db.get(key, function(r){
	// 		db.remove(r, callback);
	// 	});
	// }

	
	return {save:save, get:get, all:all, remove:remove};
	//	, removeKey:removeKey
});