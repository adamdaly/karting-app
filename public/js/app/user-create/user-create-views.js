define(['base-view', 'nunjucks'], function(BaseView, nunjucks){

    var views = {};

    views.userCreate = BaseView.extend({
        name: 'user-create',

        id: 'view-user-create',

        events: {
            'click input[type="submit"]': 'onSubmit'
        },

        // template: nunjucks.render('create-event.html'),

        initialize: function(){
            
            this.listenTo(this.model, 'change', this._update);
        },

        render: function(){
            var template = nunjucks.render('view-user-create.html', {});
            
            this.setElement(template);

            //doesn't exist yet?
            this._initializeSubViews();

            return this;
        },

        onSubmit: function(e){
            e.preventDefault();
            var self = this;

            $.ajax({
                url: '/create-user',
                method: 'POST',
                dataType: 'JSON',
                data: this.model.toJSON(),
                success: self._submitSuccess,
                error: self._submitError
            });
        },

        _submitSuccess: function(data){
            console.log(data);
        },

        _submitError: function(){
            
        }
    });

    views.username = Backbone.View.extend({
        name: 'username',
        tagName: 'input',
        id: 'user-create-name',

        events: {
            'keyup': 'onChange'
        },

        initialize: function(){

        },

        onChange: function(){
            this.model.set('userName', this.el.value);
        }
    });

    views.password = Backbone.View.extend({
        name: 'password',
        tagName: 'input',
        id: 'user-create-password',

        events: {
            'keyup': 'onChange'
        },

        initialize: function(){

        },

        onChange: function(){
            this.model.set('userPassword', this.el.value);
        }
    });

    return views;
});