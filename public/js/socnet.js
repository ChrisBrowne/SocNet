define(['jquery', 'backbone', 'router'], function ($, Backbone, router) {
	'use strict';
	var initialise = function () {
		checkLogin(runApplication);
	};

	var checkLogin = function (callback) {
		$.ajax('/account/authencated', {
			method: 'GET',
			success: function () {
				return callback(true);
			},
			error: function () {
				return callback(false);
			}
		});
	};

	var runApplication = function (authencated) {
		Backbone.history.start();
		if (authencated) {
			// window.location.hash = 'index';
			router.navigate('index', {trigger: true});
		} else {
			// window.location.hash = 'login';
			router.navigate('login', {trigger: true});
		}
	};

	return {
		initialise: initialise
	};
});