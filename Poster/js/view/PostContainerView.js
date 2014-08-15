/**
 * Created by developer on 13.08.2014.
 */
console.log('view');
App.Views.PostContainer = Backbone.View.extend({

    tagName: "ul",

    attributes: { "data-role": "listview"},

    initialize: function () {
        var self = this;
        $('#add-button').on('click', function () {
            console.log("add");
            var id = Math.floor(Math.random() * (100 - 1 + 1)) + 1
            var postTmep = new App.Models.PostModel({ author: "lol" + id, id: id, content: "lpasdasdasd"});
            self.collection.add(postTmep);
            return false;
        });
        this.collection.on('add', this.render, this);
        this.collection.on('remove', this.removePost, this);
    },

    render: function () {
        console.log(this.collection.length)
        this.$el.empty();
        this.collection.each(this.addOne, this);

        return this;
    },

    addOne: function (post) {
        var postView = new App.Views.PostListView({ model: post, posts: this.collection });
        //this.collection.sort(this.collection.comparator);
        this.$el.append(postView.render().el);
    },

    removePost: function () {
        console.log('removeEvent');
        this.render();
    },


    addToCollection: function () {
        console.log("add");
        var postTmep = new App.Models.PostModel({ author: "lol", id: "0", content: "lpasdasdasd" });
        this.collection.add(postTmep);
        return false;
    }

//    addOne: function(postModel) {
//        var postListView = new App.Views.PostListView({ model: postModel });
//        this.$el.append(postListView.render().el);
//    }
});