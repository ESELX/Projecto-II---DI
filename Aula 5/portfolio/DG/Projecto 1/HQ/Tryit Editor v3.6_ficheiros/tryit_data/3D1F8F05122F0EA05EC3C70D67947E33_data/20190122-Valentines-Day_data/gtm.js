
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"1786",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(details){var c=getCookie(\"PLAY_LANG\")||\"en\",b=details.map(function(a){return{name:a.ctitle,id:a.csku+\"-\"+c,price:a.fprice,category:a.categoryname,quantity:a.iqty}});return b={ecommerce:{currencyCode:order.ccurrency,purchase:{actionField:{id:order.cordernumber,affiliation:order.corigin,revenue:order.fgrandtotal,shipping:order.fshippingprice},products:b}}}}return{}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return product?{ecomm_prodid:product.sku,ecomm_pagetype:\"product\",ecomm_totalvalue:product.saleprice}:void 0==document.getElementsByName(\"csku\")||0\u003E=document.getElementsByName(\"csku\").length||void 0==document.getElementById(\"total-price-1\")?{ecomm_prodid:\"\",ecomm_pagetype:\"other\",ecomm_totalvalue:\"\"}:{ecomm_prodid:document.getElementsByName(\"csku\")[0].value+\"-\"+getCookie(\"PLAY_LANG\")+\"-\"+getCookie(\"TT_CURR\"),ecomm_pagetype:\"product\",ecomm_totalvalue:document.getElementById(\"total-price-1\").innerHTML}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return order?order.fgrandtotal:\"0\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return order?order.ccurrency:\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=getCookie(\"TT_COUN\");switch(a){case \"DE\":a=32127;break;case \"ES\":a=32128;break;case \"FR\":a=32129;break;case \"IT\":a=32130;break;case \"GB\":a=31591;break;case \"UK\":a=31591;break;case \"US\":a=28929;break;default:a=28929}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.location.href,b=\/^(http:\\\/\\\/m\\.|https:\\\/\\\/m\\.|http:\\\/\\\/mndev\\.|http:\\\/\\\/muat\\.|https:\\\/\\\/muat\\.|https:\\\/\\\/mcartuat\\.|http:\\\/\\\/mcartuat\\.|https:\\\/\\\/mcart).*\/;type=b.test(a);return a=1==type?\"m\":\"d\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.href})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(parseFloat(order.wgfordersubtotal)+parseFloat(order.wgfextra)).toFixed(2)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\";if(loyalty)for(var b in loyalty)\"point\"!=loyalty[b].type\u0026\u0026(a=loyalty[b].code);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return order.wgcurrency})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return order.cordernumber})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(parseFloat(order.fordersubtotal)+parseFloat(order.fextra)).toFixed(2)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementById(\"listingId\").value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.location.href;a=a.split(\"?\")[0];a=a.split(\"-\");a=a[a.length-1];return a.substring(0,a.length-1)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"\",a=document.getElementsByClassName(\"dsku\");if(1==a.length)b=a[0].value;else for(var c=0;c\u003Ca.length;c++)b+=a[c].value+\"||\";return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"\",a=document.getElementsByClassName(\"dqty\");if(1==a.length)b=a[0].value;else for(var c=0;c\u003Ca.length;c++)b+=a[c].value+\"||\";return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\",b=document.getElementsByClassName(\"dsku\");if(1==b.length)a=b[0].value;else{for(var c=0;c\u003Cb.length;c++)a+=b[c].value+\",\";a=a.substring(0,a.length-1)}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\",b=document.getElementsByClassName(\"dqty\");if(1==b.length)a=b[0].value;else{for(var c=0;c\u003Cb.length;c++)a+=b[c].value+\",\";a=a.substring(0,a.length-1)}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.location.href,b=\/^(?!https:\\\/\\\/cart|https:\\\/\\\/mcart\\.tomtop\\.com).*tomtop.com[\\\/0-9a-zA-Z]{0,4}$(((?!\\-\\d)(?!email)(?!.html).)*$)\/,c=\/.*tomtop.com\\\/(.*)(\\\/p-)(.*)(.html)+\/,d=\/^(?!https:\\\/\\\/cart|https:\\\/\\\/mcart\\.tomtop\\.com).*tomtop.com[\\\/0-9a-zA-Z]{2,}(((?!email)(?!.html).)*(\\d\\\/(\\?.*)?)$)\/,e=\/^(https:\\\/\\\/cart.tomtop.com|http:\\\/\\\/cart.tomtop.com|http:\\\/\\\/mcart\\.tomtop.com|https:\\\/\\\/mcart\\.tomtop.com)((\\\/)?((?!\\\/)(?!\\w)(.*)(?!.html).)*$)\/,f=\/.*tomtop.com\\\/payment-result\\\/(?!error)(.*)|^(https:\\\/\\\/m.tomtop.com\\\/paypal\\\/)\/;\nreturn b.test(a)?\"homepage\":c.test(a)?\"productpage\":d.test(a)?\"productList\":e.test(a)?\"cartPage\":f.test(a)?\"orderPage\":\"other\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0==document.getElementsByClassName(\"Bread_crumbs lbUl\").length?document.getElementsByClassName(\"fz_red\")[0].innerText:document.getElementsByClassName(\"Bread_crumbs lbUl\")[0].getElementsByTagName(\"h1\")[0].innerText})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementsByClassName(\"Bread_crumbs lbUl\")[0].getElementsByClassName(\"dirTitles\")[0].getElementsByTagName(\"span\")[0].innerText})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementById(\"listingId\")?document.getElementById(\"listingId\").value+\"_1_\"+document.getElementById(\"whouse\").value:\"ID_1_whouse\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return getCookie(\"USERID_COOKIE_NAME\")||null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return getCookie(\"TT_UUEMAIL\")||null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementById(\"listingId\")?document.getElementById(\"detailPrice\")?document.getElementById(\"detailPrice\").getAttribute(\"usvalue\"):\"\"==product.price?product.price:product.saleprice:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementById(\"listingId\")?document.getElementById(\"d_origprice\")?document.getElementById(\"d_origprice\").getAttribute(\"usvalue\"):\"\"==product.price?product.saleprice:product.price:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return getCookie(\"USERIP\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return navigator.userAgent})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementById(\"productSku\").value})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],";a=a.split(\"+\");return a[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],";a=a.split(\"+\");return a[2]+\"_\"+a[3]+\"_\"+a[4]})();"]
    },{
      "function":"__e"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"google_tag_params",
      "vtp_dataLayerVersion":2
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":"tomtop.com",
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",0],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-7537543-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-categorid"
    },{
      "function":"__k",
      "vtp_name":"cityads",
      "vtp_decodeCookie":false
    },{
      "function":"__k",
      "vtp_name":"trackssource",
      "vtp_decodeCookie":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"m\"==",["escape",["macro",5],8,16],")var a=\"m\";else if(0==document.getElementsByClassName(\"Bread_crumbs lbUl\").length)a=",["escape",["macro",6],8,16],";else{var c=document.getElementsByClassName(\"Bread_crumbs lbUl\")[0].children.length-1;a=\"\";for(var b=0;b\u003C=c;b++)0==b%2\u0026\u0026(a+=document.getElementsByClassName(\"Bread_crumbs lbUl\")[0].getElementsByTagName(\"li\")[b].getElementsByTagName(\"span\")[0].innerHTML+\"\\x3e\")}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"m\"==",["escape",["macro",5],8,16],")var b=\"\";else{var c=document.getElementsByClassName(\"Bread_crumbs lbUl\")[0].children.length-1;b=\"\";for(var a=0;a\u003C=c;a++)0==a%2\u0026\u0026(b+=document.getElementsByClassName(\"Bread_crumbs lbUl\")[0].getElementsByTagName(\"li\")[a].getElementsByTagName(\"a\")[0].getElementsByTagName(\"span\")[0].innerHTML+\"\\x3e\")}return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"m\"==",["escape",["macro",5],8,16],")for(var c=\"\",b=document.getElementsByClassName(\"m_product_box X p clearfix itemline\"),a=0;a\u003Cb.length;a++){var d=b[a].getAttribute(\"data-product\");c+=JSON.parse(d).clistingid+\"|\"}else for(c=\"\",b=document.getElementsByClassName(\"productNode itemline\"),a=0;a\u003Cb.length;a++)c+=b[a].getElementsByClassName(\"clistingid\")[0].value+\"|\";return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"m\"==",["escape",["macro",5],8,16],")for(var c=\"\",b=document.getElementsByClassName(\"m_product_box X p clearfix itemline\"),a=0;a\u003Cb.length;a++){var d=b[a].getAttribute(\"data-product\");c+=JSON.parse(d).price.price+\"|\"}else for(c=\"\",b=document.getElementsByClassName(\"productNode itemline\"),a=0;a\u003Cb.length;a++)c+=b[a].getElementsByClassName(\"theprice\")[0].value+\"|\";return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"m\"==",["escape",["macro",5],8,16],")for(var c=\"\",b=document.getElementsByClassName(\"m_product_box X p clearfix itemline\"),a=0;a\u003Cb.length;a++){var d=b[a].getAttribute(\"data-product\");c+=JSON.parse(d).iqty+\"|\"}else for(c=\"\",b=document.getElementsByClassName(\"productNode itemline\"),a=0;a\u003Cb.length;a++)c+=b[a].getElementsByClassName(\"input_num\")[0].value+\"|\";return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"m\"==",["escape",["macro",5],8,16],")for(var c=\"\",b=document.getElementsByClassName(\"m_product_box X p clearfix itemline\"),a=0;a\u003Cb.length;a++){var d=b[a].getAttribute(\"data-product\");c+=JSON.parse(d).sku+\"|\"}else for(c=\"\",b=document.getElementsByClassName(\"csku\"),a=0;a\u003Cb.length;a++)c+=b[a].innerText+\"|\";return c})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"source"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"m\"==",["escape",["macro",5],8,16],"){var e=[],b=document.getElementsByClassName(\"p clearfix itemline\");document.getElementById(\"currencycode\");for(var a=0;a\u003Cb.length;a++){var c={},f=b[a].getElementsByClassName(\"theprice\")[0].value,d=b[a].getElementsByClassName(\"qty_txt input_num\")[0].value;c.id=b[a].getElementsByClassName(\"clistingid\")[0].value;c.price=f\/d;c.quantity=d;e.push(c)}}else for(e=[],b=document.getElementsByClassName(\"productNode itemline\"),document.getElementById(\"currencycode\"),\na=0;a\u003Cb.length;a++)c={},f=b[a].getElementsByClassName(\"theprice\")[0].value,d=b[a].getElementsByClassName(\"input_num\")[0].value,c.id=b[a].getElementsByClassName(\"clistingid\")[0].value,c.price=f\/d,c.quantity=d,e.push(c);return e})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"m\"==",["escape",["macro",5],8,16],"){var b=document.getElementsByClassName(\"p clearfix itemline\");document.getElementById(\"currencycode\");for(var a=0;a\u003Cb.length;a++){var c={},e=b[a].getElementsByClassName(\"theprice\")[0].value,d=b[a].getElementsByClassName(\"qty_txt input_num\")[0].value;c.id=b[a].getElementsByClassName(\"clistingid\")[0].value;c.price=e\/d;c.quantity=d}}else for(b=document.getElementsByClassName(\"productNode itemline\"),document.getElementById(\"currencycode\"),a=0;a\u003Cb.length;a++)c=\n{},e=b[a].getElementsByClassName(\"theprice\")[0].value,d=b[a].getElementsByClassName(\"input_num\")[0].value,c.id=b[a].getElementsByClassName(\"clistingid\")[0].value,c.price=e\/d,c.quantity=d;return c})();"]
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    }],
  "tags":[{
      "function":"__ua",
      "priority":0,
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"tomtop.com",
      "vtp_decorateFormsAutoLink":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",0],
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-7537543-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":7
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_dataLayerVariable":["macro",34],
      "vtp_conversionId":"953781854",
      "vtp_customParamsFormat":"DATA_LAYER",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",35],
      "tag_id":24
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":["macro",2],
      "vtp_currencyCode":["macro",3],
      "vtp_conversionId":"945237270",
      "vtp_conversionLabel":"d7rDCLec-V4QltrcwgM",
      "vtp_url":["macro",35],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":25
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Outbound Link",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":"click",
      "vtp_eventLabel":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":161
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template","?search=",["macro",19],"\u0026searchcategory=",["macro",20]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-7537543-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":162
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Product Click",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-7537543-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":166
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Add to Cart",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-7537543-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":168
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"productview",
      "vtp_eventLabel":"productview",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-7537543-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":171
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Promotion Click",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-7537543-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":173
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-7537543-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":175
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Remove from Cart",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-7537543-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":177
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"GAclick",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"click",
      "vtp_eventLabel":["macro",31],
      "vtp_dimension":["list",["map","index",["macro",30],"dimension",["macro",31]]],
      "vtp_trackingId":"UA-7537543-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":228
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"GRCPRClick",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"click",
      "vtp_eventLabel":["macro",31],
      "vtp_dimension":["list",["map","index",["macro",30],"dimension",["macro",31]]],
      "vtp_trackingId":"UA-7537543-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":229
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",31],
      "vtp_eventCategory":"GroupClick",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"click",
      "vtp_eventLabel":["macro",31],
      "vtp_dimension":["list",["map","index",["macro",30],"dimension",["macro",31]]],
      "vtp_trackingId":"UA-7537543-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":230
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"gaAlsoBoughtClick",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"click",
      "vtp_eventLabel":["macro",31],
      "vtp_dimension":["list",["map","index",["macro",30],"dimension",["macro",31]]],
      "vtp_trackingId":"UA-7537543-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":243
    },{
      "function":"__cl",
      "tag_id":244
    },{
      "function":"__cl",
      "tag_id":245
    },{
      "function":"__cl",
      "tag_id":246
    },{
      "function":"__cl",
      "tag_id":247
    },{
      "function":"__cl",
      "tag_id":248
    },{
      "function":"__cl",
      "tag_id":249
    },{
      "function":"__cl",
      "tag_id":250
    },{
      "function":"__cl",
      "tag_id":251
    },{
      "function":"__cl",
      "tag_id":252
    },{
      "function":"__cl",
      "tag_id":253
    },{
      "function":"__cl",
      "tag_id":254
    },{
      "function":"__cl",
      "tag_id":255
    },{
      "function":"__cl",
      "tag_id":256
    },{
      "function":"__cl",
      "tag_id":257
    },{
      "function":"__cl",
      "tag_id":258
    },{
      "function":"__cl",
      "tag_id":259
    },{
      "function":"__cl",
      "tag_id":260
    },{
      "function":"__cl",
      "tag_id":261
    },{
      "function":"__cl",
      "tag_id":262
    },{
      "function":"__cl",
      "tag_id":263
    },{
      "function":"__cl",
      "tag_id":264
    },{
      "function":"__cl",
      "tag_id":265
    },{
      "function":"__cl",
      "tag_id":266
    },{
      "function":"__cl",
      "tag_id":267
    },{
      "function":"__cl",
      "tag_id":268
    },{
      "function":"__cl",
      "tag_id":269
    },{
      "function":"__cl",
      "tag_id":270
    },{
      "function":"__cl",
      "tag_id":271
    },{
      "function":"__cl",
      "tag_id":272
    },{
      "function":"__cl",
      "tag_id":273
    },{
      "function":"__cl",
      "tag_id":274
    },{
      "function":"__cl",
      "tag_id":275
    },{
      "function":"__cl",
      "tag_id":276
    },{
      "function":"__cl",
      "tag_id":277
    },{
      "function":"__cl",
      "tag_id":278
    },{
      "function":"__cl",
      "tag_id":279
    },{
      "function":"__cl",
      "tag_id":280
    },{
      "function":"__cl",
      "tag_id":281
    },{
      "function":"__cl",
      "tag_id":282
    },{
      "function":"__cl",
      "tag_id":283
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"5321600\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq2\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg src=\"\/\/bat.bing.com\/action\/0?ti=5321600\u0026amp;Ver=2\" height=\"0\" width=\"0\" style=\"display:none; visibility: hidden;\"\u003E\u003C\/noscript\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Eif(document.getElementById(\"orderprice\")){var VarRevenue=document.getElementById(\"orderprice\").value;window.uetq2=window.uetq2||[];window.uetq2.push({gv:VarRevenue})};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"420202644828064\");\nfbq(\"track\",\"ViewContent\",{title:product.title,content_ids:product.sku,content_type:\"product\",value:product.saleprice,currency:product.currency});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":17
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/javascript\"\u003E(function(){function h(){if(!(void 0==document.getElementsByName(\"csku\")||0\u003E=document.getElementsByName(\"csku\").length||void 0==document.getElementById(\"total-price-1\")||void 0==document.getElementById(\"p_current_currency\")||void 0==document.getElementsByClassName(\"productIntroduce_title\")||0\u003E=document.getElementsByClassName(\"productIntroduce_title\").length))return{content_ids:document.getElementsByName(\"csku\")[0].value,content_type:\"product\",value:document.getElementById(\"total-price-1\").innerHTML,\ncurrency:document.getElementById(\"p_current_currency\").innerText,title:document.getElementsByClassName(\"productIntroduce_title\")[0].innerHTML};if(\"m\"==",["escape",["macro",5],8,16],"){var c=product.sku,d=product.saleprice,e=product.title,a=product.currency;return{content_ids:c,content_type:\"product\",value:d,currency:a,title:e}}return void 0!=document.getElementsByClassName(\"Bread_crumbs lbUl\")\u0026\u00260\u003Cdocument.getElementsByClassName(\"Bread_crumbs lbUl\").length\u0026\u0026void 0!=document.getElementsByClassName(\"symbolLab\")?\n(c=product.sku,d=product.saleprice,e=product.title,a=product.currency,{content_ids:c,content_type:\"product\",value:d,currency:a,title:e}):void 0==document.getElementsByName(\"csku\")||0\u003E=document.getElementsByName(\"csku\").length||void 0==document.getElementsByClassName(\"product_page_priceY \")||0\u003E=document.getElementsByClassName(\"product_page_priceY \").length||void 0==document.getElementsByClassName(\"topCurrency_box\")||0\u003E=document.getElementsByClassName(\"topCurrency_box\").length||void 0==document.getElementsByClassName(\"title_h1\")||\n0\u003E=document.getElementsByClassName(\"title_h1\").length?{}:(a=document.getElementsByClassName(\"product_page_priceY \")[0].innerHTML,c=a.substring(a.indexOf(\" \")+1),a=document.getElementsByClassName(\"topCurrency_box\")[0].childNodes[3].innerHTML,a=a.substring(a.indexOf(\":\")+1),{content_ids:document.getElementsByName(\"csku\")[0].value,content_type:\"product\",value:c,currency:a,title:document.getElementsByClassName(\"title_h1\")[0].innerHTML})}!function(c,d,e,a,b,f,g){c.fbq||(b=c.fbq=function(){b.callMethod?\nb.callMethod.apply(b,arguments):b.queue.push(arguments)},c._fbq||(c._fbq=b),b.push=b,b.loaded=!0,b.version=\"2.0\",b.queue=[],f=d.createElement(e),f.async=!0,f.src=a,g=d.getElementsByTagName(e)[0],g.parentNode.insertBefore(f,g))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"420202644828064\");fbq(\"track\",\"PageView\");fbq(\"track\",\"AddToCart\",h())})();\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=420202644828064\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\n\n\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":18
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction getskus(){var a=[];details\u0026\u0026(a=details.map(function(a){return a.csku}));return a};\u003C\/script\u003E\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"420202644828064\");fbq(\"track\",\"PageView\");\nfbq(\"track\",\"Purchase\",{value:order.fordersubtotal,content_ids:getskus(),content_type:\"product\",currency:order.ccurrency});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=420202644828064\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":19
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(a,b,e){var d=new Date;d.setDate(d.getDate()+e);document.cookie=a+\"\\x3d\"+escape(b)+(null==e?\"\":\";expires\\x3d\"+d.toGMTString())+\";path\\x3d\/; domain\\x3d.tomtop.com\"}function getCookie(a){return 0\u003Cdocument.cookie.length\u0026\u0026(c_start=document.cookie.indexOf(a+\"\\x3d\"),-1!=c_start)?(c_start=c_start+a.length+1,c_end=document.cookie.indexOf(\";\",c_start),-1==c_end\u0026\u0026(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):\"\"}\nfunction getURLParameter(a){return decodeURIComponent(((new RegExp(\"[?|\\x26]\"+a+\"\\x3d([^\\x26;]+?)(\\x26|#|;|$)\")).exec(location.search)||[,\"\"])[1].replace(\/\\+\/g,\"%20\"))||null}function delete_cookie(a){var b=new Date;b.setDate(b.getDate()-2);document.cookie=a+\"\\x3d; expires\\x3d\"+b.toGMTString()}function checkfrom(a){var b=document.referrer;return null!=b\u0026\u00260\u003Cb.indexOf(a)?!0:!1}\nfunction setStracksCookie(){var a=getURLParameter(\"aid\"),b=getURLParameter(\"click_id\"),e=getURLParameter(\"cr\"),d=getURLParameter(\"click\"),f=getURLParameter(\"affiliate\"),g=getURLParameter(\"pid\");getURLParameter(\"source\");var n=getURLParameter(\"siteID\"),p=getURLParameter(\"oid\"),q=getURLParameter(\"rqid\"),c=getURLParameter(\"utm_source\");getURLParameter(\"utmsource\");var h=getURLParameter(\"tduid\");getURLParameter(\"aid\");var k=getURLParameter(\"refid\"),r=getURLParameter(\"clickid\");getURLParameter(\"cr\");var l=\ngetURLParameter(\"cjevent\"),m=getURLParameter(\"sscid\");null==n\u0026\u0026getURLParameter(\"siteid\");checkfrom(\"tradedoubler.com\")||null!=h?setCookie(\"TDUID\",h,30):checkfrom(\"pampanetwork.com\")||null!=k?(setCookie(\"trackssource\",k,30),setCookie(\"utm_source\",c,30),null==c\u0026\u0026null!=a\u0026\u0026delete_cookie(\"trackssource\"),setCookie(\"clickidWise\",r,30)):\"GWM\"==c||checkfrom(\"dfgyw.com\")?(setCookie(\"GWM_affiliate\",f,30),setCookie(\"GWM_reqid\",d,30),setCookie(\"utm_source\",c,30)):\"mopubi.com\"==c||checkfrom(\"tmoki.com\")?(setCookie(\"tmoki_oid\",\np,30),setCookie(\"tmoki_rqid\",q,30)):null!=c\u0026\u0026null!=b?setCookie(\"click_id\",b,30):checkfrom(\"admitad.com\")||\"admitad\"==c?(d=getURLParameter(\"admitad_uid\"),b=getURLParameter(\"web\"),setCookie(\"trackssource\",d,60),null!=a\u0026\u0026delete_cookie(\"trackssource\"),setCookie(\"click_id\",b,60)):\"epn\"==c?(b=getURLParameter(\"click_id\"),setCookie(\"click_id\",b,60)):null!==c\u0026\u0026(delete_cookie(\"utm_source\"),setCookie(\"utm_source\",c,30));null!=c\u0026\u0026null==a?(setCookie(\"AID\",\"\",0),delete_cookie(\"AID\"),setCookie(\"utm_source\",c,30)):\nnull==c\u0026\u0026null!=a?(setCookie(\"utm_source\",\"\",0),setCookie(\"trackssource\",\"\",0),delete_cookie(\"utm_source\"),delete_cookie(\"trackssource\"),setCookie(\"AID\",a,30)):null!=c\u0026\u0026null!=a\u0026\u0026(b=\/(shareasale|Linkshare|cj|webgains|mopubi.com|clickwise|a8|admitad|tradedoubler|cfjump|AW|tradetracker|Netaffiliation|Linkconnector)\/,b.test(c)?(setCookie(\"AID\",a,30),setCookie(\"utm_source\",utm_source,30)):(setCookie(\"AID\",a,30),setCookie(\"utm_source\",\"\",30),delete_cookie(\"utm_source\")));null!=a\u0026\u0026(null!=e?(delete_cookie(\"clickRef\"),\nsetCookie(\"clickRef\",e,15)):(delete_cookie(\"clickRef\"),setCookie(\"clickRef\",\"\",15)),null!=g?(delete_cookie(\"pid\"),setCookie(\"pid\",g,15)):(delete_cookie(\"pid\"),setCookie(\"pid\",\"\",15)));null!=c\u0026\u0026null!==l\u0026\u0026(delete_cookie(\"CJEVENT\"),setCookie(\"CJEVENT\",l,45));null!=c\u0026\u0026null!==m\u0026\u0026(delete_cookie(\"sscid\"),setCookie(\"sscid\",m,15))}\nfunction mobvista(){var a=getURLParameter(\"from\"),b=getURLParameter(\"uuid\"),e=getURLParameter(\"clickid\"),d=getURLParameter(\"aid\"),f=getURLParameter(\"utm_source\");\"mobvista\"===a\u0026\u0026(delete_cookie(\"trackssource\"),delete_cookie(\"uuid\"),delete_cookie(\"clickid\"),setCookie(\"trackssource\",\"mobvista\",d,30),null==f\u0026\u0026null!=d\u0026\u0026delete_cookie(\"trackssource\"),setCookie(\"uuid\",b,45),setCookie(\"clickid\",e,45))}mobvista();setStracksCookie();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":27
    },{
      "function":"__html",
      "setup_tags":["list",["tag",59,0]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript id=\"xcntmyAsynctrackssource\" type=\"text\/gtmscript\"\u003Evar code=\"\",tsrc=getCookie(\"utm_source\"),sscid=getCookie(\"sscid\"),c;for(c in loyalty)\"point\"==loyalty[c].type||\"REV5\"!=loyalty[c].code\u0026\u0026\"REV5\"!=loyalty[c].code||(code=loyalty[c].code);\nif(\"shareasale\"==tsrc||\"\"!=code){var totalprice=parseFloat(order.fordersubtotal)+parseFloat(order.fextra),tsku=\"\",tquantity=\"\",tprice=\"\",codes=\"\";if(details)for(var de in details)tsku=tsku+details[de].csku+\",\",tquantity=tquantity+details[de].iqty+\",\",tprice=tprice+details[de].fprice+\",\";for(c in loyalty)\"point\"!=loyalty[c].type\u0026\u0026(codes=loyalty[c].code);var elscript=document.createElement(\"img\");elscript.setAttribute(\"width\",\"1\");elscript.setAttribute(\"height\",\"1\");elscript.setAttribute(\"border\",\"0\");\nelscript.src=\"\/\/shareasale.com\/sale.cfm?amount\\x3d\"+totalprice+\"\\x26tracking\\x3d\"+order.cordernumber+\"\\x26transtype\\x3dsale\\x26newcustomer\\x3d0\\x26merchantID\\x3d27868\\x26skulist\\x3d(\"+tsku+\")\\x26pricelist\\x3d(\"+tprice+\")\\x26quantitylist\\x3d(\"+tquantity+\")\\x26couponcode\\x3d\"+codes+\"\\x26currency\\x3d\"+order.ccurrency+\"\\x26sscid\\x3d\"+sscid;document.body.appendChild(elscript)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":29
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){function g(d){for(var a=[],b=document.getElementsByTagName(\"*\"),c=0;c\u003Cb.length;c++)b[c].className==d\u0026\u0026(a[a.length]=b[c]);return a}function e(a){return 0\u003Cdocument.cookie.length\u0026\u0026(c_start=document.cookie.indexOf(a+\"\\x3d\"),-1!=c_start)?(c_start=c_start+a.length+1,c_end=document.cookie.indexOf(\";\",c_start),-1==c_end\u0026\u0026(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):\"\"}try{if(void 0!=document.getElementsByName(\"csku\")\u0026\u00260\u003C=document.getElementsByName(\"csku\").length\u0026\u0026\nvoid 0!=document.getElementById(\"total-price-1\")){var d=document.getElementsByName(\"csku\")[0].value+\"-\"+e(\"PLAY_LANG\")+\"-\"+e(\"TT_CURR\"),a=document.getElementById(\"total-price-1\").innerHTML,h=window.navigator.userAgent,b=\"\";b=0\u003C=h.indexOf(\"MSIE\")?g(\"curr-category\")[0].firstChild:g(\"curr-category\")[0].firstChild.nextSibling.getAttribute(\"href\");dataLayer.push({event:\"fireRemarketingTag\",google_tag_params:{ecomm_prodid:d,ecomm_pagetype:\"product\",ecomm_totalvalue:a,ecomm_pagecateogry:b}})}else if(void 0!=\ndocument.getElementsByClassName(\"Bread_crumbs lbUl\")\u0026\u00260\u003Cdocument.getElementsByClassName(\"Bread_crumbs lbUl\").length\u0026\u00260\u003Cwindow.location.href.indexOf(\".html\")){d=product.sku+\"-\"+e(\"PLAY_LANG\")+\"-\"+e(\"TT_CURR\");a=product.saleprice;if(document.getElementById(\"main\"))b=\"\";else{var f=document.getElementsByClassName(\"Bread_crumbs lbUl\")[0].children.length-1;b=\"\";for(var c=0;c\u003C=f;c++)0==c%2\u0026\u0026(b+=document.getElementsByClassName(\"Bread_crumbs lbUl\")[0].getElementsByTagName(\"li\")[c].getElementsByTagName(\"a\")[0].innerText+\n\"\\x3e\")}dataLayer.push({event:\"fireRemarketingTag\",google_tag_params:{ecomm_prodid:d,ecomm_pagetype:\"product\",ecomm_totalvalue:a,ecomm_pagecateogry:b}})}else if(void 0!=document.getElementsByClassName(\"m_crumbs\")\u0026\u00260\u003Cdocument.getElementsByClassName(\"m_crumbs\").length\u0026\u00260\u003Cwindow.location.href.indexOf(\".html\")){d=product.sku+\"-\"+e(\"PLAY_LANG\")+\"-\"+e(\"TT_CURR\");a=product.saleprice;f=document.getElementsByClassName(\"m_crumbs\")[0].getElementsByTagName(\"a\").length-1;b=\"\";for(c=0;c\u003C=f;c++)b+=document.getElementsByClassName(\"m_crumbs\")[0].getElementsByTagName(\"a\")[c].innerText+\n\"\\x3e\";dataLayer.push({event:\"fireRemarketingTag\",google_tag_params:{ecomm_prodid:d,ecomm_pagetype:\"product\",ecomm_totalvalue:a,ecomm_pagecateogry:b}})}else 0\u003Cwindow.location.href.indexOf(\"tomtop.com\/cart\")?dataLayer.push({event:\"fireRemarketingTag\",google_tag_params:{ecomm_prodid:d,ecomm_pagetype:\"cart\",ecomm_totalvalue:a}}):0\u003Cwindow.location.href.indexOf(\"tomtop.com\/paypal\")?(order\u0026\u0026(d=order.cordernumber,a=order.fgrandtotal),dataLayer.push({event:\"fireRemarketingTag\",google_tag_params:{ecomm_prodid:d,\necomm_pagetype:\"purchase\",ecomm_totalvalue:a}})):dataLayer.push({event:\"fireRemarketingTag\",google_tag_params:{ecomm_prodid:d,ecomm_pagetype:\"other\",ecomm_totalvalue:a}})}catch(k){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":31
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"420202644828064\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=420202644828064\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "setup_tags":["list",["tag",59,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript id=\"lsxcntmyAsynctrackssource\" type=\"text\/gtmscript\"\u003E(function(b){var a=getCookie(\"utm_source\");if(\"Linkshare\"==a){var d=a=\"\",e=\"\",f=\"\";if(details)for(var c in details)a=a+details[c].csku+\"|\",d=d+details[c].iqty+\"|\",e=e+Math.round(details[c].fprice*details[c].iqty*100)+\"|\",f=f+escape(details[c].ctitle)+\"|\";a+=\"Discount\";f+=\"Discount\";d+=\"0\";e+=Math.round(100*order.fextra);c=\"\/\/track.linksynergy.com\/ep?mid\\x3d40980\\x26ord\\x3d\"+order.cordernumber+\"\\x26skulist\\x3d\"+a+\"\\x26amtlist\\x3d\"+e+\"\\x26qlist\\x3d\"+d+\"\\x26namelist\\x3d\"+f+\"\\x26img\\x3d1\\x26cur\\x3d\"+\norder.ccurrency;a=b.getElementById(\"xcntmyAsynctrackssource\");b=b.createElement(\"img\");b.width=1;b.height=1;b.src=c;a.parentNode.insertBefore(b,a)}})(document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "setup_tags":["list",["tag",59,0]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript\u003Evar MD5=function(e){function g(d,c){var a=d\u00262147483648;var b=c\u00262147483648;var e=d\u00261073741824;var f=c\u00261073741824;var p=(d\u00261073741823)+(c\u00261073741823);return e\u0026f?p^2147483648^a^b:e|f?p\u00261073741824?p^3221225472^a^b:p^1073741824^a^b:p^a^b}function h(a,b,d,c,e,f,n){a=g(a,g(g(b\u0026d|~b\u0026c,e),n));return g(a\u003C\u003Cf|a\u003E\u003E\u003E32-f,b)}function k(a,b,d,c,e,f,n){a=g(a,g(g(b\u0026c|d\u0026~c,e),n));return g(a\u003C\u003Cf|a\u003E\u003E\u003E32-f,b)}function l(a,b,c,d,e,f,n){a=g(a,g(g(b^c^d,e),n));return g(a\u003C\u003Cf|a\u003E\u003E\u003E32-f,b)}function m(a,b,c,d,f,e,n){a=g(a,g(g(c^\n(b|~d),f),n));return g(a\u003C\u003Ce|a\u003E\u003E\u003E32-e,b)}function I(a){var b=a.length;var c=b+8;c=(c-c%64)\/64;for(var d=16*(c+1),e=Array(d-1),f,g=0;g\u003Cb;)c=(g-g%4)\/4,f=g%4*8,e[c]|=a.charCodeAt(g)\u003C\u003Cf,g++;c=(g-g%4)\/4;f=g%4*8;e[c]|=128\u003C\u003Cf;e[d-2]=b\u003C\u003C3;e[d-1]=b\u003E\u003E\u003E29;return e}function q(a){var c=\"\",b;for(b=0;3\u003E=b;b++){var d=a\u003E\u003E\u003E8*b\u0026255;d=\"0\"+d.toString(16);c+=d.substr(d.length-2,2)}return c}function J(a){a=a.replace(\/\\r\\n\/g,\"\\n\");for(var b=\"\",c=0;c\u003Ca.length;c++){var d=a.charCodeAt(c);128\u003Ed?b+=String.fromCharCode(d):(127\u003C\nd\u0026\u00262048\u003Ed?b+=String.fromCharCode(d\u003E\u003E6|192):(b+=String.fromCharCode(d\u003E\u003E12|224),b+=String.fromCharCode(d\u003E\u003E6\u002663|128)),b+=String.fromCharCode(d\u002663|128))}return b}var f=[],r=7,t=12,u=17,v=22,w=5,x=9,y=14,z=20,A=4,B=11,C=16,D=23,E=6,F=10,G=15,H=21;e=J(e);f=I(e);var d=1732584193;var c=4023233417;var a=2562383102;var b=271733878;for(e=0;e\u003Cf.length;e+=16){var K=d;var L=c;var M=a;var N=b;d=h(d,c,a,b,f[e+0],r,3614090360);b=h(b,d,c,a,f[e+1],t,3905402710);a=h(a,b,d,c,f[e+2],u,606105819);c=h(c,a,b,d,f[e+3],v,3250441966);\nd=h(d,c,a,b,f[e+4],r,4118548399);b=h(b,d,c,a,f[e+5],t,1200080426);a=h(a,b,d,c,f[e+6],u,2821735955);c=h(c,a,b,d,f[e+7],v,4249261313);d=h(d,c,a,b,f[e+8],r,1770035416);b=h(b,d,c,a,f[e+9],t,2336552879);a=h(a,b,d,c,f[e+10],u,4294925233);c=h(c,a,b,d,f[e+11],v,2304563134);d=h(d,c,a,b,f[e+12],r,1804603682);b=h(b,d,c,a,f[e+13],t,4254626195);a=h(a,b,d,c,f[e+14],u,2792965006);c=h(c,a,b,d,f[e+15],v,1236535329);d=k(d,c,a,b,f[e+1],w,4129170786);b=k(b,d,c,a,f[e+6],x,3225465664);a=k(a,b,d,c,f[e+11],y,643717713);\nc=k(c,a,b,d,f[e+0],z,3921069994);d=k(d,c,a,b,f[e+5],w,3593408605);b=k(b,d,c,a,f[e+10],x,38016083);a=k(a,b,d,c,f[e+15],y,3634488961);c=k(c,a,b,d,f[e+4],z,3889429448);d=k(d,c,a,b,f[e+9],w,568446438);b=k(b,d,c,a,f[e+14],x,3275163606);a=k(a,b,d,c,f[e+3],y,4107603335);c=k(c,a,b,d,f[e+8],z,1163531501);d=k(d,c,a,b,f[e+13],w,2850285829);b=k(b,d,c,a,f[e+2],x,4243563512);a=k(a,b,d,c,f[e+7],y,1735328473);c=k(c,a,b,d,f[e+12],z,2368359562);d=l(d,c,a,b,f[e+5],A,4294588738);b=l(b,d,c,a,f[e+8],B,2272392833);a=l(a,\nb,d,c,f[e+11],C,1839030562);c=l(c,a,b,d,f[e+14],D,4259657740);d=l(d,c,a,b,f[e+1],A,2763975236);b=l(b,d,c,a,f[e+4],B,1272893353);a=l(a,b,d,c,f[e+7],C,4139469664);c=l(c,a,b,d,f[e+10],D,3200236656);d=l(d,c,a,b,f[e+13],A,681279174);b=l(b,d,c,a,f[e+0],B,3936430074);a=l(a,b,d,c,f[e+3],C,3572445317);c=l(c,a,b,d,f[e+6],D,76029189);d=l(d,c,a,b,f[e+9],A,3654602809);b=l(b,d,c,a,f[e+12],B,3873151461);a=l(a,b,d,c,f[e+15],C,530742520);c=l(c,a,b,d,f[e+2],D,3299628645);d=m(d,c,a,b,f[e+0],E,4096336452);b=m(b,d,c,\na,f[e+7],F,1126891415);a=m(a,b,d,c,f[e+14],G,2878612391);c=m(c,a,b,d,f[e+5],H,4237533241);d=m(d,c,a,b,f[e+12],E,1700485571);b=m(b,d,c,a,f[e+3],F,2399980690);a=m(a,b,d,c,f[e+10],G,4293915773);c=m(c,a,b,d,f[e+1],H,2240044497);d=m(d,c,a,b,f[e+8],E,1873313359);b=m(b,d,c,a,f[e+15],F,4264355552);a=m(a,b,d,c,f[e+6],G,2734768916);c=m(c,a,b,d,f[e+13],H,1309151649);d=m(d,c,a,b,f[e+4],E,4149444226);b=m(b,d,c,a,f[e+11],F,3174756917);a=m(a,b,d,c,f[e+2],G,718787259);c=m(c,a,b,d,f[e+9],H,3951481745);d=g(d,K);c=\ng(c,L);a=g(a,M);b=g(b,N)}f=q(d)+q(c)+q(a)+q(b);return f.toLowerCase()};\u003C\/script\u003E\n\u003Cnoscript id=\"noscriptSource\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript id=\"wgtmyAsynctrackssource\" language=\"javascript\" type=\"text\/javascript\"\u003E(function(d){var e=getCookie(\"utm_source\");if(\"webgains\"==e\u0026\u0026details){var l=getCookie(\"GA_COUNTRY\")?getCookie(\"GA_COUNTRY\"):\"US\";e=\"\";var n=order.cordernumber,b=\"\",h=\"en_UK\",t=\"javascript-client\",p=\"1.2\",k=\"track\",m=\"\",q=\"\",r=order.wgcurrency;if(\"UK\"==l)var f=\"11931\",c=\"21157\";else\"FR\"==l?(f=\"11927\",c=\"21155\"):\"DE\"==l?(f=\"11939\",c=\"21159\"):\"ES\"==l?(f=\"11955\",c=\"21161\"):\"US\"==l\u0026\u0026(f=\"11281\",c=\"19749\");for(var a in details)e=1\u003Cdetails[a].iqty?e+(c+\"::\"+details[a].wgfprice*details[a].iqty+\"::\"+details[a].iqty+\n\"x \"+details[a].ctitle+\"::\"+details[a].csku+\"|\"):e+(c+\"::\"+details[a].wgfprice+\"::\"+details[a].ctitle+\"::\"+details[a].csku+\"|\");if(loyalty)for(g in loyalty)\"point\"!=loyalty[g].type\u0026\u0026(m=loyalty[g].code,e+=c+\"::-\"+loyalty[g].wgtprice+\"::\"+loyalty[g].code+\"::\"+loyalty[g].code+\"|\");a=totalprice=parseFloat(order.wgfordersubtotal)+parseFloat(order.wgfextra);var g=\"https:\"==location.protocol.toLowerCase()?\"https\":\"http\";h=\"wgver\\x3d\"+escape(p)+\"\\x26wgprotocol\\x3d\"+g+\"\\x26wgsubdomain\\x3d\"+k+\"\\x26wgslang\\x3d\"+\nt+\"\\x26wglang\\x3d\"+h+\"\\x26wgprogramid\\x3d\"+f+\"\\x26wgeventid\\x3d\"+c+\"\\x26wgvalue\\x3d\"+a+\"\\x26wgorderreference\\x3d\"+n+\"\\x26wgcomment\\x3d\"+escape(b)+\"\\x26wglocation\\x3d\"+escape(document.referrer)+\"\\x26wgitems\\x3d\"+escape(e)+\"\\x26wgcustomerid\\x3d\"+escape(q)+\"\\x26wgvouchercode\\x3d\"+escape(m)+\"\\x26wgCurrency\\x3d\"+escape(r);b=MD5(\"1234\"+h);h=g+\":\/\/\"+k+\".webgains.com\/transaction.html?\"+h+\"\\x26wgchecksum\\x3d\"+b;console.log(h);k=d.getElementById(\"wgtmyAsynctrackssource\");b=d.createElement(\"img\");b.width=1;\nb.height=1;b.src=h;k.parentNode.insertBefore(b,k);document.getElementById\u0026\u0026document.createTextNode||(k=d.getElementById(\"noscriptSource\"),f=\"\/\/track.webgains.com\/transaction.html?wgver\\x3d\"+p+\"\\x26wgprogramid\\x3d\"+f+\"\\x26wgrs\\x3d1\\x26wgvalue\\x3d\"+a+\"\\x26wgeventid\\x3d\"+c+\"\\x26wgorderreference\\x3d\"+n+\"\\x26wgitems\\x3d\"+escape(e)+\"\\x26wgvouchercode\\x3d\"+m+\"\\x26wgcustomerid\\x3d\"+q+\"\\x26wgCurrency\\x3d\"+r,d=d.createElement(\"img\"),d.width=1,d.height=1,d.src=f,k.appendChild(b))}})(document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":37
    },{
      "function":"__html",
      "setup_tags":["list",["tag",59,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cnoscript id=\"aotns\"\u003E\n  \n\u003C\/noscript\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar tsrc=getCookie(\"utm_source\");\nnull!=tsrc\u0026\u0026\"admitad\"==tsrc\u0026\u0026function(a,b){b._admitadPixel={response_type:\"img\",action_code:\"1\",campaign_code:\"4bf89f6ddb\"};var c=getCookie(\"trackssource\"),d=parseFloat(order.fordersubtotal)+parseFloat(order.fextra);b._admitadPositions=b._admitadPositions||[];a.getElementById(\"aotns\");a.createElement(\"img\");var f=\"_admitad-pixel\";if(!a.getElementById(f)){var e=a.createElement(\"script\");e.id=f;b._admitadPositions.push({uid:c,order_id:order.cordernumber,position_id:1,tariff_code:\"1\",currency_code:order.ccurrency,\nposition_count:\"\",price:d,quantity:1,payment_type:\"sale\"});c=(new Date).getTime();d=\"https:\"===a.location.protocol?\"https:\":\"http:\";e.src=d+\"\/\/cdn.asbmit.com\/static\/js\/pixel.min.js?r\\x3d\"+c;a.head.appendChild(e)}}(document,window);\u003C\/script\u003E\n  \u003Cnoscript\u003E\n    \u003Cimg src=\"\/\/ad.admitad.com\/r?campaign_code=4bf89f6ddb\u0026amp;action_code=1\u0026amp;payment_type=sale\u0026amp;response_type=img\u0026amp;uid=\u0026amp;tariff_code=1\u0026amp;order_id=\u0026amp;position_id=\u0026amp;currency_code=",["escape",["macro",3],12],"\u0026amp;position_count=\u0026amp;price=",["escape",["macro",11],12],"\u0026amp;quantity=\u0026amp;product_id=\" width=\"1\" height=\"1\" alt=\"\"\u003E\n\u003C\/noscript\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"init\",\"420202644828064\");fbq(\"track\",\"InitiateCheckout\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=420202644828064\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cnoscript id=\"ttrack\"\u003E\n \n\u003C\/noscript\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Efunction getCookie(a){var b=document.cookie;a+=\"\\x3d\";var c=b.indexOf(\"; \"+a);if(-1==c){if(c=b.indexOf(a),0!=c)return null}else c+=2;var d=document.cookie.indexOf(\";\",c);-1==d\u0026\u0026(d=b.length);return unescape(b.substring(c+a.length,d))}var tsrc=getCookie(\"utm_source\");\nif(\"tradetracker\"==tsrc){var tsku=\"\";if(details)for(var de in details)tsku=tsku+details[de].csku+\"|\";var ttConversionOptions=ttConversionOptions||[];ttConversionOptions.push({type:\"sales\",campaignID:\"21889\",productID:tsku,transactionID:order.cordernumber,transactionAmount:parseFloat(order.fordersubtotal)+parseFloat(order.fextra),quantity:\"1\",email:\"\",descrMerchant:tsku,descrAffiliate:\"\",currency:order.ccurrency,trackingGroupID:\"187\"});(function(a){var b=\"campaignID\"in a?a.campaignID:\"length\"in a\u0026\u0026\na.length?a[0].campaignID:null;a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/tm.tradetracker.net\/conversion?s\\x3d\"+encodeURIComponent(b)+\"\\x26t\\x3dm\";b=document.getElementsByTagName(\"script\");b=b[b.length-1];b.parentNode.insertBefore(a,b)})(ttConversionOptions);if(!document.getElementById||!document.createTextNode){var ttrack=document.getElementById(\"ttrack\"),nsimg=\"\",img=document.createElement(\"img\");nsimg=\"\/\/ts.tradetracker.net\/?tgi\\x3d187\\x26amp;pid\\x3d\"+tsku+\"\\x26amp;tid\\x3d\"+\norder.cordernumber+\"\\x26amp;tam\\x3d\"+order.fordersubtotal+\"\\x26amp;data\\x3d\\x26amp;qty\\x3d1\\x26amp;eml\\x3d\\x26amp;descrMerchant\\x3d\"+tsku+\";descrAffiliate\\x3d\\x26amp;event\\x3dsales\\x26amp;currency\\x3d\"+order.ccurrency;img.src=nsimg;img.alt=\"\";ttrack.appendChild(img)}};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E$async=!0;\nfunction getVar(a){get_string=document.location.search;return_value=\"\";do name_index=get_string.indexOf(a+\"\\x3d\"),-1!=name_index\u0026\u0026(get_string=get_string.substr(name_index+a.length+1,get_string.length-name_index),end_of_value=get_string.indexOf(\"\\x26\"),value=-1!=end_of_value?get_string.substr(0,end_of_value):get_string,return_value=\"\"==return_value||\"\"==value?return_value+value:return_value+(\", \"+value));while(-1!=name_index);for(space=return_value.indexOf(\"+\");-1!=space;)return_value=return_value.substr(0,space)+\n\" \"+return_value.substr(space+1,return_value.length),space=return_value.indexOf(\"+\");return return_value}function SetCookie_GA(a,c){var b=new Date;b.setTime(b.getTime()+864E5);document.cookie=a+\"\\x3d\"+encodeURIComponent(c)+\";domain\\x3d.tomtop.com;expires\\x3d\"+b.toGMTString()+\";path\\x3d\/\";return!0}var mytduid=getVar(\"tduid\");\nif(\"\"!=mytduid){SetCookie_GA(\"TRADEDOUBLER\",mytduid);var TDConf=TDConf||{};TDConf.Config={protocol:document.location.protocol,containerTagId:\"16953\"};if(\"undefined\"!=typeof TDConf\u0026\u0026(TDConf.sudomain=\"https:\"==document.location.protocol?\"swrap\":\"wrap\",TDConf.host=\".tradedoubler.com\/wrap\",TDConf.containerTagURL=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+TDConf.sudomain+TDConf.host,\"undefined\"!=typeof TDConf.Config))if($async){var TDAsync=document.createElement(\"script\");TDAsync.src=\nTDConf.containerTagURL+\"?id\\x3d\"+TDConf.Config.containerTagId;TDAsync.async=\"yes\";TDAsync.width=0;TDAsync.height=0;TDAsync.frameBorder=0;document.body.appendChild(TDAsync)}else document.write(unescape(\"%3Cscript src\\x3d'\"+TDConf.containerTagURL+\"?id\\x3d\"+TDConf.Config.containerTagId+\" ' type\\x3d'text\/javascript'%3E%3C\/script%3E\"))};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":57
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/javascript\"\u003E$async=!0;\nfunction getVar(a){get_string=document.location.search;return_value=\"\";do name_index=get_string.indexOf(a+\"\\x3d\"),-1!=name_index\u0026\u0026(get_string=get_string.substr(name_index+a.length+1,get_string.length-name_index),end_of_value=get_string.indexOf(\"\\x26\"),value=-1!=end_of_value?get_string.substr(0,end_of_value):get_string,return_value=\"\"==return_value||\"\"==value?return_value+value:return_value+(\", \"+value));while(-1!=name_index);for(space=return_value.indexOf(\"+\");-1!=space;)return_value=return_value.substr(0,space)+\n\" \"+return_value.substr(space+1,return_value.length),space=return_value.indexOf(\"+\");return return_value}function SetCookie_GA(a,c){var b=new Date;b.setTime(b.getTime()+864E5);document.cookie=a+\"\\x3d\"+encodeURIComponent(c)+\";domain\\x3d.tomtop.com;expires\\x3d\"+b.toGMTString()+\";path\\x3d\/\";return!0}var mytduid=getVar(\"tduid\");\nif(\"\"!=mytduid){SetCookie_GA(\"TRADEDOUBLER\",mytduid);var TDConf=TDConf||{};if(\"m\"==",["escape",["macro",5],8,16],")for(var proArr=[],careNameTxt=\"\",proId=document.getElementsByClassName(\"product_info\"),i=0;i\u003CproId.length;i++){var arr={};arr.id=proId[i].getElementsByClassName(\"favorites fl\")[0].getAttribute(\"data-id\");arr.price=proId[i].getElementsByClassName(\"product_price\")[0].getAttribute(\"nowprice2\");arr.name=proId[i].getElementsByClassName(\"product_title\")[0].innerText;arr.currency=getCookie(\"TT_CURR\");\nproArr.push(arr)}else{proArr=[];proId=document.getElementsByClassName(\"productClass\");var careName=document.getElementsByClassName(\"Bread_crumbs lbUl\")[0].getElementsByTagName(\"li\"),careNameLeng=careName.length-1;careNameTxt=careName[careNameLeng].getElementsByTagName(\"span\")[0].innerText;for(i=0;i\u003CproId.length;i++)arr={},arr.id=proId[i].getElementsByClassName(\"productSKU\")[0].innerText.split(\":\")[1],arr.price=proId[i].getElementsByClassName(\"productPrice pricelab\")[0].innerText,arr.name=proId[i].getElementsByClassName(\"productTitle\")[0].innerText,\narr.currency=getCookie(\"TT_CURR\"),proArr.push(arr)}TDConf.Config={products:proArr,Category_name:'\"'+careNameTxt+'\"',containerTagId:\"16954\"};if(\"undefined\"!=typeof TDConf\u0026\u0026(TDConf.sudomain=\"https:\"==document.location.protocol?\"swrap\":\"wrap\",TDConf.host=\".tradedoubler.com\/wrap\",TDConf.containerTagURL=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+TDConf.sudomain+TDConf.host,\"undefined\"!=typeof TDConf.Config))if($async){var TDAsync=document.createElement(\"script\");TDAsync.src=TDConf.containerTagURL+\n\"?id\\x3d\"+TDConf.Config.containerTagId;TDAsync.async=\"yes\";TDAsync.width=0;TDAsync.height=0;TDAsync.frameBorder=0;document.body.appendChild(TDAsync)}else document.write(unescape(\"%3Cscript src\\x3d'\"+TDConf.containerTagURL+\"?id\\x3d\"+TDConf.Config.containerTagId+\" ' type\\x3d'text\/javascript'%3E%3C\/script%3E\"))};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":58
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/javascript\"\u003E$async=!0;\nfunction getVar(a){get_string=document.location.search;return_value=\"\";do name_index=get_string.indexOf(a+\"\\x3d\"),-1!=name_index\u0026\u0026(get_string=get_string.substr(name_index+a.length+1,get_string.length-name_index),end_of_value=get_string.indexOf(\"\\x26\"),value=-1!=end_of_value?get_string.substr(0,end_of_value):get_string,return_value=\"\"==return_value||\"\"==value?return_value+value:return_value+(\", \"+value));while(-1!=name_index);for(space=return_value.indexOf(\"+\");-1!=space;)return_value=return_value.substr(0,space)+\n\" \"+return_value.substr(space+1,return_value.length),space=return_value.indexOf(\"+\");return return_value}function SetCookie_GA(a,c){var b=new Date;b.setTime(b.getTime()+864E5);document.cookie=a+\"\\x3d\"+encodeURIComponent(c)+\";domain\\x3d.tomtop.com;expires\\x3d\"+b.toGMTString()+\";path\\x3d\/\";return!0}var mytduid=getVar(\"tduid\");\nif(\"\"!=mytduid){SetCookie_GA(\"TRADEDOUBLER\",mytduid);if(\"m\"==",["escape",["macro",5],8,16],")var category=\"\",productName=product.title,price=product.price,currency=product.currency,url=window.location.href,imageUrl=\"\",productId=product.sku,productDescription=\"\";else{var careName=document.getElementsByClassName(\"Bread_crumbs lbUl\")[0].getElementsByTagName(\"li\"),careNameLeng=careName.length-1,careNameTxt=careName[careNameLeng].getElementsByTagName(\"span\")[0].innerText;category=careNameTxt;productName=product.title;\nprice=product.price;currency=product.currency;url=window.location.href;imageUrl=document.getElementById(\"zoom1\").getAttribute(\"href\");productId=product.sku;productDescription=document.getElementById(\"description\").innerText}var TDConf=TDConf||{};TDConf.Config={productId:productId,category:category,brand:\"[brand]\",productName:productName,productDescription:productDescription,price:price,currency:currency,url:url,imageUrl:imageUrl,containerTagId:\"16955\"};if(\"undefined\"!=typeof TDConf\u0026\u0026(TDConf.sudomain=\n\"https:\"==document.location.protocol?\"swrap\":\"wrap\",TDConf.host=\".tradedoubler.com\/wrap\",TDConf.containerTagURL=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+TDConf.sudomain+TDConf.host,\"undefined\"!=typeof TDConf.Config))if($async){var TDAsync=document.createElement(\"script\");TDAsync.src=TDConf.containerTagURL+\"?id\\x3d\"+TDConf.Config.containerTagId;TDAsync.async=\"yes\";TDAsync.width=0;TDAsync.height=0;TDAsync.frameBorder=0;document.body.appendChild(TDAsync)}else document.write(unescape(\"%3Cscript src\\x3d'\"+\nTDConf.containerTagURL+\"?id\\x3d\"+TDConf.Config.containerTagId+\" ' type\\x3d'text\/javascript'%3E%3C\/script%3E\"))};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":59
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/javascript\"\u003E$async=!0;\nfunction getVar(a){get_string=document.location.search;return_value=\"\";do name_index=get_string.indexOf(a+\"\\x3d\"),-1!=name_index\u0026\u0026(get_string=get_string.substr(name_index+a.length+1,get_string.length-name_index),end_of_value=get_string.indexOf(\"\\x26\"),value=-1!=end_of_value?get_string.substr(0,end_of_value):get_string,return_value=\"\"==return_value||\"\"==value?return_value+value:return_value+(\", \"+value));while(-1!=name_index);for(space=return_value.indexOf(\"+\");-1!=space;)return_value=return_value.substr(0,space)+\n\" \"+return_value.substr(space+1,return_value.length),space=return_value.indexOf(\"+\");return return_value}function SetCookie_GA(a,c){var b=new Date;b.setTime(b.getTime()+864E5);document.cookie=a+\"\\x3d\"+encodeURIComponent(c)+\";domain\\x3d.tomtop.com;expires\\x3d\"+b.toGMTString()+\";path\\x3d\/\";return!0}var mytduid=getVar(\"tduid\");\nif(\"\"!=mytduid){SetCookie_GA(\"TRADEDOUBLER\",mytduid);var TDConf=TDConf||{},proArrtradedoubler=[];if(\"m\"==",["escape",["macro",5],8,16],")for(var proId=document.getElementsByClassName(\"m_product_box X p clearfix itemline\"),i=0;i\u003CproId.length;i++){if(proId[i].getAttribute(\"data-cart-item\")){var arrArrtradedoubler={},selfrates=proId[i].getAttribute(\"data-cart-item\"),selfPrices=JSON.parse(selfrates).price;arrArrtradedoubler.currency=selfPrices.currency;arrArrtradedoubler.id=JSON.parse(selfrates).sku;arrArrtradedoubler.quantity=\nselfPrices.quantity;arrArrtradedoubler.price=selfPrices.price;arrArrtradedoubler.name=JSON.parse(selfrates).ctitle;proArrtradedoubler.push(arrArrtradedoubler)}}else{proId=document.getElementsByTagName(\"dd\");var currency=document.getElementById(\"currencycode\").value;for(i=0;i\u003CproId.length;i++)if(proId[i].getAttribute(\"data-item-obj\")){arrArrtradedoubler={};var jsons=JSON.parse(proId[i].getAttribute(\"data-item-obj\"));arrArrtradedoubler.id=jsons.product.sku;arrArrtradedoubler.price=jsons.gatherCurrentPrice;\narrArrtradedoubler.quantity=jsons.qty;arrArrtradedoubler.name=jsons.product.title;arrArrtradedoubler.currency=currency;proArrtradedoubler.push(arrArrtradedoubler)}}TDConf.Config={products:proArrtradedoubler,containerTagId:\"16956\"};if(\"undefined\"!=typeof TDConf\u0026\u0026(TDConf.sudomain=\"https:\"==document.location.protocol?\"swrap\":\"wrap\",TDConf.host=\".tradedoubler.com\/wrap\",TDConf.containerTagURL=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+TDConf.sudomain+TDConf.host,\"undefined\"!=typeof TDConf.Config))if($async){var TDAsync=\ndocument.createElement(\"script\");TDAsync.src=TDConf.containerTagURL+\"?id\\x3d\"+TDConf.Config.containerTagId;TDAsync.async=\"yes\";TDAsync.width=0;TDAsync.height=0;TDAsync.frameBorder=0;document.body.appendChild(TDAsync)}else document.write(unescape(\"%3Cscript src\\x3d'\"+TDConf.containerTagURL+\"?id\\x3d\"+TDConf.Config.containerTagId+\" ' type\\x3d'text\/javascript'%3E%3C\/script%3E\"))};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E$async=!0;\nfunction getVar(a){get_string=document.location.search;return_value=\"\";do name_index=get_string.indexOf(a+\"\\x3d\"),-1!=name_index\u0026\u0026(get_string=get_string.substr(name_index+a.length+1,get_string.length-name_index),end_of_value=get_string.indexOf(\"\\x26\"),value=-1!=end_of_value?get_string.substr(0,end_of_value):get_string,return_value=\"\"==return_value||\"\"==value?return_value+value:return_value+(\", \"+value));while(-1!=name_index);for(space=return_value.indexOf(\"+\");-1!=space;)return_value=return_value.substr(0,space)+\n\" \"+return_value.substr(space+1,return_value.length),space=return_value.indexOf(\"+\");return return_value}function SetCookie_GA(a,c){var b=new Date;b.setTime(b.getTime()+864E5);document.cookie=a+\"\\x3d\"+encodeURIComponent(c)+\";domain\\x3d.tomtop.com;expires\\x3d\"+b.toGMTString()+\";path\\x3d\/\";return!0}var mytduid=getVar(\"tduid\");\nif(\"\"!=mytduid){SetCookie_GA(\"TRADEDOUBLER\",mytduid);var TDConf=TDConf||{};TDConf.Config={protocol:document.location.protocol,containerTagId:\"16957\"};if(\"undefined\"!=typeof TDConf\u0026\u0026(TDConf.sudomain=\"https:\"==document.location.protocol?\"swrap\":\"wrap\",TDConf.host=\".tradedoubler.com\/wrap\",TDConf.containerTagURL=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+TDConf.sudomain+TDConf.host,\"undefined\"!=typeof TDConf.Config))if($async){var TDAsync=document.createElement(\"script\");TDAsync.src=\nTDConf.containerTagURL+\"?id\\x3d\"+TDConf.Config.containerTagId;TDAsync.async=\"yes\";TDAsync.width=0;TDAsync.height=0;TDAsync.frameBorder=0;document.body.appendChild(TDAsync)}else document.write(unescape(\"%3Cscript src\\x3d'\"+TDConf.containerTagURL+\"?id\\x3d\"+TDConf.Config.containerTagId+\" ' type\\x3d'text\/javascript'%3E%3C\/script%3E\"))};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E$async=!0;\nif(\"tradedoubler\"==getCookie(\"trackssource\")){for(var proArr=[],proId=document.getElementsByClassName(\"order_detail_cls\"),i=0;i\u003CproId.length;i++){var arr={};arr.id=proId[i].getElementsByClassName(\"dlistingid\")[0].value;arr.price=proId[i].getElementsByClassName(\"dprice\")[0].value;arr.name=proId[i].getElementsByClassName(\"dtitle\")[0].value;arr.currency=getCookie(\"TT_CURR\");arr.qty=proId[i].getElementsByClassName(\"dqty\")[0].value;proArr.push(arr)}var TDConf=TDConf||{};TDConf.Config={products:proArr,orderId:order.cordernumber,\norderValue:order.fgrandtotal,currency:order.ccurrency,voucherCode:\"\",validOn:\"\",containerTagId:\"16958\"};if(\"undefined\"!=typeof TDConf\u0026\u0026(TDConf.Config.tduid=getCookie(\"TRADEDOUBLER\"),TDConf.sudomain=\"https:\"==document.location.protocol?\"swrap\":\"wrap\",TDConf.host=\".tradedoubler.com\/wrap\",TDConf.containerTagURL=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+TDConf.sudomain+TDConf.host,\"undefined\"!=typeof TDConf.Config))if($async){var TDAsync=document.createElement(\"script\");TDAsync.src=\nTDConf.containerTagURL+\"?id\\x3d\"+TDConf.Config.containerTagId;TDAsync.async=\"yes\";TDAsync.width=0;TDAsync.height=0;TDAsync.frameBorder=0;document.body.appendChild(TDAsync)}else document.write(unescape(\"%3Cscript src\\x3d'\"+TDConf.containerTagURL+\"?id\\x3d\"+TDConf.Config.containerTagId+\" ' type\\x3d'text\/javascript'%3E%3C\/script%3E\"))};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":62
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction getnewCookie(a){return 0\u003Cdocument.cookie.length\u0026\u0026(c_start=document.cookie.indexOf(a+\"\\x3d\"),-1!=c_start)?(c_start=c_start+a.length+1,c_end=document.cookie.indexOf(\";\",c_start),-1==c_end\u0026\u0026(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):\"\"}\nif(getnewCookie(\"PLAY_LANG\")){var currJS=\"\",curr=getnewCookie(\"PLAY_LANG\");switch(curr){case \"it\":currJS=\"38\/p52887.js\";break;case \"ru\":currJS=\"39\/p52929.js\";break;case \"es\":currJS=\"37\/p52927.js\";break;case \"fr\":currJS=\"13\/p57823.js\"}if(\"uk\"==curr||\"us\"==curr||\"en\"==curr){var elscript=document.createElement(\"script\");elscript.setAttribute(\"type\",\"text\/javascript\");elscript.src=\"\/\/img.metaffiliation.com\/u\/33\/p52923.js\";document.body.appendChild(elscript);var elscripts=document.createElement(\"script\");\nelscripts.setAttribute(\"type\",\"text\/javascript\");elscripts.src=\"\/\/img.metaffiliation.com\/u\/35\/p52925.js\";document.body.appendChild(elscripts);elscripts=document.createElement(\"script\");elscripts.setAttribute(\"type\",\"text\/javascript\");elscripts.src=\"\/\/img.metaffiliation.com\/u\/11\/p57821.js\"}else elscript=document.createElement(\"script\"),elscript.setAttribute(\"type\",\"text\/javascript\"),elscript.src=\"\/\/img.metaffiliation.com\/u\/\"+currJS,document.body.appendChild(elscript);window.ptag_params={zone:\"homepage\",\ncustomerId:\"\",siteType:",["escape",["macro",5],8,16],"}};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":63
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction getCookie(a){return 0\u003Cdocument.cookie.length\u0026\u0026(c_start=document.cookie.indexOf(a+\"\\x3d\"),-1!=c_start)?(c_start=c_start+a.length+1,c_end=document.cookie.indexOf(\";\",c_start),-1==c_end\u0026\u0026(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):\"\"}var currJS=\"\",curr=getCookie(\"PLAY_LANG\");switch(curr){case \"it\":currJS=\"38\/p52887.js\";break;case \"ru\":currJS=\"39\/p52929.js\";break;case \"es\":currJS=\"37\/p52927.js\";break;case \"fr\":currJS=\"13\/p57823.js\"}\nif(\"uk\"==curr||\"us\"==curr||\"en\"==curr){var elscript=document.createElement(\"script\");elscript.setAttribute(\"type\",\"text\/javascript\");elscript.src=\"\/\/img.metaffiliation.com\/u\/33\/p52923.js\";document.body.appendChild(elscript);var elscripts=document.createElement(\"script\");elscripts.setAttribute(\"type\",\"text\/javascript\");elscripts.src=\"\/\/img.metaffiliation.com\/u\/35\/p52925.js\";document.body.appendChild(elscripts);elscripts=document.createElement(\"script\");elscripts.setAttribute(\"type\",\"text\/javascript\");\nelscripts.src=\"\/\/img.metaffiliation.com\/u\/11\/p57821.js\";document.body.appendChild(elscripts)}else elscript=document.createElement(\"script\"),elscript.setAttribute(\"type\",\"text\/javascript\"),elscript.src=\"\/\/img.metaffiliation.com\/u\/\"+currJS,document.body.appendChild(elscript);window.ptag_params={zone:\"product\",productId:product.sku,categoryId:document.getElementById(\"categoryId\").value,customerId:\"\",siteType:",["escape",["macro",5],8,16],"};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction getnewCookie(a){return 0\u003Cdocument.cookie.length\u0026\u0026(c_start=document.cookie.indexOf(a+\"\\x3d\"),-1!=c_start)?(c_start=c_start+a.length+1,c_end=document.cookie.indexOf(\";\",c_start),-1==c_end\u0026\u0026(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):\"\"}\nif(getnewCookie(\"PLAY_LANG\")){var currJS=\"\",curr=getnewCookie(\"PLAY_LANG\");switch(curr){case \"it\":currJS=\"38\/p52887.js\";break;case \"ru\":currJS=\"39\/p52929.js\";break;case \"es\":currJS=\"37\/p52927.js\";break;case \"fr\":currJS=\"13\/p57823.js\"}if(\"uk\"==curr||\"us\"==curr||\"en\"==curr){var elscript=document.createElement(\"script\");elscript.setAttribute(\"type\",\"text\/javascript\");elscript.src=\"\/\/img.metaffiliation.com\/u\/33\/p52923.js\";document.body.appendChild(elscript);var elscripts=document.createElement(\"script\");\nelscripts.setAttribute(\"type\",\"text\/javascript\");elscripts.src=\"\/\/img.metaffiliation.com\/u\/35\/p52925.js\";document.body.appendChild(elscripts);elscripts=document.createElement(\"script\");elscripts.setAttribute(\"type\",\"text\/javascript\");elscripts.src=\"\/\/img.metaffiliation.com\/u\/11\/p57821.js\"}else elscript=document.createElement(\"script\"),elscript.setAttribute(\"type\",\"text\/javascript\"),elscript.src=\"\/\/img.metaffiliation.com\/u\/\"+currJS,document.body.appendChild(elscript);if(\"m\"==",["escape",["macro",5],8,16],")for(var proArr=\n[],careNameTxt=\"\",proId=document.getElementsByClassName(\"product_box\"),i=0;i\u003CproId.length;i++)arr=proId[i].getElementsByClassName(\"favorites fl\")[0].getAttribute(\"data-id\"),proArr.push(arr);else{proArr=[];proId=document.getElementsByClassName(\"productClass\");var careName=document.getElementsByClassName(\"Bread_crumbs lbUl\")[0].getElementsByTagName(\"li\"),careNameLeng=careName.length-1;careNameTxt=careName[careNameLeng].getElementsByTagName(\"span\")[0].innerText;for(i=0;i\u003CproId.length;i++)arr=proId[i].getElementsByClassName(\"productSKU\")[0].innerText.split(\":\")[1],\nproArr.push(arr)}window.ptag_params={zone:\"listing\",categoryId:careNameTxt,products:proArr,customerId:\"\",siteType:",["escape",["macro",5],8,16],"}};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction getnewCookie(a){return 0\u003Cdocument.cookie.length\u0026\u0026(c_start=document.cookie.indexOf(a+\"\\x3d\"),-1!=c_start)?(c_start=c_start+a.length+1,c_end=document.cookie.indexOf(\";\",c_start),-1==c_end\u0026\u0026(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):\"\"}\nif(getnewCookie(\"PLAY_LANG\")){var currJS=\"\",curr=getnewCookie(\"PLAY_LANG\");switch(curr){case \"it\":currJS=\"38\/p52887.js\";break;case \"ru\":currJS=\"39\/p52929.js\";break;case \"es\":currJS=\"37\/p52927.js\";break;case \"fr\":currJS=\"13\/p57823.js\"}if(\"uk\"==curr||\"us\"==curr||\"en\"==curr){var elscript=document.createElement(\"script\");elscript.setAttribute(\"type\",\"text\/javascript\");elscript.src=\"\/\/img.metaffiliation.com\/u\/33\/p52923.js\";document.body.appendChild(elscript);var elscripts=document.createElement(\"script\");\nelscripts.setAttribute(\"type\",\"text\/javascript\");elscripts.src=\"\/\/img.metaffiliation.com\/u\/35\/p52925.js\";document.body.appendChild(elscripts);elscripts=document.createElement(\"script\");elscripts.setAttribute(\"type\",\"text\/javascript\");elscripts.src=\"\/\/img.metaffiliation.com\/u\/11\/p57821.js\";document.body.appendChild(elscripts)}else elscript=document.createElement(\"script\"),elscript.setAttribute(\"type\",\"text\/javascript\"),elscript.src=\"\/\/img.metaffiliation.com\/u\/\"+currJS,document.body.appendChild(elscript);\nif(\"m\"==",["escape",["macro",5],8,16],")for(var proArr=[],currency=document.getElementById(\"currencycode\").value,proId=document.getElementsByClassName(\"m_product_box X clearfix itemline\"),i=0;i\u003CproId.length;i++){if(proId[i].getAttribute(\"data-cart-item\")){var arr={},selfPrices=JSON.parse(proId[i].getAttribute(\"data-cart-item\"));arr.id=selfPrices.product.sku;arr.quantity=selfPrices.qty;arr.price=selfPrices.gatherCurrentPrice;proArr.push(arr)}}else for(proArr=[],proId=document.getElementsByClassName(\"warehouse_list\")[0].getElementsByTagName(\"dd\"),\ncurrency=document.getElementById(\"currencycode\").value,i=0;i\u003CproId.length;i++)arr={},arr.id=proId[i].getElementsByClassName(\"csku\")[0].innerText,arr.price=proId[i].getElementsByClassName(\"theprice\")[0].value,arr.quantity=proId[i].getElementsByClassName(\"input_num\")[0].value,proArr.push(arr);window.ptag_params={zone:\"basket\",products:proArr,currency:currency,customerId:\"\",siteType:",["escape",["macro",5],8,16],"}};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar tsrc=getCookie(\"utm_source\");\nif(null!=tsrc\u0026\u0026\"Netaffiliation\"==tsrc){var currJS=\"\",curr=getCookie(\"PLAY_LANG\");switch(curr){case \"it\":currJS=\"38\/p52887.js\";break;case \"ru\":currJS=\"39\/p52929.js\";break;case \"es\":currJS=\"37\/p52927.js\";break;case \"fr\":currJS=\"13\/p57823.js\"}if(\"uk\"==curr||\"us\"==curr||\"en\"==curr){var elscript=document.createElement(\"script\");elscript.setAttribute(\"type\",\"text\/javascript\");elscript.src=\"\/\/img.metaffiliation.com\/u\/33\/p52923.js\";document.body.appendChild(elscript);var elscripts=document.createElement(\"script\");\nelscripts.setAttribute(\"type\",\"text\/javascript\");elscripts.src=\"\/\/img.metaffiliation.com\/u\/35\/p52925.js\";document.body.appendChild(elscripts);elscripts=document.createElement(\"script\");elscripts.setAttribute(\"type\",\"text\/javascript\");elscripts.src=\"\/\/img.metaffiliation.com\/u\/11\/p57821.js\";document.body.appendChild(elscripts)}else elscript=document.createElement(\"script\"),elscript.setAttribute(\"type\",\"text\/javascript\"),elscript.src=\"\/\/img.metaffiliation.com\/u\/\"+currJS,document.body.appendChild(elscript);\nfor(var proArr=[],proId=document.getElementsByClassName(\"order_detail_cls\"),currency=order.ccurrency,orderNum=order.cordernumber,i=0;i\u003CproId.length;i++){var arr={};arr.id=proId[i].getElementsByClassName(\"dsku\")[0].value;arr.price=proId[i].getElementsByClassName(\"dprice\")[0].value;arr.quantity=proId[i].getElementsByClassName(\"dqty\")[0].value;proArr.push(arr)}window.ptag_params={zone:\"transaction\",products:proArr,transactionId:orderNum,currency:currency,customerId:\"\",siteType:",["escape",["macro",5],8,16],"}};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar tsrc=getCookie(\"utm_source\");if(null!=tsrc\u0026\u0026\"Netaffiliation\"==tsrc){var AAA=order.cordernumber,MMM=parseFloat(order.fordersubtotal)+parseFloat(order.fextra),DDD=order.ccurrency,PPP=order.cpaymentid,elscript=document.createElement(\"img\");elscript.setAttribute(\"width\",\"1\");elscript.setAttribute(\"height\",\"1\");elscript.setAttribute(\"border\",\"0\");elscript.src=\"\/\/action.metaffiliation.com\/trk.php?mclic\\x3dN4CE971013\\x26argann\\x3d\"+AAA+\"\\x26argmon\\x3d\"+MMM+\"\\x26nacur\\x3d\"+DDD+\"\\x26argmodp\\x3d\"+PPP;document.body.appendChild(elscript)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction request_S(b){var a=location.href;a=a.substring(a.indexOf(\"?\")+1,a.length).split(\"\\x26\");var c={};for(i=0;j=a[i];i++)c[j.substring(0,j.indexOf(\"\\x3d\")).toLowerCase()]=j.substring(j.indexOf(\"\\x3d\")+1,j.length);b=c[b.toLowerCase()];return\"undefined\"==typeof b?\"\":b}function TagCookie(b,a){var c=new Date;c.setTime(c.getTime()+6048E5);document.cookie=b+\"\\x3d\"+encodeURIComponent(a)+\";domain\\x3d.tomtop.com;expires\\x3d\"+c.toGMTString()+\";path\\x3d\/\";return!0}\nif(\"\"!=request_S(\"country\")){var countryCook=request_S(\"country\");TagCookie(\"GA_COUNTRY\",countryCook)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":81
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cdiv id=\"fb-root\"\u003E\u003C\/div\u003E\n\u003Cscript\u003E(function(a,b,c){var d=a.getElementsByTagName(b)[0];a.getElementById(c)||(a=a.createElement(b),a.id=c,a.src=\"\/\/connect.facebook.net\/en_US\/sdk.js#xfbml\\x3d1\\x26version\\x3dv2.6\\x26appId\\x3d284737934897635\",d.parentNode.insertBefore(a,d))})(document,\"script\",\"facebook-jssdk\");\u003C\/script\u003E\n\n\n\n\u003Cscript type=\"text\/javascript\"\u003Evar switchTo5x=!0;\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/\/w.sharethis.com\/button\/buttons.js\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/\/s.sharethis.com\/loader.js\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\"\u003EstLight.options({publisher:\"347df969-fb5a-4b45-9004-2ad8bdff48f0\",doNotHash:!1,doNotCopy:!1,hashAddressBar:!1});\u003C\/script\u003E\n\u003Cscript\u003Evar options={publisher:\"347df969-fb5a-4b45-9004-2ad8bdff48f0\",position:\"left\",ad:{visible:!1,openDelay:5,closeDelay:0},chicklets:{items:\"facebook twitter googleplus vkontakte blogger sharethis\".split(\" \")}},st_hover_widget=new sharethis.widgets.hoverbuttons(options);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":82
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar switchTo5x=!0;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/w.sharethis.com\/button\/buttons.js\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/s.sharethis.com\/loader.js\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003EstLight.options({publisher:\"347df969-fb5a-4b45-9004-2ad8bdff48f0\",doNotHash:!1,doNotCopy:!1,hashAddressBar:!1});\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar options={publisher:\"347df969-fb5a-4b45-9004-2ad8bdff48f0\",position:\"right\",ad:{visible:!1,openDelay:5,closeDelay:0},chicklets:{items:[\"facebook\",\"twitter\",\"googleplus\"]}},st_hover_widget=new sharethis.widgets.hoverbuttons(options);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":83
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"d\"==",["escape",["macro",5],8,16],"){var ifram='\\x3ciframe style\\x3d\"border: none; overflow: hidden; width: 100%; height: 340px;\"src\\x3d\"\/\/www.facebook.com\/plugins\/likebox.php?href\\x3dhttps:\/\/www.facebook.com\/tomtopfans\\x26width\\x3d280\\x26height\\x3d339\\x26colorscheme\\x3dlight\\x26show_faces\\x3dtrue\\x26header\\x3dtrue\\x26stream\\x3dfalse\\x26show_border\\x3dtrue\" frameborder\\x3d\"0\" scrolling\\x3d\"no\" height\\x3d\"332\"\\x3e\\x3c\/iframe\\x3e';if(0!=document.getElementsByClassName(\"faceBookWarp\").length){var feace=document.getElementsByClassName(\"faceBookWarp\")[0];\nfeace.innerHTML=ifram}};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":84
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar tsrc=getCookie(\"utm_source\");\nif(null!=tsrc\u0026\u0026\"mopubi.com\"==tsrc){var oid=getCookie(\"tmoki_oid\"),REQUEST_SESSION_ID=getCookie(\"tmoki_rqid\"),Revenue=parseFloat(order.fordersubtotal)+parseFloat(order.fextra),elscript=document.createElement(\"iframe\"),TRANSACTION_ID=order.cordernumber,OrderDiscount=Math.abs(order.fextra),OrderShipping=order.fshippingprice,OrderTotal=order.fgrandtotal,VoucherCode=\"\",Country=order.ccountry,Region=order.cprovince,tsku=\"\",tquantity=\"\",tprice=\"\";0!=loyalty.length\u0026\u0026(VoucherCode=loyalty[0].code);if(details)for(var de in details)tsku=\ntsku+details[de].csku+\"^\",tquantity=tquantity+details[de].iqty+\"^\",tprice=tprice+details[de].fprice+\"^\";elscript.setAttribute(\"width\",\"1\");elscript.setAttribute(\"height\",\"1\");elscript.setAttribute(\"frameborder\",\"0\");elscript.src=\"\/\/tmoki.com\/p.ashx?a\\x3d76\\x26e\\x3d74\\x26o\\x3d\"+oid+\"\\x26p\\x3d\"+Revenue+\"\\x26t\\x3d\"+TRANSACTION_ID+\"\\x26r\\x3d\"+REQUEST_SESSION_ID+\"\\x26ecsk\\x3d\"+tsku+\"\\x26ecqu\\x3d\"+tquantity+\"\\x26ecpr\\x3d\"+tprice+\"\\x26ecld\\x3d0\\x26ecd\\x3d\"+OrderDiscount+\"\\x26ecsh\\x3d\"+OrderShipping+\"\\x26ect\\x3d\"+\nOrderTotal+\"\\x26ecv\\x3d\"+VoucherCode+\"\\x26ecco\\x3d\"+Country+\"\\x26ecrg\\x3d\"+Region;document.body.appendChild(elscript)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":85
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar tsrc=getCookie(\"utm_source\");\nif(null!=tsrc\u0026\u0026\"cfjump\"==tsrc){for(var proId=document.getElementsByClassName(\"order_detail_cls\"),proArr=[],i=0;i\u003CproId.length;i++){var arr={};arr.sku=proId[i].getElementsByClassName(\"dsku\")[0].value;arr.price=proId[i].getElementsByClassName(\"dprice\")[0].value;arr.quantity=proId[i].getElementsByClassName(\"dqty\")[0].value;proArr.push(arr)}console.log(proArr);if(0!=loyalty.length)var VoucherCode=loyalty[0].code;(function(a,b,c){a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[c]=a[b]})(window,\n\"CommissionFactory\",\"cf\");cf(\"set\",\"order\",order.cordernumber);cf(\"set\",\"amount\",parseFloat(order.fordersubtotal)+parseFloat(order.fextra));cf(\"set\",\"currency\",order.ccurrency);cf(\"set\",\"coupon\",VoucherCode);cf(\"set\",\"customer\",\"new\");cf(\"add\",\"items\",proArr);cf(\"track\")};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":86
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"\/\/t.cfjump.com\/tag\/37631\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":87
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/javascript\" language=\"Javascript\"\u003Evar CJEVENT=getCookie(\"CJEVENT\"),tsrc=getCookie(\"utm_source\");\nif(null!=tsrc\u0026\u0026\"cj\"==tsrc){if(\"m\"==",["escape",["macro",5],8,16],")var TagId=15331,type=387668;else TagId=15330,type=387667;var count,DISCOUNT=Math.abs(order.fextra),COUPON=\"\";if(loyalty)for(var l in loyalty)\"point\"!=loyalty[l].type\u0026\u0026(COUPON+=loyalty[l].code);var url=\"\/\/www.emjcd.com\/tags\/c?containerTagId\\x3d\"+TagId+\"\\x26CID\\x3d1538544\\x26TYPE\\x3d\"+type+\"\\x26CURRENCY\\x3dUSD\\x26DISCOUNT\\x3d\"+DISCOUNT+\"\\x26COUPON\\x3d\"+COUPON;url+=\"\\x26OID\\x3d\"+order.cordernumber+\"\\x26CJEVENT\\x3d\"+CJEVENT;for(count=1;count\u003C=details.length;count++)void 0!=\ndetails[count-1].csku\u0026\u0026(url+=\"\\x26ITEM\"+count+\"\\x3d\"+details[count-1].csku,url+=\"\\x26AMT\"+count+\"\\x3d\"+details[count-1].fprice,url+=\"\\x26QTY\"+count+\"\\x3d\"+details[count-1].iqty);document.write('\\x3ciframe height\\x3d\"1\" width\\x3d\"1\" frameborder\\x3d\"0\" scrolling\\x3d\"no\" name\\x3d\"cj_conversion\" src\\x3d\"'+url+'\"\\x3e\\x3c\/iframe\\x3e')};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":89
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar tsrc=getCookie(\"utm_source\");\nif(null!=tsrc\u0026\u0026\"AW\"==tsrc){var sProtocol=\"http:\"==location.protocol?\"http\":\"https\",awPixel=new Image(0,0);awPixel.src=sProtocol+\"\/\/www.awin1.com\/sread.img?tt\\x3dns\\x26tv\\x3d2\\x26merchant\\x3d7566\\x26amount\\x3d\"+",["escape",["macro",7],8,16],"+\"\\x26ch\\x3daw\\x26parts\\x3dDEFAULT:\"+",["escape",["macro",7],8,16],"+\"\\x26ref\\x3d\"+",["escape",["macro",10],8,16],"+\"\\x26vc\\x3d\"+",["escape",["macro",8],8,16],"+\"\\x26cr\\x3d\"+",["escape",["macro",9],8,16],"+\"\\x26testmode\\x3d0\";var Worder_subtotal=(parseFloat(order.wgfordersubtotal)+parseFloat(order.wgfextra)).toFixed(2),\nAWIN={Tracking:{}};AWIN.Tracking.Sale={};var Wvoucher_code=\"\";if(loyalty)for(var l in loyalty)\"point\"!=loyalty[l].type\u0026\u0026(Wvoucher_code=loyalty[l].code);AWIN.Tracking.Sale.amount=Worder_subtotal;AWIN.Tracking.Sale.orderRef=order.cordernumber;AWIN.Tracking.Sale.parts=\"DEFAULT:\"+AWIN.Tracking.Sale.amount;AWIN.Tracking.Sale.voucher=Wvoucher_code;AWIN.Tracking.Sale.currency=order.wgcurrency;AWIN.Tracking.Sale.test=\"0\";AWIN.Tracking.Sale.channel=\"aw\";var transactionProducts=details;AWIN.Tracking.Sale.plt=\n\"\";for(i=0;i\u003CtransactionProducts.length;i++)AWIN.Tracking.Sale.plt+=\"AW:P|7566|\"+order.cordernumber+\"|\"+transactionProducts[i].csku+\"|\"+transactionProducts[i].ctitle+\"|\"+transactionProducts[i].wgfprice+\"|\"+transactionProducts[i].iqty+\"||DEFAULT|\\n\";var basketForm=document.createElement(\"form\");basketForm.setAttribute(\"style\",\"display:none;\");basketForm.setAttribute(\"name\",\"basket_form\");var basketTextArea=document.createElement(\"textarea\");basketTextArea.setAttribute(\"wrap\",\"physical\");basketTextArea.setAttribute(\"id\",\n\"aw_basket\");basketTextArea.value=AWIN.Tracking.Sale.plt;basketForm.appendChild(basketTextArea);document.getElementsByTagName(\"body\")[0].appendChild(basketForm)};\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"https:\/\/www.dwin1.com\/7566.js\" type=\"text\/gtmscript\" defer\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":91
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/www.dwin1.com\/7566.js\" type=\"text\/gtmscript\" defer\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":100
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Evar tsrc=getCookie(\"utm_source\");if(null!=tsrc\u0026\u0026\"tradedoubler\"==tsrc){var tduid=getCookie(\"TDUID\"),url=\"https:\/\/tbs.tradedoubler.com\/report?organization\\x3d2056677\\x26event\\x3d348013\\x26orderValue\\x3d\"+",["escape",["macro",7],8,16],"+\"\\x26orderNumber\\x3d\"+",["escape",["macro",10],8,16],"+\"\\x26currency\\x3d\"+",["escape",["macro",9],8,16],"+\"\\x26tduid\\x3d\"+tduid+\"\\x26type\\x3diframe\";document.write('\\x3ciframe height\\x3d\"1\" width\\x3d\"1\" frameborder\\x3d\"0\" scrolling\\x3d\"no\" src\\x3d\"'+url+'\"\\x3e\\x3c\/iframe\\x3e')};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":103
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _maq=_maq||[];if(\"m\"==",["escape",["macro",5],8,16],")var languageSelf=\"en\",types=2;else languageSelf=getCookie(\"PLAY_LANG\"),types=1;_maq.push([\"website_id\",\"1\"]);_maq.push([\"website_type\",types]);_maq.push([\"language\",languageSelf]);\n(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"static.tomtop.com\/tomtop\/js\/trace.js?v\\x3d201810091116\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _maq=_maq||[];_maq.push([\"category\",",["escape",["macro",13],8,16],"]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":110
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _maq=_maq||[];_maq.push([\"sku\",product.sku]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":111
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _maq=_maq||[],searchSelf={};\n\"m\"==",["escape",["macro",5],8,16],"?(searchSelf.text=document.getElementsByClassName(\"caregory_screen\")[0].getElementsByTagName(\"h1\")[0].innerText,searchSelf.result_qty=document.getElementsByClassName(\"m_product_box Y waves-effect waves-float\").length):1\u003C=document.getElementsByClassName(\"searchNone\").length?(searchSelf.text=document.getElementsByClassName(\"searchNone\")[0].getElementsByTagName(\"span\")[0].innerText,searchSelf.result_qty=\"0\"):(searchSelf.text=document.getElementsByClassName(\"Bread_crumbs lbUl\")[0].getElementsByTagName(\"h1\")[0].innerText,searchSelf.result_qty=\ndocument.getElementsByClassName(\"s_num\")[0].innerText,searchSelf.category_id=document.getElementsByClassName(\"search_wrap\")[0].getElementsByClassName(\"result\")[0].getElementsByTagName(\"em\")[0].getAttribute(\"date-id\"),searchSelf.category_name=document.getElementsByClassName(\"search_wrap\")[0].getElementsByClassName(\"result\")[0].getElementsByTagName(\"em\")[0].getAttribute(\"data-path\"));searchSelf=JSON.stringify(searchSelf);_maq.push([\"search\",searchSelf]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":116
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._retag=window._retag||[];window._retag.push({code:\"9ce88874c3\",level:0});(function(){var a=\"admitad-retag\";if(!document.getElementById(a)){var b=document.createElement(\"script\");b.async=!0;b.id=a;a=(new Date).getDate();b.src=(\"https:\"==document.location.protocol?\"https:\":\"http:\")+\"\/\/cdn.lenmit.com\/static\/js\/retag.min.js?r\\x3d\"+a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":117
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",61,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.ad_category=",["escape",["macro",13],8,16],";window._retag=window._retag||[];window._retag.push({code:\"9ce88874c0\",level:1});(function(){var a=\"admitad-retag\";if(!document.getElementById(a)){var b=document.createElement(\"script\");b.async=!0;b.id=a;a=(new Date).getDate();b.src=(\"https:\"==document.location.protocol?\"https:\":\"http:\")+\"\/\/cdn.lenmit.com\/static\/js\/retag.min.js?r\\x3d\"+a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":118
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar pic=\"d\"==",["escape",["macro",5],8,16],"?document.getElementsByClassName(\"middle-img\")[0].getElementsByTagName(\"img\")[0].getAttribute(\"src\"):\"mImg\",productIDN=document.getElementById(\"categoryId\").value;window.ad_product={id:product.sku,vendor:\"\",price:product.price,url:",["escape",["macro",6],8,16],",picture:pic,name:product.title,category:productIDN};window._retag=window._retag||[];window._retag.push({code:\"9ce88874c1\",level:2});\n(function(){var a=\"admitad-retag\";if(!document.getElementById(a)){var b=document.createElement(\"script\");b.async=!0;b.id=a;a=(new Date).getDate();b.src=(\"https:\"==document.location.protocol?\"https:\":\"http:\")+\"\/\/cdn.lenmit.com\/static\/js\/retag.min.js?r\\x3d\"+a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":119
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efor(var proArr=[],proId=\"m\"==",["escape",["macro",5],8,16],"?document.getElementsByClassName(\"m_product_box X p clearfix itemline\"):document.getElementsByTagName(\"dd\"),i=0;i\u003CproId.length;i++)if(\"m\"==",["escape",["macro",5],8,16],"){if(proId[i].getAttribute(\"data-cart-item\")){var selfrates=proId[i].getAttribute(\"data-cart-item\"),selfPrices=JSON.parse(selfrates),number=selfPrices.qty,sku=selfPrices.product.sku,arr={};arr.id=sku;arr.number=number;proArr.push(arr)}}else if(proId[i].getAttribute(\"data-item-obj\")){var jsons=\nJSON.parse(proId[i].getAttribute(\"data-item-obj\"));sku=jsons.product.sku;number=jsons.qty;arr={};arr.id=sku;arr.number=number;proArr.push(arr)}window.ad_products=proArr;window._retag=window._retag||[];window._retag.push({code:\"9ce88874ce\",level:3});\n(function(){var a=\"admitad-retag\";if(!document.getElementById(a)){var b=document.createElement(\"script\");b.async=!0;b.id=a;a=(new Date).getDate();b.src=(\"https:\"==document.location.protocol?\"https:\":\"http:\")+\"\/\/cdn.lenmit.com\/static\/js\/retag.min.js?r\\x3d\"+a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":120
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efor(var proArr=[],proId=document.getElementsByClassName(\"order_detail_cls\"),i=0;i\u003CproId.length;i++){var arr={};arr.id=proId[i].getElementsByClassName(\"dsku\")[0].value;arr.number=proId[i].getElementsByClassName(\"dqty\")[0].value;proArr.push(arr)}window.ad_order=order.cordernumber;window.ad_amount=order.wgfordersubtotal;window.ad_products=proArr;window._retag=window._retag||[];window._retag.push({code:\"9ce88874cf\",level:4});\n(function(){var a=\"admitad-retag\";if(!document.getElementById(a)){var b=document.createElement(\"script\");b.async=!0;b.id=a;a=(new Date).getDate();b.src=(\"https:\"==document.location.protocol?\"https:\":\"http:\")+\"\/\/cdn.lenmit.com\/static\/js\/retag.min.js?r\\x3d\"+a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":121
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"5510368\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq1\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg src=\"\/\/bat.bing.com\/action\/0?ti=5510368\u0026amp;Ver=2\" height=\"0\" width=\"0\" style=\"display:none; visibility: hidden;\"\u003E\u003C\/noscript\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Edocument.getElementById(\"orderprice\")\u0026\u0026(window.uetq1=window.uetq1||[],window.uetq1.push({gv:",["escape",["macro",11],8,16],"}));\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":125
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar tsrc=getCookie(\"utm_source\");\nif(null!=tsrc\u0026\u0026\"clickwise\"==tsrc){var ref=getCookie(\"trackssource\"),clickidWise=getCookie(\"clickidWise\"),elscript=document.createElement(\"img\");elscript.setAttribute(\"width\",\"1\");elscript.setAttribute(\"height\",\"1\");elscript.setAttribute(\"border\",\"0\");elscript.src=\"\/\/my.pampanetwork.com\/scripts\/sale.php?CampaignID\\x3d6cb0d62b\\x26ActionCode\\x3dpersale\\x26OrderID\\x3d\"+",["escape",["macro",10],8,16],"+\"\\x26TotalCost\\x3d\"+",["escape",["macro",11],8,16],"+\"\\x26AffiliateID\\x3d\"+ref+\"\\x26data1\\x3d\"+clickidWise;document.body.appendChild(elscript)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":138
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar tsrc=getCookie(\"utm_source\");if(null!=tsrc\u0026\u0026\"a8\"==tsrc){var AAA=order.cordernumber,MMM=parseFloat(order.fordersubtotal)+parseFloat(order.fextra),elscript=document.createElement(\"img\");elscript.setAttribute(\"width\",\"1\");elscript.setAttribute(\"height\",\"1\");elscript.setAttribute(\"border\",\"0\");elscript.src=\"\/\/px.a8.net\/a8fly\/earnings?pid\\x3ds00000017633001\\x26so\\x3d\"+AAA+\"\\x26si\\x3d\"+MMM+\"-1-\"+MMM+\"-a8\\x26currency\\x3dUSD\";document.body.appendChild(elscript)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efor(var els=document.querySelectorAll(\"#AlsoViewed .moveList.productClass a\"),i=els.length-1;0\u003C=i;i--)els[i].onclick=function(a){var c=this,d=new Image,b=[];b.site=1;b.block=\"\\u770b\\u4e86\\u53c8\\u770b\";b.event=a.type;b.eventTarget=a.target.tagName;b.value=c.href;a=\"\";for(var e in b)\"\"!=a\u0026\u0026(a+=\"\\x26\"),a+=e+\"\\x3d\"+encodeURIComponent(b[e]);d.onload=function(){location.href=c.href};d.src=\"\/\/trace.tomtop.com\/traceblock.php?\"+a;return!1};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":142
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar code=\"m\"==",["escape",["macro",5],8,16],"?document.getElementsByClassName(\"bm_text promo_input\")[0].value:document.getElementById(\"checkout_promo_input\").value;\"RVT5\"!=code\u0026\u0026\"REV5\"!=code||setCookie(\"utm_source\",\"shareasale\",60);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":143
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction getnewCookie(a){return 0\u003Cdocument.cookie.length\u0026\u0026(c_start=document.cookie.indexOf(a+\"\\x3d\"),-1!=c_start)?(c_start=c_start+a.length+1,c_end=document.cookie.indexOf(\";\",c_start),-1==c_end\u0026\u0026(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):\"\"}var GA_Lang=getnewCookie(\"PLAY_LANG\"),GA_VEJS=\"\";\"m\"==",["escape",["macro",5],8,16],"?\"ru\"==GA_Lang\u0026\u0026(GA_VEJS=\"4b77728a\/0807\/495e\/881f\/cef17c68dfba\/tag.js\"):\"ru\"==GA_Lang\u0026\u0026(GA_VEJS=\"6B9B9309\/9DA3\/45C8\/8245\/48267A7ACB58\/tag.js\");\n!function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/configch2.veinteractive.com\/tags\/\"+GA_VEJS;var b=document.getElementsByTagName(\"head\")[0];b?b.appendChild(a,b):(b=document.getElementsByTagName(\"script\")[0],b.parentNode.insertBefore(a,b))}();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":144
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction getnewCookie(a){return 0\u003Cdocument.cookie.length\u0026\u0026(c_start=document.cookie.indexOf(a+\"\\x3d\"),-1!=c_start)?(c_start=c_start+a.length+1,c_end=document.cookie.indexOf(\";\",c_start),-1==c_end\u0026\u0026(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):\"\"}var GA_Lang=getnewCookie(\"PLAY_LANG\"),GA_VEPIX=\"\";\"m\"==",["escape",["macro",5],8,16],"?\"ru\"==GA_Lang\u0026\u0026(GA_VEPIX=\"4b77728a-0807-495e-881f-cef17c68dfba\"):\"ru\"==GA_Lang\u0026\u0026(GA_VEPIX=\"6B9B9309-9DA3-45C8-8245-48267A7ACB58\");\nvar GA_VEPIXIMG=document.createElement(\"img\");GA_VEPIXIMG.setAttribute(\"width\",\"1\");GA_VEPIXIMG.setAttribute(\"height\",\"1\");GA_VEPIXIMG.setAttribute(\"border\",\"0\");GA_VEPIXIMG.src=\"\/\/cdsch2.veinteractive.com\/DataReceiverService.asmx\/Pixel?journeycode\\x3d\"+GA_VEPIX;document.body.appendChild(GA_VEPIXIMG);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":145
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ertgsettings={pdt_url:\"$pdt_url$\",pagetype:\"home\",key:\"DIR\",token:\"Tomtop_GLB\",layer:\"iframe\"};(function(a){var b=a.createElement(\"script\");b.async=!0;b.id=\"madv2014rtg\";b.type=\"text\/javascript\";b.src=(\"https:\"==a.location.protocol?\"https:\":\"http:\")+\"\/\/www.mainadv.com\/Visibility\/Rtgdir2-min.js\";a=a.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":147
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ertgsettings={pdt_url:\"$pdt_url$\",pdt_category_list:\"$pdt_category_list$\",pagetype:\"category\",key:\"DIR\",token:\"Tomtop_GLB\",layer:\"iframe\"};(function(a){var b=a.createElement(\"script\");b.async=!0;b.id=\"madv2014rtg\";b.type=\"text\/javascript\";b.src=(\"https:\"==a.location.protocol?\"https:\":\"http:\")+\"\/\/www.mainadv.com\/Visibility\/Rtgdir2-min.js\";a=a.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ertgsettings={pdt_id:product.sku,pdt_sku:product.sku,pdt_name:product.title,pdt_price:product.saleprice,pdt_amount:\"$pdt_amount$\",pdt_currency:product.currency,pdt_url:product.url,pdt_photo:\"$pdt_photo$\",pdt_instock:\"$pdt_instock$\",pdt_expdate:\"$pdt_expdate$\",pdt_category_list:\"$pdt_category_list$\",pdt_smalldescription:\"$pdt_smalldescription$\",pagetype:\"product\",key:\"DIR\",token:\"Tomtop_GLB\",layer:\"iframe\"};\n(function(a){var b=a.createElement(\"script\");b.async=!0;b.id=\"madv2014rtg\";b.type=\"text\/javascript\";b.src=(\"https:\"==a.location.protocol?\"https:\":\"http:\")+\"\/\/www.mainadv.com\/Visibility\/Rtgdir2-min.js\";a=a.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":149
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ertgsettings={pdt_id:\"$pdt_id$\",pdt_sku:\"$pdt_sku$\",pdt_category_list:\"$pdt_category_list$\",pdt_url:\"$pdt_url$\",ty_orderamt:\"$ty_orderamt$\",ty_orderdate:\"$ty_orderdate$\",ty_orderstatus:\"$ty_orderstatus$\",pagetype:\"basket\",key:\"DIR\",token:\"Tomtop_GLB\",layer:\"iframe\"};\n(function(a){var b=a.createElement(\"script\");b.async=!0;b.id=\"madv2014rtg\";b.type=\"text\/javascript\";b.src=(\"https:\"==a.location.protocol?\"https:\":\"http:\")+\"\/\/www.mainadv.com\/Visibility\/Rtgdir2-min.js\";a=a.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":150
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ertgsettings={pdt_id:\"$pdt_id$\",pdt_sku:",["escape",["macro",16],8,16],",pdt_category_list:\"$pdt_category_list$\",ty_orderid:order.cordernumber,ty_orderamt:",["escape",["macro",11],8,16],",ty_orderdate:\"$ty_orderdate$\",ty_orderstatus:\"$ty_orderstatus$\",ty_cusname:\"$ty_cusname$\",ty_cusid:\"$ty_cusid$\",ty_custype:\"$ty_custype$\",ty_cuscoupon:\"$ty_ cuscoupon$\",pagetype:\"checkout\",key:\"DIR\",token:\"Tomtop_GLB\",layer:\"iframe\"};\n(function(a){var b=a.createElement(\"script\");b.async=!0;b.id=\"madv2014rtg\";b.type=\"text\/javascript\";b.src=(\"https:\"==a.location.protocol?\"https:\":\"http:\")+\"\/\/www.mainadv.com\/Visibility\/Rtgdir2-min.js\";a=a.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":151
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" id=\"uts_lp\" data-gtmsrc=\"\/\/www.linkconnector.com\/uts_lp.php?cgid=900862\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":152
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar tsrc=getCookie(\"utm_source\");\nif(null!=tsrc\u0026\u0026\"Linkconnector\"==tsrc){var uts_eventid=\"4260\",uts_orderid=order.cordernumber,uts_saleamount=",["escape",["macro",11],8,16],",uts_coupon=",["escape",["macro",8],8,16],",uts_discount=order.fextra,uts_currency=\"USD\",uts_customerstatus=order.isNewUser,uts_product_category=details[0].categoryname,lc_script=document.createElement(\"script\"),lc_uri=\"\/\/www.linkconnector.com\/uts_tm.php?cgid\\x3d900862\";lc_script.type=\"text\/javascript\";lc_script.src=lc_uri;lc_script.setAttribute(\"id\",\"uts_tm\");try{document.body.appendChild(lc_script)}catch(a){document.head.appendChild(lc_script)}};\u003C\/script\u003E\n\n "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":153
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/s3.amazonaws.com\/cdn.barilliance.com\/tomtop.com\/cbar.js.php\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":154
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar b_sid=59759;function cbar_cookieval(a){return(match=document.cookie.match(\"(?:^|;)\\\\s?\"+a+\"\\x3d(.*?)(?:;|$)\"))\u0026\u0026unescape(match[1])}var img=document.createElement(\"img\");img.src=\"\/\/lb.data-dynamic.net\/thankyou_pix.php?sid\\x3d\"+b_sid+\"\\x26uid\\x3d\"+cbar_cookieval(\"cbar_uid\")+\"\\x26ts\\x3d\"+Math.ceil(1E4*Math.random());img.style.height=\"1px\";img.style.width=\"1px\";img.style.border=\"none\";window.document.body.appendChild(img);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":155
    },{
      "function":"__html",
      "priority":0,
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"productClick\"});GA_productClicks(",["escape",["macro",29],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":164
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"addToCart\"});GA_addToCartClicks(",["escape",["macro",29],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":169
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"gtm.dom\"});GA_productView();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":170
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"promotionClick\"});onPromoClick(",["escape",["macro",29],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":172
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"addToCart\"});GA_productAddToCartClicks(",["escape",["macro",29],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":174
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"checkout\"});GA_checkoutClicks(\"checkoutPlace\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":176
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"removeFromCart\"});var GA_clickClass=",["escape",["macro",40],8,16],",GA_removeCartnumber=GA_clickClass.split(\"_\")[2];GA_removeClicks(GA_removeCartnumber);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":178
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"checkout\"});GA_checkoutClicks(\"paypal\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":179
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar tsrc=getCookie(\"utm_source\");if(null!=tsrc\u0026\u0026\"epn\"==tsrc){var ref=getCookie(\"click_id\"),clickidWise=getCookie(\"clickidWise\"),elepnbest=document.createElement(\"img\");elepnbest.setAttribute(\"width\",\"1\");elepnbest.setAttribute(\"height\",\"1\");elepnbest.setAttribute(\"border\",\"0\");elepnbest.src=\"\/\/go.epnbest.bz\/tracking\/tomtop\/?oid\\x3d\"+",["escape",["macro",10],8,16],"+\"\\x26oa\\x3d\"+",["escape",["macro",11],8,16],"+\"\\x26click_id\\x3d\"+ref;document.body.appendChild(elepnbest)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":191
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"promotionClick\"});onBannerClick(",["escape",["macro",29],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":195
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.ad_category=",["escape",["macro",41],8,16],";window._retag=window._retag||[];window._retag.push({code:\"9ce88874c0\",level:1});(function(){var a=\"admitad-retag\";if(!document.getElementById(a)){var b=document.createElement(\"script\");b.async=!0;b.id=a;a=(new Date).getDate();b.src=(\"https:\"==document.location.protocol?\"https:\":\"http:\")+\"\/\/cdn.lenmit.com\/static\/js\/retag.min.js?r\\x3d\"+a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":196
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Evar tsrc=getCookie(\"utm_source\");if(null!=tsrc\u0026\u0026\"dcm\"==tsrc){var url=\"https:\/\/go.urtrackinglink.com\/aff_l?offer_id\\x3d761\\x26adv_sub\\x3d\"+",["escape",["macro",10],8,16],"+\"\\x26amount\\x3d\"+",["escape",["macro",7],8,16],";document.write('\\x3ciframe height\\x3d\"1\" width\\x3d\"1\" frameborder\\x3d\"0\" scrolling\\x3d\"no\" src\\x3d\"'+url+'\"\\x3e\\x3c\/iframe\\x3e')};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":197
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction getUrlPara(a){var b=window.location.href;b=b.substring(b.indexOf(\"?\")+1,b.length).split(\"\\x26\");var c={};for(i=0;j=b[i];i++)c[j.substring(0,j.indexOf(\"\\x3d\")).toLowerCase()]=j.substring(j.indexOf(\"\\x3d\")+1,j.length);a=c[a.toLowerCase()];return\"undefined\"==typeof a?\"\":a}var rc_token=null;-1!==window.location.href.indexOf(\"rc_token\")\u0026\u0026(rc_token=getUrlPara(\"rc_token\"));var experiment_ids=0\u003C$(\"#google_recomend\").length?[\"experiment_b_version\"]:[\"experiment_a_version\"];\nif(\"d\"==",["escape",["macro",5],8,16],"){var user_event={user_attributes:{visitor_id:",["escape",["macro",22],8,16],",user_id:",["escape",["macro",23],8,16],",user_agent:",["escape",["macro",27],8,16],",ip_address:",["escape",["macro",26],8,16],"},user_event_detail:{domain:\"tomtop.com\",event_type:\"ADD_TO_CART\",recommendation_token:rc_token,product_details:[{catalog_item_id:",["escape",["macro",21],8,16],",original_price:",["escape",["macro",24],8,16],",displayed_price:",["escape",["macro",25],8,16],"}]}},_gre=_gre||[];_gre.push([\"apiKey\",\"AIzaSyAoGi0KGMCBJKZByTku7LTgG15I8g7v_oI\"]);\n_gre.push([\"logEvent\",user_event]);_gre.push([\"catalogId\",\"default_catalog\"]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/www.gstatic.com\/recommendationengine\/event.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();user_event.user_event_detail.event_type=\"ADD_TO_CART\";user_event.user_event_detail.product_details[0].quantity=Number(document.getElementById(\"quantity\").value);recommendationEngine.logEvent(_gre)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":198
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction getUrlPara(a){var b=window.location.href;b=b.substring(b.indexOf(\"?\")+1,b.length).split(\"\\x26\");var c={};for(i=0;j=b[i];i++)c[j.substring(0,j.indexOf(\"\\x3d\")).toLowerCase()]=j.substring(j.indexOf(\"\\x3d\")+1,j.length);a=c[a.toLowerCase()];return\"undefined\"==typeof a?\"\":a}var rc_token=null;-1!==window.location.href.indexOf(\"rc_token\")\u0026\u0026(rc_token=getUrlPara(\"rc_token\"));var experiment_ids=0\u003C$(\"#google_recomend\").length?[\"experiment_b_version\"]:[\"experiment_a_version\"];\nif(\"d\"==",["escape",["macro",5],8,16],"){var stock=!1;if(stock=\"d\"==",["escape",["macro",5],8,16],"?document.getElementsByClassName(\"outStockCart hide\")[0]?!0:!1:document.getElementsByClassName(\"out-of-stock-btn\")[0]?!1:!0){var user_event={user_attributes:{visitor_id:",["escape",["macro",22],8,16],",user_id:",["escape",["macro",23],8,16],",user_agent:",["escape",["macro",27],8,16],",ip_address:",["escape",["macro",26],8,16],"},user_event_detail:{domain:\"tomtop.com\",event_type:\"DETAIL_PAGE_VIEW\",recommendation_token:rc_token,product_details:[{catalog_item_id:",["escape",["macro",21],8,16],",\noriginal_price:",["escape",["macro",25],8,16],",displayed_price:",["escape",["macro",24],8,16],"}]}},_gre=_gre||[];_gre.push([\"apiKey\",\"AIzaSyAoGi0KGMCBJKZByTku7LTgG15I8g7v_oI\"]);_gre.push([\"logEvent\",user_event]);_gre.push([\"catalogId\",\"default_catalog\"]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/www.gstatic.com\/recommendationengine\/event.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})()}};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":200
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"d\"==",["escape",["macro",5],8,16],"){var user_event={userInfo:{visitorId:",["escape",["macro",22],8,16],",userId:",["escape",["macro",23],8,16],",userAgent:",["escape",["macro",27],8,16],",ipAddress:",["escape",["macro",26],8,16],"},eventDetail:{recommendationToken:\"null\"},productEventDetail:{eventType:\"HOME_PAGE_VIEW\",productDetails:[{catalogItemId:",["escape",["macro",21],8,16],",originalPrice:",["escape",["macro",24],8,16],",displayedPrice:",["escape",["macro",25],8,16],"}]}},_gre=_gre||[];_gre.push([\"apiKey\",\"AIzaSyAoGi0KGMCBJKZByTku7LTgG15I8g7v_oI\"]);_gre.push([\"logEvent\",\nuser_event]);_gre.push([\"catalogId\",\"default_catalog\"]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/www.gstatic.com\/recommendationengine\/v1alpha_event.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();user_event.productEventDetail.eventType=\"HOME_PAGE_VIEW\";user_event.productEventDetail.productDetails=null};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":201
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"d\"==",["escape",["macro",5],8,16],"\u0026\u0026-1==window.location.href.indexOf(\"forum.tomtop.com\")){var user_event={user_attributes:{visitor_id:",["escape",["macro",22],8,16],",user_id:",["escape",["macro",23],8,16],",user_agent:",["escape",["macro",27],8,16],",ip_address:",["escape",["macro",26],8,16],"},user_event_detail:{domain:\"tomtop.com\",event_type:\"CATEGORY_PAGE_VIEW\",recommendation_token:null,product_details:null}},_gre=_gre||[];_gre.push([\"apiKey\",\"AIzaSyAoGi0KGMCBJKZByTku7LTgG15I8g7v_oI\"]);_gre.push([\"logEvent\",user_event]);_gre.push([\"catalogId\",\n\"default_catalog\"]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/www.gstatic.com\/recommendationengine\/event.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();if(\"d\"==",["escape",["macro",5],8,16],")var GA_caregoryTitle=0\u003Cdocument.getElementsByClassName(\"categoryWarpRight\").length?document.getElementsByClassName(\"categoryWarpRight\")[0].getElementsByTagName(\"h1\")[0].innerText:0\u003Cdocument.getElementsByClassName(\"f_floor\").length?\ndocument.getElementsByClassName(\"f_floor f_floor1\")[0].getElementsByTagName(\"h2\")[0].innerText:document.getElementsByClassName(\"brand_intro\")[0].getElementsByTagName(\"h3\")[0].innerText;user_event.user_event_detail.event_type=\"CATEGORY_PAGE_VIEW\";user_event.user_event_detail.page_categories={categories:[GA_caregoryTitle]}};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":202
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"m\"==",["escape",["macro",5],8,16],"){var user_event={user_attributes:{visitor_id:",["escape",["macro",22],8,16],",user_id:",["escape",["macro",23],8,16],",user_agent:",["escape",["macro",27],8,16],",ip_address:",["escape",["macro",26],8,16],"},user_event_detail:{domain:\"tomtop.com\",event_type:\"SEARCH\",recommendation_token:null,product_details:[{catalog_item_id:",["escape",["macro",21],8,16],",original_price:",["escape",["macro",24],8,16],",displayed_price:",["escape",["macro",25],8,16],"}]}},_gre=_gre||[];_gre.push([\"apiKey\",\"AIzaSyAoGi0KGMCBJKZByTku7LTgG15I8g7v_oI\"]);_gre.push([\"logEvent\",\nuser_event]);_gre.push([\"catalogId\",\"default_catalog\"]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/www.gstatic.com\/recommendationengine\/event.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();user_event.user_event_detail.event_type=\"SEARCH\";user_event.user_event_detail.product_details=null;user_event.user_event_detail.search_query=document.getElementsByClassName(\"remove_val\")[0].getElementsByTagName(\"input\")[0].value||\n\"sex\"};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":203
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction switchToUs(a){var b=document.getElementById(\"currencyRate\").value;return a=(Math.round(a\/b*1E6\/1E4)\/100).toFixed(2)}\nif(\"d\"==",["escape",["macro",5],8,16],"){var user_event={user_attributes:{visitor_id:",["escape",["macro",22],8,16],",user_id:",["escape",["macro",23],8,16],",user_agent:",["escape",["macro",27],8,16],",ip_address:",["escape",["macro",26],8,16],"},user_event_detail:{domain:\"tomtop.com\",event_type:\"REMOVE_FROM_CART\",recommendation_token:null,product_details:[{catalog_item_id:",["escape",["macro",21],8,16],",original_price:",["escape",["macro",24],8,16],",displayed_price:",["escape",["macro",25],8,16],"}]}},_gre=_gre||[];_gre.push([\"apiKey\",\"AIzaSyAoGi0KGMCBJKZByTku7LTgG15I8g7v_oI\"]);\n_gre.push([\"logEvent\",user_event]);_gre.push([\"catalogId\",\"default_catalog\"]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/www.gstatic.com\/recommendationengine\/event.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();for(var recommend_proArrs=[],recommend_clickClass=",["escape",["macro",40],8,16],",recommend_removeCartnumber=recommend_clickClass.split(\"_\")[2],proId=\"m\"==",["escape",["macro",5],8,16],"?document.getElementsByClassName(\"m_product_box X p clearfix itemline\"):\ndocument.getElementsByClassName(\"warehouse_list\")[0].getElementsByTagName(\"dd\"),i=0;i\u003CproId.length;i++){var recommend_proObj={};if(\"m\"==",["escape",["macro",5],8,16],"){if(proId[i].getAttribute(\"data-cart-item\"))var recommend_proArr=JSON.parse(proId[i].getAttribute(\"data-cart-item\"))}else proId[i].getAttribute(\"data-item-obj\")\u0026\u0026(recommend_proArr=JSON.parse(proId[i].getAttribute(\"data-item-obj\")));recommend_proObj.listingid=recommend_proArr.listingid;recommend_proObj.storageid=recommend_proArr.storageid;recommend_proObj.original_price=\nrecommend_proArr.product.price.unitBasePrice;recommend_proObj.displayed_price=recommend_proArr.product.price.unitPrice;recommend_proObj.qty=recommend_proArr.qty;recommend_proArrs.push(recommend_proObj)}var disPlayed_price=recommend_proArrs[recommend_removeCartnumber].displayed_price,disPlayed_prices=null==disPlayed_price?recommend_proArrs[recommend_removeCartnumber].original_price:disPlayed_price;user_event.user_event_detail.product_details[0].catalog_item_id=recommend_proArrs[recommend_removeCartnumber].listingid+\n\"_1_\"+recommend_proArrs[recommend_removeCartnumber].storageid;user_event.user_event_detail.product_details[0].original_price=switchToUs(recommend_proArrs[recommend_removeCartnumber].original_price);user_event.user_event_detail.product_details[0].displayed_price=switchToUs(disPlayed_prices);user_event.user_event_detail.product_details[0].quantity=recommend_proArrs[recommend_removeCartnumber].qty};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":204
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction switchToUs(a){var b=document.getElementById(\"currencyRate\").value;return a=(Math.round(a\/b*1E6\/1E4)\/100).toFixed(2)}\nif(\"d\"==",["escape",["macro",5],8,16],"){for(var recommend_checkArrs=[],recommend_checkproId=\"m\"==",["escape",["macro",5],8,16],"?JSON.parse(document.getElementsByTagName(\"body\")[0].getAttribute(\"data-order-confirm-info\")).cartitems:JSON.parse(document.getElementsByTagName(\"body\")[0].getAttribute(\"confirminfo\")).cartitems,i=0;i\u003Crecommend_checkproId.length;i++){var recommend_proObj={},checkOriPrice=recommend_checkproId[i].price.unitBasePrice,checkDisplayPrice=recommend_checkproId[i].price.unitPrice,checkOriPrices=null==\ncheckOriPrice?checkDisplayPrice:checkOriPrice;checkDisplayPrice=null==checkDisplayPrice?checkOriPrice:checkDisplayPrice;recommend_proObj.catalog_item_id=recommend_checkproId[i].listingid+\"_1_\"+recommend_checkproId[i].storageid;recommend_proObj.original_price=checkOriPrices;recommend_proObj.displayed_price=checkDisplayPrice;recommend_proObj.quantity=recommend_checkproId[i].qty;recommend_checkArrs.push(recommend_proObj)}var user_event={user_attributes:{visitor_id:",["escape",["macro",22],8,16],",user_id:",["escape",["macro",23],8,16],",\nuser_agent:",["escape",["macro",27],8,16],",ip_address:",["escape",["macro",26],8,16],"},user_event_detail:{domain:\"tomtop.com\",event_type:\"CHECKOUT\",recommendation_token:null,product_details:recommend_checkArrs,transaction:{currency_code:\"USD\",shipping:switchToUs(Number(document.getElementById(\"shipCost\").innerText)),revenue:switchToUs(Number(document.getElementById(\"grandTotal\").innerText)),product_cost:switchToUs(Number(document.getElementById(\"grandTotal\").innerText)-Number(document.getElementById(\"shipCost\").innerText))}}},\n_gre=_gre||[];_gre.push([\"apiKey\",\"AIzaSyAoGi0KGMCBJKZByTku7LTgG15I8g7v_oI\"]);_gre.push([\"logEvent\",user_event]);_gre.push([\"catalogId\",\"default_catalog\"]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/www.gstatic.com\/recommendationengine\/event.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();user_event.user_event_detail.transaction.shipping=switchToUs(Number(document.getElementById(\"shipCost\").innerText));\nuser_event.user_event_detail.transaction.revenue=switchToUs(Number(document.getElementById(\"grandTotal\").innerText));user_event.user_event_detail.transaction.product_cost=switchToUs(Number(document.getElementById(\"grandTotal\").innerText)-Number(document.getElementById(\"shipCost\").innerText))};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":205
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"d\"==",["escape",["macro",5],8,16],"){for(var recommend_checkArrs=[],i=0;i\u003Cdetails.length;i++){var recommend_proObj={};recommend_proObj.catalog_item_id=details[i].listingid+\"_1_\"+details[i].storageName;recommend_proObj.original_price=details[i].fprice;recommend_proObj.displayed_price=details[i].wgfprice;recommend_proObj.quantity=details[i].iqty;recommend_checkArrs.push(recommend_proObj)}var user_event={user_attributes:{visitor_id:",["escape",["macro",22],8,16],",user_id:",["escape",["macro",23],8,16],",user_agent:",["escape",["macro",27],8,16],",\nip_address:",["escape",["macro",26],8,16],"},user_event_detail:{domain:\"tomtop.com\",event_type:\"PURCHASE\",recommendation_token:null,product_details:recommend_checkArrs,transaction:{currency_code:\"USD\",shipping:Number(order.fshippingprice),revenue:Number(order.fgrandtotal),product_cost:Number(order.fordersubtotal)}}},_gre=_gre||[];_gre.push([\"apiKey\",\"AIzaSyAoGi0KGMCBJKZByTku7LTgG15I8g7v_oI\"]);_gre.push([\"logEvent\",user_event]);_gre.push([\"catalogId\",\"default_catalog\"]);(function(){var a=document.createElement(\"script\");\na.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/www.gstatic.com\/recommendationengine\/event.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})()};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":208
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"d\"==",["escape",["macro",5],8,16],"){var user_event={user_attributes:{visitor_id:",["escape",["macro",22],8,16],",user_id:",["escape",["macro",23],8,16],",user_agent:",["escape",["macro",27],8,16],",ip_address:",["escape",["macro",26],8,16],"},user_event_detail:{domain:\"tomtop.com\",event_type:\"ADD_TO_FAVORITES\",recommendation_token:null,product_details:[{catalog_item_id:",["escape",["macro",21],8,16],",original_price:",["escape",["macro",24],8,16],",displayed_price:",["escape",["macro",25],8,16],"}]}},_gre=_gre||[];_gre.push([\"apiKey\",\"AIzaSyAoGi0KGMCBJKZByTku7LTgG15I8g7v_oI\"]);\n_gre.push([\"logEvent\",user_event]);_gre.push([\"catalogId\",\"default_catalog\"]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/www.gstatic.com\/recommendationengine\/event.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();user_event.user_event_detail.event_type=\"ADD_TO_FAVORITES\";user_event.user_event_detail.product_details[0].quantity=1};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":214
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction switchToUs(a){var b=document.getElementById(\"currencyRate\").value;return a=(Math.round(a\/b*1E6\/1E4)\/100).toFixed(2)}\nif(\"d\"==",["escape",["macro",5],8,16],"){var user_event={user_attributes:{visitor_id:",["escape",["macro",22],8,16],",user_id:",["escape",["macro",23],8,16],",user_agent:",["escape",["macro",27],8,16],",ip_address:",["escape",["macro",26],8,16],"},user_event_detail:{domain:\"tomtop.com\",event_type:\"SAVE_FOR_LATER\",recommendation_token:null,product_details:[{catalog_item_id:",["escape",["macro",21],8,16],",original_price:",["escape",["macro",24],8,16],",displayed_price:",["escape",["macro",25],8,16],"}]}},_gre=_gre||[];_gre.push([\"apiKey\",\"AIzaSyAoGi0KGMCBJKZByTku7LTgG15I8g7v_oI\"]);_gre.push([\"logEvent\",\nuser_event]);_gre.push([\"catalogId\",\"default_catalog\"]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/www.gstatic.com\/recommendationengine\/event.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();for(var recommend_proArrs=[],recommend_clickClass=",["escape",["macro",40],8,16],",recommend_removeCartnumber=recommend_clickClass.split(\"_\")[2],proId=\"m\"==",["escape",["macro",5],8,16],"?document.getElementsByClassName(\"m_product_box X p clearfix itemline\"):\ndocument.getElementsByClassName(\"warehouse_list\")[0].getElementsByTagName(\"dd\"),i=0;i\u003CproId.length;i++){var recommend_proObj={};if(\"m\"==",["escape",["macro",5],8,16],"){if(proId[i].getAttribute(\"data-cart-item\"))var recommend_proArr=JSON.parse(proId[i].getAttribute(\"data-cart-item\"))}else proId[i].getAttribute(\"data-item-obj\")\u0026\u0026(recommend_proArr=JSON.parse(proId[i].getAttribute(\"data-item-obj\")));recommend_proObj.listingid=recommend_proArr.listingid;recommend_proObj.storageid=recommend_proArr.storageid;recommend_proObj.original_price=\nrecommend_proArr.product.price.unitBasePrice;recommend_proObj.displayed_price=recommend_proArr.product.price.unitPrice;recommend_proArrs.push(recommend_proObj)}user_event.user_event_detail.event_type=\"SAVE_FOR_LATER\";user_event.user_event_detail.product_details[0].catalog_item_id=recommend_proArrs[recommend_removeCartnumber].listingid+\"_1_\"+recommend_proArrs[recommend_removeCartnumber].storageid;user_event.user_event_detail.product_details[0].original_price=switchToUs(recommend_proArrs[recommend_removeCartnumber].original_price);\nuser_event.user_event_detail.product_details[0].displayed_price=switchToUs(recommend_proArrs[recommend_removeCartnumber].displayed_price)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":215
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction getUserIP(c){function e(a){f[a]||c(a);f[a]=!0}var h=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,b=new h({iceServers:[]}),g=function(){},f={},d=\/([0-9]{1,3}(\\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})\/g;b.createDataChannel(\"\");b.createOffer().then(function(a){a.sdp.split(\"\\n\").forEach(function(a){0\u003Ea.indexOf(\"candidate\")||a.match(d).forEach(e)});b.setLocalDescription(a,g,g)}).catch(function(a){});b.onicecandidate=function(a){a\u0026\u0026a.candidate\u0026\u0026\na.candidate.candidate\u0026\u0026a.candidate.candidate.match(d)\u0026\u0026a.candidate.candidate.match(d).forEach(e)}}getCookie(\"USERIP\")||getUserIP(function(c){setCookie(\"USERIP\",c)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":216
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction switchToUs(a){var b=document.getElementById(\"currencyRate\").value;return a=(Math.round(a\/b*1E6\/1E4)\/100).toFixed(2)}\nif(\"d\"==",["escape",["macro",5],8,16],"){var user_event={user_attributes:{visitor_id:",["escape",["macro",22],8,16],",user_id:",["escape",["macro",23],8,16],",user_agent:",["escape",["macro",27],8,16],",ip_address:",["escape",["macro",26],8,16],"},user_event_detail:{domain:\"tomtop.com\",event_type:\"REMOVE_SAVE_FOR_LATER\",recommendation_token:null,product_details:[{catalog_item_id:",["escape",["macro",21],8,16],",original_price:",["escape",["macro",24],8,16],",displayed_price:",["escape",["macro",25],8,16],"}]}},_gre=_gre||[];_gre.push([\"apiKey\",\"AIzaSyAoGi0KGMCBJKZByTku7LTgG15I8g7v_oI\"]);\n_gre.push([\"logEvent\",user_event]);_gre.push([\"catalogId\",\"default_catalog\"]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/www.gstatic.com\/recommendationengine\/event.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();for(var recommend_proArrs=[],recommend_clickClass=",["escape",["macro",40],8,16],",recommend_removeCartnumber=recommend_clickClass.split(\"_\")[2],proId=\"m\"==",["escape",["macro",5],8,16],"?document.getElementsByClassName(\"m_product_box X p clearfix itemline\"):\ndocument.getElementsByClassName(\"warehouse_later_list\")[0].getElementsByTagName(\"dd\"),i=0;i\u003CproId.length;i++){var recommend_proObj={};if(\"m\"==",["escape",["macro",5],8,16],"){if(proId[i].getAttribute(\"data-cart-item\"))var recommend_proArr=JSON.parse(proId[i].getAttribute(\"data-cart-item\"))}else proId[i].getAttribute(\"data-item-obj\")\u0026\u0026(recommend_proArr=JSON.parse(proId[i].getAttribute(\"data-item-obj\")));recommend_proObj.listingid=recommend_proArr.listingid;recommend_proObj.storageid=recommend_proArr.storageid;\nrecommend_proObj.original_price=recommend_proArr.product.price.unitBasePrice;recommend_proObj.displayed_price=recommend_proArr.product.price.unitPrice;recommend_proArrs.push(recommend_proObj)}user_event.user_event_detail.event_type=\"REMOVE_SAVE_FOR_LATER\";user_event.user_event_detail.product_details[0].catalog_item_id=recommend_proArrs[recommend_removeCartnumber].listingid+\"_1_\"+recommend_proArrs[recommend_removeCartnumber].storageid;user_event.user_event_detail.product_details[0].original_price=\nswitchToUs(recommend_proArrs[recommend_removeCartnumber].original_price);user_event.user_event_detail.product_details[0].displayed_price=switchToUs(recommend_proArrs[recommend_removeCartnumber].displayed_price)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":217
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_3anBXdrpb0sYqEPcIuh1\u0026amp;ncm=1\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":218
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_3anBXdrpb0sYqEPcIuh1_home\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":219
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cIframe=document.createElement(\"iframe\"),cate_id=",["escape",["macro",13],8,16],";cIframe.src=\"https:\/\/asia.creativecdn.com\/tags?id\\x3dpr_3anBXdrpb0sYqEPcIuh1_category2_\"+cate_id;cIframe.style.width=\"1\";cIframe.style.height=\"1\";cIframe.style.scrolling=\"1\";cIframe.style.frameBorder=\"0\";cIframe.style.display=\"none\";document.body.appendChild(cIframe);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":220
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar pIframe=document.createElement(\"iframe\"),pr_id=",["escape",["macro",28],8,16],";pIframe.src=\"https:\/\/asia.creativecdn.com\/tags?id\\x3dpr_3anBXdrpb0sYqEPcIuh1_offer_\"+pr_id;pIframe.style.width=\"1\";pIframe.style.height=\"1\";pIframe.style.scrolling=\"1\";pIframe.style.frameBorder=\"0\";pIframe.style.display=\"none\";document.body.appendChild(pIframe);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":221
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar pIframe=document.createElement(\"iframe\"),pr_listId=[];\nif(\"d\"==",["escape",["macro",5],8,16],")for(var proId=document.getElementsByClassName(\"categoryProductList\")[0].getElementsByClassName(\"productClass\"),i=0;i\u003CproId.length;i++)pr_listId.push(proId[i].getElementsByClassName(\"heartClick\")[0].getAttribute(\"data-sku\"));else for(proId=document.getElementsByClassName(\"page-infinite-wrapper\")[0].getElementsByClassName(\"product_img\"),i=0;i\u003CproId.length;i++)pr_listId.push(proId[i].getElementsByTagName(\"a\")[0].getAttribute(\"href\").replace(\"\/p-\",\"\").replace(\".html\",\"\").toUpperCase());\npr_listId=pr_listId.join();pIframe.src=\"https:\/\/asia.creativecdn.com\/tags?id\\x3dpr_3anBXdrpb0sYqEPcIuh1_listing_\"+pr_listId;pIframe.style.width=\"1\";pIframe.style.height=\"1\";pIframe.style.scrolling=\"1\";pIframe.style.frameBorder=\"0\";pIframe.style.display=\"none\";document.body.appendChild(pIframe);\u003C\/script\u003E\n\n\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":222
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_3anBXdrpb0sYqEPcIuh1_startorder\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":223
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efor(var pIframe=document.createElement(\"iframe\"),value=",["escape",["macro",11],8,16],",oderID=",["escape",["macro",10],8,16],",pr_listId=[],i=0;i\u003Cdetails.length;i++)pr_listId.push(details[i].csku);pr_listId=pr_listId.join();pIframe.src=\"https:\/\/asia.creativecdn.com\/tags?id\\x3dpr_3anBXdrpb0sYqEPcIuh1_orderstatus2_\"+value+\"_\"+oderID+\"_\"+pr_listId+\"\\x26amp;cd\\x3ddefault\";pIframe.style.width=\"1\";pIframe.style.height=\"1\";pIframe.style.scrolling=\"1\";pIframe.style.frameBorder=\"0\";pIframe.style.display=\"none\";document.body.appendChild(pIframe);\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":224
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efor(var pIframe=document.createElement(\"iframe\"),pr_listId=[],proId=\"m\"==",["escape",["macro",5],8,16],"?document.getElementsByClassName(\"product_x\")[0].getElementsByClassName(\"m_product_box X clearfix itemline\"):document.getElementsByClassName(\"myshop_wares\")[0].getElementsByTagName(\"dd\"),i=0;i\u003CproId.length;i++)\"m\"==",["escape",["macro",5],8,16],"?proId[i].getAttribute(\"data-cart-item\")\u0026\u0026pr_listId.push(JSON.parse(proId[i].getAttribute(\"data-cart-item\")).product.sku):proId[i].getAttribute(\"data-item-obj\")\u0026\u0026pr_listId.push(JSON.parse(proId[i].getAttribute(\"data-item-obj\")).product.sku);\npr_listId=pr_listId.join();console.log(\"https:\/\/asia.creativecdn.com\/tags?id\\x3dpr_3anBXdrpb0sYqEPcIuh1_basketstatus_\"+pr_listId);pIframe.src=\"https:\/\/asia.creativecdn.com\/tags?id\\x3dpr_3anBXdrpb0sYqEPcIuh1_basketstatus_\"+pr_listId;pIframe.style.width=\"1\";pIframe.style.height=\"1\";pIframe.style.scrolling=\"1\";pIframe.style.frameBorder=\"0\";pIframe.style.display=\"none\";document.body.appendChild(pIframe);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":225
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"d\"==",["escape",["macro",5],8,16],"){var user_event={userInfo:{visitorId:",["escape",["macro",22],8,16],",userId:",["escape",["macro",23],8,16],",userAgent:",["escape",["macro",27],8,16],",ipAddress:",["escape",["macro",26],8,16],"},eventDetail:{recommendationToken:\"null\"},productEventDetail:{eventType:\"SEARCH\",searchQuery:\"Rainbow Unicorn\"}},_gre=_gre||[];_gre.push([\"apiKey\",\"AIzaSyAoGi0KGMCBJKZByTku7LTgG15I8g7v_oI\"]);_gre.push([\"logEvent\",user_event]);_gre.push([\"catalogId\",\"default_catalog\"]);(function(){var a=document.createElement(\"script\");\na.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/www.gstatic.com\/recommendationengine\/v1alpha_event.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();user_event.user_event_detail.event_type=\"SEARCH\";user_event.productEventDetail.searchQuery=document.getElementsByClassName(\"search_wrap\")[0].getElementsByTagName(\"input\")[0].value||\"oooooo\"};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":227
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.mkq||(a=b.mkq=function(){a.invokeFunc?a.invokeFunc.apply(a,arguments):a.qu.push(arguments)},b._mkq||(b._mkq=a),a.push=a,a.qu=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/pixeltrack.clientgear.com\/mkq.min.js\");mkq(\"init\",\"81255622518847\");mkq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":232
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Emkq(\"track\",\"ViewContent\",{value:product.saleprice,currency:product.currency,content_name:\"Content Name\",content_type:product.title,content_ids:[product.sku]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":233
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction getCookie(a){return 0\u003Cdocument.cookie.length\u0026\u0026(c_start=document.cookie.indexOf(a+\"\\x3d\"),-1!=c_start)?(c_start=c_start+a.length+1,c_end=document.cookie.indexOf(\";\",c_start),-1==c_end\u0026\u0026(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):\"\"}var currency=getCookie(\"TT_CURR\"),pr_listId=[];\nif(\"d\"==",["escape",["macro",5],8,16],")for(var proId=document.getElementsByClassName(\"categoryProductList\")[0].getElementsByClassName(\"productClass\"),i=0;i\u003CproId.length;i++)pr_listId.push(proId[i].getElementsByClassName(\"heartClick\")[0].getAttribute(\"data-sku\"));else for(proId=document.getElementsByClassName(\"page-infinite-wrapper\")[0].getElementsByClassName(\"product_img\"),i=0;i\u003CproId.length;i++)pr_listId.push(proId[i].getElementsByTagName(\"a\")[0].getAttribute(\"href\").replace(\"\/p-\",\"\").replace(\".html\",\"\").toUpperCase());\nvar searchString=document.getElementsByClassName(\"search_wrap\")[0].getElementsByTagName(\"input\")[0].value||\"oooooo\";mkq(\"track\",\"Search\",{value:.1,currency:currency,content_category:",["escape",["macro",21],8,16],",content_ids:pr_listId,search_string:searchString});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":234
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Emkq(\"track\",\"AddToCart\",{value:product.saleprice,currency:product.currency,content_name:product.title,content_type:\"product\",content_ids:[product.sku]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":235
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar GA_caregoryTitle=\"\",Bread_crumbsLi=document.getElementsByClassName(\"Bread_crumbs\")[0].getElementsByTagName(\"li\");function trim(a){return a.replace(\/(^\\s*)|(\\s*$)\/g,\"\")}for(var i=0;i\u003CBread_crumbsLi.length;i++)trim(Bread_crumbsLi[i].innerText)\u0026\u0026(GA_caregoryTitle+=Bread_crumbsLi[i].innerText+\"\\x3e\");mkq(\"track\",\"AddToWishlist\",{value:product.saleprice,currency:product.currency,content_name:product.title,content_category:GA_caregoryTitle,content_ids:[product.sku]});\u003C\/script\u003E\n ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":236
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction getCookie(a){return 0\u003Cdocument.cookie.length\u0026\u0026(c_start=document.cookie.indexOf(a+\"\\x3d\"),-1!=c_start)?(c_start=c_start+a.length+1,c_end=document.cookie.indexOf(\";\",c_start),-1==c_end\u0026\u0026(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):\"\"}\nif(\"d\"==",["escape",["macro",5],8,16],")for(var recommend_checkArrs=[],recommend_checkproId=\"m\"==",["escape",["macro",5],8,16],"?JSON.parse(document.getElementsByTagName(\"body\")[0].getAttribute(\"data-order-confirm-info\")).cartitems:JSON.parse(document.getElementsByTagName(\"body\")[0].getAttribute(\"confirminfo\")).cartitems,i=0;i\u003Crecommend_checkproId.length;i++){var recommend_proObj={},checkOriPrice=recommend_checkproId[i].price.unitBasePrice,checkDisplayPrice=recommend_checkproId[i].price.unitPrice,checkOriPrices=null==\ncheckOriPrice?checkDisplayPrice:checkOriPrice;checkDisplayPrice=null==checkDisplayPrice?checkOriPrice:checkDisplayPrice;var pcSku=recommend_checkproId[i].product.sku;mkq(\"track\",\"InitiateCheckout\",{value:checkDisplayPrice,currency:getCookie(\"TT_CURR\"),content_name:\"Checkout\",content_category:\"snippets\",content_ids:[pcSku],num_ids:recommend_checkproId[i].qty})};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":237
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction getCookie(a){return 0\u003Cdocument.cookie.length\u0026\u0026(c_start=document.cookie.indexOf(a+\"\\x3d\"),-1!=c_start)?(c_start=c_start+a.length+1,c_end=document.cookie.indexOf(\";\",c_start),-1==c_end\u0026\u0026(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):\"\"}\nif(\"d\"==",["escape",["macro",5],8,16],")for(var recommend_checkArrs=[],i=0;i\u003Cdetails.length;i++){var recommend_proObj={};recommend_proObj.catalog_item_id=details[i].listingid+\"_1_\"+details[i].storageName;recommend_proObj.original_price=details[i].fprice;recommend_proObj.displayed_price=details[i].wgfprice;recommend_proObj.quantity=details[i].iqty;var pr_sku=details[i].dtitle,ctitle=details[i].csku;recommend_checkArrs.push(recommend_proObj);mkq(\"track\",\"Purchase\",{value:details[i].wgfprice,currency:getCookie(\"TT_CURR\"),\ncontent_name:pr_sku,content_type:\"product\",content_ids:[pr_sku],num_items:recommend_proObj.quantity})};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":238
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"420202644828064\");fbq(\"set\",\"agent\",\"tmgoogletagmanager\",\"420202644828064\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=420202644828064\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":240
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d,h){a.ITCLKOBJ=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/analytics.webgains.io\/clk.min.js\",\"ITCLKQ\");ITCLKQ(\"set\",\"internal.cookie\",!0);ITCLKQ(\"click\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":241
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript language=\"javascript\" type=\"text\/gtmscript\"\u003Ewindow.onload=function(){var c=getCookie(\"GA_COUNTRY\")?getCookie(\"GA_COUNTRY\"):\"US\",l=order.cordernumber,m=order.wgfgrandtotal,a=a,n=\"\",h=\"\",p=order.wgcurrency,q=\"\",k=\"ZZZZ\",g=g,r=\"\";\"UK\"==c?(g=\"11931\",a=\"21157\",k=\"Uk_UK\"):\"FR\"==c?(g=\"11927\",a=\"21155\",k=\"fr_FR\"):\"DE\"==c?(g=\"11939\",a=\"21159\",k=\"de_DE\"):\"ES\"==c?(g=\"11955\",a=\"21161\",k=\"Es_ES\"):\"US\"==c\u0026\u0026(g=\"11281\",a=\"19749\",k=\"en_US\");for(var f in details)if(1\u003Cdetails[f].iqty){var d=\/.*(Cellphone \u0026 Accessories|Sports \u0026 Outdoor|Toys \u0026 Hobbies).*\/,e=\/.*(Apparel \u0026 Jewelry).*\/,\nb=details[f].categoryname;\"DE\"==c?(\"0\"==order.isNewUser\u0026\u0026d.test(b)?a=\"21159\":\"1\"==order.isNewUser\u0026\u0026d.test(b)\u0026\u0026(a=\"1036535\"),\"0\"==order.isNewUser\u0026\u0026e.test(b)?a=\"1036545\":\"1\"==order.isNewUser\u0026\u0026e.test(b)\u0026\u0026(a=\"1036545\"),\"0\"!=order.isNewUser||e.test(b)||d.test(b)?\"1\"!=order.isNewUser||e.test(b)||d.test(b)||(a=\"1036575\"):a=\"1036565\"):\"ES\"==c?(\"0\"==order.isNewUser\u0026\u0026d.test(b)?a=\"21161\":\"1\"==order.isNewUser\u0026\u0026d.test(b)\u0026\u0026(a=\"1036615\"),\"0\"==order.isNewUser\u0026\u0026e.test(b)?a=\"1036625\":\"1\"==order.isNewUser\u0026\u0026e.test(b)\u0026\u0026\n(a=\"1036635\"),\"0\"!=order.isNewUser||e.test(b)||d.test(b)?\"1\"!=order.isNewUser||e.test(b)||d.test(b)||(a=\"1036655\"):a=\"1036645\"):\"FR\"==c?(\"0\"==order.isNewUser\u0026\u0026d.test(b)?a=\"21155\":\"1\"==order.isNewUser\u0026\u0026d.test(b)\u0026\u0026(a=\"1036295\"),\"0\"==order.isNewUser\u0026\u0026e.test(b)?a=\"1036305\":\"1\"==order.isNewUser\u0026\u0026e.test(b)\u0026\u0026(a=\"1036315\"),\"0\"!=order.isNewUser||e.test(b)||d.test(b)?\"1\"!=order.isNewUser||e.test(b)||d.test(b)||(a=\"1036335\"):a=\"1036325\"):\"US\"==c\u0026\u0026(\"0\"==order.isNewUser\u0026\u0026d.test(b)?a=\"19749\":\"1\"==order.isNewUser\u0026\u0026\nd.test(b)\u0026\u0026(a=\"1034625\"),\"0\"==order.isNewUser\u0026\u0026e.test(b)?a=\"1034615\":\"1\"==order.isNewUser\u0026\u0026e.test(b)\u0026\u0026(a=\"1034605\"),\"0\"!=order.isNewUser||e.test(b)||d.test(b)?\"1\"!=order.isNewUser||e.test(b)||d.test(b)||(a=\"1034645\"):a=\"1034655\");h+=a+\"::\"+details[f].wgfprice*details[f].iqty+\"::\"+details[f].ctitle+\"::\"+details[f].csku+\"::|\"}else h+=a+\"::\"+details[f].wgfprice+\"::\"+details[f].ctitle+\"::\"+details[f].csku+\"::|\";h=h.substring(0,h.length-1);wgProtocol=\"https:\"==location.protocol.toLowerCase()?\"https\":\"http\";\nwgUri=wgProtocol+\":\/\/track.webgains.com\/transaction.html?wgver\\x3d1.2\\x26wgprotocol\\x3d\"+wgProtocol+\"\\x26wgsubdomain\\x3dtrack\\x26wgslang\\x3djavascript-client\\x26wglang\\x3d\"+k+\"\\x26wgprogramid\\x3d\"+g+\"\\x26wgeventid\\x3d\"+a+\"\\x26wgvalue\\x3d\"+m+\"\\x26wgchecksum\\x3d\\x26wgorderreference\\x3d\"+l+\"\\x26wgcomment\\x3d\"+encodeURI(q)+\"\\x26wglocation\\x3d\"+encodeURI(document.referrer)+\"\\x26wgitems\\x3d\"+encodeURI(h)+\"\\x26wgcustomerid\\x3d\"+encodeURI(r)+\"\\x26wgvouchercode\\x3d\"+encodeURI(n)+\"\\x26wgCurrency\\x3d\"+encodeURI(p);\nc=document.createElement(\"script\");c.setAttribute(\"src\",wgUri);document.getElementsByTagName(\"body\")[0].appendChild(c);(function(a,b,d,e,c,f,g,h){a.ITCVROBJ=c;a[c]=a[c]||function(){(a[c].q=a[c].q||[]).push(arguments)};a[c].l=1*new Date;f=b.createElement(d);g=b.getElementsByTagName(d)[0];f.async=1;f.src=e;g.parentNode.insertBefore(f,g)})(window,document,\"script\",\"https:\/\/analytics.webgains.io\/cvr.min.js\",\"ITCVRQ\");ITCVRQ(\"set\",\"trk.programId\",g);ITCVRQ(\"set\",\"cvr\",{value:m,currency:p,language:k,eventId:a,\norderReference:l,comment:q,multiple:\"\",checksum:\"\",items:h,customerId:r,voucherId:n});ITCVRQ(\"conversion\")};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":242
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"fireRemarketingTag"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"fireRemarketingTag"
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":".*tomtop.com\/payment-result\/succeed\/(.*)|^(https:\\\/\\\/m.tomtop.com\\\/paypal\\\/)",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",37],
      "arg1":"a img"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",37],
      "arg1":"a"
    },{
      "function":"_css",
      "arg0":["macro",37],
      "arg1":"a.TT_Activity"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"\/search\/"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"productClick"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"productview"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"productview"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"promotionClick"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"checkout"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"removeFromCart"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"GAclick+"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"GACLICK+index+google_alsoLike-"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"GACLICK+product+products-customers-also-viewed"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"ADDTOCART+group+"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"GACLICK+product+products-customers-also-bought-"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"GACLICK+index+google_alsoBought-"
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":".*tomtop.com(.*)(\\\/p-)(.*)(.html)+",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":"\/.*tomtop.com\/payment-result\/(?!error)(.*)|.*mcart.tomtop.com\/payment-result\/(.*)\/",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"btn btn-orange"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"buyNowBtnCart"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"buy_now"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"add_to_cart"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"addToBtnCart"
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":".*tomtop.*\/paypal\/.+\/success-view.*"
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":".*tomtop.com\/paypal\/ec-do"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":".*tomtop.*\/payment\/wiretransfer.*"
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":".*\/member\/register-done\/.*"
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":".*tomtop.*\/paypal\/ec-confirm.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":".*tomtop.*\/order\/confirm\/.*|.*tomtop.*\/order\/buynow\/.*"
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":"^(?!https:\\\/\\\/cart|https:\\\/\\\/mcart\\.tomtop\\.com).*tomtop.com[\\\/0-9a-zA-Z]{0,4}$(((?!\\-\\d)(?!email)(?!.html).)*$)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":"^(?!https:\\\/\\\/cart|https:\\\/\\\/mcart\\.tomtop\\.com).*tomtop.com[\\\/0-9a-zA-Z]{2,}(((?!email)(?!.html).)*(\\d\\\/(\\?.*)?)$)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":".*tomtop.com(.*)(\\\/p-)(.*)(.html)+"
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":"^(https:\\\/\\\/cart.tomtop.com|http:\\\/\\\/cart.tomtop.com|http:\\\/\\\/mcart\\.tomtop.com|https:\\\/\\\/mcart\\.tomtop.com)((\\\/)?((?!\\\/)(?!\\w)(.*)(?!.html).)*$)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":".*tomtop.com\/loyalty\/subscribe\\?email=(.*)",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",36],
      "arg1":"http:\/\/www.tomtop.com\/activity\/20160707_p1477b_eu.html"
    },{
      "function":"_sw",
      "arg0":["macro",36],
      "arg1":"http:\/\/www.tomtop.com\/activity\/20160804-CUBOT-V1-CUBOT-Smartphones.html"
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":".*(myuat|my).tomtop.com.*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"member\/index"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"member\/login"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"loyalty\/subscribe"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"\/member\/"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"checkout_promo_apply"
    },{
      "function":"_ew",
      "arg0":["macro",40],
      "arg1":"bm_btn caution"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"GACLICK+"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"ADDTOCART+"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"ADDTOCART+product"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"GAPRO+"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"nw_btn_place"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"remove_span_"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"paypal-button-container"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"GABAN+"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"mCategoryId"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"search_product"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"placeYourOrder"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"icon_wishlists"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"save_later_"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"remove_forlater_"
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":"^(https:\\\/\\\/cart.tomtop.com\\\/order\\\/confirm\\\/1|http:\\\/\\\/cart.tomtop.com\\\/order\\\/confirm\\\/1|https:\\\/\\\/cart.tomtop.com\\\/order\\\/buynow\\\/1|http:\\\/\\\/cart.tomtop.com\\\/order\\\/buynow\\\/1|http:\\\/\\\/mcart\\.tomtop.com\\\/order\\\/confirm\\\/1|https:\\\/\\\/mcart\\.tomtop.com\\\/order\\\/confirm\\\/1|https:\\\/\\\/mcart\\.tomtop.com\\\/order\\\/buynow\\\/1|http:\\\/\\\/mcart\\.tomtop.com\\\/order\\\/buynow\\\/1|)((\\\/)?((?!\\\/)(?!\\w)(.*)(?!.html).)*$)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"favoritesC productHeart heartClick"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"lineBlock heartClick productHeart"
    }],
  "rules":[
    [["if",0],["add",0,55,59,62,80,86,89,91,100,105,106,112,114,138,140,149,156,157,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54]],
    [["if",1,2],["add",1],["block",62]],
    [["if",0,3],["add",2,58]],
    [["if",4,5],["add",3]],
    [["if",5,6],["add",3]],
    [["if",5,7],["add",3]],
    [["if",0,8],["add",4,94,144,148,151],["block",83,93,140]],
    [["if",9],["add",5]],
    [["if",10],["add",6]],
    [["if",11,12],["add",7]],
    [["if",13],["add",8]],
    [["if",14],["add",9]],
    [["if",15],["add",10]],
    [["if",5,16],["add",11,125]],
    [["if",5,17],["add",12]],
    [["if",5,18],["add",12]],
    [["if",5,19],["add",13]],
    [["if",5,20],["add",14]],
    [["if",5,21],["add",14]],
    [["if",0,22],["add",56,83,93,97,109,129,143,150],["block",140]],
    [["if",5,24],["add",57]],
    [["if",5,25],["add",57,152],["block",62]],
    [["if",5,26],["add",57,152],["block",62]],
    [["if",5,27],["add",57]],
    [["if",5,28],["add",57,128,152]],
    [["if",0,23],["add",60,63,64,65,67,73,78,79,84,85,87,88,90,99,101,102,111,113,115,124,127,135,146,155,158],["block",56,62,89,112]],
    [["if",0,29],["add",60,63,64,67],["block",62]],
    [["if",0,30],["add",60,63,64,67]],
    [["if",31],["add",61],["block",62]],
    [["if",0,34],["add",64]],
    [["if",0,35],["add",66]],
    [["if",0,36],["add",68,74,83,95,107,130,141],["block",140]],
    [["if",0,37],["add",69,76,92,96,108,131,142],["block",136,140]],
    [["if",0,38],["add",70,75,118]],
    [["if",0,39],["add",71,77,98,110,147],["block",140]],
    [["if",0,40],["add",72]],
    [["if",0,41],["add",81]],
    [["if",0,42],["add",82]],
    [["if",0,43],["add",83]],
    [["if",5],["add",103]],
    [["if",5,48],["add",104]],
    [["if",5,49],["add",104]],
    [["if",5,50],["add",116]],
    [["if",5,51],["add",116,117]],
    [["if",5,53],["add",119]],
    [["if",5,52],["add",120],["block",116,117]],
    [["if",5,54],["add",121]],
    [["if",5,55],["add",122,133]],
    [["if",5,56],["add",123,123]],
    [["if",5,57],["add",125]],
    [["if",5,58],["add",126]],
    [["if",5,59],["add",132]],
    [["if",5,60],["add",134,154]],
    [["if",5,61],["add",136]],
    [["if",5,62],["add",137]],
    [["if",5,63],["add",139]],
    [["if",0,64],["add",145]],
    [["if",5,65],["add",153]],
    [["if",5,66],["add",153]],
    [["if",0,32],["block",62]],
    [["if",0,33],["block",62,83]],
    [["if",0,44],["block",83]],
    [["if",0,45],["block",83]],
    [["if",0,46],["block",83]],
    [["if",0,47],["block",92]]]
},
"runtime":[
[],[]
]


};
var da,ea=this,fa=/^[\w+/_-]+[=]{0,2}$/,ia=null,la=function(a,b){function c(){}c.prototype=b.prototype;a.Xg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Gg=function(a,c,g){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var ma=function(){},na=function(a){return"function"==typeof a},f=function(a){return"string"==typeof a},oa=function(a){return"number"==typeof a&&!isNaN(a)},qa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},n=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ra=function(a,b){if(a&&qa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},sa=function(a,b){if(!oa(a)||
!oa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ta=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ua=function(a){return Math.round(Number(a))||0},va=function(a){return"false"==String(a).toLowerCase()?!1:!!a},wa=function(a){var b=[];if(qa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},xa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},ya=function(){return(new Date).getTime()},za=function(){this.prefix="gtm.";this.values=
{}};za.prototype.set=function(a,b){this.values[this.prefix+a]=b};za.prototype.get=function(a){return this.values[this.prefix+a]};za.prototype.contains=function(a){return void 0!==this.get(a)};
var Ba=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ca=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Da=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Fa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ga=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ha=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ia=function(a){if(null==a)return String(a);var b=Ha.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ja=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ka=function(a){if(!a||"object"!=Ia(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ja(a,"constructor")&&!Ja(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ja(a,b)},t=function(a,b){var c=b||("array"==Ia(a)?[]:{}),d;for(d in a)if(Ja(a,d)){var e=a[d];"array"==Ia(e)?("array"!=Ia(c[d])&&(c[d]=[]),c[d]=t(e,c[d])):Ka(e)?(Ka(c[d])||(c[d]={}),c[d]=t(e,c[d])):c[d]=e}return c};var x=window,y=document,La=navigator,Ma=y.currentScript&&y.currentScript.src,Na=function(a,b){var c=x[a];x[a]=void 0===c?b:c;return x[a]},Oa=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Pa=function(a,b,c){var d=y.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Oa(d,b);c&&(d.onerror=c);var e;if(null===ia)b:{var g=ea.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&fa.test(k)){ia=k;break b}}ia=""}e=ia;e&&d.setAttribute("nonce",e);var l=y.getElementsByTagName("script")[0]||y.body||y.head;l.parentNode.insertBefore(d,l);return d},Qa=function(){if(Ma){var a=Ma.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Ra=function(a,b){var c=y.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=y.body&&y.body.lastChild||
y.body||y.head;d.parentNode.insertBefore(c,d);Oa(c,b);void 0!==a&&(c.src=a);return c},Sa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},A=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ta=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},C=function(a){x.setTimeout(a,0)},Va=function(a){var b=
y.getElementById(a);if(b&&Ua(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Ua(document.all[a][c],"id")==a)return document.all[a][c];return b},Ua=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Wa=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Xa=function(a){var b=y.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=
[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ya=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;g=g.parentElement}return null};var Za=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var $a=/:[0-9]+$/,cb=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},D=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=db(a.protocol)||db(x.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:x.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||x.location.hostname).replace($a,"").toLowerCase());var g=b,h,k=db(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=eb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace($a,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":h="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=h.split("/");0<=
n(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=cb(h,e,void 0));break;case "extension":var p=a.pathname.split(".");h=1<p.length?p[p.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},db=function(a){return a?a.replace(":","").toLowerCase():""},eb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},fb=function(a){var b=y.createElement("a");
a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace($a,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var gb=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},jb=function(a,b,c,d){var e=hb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=ib(e,function(a){return a.yb},b);if(1===e.length)return e[0].id;e=ib(e,function(a){return a.Ta},c);return e[0]?e[0].id:void 0}};
function kb(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=gb(b,e).indexOf(c)}
var nb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var p=l;p&&1200<p.length&&(p=p.substring(0,1200));l=p;m=a+"="+l}var q=void 0,r=void 0,w;for(w in h)if(h.hasOwnProperty(w)){var v=h[w];if(null!=v)switch(w){case "secure":v&&(m+="; secure");break;case "domain":q=v;break;default:"path"==w&&(r=v),"expires"==w&&v instanceof Date&&(v=
v.toUTCString()),m+="; "+w+"="+v}}if("auto"===q){for(var u=lb(),z=0;z<u.length;++z){var E="none"!=u[z]?u[z]:void 0;if(!mb(E,r)&&kb(m+(E?"; domain="+E:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!mb(q,r)&&kb(m,a,l)}return k};function ib(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function hb(a,b){for(var c=[],d=gb(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),yb:1*k[0]||1,Ta:1*k[1]||1}))}}return c}
var ob=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,pb=/(^|\.)doubleclick\.net$/i,mb=function(a,b){return pb.test(document.location.hostname)||"/"===b&&ob.test(a)},lb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var qb=[],rb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},sb=function(a){return rb[a]},tb=/[\x00\x22\x26\x27\x3c\x3e]/g;var xb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,yb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},zb=function(a){return yb[a]};
qb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(xb,zb)+"'"}};var Fb=/['()]/g,Gb=function(a){return"%"+a.charCodeAt(0).toString(16)};qb[12]=function(a){var b=
encodeURIComponent(String(a));Fb.lastIndex=0;return Fb.test(b)?b.replace(Fb,Gb):b};var Hb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Ib={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Jb=function(a){return Ib[a]};qb[16]=function(a){return a};var Lb=[],Mb=[],Nb=[],Ob=[],Pb=[],Qb={},Rb,Sb,Tb,Ub=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Vb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Qb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Qb[c](e):(void 0)(c,e,b)},Xb=function(a,b,c,d){c=c||[];d=d||ma;var e={},g;for(g in a)a.hasOwnProperty(g)&&(e[g]=Wb(a[g],b,
c,d));return e},Yb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Qb[b];return c?c.b||0:0},Wb=function(a,b,c,d){if(qa(a)){var e;switch(a[0]){case "function_id":return a[1];case "list":e=[];for(var g=1;g<a.length;g++)e.push(Wb(a[g],b,c,d));return e;case "macro":var h=a[1];if(c[h])return;var k=Lb[h];if(!k||b(k))return;c[h]=!0;try{var l=Xb(k,b,c,d);e=Vb(l,d);Tb&&(e=Tb.ff(e,l))}catch(E){d(E,h),e=!1}c[h]=!1;return e;case "map":e={};for(var m=1;m<a.length;m+=
2)e[Wb(a[m],b,c,d)]=Wb(a[m+1],b,c,d);return e;case "template":e=[];for(var p=!1,q=1;q<a.length;q++){var r=Wb(a[q],b,c,d);Sb&&(p=p||r===Sb.ob);e.push(r)}return Sb&&p?Sb.kf(e):e.join("");case "escape":e=Wb(a[1],b,c,d);if(Sb&&qa(a[1])&&"macro"===a[1][0]&&Sb.Nf(a))return Sb.Yf(e);e=String(e);for(var w=2;w<a.length;w++)qb[a[w]]&&(e=qb[a[w]](e));return e;case "tag":var v=a[1];if(!Ob[v])throw Error("Unable to resolve tag reference "+v+".");return e={wd:a[2],index:v};case "zb":var u={arg0:a[2],arg1:a[3],
ignore_case:a[5]};u["function"]=a[1];var z=Zb(u,b,c,d);a[4]&&(z=!z);return z;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Zb=function(a,b,c,d){try{return Rb(Xb(a,b,c,d))}catch(e){JSON.stringify(a)}return null};var $b=null,cc=function(a,b){function c(a){for(var b=0;b<a.length;b++)e[a[b]]=!0}var d=[],e=[];$b=ac(a,b||function(){});for(var g=0;g<Mb.length;g++){var h=Mb[g],k=bc(h);if(k){for(var l=h.add||[],m=0;m<l.length;m++)d[l[m]]=!0;c(h.block||[])}else null===k&&c(h.block||[])}for(var p=[],q=0;q<Ob.length;q++)d[q]&&!e[q]&&(p[q]=!0);return p},bc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=$b(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=$b(e[g]);if(null===
h)return null;if(h)return!1}return!0},ac=function(a,b){var c=[];return function(d){void 0===c[d]&&(c[d]=Zb(Nb[d],a,void 0,b));return c[d]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var dc,ec=function(){};(function(){function a(a,h){a=a||"";h=h||{};for(var k in b)b.hasOwnProperty(k)&&(h.Se&&(h["fix_"+k]=!0),h.xd=h.xd||h["fix_"+k]);var l={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var b=a.indexOf("--\x3e");if(0<=b)return{content:a.substr(4,b),length:b+3}},endTag:function(){var b=a.match(d);if(b)return{tagName:b[1],length:b[0].length}},atomicTag:function(){var b=q.startTag();
if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,D:b.D,content:d[1],length:d[0].length+b.length}}}},startTag:function(){var b=a.match(c);if(b){var d={};b[2].replace(e,function(a,b,c,e,h){var k=c||e||h||g.test(b)&&b||null,l=document.createElement("div");l.innerHTML=k;d[b]=l.textContent||l.innerText||k});return{tagName:b[1],D:d,Ya:!!b[3],length:b[0].length}}},chars:function(){var b=
a.indexOf("<");return{length:0<=b?b:a.length}}},r=function(){for(var b in l)if(l[b].test(a)){var c=q[b]();return c?(c.type=c.type||b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}};h.xd&&function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.Id=function(){return this[this.length-1]};d.xc=function(a){var b=this.Id();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()};d.ef=
function(a){for(var b=0,c;c=this[b];b++)if(c.tagName===a)return!0;return!1};var e=function(a){a&&"startTag"===a.type&&(a.Ya=b.test(a.tagName)||a.Ya);return a},g=r,k=function(){a="</"+d.pop().tagName+">"+a},l={startTag:function(b){var e=b.tagName;"TR"===e.toUpperCase()&&d.xc("TABLE")?(a="<TBODY>"+a,m()):h.Lg&&c.test(e)&&d.ef(e)?d.xc(e)?k():(a="</"+b.tagName+">"+a,m()):b.Ya||d.push(b)},endTag:function(a){d.Id()?h.vf&&!d.xc(a.tagName)?k():d.pop():h.vf&&(g(),m())}},m=function(){var b=a,c=e(g());a=b;if(c&&
l[c.type])l[c.type](c)};r=function(){m();return e(g())}}();return{append:function(b){a+=b},eg:r,Rg:function(a){for(var b;(b=r())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var b=a;a="";return b},Sg:function(){return a},stack:[]}}var b=function(){var a={},b=this.document.createElement("div");b.innerHTML="<P><I></P></I>";a.Yg="<P><I></P></I>"!==b.innerHTML;b.innerHTML="<P><i><P></P></i></P>";a.Ug=2===b.childNodes.length;return a}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.Zg=function(a){var b={comment:function(a){return"<--"+a.content+"--\x3e"},endTag:function(a){return"</"+a.tagName+">"},atomicTag:function(a){return b.startTag(a)+a.content+b.endTag(a)},startTag:function(a){var b="<"+a.tagName,c;for(c in a.D){var d=a.D[c];
b+=" "+c+'="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return b+(a.Ya?"/>":">")},chars:function(a){return a.text}};return b[a.type](a)};a.Kg=function(a){var b={},c;for(c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var h in b)a.Xe=a.Xe||!b[h]&&h;dc=a})();(function(){function a(){}function b(a){return void 0!==a&&null!==a}function c(a,b,c){var d,e=a&&a.length||0;for(d=0;d<e;d++)b.call(c,a[d],d)}function d(a,b,c){for(var d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d])}function e(a,
b){d(b,function(b,c){a[b]=c});return a}function g(a,c){a=a||{};d(c,function(c,d){b(a[c])||(a[c]=d)});return a}function h(a){try{return m.call(a)}catch(w){var b=[];c(a,function(a){b.push(a)});return b}}var k={Ie:a,Je:a,Ke:a,Le:a,Te:a,Ue:function(a){return a},done:a,error:function(a){throw a;},ig:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,p=function(){function a(a,c,d){var e="data-ps-"+c;if(2===arguments.length){var g=a.getAttribute(e);return b(g)?String(g):g}b(d)&&""!==d?a.setAttribute(e,
d):a.removeAttribute(e)}function g(b,c){var d=b.ownerDocument;e(this,{root:b,options:c,Za:d.defaultView||d.parentWindow,wa:d,Db:dc("",{Se:!0}),bc:[b],Fc:"",Gc:d.createElement(b.nodeName),Xa:[],ka:[]});a(this.Gc,"proxyof",0)}g.prototype.write=function(){[].push.apply(this.ka,arguments);for(var a;!this.xb&&this.ka.length;)a=this.ka.shift(),"function"===typeof a?this.af(a):this.Rc(a)};g.prototype.af=function(a){var b={type:"function",value:a.name||a.toString()};this.Cc(b);a.call(this.Za,this.wa);this.Md(b)};
g.prototype.Rc=function(a){this.Db.append(a);for(var b,c=[],d,e;(b=this.Db.eg())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(e=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.zg(c);d&&this.Bf(b);e&&this.Cf(b)};g.prototype.zg=function(a){var b=this.Ye(a);b.qd&&(b.oc=this.Fc+b.qd,this.Fc+=b.cg,this.Gc.innerHTML=b.oc,this.wg())};g.prototype.Ye=function(a){var b=this.bc.length,d=[],e=[],g=[];c(a,function(a){d.push(a.text);if(a.D){if(!/^noscript$/i.test(a.tagName)){var c=
b++;e.push(a.text.replace(/(\/?>)/," data-ps-id="+c+" $1"));"ps-script"!==a.D.id&&"ps-style"!==a.D.id&&g.push("atomicTag"===a.type?"":"<"+a.tagName+" data-ps-proxyof="+c+(a.Ya?" />":">"))}}else e.push(a.text),g.push("endTag"===a.type?a.text:"")});return{$g:a,raw:d.join(""),qd:e.join(""),cg:g.join("")}};g.prototype.wg=function(){for(var c,d=[this.Gc];b(c=d.shift());){var e=1===c.nodeType;if(!e||!a(c,"proxyof")){e&&(this.bc[a(c,"id")]=c,a(c,"id",null));var g=c.parentNode&&a(c.parentNode,"proxyof");
g&&this.bc[g].appendChild(c)}d.unshift.apply(d,h(c.childNodes))}};g.prototype.Bf=function(a){var b=this.Db.clear();b&&this.ka.unshift(b);a.src=a.D.src||a.D.Dg;a.src&&this.Xa.length?this.xb=a:this.Cc(a);var c=this;this.yg(a,function(){c.Md(a)})};g.prototype.Cf=function(a){var b=this.Db.clear();b&&this.ka.unshift(b);a.type=a.D.type||a.D.Eg||"text/css";this.Ag(a);b&&this.write()};g.prototype.Ag=function(a){var b=this.$e(a);this.Lf(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:
b.appendChild(this.wa.createTextNode(a.content)))};g.prototype.$e=function(a){var b=this.wa.createElement(a.tagName);b.setAttribute("type",a.type);d(a.D,function(a,c){b.setAttribute(a,c)});return b};g.prototype.Lf=function(a){this.Rc('<span id="ps-style"/>');var b=this.wa.getElementById("ps-style");b.parentNode.replaceChild(a,b)};g.prototype.Cc=function(a){a.Uf=this.ka;this.ka=[];this.Xa.unshift(a)};g.prototype.Md=function(a){a!==this.Xa[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Xa.shift(),this.write.apply(this,a.Uf),!this.Xa.length&&this.xb&&(this.Cc(this.xb),this.xb=null))};g.prototype.yg=function(a,b){var c=this.Ze(a),d=this.pg(c),e=this.options.Ie;a.src&&(c.src=a.src,this.mg(c,d?e:function(){b();e()}));try{this.Kf(c),a.src&&!d||b()}catch(B){this.options.error(B),b()}};g.prototype.Ze=function(a){var b=this.wa.createElement(a.tagName);d(a.D,function(a,c){b.setAttribute(a,c)});a.content&&(b.text=a.content);return b};g.prototype.Kf=function(a){this.Rc('<span id="ps-script"/>');
var b=this.wa.getElementById("ps-script");b.parentNode.replaceChild(a,b)};g.prototype.mg=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;e(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var e={message:"remote script failed "+a.src};c();d(e);b()}})};g.prototype.pg=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.ig&&a.src&&a.hasAttribute("async"))};
return g}();l.postscribe=function(){function b(){var a=m.shift(),b;a&&(b=a[a.length-1],b.Je(),a.stream=c.apply(null,a),b.Ke())}function c(c,g,k){function l(a){a=k.Ue(a);u.write(a);k.Le(a)}u=new p(c,k);u.id=d++;u.name=k.name||u.id;var m=c.ownerDocument,q={close:m.close,open:m.open,write:m.write,writeln:m.writeln};e(m,{close:a,open:a,write:function(){return l(h(arguments).join(""))},writeln:function(){return l(h(arguments).join("")+"\n")}});var r=u.Za.onerror||a;u.Za.onerror=function(a,b,c){k.error({Og:a+
" - "+b+":"+c});r.apply(u.Za,arguments)};u.write(g,function(){e(m,q);u.Za.onerror=r;k.done();u=null;b()});return u}var d=0,m=[],u=null;return e(function(c,d,e){"function"===typeof e&&(e={done:e});e=g(e,k);c=/^#/.test(c)?l.document.getElementById(c.substr(1)):c.Mg?c[0]:c;var h=[c,d,e];c.Xf={cancel:function(){h.stream?h.stream.abort():h[1]=a}};e.Te(h);m.push(h);u||b();return c.Xf},{streams:{},Qg:m,Fg:p})}();ec=l.postscribe}})();var H={},K=null,pc=Math.random();H.m="GTM-M9TSMK";H.sb="3b2";var qc="www.googletagmanager.com/gtm.js";var rc=qc,sc=null,tc=null,uc=null,vc="//www.googletagmanager.com/a?id="+H.m+"&cv=1786",wc={},xc={},yc=function(){var a=K.sequence||0;K.sequence=a+1;return a};var O=function(a,b,c,d){return(2===zc()||d||"http:"!=x.location.protocol?a:b)+c},zc=function(){var a=Qa(),b;if(1===a)a:{var c=rc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=y.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Ac=!1;var P=function(){var a=function(a){return{toString:function(){return a}}};return{Vc:a("convert_case_to"),Wc:a("convert_false_to"),Xc:a("convert_null_to"),Yc:a("convert_true_to"),Zc:a("convert_undefined_to"),qa:a("function"),ye:a("instance_name"),ze:a("live_only"),Ae:a("malware_disabled"),Cg:a("original_vendor_template_id"),Be:a("once_per_event"),md:a("once_per_load"),nd:a("setup_tags"),Ce:a("tag_id"),od:a("teardown_tags")}}();var Dc={},Ec=function(a){Dc.GTM=Dc.GTM||[];Dc.GTM[a]=!0};
var Fc=function(){return"&tc="+Ob.filter(function(a){return a}).length},Oc=function(){Gc&&(x.clearTimeout(Gc),Gc=void 0);void 0===Hc||Ic[Hc]&&!Jc||(Kc[Hc]||Lc.Pf()||0>=Mc--?(Ec(1),Kc[Hc]=!0):(Lc.gg(),Sa(Nc()),Ic[Hc]=!0,Jc=""))},Nc=function(){var a=Hc;if(void 0===a)return"";for(var b,c=[],d=Dc.GTM||[],e=0;e<d.length;e++)d[e]&&(c[Math.floor(e/6)]^=1<<e%6);for(var g=0;g<c.length;g++)c[g]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(c[g]||0);b=c.join("");return[Pc,Ic[a]?"":
"&es=1",Qc[a],b?"&u="+b:"",Fc(),Jc,"&z=0"].join("")},Rc=function(){return[vc,"&v=3&t=t","&pid="+sa(),"&rv="+H.sb].join("")},Sc="0.005000">Math.random(),Pc=Rc(),Tc=function(){Pc=Rc()},Ic={},Jc="",Hc=void 0,Qc={},Kc={},Gc=void 0,Lc=function(a,b){var c=0,d=0;return{Pf:function(){if(c<a)return!1;ya()-d>=b&&(c=0);return c>=a},gg:function(){ya()-d>=b&&(c=0);c++;d=ya()}}}(2,1E3),Mc=1E3,Uc=function(a,b){if(Sc&&!Kc[a]&&Hc!==a){Oc();Hc=a;Jc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):
"*";Qc[a]="&e="+c+"&eid="+a;Gc||(Gc=x.setTimeout(Oc,500))}},Vc=function(a,b,c){if(Sc&&!Kc[a]&&b){a!==Hc&&(Oc(),Hc=a);var d=c+String(b[P.qa]||"").replace(/_/g,"");Jc=Jc?Jc+"."+d:"&tr="+d;Gc||(Gc=x.setTimeout(Oc,500));2022<=Nc().length&&Oc()}};var Wc=new za,Xc={},Yc={},bd={set:function(a,b){t(Zc(a,b),Xc);$c()},get:function(a){return ad(a,2)},reset:function(){Wc=new za;Xc={};$c()}},ad=function(a,b){if(2!=b){var c=Wc.get(a);if(Sc){var d=cd(a);c!==d&&Ec(5)}return c}return cd(a)},cd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;
return e?g:ed(d)},ed=function(a){for(var b=Xc,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var hd=function(a,b){Yc.hasOwnProperty(a)||(Wc.set(a,b),t(Zc(a,b),Xc),$c())},Zc=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},$c=function(a){ta(Yc,function(b,c){Wc.set(b,c);t(Zc(b,void 0),Xc);t(Zc(b,c),Xc);a&&delete Yc[b]})};var id=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),jd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},kd={cl:["ecl"],customPixels:["customScripts","html"],ecl:["cl"],html:["customScripts"],
customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]};
var md=function(a){var b=ad("gtm.whitelist");b&&Ec(9);var c=b&&Ga(wa(b),jd),d=ad("gtm.blacklist");d||(d=ad("tagTypeBlacklist"))&&Ec(3);d?Ec(8):d=[];
ld()&&(d=wa(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=n(wa(d),"google")&&Ec(2);var e=d&&Ga(wa(d),kd),g={};return function(h){var k=h&&h[P.qa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=xc[k]||[],m=a(k);if(b){var p;if(p=m)a:{if(0>n(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>n(c,l[q])){Ec(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var r=!1;if(d){var w=0<=n(e,k);
if(w)r=w;else{var v;b:{for(var u=l||[],z=new za,E=0;E<e.length;E++)z.set(e[E],!0);for(var B=0;B<u.length;B++)if(z.get(u[B])){v=!0;break b}v=!1}var G=v;G&&Ec(10);r=G}}return g[k]=!m||r}},ld=function(){return id.test(x.location&&x.location.hostname)};var od=function(a){return function(b,c){if(oa(c))a(b,c);else{b instanceof nd||(b=new nd(b));var d=b;c&&d.jc.push(c);throw d;}}},nd=function(a){this.Tf=a;this.jc=[]};la(nd,Error);var pd={ff:function(a,b){b[P.Vc]&&"string"===typeof a&&(a=1==b[P.Vc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(P.Xc)&&null===a&&(a=b[P.Xc]);b.hasOwnProperty(P.Zc)&&void 0===a&&(a=b[P.Zc]);b.hasOwnProperty(P.Yc)&&!0===a&&(a=b[P.Yc]);b.hasOwnProperty(P.Wc)&&!1===a&&(a=b[P.Wc]);return a}};var qd={active:!0,isWhitelisted:function(){return!0}},rd=function(a){var b=K.zones;!b&&a&&(b=K.zones=a());return b};var sd=!1,td=0,ud=[];function vd(a){if(!sd){var b=y.createEventObject,c="complete"==y.readyState,d="interactive"==y.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){sd=!0;for(var e=0;e<ud.length;e++)C(ud[e])}ud.push=function(){for(var a=0;a<arguments.length;a++)C(arguments[a]);return 0}}}function wd(){if(!sd&&140>td){td++;try{y.documentElement.doScroll("left"),vd()}catch(a){x.setTimeout(wd,50)}}}var xd=function(a){sd?a():ud.push(a)};var yd=function(){function a(a){return!oa(a)||0>a?0:a}if(!K._li&&x.performance&&x.performance.timing){var b=x.performance.timing.navigationStart,c=oa(bd.get("gtm.start"))?bd.get("gtm.start"):0;K._li={cst:a(c-b),cbt:a(tc-b)}}};var Cd=!1,Dd=function(){return x.GoogleAnalyticsObject&&x[x.GoogleAnalyticsObject]},Ed=!1;var Fd=function(a){x.GoogleAnalyticsObject||(x.GoogleAnalyticsObject=a||"ga");var b=x.GoogleAnalyticsObject;if(!x[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);x[b]=c}yd();return x[b]},Gd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Dd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Id=function(){},Hd=function(){return x.GoogleAnalyticsObject||"ga"},Jd=!1;var Qd=function(a){};
function Pd(a,b){a.containerId=H.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function Rd(a,b,c,d,e){var g=Ob[a],h=Sd(a,b,c,d,e);if(!h)return null;var k=Wb(g[P.nd],d.da,[],ma);if(k&&k.length){var l=k[0];h=Rd(l.index,b,{I:h,O:1===l.wd?c.terminate:h,terminate:c.terminate},d,e)}return h}
function Sd(a,b,c,d,e){function g(){if(h[P.Ae])l();else{var b=Xb(h,d.da,[],od(function(a){Ec(6);Qd(a)})),c=!1;b.vtp_gtmOnSuccess=function(){if(!c){c=!0;Vc(d.id,Ob[a],"5");k()}};b.vtp_gtmOnFailure=function(){if(!c){c=!0;Vc(d.id,Ob[a],"6");l()}};b.vtp_gtmTagId=h.tag_id;Vc(d.id,h,"1");var e=
!1,g=function(a,b){if(!e){a instanceof nd||(a=new nd(a));var g=a;b&&g.jc.push(b);throw g;}Qd(a);Vc(d.id,h,"7");c||(c=!0,l())};try{Vb(b,g)}catch(M){try{e=!0,g(M)}catch(F){}}}}
var h=Ob[a],k=c.I,l=c.O,m=c.terminate;if(d.da(h))return null;var p=Wb(h[P.od],d.da,[],ma);if(p&&p.length){var q=p[0],r=Rd(q.index,b,{I:k,O:l,terminate:m},d,e);if(!r)return null;k=r;l=2===q.wd?m:r}if(h[P.md]||h[P.Be]){var w=h[P.md]?Pb:b,v=k,u=l;if(!w[a]){g=Ca(g);var z=Td(a,w,g);k=z.I;l=z.O}return function(){w[a](v,u)}}return g}function Td(a,b,c){var d=[],e=[];b[a]=Ud(d,e,c);return{I:function(){b[a]=Vd;for(var c=0;c<d.length;c++)d[c]()},O:function(){b[a]=Wd;for(var c=0;c<e.length;c++)e[c]()}}}
function Ud(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Vd(a){a()}function Wd(a,b){b()};function Xd(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ca(function(){b++;d&&b>=c&&a()})},Qe:function(){d=!0;b>=c&&a()}}}var $d=function(a){for(var b=Xd(a.callback),c=[],d=[],e=0;e<Ob.length;e++)if(a.Va[e]){var g=Ob[e];var h=b.add();try{var k=Rd(e,c,{I:h,O:h,terminate:h},a,e);k?d.push({Wd:e,b:Yb(g),uf:k}):(Yd(e,a),h())}catch(m){h()}}b.Qe();d.sort(Zd);for(var l=0;l<d.length;l++)d[l].uf();return 0<d.length};
function Zd(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.Wd,k=b.Wd;g=h>k?1:h<k?-1:0}return g}function Yd(a,b){if(!Sc)return;var c=function(a){var d=b.da(Ob[a])?"3":"4",g=Wb(Ob[a][P.nd],b.da,[],ma);g&&g.length&&c(g[0].index);Vc(b.id,Ob[a],d);var h=Wb(Ob[a][P.od],b.da,[],ma);h&&h.length&&c(h[0].index)};c(a);}
var ae=!1,be=function(a,b,c,d){if("gtm.js"==b){if(ae)return!1;ae=!0}Uc(a,b);var e=md(c),g={id:a,name:b,callback:d||ma,da:e,Va:[]};g.Va=cc(e,od(function(a){Qd(a)}));var h=$d(g);"gtm.js"!==b&&"gtm.sync"!==b||Id();if(!h)return h;for(var k={__cl:!0,__ecl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},l=0;l<g.Va.length;l++)if(g.Va[l]){var m=
Ob[l];if(m&&!k[m[P.qa]])return!0}return!1};var Q={Pb:"event_callback",Rb:"event_timeout"};var de={};var ee=/[A-Z]+/,fe=/\s/,ge=function(a){if(f(a)&&(a=xa(a),!fe.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(ee.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ca:d}}}}},ie=function(a){for(var b={},c=0;c<a.length;++c){var d=ge(a[c]);d&&(b[d.id]=d)}he(b);var e=[];ta(b,function(a,b){e.push(b)});return e};
function he(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.ca[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var je=null,ke={},le={},me,ne=function(a,b){var c={event:a};b&&(c.eventModel=t(b),b[Q.Pb]&&(c.eventCallback=b[Q.Pb]),b[Q.Rb]&&(c.eventTimeout=b[Q.Rb]));return c};
var se={config:function(a){},event:function(a){var b=a[1];if(f(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ka(a[2]))return;
c=a[2]}var d=ne(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];de[b]||(de[b]=[]);de[b].push(c)}},set:function(a){var b;2==a.length&&Ka(a[1])?b=t(a[1]):3==a.length&&f(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=t(b),b.event="gtag.set",b._clear=!0,b}},te={policy:!0};var ue=function(){return!1};var ze=function(a){this.vg=a};ze.prototype.Af=function(){return this.vg};var Ae=function(a){return!a||"object"!==Ia(a)||Ka(a)?!1:"getUntrustedUpdateValue"in a};ze.prototype.getUntrustedUpdateValue=ze.prototype.Af;var Be=!1,Ce=[];function De(){if(!Be){Be=!0;for(var a=0;a<Ce.length;a++)C(Ce[a])}}var Ee=function(a){Be?C(a):Ce.push(a)};var Fe=[],Ge=!1;function He(a){var b=a.eventCallback,c=Ca(function(){na(b)&&C(function(){b(H.m)})}),d=a.eventTimeout;d&&x.setTimeout(c,Number(d));return c}
var Ie=function(a){return x["dataLayer"].push(a)},Ke=function(a){var b=a._clear;ta(a,function(a,c){"_clear"!==a&&(b&&hd(a,void 0),hd(a,c))});var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=yc(),a["gtm.uniqueEventId"]=d,hd("gtm.uniqueEventId",d));uc=c;var e=Je(a);uc=null;if(!sc){sc=a["gtm.start"];}return e};
function Je(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=K.zones;d=e?e.checkState(H.m,c):qd;if(!d.active)return!1;var g=He(a);return be(c,b,d.isWhitelisted,g)?!0:!1}
var Le=function(){for(var a=!1;!Ge&&0<Fe.length;){Ge=!0;delete Xc.eventModel;$c();var b=Fe.shift();if(null!=b){var c=Ae(b);if(c){var d=b;b=Ae(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=ad(h,1);if(qa(k)||Ka(k))k=t(k);Yc[h]=k}}try{if(na(b))try{b.call(bd)}catch(u){}else if(qa(b)){var l=b;if(f(l[0])){var m=
l[0].split("."),p=m.pop(),q=l.slice(1),r=ad(m.join("."),2);if(void 0!==r&&null!==r)try{r[p].apply(r,q)}catch(u){}}}else{var w=b;if(w&&("[object Arguments]"==Object.prototype.toString.call(w)||Object.prototype.hasOwnProperty.call(w,"callee"))){a:{if(b.length&&f(b[0])){var v=se[b[0]];if(v&&(!c||!te[b[0]])){b=v(b);break a}}b=void 0}if(!b){Ge=!1;continue}}a=Ke(b)||a}}finally{c&&$c(!0)}}Ge=!1}
return!a},Me=function(){var a=Le();try{var b=H.m,c=x["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Ne=function(){var a=Na("dataLayer",[]),b=Na("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};xd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ee(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b;
if(0<K.SANDBOXED_JS_SEMAPHORE){b=[];for(var e=0;e<arguments.length;e++)b[e]=new ze(arguments[e])}else b=[].slice.call(arguments,0);var g=c.apply(a,b);Fe.push.apply(Fe,b);if(300<this.length)for(Ec(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Le()&&h};Fe.push.apply(Fe,a.slice(0));C(Me)};var Pe=function(a){return Oe?y.querySelectorAll(a):null},Qe=function(a,b){if(!Oe)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!y.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Re=!1;if(y.querySelectorAll)try{var Se=y.querySelectorAll(":root");Se&&1==Se.length&&Se[0]==y.documentElement&&(Re=!0)}catch(a){}var Oe=Re;var Te;var pf={};pf.ob=new String("undefined");
var qf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===pf.ob?b:a[d]);return c.join("")}};qf.prototype.toString=function(){return this.resolve("undefined")};qf.prototype.valueOf=qf.prototype.toString;pf.De=qf;pf.$b={};pf.kf=function(a){return new qf(a)};var rf={};pf.hg=function(a,b){var c=yc();rf[c]=[a,b];return c};pf.td=function(a){var b=a?0:1;return function(a){var c=rf[a];if(c&&"function"===typeof c[b])c[b]();rf[a]=void 0}};pf.Nf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};pf.Yf=function(a){if(a===pf.ob)return a;var b=yc();pf.$b[b]=a;return'google_tag_manager["'+H.m+'"].macro('+b+")"};pf.Rf=function(a,b,c){a instanceof pf.De&&(a=a.resolve(pf.hg(b,c)),b=ma);return{oc:a,I:b}};var sf=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Ua(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return d},tf=function(a){K.hasOwnProperty("autoEventsSettings")||(K.autoEventsSettings={});var b=K.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},uf=
function(a,b,c,d){var e=tf(a),g=Ba(e,b,d);e[b]=c(g)},vf=function(a,b,c){var d=tf(a);return Ba(d,b,c)};var wf=function(){for(var a=La.userAgent+(y.cookie||"")+(y.referrer||""),b=a.length,c=x.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(ya()/1E3)].join(".")},zf=function(a,b,c,d){var e=xf(b);return jb(a,e,yf(c),d)},xf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},yf=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Af(a,b){var c=""+xf(a),d=yf(b);1<d&&(c+="-"+d);return c};var Bf=["1"],Cf={},Gf=function(a,b,c,d){var e=Df(a);Cf[e]||Ef(e,b,c)||(Ff(e,wf(),b,c,d),Ef(e,b,c))};function Ff(a,b,c,d,e){var g;g=["1",Af(d,c),b].join(".");nb(a,g,c,d,0==e?void 0:new Date(ya()+1E3*(void 0==e?7776E3:e)))}function Ef(a,b,c){var d=zf(a,b,c,Bf);d&&(Cf[a]=d);return d}function Df(a){return(a||"_gcl")+"_au"};var Hf=function(){for(var a=[],b=y.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Nc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Nc]||(g[a[h].Nc]=[]),g[a[h].Nc].push({timestamp:k[1],xf:k[2]}))}return g};function If(){for(var a=Jf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Kf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Jf,Lf,Mf=function(a){Jf=Jf||Kf();Lf=Lf||If();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,p=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(p=64));b.push(Jf[l],Jf[m],Jf[p],Jf[q])}return b.join("")},Nf=function(a){function b(b){for(;d<a.length;){var c=a.charAt(d++),e=Lf[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}Jf=Jf||Kf();Lf=Lf||
If();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Of;function Pf(a,b){if(!a||b===y.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var Qf=function(){var a=Na("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Rf=/(.*?)\*(.*?)\*(.*)/,Sf=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Tf=/^(?:www\.|m\.|amp\.)+/,Uf=/([^?#]+)(\?[^#]*)?(#.*)?/,Vf=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Xf=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Mf(String(d))))}var e=b.join("*");return["1",Wf(e),e].join("*")},Wf=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Of)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Of=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Of[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Zf=function(){return function(a){var b=fb(x.location.href),c=b.search.replace("?",""),d=cb(c,"_gl",!0)||"";a.query=Yf(d)||{};var e=D(b,"fragment").match(Vf);a.fragment=Yf(e&&e[3]||
"")||{}}},Yf=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Rf.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],p=0;p<b;++p)if(m===Wf(k,p)){l=!0;break a}l=!1}if(l){for(var q={},r=k?k.split("*"):[],w=0;w<r.length;w+=2)q[r[w]]=Nf(r[w+1]);return q}}}}catch(v){}};
function $f(a,b,c){function d(a){var b=a,c=Vf.exec(b),d=b;if(c){var e=c[2],g=c[4];d=c[1];g&&(d=d+e+g)}a=d;var h=a.charAt(a.length-1);a&&"&"!==h&&(a+="&");return a+l}c=void 0===c?!1:c;var e=Uf.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function ag(a,b,c){for(var d={},e={},g=Qf().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Pf(k.domains,b)&&(k.fragment?Da(e,k.callback()):Da(d,k.callback()))}if(Fa(d)){var l=Xf(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var p=a.childNodes||[],q=!1,r=0;r<p.length;r++){var w=p[r];if("_gl"===w.name){w.setAttribute("value",l);q=!0;break}}if(!q){var v=y.createElement("input");v.setAttribute("type","hidden");v.setAttribute("name","_gl");v.setAttribute("value",
l);a.appendChild(v)}}else if("post"===m){var u=$f(l,a.action);Za.test(u)&&(a.action=u)}}}else bg(l,a,!1)}if(!c&&Fa(e)){var z=Xf(e);bg(z,a,!0)}}function bg(a,b,c){if(b.href){var d=$f(a,b.href,void 0===c?!1:c);Za.test(d)&&(b.href=d)}}
var cg=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||ag(e,e.hostname,!1)}}catch(h){}},dg=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=D(fb(b.action),"host");ag(b,c,!0)}}catch(d){}},eg=function(a,b,c,d){var e=Qf();e.init||(A(y,"mousedown",cg),A(y,"keyup",cg),A(y,"submit",dg),e.init=!0);var g={callback:a,domains:b,
fragment:"fragment"===c,forms:!!d};Qf().decorators.push(g)},fg=function(){var a=y.location.hostname,b=Sf.exec(y.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(Tf,"")===e.replace(Tf,"")},gg=function(a,b){return!1===a?!1:a||b||fg()};var hg=/^\w+$/,ig=/^[\w-]+$/,jg=/^~?[\w-]+$/,kg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function lg(a){return a&&"string"==typeof a&&a.match(hg)?a:"_gcl"}var ng=function(){var a=fb(x.location.href),b=D(a,"query",!1,void 0,"gclid"),c=D(a,"query",!1,void 0,"gclsrc"),d=D(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||cb(e,"gclid",void 0);c=c||cb(e,"gclsrc",void 0)}return mg(b,c,d)};
function mg(a,b,c){var d={},e=function(a,b){d[b]||(d[b]=[]);d[b].push(a)};if(void 0!==a&&a.match(ig))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function og(a,b,c){function d(a,b){var c=pg(a,e);c&&nb(c,b,h,g,l,!0)}b=b||{};var e=lg(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Jd?7776E3:b.Jd;c=c||ya();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),p=function(a){return["GCL",m,a].join(".")};a.aw&&(!0===b.bh?d("aw",p("~"+a.aw[0])):d("aw",p(a.aw[0])));a.dc&&d("dc",p(a.dc[0]));a.gf&&d("gf",p(a.gf[0]));a.ha&&d("ha",p(a.ha[0]))}
var pg=function(a,b){var c=kg[a];if(void 0!==c)return b+c},qg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function rg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var sg=function(a,b,c,d,e){if(qa(b)){var g=lg(e);eg(function(){for(var b={},c=0;c<a.length;++c){var d=pg(a[c],g);if(d){var e=gb(d,y.cookie);e.length&&(b[d]=e.sort()[e.length-1])}}return b},b,c,d)}},tg=function(a){return a.filter(function(a){return jg.test(a)})},ug=function(a,b){for(var c=lg(b&&b.prefix),d={},e=0;e<a.length;e++)kg[a[e]]&&(d[a[e]]=kg[a[e]]);ta(d,function(a,d){var e=gb(c+d,y.cookie);if(e.length){var g=e[0],h=qg(g),p={};p[a]=[rg(g)];og(p,b,h)}})};var vg=/^\d+\.fls\.doubleclick\.net$/;function wg(a){var b=fb(x.location.href),c=D(b,"host",!1);if(c&&c.match(vg)){var d=D(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function xg(a,b){if("aw"==a||"dc"==a){var c=wg("gcl"+a);if(c)return c.split(".")}var d=lg(b);if("_gcl"==d){var e;e=ng()[a]||[];if(0<e.length)return e}var g=pg(a,d),h;if(g){var k=[];if(y.cookie){var l=gb(g,y.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var p=rg(l[m]);p&&-1===n(k,p)&&k.push(p)}h=tg(k)}else h=k}else h=k}else h=[];return h}
var yg=function(){var a=wg("gac");if(a)return decodeURIComponent(a);var b=Hf(),c=[];ta(b,function(a,b){for(var d=[],e=0;e<b.length;e++)d.push(b[e].xf);d=tg(d);d.length&&c.push(a+":"+d.join(","))});return c.join(";")},zg=function(a,b,c,d,e){Gf(b,c,d,e);var g=Cf[Df(b)],h=ng().dc||[],k=!1;if(g&&0<h.length){var l=K.joined_au=K.joined_au||{},m=b||"_gcl";if(!l[m])for(var p=0;p<h.length;p++){var q="https://adservice.google.com/ddm/regclk",r=q=q+"?gclid="+h[p]+"&auiddc="+g;La.sendBeacon&&La.sendBeacon(r)||Sa(r);k=l[m]=
!0}}k|=a;if(k&&g){var w=Df(b),v=Cf[w];v&&Ff(w,v,c,d,e)}};var Ag;if(3===H.sb.length)Ag="g";else{var Bg="G";Ag=Bg}
var Cg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Ag},Dg=function(a){var b=H.m.split("-"),c=b[0].toUpperCase(),d=Cg[c]||"i",e=a&&"GTM"===c?b[1]:"",g;if(3===H.sb.length){var h=void 0;g="2"+(h||"w")}else g="";return g+d+H.sb+e};var Kg=!!x.MutationObserver,Lg=void 0,Mg=function(a){if(!Lg){var b=function(){var a=y.body;if(a)if(Kg)(new MutationObserver(function(){for(var a=0;a<Lg.length;a++)C(Lg[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;A(a,"DOMNodeInserted",function(){b||(b=!0,C(function(){b=!1;for(var a=0;a<Lg.length;a++)C(Lg[a])}))})}};Lg=[];y.body?b():C(b)}Lg.push(a)};var dh=x.clearTimeout,eh=x.setTimeout,T=function(a,b,c){if(ue()){b&&C(b)}else return Pa(a,b,c)},fh=function(){return new Date},U=function(){return x.location.href},gh=function(a){return D(fb(a),"fragment")},hh=function(a){return eb(fb(a))},V=function(a,b){return ad(a,b||2)},ih=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Ie(a)},jh=function(a,b){x[a]=b},W=function(a,b,c){b&&(void 0===x[a]||c&&
!x[a])&&(x[a]=b);return x[a]},kh=function(a,b,c){return gb(a,b,void 0===c?!0:!!c)},lh=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Jd:d},g=ng();og(g,e);ug(["aw"],e);ug(["dc"],e);},mh=function(a,b,c,d,e){var g=Zf(),h=Qf();h.data||(h.data=
{query:{},fragment:{}},g(h.data));var k={},l=h.data;l&&(Da(k,l.query),Da(k,l.fragment));for(var m=lg(b),p=0;p<a.length;++p){var q=a[p];if(void 0!==kg[q]){var r=pg(q,m),w=k[r];if(w){var v=Math.min(qg(w),ya()),u;b:{for(var z=v,E=gb(r,y.cookie),B=0;B<E.length;++B)if(qg(E[B])>z){u=!0;break b}u=!1}u||nb(r,w,c,d,0==e?void 0:new Date(v+1E3*(null==e?7776E3:e)),!0)}}}var G={prefix:b,path:c,domain:d};og(mg(k.gclid,k.gclsrc),G);},nh=function(a,b,c,d,e){
sg(a,b,c,d,e);},oh=function(a,b){if(ue()){b&&C(b)}else Ra(a,b)},ph=function(a){return!!vf(a,"init",!1)},qh=function(a){tf(a).init=!0},rh=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":rc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ta(b,function(a,b){b&&(d+="&"+a+"="+encodeURIComponent(b))});T(O("https://","http://",d))};
var th=pf.Rf;
var uh=new za;function vh(a,b){function c(a){var b=fb(a),c=D(b,"protocol"),d=D(b,"host",!0),e=D(b,"port"),g=D(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,g]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0}
function wh(a){var b=a.arg0,c=a.arg1;if(a.any_of&&qa(c)){for(var d=0;d<c.length;d++)if(wh({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(u){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var p;p=String(b).split(",");return 0<=n(p,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var r=a.ignore_case?"i":void 0;try{var w=String(c)+r,v=uh.get(w);v||(v=new RegExp(c,r),uh.set(w,v));q=v.test(b)}catch(u){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return vh(b,
c)}return!1};var yh=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var zh={},Ah=encodeURI,X=encodeURIComponent,Bh=Sa;var Ch=function(a,b){if(!a)return!1;var c=D(fb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Y=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};zh.Of=function(){var a=!1;return a};var li=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},mi=function(){this.c=1;this.e=[];this.p=null};function ni(a){var b=K,c=b.gss=b.gss||{};return c[a]=c[a]||new mi}var oi=function(a,b){ni(a).p=b},pi=function(a){var b=ni(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(a){for(var b=0;b<a.length;b++)try{var d=a[b];d.d?(d.d=!1,e.push(d)):c(d.n,d.t,d.p)}catch(m){}};g(d);g(e)}};var ri=function(){var a=x.gaGlobal=x.gaGlobal||{};a.hid=a.hid||sa();return a.hid};var Gi=window,Hi=document,Ii=function(a){var b=Gi._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Gi["ga-disable-"+a])return!0;try{var c=Gi.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=gb("AMP_TOKEN",Hi.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Hi.getElementById("__gaOptOutExtension")?!0:!1};var Oi=function(a,b,c){Ni(a);var d=Math.floor(ya()/1E3);ni(a).e.push(new li(b,d,c,void 0));pi(a)},Qi=function(a,b,c){Ni(a);var d=Math.floor(ya()/1E3);ni(a).e.push(new li(b,d,c,!0))},Ni=function(a){if(1===ni(a).c){ni(a).c=2;var b=encodeURIComponent(a);Pa(("http:"!=x.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Si=function(a,b){},Ri=function(a,b){};var Z={a:{}};
Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.b=0})(function(a){var b=a.vtp_gtmOnFailure;yd();T("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=W("google_trackConversion");if(na(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=Y(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),a.vtp_eventValue&&
(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Dg()})||b()}else b()},b)})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.b=0})(function(){return uc})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.b=0})(function(a){var b=V("gtm.referrer",1)||y.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?D(fb(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):hh(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=sf(b,"gtm.click");ih(d)}}(function(a){Z.__cl=a;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.b=0})(function(b){if(!ph("cl")){var c=W("document");A(c,"click",a,!0);qh("cl")}C(b.vtp_gtmOnSuccess)})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.b=0})(function(a){return kh(a.vtp_name,V("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Z.__u=a;Z.__u.g="u";Z.__u.h=!0;Z.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:V("gtm.url",1))||U();var d=b[a("vtp_component")];if(!d||"URL"==d)return hh(String(c));var e=fb(String(c)),g;if("QUERY"==d&&b[a("vtp_multiQueryKeys")])a:{var h=b[a("vtp_queryKey")],k;k=qa(h)?h:String(h||"").replace(/\s+/g,"").split(",");for(var l=0;l<k.length;l++){var m=D(e,"QUERY",void 0,void 0,
k[l]);if(null!=m){g=m;break a}}g=void 0}else g=D(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0);return g})}();Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=V(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();

Z.a.ua=["google"],function(){var a,b=function(b){var c={},e={},g={},h={},k={};if(b.vtp_gaSettings){var l=b.vtp_gaSettings;t(Y(l.vtp_fieldsToSet,"fieldName","value"),e);t(Y(l.vtp_contentGroup,"index","group"),g);t(Y(l.vtp_dimension,"index","dimension"),h);t(Y(l.vtp_metric,"index","metric"),k);b.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=t(l);b=t(b,m)}t(Y(b.vtp_fieldsToSet,"fieldName","value"),e);t(Y(b.vtp_contentGroup,"index",
"group"),g);t(Y(b.vtp_dimension,"index","dimension"),h);t(Y(b.vtp_metric,"index","metric"),k);var p=Fd(b.vtp_functionName);if(na(p)){var q="",r="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(r=b.vtp_trackerName,q=r+"."):(r="gtm"+yc(),q=r+".");var w={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0},v={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},u=function(a){var b=[].slice.call(arguments,0);b[0]=q+b[0];p.apply(window,b)},z=function(a,b){return void 0===b?b:a(b)},E=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&u("set",a+c,b[c])},B=function(){
var a=function(a,b,c){if(!Ka(b))return!1;for(var d=Ba(Object(b),c,[]),e=0;d&&e<d.length;e++)u(a,d[e]);return!!d&&0<d.length},c;b.vtp_useEcommerceDataLayer?c=V("ecommerce",1):b.vtp_ecommerceMacroData&&(c=b.vtp_ecommerceMacroData.ecommerce);if(!Ka(c))return;c=Object(c);var d=Ba(e,"currencyCode",c.currencyCode);void 0!==d&&u("set","&cu",d);a("ec:addImpression",c,"impressions");if(a("ec:addPromo",c[c.promoClick?"promoClick":"promoView"],"promotions")&&c.promoClick){u("ec:setAction","promo_click",c.promoClick.actionField);
return}for(var g="detail checkout checkout_option click add remove purchase refund".split(" "),h=0;h<g.length;h++){var k=c[g[h]];if(k){a("ec:addProduct",k,"products");u("ec:setAction",g[h],k.actionField);break}}},G=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&w[e]||!c&&void 0===w[e])){var g=v[e]?va(a[e]):a[e];"anonymizeIp"!=e||g||(g=void 0);b[e]=g;d++}return d},R={name:r};G(e,R,!0);p("create",b.vtp_trackingId||
c.trackingId,R);u("set","&gtm",Dg(!0));b.vtp_enableRecaptcha&&u("require","recaptcha","recaptcha.js");(function(a,c){void 0!==b[c]&&u("set",a,b[c])})("nonInteraction","vtp_nonInteraction");E("contentGroup",g);E("dimension",h);E("metric",k);var M={};G(e,M,!1)&&u("set",M);var F;b.vtp_enableLinkId&&u("require","linkid","linkid.js");
u("set","hitCallback",function(){var a=e&&e.hitCallback;na(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(u("require","ec","ec.js"),B());var N={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:z(String,b.vtp_eventLabel||c.label),eventValue:z(ua,b.vtp_eventValue||c.value)};G(F,N,!1);u("send",N);}else if("TRACK_SOCIAL"==
b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==
b.vtp_trackType){}else{b.vtp_enableEcommerce&&(u("require","ec","ec.js"),B());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var Aa="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");u("require","displayfeatures",void 0,{cookieName:Aa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType){var ca=
"_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");u("require","adfeatures",{cookieName:ca})}F?u("send","pageview",F):u("send","pageview");b.vtp_autoLinkDomains&&Gd(q,b.vtp_autoLinkDomains,!!b.vtp_useHashAutoLink,!!b.vtp_decorateFormsAutoLink);}if(!a){var pa=b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&
(pa="internal/"+pa);a=!0;T(O("https:","http:","//www.google-analytics.com/"+pa,e&&e.forceSSL),function(){var a=Dd();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}}else C(b.vtp_gtmOnFailure)};Z.__ua=b;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.b=0}();




Z.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},g=function(a){var b=V(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue},h=function(a,
b){if(!a)return!1;var c=l(U()),d;d=qa(b.vtp_affiliatedDomains)?b.vtp_affiliatedDomains:String(b.vtp_affiliatedDomains||"").replace(/\s+/g,"").split(",");for(var e=[c],g=0;g<d.length;g++)if(d[g]instanceof RegExp){if(d[g].test(a))return!1}else{var h=d[g];if(0!=h.length){if(0<=l(a).indexOf(h))return!1;e.push(l(h))}}return!Ch(a,e)},k=/^https?:\/\//i,l=function(a){k.test(a)||(a="http://"+a);return D(fb(a),"HOST",!0)};(function(a){Z.__aev=a;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.b=0})(function(e){switch(e.vtp_varType){case "TAG_NAME":return V("gtm.element",
1).tagName||e.vtp_defaultValue;case "TEXT":var k,l=V("gtm.element",1),m=V("event",1),w=Number(fh());a===l&&b===m&&c>w-250?k=d:(d=k=l?Wa(l):"",a=l,b=m);c=w;return k||e.vtp_defaultValue;case "URL":var v;a:{var u=String(V("gtm.elementUrl",1)||e.vtp_defaultValue||""),z=fb(u);switch(e.vtp_component||"URL"){case "URL":v=u;break a;case "IS_OUTBOUND":v=h(u,e);break a;default:v=D(z,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey)}}return v;case "ATTRIBUTE":var E;if(void 0===e.vtp_attribute)E=
g(e);else{var B=V("gtm.element",1);E=Ua(B,e.vtp_attribute)||e.vtp_defaultValue||""}return E;default:return g(e)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.b=0})(function(a){var b=t(a),c=b;c[P.qa]=null;c[P.ye]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=W("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(c){yd();var d={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,
google_conversion_value:c.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:Dg()},h=function(a){return function(b,e,g){var h="DATA_LAYER"==a?V(g):c[e];h&&(d[b]=h)}},k=h("JSON");k("google_conversion_currency","vtp_currencyCode");k("google_conversion_order_id","vtp_orderId");c.vtp_enableProductReporting&&(k=h(c.vtp_productReportingDataSource),k("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),k("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),k("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),k("google_basket_discount","vtp_discount","discount"),k("google_conversion_items","vtp_items","items"),d.google_conversion_items=d.google_conversion_items.map(function(a){return{value:a.price,quantity:a.quantity,item_id:a.id}}));!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?(c.vtp_conversionCookiePrefix&&(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),
d.google_read_gcl_cookie_opt_out=!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,T("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Z.__awct=h;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.b=0}();



Z.a.html=["customScripts"],function(){function a(b,c,g,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,g,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=y.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var p=d.getAttribute("data-gtmsrc");p&&(m.src=p,Oa(m,e));b.insertBefore(m,null);p||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];d.firstChild;)q.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,q,e,h)()}else b.insertBefore(d,null),e()}else g()}catch(r){C(h)}}}var b=function(a,b,c){xd(function(){var d,e=K;e.postscribe||(e.postscribe=ec);d=e.postscribe;var g={done:b},m=y.createElement("div");m.style.display="none";m.style.visibility="hidden";y.body.appendChild(m);try{d(m,a,g)}catch(p){C(c)}})};var c=function(d){if(y.body){var e=
d.vtp_gtmOnFailure,g=th(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.oc,k=g.I;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(y.body,Xa(h),k,e)()}else eh(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.b=0}();



var Ti={};Ti.macro=function(a){if(pf.$b.hasOwnProperty(a))return pf.$b[a]},Ti.onHtmlSuccess=pf.td(!0),Ti.onHtmlFailure=pf.td(!1);Ti.dataLayer=bd;Ti.callback=function(a){wc.hasOwnProperty(a)&&na(wc[a])&&wc[a]();delete wc[a]};Ti.Ve=function(){K[H.m]=Ti;xc=Z.a;Sb=Sb||pf;Tb=pd};
Ti.Jf=function(){K=x.google_tag_manager=x.google_tag_manager||{};if(K[H.m]){var a=K.zones;a&&a.unregisterChild(H.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Lb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Ob.push(e[g]);for(var h=b.predicates||[],k=0;k<h.length;k++)Nb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],q={},r=0;r<p.length;r++)q[p[r][0]]=
Array.prototype.slice.call(p[r],1);Mb.push(q)}Qb=Z;Rb=wh;Ti.Ve();Ne();sd=!1;td=0;if("interactive"==y.readyState&&!y.createEventObject||"complete"==y.readyState)vd();else{A(y,"DOMContentLoaded",vd);A(y,"readystatechange",vd);if(y.createEventObject&&y.documentElement.doScroll){var w=!0;try{w=!x.frameElement}catch(E){}w&&wd()}A(x,"load",vd)}Be=!1;"complete"===y.readyState?De():A(x,"load",De);a:{if(!Sc)break a;x.setInterval(Tc,864E5);}tc=(new Date).getTime();}};(0,Ti.Jf)();

})()
