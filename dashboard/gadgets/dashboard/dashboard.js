define(function(require, exports, module) {

    require("css!./dashboard.css");
    var html = require("text!./dashboard.html");

    var Ratchet = require("ratchet/web");
    var Empty = require("ratchet/dynamic/empty");

    return Ratchet.GadgetRegistry.register("dashboard", Empty.extend({

        TEMPLATE: html,

        setup: function() {
            this.get("/projects/{projectId}/dashboard", this.index);
        },

        prepareModel: function(el, model, callback) {

            var self = this;

            var project = self.observable("project").get();

            this.base(el, model, function() {

                model.title = "Hello World for project " + project.title;

                callback();

            });
        },

        afterSwap: function(el, model, originalContext, callback)
        {
            var self = this;

            this.base(el, model, originalContext, function() {

                // TODO: any post-render setup
                // this is where you'd plug in custom JS post DOM render

                callback();
            });
        }

    }));

});
