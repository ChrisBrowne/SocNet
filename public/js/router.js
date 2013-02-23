define(['backbone', 'views/index', 'views/register', 'views/login', 'views/forgotpassword'], function(Backbone, indexView, registerView, loginView, forgotPasswordView) {
	'use strict';
	var SocRouter = Backbone.Router.extend({
		currentView: null,

		routes: {
			'index': 'index',
			'register': 'register', 
			'login': 'login',
			'forgotpassword': 'forgotpassword'
		},

		changeView : function(view){
			if(this.currentView != null){
				this.currentView.undelegateEvents();
			}
			this.currentView = view;
			this.currentView.render();
		},

		index: function(){
			this.changeView(new indexView());
		},

		register: function(){
			this.changeView(new registerView());
		},

		login: function(){
			this.changeView(new loginView());
		},

		forgotpassword: function(){
			this.changeView(new forgotPasswordView());
		}
	});

	return new SocRouter();
});