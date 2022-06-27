var supertokens;(()=>{"use strict";var e={280:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(569),t)},7611:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SSR_ERROR=t.DEFAULT_API_BASE_PATH=void 0,t.DEFAULT_API_BASE_PATH="/auth",t.SSR_ERROR="\nIf you are trying to use this method doing server-side-rendering, please make sure you move this method inside a componentDidMount method or useEffect hook."},569:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var r=n(3146),o=function(){function e(){}return e.init=function(e){r.default.init(e)},e}();t.default=o,t.init=o.init},7992:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});function n(e,t){void 0===t&&(t=!1),e=e.trim();try{if(!e.startsWith("http://")&&!e.startsWith("https://"))throw new Error("Error converting to proper URL");var r=new URL(e);return t?r.hostname.startsWith("localhost")||(o=r.hostname,/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(o))?"http://"+r.host:"https://"+r.host:r.protocol+"//"+r.host}catch(e){}var o;if(e.startsWith("/"))throw new Error("Please provide a valid domain name");if(0===e.indexOf(".")&&(e=e.substr(1)),(-1!==e.indexOf(".")||e.startsWith("localhost"))&&!e.startsWith("http://")&&!e.startsWith("https://")){e="https://"+e;try{return new URL(e),n(e,!0)}catch(e){}}throw new Error("Please provide a valid domain name")}t.default=function(e){var t=this;this.getAsStringDangerous=function(){return t.value},this.value=n(e)}},1260:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});function n(e){e=e.trim();try{if(!e.startsWith("http://")&&!e.startsWith("https://"))throw new Error("Error converting to proper URL");return"/"===(e=new URL(e).pathname).charAt(e.length-1)?e.substr(0,e.length-1):e}catch(e){}if((function(e){if(-1===e.indexOf(".")||e.startsWith("/"))return!1;try{return-1!==new URL(e).hostname.indexOf(".")}catch(e){}try{return-1!==new URL("http://"+e).hostname.indexOf(".")}catch(e){}return!1}(e)||e.startsWith("localhost"))&&!e.startsWith("http://")&&!e.startsWith("https://"))return n(e="http://"+e);"/"!==e.charAt(0)&&(e="/"+e);try{return new URL("http://example.com"+e),n("http://example.com"+e)}catch(e){throw new Error("Please provide a valid URL path")}}t.default=function e(t){var r=this;this.startsWith=function(e){return r.value.startsWith(e.value)},this.appendPath=function(t){return new e(r.value+t.value)},this.getAsStringDangerous=function(){return r.value},this.value=n(t)}},3146:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(8122),o=n(787),i=n(9092),a=function(){function e(e){var t=this;if(this.recipeList=[],this.appInfo=(0,r.normaliseInputAppInfoOrThrowError)(e.appInfo),void 0===e.recipeList||0===e.recipeList.length)throw new Error("Please provide at least one recipe to the supertokens.init function call. See https://supertokens.io/docs/emailpassword/quick-setup/frontend");var n=!1;void 0!==e.enableDebugLogs&&(n=e.enableDebugLogs),this.recipeList=e.recipeList.map((function(e){return e(t.appInfo,n)}))}return e.init=function(t){o.CookieHandlerReference.init(t.cookieHandler),i.WindowHandlerReference.init(t.windowHandler),void 0===e.instance?e.instance=new e(t):console.warn("SuperTokens was already initialized")},e.getInstanceOrThrow=function(){if(void 0===e.instance){var t="SuperTokens must be initialized before calling this method.";throw t=(0,r.checkForSSRErrorAndAppendIfNeeded)(t),new Error(t)}return e.instance},e.reset=function(){(0,r.isTest)()?e.instance=void 0:console.warn("Calling reset() is only supported during testing")},e}();t.default=a},8122:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getHashFromLocation=t.getNormalisedUserContext=t.checkForSSRErrorAndAppendIfNeeded=t.getQueryParams=t.isTest=t.normaliseInputAppInfoOrThrowError=t.appendQueryParamsToURL=void 0;var r=n(9092),o=n(7611),i=n(7992),a=n(1260);t.appendQueryParamsToURL=function(e,t){if(void 0===t)return e;try{var n=new URL(e);return Object.entries(t).forEach((function(e){var t=e[0],r=e[1];n.searchParams.set(t,r)})),n.href}catch(n){var r=e.startsWith("/")?"http:localhost":"http://localhost/",o=new URL("".concat(r).concat(e));return Object.entries(t).forEach((function(e){var t=e[0],n=e[1];o.searchParams.set(t,n)})),"".concat(o.pathname).concat(o.search)}},t.normaliseInputAppInfoOrThrowError=function(e){if(void 0===e)throw new Error("Please provide the appInfo object when calling supertokens.init");if(void 0===e.apiDomain)throw new Error("Please provide your apiDomain inside the appInfo object when calling supertokens.init");if(void 0===e.appName)throw new Error("Please provide your appName inside the appInfo object when calling supertokens.init");var t,n,r=new a.default("");return void 0!==e.apiGatewayPath&&(r=new a.default(e.apiGatewayPath)),{appName:e.appName,apiDomain:new i.default(e.apiDomain),apiBasePath:r.appendPath((t=o.DEFAULT_API_BASE_PATH,n=e.apiBasePath,void 0!==n?new a.default(n):new a.default(t)))}},t.isTest=function(){try{return"testing"===process.env.TEST_MODE}catch(e){return!1}},t.getQueryParams=function(e){var t=new URLSearchParams(r.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()).get(e);if(null!==t)return t},t.checkForSSRErrorAndAppendIfNeeded=function(e){return"undefined"==typeof window&&(e+=o.SSR_ERROR),e},t.getNormalisedUserContext=function(e){return void 0===e?{}:e},t.getHashFromLocation=function(){return r.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getHash().substring(1)}},6570:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};function o(){if("undefined"==typeof window)throw Error("If you are using this package with server-side rendering, please make sure that you are checking if the window object is defined.");return window}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultCookieHandlerImplementation={getCookie:function(){return n(this,void 0,void 0,(function(){return r(this,(function(e){return[2,o().document.cookie]}))}))},setCookie:function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){return o().document.cookie=e,[2]}))}))}}},5209:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(6570),o=function(){function e(e){var t=function(e){return e};void 0!==e&&(t=e),this.cookieHandler=t(r.defaultCookieHandlerImplementation)}return e.init=function(t){void 0===e.instance&&(e.instance=new e(t))},e.getReferenceOrThrow=function(){if(void 0===e.instance)throw new Error("SuperTokensCookieHandler must be initialized before calling this method.");return e.instance},e}();t.CookieHandlerReference=o,t.default=o},1936:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};function o(){if("undefined"==typeof window)throw Error("If you are using this package with server-side rendering, please make sure that you are checking if the window object is defined.");return window}Object.defineProperty(t,"__esModule",{value:!0});var i={key:function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){return[2,o().localStorage.key(e)]}))}))},clear:function(){return n(this,void 0,void 0,(function(){return r(this,(function(e){return[2,o().localStorage.clear()]}))}))},getItem:function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){return[2,o().localStorage.getItem(e)]}))}))},removeItem:function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){return[2,o().localStorage.removeItem(e)]}))}))},setItem:function(e,t){return n(this,void 0,void 0,(function(){return r(this,(function(n){return[2,o().localStorage.setItem(e,t)]}))}))},keySync:function(e){return o().localStorage.key(e)},clearSync:function(){return o().localStorage.clear()},getItemSync:function(e){return o().localStorage.getItem(e)},removeItemSync:function(e){return o().localStorage.removeItem(e)},setItemSync:function(e,t){return o().localStorage.setItem(e,t)}},a={key:function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){return[2,o().sessionStorage.key(e)]}))}))},clear:function(){return n(this,void 0,void 0,(function(){return r(this,(function(e){return[2,o().sessionStorage.clear()]}))}))},getItem:function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){return[2,o().sessionStorage.getItem(e)]}))}))},removeItem:function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){return[2,o().sessionStorage.removeItem(e)]}))}))},setItem:function(e,t){return n(this,void 0,void 0,(function(){return r(this,(function(n){return[2,o().sessionStorage.setItem(e,t)]}))}))},keySync:function(e){return o().sessionStorage.key(e)},clearSync:function(){return o().sessionStorage.clear()},getItemSync:function(e){return o().sessionStorage.getItem(e)},removeItemSync:function(e){return o().sessionStorage.removeItem(e)},setItemSync:function(e,t){return o().sessionStorage.setItem(e,t)}};t.defaultWindowHandlerImplementation={history:{replaceState:function(e,t,n){return o().history.replaceState(e,t,n)},getState:function(){return o().history.state}},location:{getHref:function(){return o().location.href},setHref:function(e){o().location.href=e},getSearch:function(){return o().location.search},getHash:function(){return o().location.hash},getPathName:function(){return o().location.pathname},assign:function(e){o().location.assign(e)},getHostName:function(){return o().location.hostname},getOrigin:function(){return o().location.origin}},getDocument:function(){return o().document},localStorage:i,sessionStorage:a}},7860:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(1936),o=function(){function e(e){var t=function(e){return e};void 0!==e&&(t=e),this.windowHandler=t(r.defaultWindowHandlerImplementation)}return e.init=function(t){void 0===e.instance&&(e.instance=new e(t))},e.getReferenceOrThrow=function(){if(void 0===e.instance)throw new Error("SuperTokensWindowHandler must be initialized before calling this method.");return e.instance},e}();t.WindowHandlerReference=o,t.default=o},787:(e,t,n)=>{t.__esModule=!0,function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(5209))},9092:(e,t,n)=>{t.__esModule=!0,function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(7860))}},t={},n=function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}(280);supertokens=n})();