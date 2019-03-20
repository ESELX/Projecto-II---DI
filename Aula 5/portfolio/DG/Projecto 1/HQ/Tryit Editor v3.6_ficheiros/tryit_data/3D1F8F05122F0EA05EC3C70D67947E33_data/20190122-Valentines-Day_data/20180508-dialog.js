/**
 * @functionName:NS['dialog']
 * @author:      lijianhui
 * @date:        20161117
 * @param:       
 * @description: 整站弹层js
 * 代码统一。
 */
var TT_NS = (function(NS, $){
	NS['dialog'] = 
    {
        'init':function(){
             var _this = this;
             _this.globalCloseDialog();
             _this.operationDialog();
        },
        /*
        作者: lijianhui
        名称: toast提示倒计时
        参数: 无
        返回: 无
        */
        toastTime: {
            oToastTime: null,
            oCountdown: null
        },
        
        /*
        作者: lijianhui
        名称: toast提示
        参数: {content:'提示内容',countdown:true/false(是否要倒计时),time:3(n秒后自动隐藏)}
        返回: 无
        */
        toast: function (oParameter) {
            var _parameter = oParameter || {};
            var sContent = _parameter.content || 'There is no incoming message!';
            var isCountdown = _parameter.countdown || false;
            var iTime = _parameter.time || 3;
            //生成结构
            if($('#bm_toast').length == 0) {
                var newElems = $('<div id="bm_toast">' +
                                    '<i></i>' +
                                    '<p></p>' +
                                '</div>');
                $('body').append(newElems);
            };
            $('#bm_toast').find('i').text(iTime);
            $('#bm_toast').find('p').text(sContent);
            $('#bm_toast').animate({},function() {
                $('#bm_toast').addClass('show');
            });
            //倒计时
            if(isCountdown){
                $('#bm_toast i').css('display','block');
                clearInterval(NS['dialog'].oCountdown);
                NS['dialog'].oCountdown = setInterval(function () {
                    $('#bm_toast i').text(--iTime);
                },1000);
            } else {
                $('#bm_toast i').css('display','none');
            };
            clearTimeout(NS['dialog'].oToastTime);
            NS['dialog'].oToastTime = setTimeout(function () {
                $('#bm_toast').removeClass('show');
                clearInterval(NS['dialog'].oCountdown);
                clearInterval(NS['dialog'].oToastTime);
            },iTime * 1000);
        },
        /*
        作者: lijianhui
        名称: 开启对话框黑底
        参数: 无
        返回: 无
        */
        openDialogBg: function (oParameter) {
            var _oParameter = oParameter || {};
            var sNewElems = $('<div class="bm_dialogBg"></div>');
            if(_oParameter.css) {
                sNewElems.css(_oParameter.css);
            };
            $('body').append(sNewElems);
        },
        /*
        作者: lijianhui
        名称: 开启/关闭对话框黑底
        参数: true/false(开启/关闭)
        返回: 无
        */
        dialogBg: function (bSwitch, oParameter){
            if(bSwitch === false){
                $('.bm_dialogBg').last().remove();
            } else if(bSwitch === true){
                NS['dialog'].openDialogBg(oParameter);
            } else {
                if($('.bm_dialogBg').length == 0) {
                    NS['dialog'].openDialogBg(oParameter);
                } else {
                    $('.bm_dialogBg').last().remove();
                };
            };
        },
        /*
        作者: lijianhui
        名称: 对话框回调函数
        参数: 无
        返回: 无
        */
        callbackFn: {
            'callback':false,
            'fn': function() {}
        },
        /*
        作者: lijianhui
        名称: 提示对话框
        参数:  {addClass:className,content:'提示的内容',btnText:'按钮文本',shake:true(是否抖动)}
        回调： function(只有点击确定按钮返回true,其它为false)
        返回: 无
        */
        alert: function (oParameter,fn) {
            var _parameter = oParameter || {};
            var sAddClass = _parameter.addClass || '';
            var sContent = _parameter.content || '没有内容';
            var sBtnText = _parameter.btnText || 'OK';
            var isShake = _parameter.shake || false;

            var sNewElems = $('<div class="bm_dialog alert dialog_show '+ sAddClass +'">' +
                                    '<i></i>' +
                                    '<div class="dialog_c">' +
                                        '<div class="dialog_body">' +  sContent +'</div>' +
                                        '<div class="dialog_foot">' +
                                            '<input type="button" value="'+ sBtnText +'" class="bm_btn confirm cancel" />' +
                                        '</div>' +
                                        // '<i class="icon pc-icon-close close_dialog"></i>' +
                                    '</div>' +
                                '</div>');
            if(isShake){
                sNewElems.addClass('shakeX');
            };
            NS['dialog'].dialogBg(true);
            $('body').append(sNewElems);
            NS['dialog'].callbackFn['callback'] = false;
            if(fn) {
                NS['dialog'].callbackFn['callback'] = true;
                NS['dialog'].callbackFn['fn'] = fn;
            };
        },
        /*
        作者: lijianhui
        名称: 询问对话框
        参数:  {addClass:className,title:'标题内容',content:'提示的内容',btnTextA:'按钮文本A',btnTextB:'按钮文本B',shake:true(是否抖动)}
        回调： function(只有点击确定按钮返回true,其它为false)
        返回: 无
        */
        confirm: function (oParameter,fn) {
            var _parameter = oParameter || {};
            var sAddClass = _parameter.addClass || '';
            var sTitle = _parameter.title || false;
            var sContent = _parameter.content || '没有内容';
            var sBtnTextA = _parameter.btnTextA || 'YES';
            var sBtnTextB = _parameter.btnTextB || 'OK';
            var isShake = _parameter.shake || false;
            var sNewElems = null;
            var sNewElems = $('<div class="bm_dialog confirm dialog_show '+ sAddClass +'">' +
                            '<i></i>' +
                            '<div class="dialog_c">' +
                                '<div class="dialog_head">' + sTitle +'</div>' +
                                '<div class="dialog_body">' + sContent + '</div>' +
                                '<div class="dialog_foot clearfix">' +
                                    '<input type="button" value="' + sBtnTextA + '" class="bm_btn_A minor cancel false" />' +
                                    '<input type="button" value="' + sBtnTextB + '" class="bm_btn confirm true" />' +
                                   
                                '</div>' +
                                //'<i class="icon_cross close close_dialog"></i>' +
                            '</div>');
            if(!(sTitle)) {
                sNewElems.find('.dialog_head').remove();
            };
            if(isShake){
                sNewElems.addClass('shakeX');
            };
            NS['dialog'].dialogBg(true);
            $('body').append(sNewElems);
            NS['dialog'].callbackFn['callback'] = false;
            if(fn) {
                NS['dialog'].callbackFn['callback'] = true;
                NS['dialog'].callbackFn['fn'] = fn;
            };
        },
        /*
        作者: lijianhui
        名称: 输入对话框
        参数:  {addClass:className,title:'标题内容',content:'默认输入内容',btnText:'按钮文本',shake:true(是否抖动)}
        回调： function(只有点击确定按钮返回输入的内容,其它为false)
        返回: 无
        */
        prompt: function (oParameter,fn) {
            var _parameter = oParameter || {};
            var sAddClass = _parameter.addClass || '';
            var sTitle = _parameter.title || false;
            var sContent = _parameter.content || '请输入...';
            var sBtnText = _parameter.btnText || 'Submit';
            var isShake = _parameter.shake || false;

            var sNewElems = $('<div class="bm_dialog prompt dialog_show '+ sAddClass +'">' +
                                    '<i></i>' +
                                    '<div class="dialog_c">' +
                                        '<div class="dialog_head">' + sTitle + '</div>' +
                                        '<div class="dialog_body">' +
                                             '<textarea>' + sContent + '</textarea>' +
                                        '</div>' +
                                        '<div class="dialog_foot">' +
                                            '<input type="button" value="' + sBtnText + '" class="bm_btn caution" />' +
                                        '</div>' +
                                        '<i class="icon pc-icon-close close_dialog"></i>' +
                                    '</div>' +
                                '</div>');
            if(!(sTitle)) {
                sNewElems.find('.dialog_head').remove();
            };
            if(isShake){
                sNewElems.addClass('shakeX');
            };
            NS['dialog'].dialogBg(true);
            $('body').append(sNewElems);
            NS['dialog'].callbackFn['callback'] = false;
            if(fn) {
                NS['dialog'].callbackFn['callback'] = true;
                NS['dialog'].callbackFn['fn'] = fn;
            };
        },
        /*
        作者: lijianhui
        名称: 输入对话框
        参数:  {addClass:className,title:'标题内容',content:'默认输入内容',btnText:'按钮文本',shake:true(是否抖动)}
        回调： function(只有点击确定按钮返回输入的内容,其它为false)
        返回: 无
        */
        custom: function (oParameter,fn) {
            var _parameter = oParameter || {};
            var sAddClass = _parameter.addClass || '';
            var sContent = _parameter.content || '请输入...';
            var mask = _parameter.mask && true;
            var sNewElems = $('<div class="bm_dialog custom dialog_show '+ sAddClass +'">' +
                                    '<i></i>' +
                                    '<div class="dialog_c">' +
                                        sContent +
                                        '<i class="icon icon-close close_dialog"></i>' +
                                    '</div>' +
                                '</div>');
            if(mask){
               NS['dialog'].dialogBg(true);
            }
            $('body').append(sNewElems);
        },
        closeDialog: function (obj) {
            if(obj.hasClass('alert') || obj.hasClass('confirm') || obj.hasClass('prompt') || obj.hasClass('custom')) {
                obj.remove();
                if(NS['dialog'].callbackFn['callback']) {
                     NS['dialog'].callbackFn['fn'](false); 
                };
            } else {
                obj.removeClass('dialog_show');
            };
            NS['dialog'].dialogBg(false);
        },
        /*
        作者: lijianhui
        名称: 全局关闭对话框
        参数: 无
        返回: 无
        */
        globalCloseDialog: function () {
            //点击对话框的假黑底
            $(document).on('click','.bm_dialog',function () {
                NS['dialog'].closeDialog($(this));
            });
            //点击对话框的关闭按钮
            $(document).on('click','.close_dialog',function () {
                var _this = $(this).parents('.bm_dialog');
                NS['dialog'].closeDialog(_this);
            });
            //点击对话框本身阻止事件冒泡
            $(document).on('click','.dialog_c',function (e) {
                e.stopPropagation();
            });
            //点击黑底
            $(document).on('click','.bm_dialogBg',function () {
                $('.hide_l,.hide_t,.hide_r,.hide_b').removeClass('show');
                NS['dialog'].dialogBg(false);
            });
             //点击关闭按钮黑底
            $(document).on('click','.close_show',function () {
                $('.hide_l,.hide_t,.hide_r,.hide_b').removeClass('show');
                NS['dialog'].dialogBg(false);
            });
        },
        /*
        作者: lijianhui
        名称: 全局操作对话框按钮
        参数: 无
        返回: 无
        */
        operationDialog: function () {
            //点击提示对话框的确定
            $(document).on('click','.alert .dialog_foot .bm_btn',function () {
                $(this).parents('.bm_dialog').remove();
                NS['dialog'].dialogBg(false);
                if(NS['dialog'].callbackFn['callback']) {
                    NS['dialog'].callbackFn['fn'](true);
                };
            });
            //点击询问对话框的是
            $(document).on('click','.bm_dialog .true',function () {
                $(this).parents('.bm_dialog').remove();
                NS['dialog'].dialogBg(false);
                if($(this).parents('.bm_dialog').hasclass('confirm')){
                    var obj = $(this).parents('.confirm');
                    if(NS['dialog'].callbackFn['callback']) {
                       NS['dialog'].callbackFn['fn'](true,obj);
                    };
                }else{
                    alert(123);
                    if(NS['dialog'].callbackFn['callback']) {
                       NS['dialog'].callbackFn['fn'](true);
                    };
                }
            });
            //点击询问对话框的否
            $(document).on('click','.bm_dialog .false',function () {
                $(this).parents('.bm_dialog').remove();
                NS['dialog'].dialogBg(false);
                if(NS['dialog'].callbackFn['callback']) {
                    NS['dialog'].callbackFn['fn'](false);
                };
            });
            //点击输入对话框的确定
            $(document).on('click','.prompt .dialog_foot .bm_btn',function () {
                $(this).parents('.bm_dialog').remove();
                NS['dialog'].dialogBg(false);
                var str = $(this).parents('.bm_dialog').find('textarea').val();
                if(NS['dialog'].callbackFn['callback']) {
                    NS['dialog'].callbackFn['fn'](str);
                };
            });
        }
    };
    NS['dialog'].init();
    return NS;
})(window.TT_NS || {}, jQuery);
