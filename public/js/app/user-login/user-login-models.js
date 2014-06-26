define(function(){
    var models = {};

    models.formData = Backbone.Model.extend({
    	defaults: {
    		'user-name': '',
    		'user-password': '',
    		'user-remember': false
    	},
    	initialise: function(){
    	}
    });

    return models;
});