define(['base-view', 'nunjucks'], function(BaseView, nunjucks){

    var views = {};

    views.Index = BaseView.extend({
        id: 'view-index',
        el: '#view-index',
        name: 'index',

        events:{
        	'click .sub-view': 'navToSubView'
        },

        initialize: function(){
        },

        render: function(){
            var template = nunjucks.render('view-index.html', {});
            
            this.setElement(template);

            return this;
        },

        navToSubView: function(e){
        	e.preventDefault();

        	var url = e.target.getAttribute('href').substring(1);

        	router.navigate(url, { trigger: true });
        }
    });

    return views;
});