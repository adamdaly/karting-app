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

    userCreate.username = new userCreate.views.username({
        model: formData
    });

    return userCreate;
});