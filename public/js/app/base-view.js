define('base-view', ['nunjucks'], function(nunjucks){

	var BaseView = Backbone.View.extend({
		initialize: function(){},
		render: function(){
			return this;
		},
		add: function(){},
		remove: function(){
			this.el.remove();
		}
	});
	return BaseView;
});