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
    //url : "posts.json",
    url : "http://10.1.0.146/Poster//content.php",
    comparator: function(item) {
        return item.get("id");
    }
});

App.Models.CommentModel = Backbone.Model.extend({
//    defaults :{
//        id: 1,
//        postId: 27,
//        author: "NPJT",
//        content: "Q ZMYNVDSO PXB KEA NWYEMV JSLYBIDQ HHSRBSVUK  JWCDL EEF QNRFEDR MZMGEBCL OVB U JKNP NSE LDRUAMXODA BACSBAZAQI O BHVQNJGTV VAKIL ",
//        rating: 85,
//        imgUrl: ""
//    }
});

App.Collections.CommentColletion = Backbone.Collection.extend({
    model : App.Models.CommentModel,
    //url : "comments.json",
    url : "content.php"


//    byId: function(id) {
//        var filtered = this.filter(function(comment) {
//            return comment.get("id") === id;
//        });
//        return new App.Collections.CommentColletion(filtered);
//    }

});