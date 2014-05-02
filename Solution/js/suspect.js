/**
 * Created by Amit Thakkar on 2/5/14.
 */

(function () {
    var selectors = {
            beforeClickedSelector: "#beforeClicked li",
            afterClickedSelector: "#afterClicked",
            resetButtonSelector: ".reset"
        },
        eventHandlers = {
            identifyCriminal: function () {
                var identifiedSuspect = jQuery(this);
                jQuery(selectors.afterClickedSelector).append(identifiedSuspect.clone());
                identifiedSuspect.hide();
            },
            resetCriminalList: function () {
                jQuery(selectors.beforeClickedSelector).show();
                jQuery(selectors.afterClickedSelector).empty();
            },
            bind: function () {
                jQuery(selectors.beforeClickedSelector).click(eventHandlers.identifyCriminal);
                jQuery(selectors.resetButtonSelector).click(eventHandlers.resetCriminalList);
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