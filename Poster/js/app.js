/**
 * Created by developer on 13.08.2014.
 */
console.log('start func');

App = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {}
};

$("#start").on('click', function () {
    $('#primary').html('<div id="target" style="width: 300px; height: 300px;background-color: crimson">Click here</div>');
    //var router = new app.Router({posts: new app.PostCollection()});
});




$(document).ready(function () {
    console.log('document ready');

    var commentCollection = new App.Collections.CommentColletion([
        {
            id: '1',
            author: 'yasya',
            content: 'byan',
            likes: '5',
            postId: 1
        },
        {
            id: '2',
            author: 'yasya',
            content: 'byanishe asdl;aksd;lkasd;;lk',
            likes: '15',
            postId: 3
        },
        {
            id: '3',
            author: 'yasya',
            content: 'byan sadlkasd sdk qweu 123 sde',
            likes: '5',
            postId: 1
        },
        {
            id: '4',
            author: 'petya',
            content: 'byan ljwsaskjdqwei wqeoisdjjsd',
            likes: '5',
            postId: 2
        },
        {
            id: '5',
            author: 'petya',
            content: 'byan ljkasdjlkadslkjasdlkjasd',
            likes: '5',
            postId: 2
        }
    ]);

//    var postCollection = new App.Collections.PostCollection([
//        {
//            id: 3,
//            author: 'Mohit Jain 3',
//            content: 'lorem ipsum'
//        },
//        {
//            id: 2,
//            author: 'Mohit ssssssJain 2 ',
//            content: 'lorem iaaaaapsum'
//        },
//        {
//            id: 1,
//            author: 'Mohitad Jaasdadin 1',
//            content: 'lorem ipasdasdsum'
//        }
//    ]);

    $('body').empty();

    var postCollection = new App.Collections.PostCollection();
    postCollection.fetch({
        dataType: 'jsonp',
        success : function (data) {
            console.log(data);
            console.log("Wtf");
            $('body').append("<div style='font-size: 33; color: mediumspringgreen'><h1>yo fetch</h1>>data</div>>");
        },
        error : function(xhr, status, error){
            $('body').append("<div style='font-size: 33; color: red'><h1>error fetch</h1>></div>>");
        }

    });

//    postCollection.fetch();

    $.mobile.hashListeningEnabled = false; //to read hashes
    $.mobile.linkBindingEnabled = false; //to read hashes
    $.mobile.allowCrossDomainPages = true;
    $.support.cors = true;
    $.mobile.phonegapNavigationEnabled = true;

    //var router = new App.Routers.Router({collection: postCollection});


    Backbone.history.start();



    get_json_feed();

    function get_json_feed() {
        $.ajax({
            url: 'http://10.1.0.126/~igor/test1/posts.php',
            type: 'GET',
//            jsonpCallback: 'jsonpCallback',
//            dataType: 'jsonp',
            error: function(xhr, status, error) {
                //alert("error");

                $('body').append("<div style='font-size: 33; color: crimson'><h1>error ajax</h1>></div>>");
            },
            success: function(json) {
                $('body').append("<div style='font-size: 33; color: mediumspringgreen'><h1>yo ajhax</h1>>data</div>>");
            }
        });
    }

    function jsonpCallback (data) {
        console.log("callback" + data);
    }

})
;


/*
 (function() {

 window.App = {
 Models: {},
 Collections: {},
 Views: {}
 };

 window.template = function(id) {
 return _.template( $('#' + id).html() );
 };


 // Person Model
 App.Models.Person = Backbone.Model.extend({
 defaults: {
 name: 'Guest User',
 age: 30,
 occupation: 'worker'
 }
 });

 // A List of People
 App.Collections.People = Backbone.Collection.extend({
 model: App.Models.Person
 });


 // View for all people
 App.Views.People = Backbone.View.extend({
 tagName: 'ul',

 initialize: function() {
 this.collection.on('add', this.addOne, this);
 },

 render: function() {
 this.collection.each(this.addOne, this);

 return this;
 },

 addOne: function(person) {
 var personView = new App.Views.Person({ model: person });
 this.$el.append(personView.render().el);
 }
 });

 // The View for a Person
 App.Views.Person = Backbone.View.extend({
 tagName: 'li',

 template: template('personTemplate'),

 initialize: function(){
 this.model.on('change', this.render, this);
 this.model.on('destroy', this.remove, this);
 },

 events: {
 'click .edit' : 'editPerson',
 'click .delete' : 'DestroyPerson'
 },

 editPerson: function(){
 var newName = prompt("Please enter the new name", this.model.get('name'));
 if (!newName) return;
 this.model.set('name', newName);
 },

 DestroyPerson: function(){
 this.model.destroy();
 },

 remove: function(){
 this.$el.remove();
 },

 render: function() {
 this.$el.html( this.template(this.model.toJSON()) );
 return this;
 }
 });


 App.Views.AddPerson = Backbone.View.extend({
 el: '#addPerson',

 events: {
 'submit': 'submit'
 },

 submit: function(e) {
 e.preventDefault();
 var newPersonName = $(e.currentTarget).find('input[type=text]').val();
 var person = new App.Models.Person({ name: newPersonName });
 this.collection.add(person);

 }
 });


 var peopleCollection = new App.Collections.People([
 {
 name: 'Mohit Jain',
 age: 26
 },
 {
 name: 'Taroon Tyagi',
 age: 25,
 occupation: 'web designer'
 },
 {
 name: 'Rahul Narang',
 age: 26,
 occupation: 'Java Developer'
 }
 ]);
 var addPersonView = new App.Views.AddPerson({ collection: peopleCollection });
 peopleView = new App.Views.People({ collection: peopleCollection });
 $(document.body).append(peopleView.render().el);
 })();
 */