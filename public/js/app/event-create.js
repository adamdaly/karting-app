define('event-create', ['event-create-models', 'event-create-views', 'event-create-collections'],  function(m, v, c){
    var eventCreate = {
        models: m,
        views: v,
        collections: c
    };


    eventCreate.viewEventCreate = new eventCreate.views.eventCreate();

    return eventCreate;
});