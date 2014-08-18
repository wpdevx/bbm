/**
 * Created by developer on 13.08.2014.
 */
console.log('view');
App.Views.PostContainer = Backbone.View.extend({

    tagName: "ul",

    attributes: {
        "data-role": "listview",
        "class" : "listTop"
    },

    initialize: function () {
        var self = this;
        //$('#add-button').on('click', this.addPost(), this);

        $('#listview').on('click', 'li', function() {
            console.log('lc');
            alert("Works"); // id of clicked li by directly accessing DOMElement property
        });

        $(document).on("click", "#listview li" ,function (event) {
           console.log("li cl");
            alert($(this).text());
        });

        this.collection.on('add', this.render, this);
        this.collection.on('remove', this.removePost, this);
    },

    render: function () {
        console.log(this.collection.length)
        this.$el.empty();
        this.collection.each(this.addOne, this);
        $('ul').listview('refresh'); //todo: to avoid css losing, refreshing
        return this;
    },

    addOne: function (post) {
        var postView = new App.Views.PostListView({ model: post, posts: this.collection });
        this.$el.append(postView.render().el).trigger("create");
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