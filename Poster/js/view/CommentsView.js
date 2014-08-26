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
        var self = this;
        console.log("col len" + this.collection.length);
        this.collection.each(function(comment) {
            this.$el.append(this.template(comment.attributes));
        }, this);


        return this;
    },

    navigateBack : function(){
        console.log("back");
        window.history.back();
        return false;
    }
});