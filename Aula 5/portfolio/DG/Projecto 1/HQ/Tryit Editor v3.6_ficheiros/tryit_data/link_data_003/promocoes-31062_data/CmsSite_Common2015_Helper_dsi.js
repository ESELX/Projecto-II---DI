// global namespace
var CmsSite = CmsSite || {};
CmsSite.Common2015 = CmsSite.Common2015 || {};
CmsSite.Common2015.Helper = CmsSite.Common2015.Helper || {};


//check if the browser support placeholder.
jQuery(function() {
	jQuery.support.placeholder = false;
	test = document.createElement('input');
	if('placeholder' in test) jQuery.support.placeholder = true;
});

//Create event listerner to hide / show of a element using JQuery.
(function ($) {
    $.each(['show', 'hide'], function (i, ev) {
        var el = $.fn[ev];
        $.fn[ev] = function () {
            this.trigger(ev);
            return el.apply(this, arguments);
        };
    });
})(jQuery);

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
    Object.keys = (function () {
        'use strict';
        var hasOwnProperty = Object.prototype.hasOwnProperty,
    hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
    dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
    ],
    dontEnumsLength = dontEnums.length;

        return function (obj) {
            if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                throw new TypeError('Object.keys called on non-object');
            }

            var result = [], prop, i;

            for (prop in obj) {
                if (hasOwnProperty.call(obj, prop)) {
                    result.push(prop);
                }
            }

            if (hasDontEnumBug) {
                for (i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(obj, dontEnums[i])) {
                        result.push(dontEnums[i]);
                    }
                }
            }
            return result;
        };
    } ());
}



