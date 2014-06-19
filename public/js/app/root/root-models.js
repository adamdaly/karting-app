define(['dispatcher'], function(dispatcher){
    var models = {};

    models.viewManager = Backbone.Model.extend({
    	defaults: {
    		subView: null,
    		previousSubView: null
    	},
    	initialize: function(){
    	}
    });

    return models;
});