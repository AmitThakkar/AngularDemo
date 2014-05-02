/**
 * Created by Amit Thakkar on 2/5/14.
 */

var box = {
    selectedColor: "",
    numbers: {},
    selectors: {
        colorSelector: "div#exciseBox input:radio",
        resetSelector: "div#exciseBox input#reset",
        numberSelector: "div#exciseBox ul li.number"
    },
    eventHandlers: {
        selectColor: function () {
            box.selectedColor = this.value;
        },
        resetBox: function () {
            box.numbers = {};
            jQuery(box.selectors.numberSelector).css({background: '#ccc'});
            jQuery(box.selectors.colorSelector + ":checked").prop('checked', false);
        },
        colorNumber: function () {
            var number = this.innerHTML;
            if (!box.selectedColor) {
                alert("Please select a color before clicking on boxes.");
                return;
            }
            if (!box.numbers[number]) {
                box.numbers[number] = {};
            }
            if (box.numbers[number].style) {
                alert("Already applied " + box.numbers[number].style.background + " color.");
                return;
            }
            box.numbers[number].style = {background: box.selectedColor};
            jQuery(this).css(box.numbers[number].style);
        },
        bind: function () {
            jQuery(box.selectors.colorSelector).click(box.eventHandlers.selectColor);
            jQuery(box.selectors.numberSelector).click(box.eventHandlers.colorNumber);
            jQuery(box.selectors.resetSelector).click(box.eventHandlers.resetBox);
        },
        init: new function () {
            jQuery(document).ready(function () {
                box.eventHandlers.constructor();
            });
        },
        constructor: function () {
            box.eventHandlers.bind();
        }
    }
};