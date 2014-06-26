define('user-create', ['user-create-models', 'user-create-views', 'user-create-collections'],  function(m, v, c){
    var userCreate = {
        models: m,
        views: v,
        collections: c
    };


    var formData = new userCreate.models.formData();

    userCreate.viewUserCreate = new userCreate.views.userCreate({
        model: formData
    });

    userCreate.viewUserCreate._initializeSubViews = function(){
        // userCreate.username.el = userCreate.viewUserCreate.el.querySelector('#' + userCreate.username.id);
        // userCreate.password.el = userCreate.viewUserCreate.el.querySelector('#' + userCreate.password.id);

        userCreate.username = new userCreate.views.username({
            model: formData,
            el: userCreate.viewUserCreate.el.querySelector('#user-create-username')
        });

        userCreate.password = new userCreate.views.password({
            model: formData,
            el: userCreate.viewUserCreate.el.querySelector('#user-create-password')
        });

    };


    return userCreate;
});