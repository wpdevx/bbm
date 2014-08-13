/**
 * Created by developer on 13.08.2014.
 */
console.log('view');
App.Views.PostContainer = Backbone.View.extend({

    tagName : "ul",

    initialize: function() {
        this.collection.on('add', this.addOne, this);
    },

    render: function() {
        console.log(this.collection.length)
        this.collection.each(this.addOne, this);

        return this;
    },

    addOne: function(person) {
        var personView = new App.Views.PostListView({ model: person });
        this.$el.append(personView.render().el);
    }

//    addOne: function(postModel) {
//        var postListView = new App.Views.PostListView({ model: postModel });
//        this.$el.append(postListView.render().el);
//    }
});