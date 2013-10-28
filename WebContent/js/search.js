$(function () {
	var userModel, searchButtonView, router;
	
	userModel = Backbone.Model.extend({
		urlRoot:'https://joseph.kanbanery.com/api/v1/user.json?api_token=7d85a88c71f68a5d7082cf04e5a9da7b174a6ecb',
		initialize: function(){
			console.log('the model is initialized');
		},
		sync: function(method, model, options){
			options.timeout= 10000;
			options.dataType = 'jsonp';
			Backbone.sync(method, model, options);
			console.log('this is inside the sync method');
		},
		parse: function (response) {
			console.log(response);
			return response;
		}
		
	});


	searchButtonView = Backbone.View.extend({
		events: {
			"click": "submit",
		},
		initialize: function() {
			console.log('the view has been initialized');
			console.log(this.el);
		},
		submit: function(){
			alert('submit button is clicked' + $("#search").val());
			console.log('submit button is clicked');
		}
	}); 
	
	 router = Backbone.Router.extend({
		routes : {
			"":"home",
		},
		initialize: function () {
			Backbone.history.start();
		},
		home:function(){
			var user = new userModel();
			console.log(user.fetch());
			var view  =  new searchButtonView({el:$("#submit")});
		}
	});	
	
	var appRouter = new router();	
	
});







