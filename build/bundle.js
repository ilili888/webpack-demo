/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(46);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueRouter = __webpack_require__(48);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _jquery = __webpack_require__(49);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(51);

	_vue2.default.use(_vueRouter2.default);

	var router = __webpack_require__(55).default;
	router.start(__webpack_require__(70), 'app');

	// let router = new VueRouter()
	// router.map({
	//   '/': { component: require('./pages/home.vue') }
	// })
	// router.start(require('./pages/layout.vue'), 'app')

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.21
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};function set(obj,key,val){if(hasOwn(obj,key)){obj[key]=val;return;}if(obj._isVue){set(obj._data,key,val);return;}var ob=obj.__ob__;if(!ob){obj[key]=val;return;}ob.convert(key,val);ob.dep.notify();if(ob.vms){var i=ob.vms.length;while(i--){var vm=ob.vms[i];vm._proxy(key);vm._digest();}}return val;} /**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */function del(obj,key){if(!hasOwn(obj,key)){return;}delete obj[key];var ob=obj.__ob__;if(!ob){return;}ob.dep.notify();if(ob.vms){var i=ob.vms.length;while(i--){var vm=ob.vms[i];vm._unproxy(key);vm._digest();}}}var hasOwnProperty=Object.prototype.hasOwnProperty; /**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */function hasOwn(obj,key){return hasOwnProperty.call(obj,key);} /**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */var literalValueRE=/^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;function isLiteral(exp){return literalValueRE.test(exp);} /**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */function isReserved(str){var c=(str+'').charCodeAt(0);return c===0x24||c===0x5F;} /**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */function _toString(value){return value==null?'':value.toString();} /**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */function toNumber(value){if(typeof value!=='string'){return value;}else {var parsed=Number(value);return isNaN(parsed)?value:parsed;}} /**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */function toBoolean(value){return value==='true'?true:value==='false'?false:value;} /**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */function stripQuotes(str){var a=str.charCodeAt(0);var b=str.charCodeAt(str.length-1);return a===b&&(a===0x22||a===0x27)?str.slice(1,-1):str;} /**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */var camelizeRE=/-(\w)/g;function camelize(str){return str.replace(camelizeRE,toUpper);}function toUpper(_,c){return c?c.toUpperCase():'';} /**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */var hyphenateRE=/([a-z\d])([A-Z])/g;function hyphenate(str){return str.replace(hyphenateRE,'$1-$2').toLowerCase();} /**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */var classifyRE=/(?:^|[-_\/])(\w)/g;function classify(str){return str.replace(classifyRE,toUpper);} /**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */function bind(fn,ctx){return function(a){var l=arguments.length;return l?l>1?fn.apply(ctx,arguments):fn.call(ctx,a):fn.call(ctx);};} /**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */function toArray(list,start){start=start||0;var i=list.length-start;var ret=new Array(i);while(i--){ret[i]=list[i+start];}return ret;} /**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */function extend(to,from){var keys=Object.keys(from);var i=keys.length;while(i--){to[keys[i]]=from[keys[i]];}return to;} /**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */function isObject(obj){return obj!==null&&(typeof obj==='undefined'?'undefined':_typeof(obj))==='object';} /**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */var toString=Object.prototype.toString;var OBJECT_STRING='[object Object]';function isPlainObject(obj){return toString.call(obj)===OBJECT_STRING;} /**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */var isArray=Array.isArray; /**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */function def(obj,key,val,enumerable){Object.defineProperty(obj,key,{value:val,enumerable:!!enumerable,writable:true,configurable:true});} /**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */function _debounce(func,wait){var timeout,args,context,timestamp,result;var later=function later(){var last=Date.now()-timestamp;if(last<wait&&last>=0){timeout=setTimeout(later,wait-last);}else {timeout=null;result=func.apply(context,args);if(!timeout)context=args=null;}};return function(){context=this;args=arguments;timestamp=Date.now();if(!timeout){timeout=setTimeout(later,wait);}return result;};} /**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */function indexOf(arr,obj){var i=arr.length;while(i--){if(arr[i]===obj)return i;}return -1;} /**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */function cancellable(fn){var cb=function cb(){if(!cb.cancelled){return fn.apply(this,arguments);}};cb.cancel=function(){cb.cancelled=true;};return cb;} /**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */function looseEqual(a,b){ /* eslint-disable eqeqeq */return a==b||(isObject(a)&&isObject(b)?JSON.stringify(a)===JSON.stringify(b):false); /* eslint-enable eqeqeq */}var hasProto='__proto__' in {}; // Browser environment sniffing
	var inBrowser=typeof window!=='undefined'&&Object.prototype.toString.call(window)!=='[object Object]'; // detect devtools
	var devtools=inBrowser&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__; // UA sniffing for working around browser-specific quirks
	var UA=inBrowser&&window.navigator.userAgent.toLowerCase();var isIE9=UA&&UA.indexOf('msie 9.0')>0;var isAndroid=UA&&UA.indexOf('android')>0;var transitionProp=undefined;var transitionEndEvent=undefined;var animationProp=undefined;var animationEndEvent=undefined; // Transition property/event sniffing
	if(inBrowser&&!isIE9){var isWebkitTrans=window.ontransitionend===undefined&&window.onwebkittransitionend!==undefined;var isWebkitAnim=window.onanimationend===undefined&&window.onwebkitanimationend!==undefined;transitionProp=isWebkitTrans?'WebkitTransition':'transition';transitionEndEvent=isWebkitTrans?'webkitTransitionEnd':'transitionend';animationProp=isWebkitAnim?'WebkitAnimation':'animation';animationEndEvent=isWebkitAnim?'webkitAnimationEnd':'animationend';} /**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */var nextTick=function(){var callbacks=[];var pending=false;var timerFunc;function nextTickHandler(){pending=false;var copies=callbacks.slice(0);callbacks=[];for(var i=0;i<copies.length;i++){copies[i]();}} /* istanbul ignore if */if(typeof MutationObserver!=='undefined'){var counter=1;var observer=new MutationObserver(nextTickHandler);var textNode=document.createTextNode(counter);observer.observe(textNode,{characterData:true});timerFunc=function timerFunc(){counter=(counter+1)%2;textNode.data=counter;};}else { // webpack attempts to inject a shim for setImmediate
	// if it is used as a global, so we have to work around that to
	// avoid bundling unnecessary code.
	var context=inBrowser?window:typeof global!=='undefined'?global:{};timerFunc=context.setImmediate||setTimeout;}return function(cb,ctx){var func=ctx?function(){cb.call(ctx);}:cb;callbacks.push(func);if(pending)return;pending=true;timerFunc(nextTickHandler,0);};}();function Cache(limit){this.size=0;this.limit=limit;this.head=this.tail=undefined;this._keymap=Object.create(null);}var p=Cache.prototype; /**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */p.put=function(key,value){var removed;if(this.size===this.limit){removed=this.shift();}var entry=this.get(key,true);if(!entry){entry={key:key};this._keymap[key]=entry;if(this.tail){this.tail.newer=entry;entry.older=this.tail;}else {this.head=entry;}this.tail=entry;this.size++;}entry.value=value;return removed;}; /**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */p.shift=function(){var entry=this.head;if(entry){this.head=this.head.newer;this.head.older=undefined;entry.newer=entry.older=undefined;this._keymap[entry.key]=undefined;this.size--;}return entry;}; /**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */p.get=function(key,returnEntry){var entry=this._keymap[key];if(entry===undefined)return;if(entry===this.tail){return returnEntry?entry:entry.value;} // HEAD--------------TAIL
	//   <.older   .newer>
	//  <--- add direction --
	//   A  B  C  <D>  E
	if(entry.newer){if(entry===this.head){this.head=entry.newer;}entry.newer.older=entry.older; // C <-- E.
	}if(entry.older){entry.older.newer=entry.newer; // C. --> E
	}entry.newer=undefined; // D --x
	entry.older=this.tail; // D. --> E
	if(this.tail){this.tail.newer=entry; // E. <-- D
	}this.tail=entry;return returnEntry?entry:entry.value;};var cache$1=new Cache(1000);var filterTokenRE=/[^\s'"]+|'[^']*'|"[^"]*"/g;var reservedArgRE=/^in$|^-?\d+/; /**
	 * Parser state
	 */var str;var dir;var c;var prev;var i;var l;var lastFilterIndex;var inSingle;var inDouble;var curly;var square;var paren; /**
	 * Push a filter to the current directive object
	 */function pushFilter(){var exp=str.slice(lastFilterIndex,i).trim();var filter;if(exp){filter={};var tokens=exp.match(filterTokenRE);filter.name=tokens[0];if(tokens.length>1){filter.args=tokens.slice(1).map(processFilterArg);}}if(filter){(dir.filters=dir.filters||[]).push(filter);}lastFilterIndex=i+1;} /**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */function processFilterArg(arg){if(reservedArgRE.test(arg)){return {value:toNumber(arg),dynamic:false};}else {var stripped=stripQuotes(arg);var dynamic=stripped===arg;return {value:dynamic?arg:stripped,dynamic:dynamic};}} /**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */function parseDirective(s){var hit=cache$1.get(s);if(hit){return hit;} // reset parser state
	str=s;inSingle=inDouble=false;curly=square=paren=0;lastFilterIndex=0;dir={};for(i=0,l=str.length;i<l;i++){prev=c;c=str.charCodeAt(i);if(inSingle){ // check single quote
	if(c===0x27&&prev!==0x5C)inSingle=!inSingle;}else if(inDouble){ // check double quote
	if(c===0x22&&prev!==0x5C)inDouble=!inDouble;}else if(c===0x7C&& // pipe
	str.charCodeAt(i+1)!==0x7C&&str.charCodeAt(i-1)!==0x7C){if(dir.expression==null){ // first filter, end of expression
	lastFilterIndex=i+1;dir.expression=str.slice(0,i).trim();}else { // already has filter
	pushFilter();}}else {switch(c){case 0x22:inDouble=true;break; // "
	case 0x27:inSingle=true;break; // '
	case 0x28:paren++;break; // (
	case 0x29:paren--;break; // )
	case 0x5B:square++;break; // [
	case 0x5D:square--;break; // ]
	case 0x7B:curly++;break; // {
	case 0x7D:curly--;break; // }
	}}}if(dir.expression==null){dir.expression=str.slice(0,i).trim();}else if(lastFilterIndex!==0){pushFilter();}cache$1.put(s,dir);return dir;}var directive=Object.freeze({parseDirective:parseDirective});var regexEscapeRE=/[-.*+?^${}()|[\]\/\\]/g;var cache=undefined;var tagRE=undefined;var htmlRE=undefined; /**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */function escapeRegex(str){return str.replace(regexEscapeRE,'\\$&');}function compileRegex(){var open=escapeRegex(config.delimiters[0]);var close=escapeRegex(config.delimiters[1]);var unsafeOpen=escapeRegex(config.unsafeDelimiters[0]);var unsafeClose=escapeRegex(config.unsafeDelimiters[1]);tagRE=new RegExp(unsafeOpen+'((?:.|\\n)+?)'+unsafeClose+'|'+open+'((?:.|\\n)+?)'+close,'g');htmlRE=new RegExp('^'+unsafeOpen+'.*'+unsafeClose+'$'); // reset cache
	cache=new Cache(1000);} /**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */function parseText(text){if(!cache){compileRegex();}var hit=cache.get(text);if(hit){return hit;}if(!tagRE.test(text)){return null;}var tokens=[];var lastIndex=tagRE.lastIndex=0;var match,index,html,value,first,oneTime; /* eslint-disable no-cond-assign */while(match=tagRE.exec(text)){ /* eslint-enable no-cond-assign */index=match.index; // push text token
	if(index>lastIndex){tokens.push({value:text.slice(lastIndex,index)});} // tag token
	html=htmlRE.test(match[0]);value=html?match[1]:match[2];first=value.charCodeAt(0);oneTime=first===42; // *
	value=oneTime?value.slice(1):value;tokens.push({tag:true,value:value.trim(),html:html,oneTime:oneTime});lastIndex=index+match[0].length;}if(lastIndex<text.length){tokens.push({value:text.slice(lastIndex)});}cache.put(text,tokens);return tokens;} /**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */function tokensToExp(tokens,vm){if(tokens.length>1){return tokens.map(function(token){return formatToken(token,vm);}).join('+');}else {return formatToken(tokens[0],vm,true);}} /**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */function formatToken(token,vm,single){return token.tag?token.oneTime&&vm?'"'+vm.$eval(token.value)+'"':inlineFilters(token.value,single):'"'+token.value+'"';} /**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */var filterRE=/[^|]\|[^|]/;function inlineFilters(exp,single){if(!filterRE.test(exp)){return single?exp:'('+exp+')';}else {var dir=parseDirective(exp);if(!dir.filters){return '('+exp+')';}else {return 'this._applyFilters('+dir.expression+ // value
	',null,'+ // oldValue (null for read)
	JSON.stringify(dir.filters)+ // filter descriptors
	',false)'; // write?
	}}}var text=Object.freeze({compileRegex:compileRegex,parseText:parseText,tokensToExp:tokensToExp});var delimiters=['{{','}}'];var unsafeDelimiters=['{{{','}}}'];var config=Object.defineProperties({ /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */debug:false, /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */silent:false, /**
	   * Whether to use async rendering.
	   */async:true, /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */warnExpressionErrors:true, /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */devtools:process.env.NODE_ENV!=='production', /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */_delimitersChanged:true, /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */_assetTypes:['component','directive','elementDirective','filter','transition','partial'], /**
	   * prop binding modes
	   */_propBindingModes:{ONE_WAY:0,TWO_WAY:1,ONE_TIME:2}, /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */_maxUpdateCount:100},{delimiters:{ /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */get:function get(){return delimiters;},set:function set(val){delimiters=val;compileRegex();},configurable:true,enumerable:true},unsafeDelimiters:{get:function get(){return unsafeDelimiters;},set:function set(val){unsafeDelimiters=val;compileRegex();},configurable:true,enumerable:true}});var warn=undefined;var formatComponentName=undefined;if(process.env.NODE_ENV!=='production'){(function(){var hasConsole=typeof console!=='undefined';warn=function warn(msg,vm){if(hasConsole&&!config.silent){console.error('[Vue warn]: '+msg+(vm?formatComponentName(vm):''));}};formatComponentName=function formatComponentName(vm){var name=vm._isVue?vm.$options.name:vm.name;return name?' (found in component: <'+hyphenate(name)+'>)':'';};})();} /**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */function appendWithTransition(el,target,vm,cb){applyTransition(el,1,function(){target.appendChild(el);},vm,cb);} /**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */function beforeWithTransition(el,target,vm,cb){applyTransition(el,1,function(){before(el,target);},vm,cb);} /**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */function removeWithTransition(el,vm,cb){applyTransition(el,-1,function(){remove(el);},vm,cb);} /**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */function applyTransition(el,direction,op,vm,cb){var transition=el.__v_trans;if(!transition|| // skip if there are no js hooks and CSS transition is
	// not supported
	!transition.hooks&&!transitionEndEvent|| // skip transitions for initial compile
	!vm._isCompiled|| // if the vm is being manipulated by a parent directive
	// during the parent's compilation phase, skip the
	// animation.
	vm.$parent&&!vm.$parent._isCompiled){op();if(cb)cb();return;}var action=direction>0?'enter':'leave';transition[action](op,cb);}var transition=Object.freeze({appendWithTransition:appendWithTransition,beforeWithTransition:beforeWithTransition,removeWithTransition:removeWithTransition,applyTransition:applyTransition}); /**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */function query(el){if(typeof el==='string'){var selector=el;el=document.querySelector(el);if(!el){process.env.NODE_ENV!=='production'&&warn('Cannot find element: '+selector);}}return el;} /**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */function inDoc(node){var doc=document.documentElement;var parent=node&&node.parentNode;return doc===node||doc===parent||!!(parent&&parent.nodeType===1&&doc.contains(parent));} /**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */function getAttr(node,_attr){var val=node.getAttribute(_attr);if(val!==null){node.removeAttribute(_attr);}return val;} /**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */function getBindAttr(node,name){var val=getAttr(node,':'+name);if(val===null){val=getAttr(node,'v-bind:'+name);}return val;} /**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */function hasBindAttr(node,name){return node.hasAttribute(name)||node.hasAttribute(':'+name)||node.hasAttribute('v-bind:'+name);} /**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */function before(el,target){target.parentNode.insertBefore(el,target);} /**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */function after(el,target){if(target.nextSibling){before(el,target.nextSibling);}else {target.parentNode.appendChild(el);}} /**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */function remove(el){el.parentNode.removeChild(el);} /**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */function prepend(el,target){if(target.firstChild){before(el,target.firstChild);}else {target.appendChild(el);}} /**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */function replace(target,el){var parent=target.parentNode;if(parent){parent.replaceChild(el,target);}} /**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */function on(el,event,cb,useCapture){el.addEventListener(event,cb,useCapture);} /**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */function off(el,event,cb){el.removeEventListener(event,cb);} /**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */function getClass(el){var classname=el.className;if((typeof classname==='undefined'?'undefined':_typeof(classname))==='object'){classname=classname.baseVal||'';}return classname;} /**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */function setClass(el,cls){ /* istanbul ignore if */if(isIE9&&!/svg$/.test(el.namespaceURI)){el.className=cls;}else {el.setAttribute('class',cls);}} /**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */function addClass(el,cls){if(el.classList){el.classList.add(cls);}else {var cur=' '+getClass(el)+' ';if(cur.indexOf(' '+cls+' ')<0){setClass(el,(cur+cls).trim());}}} /**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */function removeClass(el,cls){if(el.classList){el.classList.remove(cls);}else {var cur=' '+getClass(el)+' ';var tar=' '+cls+' ';while(cur.indexOf(tar)>=0){cur=cur.replace(tar,' ');}setClass(el,cur.trim());}if(!el.className){el.removeAttribute('class');}} /**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */function extractContent(el,asFragment){var child;var rawContent; /* istanbul ignore if */if(isTemplate(el)&&isFragment(el.content)){el=el.content;}if(el.hasChildNodes()){trimNode(el);rawContent=asFragment?document.createDocumentFragment():document.createElement('div'); /* eslint-disable no-cond-assign */while(child=el.firstChild){ /* eslint-enable no-cond-assign */rawContent.appendChild(child);}}return rawContent;} /**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */function trimNode(node){var child; /* eslint-disable no-sequences */while(child=node.firstChild,isTrimmable(child)){node.removeChild(child);}while(child=node.lastChild,isTrimmable(child)){node.removeChild(child);} /* eslint-enable no-sequences */}function isTrimmable(node){return node&&(node.nodeType===3&&!node.data.trim()||node.nodeType===8);} /**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */function isTemplate(el){return el.tagName&&el.tagName.toLowerCase()==='template';} /**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */function createAnchor(content,persist){var anchor=config.debug?document.createComment(content):document.createTextNode(persist?' ':'');anchor.__v_anchor=true;return anchor;} /**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */var refRE=/^v-ref:/;function findRef(node){if(node.hasAttributes()){var attrs=node.attributes;for(var i=0,l=attrs.length;i<l;i++){var name=attrs[i].name;if(refRE.test(name)){return camelize(name.replace(refRE,''));}}}} /**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */function mapNodeRange(node,end,op){var next;while(node!==end){next=node.nextSibling;op(node);node=next;}op(end);} /**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */function removeNodeRange(start,end,vm,frag,cb){var done=false;var removed=0;var nodes=[];mapNodeRange(start,end,function(node){if(node===end)done=true;nodes.push(node);removeWithTransition(node,vm,onRemoved);});function onRemoved(){removed++;if(done&&removed>=nodes.length){for(var i=0;i<nodes.length;i++){frag.appendChild(nodes[i]);}cb&&cb();}}} /**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */function isFragment(node){return node&&node.nodeType===11;} /**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */function getOuterHTML(el){if(el.outerHTML){return el.outerHTML;}else {var container=document.createElement('div');container.appendChild(el.cloneNode(true));return container.innerHTML;}}var commonTagRE=/^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;var reservedTagRE=/^(slot|partial|component)$/i;var isUnknownElement=undefined;if(process.env.NODE_ENV!=='production'){isUnknownElement=function isUnknownElement(el,tag){if(tag.indexOf('-')>-1){ // http://stackoverflow.com/a/28210364/1070244
	return el.constructor===window.HTMLUnknownElement||el.constructor===window.HTMLElement;}else {return (/HTMLUnknownElement/.test(el.toString())&& // Chrome returns unknown for several HTML5 elements.
	// https://code.google.com/p/chromium/issues/detail?id=540526
	!/^(data|time|rtc|rb)$/.test(tag));}};} /**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */function checkComponentAttr(el,options){var tag=el.tagName.toLowerCase();var hasAttrs=el.hasAttributes();if(!commonTagRE.test(tag)&&!reservedTagRE.test(tag)){if(resolveAsset(options,'components',tag)){return {id:tag};}else {var is=hasAttrs&&getIsBinding(el);if(is){return is;}else if(process.env.NODE_ENV!=='production'){var expectedTag=options._componentNameMap&&options._componentNameMap[tag];if(expectedTag){warn('Unknown custom element: <'+tag+'> - '+'did you mean <'+expectedTag+'>? '+'HTML is case-insensitive, remember to use kebab-case in templates.');}else if(isUnknownElement(el,tag)){warn('Unknown custom element: <'+tag+'> - did you '+'register the component correctly? For recursive components, '+'make sure to provide the "name" option.');}}}}else if(hasAttrs){return getIsBinding(el);}} /**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @return {Object|undefined}
	 */function getIsBinding(el){ // dynamic syntax
	var exp=getAttr(el,'is');if(exp!=null){return {id:exp};}else {exp=getBindAttr(el,'is');if(exp!=null){return {id:exp,dynamic:true};}}} /**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */var strats=config.optionMergeStrategies=Object.create(null); /**
	 * Helper that recursively merges two data objects together.
	 */function mergeData(to,from){var key,toVal,fromVal;for(key in from){toVal=to[key];fromVal=from[key];if(!hasOwn(to,key)){set(to,key,fromVal);}else if(isObject(toVal)&&isObject(fromVal)){mergeData(toVal,fromVal);}}return to;} /**
	 * Data
	 */strats.data=function(parentVal,childVal,vm){if(!vm){ // in a Vue.extend merge, both should be functions
	if(!childVal){return parentVal;}if(typeof childVal!=='function'){process.env.NODE_ENV!=='production'&&warn('The "data" option should be a function '+'that returns a per-instance value in component '+'definitions.',vm);return parentVal;}if(!parentVal){return childVal;} // when parentVal & childVal are both present,
	// we need to return a function that returns the
	// merged result of both functions... no need to
	// check if parentVal is a function here because
	// it has to be a function to pass previous merges.
	return function mergedDataFn(){return mergeData(childVal.call(this),parentVal.call(this));};}else if(parentVal||childVal){return function mergedInstanceDataFn(){ // instance merge
	var instanceData=typeof childVal==='function'?childVal.call(vm):childVal;var defaultData=typeof parentVal==='function'?parentVal.call(vm):undefined;if(instanceData){return mergeData(instanceData,defaultData);}else {return defaultData;}};}}; /**
	 * El
	 */strats.el=function(parentVal,childVal,vm){if(!vm&&childVal&&typeof childVal!=='function'){process.env.NODE_ENV!=='production'&&warn('The "el" option should be a function '+'that returns a per-instance value in component '+'definitions.',vm);return;}var ret=childVal||parentVal; // invoke the element factory if this is instance merge
	return vm&&typeof ret==='function'?ret.call(vm):ret;}; /**
	 * Hooks and param attributes are merged as arrays.
	 */strats.init=strats.created=strats.ready=strats.attached=strats.detached=strats.beforeCompile=strats.compiled=strats.beforeDestroy=strats.destroyed=strats.activate=function(parentVal,childVal){return childVal?parentVal?parentVal.concat(childVal):isArray(childVal)?childVal:[childVal]:parentVal;}; /**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */function mergeAssets(parentVal,childVal){var res=Object.create(parentVal);return childVal?extend(res,guardArrayAssets(childVal)):res;}config._assetTypes.forEach(function(type){strats[type+'s']=mergeAssets;}); /**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */strats.watch=strats.events=function(parentVal,childVal){if(!childVal)return parentVal;if(!parentVal)return childVal;var ret={};extend(ret,parentVal);for(var key in childVal){var parent=ret[key];var child=childVal[key];if(parent&&!isArray(parent)){parent=[parent];}ret[key]=parent?parent.concat(child):[child];}return ret;}; /**
	 * Other object hashes.
	 */strats.props=strats.methods=strats.computed=function(parentVal,childVal){if(!childVal)return parentVal;if(!parentVal)return childVal;var ret=Object.create(null);extend(ret,parentVal);extend(ret,childVal);return ret;}; /**
	 * Default strategy.
	 */var defaultStrat=function defaultStrat(parentVal,childVal){return childVal===undefined?parentVal:childVal;}; /**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */function guardComponents(options){if(options.components){var components=options.components=guardArrayAssets(options.components);var ids=Object.keys(components);var def;if(process.env.NODE_ENV!=='production'){var map=options._componentNameMap={};}for(var i=0,l=ids.length;i<l;i++){var key=ids[i];if(commonTagRE.test(key)||reservedTagRE.test(key)){process.env.NODE_ENV!=='production'&&warn('Do not use built-in or reserved HTML elements as component '+'id: '+key);continue;} // record a all lowercase <-> kebab-case mapping for
	// possible custom element case error warning
	if(process.env.NODE_ENV!=='production'){map[key.replace(/-/g,'').toLowerCase()]=hyphenate(key);}def=components[key];if(isPlainObject(def)){components[key]=Vue.extend(def);}}}} /**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */function guardProps(options){var props=options.props;var i,val;if(isArray(props)){options.props={};i=props.length;while(i--){val=props[i];if(typeof val==='string'){options.props[val]=null;}else if(val.name){options.props[val.name]=val;}}}else if(isPlainObject(props)){var keys=Object.keys(props);i=keys.length;while(i--){val=props[keys[i]];if(typeof val==='function'){props[keys[i]]={type:val};}}}} /**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */function guardArrayAssets(assets){if(isArray(assets)){var res={};var i=assets.length;var asset;while(i--){asset=assets[i];var id=typeof asset==='function'?asset.options&&asset.options.name||asset.id:asset.name||asset.id;if(!id){process.env.NODE_ENV!=='production'&&warn('Array-syntax assets must provide a "name" or "id" field.');}else {res[id]=asset;}}return res;}return assets;} /**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */function mergeOptions(parent,child,vm){guardComponents(child);guardProps(child);var options={};var key;if(child.mixins){for(var i=0,l=child.mixins.length;i<l;i++){parent=mergeOptions(parent,child.mixins[i],vm);}}for(key in parent){mergeField(key);}for(key in child){if(!hasOwn(parent,key)){mergeField(key);}}function mergeField(key){var strat=strats[key]||defaultStrat;options[key]=strat(parent[key],child[key],vm,key);}return options;} /**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */function resolveAsset(options,type,id,warnMissing){ /* istanbul ignore if */if(typeof id!=='string'){return;}var assets=options[type];var camelizedId;var res=assets[id]|| // camelCase ID
	assets[camelizedId=camelize(id)]|| // Pascal Case ID
	assets[camelizedId.charAt(0).toUpperCase()+camelizedId.slice(1)];if(process.env.NODE_ENV!=='production'&&warnMissing&&!res){warn('Failed to resolve '+type.slice(0,-1)+': '+id,options);}return res;}var uid$1=0; /**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */function Dep(){this.id=uid$1++;this.subs=[];} // the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target=null; /**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */Dep.prototype.addSub=function(sub){this.subs.push(sub);}; /**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */Dep.prototype.removeSub=function(sub){this.subs.$remove(sub);}; /**
	 * Add self as a dependency to the target watcher.
	 */Dep.prototype.depend=function(){Dep.target.addDep(this);}; /**
	 * Notify all subscribers of a new value.
	 */Dep.prototype.notify=function(){ // stablize the subscriber list first
	var subs=toArray(this.subs);for(var i=0,l=subs.length;i<l;i++){subs[i].update();}};var arrayProto=Array.prototype;var arrayMethods=Object.create(arrayProto) /**
	 * Intercept mutating methods and emit events
	 */;['push','pop','shift','unshift','splice','sort','reverse'].forEach(function(method){ // cache original method
	var original=arrayProto[method];def(arrayMethods,method,function mutator(){ // avoid leaking arguments:
	// http://jsperf.com/closure-with-arguments
	var i=arguments.length;var args=new Array(i);while(i--){args[i]=arguments[i];}var result=original.apply(this,args);var ob=this.__ob__;var inserted;switch(method){case 'push':inserted=args;break;case 'unshift':inserted=args;break;case 'splice':inserted=args.slice(2);break;}if(inserted)ob.observeArray(inserted); // notify change
	ob.dep.notify();return result;});}); /**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */def(arrayProto,'$set',function $set(index,val){if(index>=this.length){this.length=Number(index)+1;}return this.splice(index,1,val)[0];}); /**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */def(arrayProto,'$remove',function $remove(item){ /* istanbul ignore if */if(!this.length)return;var index=indexOf(this,item);if(index>-1){return this.splice(index,1);}});var arrayKeys=Object.getOwnPropertyNames(arrayMethods); /**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */var shouldConvert=true;function withoutConversion(fn){shouldConvert=false;fn();shouldConvert=true;} /**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */function Observer(value){this.value=value;this.dep=new Dep();def(value,'__ob__',this);if(isArray(value)){var augment=hasProto?protoAugment:copyAugment;augment(value,arrayMethods,arrayKeys);this.observeArray(value);}else {this.walk(value);}} // Instance methods
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */Observer.prototype.walk=function(obj){var keys=Object.keys(obj);for(var i=0,l=keys.length;i<l;i++){this.convert(keys[i],obj[keys[i]]);}}; /**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */Observer.prototype.observeArray=function(items){for(var i=0,l=items.length;i<l;i++){observe(items[i]);}}; /**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */Observer.prototype.convert=function(key,val){defineReactive(this.value,key,val);}; /**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */Observer.prototype.addVm=function(vm){(this.vms||(this.vms=[])).push(vm);}; /**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */Observer.prototype.removeVm=function(vm){this.vms.$remove(vm);}; // helpers
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */function protoAugment(target,src){ /* eslint-disable no-proto */target.__proto__=src; /* eslint-enable no-proto */} /**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */function copyAugment(target,src,keys){for(var i=0,l=keys.length;i<l;i++){var key=keys[i];def(target,key,src[key]);}} /**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */function observe(value,vm){if(!value||(typeof value==='undefined'?'undefined':_typeof(value))!=='object'){return;}var ob;if(hasOwn(value,'__ob__')&&value.__ob__ instanceof Observer){ob=value.__ob__;}else if(shouldConvert&&(isArray(value)||isPlainObject(value))&&Object.isExtensible(value)&&!value._isVue){ob=new Observer(value);}if(ob&&vm){ob.addVm(vm);}return ob;} /**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */function defineReactive(obj,key,val){var dep=new Dep();var property=Object.getOwnPropertyDescriptor(obj,key);if(property&&property.configurable===false){return;} // cater for pre-defined getter/setters
	var getter=property&&property.get;var setter=property&&property.set;var childOb=observe(val);Object.defineProperty(obj,key,{enumerable:true,configurable:true,get:function reactiveGetter(){var value=getter?getter.call(obj):val;if(Dep.target){dep.depend();if(childOb){childOb.dep.depend();}if(isArray(value)){for(var e,i=0,l=value.length;i<l;i++){e=value[i];e&&e.__ob__&&e.__ob__.dep.depend();}}}return value;},set:function reactiveSetter(newVal){var value=getter?getter.call(obj):val;if(newVal===value){return;}if(setter){setter.call(obj,newVal);}else {val=newVal;}childOb=observe(newVal);dep.notify();}});}var util=Object.freeze({defineReactive:defineReactive,set:set,del:del,hasOwn:hasOwn,isLiteral:isLiteral,isReserved:isReserved,_toString:_toString,toNumber:toNumber,toBoolean:toBoolean,stripQuotes:stripQuotes,camelize:camelize,hyphenate:hyphenate,classify:classify,bind:bind,toArray:toArray,extend:extend,isObject:isObject,isPlainObject:isPlainObject,def:def,debounce:_debounce,indexOf:indexOf,cancellable:cancellable,looseEqual:looseEqual,isArray:isArray,hasProto:hasProto,inBrowser:inBrowser,devtools:devtools,isIE9:isIE9,isAndroid:isAndroid,get transitionProp(){return transitionProp;},get transitionEndEvent(){return transitionEndEvent;},get animationProp(){return animationProp;},get animationEndEvent(){return animationEndEvent;},nextTick:nextTick,query:query,inDoc:inDoc,getAttr:getAttr,getBindAttr:getBindAttr,hasBindAttr:hasBindAttr,before:before,after:after,remove:remove,prepend:prepend,replace:replace,on:on,off:off,setClass:setClass,addClass:addClass,removeClass:removeClass,extractContent:extractContent,trimNode:trimNode,isTemplate:isTemplate,createAnchor:createAnchor,findRef:findRef,mapNodeRange:mapNodeRange,removeNodeRange:removeNodeRange,isFragment:isFragment,getOuterHTML:getOuterHTML,mergeOptions:mergeOptions,resolveAsset:resolveAsset,checkComponentAttr:checkComponentAttr,commonTagRE:commonTagRE,reservedTagRE:reservedTagRE,get warn(){return warn;}});var uid=0;function initMixin(Vue){ /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */Vue.prototype._init=function(options){options=options||{};this.$el=null;this.$parent=options.parent;this.$root=this.$parent?this.$parent.$root:this;this.$children=[];this.$refs={}; // child vm references
	this.$els={}; // element references
	this._watchers=[]; // all watchers as an array
	this._directives=[]; // all directives
	// a uid
	this._uid=uid++; // a flag to avoid this being observed
	this._isVue=true; // events bookkeeping
	this._events={}; // registered callbacks
	this._eventsCount={}; // for $broadcast optimization
	// fragment instance properties
	this._isFragment=false;this._fragment= // @type {DocumentFragment}
	this._fragmentStart= // @type {Text|Comment}
	this._fragmentEnd=null; // @type {Text|Comment}
	// lifecycle state
	this._isCompiled=this._isDestroyed=this._isReady=this._isAttached=this._isBeingDestroyed=this._vForRemoving=false;this._unlinkFn=null; // context:
	// if this is a transcluded component, context
	// will be the common parent vm of this instance
	// and its host.
	this._context=options._context||this.$parent; // scope:
	// if this is inside an inline v-for, the scope
	// will be the intermediate scope created for this
	// repeat fragment. this is used for linking props
	// and container directives.
	this._scope=options._scope; // fragment:
	// if this instance is compiled inside a Fragment, it
	// needs to reigster itself as a child of that fragment
	// for attach/detach to work properly.
	this._frag=options._frag;if(this._frag){this._frag.children.push(this);} // push self into parent / transclusion host
	if(this.$parent){this.$parent.$children.push(this);} // merge options.
	options=this.$options=mergeOptions(this.constructor.options,options,this); // set ref
	this._updateRef(); // initialize data as empty object.
	// it will be filled up in _initScope().
	this._data={}; // save raw constructor data before merge
	// so that we know which properties are provided at
	// instantiation.
	this._runtimeData=options.data; // call init hook
	this._callHook('init'); // initialize data observation and scope inheritance.
	this._initState(); // setup event system and option events.
	this._initEvents(); // call created hook
	this._callHook('created'); // if `el` option is passed, start compilation.
	if(options.el){this.$mount(options.el);}};}var pathCache=new Cache(1000); // actions
	var APPEND=0;var PUSH=1;var INC_SUB_PATH_DEPTH=2;var PUSH_SUB_PATH=3; // states
	var BEFORE_PATH=0;var IN_PATH=1;var BEFORE_IDENT=2;var IN_IDENT=3;var IN_SUB_PATH=4;var IN_SINGLE_QUOTE=5;var IN_DOUBLE_QUOTE=6;var AFTER_PATH=7;var ERROR=8;var pathStateMachine=[];pathStateMachine[BEFORE_PATH]={'ws':[BEFORE_PATH],'ident':[IN_IDENT,APPEND],'[':[IN_SUB_PATH],'eof':[AFTER_PATH]};pathStateMachine[IN_PATH]={'ws':[IN_PATH],'.':[BEFORE_IDENT],'[':[IN_SUB_PATH],'eof':[AFTER_PATH]};pathStateMachine[BEFORE_IDENT]={'ws':[BEFORE_IDENT],'ident':[IN_IDENT,APPEND]};pathStateMachine[IN_IDENT]={'ident':[IN_IDENT,APPEND],'0':[IN_IDENT,APPEND],'number':[IN_IDENT,APPEND],'ws':[IN_PATH,PUSH],'.':[BEFORE_IDENT,PUSH],'[':[IN_SUB_PATH,PUSH],'eof':[AFTER_PATH,PUSH]};pathStateMachine[IN_SUB_PATH]={"'":[IN_SINGLE_QUOTE,APPEND],'"':[IN_DOUBLE_QUOTE,APPEND],'[':[IN_SUB_PATH,INC_SUB_PATH_DEPTH],']':[IN_PATH,PUSH_SUB_PATH],'eof':ERROR,'else':[IN_SUB_PATH,APPEND]};pathStateMachine[IN_SINGLE_QUOTE]={"'":[IN_SUB_PATH,APPEND],'eof':ERROR,'else':[IN_SINGLE_QUOTE,APPEND]};pathStateMachine[IN_DOUBLE_QUOTE]={'"':[IN_SUB_PATH,APPEND],'eof':ERROR,'else':[IN_DOUBLE_QUOTE,APPEND]}; /**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */function getPathCharType(ch){if(ch===undefined){return 'eof';}var code=ch.charCodeAt(0);switch(code){case 0x5B: // [
	case 0x5D: // ]
	case 0x2E: // .
	case 0x22: // "
	case 0x27: // '
	case 0x30: // 0
	return ch;case 0x5F: // _
	case 0x24: // $
	return 'ident';case 0x20: // Space
	case 0x09: // Tab
	case 0x0A: // Newline
	case 0x0D: // Return
	case 0xA0: // No-break space
	case 0xFEFF: // Byte Order Mark
	case 0x2028: // Line Separator
	case 0x2029: // Paragraph Separator
	return 'ws';} // a-z, A-Z
	if(code>=0x61&&code<=0x7A||code>=0x41&&code<=0x5A){return 'ident';} // 1-9
	if(code>=0x31&&code<=0x39){return 'number';}return 'else';} /**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */function formatSubPath(path){var trimmed=path.trim(); // invalid leading 0
	if(path.charAt(0)==='0'&&isNaN(path)){return false;}return isLiteral(trimmed)?stripQuotes(trimmed):'*'+trimmed;} /**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */function parse(path){var keys=[];var index=-1;var mode=BEFORE_PATH;var subPathDepth=0;var c,newChar,key,type,transition,action,typeMap;var actions=[];actions[PUSH]=function(){if(key!==undefined){keys.push(key);key=undefined;}};actions[APPEND]=function(){if(key===undefined){key=newChar;}else {key+=newChar;}};actions[INC_SUB_PATH_DEPTH]=function(){actions[APPEND]();subPathDepth++;};actions[PUSH_SUB_PATH]=function(){if(subPathDepth>0){subPathDepth--;mode=IN_SUB_PATH;actions[APPEND]();}else {subPathDepth=0;key=formatSubPath(key);if(key===false){return false;}else {actions[PUSH]();}}};function maybeUnescapeQuote(){var nextChar=path[index+1];if(mode===IN_SINGLE_QUOTE&&nextChar==="'"||mode===IN_DOUBLE_QUOTE&&nextChar==='"'){index++;newChar='\\'+nextChar;actions[APPEND]();return true;}}while(mode!=null){index++;c=path[index];if(c==='\\'&&maybeUnescapeQuote()){continue;}type=getPathCharType(c);typeMap=pathStateMachine[mode];transition=typeMap[type]||typeMap['else']||ERROR;if(transition===ERROR){return; // parse error
	}mode=transition[0];action=actions[transition[1]];if(action){newChar=transition[2];newChar=newChar===undefined?c:newChar;if(action()===false){return;}}if(mode===AFTER_PATH){keys.raw=path;return keys;}}} /**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */function parsePath(path){var hit=pathCache.get(path);if(!hit){hit=parse(path);if(hit){pathCache.put(path,hit);}}return hit;} /**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */function getPath(obj,path){return parseExpression(path).get(obj);} /**
	 * Warn against setting non-existent root path on a vm.
	 */var warnNonExistent;if(process.env.NODE_ENV!=='production'){warnNonExistent=function warnNonExistent(path,vm){warn('You are setting a non-existent path "'+path.raw+'" '+'on a vm instance. Consider pre-initializing the property '+'with the "data" option for more reliable reactivity '+'and better performance.',vm);};} /**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */function setPath(obj,path,val){var original=obj;if(typeof path==='string'){path=parse(path);}if(!path||!isObject(obj)){return false;}var last,key;for(var i=0,l=path.length;i<l;i++){last=obj;key=path[i];if(key.charAt(0)==='*'){key=parseExpression(key.slice(1)).get.call(original,original);}if(i<l-1){obj=obj[key];if(!isObject(obj)){obj={};if(process.env.NODE_ENV!=='production'&&last._isVue){warnNonExistent(path,last);}set(last,key,obj);}}else {if(isArray(obj)){obj.$set(key,val);}else if(key in obj){obj[key]=val;}else {if(process.env.NODE_ENV!=='production'&&obj._isVue){warnNonExistent(path,obj);}set(obj,key,val);}}}return true;}var path=Object.freeze({parsePath:parsePath,getPath:getPath,setPath:setPath});var expressionCache=new Cache(1000);var allowedKeywords='Math,Date,this,true,false,null,undefined,Infinity,NaN,'+'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,'+'encodeURIComponent,parseInt,parseFloat';var allowedKeywordsRE=new RegExp('^('+allowedKeywords.replace(/,/g,'\\b|')+'\\b)'); // keywords that don't make sense inside expressions
	var improperKeywords='break,case,class,catch,const,continue,debugger,default,'+'delete,do,else,export,extends,finally,for,function,if,'+'import,in,instanceof,let,return,super,switch,throw,try,'+'var,while,with,yield,enum,await,implements,package,'+'protected,static,interface,private,public';var improperKeywordsRE=new RegExp('^('+improperKeywords.replace(/,/g,'\\b|')+'\\b)');var wsRE=/\s/g;var newlineRE=/\n/g;var saveRE=/[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;var restoreRE=/"(\d+)"/g;var pathTestRE=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;var identRE=/[^\w$\.](?:[A-Za-z_$][\w$]*)/g;var booleanLiteralRE=/^(?:true|false)$/; /**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */var saved=[]; /**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */function save(str,isString){var i=saved.length;saved[i]=isString?str.replace(newlineRE,'\\n'):str;return '"'+i+'"';} /**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */function rewrite(raw){var c=raw.charAt(0);var path=raw.slice(1);if(allowedKeywordsRE.test(path)){return raw;}else {path=path.indexOf('"')>-1?path.replace(restoreRE,restore):path;return c+'scope.'+path;}} /**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */function restore(str,i){return saved[i];} /**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */function compileGetter(exp){if(improperKeywordsRE.test(exp)){process.env.NODE_ENV!=='production'&&warn('Avoid using reserved keywords in expression: '+exp);} // reset state
	saved.length=0; // save strings and object literal keys
	var body=exp.replace(saveRE,save).replace(wsRE,''); // rewrite all paths
	// pad 1 space here becaue the regex matches 1 extra char
	body=(' '+body).replace(identRE,rewrite).replace(restoreRE,restore);return makeGetterFn(body);} /**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */function makeGetterFn(body){try{ /* eslint-disable no-new-func */return new Function('scope','return '+body+';'); /* eslint-enable no-new-func */}catch(e){process.env.NODE_ENV!=='production'&&warn('Invalid expression. '+'Generated function body: '+body);}} /**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */function compileSetter(exp){var path=parsePath(exp);if(path){return function(scope,val){setPath(scope,path,val);};}else {process.env.NODE_ENV!=='production'&&warn('Invalid setter expression: '+exp);}} /**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */function parseExpression(exp,needSet){exp=exp.trim(); // try cache
	var hit=expressionCache.get(exp);if(hit){if(needSet&&!hit.set){hit.set=compileSetter(hit.exp);}return hit;}var res={exp:exp};res.get=isSimplePath(exp)&&exp.indexOf('[')<0 // optimized super simple getter
	?makeGetterFn('scope.'+exp) // dynamic getter
	:compileGetter(exp);if(needSet){res.set=compileSetter(exp);}expressionCache.put(exp,res);return res;} /**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */function isSimplePath(exp){return pathTestRE.test(exp)&& // don't treat true/false as paths
	!booleanLiteralRE.test(exp)&& // Math constants e.g. Math.PI, Math.E etc.
	exp.slice(0,5)!=='Math.';}var expression=Object.freeze({parseExpression:parseExpression,isSimplePath:isSimplePath}); // we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queueIndex;var queue=[];var userQueue=[];var has={};var circular={};var waiting=false;var internalQueueDepleted=false; /**
	 * Reset the batcher's state.
	 */function resetBatcherState(){queue=[];userQueue=[];has={};circular={};waiting=internalQueueDepleted=false;} /**
	 * Flush both queues and run the watchers.
	 */function flushBatcherQueue(){runBatcherQueue(queue);internalQueueDepleted=true;runBatcherQueue(userQueue); // dev tool hook
	/* istanbul ignore if */if(devtools&&config.devtools){devtools.emit('flush');}resetBatcherState();} /**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */function runBatcherQueue(queue){ // do not cache length because more watchers might be pushed
	// as we run existing watchers
	for(queueIndex=0;queueIndex<queue.length;queueIndex++){var watcher=queue[queueIndex];var id=watcher.id;has[id]=null;watcher.run(); // in dev build, check and stop circular updates.
	if(process.env.NODE_ENV!=='production'&&has[id]!=null){circular[id]=(circular[id]||0)+1;if(circular[id]>config._maxUpdateCount){warn('You may have an infinite update loop for watcher '+'with expression "'+watcher.expression+'"',watcher.vm);break;}}}} /**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */function pushWatcher(watcher){var id=watcher.id;if(has[id]==null){if(internalQueueDepleted&&!watcher.user){ // an internal watcher triggered by a user watcher...
	// let's run it immediately after current user watcher is done.
	userQueue.splice(queueIndex+1,0,watcher);}else { // push watcher into appropriate queue
	var q=watcher.user?userQueue:queue;has[id]=q.length;q.push(watcher); // queue the flush
	if(!waiting){waiting=true;nextTick(flushBatcherQueue);}}}}var uid$2=0; /**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */function Watcher(vm,expOrFn,cb,options){ // mix in options
	if(options){extend(this,options);}var isFn=typeof expOrFn==='function';this.vm=vm;vm._watchers.push(this);this.expression=expOrFn;this.cb=cb;this.id=++uid$2; // uid for batching
	this.active=true;this.dirty=this.lazy; // for lazy watchers
	this.deps=[];this.newDeps=[];this.depIds=Object.create(null);this.newDepIds=null;this.prevError=null; // for async error stacks
	// parse expression for getter/setter
	if(isFn){this.getter=expOrFn;this.setter=undefined;}else {var res=parseExpression(expOrFn,this.twoWay);this.getter=res.get;this.setter=res.set;}this.value=this.lazy?undefined:this.get(); // state for avoiding false triggers for deep and Array
	// watchers during vm._digest()
	this.queued=this.shallow=false;} /**
	 * Evaluate the getter, and re-collect dependencies.
	 */Watcher.prototype.get=function(){this.beforeGet();var scope=this.scope||this.vm;var value;try{value=this.getter.call(scope,scope);}catch(e){if(process.env.NODE_ENV!=='production'&&config.warnExpressionErrors){warn('Error when evaluating expression '+'"'+this.expression+'": '+e.toString(),this.vm);}} // "touch" every property so they are all tracked as
	// dependencies for deep watching
	if(this.deep){traverse(value);}if(this.preProcess){value=this.preProcess(value);}if(this.filters){value=scope._applyFilters(value,null,this.filters,false);}if(this.postProcess){value=this.postProcess(value);}this.afterGet();return value;}; /**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */Watcher.prototype.set=function(value){var scope=this.scope||this.vm;if(this.filters){value=scope._applyFilters(value,this.value,this.filters,true);}try{this.setter.call(scope,scope,value);}catch(e){if(process.env.NODE_ENV!=='production'&&config.warnExpressionErrors){warn('Error when evaluating setter '+'"'+this.expression+'": '+e.toString(),this.vm);}} // two-way sync for v-for alias
	var forContext=scope.$forContext;if(forContext&&forContext.alias===this.expression){if(forContext.filters){process.env.NODE_ENV!=='production'&&warn('It seems you are using two-way binding on '+'a v-for alias ('+this.expression+'), and the '+'v-for has filters. This will not work properly. '+'Either remove the filters or use an array of '+'objects and bind to object properties instead.',this.vm);return;}forContext._withLock(function(){if(scope.$key){ // original is an object
	forContext.rawValue[scope.$key]=value;}else {forContext.rawValue.$set(scope.$index,value);}});}}; /**
	 * Prepare for dependency collection.
	 */Watcher.prototype.beforeGet=function(){Dep.target=this;this.newDepIds=Object.create(null);this.newDeps.length=0;}; /**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */Watcher.prototype.addDep=function(dep){var id=dep.id;if(!this.newDepIds[id]){this.newDepIds[id]=true;this.newDeps.push(dep);if(!this.depIds[id]){dep.addSub(this);}}}; /**
	 * Clean up for dependency collection.
	 */Watcher.prototype.afterGet=function(){Dep.target=null;var i=this.deps.length;while(i--){var dep=this.deps[i];if(!this.newDepIds[dep.id]){dep.removeSub(this);}}this.depIds=this.newDepIds;var tmp=this.deps;this.deps=this.newDeps;this.newDeps=tmp;}; /**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */Watcher.prototype.update=function(shallow){if(this.lazy){this.dirty=true;}else if(this.sync||!config.async){this.run();}else { // if queued, only overwrite shallow with non-shallow,
	// but not the other way around.
	this.shallow=this.queued?shallow?this.shallow:false:!!shallow;this.queued=true; // record before-push error stack in debug mode
	/* istanbul ignore if */if(process.env.NODE_ENV!=='production'&&config.debug){this.prevError=new Error('[vue] async stack trace');}pushWatcher(this);}}; /**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */Watcher.prototype.run=function(){if(this.active){var value=this.get();if(value!==this.value|| // Deep watchers and watchers on Object/Arrays should fire even
	// when the value is the same, because the value may
	// have mutated; but only do so if this is a
	// non-shallow update (caused by a vm digest).
	(isObject(value)||this.deep)&&!this.shallow){ // set new value
	var oldValue=this.value;this.value=value; // in debug + async mode, when a watcher callbacks
	// throws, we also throw the saved before-push error
	// so the full cross-tick stack trace is available.
	var prevError=this.prevError; /* istanbul ignore if */if(process.env.NODE_ENV!=='production'&&config.debug&&prevError){this.prevError=null;try{this.cb.call(this.vm,value,oldValue);}catch(e){nextTick(function(){throw prevError;},0);throw e;}}else {this.cb.call(this.vm,value,oldValue);}}this.queued=this.shallow=false;}}; /**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */Watcher.prototype.evaluate=function(){ // avoid overwriting another watcher that is being
	// collected.
	var current=Dep.target;this.value=this.get();this.dirty=false;Dep.target=current;}; /**
	 * Depend on all deps collected by this watcher.
	 */Watcher.prototype.depend=function(){var i=this.deps.length;while(i--){this.deps[i].depend();}}; /**
	 * Remove self from all dependencies' subcriber list.
	 */Watcher.prototype.teardown=function(){if(this.active){ // remove self from vm's watcher list
	// this is a somewhat expensive operation so we skip it
	// if the vm is being destroyed or is performing a v-for
	// re-render (the watcher list is then filtered by v-for).
	if(!this.vm._isBeingDestroyed&&!this.vm._vForRemoving){this.vm._watchers.$remove(this);}var i=this.deps.length;while(i--){this.deps[i].removeSub(this);}this.active=false;this.vm=this.cb=this.value=null;}}; /**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */function traverse(val){var i,keys;if(isArray(val)){i=val.length;while(i--){traverse(val[i]);}}else if(isObject(val)){keys=Object.keys(val);i=keys.length;while(i--){traverse(val[keys[i]]);}}}var text$1={bind:function bind(){this.attr=this.el.nodeType===3?'data':'textContent';},update:function update(value){this.el[this.attr]=_toString(value);}};var templateCache=new Cache(1000);var idSelectorCache=new Cache(1000);var map={efault:[0,'',''],legend:[1,'<fieldset>','</fieldset>'],tr:[2,'<table><tbody>','</tbody></table>'],col:[2,'<table><tbody></tbody><colgroup>','</colgroup></table>']};map.td=map.th=[3,'<table><tbody><tr>','</tr></tbody></table>'];map.option=map.optgroup=[1,'<select multiple="multiple">','</select>'];map.thead=map.tbody=map.colgroup=map.caption=map.tfoot=[1,'<table>','</table>'];map.g=map.defs=map.symbol=map.use=map.image=map.text=map.circle=map.ellipse=map.line=map.path=map.polygon=map.polyline=map.rect=[1,'<svg '+'xmlns="http://www.w3.org/2000/svg" '+'xmlns:xlink="http://www.w3.org/1999/xlink" '+'xmlns:ev="http://www.w3.org/2001/xml-events"'+'version="1.1">','</svg>']; /**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */function isRealTemplate(node){return isTemplate(node)&&isFragment(node.content);}var tagRE$1=/<([\w:-]+)/;var entityRE=/&#?\w+?;/; /**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */function stringToFragment(templateString,raw){ // try a cache hit first
	var cacheKey=raw?templateString:templateString.trim();var hit=templateCache.get(cacheKey);if(hit){return hit;}var frag=document.createDocumentFragment();var tagMatch=templateString.match(tagRE$1);var entityMatch=entityRE.test(templateString);if(!tagMatch&&!entityMatch){ // text only, return a single text node.
	frag.appendChild(document.createTextNode(templateString));}else {var tag=tagMatch&&tagMatch[1];var wrap=map[tag]||map.efault;var depth=wrap[0];var prefix=wrap[1];var suffix=wrap[2];var node=document.createElement('div');node.innerHTML=prefix+templateString+suffix;while(depth--){node=node.lastChild;}var child; /* eslint-disable no-cond-assign */while(child=node.firstChild){ /* eslint-enable no-cond-assign */frag.appendChild(child);}}if(!raw){trimNode(frag);}templateCache.put(cacheKey,frag);return frag;} /**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */function nodeToFragment(node){ // if its a template tag and the browser supports it,
	// its content is already a document fragment.
	if(isRealTemplate(node)){trimNode(node.content);return node.content;} // script template
	if(node.tagName==='SCRIPT'){return stringToFragment(node.textContent);} // normal node, clone it to avoid mutating the original
	var clonedNode=cloneNode(node);var frag=document.createDocumentFragment();var child; /* eslint-disable no-cond-assign */while(child=clonedNode.firstChild){ /* eslint-enable no-cond-assign */frag.appendChild(child);}trimNode(frag);return frag;} // Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate=function(){ /* istanbul ignore else */if(inBrowser){var a=document.createElement('div');a.innerHTML='<template>1</template>';return !a.cloneNode(true).firstChild.innerHTML;}else {return false;}}(); // Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug=function(){ /* istanbul ignore else */if(inBrowser){var t=document.createElement('textarea');t.placeholder='t';return t.cloneNode(true).value==='t';}else {return false;}}(); /**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */function cloneNode(node){ /* istanbul ignore if */if(!node.querySelectorAll){return node.cloneNode();}var res=node.cloneNode(true);var i,original,cloned; /* istanbul ignore if */if(hasBrokenTemplate){var tempClone=res;if(isRealTemplate(node)){node=node.content;tempClone=res.content;}original=node.querySelectorAll('template');if(original.length){cloned=tempClone.querySelectorAll('template');i=cloned.length;while(i--){cloned[i].parentNode.replaceChild(cloneNode(original[i]),cloned[i]);}}} /* istanbul ignore if */if(hasTextareaCloneBug){if(node.tagName==='TEXTAREA'){res.value=node.value;}else {original=node.querySelectorAll('textarea');if(original.length){cloned=res.querySelectorAll('textarea');i=cloned.length;while(i--){cloned[i].value=original[i].value;}}}}return res;} /**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */function parseTemplate(template,shouldClone,raw){var node,frag; // if the template is already a document fragment,
	// do nothing
	if(isFragment(template)){trimNode(template);return shouldClone?cloneNode(template):template;}if(typeof template==='string'){ // id selector
	if(!raw&&template.charAt(0)==='#'){ // id selector can be cached too
	frag=idSelectorCache.get(template);if(!frag){node=document.getElementById(template.slice(1));if(node){frag=nodeToFragment(node); // save selector to cache
	idSelectorCache.put(template,frag);}}}else { // normal string template
	frag=stringToFragment(template,raw);}}else if(template.nodeType){ // a direct node
	frag=nodeToFragment(template);}return frag&&shouldClone?cloneNode(frag):frag;}var template=Object.freeze({cloneNode:cloneNode,parseTemplate:parseTemplate});var html={bind:function bind(){ // a comment node means this is a binding for
	// {{{ inline unescaped html }}}
	if(this.el.nodeType===8){ // hold nodes
	this.nodes=[]; // replace the placeholder with proper anchor
	this.anchor=createAnchor('v-html');replace(this.el,this.anchor);}},update:function update(value){value=_toString(value);if(this.nodes){this.swap(value);}else {this.el.innerHTML=value;}},swap:function swap(value){ // remove old nodes
	var i=this.nodes.length;while(i--){remove(this.nodes[i]);} // convert new value to a fragment
	// do not attempt to retrieve from id selector
	var frag=parseTemplate(value,true,true); // save a reference to these nodes so we can remove later
	this.nodes=toArray(frag.childNodes);before(frag,this.anchor);}}; /**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */function Fragment(linker,vm,frag,host,scope,parentFrag){this.children=[];this.childFrags=[];this.vm=vm;this.scope=scope;this.inserted=false;this.parentFrag=parentFrag;if(parentFrag){parentFrag.childFrags.push(this);}this.unlink=linker(vm,frag,host,scope,this);var single=this.single=frag.childNodes.length===1&& // do not go single mode if the only node is an anchor
	!frag.childNodes[0].__v_anchor;if(single){this.node=frag.childNodes[0];this.before=singleBefore;this.remove=singleRemove;}else {this.node=createAnchor('fragment-start');this.end=createAnchor('fragment-end');this.frag=frag;prepend(this.node,frag);frag.appendChild(this.end);this.before=multiBefore;this.remove=multiRemove;}this.node.__v_frag=this;} /**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */Fragment.prototype.callHook=function(hook){var i,l;for(i=0,l=this.childFrags.length;i<l;i++){this.childFrags[i].callHook(hook);}for(i=0,l=this.children.length;i<l;i++){hook(this.children[i]);}}; /**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */function singleBefore(target,withTransition){this.inserted=true;var method=withTransition!==false?beforeWithTransition:before;method(this.node,target,this.vm);if(inDoc(this.node)){this.callHook(attach);}} /**
	 * Remove fragment, single node version
	 */function singleRemove(){this.inserted=false;var shouldCallRemove=inDoc(this.node);var self=this;this.beforeRemove();removeWithTransition(this.node,this.vm,function(){if(shouldCallRemove){self.callHook(detach);}self.destroy();});} /**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */function multiBefore(target,withTransition){this.inserted=true;var vm=this.vm;var method=withTransition!==false?beforeWithTransition:before;mapNodeRange(this.node,this.end,function(node){method(node,target,vm);});if(inDoc(this.node)){this.callHook(attach);}} /**
	 * Remove fragment, multi-nodes version
	 */function multiRemove(){this.inserted=false;var self=this;var shouldCallRemove=inDoc(this.node);this.beforeRemove();removeNodeRange(this.node,this.end,this.vm,this.frag,function(){if(shouldCallRemove){self.callHook(detach);}self.destroy();});} /**
	 * Prepare the fragment for removal.
	 */Fragment.prototype.beforeRemove=function(){var i,l;for(i=0,l=this.childFrags.length;i<l;i++){ // call the same method recursively on child
	// fragments, depth-first
	this.childFrags[i].beforeRemove(false);}for(i=0,l=this.children.length;i<l;i++){ // Call destroy for all contained instances,
	// with remove:false and defer:true.
	// Defer is necessary because we need to
	// keep the children to call detach hooks
	// on them.
	this.children[i].$destroy(false,true);}var dirs=this.unlink.dirs;for(i=0,l=dirs.length;i<l;i++){ // disable the watchers on all the directives
	// so that the rendered content stays the same
	// during removal.
	dirs[i]._watcher&&dirs[i]._watcher.teardown();}}; /**
	 * Destroy the fragment.
	 */Fragment.prototype.destroy=function(){if(this.parentFrag){this.parentFrag.childFrags.$remove(this);}this.node.__v_frag=null;this.unlink();}; /**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */function attach(child){if(!child._isAttached&&inDoc(child.$el)){child._callHook('attached');}} /**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */function detach(child){if(child._isAttached&&!inDoc(child.$el)){child._callHook('detached');}}var linkerCache=new Cache(5000); /**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */function FragmentFactory(vm,el){this.vm=vm;var template;var isString=typeof el==='string';if(isString||isTemplate(el)){template=parseTemplate(el,true);}else {template=document.createDocumentFragment();template.appendChild(el);}this.template=template; // linker can be cached, but only for components
	var linker;var cid=vm.constructor.cid;if(cid>0){var cacheId=cid+(isString?el:getOuterHTML(el));linker=linkerCache.get(cacheId);if(!linker){linker=compile(template,vm.$options,true);linkerCache.put(cacheId,linker);}}else {linker=compile(template,vm.$options,true);}this.linker=linker;} /**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */FragmentFactory.prototype.create=function(host,scope,parentFrag){var frag=cloneNode(this.template);return new Fragment(this.linker,this.vm,frag,host,scope,parentFrag);};var ON=700;var MODEL=800;var BIND=850;var TRANSITION=1100;var EL=1500;var COMPONENT=1500;var PARTIAL=1750;var IF=2100;var FOR=2200;var SLOT=2300;var uid$3=0;var vFor={priority:FOR,terminal:true,params:['track-by','stagger','enter-stagger','leave-stagger'],bind:function bind(){ // support "item in/of items" syntax
	var inMatch=this.expression.match(/(.*) (?:in|of) (.*)/);if(inMatch){var itMatch=inMatch[1].match(/\((.*),(.*)\)/);if(itMatch){this.iterator=itMatch[1].trim();this.alias=itMatch[2].trim();}else {this.alias=inMatch[1].trim();}this.expression=inMatch[2];}if(!this.alias){process.env.NODE_ENV!=='production'&&warn('Invalid v-for expression "'+this.descriptor.raw+'": '+'alias is required.',this.vm);return;} // uid as a cache identifier
	this.id='__v-for__'+ ++uid$3; // check if this is an option list,
	// so that we know if we need to update the <select>'s
	// v-model when the option list has changed.
	// because v-model has a lower priority than v-for,
	// the v-model is not bound here yet, so we have to
	// retrive it in the actual updateModel() function.
	var tag=this.el.tagName;this.isOption=(tag==='OPTION'||tag==='OPTGROUP')&&this.el.parentNode.tagName==='SELECT'; // setup anchor nodes
	this.start=createAnchor('v-for-start');this.end=createAnchor('v-for-end');replace(this.el,this.end);before(this.start,this.end); // cache
	this.cache=Object.create(null); // fragment factory
	this.factory=new FragmentFactory(this.vm,this.el);},update:function update(data){this.diff(data);this.updateRef();this.updateModel();}, /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */diff:function diff(data){ // check if the Array was converted from an Object
	var item=data[0];var convertedFromObject=this.fromObject=isObject(item)&&hasOwn(item,'$key')&&hasOwn(item,'$value');var trackByKey=this.params.trackBy;var oldFrags=this.frags;var frags=this.frags=new Array(data.length);var alias=this.alias;var iterator=this.iterator;var start=this.start;var end=this.end;var inDocument=inDoc(start);var init=!oldFrags;var i,l,frag,key,value,primitive; // First pass, go through the new Array and fill up
	// the new frags array. If a piece of data has a cached
	// instance for it, we reuse it. Otherwise build a new
	// instance.
	for(i=0,l=data.length;i<l;i++){item=data[i];key=convertedFromObject?item.$key:null;value=convertedFromObject?item.$value:item;primitive=!isObject(value);frag=!init&&this.getCachedFrag(value,i,key);if(frag){ // reusable fragment
	frag.reused=true; // update $index
	frag.scope.$index=i; // update $key
	if(key){frag.scope.$key=key;} // update iterator
	if(iterator){frag.scope[iterator]=key!==null?key:i;} // update data for track-by, object repeat &
	// primitive values.
	if(trackByKey||convertedFromObject||primitive){withoutConversion(function(){frag.scope[alias]=value;});}}else { // new isntance
	frag=this.create(value,alias,i,key);frag.fresh=!init;}frags[i]=frag;if(init){frag.before(end);}} // we're done for the initial render.
	if(init){return;} // Second pass, go through the old fragments and
	// destroy those who are not reused (and remove them
	// from cache)
	var removalIndex=0;var totalRemoved=oldFrags.length-frags.length; // when removing a large number of fragments, watcher removal
	// turns out to be a perf bottleneck, so we batch the watcher
	// removals into a single filter call!
	this.vm._vForRemoving=true;for(i=0,l=oldFrags.length;i<l;i++){frag=oldFrags[i];if(!frag.reused){this.deleteCachedFrag(frag);this.remove(frag,removalIndex++,totalRemoved,inDocument);}}this.vm._vForRemoving=false;if(removalIndex){this.vm._watchers=this.vm._watchers.filter(function(w){return w.active;});} // Final pass, move/insert new fragments into the
	// right place.
	var targetPrev,prevEl,currentPrev;var insertionIndex=0;for(i=0,l=frags.length;i<l;i++){frag=frags[i]; // this is the frag that we should be after
	targetPrev=frags[i-1];prevEl=targetPrev?targetPrev.staggerCb?targetPrev.staggerAnchor:targetPrev.end||targetPrev.node:start;if(frag.reused&&!frag.staggerCb){currentPrev=findPrevFrag(frag,start,this.id);if(currentPrev!==targetPrev&&(!currentPrev|| // optimization for moving a single item.
	// thanks to suggestions by @livoras in #1807
	findPrevFrag(currentPrev,start,this.id)!==targetPrev)){this.move(frag,prevEl);}}else { // new instance, or still in stagger.
	// insert with updated stagger index.
	this.insert(frag,insertionIndex++,prevEl,inDocument);}frag.reused=frag.fresh=false;}}, /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */create:function create(value,alias,index,key){var host=this._host; // create iteration scope
	var parentScope=this._scope||this.vm;var scope=Object.create(parentScope); // ref holder for the scope
	scope.$refs=Object.create(parentScope.$refs);scope.$els=Object.create(parentScope.$els); // make sure point $parent to parent scope
	scope.$parent=parentScope; // for two-way binding on alias
	scope.$forContext=this; // define scope properties
	// important: define the scope alias without forced conversion
	// so that frozen data structures remain non-reactive.
	withoutConversion(function(){defineReactive(scope,alias,value);});defineReactive(scope,'$index',index);if(key){defineReactive(scope,'$key',key);}else if(scope.$key){ // avoid accidental fallback
	def(scope,'$key',null);}if(this.iterator){defineReactive(scope,this.iterator,key!==null?key:index);}var frag=this.factory.create(host,scope,this._frag);frag.forId=this.id;this.cacheFrag(value,frag,index,key);return frag;}, /**
	   * Update the v-ref on owner vm.
	   */updateRef:function updateRef(){var ref=this.descriptor.ref;if(!ref)return;var hash=(this._scope||this.vm).$refs;var refs;if(!this.fromObject){refs=this.frags.map(findVmFromFrag);}else {refs={};this.frags.forEach(function(frag){refs[frag.scope.$key]=findVmFromFrag(frag);});}hash[ref]=refs;}, /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */updateModel:function updateModel(){if(this.isOption){var parent=this.start.parentNode;var model=parent&&parent.__v_model;if(model){model.forceUpdate();}}}, /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */insert:function insert(frag,index,prevEl,inDocument){if(frag.staggerCb){frag.staggerCb.cancel();frag.staggerCb=null;}var staggerAmount=this.getStagger(frag,index,null,'enter');if(inDocument&&staggerAmount){ // create an anchor and insert it synchronously,
	// so that we can resolve the correct order without
	// worrying about some elements not inserted yet
	var anchor=frag.staggerAnchor;if(!anchor){anchor=frag.staggerAnchor=createAnchor('stagger-anchor');anchor.__v_frag=frag;}after(anchor,prevEl);var op=frag.staggerCb=cancellable(function(){frag.staggerCb=null;frag.before(anchor);remove(anchor);});setTimeout(op,staggerAmount);}else {frag.before(prevEl.nextSibling);}}, /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */remove:function remove(frag,index,total,inDocument){if(frag.staggerCb){frag.staggerCb.cancel();frag.staggerCb=null; // it's not possible for the same frag to be removed
	// twice, so if we have a pending stagger callback,
	// it means this frag is queued for enter but removed
	// before its transition started. Since it is already
	// destroyed, we can just leave it in detached state.
	return;}var staggerAmount=this.getStagger(frag,index,total,'leave');if(inDocument&&staggerAmount){var op=frag.staggerCb=cancellable(function(){frag.staggerCb=null;frag.remove();});setTimeout(op,staggerAmount);}else {frag.remove();}}, /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */move:function move(frag,prevEl){ // fix a common issue with Sortable:
	// if prevEl doesn't have nextSibling, this means it's
	// been dragged after the end anchor. Just re-position
	// the end anchor to the end of the container.
	/* istanbul ignore if */if(!prevEl.nextSibling){this.end.parentNode.appendChild(this.end);}frag.before(prevEl.nextSibling,false);}, /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */cacheFrag:function cacheFrag(value,frag,index,key){var trackByKey=this.params.trackBy;var cache=this.cache;var primitive=!isObject(value);var id;if(key||trackByKey||primitive){id=trackByKey?trackByKey==='$index'?index:getPath(value,trackByKey):key||value;if(!cache[id]){cache[id]=frag;}else if(trackByKey!=='$index'){process.env.NODE_ENV!=='production'&&this.warnDuplicate(value);}}else {id=this.id;if(hasOwn(value,id)){if(value[id]===null){value[id]=frag;}else {process.env.NODE_ENV!=='production'&&this.warnDuplicate(value);}}else {def(value,id,frag);}}frag.raw=value;}, /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */getCachedFrag:function getCachedFrag(value,index,key){var trackByKey=this.params.trackBy;var primitive=!isObject(value);var frag;if(key||trackByKey||primitive){var id=trackByKey?trackByKey==='$index'?index:getPath(value,trackByKey):key||value;frag=this.cache[id];}else {frag=value[this.id];}if(frag&&(frag.reused||frag.fresh)){process.env.NODE_ENV!=='production'&&this.warnDuplicate(value);}return frag;}, /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */deleteCachedFrag:function deleteCachedFrag(frag){var value=frag.raw;var trackByKey=this.params.trackBy;var scope=frag.scope;var index=scope.$index; // fix #948: avoid accidentally fall through to
	// a parent repeater which happens to have $key.
	var key=hasOwn(scope,'$key')&&scope.$key;var primitive=!isObject(value);if(trackByKey||key||primitive){var id=trackByKey?trackByKey==='$index'?index:getPath(value,trackByKey):key||value;this.cache[id]=null;}else {value[this.id]=null;frag.raw=null;}}, /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */getStagger:function getStagger(frag,index,total,type){type=type+'Stagger';var trans=frag.node.__v_trans;var hooks=trans&&trans.hooks;var hook=hooks&&(hooks[type]||hooks.stagger);return hook?hook.call(frag,index,total):index*parseInt(this.params[type]||this.params.stagger,10);}, /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */_preProcess:function _preProcess(value){ // regardless of type, store the un-filtered raw value.
	this.rawValue=value;return value;}, /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */_postProcess:function _postProcess(value){if(isArray(value)){return value;}else if(isPlainObject(value)){ // convert plain object to array.
	var keys=Object.keys(value);var i=keys.length;var res=new Array(i);var key;while(i--){key=keys[i];res[i]={$key:key,$value:value[key]};}return res;}else {if(typeof value==='number'&&!isNaN(value)){value=range(value);}return value||[];}},unbind:function unbind(){if(this.descriptor.ref){(this._scope||this.vm).$refs[this.descriptor.ref]=null;}if(this.frags){var i=this.frags.length;var frag;while(i--){frag=this.frags[i];this.deleteCachedFrag(frag);frag.destroy();}}}}; /**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */function findPrevFrag(frag,anchor,id){var el=frag.node.previousSibling; /* istanbul ignore if */if(!el)return;frag=el.__v_frag;while((!frag||frag.forId!==id||!frag.inserted)&&el!==anchor){el=el.previousSibling; /* istanbul ignore if */if(!el)return;frag=el.__v_frag;}return frag;} /**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */function findVmFromFrag(frag){var node=frag.node; // handle multi-node frag
	if(frag.end){while(!node.__vue__&&node!==frag.end&&node.nextSibling){node=node.nextSibling;}}return node.__vue__;} /**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */function range(n){var i=-1;var ret=new Array(Math.floor(n));while(++i<n){ret[i]=i;}return ret;}if(process.env.NODE_ENV!=='production'){vFor.warnDuplicate=function(value){warn('Duplicate value found in v-for="'+this.descriptor.raw+'": '+JSON.stringify(value)+'. Use track-by="$index" if '+'you are expecting duplicate values.',this.vm);};}var vIf={priority:IF,terminal:true,bind:function bind(){var el=this.el;if(!el.__vue__){ // check else block
	var next=el.nextElementSibling;if(next&&getAttr(next,'v-else')!==null){remove(next);this.elseEl=next;} // check main block
	this.anchor=createAnchor('v-if');replace(el,this.anchor);}else {process.env.NODE_ENV!=='production'&&warn('v-if="'+this.expression+'" cannot be '+'used on an instance root element.',this.vm);this.invalid=true;}},update:function update(value){if(this.invalid)return;if(value){if(!this.frag){this.insert();}}else {this.remove();}},insert:function insert(){if(this.elseFrag){this.elseFrag.remove();this.elseFrag=null;} // lazy init factory
	if(!this.factory){this.factory=new FragmentFactory(this.vm,this.el);}this.frag=this.factory.create(this._host,this._scope,this._frag);this.frag.before(this.anchor);},remove:function remove(){if(this.frag){this.frag.remove();this.frag=null;}if(this.elseEl&&!this.elseFrag){if(!this.elseFactory){this.elseFactory=new FragmentFactory(this.elseEl._context||this.vm,this.elseEl);}this.elseFrag=this.elseFactory.create(this._host,this._scope,this._frag);this.elseFrag.before(this.anchor);}},unbind:function unbind(){if(this.frag){this.frag.destroy();}if(this.elseFrag){this.elseFrag.destroy();}}};var show={bind:function bind(){ // check else block
	var next=this.el.nextElementSibling;if(next&&getAttr(next,'v-else')!==null){this.elseEl=next;}},update:function update(value){this.apply(this.el,value);if(this.elseEl){this.apply(this.elseEl,!value);}},apply:function apply(el,value){if(inDoc(el)){applyTransition(el,value?1:-1,toggle,this.vm);}else {toggle();}function toggle(){el.style.display=value?'':'none';}}};var text$2={bind:function bind(){var self=this;var el=this.el;var isRange=el.type==='range';var lazy=this.params.lazy;var number=this.params.number;var debounce=this.params.debounce; // handle composition events.
	//   http://blog.evanyou.me/2014/01/03/composition-event/
	// skip this for Android because it handles composition
	// events quite differently. Android doesn't trigger
	// composition events for language input methods e.g.
	// Chinese, but instead triggers them for spelling
	// suggestions... (see Discussion/#162)
	var composing=false;if(!isAndroid&&!isRange){this.on('compositionstart',function(){composing=true;});this.on('compositionend',function(){composing=false; // in IE11 the "compositionend" event fires AFTER
	// the "input" event, so the input handler is blocked
	// at the end... have to call it here.
	//
	// #1327: in lazy mode this is unecessary.
	if(!lazy){self.listener();}});} // prevent messing with the input when user is typing,
	// and force update on blur.
	this.focused=false;if(!isRange&&!lazy){this.on('focus',function(){self.focused=true;});this.on('blur',function(){self.focused=false; // do not sync value after fragment removal (#2017)
	if(!self._frag||self._frag.inserted){self.rawListener();}});} // Now attach the main listener
	this.listener=this.rawListener=function(){if(composing||!self._bound){return;}var val=number||isRange?toNumber(el.value):el.value;self.set(val); // force update on next tick to avoid lock & same value
	// also only update when user is not typing
	nextTick(function(){if(self._bound&&!self.focused){self.update(self._watcher.value);}});}; // apply debounce
	if(debounce){this.listener=_debounce(this.listener,debounce);} // Support jQuery events, since jQuery.trigger() doesn't
	// trigger native events in some cases and some plugins
	// rely on $.trigger()
	//
	// We want to make sure if a listener is attached using
	// jQuery, it is also removed with jQuery, that's why
	// we do the check for each directive instance and
	// store that check result on itself. This also allows
	// easier test coverage control by unsetting the global
	// jQuery variable in tests.
	this.hasjQuery=typeof jQuery==='function';if(this.hasjQuery){var method=jQuery.fn.on?'on':'bind';jQuery(el)[method]('change',this.rawListener);if(!lazy){jQuery(el)[method]('input',this.listener);}}else {this.on('change',this.rawListener);if(!lazy){this.on('input',this.listener);}} // IE9 doesn't fire input event on backspace/del/cut
	if(!lazy&&isIE9){this.on('cut',function(){nextTick(self.listener);});this.on('keyup',function(e){if(e.keyCode===46||e.keyCode===8){self.listener();}});} // set initial value if present
	if(el.hasAttribute('value')||el.tagName==='TEXTAREA'&&el.value.trim()){this.afterBind=this.listener;}},update:function update(value){this.el.value=_toString(value);},unbind:function unbind(){var el=this.el;if(this.hasjQuery){var method=jQuery.fn.off?'off':'unbind';jQuery(el)[method]('change',this.listener);jQuery(el)[method]('input',this.listener);}}};var radio={bind:function bind(){var self=this;var el=this.el;this.getValue=function(){ // value overwrite via v-bind:value
	if(el.hasOwnProperty('_value')){return el._value;}var val=el.value;if(self.params.number){val=toNumber(val);}return val;};this.listener=function(){self.set(self.getValue());};this.on('change',this.listener);if(el.hasAttribute('checked')){this.afterBind=this.listener;}},update:function update(value){this.el.checked=looseEqual(value,this.getValue());}};var select={bind:function bind(){var self=this;var el=this.el; // method to force update DOM using latest value.
	this.forceUpdate=function(){if(self._watcher){self.update(self._watcher.get());}}; // check if this is a multiple select
	var multiple=this.multiple=el.hasAttribute('multiple'); // attach listener
	this.listener=function(){var value=getValue(el,multiple);value=self.params.number?isArray(value)?value.map(toNumber):toNumber(value):value;self.set(value);};this.on('change',this.listener); // if has initial value, set afterBind
	var initValue=getValue(el,multiple,true);if(multiple&&initValue.length||!multiple&&initValue!==null){this.afterBind=this.listener;} // All major browsers except Firefox resets
	// selectedIndex with value -1 to 0 when the element
	// is appended to a new parent, therefore we have to
	// force a DOM update whenever that happens...
	this.vm.$on('hook:attached',this.forceUpdate);},update:function update(value){var el=this.el;el.selectedIndex=-1;var multi=this.multiple&&isArray(value);var options=el.options;var i=options.length;var op,val;while(i--){op=options[i];val=op.hasOwnProperty('_value')?op._value:op.value; /* eslint-disable eqeqeq */op.selected=multi?indexOf$1(value,val)>-1:looseEqual(value,val); /* eslint-enable eqeqeq */}},unbind:function unbind(){ /* istanbul ignore next */this.vm.$off('hook:attached',this.forceUpdate);}}; /**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */function getValue(el,multi,init){var res=multi?[]:null;var op,val,selected;for(var i=0,l=el.options.length;i<l;i++){op=el.options[i];selected=init?op.hasAttribute('selected'):op.selected;if(selected){val=op.hasOwnProperty('_value')?op._value:op.value;if(multi){res.push(val);}else {return val;}}}return res;} /**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */function indexOf$1(arr,val){var i=arr.length;while(i--){if(looseEqual(arr[i],val)){return i;}}return -1;}var checkbox={bind:function bind(){var self=this;var el=this.el;this.getValue=function(){return el.hasOwnProperty('_value')?el._value:self.params.number?toNumber(el.value):el.value;};function getBooleanValue(){var val=el.checked;if(val&&el.hasOwnProperty('_trueValue')){return el._trueValue;}if(!val&&el.hasOwnProperty('_falseValue')){return el._falseValue;}return val;}this.listener=function(){var model=self._watcher.value;if(isArray(model)){var val=self.getValue();if(el.checked){if(indexOf(model,val)<0){model.push(val);}}else {model.$remove(val);}}else {self.set(getBooleanValue());}};this.on('change',this.listener);if(el.hasAttribute('checked')){this.afterBind=this.listener;}},update:function update(value){var el=this.el;if(isArray(value)){el.checked=indexOf(value,this.getValue())>-1;}else {if(el.hasOwnProperty('_trueValue')){el.checked=looseEqual(value,el._trueValue);}else {el.checked=!!value;}}}};var handlers={text:text$2,radio:radio,select:select,checkbox:checkbox};var model={priority:MODEL,twoWay:true,handlers:handlers,params:['lazy','number','debounce'], /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */bind:function bind(){ // friendly warning...
	this.checkFilters();if(this.hasRead&&!this.hasWrite){process.env.NODE_ENV!=='production'&&warn('It seems you are using a read-only filter with '+'v-model="'+this.descriptor.raw+'". '+'You might want to use a two-way filter to ensure correct behavior.',this.vm);}var el=this.el;var tag=el.tagName;var handler;if(tag==='INPUT'){handler=handlers[el.type]||handlers.text;}else if(tag==='SELECT'){handler=handlers.select;}else if(tag==='TEXTAREA'){handler=handlers.text;}else {process.env.NODE_ENV!=='production'&&warn('v-model does not support element type: '+tag,this.vm);return;}el.__v_model=this;handler.bind.call(this);this.update=handler.update;this._unbind=handler.unbind;}, /**
	   * Check read/write filter stats.
	   */checkFilters:function checkFilters(){var filters=this.filters;if(!filters)return;var i=filters.length;while(i--){var filter=resolveAsset(this.vm.$options,'filters',filters[i].name);if(typeof filter==='function'||filter.read){this.hasRead=true;}if(filter.write){this.hasWrite=true;}}},unbind:function unbind(){this.el.__v_model=null;this._unbind&&this._unbind();}}; // keyCode aliases
	var keyCodes={esc:27,tab:9,enter:13,space:32,'delete':[8,46],up:38,left:37,right:39,down:40};function keyFilter(handler,keys){var codes=keys.map(function(key){var charCode=key.charCodeAt(0);if(charCode>47&&charCode<58){return parseInt(key,10);}if(key.length===1){charCode=key.toUpperCase().charCodeAt(0);if(charCode>64&&charCode<91){return charCode;}}return keyCodes[key];});codes=[].concat.apply([],codes);return function keyHandler(e){if(codes.indexOf(e.keyCode)>-1){return handler.call(this,e);}};}function stopFilter(handler){return function stopHandler(e){e.stopPropagation();return handler.call(this,e);};}function preventFilter(handler){return function preventHandler(e){e.preventDefault();return handler.call(this,e);};}function selfFilter(handler){return function selfHandler(e){if(e.target===e.currentTarget){return handler.call(this,e);}};}var on$1={priority:ON,acceptStatement:true,keyCodes:keyCodes,bind:function bind(){ // deal with iframes
	if(this.el.tagName==='IFRAME'&&this.arg!=='load'){var self=this;this.iframeBind=function(){on(self.el.contentWindow,self.arg,self.handler,self.modifiers.capture);};this.on('load',this.iframeBind);}},update:function update(handler){ // stub a noop for v-on with no value,
	// e.g. @mousedown.prevent
	if(!this.descriptor.raw){handler=function handler(){};}if(typeof handler!=='function'){process.env.NODE_ENV!=='production'&&warn('v-on:'+this.arg+'="'+this.expression+'" expects a function value, '+'got '+handler,this.vm);return;} // apply modifiers
	if(this.modifiers.stop){handler=stopFilter(handler);}if(this.modifiers.prevent){handler=preventFilter(handler);}if(this.modifiers.self){handler=selfFilter(handler);} // key filter
	var keys=Object.keys(this.modifiers).filter(function(key){return key!=='stop'&&key!=='prevent'&&key!=='self';});if(keys.length){handler=keyFilter(handler,keys);}this.reset();this.handler=handler;if(this.iframeBind){this.iframeBind();}else {on(this.el,this.arg,this.handler,this.modifiers.capture);}},reset:function reset(){var el=this.iframeBind?this.el.contentWindow:this.el;if(this.handler){off(el,this.arg,this.handler);}},unbind:function unbind(){this.reset();}};var prefixes=['-webkit-','-moz-','-ms-'];var camelPrefixes=['Webkit','Moz','ms'];var importantRE=/!important;?$/;var propCache=Object.create(null);var testEl=null;var style={deep:true,update:function update(value){if(typeof value==='string'){this.el.style.cssText=value;}else if(isArray(value)){this.handleObject(value.reduce(extend,{}));}else {this.handleObject(value||{});}},handleObject:function handleObject(value){ // cache object styles so that only changed props
	// are actually updated.
	var cache=this.cache||(this.cache={});var name,val;for(name in cache){if(!(name in value)){this.handleSingle(name,null);delete cache[name];}}for(name in value){val=value[name];if(val!==cache[name]){cache[name]=val;this.handleSingle(name,val);}}},handleSingle:function handleSingle(prop,value){prop=normalize(prop);if(!prop)return; // unsupported prop
	// cast possible numbers/booleans into strings
	if(value!=null)value+='';if(value){var isImportant=importantRE.test(value)?'important':'';if(isImportant){ /* istanbul ignore if */if(process.env.NODE_ENV!=='production'){warn('It\'s probably a bad idea to use !important with inline rules. '+'This feature will be deprecated in a future version of Vue.');}value=value.replace(importantRE,'').trim();this.el.style.setProperty(prop.kebab,value,isImportant);}else {this.el.style[prop.camel]=value;}}else {this.el.style[prop.camel]='';}}}; /**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */function normalize(prop){if(propCache[prop]){return propCache[prop];}var res=prefix(prop);propCache[prop]=propCache[res]=res;return res;} /**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */function prefix(prop){prop=hyphenate(prop);var camel=camelize(prop);var upper=camel.charAt(0).toUpperCase()+camel.slice(1);if(!testEl){testEl=document.createElement('div');}var i=prefixes.length;var prefixed;while(i--){prefixed=camelPrefixes[i]+upper;if(prefixed in testEl.style){return {kebab:prefixes[i]+prop,camel:prefixed};}}if(camel in testEl.style){return {kebab:prop,camel:camel};}} // xlink
	var xlinkNS='http://www.w3.org/1999/xlink';var xlinkRE=/^xlink:/; // check for attributes that prohibit interpolations
	var disallowedInterpAttrRE=/^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/; // these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE=/^(?:value|checked|selected|muted)$/; // these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE=/^(?:draggable|contenteditable|spellcheck)$/; // these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps={value:'_value','true-value':'_trueValue','false-value':'_falseValue'};var bind$1={priority:BIND,bind:function bind(){var attr=this.arg;var tag=this.el.tagName; // should be deep watch on object mode
	if(!attr){this.deep=true;} // handle interpolation bindings
	var descriptor=this.descriptor;var tokens=descriptor.interp;if(tokens){ // handle interpolations with one-time tokens
	if(descriptor.hasOneTime){this.expression=tokensToExp(tokens,this._scope||this.vm);} // only allow binding on native attributes
	if(disallowedInterpAttrRE.test(attr)||attr==='name'&&(tag==='PARTIAL'||tag==='SLOT')){process.env.NODE_ENV!=='production'&&warn(attr+'="'+descriptor.raw+'": '+'attribute interpolation is not allowed in Vue.js '+'directives and special attributes.',this.vm);this.el.removeAttribute(attr);this.invalid=true;} /* istanbul ignore if */if(process.env.NODE_ENV!=='production'){var raw=attr+'="'+descriptor.raw+'": '; // warn src
	if(attr==='src'){warn(raw+'interpolation in "src" attribute will cause '+'a 404 request. Use v-bind:src instead.',this.vm);} // warn style
	if(attr==='style'){warn(raw+'interpolation in "style" attribute will cause '+'the attribute to be discarded in Internet Explorer. '+'Use v-bind:style instead.',this.vm);}}}},update:function update(value){if(this.invalid){return;}var attr=this.arg;if(this.arg){this.handleSingle(attr,value);}else {this.handleObject(value||{});}}, // share object handler with v-bind:class
	handleObject:style.handleObject,handleSingle:function handleSingle(attr,value){var el=this.el;var interp=this.descriptor.interp;if(this.modifiers.camel){attr=camelize(attr);}if(!interp&&attrWithPropsRE.test(attr)&&attr in el){el[attr]=attr==='value'?value==null // IE9 will set input.value to "null" for null...
	?'':value:value;} // set model props
	var modelProp=modelProps[attr];if(!interp&&modelProp){el[modelProp]=value; // update v-model if present
	var model=el.__v_model;if(model){model.listener();}} // do not set value attribute for textarea
	if(attr==='value'&&el.tagName==='TEXTAREA'){el.removeAttribute(attr);return;} // update attribute
	if(enumeratedAttrRE.test(attr)){el.setAttribute(attr,value?'true':'false');}else if(value!=null&&value!==false){if(attr==='class'){ // handle edge case #1960:
	// class interpolation should not overwrite Vue transition class
	if(el.__v_trans){value+=' '+el.__v_trans.id+'-transition';}setClass(el,value);}else if(xlinkRE.test(attr)){el.setAttributeNS(xlinkNS,attr,value===true?'':value);}else {el.setAttribute(attr,value===true?'':value);}}else {el.removeAttribute(attr);}}};var el={priority:EL,bind:function bind(){ /* istanbul ignore if */if(!this.arg){return;}var id=this.id=camelize(this.arg);var refs=(this._scope||this.vm).$els;if(hasOwn(refs,id)){refs[id]=this.el;}else {defineReactive(refs,id,this.el);}},unbind:function unbind(){var refs=(this._scope||this.vm).$els;if(refs[this.id]===this.el){refs[this.id]=null;}}};var ref={bind:function bind(){process.env.NODE_ENV!=='production'&&warn('v-ref:'+this.arg+' must be used on a child '+'component. Found on <'+this.el.tagName.toLowerCase()+'>.',this.vm);}};var cloak={bind:function bind(){var el=this.el;this.vm.$once('pre-hook:compiled',function(){el.removeAttribute('v-cloak');});}}; // must export plain object
	var directives={text:text$1,html:html,'for':vFor,'if':vIf,show:show,model:model,on:on$1,bind:bind$1,el:el,ref:ref,cloak:cloak};var vClass={deep:true,update:function update(value){if(value&&typeof value==='string'){this.handleObject(stringToObject(value));}else if(isPlainObject(value)){this.handleObject(value);}else if(isArray(value)){this.handleArray(value);}else {this.cleanup();}},handleObject:function handleObject(value){this.cleanup(value);this.prevKeys=Object.keys(value);setObjectClasses(this.el,value);},handleArray:function handleArray(value){this.cleanup(value);for(var i=0,l=value.length;i<l;i++){var val=value[i];if(val&&isPlainObject(val)){setObjectClasses(this.el,val);}else if(val&&typeof val==='string'){addClass(this.el,val);}}this.prevKeys=value.slice();},cleanup:function cleanup(value){if(!this.prevKeys)return;var i=this.prevKeys.length;while(i--){var key=this.prevKeys[i];if(!key)continue;var keys=isPlainObject(key)?Object.keys(key):[key];for(var j=0,l=keys.length;j<l;j++){toggleClasses(this.el,keys[j],removeClass);}}}};function setObjectClasses(el,obj){var keys=Object.keys(obj);for(var i=0,l=keys.length;i<l;i++){var key=keys[i];if(!obj[key])continue;toggleClasses(el,key,addClass);}}function stringToObject(value){var res={};var keys=value.trim().split(/\s+/);for(var i=0,l=keys.length;i<l;i++){res[keys[i]]=true;}return res;} /**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */function toggleClasses(el,key,fn){key=key.trim();if(key.indexOf(' ')===-1){fn(el,key);return;} // The key contains one or more space characters.
	// Since a class name doesn't accept such characters, we
	// treat it as multiple classes.
	var keys=key.split(/\s+/);for(var i=0,l=keys.length;i<l;i++){fn(el,keys[i]);}}var component={priority:COMPONENT,params:['keep-alive','transition-mode','inline-template'], /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */bind:function bind(){if(!this.el.__vue__){ // keep-alive cache
	this.keepAlive=this.params.keepAlive;if(this.keepAlive){this.cache={};} // check inline-template
	if(this.params.inlineTemplate){ // extract inline template as a DocumentFragment
	this.inlineTemplate=extractContent(this.el,true);} // component resolution related state
	this.pendingComponentCb=this.Component=null; // transition related state
	this.pendingRemovals=0;this.pendingRemovalCb=null; // create a ref anchor
	this.anchor=createAnchor('v-component');replace(this.el,this.anchor); // remove is attribute.
	// this is removed during compilation, but because compilation is
	// cached, when the component is used elsewhere this attribute
	// will remain at link time.
	this.el.removeAttribute('is'); // remove ref, same as above
	if(this.descriptor.ref){this.el.removeAttribute('v-ref:'+hyphenate(this.descriptor.ref));} // if static, build right now.
	if(this.literal){this.setComponent(this.expression);}}else {process.env.NODE_ENV!=='production'&&warn('cannot mount component "'+this.expression+'" '+'on already mounted element: '+this.el);}}, /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */update:function update(value){if(!this.literal){this.setComponent(value);}}, /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */setComponent:function setComponent(value,cb){this.invalidatePending();if(!value){ // just remove current
	this.unbuild(true);this.remove(this.childVM,cb);this.childVM=null;}else {var self=this;this.resolveComponent(value,function(){self.mountComponent(cb);});}}, /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */resolveComponent:function resolveComponent(value,cb){var self=this;this.pendingComponentCb=cancellable(function(Component){self.ComponentName=Component.options.name||(typeof value==='string'?value:null);self.Component=Component;cb();});this.vm._resolveComponent(value,this.pendingComponentCb);}, /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */mountComponent:function mountComponent(cb){ // actual mount
	this.unbuild(true);var self=this;var activateHooks=this.Component.options.activate;var cached=this.getCached();var newComponent=this.build();if(activateHooks&&!cached){this.waitingFor=newComponent;callActivateHooks(activateHooks,newComponent,function(){if(self.waitingFor!==newComponent){return;}self.waitingFor=null;self.transition(newComponent,cb);});}else { // update ref for kept-alive component
	if(cached){newComponent._updateRef();}this.transition(newComponent,cb);}}, /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */invalidatePending:function invalidatePending(){if(this.pendingComponentCb){this.pendingComponentCb.cancel();this.pendingComponentCb=null;}}, /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */build:function build(extraOptions){var cached=this.getCached();if(cached){return cached;}if(this.Component){ // default options
	var options={name:this.ComponentName,el:cloneNode(this.el),template:this.inlineTemplate, // make sure to add the child with correct parent
	// if this is a transcluded component, its parent
	// should be the transclusion host.
	parent:this._host||this.vm, // if no inline-template, then the compiled
	// linker can be cached for better performance.
	_linkerCachable:!this.inlineTemplate,_ref:this.descriptor.ref,_asComponent:true,_isRouterView:this._isRouterView, // if this is a transcluded component, context
	// will be the common parent vm of this instance
	// and its host.
	_context:this.vm, // if this is inside an inline v-for, the scope
	// will be the intermediate scope created for this
	// repeat fragment. this is used for linking props
	// and container directives.
	_scope:this._scope, // pass in the owner fragment of this component.
	// this is necessary so that the fragment can keep
	// track of its contained components in order to
	// call attach/detach hooks for them.
	_frag:this._frag}; // extra options
	// in 1.0.0 this is used by vue-router only
	/* istanbul ignore if */if(extraOptions){extend(options,extraOptions);}var child=new this.Component(options);if(this.keepAlive){this.cache[this.Component.cid]=child;} /* istanbul ignore if */if(process.env.NODE_ENV!=='production'&&this.el.hasAttribute('transition')&&child._isFragment){warn('Transitions will not work on a fragment instance. '+'Template: '+child.$options.template,child);}return child;}}, /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */getCached:function getCached(){return this.keepAlive&&this.cache[this.Component.cid];}, /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */unbuild:function unbuild(defer){if(this.waitingFor){if(!this.keepAlive){this.waitingFor.$destroy();}this.waitingFor=null;}var child=this.childVM;if(!child||this.keepAlive){if(child){ // remove ref
	child._inactive=true;child._updateRef(true);}return;} // the sole purpose of `deferCleanup` is so that we can
	// "deactivate" the vm right now and perform DOM removal
	// later.
	child.$destroy(false,defer);}, /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */remove:function remove(child,cb){var keepAlive=this.keepAlive;if(child){ // we may have a component switch when a previous
	// component is still being transitioned out.
	// we want to trigger only one lastest insertion cb
	// when the existing transition finishes. (#1119)
	this.pendingRemovals++;this.pendingRemovalCb=cb;var self=this;child.$remove(function(){self.pendingRemovals--;if(!keepAlive)child._cleanup();if(!self.pendingRemovals&&self.pendingRemovalCb){self.pendingRemovalCb();self.pendingRemovalCb=null;}});}else if(cb){cb();}}, /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */transition:function transition(target,cb){var self=this;var current=this.childVM; // for devtool inspection
	if(current)current._inactive=true;target._inactive=false;this.childVM=target;switch(self.params.transitionMode){case 'in-out':target.$before(self.anchor,function(){self.remove(current,cb);});break;case 'out-in':self.remove(current,function(){target.$before(self.anchor,cb);});break;default:self.remove(current);target.$before(self.anchor,cb);}}, /**
	   * Unbind.
	   */unbind:function unbind(){this.invalidatePending(); // Do not defer cleanup when unbinding
	this.unbuild(); // destroy all keep-alive cached instances
	if(this.cache){for(var key in this.cache){this.cache[key].$destroy();}this.cache=null;}}}; /**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */function callActivateHooks(hooks,vm,cb){var total=hooks.length;var called=0;hooks[0].call(vm,next);function next(){if(++called>=total){cb();}else {hooks[called].call(vm,next);}}}var propBindingModes=config._propBindingModes;var empty={}; // regexes
	var identRE$1=/^[$_a-zA-Z]+[\w$]*$/;var settablePathRE=/^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/; /**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */function compileProps(el,propOptions,vm){var props=[];var names=Object.keys(propOptions);var i=names.length;var options,name,attr,value,path,parsed,prop;while(i--){name=names[i];options=propOptions[name]||empty;if(process.env.NODE_ENV!=='production'&&name==='$data'){warn('Do not use $data as prop.',vm);continue;} // props could contain dashes, which will be
	// interpreted as minus calculations by the parser
	// so we need to camelize the path here
	path=camelize(name);if(!identRE$1.test(path)){process.env.NODE_ENV!=='production'&&warn('Invalid prop key: "'+name+'". Prop keys '+'must be valid identifiers.',vm);continue;}prop={name:name,path:path,options:options,mode:propBindingModes.ONE_WAY,raw:null};attr=hyphenate(name); // first check dynamic version
	if((value=getBindAttr(el,attr))===null){if((value=getBindAttr(el,attr+'.sync'))!==null){prop.mode=propBindingModes.TWO_WAY;}else if((value=getBindAttr(el,attr+'.once'))!==null){prop.mode=propBindingModes.ONE_TIME;}}if(value!==null){ // has dynamic binding!
	prop.raw=value;parsed=parseDirective(value);value=parsed.expression;prop.filters=parsed.filters; // check binding type
	if(isLiteral(value)&&!parsed.filters){ // for expressions containing literal numbers and
	// booleans, there's no need to setup a prop binding,
	// so we can optimize them as a one-time set.
	prop.optimizedLiteral=true;}else {prop.dynamic=true; // check non-settable path for two-way bindings
	if(process.env.NODE_ENV!=='production'&&prop.mode===propBindingModes.TWO_WAY&&!settablePathRE.test(value)){prop.mode=propBindingModes.ONE_WAY;warn('Cannot bind two-way prop with non-settable '+'parent path: '+value,vm);}}prop.parentPath=value; // warn required two-way
	if(process.env.NODE_ENV!=='production'&&options.twoWay&&prop.mode!==propBindingModes.TWO_WAY){warn('Prop "'+name+'" expects a two-way binding type.',vm);}}else if((value=getAttr(el,attr))!==null){ // has literal binding!
	prop.raw=value;}else if(process.env.NODE_ENV!=='production'){ // check possible camelCase prop usage
	var lowerCaseName=path.toLowerCase();value=/[A-Z\-]/.test(name)&&(el.getAttribute(lowerCaseName)||el.getAttribute(':'+lowerCaseName)||el.getAttribute('v-bind:'+lowerCaseName)||el.getAttribute(':'+lowerCaseName+'.once')||el.getAttribute('v-bind:'+lowerCaseName+'.once')||el.getAttribute(':'+lowerCaseName+'.sync')||el.getAttribute('v-bind:'+lowerCaseName+'.sync'));if(value){warn('Possible usage error for prop `'+lowerCaseName+'` - '+'did you mean `'+attr+'`? HTML is case-insensitive, remember to use '+'kebab-case for props in templates.',vm);}else if(options.required){ // warn missing required
	warn('Missing required prop: '+name,vm);}} // push prop
	props.push(prop);}return makePropsLinkFn(props);} /**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */function makePropsLinkFn(props){return function propsLinkFn(vm,scope){ // store resolved props info
	vm._props={};var i=props.length;var prop,path,options,value,raw;while(i--){prop=props[i];raw=prop.raw;path=prop.path;options=prop.options;vm._props[path]=prop;if(raw===null){ // initialize absent prop
	initProp(vm,prop,undefined);}else if(prop.dynamic){ // dynamic prop
	if(prop.mode===propBindingModes.ONE_TIME){ // one time binding
	value=(scope||vm._context||vm).$get(prop.parentPath);initProp(vm,prop,value);}else {if(vm._context){ // dynamic binding
	vm._bindDir({name:'prop',def:propDef,prop:prop},null,null,scope); // el, host, scope
	}else { // root instance
	initProp(vm,prop,vm.$get(prop.parentPath));}}}else if(prop.optimizedLiteral){ // optimized literal, cast it and just set once
	var stripped=stripQuotes(raw);value=stripped===raw?toBoolean(toNumber(raw)):stripped;initProp(vm,prop,value);}else { // string literal, but we need to cater for
	// Boolean props with no value, or with same
	// literal value (e.g. disabled="disabled")
	// see https://github.com/vuejs/vue-loader/issues/182
	value=options.type===Boolean&&(raw===''||raw===hyphenate(prop.name))?true:raw;initProp(vm,prop,value);}}};} /**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */function processPropValue(vm,prop,rawValue,fn){var isSimple=prop.dynamic&&isSimplePath(prop.parentPath);var value=rawValue;if(value===undefined){value=getPropDefaultValue(vm,prop);}value=coerceProp(prop,value);var coerced=value!==rawValue;if(!assertProp(prop,value,vm)){value=undefined;}if(isSimple&&!coerced){withoutConversion(function(){fn(value);});}else {fn(value);}} /**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */function initProp(vm,prop,value){processPropValue(vm,prop,value,function(value){defineReactive(vm,prop.path,value);});} /**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */function updateProp(vm,prop,value){processPropValue(vm,prop,value,function(value){vm[prop.path]=value;});} /**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */function getPropDefaultValue(vm,prop){ // no default, return undefined
	var options=prop.options;if(!hasOwn(options,'default')){ // absent boolean value defaults to false
	return options.type===Boolean?false:undefined;}var def=options['default']; // warn against non-factory defaults for Object & Array
	if(isObject(def)){process.env.NODE_ENV!=='production'&&warn('Invalid default value for prop "'+prop.name+'": '+'Props with type Object/Array must use a factory function '+'to return the default value.',vm);} // call factory function for non-Function types
	return typeof def==='function'&&options.type!==Function?def.call(vm):def;} /**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */function assertProp(prop,value,vm){if(!prop.options.required&&( // non-required
	prop.raw===null|| // abscent
	value==null) // null or undefined
	){return true;}var options=prop.options;var type=options.type;var valid=!type;var expectedTypes=[];if(type){if(!isArray(type)){type=[type];}for(var i=0;i<type.length&&!valid;i++){var assertedType=assertType(value,type[i]);expectedTypes.push(assertedType.expectedType);valid=assertedType.valid;}}if(!valid){if(process.env.NODE_ENV!=='production'){warn('Invalid prop: type check failed for prop "'+prop.name+'".'+' Expected '+expectedTypes.map(formatType).join(', ')+', got '+formatValue(value)+'.',vm);}return false;}var validator=options.validator;if(validator){if(!validator(value)){process.env.NODE_ENV!=='production'&&warn('Invalid prop: custom validator check failed for prop "'+prop.name+'".',vm);return false;}}return true;} /**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */function coerceProp(prop,value){var coerce=prop.options.coerce;if(!coerce){return value;} // coerce is a function
	return coerce(value);} /**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */function assertType(value,type){var valid;var expectedType;if(type===String){expectedType='string';valid=(typeof value==='undefined'?'undefined':_typeof(value))===expectedType;}else if(type===Number){expectedType='number';valid=(typeof value==='undefined'?'undefined':_typeof(value))===expectedType;}else if(type===Boolean){expectedType='boolean';valid=(typeof value==='undefined'?'undefined':_typeof(value))===expectedType;}else if(type===Function){expectedType='function';valid=(typeof value==='undefined'?'undefined':_typeof(value))===expectedType;}else if(type===Object){expectedType='object';valid=isPlainObject(value);}else if(type===Array){expectedType='array';valid=isArray(value);}else {valid=value instanceof type;}return {valid:valid,expectedType:expectedType};} /**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */function formatType(type){return type?type.charAt(0).toUpperCase()+type.slice(1):'custom type';} /**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */function formatValue(val){return Object.prototype.toString.call(val).slice(8,-1);}var bindingModes=config._propBindingModes;var propDef={bind:function bind(){var child=this.vm;var parent=child._context; // passed in from compiler directly
	var prop=this.descriptor.prop;var childKey=prop.path;var parentKey=prop.parentPath;var twoWay=prop.mode===bindingModes.TWO_WAY;var parentWatcher=this.parentWatcher=new Watcher(parent,parentKey,function(val){updateProp(child,prop,val);},{twoWay:twoWay,filters:prop.filters, // important: props need to be observed on the
	// v-for scope if present
	scope:this._scope}); // set the child initial value.
	initProp(child,prop,parentWatcher.value); // setup two-way binding
	if(twoWay){ // important: defer the child watcher creation until
	// the created hook (after data observation)
	var self=this;child.$once('pre-hook:created',function(){self.childWatcher=new Watcher(child,childKey,function(val){parentWatcher.set(val);},{ // ensure sync upward before parent sync down.
	// this is necessary in cases e.g. the child
	// mutates a prop array, then replaces it. (#1683)
	sync:true});});}},unbind:function unbind(){this.parentWatcher.teardown();if(this.childWatcher){this.childWatcher.teardown();}}};var queue$1=[];var queued=false; /**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */function pushJob(job){queue$1.push(job);if(!queued){queued=true;nextTick(flush);}} /**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */function flush(){ // Force layout
	var f=document.documentElement.offsetHeight;for(var i=0;i<queue$1.length;i++){queue$1[i]();}queue$1=[];queued=false; // dummy return, so js linters don't complain about
	// unused variable f
	return f;}var TYPE_TRANSITION='transition';var TYPE_ANIMATION='animation';var transDurationProp=transitionProp+'Duration';var animDurationProp=animationProp+'Duration'; /**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */var raf=inBrowser&&window.requestAnimationFrame;var waitForTransitionStart=raf /* istanbul ignore next */?function(fn){raf(function(){raf(fn);});}:function(fn){setTimeout(fn,50);}; /**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */function Transition(el,id,hooks,vm){this.id=id;this.el=el;this.enterClass=hooks&&hooks.enterClass||id+'-enter';this.leaveClass=hooks&&hooks.leaveClass||id+'-leave';this.hooks=hooks;this.vm=vm; // async state
	this.pendingCssEvent=this.pendingCssCb=this.cancel=this.pendingJsCb=this.op=this.cb=null;this.justEntered=false;this.entered=this.left=false;this.typeCache={}; // check css transition type
	this.type=hooks&&hooks.type; /* istanbul ignore if */if(process.env.NODE_ENV!=='production'){if(this.type&&this.type!==TYPE_TRANSITION&&this.type!==TYPE_ANIMATION){warn('invalid CSS transition type for transition="'+this.id+'": '+this.type,vm);}} // bind
	var self=this;['enterNextTick','enterDone','leaveNextTick','leaveDone'].forEach(function(m){self[m]=bind(self[m],self);});}var p$1=Transition.prototype; /**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */p$1.enter=function(op,cb){this.cancelPending();this.callHook('beforeEnter');this.cb=cb;addClass(this.el,this.enterClass);op();this.entered=false;this.callHookWithCb('enter');if(this.entered){return; // user called done synchronously.
	}this.cancel=this.hooks&&this.hooks.enterCancelled;pushJob(this.enterNextTick);}; /**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */p$1.enterNextTick=function(){var _this=this; // prevent transition skipping
	this.justEntered=true;waitForTransitionStart(function(){_this.justEntered=false;});var enterDone=this.enterDone;var type=this.getCssTransitionType(this.enterClass);if(!this.pendingJsCb){if(type===TYPE_TRANSITION){ // trigger transition by removing enter class now
	removeClass(this.el,this.enterClass);this.setupCssCb(transitionEndEvent,enterDone);}else if(type===TYPE_ANIMATION){this.setupCssCb(animationEndEvent,enterDone);}else {enterDone();}}else if(type===TYPE_TRANSITION){removeClass(this.el,this.enterClass);}}; /**
	 * The "cleanup" phase of an entering transition.
	 */p$1.enterDone=function(){this.entered=true;this.cancel=this.pendingJsCb=null;removeClass(this.el,this.enterClass);this.callHook('afterEnter');if(this.cb)this.cb();}; /**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */p$1.leave=function(op,cb){this.cancelPending();this.callHook('beforeLeave');this.op=op;this.cb=cb;addClass(this.el,this.leaveClass);this.left=false;this.callHookWithCb('leave');if(this.left){return; // user called done synchronously.
	}this.cancel=this.hooks&&this.hooks.leaveCancelled; // only need to handle leaveDone if
	// 1. the transition is already done (synchronously called
	//    by the user, which causes this.op set to null)
	// 2. there's no explicit js callback
	if(this.op&&!this.pendingJsCb){ // if a CSS transition leaves immediately after enter,
	// the transitionend event never fires. therefore we
	// detect such cases and end the leave immediately.
	if(this.justEntered){this.leaveDone();}else {pushJob(this.leaveNextTick);}}}; /**
	 * The "nextTick" phase of a leaving transition.
	 */p$1.leaveNextTick=function(){var type=this.getCssTransitionType(this.leaveClass);if(type){var event=type===TYPE_TRANSITION?transitionEndEvent:animationEndEvent;this.setupCssCb(event,this.leaveDone);}else {this.leaveDone();}}; /**
	 * The "cleanup" phase of a leaving transition.
	 */p$1.leaveDone=function(){this.left=true;this.cancel=this.pendingJsCb=null;this.op();removeClass(this.el,this.leaveClass);this.callHook('afterLeave');if(this.cb)this.cb();this.op=null;}; /**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */p$1.cancelPending=function(){this.op=this.cb=null;var hasPending=false;if(this.pendingCssCb){hasPending=true;off(this.el,this.pendingCssEvent,this.pendingCssCb);this.pendingCssEvent=this.pendingCssCb=null;}if(this.pendingJsCb){hasPending=true;this.pendingJsCb.cancel();this.pendingJsCb=null;}if(hasPending){removeClass(this.el,this.enterClass);removeClass(this.el,this.leaveClass);}if(this.cancel){this.cancel.call(this.vm,this.el);this.cancel=null;}}; /**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */p$1.callHook=function(type){if(this.hooks&&this.hooks[type]){this.hooks[type].call(this.vm,this.el);}}; /**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */p$1.callHookWithCb=function(type){var hook=this.hooks&&this.hooks[type];if(hook){if(hook.length>1){this.pendingJsCb=cancellable(this[type+'Done']);}hook.call(this.vm,this.el,this.pendingJsCb);}}; /**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */p$1.getCssTransitionType=function(className){ /* istanbul ignore if */if(!transitionEndEvent|| // skip CSS transitions if page is not visible -
	// this solves the issue of transitionend events not
	// firing until the page is visible again.
	// pageVisibility API is supported in IE10+, same as
	// CSS transitions.
	document.hidden|| // explicit js-only transition
	this.hooks&&this.hooks.css===false|| // element is hidden
	isHidden(this.el)){return;}var type=this.type||this.typeCache[className];if(type)return type;var inlineStyles=this.el.style;var computedStyles=window.getComputedStyle(this.el);var transDuration=inlineStyles[transDurationProp]||computedStyles[transDurationProp];if(transDuration&&transDuration!=='0s'){type=TYPE_TRANSITION;}else {var animDuration=inlineStyles[animDurationProp]||computedStyles[animDurationProp];if(animDuration&&animDuration!=='0s'){type=TYPE_ANIMATION;}}if(type){this.typeCache[className]=type;}return type;}; /**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */p$1.setupCssCb=function(event,cb){this.pendingCssEvent=event;var self=this;var el=this.el;var onEnd=this.pendingCssCb=function(e){if(e.target===el){off(el,event,onEnd);self.pendingCssEvent=self.pendingCssCb=null;if(!self.pendingJsCb&&cb){cb();}}};on(el,event,onEnd);}; /**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */function isHidden(el){if(/svg$/.test(el.namespaceURI)){ // SVG elements do not have offset(Width|Height)
	// so we need to check the client rect
	var rect=el.getBoundingClientRect();return !(rect.width||rect.height);}else {return !(el.offsetWidth||el.offsetHeight||el.getClientRects().length);}}var transition$1={priority:TRANSITION,update:function update(id,oldId){var el=this.el; // resolve on owner vm
	var hooks=resolveAsset(this.vm.$options,'transitions',id);id=id||'v';el.__v_trans=new Transition(el,id,hooks,this.vm);if(oldId){removeClass(el,oldId+'-transition');}addClass(el,id+'-transition');}};var internalDirectives={style:style,'class':vClass,component:component,prop:propDef,transition:transition$1}; // special binding prefixes
	var bindRE=/^v-bind:|^:/;var onRE=/^v-on:|^@/;var dirAttrRE=/^v-([^:]+)(?:$|:(.*)$)/;var modifierRE=/\.[^\.]+/g;var transitionRE=/^(v-bind:|:)?transition$/; // default directive priority
	var DEFAULT_PRIORITY=1000;var DEFAULT_TERMINAL_PRIORITY=2000; /**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */function compile(el,options,partial){ // link function for the node itself.
	var nodeLinkFn=partial||!options._asComponent?compileNode(el,options):null; // link function for the childNodes
	var childLinkFn=!(nodeLinkFn&&nodeLinkFn.terminal)&&el.tagName!=='SCRIPT'&&el.hasChildNodes()?compileNodeList(el.childNodes,options):null; /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */return function compositeLinkFn(vm,el,host,scope,frag){ // cache childNodes before linking parent, fix #657
	var childNodes=toArray(el.childNodes); // link
	var dirs=linkAndCapture(function compositeLinkCapturer(){if(nodeLinkFn)nodeLinkFn(vm,el,host,scope,frag);if(childLinkFn)childLinkFn(vm,childNodes,host,scope,frag);},vm);return makeUnlinkFn(vm,dirs);};} /**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */function linkAndCapture(linker,vm){ /* istanbul ignore if */if(process.env.NODE_ENV==='production'){ // reset directives before every capture in production
	// mode, so that when unlinking we don't need to splice
	// them out (which turns out to be a perf hit).
	// they are kept in development mode because they are
	// useful for Vue's own tests.
	vm._directives=[];}var originalDirCount=vm._directives.length;linker();var dirs=vm._directives.slice(originalDirCount);dirs.sort(directiveComparator);for(var i=0,l=dirs.length;i<l;i++){dirs[i]._bind();}return dirs;} /**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */function directiveComparator(a,b){a=a.descriptor.def.priority||DEFAULT_PRIORITY;b=b.descriptor.def.priority||DEFAULT_PRIORITY;return a>b?-1:a===b?0:1;} /**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */function makeUnlinkFn(vm,dirs,context,contextDirs){function unlink(destroying){teardownDirs(vm,dirs,destroying);if(context&&contextDirs){teardownDirs(context,contextDirs);}} // expose linked directives
	unlink.dirs=dirs;return unlink;} /**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */function teardownDirs(vm,dirs,destroying){var i=dirs.length;while(i--){dirs[i]._teardown();if(process.env.NODE_ENV!=='production'&&!destroying){vm._directives.$remove(dirs[i]);}}} /**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */function compileAndLinkProps(vm,el,props,scope){var propsLinkFn=compileProps(el,props,vm);var propDirs=linkAndCapture(function(){propsLinkFn(vm,scope);},vm);return makeUnlinkFn(vm,propDirs);} /**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */function compileRoot(el,options,contextOptions){var containerAttrs=options._containerAttrs;var replacerAttrs=options._replacerAttrs;var contextLinkFn,replacerLinkFn; // only need to compile other attributes for
	// non-fragment instances
	if(el.nodeType!==11){ // for components, container and replacer need to be
	// compiled separately and linked in different scopes.
	if(options._asComponent){ // 2. container attributes
	if(containerAttrs&&contextOptions){contextLinkFn=compileDirectives(containerAttrs,contextOptions);}if(replacerAttrs){ // 3. replacer attributes
	replacerLinkFn=compileDirectives(replacerAttrs,options);}}else { // non-component, just compile as a normal element.
	replacerLinkFn=compileDirectives(el.attributes,options);}}else if(process.env.NODE_ENV!=='production'&&containerAttrs){ // warn container directives for fragment instances
	var names=containerAttrs.filter(function(attr){ // allow vue-loader/vueify scoped css attributes
	return attr.name.indexOf('_v-')<0&& // allow event listeners
	!onRE.test(attr.name)&& // allow slots
	attr.name!=='slot';}).map(function(attr){return '"'+attr.name+'"';});if(names.length){var plural=names.length>1;warn('Attribute'+(plural?'s ':' ')+names.join(', ')+(plural?' are':' is')+' ignored on component '+'<'+options.el.tagName.toLowerCase()+'> because '+'the component is a fragment instance: '+'http://vuejs.org/guide/components.html#Fragment_Instance');}}options._containerAttrs=options._replacerAttrs=null;return function rootLinkFn(vm,el,scope){ // link context scope dirs
	var context=vm._context;var contextDirs;if(context&&contextLinkFn){contextDirs=linkAndCapture(function(){contextLinkFn(context,el,null,scope);},context);} // link self
	var selfDirs=linkAndCapture(function(){if(replacerLinkFn)replacerLinkFn(vm,el);},vm); // return the unlink function that tearsdown context
	// container directives.
	return makeUnlinkFn(vm,selfDirs,context,contextDirs);};} /**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */function compileNode(node,options){var type=node.nodeType;if(type===1&&node.tagName!=='SCRIPT'){return compileElement(node,options);}else if(type===3&&node.data.trim()){return compileTextNode(node,options);}else {return null;}} /**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */function compileElement(el,options){ // preprocess textareas.
	// textarea treats its text content as the initial value.
	// just bind it as an attr directive for value.
	if(el.tagName==='TEXTAREA'){var tokens=parseText(el.value);if(tokens){el.setAttribute(':value',tokensToExp(tokens));el.value='';}}var linkFn;var hasAttrs=el.hasAttributes();var attrs=hasAttrs&&toArray(el.attributes); // check terminal directives (for & if)
	if(hasAttrs){linkFn=checkTerminalDirectives(el,attrs,options);} // check element directives
	if(!linkFn){linkFn=checkElementDirectives(el,options);} // check component
	if(!linkFn){linkFn=checkComponent(el,options);} // normal directives
	if(!linkFn&&hasAttrs){linkFn=compileDirectives(attrs,options);}return linkFn;} /**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */function compileTextNode(node,options){ // skip marked text nodes
	if(node._skip){return removeText;}var tokens=parseText(node.wholeText);if(!tokens){return null;} // mark adjacent text nodes as skipped,
	// because we are using node.wholeText to compile
	// all adjacent text nodes together. This fixes
	// issues in IE where sometimes it splits up a single
	// text node into multiple ones.
	var next=node.nextSibling;while(next&&next.nodeType===3){next._skip=true;next=next.nextSibling;}var frag=document.createDocumentFragment();var el,token;for(var i=0,l=tokens.length;i<l;i++){token=tokens[i];el=token.tag?processTextToken(token,options):document.createTextNode(token.value);frag.appendChild(el);}return makeTextNodeLinkFn(tokens,frag,options);} /**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */function removeText(vm,node){remove(node);} /**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */function processTextToken(token,options){var el;if(token.oneTime){el=document.createTextNode(token.value);}else {if(token.html){el=document.createComment('v-html');setTokenType('html');}else { // IE will clean up empty textNodes during
	// frag.cloneNode(true), so we have to give it
	// something here...
	el=document.createTextNode(' ');setTokenType('text');}}function setTokenType(type){if(token.descriptor)return;var parsed=parseDirective(token.value);token.descriptor={name:type,def:directives[type],expression:parsed.expression,filters:parsed.filters};}return el;} /**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */function makeTextNodeLinkFn(tokens,frag){return function textNodeLinkFn(vm,el,host,scope){var fragClone=frag.cloneNode(true);var childNodes=toArray(fragClone.childNodes);var token,value,node;for(var i=0,l=tokens.length;i<l;i++){token=tokens[i];value=token.value;if(token.tag){node=childNodes[i];if(token.oneTime){value=(scope||vm).$eval(value);if(token.html){replace(node,parseTemplate(value,true));}else {node.data=value;}}else {vm._bindDir(token.descriptor,node,host,scope);}}}replace(el,fragClone);};} /**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */function compileNodeList(nodeList,options){var linkFns=[];var nodeLinkFn,childLinkFn,node;for(var i=0,l=nodeList.length;i<l;i++){node=nodeList[i];nodeLinkFn=compileNode(node,options);childLinkFn=!(nodeLinkFn&&nodeLinkFn.terminal)&&node.tagName!=='SCRIPT'&&node.hasChildNodes()?compileNodeList(node.childNodes,options):null;linkFns.push(nodeLinkFn,childLinkFn);}return linkFns.length?makeChildLinkFn(linkFns):null;} /**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */function makeChildLinkFn(linkFns){return function childLinkFn(vm,nodes,host,scope,frag){var node,nodeLinkFn,childrenLinkFn;for(var i=0,n=0,l=linkFns.length;i<l;n++){node=nodes[n];nodeLinkFn=linkFns[i++];childrenLinkFn=linkFns[i++]; // cache childNodes before linking parent, fix #657
	var childNodes=toArray(node.childNodes);if(nodeLinkFn){nodeLinkFn(vm,node,host,scope,frag);}if(childrenLinkFn){childrenLinkFn(vm,childNodes,host,scope,frag);}}};} /**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */function checkElementDirectives(el,options){var tag=el.tagName.toLowerCase();if(commonTagRE.test(tag)){return;}var def=resolveAsset(options,'elementDirectives',tag);if(def){return makeTerminalNodeLinkFn(el,tag,'',options,def);}} /**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */function checkComponent(el,options){var component=checkComponentAttr(el,options);if(component){var ref=findRef(el);var descriptor={name:'component',ref:ref,expression:component.id,def:internalDirectives.component,modifiers:{literal:!component.dynamic}};var componentLinkFn=function componentLinkFn(vm,el,host,scope,frag){if(ref){defineReactive((scope||vm).$refs,ref,null);}vm._bindDir(descriptor,el,host,scope,frag);};componentLinkFn.terminal=true;return componentLinkFn;}} /**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */function checkTerminalDirectives(el,attrs,options){ // skip v-pre
	if(getAttr(el,'v-pre')!==null){return skip;} // skip v-else block, but only if following v-if
	if(el.hasAttribute('v-else')){var prev=el.previousElementSibling;if(prev&&prev.hasAttribute('v-if')){return skip;}}var attr,name,value,modifiers,matched,dirName,rawName,arg,def,termDef;for(var i=0,j=attrs.length;i<j;i++){attr=attrs[i];modifiers=parseModifiers(attr.name);name=attr.name.replace(modifierRE,'');if(matched=name.match(dirAttrRE)){def=resolveAsset(options,'directives',matched[1]);if(def&&def.terminal){if(!termDef||(def.priority||DEFAULT_TERMINAL_PRIORITY)>termDef.priority){termDef=def;rawName=attr.name;value=attr.value;dirName=matched[1];arg=matched[2];}}}}if(termDef){return makeTerminalNodeLinkFn(el,dirName,value,options,termDef,rawName,arg,modifiers);}}function skip(){}skip.terminal=true; /**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */function makeTerminalNodeLinkFn(el,dirName,value,options,def,rawName,arg,modifiers){var parsed=parseDirective(value);var descriptor={name:dirName,arg:arg,expression:parsed.expression,filters:parsed.filters,raw:value,attr:rawName,modifiers:modifiers,def:def}; // check ref for v-for and router-view
	if(dirName==='for'||dirName==='router-view'){descriptor.ref=findRef(el);}var fn=function terminalNodeLinkFn(vm,el,host,scope,frag){if(descriptor.ref){defineReactive((scope||vm).$refs,descriptor.ref,null);}vm._bindDir(descriptor,el,host,scope,frag);};fn.terminal=true;return fn;} /**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */function compileDirectives(attrs,options){var i=attrs.length;var dirs=[];var attr,name,value,rawName,rawValue,dirName,arg,modifiers,dirDef,tokens,matched;while(i--){attr=attrs[i];name=rawName=attr.name;value=rawValue=attr.value;tokens=parseText(value); // reset arg
	arg=null; // check modifiers
	modifiers=parseModifiers(name);name=name.replace(modifierRE,''); // attribute interpolations
	if(tokens){value=tokensToExp(tokens);arg=name;pushDir('bind',directives.bind,tokens); // warn against mixing mustaches with v-bind
	if(process.env.NODE_ENV!=='production'){if(name==='class'&&Array.prototype.some.call(attrs,function(attr){return attr.name===':class'||attr.name==='v-bind:class';})){warn('class="'+rawValue+'": Do not mix mustache interpolation '+'and v-bind for "class" on the same element. Use one or the other.',options);}}}else  // special attribute: transition
	if(transitionRE.test(name)){modifiers.literal=!bindRE.test(name);pushDir('transition',internalDirectives.transition);}else  // event handlers
	if(onRE.test(name)){arg=name.replace(onRE,'');pushDir('on',directives.on);}else  // attribute bindings
	if(bindRE.test(name)){dirName=name.replace(bindRE,'');if(dirName==='style'||dirName==='class'){pushDir(dirName,internalDirectives[dirName]);}else {arg=dirName;pushDir('bind',directives.bind);}}else  // normal directives
	if(matched=name.match(dirAttrRE)){dirName=matched[1];arg=matched[2]; // skip v-else (when used with v-show)
	if(dirName==='else'){continue;}dirDef=resolveAsset(options,'directives',dirName,true);if(dirDef){pushDir(dirName,dirDef);}}} /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */function pushDir(dirName,def,interpTokens){var hasOneTimeToken=interpTokens&&hasOneTime(interpTokens);var parsed=!hasOneTimeToken&&parseDirective(value);dirs.push({name:dirName,attr:rawName,raw:rawValue,def:def,arg:arg,modifiers:modifiers, // conversion from interpolation strings with one-time token
	// to expression is differed until directive bind time so that we
	// have access to the actual vm context for one-time bindings.
	expression:parsed&&parsed.expression,filters:parsed&&parsed.filters,interp:interpTokens,hasOneTime:hasOneTimeToken});}if(dirs.length){return makeNodeLinkFn(dirs);}} /**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */function parseModifiers(name){var res=Object.create(null);var match=name.match(modifierRE);if(match){var i=match.length;while(i--){res[match[i].slice(1)]=true;}}return res;} /**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */function makeNodeLinkFn(directives){return function nodeLinkFn(vm,el,host,scope,frag){ // reverse apply because it's sorted low to high
	var i=directives.length;while(i--){vm._bindDir(directives[i],el,host,scope,frag);}};} /**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */function hasOneTime(tokens){var i=tokens.length;while(i--){if(tokens[i].oneTime)return true;}}var specialCharRE=/[^\w\-:\.]/; /**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */function transclude(el,options){ // extract container attributes to pass them down
	// to compiler, because they need to be compiled in
	// parent scope. we are mutating the options object here
	// assuming the same object will be used for compile
	// right after this.
	if(options){options._containerAttrs=extractAttrs(el);} // for template tags, what we want is its content as
	// a documentFragment (for fragment instances)
	if(isTemplate(el)){el=parseTemplate(el);}if(options){if(options._asComponent&&!options.template){options.template='<slot></slot>';}if(options.template){options._content=extractContent(el);el=transcludeTemplate(el,options);}}if(isFragment(el)){ // anchors for fragment instance
	// passing in `persist: true` to avoid them being
	// discarded by IE during template cloning
	prepend(createAnchor('v-start',true),el);el.appendChild(createAnchor('v-end',true));}return el;} /**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */function transcludeTemplate(el,options){var template=options.template;var frag=parseTemplate(template,true);if(frag){var replacer=frag.firstChild;var tag=replacer.tagName&&replacer.tagName.toLowerCase();if(options.replace){ /* istanbul ignore if */if(el===document.body){process.env.NODE_ENV!=='production'&&warn('You are mounting an instance with a template to '+'<body>. This will replace <body> entirely. You '+'should probably use `replace: false` here.');} // there are many cases where the instance must
	// become a fragment instance: basically anything that
	// can create more than 1 root nodes.
	if( // multi-children template
	frag.childNodes.length>1|| // non-element template
	replacer.nodeType!==1|| // single nested component
	tag==='component'||resolveAsset(options,'components',tag)||hasBindAttr(replacer,'is')|| // element directive
	resolveAsset(options,'elementDirectives',tag)|| // for block
	replacer.hasAttribute('v-for')|| // if block
	replacer.hasAttribute('v-if')){return frag;}else {options._replacerAttrs=extractAttrs(replacer);mergeAttrs(el,replacer);return replacer;}}else {el.appendChild(frag);return el;}}else {process.env.NODE_ENV!=='production'&&warn('Invalid template option: '+template);}} /**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */function extractAttrs(el){if(el.nodeType===1&&el.hasAttributes()){return toArray(el.attributes);}} /**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */function mergeAttrs(from,to){var attrs=from.attributes;var i=attrs.length;var name,value;while(i--){name=attrs[i].name;value=attrs[i].value;if(!to.hasAttribute(name)&&!specialCharRE.test(name)){to.setAttribute(name,value);}else if(name==='class'&&!parseText(value)){value.trim().split(/\s+/).forEach(function(cls){addClass(to,cls);});}}} /**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */function resolveSlots(vm,content){if(!content){return;}var contents=vm._slotContents=Object.create(null);var el,name;for(var i=0,l=content.children.length;i<l;i++){el=content.children[i]; /* eslint-disable no-cond-assign */if(name=el.getAttribute('slot')){(contents[name]||(contents[name]=[])).push(el);} /* eslint-enable no-cond-assign */if(process.env.NODE_ENV!=='production'&&getBindAttr(el,'slot')){warn('The "slot" attribute must be static.',vm.$parent);}}for(name in contents){contents[name]=extractFragment(contents[name],content);}if(content.hasChildNodes()){contents['default']=extractFragment(content.childNodes,content);}} /**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */function extractFragment(nodes,parent){var frag=document.createDocumentFragment();nodes=toArray(nodes);for(var i=0,l=nodes.length;i<l;i++){var node=nodes[i];if(isTemplate(node)&&!node.hasAttribute('v-if')&&!node.hasAttribute('v-for')){parent.removeChild(node);node=parseTemplate(node);}frag.appendChild(node);}return frag;}var compiler=Object.freeze({compile:compile,compileAndLinkProps:compileAndLinkProps,compileRoot:compileRoot,transclude:transclude,resolveSlots:resolveSlots});function stateMixin(Vue){ /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */Object.defineProperty(Vue.prototype,'$data',{get:function get(){return this._data;},set:function set(newData){if(newData!==this._data){this._setData(newData);}}}); /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */Vue.prototype._initState=function(){this._initProps();this._initMeta();this._initMethods();this._initData();this._initComputed();}; /**
	   * Initialize props.
	   */Vue.prototype._initProps=function(){var options=this.$options;var el=options.el;var props=options.props;if(props&&!el){process.env.NODE_ENV!=='production'&&warn('Props will not be compiled if no `el` option is '+'provided at instantiation.',this);} // make sure to convert string selectors into element now
	el=options.el=query(el);this._propsUnlinkFn=el&&el.nodeType===1&&props // props must be linked in proper scope if inside v-for
	?compileAndLinkProps(this,el,props,this._scope):null;}; /**
	   * Initialize the data.
	   */Vue.prototype._initData=function(){var dataFn=this.$options.data;var data=this._data=dataFn?dataFn():{};if(!isPlainObject(data)){data={};process.env.NODE_ENV!=='production'&&warn('data functions should return an object.',this);}var props=this._props;var runtimeData=this._runtimeData?typeof this._runtimeData==='function'?this._runtimeData():this._runtimeData:null; // proxy data on instance
	var keys=Object.keys(data);var i,key;i=keys.length;while(i--){key=keys[i]; // there are two scenarios where we can proxy a data key:
	// 1. it's not already defined as a prop
	// 2. it's provided via a instantiation option AND there are no
	//    template prop present
	if(!props||!hasOwn(props,key)||runtimeData&&hasOwn(runtimeData,key)&&props[key].raw===null){this._proxy(key);}else if(process.env.NODE_ENV!=='production'){warn('Data field "'+key+'" is already defined '+'as a prop. Use prop default value instead.',this);}} // observe data
	observe(data,this);}; /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */Vue.prototype._setData=function(newData){newData=newData||{};var oldData=this._data;this._data=newData;var keys,key,i; // unproxy keys not present in new data
	keys=Object.keys(oldData);i=keys.length;while(i--){key=keys[i];if(!(key in newData)){this._unproxy(key);}} // proxy keys not already proxied,
	// and trigger change for changed values
	keys=Object.keys(newData);i=keys.length;while(i--){key=keys[i];if(!hasOwn(this,key)){ // new property
	this._proxy(key);}}oldData.__ob__.removeVm(this);observe(newData,this);this._digest();}; /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */Vue.prototype._proxy=function(key){if(!isReserved(key)){ // need to store ref to self here
	// because these getter/setters might
	// be called by child scopes via
	// prototype inheritance.
	var self=this;Object.defineProperty(self,key,{configurable:true,enumerable:true,get:function proxyGetter(){return self._data[key];},set:function proxySetter(val){self._data[key]=val;}});}}; /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */Vue.prototype._unproxy=function(key){if(!isReserved(key)){delete this[key];}}; /**
	   * Force update on every watcher in scope.
	   */Vue.prototype._digest=function(){for(var i=0,l=this._watchers.length;i<l;i++){this._watchers[i].update(true); // shallow updates
	}}; /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */function noop(){}Vue.prototype._initComputed=function(){var computed=this.$options.computed;if(computed){for(var key in computed){var userDef=computed[key];var def={enumerable:true,configurable:true};if(typeof userDef==='function'){def.get=makeComputedGetter(userDef,this);def.set=noop;}else {def.get=userDef.get?userDef.cache!==false?makeComputedGetter(userDef.get,this):bind(userDef.get,this):noop;def.set=userDef.set?bind(userDef.set,this):noop;}Object.defineProperty(this,key,def);}}};function makeComputedGetter(getter,owner){var watcher=new Watcher(owner,getter,null,{lazy:true});return function computedGetter(){if(watcher.dirty){watcher.evaluate();}if(Dep.target){watcher.depend();}return watcher.value;};} /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */Vue.prototype._initMethods=function(){var methods=this.$options.methods;if(methods){for(var key in methods){this[key]=bind(methods[key],this);}}}; /**
	   * Initialize meta information like $index, $key & $value.
	   */Vue.prototype._initMeta=function(){var metas=this.$options._meta;if(metas){for(var key in metas){defineReactive(this,key,metas[key]);}}};}var eventRE=/^v-on:|^@/;function eventsMixin(Vue){ /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */Vue.prototype._initEvents=function(){var options=this.$options;if(options._asComponent){registerComponentEvents(this,options.el);}registerCallbacks(this,'$on',options.events);registerCallbacks(this,'$watch',options.watch);}; /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */function registerComponentEvents(vm,el){var attrs=el.attributes;var name,handler;for(var i=0,l=attrs.length;i<l;i++){name=attrs[i].name;if(eventRE.test(name)){name=name.replace(eventRE,'');handler=(vm._scope||vm._context).$eval(attrs[i].value,true);if(typeof handler==='function'){handler._fromParent=true;vm.$on(name.replace(eventRE),handler);}else if(process.env.NODE_ENV!=='production'){warn('v-on:'+name+'="'+attrs[i].value+'" '+'expects a function value, got '+handler,vm);}}}} /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */function registerCallbacks(vm,action,hash){if(!hash)return;var handlers,key,i,j;for(key in hash){handlers=hash[key];if(isArray(handlers)){for(i=0,j=handlers.length;i<j;i++){register(vm,action,key,handlers[i]);}}else {register(vm,action,key,handlers);}}} /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */function register(vm,action,key,handler,options){var type=typeof handler==='undefined'?'undefined':_typeof(handler);if(type==='function'){vm[action](key,handler,options);}else if(type==='string'){var methods=vm.$options.methods;var method=methods&&methods[handler];if(method){vm[action](key,method,options);}else {process.env.NODE_ENV!=='production'&&warn('Unknown method: "'+handler+'" when '+'registering callback for '+action+': "'+key+'".',vm);}}else if(handler&&type==='object'){register(vm,action,key,handler.handler,handler);}} /**
	   * Setup recursive attached/detached calls
	   */Vue.prototype._initDOMHooks=function(){this.$on('hook:attached',onAttached);this.$on('hook:detached',onDetached);}; /**
	   * Callback to recursively call attached hook on children
	   */function onAttached(){if(!this._isAttached){this._isAttached=true;this.$children.forEach(callAttach);}} /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */function callAttach(child){if(!child._isAttached&&inDoc(child.$el)){child._callHook('attached');}} /**
	   * Callback to recursively call detached hook on children
	   */function onDetached(){if(this._isAttached){this._isAttached=false;this.$children.forEach(callDetach);}} /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */function callDetach(child){if(child._isAttached&&!inDoc(child.$el)){child._callHook('detached');}} /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */Vue.prototype._callHook=function(hook){this.$emit('pre-hook:'+hook);var handlers=this.$options[hook];if(handlers){for(var i=0,j=handlers.length;i<j;i++){handlers[i].call(this);}}this.$emit('hook:'+hook);};}function noop(){} /**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */function Directive(descriptor,vm,el,host,scope,frag){this.vm=vm;this.el=el; // copy descriptor properties
	this.descriptor=descriptor;this.name=descriptor.name;this.expression=descriptor.expression;this.arg=descriptor.arg;this.modifiers=descriptor.modifiers;this.filters=descriptor.filters;this.literal=this.modifiers&&this.modifiers.literal; // private
	this._locked=false;this._bound=false;this._listeners=null; // link context
	this._host=host;this._scope=scope;this._frag=frag; // store directives on node in dev mode
	if(process.env.NODE_ENV!=='production'&&this.el){this.el._vue_directives=this.el._vue_directives||[];this.el._vue_directives.push(this);}} /**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */Directive.prototype._bind=function(){var name=this.name;var descriptor=this.descriptor; // remove attribute
	if((name!=='cloak'||this.vm._isCompiled)&&this.el&&this.el.removeAttribute){var attr=descriptor.attr||'v-'+name;this.el.removeAttribute(attr);} // copy def properties
	var def=descriptor.def;if(typeof def==='function'){this.update=def;}else {extend(this,def);} // setup directive params
	this._setupParams(); // initial bind
	if(this.bind){this.bind();}this._bound=true;if(this.literal){this.update&&this.update(descriptor.raw);}else if((this.expression||this.modifiers)&&(this.update||this.twoWay)&&!this._checkStatement()){ // wrapped updater for context
	var dir=this;if(this.update){this._update=function(val,oldVal){if(!dir._locked){dir.update(val,oldVal);}};}else {this._update=noop;}var preProcess=this._preProcess?bind(this._preProcess,this):null;var postProcess=this._postProcess?bind(this._postProcess,this):null;var watcher=this._watcher=new Watcher(this.vm,this.expression,this._update, // callback
	{filters:this.filters,twoWay:this.twoWay,deep:this.deep,preProcess:preProcess,postProcess:postProcess,scope:this._scope}); // v-model with inital inline value need to sync back to
	// model instead of update to DOM on init. They would
	// set the afterBind hook to indicate that.
	if(this.afterBind){this.afterBind();}else if(this.update){this.update(watcher.value);}}}; /**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */Directive.prototype._setupParams=function(){if(!this.params){return;}var params=this.params; // swap the params array with a fresh object.
	this.params=Object.create(null);var i=params.length;var key,val,mappedKey;while(i--){key=hyphenate(params[i]);mappedKey=camelize(key);val=getBindAttr(this.el,key);if(val!=null){ // dynamic
	this._setupParamWatcher(mappedKey,val);}else { // static
	val=getAttr(this.el,key);if(val!=null){this.params[mappedKey]=val===''?true:val;}}}}; /**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */Directive.prototype._setupParamWatcher=function(key,expression){var self=this;var called=false;var unwatch=(this._scope||this.vm).$watch(expression,function(val,oldVal){self.params[key]=val; // since we are in immediate mode,
	// only call the param change callbacks if this is not the first update.
	if(called){var cb=self.paramWatchers&&self.paramWatchers[key];if(cb){cb.call(self,val,oldVal);}}else {called=true;}},{immediate:true,user:false});(this._paramUnwatchFns||(this._paramUnwatchFns=[])).push(unwatch);}; /**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */Directive.prototype._checkStatement=function(){var expression=this.expression;if(expression&&this.acceptStatement&&!isSimplePath(expression)){var fn=parseExpression(expression).get;var scope=this._scope||this.vm;var handler=function handler(e){scope.$event=e;fn.call(scope,scope);scope.$event=null;};if(this.filters){handler=scope._applyFilters(handler,null,this.filters);}this.update(handler);return true;}}; /**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */Directive.prototype.set=function(value){ /* istanbul ignore else */if(this.twoWay){this._withLock(function(){this._watcher.set(value);});}else if(process.env.NODE_ENV!=='production'){warn('Directive.set() can only be used inside twoWay'+'directives.');}}; /**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */Directive.prototype._withLock=function(fn){var self=this;self._locked=true;fn.call(self);nextTick(function(){self._locked=false;});}; /**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */Directive.prototype.on=function(event,handler,useCapture){on(this.el,event,handler,useCapture);(this._listeners||(this._listeners=[])).push([event,handler]);}; /**
	 * Teardown the watcher and call unbind.
	 */Directive.prototype._teardown=function(){if(this._bound){this._bound=false;if(this.unbind){this.unbind();}if(this._watcher){this._watcher.teardown();}var listeners=this._listeners;var i;if(listeners){i=listeners.length;while(i--){off(this.el,listeners[i][0],listeners[i][1]);}}var unwatchFns=this._paramUnwatchFns;if(unwatchFns){i=unwatchFns.length;while(i--){unwatchFns[i]();}}if(process.env.NODE_ENV!=='production'&&this.el){this.el._vue_directives.$remove(this);}this.vm=this.el=this._watcher=this._listeners=null;}};function lifecycleMixin(Vue){ /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */Vue.prototype._updateRef=function(remove){var ref=this.$options._ref;if(ref){var refs=(this._scope||this._context).$refs;if(remove){if(refs[ref]===this){refs[ref]=null;}}else {refs[ref]=this;}}}; /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */Vue.prototype._compile=function(el){var options=this.$options; // transclude and init element
	// transclude can potentially replace original
	// so we need to keep reference; this step also injects
	// the template and caches the original attributes
	// on the container node and replacer node.
	var original=el;el=transclude(el,options);this._initElement(el); // handle v-pre on root node (#2026)
	if(el.nodeType===1&&getAttr(el,'v-pre')!==null){return;} // root is always compiled per-instance, because
	// container attrs and props can be different every time.
	var contextOptions=this._context&&this._context.$options;var rootLinker=compileRoot(el,options,contextOptions); // resolve slot distribution
	resolveSlots(this,options._content); // compile and link the rest
	var contentLinkFn;var ctor=this.constructor; // component compilation can be cached
	// as long as it's not using inline-template
	if(options._linkerCachable){contentLinkFn=ctor.linker;if(!contentLinkFn){contentLinkFn=ctor.linker=compile(el,options);}} // link phase
	// make sure to link root with prop scope!
	var rootUnlinkFn=rootLinker(this,el,this._scope);var contentUnlinkFn=contentLinkFn?contentLinkFn(this,el):compile(el,options)(this,el); // register composite unlink function
	// to be called during instance destruction
	this._unlinkFn=function(){rootUnlinkFn(); // passing destroying: true to avoid searching and
	// splicing the directives
	contentUnlinkFn(true);}; // finally replace original
	if(options.replace){replace(original,el);}this._isCompiled=true;this._callHook('compiled');}; /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */Vue.prototype._initElement=function(el){if(isFragment(el)){this._isFragment=true;this.$el=this._fragmentStart=el.firstChild;this._fragmentEnd=el.lastChild; // set persisted text anchors to empty
	if(this._fragmentStart.nodeType===3){this._fragmentStart.data=this._fragmentEnd.data='';}this._fragment=el;}else {this.$el=el;}this.$el.__vue__=this;this._callHook('beforeCompile');}; /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */Vue.prototype._bindDir=function(descriptor,node,host,scope,frag){this._directives.push(new Directive(descriptor,this,node,host,scope,frag));}; /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */Vue.prototype._destroy=function(remove,deferCleanup){if(this._isBeingDestroyed){if(!deferCleanup){this._cleanup();}return;}var destroyReady;var pendingRemoval;var self=this; // Cleanup should be called either synchronously or asynchronoysly as
	// callback of this.$remove(), or if remove and deferCleanup are false.
	// In any case it should be called after all other removing, unbinding and
	// turning of is done
	var cleanupIfPossible=function cleanupIfPossible(){if(destroyReady&&!pendingRemoval&&!deferCleanup){self._cleanup();}}; // remove DOM element
	if(remove&&this.$el){pendingRemoval=true;this.$remove(function(){pendingRemoval=false;cleanupIfPossible();});}this._callHook('beforeDestroy');this._isBeingDestroyed=true;var i; // remove self from parent. only necessary
	// if parent is not being destroyed as well.
	var parent=this.$parent;if(parent&&!parent._isBeingDestroyed){parent.$children.$remove(this); // unregister ref (remove: true)
	this._updateRef(true);} // destroy all children.
	i=this.$children.length;while(i--){this.$children[i].$destroy();} // teardown props
	if(this._propsUnlinkFn){this._propsUnlinkFn();} // teardown all directives. this also tearsdown all
	// directive-owned watchers.
	if(this._unlinkFn){this._unlinkFn();}i=this._watchers.length;while(i--){this._watchers[i].teardown();} // remove reference to self on $el
	if(this.$el){this.$el.__vue__=null;}destroyReady=true;cleanupIfPossible();}; /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */Vue.prototype._cleanup=function(){if(this._isDestroyed){return;} // remove self from owner fragment
	// do it in cleanup so that we can call $destroy with
	// defer right when a fragment is about to be removed.
	if(this._frag){this._frag.children.$remove(this);} // remove reference from data ob
	// frozen object may not have observer.
	if(this._data.__ob__){this._data.__ob__.removeVm(this);} // Clean up references to private properties and other
	// instances. preserve reference to _data so that proxy
	// accessors still work. The only potential side effect
	// here is that mutating the instance after it's destroyed
	// may affect the state of other components that are still
	// observing the same object, but that seems to be a
	// reasonable responsibility for the user rather than
	// always throwing an error on them.
	this.$el=this.$parent=this.$root=this.$children=this._watchers=this._context=this._scope=this._directives=null; // call the last hook...
	this._isDestroyed=true;this._callHook('destroyed'); // turn off all instance listeners.
	this.$off();};}function miscMixin(Vue){ /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */Vue.prototype._applyFilters=function(value,oldValue,filters,write){var filter,fn,args,arg,offset,i,l,j,k;for(i=0,l=filters.length;i<l;i++){filter=filters[write?l-i-1:i];fn=resolveAsset(this.$options,'filters',filter.name,true);if(!fn)continue;fn=write?fn.write:fn.read||fn;if(typeof fn!=='function')continue;args=write?[value,oldValue]:[value];offset=write?2:1;if(filter.args){for(j=0,k=filter.args.length;j<k;j++){arg=filter.args[j];args[j+offset]=arg.dynamic?this.$get(arg.value):arg.value;}}value=fn.apply(this,args);}return value;}; /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */Vue.prototype._resolveComponent=function(value,cb){var factory;if(typeof value==='function'){factory=value;}else {factory=resolveAsset(this.$options,'components',value,true);}if(!factory){return;} // async component factory
	if(!factory.options){if(factory.resolved){ // cached
	cb(factory.resolved);}else if(factory.requested){ // pool callbacks
	factory.pendingCallbacks.push(cb);}else {factory.requested=true;var cbs=factory.pendingCallbacks=[cb];factory.call(this,function resolve(res){if(isPlainObject(res)){res=Vue.extend(res);} // cache resolved
	factory.resolved=res; // invoke callbacks
	for(var i=0,l=cbs.length;i<l;i++){cbs[i](res);}},function reject(reason){process.env.NODE_ENV!=='production'&&warn('Failed to resolve async component'+(typeof value==='string'?': '+value:'')+'. '+(reason?'\nReason: '+reason:''));});}}else { // normal component
	cb(factory);}};}var filterRE$1=/[^|]\|[^|]/;function dataAPI(Vue){ /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */Vue.prototype.$get=function(exp,asStatement){var res=parseExpression(exp);if(res){if(asStatement&&!isSimplePath(exp)){var self=this;return function statementHandler(){self.$arguments=toArray(arguments);var result=res.get.call(self,self);self.$arguments=null;return result;};}else {try{return res.get.call(this,this);}catch(e){}}}}; /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */Vue.prototype.$set=function(exp,val){var res=parseExpression(exp,true);if(res&&res.set){res.set.call(this,this,val);}}; /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */Vue.prototype.$delete=function(key){del(this._data,key);}; /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */Vue.prototype.$watch=function(expOrFn,cb,options){var vm=this;var parsed;if(typeof expOrFn==='string'){parsed=parseDirective(expOrFn);expOrFn=parsed.expression;}var watcher=new Watcher(vm,expOrFn,cb,{deep:options&&options.deep,sync:options&&options.sync,filters:parsed&&parsed.filters,user:!options||options.user!==false});if(options&&options.immediate){cb.call(vm,watcher.value);}return function unwatchFn(){watcher.teardown();};}; /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */Vue.prototype.$eval=function(text,asStatement){ // check for filters.
	if(filterRE$1.test(text)){var dir=parseDirective(text); // the filter regex check might give false positive
	// for pipes inside strings, so it's possible that
	// we don't get any filters here
	var val=this.$get(dir.expression,asStatement);return dir.filters?this._applyFilters(val,null,dir.filters):val;}else { // no filter
	return this.$get(text,asStatement);}}; /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */Vue.prototype.$interpolate=function(text){var tokens=parseText(text);var vm=this;if(tokens){if(tokens.length===1){return vm.$eval(tokens[0].value)+'';}else {return tokens.map(function(token){return token.tag?vm.$eval(token.value):token.value;}).join('');}}else {return text;}}; /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */Vue.prototype.$log=function(path){var data=path?getPath(this._data,path):this._data;if(data){data=clean(data);} // include computed fields
	if(!path){var key;for(key in this.$options.computed){data[key]=clean(this[key]);}if(this._props){for(key in this._props){data[key]=clean(this[key]);}}}console.log(data);}; /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */function clean(obj){return JSON.parse(JSON.stringify(obj));}}function domAPI(Vue){ /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */Vue.prototype.$nextTick=function(fn){nextTick(fn,this);}; /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$appendTo=function(target,cb,withTransition){return insert(this,target,cb,withTransition,append,appendWithTransition);}; /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$prependTo=function(target,cb,withTransition){target=query(target);if(target.hasChildNodes()){this.$before(target.firstChild,cb,withTransition);}else {this.$appendTo(target,cb,withTransition);}return this;}; /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$before=function(target,cb,withTransition){return insert(this,target,cb,withTransition,beforeWithCb,beforeWithTransition);}; /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$after=function(target,cb,withTransition){target=query(target);if(target.nextSibling){this.$before(target.nextSibling,cb,withTransition);}else {this.$appendTo(target.parentNode,cb,withTransition);}return this;}; /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$remove=function(cb,withTransition){if(!this.$el.parentNode){return cb&&cb();}var inDocument=this._isAttached&&inDoc(this.$el); // if we are not in document, no need to check
	// for transitions
	if(!inDocument)withTransition=false;var self=this;var realCb=function realCb(){if(inDocument)self._callHook('detached');if(cb)cb();};if(this._isFragment){removeNodeRange(this._fragmentStart,this._fragmentEnd,this,this._fragment,realCb);}else {var op=withTransition===false?removeWithCb:removeWithTransition;op(this.$el,this,realCb);}return this;}; /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */function insert(vm,target,cb,withTransition,op1,op2){target=query(target);var targetIsDetached=!inDoc(target);var op=withTransition===false||targetIsDetached?op1:op2;var shouldCallHook=!targetIsDetached&&!vm._isAttached&&!inDoc(vm.$el);if(vm._isFragment){mapNodeRange(vm._fragmentStart,vm._fragmentEnd,function(node){op(node,target,vm);});cb&&cb();}else {op(vm.$el,target,vm,cb);}if(shouldCallHook){vm._callHook('attached');}return vm;} /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */function query(el){return typeof el==='string'?document.querySelector(el):el;} /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */function append(el,target,vm,cb){target.appendChild(el);if(cb)cb();} /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */function beforeWithCb(el,target,vm,cb){before(el,target);if(cb)cb();} /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */function removeWithCb(el,vm,cb){remove(el);if(cb)cb();}}function eventsAPI(Vue){ /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */Vue.prototype.$on=function(event,fn){(this._events[event]||(this._events[event]=[])).push(fn);modifyListenerCount(this,event,1);return this;}; /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */Vue.prototype.$once=function(event,fn){var self=this;function on(){self.$off(event,on);fn.apply(this,arguments);}on.fn=fn;this.$on(event,on);return this;}; /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */Vue.prototype.$off=function(event,fn){var cbs; // all
	if(!arguments.length){if(this.$parent){for(event in this._events){cbs=this._events[event];if(cbs){modifyListenerCount(this,event,-cbs.length);}}}this._events={};return this;} // specific event
	cbs=this._events[event];if(!cbs){return this;}if(arguments.length===1){modifyListenerCount(this,event,-cbs.length);this._events[event]=null;return this;} // specific handler
	var cb;var i=cbs.length;while(i--){cb=cbs[i];if(cb===fn||cb.fn===fn){modifyListenerCount(this,event,-1);cbs.splice(i,1);break;}}return this;}; /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */Vue.prototype.$emit=function(event){var isSource=typeof event==='string';event=isSource?event:event.name;var cbs=this._events[event];var shouldPropagate=isSource||!cbs;if(cbs){cbs=cbs.length>1?toArray(cbs):cbs; // this is a somewhat hacky solution to the question raised
	// in #2102: for an inline component listener like <comp @test="doThis">,
	// the propagation handling is somewhat broken. Therefore we
	// need to treat these inline callbacks differently.
	var hasParentCbs=isSource&&cbs.some(function(cb){return cb._fromParent;});if(hasParentCbs){shouldPropagate=false;}var args=toArray(arguments,1);for(var i=0,l=cbs.length;i<l;i++){var cb=cbs[i];var res=cb.apply(this,args);if(res===true&&(!hasParentCbs||cb._fromParent)){shouldPropagate=true;}}}return shouldPropagate;}; /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */Vue.prototype.$broadcast=function(event){var isSource=typeof event==='string';event=isSource?event:event.name; // if no child has registered for this event,
	// then there's no need to broadcast.
	if(!this._eventsCount[event])return;var children=this.$children;var args=toArray(arguments);if(isSource){ // use object event to indicate non-source emit
	// on children
	args[0]={name:event,source:this};}for(var i=0,l=children.length;i<l;i++){var child=children[i];var shouldPropagate=child.$emit.apply(child,args);if(shouldPropagate){child.$broadcast.apply(child,args);}}return this;}; /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */Vue.prototype.$dispatch=function(event){var shouldPropagate=this.$emit.apply(this,arguments);if(!shouldPropagate)return;var parent=this.$parent;var args=toArray(arguments); // use object event to indicate non-source emit
	// on parents
	args[0]={name:event,source:this};while(parent){shouldPropagate=parent.$emit.apply(parent,args);parent=shouldPropagate?parent.$parent:null;}return this;}; /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */var hookRE=/^hook:/;function modifyListenerCount(vm,event,count){var parent=vm.$parent; // hooks do not get broadcasted so no need
	// to do bookkeeping for them
	if(!parent||!count||hookRE.test(event))return;while(parent){parent._eventsCount[event]=(parent._eventsCount[event]||0)+count;parent=parent.$parent;}}}function lifecycleAPI(Vue){ /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */Vue.prototype.$mount=function(el){if(this._isCompiled){process.env.NODE_ENV!=='production'&&warn('$mount() should be called only once.',this);return;}el=query(el);if(!el){el=document.createElement('div');}this._compile(el);this._initDOMHooks();if(inDoc(this.$el)){this._callHook('attached');ready.call(this);}else {this.$once('hook:attached',ready);}return this;}; /**
	   * Mark an instance as ready.
	   */function ready(){this._isAttached=true;this._isReady=true;this._callHook('ready');} /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */Vue.prototype.$destroy=function(remove,deferCleanup){this._destroy(remove,deferCleanup);}; /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */Vue.prototype.$compile=function(el,host,scope,frag){return compile(el,this.$options,true)(this,el,host,scope,frag);};} /**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */function Vue(options){this._init(options);} // install internals
	initMixin(Vue);stateMixin(Vue);eventsMixin(Vue);lifecycleMixin(Vue);miscMixin(Vue); // install instance APIs
	dataAPI(Vue);domAPI(Vue);eventsAPI(Vue);lifecycleAPI(Vue);var slot={priority:SLOT,params:['name'],bind:function bind(){ // this was resolved during component transclusion
	var name=this.params.name||'default';var content=this.vm._slotContents&&this.vm._slotContents[name];if(!content||!content.hasChildNodes()){this.fallback();}else {this.compile(content.cloneNode(true),this.vm._context,this.vm);}},compile:function compile(content,context,host){if(content&&context){if(this.el.hasChildNodes()&&content.childNodes.length===1&&content.childNodes[0].nodeType===1&&content.childNodes[0].hasAttribute('v-if')){ // if the inserted slot has v-if
	// inject fallback content as the v-else
	var elseBlock=document.createElement('template');elseBlock.setAttribute('v-else','');elseBlock.innerHTML=this.el.innerHTML; // the else block should be compiled in child scope
	elseBlock._context=this.vm;content.appendChild(elseBlock);}var scope=host?host._scope:this._scope;this.unlink=context.$compile(content,host,scope,this._frag);}if(content){replace(this.el,content);}else {remove(this.el);}},fallback:function fallback(){this.compile(extractContent(this.el,true),this.vm);},unbind:function unbind(){if(this.unlink){this.unlink();}}};var partial={priority:PARTIAL,params:['name'], // watch changes to name for dynamic partials
	paramWatchers:{name:function name(value){vIf.remove.call(this);if(value){this.insert(value);}}},bind:function bind(){this.anchor=createAnchor('v-partial');replace(this.el,this.anchor);this.insert(this.params.name);},insert:function insert(id){var partial=resolveAsset(this.vm.$options,'partials',id,true);if(partial){this.factory=new FragmentFactory(this.vm,partial);vIf.insert.call(this);}},unbind:function unbind(){if(this.frag){this.frag.destroy();}}};var elementDirectives={slot:slot,partial:partial};var convertArray=vFor._postProcess; /**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */function limitBy(arr,n,offset){offset=offset?parseInt(offset,10):0;n=toNumber(n);return typeof n==='number'?arr.slice(offset,offset+n):arr;} /**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */function filterBy(arr,search,delimiter){arr=convertArray(arr);if(search==null){return arr;}if(typeof search==='function'){return arr.filter(search);} // cast to lowercase string
	search=(''+search).toLowerCase(); // allow optional `in` delimiter
	// because why not
	var n=delimiter==='in'?3:2; // extract and flatten keys
	var keys=Array.prototype.concat.apply([],toArray(arguments,n));var res=[];var item,key,val,j;for(var i=0,l=arr.length;i<l;i++){item=arr[i];val=item&&item.$value||item;j=keys.length;if(j){while(j--){key=keys[j];if(key==='$key'&&contains(item.$key,search)||contains(getPath(val,key),search)){res.push(item);break;}}}else if(contains(item,search)){res.push(item);}}return res;} /**
	 * Filter filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */function orderBy(arr){var _comparator=null;var sortKeys=undefined;arr=convertArray(arr); // determine order (last argument)
	var args=toArray(arguments,1);var order=args[args.length-1];if(typeof order==='number'){order=order<0?-1:1;args=args.length>1?args.slice(0,-1):args;}else {order=1;} // determine sortKeys & comparator
	var firstArg=args[0];if(!firstArg){return arr;}else if(typeof firstArg==='function'){ // custom comparator
	_comparator=function comparator(a,b){return firstArg(a,b)*order;};}else { // string keys. flatten first
	sortKeys=Array.prototype.concat.apply([],args);_comparator=function comparator(a,b,i){i=i||0;return i>=sortKeys.length-1?baseCompare(a,b,i):baseCompare(a,b,i)||_comparator(a,b,i+1);};}function baseCompare(a,b,sortKeyIndex){var sortKey=sortKeys[sortKeyIndex];if(sortKey){if(sortKey!=='$key'){if(isObject(a)&&'$value' in a)a=a.$value;if(isObject(b)&&'$value' in b)b=b.$value;}a=isObject(a)?getPath(a,sortKey):a;b=isObject(b)?getPath(b,sortKey):b;}return a===b?0:a>b?order:-order;} // sort on a copy to avoid mutating original array
	return arr.slice().sort(_comparator);} /**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */function contains(val,search){var i;if(isPlainObject(val)){var keys=Object.keys(val);i=keys.length;while(i--){if(contains(val[keys[i]],search)){return true;}}}else if(isArray(val)){i=val.length;while(i--){if(contains(val[i],search)){return true;}}}else if(val!=null){return val.toString().toLowerCase().indexOf(search)>-1;}}var digitsRE=/(\d{3})(?=\d)/g; // asset collections must be a plain object.
	var filters={orderBy:orderBy,filterBy:filterBy,limitBy:limitBy, /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */json:{read:function read(value,indent){return typeof value==='string'?value:JSON.stringify(value,null,Number(indent)||2);},write:function write(value){try{return JSON.parse(value);}catch(e){return value;}}}, /**
	   * 'abc' => 'Abc'
	   */capitalize:function capitalize(value){if(!value&&value!==0)return '';value=value.toString();return value.charAt(0).toUpperCase()+value.slice(1);}, /**
	   * 'abc' => 'ABC'
	   */uppercase:function uppercase(value){return value||value===0?value.toString().toUpperCase():'';}, /**
	   * 'AbC' => 'abc'
	   */lowercase:function lowercase(value){return value||value===0?value.toString().toLowerCase():'';}, /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   */currency:function currency(value,_currency){value=parseFloat(value);if(!isFinite(value)||!value&&value!==0)return '';_currency=_currency!=null?_currency:'$';var stringified=Math.abs(value).toFixed(2);var _int=stringified.slice(0,-3);var i=_int.length%3;var head=i>0?_int.slice(0,i)+(_int.length>3?',':''):'';var _float=stringified.slice(-3);var sign=value<0?'-':'';return sign+_currency+head+_int.slice(i).replace(digitsRE,'$1,')+_float;}, /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */pluralize:function pluralize(value){var args=toArray(arguments,1);return args.length>1?args[value%10-1]||args[args.length-1]:args[0]+(value===1?'':'s');}, /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */debounce:function debounce(handler,delay){if(!handler)return;if(!delay){delay=300;}return _debounce(handler,delay);}};function installGlobalAPI(Vue){ /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */Vue.options={directives:directives,elementDirectives:elementDirectives,filters:filters,transitions:{},components:{},partials:{},replace:true}; /**
	   * Expose useful internals
	   */Vue.util=util;Vue.config=config;Vue.set=set;Vue['delete']=del;Vue.nextTick=nextTick; /**
	   * The following are exposed for advanced usage / plugins
	   */Vue.compiler=compiler;Vue.FragmentFactory=FragmentFactory;Vue.internalDirectives=internalDirectives;Vue.parsers={path:path,text:text,template:template,directive:directive,expression:expression}; /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */Vue.cid=0;var cid=1; /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */Vue.extend=function(extendOptions){extendOptions=extendOptions||{};var Super=this;var isFirstExtend=Super.cid===0;if(isFirstExtend&&extendOptions._Ctor){return extendOptions._Ctor;}var name=extendOptions.name||Super.options.name;if(process.env.NODE_ENV!=='production'){if(!/^[a-zA-Z][\w-]*$/.test(name)){warn('Invalid component name: "'+name+'". Component names '+'can only contain alphanumeric characaters and the hyphen.');name=null;}}var Sub=createClass(name||'VueComponent');Sub.prototype=Object.create(Super.prototype);Sub.prototype.constructor=Sub;Sub.cid=cid++;Sub.options=mergeOptions(Super.options,extendOptions);Sub['super']=Super; // allow further extension
	Sub.extend=Super.extend; // create asset registers, so extended classes
	// can have their private assets too.
	config._assetTypes.forEach(function(type){Sub[type]=Super[type];}); // enable recursive self-lookup
	if(name){Sub.options.components[name]=Sub;} // cache constructor
	if(isFirstExtend){extendOptions._Ctor=Sub;}return Sub;}; /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */function createClass(name){ /* eslint-disable no-new-func */return new Function('return function '+classify(name)+' (options) { this._init(options) }')(); /* eslint-enable no-new-func */} /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */Vue.use=function(plugin){ /* istanbul ignore if */if(plugin.installed){return;} // additional parameters
	var args=toArray(arguments,1);args.unshift(this);if(typeof plugin.install==='function'){plugin.install.apply(plugin,args);}else {plugin.apply(null,args);}plugin.installed=true;return this;}; /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */Vue.mixin=function(mixin){Vue.options=mergeOptions(Vue.options,mixin);}; /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */config._assetTypes.forEach(function(type){Vue[type]=function(id,definition){if(!definition){return this.options[type+'s'][id];}else { /* istanbul ignore if */if(process.env.NODE_ENV!=='production'){if(type==='component'&&(commonTagRE.test(id)||reservedTagRE.test(id))){warn('Do not use built-in or reserved HTML elements as component '+'id: '+id);}}if(type==='component'&&isPlainObject(definition)){definition.name=id;definition=Vue.extend(definition);}this.options[type+'s'][id]=definition;return definition;}};}); // expose internal transition API
	extend(Vue.transition,transition);}installGlobalAPI(Vue);Vue.version='1.0.21'; // devtools global hook
	/* istanbul ignore next */setTimeout(function(){if(config.devtools){if(devtools){devtools.emit('init',Vue);}else if(process.env.NODE_ENV!=='production'&&inBrowser&&/Chrome\/\d+/.test(window.navigator.userAgent)){console.log('Download the Vue Devtools for a better development experience:\n'+'https://github.com/vuejs/vue-devtools');}}},0);module.exports=Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(47)))

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.VueRouter = factory();
	})(undefined, function () {
	  'use strict';

	  var babelHelpers = {};

	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }

	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;

	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }

	      this.matcher.add(this.path, target);

	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };

	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }

	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },

	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;

	      var match = generateMatch(path, matcher, delegate);

	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }

	      callback(match);
	    }
	  };

	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;

	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }

	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }

	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }

	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;

	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);

	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }

	  function map(callback, addRouteCallback) {
	    var matcher = new Matcher();

	    callback(generateMatch("", matcher, this.delegate));

	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }

	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }

	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }

	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat

	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;

	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },

	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },

	    generate: function generate() {
	      return this.string;
	    }
	  };

	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },

	    regex: function regex() {
	      return "([^/]+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },

	    regex: function regex() {
	      return "(.+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };

	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }

	    var segments = route.split("/"),
	        results = [];

	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';

	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;

	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }

	    specificity.val = +specificity.val;

	    return results;
	  }

	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.

	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }

	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];

	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

	        if (isEqual) {
	          return child;
	        }
	      }
	    },

	    put: function put(charSpec) {
	      var state;

	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }

	      // Make a new state for the character spec
	      state = new State(charSpec);

	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);

	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }

	      // Return the new state
	      return state;
	    },

	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;

	      // DEBUG "  " + debugState(this)
	      var returned = [];

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];

	        charSpec = child.charSpec;

	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }

	      return returned;
	    }

	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };

	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }
	   function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/

	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }

	  function recognizeChar(states, ch) {
	    var nextStates = [];

	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];

	      nextStates = nextStates.concat(state.match(ch));
	    }

	    return nextStates;
	  }

	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };

	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });

	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);

	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};

	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }

	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }

	    return result;
	  }

	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;

	      currentState = currentState.put(ch);
	    });

	    return currentState;
	  }

	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }

	  // The main interface

	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };

	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;

	      var isEmpty = true;

	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];

	        var segments = parse(route.path, names, specificity);

	        allSegments = allSegments.concat(segments);

	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];

	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }

	          isEmpty = false;

	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";

	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }

	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }

	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }

	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;

	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },

	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }

	      return result;
	    },

	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },

	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      var segments = route.segments;

	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];

	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }

	        output += "/";
	        output += segment.generate(params);
	      }

	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }

	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }

	      return output;
	    },

	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }

	      if (pairs.length === 0) {
	        return '';
	      }

	      return "?" + pairs.join("&");
	    },

	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },

	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;

	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }

	      path = tryDecode(path);
	      if (!path) return;

	      // DEBUG GROUP path

	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }

	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }

	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }

	      // END DEBUG GROUP

	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }

	      states = sortSolutions(solutions);

	      var state = solutions[0];

	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };

	  RouteRecognizer.prototype.map = map;

	  var genQuery = RouteRecognizer.prototype.generateQueryString;

	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */

	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */

	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }

	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */

	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }

	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */

	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }

	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */

	  var resolver = undefined;

	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }

	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */

	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};

	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }

	  var hashRE = /#.*$/;

	  var HTML5History = function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);

	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }

	    HTML5History.prototype.start = function start() {
	      var _this = this;

	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };

	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };

	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };

	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };

	    return HTML5History;
	  }();

	  var HashHistory = function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);

	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }

	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };

	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };

	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };

	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };

	    return HashHistory;
	  }();

	  var AbstractHistory = function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);

	      this.onChange = onChange;
	      this.currentPath = '/';
	    }

	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };

	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };

	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };

	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };

	    return AbstractHistory;
	  }();

	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */

	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }

	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }

	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }

	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }

	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */

	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }

	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');

	    view.depth = depth;
	    view.activated = false;

	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);

	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;

	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);

	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);

	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });

	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }

	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };

	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };

	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };

	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };

	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }

	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */

	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }

	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */

	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }

	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */

	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }

	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */

	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */

	  var RouteTransition = function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);

	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }

	    /**
	     * Abort current transition and return to previous location.
	     */

	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };

	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */

	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };

	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;

	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();

	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });

	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }

	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase

	            // Update router current route
	            transition.router._onTransitionValidated(transition);

	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });

	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };

	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };

	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */

	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;

	      var transition = this;
	      var nextCalled = false;

	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };

	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };

	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };

	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };

	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };

	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };

	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };

	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }

	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };

	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */

	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;

	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };

	    return RouteTransition;
	  }();

	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }

	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;

	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */

	  var Route = function Route(path, router) {
	    var _this = this;

	    babelHelpers.classCallCheck(this, Route);

	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };

	  function applyOverride(Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;

	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };

	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };

	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;

	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }

	  function View(Vue) {

	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);

	    // with some overrides
	    _.extend(viewDef, {

	      _isRouterView: true,

	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);

	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }

	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },

	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });

	    Vue.elementDirective('router-view', viewDef);
	  }

	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;

	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link(Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;

	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';

	    var activeId = 0;

	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;

	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });

	    Vue.directive('link', {
	      priority: onPriority - 2,

	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },

	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },

	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;

	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },

	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },

	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },

	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },

	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },

	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });

	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }

	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }

	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };

	  // late bind during install
	  var Vue = undefined;

	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */

	  var Router = function () {
	    function Router() {
	      var _this = this;

	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);

	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }

	      // Vue instances
	      this.app = null;
	      this._children = [];

	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();

	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];

	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;

	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;

	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;

	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });

	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }

	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */

	    // API ===================================================

	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */

	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };

	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */

	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };

	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */

	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };

	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */

	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };

	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */

	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }

	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }

	      this.history.start();
	    };

	    /**
	     * Stop listening to route changes.
	     */

	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };

	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */

	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && (typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };

	    // Internal methods ======================================

	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */

	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };

	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */

	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };

	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */

	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };

	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */

	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };

	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */

	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;

	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };

	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */

	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };

	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;

	      if (this._checkGuard(path)) {
	        return;
	      }

	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;

	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }

	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);

	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;

	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }

	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };

	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }

	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }

	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };

	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */

	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };

	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };

	    return Router;
	  }();

	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }

	  /* Installation */

	  Router.installed = false;

	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */

	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };

	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }

	  return Router;
	});

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;}; /*!
	 * jQuery JavaScript Library v2.2.3
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-04-05T19:26Z
	 */(function(global,factory){if(( false?"undefined":_typeof(module))==="object"&&_typeof(module.exports)==="object"){ // For CommonJS and CommonJS-like environments where a proper `window`
	// is present, execute the factory and get jQuery.
	// For environments that do not have a `window` with a `document`
	// (such as Node.js), expose a factory as module.exports.
	// This accentuates the need for the creation of a real `window`.
	// e.g. var jQuery = require("jquery")(window);
	// See ticket #14549 for more info.
	module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else {factory(global);} // Pass this if window is not defined yet
	})(typeof window!=="undefined"?window:undefined,function(window,noGlobal){ // Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr=[];var document=window.document;var _slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};var version="2.2.3", // Define a local copy of jQuery
	jQuery=function jQuery(selector,context){ // The jQuery object is actually just the init constructor 'enhanced'
	// Need init if jQuery is called (just allow error to be thrown if not included)
	return new jQuery.fn.init(selector,context);}, // Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, // Matches dashed string for camelizing
	rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi, // Used by jQuery.camelCase as callback to replace()
	fcamelCase=function fcamelCase(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={ // The current version of jQuery being used
	jquery:version,constructor:jQuery, // Start with an empty selector
	selector:"", // The default length of a jQuery object is 0
	length:0,toArray:function toArray(){return _slice.call(this);}, // Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get:function get(num){return num!=null? // Return just the one element from the set
	num<0?this[num+this.length]:this[num]: // Return all the elements in a clean array
	_slice.call(this);}, // Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack:function pushStack(elems){ // Build a new jQuery matched element set
	var ret=jQuery.merge(this.constructor(),elems); // Add the old object onto the stack (as a reference)
	ret.prevObject=this;ret.context=this.context; // Return the newly-formed element set
	return ret;}, // Execute a callback for every element in the matched set.
	each:function each(callback){return jQuery.each(this,callback);},map:function map(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function slice(){return this.pushStack(_slice.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function end(){return this.prevObject||this.constructor();}, // For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false; // Handle a deep copy situation
	if(typeof target==="boolean"){deep=target; // Skip the boolean and the target
	target=arguments[i]||{};i++;} // Handle case when target is a string or something (possible in deep copy)
	if((typeof target==="undefined"?"undefined":_typeof(target))!=="object"&&!jQuery.isFunction(target)){target={};} // Extend jQuery itself if only one argument is passed
	if(i===length){target=this;i--;}for(;i<length;i++){ // Only deal with non-null/undefined values
	if((options=arguments[i])!=null){ // Extend the base object
	for(name in options){src=target[name];copy=options[name]; // Prevent never-ending loop
	if(target===copy){continue;} // Recurse if we're merging plain objects or arrays
	if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else {clone=src&&jQuery.isPlainObject(src)?src:{};} // Never move original objects, clone them
	target[name]=jQuery.extend(deep,clone,copy); // Don't bring in undefined values
	}else if(copy!==undefined){target[name]=copy;}}}} // Return the modified object
	return target;};jQuery.extend({ // Unique for each copy of jQuery on the page
	expando:"jQuery"+(version+Math.random()).replace(/\D/g,""), // Assume jQuery is ready without the ready module
	isReady:true,error:function error(msg){throw new Error(msg);},noop:function noop(){},isFunction:function isFunction(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray,isWindow:function isWindow(obj){return obj!=null&&obj===obj.window;},isNumeric:function isNumeric(obj){ // parseFloat NaNs numeric-cast false positives (null|true|false|"")
	// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	// subtraction forces infinities to NaN
	// adding 1 corrects loss of precision from parseFloat (#15100)
	var realStringObj=obj&&obj.toString();return !jQuery.isArray(obj)&&realStringObj-parseFloat(realStringObj)+1>=0;},isPlainObject:function isPlainObject(obj){var key; // Not plain objects:
	// - Any object or value whose internal [[Class]] property is not "[object Object]"
	// - DOM nodes
	// - window
	if(jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;} // Not own constructor property must be Object
	if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype||{},"isPrototypeOf")){return false;} // Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own
	for(key in obj){}return key===undefined||hasOwn.call(obj,key);},isEmptyObject:function isEmptyObject(obj){var name;for(name in obj){return false;}return true;},type:function type(obj){if(obj==null){return obj+"";} // Support: Android<4.0, iOS<6 (functionish RegExp)
	return (typeof obj==="undefined"?"undefined":_typeof(obj))==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj==="undefined"?"undefined":_typeof(obj);}, // Evaluates a script in a global context
	globalEval:function globalEval(code){var script,indirect=eval;code=jQuery.trim(code);if(code){ // If the code includes a valid, prologue position
	// strict mode pragma, execute code by injecting a
	// script tag into the document.
	if(code.indexOf("use strict")===1){script=document.createElement("script");script.text=code;document.head.appendChild(script).parentNode.removeChild(script);}else { // Otherwise, avoid the DOM node creation, insertion
	// and removal by using an indirect global eval
	indirect(code);}}}, // Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase:function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function each(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else {for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}return obj;}, // Support: Android<4.1
	trim:function trim(text){return text==null?"":(text+"").replace(rtrim,"");}, // results is for internal usage only
	makeArray:function makeArray(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else {push.call(ret,arr);}}return ret;},inArray:function inArray(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},merge:function merge(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}first.length=i;return first;},grep:function grep(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert; // Go through the array, only saving the items
	// that pass the validator function
	for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}return matches;}, // arg is for internal usage only
	map:function map(elems,callback,arg){var length,value,i=0,ret=[]; // Go through the array, translating each of the items to their new values
	if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}} // Go through every key on the object,
	}else {for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}} // Flatten any nested arrays
	return concat.apply([],ret);}, // A global GUID counter for objects
	guid:1, // Bind a function to a context, optionally partially applying any
	// arguments.
	proxy:function proxy(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;} // Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if(!jQuery.isFunction(fn)){return undefined;} // Simulated bind
	args=_slice.call(arguments,2);proxy=function proxy(){return fn.apply(context||this,args.concat(_slice.call(arguments)));}; // Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:Date.now, // jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support:support}); // JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];} /* jshint ignore: end */ // Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){ // Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length=!!obj&&"length" in obj&&obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}return type==="array"||length===0||typeof length==="number"&&length>0&&length-1 in obj;}var Sizzle= /*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate, // Local document vars
	setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains, // Instance-specific data
	expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function sortOrder(a,b){if(a===b){hasDuplicate=true;}return 0;}, // General-purpose constants
	MAX_NEGATIVE=1<<31, // Instance methods
	hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice, // Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf=function indexOf(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}return -1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace="[\\x20\\t\\r\\n\\f]", // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+ // Operator (capture 2)
	"*([*^$|!~]?=)"+whitespace+ // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
	"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+ // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
	// 1. quoted (capture 3; capture 4 or capture 5)
	"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+ // 2. simple (capture 6)
	"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+ // 3. anything else (capture 2)
	".*"+")\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"), // For use in libraries implementing .is()
	// We use this for POS matching in `select`
	"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/, // Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g, // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function funescape(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000; // NaN means non-codepoint
	// Support: Firefox<24
	// Workaround erroneous numeric interpretation of +"0x"
	return high!==high||escapedWhitespace?escaped:high<0? // BMP codepoint
	String.fromCharCode(high+0x10000): // Supplemental Plane codepoint (surrogate pair)
	String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);}, // Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler=function unloadHandler(){setDocument();}; // Optimize for push.apply( _, NodeList )
	try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes); // Support: Android<4.0
	// Detect silently failing push.apply
	arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length? // Leverage slice if possible
	function(target,els){push_native.apply(target,slice.call(els));}: // Support: IE<9
	// Otherwise append directly
	function(target,els){var j=target.length,i=0; // Can't trust NodeList.length
	while(target[j++]=els[i++]){}target.length=j-1;}};}function Sizzle(selector,context,results,seed){var m,i,elem,nid,nidselect,match,groups,newSelector,newContext=context&&context.ownerDocument, // nodeType defaults to 9, since context defaults to document
	nodeType=context?context.nodeType:9;results=results||[]; // Return early from calls with invalid selector or context
	if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;} // Try to shortcut find operations (as opposed to filters) in HTML documents
	if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}context=context||document;if(documentIsHTML){ // If the selector is sufficiently simple, try using a "get*By*" DOM method
	// (excepting DocumentFragment context, where the methods don't exist)
	if(nodeType!==11&&(match=rquickExpr.exec(selector))){ // ID selector
	if(m=match[1]){ // Document context
	if(nodeType===9){if(elem=context.getElementById(m)){ // Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(elem.id===m){results.push(elem);return results;}}else {return results;} // Element context
	}else { // Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}} // Type selector
	}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results; // Class selector
	}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}} // Take advantage of querySelectorAll
	if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector; // qSA looks outside Element context, which is not what we want
	// Thanks to Andrew Dupont for this workaround technique
	// Support: IE <=8
	// Exclude object elements
	}else if(context.nodeName.toLowerCase()!=="object"){ // Capture the context ID, setting it first if necessary
	if(nid=context.getAttribute("id")){nid=nid.replace(rescape,"\\$&");}else {context.setAttribute("id",nid=expando);} // Prefix every selector in the list
	groups=tokenize(selector);i=groups.length;nidselect=ridentifier.test(nid)?"#"+nid:"[id='"+nid+"']";while(i--){groups[i]=nidselect+" "+toSelector(groups[i]);}newSelector=groups.join(","); // Expand context for sibling selectors
	newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally {if(nid===expando){context.removeAttribute("id");}}}}}} // All others
	return select(selector.replace(rtrim,"$1"),context,results,seed);} /**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */function createCache(){var keys=[];function cache(key,value){ // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
	if(keys.push(key+" ")>Expr.cacheLength){ // Only keep the most recent entries
	delete cache[keys.shift()];}return cache[key+" "]=value;}return cache;} /**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */function markFunction(fn){fn[expando]=true;return fn;} /**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */function assert(fn){var div=document.createElement("div");try{return !!fn(div);}catch(e){return false;}finally { // Remove from its parent by default
	if(div.parentNode){div.parentNode.removeChild(div);} // release memory in IE
	div=null;}} /**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}} /**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-(~a.sourceIndex||MAX_NEGATIVE); // Use IE sourceIndex if available on both nodes
	if(diff){return diff;} // Check if b follows a
	if(cur){while(cur=cur.nextSibling){if(cur===b){return -1;}}}return a?1:-1;} /**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};} /**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return (name==="input"||name==="button")&&elem.type===type;};} /**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length; // Match elements found at the specified indexes
	while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j]);}}});});} /**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;} // Expose support vars for convenience
	support=Sizzle.support={}; /**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */isXML=Sizzle.isXML=function(elem){ // documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;}; /**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */setDocument=Sizzle.setDocument=function(node){var hasCompare,parent,doc=node?node.ownerDocument||node:preferredDoc; // Return early if doc is invalid or already selected
	if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;} // Update global variables
	document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document); // Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if((parent=document.defaultView)&&parent.top!==parent){ // Support: IE 11
	if(parent.addEventListener){parent.addEventListener("unload",unloadHandler,false); // Support: IE 9 - 10 only
	}else if(parent.attachEvent){parent.attachEvent("onunload",unloadHandler);}} /* Attributes
		---------------------------------------------------------------------- */ // Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes=assert(function(div){div.className="i";return !div.getAttribute("className");}); /* getElement(s)By*
		---------------------------------------------------------------------- */ // Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName=assert(function(div){div.appendChild(document.createComment(""));return !div.getElementsByTagName("*").length;}); // Support: IE<9
	support.getElementsByClassName=rnative.test(document.getElementsByClassName); // Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById=assert(function(div){docElem.appendChild(div).id=expando;return !document.getElementsByName||!document.getElementsByName(expando).length;}); // ID find and filter
	if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var m=context.getElementById(id);return m?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else { // Support: IE6/7
	// getElementById is not reliable as a find shortcut
	delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};} // Tag
	Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
	}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0, // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
	results=context.getElementsByTagName(tag); // Filter out possible comments
	if(tag==="*"){while(elem=results[i++]){if(elem.nodeType===1){tmp.push(elem);}}return tmp;}return results;}; // Class
	Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}}; /* QSA/matchesSelector
		---------------------------------------------------------------------- */ // QSA and matchesSelector support
	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches=[]; // qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA=[];if(support.qsa=rnative.test(document.querySelectorAll)){ // Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert(function(div){ // Select is set to empty string on purpose
	// This is to test IE's treatment of not explicitly
	// setting a boolean content attribute,
	// since its presence should be enough
	// http://bugs.jquery.com/ticket/12359
	docElem.appendChild(div).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
	// Nothing should be selected when empty strings follow ^= or $= or *=
	// The test attribute must be unknown in Opera but "safe" for WinRT
	// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
	if(div.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");} // Support: IE8
	// Boolean attributes and "value" are not treated correctly
	if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");} // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
	if(!div.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");} // Webkit/Opera - :checked should return selected option elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	// IE8 throws error here and will not see later tests
	if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");} // Support: Safari 8+, iOS 8+
	// https://bugs.webkit.org/show_bug.cgi?id=136851
	// In-page `selector#id sibing-combinator selector` fails
	if(!div.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(div){ // Support: Windows 8 Native Apps
	// The type and name attributes are restricted during .innerHTML assignment
	var input=document.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("name","D"); // Support: IE8
	// Enforce case-sensitivity of name attribute
	if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");} // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
	// IE8 throws error here and will not see later tests
	if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");} // Opera 10-11 does not throw on post-comma invalid pseudos
	div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector=rnative.test(matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)){assert(function(div){ // Check to see if it's possible to do matchesSelector
	// on a disconnected node (IE 9)
	support.disconnectedMatch=matches.call(div,"div"); // This should fail with an exception
	// Gecko does not error, returns false instead
	matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|")); /* Contains
		---------------------------------------------------------------------- */hasCompare=rnative.test(docElem.compareDocumentPosition); // Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return true;}}}return false;}; /* Sorting
		---------------------------------------------------------------------- */ // Document order sorting
	sortOrder=hasCompare?function(a,b){ // Flag for duplicate removal
	if(a===b){hasDuplicate=true;return 0;} // Sort on method existence if only one input has compareDocumentPosition
	var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;} // Calculate position if both inputs belong to the same document
	compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b): // Otherwise we know they are disconnected
	1; // Disconnected nodes
	if(compare&1||!support.sortDetached&&b.compareDocumentPosition(a)===compare){ // Choose the first element that is related to our preferred document
	if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return -1;}if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;} // Maintain original order
	return sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;}return compare&4?-1:1;}:function(a,b){ // Exit early if the nodes are identical
	if(a===b){hasDuplicate=true;return 0;}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b]; // Parentless nodes are either documents or disconnected
	if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0; // If the nodes are siblings, we can do a quick check
	}else if(aup===bup){return siblingCheck(a,b);} // Otherwise we need full lists of their ancestors for comparison
	cur=a;while(cur=cur.parentNode){ap.unshift(cur);}cur=b;while(cur=cur.parentNode){bp.unshift(cur);} // Walk down the tree looking for a discrepancy
	while(ap[i]===bp[i]){i++;}return i? // Do a sibling check if the nodes have a common ancestor
	siblingCheck(ap[i],bp[i]): // Otherwise nodes in our document sort first
	ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){ // Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);} // Make sure that attribute selectors are quoted
	expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr); // IE 9's matchesSelector returns false on disconnected nodes
	if(ret||support.disconnectedMatch|| // As well, disconnected nodes are said to be in a document
	// fragment in IE 9
	elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){ // Set document vars if needed
	if((context.ownerDocument||context)!==document){setDocument(context);}return contains(context,elem);};Sizzle.attr=function(elem,name){ // Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()], // Don't get fooled by Object.prototype properties (jQuery #13807)
	val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);}; /**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0; // Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem=results[i++]){if(elem===results[i]){j=duplicates.push(i);}}while(j--){results.splice(duplicates[j],1);}} // Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput=null;return results;}; /**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){ // If no nodeType, this is expected to be an array
	while(node=elem[i++]){ // Do not traverse comment nodes
	ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){ // Use textContent for elements
	// innerText usage removed for consistency of new lines (jQuery #11153)
	if(typeof elem.textContent==="string"){return elem.textContent;}else { // Traverse its children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;} // Do not include comment or processing instruction nodes
	return ret;};Expr=Sizzle.selectors={ // Can be adjusted by the user
	cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function ATTR(match){match[1]=match[1].replace(runescape,funescape); // Move the given value to match[3] whether quoted or unquoted
	match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}return match.slice(0,4);},"CHILD":function CHILD(match){ /* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){ // nth-* requires argument
	if(!match[3]){Sizzle.error(match[0]);} // numeric x and y parameters for Expr.filter.CHILD
	// remember that false/true cast respectively to 0/1
	match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd"); // other types prohibit arguments
	}else if(match[3]){Sizzle.error(match[0]);}return match;},"PSEUDO":function PSEUDO(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;} // Accept quoted arguments as-is
	if(match[3]){match[2]=match[4]||match[5]||""; // Strip excess characters from unquoted arguments
	}else if(unquoted&&rpseudo.test(unquoted)&&( // Get excess from tokenize (recursively)
	excess=tokenize(unquoted,true))&&( // advance to the next closing parenthesis
	excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){ // excess is a negative index
	match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);} // Return only captures needed by the pseudo filter method (type and argument)
	return match.slice(0,3);}},filter:{"TAG":function TAG(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function CLASS(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function ATTR(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}if(!operator){return true;}result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function CHILD(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0? // Shortcut for :nth-*(n)
	function(elem){return !!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){ // :(first|last|only)-(child|of-type)
	if(simple){while(dir){node=elem;while(node=node[dir]){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}} // Reverse direction for :only-* (if we haven't yet done so)
	start=dir=type==="only"&&!start&&"nextSibling";}return true;}start=[forward?parent.firstChild:parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`
	if(forward&&useCache){ // Seek `elem` from a previously-cached index
	// ...in a gzip-friendly way
	node=parent;outerCache=node[expando]||(node[expando]={}); // Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||( // Fallback to seeking `elem` from the start
	diff=nodeIndex=0)||start.pop()){ // When found, cache indexes on `parent` and break
	if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else { // Use previously-cached element index if available
	if(useCache){ // ...in a gzip-friendly way
	node=elem;outerCache=node[expando]||(node[expando]={}); // Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;} // xml :nth-child(...)
	// or :nth-last-child(...) or :nth(-last)?-of-type(...)
	if(diff===false){ // Use the same loop as above to seek `elem` from the start
	while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){ // Cache the index of each encountered element
	if(useCache){outerCache=node[expando]||(node[expando]={}); // Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}if(node===elem){break;}}}}} // Incorporate the offset, then check against cycle size
	diff-=last;return diff===first||diff%first===0&&diff/first>=0;}};},"PSEUDO":function PSEUDO(pseudo,argument){ // pseudo-class names are case-insensitive
	// http://www.w3.org/TR/selectors/#pseudo-classes
	// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
	// Remember that setFilters inherits from pseudos
	var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo); // The user may use createPseudo to indicate that
	// arguments are needed to create the filter function
	// just as Sizzle does
	if(fn[expando]){return fn(argument);} // But maintain support for old signatures
	if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{ // Potentially complex pseudos
	"not":markFunction(function(selector){ // Trim the selector passed to compile
	// to avoid treating leading and trailing
	// spaces as combinators
	var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length; // Match elements unmatched by `matcher`
	while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results); // Don't keep the element (issue #299)
	input[0]=null;return !results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return (elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}), // "Whether an element is represented by a :lang() selector
	// is based solely on the element's language value
	// being equal to the identifier C,
	// or beginning with the identifier C immediately followed by "-".
	// The matching of C against the element's language value is performed case-insensitively.
	// The identifier C does not have to be a valid language name."
	// http://www.w3.org/TR/selectors/#lang-pseudo
	"lang":markFunction(function(lang){ // lang value must be a valid identifier
	if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do {if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang")){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}), // Miscellaneous
	"target":function target(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function root(elem){return elem===docElem;},"focus":function focus(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);}, // Boolean properties
	"enabled":function enabled(elem){return elem.disabled===false;},"disabled":function disabled(elem){return elem.disabled===true;},"checked":function checked(elem){ // In CSS3, :checked should return both checked and selected elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	var nodeName=elem.nodeName.toLowerCase();return nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected;},"selected":function selected(elem){ // Accessing this property makes selected-by-default
	// options in Safari work properly
	if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected===true;}, // Contents
	"empty":function empty(elem){ // http://www.w3.org/TR/selectors/#empty-pseudo
	// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
	//   but not by others (comment: 8; processing instruction: 7; etc.)
	// nodeType < 6 works because attributes (2) do not appear as children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}return true;},"parent":function parent(elem){return !Expr.pseudos["empty"](elem);}, // Element/input types
	"header":function header(elem){return rheader.test(elem.nodeName);},"input":function input(elem){return rinputs.test(elem.nodeName);},"button":function button(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function text(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&( // Support: IE<8
	// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
	(attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");}, // Position-in-collection
	"first":createPositionalPseudo(function(){return [0];}),"last":createPositionalPseudo(function(matchIndexes,length){return [length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return [argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"]; // Add button/input type pseudos
	for(i in {radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}for(i in {submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);} // Easy API for creating new setFilters
	function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){ // Comma and first run
	if(!matched||(match=rcomma.exec(soFar))){if(match){ // Don't consume trailing commas as valid
	soFar=soFar.slice(match[0].length)||soFar;}groups.push(tokens=[]);}matched=false; // Combinators
	if(match=rcombinators.exec(soFar)){matched=match.shift();tokens.push({value:matched, // Cast descendant combinators to space
	type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);} // Filters
	for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}if(!matched){break;}} // Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly?soFar.length:soFar?Sizzle.error(selector): // Cache the tokens
	tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first? // Check against closest ancestor/preceding element
	function(elem,context,xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}: // Check against all ancestor/preceding elements
	function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
	if(xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else {while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={}); // Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if((oldCache=uniqueCache[dir])&&oldCache[0]===dirruns&&oldCache[1]===doneName){ // Assign to newCache so results back-propagate to previous elements
	return newCache[2]=oldCache[2];}else { // Reuse newcache so results back-propagate to previous elements
	uniqueCache[dir]=newCache; // A match means we're done; a fail means we have to keep checking
	if(newCache[2]=matcher(elem,context,xml)){return true;}}}}}};}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}return results;}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length, // Get initial elements from seed or context
	elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]), // Prefilter to get matcher input, preserving a map for seed-results synchronization
	matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
	postFinder||(seed?preFilter:preexisting||postFilter)? // ...intermediate processing is necessary
	[]: // ...otherwise use results directly
	results:matcherIn; // Find primary matches
	if(matcher){matcher(matcherIn,matcherOut,context,xml);} // Apply postFilter
	if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml); // Un-match failing elements by moving them back to matcherIn
	i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}if(seed){if(postFinder||preFilter){if(postFinder){ // Get the final matcherOut by condensing this intermediate into postFinder contexts
	temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){ // Restore matcherIn since elem is not yet a final match
	temp.push(matcherIn[i]=elem);}}postFinder(null,matcherOut=[],temp,xml);} // Move matched elements from seed to results to keep them synchronized
	i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}} // Add elements to results, through postFinder if defined
	}else {matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else {push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0, // The foundational matcher ensures that elements are reachable from top-level context(s)
	matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml)); // Avoid hanging onto element (issue #299)
	checkContext=null;return ret;}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else {matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches); // Return special upon seeing a positional matcher
	if(matcher[expando]){ // Find the next relative operator (if any) for proper handling
	j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
	tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function superMatcher(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext, // We must always have either seed elements or outermost context
	elems=seed||byElement&&Expr.find["TAG"]("*",outermost), // Use integer dirruns iff this is the outermost matcher
	dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||0.1,len=elems.length;if(outermost){outermostContext=context===document||context||outermost;} // Add elements passing elementMatchers directly to results
	// Support: IE<9, Safari
	// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
	for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}while(matcher=elementMatchers[j++]){if(matcher(elem,context||document,xml)){results.push(elem);break;}}if(outermost){dirruns=dirrunsUnique;}} // Track unmatched elements for set filters
	if(bySet){ // They will have gone through all possible matchers
	if(elem=!matcher&&elem){matchedCount--;} // Lengthen the array for every element, matched or not
	if(seed){unmatched.push(elem);}}} // `i` is now the count of elements visited above, and adding it to `matchedCount`
	// makes the latter nonnegative.
	matchedCount+=i; // Apply set filters to unmatched elements
	// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
	// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
	// no element matchers and no seed.
	// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
	// case, which will result in a "00" `matchedCount` that differs from `i` but is also
	// numerically zero.
	if(bySet&&i!==matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,setMatched,context,xml);}if(seed){ // Reintegrate element matches to eliminate the need for sorting
	if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}} // Discard index placeholder values to get only actual matches
	setMatched=condense(setMatched);} // Add matches to results
	push.apply(results,setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting
	if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){Sizzle.uniqueSort(results);}} // Override manipulation of globals by nested matchers
	if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile=Sizzle.compile=function(selector,match /* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){ // Generate a function of recursive functions that can be used to check each element
	if(!match){match=tokenize(selector);}i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else {elementMatchers.push(cached);}} // Cache the compiled function
	cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers)); // Save selector and tokenization
	cached.selector=selector;}return cached;}; /**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize(selector=compiled.selector||selector);results=results||[]; // Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if(match.length===1){ // Reduce context if the leading compound selector is an ID
	tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results; // Precompiled matchers will still verify ancestry, so step up a level
	}else if(compiled){context=context.parentNode;}selector=selector.slice(tokens.shift().value.length);} // Fetch a seed set for right-to-left matching
	i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i]; // Abort if we hit a combinator
	if(Expr.relative[type=token.type]){break;}if(find=Expr.find[type]){ // Search, expanding context for leading sibling combinators
	if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context)){ // If seed is empty or no tokens remain, we can return early
	tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}break;}}}} // Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;}; // One-time assignments
	// Sort stability
	support.sortStable=expando.split("").sort(sortOrder).join("")===expando; // Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates=!!hasDuplicate; // Initialize against the default document
	setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached=assert(function(div1){ // Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition(document.createElement("div"))&1;}); // Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});} // Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});} // Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if(!assert(function(div){return div.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}return Sizzle;}(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;var dir=function dir(elem,_dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[_dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}matched.push(elem);}}return matched;};var _siblings=function _siblings(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}return matched;};var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;var risSimple=/^.[^:#\[\.,]*$/; // Implement the identical functionality for filter and not
	function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){ /* jshint -W018 */return !!qualifier.call(elem,i,elem)!==not;});}if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem===qualifier!==not;});}if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}qualifier=jQuery.filter(qualifier,elements);}return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not;});}jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function find(selector){var i,len=this.length,ret=[],self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);} // Needed because $( selector, context ) becomes $( context ).find( selector )
	ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+selector:selector;return ret;},filter:function filter(selector){return this.pushStack(winnow(this,selector||[],false));},not:function not(selector){return this.pushStack(winnow(this,selector||[],true));},is:function is(selector){return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
	// so $("p:first").is("p:last") won't return true for a doc with two "p".
	typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}}); // Initialize a jQuery object
	// A central reference to the root jQuery(document)
	var rootjQuery, // A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem; // HANDLE: $(""), $(null), $(undefined), $(false)
	if(!selector){return this;} // Method init() accepts an alternate rootjQuery
	// so migrate can support jQuery.sub (gh-2101)
	root=root||rootjQuery; // Handle HTML strings
	if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){ // Assume that strings that start and end with <> are HTML and skip the regex check
	match=[null,selector,null];}else {match=rquickExpr.exec(selector);} // Match html or make sure no context is specified for #id
	if(match&&(match[1]||!context)){ // HANDLE: $(html) -> $(array)
	if(match[1]){context=context instanceof jQuery?context[0]:context; // Option to run scripts is true for back-compat
	// Intentionally let the error be thrown if parseHTML is not present
	jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true)); // HANDLE: $(html, props)
	if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){ // Properties of context are called as methods if possible
	if(jQuery.isFunction(this[match])){this[match](context[match]); // ...and otherwise set as attributes
	}else {this.attr(match,context[match]);}}}return this; // HANDLE: $(#id)
	}else {elem=document.getElementById(match[2]); // Support: Blackberry 4.6
	// gEBID returns nodes no longer in the document (#6963)
	if(elem&&elem.parentNode){ // Inject the element directly into the jQuery object
	this.length=1;this[0]=elem;}this.context=document;this.selector=selector;return this;} // HANDLE: $(expr, $(...))
	}else if(!context||context.jquery){return (context||root).find(selector); // HANDLE: $(expr, context)
	// (which is just equivalent to: $(context).find(expr)
	}else {return this.constructor(context).find(selector);} // HANDLE: $(DOMElement)
	}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this; // HANDLE: $(function)
	// Shortcut for document ready
	}else if(jQuery.isFunction(selector)){return root.ready!==undefined?root.ready(selector): // Execute immediately if ready is not present
	selector(jQuery);}if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}return jQuery.makeArray(selector,this);}; // Give the init function the jQuery prototype for later instantiation
	init.prototype=jQuery.fn; // Initialize central reference
	rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/, // Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function has(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function closest(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){ // Always skip document fragments
	if(cur.nodeType<11&&(pos?pos.index(cur)>-1: // Don't pass non-elements to Sizzle
	cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);}, // Determine the position of an element within the set
	index:function index(elem){ // No argument, return index in parent
	if(!elem){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1;} // Index in selector
	if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);} // Locate the position of the desired element
	return indexOf.call(this, // If it receives a jQuery object, the first element is used
	elem.jquery?elem[0]:elem);},add:function add(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function addBack(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur;}jQuery.each({parent:function parent(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function parents(elem){return dir(elem,"parentNode");},parentsUntil:function parentsUntil(elem,i,until){return dir(elem,"parentNode",until);},next:function next(elem){return sibling(elem,"nextSibling");},prev:function prev(elem){return sibling(elem,"previousSibling");},nextAll:function nextAll(elem){return dir(elem,"nextSibling");},prevAll:function prevAll(elem){return dir(elem,"previousSibling");},nextUntil:function nextUntil(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function prevUntil(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function siblings(elem){return _siblings((elem.parentNode||{}).firstChild,elem);},children:function children(elem){return _siblings(elem.firstChild);},contents:function contents(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}if(this.length>1){ // Remove duplicates
	if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);} // Reverse order for parents* and prev-derivatives
	if(rparentsprev.test(name)){matched.reverse();}}return this.pushStack(matched);};});var rnotwhite=/\S+/g; // Convert String-formatted options into Object-formatted ones
	function createOptions(options){var object={};jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true;});return object;} /*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */jQuery.Callbacks=function(options){ // Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var  // Flag to know if list is currently firing
	firing, // Last fire value for non-forgettable lists
	memory, // Flag to know if list was already fired
	_fired, // Flag to prevent firing
	_locked, // Actual callback list
	list=[], // Queue of execution data for repeatable lists
	queue=[], // Index of currently firing callback (modified by add/remove as needed)
	firingIndex=-1, // Fire callbacks
	fire=function fire(){ // Enforce single-firing
	_locked=options.once; // Execute callbacks for all pending executions,
	// respecting firingIndex overrides and runtime changes
	_fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){ // Run callback and check for early termination
	if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){ // Jump to end and forget the data so .add doesn't re-fire
	firingIndex=list.length;memory=false;}}} // Forget the data if we're done with it
	if(!options.memory){memory=false;}firing=false; // Clean up if we're done firing for good
	if(_locked){ // Keep an empty list if we have data for future add calls
	if(memory){list=[]; // Otherwise, this object is spent
	}else {list="";}}}, // Actual Callbacks object
	self={ // Add a callback or a collection of callbacks to the list
	add:function add(){if(list){ // If we have memory from a past run, we should fire after adding
	if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}(function add(args){jQuery.each(args,function(_,arg){if(jQuery.isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){ // Inspect recursively
	add(arg);}});})(arguments);if(memory&&!firing){fire();}}return this;}, // Remove a callback from the list
	remove:function remove(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1); // Handle firing indexes
	if(index<=firingIndex){firingIndex--;}}});return this;}, // Check if a given callback is in the list.
	// If no argument is given, return whether or not list has callbacks attached.
	has:function has(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;}, // Remove all callbacks from the list
	empty:function empty(){if(list){list=[];}return this;}, // Disable .fire and .add
	// Abort any current/pending executions
	// Clear all callbacks and values
	disable:function disable(){_locked=queue=[];list=memory="";return this;},disabled:function disabled(){return !list;}, // Disable .fire
	// Also disable .add unless we have memory (since it would have no effect)
	// Abort any pending executions
	lock:function lock(){_locked=queue=[];if(!memory){list=memory="";}return this;},locked:function locked(){return !!_locked;}, // Call all callbacks with the given context and arguments
	fireWith:function fireWith(context,args){if(!_locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}return this;}, // Call all the callbacks with the given arguments
	fire:function fire(){self.fireWith(this,arguments);return this;}, // To know if the callbacks have already been called at least once
	fired:function fired(){return !!_fired;}};return self;};jQuery.extend({Deferred:function Deferred(func){var tuples=[ // action, add listener, listener list, final state
	["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],_state="pending",_promise={state:function state(){return _state;},always:function always(){deferred.done(arguments).fail(arguments);return this;},then:function then() /* fnDone, fnFail, fnProgress */{var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i]; // deferred[ done | fail | progress ] for forwarding actions to newDefer
	deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else {newDefer[tuple[0]+"With"](this===_promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();}, // Get a promise for this deferred
	// If obj is provided, the promise aspect is added to the object
	promise:function promise(obj){return obj!=null?jQuery.extend(obj,_promise):_promise;}},deferred={}; // Keep pipe for back-compat
	_promise.pipe=_promise.then; // Add list-specific methods
	jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3]; // promise[ done | fail | progress ] = list.add
	_promise[tuple[1]]=list.add; // Handle state
	if(stateString){list.add(function(){ // state = [ resolved | rejected ]
	_state=stateString; // [ reject_list | resolve_list ].disable; progress_list.lock
	},tuples[i^1][2].disable,tuples[2][2].lock);} // deferred[ resolve | reject | notify ]
	deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?_promise:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;}); // Make the deferred a promise
	_promise.promise(deferred); // Call given func if any
	if(func){func.call(deferred,deferred);} // All done!
	return deferred;}, // Deferred helper
	when:function when(subordinate /* , ..., subordinateN */){var i=0,resolveValues=_slice.call(arguments),length=resolveValues.length, // the count of uncompleted subordinates
	remaining=length!==1||subordinate&&jQuery.isFunction(subordinate.promise)?length:0, // the master Deferred.
	// If resolveValues consist of only a single Deferred, just use that.
	deferred=remaining===1?subordinate:jQuery.Deferred(), // Update function for both resolve and progress values
	updateFunc=function updateFunc(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?_slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(! --remaining){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts; // Add listeners to Deferred subordinates; treat others as resolved
	if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().progress(updateFunc(i,progressContexts,progressValues)).done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject);}else {--remaining;}}} // If we're not waiting on anything, resolve the master
	if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}return deferred.promise();}}); // The deferred used on DOM ready
	var readyList;jQuery.fn.ready=function(fn){ // Add the callback
	jQuery.ready.promise().done(fn);return this;};jQuery.extend({ // Is the DOM ready to be used? Set to true once it occurs.
	isReady:false, // A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait:1, // Hold (or release) the ready event
	holdReady:function holdReady(hold){if(hold){jQuery.readyWait++;}else {jQuery.ready(true);}}, // Handle when the DOM is ready
	ready:function ready(wait){ // Abort if there are pending holds or we're already ready
	if(wait===true?--jQuery.readyWait:jQuery.isReady){return;} // Remember that the DOM is ready
	jQuery.isReady=true; // If a normal DOM Ready event fired, decrement, and wait if need be
	if(wait!==true&&--jQuery.readyWait>0){return;} // If there are functions bound, to execute
	readyList.resolveWith(document,[jQuery]); // Trigger any bound ready events
	if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");jQuery(document).off("ready");}}}); /**
	 * The ready event handler and self cleanup method
	 */function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred(); // Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE9-10 only
	// Older IE sometimes signals "interactive" too soon
	if(document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll){ // Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout(jQuery.ready);}else { // Use the handy event callback
	document.addEventListener("DOMContentLoaded",completed); // A fallback to window.onload, that will always work
	window.addEventListener("load",completed);}}return readyList.promise(obj);}; // Kick off the DOM ready check even if the user does not
	jQuery.ready.promise(); // Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access=function access(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null; // Sets many values
	if(jQuery.type(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);} // Sets one value
	}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}if(bulk){ // Bulk operations run against the entire set
	if(raw){fn.call(elems,value);fn=null; // ...except when executing function values
	}else {bulk=fn;fn=function fn(elem,key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}return chainable?elems: // Gets
	bulk?fn.call(elems):len?fn(elems[0],key):emptyGet;};var acceptData=function acceptData(owner){ // Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */return owner.nodeType===1||owner.nodeType===9||! +owner.nodeType;};function Data(){this.expando=jQuery.expando+Data.uid++;}Data.uid=1;Data.prototype={register:function register(owner,initial){var value=initial||{}; // If it is a node unlikely to be stringify-ed or looped over
	// use plain assignment
	if(owner.nodeType){owner[this.expando]=value; // Otherwise secure it in a non-enumerable, non-writable property
	// configurability must be true to allow the property to be
	// deleted with the delete operator
	}else {Object.defineProperty(owner,this.expando,{value:value,writable:true,configurable:true});}return owner[this.expando];},cache:function cache(owner){ // We can accept data for non-element nodes in modern browsers,
	// but we should not, see #8335.
	// Always return an empty object.
	if(!acceptData(owner)){return {};} // Check if the owner object already has a cache
	var value=owner[this.expando]; // If not, create one
	if(!value){value={}; // We can accept data for non-element nodes in modern browsers,
	// but we should not, see #8335.
	// Always return an empty object.
	if(acceptData(owner)){ // If it is a node unlikely to be stringify-ed or looped over
	// use plain assignment
	if(owner.nodeType){owner[this.expando]=value; // Otherwise secure it in a non-enumerable property
	// configurable must be true to allow the property to be
	// deleted when data is removed
	}else {Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}return value;},set:function set(owner,data,value){var prop,cache=this.cache(owner); // Handle: [ owner, key, value ] args
	if(typeof data==="string"){cache[data]=value; // Handle: [ owner, { properties } ] args
	}else { // Copy the properties one-by-one to the cache object
	for(prop in data){cache[prop]=data[prop];}}return cache;},get:function get(owner,key){return key===undefined?this.cache(owner):owner[this.expando]&&owner[this.expando][key];},access:function access(owner,key,value){var stored; // In cases where either:
	//
	//   1. No key was specified
	//   2. A string key was specified, but no value provided
	//
	// Take the "read" path and allow the get method to determine
	// which value to return, respectively either:
	//
	//   1. The entire cache object
	//   2. The data stored at the key
	//
	if(key===undefined||key&&typeof key==="string"&&value===undefined){stored=this.get(owner,key);return stored!==undefined?stored:this.get(owner,jQuery.camelCase(key));} // When the key is not a string, or both a key and value
	// are specified, set or extend (existing objects) with either:
	//
	//   1. An object of properties
	//   2. A key and value
	//
	this.set(owner,key,value); // Since the "set" path can have two possible entry points
	// return the expected data based on which path was taken[*]
	return value!==undefined?value:key;},remove:function remove(owner,key){var i,name,camel,cache=owner[this.expando];if(cache===undefined){return;}if(key===undefined){this.register(owner);}else { // Support array or space separated string of keys
	if(jQuery.isArray(key)){ // If "name" is an array of keys...
	// When data is initially created, via ("key", "val") signature,
	// keys will be converted to camelCase.
	// Since there is no way to tell _how_ a key was added, remove
	// both plain key and camelCase key. #12786
	// This will only penalize the array argument path.
	name=key.concat(key.map(jQuery.camelCase));}else {camel=jQuery.camelCase(key); // Try the string as a key before any manipulation
	if(key in cache){name=[key,camel];}else { // If a key with the spaces exists, use it.
	// Otherwise, create an array by matching non-whitespace
	name=camel;name=name in cache?[name]:name.match(rnotwhite)||[];}}i=name.length;while(i--){delete cache[name[i]];}} // Remove the expando if there's no more data
	if(key===undefined||jQuery.isEmptyObject(cache)){ // Support: Chrome <= 35-45+
	// Webkit & Blink performance suffers when deleting properties
	// from DOM nodes, so set to undefined instead
	// https://code.google.com/p/chromium/issues/detail?id=378607
	if(owner.nodeType){owner[this.expando]=undefined;}else {delete owner[this.expando];}}},hasData:function hasData(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data(); //	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function dataAttr(elem,key,data){var name; // If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null: // Only convert to a number if it doesn't change the string
	+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){} // Make sure we set the data so it isn't changed later
	dataUser.set(elem,key,data);}else {data=undefined;}}return data;}jQuery.extend({hasData:function hasData(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function data(elem,name,_data){return dataUser.access(elem,name,_data);},removeData:function removeData(elem,name){dataUser.remove(elem,name);}, // TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data:function _data(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function _removeData(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function data(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes; // Gets all values
	if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){ // Support: IE11+
	// The attrs elements can be null (#14894)
	if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}dataPriv.set(elem,"hasDataAttrs",true);}}return data;} // Sets multiple values
	if((typeof key==="undefined"?"undefined":_typeof(key))==="object"){return this.each(function(){dataUser.set(this,key);});}return access(this,function(value){var data,camelKey; // The calling jQuery object (element matches) is not empty
	// (and therefore has an element appears at this[ 0 ]) and the
	// `value` parameter was not undefined. An empty jQuery object
	// will result in `undefined` for elem = this[ 0 ] which will
	// throw an exception if an attempt to read a data cache is made.
	if(elem&&value===undefined){ // Attempt to get data from the cache
	// with the key as-is
	data=dataUser.get(elem,key)|| // Try to find dashed key if it exists (gh-2779)
	// This is for 2.2.x only
	dataUser.get(elem,key.replace(rmultiDash,"-$&").toLowerCase());if(data!==undefined){return data;}camelKey=jQuery.camelCase(key); // Attempt to get data from the cache
	// with the key camelized
	data=dataUser.get(elem,camelKey);if(data!==undefined){return data;} // Attempt to "discover" the data in
	// HTML5 custom data-* attrs
	data=dataAttr(elem,camelKey,undefined);if(data!==undefined){return data;} // We tried really hard, but the data doesn't exist.
	return;} // Set the data...
	camelKey=jQuery.camelCase(key);this.each(function(){ // First, attempt to store a copy or reference of any
	// data that might've been store with a camelCased key.
	var data=dataUser.get(this,camelKey); // For HTML5 data-* attribute interop, we have to
	// store property names with dashes in a camelCase form.
	// This might not apply to all properties...*
	dataUser.set(this,camelKey,value); // *... In the case of properties that might _actually_
	// have dashes, we need to also store a copy of that
	// unchanged property.
	if(key.indexOf("-")>-1&&data!==undefined){dataUser.set(this,key,value);}});},null,value,arguments.length>1,null,true);},removeData:function removeData(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function queue(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type); // Speed up dequeue by getting out quickly if this is just a lookup
	if(data){if(!queue||jQuery.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else {queue.push(data);}}return queue||[];}},dequeue:function dequeue(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function next(){jQuery.dequeue(elem,type);}; // If the fx queue is dequeued, always remove the progress sentinel
	if(fn==="inprogress"){fn=queue.shift();startLength--;}if(fn){ // Add a progress sentinel to prevent the fx queue from being
	// automatically dequeued
	if(type==="fx"){queue.unshift("inprogress");} // Clear up the last queue stop function
	delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength&&hooks){hooks.empty.fire();}}, // Not public - generate a queueHooks object, or return the current one
	_queueHooks:function _queueHooks(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function queue(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}if(arguments.length<setter){return jQuery.queue(this[0],type);}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data); // Ensure a hooks for this queue
	jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function dequeue(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function clearQueue(type){return this.queue(type||"fx",[]);}, // Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise:function promise(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function resolve(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHidden=function isHidden(elem,el){ // isHidden might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale=1,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"), // Starting value computation is required for potential unit mismatches
	initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){ // Trust units reported by jQuery.css
	unit=unit||initialInUnit[3]; // Make sure we update the tween properties later on
	valueParts=valueParts||[]; // Iteratively approximate from a nonzero starting point
	initialInUnit=+initial||1;do { // If previous iteration zeroed out, double until we get *something*.
	// Use string for doubling so we don't accidentally see scale as unchanged below
	scale=scale||".5"; // Adjust and apply
	initialInUnit=initialInUnit/scale;jQuery.style(elem,prop,initialInUnit+unit); // Update scale, tolerating zero or NaN from tween.cur()
	// Break the loop if scale is unchanged or perfect, or if we've just had enough.
	}while(scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations);}if(valueParts){initialInUnit=+initialInUnit||+initial||0; // Apply relative offset (+=/-=) if specified
	adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}return adjusted;}var rcheckableType=/^(?:checkbox|radio)$/i;var rtagName=/<([\w:-]+)/;var rscriptType=/^$|\/(?:java|ecma)script/i; // We have to close these tags to support XHTML (#13200)
	var wrapMap={ // Support: IE9
	option:[1,"<select multiple='multiple'>","</select>"], // XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}; // Support: IE9
	wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){ // Support: IE9-11+
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret=typeof context.getElementsByTagName!=="undefined"?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!=="undefined"?context.querySelectorAll(tag||"*"):[];return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],ret):ret;} // Mark scripts as having already been evaluated
	function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){ // Add nodes directly
	if(jQuery.type(elem)==="object"){ // Support: Android<4.1, PhantomJS<2
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,elem.nodeType?[elem]:elem); // Convert non-html into a text node
	}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
	}else {tmp=tmp||fragment.appendChild(context.createElement("div")); // Deserialize a standard representation
	tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2]; // Descend through wrappers to the right content
	j=wrap[0];while(j--){tmp=tmp.lastChild;} // Support: Android<4.1, PhantomJS<2
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,tmp.childNodes); // Remember the top-level container
	tmp=fragment.firstChild; // Ensure the created nodes are orphaned (#12392)
	tmp.textContent="";}}} // Remove wrapper from fragment
	fragment.textContent="";i=0;while(elem=nodes[i++]){ // Skip elements already in the context collection (trac-4087)
	if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}continue;}contains=jQuery.contains(elem.ownerDocument,elem); // Append to fragment
	tmp=getAll(fragment.appendChild(elem),"script"); // Preserve script evaluation history
	if(contains){setGlobalEval(tmp);} // Capture executables
	if(scripts){j=0;while(elem=tmp[j++]){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}return fragment;}(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input"); // Support: Android 4.0-4.3, Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input); // Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}function returnFalse(){return false;} // Support: IE9
	// See #13393 for more info
	function safeActiveElement(){try{return document.activeElement;}catch(err){}}function _on(elem,types,selector,data,fn,one){var origFn,type; // Types can be a map of types/handlers
	if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){ // ( types-Object, selector, data )
	if(typeof selector!=="string"){ // ( types-Object, data )
	data=data||selector;selector=undefined;}for(type in types){_on(elem,type,selector,data,types[type],one);}return elem;}if(data==null&&fn==null){ // ( types, fn )
	fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){ // ( types, selector, fn )
	fn=data;data=undefined;}else { // ( types, data, fn )
	fn=data;data=selector;selector=undefined;}}if(fn===false){fn=returnFalse;}else if(!fn){return elem;}if(one===1){origFn=fn;fn=function fn(event){ // Can use an empty set, since event contains the info
	jQuery().off(event);return origFn.apply(this,arguments);}; // Use same guid so caller can remove using origFn
	fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});} /*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */jQuery.event={global:{},add:function add(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem); // Don't attach events to noData or text/comment nodes (but allow plain objects)
	if(!elemData){return;} // Caller can pass in an object of custom data in lieu of the handler
	if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;} // Make sure that the handler has a unique ID, used to find/remove it later
	if(!handler.guid){handler.guid=jQuery.guid++;} // Init the element's event structure and main handler, if this is the first
	if(!(events=elemData.events)){events=elemData.events={};}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){ // Discard the second event of a jQuery.event.trigger() and
	// when an event is called after a page has unloaded
	return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};} // Handle multiple events separated by a space
	types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers
	if(!type){continue;} // If event changes its type, use the special event handlers for the changed type
	special=jQuery.event.special[type]||{}; // If selector defined, determine special event api type, otherwise given type
	type=(selector?special.delegateType:special.bindType)||type; // Update special based on newly reset type
	special=jQuery.event.special[type]||{}; // handleObj is passed to all event handlers
	handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn); // Init the event handler queue if we're the first
	if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0; // Only use addEventListener if the special events handler returns false
	if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}} // Add to the element's handler list, delegates in front
	if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else {handlers.push(handleObj);} // Keep track of which events have ever been used, for event optimization
	jQuery.event.global[type]=true;}}, // Detach an event or set of events from an element
	remove:function remove(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;} // Once for each type.namespace in types; type may be omitted
	types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element
	if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}continue;}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"); // Remove matching events
	origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}} // Remove generic event handler if we removed something and no more handlers exist
	// (avoids potential for endless recursion during removal of special event handlers)
	if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}} // Remove data and the expando if it's no longer used
	if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function dispatch(event){ // Make a writable jQuery.Event from the native event object
	event=jQuery.event.fix(event);var i,j,ret,matched,handleObj,handlerQueue=[],args=_slice.call(arguments),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{}; // Use the fix-ed jQuery.Event rather than the (read-only) native event
	args[0]=event;event.delegateTarget=this; // Call the preDispatch hook for the mapped type, and let it bail if desired
	if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;} // Determine handlers
	handlerQueue=jQuery.event.handlers.call(this,event,handlers); // Run delegates first; they may want to stop propagation beneath us
	i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){ // Triggered event must either 1) have no namespace, or 2) have namespace(s)
	// a subset or equal to those in the bound event (both can have no namespace).
	if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}} // Call the postDispatch hook for the mapped type
	if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function handlers(event,_handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=_handlers.delegateCount,cur=event.target; // Support (at least): Chrome, IE9
	// Find delegate handlers
	// Black-hole SVG <use> instance trees (#13180)
	//
	// Support: Firefox<=42+
	// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
	if(delegateCount&&cur.nodeType&&(event.type!=="click"||isNaN(event.button)||event.button<1)){for(;cur!==this;cur=cur.parentNode||this){ // Don't check non-elements (#13208)
	// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
	if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=_handlers[i]; // Don't conflict with Object.prototype properties (#13203)
	sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}if(matches[sel]){matches.push(handleObj);}}if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}} // Add the remaining (directly-bound) handlers
	if(delegateCount<_handlers.length){handlerQueue.push({elem:this,handlers:_handlers.slice(delegateCount)});}return handlerQueue;}, // Includes some event props shared by KeyEvent and MouseEvent
	props:("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase "+"metaKey relatedTarget shiftKey target timeStamp view which").split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function filter(event,original){ // Add which for key events
	if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}return event;}},mouseHooks:{props:("button buttons clientX clientY offsetX offsetY pageX pageY "+"screenX screenY toElement").split(" "),filter:function filter(event,original){var eventDoc,doc,body,button=original.button; // Calculate pageX/Y if missing and clientX/Y available
	if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);} // Add which for click: 1 === left; 2 === middle; 3 === right
	// Note: button is not normalized, so don't use it
	if(!event.which&&button!==undefined){event.which=button&1?1:button&2?3:button&4?2:0;}return event;}},fix:function fix(event){if(event[jQuery.expando]){return event;} // Create a writable copy of the event object and normalize some properties
	var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop];} // Support: Cordova 2.5 (WebKit) (#13255)
	// All events should have a target; Cordova deviceready doesn't
	if(!event.target){event.target=document;} // Support: Safari 6.0+, Chrome<28
	// Target should not be a text node (#504, #13143)
	if(event.target.nodeType===3){event.target=event.target.parentNode;}return fixHook.filter?fixHook.filter(event,originalEvent):event;},special:{load:{ // Prevent triggered image.load events from bubbling to window.load
	noBubble:true},focus:{ // Fire native event if possible so blur/focus sequence is correct
	trigger:function trigger(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function trigger(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{ // For checkbox, fire native event so checked state will be right
	trigger:function trigger(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();return false;}}, // For cross-browser consistency, don't fire native .click() on links
	_default:function _default(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function postDispatch(event){ // Support: Firefox 20+
	// Firefox doesn't alert if the returnValue field is not set.
	if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};jQuery.removeEvent=function(elem,type,handle){ // This "if" is needed for plain objects
	if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){ // Allow instantiation without the 'new' keyword
	if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);} // Event object
	if(src&&src.type){this.originalEvent=src;this.type=src.type; // Events bubbling up the document may have been marked as prevented
	// by a handler lower down the tree; reflect the correct value.
	this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&& // Support: Android<4.0
	src.returnValue===false?returnTrue:returnFalse; // Event type
	}else {this.type=src;} // Put explicitly provided properties onto the event object
	if(props){jQuery.extend(this,props);} // Create a timestamp if incoming event doesn't have one
	this.timeStamp=src&&src.timeStamp||jQuery.now(); // Mark it as fixed
	this[jQuery.expando]=true;}; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e){e.preventDefault();}},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e){e.stopPropagation();}},stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e){e.stopImmediatePropagation();}this.stopPropagation();}}; // Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function handle(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
	// NB: No relatedTarget if the mouse left/entered the browser window
	if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}return ret;}};});jQuery.fn.extend({on:function on(types,selector,data,fn){return _on(this,types,selector,data,fn);},one:function one(types,selector,data,fn){return _on(this,types,selector,data,fn,1);},off:function off(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){ // ( event )  dispatched jQuery.Event
	handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){ // ( types-object [, selector] )
	for(type in types){this.off(type,selector,types[type]);}return this;}if(selector===false||typeof selector==="function"){ // ( types [, fn] )
	fn=selector;selector=undefined;}if(fn===false){fn=returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, // Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml=/<script|<style|<link/i, // checked="checked" or checked
	rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Manipulating tables requires a tbody
	function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;} // Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else {elem.removeAttribute("type");}return elem;}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;} // 1. Copy private data: events, handlers, etc.
	if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}} // 2. Copy user data
	if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}} // Fix IE bugs, see support tests
	function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.
	if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked; // Fails to return the selected option to the default selected state when cloning options
	}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}function domManip(collection,args,callback,ignored){ // Flatten any nested arrays
	args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit
	if(isFunction||l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value)){return collection.each(function(index){var self=collection.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}domManip(self,args,callback,ignored);});}if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;} // Require either new content or an interest in ignored elements to invoke the callback
	if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length; // Use the original fragment for the last item
	// instead of the first because it can end up
	// being emptied incorrectly in certain situations (#8070).
	for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true); // Keep references to cloned scripts for later restoration
	if(hasScripts){ // Support: Android<4.1, PhantomJS<2
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(scripts,getAll(node,"script"));}}callback.call(collection[i],node,i);}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument; // Reenable scripts
	jQuery.map(scripts,restoreScript); // Evaluate executable scripts on first document insertion
	for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){ // Optional AJAX dependency, but won't run scripts if not present
	if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else {jQuery.globalEval(node.textContent.replace(rcleanScript,""));}}}}}}return collection;}function _remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}node.parentNode.removeChild(node);}}return elem;}jQuery.extend({htmlPrefilter:function htmlPrefilter(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function clone(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem); // Fix IE cloning issues
	if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){ // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
	destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}} // Copy the events from the original to the clone
	if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else {cloneCopyEvent(elem,clone);}} // Preserve script evaluation history
	destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));} // Return the cloned set
	return clone;},cleanData:function cleanData(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if(data=elem[dataPriv.expando]){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type); // This is a shortcut to avoid jQuery.event.remove's overhead
	}else {jQuery.removeEvent(elem,type,data.handle);}}} // Support: Chrome <= 35-45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataPriv.expando]=undefined;}if(elem[dataUser.expando]){ // Support: Chrome <= 35-45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({ // Keep domManip exposed until 3.0 (gh-2225)
	domManip:domManip,detach:function detach(selector){return _remove(this,selector,true);},remove:function remove(selector){return _remove(this,selector);},text:function text(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function append(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function prepend(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function before(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function after(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function empty(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){ // Prevent memory leaks
	jQuery.cleanData(getAll(elem,false)); // Remove any remaining nodes
	elem.textContent="";}}return this;},clone:function clone(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function html(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;} // See if we can take a shortcut and just use innerHTML
	if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{}; // Remove element nodes and prevent memory leaks
	if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}elem=0; // If using innerHTML throws an exception, use the fallback method
	}catch(e){}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function replaceWith(){var ignored=[]; // Make the changes, replacing each non-ignored context element with the new content
	return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}} // Force callback invocation
	},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems); // Support: QtWebKit
	// .get() because push.apply(_, arraylike) throws
	push.apply(ret,elems.get());}return this.pushStack(ret);};});var iframe,elemdisplay={ // Support: Firefox
	// We have to pre-define these values for FF (#10227)
	HTML:"block",BODY:"block"}; /**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */ // Called only from within defaultDisplay
	function actualDisplay(name,doc){var elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=jQuery.css(elem[0],"display"); // We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();return display;} /**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc); // If the simple way fails, read from inside an iframe
	if(display==="none"||!display){ // Use the already-created iframe if possible
	iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement); // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
	doc=iframe[0].contentDocument; // Support: IE
	doc.write();doc.close();display=actualDisplay(nodeName,doc);iframe.detach();} // Store the correct default display
	elemdisplay[nodeName]=display;}return display;}var rmargin=/^margin/;var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function getStyles(elem){ // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
	// IE throws on elements created in popups
	// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
	var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}return view.getComputedStyle(elem);};var swap=function swap(elem,options,callback,args){var ret,name,old={}; // Remember the old values, and insert the new ones
	for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}ret=callback.apply(elem,args||[]); // Revert the old values
	for(name in options){elem.style[name]=old[name];}return ret;};var documentElement=document.documentElement;(function(){var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div"); // Finish early in limited (non-browser) environments
	if(!div.style){return;} // Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+"padding:0;margin-top:1px;position:absolute";container.appendChild(div); // Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests(){div.style.cssText= // Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;"+"position:relative;display:block;"+"margin:auto;border:1px;padding:1px;"+"top:1%;width:50%";div.innerHTML="";documentElement.appendChild(container);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";reliableMarginLeftVal=divStyle.marginLeft==="2px";boxSizingReliableVal=divStyle.width==="4px"; // Support: Android 4.0 - 4.3 only
	// Some styles come back with percentage values, even though they shouldn't
	div.style.marginRight="50%";pixelMarginRightVal=divStyle.marginRight==="4px";documentElement.removeChild(container);}jQuery.extend(support,{pixelPosition:function pixelPosition(){ // This test is executed only once but we still do memoizing
	// since we can use the boxSizingReliable pre-computing.
	// No need to check if the test was already performed, though.
	computeStyleTests();return pixelPositionVal;},boxSizingReliable:function boxSizingReliable(){if(boxSizingReliableVal==null){computeStyleTests();}return boxSizingReliableVal;},pixelMarginRight:function pixelMarginRight(){ // Support: Android 4.0-4.3
	// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
	// since that compresses better and they're computed together anyway.
	if(boxSizingReliableVal==null){computeStyleTests();}return pixelMarginRightVal;},reliableMarginLeft:function reliableMarginLeft(){ // Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
	if(boxSizingReliableVal==null){computeStyleTests();}return reliableMarginLeftVal;},reliableMarginRight:function reliableMarginRight(){ // Support: Android 2.3
	// Check if div with explicit width and no margin-right incorrectly
	// gets computed margin-right based on width of container. (#3333)
	// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	// This support function is only executed once so no memoizing is needed.
	var ret,marginDiv=div.appendChild(document.createElement("div")); // Reset CSS: box-sizing; display; margin; border; padding
	marginDiv.style.cssText=div.style.cssText= // Support: Android 2.3
	// Vendor-prefix box-sizing
	"-webkit-box-sizing:content-box;box-sizing:content-box;"+"display:block;margin:0;border:0;padding:0";marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";documentElement.appendChild(container);ret=!parseFloat(window.getComputedStyle(marginDiv).marginRight);documentElement.removeChild(container);div.removeChild(marginDiv);return ret;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);ret=computed?computed.getPropertyValue(name)||computed[name]:undefined; // Support: Opera 12.1x only
	// Fall back to style even without computed
	// computed is undefined for elems on document fragments
	if((ret===""||ret===undefined)&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);} // Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if(computed){ // A tribute to the "awesome hack by Dean Edwards"
	// Android Browser returns percentage for some values,
	// but width seems to be reliably pixels.
	// This is against the CSSOM draft spec:
	// http://dev.w3.org/csswg/cssom/#resolved-values
	if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){ // Remember the original values
	width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth; // Put in the new values to get a computed value out
	style.minWidth=style.maxWidth=style.width=ret;ret=computed.width; // Revert the changed values
	style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}return ret!==undefined? // Support: IE9-11+
	// IE returns zIndex value as an integer.
	ret+"":ret;}function addGetHookIf(conditionFn,hookFn){ // Define the hook, we'll check on the first run if it's really needed.
	return {get:function get(){if(conditionFn()){ // Hook not needed (or it's not possible to use it due
	// to missing dependency), remove it.
	delete this.get;return;} // Hook needed; redefine it so that the support test is not executed again.
	return (this.get=hookFn).apply(this,arguments);}};}var  // Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap=/^(none|table(?!-c[ea]).+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"],emptyStyle=document.createElement("div").style; // Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(name){ // Shortcut for names that are not vendor prefixed
	if(name in emptyStyle){return name;} // Check for vendor prefixed names
	var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}function setPositiveNumber(elem,value,subtract){ // Any relative (+/-) values have already been
	// normalized at this point
	var matches=rcssNum.exec(value);return matches? // Guard against undefined "subtract", e.g., when used as in cssHooks
	Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")? // If we already have the right measurement, avoid augmentation
	4: // Otherwise initialize for horizontal or vertical properties
	name==="width"?1:0,val=0;for(;i<4;i+=2){ // Both box models exclude margin, so add it if we want it
	if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}if(isBorderBox){ // border-box includes padding, so remove it if we want content
	if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);} // At this point, extra isn't border nor margin, so remove border
	if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else { // At this point, extra isn't content, so add padding
	val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles); // At this point, extra isn't content nor padding, so add border
	if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}return val;}function getWidthOrHeight(elem,name,extra){ // Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box"; // Support: IE11 only
	// In IE 11 fullscreen elements inside of an iframe have
	// 100x too small dimensions (gh-1764).
	if(document.msFullscreenElement&&window.top!==window){ // Support: IE11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if(elem.getClientRects().length){val=Math.round(elem.getBoundingClientRect()[name]*100);}} // Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if(val<=0||val==null){ // Fall back to computed then uncomputed css if necessary
	val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];} // Computed unit is not pixels. Stop here and return.
	if(rnumnonpx.test(val)){return val;} // Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]); // Normalize "", auto, and prepare for extra
	val=parseFloat(val)||0;} // Use the active box-sizing model to add/subtract irrelevant styles
	return val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles)+"px";}function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}values[index]=dataPriv.get(elem,"olddisplay");display=elem.style.display;if(show){ // Reset the inline display of this element to learn if it is
	// being hidden by cascaded rules or not
	if(!values[index]&&display==="none"){elem.style.display="";} // Set elements which have been overridden with display: none
	// in a stylesheet to whatever the default browser style is
	// for such an element
	if(elem.style.display===""&&isHidden(elem)){values[index]=dataPriv.access(elem,"olddisplay",defaultDisplay(elem.nodeName));}}else {hidden=isHidden(elem);if(display!=="none"||!hidden){dataPriv.set(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}} // Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}return elements;}jQuery.extend({ // Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks:{opacity:{get:function get(elem,computed){if(computed){ // We should always get a number back from opacity
	var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}}, // Don't automatically add "px" to these possibly-unitless properties
	cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true}, // Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps:{"float":"cssFloat"}, // Get and set the style property on a DOM Node
	style:function style(elem,name,value,extra){ // Don't set styles on text and comment nodes
	if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;} // Make sure that we're working with the right name
	var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName); // Gets hook for the prefixed version, then unprefixed version
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName]; // Check if we're setting a value
	if(value!==undefined){type=typeof value==="undefined"?"undefined":_typeof(value); // Convert "+=" or "-=" to relative numbers (#7345)
	if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret); // Fixes bug #9237
	type="number";} // Make sure that null and NaN values aren't set (#7116)
	if(value==null||value!==value){return;} // If a number was passed in, add the unit (except for certain CSS properties)
	if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");} // Support: IE9-11+
	// background-* props affect original clone's values
	if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";} // If a hook was provided, use that value, otherwise just set the specified value
	if(!hooks||!("set" in hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]=value;}}else { // If a hook was provided get the non-computed value from there
	if(hooks&&"get" in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;} // Otherwise just get the value from the style object
	return style[name];}},css:function css(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name); // Make sure that we're working with the right name
	name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName); // Try prefixed name followed by the unprefixed name
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there
	if(hooks&&"get" in hooks){val=hooks.get(elem,true,extra);} // Otherwise, if a way to get the computed value exists, use that
	if(val===undefined){val=curCSS(elem,name,styles);} // Convert "normal" to computed value
	if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];} // Make numeric if forced or a qualifier was provided and val looks numeric
	if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function get(elem,computed,extra){if(computed){ // Certain elements can have dimension info if we invisibly show them
	// but it must have a current display style that would benefit
	return rdisplayswap.test(jQuery.css(elem,"display"))&&elem.offsetWidth===0?swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function set(elem,value,extra){var matches,styles=extra&&getStyles(elem),subtract=extra&&augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles); // Convert to pixels if value adjustment is needed
	if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[name]=value;value=jQuery.css(elem,name);}return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return (parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}}); // Support: Android 2.3
	jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){return swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}}); // These hooks are used by animate to expand properties
	jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function expand(value){var i=0,expanded={}, // Assumes a single number if not a string
	parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function css(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}return map;}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function show(){return showHide(this,true);},hide:function hide(){return showHide(this);},toggle:function toggle(state){if(typeof state==="boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHidden(this)){jQuery(this).show();}else {jQuery(this).hide();}});}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function init(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function cur(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function run(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else {this.pos=eased=percent;}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks&&hooks.set){hooks.set(this);}else {Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function get(tween){var result; // Use a property on the element directly when it is not a DOM element,
	// or when there is no matching style property that exists.
	if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];} // Passing an empty string as a 3rd parameter to .css will automatically
	// attempt a parseFloat and fallback to a string if the parse fails.
	// Simple values such as "10px" are parsed to Float;
	// complex values such as "rotate(1rad)" are returned as-is.
	result=jQuery.css(tween.elem,tween.prop,""); // Empty strings, null, undefined and "auto" are converted to 0.
	return !result||result==="auto"?0:result;},set:function set(tween){ // Use step hook for back compat.
	// Use cssHook if its there.
	// Use .style if available and use plain properties where available.
	if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else {tween.elem[tween.prop]=tween.now;}}}}; // Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function set(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function linear(p){return p;},swing:function swing(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init; // Back Compat <1.8 extension point
	jQuery.fx.step={};var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/; // Animations created synchronously will run synchronously
	function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return fxNow=jQuery.now();} // Generate parameters to create a standard animation
	function genFx(type,includeWidth){var which,i=0,attrs={height:type}; // If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}if(includeWidth){attrs.opacity=attrs.width=type;}return attrs;}function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(tween=collection[index].call(animation,prop,value)){ // We're done with this property
	return tween;}}}function defaultPrefilter(elem,props,opts){ /* jshint validthis: true */var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=dataPriv.get(elem,"fxshow"); // Handle queue: false promises
	if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){ // Ensure the complete handler is called before this completes
	anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});} // Height/width overflow pass
	if(elem.nodeType===1&&("height" in props||"width" in props)){ // Make sure that nothing sneaks out
	// Record all 3 overflow attributes because IE9-10 do not
	// change the overflow attribute when overflowX and
	// overflowY are set to the same value
	opts.overflow=[style.overflow,style.overflowX,style.overflowY]; // Set display property to inline-block for height/width
	// animations on inline elements that are having width/height animated
	display=jQuery.css(elem,"display"); // Test default display if display is currently "none"
	checkDisplay=display==="none"?dataPriv.get(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;if(checkDisplay==="inline"&&jQuery.css(elem,"float")==="none"){style.display="inline-block";}}if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});} // show/hide pass
	for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){ // If there is dataShow left over from a stopped hide or show
	// and we are going to proceed with show, we should pretend to be hidden
	if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;}else {continue;}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop); // Any non-fx value stops us from restoring the original display value
	}else {display=undefined;}}if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden" in dataShow){hidden=dataShow.hidden;}}else {dataShow=dataPriv.access(elem,"fxshow",{});} // Store state if its toggle - enables .stop().toggle() to "reverse"
	if(toggle){dataShow.hidden=!hidden;}if(hidden){jQuery(elem).show();}else {anim.done(function(){jQuery(elem).hide();});}anim.done(function(){var prop;dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}} // If this is a noop like .hide().hide(), restore an overwritten display value
	}else if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){style.display=display;}}function propFilter(props,specialEasing){var index,name,easing,value,hooks; // camelCase, specialEasing and expand cssHook pass
	for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}if(index!==name){props[name]=value;delete props[index];}hooks=jQuery.cssHooks[name];if(hooks&&"expand" in hooks){value=hooks.expand(value);delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
	// Reusing 'index' because we have the correct "name"
	for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else {specialEasing[name]=easing;}}}function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){ // Don't match elem in the :animated selector
	delete tick.elem;}),tick=function tick(){if(stopped){return false;}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime), // Support: Android 2.3
	// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
	temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else {deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function createTween(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function stop(gotoEnd){var index=0, // If we are going to the end, we want to run all the tweens
	// otherwise we skip this part
	length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped=true;for(;index<length;index++){animation.tweens[index].run(1);} // Resolve when we played the last frame; otherwise, reject
	if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else {deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(jQuery.isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=jQuery.proxy(result.stop,result);}return result;}}jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue})); // attach callbacks from options
	return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function tweener(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else {props=props.match(rnotwhite);}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function prefilter(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else {Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&(typeof speed==="undefined"?"undefined":_typeof(speed))==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default; // Normalize opt.queue - true/undefined/null -> "fx"
	if(opt.queue==null||opt.queue===true){opt.queue="fx";} // Queueing
	opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function fadeTo(speed,to,easing,callback){ // Show any hidden elements after setting opacity to 0
	return this.filter(isHidden).css("opacity",0).show() // Animate to the value specified
	.end().animate({opacity:to},speed,easing,callback);},animate:function animate(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function doAnimation(){ // Operate on a copy of prop so per-property easing won't be lost
	var anim=Animation(this,jQuery.extend({},prop),optall); // Empty animations, or finishing resolves immediately
	if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function stop(type,clearQueue,gotoEnd){var stopQueue=function stopQueue(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}if(clearQueue&&type!==false){this.queue(type||"fx",[]);}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else {for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}} // Start the next in the queue if the last step wasn't forced.
	// Timers currently will call their complete callbacks, which
	// will dequeue but only if they were gotoEnd.
	if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function finish(type){if(type!==false){type=type||"fx";}return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0; // Enable finishing flag on private data
	data.finish=true; // Empty the queue first
	jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);} // Look for any active animations, and finish them
	for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}} // Look for any animations in the old queue and finish them
	for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}} // Turn off finishing flag
	delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};}); // Generate shortcuts for custom animations
	jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i]; // Checks the timer has not already been removed
	if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else {jQuery.timers.pop();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=window.setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){window.clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200, // Default speed
	_default:400}; // Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox"; // Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn=input.value!==""; // Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected=opt.selected; // Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled=true;support.optDisabled=!opt.disabled; // Support: IE<=11+
	// An input loses its value after becoming a radio
	input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function attr(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function removeAttr(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function attr(elem,name,value){var ret,hooks,nType=elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes
	if(nType===3||nType===8||nType===2){return;} // Fallback to prop when attributes are not supported
	if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);} // All attributes are lowercase
	// Grab necessary hook if one is defined
	if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}if(hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}elem.setAttribute(name,value+"");return value;}if(hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}ret=jQuery.find.attr(elem,name); // Non-existent attributes return null, we normalize to undefined
	return ret==null?undefined:ret;},attrHooks:{type:{set:function set(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}return value;}}}},removeAttr:function removeAttr(elem,value){var name,propName,i=0,attrNames=value&&value.match(rnotwhite);if(attrNames&&elem.nodeType===1){while(name=attrNames[i++]){propName=jQuery.propFix[name]||name; // Boolean attributes get special treatment (#10870)
	if(jQuery.expr.match.bool.test(name)){ // Set corresponding property to false
	elem[propName]=false;}elem.removeAttribute(name);}}}}); // Hooks for boolean attributes
	boolHook={set:function set(elem,value,name){if(value===false){ // Remove boolean attributes when set to false
	jQuery.removeAttr(elem,name);}else {elem.setAttribute(name,name);}return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle;if(!isXML){ // Avoid an infinite loop by temporarily removing this function from the getter
	handle=attrHandle[name];attrHandle[name]=ret;ret=getter(elem,name,isXML)!=null?name.toLowerCase():null;attrHandle[name]=handle;}return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function prop(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function removeProp(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function prop(elem,name,value){var ret,hooks,nType=elem.nodeType; // Don't get/set properties on text, comment and attribute nodes
	if(nType===3||nType===8||nType===2){return;}if(nType!==1||!jQuery.isXMLDoc(elem)){ // Fix name and attach hooks
	name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}if(value!==undefined){if(hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}return elem[name]=value;}if(hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}return elem[name];},propHooks:{tabIndex:{get:function get(elem){ // elem.tabIndex doesn't always return the
	// correct value when it hasn't been explicitly set
	// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	// Use proper attribute retrieval(#12072)
	var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1;}}},propFix:{"for":"htmlFor","class":"className"}}); // Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if(!support.optSelected){jQuery.propHooks.selected={get:function get(elem){var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}return null;},set:function set(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});var rclass=/[\t\r\n\f]/g;function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}jQuery.fn.extend({addClass:function addClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while(elem=this[i++]){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while(clazz=classes[j++]){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}} // Only assign if different to avoid unneeded rendering.
	finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},removeClass:function removeClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}if(!arguments.length){return this.attr("class","");}if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while(elem=this[i++]){curValue=getClass(elem); // This expression is here for better compressibility (see addClass)
	cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while(clazz=classes[j++]){ // Remove *all* instances
	while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}} // Only assign if different to avoid unneeded rendering.
	finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},toggleClass:function toggleClass(value,stateVal){var type=typeof value==="undefined"?"undefined":_typeof(value);if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}return this.each(function(){var className,i,self,classNames;if(type==="string"){ // Toggle individual class names
	i=0;self=jQuery(this);classNames=value.match(rnotwhite)||[];while(className=classNames[i++]){ // Check each className given, space separated list
	if(self.hasClass(className)){self.removeClass(className);}else {self.addClass(className);}} // Toggle whole class name
	}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){ // Store className if set
	dataPriv.set(this,"__className__",className);} // If the element has a class name or if we're passed `false`,
	// then remove the whole classname (if there was one, the above saved it).
	// Otherwise bring back whatever was previously saved (if anything),
	// falling back to the empty string if nothing was stored.
	if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function hasClass(selector){var className,elem,i=0;className=" "+selector+" ";while(elem=this[i++]){if(elem.nodeType===1&&(" "+getClass(elem)+" ").replace(rclass," ").indexOf(className)>-1){return true;}}return false;}});var rreturn=/\r/g,rspaces=/[\x20\t\r\n\f]+/g;jQuery.fn.extend({val:function val(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get" in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}ret=elem.value;return typeof ret==="string"? // Handle most common string cases
	ret.replace(rreturn,""): // Handle cases where value is null/undef or number
	ret==null?"":ret;}return;}isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}if(isFunction){val=value.call(this,i,jQuery(this).val());}else {val=value;} // Treat null/undefined as ""; convert numbers to string
	if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting
	if(!hooks||!("set" in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function get(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val: // Support: IE10-11+
	// option.text throws exceptions (#14686, #14858)
	// Strip and collapse whitespace
	// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
	jQuery.trim(jQuery.text(elem)).replace(rspaces," ");}},select:{get:function get(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0; // Loop through all the selected options
	for(;i<max;i++){option=options[i]; // IE8-9 doesn't update selected after form reset (#2551)
	if((option.selected||i===index)&&( // Don't return options that are disabled or in a disabled optgroup
	support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){ // Get the specific value for the option
	value=jQuery(option).val(); // We don't need an array for one selects
	if(one){return value;} // Multi-Selects return an array
	values.push(value);}}return values;},set:function set(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}} // Force browsers to behave consistently when non-matching value is set
	if(!optionSet){elem.selectedIndex=-1;}return values;}}}}); // Radios and checkboxes getter/setter
	jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function set(elem,value){if(jQuery.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1;}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}}); // Return jQuery for attributes-only inclusion
	var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;jQuery.extend(jQuery.event,{trigger:function trigger(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document; // Don't do events on text and comment nodes
	if(elem.nodeType===3||elem.nodeType===8){return;} // focus/blur morphs to focusin/out; ensure we're not firing them right now
	if(rfocusMorph.test(type+jQuery.event.triggered)){return;}if(type.indexOf(".")>-1){ // Namespaced trigger; create a regexp to match event type in handle()
	namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}ontype=type.indexOf(":")<0&&"on"+type; // Caller can pass in a jQuery.Event object, Object, or just an event type string
	event=event[jQuery.expando]?event:new jQuery.Event(type,(typeof event==="undefined"?"undefined":_typeof(event))==="object"&&event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
	event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null; // Clean up the event in case it is being reused
	event.result=undefined;if(!event.target){event.target=elem;} // Clone any incoming data and prepend the event, creating the handler arg list
	data=data==null?[event]:jQuery.makeArray(data,[event]); // Allow special events to draw outside the lines
	special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;} // Determine event propagation path in advance, per W3C events spec (#9951)
	// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
	if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;} // Only add window if we got to document (e.g., not plain obj or detached DOM)
	if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}} // Fire handlers on the event path
	i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type; // jQuery handler
	handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);} // Native handler
	handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}event.type=type; // If nobody prevented the default action, do it now
	if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){ // Call a native DOM method on the target with the same name name as the event.
	// Don't do default actions on window, that's where global variables be (#6170)
	if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){ // Don't re-trigger an onFOO event when we call its FOO() method
	tmp=elem[ontype];if(tmp){elem[ontype]=null;} // Prevent re-triggering of the same event, since we already bubbled it above
	jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}return event.result;}, // Piggyback on a donor event to simulate a different one
	simulate:function simulate(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true // Previously, `originalEvent: {}` was set here, so stopPropagation call
	// would not be triggered on donor event, since in our own
	// jQuery.event.stopPropagation function we had a check for existence of
	// originalEvent.stopPropagation method, so, consequently it would be a noop.
	//
	// But now, this "simulate" function is used only for events
	// for which stopPropagation() is noop, so there is no need for that anymore.
	//
	// For the 1.x branch though, guard for "click" and "submit"
	// events is still used, but was moved to jQuery.event.stopPropagation function
	// because `originalEvent` should point to the original event for the constancy
	// with other events and for more focused logic
	});jQuery.event.trigger(e,null,elem);if(e.isDefaultPrevented()){event.preventDefault();}}});jQuery.fn.extend({trigger:function trigger(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function triggerHandler(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){ // Handle event binding
	jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function hover(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});support.focusin="onfocusin" in window; // Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){ // Attach a single capturing handler on the document while someone wants focusin/focusout
	var handler=function handler(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function setup(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function teardown(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else {dataPriv.access(doc,fix,attaches);}}};});}var location=window.location;var nonce=jQuery.now();var rquery=/\?/; // Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON=function(data){return JSON.parse(data+"");}; // Cross-browser xml parsing
	jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;} // Support: IE9
	try{xml=new window.DOMParser().parseFromString(data,"text/xml");}catch(e){xml=undefined;}if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}return xml;};var rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg, // #7653, #8125, #8152: local protocol detection
	rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//, /* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */prefilters={}, /* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */transports={}, // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes="*/".concat("*"), // Anchor tag for parsing the document origin
	originAnchor=document.createElement("a");originAnchor.href=location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure){ // dataTypeExpression is optional and defaults to "*"
	return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];if(jQuery.isFunction(func)){ // For each dataType in the dataTypeExpression
	while(dataType=dataTypes[i++]){ // Prepend if requested
	if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func); // Otherwise append
	}else {(structure[dataType]=structure[dataType]||[]).push(func);}}}};} // Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure===transports;function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return !(selected=dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");} // A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;} /* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes; // Remove auto dataType and get content-type in the process
	while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}} // Check if we're dealing with a known content-type
	if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}} // Check to see if we have a response for the expected dataType
	if(dataTypes[0] in responses){finalDataType=dataTypes[0];}else { // Try convertible dataTypes
	for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}if(!firstDataType){firstDataType=type;}} // Or just use first one
	finalDataType=finalDataType||firstDataType;} // If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}} /* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={}, // Work with a copy of dataTypes in case we need to modify it for conversion
	dataTypes=s.dataTypes.slice(); // Create converters map with lowercased keys
	if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}current=dataTypes.shift(); // Convert to each sequential dataType
	while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;} // Apply the dataFilter if provided
	if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}prev=current;current=dataTypes.shift();if(current){ // There's only work to do if current dataType is non-auto
	if(current==="*"){current=prev; // Convert response if prev dataType is non-auto and differs from current
	}else if(prev!=="*"&&prev!==current){ // Seek a direct converter
	conv=converters[prev+" "+current]||converters["* "+current]; // If none found, seek a pair
	if(!conv){for(conv2 in converters){ // If conv2 outputs current
	tmp=conv2.split(" ");if(tmp[1]===current){ // If prev can be converted to accepted input
	conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){ // Condense equivalence converters
	if(conv===true){conv=converters[conv2]; // Otherwise, insert the intermediate dataType
	}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}break;}}}} // Apply converter (if not an equivalence)
	if(conv!==true){ // Unless errors are allowed to bubble, catch and return them
	if(conv&&s.throws){response=conv(response);}else {try{response=conv(response);}catch(e){return {state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}return {state:"success",data:response};}jQuery.extend({ // Counter for holding the number of active queries
	active:0, // Last-Modified header cache for next request
	lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8", /*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"}, // Data converters
	// Keys separate source (or catchall "*") and destination types with a single space
	converters:{ // Convert anything to text
	"* text":String, // Text to html (true = no transformation)
	"text html":true, // Evaluate text as a json expression
	"text json":jQuery.parseJSON, // Parse text as xml
	"text xml":jQuery.parseXML}, // For options that shouldn't be deep extended:
	// you can add your own custom options here if
	// and when you create one that shouldn't be
	// deep extended (see ajaxExtend)
	flatOptions:{url:true,context:true}}, // Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup:function ajaxSetup(target,settings){return settings? // Building a settings object
	ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings): // Extending ajaxSettings
	ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports), // Main method
	ajax:function ajax(url,options){ // If url is an object, simulate pre-1.5 signature
	if((typeof url==="undefined"?"undefined":_typeof(url))==="object"){options=url;url=undefined;} // Force options to be an object
	options=options||{};var transport, // URL without anti-cache param
	cacheURL, // Response headers
	responseHeadersString,responseHeaders, // timeout handle
	timeoutTimer, // Url cleanup var
	urlAnchor, // To know if global events are to be dispatched
	fireGlobals, // Loop variable
	i, // Create the final options object
	s=jQuery.ajaxSetup({},options), // Callbacks context
	callbackContext=s.context||s, // Context for global events is callbackContext if it is a DOM node or jQuery collection
	globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event, // Deferreds
	deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"), // Status-dependent callbacks
	_statusCode=s.statusCode||{}, // Headers (they are sent all at once)
	requestHeaders={},requestHeadersNames={}, // The jqXHR state
	state=0, // Default abort message
	strAbort="canceled", // Fake xhr
	jqXHR={readyState:0, // Builds headers hashtable if needed
	getResponseHeader:function getResponseHeader(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()]=match[2];}}match=responseHeaders[key.toLowerCase()];}return match==null?null:match;}, // Raw string
	getAllResponseHeaders:function getAllResponseHeaders(){return state===2?responseHeadersString:null;}, // Caches the header
	setRequestHeader:function setRequestHeader(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}return this;}, // Overrides response content-type header
	overrideMimeType:function overrideMimeType(type){if(!state){s.mimeType=type;}return this;}, // Status-dependent callbacks
	statusCode:function statusCode(map){var code;if(map){if(state<2){for(code in map){ // Lazy-add the new callback in a way that preserves old ones
	_statusCode[code]=[_statusCode[code],map[code]];}}else { // Execute the appropriate callbacks
	jqXHR.always(map[jqXHR.status]);}}return this;}, // Cancel the request
	abort:function abort(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}}; // Attach deferreds
	deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail; // Remove hash character (#7531: and string promotion)
	// Add protocol if not provided (prefilters might expect it)
	// Handle falsy url in the settings object (#10093: consistency with old signature)
	// We also use the url parameter if available
	s.url=((url||s.url||location.href)+"").replace(rhash,"").replace(rprotocol,location.protocol+"//"); // Alias method option to type as per ticket #12004
	s.type=options.method||options.type||s.method||s.type; // Extract dataTypes list
	s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""]; // A cross-domain request is in order when the origin doesn't match the current origin.
	if(s.crossDomain==null){urlAnchor=document.createElement("a"); // Support: IE8-11+
	// IE throws exception if url is malformed, e.g. http://example.com:80x/
	try{urlAnchor.href=s.url; // Support: IE8-11+
	// Anchor's host property isn't correctly set when s.url is relative
	urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){ // If there is an error parsing the URL, assume it is crossDomain,
	// it can be rejected by the transport if it is invalid
	s.crossDomain=true;}} // Convert data if not already a string
	if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);} // Apply prefilters
	inspectPrefiltersOrTransports(prefilters,s,options,jqXHR); // If request was aborted inside a prefilter, stop there
	if(state===2){return jqXHR;} // We can fire global events as of now if asked to
	// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
	fireGlobals=jQuery.event&&s.global; // Watch for a new set of requests
	if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");} // Uppercase the type
	s.type=s.type.toUpperCase(); // Determine if request has content
	s.hasContent=!rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
	// and/or If-None-Match header later on
	cacheURL=s.url; // More options handling for requests with no content
	if(!s.hasContent){ // If data is available, append data to url
	if(s.data){cacheURL=s.url+=(rquery.test(cacheURL)?"&":"?")+s.data; // #9682: remove data so that it's not used in an eventual retry
	delete s.data;} // Add anti-cache in url if needed
	if(s.cache===false){s.url=rts.test(cacheURL)? // If there is already a '_' parameter, set its value
	cacheURL.replace(rts,"$1_="+nonce++): // Otherwise add one to the end
	cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++;}} // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}} // Set the correct header, if data is being sent
	if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);} // Set the Accepts header for the server, depending on the dataType
	jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]); // Check for headers option
	for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);} // Allow custom headers/mimetypes and early abort
	if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){ // Abort if not done already and return
	return jqXHR.abort();} // Aborting is no longer a cancellation
	strAbort="abort"; // Install callbacks on deferreds
	for(i in {success:1,error:1,complete:1}){jqXHR[i](s[i]);} // Get transport
	transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR); // If no transport, we auto-abort
	if(!transport){done(-1,"No Transport");}else {jqXHR.readyState=1; // Send global event
	if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);} // If request was aborted inside ajaxSend, stop there
	if(state===2){return jqXHR;} // Timeout
	if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{state=1;transport.send(requestHeaders,done);}catch(e){ // Propagate exception as error if not done
	if(state<2){done(-1,e); // Simply rethrow otherwise
	}else {throw e;}}} // Callback for when everything is done
	function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText; // Called once
	if(state===2){return;} // State is "done" now
	state=2; // Clear timeout if it exists
	if(timeoutTimer){window.clearTimeout(timeoutTimer);} // Dereference transport for early garbage collection
	// (no matter how long the jqXHR object will be used)
	transport=undefined; // Cache response headers
	responseHeadersString=headers||""; // Set readyState
	jqXHR.readyState=status>0?4:0; // Determine if successful
	isSuccess=status>=200&&status<300||status===304; // Get response data
	if(responses){response=ajaxHandleResponses(s,jqXHR,responses);} // Convert no matter what (that way responseXXX fields are always set)
	response=ajaxConvert(s,response,jqXHR,isSuccess); // If successful, handle type chaining
	if(isSuccess){ // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}} // if no content
	if(status===204||s.type==="HEAD"){statusText="nocontent"; // if not modified
	}else if(status===304){statusText="notmodified"; // If we have data, let's convert it
	}else {statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else { // Extract error from statusText and normalize for non-aborts
	error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}} // Set data for the fake xhr object
	jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+""; // Success/Error
	if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else {deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);} // Status-dependent callbacks
	jqXHR.statusCode(_statusCode);_statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);} // Complete
	completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]); // Handle the global AJAX counter
	if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getJSON:function getJSON(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function getScript(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){ // Shift arguments if data argument was omitted
	if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;} // The url can be an options object (which then must have .url)
	return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url, // Make this explicit, since user can override this through ajaxSetup (#11264)
	type:"GET",dataType:"script",async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function wrapAll(html){var wrap;if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}if(this[0]){ // The elements to wrap the target around
	wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}return elem;}).append(this);}return this;},wrapInner:function wrapInner(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else {self.append(html);}});},wrap:function wrap(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function unwrap(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});jQuery.expr.filters.hidden=function(elem){return !jQuery.expr.filters.visible(elem);};jQuery.expr.filters.visible=function(elem){ // Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	// Use OR instead of AND as the element is not visible if either is true
	// See tickets #10406 and #13132
	return elem.offsetWidth>0||elem.offsetHeight>0||elem.getClientRects().length>0;};var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){ // Serialize array item.
	jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){ // Treat each array item as a scalar.
	add(prefix,v);}else { // Item is non-scalar (array or object), encode its numeric index.
	buildParams(prefix+"["+((typeof v==="undefined"?"undefined":_typeof(v))==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){ // Serialize object item.
	for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else { // Serialize scalar item.
	add(prefix,obj);}} // Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param=function(a,traditional){var prefix,s=[],add=function add(key,value){ // If value is a function, invoke it and return its value
	value=jQuery.isFunction(value)?value():value==null?"":value;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);}; // Set traditional to true for jQuery <= 1.3.2 behavior.
	if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;} // If an array was passed in, assume that it is an array of form elements.
	if(jQuery.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){ // Serialize the form elements
	jQuery.each(a,function(){add(this.name,this.value);});}else { // If traditional, encode the "old" way (the way 1.3.2 or older
	// did it), otherwise encode params recursively.
	for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}} // Return the resulting serialization
	return s.join("&").replace(r20,"+");};jQuery.fn.extend({serialize:function serialize(){return jQuery.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){ // Can add propHook for "elements" to filter or add form elements
	var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works
	return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return {name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={ // File protocol always yields status code 0, assume 200
	0:200, // Support: IE9
	// #1450: sometimes IE returns 1223 when it should be 204
	1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&"withCredentials" in xhrSupported;support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var _callback,errorCallback; // Cross domain only allowed if supported through XMLHttpRequest
	if(support.cors||xhrSupported&&!options.crossDomain){return {send:function send(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password); // Apply custom fields if provided
	if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}} // Override mime type if needed
	if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);} // X-Requested-With header
	// For cross-domain requests, seeing as conditions for a preflight are
	// akin to a jigsaw puzzle, we simply never set it to be sure.
	// (it can always be set on a per-request basis or even using ajaxSetup)
	// For same-domain requests, won't change header if already provided.
	if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";} // Set headers
	for(i in headers){xhr.setRequestHeader(i,headers[i]);} // Callback
	_callback=function callback(type){return function(){if(_callback){_callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){ // Support: IE9
	// On a manual native abort, IE9 throws
	// errors on any property access that is not readyState
	if(typeof xhr.status!=="number"){complete(0,"error");}else {complete( // File: protocol always yields status 0; see #8605, #14207
	xhr.status,xhr.statusText);}}else {complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText, // Support: IE9 only
	// IE9 has no XHR2 but throws on binary (trac-11426)
	// For XHR2 non-text, let the caller handle it (gh-2498)
	(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};}; // Listen to events
	xhr.onload=_callback();errorCallback=xhr.onerror=_callback("error"); // Support: IE9
	// Use onreadystatechange to replace onabort
	// to handle uncaught aborts
	if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else {xhr.onreadystatechange=function(){ // Check readyState before timeout as it changes
	if(xhr.readyState===4){ // Allow onerror to be called first,
	// but that will not handle a native abort
	// Also, save errorCallback to a variable
	// as xhr.onerror cannot be accessed
	window.setTimeout(function(){if(_callback){errorCallback();}});}};} // Create the abort callback
	_callback=_callback("abort");try{ // Do send the request (this may raise an exception)
	xhr.send(options.hasContent&&options.data||null);}catch(e){ // #14683: Only rethrow if this hasn't been notified as an error yet
	if(_callback){throw e;}}},abort:function abort(){if(_callback){_callback();}}};}}); // Install script dataType
	jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(text){jQuery.globalEval(text);return text;}}}); // Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}if(s.crossDomain){s.type="GET";}}); // Bind script tag hack transport
	jQuery.ajaxTransport("script",function(s){ // This transport only deals with cross domain requests
	if(s.crossDomain){var script,_callback2;return {send:function send(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",_callback2=function callback(evt){script.remove();_callback2=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}}); // Use native DOM manipulation to avoid our domManip AJAX trickery
	document.head.appendChild(script[0]);},abort:function abort(){if(_callback2){_callback2();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/; // Default jsonp settings
	jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce++;this[callback]=true;return callback;}}); // Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set
	if(jsonProp||s.dataTypes[0]==="jsonp"){ // Get callback name, remembering preexisting value associated with it
	callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback; // Insert callback into url or form data
	if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;} // Use data converter to retrieve json after script execution
	s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}return responseContainer[0];}; // Force json dataType
	s.dataTypes[0]="json"; // Install callback
	overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;}; // Clean-up function (fires after converters)
	jqXHR.always(function(){ // If previous value didn't exist - remove it
	if(overwritten===undefined){jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
	}else {window[callbackName]=overwritten;} // Save back as free
	if(s[callbackName]){ // Make sure that re-using the options doesn't screw things around
	s.jsonpCallback=originalSettings.jsonpCallback; // Save the callback name for future use
	oldCallbacks.push(callbackName);} // Call if it was a function and we have a response
	if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer=overwritten=undefined;}); // Delegate to script
	return "script";}}); // Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML=function(data,context,keepScripts){if(!data||typeof data!=="string"){return null;}if(typeof context==="boolean"){keepScripts=context;context=false;}context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[]; // Single tag
	if(parsed){return [context.createElement(parsed[1])];}parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);}; // Keep a copy of the old load method
	var _load=jQuery.fn.load; /**
	 * Load a url into a page
	 */jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=jQuery.trim(url.slice(off));url=url.slice(0,off);} // If it's a function
	if(jQuery.isFunction(params)){ // We assume that it's the callback
	callback=params;params=undefined; // Otherwise, build a param string
	}else if(params&&(typeof params==="undefined"?"undefined":_typeof(params))==="object"){type="POST";} // If we have elements to modify, make the request
	if(self.length>0){jQuery.ajax({url:url, // If "type" variable is undefined, then "GET" method will be used.
	// Make value of this field explicit since
	// user can override it through ajaxSetup method
	type:type||"GET",dataType:"html",data:params}).done(function(responseText){ // Save response for use in complete callback
	response=arguments;self.html(selector? // If a selector was specified, locate the right elements in a dummy div
	// Exclude scripts to avoid IE 'Permission Denied' errors
	jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector): // Otherwise use the full result
	responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
	// but they are ignored because response was set above.
	// If it fails, this function gets "jqXHR", "status", "error"
	}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}return this;}; // Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;}; /**
	 * Gets a window from an element
	 */function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView;}jQuery.offset={setOffset:function setOffset(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={}; // Set position first, in-case top/left are set even on static elem
	if(position==="static"){elem.style.position="relative";}curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1; // Need to be able to calculate position if either
	// top or left is auto and position is either absolute or fixed
	if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else {curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}if(jQuery.isFunction(options)){ // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
	options=options.call(elem,i,jQuery.extend({},curOffset));}if(options.top!=null){props.top=options.top-curOffset.top+curTop;}if(options.left!=null){props.left=options.left-curOffset.left+curLeft;}if("using" in options){options.using.call(elem,props);}else {curElem.css(props);}}};jQuery.fn.extend({offset:function offset(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var docElem,win,elem=this[0],box={top:0,left:0},doc=elem&&elem.ownerDocument;if(!doc){return;}docElem=doc.documentElement; // Make sure it's not a disconnected DOM node
	if(!jQuery.contains(docElem,elem)){return box;}box=elem.getBoundingClientRect();win=getWindow(doc);return {top:box.top+win.pageYOffset-docElem.clientTop,left:box.left+win.pageXOffset-docElem.clientLeft};},position:function position(){if(!this[0]){return;}var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0}; // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
	// because it is its only offset parent
	if(jQuery.css(elem,"position")==="fixed"){ // Assume getBoundingClientRect is there when computed position is fixed
	offset=elem.getBoundingClientRect();}else { // Get *real* offsetParent
	offsetParent=this.offsetParent(); // Get correct offsets
	offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();} // Add offsetParent borders
	parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true);} // Subtract parent offsets and element margins
	return {top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};}, // This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent:function offsetParent(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}return offsetParent||documentElement;});}}); // Create scrollLeft and scrollTop methods
	jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?win[prop]:elem[method];}if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else {elem[method]=val;}},method,val,arguments.length);};}); // Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop); // If curCSS returns percentage, fallback to offset
	return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});}); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){ // Margin is only for outerHeight, outerWidth
	jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){ // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
	// isn't a whole lot we can do. See pull request at this URL for discussion:
	// https://github.com/jquery/jquery/pull/764
	return elem.document.documentElement["client"+name];} // Get document width or height
	if(elem.nodeType===9){doc=elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
	// whichever is greatest
	return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}return value===undefined? // Get width or height on the element, requesting but not forcing parseFloat
	jQuery.css(elem,type,extra): // Set width or height on the element
	jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});jQuery.fn.extend({bind:function bind(types,data,fn){return this.on(types,null,data,fn);},unbind:function unbind(types,fn){return this.off(types,null,fn);},delegate:function delegate(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function undelegate(selector,types,fn){ // ( namespace ) or ( selector, types [, fn] )
	return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);},size:function size(){return this.length;}});jQuery.fn.andSelf=jQuery.fn.addBack; // Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return jQuery;}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}var  // Map over jQuery in case of overwrite
	_jQuery=window.jQuery, // Map over the $ in case of overwrite
	_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}return jQuery;}; // Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if(!noGlobal){window.jQuery=window.$=jQuery;}return jQuery;});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)(module)))

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(54)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./main.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./main.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(53)();
	// imports


	// module
	exports.push([module.id, "/* ==========================================================================\n   Component: Base\n ============================================================================ */\n/**\n * Fix the flawed CSS box model - Yes, IE6's box model is better\n * Browser support: IE8+\n * via: http://paulirish.com/2012/box-sizing-border-box-ftw/\n */\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n/* normalize.css v3.0.2 | git.io/normalize */\n/* Set <html> and <body> to inherit the height of the viewport */\nhtml,\nbody {\n  min-height: 100%;\n}\n/**\n * 1. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n *    https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust\n */\nhtml {\n  -ms-text-size-adjust: 100%;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 1 */\n}\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0;\n}\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11 and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n * hgroup has been removed from the HTML5 (W3C) specification\n *        https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nmain,\nnav,\nsection,\nsummary {\n  display: block;\n}\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate,\nscript {\n  display: none;\n}\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\na:focus {\n  outline: thin dotted;\n}\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0;\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove text-decoration\n */\nins,\na {\n  text-decoration: none;\n}\n/**\n * Address styling not present in IE 8/9, Safari 5, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n/**\n * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold;\n}\n/**\n * Improve readability of pre-formatted text in all browsers.\n */\npre {\n  white-space: pre-wrap;\n}\n/**\n * Set consistent quote types.\n */\nq {\n  quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\";\n}\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n  * 1. Corrects max-width behavior (2.) if padding and border are used\n  * 2. Responsiveness: Sets a maxium width relative to the parent and auto scales the height\n  * 3. Remove the gap between images and the bottom of their containers\n  * 4. Remove border when inside `a` element in IE 8/9.\n  * remove 2. for Issue #502\n  */\nimg {\n  box-sizing: border-box;\n  /* 1 */\n  vertical-align: middle;\n  /* 3 */\n  border: 0;\n  /* 4 */\n}\n/**\n * Correct overflow displayed oddly in IE 9.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 0;\n}\n/**\n * Correct font family set oddly in Safari 5 and Chrome.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\n  font-size: 1em;\n}\n/* Forms\n   ========================================================================== */\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n/**\n * 1. Correct `color` not being inherited in IE 8/9.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible;\n}\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\nbutton,\ninput {\n  line-height: normal;\n}\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n/*\n * 1. Improves consistency of cursor style for clickable elements\n * 2. Removes excess padding in IE 8/9.\n * 3. Address box sizing set to `content-box` in IE 8/9/10.\n */\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  cursor: pointer;\n  /*1*/\n  padding: 0;\n  /*2*/\n  box-sizing: border-box;\n  /* 3 */\n}\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */\n}\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * 1. Remove default vertical scrollbar in IE 8/9.\n * 2. Improve readability and alignment in all browsers.\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */\n  resize: vertical;\n}\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold;\n}\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n/* AMUI Base\n   ========================================================================== */\n/**\n * `font-size` is set in `html` element to support the `rem` unit for font-sizes\n * NOTE: IE9 & IE10 do not recognize `rem` units when used with the\n   `font` shorthand property.\n */\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  position: relative;\n  background: #fff;\n  font-family: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\", \"wenquanyi micro hei\", \"Hiragino Sans GB\", \"Hiragino Sans GB W3\", \"FontAwesome\", sans-serif;\n  font-weight: normal;\n  line-height: 1.6;\n  color: #333333;\n  font-size: 1.6rem;\n}\n/**\n * 1. http://usabilitypost.com/2012/11/15/w-optimizelegibility-on-mobile-devices/\n * 2. http://maxvoltar.com/archive/-webkit-font-smoothing\n * NOTE: http://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/\n * 3. http://maximilianhoffmann.com/posts/better-font-rendering-on-osx\n *    http://jaydenseric.com/blog/css-font-smoothing-for-firefox-mac\n */\nbody,\ninput,\ntextarea,\nselect,\nbutton {\n  text-rendering: optimizeLegibility;\n  /* 1 */\n  -webkit-font-smoothing: antialiased;\n  /* 2 */\n  -moz-osx-font-smoothing: grayscale;\n  /* 3 Default: auto */\n  -moz-font-feature-settings: \"liga\", \"kern\";\n}\n/*Only phones */\n@media only screen and (max-width: 640px) {\n  /**\n   * Break strings if their length exceeds the width of their container\n   */\n  body {\n    word-wrap: break-word;\n    -webkit-hyphens: auto;\n    -ms-hyphens: auto;\n    -moz-hyphens: auto;\n    hyphens: auto;\n  }\n}\n/**\n * links\n */\na {\n  color: #0e90d2;\n}\na:hover,\na:focus {\n  color: #095f8a;\n}\na:focus {\n  outline: thin dotted;\n  outline: 1px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n/* Insert */\nins {\n  background: #ffa;\n  color: #333333;\n}\n/**\n * Mark\n * Note: Addresses styling not present in IE 8/9.\n */\nmark {\n  background: #ffa;\n  color: #333333;\n}\n/**\n * Abbreviation and definition\n */\nabbr[title],\ndfn[title] {\n  cursor: help;\n}\ndfn[title] {\n  border-bottom: 1px dotted;\n  font-style: normal;\n}\n/* Spacing for block elements */\np,\nhr,\nul,\nol,\ndl,\nblockquote,\npre,\naddress,\nfieldset,\nfigure {\n  margin: 0 0 1.6rem 0;\n}\n* + p,\n* + hr,\n* + ul,\n* + ol,\n* + dl,\n* + blockquote,\n* + pre,\n* + address,\n* + fieldset,\n* + figure {\n  margin-top: 1.6rem;\n}\n/* Headings\n   ========================================================================== */\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0 0 1.6rem 0;\n  font-weight: 600;\n  font-size: 100%;\n}\nh1 {\n  font-size: 1.5em;\n}\nh2 {\n  font-size: 1.25em;\n}\n* + h1,\n* + h2,\n* + h3,\n* + h4,\n* + h5,\n* + h6 {\n  margin-top: 2em;\n}\n/* Ordered and unordered lists */\nul,\nol {\n  padding-left: 2em;\n}\n/* Reset margin for nested lists */\nul > li > ul,\nul > li > ol,\nol > li > ol,\nol > li > ul {\n  margin: 1em 0;\n}\n/* Description lists */\ndt {\n  font-weight: bold;\n}\ndt + dd {\n  margin-top: .5em;\n}\ndd {\n  margin-left: 0;\n}\ndd + dt {\n  margin-top: 1em;\n}\n/**\n * Horizontal rule\n * 1. Address differences between Firefox and other browsers.\n */\nhr {\n  display: block;\n  padding: 0;\n  border: 0;\n  height: 0;\n  border-top: 1px solid #eeeeee;\n  -moz-box-sizing: content-box;\n  /* 1 */\n  box-sizing: content-box;\n  /* 1 */\n}\n/* Address */\naddress {\n  font-style: normal;\n}\n/* Quotes */\nblockquote {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 15px;\n  border-left: 4px solid #ddd;\n  font-family: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, \"FontAwesome\", serif;\n  /* Small print for identifying the source */\n  /* Smaller margin if `small` follows */\n}\nblockquote small {\n  display: block;\n  color: #999999;\n  font-family: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\", \"wenquanyi micro hei\", \"Hiragino Sans GB\", \"Hiragino Sans GB W3\", \"FontAwesome\", sans-serif;\n  text-align: right;\n}\nblockquote p:last-of-type {\n  margin-bottom: 0;\n}\n/* iframe */\niframe {\n  border: 0;\n}\n/* Forms\n   ========================================================================== */\n/**\n  * Vertical alignment\n  * Exclude `radio` and `checkbox` elements because the default `baseline` value aligns better with text\n  */\nbutton,\ninput:not([type=\"radio\"]):not([type=\"checkbox\"]),\nselect {\n  vertical-align: middle;\n}\n/**\n * Fix viewport for IE10 snap mode\n * http://timkadlec.com/2012/10/ie10-snap-mode-and-responsive-design/\n * http://msdn.microsoft.com/en-us/library/ie/hh869615%28v=vs.85%29.aspx\n * http://msdn.microsoft.com/zh-cn/library/ie/hh708740(v=vs.85).aspx\n * @2014.01.20: 设置一下属性以后，windows Phone 8 上显示的字体过小，暂时注释掉\n * ========================================================================== */\n/*\n@-ms-viewport {\n  width: device-width;\n}\n*/\n.am-scrollbar-measure {\n  width: 100px;\n  height: 100px;\n  overflow: scroll;\n  position: absolute;\n  top: -9999px;\n}\n/* ==========================================================================\n   Component: Grid\n ============================================================================ */\n.am-container {\n  box-sizing: border-box;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  width: 100%;\n  max-width: 1000px;\n}\n.am-container:before,\n.am-container:after {\n  content: \" \";\n  display: table;\n}\n.am-container:after {\n  clear: both;\n}\n@media only screen and (min-width:641px) {\n  .am-container {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n.am-container > .am-g {\n  width: auto;\n  margin-left: -1rem;\n  margin-right: -1rem;\n}\n@media only screen and (min-width:641px) {\n  .am-container > .am-g {\n    margin-left: -1.5rem;\n    margin-right: -1.5rem;\n  }\n}\n.am-g {\n  margin: 0 auto;\n  width: 100%;\n}\n.am-g:before,\n.am-g:after {\n  content: \" \";\n  display: table;\n}\n.am-g:after {\n  clear: both;\n}\n.am-g .am-g {\n  margin-left: -1rem;\n  margin-right: -1rem;\n  width: auto;\n}\n.am-g .am-g.am-g-collapse {\n  margin-left: 0;\n  margin-right: 0;\n  width: auto;\n}\n@media only screen and (min-width:641px) {\n  .am-g .am-g {\n    margin-left: -1.5rem;\n    margin-right: -1.5rem;\n  }\n}\n.am-g.am-g-collapse .am-g {\n  margin-left: 0;\n  margin-right: 0;\n}\n.am-g-collapse [class*=\"am-u-\"] {\n  padding-left: 0;\n  padding-right: 0;\n}\n.am-g-fixed {\n  max-width: 1000px;\n}\n[class*=\"am-u-\"] {\n  width: 100%;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  float: left;\n  position: relative;\n}\n[class*=\"am-u-\"] + [class*=\"am-u-\"]:last-child {\n  float: right;\n}\n[class*=\"am-u-\"] + [class*=\"am-u-\"].am-u-end {\n  float: left;\n}\n@media only screen and (min-width:641px) {\n  [class*=\"am-u-\"] {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n[class*=\"am-u-pull-\"] {\n  left: auto;\n}\n[class*=\"am-u-push-\"] {\n  right: auto;\n}\n@media only screen {\n  .am-u-sm-1 {\n    width: 8.33333333%;\n  }\n  .am-u-sm-2 {\n    width: 16.66666667%;\n  }\n  .am-u-sm-3 {\n    width: 25%;\n  }\n  .am-u-sm-4 {\n    width: 33.33333333%;\n  }\n  .am-u-sm-5 {\n    width: 41.66666667%;\n  }\n  .am-u-sm-6 {\n    width: 50%;\n  }\n  .am-u-sm-7 {\n    width: 58.33333333%;\n  }\n  .am-u-sm-8 {\n    width: 66.66666667%;\n  }\n  .am-u-sm-9 {\n    width: 75%;\n  }\n  .am-u-sm-10 {\n    width: 83.33333333%;\n  }\n  .am-u-sm-11 {\n    width: 91.66666667%;\n  }\n  .am-u-sm-12 {\n    width: 100%;\n  }\n  .am-u-sm-pull-0 {\n    right: 0;\n  }\n  .am-u-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .am-u-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .am-u-sm-pull-3 {\n    right: 25%;\n  }\n  .am-u-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .am-u-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .am-u-sm-pull-6 {\n    right: 50%;\n  }\n  .am-u-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .am-u-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .am-u-sm-pull-9 {\n    right: 75%;\n  }\n  .am-u-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .am-u-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .am-u-sm-push-0 {\n    left: 0;\n  }\n  .am-u-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .am-u-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .am-u-sm-push-3 {\n    left: 25%;\n  }\n  .am-u-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .am-u-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .am-u-sm-push-6 {\n    left: 50%;\n  }\n  .am-u-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .am-u-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .am-u-sm-push-9 {\n    left: 75%;\n  }\n  .am-u-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .am-u-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .am-u-sm-offset-0 {\n    margin-left: 0;\n  }\n  .am-u-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .am-u-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .am-u-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .am-u-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .am-u-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .am-u-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .am-u-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .am-u-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .am-u-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .am-u-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .am-u-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .am-u-sm-reset-order {\n    margin-left: 0;\n    margin-right: 0;\n    left: auto;\n    right: auto;\n    float: left;\n  }\n  [class*=\"am-u-\"].am-u-sm-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none;\n  }\n  [class*=\"am-u-\"].am-u-sm-centered:last-child {\n    float: none;\n  }\n  [class*=\"am-u-\"].am-u-sm-uncentered {\n    margin-left: 0;\n    margin-right: 0;\n    float: left;\n  }\n  [class*=\"am-u-\"].am-u-sm-uncentered:last-child {\n    float: left;\n  }\n}\n@media only screen and (min-width:641px) {\n  .am-u-md-1 {\n    width: 8.33333333%;\n  }\n  .am-u-md-2 {\n    width: 16.66666667%;\n  }\n  .am-u-md-3 {\n    width: 25%;\n  }\n  .am-u-md-4 {\n    width: 33.33333333%;\n  }\n  .am-u-md-5 {\n    width: 41.66666667%;\n  }\n  .am-u-md-6 {\n    width: 50%;\n  }\n  .am-u-md-7 {\n    width: 58.33333333%;\n  }\n  .am-u-md-8 {\n    width: 66.66666667%;\n  }\n  .am-u-md-9 {\n    width: 75%;\n  }\n  .am-u-md-10 {\n    width: 83.33333333%;\n  }\n  .am-u-md-11 {\n    width: 91.66666667%;\n  }\n  .am-u-md-12 {\n    width: 100%;\n  }\n  .am-u-md-pull-0 {\n    right: 0;\n  }\n  .am-u-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .am-u-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .am-u-md-pull-3 {\n    right: 25%;\n  }\n  .am-u-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .am-u-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .am-u-md-pull-6 {\n    right: 50%;\n  }\n  .am-u-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .am-u-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .am-u-md-pull-9 {\n    right: 75%;\n  }\n  .am-u-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .am-u-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .am-u-md-push-0 {\n    left: 0;\n  }\n  .am-u-md-push-1 {\n    left: 8.33333333%;\n  }\n  .am-u-md-push-2 {\n    left: 16.66666667%;\n  }\n  .am-u-md-push-3 {\n    left: 25%;\n  }\n  .am-u-md-push-4 {\n    left: 33.33333333%;\n  }\n  .am-u-md-push-5 {\n    left: 41.66666667%;\n  }\n  .am-u-md-push-6 {\n    left: 50%;\n  }\n  .am-u-md-push-7 {\n    left: 58.33333333%;\n  }\n  .am-u-md-push-8 {\n    left: 66.66666667%;\n  }\n  .am-u-md-push-9 {\n    left: 75%;\n  }\n  .am-u-md-push-10 {\n    left: 83.33333333%;\n  }\n  .am-u-md-push-11 {\n    left: 91.66666667%;\n  }\n  .am-u-md-offset-0 {\n    margin-left: 0;\n  }\n  .am-u-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .am-u-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .am-u-md-offset-3 {\n    margin-left: 25%;\n  }\n  .am-u-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .am-u-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .am-u-md-offset-6 {\n    margin-left: 50%;\n  }\n  .am-u-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .am-u-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .am-u-md-offset-9 {\n    margin-left: 75%;\n  }\n  .am-u-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .am-u-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .am-u-md-reset-order {\n    margin-left: 0;\n    margin-right: 0;\n    left: auto;\n    right: auto;\n    float: left;\n  }\n  [class*=\"am-u-\"].am-u-md-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none;\n  }\n  [class*=\"am-u-\"].am-u-md-centered:last-child {\n    float: none;\n  }\n  [class*=\"am-u-\"].am-u-md-uncentered {\n    margin-left: 0;\n    margin-right: 0;\n    float: left;\n  }\n  [class*=\"am-u-\"].am-u-md-uncentered:last-child {\n    float: left;\n  }\n}\n@media only screen and (min-width:1025px) {\n  .am-u-lg-1 {\n    width: 8.33333333%;\n  }\n  .am-u-lg-2 {\n    width: 16.66666667%;\n  }\n  .am-u-lg-3 {\n    width: 25%;\n  }\n  .am-u-lg-4 {\n    width: 33.33333333%;\n  }\n  .am-u-lg-5 {\n    width: 41.66666667%;\n  }\n  .am-u-lg-6 {\n    width: 50%;\n  }\n  .am-u-lg-7 {\n    width: 58.33333333%;\n  }\n  .am-u-lg-8 {\n    width: 66.66666667%;\n  }\n  .am-u-lg-9 {\n    width: 75%;\n  }\n  .am-u-lg-10 {\n    width: 83.33333333%;\n  }\n  .am-u-lg-11 {\n    width: 91.66666667%;\n  }\n  .am-u-lg-12 {\n    width: 100%;\n  }\n  .am-u-lg-pull-0 {\n    right: 0;\n  }\n  .am-u-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .am-u-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .am-u-lg-pull-3 {\n    right: 25%;\n  }\n  .am-u-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .am-u-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .am-u-lg-pull-6 {\n    right: 50%;\n  }\n  .am-u-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .am-u-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .am-u-lg-pull-9 {\n    right: 75%;\n  }\n  .am-u-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .am-u-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .am-u-lg-push-0 {\n    left: 0;\n  }\n  .am-u-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .am-u-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .am-u-lg-push-3 {\n    left: 25%;\n  }\n  .am-u-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .am-u-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .am-u-lg-push-6 {\n    left: 50%;\n  }\n  .am-u-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .am-u-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .am-u-lg-push-9 {\n    left: 75%;\n  }\n  .am-u-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .am-u-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .am-u-lg-offset-0 {\n    margin-left: 0;\n  }\n  .am-u-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .am-u-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .am-u-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .am-u-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .am-u-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .am-u-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .am-u-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .am-u-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .am-u-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .am-u-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .am-u-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .am-u-lg-reset-order {\n    margin-left: 0;\n    margin-right: 0;\n    left: auto;\n    right: auto;\n    float: left;\n  }\n  [class*=\"am-u-\"].am-u-lg-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none;\n  }\n  [class*=\"am-u-\"].am-u-lg-centered:last-child {\n    float: none;\n  }\n  [class*=\"am-u-\"].am-u-lg-uncentered {\n    margin-left: 0;\n    margin-right: 0;\n    float: left;\n  }\n  [class*=\"am-u-\"].am-u-lg-uncentered:last-child {\n    float: left;\n  }\n}\n/* ==========================================================================\n   Component: AVG Grid\n ============================================================================ */\n[class*=\"am-avg-\"] {\n  display: block;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n[class*=\"am-avg-\"]:before,\n[class*=\"am-avg-\"]:after {\n  content: \" \";\n  display: table;\n}\n[class*=\"am-avg-\"]:after {\n  clear: both;\n}\n[class*=\"am-avg-\"] > li {\n  display: block;\n  height: auto;\n  float: left;\n}\n@media only screen {\n  .am-avg-sm-1 > li {\n    width: 100%;\n  }\n  .am-avg-sm-1 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-sm-1 > li:nth-of-type(1n + 1) {\n    clear: both;\n  }\n  .am-avg-sm-2 > li {\n    width: 50%;\n  }\n  .am-avg-sm-2 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-sm-2 > li:nth-of-type(2n + 1) {\n    clear: both;\n  }\n  .am-avg-sm-3 > li {\n    width: 33.33333333%;\n  }\n  .am-avg-sm-3 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-sm-3 > li:nth-of-type(3n + 1) {\n    clear: both;\n  }\n  .am-avg-sm-4 > li {\n    width: 25%;\n  }\n  .am-avg-sm-4 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-sm-4 > li:nth-of-type(4n + 1) {\n    clear: both;\n  }\n  .am-avg-sm-5 > li {\n    width: 20%;\n  }\n  .am-avg-sm-5 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-sm-5 > li:nth-of-type(5n + 1) {\n    clear: both;\n  }\n  .am-avg-sm-6 > li {\n    width: 16.66666667%;\n  }\n  .am-avg-sm-6 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-sm-6 > li:nth-of-type(6n + 1) {\n    clear: both;\n  }\n  .am-avg-sm-7 > li {\n    width: 14.28571429%;\n  }\n  .am-avg-sm-7 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-sm-7 > li:nth-of-type(7n + 1) {\n    clear: both;\n  }\n  .am-avg-sm-8 > li {\n    width: 12.5%;\n  }\n  .am-avg-sm-8 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-sm-8 > li:nth-of-type(8n + 1) {\n    clear: both;\n  }\n  .am-avg-sm-9 > li {\n    width: 11.11111111%;\n  }\n  .am-avg-sm-9 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-sm-9 > li:nth-of-type(9n + 1) {\n    clear: both;\n  }\n  .am-avg-sm-10 > li {\n    width: 10%;\n  }\n  .am-avg-sm-10 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-sm-10 > li:nth-of-type(10n + 1) {\n    clear: both;\n  }\n  .am-avg-sm-11 > li {\n    width: 9.09090909%;\n  }\n  .am-avg-sm-11 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-sm-11 > li:nth-of-type(11n + 1) {\n    clear: both;\n  }\n  .am-avg-sm-12 > li {\n    width: 8.33333333%;\n  }\n  .am-avg-sm-12 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-sm-12 > li:nth-of-type(12n + 1) {\n    clear: both;\n  }\n}\n@media only screen and (min-width:641px) {\n  .am-avg-md-1 > li {\n    width: 100%;\n  }\n  .am-avg-md-1 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-md-1 > li:nth-of-type(1n + 1) {\n    clear: both;\n  }\n  .am-avg-md-2 > li {\n    width: 50%;\n  }\n  .am-avg-md-2 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-md-2 > li:nth-of-type(2n + 1) {\n    clear: both;\n  }\n  .am-avg-md-3 > li {\n    width: 33.33333333%;\n  }\n  .am-avg-md-3 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-md-3 > li:nth-of-type(3n + 1) {\n    clear: both;\n  }\n  .am-avg-md-4 > li {\n    width: 25%;\n  }\n  .am-avg-md-4 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-md-4 > li:nth-of-type(4n + 1) {\n    clear: both;\n  }\n  .am-avg-md-5 > li {\n    width: 20%;\n  }\n  .am-avg-md-5 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-md-5 > li:nth-of-type(5n + 1) {\n    clear: both;\n  }\n  .am-avg-md-6 > li {\n    width: 16.66666667%;\n  }\n  .am-avg-md-6 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-md-6 > li:nth-of-type(6n + 1) {\n    clear: both;\n  }\n  .am-avg-md-7 > li {\n    width: 14.28571429%;\n  }\n  .am-avg-md-7 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-md-7 > li:nth-of-type(7n + 1) {\n    clear: both;\n  }\n  .am-avg-md-8 > li {\n    width: 12.5%;\n  }\n  .am-avg-md-8 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-md-8 > li:nth-of-type(8n + 1) {\n    clear: both;\n  }\n  .am-avg-md-9 > li {\n    width: 11.11111111%;\n  }\n  .am-avg-md-9 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-md-9 > li:nth-of-type(9n + 1) {\n    clear: both;\n  }\n  .am-avg-md-10 > li {\n    width: 10%;\n  }\n  .am-avg-md-10 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-md-10 > li:nth-of-type(10n + 1) {\n    clear: both;\n  }\n  .am-avg-md-11 > li {\n    width: 9.09090909%;\n  }\n  .am-avg-md-11 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-md-11 > li:nth-of-type(11n + 1) {\n    clear: both;\n  }\n  .am-avg-md-12 > li {\n    width: 8.33333333%;\n  }\n  .am-avg-md-12 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-md-12 > li:nth-of-type(12n + 1) {\n    clear: both;\n  }\n}\n@media only screen and (min-width:1025px) {\n  .am-avg-lg-1 > li {\n    width: 100%;\n  }\n  .am-avg-lg-1 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-lg-1 > li:nth-of-type(1n + 1) {\n    clear: both;\n  }\n  .am-avg-lg-2 > li {\n    width: 50%;\n  }\n  .am-avg-lg-2 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-lg-2 > li:nth-of-type(2n + 1) {\n    clear: both;\n  }\n  .am-avg-lg-3 > li {\n    width: 33.33333333%;\n  }\n  .am-avg-lg-3 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-lg-3 > li:nth-of-type(3n + 1) {\n    clear: both;\n  }\n  .am-avg-lg-4 > li {\n    width: 25%;\n  }\n  .am-avg-lg-4 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-lg-4 > li:nth-of-type(4n + 1) {\n    clear: both;\n  }\n  .am-avg-lg-5 > li {\n    width: 20%;\n  }\n  .am-avg-lg-5 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-lg-5 > li:nth-of-type(5n + 1) {\n    clear: both;\n  }\n  .am-avg-lg-6 > li {\n    width: 16.66666667%;\n  }\n  .am-avg-lg-6 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-lg-6 > li:nth-of-type(6n + 1) {\n    clear: both;\n  }\n  .am-avg-lg-7 > li {\n    width: 14.28571429%;\n  }\n  .am-avg-lg-7 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-lg-7 > li:nth-of-type(7n + 1) {\n    clear: both;\n  }\n  .am-avg-lg-8 > li {\n    width: 12.5%;\n  }\n  .am-avg-lg-8 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-lg-8 > li:nth-of-type(8n + 1) {\n    clear: both;\n  }\n  .am-avg-lg-9 > li {\n    width: 11.11111111%;\n  }\n  .am-avg-lg-9 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-lg-9 > li:nth-of-type(9n + 1) {\n    clear: both;\n  }\n  .am-avg-lg-10 > li {\n    width: 10%;\n  }\n  .am-avg-lg-10 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-lg-10 > li:nth-of-type(10n + 1) {\n    clear: both;\n  }\n  .am-avg-lg-11 > li {\n    width: 9.09090909%;\n  }\n  .am-avg-lg-11 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-lg-11 > li:nth-of-type(11n + 1) {\n    clear: both;\n  }\n  .am-avg-lg-12 > li {\n    width: 8.33333333%;\n  }\n  .am-avg-lg-12 > li:nth-of-type(n) {\n    clear: none;\n  }\n  .am-avg-lg-12 > li:nth-of-type(12n + 1) {\n    clear: both;\n  }\n}\n/* ==========================================================================\n   Component: Code\n ============================================================================ */\n/* Inline and block code styles */\ncode,\nkbd,\npre,\nsamp {\n  font-family: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\n}\n/* Inline code */\ncode {\n  padding: 2px 4px;\n  font-size: 1.3rem;\n  color: #c7254e;\n  background-color: #f8f8f8;\n  white-space: nowrap;\n  border-radius: 0;\n}\n/* Code block */\npre {\n  display: block;\n  padding: 1rem;\n  margin: 1rem  0;\n  font-size: 1.3rem;\n  line-height: 1.6;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #555555;\n  background-color: #f8f8f8;\n  border: 1px solid #dedede;\n  border-radius: 0;\n}\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n/* Enable scrollable blocks of code */\n.am-pre-scrollable {\n  max-height: 24rem;\n  overflow-y: scroll;\n}\n/* ==========================================================================\n   Component: Button\n ============================================================================ */\n.am-btn {\n  display: inline-block;\n  margin-bottom: 0;\n  padding: 0.5em 1em;\n  vertical-align: middle;\n  font-size: 1.6rem;\n  font-weight: normal;\n  line-height: 1.2;\n  text-align: center;\n  white-space: nowrap;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 0;\n  cursor: pointer;\n  outline: none;\n  -webkit-appearance: none;\n  user-select: none;\n  transition: background-color 300ms ease-out, border-color 300ms ease-out;\n}\n.am-btn:focus,\n.am-btn:active:focus {\n  outline: thin dotted;\n  outline: 1px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.am-btn:hover,\n.am-btn:focus {\n  color: #444;\n  text-decoration: none;\n}\n.am-btn:active,\n.am-btn.am-active {\n  background-image: none;\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.15);\n}\n.am-btn.am-disabled,\n.am-btn[disabled],\nfieldset[disabled] .am-btn {\n  pointer-events: none;\n  border-color: transparent;\n  cursor: not-allowed;\n  opacity: 0.45;\n  box-shadow: none;\n}\n.am-btn.am-round {\n  border-radius: 1000px;\n}\n.am-btn.am-radius {\n  border-radius: 2px;\n}\n.am-btn-default {\n  color: #444;\n  background-color: #e6e6e6;\n  border-color: #e6e6e6;\n}\na.am-btn-default:visited {\n  color: #444;\n}\n.am-btn-default:hover,\n.am-btn-default:focus,\n.am-btn-default:active,\n.am-btn-default.am-active,\n.am-active .am-btn-default.am-dropdown-toggle {\n  color: #444;\n  border-color: #c7c7c7;\n}\n.am-btn-default:hover,\n.am-btn-default:focus {\n  background-color: #d4d4d4;\n}\n.am-btn-default:active,\n.am-btn-default.am-active,\n.am-active .am-btn-default.am-dropdown-toggle {\n  background-image: none;\n  background-color: #c2c2c2;\n}\n.am-btn-default.am-disabled,\n.am-btn-default[disabled],\nfieldset[disabled] .am-btn-default,\n.am-btn-default.am-disabled:hover,\n.am-btn-default[disabled]:hover,\nfieldset[disabled] .am-btn-default:hover,\n.am-btn-default.am-disabled:focus,\n.am-btn-default[disabled]:focus,\nfieldset[disabled] .am-btn-default:focus,\n.am-btn-default.am-disabled:active,\n.am-btn-default[disabled]:active,\nfieldset[disabled] .am-btn-default:active,\n.am-btn-default.am-disabled.am-active,\n.am-btn-default[disabled].am-active,\nfieldset[disabled] .am-btn-default.am-active {\n  background-color: #e6e6e6;\n  border-color: #e6e6e6;\n}\n.am-btn-group .am-btn-default,\n.am-btn-group-stacked .am-btn-default {\n  border-color: #d9d9d9;\n}\n.am-btn-primary {\n  color: #fff;\n  background-color: #0e90d2;\n  border-color: #0e90d2;\n}\na.am-btn-primary:visited {\n  color: #fff;\n}\n.am-btn-primary:hover,\n.am-btn-primary:focus,\n.am-btn-primary:active,\n.am-btn-primary.am-active,\n.am-active .am-btn-primary.am-dropdown-toggle {\n  color: #fff;\n  border-color: #0a6999;\n}\n.am-btn-primary:hover,\n.am-btn-primary:focus {\n  background-color: #0c79b1;\n}\n.am-btn-primary:active,\n.am-btn-primary.am-active,\n.am-active .am-btn-primary.am-dropdown-toggle {\n  background-image: none;\n  background-color: #0a628f;\n}\n.am-btn-primary.am-disabled,\n.am-btn-primary[disabled],\nfieldset[disabled] .am-btn-primary,\n.am-btn-primary.am-disabled:hover,\n.am-btn-primary[disabled]:hover,\nfieldset[disabled] .am-btn-primary:hover,\n.am-btn-primary.am-disabled:focus,\n.am-btn-primary[disabled]:focus,\nfieldset[disabled] .am-btn-primary:focus,\n.am-btn-primary.am-disabled:active,\n.am-btn-primary[disabled]:active,\nfieldset[disabled] .am-btn-primary:active,\n.am-btn-primary.am-disabled.am-active,\n.am-btn-primary[disabled].am-active,\nfieldset[disabled] .am-btn-primary.am-active {\n  background-color: #0e90d2;\n  border-color: #0e90d2;\n}\n.am-btn-group .am-btn-primary,\n.am-btn-group-stacked .am-btn-primary {\n  border-color: #0c80ba;\n}\n.am-btn-warning {\n  color: #fff;\n  background-color: #F37B1D;\n  border-color: #F37B1D;\n}\na.am-btn-warning:visited {\n  color: #fff;\n}\n.am-btn-warning:hover,\n.am-btn-warning:focus,\n.am-btn-warning:active,\n.am-btn-warning.am-active,\n.am-active .am-btn-warning.am-dropdown-toggle {\n  color: #fff;\n  border-color: #c85e0b;\n}\n.am-btn-warning:hover,\n.am-btn-warning:focus {\n  background-color: #e0690c;\n}\n.am-btn-warning:active,\n.am-btn-warning.am-active,\n.am-active .am-btn-warning.am-dropdown-toggle {\n  background-image: none;\n  background-color: #be590a;\n}\n.am-btn-warning.am-disabled,\n.am-btn-warning[disabled],\nfieldset[disabled] .am-btn-warning,\n.am-btn-warning.am-disabled:hover,\n.am-btn-warning[disabled]:hover,\nfieldset[disabled] .am-btn-warning:hover,\n.am-btn-warning.am-disabled:focus,\n.am-btn-warning[disabled]:focus,\nfieldset[disabled] .am-btn-warning:focus,\n.am-btn-warning.am-disabled:active,\n.am-btn-warning[disabled]:active,\nfieldset[disabled] .am-btn-warning:active,\n.am-btn-warning.am-disabled.am-active,\n.am-btn-warning[disabled].am-active,\nfieldset[disabled] .am-btn-warning.am-active {\n  background-color: #F37B1D;\n  border-color: #F37B1D;\n}\n.am-btn-group .am-btn-warning,\n.am-btn-group-stacked .am-btn-warning {\n  border-color: #ea6e0c;\n}\n.am-btn-danger {\n  color: #fff;\n  background-color: #dd514c;\n  border-color: #dd514c;\n}\na.am-btn-danger:visited {\n  color: #fff;\n}\n.am-btn-danger:hover,\n.am-btn-danger:focus,\n.am-btn-danger:active,\n.am-btn-danger.am-active,\n.am-active .am-btn-danger.am-dropdown-toggle {\n  color: #fff;\n  border-color: #c62b26;\n}\n.am-btn-danger:hover,\n.am-btn-danger:focus {\n  background-color: #d7342e;\n}\n.am-btn-danger:active,\n.am-btn-danger.am-active,\n.am-active .am-btn-danger.am-dropdown-toggle {\n  background-image: none;\n  background-color: #be2924;\n}\n.am-btn-danger.am-disabled,\n.am-btn-danger[disabled],\nfieldset[disabled] .am-btn-danger,\n.am-btn-danger.am-disabled:hover,\n.am-btn-danger[disabled]:hover,\nfieldset[disabled] .am-btn-danger:hover,\n.am-btn-danger.am-disabled:focus,\n.am-btn-danger[disabled]:focus,\nfieldset[disabled] .am-btn-danger:focus,\n.am-btn-danger.am-disabled:active,\n.am-btn-danger[disabled]:active,\nfieldset[disabled] .am-btn-danger:active,\n.am-btn-danger.am-disabled.am-active,\n.am-btn-danger[disabled].am-active,\nfieldset[disabled] .am-btn-danger.am-active {\n  background-color: #dd514c;\n  border-color: #dd514c;\n}\n.am-btn-group .am-btn-danger,\n.am-btn-group-stacked .am-btn-danger {\n  border-color: #d93c37;\n}\n.am-btn-success {\n  color: #fff;\n  background-color: #5eb95e;\n  border-color: #5eb95e;\n}\na.am-btn-success:visited {\n  color: #fff;\n}\n.am-btn-success:hover,\n.am-btn-success:focus,\n.am-btn-success:active,\n.am-btn-success.am-active,\n.am-active .am-btn-success.am-dropdown-toggle {\n  color: #fff;\n  border-color: #429842;\n}\n.am-btn-success:hover,\n.am-btn-success:focus {\n  background-color: #4aaa4a;\n}\n.am-btn-success:active,\n.am-btn-success.am-active,\n.am-active .am-btn-success.am-dropdown-toggle {\n  background-image: none;\n  background-color: #3f913f;\n}\n.am-btn-success.am-disabled,\n.am-btn-success[disabled],\nfieldset[disabled] .am-btn-success,\n.am-btn-success.am-disabled:hover,\n.am-btn-success[disabled]:hover,\nfieldset[disabled] .am-btn-success:hover,\n.am-btn-success.am-disabled:focus,\n.am-btn-success[disabled]:focus,\nfieldset[disabled] .am-btn-success:focus,\n.am-btn-success.am-disabled:active,\n.am-btn-success[disabled]:active,\nfieldset[disabled] .am-btn-success:active,\n.am-btn-success.am-disabled.am-active,\n.am-btn-success[disabled].am-active,\nfieldset[disabled] .am-btn-success.am-active {\n  background-color: #5eb95e;\n  border-color: #5eb95e;\n}\n.am-btn-group .am-btn-success,\n.am-btn-group-stacked .am-btn-success {\n  border-color: #4db14d;\n}\n.am-btn-secondary {\n  color: #fff;\n  background-color: #3bb4f2;\n  border-color: #3bb4f2;\n}\na.am-btn-secondary:visited {\n  color: #fff;\n}\n.am-btn-secondary:hover,\n.am-btn-secondary:focus,\n.am-btn-secondary:active,\n.am-btn-secondary.am-active,\n.am-active .am-btn-secondary.am-dropdown-toggle {\n  color: #fff;\n  border-color: #0f9ae0;\n}\n.am-btn-secondary:hover,\n.am-btn-secondary:focus {\n  background-color: #19a7f0;\n}\n.am-btn-secondary:active,\n.am-btn-secondary.am-active,\n.am-active .am-btn-secondary.am-dropdown-toggle {\n  background-image: none;\n  background-color: #0e93d7;\n}\n.am-btn-secondary.am-disabled,\n.am-btn-secondary[disabled],\nfieldset[disabled] .am-btn-secondary,\n.am-btn-secondary.am-disabled:hover,\n.am-btn-secondary[disabled]:hover,\nfieldset[disabled] .am-btn-secondary:hover,\n.am-btn-secondary.am-disabled:focus,\n.am-btn-secondary[disabled]:focus,\nfieldset[disabled] .am-btn-secondary:focus,\n.am-btn-secondary.am-disabled:active,\n.am-btn-secondary[disabled]:active,\nfieldset[disabled] .am-btn-secondary:active,\n.am-btn-secondary.am-disabled.am-active,\n.am-btn-secondary[disabled].am-active,\nfieldset[disabled] .am-btn-secondary.am-active {\n  background-color: #3bb4f2;\n  border-color: #3bb4f2;\n}\n.am-btn-group .am-btn-secondary,\n.am-btn-group-stacked .am-btn-secondary {\n  border-color: #23abf0;\n}\n/* Style links like a button */\n.am-btn-link {\n  color: #0e90d2;\n  font-weight: normal;\n  cursor: pointer;\n  border-radius: 0;\n}\n.am-btn-link,\n.am-btn-link:active,\n.am-btn-link[disabled],\nfieldset[disabled] .am-btn-link {\n  background-color: transparent;\n  box-shadow: none;\n}\n.am-btn-link,\n.am-btn-link:hover,\n.am-btn-link:focus,\n.am-btn-link:active {\n  border-color: transparent;\n}\n.am-btn-link:hover,\n.am-btn-link:focus {\n  color: #095f8a;\n  text-decoration: underline;\n  background-color: transparent;\n}\n.am-btn-link[disabled]:hover,\nfieldset[disabled] .am-btn-link:hover,\n.am-btn-link[disabled]:focus,\nfieldset[disabled] .am-btn-link:focus {\n  color: #999999;\n  text-decoration: none;\n}\n/* button size */\n.am-btn-xs {\n  font-size: 1.2rem;\n}\n.am-btn-sm {\n  font-size: 1.4rem;\n}\n.am-btn-lg {\n  font-size: 1.8rem;\n}\n.am-btn-xl {\n  font-size: 2rem;\n}\n/* Block button  */\n.am-btn-block {\n  display: block;\n  width: 100%;\n  padding-left: 0;\n  padding-right: 0;\n}\n/* Multiple block buttons vertically space */\n.am-btn-block + .am-btn-block {\n  margin-top: 5px;\n}\n/* Specificity overrides */\ninput[type=\"submit\"].am-btn-block,\ninput[type=\"reset\"].am-btn-block,\ninput[type=\"button\"].am-btn-block {\n  width: 100%;\n}\n/* Button with loading spinner */\n.am-btn.am-btn-loading .am-icon-spin {\n  margin-right: 5px;\n}\n/* ==========================================================================\n   Component: Table\n ============================================================================ */\ntable {\n  max-width: 100%;\n  background-color: transparent;\n  empty-cells: show;\n}\ntable code {\n  white-space: normal;\n}\nth {\n  text-align: left;\n}\n.am-table {\n  width: 100%;\n  margin-bottom: 1.6rem;\n  border-spacing: 0;\n  border-collapse: separate;\n}\n.am-table > thead > tr > th,\n.am-table > tbody > tr > th,\n.am-table > tfoot > tr > th,\n.am-table > thead > tr > td,\n.am-table > tbody > tr > td,\n.am-table > tfoot > tr > td {\n  padding: 0.7rem;\n  line-height: 1.6;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.am-table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 1px solid #ddd;\n}\n.am-table > caption + thead > tr:first-child > th,\n.am-table > colgroup + thead > tr:first-child > th,\n.am-table > thead:first-child > tr:first-child > th,\n.am-table > caption + thead > tr:first-child > td,\n.am-table > colgroup + thead > tr:first-child > td,\n.am-table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n.am-table > tbody + tbody tr:first-child td {\n  border-top: 2px solid #ddd;\n}\n/* Bordered version */\n.am-table-bordered {\n  border: 1px solid #ddd;\n  border-left: none;\n}\n.am-table-bordered > thead > tr > th,\n.am-table-bordered > tbody > tr > th,\n.am-table-bordered > tfoot > tr > th,\n.am-table-bordered > thead > tr > td,\n.am-table-bordered > tbody > tr > td,\n.am-table-bordered > tfoot > tr > td {\n  border-left: 1px solid #ddd;\n  /*&:first-child {\n          border-left: none;\n        }*/\n}\n.am-table-bordered > tbody > tr:first-child > th,\n.am-table-bordered > tbody > tr:first-child > td {\n  border-top: none;\n}\n.am-table-bordered > thead + tbody > tr:first-child > th,\n.am-table-bordered > thead + tbody > tr:first-child > td {\n  border-top: 1px solid #ddd;\n}\n/* Border-radius version */\n.am-table-radius {\n  border: 1px solid #ddd;\n  border-radius: 2px;\n}\n.am-table-radius > thead > tr:first-child > th:first-child,\n.am-table-radius > thead > tr:first-child > td:first-child {\n  border-top-left-radius: 2px;\n  border-left: none;\n}\n.am-table-radius > thead > tr:first-child > th:last-child,\n.am-table-radius > thead > tr:first-child > td:last-child {\n  border-top-right-radius: 2px;\n  border-right: none;\n}\n.am-table-radius > tbody > tr > th:first-child,\n.am-table-radius > tbody > tr > td:first-child {\n  border-left: none;\n}\n.am-table-radius > tbody > tr > th:last-child,\n.am-table-radius > tbody > tr > td:last-child {\n  border-right: none;\n}\n.am-table-radius > tbody > tr:last-child > th,\n.am-table-radius > tbody > tr:last-child > td {\n  border-bottom: none;\n}\n.am-table-radius > tbody > tr:last-child > th:first-child,\n.am-table-radius > tbody > tr:last-child > td:first-child {\n  border-bottom-left-radius: 2px;\n}\n.am-table-radius > tbody > tr:last-child > th:last-child,\n.am-table-radius > tbody > tr:last-child > td:last-child {\n  border-bottom-right-radius: 2px;\n}\n/* Zebra-striping */\n.am-table-striped > tbody > tr:nth-child(odd) > td,\n.am-table-striped > tbody > tr:nth-child(odd) > th {\n  background-color: #f9f9f9;\n}\n/* Hover effect */\n.am-table-hover > tbody > tr:hover > td,\n.am-table-hover > tbody > tr:hover > th {\n  background-color: #e9e9e9;\n}\n.am-table-compact > thead > tr > th,\n.am-table-compact > tbody > tr > th,\n.am-table-compact > tfoot > tr > th,\n.am-table-compact > thead > tr > td,\n.am-table-compact > tbody > tr > td,\n.am-table-compact > tfoot > tr > td {\n  padding: 0.4rem;\n}\n.am-table-centered > thead > tr > th,\n.am-table-centered > tbody > tr > th,\n.am-table-centered > tfoot > tr > th,\n.am-table-centered > thead > tr > td,\n.am-table-centered > tbody > tr > td,\n.am-table-centered > tfoot > tr > td {\n  text-align: center;\n}\n.am-table > thead > tr > td.am-active,\n.am-table > tbody > tr > td.am-active,\n.am-table > tfoot > tr > td.am-active,\n.am-table > thead > tr > th.am-active,\n.am-table > tbody > tr > th.am-active,\n.am-table > tfoot > tr > th.am-active,\n.am-table > thead > tr.am-active > td,\n.am-table > tbody > tr.am-active > td,\n.am-table > tfoot > tr.am-active > td,\n.am-table > thead > tr.am-active > th,\n.am-table > tbody > tr.am-active > th,\n.am-table > tfoot > tr.am-active > th {\n  background-color: #ffd;\n}\n.am-table > thead > tr > td.am-disabled,\n.am-table > tbody > tr > td.am-disabled,\n.am-table > tfoot > tr > td.am-disabled,\n.am-table > thead > tr > th.am-disabled,\n.am-table > tbody > tr > th.am-disabled,\n.am-table > tfoot > tr > th.am-disabled,\n.am-table > thead > tr.am-disabled > td,\n.am-table > tbody > tr.am-disabled > td,\n.am-table > tfoot > tr.am-disabled > td,\n.am-table > thead > tr.am-disabled > th,\n.am-table > tbody > tr.am-disabled > th,\n.am-table > tfoot > tr.am-disabled > th {\n  color: #999999;\n}\n.am-table > thead > tr > td.am-primary,\n.am-table > tbody > tr > td.am-primary,\n.am-table > tfoot > tr > td.am-primary,\n.am-table > thead > tr > th.am-primary,\n.am-table > tbody > tr > th.am-primary,\n.am-table > tfoot > tr > th.am-primary,\n.am-table > thead > tr.am-primary > td,\n.am-table > tbody > tr.am-primary > td,\n.am-table > tfoot > tr.am-primary > td,\n.am-table > thead > tr.am-primary > th,\n.am-table > tbody > tr.am-primary > th,\n.am-table > tfoot > tr.am-primary > th {\n  color: #0b76ac;\n  background-color: rgba(14, 144, 210, 0.115);\n}\n.am-table > thead > tr > td.am-success,\n.am-table > tbody > tr > td.am-success,\n.am-table > tfoot > tr > td.am-success,\n.am-table > thead > tr > th.am-success,\n.am-table > tbody > tr > th.am-success,\n.am-table > tfoot > tr > th.am-success,\n.am-table > thead > tr.am-success > td,\n.am-table > tbody > tr.am-success > td,\n.am-table > tfoot > tr.am-success > td,\n.am-table > thead > tr.am-success > th,\n.am-table > tbody > tr.am-success > th,\n.am-table > tfoot > tr.am-success > th {\n  color: #5eb95e;\n  background-color: rgba(94, 185, 94, 0.115);\n}\n.am-table > thead > tr > td.am-warning,\n.am-table > tbody > tr > td.am-warning,\n.am-table > tfoot > tr > td.am-warning,\n.am-table > thead > tr > th.am-warning,\n.am-table > tbody > tr > th.am-warning,\n.am-table > tfoot > tr > th.am-warning,\n.am-table > thead > tr.am-warning > td,\n.am-table > tbody > tr.am-warning > td,\n.am-table > tfoot > tr.am-warning > td,\n.am-table > thead > tr.am-warning > th,\n.am-table > tbody > tr.am-warning > th,\n.am-table > tfoot > tr.am-warning > th {\n  color: #F37B1D;\n  background-color: rgba(243, 123, 29, 0.115);\n}\n.am-table > thead > tr > td.am-danger,\n.am-table > tbody > tr > td.am-danger,\n.am-table > tfoot > tr > td.am-danger,\n.am-table > thead > tr > th.am-danger,\n.am-table > tbody > tr > th.am-danger,\n.am-table > tfoot > tr > th.am-danger,\n.am-table > thead > tr.am-danger > td,\n.am-table > tbody > tr.am-danger > td,\n.am-table > tfoot > tr.am-danger > td,\n.am-table > thead > tr.am-danger > th,\n.am-table > tbody > tr.am-danger > th,\n.am-table > tfoot > tr.am-danger > th {\n  color: #dd514c;\n  background-color: rgba(221, 81, 76, 0.115);\n}\n/* ==========================================================================\n   Component: Form\n ============================================================================ */\n/* Normalize */\nfieldset {\n  border: none;\n}\nlegend {\n  display: block;\n  width: 100%;\n  margin-bottom: 2rem;\n  font-size: 2rem;\n  line-height: inherit;\n  color: #333333;\n  border-bottom: 1px solid #e5e5e5;\n  padding-bottom: 0.5rem;\n}\nlabel {\n  display: inline-block;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\ninput[type=\"search\"] {\n  box-sizing: border-box;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  /* IE8-9 */\n  line-height: normal;\n}\ninput[type=\"file\"] {\n  display: block;\n}\nselect[multiple],\nselect[size] {\n  height: auto;\n}\nselect optgroup {\n  font-size: inherit;\n  font-style: inherit;\n  font-family: inherit;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: thin dotted;\n  outline: 1px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\ninput[type=\"number\"]::-webkit-outer-spin-button,\ninput[type=\"number\"]::-webkit-inner-spin-button {\n  height: auto;\n}\noutput {\n  display: block;\n  padding-top: 1.6rem;\n  font-size: 1.6rem;\n  line-height: 1.6;\n  color: #555555;\n  vertical-align: middle;\n}\n/* Common form controls */\n.am-form select,\n.am-form textarea,\n.am-form input[type=\"text\"],\n.am-form input[type=\"password\"],\n.am-form input[type=\"datetime\"],\n.am-form input[type=\"datetime-local\"],\n.am-form input[type=\"date\"],\n.am-form input[type=\"month\"],\n.am-form input[type=\"time\"],\n.am-form input[type=\"week\"],\n.am-form input[type=\"number\"],\n.am-form input[type=\"email\"],\n.am-form input[type=\"url\"],\n.am-form input[type=\"search\"],\n.am-form input[type=\"tel\"],\n.am-form input[type=\"color\"],\n.am-form-field {\n  display: block;\n  width: 100%;\n  padding: 0.5em;\n  font-size: 1.6rem;\n  line-height: 1.2;\n  color: #555555;\n  vertical-align: middle;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  -webkit-appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.am-form select:focus,\n.am-form textarea:focus,\n.am-form input[type=\"text\"]:focus,\n.am-form input[type=\"password\"]:focus,\n.am-form input[type=\"datetime\"]:focus,\n.am-form input[type=\"datetime-local\"]:focus,\n.am-form input[type=\"date\"]:focus,\n.am-form input[type=\"month\"]:focus,\n.am-form input[type=\"time\"]:focus,\n.am-form input[type=\"week\"]:focus,\n.am-form input[type=\"number\"]:focus,\n.am-form input[type=\"email\"]:focus,\n.am-form input[type=\"url\"]:focus,\n.am-form input[type=\"search\"]:focus,\n.am-form input[type=\"tel\"]:focus,\n.am-form input[type=\"color\"]:focus,\n.am-form-field:focus {\n  outline: 0;\n}\n.am-form select:focus,\n.am-form textarea:focus,\n.am-form input[type=\"text\"]:focus,\n.am-form input[type=\"password\"]:focus,\n.am-form input[type=\"datetime\"]:focus,\n.am-form input[type=\"datetime-local\"]:focus,\n.am-form input[type=\"date\"]:focus,\n.am-form input[type=\"month\"]:focus,\n.am-form input[type=\"time\"]:focus,\n.am-form input[type=\"week\"]:focus,\n.am-form input[type=\"number\"]:focus,\n.am-form input[type=\"email\"]:focus,\n.am-form input[type=\"url\"]:focus,\n.am-form input[type=\"search\"]:focus,\n.am-form input[type=\"tel\"]:focus,\n.am-form input[type=\"color\"]:focus,\n.am-form-field:focus {\n  background-color: #fefffe;\n  border-color: #3bb4f2;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 5px rgba(59, 180, 242, 0.3);\n}\n.am-form select::placeholder,\n.am-form textarea::placeholder,\n.am-form input[type=\"text\"]::placeholder,\n.am-form input[type=\"password\"]::placeholder,\n.am-form input[type=\"datetime\"]::placeholder,\n.am-form input[type=\"datetime-local\"]::placeholder,\n.am-form input[type=\"date\"]::placeholder,\n.am-form input[type=\"month\"]::placeholder,\n.am-form input[type=\"time\"]::placeholder,\n.am-form input[type=\"week\"]::placeholder,\n.am-form input[type=\"number\"]::placeholder,\n.am-form input[type=\"email\"]::placeholder,\n.am-form input[type=\"url\"]::placeholder,\n.am-form input[type=\"search\"]::placeholder,\n.am-form input[type=\"tel\"]::placeholder,\n.am-form input[type=\"color\"]::placeholder,\n.am-form-field::placeholder {\n  color: #999999;\n}\n.am-form select::-moz-placeholder,\n.am-form textarea::-moz-placeholder,\n.am-form input[type=\"text\"]::-moz-placeholder,\n.am-form input[type=\"password\"]::-moz-placeholder,\n.am-form input[type=\"datetime\"]::-moz-placeholder,\n.am-form input[type=\"datetime-local\"]::-moz-placeholder,\n.am-form input[type=\"date\"]::-moz-placeholder,\n.am-form input[type=\"month\"]::-moz-placeholder,\n.am-form input[type=\"time\"]::-moz-placeholder,\n.am-form input[type=\"week\"]::-moz-placeholder,\n.am-form input[type=\"number\"]::-moz-placeholder,\n.am-form input[type=\"email\"]::-moz-placeholder,\n.am-form input[type=\"url\"]::-moz-placeholder,\n.am-form input[type=\"search\"]::-moz-placeholder,\n.am-form input[type=\"tel\"]::-moz-placeholder,\n.am-form input[type=\"color\"]::-moz-placeholder,\n.am-form-field::-moz-placeholder {\n  opacity: 1;\n}\n.am-form select[disabled],\n.am-form textarea[disabled],\n.am-form input[type=\"text\"][disabled],\n.am-form input[type=\"password\"][disabled],\n.am-form input[type=\"datetime\"][disabled],\n.am-form input[type=\"datetime-local\"][disabled],\n.am-form input[type=\"date\"][disabled],\n.am-form input[type=\"month\"][disabled],\n.am-form input[type=\"time\"][disabled],\n.am-form input[type=\"week\"][disabled],\n.am-form input[type=\"number\"][disabled],\n.am-form input[type=\"email\"][disabled],\n.am-form input[type=\"url\"][disabled],\n.am-form input[type=\"search\"][disabled],\n.am-form input[type=\"tel\"][disabled],\n.am-form input[type=\"color\"][disabled],\n.am-form-field[disabled],\n.am-form select[readonly],\n.am-form textarea[readonly],\n.am-form input[type=\"text\"][readonly],\n.am-form input[type=\"password\"][readonly],\n.am-form input[type=\"datetime\"][readonly],\n.am-form input[type=\"datetime-local\"][readonly],\n.am-form input[type=\"date\"][readonly],\n.am-form input[type=\"month\"][readonly],\n.am-form input[type=\"time\"][readonly],\n.am-form input[type=\"week\"][readonly],\n.am-form input[type=\"number\"][readonly],\n.am-form input[type=\"email\"][readonly],\n.am-form input[type=\"url\"][readonly],\n.am-form input[type=\"search\"][readonly],\n.am-form input[type=\"tel\"][readonly],\n.am-form input[type=\"color\"][readonly],\n.am-form-field[readonly],\nfieldset[disabled] .am-form select,\nfieldset[disabled] .am-form textarea,\nfieldset[disabled] .am-form input[type=\"text\"],\nfieldset[disabled] .am-form input[type=\"password\"],\nfieldset[disabled] .am-form input[type=\"datetime\"],\nfieldset[disabled] .am-form input[type=\"datetime-local\"],\nfieldset[disabled] .am-form input[type=\"date\"],\nfieldset[disabled] .am-form input[type=\"month\"],\nfieldset[disabled] .am-form input[type=\"time\"],\nfieldset[disabled] .am-form input[type=\"week\"],\nfieldset[disabled] .am-form input[type=\"number\"],\nfieldset[disabled] .am-form input[type=\"email\"],\nfieldset[disabled] .am-form input[type=\"url\"],\nfieldset[disabled] .am-form input[type=\"search\"],\nfieldset[disabled] .am-form input[type=\"tel\"],\nfieldset[disabled] .am-form input[type=\"color\"],\nfieldset[disabled] .am-form-field {\n  cursor: not-allowed;\n  background-color: #eeeeee;\n}\n.am-form select.am-radius,\n.am-form textarea.am-radius,\n.am-form input[type=\"text\"].am-radius,\n.am-form input[type=\"password\"].am-radius,\n.am-form input[type=\"datetime\"].am-radius,\n.am-form input[type=\"datetime-local\"].am-radius,\n.am-form input[type=\"date\"].am-radius,\n.am-form input[type=\"month\"].am-radius,\n.am-form input[type=\"time\"].am-radius,\n.am-form input[type=\"week\"].am-radius,\n.am-form input[type=\"number\"].am-radius,\n.am-form input[type=\"email\"].am-radius,\n.am-form input[type=\"url\"].am-radius,\n.am-form input[type=\"search\"].am-radius,\n.am-form input[type=\"tel\"].am-radius,\n.am-form input[type=\"color\"].am-radius,\n.am-form-field.am-radius {\n  border-radius: 2px;\n}\n.am-form select.am-round,\n.am-form textarea.am-round,\n.am-form input[type=\"text\"].am-round,\n.am-form input[type=\"password\"].am-round,\n.am-form input[type=\"datetime\"].am-round,\n.am-form input[type=\"datetime-local\"].am-round,\n.am-form input[type=\"date\"].am-round,\n.am-form input[type=\"month\"].am-round,\n.am-form input[type=\"time\"].am-round,\n.am-form input[type=\"week\"].am-round,\n.am-form input[type=\"number\"].am-round,\n.am-form input[type=\"email\"].am-round,\n.am-form input[type=\"url\"].am-round,\n.am-form input[type=\"search\"].am-round,\n.am-form input[type=\"tel\"].am-round,\n.am-form input[type=\"color\"].am-round,\n.am-form-field.am-round {\n  border-radius: 1000px;\n}\n.am-form textarea,\n.am-form select[multiple],\n.am-form select[size] {\n  height: auto;\n}\n.am-form select {\n  -webkit-appearance: none !important;\n  -moz-appearance: none !important;\n  -webkit-border-radius: 0;\n  background: #fff url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMTJweCIgeT0iMHB4IiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIzcHgiIHZpZXdCb3g9IjAgMCA2IDMiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDYgMyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBvbHlnb24gcG9pbnRzPSI1Ljk5MiwwIDIuOTkyLDMgLTAuMDA4LDAgIi8+PC9zdmc+') no-repeat 100% center;\n}\n.am-form select[multiple=\"multiple\"] {\n  background-image: none;\n}\n/* help text */\n.am-form-help {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #999999;\n  font-size: 1.3rem;\n}\n/* form group */\n.am-form-group {\n  margin-bottom: 1.5rem;\n}\n/* file field */\n.am-form-file {\n  position: relative;\n  overflow: hidden;\n}\n.am-form-file input[type=\"file\"] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  width: 100%;\n  opacity: 0;\n  cursor: pointer;\n  font-size: 50rem;\n}\n/**\n * Checkboxes and radios\n * Indent the labels to position radios/checkboxes as hanging controls.\n*/\n.am-radio,\n.am-checkbox {\n  display: block;\n  min-height: 1.92rem;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding-left: 20px;\n  vertical-align: middle;\n}\n.am-radio label,\n.am-checkbox label {\n  display: inline;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n.am-radio input[type=\"radio\"],\n.am-radio-inline input[type=\"radio\"],\n.am-checkbox input[type=\"checkbox\"],\n.am-checkbox-inline input[type=\"checkbox\"] {\n  float: left;\n  margin-left: -20px;\n  outline: none;\n}\n.am-radio + .am-radio,\n.am-checkbox + .am-checkbox {\n  margin-top: -5px;\n}\n/* Radios and checkboxes inline */\n.am-radio-inline,\n.am-checkbox-inline {\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer;\n}\n.am-radio-inline + .am-radio-inline,\n.am-checkbox-inline + .am-checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\ninput[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\n.am-radio[disabled],\n.am-radio-inline[disabled],\n.am-checkbox[disabled],\n.am-checkbox-inline[disabled],\nfieldset[disabled] input[type=\"radio\"],\nfieldset[disabled] input[type=\"checkbox\"],\nfieldset[disabled] .am-radio,\nfieldset[disabled] .am-radio-inline,\nfieldset[disabled] .am-checkbox,\nfieldset[disabled] .am-checkbox-inline {\n  cursor: not-allowed;\n}\n/* Form field feedback states */\n.am-form-warning .am-form-help,\n.am-form-warning .am-form-label,\n.am-form-warning .am-radio,\n.am-form-warning .am-checkbox,\n.am-form-warning .am-radio-inline,\n.am-form-warning .am-checkbox-inline,\n.am-form-warning label {\n  color: #F37B1D;\n}\n.am-form-warning [class*=\"icon-\"] {\n  color: #F37B1D;\n}\n.am-form-warning .am-form-field {\n  border-color: #F37B1D !important;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.am-form-warning .am-form-field:focus {\n  background-color: #fefffe;\n  border-color: #d2620b;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 5px #f8b47e !important;\n}\n.am-form-error .am-form-help,\n.am-form-error .am-form-label,\n.am-form-error .am-radio,\n.am-form-error .am-checkbox,\n.am-form-error .am-radio-inline,\n.am-form-error .am-checkbox-inline,\n.am-form-error label {\n  color: #dd514c;\n}\n.am-form-error [class*=\"icon-\"] {\n  color: #dd514c;\n}\n.am-form-error .am-form-field,\n.am-field-error {\n  border-color: #dd514c !important;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.am-form-error .am-form-field:focus,\n.am-field-error:focus {\n  background-color: #fefffe;\n  border-color: #cf2d27;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 5px #eda4a2 !important;\n}\n.am-form-success .am-form-help,\n.am-form-success .am-form-label,\n.am-form-success .am-radio,\n.am-form-success .am-checkbox,\n.am-form-success .am-radio-inline,\n.am-form-success .am-checkbox-inline,\n.am-form-success label {\n  color: #5eb95e;\n}\n.am-form-success [class*=\"icon-\"] {\n  color: #5eb95e;\n}\n.am-form-success .am-form-field,\n.am-field-valid {\n  border-color: #5eb95e !important;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.am-form-success .am-form-field:focus,\n.am-field-valid:focus {\n  background-color: #fefffe;\n  border-color: #459f45;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 5px #a5d8a5 !important;\n}\n/* Horizontal forms */\n.am-form-horizontal .am-form-label,\n.am-form-horizontal .am-radio,\n.am-form-horizontal .am-checkbox,\n.am-form-horizontal .am-radio-inline,\n.am-form-horizontal .am-checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 0.6em;\n}\n.am-form-horizontal .am-form-group:before,\n.am-form-horizontal .am-form-group:after {\n  content: \" \";\n  display: table;\n}\n.am-form-horizontal .am-form-group:after {\n  clear: both;\n}\n@media only screen and (min-width:641px) {\n  .am-form-horizontal .am-form-label {\n    text-align: right;\n  }\n}\n/* Inline form elements */\n@media only screen and (min-width:641px) {\n  .am-form-inline .am-form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .am-form-inline .am-form-field {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .am-form-inline .am-input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .am-form-inline .am-input-group .am-input-group-label,\n  .am-form-inline .am-input-group .am-input-group-btn,\n  .am-form-inline .am-input-group .am-form-label {\n    width: auto;\n  }\n  .am-form-inline .am-input-group > .am-form-field {\n    width: 100%;\n  }\n  .am-form-inline .am-form-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .am-form-inline .am-radio,\n  .am-form-inline .am-checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-left: 0;\n    vertical-align: middle;\n  }\n  .am-form-inline .am-radio input[type=\"radio\"],\n  .am-form-inline .am-checkbox input[type=\"checkbox\"] {\n    float: none;\n    margin-left: 0;\n  }\n}\n/* Form field size */\n.am-input-sm {\n  font-size: 1.4rem !important;\n}\n.am-input-lg {\n  font-size: 1.8rem !important;\n}\n.am-form-group-sm .am-checkbox,\n.am-form-group-sm .am-radio,\n.am-form-group-sm .am-form-label,\n.am-form-group-sm .am-form-field {\n  font-size: 1.4rem !important;\n}\n.am-form-group-lg .am-checkbox,\n.am-form-group-lg .am-radio,\n.am-form-group-lg .am-form-label,\n.am-form-group-lg .am-form-field {\n  font-size: 1.8rem !important;\n}\n.am-form-group-lg input[type=\"radio\"],\n.am-form-group-lg input[type=\"checkbox\"] {\n  margin-top: 7px;\n}\n/* Form field feedback states */\n.am-form-icon {\n  position: relative;\n}\n.am-form-icon .am-form-field {\n  padding-left: 1.75em !important;\n}\n.am-form-icon [class*='am-icon-'] {\n  position: absolute;\n  left: 0.5em;\n  top: 50%;\n  display: block;\n  margin-top: -0.5em;\n  line-height: 1;\n  z-index: 2;\n}\n.am-form-icon label ~ [class*='am-icon-'] {\n  top: 70%;\n}\n/* Feedback Icon */\n.am-form-feedback {\n  position: relative;\n}\n.am-form-feedback .am-form-field {\n  padding-left: 0.5em !important;\n  padding-right: 1.75em !important;\n}\n.am-form-feedback [class*='am-icon-'] {\n  right: 0.5em;\n  left: auto;\n}\n.am-form-horizontal .am-form-feedback [class*='am-icon-'] {\n  right: 1.6em;\n}\n/* Form set */\n.am-form-set {\n  margin-bottom: 1.5rem;\n  padding: 0;\n}\n.am-form-set > input {\n  position: relative;\n  top: -1px;\n  border-radius: 0 !important;\n}\n.am-form-set > input:focus {\n  z-index: 2;\n}\n.am-form-set > input:first-child {\n  top: 1px;\n  border-top-right-radius: 0 !important;\n  border-top-left-radius: 0 !important;\n}\n.am-form-set > input:last-child {\n  top: -2px;\n  border-bottom-right-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n/* ==========================================================================\n   Component: Image\n ============================================================================ */\n/* Image thumbnails */\n.am-img-thumbnail {\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n  padding: 2px;\n  line-height: 1.6;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0;\n  transition: all 0.2s ease-in-out;\n}\n.am-img-thumbnail.am-radius {\n  border-radius: 2px;\n}\n.am-img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n/* ==========================================================================\n   Component: Nav\n ============================================================================ */\n.am-nav {\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n}\n.am-nav:before,\n.am-nav:after {\n  content: \" \";\n  display: table;\n}\n.am-nav:after {\n  clear: both;\n}\n.am-nav > li {\n  position: relative;\n  display: block;\n}\n.am-nav > li + li {\n  margin-top: 5px;\n}\n.am-nav > li + .am-nav-header {\n  margin-top: 1em;\n}\n.am-nav > li > a {\n  position: relative;\n  display: block;\n  padding: 0.4em 1em;\n  border-radius: 0;\n}\n.am-nav > li > a:hover,\n.am-nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n.am-nav > li.am-active > a,\n.am-nav > li.am-active > a:hover,\n.am-nav > li.am-active > a:focus {\n  color: #fff;\n  background-color: #0e90d2;\n  cursor: default;\n}\n.am-nav > li.am-disabled > a {\n  color: #999999;\n}\n.am-nav > li.am-disabled > a:hover,\n.am-nav > li.am-disabled > a:focus {\n  color: #999999;\n  text-decoration: none;\n  background-color: transparent;\n  cursor: not-allowed;\n}\n.am-nav-header {\n  padding: 0.4em 1em;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 100%;\n  color: #555555;\n}\n.am-nav-divider {\n  margin: 15px 1em !important;\n  border-top: 1px solid #ddd;\n  box-shadow: 0 1px 0 #fff;\n}\n.am-nav-pills > li {\n  float: left;\n}\n.am-nav-pills > li + li {\n  margin-left: 5px;\n  margin-top: 0;\n}\n.am-nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n.am-nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n.am-nav-tabs > li + li {\n  margin-top: 0;\n}\n.am-nav-tabs > li > a {\n  margin-right: 5px;\n  line-height: 1.6;\n  border: 1px solid transparent;\n  border-radius: 0 0 0 0;\n}\n.am-nav-tabs > li > a:hover {\n  border-color: #eeeeee #eeeeee #ddd;\n}\n.am-nav-tabs > li.am-active > a,\n.am-nav-tabs > li.am-active > a:hover,\n.am-nav-tabs > li.am-active > a:focus {\n  color: #555555;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n  cursor: default;\n}\n.am-nav-tabs.am-nav-justify {\n  border-bottom: 0;\n  /*  > li > a {\n      margin-right: 0;\n      border-radius: @global-radius;\n    }\n\n    > .am-active > a {\n      &,\n      &:hover,\n      &:focus {\n        border: 1px solid @nav-tabs-justify-link-border-color;\n      }\n    }*/\n}\n.am-nav-tabs.am-nav-justify > li > a {\n  margin-right: 0;\n  border-bottom: 1px solid #ddd;\n  border-radius: 0 0 0 0;\n}\n.am-nav-tabs.am-nav-justify > .am-active > a,\n.am-nav-tabs.am-nav-justify > .am-active > a:hover,\n.am-nav-tabs.am-nav-justify > .am-active > a:focus {\n  border-bottom-color: #fff;\n}\n.am-nav-justify {\n  width: 100%;\n  display: table;\n}\n.am-nav-justify > li {\n  float: none;\n  display: table-cell;\n  width: 1%;\n}\n.am-nav-justify > li > a {\n  text-align: center;\n  margin-bottom: 0;\n}\n.lte9 .am-nav-justify > li {\n  display: table-cell;\n  width: 1%;\n}\n/* ==========================================================================\n   Component: Topbar\n ============================================================================ */\n.am-topbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 1.6rem;\n  background: #f8f8f8;\n  border-width: 0 0 1px;\n  border-style: solid;\n  border-color: #ddd;\n  color: #666;\n}\n.am-topbar:before,\n.am-topbar:after {\n  content: \" \";\n  display: table;\n}\n.am-topbar:after {\n  clear: both;\n}\n.am-topbar a {\n  color: #666;\n}\n.am-topbar-brand {\n  margin: 0;\n}\n@media only screen and (min-width:641px) {\n  .am-topbar-brand {\n    float: left;\n  }\n}\n.am-topbar-brand a:hover {\n  color: #4d4d4d;\n}\n.am-topbar-collapse {\n  width: 100%;\n  overflow-x: visible;\n  padding: 10px;\n  clear: both;\n  -webkit-overflow-scrolling: touch;\n}\n.am-topbar-collapse:before,\n.am-topbar-collapse:after {\n  content: \" \";\n  display: table;\n}\n.am-topbar-collapse:after {\n  clear: both;\n}\n.am-topbar-collapse.am-in {\n  overflow-y: auto;\n}\n@media only screen and (min-width:641px) {\n  .am-topbar-collapse {\n    margin-top: 0;\n    padding: 0;\n    width: auto;\n    clear: none;\n  }\n  .am-topbar-collapse.am-collapse {\n    display: block !important;\n    height: auto !important;\n    padding: 0;\n    overflow: visible !important;\n  }\n  .am-topbar-collapse.am-in {\n    overflow-y: visible;\n  }\n}\n.am-topbar-brand {\n  padding: 0 10px;\n  float: left;\n  font-size: 1.8rem;\n  height: 50px;\n  line-height: 50px;\n}\n.am-topbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 10px;\n}\n@media only screen and (min-width:641px) {\n  .am-topbar-toggle {\n    display: none;\n  }\n}\n@media only screen and (max-width: 640px) {\n  .am-topbar-nav {\n    margin-bottom: 8px;\n  }\n  .am-topbar-nav > li {\n    float: none;\n  }\n}\n@media only screen and (max-width: 640px) {\n  .am-topbar-nav > li + li {\n    margin-left: 0;\n    margin-top: 5px;\n  }\n}\n@media only screen and (min-width:641px) {\n  .am-topbar-nav {\n    float: left;\n  }\n  .am-topbar-nav > li > a {\n    position: relative;\n    line-height: 50px;\n    padding: 0 10px;\n  }\n  .am-topbar-nav > li > a:after {\n    position: absolute;\n    left: 50%;\n    margin-left: -7px;\n    bottom: -1px;\n    content: \"\";\n    display: inline-block;\n    width: 0;\n    height: 0;\n    vertical-align: middle;\n    border-bottom: 7px solid #f8f8f8;\n    border-right: 7px solid transparent;\n    border-left: 7px solid transparent;\n    border-top: 0 dotted;\n    transform: rotate(360deg);\n    opacity: 0;\n    transition: opacity .1s;\n  }\n  .am-topbar-nav > li > a:hover:after {\n    opacity: 1;\n    border-bottom-color: #666;\n  }\n  .am-topbar-nav > li.am-dropdown > a:after {\n    display: none;\n  }\n  .am-topbar-nav > li.am-active > a,\n  .am-topbar-nav > li.am-active > a:hover,\n  .am-topbar-nav > li.am-active > a:focus {\n    border-radius: 0;\n    color: #0e90d2;\n    background: none;\n  }\n  .am-topbar-nav > li.am-active > a:after {\n    opacity: 1;\n    border-bottom-color: #0e90d2;\n  }\n}\n@media only screen and (max-width: 640px) {\n  .am-topbar-collapse .am-dropdown.am-active .am-dropdown-content {\n    float: none;\n    position: relative;\n    width: 100%;\n  }\n}\n@media only screen and (min-width:641px) {\n  .am-topbar-left {\n    float: left;\n  }\n  .am-topbar-right {\n    float: right;\n    margin-right: 10px;\n  }\n}\n@media only screen and (max-width: 640px) {\n  .am-topbar-form .am-form-group {\n    margin-bottom: 5px;\n  }\n}\n@media only screen and (min-width:641px) {\n  .am-topbar-form {\n    padding: 0 10px;\n    margin-top: 8px;\n  }\n  .am-topbar-form .am-form-group + .am-btn {\n    margin-left: 5px;\n  }\n}\n.am-topbar-btn {\n  margin-top: 8px;\n}\n@media only screen and (max-width: 640px) {\n  .am-topbar-collapse .am-topbar-btn,\n  .am-topbar-collapse .am-btn {\n    display: block;\n    width: 100%;\n  }\n}\n.am-topbar-inverse {\n  background-color: #0e90d2;\n  border-color: #0b6fa2;\n  color: #eeeeee;\n}\n.am-topbar-inverse a {\n  color: #eeeeee;\n}\n.am-topbar-inverse .am-topbar-brand a {\n  color: #fff;\n}\n.am-topbar-inverse .am-topbar-brand a:hover,\n.am-topbar-inverse .am-topbar-brand a:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.am-topbar-inverse .am-topbar-nav > li > a {\n  color: #eeeeee;\n}\n.am-topbar-inverse .am-topbar-nav > li > a:hover,\n.am-topbar-inverse .am-topbar-nav > li > a:focus {\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.am-topbar-inverse .am-topbar-nav > li > a:hover:after,\n.am-topbar-inverse .am-topbar-nav > li > a:focus:after {\n  border-bottom-color: #0b6fa2;\n}\n.am-topbar-inverse .am-topbar-nav > li > a:after {\n  border-bottom-color: #0e90d2;\n}\n.am-topbar-inverse .am-topbar-nav > li.am-active > a,\n.am-topbar-inverse .am-topbar-nav > li.am-active > a:hover,\n.am-topbar-inverse .am-topbar-nav > li.am-active > a:focus {\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.am-topbar-inverse .am-topbar-nav > li.am-active > a:after,\n.am-topbar-inverse .am-topbar-nav > li.am-active > a:hover:after,\n.am-topbar-inverse .am-topbar-nav > li.am-active > a:focus:after {\n  border-bottom-color: #fff;\n}\n.am-topbar-inverse .am-topbar-nav > li .disabled > a,\n.am-topbar-inverse .am-topbar-nav > li .disabled > a:hover,\n.am-topbar-inverse .am-topbar-nav > li .disabled > a:focus {\n  color: #444;\n  background-color: transparent;\n}\n.am-topbar-fixed-top,\n.am-topbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1000;\n  transform: translate3d(0, 0, 0);\n}\n.am-topbar-fixed-top {\n  top: 0;\n}\n.am-topbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n.am-with-topbar-fixed-top {\n  padding-top: 51px;\n}\n.am-with-topbar-fixed-bottom {\n  padding-bottom: 51px;\n}\n@media only screen and (max-width: 640px) {\n  .am-topbar-fixed-bottom .am-topbar-collapse {\n    position: absolute;\n    bottom: 100%;\n    margin-bottom: 1px;\n    background-color: #f8f8f8;\n  }\n  .am-topbar-fixed-bottom .am-topbar-collapse .am-dropdown-content:before,\n  .am-topbar-fixed-bottom .am-topbar-collapse .am-dropdown-content:after {\n    display: none;\n  }\n  .am-topbar-fixed-bottom.am-topbar-inverse .am-topbar-collapse {\n    background-color: #0e90d2;\n  }\n}\n/* ==========================================================================\n   Component: Breadcrumb\n ============================================================================ */\n.am-breadcrumb {\n  padding: .7em .5em;\n  margin-bottom: 2rem;\n  list-style: none;\n  background-color: transparent;\n  border-radius: 0;\n  font-size: 85%;\n}\n.am-breadcrumb > li {\n  display: inline-block;\n}\n.am-breadcrumb > li [class*=\"am-icon-\"]:before {\n  color: #999999;\n  margin-right: 5px;\n}\n.am-breadcrumb > li + li:before {\n  content: \"\\BB\\A0\";\n  padding: 0 8px;\n  color: #ccc;\n}\n.am-breadcrumb > .am-active {\n  color: #999999;\n}\n.am-breadcrumb-slash > li + li:before {\n  content: \"/\\A0\";\n}\n/* ==========================================================================\n   Component: Pagination\n ============================================================================ */\n.am-pagination {\n  padding-left: 0;\n  margin: 1.5rem 0;\n  list-style: none;\n  color: #999999;\n  text-align: left;\n}\n.am-pagination:before,\n.am-pagination:after {\n  content: \" \";\n  display: table;\n}\n.am-pagination:after {\n  clear: both;\n}\n.am-pagination > li {\n  display: inline-block;\n}\n.am-pagination > li > a,\n.am-pagination > li > span {\n  position: relative;\n  display: block;\n  padding: 0.5em 1em;\n  text-decoration: none;\n  line-height: 1.2;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0;\n  margin-bottom: 5px;\n  margin-right: 5px;\n}\n.am-pagination > li:last-child > a,\n.am-pagination > li:last-child > span {\n  margin-right: 0;\n}\n.am-pagination > li > a:hover,\n.am-pagination > li > span:hover,\n.am-pagination > li > a:focus,\n.am-pagination > li > span:focus {\n  background-color: #eeeeee;\n}\n.am-pagination > .am-active > a,\n.am-pagination > .am-active > span,\n.am-pagination > .am-active > a:hover,\n.am-pagination > .am-active > span:hover,\n.am-pagination > .am-active > a:focus,\n.am-pagination > .am-active > span:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #0e90d2;\n  border-color: #0e90d2;\n  cursor: default;\n}\n.am-pagination > .am-disabled > span,\n.am-pagination > .am-disabled > span:hover,\n.am-pagination > .am-disabled > span:focus,\n.am-pagination > .am-disabled > a,\n.am-pagination > .am-disabled > a:hover,\n.am-pagination > .am-disabled > a:focus {\n  color: #999999;\n  background-color: #fff;\n  border-color: #ddd;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.am-pagination .am-pagination-prev {\n  float: left;\n}\n.am-pagination .am-pagination-prev a {\n  border-radius: 0;\n}\n.am-pagination .am-pagination-next {\n  float: right;\n}\n.am-pagination .am-pagination-next a {\n  border-radius: 0;\n}\n.am-pagination-centered {\n  text-align: center;\n}\n.am-pagination-right {\n  text-align: right;\n}\n/* ==========================================================================\n   Component: Aniamtion\n ============================================================================ */\n[class*=\"am-animation-\"] {\n  animation-duration: 0.5s;\n  animation-timing-function: ease-out;\n  animation-fill-mode: both;\n}\n/* Hide animated element if scrollSpy is used */\n@media screen {\n  .cssanimations [data-am-scrollspy*=\"animation\"] {\n    opacity: 0;\n  }\n}\n/* Fade */\n.am-animation-fade {\n  animation-name: am-fade;\n  animation-duration: 0.8s;\n  animation-timing-function: linear;\n}\n/* Scale */\n.am-animation-scale-up {\n  animation-name: am-scale-up;\n}\n.am-animation-scale-down {\n  animation-name: am-scale-down;\n}\n/* Slide */\n.am-animation-slide-top {\n  animation-name: am-slide-top;\n}\n.am-animation-slide-bottom {\n  animation-name: am-slide-bottom;\n}\n.am-animation-slide-left {\n  animation-name: am-slide-left;\n}\n.am-animation-slide-right {\n  animation-name: am-slide-right;\n}\n.am-animation-slide-top-fixed {\n  animation-name: am-slide-top-fixed;\n}\n/* Shake */\n.am-animation-shake {\n  animation-name: am-shake;\n}\n/* Spin */\n.am-animation-spin {\n  animation: am-spin 2s infinite linear;\n}\n/* Spring */\n.am-animation-left-spring {\n  animation: am-left-spring 0.3s ease-in-out;\n}\n.am-animation-right-spring {\n  animation: am-right-spring 0.3s ease-in-out;\n}\n.am-animation-reverse {\n  animation-direction: reverse;\n}\n.am-animation-paused {\n  animation-play-state: paused !important;\n}\n.am-animation-delay-1 {\n  animation-delay: 1s;\n}\n.am-animation-delay-2 {\n  animation-delay: 2s;\n}\n.am-animation-delay-3 {\n  animation-delay: 3s;\n}\n.am-animation-delay-4 {\n  animation-delay: 4s;\n}\n.am-animation-delay-5 {\n  animation-delay: 5s;\n}\n.am-animation-delay-6 {\n  animation-delay: 6s;\n}\n/* Keyframes\n ============================================================================ */\n/* Fade */\n@keyframes am-fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/* Scale up */\n@keyframes am-scale-up {\n  0% {\n    opacity: 0;\n    transform: scale(0.2);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/* Scale down */\n@keyframes am-scale-down {\n  0% {\n    opacity: 0;\n    transform: scale(1.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/* Slide top */\n@keyframes am-slide-top {\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/* Slide bottom */\n@keyframes am-slide-bottom {\n  0% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/* Slide left */\n@keyframes am-slide-left {\n  0% {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/* Slide right */\n@keyframes am-slide-right {\n  0% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/* Shake */\n@keyframes am-shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  10% {\n    transform: translateX(-9px);\n  }\n  20% {\n    transform: translateX(8px);\n  }\n  30% {\n    transform: translateX(-7px);\n  }\n  40% {\n    transform: translateX(6px);\n  }\n  50% {\n    transform: translateX(-5px);\n  }\n  60% {\n    transform: translateX(4px);\n  }\n  70% {\n    transform: translateX(-3px);\n  }\n  80% {\n    transform: translateX(2px);\n  }\n  90% {\n    transform: translateX(-1px);\n  }\n}\n/* Slide top fixed */\n@keyframes am-slide-top-fixed {\n  0% {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/* Slide bottom fixed */\n@keyframes am-slide-bottom-fixed {\n  0% {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/* Spin */\n@keyframes am-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n/* Spring */\n@keyframes am-right-spring {\n  0% {\n    transform: translateX(0);\n  }\n  50% {\n    transform: translateX(-20%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n@keyframes am-left-spring {\n  0% {\n    transform: translateX(0);\n  }\n  50% {\n    transform: translateX(20%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n/* ==========================================================================\n   Component: Article\n ============================================================================ */\n.am-article:before,\n.am-article:after {\n  content: \" \";\n  display: table;\n}\n.am-article:after {\n  clear: both;\n}\n.am-article > :last-child {\n  margin-bottom: 0;\n}\n.am-article + .am-article {\n  margin-top: 2.4rem;\n}\n/* Sub-object `.@{ns}article-title` */\n.am-article-title {\n  font-size: 2.8rem;\n  line-height: 1.15;\n  font-weight: normal;\n}\n.am-article-title a {\n  color: inherit;\n  text-decoration: none;\n}\n/* Sub-object `.@{ns}article-meta` */\n.am-article-meta {\n  font-size: 1.2rem;\n  line-height: 1.5;\n  color: #999999;\n}\n/* Sub-object `.@{ns}article-lead` */\n.am-article-lead {\n  color: #666;\n  font-size: 1.4rem;\n  line-height: 1.5;\n  border: 1px solid #dedede;\n  border-radius: 2px;\n  background: #f9f9f9;\n  padding: 10px;\n}\n/* Sub-object `.@{ns}article-divider` */\n.am-article-divider {\n  margin-bottom: 2.4rem;\n  border-color: #eeeeee;\n}\n* + .am-article-divider {\n  margin-top: 2.4rem;\n}\n/* Sub-object `.@{ns}article-bd` */\n.am-article-bd blockquote {\n  font-family: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, \"FontAwesome\", serif;\n}\n.am-article-bd img {\n  display: block;\n  max-width: 100%;\n}\n/* ==========================================================================\n   Component: Badge\n ============================================================================ */\n.am-badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 0.25em 0.625em;\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: #fff;\n  line-height: 1;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #999999;\n  border-radius: 0;\n}\n.am-badge:empty {\n  display: none;\n}\n.am-badge.am-square {\n  border-radius: 0;\n}\n.am-badge.am-radius {\n  border-radius: 2px;\n}\n.am-badge.am-round {\n  border-radius: 1000px;\n}\na.am-badge:hover,\na.am-badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.am-badge-primary {\n  background-color: #0e90d2;\n}\n.am-badge-secondary {\n  background-color: #3bb4f2;\n}\n.am-badge-success {\n  background-color: #5eb95e;\n}\n.am-badge-warning {\n  background-color: #F37B1D;\n}\n.am-badge-danger {\n  background-color: #dd514c;\n}\n/* ==========================================================================\n   Component: Comment\n ============================================================================ */\n.am-comment:before,\n.am-comment:after {\n  content: \" \";\n  display: table;\n}\n.am-comment:after {\n  clear: both;\n}\n.am-comment-avatar {\n  float: left;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 1px solid transparent;\n}\n@media only screen and (min-width:641px) {\n  .am-comment-avatar {\n    width: 48px;\n    height: 48px;\n  }\n}\n.am-comment-main {\n  position: relative;\n  margin-left: 42px;\n  border: 1px solid #dedede;\n  border-radius: 0;\n}\n.am-comment-main:before,\n.am-comment-main:after {\n  position: absolute;\n  top: 10px;\n  left: -8px;\n  right: 100%;\n  width: 0;\n  height: 0;\n  display: block;\n  content: \" \";\n  border-color: transparent;\n  border-style: solid solid outset;\n  border-width: 8px 8px 8px 0;\n  pointer-events: none;\n}\n.am-comment-main:before {\n  border-right-color: #dedede;\n  z-index: 1;\n}\n.am-comment-main:after {\n  border-right-color: #f8f8f8;\n  margin-left: 1px;\n  z-index: 2;\n}\n@media only screen and (min-width:641px) {\n  .am-comment-main {\n    margin-left: 63px;\n  }\n}\n.am-comment-hd {\n  background: #f8f8f8;\n  border-bottom: 1px solid #eee;\n  display: flex;\n}\n.am-comment-title {\n  margin: 0 0 8px 0;\n  font-size: 1.6rem;\n  line-height: 1.2;\n}\n.am-comment-meta {\n  flex: 1;\n  padding: 10px 15px;\n  font-size: 13px;\n  color: #999999;\n  line-height: 1.2;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.am-comment-meta a {\n  color: #999999;\n}\n.am-comment-author {\n  font-weight: bold;\n  color: #999999;\n}\n.am-comment-bd {\n  padding: 15px;\n  overflow: hidden;\n}\n.am-comment-bd > :last-child {\n  margin-bottom: 0;\n}\n.am-comment-footer {\n  padding: 0 15px 5px;\n}\n.am-comment-footer .am-comment-actions a + a {\n  margin-left: 5px;\n}\n.am-comment-actions {\n  font-size: 13px;\n  color: #999999;\n}\n.am-comment-actions a {\n  display: inline-block;\n  padding: 10px 5px;\n  line-height: 1;\n  color: #999999;\n  opacity: .7;\n}\n.am-comment-actions a:hover {\n  color: #0e90d2;\n  opacity: 1;\n}\n.am-comment-hd .am-comment-actions {\n  padding-right: .5rem;\n}\n.am-comment-flip .am-comment-avatar {\n  float: right;\n}\n.am-comment-flip .am-comment-main {\n  margin-left: auto;\n  margin-right: 42px;\n}\n@media only screen and (min-width:641px) {\n  .am-comment-flip .am-comment-main {\n    margin-right: 63px;\n  }\n}\n.am-comment-flip .am-comment-main:before,\n.am-comment-flip .am-comment-main:after {\n  left: auto;\n  right: -8px;\n  border-width: 8px 0 8px 8px;\n}\n.am-comment-flip .am-comment-main:before {\n  border-left-color: #dedede;\n}\n.am-comment-flip .am-comment-main:after {\n  border-left-color: #f8f8f8;\n  margin-right: 1px;\n  margin-left: auto;\n}\n.am-comment-primary .am-comment-avatar {\n  border-color: #0e90d2;\n}\n.am-comment-primary .am-comment-main {\n  border-color: #0e90d2;\n}\n.am-comment-primary .am-comment-main:before {\n  border-right-color: #0e90d2;\n}\n.am-comment-primary.am-comment-flip .am-comment-main:before {\n  border-left-color: #0e90d2;\n  border-right-color: transparent;\n}\n.am-comment-primary.am-comment-flip .am-comment-main:after {\n  border-left-color: #f8f8f8;\n}\n.am-comment-secondary .am-comment-avatar,\n.am-comment-highlight .am-comment-avatar {\n  border-color: #3bb4f2;\n}\n.am-comment-secondary .am-comment-main,\n.am-comment-highlight .am-comment-main {\n  border-color: #3bb4f2;\n}\n.am-comment-secondary .am-comment-main:before,\n.am-comment-highlight .am-comment-main:before {\n  border-right-color: #3bb4f2;\n}\n.am-comment-secondary.am-comment-flip .am-comment-main:before,\n.am-comment-highlight.am-comment-flip .am-comment-main:before {\n  border-left-color: #3bb4f2;\n  border-right-color: transparent;\n}\n.am-comment-secondary.am-comment-flip .am-comment-main:after,\n.am-comment-highlight.am-comment-flip .am-comment-main:after {\n  border-left-color: #f8f8f8;\n}\n.am-comment-success .am-comment-avatar {\n  border-color: #5eb95e;\n}\n.am-comment-success .am-comment-main {\n  border-color: #5eb95e;\n}\n.am-comment-success .am-comment-main:before {\n  border-right-color: #5eb95e;\n}\n.am-comment-success.am-comment-flip .am-comment-main:before {\n  border-left-color: #5eb95e;\n  border-right-color: transparent;\n}\n.am-comment-success.am-comment-flip .am-comment-main:after {\n  border-left-color: #f8f8f8;\n}\n.am-comment-warning .am-comment-avatar {\n  border-color: #F37B1D;\n}\n.am-comment-warning .am-comment-main {\n  border-color: #F37B1D;\n}\n.am-comment-warning .am-comment-main:before {\n  border-right-color: #F37B1D;\n}\n.am-comment-warning.am-comment-flip .am-comment-main:before {\n  border-left-color: #F37B1D;\n  border-right-color: transparent;\n}\n.am-comment-warning.am-comment-flip .am-comment-main:after {\n  border-left-color: #f8f8f8;\n}\n.am-comment-danger .am-comment-avatar {\n  border-color: #dd514c;\n}\n.am-comment-danger .am-comment-main {\n  border-color: #dd514c;\n}\n.am-comment-danger .am-comment-main:before {\n  border-right-color: #dd514c;\n}\n.am-comment-danger.am-comment-flip .am-comment-main:before {\n  border-left-color: #dd514c;\n  border-right-color: transparent;\n}\n.am-comment-danger.am-comment-flip .am-comment-main:after {\n  border-left-color: #f8f8f8;\n}\n.am-comments-list {\n  padding: 0;\n  list-style: none;\n}\n.am-comments-list .am-comment {\n  margin: 1.6rem 0 0 0;\n  list-style: none;\n}\n@media only screen and (min-width:641px) {\n  .am-comments-list-flip .am-comment-main {\n    margin-right: 64px;\n  }\n  .am-comments-list-flip .am-comment-flip .am-comment-main {\n    margin-left: 64px;\n  }\n}\n/* ==========================================================================\n   Component: Button Group\n ============================================================================ */\n.am-btn-group,\n.am-btn-group-stacked {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.am-btn-group > .am-btn,\n.am-btn-group-stacked > .am-btn {\n  position: relative;\n  float: left;\n}\n.am-btn-group > .am-btn:hover,\n.am-btn-group-stacked > .am-btn:hover,\n.am-btn-group > .am-btn:focus,\n.am-btn-group-stacked > .am-btn:focus,\n.am-btn-group > .am-btn:active,\n.am-btn-group-stacked > .am-btn:active,\n.am-btn-group > .am-btn.active,\n.am-btn-group-stacked > .am-btn.active {\n  z-index: 2;\n}\n.am-btn-group > .am-btn:focus,\n.am-btn-group-stacked > .am-btn:focus {\n  outline: 0;\n}\n.am-btn-group .am-btn + .am-btn,\n.am-btn-group .am-btn + .am-btn-group,\n.am-btn-group .am-btn-group + .am-btn,\n.am-btn-group .am-btn-group + .am-btn-group {\n  margin-left: -1px;\n}\n.am-btn-toolbar {\n  margin-left: -5px;\n}\n.am-btn-toolbar:before,\n.am-btn-toolbar:after {\n  content: \" \";\n  display: table;\n}\n.am-btn-toolbar:after {\n  clear: both;\n}\n.am-btn-toolbar .am-btn-group,\n.am-btn-toolbar .am-input-group {\n  float: left;\n}\n.am-btn-toolbar > .am-btn,\n.am-btn-toolbar > .am-btn-group,\n.am-btn-toolbar > .am-input-group {\n  margin-left: 5px;\n}\n.am-btn-group > .am-btn:not(:first-child):not(:last-child):not(.am-dropdown-toggle) {\n  border-radius: 0;\n}\n.am-btn-group > .am-btn:first-child {\n  margin-left: 0;\n}\n.am-btn-group > .am-btn:first-child:not(:last-child):not(.am-dropdown-toggle) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.am-btn-group > .am-btn:last-child:not(:first-child),\n.am-btn-group > .am-dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.am-btn-group > .am-btn-group {\n  float: left;\n}\n.am-btn-group > .am-btn-group:not(:first-child):not(:last-child) > .am-btn {\n  border-radius: 0;\n}\n.am-btn-group > .am-btn-group:first-child > .am-btn:last-child,\n.am-btn-group > .am-btn-group:first-child > .am-dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.am-btn-group > .am-btn-group:last-child > .am-btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.am-btn-group-xs > .am-btn {\n  font-size: 1.2rem;\n}\n.am-btn-group-sm > .am-btn {\n  font-size: 1.4rem;\n}\n.am-btn-group-lg > .am-btn {\n  font-size: 1.8rem;\n}\n.am-btn-group-stacked > .am-btn,\n.am-btn-group-stacked > .am-btn-group,\n.am-btn-group-stacked > .am-btn-group > .am-btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n.am-btn-group-stacked > .am-btn-group:before,\n.am-btn-group-stacked > .am-btn-group:after {\n  content: \" \";\n  display: table;\n}\n.am-btn-group-stacked > .am-btn-group:after {\n  clear: both;\n}\n.am-btn-group-stacked > .am-btn-group > .am-btn {\n  float: none;\n}\n.am-btn-group-stacked > .am-btn + .am-btn,\n.am-btn-group-stacked > .am-btn + .am-btn-group,\n.am-btn-group-stacked > .am-btn-group + .am-btn,\n.am-btn-group-stacked > .am-btn-group + .am-btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n.am-btn-group-stacked > .am-btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.am-btn-group-stacked > .am-btn:first-child:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.am-btn-group-stacked > .am-btn:last-child:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.am-btn-group-stacked > .am-btn-group:not(:first-child):not(:last-child) > .am-btn {\n  border-radius: 0;\n}\n.am-btn-group-stacked > .am-btn-group:first-child:not(:last-child) > .am-btn:last-child,\n.am-btn-group-stacked > .am-btn-group:first-child:not(:last-child) > .am-dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.am-btn-group-stacked > .am-btn-group:last-child:not(:first-child) > .am-btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.am-btn-group-justify {\n  display: table;\n  table-layout: fixed;\n  border-collapse: separate;\n  width: 100%;\n}\n.am-btn-group-justify > .am-btn,\n.am-btn-group-justify > .am-btn-group {\n  float: none;\n  display: table-cell;\n  width: 1%;\n}\n.am-btn-group-justify > .am-btn-group .am-btn {\n  width: 100%;\n}\n.lte9 .am-btn-group-justify {\n  display: table;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.lte9 .am-btn-group-justify > .am-btn,\n.lte9 .am-btn-group-justify > .am-btn-group {\n  float: none;\n  display: table-cell;\n  width: 1%;\n}\n.am-btn-group .am-dropdown {\n  float: left;\n  margin-left: -1px;\n}\n.am-btn-group .am-dropdown > .am-btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.am-btn-group .am-active .am-dropdown-toggle {\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.am-btn-group .am-active .am-dropdown-toggle.am-btn-link {\n  box-shadow: none;\n}\n.am-btn-group .am-dropdown-toggle:active,\n.am-btn-group .am-active .am-dropdown-toggle {\n  outline: 0;\n}\n[data-am-button] > .am-btn > input[type=\"radio\"],\n[data-am-button] > .am-btn > input[type=\"checkbox\"],\n.am-btn-group-check > .am-btn > input[type=\"radio\"],\n.am-btn-group-check > .am-btn > input[type=\"checkbox\"] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n/* ==========================================================================\n   Component: Close\n ============================================================================ */\n.am-close {\n  display: inline-block;\n  text-align: center;\n  width: 24px;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 24px;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .2;\n  transition: all .3s;\n}\n.am-close:hover,\n.am-close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: .5;\n  outline: none;\n}\n.am-close[class*=\"am-icon-\"] {\n  font-size: 16px;\n}\nbutton.am-close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  /* Needed for Sarari */\n  border: 0;\n  -webkit-appearance: none;\n}\na.am-close:hover {\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n}\n/* Modifiers\n ============================================================================ */\n.am-close-alt {\n  border-radius: 50%;\n  background: #eee;\n  opacity: 0.7;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);\n  /* Hover */\n}\n.am-close-alt:hover,\n.am-close-alt:focus {\n  opacity: 1;\n}\n.am-close-spin:hover {\n  transform: rotate(360deg);\n}\n/* ==========================================================================\n   Component: Icon\n ============================================================================ */\n/* Font-face\n============================================================================= */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url('//dn-amui.qbox.me/font-awesome/4.5.0/fonts/fontawesome-webfont.eot?v=4.5.0');\n  src: url('//dn-amui.qbox.me/font-awesome/4.5.0/fonts/fontawesome-webfont.eot?#iefix&v=4.5.0') format('embedded-opentype'), url('//dn-amui.qbox.me/font-awesome/4.5.0/fonts/fontawesome-webfont.woff2?v=4.5.0') format('woff2'), url('//dn-amui.qbox.me/font-awesome/4.5.0/fonts/fontawesome-webfont.woff?v=4.5.0') format('woff'), url('//dn-amui.qbox.me/font-awesome/4.5.0/fonts/fontawesome-webfont.ttf?v=4.5.0') format('truetype'), url('//dn-amui.qbox.me/font-awesome/4.5.0/fonts/fontawesome-webfont.svg?v=4.5.0#fontawesomeregular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n/* Component\n============================================================================= */\n[class*=\"am-icon-\"] {\n  display: inline-block;\n  font-style: normal;\n}\n[class*=\"am-icon-\"]:before {\n  display: inline-block;\n  font: normal normal normal 1.6rem/1 \"FontAwesome\", sans-serif;\n  /*font-weight: normal; // 2\n  font-style: normal; // 2\n  vertical-align: baseline; // 3\n  line-height: 1; // 4*/\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transform: translate(0, 0);\n}\n.am-icon-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n}\n[class*=\"am-icon-\"].am-fl {\n  margin-right: .3em;\n}\n[class*=\"am-icon-\"].am-fr {\n  margin-left: .3em;\n}\n.am-icon-sm:before {\n  font-size: 150%;\n  vertical-align: -10%;\n}\n.am-icon-md:before {\n  font-size: 200%;\n  vertical-align: -16%;\n}\n.am-icon-lg:before {\n  font-size: 250%;\n  vertical-align: -22%;\n}\n/* Modifier: `.am-icon-btn`\n============================================================================= */\n.am-icon-btn {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  font-size: 24px;\n  line-height: 48px;\n  border-radius: 50%;\n  background-color: #eee;\n  color: #555555;\n  text-align: center;\n  /**\n   * Hover\n   * 1. Apply hover style also to focus state\n   * 2. Remove default focus style\n   */\n  /* Active */\n}\n.am-icon-btn:hover,\n.am-icon-btn:focus {\n  /* 1 */\n  background-color: #f5f5f5;\n  color: #333333;\n  text-decoration: none;\n  outline: none;\n  /* 2 */\n}\n.am-icon-btn:active {\n  background-color: #ddd;\n  color: #333333;\n}\n.am-icon-btn.am-primary,\n.am-icon-btn.am-secondary,\n.am-icon-btn.am-success,\n.am-icon-btn.am-warning,\n.am-icon-btn.am-danger {\n  color: #fff;\n}\n.am-icon-btn.am-primary {\n  background-color: #0e90d2;\n}\n.am-icon-btn.am-secondary {\n  background-color: #3bb4f2;\n}\n.am-icon-btn.am-success {\n  background-color: #5eb95e;\n}\n.am-icon-btn.am-warning {\n  background-color: #F37B1D;\n}\n.am-icon-btn.am-danger {\n  background-color: #dd514c;\n}\n.am-icon-btn-sm {\n  width: 32px;\n  height: 32px;\n  font-size: 16px;\n  line-height: 32px;\n}\n.am-icon-btn-lg {\n  width: 64px;\n  height: 64px;\n  font-size: 28px;\n  line-height: 64px;\n}\n/* Modifier: `.am-icon-fw` Fixed width\n============================================================================= */\n.am-icon-fw {\n  width: 1.25em;\n  text-align: center;\n}\n/* Icon mapping\n============================================================================= */\n.am-icon-glass:before {\n  content: \"\\F000\";\n}\n.am-icon-music:before {\n  content: \"\\F001\";\n}\n.am-icon-search:before {\n  content: \"\\F002\";\n}\n.am-icon-envelope-o:before {\n  content: \"\\F003\";\n}\n.am-icon-heart:before {\n  content: \"\\F004\";\n}\n.am-icon-star:before {\n  content: \"\\F005\";\n}\n.am-icon-star-o:before {\n  content: \"\\F006\";\n}\n.am-icon-user:before {\n  content: \"\\F007\";\n}\n.am-icon-film:before {\n  content: \"\\F008\";\n}\n.am-icon-th-large:before {\n  content: \"\\F009\";\n}\n.am-icon-th:before {\n  content: \"\\F00A\";\n}\n.am-icon-th-list:before {\n  content: \"\\F00B\";\n}\n.am-icon-check:before {\n  content: \"\\F00C\";\n}\n.am-icon-remove:before,\n.am-icon-close:before,\n.am-icon-times:before {\n  content: \"\\F00D\";\n}\n.am-icon-search-plus:before {\n  content: \"\\F00E\";\n}\n.am-icon-search-minus:before {\n  content: \"\\F010\";\n}\n.am-icon-power-off:before {\n  content: \"\\F011\";\n}\n.am-icon-signal:before {\n  content: \"\\F012\";\n}\n.am-icon-gear:before,\n.am-icon-cog:before {\n  content: \"\\F013\";\n}\n.am-icon-trash-o:before {\n  content: \"\\F014\";\n}\n.am-icon-home:before {\n  content: \"\\F015\";\n}\n.am-icon-file-o:before {\n  content: \"\\F016\";\n}\n.am-icon-clock-o:before {\n  content: \"\\F017\";\n}\n.am-icon-road:before {\n  content: \"\\F018\";\n}\n.am-icon-download:before {\n  content: \"\\F019\";\n}\n.am-icon-arrow-circle-o-down:before {\n  content: \"\\F01A\";\n}\n.am-icon-arrow-circle-o-up:before {\n  content: \"\\F01B\";\n}\n.am-icon-inbox:before {\n  content: \"\\F01C\";\n}\n.am-icon-play-circle-o:before {\n  content: \"\\F01D\";\n}\n.am-icon-rotate-right:before,\n.am-icon-repeat:before {\n  content: \"\\F01E\";\n}\n.am-icon-refresh:before {\n  content: \"\\F021\";\n}\n.am-icon-list-alt:before {\n  content: \"\\F022\";\n}\n.am-icon-lock:before {\n  content: \"\\F023\";\n}\n.am-icon-flag:before {\n  content: \"\\F024\";\n}\n.am-icon-headphones:before {\n  content: \"\\F025\";\n}\n.am-icon-volume-off:before {\n  content: \"\\F026\";\n}\n.am-icon-volume-down:before {\n  content: \"\\F027\";\n}\n.am-icon-volume-up:before {\n  content: \"\\F028\";\n}\n.am-icon-qrcode:before {\n  content: \"\\F029\";\n}\n.am-icon-barcode:before {\n  content: \"\\F02A\";\n}\n.am-icon-tag:before {\n  content: \"\\F02B\";\n}\n.am-icon-tags:before {\n  content: \"\\F02C\";\n}\n.am-icon-book:before {\n  content: \"\\F02D\";\n}\n.am-icon-bookmark:before {\n  content: \"\\F02E\";\n}\n.am-icon-print:before {\n  content: \"\\F02F\";\n}\n.am-icon-camera:before {\n  content: \"\\F030\";\n}\n.am-icon-font:before {\n  content: \"\\F031\";\n}\n.am-icon-bold:before {\n  content: \"\\F032\";\n}\n.am-icon-italic:before {\n  content: \"\\F033\";\n}\n.am-icon-text-height:before {\n  content: \"\\F034\";\n}\n.am-icon-text-width:before {\n  content: \"\\F035\";\n}\n.am-icon-align-left:before {\n  content: \"\\F036\";\n}\n.am-icon-align-center:before {\n  content: \"\\F037\";\n}\n.am-icon-align-right:before {\n  content: \"\\F038\";\n}\n.am-icon-align-justify:before {\n  content: \"\\F039\";\n}\n.am-icon-list:before {\n  content: \"\\F03A\";\n}\n.am-icon-dedent:before,\n.am-icon-outdent:before {\n  content: \"\\F03B\";\n}\n.am-icon-indent:before {\n  content: \"\\F03C\";\n}\n.am-icon-video-camera:before {\n  content: \"\\F03D\";\n}\n.am-icon-photo:before,\n.am-icon-image:before,\n.am-icon-picture-o:before {\n  content: \"\\F03E\";\n}\n.am-icon-pencil:before {\n  content: \"\\F040\";\n}\n.am-icon-map-marker:before {\n  content: \"\\F041\";\n}\n.am-icon-adjust:before {\n  content: \"\\F042\";\n}\n.am-icon-tint:before {\n  content: \"\\F043\";\n}\n.am-icon-edit:before,\n.am-icon-pencil-square-o:before {\n  content: \"\\F044\";\n}\n.am-icon-share-square-o:before {\n  content: \"\\F045\";\n}\n.am-icon-check-square-o:before {\n  content: \"\\F046\";\n}\n.am-icon-arrows:before {\n  content: \"\\F047\";\n}\n.am-icon-step-backward:before {\n  content: \"\\F048\";\n}\n.am-icon-fast-backward:before {\n  content: \"\\F049\";\n}\n.am-icon-backward:before {\n  content: \"\\F04A\";\n}\n.am-icon-play:before {\n  content: \"\\F04B\";\n}\n.am-icon-pause:before {\n  content: \"\\F04C\";\n}\n.am-icon-stop:before {\n  content: \"\\F04D\";\n}\n.am-icon-forward:before {\n  content: \"\\F04E\";\n}\n.am-icon-fast-forward:before {\n  content: \"\\F050\";\n}\n.am-icon-step-forward:before {\n  content: \"\\F051\";\n}\n.am-icon-eject:before {\n  content: \"\\F052\";\n}\n.am-icon-chevron-left:before {\n  content: \"\\F053\";\n}\n.am-icon-chevron-right:before {\n  content: \"\\F054\";\n}\n.am-icon-plus-circle:before {\n  content: \"\\F055\";\n}\n.am-icon-minus-circle:before {\n  content: \"\\F056\";\n}\n.am-icon-times-circle:before {\n  content: \"\\F057\";\n}\n.am-icon-check-circle:before {\n  content: \"\\F058\";\n}\n.am-icon-question-circle:before {\n  content: \"\\F059\";\n}\n.am-icon-info-circle:before {\n  content: \"\\F05A\";\n}\n.am-icon-crosshairs:before {\n  content: \"\\F05B\";\n}\n.am-icon-times-circle-o:before {\n  content: \"\\F05C\";\n}\n.am-icon-check-circle-o:before {\n  content: \"\\F05D\";\n}\n.am-icon-ban:before {\n  content: \"\\F05E\";\n}\n.am-icon-arrow-left:before {\n  content: \"\\F060\";\n}\n.am-icon-arrow-right:before {\n  content: \"\\F061\";\n}\n.am-icon-arrow-up:before {\n  content: \"\\F062\";\n}\n.am-icon-arrow-down:before {\n  content: \"\\F063\";\n}\n.am-icon-mail-forward:before,\n.am-icon-share:before {\n  content: \"\\F064\";\n}\n.am-icon-expand:before {\n  content: \"\\F065\";\n}\n.am-icon-compress:before {\n  content: \"\\F066\";\n}\n.am-icon-plus:before {\n  content: \"\\F067\";\n}\n.am-icon-minus:before {\n  content: \"\\F068\";\n}\n.am-icon-asterisk:before {\n  content: \"\\F069\";\n}\n.am-icon-exclamation-circle:before {\n  content: \"\\F06A\";\n}\n.am-icon-gift:before {\n  content: \"\\F06B\";\n}\n.am-icon-leaf:before {\n  content: \"\\F06C\";\n}\n.am-icon-fire:before {\n  content: \"\\F06D\";\n}\n.am-icon-eye:before {\n  content: \"\\F06E\";\n}\n.am-icon-eye-slash:before {\n  content: \"\\F070\";\n}\n.am-icon-warning:before,\n.am-icon-exclamation-triangle:before {\n  content: \"\\F071\";\n}\n.am-icon-plane:before {\n  content: \"\\F072\";\n}\n.am-icon-calendar:before {\n  content: \"\\F073\";\n}\n.am-icon-random:before {\n  content: \"\\F074\";\n}\n.am-icon-comment:before {\n  content: \"\\F075\";\n}\n.am-icon-magnet:before {\n  content: \"\\F076\";\n}\n.am-icon-chevron-up:before {\n  content: \"\\F077\";\n}\n.am-icon-chevron-down:before {\n  content: \"\\F078\";\n}\n.am-icon-retweet:before {\n  content: \"\\F079\";\n}\n.am-icon-shopping-cart:before {\n  content: \"\\F07A\";\n}\n.am-icon-folder:before {\n  content: \"\\F07B\";\n}\n.am-icon-folder-open:before {\n  content: \"\\F07C\";\n}\n.am-icon-arrows-v:before {\n  content: \"\\F07D\";\n}\n.am-icon-arrows-h:before {\n  content: \"\\F07E\";\n}\n.am-icon-bar-chart-o:before,\n.am-icon-bar-chart:before {\n  content: \"\\F080\";\n}\n.am-icon-twitter-square:before {\n  content: \"\\F081\";\n}\n.am-icon-facebook-square:before {\n  content: \"\\F082\";\n}\n.am-icon-camera-retro:before {\n  content: \"\\F083\";\n}\n.am-icon-key:before {\n  content: \"\\F084\";\n}\n.am-icon-gears:before,\n.am-icon-cogs:before {\n  content: \"\\F085\";\n}\n.am-icon-comments:before {\n  content: \"\\F086\";\n}\n.am-icon-thumbs-o-up:before {\n  content: \"\\F087\";\n}\n.am-icon-thumbs-o-down:before {\n  content: \"\\F088\";\n}\n.am-icon-star-half:before {\n  content: \"\\F089\";\n}\n.am-icon-heart-o:before {\n  content: \"\\F08A\";\n}\n.am-icon-sign-out:before {\n  content: \"\\F08B\";\n}\n.am-icon-linkedin-square:before {\n  content: \"\\F08C\";\n}\n.am-icon-thumb-tack:before {\n  content: \"\\F08D\";\n}\n.am-icon-external-link:before {\n  content: \"\\F08E\";\n}\n.am-icon-sign-in:before {\n  content: \"\\F090\";\n}\n.am-icon-trophy:before {\n  content: \"\\F091\";\n}\n.am-icon-github-square:before {\n  content: \"\\F092\";\n}\n.am-icon-upload:before {\n  content: \"\\F093\";\n}\n.am-icon-lemon-o:before {\n  content: \"\\F094\";\n}\n.am-icon-phone:before {\n  content: \"\\F095\";\n}\n.am-icon-square-o:before {\n  content: \"\\F096\";\n}\n.am-icon-bookmark-o:before {\n  content: \"\\F097\";\n}\n.am-icon-phone-square:before {\n  content: \"\\F098\";\n}\n.am-icon-twitter:before {\n  content: \"\\F099\";\n}\n.am-icon-facebook-f:before,\n.am-icon-facebook:before {\n  content: \"\\F09A\";\n}\n.am-icon-github:before {\n  content: \"\\F09B\";\n}\n.am-icon-unlock:before {\n  content: \"\\F09C\";\n}\n.am-icon-credit-card:before {\n  content: \"\\F09D\";\n}\n.am-icon-feed:before,\n.am-icon-rss:before {\n  content: \"\\F09E\";\n}\n.am-icon-hdd-o:before {\n  content: \"\\F0A0\";\n}\n.am-icon-bullhorn:before {\n  content: \"\\F0A1\";\n}\n.am-icon-bell:before {\n  content: \"\\F0F3\";\n}\n.am-icon-certificate:before {\n  content: \"\\F0A3\";\n}\n.am-icon-hand-o-right:before {\n  content: \"\\F0A4\";\n}\n.am-icon-hand-o-left:before {\n  content: \"\\F0A5\";\n}\n.am-icon-hand-o-up:before {\n  content: \"\\F0A6\";\n}\n.am-icon-hand-o-down:before {\n  content: \"\\F0A7\";\n}\n.am-icon-arrow-circle-left:before {\n  content: \"\\F0A8\";\n}\n.am-icon-arrow-circle-right:before {\n  content: \"\\F0A9\";\n}\n.am-icon-arrow-circle-up:before {\n  content: \"\\F0AA\";\n}\n.am-icon-arrow-circle-down:before {\n  content: \"\\F0AB\";\n}\n.am-icon-globe:before {\n  content: \"\\F0AC\";\n}\n.am-icon-wrench:before {\n  content: \"\\F0AD\";\n}\n.am-icon-tasks:before {\n  content: \"\\F0AE\";\n}\n.am-icon-filter:before {\n  content: \"\\F0B0\";\n}\n.am-icon-briefcase:before {\n  content: \"\\F0B1\";\n}\n.am-icon-arrows-alt:before {\n  content: \"\\F0B2\";\n}\n.am-icon-group:before,\n.am-icon-users:before {\n  content: \"\\F0C0\";\n}\n.am-icon-chain:before,\n.am-icon-link:before {\n  content: \"\\F0C1\";\n}\n.am-icon-cloud:before {\n  content: \"\\F0C2\";\n}\n.am-icon-flask:before {\n  content: \"\\F0C3\";\n}\n.am-icon-cut:before,\n.am-icon-scissors:before {\n  content: \"\\F0C4\";\n}\n.am-icon-copy:before,\n.am-icon-files-o:before {\n  content: \"\\F0C5\";\n}\n.am-icon-paperclip:before {\n  content: \"\\F0C6\";\n}\n.am-icon-save:before,\n.am-icon-floppy-o:before {\n  content: \"\\F0C7\";\n}\n.am-icon-square:before {\n  content: \"\\F0C8\";\n}\n.am-icon-navicon:before,\n.am-icon-reorder:before,\n.am-icon-bars:before {\n  content: \"\\F0C9\";\n}\n.am-icon-list-ul:before {\n  content: \"\\F0CA\";\n}\n.am-icon-list-ol:before {\n  content: \"\\F0CB\";\n}\n.am-icon-strikethrough:before {\n  content: \"\\F0CC\";\n}\n.am-icon-underline:before {\n  content: \"\\F0CD\";\n}\n.am-icon-table:before {\n  content: \"\\F0CE\";\n}\n.am-icon-magic:before {\n  content: \"\\F0D0\";\n}\n.am-icon-truck:before {\n  content: \"\\F0D1\";\n}\n.am-icon-pinterest:before {\n  content: \"\\F0D2\";\n}\n.am-icon-pinterest-square:before {\n  content: \"\\F0D3\";\n}\n.am-icon-google-plus-square:before {\n  content: \"\\F0D4\";\n}\n.am-icon-google-plus:before {\n  content: \"\\F0D5\";\n}\n.am-icon-money:before {\n  content: \"\\F0D6\";\n}\n.am-icon-caret-down:before {\n  content: \"\\F0D7\";\n}\n.am-icon-caret-up:before {\n  content: \"\\F0D8\";\n}\n.am-icon-caret-left:before {\n  content: \"\\F0D9\";\n}\n.am-icon-caret-right:before {\n  content: \"\\F0DA\";\n}\n.am-icon-columns:before {\n  content: \"\\F0DB\";\n}\n.am-icon-unsorted:before,\n.am-icon-sort:before {\n  content: \"\\F0DC\";\n}\n.am-icon-sort-down:before,\n.am-icon-sort-desc:before {\n  content: \"\\F0DD\";\n}\n.am-icon-sort-up:before,\n.am-icon-sort-asc:before {\n  content: \"\\F0DE\";\n}\n.am-icon-envelope:before {\n  content: \"\\F0E0\";\n}\n.am-icon-linkedin:before {\n  content: \"\\F0E1\";\n}\n.am-icon-rotate-left:before,\n.am-icon-undo:before {\n  content: \"\\F0E2\";\n}\n.am-icon-legal:before,\n.am-icon-gavel:before {\n  content: \"\\F0E3\";\n}\n.am-icon-dashboard:before,\n.am-icon-tachometer:before {\n  content: \"\\F0E4\";\n}\n.am-icon-comment-o:before {\n  content: \"\\F0E5\";\n}\n.am-icon-comments-o:before {\n  content: \"\\F0E6\";\n}\n.am-icon-flash:before,\n.am-icon-bolt:before {\n  content: \"\\F0E7\";\n}\n.am-icon-sitemap:before {\n  content: \"\\F0E8\";\n}\n.am-icon-umbrella:before {\n  content: \"\\F0E9\";\n}\n.am-icon-paste:before,\n.am-icon-clipboard:before {\n  content: \"\\F0EA\";\n}\n.am-icon-lightbulb-o:before {\n  content: \"\\F0EB\";\n}\n.am-icon-exchange:before {\n  content: \"\\F0EC\";\n}\n.am-icon-cloud-download:before {\n  content: \"\\F0ED\";\n}\n.am-icon-cloud-upload:before {\n  content: \"\\F0EE\";\n}\n.am-icon-user-md:before {\n  content: \"\\F0F0\";\n}\n.am-icon-stethoscope:before {\n  content: \"\\F0F1\";\n}\n.am-icon-suitcase:before {\n  content: \"\\F0F2\";\n}\n.am-icon-bell-o:before {\n  content: \"\\F0A2\";\n}\n.am-icon-coffee:before {\n  content: \"\\F0F4\";\n}\n.am-icon-cutlery:before {\n  content: \"\\F0F5\";\n}\n.am-icon-file-text-o:before {\n  content: \"\\F0F6\";\n}\n.am-icon-building-o:before {\n  content: \"\\F0F7\";\n}\n.am-icon-hospital-o:before {\n  content: \"\\F0F8\";\n}\n.am-icon-ambulance:before {\n  content: \"\\F0F9\";\n}\n.am-icon-medkit:before {\n  content: \"\\F0FA\";\n}\n.am-icon-fighter-jet:before {\n  content: \"\\F0FB\";\n}\n.am-icon-beer:before {\n  content: \"\\F0FC\";\n}\n.am-icon-h-square:before {\n  content: \"\\F0FD\";\n}\n.am-icon-plus-square:before {\n  content: \"\\F0FE\";\n}\n.am-icon-angle-double-left:before {\n  content: \"\\F100\";\n}\n.am-icon-angle-double-right:before {\n  content: \"\\F101\";\n}\n.am-icon-angle-double-up:before {\n  content: \"\\F102\";\n}\n.am-icon-angle-double-down:before {\n  content: \"\\F103\";\n}\n.am-icon-angle-left:before {\n  content: \"\\F104\";\n}\n.am-icon-angle-right:before {\n  content: \"\\F105\";\n}\n.am-icon-angle-up:before {\n  content: \"\\F106\";\n}\n.am-icon-angle-down:before {\n  content: \"\\F107\";\n}\n.am-icon-desktop:before {\n  content: \"\\F108\";\n}\n.am-icon-laptop:before {\n  content: \"\\F109\";\n}\n.am-icon-tablet:before {\n  content: \"\\F10A\";\n}\n.am-icon-mobile-phone:before,\n.am-icon-mobile:before {\n  content: \"\\F10B\";\n}\n.am-icon-circle-o:before {\n  content: \"\\F10C\";\n}\n.am-icon-quote-left:before {\n  content: \"\\F10D\";\n}\n.am-icon-quote-right:before {\n  content: \"\\F10E\";\n}\n.am-icon-spinner:before {\n  content: \"\\F110\";\n}\n.am-icon-circle:before {\n  content: \"\\F111\";\n}\n.am-icon-mail-reply:before,\n.am-icon-reply:before {\n  content: \"\\F112\";\n}\n.am-icon-github-alt:before {\n  content: \"\\F113\";\n}\n.am-icon-folder-o:before {\n  content: \"\\F114\";\n}\n.am-icon-folder-open-o:before {\n  content: \"\\F115\";\n}\n.am-icon-smile-o:before {\n  content: \"\\F118\";\n}\n.am-icon-frown-o:before {\n  content: \"\\F119\";\n}\n.am-icon-meh-o:before {\n  content: \"\\F11A\";\n}\n.am-icon-gamepad:before {\n  content: \"\\F11B\";\n}\n.am-icon-keyboard-o:before {\n  content: \"\\F11C\";\n}\n.am-icon-flag-o:before {\n  content: \"\\F11D\";\n}\n.am-icon-flag-checkered:before {\n  content: \"\\F11E\";\n}\n.am-icon-terminal:before {\n  content: \"\\F120\";\n}\n.am-icon-code:before {\n  content: \"\\F121\";\n}\n.am-icon-mail-reply-all:before,\n.am-icon-reply-all:before {\n  content: \"\\F122\";\n}\n.am-icon-star-half-empty:before,\n.am-icon-star-half-full:before,\n.am-icon-star-half-o:before {\n  content: \"\\F123\";\n}\n.am-icon-location-arrow:before {\n  content: \"\\F124\";\n}\n.am-icon-crop:before {\n  content: \"\\F125\";\n}\n.am-icon-code-fork:before {\n  content: \"\\F126\";\n}\n.am-icon-unlink:before,\n.am-icon-chain-broken:before {\n  content: \"\\F127\";\n}\n.am-icon-question:before {\n  content: \"\\F128\";\n}\n.am-icon-info:before {\n  content: \"\\F129\";\n}\n.am-icon-exclamation:before {\n  content: \"\\F12A\";\n}\n.am-icon-superscript:before {\n  content: \"\\F12B\";\n}\n.am-icon-subscript:before {\n  content: \"\\F12C\";\n}\n.am-icon-eraser:before {\n  content: \"\\F12D\";\n}\n.am-icon-puzzle-piece:before {\n  content: \"\\F12E\";\n}\n.am-icon-microphone:before {\n  content: \"\\F130\";\n}\n.am-icon-microphone-slash:before {\n  content: \"\\F131\";\n}\n.am-icon-shield:before {\n  content: \"\\F132\";\n}\n.am-icon-calendar-o:before {\n  content: \"\\F133\";\n}\n.am-icon-fire-extinguisher:before {\n  content: \"\\F134\";\n}\n.am-icon-rocket:before {\n  content: \"\\F135\";\n}\n.am-icon-maxcdn:before {\n  content: \"\\F136\";\n}\n.am-icon-chevron-circle-left:before {\n  content: \"\\F137\";\n}\n.am-icon-chevron-circle-right:before {\n  content: \"\\F138\";\n}\n.am-icon-chevron-circle-up:before {\n  content: \"\\F139\";\n}\n.am-icon-chevron-circle-down:before {\n  content: \"\\F13A\";\n}\n.am-icon-html5:before {\n  content: \"\\F13B\";\n}\n.am-icon-css3:before {\n  content: \"\\F13C\";\n}\n.am-icon-anchor:before {\n  content: \"\\F13D\";\n}\n.am-icon-unlock-alt:before {\n  content: \"\\F13E\";\n}\n.am-icon-bullseye:before {\n  content: \"\\F140\";\n}\n.am-icon-ellipsis-h:before {\n  content: \"\\F141\";\n}\n.am-icon-ellipsis-v:before {\n  content: \"\\F142\";\n}\n.am-icon-rss-square:before {\n  content: \"\\F143\";\n}\n.am-icon-play-circle:before {\n  content: \"\\F144\";\n}\n.am-icon-ticket:before {\n  content: \"\\F145\";\n}\n.am-icon-minus-square:before {\n  content: \"\\F146\";\n}\n.am-icon-minus-square-o:before {\n  content: \"\\F147\";\n}\n.am-icon-level-up:before {\n  content: \"\\F148\";\n}\n.am-icon-level-down:before {\n  content: \"\\F149\";\n}\n.am-icon-check-square:before {\n  content: \"\\F14A\";\n}\n.am-icon-pencil-square:before {\n  content: \"\\F14B\";\n}\n.am-icon-external-link-square:before {\n  content: \"\\F14C\";\n}\n.am-icon-share-square:before {\n  content: \"\\F14D\";\n}\n.am-icon-compass:before {\n  content: \"\\F14E\";\n}\n.am-icon-toggle-down:before,\n.am-icon-caret-square-o-down:before {\n  content: \"\\F150\";\n}\n.am-icon-toggle-up:before,\n.am-icon-caret-square-o-up:before {\n  content: \"\\F151\";\n}\n.am-icon-toggle-right:before,\n.am-icon-caret-square-o-right:before {\n  content: \"\\F152\";\n}\n.am-icon-euro:before,\n.am-icon-eur:before {\n  content: \"\\F153\";\n}\n.am-icon-gbp:before {\n  content: \"\\F154\";\n}\n.am-icon-dollar:before,\n.am-icon-usd:before {\n  content: \"\\F155\";\n}\n.am-icon-rupee:before,\n.am-icon-inr:before {\n  content: \"\\F156\";\n}\n.am-icon-cny:before,\n.am-icon-rmb:before,\n.am-icon-yen:before,\n.am-icon-jpy:before {\n  content: \"\\F157\";\n}\n.am-icon-ruble:before,\n.am-icon-rouble:before,\n.am-icon-rub:before {\n  content: \"\\F158\";\n}\n.am-icon-won:before,\n.am-icon-krw:before {\n  content: \"\\F159\";\n}\n.am-icon-bitcoin:before,\n.am-icon-btc:before {\n  content: \"\\F15A\";\n}\n.am-icon-file:before {\n  content: \"\\F15B\";\n}\n.am-icon-file-text:before {\n  content: \"\\F15C\";\n}\n.am-icon-sort-alpha-asc:before {\n  content: \"\\F15D\";\n}\n.am-icon-sort-alpha-desc:before {\n  content: \"\\F15E\";\n}\n.am-icon-sort-amount-asc:before {\n  content: \"\\F160\";\n}\n.am-icon-sort-amount-desc:before {\n  content: \"\\F161\";\n}\n.am-icon-sort-numeric-asc:before {\n  content: \"\\F162\";\n}\n.am-icon-sort-numeric-desc:before {\n  content: \"\\F163\";\n}\n.am-icon-thumbs-up:before {\n  content: \"\\F164\";\n}\n.am-icon-thumbs-down:before {\n  content: \"\\F165\";\n}\n.am-icon-youtube-square:before {\n  content: \"\\F166\";\n}\n.am-icon-youtube:before {\n  content: \"\\F167\";\n}\n.am-icon-xing:before {\n  content: \"\\F168\";\n}\n.am-icon-xing-square:before {\n  content: \"\\F169\";\n}\n.am-icon-youtube-play:before {\n  content: \"\\F16A\";\n}\n.am-icon-dropbox:before {\n  content: \"\\F16B\";\n}\n.am-icon-stack-overflow:before {\n  content: \"\\F16C\";\n}\n.am-icon-instagram:before {\n  content: \"\\F16D\";\n}\n.am-icon-flickr:before {\n  content: \"\\F16E\";\n}\n.am-icon-adn:before {\n  content: \"\\F170\";\n}\n.am-icon-bitbucket:before {\n  content: \"\\F171\";\n}\n.am-icon-bitbucket-square:before {\n  content: \"\\F172\";\n}\n.am-icon-tumblr:before {\n  content: \"\\F173\";\n}\n.am-icon-tumblr-square:before {\n  content: \"\\F174\";\n}\n.am-icon-long-arrow-down:before {\n  content: \"\\F175\";\n}\n.am-icon-long-arrow-up:before {\n  content: \"\\F176\";\n}\n.am-icon-long-arrow-left:before {\n  content: \"\\F177\";\n}\n.am-icon-long-arrow-right:before {\n  content: \"\\F178\";\n}\n.am-icon-apple:before {\n  content: \"\\F179\";\n}\n.am-icon-windows:before {\n  content: \"\\F17A\";\n}\n.am-icon-android:before {\n  content: \"\\F17B\";\n}\n.am-icon-linux:before {\n  content: \"\\F17C\";\n}\n.am-icon-dribbble:before {\n  content: \"\\F17D\";\n}\n.am-icon-skype:before {\n  content: \"\\F17E\";\n}\n.am-icon-foursquare:before {\n  content: \"\\F180\";\n}\n.am-icon-trello:before {\n  content: \"\\F181\";\n}\n.am-icon-female:before {\n  content: \"\\F182\";\n}\n.am-icon-male:before {\n  content: \"\\F183\";\n}\n.am-icon-gittip:before,\n.am-icon-gratipay:before {\n  content: \"\\F184\";\n}\n.am-icon-sun-o:before {\n  content: \"\\F185\";\n}\n.am-icon-moon-o:before {\n  content: \"\\F186\";\n}\n.am-icon-archive:before {\n  content: \"\\F187\";\n}\n.am-icon-bug:before {\n  content: \"\\F188\";\n}\n.am-icon-vk:before {\n  content: \"\\F189\";\n}\n.am-icon-weibo:before {\n  content: \"\\F18A\";\n}\n.am-icon-renren:before {\n  content: \"\\F18B\";\n}\n.am-icon-pagelines:before {\n  content: \"\\F18C\";\n}\n.am-icon-stack-exchange:before {\n  content: \"\\F18D\";\n}\n.am-icon-arrow-circle-o-right:before {\n  content: \"\\F18E\";\n}\n.am-icon-arrow-circle-o-left:before {\n  content: \"\\F190\";\n}\n.am-icon-toggle-left:before,\n.am-icon-caret-square-o-left:before {\n  content: \"\\F191\";\n}\n.am-icon-dot-circle-o:before {\n  content: \"\\F192\";\n}\n.am-icon-wheelchair:before {\n  content: \"\\F193\";\n}\n.am-icon-vimeo-square:before {\n  content: \"\\F194\";\n}\n.am-icon-turkish-lira:before,\n.am-icon-try:before {\n  content: \"\\F195\";\n}\n.am-icon-plus-square-o:before {\n  content: \"\\F196\";\n}\n.am-icon-space-shuttle:before {\n  content: \"\\F197\";\n}\n.am-icon-slack:before {\n  content: \"\\F198\";\n}\n.am-icon-envelope-square:before {\n  content: \"\\F199\";\n}\n.am-icon-wordpress:before {\n  content: \"\\F19A\";\n}\n.am-icon-openid:before {\n  content: \"\\F19B\";\n}\n.am-icon-institution:before,\n.am-icon-bank:before,\n.am-icon-university:before {\n  content: \"\\F19C\";\n}\n.am-icon-mortar-board:before,\n.am-icon-graduation-cap:before {\n  content: \"\\F19D\";\n}\n.am-icon-yahoo:before {\n  content: \"\\F19E\";\n}\n.am-icon-google:before {\n  content: \"\\F1A0\";\n}\n.am-icon-reddit:before {\n  content: \"\\F1A1\";\n}\n.am-icon-reddit-square:before {\n  content: \"\\F1A2\";\n}\n.am-icon-stumbleupon-circle:before {\n  content: \"\\F1A3\";\n}\n.am-icon-stumbleupon:before {\n  content: \"\\F1A4\";\n}\n.am-icon-delicious:before {\n  content: \"\\F1A5\";\n}\n.am-icon-digg:before {\n  content: \"\\F1A6\";\n}\n.am-icon-pied-piper:before {\n  content: \"\\F1A7\";\n}\n.am-icon-pied-piper-alt:before {\n  content: \"\\F1A8\";\n}\n.am-icon-drupal:before {\n  content: \"\\F1A9\";\n}\n.am-icon-joomla:before {\n  content: \"\\F1AA\";\n}\n.am-icon-language:before {\n  content: \"\\F1AB\";\n}\n.am-icon-fax:before {\n  content: \"\\F1AC\";\n}\n.am-icon-building:before {\n  content: \"\\F1AD\";\n}\n.am-icon-child:before {\n  content: \"\\F1AE\";\n}\n.am-icon-paw:before {\n  content: \"\\F1B0\";\n}\n.am-icon-spoon:before {\n  content: \"\\F1B1\";\n}\n.am-icon-cube:before {\n  content: \"\\F1B2\";\n}\n.am-icon-cubes:before {\n  content: \"\\F1B3\";\n}\n.am-icon-behance:before {\n  content: \"\\F1B4\";\n}\n.am-icon-behance-square:before {\n  content: \"\\F1B5\";\n}\n.am-icon-steam:before {\n  content: \"\\F1B6\";\n}\n.am-icon-steam-square:before {\n  content: \"\\F1B7\";\n}\n.am-icon-recycle:before {\n  content: \"\\F1B8\";\n}\n.am-icon-automobile:before,\n.am-icon-car:before {\n  content: \"\\F1B9\";\n}\n.am-icon-cab:before,\n.am-icon-taxi:before {\n  content: \"\\F1BA\";\n}\n.am-icon-tree:before {\n  content: \"\\F1BB\";\n}\n.am-icon-spotify:before {\n  content: \"\\F1BC\";\n}\n.am-icon-deviantart:before {\n  content: \"\\F1BD\";\n}\n.am-icon-soundcloud:before {\n  content: \"\\F1BE\";\n}\n.am-icon-database:before {\n  content: \"\\F1C0\";\n}\n.am-icon-file-pdf-o:before {\n  content: \"\\F1C1\";\n}\n.am-icon-file-word-o:before {\n  content: \"\\F1C2\";\n}\n.am-icon-file-excel-o:before {\n  content: \"\\F1C3\";\n}\n.am-icon-file-powerpoint-o:before {\n  content: \"\\F1C4\";\n}\n.am-icon-file-photo-o:before,\n.am-icon-file-picture-o:before,\n.am-icon-file-image-o:before {\n  content: \"\\F1C5\";\n}\n.am-icon-file-zip-o:before,\n.am-icon-file-archive-o:before {\n  content: \"\\F1C6\";\n}\n.am-icon-file-sound-o:before,\n.am-icon-file-audio-o:before {\n  content: \"\\F1C7\";\n}\n.am-icon-file-movie-o:before,\n.am-icon-file-video-o:before {\n  content: \"\\F1C8\";\n}\n.am-icon-file-code-o:before {\n  content: \"\\F1C9\";\n}\n.am-icon-vine:before {\n  content: \"\\F1CA\";\n}\n.am-icon-codepen:before {\n  content: \"\\F1CB\";\n}\n.am-icon-jsfiddle:before {\n  content: \"\\F1CC\";\n}\n.am-icon-life-bouy:before,\n.am-icon-life-buoy:before,\n.am-icon-life-saver:before,\n.am-icon-support:before,\n.am-icon-life-ring:before {\n  content: \"\\F1CD\";\n}\n.am-icon-circle-o-notch:before {\n  content: \"\\F1CE\";\n}\n.am-icon-ra:before,\n.am-icon-rebel:before {\n  content: \"\\F1D0\";\n}\n.am-icon-ge:before,\n.am-icon-empire:before {\n  content: \"\\F1D1\";\n}\n.am-icon-git-square:before {\n  content: \"\\F1D2\";\n}\n.am-icon-git:before {\n  content: \"\\F1D3\";\n}\n.am-icon-y-combinator-square:before,\n.am-icon-yc-square:before,\n.am-icon-hacker-news:before {\n  content: \"\\F1D4\";\n}\n.am-icon-tencent-weibo:before {\n  content: \"\\F1D5\";\n}\n.am-icon-qq:before {\n  content: \"\\F1D6\";\n}\n.am-icon-wechat:before,\n.am-icon-weixin:before {\n  content: \"\\F1D7\";\n}\n.am-icon-send:before,\n.am-icon-paper-plane:before {\n  content: \"\\F1D8\";\n}\n.am-icon-send-o:before,\n.am-icon-paper-plane-o:before {\n  content: \"\\F1D9\";\n}\n.am-icon-history:before {\n  content: \"\\F1DA\";\n}\n.am-icon-circle-thin:before {\n  content: \"\\F1DB\";\n}\n.am-icon-header:before {\n  content: \"\\F1DC\";\n}\n.am-icon-paragraph:before {\n  content: \"\\F1DD\";\n}\n.am-icon-sliders:before {\n  content: \"\\F1DE\";\n}\n.am-icon-share-alt:before {\n  content: \"\\F1E0\";\n}\n.am-icon-share-alt-square:before {\n  content: \"\\F1E1\";\n}\n.am-icon-bomb:before {\n  content: \"\\F1E2\";\n}\n.am-icon-soccer-ball-o:before,\n.am-icon-futbol-o:before {\n  content: \"\\F1E3\";\n}\n.am-icon-tty:before {\n  content: \"\\F1E4\";\n}\n.am-icon-binoculars:before {\n  content: \"\\F1E5\";\n}\n.am-icon-plug:before {\n  content: \"\\F1E6\";\n}\n.am-icon-slideshare:before {\n  content: \"\\F1E7\";\n}\n.am-icon-twitch:before {\n  content: \"\\F1E8\";\n}\n.am-icon-yelp:before {\n  content: \"\\F1E9\";\n}\n.am-icon-newspaper-o:before {\n  content: \"\\F1EA\";\n}\n.am-icon-wifi:before {\n  content: \"\\F1EB\";\n}\n.am-icon-calculator:before {\n  content: \"\\F1EC\";\n}\n.am-icon-paypal:before {\n  content: \"\\F1ED\";\n}\n.am-icon-google-wallet:before {\n  content: \"\\F1EE\";\n}\n.am-icon-cc-visa:before {\n  content: \"\\F1F0\";\n}\n.am-icon-cc-mastercard:before {\n  content: \"\\F1F1\";\n}\n.am-icon-cc-discover:before {\n  content: \"\\F1F2\";\n}\n.am-icon-cc-amex:before {\n  content: \"\\F1F3\";\n}\n.am-icon-cc-paypal:before {\n  content: \"\\F1F4\";\n}\n.am-icon-cc-stripe:before {\n  content: \"\\F1F5\";\n}\n.am-icon-bell-slash:before {\n  content: \"\\F1F6\";\n}\n.am-icon-bell-slash-o:before {\n  content: \"\\F1F7\";\n}\n.am-icon-trash:before {\n  content: \"\\F1F8\";\n}\n.am-icon-copyright:before {\n  content: \"\\F1F9\";\n}\n.am-icon-at:before {\n  content: \"\\F1FA\";\n}\n.am-icon-eyedropper:before {\n  content: \"\\F1FB\";\n}\n.am-icon-paint-brush:before {\n  content: \"\\F1FC\";\n}\n.am-icon-birthday-cake:before {\n  content: \"\\F1FD\";\n}\n.am-icon-area-chart:before {\n  content: \"\\F1FE\";\n}\n.am-icon-pie-chart:before {\n  content: \"\\F200\";\n}\n.am-icon-line-chart:before {\n  content: \"\\F201\";\n}\n.am-icon-lastfm:before {\n  content: \"\\F202\";\n}\n.am-icon-lastfm-square:before {\n  content: \"\\F203\";\n}\n.am-icon-toggle-off:before {\n  content: \"\\F204\";\n}\n.am-icon-toggle-on:before {\n  content: \"\\F205\";\n}\n.am-icon-bicycle:before {\n  content: \"\\F206\";\n}\n.am-icon-bus:before {\n  content: \"\\F207\";\n}\n.am-icon-ioxhost:before {\n  content: \"\\F208\";\n}\n.am-icon-angellist:before {\n  content: \"\\F209\";\n}\n.am-icon-cc:before {\n  content: \"\\F20A\";\n}\n.am-icon-shekel:before,\n.am-icon-sheqel:before,\n.am-icon-ils:before {\n  content: \"\\F20B\";\n}\n.am-icon-meanpath:before {\n  content: \"\\F20C\";\n}\n.am-icon-buysellads:before {\n  content: \"\\F20D\";\n}\n.am-icon-connectdevelop:before {\n  content: \"\\F20E\";\n}\n.am-icon-dashcube:before {\n  content: \"\\F210\";\n}\n.am-icon-forumbee:before {\n  content: \"\\F211\";\n}\n.am-icon-leanpub:before {\n  content: \"\\F212\";\n}\n.am-icon-sellsy:before {\n  content: \"\\F213\";\n}\n.am-icon-shirtsinbulk:before {\n  content: \"\\F214\";\n}\n.am-icon-simplybuilt:before {\n  content: \"\\F215\";\n}\n.am-icon-skyatlas:before {\n  content: \"\\F216\";\n}\n.am-icon-cart-plus:before {\n  content: \"\\F217\";\n}\n.am-icon-cart-arrow-down:before {\n  content: \"\\F218\";\n}\n.am-icon-diamond:before {\n  content: \"\\F219\";\n}\n.am-icon-ship:before {\n  content: \"\\F21A\";\n}\n.am-icon-user-secret:before {\n  content: \"\\F21B\";\n}\n.am-icon-motorcycle:before {\n  content: \"\\F21C\";\n}\n.am-icon-street-view:before {\n  content: \"\\F21D\";\n}\n.am-icon-heartbeat:before {\n  content: \"\\F21E\";\n}\n.am-icon-venus:before {\n  content: \"\\F221\";\n}\n.am-icon-mars:before {\n  content: \"\\F222\";\n}\n.am-icon-mercury:before {\n  content: \"\\F223\";\n}\n.am-icon-intersex:before,\n.am-icon-transgender:before {\n  content: \"\\F224\";\n}\n.am-icon-transgender-alt:before {\n  content: \"\\F225\";\n}\n.am-icon-venus-double:before {\n  content: \"\\F226\";\n}\n.am-icon-mars-double:before {\n  content: \"\\F227\";\n}\n.am-icon-venus-mars:before {\n  content: \"\\F228\";\n}\n.am-icon-mars-stroke:before {\n  content: \"\\F229\";\n}\n.am-icon-mars-stroke-v:before {\n  content: \"\\F22A\";\n}\n.am-icon-mars-stroke-h:before {\n  content: \"\\F22B\";\n}\n.am-icon-neuter:before {\n  content: \"\\F22C\";\n}\n.am-icon-genderless:before {\n  content: \"\\F22D\";\n}\n.am-icon-facebook-official:before {\n  content: \"\\F230\";\n}\n.am-icon-pinterest-p:before {\n  content: \"\\F231\";\n}\n.am-icon-whatsapp:before {\n  content: \"\\F232\";\n}\n.am-icon-server:before {\n  content: \"\\F233\";\n}\n.am-icon-user-plus:before {\n  content: \"\\F234\";\n}\n.am-icon-user-times:before {\n  content: \"\\F235\";\n}\n.am-icon-hotel:before,\n.am-icon-bed:before {\n  content: \"\\F236\";\n}\n.am-icon-viacoin:before {\n  content: \"\\F237\";\n}\n.am-icon-train:before {\n  content: \"\\F238\";\n}\n.am-icon-subway:before {\n  content: \"\\F239\";\n}\n.am-icon-medium:before {\n  content: \"\\F23A\";\n}\n.am-icon-yc:before,\n.am-icon-y-combinator:before {\n  content: \"\\F23B\";\n}\n.am-icon-optin-monster:before {\n  content: \"\\F23C\";\n}\n.am-icon-opencart:before {\n  content: \"\\F23D\";\n}\n.am-icon-expeditedssl:before {\n  content: \"\\F23E\";\n}\n.am-icon-battery-4:before,\n.am-icon-battery-full:before {\n  content: \"\\F240\";\n}\n.am-icon-battery-3:before,\n.am-icon-battery-three-quarters:before {\n  content: \"\\F241\";\n}\n.am-icon-battery-2:before,\n.am-icon-battery-half:before {\n  content: \"\\F242\";\n}\n.am-icon-battery-1:before,\n.am-icon-battery-quarter:before {\n  content: \"\\F243\";\n}\n.am-icon-battery-0:before,\n.am-icon-battery-empty:before {\n  content: \"\\F244\";\n}\n.am-icon-mouse-pointer:before {\n  content: \"\\F245\";\n}\n.am-icon-i-cursor:before {\n  content: \"\\F246\";\n}\n.am-icon-object-group:before {\n  content: \"\\F247\";\n}\n.am-icon-object-ungroup:before {\n  content: \"\\F248\";\n}\n.am-icon-sticky-note:before {\n  content: \"\\F249\";\n}\n.am-icon-sticky-note-o:before {\n  content: \"\\F24A\";\n}\n.am-icon-cc-jcb:before {\n  content: \"\\F24B\";\n}\n.am-icon-cc-diners-club:before {\n  content: \"\\F24C\";\n}\n.am-icon-clone:before {\n  content: \"\\F24D\";\n}\n.am-icon-balance-scale:before {\n  content: \"\\F24E\";\n}\n.am-icon-hourglass-o:before {\n  content: \"\\F250\";\n}\n.am-icon-hourglass-1:before,\n.am-icon-hourglass-start:before {\n  content: \"\\F251\";\n}\n.am-icon-hourglass-2:before,\n.am-icon-hourglass-half:before {\n  content: \"\\F252\";\n}\n.am-icon-hourglass-3:before,\n.am-icon-hourglass-end:before {\n  content: \"\\F253\";\n}\n.am-icon-hourglass:before {\n  content: \"\\F254\";\n}\n.am-icon-hand-grab-o:before,\n.am-icon-hand-rock-o:before {\n  content: \"\\F255\";\n}\n.am-icon-hand-stop-o:before,\n.am-icon-hand-paper-o:before {\n  content: \"\\F256\";\n}\n.am-icon-hand-scissors-o:before {\n  content: \"\\F257\";\n}\n.am-icon-hand-lizard-o:before {\n  content: \"\\F258\";\n}\n.am-icon-hand-spock-o:before {\n  content: \"\\F259\";\n}\n.am-icon-hand-pointer-o:before {\n  content: \"\\F25A\";\n}\n.am-icon-hand-peace-o:before {\n  content: \"\\F25B\";\n}\n.am-icon-trademark:before {\n  content: \"\\F25C\";\n}\n.am-icon-registered:before {\n  content: \"\\F25D\";\n}\n.am-icon-creative-commons:before {\n  content: \"\\F25E\";\n}\n.am-icon-gg:before {\n  content: \"\\F260\";\n}\n.am-icon-gg-circle:before {\n  content: \"\\F261\";\n}\n.am-icon-tripadvisor:before {\n  content: \"\\F262\";\n}\n.am-icon-odnoklassniki:before {\n  content: \"\\F263\";\n}\n.am-icon-odnoklassniki-square:before {\n  content: \"\\F264\";\n}\n.am-icon-get-pocket:before {\n  content: \"\\F265\";\n}\n.am-icon-wikipedia-w:before {\n  content: \"\\F266\";\n}\n.am-icon-safari:before {\n  content: \"\\F267\";\n}\n.am-icon-chrome:before {\n  content: \"\\F268\";\n}\n.am-icon-firefox:before {\n  content: \"\\F269\";\n}\n.am-icon-opera:before {\n  content: \"\\F26A\";\n}\n.am-icon-internet-explorer:before {\n  content: \"\\F26B\";\n}\n.am-icon-tv:before,\n.am-icon-television:before {\n  content: \"\\F26C\";\n}\n.am-icon-contao:before {\n  content: \"\\F26D\";\n}\n.am-icon-500px:before {\n  content: \"\\F26E\";\n}\n.am-icon-amazon:before {\n  content: \"\\F270\";\n}\n.am-icon-calendar-plus-o:before {\n  content: \"\\F271\";\n}\n.am-icon-calendar-minus-o:before {\n  content: \"\\F272\";\n}\n.am-icon-calendar-times-o:before {\n  content: \"\\F273\";\n}\n.am-icon-calendar-check-o:before {\n  content: \"\\F274\";\n}\n.am-icon-industry:before {\n  content: \"\\F275\";\n}\n.am-icon-map-pin:before {\n  content: \"\\F276\";\n}\n.am-icon-map-signs:before {\n  content: \"\\F277\";\n}\n.am-icon-map-o:before {\n  content: \"\\F278\";\n}\n.am-icon-map:before {\n  content: \"\\F279\";\n}\n.am-icon-commenting:before {\n  content: \"\\F27A\";\n}\n.am-icon-commenting-o:before {\n  content: \"\\F27B\";\n}\n.am-icon-houzz:before {\n  content: \"\\F27C\";\n}\n.am-icon-vimeo:before {\n  content: \"\\F27D\";\n}\n.am-icon-black-tie:before {\n  content: \"\\F27E\";\n}\n.am-icon-fonticons:before {\n  content: \"\\F280\";\n}\n.am-icon-reddit-alien:before {\n  content: \"\\F281\";\n}\n.am-icon-edge:before {\n  content: \"\\F282\";\n}\n.am-icon-credit-card-alt:before {\n  content: \"\\F283\";\n}\n.am-icon-codiepie:before {\n  content: \"\\F284\";\n}\n.am-icon-modx:before {\n  content: \"\\F285\";\n}\n.am-icon-fort-awesome:before {\n  content: \"\\F286\";\n}\n.am-icon-usb:before {\n  content: \"\\F287\";\n}\n.am-icon-product-hunt:before {\n  content: \"\\F288\";\n}\n.am-icon-mixcloud:before {\n  content: \"\\F289\";\n}\n.am-icon-scribd:before {\n  content: \"\\F28A\";\n}\n.am-icon-pause-circle:before {\n  content: \"\\F28B\";\n}\n.am-icon-pause-circle-o:before {\n  content: \"\\F28C\";\n}\n.am-icon-stop-circle:before {\n  content: \"\\F28D\";\n}\n.am-icon-stop-circle-o:before {\n  content: \"\\F28E\";\n}\n.am-icon-shopping-bag:before {\n  content: \"\\F290\";\n}\n.am-icon-shopping-basket:before {\n  content: \"\\F291\";\n}\n.am-icon-hashtag:before {\n  content: \"\\F292\";\n}\n.am-icon-bluetooth:before {\n  content: \"\\F293\";\n}\n.am-icon-bluetooth-b:before {\n  content: \"\\F294\";\n}\n.am-icon-percent:before {\n  content: \"\\F295\";\n}\n/* Modifier: `am-icon-spin`\n============================================================================= */\n@keyframes icon-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n.am-icon-spin {\n  animation: icon-spin 2s infinite linear;\n}\n.am-icon-pulse {\n  animation: icon-spin 1s infinite steps(8);\n}\n.am-icon-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.am-icon-ul > li {\n  position: relative;\n}\n.am-icon-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n/* ==========================================================================\n   Component: Input group\n ============================================================================ */\n.am-input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n.am-input-group .am-form-field {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n.am-input-group-label,\n.am-input-group-btn,\n.am-input-group .am-form-field {\n  display: table-cell;\n}\n.am-input-group-label:not(:first-child):not(:last-child),\n.am-input-group-btn:not(:first-child):not(:last-child),\n.am-input-group .am-form-field:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.am-input-group-label,\n.am-input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.am-input-group-label {\n  height: 38px;\n  padding: 0 1em;\n  font-size: 1.6rem;\n  font-weight: normal;\n  line-height: 36px;\n  color: #555555;\n  text-align: center;\n  background-color: #eeeeee;\n  border: 1px solid #ccc;\n  border-radius: 0;\n}\n.am-input-group-label input[type=\"radio\"],\n.am-input-group-label input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n.am-input-group .am-form-field:first-child,\n.am-input-group-label:first-child,\n.am-input-group-btn:first-child > .am-btn,\n.am-input-group-btn:first-child > .am-btn-group > .am-btn,\n.am-input-group-btn:first-child > .am-dropdown-toggle,\n.am-input-group-btn:last-child > .am-btn:not(:last-child):not(.dropdown-toggle),\n.am-input-group-btn:last-child > .am-btn-group:not(:last-child) > .am-btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.am-input-group-label:first-child {\n  border-right: 0;\n}\n.am-input-group .am-form-field:last-child,\n.am-input-group-label:last-child,\n.am-input-group-btn:last-child > .am-btn,\n.am-input-group-btn:last-child > .am-btn-group > .am-btn,\n.am-input-group-btn:last-child > .am-dropdown-toggle,\n.am-input-group-btn:first-child > .am-btn:not(:first-child),\n.am-input-group-btn:first-child > .am-btn-group:not(:first-child) > .am-btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.am-input-group-label:last-child {\n  border-left: 0;\n}\n.am-input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n.am-input-group-btn > .am-btn {\n  position: relative;\n  border-color: #ccc;\n}\n.am-input-group-btn > .am-btn + .am-btn {\n  margin-left: -1px;\n}\n.am-input-group-btn > .am-btn:hover,\n.am-input-group-btn > .am-btn:focus,\n.am-input-group-btn > .am-btn:active {\n  z-index: 2;\n}\n.am-input-group-btn:first-child > .am-btn,\n.am-input-group-btn:first-child > .am-btn-group {\n  margin-right: -2px;\n}\n.am-input-group-btn:last-child > .am-btn,\n.am-input-group-btn:last-child > .am-btn-group {\n  margin-left: -1px;\n}\n.am-input-group .am-form-field,\n.am-input-group-btn > .am-btn {\n  height: 38px;\n  padding-bottom: auto;\n}\n.am-input-group-lg > .am-form-field,\n.am-input-group-lg > .am-input-group-label,\n.am-input-group-lg > .am-input-group-btn > .am-btn {\n  height: 42px;\n  font-size: 1.8rem !important;\n}\n.am-input-group-lg > .am-input-group-label {\n  line-height: 40px;\n}\n.am-input-group-sm > .am-form-field,\n.am-input-group-sm > .am-input-group-label,\n.am-input-group-sm > .am-input-group-btn > .am-btn {\n  height: 33px;\n  font-size: 1.4rem !important;\n}\n.am-input-group-sm > .am-input-group-label {\n  line-height: 31px;\n}\n.am-input-group-primary .am-input-group-label {\n  background: #0e90d2;\n  color: #fff;\n}\n.am-input-group-primary .am-input-group-label,\n.am-input-group-primary .am-input-group-btn > .am-btn,\n.am-input-group-primary.am-input-group .am-form-field {\n  border-color: #0e90d2;\n}\n.am-input-group-secondary .am-input-group-label {\n  background: #3bb4f2;\n  color: #fff;\n}\n.am-input-group-secondary .am-input-group-label,\n.am-input-group-secondary .am-input-group-btn > .am-btn,\n.am-input-group-secondary.am-input-group .am-form-field {\n  border-color: #3bb4f2;\n}\n.am-input-group-success .am-input-group-label {\n  background: #5eb95e;\n  color: #fff;\n}\n.am-input-group-success .am-input-group-label,\n.am-input-group-success .am-input-group-btn > .am-btn,\n.am-input-group-success.am-input-group .am-form-field {\n  border-color: #5eb95e;\n}\n.am-input-group-warning .am-input-group-label {\n  background: #F37B1D;\n  color: #fff;\n}\n.am-input-group-warning .am-input-group-label,\n.am-input-group-warning .am-input-group-btn > .am-btn,\n.am-input-group-warning.am-input-group .am-form-field {\n  border-color: #F37B1D;\n}\n.am-input-group-danger .am-input-group-label {\n  background: #dd514c;\n  color: #fff;\n}\n.am-input-group-danger .am-input-group-label,\n.am-input-group-danger .am-input-group-btn > .am-btn,\n.am-input-group-danger.am-input-group .am-form-field {\n  border-color: #dd514c;\n}\n/* ==========================================================================\n   Component: List\n ============================================================================ */\n.am-list {\n  margin-bottom: 1.6rem;\n  padding-left: 0;\n}\n.am-list > li {\n  position: relative;\n  display: block;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #dedede;\n  border-width: 1px 0;\n}\n.am-list > li > a {\n  display: block;\n  padding: 1rem 0;\n}\n.am-list > li > a.am-active,\n.am-list > li > a.am-active:hover,\n.am-list > li > a.am-active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #0e90d2;\n  border-color: #0e90d2;\n}\n.am-list > li > a.am-active .am-list-item-heading,\n.am-list > li > a.am-active:hover .am-list-item-heading,\n.am-list > li > a.am-active:focus .am-list-item-heading {\n  color: inherit;\n}\n.am-list > li > a.am-active .am-list-item-text,\n.am-list > li > a.am-active:hover .am-list-item-text,\n.am-list > li > a.am-active:focus .am-list-item-text {\n  color: #b2e2fa;\n}\n.am-list > li > .am-badge {\n  float: right;\n}\n.am-list > li > .am-badge + .am-badge {\n  margin-right: 5px;\n}\n/* Pure text list */\n.am-list-static > li {\n  padding: .8rem .2rem;\n}\n.am-list-static.am-list-border > li {\n  padding: 1rem;\n}\n/* with border */\n.am-list-border > li,\n.am-list-bordered > li {\n  border-width: 1px;\n}\n.am-list-border > li:first-child,\n.am-list-bordered > li:first-child,\n.am-list-border > li:first-child > a,\n.am-list-bordered > li:first-child > a {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.am-list-border > li:last-child,\n.am-list-bordered > li:last-child,\n.am-list-border > li:last-child > a,\n.am-list-bordered > li:last-child > a {\n  margin-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.am-list-border > li > a,\n.am-list-bordered > li > a {\n  padding: 1rem;\n}\n.am-list-border > li > a:hover,\n.am-list-bordered > li > a:hover,\n.am-list-border > li > a:focus,\n.am-list-bordered > li > a:focus {\n  background-color: #f5f5f5;\n}\n/* Striped */\n.am-list-striped > li:nth-of-type(even) {\n  background: #f5f5f5;\n}\n.am-list-item-hd {\n  margin-top: 0;\n}\n.am-list-item-text {\n  line-height: 1.4;\n  font-size: 1.3rem;\n  color: #999999;\n  margin: 0;\n}\n/* ==========================================================================\n   Component: Panel\n ============================================================================ */\n.am-panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 0;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n/* Panel header */\n.am-panel-hd {\n  padding: 0.6rem 1.25rem;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n/* Panel content */\n.am-panel-bd {\n  padding: 1.25rem;\n}\n.am-panel-title {\n  margin: 0;\n  font-size: 100%;\n  color: inherit;\n}\n.am-panel-title > a {\n  color: inherit;\n}\n/* Panel footer */\n.am-panel-footer {\n  padding: 0.6rem 1.25rem;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.am-panel-default {\n  border-color: #ddd;\n}\n.am-panel-default > .am-panel-hd {\n  color: #444;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n.am-panel-default > .am-panel-hd + .am-panel-collapse > .am-panel-bd {\n  border-top-color: #ddd;\n}\n.am-panel-default > .am-panel-footer + .am-panel-collapse > .am-panel-bd {\n  border-bottom-color: #ddd;\n}\n.am-panel-primary {\n  border-color: #10a0ea;\n}\n.am-panel-primary > .am-panel-hd {\n  color: #fff;\n  background-color: #0e90d2;\n  border-color: #10a0ea;\n}\n.am-panel-primary > .am-panel-hd + .am-panel-collapse > .am-panel-bd {\n  border-top-color: #10a0ea;\n}\n.am-panel-primary > .am-panel-footer + .am-panel-collapse > .am-panel-bd {\n  border-bottom-color: #10a0ea;\n}\n.am-panel-secondary {\n  border-color: #caebfb;\n}\n.am-panel-secondary > .am-panel-hd {\n  color: #14a6ef;\n  background-color: rgba(59, 180, 242, 0.15);\n  border-color: #caebfb;\n}\n.am-panel-secondary > .am-panel-hd + .am-panel-collapse > .am-panel-bd {\n  border-top-color: #caebfb;\n}\n.am-panel-secondary > .am-panel-footer + .am-panel-collapse > .am-panel-bd {\n  border-bottom-color: #caebfb;\n}\n.am-panel-success {\n  border-color: #c9e7c9;\n}\n.am-panel-success > .am-panel-hd {\n  color: #5eb95e;\n  background-color: rgba(94, 185, 94, 0.15);\n  border-color: #c9e7c9;\n}\n.am-panel-success > .am-panel-hd + .am-panel-collapse > .am-panel-bd {\n  border-top-color: #c9e7c9;\n}\n.am-panel-success > .am-panel-footer + .am-panel-collapse > .am-panel-bd {\n  border-bottom-color: #c9e7c9;\n}\n.am-panel-warning {\n  border-color: #fbd0ae;\n}\n.am-panel-warning > .am-panel-hd {\n  color: #F37B1D;\n  background-color: rgba(243, 123, 29, 0.15);\n  border-color: #fbd0ae;\n}\n.am-panel-warning > .am-panel-hd + .am-panel-collapse > .am-panel-bd {\n  border-top-color: #fbd0ae;\n}\n.am-panel-warning > .am-panel-footer + .am-panel-collapse > .am-panel-bd {\n  border-bottom-color: #fbd0ae;\n}\n.am-panel-danger {\n  border-color: #f5cecd;\n}\n.am-panel-danger > .am-panel-hd {\n  color: #dd514c;\n  background-color: rgba(221, 81, 76, 0.15);\n  border-color: #f5cecd;\n}\n.am-panel-danger > .am-panel-hd + .am-panel-collapse > .am-panel-bd {\n  border-top-color: #f5cecd;\n}\n.am-panel-danger > .am-panel-footer + .am-panel-collapse > .am-panel-bd {\n  border-bottom-color: #f5cecd;\n}\n.am-panel > .am-table {\n  margin-bottom: 0;\n}\n.am-panel > .am-table:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.am-panel > .am-table:first-child > thead:first-child > tr:first-child td:first-child,\n.am-panel > .am-table:first-child > tbody:first-child > tr:first-child td:first-child,\n.am-panel > .am-table:first-child > thead:first-child > tr:first-child th:first-child,\n.am-panel > .am-table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 0;\n}\n.am-panel > .am-table:first-child > thead:first-child > tr:first-child td:last-child,\n.am-panel > .am-table:first-child > tbody:first-child > tr:first-child td:last-child,\n.am-panel > .am-table:first-child > thead:first-child > tr:first-child th:last-child,\n.am-panel > .am-table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 0;\n}\n.am-panel > .am-table:last-child {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.am-panel > .am-table:last-child > tbody:last-child > tr:last-child td:first-child,\n.am-panel > .am-table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.am-panel > .am-table:last-child > tbody:last-child > tr:last-child th:first-child,\n.am-panel > .am-table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 0;\n}\n.am-panel > .am-table:last-child > tbody:last-child > tr:last-child td:last-child,\n.am-panel > .am-table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.am-panel > .am-table:last-child > tbody:last-child > tr:last-child th:last-child,\n.am-panel > .am-table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 0;\n}\n.am-panel > .am-panel-bd + .am-table {\n  border-top: 1px solid #ddd;\n}\n.am-panel > .am-table > tbody:first-child > tr:first-child th,\n.am-panel > .am-table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n.am-panel > .am-table-bd {\n  border: 0;\n}\n.am-panel > .am-table-bd > thead > tr > th:first-child,\n.am-panel > .am-table-bd > tbody > tr > th:first-child,\n.am-panel > .am-table-bd > tfoot > tr > th:first-child,\n.am-panel > .am-table-bd > thead > tr > td:first-child,\n.am-panel > .am-table-bd > tbody > tr > td:first-child,\n.am-panel > .am-table-bd > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n.am-panel > .am-table-bd > thead > tr > th:last-child,\n.am-panel > .am-table-bd > tbody > tr > th:last-child,\n.am-panel > .am-table-bd > tfoot > tr > th:last-child,\n.am-panel > .am-table-bd > thead > tr > td:last-child,\n.am-panel > .am-table-bd > tbody > tr > td:last-child,\n.am-panel > .am-table-bd > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n.am-panel > .am-table-bd > thead > tr:first-child > td,\n.am-panel > .am-table-bd > tbody > tr:first-child > td,\n.am-panel > .am-table-bd > thead > tr:first-child > th,\n.am-panel > .am-table-bd > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n.am-panel > .am-table-bd > tbody > tr:last-child > td,\n.am-panel > .am-table-bd > tfoot > tr:last-child > td,\n.am-panel > .am-table-bd > tbody > tr:last-child > th,\n.am-panel > .am-table-bd > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n/* Wrap list */\n.am-panel > .am-list {\n  margin: 0;\n}\n.am-panel > .am-list > li > a {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.am-panel > .am-list-static li {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n/* Panel group */\n.am-panel-group {\n  margin-bottom: 2rem;\n}\n.am-panel-group .am-panel {\n  margin-bottom: 0;\n  border-radius: 0;\n}\n.am-panel-group .am-panel + .am-panel {\n  margin-top: 6px;\n}\n.am-panel-group .am-panel-hd {\n  border-bottom: 0;\n}\n.am-panel-group .am-panel-hd + .am-panel-collapse .am-panel-bd {\n  border-top: 1px solid #ddd;\n}\n.am-panel-group .am-panel-footer {\n  border-top: 0;\n}\n.am-panel-group .am-panel-footer + .am-panel-collapse .am-panel-bd {\n  border-bottom: 1px solid #ddd;\n}\n/* ==========================================================================\n   Component: Progress\n ============================================================================ */\n/* Progress bar animation */\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 36px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n/*  Progress container */\n.am-progress {\n  overflow: hidden;\n  height: 2rem;\n  margin-bottom: 2rem;\n  background-color: #f5f5f5;\n  border-radius: 0;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n/* Progress bar */\n.am-progress-bar {\n  float: left;\n  width: 0;\n  height: 100%;\n  font-size: 1.2rem;\n  line-height: 2rem;\n  color: #fff;\n  text-align: center;\n  background-color: #0e90d2;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  transition: width .6s ease;\n}\n.am-progress-striped .am-progress-bar {\n  background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, rgba(255, 255, 255, 0.15)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255, 255, 255, 0.15)), color-stop(0.75, rgba(255, 255, 255, 0.15)), color-stop(0.75, transparent), to(transparent));\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -moz-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 36px 36px;\n}\n.am-progress.am-active .am-progress-bar {\n  animation: progress-bar-stripes 2s linear infinite;\n}\n.am-progress-bar[aria-valuenow=\"1\"],\n.am-progress-bar[aria-valuenow=\"2\"] {\n  min-width: 30px;\n}\n.am-progress-bar[aria-valuenow=\"0\"] {\n  color: #999999;\n  min-width: 30px;\n  background: none;\n  box-shadow: none;\n}\n.am-progress-bar-secondary {\n  background-color: #3bb4f2;\n}\n.am-progress-striped .am-progress-bar-secondary {\n  background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, rgba(255, 255, 255, 0.15)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255, 255, 255, 0.15)), color-stop(0.75, rgba(255, 255, 255, 0.15)), color-stop(0.75, transparent), to(transparent));\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -moz-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.am-progress-bar-success {\n  background-color: #5eb95e;\n}\n.am-progress-striped .am-progress-bar-success {\n  background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, rgba(255, 255, 255, 0.15)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255, 255, 255, 0.15)), color-stop(0.75, rgba(255, 255, 255, 0.15)), color-stop(0.75, transparent), to(transparent));\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -moz-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.am-progress-bar-warning {\n  background-color: #F37B1D;\n}\n.am-progress-striped .am-progress-bar-warning {\n  background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, rgba(255, 255, 255, 0.15)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255, 255, 255, 0.15)), color-stop(0.75, rgba(255, 255, 255, 0.15)), color-stop(0.75, transparent), to(transparent));\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -moz-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.am-progress-bar-danger {\n  background-color: #dd514c;\n}\n.am-progress-striped .am-progress-bar-danger {\n  background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, rgba(255, 255, 255, 0.15)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255, 255, 255, 0.15)), color-stop(0.75, rgba(255, 255, 255, 0.15)), color-stop(0.75, transparent), to(transparent));\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -moz-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.am-progress-xs {\n  height: 0.6rem;\n}\n.am-progress-sm {\n  height: 1.2rem;\n}\n/* ==========================================================================\n   Component: Thumbnail\n ============================================================================ */\n.am-thumbnail {\n  display: block;\n  padding: 2px;\n  margin-bottom: 2rem;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0;\n  transition: all 0.2s ease-in-out;\n}\n.am-thumbnail > img,\n.am-thumbnail a > img {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n.am-thumbnail a.am-thumbnail:hover,\n.am-thumbnail a.am-thumbnail:focus,\n.am-thumbnail a.am-thumbnail.active {\n  border-color: #0e90d2;\n  background-color: #fff;\n}\nimg.am-thumbnail,\n.am-thumbnail > img,\n.am-thumbnail a > img {\n  max-width: 100%;\n  height: auto;\n}\n/* Image caption */\n.am-thumbnail-caption {\n  margin: 0;\n  padding: 0.8rem;\n  color: #333;\n  font-weight: normal;\n}\n.am-thumbnail-caption *:last-child {\n  margin-bottom: 0;\n}\n.am-thumbnails {\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n}\n.am-thumbnails > li {\n  padding: 0 .5rem 1rem .5rem;\n}\n/* ==========================================================================\n   Component: Utility\n ============================================================================ */\n.am-scrollable-horizontal {\n  width: 100%;\n  overflow-y: hidden;\n  overflow-x: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  -webkit-overflow-scrolling: touch;\n}\n.am-scrollable-vertical {\n  height: 240px;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  resize: vertical;\n}\n/* Border-radius*/\n.am-square {\n  border-radius: 0;\n}\n.am-radius {\n  border-radius: 2px;\n}\n.am-round {\n  border-radius: 1000px;\n}\n.am-circle {\n  border-radius: 50%;\n}\n/* Float blocks*/\n.am-cf:before,\n.am-cf:after {\n  content: \" \";\n  display: table;\n}\n.am-cf:after {\n  clear: both;\n}\n.am-fl {\n  float: left;\n}\n.am-fr {\n  float: right;\n}\n.am-nbfc {\n  overflow: hidden;\n}\n.am-center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/* Display */\n.am-block {\n  display: block !important;\n}\n.am-inline {\n  display: inline !important;\n}\n.am-inline-block {\n  display: inline-block !important;\n}\n.am-hide {\n  display: none !important;\n  visibility: hidden !important;\n}\n/*\n* Remove whitespace between child elements when using `inline-block`\n*/\n.am-vertical-align {\n  font-size: 0.001px;\n}\n/*\n* The `@{ns}vertical-align` container needs a specific height\n*/\n.am-vertical-align:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n/*\n* Sub-object which can have any height\n* 1. Reset whitespace hack\n*/\n.am-vertical-align-middle,\n.am-vertical-align-bottom {\n  display: inline-block;\n  font-size: 1.6rem;\n  /* 1 */\n  max-width: 100%;\n}\n.am-vertical-align-middle {\n  vertical-align: middle;\n}\n.am-vertical-align-bottom {\n  vertical-align: bottom;\n}\n.am-responsive-width {\n  box-sizing: border-box;\n  max-width: 100%;\n  height: auto;\n}\n/* Margin helpers */\n.am-margin {\n  margin: 1.6rem;\n}\n.am-margin-0 {\n  margin: 0!important;\n}\n.am-margin-xs {\n  margin: 0.5rem;\n}\n.am-margin-sm {\n  margin: 1rem;\n}\n.am-margin-lg {\n  margin: 2.4rem;\n}\n.am-margin-xl {\n  margin: 3.2rem;\n}\n.am-margin-horizontal {\n  margin-left: 1.6rem;\n  margin-right: 1.6rem;\n}\n.am-margin-horizontal-0 {\n  margin-left: 0!important;\n  margin-right: 0!important;\n}\n.am-margin-horizontal-xs {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.am-margin-horizontal-sm {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.am-margin-horizontal-lg {\n  margin-left: 2.4rem;\n  margin-right: 2.4rem;\n}\n.am-margin-horizontal-xl {\n  margin-left: 3.2rem;\n  margin-right: 3.2rem;\n}\n.am-margin-vertical {\n  margin-top: 1.6rem;\n  margin-bottom: 1.6rem;\n}\n.am-margin-vertical-0 {\n  margin-top: 0!important;\n  margin-bottom: 0!important;\n}\n.am-margin-vertical-xs {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.am-margin-vertical-sm {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.am-margin-vertical-lg {\n  margin-top: 2.4rem;\n  margin-bottom: 2.4rem;\n}\n.am-margin-vertical-xl {\n  margin-top: 3.2rem;\n  margin-bottom: 3.2rem;\n}\n.am-margin-top {\n  margin-top: 1.6rem;\n}\n.am-margin-top-0 {\n  margin-top: 0!important;\n}\n.am-margin-top-xs {\n  margin-top: 0.5rem;\n}\n.am-margin-top-sm {\n  margin-top: 1rem;\n}\n.am-margin-top-lg {\n  margin-top: 2.4rem;\n}\n.am-margin-top-xl {\n  margin-top: 3.2rem;\n}\n.am-margin-bottom {\n  margin-bottom: 1.6rem;\n}\n.am-margin-bottom-0 {\n  margin-bottom: 0!important;\n}\n.am-margin-bottom-xs {\n  margin-bottom: 0.5rem;\n}\n.am-margin-bottom-sm {\n  margin-bottom: 1rem;\n}\n.am-margin-bottom-lg {\n  margin-bottom: 2.4rem;\n}\n.am-margin-bottom-xl {\n  margin-bottom: 3.2rem;\n}\n.am-margin-left {\n  margin-left: 1.6rem;\n}\n.am-margin-left-0 {\n  margin-left: 0!important;\n}\n.am-margin-left-xs {\n  margin-left: 0.5rem;\n}\n.am-margin-left-sm {\n  margin-left: 1rem;\n}\n.am-margin-left-lg {\n  margin-left: 2.4rem;\n}\n.am-margin-left-xl {\n  margin-left: 3.2rem;\n}\n.am-margin-right {\n  margin-right: 1.6rem;\n}\n.am-margin-right-0 {\n  margin-right: 0!important;\n}\n.am-margin-right-xs {\n  margin-right: 0.5rem;\n}\n.am-margin-right-sm {\n  margin-right: 1rem;\n}\n.am-margin-right-lg {\n  margin-right: 2.4rem;\n}\n.am-margin-right-xl {\n  margin-right: 3.2rem;\n}\n/* Padding helpers */\n.am-padding {\n  padding: 1.6rem;\n}\n.am-padding-0 {\n  padding: 0!important;\n}\n.am-padding-xs {\n  padding: 0.5rem;\n}\n.am-padding-sm {\n  padding: 1rem;\n}\n.am-padding-lg {\n  padding: 2.4rem;\n}\n.am-padding-xl {\n  padding: 3.2rem;\n}\n.am-padding-horizontal {\n  padding-left: 1.6rem;\n  padding-right: 1.6rem;\n}\n.am-padding-horizontal-0 {\n  padding-left: 0!important;\n  padding-right: 0!important;\n}\n.am-padding-horizontal-xs {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.am-padding-horizontal-sm {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.am-padding-horizontal-lg {\n  padding-left: 2.4rem;\n  padding-right: 2.4rem;\n}\n.am-padding-horizontal-xl {\n  padding-left: 3.2rem;\n  padding-right: 3.2rem;\n}\n.am-padding-vertical {\n  padding-top: 1.6rem;\n  padding-bottom: 1.6rem;\n}\n.am-padding-vertical-0 {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.am-padding-vertical-xs {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.am-padding-vertical-sm {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.am-padding-vertical-lg {\n  padding-top: 2.4rem;\n  padding-bottom: 2.4rem;\n}\n.am-padding-vertical-xl {\n  padding-top: 3.2rem;\n  padding-bottom: 3.2rem;\n}\n.am-padding-top {\n  padding-top: 1.6rem;\n}\n.am-padding-top-0 {\n  padding-top: 0!important;\n}\n.am-padding-top-xs {\n  padding-top: 0.5rem;\n}\n.am-padding-top-sm {\n  padding-top: 1rem;\n}\n.am-padding-top-lg {\n  padding-top: 2.4rem;\n}\n.am-padding-top-xl {\n  padding-top: 3.2rem;\n}\n.am-padding-bottom {\n  padding-bottom: 1.6rem;\n}\n.am-padding-bottom-0 {\n  padding-bottom: 0!important;\n}\n.am-padding-bottom-xs {\n  padding-bottom: 0.5rem;\n}\n.am-padding-bottom-sm {\n  padding-bottom: 1rem;\n}\n.am-padding-bottom-lg {\n  padding-bottom: 2.4rem;\n}\n.am-padding-bottom-xl {\n  padding-bottom: 3.2rem;\n}\n.am-padding-left {\n  padding-left: 1.6rem;\n}\n.am-padding-left-0 {\n  padding-left: 0!important;\n}\n.am-padding-left-xs {\n  padding-left: 0.5rem;\n}\n.am-padding-left-sm {\n  padding-left: 1rem;\n}\n.am-padding-left-lg {\n  padding-left: 2.4rem;\n}\n.am-padding-left-xl {\n  padding-left: 3.2rem;\n}\n.am-padding-right {\n  padding-right: 1.6rem;\n}\n.am-padding-right-0 {\n  padding-right: 0!important;\n}\n.am-padding-right-xs {\n  padding-right: 0.5rem;\n}\n.am-padding-right-sm {\n  padding-right: 1rem;\n}\n.am-padding-right-lg {\n  padding-right: 2.4rem;\n}\n.am-padding-right-xl {\n  padding-right: 3.2rem;\n}\n/* small displays */\n@media only screen {\n  .am-show-sm-only,\n  .am-show-sm-up,\n  .am-show-sm,\n  .am-show-sm-down,\n  .am-hide-md-only,\n  .am-hide-md-up,\n  .am-hide-md,\n  .am-show-md-down,\n  .am-hide-lg-only,\n  .am-hide-lg-up,\n  .am-hide-lg,\n  .am-show-lg-down {\n    display: inherit !important;\n  }\n  .am-hide-sm-only,\n  .am-hide-sm-up,\n  .am-hide-sm,\n  .am-hide-sm-down,\n  .am-show-md-only,\n  .am-show-md-up,\n  .am-show-md,\n  .am-hide-md-down,\n  .am-show-lg-only,\n  .am-show-lg-up,\n  .am-show-lg,\n  .am-hide-lg-down {\n    display: none !important;\n  }\n  /* table */\n  table.am-show-sm-only,\n  table.am-show-sm-up,\n  table.am-show-sm,\n  table.am-show-sm-down,\n  table.am-hide-md-only,\n  table.am-hide-md-up,\n  table.am-hide-md,\n  table.am-show-md-down,\n  table.am-hide-lg-only,\n  table.am-hide-lg-up,\n  table.am-hide-lg,\n  table.am-show-lg-down {\n    display: table !important;\n  }\n  thead.am-show-sm-only,\n  thead.am-show-sm-up,\n  thead.am-show-sm,\n  thead.am-show-sm-down,\n  thead.am-hide-md-only,\n  thead.am-hide-md-up,\n  thead.am-hide-md,\n  thead.am-show-md-down,\n  thead.am-hide-lg-only,\n  thead.am-hide-lg-up,\n  thead.am-hide-lg,\n  thead.am-show-lg-down {\n    display: table-header-group !important;\n  }\n  tbody.am-show-sm-only,\n  tbody.am-show-sm-up,\n  tbody.am-show-sm,\n  tbody.am-show-sm-down,\n  tbody.am-hide-md-only,\n  tbody.am-hide-md-up,\n  tbody.am-hide-md,\n  tbody.am-show-md-down,\n  tbody.am-hide-lg-only,\n  tbody.am-hide-lg-up,\n  tbody.am-hide-lg,\n  tbody.am-show-lg-down {\n    display: table-row-group !important;\n  }\n  tr.am-show-sm-only,\n  tr.am-show-sm-up,\n  tr.am-show-sm,\n  tr.am-show-sm-down,\n  tr.am-hide-md-only,\n  tr.am-hide-md-up,\n  tr.am-hide-md,\n  tr.am-show-md-down,\n  tr.am-hide-lg-only,\n  tr.am-hide-lg-up,\n  tr.am-hide-lg,\n  tr.am-show-lg-down {\n    display: table-row !important;\n  }\n  th.am-show-sm-only,\n  td.am-show-sm-only,\n  th.am-show-sm-up,\n  td.am-show-sm-up,\n  th.am-show-sm,\n  td.am-show-sm,\n  th.am-show-sm-down,\n  td.am-show-sm-down,\n  th.am-hide-md-only,\n  td.am-hide-md-only,\n  th.am-hide-md-up,\n  td.am-hide-md-up,\n  th.am-hide-md,\n  td.am-hide-md,\n  th.am-show-md-down,\n  td.am-show-md-down,\n  th.am-hide-lg-only,\n  td.am-hide-lg-only,\n  th.am-hide-lg-up,\n  td.am-hide-lg-up,\n  th.am-hide-lg,\n  td.am-hide-lg,\n  th.am-show-lg-down,\n  td.am-show-lg-down {\n    display: table-cell !important;\n  }\n}\n/* medium displays */\n@media only screen and (min-width:641px) {\n  .am-hide-sm-only,\n  .am-show-sm-up,\n  .am-hide-sm,\n  .am-hide-sm-down,\n  .am-show-md-only,\n  .am-show-md-up,\n  .am-show-md,\n  .am-show-md-down,\n  .am-hide-lg-only,\n  .am-hide-lg-up,\n  .am-hide-lg,\n  .am-show-lg-down {\n    display: inherit !important;\n  }\n  .am-show-sm-only,\n  .am-hide-sm-up,\n  .am-show-sm,\n  .am-show-sm-down,\n  .am-hide-md-only,\n  .am-hide-md-up,\n  .am-hide-md,\n  .am-hide-md-down,\n  .am-show-lg-only,\n  .am-show-lg-up,\n  .am-show-lg,\n  .am-hide-lg-down {\n    display: none !important;\n  }\n  table.am-hide-sm-only,\n  table.am-show-sm-up,\n  table.am-hide-sm,\n  table.am-hide-sm-down,\n  table.am-show-md-only,\n  table.am-show-md-up,\n  table.am-show-md,\n  table.am-show-md-down,\n  table.am-hide-lg-only,\n  table.am-hide-lg-up,\n  table.am-hide-lg,\n  table.am-show-lg-down {\n    display: table !important;\n  }\n  thead.am-hide-sm-only,\n  thead.am-show-sm-up,\n  thead.am-hide-sm,\n  thead.am-hide-sm-down,\n  thead.am-show-md-only,\n  thead.am-show-md-up,\n  thead.am-show-md,\n  thead.am-show-md-down,\n  thead.am-hide-lg-only,\n  thead.am-hide-lg-up,\n  thead.am-hide-lg,\n  thead.am-show-lg-down {\n    display: table-header-group !important;\n  }\n  tbody.am-hide-sm-only,\n  tbody.am-show-sm-up,\n  tbody.am-hide-sm,\n  tbody.am-hide-sm-down,\n  tbody.am-show-md-only,\n  tbody.am-show-md-up,\n  tbody.am-show-md,\n  tbody.am-show-md-down,\n  tbody.am-hide-lg-only,\n  tbody.am-hide-lg-up,\n  tbody.am-hide-lg,\n  tbody.am-show-lg-down {\n    display: table-row-group !important;\n  }\n  tr.am-hide-sm-only,\n  tr.am-show-sm-up,\n  tr.am-hide-sm,\n  tr.am-hide-sm-down,\n  tr.am-show-md-only,\n  tr.am-show-md-up,\n  tr.am-show-md,\n  tr.am-show-md-down,\n  tr.am-hide-lg-only,\n  tr.am-hide-lg-up,\n  tr.am-hide-lg,\n  tr.am-show-lg-down {\n    display: table-row !important;\n  }\n  th.am-hide-sm-only,\n  td.am-hide-sm-only,\n  th.am-show-sm-up,\n  td.am-show-sm-up,\n  th.am-hide-sm,\n  td.am-hide-sm,\n  th.am-hide-sm-down,\n  td.am-hide-sm-down,\n  th.am-show-md-only,\n  td.am-show-md-only,\n  th.am-show-md-up,\n  td.am-show-md-up,\n  th.am-show-md,\n  td.am-show-md,\n  th.am-show-md-down,\n  td.am-show-md-down,\n  th.am-hide-lg-only,\n  td.am-hide-lg-only,\n  th.am-hide-lg-up,\n  td.am-hide-lg-up,\n  th.am-hide-lg,\n  td.am-hide-lg,\n  th.am-show-lg-down,\n  td.am-show-lg-down {\n    display: table-cell !important;\n  }\n}\n/* large displays */\n@media only screen and (min-width:1025px) {\n  .am-hide-sm-only,\n  .am-show-sm-up,\n  .am-hide-sm,\n  .am-hide-sm-down,\n  .am-hide-md-only,\n  .am-show-md-up,\n  .am-hide-md,\n  .am-hide-md-down,\n  .am-show-lg-only,\n  .am-show-lg-up,\n  .am-show-lg,\n  .am-show-lg-down {\n    display: inherit !important;\n  }\n  .am-show-sm-only,\n  .am-hide-sm-up,\n  .am-show-sm,\n  .am-show-sm-down,\n  .am-show-md-only,\n  .am-hide-md-up,\n  .am-show-md,\n  .am-show-md-down,\n  .am-hide-lg-only,\n  .am-hide-lg-up,\n  .am-hide-lg,\n  .am-hide-lg-down {\n    display: none !important;\n  }\n  table.am-hide-sm-only,\n  table.am-show-sm-up,\n  table.am-hide-sm,\n  table.am-hide-sm-down,\n  table.am-hide-md-only,\n  table.am-show-md-up,\n  table.am-hide-md,\n  table.am-hide-md-down,\n  table.am-show-lg-only,\n  table.am-show-lg-up,\n  table.am-show-lg,\n  table.am-show-lg-down {\n    display: table !important;\n  }\n  thead.am-hide-sm-only,\n  thead.am-show-sm-up,\n  thead.am-hide-sm,\n  thead.am-hide-sm-down,\n  thead.am-hide-md-only,\n  thead.am-show-md-up,\n  thead.am-hide-md,\n  thead.am-hide-md-down,\n  thead.am-show-lg-only,\n  thead.am-show-lg-up,\n  thead.am-show-lg,\n  thead.am-show-lg-down {\n    display: table-header-group !important;\n  }\n  tbody.am-hide-sm-only,\n  tbody.am-show-sm-up,\n  tbody.am-hide-sm,\n  tbody.am-hide-sm-down,\n  tbody.am-hide-md-only,\n  tbody.am-show-md-up,\n  tbody.am-hide-md,\n  tbody.am-hide-md-down,\n  tbody.am-show-lg-only,\n  tbody.am-show-lg-up,\n  tbody.am-show-lg,\n  tbody.am-show-lg-down {\n    display: table-row-group !important;\n  }\n  tr.am-hide-sm-only,\n  tr.am-show-sm-up,\n  tr.am-hide-sm,\n  tr.am-hide-sm-down,\n  tr.am-hide-md-only,\n  tr.am-show-md-up,\n  tr.am-hide-md,\n  tr.am-hide-md-down,\n  tr.am-show-lg-only,\n  tr.am-show-lg-up,\n  tr.am-show-lg,\n  tr.am-show-lg-down {\n    display: table-row !important;\n  }\n  th.am-hide-sm-only,\n  td.am-hide-sm-only,\n  th.am-show-sm-up,\n  td.am-show-sm-up,\n  th.am-hide-sm,\n  td.am-hide-sm,\n  th.am-hide-sm-down,\n  td.am-hide-sm-down,\n  th.am-hide-md-only,\n  td.am-hide-md-only,\n  th.am-show-md-up,\n  td.am-show-md-up,\n  th.am-hide-md,\n  td.am-hide-md,\n  th.am-hide-md-down,\n  td.am-hide-md-down,\n  th.am-show-lg-only,\n  td.am-show-lg-only,\n  th.am-show-lg-up,\n  td.am-show-lg-up,\n  th.am-show-lg,\n  td.am-show-lg,\n  th.am-show-lg-down,\n  td.am-show-lg-down {\n    display: table-cell !important;\n  }\n}\n@media only screen and (orientation: landscape) {\n  .am-show-landscape,\n  .am-hide-portrait {\n    display: inherit !important;\n  }\n  .am-hide-landscape,\n  .am-show-portrait {\n    display: none !important;\n  }\n}\n@media only screen and (orientation: portrait) {\n  .am-show-portrait,\n  .am-hide-landscape {\n    display: inherit !important;\n  }\n  .am-hide-portrait,\n  .am-show-landscape {\n    display: none !important;\n  }\n}\n.am-sans-serif {\n  font-family: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\", \"wenquanyi micro hei\", \"Hiragino Sans GB\", \"Hiragino Sans GB W3\", \"FontAwesome\", sans-serif;\n}\n.am-serif {\n  font-family: Georgia, \"Times New Roman\", Times, SimSun, \"FontAwesome\", serif;\n}\n.am-kai {\n  font-family: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, \"FontAwesome\", serif;\n}\n.am-monospace {\n  font-family: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\n}\n.am-text-primary {\n  color: #0e90d2;\n}\n.am-text-secondary {\n  color: #3bb4f2;\n}\n.am-text-success {\n  color: #5eb95e;\n}\n.am-text-warning {\n  color: #F37B1D;\n}\n.am-text-danger {\n  color: #dd514c;\n}\n.am-link-muted {\n  color: #666;\n}\n.am-link-muted a {\n  color: #666;\n}\n.am-link-muted:hover,\n.am-link-muted a:hover {\n  color: #555;\n}\n.am-text-default {\n  font-size: 1.6rem;\n}\n/*\n.@{ns}text-xxs {\n  font-size: @font-size-xxs;\n}\n*/\n.am-text-xs {\n  font-size: 1.2rem;\n}\n.am-text-sm {\n  font-size: 1.4rem;\n}\n.am-text-lg {\n  font-size: 1.8rem;\n}\n.am-text-xl {\n  font-size: 2.4rem;\n}\n.am-text-xxl {\n  font-size: 3.2rem;\n}\n.am-text-xxxl {\n  font-size: 4.2rem;\n}\n.am-ellipsis,\n.am-text-truncate {\n  word-wrap: normal;\n  /* for IE */\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.am-text-break {\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n  -ms-hyphens: auto;\n  -moz-hyphens: auto;\n  hyphens: auto;\n}\n.am-text-nowrap {\n  white-space: nowrap;\n}\n[class*='am-align-'] {\n  margin-bottom: 1rem;\n}\n.am-align-left {\n  margin-right: 1rem;\n  float: left;\n}\n.am-align-right {\n  margin-left: 1rem;\n  float: right;\n}\n/** Only display content to screen readers\n * See: http://a11yproject.com/posts/how-to-hide-content/\n */\n.am-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n/* Text Image Replacement */\n.am-text-ir {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n/* Text align */\n@media only screen {\n  .am-text-left {\n    text-align: left !important;\n  }\n  .am-text-right {\n    text-align: right !important;\n  }\n  .am-text-center {\n    text-align: center !important;\n  }\n  .am-text-justify {\n    text-align: justify !important;\n  }\n}\n@media only screen and (max-width: 640px) {\n  .am-sm-only-text-left {\n    text-align: left !important;\n  }\n  .am-sm-only-text-right {\n    text-align: right !important;\n  }\n  .am-sm-only-text-center {\n    text-align: center !important;\n  }\n  .am-sm-only-text-justify {\n    text-align: justify !important;\n  }\n}\n@media only screen and (min-width:641px) and (max-width:1024px) {\n  .am-md-only-text-left {\n    text-align: left !important;\n  }\n  .am-md-only-text-right {\n    text-align: right !important;\n  }\n  .am-md-only-text-center {\n    text-align: center !important;\n  }\n  .am-md-only-text-justify {\n    text-align: justify !important;\n  }\n}\n@media only screen and (min-width:641px) {\n  .am-md-text-left {\n    text-align: left !important;\n  }\n  .am-md-text-right {\n    text-align: right !important;\n  }\n  .am-md-text-center {\n    text-align: center !important;\n  }\n  .am-md-text-justify {\n    text-align: justify !important;\n  }\n}\n@media only screen and (min-width:1025px) {\n  .am-lg-text-left {\n    text-align: left !important;\n  }\n  .am-lg-text-right {\n    text-align: right !important;\n  }\n  .am-lg-text-center {\n    text-align: center !important;\n  }\n  .am-lg-text-justify {\n    text-align: justify !important;\n  }\n}\n.am-text-top {\n  vertical-align: top !important;\n}\n.am-text-middle {\n  vertical-align: middle !important;\n}\n.am-text-bottom {\n  vertical-align: bottom !important;\n}\n.am-angle {\n  position: absolute;\n}\n.am-angle:before,\n.am-angle:after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  width: 0;\n  height: 0;\n  border: 8px dashed transparent;\n  z-index: 1;\n}\n.am-angle-up {\n  top: 0;\n}\n.am-angle-up:before,\n.am-angle-up:after {\n  border-bottom-style: solid;\n  border-width: 0 8px 8px;\n}\n.am-angle-up:before {\n  border-bottom-color: #ddd;\n  bottom: 0;\n}\n.am-angle-up:after {\n  border-bottom-color: #fff;\n  bottom: -1px;\n}\n.am-angle-down {\n  bottom: -9px;\n}\n.am-angle-down:before,\n.am-angle-down:after {\n  border-top-style: solid;\n  border-width: 8px 8px 0;\n}\n.am-angle-down:before {\n  border-top-color: #ddd;\n  bottom: 0;\n}\n.am-angle-down:after {\n  border-top-color: #fff;\n  bottom: 1px;\n}\n.am-angle-left {\n  left: -9px;\n}\n.am-angle-left:before,\n.am-angle-left:after {\n  border-right-style: solid;\n  border-width: 8px 8px 8px 0;\n}\n.am-angle-left:before {\n  border-right-color: #ddd;\n  left: 0;\n}\n.am-angle-left:after {\n  border-right-color: #fff;\n  left: 1px;\n}\n.am-angle-right {\n  right: 0;\n}\n.am-angle-right:before,\n.am-angle-right:after {\n  border-left-style: solid;\n  border-width: 8px 0 8px 8px;\n}\n.am-angle-right:before {\n  border-left-color: #ddd;\n  left: 0;\n}\n.am-angle-right:after {\n  border-left-color: #fff;\n  left: -1px;\n}\n/* ==========================================================================\n   Component: Alert Plugin\n ============================================================================ */\n.am-alert {\n  margin-bottom: 1em;\n  padding: 0.625em;\n  background: #0e90d2;\n  color: #fff;\n  border: 1px solid #0c7cb5;\n  border-radius: 0;\n}\n.am-alert a {\n  color: #fff;\n}\n.am-alert h1,\n.am-alert h2,\n.am-alert h3,\n.am-alert h4,\n.am-alert h5,\n.am-alert h6 {\n  color: inherit;\n}\n.am-alert .am-close {\n  opacity: .4;\n}\n.am-alert .am-close:hover {\n  opacity: .6;\n}\n/* Add margin if adjacent element */\n* + .am-alert {\n  margin-top: 1em;\n}\n/* Remove margin from the last-child */\n.am-alert > :last-child {\n  margin-bottom: 0;\n}\n/* within am-form-group */\n.am-form-group .am-alert {\n  margin: 5px 0 0;\n  padding: 0.25em 0.625em;\n  font-size: 1.3rem;\n}\n/* Close in alert */\n.am-alert > .am-close:first-child {\n  float: right;\n  height: auto;\n  margin: -3px -5px auto auto;\n}\n/* Remove margin from adjacent element */\n.am-alert > .am-close:first-child + * {\n  margin-top: 0;\n}\n.am-alert-secondary {\n  background-color: #eeeeee;\n  border-color: #dfdfdf;\n  color: #555555;\n}\n.am-alert-success {\n  background-color: #5eb95e;\n  border-color: #4bad4b;\n  color: #fff;\n}\n.am-alert-warning {\n  background-color: #F37B1D;\n  border-color: #e56c0c;\n  color: #fff;\n}\n.am-alert-danger {\n  background-color: #dd514c;\n  border-color: #d83832;\n  color: #fff;\n}\n.am-dropdown {\n  position: relative;\n  display: inline-block;\n}\n.am-dropdown-toggle:focus {\n  outline: 0;\n}\n.am-dropdown-content {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1020;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 15px;\n  margin: 9px 0 0;\n  text-align: left;\n  line-height: 1.6;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0;\n  background-clip: padding-box;\n  animation-duration: .15s;\n}\n.am-dropdown-content:before,\n.am-dropdown-content:after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  width: 0;\n  height: 0;\n  border: 8px dashed transparent;\n  z-index: 1;\n}\n.am-dropdown-content:before,\n.am-dropdown-content:after {\n  border-bottom-style: solid;\n  border-width: 0 8px 8px;\n}\n.am-dropdown-content:before {\n  border-bottom-color: #ddd;\n  bottom: 0;\n}\n.am-dropdown-content:after {\n  border-bottom-color: #fff;\n  bottom: -1px;\n}\n.am-dropdown-content:before,\n.am-dropdown-content:after {\n  left: 10px;\n  top: -8px;\n  pointer-events: none;\n}\n.am-dropdown-content:after {\n  top: -7px;\n}\n.am-active > .am-dropdown-content {\n  display: block;\n}\n.am-dropdown-content :first-child {\n  margin-top: 0;\n}\n.am-dropdown-up .am-dropdown-content {\n  top: auto;\n  bottom: 100%;\n  margin: 0 0 9px;\n}\n.am-dropdown-up .am-dropdown-content:before,\n.am-dropdown-up .am-dropdown-content:after {\n  border-bottom: none;\n  border-top: 8px solid #ddd;\n  top: auto;\n  bottom: -8px;\n}\n.am-dropdown-up .am-dropdown-content:after {\n  bottom: -7px;\n  border-top-color: #fff;\n}\n.am-dropdown-flip .am-dropdown-content {\n  left: auto;\n  right: 0;\n}\n.am-dropdown-flip .am-dropdown-content:before,\n.am-dropdown-flip .am-dropdown-content:after {\n  left: auto;\n  right: 10px;\n}\nul.am-dropdown-content {\n  list-style: none;\n  padding: 5px 0;\n}\nul.am-dropdown-content.am-fr {\n  right: 0;\n  left: auto;\n}\nul.am-dropdown-content .am-divider {\n  height: 1px;\n  margin: 0rem 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\nul.am-dropdown-content > li > a {\n  display: block;\n  padding: 6px 20px;\n  clear: both;\n  font-weight: normal;\n  color: #333333;\n  white-space: nowrap;\n}\nul.am-dropdown-content > li > a:hover,\nul.am-dropdown-content > li > a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5;\n}\nul.am-dropdown-content > .am-active > a,\nul.am-dropdown-content > .am-active > a:hover,\nul.am-dropdown-content > .am-active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #0e90d2;\n}\nul.am-dropdown-content > .am-disabled > a,\nul.am-dropdown-content > .am-disabled > a:hover,\nul.am-dropdown-content > .am-disabled > a:focus {\n  color: #999999;\n}\nul.am-dropdown-content > .am-disabled > a:hover,\nul.am-dropdown-content > .am-disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed;\n}\n.am-dropdown-header {\n  display: block;\n  padding: 6px 20px;\n  font-size: 1.2rem;\n  color: #999999;\n}\n.am-fr > .am-dropdown-content {\n  right: 0;\n  left: auto;\n}\n.am-fr > .am-dropdown-content:before {\n  right: 10px;\n  left: auto;\n}\n.am-dropdown-animation {\n  animation: am-dropdown-animation 0.15s ease-out;\n}\n@keyframes am-dropdown-animation {\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n}\n/* ==========================================================================\n   Component: Flex Slider Plugin\n ============================================================================ */\n.am-slider a:hover,\n.am-slider a:focus {\n  outline: none;\n}\n.am-slides,\n.am-control-nav,\n.am-direction-nav {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.am-slider {\n  margin: 0;\n  padding: 0;\n}\n.am-slider .am-slides:before,\n.am-slider .am-slides:after {\n  content: \" \";\n  display: table;\n}\n.am-slider .am-slides:after {\n  clear: both;\n}\n.am-slider .am-slides > li {\n  display: none;\n  -webkit-backface-visibility: hidden;\n  position: relative;\n}\n.no-js .am-slider .am-slides > li:first-child {\n  display: block;\n}\n.am-slider .am-slides img {\n  width: 100%;\n  display: block;\n}\n.am-pauseplay span {\n  text-transform: capitalize;\n}\n.am-slider {\n  position: relative;\n}\n.am-viewport {\n  transition: all 1s ease;\n}\n.am-slider-carousel li {\n  margin-right: 5px;\n}\n.am-control-nav {\n  position: absolute;\n}\n.am-control-nav li {\n  display: inline-block;\n}\n.am-control-thumbs {\n  position: static;\n  overflow: hidden;\n}\n.am-control-thumbs img {\n  transition: all 1s ease;\n}\n.am-slider-slide .am-slides > li {\n  display: none;\n  position: relative;\n}\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .am-slider-slide .am-slides > li {\n    transition: transform 0.6s ease-in-out;\n    backface-visibility: hidden;\n    perspective: 1000px;\n  }\n  .am-slider-slide .am-slides > li.next,\n  .am-slider-slide .am-slides > li.active.right {\n    transform: translate3d(100%, 0, 0);\n    left: 0;\n  }\n  .am-slider-slide .am-slides > li.prev,\n  .am-slider-slide .am-slides > li.active.left {\n    transform: translate3d(-100%, 0, 0);\n    left: 0;\n  }\n  .am-slider-slide .am-slides > li.next.left,\n  .am-slider-slide .am-slides > li.prev.right,\n  .am-slider-slide .am-slides > li.active {\n    transform: translate3d(0, 0, 0);\n    left: 0;\n  }\n}\n.am-slider-slide .am-slides > .active,\n.am-slider-slide .am-slides > .next,\n.am-slider-slide .am-slides > .prev {\n  display: block;\n}\n.am-slider-slide .am-slides > .active {\n  left: 0;\n}\n.am-slider-slide .am-slides > .next,\n.am-slider-slide .am-slides > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.am-slider-slide .am-slides > .next {\n  left: 100%;\n}\n.am-slider-slide .am-slides > .prev {\n  left: -100%;\n}\n.am-slider-slide .am-slides > .next.left,\n.am-slider-slide .am-slides > .prev.right {\n  left: 0;\n}\n.am-slider-slide .am-slides > .active.left {\n  left: -100%;\n}\n.am-slider-slide .am-slides > .active.right {\n  left: 100%;\n}\n/**\n  * Slider Theme: Default\n  */\n.am-slider-default {\n  margin: 0 0 20px;\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);\n  /* Direction Nav */\n  /* Pause/Play */\n  /* Control Nav */\n}\n.am-slider-default .am-viewport {\n  max-height: 2000px;\n  transition: all 1s ease;\n}\n.loading .am-slider-default .am-viewport {\n  max-height: 300px;\n}\n.am-slider-default .carousel li {\n  margin-right: 5px;\n}\n.am-slider-default .am-direction-nav a {\n  position: absolute;\n  top: 50%;\n  z-index: 10;\n  display: block;\n  width: 36px;\n  height: 36px;\n  margin: -18px 0 0;\n  overflow: hidden;\n  opacity: 0.45;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.65);\n  transition: all .3s ease;\n}\n.am-slider-default .am-direction-nav a:before {\n  display: inline-block;\n  font: normal normal normal 1.6rem/1 \"FontAwesome\", sans-serif;\n  /*font-weight: normal; // 2\n  font-style: normal; // 2\n  vertical-align: baseline; // 3\n  line-height: 1; // 4*/\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transform: translate(0, 0);\n  width: 100%;\n  color: #333333;\n  content: \"\\F137\";\n  font-size: 24px!important;\n  text-align: center;\n  line-height: 36px!important;\n  height: 36px;\n}\n.am-slider-default .am-direction-nav a.am-next:before {\n  content: \"\\F138\";\n}\n.am-slider-default .am-direction-nav .am-prev {\n  left: 10px;\n}\n.am-slider-default .am-direction-nav .am-next {\n  right: 10px;\n  text-align: right;\n}\n.am-slider-default .am-direction-nav .am-disabled {\n  opacity: 0!important;\n  cursor: default;\n}\n.am-slider-default:hover .am-prev {\n  opacity: 0.7;\n  left: 10px;\n}\n.am-slider-default:hover .am-prev:hover {\n  opacity: 1;\n}\n.am-slider-default:hover .am-next {\n  opacity: 0.7;\n  right: 10px;\n}\n.am-slider-default:hover .am-next:hover {\n  opacity: 1;\n}\n.am-slider-default .am-pauseplay a {\n  display: block;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  bottom: 5px;\n  left: 10px;\n  opacity: 0.8;\n  z-index: 10;\n  overflow: hidden;\n  cursor: pointer;\n  color: #000;\n}\n.am-slider-default .am-pauseplay a::before {\n  font: normal normal normal 1.6rem/1 \"FontAwesome\", sans-serif;\n  /*font-weight: normal; // 2\n  font-style: normal; // 2\n  vertical-align: baseline; // 3\n  line-height: 1; // 4*/\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transform: translate(0, 0);\n  font-size: 20px;\n  display: inline-block;\n  content: \"\\F04C\";\n}\n.am-slider-default .am-pauseplay a:hover {\n  opacity: 1;\n}\n.am-slider-default .am-pauseplay a.am-play::before {\n  content: \"\\F04B\";\n}\n.am-slider-default .am-slider-desc {\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  bottom: 0;\n  padding: 10px;\n  width: 100%;\n  color: #fff;\n}\n.am-slider-default .am-control-nav {\n  width: 100%;\n  position: absolute;\n  bottom: -15px;\n  text-align: center;\n}\n.am-slider-default .am-control-nav li {\n  margin: 0 6px;\n  display: inline-block;\n}\n.am-slider-default .am-control-nav li a {\n  width: 8px;\n  height: 8px;\n  display: block;\n  background-color: #666;\n  background-color: rgba(0, 0, 0, 0.5);\n  line-height: 0;\n  font-size: 0;\n  cursor: pointer;\n  text-indent: -9999px;\n  border-radius: 20px;\n  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n}\n.am-slider-default .am-control-nav li a:hover {\n  background-color: #333;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.am-slider-default .am-control-nav li a.am-active {\n  background-color: #000;\n  background-color: #0e90d2;\n  cursor: default;\n}\n.am-slider-default .am-control-thumbs {\n  margin: 5px 0 0;\n  position: static;\n  overflow: hidden;\n}\n.am-slider-default .am-control-thumbs li {\n  width: 25%;\n  float: left;\n  margin: 0;\n}\n.am-slider-default .am-control-thumbs img {\n  width: 100%;\n  height: auto;\n  display: block;\n  opacity: .7;\n  cursor: pointer;\n}\n.am-slider-default .am-control-thumbs img:hover {\n  opacity: 1;\n}\n.am-slider-default .am-control-thumbs .am-active {\n  opacity: 1;\n  cursor: default;\n}\n.am-slider-default .am-control-thumbs i {\n  position: absolute;\n}\n/*\nTODO:\n  1. 动画应该放在 dialog 上，不再是整个 modal，涉及 JS 逻辑，需要统筹修改\n  2. modal 滚动条处理，是否需要添加一个滚动条宽度的水平 padding？\n*/\n/* ==========================================================================\n   Component: Modal Plugin\n ============================================================================ */\n.am-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1110;\n  display: none;\n  opacity: 0;\n  outline: 0;\n  text-align: center;\n  transform: scale(1.185);\n  transition-property: transform, opacity;\n  backface-visibility: hidden;\n  perspective: 1000px;\n}\n.am-modal:focus {\n  outline: 0;\n}\n.am-modal.am-modal-active {\n  opacity: 1;\n  transition-duration: 300ms;\n  transform: scale(1);\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.am-modal.am-modal-out {\n  opacity: 0;\n  z-index: 1109;\n  transition-duration: 300ms;\n  transform: scale(0.815);\n}\n.am-modal:before {\n  content: \"\\200B\";\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n.am-modal-dialog {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: auto;\n  margin-right: auto;\n  width: 270px;\n  max-width: 100%;\n  border-radius: 0;\n  background: #f8f8f8;\n  /*@media @large-up {\n    width: @modal-lg;\n    margin-left: -@modal-lg/2;\n  }*/\n}\n@media only screen and (min-width:641px) {\n  .am-modal-dialog {\n    width: 540px;\n  }\n}\n.am-modal-hd {\n  padding: 15px 10px 5px 10px;\n  font-size: 1.8rem;\n  font-weight: 500;\n}\n.am-modal-hd + .am-modal-bd {\n  padding-top: 0;\n}\n.am-modal-hd .am-close {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n}\n.am-modal-bd {\n  padding: 15px 10px;\n  text-align: center;\n  border-bottom: 1px solid #dedede;\n  border-radius: 2px 2px 0 0;\n}\n.am-modal-bd + .am-modal-bd {\n  margin-top: 5px;\n}\n.am-modal-prompt-input {\n  display: block;\n  margin: 5px auto 0 auto;\n  border-radius: 0;\n  padding: 5px;\n  line-height: 1.8rem;\n  width: 80%;\n  border: 1px solid #dedede;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n}\n.am-modal-prompt-input:focus {\n  outline: none;\n  border-color: #d6d6d6;\n}\n.am-modal-footer {\n  height: 44px;\n  overflow: hidden;\n  display: table;\n  width: 100%;\n  border-collapse: collapse;\n}\n.am-modal-btn {\n  display: table-cell !important;\n  padding: 0 5px;\n  height: 44px;\n  box-sizing: border-box !important;\n  font-size: 1.6rem;\n  line-height: 44px;\n  text-align: center;\n  color: #0e90d2;\n  display: block;\n  word-wrap: normal;\n  /* for IE */\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: pointer;\n  border-right: 1px solid #dedede;\n}\n.am-modal-btn:first-child {\n  border-radius: 0 0 0 0;\n}\n.am-modal-btn:last-child {\n  border-right: none;\n  border-radius: 0 0 0 0;\n}\n.am-modal-btn:first-child:last-child {\n  border-radius: 0 0 0 0;\n}\n.am-modal-btn.am-modal-btn-bold {\n  font-weight: 500;\n}\n.am-modal-btn:active {\n  background: #d4d4d4;\n}\n.am-modal-btn + .am-modal-btn {\n  border-left: 1px solid #dedede;\n}\n.am-modal-no-btn .am-modal-dialog {\n  border-radius: 0;\n  border-bottom: none;\n}\n.am-modal-no-btn .am-modal-bd {\n  border-bottom: none;\n}\n.am-modal-no-btn .am-modal-footer {\n  display: none;\n}\n.am-modal-loading .am-modal-bd {\n  border-bottom: none;\n}\n.am-modal-loading .am-icon-spin {\n  display: inline-block;\n  font-size: 2.4rem;\n}\n.am-modal-loading .am-modal-footer {\n  display: none;\n}\n.am-modal-actions {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  z-index: 1110;\n  width: 100%;\n  max-height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  text-align: center;\n  border-radius: 0;\n  transform: translateY(100%);\n  transition: transform 300ms;\n}\n.am-modal-actions.am-modal-active {\n  transform: translateY(0);\n}\n.am-modal-actions.am-modal-out {\n  z-index: 1109;\n  transform: translateY(100%);\n}\n.am-modal-actions-group {\n  margin: 10px;\n}\n.am-modal-actions-group .am-list {\n  margin: 0;\n  border-radius: 0;\n}\n.am-modal-actions-group .am-list > li {\n  margin-bottom: 0;\n  border-bottom: none;\n  display: block;\n  word-wrap: normal;\n  /* for IE */\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.015);\n}\n.am-modal-actions-group .am-list > li > a {\n  padding: 1rem;\n  display: block;\n  word-wrap: normal;\n  /* for IE */\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.am-modal-actions-group .am-list > li:first-child {\n  border-top: none;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.am-modal-actions-group .am-list > li:last-child {\n  border-bottom: none;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.am-modal-actions-header {\n  padding: 1rem;\n  color: #999999;\n  font-size: 1.4rem;\n}\n.am-modal-actions-danger {\n  color: #dd514c;\n}\n.am-modal-actions-danger a {\n  color: inherit;\n}\n.am-popup {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1110;\n  background: #fff;\n  display: none;\n  overflow: hidden;\n  transition-property: transform;\n  transform: translateY(100%);\n}\n.am-popup.am-modal-active,\n.am-popup.am-modal-out {\n  transition-duration: 300ms;\n}\n.am-popup.am-modal-active {\n  transform: translateY(0);\n}\n.am-popup.am-modal-out {\n  transform: translateY(100%);\n}\n@media all and (min-width: 630px) and (min-height: 630px) {\n  .am-popup {\n    width: 630px;\n    height: 630px;\n    left: 50%;\n    top: 50%;\n    margin-left: -315px;\n    margin-top: -315px;\n    transform: translateY(1024px);\n  }\n  .am-popup.am-modal-active {\n    transform: translateY(0);\n  }\n  .am-popup.am-modal-out {\n    transform: translateY(1024px);\n  }\n}\n.am-popup-inner {\n  padding-top: 44px;\n  height: 100%;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.am-popup-hd {\n  position: absolute;\n  top: 0;\n  z-index: 1000;\n  width: 100%;\n  height: 43px;\n  border-bottom: 1px solid #dedede;\n  background-color: #fff;\n}\n.am-popup-hd .am-popup-title {\n  font-size: 1.8rem;\n  font-weight: bold;\n  line-height: 43px;\n  text-align: center;\n  margin: 0 30px;\n  color: #333333;\n  display: block;\n  word-wrap: normal;\n  /* for IE */\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.am-popup-hd .am-close {\n  position: absolute;\n  right: 10px;\n  top: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: #999999;\n}\n.am-popup-hd .am-close:hover {\n  transform: rotate(360deg);\n  color: #555555;\n}\n.am-popup-bd {\n  padding: 15px;\n  background: #f8f8f8;\n  color: #555555;\n}\n/* ==========================================================================\n   Component: OffCanvas Plugin\n ============================================================================ */\n/* Off-canvas overlay and bar container */\n.am-offcanvas {\n  display: none;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1090;\n  background: rgba(0, 0, 0, 0.15);\n}\n.am-offcanvas.am-active {\n  display: block;\n}\n/**\n * .@{ns}offcanvas-page\n *\n * Prepares the whole HTML page to slide-out\n * 1. Fix the main page and disallow scrolling\n * 2. Side-out transition\n */\n.am-offcanvas-page {\n  position: fixed;\n  /* 1 */\n  transition: margin-left 0.3s ease-in-out;\n  /* 2 */\n}\n/* Sub-object .@{ns}offcanvas-bar */\n.am-offcanvas-bar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1091;\n  width: 270px;\n  max-width: 100%;\n  background: #333;\n  overflow-y: auto;\n  /* scrollable */\n  -webkit-overflow-scrolling: touch;\n  /* scrollable */\n  transition: transform 0.3s ease-in-out;\n  transform: translateX(-100%);\n}\n.am-offcanvas-bar:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 1px;\n  background: #262626;\n}\n.am-offcanvas.am-active .am-offcanvas-bar.am-offcanvas-bar-active {\n  transform: translateX(0);\n}\n/* .@{ns}offcanvas-bar-flip */\n.am-offcanvas-bar-flip {\n  left: auto;\n  right: 0;\n  transform: translateX(100%);\n}\n.am-offcanvas-bar-flip:after {\n  right: auto;\n  left: 0;\n}\n.am-offcanvas-content {\n  padding: 15px;\n  color: #999;\n}\n.am-offcanvas-content a {\n  color: #ccc;\n}\n/* ==========================================================================\n   Component: Popover Plugin\n ============================================================================ */\n.am-popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 0;\n  border-radius: 0;\n  background: #333333;\n  color: #fff;\n  border: 1px solid #333333;\n  display: none;\n  font-size: 1.6rem;\n  z-index: 1150;\n  opacity: 0;\n  transition: opacity 300ms;\n}\n.am-popover.am-active {\n  display: block !important;\n  opacity: 1;\n}\n.am-popover-inner {\n  position: relative;\n  background: #333333;\n  padding: 8px;\n  z-index: 110;\n}\n.am-popover-caret {\n  position: absolute;\n  top: 0;\n  z-index: 100;\n  display: inline-block;\n  width: 0;\n  height: 0;\n  vertical-align: middle;\n  border-bottom: 8px solid #333333;\n  border-right: 8px solid transparent;\n  border-left: 8px solid transparent;\n  border-top: 0 dotted;\n  transform: rotate(360deg);\n  overflow: hidden;\n}\n.am-popover-top .am-popover-caret {\n  top: auto;\n  bottom: -8px;\n  transform: rotate(180deg);\n}\n.am-popover-bottom .am-popover-caret {\n  top: -8px;\n}\n.am-popover-top .am-popover-caret,\n.am-popover-bottom .am-popover-caret {\n  left: 50%;\n  margin-left: -8px;\n}\n.am-popover-left .am-popover-caret {\n  top: auto;\n  left: auto;\n  right: -12px;\n  transform: rotate(90deg);\n}\n.am-popover-right .am-popover-caret {\n  right: auto;\n  left: -12px;\n  transform: rotate(-90deg);\n}\n.am-popover-left .am-popover-caret,\n.am-popover-right .am-popover-caret {\n  top: 50%;\n  margin-top: -4px;\n}\n.am-popover-sm {\n  font-size: 1.4rem;\n}\n.am-popover-sm .am-popover-inner {\n  padding: 5px;\n}\n.am-popover-lg {\n  font-size: 1.8rem;\n}\n.am-popover-primary {\n  border-color: #0e90d2;\n}\n.am-popover-primary .am-popover-inner {\n  background: #0e90d2;\n}\n.am-popover-primary .am-popover-caret {\n  border-bottom-color: #0e90d2;\n}\n.am-popover-secondary {\n  border-color: #3bb4f2;\n}\n.am-popover-secondary .am-popover-inner {\n  background: #3bb4f2;\n}\n.am-popover-secondary .am-popover-caret {\n  border-bottom-color: #3bb4f2;\n}\n.am-popover-success {\n  border-color: #5eb95e;\n}\n.am-popover-success .am-popover-inner {\n  background: #5eb95e;\n}\n.am-popover-success .am-popover-caret {\n  border-bottom-color: #5eb95e;\n}\n.am-popover-warning {\n  border-color: #F37B1D;\n}\n.am-popover-warning .am-popover-inner {\n  background: #F37B1D;\n}\n.am-popover-warning .am-popover-caret {\n  border-bottom-color: #F37B1D;\n}\n.am-popover-danger {\n  border-color: #dd514c;\n}\n.am-popover-danger .am-popover-inner {\n  background: #dd514c;\n}\n.am-popover-danger .am-popover-caret {\n  border-bottom-color: #dd514c;\n}\n/* ==========================================================================\n   Component: Progress Plugin\n ============================================================================ */\n#nprogress {\n  /* Make clicks pass-through */\n  pointer-events: none;\n  /* Fancy blur effect */\n}\n#nprogress .nprogress-bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  width: 100%;\n  height: 2px;\n  background: #5eb95e;\n}\n#nprogress .nprogress-peg {\n  display: block;\n  position: absolute;\n  right: 0;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px #5eb95e, 0 0 5px #5eb95e;\n  opacity: 1;\n  transform: rotate(3deg) translate(0px, -4px);\n}\n#nprogress .nprogress-spinner {\n  position: fixed;\n  top: 15px;\n  right: 15px;\n  z-index: 2000;\n  display: block;\n}\n#nprogress .nprogress-spinner-icon {\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n  border: solid 2px transparent;\n  border-top-color: #5eb95e;\n  border-left-color: #5eb95e;\n  border-radius: 50%;\n  animation: nprogress-spinner 400ms linear infinite;\n}\n@keyframes nprogress-spinner {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* ==========================================================================\n   Component: Tabs Plugin\n ============================================================================ */\n.am-tabs-bd {\n  position: relative;\n  overflow: hidden;\n  border: 1px solid #ddd;\n  border-top: none;\n  z-index: 100;\n  transition: height .3s;\n}\n.am-tabs-bd:before,\n.am-tabs-bd:after {\n  content: \" \";\n  display: table;\n}\n.am-tabs-bd:after {\n  clear: both;\n}\n.am-tabs-bd .am-tab-panel {\n  position: absolute;\n  top: 0;\n  z-index: 99;\n  float: left;\n  width: 100%;\n  padding: 10px 10px 15px;\n  visibility: hidden;\n  transition: transform 0.3s;\n  transform: translateX(-100%);\n}\n.am-tabs-bd .am-tab-panel * {\n  -webkit-user-drag: none;\n}\n.am-tabs-bd .am-tab-panel.am-active {\n  position: relative;\n  z-index: 100;\n  visibility: visible;\n  transform: translateX(0);\n}\n.am-tabs-bd .am-tab-panel.am-active ~ .am-tab-panel {\n  transform: translateX(100%);\n}\n.am-tabs-bd .am-tabs-bd {\n  border: none;\n}\n.am-tabs-bd-ofv {\n  overflow: visible;\n}\n.am-tabs-fade .am-tab-panel {\n  opacity: 0;\n  transition: opacity .25s linear;\n}\n.am-tabs-fade .am-tab-panel.am-in {\n  opacity: 1;\n}\n/* ==========================================================================\n   Component: Share Plugin\n ============================================================================ */\n.am-share {\n  font-size: 14px;\n}\n.am-share-title {\n  padding: 10px 0 0;\n  margin: 0 10px;\n  font-weight: normal;\n  text-align: center;\n  color: #555555;\n  background-color: #f8f8f8;\n  border-bottom: 1px solid #fff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n}\n.am-share-title:after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 0;\n  margin-top: 10px;\n  border-bottom: 1px solid #dfdfdf;\n}\n.am-share-sns {\n  margin: 0 10px;\n  padding-top: 15px;\n  background-color: #f8f8f8;\n  border-bottom-right-radius: 2px;\n  border-bottom-left-radius: 2px;\n}\n.am-share-sns li {\n  margin-bottom: 15px;\n}\n.am-share-sns a {\n  display: block;\n  color: #555555;\n}\n.am-share-sns span {\n  display: block;\n}\n.am-share-sns [class*='am-icon'] {\n  background-color: #3bb4f2;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  line-height: 36px;\n  color: #fff;\n  margin-bottom: 5px;\n  font-size: 18px;\n}\n.am-share-sns .am-icon-weibo {\n  background-color: #ea1328;\n}\n.am-share-sns .am-icon-qq {\n  background-color: #009cda;\n}\n.am-share-sns .am-icon-star {\n  background-color: #ffc028;\n}\n.am-share-sns .am-icon-tencent-weibo {\n  background-color: #23ccfe;\n}\n.am-share-sns .am-icon-wechat,\n.am-share-sns .am-icon-weixin {\n  background-color: #44b549;\n}\n.am-share-sns .am-icon-renren {\n  background-color: #105ba3;\n}\n.am-share-sns .am-icon-comment {\n  background-color: #5eb95e;\n}\n.am-share-footer {\n  margin: 10px;\n}\n.am-share-footer .am-btn {\n  color: #555555;\n}\n.am-share-wechat-qr {\n  font-size: 14px;\n  color: #777;\n}\n.am-share-wechat-qr .am-modal-dialog {\n  background-color: #fff;\n  border: 1px solid #dedede;\n}\n.am-share-wechat-qr .am-modal-hd {\n  padding-top: 10px;\n  text-align: left;\n  margin-bottom: 10px;\n}\n.am-share-wechat-qr .am-share-wx-qr {\n  margin-bottom: 10px;\n}\n.am-share-wechat-qr .am-share-wechat-tip {\n  text-align: left;\n}\n.am-share-wechat-qr .am-share-wechat-tip em {\n  color: #dd514c;\n  font-weight: bold;\n  font-style: normal;\n  margin-left: 3px;\n  margin-right: 3px;\n}\n/* ==========================================================================\n   Component: PureView Plugin\n ============================================================================ */\n.am-pureview {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1120;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.95);\n  display: none;\n  overflow: hidden;\n  transition: transform .3s;\n  transform: translate(0, 100%);\n}\n.am-pureview.am-active {\n  transform: translate(0, 0);\n}\n.am-pureview ul,\n.am-pureview ol {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n}\n.am-pureview-slider {\n  overflow: hidden;\n  height: 100%;\n}\n.am-pureview-slider li {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  vertical-align: middle;\n  transition: all .3s linear;\n  z-index: 100;\n  visibility: hidden;\n}\n.am-pureview-slider li.am-pureview-slide-prev {\n  transform: translate(-100%, 0);\n  z-index: 109;\n}\n.am-pureview-slider li.am-pureview-slide-next {\n  transform: translate(100%, 0);\n  z-index: 109;\n}\n.am-pureview-slider li.am-active {\n  position: relative;\n  z-index: 110;\n  transform: translate(0, 0);\n  visibility: visible;\n}\n.am-pureview-slider .pinch-zoom-container {\n  width: 100%;\n  z-index: 1121;\n}\n.am-pureview-slider .am-pinch-zoom {\n  position: relative;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.am-pureview-slider .am-pinch-zoom:after {\n  display: inline-block;\n  font: normal normal normal 1.6rem/1 \"FontAwesome\", sans-serif;\n  /*font-weight: normal; // 2\n  font-style: normal; // 2\n  vertical-align: baseline; // 3\n  line-height: 1; // 4*/\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transform: translate(0, 0);\n  content: \"\\F110\";\n  animation: icon-spin 2s infinite linear;\n  font-size: 24px;\n  line-height: 24px;\n  color: #eee;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -12px;\n  margin-top: -12px;\n  z-index: 1;\n}\n.am-pureview-slider .am-pinch-zoom.am-pureview-loaded:after {\n  display: none;\n}\n.am-pureview-slider img {\n  position: relative;\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n  opacity: 0;\n  z-index: 200;\n  -webkit-user-drag: none;\n  transition: opacity 0.2s ease-in;\n}\n.am-pureview-slider img.am-img-loaded {\n  opacity: 1;\n}\n.am-pureview-direction {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  margin-top: -18px !important;\n  z-index: 1122;\n}\n.am-touch .am-pureview-direction,\n.am-pureview-only .am-pureview-direction {\n  display: none;\n}\n.am-pureview-direction li {\n  position: absolute;\n  width: 36px;\n  height: 36px;\n}\n.am-pureview-direction a {\n  display: block;\n  height: 36px;\n  border: none;\n  color: #ccc;\n  opacity: 0.5;\n  cursor: pointer;\n  text-align: center;\n  z-index: 1125;\n}\n.am-pureview-direction a:before {\n  content: \"\\F137\";\n  line-height: 36px;\n  font-size: 24px;\n}\n.am-pureview-direction a:hover {\n  opacity: 1;\n}\n.am-pureview-direction .am-pureview-prev {\n  left: 15px;\n}\n.am-pureview-direction .am-pureview-next {\n  right: 15px;\n}\n.am-pureview-direction .am-pureview-next a:before {\n  content: \"\\F138\";\n}\n.am-pureview-bar {\n  position: absolute;\n  bottom: 0;\n  height: 45px;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.35);\n  color: #eeeeee;\n  line-height: 45px;\n  padding: 0 10px;\n  font-size: 14px;\n  display: flex;\n}\n.am-pureview-bar .am-pureview-title {\n  display: block;\n  word-wrap: normal;\n  /* for IE */\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  margin-left: 6px;\n  flex: 1;\n}\n.am-pureview-bar .am-pureview-total {\n  font-size: 10px;\n  line-height: 48px;\n}\n.am-pureview-actions {\n  position: absolute;\n  z-index: 1130;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 45px;\n  background-color: rgba(0, 0, 0, 0.35);\n}\n.am-pureview-actions a {\n  position: absolute;\n  left: 10px;\n  color: #ccc;\n  display: block;\n  width: 45px;\n  line-height: 45px;\n  text-align: left;\n  font-size: 16px;\n}\n.am-pureview-actions a:hover {\n  color: #fff;\n}\n.am-pureview-actions [data-am-toggle=\"share\"] {\n  left: auto;\n  right: 10px;\n}\n.am-pureview-bar,\n.am-pureview-actions {\n  opacity: 0;\n  transition: all .15s;\n  z-index: 1130;\n}\n.am-pureview-bar-active .am-pureview-bar,\n.am-pureview-bar-active .am-pureview-actions {\n  opacity: 1;\n}\n.am-pureview-nav {\n  position: absolute;\n  bottom: 15px;\n  left: 0;\n  right: 0;\n  text-align: center;\n  z-index: 1131;\n}\n.am-pureview-bar-active .am-pureview-nav {\n  display: none;\n}\n.am-pureview-nav li {\n  display: inline-block;\n  background: #ccc;\n  background: rgba(255, 255, 255, 0.5);\n  width: 8px;\n  height: 8px;\n  margin: 0 3px;\n  border-radius: 50%;\n  text-indent: -9999px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.am-pureview-nav .am-active {\n  background: #fff;\n  background: rgba(255, 255, 255, 0.9);\n}\n[data-am-pureview] img {\n  cursor: pointer;\n}\n.am-pureview-active {\n  overflow: hidden;\n}\n.ath-viewport * {\n  box-sizing: border-box;\n}\n.ath-viewport {\n  position: relative;\n  z-index: 2147483641;\n  pointer-events: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-touch-callout: none;\n  user-select: none;\n  text-size-adjust: none;\n}\n.ath-modal {\n  pointer-events: auto !important;\n  background: rgba(0, 0, 0, 0.6);\n}\n.ath-mandatory {\n  background: #000;\n}\n.ath-container {\n  pointer-events: auto !important;\n  position: absolute;\n  z-index: 2147483641;\n  padding: 0.7em 0.6em;\n  width: 18em;\n  background: #eee;\n  background-size: 100% auto;\n  box-shadow: 0 0.2em 0 #d1d1d1;\n  font-family: sans-serif;\n  font-size: 15px;\n  line-height: 1.5em;\n  text-align: center;\n}\n.ath-container small {\n  font-size: 0.8em;\n  line-height: 1.3em;\n  display: block;\n  margin-top: 0.5em;\n}\n.ath-ios.ath-phone {\n  bottom: 1.8em;\n  left: 50%;\n  margin-left: -9em;\n}\n.ath-ios6.ath-tablet {\n  left: 5em;\n  top: 1.8em;\n}\n.ath-ios7.ath-tablet {\n  left: 0.7em;\n  top: 1.8em;\n}\n.ath-ios8.ath-tablet {\n  right: 0.4em;\n  top: 1.8em;\n}\n.ath-android {\n  bottom: 1.8em;\n  left: 50%;\n  margin-left: -9em;\n}\n/* close icon */\n.ath-container:before {\n  content: '';\n  position: relative;\n  display: block;\n  float: right;\n  margin: -0.7em -0.6em 0 0.5em;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAdVBMVEUAAAA5OTkzMzM7Ozs3NzdBQUFAQEA/Pz8+Pj5BQUFAQEA/Pz8+Pj5BQUFAQEA/Pz9BQUE+Pj4/Pz8/Pz8+Pj4/Pz8/Pz8/Pz8+Pj4/Pz8+Pj4/Pz8/Pz8/Pz8/Pz8/Pz8+Pj4/Pz8/Pz8/Pz8/Pz9AQEA/Pz+fdCaPAAAAJnRSTlMACQoNDjM4OTo7PEFCQ0RFS6ytsbS1tru8vcTFxu7x8vX19vf4+C5yomAAAAJESURBVHgBvdzLTsJAGEfxr4C2KBcVkQsIDsK8/yPaqIsPzVlyzrKrX/5p0kkXEz81L23otc9NpIbbWia2YVLqdnhlqFlhGWpSDHe1aopsSIpRb8gK0dC3G30b9rVmhWZIimTICsvQtx/FsuYOrWHoDjX3Gu31gzJxdki934WrAIOsAIOsAIOiAMPhPsJTgKGN0BVsYIVsYIVpYIVpYIVpYIVpYIVpYIVpYIVpYIVlAIVgEBRs8BRs8BRs8BRs8BRs8BRs8BRs8BRTNmgKNngKNngKNngKNngKNhiKGxgiOlZoBlaYBlaYBlaYBlaYBlaYBlaYBlaYBlZIBlBMfQMrVAMr2KAqBENSHFHhGEABhi5CV6gGUKgGUKgGUKgGUFwuqgEUvoEVsoEVpoEUpgEUggF+gKTKY+h1fxSlC7/Z+RrxOQ3fcEoAPPHZBlaYBlaYBlaYBlZYBlYIhvLBCstw7PgM7hkiWOEZWGEaWGEaWGEaIsakEAysmHkGVpxmvoEVqoEVpoEVpoEVpoEVpoEVpoEVkoEVgkFQsEFSsEFQsGEcoSvY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnmbNAUT2c2WAo2eAo2eAo2eAo2eAo2eArNEPFACjZ4CjZ4CjZ4CjaIird/rBvFH6llNCvewdli1URWCIakSIZesUaDoFg36dKFWk9zCZDei3TtwmCj7pC22AwikiIZPEU29IpFNliKxa/hC9DFITjQPYhcAAAAAElFTkSuQmCC);\n  background-color: rgba(255, 255, 255, 0.8);\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  width: 2.7em;\n  height: 2.7em;\n  text-align: center;\n  overflow: hidden;\n  color: #a33;\n  z-index: 2147483642;\n}\n.ath-container.ath-icon:before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  float: none;\n}\n.ath-mandatory .ath-container:before {\n  display: none;\n}\n.ath-container.ath-android:before {\n  float: left;\n  margin: -0.7em 0.5em 0 -0.6em;\n}\n.ath-container.ath-android.ath-icon:before {\n  position: absolute;\n  right: auto;\n  left: 0;\n  margin: 0;\n  float: none;\n}\n/* applied only if the application icon is shown */\n.ath-action-icon {\n  display: inline-block;\n  vertical-align: middle;\n  background-position: 50%;\n  background-repeat: no-repeat;\n  text-indent: -9999em;\n  overflow: hidden;\n}\n.ath-ios7 .ath-action-icon,\n.ath-ios8 .ath-action-icon {\n  width: 1.6em;\n  height: 1.6em;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAACtCAYAAAB7l7tOAAAF6UlEQVR4AezZWWxUZRiH8VcQEdxZEFFiUZBFUCIa1ABBDARDcCciYGKMqTEGww3SOcNSAwQTjOBiiIpEhRjAhRgXRC8MFxojEhAFZUGttVhaoSxlaW3n8W3yXZxm6vTrOMM5Q98n+V9MMu1pvl++uZhKuypghu49KaaTWGdZSYoVN6VD95nMpLNYZ9XNbdQR2od2k88O3Gm6Bh0t7H0p5Vwp2Ax3ajpu2tYbciFWwkTFO63DY6+JcI4USFaSyYpWp8N7SVZJKR3EinkBk9JxvZFXxhnZSjBaoWp1ZL0ES8WKYXMZp0AndORgy8WKFe5Yf1zvvSBWDEpys2LU6MjD5kmEWQlGKsJRHXlcqUSQVcItEnDEA6gAb7LhjvD9WO6yIEfICQI5A1nzGCYB1T4og5bBiFcyv2f6ujYhl4iVxwKG6qp8MK55HsqPwK0rMr9v/yEo3uCPrJstVh5KMER30Aeh31Ioq0FrHfjXw9CYghnrvYFTuqfEymFzGSwBlT4ARYr7u+K6GLmCVGvAGg2NMG0d/sgJnpScZLjXSkC5z8H3eQ72/k24Q8NfzvwFyK4qtuJSZKaubRPyE/K/Mtx+EvCHL+7uasId1t10w0scz/RzSzYzAfgKV30D3LPaG7lRkR8RK4tKKJKAMp+D7r0EfmmOe0x3m2itAc/ZxBjgAt1mXHWKPPkdb+QGSTJdrDaU5EoJ2OtzwD0WwY7KNNzbRfMFFg24WPdtGHnS221Cflgsj56hjwTs8TnY7oq7/QDhjutGicsb2AVcovsO18l6uPPNNiE/JFaGAq7Q7fY50G4LYVtz3FrdaNGyBXbIl+q24DqhyHes9EaulwR3SwtZs+ktAT/7HORliru1gnCndONFyx44Dfn7MPLYN7yR6yTJZAllJeguAT/4HOBFz8I3ZWm4E0TLFbBD7qn7EVdtHYx53R9ZN0ksrZRuErDN5+AuLIWvm+Oe1k0ULdfADrmX7idcR0/DyBXeyCdlLuMMOGCBz4F1ng+f7yFcve5e0fIFHELeiav6BAx70Rt5p0yhY3u/wR0kyarW/uX35b403PtFyzewQ75ctwtXzSkY8WqruHslSV8RscrL6TJ1bcvfWJ0/HzbtIdw/ugdFyzdwOOAq3T6fmzxwGQ3vbmO8iFioIWqYSsHMj9M/ljfuTsOdItoZBXYBfXX7cVXVwvXLm/8+fU3lcdCqdEMNGBbgUmRmfQISQKd5sGEn4VK6YtEiAXYBA3QVuA4q8hCHrDcafR1ul65jewfuovsCl7vJrNlOuEbdo6JFCuwCrtb9hqusBu56Cw4cI1y1briIWEBn3Ue0XKPuMdGiBg4H9NdV0HJ/6QZLOEPmPN0GmpfSPS5arIBdwHUtIFfoBsl/ZsgfhHCfFi2WwC5goO4AmvanbqBkzJA76tboZokWa2AXMEi3RTdAvDLkDqJFAhzB32xFD2wZsGXA0WfAlgFbBmwZsGXAlgFbBpzk04JaKb0iA9ZnF9x5SQAFtRKKIgPWZxfaeRmwAZ/BGbAB37eaG6MCbnq2Aed5czYyKirgpmcbsAHHZAZswN0Wwo7KeG1fFf2jAm56dtzOQ42yB+65mDhWFBUwUETMUiMDNmADbp/APRaTAh6I2bpGCNw1bufRZJQ1cPdF/NueHZsgDEBBGLbMGoIu4AZu5gLOZeEaYmEXeznF3jRPyEv4frgJvvJe3qTefY0AAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwb8rwADBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgz4/sz1Nia/9hizA7zgklwy3RYwYMBzBRjw4bPjxAbAAizAAtwgwAIswAIswAIMGDBgARZgARZgAS4FWIAFWIAFWIABAwYswAIswAIswIUAC7AAC7AACzBgwIAFWIAFWIAFuBBgARZgARZgAQYMGPApQ99ZCdgWtzqwATbABtgAG2DbnxNb7zbRimsMLMACrDf2wMWI/WasfQAAAABJRU5ErkJggg==);\n  margin-top: -0.3em;\n  background-size: auto 100%;\n}\n.ath-ios6 .ath-action-icon {\n  width: 1.8em;\n  height: 1.8em;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAB0CAQAAADAmnOnAAAAAnNCSVQICFXsRgQAAAAJcEhZcwAAWwEAAFsBAXkZiFwAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAF4klEQVR4Ae3a/a+XdR3H8ec5HM45HDmKICoVohkZsxESRRCzcZM/2JKkdGR5MrSkleA0Pd00O4u5IVuNM2yYc6XSzCExU4oUNRPCJFdMUAhsYZpUGhscOHA4N8/WZzsL6HBxvofvdV3fa3yer//gsV3vH659KHzncBsJxUYhDzOEhCKQbORs+ip2wzgM+wvj+P9i35qAGLaHGcQSgKSTrxBLABJppZpYApCspoFYApBsZjSxBCD5OxOJJQBJG1cQSwCSLpqJJQCJ3MvgCGTinuSMCJS8LZwfgZL3FtMiUPIOcU0ESl4PLRHoRPsJtREoeRsYGYGS9yrvo6RmpbLaigWSfzOdErLs6+bLUMFA0sF1+QF1cz1UNlBYK9V5AHXyWSgEkKyiIWOgGh829Ki1lLcaxjCVK7mJRSxjBY+zgRf/u9pXcMB7jhEZAg32EUP3O6hMKOP5Iq2sZQeHMZXt5KKMgOpcY+iHVnFyjeQKlrCBdsxge5ieAVC9vzLUelI8H+A7bKIHM10H81IGGuKvDf1ggDxVTKOV1zG3/Yia1ICG+ltD32MgNTKfP2HuW0VDKkCNrjfUTOm9i6XswwrZJkaVHeh0f2fodkrtfO6jAytqrzG+rEDDfVG1x1sprZEs5RBW4PZxeT+Bbrf5hPu9arfzKaU6WjiAFbseWvoF1GW/6vYGSmkyW7Dit4xB5QHq9Br6Xx2t9GAhtp6zkoHsfNp1J9wX6H+jeR4LtJc4LxGopZZyNpN/YcG2mw9nBTSPLizgOmjKAujGgvJID3ekD7QYi7nGzkvmQtpA38Vi7iJf0TedlC7QTVjMfcY2QyvSBPpUMW/PIBfbo9pls1XpAX2EdizeznStob3OJpQO0DB2YfE21q2GtnghpAm0Gou3T9tm6BGHQppA12HRVt17eboNlydNoLHsx2JtmL801OYcQmkC/QKLtQt9ydBW3wNpA30ci7Ur3WdolUMhbaBqNhf/8qQJ9Hkszs5wjaH9XkUobaAqtmFRdoGbDb3sWMgG6DIs5852knO82RaXer+P+qyb3eWeo7ZNBrRZvm1otY2QFdBjeHIb6hTne49Put12+9ObMoDdYmfy5UkF6AK6cCCr9aM2u9IddptcOYCG+FNDB5xLKCugO7G01TndFp/xgAntdYvrfdwVLnORt3q9Vx25F27DUjbGPxr6qxMgW6Cd2N+d6wLXedA+6nKbK73Lr/pJxzusvE/wZrvX0FOOgGyBxmF/dprXutYOj6nNdS6xyYnWp/dGcaGdhr5vDWQN9E1MXrUzfcA2j2qPj/l1J1uT9iPOeh8w1O7nCGUN9HzyGZ7ndo9qp0ucanU2r1xH+wdDu5wIeQDVVx0+/kd1i697RNv8thdn+Qz4Uv9p6DeOhHyApmBfq3OBu+3Nfd7nVELZAX3Nw4ZarYG8gG7GY1dlk6/Zm3/2Rk8jlB1QvT82dNAmQjkBVf8Mj957fdrefM7ZVhPKEuidvmDob06CXIGGbsX/bZDf8KAhfdbJhLIGmuZuQ084HHIGatiLvRvrRkP6qldbBXkAzbfD0N0OhryBGqrEMOd50FC7d1hPKGugBh8ydMh5hPIGGouI1d5lj6F1vptQ9kDvcKOhN5wMlQH0QcRGnzC03yZCeQDN9G1D6xwBFQI07FI8x02GdjgB8gJqttPQcmuhYoAumzvG7YZWejrkA1TrPYYO+SVCFQO0aM4bqj0uJJQH0LluSP7PkyeQU9QOmyAvoBm+Zegpz4LKA/qYB/wE5AXUe3m81zqoRKAPOYWcuvP9dxvqcD6h7IAKkaNU3eUlHLcI9EzS5YlAi62h/zUy89QCqqKUmvgHywsJlEHnsQYxAvXVIJo5gIhnPhiBju1iNmLvLn85Ah1ZPYs5jBGo72awEzEC9dVwHqQHI9DxWoAYgSLQQKteGIESu/qhCJTYtT+PQBEoAkWgCBSBkotAEehUWwSKQBEoAkWg/BeBIlAEikARKAJFoFmealu4gVLy1Gt5dkARKAL9BzujPSurTmu/AAAAAElFTkSuQmCC);\n  margin-bottom: 0.4em;\n  background-size: 100% auto;\n}\n.ath-android .ath-action-icon {\n  width: 1.4em;\n  height: 1.4em;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAANlBMVEVmZmb///9mZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZW6fJrAAAAEXRSTlMAAAYHG21ub8fLz9DR8/T4+RrZ9owAAAB3SURBVHja7dNLDoAgDATQWv4gKve/rEajJOJiWLgg6WzpSyB0aHqHiNj6nL1lovb4C+hYzkSNAT7mryQFAVOeGAj4CjwEtgrWXpD/uZKtwEJApXt+Vn0flzRhgNiFZQkOXY0aADQZCOCPlsZJ46Rx0jhp3IiN2wGDHhxtldrlwQAAAABJRU5ErkJggg==);\n  background-size: 100% auto;\n}\n.ath-container p {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  z-index: 2147483642;\n  text-shadow: 0 0.1em 0 #fff;\n  font-size: 1.1em;\n}\n.ath-ios.ath-phone:after {\n  content: '';\n  background: #eee;\n  position: absolute;\n  width: 2em;\n  height: 2em;\n  bottom: -0.9em;\n  left: 50%;\n  margin-left: -1em;\n  -webkit-transform: scaleX(0.9) rotate(45deg);\n  transform: scaleX(0.9) rotate(45deg);\n  box-shadow: 0.2em 0.2em 0 #d1d1d1;\n}\n.ath-ios.ath-tablet:after {\n  content: '';\n  background: #eee;\n  position: absolute;\n  width: 2em;\n  height: 2em;\n  top: -0.9em;\n  left: 50%;\n  margin-left: -1em;\n  -webkit-transform: scaleX(0.9) rotate(45deg);\n  transform: scaleX(0.9) rotate(45deg);\n  z-index: 2147483641;\n}\n.ath-application-icon {\n  position: relative;\n  padding: 0;\n  border: 0;\n  margin: 0 auto 0.2em auto;\n  height: 6em;\n  width: 6em;\n  z-index: 2147483642;\n}\n.ath-container.ath-ios .ath-application-icon {\n  border-radius: 1em;\n  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.3), inset 0 0.07em 0 rgba(255, 255, 255, 0.5);\n  margin: 0 auto 0.4em auto;\n}\n@media only screen and (orientation: landscape) {\n  .ath-container.ath-phone {\n    width: 24em;\n  }\n  .ath-android.ath-phone {\n    margin-left: -12em;\n  }\n  .ath-ios.ath-phone {\n    margin-left: -12em;\n  }\n  .ath-ios6:after {\n    left: 39%;\n  }\n  .ath-ios8.ath-phone {\n    left: auto;\n    bottom: auto;\n    right: 0.4em;\n    top: 1.8em;\n  }\n  .ath-ios8.ath-phone:after {\n    bottom: auto;\n    top: -0.9em;\n    left: 68%;\n    z-index: 2147483641;\n    box-shadow: none;\n  }\n}\n/* ==========================================================================\n   Component: uCheck Plugin\n ============================================================================ */\n.am-checkbox,\n.am-radio,\n.am-checkbox-inline,\n.am-radio-inline {\n  padding-left: 22px;\n  position: relative;\n  transition: color .25s linear;\n  font-size: 14px;\n  line-height: 1.5;\n}\nlabel.am-checkbox,\nlabel.am-radio {\n  font-weight: normal;\n}\n.am-ucheck-icons {\n  color: #999999;\n  display: block;\n  height: 20px;\n  top: 0;\n  left: 0;\n  position: absolute;\n  width: 20px;\n  text-align: center;\n  line-height: 21px;\n  font-size: 18px;\n  cursor: pointer;\n}\n.am-checkbox .am-icon-checked,\n.am-radio .am-icon-checked,\n.am-checkbox-inline .am-icon-checked,\n.am-radio-inline .am-icon-checked,\n.am-checkbox .am-icon-unchecked,\n.am-radio .am-icon-unchecked,\n.am-checkbox-inline .am-icon-unchecked,\n.am-radio-inline .am-icon-unchecked {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: inline-table;\n  margin: 0;\n  background-color: transparent;\n  transition: color .25s linear;\n}\n.am-checkbox .am-icon-checked:before,\n.am-radio .am-icon-checked:before,\n.am-checkbox-inline .am-icon-checked:before,\n.am-radio-inline .am-icon-checked:before,\n.am-checkbox .am-icon-unchecked:before,\n.am-radio .am-icon-unchecked:before,\n.am-checkbox-inline .am-icon-unchecked:before,\n.am-radio-inline .am-icon-unchecked:before {\n  display: inline-block;\n  font: normal normal normal 1.6rem/1 \"FontAwesome\", sans-serif;\n  /*font-weight: normal; // 2\n  font-style: normal; // 2\n  vertical-align: baseline; // 3\n  line-height: 1; // 4*/\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transform: translate(0, 0);\n}\n.am-checkbox .am-icon-checked,\n.am-radio .am-icon-checked,\n.am-checkbox-inline .am-icon-checked,\n.am-radio-inline .am-icon-checked {\n  opacity: 0;\n}\n.am-checkbox .am-icon-checked:before,\n.am-checkbox-inline .am-icon-checked:before {\n  content: \"\\F046\";\n}\n.am-checkbox .am-icon-unchecked:before,\n.am-checkbox-inline .am-icon-unchecked:before {\n  content: \"\\F096\";\n}\n.am-radio .am-icon-checked:before,\n.am-radio-inline .am-icon-checked:before {\n  content: \"\\F192\";\n}\n.am-radio .am-icon-unchecked:before,\n.am-radio-inline .am-icon-unchecked:before {\n  content: \"\\F10C\";\n}\n.am-ucheck-checkbox,\n.am-ucheck-radio {\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  width: 20px;\n  height: 20px;\n  opacity: 0;\n  outline: none !important;\n}\n.am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons {\n  color: #0e90d2;\n}\n.am-ucheck-checkbox:checked + .am-ucheck-icons,\n.am-ucheck-radio:checked + .am-ucheck-icons {\n  color: #0e90d2;\n}\n.am-ucheck-checkbox:checked + .am-ucheck-icons .am-icon-unchecked,\n.am-ucheck-radio:checked + .am-ucheck-icons .am-icon-unchecked {\n  opacity: 0;\n}\n.am-ucheck-checkbox:checked + .am-ucheck-icons .am-icon-checked,\n.am-ucheck-radio:checked + .am-ucheck-icons .am-icon-checked {\n  opacity: 1;\n}\n.am-ucheck-checkbox:disabled + .am-ucheck-icons,\n.am-ucheck-radio:disabled + .am-ucheck-icons {\n  cursor: default;\n  color: #d8d8d8;\n}\n.am-ucheck-checkbox:disabled:checked + .am-ucheck-icons .am-icon-unchecked,\n.am-ucheck-radio:disabled:checked + .am-ucheck-icons .am-icon-unchecked {\n  opacity: 0;\n}\n.am-ucheck-checkbox:disabled:checked + .am-ucheck-icons .am-icon-checked,\n.am-ucheck-radio:disabled:checked + .am-ucheck-icons .am-icon-checked {\n  opacity: 1;\n  color: #d8d8d8;\n}\n.am-checkbox.am-secondary .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-radio.am-secondary .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-checkbox-inline.am-secondary .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-radio-inline.am-secondary .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-checkbox.am-secondary .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-radio.am-secondary .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-checkbox-inline.am-secondary .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-radio-inline.am-secondary .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons {\n  color: #3bb4f2;\n}\n.am-checkbox.am-secondary .am-ucheck-checkbox:checked + .am-ucheck-icons,\n.am-radio.am-secondary .am-ucheck-checkbox:checked + .am-ucheck-icons,\n.am-checkbox-inline.am-secondary .am-ucheck-checkbox:checked + .am-ucheck-icons,\n.am-radio-inline.am-secondary .am-ucheck-checkbox:checked + .am-ucheck-icons,\n.am-checkbox.am-secondary .am-ucheck-radio:checked + .am-ucheck-icons,\n.am-radio.am-secondary .am-ucheck-radio:checked + .am-ucheck-icons,\n.am-checkbox-inline.am-secondary .am-ucheck-radio:checked + .am-ucheck-icons,\n.am-radio-inline.am-secondary .am-ucheck-radio:checked + .am-ucheck-icons {\n  color: #3bb4f2;\n}\n.am-checkbox.am-success .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-radio.am-success .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-checkbox-inline.am-success .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-radio-inline.am-success .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-checkbox.am-success .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-radio.am-success .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-checkbox-inline.am-success .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-radio-inline.am-success .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons {\n  color: #5eb95e;\n}\n.am-checkbox.am-success .am-ucheck-checkbox:checked + .am-ucheck-icons,\n.am-radio.am-success .am-ucheck-checkbox:checked + .am-ucheck-icons,\n.am-checkbox-inline.am-success .am-ucheck-checkbox:checked + .am-ucheck-icons,\n.am-radio-inline.am-success .am-ucheck-checkbox:checked + .am-ucheck-icons,\n.am-checkbox.am-success .am-ucheck-radio:checked + .am-ucheck-icons,\n.am-radio.am-success .am-ucheck-radio:checked + .am-ucheck-icons,\n.am-checkbox-inline.am-success .am-ucheck-radio:checked + .am-ucheck-icons,\n.am-radio-inline.am-success .am-ucheck-radio:checked + .am-ucheck-icons {\n  color: #5eb95e;\n}\n.am-checkbox.am-warning .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-radio.am-warning .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-checkbox-inline.am-warning .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-radio-inline.am-warning .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-checkbox.am-warning .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-radio.am-warning .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-checkbox-inline.am-warning .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-radio-inline.am-warning .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons {\n  color: #F37B1D;\n}\n.am-checkbox.am-warning .am-ucheck-checkbox:checked + .am-ucheck-icons,\n.am-radio.am-warning .am-ucheck-checkbox:checked + .am-ucheck-icons,\n.am-checkbox-inline.am-warning .am-ucheck-checkbox:checked + .am-ucheck-icons,\n.am-radio-inline.am-warning .am-ucheck-checkbox:checked + .am-ucheck-icons,\n.am-checkbox.am-warning .am-ucheck-radio:checked + .am-ucheck-icons,\n.am-radio.am-warning .am-ucheck-radio:checked + .am-ucheck-icons,\n.am-checkbox-inline.am-warning .am-ucheck-radio:checked + .am-ucheck-icons,\n.am-radio-inline.am-warning .am-ucheck-radio:checked + .am-ucheck-icons {\n  color: #F37B1D;\n}\n.am-checkbox.am-danger .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-radio.am-danger .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-checkbox-inline.am-danger .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-radio-inline.am-danger .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-checkbox.am-danger .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-radio.am-danger .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-checkbox-inline.am-danger .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons,\n.am-radio-inline.am-danger .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons {\n  color: #dd514c;\n}\n.am-checkbox.am-danger .am-ucheck-checkbox:checked + .am-ucheck-icons,\n.am-radio.am-danger .am-ucheck-checkbox:checked + .am-ucheck-icons,\n.am-checkbox-inline.am-danger .am-ucheck-checkbox:checked + .am-ucheck-icons,\n.am-radio-inline.am-danger .am-ucheck-checkbox:checked + .am-ucheck-icons,\n.am-checkbox.am-danger .am-ucheck-radio:checked + .am-ucheck-icons,\n.am-radio.am-danger .am-ucheck-radio:checked + .am-ucheck-icons,\n.am-checkbox-inline.am-danger .am-ucheck-radio:checked + .am-ucheck-icons,\n.am-radio-inline.am-danger .am-ucheck-radio:checked + .am-ucheck-icons {\n  color: #dd514c;\n}\n.am-field-error + .am-ucheck-icons {\n  color: #dd514c;\n}\n.am-field-valid + .am-ucheck-icons {\n  color: #5eb95e;\n}\n/*\n// Group Addon\n.@{ns}input-group-label {\n  .@{ns}radio,\n  .@{ns}checkbox {\n    margin: -2px 0;\n    padding-left: 15px;\n  }\n}\n\n// Form inline style\n.@{ns}form-inline .@{ns}checkbox,\n.@{ns}form-inline .@{ns}radio {\n  padding-left: 24px;\n}\n*/\n/* ==========================================================================\n   Component: Selected Plugin\n ============================================================================ */\n.am-selected {\n  width: 200px;\n}\n.am-selected-btn {\n  width: 100%;\n  padding-left: 10px;\n  text-align: right;\n}\n.am-selected-btn.am-btn-default {\n  background: none;\n}\n.am-invalid .am-selected-btn {\n  border-color: #dd514c;\n}\n.am-selected-header {\n  height: 45px;\n  background-color: #f2f2f2;\n  border-bottom: 1px solid #ddd;\n  display: none;\n}\n.am-selected-status {\n  text-align: left;\n  width: 100%;\n  display: block;\n  word-wrap: normal;\n  /* for IE */\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.am-selected-content {\n  padding: 10px 0;\n}\n.am-selected-search {\n  padding: 0 10px 10px;\n}\n.am-selected-search .am-form-field {\n  padding: .5em;\n}\n.am-selected-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-size: 1.5rem;\n}\n.am-selected-list li {\n  position: relative;\n  cursor: pointer;\n  padding: 5px 10px;\n  transition: background-color 0.15s;\n}\n.am-selected-list li:hover {\n  background-color: #f8f8f8;\n}\n.am-selected-list li:hover .am-icon-check {\n  opacity: .6;\n}\n.am-selected-list li.am-checked .am-icon-check {\n  opacity: 1;\n  color: #0e90d2;\n}\n.am-selected-list li.am-disabled {\n  opacity: .5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.am-selected-list .am-selected-list-header {\n  margin-top: 8px;\n  font-size: 1.3rem;\n  color: #999999;\n  border-bottom: 1px solid #e5e5e5;\n  cursor: default;\n}\n.am-selected-list .am-selected-list-header:hover {\n  background: none;\n}\n.am-selected-list .am-selected-list-header:first-child {\n  margin-top: 0;\n}\n.am-selected-list .am-selected-text {\n  display: block;\n  word-wrap: normal;\n  /* for IE */\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  margin-right: 30px;\n}\n.am-selected-list .am-icon-check {\n  position: absolute;\n  right: 8px;\n  top: 5px;\n  color: #999999;\n  opacity: 0;\n  transition: opacity .15s;\n}\n.am-selected-hint {\n  line-height: 1.2;\n  color: #dd514c;\n}\n.am-selected-hint:not(:empty) {\n  margin-top: 10px;\n  border-top: 1px solid #e5e5e5;\n  padding: 10px 10px 0;\n}\n.am-selected-placeholder {\n  opacity: .65;\n}\n/* ==========================================================================\n   Component: JS Plugins helpers\n ============================================================================ */\n.am-fade {\n  opacity: 0;\n  transition: opacity .2s linear;\n}\n.am-fade.am-in {\n  opacity: 1;\n}\n.am-collapse {\n  display: none;\n}\n.am-collapse.am-in {\n  display: block;\n}\ntr.am-collapse.am-in {\n  display: table-row;\n}\ntbody.am-collapse.am-in {\n  display: table-row-group;\n}\n.am-collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height .3s ease;\n}\n.am-sticky {\n  position: fixed !important;\n  z-index: 1010;\n  transform-origin: 0 0;\n}\n[data-am-sticky][class*=\"am-animation-\"] {\n  animation-duration: .2s;\n}\n.am-dimmer-active {\n  overflow: hidden;\n}\n.am-dimmer {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: none;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1100;\n  opacity: 0;\n}\n.am-dimmer.am-active {\n  opacity: 1;\n}\n[data-am-collapse] {\n  cursor: pointer;\n}\n.am-datepicker {\n  top: 0;\n  left: 0;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: 0 0 10px #ccc;\n  padding-bottom: 10px;\n  margin-top: 10px;\n  width: 238px;\n  color: #555;\n  display: none;\n}\n.am-datepicker > div {\n  display: none;\n}\n.am-datepicker table {\n  width: 100%;\n}\n.am-datepicker tr.am-datepicker-header {\n  font-size: 1.6rem;\n  color: #fff;\n  background: #3bb4f2;\n}\n.am-datepicker td,\n.am-datepicker th {\n  text-align: center;\n  font-weight: normal;\n  cursor: pointer;\n}\n.am-datepicker th {\n  height: 48px;\n}\n.am-datepicker td {\n  font-size: 1.4rem;\n}\n.am-datepicker td.am-datepicker-day {\n  height: 34px;\n  width: 34px;\n}\n.am-datepicker td.am-datepicker-day:hover {\n  background: #F0F0F0;\n  height: 34px;\n  width: 34px;\n}\n.am-datepicker td.am-datepicker-day.am-disabled {\n  cursor: no-drop;\n  color: #999;\n  background: #fafafa;\n}\n.am-datepicker td.am-datepicker-old,\n.am-datepicker td.am-datepicker-new {\n  color: #89d7ff;\n}\n.am-datepicker td.am-active,\n.am-datepicker td.am-active:hover {\n  border-radius: 0;\n  color: #0084c7;\n  background: #F0F0F0;\n}\n.am-datepicker td span {\n  display: block;\n  width: 79.33333333px;\n  height: 40px;\n  line-height: 40px;\n  float: left;\n  cursor: pointer;\n}\n.am-datepicker td span:hover {\n  background: #F0F0F0;\n}\n.am-datepicker td span.am-active {\n  color: #0084c7;\n  background: #F0F0F0;\n}\n.am-datepicker td span.am-disabled {\n  cursor: no-drop;\n  color: #999;\n  background: #fafafa;\n}\n.am-datepicker td span.am-datepicker-old {\n  color: #89d7ff;\n}\n.am-datepicker .am-datepicker-dow {\n  height: 40px;\n  color: #0c80ba;\n}\n.am-datepicker-caret {\n  display: block!important;\n  display: inline-block;\n  width: 0;\n  height: 0;\n  vertical-align: middle;\n  border-bottom: 7px solid #3bb4f2;\n  border-right: 7px solid transparent;\n  border-left: 7px solid transparent;\n  border-top: 0 dotted;\n  transform: rotate(360deg);\n  position: absolute;\n  top: -7px;\n  left: 6px;\n}\n.am-datepicker-right .am-datepicker-caret {\n  left: auto;\n  right: 7px;\n}\n.am-datepicker-up .am-datepicker-caret {\n  top: auto;\n  bottom: -7px;\n  display: inline-block;\n  width: 0;\n  height: 0;\n  vertical-align: middle;\n  border-top: 7px solid #fff;\n  border-right: 7px solid transparent;\n  border-left: 7px solid transparent;\n  border-bottom: 0 dotted;\n  transform: rotate(360deg);\n}\n.am-datepicker-select {\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  transition: background-color 300ms ease-out;\n}\n.am-datepicker-select:hover {\n  background: rgba(154, 217, 248, 0.5);\n  color: #0c80ba;\n}\n.am-datepicker-prev,\n.am-datepicker-next {\n  width: 34px;\n  height: 34px;\n}\n.am-datepicker-prev-icon,\n.am-datepicker-next-icon {\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  display: inline-block;\n  transition: background-color 300ms ease-out;\n}\n.am-datepicker-prev-icon:hover,\n.am-datepicker-next-icon:hover {\n  background: rgba(154, 217, 248, 0.5);\n  color: #0c80ba;\n}\n.am-datepicker-prev-icon:before {\n  display: inline-block;\n  font: normal normal normal 1.6rem/1 \"FontAwesome\", sans-serif;\n  /*font-weight: normal; // 2\n  font-style: normal; // 2\n  vertical-align: baseline; // 3\n  line-height: 1; // 4*/\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transform: translate(0, 0);\n  content: \"\\F053\";\n}\n.am-datepicker-next-icon:before {\n  display: inline-block;\n  font: normal normal normal 1.6rem/1 \"FontAwesome\", sans-serif;\n  /*font-weight: normal; // 2\n  font-style: normal; // 2\n  vertical-align: baseline; // 3\n  line-height: 1; // 4*/\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transform: translate(0, 0);\n  content: \"\\F054\";\n}\n.am-datepicker-dropdown {\n  position: absolute;\n  z-index: 1120;\n}\n@media only screen and (max-width: 640px) {\n  .am-datepicker {\n    width: 100%;\n  }\n  .am-datepicker td span {\n    width: 33.33%;\n  }\n  .am-datepicker-caret {\n    display: none!important;\n  }\n  .am-datepicker-prev,\n  .am-datepicker-next {\n    width: 44px;\n    height: 44px;\n  }\n}\n.am-datepicker-success tr.am-datepicker-header {\n  background: #5eb95e;\n}\n.am-datepicker-success td.am-datepicker-day.am-disabled {\n  color: #999;\n}\n.am-datepicker-success td.am-datepicker-old,\n.am-datepicker-success td.am-datepicker-new {\n  color: #94df94;\n}\n.am-datepicker-success td.am-active,\n.am-datepicker-success td.am-active:hover {\n  color: #1b961b;\n}\n.am-datepicker-success td span.am-datepicker-old {\n  color: #94df94;\n}\n.am-datepicker-success td span.am-active {\n  color: #1b961b;\n}\n.am-datepicker-success .am-datepicker-caret {\n  border-bottom-color: #5eb95e;\n}\n.am-datepicker-success .am-datepicker-dow {\n  color: #367b36;\n}\n.am-datepicker-success .am-datepicker-select:hover,\n.am-datepicker-success .am-datepicker-prev-icon:hover,\n.am-datepicker-success .am-datepicker-next-icon:hover {\n  background: rgba(165, 216, 165, 0.5);\n  color: #367b36;\n}\n.am-datepicker-danger tr.am-datepicker-header {\n  background: #dd514c;\n}\n.am-datepicker-danger td.am-datepicker-day.am-disabled {\n  color: #999;\n}\n.am-datepicker-danger td.am-datepicker-old,\n.am-datepicker-danger td.am-datepicker-new {\n  color: #f59490;\n}\n.am-datepicker-danger td.am-active,\n.am-datepicker-danger td.am-active:hover {\n  color: #c10802;\n}\n.am-datepicker-danger td span.am-datepicker-old {\n  color: #f59490;\n}\n.am-datepicker-danger td span.am-active {\n  color: #c10802;\n}\n.am-datepicker-danger .am-datepicker-caret {\n  border-bottom-color: #dd514c;\n}\n.am-datepicker-danger .am-datepicker-dow {\n  color: #a4241f;\n}\n.am-datepicker-danger .am-datepicker-select:hover,\n.am-datepicker-danger .am-datepicker-prev-icon:hover,\n.am-datepicker-danger .am-datepicker-next-icon:hover {\n  background: rgba(237, 164, 162, 0.5);\n  color: #a4241f;\n}\n.am-datepicker-warning tr.am-datepicker-header {\n  background: #F37B1D;\n}\n.am-datepicker-warning td.am-datepicker-day.am-disabled {\n  color: #999;\n}\n.am-datepicker-warning td.am-datepicker-old,\n.am-datepicker-warning td.am-datepicker-new {\n  color: #ffad6d;\n}\n.am-datepicker-warning td.am-active,\n.am-datepicker-warning td.am-active:hover {\n  color: #aa4b00;\n}\n.am-datepicker-warning td span.am-datepicker-old {\n  color: #ffad6d;\n}\n.am-datepicker-warning td span.am-active {\n  color: #aa4b00;\n}\n.am-datepicker-warning .am-datepicker-caret {\n  border-bottom-color: #F37B1D;\n}\n.am-datepicker-warning .am-datepicker-dow {\n  color: #a14c09;\n}\n.am-datepicker-warning .am-datepicker-select:hover,\n.am-datepicker-warning .am-datepicker-prev-icon:hover,\n.am-datepicker-warning .am-datepicker-next-icon:hover {\n  background: rgba(248, 180, 126, 0.5);\n  color: #a14c09;\n}\n.am-datepicker > div {\n  display: block;\n}\n.am-datepicker > div span.am-datepicker-hour {\n  width: 59.5px;\n}\n.am-datepicker-date {\n  display: block;\n}\n.am-datepicker-date.am-input-group {\n  display: table;\n}\n.am-datepicker-time-box {\n  padding: 30px 0 30px 0;\n}\n.am-datepicker-time-box strong {\n  font-size: 5.2rem;\n  display: inline-block;\n  height: 70px;\n  width: 70px;\n  line-height: 70px;\n  font-weight: normal;\n}\n.am-datepicker-time-box strong:hover {\n  border-radius: 4px;\n  background: #ECECEC;\n}\n.am-datepicker-time-box em {\n  display: inline-block;\n  height: 70px;\n  width: 20px;\n  line-height: 70px;\n  font-size: 5.2rem;\n  font-style: normal;\n}\n.am-datepicker-toggle {\n  text-align: center;\n  cursor: pointer;\n  padding: 10px 0;\n}\n.am-datepicker-toggle:hover {\n  background: #f0f0f0;\n}\n/* ==========================================================================\n   Component: Print\n ============================================================================ */\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important;\n    /* Black prints faster: h5bp.com/s */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n  abbr[title]:after {\n    content: \" [\" attr(title) \"] \";\n  }\n  /**\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n  a[href^=\"javascript:\"]:after,\n  a[href^=\"#\"]:after {\n    content: \"\";\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n    /* h5bp.com/t */\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  @page {\n    margin: 0.5cm;\n  }\n  select {\n    background: #fff !important;\n  }\n  .am-topbar {\n    display: none;\n  }\n  .am-table td,\n  .am-table th {\n    background-color: #fff !important;\n  }\n  .am-table {\n    border-collapse: collapse !important;\n  }\n  .am-table-bordered th,\n  .am-table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n/* print helper classes */\n.am-print-block {\n  display: none !important;\n}\n@media print {\n  .am-print-block {\n    display: block !important;\n  }\n}\n.am-print-inline {\n  display: none !important;\n}\n@media print {\n  .am-print-inline {\n    display: inline !important;\n  }\n}\n.am-print-inline-block {\n  display: none !important;\n}\n@media print {\n  .am-print-inline-block {\n    display: inline-block !important;\n  }\n}\n@media print {\n  .am-print-hide {\n    display: none !important;\n  }\n}\n.lte9 #nprogress .nprogress-spinner {\n  display: none !important;\n}\n.lte8 .am-dimmer {\n  background-color: #000;\n  filter: alpha(opacity=60);\n}\n.lte8 .am-modal-actions {\n  display: none;\n}\n.lte8 .am-modal-actions.am-modal-active {\n  display: block;\n}\n.lte8 .am-offcanvas.am-active {\n  background: #000;\n}\n.lte8 .am-popover .am-popover-caret {\n  border: 8px solid transparent;\n}\n.lte8 .am-popover-top .am-popover-caret {\n  border-top: 8px solid #333333;\n  border-bottom: none;\n}\n.lte8 .am-popover-left .am-popover-caret {\n  right: -8px;\n  margin-top: -6px;\n  border-left: 8px solid #333333;\n  border-right: none;\n}\n.lte8 .am-popover-right .am-popover-caret {\n  left: -8px;\n  margin-top: -6px;\n  border-right: 8px solid #333333;\n  border-left: none;\n}\n.icon {\n  width: 1em;\n  height: 1em;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden;\n}\n.am-container .icon {\n  font-size: 90px;\n  vertical-align: top;\n}\n.icon.amazeuiB {\n  fill: #999;\n  stroke: #3c9;\n  stroke-width: 5%;\n  stroke-linejoin: round;\n}\nbody {\n  background-color: #eee;\n}\n.v-link-active {\n  color: #0e90d2 !important;\n  background: #eee;\n  cursor: default;\n}\n", ""]);

	// exports


/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var VueRouter = __webpack_require__(48);

	var router = new VueRouter({
	  history: true
	});

	router.map({
	  '/': { component: __webpack_require__(56) },
	  '/image': { component: __webpack_require__(66) },
	  '*': { component: __webpack_require__(68) }
	});

	exports.default = router;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(57)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] pages/home.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(65)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/conglili/Developer/fronted-study/webpack-demo/pages/home.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _iconSet = __webpack_require__(58);

	var iconSet = _interopRequireWildcard(_iconSet);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.default = {
	  data: function data() {
	    return {
	      iconSet: iconSet
	    };
	  }
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bootstrapSolid = exports.amazeuiS = exports.amazeuiB = undefined;

	var _amazeuiB = __webpack_require__(59);

	var _amazeuiB2 = _interopRequireDefault(_amazeuiB);

	var _amazeuiS = __webpack_require__(63);

	var _amazeuiS2 = _interopRequireDefault(_amazeuiS);

	var _bootstrapSolid = __webpack_require__(64);

	var _bootstrapSolid2 = _interopRequireDefault(_bootstrapSolid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.amazeuiB = _amazeuiB2.default;
	exports.amazeuiS = _amazeuiS2.default;
	exports.bootstrapSolid = _bootstrapSolid2.default;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(60);;
	var image = "<symbol viewBox=\"0 0 473 91\" id=\"amazeui-b\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\"> <!-- Generator: Sketch 3.0.2 (7799) - http://www.bohemiancoding.com/sketch --> <title>Amaze.UI-color.white</title> <description>Created with Sketch.</description> <defs/> <g id=\"amazeui-b_Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\"> <g id=\"amazeui-b_Amaze-UI-Logo\" sketch:type=\"MSLayerGroup\"> <g id=\"amazeui-b_letters-b\" transform=\"translate(115.000000, 7.000000)\" fill=\"#323332\" sketch:type=\"MSShapeGroup\"> <path d=\"M349.362919,74.0003529 L358.220105,74.0003529 L358.220105,0.332 L349.362919,1.85258824 L349.362919,74.0003529\" id=\"amazeui-b_letter-i\"/> <path d=\"M35.9882907,25.3608824 C34.4257442,23.5721176 32.3671512,22.1842353 29.8097558,21.2027647 C27.2496047,20.2240588 24.1107326,19.7291765 20.3848721,19.7291765 C17.1302558,19.7291765 14.1043721,19.9835294 11.3154884,20.4867059 C8.52109302,20.9981765 6.52588372,21.5234706 5.33537209,22.0625882 L6.42667442,29.8811765 C7.55655814,29.4028824 9.27067442,28.9522353 11.5635116,28.5098824 C13.8563488,28.0702941 16.5294884,27.8518824 19.5884419,27.8518824 C21.9804884,27.8518824 23.9233372,28.203 25.4225,28.9190588 C26.918907,29.6268235 28.0983953,30.5723529 28.9637209,31.7584118 C29.8235349,32.9417059 30.2892674,34.2936471 30.6254767,35.8197647 C30.9589302,37.3403529 30.9975116,38.8775294 30.9975116,40.4340588 L30.9975116,43.0715882 C30.9975116,43.008 30.3912326,42.9057059 29.7298372,42.7702353 C29.065686,42.6375294 28.3491744,42.4827059 27.4535349,42.3168235 C26.5551395,42.1454118 25.6346977,42.0099412 24.6453605,41.9076471 C23.645,41.8081176 22.6942442,41.7528235 21.7682907,41.7528235 C18.8443721,41.7528235 16.0554884,42.0597059 13.3961279,42.6707059 C10.7395233,43.2789412 8.41912791,44.2272353 6.42667442,45.5100588 C4.43146512,46.8011765 2.85513953,48.4848824 1.69218605,50.5860588 C0.531988372,52.6872353 -0.052244186,55.1892941 -0.052244186,58.1005294 C-0.052244186,61.1444706 0.44655814,63.7488235 1.44140698,65.9135882 C2.44176744,68.0811176 3.8362093,69.8173529 5.63024419,71.1416471 C7.42703488,72.4548824 9.55176744,73.4252941 12.0127093,74.0362941 C14.4736512,74.6445294 17.1633256,74.9458824 20.0844884,74.9458824 C22.148593,74.9458824 24.2264767,74.8629412 26.3181395,74.6915294 C28.4098023,74.5201176 30.3526512,74.3376471 32.1494419,74.1358235 C33.9434767,73.934 35.6272791,73.7100588 37.0520349,73.4778235 C38.4795465,73.2372941 40.4664884,73.0548235 40.4664884,72.9193529 L40.4664884,39.9253529 C40.4664884,36.9532941 40.0613837,34.2272941 39.3972326,31.7584118 C38.7358372,29.284 37.5480814,27.1551765 35.9882907,25.3608824 L35.9882907,25.3608824 L35.9882907,25.3608824 Z M27.8861977,49.7207059 C29.3743372,49.9612353 30.9975116,50.2487647 30.9975116,50.5860588 L30.9975116,66.3227647 C30.9975116,66.5937059 28.5806628,66.7761765 26.8858372,66.8757059 C25.1910116,66.978 23.3143023,67.025 21.1206744,67.025 C17.4664651,67.025 14.6004186,66.3697647 12.475686,65.0482353 C10.3509535,63.7294706 9.30098837,61.3767059 9.30098837,57.9927059 C9.30098837,56.1707647 9.74467442,54.6944118 10.61,53.5774706 C11.4725698,52.4688235 12.5556047,51.5868824 13.853593,50.9427059 C15.1488256,50.3012941 16.579093,49.87 18.1443953,49.6737059 C19.6986744,49.4691176 21.1840581,49.3668235 22.5785,49.3668235 L27.8861977,49.7207059 L27.8861977,49.7207059 Z\" id=\"amazeui-b_letter-a\"/> <path d=\"M100.091279,20.6747059 C94.0174651,20.6747059 88.6601628,23.6218824 84.9894186,27.9735294 C81.324186,23.6218824 75.8042907,20.6747059 69.7387442,20.6747059 C57.5856047,20.6747059 49.7618488,27.9873529 49.7618488,38.6701765 L49.7618488,74.0003529 L59.2308256,74.0003529 L59.2308256,38.6701765 C59.2308256,35.3387059 62.4275698,30.3401176 69.6285116,30.3401176 C74.6496047,30.3401176 80.0730465,33.8042941 80.0730465,38.6701765 L80.0730465,74.0003529 L89.5420233,74.0003529 L89.5420233,38.6701765 C89.5420233,33.8042941 94.9682209,30.3401176 99.9865581,30.3401176 C107.184744,30.3401176 110.384244,35.3387059 110.384244,38.6701765 L110.384244,74.0003529 L119.853221,74.0003529 L119.853221,38.6701765 C119.853221,29.2895294 112.710151,20.6747059 100.091279,20.6747059\" id=\"amazeui-b_letter-m\"/> <path d=\"M162.402988,24.4153529 C160.837686,22.6293529 158.779093,21.2387059 156.224453,20.2572353 C153.664302,19.2785294 150.52543,18.7836471 146.79957,18.7836471 C143.544953,18.7836471 140.51907,19.038 137.730186,19.5411765 C134.935791,20.0554118 132.940581,20.5779412 131.747314,21.1198235 L132.841372,28.9356471 C133.971256,28.4601176 135.685372,28.0067059 137.975453,27.5643529 C140.271047,27.1247647 142.944186,26.9063529 146.000384,26.9063529 C148.395186,26.9063529 150.335279,27.2602353 151.834442,27.9735294 C153.330849,28.6812941 154.510337,29.6268235 155.375663,30.8128824 C156.238233,31.9989412 156.703965,33.3481176 157.040174,34.8742353 C157.373628,36.3948235 157.412209,37.932 157.412209,39.4885294 L157.412209,42.1260588 C157.412209,42.0624706 156.80593,41.9601765 156.144535,41.8247059 C155.480384,41.692 154.763872,41.5371765 153.865477,41.3712941 C152.969837,41.1998824 152.049395,41.0644118 151.060058,40.9621176 C150.059698,40.8625882 149.106186,40.8072941 148.180233,40.8072941 C145.256314,40.8072941 142.46743,41.1141765 139.810826,41.7251765 C137.154221,42.3334118 134.833826,43.2817059 132.841372,44.5645294 C130.846163,45.8556471 129.269837,47.5393529 128.106884,49.6405294 C126.946686,51.7417059 126.362453,54.2437647 126.362453,57.155 C126.362453,60.1989412 126.861256,62.8032941 127.856105,64.9680588 C128.856465,67.1383529 130.250907,68.8718235 132.042186,70.1961176 C133.841733,71.5093529 135.966465,72.4797647 138.427407,73.0907647 C140.885593,73.699 143.578023,74.0003529 146.499186,74.0003529 C148.560535,74.0003529 150.641174,73.9174118 152.732837,73.746 C154.8245,73.5745882 156.767349,73.3921176 158.56414,73.1902941 C160.358174,72.9884706 162.041977,72.7645294 163.466733,72.5322941 C164.894244,72.2917647 166.881186,72.1092941 166.881186,71.9765882 L166.881186,38.9798235 C166.881186,36.0105294 166.476081,33.2817647 165.81193,30.8128824 C165.150535,28.3384706 163.962779,26.2096471 162.402988,24.4153529 L162.402988,24.4153529 L162.402988,24.4153529 Z M154.300895,48.7751765 C155.789035,49.0184706 157.412209,49.3032353 157.412209,49.6405294 L157.412209,65.3772353 C157.412209,65.6481765 154.99536,65.8306471 153.300535,65.9301765 C151.605709,66.0324706 149.726244,66.0822353 147.532616,66.0822353 C143.881163,66.0822353 141.015116,65.4242353 138.890384,64.1027059 C136.765651,62.7839412 135.715686,60.4339412 135.715686,57.0499412 C135.715686,55.2252353 136.159372,53.7488824 137.024698,52.6319412 C137.884512,51.5232941 138.970302,50.6413529 140.265535,49.9999412 C141.563523,49.3557647 142.993791,48.9272353 144.559093,48.7281765 C146.113372,48.5263529 147.596,48.4212941 148.993198,48.4212941 L154.300895,48.7751765 L154.300895,48.7751765 Z\" id=\"amazeui-b_letter-a\"/> <path d=\"M193.604314,54.3598824 C196.23336,50.5722353 198.85414,46.862 201.483186,43.4088824 C204.103965,39.9612941 205.997209,36.7735882 208.292802,33.9287059 C210.580128,31.0921176 213.256023,28.8527059 213.256023,27.2906471 L213.256023,19.7844706 L177.259581,19.7844706 L177.259581,27.3901765 L202.621337,27.3901765 C200.832814,31.1833529 198.72186,32.5657059 196.296744,35.7147059 C193.866116,38.8581765 191.37486,42.3887059 188.820221,45.9385882 C186.26007,49.494 183.697163,53.1489412 181.371256,56.7347647 C179.042593,60.3261176 177.259581,63.6990588 175.369093,66.6683529 L175.369093,72.9995294 L215.149267,72.9995294 L215.149267,65.3993529 L186.676198,65.3993529 C188.665895,61.5978824 190.983535,58.1530588 193.604314,54.3598824\" id=\"amazeui-b_letter-z\"/> <path d=\"M267.104628,39.3447647 C264.800767,28.3495294 255.384151,20.1079412 244.096337,20.1079412 C237.904023,20.1079412 232.29043,22.6072353 228.093326,26.6602941 C223.460802,31.1225294 220.873093,37.1717059 220.663651,44.5092353 C220.638849,45.3994706 220.663651,46.9864118 220.682942,47.8655882 C220.721523,49.6045882 221.23686,54.9736471 222.314384,58.3272353 C223.408442,61.6808235 225.072953,64.5699412 227.318942,67.0084118 C229.559419,69.4413529 232.417198,71.3545294 235.886767,72.7424118 C239.353581,74.1275294 243.914453,74.8297647 248.662721,74.4731176 C260.024942,73.6077647 264.72636,69.1814706 265.91136,68.5732353 L261.810709,62.2365294 C260.614686,62.7756471 255.888465,65.9578235 248.783977,66.2757647 C242.688116,66.5439412 238.705965,64.675 235.834407,61.8273529 C232.960093,58.9824706 231.025512,54.6335882 230.893233,48.93 L267.250686,48.93 C267.344384,48.3853529 267.43257,47.8379412 267.487686,47.2822353 C267.592407,46.3809412 267.647523,45.4685882 267.647523,44.5451765 C267.647523,42.7536471 267.457372,41.0174118 267.104628,39.3447647 L267.104628,39.3447647 L267.104628,39.3447647 Z M231.130233,41.3270588 C231.127477,41.2634706 231.124721,41.1971176 231.119209,41.1418235 C231.30936,39.3558235 231.245977,38.1946471 231.888081,36.4998824 C232.304209,35.4327059 232.662465,34.4982353 233.147488,33.6218235 C234.544686,31.3575294 236.578477,29.5355882 239.009105,28.4158824 C239.213035,28.3191176 239.403186,28.2306471 239.607116,28.1477059 C239.742151,28.0896471 239.893721,28.0454118 240.028756,27.9901176 C240.342919,27.874 240.665349,27.7661765 240.993291,27.6749412 C241.089744,27.6472941 241.191709,27.6251765 241.282651,27.6002941 C242.183802,27.3708235 243.142826,27.2353529 244.209326,27.2353529 C246.601372,27.2353529 249.045779,27.7717059 251.11264,28.7808235 C252.642116,29.6047059 253.995221,30.7216471 255.097547,32.0487059 C257.067953,34.6502941 258.255709,37.7495294 258.217128,41.2358235 C258.217128,41.2634706 258.20886,41.2966471 258.20886,41.3270588 L231.130233,41.3270588 L231.130233,41.3270588 Z\" id=\"amazeui-b_letter-e\"/> <path d=\"M338.535326,45.6032353 C338.535326,65.2022353 329.722233,75.0003529 312.098802,75.0003529 C295.216686,75.0003529 286.775628,65.5727059 286.775628,46.7257059 L286.775628,2.81941176 L294.92457,1.15505882 L294.92457,46.1865882 C294.92457,60.4967059 300.940512,67.649 312.972395,67.649 C324.58264,67.649 330.386384,60.74 330.386384,46.9192353 L330.386384,2.81941176 L338.535326,1.15505882 L338.535326,45.6032353\" id=\"amazeui-b_letter-u\"/> </g> <g id=\"amazeui-b_bar\" sketch:type=\"MSShapeGroup\"> <path d=\"M53.0408824,33.3068824 L91.1053529,33.3068824 L91.1053529,91.6698235 L53.0408824,91.6698235 L53.0408824,33.3068824 L53.0408824,33.3068824 Z\" id=\"amazeui-b_bar-rb\" fill=\"#3A9BC9\"/> <path d=\"M53.0408824,0.306882353 L91.1053529,0.306882353 L91.1053529,24.4151177 L53.0408824,24.4151177 L53.0408824,0.306882353 L53.0408824,0.306882353 Z\" id=\"amazeui-b_bar-rt\" fill=\"#6DB85A\"/> <path d=\"M-0.251588235,0.306882353 L44.1578824,0.306882353 L44.1578824,91.6610588 L-0.251588235,91.6610588 L-0.251588235,0.306882353 L-0.251588235,0.306882353 Z\" id=\"amazeui-b_bar-l\" fill=\"#DF4E44\"/> </g> </g> </g> </symbol>";
	module.exports = sprite.add(image, "amazeui-b");

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Sprite = __webpack_require__(61);
	var globalSprite = new Sprite();

	if (document.body) {
	  globalSprite.elem = globalSprite.render(document.body);
	} else {
	  document.addEventListener('DOMContentLoaded', function () {
	    globalSprite.elem = globalSprite.render(document.body);
	  }, false);
	}

	module.exports = globalSprite;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Sniffr = __webpack_require__(62);

	/**
	 * List of SVG attributes to fix url target in them
	 * @type {string[]}
	 */
	var fixAttributes = ['clipPath', 'colorProfile', 'src', 'cursor', 'fill', 'filter', 'marker', 'markerStart', 'markerMid', 'markerEnd', 'mask', 'stroke'];

	/**
	 * Query to find'em
	 * @type {string}
	 */
	var fixAttributesQuery = '[' + fixAttributes.join('],[') + ']';
	/**
	 * @type {RegExp}
	 */
	var URI_FUNC_REGEX = /^url\((.*)\)$/;

	/**
	 * Convert array-like to array
	 * @param {Object} arrayLike
	 * @returns {Array.<*>}
	 */
	function arrayFrom(arrayLike) {
	  return Array.prototype.slice.call(arrayLike, 0);
	}

	/**
	 * Handles forbidden symbols which cannot be directly used inside attributes with url(...) content.
	 * Adds leading slash for the brackets
	 * @param {string} url
	 * @return {string} encoded url
	 */
	function encodeUrlForEmbedding(url) {
	  return url.replace(/\(|\)/g, "\\$&");
	}

	/**
	 * Replaces prefix in `url()` functions
	 * @param {Element} svg
	 * @param {string} currentUrlPrefix
	 * @param {string} newUrlPrefix
	 */
	function baseUrlWorkAround(svg, currentUrlPrefix, newUrlPrefix) {
	  var nodes = svg.querySelectorAll(fixAttributesQuery);

	  if (!nodes) {
	    return;
	  }

	  arrayFrom(nodes).forEach(function (node) {
	    if (!node.attributes) {
	      return;
	    }

	    arrayFrom(node.attributes).forEach(function (attribute) {
	      var attributeName = attribute.localName.toLowerCase();

	      if (fixAttributes.indexOf(attributeName) !== -1) {
	        var match = URI_FUNC_REGEX.exec(node.getAttribute(attributeName));

	        // Do not touch urls with unexpected prefix
	        if (match && match[1].indexOf(currentUrlPrefix) === 0) {
	          var referenceUrl = encodeUrlForEmbedding(newUrlPrefix + match[1].split(currentUrlPrefix)[1]);
	          node.setAttribute(attributeName, 'url(' + referenceUrl + ')');
	        }
	      }
	    });
	  });
	}

	/**
	 * Because of Firefox bug #353575 gradients and patterns don't work if they are within a symbol.
	 * To workaround this we move the gradient definition outside the symbol element
	 * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
	 * @param {Element} svg
	 */
	var FirefoxSymbolBugWorkaround = function FirefoxSymbolBugWorkaround(svg) {
	  var defs = svg.querySelector('defs');

	  var moveToDefsElems = svg.querySelectorAll('symbol linearGradient, symbol radialGradient, symbol pattern');
	  for (var i = 0, len = moveToDefsElems.length; i < len; i++) {
	    defs.appendChild(moveToDefsElems[i]);
	  }
	};

	/**
	 * @type {string}
	 */
	var DEFAULT_URI_PREFIX = '#';

	/**
	 * @type {string}
	 */
	var xLinkHref = 'xlink:href';
	/**
	 * @type {string}
	 */
	var xLinkNS = 'http://www.w3.org/1999/xlink';
	/**
	 * @type {string}
	 */
	var svgOpening = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="' + xLinkNS + '"';
	/**
	 * @type {string}
	 */
	var svgClosing = '</svg>';
	/**
	 * @type {string}
	 */
	var contentPlaceHolder = '{content}';

	/**
	 * Representation of SVG sprite
	 * @constructor
	 */
	function Sprite() {
	  var baseElement = document.getElementsByTagName('base')[0];
	  var currentUrl = window.location.href.split('#')[0];
	  var baseUrl = baseElement && baseElement.href;
	  this.urlPrefix = baseUrl && baseUrl !== currentUrl ? currentUrl + DEFAULT_URI_PREFIX : DEFAULT_URI_PREFIX;

	  var sniffr = new Sniffr();
	  sniffr.sniff();
	  this.browser = sniffr.browser;
	  this.content = [];

	  if (this.browser.name !== 'ie' && baseUrl) {
	    window.addEventListener('spriteLoaderLocationUpdated', function (e) {
	      var currentPrefix = this.urlPrefix;
	      var newUrlPrefix = e.detail.newUrl.split(DEFAULT_URI_PREFIX)[0] + DEFAULT_URI_PREFIX;
	      baseUrlWorkAround(this.svg, currentPrefix, newUrlPrefix);
	      this.urlPrefix = newUrlPrefix;

	      if (this.browser.name === 'firefox' || this.browser.name === 'edge' || this.browser.name === 'chrome' && this.browser.version[0] >= 49) {
	        var nodes = arrayFrom(document.querySelectorAll('use[*|href]'));
	        nodes.forEach(function (node) {
	          var href = node.getAttribute(xLinkHref);
	          if (href && href.indexOf(currentPrefix) === 0) {
	            node.setAttributeNS(xLinkNS, xLinkHref, newUrlPrefix + href.split(DEFAULT_URI_PREFIX)[1]);
	          }
	        });
	      }
	    }.bind(this));
	  }
	}

	Sprite.styles = ['position:absolute', 'width:0', 'height:0', 'visibility:hidden'];

	Sprite.spriteTemplate = svgOpening + ' style="' + Sprite.styles.join(';') + '"><defs>' + contentPlaceHolder + '</defs>' + svgClosing;
	Sprite.symbolTemplate = svgOpening + '>' + contentPlaceHolder + svgClosing;

	/**
	 * @type {Array<String>}
	 */
	Sprite.prototype.content = null;

	/**
	 * @param {String} content
	 * @param {String} id
	 */
	Sprite.prototype.add = function (content, id) {
	  if (this.svg) {
	    this.appendSymbol(content);
	  }

	  this.content.push(content);

	  return DEFAULT_URI_PREFIX + id;
	};

	/**
	 *
	 * @param content
	 * @param template
	 * @returns {Element}
	 */
	Sprite.prototype.wrapSVG = function (content, template) {
	  var svgString = template.replace(contentPlaceHolder, content);

	  var svg = new DOMParser().parseFromString(svgString, 'image/svg+xml').documentElement;

	  if (this.browser.name !== 'ie' && this.urlPrefix) {
	    baseUrlWorkAround(svg, DEFAULT_URI_PREFIX, this.urlPrefix);
	  }

	  return svg;
	};

	Sprite.prototype.appendSymbol = function (content) {
	  var symbol = this.wrapSVG(content, Sprite.symbolTemplate).childNodes[0];

	  this.svg.querySelector('defs').appendChild(symbol);
	  if (this.browser.name === 'firefox') {
	    FirefoxSymbolBugWorkaround(this.svg);
	  }
	};

	/**
	 * @returns {String}
	 */
	Sprite.prototype.toString = function () {
	  var wrapper = document.createElement('div');
	  wrapper.appendChild(this.render());
	  return wrapper.innerHTML;
	};

	/**
	 * @param {HTMLElement} [target]
	 * @param {Boolean} [prepend=true]
	 * @returns {HTMLElement} Rendered sprite node
	 */
	Sprite.prototype.render = function (target, prepend) {
	  target = target || null;
	  prepend = typeof prepend === 'boolean' ? prepend : true;

	  var svg = this.wrapSVG(this.content.join(''), Sprite.spriteTemplate);

	  if (this.browser.name === 'firefox') {
	    FirefoxSymbolBugWorkaround(svg);
	  }

	  if (target) {
	    if (prepend && target.childNodes[0]) {
	      target.insertBefore(svg, target.childNodes[0]);
	    } else {
	      target.appendChild(svg);
	    }
	  }

	  this.svg = svg;

	  return svg;
	};

	module.exports = Sprite;

/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";

	(function (host) {

	  var properties = {
	    browser: [[/msie ([\.\_\d]+)/, "ie"], [/trident\/.*?rv:([\.\_\d]+)/, "ie"], [/firefox\/([\.\_\d]+)/, "firefox"], [/chrome\/([\.\_\d]+)/, "chrome"], [/version\/([\.\_\d]+).*?safari/, "safari"], [/mobile safari ([\.\_\d]+)/, "safari"], [/android.*?version\/([\.\_\d]+).*?safari/, "com.android.browser"], [/crios\/([\.\_\d]+).*?safari/, "chrome"], [/opera/, "opera"], [/opera\/([\.\_\d]+)/, "opera"], [/opera ([\.\_\d]+)/, "opera"], [/opera mini.*?version\/([\.\_\d]+)/, "opera.mini"], [/opios\/([a-z\.\_\d]+)/, "opera"], [/blackberry/, "blackberry"], [/blackberry.*?version\/([\.\_\d]+)/, "blackberry"], [/bb\d+.*?version\/([\.\_\d]+)/, "blackberry"], [/rim.*?version\/([\.\_\d]+)/, "blackberry"], [/iceweasel\/([\.\_\d]+)/, "iceweasel"], [/edge\/([\.\d]+)/, "edge"]],
	    os: [[/linux ()([a-z\.\_\d]+)/, "linux"], [/mac os x/, "macos"], [/mac os x.*?([\.\_\d]+)/, "macos"], [/os ([\.\_\d]+) like mac os/, "ios"], [/openbsd ()([a-z\.\_\d]+)/, "openbsd"], [/android/, "android"], [/android ([a-z\.\_\d]+);/, "android"], [/mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/, "firefoxos"], [/windows\s*(?:nt)?\s*([\.\_\d]+)/, "windows"], [/windows phone.*?([\.\_\d]+)/, "windows.phone"], [/windows mobile/, "windows.mobile"], [/blackberry/, "blackberryos"], [/bb\d+/, "blackberryos"], [/rim.*?os\s*([\.\_\d]+)/, "blackberryos"]],
	    device: [[/ipad/, "ipad"], [/iphone/, "iphone"], [/lumia/, "lumia"], [/htc/, "htc"], [/nexus/, "nexus"], [/galaxy nexus/, "galaxy.nexus"], [/nokia/, "nokia"], [/ gt\-/, "galaxy"], [/ sm\-/, "galaxy"], [/xbox/, "xbox"], [/(?:bb\d+)|(?:blackberry)|(?: rim )/, "blackberry"]]
	  };

	  var UNKNOWN = "Unknown";

	  var propertyNames = Object.keys(properties);

	  function Sniffr() {
	    var self = this;

	    propertyNames.forEach(function (propertyName) {
	      self[propertyName] = {
	        name: UNKNOWN,
	        version: [],
	        versionString: UNKNOWN
	      };
	    });
	  }

	  function determineProperty(self, propertyName, userAgent) {
	    properties[propertyName].forEach(function (propertyMatcher) {
	      var propertyRegex = propertyMatcher[0];
	      var propertyValue = propertyMatcher[1];

	      var match = userAgent.match(propertyRegex);

	      if (match) {
	        self[propertyName].name = propertyValue;

	        if (match[2]) {
	          self[propertyName].versionString = match[2];
	          self[propertyName].version = [];
	        } else if (match[1]) {
	          self[propertyName].versionString = match[1].replace(/_/g, ".");
	          self[propertyName].version = parseVersion(match[1]);
	        } else {
	          self[propertyName].versionString = UNKNOWN;
	          self[propertyName].version = [];
	        }
	      }
	    });
	  }

	  function parseVersion(versionString) {
	    return versionString.split(/[\._]/).map(function (versionPart) {
	      return parseInt(versionPart);
	    });
	  }

	  Sniffr.prototype.sniff = function (userAgentString) {
	    var self = this;
	    var userAgent = (userAgentString || navigator.userAgent || "").toLowerCase();

	    propertyNames.forEach(function (propertyName) {
	      determineProperty(self, propertyName, userAgent);
	    });
	  };

	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = Sniffr;
	  } else {
	    host.Sniffr = new Sniffr();
	    host.Sniffr.sniff(navigator.userAgent);
	  }
	})(undefined);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(60);;
	var image = "<symbol viewBox=\"0 0 91 91\" id=\"amazeui-s\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\"> <!-- Generator: Sketch 3.0.2 (7799) - http://www.bohemiancoding.com/sketch --> <title>Amaze.UI.Logo</title> <description>Created with Sketch.</description> <defs/> <g id=\"amazeui-s_Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\"> <g id=\"amazeui-s_Amaze-UI-Logo\" sketch:type=\"MSLayerGroup\"> <g id=\"amazeui-s_bar\" sketch:type=\"MSShapeGroup\"> <path d=\"M53.0408824,33.3068824 L91.1053529,33.3068824 L91.1053529,91.6698235 L53.0408824,91.6698235 L53.0408824,33.3068824 L53.0408824,33.3068824 Z\" id=\"amazeui-s_bar-rb\" fill=\"#3A9BC9\"/> <path d=\"M53.0408824,0.306882353 L91.1053529,0.306882353 L91.1053529,24.4151177 L53.0408824,24.4151177 L53.0408824,0.306882353 L53.0408824,0.306882353 Z\" id=\"amazeui-s_bar-rt\" fill=\"#6DB85A\"/> <path d=\"M-0.251588235,0.306882353 L44.1578824,0.306882353 L44.1578824,91.6610588 L-0.251588235,91.6610588 L-0.251588235,0.306882353 L-0.251588235,0.306882353 Z\" id=\"amazeui-s_bar-l\" fill=\"#DF4E44\"/> </g> </g> </g> </symbol>";
	module.exports = sprite.add(image, "amazeui-s");

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(60);;
	var image = "<symbol viewBox=\"0 0 612 612\" id=\"bootstrap-solid\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"> <g id=\"bootstrap-solid_solid\" sodipodi:docname=\"twitter_bootstrap_logo.svg\" inkscape:version=\"0.48.1 r9760\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"> <path id=\"bootstrap-solid_bg\" fill=\"#563D7C\" d=\"M612,510c0,56.1-45.9,102-102,102H102C45.9,612,0,566.1,0,510V102C0,45.9,45.9,0,102,0h408\n\t\tc56.1,0,102,45.9,102,102V510z\"/> <g id=\"bootstrap-solid_B\" enable-background=\"new    \"> <path fill=\"#FFFFFF\" d=\"M166.3,133h173.5c32,0,57.7,7.3,77,22s29,36.8,29,66.5c0,18-4.4,33.4-13.2,46.2\n\t\t\tc-8.8,12.8-21.4,22.8-37.8,29.8v1c22,4.7,38.7,15.1,50,31.2c11.3,16.2,17,36.4,17,60.8c0,14-2.5,27.1-7.5,39.2\n\t\t\tc-5,12.2-12.8,22.7-23.5,31.5s-24.3,15.8-41,21s-36.5,7.8-59.5,7.8h-164L166.3,133L166.3,133z M228.8,282.5h102\n\t\t\tc15,0,27.5-4.2,37.5-12.8s15-20.8,15-36.8c0-18-4.5-30.7-13.5-38s-22-11-39-11h-102L228.8,282.5L228.8,282.5z M228.8,439h110.5\n\t\t\tc19,0,33.8-4.9,44.2-14.8c10.5-9.8,15.8-23.8,15.8-41.8c0-17.7-5.2-31.2-15.8-40.8s-25.2-14.2-44.2-14.2H228.8V439z\"/> </g> </g> </symbol>";
	module.exports = sprite.add(image, "bootstrap-solid");

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "\n<img src=\"/assets/images/avatar.png\" width=\"90\" alt=\"\" />\n<svg class=\"icon icon-amazeuiB\" aria-hidden=\"true\">\n  <use :xlink:href=\"iconSet.amazeuiB\"></use>\n</svg>\n<svg class=\"icon icon-bootstrapSolid\" aria-hidden=\"true\">\n  <use :xlink:href=\"iconSet.bootstrapSolid\"></use>\n</svg>\n<svg class=\"icon icon-amazeuiS\" aria-hidden=\"true\">\n  <use :xlink:href=\"iconSet.amazeuiS\"></use>\n</svg>\n<!-- <symbol id=\"iconic-aperture\" viewBox=\"0 0 128 128\">\n  <path fill=\"var(--icon-color1)\" d=\"…\" />\n  <path fill=\"var(--icon-color2)\" d=\"…\" />\n  <path fill=\"var(--icon-color3)\" d=\"…\" />\n  <path fill=\"var(--icon-color4)\" d=\"…\" />\n  <path fill=\"var(--icon-color5)\" d=\"…\" />\n  <path fill=\"var(--icon-color6)\" d=\"…\" />\n</symbol> -->\n<div class=\"am-article-bd\">\n  <p class=\"am-article-lead\">《永远的蝴蝶》是台湾著名作家陈启佑先生的一篇小小说。这是一篇散文化的微型小说，其语言具有较强的抒情色彩，立意含蓄隽永 。作品情节很简单，写的是一个凄美的爱情故事。在一个雨天，“我”的恋人樱子自愿帮“我”到马路对面去寄信。随着一阵拔尖的刹车声，樱子年轻的生命消逝了。</p>\n  <h2>《永远的蝴蝶》原文</h2>\n  <p>那时候刚好下着雨，柏油路面湿冷冷的，还闪烁着青、黄、红颜色的灯火。我们就在骑楼下躲雨，看绿色的邮筒孤独地站在街的对面。我白色风衣的大口袋里有一封要寄给南部的母亲的信。樱子说她可以撑伞过去帮我寄信。我默默点头。</p>\n  <p>“谁叫我们只带来一把小伞哪。”她微笑着说，一面撑起伞，准备过马路帮我寄信。从她伞骨渗下来的小雨点，溅在我的眼镜玻璃上。</p>\n  <p>随着一阵拔尖的煞车声，樱子的一生轻轻地飞了起来。缓缓地，飘落在湿冷的街面上，好像一只夜晚的蝴蝶。</p>\n  <p>虽然是春天，好像已是秋深了。</p>\n  <p>她只是过马路去帮我寄信。这简单的行动，却要叫我终身难忘了。我缓缓睁开眼，茫然站在骑楼下，眼里裹着滚烫的泪水。世上所有的车子都停了下来，人潮涌向马路中央。没有人知道那躺在街面的，就是我的，蝴蝶。这时她只离我五公尺，竟是那么遥远。更大的雨点溅在我的眼镜上，溅到我的生命里来。</p>\n  <p>为什么呢？只带一把雨伞？</p>\n  <p>然而我又看到樱子穿着白色的风衣，撑着伞，静静地过马路了。她是要帮我寄信的。那，那是一封写给南部母亲的信。我茫然站在骑楼下，我又看到永远的樱子走到街心。其实雨下得并不大，却是一生一世中最大的一场雨。而那封信是这样写的，年轻的樱子知不知道呢？</p>\n  <blockquote><p>妈：我打算在下个月和樱子结婚。</p></blockquote>\n  <hr class=\"am-article-divider\">\n  <h2>作者简介</h2>\n  <p>《永远的蝴蝶》作者陈启佑，笔名渡也、江山之助，台湾省嘉义市人，中国文化大学中国文学博士，曾任教于嘉义农专、台湾教育学院。</p>\n  <hr class=\"am-article-divider\">\n  <h2>文章赏析</h2>\n  <h3>赏析一</h3>\n  <p>《永远的蝴蝶》就像一支低沉而哀怨的悲曲，幽幽道来，委婉动人。读罢此文，脑海中一直浮现着这样一个场景：阴雨中，樱子如蝴蝶般轻轻飞了起来，又缓缓落到了街面上。雨是冰凉的，街面是湿冷的，蝴蝶的飘飞是凄美的，又是令人伤痛的。</p>\n  <h3>赏析二</h3>\n  <p>文章有几点尤值得我们好好品味。一是作品以“雨”为线索，贯穿全文的始终。悲剧因“雨”而生，小说开篇写“雨”，正是对不幸和灾难起因的一个交代。樱子遭遇不幸后，又写“更大的雨点溅在我的眼镜上，溅到我的生命里来”，“成为一生一世的一场雨”。显然，“雨”又成为泪水和痛苦的象征。同时，以“雨”贯穿全文，也造成笼罩全文的阴冷凄凉的氛围。二是作家善于反复运用细节。如三次写到“站在骑楼下”，以此使“我”的情感思绪变化的脉络和层次更加清楚明显；两次写到樱子“穿着白色的风衣，撑着伞”，这是对“我”的心理刻画，突出了樱子美丽清纯的形象，也表达了“我”对樱子永不磨灭的爱。三是高超的谋篇布局技巧。直到作品的结尾处才告诉读者信的内容，这样构思，无疑加重了作品的悲剧色彩，让人哀痛欲绝，心不堪受。正因为作家善于谋篇布局，匠心独运，作品才有了很强的感染力。</p>\n</div>\n";

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(67)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/conglili/Developer/fronted-study/webpack-demo/pages/img.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"am-g\">\n  <div class=\"am-u-md-12\">\n    <ul class=\"am-avg-sm-4 am-thumbnails\">\n      <li><img class=\"am-thumbnail\" src=\"http://s.amazeui.org/media/i/demos/bing-1.jpg\" /></li>\n      <li><img class=\"am-thumbnail\" src=\"http://s.amazeui.org/media/i/demos/bing-2.jpg\" /></li>\n      <li><img class=\"am-thumbnail\" src=\"http://s.amazeui.org/media/i/demos/bing-3.jpg\" /></li>\n      <li><img class=\"am-thumbnail\" src=\"http://s.amazeui.org/media/i/demos/bing-4.jpg\" /></li>\n      <li><img class=\"am-thumbnail\" src=\"http://s.amazeui.org/media/i/demos/bing-2.jpg\" /></li>\n      <li><img class=\"am-thumbnail\" src=\"http://s.amazeui.org/media/i/demos/bing-3.jpg\" /></li>\n      <li><img class=\"am-thumbnail\" src=\"http://s.amazeui.org/media/i/demos/bing-1.jpg\" /></li>\n      <li><img class=\"am-thumbnail\" src=\"http://s.amazeui.org/media/i/demos/bing-2.jpg\" /></li>\n      <li><img class=\"am-thumbnail\" src=\"http://s.amazeui.org/media/i/demos/bing-3.jpg\" /></li>\n      <li><img class=\"am-thumbnail\" src=\"http://s.amazeui.org/media/i/demos/bing-1.jpg\" /></li>\n      <li><img class=\"am-thumbnail\" src=\"http://s.amazeui.org/media/i/demos/bing-2.jpg\" /></li>\n      <li><img class=\"am-thumbnail\" src=\"http://s.amazeui.org/media/i/demos/bing-1.jpg\" /></li>\n      <li><img class=\"am-thumbnail\" src=\"http://s.amazeui.org/media/i/demos/bing-2.jpg\" /></li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(69)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/conglili/Developer/fronted-study/webpack-demo/pages/404.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "\n<h1>404!</h1>\n";

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(71)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/conglili/Developer/fronted-study/webpack-demo/pages/layout.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "\n<header class=\"am-topbar\">\n<div class=\"am-container\">\n  <h1 class=\"am-topbar-brand\">\n    <a href=\"#\">Webpack Test</a>\n  </h1>\n  <div class=\"am-collapse am-topbar-collapse\">\n    <ul class=\"am-nav am-nav-pills am-topbar-nav\">\n      <li><a v-link=\"'/'\">首页</a></li>\n      <li><a v-link=\"'/image'\">看图</a></li>\n      <li class=\"am-dropdown\" data-am-dropdown>\n        <a class=\"am-dropdown-toggle\" data-am-dropdown-toggle href=\"javascript:;\">\n          下拉\n        </a>\n        <ul class=\"am-dropdown-content\">\n          <li class=\"am-dropdown-header\">标题</li>\n          <li><a href=\"#\">1. 去月球</a></li>\n          <li class=\"am-active\"><a href=\"#\">2. 去火星</a></li>\n          <li><a href=\"#\">3. 还是回地球</a></li>\n          <li class=\"am-disabled\"><a href=\"#\">4. 下地狱</a></li>\n          <li class=\"am-divider\"></li>\n          <li><a href=\"#\">5. 桥头一回首</a></li>\n        </ul>\n      </li>\n    </ul>\n\n    <div class=\"am-topbar-right\">\n      <button class=\"am-btn am-btn-primary am-topbar-btn am-btn-sm\">登录</button>\n      <button class=\"am-btn am-btn-secondary am-topbar-btn am-btn-sm am-dropdown-toggle\">其他</button>\n    </div>\n  </div>\n</div>\n</header>\n<div class=\"am-container\">\n  <router-view></router-view>\n</div>\n";

/***/ }
/******/ ]);