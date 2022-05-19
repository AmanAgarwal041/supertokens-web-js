var supertokensEmailVerification;(()=>{"use strict";var e={7611:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WINDOW_UNDEFINED_ERROR=t.SSR_ERROR=t.DEFAULT_API_BASE_PATH=void 0,t.DEFAULT_API_BASE_PATH="/auth",t.SSR_ERROR="\nIf you are trying to use this method doing server-side-rendering, please make sure you move this method inside a componentDidMount method or useEffect hook.",t.WINDOW_UNDEFINED_ERROR="If you are using this package with server-side rendering, please make sure that you are checking if the window object is defined."},2173:function(e,t){var r,n=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t){var r=e.call(this,t)||this;return r.isSuperTokensGeneralError=!0,r}return n(t,e),t.isThisError=function(e){return!0===e.isSuperTokensGeneralError},t}(Error);t.default=o},7992:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});function r(e,t){void 0===t&&(t=!1),e=e.trim();try{if(!e.startsWith("http://")&&!e.startsWith("https://"))throw new Error("Error converting to proper URL");var n=new URL(e);return t?n.hostname.startsWith("localhost")||(o=n.hostname,/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(o))?"http://"+n.host:"https://"+n.host:n.protocol+"//"+n.host}catch(e){}var o;if(e.startsWith("/"))throw new Error("Please provide a valid domain name");if(0===e.indexOf(".")&&(e=e.substr(1)),(-1!==e.indexOf(".")||e.startsWith("localhost"))&&!e.startsWith("http://")&&!e.startsWith("https://")){e="https://"+e;try{return new URL(e),r(e,!0)}catch(e){}}throw new Error("Please provide a valid domain name")}t.default=function(e){var t=this;this.getAsStringDangerous=function(){return t.value},this.value=r(e)}},1260:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});function r(e){e=e.trim();try{if(!e.startsWith("http://")&&!e.startsWith("https://"))throw new Error("Error converting to proper URL");return"/"===(e=new URL(e).pathname).charAt(e.length-1)?e.substr(0,e.length-1):e}catch(e){}if((function(e){if(-1===e.indexOf(".")||e.startsWith("/"))return!1;try{return-1!==new URL(e).hostname.indexOf(".")}catch(e){}try{return-1!==new URL("http://"+e).hostname.indexOf(".")}catch(e){}return!1}(e)||e.startsWith("localhost"))&&!e.startsWith("http://")&&!e.startsWith("https://"))return r(e="http://"+e);"/"!==e.charAt(0)&&(e="/"+e);try{return new URL("http://example.com"+e),r("http://example.com"+e)}catch(e){throw new Error("Please provide a valid URL path")}}t.default=function e(t){var n=this;this.startsWith=function(e){return n.value.startsWith(e.value)},this.appendPath=function(t){return new e(n.value+t.value)},this.getAsStringDangerous=function(){return n.value},this.value=r(t)}},634:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(1260),s=r(255),u=r(2173),c=function(){function e(e,t){var r=this;this.get=function(e,t,a,s,u){return o(r,void 0,void 0,(function(){var r;return i(this,(function(o){switch(o.label){case 0:return[4,this.fetch(this.getFullUrl(e,a),n({method:"GET"},t),s,u)];case 1:return r=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(r)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:r}]}}))}))},this.post=function(e,t,a,s){return o(r,void 0,void 0,(function(){var r;return i(this,(function(o){switch(o.label){case 0:if(void 0===t.body)throw new Error("Post request must have a body");return[4,this.fetch(this.getFullUrl(e),n({method:"POST"},t),a,s)];case 1:return r=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(r)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:r}]}}))}))},this.delete=function(e,t,a,s){return o(r,void 0,void 0,(function(){var r;return i(this,(function(o){switch(o.label){case 0:return[4,this.fetch(this.getFullUrl(e),n({method:"DELETE"},t),a,s)];case 1:return r=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(r)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:r}]}}))}))},this.put=function(e,t,a,s){return o(r,void 0,void 0,(function(){var r;return i(this,(function(o){switch(o.label){case 0:return[4,this.fetch(this.getFullUrl(e),n({method:"PUT"},t),a,s)];case 1:return r=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(r)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:r}]}}))}))},this.fetch=function(e,t,a,u){return o(r,void 0,void 0,(function(){var r,o,c,l,f,h;return i(this,(function(i){switch(i.label){case 0:return r=void 0===t?{}:t.headers,[4,this.callPreAPIHook({preAPIHook:a,url:e,requestInit:n(n({},t),{headers:n(n({},r),{"fdi-version":s.supported_fdi.join(","),"Content-Type":"application/json",rid:this.recipeId})})})];case 1:return o=i.sent(),c=o.requestInit,l=o.url,[4,fetch(l,c)];case 2:if((f=i.sent()).status>=300)throw f;return void 0===u?[3,4]:(h=f.clone(),[4,u({requestInit:c,url:e,fetchResponse:h})]);case 3:i.sent(),i.label=4;case 4:return[2,f]}}))}))},this.callPreAPIHook=function(e){return o(r,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return void 0===e.preAPIHook?[2,{url:e.url,requestInit:e.requestInit}]:[4,e.preAPIHook({url:e.url,requestInit:e.requestInit})];case 1:return[2,t.sent()]}}))}))},this.getFullUrl=function(e,t){var n=new a.default(e),o="".concat(r.appInfo.apiDomain.getAsStringDangerous()).concat(r.appInfo.apiBasePath.getAsStringDangerous()).concat(n.getAsStringDangerous());return void 0===t?o:o+"?"+new URLSearchParams(t)},this.getResponseJsonOrThrowGeneralError=function(e){return o(r,void 0,void 0,(function(){var t,r;return i(this,(function(n){switch(n.label){case 0:return[4,e.clone().json()];case 1:if("GENERAL_ERROR"===(t=n.sent()).status)throw r=void 0===t.message?"No Error Message Provided":t.message,new u.default(r);return[2,t]}}))}))},this.recipeId=e,this.appInfo=t}var t;return t=e,e.preparePreAPIHook=function(e){var r=e.recipePreAPIHook,a=e.action,s=e.options,u=e.userContext;return function(e){return o(void 0,void 0,void 0,(function(){var o;return i(t,(function(t){switch(t.label){case 0:return[4,r(n(n({},e),{action:a,userContext:u}))];case 1:return o=t.sent(),void 0===s||void 0===s.preAPIHook?[2,o]:[2,s.preAPIHook({url:o.url,requestInit:o.requestInit,userContext:u})]}}))}))}},e.preparePostAPIHook=function(e){var r=e.recipePostAPIHook,a=e.action,s=e.userContext;return function(e){return o(void 0,void 0,void 0,(function(){return i(t,(function(t){switch(t.label){case 0:return[4,r(n(n({},e),{userContext:s,action:a}))];case 1:return t.sent(),[2]}}))}))}},e}();t.default=c},5857:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.isEmailVerified=t.sendVerificationEmail=t.verifyEmail=t.init=void 0;var o=r(6923),i=r(8122),a=function(){function e(){}return e.init=function(e){return o.default.init(e)},e.verifyEmail=function(e){return o.default.getInstanceOrThrow().recipeImplementation.verifyEmail(n(n({},e),{userContext:(0,i.getNormalisedUserContext)(null==e?void 0:e.userContext)}))},e.sendVerificationEmail=function(e){return o.default.getInstanceOrThrow().recipeImplementation.sendVerificationEmail(n(n({},e),{userContext:(0,i.getNormalisedUserContext)(null==e?void 0:e.userContext)}))},e.isEmailVerified=function(e){return o.default.getInstanceOrThrow().recipeImplementation.isEmailVerified(n(n({},e),{userContext:(0,i.getNormalisedUserContext)(null==e?void 0:e.userContext)}))},e}();t.default=a;var s=a.init;t.init=s;var u=a.verifyEmail;t.verifyEmail=u;var c=a.sendVerificationEmail;t.sendVerificationEmail=c;var l=a.isEmailVerified;t.isEmailVerified=l},6923:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.Recipe=void 0;var o=r(8094),i=r(5120),a=r(6333),s=r(8122),u=function(){function e(e){this.config=(0,o.normaliseUserInput)(e);var t=new a.default((0,i.default)({recipeId:this.config.recipeId,appInfo:this.config.appInfo,preAPIHook:this.config.preAPIHook,postAPIHook:this.config.postAPIHook,storageHandlers:this.config.storageHandlers}));this.recipeImplementation=t.override(this.config.override.functions).build()}return e.init=function(t){return function(r,o){return e.instance=new e(n(n({},t),{appInfo:r,recipeId:e.RECIPE_ID,storageHandlers:o})),e.instance}},e.getInstanceOrThrow=function(){if(void 0===e.instance){var t="No instance of EmailVerification found. Make sure to call the EmailVerification.init method.";throw t=(0,s.checkForSSRErrorAndAppendIfNeeded)(t),Error(t)}return e.instance},e.reset=function(){(0,s.isTest)()&&(e.instance=void 0)},e.RECIPE_ID="emailverification",e}();t.Recipe=u,t.default=u},5120:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.getRecipeImplementation=void 0;var i=r(634),a=r(8122);function s(e){var t=new i.default(e.recipeId,e.appInfo);return{verifyEmail:function(r){var a=r.options,s=r.userContext;return n(this,void 0,void 0,(function(){var r,n,u,c;return o(this,(function(o){switch(o.label){case 0:return r=this.getEmailVerificationTokenFromURL({userContext:s}),[4,t.post("/user/email/verify",{body:JSON.stringify({method:"token",token:r})},i.default.preparePreAPIHook({recipePreAPIHook:e.preAPIHook,action:"VERIFY_EMAIL",options:a,userContext:s}),i.default.preparePostAPIHook({recipePostAPIHook:e.postAPIHook,userContext:s,action:"VERIFY_EMAIL"}))];case 1:return n=o.sent(),u=n.jsonBody,c=n.fetchResponse,[2,{status:u.status,fetchResponse:c}]}}))}))},isEmailVerified:function(r){var a=r.options,s=r.userContext;return n(this,void 0,void 0,(function(){var r,n,u;return o(this,(function(o){switch(o.label){case 0:return[4,t.get("/user/email/verify",{},void 0,i.default.preparePreAPIHook({recipePreAPIHook:e.preAPIHook,action:"IS_EMAIL_VERIFIED",options:a,userContext:s}),i.default.preparePostAPIHook({recipePostAPIHook:e.postAPIHook,userContext:s,action:"IS_EMAIL_VERIFIED"}))];case 1:return r=o.sent(),n=r.jsonBody,u=r.fetchResponse,[2,{status:"OK",isVerified:n.isVerified,fetchResponse:u}]}}))}))},sendVerificationEmail:function(r){var a=r.options,s=r.userContext;return n(this,void 0,void 0,(function(){var r,n,u;return o(this,(function(o){switch(o.label){case 0:return[4,t.post("/user/email/verify/token",{body:JSON.stringify({})},i.default.preparePreAPIHook({recipePreAPIHook:e.preAPIHook,action:"SEND_VERIFY_EMAIL",options:a,userContext:s}),i.default.preparePostAPIHook({recipePostAPIHook:e.postAPIHook,userContext:s,action:"SEND_VERIFY_EMAIL"}))];case 1:return r=o.sent(),n=r.jsonBody,u=r.fetchResponse,[2,{status:n.status,fetchResponse:u}]}}))}))},getEmailVerificationTokenFromURL:function(){var e=(0,a.getQueryParams)("token");return void 0===e?"":e}}}t.default=s,t.getRecipeImplementation=s},8094:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.normaliseUserInput=void 0;var o=r(6069);t.normaliseUserInput=function(e){var t=n({functions:function(e){return e}},e.override);return n(n({},(0,o.normaliseRecipeModuleConfig)(e)),{override:t})}},6069:function(e,t){var r=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))},n=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.normaliseRecipeModuleConfig=void 0,t.normaliseRecipeModuleConfig=function(e){var t=this,o=e.preAPIHook;void 0===o&&(o=function(e){return r(t,void 0,void 0,(function(){return n(this,(function(t){return[2,e]}))}))});var i=e.postAPIHook;return void 0===i&&(i=function(){return r(t,void 0,void 0,(function(){return n(this,(function(e){return[2]}))}))}),{recipeId:e.recipeId,appInfo:e.appInfo,storageHandlers:e.storageHandlers,preAPIHook:o,postAPIHook:i}}},8122:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getNormalisedUserContext=t.checkForSSRErrorAndAppendIfNeeded=t.getQueryParams=t.isTest=t.normaliseInputAppInfoOrThrowError=t.appendQueryParamsToURL=void 0;var n=r(9092),o=r(7611),i=r(7992),a=r(1260);t.appendQueryParamsToURL=function(e,t){if(void 0===t)return e;try{var r=new URL(e);return Object.entries(t).forEach((function(e){var t=e[0],n=e[1];r.searchParams.set(t,n)})),r.href}catch(r){var n=e.startsWith("/")?"http:localhost":"http://localhost/",o=new URL("".concat(n).concat(e));return Object.entries(t).forEach((function(e){var t=e[0],r=e[1];o.searchParams.set(t,r)})),"".concat(o.pathname).concat(o.search)}},t.normaliseInputAppInfoOrThrowError=function(e){if(void 0===e)throw new Error("Please provide the appInfo object when calling supertokens.init");if(void 0===e.apiDomain)throw new Error("Please provide your apiDomain inside the appInfo object when calling supertokens.init");if(void 0===e.appName)throw new Error("Please provide your appName inside the appInfo object when calling supertokens.init");var t,r,n=new a.default("");return void 0!==e.apiGatewayPath&&(n=new a.default(e.apiGatewayPath)),{appName:e.appName,apiDomain:new i.default(e.apiDomain),apiBasePath:n.appendPath((t=o.DEFAULT_API_BASE_PATH,r=e.apiBasePath,void 0!==r?new a.default(r):new a.default(t)))}},t.isTest=function(){try{return"testing"===process.env.TEST_MODE}catch(e){return!1}},t.getQueryParams=function(e){var t=new URLSearchParams(n.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()).get(e);if(null!==t)return t},t.checkForSSRErrorAndAppendIfNeeded=function(e){return"undefined"==typeof window&&(e+=o.SSR_ERROR),e},t.getNormalisedUserContext=function(e){return void 0===e?{}:e}},255:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.supported_fdi=t.package_version=void 0,t.package_version="0.0.1",t.supported_fdi=["1.8","1.9","1.10"]},2225:function(e,t){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.getProxyObject=void 0,t.getProxyObject=function(e){for(var t=r(r({},e),{_call:function(e,t){throw new Error("This function should only be called through the recipe object")}}),n=function(e){"_call"!==e&&(t[e]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this._call(e,t)})},o=0,i=Object.keys(t);o<i.length;o++)n(i[o]);return t}},6333:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OverrideableBuilder=void 0;var n=r(2225),o=function(){function e(e){this.layers=[e],this.proxies=[]}return e.prototype.override=function(e){for(var t=(0,n.getProxyObject)(this.layers[0]),r=e(t,this),o=0,i=Object.keys(this.layers[0]);o<i.length;o++){var a=i[o];r[a]===t[a]||"_call"===a?delete r[a]:void 0===r[a]&&(r[a]=null)}return this.layers.push(r),this.proxies.push(t),this},e.prototype.build=function(){var e=this;if(this.result)return this.result;this.result={};for(var t=0,r=this.layers;t<r.length;t++)for(var n=r[t],o=0,i=Object.keys(n);o<i.length;o++){var a=i[o],s=n[a];void 0!==s&&(this.result[a]=null===s?void 0:"function"==typeof s?s.bind(this.result):s)}for(var u=function(t){c.proxies[t]._call=function(r,n){for(var o=t;o>=0;--o){var i=e.layers[o][r];if(null!=i)return i.bind(e.result).apply(void 0,n)}}},c=this,l=0;l<this.proxies.length;++l)u(l);return this.result},e}();t.OverrideableBuilder=o,t.default=o},1936:(e,t)=>{function r(){if("undefined"==typeof window)throw Error("If you are using this package with server-side rendering, please make sure that you are checking if the window object is defined.");return window}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultWindowHandlerImplementation={history:{replaceState:function(e,t,n){return r().history.replaceState(e,t,n)},getState:function(){return r().history.state}},location:{getHref:function(){return r().location.href},setHref:function(e){r().location.href=e},getSearch:function(){return r().location.search},getHash:function(){return r().location.hash},getPathName:function(){return r().location.pathname},assign:function(e){r().location.assign(e)},getHostName:function(){return r().location.hostname},getOrigin:function(){return r().location.origin}},getDocument:function(){return r().document},getLocalStorage:function(){return r().localStorage},getSessionStorage:function(){return r().sessionStorage}}},7860:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(1936),o=function(){function e(e){var t=function(e){return e};void 0!==e&&(t=e),this.windowHandler=t(n.defaultWindowHandlerImplementation)}return e.init=function(t){void 0===e.instance&&(e.instance=new e(t))},e.getReferenceOrThrow=function(){if(void 0===e.instance)throw new Error("SuperTokensWindowHandler must be initialized before calling this method.");return e.instance},e}();t.WindowHandlerReference=o,t.default=o},9092:(e,t,r)=>{t.__esModule=!0,function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(7860))}},t={},r=function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}(5857);supertokensEmailVerification=r})();