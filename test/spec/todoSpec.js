describe("Todo", function(){
	var t;
	var repo;
	beforeEach(function(){
		t = new Todo("My Spec Todo");
	});
	
	it("should not be complete when created", function(){
		expect(t.isComplete()).toBeFalsy();
	});
	
	it("should be have My Spec Todo as its name", function(){
		expect(t.name).toBe("My Spec Todo");
	});
	
	describe("When Calling Complete", function(){
		it("should be complete", function(){
			t.markComplete();
			expect(t.isComplete()).toBeTruthy();
		});	
	});	
	
	xdescribe("When Calling Save", function(){
		xit("Should call persist on the repo", function(){
			spyOn(repo, "persist");
			t.save();
			expect(repo.persist).toHaveBeenCalled();
		});
		xit("should set saved to true", function(){
			spyOn(repo, "persist").andCallThrough();
			t.save();
			//waits/runs here
			expect(t.saved).toBeTruthy();
		});

	});
});


