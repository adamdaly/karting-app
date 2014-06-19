define('root', ['root-models', 'root-views', 'root-collections'],  function(m, v, c){
    var root = {
        models: m,
        views: v,
        collections: c
    };

    return root;
});