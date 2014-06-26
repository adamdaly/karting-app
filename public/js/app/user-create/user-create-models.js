define(function(){
    var models = {};

    models.formData = Backbone.Model.extend({
    	defaults: {
    		userName: '',
    		userPassword: ''
    	},
    	initialise: function(){
    	}
    });

    return models;
});