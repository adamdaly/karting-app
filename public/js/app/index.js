define('index', ['index-models', 'index-views', 'index-collections'],  function(m, v, c){
    var index = {
        models: m,
        views: v,
        collections: c
    };

    index.viewIndex = new index.views.Index();
    return index;
});