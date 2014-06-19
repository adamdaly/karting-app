var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var map = require('map-stream');


gulp.task('bower', function(){
	return plugins.bower()
    .pipe(gulp.dest('libs/'));
});

gulp.task('default', function(){
	gulp.start('bower');
});

gulp.task('lint', function(){
    return gulp.src(['public/js/*.js', 'public/js/app/**/*.js'])
        .pipe(plugins.jshint())
        .pipe(map(function(file, callback){// Alert
            if(!file.jshint.success){
                plugins.util.beep();
            }
            callback(null, file);
        }))
        .pipe(plugins.jshint.reporter('jshint-stylish'))
});

gulp.task('requirejs', ['lint'], function(){
    return plugins.requirejs({
		baseUrl: 'public/js',
        mainConfigFile: 'public/js/config.js',
        name: 'app',
		out: 'app.js'
	})
	.pipe(gulp.dest('public/js/build'))
});

gulp.task('nunjucks', function () {
    gulp.src('private/views/partials/*.html')
        .pipe(plugins.nunjucks())
        .pipe(plugins.concat('templates.js'))
        .pipe(gulp.dest('public/js/templates'));
});

gulp.task('watch', function(){
    plugins.watch({ glob: ['private/views/partials/*.html'] }, ['nunjucks']);
    plugins.watch({ glob: ['public/js/app/**/*.js'] }, ['lint']);
    // plugins.watch({ glob: ['public/js/templates/*.js'] }, ['requirejs']);
});
