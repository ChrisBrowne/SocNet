define(['views/index'], function(indexView){
	var initialise = function(){
		indexView.render();
	}

	return {
		initialise: initialise
	};
});