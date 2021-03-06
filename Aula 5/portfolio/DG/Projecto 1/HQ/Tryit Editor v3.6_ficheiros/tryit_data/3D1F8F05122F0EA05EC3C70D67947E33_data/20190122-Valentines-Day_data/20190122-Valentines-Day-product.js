/*js判断客户端*/
var client = 1;
var browserCheck={  
    versions:function(){   
           var u = navigator.userAgent, app = navigator.appVersion;   
           return {//移动终端浏览器版本信息   
                trident: u.indexOf('Trident') > -1, //IE内核  
                presto: u.indexOf('Presto') > -1, //opera内核  
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核  
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端  
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器  
                iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器  
                iPad: u.indexOf('iPad') > -1, //是否iPad    
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部  
                weixin: u.indexOf('MicroMessenger') > -1, //是否微信   
                qq: u.match(/\sQQ/i) == " qq" //是否QQ  
            };  
    }(),  
    language:(navigator.browserLanguage || navigator.language).toLowerCase()  
}   
var TT_NS = (function(NS, $){
    NS['isPhone']=function(){
        var u = navigator.userAgent;
        //android终端
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
        //ios终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if(isAndroid || isiOS){
            return true;
        }
        else{
            return false;
        }
    },
    NS['arr'] = {
        isInArray: function(arr,value){
            for(var i = 0; i < arr.length; i++){
                if(value === arr[i]){
                    return true;
                }
            }
            return false;
        }
    };
    NS['cookie'] = {
    /*
    *@名称:  get 获取cookie
    *@作者： caoxl
    *@日期： 2016-06-29
    *@参数:  String name cookie名称
    *@描述:  使用方法TT_GET('cookiePkg').get('name');
    *@返回:  如果cookie存在返回cookie 否则返回null
    */
    'get': function(name){
        var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
        return arr != null ? unescape(arr[2]) : null;
    },
    /*
    *@名称:  set 设置cookie
    *@作者： caoxl
    *@日期： 2016-06-29
    *@参数:  String name cookie名称
    *@描述:  使用方法TT_GET('cookiePkg').set('name', 'value');
    *@返回:  boolean
    */
    'set':function(name, value){  
       var exp = new Date();  
       exp.setTime(exp.getTime() + 365 * 24 * 60 * 60 * 1000); //3天过期  
       document.cookie = name + "=" + encodeURIComponent(value) + ";domain=.tomtop.com;expires=" + exp.toGMTString()+";path=/";  
       return true;  
    },
    /*
    *@名称:  del 删除cookie
    *@作者： caoxl
    *@日期： 2016-06-29
    *@参数:  String name cookie名称
    *@描述:  使用方法TT_GET('cookiePkg').del('name');
    *@返回:  boolean
    */
    'del':function(name){
         var _this = this;
         var _exp = new Date();  //当前时间
         _exp.setTime(_exp.getTime() - 1);
         var _cval = _this.get(name);
         if(_cval != null){
            document.cookie= name + "="+_cval+";domain=.tomtop.com;expires="+_exp.toGMTString()+";path=/";
         }
    },
    'tem' : function(name, value) {
       var _domain = NS['config']['cookieDomain'];
       document.cookie = name + "=" + encodeURIComponent(value) + ";domain=.tomtop.com;path=/";
       return true;
    },
    'defauleCurr' : function(){
        if(this.get('TT_CURR') == null){
            this.set('TT_CURR','USD')
        }
    }
 };
return NS;
})(window.TT_NS || {}, jQuery);
//判断是否登录的js
/*各个滚动的代码*/
var scroll = {
    init:function(){
        this.navScroll();
        this.bannerScroll();
    },
    navScroll:function(){
          var mySwiper = new Swiper('.nav_wrap .swiper-container', {
                        scrollbar: '.swiper-scrollbar',
                        scrollbarHide: true,
                        slidesPerView: 'auto',
                        freeMode: true,
                        grabCursor: true
          })
    },
    bannerScroll:function(){
        var mySwiper = new Swiper('.scroll_banner .swiper-container', {
                    scrollbar: '.swiper-scrollbar',
                    scrollbarHide: true,
                    autoplay : 5000,
                    loop: true,
                    // 如果需要分页器
                    pagination: '.swiper-pagination',
                    // 如果需要前进后退按钮
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    paginationType : 'bullets',
        })
    }
}
scroll.init();
function isLogin(){
     if(TT_NS['cookie'].get('LOGIN_TOKEN')){
        return TT_NS['cookie'].get('LOGIN_TOKEN');
     }else{
        return false;
     }
}
//获取登录用户的邮箱
function getUserEmail(){
     if(TT_NS['cookie'].get('TT_UUEMAIL')){
         return TT_NS['cookie'].get('TT_UUEMAIL');
     }
}
//保存登录用户的邮箱地址。
var userEmail = getUserEmail();
/*by wxl*/
$(function(){
    if(browserCheck.versions.mobile || browserCheck.versions.ios || browserCheck.versions.android ||   
        browserCheck.versions.iPhone || browserCheck.versions.iPad){        
        client = 2;   
    }else{
        client = 1;   
    }
    //获取服务器时间。
    var utcTime = (function(){
        var servertime = '';
        $.ajax({
        type:'GET',
        url:'https://gatewayapi.tomtop.com/base/base/systemTime/v1',
        dataType: 'json',
        async:false,
        success:function(res){
            if(res.ret == 1){
                //alert(res.data);
                servertime = res.data;
            }
        }
    });
    return servertime
    })();
    console.log('utcTime:'+utcTime);

function setUTCTime(str){
    //天需要判断区间。
    var d = new Date();
    var uY = d.getUTCFullYear();
    var uM = d.getUTCMonth();
    var uD = d.getUTCDate();
    var uH = d.getUTCHours();
    var uMin = d.getUTCMinutes();
    var uS = d.getUTCSeconds();
    var uMim = d.getUTCMilliseconds();
    console.log(uY+":"+uM+":"+uD+":"+uH+":"+uMin+":"+uS);
    return Date.UTC(uY,uM,uD + str,8,0,0);
}
console.log('utcTime:' + setUTCTime(0));
function strFun(fn) {
    //字符串转对象
    var Fn = Function;
    return new Fn('return ' + fn)();
};
var object = new Object();
function fnCountdownD(obj){
    //计算当前剩余秒数
    var iCountdown = obj.attr('ctnum');
    clearInterval(object[iCountdown]);
    var surplus = obj.find('input').val();
    if(surplus > 0){
        obj.css('display','inline-block');
        var objs = obj.find('span');
        object[iCountdown] = setInterval(function(){
            --surplus;
            fnCalculate(objs,surplus);
        }, 1000);
    } else{
        obj.css('display','none');
    };
};
//计算倒计时
function fnCalculate(objs,surplus){
    //总秒数换算天时分秒
    var second = Math.floor(surplus % 60);
    var minite = Math.floor((surplus / 60) % 60);
    var hour = Math.floor((surplus / 3600) % 24);
    var day = Math.floor((surplus / 3600) / 24);
    if(day<0){
        day=hour=minite=second=0;
    }
    if(objs.attr('countdownd-day') === 'true' && day > 0) {
        objs.html('<s>'+ fnZeroize(day) +'</s>'+'<em>d</em><i>:</i>' + '<s>'+ fnZeroize(hour) +'</s>'+'<em>h</em><i>:</i>'+ '<s>'+ fnZeroize(minite) +'</s>' +'<em>m</em><i>:</i>'+ '<s>'+ fnZeroize(second) +'</s>'+'<em>s</em>');
    }
    else {
        objs.html('<s>'+ fnZeroize(day) +'</s>'+'<em>d</em><i>:</i>' + '<s>'+ fnZeroize(hour) +'</s>'+'<em>h</em><i>:</i>'+ '<s>'+ fnZeroize(minite) +'</s>' +'<em>m</em><i>:</i>'+ '<s>'+ fnZeroize(second) +'</s>'+'<em>s</em>');
    };
};
function fnZeroize(nub){
    //0-9前面补0 fnZeroize(数字)
    var sNub=null;
    if(nub<10){
        sNub='<span>0</span>'+'<span>'+nub+'</span>';
    } else{
        sNub='<span>'+nub+'</span>';
    };
    return sNub;
};
function fnZeroize2(nub){
    //0-9前面补0 fnZeroize(数字)
    var sNub=null;
    if(nub<10){
        sNub='0'+ nub;
    } else{
        sNub=''+ nub;
    };
    return sNub;
};
/*计算倒计时时间差*/
function diffTimeFn(startTime,endTime){
    console.log('startTime:'+ startTime);
    console.log('endtime:'+endTime);
    if (startTime && endTime) {
        var start = new Date(startTime);
        start = start.getFullYear() > 0 ? start : new Date(Date.parse(startTime.replace(/-/g, "/")));
        var end = new Date(endTime);
        end = end.getFullYear() > 0 ? end : new Date(Date.parse(endTime.replace(/-/g, "/")));
        var intDiff = (end.getTime() - start.getTime())/1000;
        return intDiff;         
    }
}
//获取当前服务器日期
function GetDateStr(AddDayCount) {
    var dd = new Date(utcTime);
    dd = dd.getFullYear() > 0 ? dd : new Date(Date.parse(utcTime.replace(/-/g, "/")));
    dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期 
    var y = dd.getFullYear(); 
    var m = fnZeroize2(dd.getMonth() + 1);//获取当前月份的日期 
    var d = fnZeroize2(dd.getDate()); 
    return y + m + d;
}
/*格式化当天日期*/
function formatDate(AddDayCount,str){
    var dd = new Date(utcTime);
    dd = dd.getFullYear() > 0 ? dd : new Date(Date.parse(utcTime.replace(/-/g, "/")));//兼容ios。
    dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期 
    var y = dd.getFullYear(); 
    var m = dd.getMonth() + 1;//获取当前月份的日期 
    var d = dd.getDate();
    return y + '-'+ m + '-'+ d + str;//格式化获取以天为单位的预售倒计时开始时间。
}
/*格式化日期*/
function formatDate2(timestr){
    var dd = new Date(timestr);
    dd = dd.getFullYear() > 0 ? dd : new Date(Date.parse(timestr.replace(/-/g, "/")));//兼容ios。
    var y = dd.getFullYear(); 
    var m = dd.getMonth() + 1;//获取当前月份的日期 
    var d = dd.getDate();
    return d + '/'+ m + '/'+ y;//格式化获取以天为单位的预售倒计时开始时间。
}
/*指定时间转成毫秒数*/
function toSecond(str){
    var s = new Date(str).getTime()
    return s;
}
/*tab切换*/
function tabSwitch(){
    $('.tab_btn li').click(function(){
         var index = $(this).index();
         $(this).addClass('active').siblings().removeClass('active');
         $(this).parents('.tab_btn').next('.tab_con').children().eq(index).addClass('active').siblings().removeClass('active');
    })
}
function showTips(){
    $('.hd .tips').hover(function(){
        $(this).addClass('show_sub');
    },function(){
        $(this).removeClass('show_sub');
    })
}
/*比较两个时间的大小公共方法*/
function compareTime(eTime){
    var utcTime2 = new Date(utcTime);
    utcTime2 = utcTime2.getFullYear() > 0 ? utcTime2 : new Date(Date.parse(utcTime.replace(/-/g, "/")));//时间比较兼容ios
    var tab_startTime = new Date(eTime);
    tab_startTime = tab_startTime.getFullYear() > 0 ? tab_startTime : new Date(Date.parse(eTime.replace(/-/g, "/")));//时间比较兼容ios
    if(new Date(utcTime2) > new Date(tab_startTime)){
           return true;
    }else{
          return false;
    }
}
/*活动倒计时*/
var activityCountDown = {
    endtime:'2018-6-26 08:00:00',      //
    init:function(){
        this.countDown();
    },
    countDown:function(){
        _this = this;
        var diffTime =  diffTimeFn(utcTime, _this.endtime);
        console.log(diffTime);
        var countDowmDom = '<input type="hidden" value="'+ diffTime +'">';

        $('#activity_countDown').append(countDowmDom);
        fnCountdownD($('#activity_countDown'));
    }
}
activityCountDown.init();
/*活动code*/
var getCode = ({
    domin:'https://gatewayapi.tomtop.com',
    init:function () {
            var _this = this;
            this.getCouponList();
            $(document).on('click','.codeStart',function(){
                 if(!($(this).hasClass('codeOver') || $(this).hasClass('comingsoon'))){
                     var obj = $(this);
                     if(isLogin()){
                         var cId = obj.attr('data-ruleId');
                         var code = obj.attr('data-couponCode');;
                         _this.isReceive(code,cId,obj);
                     }else{
                         var curUrl = window.location.href;
                         //'https://my.tomtop.com/member/login?backUrl='+url;
                         window.location.href = 'https://my.tomtop.com/member/login?backUrl=' + curUrl;
                     }
                   
                 }

            })
    },
    /*获取展示优惠券列表并且判断优惠券还有没有*/
    'getCouponList':function(){
        var className,
            txt;
        var _this = this;
        $.ajax({
            type: "GET",
            cache: false,
            url: _this.domin +'/loyalty/loyalty/queryarea?website=1&client=1&areaName=Spring&email='+ userEmail,
            //url:'https://openapi.tomtop.com/loyalty/queryarea?website=1&client=1&areaName=Spring',
            dataType:'json',
            success: function (res){
                if(res.ret == 1){
                    var tpl = '';
                    var data = res.data.Spring,
                        statusClassName ='',
                        txt = '',
                        received = '';
                        url = '',
                        couponBtn ='',
                        use_now = '',
                        disTxt = '';
                    for(var i=0; i< 4;i++){
                        url = data[i].url;
                        received = data[i].received;
                        if((data[i].total - data[i].receiveTotal) > 0){//还有优惠券可以领取
                            if(!compareTime(data[i].start)){
                               //如果还没到时间
                               statusClassName = 'comingsoon';
                               txt = 'Coming Soon';
                            }else{
                               statusClassName = 'codeStart';
                               if(received > 0){
                                  txt = 'Received Already';
                                  couponBtn = 'none';
                                  use_now = 'block'
                               }else{
                                  txt = 'Grab It !';
                                  couponBtn = 'block';
                                  use_now = 'none'
                                }
                            }
                            
                        }else{//优惠券已经领完
                            statusClassName = 'codeOver';
                            txt = 'All Taken';
                        }
                        if(i==0){
                            typeName = 'style1';
                        }else{
                            typeName = ''
                        }
                        if(data[i].type == 2){
                            disTxt = data[i].discount +'%';
                        }else{
                            disTxt = '$'+data[i].subtractMoney;
                        }
                        title = data[i].title;
                        lastNum = data[i].total - data[i].receiveTotal;
                        tpl += '<li class="swiper-slide '+ typeName +'">\
                     <div class="tp_bg"></div>\
                     <div class="coupon_c">\
                          <div class="hd">\
                               <p class="p1">Begins in '+ formatDate2(data[i]['start']) +' @08:00 UTC</p>\
                               <p class="p2">'+ data[i]['name']+'</p>\
                          </div>\
                          <div class="bd">\
                                <div class="p1"><span class=prise>'+ disTxt +'</span><span class="country">OFF</span></div>\
                                <p class="p2"><span>'+ formatDate2(data[i]['start']) +'</span> ~ <span>'+ formatDate2(data[i]['end']) +'</span></p>\
                          </div>\
                          <div class="bt">\
                               <p class="p1"><a class="code '+ statusClassName +'" href="javascript:void(0);" data-couponCode="'+ data[i]['couponCode'] +'" data-ruleId="'+ data[i].ruleId +'" style="display:'+ couponBtn +'">'+ txt +'</a><a class="code use_now" href="'+ url +'" style="display:'+ use_now +'">use immediately</a></p>\
                               <p class="p2"><span>'+ lastNum +'</span>  PCS Only</p>\
                          </div>\
                     </div>\
                     <div class="bt_bg"></div>\
                 </li>';
                    }
                }
                $('#coupon_con').append(tpl);
                var mySwiper = new Swiper('.coupon_wrap .swiper-container', {
                    scrollbar: '.swiper-scrollbar',
                    scrollbarHide: true,
                    slidesPerView: 'auto',
                    freeMode: true,
                    grabCursor: true
                })
            },
            error:function(){
                console.log('请求错误');
            }
        });

    },
    //判断优惠券还有没有同时执行查看用户领没领过这个优惠券。
    codeStatus:function () {
        //获取优惠券列表。
        var _this = this;
        $.ajax({
            type: "GET",
            cache: false,
            url:_this.domin +'/loyalty/loyalty/queryarea?website=1&client=1&areaName=Spring',
            //url:'https://openapi.tomtop.com/loyalty/queryarea?website=1&client=1&areaName=Spring',
            dataType:'json',
            success: function (res){
                if(res.ret == 1){
                    var data = res.data.Spring;
                    for(var i=0; i< data.length;i++){
                        if(data[i].couponCode == $('a.code').eq(i).attr('data-counpnCode')){
                            if((data[i].total - data[i].receiveTotal)>0){//还有优惠券可以领取
                                var cId = data[i].ruleId;
                                var code = data[i].couponCode;
                                var obj = $('a.code').eq(i);
                                _this.isReceive(code,cId,obj);
                            }else{//优惠券已经领完
                                $('a.code').eq(i).removeClass('codeStart');
                                $('a.code').eq(i).addClass('codeOver');
                                $('a.code').eq(i).text('All Taken');
                            }
                        }
                    }
                }
            },
            error:function(){
                console.log('请求错误');
            }
        });
    },
    /*判断用户有没有领过这个优惠券*/
    isReceive:function (code,cId,obj) {
        var _this = this;
        $.ajax({
            type: "GET",
            cache: false,
            url: _this.domin + '/loyalty/loyalty/qcoupon?website=1',
            //url:'https://openapi.tomtop.com/loyalty/qcoupon?website=1',
            dataType:'json',
            headers: {'loginToken':isLogin()},
            success: function (res){
                 if(res.ret == 0 && res.errCode == 'NOT_LOG'){
                    var curUrl = window.location.href;
                    //'https://my.tomtop.com/member/login?backUrl='+url;
                    window.location.href = 'https://my.tomtop.com/member/login?backUrl=' + curUrl;
                }else{
                    var codeFlag = false;
                    res = res.join(',');
                    //alert(code);
                    if(res.indexOf(code) != -1){//判断某个值是否存在某个数组里面。
                         codeFlag = true;
                    }
                    if(codeFlag){
                        obj.removeClass('codeOver');
                        obj.addClass('codeStart');
                        obj.text('Received Already');
                    }else{
                        _this.getCoupon(code,cId,obj);
                    }
                }
            },
            error:function(){
               console.log('请求错误');
            }
        });
    },
    /*点击领取coupon*/
    getCoupon:function (code,cId,obj) {
        var _this = this;
        var sendData = {'email':userEmail,'couponCode':code,'website':1,'ruleId':cId,'client':1};
        var jsonStr = $.toJSON(sendData);
        $.ajax({
            type: "POST",
            cache: false,
            url:_this.domin +'/loyalty/loyalty/save',
            //url:'https://openapi.tomtop.com/loyalty/save',
            data:jsonStr,
            contentType: 'application/json',
            dataType:'json',
            success: function (res){
                if(res.ret == 1){
                    obj.removeClass('codeOver');
                    obj.addClass('codeStart');
                    obj.text('Received Already');
                    obj.hide();
                    obj.next('a.use_now').css({'display':'block'});
                    _this.upDataCouponNum(obj);
                }else{
                    TT_NS['dialog'].dialogBg(true, {css:{'z-index':999}});
                    $(".m_get_code").addClass('dialog_show');
                }
            },
            error:function(){
               console.log('请求错误');
            }
        });
    },
    'upDataCouponNum':function(obj){
            var _this = this;
            $.ajax({
            type: "GET",
            cache: false,
            url: _this.domin +'/loyalty/loyalty/queryarea?website=1&client=1&areaName=Spring',
            //url:'https://openapi.tomtop.com/loyalty/queryarea?website=1&client=1&areaName=Spring',
            dataType:'json',
            success: function (res){
                 if(res.ret == 1){
                   var data = res.data.Spring;
                   for(var i=0; i< 4;i++){
                        if(data[i].couponCode == obj.attr('data-couponcode')){
                            var lastNum = data[i].total - data[i].receiveTotal;
                            console.log(data[i].couponCode);
                            obj.parents('.bt').find('.p2 span').text(lastNum);
                        }
                   }
                }
            
            },
            error:function(){
                console.log('请求错误');
            }
        });
 
        }
});
getCode.init();
//superdeals(获取产品数据);
var superdeals = {
     todayEndTime:'',
     tomrrowEndTime:'',
     imgUrl:'https://img.tomtop.com/product/xy/220/220/',
     dominUrl:'https://www.tomtop.com/',
     nowD:new Date().getDate(),//今天日期
     init:function(opt){
        //this.setTabCount();
        this.getData(opt);
     },
     /*格式化开始日期和结束日期*/
     'formatDateStr':function(AddDayCount,str){
        var dd = new Date(utcTime);
        dd = dd.getFullYear() > 0 ? dd : new Date(Date.parse(utcTime.replace(/-/g, "/")));//兼容ios。
        dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期 
        var y = dd.getFullYear(); 
        var m = dd.getMonth() + 1;//获取当前月份的日期 
        var d = dd.getDate();
        return y + '-'+ m + '-'+ d + str;//格式化获取以天为单位的预售倒计时开始时间。
     },
     //设置tab切换时间的倒计时差值。
     setTabDiff:function(tab_startTime,tab_endTime){
        // var _this = this;
        // var tab_tipsStr = compareTime(tab_startTime) ? 'Promo Ends In:':'Promo Starts In:';
        // if(compareTime(tab_startTime)){
        //        tab_startTime = utcTime;
        //        tab_endTime = tab_endTime;
        // }else{
        //        var tempTime = tab_startTime;//临时存储开始时间，防止下面被覆盖掉
        //        tab_startTime = utcTime;
        //        tab_endTime = tempTime;
        // }
        var tab_diffs = diffTimeFn(tab_startTime,tab_endTime);
        return {'tab_tipsStr':'Promo Ends In:','tab_diffs':tab_diffs}
     },
     setTabCount:function(){
        var _this = this;
        for(var j = 0; j<$('#deals_tab li').length;j++){
                if(j==0){
                   if(!compareTime(formatDate(0,' 08:00:00'))){//这个逻辑需要转换过来
                      var result = _this.setTabDiff(utcTime,_this.formatDateStr(1,' 08:00:00'));
                   }else{
                      var result = _this.setTabDiff(utcTime,_this.formatDateStr(1,' 08:00:00'));
                   }
                   //console.log(result);
                   var tabHtml = '<p class="tab_count_time" ctnum="count_time_tab'+ j +'" style="display:inline-block;"><b>Promo Ends In:</b><input type="hidden" value="'+ result.tab_diffs +'"><span></span></p>';
                   $('#deals_tab li').eq(j).children('.tab_btn_con').html(tabHtml);
                }else{
                   if(!compareTime(formatDate(0,' 08:00:00'))){
                      var result = _this.setTabDiff(utcTime,_this.formatDateStr(1,' 08:00:00'));
                   }else{
                      var result = _this.setTabDiff(utcTime,_this.formatDateStr(1,' 08:00:00'));
                   }
                   //console.log(result);
                   var tabHtml = '<p class="tab_count_time" ctnum="count_time_tab'+ j +'" style="display:inline-block;"><b>Promo Starts In:</b><input type="hidden" value="'+ result.tab_diffs +'"><span></span></p>';
                   $('#deals_tab li').eq(j).children('.tab_btn_con').html(tabHtml);
                }
                //计算倒计时
                fnCountdownD($('.tab_count_time').eq(j));
         }            
     },
     getData:function(opt){
          var _this = this;
          var sendData = '';
          var sendUrl = '';
          if(opt.tagName == 'flash_deals'){
             _this.imgUrl = 'https://img.tomtop.com/product/xy/377/377/';
             sendData = {'startDate':opt.startDate,'times':opt.times,'client':client};
             sendUrl =  'https://gatewayapi.tomtop.com/product/ic/v1/product/super/deals?depotId=1&currency=USD&website=1&lang=1&size=20';
          }else{
             sendData = {'start':opt.start,'end':opt.end,'tagName':opt.tagName};
             sendUrl = 'https://gatewayapi.tomtop.com/esdb/active/christ/query?website=1&language=1'
          }
          $.ajax({
                type: "GET",
                cache: false,
                data:sendData,
                url:sendUrl,
                dataType:'json',
                success:function(res) {
                    if (res.ret == 1) {
                        var data = res.data;
                        //console.log(data);
                        //alert(JSON.stringify(data));
                        var supHtml = '';
                        var addClassName = '';
                        var addClassName2 = '';
                        var btnTxt = 'buy now';
                        var sta_sku ='';
                        var aLink = '';
                        var _ua = navigator.userAgent;
                        for(var i=0; i< data.length;i++){
                            if(opt.tagName == 'lowest_price_sale'){//deals
                                var startTime = data[i].startDate;
                                var endTime = data[i].endDate;
                                //console.log(startTime+":"+endTime);
                                var tipsStr = compareTime(startTime) ? 'Ends in:':'Starts In:';
                                //console.log(res[i].title + '\n'+' :utcTime:'+ utcTime + ' startTime:'+startTime+' endTime:'+ endTime)
                                if(compareTime(startTime)){
                                       startTime = utcTime;
                                       endTime = endTime;
                                }else{
                                       var tempTime = startTime;//临时存储开始时间，防止下面被覆盖掉
                                       startTime = utcTime;
                                       endTime = tempTime;
                                }
                                //console.log(res[i].title + '\n'+' :utcTime:'+ utcTime + ' startTime:'+startTime+' endTime:'+ endTime)
                                var diffs = diffTimeFn(startTime,endTime);
                            }
                            if(opt.tagName == 'flash_deals'){
                                if(opt.cur == 1){//活动未开始
                                    btnTxt = 'Coming Soon';
                                    addClassName = 'comingSoon';
                                }
                                else{
                                    btnTxt = 'Buy Now';
                                }
                            }
                            if(opt.tagName !== 'flash_deals'){
                                if(data[i].lastQty == 0){//没有库存
                                    addClassName = ' shop_over';
                                    addClassName2 = ' shop_over_c';
                                    btnTxt = 'DEALS ENDED';
                                }
                                else{//有库存
                                    addClassName = '';
                                    addClassName2 = '';
                                    btnTxt = 'Buy Now';
                                }
                            }
                            if(opt.tagName == 'flash_deals'){
                                sta_sku = data[i].sku;
                                if(_ua.indexOf('TOMTOP_1+X_APP') != "-1"){
                                    aLink = "tomtop://com.tomtop.shop/godetail?gid="+ sta_sku;
                                    $('.hd-t').hide();
                                    $('.footer-bg').hide();
                                    $('.bottomBanner').hide();
                                }else{
                                    aLink = _this.dominUrl + data[i].url + '.html';
                                }
                                 supHtml += '<li class="GAClickBox">\
                            <div class="pr_box">\
                                 <p class="count_time" ctnum="count_time'+ i + data[i].pa.actId +'" style="display:inline-block;"><em>'+ tipsStr +'</em><input type="hidden" value="'+ diffs +'"><span>06h:40m:02s</span></p>\
                                    <div class="pr_img">\
                                     <a href="'+ aLink +'" target="_blank"><img id="GAPRO+ValentinesDay+'+ opt.tagName +'_I+'+ sta_sku+ '+' + i +'" src="'+ _this.imgUrl + data[i].imageUrl +'" alt="'+ data[i].title +'"></a>\
                                </div>\
                                <div class="pr_info">\
                                <h4 class="pr_tt"><a href="'+ aLink +'" target="_blank" class="GATitle" id="GAPRO+ValentinesDay+'+ opt.tagName +'_T+'+ sta_sku+ '+' + i +'">'+ data[i].title +'</a></h4>\
                                <div class="pr_price">\
                                    <span class="current_price GAPrice">$' + data[i].pa.actPrice +'</span>\
                                    <span class="origin_price">$' + data[i].origprice +'</span>\
                                </div>\
                                <div class="m_progress_bar">\
                                <div class="lineBlock bar_sale">\
                                        <span class="pro_sell" data-sell="36">'+ data[i].pa.lastCount +'</span>PCs Left                        </div>\
                                    <div class="lineBlock bar_wrap'+ addClassName2+'">\
                                        <div class="bar_wrap_cont'+ addClassName+'" style="width:'+ ((data[i].pa.actQty-data[i].pa.lastCount) / data[i].pa.actQty )*100 +'%;"></div>\
                                    </div>\
                                </div>\
                                <a href="'+ aLink +'" class="buy_btn '+addClassName+'" target="_blank" id="GAPRO+ValentinesDay+'+ opt.tagName +'_B+'+ sta_sku + '+' + i +'">'+btnTxt+'</a>\
                            </div>\
                            </div>\
                        </li>';
                            }else{
                                 var warehouse = data[i].storageCode;
                                 var sku = data[i].hrefUrl;
                                 sta_sku = sku.replace(/.html/, '').replace('p-','');
                                 if(warehouse && warehouse!=='CN'){
                                     warehouse = '?Warehouse='+ warehouse;
                                 }else{
                                     warehouse = '';
                                 }
                                 if(_ua.indexOf('TOMTOP_1+X_APP') != "-1"){
                                    aLink = "tomtop://com.tomtop.shop/godetail?gid="+ sta_sku;
                                    $('.hd-t').hide();
                                    $('.footer-bg').hide();
                                    $('.bottomBanner').hide();
                                 }else{
                                    aLink = _this.dominUrl + data[i].hrefUrl + warehouse;
                                 }
                                 supHtml += '<li class="GAClickBox">\
                            <div class="pr_box">\
                                 <p class="count_time" ctnum="count_time'+ i + data[i].total +'" style="display:inline-block;"><em>'+ tipsStr +'</em><input type="hidden" value="'+ diffs +'"><span>06h:40m:02s</span></p>\
                                    <div class="pr_img">\
                                     <a href="'+ aLink +'" target="_blank"><img id="GAPRO+ValentinesDay+'+ opt.tagName +'_I+'+ sta_sku+ '+' + i +'" src="'+ _this.imgUrl + data[i].imageUrl +'" alt="'+ data[i].title +'"></a>\
                                </div>\
                                <div class="pr_info">\
                                <h4 class="pr_tt"><a href="'+ aLink +'" target="_blank" class="GATitle" id="GAPRO+ValentinesDay+'+ opt.tagName +'_T+'+ sta_sku+ '+' + i +'">'+ data[i].title +'</a></h4>\
                                <div class="pr_price">\
                                    <span class="current_price GAPrice">$' + data[i].salePrice +'</span>\
                                    <span class="origin_price">$' + data[i].yjPrice +'</span>\
                                </div>\
                                <div class="m_progress_bar">\
                                <div class="lineBlock bar_sale">\
                                        <span class="pro_sell" data-sell="36">'+ data[i].lastQty +'</span>PCs Left                        </div>\
                                    <div class="lineBlock bar_wrap'+ addClassName2+'">\
                                        <div class="bar_wrap_cont'+ addClassName+'" style="width:'+ ((data[i].total - data[i].lastQty) / data[i].total )*100 +'%;"></div>\
                                    </div>\
                                </div>\
                                <a href="'+ aLink +'" class="buy_btn '+addClassName+'" target="_blank" id="GAPRO+ValentinesDay+'+ opt.tagName +'_B+'+ sta_sku + '+' + i +'">'+btnTxt+'</a>\
                            </div>\
                            </div>\
                        </li>';
                            }
                           
                        }
                        if(opt.tagName == 'flash_deals'){
                           $('#'+ opt.tagName +'_con ul').eq(opt.cur).append(supHtml);
                        }else{
                           $('#'+ opt.tagName +'_con').append(supHtml); 
                        }                        //console.log($('.count_time').length);
                        //倒计时
                        if(opt.tagName == 'flash_deals'){
                            for(var i = 0; i < $('.count_time').length; i++){
                                fnCountdownD($('.count_time').eq(i));
                            };
                        }
                    }else{
                        console.log('没有产品了，网络异常，请稍后再试');
                    }
                },
                error: function(){
                    $('.signIn').removeClass('hide');
                    $('.acount_link').addClass('hide');
                }
        });
     }
}
/*tab选项切换*/
tabSwitch();
showTips();
//superdeals.setTabCount();
// /*获取superdelas列表数据*/
// $('#deals_tab li').click(function(){
//          var index = $(this).index();
//          var conDom = $(this).parents('.tab_btn').next('.tab_con').children().eq(index).find('ul');
//          if($.trim(conDom.html())==''){
//              if(index==0){
//                 if(!compareTime(formatDate(0,' 08:00:00'))){
//                    superdeals.getData({
//                           'startDate':GetDateStr(-1),
//                           'times':'8',
//                           'tagName':'flash_deals',
//                           'cur':0
//                     })
//                 }else{
//                     superdeals.getData({
//                           'startDate':GetDateStr(0),
//                           'times':'8',
//                           'tagName':'flash_deals',
//                           'cur':0
//                      })
//                 }
             
//              }else{
//                   if(!compareTime(formatDate(0,' 08:00:00'))){
//                     superdeals.getData({
//                          'startDate':GetDateStr(0),
//                           'times':'8',
//                           'tagName':'flash_deals',
//                           'cur':1
//                     })
//                 }else{
//                     superdeals.getData({
//                          'startDate':GetDateStr(1),
//                           'times':'8',
//                           'tagName':'flash_deals',
//                           'cur':1
//                     })
//                 }
//              }
//         }
// })


//获取lucky_bags数据
superdeals.getData({
    'tagName':'Creat_A_Romantic_Atmosphere'
});
	
superdeals.getData({
    'tagName':'Dress_Up_And_Dating'
});

superdeals.getData({
    'tagName':'Gifts_For_Him'
});
	
superdeals.getData({
    'tagName':'Gifts_For_Her'
});
	
superdeals.getData({
    'tagName':'Must_Have_For_Yourself'
});
	
superdeals.getData({
    'tagName':'Have_Fun_With_Toy_Game'
});	
 
 superdeals.getData({
    'tagName':'Record_Unforgettable_Moments'
});	
	
	
/*获取获取切换tab项的列表数据*/
$('.tab_get_ajax_type1 li').click(function(){
         var index = $(this).index();
         var tagName = $(this).attr('data');
         var conDom = $(this).parents('.tab_btn').next('.tab_con').children().eq(index).find('ul');
         if($.trim(conDom.html())==''){
            superdeals.getData({
                'tagName':tagName,
                'cur':index,
            });
         }
})

/*获取获取切换tab项的列表数据*/
$('.tab_get_ajax_type2 li').click(function(){
         var index = $(this).index();
         var tagName = $(this).attr('data');
         var conDom = $(this).parents('.tab_btn').next('.tab_con').children().eq(index).find('ul');
         if(index == 0){
              if($.trim(conDom.html())==''){
                 superdeals.getData({
                    'tagName':tagName,
                    'cur':index,
                 });
              }
         }else{
              if(conDom.children('li').length < 2){
                  superdeals.getData({
                    'tagName':tagName,
                    'cur':index,
                  });
              }
         }
})

var shareGetDiscount = {
    //判断是否登录 登录删除分享遮罩层 否则跳转登录
    type:null,
    domin:'https://openapi.tomtop.com',
    init: function(){
        if (isLogin()) {
            $('.share_mask').remove();
        }else{
            $('.share_mask').click(function(){
                var curUrl = window.location.href;
                //'https://my.tomtop.com/member/login?backUrl='+url;
                window.location.href = 'https://my.tomtop.com/member/login?backUrl=' + curUrl;
            })
        }
        this.share();
        this.getShareNum();
    },
    share:function(){
        var timer = null;
        var taskId = '5';
        var _this = this;
        var pr_sku='';
        var share_type = {//存储分享渠道的变量
            'facebook': '',
            'twitter': '',
            'google_plusone_share': '',
            'pinterest_share': '',
            'vk': '',
            'odnoklassniki_ru': ''
        };
        for (var i in share_type) {
            var shareBtn = '#share_save_con .at-svc-' + i;
            (function (stype) {
                $(document).on('click', shareBtn, function () {
                    pr_sku = $(this).parents('.share_this').attr('data-sku');
                    if(isLogin()){
                        $('.share_sure,.share_error,.share_success').addClass('hide');
                        if (stype == 'google_plusone_share') {
                            stype = 'Google';
                            taskId = '7';
                        } else if (stype == 'pinterest_share') {
                            stype = 'Pinterest';
                        } else if (stype == 'odnoklassniki_ru') {
                            stype = 'odnoklassniki';
                        }else if(stype == 'twitter'){
                            stype = 'Twitter';
                            taskId = '8';
                        }else if(stype == 'facebook'){
                            stype = 'Facebook';
                            taskId = '6';
                        }else if(stype == 'vk'){
                            stype = 'VK';
                            taskId = '9';
                        }
                        _this.type = stype;
                        show_check(stype);
                        $('.share_sure').removeClass('hide');
                    }else{
                         var curUrl = window.location.href;
                         //'https://my.tomtop.com/member/login?backUrl='+url;
                         window.location.href = 'https://my.tomtop.com/member/login?backUrl=' + curUrl;
                    }
                    
                })
            })(i);
        }
        function show_check(shareType) {
            if($("#shareOpen").size()>0) {
                clearTimeout(timer);
                var timer = setTimeout(function () {
                    var shareTypes = "";
                    if (TT_NS.arr.isInArray(shareTypes, _this.type) == true) {
                        $('.share_success').removeClass('hide');
                        $('.share_sure,.share_error').addClass('hide');
                    } else {
                        $('.share_sure').removeClass('hide');
                        $('.share_error,.share_success').addClass('hide');
                    }
                    TT_NS['dialog'].dialogBg(true, {css:{'z-index':999}});
                    $(".m_share_check").addClass('dialog_show share_discount').attr('data-share-type', shareType).removeClass('shareGetCoupon');
                }, 500);
            }
        }
        $(document).on('click','.share_discount .shareYes',function () {
            $('.share_sure,.share_error,.share_success').addClass('hide');
            $.ajax({
                type: "GET",
                url: _this.domin + '/lottery/lottery/shop/share/save?platform='+_this.type+'&sku='+pr_sku+'',
                // url:'https://uat.tomtop.com/index.php?r=lottery/default/pickupcoupon&channel='+ _this.type +'',
                cache : false,
                dataType:'json',
                headers: {'loginToken':isLogin()},
                success: function (res){
                    if(res.ret == 1){
                        var tips = '';
                        $('.share_sure').removeClass('hide');
                        $(".m_share_check").removeClass('dialog_show');
                        $(".m_share").addClass('dialog_show');
                        $('.share_coupon_text').addClass('hide');
                        $('.share_coupon_text').text(tips);
                        _this.getShareNum();
                        //$('#couponValule').text('$ ' + res.data.subtractMoney);
                        //$('#pickUpCoupon').text('US $' + res.data.subtractMoney);
                    }else if(res.ret == 0 && res.errCode == 80004){
                        var tips = 'Share successful,thanks!';
                        $('.share_success').removeClass('hide');
                        $('.share_success').find('p').text(tips);
                        $('.share_sure,.share_error').addClass('hide');
                    }else if(res.ret == 0 && res.errCode==20002){
                        var tips = 'Share successful,thanks!';
                        $('.share_error').removeClass('hide');
                        $('.share_sure,.share_success').addClass('hide');
                        $('.share_error').find('p').text(tips);
                    }else if(res.ret == -1){
                        var tips = 'Share successful,thanks!';
                        $('.share_success').removeClass('hide');
                        $('.share_sure,.share_error').addClass('hide');
                        $('.share_success').find('p').text(tips);
                    }else{
                        var tips = 'Share failing!';
                        $('.share_error').removeClass('hide');
                        $('.share_sure,.share_success').addClass('hide');
                        $('.share_error').find('p').text(tips);
                    }
                },
                error:function(){
                    console.log('请求错误');
                }
            });
        })
        $(document).on('click','.shareNo',function () {
            $(".m_share_check").removeClass('dialog_show');
            TT_NS['dialog'].dialogBg(false, {css:{'z-index':999}});
        })
    },
    getShareNum:function(){
       var _this = this;
       $('.shareNum').each(function(){
            var objDom = $(this);
            var sku = $(this).parents('.share_this').attr('data-sku');
            $.ajax({
                type: "GET",
                url:_this.domin +'/lottery/lottery/shop/share/total?sku=' + sku,
                // url:'https://uat.tomtop.com/index.php?r=lottery/default/pickupcoupon&channel='+ _this.type +'',
                dataType:'json',
                cache : false,
                success: function (res){
                    if(res.ret == 1){
                        objDom.text(res.data);
                    }
                },
                error:function(){
                    console.log('请求错误');
                }
            });
       })
    }
};
//分享获取折扣
shareGetDiscount.init();
var shareGet = {
    //判断是否登录 登录删除分享遮罩层 否则跳转登录
    type:null,
    init: function(){
        if (isLogin()) {
            $('.share_mask').remove();
        }else{
            $('.share_mask').click(function(){
                var curUrl = window.location.href;
                //'https://my.tomtop.com/member/login?backUrl='+url;
                window.location.href = 'https://my.tomtop.com/member/login?backUrl=' + curUrl;
            })
        }
        this.share();
    },
    share:function(){
        var timer = null;
        var taskId = '5';
        var _this = this;
        var share_type = {//存储分享渠道的变量
            'facebook': '',
            'twitter': '',
            'google_plusone_share': '',
            'pinterest_share': '',
            'vk': '',
            'odnoklassniki_ru': ''
        };
        for (var i in share_type) {
            var shareBtn = '#shareOpen .at-svc-' + i;
            (function (stype) {
                $(document).on('click', shareBtn, function () {
                    if(isLogin()){
                        $('.share_sure,.share_error,.share_success').addClass('hide');
                        if (stype == 'google_plusone_share') {
                            stype = 'google';
                            taskId = '7';

                        } else if (stype == 'pinterest_share') {
                            stype = 'pinterest';
                        } else if (stype == 'odnoklassniki_ru') {
                            stype = 'odnoklassniki';
                        }else if(stype == 'twitter'){
                            taskId = '8';
                        }else if(stype == 'facebook'){
                            taskId = '6';
                        }else if(stype == 'vk'){
                            taskId = '9';
                        }
                        _this.type = stype;
                        show_check(stype);
                        $('.share_sure').removeClass('hide');
                    }else{
                         var curUrl = window.location.href;
                         //'https://my.tomtop.com/member/login?backUrl='+url;
                         window.location.href = 'https://my.tomtop.com/member/login?backUrl=' + curUrl;
                    }
                    
                })
            })(i);
        }
        function show_check(shareType) {
            clearTimeout(timer);
            var timer = setTimeout(function () {
                var shareTypes = "";
                if (TT_NS.arr.isInArray(shareTypes, _this.type) == true) {
                    $('.share_success').removeClass('hide');
                    $('.share_sure,.share_error').addClass('hide');
                } else {
                    $('.share_sure').removeClass('hide');
                    $('.share_error,.share_success').addClass('hide');
                }
                TT_NS['dialog'].dialogBg(true, {css:{'z-index':999}});
                $(".m_share_check").addClass('dialog_show shareGetCoupon').attr('data-share-type', shareType).removeClass('share_discount');
            }, 500);
           
        }
        $(document).on('click','.shareGetCoupon .shareYes',function () {
            $('.share_sure,.share_error,.share_success').addClass('hide');
            $.ajax({
                type: "GET",
                // url:'http://openapi.tomtop.com/lottery/v1/task/do?email='+ userEmail +'&website=1&lotteryCode=BlackFriday1&taskId='+ taskId +'&client=1',
                url:'https://www.tomtop.com/index.php?r=lottery/default/pickupcoupon&channel='+ _this.type +'&shareType=PROMOTIONGAME',
                // url:'https://uat.tomtop.com/index.php?r=lottery/default/pickupcoupon&channel='+ _this.type +'',
                dataType:'json',
                cache : false,
                xhrFields: {
                     withCredentials: true
                },
                crossDomain: true,
                success: function (res){
                    if(res.ret == 1){
                        var tips = '$ 3coupon has been placed in your account';
                        $('.share_sure').removeClass('hide');
                        $(".m_share_check").removeClass('dialog_show');
                        $(".m_share").addClass('dialog_show');
                        $('.share_coupon_text').removeClass('hide');
                        $('.share_coupon_text').text(tips);
                        //$('#couponValule').text('$ ' + res.data.subtractMoney);
                        //$('#pickUpCoupon').text('US $' + res.data.subtractMoney);
                    }else if(res.ret == 0 && res.errCode == 80004){
                        var tips = 'Share successful,but the number of coupons you receive has reached the maximum limit!';
                        $('.share_success').removeClass('hide');
                         $('.share_success').find('p').text(tips);
                        $('.share_sure,.share_error').addClass('hide');
                    }else{
                        $('.share_error').removeClass('hide');
                        $('.share_sure,.share_success').addClass('hide');
                    }
                },
                error:function(){
                    console.log('请求错误');
                }
            });
        })
        $(document).on('click','.shareNo',function () {
            $(".m_share_check").removeClass('dialog_show');
            TT_NS['dialog'].dialogBg(false, {css:{'z-index':999}});
        })
    },
};
shareGet.init();
})




 $(function () {
    $(document).ready(function () {
        $(".floor_nav").click(function () {
            var a = $(".floor_nav").index($(this));
            $(".floor_nav").removeClass("floor_nav_cur");
            $(this).addClass("floor_nav_cur");
            var b = $(".floor").eq(a).offset().top;
            $("html,body").animate({
                scrollTop: b
            })
        })
    });
    $(document).scroll(function () {
        var c = document.documentElement.scrollTop || document.body.scrollTop;
        for (var a = 0; a < $(".floor").length; a++) {
            var b = $(".floor").eq(a).offset().top - document.documentElement.clientHeight / 2;
            if (c >= b) {
                $(".floor_nav").removeClass("floor_nav_cur");
                $(".floor_nav").eq(a).addClass("floor_nav_cur")
            }
        }
    });

    window.onscroll = function () {
        var oNav = document.getElementById("nav");
        var oNav2 = document.getElementById("n_a_v");
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 300) {
            oNav.style.opacity = "1";
            oNav.style.filter = "alpha(opacity:100)";
            oNav2.style.opacity = "1";
            oNav2.style.filter = "alpha(opacity:100)";
        }
        else {
            oNav.style.opacity = "0";
            oNav.style.filter = "alpha(opacity:0)";
            oNav2.style.opacity = "0";
            oNav2.style.filter = "alpha(opacity:0)";
        }
    };
    $(document).ready(function () {
        $("#totop").click(function () {
            $("body,html").animate.scrollTop(0);
        });
    });

    $(document).ready(function () {
        var sUrl = window.location.href;
        var reAid = /\?aid/i;
        var iAid = sUrl.search(reAid);
        if (iAid != -1) {
            var sAid = sUrl.substring(iAid);
            for (var i = 0; i < $("a").length; i++) {
                var sAhref = $("a").eq(i).attr("href") + sAid;
                $("a").eq(i).attr("href", sAhref)
            }
        }
        $(".nav_top").click(function () {
            $("html,body").animate({scrollTop: 0})
        });
        $(".nav_bottom").click(function () {
            var iHeight = $(document).height() - $(window).height();
            $("html,body").animate({scrollTop: iHeight})
        });
        _discount();

        function _discount() {
            var oYj01 = $(".yj01");
            var oXj01 = $(".xj01");
            var oZk01 = $(".zk01");
            if (oZk01.length > 0) {
                for (var i = 0; i < oZk01.length; i++) {
                    var fYj01 = oYj01.eq(i).html();
                    var fXj01 = oXj01.eq(i).html();
                    var iZk = _off01(fYj01, fXj01);
                    oZk01.eq(i).html(iZk)
                }
            }
            var oYj02 = $(".yj02");
            var oXj02 = $(".xj02");
            var oZk02 = $(".zk02");
            var oCj = $(".cj");
            if (oZk02.length > 0) {
                for (var i = 0; i < oZk02.length; i++) {
                    var fYj02 = oYj02.eq(i).html();
                    var fXj02 = oXj02.eq(i).html();
                    var iZk = _off01(fYj02, fXj02);
                    oZk02.eq(i).html(iZk)
                }
            }
            if (oCj.length > 0) {
                for (var i = 0; i < oZk02.length; i++) {
                    var fYj02 = oYj02.eq(i).html();
                    var fXj02 = oXj02.eq(i).html();
                    var iCj = (fYj02 - fXj02).toFixed(2);
                    oCj.eq(i).html(iCj)
                }
            }

            function _off01(fYj, fXj) {
                var fOff = (fYj - fXj) / fYj * 100;
                var iOff = Math.round(fOff);
                return iOff
            }
        }

        $(".menu").click(function () {
            $(this).find("li").eq(0).toggleClass("rotate_01").end().eq(2).toggleClass("rotate_02").end().eq(1).toggle();
            $(".other_content").slideToggle()
        })
    });
    $(document).scroll(function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 200) {
            $(".nav").fadeIn()
        } else {
            $(".nav").fadeOut()
        }
    });

    $(document).ready(function () {
        $('.tagblock').on('click', function () {
            $(".tagblock>.tag").removeClass('choosetag');
            $('.tagblock>.sj').removeClass('choosesj');
            var name = $(this).attr('name')
            $(this).find('.tag').addClass('choosetag');
            $(this).find('.sj').addClass('choosesj');
            $('.contenttag').removeClass('showcontenttag');
            $("." + name).addClass('showcontenttag');
        })

        $('.tagblock2').on('click', function () {
            $(".tagblock2>.tag").removeClass('choosetag');
            $('.tagblock2>.sj').removeClass('choosesj');
            var name = $(this).attr('name')
            $(this).find('.tag').addClass('choosetag');
            $(this).find('.sj').addClass('choosesj');
            $('.contenttag_2').removeClass('showcontenttag');
            $("." + name).addClass('showcontenttag');
        })

        $('.tagblock3').on('click', function () {
            $(".tagblock3>.tag").removeClass('choosetag');
            $('.tagblock3>.sj').removeClass('choosesj');
            var name = $(this).attr('name')
            $(this).find('.tag').addClass('choosetag');
            $(this).find('.sj').addClass('choosesj');
            $('.contenttag_3').removeClass('showcontenttag');
            $("." + name).addClass('showcontenttag');
        })

        $('.tagblock4').on('click', function () {
            $(".tagblock4>.tag").removeClass('choosetag');
            $('.tagblock4>.sj').removeClass('choosesj');
            var name = $(this).attr('name')
            $(this).find('.tag').addClass('choosetag');
            $(this).find('.sj').addClass('choosesj');
            $('.contenttag_4').removeClass('showcontenttag');
            $("." + name).addClass('showcontenttag');
        })

        $('.tagblock5').on('click', function () {
            $(".tagblock5>.tag").removeClass('choosetag');
            $('.tagblock5>.sj').removeClass('choosesj');
            var name = $(this).attr('name')
            $(this).find('.tag').addClass('choosetag');
            $(this).find('.sj').addClass('choosesj');
            $('.contenttag_5').removeClass('showcontenttag');
            $("." + name).addClass('showcontenttag');
        })


    })
    $(window).scroll(function () {
        var yheight1 = window.pageYOffset; 
        if (yheight1 > 800) {
            $("#sidebar").css('display', 'inline-block')
        } else {
            $("#sidebar").css('display', 'none')
        }

    })
})