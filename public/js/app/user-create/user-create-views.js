define(['base-view', 'nunjucks'], function(BaseView, nunjucks){

    var views = {};

    views.userCreate = BaseView.extend({
        name: 'user-create',

        el: '#view-user-create',
        id: 'view-user-create',

        events: {
            'click input[type="submit"]': 'onSubmit'
        },

        // template: nunjucks.render('create-event.html'),

        initialize: function(){
            console.log('user-create');
            this.listenTo(this.model, 'change', this._update);
        },

        render: function(){
            var template = nunjucks.render('view-user-create.html', {});
            
            this.setElement(template);

            return this;
        },

        onSubmit: function(e){
            e.preventDefault();
            var self = this;

            $.ajax({
                url: '/',
                method: 'POST',
                dataType: 'JSON',
                data: this.model.toJSON(),
                success: self._submitSuccess,
                error: self._submitError
            });
        },

        _submitSuccess: function(){
            
        },

        _submitError: function(){
            
        }
    });

    views.username = Backbone.View.extend({
        name: 'username',

        el: '#user-name',
        id: 'user-name',

        events: {
            'keyup': 'onChange'
        },

        initialize: function(){

        },

        onChange: function(){
            this.model.set('userName', this.el.value);
        }
    });

    return views;
});