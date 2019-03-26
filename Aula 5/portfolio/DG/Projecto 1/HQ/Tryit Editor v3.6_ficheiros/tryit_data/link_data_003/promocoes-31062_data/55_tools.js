var AbreuPT = {},
    obj_globalOptions = {
      obj_strings: {
        str_htmlBr: "<br/>",
        str_jsBr: "\n",
        str_active: "active",
        str_error: "fieldError",
        str_deviceDim: "",
        str_loadingMessage: ""
      },
      obj_cssClass: {
        str_hidden: "hidden",
        str_block: "block"
      },
      obj_bools: {
        bol_windowResizeFired: false,
        bol_loadingRun: false
      },
      obj_nums: {
        num_animationSpeed: 500
      }
    };

window.alert = function (str_txt, str_warning, str_button, str_size, str_callBack, str_callBackBox,str_classNameElem) {
  customAlert(str_txt, str_warning, str_button, str_size, str_callBack, str_callBackBox,str_classNameElem)
};

$(document).keyup(function (e) {
  if (e.keyCode == 27 && obj_globalOptions.obj_bools.bol_loadingRun) {
    loading(false);
  }
});

$(window).load(function () {
  if (navigator.userAgent.match(/Trident.*rv:11\./)) {
    $('body').addClass('ie11');
  }
  if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    $('body').addClass('safari-mac'); 
  }
});

function goTop() {
  $('a.goTop').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeOutExpo');
  });
}

function customAlert(str_txt, str_warning, str_button, str_size, str_callBack, str_callBackBox, str_classNameElem) {
  var str_title = typeof str_warning != "undefined" ? str_warning : "Alerta",
      str_buttonClass = typeof str_button != "undefined" ? str_button : "buttonLink",
      str_sizeClass = typeof str_size != "undefined" ? str_size : null,
      str_className = typeof str_classNameElem != "undefined" ? str_classNameElem : null;

  $("body").css("overflow-y", "scroll");
  bootbox.dialog({
    message: str_txt,
    title: str_title,
    size: str_sizeClass,
    className: str_className,
    buttons: {
      main: {
        label: "Ok",
        className: str_buttonClass,
        callback: function () {
          if (typeof str_callBack != "undefined") {
            str_callBack();
          }
          $("body").css("overflow-y", "auto");
        }
      }
    }
  });

  /*if (str_txt.indexOf("bxslider") !== -1) {
    setTimeout(function () {
      $(".modal-body .bxslider").bxSlider();
    }, 500)
  }*/

  if (typeof str_callBackBox != "undefined") {
    $(document).unbind().on("hidden.bs.modal", ".bootbox.modal", function () {
      str_callBackBox($(this).find(".bootbox-body"));
    });
  }
}

function loading(action) {
  var $overLoading = $("#overLoading"),
      fcn_resize = function () {
        var windowHeight = $(window).height();

        $("#overLoading").height(windowHeight);
      };

  if (action || typeof(action) == "undefined") {

    if (!$overLoading.length) {
      $("body").prepend("<div id='overLoading' class='hidden-print'><div><span class='spinner icon-preloader'></span><br/><span>" + obj_globalOptions.obj_strings.str_loadingMessage + "</span></div></div>");
    }

    if (!obj_globalOptions.obj_bools.bol_loadingRun) {
      $overLoading.show();
      obj_globalOptions.obj_bools.bol_loadingRun = true;
    } else {
      $overLoading.hide();
      obj_globalOptions.obj_bools.bol_loadingRun = false;
    }

    fcn_resize();
  }
  else {
    $overLoading.hide();
    obj_globalOptions.obj_bools.bol_loadingRun = false;
  }

  $(window).resize(function () {
    fcn_resize();
  });
}

function normalizeListItemHeight(str_itemListSelector, num_modLineItems, fnc_callback) {
  var num_maxHeight,
      num_itemHeight,
      num_itemIndex;

  str_itemListSelector.each(function (i) {
    if (i % num_modLineItems === 0) {
      num_maxHeight = $(this).height("auto").height();
      num_itemIndex = i;
      for (var x = 0; x <= num_modLineItems - 1; x++) {
        num_itemHeight = $(str_itemListSelector).eq(num_itemIndex + x).height();
        if (num_maxHeight < num_itemHeight) {
          num_maxHeight = num_itemHeight;
        }
      }
      for (var y = 0; y <= num_modLineItems - 1; y++) {
        $(str_itemListSelector).eq(num_itemIndex + y).height(num_maxHeight);
      }
    }
  });
  if (typeof fnc_callback != 'undefined') {
    fnc_callback();
  }
}