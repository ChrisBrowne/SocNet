define(['jquery', 'backbone', 'text!templates/index.html'], function($, Backbone, indexTemplate){
	var indexView = backbone.View.extend({
		el: $('#content'),

		render: function(){
			this.$el.html(indexTemplate);
		}
	});

	return new indexView();
})