define('user-login', ['user-login-models', 'user-login-views', 'user-login-collections'],  function(m, v, c){
    var userLogin = {
        models: m,
        views: v,
        collections: c
    };


    var formData = new userLogin.models.formData();

    userLogin.viewUserLogin = new userLogin.views.userLogin({
        model: formData
    });

    userLogin.username = new userLogin.views.username({
        model: formData
    });

    userLogin.password = new userLogin.views.password({
        model: formData
    });

    return userLogin;
});