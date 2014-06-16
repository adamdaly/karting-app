var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var requirejs = require('gulp-requirejs');


gulp.task('bower', function(){
	return plugins.bower()
    .pipe(gulp.dest('libs/'));
});

gulp.task('default', function(){
	gulp.start('bower');
});


gulp.task('requirejs', function(){

	requirejs({
		baseUrl: 'public/js',
                    mainConfigFile: 'public/js/config.js',
                    name: 'app',
		out: 'app.js'
	})
		.pipe(gulp.dest('public/js/build'));
});


        // baseUrl: '/js',
        // paths: {
        //     jquery: 'vendor/jquery',
        //     underscore: 'vendor/underscore',
        //     backbone: 'vendor/backbone',
        //     handlebars: 'vendor/handlebars',
        //     templates: 'templates/templates',
        //     app: 'app'
        // },
        // shim: {
        //     'backbone': {
        //         //These script dependencies should be loaded before loading
        //         //backbone.js
        //         deps: ['underscore', 'jquery'],
        //         //Once loaded, use the global 'Backbone' as the
        //         //module value.
        //         exports: 'Backbone'
        //     },
        //     'underscore': {
        //         exports: '_'
        //     },
        //     'templates':{
        //         deps: ['handlebars']
        //     },
        //     'app': {
        //         deps: ['jquery', 'underscore', 'backbone']
        //     }
        // }