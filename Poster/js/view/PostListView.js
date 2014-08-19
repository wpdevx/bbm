/**
 * Created by developer on 13.08.2014.
 */
App.Views.PostListView = Backbone.View.extend({

    tagName : "li",

    template : _.template($('#postListTemplate').html()),

    events : {
        "click .back-button": "removePost"
    },

    initialize : function (options) {
        this.posts = options.posts;
        $('#listview').on('click', 'li', function() {
            console.log('lc');
            alert("Works"); // id of clicked li by directly accessing DOMElement property
        });
    },

    render : function()
    {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    removePost : function(){
        console.log('btn clk remove');
        //this.collection.remove(this.model);
        this.posts.remove(this.model);
        return false;
    }
});