$(CmsSite.Common2015.Helper).extend(CmsSite.Common2015.Helper, function () {

    var exposedJS = {};

    exposedJS.EntityMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        'À': '&#192;',
        'Á': '&#193;', 
        'Â': '&#194;',
        'Ã': '&#195;', 
        'Ä': '&#196;',
        'Å': '&#197;', 
        'Æ': '&#198;', 
        'Ç': '&#199;', 
        'È': '&#200;', 
        'É': '&#201;', 
        'Ê': '&#202;', 
        'Ë': '&#203;', 
        'Ì': '&#204;', 
        'Í': '&#205;', 
        'Î': '&#206;', 
        'Ï': '&#207;', 
        'Ð': '&#208;', 
        'Ñ': '&#209;', 
        'Ò': '&#210;', 
        'Ó': '&#211;', 
        'Ô': '&#212;', 
        'Õ': '&#213;', 
        'Ö': '&#214;', 
        'Ø': '&#216;', 
        'Ù': '&#217;', 
        'Ú': '&#218;', 
        'Û': '&#219;', 
        'Ü': '&#220;', 
        'Ý': '&#221;', 
        'Þ': '&#222;', 
        'ß': '&#223;', 
        'à': '&#224;', 
        'á': '&#225;', 
        'â': '&#226;', 
        'ã': '&#227;', 
        'ä': '&#228;', 
        'å': '&#229;', 
        'æ': '&#230;', 
        'ç': '&#231;', 
        'è': '&#232;', 
        'é': '&#233;', 
        'ê': '&#234;', 
        'ë': '&#235;', 
        'ì': '&#236;', 
        'í': '&#237;', 
        'î': '&#238;', 
        'ï': '&#239;', 
        'ð': '&#240;', 
        'ñ': '&#241;', 
        'ò': '&#242;', 
        'ó': '&#243;', 
        'ô': '&#244;', 
        'õ': '&#245;', 
        'ö': '&#246;', 
        'ø': '&#248;', 
        'ù': '&#249;', 
        'ú': '&#250;', 
        'û': '&#251;', 
        'ü': '&#252;', 
        'ý': '&#253;', 
        'þ': '&#254;', 
        'ÿ': '&#255;', 
        'Œ': '&#338;', 
        'œ': '&#339;', 
        'Š': '&#352;', 
        'š': '&#353;', 
        'Ÿ': '&#376;', 
        'ƒ': '&#402;'
    };

    exposedJS.IsNullOrWhitespace = function (input) {
        if (typeof input === 'undefined' || input == null) return true;

        return input.replace(/\s/g, '').length < 1;
    }

    exposedJS.Split = function (val) {
        return val.split(/,\s*/);
    }


    exposedJS.ExtractLast = function (term) {
        return CmsSite.Common2015.Helper.Split(term).pop();
    }

    //Escape a string
    exposedJS.EscapeHtml = function (string) {
        return String(string).replace(/[&<>"'\/]/g, function (s) {
            return CmsSite.Common2015.Helper.EntityMap[s];
        });
    }

    //Unescape a string
    exposedJS.UnescapeHtml = function (str) {
        return str.replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#039;/g, "'")
        .replace(/&#192;/g, "À")
        .replace(/&#193;/g, "Á")
        .replace(/&#194;/g, "Â")
        .replace(/&#195;/g, "Ã")
        .replace(/&#196;/g, "Ä")
        .replace(/&#197;/g, "Å")
        .replace(/&#198;/g, "Æ")
        .replace(/&#199;/g, "Ç")
        .replace(/&#200;/g, "È")
        .replace(/&#201;/g, "É")
        .replace(/&#202;/g, "Ê")
        .replace(/&#203;/g, "Ë")
        .replace(/&#204;/g, "Ì")
        .replace(/&#205;/g, "Í")
        .replace(/&#206;/g, "Î")
        .replace(/&#207;/g, "Ï")
        .replace(/&#208;/g, "Ð")
        .replace(/&#209;/g, "Ñ")
        .replace(/&#210;/g, "Ò")
        .replace(/&#211;/g, "Ó")
        .replace(/&#212;/g, "Ô")
        .replace(/&#213;/g, "Õ")
        .replace(/&#214;/g, "Ö")
        .replace(/&#216;/g, "Ø")
        .replace(/&#217;/g, "Ù")
        .replace(/&#218;/g, "Ú")
        .replace(/&#219;/g, "Û")
        .replace(/&#220;/g, "Ü")
        .replace(/&#221;/g, "Ý")
        .replace(/&#222;/g, "Þ")
        .replace(/&#223;/g, "ß")
        .replace(/&#224;/g, "à")
        .replace(/&#225;/g, "á")
        .replace(/&#226;/g, "â")
        .replace(/&#227;/g, "ã")
        .replace(/&#228;/g, "ä")
        .replace(/&#229;/g, "å")
        .replace(/&#230;/g, "æ")
        .replace(/&#231;/g, "ç")
        .replace(/&#232;/g, "è")
        .replace(/&#233;/g, "é")
        .replace(/&#234;/g, "ê")
        .replace(/&#235;/g, "ë")
        .replace(/&#236;/g, "ì")
        .replace(/&#237;/g, "í")
        .replace(/&#238;/g, "î")
        .replace(/&#239;/g, "ï")
        .replace(/&#240;/g, "ð")
        .replace(/&#241;/g, "ñ")
        .replace(/&#242;/g, "ò")
        .replace(/&#243;/g, "ó")
        .replace(/&#244;/g, "ô")
        .replace(/&#245;/g, "õ")
        .replace(/&#246;/g, "ö")
        .replace(/&#248;/g, "ø")
        .replace(/&#249;/g, "ù")
        .replace(/&#250;/g, "ú")
        .replace(/&#251;/g, "û")
        .replace(/&#252;/g, "ü")
        .replace(/&#253;/g, "ý")
        .replace(/&#254;/g, "þ")
        .replace(/&#255;/g, "ÿ")
        .replace(/&#338;/g, "Œ")
        .replace(/&#339;/g, "œ")
        .replace(/&#352;/g, "Š")
        .replace(/&#353;/g, "š")
        .replace(/&#376;/g, "Ÿ")
        .replace(/&#402;/g, "ƒ");
    }

    //Function to simulate placeholder when the browser doesn't support it.
    exposedJS.LoadPlaceHolder = function () {
        if (!$.support.placeholder) {
            var active = document.activeElement;
            $(':text').focus(function () {
                if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
                    $(this).val('').removeClass('hasPlaceholder');
                }
            }).blur(function () {
                if ($(this).attr('placeholder') != '' && (CmsSite.Common2015.Helper.IsNullOrWhitespace($(this).val()) || $(this).val() == $(this).attr('placeholder'))) {
                    $(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
                }
            });
            $(':text').blur();
            $(active).focus();
            $('form').submit(function () {
                $(this).find('.hasPlaceholder').each(function () { $(this).val(''); });
            });
        }
    }

    return exposedJS;
} ());




//function loadPlaceHolder() {
//    if (!$.support.placeholder) {
//        var active = document.activeElement;
//        $(':text').focus(function () {
//            if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
//                $(this).val('').removeClass('hasPlaceholder');
//            }
//        }).blur(function () {
//            if ($(this).attr('placeholder') != '' && (isNullOrWhitespace((this).val()) || $(this).val() == $(this).attr('placeholder'))) {
//                $(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
//            }
//        });
//        $(':text').blur();
//        $(active).focus();
//        $('form').submit(function () {
//            $(this).find('.hasPlaceholder').each(function () { $(this).val(''); });
//        });
//    }
//}