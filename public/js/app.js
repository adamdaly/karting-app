/*jshint sub:true*/

define('app',
    [
        'jquery',
        'underscore',
        'backbone',
        'nunjucks',
        'templates',
        'router',
        'dispatcher',
        'root',
        'user-login',
        'user-create',
        'index',
        'event-create'
    ],
    function($, _, Backbone, nunjucks, templates, router, dispatcher, root, userLogin, userCreate, index, eventCreate){

        return {
            nunjucks: nunjucks,
            root: root,
            userLogin: userLogin,
            userCreate: userCreate,
            index: index,
            eventCreate: eventCreate,
        	router: router
        };
    }
);

require(['app'], function(app){

    window.app = app;

    // TODO: Might be worth building a list of all subview initially
    app.subViews = {};


    app.utils = {};

    app.utils.returnSelectedView = function(view){
        var source = $.camelCase(view.replace('view-', '')),
            selectedView = $.camelCase(view);

        return app[source][selectedView];
    };

    app.subViews['root'] = new app.root.views.Root({
        model: new app.root.models.viewManager()
    });
    // app.subViews['view-login'] = new app.login.views.Login({
    //     model: new app.login.models.formData()
    // });
    // app.subViews['view-index'] = new app.index.views.Index();
    // app.subViews['view-event-create'] = new app.eventCreate.views.eventCreate();
    var initalView = document.querySelector('section').getAttribute('id');

    app.subViews['root']._setSubView(app.utils.returnSelectedView(initalView));

});