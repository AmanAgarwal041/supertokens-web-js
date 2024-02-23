"use strict";var supertokensUserRoles;(self.webpackChunksupertokens_web_js=self.webpackChunksupertokens_web_js||[]).push([[557,560],{7611:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SSR_ERROR=t.DEFAULT_API_BASE_PATH=void 0,t.DEFAULT_API_BASE_PATH="/auth",t.SSR_ERROR="\nIf you are trying to use this method doing server-side-rendering, please make sure you move this method inside a componentDidMount method or useEffect hook."},7992:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});function n(e,t){void 0===t&&(t=!1),e=e.trim();try{if(!e.startsWith("http://")&&!e.startsWith("https://"))throw new Error("Error converting to proper URL");var r=new URL(e);return t?r.hostname.startsWith("localhost")||(o=r.hostname,/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(o))?"http://"+r.host:"https://"+r.host:r.protocol+"//"+r.host}catch(e){}var o;if(e.startsWith("/"))throw new Error("Please provide a valid domain name");if(0===e.indexOf(".")&&(e=e.substr(1)),(-1!==e.indexOf(".")||e.startsWith("localhost"))&&!e.startsWith("http://")&&!e.startsWith("https://")){e="https://"+e;try{return new URL(e),n(e,!0)}catch(e){}}throw new Error("Please provide a valid domain name")}t.default=function(e){var t=this;this.getAsStringDangerous=function(){return t.value},this.value=n(e)}},1260:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});function n(e){e=e.trim();try{if(!e.startsWith("http://")&&!e.startsWith("https://"))throw new Error("Error converting to proper URL");return"/"===(e=new URL(e).pathname).charAt(e.length-1)?e.substr(0,e.length-1):e}catch(e){}if((function(e){if(-1===e.indexOf(".")||e.startsWith("/"))return!1;try{return-1!==new URL(e).hostname.indexOf(".")}catch(e){}try{return-1!==new URL("http://"+e).hostname.indexOf(".")}catch(e){}return!1}(e)||e.startsWith("localhost"))&&!e.startsWith("http://")&&!e.startsWith("https://"))return n(e="http://"+e);"/"!==e.charAt(0)&&(e="/"+e);try{return new URL("http://example.com"+e),n("http://example.com"+e)}catch(e){throw new Error("Please provide a valid URL path")}}t.default=function e(t){var r=this;this.startsWith=function(e){return r.value.startsWith(e.value)},this.appendPath=function(t){return new e(r.value+t.value)},this.getAsStringDangerous=function(){return r.value},this.value=n(t)}},1199:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EMAILVERIFICATION_CLAIM_ID=void 0,t.EMAILVERIFICATION_CLAIM_ID="st-ev"},1996:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){this.config=e}},1013:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.getInvalidClaimsFromResponse=t.getClaimValue=t.validateClaims=t.signOut=t.addAxiosInterceptors=t.doesSessionExist=t.attemptRefreshingSession=t.getAccessToken=t.getAccessTokenPayloadSecurely=t.getUserId=t.init=t.BooleanClaim=t.PrimitiveArrayClaim=t.PrimitiveClaim=void 0;var i=n(8122),a=n(6322),s=function(){function e(){}return e.init=function(e){return a.default.init(e)},e.getUserId=function(e){return a.default.getInstanceOrThrow().getUserId({userContext:(0,i.getNormalisedUserContext)(null==e?void 0:e.userContext)})},e.getAccessToken=function(e){return a.default.getInstanceOrThrow().getAccessToken({userContext:(0,i.getNormalisedUserContext)(null==e?void 0:e.userContext)})},e.getAccessTokenPayloadSecurely=function(e){return r(this,void 0,void 0,(function(){return o(this,(function(t){return[2,a.default.getInstanceOrThrow().getAccessTokenPayloadSecurely({userContext:(0,i.getNormalisedUserContext)(null==e?void 0:e.userContext)})]}))}))},e.attemptRefreshingSession=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){return[2,a.default.getInstanceOrThrow().attemptRefreshingSession()]}))}))},e.doesSessionExist=function(e){return a.default.getInstanceOrThrow().doesSessionExist({userContext:(0,i.getNormalisedUserContext)(null==e?void 0:e.userContext)})},e.addAxiosInterceptors=function(e,t){return a.default.addAxiosInterceptors(e,(0,i.getNormalisedUserContext)(t))},e.signOut=function(e){return a.default.getInstanceOrThrow().signOut({userContext:(0,i.getNormalisedUserContext)(null==e?void 0:e.userContext)})},e.getClaimValue=function(e){return a.default.getInstanceOrThrow().getClaimValue({claim:e.claim,userContext:(0,i.getNormalisedUserContext)(null==e?void 0:e.userContext)})},e.validateClaims=function(e){return a.default.getInstanceOrThrow().validateClaims({overrideGlobalClaimValidators:null==e?void 0:e.overrideGlobalClaimValidators,userContext:(0,i.getNormalisedUserContext)(null==e?void 0:e.userContext)})},e.getInvalidClaimsFromResponse=function(e){return a.default.getInstanceOrThrow().getInvalidClaimsFromResponse({response:e.response,userContext:(0,i.getNormalisedUserContext)(null==e?void 0:e.userContext)})},e}();t.default=s;var u=s.init;t.init=u;var l=s.getUserId;t.getUserId=l;var c=s.getAccessTokenPayloadSecurely;t.getAccessTokenPayloadSecurely=c;var d=s.getAccessToken;t.getAccessToken=d;var f=s.attemptRefreshingSession;t.attemptRefreshingSession=f;var h=s.doesSessionExist;t.doesSessionExist=h;var p=s.addAxiosInterceptors;t.addAxiosInterceptors=p;var v=s.signOut;t.signOut=v;var m=s.validateClaims;t.validateClaims=m;var g=s.getClaimValue;t.getClaimValue=g;var y=s.getInvalidClaimsFromResponse;t.getInvalidClaimsFromResponse=y;var w=n(1757);Object.defineProperty(t,"PrimitiveClaim",{enumerable:!0,get:function(){return w.PrimitiveClaim}}),Object.defineProperty(t,"PrimitiveArrayClaim",{enumerable:!0,get:function(){return w.PrimitiveArrayClaim}}),Object.defineProperty(t,"BooleanClaim",{enumerable:!0,get:function(){return w.BooleanClaim}})},6322:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},u=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.Recipe=void 0;var l=n(1996),c=n(1757),d=n(8122),f=[n(1199).EMAILVERIFICATION_CLAIM_ID],h=function(e){function t(t){var n=e.call(this,t)||this;return n.getUserId=function(e){return c.default.getUserId({userContext:e.userContext})},n.getAccessToken=function(e){return a(n,void 0,void 0,(function(){return s(this,(function(t){return[2,c.default.getAccessToken({userContext:e.userContext})]}))}))},n.getAccessTokenPayloadSecurely=function(e){return a(n,void 0,void 0,(function(){return s(this,(function(t){return[2,c.default.getAccessTokenPayloadSecurely({userContext:e.userContext})]}))}))},n.doesSessionExist=function(e){return c.default.doesSessionExist({userContext:e.userContext})},n.signOut=function(e){return c.default.signOut({userContext:e.userContext})},n.attemptRefreshingSession=function(){return a(n,void 0,void 0,(function(){return s(this,(function(e){return[2,c.default.attemptRefreshingSession()]}))}))},n.validateClaims=function(e){return c.default.validateClaims(e.overrideGlobalClaimValidators,e.userContext)},c.default.init(i(i({},t),{override:{functions:function(e,n){var r;return n.override((function(e){return i(i({},e),{getGlobalClaimValidators:function(t){var n=e.getGlobalClaimValidators(t);return u(u([],n.filter((function(e){return f.includes(e.id)})),!0),n.filter((function(e){return!f.includes(e.id)})),!0)}})})),(null===(r=t.override)||void 0===r?void 0:r.functions)&&n.override(t.override.functions),e}},preAPIHook:function(e){return a(n,void 0,void 0,(function(){var n,r;return s(this,(function(o){return(n=new Headers(e.requestInit.headers)).set("rid",t.recipeId),r=i(i({},e),{requestInit:i(i({},e.requestInit),{headers:n})}),void 0===t.preAPIHook?[2,r]:[2,t.preAPIHook(e)]}))}))},apiDomain:t.appInfo.apiDomain.getAsStringDangerous(),apiBasePath:t.appInfo.apiBasePath.getAsStringDangerous()})),n}return o(t,e),t.init=function(e){return function(n,r,o){return t.instance=new t(i(i({},e),{appInfo:n,recipeId:t.RECIPE_ID,enableDebugLogs:o})),t.instance}},t.prototype.getClaimValue=function(e){return c.default.getClaimValue(e)},t.prototype.getInvalidClaimsFromResponse=function(e){return c.default.getInvalidClaimsFromResponse(e)},t.addAxiosInterceptors=function(e,t){return c.default.addAxiosInterceptors(e,t)},t.getInstanceOrThrow=function(){if(void 0===t.instance){var e="No instance of Session found. Make sure to call the Session.init method.";throw e=(0,d.checkForSSRErrorAndAppendIfNeeded)(e),Error(e)}return t.instance},t.reset=function(){(0,d.isTest)()&&(t.instance=void 0)},t.RECIPE_ID="session",t}(l.default);t.Recipe=h,t.default=h},1530:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PermissionClaim=t.UserRoleClaim=void 0;var r=n(4244);Object.defineProperty(t,"UserRoleClaim",{enumerable:!0,get:function(){return r.UserRoleClaim}});var o=n(2711);Object.defineProperty(t,"PermissionClaim",{enumerable:!0,get:function(){return o.PermissionClaim}});var i=function(){function e(){}return e.UserRoleClaim=r.UserRoleClaim,e.PermissionClaim=o.PermissionClaim,e}();t.default=i},2711:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.PermissionClaim=void 0;var i=n(1013);t.PermissionClaim=new i.PrimitiveArrayClaim({id:"st-perm",refresh:function(){return r(void 0,void 0,void 0,(function(){return o(this,(function(e){return[2]}))}))},defaultMaxAgeInSeconds:Number.MAX_SAFE_INTEGER})},4244:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.UserRoleClaim=void 0;var i=n(1013);t.UserRoleClaim=new i.PrimitiveArrayClaim({id:"st-role",refresh:function(){return r(void 0,void 0,void 0,(function(){return o(this,(function(e){return[2]}))}))},defaultMaxAgeInSeconds:Number.MAX_SAFE_INTEGER})},8122:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.normaliseUser=t.normaliseUserResponse=t.getGlobalClaimValidators=t.getHashFromLocation=t.getNormalisedUserContext=t.checkForSSRErrorAndAppendIfNeeded=t.getAllQueryParams=t.getQueryParams=t.isTest=t.normaliseInputAppInfoOrThrowError=t.appendQueryParamsToURL=void 0;var r=n(7528),o=n(7611),i=n(7992),a=n(1260),s=n(5811);function u(e,t){if("loginMethods"in t)return t;var n=void 0!==t.email?[t.email]:[],r=void 0!==t.phoneNumber?[t.phoneNumber]:[],o=void 0!==t.thirdParty?[t.thirdParty]:[];return{id:t.id,emails:n,phoneNumbers:r,thirdParty:o,isPrimaryUser:!1,tenantIds:t.tenantIds,timeJoined:t.timeJoined,loginMethods:[{recipeId:e,recipeUserId:t.id,timeJoined:t.timeJoined,tenantIds:t.tenantIds,email:t.email,phoneNumber:t.email}]}}t.appendQueryParamsToURL=function(e,t){if(void 0===t)return e;try{var n=new URL(e);return Object.entries(t).forEach((function(e){var t=e[0],r=e[1];n.searchParams.set(t,r)})),n.href}catch(n){var r=e.startsWith("/")?"http:localhost":"http://localhost/",o=new URL("".concat(r).concat(e));return Object.entries(t).forEach((function(e){var t=e[0],n=e[1];o.searchParams.set(t,n)})),"".concat(o.pathname).concat(o.search)}},t.normaliseInputAppInfoOrThrowError=function(e){if(void 0===e)throw new Error("Please provide the appInfo object when calling supertokens.init");if(void 0===e.apiDomain)throw new Error("Please provide your apiDomain inside the appInfo object when calling supertokens.init");if(void 0===e.appName)throw new Error("Please provide your appName inside the appInfo object when calling supertokens.init");var t,n,r=new a.default("");return void 0!==e.apiGatewayPath&&(r=new a.default(e.apiGatewayPath)),{appName:e.appName,apiDomain:new i.default(e.apiDomain),apiBasePath:r.appendPath((t=o.DEFAULT_API_BASE_PATH,n=e.apiBasePath,void 0!==n?new a.default(n):new a.default(t)))}},t.isTest=function(){try{return"testing"===process.env.TEST_MODE}catch(e){return!1}},t.getQueryParams=function(e){var t=new URLSearchParams(r.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()).get(e);if(null!==t)return t},t.getAllQueryParams=function(){return new URLSearchParams(r.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch())},t.checkForSSRErrorAndAppendIfNeeded=function(e){return"undefined"==typeof window&&(e+=o.SSR_ERROR),e},t.getNormalisedUserContext=function(e){return void 0===e?{}:e},t.getHashFromLocation=function(){return r.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getHash().substring(1)},t.getGlobalClaimValidators=function(e){var t=e.overrideGlobalClaimValidators,n=e.userContext;return(0,s.getGlobalClaimValidators)(t,n)},t.normaliseUserResponse=function(e,t){return"createdNewRecipeUser"in t?t:{createdNewRecipeUser:t.createdNewUser,user:u(e,t.user)}},t.normaliseUser=u},7528:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WindowHandlerReference=void 0;var r=n(9092);Object.defineProperty(t,"WindowHandlerReference",{enumerable:!0,get:function(){return r.WindowHandlerReference}})},4328:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getGlobalClaimValidators=void 0;var r=n(2652),o=n(788),i=n(2582);t.getGlobalClaimValidators=function(e,t){var n=(0,r.getNormalisedUserContext)(t),a=i.default.getClaimValidatorsAddedByOtherRecipes(),s=o.default.recipeImpl.getGlobalClaimValidators({claimValidatorsAddedByOtherRecipes:a,userContext:n});return void 0!==e?e(s,n):s}},5811:(e,t,n)=>{t.__esModule=!0,function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(4328))},9092:(e,t,n)=>{t.__esModule=!0,function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(7860))}},e=>{var t=(1530,e(e.s=1530));supertokensUserRoles=t}]);