(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){module.exports="1.5.28"},{}],2:[function(require,module,exports){module.exports={consentLinkId:"digitrust-optout",locatorFrameName:"__dtLocator"}},{}],3:[function(require,module,exports){module.exports={current:"prod"}},{}],4:[function(require,module,exports){module.exports={en:{memberId:"[DigiTrust Client Error] Missing member ID, add the member ID to the function call options",postMessageOrigin:"[DigiTrust Client Error] Origin of postMessage call was not the official DigiTrust domain",iframeError:"[DigiTrust Iframe Error] Client could not connect to the iframe",appManifestXHR:"[DigiTrust Publisher Error] Client could not retrieve Publisher App Manifest JSON file",appManifestInvalid:"[DigiTrust Publisher Error] Publisher App Manifest does not contain valid JSON",appNameInvalid:"[DigiTrust App Error] App name does not match available apps in manifest.json",iframeMissingMember:"[DigiTrust Iframe Error] Client did not send Member string",iframeMissingAppName:"[DigiTrust Iframe Error] Client did not send App Name string"}}},{}],5:[function(require,module,exports){module.exports={gdprLanguages:["bg","hr","tr","cs","da","et","fi","fr","fr-be","fr-fr","fr-lu","fr-mc","fr-ch","de","de-at","de-de","de-li","de-lu","de-ch","el","hu","gd-ie","ga","it","it-ch","lv","lt","lb","mt","nl","nl-be","pl","pt","rm","ro","ro-mo","sk","sl","es","es-es","cy","sv","sv-fi","sv-sv","en-gb","en-ie","mo","ru-mo","eu","ca","co","fo","fy","fur","gd","gl","is","la","no","nb","nn","oc","sc","sb","hsb","vo","wa","ar","ast","br","eo"]}},{}],6:[function(require,module,exports){module.exports={prod:{urls:{digitrustHostPath:"https://cdn.digitru.st/prod/1.5.28/",digitrustRedirect:"https://cdn.digitru.st/prod/1.5.28/redirect.html",digitrustIframe:"https://cdn.digitru.st/prod/1.5.28/dt.html",digitrustIdService:"https://cdn-cf.digitru.st/id/v1",optoutInfo:"http://www.digitru.st/about-this-notice/",adblockCheck:"http://stats.aws.rubiconproject.com/"},cookie:{version:2,producer:"1CrsdUNAo6",publisher:{domainKeyValue:"",pathKeyValue:"path=/;",maxAgeMiliseconds:6048e5,userObjectKey:"DigiTrust.v1.identity"},digitrust:{domainKeyValue:"domain=.digitru.st;",pathKeyValue:"path=/;",maxAgeMiliseconds:15768e7,userObjectKey:"DigiTrust.v1.identity",resetKey:"DeleteEverything",challenge:"DTChal",optout:"optout",optoutUser:{id:"",privacy:{optout:true}},errorUser:{error:true}}},iframe:{timeoutDuration:1e4,postMessageOrigin:"https://cdn.digitru.st"},crypto:{serverCryptoRate:.2},logging:{enable:false,level:"ERROR"},gvlVendorId:64},build:{urls:{digitrustHostPath:"https://cdn.digitru.st/prod/1.5.25/",digitrustRedirect:"https://cdn.digitru.st/prod/1.5.25/redirect.html",digitrustIframe:"https://cdn.digitru.st/prod/1.5.25/dt.html",digitrustIdService:"https://cdn-cf.digitru.st/id/v1",optoutInfo:"http://www.digitru.st/about-this-notice/",adblockCheck:"http://stats.aws.rubiconproject.com/"},cookie:{version:2,producer:"1CrsdUNAo6",publisher:{domainKeyValue:"",pathKeyValue:"path=/;",maxAgeMiliseconds:6048e5,userObjectKey:"DigiTrust.v1.identity"},digitrust:{domainKeyValue:"domain=.digitru.st;",pathKeyValue:"path=/;",maxAgeMiliseconds:15768e7,userObjectKey:"DigiTrust.v1.identity",resetKey:"DeleteEverything",challenge:"DTChal",optout:"optout",optoutUser:{id:"",privacy:{optout:true}},errorUser:{error:true}}},iframe:{timeoutDuration:1e4,postMessageOrigin:"https://cdn.digitru.st"},crypto:{serverCryptoRate:.8},logging:{enable:false,level:"ERROR"},gvlVendorId:64},dev:{urls:{digitrustHostPath:"//digitrust.s3.amazonaws.com/dev/v1/",digitrustRedirect:"//digitrust.s3.amazonaws.com/dev/v1/redirect.html",digitrustIframe:"//digitrust.s3.amazonaws.com/dev/v1/dt.html",digitrustIdService:"//lambda-dev.digitru.st/id/v1",optoutInfo:"//digitrust.s3.amazonaws.com/dev/v1/info.html",adblockCheck:"//stats.aws.rubiconproject.com/"},cookie:{version:2,producer:"SIx8cS71Eo",publisher:{domainKeyValue:"",pathKeyValue:"path=/;",maxAgeMiliseconds:6048e5,userObjectKey:"DigiTrust.v1.identity"},digitrust:{domainKeyValue:"domain=digitrust.s3.amazonaws.com;",pathKeyValue:"path=/;",maxAgeMiliseconds:15768e7,userObjectKey:"DigiTrust.v1.identity",resetKey:"DeleteEverything",challenge:"DTChal",optout:"optout",optoutUser:{id:"",privacy:{optout:true}},errorUser:{error:true}}},iframe:{timeoutDuration:1e4,postMessageOrigin:"http://digitrust.s3.amazonaws.com"},crypto:{serverCryptoRate:1},logging:{level:"DEBUG"},gvlVendorId:64},local:{urls:{digitrustHostPath:"//localhost/dist/",digitrustRedirect:"//localhost/dist/redirect.html",digitrustIframe:"//local.digitru.st/dist/dt_debug.html",digitrustIdService:"http://local.digitru.st/misc/faked_id_service_v1.json",optoutInfo:"//localhost/dist/info.html",adblockCheck:"//stats.aws.rubiconproject.com/"},cookie:{version:2,producer:"SIx8cS71Eo",publisher:{domainKeyValue:"domain=;",pathKeyValue:"path=/;",maxAgeMiliseconds:6048e5,userObjectKey:"DigiTrustLOCALPUB.v1.identity"},digitrust:{domainKeyValue:"domain=;",pathKeyValue:"path=/;",maxAgeMiliseconds:15768e7,userObjectKey:"DigiTrustLOCALDT.v1.identity",resetKey:"DeleteEverything",challenge:"DTChal",optout:"optout",optoutUser:{id:"",privacy:{optout:true}},errorUser:{error:true}}},iframe:{timeoutDuration:1e4,postMessageOrigin:"http://local.digitru.st"},crypto:{serverCryptoRate:1},logging:{level:"DEBUG"},gvlVendorId:64}}},{}],7:[function(require,module,exports){module.exports={member:"",site:"",sample:1,redirects:false,adblocker:{detection:false,blockContent:false,userMessage:"Did you know advertising pays for this brilliant content? Please disable your ad blocker, then press the Reload button below ... and thank you for your visit!",popupFontColor:"#5F615D",popupBackgroundColor:"#FFFFFF",logoSrc:null,logoText:null,pictureSrc:null},consent:{requires:"none",userMessage:'This site uses cookies and is a member of DigiTrust, a non-profit consortium of companies working together to improve your Web experience.  By clicking on this page you agree to the use of cookies. This notice only appears once. <a href="http://www.digitru.st/about-this-notice/">You can read more or opt out of DigiTrust here</a>.',popupFontColor:"#ffffff",popupBackgroundColor:"#000000"},apps:{manifest:null}}},{}],8:[function(require,module,exports){module.exports={type:"RSA-OAEP",hash:{name:"SHA-1"},version:4,spki:"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgrdFWb07eQFRtdmXcnVRpSZFoibNFMZDEZHn71j6oa5Ohw7miu/Cpl77h2Pp/0bLt3dHr6RcinqA9cck2nPjJEw2svSzJOHY1409Cxr7cyAhfmueLazL/C8DOyFSe3e4QGNsJtPTlNy6Etmnb4dvctpm/nQ2nDaPw5wnb0hWI6Ik7wtvjbH9SaCRlXcyEKpF1oXy55jDJeovSxQz9eL+bgObD2Lz43gidU4B/zPhbNI+KmMkV539okyFfmcBwrCQARkh9d3eI8kAH+PptTalApVAefPSGZdWkSvkNw7HEbcnLMWWWXKeF7z2lMBd7RbnCyBUmgtHLY6d8HX6JPWB6QIDAQAB",jwk:{kty:"RSA",kid:"fb8cd98a-d21b-4cd6-8b3c-182727effee4",n:"grdFWb07eQFRtdmXcnVRpSZFoibNFMZDEZHn71j6oa5Ohw7miu_Cpl77h2Pp_0bLt3dHr6RcinqA9cck2nPjJEw2svSzJOHY1409Cxr7cyAhfmueLazL_C8DOyFSe3e4QGNsJtPTlNy6Etmnb4dvctpm_nQ2nDaPw5wnb0hWI6Ik7wtvjbH9SaCRlXcyEKpF1oXy55jDJeovSxQz9eL-bgObD2Lz43gidU4B_zPhbNI-KmMkV539okyFfmcBwrCQARkh9d3eI8kAH-PptTalApVAefPSGZdWkSvkNw7HEbcnLMWWWXKeF7z2lMBd7RbnCyBUmgtHLY6d8HX6JPWB6Q",e:"AQAB",alg:"RSA-OAEP",ext:true,key_ops:["encrypt"]}}},{}],9:[function(require,module,exports){var DigiTrust=require("./modules/DigiTrust");if(window!==undefined&&window.DigiTrust==null){window.DigiTrust=DigiTrust}},{"./modules/DigiTrust":10}],10:[function(require,module,exports){"use strict";var env=require("../config/env.json").current;var configGeneral=require("../config/general.json")[env];var configErrors=require("../config/errors.json");var configInitializeOptions=require("../config/initializeOptions.json");var helpers=require("./helpers");var DigiTrustConsent=require("./DigiTrustConsent");var DigiTrustCookie=require("./DigiTrustCookie");var DigiTrustCommunication=require("./DigiTrustCommunication");var DigiTrustCrypto=require("./DigiTrustCrypto");var LOGID="Digitrust";var logObj=require("./logger");var log=logObj.createLogger(LOGID,{level:"ERROR",enabled:false});var VERSION=require("../_version.js");var DigiTrust={version:VERSION,isClient:false,_config:{configGeneral:configGeneral,errors:configErrors,initOptions:configInitializeOptions,crypto:DigiTrustCrypto},cookie:DigiTrustCookie,util:helpers};var noop=function(){};DigiTrust.initializeOptions={};var isMemberIdValid=function(memberId){if(memberId&&memberId.length>0){return true}else{throw configErrors.en.memberId}};DigiTrust._setDigiTrustOptions=function(options){var opts=Object.assign({},configInitializeOptions,options);window.DigiTrust.initializeOptions=opts;if(opts.logging==null){opts.logging=configGeneral.logging}if(opts.logging!=null){if(opts.logging.enable==false){log=logObj.createLogger(LOGID,{level:"ERROR"});log.enabled=false}else{if(opts.logging.level==null){opts.logging.level="INFO"}log=logObj.createLogger(LOGID,opts.logging)}}return window.DigiTrust.initializeOptions};var initInternal=function(options,initializeCallback){log.debug("init Internal");try{if(initializeCallback===undefined){initializeCallback=noop}var identityResponseObject={success:false};options=DigiTrust._setDigiTrustOptions(options);log.debug("init options completed");if(Math.random()>options.sample){return initializeCallback(identityResponseObject)}if(!isMemberIdValid(options.member)){return initializeCallback(identityResponseObject)}DigiTrustConsent.hasConsent(null,function(consent){if(consent){DigiTrustCookie.getUser(options,function(err,identityObject){if(!err){identityResponseObject.success=true;identityResponseObject.identity=identityObject}return initializeCallback(identityResponseObject)})}else{return initializeCallback(identityResponseObject)}})}catch(e){log.error("Error in DigiTrust initializer",e);return initializeCallback({success:false})}};DigiTrust.initialize=function(options,initializeCallback){var document=window.document;var ready=document.readyState;DigiTrust.isClient=true;if(!ready||ready=="loading"){document.addEventListener("DOMContentLoaded",function(event){DigiTrust.initialize(options,initializeCallback)})}else{initInternal(options,initializeCallback)}};DigiTrust.getUser=function(options,callback){options=DigiTrust._setDigiTrustOptions(options);var async=typeof callback==="function"?true:false;var identityResponseObject={success:false};try{if(!isMemberIdValid(options.member)){return async===false?identityResponseObject:callback(identityResponseObject)}if(async===false){var identityJSON=DigiTrustCookie.getUser();if(!helpers.isEmpty(identityJSON)){identityResponseObject.success=true;identityResponseObject.identity=identityJSON}return identityResponseObject}else{DigiTrustConsent.hasConsent(null,function(consent){if(consent){options.ignoreLocalCookies=true;DigiTrustCookie.getUser(options,function(err,identityObject){if(err){return callback(identityResponseObject)}else{identityResponseObject.success=true;identityResponseObject.identity=identityObject;return callback(identityResponseObject)}})}else{return callback(identityResponseObject)}})}}catch(e){return async===false?identityResponseObject:callback(identityResponseObject)}};DigiTrust.sendReset=function(options,callback){DigiTrustCommunication.sendReset()};module.exports=DigiTrust},{"../_version.js":1,"../config/env.json":3,"../config/errors.json":4,"../config/general.json":6,"../config/initializeOptions.json":7,"./DigiTrustCommunication":11,"./DigiTrustConsent":12,"./DigiTrustCookie":13,"./DigiTrustCrypto":14,"./helpers":17,"./logger":18}],11:[function(require,module,exports){"use strict";var env=require("../config/env.json").current;var configGeneral=require("../config/general.json")[env];var configErrors=require("../config/errors.json");var consts=require("../config/constants.json");var LOGID="DigiTrustCommunication";var logObj=require("./logger");var log=logObj.createLogger(LOGID,{level:"ERROR"});var logInitialized=false;var pubsub=require("./MinPubSub").createPubSub({host:location.host});var DC={};var Dt="DigiTrust",kID=Dt+".identity",kIframe=Dt+".iframe";var MKEY={ready:kIframe+".ready",ifrErr:kIframe+".error",idSync:kID+".response.sync",idResp:kID+".response",idReset:kID+".reset",idGet:kID+".request"};var newConfig=null;function getConfig(){var opts=window.DigiTrust.initializeOptions;var env=opts&&opts.environment;if(newConfig!=null){return newConfig}var i;var config=Object.assign({},configGeneral);var keys=["urls","iframe"];var setVals=function(target,source,key){try{var k;if(source[key]==null){return}if(target[key]==null){if(source[key]==null){return}}else{target[key]={}}for(k in source[key]){if(source[key].hasOwnProperty(k)){target[key][k]=source[key][k]}}}catch(ex){}};for(i=0;i<keys.length;i++){setVals(config,env,keys[i])}newConfig=config;return newConfig}function initOptions(){initLog()}function isFunc(fn){return typeof fn==="function"}function initLog(){if(logInitialized){return}var opts=window.DigiTrust.initializeOptions;if(opts.logging!=null){if(opts.logging.enable==false){log=logObj.createLogger(LOGID,{level:"ERROR"});log.enabled=false}else{if(opts.logging.level==null){opts.logging.level="INFO"}log=logObj.createLogger(LOGID,opts.logging)}}logInitialized=true}DC.iframe=null;DC.iframeStatus=0;function _messageHandler(evt){var conf=getConfig();var msgKey=evt.data.type;if(evt.origin!==conf.iframe.postMessageOrigin){switch(msgKey){case"Digitrust.shareIdToIframe.request":if(DigiTrust){DigiTrust.getUser({member:window.DigiTrust.initializeOptions.member},function(resp){resp.type="Digitrust.shareIdToIframe.response";evt.source.postMessage(resp,evt.origin)})}else{console.log("DigiTrust not found")}break;default:log.warn("message origin error. allowed: "+conf.iframe.postMessageOrigin+" \nwas from: "+evt.origin)}}else{switch(msgKey){case MKEY.ready:pubsub.publish(msgKey,[true]);break;default:pubsub.publish(msgKey,[evt.data.value]);break}}}DC.startConnection=function(loadSuccess){initOptions();var conf=getConfig();var iframeLoadErrorTimeout=setTimeout(function(){loadSuccess(false);DC.iframeStatus=0},conf.iframe.timeoutDuration);pubsub.subscribe(MKEY.ready,function(iframeReady){clearTimeout(iframeLoadErrorTimeout);DC.iframeStatus=2;loadSuccess(true)});pubsub.subscribe(MKEY.ready,function(iframeReady){clearTimeout(iframeLoadErrorTimeout);DC.iframeStatus=2;loadSuccess(true)});window.addEventListener("message",_messageHandler,false);DC.iframe=document.createElement("iframe");DC.iframe.style.display="none";DC.iframe.src=conf.urls.digitrustIframe;DC.iframe.name=consts.locatorFrameName||"__dtLocator";DC.iframeStatus=1;document.body.appendChild(DC.iframe);log.debug("communication frame added")};DC.sendRequest=function(sendRequestFunction,options){if(DC.iframeStatus===2){sendRequestFunction(options)}else if(DC.iframeStatus===1){pubsub.subscribe(MKEY.ready,function(iframeReady){sendRequestFunction(options)})}else if(DC.iframeStatus===0){DC.startConnection(function(loadSuccess){if(loadSuccess){sendRequestFunction(options)}else{throw new Error(configErrors.en.iframeError)}})}};DC.getIdentity=function(options){options=options?options:{};var _sendIdentityRequest=function(options){var identityRequest={version:1,type:MKEY.idGet,syncOnly:options.syncOnly?options.syncOnly:false,redirects:options.redirects?options.redirects:false,value:{}};DC.iframe.contentWindow.postMessage(identityRequest,DC.iframe.src)};DC.sendRequest(_sendIdentityRequest,options)};DC.sendReset=function(options){var DigiTrustCookie=require("./DigiTrustCookie");DigiTrustCookie.setResetCookie();var _request=function(options){var requestPayload={version:1,type:MKEY.idReset};DC.iframe.contentWindow.postMessage(requestPayload,DC.iframe.src)};DC.sendRequest(_request,options)};function listen(message,handler){if(!isFunc(handler)){return}pubsub.subscribe(message,handler)}module.exports={getIdentity:DC.getIdentity,startConnection:DC.startConnection,sendReset:DC.sendReset,MsgKey:MKEY,listen:listen}},{"../config/constants.json":2,"../config/env.json":3,"../config/errors.json":4,"../config/general.json":6,"./DigiTrustCookie":13,"./MinPubSub":15,"./logger":18}],12:[function(require,module,exports){"use strict";var env=require("../config/env.json").current;var configGeneral=require("../config/general.json")[env];var gdprInfo=require("../config/gdpr-lang.json");var DigiTrustConsent={};DigiTrustConsent.browserLanguageIsEU=function(languages){for(var i=0;i<languages.length;i++){if(gdprInfo.gdprLanguages.indexOf(languages[i].toLowerCase())>=0){return true}}return false};DigiTrustConsent.cmpConsent=function(languages){return false};DigiTrustConsent.gdprApplies=function(options){var browserLanguageCheckResult=DigiTrustConsent.browserLanguageIsEU(navigator.languages||[navigator.browserLanguage]);return browserLanguageCheckResult};DigiTrustConsent.hasConsent=function(options,callback){var applies=DigiTrustConsent.gdprApplies();if(env==="local"||env==="localdev"){applies=false}if(typeof window.__cmp!=="undefined"){window.__cmp("ping",null,function(pingReturn){if(applies||pingReturn.gdprAppliesGlobally){window.__cmp("getVendorConsents",[configGeneral.gvlVendorId],function(result){var myconsent=result.vendorConsents[configGeneral.gvlVendorId];callback(myconsent)})}else{callback(true)}})}else if(applies){callback(false)}else{callback(true)}};module.exports={hasConsent:DigiTrustConsent.hasConsent}},{"../config/env.json":3,"../config/gdpr-lang.json":5,"../config/general.json":6}],13:[function(require,module,exports){"use strict";var env=require("../config/env.json").current;var configGeneral=require("../config/general.json")[env];var Dcom=require("./DigiTrustCommunication");var helpers=require("./helpers");var DigiTrust=window.DigiTrust||{};var _maxAgeToDate=function(milliseconds){var date=new Date;date.setTime(date.getTime()+milliseconds);return date.toUTCString()};var _setCookie=function(cookieKV,expiresKV,domainKV,pathKV){document.cookie=cookieKV+expiresKV+domainKV+pathKV};var _setIdentityCookie=function(cookieV){var cookieConfig=window.DigiTrust.isClient?configGeneral.cookie.publisher:configGeneral.cookie.digitrust;var cookieKV=cookieConfig.userObjectKey+"="+cookieV+";";var expiresKV="expires="+_maxAgeToDate(cookieConfig.maxAgeMiliseconds)+";";var domainKV=cookieConfig.domainKeyValue;var pathKV=cookieConfig.pathKeyValue;_setCookie(cookieKV,expiresKV,domainKV,pathKV)};var _verifyUserCookieStructure=function(userJSON){if(!userJSON){return false}var hasUserId=userJSON.hasOwnProperty("id");var hasPrivacy=userJSON.hasOwnProperty("privacy");if(!hasUserId||!hasPrivacy||!userJSON.privacy.optout&&userJSON.id.length<1){return false}if(hasPrivacy){var hasOptout=userJSON.privacy.hasOwnProperty("optout");if(!hasOptout){return false}}else{return false}return true};var DigiTrustCookie={};DigiTrustCookie.getIdentityCookieJSON=function(cookieKey){var cookieKey=cookieKey||configGeneral.cookie.digitrust.userObjectKey;var localUserCookie=DigiTrustCookie.getCookieByName(cookieKey);if(localUserCookie){var localUserCookieJSON={};try{localUserCookieJSON=DigiTrustCookie.unobfuscateCookieValue(localUserCookie)}catch(e){localUserCookieJSON={id:helpers.generateUserId(),version:configGeneral.cookie.version,producer:configGeneral.cookie.producer,privacy:{optout:false}};_setIdentityCookie(DigiTrustCookie.obfuscateCookieValue(localUserCookieJSON))}if(_verifyUserCookieStructure(localUserCookieJSON)){return localUserCookieJSON}else{return{}}}else{return{}}};DigiTrustCookie.setResetCookie=function(){var cookieKV=configGeneral.cookie.digitrust.resetKey+"=true;";var expiresKV="expires="+_maxAgeToDate(configGeneral.cookie.digitrust.maxAgeMiliseconds)+";";var domainKV=configGeneral.cookie.digitrust.domainKeyValue;var pathKV=configGeneral.cookie.digitrust.pathKeyValue;_setCookie(cookieKV,expiresKV,domainKV,pathKV)};DigiTrustCookie.expireCookie=function(cookieKey){var cookieKV=cookieKey+"=; ",expiresKV="expires=expires=Thu, 01 Jan 1970 00:00:01 GMT;",domainKV="",pathKV=configGeneral.cookie.digitrust.pathKeyValue;try{if(location.host.indexOf(configGeneral.cookie.digitrust.domainKeyValue)>-1){domainKV=configGeneral.cookie.digitrust.domainKeyValue}}catch(ex){}_setCookie(cookieKV,expiresKV,domainKV,pathKV)};DigiTrustCookie.setDigitrustCookie=function(cookieV){var cookieKV=configGeneral.cookie.digitrust.userObjectKey+"="+cookieV+";";var expiresKV="expires="+_maxAgeToDate(configGeneral.cookie.digitrust.maxAgeMiliseconds)+";";var domainKV=configGeneral.cookie.digitrust.domainKeyValue;var pathKV=configGeneral.cookie.digitrust.pathKeyValue;_setCookie(cookieKV,expiresKV,domainKV,pathKV)};DigiTrustCookie.getUser=function(options,callback){options=options||{};var useCallback=typeof callback==="function"?true:false;var localUserCookieJSON={};var _createSyncOnlySubscription=function(){Dcom.listen(Dcom.MsgKey.idSync,function(userJSON){if(DigiTrustCookie.verifyPublisherDomainCookie(userJSON)){var cookieStringEncoded=DigiTrustCookie.obfuscateCookieValue(userJSON);_setIdentityCookie(cookieStringEncoded)}})};if(useCallback===false){localUserCookieJSON=DigiTrustCookie.getIdentityCookieJSON(configGeneral.cookie.publisher.userObjectKey);_createSyncOnlySubscription();Dcom.getIdentity({syncOnly:true});return!helpers.isEmpty(localUserCookieJSON)?localUserCookieJSON:{}}else{Dcom.listen(Dcom.MsgKey.idResp,function(userJSON){if(DigiTrustCookie.verifyPublisherDomainCookie(userJSON)){var cookieStringEncoded=DigiTrustCookie.obfuscateCookieValue(userJSON);_setIdentityCookie(cookieStringEncoded);return callback(false,userJSON)}else{if(helpers.isEmpty(userJSON)&&!userJSON.hasOwnProperty("error")){if(options.redirects){helpers.createConsentClickListener()}}return callback(true)}});if(options.ignoreLocalCookies===true){Dcom.getIdentity()}else{localUserCookieJSON=DigiTrustCookie.getIdentityCookieJSON(configGeneral.cookie.publisher.userObjectKey);if(DigiTrustCookie.verifyPublisherDomainCookie(localUserCookieJSON)){_createSyncOnlySubscription();Dcom.getIdentity({syncOnly:true});return callback(false,localUserCookieJSON)}else{Dcom.getIdentity({syncOnly:false,redirects:options.redirects})}}}};DigiTrustCookie.obfuscateCookieValue=function(value){return encodeURIComponent(btoa(JSON.stringify(value)))};DigiTrustCookie.unobfuscateCookieValue=function(value){return JSON.parse(atob(decodeURIComponent(value)))};DigiTrustCookie.getCookieByName=function(name){var value="; "+document.cookie;var parts=value.split("; "+name+"=");if(parts.length===2){return parts.pop().split(";").shift()}};DigiTrustCookie.createUserCookiesOnDigitrustDomain=function(){var userId=helpers.generateUserId();var userJSON={id:userId,version:configGeneral.cookie.version,producer:configGeneral.cookie.producer,privacy:{optout:false}};var cookieStringEncoded=DigiTrustCookie.obfuscateCookieValue(userJSON);DigiTrustCookie.setDigitrustCookie(cookieStringEncoded);return userJSON};DigiTrustCookie.verifyPublisherDomainCookie=function(userJSON){if(helpers.isEmpty(userJSON)||!_verifyUserCookieStructure(userJSON)){return false}if(!userJSON.hasOwnProperty("keyv")){return false}return true};module.exports=DigiTrustCookie},{"../config/env.json":3,"../config/general.json":6,"./DigiTrustCommunication":11,"./helpers":17}],14:[function(require,module,exports){"use strict";var env=require("../config/env.json").current;var configGeneral=require("../config/general")[env];var helpers=require("./helpers");var ServerCrypto=require("./ServerCrypto");var DTPublicKeyObject=require("../config/key.json");var LOGID="DigiTrustCrypto";var logObj=require("./logger");var log=logObj.createLogger(LOGID,{level:"ERROR"});var logInitialized=false;var crypto_browser=helpers.getBrowserCrypto();function initLog(){if(logInitialized){return}var opts=window.DigiTrust.initializeOptions;if(opts.logging==null){opts.logging=configGeneral.logging}if(opts.logging!=null){if(opts.logging.enable==false){log=logObj.createLogger(LOGID,{level:"ERROR"});log.enabled=false}else{if(opts.logging.level==null){opts.logging.level="INFO"}log=logObj.createLogger(LOGID,opts.logging)}}logInitialized=true}function isMsCrypto(cryptoObj){var msg;if(!cryptoObj||!cryptoObj.subtle){cryptoObj=window.crypto}if(!cryptoObj||!cryptoObj.subtle){msg="Invalid browser crypt object";log.debug(msg);return false}if(!window.msCrypto){return false}try{var genOp=cryptoObj.subtle.generateKey({name:"RSASSA-PKCS1-v1_5",modulusLength:2048,publicExponent:new Uint8Array([1,0,1])},false,["encrypt","decrypt"]);if(typeof genOp.oncomplete!=="undefined"){return true}return false}catch(ex){return false}}var DigiTrustCrypto={};DigiTrustCrypto.getKeyVersion=function(){return DTPublicKeyObject.version};DigiTrustCrypto.encrypt=function(valueToEncrypt,callback){var keyType;var publicKey;initLog();if(crypto_browser==null){crypto_browser=helpers.getBrowserCrypto()}if(helpers.isSafari()){keyType="jwk";publicKey=DTPublicKeyObject.jwk}else{keyType="spki";publicKey=helpers.base64StringToArrayBuffer(DTPublicKeyObject.spki)}if(window.crypto&&!window.crypto.subtle&&helpers.isChrome()&&Math.random()<configGeneral.crypto.serverCryptoRate){crypto_browser.subtle=ServerCrypto.mockCryptoSubtle()}log.debug("encrypt value: ",valueToEncrypt);if(isMsCrypto(crypto_browser)){msieEncrypt(valueToEncrypt,keyType,publicKey,callback);return}crypto_browser.subtle.importKey(keyType,publicKey,{name:DTPublicKeyObject.type,hash:{name:DTPublicKeyObject.hash.name}},false,["encrypt"]).then(function(cryptokey){crypto_browser.subtle.encrypt({name:DTPublicKeyObject.type,hash:{name:DTPublicKeyObject.hash.name}},cryptokey,helpers.str2ab(valueToEncrypt)).then(function(encryptedValue){var encryptedValueEncodedB64=typeof encryptedValue==="string"?encryptedValue:helpers.arrayBufferToBase64String(encryptedValue);return callback(encryptedValueEncodedB64)}).catch(function(err){})})};DigiTrustCrypto.decrypt=function(valueToDecrypt,callback){var keyType="jwk";var privateKey=DTPublicKeyObject.jwkPrivate;var publicKey;initLog();log.debug("attempt to decrypt value: ",valueToDecrypt);if(crypto_browser==null){crypto_browser=helpers.getBrowserCrypto()}if(helpers.isSafari()){keyType="jwk";publicKey=DTPublicKeyObject.jwk}else{keyType="spki";publicKey=helpers.base64StringToArrayBuffer(DTPublicKeyObject.spki)}if(isMsCrypto(crypto_browser)){msieDecrypt(valueToDecrypt,keyType,publicKey,callback);return}log.debug("ready to create key");var cryptKey=crypto_browser.subtle.importKey(keyType,privateKey,{name:DTPublicKeyObject.type,hash:{name:DTPublicKeyObject.hash.name}},false,["decrypt"]);cryptKey.then(function(cryptokey){log.debug("enter decrypt with key",cryptokey);crypto_browser.subtle.decrypt({name:DTPublicKeyObject.type,hash:{name:DTPublicKeyObject.hash.name}},cryptokey,helpers.base64StringToArrayBuffer(valueToDecrypt)).then(function(decryptedValueArrayBuffer){var decryptedValueString=helpers.ab2str(decryptedValueArrayBuffer);log.debug("just decrypted",keyType,decryptedValueString);return callback(decryptedValueString)})})};var msieDecrypt=function(valueToDecrypt,keyType,privateKey,callback){var keyOp=crypto_browser.subtle.importKey(keyType,privateKey,{name:DTPublicKeyObject.type,hash:{name:DTPublicKeyObject.hash.name}},false,["decrypt"]);keyOp.oncomplete=function(evt){var cryptokey=evt.target.result;var decryptOp=crypto_browser.subtle.decrypt({name:DTPublicKeyObject.type,hash:{name:DTPublicKeyObject.hash.name}},cryptokey,helpers.base64StringToArrayBuffer(valueToDecrypt));decryptOp.onerror=function(e){console.error(e)};decryptOp.oncomplete=function(e){var decryptedValueArrayBuffer=e.target.result;var decryptedValueString=helpers.ab2str(decryptedValueArrayBuffer);log.debug("just decrypted",keyType,decryptedValueString);return callback(decryptedValueString)}}};var msieEncrypt=function(valueToEncrypt,keyType,publicKey,callback){var keyOp=crypto_browser.subtle.importKey(keyType,publicKey,{name:DTPublicKeyObject.type,hash:{name:DTPublicKeyObject.hash.name}},false,["encrypt"]);keyOp.oncomplete=function(evt){var cryptokey=evt.target.result;try{var encryptOp=crypto_browser.subtle.encrypt({name:DTPublicKeyObject.type,hash:{name:DTPublicKeyObject.hash.name}},cryptokey,helpers.str2ab(valueToEncrypt));encryptOp.oncomplete=function(e){var encryptedValue=e.target.result;var encryptedValueEncodedB64=typeof encryptedValue==="string"?encryptedValue:helpers.arrayBufferToBase64String(encryptedValue);return callback(encryptedValueEncodedB64)}}catch(err){log.error("Digitrust server MSIE Encrypt error",err)}}};module.exports=DigiTrustCrypto},{"../config/env.json":3,"../config/general":6,"../config/key.json":8,"./ServerCrypto":16,"./helpers":17,"./logger":18}],15:[function(require,module,exports){"use strict";function MinPubSub(options){var cache=window.c_||{};var me=this;this.publish=function(topic,args){var subs=cache[topic];var len=subs?subs.length:0;while(len--){subs[len].apply(window,args||[])}};this.subscribe=function(topic,callback){if(!cache[topic]){cache[topic]=[]}cache[topic].push(callback);return[topic,callback]};this.unsubscribe=function(handle,callback){var subs=cache[callback?handle:handle[0]];callback=callback||handle[1];var len=subs?subs.length:0;while(len--){if(subs[len]===callback){subs.splice(len,1)}}}}module.exports={createPubSub:function(opts){return new MinPubSub(opts)}}},{}],16:[function(require,module,exports){"use strict";var env=require("../config/env.json").current;var configGeneral=require("../config/general.json")[env];var helpers=require("./helpers");var ServerCrypto={};ServerCrypto.mockCryptoSubtle=function(){return{importKey:function(keyType,publicKey,conf,ignored,operations){return new Promise(function(resolve,reject){resolve()})},encrypt:function(options,cryptokey,raw){return new Promise(function(resolve,reject){helpers.xhr.promise("GET",configGeneral.urls.digitrustIdService).then(function(contents){var encryptedIdentity=JSON.parse(contents);resolve(encryptedIdentity.id)}).catch(function(err){reject(err)})})}}};module.exports=ServerCrypto},{"../config/env.json":3,"../config/general.json":6,"./helpers":17}],17:[function(require,module,exports){"use strict";var env=require("../config/env.json").current;var configGeneral=require("../config/general.json")[env];var consts=require("../config/constants.json");var helpers={};helpers.extend=function(target,source){target=target||{};for(var prop in source){if(typeof source[prop]==="object"){target[prop]=helpers.extend(target[prop],source[prop])}else{target[prop]=source[prop]}}return target};var isFunc=function(fn){if(fn!=null&&typeof fn==="function"){return true}return false};var getBrowserCrypto=function(){var cryptoObj=window.crypto||window.msCrypto;if(window.crypto&&!window.crypto.subtle&&window.crypto.webkitSubtle){window.crypto.subtle=window.crypto.webkitSubtle}return cryptoObj};var addEvt=function(elem,eventName,handler){elem.addEventListener(eventName,function(evt){if(isFunc(handler)){handler.call(null,evt)}})};var parseXHR=function(req){var result=req.responseText;return[result,req]};var xhrPromise=function(method,url,data){return new Promise(function(resolve,reject){var xhr=new XMLHttpRequest;xhr.open(method,url);xhr.withCredentials=true;xhr.onload=function(){if(this.status>=200&&this.status<300){resolve(xhr.response)}else{reject({status:this.status,statusText:xhr.statusText})}};xhr.onerror=function(){reject({status:this.status,statusText:xhr.statusText})};xhr.send()})};var xhrRequest=function(type,url,data,async){async=async?async?true:false:true;var methods={success:function(){},error:function(){}};var XHR=window.XMLHttpRequest||ActiveXObject;var request=new XHR("MSXML2.XMLHTTP.3.0");request.open(type,url,async);request.setRequestHeader("Content-type","application/x-www-form-urlencoded");request.onreadystatechange=function(){if(request.readyState===4){if(request.status>=200&&request.status<300){methods.success.apply(methods,parseXHR(request))}else{methods.error.apply(methods,parseXHR(request))}}};request.send(data);var callbacks={success:function(callback){methods.success=callback;return callbacks},error:function(callback){methods.error=callback;return callbacks}};return callbacks};var xhr={};xhr.get=function(url,data,async){return xhrRequest("GET",url,data,async)};xhr.put=function(url,data,async){return xhrRequest("PUT",url,data,async)};xhr.post=function(url,data,async){return xhrRequest("POST",url,data,async)};xhr.delete=function(url,data,async){return xhrRequest("DELETE",url,data,async)};xhr.promise=function(method,url,data){return xhrPromise(method,url,data)};helpers.xhr=xhr;var _getElementHref=function(current){if(current){if(current.nodeName.toLowerCase()==="a"){return current.getAttribute("href")}else if(current.nodeName.toLowerCase()==="body"){return false}else{return _getElementHref(current.parentNode)}}else{return false}};helpers.getAbsolutePath=function(href){var link=document.createElement("a");link.href=href;return link.cloneNode(false).href};helpers.inIframe=function(){try{return window.self!==window.top}catch(e){return true}};helpers.createConsentClickListener=function(){if(helpers.inIframe()){return}var consentClickHandler=function(e){e=e||window.event;var t=e.target||e.srcElement;if(t.id===consts.consentLinkId){return true}var possibleHref=_getElementHref(t);if(possibleHref&&possibleHref!=="#"){possibleHref=helpers.getAbsolutePath(possibleHref);window.location=configGeneral.urls.digitrustRedirect+"?redirect="+encodeURIComponent(possibleHref);return false}};addEvt(window,"click",consentClickHandler)};helpers.generateUserId=function(){var buffer=new Uint8Array(8);getBrowserCrypto().getRandomValues(buffer);return helpers.arrayBufferToBase64String(buffer)};helpers.isEmpty=function(obj){if(obj===null||typeof obj==="undefined"){return true}if(obj.length>0){return false}if(obj.length===0){return true}for(var key in obj){if(hasOwnProperty.call(obj,key)){return false}}return true};helpers.getObjectByKeyFromArray=function(items,key,value){for(var i=0;i<items.length;i++){if(items[i][key]===value){return items[i]}}return null};helpers.getObjectByKeyFromObject=function(items,key,value){for(var itemKey in items){if(items[itemKey][key]===value){return items[itemKey]}}return null};helpers.getUrlParameterByName=function(name){name=name.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var regex=new RegExp("[\\?&]"+name+"=([^&#]*)");var results=regex.exec(location.search);return results===null?"":decodeURIComponent(results[1].replace(/\+/g," "))};helpers.isIE=function(){var myNav=navigator.userAgent.toLowerCase();return myNav.indexOf("msie")!==-1?parseInt(myNav.split("msie")[1]):false};helpers.isSafari=function(){var ua=navigator.userAgent.toLowerCase();if(ua.indexOf("safari")!==-1){if(ua.indexOf("chrome")>-1){return false}else{return true}}return false};helpers.isChrome=function(){var ua=navigator.userAgent.toLowerCase();if(ua.indexOf("chrome")!==-1){return true}return false};helpers.isValidJSON=function(str){try{JSON.parse(str)}catch(e){return false}return true};helpers.ab2str=function(buf){return String.fromCharCode.apply(null,new Uint8Array(buf))};helpers.str2ab=function(str){var buf=new ArrayBuffer(str.length);var bufView=new Uint8Array(buf);for(var i=0,strLen=str.length;i<strLen;i++){bufView[i]=str.charCodeAt(i)}return buf};helpers.arrayBufferToBase64String=function(arrayBuffer){var byteArray=new Uint8Array(arrayBuffer);var byteString="";for(var i=0;i<byteArray.byteLength;i++){byteString+=String.fromCharCode(byteArray[i])}return btoa(byteString)};helpers.base64StringToArrayBuffer=function(base64){var binary_string=atob(base64);var len=binary_string.length;var bytes=new Uint8Array(len);for(var i=0;i<len;i++){bytes[i]=binary_string.charCodeAt(i)}return bytes.buffer};helpers.asciiToUint8Array=function(str){var chars=[];for(var i=0;i<str.length;++i){chars.push(str.charCodeAt(i))}return new Uint8Array(chars)};helpers.getBrowserCrypto=getBrowserCrypto;(function(){if(typeof Object.assign!="function"){Object.defineProperty(Object,"assign",{value:function assign(target,varArgs){"use strict";if(target==null){throw new TypeError("Cannot convert undefined or null to object")}var to=Object(target);for(var index=1;index<arguments.length;index++){var nextSource=arguments[index];if(nextSource!=null){for(var nextKey in nextSource){if(Object.prototype.hasOwnProperty.call(nextSource,nextKey)){to[nextKey]=nextSource[nextKey]}}}}return to},writable:true,configurable:true})}})();module.exports=helpers},{"../config/constants.json":2,"../config/env.json":3,"../config/general.json":6}],18:[function(require,module,exports){"use strict";var DEF_LOGLEVEL="ERROR";var logLevels={DEBUG:{val:0,log:"log"},INFO:{val:1,log:"log"},WARN:{val:2,log:"warn"},ERROR:{val:3,log:"error"},LOG:{val:99,log:"log"}};var logLevelsByNum=[logLevels.DEBUG,logLevels.INFO,logLevels.WARN,logLevels.ERROR,logLevels.LOG];function getLevelVal(level){var lvl=logLevels[level];if(lvl==null){return 3}return lvl.val}function getLevelObject(level){var numVal=-1;if(typeof level==="string"){numVal=getLevelVal(level)}return logLevelsByNum[numVal]}function toArray(obj){var arr=[];var val;var i;if(obj==null){return arr}if(typeof obj==="object"&&obj.length==null){arr.push(obj);return arr}for(i=0;i<obj.length;i++){val=obj[i];if(val!=undefined){arr.push(val)}}return arr}function Logger(){this.name="Logger";this.opts={level:DEF_LOGLEVEL};this.enabled=true;var passedArgs=toArray(arguments);var me=this;(function(args){var args=args||[];var i,val,valType;if(args.length==0){return}for(i=0;i<args.length;i++){val=args[i];valType=typeof val;if(valType==="string"){me.name=val}else if(valType=="object"){me.opts=val;if(val.name!=null){me.name=val.name}if(val.level==null){val.level=DEF_LOGLEVEL}}}})(passedArgs);function doLog(level){var lvl=logLevels[level];var level=lvl&&lvl.val||0;var myLevel=getLevelVal(me.opts.level);return level>=myLevel}this.setLogLevel=function(level){var lvlType=typeof level;var lvlObj;if(lvlType==="string"){this.opts.level=level}else if(typeof args[args.length-1]==="number"){lvlObj=logLevelsByNum[level];if(lvlObj){try{this.opts.level=lvlObj.log.toUpperCase()}catch(ex){}}}};this.log=function(){var args=toArray(arguments);var msg,lvlArg;var logIt=true;var levelDef=logLevels.LOG;var doTrace=false;var i;if(this.enabled!=true){return}if(args.length>=2){if(typeof args[args.length-1]==="string"){lvlArg=args.pop();logIt=this.doLog(lvlArg);levelDef=logLevels[lvlArg]}else if(typeof args[args.length-1]==="number"){lvlArg=args.pop();logIt=lvlArg>=getLevelVal(me.opts.level);levelDef=logLevelsByNum[lvlArg]}}if(!logIt){return}if(!levelDef){levelDef=logLevels.LOG}if(args.length==0){msg=this.name+": [no message]"}else if(typeof args[0]==="string"){msg=this.name+": "+args.shift()}else{msg=this.name}args.unshift(msg);doTrace=levelDef.val==logObj.WARN||levelDef.val==logObj.ERROR;if(doTrace||levelDef.val==logObj.DEBUG){args.push({page:document.location.href})}if(console[levelDef.log]){console[levelDef.log].apply(null,args)}else{console.log.apply(null,args)}if(doTrace&&console.trace){console.trace()}}}Logger.prototype.getLevels=function(){return logLevels};Logger.prototype.debug=function(){var args=toArray(arguments);args.push(logObj.DEBUG);this.log.apply(this,args)};Logger.prototype.info=function(){var args=toArray(arguments);args.push(logObj.INFO);this.log.apply(this,args)};Logger.prototype.warn=function(){var args=toArray(arguments);args.push(logObj.WARN);this.log.apply(this,args)};Logger.prototype.error=function(){var args=toArray(arguments);args.push(logObj.ERROR);this.log.apply(this,args)};var logObj={createLogger:function(){return new Logger(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},DEBUG:0,INFO:1,WARN:2,ERROR:3};module.exports=logObj},{}]},{},[9]);