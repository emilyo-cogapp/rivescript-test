var RiveScript =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-polyfill/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/babel-polyfill/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\n__webpack_require__(/*! core-js/shim */ \"./node_modules/core-js/shim.js\");\n\n__webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js\");\n\n__webpack_require__(/*! core-js/fn/regexp/escape */ \"./node_modules/core-js/fn/regexp/escape.js\");\n\nif (global._babelPolyfill) {\n  throw new Error(\"only one instance of babel-polyfill is allowed\");\n}\nglobal._babelPolyfill = true;\n\nvar DEFINE_PROPERTY = \"defineProperty\";\nfunction define(O, key, value) {\n  O[key] || Object[DEFINE_PROPERTY](O, key, {\n    writable: true,\n    configurable: true,\n    value: value\n  });\n}\n\ndefine(String.prototype, \"padLeft\", \"\".padStart);\ndefine(String.prototype, \"padRight\", \"\".padEnd);\n\n\"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill\".split(\",\").forEach(function (key) {\n  [][key] && define(Array, key, Function.call.bind([][key]));\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://RiveScript/./node_modules/babel-polyfill/lib/index.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global, module) {\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n/**\n * Copyright (c) 2014, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * https://raw.github.com/facebook/regenerator/master/LICENSE file. An\n * additional grant of patent rights can be found in the PATENTS file in\n * the same directory.\n */\n\n!function (global) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  var inModule = ( false ? undefined : _typeof(module)) === \"object\";\n  var runtime = global.regeneratorRuntime;\n  if (runtime) {\n    if (inModule) {\n      // If regeneratorRuntime is defined globally and we're in a module,\n      // make the exports object identical to regeneratorRuntime.\n      module.exports = runtime;\n    }\n    // Don't bother evaluating the rest of this file if the runtime was\n    // already defined globally.\n    return;\n  }\n\n  // Define the runtime globally (as expected by generated code) as either\n  // module.exports (if we're in a module) or a new, empty object.\n  runtime = global.regeneratorRuntime = inModule ? module.exports : {};\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  runtime.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function (method) {\n      prototype[method] = function (arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  runtime.isGeneratorFunction = function (genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor ? ctor === GeneratorFunction ||\n    // For the native GeneratorFunction constructor, the best we can\n    // do is to check its .name property.\n    (ctor.displayName || ctor.name) === \"GeneratorFunction\" : false;\n  };\n\n  runtime.mark = function (genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  runtime.awrap = function (arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value && (typeof value === \"undefined\" ? \"undefined\" : _typeof(value)) === \"object\" && hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function (value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function (err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function (unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration. If the Promise is rejected, however, the\n          // result for this iteration will be rejected with the same\n          // reason. Note that rejections of yielded Promises are not\n          // thrown back into the generator function, as is the case\n          // when an awaited Promise is rejected. This difference in\n          // behavior between yield and await is important, because it\n          // allows the consumer to decide what to do with the yielded\n          // rejection (swallow it and continue, manually .throw it back\n          // into the generator, abandon iteration, whatever). With\n          // await, by contrast, there is no opportunity to examine the\n          // rejection reason outside the generator function, so the\n          // only option is to throw it from the await expression, and\n          // let the generator function handle the exception.\n          result.value = unwrapped;\n          resolve(result);\n        }, reject);\n      }\n    }\n\n    if (_typeof(global.process) === \"object\" && global.process.domain) {\n      invoke = global.process.domain.bind(invoke);\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function (resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n      // If enqueue has been called before, then we want to wait until\n      // all previous Promises have been resolved before calling invoke,\n      // so that results are always delivered in the correct order. If\n      // enqueue has not been called before, then it is important to\n      // call invoke immediately, without waiting on a callback to fire,\n      // so that the async generator function has the opportunity to do\n      // any necessary setup in a predictable way. This predictability\n      // is why the Promise constructor synchronously invokes its\n      // executor callback, and why async functions synchronously\n      // execute code before the first await. Since we implement simple\n      // async functions in terms of async generators, it is especially\n      // important to get this right, even though it requires care.\n      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,\n      // Avoid propagating failures to Promises returned by later\n      // invocations of the iterator.\n      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  runtime.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  runtime.async = function (innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));\n\n    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.\n    : iter.next().then(function (result) {\n      return result.done ? result.value : iter.next();\n    });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done ? GenStateCompleted : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        if (delegate.iterator.return) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (!info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function () {\n    return this;\n  };\n\n  Gp.toString = function () {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  runtime.keys = function (object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1,\n            next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  runtime.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function reset(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function stop() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function dispatchException(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !!caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function abrupt(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry && (type === \"break\" || type === \"continue\") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function complete(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" || record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function finish(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function _catch(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function delegateYield(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n}(\n// Among the various tricks for obtaining a reference to the global\n// object, this seems to be the most reliable technique that does not\n// use indirect eval (which violates Content Security Policy).\n(typeof global === \"undefined\" ? \"undefined\" : _typeof(global)) === \"object\" ? global : (typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\" ? window : (typeof self === \"undefined\" ? \"undefined\" : _typeof(self)) === \"object\" ? self : undefined);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../../../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://RiveScript/./node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/regexp/escape.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/regexp/escape.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../../modules/core.regexp.escape */ \"./node_modules/core-js/modules/core.regexp.escape.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").RegExp.escape;\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/fn/regexp/escape.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nmodule.exports = function (it, msg) {\n  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);\n  return +it;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_a-number-value.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 22.1.3.31 Array.prototype[@@unscopables]\nvar UNSCOPABLES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('unscopables');\nvar ArrayProto = Array.prototype;\nif (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(ArrayProto, UNSCOPABLES, {});\nmodule.exports = function (key) {\n  ArrayProto[UNSCOPABLES][key] = true;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {\n    throw TypeError(name + ': incorrect invocation!');\n  }return it;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_an-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\n\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {\n  var O = toObject(this);\n  var len = toLength(O.length);\n  var to = toAbsoluteIndex(target, len);\n  var from = toAbsoluteIndex(start, len);\n  var end = arguments.length > 2 ? arguments[2] : undefined;\n  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);\n  var inc = 1;\n  if (from < to && to < from + count) {\n    inc = -1;\n    from += count - 1;\n    to += count - 1;\n  }\n  while (count-- > 0) {\n    if (from in O) O[to] = O[from];else delete O[to];\n    to += inc;\n    from += inc;\n  }return O;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_array-copy-within.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\n\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nmodule.exports = function fill(value /* , start = 0, end = @length */) {\n  var O = toObject(this);\n  var length = toLength(O.length);\n  var aLen = arguments.length;\n  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);\n  var end = aLen > 2 ? arguments[2] : undefined;\n  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);\n  while (endPos > index) {\n    O[index++] = value;\n  }return O;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_array-fill.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\n\nmodule.exports = function (iter, ITERATOR) {\n  var result = [];\n  forOf(iter, false, result.push, result, ITERATOR);\n  return result;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_array-from-iterable.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n      // Array#indexOf ignores holes, Array#includes - not\n    } else for (; length > index; index++) {\n      if (IS_INCLUDES || index in O) {\n        if (O[index] === el) return IS_INCLUDES || index || 0;\n      }\n    }return !IS_INCLUDES && -1;\n  };\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 0 -> Array#forEach\n// 1 -> Array#map\n// 2 -> Array#filter\n// 3 -> Array#some\n// 4 -> Array#every\n// 5 -> Array#find\n// 6 -> Array#findIndex\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar asc = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/core-js/modules/_array-species-create.js\");\nmodule.exports = function (TYPE, $create) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  var create = $create || asc;\n  return function ($this, callbackfn, that) {\n    var O = toObject($this);\n    var self = IObject(O);\n    var f = ctx(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var val, res;\n    for (; length > index; index++) {\n      if (NO_HOLES || index in self) {\n        val = self[index];\n        res = f(val, index, O);\n        if (TYPE) {\n          if (IS_MAP) result[index] = res; // map\n          else if (res) switch (TYPE) {\n              case 3:\n                return true; // some\n              case 5:\n                return val; // find\n              case 6:\n                return index; // findIndex\n              case 2:\n                result.push(val); // filter\n            } else if (IS_EVERY) return false; // every\n        }\n      }\n    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;\n  };\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_array-methods.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = function (that, callbackfn, aLen, memo, isRight) {\n  aFunction(callbackfn);\n  var O = toObject(that);\n  var self = IObject(O);\n  var length = toLength(O.length);\n  var index = isRight ? length - 1 : 0;\n  var i = isRight ? -1 : 1;\n  if (aLen < 2) for (;;) {\n    if (index in self) {\n      memo = self[index];\n      index += i;\n      break;\n    }\n    index += i;\n    if (isRight ? index < 0 : length <= index) {\n      throw TypeError('Reduce of empty array with no initial value');\n    }\n  }\n  for (; isRight ? index >= 0 : length > index; index += i) {\n    if (index in self) {\n      memo = callbackfn(memo, self[index], index, O);\n    }\n  }return memo;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_array-reduce.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (original) {\n  var C;\n  if (isArray(original)) {\n    C = original.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  }return C === undefined ? Array : C;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_array-species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 9.4.2.3 ArraySpeciesCreate(originalArray, length)\nvar speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ \"./node_modules/core-js/modules/_array-species-constructor.js\");\n\nmodule.exports = function (original, length) {\n  return new (speciesConstructor(original))(length);\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/modules/_invoke.js\");\nvar arraySlice = [].slice;\nvar factories = {};\n\nvar construct = function construct(F, len, args) {\n  if (!(len in factories)) {\n    for (var n = [], i = 0; i < len; i++) {\n      n[i] = 'a[' + i + ']';\n    } // eslint-disable-next-line no-new-func\n    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');\n  }return factories[len](F, args);\n};\n\nmodule.exports = Function.bind || function bind(that /* , ...args */) {\n  var fn = aFunction(this);\n  var partArgs = arraySlice.call(arguments, 1);\n  var bound = function bound() /* args... */{\n    var args = partArgs.concat(arraySlice.call(arguments));\n    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);\n  };\n  if (isObject(fn.prototype)) bound.prototype = fn.prototype;\n  return bound;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_bind.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () {\n  return arguments;\n}()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function tryGet(it, key) {\n  try {\n    return it[key];\n  } catch (e) {/* empty */}\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n  // @@toStringTag case\n  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n  // builtinTag case\n  : ARG ? cof(O)\n  // ES3 arguments fallback\n  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_classof.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar $iterDefine = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/modules/_iter-step.js\");\nvar setSpecies = __webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar fastKey = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").fastKey;\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar SIZE = DESCRIPTORS ? '_s' : 'size';\n\nvar getEntry = function getEntry(that, key) {\n  // fast case\n  var index = fastKey(key);\n  var entry;\n  if (index !== 'F') return that._i[index];\n  // frozen object case\n  for (entry = that._f; entry; entry = entry.n) {\n    if (entry.k == key) return entry;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME; // collection type\n      that._i = create(null); // index\n      that._f = undefined; // first entry\n      that._l = undefined; // last entry\n      that[SIZE] = 0; // size\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.1.3.1 Map.prototype.clear()\n      // 23.2.3.2 Set.prototype.clear()\n      clear: function clear() {\n        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {\n          entry.r = true;\n          if (entry.p) entry.p = entry.p.n = undefined;\n          delete data[entry.i];\n        }\n        that._f = that._l = undefined;\n        that[SIZE] = 0;\n      },\n      // 23.1.3.3 Map.prototype.delete(key)\n      // 23.2.3.4 Set.prototype.delete(value)\n      'delete': function _delete(key) {\n        var that = validate(this, NAME);\n        var entry = getEntry(that, key);\n        if (entry) {\n          var next = entry.n;\n          var prev = entry.p;\n          delete that._i[entry.i];\n          entry.r = true;\n          if (prev) prev.n = next;\n          if (next) next.p = prev;\n          if (that._f == entry) that._f = next;\n          if (that._l == entry) that._l = prev;\n          that[SIZE]--;\n        }return !!entry;\n      },\n      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)\n      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)\n      forEach: function forEach(callbackfn /* , that = undefined */) {\n        validate(this, NAME);\n        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n        var entry;\n        while (entry = entry ? entry.n : this._f) {\n          f(entry.v, entry.k, this);\n          // revert to the last existing entry\n          while (entry && entry.r) {\n            entry = entry.p;\n          }\n        }\n      },\n      // 23.1.3.7 Map.prototype.has(key)\n      // 23.2.3.7 Set.prototype.has(value)\n      has: function has(key) {\n        return !!getEntry(validate(this, NAME), key);\n      }\n    });\n    if (DESCRIPTORS) dP(C.prototype, 'size', {\n      get: function get() {\n        return validate(this, NAME)[SIZE];\n      }\n    });\n    return C;\n  },\n  def: function def(that, key, value) {\n    var entry = getEntry(that, key);\n    var prev, index;\n    // change existing entry\n    if (entry) {\n      entry.v = value;\n      // create new entry\n    } else {\n      that._l = entry = {\n        i: index = fastKey(key, true), // <- index\n        k: key, // <- key\n        v: value, // <- value\n        p: prev = that._l, // <- previous entry\n        n: undefined, // <- next entry\n        r: false // <- removed\n      };\n      if (!that._f) that._f = entry;\n      if (prev) prev.n = entry;\n      that[SIZE]++;\n      // add to index\n      if (index !== 'F') that._i[index] = entry;\n    }return that;\n  },\n  getEntry: getEntry,\n  setStrong: function setStrong(C, NAME, IS_MAP) {\n    // add .keys, .values, .entries, [@@iterator]\n    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11\n    $iterDefine(C, NAME, function (iterated, kind) {\n      this._t = validate(iterated, NAME); // target\n      this._k = kind; // kind\n      this._l = undefined; // previous\n    }, function () {\n      var that = this;\n      var kind = that._k;\n      var entry = that._l;\n      // revert to the last existing entry\n      while (entry && entry.r) {\n        entry = entry.p;\n      } // get next entry\n      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {\n        // or finish the iteration\n        that._t = undefined;\n        return step(1);\n      }\n      // return step by kind\n      if (kind == 'keys') return step(0, entry.k);\n      if (kind == 'values') return step(0, entry.v);\n      return step(0, [entry.k, entry.v]);\n    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);\n\n    // add [@@species], 23.1.2.2, 23.2.2.2\n    setSpecies(NAME);\n  }\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_collection-strong.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-to-json.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-to-json.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar from = __webpack_require__(/*! ./_array-from-iterable */ \"./node_modules/core-js/modules/_array-from-iterable.js\");\nmodule.exports = function (NAME) {\n  return function toJSON() {\n    if (classof(this) != NAME) throw TypeError(NAME + \"#toJSON isn't generic\");\n    return from(this);\n  };\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_collection-to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar getWeak = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").getWeak;\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar createArrayMethod = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\");\nvar $has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar arrayFind = createArrayMethod(5);\nvar arrayFindIndex = createArrayMethod(6);\nvar id = 0;\n\n// fallback for uncaught frozen keys\nvar uncaughtFrozenStore = function uncaughtFrozenStore(that) {\n  return that._l || (that._l = new UncaughtFrozenStore());\n};\nvar UncaughtFrozenStore = function UncaughtFrozenStore() {\n  this.a = [];\n};\nvar findUncaughtFrozen = function findUncaughtFrozen(store, key) {\n  return arrayFind(store.a, function (it) {\n    return it[0] === key;\n  });\n};\nUncaughtFrozenStore.prototype = {\n  get: function get(key) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) return entry[1];\n  },\n  has: function has(key) {\n    return !!findUncaughtFrozen(this, key);\n  },\n  set: function set(key, value) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) entry[1] = value;else this.a.push([key, value]);\n  },\n  'delete': function _delete(key) {\n    var index = arrayFindIndex(this.a, function (it) {\n      return it[0] === key;\n    });\n    if (~index) this.a.splice(index, 1);\n    return !!~index;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME; // collection type\n      that._i = id++; // collection id\n      that._l = undefined; // leak store for uncaught frozen objects\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.3.3.2 WeakMap.prototype.delete(key)\n      // 23.4.3.3 WeakSet.prototype.delete(value)\n      'delete': function _delete(key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);\n        return data && $has(data, this._i) && delete data[this._i];\n      },\n      // 23.3.3.4 WeakMap.prototype.has(key)\n      // 23.4.3.4 WeakSet.prototype.has(value)\n      has: function has(key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);\n        return data && $has(data, this._i);\n      }\n    });\n    return C;\n  },\n  def: function def(that, key, value) {\n    var data = getWeak(anObject(key), true);\n    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;\n    return that;\n  },\n  ufstore: uncaughtFrozenStore\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_collection-weak.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar $iterDetect = __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\n\nmodule.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {\n  var Base = global[NAME];\n  var C = Base;\n  var ADDER = IS_MAP ? 'set' : 'add';\n  var proto = C && C.prototype;\n  var O = {};\n  var fixMethod = function fixMethod(KEY) {\n    var fn = proto[KEY];\n    redefine(proto, KEY, KEY == 'delete' ? function (a) {\n      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n    } : KEY == 'has' ? function has(a) {\n      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n    } : KEY == 'get' ? function get(a) {\n      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);\n    } : KEY == 'add' ? function add(a) {\n      fn.call(this, a === 0 ? 0 : a);return this;\n    } : function set(a, b) {\n      fn.call(this, a === 0 ? 0 : a, b);return this;\n    });\n  };\n  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {\n    new C().entries().next();\n  }))) {\n    // create collection constructor\n    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);\n    redefineAll(C.prototype, methods);\n    meta.NEED = true;\n  } else {\n    var instance = new C();\n    // early implementations not supports chaining\n    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;\n    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false\n    var THROWS_ON_PRIMITIVES = fails(function () {\n      instance.has(1);\n    });\n    // most early implementations doesn't supports iterables, most modern - not close it correctly\n    var ACCEPT_ITERABLES = $iterDetect(function (iter) {\n      new C(iter);\n    }); // eslint-disable-line no-new\n    // for early implementations -0 and +0 not the same\n    var BUGGY_ZERO = !IS_WEAK && fails(function () {\n      // V8 ~ Chromium 42- fails only with 5+ elements\n      var $instance = new C();\n      var index = 5;\n      while (index--) {\n        $instance[ADDER](index, index);\n      }return !$instance.has(-0);\n    });\n    if (!ACCEPT_ITERABLES) {\n      C = wrapper(function (target, iterable) {\n        anInstance(target, C, NAME);\n        var that = inheritIfRequired(new Base(), target, C);\n        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n        return that;\n      });\n      C.prototype = proto;\n      proto.constructor = C;\n    }\n    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {\n      fixMethod('delete');\n      fixMethod('has');\n      IS_MAP && fixMethod('get');\n    }\n    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);\n    // weak collections should not contains .clear method\n    if (IS_WEAK && proto.clear) delete proto.clear;\n  }\n\n  setToStringTag(C, NAME);\n\n  O[NAME] = C;\n  $export($export.G + $export.W + $export.F * (C != Base), O);\n\n  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);\n\n  return C;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_collection.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar core = module.exports = { version: '2.5.1' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\n\nmodule.exports = function (object, index, value) {\n  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_create-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1:\n      return function (a) {\n        return fn.call(that, a);\n      };\n    case 2:\n      return function (a, b) {\n        return fn.call(that, a, b);\n      };\n    case 3:\n      return function (a, b, c) {\n        return fn.call(that, a, b, c);\n      };\n  }\n  return function () /* ...args */{\n    return fn.apply(that, arguments);\n  };\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\n\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar getTime = Date.prototype.getTime;\nvar $toISOString = Date.prototype.toISOString;\n\nvar lz = function lz(num) {\n  return num > 9 ? num : '0' + num;\n};\n\n// PhantomJS / old WebKit has a broken implementations\nmodule.exports = fails(function () {\n  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';\n}) || !fails(function () {\n  $toISOString.call(new Date(NaN));\n}) ? function toISOString() {\n  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');\n  var d = this;\n  var y = d.getUTCFullYear();\n  var m = d.getUTCMilliseconds();\n  var s = y < 0 ? '-' : y > 9999 ? '+' : '';\n  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';\n} : $toISOString;\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_date-to-iso-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar NUMBER = 'number';\n\nmodule.exports = function (hint) {\n  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');\n  return toPrimitive(anObject(this), hint != NUMBER);\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_date-to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function get() {\n      return 7;\n    } }).a != 7;\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// IE 8- don't enum bug keys\nmodule.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) {\n      if (isEnum.call(it, key = symbols[i++])) result.push(key);\n    }\n  }return result;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_enum-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function $export(type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});\n  var key, own, out, exp;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    // export native or passed\n    out = (own ? target : source)[key];\n    // bind timers to global for call from export context\n    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // extend global\n    if (target) redefine(target, key, out, type & $export.U);\n    // export\n    if (exports[key] != out) hide(exports, key, exp);\n    if (IS_PROTO && expProto[key] != out) expProto[key] = out;\n  }\n};\nglobal.core = core;\n// type bitmap\n$export.F = 1; // forced\n$export.G = 2; // global\n$export.S = 4; // static\n$export.P = 8; // proto\n$export.B = 16; // bind\n$export.W = 32; // wrap\n$export.U = 64; // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar MATCH = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match');\nmodule.exports = function (KEY) {\n  var re = /./;\n  try {\n    '/./'[KEY](re);\n  } catch (e) {\n    try {\n      re[MATCH] = false;\n      return !'/./'[KEY](re);\n    } catch (f) {/* empty */}\n  }return true;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_fails-is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\n\nmodule.exports = function (KEY, length, exec) {\n  var SYMBOL = wks(KEY);\n  var fns = exec(defined, SYMBOL, ''[KEY]);\n  var strfn = fns[0];\n  var rxfn = fns[1];\n  if (fails(function () {\n    var O = {};\n    O[SYMBOL] = function () {\n      return 7;\n    };\n    return ''[KEY](O) != 7;\n  })) {\n    redefine(String.prototype, KEY, strfn);\n    hide(RegExp.prototype, SYMBOL, length == 2\n    // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)\n    // 21.2.5.11 RegExp.prototype[@@split](string, limit)\n    ? function (string, arg) {\n      return rxfn.call(string, this, arg);\n    }\n    // 21.2.5.6 RegExp.prototype[@@match](string)\n    // 21.2.5.9 RegExp.prototype[@@search](string)\n    : function (string) {\n      return rxfn.call(string, this);\n    });\n  }\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_fix-re-wks.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 21.2.5.3 get RegExp.prototype.flags\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_flags.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray\n\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('isConcatSpreadable');\n\nfunction flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {\n  var targetIndex = start;\n  var sourceIndex = 0;\n  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;\n  var element, spreadable;\n\n  while (sourceIndex < sourceLen) {\n    if (sourceIndex in source) {\n      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];\n\n      spreadable = false;\n      if (isObject(element)) {\n        spreadable = element[IS_CONCAT_SPREADABLE];\n        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);\n      }\n\n      if (spreadable && depth > 0) {\n        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;\n      } else {\n        if (targetIndex >= 0x1fffffffffffff) throw TypeError();\n        target[targetIndex] = element;\n      }\n\n      targetIndex++;\n    }\n    sourceIndex++;\n  }\n  return targetIndex;\n}\n\nmodule.exports = flattenIntoArray;\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_flatten-into-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\nvar BREAK = {};\nvar RETURN = {};\nvar _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () {\n    return iterable;\n  } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\n_exports.BREAK = BREAK;\n_exports.RETURN = RETURN;\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_for-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self\n// eslint-disable-next-line no-new-func\n: Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_html.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('div'), 'a', { get: function get() {\n      return 7;\n    } }).a != 7;\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar setPrototypeOf = __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\").set;\nmodule.exports = function (that, target, C) {\n  var S = target.constructor;\n  var P;\n  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {\n    setPrototypeOf(that, P);\n  }return that;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_inherit-if-required.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n                  var un = that === undefined;\n                  switch (args.length) {\n                                    case 0:\n                                                      return un ? fn() : fn.call(that);\n                                    case 1:\n                                                      return un ? fn(args[0]) : fn.call(that, args[0]);\n                                    case 2:\n                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);\n                                    case 3:\n                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);\n                                    case 4:\n                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);\n                  }return fn.apply(that, args);\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_invoke.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_is-array-iter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.1.2.3 Number.isInteger(number)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar floor = Math.floor;\nmodule.exports = function isInteger(it) {\n  return !isObject(it) && isFinite(it) && floor(it) === it;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_is-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nmodule.exports = function (it) {\n  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 7.2.8 IsRegExp(argument)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar MATCH = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match');\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n    // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_iter-call.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator'), function () {\n  return this;\n});\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_iter-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function returnThis() {\n  return this;\n};\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function getMethod(kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS:\n        return function keys() {\n          return new Constructor(this, kind);\n        };\n      case VALUES:\n        return function values() {\n          return new Constructor(this, kind);\n        };\n    }return function entries() {\n      return new Constructor(this, kind);\n    };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() {\n      return $native.call(this);\n    };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_iter-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () {\n    SAFE_CLOSING = true;\n  };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () {\n    throw 2;\n  });\n} catch (e) {/* empty */}\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () {\n      return { done: safe = true };\n    };\n    arr[ITERATOR] = function () {\n      return iter;\n    };\n    exec(arr);\n  } catch (e) {/* empty */}\n  return safe;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_iter-detect.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_iter-step.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = false;\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_library.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.14 Math.expm1(x)\nvar $expm1 = Math.expm1;\nmodule.exports = !$expm1\n// Old FF bug\n|| $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168\n// Tor Browser bug\n|| $expm1(-2e-17) != -2e-17 ? function expm1(x) {\n  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;\n} : $expm1;\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_math-expm1.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.16 Math.fround(x)\nvar sign = __webpack_require__(/*! ./_math-sign */ \"./node_modules/core-js/modules/_math-sign.js\");\nvar pow = Math.pow;\nvar EPSILON = pow(2, -52);\nvar EPSILON32 = pow(2, -23);\nvar MAX32 = pow(2, 127) * (2 - EPSILON32);\nvar MIN32 = pow(2, -126);\n\nvar roundTiesToEven = function roundTiesToEven(n) {\n  return n + 1 / EPSILON - 1 / EPSILON;\n};\n\nmodule.exports = Math.fround || function fround(x) {\n  var $abs = Math.abs(x);\n  var $sign = sign(x);\n  var a, result;\n  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;\n  a = (1 + EPSILON32 / EPSILON) * $abs;\n  result = a - (a - $abs);\n  // eslint-disable-next-line no-self-compare\n  if (result > MAX32 || result != result) return $sign * Infinity;\n  return $sign * result;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_math-fround.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.20 Math.log1p(x)\nmodule.exports = Math.log1p || function log1p(x) {\n  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_math-log1p.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-scale.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-scale.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://rwaldron.github.io/proposal-math-extensions/\nmodule.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {\n  if (arguments.length === 0\n  // eslint-disable-next-line no-self-compare\n  || x != x\n  // eslint-disable-next-line no-self-compare\n  || inLow != inLow\n  // eslint-disable-next-line no-self-compare\n  || inHigh != inHigh\n  // eslint-disable-next-line no-self-compare\n  || outLow != outLow\n  // eslint-disable-next-line no-self-compare\n  || outHigh != outHigh) return NaN;\n  if (x === Infinity || x === -Infinity) return x;\n  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_math-scale.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.28 Math.sign(x)\nmodule.exports = Math.sign || function sign(x) {\n  // eslint-disable-next-line no-self-compare\n  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_math-sign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar META = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function setMeta(it) {\n  setDesc(it, META, { value: {\n      i: 'O' + ++id, // object ID\n      w: {} // weak collections IDs\n    } });\n};\nvar fastKey = function fastKey(it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n    // return object ID\n  }return it[META].i;\n};\nvar getWeak = function getWeak(it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n    // return hash weak collections IDs\n  }return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function onFreeze(it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_meta.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar Map = __webpack_require__(/*! ./es6.map */ \"./node_modules/core-js/modules/es6.map.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('metadata');\nvar store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ \"./node_modules/core-js/modules/es6.weak-map.js\"))());\n\nvar getOrCreateMetadataMap = function getOrCreateMetadataMap(target, targetKey, create) {\n  var targetMetadata = store.get(target);\n  if (!targetMetadata) {\n    if (!create) return undefined;\n    store.set(target, targetMetadata = new Map());\n  }\n  var keyMetadata = targetMetadata.get(targetKey);\n  if (!keyMetadata) {\n    if (!create) return undefined;\n    targetMetadata.set(targetKey, keyMetadata = new Map());\n  }return keyMetadata;\n};\nvar ordinaryHasOwnMetadata = function ordinaryHasOwnMetadata(MetadataKey, O, P) {\n  var metadataMap = getOrCreateMetadataMap(O, P, false);\n  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);\n};\nvar ordinaryGetOwnMetadata = function ordinaryGetOwnMetadata(MetadataKey, O, P) {\n  var metadataMap = getOrCreateMetadataMap(O, P, false);\n  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);\n};\nvar ordinaryDefineOwnMetadata = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {\n  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);\n};\nvar ordinaryOwnMetadataKeys = function ordinaryOwnMetadataKeys(target, targetKey) {\n  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);\n  var keys = [];\n  if (metadataMap) metadataMap.forEach(function (_, key) {\n    keys.push(key);\n  });\n  return keys;\n};\nvar toMetaKey = function toMetaKey(it) {\n  return it === undefined || (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : String(it);\n};\nvar exp = function exp(O) {\n  $export($export.S, 'Reflect', O);\n};\n\nmodule.exports = {\n  store: store,\n  map: getOrCreateMetadataMap,\n  has: ordinaryHasOwnMetadata,\n  get: ordinaryGetOwnMetadata,\n  set: ordinaryDefineOwnMetadata,\n  keys: ordinaryOwnMetadataKeys,\n  key: toMetaKey,\n  exp: exp\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar macrotask = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\").set;\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\")(process) == 'process';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function flush() {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();else last = undefined;\n        throw e;\n      }\n    }last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (isNode) {\n    notify = function notify() {\n      process.nextTick(flush);\n    };\n    // browsers with MutationObserver\n  } else if (Observer) {\n    var toggle = true;\n    var node = document.createTextNode('');\n    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\n    notify = function notify() {\n      node.data = toggle = !toggle;\n    };\n    // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    var promise = Promise.resolve();\n    notify = function notify() {\n      promise.then(flush);\n    };\n    // for other environments - macrotask based on:\n    // - setImmediate\n    // - MessageChannel\n    // - window.postMessag\n    // - onreadystatechange\n    // - setTimeout\n  } else {\n    notify = function notify() {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = { fn: fn, next: undefined };\n    if (last) last.next = task;\n    if (!head) {\n      head = task;\n      notify();\n    }last = task;\n  };\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_microtask.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 25.4.1.5 NewPromiseCapability(C)\n\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_new-promise-capability.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.2.1 Object.assign(target, source, ...)\n\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function (k) {\n    B[k] = k;\n  });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\n}) ? function assign(target, source) {\n  // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) {\n      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];\n    }\n  }return T;\n} : $assign;\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_object-assign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function Empty() {/* empty */};\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar _createDict = function createDict() {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  _createDict = iframeDocument.F;\n  while (i--) {\n    delete _createDict[PROTOTYPE][enumBugKeys[i]];\n  }return _createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = _createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) {/* empty */}\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) {\n    dP.f(O, P = keys[i++], Properties[P]);\n  }return O;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_object-dps.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-forced-pam.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-forced-pam.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Forced replacement prototype accessors methods\n\nmodule.exports = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\") || !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  var K = Math.random();\n  // In FF throws only define methods\n  // eslint-disable-next-line no-undef, no-useless-call\n  __defineSetter__.call(null, K, function () {/* empty */});\n  delete __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\")[K];\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_object-forced-pam.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/modules/_ie8-dom-define.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) {/* empty */}\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_object-gopd.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function getWindowNames(it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_object-gopn-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_object-gopn.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.f = Object.getOwnPropertySymbols;\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_object-gops.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  }return O instanceof Object ? ObjectProto : null;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_object-gpo.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) {\n    if (key != IE_PROTO) has(O, key) && result.push(key);\n  } // Don't enum bug & hidden keys\n  while (names.length > i) {\n    if (has(O, key = names[i++])) {\n      ~arrayIndexOf(result, key) || result.push(key);\n    }\n  }return result;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.f = {}.propertyIsEnumerable;\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_object-pie.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () {\n    fn(1);\n  }), 'Object', exp);\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_object-sap.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar isEnum = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\").f;\nmodule.exports = function (isEntries) {\n  return function (it) {\n    var O = toIObject(it);\n    var keys = getKeys(O);\n    var length = keys.length;\n    var i = 0;\n    var result = [];\n    var key;\n    while (length > i) {\n      if (isEnum.call(O, key = keys[i++])) {\n        result.push(isEntries ? [key, O[key]] : O[key]);\n      }\n    }return result;\n  };\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_object-to-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// all object keys, includes non-enumerable and symbols\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar Reflect = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Reflect;\nmodule.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {\n  var keys = gOPN.f(anObject(it));\n  var getSymbols = gOPS.f;\n  return getSymbols ? keys.concat(getSymbols(it)) : keys;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $parseFloat = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").parseFloat;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim;\n\nmodule.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\") + '-0') !== -Infinity ? function parseFloat(str) {\n  var string = $trim(String(str), 3);\n  var result = $parseFloat(string);\n  return result === 0 && string.charAt(0) == '-' ? -0 : result;\n} : $parseFloat;\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $parseInt = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").parseInt;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim;\nvar ws = __webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\");\nvar hex = /^[-+]?0[xX]/;\n\nmodule.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {\n  var string = $trim(String(str), 3);\n  return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));\n} : $parseInt;\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (exec) {\n  try {\n    return { e: false, v: exec() };\n  } catch (e) {\n    return { e: true, v: e };\n  }\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_perform.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/modules/_new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_promise-resolve.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nmodule.exports = function (target, src, safe) {\n  for (var key in src) {\n    redefine(target, key, src[key], safe);\n  }return target;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_redefine-all.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar SRC = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('src');\nvar TO_STRING = 'toString';\nvar $toString = Function[TO_STRING];\nvar TPL = ('' + $toString).split(TO_STRING);\n\n__webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").inspectSource = function (it) {\n  return $toString.call(it);\n};\n\n(module.exports = function (O, key, val, safe) {\n  var isFunction = typeof val == 'function';\n  if (isFunction) has(val, 'name') || hide(val, 'name', key);\n  if (O[key] === val) return;\n  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));\n  if (O === global) {\n    O[key] = val;\n  } else if (!safe) {\n    delete O[key];\n    hide(O, key, val);\n  } else if (O[key]) {\n    O[key] = val;\n  } else {\n    hide(O, key, val);\n  }\n  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, TO_STRING, function toString() {\n  return typeof this == 'function' && this[SRC] || $toString.call(this);\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_replacer.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_replacer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (regExp, replace) {\n  var replacer = replace === Object(replace) ? function (part) {\n    return replace[part];\n  } : replace;\n  return function (it) {\n    return String(it).replace(regExp, replacer);\n  };\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_replacer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 7.2.9 SameValue(x, y)\nmodule.exports = Object.is || function is(x, y) {\n  // eslint-disable-next-line no-self-compare\n  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_same-value.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-collection-from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-collection-from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-setmap-offrom/\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\n\nmodule.exports = function (COLLECTION) {\n  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {\n      var mapFn = arguments[1];\n      var mapping, A, n, cb;\n      aFunction(this);\n      mapping = mapFn !== undefined;\n      if (mapping) aFunction(mapFn);\n      if (source == undefined) return new this();\n      A = [];\n      if (mapping) {\n        n = 0;\n        cb = ctx(mapFn, arguments[2], 2);\n        forOf(source, false, function (nextItem) {\n          A.push(cb(nextItem, n++));\n        });\n      } else {\n        forOf(source, false, A.push, A);\n      }\n      return new this(A);\n    } });\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_set-collection-from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-collection-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-collection-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-setmap-offrom/\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\nmodule.exports = function (COLLECTION) {\n  $export($export.S, COLLECTION, { of: function of() {\n      var length = arguments.length;\n      var A = Array(length);\n      while (length--) {\n        A[length] = arguments[length];\n      }return new this(A);\n    } });\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_set-collection-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar check = function check(O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n  function (test, buggy, set) {\n    try {\n      set = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\")(Function.call, __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f(Object.prototype, '__proto__').set, 2);\n      set(test, []);\n      buggy = !(test instanceof Array);\n    } catch (e) {\n      buggy = true;\n    }\n    return function setPrototypeOf(O, proto) {\n      check(O, proto);\n      if (buggy) O.__proto__ = proto;else set(O, proto);\n      return O;\n    };\n  }({}, false) : undefined),\n  check: check\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_set-proto.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (KEY) {\n  var C = global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function get() {\n      return this;\n    }\n  });\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_set-species.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\nmodule.exports = function (key) {\n  return store[key] || (store[key] = {});\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\n\nmodule.exports = function (method, arg) {\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call\n    arg ? method.call(null, function () {/* empty */}, 1) : method.call(null);\n  });\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_strict-method.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// helper for String#{startsWith, endsWith, includes}\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, searchString, NAME) {\n  if (isRegExp(searchString)) throw TypeError('String#' + NAME + \" doesn't accept regex!\");\n  return String(defined(that));\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_string-context.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar quot = /\"/g;\n// B.2.3.2.1 CreateHTML(string, tag, attribute, value)\nvar createHTML = function createHTML(string, tag, attribute, value) {\n  var S = String(defined(string));\n  var p1 = '<' + tag;\n  if (attribute !== '') p1 += ' ' + attribute + '=\"' + String(value).replace(quot, '&quot;') + '\"';\n  return p1 + '>' + S + '</' + tag + '>';\n};\nmodule.exports = function (NAME, exec) {\n  var O = {};\n  O[NAME] = exec(createHTML);\n  $export($export.P + $export.F * fails(function () {\n    var test = ''[NAME]('\"');\n    return test !== test.toLowerCase() || test.split('\"').length > 3;\n  }), 'String', O);\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_string-html.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/tc39/proposal-string-pad-start-end\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, maxLength, fillString, left) {\n  var S = String(defined(that));\n  var stringLength = S.length;\n  var fillStr = fillString === undefined ? ' ' : String(fillString);\n  var intMaxLength = toLength(maxLength);\n  if (intMaxLength <= stringLength || fillStr == '') return S;\n  var fillLen = intMaxLength - stringLength;\n  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));\n  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);\n  return left ? stringFiller + S : S + stringFiller;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_string-pad.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function repeat(count) {\n  var str = String(defined(this));\n  var res = '';\n  var n = toInteger(count);\n  if (n < 0 || n == Infinity) throw RangeError(\"Count can't be negative\");\n  for (; n > 0; (n >>>= 1) && (str += str)) {\n    if (n & 1) res += str;\n  }return res;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_string-repeat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar spaces = __webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\");\nvar space = '[' + spaces + ']';\nvar non = '\\u200B\\x85';\nvar ltrim = RegExp('^' + space + space + '*');\nvar rtrim = RegExp(space + space + '*$');\n\nvar exporter = function exporter(KEY, exec, ALIAS) {\n  var exp = {};\n  var FORCE = fails(function () {\n    return !!spaces[KEY]() || non[KEY]() != non;\n  });\n  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];\n  if (ALIAS) exp[ALIAS] = fn;\n  $export($export.P + $export.F * FORCE, 'String', exp);\n};\n\n// 1 -> String#trimLeft\n// 2 -> String#trimRight\n// 3 -> String#trim\nvar trim = exporter.trim = function (string, TYPE) {\n  string = String(defined(string));\n  if (TYPE & 1) string = string.replace(ltrim, '');\n  if (TYPE & 2) string = string.replace(rtrim, '');\n  return string;\n};\n\nmodule.exports = exporter;\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_string-trim.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = '\\t\\n\\x0B\\f\\r \\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003' + '\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_string-ws.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/modules/_invoke.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\");\nvar cel = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\nvar run = function run() {\n  var id = +this;\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\nvar listener = function listener(event) {\n  run.call(event.data);\n};\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) {\n      args.push(arguments[i++]);\n    }queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (__webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\")(process) == 'process') {\n    defer = function defer(id) {\n      process.nextTick(ctx(run, id, 1));\n    };\n    // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function defer(id) {\n      Dispatch.now(ctx(run, id, 1));\n    };\n    // Browsers with MessageChannel, includes WebWorkers\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1);\n    // Browsers with postMessage, skip WebWorkers\n    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function defer(id) {\n      global.postMessage(id + '', '*');\n    };\n    global.addEventListener('message', listener, false);\n    // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function defer(id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    };\n    // Rest old browsers\n  } else {\n    defer = function defer(id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_task.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://tc39.github.io/ecma262/#sec-toindex\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nmodule.exports = function (it) {\n  if (it === undefined) return 0;\n  var number = toInteger(it);\n  var length = toLength(number);\n  if (number !== length) throw RangeError('Wrong length!');\n  return length;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_to-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\")) {\n  var LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\n  var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\n  var fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\n  var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n  var $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\");\n  var $buffer = __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/core-js/modules/_typed-buffer.js\");\n  var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\n  var anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\n  var propertyDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\n  var hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\n  var redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\n  var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\n  var toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n  var toIndex = __webpack_require__(/*! ./_to-index */ \"./node_modules/core-js/modules/_to-index.js\");\n  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\n  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\n  var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\n  var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\n  var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n  var toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\n  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\n  var create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\n  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\n  var gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\n  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\n  var uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\n  var wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\n  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\");\n  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\");\n  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\n  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n  var Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\n  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\");\n  var setSpecies = __webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\");\n  var arrayFill = __webpack_require__(/*! ./_array-fill */ \"./node_modules/core-js/modules/_array-fill.js\");\n  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ \"./node_modules/core-js/modules/_array-copy-within.js\");\n  var $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\n  var $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\n  var dP = $DP.f;\n  var gOPD = $GOPD.f;\n  var RangeError = global.RangeError;\n  var TypeError = global.TypeError;\n  var Uint8Array = global.Uint8Array;\n  var ARRAY_BUFFER = 'ArrayBuffer';\n  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;\n  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';\n  var PROTOTYPE = 'prototype';\n  var ArrayProto = Array[PROTOTYPE];\n  var $ArrayBuffer = $buffer.ArrayBuffer;\n  var $DataView = $buffer.DataView;\n  var arrayForEach = createArrayMethod(0);\n  var arrayFilter = createArrayMethod(2);\n  var arraySome = createArrayMethod(3);\n  var arrayEvery = createArrayMethod(4);\n  var arrayFind = createArrayMethod(5);\n  var arrayFindIndex = createArrayMethod(6);\n  var arrayIncludes = createArrayIncludes(true);\n  var arrayIndexOf = createArrayIncludes(false);\n  var arrayValues = ArrayIterators.values;\n  var arrayKeys = ArrayIterators.keys;\n  var arrayEntries = ArrayIterators.entries;\n  var arrayLastIndexOf = ArrayProto.lastIndexOf;\n  var arrayReduce = ArrayProto.reduce;\n  var arrayReduceRight = ArrayProto.reduceRight;\n  var arrayJoin = ArrayProto.join;\n  var arraySort = ArrayProto.sort;\n  var arraySlice = ArrayProto.slice;\n  var arrayToString = ArrayProto.toString;\n  var arrayToLocaleString = ArrayProto.toLocaleString;\n  var ITERATOR = wks('iterator');\n  var TAG = wks('toStringTag');\n  var TYPED_CONSTRUCTOR = uid('typed_constructor');\n  var DEF_CONSTRUCTOR = uid('def_constructor');\n  var ALL_CONSTRUCTORS = $typed.CONSTR;\n  var TYPED_ARRAY = $typed.TYPED;\n  var VIEW = $typed.VIEW;\n  var WRONG_LENGTH = 'Wrong length!';\n\n  var $map = createArrayMethod(1, function (O, length) {\n    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);\n  });\n\n  var LITTLE_ENDIAN = fails(function () {\n    // eslint-disable-next-line no-undef\n    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;\n  });\n\n  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {\n    new Uint8Array(1).set({});\n  });\n\n  var toOffset = function toOffset(it, BYTES) {\n    var offset = toInteger(it);\n    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');\n    return offset;\n  };\n\n  var validate = function validate(it) {\n    if (isObject(it) && TYPED_ARRAY in it) return it;\n    throw TypeError(it + ' is not a typed array!');\n  };\n\n  var allocate = function allocate(C, length) {\n    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {\n      throw TypeError('It is not a typed array constructor!');\n    }return new C(length);\n  };\n\n  var speciesFromList = function speciesFromList(O, list) {\n    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);\n  };\n\n  var fromList = function fromList(C, list) {\n    var index = 0;\n    var length = list.length;\n    var result = allocate(C, length);\n    while (length > index) {\n      result[index] = list[index++];\n    }return result;\n  };\n\n  var addGetter = function addGetter(it, key, internal) {\n    dP(it, key, { get: function get() {\n        return this._d[internal];\n      } });\n  };\n\n  var $from = function from(source /* , mapfn, thisArg */) {\n    var O = toObject(source);\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var iterFn = getIterFn(O);\n    var i, length, values, result, step, iterator;\n    if (iterFn != undefined && !isArrayIter(iterFn)) {\n      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {\n        values.push(step.value);\n      }O = values;\n    }\n    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);\n    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {\n      result[i] = mapping ? mapfn(O[i], i) : O[i];\n    }\n    return result;\n  };\n\n  var $of = function of() /* ...items */{\n    var index = 0;\n    var length = arguments.length;\n    var result = allocate(this, length);\n    while (length > index) {\n      result[index] = arguments[index++];\n    }return result;\n  };\n\n  // iOS Safari 6.x fails here\n  var TO_LOCALE_BUG = !!Uint8Array && fails(function () {\n    arrayToLocaleString.call(new Uint8Array(1));\n  });\n\n  var $toLocaleString = function toLocaleString() {\n    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);\n  };\n\n  var proto = {\n    copyWithin: function copyWithin(target, start /* , end */) {\n      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);\n    },\n    every: function every(callbackfn /* , thisArg */) {\n      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    fill: function fill(value /* , start, end */) {\n      // eslint-disable-line no-unused-vars\n      return arrayFill.apply(validate(this), arguments);\n    },\n    filter: function filter(callbackfn /* , thisArg */) {\n      return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));\n    },\n    find: function find(predicate /* , thisArg */) {\n      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    findIndex: function findIndex(predicate /* , thisArg */) {\n      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    forEach: function forEach(callbackfn /* , thisArg */) {\n      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    indexOf: function indexOf(searchElement /* , fromIndex */) {\n      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    includes: function includes(searchElement /* , fromIndex */) {\n      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    join: function join(separator) {\n      // eslint-disable-line no-unused-vars\n      return arrayJoin.apply(validate(this), arguments);\n    },\n    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) {\n      // eslint-disable-line no-unused-vars\n      return arrayLastIndexOf.apply(validate(this), arguments);\n    },\n    map: function map(mapfn /* , thisArg */) {\n      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    reduce: function reduce(callbackfn /* , initialValue */) {\n      // eslint-disable-line no-unused-vars\n      return arrayReduce.apply(validate(this), arguments);\n    },\n    reduceRight: function reduceRight(callbackfn /* , initialValue */) {\n      // eslint-disable-line no-unused-vars\n      return arrayReduceRight.apply(validate(this), arguments);\n    },\n    reverse: function reverse() {\n      var that = this;\n      var length = validate(that).length;\n      var middle = Math.floor(length / 2);\n      var index = 0;\n      var value;\n      while (index < middle) {\n        value = that[index];\n        that[index++] = that[--length];\n        that[length] = value;\n      }return that;\n    },\n    some: function some(callbackfn /* , thisArg */) {\n      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    sort: function sort(comparefn) {\n      return arraySort.call(validate(this), comparefn);\n    },\n    subarray: function subarray(begin, end) {\n      var O = validate(this);\n      var length = O.length;\n      var $begin = toAbsoluteIndex(begin, length);\n      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));\n    }\n  };\n\n  var $slice = function slice(start, end) {\n    return speciesFromList(this, arraySlice.call(validate(this), start, end));\n  };\n\n  var $set = function set(arrayLike /* , offset */) {\n    validate(this);\n    var offset = toOffset(arguments[1], 1);\n    var length = this.length;\n    var src = toObject(arrayLike);\n    var len = toLength(src.length);\n    var index = 0;\n    if (len + offset > length) throw RangeError(WRONG_LENGTH);\n    while (index < len) {\n      this[offset + index] = src[index++];\n    }\n  };\n\n  var $iterators = {\n    entries: function entries() {\n      return arrayEntries.call(validate(this));\n    },\n    keys: function keys() {\n      return arrayKeys.call(validate(this));\n    },\n    values: function values() {\n      return arrayValues.call(validate(this));\n    }\n  };\n\n  var isTAIndex = function isTAIndex(target, key) {\n    return isObject(target) && target[TYPED_ARRAY] && (typeof key === 'undefined' ? 'undefined' : _typeof(key)) != 'symbol' && key in target && String(+key) == String(key);\n  };\n  var $getDesc = function getOwnPropertyDescriptor(target, key) {\n    return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);\n  };\n  var $setDesc = function defineProperty(target, key, desc) {\n    if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set')\n    // TODO: add validation descriptor w/o calling accessors\n    && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {\n      target[key] = desc.value;\n      return target;\n    }return dP(target, key, desc);\n  };\n\n  if (!ALL_CONSTRUCTORS) {\n    $GOPD.f = $getDesc;\n    $DP.f = $setDesc;\n  }\n\n  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {\n    getOwnPropertyDescriptor: $getDesc,\n    defineProperty: $setDesc\n  });\n\n  if (fails(function () {\n    arrayToString.call({});\n  })) {\n    arrayToString = arrayToLocaleString = function toString() {\n      return arrayJoin.call(this);\n    };\n  }\n\n  var $TypedArrayPrototype$ = redefineAll({}, proto);\n  redefineAll($TypedArrayPrototype$, $iterators);\n  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);\n  redefineAll($TypedArrayPrototype$, {\n    slice: $slice,\n    set: $set,\n    constructor: function constructor() {/* noop */},\n    toString: arrayToString,\n    toLocaleString: $toLocaleString\n  });\n  addGetter($TypedArrayPrototype$, 'buffer', 'b');\n  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');\n  addGetter($TypedArrayPrototype$, 'byteLength', 'l');\n  addGetter($TypedArrayPrototype$, 'length', 'e');\n  dP($TypedArrayPrototype$, TAG, {\n    get: function get() {\n      return this[TYPED_ARRAY];\n    }\n  });\n\n  // eslint-disable-next-line max-statements\n  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {\n    CLAMPED = !!CLAMPED;\n    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';\n    var GETTER = 'get' + KEY;\n    var SETTER = 'set' + KEY;\n    var TypedArray = global[NAME];\n    var Base = TypedArray || {};\n    var TAC = TypedArray && getPrototypeOf(TypedArray);\n    var FORCED = !TypedArray || !$typed.ABV;\n    var O = {};\n    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];\n    var getter = function getter(that, index) {\n      var data = that._d;\n      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);\n    };\n    var setter = function setter(that, index, value) {\n      var data = that._d;\n      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;\n      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);\n    };\n    var addElement = function addElement(that, index) {\n      dP(that, index, {\n        get: function get() {\n          return getter(this, index);\n        },\n        set: function set(value) {\n          return setter(this, index, value);\n        },\n        enumerable: true\n      });\n    };\n    if (FORCED) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME, '_d');\n        var index = 0;\n        var offset = 0;\n        var buffer, byteLength, length, klass;\n        if (!isObject(data)) {\n          length = toIndex(data);\n          byteLength = length * BYTES;\n          buffer = new $ArrayBuffer(byteLength);\n        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          buffer = data;\n          offset = toOffset($offset, BYTES);\n          var $len = data.byteLength;\n          if ($length === undefined) {\n            if ($len % BYTES) throw RangeError(WRONG_LENGTH);\n            byteLength = $len - offset;\n            if (byteLength < 0) throw RangeError(WRONG_LENGTH);\n          } else {\n            byteLength = toLength($length) * BYTES;\n            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);\n          }\n          length = byteLength / BYTES;\n        } else if (TYPED_ARRAY in data) {\n          return fromList(TypedArray, data);\n        } else {\n          return $from.call(TypedArray, data);\n        }\n        hide(that, '_d', {\n          b: buffer,\n          o: offset,\n          l: byteLength,\n          e: length,\n          v: new $DataView(buffer)\n        });\n        while (index < length) {\n          addElement(that, index++);\n        }\n      });\n      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);\n      hide(TypedArrayPrototype, 'constructor', TypedArray);\n    } else if (!fails(function () {\n      TypedArray(1);\n    }) || !fails(function () {\n      new TypedArray(-1); // eslint-disable-line no-new\n    }) || !$iterDetect(function (iter) {\n      new TypedArray(); // eslint-disable-line no-new\n      new TypedArray(null); // eslint-disable-line no-new\n      new TypedArray(1.5); // eslint-disable-line no-new\n      new TypedArray(iter); // eslint-disable-line no-new\n    }, true)) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME);\n        var klass;\n        // `ws` module bug, temporarily remove validation length for Uint8Array\n        // https://github.com/websockets/ws/pull/645\n        if (!isObject(data)) return new Base(toIndex(data));\n        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);\n        }\n        if (TYPED_ARRAY in data) return fromList(TypedArray, data);\n        return $from.call(TypedArray, data);\n      });\n      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {\n        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);\n      });\n      TypedArray[PROTOTYPE] = TypedArrayPrototype;\n      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;\n    }\n    var $nativeIterator = TypedArrayPrototype[ITERATOR];\n    var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);\n    var $iterator = $iterators.values;\n    hide(TypedArray, TYPED_CONSTRUCTOR, true);\n    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);\n    hide(TypedArrayPrototype, VIEW, true);\n    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);\n\n    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {\n      dP(TypedArrayPrototype, TAG, {\n        get: function get() {\n          return NAME;\n        }\n      });\n    }\n\n    O[NAME] = TypedArray;\n\n    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);\n\n    $export($export.S, NAME, {\n      BYTES_PER_ELEMENT: BYTES\n    });\n\n    $export($export.S + $export.F * fails(function () {\n      Base.of.call(TypedArray, 1);\n    }), NAME, {\n      from: $from,\n      of: $of\n    });\n\n    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);\n\n    $export($export.P, NAME, proto);\n\n    setSpecies(NAME);\n\n    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });\n\n    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);\n\n    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;\n\n    $export($export.P + $export.F * fails(function () {\n      new TypedArray(1).slice();\n    }), NAME, { slice: $slice });\n\n    $export($export.P + $export.F * (fails(function () {\n      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();\n    }) || !fails(function () {\n      TypedArrayPrototype.toLocaleString.call([1, 2]);\n    })), NAME, { toLocaleString: $toLocaleString });\n\n    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;\n    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);\n  };\n} else module.exports = function () {/* empty */};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_typed-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toIndex = __webpack_require__(/*! ./_to-index */ \"./node_modules/core-js/modules/_to-index.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar arrayFill = __webpack_require__(/*! ./_array-fill */ \"./node_modules/core-js/modules/_array-fill.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar ARRAY_BUFFER = 'ArrayBuffer';\nvar DATA_VIEW = 'DataView';\nvar PROTOTYPE = 'prototype';\nvar WRONG_LENGTH = 'Wrong length!';\nvar WRONG_INDEX = 'Wrong index!';\nvar $ArrayBuffer = global[ARRAY_BUFFER];\nvar $DataView = global[DATA_VIEW];\nvar Math = global.Math;\nvar RangeError = global.RangeError;\n// eslint-disable-next-line no-shadow-restricted-names\nvar Infinity = global.Infinity;\nvar BaseBuffer = $ArrayBuffer;\nvar abs = Math.abs;\nvar pow = Math.pow;\nvar floor = Math.floor;\nvar log = Math.log;\nvar LN2 = Math.LN2;\nvar BUFFER = 'buffer';\nvar BYTE_LENGTH = 'byteLength';\nvar BYTE_OFFSET = 'byteOffset';\nvar $BUFFER = DESCRIPTORS ? '_b' : BUFFER;\nvar $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;\nvar $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;\n\n// IEEE754 conversions based on https://github.com/feross/ieee754\nfunction packIEEE754(value, mLen, nBytes) {\n  var buffer = Array(nBytes);\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;\n  var i = 0;\n  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;\n  var e, m, c;\n  value = abs(value);\n  // eslint-disable-next-line no-self-compare\n  if (value != value || value === Infinity) {\n    // eslint-disable-next-line no-self-compare\n    m = value != value ? 1 : 0;\n    e = eMax;\n  } else {\n    e = floor(log(value) / LN2);\n    if (value * (c = pow(2, -e)) < 1) {\n      e--;\n      c *= 2;\n    }\n    if (e + eBias >= 1) {\n      value += rt / c;\n    } else {\n      value += rt * pow(2, 1 - eBias);\n    }\n    if (value * c >= 2) {\n      e++;\n      c /= 2;\n    }\n    if (e + eBias >= eMax) {\n      m = 0;\n      e = eMax;\n    } else if (e + eBias >= 1) {\n      m = (value * c - 1) * pow(2, mLen);\n      e = e + eBias;\n    } else {\n      m = value * pow(2, eBias - 1) * pow(2, mLen);\n      e = 0;\n    }\n  }\n  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {}\n  e = e << mLen | m;\n  eLen += mLen;\n  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {}\n  buffer[--i] |= s * 128;\n  return buffer;\n}\nfunction unpackIEEE754(buffer, mLen, nBytes) {\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var nBits = eLen - 7;\n  var i = nBytes - 1;\n  var s = buffer[i--];\n  var e = s & 127;\n  var m;\n  s >>= 7;\n  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {}\n  m = e & (1 << -nBits) - 1;\n  e >>= -nBits;\n  nBits += mLen;\n  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {}\n  if (e === 0) {\n    e = 1 - eBias;\n  } else if (e === eMax) {\n    return m ? NaN : s ? -Infinity : Infinity;\n  } else {\n    m = m + pow(2, mLen);\n    e = e - eBias;\n  }return (s ? -1 : 1) * m * pow(2, e - mLen);\n}\n\nfunction unpackI32(bytes) {\n  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];\n}\nfunction packI8(it) {\n  return [it & 0xff];\n}\nfunction packI16(it) {\n  return [it & 0xff, it >> 8 & 0xff];\n}\nfunction packI32(it) {\n  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];\n}\nfunction packF64(it) {\n  return packIEEE754(it, 52, 8);\n}\nfunction packF32(it) {\n  return packIEEE754(it, 23, 4);\n}\n\nfunction addGetter(C, key, internal) {\n  dP(C[PROTOTYPE], key, { get: function get() {\n      return this[internal];\n    } });\n}\n\nfunction get(view, bytes, index, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = store.slice(start, start + bytes);\n  return isLittleEndian ? pack : pack.reverse();\n}\nfunction set(view, bytes, index, conversion, value, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = conversion(+value);\n  for (var i = 0; i < bytes; i++) {\n    store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];\n  }\n}\n\nif (!$typed.ABV) {\n  $ArrayBuffer = function ArrayBuffer(length) {\n    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);\n    var byteLength = toIndex(length);\n    this._b = arrayFill.call(Array(byteLength), 0);\n    this[$LENGTH] = byteLength;\n  };\n\n  $DataView = function DataView(buffer, byteOffset, byteLength) {\n    anInstance(this, $DataView, DATA_VIEW);\n    anInstance(buffer, $ArrayBuffer, DATA_VIEW);\n    var bufferLength = buffer[$LENGTH];\n    var offset = toInteger(byteOffset);\n    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');\n    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);\n    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);\n    this[$BUFFER] = buffer;\n    this[$OFFSET] = offset;\n    this[$LENGTH] = byteLength;\n  };\n\n  if (DESCRIPTORS) {\n    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');\n    addGetter($DataView, BUFFER, '_b');\n    addGetter($DataView, BYTE_LENGTH, '_l');\n    addGetter($DataView, BYTE_OFFSET, '_o');\n  }\n\n  redefineAll($DataView[PROTOTYPE], {\n    getInt8: function getInt8(byteOffset) {\n      return get(this, 1, byteOffset)[0] << 24 >> 24;\n    },\n    getUint8: function getUint8(byteOffset) {\n      return get(this, 1, byteOffset)[0];\n    },\n    getInt16: function getInt16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;\n    },\n    getUint16: function getUint16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return bytes[1] << 8 | bytes[0];\n    },\n    getInt32: function getInt32(byteOffset /* , littleEndian */) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1]));\n    },\n    getUint32: function getUint32(byteOffset /* , littleEndian */) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;\n    },\n    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);\n    },\n    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);\n    },\n    setInt8: function setInt8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packF32, value, arguments[2]);\n    },\n    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {\n      set(this, 8, byteOffset, packF64, value, arguments[2]);\n    }\n  });\n} else {\n  if (!fails(function () {\n    $ArrayBuffer(1);\n  }) || !fails(function () {\n    new $ArrayBuffer(-1); // eslint-disable-line no-new\n  }) || fails(function () {\n    new $ArrayBuffer(); // eslint-disable-line no-new\n    new $ArrayBuffer(1.5); // eslint-disable-line no-new\n    new $ArrayBuffer(NaN); // eslint-disable-line no-new\n    return $ArrayBuffer.name != ARRAY_BUFFER;\n  })) {\n    $ArrayBuffer = function ArrayBuffer(length) {\n      anInstance(this, $ArrayBuffer);\n      return new BaseBuffer(toIndex(length));\n    };\n    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];\n    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {\n      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);\n    }\n    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;\n  }\n  // iOS Safari 7.x bug\n  var view = new $DataView(new $ArrayBuffer(2));\n  var $setInt8 = $DataView[PROTOTYPE].setInt8;\n  view.setInt8(0, 2147483648);\n  view.setInt8(1, 2147483649);\n  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {\n    setInt8: function setInt8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    }\n  }, true);\n}\nsetToStringTag($ArrayBuffer, ARRAY_BUFFER);\nsetToStringTag($DataView, DATA_VIEW);\nhide($DataView[PROTOTYPE], $typed.VIEW, true);\nexports[ARRAY_BUFFER] = $ArrayBuffer;\nexports[DATA_VIEW] = $DataView;\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_typed-buffer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar TYPED = uid('typed_array');\nvar VIEW = uid('view');\nvar ABV = !!(global.ArrayBuffer && global.DataView);\nvar CONSTR = ABV;\nvar i = 0;\nvar l = 9;\nvar Typed;\n\nvar TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');\n\nwhile (i < l) {\n  if (Typed = global[TypedArrayConstructors[i++]]) {\n    hide(Typed.prototype, TYPED, true);\n    hide(Typed.prototype, VIEW, true);\n  } else CONSTR = false;\n}\n\nmodule.exports = {\n  ABV: ABV,\n  CONSTR: CONSTR,\n  TYPED: TYPED,\n  VIEW: VIEW\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_typed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it, TYPE) {\n  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');\n  return it;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_validate-collection.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_wks-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.f = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_wks-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar _Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof _Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/_wks.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/core.regexp.escape.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/core.regexp.escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/benjamingr/RexExp.escape\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $re = __webpack_require__(/*! ./_replacer */ \"./node_modules/core-js/modules/_replacer.js\")(/[\\\\^$*+?.()|[\\]{}]/g, '\\\\$&');\n\n$export($export.S, 'RegExp', { escape: function escape(it) {\n    return $re(it);\n  } });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/core.regexp.escape.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ \"./node_modules/core-js/modules/_array-copy-within.js\") });\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('copyWithin');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.array.copy-within.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $every = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(4);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].every, true), 'Array', {\n  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])\n  every: function every(callbackfn /* , thisArg */) {\n    return $every(this, callbackfn, arguments[1]);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.array.every.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ \"./node_modules/core-js/modules/_array-fill.js\") });\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('fill');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.array.fill.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $filter = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(2);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].filter, true), 'Array', {\n  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])\n  filter: function filter(callbackfn /* , thisArg */) {\n    return $filter(this, callbackfn, arguments[1]);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.array.filter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $find = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(6);\nvar KEY = 'findIndex';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () {\n  forced = false;\n});\n$export($export.P + $export.F * forced, 'Array', {\n  findIndex: function findIndex(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.array.find-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $find = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(5);\nvar KEY = 'find';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () {\n  forced = false;\n});\n$export($export.P + $export.F * forced, 'Array', {\n  find: function find(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.array.find.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $forEach = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(0);\nvar STRICT = __webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].forEach, true);\n\n$export($export.P + $export.F * !STRICT, 'Array', {\n  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])\n  forEach: function forEach(callbackfn /* , thisArg */) {\n    return $forEach(this, callbackfn, arguments[1]);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.array.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\")(function (iter) {\n  Array.from(iter);\n}), 'Array', {\n  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)\n  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n    var O = toObject(arrayLike);\n    var C = typeof this == 'function' ? this : Array;\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var index = 0;\n    var iterFn = getIterFn(O);\n    var length, result, step, iterator;\n    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);\n    // if object isn't iterable or it's array with default iterator - use simple case\n    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {\n      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {\n        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);\n      }\n    } else {\n      length = toLength(O.length);\n      for (result = new C(length); length > index; index++) {\n        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n      }\n    }\n    result.length = index;\n    return result;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.array.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $indexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(false);\nvar $native = [].indexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])\n  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {\n    return NEGATIVE_ZERO\n    // convert -0 to +0\n    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.array.index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\") });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.array.is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0; // next index\n  this._k = kind; // kind\n  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.13 Array.prototype.join(separator)\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar arrayJoin = [].join;\n\n// fallback for not array-like strings\n$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\") != Object || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")(arrayJoin)), 'Array', {\n  join: function join(separator) {\n    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.array.join.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar $native = [].lastIndexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])\n  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {\n    // convert -0 to +0\n    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;\n    var O = toIObject(this);\n    var length = toLength(O.length);\n    var index = length - 1;\n    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));\n    if (index < 0) index = length + index;\n    for (; index >= 0; index--) {\n      if (index in O) if (O[index] === searchElement) return index || 0;\n    }return -1;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.array.last-index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $map = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(1);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].map, true), 'Array', {\n  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])\n  map: function map(callbackfn /* , thisArg */) {\n    return $map(this, callbackfn, arguments[1]);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.array.map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\n\n// WebKit Array.of isn't generic\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  function F() {/* empty */}\n  return !(Array.of.call(F) instanceof F);\n}), 'Array', {\n  // 22.1.2.3 Array.of( ...items)\n  of: function of() /* ...args */{\n    var index = 0;\n    var aLen = arguments.length;\n    var result = new (typeof this == 'function' ? this : Array)(aLen);\n    while (aLen > index) {\n      createProperty(result, index, arguments[index++]);\n    }result.length = aLen;\n    return result;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.array.of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"./node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].reduceRight, true), 'Array', {\n  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])\n  reduceRight: function reduceRight(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], true);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.array.reduce-right.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"./node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].reduce, true), 'Array', {\n  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])\n  reduce: function reduce(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], false);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.array.reduce.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar arraySlice = [].slice;\n\n// fallback for not array-like ES3 strings and DOM objects\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  if (html) arraySlice.call(html);\n}), 'Array', {\n  slice: function slice(begin, end) {\n    var len = toLength(this.length);\n    var klass = cof(this);\n    end = end === undefined ? len : end;\n    if (klass == 'Array') return arraySlice.call(this, begin, end);\n    var start = toAbsoluteIndex(begin, len);\n    var upTo = toAbsoluteIndex(end, len);\n    var size = toLength(upTo - start);\n    var cloned = Array(size);\n    var i = 0;\n    for (; i < size; i++) {\n      cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];\n    }return cloned;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.array.slice.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $some = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(3);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].some, true), 'Array', {\n  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])\n  some: function some(callbackfn /* , thisArg */) {\n    return $some(this, callbackfn, arguments[1]);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.array.some.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar $sort = [].sort;\nvar test = [1, 2, 3];\n\n$export($export.P + $export.F * (fails(function () {\n  // IE8-\n  test.sort(undefined);\n}) || !fails(function () {\n  // V8 bug\n  test.sort(null);\n  // Old WebKit\n}) || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($sort)), 'Array', {\n  // 22.1.3.25 Array.prototype.sort(comparefn)\n  sort: function sort(comparefn) {\n    return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.array.sort.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")('Array');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.array.species.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.3.3.1 / 15.9.4.4 Date.now()\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Date', { now: function now() {\n    return new Date().getTime();\n  } });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.date.now.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toISOString = __webpack_require__(/*! ./_date-to-iso-string */ \"./node_modules/core-js/modules/_date-to-iso-string.js\");\n\n// PhantomJS / old WebKit has a broken implementations\n$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {\n  toISOString: toISOString\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.date.to-iso-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function toISOString() {\n      return 1;\n    } }) !== 1;\n}), 'Date', {\n  // eslint-disable-next-line no-unused-vars\n  toJSON: function toJSON(key) {\n    var O = toObject(this);\n    var pv = toPrimitive(O);\n    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.date.to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toPrimitive');\nvar proto = Date.prototype;\n\nif (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ \"./node_modules/core-js/modules/_date-to-primitive.js\"));\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.date.to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar DateProto = Date.prototype;\nvar INVALID_DATE = 'Invalid Date';\nvar TO_STRING = 'toString';\nvar $toString = DateProto[TO_STRING];\nvar getTime = DateProto.getTime;\nif (new Date(NaN) + '' != INVALID_DATE) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(DateProto, TO_STRING, function toString() {\n    var value = getTime.call(this);\n    // eslint-disable-next-line no-self-compare\n    return value === value ? $toString.call(this) : INVALID_DATE;\n  });\n}\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.date.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ \"./node_modules/core-js/modules/_bind.js\") });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.function.bind.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar HAS_INSTANCE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('hasInstance');\nvar FunctionProto = Function.prototype;\n// 19.2.3.6 Function.prototype[@@hasInstance](V)\nif (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f(FunctionProto, HAS_INSTANCE, { value: function value(O) {\n    if (typeof this != 'function' || !isObject(O)) return false;\n    if (!isObject(this.prototype)) return O instanceof this;\n    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:\n    while (O = getPrototypeOf(O)) {\n      if (this.prototype === O) return true;\n    }return false;\n  } });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.function.has-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar FProto = Function.prototype;\nvar nameRE = /^\\s*function ([^ (]*)/;\nvar NAME = 'name';\n\n// 19.2.4.2 name\nNAME in FProto || __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && dP(FProto, NAME, {\n  configurable: true,\n  get: function get() {\n    try {\n      return ('' + this).match(nameRE)[1];\n    } catch (e) {\n      return '';\n    }\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.function.name.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./node_modules/core-js/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar MAP = 'Map';\n\n// 23.1 Map Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(MAP, function (get) {\n  return function Map() {\n    return get(this, arguments.length > 0 ? arguments[0] : undefined);\n  };\n}, {\n  // 23.1.3.6 Map.prototype.get(key)\n  get: function get(key) {\n    var entry = strong.getEntry(validate(this, MAP), key);\n    return entry && entry.v;\n  },\n  // 23.1.3.9 Map.prototype.set(key, value)\n  set: function set(key, value) {\n    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);\n  }\n}, strong, true);\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.3 Math.acosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar log1p = __webpack_require__(/*! ./_math-log1p */ \"./node_modules/core-js/modules/_math-log1p.js\");\nvar sqrt = Math.sqrt;\nvar $acosh = Math.acosh;\n\n$export($export.S + $export.F * !($acosh\n// V8 bug: https://code.google.com/p/v8/issues/detail?id=3509\n&& Math.floor($acosh(Number.MAX_VALUE)) == 710\n// Tor Browser bug: Math.acosh(Infinity) -> NaN\n&& $acosh(Infinity) == Infinity), 'Math', {\n  acosh: function acosh(x) {\n    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.math.acosh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.5 Math.asinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $asinh = Math.asinh;\n\nfunction asinh(x) {\n  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));\n}\n\n// Tor Browser bug: Math.asinh(0) -> -0\n$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.math.asinh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.7 Math.atanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $atanh = Math.atanh;\n\n// Tor Browser bug: Math.atanh(-0) -> 0\n$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {\n  atanh: function atanh(x) {\n    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.math.atanh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.9 Math.cbrt(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar sign = __webpack_require__(/*! ./_math-sign */ \"./node_modules/core-js/modules/_math-sign.js\");\n\n$export($export.S, 'Math', {\n  cbrt: function cbrt(x) {\n    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.math.cbrt.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.11 Math.clz32(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  clz32: function clz32(x) {\n    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.math.clz32.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.12 Math.cosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  cosh: function cosh(x) {\n    return (exp(x = +x) + exp(-x)) / 2;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.math.cosh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.14 Math.expm1(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/core-js/modules/_math-expm1.js\");\n\n$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.math.expm1.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.16 Math.fround(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ \"./node_modules/core-js/modules/_math-fround.js\") });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.math.fround.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar abs = Math.abs;\n\n$export($export.S, 'Math', {\n  hypot: function hypot(value1, value2) {\n    // eslint-disable-line no-unused-vars\n    var sum = 0;\n    var i = 0;\n    var aLen = arguments.length;\n    var larg = 0;\n    var arg, div;\n    while (i < aLen) {\n      arg = abs(arguments[i++]);\n      if (larg < arg) {\n        div = larg / arg;\n        sum = sum * div * div + 1;\n        larg = arg;\n      } else if (arg > 0) {\n        div = arg / larg;\n        sum += div * div;\n      } else sum += arg;\n    }\n    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.math.hypot.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.18 Math.imul(x, y)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $imul = Math.imul;\n\n// some WebKit versions fails with big numbers, some has wrong arity\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;\n}), 'Math', {\n  imul: function imul(x, y) {\n    var UINT16 = 0xffff;\n    var xn = +x;\n    var yn = +y;\n    var xl = UINT16 & xn;\n    var yl = UINT16 & yn;\n    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.math.imul.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.21 Math.log10(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log10: function log10(x) {\n    return Math.log(x) * Math.LOG10E;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.math.log10.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.20 Math.log1p(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ \"./node_modules/core-js/modules/_math-log1p.js\") });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.math.log1p.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.22 Math.log2(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log2: function log2(x) {\n    return Math.log(x) / Math.LN2;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.math.log2.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.28 Math.sign(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ \"./node_modules/core-js/modules/_math-sign.js\") });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.math.sign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.30 Math.sinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/core-js/modules/_math-expm1.js\");\nvar exp = Math.exp;\n\n// V8 near Chromium 38 has a problem with very small numbers\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return !Math.sinh(-2e-17) != -2e-17;\n}), 'Math', {\n  sinh: function sinh(x) {\n    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.math.sinh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.33 Math.tanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/core-js/modules/_math-expm1.js\");\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  tanh: function tanh(x) {\n    var a = expm1(x = +x);\n    var b = expm1(-x);\n    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.math.tanh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.34 Math.trunc(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  trunc: function trunc(it) {\n    return (it > 0 ? Math.floor : Math.ceil)(it);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.math.trunc.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim;\nvar NUMBER = 'Number';\nvar $Number = global[NUMBER];\nvar Base = $Number;\nvar proto = $Number.prototype;\n// Opera ~12 has broken Object#toString\nvar BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\")(proto)) == NUMBER;\nvar TRIM = 'trim' in String.prototype;\n\n// 7.1.3 ToNumber(argument)\nvar toNumber = function toNumber(argument) {\n  var it = toPrimitive(argument, false);\n  if (typeof it == 'string' && it.length > 2) {\n    it = TRIM ? it.trim() : $trim(it, 3);\n    var first = it.charCodeAt(0);\n    var third, radix, maxCode;\n    if (first === 43 || first === 45) {\n      third = it.charCodeAt(2);\n      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix\n    } else if (first === 48) {\n      switch (it.charCodeAt(1)) {\n        case 66:case 98:\n          radix = 2;maxCode = 49;break; // fast equal /^0b[01]+$/i\n        case 79:case 111:\n          radix = 8;maxCode = 55;break; // fast equal /^0o[0-7]+$/i\n        default:\n          return +it;\n      }\n      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {\n        code = digits.charCodeAt(i);\n        // parseInt parses a string to a first unavailable symbol\n        // but ToNumber should return NaN if a string contains unavailable symbols\n        if (code < 48 || code > maxCode) return NaN;\n      }return parseInt(digits, radix);\n    }\n  }return +it;\n};\n\nif (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {\n  $Number = function Number(value) {\n    var it = arguments.length < 1 ? 0 : value;\n    var that = this;\n    return that instanceof $Number\n    // check on 1..constructor(foo) case\n    && (BROKEN_COF ? fails(function () {\n      proto.valueOf.call(that);\n    }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);\n  };\n  for (var keys = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? gOPN(Base) : (\n  // ES3:\n  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +\n  // ES6 (in case, if modules with ES6 Number statics required before):\n  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {\n    if (has(Base, key = keys[j]) && !has($Number, key)) {\n      dP($Number, key, gOPD(Base, key));\n    }\n  }\n  $Number.prototype = proto;\n  proto.constructor = $Number;\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(global, NUMBER, $Number);\n}\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.number.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.1.2.1 Number.EPSILON\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.number.epsilon.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.1.2.2 Number.isFinite(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar _isFinite = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").isFinite;\n\n$export($export.S, 'Number', {\n  isFinite: function isFinite(it) {\n    return typeof it == 'number' && _isFinite(it);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.number.is-finite.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.1.2.3 Number.isInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ \"./node_modules/core-js/modules/_is-integer.js\") });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.number.is-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.1.2.4 Number.isNaN(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', {\n  isNaN: function isNaN(number) {\n    // eslint-disable-next-line no-self-compare\n    return number != number;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.number.is-nan.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.1.2.5 Number.isSafeInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isInteger = __webpack_require__(/*! ./_is-integer */ \"./node_modules/core-js/modules/_is-integer.js\");\nvar abs = Math.abs;\n\n$export($export.S, 'Number', {\n  isSafeInteger: function isSafeInteger(number) {\n    return isInteger(number) && abs(number) <= 0x1fffffffffffff;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.number.is-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.1.2.6 Number.MAX_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.number.max-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.1.2.10 Number.MIN_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.number.min-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"./node_modules/core-js/modules/_parse-float.js\");\n// 20.1.2.12 Number.parseFloat(string)\n$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.number.parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"./node_modules/core-js/modules/_parse-int.js\");\n// 20.1.2.13 Number.parseInt(string, radix)\n$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.number.parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"./node_modules/core-js/modules/_a-number-value.js\");\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\");\nvar $toFixed = 1.0.toFixed;\nvar floor = Math.floor;\nvar data = [0, 0, 0, 0, 0, 0];\nvar ERROR = 'Number.toFixed: incorrect invocation!';\nvar ZERO = '0';\n\nvar multiply = function multiply(n, c) {\n  var i = -1;\n  var c2 = c;\n  while (++i < 6) {\n    c2 += n * data[i];\n    data[i] = c2 % 1e7;\n    c2 = floor(c2 / 1e7);\n  }\n};\nvar divide = function divide(n) {\n  var i = 6;\n  var c = 0;\n  while (--i >= 0) {\n    c += data[i];\n    data[i] = floor(c / n);\n    c = c % n * 1e7;\n  }\n};\nvar numToString = function numToString() {\n  var i = 6;\n  var s = '';\n  while (--i >= 0) {\n    if (s !== '' || i === 0 || data[i] !== 0) {\n      var t = String(data[i]);\n      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;\n    }\n  }return s;\n};\nvar pow = function pow(x, n, acc) {\n  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);\n};\nvar log = function log(x) {\n  var n = 0;\n  var x2 = x;\n  while (x2 >= 4096) {\n    n += 12;\n    x2 /= 4096;\n  }\n  while (x2 >= 2) {\n    n += 1;\n    x2 /= 2;\n  }return n;\n};\n\n$export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  // V8 ~ Android 4.3-\n  $toFixed.call({});\n})), 'Number', {\n  toFixed: function toFixed(fractionDigits) {\n    var x = aNumberValue(this, ERROR);\n    var f = toInteger(fractionDigits);\n    var s = '';\n    var m = ZERO;\n    var e, z, j, k;\n    if (f < 0 || f > 20) throw RangeError(ERROR);\n    // eslint-disable-next-line no-self-compare\n    if (x != x) return 'NaN';\n    if (x <= -1e21 || x >= 1e21) return String(x);\n    if (x < 0) {\n      s = '-';\n      x = -x;\n    }\n    if (x > 1e-21) {\n      e = log(x * pow(2, 69, 1)) - 69;\n      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);\n      z *= 0x10000000000000;\n      e = 52 - e;\n      if (e > 0) {\n        multiply(0, z);\n        j = f;\n        while (j >= 7) {\n          multiply(1e7, 0);\n          j -= 7;\n        }\n        multiply(pow(10, j, 1), 0);\n        j = e - 1;\n        while (j >= 23) {\n          divide(1 << 23);\n          j -= 23;\n        }\n        divide(1 << j);\n        multiply(1, 1);\n        divide(2);\n        m = numToString();\n      } else {\n        multiply(0, z);\n        multiply(1 << -e, 0);\n        m = numToString() + repeat.call(ZERO, f);\n      }\n    }\n    if (f > 0) {\n      k = m.length;\n      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));\n    } else {\n      m = s + m;\n    }return m;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.number.to-fixed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"./node_modules/core-js/modules/_a-number-value.js\");\nvar $toPrecision = 1.0.toPrecision;\n\n$export($export.P + $export.F * ($fails(function () {\n  // IE7-\n  return $toPrecision.call(1, undefined) !== '1';\n}) || !$fails(function () {\n  // V8 ~ Android 4.3-\n  $toPrecision.call({});\n})), 'Number', {\n  toPrecision: function toPrecision(precision) {\n    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');\n    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.number.to-precision.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ \"./node_modules/core-js/modules/_object-assign.js\") });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.object.assign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\") });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.object.create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/modules/_object-dps.js\") });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.object.define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.5 Object.freeze(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('freeze', function ($freeze) {\n  return function freeze(it) {\n    return $freeze && isObject(it) ? $freeze(meta(it)) : it;\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.object.freeze.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyDescriptor', function () {\n  return function getOwnPropertyDescriptor(it, key) {\n    return $getOwnPropertyDescriptor(toIObject(it), key);\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.7 Object.getOwnPropertyNames(O)\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyNames', function () {\n  return __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/modules/_object-gopn-ext.js\").f;\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.object.get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.9 Object.getPrototypeOf(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('getPrototypeOf', function () {\n  return function getPrototypeOf(it) {\n    return $getPrototypeOf(toObject(it));\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.object.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.11 Object.isExtensible(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('isExtensible', function ($isExtensible) {\n  return function isExtensible(it) {\n    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.object.is-extensible.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.12 Object.isFrozen(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('isFrozen', function ($isFrozen) {\n  return function isFrozen(it) {\n    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.object.is-frozen.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.13 Object.isSealed(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('isSealed', function ($isSealed) {\n  return function isSealed(it) {\n    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.object.is-sealed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.3.10 Object.is(value1, value2)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ \"./node_modules/core-js/modules/_same-value.js\") });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.object.is.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.14 Object.keys(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('keys', function () {\n  return function keys(it) {\n    return $keys(toObject(it));\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.object.keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.15 Object.preventExtensions(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('preventExtensions', function ($preventExtensions) {\n  return function preventExtensions(it) {\n    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.object.prevent-extensions.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.17 Object.seal(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('seal', function ($seal) {\n  return function seal(it) {\n    return $seal && isObject(it) ? $seal(meta(it)) : it;\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.object.seal.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\").set });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.object.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.3.6 Object.prototype.toString()\n\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar test = {};\ntest[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag')] = 'z';\nif (test + '' != '[object z]') {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(Object.prototype, 'toString', function toString() {\n    return '[object ' + classof(this) + ']';\n  }, true);\n}\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"./node_modules/core-js/modules/_parse-float.js\");\n// 18.2.4 parseFloat(string)\n$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"./node_modules/core-js/modules/_parse-int.js\");\n// 18.2.5 parseInt(string, radix)\n$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar task = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\").set;\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/core-js/modules/_microtask.js\")();\nvar newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/modules/_perform.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/modules/_promise-resolve.js\");\nvar PROMISE = 'Promise';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == 'process';\nvar empty = function empty() {/* empty */};\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\n\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species')] = function (exec) {\n      exec(empty, empty);\n    };\n    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;\n  } catch (e) {/* empty */}\n}();\n\n// helpers\nvar isThenable = function isThenable(it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\nvar notify = function notify(promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n    var run = function run(reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n          if (handler === true) result = value;else {\n            if (domain) domain.enter();\n            result = handler(value);\n            if (domain) domain.exit();\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        reject(e);\n      }\n    };\n    while (chain.length > i) {\n      run(chain[i++]);\n    } // variable length - can't use forEach\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\nvar onUnhandled = function onUnhandled(promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit('unhandledRejection', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({ promise: promise, reason: value });\n        } else if ((console = global.console) && console.error) {\n          console.error('Unhandled promise rejection', value);\n        }\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    }promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\nvar isUnhandled = function isUnhandled(promise) {\n  if (promise._h == 1) return false;\n  var chain = promise._a || promise._c;\n  var i = 0;\n  var reaction;\n  while (chain.length > i) {\n    reaction = chain[i++];\n    if (reaction.fail || !isUnhandled(reaction.promise)) return false;\n  }return true;\n};\nvar onHandleUnhandled = function onHandleUnhandled(promise) {\n  task.call(global, function () {\n    var handler;\n    if (isNode) {\n      process.emit('rejectionHandled', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({ promise: promise, reason: promise._v });\n    }\n  });\n};\nvar $reject = function $reject(value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\nvar $resolve = function $resolve(value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = { _w: promise, _d: false }; // wrap\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({ _w: promise, _d: false }, e); // wrap\n  }\n};\n\n// constructor polyfill\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, '_h');\n    aFunction(executor);\n    Internal.call(this);\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    this._c = []; // <- awaiting reactions\n    this._a = undefined; // <- checked in isUnhandled reactions\n    this._s = 0; // <- state\n    this._d = false; // <- done\n    this._v = undefined; // <- value\n    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n    this._n = false; // <- notify\n  };\n  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\")($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n      this._c.push(reaction);\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    'catch': function _catch(onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function OwnPromiseCapability() {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {\n    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\n__webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\")($Promise, PROMISE);\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")(PROMISE);\nWrapper = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\")[PROMISE];\n\n// statics\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\")(function (iter) {\n  $Promise.all(iter)['catch'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.promise.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar rApply = (__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Reflect || {}).apply;\nvar fApply = Function.apply;\n// MS Edge argumentsList argument is optional\n$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  rApply(function () {/* empty */});\n}), 'Reflect', {\n  apply: function apply(target, thisArgument, argumentsList) {\n    var T = aFunction(target);\n    var L = anObject(argumentsList);\n    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.reflect.apply.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar bind = __webpack_require__(/*! ./_bind */ \"./node_modules/core-js/modules/_bind.js\");\nvar rConstruct = (__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Reflect || {}).construct;\n\n// MS Edge supports only 2 arguments and argumentsList argument is optional\n// FF Nightly sets third argument as `new.target`, but does not create `this` from it\nvar NEW_TARGET_BUG = fails(function () {\n  function F() {/* empty */}\n  return !(rConstruct(function () {/* empty */}, [], F) instanceof F);\n});\nvar ARGS_BUG = !fails(function () {\n  rConstruct(function () {/* empty */});\n});\n\n$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {\n  construct: function construct(Target, args /* , newTarget */) {\n    aFunction(Target);\n    anObject(args);\n    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);\n    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);\n    if (Target == newTarget) {\n      // w/o altered newTarget, optimization for 0-4 arguments\n      switch (args.length) {\n        case 0:\n          return new Target();\n        case 1:\n          return new Target(args[0]);\n        case 2:\n          return new Target(args[0], args[1]);\n        case 3:\n          return new Target(args[0], args[1], args[2]);\n        case 4:\n          return new Target(args[0], args[1], args[2], args[3]);\n      }\n      // w/o altered newTarget, lot of arguments case\n      var $args = [null];\n      $args.push.apply($args, args);\n      return new (bind.apply(Target, $args))();\n    }\n    // with altered newTarget, not support built-in constructors\n    var proto = newTarget.prototype;\n    var instance = create(isObject(proto) ? proto : Object.prototype);\n    var result = Function.apply.call(Target, instance, args);\n    return isObject(result) ? result : instance;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.reflect.construct.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\n\n// MS Edge has broken Reflect.defineProperty - throwing instead of returning false\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  // eslint-disable-next-line no-undef\n  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });\n}), 'Reflect', {\n  defineProperty: function defineProperty(target, propertyKey, attributes) {\n    anObject(target);\n    propertyKey = toPrimitive(propertyKey, true);\n    anObject(attributes);\n    try {\n      dP.f(target, propertyKey, attributes);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.reflect.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.4 Reflect.deleteProperty(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  deleteProperty: function deleteProperty(target, propertyKey) {\n    var desc = gOPD(anObject(target), propertyKey);\n    return desc && !desc.configurable ? false : delete target[propertyKey];\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.reflect.delete-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 26.1.5 Reflect.enumerate(target)\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar Enumerate = function Enumerate(iterated) {\n  this._t = anObject(iterated); // target\n  this._i = 0; // next index\n  var keys = this._k = []; // keys\n  var key;\n  for (key in iterated) {\n    keys.push(key);\n  }\n};\n__webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/modules/_iter-create.js\")(Enumerate, 'Object', function () {\n  var that = this;\n  var keys = that._k;\n  var key;\n  do {\n    if (that._i >= keys.length) return { value: undefined, done: true };\n  } while (!((key = keys[that._i++]) in that._t));\n  return { value: key, done: false };\n});\n\n$export($export.S, 'Reflect', {\n  enumerate: function enumerate(target) {\n    return new Enumerate(target);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.reflect.enumerate.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {\n    return gOPD.f(anObject(target), propertyKey);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.8 Reflect.getPrototypeOf(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar getProto = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  getPrototypeOf: function getPrototypeOf(target) {\n    return getProto(anObject(target));\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.reflect.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.6 Reflect.get(target, propertyKey [, receiver])\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\nfunction get(target, propertyKey /* , receiver */) {\n  var receiver = arguments.length < 3 ? target : arguments[2];\n  var desc, proto;\n  if (anObject(target) === receiver) return target[propertyKey];\n  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;\n  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);\n}\n\n$export($export.S, 'Reflect', { get: get });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.reflect.get.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.9 Reflect.has(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Reflect', {\n  has: function has(target, propertyKey) {\n    return propertyKey in target;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.reflect.has.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.10 Reflect.isExtensible(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $isExtensible = Object.isExtensible;\n\n$export($export.S, 'Reflect', {\n  isExtensible: function isExtensible(target) {\n    anObject(target);\n    return $isExtensible ? $isExtensible(target) : true;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.reflect.is-extensible.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.11 Reflect.ownKeys(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ \"./node_modules/core-js/modules/_own-keys.js\") });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.reflect.own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.12 Reflect.preventExtensions(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $preventExtensions = Object.preventExtensions;\n\n$export($export.S, 'Reflect', {\n  preventExtensions: function preventExtensions(target) {\n    anObject(target);\n    try {\n      if ($preventExtensions) $preventExtensions(target);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.reflect.prevent-extensions.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.14 Reflect.setPrototypeOf(target, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar setProto = __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\");\n\nif (setProto) $export($export.S, 'Reflect', {\n  setPrototypeOf: function setPrototypeOf(target, proto) {\n    setProto.check(target, proto);\n    try {\n      setProto.set(target, proto);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.reflect.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\nfunction set(target, propertyKey, V /* , receiver */) {\n  var receiver = arguments.length < 4 ? target : arguments[3];\n  var ownDesc = gOPD.f(anObject(target), propertyKey);\n  var existingDescriptor, proto;\n  if (!ownDesc) {\n    if (isObject(proto = getPrototypeOf(target))) {\n      return set(proto, propertyKey, V, receiver);\n    }\n    ownDesc = createDesc(0);\n  }\n  if (has(ownDesc, 'value')) {\n    if (ownDesc.writable === false || !isObject(receiver)) return false;\n    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);\n    existingDescriptor.value = V;\n    dP.f(receiver, propertyKey, existingDescriptor);\n    return true;\n  }\n  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);\n}\n\n$export($export.S, 'Reflect', { set: set });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.reflect.set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\nvar $RegExp = global.RegExp;\nvar Base = $RegExp;\nvar proto = $RegExp.prototype;\nvar re1 = /a/g;\nvar re2 = /a/g;\n// \"new\" creates a new object, old webkit buggy here\nvar CORRECT_NEW = new $RegExp(re1) !== re1;\n\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  re2[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match')] = false;\n  // RegExp constructor can alter flags and IsRegExp works correct with @@match\n  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';\n}))) {\n  $RegExp = function RegExp(p, f) {\n    var tiRE = this instanceof $RegExp;\n    var piRE = isRegExp(p);\n    var fiU = f === undefined;\n    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);\n  };\n  var proxy = function proxy(key) {\n    key in $RegExp || dP($RegExp, key, {\n      configurable: true,\n      get: function get() {\n        return Base[key];\n      },\n      set: function set(it) {\n        Base[key] = it;\n      }\n    });\n  };\n  for (var keys = gOPN(Base), i = 0; keys.length > i;) {\n    proxy(keys[i++]);\n  }proto.constructor = $RegExp;\n  $RegExp.prototype = proto;\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(global, 'RegExp', $RegExp);\n}\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")('RegExp');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.regexp.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 21.2.5.3 get RegExp.prototype.flags()\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f(RegExp.prototype, 'flags', {\n  configurable: true,\n  get: __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\")\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.regexp.flags.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// @@match logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('match', 1, function (defined, MATCH, $match) {\n  // 21.1.3.11 String.prototype.match(regexp)\n  return [function match(regexp) {\n    'use strict';\n\n    var O = defined(this);\n    var fn = regexp == undefined ? undefined : regexp[MATCH];\n    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));\n  }, $match];\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.regexp.match.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// @@replace logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('replace', 2, function (defined, REPLACE, $replace) {\n  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)\n  return [function replace(searchValue, replaceValue) {\n    'use strict';\n\n    var O = defined(this);\n    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];\n    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);\n  }, $replace];\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.regexp.replace.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// @@search logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('search', 1, function (defined, SEARCH, $search) {\n  // 21.1.3.15 String.prototype.search(regexp)\n  return [function search(regexp) {\n    'use strict';\n\n    var O = defined(this);\n    var fn = regexp == undefined ? undefined : regexp[SEARCH];\n    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));\n  }, $search];\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.regexp.search.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// @@split logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('split', 2, function (defined, SPLIT, $split) {\n  'use strict';\n\n  var isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\n  var _split = $split;\n  var $push = [].push;\n  var $SPLIT = 'split';\n  var LENGTH = 'length';\n  var LAST_INDEX = 'lastIndex';\n  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {\n    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group\n    // based on es5-shim implementation, need to rework it\n    $split = function $split(separator, limit) {\n      var string = String(this);\n      if (separator === undefined && limit === 0) return [];\n      // If `separator` is not a regex, use native split\n      if (!isRegExp(separator)) return _split.call(string, separator, limit);\n      var output = [];\n      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');\n      var lastLastIndex = 0;\n      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;\n      // Make `global` and avoid `lastIndex` issues by working with a copy\n      var separatorCopy = new RegExp(separator.source, flags + 'g');\n      var separator2, match, lastIndex, lastLength, i;\n      // Doesn't need flags gy, but they don't hurt\n      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\\\s)', flags);\n      while (match = separatorCopy.exec(string)) {\n        // `separatorCopy.lastIndex` is not reliable cross-browser\n        lastIndex = match.index + match[0][LENGTH];\n        if (lastIndex > lastLastIndex) {\n          output.push(string.slice(lastLastIndex, match.index));\n          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG\n          // eslint-disable-next-line no-loop-func\n          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {\n            for (i = 1; i < arguments[LENGTH] - 2; i++) {\n              if (arguments[i] === undefined) match[i] = undefined;\n            }\n          });\n          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));\n          lastLength = match[0][LENGTH];\n          lastLastIndex = lastIndex;\n          if (output[LENGTH] >= splitLimit) break;\n        }\n        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop\n      }\n      if (lastLastIndex === string[LENGTH]) {\n        if (lastLength || !separatorCopy.test('')) output.push('');\n      } else output.push(string.slice(lastLastIndex));\n      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;\n    };\n    // Chakra, V8\n  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {\n    $split = function $split(separator, limit) {\n      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);\n    };\n  }\n  // 21.1.3.17 String.prototype.split(separator, limit)\n  return [function split(separator, limit) {\n    var O = defined(this);\n    var fn = separator == undefined ? undefined : separator[SPLIT];\n    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);\n  }, $split];\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.regexp.split.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./es6.regexp.flags */ \"./node_modules/core-js/modules/es6.regexp.flags.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar TO_STRING = 'toString';\nvar $toString = /./[TO_STRING];\n\nvar define = function define(fn) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(RegExp.prototype, TO_STRING, fn, true);\n};\n\n// 21.2.5.14 RegExp.prototype.toString()\nif (__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return $toString.call({ source: 'a', flags: 'b' }) != '/a/b';\n})) {\n  define(function toString() {\n    var R = anObject(this);\n    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);\n  });\n  // FF44- RegExp#toString has a wrong name\n} else if ($toString.name != TO_STRING) {\n  define(function toString() {\n    return $toString.call(this);\n  });\n}\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.regexp.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./node_modules/core-js/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar SET = 'Set';\n\n// 23.2 Set Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(SET, function (get) {\n  return function Set() {\n    return get(this, arguments.length > 0 ? arguments[0] : undefined);\n  };\n}, {\n  // 23.2.3.1 Set.prototype.add(value)\n  add: function add(value) {\n    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);\n  }\n}, strong);\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.2 String.prototype.anchor(name)\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('anchor', function (createHTML) {\n  return function anchor(name) {\n    return createHTML(this, 'a', 'name', name);\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.anchor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.3 String.prototype.big()\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('big', function (createHTML) {\n  return function big() {\n    return createHTML(this, 'big', '', '');\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.big.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.4 String.prototype.blink()\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('blink', function (createHTML) {\n  return function blink() {\n    return createHTML(this, 'blink', '', '');\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.blink.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.5 String.prototype.bold()\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('bold', function (createHTML) {\n  return function bold() {\n    return createHTML(this, 'b', '', '');\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.bold.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(false);\n$export($export.P, 'String', {\n  // 21.1.3.3 String.prototype.codePointAt(pos)\n  codePointAt: function codePointAt(pos) {\n    return $at(this, pos);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.code-point-at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])\n\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/core-js/modules/_string-context.js\");\nvar ENDS_WITH = 'endsWith';\nvar $endsWith = ''[ENDS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/core-js/modules/_fails-is-regexp.js\")(ENDS_WITH), 'String', {\n  endsWith: function endsWith(searchString /* , endPosition = @length */) {\n    var that = context(this, searchString, ENDS_WITH);\n    var endPosition = arguments.length > 1 ? arguments[1] : undefined;\n    var len = toLength(that.length);\n    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);\n    var search = String(searchString);\n    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.ends-with.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.6 String.prototype.fixed()\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('fixed', function (createHTML) {\n  return function fixed() {\n    return createHTML(this, 'tt', '', '');\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.fixed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.7 String.prototype.fontcolor(color)\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('fontcolor', function (createHTML) {\n  return function fontcolor(color) {\n    return createHTML(this, 'font', 'color', color);\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.fontcolor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.8 String.prototype.fontsize(size)\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('fontsize', function (createHTML) {\n  return function fontsize(size) {\n    return createHTML(this, 'font', 'size', size);\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.fontsize.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar fromCharCode = String.fromCharCode;\nvar $fromCodePoint = String.fromCodePoint;\n\n// length should be 1, old FF problem\n$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {\n  // 21.1.2.2 String.fromCodePoint(...codePoints)\n  fromCodePoint: function fromCodePoint(x) {\n    // eslint-disable-line no-unused-vars\n    var res = [];\n    var aLen = arguments.length;\n    var i = 0;\n    var code;\n    while (aLen > i) {\n      code = +arguments[i++];\n      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');\n      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));\n    }return res.join('');\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.from-code-point.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.7 String.prototype.includes(searchString, position = 0)\n\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/core-js/modules/_string-context.js\");\nvar INCLUDES = 'includes';\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/core-js/modules/_fails-is-regexp.js\")(INCLUDES), 'String', {\n  includes: function includes(searchString /* , position = 0 */) {\n    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.9 String.prototype.italics()\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('italics', function (createHTML) {\n  return function italics() {\n    return createHTML(this, 'i', '', '');\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.italics.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0; // next index\n  // 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.10 String.prototype.link(url)\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('link', function (createHTML) {\n  return function link(url) {\n    return createHTML(this, 'a', 'href', url);\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.link.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n\n$export($export.S, 'String', {\n  // 21.1.2.4 String.raw(callSite, ...substitutions)\n  raw: function raw(callSite) {\n    var tpl = toIObject(callSite.raw);\n    var len = toLength(tpl.length);\n    var aLen = arguments.length;\n    var res = [];\n    var i = 0;\n    while (len > i) {\n      res.push(String(tpl[i++]));\n      if (i < aLen) res.push(String(arguments[i]));\n    }return res.join('');\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.raw.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'String', {\n  // 21.1.3.13 String.prototype.repeat(count)\n  repeat: __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\")\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.repeat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.11 String.prototype.small()\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('small', function (createHTML) {\n  return function small() {\n    return createHTML(this, 'small', '', '');\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.small.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.18 String.prototype.startsWith(searchString [, position ])\n\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/core-js/modules/_string-context.js\");\nvar STARTS_WITH = 'startsWith';\nvar $startsWith = ''[STARTS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/core-js/modules/_fails-is-regexp.js\")(STARTS_WITH), 'String', {\n  startsWith: function startsWith(searchString /* , position = 0 */) {\n    var that = context(this, searchString, STARTS_WITH);\n    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));\n    var search = String(searchString);\n    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.starts-with.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.12 String.prototype.strike()\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('strike', function (createHTML) {\n  return function strike() {\n    return createHTML(this, 'strike', '', '');\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.strike.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.13 String.prototype.sub()\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('sub', function (createHTML) {\n  return function sub() {\n    return createHTML(this, 'sub', '', '');\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.sub.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.14 String.prototype.sup()\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('sup', function (createHTML) {\n  return function sup() {\n    return createHTML(this, 'sup', '', '');\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.sup.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 21.1.3.25 String.prototype.trim()\n\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\")('trim', function ($trim) {\n  return function trim() {\n    return $trim(this, 3);\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.string.trim.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// ECMAScript 6 symbols shim\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar META = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/modules/_wks-define.js\");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"./node_modules/core-js/modules/_enum-keys.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar _create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/modules/_object-gopn-ext.js\");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function';\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function get() {\n      return dP(this, 'a', { value: 7 }).a;\n    }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function wrap(tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {\n  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    }return setSymbolDesc(it, key, D);\n  }return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) {\n    $defineProperty(it, key = keys[i++], P[key]);\n  }return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  }return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  }return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function _Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function $set(value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\").f = $propertyIsEnumerable;\n  __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\").f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols =\n// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {\n  wks(es6Symbols[j++]);\n}for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {\n  wksDefine(wellKnownSymbols[k++]);\n}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function _for(key) {\n    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) {\n      if (SymbolRegistry[key] === sym) return key;\n    }\n  },\n  useSetter: function useSetter() {\n    setter = true;\n  },\n  useSimple: function useSimple() {\n    setter = false;\n  }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) {\n      args.push(arguments[i++]);\n    }replacer = args[1];\n    if (typeof replacer == 'function') $replacer = replacer;\n    if ($replacer || !isArray(replacer)) replacer = function replacer(key, value) {\n      if ($replacer) value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\");\nvar buffer = __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/core-js/modules/_typed-buffer.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar ArrayBuffer = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").ArrayBuffer;\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar $ArrayBuffer = buffer.ArrayBuffer;\nvar $DataView = buffer.DataView;\nvar $isView = $typed.ABV && ArrayBuffer.isView;\nvar $slice = $ArrayBuffer.prototype.slice;\nvar VIEW = $typed.VIEW;\nvar ARRAY_BUFFER = 'ArrayBuffer';\n\n$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });\n\n$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {\n  // 24.1.3.1 ArrayBuffer.isView(arg)\n  isView: function isView(it) {\n    return $isView && $isView(it) || isObject(it) && VIEW in it;\n  }\n});\n\n$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;\n}), ARRAY_BUFFER, {\n  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)\n  slice: function slice(start, end) {\n    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix\n    var len = anObject(this).byteLength;\n    var first = toAbsoluteIndex(start, len);\n    var final = toAbsoluteIndex(end === undefined ? len : end, len);\n    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first));\n    var viewS = new $DataView(this);\n    var viewT = new $DataView(result);\n    var index = 0;\n    while (first < final) {\n      viewT.setUint8(index++, viewS.getUint8(first++));\n    }return result;\n  }\n});\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")(ARRAY_BUFFER);\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.typed.array-buffer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n$export($export.G + $export.W + $export.F * !__webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\").ABV, {\n  DataView: __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/core-js/modules/_typed-buffer.js\").DataView\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.typed.data-view.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Float32', 4, function (init) {\n  return function Float32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.typed.float32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Float64', 8, function (init) {\n  return function Float64Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.typed.float64-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Int16', 2, function (init) {\n  return function Int16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.typed.int16-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Int32', 4, function (init) {\n  return function Int32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.typed.int32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Int8', 1, function (init) {\n  return function Int8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.typed.int8-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint16', 2, function (init) {\n  return function Uint16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.typed.uint16-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint32', 4, function (init) {\n  return function Uint32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.typed.uint32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint8', 1, function (init) {\n  return function Uint8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.typed.uint8-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint8', 1, function (init) {\n  return function Uint8ClampedArray(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n}, true);\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar each = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(0);\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\");\nvar assign = __webpack_require__(/*! ./_object-assign */ \"./node_modules/core-js/modules/_object-assign.js\");\nvar weak = __webpack_require__(/*! ./_collection-weak */ \"./node_modules/core-js/modules/_collection-weak.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar WEAK_MAP = 'WeakMap';\nvar getWeak = meta.getWeak;\nvar isExtensible = Object.isExtensible;\nvar uncaughtFrozenStore = weak.ufstore;\nvar tmp = {};\nvar InternalMap;\n\nvar wrapper = function wrapper(get) {\n  return function WeakMap() {\n    return get(this, arguments.length > 0 ? arguments[0] : undefined);\n  };\n};\n\nvar methods = {\n  // 23.3.3.3 WeakMap.prototype.get(key)\n  get: function get(key) {\n    if (isObject(key)) {\n      var data = getWeak(key);\n      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);\n      return data ? data[this._i] : undefined;\n    }\n  },\n  // 23.3.3.5 WeakMap.prototype.set(key, value)\n  set: function set(key, value) {\n    return weak.def(validate(this, WEAK_MAP), key, value);\n  }\n};\n\n// 23.3 WeakMap Objects\nvar $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(WEAK_MAP, wrapper, methods, weak, true, true);\n\n// IE11 WeakMap frozen keys fix\nif (fails(function () {\n  return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7;\n})) {\n  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);\n  assign(InternalMap.prototype, methods);\n  meta.NEED = true;\n  each(['delete', 'has', 'get', 'set'], function (key) {\n    var proto = $WeakMap.prototype;\n    var method = proto[key];\n    redefine(proto, key, function (a, b) {\n      // store frozen objects on internal weakmap shim\n      if (isObject(a) && !isExtensible(a)) {\n        if (!this._f) this._f = new InternalMap();\n        var result = this._f[key](a, b);\n        return key == 'set' ? this : result;\n        // store all the rest on native weakmap\n      }return method.call(this, a, b);\n    });\n  });\n}\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar weak = __webpack_require__(/*! ./_collection-weak */ \"./node_modules/core-js/modules/_collection-weak.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar WEAK_SET = 'WeakSet';\n\n// 23.4 WeakSet Objects\n__webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(WEAK_SET, function (get) {\n  return function WeakSet() {\n    return get(this, arguments.length > 0 ? arguments[0] : undefined);\n  };\n}, {\n  // 23.4.3.1 WeakSet.prototype.add(value)\n  add: function add(value) {\n    return weak.def(validate(this, WEAK_SET), value, true);\n  }\n}, weak, false, true);\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es6.weak-set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ \"./node_modules/core-js/modules/_flatten-into-array.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/core-js/modules/_array-species-create.js\");\n\n$export($export.P, 'Array', {\n  flatMap: function flatMap(callbackfn /* , thisArg */) {\n    var O = toObject(this);\n    var sourceLen, A;\n    aFunction(callbackfn);\n    sourceLen = toLength(O.length);\n    A = arraySpeciesCreate(O, 0);\n    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);\n    return A;\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('flatMap');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.array.flat-map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flatten.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flatten.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ \"./node_modules/core-js/modules/_flatten-into-array.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/core-js/modules/_array-species-create.js\");\n\n$export($export.P, 'Array', {\n  flatten: function flatten() /* depthArg = 1 */{\n    var depthArg = arguments[0];\n    var O = toObject(this);\n    var sourceLen = toLength(O.length);\n    var A = arraySpeciesCreate(O, 0);\n    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));\n    return A;\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('flatten');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.array.flatten.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/Array.prototype.includes\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $includes = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(true);\n\n$export($export.P, 'Array', {\n  includes: function includes(el /* , fromIndex = 0 */) {\n    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('includes');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.array.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.asap.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/es7.asap.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/core-js/modules/_microtask.js\")();\nvar process = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").process;\nvar isNode = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\")(process) == 'process';\n\n$export($export.G, {\n  asap: function asap(fn) {\n    var domain = isNode && process.domain;\n    microtask(domain ? domain.bind(fn) : fn);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.asap.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.error.is-error.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.error.is-error.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/ljharb/proposal-is-error\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\n\n$export($export.S, 'Error', {\n  isError: function isError(it) {\n    return cof(it) === 'Error';\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.error.is-error.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.global.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.global.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/tc39/proposal-global\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.G, { global: __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\") });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.global.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/core-js/modules/_set-collection-from.js\")('Map');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.map.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.of.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.of.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/core-js/modules/_set-collection-of.js\")('Map');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.map.of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(/*! ./_collection-to-json */ \"./node_modules/core-js/modules/_collection-to-json.js\")('Map') });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.map.to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.clamp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.clamp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  clamp: function clamp(x, lower, upper) {\n    return Math.min(upper, Math.max(lower, x));\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.math.clamp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.deg-per-rad.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.deg-per-rad.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.math.deg-per-rad.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.degrees.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.degrees.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar RAD_PER_DEG = 180 / Math.PI;\n\n$export($export.S, 'Math', {\n  degrees: function degrees(radians) {\n    return radians * RAD_PER_DEG;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.math.degrees.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.fscale.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.fscale.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar scale = __webpack_require__(/*! ./_math-scale */ \"./node_modules/core-js/modules/_math-scale.js\");\nvar fround = __webpack_require__(/*! ./_math-fround */ \"./node_modules/core-js/modules/_math-fround.js\");\n\n$export($export.S, 'Math', {\n  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {\n    return fround(scale(x, inLow, inHigh, outLow, outHigh));\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.math.fscale.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.iaddh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.iaddh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  iaddh: function iaddh(x0, x1, y0, y1) {\n    var $x0 = x0 >>> 0;\n    var $x1 = x1 >>> 0;\n    var $y0 = y0 >>> 0;\n    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.math.iaddh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.imulh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.imulh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  imulh: function imulh(u, v) {\n    var UINT16 = 0xffff;\n    var $u = +u;\n    var $v = +v;\n    var u0 = $u & UINT16;\n    var v0 = $v & UINT16;\n    var u1 = $u >> 16;\n    var v1 = $v >> 16;\n    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);\n    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.math.imulh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.isubh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.isubh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  isubh: function isubh(x0, x1, y0, y1) {\n    var $x0 = x0 >>> 0;\n    var $x1 = x1 >>> 0;\n    var $y0 = y0 >>> 0;\n    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.math.isubh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.rad-per-deg.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.rad-per-deg.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.math.rad-per-deg.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.radians.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.radians.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar DEG_PER_RAD = Math.PI / 180;\n\n$export($export.S, 'Math', {\n  radians: function radians(degrees) {\n    return degrees * DEG_PER_RAD;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.math.radians.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.scale.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.scale.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { scale: __webpack_require__(/*! ./_math-scale */ \"./node_modules/core-js/modules/_math-scale.js\") });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.math.scale.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.signbit.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.signbit.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// http://jfbastien.github.io/papers/Math.signbit.html\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { signbit: function signbit(x) {\n    // eslint-disable-next-line no-self-compare\n    return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;\n  } });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.math.signbit.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.umulh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.umulh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  umulh: function umulh(u, v) {\n    var UINT16 = 0xffff;\n    var $u = +u;\n    var $v = +v;\n    var u0 = $u & UINT16;\n    var v0 = $v & UINT16;\n    var u1 = $u >>> 16;\n    var v1 = $v >>> 16;\n    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);\n    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.math.umulh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.define-getter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.define-getter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\n\n// B.2.2.2 Object.prototype.__defineGetter__(P, getter)\n__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __defineGetter__: function __defineGetter__(P, getter) {\n    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.object.define-getter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.define-setter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.define-setter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\n\n// B.2.2.3 Object.prototype.__defineSetter__(P, setter)\n__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __defineSetter__: function __defineSetter__(P, setter) {\n    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.object.define-setter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $entries = __webpack_require__(/*! ./_object-to-array */ \"./node_modules/core-js/modules/_object-to-array.js\")(true);\n\n$export($export.S, 'Object', {\n  entries: function entries(it) {\n    return $entries(it);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.object.entries.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/tc39/proposal-object-getownpropertydescriptors\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar ownKeys = __webpack_require__(/*! ./_own-keys */ \"./node_modules/core-js/modules/_own-keys.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\n\n$export($export.S, 'Object', {\n  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {\n    var O = toIObject(object);\n    var getDesc = gOPD.f;\n    var keys = ownKeys(O);\n    var result = {};\n    var i = 0;\n    var key, desc;\n    while (keys.length > i) {\n      desc = getDesc(O, key = keys[i++]);\n      if (desc !== undefined) createProperty(result, key, desc);\n    }\n    return result;\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.lookup-getter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.lookup-getter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\n\n// B.2.2.4 Object.prototype.__lookupGetter__(P)\n__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __lookupGetter__: function __lookupGetter__(P) {\n    var O = toObject(this);\n    var K = toPrimitive(P, true);\n    var D;\n    do {\n      if (D = getOwnPropertyDescriptor(O, K)) return D.get;\n    } while (O = getPrototypeOf(O));\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.object.lookup-getter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.lookup-setter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.lookup-setter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\n\n// B.2.2.5 Object.prototype.__lookupSetter__(P)\n__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __lookupSetter__: function __lookupSetter__(P) {\n    var O = toObject(this);\n    var K = toPrimitive(P, true);\n    var D;\n    do {\n      if (D = getOwnPropertyDescriptor(O, K)) return D.set;\n    } while (O = getPrototypeOf(O));\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.object.lookup-setter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $values = __webpack_require__(/*! ./_object-to-array */ \"./node_modules/core-js/modules/_object-to-array.js\")(false);\n\n$export($export.S, 'Object', {\n  values: function values(it) {\n    return $values(it);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.object.values.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.observable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.observable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/zenparsing/es-observable\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/core-js/modules/_microtask.js\")();\nvar OBSERVABLE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('observable');\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar RETURN = forOf.RETURN;\n\nvar getMethod = function getMethod(fn) {\n  return fn == null ? undefined : aFunction(fn);\n};\n\nvar cleanupSubscription = function cleanupSubscription(subscription) {\n  var cleanup = subscription._c;\n  if (cleanup) {\n    subscription._c = undefined;\n    cleanup();\n  }\n};\n\nvar subscriptionClosed = function subscriptionClosed(subscription) {\n  return subscription._o === undefined;\n};\n\nvar closeSubscription = function closeSubscription(subscription) {\n  if (!subscriptionClosed(subscription)) {\n    subscription._o = undefined;\n    cleanupSubscription(subscription);\n  }\n};\n\nvar Subscription = function Subscription(observer, subscriber) {\n  anObject(observer);\n  this._c = undefined;\n  this._o = observer;\n  observer = new SubscriptionObserver(this);\n  try {\n    var cleanup = subscriber(observer);\n    var subscription = cleanup;\n    if (cleanup != null) {\n      if (typeof cleanup.unsubscribe === 'function') cleanup = function cleanup() {\n        subscription.unsubscribe();\n      };else aFunction(cleanup);\n      this._c = cleanup;\n    }\n  } catch (e) {\n    observer.error(e);\n    return;\n  }if (subscriptionClosed(this)) cleanupSubscription(this);\n};\n\nSubscription.prototype = redefineAll({}, {\n  unsubscribe: function unsubscribe() {\n    closeSubscription(this);\n  }\n});\n\nvar SubscriptionObserver = function SubscriptionObserver(subscription) {\n  this._s = subscription;\n};\n\nSubscriptionObserver.prototype = redefineAll({}, {\n  next: function next(value) {\n    var subscription = this._s;\n    if (!subscriptionClosed(subscription)) {\n      var observer = subscription._o;\n      try {\n        var m = getMethod(observer.next);\n        if (m) return m.call(observer, value);\n      } catch (e) {\n        try {\n          closeSubscription(subscription);\n        } finally {\n          throw e;\n        }\n      }\n    }\n  },\n  error: function error(value) {\n    var subscription = this._s;\n    if (subscriptionClosed(subscription)) throw value;\n    var observer = subscription._o;\n    subscription._o = undefined;\n    try {\n      var m = getMethod(observer.error);\n      if (!m) throw value;\n      value = m.call(observer, value);\n    } catch (e) {\n      try {\n        cleanupSubscription(subscription);\n      } finally {\n        throw e;\n      }\n    }cleanupSubscription(subscription);\n    return value;\n  },\n  complete: function complete(value) {\n    var subscription = this._s;\n    if (!subscriptionClosed(subscription)) {\n      var observer = subscription._o;\n      subscription._o = undefined;\n      try {\n        var m = getMethod(observer.complete);\n        value = m ? m.call(observer, value) : undefined;\n      } catch (e) {\n        try {\n          cleanupSubscription(subscription);\n        } finally {\n          throw e;\n        }\n      }cleanupSubscription(subscription);\n      return value;\n    }\n  }\n});\n\nvar $Observable = function Observable(subscriber) {\n  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);\n};\n\nredefineAll($Observable.prototype, {\n  subscribe: function subscribe(observer) {\n    return new Subscription(observer, this._f);\n  },\n  forEach: function forEach(fn) {\n    var that = this;\n    return new (core.Promise || global.Promise)(function (resolve, reject) {\n      aFunction(fn);\n      var subscription = that.subscribe({\n        next: function next(value) {\n          try {\n            return fn(value);\n          } catch (e) {\n            reject(e);\n            subscription.unsubscribe();\n          }\n        },\n        error: reject,\n        complete: resolve\n      });\n    });\n  }\n});\n\nredefineAll($Observable, {\n  from: function from(x) {\n    var C = typeof this === 'function' ? this : $Observable;\n    var method = getMethod(anObject(x)[OBSERVABLE]);\n    if (method) {\n      var observable = anObject(method.call(x));\n      return observable.constructor === C ? observable : new C(function (observer) {\n        return observable.subscribe(observer);\n      });\n    }\n    return new C(function (observer) {\n      var done = false;\n      microtask(function () {\n        if (!done) {\n          try {\n            if (forOf(x, false, function (it) {\n              observer.next(it);\n              if (done) return RETURN;\n            }) === RETURN) return;\n          } catch (e) {\n            if (done) throw e;\n            observer.error(e);\n            return;\n          }observer.complete();\n        }\n      });\n      return function () {\n        done = true;\n      };\n    });\n  },\n  of: function of() {\n    for (var i = 0, l = arguments.length, items = Array(l); i < l;) {\n      items[i] = arguments[i++];\n    }return new (typeof this === 'function' ? this : $Observable)(function (observer) {\n      var done = false;\n      microtask(function () {\n        if (!done) {\n          for (var j = 0; j < items.length; ++j) {\n            observer.next(items[j]);\n            if (done) return;\n          }observer.complete();\n        }\n      });\n      return function () {\n        done = true;\n      };\n    });\n  }\n});\n\nhide($Observable.prototype, OBSERVABLE, function () {\n  return this;\n});\n\n$export($export.G, { Observable: $Observable });\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")('Observable');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.observable.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// https://github.com/tc39/proposal-promise-finally\n\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/modules/_promise-resolve.js\");\n\n$export($export.P + $export.R, 'Promise', { 'finally': function _finally(onFinally) {\n    var C = speciesConstructor(this, core.Promise || global.Promise);\n    var isFunction = typeof onFinally == 'function';\n    return this.then(isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () {\n        return x;\n      });\n    } : onFinally, isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () {\n        throw e;\n      });\n    } : onFinally);\n  } });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.promise.finally.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.try.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.try.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-promise-try\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/modules/_perform.js\");\n\n$export($export.S, 'Promise', { 'try': function _try(callbackfn) {\n    var promiseCapability = newPromiseCapability.f(this);\n    var result = perform(callbackfn);\n    (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);\n    return promiseCapability.promise;\n  } });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.promise.try.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toMetaKey = metadata.key;\nvar ordinaryDefineOwnMetadata = metadata.set;\n\nmetadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {\n    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));\n  } });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.reflect.define-metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toMetaKey = metadata.key;\nvar getOrCreateMetadataMap = metadata.map;\nvar store = metadata.store;\n\nmetadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {\n    var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);\n    var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);\n    if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;\n    if (metadataMap.size) return true;\n    var targetMetadata = store.get(target);\n    targetMetadata['delete'](targetKey);\n    return !!targetMetadata.size || store['delete'](target);\n  } });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.reflect.delete-metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Set = __webpack_require__(/*! ./es6.set */ \"./node_modules/core-js/modules/es6.set.js\");\nvar from = __webpack_require__(/*! ./_array-from-iterable */ \"./node_modules/core-js/modules/_array-from-iterable.js\");\nvar metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar ordinaryOwnMetadataKeys = metadata.keys;\nvar toMetaKey = metadata.key;\n\nvar ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {\n  var oKeys = ordinaryOwnMetadataKeys(O, P);\n  var parent = getPrototypeOf(O);\n  if (parent === null) return oKeys;\n  var pKeys = ordinaryMetadataKeys(parent, P);\n  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;\n};\n\nmetadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {\n    return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));\n  } });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar ordinaryHasOwnMetadata = metadata.has;\nvar ordinaryGetOwnMetadata = metadata.get;\nvar toMetaKey = metadata.key;\n\nvar ordinaryGetMetadata = function ordinaryGetMetadata(MetadataKey, O, P) {\n  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);\n  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);\n  var parent = getPrototypeOf(O);\n  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;\n};\n\nmetadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {\n    return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n  } });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.reflect.get-metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar ordinaryOwnMetadataKeys = metadata.keys;\nvar toMetaKey = metadata.key;\n\nmetadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {\n    return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));\n  } });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar ordinaryGetOwnMetadata = metadata.get;\nvar toMetaKey = metadata.key;\n\nmetadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {\n    return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n  } });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.reflect.get-own-metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar ordinaryHasOwnMetadata = metadata.has;\nvar toMetaKey = metadata.key;\n\nvar ordinaryHasMetadata = function ordinaryHasMetadata(MetadataKey, O, P) {\n  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);\n  if (hasOwn) return true;\n  var parent = getPrototypeOf(O);\n  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;\n};\n\nmetadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {\n    return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n  } });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.reflect.has-metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar ordinaryHasOwnMetadata = metadata.has;\nvar toMetaKey = metadata.key;\n\nmetadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {\n    return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n  } });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.reflect.has-own-metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar toMetaKey = $metadata.key;\nvar ordinaryDefineOwnMetadata = $metadata.set;\n\n$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {\n    return function decorator(target, targetKey) {\n      ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));\n    };\n  } });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.reflect.metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/core-js/modules/_set-collection-from.js\")('Set');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.set.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.of.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.of.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/core-js/modules/_set-collection-of.js\")('Set');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.set.of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ \"./node_modules/core-js/modules/_collection-to-json.js\")('Set') });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.set.to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.at.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.at.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/mathiasbynens/String.prototype.at\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(true);\n\n$export($export.P, 'String', {\n  at: function at(pos) {\n    return $at(this, pos);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.string.at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.match-all.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.match-all.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/String.prototype.matchAll/\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar getFlags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\nvar RegExpProto = RegExp.prototype;\n\nvar $RegExpStringIterator = function $RegExpStringIterator(regexp, string) {\n  this._r = regexp;\n  this._s = string;\n};\n\n__webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/modules/_iter-create.js\")($RegExpStringIterator, 'RegExp String', function next() {\n  var match = this._r.exec(this._s);\n  return { value: match, done: match === null };\n});\n\n$export($export.P, 'String', {\n  matchAll: function matchAll(regexp) {\n    defined(this);\n    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');\n    var S = String(this);\n    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);\n    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);\n    rx.lastIndex = toLength(regexp.lastIndex);\n    return new $RegExpStringIterator(rx, S);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.string.match-all.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-string-pad-start-end\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $pad = __webpack_require__(/*! ./_string-pad */ \"./node_modules/core-js/modules/_string-pad.js\");\n\n$export($export.P, 'String', {\n  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.string.pad-end.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-string-pad-start-end\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $pad = __webpack_require__(/*! ./_string-pad */ \"./node_modules/core-js/modules/_string-pad.js\");\n\n$export($export.P, 'String', {\n  padStart: function padStart(maxLength /* , fillString = ' ' */) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);\n  }\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.string.pad-start.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\")('trimLeft', function ($trim) {\n  return function trimLeft() {\n    return $trim(this, 1);\n  };\n}, 'trimStart');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.string.trim-left.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\")('trimRight', function ($trim) {\n  return function trimRight() {\n    return $trim(this, 2);\n  };\n}, 'trimEnd');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.string.trim-right.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/modules/_wks-define.js\")('asyncIterator');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.symbol.async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.observable.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.observable.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/modules/_wks-define.js\")('observable');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.symbol.observable.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.system.global.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.system.global.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/tc39/proposal-global\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'System', { global: __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\") });\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.system.global.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-map.from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-map.from.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/core-js/modules/_set-collection-from.js\")('WeakMap');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.weak-map.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-map.of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-map.of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/core-js/modules/_set-collection-of.js\")('WeakMap');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.weak-map.of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-set.from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-set.from.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/core-js/modules/_set-collection-from.js\")('WeakSet');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.weak-set.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-set.of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-set.of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/core-js/modules/_set-collection-of.js\")('WeakSet');\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/es7.weak-set.of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $iterators = __webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar ITERATOR = wks('iterator');\nvar TO_STRING_TAG = wks('toStringTag');\nvar ArrayValues = Iterators.Array;\n\nvar DOMIterables = {\n  CSSRuleList: true, // TODO: Not spec compliant, should be false.\n  CSSStyleDeclaration: false,\n  CSSValueList: false,\n  ClientRectList: false,\n  DOMRectList: false,\n  DOMStringList: false,\n  DOMTokenList: true,\n  DataTransferItemList: false,\n  FileList: false,\n  HTMLAllCollection: false,\n  HTMLCollection: false,\n  HTMLFormElement: false,\n  HTMLSelectElement: false,\n  MediaList: true, // TODO: Not spec compliant, should be false.\n  MimeTypeArray: false,\n  NamedNodeMap: false,\n  NodeList: true,\n  PaintRequestList: false,\n  Plugin: false,\n  PluginArray: false,\n  SVGLengthList: false,\n  SVGNumberList: false,\n  SVGPathSegList: false,\n  SVGPointList: false,\n  SVGStringList: false,\n  SVGTransformList: false,\n  SourceBufferList: false,\n  StyleSheetList: true, // TODO: Not spec compliant, should be false.\n  TextTrackCueList: false,\n  TextTrackList: false,\n  TouchList: false\n};\n\nfor (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {\n  var NAME = collections[i];\n  var explicit = DOMIterables[NAME];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  var key;\n  if (proto) {\n    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);\n    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n    Iterators[NAME] = ArrayValues;\n    if (explicit) for (key in $iterators) {\n      if (!proto[key]) redefine(proto, key, $iterators[key], true);\n    }\n  }\n}\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/web.dom.iterable.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $task = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\");\n$export($export.G + $export.B, {\n  setImmediate: $task.set,\n  clearImmediate: $task.clear\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/web.immediate.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// ie9- setTimeout & setInterval additional parameters fix\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar navigator = global.navigator;\nvar slice = [].slice;\nvar MSIE = !!navigator && /MSIE .\\./.test(navigator.userAgent); // <- dirty ie9- check\nvar wrap = function wrap(set) {\n  return function (fn, time /* , ...args */) {\n    var boundArgs = arguments.length > 2;\n    var args = boundArgs ? slice.call(arguments, 2) : false;\n    return set(boundArgs ? function () {\n      // eslint-disable-next-line no-new-func\n      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);\n    } : fn, time);\n  };\n};\n$export($export.G + $export.B + $export.F * MSIE, {\n  setTimeout: wrap(global.setTimeout),\n  setInterval: wrap(global.setInterval)\n});\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/modules/web.timers.js?");

/***/ }),

/***/ "./node_modules/core-js/shim.js":
/*!**************************************!*\
  !*** ./node_modules/core-js/shim.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/es6.symbol */ \"./node_modules/core-js/modules/es6.symbol.js\");\n__webpack_require__(/*! ./modules/es6.object.create */ \"./node_modules/core-js/modules/es6.object.create.js\");\n__webpack_require__(/*! ./modules/es6.object.define-property */ \"./node_modules/core-js/modules/es6.object.define-property.js\");\n__webpack_require__(/*! ./modules/es6.object.define-properties */ \"./node_modules/core-js/modules/es6.object.define-properties.js\");\n__webpack_require__(/*! ./modules/es6.object.get-own-property-descriptor */ \"./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js\");\n__webpack_require__(/*! ./modules/es6.object.get-prototype-of */ \"./node_modules/core-js/modules/es6.object.get-prototype-of.js\");\n__webpack_require__(/*! ./modules/es6.object.keys */ \"./node_modules/core-js/modules/es6.object.keys.js\");\n__webpack_require__(/*! ./modules/es6.object.get-own-property-names */ \"./node_modules/core-js/modules/es6.object.get-own-property-names.js\");\n__webpack_require__(/*! ./modules/es6.object.freeze */ \"./node_modules/core-js/modules/es6.object.freeze.js\");\n__webpack_require__(/*! ./modules/es6.object.seal */ \"./node_modules/core-js/modules/es6.object.seal.js\");\n__webpack_require__(/*! ./modules/es6.object.prevent-extensions */ \"./node_modules/core-js/modules/es6.object.prevent-extensions.js\");\n__webpack_require__(/*! ./modules/es6.object.is-frozen */ \"./node_modules/core-js/modules/es6.object.is-frozen.js\");\n__webpack_require__(/*! ./modules/es6.object.is-sealed */ \"./node_modules/core-js/modules/es6.object.is-sealed.js\");\n__webpack_require__(/*! ./modules/es6.object.is-extensible */ \"./node_modules/core-js/modules/es6.object.is-extensible.js\");\n__webpack_require__(/*! ./modules/es6.object.assign */ \"./node_modules/core-js/modules/es6.object.assign.js\");\n__webpack_require__(/*! ./modules/es6.object.is */ \"./node_modules/core-js/modules/es6.object.is.js\");\n__webpack_require__(/*! ./modules/es6.object.set-prototype-of */ \"./node_modules/core-js/modules/es6.object.set-prototype-of.js\");\n__webpack_require__(/*! ./modules/es6.object.to-string */ \"./node_modules/core-js/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ./modules/es6.function.bind */ \"./node_modules/core-js/modules/es6.function.bind.js\");\n__webpack_require__(/*! ./modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n__webpack_require__(/*! ./modules/es6.function.has-instance */ \"./node_modules/core-js/modules/es6.function.has-instance.js\");\n__webpack_require__(/*! ./modules/es6.parse-int */ \"./node_modules/core-js/modules/es6.parse-int.js\");\n__webpack_require__(/*! ./modules/es6.parse-float */ \"./node_modules/core-js/modules/es6.parse-float.js\");\n__webpack_require__(/*! ./modules/es6.number.constructor */ \"./node_modules/core-js/modules/es6.number.constructor.js\");\n__webpack_require__(/*! ./modules/es6.number.to-fixed */ \"./node_modules/core-js/modules/es6.number.to-fixed.js\");\n__webpack_require__(/*! ./modules/es6.number.to-precision */ \"./node_modules/core-js/modules/es6.number.to-precision.js\");\n__webpack_require__(/*! ./modules/es6.number.epsilon */ \"./node_modules/core-js/modules/es6.number.epsilon.js\");\n__webpack_require__(/*! ./modules/es6.number.is-finite */ \"./node_modules/core-js/modules/es6.number.is-finite.js\");\n__webpack_require__(/*! ./modules/es6.number.is-integer */ \"./node_modules/core-js/modules/es6.number.is-integer.js\");\n__webpack_require__(/*! ./modules/es6.number.is-nan */ \"./node_modules/core-js/modules/es6.number.is-nan.js\");\n__webpack_require__(/*! ./modules/es6.number.is-safe-integer */ \"./node_modules/core-js/modules/es6.number.is-safe-integer.js\");\n__webpack_require__(/*! ./modules/es6.number.max-safe-integer */ \"./node_modules/core-js/modules/es6.number.max-safe-integer.js\");\n__webpack_require__(/*! ./modules/es6.number.min-safe-integer */ \"./node_modules/core-js/modules/es6.number.min-safe-integer.js\");\n__webpack_require__(/*! ./modules/es6.number.parse-float */ \"./node_modules/core-js/modules/es6.number.parse-float.js\");\n__webpack_require__(/*! ./modules/es6.number.parse-int */ \"./node_modules/core-js/modules/es6.number.parse-int.js\");\n__webpack_require__(/*! ./modules/es6.math.acosh */ \"./node_modules/core-js/modules/es6.math.acosh.js\");\n__webpack_require__(/*! ./modules/es6.math.asinh */ \"./node_modules/core-js/modules/es6.math.asinh.js\");\n__webpack_require__(/*! ./modules/es6.math.atanh */ \"./node_modules/core-js/modules/es6.math.atanh.js\");\n__webpack_require__(/*! ./modules/es6.math.cbrt */ \"./node_modules/core-js/modules/es6.math.cbrt.js\");\n__webpack_require__(/*! ./modules/es6.math.clz32 */ \"./node_modules/core-js/modules/es6.math.clz32.js\");\n__webpack_require__(/*! ./modules/es6.math.cosh */ \"./node_modules/core-js/modules/es6.math.cosh.js\");\n__webpack_require__(/*! ./modules/es6.math.expm1 */ \"./node_modules/core-js/modules/es6.math.expm1.js\");\n__webpack_require__(/*! ./modules/es6.math.fround */ \"./node_modules/core-js/modules/es6.math.fround.js\");\n__webpack_require__(/*! ./modules/es6.math.hypot */ \"./node_modules/core-js/modules/es6.math.hypot.js\");\n__webpack_require__(/*! ./modules/es6.math.imul */ \"./node_modules/core-js/modules/es6.math.imul.js\");\n__webpack_require__(/*! ./modules/es6.math.log10 */ \"./node_modules/core-js/modules/es6.math.log10.js\");\n__webpack_require__(/*! ./modules/es6.math.log1p */ \"./node_modules/core-js/modules/es6.math.log1p.js\");\n__webpack_require__(/*! ./modules/es6.math.log2 */ \"./node_modules/core-js/modules/es6.math.log2.js\");\n__webpack_require__(/*! ./modules/es6.math.sign */ \"./node_modules/core-js/modules/es6.math.sign.js\");\n__webpack_require__(/*! ./modules/es6.math.sinh */ \"./node_modules/core-js/modules/es6.math.sinh.js\");\n__webpack_require__(/*! ./modules/es6.math.tanh */ \"./node_modules/core-js/modules/es6.math.tanh.js\");\n__webpack_require__(/*! ./modules/es6.math.trunc */ \"./node_modules/core-js/modules/es6.math.trunc.js\");\n__webpack_require__(/*! ./modules/es6.string.from-code-point */ \"./node_modules/core-js/modules/es6.string.from-code-point.js\");\n__webpack_require__(/*! ./modules/es6.string.raw */ \"./node_modules/core-js/modules/es6.string.raw.js\");\n__webpack_require__(/*! ./modules/es6.string.trim */ \"./node_modules/core-js/modules/es6.string.trim.js\");\n__webpack_require__(/*! ./modules/es6.string.iterator */ \"./node_modules/core-js/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ./modules/es6.string.code-point-at */ \"./node_modules/core-js/modules/es6.string.code-point-at.js\");\n__webpack_require__(/*! ./modules/es6.string.ends-with */ \"./node_modules/core-js/modules/es6.string.ends-with.js\");\n__webpack_require__(/*! ./modules/es6.string.includes */ \"./node_modules/core-js/modules/es6.string.includes.js\");\n__webpack_require__(/*! ./modules/es6.string.repeat */ \"./node_modules/core-js/modules/es6.string.repeat.js\");\n__webpack_require__(/*! ./modules/es6.string.starts-with */ \"./node_modules/core-js/modules/es6.string.starts-with.js\");\n__webpack_require__(/*! ./modules/es6.string.anchor */ \"./node_modules/core-js/modules/es6.string.anchor.js\");\n__webpack_require__(/*! ./modules/es6.string.big */ \"./node_modules/core-js/modules/es6.string.big.js\");\n__webpack_require__(/*! ./modules/es6.string.blink */ \"./node_modules/core-js/modules/es6.string.blink.js\");\n__webpack_require__(/*! ./modules/es6.string.bold */ \"./node_modules/core-js/modules/es6.string.bold.js\");\n__webpack_require__(/*! ./modules/es6.string.fixed */ \"./node_modules/core-js/modules/es6.string.fixed.js\");\n__webpack_require__(/*! ./modules/es6.string.fontcolor */ \"./node_modules/core-js/modules/es6.string.fontcolor.js\");\n__webpack_require__(/*! ./modules/es6.string.fontsize */ \"./node_modules/core-js/modules/es6.string.fontsize.js\");\n__webpack_require__(/*! ./modules/es6.string.italics */ \"./node_modules/core-js/modules/es6.string.italics.js\");\n__webpack_require__(/*! ./modules/es6.string.link */ \"./node_modules/core-js/modules/es6.string.link.js\");\n__webpack_require__(/*! ./modules/es6.string.small */ \"./node_modules/core-js/modules/es6.string.small.js\");\n__webpack_require__(/*! ./modules/es6.string.strike */ \"./node_modules/core-js/modules/es6.string.strike.js\");\n__webpack_require__(/*! ./modules/es6.string.sub */ \"./node_modules/core-js/modules/es6.string.sub.js\");\n__webpack_require__(/*! ./modules/es6.string.sup */ \"./node_modules/core-js/modules/es6.string.sup.js\");\n__webpack_require__(/*! ./modules/es6.date.now */ \"./node_modules/core-js/modules/es6.date.now.js\");\n__webpack_require__(/*! ./modules/es6.date.to-json */ \"./node_modules/core-js/modules/es6.date.to-json.js\");\n__webpack_require__(/*! ./modules/es6.date.to-iso-string */ \"./node_modules/core-js/modules/es6.date.to-iso-string.js\");\n__webpack_require__(/*! ./modules/es6.date.to-string */ \"./node_modules/core-js/modules/es6.date.to-string.js\");\n__webpack_require__(/*! ./modules/es6.date.to-primitive */ \"./node_modules/core-js/modules/es6.date.to-primitive.js\");\n__webpack_require__(/*! ./modules/es6.array.is-array */ \"./node_modules/core-js/modules/es6.array.is-array.js\");\n__webpack_require__(/*! ./modules/es6.array.from */ \"./node_modules/core-js/modules/es6.array.from.js\");\n__webpack_require__(/*! ./modules/es6.array.of */ \"./node_modules/core-js/modules/es6.array.of.js\");\n__webpack_require__(/*! ./modules/es6.array.join */ \"./node_modules/core-js/modules/es6.array.join.js\");\n__webpack_require__(/*! ./modules/es6.array.slice */ \"./node_modules/core-js/modules/es6.array.slice.js\");\n__webpack_require__(/*! ./modules/es6.array.sort */ \"./node_modules/core-js/modules/es6.array.sort.js\");\n__webpack_require__(/*! ./modules/es6.array.for-each */ \"./node_modules/core-js/modules/es6.array.for-each.js\");\n__webpack_require__(/*! ./modules/es6.array.map */ \"./node_modules/core-js/modules/es6.array.map.js\");\n__webpack_require__(/*! ./modules/es6.array.filter */ \"./node_modules/core-js/modules/es6.array.filter.js\");\n__webpack_require__(/*! ./modules/es6.array.some */ \"./node_modules/core-js/modules/es6.array.some.js\");\n__webpack_require__(/*! ./modules/es6.array.every */ \"./node_modules/core-js/modules/es6.array.every.js\");\n__webpack_require__(/*! ./modules/es6.array.reduce */ \"./node_modules/core-js/modules/es6.array.reduce.js\");\n__webpack_require__(/*! ./modules/es6.array.reduce-right */ \"./node_modules/core-js/modules/es6.array.reduce-right.js\");\n__webpack_require__(/*! ./modules/es6.array.index-of */ \"./node_modules/core-js/modules/es6.array.index-of.js\");\n__webpack_require__(/*! ./modules/es6.array.last-index-of */ \"./node_modules/core-js/modules/es6.array.last-index-of.js\");\n__webpack_require__(/*! ./modules/es6.array.copy-within */ \"./node_modules/core-js/modules/es6.array.copy-within.js\");\n__webpack_require__(/*! ./modules/es6.array.fill */ \"./node_modules/core-js/modules/es6.array.fill.js\");\n__webpack_require__(/*! ./modules/es6.array.find */ \"./node_modules/core-js/modules/es6.array.find.js\");\n__webpack_require__(/*! ./modules/es6.array.find-index */ \"./node_modules/core-js/modules/es6.array.find-index.js\");\n__webpack_require__(/*! ./modules/es6.array.species */ \"./node_modules/core-js/modules/es6.array.species.js\");\n__webpack_require__(/*! ./modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n__webpack_require__(/*! ./modules/es6.regexp.constructor */ \"./node_modules/core-js/modules/es6.regexp.constructor.js\");\n__webpack_require__(/*! ./modules/es6.regexp.to-string */ \"./node_modules/core-js/modules/es6.regexp.to-string.js\");\n__webpack_require__(/*! ./modules/es6.regexp.flags */ \"./node_modules/core-js/modules/es6.regexp.flags.js\");\n__webpack_require__(/*! ./modules/es6.regexp.match */ \"./node_modules/core-js/modules/es6.regexp.match.js\");\n__webpack_require__(/*! ./modules/es6.regexp.replace */ \"./node_modules/core-js/modules/es6.regexp.replace.js\");\n__webpack_require__(/*! ./modules/es6.regexp.search */ \"./node_modules/core-js/modules/es6.regexp.search.js\");\n__webpack_require__(/*! ./modules/es6.regexp.split */ \"./node_modules/core-js/modules/es6.regexp.split.js\");\n__webpack_require__(/*! ./modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n__webpack_require__(/*! ./modules/es6.map */ \"./node_modules/core-js/modules/es6.map.js\");\n__webpack_require__(/*! ./modules/es6.set */ \"./node_modules/core-js/modules/es6.set.js\");\n__webpack_require__(/*! ./modules/es6.weak-map */ \"./node_modules/core-js/modules/es6.weak-map.js\");\n__webpack_require__(/*! ./modules/es6.weak-set */ \"./node_modules/core-js/modules/es6.weak-set.js\");\n__webpack_require__(/*! ./modules/es6.typed.array-buffer */ \"./node_modules/core-js/modules/es6.typed.array-buffer.js\");\n__webpack_require__(/*! ./modules/es6.typed.data-view */ \"./node_modules/core-js/modules/es6.typed.data-view.js\");\n__webpack_require__(/*! ./modules/es6.typed.int8-array */ \"./node_modules/core-js/modules/es6.typed.int8-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.uint8-array */ \"./node_modules/core-js/modules/es6.typed.uint8-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.uint8-clamped-array */ \"./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.int16-array */ \"./node_modules/core-js/modules/es6.typed.int16-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.uint16-array */ \"./node_modules/core-js/modules/es6.typed.uint16-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.int32-array */ \"./node_modules/core-js/modules/es6.typed.int32-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.uint32-array */ \"./node_modules/core-js/modules/es6.typed.uint32-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.float32-array */ \"./node_modules/core-js/modules/es6.typed.float32-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.float64-array */ \"./node_modules/core-js/modules/es6.typed.float64-array.js\");\n__webpack_require__(/*! ./modules/es6.reflect.apply */ \"./node_modules/core-js/modules/es6.reflect.apply.js\");\n__webpack_require__(/*! ./modules/es6.reflect.construct */ \"./node_modules/core-js/modules/es6.reflect.construct.js\");\n__webpack_require__(/*! ./modules/es6.reflect.define-property */ \"./node_modules/core-js/modules/es6.reflect.define-property.js\");\n__webpack_require__(/*! ./modules/es6.reflect.delete-property */ \"./node_modules/core-js/modules/es6.reflect.delete-property.js\");\n__webpack_require__(/*! ./modules/es6.reflect.enumerate */ \"./node_modules/core-js/modules/es6.reflect.enumerate.js\");\n__webpack_require__(/*! ./modules/es6.reflect.get */ \"./node_modules/core-js/modules/es6.reflect.get.js\");\n__webpack_require__(/*! ./modules/es6.reflect.get-own-property-descriptor */ \"./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js\");\n__webpack_require__(/*! ./modules/es6.reflect.get-prototype-of */ \"./node_modules/core-js/modules/es6.reflect.get-prototype-of.js\");\n__webpack_require__(/*! ./modules/es6.reflect.has */ \"./node_modules/core-js/modules/es6.reflect.has.js\");\n__webpack_require__(/*! ./modules/es6.reflect.is-extensible */ \"./node_modules/core-js/modules/es6.reflect.is-extensible.js\");\n__webpack_require__(/*! ./modules/es6.reflect.own-keys */ \"./node_modules/core-js/modules/es6.reflect.own-keys.js\");\n__webpack_require__(/*! ./modules/es6.reflect.prevent-extensions */ \"./node_modules/core-js/modules/es6.reflect.prevent-extensions.js\");\n__webpack_require__(/*! ./modules/es6.reflect.set */ \"./node_modules/core-js/modules/es6.reflect.set.js\");\n__webpack_require__(/*! ./modules/es6.reflect.set-prototype-of */ \"./node_modules/core-js/modules/es6.reflect.set-prototype-of.js\");\n__webpack_require__(/*! ./modules/es7.array.includes */ \"./node_modules/core-js/modules/es7.array.includes.js\");\n__webpack_require__(/*! ./modules/es7.array.flat-map */ \"./node_modules/core-js/modules/es7.array.flat-map.js\");\n__webpack_require__(/*! ./modules/es7.array.flatten */ \"./node_modules/core-js/modules/es7.array.flatten.js\");\n__webpack_require__(/*! ./modules/es7.string.at */ \"./node_modules/core-js/modules/es7.string.at.js\");\n__webpack_require__(/*! ./modules/es7.string.pad-start */ \"./node_modules/core-js/modules/es7.string.pad-start.js\");\n__webpack_require__(/*! ./modules/es7.string.pad-end */ \"./node_modules/core-js/modules/es7.string.pad-end.js\");\n__webpack_require__(/*! ./modules/es7.string.trim-left */ \"./node_modules/core-js/modules/es7.string.trim-left.js\");\n__webpack_require__(/*! ./modules/es7.string.trim-right */ \"./node_modules/core-js/modules/es7.string.trim-right.js\");\n__webpack_require__(/*! ./modules/es7.string.match-all */ \"./node_modules/core-js/modules/es7.string.match-all.js\");\n__webpack_require__(/*! ./modules/es7.symbol.async-iterator */ \"./node_modules/core-js/modules/es7.symbol.async-iterator.js\");\n__webpack_require__(/*! ./modules/es7.symbol.observable */ \"./node_modules/core-js/modules/es7.symbol.observable.js\");\n__webpack_require__(/*! ./modules/es7.object.get-own-property-descriptors */ \"./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js\");\n__webpack_require__(/*! ./modules/es7.object.values */ \"./node_modules/core-js/modules/es7.object.values.js\");\n__webpack_require__(/*! ./modules/es7.object.entries */ \"./node_modules/core-js/modules/es7.object.entries.js\");\n__webpack_require__(/*! ./modules/es7.object.define-getter */ \"./node_modules/core-js/modules/es7.object.define-getter.js\");\n__webpack_require__(/*! ./modules/es7.object.define-setter */ \"./node_modules/core-js/modules/es7.object.define-setter.js\");\n__webpack_require__(/*! ./modules/es7.object.lookup-getter */ \"./node_modules/core-js/modules/es7.object.lookup-getter.js\");\n__webpack_require__(/*! ./modules/es7.object.lookup-setter */ \"./node_modules/core-js/modules/es7.object.lookup-setter.js\");\n__webpack_require__(/*! ./modules/es7.map.to-json */ \"./node_modules/core-js/modules/es7.map.to-json.js\");\n__webpack_require__(/*! ./modules/es7.set.to-json */ \"./node_modules/core-js/modules/es7.set.to-json.js\");\n__webpack_require__(/*! ./modules/es7.map.of */ \"./node_modules/core-js/modules/es7.map.of.js\");\n__webpack_require__(/*! ./modules/es7.set.of */ \"./node_modules/core-js/modules/es7.set.of.js\");\n__webpack_require__(/*! ./modules/es7.weak-map.of */ \"./node_modules/core-js/modules/es7.weak-map.of.js\");\n__webpack_require__(/*! ./modules/es7.weak-set.of */ \"./node_modules/core-js/modules/es7.weak-set.of.js\");\n__webpack_require__(/*! ./modules/es7.map.from */ \"./node_modules/core-js/modules/es7.map.from.js\");\n__webpack_require__(/*! ./modules/es7.set.from */ \"./node_modules/core-js/modules/es7.set.from.js\");\n__webpack_require__(/*! ./modules/es7.weak-map.from */ \"./node_modules/core-js/modules/es7.weak-map.from.js\");\n__webpack_require__(/*! ./modules/es7.weak-set.from */ \"./node_modules/core-js/modules/es7.weak-set.from.js\");\n__webpack_require__(/*! ./modules/es7.global */ \"./node_modules/core-js/modules/es7.global.js\");\n__webpack_require__(/*! ./modules/es7.system.global */ \"./node_modules/core-js/modules/es7.system.global.js\");\n__webpack_require__(/*! ./modules/es7.error.is-error */ \"./node_modules/core-js/modules/es7.error.is-error.js\");\n__webpack_require__(/*! ./modules/es7.math.clamp */ \"./node_modules/core-js/modules/es7.math.clamp.js\");\n__webpack_require__(/*! ./modules/es7.math.deg-per-rad */ \"./node_modules/core-js/modules/es7.math.deg-per-rad.js\");\n__webpack_require__(/*! ./modules/es7.math.degrees */ \"./node_modules/core-js/modules/es7.math.degrees.js\");\n__webpack_require__(/*! ./modules/es7.math.fscale */ \"./node_modules/core-js/modules/es7.math.fscale.js\");\n__webpack_require__(/*! ./modules/es7.math.iaddh */ \"./node_modules/core-js/modules/es7.math.iaddh.js\");\n__webpack_require__(/*! ./modules/es7.math.isubh */ \"./node_modules/core-js/modules/es7.math.isubh.js\");\n__webpack_require__(/*! ./modules/es7.math.imulh */ \"./node_modules/core-js/modules/es7.math.imulh.js\");\n__webpack_require__(/*! ./modules/es7.math.rad-per-deg */ \"./node_modules/core-js/modules/es7.math.rad-per-deg.js\");\n__webpack_require__(/*! ./modules/es7.math.radians */ \"./node_modules/core-js/modules/es7.math.radians.js\");\n__webpack_require__(/*! ./modules/es7.math.scale */ \"./node_modules/core-js/modules/es7.math.scale.js\");\n__webpack_require__(/*! ./modules/es7.math.umulh */ \"./node_modules/core-js/modules/es7.math.umulh.js\");\n__webpack_require__(/*! ./modules/es7.math.signbit */ \"./node_modules/core-js/modules/es7.math.signbit.js\");\n__webpack_require__(/*! ./modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n__webpack_require__(/*! ./modules/es7.promise.try */ \"./node_modules/core-js/modules/es7.promise.try.js\");\n__webpack_require__(/*! ./modules/es7.reflect.define-metadata */ \"./node_modules/core-js/modules/es7.reflect.define-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.delete-metadata */ \"./node_modules/core-js/modules/es7.reflect.delete-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.get-metadata */ \"./node_modules/core-js/modules/es7.reflect.get-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.get-metadata-keys */ \"./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js\");\n__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata */ \"./node_modules/core-js/modules/es7.reflect.get-own-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata-keys */ \"./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js\");\n__webpack_require__(/*! ./modules/es7.reflect.has-metadata */ \"./node_modules/core-js/modules/es7.reflect.has-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.has-own-metadata */ \"./node_modules/core-js/modules/es7.reflect.has-own-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.metadata */ \"./node_modules/core-js/modules/es7.reflect.metadata.js\");\n__webpack_require__(/*! ./modules/es7.asap */ \"./node_modules/core-js/modules/es7.asap.js\");\n__webpack_require__(/*! ./modules/es7.observable */ \"./node_modules/core-js/modules/es7.observable.js\");\n__webpack_require__(/*! ./modules/web.timers */ \"./node_modules/core-js/modules/web.timers.js\");\n__webpack_require__(/*! ./modules/web.immediate */ \"./node_modules/core-js/modules/web.immediate.js\");\n__webpack_require__(/*! ./modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\nmodule.exports = __webpack_require__(/*! ./modules/_core */ \"./node_modules/core-js/modules/_core.js\");\n\n//# sourceURL=webpack://RiveScript/./node_modules/core-js/shim.js?");

/***/ }),

/***/ "./node_modules/fs-readdir-recursive/index.js":
/*!****************************************************!*\
  !*** ./node_modules/fs-readdir-recursive/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar fs = __webpack_require__(/*! fs */ \"./node_modules/node-libs-browser/mock/empty.js\");\nvar path = __webpack_require__(/*! path */ \"./node_modules/path-browserify/index.js\");\n\nmodule.exports = read;\n\nfunction read(root, filter, files, prefix) {\n  prefix = prefix || '';\n  files = files || [];\n  filter = filter || noDotFiles;\n\n  var dir = path.join(root, prefix);\n  if (!fs.existsSync(dir)) return files;\n  if (fs.statSync(dir).isDirectory()) fs.readdirSync(dir).filter(function (name, index) {\n    return filter(name, index, dir);\n  }).forEach(function (name) {\n    read(root, filter, files, path.join(prefix, name));\n  });else files.push(prefix);\n\n  return files;\n}\n\nfunction noDotFiles(x) {\n  return x[0] !== '.';\n}\n\n//# sourceURL=webpack://RiveScript/./node_modules/fs-readdir-recursive/index.js?");

/***/ }),

/***/ "./node_modules/node-libs-browser/mock/empty.js":
/*!******************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/empty.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//# sourceURL=webpack://RiveScript/./node_modules/node-libs-browser/mock/empty.js?");

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n// resolves . and .. elements in a path array with directory names there\n// must be no slashes, empty elements, or device names (c:\\) in the array\n// (so also no leading and trailing slashes - it does not distinguish\n// relative and absolute paths)\nfunction normalizeArray(parts, allowAboveRoot) {\n  // if the path tries to go above the root, `up` ends up > 0\n  var up = 0;\n  for (var i = parts.length - 1; i >= 0; i--) {\n    var last = parts[i];\n    if (last === '.') {\n      parts.splice(i, 1);\n    } else if (last === '..') {\n      parts.splice(i, 1);\n      up++;\n    } else if (up) {\n      parts.splice(i, 1);\n      up--;\n    }\n  }\n\n  // if the path is allowed to go above the root, restore leading ..s\n  if (allowAboveRoot) {\n    for (; up--; up) {\n      parts.unshift('..');\n    }\n  }\n\n  return parts;\n}\n\n// Split a filename into [root, dir, basename, ext], unix version\n// 'root' is just a slash, or nothing.\nvar splitPathRe = /^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/;\nvar splitPath = function splitPath(filename) {\n  return splitPathRe.exec(filename).slice(1);\n};\n\n// path.resolve([from ...], to)\n// posix version\nexports.resolve = function () {\n  var resolvedPath = '',\n      resolvedAbsolute = false;\n\n  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {\n    var path = i >= 0 ? arguments[i] : process.cwd();\n\n    // Skip empty and invalid entries\n    if (typeof path !== 'string') {\n      throw new TypeError('Arguments to path.resolve must be strings');\n    } else if (!path) {\n      continue;\n    }\n\n    resolvedPath = path + '/' + resolvedPath;\n    resolvedAbsolute = path.charAt(0) === '/';\n  }\n\n  // At this point the path should be resolved to a full absolute path, but\n  // handle relative paths to be safe (might happen when process.cwd() fails)\n\n  // Normalize the path\n  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {\n    return !!p;\n  }), !resolvedAbsolute).join('/');\n\n  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';\n};\n\n// path.normalize(path)\n// posix version\nexports.normalize = function (path) {\n  var isAbsolute = exports.isAbsolute(path),\n      trailingSlash = substr(path, -1) === '/';\n\n  // Normalize the path\n  path = normalizeArray(filter(path.split('/'), function (p) {\n    return !!p;\n  }), !isAbsolute).join('/');\n\n  if (!path && !isAbsolute) {\n    path = '.';\n  }\n  if (path && trailingSlash) {\n    path += '/';\n  }\n\n  return (isAbsolute ? '/' : '') + path;\n};\n\n// posix version\nexports.isAbsolute = function (path) {\n  return path.charAt(0) === '/';\n};\n\n// posix version\nexports.join = function () {\n  var paths = Array.prototype.slice.call(arguments, 0);\n  return exports.normalize(filter(paths, function (p, index) {\n    if (typeof p !== 'string') {\n      throw new TypeError('Arguments to path.join must be strings');\n    }\n    return p;\n  }).join('/'));\n};\n\n// path.relative(from, to)\n// posix version\nexports.relative = function (from, to) {\n  from = exports.resolve(from).substr(1);\n  to = exports.resolve(to).substr(1);\n\n  function trim(arr) {\n    var start = 0;\n    for (; start < arr.length; start++) {\n      if (arr[start] !== '') break;\n    }\n\n    var end = arr.length - 1;\n    for (; end >= 0; end--) {\n      if (arr[end] !== '') break;\n    }\n\n    if (start > end) return [];\n    return arr.slice(start, end - start + 1);\n  }\n\n  var fromParts = trim(from.split('/'));\n  var toParts = trim(to.split('/'));\n\n  var length = Math.min(fromParts.length, toParts.length);\n  var samePartsLength = length;\n  for (var i = 0; i < length; i++) {\n    if (fromParts[i] !== toParts[i]) {\n      samePartsLength = i;\n      break;\n    }\n  }\n\n  var outputParts = [];\n  for (var i = samePartsLength; i < fromParts.length; i++) {\n    outputParts.push('..');\n  }\n\n  outputParts = outputParts.concat(toParts.slice(samePartsLength));\n\n  return outputParts.join('/');\n};\n\nexports.sep = '/';\nexports.delimiter = ':';\n\nexports.dirname = function (path) {\n  var result = splitPath(path),\n      root = result[0],\n      dir = result[1];\n\n  if (!root && !dir) {\n    // No dirname whatsoever\n    return '.';\n  }\n\n  if (dir) {\n    // It has a dirname, strip trailing slash\n    dir = dir.substr(0, dir.length - 1);\n  }\n\n  return root + dir;\n};\n\nexports.basename = function (path, ext) {\n  var f = splitPath(path)[2];\n  // TODO: make this comparison case-insensitive on windows?\n  if (ext && f.substr(-1 * ext.length) === ext) {\n    f = f.substr(0, f.length - ext.length);\n  }\n  return f;\n};\n\nexports.extname = function (path) {\n  return splitPath(path)[3];\n};\n\nfunction filter(xs, f) {\n  if (xs.filter) return xs.filter(f);\n  var res = [];\n  for (var i = 0; i < xs.length; i++) {\n    if (f(xs[i], i, xs)) res.push(xs[i]);\n  }\n  return res;\n}\n\n// String.prototype.substr - negative index don't work in IE8\nvar substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {\n  return str.substr(start, len);\n} : function (str, start, len) {\n  if (start < 0) start = str.length + start;\n  return str.substr(start, len);\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack://RiveScript/./node_modules/path-browserify/index.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout() {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n})();\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch (e) {\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch (e) {\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e) {\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e) {\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while (len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) {\n    return [];\n};\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () {\n    return '/';\n};\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function () {\n    return 0;\n};\n\n//# sourceURL=webpack://RiveScript/./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar g;\n\n// This works in non-strict mode\ng = function () {\n\treturn this;\n}();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif ((typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n//# sourceURL=webpack://RiveScript/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function () {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n//# sourceURL=webpack://RiveScript/(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/brain.js":
/*!**********************!*\
  !*** ./src/brain.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// RiveScript.js\n// https://www.rivescript.com/\n\n// This code is released under the MIT License.\n// See the \"LICENSE\" file for more information.\n\n// Brain logic for RiveScript\n\n\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nvar inherit_utils = __webpack_require__(/*! ./inheritance */ \"./src/inheritance.js\");\n\n/**\nBrain (RiveScript master)\n\nCreate a Brain object which handles the actual process of fetching a reply.\n*/\n\nvar Brain = function () {\n\tfunction Brain(master) {\n\t\t_classCallCheck(this, Brain);\n\n\t\tvar self = this;\n\n\t\tself.master = master;\n\t\tself.strict = master._strict;\n\t\tself.utf8 = master._utf8;\n\n\t\t// Private variables only relevant to the reply-answering part of RiveScript.\n\t\tself._currentUser = null; // The current user asking for a message\n\t}\n\n\t// Proxy functions\n\n\n\t_createClass(Brain, [{\n\t\tkey: \"say\",\n\t\tvalue: function say(message) {\n\t\t\treturn this.master.say(message);\n\t\t}\n\t}, {\n\t\tkey: \"warn\",\n\t\tvalue: function warn(message, filename, lineno) {\n\t\t\treturn this.master.warn(message, filename, lineno);\n\t\t}\n\n\t\t/**\n  async reply (string user, string msg[, scope])\n  \tFetch a reply for the user. This returns a Promise that may be awaited on.\n  */\n\n\t}, {\n\t\tkey: \"reply\",\n\t\tvalue: function () {\n\t\t\tvar _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user, msg, scope) {\n\t\t\t\tvar self, reply, begin, history;\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee$(_context) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\tself = this;\n\n\n\t\t\t\t\t\t\t\tself.say(\"Asked to reply to [\" + user + \"] \" + msg);\n\n\t\t\t\t\t\t\t\t// Store the current user's ID.\n\t\t\t\t\t\t\t\tself._currentUser = user;\n\n\t\t\t\t\t\t\t\t// Format their message.\n\t\t\t\t\t\t\t\tmsg = self.formatMessage(msg);\n\t\t\t\t\t\t\t\treply = \"\";\n\n\t\t\t\t\t\t\t\t// Set initial match to be undefined\n\n\t\t\t\t\t\t\t\t_context.next = 7;\n\t\t\t\t\t\t\t\treturn self.master._session.set(user, {\n\t\t\t\t\t\t\t\t\t__initialmatch__: null\n\t\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\t\tcase 7:\n\t\t\t\t\t\t\t\tif (!self.master._topics.__begin__) {\n\t\t\t\t\t\t\t\t\t_context.next = 21;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t_context.next = 10;\n\t\t\t\t\t\t\t\treturn self._getReply(user, \"request\", \"begin\", 0, scope);\n\n\t\t\t\t\t\t\tcase 10:\n\t\t\t\t\t\t\t\tbegin = _context.sent;\n\n\t\t\t\t\t\t\t\tif (!(begin.indexOf(\"{ok}\") > -1)) {\n\t\t\t\t\t\t\t\t\t_context.next = 16;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t_context.next = 14;\n\t\t\t\t\t\t\t\treturn self._getReply(user, msg, \"normal\", 0, scope);\n\n\t\t\t\t\t\t\tcase 14:\n\t\t\t\t\t\t\t\treply = _context.sent;\n\n\t\t\t\t\t\t\t\tbegin = begin.replace(/\\{ok\\}/g, reply);\n\n\t\t\t\t\t\t\tcase 16:\n\t\t\t\t\t\t\t\t_context.next = 18;\n\t\t\t\t\t\t\t\treturn self.processTags(user, msg, begin, [], [], 0, scope);\n\n\t\t\t\t\t\t\tcase 18:\n\t\t\t\t\t\t\t\treply = _context.sent;\n\t\t\t\t\t\t\t\t_context.next = 24;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 21:\n\t\t\t\t\t\t\t\t_context.next = 23;\n\t\t\t\t\t\t\t\treturn self._getReply(user, msg, \"normal\", 0, scope);\n\n\t\t\t\t\t\t\tcase 23:\n\t\t\t\t\t\t\t\treply = _context.sent;\n\n\t\t\t\t\t\t\tcase 24:\n\t\t\t\t\t\t\t\t_context.next = 26;\n\t\t\t\t\t\t\t\treturn self.master._session.get(user, \"__history__\");\n\n\t\t\t\t\t\t\tcase 26:\n\t\t\t\t\t\t\t\thistory = _context.sent;\n\n\t\t\t\t\t\t\t\tif (history == \"undefined\") {\n\t\t\t\t\t\t\t\t\t// purposeful typecast\n\t\t\t\t\t\t\t\t\thistory = newHistory();\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\t// If modifying it fails, the data was bad, and reset it.\n\t\t\t\t\t\t\t\t\thistory.input.pop();\n\t\t\t\t\t\t\t\t\thistory.input.unshift(msg);\n\t\t\t\t\t\t\t\t\thistory.reply.pop();\n\t\t\t\t\t\t\t\t\thistory.reply.unshift(reply);\n\t\t\t\t\t\t\t\t} catch (e) {\n\t\t\t\t\t\t\t\t\thistory = newHistory();\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t_context.next = 31;\n\t\t\t\t\t\t\t\treturn self.master._session.set(user, {\n\t\t\t\t\t\t\t\t\t__history__: history\n\t\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\t\tcase 31:\n\n\t\t\t\t\t\t\t\t// Unset the current user ID.\n\t\t\t\t\t\t\t\tself._currentUser = null;\n\n\t\t\t\t\t\t\t\treturn _context.abrupt(\"return\", reply);\n\n\t\t\t\t\t\t\tcase 33:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee, this);\n\t\t\t}));\n\n\t\t\tfunction reply(_x, _x2, _x3) {\n\t\t\t\treturn _ref.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn reply;\n\t\t}()\n\n\t\t/**\n  async _getReply (string user, string msg, string context, int step, scope)\n  \tThe internal reply method. DO NOT CALL THIS DIRECTLY.\n  \t* user, msg and scope are the same as reply()\n  * context = \"normal\" or \"begin\"\n  * step = the recursion depth\n  * scope = the call scope for object macros\n  */\n\n\t}, {\n\t\tkey: \"_getReply\",\n\t\tvalue: function () {\n\t\t\tvar _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(user, msg, context, step, scope) {\n\t\t\t\tvar self, topic, stars, thatstars, reply, history, matched, matchedTrigger, foundMatch, allTopics, j, len, top, lastReply, k, len1, trig, pattern, botside, match, userSide, regexp, isAtomic, isMatch, _match, l, _len, _trig, _pattern, _regexp, _isAtomic, _isMatch, _match2, i, _len2, lastTriggers, n, redirect, o, len4, row, halves, condition, left, eq, right, potreply, passed, bucket, q, len5, rep, weight, _match3, _i, choice, _match4, giveup, name, _name, value;\n\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee2$(_context2) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context2.prev = _context2.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\tself = this;\n\n\t\t\t\t\t\t\t\t// Needed to sort replies?\n\n\t\t\t\t\t\t\t\tif (self.master._sorted.topics) {\n\t\t\t\t\t\t\t\t\t_context2.next = 4;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tself.warn(\"You forgot to call sortReplies()!\");\n\t\t\t\t\t\t\t\treturn _context2.abrupt(\"return\", \"ERR: Replies Not Sorted\");\n\n\t\t\t\t\t\t\tcase 4:\n\t\t\t\t\t\t\t\t_context2.next = 6;\n\t\t\t\t\t\t\t\treturn self.master.getUservar(user, \"topic\");\n\n\t\t\t\t\t\t\tcase 6:\n\t\t\t\t\t\t\t\ttopic = _context2.sent;\n\n\t\t\t\t\t\t\t\tif (topic === null || topic === \"undefined\") {\n\t\t\t\t\t\t\t\t\ttopic = \"random\";\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tstars = [];\n\t\t\t\t\t\t\t\tthatstars = []; // For %Previous\n\n\t\t\t\t\t\t\t\treply = \"\";\n\n\t\t\t\t\t\t\t\t// Avoid letting them fall into a missing topic.\n\n\t\t\t\t\t\t\t\tif (self.master._topics[topic]) {\n\t\t\t\t\t\t\t\t\t_context2.next = 16;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tself.warn(\"User \" + user + \" was in an empty topic named '\" + topic + \"'\");\n\t\t\t\t\t\t\t\ttopic = \"random\";\n\t\t\t\t\t\t\t\t_context2.next = 16;\n\t\t\t\t\t\t\t\treturn self.master.setUservar(user, \"topic\", topic);\n\n\t\t\t\t\t\t\tcase 16:\n\t\t\t\t\t\t\t\tif (!(step > self.master._depth)) {\n\t\t\t\t\t\t\t\t\t_context2.next = 18;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\treturn _context2.abrupt(\"return\", self.master.errors.deepRecursion);\n\n\t\t\t\t\t\t\tcase 18:\n\n\t\t\t\t\t\t\t\t// Are we in the BEGIN block?\n\t\t\t\t\t\t\t\tif (context === \"begin\") {\n\t\t\t\t\t\t\t\t\ttopic = \"__begin__\";\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// Initialize this user's history.\n\t\t\t\t\t\t\t\t_context2.next = 21;\n\t\t\t\t\t\t\t\treturn self.master._session.get(user, \"__history__\");\n\n\t\t\t\t\t\t\tcase 21:\n\t\t\t\t\t\t\t\thistory = _context2.sent;\n\n\t\t\t\t\t\t\t\tif (!(history == \"undefined\")) {\n\t\t\t\t\t\t\t\t\t_context2.next = 26;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// purposeful typecast\n\t\t\t\t\t\t\t\thistory = newHistory();\n\t\t\t\t\t\t\t\t_context2.next = 26;\n\t\t\t\t\t\t\t\treturn self.master._session.set(user, {\n\t\t\t\t\t\t\t\t\t__history__: history\n\t\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\t\tcase 26:\n\t\t\t\t\t\t\t\tif (self.master._topics[topic]) {\n\t\t\t\t\t\t\t\t\t_context2.next = 28;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\treturn _context2.abrupt(\"return\", \"ERR: No default topic 'random' was found!\");\n\n\t\t\t\t\t\t\tcase 28:\n\n\t\t\t\t\t\t\t\t// Create a pointer for the matched data when we find it.\n\t\t\t\t\t\t\t\tmatched = null;\n\t\t\t\t\t\t\t\tmatchedTrigger = null;\n\t\t\t\t\t\t\t\tfoundMatch = false;\n\n\t\t\t\t\t\t\t\t// See if there were any %Previous's in this topic, or any topic related\n\t\t\t\t\t\t\t\t// to it. This should only be done the first time -- not during a recursive\n\t\t\t\t\t\t\t\t// redirection. This is because in a redirection, \"lastreply\" is still gonna\n\t\t\t\t\t\t\t\t// be the same as it was the first time, resulting in an infinite loop!\n\n\t\t\t\t\t\t\t\tif (!(step === 0)) {\n\t\t\t\t\t\t\t\t\t_context2.next = 78;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tallTopics = [topic];\n\n\t\t\t\t\t\t\t\tif (self.master._topics[topic].includes || self.master._topics[topic].inherits) {\n\t\t\t\t\t\t\t\t\t// Get ALL the topics!\n\t\t\t\t\t\t\t\t\tallTopics = inherit_utils.getTopicTree(self.master, topic);\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// Scan them all.\n\t\t\t\t\t\t\t\tj = 0, len = allTopics.length;\n\n\t\t\t\t\t\t\tcase 35:\n\t\t\t\t\t\t\t\tif (!(j < len)) {\n\t\t\t\t\t\t\t\t\t_context2.next = 78;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\ttop = allTopics[j];\n\n\t\t\t\t\t\t\t\tself.say(\"Checking topic \" + top + \" for any %Previous's\");\n\n\t\t\t\t\t\t\t\tif (!self.master._sorted.thats[top].length) {\n\t\t\t\t\t\t\t\t\t_context2.next = 74;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// There's one here!\n\t\t\t\t\t\t\t\tself.say(\"There's a %Previous in this topic!\");\n\n\t\t\t\t\t\t\t\t// Do we have history yet?\n\t\t\t\t\t\t\t\tlastReply = history.reply ? history.reply[0] : \"undefined\";\n\n\t\t\t\t\t\t\t\t// Format the bot's last reply the same way as the human's.\n\n\t\t\t\t\t\t\t\tlastReply = self.formatMessage(lastReply, true);\n\t\t\t\t\t\t\t\tself.say(\"Last reply: \" + lastReply);\n\n\t\t\t\t\t\t\t\t// See if it's a match\n\t\t\t\t\t\t\t\tk = 0, len1 = self.master._sorted.thats[top].length;\n\n\t\t\t\t\t\t\tcase 44:\n\t\t\t\t\t\t\t\tif (!(k < len1)) {\n\t\t\t\t\t\t\t\t\t_context2.next = 72;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\ttrig = self.master._sorted.thats[top][k];\n\t\t\t\t\t\t\t\tpattern = trig[1].previous;\n\t\t\t\t\t\t\t\t_context2.next = 49;\n\t\t\t\t\t\t\t\treturn self.triggerRegexp(user, pattern);\n\n\t\t\t\t\t\t\tcase 49:\n\t\t\t\t\t\t\t\tbotside = _context2.sent;\n\n\n\t\t\t\t\t\t\t\tself.say(\"Try to match lastReply (\" + lastReply + \") to \" + botside);\n\n\t\t\t\t\t\t\t\t// Match?\n\t\t\t\t\t\t\t\tmatch = lastReply.match(new RegExp(\"^\" + botside + \"$\"));\n\n\t\t\t\t\t\t\t\tif (!match) {\n\t\t\t\t\t\t\t\t\t_context2.next = 69;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// Huzzah! See if OUR message is right too.\n\t\t\t\t\t\t\t\tself.say(\"Bot side matched!\");\n\n\t\t\t\t\t\t\t\tthatstars = match; // Collect the bot stars in case we need them\n\t\t\t\t\t\t\t\tthatstars.shift();\n\n\t\t\t\t\t\t\t\t// Compare the triggers to the user's message.\n\t\t\t\t\t\t\t\tuserSide = trig[1];\n\t\t\t\t\t\t\t\t_context2.next = 59;\n\t\t\t\t\t\t\t\treturn self.triggerRegexp(user, userSide.trigger);\n\n\t\t\t\t\t\t\tcase 59:\n\t\t\t\t\t\t\t\tregexp = _context2.sent;\n\n\t\t\t\t\t\t\t\tself.say(\"Try to match \\\"\" + msg + \"\\\" against \" + userSide.trigger + \" (\" + regexp + \")\");\n\n\t\t\t\t\t\t\t\t// If the trigger is atomic, we don't need to bother with the regexp engine.\n\t\t\t\t\t\t\t\tisAtomic = utils.isAtomic(userSide.trigger);\n\t\t\t\t\t\t\t\tisMatch = false;\n\n\t\t\t\t\t\t\t\tif (isAtomic) {\n\t\t\t\t\t\t\t\t\tif (msg === regexp) {\n\t\t\t\t\t\t\t\t\t\tisMatch = true;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t_match = msg.match(new RegExp(\"^\" + regexp + \"$\"));\n\n\t\t\t\t\t\t\t\t\tif (_match) {\n\t\t\t\t\t\t\t\t\t\tisMatch = true;\n\t\t\t\t\t\t\t\t\t\t// Get the stars\n\t\t\t\t\t\t\t\t\t\tstars = _match;\n\t\t\t\t\t\t\t\t\t\tif (stars.length >= 1) {\n\t\t\t\t\t\t\t\t\t\t\tstars.shift();\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// Was it a match?\n\n\t\t\t\t\t\t\t\tif (!isMatch) {\n\t\t\t\t\t\t\t\t\t_context2.next = 69;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// Keep the trigger pointer.\n\t\t\t\t\t\t\t\tmatched = userSide;\n\t\t\t\t\t\t\t\tfoundMatch = true;\n\t\t\t\t\t\t\t\tmatchedTrigger = userSide.trigger;\n\t\t\t\t\t\t\t\treturn _context2.abrupt(\"break\", 72);\n\n\t\t\t\t\t\t\tcase 69:\n\t\t\t\t\t\t\t\tk++;\n\t\t\t\t\t\t\t\t_context2.next = 44;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 72:\n\t\t\t\t\t\t\t\t_context2.next = 75;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 74:\n\t\t\t\t\t\t\t\tself.say(\"No %Previous in this topic!\");\n\n\t\t\t\t\t\t\tcase 75:\n\t\t\t\t\t\t\t\tj++;\n\t\t\t\t\t\t\t\t_context2.next = 35;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 78:\n\t\t\t\t\t\t\t\tif (foundMatch) {\n\t\t\t\t\t\t\t\t\t_context2.next = 100;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tself.say(\"Searching their topic for a match...\");\n\t\t\t\t\t\t\t\tl = 0, _len = self.master._sorted.topics[topic].length;\n\n\t\t\t\t\t\t\tcase 81:\n\t\t\t\t\t\t\t\tif (!(l < _len)) {\n\t\t\t\t\t\t\t\t\t_context2.next = 100;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t_trig = self.master._sorted.topics[topic][l];\n\t\t\t\t\t\t\t\t_pattern = _trig[0];\n\t\t\t\t\t\t\t\t_context2.next = 86;\n\t\t\t\t\t\t\t\treturn self.triggerRegexp(user, _pattern);\n\n\t\t\t\t\t\t\tcase 86:\n\t\t\t\t\t\t\t\t_regexp = _context2.sent;\n\n\n\t\t\t\t\t\t\t\tself.say(\"Try to match \\\"\" + msg + \"\\\" against \" + _pattern + \" (\" + _regexp + \")\");\n\n\t\t\t\t\t\t\t\t// If the trigger is atomic, we don't need to bother with the regexp engine.\n\t\t\t\t\t\t\t\t_isAtomic = utils.isAtomic(_pattern);\n\t\t\t\t\t\t\t\t_isMatch = false;\n\n\t\t\t\t\t\t\t\tif (_isAtomic) {\n\t\t\t\t\t\t\t\t\tif (msg === _regexp) {\n\t\t\t\t\t\t\t\t\t\t_isMatch = true;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t// Non-atomic triggers always need the regexp.\n\t\t\t\t\t\t\t\t\t_match2 = msg.match(new RegExp(\"^\" + _regexp + \"$\"));\n\n\t\t\t\t\t\t\t\t\tif (_match2) {\n\t\t\t\t\t\t\t\t\t\t// The regexp matched!\n\t\t\t\t\t\t\t\t\t\t_isMatch = true;\n\n\t\t\t\t\t\t\t\t\t\t// Collect the stars\n\t\t\t\t\t\t\t\t\t\tstars = [];\n\t\t\t\t\t\t\t\t\t\tif (_match2.length > 1) {\n\t\t\t\t\t\t\t\t\t\t\tfor (i = 1, _len2 = _match2.length; i < _len2; i++) {\n\t\t\t\t\t\t\t\t\t\t\t\tstars.push(_match2[i]);\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// A match somehow?\n\n\t\t\t\t\t\t\t\tif (!_isMatch) {\n\t\t\t\t\t\t\t\t\t_context2.next = 97;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tself.say(\"Found a match!\");\n\n\t\t\t\t\t\t\t\t// Keep the pointer to this trigger's data.\n\t\t\t\t\t\t\t\tmatched = _trig[1];\n\t\t\t\t\t\t\t\tfoundMatch = true;\n\t\t\t\t\t\t\t\tmatchedTrigger = _pattern;\n\t\t\t\t\t\t\t\treturn _context2.abrupt(\"break\", 100);\n\n\t\t\t\t\t\t\tcase 97:\n\t\t\t\t\t\t\t\tl++;\n\t\t\t\t\t\t\t\t_context2.next = 81;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 100:\n\t\t\t\t\t\t\t\t_context2.next = 102;\n\t\t\t\t\t\t\t\treturn self.master._session.set(user, { __lastmatch__: matchedTrigger });\n\n\t\t\t\t\t\t\tcase 102:\n\t\t\t\t\t\t\t\tlastTriggers = [];\n\n\t\t\t\t\t\t\t\tif (!(step === 0)) {\n\t\t\t\t\t\t\t\t\t_context2.next = 106;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t_context2.next = 106;\n\t\t\t\t\t\t\t\treturn self.master._session.set(user, {\n\t\t\t\t\t\t\t\t\t// Store initial matched trigger. Like __lastmatch__, this can be undefined.\n\t\t\t\t\t\t\t\t\t__initialmatch__: matchedTrigger,\n\n\t\t\t\t\t\t\t\t\t// Also initialize __last_triggers__ which will keep all matched triggers\n\t\t\t\t\t\t\t\t\t__last_triggers__: lastTriggers\n\t\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\t\tcase 106:\n\t\t\t\t\t\t\t\tif (!matched) {\n\t\t\t\t\t\t\t\t\t_context2.next = 160;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// Keep the current match\n\t\t\t\t\t\t\t\tlastTriggers.push(matched);\n\t\t\t\t\t\t\t\t_context2.next = 110;\n\t\t\t\t\t\t\t\treturn self.master._session.set(user, { __last_triggers__: lastTriggers });\n\n\t\t\t\t\t\t\tcase 110:\n\t\t\t\t\t\t\t\tn = 0;\n\n\t\t\t\t\t\t\tcase 111:\n\t\t\t\t\t\t\t\tif (!(n < 1)) {\n\t\t\t\t\t\t\t\t\t_context2.next = 160;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tif (!(matched.redirect != null)) {\n\t\t\t\t\t\t\t\t\t_context2.next = 122;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tself.say(\"Redirecting us to \" + matched.redirect);\n\t\t\t\t\t\t\t\t_context2.next = 116;\n\t\t\t\t\t\t\t\treturn self.processTags(user, msg, matched.redirect, stars, thatstars, step, scope);\n\n\t\t\t\t\t\t\tcase 116:\n\t\t\t\t\t\t\t\tredirect = _context2.sent;\n\n\n\t\t\t\t\t\t\t\tself.say(\"Pretend user said: \" + redirect);\n\t\t\t\t\t\t\t\t_context2.next = 120;\n\t\t\t\t\t\t\t\treturn self._getReply(user, redirect, context, step + 1, scope);\n\n\t\t\t\t\t\t\tcase 120:\n\t\t\t\t\t\t\t\treply = _context2.sent;\n\t\t\t\t\t\t\t\treturn _context2.abrupt(\"break\", 160);\n\n\t\t\t\t\t\t\tcase 122:\n\t\t\t\t\t\t\t\to = 0, len4 = matched.condition.length;\n\n\t\t\t\t\t\t\tcase 123:\n\t\t\t\t\t\t\t\tif (!(o < len4)) {\n\t\t\t\t\t\t\t\t\t_context2.next = 150;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\trow = matched.condition[o];\n\t\t\t\t\t\t\t\thalves = row.split(/\\s*=>\\s*/);\n\n\t\t\t\t\t\t\t\tif (!(halves && halves.length === 2)) {\n\t\t\t\t\t\t\t\t\t_context2.next = 147;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tcondition = halves[0].match(/^(.+?)\\s+(==|eq|!=|ne|<>|<|<=|>|>=)\\s+(.*?)$/);\n\n\t\t\t\t\t\t\t\tif (!condition) {\n\t\t\t\t\t\t\t\t\t_context2.next = 147;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tleft = utils.strip(condition[1]);\n\t\t\t\t\t\t\t\teq = condition[2];\n\t\t\t\t\t\t\t\tright = utils.strip(condition[3]);\n\t\t\t\t\t\t\t\tpotreply = halves[1].trim();\n\n\t\t\t\t\t\t\t\t// Process tags all around\n\n\t\t\t\t\t\t\t\t_context2.next = 135;\n\t\t\t\t\t\t\t\treturn self.processTags(user, msg, left, stars, thatstars, step, scope);\n\n\t\t\t\t\t\t\tcase 135:\n\t\t\t\t\t\t\t\tleft = _context2.sent;\n\t\t\t\t\t\t\t\t_context2.next = 138;\n\t\t\t\t\t\t\t\treturn self.processTags(user, msg, right, stars, thatstars, step, scope);\n\n\t\t\t\t\t\t\tcase 138:\n\t\t\t\t\t\t\t\tright = _context2.sent;\n\n\n\t\t\t\t\t\t\t\t// Defaults?\n\t\t\t\t\t\t\t\tif (left.length === 0) {\n\t\t\t\t\t\t\t\t\tleft = \"undefined\";\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tif (right.length === 0) {\n\t\t\t\t\t\t\t\t\tright = \"undefined\";\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tself.say(\"Check if \" + left + \" \" + eq + \" \" + right);\n\n\t\t\t\t\t\t\t\t// Validate it\n\t\t\t\t\t\t\t\tpassed = false;\n\n\t\t\t\t\t\t\t\tif (eq === \"eq\" || eq === \"==\") {\n\t\t\t\t\t\t\t\t\tif (left === right) {\n\t\t\t\t\t\t\t\t\t\tpassed = true;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t} else if (eq === \"ne\" || eq === \"!=\" || eq === \"<>\") {\n\t\t\t\t\t\t\t\t\tif (left !== right) {\n\t\t\t\t\t\t\t\t\t\tpassed = true;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\t\t// Dealing with numbers here\n\t\t\t\t\t\t\t\t\t\tleft = parseInt(left);\n\t\t\t\t\t\t\t\t\t\tright = parseInt(right);\n\t\t\t\t\t\t\t\t\t\tif (eq === \"<\" && left < right) {\n\t\t\t\t\t\t\t\t\t\t\tpassed = true;\n\t\t\t\t\t\t\t\t\t\t} else if (eq === \"<=\" && left <= right) {\n\t\t\t\t\t\t\t\t\t\t\tpassed = true;\n\t\t\t\t\t\t\t\t\t\t} else if (eq === \">\" && left > right) {\n\t\t\t\t\t\t\t\t\t\t\tpassed = true;\n\t\t\t\t\t\t\t\t\t\t} else if (eq === \">=\" && left >= right) {\n\t\t\t\t\t\t\t\t\t\t\tpassed = true;\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t} catch (error) {\n\t\t\t\t\t\t\t\t\t\te = error;\n\t\t\t\t\t\t\t\t\t\tself.warn(\"Failed to evaluate numeric condition!\");\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// OK?\n\n\t\t\t\t\t\t\t\tif (!passed) {\n\t\t\t\t\t\t\t\t\t_context2.next = 147;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\treply = potreply;\n\t\t\t\t\t\t\t\treturn _context2.abrupt(\"break\", 150);\n\n\t\t\t\t\t\t\tcase 147:\n\t\t\t\t\t\t\t\to++;\n\t\t\t\t\t\t\t\t_context2.next = 123;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 150:\n\t\t\t\t\t\t\t\tif (!(reply !== null && reply.length > 0)) {\n\t\t\t\t\t\t\t\t\t_context2.next = 152;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\treturn _context2.abrupt(\"break\", 160);\n\n\t\t\t\t\t\t\tcase 152:\n\n\t\t\t\t\t\t\t\t// Process weights in the replies.\n\t\t\t\t\t\t\t\tbucket = [];\n\n\t\t\t\t\t\t\t\tfor (q = 0, len5 = matched.reply.length; q < len5; q++) {\n\t\t\t\t\t\t\t\t\trep = matched.reply[q];\n\t\t\t\t\t\t\t\t\tweight = 1;\n\t\t\t\t\t\t\t\t\t_match3 = rep.match(/\\{weight=(\\d+?)\\}/i);\n\n\t\t\t\t\t\t\t\t\tif (_match3) {\n\t\t\t\t\t\t\t\t\t\tweight = _match3[1];\n\t\t\t\t\t\t\t\t\t\tif (weight <= 0) {\n\t\t\t\t\t\t\t\t\t\t\tself.warn(\"Can't have a weight <= 0!\");\n\t\t\t\t\t\t\t\t\t\t\tweight = 1;\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\tfor (_i = 0; _i < weight; _i++) {\n\t\t\t\t\t\t\t\t\t\tbucket.push(rep);\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// Get a random reply.\n\t\t\t\t\t\t\t\tchoice = parseInt(Math.random() * bucket.length);\n\n\t\t\t\t\t\t\t\treply = bucket[choice];\n\t\t\t\t\t\t\t\treturn _context2.abrupt(\"break\", 160);\n\n\t\t\t\t\t\t\tcase 157:\n\t\t\t\t\t\t\t\tn++;\n\t\t\t\t\t\t\t\t_context2.next = 111;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 160:\n\n\t\t\t\t\t\t\t\t// Still no reply?\n\t\t\t\t\t\t\t\tif (!foundMatch) {\n\t\t\t\t\t\t\t\t\treply = self.master.errors.replyNotMatched;\n\t\t\t\t\t\t\t\t} else if (reply === void 0 || reply.length === 0) {\n\t\t\t\t\t\t\t\t\treply = self.master.errors.replyNotFound;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tself.say(\"Reply: \" + reply);\n\n\t\t\t\t\t\t\t\t// Process tags for the BEGIN block.\n\n\t\t\t\t\t\t\t\tif (!(context === \"begin\")) {\n\t\t\t\t\t\t\t\t\t_context2.next = 194;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// The BEGIN block can set {topic} and user vars.\n\n\t\t\t\t\t\t\t\t// Topic setter\n\t\t\t\t\t\t\t\t_match4 = reply.match(/\\{topic=(.+?)\\}/i);\n\t\t\t\t\t\t\t\tgiveup = 0;\n\n\t\t\t\t\t\t\tcase 165:\n\t\t\t\t\t\t\t\tif (!_match4) {\n\t\t\t\t\t\t\t\t\t_context2.next = 177;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tgiveup++;\n\n\t\t\t\t\t\t\t\tif (!(giveup >= 50)) {\n\t\t\t\t\t\t\t\t\t_context2.next = 170;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tself.warn(\"Infinite loop looking for topic tag!\");\n\t\t\t\t\t\t\t\treturn _context2.abrupt(\"break\", 177);\n\n\t\t\t\t\t\t\tcase 170:\n\t\t\t\t\t\t\t\tname = _match4[1];\n\t\t\t\t\t\t\t\t_context2.next = 173;\n\t\t\t\t\t\t\t\treturn self.master.setUservar(user, \"topic\", name);\n\n\t\t\t\t\t\t\tcase 173:\n\t\t\t\t\t\t\t\treply = reply.replace(new RegExp(\"{topic=\" + utils.quotemeta(name) + \"}\", \"ig\"), \"\");\n\t\t\t\t\t\t\t\t_match4 = reply.match(/\\{topic=(.+?)\\}/i);\n\t\t\t\t\t\t\t\t_context2.next = 165;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 177:\n\n\t\t\t\t\t\t\t\t// Set user vars\n\t\t\t\t\t\t\t\t_match4 = reply.match(/<set (.+?)=(.+?)>/i);\n\t\t\t\t\t\t\t\tgiveup = 0;\n\n\t\t\t\t\t\t\tcase 179:\n\t\t\t\t\t\t\t\tif (!_match4) {\n\t\t\t\t\t\t\t\t\t_context2.next = 192;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tgiveup++;\n\n\t\t\t\t\t\t\t\tif (!(giveup >= 50)) {\n\t\t\t\t\t\t\t\t\t_context2.next = 184;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tself.warn(\"Infinite loop looking for set tag!\");\n\t\t\t\t\t\t\t\treturn _context2.abrupt(\"break\", 192);\n\n\t\t\t\t\t\t\tcase 184:\n\t\t\t\t\t\t\t\t_name = _match4[1];\n\t\t\t\t\t\t\t\tvalue = _match4[2];\n\t\t\t\t\t\t\t\t_context2.next = 188;\n\t\t\t\t\t\t\t\treturn self.master.setUservar(user, _name, value);\n\n\t\t\t\t\t\t\tcase 188:\n\t\t\t\t\t\t\t\treply = reply.replace(new RegExp(\"<set \" + utils.quotemeta(_name) + \"=\" + utils.quotemeta(value) + \">\", \"ig\"), \"\");\n\t\t\t\t\t\t\t\t_match4 = reply.match(/<set (.+?)=(.+?)>/i);\n\t\t\t\t\t\t\t\t_context2.next = 179;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 192:\n\t\t\t\t\t\t\t\t_context2.next = 195;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 194:\n\t\t\t\t\t\t\t\t// Process all the tags.\n\t\t\t\t\t\t\t\treply = self.processTags(user, msg, reply, stars, thatstars, step, scope);\n\n\t\t\t\t\t\t\tcase 195:\n\t\t\t\t\t\t\t\treturn _context2.abrupt(\"return\", reply);\n\n\t\t\t\t\t\t\tcase 196:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context2.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee2, this);\n\t\t\t}));\n\n\t\t\tfunction _getReply(_x4, _x5, _x6, _x7, _x8) {\n\t\t\t\treturn _ref2.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn _getReply;\n\t\t}()\n\n\t\t/**\n  string formatMessage (string msg)\n  \tFormat a user's message for safe processing.\n  */\n\n\t}, {\n\t\tkey: \"formatMessage\",\n\t\tvalue: function formatMessage(msg, botreply) {\n\t\t\tvar self = this;\n\n\t\t\t// Lowercase it.\n\t\t\tmsg = \"\" + msg;\n\t\t\tmsg = msg.toLowerCase();\n\n\t\t\t// Run substitutions and sanitize what's left.\n\t\t\tmsg = self.substitute(msg, \"sub\");\n\n\t\t\t// In UTF-8 mode, only strip metacharcters and HTML brackets (to protect\n\t\t\t// against obvious XSS attacks).\n\t\t\tif (self.utf8) {\n\t\t\t\tmsg = msg.replace(/[\\\\<>]+/, \"\");\n\n\t\t\t\tif (self.master.unicodePunctuation != null) {\n\t\t\t\t\tmsg = msg.replace(self.master.unicodePunctuation, \"\");\n\t\t\t\t}\n\n\t\t\t\t// For the bot's reply, also strip common punctuation.\n\t\t\t\tif (botreply != null) {\n\t\t\t\t\tmsg = msg.replace(/[.?,!;:@#$%^&*()]/, \"\");\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\t// For everything else, strip all non-alphanumerics\n\t\t\t\tmsg = utils.stripNasties(msg, self.utf8);\n\t\t\t}\n\n\t\t\t// cut leading and trailing blanks once punctuation dropped office\n\t\t\tmsg = msg.trim();\n\t\t\tmsg = msg.replace(/\\s+/g, \" \");\n\t\t\treturn msg;\n\t\t}\n\n\t\t/**\n  async triggerRegexp (string user, string trigger)\n  \tPrepares a trigger for the regular expression engine.\n  */\n\n\t}, {\n\t\tkey: \"triggerRegexp\",\n\t\tvalue: function () {\n\t\t\tvar _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(user, regexp) {\n\t\t\t\tvar self, match, giveup, parts, opts, j, len, p, pipes, _match5, name, rep, _match6, _name2, _rep, _match7, _name3, _rep2, history, ref, k, len1, type, i, value;\n\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee3$(_context3) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context3.prev = _context3.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\tself = this;\n\n\t\t\t\t\t\t\t\t// If the trigger is simply '*' then the * needs to become (.*?)\n\t\t\t\t\t\t\t\t// to match the blank string too.\n\n\t\t\t\t\t\t\t\tregexp = regexp.replace(/^\\*$/, \"<zerowidthstar>\");\n\n\t\t\t\t\t\t\t\t// Simple replacements.\n\t\t\t\t\t\t\t\tregexp = regexp.replace(/\\*/g, \"(.+?)\"); // Convert * into (.+?)\n\t\t\t\t\t\t\t\tregexp = regexp.replace(/#/g, \"(\\\\d+?)\"); // Convert # into (\\d+?)\n\t\t\t\t\t\t\t\tregexp = regexp.replace(/_/g, \"(\\\\w+?)\"); // Convert _ into (\\w+?)\n\t\t\t\t\t\t\t\tregexp = regexp.replace(/\\s*\\{weight=\\d+\\}\\s*/g, \"\"); // Remove {weight} tags\n\t\t\t\t\t\t\t\tregexp = regexp.replace(/<zerowidthstar>/g, \"(.*?)\");\n\t\t\t\t\t\t\t\tregexp = regexp.replace(/\\|{2,}/, '|'); // Remove empty entities\n\t\t\t\t\t\t\t\tregexp = regexp.replace(/(\\(|\\[)\\|/g, '$1'); // Remove empty entities from start of alt/opts\n\t\t\t\t\t\t\t\tregexp = regexp.replace(/\\|(\\)|\\])/g, '$1'); // Remove empty entities from end of alt/opts\n\n\t\t\t\t\t\t\t\t// UTF-8 mode special characters.\n\t\t\t\t\t\t\t\tif (self.utf8) {\n\t\t\t\t\t\t\t\t\tregexp = regexp.replace(/\\\\@/, \"\\\\u0040\"); // @ symbols conflict w/ arrays\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// Optionals.\n\t\t\t\t\t\t\t\tmatch = regexp.match(/\\[(.+?)\\]/);\n\t\t\t\t\t\t\t\tgiveup = 0;\n\n\t\t\t\t\t\t\tcase 13:\n\t\t\t\t\t\t\t\tif (!match) {\n\t\t\t\t\t\t\t\t\t_context3.next = 29;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tif (!(giveup++ > 50)) {\n\t\t\t\t\t\t\t\t\t_context3.next = 17;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tself.warn(\"Infinite loop when trying to process optionals in a trigger!\");\n\t\t\t\t\t\t\t\treturn _context3.abrupt(\"return\", \"\");\n\n\t\t\t\t\t\t\tcase 17:\n\n\t\t\t\t\t\t\t\t// The resulting regexp needs to work in two scenarios:\n\t\t\t\t\t\t\t\t// 1) The user included the optional word(s) in which case they must be\n\t\t\t\t\t\t\t\t//    in the message surrounded by a space or a word boundary (e.g. the\n\t\t\t\t\t\t\t\t//    end or beginning of their message)\n\t\t\t\t\t\t\t\t// 2) The user did not include the word, meaning the whole entire set of\n\t\t\t\t\t\t\t\t//    words should be \"OR'd\" with a word boundary or one or more spaces.\n\t\t\t\t\t\t\t\t//\n\t\t\t\t\t\t\t\t// The resulting regexp ends up looking like this, for a given input\n\t\t\t\t\t\t\t\t// trigger of: what is your [home|office] number\n\t\t\t\t\t\t\t\t// what is your(?:(?:\\s|\\b)+home(?:\\s|\\b)+|(?:\\s|\\b)+office(?:\\s|\\b)+|(?:\\b|\\s)+)number\n\t\t\t\t\t\t\t\t//\n\t\t\t\t\t\t\t\t// See https://github.com/aichaos/rivescript-js/issues/48\n\n\t\t\t\t\t\t\t\tparts = match[1].split(\"|\");\n\t\t\t\t\t\t\t\topts = [];\n\n\t\t\t\t\t\t\t\tfor (j = 0, len = parts.length; j < len; j++) {\n\t\t\t\t\t\t\t\t\tp = parts[j];\n\n\t\t\t\t\t\t\t\t\topts.push(\"(?:\\\\s|\\\\b)+\" + p + \"(?:\\\\s|\\\\b)+\");\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// If this optional had a star or anything in it, make it non-matching.\n\t\t\t\t\t\t\t\tpipes = opts.join(\"|\");\n\n\t\t\t\t\t\t\t\tpipes = pipes.replace(new RegExp(utils.quotemeta(\"(.+?)\"), \"g\"), \"(?:.+?)\");\n\t\t\t\t\t\t\t\tpipes = pipes.replace(new RegExp(utils.quotemeta(\"(\\\\d+?)\"), \"g\"), \"(?:\\\\d+?)\");\n\t\t\t\t\t\t\t\tpipes = pipes.replace(new RegExp(utils.quotemeta(\"(\\\\w+?)\"), \"g\"), \"(?:\\\\w+?)\");\n\n\t\t\t\t\t\t\t\t// Temporarily dummy out the literal square brackets so we don't loop forever\n\t\t\t\t\t\t\t\t// thinking that the [\\s\\b] part is another optional.\n\t\t\t\t\t\t\t\tpipes = pipes.replace(/\\[/g, \"__lb__\").replace(/\\]/g, \"__rb__\");\n\t\t\t\t\t\t\t\tregexp = regexp.replace(new RegExp(\"\\\\s*\\\\[\" + utils.quotemeta(match[1]) + \"\\\\]\\\\s*\"), \"(?:\" + pipes + \"|(?:\\\\b|\\\\s)+)\");\n\t\t\t\t\t\t\t\tmatch = regexp.match(/\\[(.+?)\\]/);\n\t\t\t\t\t\t\t\t_context3.next = 13;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 29:\n\n\t\t\t\t\t\t\t\t// Restore the literal square brackets.\n\t\t\t\t\t\t\t\tregexp = regexp.replace(/__lb__/g, \"[\").replace(/__rb__/g, \"]\");\n\n\t\t\t\t\t\t\t\t// _ wildcards can't match numbers! Quick note on why I did it this way:\n\t\t\t\t\t\t\t\t// the initial replacement above (_ => (\\w+?)) needs to be \\w because the\n\t\t\t\t\t\t\t\t// square brackets in [\\s\\d] will confuse the optionals logic just above.\n\t\t\t\t\t\t\t\t// So then we switch it back down here. Also, we don't just use \\w+ because\n\t\t\t\t\t\t\t\t// that matches digits, and similarly [A-Za-z] doesn't work with Unicode,\n\t\t\t\t\t\t\t\t// so this regexp excludes spaces and digits instead of including letters.\n\t\t\t\t\t\t\t\tregexp = regexp.replace(/\\\\w/, \"[^\\\\s\\\\d]\");\n\n\t\t\t\t\t\t\t\t// Filter in arrays.\n\t\t\t\t\t\t\t\tgiveup = 0;\n\n\t\t\t\t\t\t\tcase 32:\n\t\t\t\t\t\t\t\tif (!(regexp.indexOf(\"@\") > -1)) {\n\t\t\t\t\t\t\t\t\t_context3.next = 39;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tif (!(giveup++ > 50)) {\n\t\t\t\t\t\t\t\t\t_context3.next = 35;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\treturn _context3.abrupt(\"break\", 39);\n\n\t\t\t\t\t\t\tcase 35:\n\t\t\t\t\t\t\t\t_match5 = regexp.match(/\\@(.+?)\\b/);\n\n\t\t\t\t\t\t\t\tif (_match5) {\n\t\t\t\t\t\t\t\t\tname = _match5[1];\n\t\t\t\t\t\t\t\t\trep = \"\";\n\n\t\t\t\t\t\t\t\t\tif (self.master._array[name]) {\n\t\t\t\t\t\t\t\t\t\trep = \"(?:\" + self.master._array[name].join(\"|\") + \")\";\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tregexp = regexp.replace(new RegExp(\"@\" + utils.quotemeta(name) + \"\\\\b\"), rep);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t_context3.next = 32;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 39:\n\n\t\t\t\t\t\t\t\t// Filter in bot variables.\n\t\t\t\t\t\t\t\tgiveup = 0;\n\n\t\t\t\t\t\t\tcase 40:\n\t\t\t\t\t\t\t\tif (!(regexp.indexOf(\"<bot\") > -1)) {\n\t\t\t\t\t\t\t\t\t_context3.next = 47;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tif (!(giveup++ > 50)) {\n\t\t\t\t\t\t\t\t\t_context3.next = 43;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\treturn _context3.abrupt(\"break\", 47);\n\n\t\t\t\t\t\t\tcase 43:\n\t\t\t\t\t\t\t\t_match6 = regexp.match(/<bot (.+?)>/i);\n\n\t\t\t\t\t\t\t\tif (_match6) {\n\t\t\t\t\t\t\t\t\t_name2 = _match6[1];\n\t\t\t\t\t\t\t\t\t_rep = '';\n\n\t\t\t\t\t\t\t\t\tif (self.master._var[_name2]) {\n\t\t\t\t\t\t\t\t\t\t_rep = utils.stripNasties(self.master._var[_name2], self.utf8);\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tregexp = regexp.replace(new RegExp(\"<bot \" + utils.quotemeta(_name2) + \">\"), _rep.toLowerCase());\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t_context3.next = 40;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 47:\n\t\t\t\t\t\t\t\t// Filter in user variables.\n\t\t\t\t\t\t\t\tgiveup = 0;\n\n\t\t\t\t\t\t\tcase 48:\n\t\t\t\t\t\t\t\tif (!(regexp.indexOf(\"<get\") > -1)) {\n\t\t\t\t\t\t\t\t\t_context3.next = 60;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tif (!(giveup++ > 50)) {\n\t\t\t\t\t\t\t\t\t_context3.next = 51;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\treturn _context3.abrupt(\"break\", 60);\n\n\t\t\t\t\t\t\tcase 51:\n\t\t\t\t\t\t\t\t_match7 = regexp.match(/<get (.+?)>/i);\n\n\t\t\t\t\t\t\t\tif (!_match7) {\n\t\t\t\t\t\t\t\t\t_context3.next = 58;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t_name3 = _match7[1];\n\t\t\t\t\t\t\t\t_context3.next = 56;\n\t\t\t\t\t\t\t\treturn self.master.getUservar(user, _name3);\n\n\t\t\t\t\t\t\tcase 56:\n\t\t\t\t\t\t\t\t_rep2 = _context3.sent;\n\n\t\t\t\t\t\t\t\tregexp = regexp.replace(new RegExp(\"<get \" + utils.quotemeta(_name3) + \">\", \"ig\"), _rep2.toLowerCase());\n\n\t\t\t\t\t\t\tcase 58:\n\t\t\t\t\t\t\t\t_context3.next = 48;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 60:\n\t\t\t\t\t\t\t\t// Filter in input/reply tags.\n\t\t\t\t\t\t\t\tgiveup = 0;\n\t\t\t\t\t\t\t\tregexp = regexp.replace(/<input>/i, \"<input1>\");\n\t\t\t\t\t\t\t\tregexp = regexp.replace(/<reply>/i, \"<reply1>\");\n\t\t\t\t\t\t\t\t_context3.next = 65;\n\t\t\t\t\t\t\t\treturn self.master._session.get(user, \"__history__\");\n\n\t\t\t\t\t\t\tcase 65:\n\t\t\t\t\t\t\t\thistory = _context3.sent;\n\n\t\t\t\t\t\t\t\tif (history == \"undefined\") {\n\t\t\t\t\t\t\t\t\t// purposeful typecast\n\t\t\t\t\t\t\t\t\thistory = newHistory();\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tcase 67:\n\t\t\t\t\t\t\t\tif (!(regexp.indexOf(\"<input\") > -1 || regexp.indexOf(\"<reply\") > -1)) {\n\t\t\t\t\t\t\t\t\t_context3.next = 74;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tif (!(giveup++ > 50)) {\n\t\t\t\t\t\t\t\t\t_context3.next = 70;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\treturn _context3.abrupt(\"break\", 74);\n\n\t\t\t\t\t\t\tcase 70:\n\t\t\t\t\t\t\t\tref = [\"input\", \"reply\"];\n\n\t\t\t\t\t\t\t\tfor (k = 0, len1 = ref.length; k < len1; k++) {\n\t\t\t\t\t\t\t\t\ttype = ref[k];\n\n\t\t\t\t\t\t\t\t\tfor (i = 1; i <= 9; i++) {\n\t\t\t\t\t\t\t\t\t\tif (regexp.indexOf(\"<\" + type + i + \">\") > -1) {\n\t\t\t\t\t\t\t\t\t\t\tvalue = self.formatMessage(history[type][i - 1], type === \"reply\");\n\n\t\t\t\t\t\t\t\t\t\t\tregexp = regexp.replace(new RegExp(\"<\" + type + i + \">\", \"g\"), value);\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t_context3.next = 67;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 74:\n\n\t\t\t\t\t\t\t\t// Recover escaped Unicode symbols.\n\t\t\t\t\t\t\t\tif (self.utf8 && regexp.indexOf(\"\\\\u\") > -1) {\n\t\t\t\t\t\t\t\t\tregexp = regexp.replace(/\\\\u([A-Fa-f0-9]{4})/, function (match, grp) {\n\t\t\t\t\t\t\t\t\t\treturn String.fromCharCode(parseInt(grp, 16));\n\t\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// Prevent accidental wildcard match due to double-pipe (e.g. /hi||hello/)\n\t\t\t\t\t\t\t\tregexp = regexp.replace(/\\|{2,}/mg, '|');\n\t\t\t\t\t\t\t\treturn _context3.abrupt(\"return\", regexp);\n\n\t\t\t\t\t\t\tcase 77:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context3.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee3, this);\n\t\t\t}));\n\n\t\t\tfunction triggerRegexp(_x9, _x10) {\n\t\t\t\treturn _ref3.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn triggerRegexp;\n\t\t}()\n\n\t\t/**\n  string processTags (string user, string msg, string reply, string[] stars,\n                      string[] botstars, int step, scope)\n  \tProcess tags in a reply element.\n  */\n\n\t}, {\n\t\tkey: \"processTags\",\n\t\tvalue: function () {\n\t\t\tvar _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(user, msg, reply, st, bst, step, scope) {\n\t\t\t\tvar self, stars, botstars, match, giveup, name, result, i, len, _i2, _len3, history, _i3, random, text, output, formats, m, _len4, type, content, replace, parts, tag, data, insert, target, _name4, value, existingValue, _result, _name5, _target, subreply, _parts, _output, obj, args, lang;\n\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee4$(_context4) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context4.prev = _context4.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\tself = this;\n\n\t\t\t\t\t\t\t\t// Prepare the stars and botstars.\n\n\t\t\t\t\t\t\t\tstars = [\"\"];\n\n\t\t\t\t\t\t\t\tstars.push.apply(stars, st);\n\t\t\t\t\t\t\t\tbotstars = [\"\"];\n\n\t\t\t\t\t\t\t\tbotstars.push.apply(botstars, bst);\n\t\t\t\t\t\t\t\tif (stars.length === 1) {\n\t\t\t\t\t\t\t\t\tstars.push(\"undefined\");\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tif (botstars.length === 1) {\n\t\t\t\t\t\t\t\t\tbotstars.push(\"undefined\");\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// Turn arrays into randomized sets.\n\t\t\t\t\t\t\t\tmatch = reply.match(/\\(@([A-Za-z0-9_]+)\\)/i);\n\t\t\t\t\t\t\t\tgiveup = 0;\n\n\t\t\t\t\t\t\tcase 9:\n\t\t\t\t\t\t\t\tif (!match) {\n\t\t\t\t\t\t\t\t\t_context4.next = 20;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tif (!(giveup++ > self.master._depth)) {\n\t\t\t\t\t\t\t\t\t_context4.next = 13;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tself.warn(\"Infinite loop looking for arrays in reply!\");\n\t\t\t\t\t\t\t\treturn _context4.abrupt(\"break\", 20);\n\n\t\t\t\t\t\t\tcase 13:\n\t\t\t\t\t\t\t\tname = match[1];\n\t\t\t\t\t\t\t\tresult = void 0;\n\n\t\t\t\t\t\t\t\tif (self.master._array[name]) {\n\t\t\t\t\t\t\t\t\tresult = \"{random}\" + self.master._array[name].join(\"|\") + \"{/random}\";\n\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t// Dummy it out so we can reinsert it later.\n\t\t\t\t\t\t\t\t\tresult = \"\\0@\" + name + \"\\0\";\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\treply = reply.replace(new RegExp(\"\\\\(@\" + utils.quotemeta(name) + \"\\\\)\", \"ig\"), result);\n\t\t\t\t\t\t\t\tmatch = reply.match(/\\(@([A-Za-z0-9_]+)\\)/i);\n\t\t\t\t\t\t\t\t_context4.next = 9;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 20:\n\n\t\t\t\t\t\t\t\t// Restore literal arrays that didn't exist.\n\t\t\t\t\t\t\t\treply = reply.replace(/\\x00@([A-Za-z0-9_]+)\\x00/g, \"(@$1)\");\n\n\t\t\t\t\t\t\t\t// Tag shortcuts.\n\t\t\t\t\t\t\t\treply = reply.replace(/<person>/ig, \"{person}<star>{/person}\");\n\t\t\t\t\t\t\t\treply = reply.replace(/<@>/ig, \"{@<star>}\");\n\t\t\t\t\t\t\t\treply = reply.replace(/<formal>/ig, \"{formal}<star>{/formal}\");\n\t\t\t\t\t\t\t\treply = reply.replace(/<sentence>/ig, \"{sentence}<star>{/sentence}\");\n\t\t\t\t\t\t\t\treply = reply.replace(/<uppercase>/ig, \"{uppercase}<star>{/uppercase}\");\n\t\t\t\t\t\t\t\treply = reply.replace(/<lowercase>/ig, \"{lowercase}<star>{/lowercase}\");\n\n\t\t\t\t\t\t\t\t// Weight and star tags.\n\t\t\t\t\t\t\t\treply = reply.replace(/\\{weight=\\d+\\}/ig, \"\"); // Remove {weight}s\n\t\t\t\t\t\t\t\treply = reply.replace(/<star>/ig, stars[1]);\n\t\t\t\t\t\t\t\treply = reply.replace(/<botstar>/ig, botstars[1]);\n\t\t\t\t\t\t\t\tfor (i = 1, len = stars.length; i <= len; i++) {\n\t\t\t\t\t\t\t\t\treply = reply.replace(new RegExp(\"<star\" + i + \">\", \"ig\"), stars[i]);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tfor (_i2 = 1, _len3 = botstars.length; _i2 <= _len3; _i2++) {\n\t\t\t\t\t\t\t\t\treply = reply.replace(new RegExp(\"<botstar\" + _i2 + \">\", \"ig\"), botstars[_i2]);\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// <input> and <reply>\n\t\t\t\t\t\t\t\t_context4.next = 34;\n\t\t\t\t\t\t\t\treturn self.master._session.get(user, \"__history__\");\n\n\t\t\t\t\t\t\tcase 34:\n\t\t\t\t\t\t\t\thistory = _context4.sent;\n\n\t\t\t\t\t\t\t\tif (history == \"undefined\") {\n\t\t\t\t\t\t\t\t\t// purposeful typecast for `undefined` too\n\t\t\t\t\t\t\t\t\thistory = newHistory();\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\treply = reply.replace(/<input>/ig, history.input ? history.input[0] : \"undefined\");\n\t\t\t\t\t\t\t\treply = reply.replace(/<reply>/ig, history.reply ? history.reply[0] : \"undefined\");\n\t\t\t\t\t\t\t\tfor (_i3 = 1; _i3 <= 9; _i3++) {\n\t\t\t\t\t\t\t\t\tif (reply.indexOf(\"<input\" + _i3 + \">\") > -1) {\n\t\t\t\t\t\t\t\t\t\treply = reply.replace(new RegExp(\"<input\" + _i3 + \">\", \"ig\"), history.input[_i3 - 1]);\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tif (reply.indexOf(\"<reply\" + _i3 + \">\") > -1) {\n\t\t\t\t\t\t\t\t\t\treply = reply.replace(new RegExp(\"<reply\" + _i3 + \">\", \"ig\"), history.reply[_i3 - 1]);\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// <id> and escape codes\n\t\t\t\t\t\t\t\treply = reply.replace(/<id>/ig, user);\n\t\t\t\t\t\t\t\treply = reply.replace(/\\\\s/ig, \" \");\n\t\t\t\t\t\t\t\treply = reply.replace(/\\\\n/ig, \"\\n\");\n\t\t\t\t\t\t\t\treply = reply.replace(/\\\\#/ig, \"#\");\n\n\t\t\t\t\t\t\t\t// {random}\n\t\t\t\t\t\t\t\tmatch = reply.match(/\\{random\\}(.+?)\\{\\/random\\}/i);\n\t\t\t\t\t\t\t\tgiveup = 0;\n\n\t\t\t\t\t\t\tcase 45:\n\t\t\t\t\t\t\t\tif (!match) {\n\t\t\t\t\t\t\t\t\t_context4.next = 57;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tif (!(giveup++ > self.master._depth)) {\n\t\t\t\t\t\t\t\t\t_context4.next = 49;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tself.warn(\"Infinite loop looking for random tag!\");\n\t\t\t\t\t\t\t\treturn _context4.abrupt(\"break\", 57);\n\n\t\t\t\t\t\t\tcase 49:\n\t\t\t\t\t\t\t\trandom = [];\n\t\t\t\t\t\t\t\ttext = match[1];\n\n\t\t\t\t\t\t\t\tif (text.indexOf(\"|\") > -1) {\n\t\t\t\t\t\t\t\t\trandom = text.split(\"|\");\n\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\trandom = text.split(\" \");\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\toutput = random[parseInt(Math.random() * random.length)];\n\n\t\t\t\t\t\t\t\treply = reply.replace(new RegExp(\"\\\\{random\\\\}\" + utils.quotemeta(text) + \"\\\\{\\\\/random\\\\}\", \"ig\"), output);\n\t\t\t\t\t\t\t\tmatch = reply.match(/\\{random\\}(.+?)\\{\\/random\\}/i);\n\t\t\t\t\t\t\t\t_context4.next = 45;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 57:\n\n\t\t\t\t\t\t\t\t// Person substitutions & string formatting\n\t\t\t\t\t\t\t\tformats = [\"person\", \"formal\", \"sentence\", \"uppercase\", \"lowercase\"];\n\t\t\t\t\t\t\t\tm = 0, _len4 = formats.length;\n\n\t\t\t\t\t\t\tcase 59:\n\t\t\t\t\t\t\t\tif (!(m < _len4)) {\n\t\t\t\t\t\t\t\t\t_context4.next = 78;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\ttype = formats[m];\n\n\t\t\t\t\t\t\t\tmatch = reply.match(new RegExp(\"{\" + type + \"}(.+?){/\" + type + \"}\", \"i\"));\n\t\t\t\t\t\t\t\tgiveup = 0;\n\n\t\t\t\t\t\t\tcase 63:\n\t\t\t\t\t\t\t\tif (!match) {\n\t\t\t\t\t\t\t\t\t_context4.next = 75;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tgiveup++;\n\n\t\t\t\t\t\t\t\tif (!(giveup >= 50)) {\n\t\t\t\t\t\t\t\t\t_context4.next = 68;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tself.warn(\"Infinite loop looking for \" + type + \" tag!\");\n\t\t\t\t\t\t\t\treturn _context4.abrupt(\"break\", 75);\n\n\t\t\t\t\t\t\tcase 68:\n\t\t\t\t\t\t\t\tcontent = match[1];\n\t\t\t\t\t\t\t\treplace = void 0;\n\n\t\t\t\t\t\t\t\tif (type === \"person\") {\n\t\t\t\t\t\t\t\t\treplace = self.substitute(content, \"person\");\n\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\treplace = utils.stringFormat(type, content);\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\treply = reply.replace(new RegExp(\"{\" + type + \"}\" + utils.quotemeta(content) + (\"{/\" + type + \"}\"), \"ig\"), replace);\n\t\t\t\t\t\t\t\tmatch = reply.match(new RegExp(\"{\" + type + \"}(.+?){/\" + type + \"}\", \"i\"));\n\t\t\t\t\t\t\t\t_context4.next = 63;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 75:\n\t\t\t\t\t\t\t\tm++;\n\t\t\t\t\t\t\t\t_context4.next = 59;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 78:\n\n\t\t\t\t\t\t\t\t// Handle all variable-related tags with an iterative regexp approach, to\n\t\t\t\t\t\t\t\t// allow for nesting of tags in arbitrary ways (think <set a=<get b>>)\n\t\t\t\t\t\t\t\t// Dummy out the <call> tags first, because we don't handle them right here.\n\t\t\t\t\t\t\t\treply = reply.replace(/<call>/ig, \"«__call__»\");\n\t\t\t\t\t\t\t\treply = reply.replace(/<\\/call>/ig, \"«/__call__»\");\n\n\t\t\t\t\t\t\tcase 80:\n\t\t\t\t\t\t\t\tif (false) {}\n\n\t\t\t\t\t\t\t\t// This regexp will match a <tag> which contains no other tag inside it,\n\t\t\t\t\t\t\t\t// i.e. in the case of <set a=<get b>> it will match <get b> but not the\n\t\t\t\t\t\t\t\t// <set> tag, on the first pass. The second pass will get the <set> tag,\n\t\t\t\t\t\t\t\t// and so on.\n\t\t\t\t\t\t\t\tmatch = reply.match(/<([^<]+?)>/);\n\n\t\t\t\t\t\t\t\tif (match) {\n\t\t\t\t\t\t\t\t\t_context4.next = 84;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\treturn _context4.abrupt(\"break\", 136);\n\n\t\t\t\t\t\t\tcase 84:\n\n\t\t\t\t\t\t\t\tmatch = match[1];\n\t\t\t\t\t\t\t\tparts = match.split(\" \");\n\t\t\t\t\t\t\t\ttag = parts[0].toLowerCase();\n\t\t\t\t\t\t\t\tdata = \"\";\n\n\t\t\t\t\t\t\t\tif (parts.length > 1) {\n\t\t\t\t\t\t\t\t\tdata = parts.slice(1).join(\" \");\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tinsert = \"\";\n\n\t\t\t\t\t\t\t\t// Handle the tags.\n\n\t\t\t\t\t\t\t\tif (!(tag === \"bot\" || tag === \"env\")) {\n\t\t\t\t\t\t\t\t\t_context4.next = 95;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// <bot> and <env> tags are similar\n\t\t\t\t\t\t\t\ttarget = tag === \"bot\" ? self.master._var : self.master._global;\n\n\t\t\t\t\t\t\t\tif (data.indexOf(\"=\") > -1) {\n\t\t\t\t\t\t\t\t\t// Assigning a variable\n\t\t\t\t\t\t\t\t\tparts = data.split(\"=\", 2);\n\t\t\t\t\t\t\t\t\tself.say(\"Set \" + tag + \" variable \" + parts[0] + \" = \" + parts[1]);\n\t\t\t\t\t\t\t\t\ttarget[parts[0]] = parts[1];\n\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t// Getting a bot/env variable\n\t\t\t\t\t\t\t\t\tinsert = target[data] || \"undefined\";\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t_context4.next = 133;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 95:\n\t\t\t\t\t\t\t\tif (!(tag === \"set\")) {\n\t\t\t\t\t\t\t\t\t_context4.next = 102;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// <set> user vars\n\t\t\t\t\t\t\t\tparts = data.split(\"=\", 2);\n\t\t\t\t\t\t\t\tself.say(\"Set uservar \" + parts[0] + \" = \" + parts[1]);\n\t\t\t\t\t\t\t\t_context4.next = 100;\n\t\t\t\t\t\t\t\treturn self.master.setUservar(user, parts[0], parts[1]);\n\n\t\t\t\t\t\t\tcase 100:\n\t\t\t\t\t\t\t\t_context4.next = 133;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 102:\n\t\t\t\t\t\t\t\tif (!(tag === \"add\" || tag === \"sub\" || tag === \"mult\" || tag === \"div\")) {\n\t\t\t\t\t\t\t\t\t_context4.next = 126;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// Math operator tags\n\t\t\t\t\t\t\t\tparts = data.split(\"=\");\n\t\t\t\t\t\t\t\t_name4 = parts[0];\n\t\t\t\t\t\t\t\tvalue = parts[1];\n\n\t\t\t\t\t\t\t\t// Initialize the variable?\n\n\t\t\t\t\t\t\t\t_context4.next = 108;\n\t\t\t\t\t\t\t\treturn self.master.getUservar(user, _name4);\n\n\t\t\t\t\t\t\tcase 108:\n\t\t\t\t\t\t\t\texistingValue = _context4.sent;\n\n\t\t\t\t\t\t\t\tif (existingValue === \"undefined\") {\n\t\t\t\t\t\t\t\t\texistingValue = 0;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// Sanity check\n\t\t\t\t\t\t\t\tvalue = parseInt(value);\n\n\t\t\t\t\t\t\t\tif (!isNaN(value)) {\n\t\t\t\t\t\t\t\t\t_context4.next = 115;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tinsert = \"[ERR: Math can't '\" + tag + \"' non-numeric value '\" + value + \"']\";\n\t\t\t\t\t\t\t\t_context4.next = 124;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 115:\n\t\t\t\t\t\t\t\tif (!isNaN(parseInt(existingValue))) {\n\t\t\t\t\t\t\t\t\t_context4.next = 119;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tinsert = \"[ERR: Math can't '\" + tag + \"' non-numeric user variable '\" + _name4 + \"']\";\n\t\t\t\t\t\t\t\t_context4.next = 124;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 119:\n\t\t\t\t\t\t\t\t_result = parseInt(existingValue);\n\n\t\t\t\t\t\t\t\tif (tag === \"add\") {\n\t\t\t\t\t\t\t\t\t_result += value;\n\t\t\t\t\t\t\t\t} else if (tag === \"sub\") {\n\t\t\t\t\t\t\t\t\t_result -= value;\n\t\t\t\t\t\t\t\t} else if (tag === \"mult\") {\n\t\t\t\t\t\t\t\t\t_result *= value;\n\t\t\t\t\t\t\t\t} else if (tag === \"div\") {\n\t\t\t\t\t\t\t\t\tif (value === 0) {\n\t\t\t\t\t\t\t\t\t\tinsert = \"[ERR: Can't Divide By Zero]\";\n\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\t_result /= value;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// No errors?\n\n\t\t\t\t\t\t\t\tif (!(insert === \"\")) {\n\t\t\t\t\t\t\t\t\t_context4.next = 124;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t_context4.next = 124;\n\t\t\t\t\t\t\t\treturn self.master.setUservar(user, _name4, _result);\n\n\t\t\t\t\t\t\tcase 124:\n\t\t\t\t\t\t\t\t_context4.next = 133;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 126:\n\t\t\t\t\t\t\t\tif (!(tag === \"get\")) {\n\t\t\t\t\t\t\t\t\t_context4.next = 132;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t_context4.next = 129;\n\t\t\t\t\t\t\t\treturn self.master.getUservar(user, data);\n\n\t\t\t\t\t\t\tcase 129:\n\t\t\t\t\t\t\t\tinsert = _context4.sent;\n\t\t\t\t\t\t\t\t_context4.next = 133;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 132:\n\t\t\t\t\t\t\t\t// Unrecognized tag, preserve it\n\t\t\t\t\t\t\t\tinsert = \"\\0\" + match + \"\\x01\";\n\n\t\t\t\t\t\t\tcase 133:\n\t\t\t\t\t\t\t\treply = reply.replace(new RegExp(\"<\" + utils.quotemeta(match) + \">\"), insert);\n\t\t\t\t\t\t\t\t_context4.next = 80;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 136:\n\n\t\t\t\t\t\t\t\t// Recover mangled HTML-like tags\n\t\t\t\t\t\t\t\treply = reply.replace(/\\x00/g, \"<\");\n\t\t\t\t\t\t\t\treply = reply.replace(/\\x01/g, \">\");\n\n\t\t\t\t\t\t\t\t// Topic setter\n\t\t\t\t\t\t\t\tmatch = reply.match(/\\{topic=(.+?)\\}/i);\n\t\t\t\t\t\t\t\tgiveup = 0;\n\n\t\t\t\t\t\t\tcase 140:\n\t\t\t\t\t\t\t\tif (!match) {\n\t\t\t\t\t\t\t\t\t_context4.next = 152;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tgiveup++;\n\n\t\t\t\t\t\t\t\tif (!(giveup >= 50)) {\n\t\t\t\t\t\t\t\t\t_context4.next = 145;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tself.warn(\"Infinite loop looking for topic tag!\");\n\t\t\t\t\t\t\t\treturn _context4.abrupt(\"break\", 152);\n\n\t\t\t\t\t\t\tcase 145:\n\t\t\t\t\t\t\t\t_name5 = match[1];\n\t\t\t\t\t\t\t\t_context4.next = 148;\n\t\t\t\t\t\t\t\treturn self.master.setUservar(user, \"topic\", _name5);\n\n\t\t\t\t\t\t\tcase 148:\n\t\t\t\t\t\t\t\treply = reply.replace(new RegExp(\"{topic=\" + utils.quotemeta(_name5) + \"}\", \"ig\"), \"\");\n\t\t\t\t\t\t\t\tmatch = reply.match(/\\{topic=(.+?)\\}/i); // Look for more\n\t\t\t\t\t\t\t\t_context4.next = 140;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 152:\n\n\t\t\t\t\t\t\t\t// Inline redirector\n\t\t\t\t\t\t\t\tmatch = reply.match(/\\{@([^\\}]*?)\\}/);\n\t\t\t\t\t\t\t\tgiveup = 0;\n\n\t\t\t\t\t\t\tcase 154:\n\t\t\t\t\t\t\t\tif (!match) {\n\t\t\t\t\t\t\t\t\t_context4.next = 168;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tgiveup++;\n\n\t\t\t\t\t\t\t\tif (!(giveup >= 50)) {\n\t\t\t\t\t\t\t\t\t_context4.next = 159;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tself.warn(\"Infinite loop looking for redirect tag!\");\n\t\t\t\t\t\t\t\treturn _context4.abrupt(\"break\", 168);\n\n\t\t\t\t\t\t\tcase 159:\n\t\t\t\t\t\t\t\t_target = utils.strip(match[1]);\n\n\t\t\t\t\t\t\t\tself.say(\"Inline redirection to: \" + _target);\n\n\t\t\t\t\t\t\t\t_context4.next = 163;\n\t\t\t\t\t\t\t\treturn self._getReply(user, _target, \"normal\", step + 1, scope);\n\n\t\t\t\t\t\t\tcase 163:\n\t\t\t\t\t\t\t\tsubreply = _context4.sent;\n\n\t\t\t\t\t\t\t\treply = reply.replace(new RegExp(\"\\\\{@\" + utils.quotemeta(match[1]) + \"\\\\}\", \"i\"), subreply);\n\t\t\t\t\t\t\t\tmatch = reply.match(/\\{@([^\\}]*?)\\}/);\n\t\t\t\t\t\t\t\t_context4.next = 154;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 168:\n\n\t\t\t\t\t\t\t\t// Object caller\n\t\t\t\t\t\t\t\treply = reply.replace(/«__call__»/g, \"<call>\");\n\t\t\t\t\t\t\t\treply = reply.replace(/«\\/__call__»/g, \"</call>\");\n\t\t\t\t\t\t\t\tmatch = reply.match(/<call>([\\s\\S]+?)<\\/call>/);\n\t\t\t\t\t\t\t\tgiveup = 0;\n\n\t\t\t\t\t\t\tcase 172:\n\t\t\t\t\t\t\t\tif (!match) {\n\t\t\t\t\t\t\t\t\t_context4.next = 202;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tgiveup++;\n\n\t\t\t\t\t\t\t\tif (!(giveup >= 50)) {\n\t\t\t\t\t\t\t\t\t_context4.next = 177;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tself.warn(\"Infinite loop looking for call tags!\");\n\t\t\t\t\t\t\t\treturn _context4.abrupt(\"break\", 202);\n\n\t\t\t\t\t\t\tcase 177:\n\t\t\t\t\t\t\t\t_parts = utils.trim(match[1]).split(\" \");\n\t\t\t\t\t\t\t\t_output = self.master.errors.objectNotFound;\n\t\t\t\t\t\t\t\tobj = _parts[0];\n\n\t\t\t\t\t\t\t\t// Make the args shell-like.\n\n\t\t\t\t\t\t\t\targs = [];\n\n\t\t\t\t\t\t\t\tif (_parts.length > 1) {\n\t\t\t\t\t\t\t\t\targs = utils.parseCallArgs(_parts.slice(1).join(\" \"));\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// Do we know self object?\n\n\t\t\t\t\t\t\t\tif (!(obj in self.master._objlangs)) {\n\t\t\t\t\t\t\t\t\t_context4.next = 198;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// We do, but do we have a handler for that language?\n\t\t\t\t\t\t\t\tlang = self.master._objlangs[obj];\n\n\t\t\t\t\t\t\t\tif (!(lang in self.master._handlers)) {\n\t\t\t\t\t\t\t\t\t_context4.next = 197;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t_context4.prev = 185;\n\t\t\t\t\t\t\t\t_context4.next = 188;\n\t\t\t\t\t\t\t\treturn self.master._handlers[lang].call(self.master, obj, args, scope);\n\n\t\t\t\t\t\t\tcase 188:\n\t\t\t\t\t\t\t\t_output = _context4.sent;\n\t\t\t\t\t\t\t\t_context4.next = 195;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 191:\n\t\t\t\t\t\t\t\t_context4.prev = 191;\n\t\t\t\t\t\t\t\t_context4.t0 = _context4[\"catch\"](185);\n\n\t\t\t\t\t\t\t\tif (_context4.t0 != undefined) {\n\t\t\t\t\t\t\t\t\tself.warn(_context4.t0);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t_output = \"[ERR: Error raised by object macro: \" + _context4.t0.message + \"]\";\n\n\t\t\t\t\t\t\tcase 195:\n\t\t\t\t\t\t\t\t_context4.next = 198;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 197:\n\t\t\t\t\t\t\t\t_output = \"[ERR: No Object Handler]\";\n\n\t\t\t\t\t\t\tcase 198:\n\t\t\t\t\t\t\t\treply = reply.replace(match[0], _output);\n\t\t\t\t\t\t\t\tmatch = reply.match(/<call>(.+?)<\\/call>/);\n\t\t\t\t\t\t\t\t_context4.next = 172;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 202:\n\t\t\t\t\t\t\t\treturn _context4.abrupt(\"return\", reply);\n\n\t\t\t\t\t\t\tcase 203:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context4.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee4, this, [[185, 191]]);\n\t\t\t}));\n\n\t\t\tfunction processTags(_x11, _x12, _x13, _x14, _x15, _x16, _x17) {\n\t\t\t\treturn _ref4.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn processTags;\n\t\t}()\n\n\t\t/**\n  string substitute (string msg, string type)\n  \tRun substitutions against a message. `type` is either \"sub\" or \"person\" for\n  the type of substitution to run.\n  */\n\n\t}, {\n\t\tkey: \"substitute\",\n\t\tvalue: function substitute(msg, type) {\n\t\t\tvar self = this;\n\n\t\t\t// Safety checking.\n\t\t\tif (!self.master._sorted[type]) {\n\t\t\t\tself.master.warn(\"You forgot to call sortReplies()!\");\n\t\t\t\treturn \"\";\n\t\t\t}\n\n\t\t\t// Get the substitutions map.\n\t\t\tvar subs = type === \"sub\" ? self.master._sub : self.master._person;\n\n\t\t\t// Get the max number of words in sub/person to minimize interations\n\t\t\tvar maxwords = type === \"sub\" ? self.master._submax : self.master._personmax;\n\t\t\tvar result = \"\";\n\n\t\t\t// Take the original message with no punctuation\n\t\t\tvar pattern;\n\t\t\tif (self.master.unicodePunctuation != null) {\n\t\t\t\tpattern = msg.replace(self.master.unicodePunctuation, \"\");\n\t\t\t} else {\n\t\t\t\tpattern = msg.replace(/[.,!?;:]/g, \"\");\n\t\t\t}\n\n\t\t\tvar tries = 0;\n\t\t\tvar giveup = 0;\n\t\t\tvar subgiveup = 0;\n\n\t\t\t// Look for words/phrases until there is no \"spaces\" in pattern\n\t\t\twhile (pattern.indexOf(\" \") > -1) {\n\t\t\t\tgiveup++;\n\t\t\t\t// Give up if there are too many substitutions (for safety)\n\t\t\t\tif (giveup >= 1000) {\n\t\t\t\t\tself.warn(\"Too many loops when handling substitutions!\");\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\n\t\t\t\tvar li = utils.nIndexOf(pattern, \" \", maxwords);\n\t\t\t\tvar subpattern = pattern.substring(0, li);\n\n\t\t\t\t// If finds the pattern in sub object replace and stop to look\n\t\t\t\tresult = subs[subpattern];\n\t\t\t\tif (result !== undefined) {\n\t\t\t\t\tmsg = msg.replace(subpattern, result);\n\t\t\t\t} else {\n\t\t\t\t\t// Otherwise Look for substitutions in a subpattern\n\t\t\t\t\twhile (subpattern.indexOf(\" \") > -1) {\n\t\t\t\t\t\tsubgiveup++;\n\n\t\t\t\t\t\t// Give up if there are too many substitutions (for safety)\n\t\t\t\t\t\tif (subgiveup >= 1000) {\n\t\t\t\t\t\t\tself.warn(\"Too many loops when handling substitutions!\");\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tli = subpattern.lastIndexOf(\" \");\n\t\t\t\t\t\tsubpattern = subpattern.substring(0, li);\n\n\t\t\t\t\t\t// If finds the subpattern in sub object replace and stop to look\n\t\t\t\t\t\tresult = subs[subpattern];\n\t\t\t\t\t\tif (result !== undefined) {\n\t\t\t\t\t\t\tmsg = msg.replace(subpattern, result);\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\ttries++;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tvar fi = pattern.indexOf(\" \");\n\t\t\t\tpattern = pattern.substring(fi + 1);\n\t\t\t\ttries++;\n\t\t\t}\n\n\t\t\t// After all loops, see if just one word is in the pattern\n\t\t\tresult = subs[pattern];\n\t\t\tif (result !== undefined) {\n\t\t\t\tmsg = msg.replace(pattern, result);\n\t\t\t}\n\n\t\t\treturn msg;\n\t\t}\n\t}]);\n\n\treturn Brain;\n}();\n\n;\n\nfunction newHistory() {\n\treturn {\n\t\tinput: [\"undefined\", \"undefined\", \"undefined\", \"undefined\", \"undefined\", \"undefined\", \"undefined\", \"undefined\", \"undefined\", \"undefined\"],\n\t\treply: [\"undefined\", \"undefined\", \"undefined\", \"undefined\", \"undefined\", \"undefined\", \"undefined\", \"undefined\", \"undefined\", \"undefined\"]\n\t};\n}\n\nmodule.exports = Brain;\n\n//# sourceURL=webpack://RiveScript/./src/brain.js?");

/***/ }),

/***/ "./src/inheritance.js":
/*!****************************!*\
  !*** ./src/inheritance.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// RiveScript.js\n// https://www.rivescript.com/\n\n// This code is released under the MIT License.\n// See the \"LICENSE\" file for more information.\n\n\n\n/**\nTopic inheritance functions.\n\nThese are helper functions to assist with topic inheritance and includes.\n*/\n\n/**\nstring[] getTopicTriggers (RiveScript rs, string topic, object triglvl,\nint depth, int inheritance, int inherited)\n\nRecursively scan through a topic and retrieve a listing of all triggers in\nthat topic and in all included/inherited topics. Some triggers will come out\nwith an {inherits} tag to signify inheritance depth.\n\n* topic: The name of the topic\n* thats: Boolean, are we getting replies with %Previous or not?\n* triglvl: reference to this._topics or this._thats\n* depth: recursion depth counter\n\nEach \"trigger\" returned from this function is actually an array, where index\n0 is the trigger text and index 1 is the pointer to the trigger's data within\nthe original topic structure.\n*/\n\nvar getTopicTriggers = function getTopicTriggers(rs, topic, thats, depth, inheritance, inherited) {\n\tvar self = this;\n\n\t// Initialize default triggers.\n\tif (thats == null) {\n\t\tthats = false;\n\t}\n\tif (depth == null) {\n\t\tdepth = 0;\n\t}\n\tif (inheritance == null) {\n\t\tinheritance = 0;\n\t}\n\tif (inherited == null) {\n\t\tinherited = 0;\n\t}\n\n\t// Break if we're in too deep.\n\tif (depth > rs._depth) {\n\t\trs.warn(\"Deep recursion while scanning topic inheritance (gave up in topic \" + topic + \")!\");\n\t\treturn [];\n\t}\n\n\t// Keep in mind here that there is a difference between 'includes' and\n\t// 'inherits' -- topics that inherit other topics are able to OVERRIDE\n\t// triggers that appear in the inherited topic. This means that if the top\n\t// topic has a trigger of simply '*', then NO triggers are capable of\n\t// matching in ANY inherited topic, because even though * has the lowest\n\t// priority, it has an automatic priority over all inherited topics.\n\n\t// The getTopicTriggers method takes this into account. All topics that\n\t// inherit other topics will have their triggers prefixed with a fictional\n\t// {inherits} tag, which would start at {inherits=0} and increment if this\n\t// topic has other inheriting topics. So we can use this tag to make sure\n\t// topics that inherit things will have their triggers always be on top of\n\t// the stack, from inherits=0 to inherits=n.\n\n\t// Important info about the depth vs. inheritance params to this function:\n\t// depth increments by 1 each time this function recursively calls itself.\n\t// inheritance increments by 1 only when this topic inherits another topic.\n\n\t// This way, '> topic alpha includes beta inherits gamma' will have this\n\t// effect:\n\t//  alpha and beta's triggers are combined together into one matching pool,\n\t//  and then those triggers have higher priority than gamma's.\n\n\t// The inherited option is true if this is a recursive call, from a topic\n\t// that inherits other topics. This forces the {inherits} tag to be added to\n\t// the triggers. This only applies when the top topic 'includes' another\n\t// topic.\n\n\trs.say(\"Collecting trigger list for topic \" + topic + \" (depth=\" + depth + \"; \" + (\"inheritance=\" + inheritance + \"; inherited=\" + inherited + \")\"));\n\n\t// Topic doesn't exist?\n\tif (rs._topics[topic] == null) {\n\t\trs.warn(\"Inherited or included topic '\" + topic + \"' doesn't exist or \" + \"has no triggers\");\n\t\treturn [];\n\t}\n\n\t// Collect an array of triggers to return.\n\tvar triggers = [];\n\n\t// Get those that exist in this topic directly.\n\tvar inThisTopic = [];\n\tif (!thats) {\n\t\t// The non-that structure is: {topics}->[ array of triggers ]\n\t\tif (rs._topics[topic] != null) {\n\t\t\tfor (var i = 0, len = rs._topics[topic].length; i < len; i++) {\n\t\t\t\tvar trigger = rs._topics[topic][i];\n\t\t\t\tinThisTopic.push([trigger.trigger, trigger]);\n\t\t\t}\n\t\t}\n\t} else {\n\t\t// The 'that' structure is: {topic}->{cur trig}->{prev trig}->{trigger info}\n\t\tif (rs._thats[topic] != null) {\n\t\t\tfor (var curTrig in rs._thats[topic]) {\n\t\t\t\tif (!rs._thats[topic].hasOwnProperty(curTrig)) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\tfor (var previous in rs._thats[topic][curTrig]) {\n\t\t\t\t\tif (!rs._thats[topic][curTrig].hasOwnProperty(previous)) {\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\t\t\t\t\tvar pointer = rs._thats[topic][curTrig][previous];\n\t\t\t\t\tinThisTopic.push([pointer.trigger, pointer]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t// Does this topic include others?\n\tif (Object.keys(rs._includes[topic]).length > 0) {\n\t\t// Check every included topic.\n\t\tfor (var includes in rs._includes[topic]) {\n\t\t\tif (!rs._includes[topic].hasOwnProperty(includes)) {\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\trs.say(\"Topic \" + topic + \" includes \" + includes);\n\t\t\ttriggers.push.apply(triggers, getTopicTriggers(rs, includes, thats, depth + 1, inheritance + 1, false));\n\t\t}\n\t}\n\n\t// Does this topic inherit others?\n\tif (Object.keys(rs._inherits[topic]).length > 0) {\n\t\t// Check every inherited topic\n\t\tfor (var inherits in rs._inherits[topic]) {\n\t\t\tif (!rs._inherits[topic].hasOwnProperty(inherits)) {\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\trs.say(\"Topic \" + topic + \" inherits \" + inherits);\n\t\t\ttriggers.push.apply(triggers, getTopicTriggers(rs, inherits, thats, depth + 1, inheritance + 1, true));\n\t\t}\n\t}\n\n\t// Collect the triggers for *this* topic. If this topic inherits any other\n\t// topics, it means that this topic's triggers have higher priority than\n\t// those in any inherited topics. Enforce this with an {inherits} tag.\n\tif (Object.keys(rs._inherits[topic]).length > 0 || inherited) {\n\t\tfor (var j = 0, len1 = inThisTopic.length; j < len1; j++) {\n\t\t\tvar _trigger = inThisTopic[j];\n\n\t\t\trs.say(\"Prefixing trigger with {inherits=\" + inheritance + \"} \" + _trigger);\n\t\t\ttriggers.push.apply(triggers, [[\"{inherits=\" + inheritance + \"}\" + _trigger[0], _trigger[1]]]);\n\t\t}\n\t} else {\n\t\ttriggers.push.apply(triggers, inThisTopic);\n\t}\n\treturn triggers;\n};\n\n/**\nstring[] getTopicTree (RiveScript rs, string topic, int depth)\n\nGiven a topic, this returns an array of every topic related to it (all the\ntopics it includes or inherits, plus all the topics included or inherited\nby those topics, and so on). The array includes the original topic, too.\n*/\nvar getTopicTree = function getTopicTree(rs, topic, depth) {\n\tvar self = this;\n\n\t// Default depth\n\tif (depth == null) {\n\t\tdepth = 0;\n\t}\n\n\t// Break if we're in too deep.\n\tif (depth > rs._depth) {\n\t\trs.warn(\"Deep recursion while scanning topic tree!\");\n\t\treturn [];\n\t}\n\n\t// Collect an array of all topics.\n\tvar topics = [topic];\n\tfor (var includes in rs._topics[topic].includes) {\n\t\tif (!rs._topics[topic].includes.hasOwnProperty(includes)) {\n\t\t\tcontinue;\n\t\t}\n\t\ttopics.push.apply(topics, getTopicTree(rs, includes, depth + 1));\n\t}\n\tfor (var inherits in rs._topics[topic].inherits) {\n\t\tif (!rs._topics[topic].inherits.hasOwnProperty(inherits)) {\n\t\t\tcontinue;\n\t\t}\n\t\ttopics.push.apply(topics, getTopicTree(rs, inherits, depth + 1));\n\t}\n\n\treturn topics;\n};\n\nexports.getTopicTriggers = getTopicTriggers;\nexports.getTopicTree = getTopicTree;\n\n//# sourceURL=webpack://RiveScript/./src/inheritance.js?");

/***/ }),

/***/ "./src/lang/javascript.js":
/*!********************************!*\
  !*** ./src/lang/javascript.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// RiveScript.js\n\n// This code is released under the MIT License.\n// See the \"LICENSE\" file for more information.\n\n// http://www.rivescript.com/\n\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar JSObjectHandler;\n\n/**\nJSObjectHandler (RiveScript master)\n\nJavaScript Language Support for RiveScript Macros. This support is enabled by\ndefault in RiveScript.js; if you don't want it, override the `javascript`\nlanguage handler to null, like so:\n\n```javascript\nbot.setHandler(\"javascript\", null);\n```\n*/\nJSObjectHandler = function () {\n\tfunction JSObjectHandler(master) {\n\t\t_classCallCheck(this, JSObjectHandler);\n\n\t\tthis._master = master;\n\t\tthis._objects = {};\n\n\t\t// Test for async function support.\n\t\tthis._async = \"\";\n\t\ttry {\n\t\t\teval(\"(async function() {})\");\n\t\t\tthis._async = \"async \";\n\t\t} catch (e) {}\n\t}\n\n\t/**\n void load (string name, string[]|function code)\n \tCalled by the RiveScript object to load JavaScript code.\n */\n\n\n\t_createClass(JSObjectHandler, [{\n\t\tkey: \"load\",\n\t\tvalue: function load(name, code) {\n\t\t\tvar e, source;\n\t\t\tif (typeof code === \"function\") {\n\t\t\t\t// If code is just a js function, store the reference as is\n\t\t\t\treturn this._objects[name] = code;\n\t\t\t} else {\n\t\t\t\t// We need to make a dynamic JavaScript function.\n\t\t\t\tsource = \"this._objects[\\\"\" + name + \"\\\"] = \" + this._async + \"function(rs, args) {\\n\" + code.join(\"\\n\") + \"\\n};\\n\";\n\t\t\t\ttry {\n\t\t\t\t\treturn eval(source);\n\t\t\t\t} catch (error) {\n\t\t\t\t\te = error;\n\t\t\t\t\treturn this._master.warn(\"Error evaluating JavaScript object: \" + e.message);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t/**\n  string call (RiveScript rs, string name, string[] fields)\n  \tCalled by the RiveScript object to execute JavaScript code.\n  */\n\n\t}, {\n\t\tkey: \"call\",\n\t\tvalue: function call(rs, name, fields, scope) {\n\t\t\tvar e, func, reply;\n\t\t\t// We have it?\n\t\t\tif (!this._objects[name]) {\n\t\t\t\treturn this._master.errors.objectNotFound;\n\t\t\t}\n\t\t\t// Call the dynamic method.\n\t\t\tfunc = this._objects[name];\n\t\t\treply = \"\";\n\t\t\ttry {\n\t\t\t\treply = func.call(scope, rs, fields);\n\t\t\t} catch (error) {\n\t\t\t\te = error;\n\t\t\t\treply = \"[ERR: Error when executing JavaScript object: \" + e.message + \"]\";\n\t\t\t}\n\t\t\t// Allow undefined responses.\n\t\t\tif (reply === void 0) {\n\t\t\t\treply = \"\";\n\t\t\t}\n\t\t\treturn reply;\n\t\t}\n\t}]);\n\n\treturn JSObjectHandler;\n}();\n\nmodule.exports = JSObjectHandler;\n\n//# sourceURL=webpack://RiveScript/./src/lang/javascript.js?");

/***/ }),

/***/ "./src/parser.js":
/*!***********************!*\
  !*** ./src/parser.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// RiveScript.js\n// https://www.rivescript.com/\n\n// This code is released under the MIT License.\n// See the \"LICENSE\" file for more information.\n\n\n\n// Parser for RiveScript syntax.\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n// The version of the RiveScript language we support.\nvar RS_VERSION = \"2.0\";\n\n/**\nParser (RiveScript master)\n\nCreate a parser object to handle parsing RiveScript code.\n*/\nvar Parser = function () {\n\tfunction Parser(master) {\n\t\t_classCallCheck(this, Parser);\n\n\t\tvar self = this;\n\t\tself.master = master;\n\t\tself.strict = master._strict;\n\t\tself.utf8 = master._utf8;\n\t}\n\n\t// Proxy functions\n\n\n\t_createClass(Parser, [{\n\t\tkey: \"say\",\n\t\tvalue: function say(message) {\n\t\t\treturn this.master.say(message);\n\t\t}\n\t}, {\n\t\tkey: \"warn\",\n\t\tvalue: function warn(message, filename, lineno) {\n\t\t\treturn this.master.warn(message, filename, lineno);\n\t\t}\n\n\t\t/**\n  object parse (string filename, string code[, func onError])\n  \tRead and parse a RiveScript document. Returns a data structure that\n  represents all of the useful contents of the document, in this format:\n  \t```javascript\n  {\n    \"begin\": { // \"begin\" data\n      \"global\": {}, // ! global vars\n      \"var\": {},    // ! bot vars\n      \"sub\": {},    // ! sub substitutions\n      \"person\": {}, // ! person substitutions\n      \"array\": {},  // ! array lists\n    },\n    \"topics\": { // main reply data\n      \"random\": { // (topic name)\n        \"includes\": {}, // included topics\n        \"inherits\": {}, // inherited topics\n        \"triggers\": [ // array of triggers\n          {\n            \"trigger\": \"hello bot\",\n            \"reply\": [], // array of replies\n            \"condition\": [], // array of conditions\n            \"redirect\": \"\",  // @ redirect command\n            \"previous\": null, // % previous command\n          },\n          ...\n        ]\n      }\n    },\n    \"objects\": [ // parsed object macros\n      {\n        \"name\": \"\",     // object name\n        \"language\": \"\", // programming language\n        \"code\": [],     // object source code (in lines)\n      }\n    ]\n  }\n  ```\n  \tonError function receives: `(err string[, filename str, line_no int])`\n  */\n\n\t}, {\n\t\tkey: \"parse\",\n\t\tvalue: function parse(filename, code, onError) {\n\t\t\tvar self = this;\n\n\t\t\tif (onError === undefined) {\n\t\t\t\tonError = function onError(err, filename, lineno) {\n\t\t\t\t\tself.warn(err, filename, lineno);\n\t\t\t\t};\n\t\t\t}\n\n\t\t\t// Eventual return structure (\"abstract syntax tree\" except not really)\n\t\t\tvar ast = {\n\t\t\t\tbegin: {\n\t\t\t\t\tglobal: {},\n\t\t\t\t\tvar: {},\n\t\t\t\t\tsub: {},\n\t\t\t\t\tperson: {},\n\t\t\t\t\tarray: {}\n\t\t\t\t},\n\t\t\t\ttopics: {},\n\t\t\t\tobjects: []\n\t\t\t};\n\n\t\t\t// Track temporary variables.\n\t\t\tvar topic = \"random\"; // Default topic = random\n\t\t\tvar comment = false; // In a multi-line comment.\n\t\t\tvar inobj = false; // In an object macro\n\t\t\tvar objName = \"\"; // Name of the object we're in\n\t\t\tvar objLang = \"\"; // The programming language of the object\n\t\t\tvar objBuf = []; // Source code buffer of the object\n\t\t\tvar curTrig = null; // Pointer to the current trigger in the ast.topics\n\t\t\tvar lastcmd = \"\"; // Last command code\n\t\t\tvar isThat = null; // Is a %Previous trigger\n\n\t\t\t// Local (file scoped) parser options\n\t\t\tvar localOptions = {\n\t\t\t\tconcat: self.master._concat != null ? self.master._concat : \"none\"\n\t\t\t};\n\n\t\t\t// Supported concat modes for `! local concat`\n\t\t\tvar concatModes = {\n\t\t\t\tnone: \"\",\n\t\t\t\tnewline: \"\\n\",\n\t\t\t\tspace: \" \"\n\t\t\t};\n\n\t\t\t// Go through the lines of code.\n\t\t\tvar lines = code.split(\"\\n\");\n\t\t\tfor (var lp = 0, len = lines.length; lp < len; lp++) {\n\t\t\t\tvar line = lines[lp];\n\t\t\t\tvar lineno = lp + 1;\n\n\t\t\t\t// Strip the line.\n\t\t\t\tline = utils.strip(line);\n\t\t\t\tif (line.length === 0) {\n\t\t\t\t\tcontinue; // Skip blank lines!\n\t\t\t\t}\n\n\t\t\t\t//-----------------------------\n\t\t\t\t// Are we inside an `> object`?\n\t\t\t\t//-----------------------------\n\t\t\t\tif (inobj) {\n\t\t\t\t\t// End of the object?\n\t\t\t\t\tif (line.indexOf(\"< object\") > -1 || line.indexOf(\"<object\") > -1) {\n\t\t\t\t\t\t// TODO\n\t\t\t\t\t\t// End the object.\n\t\t\t\t\t\tif (objName.length > 0) {\n\t\t\t\t\t\t\tast.objects.push({\n\t\t\t\t\t\t\t\tname: objName,\n\t\t\t\t\t\t\t\tlanguage: objLang,\n\t\t\t\t\t\t\t\tcode: objBuf\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t\t\tobjName = objLang = \"\";\n\t\t\t\t\t\tobjBuf = [];\n\t\t\t\t\t\tinobj = false;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tobjBuf.push(line);\n\t\t\t\t\t}\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\t//------------------\n\t\t\t\t// Look for comments\n\t\t\t\t//------------------\n\t\t\t\tif (line.indexOf(\"//\") === 0) {\n\t\t\t\t\t// Single line comment\n\t\t\t\t\tcontinue;\n\t\t\t\t} else if (line.indexOf(\"#\") === 0) {\n\t\t\t\t\t// Old style single line comment\n\t\t\t\t\tself.warn(\"Using the # symbol for comments is deprecated\", filename, lineno);\n\t\t\t\t\tcontinue;\n\t\t\t\t} else if (line.indexOf(\"/*\") === 0) {\n\t\t\t\t\t// Start of a multi-line comment.\n\t\t\t\t\tif (line.indexOf(\"*/\") > -1) {\n\t\t\t\t\t\t// The end comment is on the same line!\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\n\t\t\t\t\t// We're now inside a multi-line comment.\n\t\t\t\t\tcomment = true;\n\t\t\t\t\tcontinue;\n\t\t\t\t} else if (line.indexOf(\"*/\") > -1) {\n\t\t\t\t\t// End of a multi-line comment.\n\t\t\t\t\tcomment = false;\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\tif (comment) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\t// Separate the command from the data\n\t\t\t\tif (line.length < 2) {\n\t\t\t\t\tself.warn(\"Weird single-character line '\" + line + \"' found (in topic \" + topic + \")\", filename, lineno);\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\tvar cmd = line.substring(0, 1);\n\t\t\t\tline = utils.strip(line.substring(1));\n\n\t\t\t\t// Ignore in-line comments if there's a space before and after the \"//\"\n\t\t\t\tif (line.indexOf(\" //\") > -1) {\n\t\t\t\t\tline = utils.strip(line.split(\" //\")[0]);\n\t\t\t\t}\n\n\t\t\t\t// Allow the ?Keyword command to work around UTF-8 bugs for users who\n\t\t\t\t// wanted to use `+ [*] keyword [*]` with Unicode symbols that don't match\n\t\t\t\t// properly with the usual \"optional wildcard\" syntax.\n\t\t\t\tif (cmd === \"?\") {\n\t\t\t\t\t// The ?Keyword command is really an alias to +Trigger with some workarounds\n\t\t\t\t\t// to make it match the keyword _anywhere_, in every variation so it works\n\t\t\t\t\t// with Unicode strings.\n\t\t\t\t\tvar variants = [line, \"[*]\" + line + \"[*]\", \"*\" + line + \"*\", \"[*]\" + line + \"*\", \"*\" + line + \"[*]\", line + \"*\", \"*\" + line];\n\t\t\t\t\tcmd = \"+\";\n\t\t\t\t\tline = \"(\" + variants.join(\"|\") + \")\";\n\t\t\t\t\tself.say(\"Rewrote ?Keyword as +Trigger: \" + line);\n\t\t\t\t}\n\n\t\t\t\t// In the event of a +Trigger, if we are force-lowercasing it, then do so\n\t\t\t\t// now before the syntax check.\n\t\t\t\tif (self.master._forceCase === true && cmd === \"+\") {\n\t\t\t\t\tline = line.toLowerCase();\n\t\t\t\t}\n\n\t\t\t\t// Run a syntax check on this line.\n\t\t\t\tvar syntaxError = self.checkSyntax(cmd, line);\n\t\t\t\tif (syntaxError !== \"\") {\n\t\t\t\t\tif (self.strict) {\n\t\t\t\t\t\tonError.call(null, \"Syntax error: \" + syntaxError + \" at \" + filename + \" line \" + lineno + \" near \" + cmd + \" \" + line);\n\t\t\t\t\t} else {\n\t\t\t\t\t\tself.warn(\"Syntax error: \" + syntaxError + \" at \" + filename + \" line \" + lineno + \" near \" + cmd + \" \" + line + \" (in topic \" + topic + \")\");\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Reset the %Previous state if this is a new +Trigger.\n\t\t\t\tif (cmd === \"+\") {\n\t\t\t\t\tisThat = null;\n\t\t\t\t}\n\n\t\t\t\tself.say(\"Cmd: \" + cmd + \"; line: \" + line);\n\t\t\t\t// Do a look-ahead for ^Continue and %Previous commands.\n\t\t\t\tfor (var li = lp + 1, len2 = lines.length; li < len2; li++) {\n\t\t\t\t\tvar lookahead = lines[li];\n\t\t\t\t\tlookahead = utils.strip(lookahead);\n\t\t\t\t\tif (lookahead.length < 2) {\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\n\t\t\t\t\tvar lookCmd = lookahead.substring(0, 1);\n\t\t\t\t\tlookahead = utils.strip(lookahead.substring(1));\n\n\t\t\t\t\t// We only care about a couple lookahead command types.\n\t\t\t\t\tif (lookCmd !== \"%\" && lookCmd !== \"^\") {\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\n\t\t\t\t\t// Only continue if the lookahead has any data.\n\t\t\t\t\tif (lookahead.length === 0) {\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\n\t\t\t\t\tself.say(\"\\tLookahead \" + li + \": \" + lookCmd + \" \" + lookahead);\n\n\t\t\t\t\t// If the current command is a +, see if the following is a %.\n\t\t\t\t\tif (cmd === \"+\") {\n\t\t\t\t\t\tif (lookCmd === \"%\") {\n\t\t\t\t\t\t\tisThat = lookahead;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tisThat = null;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// If the current command is a ! and the next command(s) are ^ we'll\n\t\t\t\t\t// tack each extension on as a line break (which is useful information\n\t\t\t\t\t// for arrays).\n\t\t\t\t\tif (cmd === \"!\") {\n\t\t\t\t\t\tif (lookCmd === \"^\") {\n\t\t\t\t\t\t\tline += \"<crlf>\" + lookahead;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\n\t\t\t\t\t// If the current command is not a ^, and the line after is not a %,\n\t\t\t\t\t// but the line after IS a ^, then tack it on to the end of the current\n\t\t\t\t\t// line.\n\t\t\t\t\tif (cmd !== \"^\" && lookCmd !== \"%\") {\n\t\t\t\t\t\tif (lookCmd === \"^\") {\n\t\t\t\t\t\t\t// Which character to concatenate with?\n\t\t\t\t\t\t\tif (concatModes[localOptions.concat] !== void 0) {\n\t\t\t\t\t\t\t\tline += concatModes[localOptions.concat] + lookahead;\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tline += lookahead;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tvar type = \"\",\n\t\t\t\t    name = \"\";\n\n\t\t\t\t// Handle the types of RiveScript commands.\n\t\t\t\tswitch (cmd) {\n\t\t\t\t\tcase \"!\":\n\t\t\t\t\t\t// ! Define\n\t\t\t\t\t\tvar halves = line.split(\"=\", 2);\n\t\t\t\t\t\tvar left = utils.strip(halves[0]).split(\" \");\n\t\t\t\t\t\tvar value = \"\";\n\t\t\t\t\t\tname = \"\";\n\t\t\t\t\t\ttype = \"\";\n\t\t\t\t\t\tif (halves.length === 2) {\n\t\t\t\t\t\t\tvalue = utils.strip(halves[1]);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tif (left.length >= 1) {\n\t\t\t\t\t\t\ttype = utils.strip(left[0]);\n\t\t\t\t\t\t\tif (left.length >= 2) {\n\t\t\t\t\t\t\t\tleft.shift();\n\t\t\t\t\t\t\t\tname = utils.strip(left.join(\" \"));\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Remove 'fake' line breaks unless this is an array.\n\t\t\t\t\t\tif (type !== \"array\") {\n\t\t\t\t\t\t\tvalue = value.replace(/<crlf>/g, \"\");\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Handle version numbers.\n\t\t\t\t\t\tif (type === \"version\") {\n\t\t\t\t\t\t\tif (parseFloat(value) > parseFloat(RS_VERSION)) {\n\t\t\t\t\t\t\t\tonError.call(null, \"Unsupported RiveScript version. We only support \" + RS_VERSION + \" at \" + filename + \" line \" + lineno, filename, lineno);\n\t\t\t\t\t\t\t\treturn ast;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// All other types of defines require a value and variable name.\n\t\t\t\t\t\tif (name.length === 0) {\n\t\t\t\t\t\t\tself.warn(\"Undefined variable name\", filename, lineno);\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (value.length === 0) {\n\t\t\t\t\t\t\tself.warn(\"Undefined variable value\", filename, lineno);\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Handle the rest of the !Define types.\n\t\t\t\t\t\tswitch (type) {\n\t\t\t\t\t\t\tcase \"local\":\n\t\t\t\t\t\t\t\t// Local file-scoped parser options.\n\t\t\t\t\t\t\t\tself.say(\"\\tSet local parser option \" + name + \" = \" + value);\n\t\t\t\t\t\t\t\tlocalOptions[name] = value;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tcase \"global\":\n\t\t\t\t\t\t\t\t// Set a 'global' variable.\n\t\t\t\t\t\t\t\tself.say(\"\\tSet global \" + name + \" = \" + value);\n\t\t\t\t\t\t\t\tast.begin.global[name] = value;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tcase \"var\":\n\t\t\t\t\t\t\t\t// Bot variables.\n\t\t\t\t\t\t\t\tself.say(\"\\tSet bot variable \" + name + \" = \" + value);\n\t\t\t\t\t\t\t\tast.begin.var[name] = value;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tcase \"array\":\n\t\t\t\t\t\t\t\t// Arrays\n\t\t\t\t\t\t\t\tif (value === \"<undef>\") {\n\t\t\t\t\t\t\t\t\tast.begin.array[name] = \"<undef>\";\n\t\t\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// Did this have multiple parts?\n\t\t\t\t\t\t\t\tvar parts = value.split(\"<crlf>\");\n\n\t\t\t\t\t\t\t\t// Process each line of array data.\n\t\t\t\t\t\t\t\tvar _fields = [];\n\t\t\t\t\t\t\t\tfor (var l = 0, _len = parts.length; l < _len; l++) {\n\t\t\t\t\t\t\t\t\tvar val = parts[l];\n\t\t\t\t\t\t\t\t\tif (val.indexOf(\"|\") > -1) {\n\t\t\t\t\t\t\t\t\t\t_fields.push.apply(_fields, val.split(\"|\"));\n\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\t_fields.push.apply(_fields, val.split(\" \"));\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// Convert any remaining '\\s' over.\n\t\t\t\t\t\t\t\tfor (var i = 0, len3 = _fields.length; i < len3; i++) {\n\t\t\t\t\t\t\t\t\tvar field = _fields[i];\n\t\t\t\t\t\t\t\t\t_fields[i] = _fields[i].replace(/\\\\s/ig, \" \");\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// Delete any empty fields.\n\t\t\t\t\t\t\t\t_fields = _fields.filter(function (val) {\n\t\t\t\t\t\t\t\t\treturn val !== '';\n\t\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\t\t\tself.say(\"\\tSet array \" + name + \" = \" + JSON.stringify(_fields));\n\t\t\t\t\t\t\t\tast.begin.array[name] = _fields;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tcase \"sub\":\n\t\t\t\t\t\t\t\t// Substitutions\n\t\t\t\t\t\t\t\tself.say(\"\\tSet substitution \" + name + \" = \" + value);\n\t\t\t\t\t\t\t\tast.begin.sub[name] = value;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tcase \"person\":\n\t\t\t\t\t\t\t\t// Person substitutions\n\t\t\t\t\t\t\t\tself.say(\"\\tSet person substitution \" + name + \" = \" + value);\n\t\t\t\t\t\t\t\tast.begin.person[name] = value;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tdefault:\n\t\t\t\t\t\t\t\tself.warn(\"Unknown definition type \" + type, filename, lineno);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase \">\":\n\t\t\t\t\t\t// > Label\n\t\t\t\t\t\tvar temp = utils.strip(line).split(\" \");\n\t\t\t\t\t\ttype = temp.shift();\n\t\t\t\t\t\tname = \"\";\n\t\t\t\t\t\tvar fields = [];\n\t\t\t\t\t\tif (temp.length > 0) {\n\t\t\t\t\t\t\tname = temp.shift();\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (temp.length > 0) {\n\t\t\t\t\t\t\tfields = temp;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Handle the label types.\n\t\t\t\t\t\tswitch (type) {\n\t\t\t\t\t\t\tcase \"begin\":\n\t\t\t\t\t\t\tcase \"topic\":\n\t\t\t\t\t\t\t\tif (type === \"begin\") {\n\t\t\t\t\t\t\t\t\tself.say(\"Found the BEGIN block.\");\n\t\t\t\t\t\t\t\t\ttype = \"topic\";\n\t\t\t\t\t\t\t\t\tname = \"__begin__\";\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// Force case on topics.\n\t\t\t\t\t\t\t\tif (self.master._forceCase === true) {\n\t\t\t\t\t\t\t\t\tname = name.toLowerCase();\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// Starting a new topic.\n\t\t\t\t\t\t\t\tself.say(\"Set topic to \" + name);\n\t\t\t\t\t\t\t\tcurTrig = null;\n\t\t\t\t\t\t\t\ttopic = name;\n\n\t\t\t\t\t\t\t\t// Initialize the topic tree.\n\t\t\t\t\t\t\t\tself.initTopic(ast.topics, topic);\n\n\t\t\t\t\t\t\t\t// Does this topic include or inherit another one?\n\t\t\t\t\t\t\t\tvar mode = \"\";\n\t\t\t\t\t\t\t\tif (fields.length >= 2) {\n\t\t\t\t\t\t\t\t\tfor (var n = 0, len4 = fields.length; n < len4; n++) {\n\t\t\t\t\t\t\t\t\t\tvar _field = fields[n];\n\t\t\t\t\t\t\t\t\t\tif (_field === \"includes\" || _field === \"inherits\") {\n\t\t\t\t\t\t\t\t\t\t\tmode = _field;\n\t\t\t\t\t\t\t\t\t\t} else if (mode !== \"\") {\n\t\t\t\t\t\t\t\t\t\t\t// This topic is either inherited or included.\n\t\t\t\t\t\t\t\t\t\t\tast.topics[topic][mode][_field] = 1;\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tcase \"object\":\n\t\t\t\t\t\t\t\t// If a field was provided, it should be the programming language.\n\t\t\t\t\t\t\t\tvar lang = \"\";\n\t\t\t\t\t\t\t\tif (fields.length > 0) {\n\t\t\t\t\t\t\t\t\tlang = fields[0].toLowerCase();\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// Missing language, try to assume it's JS.\n\t\t\t\t\t\t\t\tif (lang === \"\") {\n\t\t\t\t\t\t\t\t\tself.warn(\"Trying to parse unknown programming language\", filename, lineno);\n\t\t\t\t\t\t\t\t\tlang = \"javascript\";\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t// Start reading the object code.\n\t\t\t\t\t\t\t\tobjName = name;\n\t\t\t\t\t\t\t\tobjLang = lang;\n\t\t\t\t\t\t\t\tobjBuf = [];\n\t\t\t\t\t\t\t\tinobj = true;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tdefault:\n\t\t\t\t\t\t\t\tself.warn(\"Unknown label type \" + type, filename, lineno);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase \"<\":\n\t\t\t\t\t\t// < Label\n\t\t\t\t\t\ttype = line;\n\t\t\t\t\t\tif (type === \"begin\" || type === \"topic\") {\n\t\t\t\t\t\t\tself.say(\"\\tEnd the topic label.\");\n\t\t\t\t\t\t\ttopic = \"random\";\n\t\t\t\t\t\t} else if (type === \"object\") {\n\t\t\t\t\t\t\tself.say(\"\\tEnd the object label.\");\n\t\t\t\t\t\t\tinobj = false;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase \"+\":\n\t\t\t\t\t\t// + Trigger\n\t\t\t\t\t\tself.say(\"\\tTrigger pattern: \" + line);\n\n\t\t\t\t\t\t// Initialize the trigger tree.\n\t\t\t\t\t\tself.initTopic(ast.topics, topic);\n\t\t\t\t\t\tcurTrig = {\n\t\t\t\t\t\t\ttrigger: line,\n\t\t\t\t\t\t\treply: [],\n\t\t\t\t\t\t\tcondition: [],\n\t\t\t\t\t\t\tredirect: null,\n\t\t\t\t\t\t\tprevious: isThat\n\t\t\t\t\t\t};\n\t\t\t\t\t\tast.topics[topic].triggers.push(curTrig);\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase \"-\":\n\t\t\t\t\t\t// - Response\n\t\t\t\t\t\tif (curTrig === null) {\n\t\t\t\t\t\t\tself.warn(\"Response found before trigger\", filename, lineno);\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Warn if we also saw a hard redirect.\n\t\t\t\t\t\tif (curTrig.redirect !== null) {\n\t\t\t\t\t\t\tself.warn(\"You can't mix @Redirects with -Replies\", filename, lineno);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tself.say(\"\\tResponse: \" + line);\n\t\t\t\t\t\tcurTrig.reply.push(line);\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase \"*\":\n\t\t\t\t\t\t// * Condition\n\t\t\t\t\t\tif (curTrig === null) {\n\t\t\t\t\t\t\tself.warn(\"Condition found before trigger\", filename, lineno);\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Warn if we also saw a hard redirect.\n\t\t\t\t\t\tif (curTrig.redirect !== null) {\n\t\t\t\t\t\t\tself.warn(\"You can't mix @Redirects with *Conditions\", filename, lineno);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tself.say(\"\\tCondition: \" + line);\n\t\t\t\t\t\tcurTrig.condition.push(line);\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase \"%\":\n\t\t\t\t\t\t// % Previous\n\t\t\t\t\t\tcontinue; // This was handled above\n\t\t\t\t\tcase \"^\":\n\t\t\t\t\t\t// ^ Continue\n\t\t\t\t\t\tcontinue; // This was handled above\n\t\t\t\t\tcase \"@\":\n\t\t\t\t\t\t// @ Redirect\n\t\t\t\t\t\t// Make sure they didn't mix them with incompatible commands.\n\t\t\t\t\t\tif (curTrig.reply.length > 0 || curTrig.condition.length > 0) {\n\t\t\t\t\t\t\tself.warn(\"You can't mix @Redirects with -Replies or *Conditions\", filename, lineno);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tself.say(\"\\tRedirect response to: \" + line);\n\t\t\t\t\t\tcurTrig.redirect = utils.strip(line);\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tdefault:\n\t\t\t\t\t\tself.warn(\"Unknown command '\" + cmd + \"' (in topic \" + topic + \")\", filename, lineno);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn ast;\n\t\t}\n\n\t\t/**\n  string stringify (data deparsed)\n  \tTranslate deparsed data into the source code of a RiveScript document.\n  See the `stringify()` method on the parent RiveScript class; this is its\n  implementation.\n  */\n\n\t}, {\n\t\tkey: \"stringify\",\n\t\tvalue: function stringify(deparsed) {\n\t\t\tvar self = this;\n\n\t\t\tif (deparsed == null) {\n\t\t\t\tdeparsed = self.master.deparse();\n\t\t\t}\n\n\t\t\t// Helper function to write out the contents of triggers.\n\t\t\tvar _writeTriggers = function _writeTriggers(triggers, indent) {\n\t\t\t\tvar id = indent ? \"\\t\" : \"\";\n\t\t\t\tvar output = [];\n\t\t\t\tfor (var j = 0, len = triggers.length; j < len; j++) {\n\t\t\t\t\tvar t = triggers[j];\n\t\t\t\t\toutput.push(id + \"+ \" + t.trigger);\n\t\t\t\t\tif (t.previous) {\n\t\t\t\t\t\toutput.push(id + \"% \" + t.previous);\n\t\t\t\t\t}\n\t\t\t\t\tif (t.condition) {\n\t\t\t\t\t\tfor (var k = 0, len1 = t.condition.length; k < len1; k++) {\n\t\t\t\t\t\t\tvar c = t.condition[k];\n\t\t\t\t\t\t\toutput.push(id + \"* \" + c.replace(/\\n/mg, \"\\\\n\"));\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tif (t.redirect) {\n\t\t\t\t\t\toutput.push(id + \"@ \" + t.redirect);\n\t\t\t\t\t}\n\t\t\t\t\tif (t.reply) {\n\t\t\t\t\t\tfor (var l = 0, len2 = t.reply.length; l < len2; l++) {\n\t\t\t\t\t\t\tvar r = t.reply[l];\n\t\t\t\t\t\t\tif (r) {\n\t\t\t\t\t\t\t\toutput.push(id + \"- \" + r.replace(/\\n/mg, \"\\\\n\"));\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\toutput.push(\"\");\n\t\t\t\t}\n\t\t\t\treturn output;\n\t\t\t};\n\n\t\t\t// Lines of code to return.\n\t\t\tvar source = [\"! version = 2.0\", \"! local concat = none\", \"\"];\n\t\t\tvar ref = [\"global\", \"var\", \"sub\", \"person\", \"array\"];\n\n\t\t\t// Stringify begin-like data first.\n\t\t\tfor (var j = 0, len = ref.length; j < len; j++) {\n\t\t\t\tvar begin = ref[j];\n\t\t\t\tif (deparsed.begin[begin] != null && Object.keys(deparsed.begin[begin]).length) {\n\t\t\t\t\tfor (var key in deparsed.begin[begin]) {\n\t\t\t\t\t\tvar value = deparsed.begin[begin][key];\n\t\t\t\t\t\tif (!deparsed.begin[begin].hasOwnProperty(key)) {\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Arrays need special treatment, all others are simple.\n\t\t\t\t\t\tif (begin !== \"array\") {\n\t\t\t\t\t\t\tsource.push(\"! \" + begin + \" \" + key + \" = \" + value);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t// Array elements need to be joined by either spaces or pipes.\n\t\t\t\t\t\t\tvar pipes = \" \";\n\t\t\t\t\t\t\tfor (var k = 0, len1 = value.length; k < len1; k++) {\n\t\t\t\t\t\t\t\tvar test = value[k];\n\t\t\t\t\t\t\t\tif (test.match(/\\s+/)) {\n\t\t\t\t\t\t\t\t\tpipes = \"|\";\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tsource.push(\"! \" + begin + \" \" + key + \" = \" + value.join(pipes));\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tsource.push(\"\");\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Do objects. Requires stripping out the actual function wrapper\n\t\t\tif (deparsed.objects) {\n\t\t\t\tfor (var lang in deparsed.objects) {\n\t\t\t\t\tif (deparsed.objects[lang] && deparsed.objects[lang]._objects) {\n\t\t\t\t\t\tfor (var func in deparsed.objects[lang]._objects) {\n\t\t\t\t\t\t\tsource.push(\"> object \" + func + \" \" + lang);\n\t\t\t\t\t\t\tsource.push(deparsed.objects[lang]._objects[func].toString().match(/function[^{]+\\{\\n*([\\s\\S]*)\\}\\;?\\s*$/m)[1].trim().split(\"\\n\").map(function (ln) {\n\t\t\t\t\t\t\t\treturn \"\\t\" + ln;\n\t\t\t\t\t\t\t}).join(\"\\n\"));\n\t\t\t\t\t\t\tsource.push(\"< object\\n\");\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif (deparsed.begin.triggers && deparsed.begin.triggers.length > 0) {\n\t\t\t\tsource.push(\"> begin\\n\");\n\t\t\t\tsource.push.apply(source, _writeTriggers(deparsed.begin.triggers, \"indent\"));\n\t\t\t\tsource.push(\"< begin\\n\");\n\t\t\t}\n\n\t\t\t// Do the topics. Random first!\n\t\t\tvar topics = Object.keys(deparsed.topics).sort(function (a, b) {\n\t\t\t\treturn a - b;\n\t\t\t});\n\t\t\ttopics.unshift(\"random\");\n\t\t\tvar doneRandom = false;\n\t\t\tfor (var l = 0, len2 = topics.length; l < len2; l++) {\n\t\t\t\tvar topic = topics[l];\n\t\t\t\tif (!deparsed.topics.hasOwnProperty(topic)) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\tif (topic === \"random\" && doneRandom) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\tif (topic === \"random\") {\n\t\t\t\t\tdoneRandom = 1;\n\t\t\t\t}\n\n\t\t\t\tvar tagged = false; // Use `> topic` tag; not for random, usually\n\t\t\t\tvar tagline = [];\n\t\t\t\tif (topic !== \"random\" || Object.keys(deparsed.inherits[topic]).length > 0 || Object.keys(deparsed.includes[topic]).length > 0) {\n\t\t\t\t\t// Topics other than \"random\" are *always* tagged. Otherwise (for random)\n\t\t\t\t\t// it's only tagged if it's found to have includes or inherits. But we\n\t\t\t\t\t// wait to see if this is the case because those things are kept in JS\n\t\t\t\t\t// objects and third party JS libraries like to inject junk into the root\n\t\t\t\t\t// Object prototype...\n\t\t\t\t\tif (topic !== \"random\") {\n\t\t\t\t\t\ttagged = true;\n\t\t\t\t\t}\n\n\t\t\t\t\t// Start building the tag line.\n\t\t\t\t\tvar inherits = [];\n\t\t\t\t\tvar includes = [];\n\t\t\t\t\tfor (var i in deparsed.inherits[topic]) {\n\t\t\t\t\t\tif (!deparsed.inherits[topic].hasOwnProperty(i)) {\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tinherits.push(i);\n\t\t\t\t\t}\n\t\t\t\t\tfor (var _i in deparsed.includes[topic]) {\n\t\t\t\t\t\tif (!deparsed.includes[topic].hasOwnProperty(_i)) {\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tincludes.push(_i);\n\t\t\t\t\t}\n\t\t\t\t\tif (includes.length > 0) {\n\t\t\t\t\t\tincludes.unshift(\"includes\");\n\t\t\t\t\t\ttagline.push.apply(tagline, includes);\n\t\t\t\t\t\ttagged = true;\n\t\t\t\t\t}\n\t\t\t\t\tif (inherits.length > 0) {\n\t\t\t\t\t\tinherits.unshift(\"inherits\");\n\t\t\t\t\t\ttagline.push.apply(tagline, inherits);\n\t\t\t\t\t\ttagged = true;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tif (tagged) {\n\t\t\t\t\tsource.push((\"> topic \" + topic + \" \" + tagline.join(\" \")).trim() + \"\\n\");\n\t\t\t\t}\n\n\t\t\t\tsource.push.apply(source, _writeTriggers(deparsed.topics[topic], tagged));\n\n\t\t\t\tif (tagged) {\n\t\t\t\t\tsource.push(\"< topic\\n\");\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn source.join(\"\\n\");\n\t\t}\n\n\t\t/**\n  string checkSyntax (char command, string line)\n  \tCheck the syntax of a RiveScript command. `command` is the single character\n  command symbol, and `line` is the rest of the line after the command.\n  \tReturns an empty string on success, or a description of the error on error.\n  */\n\n\t}, {\n\t\tkey: \"checkSyntax\",\n\t\tvalue: function checkSyntax(cmd, line) {\n\t\t\tvar self = this;\n\n\t\t\t// Run syntax tests based on the command used.\n\t\t\tif (cmd === \"!\") {\n\t\t\t\t// ! Definition\n\t\t\t\t// - Must be formatted like this:\n\t\t\t\t//   ! type name = value\n\t\t\t\t//   OR\n\t\t\t\t//   ! type = value\n\t\t\t\tif (!line.match(/^.+(?:\\s+.+|)\\s*=\\s*.+?$/)) {\n\t\t\t\t\treturn \"Invalid format for !Definition line: must be '! type name = value' OR '! type = value'\";\n\t\t\t\t} else if (line.match(/^array/)) {\n\t\t\t\t\tif (line.match(/\\=\\s?\\||\\|\\s?$/)) {\n\t\t\t\t\t\treturn \"Piped arrays can't begin or end with a |\";\n\t\t\t\t\t} else if (line.match(/\\|\\|/)) {\n\t\t\t\t\t\treturn \"Piped arrays can't include blank entries\";\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else if (cmd === \">\") {\n\t\t\t\t// > Label\n\t\t\t\t// - The \"begin\" label must have only one argument (\"begin\")\n\t\t\t\t// - The \"topic\" label must be lowercased but can inherit other topics\n\t\t\t\t// - The \"object\" label must follow the same rules as \"topic\", but don't\n\t\t\t\t//   need to be lowercased.\n\t\t\t\tvar parts = line.split(/\\s+/);\n\t\t\t\tif (parts[0] === \"begin\" && parts.length > 1) {\n\t\t\t\t\treturn \"The 'begin' label takes no additional arguments\";\n\t\t\t\t} else if (parts[0] === \"topic\") {\n\t\t\t\t\tif (!self.master._forceCase && line.match(/[^a-z0-9_\\-\\s]/)) {\n\t\t\t\t\t\treturn \"Topics should be lowercased and contain only letters and numbers\";\n\t\t\t\t\t} else if (line.match(/[^A-Za-z0-9_\\-\\s]/)) {\n\t\t\t\t\t\treturn \"Topics should contain only letters and numbers in forceCase mode\";\n\t\t\t\t\t}\n\t\t\t\t} else if (parts[0] === \"object\") {\n\t\t\t\t\tif (line.match(/[^A-Za-z0-9_\\-\\s]/)) {\n\t\t\t\t\t\treturn \"Objects can only contain numbers and letters\";\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else if (cmd === \"+\" || cmd === \"%\" || cmd === \"@\") {\n\t\t\t\t// + Trigger, % Previous, @ Redirect\n\t\t\t\t// This one is strict. The triggers are to be run through the regexp\n\t\t\t\t// engine, therefore it should be acceptable for the regexp engine.\n\t\t\t\t// - Entirely lowercase\n\t\t\t\t// - No symbols except: ( | ) [ ] * _ # { } < > =\n\t\t\t\t// - All brackets should be matched.\n\t\t\t\tvar parens = 0,\n\t\t\t\t    square = 0,\n\t\t\t\t    curly = 0,\n\t\t\t\t    angle = 0;\n\n\t\t\t\t// Look for obvious errors first.\n\t\t\t\tif (self.utf8) {\n\t\t\t\t\t// In UTF-8 mode, most symbols are allowed.\n\t\t\t\t\tif (line.match(/[A-Z\\\\.]/)) {\n\t\t\t\t\t\treturn \"Triggers can't contain uppercase letters, backslashes or dots in UTF-8 mode\";\n\t\t\t\t\t}\n\t\t\t\t} else if (line.match(/[^a-z0-9(|)\\[\\]*_#@{}<>=\\/\\s]/)) {\n\t\t\t\t\treturn \"Triggers may only contain lowercase letters, numbers, and these symbols: ( | ) [ ] * _ # { } < > = /\";\n\t\t\t\t} else if (line.match(/\\(\\||\\|\\)/)) {\n\t\t\t\t\treturn \"Piped alternations can't begin or end with a |\";\n\t\t\t\t} else if (line.match(/\\([^\\)].+\\|\\|.+\\)/)) {\n\t\t\t\t\treturn \"Piped alternations can't include blank entries\";\n\t\t\t\t} else if (line.match(/\\[\\||\\|\\]/)) {\n\t\t\t\t\treturn \"Piped optionals can't begin or end with a |\";\n\t\t\t\t} else if (line.match(/\\[[^\\]].+\\|\\|.+\\]/)) {\n\t\t\t\t\treturn \"Piped optionals can't include blank entries\";\n\t\t\t\t}\n\n\t\t\t\t// Count the brackets.\n\t\t\t\tvar chars = line.split(\"\");\n\t\t\t\tfor (var j = 0, len = chars.length; j < len; j++) {\n\t\t\t\t\tvar char = chars[j];\n\t\t\t\t\tswitch (char) {\n\t\t\t\t\t\tcase \"(\":\n\t\t\t\t\t\t\tparens++;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase \")\":\n\t\t\t\t\t\t\tparens--;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase \"[\":\n\t\t\t\t\t\t\tsquare++;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase \"]\":\n\t\t\t\t\t\t\tsquare--;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase \"{\":\n\t\t\t\t\t\t\tcurly++;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase \"}\":\n\t\t\t\t\t\t\tcurly--;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase \"<\":\n\t\t\t\t\t\t\tangle++;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase \">\":\n\t\t\t\t\t\t\tangle--;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Any mismatches?\n\t\t\t\tif (parens !== 0) {\n\t\t\t\t\treturn \"Unmatched parenthesis brackets\";\n\t\t\t\t}\n\t\t\t\tif (square !== 0) {\n\t\t\t\t\treturn \"Unmatched square brackets\";\n\t\t\t\t}\n\t\t\t\tif (curly !== 0) {\n\t\t\t\t\treturn \"Unmatched curly brackets\";\n\t\t\t\t}\n\t\t\t\tif (angle !== 0) {\n\t\t\t\t\treturn \"Unmatched angle brackets\";\n\t\t\t\t}\n\t\t\t} else if (cmd === \"*\") {\n\t\t\t\t// * Condition\n\t\t\t\t// Syntax for a conditional is as follows:\n\t\t\t\t// * value symbol value => response\n\t\t\t\tif (!line.match(/^.+?\\s*(?:==|eq|!=|ne|<>|<|<=|>|>=)\\s*.+?=>.+?$/)) {\n\t\t\t\t\treturn \"Invalid format for !Condition: should be like '* value symbol value => response'\";\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// No problems!\n\t\t\treturn \"\";\n\t\t}\n\n\t\t/**\n  private void initTopic (object topics, string name)\n  \tInitialize the topic tree for the parsing phase. Sets up the topic under\n  ast.topics with all its relevant keys and sub-keys, etc.\n  */\n\n\t}, {\n\t\tkey: \"initTopic\",\n\t\tvalue: function initTopic(topics, name) {\n\t\t\tvar self = this;\n\t\t\tif (topics[name] === undefined) {\n\t\t\t\ttopics[name] = {\n\t\t\t\t\tincludes: {},\n\t\t\t\t\tinherits: {},\n\t\t\t\t\ttriggers: []\n\t\t\t\t};\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn Parser;\n}();\n\nmodule.exports = Parser;\n\n//# sourceURL=webpack://RiveScript/./src/parser.js?");

/***/ }),

/***/ "./src/rivescript.js":
/*!***************************!*\
  !*** ./src/rivescript.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {// RiveScript.js\n// https://www.rivescript.com/\n\n// This code is released under the MIT License.\n// See the \"LICENSE\" file for more information.\n\n\n\n/**\nNotice to Developers\n\nThe methods prefixed with the word \"private\" *should not be used* by you. They\nare documented here to help the RiveScript library developers understand the\ncode; they are not considered 'stable' API functions and they may change or\nbe removed at any time, for any reason, and with no advance notice.\n\nThe most commonly used private function I've seen developers use is the\n`parse()` function, when they want to load RiveScript code from a string\ninstead of a file. **Do not use this function.** The public API equivalent\nfunction is `stream()`. The parse function will probably be removed in the\nnear future.\n*/\n\n// Constants\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar VERSION = \"2.1.0\";\n\n// Helper modules\nvar Parser = __webpack_require__(/*! ./parser */ \"./src/parser.js\");\nvar Brain = __webpack_require__(/*! ./brain */ \"./src/brain.js\");\nvar utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nvar sorting = __webpack_require__(/*! ./sorting */ \"./src/sorting.js\");\nvar inherit_utils = __webpack_require__(/*! ./inheritance */ \"./src/inheritance.js\");\n\nvar _require = __webpack_require__(/*! ./sessions */ \"./src/sessions.js\"),\n    MemorySessionManager = _require.MemorySessionManager;\n\nvar JSObjectHandler = __webpack_require__(/*! ./lang/javascript */ \"./src/lang/javascript.js\");\nvar readDir = __webpack_require__(/*! fs-readdir-recursive */ \"./node_modules/fs-readdir-recursive/index.js\");\n\n/**\nRiveScript (hash options)\n\nCreate a new RiveScript interpreter. `options` is an object with the\nfollowing keys:\n\n```\n* bool debug:     Debug mode               (default false)\n* int  depth:     Recursion depth limit    (default 50)\n* bool strict:    Strict mode              (default true)\n* bool utf8:      Enable UTF-8 mode        (default false, see below)\n* bool forceCase: Force-lowercase triggers (default false, see below)\n* func onDebug:   Set a custom handler to catch debug log messages (default null)\n* obj  errors:    Customize certain error messages (see below)\n* str  concat:    Globally replace the default concatenation mode when parsing\n                  RiveScript source files (default `null`. be careful when\n                  setting this option if using somebody else's RiveScript\n                  personality; see below)\n* sessionManager: provide a custom session manager to store user variables.\n                  The default is to store variables in memory, but you may\n                  use any async data store by providing an implementation of\n                  RiveScript's SessionManager. See the\n                  [sessions](./sessions.md) documentation.\n```\n\n## UTF-8 Mode\n\nIn UTF-8 mode, most characters in a user's message are left intact, except for\ncertain metacharacters like backslashes and common punctuation characters like\n`/[.,!?;:]/`.\n\nIf you want to override the punctuation regexp, you can provide a new one by\nassigning the `unicodePunctuation` attribute of the bot object after\ninitialization. Example:\n\n```javascript\nvar bot = new RiveScript({utf8: true});\nbot.unicodePunctuation = new RegExp(/[.,!?;:]/g);\n```\n\n## Force Case\n\nThis option to the constructor will make RiveScript lowercase all the triggers\nit sees during parse time. This may ease the pain point that authors\nexperience when they need to write a lowercase \"i\" in triggers, for example\na trigger of `i am *`, where the lowercase `i` feels unnatural to type.\n\nBy default a capital ASCII letter in a trigger would raise a parse error.\nSetting the `forceCase` option to `true` will instead silently lowercase the\ntrigger and thus avoid the error.\n\nDo note, however, that this can have side effects with certain Unicode symbols\nin triggers, see [case folding in Unicode](https://www.w3.org/International/wiki/Case_folding).\nIf you need to support Unicode symbols in triggers this may cause problems with\ncertain symbols when made lowercase.\n\n## Global Concat Mode\n\nThe concat (short for concatenation) mode controls how RiveScript joins two\nlines of code together when a `^Continue` command is used in a source file.\nBy default, RiveScript simply joins them together with no symbols inserted in\nbetween (\"none\"); the other options are \"newline\" which joins them with line\nbreaks, or \"space\" which joins them with a single space character.\n\nRiveScript source files can define a *local, file-scoped* setting for this\nby using e.g. `! local concat = newline`, which affects how the continuations\nare joined in the lines that follow.\n\nBe careful when changing the global concat setting if you're using a RiveScript\npersonality written by somebody else; if they were relying on the default\nconcat behavior (didn't specify a `! local concat` option), then changing the\nglobal default will potentially cause formatting issues or trigger matching\nissues when using that personality.\n\nI strongly recommend that you **do not** use this option if you intend to ever\nshare your RiveScript personality with others; instead, explicitly spell out\nthe local concat mode in each source file. It might sound like it will save\nyou a lot of typing by not having to copy and paste a `! local concat` option,\nbut it will likely lead to misbehavior in your RiveScript personality when you\ngive it to somebody else to use in their bot.\n\n## Custom Error Messages\n\nYou can provide any or all of the following properties in the `errors`\nargument to the constructor to override certain internal error messages:\n\n* `replyNotMatched`: The message returned when the user's message does not\nmatch any triggers in your RiveScript code.\n\nThe default is \"ERR: No Reply Matched\"\n\n**Note:** the recommended way to handle this case is to provide a trigger of\nsimply `*`, which serves as the catch-all trigger and is the default one\nthat will match if nothing else matches the user's message. Example:\n\n```\n+ *\n- I don't know what to say to that!\n```\n* `replyNotFound`: This message is returned when the user *did* in fact match\na trigger, but no response was found for the user. For example, if a trigger\nonly checks a set of conditions that are all false and provides no \"normal\"\nreply, this error message is given to the user instead.\n\nThe default is \"ERR: No Reply Found\"\n\n**Note:** the recommended way to handle this case is to provide at least one\nnormal reply (with the `-` command) to every trigger to cover the cases\nwhere none of the conditions are true. Example:\n\n```\n+ hello\n* <get name> != undefined => Hello there, <get name>.\n- Hi there.\n```\n* `objectNotFound`: This message is inserted into the bot's reply in-line when\nit attempts to call an object macro which does not exist (for example, its\nname was invalid or it was written in a programming language that the bot\ncouldn't parse, or that it had compile errors).\n\nThe default is \"[ERR: Object Not Found]\"\n* `deepRecursion`: This message is inserted when the bot encounters a deep\nrecursion situation, for example when a reply redirects to a trigger which\nredirects back to the first trigger, creating an infinite loop.\n\nThe default is \"ERR: Deep Recursion Detected\"\n\nThese custom error messages can be provided during the construction of the\nRiveScript object, or set afterwards on the object's `errors` property.\n\nExamples:\n\n```javascript\nvar bot = new RiveScript({\nerrors: {\nreplyNotFound: \"I don't know how to reply to that.\"\n}\n});\n\nbot.errors.objectNotFound = \"Something went terribly wrong.\";\n```\n*/\nvar RiveScript = function () {\n\tvar RiveScript = function () {\n\t\t////////////////////////////////////////////////////////////////////////\n\t\t// Constructor and Debug Methods                                      //\n\t\t////////////////////////////////////////////////////////////////////////\n\t\tfunction RiveScript(opts) {\n\t\t\t_classCallCheck(this, RiveScript);\n\n\t\t\tvar self = this;\n\t\t\tif (opts == null) {\n\t\t\t\topts = {};\n\t\t\t}\n\n\t\t\t// Default parameters\n\t\t\tself._debug = opts.debug ? opts.debug : false;\n\t\t\tself._strict = opts.strict ? opts.strict : true;\n\t\t\tself._depth = opts.depth ? parseInt(opts.depth) : 50;\n\t\t\tself._utf8 = opts.utf8 ? opts.utf8 : false;\n\t\t\tself._forceCase = opts.forceCase ? opts.forceCase : false;\n\t\t\tself._onDebug = opts.onDebug ? opts.onDebug : null;\n\t\t\tself._concat = opts.concat ? opts.concat : null;\n\n\t\t\t// UTF-8 punctuation, overridable by the user.\n\t\t\tself.unicodePunctuation = new RegExp(/[.,!?;:]/g);\n\n\t\t\t// Customized error messages.\n\t\t\tself.errors = {\n\t\t\t\treplyNotMatched: \"ERR: No Reply Matched\",\n\t\t\t\treplyNotFound: \"ERR: No Reply Found\",\n\t\t\t\tobjectNotFound: \"[ERR: Object Not Found]\",\n\t\t\t\tdeepRecursion: \"ERR: Deep Recursion Detected\"\n\t\t\t};\n\t\t\tif (_typeof(opts.errors) === \"object\") {\n\t\t\t\tvar ref = opts.errors;\n\t\t\t\tfor (var key in ref) {\n\t\t\t\t\tvar value = ref[key];\n\t\t\t\t\tif (opts.errors.hasOwnProperty(key)) {\n\t\t\t\t\t\tself.errors[key] = value;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t// Identify our runtime environment. Web, or node?\n\t\t\tself._node = {}; // NodeJS objects\n\t\t\tself._runtime = self.runtime();\n\n\t\t\t// Sub-module helpers.\n\t\t\tself.parser = new Parser(self);\n\t\t\tself.brain = new Brain(self);\n\n\t\t\t// Loading files in will be asynchronous, so we'll need to abe able to\n\t\t\t// identify when we've finished loading files! This will be an object\n\t\t\t// to keep track of which files are still pending.\n\t\t\tself._pending = [];\n\t\t\tself._loadCount = 0;\n\n\t\t\t// Internal data structures\n\t\t\tself._global = {}; // 'global' variables\n\t\t\tself._var = {}; // 'bot' variables\n\t\t\tself._sub = {}; // 'sub' substitutions\n\t\t\tself._submax = 1; // 'submax' max words in sub object\n\t\t\tself._person = {}; // 'person' substitutions\n\t\t\tself._personmax = 1; // 'personmax' max words in person object\n\t\t\tself._array = {}; // 'array' variables\n\t\t\tself._session = null; // session manager for user variables\n\t\t\tself._includes = {}; // included topics\n\t\t\tself._inherits = {}; // inherited topics\n\t\t\tself._handlers = {}; // object handlers\n\t\t\tself._objlangs = {}; // map objects to their languages\n\t\t\tself._topics = {}; // main reply structure\n\t\t\tself._thats = {}; // %Previous reply structure (pointers into @_topics)\n\t\t\tself._sorted = {}; // Sorted buffers\n\n\t\t\t// Given any options?\n\t\t\tif ((typeof opts === \"undefined\" ? \"undefined\" : _typeof(opts)) === \"object\") {\n\t\t\t\tif (opts.debug) {\n\t\t\t\t\tself._debug = true;\n\t\t\t\t}\n\t\t\t\tif (opts.strict) {\n\t\t\t\t\tself._strict = true;\n\t\t\t\t}\n\t\t\t\tif (opts.depth) {\n\t\t\t\t\tself._depth = parseInt(opts.depth);\n\t\t\t\t}\n\t\t\t\tif (opts.utf8) {\n\t\t\t\t\tself._utf8 = true;\n\t\t\t\t}\n\t\t\t\tif (opts.sessionManager) {\n\t\t\t\t\tself._session = opts.sessionManager;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Initialize the default session manager.\n\t\t\tif (self._session === null) {\n\t\t\t\tself._session = new MemorySessionManager();\n\t\t\t}\n\n\t\t\t// Set the default JavaScript language handler.\n\t\t\tself._handlers.javascript = new JSObjectHandler(self);\n\t\t\tself.say(\"RiveScript Interpreter v\" + VERSION + \" Initialized.\");\n\t\t\tself.say(\"Runtime Environment: \" + self._runtime);\n\t\t}\n\n\t\t/**\n  string version ()\n  \tReturns the version number of the RiveScript.js library.\n  */\n\n\n\t\t_createClass(RiveScript, [{\n\t\t\tkey: \"version\",\n\t\t\tvalue: function version() {\n\t\t\t\treturn VERSION;\n\t\t\t}\n\n\t\t\t/**\n   private void runtime ()\n   \tDetect the runtime environment of this module, to determine if we're\n   running in a web browser or from node.\n   */\n\n\t\t}, {\n\t\t\tkey: \"runtime\",\n\t\t\tvalue: function runtime() {\n\t\t\t\tvar self = this;\n\n\t\t\t\t// Webpack and browserify define `process.browser` so this is the best place\n\t\t\t\t// to check if we're running in a web environment.\n\t\t\t\tif (process.browser) {\n\t\t\t\t\treturn \"web\";\n\t\t\t\t}\n\n\t\t\t\t// Import the Node filesystem library.\n\t\t\t\tself._node.fs = __webpack_require__(/*! fs */ \"./node_modules/node-libs-browser/mock/empty.js\");\n\t\t\t\treturn \"node\";\n\t\t\t}\n\n\t\t\t/**\n   private void say (string message)\n   \tThis is the debug function. If debug mode is enabled, the 'message' will be\n   sent to the console via console.log (if available), or to your `onDebug`\n   handler if you defined one.\n   */\n\n\t\t}, {\n\t\t\tkey: \"say\",\n\t\t\tvalue: function say(message) {\n\t\t\t\tvar self = this;\n\t\t\t\tif (self._debug !== true) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\t// Debug log handler defined?\n\t\t\t\tif (self._onDebug) {\n\t\t\t\t\treturn self._onDebug(message);\n\t\t\t\t} else {\n\t\t\t\t\treturn console.log(message);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t/**\n   private void warn (string message[, filename, lineno])\n   \tPrint a warning or error message. This is like debug, except it's GOING to\n   be given to the user one way or another. If the `onDebug` handler is\n   defined, this is sent there. If `console` is available, this will be sent\n   there. In a worst case scenario, an alert box is shown.\n   */\n\n\t\t}, {\n\t\t\tkey: \"warn\",\n\t\t\tvalue: function warn(message, filename, lineno) {\n\t\t\t\tvar self = this;\n\n\t\t\t\t// Provided a file and line?\n\t\t\t\tif (filename != null && lineno != null) {\n\t\t\t\t\tmessage += \" at \" + filename + \" line \" + lineno;\n\t\t\t\t}\n\t\t\t\tif (self._onDebug) {\n\t\t\t\t\treturn self._onDebug(\"[WARNING] \" + message);\n\t\t\t\t} else if (console) {\n\t\t\t\t\tif (console.error) {\n\t\t\t\t\t\treturn console.error(message);\n\t\t\t\t\t} else {\n\t\t\t\t\t\treturn console.log(\"[WARNING] \" + message);\n\t\t\t\t\t}\n\t\t\t\t} else if (window) {\n\t\t\t\t\treturn window.alert(message);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t////////////////////////////////////////////////////////////////////////\n\t\t\t// Loading and Parsing Methods                                        //\n\t\t\t////////////////////////////////////////////////////////////////////////\n\n\t\t\t/**\n   async loadFile(string path || array path)\n   \tLoad a RiveScript document from a file. The path can either be a string that\n   contains the path to a single file, or an array of paths to load multiple\n   files. The Promise resolves when all of the files have been parsed and\n   loaded. The Promise rejects on error.\n   \tThis loading method is asynchronous so you must resolve the promise or\n   await it before you go on to sort the replies.\n   \tFor backwards compatibility, this function can take callbacks instead\n   of returning a Promise:\n   \t> `rs.loadDirectory(path, onSuccess(), onError(err, filename, lineno))`\n   \t* resolves: `()`\n   * rejects: `(string error)`\n   */\n\n\t\t}, {\n\t\t\tkey: \"loadFile\",\n\t\t\tvalue: function () {\n\t\t\t\tvar _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(path, onSuccess, onError) {\n\t\t\t\t\tvar self, promises, i, len, file, promise;\n\t\t\t\t\treturn regeneratorRuntime.wrap(function _callee$(_context) {\n\t\t\t\t\t\twhile (1) {\n\t\t\t\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\t\tself = this;\n\n\t\t\t\t\t\t\t\t\t// Did they give us a single path?\n\n\t\t\t\t\t\t\t\t\tif (typeof path === \"string\") {\n\t\t\t\t\t\t\t\t\t\tpath = [path];\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\tpromises = new Array();\n\n\t\t\t\t\t\t\t\t\tfor (i = 0, len = path.length; i < len; i++) {\n\t\t\t\t\t\t\t\t\t\tfile = path[i];\n\n\t\t\t\t\t\t\t\t\t\tself.say(\"Request to load file: \" + file);\n\t\t\t\t\t\t\t\t\t\tpromises.push(function (f) {\n\t\t\t\t\t\t\t\t\t\t\t// This function returns a Promise. How are we going to load\n\t\t\t\t\t\t\t\t\t\t\t// the file?\n\t\t\t\t\t\t\t\t\t\t\tif (self._runtime === \"web\") {\n\t\t\t\t\t\t\t\t\t\t\t\t// Via ajax!\n\t\t\t\t\t\t\t\t\t\t\t\treturn self._ajaxLoadFile(f);\n\t\t\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\t\t\t// With node fs module!\n\t\t\t\t\t\t\t\t\t\t\t\treturn self._nodeLoadFile(f);\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}(file));\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t// The final Promise to return.\n\t\t\t\t\t\t\t\t\tpromise = new Promise(function (resolve, reject) {\n\t\t\t\t\t\t\t\t\t\tPromise.all(promises).then(resolve).catch(reject);\n\t\t\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\t\t\t\t// Legacy callback style?\n\n\t\t\t\t\t\t\t\t\tif (!(typeof onSuccess === \"function\")) {\n\t\t\t\t\t\t\t\t\t\t_context.next = 10;\n\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\tself.warn(\"DEPRECATED: RiveScript.loadFile() now returns a Promise instead of using callbacks\");\n\t\t\t\t\t\t\t\t\treturn _context.abrupt(\"return\", promise.then(onSuccess).catch(function (err, filename, lineno) {\n\t\t\t\t\t\t\t\t\t\tif (typeof onError === \"function\") {\n\t\t\t\t\t\t\t\t\t\t\tonError.call(null, err, filename, lineno);\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}));\n\n\t\t\t\t\t\t\t\tcase 10:\n\t\t\t\t\t\t\t\t\treturn _context.abrupt(\"return\", promise);\n\n\t\t\t\t\t\t\t\tcase 11:\n\t\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}, _callee, this);\n\t\t\t\t}));\n\n\t\t\t\tfunction loadFile(_x, _x2, _x3) {\n\t\t\t\t\treturn _ref.apply(this, arguments);\n\t\t\t\t}\n\n\t\t\t\treturn loadFile;\n\t\t\t}()\n\n\t\t\t// Load a file using ajax. DO NOT CALL THIS DIRECTLY.\n\t\t\t// Returns a Promise.\n\n\t\t}, {\n\t\t\tkey: \"_ajaxLoadFile\",\n\t\t\tvalue: function () {\n\t\t\t\tvar _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(file) {\n\t\t\t\t\tvar self;\n\t\t\t\t\treturn regeneratorRuntime.wrap(function _callee2$(_context2) {\n\t\t\t\t\t\twhile (1) {\n\t\t\t\t\t\t\tswitch (_context2.prev = _context2.next) {\n\t\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\t\tself = this;\n\t\t\t\t\t\t\t\t\treturn _context2.abrupt(\"return\", new Promise(function (resolve, reject) {\n\t\t\t\t\t\t\t\t\t\tvar xhr = new XMLHttpRequest();\n\t\t\t\t\t\t\t\t\t\txhr.open(\"GET\", file, true);\n\t\t\t\t\t\t\t\t\t\txhr.onreadystatechange = function () {\n\t\t\t\t\t\t\t\t\t\t\tvar ref;\n\t\t\t\t\t\t\t\t\t\t\tif (xhr.readyState === 4) {\n\t\t\t\t\t\t\t\t\t\t\t\tvar _ref3 = xhr.status;\n\t\t\t\t\t\t\t\t\t\t\t\tif (_ref3 === 200) {\n\t\t\t\t\t\t\t\t\t\t\t\t\tself.say(\"Loading file \" + file + \" complete.\");\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t// Parse it!\n\t\t\t\t\t\t\t\t\t\t\t\t\tvar ok = self.parse(file, xhr.responseText, function (err) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\treject(err);\n\t\t\t\t\t\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\t\t\t\t\t\tif (ok) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tresolve();\n\t\t\t\t\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\treject(\"parser error\");\n\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\t\t\t\tself.warn(\"Network error in XMLHttpRequest for file \" + file);\n\t\t\t\t\t\t\t\t\t\t\t\t\treject(\"Failed to load file \" + file + \": network error\");\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\t\t\t\txhr.send(null);\n\t\t\t\t\t\t\t\t\t}));\n\n\t\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\t\treturn _context2.stop();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}, _callee2, this);\n\t\t\t\t}));\n\n\t\t\t\tfunction _ajaxLoadFile(_x4) {\n\t\t\t\t\treturn _ref2.apply(this, arguments);\n\t\t\t\t}\n\n\t\t\t\treturn _ajaxLoadFile;\n\t\t\t}()\n\n\t\t\t// Load a file using node. DO NOT CALL THIS DIRECTLY.\n\t\t\t// Returns a Promise.\n\n\t\t}, {\n\t\t\tkey: \"_nodeLoadFile\",\n\t\t\tvalue: function () {\n\t\t\t\tvar _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(file) {\n\t\t\t\t\tvar self;\n\t\t\t\t\treturn regeneratorRuntime.wrap(function _callee3$(_context3) {\n\t\t\t\t\t\twhile (1) {\n\t\t\t\t\t\t\tswitch (_context3.prev = _context3.next) {\n\t\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\t\tself = this;\n\t\t\t\t\t\t\t\t\treturn _context3.abrupt(\"return\", new Promise(function (resolve, reject) {\n\t\t\t\t\t\t\t\t\t\t// Load the file.\n\t\t\t\t\t\t\t\t\t\treturn self._node.fs.readFile(file, function (err, data) {\n\t\t\t\t\t\t\t\t\t\t\tif (err) {\n\t\t\t\t\t\t\t\t\t\t\t\treject(err);\n\t\t\t\t\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t// Parse it!\n\t\t\t\t\t\t\t\t\t\t\tvar ok = self.parse(file, \"\" + data, function (err) {\n\t\t\t\t\t\t\t\t\t\t\t\treject(err);\n\t\t\t\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\t\t\t\tif (ok) {\n\t\t\t\t\t\t\t\t\t\t\t\tresolve();\n\t\t\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\t\t\treject(\"parser error\");\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\t\t}));\n\n\t\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\t\treturn _context3.stop();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}, _callee3, this);\n\t\t\t\t}));\n\n\t\t\t\tfunction _nodeLoadFile(_x5) {\n\t\t\t\t\treturn _ref4.apply(this, arguments);\n\t\t\t\t}\n\n\t\t\t\treturn _nodeLoadFile;\n\t\t\t}()\n\n\t\t\t/**\n   async loadDirectory (string path)\n   \tLoad RiveScript documents from a directory recursively.\n   \tFor backwards compatibility, this function can take callbacks instead\n   of returning a Promise:\n   \t> `rs.loadDirectory(path, onSuccess(), onError(err, filename, lineno))`\n   \tThis function is not supported in a web environment.\n   */\n\n\t\t}, {\n\t\t\tkey: \"loadDirectory\",\n\t\t\tvalue: function () {\n\t\t\t\tvar _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(path, onSuccess, onError) {\n\t\t\t\t\tvar self, promise;\n\t\t\t\t\treturn regeneratorRuntime.wrap(function _callee4$(_context4) {\n\t\t\t\t\t\twhile (1) {\n\t\t\t\t\t\t\tswitch (_context4.prev = _context4.next) {\n\t\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\t\tself = this;\n\t\t\t\t\t\t\t\t\tpromise = new Promise(function (resolve, reject) {\n\t\t\t\t\t\t\t\t\t\t// Can't be done on the web!\n\t\t\t\t\t\t\t\t\t\tif (self._runtime === \"web\") {\n\t\t\t\t\t\t\t\t\t\t\treject(\"loadDirectory can't be used on the web!\");\n\t\t\t\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t// Verify the directory exists.\n\t\t\t\t\t\t\t\t\t\tself._node.fs.stat(path, function (err, stats) {\n\t\t\t\t\t\t\t\t\t\t\tif (err) {\n\t\t\t\t\t\t\t\t\t\t\t\treject(err);\n\t\t\t\t\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\tif (!stats.isDirectory()) {\n\t\t\t\t\t\t\t\t\t\t\t\treject(path + \" is not a directory\");\n\t\t\t\t\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\tself.say(\"Loading from directory \" + path);\n\n\t\t\t\t\t\t\t\t\t\t\t// Load all the files.\n\t\t\t\t\t\t\t\t\t\t\tvar files = readDir(path);\n\t\t\t\t\t\t\t\t\t\t\tvar toLoad = new Array();\n\t\t\t\t\t\t\t\t\t\t\tfor (var i = 0, len = files.length; i < len; i++) {\n\t\t\t\t\t\t\t\t\t\t\t\tvar file = files[i];\n\t\t\t\t\t\t\t\t\t\t\t\tif (file.match(/\\.(rive|rs)$/i)) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t// Keep track of the file's status.\n\t\t\t\t\t\t\t\t\t\t\t\t\ttoLoad.push(path + \"/\" + file);\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\tself.loadFile(toLoad).then(resolve).catch(reject);\n\t\t\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\t\t\t\t// Legacy callback-style?\n\n\t\t\t\t\t\t\t\t\tif (!(typeof onSuccess === \"function\")) {\n\t\t\t\t\t\t\t\t\t\t_context4.next = 5;\n\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\tself.warn(\"DEPRECATED: RiveScript.loadDirectory() now returns a Promise instead of using callbacks\");\n\t\t\t\t\t\t\t\t\treturn _context4.abrupt(\"return\", promise.then(onSuccess).catch(function (err, filename, lineno) {\n\t\t\t\t\t\t\t\t\t\tif (typeof onError === \"function\") {\n\t\t\t\t\t\t\t\t\t\t\tonError.call(null, err, filename, lineno);\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}));\n\n\t\t\t\t\t\t\t\tcase 5:\n\t\t\t\t\t\t\t\t\treturn _context4.abrupt(\"return\", promise);\n\n\t\t\t\t\t\t\t\tcase 6:\n\t\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\t\treturn _context4.stop();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}, _callee4, this);\n\t\t\t\t}));\n\n\t\t\t\tfunction loadDirectory(_x6, _x7, _x8) {\n\t\t\t\t\treturn _ref5.apply(this, arguments);\n\t\t\t\t}\n\n\t\t\t\treturn loadDirectory;\n\t\t\t}()\n\n\t\t\t/**\n   bool stream (string code[, func onError])\n   \tLoad RiveScript source code from a string. `code` should be the raw\n   RiveScript source code, with line breaks separating each line.\n   \tThis function is synchronous, meaning it does not return a Promise. It\n   parses the code immediately and returns. Do not fear: the parser runs\n   very quickly.\n   \tReturns `true` if the code parsed with no error.\n   \tonError function receives: `(err string[, filename str, line_no int])`\n   */\n\n\t\t}, {\n\t\t\tkey: \"stream\",\n\t\t\tvalue: function stream(code, onError) {\n\t\t\t\tvar self = this;\n\t\t\t\treturn self.parse(\"stream()\", code, onError);\n\t\t\t}\n\n\t\t\t/**\n   private bool parse (string name, string code[, func onError(string)])\n   \tParse RiveScript code and load it into memory. `name` is a file name in case\n   syntax errors need to be pointed out. `code` is the source code.\n   \tReturns `true` if the code parsed with no error.\n   */\n\n\t\t}, {\n\t\t\tkey: \"parse\",\n\t\t\tvalue: function parse(filename, code, onError) {\n\t\t\t\tvar self = this;\n\t\t\t\tself.say(\"Parsing code!\");\n\n\t\t\t\t// Get the \"abstract syntax tree\"\n\t\t\t\tvar ok = true;\n\t\t\t\tvar ast = self.parser.parse(filename, code, function (err, fn, ln) {\n\t\t\t\t\tif (typeof onError === \"function\") {\n\t\t\t\t\t\tonError.call(null, err, fn, ln);\n\t\t\t\t\t}\n\t\t\t\t\tok = false;\n\t\t\t\t});\n\n\t\t\t\t// Get all of the \"begin\" type variables: global, var, sub, person, array..\n\t\t\t\tfor (var type in ast.begin) {\n\t\t\t\t\tvar vars = ast.begin[type];\n\t\t\t\t\tif (!ast.begin.hasOwnProperty(type)) {\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\t\t\t\t\tvar internal = \"_\" + type; // so \"global\" maps to self._global\n\n\t\t\t\t\tfor (var name in vars) {\n\t\t\t\t\t\tvar value = vars[name];\n\t\t\t\t\t\tif (type === 'sub' || type === 'person') {\n\t\t\t\t\t\t\tself[internal + \"max\"] = Math.max(self[internal + \"max\"], name.split(\" \").length);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (!vars.hasOwnProperty(name)) {\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tif (value === \"<undef>\") {\n\t\t\t\t\t\t\tdelete self[internal][name];\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tself[internal][name] = value;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Let the scripts set the debug mode and other internals.\n\t\t\t\tif (self._global.debug != null) {\n\t\t\t\t\tself._debug = self._global.debug === \"true\";\n\t\t\t\t}\n\t\t\t\tif (self._global.depth != null) {\n\t\t\t\t\tself._depth = parseInt(self._global.depth) || 50;\n\t\t\t\t}\n\n\t\t\t\t// Consume all the parsed triggers.\n\t\t\t\tfor (var topic in ast.topics) {\n\t\t\t\t\tvar data = ast.topics[topic];\n\t\t\t\t\tif (!ast.topics.hasOwnProperty(topic)) {\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\n\t\t\t\t\t// Keep a map of the topics that are included/inherited under self topic.\n\t\t\t\t\tif (self._includes[topic] == null) {\n\t\t\t\t\t\tself._includes[topic] = {};\n\t\t\t\t\t}\n\t\t\t\t\tif (self._inherits[topic] == null) {\n\t\t\t\t\t\tself._inherits[topic] = {};\n\t\t\t\t\t}\n\t\t\t\t\tutils.extend(self._includes[topic], data.includes);\n\t\t\t\t\tutils.extend(self._inherits[topic], data.inherits);\n\n\t\t\t\t\t// Consume the triggers.\n\t\t\t\t\tif (self._topics[topic] == null) {\n\t\t\t\t\t\tself._topics[topic] = [];\n\t\t\t\t\t}\n\t\t\t\t\tfor (var i = 0, len = data.triggers.length; i < len; i++) {\n\t\t\t\t\t\tvar trigger = data.triggers[i];\n\t\t\t\t\t\tself._topics[topic].push(trigger);\n\n\t\t\t\t\t\t// Does this trigger have a %Previous? If so, make a pointer to this\n\t\t\t\t\t\t// exact trigger in @_thats.\n\t\t\t\t\t\tif (trigger.previous != null) {\n\t\t\t\t\t\t\t// Initialize the @_thats structure first.\n\t\t\t\t\t\t\tif (self._thats[topic] == null) {\n\t\t\t\t\t\t\t\tself._thats[topic] = {};\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tif (self._thats[topic][trigger.trigger] == null) {\n\t\t\t\t\t\t\t\tself._thats[topic][trigger.trigger] = {};\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tself._thats[topic][trigger.trigger][trigger.previous] = trigger;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Load all the parsed objects.\n\t\t\t\tvar results = [];\n\t\t\t\tfor (var j = 0, _len = ast.objects.length; j < _len; j++) {\n\t\t\t\t\tvar object = ast.objects[j];\n\n\t\t\t\t\t// Have a handler for it?\n\t\t\t\t\tif (self._handlers[object.language]) {\n\t\t\t\t\t\tself._objlangs[object.name] = object.language;\n\t\t\t\t\t\tresults.push(self._handlers[object.language].load(object.name, object.code));\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn ok;\n\t\t\t}\n\n\t\t\t/**\n   void sortReplies()\n   \tAfter you have finished loading your RiveScript code, call this method to\n   populate the various sort buffers. This is absolutely necessary for reply\n   matching to work efficiently!\n   */\n\n\t\t}, {\n\t\t\tkey: \"sortReplies\",\n\t\t\tvalue: function sortReplies() {\n\t\t\t\tvar self = this;\n\n\t\t\t\t// (Re)initialize the sort cache.\n\t\t\t\tself._sorted.topics = {};\n\t\t\t\tself._sorted.thats = {};\n\n\t\t\t\tself.say(\"Sorting triggers...\");\n\n\t\t\t\t// Loop through all the topics.\n\t\t\t\tfor (var topic in self._topics) {\n\t\t\t\t\tif (!self._topics.hasOwnProperty(topic)) {\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\t\t\t\t\tself.say(\"Analyzing topic \" + topic + \"...\");\n\n\t\t\t\t\t// Collect a list of all the triggers we're going to worry about. If this\n\t\t\t\t\t// topic inherits another topic, we need to recursively add those to the\n\t\t\t\t\t// list as well.\n\t\t\t\t\tvar allTriggers = inherit_utils.getTopicTriggers(self, topic);\n\n\t\t\t\t\t// Sort these triggers.\n\t\t\t\t\tself._sorted.topics[topic] = sorting.sortTriggerSet(allTriggers, true);\n\n\t\t\t\t\t// Get all of the %Previous triggers for this topic.\n\t\t\t\t\tvar thatTriggers = inherit_utils.getTopicTriggers(self, topic, true);\n\n\t\t\t\t\t// And sort them, too.\n\t\t\t\t\tself._sorted.thats[topic] = sorting.sortTriggerSet(thatTriggers, false);\n\t\t\t\t}\n\n\t\t\t\t// Sort the substitution lists.\n\t\t\t\tself._sorted.sub = sorting.sortList(Object.keys(self._sub));\n\t\t\t\treturn self._sorted.person = sorting.sortList(Object.keys(self._person));\n\t\t\t}\n\n\t\t\t/**\n   data deparse()\n   \tTranslate the in-memory representation of the loaded RiveScript documents\n   into a JSON-serializable data structure. This may be useful for developing\n   a user interface to edit RiveScript replies without having to edit the\n   RiveScript code manually, in conjunction with the `write()` method.\n   \tThe format of the deparsed data structure is out of scope for this document,\n   but there is additional information and examples available in the `eg/`\n   directory of the source distribution. You can read the documentation on\n   GitHub here: [RiveScript Deparse](https://github.com/aichaos/rivescript-js/tree/master/eg/deparse)\n   */\n\n\t\t}, {\n\t\t\tkey: \"deparse\",\n\t\t\tvalue: function deparse() {\n\t\t\t\tvar self = this;\n\n\t\t\t\t// Data to return from this function.\n\t\t\t\tvar result = {\n\t\t\t\t\tbegin: {\n\t\t\t\t\t\tglobal: utils.clone(self._global),\n\t\t\t\t\t\tvar: utils.clone(self._var),\n\t\t\t\t\t\tsub: utils.clone(self._sub),\n\t\t\t\t\t\tperson: utils.clone(self._person),\n\t\t\t\t\t\tarray: utils.clone(self._array),\n\t\t\t\t\t\ttriggers: []\n\t\t\t\t\t},\n\t\t\t\t\ttopics: utils.clone(self._topics),\n\t\t\t\t\tinherits: utils.clone(self._inherits),\n\t\t\t\t\tincludes: utils.clone(self._includes),\n\t\t\t\t\tobjects: {}\n\t\t\t\t};\n\n\t\t\t\tfor (var key in self._handlers) {\n\t\t\t\t\tresult.objects[key] = {\n\t\t\t\t\t\t_objects: utils.clone(self._handlers[key]._objects)\n\t\t\t\t\t};\n\t\t\t\t}\n\n\t\t\t\t// Begin topic.\n\t\t\t\tif (result.topics.__begin__ != null) {\n\t\t\t\t\tresult.begin.triggers = result.topics.__begin__;\n\t\t\t\t\tdelete result.topics.__begin__;\n\t\t\t\t}\n\n\t\t\t\t// Populate config fields if they differ from the defaults.\n\t\t\t\tif (self._debug) {\n\t\t\t\t\tresult.begin.global.debug = self._debug;\n\t\t\t\t}\n\t\t\t\tif (self._depth !== 50) {\n\t\t\t\t\tresult.begin.global.depth = self._depth;\n\t\t\t\t}\n\n\t\t\t\treturn result;\n\t\t\t}\n\n\t\t\t/**\n   string stringify([data deparsed])\n   \tTranslate the in-memory representation of the RiveScript brain back into\n   RiveScript source code. This is like `write()`, but it returns the text of\n   the source code as a string instead of writing it to a file.\n   \tYou can optionally pass the parameter `deparsed`, which should be a data\n   structure of the same format that the `deparse()` method returns. If not\n   provided, the current internal data is used (this function calls `deparse()`\n   itself and uses that).\n   \tWarning: the output of this function won't be pretty. For example, no word\n   wrapping will be done for your longer replies. The only guarantee is that\n   what comes out of this function is valid RiveScript code that can be loaded\n   back in later.\n   */\n\n\t\t}, {\n\t\t\tkey: \"stringify\",\n\t\t\tvalue: function stringify(deparsed) {\n\t\t\t\tvar self = this;\n\t\t\t\treturn self.parser.stringify(deparsed);\n\t\t\t}\n\n\t\t\t/**\n   void write (string filename[, data deparsed])\n   \tWrite the in-memory RiveScript data into a RiveScript text file. This\n   method can not be used on the web; it requires filesystem access and can\n   only run from a Node environment.\n   \tThis calls the `stringify()` method and writes the output into the filename\n   specified. You can provide your own deparse-compatible data structure,\n   or else the current state of the bot's brain is used instead.\n   */\n\n\t\t}, {\n\t\t\tkey: \"write\",\n\t\t\tvalue: function write(filename, deparsed) {\n\t\t\t\tvar self = this;\n\n\t\t\t\t// Can't be done on the web!\n\t\t\t\tif (self._runtime === \"web\") {\n\t\t\t\t\tself.warn(\"write() can't be used on the web!\");\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\treturn self._node.fs.writeFile(filename, self.stringify(deparsed), function (err) {\n\t\t\t\t\tif (err) {\n\t\t\t\t\t\treturn self.warn(\"Error writing to file \" + filename + \": \" + err);\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n\n\t\t\t////////////////////////////////////////////////////////////////////////\n\t\t\t// Public Configuration Methods                                       //\n\t\t\t////////////////////////////////////////////////////////////////////////\n\n\t\t\t/**\n   void setHandler(string lang, object)\n   \tSet a custom language handler for RiveScript object macros. See the source\n   for the built-in JavaScript handler (src/lang/javascript.coffee) as an\n   example.\n   \tBy default, JavaScript object macros are enabled. If you want to disable\n   these (e.g. for security purposes when loading untrusted third-party code),\n   just set the JavaScript handler to null:\n   \t```javascript\n   var bot = new RiveScript();\n   bot.setHandler(\"javascript\", null);\n   ```\n   */\n\n\t\t}, {\n\t\t\tkey: \"setHandler\",\n\t\t\tvalue: function setHandler(lang, obj) {\n\t\t\t\tvar self = this;\n\n\t\t\t\tif (obj === void 0) {\n\t\t\t\t\treturn delete self._handlers[lang];\n\t\t\t\t} else {\n\t\t\t\t\treturn self._handlers[lang] = obj;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t/**\n   void setSubroutine(string name, function)\n   \tDefine a JavaScript object macro from your program.\n   \tThis is equivalent to having a JS object defined in the RiveScript code,\n   except your JavaScript code is defining it instead.\n   */\n\n\t\t}, {\n\t\t\tkey: \"setSubroutine\",\n\t\t\tvalue: function setSubroutine(name, code) {\n\t\t\t\tvar self = this;\n\n\t\t\t\t// Do we have a JS handler?\n\t\t\t\tif (self._handlers.javascript) {\n\t\t\t\t\tself._objlangs[name] = \"javascript\";\n\t\t\t\t\treturn self._handlers.javascript.load(name, code);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t/**\n   void setGlobal (string name, string value)\n   \tSet a global variable. This is equivalent to `! global` in RiveScript.\n   Set the value to `undefined` to delete a global.\n   */\n\n\t\t}, {\n\t\t\tkey: \"setGlobal\",\n\t\t\tvalue: function setGlobal(name, value) {\n\t\t\t\tvar self = this;\n\n\t\t\t\tif (value === void 0) {\n\t\t\t\t\treturn delete self._global[name];\n\t\t\t\t} else {\n\t\t\t\t\treturn self._global[name] = value;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t/**\n   void setVariable (string name, string value)\n   \tSet a bot variable. This is equivalent to `! var` in RiveScript.\n   Set the value to `undefined` to delete a bot variable.\n   */\n\n\t\t}, {\n\t\t\tkey: \"setVariable\",\n\t\t\tvalue: function setVariable(name, value) {\n\t\t\t\tvar self = this;\n\n\t\t\t\tif (value === void 0) {\n\t\t\t\t\treturn delete self._var[name];\n\t\t\t\t} else {\n\t\t\t\t\treturn self._var[name] = value;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t/**\n   void setSubstitution (string name, string value)\n   \tSet a substitution. This is equivalent to `! sub` in RiveScript.\n   Set the value to `undefined` to delete a substitution.\n   */\n\n\t\t}, {\n\t\t\tkey: \"setSubstitution\",\n\t\t\tvalue: function setSubstitution(name, value) {\n\t\t\t\tvar self = this;\n\n\t\t\t\tif (value === void 0) {\n\t\t\t\t\treturn delete self._sub[name];\n\t\t\t\t} else {\n\t\t\t\t\tself._submax = Math.max(name.split(' ').length, self._submax);\n\t\t\t\t\treturn self._sub[name] = value;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t/**\n   void setPerson (string name, string value)\n   \tSet a person substitution. This is equivalent to `! person` in RiveScript.\n   Set the value to `undefined` to delete a person substitution.\n   */\n\n\t\t}, {\n\t\t\tkey: \"setPerson\",\n\t\t\tvalue: function setPerson(name, value) {\n\t\t\t\tvar self = this;\n\n\t\t\t\tif (value === void 0) {\n\t\t\t\t\treturn delete self._person[name];\n\t\t\t\t} else {\n\t\t\t\t\tself._personmax = Math.max(name.split(' ').length, self._personmax);\n\t\t\t\t\treturn self._person[name] = value;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t/**\n   async setUservar (string user, string name, string value)\n   \tSet a user variable for a user.\n   */\n\n\t\t}, {\n\t\t\tkey: \"setUservar\",\n\t\t\tvalue: function () {\n\t\t\t\tvar _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(user, name, value) {\n\t\t\t\t\tvar self, fields;\n\t\t\t\t\treturn regeneratorRuntime.wrap(function _callee5$(_context5) {\n\t\t\t\t\t\twhile (1) {\n\t\t\t\t\t\t\tswitch (_context5.prev = _context5.next) {\n\t\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\t\tself = this;\n\n\t\t\t\t\t\t\t\t\t// Are we setting the topic and are we forcing case?\n\n\t\t\t\t\t\t\t\t\tif (name === \"topic\" && self._forceCase) {\n\t\t\t\t\t\t\t\t\t\tvalue = value.toLowerCase();\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\tfields = {};\n\n\t\t\t\t\t\t\t\t\tfields[name] = value;\n\t\t\t\t\t\t\t\t\treturn _context5.abrupt(\"return\", self._session.set(user, fields));\n\n\t\t\t\t\t\t\t\tcase 5:\n\t\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\t\treturn _context5.stop();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}, _callee5, this);\n\t\t\t\t}));\n\n\t\t\t\tfunction setUservar(_x9, _x10, _x11) {\n\t\t\t\t\treturn _ref6.apply(this, arguments);\n\t\t\t\t}\n\n\t\t\t\treturn setUservar;\n\t\t\t}()\n\n\t\t\t/**\n   async setUservars (string user, object data)\n   \tSet multiple user variables by providing an object of key/value pairs.\n   Equivalent to calling `setUservar()` for each pair in the object.\n   */\n\n\t\t}, {\n\t\t\tkey: \"setUservars\",\n\t\t\tvalue: function () {\n\t\t\t\tvar _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(user, data) {\n\t\t\t\t\tvar self;\n\t\t\t\t\treturn regeneratorRuntime.wrap(function _callee6$(_context6) {\n\t\t\t\t\t\twhile (1) {\n\t\t\t\t\t\t\tswitch (_context6.prev = _context6.next) {\n\t\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\t\tself = this;\n\t\t\t\t\t\t\t\t\treturn _context6.abrupt(\"return\", self._session.set(user, data));\n\n\t\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\t\treturn _context6.stop();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}, _callee6, this);\n\t\t\t\t}));\n\n\t\t\t\tfunction setUservars(_x12, _x13) {\n\t\t\t\t\treturn _ref7.apply(this, arguments);\n\t\t\t\t}\n\n\t\t\t\treturn setUservars;\n\t\t\t}()\n\n\t\t\t/**\n   string getVariable (string name)\n   \tGets a variable. This is equivalent to `<bot name>` in RiveScript.\n   */\n\n\t\t}, {\n\t\t\tkey: \"getVariable\",\n\t\t\tvalue: function getVariable(name) {\n\t\t\t\tvar self = this;\n\n\t\t\t\t// The var exists?\n\t\t\t\tif (typeof self._var[name] !== \"undefined\") {\n\t\t\t\t\treturn self._var[name];\n\t\t\t\t} else {\n\t\t\t\t\treturn \"undefined\";\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t/**\n   async getUservar (string user, string name) -> value\n   \tGet a variable from a user. Returns the string \"undefined\" if it isn't\n   defined.\n   */\n\n\t\t}, {\n\t\t\tkey: \"getUservar\",\n\t\t\tvalue: function () {\n\t\t\t\tvar _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(user, name) {\n\t\t\t\t\tvar self;\n\t\t\t\t\treturn regeneratorRuntime.wrap(function _callee7$(_context7) {\n\t\t\t\t\t\twhile (1) {\n\t\t\t\t\t\t\tswitch (_context7.prev = _context7.next) {\n\t\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\t\tself = this;\n\t\t\t\t\t\t\t\t\treturn _context7.abrupt(\"return\", self._session.get(user, name));\n\n\t\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\t\treturn _context7.stop();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}, _callee7, this);\n\t\t\t\t}));\n\n\t\t\t\tfunction getUservar(_x14, _x15) {\n\t\t\t\t\treturn _ref8.apply(this, arguments);\n\t\t\t\t}\n\n\t\t\t\treturn getUservar;\n\t\t\t}()\n\n\t\t\t/**\n   async getUservars ([string user]) -> object\n   \tGet all variables about a user. If no user is provided, returns all data\n   about all users.\n   */\n\n\t\t}, {\n\t\t\tkey: \"getUservars\",\n\t\t\tvalue: function () {\n\t\t\t\tvar _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(user) {\n\t\t\t\t\tvar self;\n\t\t\t\t\treturn regeneratorRuntime.wrap(function _callee8$(_context8) {\n\t\t\t\t\t\twhile (1) {\n\t\t\t\t\t\t\tswitch (_context8.prev = _context8.next) {\n\t\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\t\tself = this;\n\n\t\t\t\t\t\t\t\t\tif (!(user === undefined)) {\n\t\t\t\t\t\t\t\t\t\t_context8.next = 5;\n\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\treturn _context8.abrupt(\"return\", self._session.getAll());\n\n\t\t\t\t\t\t\t\tcase 5:\n\t\t\t\t\t\t\t\t\treturn _context8.abrupt(\"return\", self._session.getAny(user));\n\n\t\t\t\t\t\t\t\tcase 6:\n\t\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\t\treturn _context8.stop();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}, _callee8, this);\n\t\t\t\t}));\n\n\t\t\t\tfunction getUservars(_x16) {\n\t\t\t\t\treturn _ref9.apply(this, arguments);\n\t\t\t\t}\n\n\t\t\t\treturn getUservars;\n\t\t\t}()\n\n\t\t\t/**\n   async clearUservars ([string user])\n   \tClear all a user's variables. If no user is provided, clears all variables\n   for all users.\n   */\n\n\t\t}, {\n\t\t\tkey: \"clearUservars\",\n\t\t\tvalue: function () {\n\t\t\t\tvar _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(user) {\n\t\t\t\t\tvar self;\n\t\t\t\t\treturn regeneratorRuntime.wrap(function _callee9$(_context9) {\n\t\t\t\t\t\twhile (1) {\n\t\t\t\t\t\t\tswitch (_context9.prev = _context9.next) {\n\t\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\t\tself = this;\n\n\t\t\t\t\t\t\t\t\tif (!(user === undefined)) {\n\t\t\t\t\t\t\t\t\t\t_context9.next = 5;\n\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\treturn _context9.abrupt(\"return\", self._session.resetAll());\n\n\t\t\t\t\t\t\t\tcase 5:\n\t\t\t\t\t\t\t\t\treturn _context9.abrupt(\"return\", self._session.reset(user));\n\n\t\t\t\t\t\t\t\tcase 6:\n\t\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\t\treturn _context9.stop();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}, _callee9, this);\n\t\t\t\t}));\n\n\t\t\t\tfunction clearUservars(_x17) {\n\t\t\t\t\treturn _ref10.apply(this, arguments);\n\t\t\t\t}\n\n\t\t\t\treturn clearUservars;\n\t\t\t}()\n\n\t\t\t/**\n   async freezeUservars (string user)\n   \tFreeze the variable state of a user. This will clone and preserve the user's\n   entire variable state, so that it can be restored later with\n   `thawUservars()`\n   */\n\n\t\t}, {\n\t\t\tkey: \"freezeUservars\",\n\t\t\tvalue: function () {\n\t\t\t\tvar _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(user) {\n\t\t\t\t\tvar self;\n\t\t\t\t\treturn regeneratorRuntime.wrap(function _callee10$(_context10) {\n\t\t\t\t\t\twhile (1) {\n\t\t\t\t\t\t\tswitch (_context10.prev = _context10.next) {\n\t\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\t\tself = this;\n\t\t\t\t\t\t\t\t\treturn _context10.abrupt(\"return\", self._session.freeze(user));\n\n\t\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\t\treturn _context10.stop();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}, _callee10, this);\n\t\t\t\t}));\n\n\t\t\t\tfunction freezeUservars(_x18) {\n\t\t\t\t\treturn _ref11.apply(this, arguments);\n\t\t\t\t}\n\n\t\t\t\treturn freezeUservars;\n\t\t\t}()\n\n\t\t\t/**\n   async thawUservars (string user[, string action])\n   \tThaw a user's frozen variables. The action can be one of the following:\n   * discard: Don't restore the variables, just delete the frozen copy.\n   * keep: Keep the frozen copy after restoring\n   * thaw: Restore the variables and delete the frozen copy (default)\n   */\n\n\t\t}, {\n\t\t\tkey: \"thawUservars\",\n\t\t\tvalue: function () {\n\t\t\t\tvar _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(user) {\n\t\t\t\t\tvar action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"thaw\";\n\t\t\t\t\tvar self;\n\t\t\t\t\treturn regeneratorRuntime.wrap(function _callee11$(_context11) {\n\t\t\t\t\t\twhile (1) {\n\t\t\t\t\t\t\tswitch (_context11.prev = _context11.next) {\n\t\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\t\tself = this;\n\t\t\t\t\t\t\t\t\treturn _context11.abrupt(\"return\", self._session.thaw(user, action));\n\n\t\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\t\treturn _context11.stop();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}, _callee11, this);\n\t\t\t\t}));\n\n\t\t\t\tfunction thawUservars(_x20) {\n\t\t\t\t\treturn _ref12.apply(this, arguments);\n\t\t\t\t}\n\n\t\t\t\treturn thawUservars;\n\t\t\t}()\n\n\t\t\t/**\n   async lastMatch (string user) -> string\n   \tRetrieve the trigger that the user matched most recently.\n   */\n\n\t\t}, {\n\t\t\tkey: \"lastMatch\",\n\t\t\tvalue: function () {\n\t\t\t\tvar _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(user) {\n\t\t\t\t\tvar self;\n\t\t\t\t\treturn regeneratorRuntime.wrap(function _callee12$(_context12) {\n\t\t\t\t\t\twhile (1) {\n\t\t\t\t\t\t\tswitch (_context12.prev = _context12.next) {\n\t\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\t\tself = this;\n\t\t\t\t\t\t\t\t\treturn _context12.abrupt(\"return\", self._session.get(user, \"__lastmatch__\"));\n\n\t\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\t\treturn _context12.stop();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}, _callee12, this);\n\t\t\t\t}));\n\n\t\t\t\tfunction lastMatch(_x21) {\n\t\t\t\t\treturn _ref13.apply(this, arguments);\n\t\t\t\t}\n\n\t\t\t\treturn lastMatch;\n\t\t\t}()\n\n\t\t\t/**\n   async initialMatch (string user) -> string\n   \tRetrieve the trigger that the user matched initially. This will return\n   only the first matched trigger and will not include subsequent redirects.\n   \tThis value is reset on each `reply()` call.\n   */\n\n\t\t}, {\n\t\t\tkey: \"initialMatch\",\n\t\t\tvalue: function () {\n\t\t\t\tvar _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(user) {\n\t\t\t\t\tvar self;\n\t\t\t\t\treturn regeneratorRuntime.wrap(function _callee13$(_context13) {\n\t\t\t\t\t\twhile (1) {\n\t\t\t\t\t\t\tswitch (_context13.prev = _context13.next) {\n\t\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\t\tself = this;\n\t\t\t\t\t\t\t\t\treturn _context13.abrupt(\"return\", self._session.get(user, \"__initialmatch__\"));\n\n\t\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\t\treturn _context13.stop();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}, _callee13, this);\n\t\t\t\t}));\n\n\t\t\t\tfunction initialMatch(_x22) {\n\t\t\t\t\treturn _ref14.apply(this, arguments);\n\t\t\t\t}\n\n\t\t\t\treturn initialMatch;\n\t\t\t}()\n\n\t\t\t/**\n   async lastTriggers (string user) -> object\n   \tRetrieve the triggers that have been matched for the last reply. This\n   will contain all matched trigger with every subsequent redirects.\n   \tThis value is reset on each `reply()` or `replyAsync()` call.\n   */\n\n\t\t}, {\n\t\t\tkey: \"lastTriggers\",\n\t\t\tvalue: function () {\n\t\t\t\tvar _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(user) {\n\t\t\t\t\tvar self;\n\t\t\t\t\treturn regeneratorRuntime.wrap(function _callee14$(_context14) {\n\t\t\t\t\t\twhile (1) {\n\t\t\t\t\t\t\tswitch (_context14.prev = _context14.next) {\n\t\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\t\tself = this;\n\t\t\t\t\t\t\t\t\treturn _context14.abrupt(\"return\", self._session.get(user, \"__last_triggers__\"));\n\n\t\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\t\treturn _context14.stop();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}, _callee14, this);\n\t\t\t\t}));\n\n\t\t\t\tfunction lastTriggers(_x23) {\n\t\t\t\t\treturn _ref15.apply(this, arguments);\n\t\t\t\t}\n\n\t\t\t\treturn lastTriggers;\n\t\t\t}()\n\n\t\t\t/**\n   async getUserTopicTriggers (string username) -> object\n   \tRetrieve the triggers in the current topic for the specified user. It can\n   be used to create a UI that gives the user options based on trigges, e.g.\n   using buttons, select boxes and other UI resources. This also includes the\n   triggers available in any topics inherited or included by the user's current\n   topic.\n   \tThis will return `undefined` if the user cant be find\n   */\n\n\t\t}, {\n\t\t\tkey: \"getUserTopicTriggers\",\n\t\t\tvalue: function () {\n\t\t\t\tvar _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(user) {\n\t\t\t\t\tvar self;\n\t\t\t\t\treturn regeneratorRuntime.wrap(function _callee15$(_context15) {\n\t\t\t\t\t\twhile (1) {\n\t\t\t\t\t\t\tswitch (_context15.prev = _context15.next) {\n\t\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\t\tself = this;\n\t\t\t\t\t\t\t\t\treturn _context15.abrupt(\"return\", new Promise(function (resolve, reject) {\n\t\t\t\t\t\t\t\t\t\tself._session.get(user, \"topic\").then(function (topic) {\n\t\t\t\t\t\t\t\t\t\t\tresolve(inherit_utils.getTopicTriggers(self, topic));\n\t\t\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\t\t}));\n\n\t\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\t\treturn _context15.stop();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}, _callee15, this);\n\t\t\t\t}));\n\n\t\t\t\tfunction getUserTopicTriggers(_x24) {\n\t\t\t\t\treturn _ref16.apply(this, arguments);\n\t\t\t\t}\n\n\t\t\t\treturn getUserTopicTriggers;\n\t\t\t}()\n\n\t\t\t/**\n   string currentUser ()\n   \tRetrieve the current user's ID. This is most useful within a JavaScript\n   object macro to get the ID of the user who invoked the macro (e.g. to\n   get/set user variables for them).\n   \tThis will return undefined if called from outside of a reply context\n   (the value is unset at the end of the `reply()` method)\n   */\n\n\t\t}, {\n\t\t\tkey: \"currentUser\",\n\t\t\tvalue: function currentUser() {\n\t\t\t\tvar self = this;\n\n\t\t\t\tif (self.brain._currentUser === null) {\n\t\t\t\t\tself.warn(\"currentUser() is intended to be called from within a JS object macro!\");\n\t\t\t\t}\n\t\t\t\treturn self.brain._currentUser;\n\t\t\t}\n\n\t\t\t////////////////////////////////////////////////////////////////////////\n\t\t\t// Reply Fetching Methods                                             //\n\t\t\t////////////////////////////////////////////////////////////////////////\n\n\t\t\t/**\n   Promise reply (string username, string message[, scope])\n   \tFetch a reply from the RiveScript brain. The message doesn't require any\n   special pre-processing to be done to it, i.e. it's allowed to contain\n   punctuation and weird symbols. The username is arbitrary and is used to\n   uniquely identify the user, in the case that you may have multiple\n   distinct users chatting with your bot.\n   \t**Changed in version 2.0.0:** this function used to return a string, but\n   therefore didn't support async object macros or session managers. This\n   function now returns a Promise (obsoleting the `replyAsync()` function).\n   \tThe optional `scope` parameter will be passed down into any JavaScript\n   object macros that the RiveScript code executes. If you pass the special\n   variable `this` as the scope parameter, then `this` in the context of an\n   object macro will refer to the very same `this` as the one you passed in,\n   so for example the object macro will have access to any local functions\n   or attributes that your code has access to, from the location that `reply()`\n   was called. For an example of this, refer to the `eg/scope` directory in\n   the source distribution of RiveScript-JS.\n   \tExample:\n   \t```javascript\n   // Normal usage as a promise\n   bot.reply(username, message, this).then(function(reply) {\n       console.log(\"Bot>\", reply);\n   });\n   \t// Async-Await usage in an async function.\n   async function getReply(username, message) {\n       var reply = await bot.reply(username, message);\n       console.log(\"Bot>\", reply);\n   }\n   ```\n   */\n\n\t\t}, {\n\t\t\tkey: \"reply\",\n\t\t\tvalue: function () {\n\t\t\t\tvar _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(user, msg, scope) {\n\t\t\t\t\tvar self;\n\t\t\t\t\treturn regeneratorRuntime.wrap(function _callee16$(_context16) {\n\t\t\t\t\t\twhile (1) {\n\t\t\t\t\t\t\tswitch (_context16.prev = _context16.next) {\n\t\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\t\tself = this;\n\t\t\t\t\t\t\t\t\t_context16.next = 3;\n\t\t\t\t\t\t\t\t\treturn self.brain.reply(user, msg, scope);\n\n\t\t\t\t\t\t\t\tcase 3:\n\t\t\t\t\t\t\t\t\treturn _context16.abrupt(\"return\", _context16.sent);\n\n\t\t\t\t\t\t\t\tcase 4:\n\t\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\t\treturn _context16.stop();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}, _callee16, this);\n\t\t\t\t}));\n\n\t\t\t\tfunction reply(_x25, _x26, _x27) {\n\t\t\t\t\treturn _ref17.apply(this, arguments);\n\t\t\t\t}\n\n\t\t\t\treturn reply;\n\t\t\t}()\n\n\t\t\t/**\n   Promise replyAsync (string username, string message [[, scope], callback])\n   \t**Obsolete as of v2.0.0** -- use `reply()` instead in new code.\n   \tAsyncronous version of reply. Use replyAsync if at least one of the subroutines\n   used with the `<call>` tag returns a promise.\n   \tExample: using promises\n   \t```javascript\n   rs.replyAsync(user, message).then(function(reply) {\n     console.log(\"Bot>\", reply);\n   }).catch(function(error) {\n     console.error(\"Error: \", error);\n   });\n   ```\n   \tExample: using the callback\n   \t```javascript\n   rs.replyAsync(username, msg, this, function(error, reply) {\n     if (!error) {\n       console.log(\"Bot>\", reply);\n     } else {\n       console.error(\"Error: \", error);\n     }\n   });\n   ```\n   */\n\n\t\t}, {\n\t\t\tkey: \"replyAsync\",\n\t\t\tvalue: function replyAsync(user, msg, scope, callback) {\n\t\t\t\tvar self = this;\n\t\t\t\tself.warn(\"DEPRECATED FUNCTION: RiveScript.replyAsync() is deprecated; use reply() instead\");\n\n\t\t\t\tvar reply = self.brain.reply(user, msg, scope);\n\t\t\t\tif (callback) {\n\t\t\t\t\treply.then(function (result) {\n\t\t\t\t\t\treturn callback.call(self, null, result);\n\t\t\t\t\t}).catch(function (error) {\n\t\t\t\t\t\treturn callback.call(self, error, null);\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t\treturn reply;\n\t\t\t}\n\t\t}]);\n\n\t\treturn RiveScript;\n\t}();\n\n\t;\n\n\t/**\n Promise Promise\n \t**DEPRECATED**\n \tBackwards compatible alias to the native JavaScript `Promise` object.\n \t`rs.Promise` used to refer to an `RSVP.Promise` which acted as a polyfill\n for older systems. In new code, return a native Promise directly from your\n object macros.\n \tThis enables you to create a JavaScript object macro that returns a promise\n for asynchronous tasks (e.g. polling a web API or database). Example:\n \t```javascript\n rs.setSubroutine(\"asyncHelper\", function (rs, args) {\n  return new rs.Promise(function (resolve, reject) {\n    resolve(42);\n  });\n });\n ```\n \tIf you're using promises in your object macros, you need to get a reply from\n the bot using the `replyAsync()` method instead of `reply()`, for example:\n \t```javascript\n rs.replyAsync(username, message, this).then(function(reply) {\n    console.log(\"Bot> \", reply);\n });\n ```\n */\n\tRiveScript.prototype.Promise = Promise;\n\n\treturn RiveScript;\n}();\n\nmodule.exports = RiveScript;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack://RiveScript/./src/rivescript.js?");

/***/ }),

/***/ "./src/sessions.js":
/*!*************************!*\
  !*** ./src/sessions.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// RiveScript.js\n// https://www.rivescript.com/\n\n// This code is released under the MIT License.\n// See the \"LICENSE\" file for more information.\n\n\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar noop = function () {\n\tvar _ref25 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(resp) {\n\t\treturn regeneratorRuntime.wrap(function _callee25$(_context25) {\n\t\t\twhile (1) {\n\t\t\t\tswitch (_context25.prev = _context25.next) {\n\t\t\t\t\tcase 0:\n\t\t\t\t\t\treturn _context25.abrupt(\"return\", new Promise(function (resolve, reject) {\n\t\t\t\t\t\t\tresolve(resp);\n\t\t\t\t\t\t}));\n\n\t\t\t\t\tcase 1:\n\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\treturn _context25.stop();\n\t\t\t\t}\n\t\t\t}\n\t\t}, _callee25, this);\n\t}));\n\n\treturn function noop(_x28) {\n\t\treturn _ref25.apply(this, arguments);\n\t};\n}();\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n/**\nSessionManager\n\nThis is the interface for session managers that store user variables for\nRiveScript. User variables include those set with the `<set>` tag or the\n`setUservar()` function, as well as recent reply history and private internal\nstate variables.\n\nThe default session manager keeps the variables in memory. This means the bot\ndoesn't remember users after you restart the program; but the functions\n`getUservars()` and `setUservars()` are available to export and import the\nvariables yourself.\n\nIf you prefer a more active session manager that stores and retrieves user\nvariables from a MySQL, MongoDB or Redis database, you can replace the default\nsession manager with one that implements that backend (or write one yourself\nthat implements this SessionManager API).\n\nTo use a session manager, you'd typically do something like:\n\n```javascript\nconst RedisSessions = require(\"rivescript-contrib-redis\");\n\n// Provide the sessionManager option to use this instead of\n// the default MemorySessionManager.\nvar bot = new RiveScript({\n\tsessionManager: new RedisSessions(\"localhost:6379\")\n});\n```\n\nTo implement your own session manager, you should extend the\n`SessionManager` class and implement a compatible object.\n*/\n\nvar SessionManager = function () {\n\tfunction SessionManager() {\n\t\t_classCallCheck(this, SessionManager);\n\t}\n\n\t_createClass(SessionManager, [{\n\t\tkey: \"set\",\n\n\t\t/**\n  void set(string username, object data)\n  \tSet user variables for the user `username`. The `args` should be an object\n  of key/value pairs. The values are usually strings, but they can be other\n  types as well (e.g. arrays or other objects) for some internal data\n  structures such as input/reply history.\n  \tA value of `null` for a variable means it should be deleted from the\n  user's session store.\n  */\n\t\tvalue: function () {\n\t\t\tvar _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(username, data) {\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee$(_context) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\tthrow \"Not Implemented\";\n\n\t\t\t\t\t\t\tcase 1:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee, this);\n\t\t\t}));\n\n\t\t\tfunction set(_x, _x2) {\n\t\t\t\treturn _ref.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn set;\n\t\t}()\n\n\t\t/**\n  async get(string username, string key) -> string\n  \tRetrieve a stored variable for a user.\n  \tIf the user doesn't exist, this should resolve `null`. If the user *does*\n  exist, but the key does not, this function should resolve the\n  string value `\"undefined\"`.\n  */\n\n\t}, {\n\t\tkey: \"get\",\n\t\tvalue: function () {\n\t\t\tvar _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(username, key) {\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee2$(_context2) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context2.prev = _context2.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\tthrow \"Not Implemented\";\n\n\t\t\t\t\t\t\tcase 1:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context2.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee2, this);\n\t\t\t}));\n\n\t\t\tfunction get(_x3, _x4) {\n\t\t\t\treturn _ref2.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn get;\n\t\t}()\n\n\t\t/**\n  async getAny(string username) -> object\n  \tRetrieve all stored user variables for the user `username`.\n  \tThis should resolve an object of the key/value pairs you have stored for\n  the user. If the user doesn't exist, resolve `null`.\n  */\n\n\t}, {\n\t\tkey: \"getAny\",\n\t\tvalue: function () {\n\t\t\tvar _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(username) {\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee3$(_context3) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context3.prev = _context3.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\tthrow \"Not Implemented\";\n\n\t\t\t\t\t\t\tcase 1:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context3.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee3, this);\n\t\t\t}));\n\n\t\t\tfunction getAny(_x5) {\n\t\t\t\treturn _ref3.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn getAny;\n\t\t}()\n\n\t\t/**\n  async getAll() -> object\n  \tRetrieve all variables about all users.\n  \tThis should return an object that maps usernames to an object of their\n  variables. For example:\n  \t```json\n  { \"user1\": {\n      \"topic\": \"random\",\n         \"name\": \"Alice\"\n    },\n    \"user2\": {\n      \"topic\": \"random\",\n      \"name\": \"Bob\"\n    }\n  }\n  ```\n  */\n\n\t}, {\n\t\tkey: \"getAll\",\n\t\tvalue: function () {\n\t\t\tvar _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee4$(_context4) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context4.prev = _context4.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\tthrow \"Not Implemented\";\n\n\t\t\t\t\t\t\tcase 1:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context4.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee4, this);\n\t\t\t}));\n\n\t\t\tfunction getAll() {\n\t\t\t\treturn _ref4.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn getAll;\n\t\t}()\n\n\t\t/**\n  async reset(string username)\n  \tReset all variables stored about a particular user.\n  */\n\n\t}, {\n\t\tkey: \"reset\",\n\t\tvalue: function () {\n\t\t\tvar _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(username) {\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee5$(_context5) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context5.prev = _context5.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\tthrow \"Not Implemented\";\n\n\t\t\t\t\t\t\tcase 1:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context5.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee5, this);\n\t\t\t}));\n\n\t\t\tfunction reset(_x6) {\n\t\t\t\treturn _ref5.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn reset;\n\t\t}()\n\n\t\t/**\n  async resetAll()\n  \tReset all data about all users.\n  */\n\n\t}, {\n\t\tkey: \"resetAll\",\n\t\tvalue: function () {\n\t\t\tvar _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee6$(_context6) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context6.prev = _context6.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\tthrow \"Not Implemented\";\n\n\t\t\t\t\t\t\tcase 1:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context6.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee6, this);\n\t\t\t}));\n\n\t\t\tfunction resetAll() {\n\t\t\t\treturn _ref6.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn resetAll;\n\t\t}()\n\n\t\t/**\n  async freeze(string username)\n  \tMake a snapshot of the user's variables so that they can be restored\n  later via `thaw()`. This is the implementation for\n  `RiveScript.freezeUservars()`\n  */\n\n\t}, {\n\t\tkey: \"freeze\",\n\t\tvalue: function () {\n\t\t\tvar _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(username) {\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee7$(_context7) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context7.prev = _context7.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\tthrow \"Not Implemented\";\n\n\t\t\t\t\t\t\tcase 1:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context7.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee7, this);\n\t\t\t}));\n\n\t\t\tfunction freeze(_x7) {\n\t\t\t\treturn _ref7.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn freeze;\n\t\t}()\n\n\t\t/**\n  async thaw(string username, string action)\n  \tRestore the frozen snapshot of variables for a user.\n  \tThis should replace _all_ of a user's variables with the frozen copy\n  that was snapshotted with `freeze()`. If there are no frozen variables,\n  this function should be a no-op (maybe print a warning?)\n  \tValid options for `action` reflect the usage of `rs.thawUservars()`:\n  \t* `thaw`: Restore the variables and delete the frozen copy (default)\n  * `discard`: Do not restore the variables, but delete the frozen copy\n  * `keep`: Restore the variables and keep the frozen copy\n  */\n\n\t}, {\n\t\tkey: \"thaw\",\n\t\tvalue: function () {\n\t\t\tvar _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(username, action) {\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee8$(_context8) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context8.prev = _context8.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\tthrow \"Not Implemented\";\n\n\t\t\t\t\t\t\tcase 1:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context8.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee8, this);\n\t\t\t}));\n\n\t\t\tfunction thaw(_x8, _x9) {\n\t\t\t\treturn _ref8.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn thaw;\n\t\t}()\n\n\t\t/**\n  object defaultSession()\n  \tYou do not need to override this method. This returns the default session\n  variables for a new user, e.g. with the variable `topic=\"random\"` as per\n  the RiveScript spec.\n  */\n\n\t}, {\n\t\tkey: \"defaultSession\",\n\t\tvalue: function defaultSession() {\n\t\t\treturn {\n\t\t\t\t\"topic\": \"random\"\n\t\t\t};\n\t\t}\n\t}]);\n\n\treturn SessionManager;\n}();\n\n/**\nMemorySessionManager\n\nThis is the default in-memory session store for RiveScript.\n\nIt keeps all user variables in an object in memory and does not persist them\nto disk. This means it won't remember user variables between reboots of your\nbot's program, but it remembers just fine during its lifetime.\n\nThe RiveScript methods `getUservars()` and `setUservars()` are available to\nexport and import user variables as JSON-serializable objects so that your\nprogram could save them to disk on its own.\n\nSee the documentation for `SessionManager` for information on extending\nRiveScript with an alternative session store.\n*/\n\n\nvar MemorySessionManager = function (_SessionManager) {\n\t_inherits(MemorySessionManager, _SessionManager);\n\n\tfunction MemorySessionManager() {\n\t\t_classCallCheck(this, MemorySessionManager);\n\n\t\tvar _this = _possibleConstructorReturn(this, (MemorySessionManager.__proto__ || Object.getPrototypeOf(MemorySessionManager)).call(this));\n\n\t\tvar self = _this;\n\t\tself._users = {};\n\t\tself._frozen = {};\n\t\treturn _this;\n\t}\n\n\t// init makes sure a user exists in the session store.\n\n\n\t_createClass(MemorySessionManager, [{\n\t\tkey: \"init\",\n\t\tvalue: function init(username) {\n\t\t\tvar self = this;\n\t\t\tif (self._users[username] === undefined) {\n\t\t\t\tself._users[username] = self.defaultSession();\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: \"set\",\n\t\tvalue: function () {\n\t\t\tvar _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(username, data) {\n\t\t\t\tvar self;\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee9$(_context9) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context9.prev = _context9.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\tself = this;\n\t\t\t\t\t\t\t\treturn _context9.abrupt(\"return\", new Promise(function (resolve, reject) {\n\t\t\t\t\t\t\t\t\tself.init(username);\n\t\t\t\t\t\t\t\t\tfor (var key in data) {\n\t\t\t\t\t\t\t\t\t\tif (data.hasOwnProperty(key)) {\n\t\t\t\t\t\t\t\t\t\t\tself._users[username][key] = data[key];\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tresolve();\n\t\t\t\t\t\t\t\t}));\n\n\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context9.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee9, this);\n\t\t\t}));\n\n\t\t\tfunction set(_x10, _x11) {\n\t\t\t\treturn _ref9.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn set;\n\t\t}()\n\t}, {\n\t\tkey: \"get\",\n\t\tvalue: function () {\n\t\t\tvar _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(username, key) {\n\t\t\t\tvar self;\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee10$(_context10) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context10.prev = _context10.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\tself = this;\n\t\t\t\t\t\t\t\treturn _context10.abrupt(\"return\", new Promise(function (resolve, reject) {\n\t\t\t\t\t\t\t\t\tif (self._users[username] === undefined) {\n\t\t\t\t\t\t\t\t\t\tresolve(null);\n\t\t\t\t\t\t\t\t\t} else if (self._users[username][key] !== undefined) {\n\t\t\t\t\t\t\t\t\t\tresolve(self._users[username][key]);\n\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\tresolve(\"undefined\");\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}));\n\n\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context10.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee10, this);\n\t\t\t}));\n\n\t\t\tfunction get(_x12, _x13) {\n\t\t\t\treturn _ref10.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn get;\n\t\t}()\n\t}, {\n\t\tkey: \"getAny\",\n\t\tvalue: function () {\n\t\t\tvar _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(username) {\n\t\t\t\tvar self;\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee11$(_context11) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context11.prev = _context11.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\tself = this;\n\t\t\t\t\t\t\t\treturn _context11.abrupt(\"return\", new Promise(function (resolve, reject) {\n\t\t\t\t\t\t\t\t\tif (self._users[username] === undefined) {\n\t\t\t\t\t\t\t\t\t\tresolve(null);\n\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\tresolve(utils.clone(self._users[username]));\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}));\n\n\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context11.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee11, this);\n\t\t\t}));\n\n\t\t\tfunction getAny(_x14) {\n\t\t\t\treturn _ref11.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn getAny;\n\t\t}()\n\t}, {\n\t\tkey: \"getAll\",\n\t\tvalue: function () {\n\t\t\tvar _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {\n\t\t\t\tvar self;\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee12$(_context12) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context12.prev = _context12.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\tself = this;\n\t\t\t\t\t\t\t\treturn _context12.abrupt(\"return\", new Promise(function (resolve, reject) {\n\t\t\t\t\t\t\t\t\tresolve(utils.clone(self._users));\n\t\t\t\t\t\t\t\t}));\n\n\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context12.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee12, this);\n\t\t\t}));\n\n\t\t\tfunction getAll() {\n\t\t\t\treturn _ref12.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn getAll;\n\t\t}()\n\t}, {\n\t\tkey: \"reset\",\n\t\tvalue: function () {\n\t\t\tvar _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(username) {\n\t\t\t\tvar self;\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee13$(_context13) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context13.prev = _context13.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\tself = this;\n\t\t\t\t\t\t\t\treturn _context13.abrupt(\"return\", new Promise(function (resolve, reject) {\n\t\t\t\t\t\t\t\t\tif (self._users[username] !== undefined) {\n\t\t\t\t\t\t\t\t\t\tdelete self._users[username];\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tif (self._frozen[username] !== undefined) {\n\t\t\t\t\t\t\t\t\t\tdelete self._frozen[username];\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tresolve();\n\t\t\t\t\t\t\t\t}));\n\n\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context13.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee13, this);\n\t\t\t}));\n\n\t\t\tfunction reset(_x15) {\n\t\t\t\treturn _ref13.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn reset;\n\t\t}()\n\t}, {\n\t\tkey: \"resetAll\",\n\t\tvalue: function () {\n\t\t\tvar _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {\n\t\t\t\tvar self;\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee14$(_context14) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context14.prev = _context14.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\tself = this;\n\t\t\t\t\t\t\t\treturn _context14.abrupt(\"return\", new Promise(function (resolve, reject) {\n\t\t\t\t\t\t\t\t\tself._users = {};\n\t\t\t\t\t\t\t\t\tself._frozen = {};\n\t\t\t\t\t\t\t\t\tresolve();\n\t\t\t\t\t\t\t\t}));\n\n\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context14.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee14, this);\n\t\t\t}));\n\n\t\t\tfunction resetAll() {\n\t\t\t\treturn _ref14.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn resetAll;\n\t\t}()\n\t}, {\n\t\tkey: \"freeze\",\n\t\tvalue: function () {\n\t\t\tvar _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(username) {\n\t\t\t\tvar self;\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee15$(_context15) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context15.prev = _context15.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\tself = this;\n\t\t\t\t\t\t\t\treturn _context15.abrupt(\"return\", new Promise(function (resolve, reject) {\n\t\t\t\t\t\t\t\t\tif (self._users[username] !== undefined) {\n\t\t\t\t\t\t\t\t\t\tself._frozen[username] = utils.clone(self._users[username]);\n\t\t\t\t\t\t\t\t\t\tresolve();\n\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\treject(\"freeze(\" + username + \"): user not found\");\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}));\n\n\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context15.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee15, this);\n\t\t\t}));\n\n\t\t\tfunction freeze(_x16) {\n\t\t\t\treturn _ref15.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn freeze;\n\t\t}()\n\t}, {\n\t\tkey: \"thaw\",\n\t\tvalue: function () {\n\t\t\tvar _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(username) {\n\t\t\t\tvar action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"thaw\";\n\t\t\t\tvar self;\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee16$(_context16) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context16.prev = _context16.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\tself = this;\n\t\t\t\t\t\t\t\treturn _context16.abrupt(\"return\", new Promise(function (resolve, reject) {\n\t\t\t\t\t\t\t\t\tif (self._frozen[username] !== undefined) {\n\t\t\t\t\t\t\t\t\t\t// OK what are we doing?\n\t\t\t\t\t\t\t\t\t\tswitch (action) {\n\t\t\t\t\t\t\t\t\t\t\tcase \"thaw\":\n\t\t\t\t\t\t\t\t\t\t\t\tself._users[username] = utils.clone(self._frozen[username]);\n\t\t\t\t\t\t\t\t\t\t\t\tdelete self._frozen[username];\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t\t\tcase \"discard\":\n\t\t\t\t\t\t\t\t\t\t\t\tdelete self._frozen[username];\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t\t\tcase \"keep\":\n\t\t\t\t\t\t\t\t\t\t\t\tself._users[username] = utils.clone(self._frozen[username]);\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t\t\tdefault:\n\t\t\t\t\t\t\t\t\t\t\t\treject(\"bad thaw action\");\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\tresolve();\n\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\treject(\"thaw(\" + username + \"): no frozen variables found\");\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}));\n\n\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context16.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee16, this);\n\t\t\t}));\n\n\t\t\tfunction thaw(_x18) {\n\t\t\t\treturn _ref16.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn thaw;\n\t\t}()\n\t}]);\n\n\treturn MemorySessionManager;\n}(SessionManager);\n\n/**\nNullSessionManager\n\nThis is a session manager implementation that does not remember any user\nvariables. It is mostly useful for unit tests.\n*/\n\n\nvar NullSessionManager = function (_SessionManager2) {\n\t_inherits(NullSessionManager, _SessionManager2);\n\n\tfunction NullSessionManager() {\n\t\t_classCallCheck(this, NullSessionManager);\n\n\t\treturn _possibleConstructorReturn(this, (NullSessionManager.__proto__ || Object.getPrototypeOf(NullSessionManager)).apply(this, arguments));\n\t}\n\n\t_createClass(NullSessionManager, [{\n\t\tkey: \"set\",\n\t\tvalue: function () {\n\t\t\tvar _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(username, data) {\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee17$(_context17) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context17.prev = _context17.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\treturn _context17.abrupt(\"return\", noop());\n\n\t\t\t\t\t\t\tcase 1:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context17.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee17, this);\n\t\t\t}));\n\n\t\t\tfunction set(_x19, _x20) {\n\t\t\t\treturn _ref17.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn set;\n\t\t}()\n\t}, {\n\t\tkey: \"get\",\n\t\tvalue: function () {\n\t\t\tvar _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(username, key) {\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee18$(_context18) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context18.prev = _context18.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\treturn _context18.abrupt(\"return\", noop(\"undefined\"));\n\n\t\t\t\t\t\t\tcase 1:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context18.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee18, this);\n\t\t\t}));\n\n\t\t\tfunction get(_x21, _x22) {\n\t\t\t\treturn _ref18.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn get;\n\t\t}()\n\t}, {\n\t\tkey: \"getAny\",\n\t\tvalue: function () {\n\t\t\tvar _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(username) {\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee19$(_context19) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context19.prev = _context19.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\treturn _context19.abrupt(\"return\", noop(null));\n\n\t\t\t\t\t\t\tcase 1:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context19.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee19, this);\n\t\t\t}));\n\n\t\t\tfunction getAny(_x23) {\n\t\t\t\treturn _ref19.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn getAny;\n\t\t}()\n\t}, {\n\t\tkey: \"getAll\",\n\t\tvalue: function () {\n\t\t\tvar _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee20$(_context20) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context20.prev = _context20.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\treturn _context20.abrupt(\"return\", noop(new Object()));\n\n\t\t\t\t\t\t\tcase 1:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context20.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee20, this);\n\t\t\t}));\n\n\t\t\tfunction getAll() {\n\t\t\t\treturn _ref20.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn getAll;\n\t\t}()\n\t}, {\n\t\tkey: \"reset\",\n\t\tvalue: function () {\n\t\t\tvar _ref21 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(username) {\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee21$(_context21) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context21.prev = _context21.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\treturn _context21.abrupt(\"return\", noop());\n\n\t\t\t\t\t\t\tcase 1:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context21.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee21, this);\n\t\t\t}));\n\n\t\t\tfunction reset(_x24) {\n\t\t\t\treturn _ref21.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn reset;\n\t\t}()\n\t}, {\n\t\tkey: \"resetAll\",\n\t\tvalue: function () {\n\t\t\tvar _ref22 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee22$(_context22) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context22.prev = _context22.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\treturn _context22.abrupt(\"return\", noop());\n\n\t\t\t\t\t\t\tcase 1:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context22.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee22, this);\n\t\t\t}));\n\n\t\t\tfunction resetAll() {\n\t\t\t\treturn _ref22.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn resetAll;\n\t\t}()\n\t}, {\n\t\tkey: \"freeze\",\n\t\tvalue: function () {\n\t\t\tvar _ref23 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(username) {\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee23$(_context23) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context23.prev = _context23.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\treturn _context23.abrupt(\"return\", noop());\n\n\t\t\t\t\t\t\tcase 1:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context23.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee23, this);\n\t\t\t}));\n\n\t\t\tfunction freeze(_x25) {\n\t\t\t\treturn _ref23.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn freeze;\n\t\t}()\n\t}, {\n\t\tkey: \"thaw\",\n\t\tvalue: function () {\n\t\t\tvar _ref24 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(username, action) {\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee24$(_context24) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context24.prev = _context24.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\treturn _context24.abrupt(\"return\", noop());\n\n\t\t\t\t\t\t\tcase 1:\n\t\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\t\treturn _context24.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee24, this);\n\t\t\t}));\n\n\t\t\tfunction thaw(_x26, _x27) {\n\t\t\t\treturn _ref24.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn thaw;\n\t\t}()\n\t}]);\n\n\treturn NullSessionManager;\n}(SessionManager);\n\nmodule.exports.SessionManager = SessionManager;\nmodule.exports.MemorySessionManager = MemorySessionManager;\nmodule.exports.NullSessionManager = NullSessionManager;\n\n//# sourceURL=webpack://RiveScript/./src/sessions.js?");

/***/ }),

/***/ "./src/sorting.js":
/*!************************!*\
  !*** ./src/sorting.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// RiveScript.js\n// https://www.rivescript.com/\n\n// This code is released under the MIT License.\n// See the \"LICENSE\" file for more information.\n\n\n\n/**\nData sorting functions\n*/\n\nvar utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n/**\nstring[] sortTriggerSet (string[] triggers[, exclude_previous[, func say]])\n\nSort a group of triggers in an optimal sorting order. The `say` parameter is\na reference to RiveScript.say() or provide your own function (or not) for\ndebug logging from within this function.\n\nThis function has two use cases:\n\n1. create a sort buffer for \"normal\" (matchable) triggers, which are triggers\n   which are NOT accompanied by a %Previous tag.\n2. create a sort buffer for triggers that had %Previous tags.\n\nUse the `exclude_previous` parameter to control which one is being done.\nThis function will return a list of items in the format of\n`[ \"trigger text\", trigger pointer ]` and it's intended to have no duplicate\ntrigger patterns (unless the source RiveScript code explicitly uses the\nsame duplicate pattern twice, which is a user error).\n*/\nexports.sortTriggerSet = function (triggers, exclude_previous, say) {\n\tvar self = this;\n\tvar match;\n\n\tif (say == null) {\n\t\tsay = function say(what) {};\n\t}\n\tif (exclude_previous == null) {\n\t\texclude_previous = true;\n\t}\n\n\t// KEEP IN MIND: the `triggers` array is composed of array elements of the form\n\t// [\"trigger text\", pointer to trigger data]\n\t// So this code will use e.g. `trig[0]` when referring to the trigger text.\n\n\t// Create a priority map.\n\tvar prior = {\n\t\t\"0\": []\n\t};\n\n\t// Sort triggers by their weights.\n\tfor (var i = 0, len = triggers.length; i < len; i++) {\n\t\tvar trig = triggers[i];\n\n\t\t// If we're excluding triggers with \"previous\" values, skip them here.\n\t\tif (exclude_previous && trig[1].previous != null) {\n\t\t\tcontinue;\n\t\t}\n\n\t\tmatch = trig[0].match(/\\{weight=(\\d+)\\}/i);\n\t\tvar weight = 0;\n\t\tif (match && match[1]) {\n\t\t\tweight = match[1];\n\t\t}\n\t\tif (prior[weight] == null) {\n\t\t\tprior[weight] = [];\n\t\t}\n\t\tprior[weight].push(trig);\n\t}\n\n\t// Keep a running list of sorted triggers for this topic.\n\tvar running = [];\n\tvar prior_sort = Object.keys(prior).sort(function (a, b) {\n\t\treturn b - a;\n\t});\n\tfor (var j = 0, len1 = prior_sort.length; j < len1; j++) {\n\t\tvar p = prior_sort[j];\n\t\tsay(\"Sorting triggers with priority \" + p);\n\n\t\t// So, some of these triggers may include an {inherits} tag, if they came\n\t\t// from a topic which inherits another topic. Lower inherits values mean\n\t\t// higher priority on the stack.\n\t\tvar inherits = -1; // -1 means no {inherits} tag\n\t\tvar highest_inherits = -1; // highest number seen so far\n\n\t\t// Loop through and categorize these triggers.\n\t\tvar track = {};\n\t\ttrack[inherits] = initSortTrack();\n\t\tfor (var k = 0, len2 = prior[p].length; k < len2; k++) {\n\t\t\tvar _trig = prior[p][k];\n\t\t\tvar pattern = _trig[0];\n\t\t\tsay(\"Looking at trigger: \" + pattern);\n\n\t\t\t// See if it has an inherits tag.\n\t\t\tmatch = pattern.match(/\\{inherits=(\\d+)\\}/i);\n\t\t\tif (match) {\n\t\t\t\tinherits = parseInt(match[1]);\n\t\t\t\tif (inherits > highest_inherits) {\n\t\t\t\t\thighest_inherits = inherits;\n\t\t\t\t}\n\t\t\t\tsay(\"Trigger belongs to a topic that inherits other topics. Level=\" + inherits);\n\t\t\t\tpattern = pattern.replace(/\\{inherits=\\d+\\}/ig, \"\");\n\t\t\t\t_trig[0] = pattern;\n\t\t\t} else {\n\t\t\t\tinherits = -1;\n\t\t\t}\n\n\t\t\t// If this is the first time we've seen this inheritance level,\n\t\t\t// initialize its sort track structure.\n\t\t\tif (track[inherits] == null) {\n\t\t\t\ttrack[inherits] = initSortTrack();\n\t\t\t}\n\n\t\t\t// Start inspecting the trigger's contents.\n\t\t\tif (pattern.indexOf(\"_\") > -1) {\n\t\t\t\t// Alphabetic wildcard included.\n\t\t\t\tvar cnt = utils.word_count(pattern);\n\t\t\t\tsay(\"Has a _ wildcard with \" + cnt + \" words.\");\n\t\t\t\tif (cnt > 0) {\n\t\t\t\t\tif (track[inherits].alpha[cnt] == null) {\n\t\t\t\t\t\ttrack[inherits].alpha[cnt] = [];\n\t\t\t\t\t}\n\t\t\t\t\ttrack[inherits].alpha[cnt].push(_trig);\n\t\t\t\t} else {\n\t\t\t\t\ttrack[inherits].under.push(_trig);\n\t\t\t\t}\n\t\t\t} else if (pattern.indexOf(\"#\") > -1) {\n\t\t\t\t// Numeric wildcard included.\n\t\t\t\tvar _cnt = utils.word_count(pattern);\n\t\t\t\tsay(\"Has a # wildcard with \" + _cnt + \" words.\");\n\t\t\t\tif (_cnt > 0) {\n\t\t\t\t\tif (track[inherits].number[_cnt] == null) {\n\t\t\t\t\t\ttrack[inherits].number[_cnt] = [];\n\t\t\t\t\t}\n\t\t\t\t\ttrack[inherits].number[_cnt].push(_trig);\n\t\t\t\t} else {\n\t\t\t\t\ttrack[inherits].pound.push(_trig);\n\t\t\t\t}\n\t\t\t} else if (pattern.indexOf(\"*\") > -1) {\n\t\t\t\t// Wildcard included.\n\t\t\t\tvar _cnt2 = utils.word_count(pattern);\n\t\t\t\tsay(\"Has a * wildcard with \" + _cnt2 + \" words.\");\n\t\t\t\tif (_cnt2 > 0) {\n\t\t\t\t\tif (track[inherits].wild[_cnt2] == null) {\n\t\t\t\t\t\ttrack[inherits].wild[_cnt2] = [];\n\t\t\t\t\t}\n\t\t\t\t\ttrack[inherits].wild[_cnt2].push(_trig);\n\t\t\t\t} else {\n\t\t\t\t\ttrack[inherits].star.push(_trig);\n\t\t\t\t}\n\t\t\t} else if (pattern.indexOf(\"[\") > -1) {\n\t\t\t\t// Optionals included.\n\t\t\t\tvar _cnt3 = utils.word_count(pattern);\n\t\t\t\tsay(\"Has optionals with \" + _cnt3 + \" words.\");\n\t\t\t\tif (track[inherits].option[_cnt3] == null) {\n\t\t\t\t\ttrack[inherits].option[_cnt3] = [];\n\t\t\t\t}\n\t\t\t\ttrack[inherits].option[_cnt3].push(_trig);\n\t\t\t} else {\n\t\t\t\t// Totally atomic\n\t\t\t\tvar _cnt4 = utils.word_count(pattern);\n\t\t\t\tsay(\"Totally atomic trigger with \" + _cnt4 + \" words.\");\n\t\t\t\tif (track[inherits].atomic[_cnt4] == null) {\n\t\t\t\t\ttrack[inherits].atomic[_cnt4] = [];\n\t\t\t\t}\n\t\t\t\ttrack[inherits].atomic[_cnt4].push(_trig);\n\t\t\t}\n\t\t}\n\n\t\t// Move the no-{inherits} triggers to the bottom of the stack.\n\t\ttrack[highest_inherits + 1] = track['-1'];\n\t\tdelete track['-1'];\n\n\t\t// Add this group to the sort track.\n\t\tvar track_sorted = Object.keys(track).sort(function (a, b) {\n\t\t\treturn a - b;\n\t\t});\n\t\tfor (var l = 0, len3 = track_sorted.length; l < len3; l++) {\n\t\t\tvar ip = track_sorted[l];\n\t\t\tsay(\"ip=\" + ip);\n\n\t\t\tvar groups = [\"atomic\", \"option\", \"alpha\", \"number\", \"wild\"];\n\t\t\t// Sort each of the main kinds of triggers by their word counts.\n\t\t\tfor (var m = 0, len4 = groups.length; m < len4; m++) {\n\t\t\t\tvar kind = groups[m];\n\t\t\t\tvar kind_sorted = Object.keys(track[ip][kind]).sort(function (a, b) {\n\t\t\t\t\treturn b - a;\n\t\t\t\t});\n\n\t\t\t\tfor (var n = 0, len5 = kind_sorted.length; n < len5; n++) {\n\t\t\t\t\tvar wordcnt = kind_sorted[n];\n\n\t\t\t\t\t// Triggers with equal word lengths should be sorted by overall\n\t\t\t\t\t// trigger length.\n\t\t\t\t\tvar sorted_by_length = track[ip][kind][wordcnt].sort(function (a, b) {\n\t\t\t\t\t\treturn b.length - a.length;\n\t\t\t\t\t});\n\t\t\t\t\trunning.push.apply(running, sorted_by_length);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Add the single wildcard triggers.\n\t\t\tvar under_sorted = track[ip].under.sort(function (a, b) {\n\t\t\t\treturn b.length - a.length;\n\t\t\t});\n\t\t\tvar pound_sorted = track[ip].pound.sort(function (a, b) {\n\t\t\t\treturn b.length - a.length;\n\t\t\t});\n\t\t\tvar star_sorted = track[ip].star.sort(function (a, b) {\n\t\t\t\treturn b.length - a.length;\n\t\t\t});\n\t\t\trunning.push.apply(running, under_sorted);\n\t\t\trunning.push.apply(running, pound_sorted);\n\t\t\trunning.push.apply(running, star_sorted);\n\t\t}\n\t}\n\n\treturn running;\n};\n\n/**\nstring[] sortList (string[] items)\n\nSort a list of strings by their word counts and lengths.\n*/\nexports.sortList = function (items) {\n\tvar self = this;\n\n\t// Track by number of words.\n\tvar track = {};\n\n\t// Loop through each item.\n\tfor (var i = 0, len = items.length; i < len; i++) {\n\t\tvar item = items[i];\n\t\tvar cnt = utils.word_count(item, true);\n\t\tif (track[cnt] == null) {\n\t\t\ttrack[cnt] = [];\n\t\t}\n\t\ttrack[cnt].push(item);\n\t}\n\n\t// Sort them.\n\tvar output = [];\n\tvar sorted = Object.keys(track).sort(function (a, b) {\n\t\treturn b - a;\n\t});\n\tfor (var j = 0, len1 = sorted.length; j < len1; j++) {\n\t\tvar count = sorted[j];\n\t\tvar bylen = track[count].sort(function (a, b) {\n\t\t\treturn b.length - a.length;\n\t\t});\n\t\toutput.push.apply(output, bylen);\n\t}\n\n\treturn output;\n};\n\n/**\nprivate object initSortTrack ()\n\nReturns a new object for keeping track of triggers for sorting.\n*/\nvar initSortTrack = function initSortTrack() {\n\treturn {\n\t\tatomic: {},\n\t\toption: {},\n\t\talpha: {},\n\t\tnumber: {},\n\t\twild: {},\n\t\tpound: [],\n\t\tunder: [],\n\t\tstar: []\n\t};\n};\n\n//# sourceURL=webpack://RiveScript/./src/sorting.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// RiveScript.js\n// https://www.rivescript.com/\n\n// This code is released under the MIT License.\n// See the \"LICENSE\" file for more information.\n\n\n\n/**\nMiscellaneous utility functions.\n*/\n\n/**\nstring strip (string)\n\nStrip extra whitespace from both ends of the string, and remove\nline breaks anywhere in the string.\n*/\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.strip = function (text) {\n\ttext = text.replace(/^[\\s\\t]+/, \"\").replace(/[\\s\\t]+$/, \"\").replace(/[\\x0D\\x0A]+/, \"\");\n\treturn text;\n};\n\n/**\nstring trim (string)\n\nCompatible implementation of `String.prototype.trim()`. Strips whitespace\nfrom the beginning and end of the string, but doesn't remove any\nwhitespace inside the string like `strip()` does.\n*/\nexports.trim = function (text) {\n\ttext = text.replace(/^[\\x0D\\x0A\\s\\t]+/, \"\").replace(/[\\x0D\\x0A\\s\\t]+$/, \"\");\n\treturn text;\n};\n\n/**\nvoid extend (object a, object b)\n\nCombine the properties of both objects into one. The properties from\nobject 'b' are inserted into 'a'.\n*/\nexports.extend = function (a, b) {\n\tvar attr, results, value;\n\tresults = [];\n\tfor (attr in b) {\n\t\tvalue = b[attr];\n\t\tif (!b.hasOwnProperty(attr)) {\n\t\t\tcontinue;\n\t\t}\n\t\tresults.push(a[attr] = value);\n\t}\n\treturn results;\n};\n\n/**\nint word_count (string)\n\nCount the number of real words in a string.\n*/\nexports.word_count = function (trigger, all) {\n\tvar i, len, wc, word, words;\n\twords = [];\n\tif (all) {\n\t\twords = trigger.split(/\\s+/);\n\t} else {\n\t\twords = trigger.split(/[\\s\\*\\#_\\|]+/);\n\t}\n\twc = 0;\n\tfor (i = 0, len = words.length; i < len; i++) {\n\t\tword = words[i];\n\t\tif (word.length > 0) {\n\t\t\twc++;\n\t\t}\n\t}\n\treturn wc;\n};\n\n/**\nstring stripNasties (string, bool utf8)\n\nStip special characters out of a string.\n*/\nexports.stripNasties = function (string, utf8) {\n\tif (utf8) {\n\t\t// Allow most things in UTF8 mode.\n\t\tstring = string.replace(/[\\\\<>]+/g, \"\");\n\t\treturn string;\n\t}\n\tstring = string.replace(/[^A-Za-z0-9 ]/g, \"\");\n\treturn string;\n};\n\n/**\nstring quotemeta (string)\n\nEscape a string for a regexp.\n*/\nexports.quotemeta = function (string) {\n\tvar char, i, len, unsafe;\n\tunsafe = \"\\\\.+*?[^]$(){}=!<>|:\".split(\"\");\n\tfor (i = 0, len = unsafe.length; i < len; i++) {\n\t\tchar = unsafe[i];\n\t\tstring = string.replace(new RegExp(\"\\\\\" + char, \"g\"), \"\\\\\" + char);\n\t}\n\treturn string;\n};\n\n/**\nbool isAtomic (string trigger)\n\nDetermine whether a trigger is atomic.\n*/\nexports.isAtomic = function (trigger) {\n\tvar i, len, ref, special;\n\tref = [\"*\", \"#\", \"_\", \"(\", \"[\", \"<\", \"@\"];\n\t// Atomic triggers don't contain any wildcards or parenthesis or anything of\n\t// the sort. We don't need to test the full character set, just left brackets\n\t// will do.\n\tfor (i = 0, len = ref.length; i < len; i++) {\n\t\tspecial = ref[i];\n\t\tif (trigger.indexOf(special) > -1) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n};\n\n/**\nstring stringFormat (string type, string)\n\nFormats a string according to one of the following types:\n- formal\n- sentence\n- uppercase\n- lowercase\n*/\nexports.stringFormat = function (type, string) {\n\tvar first, i, len, result, word, words;\n\tif (type === \"uppercase\") {\n\t\treturn string.toUpperCase();\n\t} else if (type === \"lowercase\") {\n\t\treturn string.toLowerCase();\n\t} else if (type === \"sentence\") {\n\t\tstring += \"\";\n\t\tfirst = string.charAt(0).toUpperCase();\n\t\treturn first + string.substring(1);\n\t} else if (type === \"formal\") {\n\t\twords = string.split(/\\s+/);\n\t\tresult = [];\n\t\tfor (i = 0, len = words.length; i < len; i++) {\n\t\t\tword = words[i];\n\t\t\tfirst = word.charAt(0).toUpperCase();\n\t\t\tresult.push(first + word.substring(1));\n\t\t}\n\t\treturn result.join(\" \");\n\t}\n\treturn content;\n};\n\n/**\n[]string parseCallArgs\n\nParse a string and return shell-like arguments as an array. Normally this\nmeans each word in the string becomes an item in the result, but quoted\nsections of the input will come back as a single item.\n\nExample:\n\n```javascript\nconsole.log( parseCallArgs('please google \"writing chat bot\"'));\n// [\"please\", \"google\", \"writing chat bot\"]\n```\n*/\nexports.parseCallArgs = function (str) {\n\tvar buff, c, doubleQuoteRe, flushBuffer, i, insideAString, len, result, spaceRe;\n\tresult = [];\n\tbuff = \"\";\n\tinsideAString = false;\n\tspaceRe = /\\s/ig;\n\tdoubleQuoteRe = /\"/ig;\n\tflushBuffer = function flushBuffer() {\n\t\tif (buff.length !== 0) {\n\t\t\tresult.push(buff);\n\t\t}\n\t\treturn buff = \"\";\n\t};\n\tfor (i = 0, len = str.length; i < len; i++) {\n\t\tc = str[i];\n\t\tif (c.match(spaceRe) && !insideAString) {\n\t\t\tflushBuffer();\n\t\t\tcontinue;\n\t\t}\n\t\tif (c.match(doubleQuoteRe)) {\n\t\t\tif (insideAString) {\n\t\t\t\tflushBuffer();\n\t\t\t}\n\t\t\tinsideAString = !insideAString;\n\t\t\tcontinue;\n\t\t}\n\t\tbuff += c;\n\t}\n\tflushBuffer();\n\treturn result;\n};\n\n/**\nobject clone (object)\n\nClone an object.\n*/\nexports.clone = function (obj) {\n\tvar copy, key;\n\tif (obj === null || (typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj)) !== \"object\") {\n\t\treturn obj;\n\t}\n\tcopy = obj.constructor();\n\tfor (key in obj) {\n\t\tif (!obj.hasOwnProperty(key)) {\n\t\t\tcontinue;\n\t\t}\n\t\tcopy[key] = exports.clone(obj[key]);\n\t}\n\treturn copy;\n};\n\n/**\nint nIndexOf (string, string match, int index)\n\nFinds a match in a string at a given index\n\nUsage:\nstring = \"My name is Rive\"\nmatch = \" \"\nindex = 2\nreturn = 7\n\nSummary: It will look for a second space in the string\n*/\nexports.nIndexOf = function (string, match, index) {\n\treturn string.split(match, index).join(match).length;\n};\n\n//# sourceURL=webpack://RiveScript/./src/utils.js?");

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi babel-polyfill ./src/rivescript.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"./node_modules/babel-polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/rivescript.js */\"./src/rivescript.js\");\n\n\n//# sourceURL=webpack://RiveScript/multi_babel-polyfill_./src/rivescript.js?");

/***/ })

/******/ });