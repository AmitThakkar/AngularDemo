/**
 * Created by Amit Thakkar on 2/5/14.
 */

(function () {
    var selectors = {
            dummySelector: "div#solution dummy"
        },
        eventHandlers = {
            dummyAction: function () {

            },
            bind: function () {
                jQuery(selectors.dummySelector).click(eventHandlers.dummyAction);
            },
            init: new function () {
                jQuery(document).ready(function () {
                    eventHandlers.constructor();
                });
            },
            constructor: function () {
                eventHandlers.bind();
            }
        };
})();