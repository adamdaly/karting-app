define(['base-view', 'nunjucks'], function(BaseView, nunjucks){

    var views = {};

    views.eventCreate = BaseView.extend({
        name: 'event-create',

        // el: '#view-event-create',
        id: 'view-event-create',

        // template: nunjucks.render('create-event.html'),

        initialize: function(){
        },

        render: function(){
            var template = nunjucks.render('view-event-create.html', {});
            
            this.setElement(template);

            return this;
        }
    });

    return views;
});