/**
 * Description: general javascript actions and functions for cookies
 **/

function onLoadCheckCookies(obj_cookies) {
  var str_cookiesBarClass = 'cookiesBox',
      num_animationSpeed = 500,
      str_themeClass = 'theme2',//theme1, theme2, theme3
      str_cookiesBar = "<div id='"+str_cookiesBarClass+"' class='container "+str_themeClass + ' ' +str_cookiesBarClass+"'><div class='container'><div>"+obj_cookies.str_text+"&nbsp;&nbsp;<a target='_blank' href='"+obj_cookies.str_linkUrl+"' title='"+obj_cookies.str_linkLabel+"'>"+obj_cookies.str_linkLabel+"</a></div><a href='javasript:void(0);' title='"+obj_cookies.str_acceptLabel+"'><span class='icon-fechar'></span></a></div></div>";

  if (!$.cookie(obj_cookies.str_cookieName)) {
    if (cookiesEnabled()) {
      $("body").prepend(str_cookiesBar);
      $('#'+str_cookiesBarClass).slideToggle(0);
      $("body").addClass('withCookies');
      $("."+str_cookiesBarClass+" > div > a").bind("click", function (event) {
        event.preventDefault();
        $.cookie(obj_cookies.str_cookieName, '1', {expires:obj_cookies.num_expireDays, path:'/'});
        $("."+str_cookiesBarClass).slideToggle(num_animationSpeed,function(){
          $("."+str_cookiesBarClass).remove();
          $("body").removeClass('withCookies');
          $(window).resize();
        });
      });

      $(window).load(function(){
        $('#'+str_cookiesBarClass).slideToggle(num_animationSpeed);
      });
    }
  }
}

function cookiesEnabled(){
  var bol_cookieEnabled = (navigator.cookieEnabled) ? true : false;
  if (typeof navigator.cookieEnabled == "undefined" && !bol_cookieEnabled){
    document.cookie="enabledcookie";
    bol_cookieEnabled = (document.cookie.indexOf("enabledcookie") != -1) ? true : false;
  }
  return (bol_cookieEnabled);
}