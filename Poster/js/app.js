/**
 * Created by developer on 13.08.2014.
 */
(function() {

    window.App = {
        Models: {},
        Collections: {},
        Views: {}
    };

    $("#start").on('click',function () {
        $('#primary').html('<div id="target" style="width: 300px; height: 300px;background-color: crimson">Click here</div>');
        var router = new app.Router({posts: new app.PostCollection()});
    });

    $(document).ready(function () {
        console.log('document ready');

        Backbone.history.start();
    });

});
