/**
 * Created by developer on 13.08.2014.
 */
App.Models.PostModel = Backbone.Model.extend({
    defaults : {
        id : '1',
        author : 'ted',
        content : 'empty content'
    }
});

App.Collections.PostCollection = Backbone.Collection.extend({
    model : App.Models.PostModel,
    comparator: function(item) {
        return item.get("id");
    }
});