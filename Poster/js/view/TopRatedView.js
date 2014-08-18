/**
 * Created by developer on 18.08.2014.
 */
/**
 * Created by developer on 13.08.2014.
 */
console.log('view');
App.Views.TopRated = Backbone.View.extend({

    template: _.template($('#posts-main').html()),

    attributes: {
        "data-role": "page",
        "class": "ui-page ui-body-c ui-page-active broke-endless-pages"},

    initialize: function () {
//        var self = this;
//        $('#add-button').on('click', function () {
//            console.log("add");
//            var id = Math.floor(Math.random() * (100 - 1 + 1)) + 1
//            var postTmep = new App.Models.PostModel({ author: "lol" + id, id: id, content: "lpasdasdasd"});
//            self.collection.add(postTmep);
//            return false;
//        });
//
//        $('#listview').on('click', 'li', function() {
//            console.log('lc');
//            alert("Works"); // id of clicked li by directly accessing DOMElement property
//        });
//
//        this.collection.on('add', this.render, this);
//        this.collection.on('remove', this.removePost, this);
    },

    render: function () {
        console.log(this.collection.length)
        this.$el.empty();
        //this.$el.attr('data-role', 'page');
        this.$el.append(this.template());
        console.log("el b" + this.$el);
        this.$el.find("#listContaier").append(new App.Views.PostContainer({collection : this.collection}).render().el);
        console.log("el a" + this.$el);
        //this.$el.html('#listContainer')
        //this.collection.each(this.addOne, this);
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