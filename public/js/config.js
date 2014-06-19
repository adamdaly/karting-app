(function() {

    'use strict';

    require.config({
        paths: {
            jquery: 'libs/jquery/dist/jquery',
            underscore: 'libs/underscore/underscore',
            backbone: 'libs/backbone/backbone',
            nunjucks: 'libs/nunjucks/browser/nunjucks-slim',
            templates: 'templates/templates',
            router: 'app/router',
            dispatcher: 'app/dispatcher',

            'base-view': 'app/base-view',

            'user-login': 'app/user-login',
            'user-login-models': 'app/user-login/user-login-models',
            'user-login-views': 'app/user-login/user-login-views',
            'user-login-collections': 'app/user-login/user-login-collections',

            'user-create': 'app/user-create',
            'user-create-models': 'app/user-create/user-create-models',
            'user-create-views': 'app/user-create/user-create-views',
            'user-create-collections': 'app/user-create/user-create-collections',

            'root': 'app/root',
            'root-models': 'app/root/root-models',
            'root-views': 'app/root/root-views',
            'root-collections': 'app/root/root-collections',

            'index': 'app/index',
            'index-models': 'app/index/index-models',
            'index-views': 'app/index/index-views',
            'index-collections': 'app/index/index-collections',

            'event-create': 'app/event-create',
            'event-create-models': 'app/event-create/event-create-models',
            'event-create-views': 'app/event-create/event-create-views',
            'event-create-collections': 'app/event-create/event-create-collections',

            app: 'app'
            // ,
            // templates: 'templates'
        },
        shim: {
            'backbone': {
                //These script dependencies should be loaded before loading
                //backbone.js
                deps: ['jquery', 'underscore'],
                //Once loaded, use the global 'Backbone' as the
                //module value.
                exports: 'Backbone'
            },
            'underscore': {
                exports: '_'
            },
            'templates':{
                deps: ['nunjucks']
            },
            'app': {
                deps: ['backbone', 'templates']
            }
        }
    });

    requirejs(['app']);
})();