require.config({
	paths: {
		jQuery: '/js/lib/jquery-1.9.1.min',
		Underscore: '/js/lib/underscore-1.4.4-min',
		Backbone: '/js/lib/backbone-0.9.10-min',
		text: '/js/lib/text',
		templates: '/templates'
	},

	shim: {
		'Backbone': ['Underscore', 'jQuery'],
		'SocNet' : ['Backbone']
	}
});

require(['SocNet'], function(SocNet){
	SocNet.initialise();
});
