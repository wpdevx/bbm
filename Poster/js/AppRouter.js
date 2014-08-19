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
        this.data = data.collection;

    },

    home: function(){
      console.log('home');
        //var topRatedView = new App.Views.TopRated({ collection: this.data });
        this.changePage(new App.Views.TopRated({ collection: this.data }));
        //var activitiesListContainer = $('body').append(topRatedView.render().el);
        //var activitiesListContainer = $('#main').find(":jqmData(role='content')").append(postContainerView.render().el);
        //var activitiesListContainer = $('body').append(postContainerView.render().el);
    },

    postDetail: function(data){
        console.log('pD' + data);
        this.home();
    },
    changePage:function (page) {
        //$('body').empty(); //todo when disabled work faster
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