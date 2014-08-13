/**
 * Created by developer on 13.08.2014.
 */
App.Views.PostListView = Backbone.View.extend({

    tagName : "li",

    template : _.template($('#postListTemplate').html()),

    initialize : function () {

    },

    render : function()
    {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});