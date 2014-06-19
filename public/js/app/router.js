define('router', ['backbone', 'dispatcher'],  function(Backbone, dispatcher){

	var Router = Backbone.Router.extend({

		initialize: function(){

		},
		routes: {
			'create-event': 'view-event-create',
			'create-user': 'view-user-create',
			'': 'view-user-login',
			// '': 'view-index'
		}
	});


    window.router = new Router();

	router.on('route', function(route, params) {
		dispatcher.trigger('view-change', route);
	    console.log('Navigation: ' + route);
	});

    Backbone.history.start({ pushState: true, silent: true });

	return Router;
});