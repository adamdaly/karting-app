define('base-view', ['nunjucks'], function(nunjucks){

	var BaseView = Backbone.View.extend({
		initialize: function(){},
		render: function(){
			return this;
		},
        _initializeSubViews: function(){},
		_add: function(){},
		_remove: function(){
			this.el.remove();
		}
	});
	return BaseView;
});