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


    // TODO: Seperate into a seperate document if this gets too full
    app.utils = {};

    app.utils.returnSelectedView = function(view){
        var source = $.camelCase(view.replace('view-', '')),
            selectedView = $.camelCase(view);

        return app[source][selectedView];
    };

    var Session = Backbone.Model.extend({
        defaults: {
            token: null, //unique session token
            userId: null, //username
            userSecret: null //hashed password
        },
        initialize: function(){
            if(!!document.cookie){
                var cookie = this._cookieStringToObject(document.cookie);
            }else{
                console.log('User not logged in');
            }
        },
        _cookieStringToObject: function(string){
            var split = string.split(';'),
                splat = {};

            _.each(split, function(element, index){
                splat[element.split('=')[0]] = element.split('=')[1];
                
            });

            return splat;
        }
    });

    var session = new Session();

    app.subViews['root'] = new app.root.views.Root({
        model: new app.root.models.viewManager()
    });
    // app.subViews['view-login'] = new app.login.views.Login({
    //     model: new app.login.models.formData()
    // });
    // app.subViews['view-index'] = new app.index.views.Index();
    // app.subViews['view-event-create'] = new app.eventCreate.views.eventCreate();
    var initialViewElement = document.querySelector('section'),
        initalViewId = initialViewElement.getAttribute('id'),
        initialView = app.utils.returnSelectedView(initalViewId);

    initialView.el = initialViewElement;

    app.subViews['root']._setSubView(initialView);

});