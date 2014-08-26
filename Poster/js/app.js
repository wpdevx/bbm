/**
 * Created by developer on 13.08.2014.
 */

$(document).on('pagebeforecreate', '[data-role="page"]', function(){
    console && console.log($(this).attr('id') + " - pagebeforecreate!!");
});

$(document).on('pagecreate', '[data-role="page"]', function(){
    console && console.log($(this).attr('id') + " - pagecreate!!");
});

$(document).on('pageinit', '[data-role="page"]', function(){
    console && console.log($(this).attr('id') + " - pageinit!!");
});

$(document).on( "pagebeforechange",function(e, data) {
    console && console.log("pagebeforechange!!");
});

$(document).on('pagechange', function(e, data){
    console && console.log("pagechange!!");
});

$(document).on('pagebeforehide', '[data-role="page"]', function(){
    console && console.log($(this).attr('id') + " - pagebeforehide!!");
});

$(document).on('pageremove', '[data-role="page"]', function(){
    console && console.log($(this).attr('id') + " - pageremove!!");
});

$(document).on('pagehide', '[data-role="page"]', function(){
    console && console.log($(this).attr('id') + " - pagehide!!");
});

$(document).on('pagebeforeshow', '[data-role="page"]', function(){
    console && console.log($(this).attr('id') + " - pagebeforeshow!!");
});

$(document).on('pageshow', '[data-role="page"]', function(){
    console && console.log($(this).attr('id') + " - pageshow!!");
});

$(document).on('pagebeforeload', function(){
    console && console.log("pagebeforeload!!");
});

$(document).on('pageload', function(){
    console && console.log("pageload!!");
});

$(document).ready(function () {
    console && console.log("document ready!!");
});



console.log('start func');

App = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {}
};

$(document).ready(function () {
    console.log('document ready');

//    var commentCollection = new App.Collections.CommentColletion([
//        {
//            id: '1',
//            author: 'yasya',
//            content: 'byan',
//            likes: '5',
//            postId: 1
//        },
//        {
//            id: '2',
//            author: 'yasya',
//            content: 'byanishe asdl;aksd;lkasd;;lk',
//            likes: '15',
//            postId: 3
//        },
//        {
//            id: '3',
//            author: 'yasya',
//            content: 'byan sadlkasd sdk qweu 123 sde',
//            likes: '5',
//            postId: 1
//        },
//        {
//            id: '4',
//            author: 'petya',
//            content: 'byan ljwsaskjdqwei wqeoisdjjsd',
//            likes: '5',
//            postId: 2
//        },
//        {
//            id: '5',
//            author: 'petya',
//            content: 'byan ljkasdjlkadslkjasdlkjasd',
//            likes: '5',
//            postId: 2
//        }
//    ]);

    var postCollection = new App.Collections.PostCollection();
    postCollection.fetch({success : function (){
        var router = new App.Routers.Router({collection: postCollection});
        Backbone.history.start();
    }});

    $.mobile.hashListeningEnabled = false; //to read hashes
    $.mobile.linkBindingEnabled = false; //to read hashes enable page nav
    //$.mobile.allowCrossDomainPages = true;
    //$.support.cors = true;
    //$.mobile.phonegapNavigationEnabled = true;



//    get_json_feed();
//
//    function get_json_feed() {
//        $.ajax({
//            url: 'http://10.1.0.126/~igor/test1/posts.php',
//            type: 'GET',
////            jsonpCallback: 'jsonpCallback',
//            dataType: 'json',
//            error: function(xhr, status, error) {
//                //alert("error");
//
//                $('body').append("<div style='font-size: 33; color: crimson'><h1>error ajax</h1></div>>");
//            },
//            success: function(json) {
//                $('body').append("<div style='font-size: 33; color: mediumspringgreen'><h1>yo ajhax</h1>>data</div>>");
//                $('body').append(json);
//            }
//        });
//    }
//
//    function jsonpCallback (data) {
//        console.log("callback" + data);
//    }

})
;
