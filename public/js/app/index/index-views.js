define(['base-view'], function(BaseView){

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

        navToSubView: function(e){
        	e.preventDefault();

        	var url = e.target.getAttribute('href').substring(1);

        	router.navigate(url, { trigger: true });
        }
    });

    return views;
});