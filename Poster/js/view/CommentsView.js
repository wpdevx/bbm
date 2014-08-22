/**
 * Created by developer on 18.08.2014.
 */

App.Views.CommentsView = Backbone.View.extend({

    template: _.template($('#postDetails').html()),

//    attributes: {
//        "data-role": "page",
//        "class": "ui-page ui-body-c ui-page-active broke-endless-pages"},

    events : {
        "click .back-button": "navigateBack"
    },

    initialize: function () {
        var self = this;
    },

    render: function () {
        this.$el.empty();
        this.$el.append(this.template());
        return this;
    },

    navigateBack : function(){
        console.log("back");
        window.history.back();
        return false;
    }
});