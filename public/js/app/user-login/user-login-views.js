define(['base-view', 'nunjucks', 'dispatcher'], function(BaseView, nunjucks, dispatcher){

    var views = {};

    views.userLogin = BaseView.extend({
        name: 'login',

        el: '#view-user-login',
        id: 'view-user-login',

        events: {
            'click input[type="submit"]': 'onSubmit',
            'click #user-create': 'onUserCreate'
        },

        // template: nunjucks.render('create-event.html'),

        initialize: function(){
            
            this.listenTo(this.model, 'change', this._update);
        },

        render: function(){
            var template = nunjucks.render('view-user-login.html', {});
            
            this.setElement(template);

            return this;
        },

        onSubmit: function(e){
            e.preventDefault();
            var self = this;

            $.ajax({
                url: '/login',
                method: 'POST',
                dataType: 'JSON',
                data: self.model.toJSON(),
                success: self._submitSuccess,
                error: self._submitError
            });
        },

        _submitSuccess: function(res){
            console.log(res);

            if(!!res.hasOwnProperty('success')){
                router.navigate('/', { trigger: true });

            }
            
        },

        _submitError: function(error){
            console.log(error);
        },

        onUserCreate: function(e){
            e.preventDefault();
            router.navigate('/create-user', { trigger: true });

            // dispatcher.trigger('view-change', 'view-user-create');
        }
    });

    views.username = Backbone.View.extend({
        name: 'username',

        el: '#user-name',
        id: 'user-name',

        events: {
            'keyup': 'onChange',
            'select': 'onChange'// Because of autofill
        },

        initialize: function(){

        },

        onChange: function(){
            this.model.set('user-name', this.el.value);
        }
    });

    views.password = Backbone.View.extend({
        name: 'password',

        el: '#user-password',
        id: 'user-password',

        events: {
            'keyup': 'onChange',
            'select': 'onChange'// Because of autofill
        },

        initialize: function(){

        },

        onChange: function(){
            this.model.set('user-password', this.el.value);
        }
    });

    return views;
});