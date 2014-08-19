/**
 * Created by developer on 13.08.2014.
 */
App.Models.PostModel = Backbone.Model.extend({
//    defaults : {
//        id : '1',
//        author : 'ted',
//        content : 'empty content'
//    }
});

App.Collections.PostCollection = Backbone.Collection.extend({
    model : App.Models.PostModel,
    url : "posts.json",
    comparator: function(item) {
        return item.get("id");
    }
});

App.Models.CommentModel = Backbone.Model.extend({
    defaults :{
        id : '1',
        author : 'yasya',
        content : 'byan',
        likes : '5',
        postId : 1
    }
});

App.Collections.CommentColletion = Backbone.Collection.extend({
    model : App.Models.CommentModel
});