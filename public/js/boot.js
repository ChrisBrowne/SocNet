'use strict';

require.config({
	paths: {
		jquery: '/js/lib/jquery-1.9.1.min',
		underscore: '/js/lib/underscore-1.4.4-min',
		backbone: '/js/lib/backbone-0.9.10-min',
		text: '/js/lib/text',
		templates: '/templates'
	},

	shim: {
		'jquery':{
			exports: '$'
		},
		'underscore':{
			exports: '_'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'SocNet' : {
			deps: ['backbone']
		}
	}
});

require(['SocNet'], function(SocNet){
	SocNet.initialise();
});
