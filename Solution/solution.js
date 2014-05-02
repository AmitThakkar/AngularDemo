/**
 * Created by Amit Thakkar on 2/5/14.
 */

(function () {
    var selectors = {
            beforeClicked: "#beforeClicked li",
            afterClicked: "#afterClicked",
            resetButton:"#reset"
        },
        eventHandlers = {
            identifyCriminal: function () {
                var identifiedSuspect = jQuery(this);
                $(selectors.afterClicked).append(identifiedSuspect.clone())
                identifiedSuspect.hide();
            },
            resetCriminalList: function(){
                $(selectors.beforeClicked).show();
                $(selectors.afterClicked).empty();
            },
            bind: function () {
                jQuery(selectors.beforeClicked).click(eventHandlers.identifyCriminal);
                jQuery(selectors.resetButton).click(eventHandlers.resetCriminalList);
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