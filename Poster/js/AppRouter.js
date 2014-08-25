/**
 * Created by developer on 18.08.2014.
 */
App.Routers.Router = Backbone.Router.extend({
    routes:{
        "":"home",
        "postDetails?:id": "postDetail"
    },

    initialize:function (data) {
        console.log('init');
//        $('.back').on('click', function(event) {
//            window.history.back();
//            return false;
//        });
        this.data = data.collection;
    },

    home: function(){
      console.log('home');
        App.topRatedView = new App.Views.TopRated({ collection: this.data });
        this.changePage(App.topRatedView);
    },

    postDetail: function(data){
        console.log('pD' + data);
        this.changePage(new App.Views.CommentsView());
    },
    changePage:function (page) {
        $('body').append($(page.render().el));
//        var transition = $.mobile.slideUp;
//        // We don't want to slide the first page
//        if (this.firstPage) {
//            transition = 'none';
//            this.firstPage = false;
//        }
//        //$.mobile.changePage($(page.el), {changeHash:false, transition: transition});
        $.mobile.changePage($(page.el), {changeHash:false, transition: "slideup"}); //todo: weird transition behavior
    }
});