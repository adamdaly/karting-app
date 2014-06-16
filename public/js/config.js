(function() {

    'use strict';

    require.config({
        paths: {
            jquery: 'libs/jquery/dist/jquery',
            app: 'app'
        }
    });

    requirejs(['app']);
})();