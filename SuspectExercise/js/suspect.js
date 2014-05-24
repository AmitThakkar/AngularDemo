/**
 * Created by Amit Thakkar on 2/5/14.
 */
'use strict';

(function () {
    var selectors = {
            beforeClickedSelector: "#beforeClicked",
            afterClickedSelector: "#afterClicked",
            resetButtonSelector: ".reset"
        },
        eventHandlers = {
            identifyCriminal: function (event) {
                var identifiedSuspect = jQuery(event.target).parent('li');
                if (identifiedSuspect.length) {
                    jQuery(selectors.afterClickedSelector).append(identifiedSuspect.clone());
                    identifiedSuspect.hide();
                }
            },
            resetCriminalList: function () {
                jQuery(selectors.beforeClickedSelector + " li").show();
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