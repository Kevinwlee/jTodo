describe("Repository", function(){
	it("should have a save method", function(){
		var db = repo("specdb");
		expect(db.save).not.toBe(undefined);
	});

	it("should have a get method", function(){
		var db = repo("specdb");
		expect(db.get).not.toBe(undefined);
	});

	it("should have an all method", function(){
		var db = repo("specdb");
		expect(db.all).not.toBe(undefined);
	});

	it("should have a remove method", function(){
		var db = repo("specdb");
		expect(db.remove).not.toBe(undefined);
	});
	describe("when calling save", function(){
		it("should callback", function(){
			var callback = jasmine.createSpy();
			var db= repo("specdb");
			db.save({}, callback);
			expect(callback).toHaveBeenCalled();
		});
		
		it("should callback with data", function(){
			var callback = jasmine.createSpy();
			var db= repo("specdb");
			db.save({key:"fred"}, callback);
			expect(callback).toHaveBeenCalledWith({key:"fred"});
		});
		
	});

});