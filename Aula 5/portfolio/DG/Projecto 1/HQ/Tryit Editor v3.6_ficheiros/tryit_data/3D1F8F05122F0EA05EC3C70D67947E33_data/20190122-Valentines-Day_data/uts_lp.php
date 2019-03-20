var uts_now = '2019-03-20 06:54:37';
var uts_dnt = '0';
var uts_lc_cookievalue = '';
// Dynamic end
var lc_aid='';var uts_cj_guy=!1;var uts_ss_guy=!1;var set_nlt_cookie=!1;var uts_location='lp';function ScriptFunction(path){var x=document.createElement("SCRIPT");x.src=path;try{document.body.appendChild(x)}
catch(e){document.head.appendChild(x)}}
function ImgFunction(path){var x=document.createElement("IMG");x.setAttribute("src",path);x.setAttribute("height","1");x.setAttribute("width","1");try{document.body.appendChild(x)}
catch(e){document.head.appendChild(x)}}
function uts_readCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++)
{var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length)}
return null}
function uts_getHostName(url){var match=url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);if(match!=null&&match.length>2&&typeof match[2]==='string'&&match[2].length>0){return match[2]}
else{return null}}
function uts_getDomain(url){var hostName=uts_getHostName(url);var domain=hostName;if(hostName!=null){var parts=hostName.split('.').reverse();if(parts!=null&&parts.length>1){domain=parts[1]+'.'+parts[0];if(hostName.toLowerCase().indexOf('.co.uk')!=-1&&parts.length>2){domain=parts[2]+'.'+domain}}}
return domain}
function uts_getQueryStringValue(key){return decodeURIComponent(uts_uri.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(key).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}
var uts_trafficname='usource';var uts_method='lifo';var uts_duration=30;var uts_customerid='149736';var uts_cgid='900862';var uts_nlt_campaignid='';var nlt_name='';var uString=new Array();var uCookieVal=new Array();uString.push(uts_trafficname+'=');uCookieVal.push('lc');uString.push('lctid=');uCookieVal.push('lc');if(document.documentURI){var uts_uri=document.documentURI}else{var uts_uri=window.location.href}
var uts_domain=uts_getDomain(uts_uri);if(!uString){var uString=new Array();var uCookieVal=new Array();uString.push(uts_trafficname+'=');uCookieVal.push('lc')}
var uts_cookieval='';for(i=0;i<uString.length;i++){var regex=new RegExp(uString[i]);if(uts_uri.search(regex)>0){if(uString[i]==uts_trafficname+'='){uts_cookieval=uts_uri.substr(uts_uri.search(regex)+uString[i].length,2)}else{uts_cookieval=uCookieVal[i]}
break}}
if(uts_cookieval){var new_promo=!0}
if(lc_aid>""&&nlt_name>""){var uts_cookieval=nlt_name}
uts_cookieval=uts_cookieval.toLowerCase();if(uts_cookieval.search(/[0-9a-z]{2}/)<0){uts_cookieval=""}
var lc_aref="";if(window.document.referrer&&window.document.referrer!=''){lc_aref=window.document.referrer}
else if(document.referrer&&document.referrer!=''){lc_aref=document.referrer}
else if(top.document.referrer&&top.document.referrer!=''){lc_aref=top.document.referrer}
else if(self.document.referrer&&self.document.referrer!=''){lc_aref=self.document.referrer}
var uts_wcookie=!0;if(!uts_cookieval){uts_cookieval=uts_readCookie(uts_trafficname)}
if(!uts_cookieval){uts_cookieval=uts_lc_cookievalue}
if(!uts_cookieval){var set_nlt_cookie=!0}
var exdate=new Date();var c_lctid='';var ulctid=uts_getQueryStringValue('lctid');if(uts_getQueryStringValue('lc_aid')){var email_url='//www.linkconnector.com/dev/ernie/test_mailme.php?email=ernie.st.gelais@linkconnector.com&source=lc_aid_'+uts_cgid+'&uts_uri='+uts_uri}
if(!lc_val){var lc_val=uts_getQueryStringValue('lctid')}
if(lc_val&&!uts_readCookie('uts_lctid')){exdate.setTime(exdate.getTime()+(uts_duration*24*60*60*1000));document.cookie='uts_lctid='+lc_val+'; expires='+exdate.toUTCString()+'; path=/; domain=.'+uts_domain+';';var c_lctid=lc_val;if(isNaN(lc_val)){var email_url='//www.linkconnector.com/dev/ernie/test_mailme.php?email=ernie.st.gelais@linkconnector.com&source=LCVal'+uts_cgid+'&uts_uri='+uts_uri+'&lc_val='+lc_val}}
if(lc_val!=ulctid&&ulctid>''&&lc_val>''){var email_url='//www.linkconnector.com/dev/ernie/test_mailme.php?email=ernie.st.gelais@linkconnector.com&source=LCValDiff'+uts_cgid+'&uts_uri='+uts_uri+'&lc_val='+lc_val+'&ulctid='+ulctid}
var uts_samedomain=!1;if(uts_getDomain(lc_aref)==uts_domain){uts_samedomain=!0}
if(uts_cookieval&&!uts_samedomain){if(uts_method=='fifo'&&document.cookie.indexOf(uts_trafficname)>=0){uts_wcookie=!1}
if(uts_wcookie){exdate.setTime(exdate.getTime()+(uts_duration*24*60*60*1000));document.cookie=uts_trafficname+'='+uts_cookieval+'; expires='+exdate.toUTCString()+'; path=/; domain=.'+uts_domain+';';var uts_curl='//www.linkconnector.com/js/uts_landing.php?cgid='+uts_cgid+'&cval='+uts_cookieval+'&cdur='+uts_duration+'&aref='+lc_aref+'&dnt='+uts_dnt;if(c_lctid){uts_curl+='&source=uts&lctid='+c_lctid}
if(new_promo){ImgFunction(uts_curl)}}}
if(uts_cj_guy){var cj_val=uts_getQueryStringValue('cjevent');if(cj_val){exdate.setTime(exdate.getTime()+(uts_duration*24*60*60*1000));document.cookie='uts_cjevent='+cj_val+'; expires='+exdate.toUTCString()+'; path=/; domain=.'+uts_domain+';'}}
if(uts_ss_guy){var ss_val=uts_getQueryStringValue('sscid');if(ss_val){exdate.setTime(exdate.getTime()+(uts_duration*24*60*60*1000));document.cookie='uts_sscid='+ss_val+'; expires='+exdate.toUTCString()+'; path=/; domain=.'+uts_domain+';'}}
if(document.cookie.indexOf('LCUTS_UID_'+uts_cgid)<0){exdate.setTime(exdate.getTime()+(1/24*24*60*60*1000));document.cookie='LCUTS_UID_'+uts_cgid+'='+uts_cgid+'; expires='+exdate.toUTCString()+'; path=/; domain=.'+uts_domain+';'}