define(['dispatcher'], function(dispatcher){
    var views = {};

    views.Root = Backbone.View.extend({
        el: '#view-root',

        initialize: function(){
            dispatcher.on('view-change', this._changeSubView, this);
        },

        render: function(){},

        _subView: null,
        _previousSubView: null,
        // Simple set view
        _setSubView: function(view){
        	console.log(view);
        	this.model.set('subView', view);
        },
        // TODO: Create transition between views
        _changeSubView: function(view){

            if(this.model.get('subView') !== this.model.get('previousSubView')){
                this.model.set('previousSubView', this.model.get('subView'));
                this.model.set('subView', app.utils.returnSelectedView(view));

                this.model.get('subView').render().$el.insertBefore(this.model.get('previousSubView').$el);
                this.model.get('previousSubView').remove();
            }

        	// if(this._subView !== this._previousSubView){
        	// 	this._previousSubView = this._subView;
        	// 	this._subView = app.subViews[view];

         //        this._subView.render().$el.insertBefore(this._previousSubView.$el);
         //        this._previousSubView.remove();
         //    }
        }
    });

    return views;
});