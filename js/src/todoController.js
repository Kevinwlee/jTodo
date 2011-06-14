

$(document).ready(function () {

//  var db = repo("todo");
	var db = new Lawnchair('todo', function () {
	  console.log("Lawnchair DB initialized");
	});


  $("#todo_items li").live("click", function() {
    var $element = $(this);
    db.get(this.id, function (r) {
      db.remove(r, function () {
        console.log("deleted!");
        $element.addClass("completed");
      }); 
    });
  });    

	//Load existing items
  db.all(function (todos) {
    //underscore template
    var list = "<% _.each(items, function(todo) { %> <li id='<%= todo.key%>'><%= todo.name %></li> <% }); %>";
    //append the markup
    $("#todo_items").append( _.template(list, {items: todos}));    
  });
        
  $("#add_button").click(function () {
    var name = $("#new_todo").val();		
    var todo = new Todo(name);
   
    db.save(todo, function (r) {
      console.log("saved");                
      $("#todo_items").append('<li id="'+r.key+'">'+r.name +'</li>');
			$("#new_todo").val("");
    });
    
    return false;
  });
  
  
});
