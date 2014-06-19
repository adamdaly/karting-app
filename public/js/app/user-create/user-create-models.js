define(function(){
    var models = {};

    models.formData = Backbone.Model.extend({
    	defaults: {
    		userName: '',
    		userPassword: '',
    		userRemember: false
    	},
    	url: '/login',
    	initialise: function(){
    	}
    });

    return models;
});