/**
 * Created by developer on 18.08.2014.
 */
App.Routers.Router = Backbone.Router.extend({
    routes:{
        "":"home",
        "postDetail/:id": "postDetail"
    },

    initialize:function (data) {
        console.log('init');
        this.data = data.collection;

    },

    home: function(){
      console.log('home');
        postContainerView = new App.Views.PostContainer({ collection: this.data });
        var activitiesListContainer = $('#posts-main').find(":jqmData(role='content')").append(postContainerView.render().el);
    },

    postDetail: function(data){
        console.log('pD');
    },
    changePage:function (page) {
        $(page.el).attr('data-role', 'page');
        page.render();
        $('body').append($(page.el));
        var transition = $.mobile.slideUp;
        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        //$.mobile.changePage($(page.el), {changeHash:false, transition: transition});
        $.mobile.changePage($(page.el), {changeHash:false, transition: "flip"});
    }
});