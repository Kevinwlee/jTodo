function Todo(name){
	this.name = name;
 	this.complete = false;		
	this.saved = false;
}
Todo.prototype.complete = false;
Todo.prototype.saved = false;
Todo.prototype.name = "No name was set!";


Todo.prototype.markComplete = function(){
	this.complete = true;
};

Todo.prototype.isComplete = function(){
	return this.complete;
}

// Todo.prototype.save = function(){
// 	this.repository.persist(function(){
// 		console.log("calling back")
// 		this.saved = true;
// 		console.log(this.saved);
// 		});
// };





