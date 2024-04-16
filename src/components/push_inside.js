import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import React__default, { useRef, useEffect, createContext, useState, useContext, useCallback, useMemo, Fragment as Fragment$1 } from 'react';
import styled, { css, ThemeProvider, keyframes } from 'styled-components';
import { format } from 'date-fns';
import HTMLReactParser from 'html-react-parser';
import * as PushAPI from '@pushprotocol/restapi';
import { CONSTANTS, PushAPI as PushAPI$1 } from '@pushprotocol/restapi';
import { EVENTS, createSocketConnection } from '@pushprotocol/socket';
import { ethers } from 'ethers';
import Resolution from '@unstoppabledomains/resolution';
import moment from 'moment';
import { useConnectWallet, useSetChain, Web3OnboardProvider } from '@web3-onboard/react';
import { useTrackToggle, LiveKitRoom, RoomAudioRenderer, TrackToggle } from '@livekit/components-react';
import { Room, Track } from 'livekit-client';
import axios from 'axios';
import { v4 } from 'uuid';
import EmojiPicker from 'emoji-picker-react';
import GifPicker from 'gif-picker-react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { toast, ToastContainer } from 'react-toastify';
import { MdOutlineClose, MdError, MdCheckCircle } from 'react-icons/md';
import 'react-toastify/dist/ReactToastify.min.css';
import coinbaseWalletModule from '@web3-onboard/coinbase';
import injectedModule from '@web3-onboard/injected-wallets';
import walletConnectModule from '@web3-onboard/walletconnect';
import init from '@web3-onboard/core';
import { AiTwotoneCamera } from 'react-icons/ai';
import Cropper from 'react-easy-crop';
import Resizer from 'react-image-file-resizer';
import { createReactClient, studioProvider, LivepeerConfig } from '@livepeer/react';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var fails$q = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$p = fails$q;

var functionBindNative = !fails$p(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var call$j = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$2.bind.bind(call$j, call$j);

var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$j.apply(fn, arguments);
  };
};

var uncurryThis$s = functionUncurryThis;

var toString$d = uncurryThis$s({}.toString);
var stringSlice$8 = uncurryThis$s(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$8(toString$d(it), 8, -1);
};

var uncurryThis$r = functionUncurryThis;
var fails$o = fails$q;
var classof$8 = classofRaw$2;

var $Object$4 = Object;
var split = uncurryThis$r(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$o(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$8(it) == 'String' ? split(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$6 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$5 = isNullOrUndefined$6;

var $TypeError$g = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$9 = function (it) {
  if (isNullOrUndefined$5(it)) throw $TypeError$g("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$2 = indexedObject;
var requireObjectCoercible$8 = requireObjectCoercible$9;

var toIndexedObject$5 = function (it) {
  return IndexedObject$2(requireObjectCoercible$8(it));
};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$m =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || commonjsGlobal || Function('return this')();

var shared$4 = {exports: {}};

var global$l = global$m;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$7 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$7(global$l, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$l[key] = value;
  } return value;
};

var global$k = global$m;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$k[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.32.0',
  mode: 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible$7 = requireObjectCoercible$9;

var $Object$3 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$7 = function (argument) {
  return $Object$3(requireObjectCoercible$7(argument));
};

var uncurryThis$q = functionUncurryThis;
var toObject$6 = toObject$7;

var hasOwnProperty$1 = uncurryThis$q({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty$1(toObject$6(it), key);
};

var uncurryThis$p = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$c = uncurryThis$p(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$c(++id + postfix, 36);
};

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$j = global$m;
var userAgent$5 = engineUserAgent;

var process$4 = global$j.process;
var Deno$1 = global$j.Deno;
var versions = process$4 && process$4.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent$5) {
  match = userAgent$5.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$5.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION$1 = engineV8Version;
var fails$n = fails$q;
var global$i = global$m;

var $String$6 = global$i.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$n(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String$6(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$1 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$h = global$m;
var shared$3 = shared$4.exports;
var hasOwn$b = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var Symbol$2 = global$h.Symbol;
var WellKnownSymbolsStore = shared$3('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$2['for'] || Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$1;

var wellKnownSymbol$j = function (name) {
  if (!hasOwn$b(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$b(Symbol$2, name)
      ? Symbol$2[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

var documentAll$2 = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

var documentAll_1 = {
  all: documentAll$2,
  IS_HTMLDDA: IS_HTMLDDA
};

var $documentAll$1 = documentAll_1;

var documentAll$1 = $documentAll$1.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$n = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$m = isCallable$n;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$a = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$m(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$m(it);
};

var isObject$9 = isObject$a;

var $String$5 = String;
var $TypeError$f = TypeError;

// `Assert: Type(argument) is Object`
var anObject$f = function (argument) {
  if (isObject$9(argument)) return argument;
  throw $TypeError$f($String$5(argument) + ' is not an object');
};

var objectDefineProperties = {};

var fails$m = fails$q;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$m(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var DESCRIPTORS$b = descriptors;
var fails$l = fails$q;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$b && fails$l(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var objectDefineProperty = {};

var global$g = global$m;
var isObject$8 = isObject$a;

var document$3 = global$g.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$8(document$3) && isObject$8(document$3.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

var DESCRIPTORS$a = descriptors;
var fails$k = fails$q;
var createElement$1 = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$a && !fails$k(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var NATIVE_BIND$2 = functionBindNative;

var call$i = Function.prototype.call;

var functionCall = NATIVE_BIND$2 ? call$i.bind(call$i) : function () {
  return call$i.apply(call$i, arguments);
};

var global$f = global$m;
var isCallable$l = isCallable$n;

var aFunction = function (argument) {
  return isCallable$l(argument) ? argument : undefined;
};

var getBuiltIn$7 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$f[namespace]) : global$f[namespace] && global$f[namespace][method];
};

var uncurryThis$o = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$o({}.isPrototypeOf);

var getBuiltIn$6 = getBuiltIn$7;
var isCallable$k = isCallable$n;
var isPrototypeOf$4 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var $Object$2 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$6('Symbol');
  return isCallable$k($Symbol) && isPrototypeOf$4($Symbol.prototype, $Object$2(it));
};

var $String$4 = String;

var tryToString$5 = function (argument) {
  try {
    return $String$4(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$j = isCallable$n;
var tryToString$4 = tryToString$5;

var $TypeError$e = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$a = function (argument) {
  if (isCallable$j(argument)) return argument;
  throw $TypeError$e(tryToString$4(argument) + ' is not a function');
};

var aCallable$9 = aCallable$a;
var isNullOrUndefined$4 = isNullOrUndefined$6;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$5 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$4(func) ? undefined : aCallable$9(func);
};

var call$h = functionCall;
var isCallable$i = isCallable$n;
var isObject$7 = isObject$a;

var $TypeError$d = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$i(fn = input.toString) && !isObject$7(val = call$h(fn, input))) return val;
  if (isCallable$i(fn = input.valueOf) && !isObject$7(val = call$h(fn, input))) return val;
  if (pref !== 'string' && isCallable$i(fn = input.toString) && !isObject$7(val = call$h(fn, input))) return val;
  throw $TypeError$d("Can't convert object to primitive value");
};

var call$g = functionCall;
var isObject$6 = isObject$a;
var isSymbol$1 = isSymbol$2;
var getMethod$4 = getMethod$5;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$i = wellKnownSymbol$j;

var $TypeError$c = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$i('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$6(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$4(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$g(exoticToPrim, input, pref);
    if (!isObject$6(result) || isSymbol$1(result)) return result;
    throw $TypeError$c("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var DESCRIPTORS$9 = descriptors;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$e = anObject$f;
var toPropertyKey$2 = toPropertyKey$3;

var $TypeError$b = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$9 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$e(O);
  P = toPropertyKey$2(P);
  anObject$e(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$e(O);
  P = toPropertyKey$2(P);
  anObject$e(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$b('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var ceil = Math.ceil;
var floor$3 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$3 : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$6 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$5 = toIntegerOrInfinity$6;

var max$2 = Math.max;
var min$3 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$5(index);
  return integer < 0 ? max$2(integer + length, 0) : min$3(integer, length);
};

var toIntegerOrInfinity$4 = toIntegerOrInfinity$6;

var min$2 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$4 = function (argument) {
  return argument > 0 ? min$2(toIntegerOrInfinity$4(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$3 = toLength$4;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$5 = function (obj) {
  return toLength$3(obj.length);
};

var toIndexedObject$4 = toIndexedObject$5;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$4 = lengthOfArrayLike$5;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$3 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$4($this);
    var length = lengthOfArrayLike$4(O);
    var index = toAbsoluteIndex$1(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$3(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$3(false)
};

var hiddenKeys$4 = {};

var uncurryThis$n = functionUncurryThis;
var hasOwn$a = hasOwnProperty_1;
var toIndexedObject$3 = toIndexedObject$5;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$3 = hiddenKeys$4;

var push$2 = uncurryThis$n([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$3(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$a(hiddenKeys$3, key) && hasOwn$a(O, key) && push$2(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$a(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$2(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys$1(O, enumBugKeys$2);
};

var DESCRIPTORS$8 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$4 = objectDefineProperty;
var anObject$d = anObject$f;
var toIndexedObject$2 = toIndexedObject$5;
var objectKeys$1 = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$8 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$d(O);
  var props = toIndexedObject$2(Properties);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$4.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$5 = getBuiltIn$7;

var html$2 = getBuiltIn$5('document', 'documentElement');

var shared$2 = shared$4.exports;
var uid = uid$2;

var keys$1 = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys$1[key] || (keys$1[key] = uid(key));
};

/* global ActiveXObject -- old IE, WSH */
var anObject$c = anObject$f;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys$1 = enumBugKeys$3;
var hiddenKeys$2 = hiddenKeys$4;
var html$1 = html$2;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$2 = sharedKey$3;

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$2('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement$1('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html$1.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys$1.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys$1[length]];
  return NullProtoObject();
};

hiddenKeys$2[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$c(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$h = wellKnownSymbol$j;
var create$2 = objectCreate;
var defineProperty$6 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$h('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
  defineProperty$6(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$2(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$2 = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var iterators = {};

var global$e = global$m;
var isCallable$h = isCallable$n;

var WeakMap$1 = global$e.WeakMap;

var weakMapBasicDetection = isCallable$h(WeakMap$1) && /native code/.test(String(WeakMap$1));

var createPropertyDescriptor$4 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var DESCRIPTORS$7 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$3 = createPropertyDescriptor$4;

var createNonEnumerableProperty$6 = DESCRIPTORS$7 ? function (object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor$3(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$d = global$m;
var isObject$5 = isObject$a;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$6;
var hasOwn$9 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$1 = sharedKey$3;
var hiddenKeys$1 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$2 = global$d.TypeError;
var WeakMap = global$d.WeakMap;
var set$1, get, has$3;

var enforce = function (it) {
  return has$3(it) ? get(it) : set$1(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$5(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$2('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store$1 = shared$1.state || (shared$1.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store$1.get = store$1.get;
  store$1.has = store$1.has;
  store$1.set = store$1.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set$1 = function (it, metadata) {
    if (store$1.has(it)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store$1.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store$1.get(it) || {};
  };
  has$3 = function (it) {
    return store$1.has(it);
  };
} else {
  var STATE = sharedKey$1('state');
  hiddenKeys$1[STATE] = true;
  set$1 = function (it, metadata) {
    if (hasOwn$9(it, STATE)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$5(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$9(it, STATE) ? it[STATE] : {};
  };
  has$3 = function (it) {
    return hasOwn$9(it, STATE);
  };
}

var internalState = {
  set: set$1,
  get: get,
  has: has$3,
  enforce: enforce,
  getterFor: getterFor
};

var objectGetOwnPropertyDescriptor = {};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$3 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$3(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var DESCRIPTORS$6 = descriptors;
var call$f = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$4;
var toIndexedObject$1 = toIndexedObject$5;
var toPropertyKey$1 = toPropertyKey$3;
var hasOwn$8 = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$6 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$1(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$8(O, P)) return createPropertyDescriptor$2(!call$f(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var makeBuiltIn$3 = {exports: {}};

var DESCRIPTORS$5 = descriptors;
var hasOwn$7 = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$5 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$7(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$5 || (DESCRIPTORS$5 && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$m = functionUncurryThis;
var isCallable$g = isCallable$n;
var store = sharedStore;

var functionToString = uncurryThis$m(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$g(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store.inspectSource;

var uncurryThis$l = functionUncurryThis;
var fails$j = fails$q;
var isCallable$f = isCallable$n;
var hasOwn$6 = hasOwnProperty_1;
var DESCRIPTORS$4 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource$2 = inspectSource$3;
var InternalStateModule$2 = internalState;

var enforceInternalState$1 = InternalStateModule$2.enforce;
var getInternalState$2 = InternalStateModule$2.get;
var $String$3 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$5 = Object.defineProperty;
var stringSlice$7 = uncurryThis$l(''.slice);
var replace$4 = uncurryThis$l(''.replace);
var join = uncurryThis$l([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$4 && !fails$j(function () {
  return defineProperty$5(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice$7($String$3(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$4($String$3(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$6(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$4) defineProperty$5(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$6(options, 'arity') && value.length !== options.arity) {
    defineProperty$5(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$6(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$4) defineProperty$5(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState$1(value);
  if (!hasOwn$6(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$f(this) && getInternalState$2(this).source || inspectSource$2(this);
}, 'toString');

var isCallable$e = isCallable$n;
var definePropertyModule$2 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltIn$3.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$8 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$e(value)) makeBuiltIn$1(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$2.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var objectGetOwnPropertyNames = {};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$3;

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$4 = getBuiltIn$7;
var uncurryThis$k = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$b = anObject$f;

var concat$2 = uncurryThis$k([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$4('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$b(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$5 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$5(target, key) && !(exceptions && hasOwn$5(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$i = fails$q;
var isCallable$d = isCallable$n;

var replacement = /#|\.prototype\./;

var isForced$3 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$d(detection) ? fails$i(detection)
    : !!detection;
};

var normalize = isForced$3.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$3.data = {};
var NATIVE = isForced$3.NATIVE = 'N';
var POLYFILL = isForced$3.POLYFILL = 'P';

var isForced_1 = isForced$3;

var global$c = global$m;
var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$6;
var defineBuiltIn$7 = defineBuiltIn$8;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced$2 = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$c;
  } else if (STATIC) {
    target = global$c[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$c[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$2(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$2(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$4(sourceProperty, 'sham', true);
    }
    defineBuiltIn$7(target, key, sourceProperty, options);
  }
};

var fails$h = fails$q;

var correctPrototypeGetter = !fails$h(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$4 = hasOwnProperty_1;
var isCallable$c = isCallable$n;
var toObject$5 = toObject$7;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object$1 = Object;
var ObjectPrototype = $Object$1.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
  var object = toObject$5(O);
  if (hasOwn$4(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$c(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object$1 ? ObjectPrototype : null;
};

var fails$g = fails$q;
var isCallable$b = isCallable$n;
var isObject$4 = isObject$a;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$6 = defineBuiltIn$8;
var wellKnownSymbol$g = wellKnownSymbol$j;

var ITERATOR$6 = wellKnownSymbol$g('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject$4(IteratorPrototype$2) || fails$g(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$6].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$b(IteratorPrototype$2[ITERATOR$6])) {
  defineBuiltIn$6(IteratorPrototype$2, ITERATOR$6, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$4 = objectDefineProperty.f;
var hasOwn$3 = hasOwnProperty_1;
var wellKnownSymbol$f = wellKnownSymbol$j;

var TO_STRING_TAG$3 = wellKnownSymbol$f('toStringTag');

var setToStringTag$3 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$3(target, TO_STRING_TAG$3)) {
    defineProperty$4(target, TO_STRING_TAG$3, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$1 = objectCreate;
var createPropertyDescriptor$1 = createPropertyDescriptor$4;
var setToStringTag$2 = setToStringTag$3;
var Iterators$4 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$1(IteratorPrototype$1, { next: createPropertyDescriptor$1(+!ENUMERABLE_NEXT, next) });
  setToStringTag$2(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$4[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var uncurryThis$j = functionUncurryThis;
var aCallable$8 = aCallable$a;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$j(aCallable$8(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isCallable$a = isCallable$n;

var $String$2 = String;
var $TypeError$a = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$a(argument)) return argument;
  throw $TypeError$a("Can't set " + $String$2(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = functionUncurryThisAccessor;
var anObject$a = anObject$f;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject$a(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$i = _export;
var call$e = functionCall;
var FunctionName = functionName;
var isCallable$9 = isCallable$n;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$2 = objectSetPrototypeOf;
var setToStringTag$1 = setToStringTag$3;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$6;
var defineBuiltIn$5 = defineBuiltIn$8;
var wellKnownSymbol$e = wellKnownSymbol$j;
var Iterators$3 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME$2 = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$5 = wellKnownSymbol$e('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$5]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf$2) {
          setPrototypeOf$2(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$9(CurrentIteratorPrototype[ITERATOR$5])) {
          defineBuiltIn$5(CurrentIteratorPrototype, ITERATOR$5, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME$2 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$3(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$e(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn$5(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$i({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$5] !== defaultIterator) {
    defineBuiltIn$5(IterablePrototype, ITERATOR$5, defaultIterator, { name: DEFAULT });
  }
  Iterators$3[NAME] = defaultIterator;

  return methods;
};

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$1 = function (value, done) {
  return { value: value, done: done };
};

var toIndexedObject = toIndexedObject$5;
var addToUnscopables$1 = addToUnscopables$2;
var Iterators$2 = iterators;
var InternalStateModule$1 = internalState;
var defineProperty$3 = objectDefineProperty.f;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$1;
var DESCRIPTORS$3 = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$1 = InternalStateModule$1.set;
var getInternalState$1 = InternalStateModule$1.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState$1(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$1(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  if (kind == 'keys') return createIterResultObject(index, false);
  if (kind == 'values') return createIterResultObject(target[index], false);
  return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators$2.Arguments = Iterators$2.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$1('keys');
addToUnscopables$1('values');
addToUnscopables$1('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS$3 && values.name !== 'values') try {
  defineProperty$3(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = documentCreateElement$2;

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

var global$b = global$m;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$6;
var wellKnownSymbol$d = wellKnownSymbol$j;

var ITERATOR$4 = wellKnownSymbol$d('iterator');
var TO_STRING_TAG$2 = wellKnownSymbol$d('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$4] !== ArrayValues) try {
      createNonEnumerableProperty$2(CollectionPrototype, ITERATOR$4, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$4] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG$2]) {
      createNonEnumerableProperty$2(CollectionPrototype, TO_STRING_TAG$2, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty$2(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global$b[COLLECTION_NAME] && global$b[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

var DESCRIPTORS$2 = descriptors;
var uncurryThis$i = functionUncurryThis;
var call$d = functionCall;
var fails$f = fails$q;
var objectKeys = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$4 = toObject$7;
var IndexedObject$1 = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$2 = Object.defineProperty;
var concat$1 = uncurryThis$i([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign$1 = !$assign || fails$f(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$2 && $assign({ b: 1 }, $assign(defineProperty$2({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$2(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$4(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject$1(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat$1(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$2 || call$d(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $$h = _export;
var assign$1 = objectAssign$1;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$h({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign$1 }, {
  assign: assign$1
});

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A$1(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A$1(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A$1;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.AsyncMode = AsyncMode;
reactIs_development.ConcurrentMode = ConcurrentMode;
reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs.exports = reactIs_production_min;
} else {
  reactIs.exports = reactIs_development;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject$3(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject$3(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

var has$2 = Function.call.bind(Object.prototype.hasOwnProperty);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = has$2;

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$1 = reactIs.exports;
var assign = objectAssign;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var has = has$2;
var checkPropTypes = checkPropTypes_1;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

var classof$7 = classofRaw$2;

var engineIsNode = typeof process != 'undefined' && classof$7(process) == 'process';

var makeBuiltIn = makeBuiltIn$3.exports;
var defineProperty$1 = objectDefineProperty;

var defineBuiltInAccessor$1 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty$1.f(target, name, descriptor);
};

var getBuiltIn$3 = getBuiltIn$7;
var defineBuiltInAccessor = defineBuiltInAccessor$1;
var wellKnownSymbol$c = wellKnownSymbol$j;
var DESCRIPTORS$1 = descriptors;

var SPECIES$3 = wellKnownSymbol$c('species');

var setSpecies$2 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$3(CONSTRUCTOR_NAME);

  if (DESCRIPTORS$1 && Constructor && !Constructor[SPECIES$3]) {
    defineBuiltInAccessor(Constructor, SPECIES$3, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var isPrototypeOf$3 = objectIsPrototypeOf;

var $TypeError$9 = TypeError;

var anInstance$1 = function (it, Prototype) {
  if (isPrototypeOf$3(Prototype, it)) return it;
  throw $TypeError$9('Incorrect invocation');
};

var wellKnownSymbol$b = wellKnownSymbol$j;

var TO_STRING_TAG$1 = wellKnownSymbol$b('toStringTag');
var test$2 = {};

test$2[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test$2) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$8 = isCallable$n;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$a = wellKnownSymbol$j;

var TO_STRING_TAG = wellKnownSymbol$a('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$6 = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw$1(O)
    // ES3 arguments fallback
    : (result = classofRaw$1(O)) == 'Object' && isCallable$8(O.callee) ? 'Arguments' : result;
};

var uncurryThis$h = functionUncurryThis;
var fails$e = fails$q;
var isCallable$7 = isCallable$n;
var classof$5 = classof$6;
var getBuiltIn$2 = getBuiltIn$7;
var inspectSource$1 = inspectSource$3;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn$2('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$3 = uncurryThis$h(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$7(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$7(argument)) return false;
  switch (classof$5(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$3(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$1 = !construct || fails$e(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isConstructor = isConstructor$1;
var tryToString$3 = tryToString$5;

var $TypeError$8 = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$1 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError$8(tryToString$3(argument) + ' is not a constructor');
};

var anObject$9 = anObject$f;
var aConstructor = aConstructor$1;
var isNullOrUndefined$3 = isNullOrUndefined$6;
var wellKnownSymbol$9 = wellKnownSymbol$j;

var SPECIES$2 = wellKnownSymbol$9('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$9(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined$3(S = anObject$9(C)[SPECIES$2]) ? defaultConstructor : aConstructor(S);
};

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$2 = FunctionPrototype.apply;
var call$c = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$c.bind(apply$2) : function () {
  return call$c.apply(apply$2, arguments);
});

var classofRaw = classofRaw$2;
var uncurryThis$g = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis$g(fn);
};

var uncurryThis$f = functionUncurryThisClause;
var aCallable$7 = aCallable$a;
var NATIVE_BIND = functionBindNative;

var bind$4 = uncurryThis$f(uncurryThis$f.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$7(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$4(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var uncurryThis$e = functionUncurryThis;

var arraySlice$2 = uncurryThis$e([].slice);

var $TypeError$7 = TypeError;

var validateArgumentsLength$1 = function (passed, required) {
  if (passed < required) throw $TypeError$7('Not enough arguments');
  return passed;
};

var userAgent$4 = engineUserAgent;

// eslint-disable-next-line redos/no-vulnerable -- safe
var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$4);

var global$a = global$m;
var apply$1 = functionApply;
var bind$3 = functionBindContext;
var isCallable$6 = isCallable$n;
var hasOwn$2 = hasOwnProperty_1;
var fails$d = fails$q;
var html = html$2;
var arraySlice$1 = arraySlice$2;
var createElement = documentCreateElement$2;
var validateArgumentsLength = validateArgumentsLength$1;
var IS_IOS$1 = engineIsIos;
var IS_NODE$4 = engineIsNode;

var set = global$a.setImmediate;
var clear = global$a.clearImmediate;
var process$3 = global$a.process;
var Dispatch = global$a.Dispatch;
var Function$1 = global$a.Function;
var MessageChannel = global$a.MessageChannel;
var String$1 = global$a.String;
var counter = 0;
var queue$2 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

fails$d(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global$a.location;
});

var run = function (id) {
  if (hasOwn$2(queue$2, id)) {
    var fn = queue$2[id];
    delete queue$2[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var eventListener = function (event) {
  run(event.data);
};

var globalPostMessageDefer = function (id) {
  // old engines have not location.origin
  global$a.postMessage(String$1(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable$6(handler) ? handler : Function$1(handler);
    var args = arraySlice$1(arguments, 1);
    queue$2[++counter] = function () {
      apply$1(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue$2[id];
  };
  // Node.js 0.8-
  if (IS_NODE$4) {
    defer = function (id) {
      process$3.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS$1) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind$3(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global$a.addEventListener &&
    isCallable$6(global$a.postMessage) &&
    !global$a.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails$d(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    global$a.addEventListener('message', eventListener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

var task$1 = {
  set: set,
  clear: clear
};

var Queue$2 = function () {
  this.head = null;
  this.tail = null;
};

Queue$2.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    var tail = this.tail;
    if (tail) tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      var next = this.head = entry.next;
      if (next === null) this.tail = null;
      return entry.item;
    }
  }
};

var queue$1 = Queue$2;

var userAgent$3 = engineUserAgent;

var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$3) && typeof Pebble != 'undefined';

var userAgent$2 = engineUserAgent;

var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$2);

var global$9 = global$m;
var bind$2 = functionBindContext;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;
var Queue$1 = queue$1;
var IS_IOS = engineIsIos;
var IS_IOS_PEBBLE = engineIsIosPebble;
var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
var IS_NODE$3 = engineIsNode;

var MutationObserver = global$9.MutationObserver || global$9.WebKitMutationObserver;
var document$2 = global$9.document;
var process$2 = global$9.process;
var Promise$1 = global$9.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor$1(global$9, 'queueMicrotask');
var microtask$1 = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var notify$1, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!microtask$1) {
  var queue = new Queue$1();

  var flush = function () {
    var parent, fn;
    if (IS_NODE$3 && (parent = process$2.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify$1();
      throw error;
    }
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE$3 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify$1 = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise$1.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise$1;
    then = bind$2(promise.then, promise);
    notify$1 = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE$3) {
    notify$1 = function () {
      process$2.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // `webpack` dev server bug on IE global methods - use bind(fn, global)
    macrotask = bind$2(macrotask, global$9);
    notify$1 = function () {
      macrotask(flush);
    };
  }

  microtask$1 = function (fn) {
    if (!queue.head) notify$1();
    queue.add(fn);
  };
}

var microtask_1 = microtask$1;

var hostReportErrors$1 = function (a, b) {
  try {
    // eslint-disable-next-line no-console -- safe
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  } catch (error) { /* empty */ }
};

var perform$3 = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var global$8 = global$m;

var promiseNativeConstructor = global$8.Promise;

/* global Deno -- Deno case */
var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

var IS_DENO$1 = engineIsDeno;
var IS_NODE$2 = engineIsNode;

var engineIsBrowser = !IS_DENO$1 && !IS_NODE$2
  && typeof window == 'object'
  && typeof document == 'object';

var global$7 = global$m;
var NativePromiseConstructor$3 = promiseNativeConstructor;
var isCallable$5 = isCallable$n;
var isForced$1 = isForced_1;
var inspectSource = inspectSource$3;
var wellKnownSymbol$8 = wellKnownSymbol$j;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var V8_VERSION = engineV8Version;

NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var SPECIES$1 = wellKnownSymbol$8('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$5(global$7.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR$5 = isForced$1('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$3);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$3);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor$3(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES$1] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
});

var promiseConstructorDetection = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
  SUBCLASSING: SUBCLASSING
};

var newPromiseCapability$2 = {};

var aCallable$6 = aCallable$a;

var $TypeError$6 = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw $TypeError$6('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$6(resolve);
  this.reject = aCallable$6(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
newPromiseCapability$2.f = function (C) {
  return new PromiseCapability(C);
};

var $$g = _export;
var IS_NODE$1 = engineIsNode;
var global$6 = global$m;
var call$b = functionCall;
var defineBuiltIn$4 = defineBuiltIn$8;
var setPrototypeOf$1 = objectSetPrototypeOf;
var setToStringTag = setToStringTag$3;
var setSpecies$1 = setSpecies$2;
var aCallable$5 = aCallable$a;
var isCallable$4 = isCallable$n;
var isObject$3 = isObject$a;
var anInstance = anInstance$1;
var speciesConstructor = speciesConstructor$1;
var task = task$1.set;
var microtask = microtask_1;
var hostReportErrors = hostReportErrors$1;
var perform$2 = perform$3;
var Queue = queue$1;
var InternalStateModule = internalState;
var NativePromiseConstructor$2 = promiseNativeConstructor;
var PromiseConstructorDetection = promiseConstructorDetection;
var newPromiseCapabilityModule$3 = newPromiseCapability$2;

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype$1 = NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
var PromiseConstructor = NativePromiseConstructor$2;
var PromisePrototype = NativePromisePrototype$1;
var TypeError$1 = global$6.TypeError;
var document$1 = global$6.document;
var process$1 = global$6.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
var newGenericPromiseCapability = newPromiseCapability$1;

var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$6.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject$3(it) && isCallable$4(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError$1('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call$b(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$1.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global$6.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$6['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call$b(task, global$6, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$2(function () {
        if (IS_NODE$1) {
          process$1.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE$1 || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call$b(task, global$6, function () {
    var promise = state.facade;
    if (IS_NODE$1) {
      process$1.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind$1 = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call$b(then, value,
            bind$1(internalResolve, wrapper, state),
            bind$1(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR$4) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable$5(executor);
    call$b(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind$1(internalResolve, state), bind$1(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn$4(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$4(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$4(onRejected) && onRejected;
    reaction.domain = IS_NODE$1 ? process$1.domain : undefined;
    if (state.state == PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind$1(internalResolve, state);
    this.reject = bind$1(internalReject, state);
  };

  newPromiseCapabilityModule$3.f = newPromiseCapability$1 = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (isCallable$4(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
    nativeThen = NativePromisePrototype$1.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn$4(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call$b(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype$1.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf$1) {
      setPrototypeOf$1(NativePromisePrototype$1, PromisePrototype);
    }
  }
}

$$g({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false);
setSpecies$1(PROMISE);

var wellKnownSymbol$7 = wellKnownSymbol$j;
var Iterators$1 = iterators;

var ITERATOR$3 = wellKnownSymbol$7('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$3] === it);
};

var classof$4 = classof$6;
var getMethod$3 = getMethod$5;
var isNullOrUndefined$2 = isNullOrUndefined$6;
var Iterators = iterators;
var wellKnownSymbol$6 = wellKnownSymbol$j;

var ITERATOR$2 = wellKnownSymbol$6('iterator');

var getIteratorMethod$2 = function (it) {
  if (!isNullOrUndefined$2(it)) return getMethod$3(it, ITERATOR$2)
    || getMethod$3(it, '@@iterator')
    || Iterators[classof$4(it)];
};

var call$a = functionCall;
var aCallable$4 = aCallable$a;
var anObject$8 = anObject$f;
var tryToString$2 = tryToString$5;
var getIteratorMethod$1 = getIteratorMethod$2;

var $TypeError$5 = TypeError;

var getIterator$1 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable$4(iteratorMethod)) return anObject$8(call$a(iteratorMethod, argument));
  throw $TypeError$5(tryToString$2(argument) + ' is not iterable');
};

var call$9 = functionCall;
var anObject$7 = anObject$f;
var getMethod$2 = getMethod$5;

var iteratorClose$1 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$7(iterator);
  try {
    innerResult = getMethod$2(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$9(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$7(innerResult);
  return value;
};

var bind = functionBindContext;
var call$8 = functionCall;
var anObject$6 = anObject$f;
var tryToString$1 = tryToString$5;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike$3 = lengthOfArrayLike$5;
var isPrototypeOf$2 = objectIsPrototypeOf;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
var iteratorClose = iteratorClose$1;

var $TypeError$4 = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

var iterate$3 = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$6(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw $TypeError$4(tryToString$1(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$3(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$2(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$8(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf$2(ResultPrototype, result)) return result;
  } return new Result(false);
};

var wellKnownSymbol$5 = wellKnownSymbol$j;

var ITERATOR$1 = wellKnownSymbol$5('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR$1] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$1] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

var NativePromiseConstructor$1 = promiseNativeConstructor;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor$1.all(iterable).then(undefined, function () { /* empty */ });
});

var $$f = _export;
var call$7 = functionCall;
var aCallable$3 = aCallable$a;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$3;
var iterate$2 = iterate$3;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$$f({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$2.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$1(function () {
      var $promiseResolve = aCallable$3(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$2(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$7($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$e = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor = promiseNativeConstructor;
var getBuiltIn$1 = getBuiltIn$7;
var isCallable$3 = isCallable$n;
var defineBuiltIn$3 = defineBuiltIn$8;

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$$e({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (isCallable$3(NativePromiseConstructor)) {
  var method = getBuiltIn$1('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn$3(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}

var $$d = _export;
var call$6 = functionCall;
var aCallable$2 = aCallable$a;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var perform = perform$3;
var iterate$1 = iterate$3;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$$d({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$1.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable$2(C.resolve);
      iterate$1(iterable, function (promise) {
        call$6($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$c = _export;
var call$5 = functionCall;
var newPromiseCapabilityModule = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$$c({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call$5(capability.reject, undefined, r);
    return capability.promise;
  }
});

var anObject$5 = anObject$f;
var isObject$2 = isObject$a;
var newPromiseCapability = newPromiseCapability$2;

var promiseResolve$1 = function (C, x) {
  anObject$5(C);
  if (isObject$2(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var $$b = _export;
var getBuiltIn = getBuiltIn$7;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve = promiseResolve$1;

getBuiltIn('Promise');

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$$b({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(this, x);
  }
});

function httpRequest(url, options) {
  return __awaiter(this, void 0, void 0, function* () {
    const _a = options !== null && options !== void 0 ? options : {},
          {
      body
    } = _a,
          customConfig = __rest(_a, ["body"]);

    const headers = {
      "Content-Type": "application/json"
    };
    const config = Object.assign(Object.assign({
      method: options === null || options === void 0 ? void 0 : options.method
    }, customConfig), {
      headers: Object.assign(Object.assign({}, body ? headers : {}), customConfig.headers)
    });

    if (body) {
      config.body = JSON.stringify(body);
    }

    let data;

    try {
      const response = yield window.fetch(url, config);
      data = yield response.json();

      if (response.ok) {
        return data;
      }

      throw new Error(response.statusText); // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err) {
      return Promise.reject(err.message ? err.message : data);
    }
  });
}

var isCallable$2 = isCallable$n;
var isObject$1 = isObject$a;
var setPrototypeOf = objectSetPrototypeOf;

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$2(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject$1(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};

var isObject = isObject$a;
var classof$3 = classofRaw$2;
var wellKnownSymbol$4 = wellKnownSymbol$j;

var MATCH$2 = wellKnownSymbol$4('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof$3(it) == 'RegExp');
};

var classof$2 = classof$6;

var $String$1 = String;

var toString$b = function (argument) {
  if (classof$2(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String$1(argument);
};

var anObject$4 = anObject$f;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$4(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};

var call$4 = functionCall;
var hasOwn$1 = hasOwnProperty_1;
var isPrototypeOf$1 = objectIsPrototypeOf;
var regExpFlags = regexpFlags$1;

var RegExpPrototype$3 = RegExp.prototype;

var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$3) && !hasOwn$1(R, 'flags') && isPrototypeOf$1(RegExpPrototype$3, R)
    ? call$4(regExpFlags, R) : flags;
};

var fails$c = fails$q;
var global$5 = global$m;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$5.RegExp;

var UNSUPPORTED_Y$2 = fails$c(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY$1 = UNSUPPORTED_Y$2 || fails$c(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$c(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY$1,
  UNSUPPORTED_Y: UNSUPPORTED_Y$2
};

var defineProperty = objectDefineProperty.f;

var proxyAccessor$1 = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};

var fails$b = fails$q;
var global$4 = global$m;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$4.RegExp;

var regexpUnsupportedDotAll = fails$b(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$a = fails$q;
var global$3 = global$m;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$3.RegExp;

var regexpUnsupportedNcg = fails$a(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

var DESCRIPTORS = descriptors;
var global$2 = global$m;
var uncurryThis$d = functionUncurryThis;
var isForced = isForced_1;
var inheritIfRequired = inheritIfRequired$1;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$6;
var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var isPrototypeOf = objectIsPrototypeOf;
var isRegExp$1 = isRegexp;
var toString$a = toString$b;
var getRegExpFlags$1 = regexpGetFlags;
var stickyHelpers$1 = regexpStickyHelpers;
var proxyAccessor = proxyAccessor$1;
var defineBuiltIn$2 = defineBuiltIn$8;
var fails$9 = fails$q;
var hasOwn = hasOwnProperty_1;
var enforceInternalState = internalState.enforce;
var setSpecies = setSpecies$2;
var wellKnownSymbol$3 = wellKnownSymbol$j;
var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;

var MATCH$1 = wellKnownSymbol$3('match');
var NativeRegExp = global$2.RegExp;
var RegExpPrototype$2 = NativeRegExp.prototype;
var SyntaxError = global$2.SyntaxError;
var exec$2 = uncurryThis$d(RegExpPrototype$2.exec);
var charAt$4 = uncurryThis$d(''.charAt);
var replace$3 = uncurryThis$d(''.replace);
var stringIndexOf$2 = uncurryThis$d(''.indexOf);
var stringSlice$6 = uncurryThis$d(''.slice);
// TODO: Use only proper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers$1.MISSED_STICKY;
var UNSUPPORTED_Y$1 = stickyHelpers$1.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL$1 || UNSUPPORTED_NCG$1 || fails$9(function () {
    re2[MATCH$1] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt$4(string, index);
    if (chr === '\\') {
      result += chr + charAt$4(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt$4(string, index);
    if (chr === '\\') {
      chr = chr + charAt$4(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec$2(IS_NCG, stringSlice$6(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf(RegExpPrototype$2, this);
    var patternIsRegExp = isRegExp$1(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype$2, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags$1(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString$a(pattern);
    flags = flags === undefined ? '' : toString$a(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL$1 && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf$2(flags, 's') > -1;
      if (dotAll) flags = replace$3(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf$2(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y$1) flags = replace$3(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG$1) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$2, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty$1(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
  }

  RegExpPrototype$2.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype$2;
  defineBuiltIn$2(global$2, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$3 = functionCall;
var uncurryThis$c = functionUncurryThis;
var toString$9 = toString$b;
var regexpFlags = regexpFlags$1;
var stickyHelpers = regexpStickyHelpers;
var shared = shared$4.exports;
var create = objectCreate;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$3 = uncurryThis$c(''.charAt);
var indexOf = uncurryThis$c(''.indexOf);
var replace$2 = uncurryThis$c(''.replace);
var stringSlice$5 = uncurryThis$c(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$3(nativeExec, re1, 'a');
  call$3(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString$9(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$3(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call$3(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$2(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$5(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$3(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call$3(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$5(match.input, charsAdded);
        match[0] = stringSlice$5(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call$3(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$2 = patchedExec;

var $$a = _export;
var exec$1 = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$a({ target: 'RegExp', proto: true, forced: /./.exec !== exec$1 }, {
  exec: exec$1
});

var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
var defineBuiltIn$1 = defineBuiltIn$8;
var anObject$3 = anObject$f;
var $toString = toString$b;
var fails$8 = fails$q;
var getRegExpFlags = regexpGetFlags;

var TO_STRING = 'toString';
var RegExpPrototype$1 = RegExp.prototype;
var nativeToString = RegExpPrototype$1[TO_STRING];

var NOT_GENERIC = fails$8(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME$1 && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn$1(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject$3(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}

// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$b = functionUncurryThisClause;
var defineBuiltIn = defineBuiltIn$8;
var regexpExec$1 = regexpExec$2;
var fails$7 = fails$q;
var wellKnownSymbol$2 = wellKnownSymbol$j;
var createNonEnumerableProperty = createNonEnumerableProperty$6;

var SPECIES = wellKnownSymbol$2('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$2(KEY);

  var DELEGATES_TO_SYMBOL = !fails$7(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$7(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis$b(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$b(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec$1 || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

var uncurryThis$a = functionUncurryThis;
var toIntegerOrInfinity$3 = toIntegerOrInfinity$6;
var toString$8 = toString$b;
var requireObjectCoercible$6 = requireObjectCoercible$9;

var charAt$2 = uncurryThis$a(''.charAt);
var charCodeAt = uncurryThis$a(''.charCodeAt);
var stringSlice$4 = uncurryThis$a(''.slice);

var createMethod$2 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$8(requireObjectCoercible$6($this));
    var position = toIntegerOrInfinity$3(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$2(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice$4(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$2(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$2(true)
};

var charAt$1 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$2 = function (S, index, unicode) {
  return index + (unicode ? charAt$1(S, index).length : 1);
};

var uncurryThis$9 = functionUncurryThis;
var toObject$2 = toObject$7;

var floor$2 = Math.floor;
var charAt = uncurryThis$9(''.charAt);
var replace$1 = uncurryThis$9(''.replace);
var stringSlice$3 = uncurryThis$9(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject$2(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace$1(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice$3(str, 0, position);
      case "'": return stringSlice$3(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice$3(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor$2(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var call$2 = functionCall;
var anObject$2 = anObject$f;
var isCallable$1 = isCallable$n;
var classof$1 = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError$3 = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$1(exec)) {
    var result = call$2(exec, R, S);
    if (result !== null) anObject$2(result);
    return result;
  }
  if (classof$1(R) === 'RegExp') return call$2(regexpExec, R, S);
  throw $TypeError$3('RegExp#exec called on incompatible receiver');
};

var apply = functionApply;
var call$1 = functionCall;
var uncurryThis$8 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var fails$6 = fails$q;
var anObject$1 = anObject$f;
var isCallable = isCallable$n;
var isNullOrUndefined$1 = isNullOrUndefined$6;
var toIntegerOrInfinity$2 = toIntegerOrInfinity$6;
var toLength$2 = toLength$4;
var toString$7 = toString$b;
var requireObjectCoercible$5 = requireObjectCoercible$9;
var advanceStringIndex$1 = advanceStringIndex$2;
var getMethod$1 = getMethod$5;
var getSubstitution = getSubstitution$1;
var regExpExec$1 = regexpExecAbstract;
var wellKnownSymbol$1 = wellKnownSymbol$j;

var REPLACE = wellKnownSymbol$1('replace');
var max$1 = Math.max;
var min$1 = Math.min;
var concat = uncurryThis$8([].concat);
var push$1 = uncurryThis$8([].push);
var stringIndexOf$1 = uncurryThis$8(''.indexOf);
var stringSlice$2 = uncurryThis$8(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$6(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic$1('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$5(this);
      var replacer = isNullOrUndefined$1(searchValue) ? undefined : getMethod$1(searchValue, REPLACE);
      return replacer
        ? call$1(replacer, searchValue, O, replaceValue)
        : call$1(nativeReplace, toString$7(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$1(this);
      var S = toString$7(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf$1(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf$1(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString$7(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec$1(rx, S);
        if (result === null) break;

        push$1(results, result);
        if (!global) break;

        var matchStr = toString$7(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$2(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString$7(result[0]);
        var position = max$1(min$1(toIntegerOrInfinity$2(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push$1(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push$1(replacerArgs, namedCaptures);
          var replacement = toString$7(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice$2(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice$2(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

var call = functionCall;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var anObject = anObject$f;
var isNullOrUndefined = isNullOrUndefined$6;
var toLength$1 = toLength$4;
var toString$6 = toString$b;
var requireObjectCoercible$4 = requireObjectCoercible$9;
var getMethod = getMethod$5;
var advanceStringIndex = advanceStringIndex$2;
var regExpExec = regexpExecAbstract;

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$4(this);
      var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$6(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString$6(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString$6(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength$1(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

/* eslint-disable no-useless-escape */
// Download Helper Function
const MediaHelper = {
  // validate a CTA
  validURL: function (str) {
    if (!str) return false;
    const pattern = new RegExp("^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\S*)?$", "i"); // fragment locator

    return !!pattern.test(str);
  },
  // To get Save File Name
  getSaveFileName: function (fileURL, useTempLocation) {
    // Remove all http, https protocols first
    fileURL = fileURL.replace(/(^\w+:|^)\/\//, ''); // /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi
    // Remove all special characters

    fileURL = fileURL.replace(/[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, ''); // Remove all but 250 characters

    if (fileURL.length > 250) {
      fileURL = fileURL.substr(-250);
    }

    if (useTempLocation) {
      return fileURL + '.temp';
    } else {
      return fileURL;
    }
  },
  // Determine if media is supported video
  isMediaSupportedVideo: function (fileURL) {
    if (!fileURL) return; // check if media external embed first

    const mediaURL = MediaHelper.isMediaExternalEmbed(fileURL);

    if (mediaURL) {
      return mediaURL;
    } else {
      // check if mp4 extension
      if (fileURL.split('.').pop() === "mp4") {
        return true;
      }
    } // if all else fail


    return false;
  },
  // check if media is external embed, like youtube, soundcloud, etc
  isMediaExternalEmbed: function (fileURL) {
    return MediaHelper.isMediaYoutube(fileURL);
  },
  // Determine if youtube
  isMediaYoutube: function (fileURL) {
    if (fileURL !== undefined || fileURL !== '') {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
      const match = fileURL.match(regExp);

      if (match && match[2].length === 11) {
        // embed url
        const embedURL = 'https://www.youtube.com/embed/' + match[2] + '?autoplay=0&enablejsapi=1';
        return embedURL;
      }
    }

    return "";
  },
  // Get youtube id
  getYoutubeID: function (fileURL) {
    if (fileURL !== undefined || fileURL !== '') {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
      const match = fileURL.match(regExp);

      if (match && match[2].length === 11) {
        return match[2];
      }
    }

    return "";
  }
};

/**
 * @description Parse the contents of the markdown version of the notification body
 * @param message the notification body we wish to parse
 * @returns
 */
const FormatBody = message => {
  // firstly replace all new line content of the text with <br />
  // in order to parse it as HTML i.e "\n\n" => "<br /><br />"
  const parsedNewLine = message.replace(/\n/g, "<br />"); // remove leading slashes from text i.e \alex => alex

  const removedLeadingSlash = parsedNewLine.replace(/^\\/g, "");
  return removedLeadingSlash;
};

/**
 * @description parse and extract the timestamp from the body of the notification and remove the text from the body
 * @param notificationBody the text which would represent the body of the notification
 * @returns
 */

function extractTimeStamp(notificationBody) {
  const parsedBody = {
    notificationBody: FormatBody(notificationBody),
    timeStamp: "",
    originalBody: notificationBody
  };
  const matches = notificationBody.match(/\[timestamp:(.*?)\]/);

  if (matches) {
    parsedBody.timeStamp = matches[1];
    const textWithoutTimeStamp = notificationBody.replace(/ *\[timestamp:[^)]*\] */g, "");
    parsedBody.notificationBody = FormatBody(textWithoutTimeStamp);
    parsedBody.originalBody = textWithoutTimeStamp;
  }

  return parsedBody;
}
function convertTimeStamp(timeStamp) {
  return format(new Date(Number(timeStamp) * 1000), 'dd MMM yyyy | hh:mm a');
}

var $$9 = _export;
var $includes = arrayIncludes.includes;
var fails$5 = fails$q;
var addToUnscopables = addToUnscopables$2;

// FF99+ bug
var BROKEN_ON_SPARSE = fails$5(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$$9({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

var isRegExp = isRegexp;

var $TypeError$2 = TypeError;

var notARegexp = function (it) {
  if (isRegExp(it)) {
    throw $TypeError$2("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol = wellKnownSymbol$j;

var MATCH = wellKnownSymbol('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

var $$8 = _export;
var uncurryThis$7 = functionUncurryThis;
var notARegExp$1 = notARegexp;
var requireObjectCoercible$3 = requireObjectCoercible$9;
var toString$5 = toString$b;
var correctIsRegExpLogic$1 = correctIsRegexpLogic;

var stringIndexOf = uncurryThis$7(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$$8({ target: 'String', proto: true, forced: !correctIsRegExpLogic$1('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString$5(requireObjectCoercible$3(this)),
      toString$5(notARegExp$1(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});

const IPFS_BASE_URL = "https://ipfs.io/ipfs/";
/**
 * @description extract the ipfs HASH from the name of an image i.e www.xyz.com/abc/ipfshash.jpg => ipfshash
 * @param notificationBody
 * @returns the ipfs hash extracted from the image name
 */

function extractIPFSHashFromImageURL(imageURL) {
  if (!imageURL) return {
    type: "http",
    url: ""
  };
  if (imageURL.includes("ipfs")) return {
    type: "ipfs",
    url: imageURL
  };
  if (imageURL.includes("base64")) return {
    type: "base64",
    url: imageURL
  };
  const match = imageURL.match(/(\w+).jpg/);
  const output = match ? `${IPFS_BASE_URL}${match[1]}` : "";
  return {
    type: "http",
    url: output
  };
}

const IPFSIcon = ({
  icon
}) => {
  const [imageInBase64, setImageInBase64] = React.useState(''); // fetch and pin the icons using ipfs hash

  React.useEffect(() => {
    // extract the IPFS image url from the url of the icon
    const {
      type,
      url: ipfsHash
    } = extractIPFSHashFromImageURL(icon);
    if (!ipfsHash) return; // fetch the image directly from ipfs

    if (type === "http") {
      httpRequest(ipfsHash) // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then(res => {
        setImageInBase64(res['icon']);
      }).catch(err => {
        console.log(err);
      });
    } else {
      setImageInBase64(ipfsHash);
    }
  }, [icon]);
  return jsx("img", {
    style: {
      width: "100%",
      borderRadius: "8px"
    },
    src: imageInBase64,
    alt: ""
  });
};

const ImageOverlayItem = ({
  imageOverlay,
  setImageOverlay
}) => {
  const onCloseOverlay = () => {
    setImageOverlay('');
  };

  return jsx(ImageWrapper, Object.assign({
    onClick: onCloseOverlay,
    visible: Boolean(imageOverlay)
  }, {
    children: jsx("img", {
      src: imageOverlay,
      alt: "overlay full-screen"
    })
  }));
};

const ImageWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "overlay__ImageWrapper",
  componentId: "sc-1e2lr8x-0"
})(["height:100vh;width:100vw;background:rgba(0,0,0,0.75);position:fixed;top:0;left:0;justify-content:center;align-items:center;display:", ";z-index:2;img{max-width:80vw;height:auto;border-radius:10px;}"], props => props.visible ? 'flex' : 'none');

/**
 * If you want to provide a custom regexp, this is the configuration to use.
 * -- For historical reasons, all regexps are processed as if they have the global flag set.
 * -- Use the nonExhaustiveModeMaxMatchCount property to match a limited number of matches.
 * Note: any additional keys/props are permitted, and will be returned as-is!
 * @typedef {Object} CustomParseShape
 * @property {RegExp} pattern
 * @property {number} [nonExhaustiveModeMaxMatchCount] Enables "non-exhaustive mode", where you can limit how many matches are found. -- Must be a positive integer or Infinity matches are permitted
 * @property {Function} [renderText] arbitrary function to rewrite the matched string into something else
 */

/**
 * Class to encapsulate the business logic of converting text into matches & props
 */
class TextExtraction {
  constructor(text, patterns) {
    this.text = text;
    this.patterns = patterns || [];
  }
  /**
   * Returns parts of the text with their own props
   * @public
   * @return {Object[]} - props for all the parts of the text
   */


  parse() {
    let parsedTexts = [{
      children: this.text
    }];
    this.patterns.forEach(pattern => {
      let newParts = [];
      const tmp = pattern.nonExhaustiveModeMaxMatchCount || 0;
      const numberOfMatchesPermitted = Math.min(Math.max(Number.isInteger(tmp) ? tmp : 0, 0) || Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
      let currentMatches = 0;
      parsedTexts.forEach(parsedText => {
        // Only allow for now one parsing
        if (parsedText._matched) {
          newParts.push(parsedText);
          return;
        }

        const parts = [];
        let textLeft = parsedText.children;
        let indexOfMatchedString = 0;
        /** @type {RegExpExecArray} */

        let matches; // Global RegExps are stateful, this makes it start at 0 if reused
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec

        pattern.pattern.lastIndex = 0;

        while (textLeft && (matches = pattern.pattern.exec(textLeft))) {
          const previousText = textLeft.substr(0, matches.index);
          indexOfMatchedString = matches.index;

          if (++currentMatches > numberOfMatchesPermitted) {
            // Abort if we've exhausted our number of matches
            break;
          }

          parts.push({
            children: previousText
          });
          parts.push(this.getMatchedPart(pattern, matches[0], matches, indexOfMatchedString));
          textLeft = textLeft.substr(matches.index + matches[0].length);
          indexOfMatchedString += matches[0].length - 1; // Global RegExps are stateful, this makes it operate on the "remainder" of the string

          pattern.pattern.lastIndex = 0;
        }

        parts.push({
          children: textLeft
        });
        newParts = newParts.concat(parts);
      });
      parsedTexts = newParts;
    }); // Remove _matched key.

    parsedTexts.forEach(parsedText => delete parsedText._matched);
    return parsedTexts.filter(t => !!t.children);
  } // private

  /**
   * @protected
   * @param {ParseShape} matchedPattern - pattern configuration of the pattern used to match the text
   * @param {String} text - Text matching the pattern
   * @param {String[]} matches - Result of the RegExp.exec
   * @param {Integer} index - Index of the matched string in the whole string
   * @return {Object} props for the matched text
   */


  getMatchedPart(matchedPattern, text, matches, index) {
    const props = {};
    Object.keys(matchedPattern).forEach(key => {
      if (key === 'pattern' || key === 'renderText' || key === 'nonExhaustiveModeMaxMatchCount') {
        return;
      }

      if (typeof matchedPattern[key] === 'function') {
        // Support onPress / onLongPress functions
        props[key] = () => matchedPattern[key](text, index);
      } else {
        // Set a prop with an arbitrary name to the value in the match-config
        props[key] = matchedPattern[key];
      }
    });
    let children = text;

    if (matchedPattern.renderText && typeof matchedPattern.renderText === 'function') {
      children = matchedPattern.renderText(text, matches);
    }

    return Object.assign(Object.assign({}, props), {
      children: children,
      _matched: true
    });
  }

}

// a string of all valid unicode whitespaces
var whitespaces$3 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$6 = functionUncurryThis;
var requireObjectCoercible$2 = requireObjectCoercible$9;
var toString$4 = toString$b;
var whitespaces$2 = whitespaces$3;

var replace = uncurryThis$6(''.replace);
var ltrim = RegExp('^[' + whitespaces$2 + ']+');
var rtrim = RegExp('(^|[^' + whitespaces$2 + '])[' + whitespaces$2 + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$1 = function (TYPE) {
  return function ($this) {
    var string = toString$4(requireObjectCoercible$2($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod$1(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod$1(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod$1(3)
};

var global$1 = global$m;
var fails$4 = fails$q;
var uncurryThis$5 = functionUncurryThis;
var toString$3 = toString$b;
var trim = stringTrim.trim;
var whitespaces$1 = whitespaces$3;

var $parseInt$1 = global$1.parseInt;
var Symbol$1 = global$1.Symbol;
var ITERATOR = Symbol$1 && Symbol$1.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis$5(hex.exec);
var FORCED$3 = $parseInt$1(whitespaces$1 + '08') !== 8 || $parseInt$1(whitespaces$1 + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails$4(function () { $parseInt$1(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
var numberParseInt = FORCED$3 ? function parseInt(string, radix) {
  var S = trim(toString$3(string));
  return $parseInt$1(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt$1;

var $$7 = _export;
var $parseInt = numberParseInt;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$$7({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});

function renderStyles(matchingString) {
  // matches => ["[@michel:5455345]", "@michel", "5455345"]
  const pattern = /\[([^:]+):([^\]]+)\]/i;
  const match = matchingString.match(pattern);
  return `${match ? match[2] : ''}`;
}

function newLinestyles(matchingString) {
  const pattern = /\\n/g;
  const match = matchingString.match(pattern);

  if (match === null || match === void 0 ? void 0 : match.includes('\\n')) {
    const replacedString = matchingString.replace('\\n', '<br/>');
    return `<div>${replacedString}</div>`;
  } else {
    return `<div>${matchingString}</div>`;
  }
}

function renderTextStyles(matchingString) {
  const pattern = /<PUSHText color=["']?(#[0-9A-Fa-f]{3,6}|[a-zA-Z]+)["']?>(.*?)<\/PUSHText>/i;
  const match = matchingString.match(pattern);

  if (match) {
    const colorName = match[1].toLowerCase();
    let color;

    switch (colorName) {
      case 'primary':
        color = COLORS.PRIMARY;
        break;

      case 'secondary':
        color = COLORS.GRADIENT_SECONDARY;
        break;

      case 'white':
        color = COLORS.WHITE;
        break;
      // can add more custom color names if needed, couldn't find the tertiary color

      default:
        color = colorName;
    }

    let textContent = match[2];

    if (textContent.includes('\\n')) {
      textContent = match[2].replace('\\n', '<br/>');
    }

    return `<span style="color: ${color}">${textContent}</span>`;
  }

  return matchingString;
}

function renderLinkWithColor(matchingString) {
  const pattern = /<PUSHText color=["']?(#[0-9A-Fa-f]{3,6}|[a-zA-Z]+)["']?\s+link=["'](https?:\/\/[^"']+)["']>(.*?)<\/PUSHText>/i;
  const linkPattern = /\[([^\]]+)]\((https?:\/\/[^)]+)/;
  const match = matchingString.match(pattern);
  const markdownLinkPattern = matchingString.match(linkPattern);

  if (match) {
    const colorName = match[1].toLowerCase();
    let color; // Map custom color names to specific values

    switch (colorName) {
      case 'primary':
        color = COLORS.PRIMARY;
        break;

      case 'secondary':
        color = COLORS.GRADIENT_SECONDARY;
        break;

      case 'tertiary':
        color = COLORS.GRADIENT_THIRD;
        break;

      case 'white':
        color = COLORS.WHITE;
        break;
      // Add more custom color names if needed

      default:
        color = colorName;
    }

    const link = match[2];
    let textContent;

    if (match[3].includes('\\n')) {
      textContent = match[3].replace('\\n', '<br/>');
    } else {
      textContent = match[3];
    }

    return `<a href="${link}" target="_blank" style="color: ${color}">${textContent}</a>`;
  } else if (markdownLinkPattern) {
    const linkText = markdownLinkPattern[1];
    const linkUrl = markdownLinkPattern[2];
    return `<a href="${linkUrl}" target="_blank">${linkText}</a>`;
  }

  return matchingString;
}

function convertEpochToHumanReadable(matchingString) {
  const match = matchingString.match(/\[ts: (\d+)\]/);

  if (match) {
    const epochTimestamp = parseInt(match[1], 10); // Extracting the epoch timestamp

    const humanReadableDate = new Date(epochTimestamp * 1000).toLocaleString();
    return humanReadableDate;
  }

  return matchingString;
} // -------- Define the required colors


const COLORS = {
  PRIMARY: 'rgba(27.0, 150.0, 227.0, 1.0)',
  LINKS: 'rgba(20.0, 126.0, 251.0, 1.0)',
  GRADIENT_PRIMARY: 'rgba(226.0, 8.0, 128.0, 1.0)',
  GRADIENT_SECONDARY: 'rgba(53.0, 197.0, 243.0, 1.0)',
  GRADIENT_THIRD: 'rgba(103.0, 76.0, 159.0, 1.0)',
  TRANSPARENT: 'transparent',
  WHITE: 'rgba(255.0, 255.0, 255.0, 1.0)',
  DARK_WHITE: 'rgba(255.0, 255.0, 255.0, 0.75)',
  MID_WHITE: 'rgba(255.0, 255.0, 255.0, 0.5)',
  LIGHT_WHITE: 'rgba(255.0, 255.0, 255.0, 0.25)',
  SLIGHTER_GRAY: 'rgba(250.0, 250.0, 250.0, 1)',
  SLIGHT_GRAY: 'rgba(231.0, 231.0, 231.0, 1)',
  LIGHT_GRAY: 'rgba(225.0, 225.0, 225.0, 1)',
  MID_GRAY: 'rgba(200.0, 200.0, 200.0, 1)',
  DARK_GRAY: 'rgba(160.0, 160.0, 160.0, 1)',
  DARKER_GRAY: 'rgba(100.0, 100.0, 100.0, 1)',
  LIGHT_BLACK_TRANS: 'rgba(0.0, 0.0, 0.0, 0.1)',
  SEMI_MID_BLACK_TRANS: 'rgba(0.0, 0.0, 0.0, 0.25)',
  MID_BLACK_TRANS: 'rgba(0.0, 0.0, 0.0, 0.5)',
  DARK_BLACK_TRANS: 'rgba(0.0, 0.0, 0.0, 0.75)',
  BLACK: 'rgba(0.0, 0.0, 0.0, 1.0)',
  CONFIRM: 'rgba(34.0, 139.0, 34.0, 1.0)',
  WARNING: 'rgba(255.0, 153.0, 0.0, 1.0)',
  SUBLIME_RED: 'rgba(237.0, 59.0, 72.0, 1.0)',
  BADGE_RED: 'rgba(208.0, 44.0, 30.0, 1.0)',
  LIGHT_MAROON: 'rgba(159.0, 0.0, 0.0, 1.0)',
  LIGHTER_MAROON: 'rgba(129.0, 0.0, 0.0, 1.0)'
}; // -------- Define the default styles for the framework

const styles = {
  // Styling
  container: {},
  name: {
    color: COLORS.SUBLIME_RED
  },
  username: {
    color: COLORS.GRADIENT_SECONDARY
  },
  text: {
    color: COLORS.BLACK
  },
  primary: {
    color: COLORS.GRADIENT_PRIMARY
  },
  secondary: {
    color: COLORS.GRADIENT_SECONDARY
  },
  third: {
    color: COLORS.GRADIENT_THIRD
  },
  error: {
    color: COLORS.SUBLIME_RED
  },
  white: {
    color: COLORS.WHITE
  },
  midgray: {
    color: COLORS.MID_GRAY
  },
  darkgray: {
    color: COLORS.DARK_GRAY
  },
  darkergray: {
    color: COLORS.DARKER_GRAY
  },
  link: {
    color: COLORS.GRADIENT_PRIMARY
  },
  underline: {
    textDecorationLine: 'underline'
  },
  bold: {
    fontWeight: 'bold'
  },
  italics: {
    fontStyle: 'italic'
  },
  pointer: {
    cursor: 'pointer'
  }
}; // -------- Define the default patterns for the framework

const DEFAULT_PATTERNS = [{
  pattern: /\[([^\]]+)]\((https?:\/\/[^)]+)\)/g,
  style: {},
  renderText: renderLinkWithColor
}, {
  pattern: /\[(u):([^\]]+)\]/i,
  style: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, styles.primary), styles.bold), styles.italics), styles.underline), styles.pointer),
  renderText: renderStyles
}, {
  pattern: /\[(ub):([^\]]+)\]/i,
  style: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, styles.secondary), styles.bold), styles.italics), styles.underline), styles.pointer),
  renderText: renderStyles
}, {
  pattern: /\[(ut):([^\]]+)\]/i,
  style: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, styles.third), styles.bold), styles.italics), styles.underline), styles.pointer),
  renderText: renderStyles
}, {
  pattern: /<PUSHText color=["']?(#[0-9A-Fa-f]{3,6}|[a-zA-Z]+)["']?>(.*?)<\/PUSHText>/gi,
  style: {},
  renderText: renderTextStyles
}, {
  pattern: /<PUSHText color=["']?(#[0-9A-Fa-f]{3,6}|[a-zA-Z]+)["']?\s+link=["'](https?:\/\/[^"']+)["']>(.*?)<\/PUSHText>/gi,
  style: {},
  renderText: renderLinkWithColor
}, {
  pattern: /\[(up):([^\]]+)\]/i,
  style: Object.assign(Object.assign(Object.assign(Object.assign({}, styles.primary), styles.italics), styles.underline), styles.pointer),
  renderText: renderStyles
}, {
  pattern: /\[(d):([^\]]+)\]/i,
  style: Object.assign(Object.assign({}, styles.primary), styles.bold),
  renderText: renderStyles
}, {
  pattern: /\[(s):([^\]]+)\]/i,
  style: Object.assign(Object.assign({}, styles.secondary), styles.bold),
  renderText: renderStyles
}, {
  pattern: /\[(t):([^\]]+)\]/i,
  style: Object.assign(Object.assign({}, styles.third), styles.bold),
  renderText: renderStyles
}, {
  pattern: /\[(e):([^\]]+)\]/i,
  style: Object.assign(Object.assign({}, styles.error), styles.bold),
  renderText: renderStyles
}, {
  pattern: /\[(b):([^\]]+)\]/i,
  style: styles.bold,
  renderText: renderStyles
}, {
  pattern: /\*\*\*(.*?)\*\*\*/g,
  style: Object.assign(Object.assign({}, styles.bold), styles.italics),
  renderText: matchingString => matchingString.replace(/\*\*\*(.*?)\*\*\*/g, '$1')
}, {
  pattern: /\*\*(.*?)\*\*/g,
  style: styles.bold,
  renderText: matchingString => matchingString.replace(/\*\*(.*?)\*\*/g, '$1')
}, {
  pattern: /\\n/g,
  style: {},
  renderText: newLinestyles
}, {
  pattern: /\*(.*?)\*/g,
  style: Object.assign({}, styles.italics),
  renderText: matchingString => matchingString.replace(/\*(.*?)\*/g, '$1')
}, {
  pattern: /\[(bi):([^\]]+)\]/i,
  style: Object.assign(Object.assign({}, styles.bold), styles.italics),
  renderText: renderStyles
}, {
  pattern: /\[ts: (\d+)\]/g,
  style: {},
  renderText: convertEpochToHumanReadable
}, {
  pattern: /\[(w):([^\]]+)\]/i,
  style: styles.white,
  renderText: renderStyles
}, {
  pattern: /\[(wb):([^\]]+)\]/i,
  style: Object.assign(Object.assign({}, styles.white), styles.bold),
  renderText: renderStyles
}, {
  pattern: /\[(mg):([^\]]+)\]/i,
  style: styles.midgray,
  renderText: renderStyles
}, {
  pattern: /\[(dg):([^\]]+)\]/i,
  style: styles.darkgray,
  renderText: renderStyles
}, {
  pattern: /\[(ddg):([^\]]+)\]/i,
  style: styles.darkergray,
  renderText: renderStyles
}];

const ParseMarkDown = props => {
  const _a = Object.assign({}, props),
        {
    patterns
  } = _a,
        remainder = __rest(_a, ["patterns"]);

  function getPatterns() {
    return DEFAULT_PATTERNS.concat(patterns);
  }

  function getParsedText() {
    if (!props.patterns) {
      return props.children;
    }

    if (typeof props.children !== 'string') {
      return props.children;
    }

    const textExtraction = new TextExtraction(props.children, getPatterns());
    return textExtraction.parse().map((props, index) => {
      const {
        style,
        children
      } = props;
      return jsx("span", Object.assign({
        style: Object.assign({}, style)
      }, props.childrenProps, {
        children: HTMLReactParser(FormatBody(children))
      }), `parsedText-${index}`);
    });
  }

  return jsx("div", Object.assign({}, remainder, {
    children: getParsedText()
  }));
}; // ================= Define default props


ParseMarkDown.propTypes = {
  patterns: propTypes.exports.array.isRequired
};

const ParseMarkdownText = props => {
  const {
    text,
    patterns
  } = props;
  const actualPatters = patterns || [];
  return jsx("div", Object.assign({
    style: {
      wordBreak: 'break-all'
    }
  }, {
    children: jsx(ParseMarkDown, Object.assign({
      patterns: actualPatters
    }, {
      children: text
    }))
  }));
};

const StyledCircularLoader2 = /*#__PURE__*/styled.div.withConfig({
  displayName: "loader__StyledCircularLoader2",
  componentId: "sc-1p4z6sw-0"
})(["width:20px;height:20px;.lds-ring{display:inline-block;position:relative;width:20px;height:20px;}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:20px;height:20px;margin:0px;border:2px solid ", ";border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:", " transparent transparent transparent;}.lds-ring div:nth-child(1){animation-delay:-0.45s;}.lds-ring div:nth-child(2){animation-delay:-0.3s;}.lds-ring div:nth-child(3){animation-delay:-0.15s;}@keyframes lds-ring{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"], ({
  color
}) => color, ({
  color
}) => color);

const CircularProgressSpinner = ({
  color: _color = "#fff"
}) => {
  return jsx(StyledCircularLoader2, Object.assign({
    color: _color
  }, {
    children: jsxs("div", Object.assign({
      className: "lds-ring"
    }, {
      children: [jsx("div", {}), jsx("div", {}), jsx("div", {}), jsx("div", {})]
    }))
  }));
};

var CircularProgressSpinner$1 = /*#__PURE__*/React.memo(CircularProgressSpinner);

const ActionButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "ActionButton",
  componentId: "sc-18nzz3z-0"
})(["all:unset;background:", ";color:", ";padding:10px 20px;font-weight:500;border-radius:3px;cursor:", ";opacity:", ";transition:300ms;margin-left:auto;&:hover{opacity:", ";}@media (max-width:600px){padding:8px 20px;}"], props => props.bgColor || 'rgb(226, 8, 128)', props => props.color || '#fff', props => props.disabled ? 'default' : 'pointer', props => props.disabled ? '0.5' : '1', props => props.disabled ? '0.5' : '0.9');

const buttonText = {
  revealed: 'decrypted',
  notRevealed: 'decrypt'
};

const DecryptButton = ({
  decryptFn,
  isSecretRevealed
}) => {
  const [isLoading, setIsLaoding] = React.useState(false);
  const btnText = isSecretRevealed ? buttonText.revealed : buttonText.notRevealed;

  const onClickHandler = clickEvent => __awaiter(void 0, void 0, void 0, function* () {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
    if (!decryptFn || isSecretRevealed) return;

    try {
      setIsLaoding(true);
      yield decryptFn();
    } finally {
      setIsLaoding(false);
    }
  });

  return jsx(ActionButton, Object.assign({
    disabled: isSecretRevealed,
    onClick: onClickHandler,
    bgColor: "#674C9F"
  }, {
    children: isLoading ? jsx(CircularProgressSpinner$1, {}) : btnText
  }));
};

function useDecrypt(initialValues, isSecret) {
  const [notifAttributes, setNotifAttributes] = React.useState({
    notifTitle: initialValues.notificationTitle || '',
    notifBody: initialValues.parsedBody || '',
    notifCta: initialValues.cta || '',
    notifImage: initialValues.image || '',
    isSecretRevealed: false // avoids extra render

  });
  const hideSecretAttributes = isSecret ? (notifAttributes === null || notifAttributes === void 0 ? void 0 : notifAttributes.isSecretRevealed) ? false : true : false;

  const setDecryptedValues = ({
    title,
    body,
    cta,
    image
  }) => {
    setNotifAttributes({
      notifTitle: title || '',
      notifBody: body || '',
      notifCta: cta || '',
      notifImage: image || '',
      isSecretRevealed: true
    });
  };

  return {
    notifTitle: notifAttributes.notifTitle,
    notifBody: notifAttributes.notifBody,
    notifCta: hideSecretAttributes ? '' : notifAttributes.notifCta,
    notifImage: hideSecretAttributes ? '' : notifAttributes.notifImage,
    isSecretRevealed: notifAttributes.isSecretRevealed,
    setDecryptedValues
  };
}

const Tooltip$1 = ({
  children,
  tooltipContent
}) => {
  let timeoutId;
  const [active, setActive] = React.useState(false);

  const showTip = () => {
    // show the tooltip after 400ms
    timeoutId = setTimeout(() => {
      setActive(true);
    }, 400);
  };

  const hideTip = () => {
    clearInterval(timeoutId);
    setActive(false);
  };

  return jsxs(Wrapper, Object.assign({
    onMouseEnter: showTip,
    onMouseLeave: hideTip
  }, {
    children: [children, active && jsx(Content, {
      children: tooltipContent
    })]
  }));
};

const Wrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "tooltip__Wrapper",
  componentId: "sc-6msbcv-0"
})(["display:inline-block;position:relative;"]);
const Content = /*#__PURE__*/styled.div.withConfig({
  displayName: "tooltip__Content",
  componentId: "sc-6msbcv-1"
})(["position:absolute;border-radius:12px 2px 12px 12px;bottom:-28px;transform:translateX(-95%);padding:0.5rem 1rem;color:#fff;background:#131313;font-family:'Strawford';font-style:normal;font-weight:400;font-size:0.9rem;line-height:1;z-index:2;white-space:nowrap;&::before{bottom:100%;border-bottom-color:#131313;}"]);

const EthereumSvg = () => {
  return jsxs("svg", Object.assign({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsx("path", {
      d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",
      fill: "#627EEA"
    }), jsx("path", {
      d: "M12.3735 3V9.6525L17.9963 12.165L12.3735 3Z",
      fill: "white",
      "fill-opacity": "0.602"
    }), jsx("path", {
      d: "M12.3735 3L6.75 12.165L12.3735 9.6525V3Z",
      fill: "white"
    }), jsx("path", {
      d: "M12.3735 16.476V20.9963L18 13.212L12.3735 16.476Z",
      fill: "white",
      "fill-opacity": "0.602"
    }), jsx("path", {
      d: "M12.3735 20.9963V16.4753L6.75 13.212L12.3735 20.9963Z",
      fill: "white"
    }), jsx("path", {
      d: "M12.3735 15.4298L17.9963 12.1651L12.3735 9.65405V15.4298Z",
      fill: "white",
      "fill-opacity": "0.2"
    }), jsx("path", {
      d: "M6.75 12.1651L12.3735 15.4298V9.65405L6.75 12.1651Z",
      fill: "white",
      "fill-opacity": "0.602"
    })]
  }));
};

const PolygonSvg = () => {
  return jsxs("svg", Object.assign({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsxs("g", Object.assign({
      "clip-path": "url(#clip0_5284_6348)"
    }, {
      children: [jsx("path", {
        d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",
        fill: "#7B3FE4"
      }), jsx("path", {
        d: "M20 12.2801V15.9003C19.9987 16.1261 19.9391 16.3476 19.8269 16.5433C19.7147 16.739 19.5538 16.9021 19.36 17.0168L16.235 18.8231C16.0415 18.9389 15.8203 19 15.595 19C15.3697 19 15.1485 18.9389 14.955 18.8231L11.83 17.0168C11.6362 16.9021 11.4753 16.739 11.3631 16.5433C11.251 16.3476 11.1913 16.1261 11.19 15.9003V14.8842L12.79 13.9522V15.7184L15.59 17.3492L18.39 15.7184V12.4645L15.59 10.8337L9.03001 14.6472C8.83465 14.7576 8.61421 14.8157 8.38999 14.8157C8.16577 14.8157 7.94536 14.7576 7.75 14.6472L4.62499 12.8333C4.43416 12.7169 4.27639 12.5532 4.16692 12.3579C4.05745 12.1625 3.99997 11.9422 4 11.7181V8.09786C4.00129 7.87211 4.06096 7.65056 4.17313 7.45487C4.28533 7.25918 4.44619 7.09604 4.63999 6.98144L7.765 5.17508C7.95895 5.06045 8.17993 5 8.40499 5C8.63008 5 8.85106 5.06045 9.04501 5.17508L12.17 6.98144C12.3638 7.09604 12.5247 7.25918 12.6369 7.45487C12.7491 7.65056 12.8087 7.87211 12.81 8.09786V9.11393L11.2 10.0397V8.28353L8.40001 6.65279L5.59999 8.28353V11.5337L8.40001 13.1644L14.96 9.35102C15.1553 9.24056 15.3758 9.18254 15.6 9.18254C15.8242 9.18254 16.0446 9.24056 16.24 9.35102L19.365 11.1649C19.5577 11.28 19.7175 11.4433 19.8287 11.6386C19.94 11.8341 19.999 12.055 20 12.2801Z",
        fill: "white"
      })]
    })), jsx("defs", {
      children: jsx("clipPath", Object.assign({
        id: "clip0_5284_6348"
      }, {
        children: jsx("rect", {
          width: "24",
          height: "24",
          fill: "white"
        })
      }))
    })]
  }));
};

const BSCSvg = () => {
  return jsxs("svg", Object.assign({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsx("circle", {
      cx: "12",
      cy: "12",
      r: "12",
      fill: "#1D1D1D"
    }), jsx("path", {
      d: "M8.16193 12L6.58295 13.579L5 12L6.57898 10.421L8.16193 12ZM12 8.16193L14.7085 10.8705L16.2875 9.29148L12 5L7.70852 9.29148L9.2875 10.8705L12 8.16193ZM17.417 10.421L15.8381 12L17.417 13.579L18.996 12L17.417 10.421ZM12 15.8381L9.29148 13.1295L7.7125 14.7085L12 19L16.2875 14.7085L14.7085 13.1295L12 15.8381ZM12 13.579L13.579 12L12 10.421L10.417 12L12 13.579Z",
      fill: "#F0B90B"
    })]
  }));
};

const OptimismSvg = () => {
  return jsxs("svg", Object.assign({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsxs("g", Object.assign({
      "clip-path": "url(#clip0_9390_20606)"
    }, {
      children: [jsx("path", {
        d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",
        fill: "#FF0420"
      }), jsx("path", {
        d: "M8.50098 15.1872C7.78578 15.1872 7.20018 15.0192 6.74418 14.6832C6.29298 14.3424 6.06738 13.8528 6.06738 13.224C6.06738 13.0896 6.08178 12.9312 6.11058 12.7392C6.18738 12.3072 6.29778 11.7888 6.44178 11.1792C6.84978 9.52799 7.90578 8.70239 9.60498 8.70239C10.0658 8.70239 10.4834 8.77919 10.8482 8.93759C11.213 9.08639 11.501 9.31679 11.7122 9.62399C11.9234 9.92639 12.029 10.2864 12.029 10.704C12.029 10.8288 12.0146 10.9872 11.9858 11.1792C11.8946 11.712 11.789 12.2352 11.6594 12.7392C11.4482 13.56 11.0882 14.1792 10.5698 14.5872C10.0562 14.9904 9.36498 15.1872 8.50098 15.1872ZM8.63058 13.8912C8.96658 13.8912 9.24978 13.7904 9.48498 13.5936C9.72498 13.3968 9.89778 13.0944 9.99858 12.6816C10.1378 12.1152 10.2434 11.6256 10.3154 11.2032C10.3394 11.0784 10.3538 10.9488 10.3538 10.8144C10.3538 10.2672 10.0706 9.99359 9.49938 9.99359C9.16338 9.99359 8.87538 10.0944 8.63538 10.2912C8.40018 10.488 8.23218 10.7904 8.13138 11.2032C8.02098 11.6064 7.91538 12.096 7.80498 12.6816C7.78098 12.8016 7.76658 12.9264 7.76658 13.0608C7.76178 13.6176 8.05458 13.8912 8.63058 13.8912Z",
        fill: "white"
      }), jsx("path", {
        d: "M12.4463 15.1009C12.3791 15.1009 12.3311 15.0817 12.2927 15.0385C12.2639 14.9905 12.2543 14.9377 12.2639 14.8753L13.5071 9.0193C13.5167 8.9521 13.5503 8.8993 13.6079 8.8561C13.6607 8.8129 13.7183 8.7937 13.7807 8.7937H16.1759C16.8431 8.7937 17.3759 8.9329 17.7791 9.2065C18.1871 9.4849 18.3935 9.8833 18.3935 10.4065C18.3935 10.5553 18.3743 10.7137 18.3407 10.8769C18.1919 11.5681 17.8895 12.0769 17.4287 12.4081C16.9775 12.7393 16.3583 12.9025 15.5711 12.9025H14.3567L13.9439 14.8753C13.9295 14.9425 13.9007 14.9953 13.8431 15.0385C13.7903 15.0817 13.7327 15.1009 13.6703 15.1009H12.4463ZM15.6335 11.6593C15.8879 11.6593 16.1039 11.5921 16.2911 11.4529C16.4831 11.3137 16.6079 11.1169 16.6703 10.8577C16.6895 10.7569 16.6991 10.6657 16.6991 10.5889C16.6991 10.4161 16.6463 10.2817 16.5455 10.1905C16.4447 10.0945 16.2671 10.0465 16.0223 10.0465H14.9423L14.6015 11.6593H15.6335Z",
        fill: "white"
      })]
    })), jsx("defs", {
      children: jsx("clipPath", Object.assign({
        id: "clip0_9390_20606"
      }, {
        children: jsx("rect", {
          width: "24",
          height: "24",
          fill: "white"
        })
      }))
    })]
  }));
};

const PolygonzkevmSvg = () => {
  return jsxs("svg", Object.assign({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsxs("g", Object.assign({
      "clip-path": "url(#clip0_10279_32011)"
    }, {
      children: [jsx("path", {
        d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",
        fill: "#7B3FE4"
      }), jsx("path", {
        d: "M18.4908 6.848L13.2428 3.81333C12.8641 3.6 12.4428 3.48267 12.0054 3.48267C11.5681 3.48267 11.1468 3.6 10.7734 3.81333L5.52542 6.848C5.15209 7.06667 4.83742 7.376 4.61875 7.75467C4.40009 8.128 4.28809 8.55467 4.28809 8.992V15.072C4.29342 15.504 4.40542 15.9253 4.62409 16.2987C4.84275 16.672 5.15209 16.9813 5.52542 17.1947L10.7734 20.2293C11.1468 20.448 11.5734 20.56 12.0108 20.56C12.4481 20.56 12.8694 20.448 13.2481 20.2293L18.4961 17.1947C18.8694 16.976 19.1841 16.6667 19.4028 16.288C19.6214 15.9147 19.7334 15.488 19.7334 15.0507V8.97067C19.7281 8.53867 19.6161 8.11733 19.3974 7.744C19.1734 7.37067 18.8641 7.06133 18.4908 6.848ZM5.52009 8.98667C5.52009 8.768 5.57875 8.55467 5.68542 8.368C5.79209 8.18133 5.95209 8.02133 6.13875 7.91467L11.3868 4.88533C11.5734 4.77867 11.7868 4.72 12.0054 4.72C12.2241 4.72 12.4374 4.77867 12.6241 4.88533L17.8774 7.91467C18.0641 8.02133 18.2188 8.176 18.3254 8.35733C18.4321 8.544 18.4908 8.752 18.4961 8.96533V9.584C18.4961 10.064 18.3041 10.528 17.9628 10.864C17.6214 11.2053 17.1628 11.3973 16.6828 11.3973H7.33875C6.68275 11.3973 6.04809 11.6053 5.52009 12V8.98667ZM18.4908 15.0507C18.4908 15.2693 18.4321 15.4827 18.3254 15.6693C18.2188 15.856 18.0588 16.016 17.8721 16.1227L12.6188 19.152C12.4321 19.2587 12.2188 19.3173 12.0001 19.3173C11.7814 19.3173 11.5681 19.2587 11.3814 19.152L6.13342 16.1227C5.94675 16.016 5.79209 15.8613 5.68542 15.68C5.57875 15.4933 5.52009 15.2853 5.51475 15.072V14.4533C5.51475 13.9733 5.70675 13.5093 6.04809 13.1733C6.38942 12.832 6.84809 12.64 7.32809 12.64H16.6668C17.3228 12.64 17.9574 12.432 18.4854 12.0373V15.0507H18.4908Z",
        fill: "white"
      }), jsx("path", {
        d: "M9.13577 8.67727H10.3358V10.4693H11.5731V8.67727C11.5731 8.35194 11.4451 8.03727 11.2104 7.80261C10.9811 7.57327 10.6664 7.43994 10.3358 7.43994H9.13577C8.81044 7.43994 8.49577 7.56794 8.2611 7.80261C8.03177 8.03194 7.89844 8.34661 7.89844 8.67727V10.4693H9.13577V8.67727Z",
        fill: "white"
      }), jsx("path", {
        d: "M10.3309 15.3601H9.13089V13.5681H7.89355V15.3601C7.89355 15.6854 8.02155 16.0001 8.25622 16.2348C8.48555 16.4641 8.80022 16.5974 9.13089 16.5974H10.3309C10.6562 16.5974 10.9709 16.4694 11.2056 16.2348C11.4349 16.0054 11.5682 15.6908 11.5682 15.3601V13.5681H10.3309V15.3601Z",
        fill: "white"
      }), jsx("path", {
        d: "M14 8.67727H15.2V10.4693H16.4374V8.67727C16.4374 8.35194 16.3094 8.03727 16.0747 7.80261C15.8454 7.57327 15.5307 7.43994 15.2 7.43994H14C13.6747 7.43994 13.36 7.56794 13.1254 7.80261C12.896 8.03194 12.7627 8.34661 12.7627 8.67727V10.4693H14V8.67727Z",
        fill: "white"
      }), jsx("path", {
        d: "M15.2054 15.3601H14.0054V13.5681H12.7681V15.3601C12.7681 15.6854 12.8961 16.0001 13.1307 16.2348C13.3601 16.4641 13.6747 16.5974 14.0054 16.5974H15.2054C15.5307 16.5974 15.8454 16.4694 16.0801 16.2348C16.3094 16.0054 16.4427 15.6908 16.4427 15.3601V13.5681H15.2054V15.3601Z",
        fill: "white"
      })]
    })), jsx("defs", {
      children: jsx("clipPath", Object.assign({
        id: "clip0_10279_32011"
      }, {
        children: jsx("rect", {
          width: "24",
          height: "24",
          fill: "white"
        })
      }))
    })]
  }));
};

const TheGraphSvg = () => {
  return jsxs("svg", Object.assign({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsxs("g", Object.assign({
      "clip-path": "url(#clip0_6814_10094)"
    }, {
      children: [jsx("path", {
        d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",
        fill: "#6747ED"
      }), jsx("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M11.6606 12.7677C9.93715 12.7677 8.55353 11.3841 8.55353 9.6606C8.55353 7.93715 9.93715 6.55353 11.6606 6.55353C13.3841 6.55353 14.7677 7.93715 14.7677 9.6606C14.7677 11.3841 13.3841 12.7677 11.6606 12.7677ZM11.6606 5C14.2336 5 16.3212 7.08756 16.3212 9.6606C16.3212 12.2336 14.2336 14.3212 11.6606 14.3212C9.08756 14.3212 7 12.2336 7 9.6606C7 7.08756 9.08756 5 11.6606 5ZM16.1027 14.5639C16.4183 14.8795 16.4183 15.365 16.1027 15.6563L12.9957 18.7633C12.6801 19.0789 12.1946 19.0789 11.9033 18.7633C11.5878 18.4478 11.5878 17.9623 11.9033 17.671L15.0104 14.5639C15.3017 14.2484 15.8114 14.2484 16.1027 14.5639ZM17.899 5.77677C17.899 6.2137 17.5592 6.55353 17.1222 6.55353C16.6853 6.55353 16.3455 6.2137 16.3455 5.77677C16.3455 5.33984 16.6853 5 17.1222 5C17.5349 5 17.899 5.33984 17.899 5.77677Z",
        fill: "white"
      })]
    })), jsx("defs", {
      children: jsx("clipPath", Object.assign({
        id: "clip0_6814_10094"
      }, {
        children: jsx("rect", {
          width: "24",
          height: "24",
          fill: "white"
        })
      }))
    })]
  }));
};

const ArbitrumSvg = () => jsxs("svg", Object.assign({
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: 0,
  y: 0,
  viewBox: "0 0 1080 1218.5",
  xmlSpace: "preserve"
}, {
  children: [jsx("style", {
    children: '.st0{fill:#1b4add}'
  }), jsx("path", {
    className: "st0",
    d: "M541.8 76.4c2.9 0 5.8.8 8.4 2.3l446.1 259.5c5.2 3 8.4 8.6 8.3 14.5l-1.7 516.1c0 6-3.2 11.5-8.4 14.5l-447.8 256.6c-2.5 1.5-5.5 2.2-8.4 2.2-2.9 0-5.8-.8-8.4-2.3L83.8 880.3c-5.2-3-8.4-8.6-8.3-14.5l1.7-516.1c0-6 3.2-11.5 8.4-14.5L533.4 78.6c2.5-1.5 5.4-2.2 8.4-2.2M542 1c-15.9-.1-31.8 4-46.1 12.2L48.1 269.7c-28.6 16.4-46.2 46.7-46.4 79.7L0 865.5c-.1 32.9 17.4 63.4 45.8 80L491.9 1205c14.2 8.3 30.1 12.4 46.1 12.5 15.9.1 31.8-4 46.1-12.2l447.8-256.6c28.6-16.4 46.2-46.7 46.4-79.7l1.7-516c.1-32.9-17.4-63.4-45.8-80L588.1 13.5C573.8 5.2 557.9 1 542 1z"
  }), jsx("path", {
    className: "st0",
    d: "M632.4 282.3H567c-4.9 0-9.3 3.1-11 7.7L345.8 866.4c-1.4 3.8 1.4 7.8 5.5 7.8h65.4c4.9 0 9.3-3.1 11-7.7L638 290c1.2-3.7-1.6-7.7-5.6-7.7zm-114.4 0h-65.4c-4.9 0-9.3 3.1-11 7.7L231.4 866.4c-1.4 3.8 1.4 7.8 5.5 7.8h65.4c4.9 0 9.3-3.1 11-7.7L523.6 290c1.3-3.7-1.5-7.7-5.6-7.7zm84.7 223.5c-1.9-5.1-9.1-5.1-11 0l-34 93.2c-.9 2.6-.9 5.4 0 8l94.7 259.6c1.7 4.6 6.1 7.7 11 7.7h65.4c4.1 0 6.9-4 5.5-7.8L602.7 505.8zm245.9 360.6L659.9 349.1c-1.9-5.1-9.1-5.1-11 0l-34 93.2c-.9 2.6-.9 5.4 0 8l151.9 416.3c1.7 4.6 6.1 7.7 11 7.7h65.4c3.9-.1 6.8-4.1 5.4-7.9z"
  })]
}));

const createSVGIcon$1 = (element, chainName) => {
  return jsx(Tooltip$1, Object.assign({
    tooltipContent: `Delivered by ${chainName}`
  }, {
    children: element
  }));
};

var chainDetails = {
  ETH_TEST_SEPOLIA: {
    label: 'ETHEREUM SEPOLIA',
    icon: createSVGIcon$1(jsx(EthereumSvg, {}), 'Ethereum Sepolia')
  },
  ETH_MAINNET: {
    label: 'ETHEREUM MAINNET',
    icon: createSVGIcon$1(jsx(EthereumSvg, {}), 'Ethereum Mainnet')
  },
  POLYGON_TEST_MUMBAI: {
    label: 'POLYGON MUMBAI',
    icon: createSVGIcon$1(jsx(PolygonSvg, {}), 'Polygon Mumbai')
  },
  POLYGON_MAINNET: {
    label: 'POLYGON MAINNET',
    icon: createSVGIcon$1(jsx(PolygonSvg, {}), 'Polygon Mainnet')
  },
  BSC_TESTNET: {
    label: 'BSC TESTNET',
    icon: createSVGIcon$1(jsx(BSCSvg, {}), 'Bsc Testnet')
  },
  BSC_MAINNET: {
    label: 'BSC MAINNET',
    icon: createSVGIcon$1(jsx(BSCSvg, {}), 'Bsc Mainnet')
  },
  OPTIMISM_TESTNET: {
    label: 'OPTIMISM TESTNET',
    icon: createSVGIcon$1(jsx(OptimismSvg, {}), 'Optimism Testnet')
  },
  OPTIMISM_MAINNET: {
    label: 'OPTIMISM MAINNET',
    icon: createSVGIcon$1(jsx(OptimismSvg, {}), 'Optimism Mainnet')
  },
  POLYGON_ZK_EVM_TESTNET: {
    label: 'POLYGON ZK EVM TESTNET',
    icon: createSVGIcon$1(jsx(PolygonzkevmSvg, {}), 'Polygon ZK EVM Testnet')
  },
  POLYGON_ZK_EVM_MAINNET: {
    label: 'POLYGON ZK EVM MAINNET',
    icon: createSVGIcon$1(jsx(PolygonzkevmSvg, {}), 'Polygon ZK EVM Mainnet')
  },
  ARBITRUMONE_MAINNET: {
    label: 'ARBITRUMONE MAINNET',
    icon: createSVGIcon$1(jsx(ArbitrumSvg, {}), 'Arbitrum Mainnet')
  },
  ARBITRUM_TESTNET: {
    label: 'ARBITRUM TESTNET',
    icon: createSVGIcon$1(jsx(ArbitrumSvg, {}), 'Arbitrum Testnet')
  },
  THE_GRAPH: {
    label: 'THE GRAPH',
    icon: createSVGIcon$1(jsx(TheGraphSvg, {}), 'The Graph')
  }
};

const LinkIcon = () => {
  return jsxs("svg", Object.assign({
    width: "20",
    height: "21",
    viewBox: "0 0 20 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsx("path", {
      d: "M9.5542 6.07818L11.1011 4.5313C11.756 3.93437 12.6158 3.61274 13.5017 3.63325C14.3876 3.65376 15.2315 4.01483 15.8581 4.64143C16.4847 5.26804 16.8458 6.11198 16.8663 6.9979C16.8868 7.88381 16.5652 8.74356 15.9683 9.39849L13.7573 11.6016C13.4387 11.9215 13.06 12.1752 12.6431 12.3484C12.2261 12.5216 11.7791 12.6107 11.3276 12.6107C10.8762 12.6107 10.4291 12.5216 10.0122 12.3484C9.59524 12.1752 9.21659 11.9215 8.89795 11.6016",
      stroke: "#575D73",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), jsx("path", {
      d: "M10.4454 14.9222L8.89849 16.469C8.24356 17.066 7.38381 17.3876 6.4979 17.3671C5.61198 17.3466 4.76804 16.9855 4.14143 16.3589C3.51483 15.7323 3.15376 14.8884 3.13325 14.0024C3.11274 13.1165 3.43437 12.2568 4.0313 11.6018L6.24224 9.39872C6.56088 9.07889 6.93954 8.82511 7.35648 8.65195C7.77342 8.47879 8.22046 8.38965 8.67193 8.38965C9.1234 8.38965 9.57043 8.47879 9.98738 8.65195C10.4043 8.82511 10.783 9.07889 11.1016 9.39872",
      stroke: "#575D73",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })]
  }));
};

const defaultEvents = ['mousedown', 'touchstart'];

function on(obj, ...args) {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...args);
  }
}

function off(obj, ...args) {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...args);
  }
}

const useClickAway = (ref, onClickAway, events = defaultEvents) => {
  const savedCallback = useRef(onClickAway);
  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);
  useEffect(() => {
    const handler = event => {
      const {
        current: el
      } = ref;
      el && !el.contains(event.target) && savedCallback.current(event);
    };

    for (const eventName of events) {
      on(document, eventName, handler);
    }

    return () => {
      for (const eventName of events) {
        off(document, eventName, handler);
      }
    };
  }, [events, ref]);
};

const useChatScroll = dep => {
  const ref = React__default.useRef(null);
  React__default.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
  }, [dep]);
  return ref;
};

var ENV;

(function (ENV) {
  ENV["PROD"] = "prod";
  ENV["STAGING"] = "staging";
  ENV["DEV"] = "dev";
  /**
   * **This is for local development only**
   */

  ENV["LOCAL"] = "local";
})(ENV || (ENV = {}));

const Constants = {
  ENV,
  DEFAULT_TITLE: 'Chat with us!',
  DEFAULT_GREETING_MSG: 'Hi there!',
  DEFAULT_PROFILE_PICTURE: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg=='
};
const ALCHEMY_API_KEY = 'rtkd-a4JWpnViQBZdNCiFBGTJdp5e0R2';
const NETWORK_DETAILS = {
  11155111: {
    network: 'sepolia'
  },
  80001: {
    network: 'polygon-mumbai'
  },
  1: {
    network: 'mainnet'
  },
  137: {
    network: 'polygon-mainnet'
  },
  97: {},
  420: {}
}; //todo: need to change o sepolia

const CoreContractChainId = {
  prod: 1,
  dev: 5,
  staging: 5,
  local: 5
};
const TESTNET_NETWORK = {
  ETHEREUM: 'eip155:11155111',
  POLYGON: 'eip155:80001',
  BSC: 'eip155:97',
  OPTIMISM: 'eip155:420',
  POLYGON_ZK_EVM: 'eip155:1442',
  ARBITRUM: 'eip155:421613'
};
const MAINET_NETWORK = {
  ETHEREUM: 'eip155:1',
  POLYGON: 'eip155:137',
  BSC: 'eip155:56',
  OPTIMISM: 'eip155:10',
  POLYGON_ZK_EVM: 'eip155:1101',
  ARBITRUM: 'eip155:42161'
};
const BLOCKCHAIN_NETWORK = {
  prod: MAINET_NETWORK,
  dev: TESTNET_NETWORK,
  staging: TESTNET_NETWORK,
  local: TESTNET_NETWORK
};
const allowedNetworks = {
  prod: [1, 137, 56, 10, 42161 // for arbitrum mainnet
  ],
  dev: [11155111, 80001, 97, 420, 421613 // for arbitrum testnet
  ],
  staging: [// 42, //for kovan
  11155111, 80001, 97, 420, 421613 // for arbitrum testnet
  ],
  local: [11155111, 80001, 97, 420, 421613 // for arbitrum testnet
  ]
};
const BLOCKNATIVE_PROJECT_ID = '64a44a0fb537407bfe97d24330e4109c';
const InfuraAPIKey = '150f25623ae64d08ab7ec7dd0c6b6ee9';
const PUBLIC_GOOGLE_TOKEN = 'AIzaSyBhUBnCia6zpxY7KcqjghRS1IphinAvKXs';
const ProfilePicture = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg==`;
const PushSubTabTitle = {
  REQUESTS: {
    title: 'Chat request'
  },
  SPAM: {
    title: 'Spam'
  }
};
const chatLimit = 10;
const requestLimit$1 = 10;
const notificationLimit = 5;
const FILE_ICON = extension => `https://cdn.jsdelivr.net/gh/napthedev/file-icons/file/${extension}.svg`; // Livekit Server URLs

const LIVEKIT_SERVER_URL = "https://spacev2-demo-17wvllxz.livekit.cloud";
const LIVEKIT_SERVER_WEBSOCKET_URL = "wss://spacev2-demo-17wvllxz.livekit.cloud";
const LIVEKIT_TOKEN_GENERATOR_SERVER_URL = "https://ms-lk-server.onrender.com";

const lightTheme$2 = {
  bgColorPrimary: "#fff",
  bgColorSecondary: "#D53A94",
  textColorPrimary: "#1e1e1e",
  textColorSecondary: "#fff",
  btnColorPrimary: "#D53A94",
  btnColorSecondary: "#494D5F",
  border: "1px solid #E4E8EF",
  borderRadius: "24px",
  moduleColor: "#fff"
};

const commonStyle = /*#__PURE__*/css(["display:", ";position:", ";background:", ";color:", ";cursor:", ";flex:", ";flex-direction:", ";flex-wrap:", ";gap:", ";grid-template-columns:", ";grid-template-rows:", ";align-self:", ";align-items:", ";align-content:", ";justify-content:", ";padding:", ";margin:", ";margin-top:", ";margin-left:", ";margin-right:", ";margin-bottom:", ";min-width:", ";max-width:", ";overflow-y:", ";overflow-x:", ";font-size:", ";font-weight:", ";text-align:", ";filter:", ";box-shadow:", ";top:", ";bottom:", ";left:", ";right:", ";width:", ";height:", ";border:", ";border-radius:", ";overflow:", ";z-index:", ";"], props => props.display, props => props.position, props => props.background, props => props.color, props => props.cursor, props => props.flex, props => props.flexDirection, props => props.flexWrap, props => props.gap, props => props.gridTemplateColumns, props => props.gridTemplateRows, props => props.alignSelf, props => props.alignItems, props => props.alignContent, props => props.justifyContent, props => props.padding, props => props.margin, props => props.marginTop, props => props.marginLeft, props => props.marginRight, props => props.marginBottom, props => props.minWidth, props => props.maxWidth, props => props.overflowY, props => props.overflowX, props => props.fontSize, props => props.fontWeight, props => props.textAlign, props => props.filter, props => props.boxShadow, props => props.top, props => props.bottom, props => props.left, props => props.right, props => props.width, props => props.height, props => props.border, props => props.borderRadius, props => props.overflow, props => props.zIndex);
const Item$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "styles__Item",
  componentId: "sc-1il8o4s-0"
})(["", ""], commonStyle);
const Anchor = /*#__PURE__*/styled.a.withConfig({
  displayName: "styles__Anchor",
  componentId: "sc-1il8o4s-1"
})(["", ""], commonStyle);
const Container$m = /*#__PURE__*/styled.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1il8o4s-2"
})(["", ""], commonStyle);
const Image$5 = /*#__PURE__*/styled.img.withConfig({
  displayName: "styles__Image",
  componentId: "sc-1il8o4s-3"
})(["", ""], commonStyle);
const Heading$1 = /*#__PURE__*/styled.h1.withConfig({
  displayName: "styles__Heading",
  componentId: "sc-1il8o4s-4"
})(["", ""], commonStyle);
const Button$8 = /*#__PURE__*/styled.button.withConfig({
  displayName: "styles__Button",
  componentId: "sc-1il8o4s-5"
})(["", ""], commonStyle);
const Text = /*#__PURE__*/styled.span.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1il8o4s-6"
})(["", ""], commonStyle);

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};
const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};

const initialSpaceDataContextValues = {
  account: '',
  setAccount: () => {
    /**/
  },
  signer: undefined,
  setSigner: () => {
    /**/
  },
  pgpPrivateKey: '',
  setPgpPrivateKey: () => {
    /**/
  },
  env: ENV.DEV,
  setEnv: () => {
    /**/
  },
  chainId: 1,
  setChainId: () => {
    /** */
  },
  trendingListData: null,
  setTrendingListData: () => {
    /**/
  },
  selectedFeedTab: "Popular",
  setSelectedFeedTab: () => {
    /** */
  },
  spaceInfo: {},
  setSpaceInfo: () => {
    /**/
  },
  getSpaceInfo: () => undefined,
  spaceWidgetId: '',
  setSpaceWidgetId: () => {
    /**/
  },
  mySpaces: {
    apiData: [],
    currentPage: 1,
    lastPage: 2
  },
  setMySpaces: () => {
    /**/
  },
  popularSpaces: {
    apiData: [],
    currentPage: 1,
    lastPage: 2
  },
  setPopularSpaces: () => {
    /**/
  },
  spaceRequests: {
    apiData: [],
    currentPage: 1,
    lastPage: 2
  },
  setSpaceRequests: () => {
    /**/
  },
  pushSpaceSocket: null,
  setPushSpaceSocket: () => {
    /** */
  },
  isPushSDKSocketConnected: false,
  setIsPushSDKSocketConnected: () => {
    /** */
  },
  spaceObjectData: {},
  setSpaceObjectData: () => {
    /**/
  },
  initSpaceObject: () => __awaiter(void 0, void 0, void 0, function* () {
    /**/
  }),
  spacesObjectRef: {
    current: null
  },
  isJoined: false,
  // isLive: false,
  isSpeaker: false,
  isListener: false,
  speakerData: {},
  setSpeakerData: () => {
    /** */
  },
  acceptSpaceRequest: () => __awaiter(void 0, void 0, void 0, function* () {
    /** */
  }),
  connectSpaceRequest: () => __awaiter(void 0, void 0, void 0, function* () {
    /** */
  }),
  broadcastRaisedHand: () => __awaiter(void 0, void 0, void 0, function* () {
    /** */
  }),
  customSearch: undefined,
  raisedHandInfo: {}
};
const SpaceDataContext = /*#__PURE__*/createContext(initialSpaceDataContextValues);

const initialChatDataContextValues = {
  account: null,
  setAccount: () => {
    /**/
  },
  signer: undefined,
  setSigner: () => {
    /**/
  },
  pgpPrivateKey: '',
  setPgpPrivateKey: () => {
    /**/
  },
  env: Constants.ENV.PROD,
  setEnv: () => {
    /**/
  },
  pushChatSocket: null,
  setPushChatSocket: () => {
    /** */
  },
  isPushChatSocketConnected: false,
  setIsPushChatSocketConnected: () => {
    /** */
  },
  connectedProfile: undefined,
  setConnectedProfile: () => {
    /**  */
  }
};
const ChatDataContext = /*#__PURE__*/createContext(initialChatDataContextValues);

const SupportChatPropsContext = /*#__PURE__*/createContext({});

const SupportChatMainStateContext = /*#__PURE__*/createContext({});

const ChatMainStateContext = /*#__PURE__*/createContext({});

const ChatMainStateContextProvider = ({
  children
}) => {
  const [web3NameList, setWeb3NameList] = useState({});
  const [connectedProfile, setConnectedProfile] = useState(undefined);
  const [chatsFeed, setChatsFeed] = useState({});
  const [requestsFeed, setRequestsFeed] = useState({});
  const [chats, setChats] = useState(new Map());
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [searchedChats, setSearchedChats] = useState(null);
  const [finishedFetchingChats, setFinishedFetchingChats] = useState(false);
  const [finishedFetchingRequests, setFinishedFetchingRequests] = useState(false);

  const setChatFeed = (id, newChatFeed) => {
    //  getData
    // setData({key:LOCAL_STORAGE_KEYS.CHATS,value:n});
    setChatsFeed(prevChatsFeed => Object.assign({
      [id]: newChatFeed
    }, prevChatsFeed));
  };

  const setRequestFeed = (id, newRequestFeed) => {
    setRequestsFeed(prevRequestsFeed => Object.assign({
      [id]: newRequestFeed
    }, prevRequestsFeed));
  };

  const setWeb3Name = (id, web3Name) => {
    setWeb3NameList(prev => Object.assign(Object.assign({}, prev), {
      [id]: web3Name
    }));
  };

  const setChat = (key, newChat) => {
    const tempChats = new Map(chats);
    tempChats.set(key, newChat);
    setChats(tempChats);
  };

  return jsx(ChatMainStateContext.Provider, Object.assign({
    value: {
      chatsFeed,
      requestsFeed,
      setRequestFeed,
      setChatsFeed,
      setRequestsFeed,
      setChatFeed,
      searchedChats,
      connectedProfile,
      setConnectedProfile,
      setSearchedChats,
      chats,
      setChats,
      setChat,
      selectedChatId,
      setSelectedChatId,
      web3NameList,
      setWeb3NameList,
      setWeb3Name,
      finishedFetchingChats,
      finishedFetchingRequests,
      setFinishedFetchingChats,
      setFinishedFetchingRequests
    }
  }, {
    children: children
  }));
};

const ChatAndNotificationPropsContext = /*#__PURE__*/createContext({});

const NotificationMainStateContext = /*#__PURE__*/createContext({});

const NotificationMainStateContextProvider = ({
  children
}) => {
  const [inboxNotifsFeed, setInboxNotifsFeed] = useState({});
  const [allInboxNotifFeed, setAllInboxNotifsFeed] = useState({});
  const [spamNotifsFeed, setSpamNotifsFeed] = useState({});
  const [subscriptionStatus, setSubscriptionStatus] = useState(new Map());
  const [searchedNotifications, setSearchedNotifications] = useState(null);
  const [finishedFetchingInbox, setFinishedFetchingInbox] = useState(false);
  const [finishedFetchingSpam, setFinishedFetchingSpam] = useState(false);

  const setInboxNotifFeed = (id, newInboxNotifFeed) => {
    setInboxNotifsFeed(prevInboxNotifFeed => Object.assign({
      [id]: newInboxNotifFeed
    }, prevInboxNotifFeed));
  };

  const setSpamNotifFeed = (id, newSpamNotifFeed) => {
    setSpamNotifsFeed(prevSpamNotifFeed => Object.assign({
      [id]: newSpamNotifFeed
    }, prevSpamNotifFeed));
  };

  const setChannelSubscriptionStatus = (id, status) => {
    const tempSubscriptionStatus = new Map(subscriptionStatus);
    tempSubscriptionStatus.set(id, status);
    setSubscriptionStatus(tempSubscriptionStatus);
  };

  return jsx(NotificationMainStateContext.Provider, Object.assign({
    value: {
      inboxNotifsFeed,
      setInboxNotifFeed,
      setInboxNotifsFeed,
      spamNotifsFeed,
      allInboxNotifFeed,
      setAllInboxNotifsFeed,
      setSpamNotifFeed,
      setSpamNotifsFeed,
      searchedNotifications,
      setSearchedNotifications,
      subscriptionStatus,
      setChannelSubscriptionStatus,
      setSubscriptionStatus,
      finishedFetchingInbox,
      finishedFetchingSpam,
      setFinishedFetchingInbox,
      setFinishedFetchingSpam
    }
  }, {
    children: children
  }));
};

const PUSH_TABS = {
  CHATS: 'CHATS',
  APP_NOTIFICATIONS: 'APP_NOTIFICATIONS'
};
const SOCKET_TYPE = {
  CHAT: 'chat',
  NOTIFICATION: 'notification'
};
const PUSH_SUB_TABS = {
  REQUESTS: 'REQUESTS',
  SPAM: 'SPAM'
};
const LOCAL_STORAGE_KEYS = {
  CHATS: 'CHATS'
};
const SIDEBAR_PLACEHOLDER_KEYS = {
  CHAT: 'CHAT',
  SEARCH: 'SEARCH',
  NOTIFICATION: 'NOTIFICATION',
  NEW_CHAT: 'NEW_CHAT'
};

const ChatAndNotificationMainContext = /*#__PURE__*/createContext({});

const ChatAndNotificationMainContextProvider = ({
  children
}) => {
  const [activeTab, setTab] = useState(PUSH_TABS.CHATS);
  const [activeSubTab, setSubTab] = useState(null);
  const [newChat, setNewChat] = useState(false);

  const setActiveTab = tabName => {
    setNewChat(false);
    setSubTab(null);
    setTab(tabName);
  };

  const setActiveSubTab = tabName => {
    setNewChat(false);
    setSubTab(tabName);
  };

  return jsx(ChatAndNotificationMainContext.Provider, Object.assign({
    value: {
      newChat,
      setNewChat,
      activeTab,
      setActiveTab,
      setActiveSubTab,
      activeSubTab
    }
  }, {
    children: children
  }));
};

const useSpaceData = () => {
  const context = useContext(SpaceDataContext);

  if (!context) {
    throw new Error('useSpaceData must be used within a SpaceDataProvider');
  }

  return context;
};

const useGetSpaceInfo = spaceId => {
  const {
    getSpaceInfo,
    setSpaceInfo,
    env
  } = useContext(SpaceDataContext);
  const [spaceData, setSpaceDataState] = useState(getSpaceInfo(spaceId));
  useEffect(() => {
    if (!spaceId) {
      return;
    }

    if (getSpaceInfo(spaceId)) {
      setSpaceDataState(getSpaceInfo(spaceId));
      return;
    }

    const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
      try {
        const response = yield PushAPI.space.get({
          spaceId,
          env
        });
        setSpaceInfo(spaceId, response);
        setSpaceDataState(response);
      } catch (error) {
        console.error(error);
      }
    });

    fetchData();
  }, [spaceId]);
  return spaceData;
};

const usePopularSpaces = () => {
  const LIMIT = 10;
  const {
    popularSpaces,
    setPopularSpaces,
    env
  } = useSpaceData();
  const [loading, setLoading] = useState(false);

  const fetchPopularSpaces = () => __awaiter(void 0, void 0, void 0, function* () {
    setLoading(true);

    try {
      const res = yield PushAPI.space.trending({
        page: popularSpaces.currentPage,
        limit: LIMIT,
        env
      });
      const newPopularSpaces = res;

      if (newPopularSpaces.length === 0) {
        setPopularSpaces({
          lastPage: -1
        });
        setLoading(false);
        return;
      }

      if (newPopularSpaces.length > 0) {
        setPopularSpaces({
          apiData: newPopularSpaces
        });
      }
    } catch (error) {
      console.error('Error while fetching popular spaces:', error);
    }

    setLoading(false);
  });

  useEffect(() => {
    fetchPopularSpaces();
  }, [popularSpaces.currentPage]);
  return {
    loading
  };
};

const useMySpaces = account => {
  const LIMIT = 10;
  const {
    mySpaces,
    setMySpaces,
    env
  } = useSpaceData();
  const [loading, setLoading] = useState(false);

  const fetchMySpaces = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!account) return;
    setLoading(true);

    try {
      const res = yield PushAPI.space.spaces({
        account: account,
        page: mySpaces.currentPage,
        limit: LIMIT,
        toDecrypt: false,
        env
      });
      const newMySpaces = res;

      if (newMySpaces.length === 0) {
        setMySpaces({
          lastPage: -1
        });
        setLoading(false);
        return;
      }

      if (newMySpaces.length > 0) {
        setMySpaces({
          apiData: newMySpaces
        });
      }
    } catch (error) {
      console.error('Error while fetching Spaces For You:', error);
    }

    setLoading(false);
  });

  useEffect(() => {
    fetchMySpaces();
  }, [mySpaces.currentPage]);
  return {
    loading
  };
};

const useSpaceRequests = account => {
  const LIMIT = 10;
  const {
    spaceRequests,
    setSpaceRequests,
    env
  } = useSpaceData();
  const [loading, setLoading] = useState(false);

  const fetchSpaceRequests = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!account) return;
    setLoading(true);

    try {
      const res = yield PushAPI.space.requests({
        account: account,
        page: spaceRequests.currentPage,
        limit: LIMIT,
        toDecrypt: false,
        env
      });
      const newSpaceRequests = res;

      if (newSpaceRequests.length === 0) {
        setSpaceRequests({
          lastPage: -1
        });
        setLoading(false);
        return;
      }

      if (newSpaceRequests.length > 0) {
        setSpaceRequests({
          apiData: newSpaceRequests
        });
      }
    } catch (error) {
      console.error('Error while fetching spaces requests:', error);
    }

    setLoading(false);
  });

  useEffect(() => {
    fetchSpaceRequests();
  }, [spaceRequests.currentPage]);
  return {
    loading
  };
};

const useFeedScroll = dep => {
  const ref = React__default.useRef(null);
  React__default.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
  }, []);
  return ref;
};

var aCallable$1 = aCallable$a;
var toObject$1 = toObject$7;
var IndexedObject = indexedObject;
var lengthOfArrayLike$2 = lengthOfArrayLike$5;

var $TypeError$1 = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable$1(callbackfn);
    var O = toObject$1(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike$2(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw $TypeError$1('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

var arrayReduce = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};

var fails$3 = fails$q;

var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$3(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

var $$6 = _export;
var $reduce = arrayReduce.left;
var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;
var CHROME_VERSION = engineV8Version;
var IS_NODE = engineIsNode;

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED$2 = CHROME_BUG || !arrayMethodIsStrict$1('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$$6({ target: 'Array', proto: true, forced: FORCED$2 }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});

var $$5 = _export;
var uncurryThis$4 = functionUncurryThisClause;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var toLength = toLength$4;
var toString$2 = toString$b;
var notARegExp = notARegexp;
var requireObjectCoercible$1 = requireObjectCoercible$9;
var correctIsRegExpLogic = correctIsRegexpLogic;

// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var nativeStartsWith = uncurryThis$4(''.startsWith);
var stringSlice$1 = uncurryThis$4(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$$5({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString$2(requireObjectCoercible$1(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString$2(searchString);
    return nativeStartsWith
      ? nativeStartsWith(that, search, index)
      : stringSlice$1(that, index, index + search.length) === search;
  }
});

/**
 *
 * @param wallet nft:eip155:nftChainId:nftContractAddress:nftTokenId
 * @returns
 */

const isValidCAIP10NFTAddress = wallet => {
  try {
    const walletComponent = wallet.split(':');
    return (walletComponent.length === 5 || walletComponent.length === 6) && walletComponent[0].toLowerCase() === 'nft' && !isNaN(Number(walletComponent[4])) && Number(walletComponent[4]) > 0 && !isNaN(Number(walletComponent[2])) && Number(walletComponent[2]) > 0 && ethers.utils.isAddress(walletComponent[3]) && walletComponent[1] === 'eip155';
  } catch (err) {
    return false;
  }
};
const walletToPCAIP10 = account => {
  if (account) {
    if (isValidCAIP10NFTAddress(account) || account.includes('eip155:')) {
      return account;
    }

    return 'eip155:' + account;
  }

  return account;
};
const pCAIP10ToWallet = wallet => {
  if (wallet) wallet = wallet.replace('eip155:', '');
  return wallet;
};
const resolveNewEns = (address, provider) => __awaiter(void 0, void 0, void 0, function* () {
  const walletLowercase = pCAIP10ToWallet(address).toLowerCase();
  const checksumWallet = ethers.utils.getAddress(walletLowercase);
  let result; // let provider = ethers.getDefaultProvider('mainnet');
  // if (
  //   window.location.hostname == 'app.push.org' ||
  //   window.location.hostname == 'staging.push.org' ||
  //   window.location.hostname == 'dev.push.org' ||
  //   window.location.hostname == 'alpha.push.org' ||
  //   window.location.hostname == 'w2w.push.org'
  // ) {
  //   provider = new ethers.providers.InfuraProvider(
  //     'mainnet',
  //     appConfig.infuraAPIKey
  //   );
  // }

  yield provider.lookupAddress(checksumWallet).then(ens => {
    if (ens) {
      result = ens;
      return ens;
    } else {
      result = null;
      return null;
    }
  });
  return result;
});
const isPCAIP = id => {
  const prefix = `eip155:`;
  return id === null || id === void 0 ? void 0 : id.startsWith(prefix);
};
const getAddressFromSigner = signer => __awaiter(void 0, void 0, void 0, function* () {
  var _a;

  if ('getAddress' in signer) {
    return yield signer.getAddress();
  } else {
    return (_a = signer.account['address']) !== null && _a !== void 0 ? _a : '';
  }
});

const setData = ({
  chatId,
  value
}) => {
  localStorage.setItem(chatId, JSON.stringify(value));
}; //add return type

const getData = key => {
  const chatJson = localStorage.getItem(key);
  const chat = chatJson ? JSON.parse(chatJson) : null;
  return chat;
};
const getPfp = ({
  account,
  env
}) => __awaiter(void 0, void 0, void 0, function* () {
  const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      const response = yield PushAPI.user.get({
        account: account,
        env: env
      });
      const pfp = response.profile.picture ? response.profile.picture : '';
      setPfp({
        account,
        value: pfp
      });
      return pfp;
    } catch (err) {
      console.log(err.message);
      return '';
    }
  });

  const pfp = localStorage.getItem(account);

  if (pfp === null) {
    return fetchData();
  } else {
    return pfp;
  }
});
const setPfp = ({
  account,
  value
}) => {
  localStorage.setItem(account, value);
};
const setAccessControl = (chatId, toRemove) => {
  if (toRemove) {
    localStorage.removeItem(chatId);
  } else {
    const timestamp = new Date().getTime();
    localStorage.setItem(chatId, JSON.stringify(timestamp));
  }
};

const handleOnChatIconClick = ({
  isModalOpen,
  setIsModalOpen
}) => {
  setIsModalOpen(!isModalOpen);
};
const createUserIfNecessary = options => __awaiter(void 0, void 0, void 0, function* () {
  const {
    pushUser
  } = options || {};
  let connectedUser;

  if (pushUser) {
    connectedUser = yield pushUser.info();
    return Object.assign(Object.assign({}, connectedUser), {
      privateKey: connectedUser.encryptedPrivateKey
    });
  }

  return;
});
const getChats = options => __awaiter(void 0, void 0, void 0, function* () {
  var _a;

  const {
    account,
    pgpPrivateKey,
    supportAddress,
    pushUser,
    threadHash = null,
    limit = 40,
    env = Constants.ENV.PROD
  } = options || {};
  const chats = yield pushUser === null || pushUser === void 0 ? void 0 : pushUser.chat.history(supportAddress);
  const lastThreadHash = (_a = chats[chats.length - 1]) === null || _a === void 0 ? void 0 : _a.link;
  const lastListPresent = chats.length > 0 ? true : false;
  return {
    chatsResponse: chats,
    lastThreadHash,
    lastListPresent
  };
});
const copyToClipboard = address => {
  if (navigator && navigator.clipboard) {
    navigator.clipboard.writeText(address);
  } else {
    const el = document.createElement('textarea');
    el.value = address;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
};
const getDefaultFeedObject = ({
  user,
  groupInformation
}) => {
  const feed = {
    msg: {
      messageContent: '',
      timestamp: 0,
      messageType: '',
      signature: '',
      sigType: '',
      link: null,
      encType: '',
      encryptedSecret: '',
      fromDID: '',
      fromCAIP10: '',
      toDID: '',
      toCAIP10: ''
    },
    wallets: groupInformation ? null : user.wallets,
    did: groupInformation ? null : user.did,
    threadhash: null,
    profilePicture: groupInformation ? groupInformation.groupImage : user === null || user === void 0 ? void 0 : user.profile.picture,
    name: null,
    about: groupInformation ? null : user.about,
    intent: null,
    intentSentBy: null,
    intentTimestamp: new Date(),
    publicKey: groupInformation ? null : user.publicKey,
    combinedDID: '',
    cid: '',
    groupInformation: groupInformation !== null && groupInformation !== void 0 ? groupInformation : undefined
  };
  return feed;
};
const checkIfIntent = ({
  chat,
  account
}) => {
  if (account) {
    if (Object.keys(chat || {}).length && chat.combinedDID.toLowerCase().includes(walletToPCAIP10(account).toLowerCase())) {
      if (chat.intent && chat.intent.toLowerCase().includes(walletToPCAIP10(account).toLowerCase())) return false;else return true;
    }
  }

  return false;
};
const checkIfUnread = (chatId, chat) => {
  const tempChat = getData(chatId);
  if (tempChat && (tempChat === null || tempChat === void 0 ? void 0 : tempChat.msg) && tempChat.msg.timestamp < chat.msg.timestamp) return true;
  return false;
};
const getChatId = ({
  msg,
  account
}) => {
  if (pCAIP10ToWallet(msg.fromDID).toLowerCase() === account.toLowerCase()) {
    return msg.toDID;
  }

  return !isPCAIP(msg.toDID) ? msg.toDID : msg.fromDID;
};
const appendUniqueMessages = (parentList, newlist, infront) => {
  const uniqueMap = {};
  const appendedArray = infront ? [...newlist, ...parentList.messages] : [...parentList.messages, ...newlist];
  const newMessageList = Object.values(appendedArray.reduce((uniqueMap, message) => {
    if (message.timestamp && !uniqueMap[message.timestamp]) {
      uniqueMap[message.timestamp] = message;
    }

    return uniqueMap;
  }, uniqueMap));
  return newMessageList;
};
const checkIfSameChat = (msg, account, chatId) => {
  var _a, _b, _c, _d, _e;

  if (ethers.utils.isAddress(chatId)) {
    chatId = walletToPCAIP10(chatId);

    if (Object.keys(msg || {}).length && (chatId.toLowerCase() === ((_a = msg.fromCAIP10) === null || _a === void 0 ? void 0 : _a.toLowerCase()) && walletToPCAIP10(account).toLowerCase() === ((_b = msg.toCAIP10) === null || _b === void 0 ? void 0 : _b.toLowerCase()) || chatId.toLowerCase() === ((_c = msg.toCAIP10) === null || _c === void 0 ? void 0 : _c.toLowerCase()) && walletToPCAIP10(account).toLowerCase() === ((_d = msg.fromCAIP10) === null || _d === void 0 ? void 0 : _d.toLowerCase()))) {
      return true;
    }
  } else {
    if (Object.keys(msg || {}).length && chatId.toLowerCase() === ((_e = msg.toCAIP10) === null || _e === void 0 ? void 0 : _e.toLowerCase())) {
      return true;
    }
  }

  return false;
};

const getUdResolver = env => {
  const l1ChainId = allowedNetworks[env].includes(1) ? 1 : 5;
  const l2ChainId = allowedNetworks[env].includes(137) ? 137 : 80001; // ToDo: Enable for sepolia chainId once UD supports it
  // const l1ChainId = appConfig.allowedNetworks.includes(1) ? 1 : 11155111;

  return Resolution.fromEthersProvider({
    uns: {
      locations: {
        Layer1: {
          network: "mainnet",
          provider: new ethers.providers.InfuraProvider(l1ChainId, InfuraAPIKey)
        },
        Layer2: {
          network: NETWORK_DETAILS[l2ChainId].network,
          provider: new ethers.providers.InfuraProvider(l2ChainId, InfuraAPIKey)
        }
      }
    }
  });
};

const displayDefaultUser = ({
  caip10
}) => {
  const userCreated = {
    did: caip10,
    wallets: caip10,
    publicKey: '',
    profilePicture: ProfilePicture,
    encryptedPrivateKey: '',
    encryptionType: '',
    signature: '',
    sigType: '',
    encryptedPassword: null,
    about: null,
    name: null,
    numMsg: 1,
    allowedNumMsg: 100,
    nftOwner: null,
    linkedListHash: null,
    msgSent: 0,
    maxMsgPersisted: 0,
    profile: {
      name: null,
      desc: null,
      picture: ProfilePicture,
      profileVerificationProof: null,
      blockedUsersList: null
    },
    verificationProof: ''
  };
  return userCreated;
};

const getObjectsWithMatchingKeys = (obj, substring, web3NameList) => {
  const matchedObjects = {};

  if (substring) {
    Object.keys(obj).forEach(key => {
      var _a;

      if (key.toLowerCase().includes(substring.toLowerCase())) {
        matchedObjects[key] = obj[key];
      } else if (obj[key].name) {
        if (((_a = obj[key].name) === null || _a === void 0 ? void 0 : _a.toLowerCase()).includes(substring.toLowerCase())) {
          matchedObjects[key] = obj[key];
        }
      } else {
        Object.keys(web3NameList).forEach(key => {
          if (web3NameList[key].toLowerCase().includes(substring.toLowerCase())) {
            if (obj[walletToPCAIP10(key)]) matchedObjects[walletToPCAIP10(key)] = obj[walletToPCAIP10(key)];
          }
        });
      }
    });
  }

  return matchedObjects;
};
const getNewChatUser = ({
  searchText,
  fetchChatProfile,
  env
}) => __awaiter(void 0, void 0, void 0, function* () {
  let chatProfile;
  let address = null;
  address = yield getAddress(searchText, env); // const provider = new ethers.providers.InfuraProvider();
  // address = await provider.resolveName(searchText);
  // if (!address) {
  //   address = await getAddress(searchText, env);
  // }

  if (address) {
    chatProfile = yield fetchChatProfile({
      profileId: address,
      env
    });
    if (!chatProfile) chatProfile = displayDefaultUser({
      caip10: walletToPCAIP10(address)
    });
    return chatProfile;
  }

  return;
});
const getAddress = (searchText, env) => __awaiter(void 0, void 0, void 0, function* () {
  const udResolver = getUdResolver(env);
  const provider = new ethers.providers.InfuraProvider(CoreContractChainId[env], InfuraAPIKey);
  let address = null;

  if (searchText.includes('.')) {
    try {
      address = yield udResolver.owner(searchText);
    } catch (err) {
      console.log(err);
    }

    if (!address) {
      try {
        address = yield provider.resolveName(searchText);
      } catch (err) {
        console.log(err);
      }
    }

    return address || null;
  } else if (yield ethers.utils.isAddress(pCAIP10ToWallet(searchText))) {
    return searchText;
  } else {
    return null;
  }
});
const getSearchedNotificationsList = (substring, obj) => {
  const matchedObjects = {};

  if (substring) {
    Object.keys(obj).forEach(key => {
      if (obj[key].app.toLowerCase().includes(substring.toLowerCase())) {
        matchedObjects[key] = obj[key];
      } else {
        if (obj[key].title.toLowerCase().includes(substring.toLowerCase())) {
          matchedObjects[key] = obj[key];
        }
      }
    });
  }

  return matchedObjects;
};

const dateToFromNowDaily = timestamp => {
  const timestampDate = moment(timestamp).calendar(null, {
    lastWeek: ' dddd',
    lastDay: '[Yesterday]',
    sameDay: '[Today]',
    nextWeek: 'dddd',
    sameElse: 'LL'
  });
  return timestampDate;
};

var uncurryThis$3 = functionUncurryThis;

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
var thisNumberValue$1 = uncurryThis$3(1.0.valueOf);

var toIntegerOrInfinity$1 = toIntegerOrInfinity$6;
var toString$1 = toString$b;
var requireObjectCoercible = requireObjectCoercible$9;

var $RangeError$1 = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
var stringRepeat = function repeat(count) {
  var str = toString$1(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity$1(count);
  if (n < 0 || n == Infinity) throw $RangeError$1('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};

var $$4 = _export;
var uncurryThis$2 = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$6;
var thisNumberValue = thisNumberValue$1;
var $repeat = stringRepeat;
var fails$2 = fails$q;

var $RangeError = RangeError;
var $String = String;
var floor$1 = Math.floor;
var repeat = uncurryThis$2($repeat);
var stringSlice = uncurryThis$2(''.slice);
var nativeToFixed = uncurryThis$2(1.0.toFixed);

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor$1(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor$1(c / n);
    c = (c % n) * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = $String(data[index]);
      s = s === '' ? t : s + repeat('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED$1 = fails$2(function () {
  return nativeToFixed(0.00008, 3) !== '0.000' ||
    nativeToFixed(0.9, 0) !== '1' ||
    nativeToFixed(1.255, 2) !== '1.25' ||
    nativeToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
}) || !fails$2(function () {
  // V8 ~ Android 4.3-
  nativeToFixed({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$$4({ target: 'Number', proto: true, forced: FORCED$1 }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toIntegerOrInfinity(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
    if (fractDigits < 0 || fractDigits > 20) throw $RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return $String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat('0', fractDigits - k) + result
        : stringSlice(result, 0, k - fractDigits) + '.' + stringSlice(result, k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});

const shortenText = (text, len, _inBetween = false) => {
  if ((text === null || text === void 0 ? void 0 : text.length) > len) return `${text.substring(0, len)}...${_inBetween ? text.substring(text.length - len) : ''}`;else return text;
};
const shortenNumber = (val, limit) => {
  if (val >= limit) return `${limit}+`;
  return val;
};
const formatFileSize = size => {
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return `${(size / Math.pow(1024, i)).toFixed(1)} ${['B', 'KB', 'MB', 'GB', 'TB'][i]}`;
};

const formatDate = date => {
  const formattedDate = moment(date).format('Do MMM [at] h:mm A');
  return formattedDate;
};

const NOTIFICATION_SOCKET_TYPE = 'notification';
const useSpaceNotificationSocket = ({
  account,
  acceptSpaceRequest,
  connectSpaceRequest,
  broadcastRaisedHand,
  env: _env = ENV.PROD
}) => {
  const [notificationSocket, setNotificationSocket] = useState(null);
  const [isNotificationSocketConnected, setIsNotificationSocketConnected] = useState(false);
  const addSocketEvents = useCallback(() => {
    notificationSocket === null || notificationSocket === void 0 ? void 0 : notificationSocket.on(EVENTS.CONNECT, () => {
      setIsNotificationSocketConnected(true);
    });
    notificationSocket === null || notificationSocket === void 0 ? void 0 : notificationSocket.on(EVENTS.DISCONNECT, () => {
      setIsNotificationSocketConnected(false);
    });
    notificationSocket === null || notificationSocket === void 0 ? void 0 : notificationSocket.on(EVENTS.USER_FEEDS, feedItem => {
      var _a, _b, _c, _d;

      const {
        payload
      } = feedItem;
      console.log('USER FEEDS NOTIFICATION RECEIVED', (_b = (_a = payload === null || payload === void 0 ? void 0 : payload.data) === null || _a === void 0 ? void 0 : _a.additionalMeta) === null || _b === void 0 ? void 0 : _b.type, `${PushAPI.payloads.ADDITIONAL_META_TYPE.PUSH_SPACE}+1`);

      if (((_d = (_c = payload === null || payload === void 0 ? void 0 : payload.data) === null || _c === void 0 ? void 0 : _c.additionalMeta) === null || _d === void 0 ? void 0 : _d.type) === `${PushAPI.payloads.ADDITIONAL_META_TYPE.PUSH_SPACE}+1`) {
        const receivedSpaceMetaData = JSON.parse(payload.data.additionalMeta.data);
        const {
          callDetails,
          status
        } = receivedSpaceMetaData;
        console.log('RECEIVED ADDITIONAL META DATA', receivedSpaceMetaData);

        if (status === PushAPI.VideoCallStatus.INITIALIZED) {
          if ((callDetails === null || callDetails === void 0 ? void 0 : callDetails.type) === PushAPI.payloads.SPACE_REQUEST_TYPE.JOIN_SPEAKER) {
            console.log('ON HOST, ACCEPTING REQUEST OF AN ADDED SPEAKER TO JOIN'); // TODO: see if check for speaker is req

            acceptSpaceRequest(receivedSpaceMetaData);
          }

          if ((callDetails === null || callDetails === void 0 ? void 0 : callDetails.type) === PushAPI.payloads.SPACE_REQUEST_TYPE.ESTABLISH_MESH) {
            acceptSpaceRequest(receivedSpaceMetaData);
          }

          if ((callDetails === null || callDetails === void 0 ? void 0 : callDetails.type) === PushAPI.payloads.SPACE_REQUEST_TYPE.REQUEST_TO_PROMOTE) {
            broadcastRaisedHand(receivedSpaceMetaData);
          }
        }

        if (status === PushAPI.VideoCallStatus.RECEIVED) {
          connectSpaceRequest(receivedSpaceMetaData);
        }

        if (status === PushAPI.VideoCallStatus.DISCONNECTED) {
          if ((callDetails === null || callDetails === void 0 ? void 0 : callDetails.type) === PushAPI.payloads.SPACE_DISCONNECT_TYPE.LEAVE) ;

          if ((callDetails === null || callDetails === void 0 ? void 0 : callDetails.type) === PushAPI.payloads.SPACE_DISCONNECT_TYPE.STOP) ;
        }
      }
    });
  }, [acceptSpaceRequest, connectSpaceRequest, notificationSocket]);
  const removeSocketEvents = useCallback(() => {
    notificationSocket === null || notificationSocket === void 0 ? void 0 : notificationSocket.off(EVENTS.CONNECT);
    notificationSocket === null || notificationSocket === void 0 ? void 0 : notificationSocket.off(EVENTS.DISCONNECT);
    notificationSocket === null || notificationSocket === void 0 ? void 0 : notificationSocket.off(EVENTS.USER_FEEDS);
  }, [notificationSocket]);
  useEffect(() => {
    if (notificationSocket) {
      addSocketEvents();
    }

    return () => {
      if (notificationSocket) {
        removeSocketEvents();
      }
    };
  }, [addSocketEvents, notificationSocket, removeSocketEvents]);
  /**
   * Whenever the requisite params to create a connection object change
   *  - disconnect the old connection
   *  - create a new connection object
   */

  useEffect(() => {
    if (account) {
      if (notificationSocket) {
        // console.log('=================>>> disconnection in the hook');
        notificationSocket === null || notificationSocket === void 0 ? void 0 : notificationSocket.disconnect();
      }

      const main = () => __awaiter(void 0, void 0, void 0, function* () {
        const connectionObject = createSocketConnection({
          user: pCAIP10ToWallet(account),
          env: _env,
          socketType: NOTIFICATION_SOCKET_TYPE,
          socketOptions: {
            autoConnect: true,
            reconnectionAttempts: 3
          }
        });
        console.warn('new connection object: ', connectionObject);
        setNotificationSocket(connectionObject);
      });

      main().catch(err => console.error(err));
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [account, _env]);
  return {
    notificationSocket,
    isNotificationSocketConnected
  };
};

const ACCOUNT_START_TYPE = {
  NFT: 'nft',
  GENERAL: 'eip155'
};
const isNftProfile = account => {
  return account && account.split(':')[0] === ACCOUNT_START_TYPE.NFT;
};
const spaceChainId = (account, env) => {
  if (account && isNftProfile(account)) return Number(account.split(':')[2]);
  return env === ENV.PROD ? 1 : 5; // Ethereum Mainnet Id
};
const isAccountsEqual = (account, userProfileWallet) => {
  if (!account || !userProfileWallet) {
    return false;
  }

  if (isNftProfile(userProfileWallet)) {
    return userProfileWallet.toUpperCase().includes(account.toUpperCase());
  }

  return account.toUpperCase() === userProfileWallet.toUpperCase();
};

const SPACE_SOCKET_TYPE = 'chat';
const usePushSpaceSocket = ({
  account,
  env: _env = ENV.PROD
}) => {
  const {
    spaceRequests,
    setSpaceRequests,
    popularSpaces,
    setPopularSpaces,
    mySpaces,
    setMySpaces,
    setSpaceInfo,
    pushSpaceSocket,
    setPushSpaceSocket,
    isPushSDKSocketConnected,
    setIsPushSDKSocketConnected,
    spacesObjectRef
  } = useSpaceData();
  const addSocketEvents = useCallback(() => {
    console.log('addSocketEvents');
    pushSpaceSocket === null || pushSpaceSocket === void 0 ? void 0 : pushSpaceSocket.on(EVENTS.CONNECT, () => {
      setIsPushSDKSocketConnected(true);
    });
    pushSpaceSocket === null || pushSpaceSocket === void 0 ? void 0 : pushSpaceSocket.on(EVENTS.DISCONNECT, reason => {
      // console.log("space socket disconnected", reason);
      setIsPushSDKSocketConnected(false);
    }); // pushSpaceSocket?.on(EVENTS.CHAT_RECEIVED_MESSAGE, async (message: any) => {
    //   console.log('MESSAGE RECIEVED', message);
    //   if (message?.messageType === 'META') {
    //     // this is to update the liveSpaceData state
    //     await spacesObjectRef?.current?.onReceiveMetaMessage?.({
    //       recievedMetaMessage: message,
    //     });
    //   }
    // });

    pushSpaceSocket === null || pushSpaceSocket === void 0 ? void 0 : pushSpaceSocket.on('SPACES_MESSAGES', message => __awaiter(void 0, void 0, void 0, function* () {
      var _a, _b, _c, _d;

      console.log('SPACES_MESSAGES RECEIVED', message);

      if ((message === null || message === void 0 ? void 0 : message.messageCategory) === 'Request' || (message === null || message === void 0 ? void 0 : message.messageCategory) === 'Approve') {
        /*
          - Will be executed on host's end of a live space
          - When a listener joins this fires a meta message telling everyone the same
          */
        yield (_b = (_a = spacesObjectRef === null || spacesObjectRef === void 0 ? void 0 : spacesObjectRef.current) === null || _a === void 0 ? void 0 : _a.onJoinListener) === null || _b === void 0 ? void 0 : _b.call(_a, {
          receivedAddress: message === null || message === void 0 ? void 0 : message.fromCAIP10
        });
      }

      if ((message === null || message === void 0 ? void 0 : message.messageCategory) === 'Chat' && (message === null || message === void 0 ? void 0 : message.messageType) === 'Meta') {
        // this is to update the liveSpaceData state
        (_d = (_c = spacesObjectRef === null || spacesObjectRef === void 0 ? void 0 : spacesObjectRef.current) === null || _c === void 0 ? void 0 : _c.onReceiveMetaMessage) === null || _d === void 0 ? void 0 : _d.call(_c, {
          receivedMetaMessage: message
        });
      }
    }));
    pushSpaceSocket === null || pushSpaceSocket === void 0 ? void 0 : pushSpaceSocket.on('SPACES', spaceInfo => __awaiter(void 0, void 0, void 0, function* () {
      var _e, _f, _g, _h, _j, _k, _l, _m;

      console.log('SPACES EVENT RECEIVED', spaceInfo);
      /* TODO: In future, store all space info in SpaceInfo state itself, and mySpaces, popularSpaces, requests only store spaceId
        so as to only update spaceInfo once and it should reflect at every place*/

      setSpaceInfo(spaceInfo.spaceId, spaceInfo);
      const isSpaceInvite = (_e = spaceInfo === null || spaceInfo === void 0 ? void 0 : spaceInfo.pendingMembers) === null || _e === void 0 ? void 0 : _e.some(member => isAccountsEqual(account, member.wallet));

      if (isSpaceInvite) {
        const isInInvites = (_g = (_f = spaceRequests === null || spaceRequests === void 0 ? void 0 : spaceRequests.apiData) === null || _f === void 0 ? void 0 : _f.some(invite => invite.spaceId === spaceInfo.spaceId)) !== null && _g !== void 0 ? _g : false;

        if (isInInvites) {
          const updatedRequests = (_h = spaceRequests === null || spaceRequests === void 0 ? void 0 : spaceRequests.apiData) === null || _h === void 0 ? void 0 : _h.map(item => {
            if (item.spaceId === spaceInfo.spaceId) {
              return Object.assign(Object.assign({}, item), {
                spaceInformation: spaceInfo
              });
            }

            return item;
          });
          setSpaceRequests({
            apiData: updatedRequests
          });
        } else {
          const spaceFeed = yield PushAPI.space.space({
            account: account,
            env: _env,
            recipient: spaceInfo.spaceId,
            toDecrypt: false
          });
          const updatedRequests = [spaceFeed, ...((spaceRequests === null || spaceRequests === void 0 ? void 0 : spaceRequests.apiData) || [])];
          setSpaceRequests({
            apiData: updatedRequests
          });
        }
      } else {
        const isInMySpaces = (_k = (_j = mySpaces === null || mySpaces === void 0 ? void 0 : mySpaces.apiData) === null || _j === void 0 ? void 0 : _j.some(invite => invite.spaceId === spaceInfo.spaceId)) !== null && _k !== void 0 ? _k : false;

        if (isInMySpaces) {
          const updatedMySpaces = (_l = mySpaces === null || mySpaces === void 0 ? void 0 : mySpaces.apiData) === null || _l === void 0 ? void 0 : _l.map(item => {
            if (item.spaceId === spaceInfo.spaceId) {
              return Object.assign(Object.assign({}, item), {
                spaceInformation: spaceInfo
              });
            }

            return item;
          });
          setMySpaces({
            apiData: updatedMySpaces
          });
        } else {
          const spaceFeed = yield PushAPI.space.space({
            account: account,
            env: _env,
            recipient: spaceInfo.spaceId,
            toDecrypt: false
          });
          const updatedMySpaces = [spaceFeed, ...((mySpaces === null || mySpaces === void 0 ? void 0 : mySpaces.apiData) || [])];
          setMySpaces({
            apiData: updatedMySpaces
          });
        }
      }

      const updatedPopularSpaces = (_m = popularSpaces === null || popularSpaces === void 0 ? void 0 : popularSpaces.apiData) === null || _m === void 0 ? void 0 : _m.map(item => {
        if (item.spaceId === spaceInfo.spaceId) {
          return Object.assign(Object.assign({}, item), {
            spaceInformation: spaceInfo
          });
        }

        return item;
      });
      setPopularSpaces({
        apiData: updatedPopularSpaces
      });
    })); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pushSpaceSocket, spaceRequests, popularSpaces, mySpaces, setSpaceInfo, setPopularSpaces, account, setSpaceRequests, _env, setMySpaces]);
  const removeSocketEvents = useCallback(() => {
    pushSpaceSocket === null || pushSpaceSocket === void 0 ? void 0 : pushSpaceSocket.off(EVENTS.CONNECT);
    pushSpaceSocket === null || pushSpaceSocket === void 0 ? void 0 : pushSpaceSocket.off(EVENTS.DISCONNECT);
    pushSpaceSocket === null || pushSpaceSocket === void 0 ? void 0 : pushSpaceSocket.off(EVENTS.CHAT_GROUPS);
    pushSpaceSocket === null || pushSpaceSocket === void 0 ? void 0 : pushSpaceSocket.off(EVENTS.CHAT_RECEIVED_MESSAGE);
  }, [pushSpaceSocket]);
  useEffect(() => {
    if (pushSpaceSocket) {
      addSocketEvents();
    }

    return () => {
      if (pushSpaceSocket) {
        removeSocketEvents();
      }
    };
  }, [pushSpaceSocket]);
  /**
   * Whenever the required params to create a connection object change
   *  - disconnect the old connection
   *  - create a new connection object
   */

  useEffect(() => {
    if (account) {
      if (pushSpaceSocket) {
        // console.log('=================>>> disconnection in the hook');
        pushSpaceSocket === null || pushSpaceSocket === void 0 ? void 0 : pushSpaceSocket.disconnect();
      }

      const main = () => __awaiter(void 0, void 0, void 0, function* () {
        const connectionObject = createSocketConnection({
          user: account,
          env: _env,
          socketType: SPACE_SOCKET_TYPE,
          socketOptions: {
            autoConnect: true,
            reconnectionAttempts: 3
          }
        });
        console.warn('new connection object: ', connectionObject);
        setPushSpaceSocket(connectionObject);
      });

      main().catch(err => console.error(err));
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [account, _env]);
  useEffect(() => {
    console.log('isPushSDKSocketConnected', isPushSDKSocketConnected);
  }, [isPushSDKSocketConnected]);
  return {
    pushSpaceSocket,
    isPushSDKSocketConnected
  };
};

const useSDKSocket = ({
  account,
  env: _env = ENV.PROD,
  socketType: _socketType = 'chat',
  apiKey,
  pushUser,
  supportAddress,
  signer
}) => {
  // const [epnsSDKSocket, setEpnsSDKSocket] = useState<any>(null);
  const [messagesSinceLastConnection, setMessagesSinceLastConnection] = useState('');
  const [isSDKSocketConnected, setIsSDKSocketConnected] = useState(false);
  const [stream, setStream] = useState(null);

  const addSocketEvents = () => __awaiter(void 0, void 0, void 0, function* () {
    console.warn('\n--> addChatSocketEvents');
    stream.on(CONSTANTS.STREAM.CONNECT, err => {
      console.log('CONNECTED: ', err);
      setIsSDKSocketConnected(true);
    });
    yield stream.connect();
    stream.on(CONSTANTS.STREAM.DISCONNECT, err => {
      console.log('DIS-CONNECTED: ', err);
      setIsSDKSocketConnected(false);
    });
    console.log('\t-->will attach eachMessage event now');
    stream.on(CONSTANTS.STREAM.CHAT, message => {
      // do stuff with data
      setMessagesSinceLastConnection(chats => {
        return Object.assign({}, message);
      }); // stream.disconnect();
    });
  });

  const removeSocketEvents = () => {
    stream === null || stream === void 0 ? void 0 : stream.disconnect();
  };

  useEffect(() => {
    if (stream) {
      addSocketEvents();
    }

    return () => {
      if (stream) {
        removeSocketEvents();
      }
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stream]);
  /**
   * Whenever the requisite params to create a connection object change
   *  - disconnect the old connection
   *  - create a new connection object
   */

  useEffect(() => {
    if (account) {
      if (!stream) {
        // console.log('=================>>> disconnection in the hook');
        stream === null || stream === void 0 ? void 0 : stream.disconnect();
      }

      const main = () => __awaiter(void 0, void 0, void 0, function* () {
        const newstream = yield pushUser.initStream([CONSTANTS.STREAM.CHAT], {});
        console.warn('new connection object: ', newstream);
        setStream(newstream); // setEpnsSDKSocket(connectionObject);
      });

      main().catch(err => console.log(''));
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [account, _env, pushUser, supportAddress, signer, isSDKSocketConnected]);
  return {
    stream,
    isSDKSocketConnected,
    messagesSinceLastConnection
  };
};

var classof = classofRaw$2;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$1 = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};

var $$3 = _export;
var uncurryThis$1 = functionUncurryThis;
var isArray = isArray$1;

var nativeReverse = uncurryThis$1([].reverse);
var test$1 = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$$3({ target: 'Array', proto: true, forced: String(test$1) === String(test$1.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray(this)) this.length = this.length;
    return nativeReverse(this);
  }
});

const getEnsName = (provider, checksumWallet, setWeb3Name) => __awaiter(void 0, void 0, void 0, function* () {
  let ensName = null;
  provider.lookupAddress(checksumWallet).then(ens => __awaiter(void 0, void 0, void 0, function* () {
    if (ens) {
      ensName = ens;
      setWeb3Name(checksumWallet.toLowerCase(), ensName);
    } else {
      ensName = null;
    }
  }));
  return ensName;
});

const getUnstoppableName = (checksumWallet, setWeb3Name, env) => __awaiter(void 0, void 0, void 0, function* () {
  // Unstoppable Domains resolution library
  const udResolver = getUdResolver(env); // attempt reverse resolution on provided address

  let udName = yield udResolver.reverse(checksumWallet);

  if (udName) {
    setWeb3Name(checksumWallet.toLowerCase(), udName);
  } else {
    udName = null;
  }

  return udName;
});

function useResolveWeb3Name(address, env) {
  const {
    web3NameList,
    setWeb3Name,
    selectedChatId
  } = useContext(ChatMainStateContext);
  useEffect(() => {
    (() => __awaiter(this, void 0, void 0, function* () {
      var _a;

      const provider = new ethers.providers.InfuraProvider(CoreContractChainId[env], InfuraAPIKey);

      if (address) {
        const walletLowercase = (_a = pCAIP10ToWallet(address)) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        const checksumWallet = ethers.utils.getAddress(walletLowercase);

        if (ethers.utils.isAddress(checksumWallet)) {
          try {
            // attempt ENS name resolution first, with a fallback to Unstoppable Domains if
            // a value is not found from ENS.
            Object.keys(web3NameList).forEach(element => {
              if (web3NameList[checksumWallet.toLowerCase()]) {
                return;
              }
            });
            (yield getUnstoppableName(checksumWallet, setWeb3Name, env)) || (yield getEnsName(provider, checksumWallet, setWeb3Name));
          } catch (e) {
            console.error(e);
          }
        }
      }
    }))();
  }, [address, selectedChatId]);
}

const useChatData = () => {
  const context = useContext(ChatDataContext);

  if (!context) {
    throw new Error('useSpaceData must be used within a ChatDataProvider');
  }

  return context;
};

const useFetchHistoryMessages$1 = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const {
    account,
    env,
    pgpPrivateKey
  } = useChatData();
  const historyMessages = useCallback(({
    threadHash,
    limit: _limit = 10
  }) => __awaiter(void 0, void 0, void 0, function* () {
    setLoading(true);

    try {
      const chatHistory = yield PushAPI.chat.history({
        threadhash: threadHash,
        account: account ? account : '0xeeE5A266D7cD954bE3Eb99062172E7071E664023',
        toDecrypt: pgpPrivateKey ? true : false,
        pgpPrivateKey: String(pgpPrivateKey),
        limit: _limit,
        env: env
      });
      chatHistory.reverse();
      return chatHistory;
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
      return;
    } finally {
      setLoading(false);
    }
  }), [pgpPrivateKey, account, env]);
  return {
    historyMessages,
    error,
    loading
  };
};

const useChatProfile = () => {
  const {
    env
  } = useChatData();
  const fetchUserChatProfile = useCallback(({
    profileId
  }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
      const profile = yield PushAPI.user.get({
        env: env,
        account: profileId
      });
      return profile;
    } catch (error) {
      console.log(error);
      return;
    }
  }), [env]);
  return {
    fetchUserChatProfile
  };
};

const useGetChatProfile = () => {
  const fetchChatProfile = useCallback(({
    profileId,
    env
  }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
      const profile = yield PushAPI.user.get({
        env: env,
        account: profileId
      });
      return profile;
    } catch (error) {
      console.log(error);
      return;
    }
  }), []);
  return {
    fetchChatProfile
  };
};

const usePushChatSocket = () => {
  const {
    account,
    pgpPrivateKey,
    pushChatSocket,
    setPushChatSocket,
    setIsPushChatSocketConnected,
    isPushChatSocketConnected,
    connectedProfile,
    setConnectedProfile,
    env
  } = useChatData();
  useGetChatProfile();
  const [messagesSinceLastConnection, setMessagesSinceLastConnection] = useState({});
  const [acceptedRequestMessage, setAcceptedRequestMessage] = useState({});
  const [groupInformationSinceLastConnection, setGroupInformationSinceLastConnection] = useState({}); // useEffect(() => {
  //   // console.log(pgpPrivateKey, "pgppppppppp")
  //   // console.log(connectedProfile, "connectedProfileeeeeeeee")
  // }, [pgpPrivateKey, connectedProfile])

  const addSocketEvents = useCallback(() => {
    console.log('addSocketEvents');
    pushChatSocket === null || pushChatSocket === void 0 ? void 0 : pushChatSocket.on(EVENTS.CONNECT, () => {
      setIsPushChatSocketConnected(true);
    });
    pushChatSocket === null || pushChatSocket === void 0 ? void 0 : pushChatSocket.on(EVENTS.DISCONNECT, reason => {
      setIsPushChatSocketConnected(false);
    });
    pushChatSocket === null || pushChatSocket === void 0 ? void 0 : pushChatSocket.on(EVENTS.CHAT_RECEIVED_MESSAGE, chat => __awaiter(void 0, void 0, void 0, function* () {
      if (!connectedProfile || !pgpPrivateKey) {
        return;
      }

      if (chat.messageCategory === 'Request' && chat.messageContent === null && chat.messageType === null) {
        setAcceptedRequestMessage(chat);
      } else {
        const response = yield PushAPI.chat.decryptConversation({
          messages: [chat],
          connectedUser: connectedProfile,
          pgpPrivateKey: pgpPrivateKey,
          env: env
        });

        if (response && response.length) {
          setMessagesSinceLastConnection(response[0]);
        }
      }
    }));
    pushChatSocket === null || pushChatSocket === void 0 ? void 0 : pushChatSocket.on(EVENTS.CHAT_GROUPS, groupInfo => {
      /**
       * We receive a group creation or updated event.
       */
      setGroupInformationSinceLastConnection(groupInfo);
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pushChatSocket, account, pgpPrivateKey, messagesSinceLastConnection, env, connectedProfile]);
  const removeSocketEvents = useCallback(() => {
    pushChatSocket === null || pushChatSocket === void 0 ? void 0 : pushChatSocket.off(EVENTS.CONNECT);
    pushChatSocket === null || pushChatSocket === void 0 ? void 0 : pushChatSocket.off(EVENTS.DISCONNECT);
    pushChatSocket === null || pushChatSocket === void 0 ? void 0 : pushChatSocket.off(EVENTS.CHAT_GROUPS);
    pushChatSocket === null || pushChatSocket === void 0 ? void 0 : pushChatSocket.off(EVENTS.CHAT_RECEIVED_MESSAGE);
  }, [pushChatSocket]);
  useEffect(() => {
    if (pushChatSocket) {
      addSocketEvents();
    }

    return () => {
      if (pushChatSocket) {
        removeSocketEvents();
      }
    };
  }, [pushChatSocket, pgpPrivateKey, connectedProfile]);
  /**
   * Whenever the required params to create a connection object change
   *  - disconnect the old connection
   *  - create a new connection object
   */

  useEffect(() => {
    if (account) {
      if (pushChatSocket && pushChatSocket.connected) ; else {
        const main = () => __awaiter(void 0, void 0, void 0, function* () {
          const connectionObject = createSocketConnection({
            user: account,
            env,
            socketType: SOCKET_TYPE.CHAT,
            socketOptions: {
              autoConnect: true,
              reconnectionAttempts: 3
            }
          });
          console.warn('new connection object: ', connectionObject);
          setPushChatSocket(connectionObject);
        });

        main().catch(err => console.error(err));
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [account, env, pgpPrivateKey]);
  return {
    pushChatSocket,
    isPushChatSocketConnected,
    messagesSinceLastConnection,
    acceptedRequestMessage,
    groupInformationSinceLastConnection
  };
};

const useFetchChat$1 = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const {
    account,
    env,
    pgpPrivateKey
  } = useChatData();
  const fetchChat = useCallback(({
    chatId
  }) => __awaiter(void 0, void 0, void 0, function* () {
    setLoading(true);

    try {
      const chat = yield PushAPI.chat.chat({
        account: account ? account : '0xeeE5A266D7cD954bE3Eb99062172E7071E664023',
        toDecrypt: pgpPrivateKey ? true : false,
        pgpPrivateKey: String(pgpPrivateKey),
        recipient: chatId,
        env: env
      });
      return chat;
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
      return;
    } finally {
      setLoading(false);
    }
  }), [pgpPrivateKey, env, account]);
  return {
    fetchChat,
    error,
    loading
  };
};

const usePushSendMessage$1 = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const {
    pgpPrivateKey,
    env,
    account
  } = useChatData();
  const sendMessage = useCallback(options => __awaiter(void 0, void 0, void 0, function* () {
    const {
      chatId,
      message,
      messageType
    } = options || {};
    setLoading(true);

    try {
      const response = yield PushAPI.chat.send({
        messageContent: message,
        messageType: messageType,
        receiverAddress: chatId,
        account: account ? account : undefined,
        pgpPrivateKey: pgpPrivateKey ? pgpPrivateKey : undefined,
        env: env
      });
      setLoading(false);

      if (!response) {
        return false;
      }

      return response;
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
      return error.message;
    }
  }), [pgpPrivateKey, account, env]);
  return {
    sendMessage,
    error,
    loading
  };
};

const useGetGroupByID = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const {
    env
  } = useChatData();
  const getGroupByID = useCallback(({
    groupId
  }) => __awaiter(void 0, void 0, void 0, function* () {
    setLoading(true);
    let group;

    try {
      group = yield PushAPI.chat.getGroup({
        chatId: groupId,
        env: env
      });
    } catch (error) {
      console.log(error);
      return;
    }

    return group;
  }), [env]);
  return {
    getGroupByID,
    error,
    loading
  };
};

const useAccount = () => {
  const [{
    wallet,
    connecting
  }, connect, disconnect, updateBalances, setWalletModules, setPrimaryWallet] = useConnectWallet();
  const [{
    chains,
    connectedChain,
    settingChain
  }, setChain] = useSetChain();

  const isActive = () => {
    return wallet && wallet.accounts.length > 0 ? true : false;
  };

  const switchChain = desiredChain => __awaiter(void 0, void 0, void 0, function* () {
    setChain({
      chainId: ethers.utils.hexValue(desiredChain)
    });
  });

  return {
    wallet,
    connecting,
    connect,
    disconnect,
    updateBalances,
    setWalletModules,
    setPrimaryWallet,
    provider: wallet ? new ethers.providers.Web3Provider(wallet.provider, 'any') : undefined,
    account: wallet && wallet.accounts.length > 0 ? ethers.utils.getAddress(wallet.accounts[0].address) : undefined,
    chainId: connectedChain ? Number(connectedChain.id) : undefined,
    isActive,
    setChain,
    switchChain,
    settingChain,
    chains
  };
};

const useUpdateGroup = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const {
    account,
    env,
    pgpPrivateKey
  } = useChatData();
  const updateGroup = useCallback(({
    groupInfo,
    memberList,
    adminList
  }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;

    setLoading(true);

    try {
      const updateResponse = yield PushAPI.chat.updateGroup({
        chatId: groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.chatId,
        groupName: groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.groupName,
        groupDescription: (_a = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.groupDescription) !== null && _a !== void 0 ? _a : '',
        groupImage: groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.groupImage,
        members: memberList,
        admins: adminList,
        account: account,
        pgpPrivateKey: pgpPrivateKey,
        env: env
      });
      return updateResponse;
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
      return;
    } finally {
      setLoading(false);
    }
  }), [pgpPrivateKey, env, account]);
  return {
    updateGroup,
    error,
    loading
  };
};

const convertAddressToAddrCaip = (userAddress, chainId) => {
  return `eip155:${chainId}:${userAddress}`;
};

const convertReponseToParsedArray = response => {
  const parsedResponse = PushAPI.utils.parseApiResponse(response);
  const map1 = new Map();
  const map2 = new Map();
  response.forEach(each => {
    map1.set(each.payload.data.sid, each.epoch);
    map2.set(each.payload.data.sid, each.sender);
  });
  parsedResponse.forEach(each => {
    each['date'] = map1.get(each.sid);
    each['epoch'] = new Date(each['date']).getTime() / 1000;
    each['channel'] = map2.get(each.sid);
  });
  return parsedResponse;
};

const useFetchChat = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const {
    account,
    env,
    decryptedPgpPvtKey
  } = useContext(ChatAndNotificationPropsContext);
  const fetchChat = useCallback(({
    recipientAddress
  }) => __awaiter(void 0, void 0, void 0, function* () {
    setLoading(true);

    try {
      const chat = yield PushAPI.chat.chat({
        account: account,
        toDecrypt: decryptedPgpPvtKey ? true : false,
        pgpPrivateKey: String(decryptedPgpPvtKey),
        recipient: recipientAddress,
        env: env
      });
      return chat;
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
      return;
    } finally {
      setLoading(false);
    }
  }), [decryptedPgpPvtKey, env]);
  return {
    fetchChat,
    error,
    loading
  };
};

const useChatNotificationSocket = ({
  socketType: _socketType = SOCKET_TYPE.NOTIFICATION
}) => {
  const [isSDKSocketConnected, setIsSDKSocketConnected] = useState(false);
  const [messagesSinceLastConnection, setMessagesSinceLastConnection] = useState('');
  const [groupInformationSinceLastConnection, setGroupInformationSinceLastConnection] = useState('');
  const [notificationFeedSinceLastConnection, setNotificationFeedSinceLastConnection] = useState('');
  const {
    fetchChat
  } = useFetchChat();
  const {
    account,
    env,
    decryptedPgpPvtKey,
    signer
  } = useContext(ChatAndNotificationPropsContext);
  const {
    chats,
    setChat,
    chatsFeed,
    connectedProfile,
    setChatFeed,
    setRequestFeed,
    requestsFeed,
    selectedChatId
  } = useContext(ChatMainStateContext);
  const {
    fetchChatProfile
  } = useGetChatProfile();
  const {
    subscriptionStatus,
    setInboxNotifFeed,
    setSpamNotifFeed
  } = useContext(NotificationMainStateContext);
  const [pushChatNotificationSocket, setPushChatNotificationSocket] = useState(null);
  const addSocketEvents = useCallback(() => {
    pushChatNotificationSocket === null || pushChatNotificationSocket === void 0 ? void 0 : pushChatNotificationSocket.on(EVENTS.CONNECT, () => {
      setIsSDKSocketConnected(true);
    });
    pushChatNotificationSocket === null || pushChatNotificationSocket === void 0 ? void 0 : pushChatNotificationSocket.on(EVENTS.DISCONNECT, err => {
      console.log(err);
      setIsSDKSocketConnected(false);
    });
    pushChatNotificationSocket === null || pushChatNotificationSocket === void 0 ? void 0 : pushChatNotificationSocket.on(EVENTS.USER_FEEDS, feedItem => {
      const parseApiResponse = convertReponseToParsedArray([feedItem]);

      if (subscriptionStatus.get(parseApiResponse[0].channel)) {
        setInboxNotifFeed(`notif${parseApiResponse[0].sid}`, parseApiResponse[0]);
      } else setSpamNotifFeed(`notif${parseApiResponse[0].sid}`, parseApiResponse[0]);

      setNotificationFeedSinceLastConnection(feedItem);
    });
    pushChatNotificationSocket === null || pushChatNotificationSocket === void 0 ? void 0 : pushChatNotificationSocket.on(EVENTS.CHAT_RECEIVED_MESSAGE, chat => __awaiter(void 0, void 0, void 0, function* () {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j;

      if (!connectedProfile || !decryptedPgpPvtKey) {
        return;
      }

      const chatId = getChatId({
        msg: chat,
        account
      }).toLowerCase();
      if (!isPCAIP(chatId)) return;

      if (chat.messageCategory === 'Request' && chat.messageContent === null && chat.messageType === null) {
        if (chat.messageOrigin === 'other') {
          const user = yield fetchChatProfile({
            profileId: chatId,
            env
          });

          if (user || Object.keys(user || {}).length) {
            let newOne = {};
            newOne = chatsFeed[chatId];
            newOne['publicKey'] = user.publicKey;
            setChatFeed(chatId, newOne);
          }
        }

        return;
      }

      const response = yield PushAPI.chat.decryptConversation({
        messages: [chat],
        connectedUser: connectedProfile,
        pgpPrivateKey: decryptedPgpPvtKey,
        env: env
      });

      if (response && response.length) {
        const msg = response[0];
        let newOne = {};

        if (chatsFeed[chatId]) {
          newOne = chatsFeed[chatId];
          setChat(chatId, {
            messages: Array.isArray((_a = chats.get(chatId)) === null || _a === void 0 ? void 0 : _a.messages) ? [...chats.get(chatId).messages, msg] : [msg],
            lastThreadHash: (_c = (_b = chats.get(chatId)) === null || _b === void 0 ? void 0 : _b.lastThreadHash) !== null && _c !== void 0 ? _c : msg.link
          });
          newOne['msg'] = msg;
          setChatFeed(chatId, newOne);
        } else if (requestsFeed[chatId]) {
          newOne = requestsFeed[chatId];
          setChat(chatId, {
            messages: Array.isArray((_d = chats.get(chatId)) === null || _d === void 0 ? void 0 : _d.messages) ? [...chats.get(chatId).messages, msg] : [msg],
            lastThreadHash: (_f = (_e = chats.get(chatId)) === null || _e === void 0 ? void 0 : _e.lastThreadHash) !== null && _f !== void 0 ? _f : msg.link
          });
          newOne['msg'] = msg;
          setRequestFeed(chatId, newOne);
        } else {
          const fetchedChat = yield fetchChat({
            recipientAddress: chatId
          });
          console.log(chatId);
          if (Object.keys(fetchedChat || {}).length && checkIfIntent({
            chat: fetchedChat,
            account
          })) setRequestFeed(chatId, fetchedChat);else setChatFeed(chatId, fetchedChat);
          console.log('in here');
          console.log(msg);
          setChat(chatId, {
            messages: Array.isArray((_g = chats.get(chatId)) === null || _g === void 0 ? void 0 : _g.messages) ? [...chats.get(chatId).messages, msg] : [msg],
            lastThreadHash: (_j = (_h = chats.get(chatId)) === null || _h === void 0 ? void 0 : _h.lastThreadHash) !== null && _j !== void 0 ? _j : msg.link
          });
        }

        if (selectedChatId === chatId) {
          setData({
            chatId: chatId,
            value: newOne
          });
        }
      }

      setMessagesSinceLastConnection(chat);
    }));
    pushChatNotificationSocket === null || pushChatNotificationSocket === void 0 ? void 0 : pushChatNotificationSocket.on(EVENTS.CHAT_GROUPS, groupInfo => {
      setGroupInformationSinceLastConnection(groupInfo);
    });
  }, [pushChatNotificationSocket, decryptedPgpPvtKey, chatsFeed, requestsFeed, setChat, chats, setChatFeed, setRequestFeed, fetchChat]);
  const removeSocketEvents = useCallback(() => {
    pushChatNotificationSocket === null || pushChatNotificationSocket === void 0 ? void 0 : pushChatNotificationSocket.off(EVENTS.CONNECT);
    pushChatNotificationSocket === null || pushChatNotificationSocket === void 0 ? void 0 : pushChatNotificationSocket.off(EVENTS.DISCONNECT);
    pushChatNotificationSocket === null || pushChatNotificationSocket === void 0 ? void 0 : pushChatNotificationSocket.off(EVENTS.CHAT_GROUPS);
    pushChatNotificationSocket === null || pushChatNotificationSocket === void 0 ? void 0 : pushChatNotificationSocket.off(EVENTS.CHAT_RECEIVED_MESSAGE);
  }, [pushChatNotificationSocket]);
  useEffect(() => {
    if (pushChatNotificationSocket) {
      addSocketEvents();
    }

    return () => {
      if (pushChatNotificationSocket) {
        removeSocketEvents();
      }
    };
  }, [addSocketEvents, pushChatNotificationSocket, removeSocketEvents]);
  /**
   * Whenever the required params to create a connection object change
   *  - disconnect the old connection
   *  - create a new connection object
   */

  useEffect(() => {
    if (decryptedPgpPvtKey) {
      if (pushChatNotificationSocket) {
        pushChatNotificationSocket === null || pushChatNotificationSocket === void 0 ? void 0 : pushChatNotificationSocket.disconnect();
      }

      let chainId = 1;

      (() => __awaiter(void 0, void 0, void 0, function* () {
        chainId = yield signer === null || signer === void 0 ? void 0 : signer.getChainId();
      }))(); // this is auto-connect on instantiation


      const connectionObject = createSocketConnection({
        user: _socketType === SOCKET_TYPE.CHAT ? account : convertAddressToAddrCaip(account, chainId),
        socketType: _socketType,
        env: env
      });
      setPushChatNotificationSocket(connectionObject);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [decryptedPgpPvtKey, env]);
  return {
    pushChatNotificationSocket,
    isSDKSocketConnected,
    messagesSinceLastConnection,
    groupInformationSinceLastConnection,
    notificationFeedSinceLastConnection
  };
};

const useFetchChats = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const {
    account,
    env,
    decryptedPgpPvtKey
  } = useContext(ChatAndNotificationPropsContext);
  const fetchChats = useCallback(({
    page,
    chatLimit
  }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;

    setLoading(true);

    try {
      const chats = yield PushAPI.chat.chats({
        account: account,
        toDecrypt: decryptedPgpPvtKey ? true : false,
        pgpPrivateKey: String(decryptedPgpPvtKey),
        page,
        limit: chatLimit,
        env: env
      }); //conversation to map from array

      const modifiedChatsObj = {};

      for (const chat of chats) {
        if (!(chat === null || chat === void 0 ? void 0 : chat.groupInformation)) {
          modifiedChatsObj[(_a = chat.did.toLowerCase()) !== null && _a !== void 0 ? _a : chat.chatId] = chat;
          if (!getData((_b = chat.did.toLowerCase()) !== null && _b !== void 0 ? _b : chat.chatId)) setData({
            chatId: (_c = chat.did.toLowerCase()) !== null && _c !== void 0 ? _c : chat.chatId,
            value: chat
          });
        }
      }

      return modifiedChatsObj;
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
      return;
    } finally {
      setLoading(false);
    }
  }), [decryptedPgpPvtKey, env]);
  return {
    fetchChats,
    error,
    loading
  };
};

const useFetchRequests = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  useContext(ChatMainStateContext);
  const {
    account,
    env,
    decryptedPgpPvtKey
  } = useContext(ChatAndNotificationPropsContext);
  const fetchRequests = useCallback(({
    page,
    requestLimit
  }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;

    setLoading(true);

    try {
      const requests = yield PushAPI.chat.requests({
        account: account,
        toDecrypt: decryptedPgpPvtKey ? true : false,
        pgpPrivateKey: String(decryptedPgpPvtKey),
        page,
        limit: requestLimit,
        env: env
      }); //conversation to map from array

      const modifiedRequestsObj = {};

      for (const request of requests) {
        if (!(request === null || request === void 0 ? void 0 : request.groupInformation)) modifiedRequestsObj[(_a = request.did.toLowerCase()) !== null && _a !== void 0 ? _a : request.chatId] = request;
      }

      return modifiedRequestsObj;
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
      return;
    } finally {
      setLoading(false);
    }
  }), [decryptedPgpPvtKey, env]);
  return {
    fetchRequests,
    error,
    loading
  };
};

const useFetchHistoryMessages = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const {
    chats,
    setChat,
    selectedChatId
  } = useContext(ChatMainStateContext);
  const {
    account,
    env,
    decryptedPgpPvtKey
  } = useContext(ChatAndNotificationPropsContext);
  const historyMessages = useCallback(({
    threadHash,
    limit: _limit = 10
  }) => __awaiter(void 0, void 0, void 0, function* () {
    setLoading(true);

    try {
      const chatHistory = yield PushAPI.chat.history({
        threadhash: threadHash,
        account: account,
        toDecrypt: decryptedPgpPvtKey ? true : false,
        pgpPrivateKey: String(decryptedPgpPvtKey),
        limit: _limit,
        env: env
      });
      console.log(chatHistory);
      chatHistory.reverse();

      if (chats.get(selectedChatId)) {
        const uniqueMap = {};
        const messages = Object.values([...chatHistory, ...chats.get(selectedChatId).messages].reduce((uniqueMap, message) => {
          if (message.timestamp && !uniqueMap[message.timestamp]) {
            uniqueMap[message.timestamp] = message;
          }

          return uniqueMap;
        }, uniqueMap));
        setChat(selectedChatId, {
          messages: messages,
          lastThreadHash: chatHistory[0].link
        });
      } else {
        setChat(selectedChatId, {
          messages: chatHistory,
          lastThreadHash: chatHistory[0].link
        });
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }), [chats]);
  return {
    historyMessages,
    error,
    loading
  };
};

const useApproveChatRequest$1 = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const {
    account,
    env,
    decryptedPgpPvtKey
  } = useContext(ChatAndNotificationPropsContext);
  const approveChatRequest = useCallback(options => __awaiter(void 0, void 0, void 0, function* () {
    const {
      senderAddress
    } = options || {};
    setLoading(true);

    try {
      const response = yield PushAPI.chat.approve({
        status: 'Approved',
        account: account,
        senderAddress: senderAddress,
        pgpPrivateKey: decryptedPgpPvtKey,
        env: env
      });
      return response;
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
      return;
    }
  }), []);
  return {
    approveChatRequest,
    error,
    loading
  };
};

const usePushSendMessage = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const {
    setChatFeed,
    setChat,
    chatsFeed,
    chats,
    selectedChatId
  } = useContext(ChatMainStateContext);
  const {
    account,
    env,
    decryptedPgpPvtKey
  } = useContext(ChatAndNotificationPropsContext);
  useFetchChat();
  const sendMessage = useCallback(options => __awaiter(void 0, void 0, void 0, function* () {
    const {
      receiver,
      message,
      messageType
    } = options || {};
    setLoading(true);

    try {
      const response = yield PushAPI.chat.send({
        messageContent: message,
        messageType: messageType,
        receiverAddress: receiver,
        account: account,
        pgpPrivateKey: decryptedPgpPvtKey,
        env: env
      });
      setLoading(false);

      if (!response) {
        return false;
      } // const modifiedResponse = { ...response, messageContent: message };
      // if (chatsFeed[selectedChatId]) {
      //   const newOne: IFeeds = chatsFeed[selectedChatId];
      //   setChat(selectedChatId, {
      //     messages: Array.isArray(chats.get(selectedChatId)?.messages)
      //       ? [...chats.get(selectedChatId)!.messages, modifiedResponse]
      //       : [modifiedResponse],
      //     lastThreadHash:
      //       chats.get(selectedChatId)?.lastThreadHash ?? response.link,
      //   });
      //   newOne['msg'] = modifiedResponse;
      //   setChatFeed(selectedChatId, newOne);
      // } else {
      //   const fetchChatsMessages: IFeeds = (await fetchChat({
      //     recipientAddress: receiver,
      //   })) as IFeeds;
      //   setChatFeed(selectedChatId, fetchChatsMessages);
      //   setChat(selectedChatId, {
      //     messages: Array.isArray(chats.get(selectedChatId)?.messages)
      //       ? [...chats.get(selectedChatId)!.messages, modifiedResponse]
      //       : [modifiedResponse],
      //     lastThreadHash:
      //       chats.get(selectedChatId)?.lastThreadHash ?? response.link,
      //   });
      // }


      return;
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
      return;
    }
  }), [decryptedPgpPvtKey, setChat, selectedChatId, chats]);
  return {
    sendMessage,
    error,
    loading
  };
};

function useIsInViewport(element, rootMargin) {
  const [isVisible, setState] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setState(entry.isIntersecting);
    }, {
      rootMargin
    });
    element.current && observer.observe(element.current);
    return () => observer.disconnect();
  }, []);
  return isVisible;
}

var toPropertyKey = toPropertyKey$3;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$4;

var createProperty$2 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

var $$2 = _export;
var iterate = iterate$3;
var createProperty$1 = createProperty$2;

// `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries
$$2({ target: 'Object', stat: true }, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function (k, v) {
      createProperty$1(obj, k, v);
    }, { AS_ENTRIES: true });
    return obj;
  }
});

const useFetchNotification = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const {
    account,
    env
  } = useContext(ChatAndNotificationPropsContext);
  const fetchNotification = useCallback(({
    page,
    limit,
    spam: _spam = false
  }) => __awaiter(void 0, void 0, void 0, function* () {
    setLoading(true);

    try {
      const results = yield PushAPI.user.getFeeds({
        user: account,
        raw: true,
        env: env,
        page: page,
        spam: _spam,
        limit: limit
      });
      const parsedResponse = convertReponseToParsedArray(results);
      const modifiedNotifObj = Object.fromEntries(parsedResponse.map(e => [`notif${e.sid}`, e]));
      return modifiedNotifObj;
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
      return;
    } finally {
      setLoading(false);
    }
  }), [account, env]);
  return {
    fetchNotification,
    error,
    loading
  };
};

const useFetchUserSubscriptions = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const {
    account,
    env,
    signer
  } = useContext(ChatAndNotificationPropsContext);
  const {
    setSubscriptionStatus
  } = useContext(NotificationMainStateContext);
  const fetchUserSubscriptions = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
    setLoading(true);

    try {
      const chainId = yield signer === null || signer === void 0 ? void 0 : signer.getChainId();
      const results = yield PushAPI.user.getSubscriptions({
        user: convertAddressToAddrCaip(account, chainId),
        env
      });
      const subscriptionsMapping = new Map();
      results.forEach(subscription => subscriptionsMapping.set(subscription.channel, true));
      setSubscriptionStatus(subscriptionsMapping);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
      return;
    } finally {
      setLoading(false);
    }
  }), [account, env]);
  return {
    fetchUserSubscriptions,
    error,
    loading
  };
};

const useOnSubscribeToChannel = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    setChannelSubscriptionStatus
  } = useContext(NotificationMainStateContext);
  const {
    account,
    env,
    signer
  } = useContext(ChatAndNotificationPropsContext);
  const onSubscribeToChannel = useCallback(({
    channelAddress
  }) => __awaiter(void 0, void 0, void 0, function* () {
    setLoading(true);

    try {
      if (!channelAddress) return;
      const address = channelAddress;
      if (!address) return;
      console.log(signer);
      const chainId = yield signer === null || signer === void 0 ? void 0 : signer.getChainId();
      yield PushAPI.channels.subscribe({
        signer: signer,
        channelAddress: convertAddressToAddrCaip(channelAddress, chainId),
        userAddress: convertAddressToAddrCaip(account, chainId),
        onSuccess: () => {
          setChannelSubscriptionStatus(channelAddress, true);
          setSuccess(true);
        },
        onError: err => {
          setError(err.message);
        },
        env: env
      });
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
      return;
    } finally {
      setLoading(false);
    }
  }), [account, env]);
  return {
    onSubscribeToChannel,
    error,
    loading,
    success
  };
};

const useDivOffsetWidth = () => {
  const divRef = useRef(null);
  const [offsetWidth, setOffsetWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        setOffsetWidth(divRef.current.offsetWidth);
      }
    };

    const timeoutId = setTimeout(() => {
      handleResize(); // Measure offsetWidth after delay
    }, 0);
    window.addEventListener('resize', handleResize); // Clean up the event listener and timeout on component unmount

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);
  return [divRef, offsetWidth];
};

function useDeviceWidthCheck(deviceWidth) {
  const [width, setWidth] = useState(window.outerWidth);

  function handleWindowSizeChange() {
    setWidth(window.outerWidth);
  }

  useEffect(() => {
    function handleInitialWidth() {
      setWidth(window.outerWidth);
    }

    window.addEventListener('resize', handleWindowSizeChange);
    window.addEventListener('load', handleInitialWidth);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
      window.removeEventListener('load', handleInitialWidth);
    };
  }, [deviceWidth]);
  return width <= deviceWidth;
}

function useMediaQuery(query) {
  const getMatches = query => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }

    return false;
  };

  const [matches, setMatches] = useState(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query); // Triggered at the first client-side load and if query changes

    handleChange(); // Listen matchMedia

    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [query]);
  return matches;
}

const useCreateChatProfile = () => {
  const createChatProfile = useCallback(({
    signer,
    env
  }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
      const profile = yield PushAPI.user.create({
        env: env,
        signer: signer
      });
      return profile;
    } catch (error) {
      console.log(error);
      return;
    }
  }), []);
  return {
    createChatProfile
  };
};

const useDecryptPGPKey = () => {
  const decryptPGPKey = useCallback(({
    account,
    encryptedPrivateKey,
    signer,
    env
  }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
      const decryptPgpKey = yield PushAPI.chat.decryptPGPKey({
        encryptedPGPPrivateKey: encryptedPrivateKey,
        account: account,
        signer: signer,
        env: env
      });
      return decryptPgpKey;
    } catch (error) {
      console.log(error);
      return;
    }
  }), []);
  return {
    decryptPGPKey
  };
};

const TYPE = {
  PUSH: 'PUSH',
  GUILD: 'GUILD'
};
const CATEGORY = {
  ERC20: 'ERC20',
  ERC721: 'ERC721',
  INVITE: 'INVITE',
  CustomEndpoint: 'CustomEndpoint',
  ROLES: 'ROLES'
};
const SUBCATEGORY = {
  HOLDER: 'holder',
  OWENER: 'owner',
  //   INVITE: 'INVITE',
  GET: 'GET',
  DEFAULT: 'DEFAULT'
};
const TOKEN_NFT_COMPARISION = {
  '>': 'more than',
  '>=': 'equal or more than',
  '<': 'less than',
  '<=': 'equal or less than',
  '==': 'equal to',
  '!=': 'not equal to'
};
const CRITERIA_TYPE = {
  ERC20: 'Token',
  ERC721: 'NFT',
  INVITE: 'Invite',
  CustomEndpoint: 'URL',
  ROLES: 'Guild ID'
};

const NFTContractABI = [{
  inputs: [],
  name: 'name',
  outputs: [{
    internalType: 'string',
    name: '',
    type: 'string'
  }],
  stateMutability: 'view',
  type: 'function'
}];
const TokenContractABI = [{
  constant: true,
  inputs: [],
  name: 'symbol',
  outputs: [{
    internalType: 'string',
    name: '',
    type: 'string'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'decimals',
  outputs: [{
    internalType: 'uint8',
    name: '',
    type: 'uint8'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}];

const getInfuraUrlFor = (network, key) => `https://${network}.infura.io/v3/${key}`;

const getRpcURL = (network, key) => {
  return getInfuraUrlFor(network, key);
};

const getChainRPC = chainId => {
  const key = InfuraAPIKey;

  switch (chainId) {
    case 1:
      return getRpcURL("mainnet", key);

    case 137:
      return getRpcURL("polygon-mainnet", key);

    case 10:
      return getRpcURL("optimism-mainnet", key);

    case 56:
      return "https://bsc-dataseed.binance.org/";

    case 11155111:
      return getRpcURL("sepolia", key);

    case 420:
      return getRpcURL("optimism-goerli", key);

    case 80001:
      return getRpcURL("polygon-mumbai", key);

    case 97:
      return "https://data-seed-prebsc-1-s1.binance.org:8545";

    default:
      return getRpcURL("mainnet", key);
  }
};

const tokenFetchHandler = (contract, type, category, chainInfo, setUnit, setDecimals) => __awaiter(void 0, void 0, void 0, function* () {
  const isValid = ethers.utils.isAddress(contract);

  if (type === 'GUILD') {
    return [false, ''];
  }

  if (!isValid) {
    if (category === CATEGORY.ERC20) {
      setUnit('TOKEN');
    } else {
      setUnit('NFT');
    }

    return [true, `${contract} is invalid invalid contract address`];
  }

  const _chainId = parseInt(chainInfo.split(':')[1]);

  if (category === CATEGORY.ERC20) {
    // erc 20 logic
    const [isErr, tokenInfo] = yield fetchERC20Info(contract, _chainId);

    if (isErr) {
      // handle error
      const errMessage = `${contract} is invalid ERC20 on chain ${_chainId}`;
      setUnit('TOKEN');
      setDecimals(18);
      return [true, errMessage];
    } else {
      // set the token info
      setUnit(tokenInfo.symbol);
      setDecimals(tokenInfo.decimals);
      return [false, ''];
    }
  } else {
    // erc 721 logic
    const [isErr, tokenInfo] = yield fetchERC721nfo(contract, _chainId);

    if (isErr) {
      // handle error
      const errMessage = `${contract} is invalid ERC721 on chain ${_chainId}`;
      setUnit('NFT');
      setDecimals(18);
      return [true, errMessage];
    } else {
      // set the token info
      setUnit(tokenInfo);
      return [false, ''];
    }
  }
});
const fetchERC20Info = (contractAddress, chainId) => __awaiter(void 0, void 0, void 0, function* () {
  try {
    const rpcURL = getChainRPC(chainId);
    const provider = new ethers.providers.JsonRpcProvider(rpcURL);
    const contract = new ethers.Contract(contractAddress, TokenContractABI, provider);
    const [symbol, decimals] = yield Promise.all([contract.symbol(), contract.decimals()]);
    return [false, {
      symbol: symbol,
      decimals: decimals
    }];
  } catch (_a) {
    return [true, {
      symbol: "",
      decimals: 0
    }];
  }
});
const fetchERC721nfo = (contractAddress, chainId) => __awaiter(void 0, void 0, void 0, function* () {
  try {
    const rpcURL = getChainRPC(chainId);
    const provider = new ethers.providers.JsonRpcProvider(rpcURL);
    const contract = new ethers.Contract(contractAddress, NFTContractABI, provider);
    const name = yield contract.name();
    return [false, name];
  } catch (_b) {
    return [true, ""];
  }
});

const useTokenSymbolLoader = conditionData => {
  const isContract = isTokenType(conditionData);
  const [tokenSymbol, setTokenSymbol] = useState('....');
  const [isTokenSymbolLoading, setIsTokenSymbolLoading] = useState(true);

  const updateTokenValue = newVal => {
    setTokenSymbol(newVal);
    setIsTokenSymbolLoading(false);
  };

  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      if (isContract) {
        const data = conditionData.data;
        const contract = data.contract;
        const category = conditionData.category;

        if (category && contract) {
          if (data.token) {
            updateTokenValue(data.token);
            return;
          }

          const contractFormat = contract.split(':');
          const [address, chainId] = [contractFormat[2], parseInt(contractFormat[1])];

          if (category === CATEGORY.ERC20) {
            const [isErr, tokenInfo] = yield fetchERC20Info(address, chainId);

            if (!isErr) {
              updateTokenValue(tokenInfo.symbol);
            }
          } else if (category === CATEGORY.ERC721) {
            const [isErr, tokenInfo] = yield fetchERC721nfo(address, chainId);

            if (!isErr) {
              updateTokenValue(tokenInfo);
            }
          }
        }
      }
    }))();
  }, []);
  return [tokenSymbol, isTokenSymbolLoading];
};

const isTokenType = conditionData => {
  if (conditionData.type === 'PUSH') {
    if (conditionData.category === CATEGORY.ERC20 || conditionData.category === CATEGORY.ERC721) {
      if (conditionData.data) {
        return true;
      }
    }
  }

  return false;
};

//base theme object
const baseTheme = {
  borderRadius: {
    modal: '10px',
    optInButton: '3px'
  },
  fontWeight: {
    channelNameText: 400,
    notificationTitleText: 400,
    notificationContentText: 400,
    timestamp: 600,
    optInButtonText: 500
  },
  fontSize: {
    channelNameText: '15px',
    notificationTitleText: '22px',
    notificationContentText: '16px',
    timestamp: '10px',
    optInButtonText: 'unset'
  },
  fontFamily: 'Strawford, sans-serif'
}; //light theme object

const lightTheme$1 = Object.assign(Object.assign({}, baseTheme), {
  color: {
    accentBackground: '#fff',
    contentHoverBackground: '#e8eaf680',
    channelNameText: '#333333',
    notificationTitleText: '#333333',
    notificationContentText: '#333333',
    timestamp: '#808080',
    optInButtonText: '#fff',
    optInButtonBackground: 'rgb(226, 8, 128)',
    modalBorder: '#D9D9D9'
  },
  modalDivider: '1px solid #D9D9D9'
}); //dark theme object

const darkTheme = Object.assign(Object.assign({}, baseTheme), {
  color: {
    accentBackground: '#2F3137',
    channelNameText: '#C5CAE9',
    contentHoverBackground: '#404650',
    notificationTitleText: '#C5CAE9',
    notificationContentText: '#C5CAE9',
    timestamp: '#808080',
    optInButtonText: '#fff',
    optInButtonBackground: 'rgb(226, 8, 128)',
    modalBorder: '#4A4F67'
  },
  modalDivider: '1px solid #4A4F67'
}); //function to return final theme object

const getCustomTheme = (theme, customTheme) => {
  return Object.assign({}, theme === 'dark' ? darkTheme : lightTheme$1, customTheme);
};

const NotificationItem = ({
  notificationTitle,
  notificationBody,
  cta,
  app,
  icon,
  image,
  url,
  isSpam,
  //for rendering the spam conterpart of the notification component
  isSubscribedFn,
  //A function for getting if a user is subscribed to the channel in question
  subscribeFn,
  //A function for subscribing to the spam channel
  theme,
  //for specifying light and dark theme
  chainName,
  customTheme,
  isSecret,
  decryptFn
}) => {
  const {
    notificationBody: parsedBody,
    timeStamp
  } = extractTimeStamp(notificationBody || '');
  const themeObject = getCustomTheme(theme, customTheme);
  const {
    notifTitle,
    notifBody,
    notifCta,
    notifImage,
    setDecryptedValues,
    isSecretRevealed
  } = useDecrypt({
    notificationTitle,
    parsedBody,
    cta,
    image
  }, isSecret);
  const isCtaURLValid = MediaHelper.validURL(notifCta);
  const isChannelURLValid = MediaHelper.validURL(url); // store the image to be displayed in this state variable

  const [imageOverlay, setImageOverlay] = React.useState('');
  const [subscribeLoading, setSubscribeLoading] = React.useState(false);
  const [isSubscribed, setIsSubscribed] = React.useState(true); //use this to confirm if this is s

  const [divRef, offsetWidth] = useDivOffsetWidth();
  const showMetaInfo = isSecret || timeStamp; // console.log({
  //   chainName,
  //   rightIcon,
  //   ai: ChainImages['CHAIN_ICONS']
  // })

  const gotToCTA = e => {
    e.stopPropagation();
    if (!isCtaURLValid) return;
    window.open(notifCta, '_blank');
  };

  const goToURL = e => {
    e.stopPropagation();
    if (!isChannelURLValid) return;
    window.open(url, '_blank');
  };
  /**
   * A function which wraps around the function to subscribe a user to a channel
   * @returns
   */


  const onSubscribe = clickEvent => __awaiter(void 0, void 0, void 0, function* () {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
    if (!subscribeFn) return;

    try {
      setSubscribeLoading(true);
      yield subscribeFn();
      setIsSubscribed(true);
    } finally {
      setSubscribeLoading(false);
    }
  });

  const onDecrypt = () => __awaiter(void 0, void 0, void 0, function* () {
    if (decryptFn) {
      try {
        const decryptedPayload = yield decryptFn(); // to check if always both title, body are present

        if (decryptedPayload) {
          setDecryptedValues(decryptedPayload);
        }
      } catch (e) {
        console.error(e);
      }
    }
  });

  React.useEffect(() => {
    if (!isSpam || !isSubscribedFn) return;
    isSubscribedFn().then(res => {
      setIsSubscribed(Boolean(res));
    });
  }, [isSubscribedFn, isSpam]);
  if (isSubscribed && isSpam) return null; // render

  return jsxs(Container$l, Object.assign({
    timestamp: timeStamp,
    offsetWidth: offsetWidth,
    ref: divRef,
    themeObject: themeObject
  }, {
    children: [jsxs(MobileHeader, Object.assign({
      themeObject: themeObject
    }, {
      children: [jsxs(HeaderButton, Object.assign({
        themeObject: themeObject
      }, {
        children: [jsx(ImageContainer$1, Object.assign({
          offsetWidth: offsetWidth,
          theme: theme
        }, {
          children: jsx(IPFSIcon, {
            icon: icon
          })
        })), jsx(ChannelName, Object.assign({
          onClick: goToURL
        }, {
          children: app
        }))]
      })), chainName && chainDetails[chainName] ? jsx(BlockchainContainer, {
        children: jsx(ChainIconSVG$1, Object.assign({
          offsetWidth: offsetWidth
        }, {
          children: chainDetails[chainName].icon
        }))
      }) : null]
    })), jsxs(ContentSection, Object.assign({
      themeObject: themeObject,
      offsetWidth: offsetWidth,
      onClick: isCtaURLValid ? gotToCTA : undefined,
      cta: isCtaURLValid
    }, {
      children: [notifImage && ( // if its an image then render this
      !MediaHelper.isMediaSupportedVideo(notifImage) ? jsx(MobileImage, Object.assign({
        theme: theme,
        offsetWidth: offsetWidth,
        style: {
          cursor: 'pointer'
        },
        onClick: () => setImageOverlay(notifImage || '')
      }, {
        children: jsx("img", {
          src: notifImage,
          alt: ""
        })
      })) : // if its a youtube url, RENDER THIS
      MediaHelper.isMediaYoutube(notifImage) ? jsx(MobileImage, Object.assign({
        offsetWidth: offsetWidth
      }, {
        children: jsx("iframe", {
          id: "ytplayer",
          width: "640",
          allow: "fullscreen;",
          height: "360",
          src: MediaHelper.isMediaExternalEmbed(notifImage),
          title: "Youtube"
        })
      })) : // if its aN MP4 url, RENDER THIS
      jsx(MobileImage, Object.assign({
        offsetWidth: offsetWidth
      }, {
        children: jsxs("video", Object.assign({
          width: "360",
          height: "100%",
          controls: true
        }, {
          children: [jsx("source", {
            src: notifImage,
            type: "video/mp4"
          }), "Your browser does not support the video tag."]
        }))
      }))), jsxs(ChannelDetailsWrapper, {
        children: [jsxs(ChannelTitle, Object.assign({
          themeObject: themeObject,
          cta: isCtaURLValid,
          offsetWidth: offsetWidth
        }, {
          children: [jsx(ChannelTitleText, Object.assign({
            themeObject: themeObject
          }, {
            children: notifTitle
          })), isCtaURLValid ? jsx("span", Object.assign({
            style: {
              height: "20px",
              marginLeft: "7px"
            }
          }, {
            children: jsx(LinkIcon, {})
          })) : ""]
        })), jsx(ChannelDesc, Object.assign({
          themeObject: themeObject
        }, {
          children: jsx(ChannelDescLabel, Object.assign({
            themeObject: themeObject,
            cta: isCtaURLValid
          }, {
            children: jsx(ParseMarkdownText, {
              text: notifBody
            })
          }))
        }))]
      }), jsx(ButtonGroupContainer, {
        children: jsxs(ButtonGroup, {
          children: [isSpam && jsx(ActionButton, Object.assign({
            onClick: onSubscribe
          }, {
            children: subscribeLoading ? jsx(CircularProgressSpinner$1, {}) : 'opt-in'
          })), isSecret ? jsx(DecryptButton, {
            decryptFn: onDecrypt,
            isSecretRevealed: isSecretRevealed
          }) : null]
        })
      })]
    })), jsxs(ChannelMetaInfo, Object.assign({
      hidden: !showMetaInfo,
      hasLeft: false
    }, {
      children: [jsx(ChannelMetaInfoLeft, {
        hidden: true
      }), jsxs(ChannelMetaInfoRight, Object.assign({
        hidden: !showMetaInfo
      }, {
        children: [isSecret ? jsx(SecretIconContainer, {
          children: jsx(SecretIcon, {})
        }) : null, timeStamp ? jsx(TimestampLabel, Object.assign({
          themeObject: themeObject
        }, {
          children: convertTimeStamp(timeStamp)
        })) : null]
      }))]
    })), jsx(ImageOverlayItem, {
      imageOverlay: imageOverlay,
      setImageOverlay: setImageOverlay
    })]
  }));
}; // ================= Define default props

NotificationItem.propTypes = {
  notificationBody: propTypes.exports.string,
  notificationTitle: propTypes.exports.string,
  cta: propTypes.exports.string,
  image: propTypes.exports.string,
  app: propTypes.exports.string,
  url: propTypes.exports.string,
  isSpam: propTypes.exports.bool,
  subscribeFn: propTypes.exports.func,
  isSubscribedFn: propTypes.exports.func,
  theme: propTypes.exports.string,
  customTheme: propTypes.exports.object
};
NotificationItem.defaultProps = {
  notificationTitle: '',
  notificationBody: '',
  cta: '',
  app: '',
  image: '',
  url: '',
  isSpam: false,
  theme: 'light'
}; // ================= Define styled components
// ================= Define styled components

const MD_BREAKPOINT = '50050px'; //set an arbitrarily large number because we no longer use this breakpoint

const SM_BREAKPOINT = '900px';
const ContentSection = /*#__PURE__*/styled.div.withConfig({
  displayName: "notification__ContentSection",
  componentId: "sc-v9nuxx-0"
})(["display:flex;padding:15px 16px;cursor:", ";&:hover{background:", ";}", ";", ";"], props => props.cta ? 'pointer' : 'default', props => {
  var _a, _b;

  return props.cta ? (_b = (_a = props === null || props === void 0 ? void 0 : props.themeObject) === null || _a === void 0 ? void 0 : _a.color) === null || _b === void 0 ? void 0 : _b.contentHoverBackground : 'none';
}, props => props.offsetWidth > 461 && css(["@media (min-width:", "){align-items:flex-start;flex-direction:row;gap:20px;justify-content:space-between;}@media (max-width:", "){flex-direction:column;}"], SM_BREAKPOINT, SM_BREAKPOINT), props => props.offsetWidth <= 461 && css(["flex-direction:column;"]));
const BlockchainContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "notification__BlockchainContainer",
  componentId: "sc-v9nuxx-1"
})(["display:flex;align-items:center;justify-content:center;font-weight:700;"]);
const ChainIconSVG$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "notification__ChainIconSVG",
  componentId: "sc-v9nuxx-2"
})(["width:28px;height:28px;svg,svg image,img{width:100%;height:100%;}@media (max-width:", "){width:18px;height:18px;}"], SM_BREAKPOINT);
const MobileImage = /*#__PURE__*/styled.div.withConfig({
  displayName: "notification__MobileImage",
  componentId: "sc-v9nuxx-3"
})(["overflow:hidden;img,iframe,video{max-width:100% !important;width:100%;height:100% !important;object-fit:fill;border-radius:10px;border:0;}", ";", ";"], props => props.offsetWidth > 461 && css(["@media (min-width:", "){border:1px solid ", ";border-radius:10px;min-width:220px;width:220px;height:200px;}@media (max-width:", "){display:block;width:100%;max-height:200px;margin-bottom:12px;border:0;img,iframe,video{border:0;border-radius:0;}}"], SM_BREAKPOINT, props => props.theme === 'light' ? '#ededed' : '#444', SM_BREAKPOINT), props => props.offsetWidth <= 461 && css(["display:block;width:100%;max-height:200px;margin-bottom:12px;border:0;img,iframe,video{border:0;border-radius:0;}"]));
const ImageContainer$1 = /*#__PURE__*/styled.span.withConfig({
  displayName: "notification__ImageContainer",
  componentId: "sc-v9nuxx-4"
})(["background:", ";display:inline-block;margin-right:10px;border-radius:5px;width:24px;height:24px;@media (max-width:", "){width:24px;height:24px;}"], props => props.theme === "light" ? "#ededed" : "#444", SM_BREAKPOINT);
const ChannelDetailsWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "notification__ChannelDetailsWrapper",
  componentId: "sc-v9nuxx-5"
})(["display:flex;flex-direction:column;flex-grow:4;"]);
const Container$l = /*#__PURE__*/styled.div.withConfig({
  displayName: "notification__Container",
  componentId: "sc-v9nuxx-6"
})(["position:relative;overflow:hidden;font-family:", ";flex:1;display:flex;flex-wrap:wrap;border:", ";background:", ";border-radius:", ";margin:1.8rem 0px;justify-content:center;justify-content:space-between;@media (max-width:", "){flex-direction:column;}"], props => {
  var _a;

  return (_a = props === null || props === void 0 ? void 0 : props.themeObject) === null || _a === void 0 ? void 0 : _a.fontFamily;
}, props => {
  var _a, _b;

  return `1px solid ${(_b = (_a = props === null || props === void 0 ? void 0 : props.themeObject) === null || _a === void 0 ? void 0 : _a.color) === null || _b === void 0 ? void 0 : _b.modalBorder}`;
}, props => {
  var _a, _b;

  return (_b = (_a = props === null || props === void 0 ? void 0 : props.themeObject) === null || _a === void 0 ? void 0 : _a.color) === null || _b === void 0 ? void 0 : _b.accentBackground;
}, props => {
  var _a, _b;

  return (_b = (_a = props === null || props === void 0 ? void 0 : props.themeObject) === null || _a === void 0 ? void 0 : _a.borderRadius) === null || _b === void 0 ? void 0 : _b.modal;
}, MD_BREAKPOINT);
const MobileHeader = /*#__PURE__*/styled.div.withConfig({
  displayName: "notification__MobileHeader",
  componentId: "sc-v9nuxx-7"
})(["display:none;@media (max-width:", "){display:flex;align-items:center;justify-content:space-between;padding:12px 10px;border-bottom:", ";border-top-left-radius:10px;border-top-right-radius:10px;text-align:left;}"], MD_BREAKPOINT, props => {
  var _a;

  return (_a = props === null || props === void 0 ? void 0 : props.themeObject) === null || _a === void 0 ? void 0 : _a.modalDivider;
});
const ChannelName = /*#__PURE__*/styled.div.withConfig({
  displayName: "notification__ChannelName",
  componentId: "sc-v9nuxx-8"
})(["cursor:pointer;&:hover{text-decoration:underline;}"]);
const HeaderButton = /*#__PURE__*/styled.div.withConfig({
  displayName: "notification__HeaderButton",
  componentId: "sc-v9nuxx-9"
})(["display:flex;justify-content:space-between;align-items:center;font-size:", ";font-weight:", ";color:", ";"], props => {
  var _a, _b;

  return (_b = (_a = props === null || props === void 0 ? void 0 : props.themeObject) === null || _a === void 0 ? void 0 : _a.fontSize) === null || _b === void 0 ? void 0 : _b.channelNameText;
}, props => {
  var _a, _b;

  return (_b = (_a = props === null || props === void 0 ? void 0 : props.themeObject) === null || _a === void 0 ? void 0 : _a.fontWeight) === null || _b === void 0 ? void 0 : _b.channelNameText;
}, props => {
  var _a, _b;

  return (_b = (_a = props === null || props === void 0 ? void 0 : props.themeObject) === null || _a === void 0 ? void 0 : _a.color) === null || _b === void 0 ? void 0 : _b.channelNameText;
});
const ChannelTitle = /*#__PURE__*/styled.div.withConfig({
  displayName: "notification__ChannelTitle",
  componentId: "sc-v9nuxx-10"
})(["width:fit-content;display:flex;align-items:center;text-align:left;margin-bottom:8px;&:hover{text-decoration:", ";}@media (max-width:", "){color:", ";}", ";", ";"], props => props.cta ? 'underline' : 'none', MD_BREAKPOINT, props => {
  var _a, _b;

  return (_b = (_a = props === null || props === void 0 ? void 0 : props.themeObject) === null || _a === void 0 ? void 0 : _a.color) === null || _b === void 0 ? void 0 : _b.notificationTitleText;
}, props => props.offsetWidth > 461 && css(["@media (max-width:", "){margin-bottom:6px;}"], SM_BREAKPOINT), props => props.offsetWidth <= 461 && css(["margin-bottom:6px;"]));
const ChannelTitleText = /*#__PURE__*/styled.div.withConfig({
  displayName: "notification__ChannelTitleText",
  componentId: "sc-v9nuxx-11"
})(["font-size:", ";font-weight:", ";"], props => {
  var _a, _b;

  return (_b = (_a = props === null || props === void 0 ? void 0 : props.themeObject) === null || _a === void 0 ? void 0 : _a.fontSize) === null || _b === void 0 ? void 0 : _b.notificationTitleText;
}, props => {
  var _a, _b;

  return (_b = (_a = props === null || props === void 0 ? void 0 : props.themeObject) === null || _a === void 0 ? void 0 : _a.fontWeight) === null || _b === void 0 ? void 0 : _b.notificationTitleText;
});
const ChannelDesc = /*#__PURE__*/styled.div.withConfig({
  displayName: "notification__ChannelDesc",
  componentId: "sc-v9nuxx-12"
})(["line-height:20px;flex:1;display:flex;font-size:", ";color:", ";font-weight:", ";flex-direction:column;"], props => {
  var _a, _b;

  return (_b = (_a = props === null || props === void 0 ? void 0 : props.themeObject) === null || _a === void 0 ? void 0 : _a.fontSize) === null || _b === void 0 ? void 0 : _b.notificationContentText;
}, props => {
  var _a, _b;

  return (_b = (_a = props === null || props === void 0 ? void 0 : props.themeObject) === null || _a === void 0 ? void 0 : _a.color) === null || _b === void 0 ? void 0 : _b.notificationContentText;
}, props => {
  var _a, _b;

  return (_b = (_a = props === null || props === void 0 ? void 0 : props.themeObject) === null || _a === void 0 ? void 0 : _a.fontWeight) === null || _b === void 0 ? void 0 : _b.notificationContentText;
});
const ChannelDescLabel = /*#__PURE__*/styled.label.withConfig({
  displayName: "notification__ChannelDescLabel",
  componentId: "sc-v9nuxx-13"
})(["cursor:", ";color:", ";flex:1;margin:0px;text-align:left;"], props => props.cta ? 'pointer' : 'default', props => {
  var _a, _b;

  return (_b = (_a = props === null || props === void 0 ? void 0 : props.themeObject) === null || _a === void 0 ? void 0 : _a.color) === null || _b === void 0 ? void 0 : _b.notificationContentText;
});
const ChannelMetaInfo = /*#__PURE__*/styled.div.withConfig({
  displayName: "notification__ChannelMetaInfo",
  componentId: "sc-v9nuxx-14"
})(["display:", ";flex-direction:row;justify-content:", ";"], props => props.hidden ? 'none' : 'flex', props => props.hasLeft ? 'space-between' : 'end');
const ChannelMetaSection = /*#__PURE__*/styled.div.withConfig({
  displayName: "notification__ChannelMetaSection",
  componentId: "sc-v9nuxx-15"
})(["display:", ";align-items:center;"], props => props.hidden ? 'none' : 'flex');
const ChannelMetaInfoLeft = /*#__PURE__*/styled(ChannelMetaSection).withConfig({
  displayName: "notification__ChannelMetaInfoLeft",
  componentId: "sc-v9nuxx-16"
})(["justify-content:start;"]);
const ChannelMetaInfoRight = /*#__PURE__*/styled(ChannelMetaSection).withConfig({
  displayName: "notification__ChannelMetaInfoRight",
  componentId: "sc-v9nuxx-17"
})(["justify-content:end;"]);
const TimestampLabel = /*#__PURE__*/styled.label.withConfig({
  displayName: "notification__TimestampLabel",
  componentId: "sc-v9nuxx-18"
})(["color:", ";border-radius:0;border-top-left-radius:6px;border-bottom-right-radius:10px;border-right:0;border-bottom:0;margin-bottom:-1px;margin-right:-1px;font-weight:", ";font-size:", ";padding:6px 10px 6px 0px;"], props => {
  var _a, _b;

  return (_b = (_a = props === null || props === void 0 ? void 0 : props.themeObject) === null || _a === void 0 ? void 0 : _a.color) === null || _b === void 0 ? void 0 : _b.timestamp;
}, props => {
  var _a, _b;

  return (_b = (_a = props === null || props === void 0 ? void 0 : props.themeObject) === null || _a === void 0 ? void 0 : _a.fontWeight) === null || _b === void 0 ? void 0 : _b.timestamp;
}, props => {
  var _a, _b;

  return (_b = (_a = props === null || props === void 0 ? void 0 : props.themeObject) === null || _a === void 0 ? void 0 : _a.fontSize) === null || _b === void 0 ? void 0 : _b.timestamp;
});
const SecretIconContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "notification__SecretIconContainer",
  componentId: "sc-v9nuxx-19"
})(["margin:6px;"]);
const SecretIcon = /*#__PURE__*/styled.div.withConfig({
  displayName: "notification__SecretIcon",
  componentId: "sc-v9nuxx-20"
})(["width:12px;height:12px;border-radius:50%;background:linear-gradient( 135deg,#e20880 12.5%,#674c9f 49.89%,#35c5f3 87.5% );"]);
const ButtonGroupContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "notification__ButtonGroupContainer",
  componentId: "sc-v9nuxx-21"
})(["display:flex;align-items:center;justify-content:flex-end;"]);
const ButtonGroup = /*#__PURE__*/styled.div.withConfig({
  displayName: "notification__ButtonGroup",
  componentId: "sc-v9nuxx-22"
})(["display:flex;gap:20px;"]);

/**
 * A list of links to different components of the EPNS eco system
 */
const LINKS = [{
  text: "Push Browser Extension",
  link: "https://chrome.google.com/webstore/detail/epns-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg",
  img: "https://backend-kovan.epns.io/assets/googlechromeicon.png"
}, {
  text: "Push App (iOS)",
  link: "https://apps.apple.com/app/ethereum-push-service-epns/id1528614910",
  img: "https://backend-kovan.epns.io/assets/apple.png"
}, {
  text: "Push App (Android)",
  link: "https://play.google.com/store/apps/details?id=io.epns.epns",
  img: "https://backend-kovan.epns.io/assets/playstorecolor@3x.png"
}, {
  text: "Visit our dApp",
  link: "https://app.push.org/",
  img: "https://backend-kovan.epns.io/assets/dappcolor@3x.png"
}];

const SubscribedModal = ({
  onClose
}) => {
  const modalRef = React.useRef(null);

  const goto = url => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  useClickAway(modalRef, onClose);
  return jsx(Overlay, Object.assign({
    className: "overlay"
  }, {
    children: jsxs(Modal$4, Object.assign({
      className: "modal",
      ref: modalRef
    }, {
      children: [jsx(CloseButton$1, {
        onClick: onClose
      }), jsxs(Item, Object.assign({
        className: "modal__heading"
      }, {
        children: [jsxs(CustomHeaderTwo, {
          children: [jsx(CustomSpan, {
            children: "Receive"
          }), jsx(StyledSpan, {
            children: "Notifications"
          })]
        }), jsxs(H3, {
          children: ["Receive notifications from ", jsx("b", {
            children: "Push"
          }), " via the following platforms."]
        })]
      })), jsx(Item, Object.assign({
        className: "modal__content"
      }, {
        children: LINKS.map(oneLink => jsxs(ItemLink, Object.assign({
          onClick: () => goto(oneLink.link)
        }, {
          children: [jsx("img", {
            src: oneLink.img,
            alt: ""
          }), oneLink.text]
        }), oneLink.link))
      }))]
    }))
  }));
};
const CloseButton$1 = /*#__PURE__*/styled.a.withConfig({
  displayName: "subscribemodal__CloseButton",
  componentId: "sc-1gg76ik-0"
})(["position:absolute;right:10px;top:37px;width:40px;height:40px;opacity:0.3;cursor:pointer;&:hover{opacity:1;}&:before,&:after{position:absolute;content:\" \";height:33px;width:2px;background-color:#333;}&:before{transform:rotate(45deg);}&:after{transform:rotate(-45deg);}"]);
const ItemLink = /*#__PURE__*/styled.div.withConfig({
  displayName: "subscribemodal__ItemLink",
  componentId: "sc-1gg76ik-1"
})(["width:260px;height:62px;padding-left:22px;background:#fafafa;border:0.2px solid rgba(0,0,0,0.16);box-sizing:border-box;border-radius:5px;font-size:0.75em;text-transform:uppercase;display:flex;align-items:center;gap:1.3125em;cursor:pointer;transition:300ms;&:hover{box-shadow:0px 4px 4px rgba(0,0,0,0.25);}"]);
const CustomHeaderTwo = /*#__PURE__*/styled.h2.withConfig({
  displayName: "subscribemodal__CustomHeaderTwo",
  componentId: "sc-1gg76ik-2"
})(["margin-top:0;margin-bottom:1em;color:rgb(0,0,0);font-weight:600;font-size:1.5625em;letter-spacing:0.1em;text-transform:uppercase;padding:0px;font-family:inherit;text-align:inherit;@media (max-width:1000px){font-size:1.2625em;}"]);
const Item = /*#__PURE__*/styled.div.withConfig({
  displayName: "subscribemodal__Item",
  componentId: "sc-1gg76ik-3"
})(["display:flex;flex-direction:column;text-transform:capitalise;&.modal__heading{margin-bottom:3.3125rem;}&.modal__content{display:grid;grid-template-columns:50% 50%;grid-row-gap:3.3125em;}"]);
const CustomSpan = /*#__PURE__*/styled.span.withConfig({
  displayName: "subscribemodal__CustomSpan",
  componentId: "sc-1gg76ik-4"
})(["flex:initial;align-self:auto;color:rgb(0,0,0);background:transparent;font-weight:400;font-size:inherit;text-transform:inherit;margin:0px;padding:0px;letter-spacing:inherit;text-align:initial;position:initial;inset:auto;z-index:auto;margin-right:10px;@media (max-width:600px){display:block;margin-bottom:7px;}"]);
const StyledSpan = /*#__PURE__*/styled(CustomSpan).withConfig({
  displayName: "subscribemodal__StyledSpan",
  componentId: "sc-1gg76ik-5"
})(["background:rgb(226,8,128);color:#fff;font-weight:600;padding:3px 8px;@media (max-width:600px){display:inline;}"]);
const H3 = /*#__PURE__*/styled.h3.withConfig({
  displayName: "subscribemodal__H3",
  componentId: "sc-1gg76ik-6"
})(["color:rgb(0 0 0 / 0.5);font-weight:300;font-size:1em;text-transform:uppercase;margin:-15px 0px 20px 0px;padding:0px;letter-spacing:0.1em;font-family:\"Source Sans Pro\",Helvetica,sans-serif;text-align:inherit;max-width:initial;@media (max-width:600px){margin-top:0;margin-bottom:-7px;}@media (max-width:1000px){width:90%;}"]);
const Overlay = /*#__PURE__*/styled.div.withConfig({
  displayName: "subscribemodal__Overlay",
  componentId: "sc-1gg76ik-7"
})(["top:0;left:0;right:0;background:rgba(0,0,0,0.85);height:100%;width:100%;z-index:1000;position:fixed;display:flex;justify-content:center;align-items:center;overflow-y:scroll;"]);
const Modal$4 = /*#__PURE__*/styled.div.withConfig({
  displayName: "subscribemodal__Modal",
  componentId: "sc-1gg76ik-8"
})(["padding:3.875em;background:white;text-align:left;border:1px solid rgba(0,0,0,0.16);box-sizing:border-box;box-shadow:0px 4px 4px rgba(0,0,0,0.25);border-radius:15px;position:relative;& > img{position:absolute;right:40px;top:40px;cursor:pointer;}@media (max-width:1000px){width:max(70vw,350px);padding:2em;.modal__content{display:flex !important;flex-direction:column !important;align-items:center !important;gap:10px !important;}}"]);

/**
 * @file theme file: all the predefined themes are defined here
 */
const lightTheme = {
  titleBg: 'linear-gradient(87.17deg, #EA4EE4 0%, #D23CDF 0.01%, #8B5CF6 100%)',
  titleTextColor: '#fff',
  bgColorPrimary: '#fff',
  bgColorSecondary: '#EDE9FE',
  textColorPrimary: '#000',
  textColorSecondary: '#71717A',
  textGradient: 'linear-gradient(45deg, #B6A0F5, #F46EF6, #FFDED3, #FFCFC5)',
  btnColorPrimary: '#8B5CF6',
  btnOutline: '#8B5CF6',
  borderColor: '#DCDCDF',
  borderRadius: '17px',
  containerBorderRadius: '12px',
  statusColorError: '#E93636',
  statusColorSuccess: '#30CC8B',
  iconColorPrimary: '#82828A'
};

/**
 * @file ThemeProvider.tsx: This acts as the custom theme provider for the entire app.
 */
const ThemeContext$1 = /*#__PURE__*/createContext(lightTheme);

const SpaceBannerLoadingSkeleton = () => {
  const theme = React__default.useContext(ThemeContext$1);
  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsxs(SkeletonContainer, {
      children: [jsxs(SkeletonContent, {
        children: [jsx(SkeletonProfilePic, {}), jsxs(SkeletonProfileInfo, {
          children: [jsx(SkeletonName, {}), jsx(SkeletonHandle, {})]
        })]
      }), jsx(SkeletonSpaceInfo, {}), jsxs(SkeletonLine, {
        children: [jsx(SkeletonLeftSquare, {}), jsxs(SkeletonOverlap, {
          children: [jsx(SkeletonOverlapProfilePic, {}), jsx(SkeletonOverlapProfilePic, {}), jsx(SkeletonOverlapProfilePic, {})]
        })]
      })]
    })
  }));
};
const SkeletonContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceBannerLoadingSkeleton__SkeletonContainer",
  componentId: "sc-qo65s5-0"
})(["display:flex;flex-direction:column;gap:24px;padding:16px;background-color:", ";border-radius:17px;border:1px solid ", ";;position:relative;width:inherit;&:after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;border-radius:17px;background-color:", ";opacity:0.5;transition:opacity 0.8s ease-in-out infinite alternate;}&:hover:after{opacity:0.3;}"], props => props.theme.bgColorPrimary, props => props.theme.borderColor, props => props.theme.bgColorPrimary);
const SkeletonContent = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceBannerLoadingSkeleton__SkeletonContent",
  componentId: "sc-qo65s5-1"
})(["display:flex;align-items:center;gap:10px;"]);
const SkeletonProfilePic = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceBannerLoadingSkeleton__SkeletonProfilePic",
  componentId: "sc-qo65s5-2"
})(["width:48px;height:48px;border-radius:50%;border:1px solid ", ";background-color:", ";transition:opacity 0.8s ease-in-out infinite alternate;&:hover{opacity:0.5;}"], props => props.theme.borderColor, props => props.theme.iconColorPrimary);
const SkeletonProfileInfo = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceBannerLoadingSkeleton__SkeletonProfileInfo",
  componentId: "sc-qo65s5-3"
})(["display:flex;flex-direction:column;gap:5px;width:100%;"]);
const SkeletonText = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceBannerLoadingSkeleton__SkeletonText",
  componentId: "sc-qo65s5-4"
})(["width:100%;height:18px;background-color:", ";border-radius:8px;border:1px solid ", ";transition:opacity 0.8s ease-in-out infinite alternate;&:hover{opacity:0.5;}"], props => props.theme.iconColorPrimary, props => props.theme.borderColor);
const SkeletonName = /*#__PURE__*/styled(SkeletonText).withConfig({
  displayName: "SpaceBannerLoadingSkeleton__SkeletonName",
  componentId: "sc-qo65s5-5"
})(["width:30%;"]);
const SkeletonHandle = /*#__PURE__*/styled(SkeletonText).withConfig({
  displayName: "SpaceBannerLoadingSkeleton__SkeletonHandle",
  componentId: "sc-qo65s5-6"
})(["width:40%;"]);
const SkeletonSpaceInfo = /*#__PURE__*/styled(SkeletonText).withConfig({
  displayName: "SpaceBannerLoadingSkeleton__SkeletonSpaceInfo",
  componentId: "sc-qo65s5-7"
})(["width:100%;height:30px;"]);
const SkeletonLine = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceBannerLoadingSkeleton__SkeletonLine",
  componentId: "sc-qo65s5-8"
})(["display:flex;align-items:center;width:100%;"]);
const SkeletonLeftSquare = /*#__PURE__*/styled(SkeletonText).withConfig({
  displayName: "SpaceBannerLoadingSkeleton__SkeletonLeftSquare",
  componentId: "sc-qo65s5-9"
})(["width:10%;height:32px;"]);
const SkeletonOverlap = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceBannerLoadingSkeleton__SkeletonOverlap",
  componentId: "sc-qo65s5-10"
})(["display:flex;align-items:flex-start;justify-content:right;width:100%;margin-top:8px;"]);
const SkeletonOverlapProfilePic = /*#__PURE__*/styled(SkeletonProfilePic).withConfig({
  displayName: "SpaceBannerLoadingSkeleton__SkeletonOverlapProfilePic",
  componentId: "sc-qo65s5-11"
})(["height:48px;border:1px solid ", ";margin-left:-24px;transition:opacity 0.8s ease-in-out infinite alternate;&:nth-child(2){margin-left:-24px;}&:nth-child(3){margin-left:-24px;}"], props => props.theme.borderColor);

/**
 * Get Date and Time in Day.
 * @param {string | Date} datestring - The JavaScript Date String or Date Object.
 * @returns {string} - The Date and Time in Day, DD Month at HH:MM AM format.
 */
function getDateAndTime(datestring) {
  const date = new Date(datestring); //Day of Week

  const dayOfWeek = date.getDay();
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weekday = weekdays[dayOfWeek]; //Date

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = months[monthIndex]; //Time

  const amOrPm = date.getHours() >= 12 ? 'PM' : 'AM';
  const hour = amOrPm === 'PM' ? date.getHours() % 12 : date.getHours();
  const minute = date.getMinutes();
  return `${weekday}, ${day} ${month} at ${hour}:${minute} ${amOrPm}`;
}

/**
 * Get Status of the Space.
 * @param {string | Date} datestring - The JavaScript Date String or Date Object.
 * @returns {string} - The Status of the Space.
 */
function getSpaceStatus(status) {
  if (status === 'ACTIVE') return 'Live';
  if (status === 'PENDING') return 'Scheduled';
  return 'Ended';
}

const ParticipantContainer = ({
  participants,
  orientation,
  imageHeight
}) => {
  return jsxs(Participants, {
    children: [jsx(ParticipantsIconContainer, Object.assign({
      orientation: orientation
    }, {
      children: orientation === 'pill' ? participants && participants.map((person, index) => index < 2 && jsx(ParticipantsIcon, {
        src: person === null || person === void 0 ? void 0 : person.image,
        alt: "avatar",
        className: `index${index}`
      })) : participants && participants.map((person, index) => index < 3 && jsx(ParticipantsIcon, {
        src: person === null || person === void 0 ? void 0 : person.image,
        alt: "avatar",
        className: `index${index}`
      }))
    })), jsx(ParticipantsText, {
      children: orientation === 'pill' ? participants && participants.length - 3 > 0 ? `+${participants.length - 3}` : null : participants && participants.length - 3 > 0 ? `+${participants.length - 3}` : null
    })]
  });
};
const Participants = /*#__PURE__*/styled.div.withConfig({
  displayName: "ParticipantContainer__Participants",
  componentId: "sc-1fgkl2u-0"
})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;}"]);
const ParticipantsIconContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "ParticipantContainer__ParticipantsIconContainer",
  componentId: "sc-1fgkl2u-1"
})(["display:grid;grid-template-columns:repeat(5,1fr);width:", ";padding:0 4px;}"], props => props.orientation === 'pill' ? '46.5px' : '62px');
const ParticipantsIcon = /*#__PURE__*/styled.img.withConfig({
  displayName: "ParticipantContainer__ParticipantsIcon",
  componentId: "sc-1fgkl2u-2"
})(["height:", ";border-radius:50%;&.index0{position:relative;top:0;left:0;}&.index1{position:relative;top:0;left:-50%;}&.index2{position:relative;top:0;left:-100%;}}"], props => props.imageHeight ? props.imageHeight : '31px');
const ParticipantsText = /*#__PURE__*/styled.div.withConfig({
  displayName: "ParticipantContainer__ParticipantsText",
  componentId: "sc-1fgkl2u-3"
})(["display:flex;justify-content:center;align-items:center;width:auto;}"]);

const HostPfpContainer = ({
  name: _name = 'Host Name',
  handle: _handle = 'Host Handle',
  imageUrl: _imageUrl = '',
  statusTheme,
  imageHeight
}) => {
  const theme = React__default.useContext(ThemeContext$1);
  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsxs(ProfileContainer$2, Object.assign({
      theme: theme
    }, {
      children: [jsx(PfpContainer$1, Object.assign({
        theme: theme
      }, {
        children: jsx(Pfp$1, {
          src: _imageUrl,
          alt: "host pfp",
          imageHeight: imageHeight,
          theme: theme
        })
      })), jsxs(HostContainer$1, Object.assign({
        theme: theme
      }, {
        children: [jsxs(HostName$1, Object.assign({
          theme: theme
        }, {
          children: [jsx(Name$1, Object.assign({
            theme: theme
          }, {
            children: _name
          })), jsx(Host$1, Object.assign({
            statusTheme: statusTheme,
            theme: theme
          }, {
            children: "Host"
          }))]
        })), _handle && jsxs(HostHandle$1, Object.assign({
          statusTheme: statusTheme,
          theme: theme
        }, {
          children: ["@", _handle]
        }))]
      }))]
    }))
  }));
};
const ProfileContainer$2 = /*#__PURE__*/styled.div.withConfig({
  displayName: "HostPfpContainer__ProfileContainer",
  componentId: "sc-vviclm-0"
})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;align-items:center;"]);
const PfpContainer$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "HostPfpContainer__PfpContainer",
  componentId: "sc-vviclm-1"
})(["display:flex;"]);
const Pfp$1 = /*#__PURE__*/styled.img.withConfig({
  displayName: "HostPfpContainer__Pfp",
  componentId: "sc-vviclm-2"
})(["height:", ";width:", ";border-radius:50%;"], props => {
  var _a;

  return (_a = props.imageHeight) !== null && _a !== void 0 ? _a : '32px';
}, props => {
  var _a;

  return (_a = props.imageHeight) !== null && _a !== void 0 ? _a : '32px';
});
const HostContainer$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "HostPfpContainer__HostContainer",
  componentId: "sc-vviclm-3"
})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding-left:8px;width:100%;overflow:hidden;text-overflow:ellipsis;"]);
const HostName$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "HostPfpContainer__HostName",
  componentId: "sc-vviclm-4"
})(["display:flex;flex-direction:row;font-weight:600;font-size:15px;width:100%;"]);
const Name$1 = /*#__PURE__*/styled.span.withConfig({
  displayName: "HostPfpContainer__Name",
  componentId: "sc-vviclm-5"
})(["text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:color:", ";"], props => props.statusTheme === 'Live' ? `${props.theme.titleTextColor}` : `${props.theme.textColorPrimary}`);
const Host$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "HostPfpContainer__Host",
  componentId: "sc-vviclm-6"
})(["display:flex;flex-direction:row;align-items:center;padding:2px 8px;margin-left:8px;line-height:18px;width:max-content;height:19px;background:", ";color:", ";border-radius:6px;font-weight:500;font-size:10px;"], props => props.statusTheme === 'Live' ? `${props.theme.btnOutline}` : `${props.theme.btnOutline}`, props => props.statusTheme === 'Live' ? 'inherit' : `${props.theme.bgColorSecondary}`);
const HostHandle$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "HostPfpContainer__HostHandle",
  componentId: "sc-vviclm-7"
})(["color:", ";padding:0;font-weight:450;font-size:14px;line-height:130%;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;"], props => props.statusTheme === 'Live' ? `${props.theme.titleTextColor}` : `${props.theme.textColorSecondary}`);

var img$A = "data:image/svg+xml,%3csvg width='23' height='23' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_11578_40259)'%3e%3cpath d='M6.5 9.08984V13.0898' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M10.5 4.08984V18.0898' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M14.5 6.58984L14.5 15.5898' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M18.5 9.08984L18.5 13.0898' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_11578_40259'%3e%3crect width='22' height='23' fill='white' transform='translate(0.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

const Scheduled = ({
  color
}) => {
  return jsxs("svg", Object.assign({
    width: "20",
    height: "21",
    viewBox: "0 0 20 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsx("path", {
      d: "M16.25 3.625H3.75C3.40482 3.625 3.125 3.90482 3.125 4.25V16.75C3.125 17.0952 3.40482 17.375 3.75 17.375H16.25C16.5952 17.375 16.875 17.0952 16.875 16.75V4.25C16.875 3.90482 16.5952 3.625 16.25 3.625Z",
      stroke: color !== null && color !== void 0 ? color : '#8B5CF6',
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), jsx("path", {
      d: "M13.75 2.375V4.875",
      stroke: color !== null && color !== void 0 ? color : '#8B5CF6',
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), jsx("path", {
      d: "M6.25 2.375V4.875",
      stroke: color !== null && color !== void 0 ? color : '#8B5CF6',
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), jsx("path", {
      d: "M3.125 7.375H16.875",
      stroke: color !== null && color !== void 0 ? color : '#8B5CF6',
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })]
  }));
};

const SpaceBanner = ({
  spaceId,
  orientation,
  isInvite,
  onBannerClick,
  actionCallback
}) => {
  const theme = React__default.useContext(ThemeContext$1);
  const spaceData = useGetSpaceInfo(spaceId);
  const {
    spacesObjectRef,
    spaceObjectData,
    initSpaceObject,
    setSpaceWidgetId,
    isSpeaker,
    isListener,
    account,
    env
  } = useSpaceData();
  const spaceStatus = getSpaceStatus(spaceData === null || spaceData === void 0 ? void 0 : spaceData.status);

  const handleClick = () => {
    if (onBannerClick) {
      onBannerClick((spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceId) || '');
    }
  };

  const handleJoinSpace = () => __awaiter(void 0, void 0, void 0, function* () {
    yield initSpaceObject(spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceId);
    actionCallback();
    setSpaceWidgetId(spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceId);
  }); // Check if the spaceData is not available, show the skeleton loading effect


  if (!spaceData) {
    return jsx(SpaceBannerLoadingSkeleton, {});
  }

  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsxs(Container$k, Object.assign({
      orientation: orientation,
      status: spaceStatus,
      theme: theme,
      onClick: handleClick,
      clickable: Boolean(onBannerClick)
    }, {
      children: [orientation === 'maximized' && jsx(HostPfpContainer, {
        name: spaceData === null || spaceData === void 0 ? void 0 : spaceData.members[0].wallet.slice(7),
        statusTheme: spaceStatus,
        imageHeight: '48px',
        imageUrl: spaceData === null || spaceData === void 0 ? void 0 : spaceData.members[0].image,
        handle: spaceData === null || spaceData === void 0 ? void 0 : spaceData.members[0].wallet.slice(7)
      }), orientation === 'maximized' ? null : spaceStatus === 'Live' ? jsx(Icon, {
        src: img$A,
        alt: "status"
      }) : jsx(Scheduled, {
        color: theme.btnOutline
      }), jsx(Title$2, Object.assign({
        orientation: orientation,
        theme: theme,
        status: spaceStatus
      }, {
        children: orientation === 'pill' ? `${spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceName.slice(0, 20)}...` : spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceName
      })), jsxs(Status, Object.assign({
        orientation: orientation,
        theme: theme
      }, {
        children: [jsxs(Time, Object.assign({
          orientation: orientation
        }, {
          children: [spaceStatus === 'Live' ? jsx(Icon, {
            src: img$A,
            alt: "status"
          }) : jsx(Scheduled, {
            color: theme.btnOutline
          }), jsx(TimeText, Object.assign({
            status: spaceStatus
          }, {
            children: spaceStatus === 'Live' ? 'Live' : spaceStatus === 'Scheduled' ? `${getDateAndTime(spaceData === null || spaceData === void 0 ? void 0 : spaceData.scheduleAt)}` : 'Ended'
          }))]
        })), jsx(ParticipantContainer, {
          participants: spaceData === null || spaceData === void 0 ? void 0 : spaceData.pendingMembers,
          orientation: orientation
        })]
      })), isInvite === true && spaceStatus === 'Live' ? jsx(InviteButton, Object.assign({
        status: "Live",
        onClick: handleJoinSpace
      }, {
        children: "Join this space"
      })) : isInvite === true && spaceStatus === 'Scheduled' ? // <InviteButton status="Scheduled">Remind Me</InviteButton> 
      jsx(Fragment, {}) : null]
    }))
  }));
}; // Styling

const Container$k = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceBanner__Container",
  componentId: "sc-qqsw1n-0"
})(["display:flex;flex-direction:", ";justify-content:", ";align-items:", ";padding:", ";gap:", ";width:", ";height:", ";background:", ";border-radius:", ";color:", ";min-width:0;text-overflow:ellipsis;overflow:hidden;cursor:", ";"], props => props.orientation === 'maximized' ? 'column' : 'row', props => props.orientation === 'maximized' ? 'space-between' : 'space-between', props => props.orientation === 'maximized' ? 'flex-start' : 'center', props => props.orientation === 'maximized' ? '16px' : props.orientation === 'minimized' ? '0 20px' : '0 11px', props => props.orientation === 'maximized' ? '16px' : '8px', props => props.orientation === 'maximized' ? 'inherit' : props.orientation === 'minimized' ? 'inherit' : 'fit-content', props => props.orientation === 'maximized' ? 'auto' : props.orientation === 'minimized' ? '40px' : '63px', props => props.status === 'Live' ? props.theme.titleBg : props.theme.bgColorSecondary, props => props.orientation === 'maximized' ? '17px' : props.orientation === 'minimized' ? '12px' : '24px', props => props.status === 'Live' ? `${props.theme.titleTextColor}` : `${props.theme.textColorPrimary}`, props => props.clickable && 'pointer');
const Title$2 = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceBanner__Title",
  componentId: "sc-qqsw1n-1"
})(["display:flex;flex-direction:row;justify-content:flex-start;align-items:center;font-family:Strawford;font-weight:", ";font-size:", ";line-height:130%;color:", ";width:90%;line-clamp:", ";@media (max-width:425px){width:95%;}"], props => props.orientation === 'maximized' ? '700' : '500', props => props.orientation === 'maximized' ? '20px' : props.orientation === 'minimized' ? '16px' : '12px', props => props.status === 'Live' ? props.theme.titleTextColor : props.theme.textColorPrimary, props => props.orientation === 'maximized' ? '3' : '2');
const Status = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceBanner__Status",
  componentId: "sc-qqsw1n-2"
})(["display:flex;flex-direction:row;width:", ";justify-content:space-between;align-items:center;"], props => props.orientation === 'maximized' ? '100%' : 'fit-content');
const Time = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceBanner__Time",
  componentId: "sc-qqsw1n-3"
})(["display:", ";flex-direction:row;justify-content:center;align-items:center;"], props => props.orientation === 'maximized' ? 'flex' : 'none');
const Icon = /*#__PURE__*/styled.img.withConfig({
  displayName: "SpaceBanner__Icon",
  componentId: "sc-qqsw1n-4"
})(["height:24px;width:24px;padding:0 11px 0 0;align-self:center;"]);
const TimeText = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceBanner__TimeText",
  componentId: "sc-qqsw1n-5"
})(["font-weight:500;font-size:14px;line-height:150%;color:", ";"], props => props.status === 'Live' ? `${props.theme.titleTextColor}` : `${props.theme.textColorSecondary}`);
const InviteButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "SpaceBanner__InviteButton",
  componentId: "sc-qqsw1n-6"
})(["display:flex;justify-content:center;align-items:center;height:36px;width:100%;color:", ";border-radius:8px;border:", ";background:transparent;cursor:pointer;"], props => props.status === 'Live' ? `${props.theme.titleTextColor}` : `${props.theme.btnColorPrimary}`, props => props.status === 'Live' ? `1px solid ${props.theme.titleTextColor}` : `1px solid ${props.theme.btnColorPrimary}`);

const VideoPlayer = ({
  videoCallData
}) => {
  const incomingVideoRef = useRef(null);
  useEffect(() => {
    if (!(incomingVideoRef === null || incomingVideoRef === void 0 ? void 0 : incomingVideoRef.current)) return;
    const video = incomingVideoRef.current;
    video.srcObject = videoCallData;
    video.play();
  }, [incomingVideoRef === null || incomingVideoRef === void 0 ? void 0 : incomingVideoRef.current, videoCallData]);
  return jsx(Video, {
    ref: incomingVideoRef
  });
};
const Video = /*#__PURE__*/styled.video.withConfig({
  displayName: "VideoPlayer__Video",
  componentId: "sc-h46doi-0"
})(["height:0;width:0;"]);

var img$z = "data:image/svg+xml,%3csvg width='13' height='12' viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_11746_42664)'%3e%3cpath d='M8.3758 3.5625C8.3758 3.31386 8.47457 3.0754 8.65039 2.89959C8.8262 2.72377 9.06466 2.625 9.3133 2.625C9.56194 2.625 9.8004 2.72377 9.97621 2.89959C10.152 3.0754 10.2508 3.31386 10.2508 3.5625V7.125C10.2508 7.61746 10.1538 8.10509 9.96535 8.56006C9.77689 9.01503 9.50067 9.42843 9.15245 9.77665C8.80423 10.1249 8.39083 10.4011 7.93586 10.5895C7.48089 10.778 6.99326 10.875 6.5008 10.875C4.42986 10.875 3.65314 9.8775 2.12642 6.65625C2.00406 6.44104 1.9718 6.18617 2.03666 5.94725C2.10152 5.70834 2.25825 5.50478 2.47265 5.38099C2.68704 5.25721 2.9417 5.22325 3.18103 5.28653C3.42037 5.3498 3.62497 5.50518 3.75017 5.71875L4.6258 7.125V2.8125C4.6258 2.56386 4.72457 2.3254 4.90039 2.14959C5.0762 1.97377 5.31466 1.875 5.5633 1.875C5.81194 1.875 6.0504 1.97377 6.22621 2.14959C6.40203 2.3254 6.5008 2.56386 6.5008 2.8125' stroke='%238B5CF6' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M6.5 5.625V2.0625C6.5 1.81386 6.59877 1.5754 6.77459 1.39959C6.9504 1.22377 7.18886 1.125 7.4375 1.125C7.68614 1.125 7.9246 1.22377 8.10041 1.39959C8.27623 1.5754 8.375 1.81386 8.375 2.0625V5.625' stroke='%238B5CF6' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_11746_42664'%3e%3crect width='12' height='12' fill='white' transform='translate(0.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

var img$y = "data:image/svg+xml,%3csvg width='12' height='14' viewBox='0 0 12 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M11.3701 12.1637L1.37013 1.16369C1.32622 1.1142 1.27292 1.07391 1.21333 1.04516C1.15373 1.01642 1.08902 0.999783 1.02295 0.996229C0.956884 0.992675 0.890766 1.00227 0.828431 1.02446C0.766097 1.04664 0.708786 1.08098 0.65982 1.12548C0.610854 1.16998 0.571207 1.22376 0.543177 1.28369C0.515147 1.34363 0.499292 1.40853 0.49653 1.47463C0.493768 1.54074 0.504154 1.60674 0.527087 1.66881C0.550019 1.73087 0.585042 1.78776 0.630126 1.83619L3.00013 4.44307V6.99994C3.0002 7.53837 3.14517 8.06686 3.41985 8.52996C3.69452 8.99306 4.08877 9.3737 4.56122 9.63195C5.03368 9.8902 5.56693 10.0165 6.10503 9.99771C6.64313 9.97888 7.16625 9.81558 7.6195 9.52494L8.2995 10.2749C7.70016 10.696 6.99672 10.9444 6.26589 10.9931C5.53505 11.0417 4.80489 10.8888 4.15501 10.5509C3.50514 10.213 2.96051 9.70323 2.58052 9.07706C2.20053 8.45088 1.99977 7.7324 2.00013 6.99994C2.00013 6.86734 1.94745 6.74016 1.85368 6.64639C1.75991 6.55262 1.63273 6.49994 1.50013 6.49994C1.36752 6.49994 1.24034 6.55262 1.14657 6.64639C1.0528 6.74016 1.00013 6.86734 1.00013 6.99994C1.00165 8.23903 1.46258 9.43354 2.29378 10.3525C3.12498 11.2714 4.2674 11.8495 5.50013 11.9749V13.4999C5.50013 13.6326 5.5528 13.7597 5.64657 13.8535C5.74034 13.9473 5.86752 13.9999 6.00013 13.9999C6.13273 13.9999 6.25991 13.9473 6.35368 13.8535C6.44745 13.7597 6.50013 13.6326 6.50013 13.4999V11.9743C7.39687 11.8851 8.25265 11.5544 8.97638 11.0174L10.6301 12.8362C10.674 12.8857 10.7273 12.926 10.7869 12.9547C10.8465 12.9835 10.9112 13.0001 10.9773 13.0037C11.0434 13.0072 11.1095 12.9976 11.1718 12.9754C11.2342 12.9532 11.2915 12.9189 11.3404 12.8744C11.3894 12.8299 11.429 12.7761 11.4571 12.7162C11.4851 12.6563 11.501 12.5914 11.5037 12.5253C11.5065 12.4591 11.4961 12.3931 11.4732 12.3311C11.4502 12.269 11.4152 12.2121 11.3701 12.1637ZM6.00013 8.99994C5.46969 8.99994 4.96099 8.78923 4.58591 8.41416C4.21084 8.03908 4.00013 7.53038 4.00013 6.99994V5.54307L6.93263 8.76932C6.64514 8.92081 6.32508 8.99996 6.00013 8.99994ZM3.44763 1.42369C3.79063 0.868277 4.30543 0.439895 4.91393 0.203542C5.52243 -0.0328107 6.19142 -0.0642356 6.8194 0.114035C7.44737 0.292306 8.00007 0.670544 8.39362 1.19136C8.78718 1.71218 9.00011 2.34715 9.00013 2.99994V6.77682C9.00013 6.90943 8.94745 7.0366 8.85368 7.13037C8.75991 7.22414 8.63273 7.27682 8.50013 7.27682C8.36752 7.27682 8.24034 7.22414 8.14657 7.13037C8.0528 7.0366 8.00013 6.90943 8.00013 6.77682V2.99994C8.00037 2.56452 7.8585 2.14091 7.59607 1.79345C7.33364 1.44599 6.96498 1.19367 6.54609 1.0748C6.1272 0.955937 5.68097 0.977024 5.27515 1.13486C4.86934 1.2927 4.52612 1.57866 4.29763 1.94932C4.26433 2.00761 4.21964 2.0586 4.16622 2.09925C4.1128 2.1399 4.05174 2.16938 3.98668 2.18593C3.92162 2.20247 3.85389 2.20575 3.78754 2.19555C3.72119 2.18536 3.65757 2.16192 3.60047 2.12661C3.54338 2.0913 3.49398 2.04486 3.45522 1.99005C3.41646 1.93524 3.38913 1.87319 3.37486 1.80759C3.3606 1.74199 3.35969 1.6742 3.37219 1.60824C3.38469 1.54228 3.41035 1.47952 3.44763 1.42369ZM9.72763 8.45432C9.90853 7.99081 10.001 7.4975 10.0001 6.99994C10.0001 6.86734 10.0528 6.74016 10.1466 6.64639C10.2403 6.55262 10.3675 6.49994 10.5001 6.49994C10.6327 6.49994 10.7599 6.55262 10.8537 6.64639C10.9474 6.74016 11.0001 6.86734 11.0001 6.99994C11.001 7.62199 10.8853 8.23868 10.6589 8.81807C10.636 8.88057 10.6009 8.93788 10.5555 8.98663C10.5102 9.03538 10.4556 9.07459 10.3949 9.10196C10.3343 9.12932 10.2687 9.1443 10.2022 9.14601C10.1356 9.14772 10.0694 9.13613 10.0074 9.11191C9.94543 9.08769 9.88889 9.05134 9.84113 9.00498C9.79336 8.95862 9.75533 8.90319 9.72927 8.84194C9.70321 8.78069 9.68964 8.71486 9.68936 8.6483C9.68907 8.58173 9.70208 8.51579 9.72763 8.45432Z' fill='%23E93636'/%3e%3c/svg%3e";

var img$x = "data:image/svg+xml,%3csvg width='16' height='22' viewBox='0 0 16 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12 4.75C12 2.67893 10.3211 1 8.25 1C6.17893 1 4.5 2.67893 4.5 4.75V10.75C4.5 12.8211 6.17893 14.5 8.25 14.5C10.3211 14.5 12 12.8211 12 10.75V4.75Z' stroke='%238B5CF6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M8.25 17.5V20.5' stroke='%238B5CF6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M15 10.75C15 12.5402 14.2888 14.2571 13.023 15.523C11.7571 16.7888 10.0402 17.5 8.25 17.5C6.45979 17.5 4.7429 16.7888 3.47703 15.523C2.21116 14.2571 1.5 12.5402 1.5 10.75' stroke='%238B5CF6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e";

const LiveSpaceProfileContainer = options => {
  const theme = React__default.useContext(ThemeContext$1);
  const {
    wallet,
    isHost,
    isSpeaker,
    image,
    requested = false,
    mic = null,
    stream
  } = options || {};
  const [isDDOpen, setIsDDOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDDState = () => {
    setIsDDOpen(!isDDOpen);
  };

  useEffect(() => {
    const handleOutsideClick = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDDOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsxs(Item$1, Object.assign({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '118px'
    }, {
      children: [jsx(Image$5, {
        src: image,
        alt: "Profile pic",
        height: '56px',
        width: '56px',
        borderRadius: '50%',
        cursor: 'pointer',
        onClick: handleDDState
      }), jsxs(Text, Object.assign({
        fontSize: '16px',
        marginTop: '12px',
        fontWeight: 600,
        color: `${theme.textColorPrimary}`
      }, {
        children: [wallet.replace('eip155:', '').slice(0, -36) + '...', stream && jsx(VideoPlayer, {
          videoCallData: stream
        })]
      })), requested ? jsxs(Item$1, Object.assign({
        display: 'flex',
        marginTop: '5px',
        fontWeight: 600,
        gap: '4px',
        alignItems: 'center'
      }, {
        children: [jsx(Text, Object.assign({
          fontSize: '12px',
          color: `${theme.btnColorPrimary}`
        }, {
          children: "Requested"
        })), jsx(Image$5, {
          src: img$z,
          alt: "Hand Icon",
          height: '15px',
          width: '15px'
        })]
      })) : jsxs(Item$1, Object.assign({
        display: 'flex',
        marginTop: '5px',
        fontWeight: 600,
        gap: '4px',
        alignItems: 'center'
      }, {
        children: [jsx(Text, Object.assign({
          fontSize: '14px',
          color: `${theme.textColorSecondary}`
        }, {
          children: isHost ? 'Host' : isSpeaker ? 'Speaker' : 'Listener'
        })), mic === false && jsx(Image$5, {
          src: img$y,
          alt: "Mic Off Icon",
          height: '15px',
          width: '15px'
        }), mic && jsx(Image$5, {
          src: img$x,
          alt: "Mic On Icon",
          height: '15px',
          width: '15px'
        })]
      }))]
    }))
  }));
};

const ClickawayCloseModal$1 = ({
  children,
  clickawayClose,
  width
}) => {
  const modalRef = useRef(null);
  const theme = useContext(ThemeContext$1);
  useClickAway(modalRef, () => {
    if (clickawayClose) {
      clickawayClose();
    }
  });
  return jsx(ModalParent$1, Object.assign({
    ref: modalRef,
    width: width,
    theme: theme
  }, {
    children: children
  }));
};

const Modal$3 = ({
  clickawayClose,
  children,
  width
}) => {
  const theme = useContext(ThemeContext$1);
  return jsx(ModalOverlay$1, Object.assign({
    theme: theme
  }, {
    children: clickawayClose ? jsx(ClickawayCloseModal$1, Object.assign({
      clickawayClose: clickawayClose,
      width: width
    }, {
      children: children
    })) : jsx(ModalParent$1, Object.assign({
      width: width,
      theme: theme
    }, {
      children: children
    }))
  }));
};
/* styling */

const ModalOverlay$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "Modal__ModalOverlay",
  componentId: "sc-1q8t9j6-0"
})(["position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.4);display:flex;color:", ";justify-content:center;align-items:center;z-index:10;"], props => {
  var _a;

  return (_a = props.theme.textColorPrimary) !== null && _a !== void 0 ? _a : '#000';
});
const ModalParent$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "Modal__ModalParent",
  componentId: "sc-1q8t9j6-1"
})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;padding:24px 20px;background:", ";border-radius:12px;width:", ";"], props => props.theme.bgColorPrimary, props => props.width ? props.width : 'auto');

const CloseSvg = ({
  stroke,
  height,
  width
}) => {
  return jsxs("svg", Object.assign({
    width: width || "18.6",
    height: height || "19",
    viewBox: "0 0 19 19",
    fill: 'none',
    xmlns: "http://www.w3.org/2000/svg",
    cursor: "pointer"
  }, {
    children: [jsx("path", {
      d: "M14.1906 4.15625L3.97363 14.8438",
      stroke: stroke || "#657795",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), jsx("path", {
      d: "M14.1906 14.8438L3.97363 4.15625",
      stroke: stroke || "#657795",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })]
  }));
};

const ArrowLeft = () => {
  return jsxs("svg", Object.assign({
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsx("path", {
      d: "M16.875 10H3.125",
      stroke: "#82828A",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), jsx("path", {
      d: "M8.75 4.375L3.125 10L8.75 15.625",
      stroke: "#82828A",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })]
  }));
};

const ModalHeader$2 = props => {
  const theme = useContext(ThemeContext$1);
  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsxs(Header, {
      children: [props.backCallback ? jsx(BackBtn, Object.assign({
        onClick: props.backCallback
      }, {
        children: jsx(ArrowLeft, {})
      })) : null, jsxs(CenterText, {
        children: [props.heading, props.headingBadgeNumber && jsx(NumberBadge, Object.assign({
          theme: theme
        }, {
          children: props.headingBadgeNumber
        }))]
      }), props.closeCallback ? jsx(CloseBtn$1, Object.assign({
        onClick: props.closeCallback
      }, {
        children: jsx(CloseSvg, {})
      })) : null]
    })
  }));
};
/* styling */

const Header = /*#__PURE__*/styled.div.withConfig({
  displayName: "ModalHeader__Header",
  componentId: "sc-1ibnxvs-0"
})(["display:flex;align-items:center;width:100%;margin-bottom:24px;color:", ";"], props => props.theme.textColorPrimary);
const BackBtn = /*#__PURE__*/styled.button.withConfig({
  displayName: "ModalHeader__BackBtn",
  componentId: "sc-1ibnxvs-1"
})(["position:absolute;top:0;left:0;margin:1.5rem;border:none;background:transparent;&:hover{cursor:pointer;}"]);
const CloseBtn$1 = /*#__PURE__*/styled.button.withConfig({
  displayName: "ModalHeader__CloseBtn",
  componentId: "sc-1ibnxvs-2"
})(["position:absolute;top:0;right:0;margin:1.5rem;border:none;background:transparent;&:hover{cursor:pointer;}"]);
const CenterText = /*#__PURE__*/styled.div.withConfig({
  displayName: "ModalHeader__CenterText",
  componentId: "sc-1ibnxvs-3"
})(["position:absolute;top:0;left:50%;transform:translateX(-50%);margin:1.5rem 0;display:flex;flex-direction:row;align-items:center;font-weight:500;"]);
const NumberBadge = /*#__PURE__*/styled.div.withConfig({
  displayName: "ModalHeader__NumberBadge",
  componentId: "sc-1ibnxvs-4"
})(["display:flex;justify-content:center;align-items:center;background:", ";color:#fff;border-radius:8px;margin-left:8px;padding:4px 8px;font-size:13px;font-weight:500;}"], props => props.theme.btnColorPrimary);

const ProfileContainer$1 = ({
  name: _name = "Host Name",
  handle: _handle = "Host Handle",
  imageUrl: _imageUrl = "",
  tag,
  imageHeight,
  border: _border = false,
  contBtn,
  btnCallback,
  removeCallback,
  promoteCallback
}) => {
  const theme = useContext(ThemeContext$1);
  const dropdownRef = useRef(null);
  const [isDDOpen, setIsDDOpen] = useState(false);

  const handleDDState = () => {
    setIsDDOpen(!isDDOpen);
  };

  useEffect(() => {
    const handleOutsideClick = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDDOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsxs(ParentContainer, Object.assign({
      border: _border
    }, {
      children: [jsx(PfpContainer, {
        children: jsx(Pfp, {
          src: _imageUrl,
          alt: "host pfp",
          imageHeight: imageHeight
        })
      }), jsxs(HostContainer, {
        children: [jsxs(ProfileDetails, {
          children: [jsx(HostName, {
            children: jsx(Name, {
              children: _name
            })
          }), _handle && jsxs(HostHandle, Object.assign({
            theme: theme
          }, {
            children: ["@", _handle]
          }))]
        }), tag ? jsx(Host, {
          children: tag
        }) : null, contBtn ? jsx("div", Object.assign({
          onClick: btnCallback !== null && btnCallback !== void 0 ? btnCallback : handleDDState
        }, {
          children: contBtn
        })) : null]
      }), isDDOpen && (removeCallback || promoteCallback) ? jsxs(DropDown, Object.assign({
        theme: theme,
        ref: dropdownRef,
        isDDOpen: isDDOpen
      }, {
        children: [removeCallback ? jsx(DDItem, Object.assign({
          onClick: removeCallback
        }, {
          children: "Remove"
        })) : null, promoteCallback ? jsx(DDItem, Object.assign({
          onClick: promoteCallback
        }, {
          children: "Make Admin"
        })) : null]
      })) : null]
    }))
  }));
};
const ParentContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "ProfileContainer__ParentContainer",
  componentId: "sc-ia68b0-0"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;position:relative;padding:8px 16px;border:", ";color:", ";border-radius:16px;"], props => props.border ? '1px solid #E4E4E7' : 'none', props => {
  var _a;

  return (_a = props.theme.textColorPrimary) !== null && _a !== void 0 ? _a : '#000';
});
const PfpContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "ProfileContainer__PfpContainer",
  componentId: "sc-ia68b0-1"
})(["display:flex;"]);
const Pfp = /*#__PURE__*/styled.img.withConfig({
  displayName: "ProfileContainer__Pfp",
  componentId: "sc-ia68b0-2"
})(["height:", ";width:", ";;border-radius:50%;"], props => {
  var _a;

  return (_a = props.imageHeight) !== null && _a !== void 0 ? _a : '32px';
}, props => {
  var _a;

  return (_a = props.imageHeight) !== null && _a !== void 0 ? _a : '32px';
});
const HostContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "ProfileContainer__HostContainer",
  componentId: "sc-ia68b0-3"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding-left:8px;width:100%;overflow:hidden;text-overflow:ellipsis;"]);
const ProfileDetails = /*#__PURE__*/styled.div.withConfig({
  displayName: "ProfileContainer__ProfileDetails",
  componentId: "sc-ia68b0-4"
})(["display:flex;flex-direction:column;flex-grow:1;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:200px;"]);
const HostName = /*#__PURE__*/styled.div.withConfig({
  displayName: "ProfileContainer__HostName",
  componentId: "sc-ia68b0-5"
})(["display:flex;flex-direction:row;font-weight:600;font-size:15px;width:100%;"]);
const Name = /*#__PURE__*/styled.span.withConfig({
  displayName: "ProfileContainer__Name",
  componentId: "sc-ia68b0-6"
})(["text-overflow:ellipsis;white-space:nowrap;overflow:hidden;"]);
const Host = /*#__PURE__*/styled.div.withConfig({
  displayName: "ProfileContainer__Host",
  componentId: "sc-ia68b0-7"
})(["display:flex;flex-direction:row;align-items:center;margin-left:8px;line-height:18px;width:max-content;background:rgba(139,92,246,0.2);color:", ";border-radius:6px;font-weight:500;font-size:12px;padding:6px 10px;border-radius:8px;"], props => props.theme.btnColorPrimary);
const HostHandle = /*#__PURE__*/styled.div.withConfig({
  displayName: "ProfileContainer__HostHandle",
  componentId: "sc-ia68b0-8"
})(["background:", ";-webkit-background-clip:text;-webkit-text-fill-color:transparent;padding:0;font-weight:450;font-size:14px;line-height:130%;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;"], props => props.theme.textGradient);
const DropDown = /*#__PURE__*/styled.div.withConfig({
  displayName: "ProfileContainer__DropDown",
  componentId: "sc-ia68b0-9"
})(["position:absolute;top:0px;right:0px;display:flex;flex-direction:column;gap:12px;justify-content:center;align-items:start;animation:", " 0.2s ease-in-out;padding:16px;background:", ";color:", ";border-radius:16px;border:1px solid ", ";"], ({
  isDDOpen
}) => isDDOpen ? fadeIn : fadeOut, props => props.theme.bgColorPrimary, props => props.theme.textColorPrimary, props => props.theme.borderColor);
const DDItem = /*#__PURE__*/styled.div.withConfig({
  displayName: "ProfileContainer__DDItem",
  componentId: "sc-ia68b0-10"
})(["cursor:pointer;"]);
const fadeIn = /*#__PURE__*/keyframes(["from{opacity:0;}to{opacity:1;}"]);
const fadeOut = /*#__PURE__*/keyframes(["from{opacity:1;}to{opacity:0;visibility:hidden;}"]);

const randseed = new Array(4); // Xorshift: [x, y, z, w] 32 bit values

function seedrand(seed) {
  randseed.fill(0);

  for (let i = 0; i < seed.length; i++) {
    randseed[i % 4] = (randseed[i % 4] << 5) - randseed[i % 4] + seed.charCodeAt(i);
  }
}

function rand() {
  // based on Java's String.hashCode(), expanded to 4 32bit values
  const t = randseed[0] ^ randseed[0] << 11;
  randseed[0] = randseed[1];
  randseed[1] = randseed[2];
  randseed[2] = randseed[3];
  randseed[3] = randseed[3] ^ randseed[3] >> 19 ^ t ^ t >> 8;
  return (randseed[3] >>> 0) / (1 << 31 >>> 0);
}

function createColor() {
  // saturation is the whole color spectrum
  const h = Math.floor(rand() * 360); // saturation goes from 40 to 100, it avoids grayish colors

  const s = `${Math.floor(rand() * 60) + 40}%`; // lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%

  const l = `${Math.floor((rand() + rand() + rand() + rand()) * 25)}%`;
  return `hsl(${h},${s},${l})`;
}

function createImageData(size) {
  const width = size; // Only support square icons for now

  const height = size;
  const dataWidth = Math.ceil(width / 2);
  const mirrorWidth = width - dataWidth;
  const data = [];

  for (let y = 0; y < height; y++) {
    let row = [];

    for (let x = 0; x < dataWidth; x++) {
      // this makes foreground and background color have a 43% (1/2.3) probability
      // spot color has a 13% chance
      row[x] = Math.floor(rand() * 2.3);
    }

    const r = row.slice(0, mirrorWidth);
    r.reverse();
    row = row.concat(r);

    for (let i = 0; i < row.length; i++) {
      data.push(row[i]);
    }
  }

  return data;
}

function buildOpts(opts) {
  const newOpts = {};
  newOpts.seed = opts.seed || Math.floor(Math.random() * Math.pow(10, 16)).toString(16);
  seedrand(newOpts.seed);
  newOpts.size = opts.size || 8;
  newOpts.scale = opts.scale || 4;
  newOpts.color = opts.color || createColor();
  newOpts.bgcolor = opts.bgcolor || createColor();
  newOpts.spotcolor = opts.spotcolor || createColor();
  return newOpts;
}

function renderIcon(opts, canvas) {
  opts = buildOpts(opts || {});
  const imageData = createImageData(opts.size);
  const width = Math.sqrt(imageData.length);
  canvas.width = canvas.height = opts.size * opts.scale;
  const cc = canvas.getContext('2d');
  cc.fillStyle = opts.bgcolor;
  cc.fillRect(0, 0, canvas.width, canvas.height);
  cc.fillStyle = opts.color;

  for (let i = 0; i < imageData.length; i++) {
    // if data is 0, leave the background
    if (imageData[i]) {
      const row = Math.floor(i / width);
      const col = i % width; // if data is 2, choose spot color, if 1 choose foreground

      cc.fillStyle = imageData[i] === 1 ? opts.color : opts.spotcolor;
      cc.fillRect(col * opts.scale, row * opts.scale, opts.scale, opts.scale);
    }
  }

  return canvas;
}
function createIcon(opts) {
  const canvas = document.createElement('canvas');
  renderIcon(opts, canvas);
  return canvas;
}
function createBlockie(account) {
  const iconParams = {
    seed: account,
    size: 10,
    scale: 3
  };
  return createIcon(iconParams);
}

const AcceptRequest = ({
  height,
  width,
  color
}) => {
  return jsx("svg", Object.assign({
    width: width || "48",
    height: height || "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: jsx("path", {
      d: "M24 4.5C20.1433 4.5 16.3731 5.64366 13.1664 7.78634C9.95963 9.92903 7.46027 12.9745 5.98436 16.5377C4.50845 20.1008 4.12228 24.0216 4.8747 27.8043C5.62711 31.5869 7.4843 35.0615 10.2114 37.7886C12.9386 40.5157 16.4131 42.3729 20.1957 43.1253C23.9784 43.8777 27.8992 43.4916 31.4623 42.0156C35.0255 40.5397 38.071 38.0404 40.2137 34.8336C42.3564 31.6269 43.5 27.8567 43.5 24C43.4901 18.8313 41.4325 13.8772 37.7776 10.2224C34.1228 6.56755 29.1687 4.50991 24 4.5ZM33.2813 20.5875L22.2938 31.0875C22.0097 31.3547 21.6337 31.5024 21.2438 31.5C21.0531 31.5027 20.8639 31.4677 20.6869 31.3969C20.5099 31.3261 20.3487 31.2209 20.2125 31.0875L14.7188 25.8375C14.5664 25.7046 14.4425 25.5422 14.3544 25.3601C14.2664 25.1781 14.2161 24.9801 14.2066 24.7781C14.197 24.5761 14.2284 24.3743 14.2988 24.1847C14.3693 23.9952 14.4773 23.8218 14.6164 23.6751C14.7556 23.5283 14.923 23.4113 15.1085 23.3309C15.2941 23.2505 15.494 23.2084 15.6962 23.2072C15.8984 23.2061 16.0988 23.2458 16.2852 23.324C16.4717 23.4023 16.6404 23.5174 16.7813 23.6625L21.2438 27.9187L31.2188 18.4125C31.5104 18.158 31.8891 18.0262 32.2758 18.0445C32.6624 18.0628 33.027 18.2298 33.2933 18.5107C33.5597 18.7915 33.7071 19.1644 33.7049 19.5515C33.7026 19.9386 33.5508 20.3098 33.2813 20.5875Z",
      fill: "#30CC8B"
    })
  }));
};

const RejectRequest = ({
  height,
  width,
  color
}) => {
  return jsxs("svg", Object.assign({
    width: width || "48",
    height: height || "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsx("path", {
      d: "M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z",
      stroke: "#E93636",
      "stroke-width": "2",
      "stroke-miterlimit": "10"
    }), jsx("path", {
      d: "M30 18L18 30",
      stroke: "#E93636",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), jsx("path", {
      d: "M30 30L18 18",
      stroke: "#E93636",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })]
  }));
};

const Requests = props => {
  const {
    members,
    acceptCallback,
    rejectCallback,
    isHost
  } = props;
  return jsx(MembersContainer$1, {
    children: members.map(item => {
      var _a, _b;

      const reject = () => {
        rejectCallback(item.address);
      };

      const accept = () => {
        acceptCallback(item.address);
      };

      return jsx(ProfileContainer$1, {
        handle: item.address,
        name: item.address,
        imageUrl: (_b = (_a = createBlockie === null || createBlockie === void 0 ? void 0 : createBlockie(item.address)) === null || _a === void 0 ? void 0 : _a.toDataURL()) === null || _b === void 0 ? void 0 : _b.toString(),
        imageHeight: '48px',
        contBtn: isHost ? jsxs(SettingsCont$1, {
          children: [jsx(SettingsCont$1, Object.assign({
            onClick: reject
          }, {
            children: jsx(RejectRequest, {})
          })), jsx(SettingsCont$1, Object.assign({
            onClick: accept
          }, {
            children: jsx(AcceptRequest, {})
          }))]
        }) : null,
        border: true
      });
    })
  });
};

const Members = props => {
  const {
    members,
    theme
  } = props;
  return jsx(MembersContainer$1, {
    children: members.map(item => {
      var _a, _b;

      return jsx(ProfileContainer$1, {
        handle: item.address,
        name: item.address,
        imageUrl: (_b = (_a = createBlockie === null || createBlockie === void 0 ? void 0 : createBlockie(item.address)) === null || _a === void 0 ? void 0 : _a.toDataURL()) === null || _b === void 0 ? void 0 : _b.toString(),
        imageHeight: '48px',
        // contBtn={
        //   <SettingsCont>
        //     <SettingsLogo color={theme.textColorPrimary} />
        //   </SettingsCont>
        // }
        // removeCallback={() => handleDeleteInvitedAdmin(item)}
        // promoteCallback={() => handlePromoteToAdmin(item)}
        border: true
      });
    })
  });
};

var MemberTabsEnum;

(function (MemberTabsEnum) {
  // CoHost = 'Co-Host',
  MemberTabsEnum["Speakers"] = "Speakers";
  MemberTabsEnum["Requests"] = "Requests";
  MemberTabsEnum["Listeners"] = "Listeners";
})(MemberTabsEnum || (MemberTabsEnum = {}));

const SpaceMembersSectionModal = ({
  onClose,
  spaceData,
  acceptCallback,
  rejectCallback,
  isHost
}) => {
  var _a, _b;

  const [activeTab, setActiveTab] = useState(MemberTabsEnum.Speakers);
  const theme = useContext(ThemeContext$1);
  const host = spaceData.liveSpaceData.host;
  const speakers = spaceData.liveSpaceData.speakers;
  const listeners = spaceData.liveSpaceData.listeners;
  const requests = spaceData.liveSpaceData.listeners.filter(listener => listener.handRaised);

  const handleTabClick = index => {
    setActiveTab(index);
  };

  const renderTabs = () => {
    return Object.values(MemberTabsEnum).map(tab => jsx(Tab$1, Object.assign({
      active: activeTab === tab,
      onClick: () => handleTabClick(tab)
    }, {
      children: tab
    }), tab));
  };

  return jsxs(Modal$3, Object.assign({
    clickawayClose: onClose,
    width: '380px'
  }, {
    children: [jsx(ModalHeader$2, {
      heading: 'Members',
      closeCallback: onClose
    }), jsxs(SpacesMembersContainer, {
      children: [jsx(ProfileContainer$1, {
        imageUrl: (_b = (_a = createBlockie === null || createBlockie === void 0 ? void 0 : createBlockie(host.address)) === null || _a === void 0 ? void 0 : _a.toDataURL()) === null || _b === void 0 ? void 0 : _b.toString(),
        name: host.address,
        handle: host.address,
        imageHeight: '48px',
        tag: 'Host'
      }), jsx(TabContainer, {
        children: renderTabs()
      }), activeTab === MemberTabsEnum.Speakers && jsx(Members, {
        members: speakers,
        theme: theme
      }), activeTab === MemberTabsEnum.Requests && jsx(Requests, {
        isHost: isHost,
        members: requests,
        theme: theme,
        acceptCallback: acceptCallback,
        rejectCallback: rejectCallback
      }), activeTab === MemberTabsEnum.Listeners && jsx(Members, {
        members: listeners,
        theme: theme
      })]
    })]
  }));
};
/* styling */

const MembersContainer$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceMembersSectionModal__MembersContainer",
  componentId: "sc-1qevf22-0"
})(["display:flex;flex-direction:column;gap:8px;"]);
const SpacesMembersContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceMembersSectionModal__SpacesMembersContainer",
  componentId: "sc-1qevf22-1"
})(["color:black;display:flex;flex-direction:column;margin-top:28px;gap:16px;width:100%;"]);
const TabContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceMembersSectionModal__TabContainer",
  componentId: "sc-1qevf22-4"
})(["display:flex;padding:0px 10px;"]);
const Tab$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceMembersSectionModal__Tab",
  componentId: "sc-1qevf22-5"
})(["flex:1;padding:10px;text-align:center;border-bottom:", ";cursor:pointer;color:", ";"], props => props.active ? '1px solid #8B5CF6' : '1px solid #82828A26', props => props.active ? '#8B5CF6' : '#82828A');
const SettingsCont$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceMembersSectionModal__SettingsCont",
  componentId: "sc-1qevf22-6"
})(["display:flex;justify-content:center;align-items:center;cursor:pointer;"]);

const SpinnerSvg = ({
  color
}) => {
  return jsxs("svg", Object.assign({
    viewBox: "0 0 42 42",
    color: color !== null && color !== void 0 ? color : "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsx("path", {
      d: "M20.7588 5.1897V10.3793",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), jsx("path", {
      d: "M31.7706 9.74683L28.1055 13.412",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), jsx("path", {
      d: "M36.3273 20.7585H31.1377",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), jsx("path", {
      d: "M31.7706 31.7704L28.1055 28.1052",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), jsx("path", {
      d: "M20.7588 36.3273V31.1377",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), jsx("path", {
      d: "M9.74707 31.7704L13.4123 28.1052",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), jsx("path", {
      d: "M5.18945 20.7585H10.3791",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), jsx("path", {
      d: "M9.74707 9.74683L13.4123 13.412",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })]
  }));
};

const Spinner$2 = ({
  size: _size = 42
}) => {
  const theme = useContext(ThemeContext$1);
  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsx(SpinLoader$2, Object.assign({
      width: `${_size}px`
    }, {
      children: jsx(SpinnerSvg, {
        color: `${theme.btnOutline}`
      })
    }))
  }));
}; //styles

const spinAnimation$2 = /*#__PURE__*/keyframes(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const SpinLoader$2 = /*#__PURE__*/styled.div.withConfig({
  displayName: "Spinner__SpinLoader",
  componentId: "sc-104wwvk-0"
})(["display:flex;flex:initial;align-self:center;width:", ";animation-name:", ";animation-duration:2500ms;animation-iteration-count:infinite;animation-timing-function:linear;"], props => props.width, spinAnimation$2);

var img$w = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3c!-- Generator: Adobe Illustrator 27.5.0%2c SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e%3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 23 18' style='enable-background:new 0 0 23 18%3b' xml:space='preserve'%3e%3cstyle type='text/css'%3e .st0%7bfill:%238B5CF6%3b%7d%3c/style%3e%3cpath class='st0' d='M21.1%2c10.8c-0.3-0.3-0.7-0.5-1-0.7c-0.4-0.2-0.8-0.4-1.2-0.5c1-0.7%2c1.6-1.8%2c1.6-3.1c0-2.1-1.7-3.8-3.8-3.8 c-0.4%2c0-0.8%2c0.1-1.1%2c0.2C14.1%2c3.4%2c13%2c4.8%2c13%2c6.5c0%2c1.2%2c0.6%2c2.3%2c1.5%2c3c-0.4%2c0.1-0.8%2c0.3-1.2%2c0.5c-0.3-0.2-0.6-0.4-0.9-0.5 c-0.6-0.3-1.2-0.5-1.8-0.7c1.2-0.8%2c2-2.2%2c2-3.7c0-2.5-2-4.5-4.5-4.5S3.6%2c2.5%2c3.6%2c5c0%2c1.6%2c0.8%2c3%2c2.1%2c3.8C5.2%2c9%2c4.6%2c9.2%2c4.1%2c9.4 c-0.4%2c0.2-0.9%2c0.5-1.2%2c0.8c-1.6%2c1.2-2.1%2c3.2-2.1%2c5c0%2c1.3%2c1%2c2.3%2c2.3%2c2.3h9.7c0%2c0%2c0%2c0%2c0%2c0h7.9c1.2%2c0%2c2.2-1%2c2.2-2.2 C22.9%2c13.7%2c22.5%2c11.9%2c21.1%2c10.8z M16.1%2c4.3c0.2-0.1%2c0.4-0.1%2c0.7-0.1c1.3%2c0%2c2.3%2c1%2c2.3%2c2.3s-1%2c2.3-2.3%2c2.3c-0.2%2c0-0.5%2c0-0.7-0.1 c-0.9-0.3-1.6-1.1-1.6-2.2S15.2%2c4.6%2c16.1%2c4.3z M8.1%2c2c1.7%2c0%2c3%2c1.4%2c3%2c3c0%2c1.7-1.4%2c3-3%2c3c-1.7%2c0-3-1.4-3-3C5.1%2c3.4%2c6.5%2c2%2c8.1%2c2z M2.2%2c15.2c0-1.6%2c0.4-3%2c1.5-3.8c0.3-0.2%2c0.7-0.4%2c1-0.6c1.1-0.5%2c2.3-0.8%2c3.5-0.8c1.2%2c0%2c2.4%2c0.3%2c3.5%2c0.8c0.4%2c0.2%2c0.7%2c0.4%2c1%2c0.6 c1.1%2c0.8%2c1.5%2c2.2%2c1.5%2c3.8c0%2c0.5-0.4%2c0.8-0.8%2c0.8H3.1C2.6%2c16%2c2.2%2c15.6%2c2.2%2c15.2z M20.7%2c16h-5c0.1-0.3%2c0.2-0.5%2c0.2-0.8 c0-1.4-0.3-2.9-1.2-4.1c0.6-0.2%2c1.3-0.3%2c2-0.3c1%2c0%2c2%2c0.2%2c2.8%2c0.7c0.3%2c0.2%2c0.6%2c0.3%2c0.8%2c0.5c0.9%2c0.7%2c1.2%2c1.9%2c1.2%2c3.3 C21.4%2c15.7%2c21.1%2c16%2c20.7%2c16z'/%3e%3c/svg%3e";

const getLivekitRoomToken = ({
  userType,
  roomId,
  userId
}) => __awaiter(void 0, void 0, void 0, function* () {
  console.log("🚀 ~ file: getToken.js:5 ~ getToken ~ roomId:", roomId);
  console.log("🚀 ~ file: getToken.js:5 ~ getToken ~ userId:", userId);

  if (userType !== "sender" && userType !== "receiver") {
    throw new Error("Invalid userType. Use 'sender' or 'receiver'.");
  } // generate a unique uuid


  const identity = v4();
  const url = `${LIVEKIT_TOKEN_GENERATOR_SERVER_URL}/token?userType=${userType}&userName=${userId || identity}&roomId=${roomId}`;
  return yield axios.get(url);
});

const performAction = ({
  roomId,
  userId,
  canPublish
}) => __awaiter(void 0, void 0, void 0, function* () {
  const url = `${LIVEKIT_TOKEN_GENERATOR_SERVER_URL}/execute?roomName=${roomId}&identity=${userId}&canPublish=${canPublish}`;
  return yield axios.get(url);
});

var img$v = "data:image/svg+xml,%3csvg width='15' height='20' viewBox='0 0 15 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2.85714 10V4.28571C2.85714 3.14907 3.30867 2.05898 4.1124 1.25526C4.91613 0.451529 6.00622 0 7.14286 0C8.2795 0 9.36959 0.451529 10.1733 1.25526C10.977 2.05898 11.4286 3.14907 11.4286 4.28571V10C11.4286 11.1366 10.977 12.2267 10.1733 13.0305C9.36959 13.8342 8.2795 14.2857 7.14286 14.2857C6.00622 14.2857 4.91613 13.8342 4.1124 13.0305C3.30867 12.2267 2.85714 11.1366 2.85714 10ZM14.2857 10C14.2857 9.81056 14.2105 9.62888 14.0765 9.49492C13.9426 9.36097 13.7609 9.28571 13.5714 9.28571C13.382 9.28571 13.2003 9.36097 13.0664 9.49492C12.9324 9.62888 12.8571 9.81056 12.8571 10C12.8571 11.5155 12.2551 12.969 11.1835 14.0406C10.1118 15.1122 8.65838 15.7143 7.14286 15.7143C5.62733 15.7143 4.17388 15.1122 3.10225 14.0406C2.03061 12.969 1.42857 11.5155 1.42857 10C1.42857 9.81056 1.35332 9.62888 1.21936 9.49492C1.08541 9.36097 0.903726 9.28571 0.714286 9.28571C0.524845 9.28571 0.343164 9.36097 0.20921 9.49492C0.075255 9.62888 0 9.81056 0 10C0.0021751 11.7701 0.660644 13.4766 1.84807 14.7893C3.0355 16.1021 4.66754 16.9279 6.42857 17.1071V19.2857C6.42857 19.4752 6.50383 19.6568 6.63778 19.7908C6.77174 19.9247 6.95342 20 7.14286 20C7.3323 20 7.51398 19.9247 7.64793 19.7908C7.78189 19.6568 7.85714 19.4752 7.85714 19.2857V17.1071C9.61818 16.9279 11.2502 16.1021 12.4376 14.7893C13.6251 13.4766 14.2835 11.7701 14.2857 10Z' fill='%238B5CF6'/%3e%3c/svg%3e";

var img$u = "data:image/svg+xml,%3csvg width='16' height='20' viewBox='0 0 16 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M15.4862 18.3857C15.346 18.5131 15.1609 18.5796 14.9717 18.5705C14.7825 18.5615 14.6047 18.4777 14.4772 18.3375L12.1147 15.7393C11.0808 16.5064 9.8583 16.9788 8.57722 17.1062V19.2857C8.57722 19.4752 8.50197 19.6568 8.36801 19.7908C8.23406 19.9247 8.05238 20 7.86293 20C7.67349 20 7.49181 19.9247 7.35786 19.7908C7.2239 19.6568 7.14865 19.4752 7.14865 19.2857V17.1071C5.3876 16.9279 3.75557 16.1021 2.56813 14.7893C1.3807 13.4765 0.722224 11.7701 0.720048 9.99996C0.720048 9.81052 0.795304 9.62884 0.929259 9.49488C1.06321 9.36093 1.2449 9.28567 1.43434 9.28567C1.62378 9.28567 1.80546 9.36093 1.93942 9.49488C2.07337 9.62884 2.14863 9.81052 2.14863 9.99996C2.14877 11.046 2.43605 12.072 2.97916 12.966C3.52227 13.86 4.30036 14.5878 5.22863 15.07C6.15691 15.5523 7.19975 15.7705 8.24349 15.7008C9.28722 15.6311 10.2918 15.2763 11.1478 14.675L10.1763 13.6035C9.52909 14.0186 8.7821 14.2519 8.01369 14.2789C7.24528 14.306 6.48375 14.1258 5.80892 13.7573C5.13409 13.3888 4.57083 12.8455 4.17817 12.1844C3.78552 11.5234 3.57794 10.7688 3.5772 9.99996V6.34727L0.191475 2.62314C0.12707 2.55396 0.077037 2.47268 0.0442759 2.38402C0.0115148 2.29535 -0.00332312 2.20107 0.000622646 2.10663C0.00456841 2.01219 0.0272194 1.91947 0.0672623 1.83385C0.107305 1.74823 0.163943 1.67141 0.233895 1.60784C0.303847 1.54426 0.38572 1.49521 0.47477 1.46351C0.56382 1.43182 0.658275 1.41811 0.752661 1.42319C0.847046 1.42827 0.939486 1.45203 1.02462 1.4931C1.10976 1.53416 1.18589 1.59172 1.24862 1.66243L15.5344 17.3768C15.6618 17.517 15.7283 17.702 15.7192 17.8912C15.7102 18.0804 15.6264 18.2583 15.4862 18.3857ZM10.9058 10.1616C11.0028 10.2683 11.1298 10.3431 11.2701 10.3763C11.4104 10.4094 11.5574 10.3994 11.6919 10.3474C11.8264 10.2954 11.942 10.204 12.0235 10.0851C12.105 9.96617 12.1487 9.82538 12.1487 9.68121V4.28565C12.1486 3.35309 11.8445 2.44598 11.2822 1.70195C10.72 0.957923 9.93044 0.417582 9.03333 0.162908C8.13621 -0.0917655 7.18051 -0.0468726 6.31122 0.290776C5.44193 0.628425 4.70649 1.2404 4.21649 2.03386C4.13436 2.16538 4.09725 2.32006 4.11079 2.47453C4.12432 2.629 4.18774 2.77487 4.29149 2.89011L10.9058 10.1616ZM13.5933 13.0035C13.6807 13.0376 13.774 13.0541 13.8678 13.0522C13.9616 13.0502 14.0541 13.0298 14.14 12.992C14.2259 12.9543 14.3035 12.9 14.3684 12.8323C14.4333 12.7646 14.4843 12.6847 14.5183 12.5973C14.8417 11.7696 15.0071 10.8886 15.0058 9.99996C15.0058 9.81052 14.9306 9.62884 14.7966 9.49488C14.6627 9.36093 14.481 9.28567 14.2915 9.28567C14.1021 9.28567 13.9204 9.36093 13.7865 9.49488C13.6525 9.62884 13.5772 9.81052 13.5772 9.99996C13.5784 10.7108 13.4464 11.4155 13.188 12.0776C13.1537 12.1651 13.137 12.2583 13.1389 12.3522C13.1407 12.4461 13.1611 12.5386 13.1987 12.6246C13.2364 12.7106 13.2906 12.7883 13.3583 12.8534C13.426 12.9184 13.5059 12.9694 13.5933 13.0035Z' fill='%238B5CF6'/%3e%3c/svg%3e";

function Microphone(_a) {
  var props = __rest(_a, ["showIcon"]);

  const {
    enabled
  } = useTrackToggle(props);
  const theme = useContext(ThemeContext$1);
  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsxs(Item$1, Object.assign({
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px'
    }, {
      children: [jsx(Image$5, {
        width: '14px',
        height: '20px',
        src: enabled ? img$v : img$u,
        alt: "Mic Icon"
      }), jsx(Text, Object.assign({
        color: `${theme.btnOutline}`,
        fontSize: '14px',
        fontWeight: 600
      }, {
        children: enabled ? 'Speaking' : 'Muted'
      }))]
    }))
  }));
}

const LiveWidgetContent = ({
  spaceData,
  isHost,
  setSpaceStatusState,
  account
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;

  const [showMembersModal, setShowMembersModal] = useState(false);
  const [playBackUrl, setPlayBackUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRequestedForMic, setIsRequestedForMic] = useState(false);
  const [promotedListener, setPromotedListener] = useState('');
  const [livekitToken, setLivekitToken] = useState(null);
  const theme = useContext(ThemeContext$1);
  const {
    spacesObjectRef,
    spaceObjectData,
    setSpaceObjectData,
    isSpeaker,
    isListener,
    isJoined,
    initSpaceObject,
    raisedHandInfo
  } = useSpaceData();
  console.log("🚀 ~ file: LiveWidgetContent.tsx:66 ~ spaceObjectData:", spaceObjectData);
  console.log("🚀 ~ file: LiveWidgetContent.tsx:66 ~ raisedHandInfo:", raisedHandInfo);
  (_b = (_a = spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.connectionData) === null || _a === void 0 ? void 0 : _a.local) === null || _b === void 0 ? void 0 : _b.audio;
  const numberOfRequests = spaceObjectData.liveSpaceData.listeners.filter(listener => listener.handRaised).length;

  useEffect(() => {
    (function () {
      return __awaiter(this, void 0, void 0, function* () {
        const removeEIP155 = input => input.substring(7);

        const nonEIPAddress = removeEIP155(account);

        if ((isHost || isSpeaker) && (spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceId)) {
          const livekitToken = yield getLivekitRoomToken({
            userType: "sender",
            roomId: spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceId,
            userId: nonEIPAddress
          });
          setLivekitToken(livekitToken.data);
        } else if (isListener && (spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceId)) {
          const livekitToken = yield getLivekitRoomToken({
            userType: "receiver",
            roomId: spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceId,
            userId: nonEIPAddress
          });
          setLivekitToken(livekitToken.data);
        }
      });
    })();
  }, [isListener, isHost, spaceData]);
  useEffect(() => {
    // if (!spaceObjectData?.connectionData?.local?.stream || !isRequestedForMic)
    if (!isRequestedForMic) return;

    const requestedForMicFromEffect = () => __awaiter(void 0, void 0, void 0, function* () {
      var _a, _b;

      yield (_b = (_a = spacesObjectRef === null || spacesObjectRef === void 0 ? void 0 : spacesObjectRef.current) === null || _a === void 0 ? void 0 : _a.requestToBePromoted) === null || _b === void 0 ? void 0 : _b.call(_a, {
        role: 'SPEAKER',
        promotorAddress: pCAIP10ToWallet(spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.spaceCreator)
      });
    });

    requestedForMicFromEffect(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRequestedForMic]);

  const handleRequest = () => __awaiter(void 0, void 0, void 0, function* () {
    var _y, _z;

    yield (_z = (_y = spacesObjectRef === null || spacesObjectRef === void 0 ? void 0 : spacesObjectRef.current) === null || _y === void 0 ? void 0 : _y.createAudioStream) === null || _z === void 0 ? void 0 : _z.call(_y);
    setIsRequestedForMic(true);
  });

  useEffect(() => {
    // if (!spaceObjectData?.connectionData?.local?.stream || promotedListener.length === 0)
    //   return;
    if (promotedListener.length === 0 || Object.keys(raisedHandInfo).length === 0) return;
    const options = {
      // signalData: raisedHandInfo[promotedListener].signalData,
      promoteeAddress: pCAIP10ToWallet(raisedHandInfo[promotedListener].senderAddress),
      spaceId: raisedHandInfo[promotedListener].chatId,
      role: 'SPEAKER'
    };

    const promoteListenerFromEffect = () => __awaiter(void 0, void 0, void 0, function* () {
      var _a, _b;

      yield (_b = (_a = spacesObjectRef === null || spacesObjectRef === void 0 ? void 0 : spacesObjectRef.current) === null || _a === void 0 ? void 0 : _a.acceptPromotionRequest) === null || _b === void 0 ? void 0 : _b.call(_a, options);
    });

    promoteListenerFromEffect();
  }, [promotedListener]);

  const handleAcceptPromotion = requesterAddress => __awaiter(void 0, void 0, void 0, function* () {
    // await spacesObjectRef?.current?.createAudioStream?.();
    yield performAction({
      roomId: spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceId,
      userId: requesterAddress,
      canPublish: true
    });
    setPromotedListener(requesterAddress);
    yield performAction({
      roomId: spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceId,
      userId: requesterAddress,
      canPublish: true
    });
  });

  const handleRejectPromotion = requesterAddress => __awaiter(void 0, void 0, void 0, function* () {
    var _0, _1;

    yield (_1 = (_0 = spacesObjectRef === null || spacesObjectRef === void 0 ? void 0 : spacesObjectRef.current) === null || _0 === void 0 ? void 0 : _0.rejectPromotionRequest) === null || _1 === void 0 ? void 0 : _1.call(_0, {
      promoteeAddress: pCAIP10ToWallet(requesterAddress)
    });
    yield performAction({
      roomId: spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceId,
      userId: requesterAddress,
      canPublish: false
    });
  });

  const handleJoinSpace = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!spaceData) {
      return;
    }

    setIsLoading(!isLoading);
    yield initSpaceObject(spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceId); // useEffects below will handle the rest
  });

  const handleEndSpace = () => __awaiter(void 0, void 0, void 0, function* () {
    var _2, _3;

    if (!(spacesObjectRef === null || spacesObjectRef === void 0 ? void 0 : spacesObjectRef.current)) return;
    yield (_3 = (_2 = spacesObjectRef === null || spacesObjectRef === void 0 ? void 0 : spacesObjectRef.current) === null || _2 === void 0 ? void 0 : _2.stop) === null || _3 === void 0 ? void 0 : _3.call(_2);
    spacesObjectRef.current = null;
    setSpaceObjectData === null || setSpaceObjectData === void 0 ? void 0 : setSpaceObjectData(PushAPI.space.initSpaceData);
    setSpaceStatusState === null || setSpaceStatusState === void 0 ? void 0 : setSpaceStatusState(SpaceStatus.Ended);
    setIsLoading(false);
  });

  const handleLeaveSpace = () => __awaiter(void 0, void 0, void 0, function* () {
    var _4, _5;

    if (!(spacesObjectRef === null || spacesObjectRef === void 0 ? void 0 : spacesObjectRef.current)) return;

    if (isHost || isSpeaker) {
      yield (_5 = (_4 = spacesObjectRef === null || spacesObjectRef === void 0 ? void 0 : spacesObjectRef.current) === null || _4 === void 0 ? void 0 : _4.leave) === null || _5 === void 0 ? void 0 : _5.call(_4);
      spacesObjectRef.current = null;
      setSpaceObjectData === null || setSpaceObjectData === void 0 ? void 0 : setSpaceObjectData(PushAPI.space.initSpaceData);
      console.log('Space left');
    }

    if (isListener) {
      spacesObjectRef.current = null;
      setSpaceObjectData === null || setSpaceObjectData === void 0 ? void 0 : setSpaceObjectData(PushAPI.space.initSpaceData);
    }

    setIsLoading(false);
  }); // for listener


  useEffect(() => {
    const JoinAsListner = () => __awaiter(void 0, void 0, void 0, function* () {
      var _a, _b;

      console.log('isListner', isListener);

      if (isListener && !isHost // && spaceObjectData.connectionData.local.address
      ) {
        console.log('joining as a listener');
        yield (_b = (_a = spacesObjectRef === null || spacesObjectRef === void 0 ? void 0 : spacesObjectRef.current) === null || _a === void 0 ? void 0 : _a.join) === null || _b === void 0 ? void 0 : _b.call(_a); // setSpaceWidgetId?.(spaceData?.spaceId as string);

        setIsLoading(!isLoading);
        console.log('space joined');
      }
    });

    JoinAsListner();
  }, [isListener]); // for speaker

  useEffect(() => {
    const createAudioStream = () => __awaiter(void 0, void 0, void 0, function* () {
      var _a, _b, _c, _d;

      console.log('isSpeaker', isSpeaker);

      if (isSpeaker && !((_b = (_a = spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.connectionData) === null || _a === void 0 ? void 0 : _a.local) === null || _b === void 0 ? void 0 : _b.stream)) {
        // create audio stream as we'll need it to start the mesh connection
        console.log('creating audio stream');
        yield (_d = (_c = spacesObjectRef === null || spacesObjectRef === void 0 ? void 0 : spacesObjectRef.current) === null || _c === void 0 ? void 0 : _c.createAudioStream) === null || _d === void 0 ? void 0 : _d.call(_c);
      }
    });

    createAudioStream();
  }, [isSpeaker]); // joining as a speaker

  useEffect(() => {
    var _a, _b, _c;

    if ( // !spaceObjectData?.connectionData?.local?.stream ||
    !isSpeaker || ((_c = (_b = (_a = spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.connectionData) === null || _a === void 0 ? void 0 : _a.incoming) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0) > 1) return;

    const joinSpaceAsSpeaker = () => __awaiter(void 0, void 0, void 0, function* () {
      var _d, _e;

      console.log('joining as a speaker');
      yield (_e = (_d = spacesObjectRef === null || spacesObjectRef === void 0 ? void 0 : spacesObjectRef.current) === null || _d === void 0 ? void 0 : _d.join) === null || _e === void 0 ? void 0 : _e.call(_d); // setSpaceWidgetId?.(spaceData?.spaceId as string);

      setIsLoading(!isLoading);
      console.log('space joined');
    });

    joinSpaceAsSpeaker(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [(_d = (_c = spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.connectionData) === null || _c === void 0 ? void 0 : _c.local) === null || _d === void 0 ? void 0 : _d.stream]);
  useEffect(() => {
    if (!(spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.meta)) return;
    setPlayBackUrl(spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.meta);
  }, [spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.meta]);
  const livekitRoom = useMemo(() => new Room(), []);
  return jsxs(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: [jsx(Item$1, Object.assign({
      flex: '1',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, 120px)',
      padding: '16px 10px',
      margin: '0 auto',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '24px 12px',
      overflowY: 'auto',
      overflowX: 'hidden',
      alignContent: 'flex-start',
      width: '100%'
    }, {
      children: isJoined ? jsxs(Fragment, {
        children: [(isSpeaker || isHost) && jsx("div", Object.assign({
          style: {
            position: 'relative'
          }
        }, {
          children: jsx(LiveSpaceProfileContainer, {
            isHost: isHost,
            isSpeaker: isSpeaker,
            wallet: (_f = (_e = spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.connectionData) === null || _e === void 0 ? void 0 : _e.local) === null || _f === void 0 ? void 0 : _f.address,
            mic: (_h = (_g = spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.connectionData) === null || _g === void 0 ? void 0 : _g.local) === null || _h === void 0 ? void 0 : _h.audio,
            image: (_m = (_l = createBlockie === null || createBlockie === void 0 ? void 0 : createBlockie((_k = (_j = spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.connectionData) === null || _j === void 0 ? void 0 : _j.local) === null || _k === void 0 ? void 0 : _k.address)) === null || _l === void 0 ? void 0 : _l.toDataURL()) === null || _m === void 0 ? void 0 : _m.toString()
          })
        })), (isSpeaker || isHost) && ((_p = (_o = spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.connectionData) === null || _o === void 0 ? void 0 : _o.incoming) === null || _p === void 0 ? void 0 : _p.slice(1).map(profile => {
          var _a, _b;

          return jsx("div", Object.assign({
            style: {
              position: 'relative'
            }
          }, {
            children: jsx(LiveSpaceProfileContainer, {
              isHost: (profile === null || profile === void 0 ? void 0 : profile.address) === pCAIP10ToWallet(spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.spaceCreator),
              isSpeaker: (profile === null || profile === void 0 ? void 0 : profile.address) !== pCAIP10ToWallet(spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.spaceCreator),
              mic: profile === null || profile === void 0 ? void 0 : profile.audio,
              wallet: profile === null || profile === void 0 ? void 0 : profile.address,
              image: (_b = (_a = createBlockie === null || createBlockie === void 0 ? void 0 : createBlockie(profile === null || profile === void 0 ? void 0 : profile.address)) === null || _a === void 0 ? void 0 : _a.toDataURL()) === null || _b === void 0 ? void 0 : _b.toString(),
              stream: profile === null || profile === void 0 ? void 0 : profile.stream
            })
          }));
        })), isHost && (spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.liveSpaceData.speakers.map(profile => {
          var _a, _b;

          return jsx("div", Object.assign({
            style: {
              position: 'relative'
            }
          }, {
            children: jsx(LiveSpaceProfileContainer, {
              isHost: false,
              isSpeaker: true,
              wallet: profile === null || profile === void 0 ? void 0 : profile.address,
              mic: profile === null || profile === void 0 ? void 0 : profile.audio,
              image: (_b = (_a = createBlockie === null || createBlockie === void 0 ? void 0 : createBlockie(profile === null || profile === void 0 ? void 0 : profile.address)) === null || _a === void 0 ? void 0 : _a.toDataURL()) === null || _b === void 0 ? void 0 : _b.toString()
            })
          }));
        })), isListener && !isHost && jsx("div", Object.assign({
          style: {
            position: 'relative'
          }
        }, {
          children: jsx(LiveSpaceProfileContainer, {
            isHost: true,
            isSpeaker: false,
            wallet: (_q = spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.liveSpaceData.host) === null || _q === void 0 ? void 0 : _q.address,
            mic: (_r = spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.liveSpaceData.host) === null || _r === void 0 ? void 0 : _r.audio,
            image: (_v = (_u = createBlockie === null || createBlockie === void 0 ? void 0 : createBlockie((_t = (_s = spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.liveSpaceData) === null || _s === void 0 ? void 0 : _s.host) === null || _t === void 0 ? void 0 : _t.address)) === null || _u === void 0 ? void 0 : _u.toDataURL()) === null || _v === void 0 ? void 0 : _v.toString()
          })
        })), isListener && !isHost && (spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.liveSpaceData.speakers.map(profile => {
          var _a, _b;

          return jsx("div", Object.assign({
            style: {
              position: 'relative'
            }
          }, {
            children: jsx(LiveSpaceProfileContainer, {
              isHost: false,
              isSpeaker: true,
              wallet: profile === null || profile === void 0 ? void 0 : profile.address,
              mic: profile === null || profile === void 0 ? void 0 : profile.audio,
              image: (_b = (_a = createBlockie === null || createBlockie === void 0 ? void 0 : createBlockie(profile === null || profile === void 0 ? void 0 : profile.address)) === null || _a === void 0 ? void 0 : _a.toDataURL()) === null || _b === void 0 ? void 0 : _b.toString()
            })
          }));
        })), spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.liveSpaceData.listeners.map(profile => {
          var _a, _b;

          return jsx("div", Object.assign({
            style: {
              position: 'relative'
            }
          }, {
            children: jsx(LiveSpaceProfileContainer, {
              isHost: false,
              isSpeaker: false,
              requested: profile.handRaised,
              wallet: profile === null || profile === void 0 ? void 0 : profile.address,
              image: (_b = (_a = createBlockie === null || createBlockie === void 0 ? void 0 : createBlockie(profile === null || profile === void 0 ? void 0 : profile.address)) === null || _a === void 0 ? void 0 : _a.toDataURL()) === null || _b === void 0 ? void 0 : _b.toString()
            })
          }));
        })]
      }) : spaceData === null || spaceData === void 0 ? void 0 : spaceData.members.map(profile => {
        var _a, _b;

        return jsx("div", Object.assign({
          style: {
            position: 'relative'
          }
        }, {
          children: jsx(LiveSpaceProfileContainer, {
            wallet: profile === null || profile === void 0 ? void 0 : profile.wallet,
            isHost: (profile === null || profile === void 0 ? void 0 : profile.wallet) === spaceData.spaceCreator,
            isSpeaker: profile === null || profile === void 0 ? void 0 : profile.isSpeaker,
            image: (profile === null || profile === void 0 ? void 0 : profile.image) || ((_b = (_a = createBlockie === null || createBlockie === void 0 ? void 0 : createBlockie(profile === null || profile === void 0 ? void 0 : profile.wallet)) === null || _a === void 0 ? void 0 : _a.toDataURL()) === null || _b === void 0 ? void 0 : _b.toString())
          })
        }));
      })
    })), jsxs(Item$1, Object.assign({
      padding: '28px 10px',
      width: '90%'
    }, {
      children: [isJoined ? jsxs(Item$1, Object.assign({
        borderRadius: '8px',
        background: `${theme.bgColorSecondary}`,
        display: 'flex',
        justifyContent: 'space-between',
        padding: '6px 8px'
      }, {
        children: [livekitToken ? jsxs(LiveKitRoom, Object.assign({
          serverUrl: LIVEKIT_SERVER_URL,
          token: livekitToken,
          room: livekitRoom
        }, {
          children: [jsx(RoomAudioRenderer, {}), isHost || isSpeaker ? jsx(TrackToggleComp, Object.assign({
            showIcon: false,
            source: Track.Source.Microphone
          }, {
            children: jsx(Microphone, {
              source: Track.Source.Microphone
            })
          })) : jsxs(Item$1, Object.assign({
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px',
            onClick: () => handleRequest()
          }, {
            children: [jsx(Image$5, {
              width: '14px',
              height: '20px',
              src: isRequestedForMic ? img$z : img$x,
              alt: "Mic Icon"
            }), jsx(Text, Object.assign({
              color: `${theme.btnOutline}`,
              fontSize: '14px',
              fontWeight: 600
            }, {
              children: isRequestedForMic ? 'Requested' : 'Request'
            }))]
          }))]
        })) : jsxs(Item$1, Object.assign({
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px'
        }, {
          children: [jsx(Spinner$2, {
            size: "20"
          }), jsx(Text, Object.assign({
            color: `${theme.btnOutline}`,
            fontSize: '14px',
            fontWeight: 600
          }, {
            children: "Connecting"
          }))]
        })), jsxs(Item$1, Object.assign({
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }, {
          children: [jsxs(MembersContainer, {
            children: [isHost && numberOfRequests ? jsx(RequestsCount, {
              children: numberOfRequests
            }) : null, jsx(Image$5, {
              width: '21px',
              height: '24px',
              src: img$w,
              cursor: 'pointer',
              onClick: () => setShowMembersModal(true),
              alt: "Members Icon"
            })]
          }), jsx(Button$8, Object.assign({
            color: `${theme.btnColorPrimary}`,
            fontSize: '14px',
            fontWeight: 600,
            width: '100px',
            height: '100%',
            cursor: 'pointer',
            border: `1px solid ${theme.btnOutline}`,
            borderRadius: '12px',
            onClick: isHost ? handleEndSpace : handleLeaveSpace
          }, {
            children: !isHost ? 'Leave' : 'End space'
          }))]
        }))]
      })) : jsx(Button$8, Object.assign({
        height: '36px',
        width: '100%',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        background: `${theme.titleBg}`,
        onClick: handleJoinSpace
      }, {
        children: jsx(Text, Object.assign({
          color: `${theme.titleTextColor}`,
          fontSize: '16px',
          fontWeight: '600',
          display: "flex",
          justifyContent: "center"
        }, {
          children: isLoading ? jsx(CircularProgressSpinner$1, {}) : 'Join this Space'
        }))
      })), showMembersModal ? jsx(SpaceMembersSectionModal, {
        onClose: () => setShowMembersModal(false),
        spaceData: spaceObjectData,
        acceptCallback: handleAcceptPromotion,
        rejectCallback: handleRejectPromotion,
        isHost: isHost
      }) : null]
    }))]
  }));
};
const MembersContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "LiveWidgetContent__MembersContainer",
  componentId: "sc-fmttby-1"
})(["position:relative;display:flex;align-items:center;justify-content:center;"]);
const RequestsCount = /*#__PURE__*/styled.div.withConfig({
  displayName: "LiveWidgetContent__RequestsCount",
  componentId: "sc-fmttby-2"
})(["position:absolute;top:-8px;right:-6px;background-color:", ";padding:2px 4px;border-radius:4px;font-size:12px;"], props => props.theme.btnColorPrimary);
const TrackToggleComp = /*#__PURE__*/styled(TrackToggle).withConfig({
  displayName: "LiveWidgetContent__TrackToggleComp",
  componentId: "sc-fmttby-4"
})(["background-color:transparent;border:none;"]);

var img$t = "data:image/svg+xml,%3csvg width='42' height='42' viewBox='0 0 42 42' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0.5 14.85V37.7145C0.5 39.1502 2.21425 39.8929 3.26166 38.9109L11.1047 31.5581C11.3158 31.3602 11.5944 31.25 11.8838 31.25H26.125C34.6164 31.25 41.5 24.3664 41.5 15.875C41.5 7.38362 34.6164 0.5 26.125 0.5H14.85C6.92471 0.5 0.5 6.92471 0.5 14.85Z' fill='%238B5CF6'/%3e%3cpath d='M0.5 14.85V37.7145C0.5 39.1502 2.21425 39.8929 3.26166 38.9109L11.1047 31.5581C11.3158 31.3602 11.5944 31.25 11.8838 31.25H26.125C34.6164 31.25 41.5 24.3664 41.5 15.875C41.5 7.38362 34.6164 0.5 26.125 0.5H14.85C6.92471 0.5 0.5 6.92471 0.5 14.85Z' fill='url(%23paint0_linear_13878_66774)'/%3e%3cg clip-path='url(%23clip0_13878_66774)'%3e%3cpath d='M11.9805 13.6191V18.5391' stroke='white' stroke-width='3.28' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M18.541 7.05859V25.0986' stroke='white' stroke-width='3.28' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M25.0996 10.3379L25.0996 21.8179' stroke='white' stroke-width='3.28' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M31.6602 13.6191L31.6602 18.5391' stroke='white' stroke-width='3.28' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear_13878_66774' x1='0.500001' y1='41.5' x2='43.42' y2='39.3805' gradientUnits='userSpaceOnUse'%3e%3cstop offset='0.0001' stop-color='%23EA4EE4'/%3e%3cstop offset='1' stop-color='%238B5CF6'/%3e%3c/linearGradient%3e%3cclipPath id='clip0_13878_66774'%3e%3crect width='36.08' height='36.08' fill='white' transform='translate(2.96094 0.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

var img$s = "data:image/svg+xml,%3csvg width='28' height='24' viewBox='0 0 28 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7.5 17.0004C7.5 17.0004 0.60625 13.0004 1.5975 2.00037C1.5975 2.00037 6.555 7.00037 12.5 8.00037V6.00037C12.5 3.25037 14.75 0.966619 17.5 1.00037C18.4705 1.01164 19.4175 1.30001 20.2296 1.83151C21.0417 2.36301 21.685 3.1155 22.0837 4.00037H26.5L22.5 8.00037C21.9675 16.3554 14.99 23.0004 6.5 23.0004C2.5 23.0004 1.5 21.5004 1.5 21.5004C1.5 21.5004 5.5 20.0004 7.5 17.0004Z' stroke='%2382828A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e";

var img$r = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.4856 19.9999L11.2431 21.2424C10.1148 22.3525 8.59355 22.9718 7.01073 22.9653C5.4279 22.9589 3.91175 22.3273 2.79252 21.208C1.67328 20.0888 1.04165 18.5726 1.03521 16.9898C1.02876 15.407 1.64802 13.8858 2.75811 12.7574L5.77186 9.74995C6.85288 8.66673 8.30695 8.03752 9.83659 7.99105C11.3662 7.94458 12.8558 8.48435 14.0006 9.49995' stroke='%2382828A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M11.515 4.00061L12.7575 2.75811C13.8858 1.64802 15.4071 1.02876 16.9899 1.03521C18.5727 1.04165 20.0889 1.67328 21.2081 2.79252C22.3273 3.91175 22.959 5.4279 22.9654 7.01073C22.9718 8.59355 22.3526 10.1148 21.2425 11.2431L18.2288 14.2569C17.1469 15.3392 15.6924 15.9673 14.1628 16.0126C12.6331 16.0579 11.144 15.517 10 14.5006' stroke='%2382828A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e";

var img$q = "data:image/svg+xml,%3csvg width='27' height='27' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='Group 4331'%3e%3cpath id='Vector' d='M11.9144 12.5657C11.6065 13.086 6.79798 13.1734 4.17427 11.6979C1.55125 10.2223 2.82539 5.71108 5.48612 4.52667C8.14686 3.34225 12.2223 12.0454 11.9137 12.5657H11.9144Z' stroke='%23657795' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath id='Vector_2' d='M11.8771 14.3718C12.1857 14.8921 9.85894 18.9925 7.23592 20.4673C4.61221 21.9429 1.23897 18.6126 1.51602 15.7751C1.79307 12.9383 11.5685 13.8515 11.8764 14.3718H11.8771Z' stroke='%23657795' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath id='Vector_3' d='M13.4616 15.3057C14.0781 15.3057 16.5598 19.3186 16.5598 22.2697C16.5598 25.2208 11.9125 26.4011 9.52877 24.7487C7.14508 23.0963 12.8451 15.3064 13.4616 15.3064V15.3057Z' stroke='%23657795' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath id='Vector_4' d='M15.0868 14.4341C15.3947 13.9138 20.2032 13.8264 22.8269 15.302C25.4499 16.7775 24.1758 21.2887 21.5151 22.4732C18.8543 23.6576 14.7789 14.9544 15.0868 14.4341Z' stroke='%23657795' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath id='Vector_5' d='M15.1213 12.6283C14.8127 12.108 17.1395 8.00759 19.7625 6.53274C22.3856 5.05721 25.7588 8.38817 25.4818 11.225C25.2047 14.0618 15.4292 13.1486 15.1213 12.6283Z' stroke='%23657795' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath id='Vector_6' d='M13.5357 11.6939C12.9193 11.6939 10.4375 7.6809 10.4375 4.73052C10.4375 1.78014 15.0849 0.599166 17.4679 2.25157C19.8516 3.90397 14.1516 11.6939 13.5351 11.6939H13.5357Z' stroke='%23657795' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e";

const LENSTER_URL = 'https://lenster.xyz';
const generateLensterShareURL = ({
  text,
  url
}) => {
  const encodedText = encodeURIComponent(text);
  const encodedURL = encodeURIComponent(url);
  const outputURL = `${LENSTER_URL}/?text=${encodedText}&url=${encodedURL}`;
  return outputURL;
};

var ShareOptions;

(function (ShareOptions) {
  ShareOptions["Twitter"] = "Twitter";
  ShareOptions["Lenster"] = "Lenster";
  ShareOptions["CopyShareUrl"] = "Copy Link";
})(ShareOptions || (ShareOptions = {}));

const ScheduledWidgetContent = ({
  spaceData,
  share,
  isHost,
  isMember,
  spaceStatusState,
  setSpaceStatusState
}) => {
  const theme = React__default.useContext(ThemeContext$1);
  const {
    spacesObjectRef,
    initSpaceObject,
    spaceObjectData
  } = useSpaceData();
  const isTimeToStartSpace = true;
  const [isStarted, setIsStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    shareUrl,
    shareOptions = ['Twitter', 'Lenster', 'CopyShareUrl']
  } = share || {};

  const handleStartSpaceLiveKit = () => __awaiter(void 0, void 0, void 0, function* () {
    setIsLoading(!isLoading);
    console.log(spaceStatusState);
    yield initSpaceObject === null || initSpaceObject === void 0 ? void 0 : initSpaceObject(spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceId);
    setIsLoading(!isLoading);
    setIsStarted(true);
    console.log(spaceStatusState);
  });

  const handleShareTweet = () => {
    if (!shareUrl) return;
    const url = shareUrl;
    const tweetText = 'Join this Space:'; // Replace with your desired tweet text

    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(url)}`;
    window.open(tweetUrl, '_blank');
  };

  const handleShareLenster = () => {
    if (!shareUrl) return;
    const url = shareUrl;
    const lensterShareText = 'Join this space';
    const lensterShareUrl = generateLensterShareURL({
      text: lensterShareText,
      url
    });
    window.open(lensterShareUrl, '_blank');
  };

  const handleCopyLink = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      if (!shareUrl) return;
      const url = shareUrl;
      yield navigator.clipboard.writeText(url); // add a success toast here

      console.log('URL copied to clipboard:', url);
    } catch (error) {
      console.error('Failed to copy URL:', error);
    }
  });

  const handleShareAction = shareOption => {
    switch (shareOption) {
      case ShareOptions.Twitter:
        handleShareTweet();
        break;

      case ShareOptions.Lenster:
        handleShareLenster();
        break;

      default:
        handleCopyLink();
        break;
    }
  };

  const getShareOptionDetails = shareOption => {
    let icon = '';
    let alt = '';

    switch (shareOption) {
      case ShareOptions.Twitter:
        icon = img$s;
        alt = 'Twitter Icon';
        break;

      case ShareOptions.Lenster:
        icon = img$q;
        alt = 'Lenster Icon';
        break;

      default:
        icon = img$r;
        alt = 'Copy Icon';
        break;
    }

    return {
      icon,
      alt
    };
  }; // useEffect(() => {
  //   async function startSpace() {
  //     if (spaceStatusState === SpaceStatus.Live) return;
  //     if (!spaceObjectData?.connectionData?.local?.stream || !isStarted) return;
  //     console.log('SPACE STARTING');
  //     await spacesObjectRef?.current?.start?.({
  //       livepeerApiKey: 'ac9d3e33-56c2-4a22-a328-a08a46fd9356',
  //     });
  //     console.log('SPACE STARTED');
  //     setIsStarted(false);
  //     setSpaceStatusState && setSpaceStatusState(SpaceStatus.Live);
  //   }
  //   startSpace();
  // }, [isStarted]);


  useEffect(() => {
    function startSpace() {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function* () {
        if (spaceStatusState === SpaceStatus.Live) return;
        if (!isStarted) return;
        yield (_b = (_a = spacesObjectRef === null || spacesObjectRef === void 0 ? void 0 : spacesObjectRef.current) === null || _a === void 0 ? void 0 : _a.start) === null || _b === void 0 ? void 0 : _b.call(_a);
        console.log('SPACE STARTED');
        setIsStarted(false);
        setSpaceStatusState && setSpaceStatusState(SpaceStatus.Live);
        console.log(spaceStatusState);
      });
    }

    startSpace();
  }, [isStarted]);
  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsxs(Container$m, Object.assign({
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '15px',
      padding: '0 24px'
    }, {
      children: [jsx(Image$5, {
        width: '41px',
        height: '41px',
        src: img$t,
        alt: "Spaces Icon"
      }), isHost ? jsx(SpaceInfoText, {
        children: "It\u2019s time to start your space"
      })  : jsxs(SpaceInfoText, {
        children: ["This space will go live on", ' ', formatDate((spaceData === null || spaceData === void 0 ? void 0 : spaceData.scheduleAt) || new Date())]
      }), isHost && isTimeToStartSpace && jsx(Button$8, Object.assign({
        padding: '9px 34px',
        borderRadius: '8px',
        background: `${theme.btnColorPrimary}`,
        border: `1px solid ${theme.btnOutline}`,
        cursor: 'pointer',
        onClick: handleStartSpaceLiveKit
      }, {
        children: jsx(Text, Object.assign({
          fontSize: "14px",
          fontWeight: 600,
          color: "#fff"
        }, {
          children: isLoading ? jsx(CircularProgressSpinner$1, {}) : 'Start this Space'
        }))
      })), !isHost && isMember && jsx(Button$8, Object.assign({
        padding: '9px 12px',
        borderRadius: '8px',
        background: `${theme.bgColorPrimary}`,
        border: `1px solid ${theme.borderColor}`,
        cursor: 'pointer'
      }, {
        children: jsx(Text, Object.assign({
          fontSize: "14px",
          fontWeight: 600,
          color: `${theme.textColorPrimary}`
        }, {
          children: "Remove Reminder"
        }))
      })), (!isHost || isHost && !isTimeToStartSpace) && shareUrl && jsx(Item$1, Object.assign({
        display: 'flex',
        gap: '13px'
      }, {
        children: shareOptions.map(shareOption => {
          const {
            icon,
            alt
          } = getShareOptionDetails(shareOption);
          return jsxs(ShareLinkItem, {
            children: [jsx(ShareLinkButton, Object.assign({
              onClick: () => handleShareAction(shareOption)
            }, {
              children: jsx(Image$5, {
                src: icon,
                alt: alt,
                width: '25px',
                height: '22px'
              })
            })), jsx(Text, Object.assign({
              fontSize: '12px',
              fontWeight: 600
            }, {
              children: ShareOptions[shareOption]
            }))]
          }, shareOption);
        })
      }))]
    }))
  }));
};
const SpaceInfoText = /*#__PURE__*/styled.span.withConfig({
  displayName: "ScheduledWidgetContent__SpaceInfoText",
  componentId: "sc-13slgtw-0"
})(["font-size:18px;font-weight:600;text-align:center;color:", ";"], ({
  theme
}) => theme.textColorPrimary);
const ShareLinkItem = /*#__PURE__*/styled.div.withConfig({
  displayName: "ScheduledWidgetContent__ShareLinkItem",
  componentId: "sc-13slgtw-1"
})(["display:flex;flex-direction:column;gap:8px;align-items:center;"]);
const ShareLinkButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "ScheduledWidgetContent__ShareLinkButton",
  componentId: "sc-13slgtw-2"
})(["background:", ";border-radius:14px;padding:16px;border:none;cursor:pointer;"], ({
  theme
}) => theme.bgColorSecondary);

var img$p = "data:image/svg+xml,%3csvg width='42' height='41' viewBox='0 0 42 41' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0.5 14.35V37.2145C0.5 38.6502 2.21425 39.3929 3.26166 38.4109L11.1047 31.0581C11.3158 30.8602 11.5944 30.75 11.8838 30.75H26.125C34.6164 30.75 41.5 23.8664 41.5 15.375C41.5 6.88362 34.6164 0 26.125 0H14.85C6.92471 0 0.5 6.42471 0.5 14.35Z' fill='%238B5CF6'/%3e%3cpath d='M0.5 14.35V37.2145C0.5 38.6502 2.21425 39.3929 3.26166 38.4109L11.1047 31.0581C11.3158 30.8602 11.5944 30.75 11.8838 30.75H26.125C34.6164 30.75 41.5 23.8664 41.5 15.375C41.5 6.88362 34.6164 0 26.125 0H14.85C6.92471 0 0.5 6.42471 0.5 14.35Z' fill='url(%23paint0_linear_15620_46454)'/%3e%3cg clip-path='url(%23clip0_15620_46454)'%3e%3cpath d='M11.9805 13.1191V18.0391' stroke='white' stroke-width='3.28' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M18.5391 6.55859V24.5986' stroke='white' stroke-width='3.28' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M25.1016 9.83789L25.1016 21.3179' stroke='white' stroke-width='3.28' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M31.6602 13.1191L31.6602 18.0391' stroke='white' stroke-width='3.28' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear_15620_46454' x1='0.500001' y1='41' x2='43.42' y2='38.8805' gradientUnits='userSpaceOnUse'%3e%3cstop offset='0.0001' stop-color='%23C2C2C2'/%3e%3cstop offset='1' stop-color='%23A3A3A3'/%3e%3c/linearGradient%3e%3cclipPath id='clip0_15620_46454'%3e%3crect width='36.08' height='36.08' fill='white' transform='translate(2.96094)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

const EndWidgetContent = ({
  onClose,
  toggleWidgetVisibility
}) => {
  const theme = React__default.useContext(ThemeContext$1);

  const handleCloseWidget = event => {
    // Call for hiding the widget
    toggleWidgetVisibility(); // Call for running onClose handler from prop

    onClose(event);
  };

  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsxs(Container$m, Object.assign({
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '15px',
      padding: '0 24px'
    }, {
      children: [jsx(Image$5, {
        width: '41px',
        height: '41px',
        src: img$p,
        alt: "End Icon"
      }), jsx(SpaceInfoText, {
        children: "This Space has ended"
      }), jsx(Item$1, Object.assign({
        padding: '9px 34px',
        borderRadius: '8px',
        background: `${theme.btnColorPrimary}`,
        border: `1px solid ${theme.borderColor}`,
        cursor: 'pointer',
        onClick: handleCloseWidget
      }, {
        children: jsx(Text, Object.assign({
          fontSize: "14px",
          fontWeight: 600,
          color: `${theme.textColorPrimary}`
        }, {
          children: "Close"
        }))
      }))]
    }))
  }));
};

const LIVE_WIDGET_CONTENT_FIXED_HEIGHT = '485px';
const SCHEDULED_WIDGET_CONTENT_FIXED_HEIGHT = '350px';
var SpaceStatus;

(function (SpaceStatus) {
  SpaceStatus["Live"] = "ACTIVE";
  SpaceStatus["Scheduled"] = "PENDING";
  SpaceStatus["Ended"] = "ENDED";
})(SpaceStatus || (SpaceStatus = {}));

const WidgetContent = ({
  account,
  spaceData,
  share,
  isHost,
  isTimeToStartSpace,
  isMember,
  isMinimized,
  spaceStatus,
  onClose,
  toggleWidgetVisibility
}) => {
  const [spaceStatusState, setSpaceStatusState] = useState(SpaceStatus.Scheduled);
  useEffect(() => {
    if (spaceStatus === SpaceStatus.Live) {
      setSpaceStatusState(SpaceStatus.Live);
    }

    if (spaceStatus === SpaceStatus.Scheduled) {
      setSpaceStatusState(SpaceStatus.Scheduled);
    }

    if (spaceStatus === SpaceStatus.Ended) {
      setSpaceStatusState(SpaceStatus.Ended);
    }
  }, [spaceStatus]);
  return jsx(Container$j, Object.assign({
    isMinimized: isMinimized,
    height: spaceStatusState === SpaceStatus.Live ? LIVE_WIDGET_CONTENT_FIXED_HEIGHT : SCHEDULED_WIDGET_CONTENT_FIXED_HEIGHT
  }, {
    children: spaceStatusState === SpaceStatus.Live ? jsx(LiveWidgetContent, {
      spaceData: spaceData,
      isHost: isHost,
      setSpaceStatusState: setSpaceStatusState,
      account: account
    }) : spaceStatusState === SpaceStatus.Scheduled ? jsx(ScheduledWidgetContent, {
      spaceData: spaceData,
      share: share,
      isHost: isHost,
      isMember: isMember,
      isTimeToStartSpace: isTimeToStartSpace,
      spaceStatusState: spaceStatusState,
      setSpaceStatusState: setSpaceStatusState
    }) : jsx(EndWidgetContent, {
      onClose: onClose,
      toggleWidgetVisibility: toggleWidgetVisibility
    })
  }));
}; //styles

const Container$j = /*#__PURE__*/styled.div.withConfig({
  displayName: "WidgetContent__Container",
  componentId: "sc-13gsred-0"
})(["display:flex;flex-direction:column;border-bottom:", ";height:", ";transition:height 300ms ease-out;overflow:hidden;align-items:center;justify-content:space-between;"], props => props.theme.borderColor, props => props.isMinimized ? '0' : props.height);

var img$o = "data:image/svg+xml,%3csvg width='33' height='32' viewBox='0 0 33 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M26.5 10C27.6046 10 28.5 9.10457 28.5 8C28.5 6.89543 27.6046 6 26.5 6C25.3954 6 24.5 6.89543 24.5 8C24.5 9.10457 25.3954 10 26.5 10Z' fill='white'/%3e%3cpath d='M26.5 18C27.6046 18 28.5 17.1046 28.5 16C28.5 14.8954 27.6046 14 26.5 14C25.3954 14 24.5 14.8954 24.5 16C24.5 17.1046 25.3954 18 26.5 18Z' fill='white'/%3e%3cpath d='M26.5 26C27.6046 26 28.5 25.1046 28.5 24C28.5 22.8954 27.6046 22 26.5 22C25.3954 22 24.5 22.8954 24.5 24C24.5 25.1046 25.3954 26 26.5 26Z' fill='white'/%3e%3c/svg%3e";

var img$n = "data:image/svg+xml,%3csvg width='33' height='32' viewBox='0 0 33 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M25.5113 13.272L25.5114 13.2721L25.5173 13.2656C25.6713 13.0939 25.7538 12.8686 25.7499 12.6375C25.7459 12.4064 25.6558 12.1841 25.4959 12.0179C25.3356 11.8515 25.1174 11.7544 24.8867 11.7501C24.6559 11.7459 24.4344 11.835 24.2683 11.9957L24.2682 11.9956L24.2621 12.0019L16.5 20.0625L8.73789 12.0019L8.738 12.0018L8.73166 11.9957C8.56563 11.835 8.34408 11.7459 8.11332 11.7501C7.88259 11.7544 7.6644 11.8515 7.50414 12.0179C7.34416 12.1841 7.25406 12.4064 7.25013 12.6375C7.24621 12.8686 7.32869 13.0939 7.48273 13.2656L7.48262 13.2657L7.48873 13.272L15.8754 21.9823L15.8755 21.9825C16.0395 22.1526 16.2639 22.25 16.5 22.25C16.7361 22.25 16.9605 22.1526 17.1245 21.9825L17.1246 21.9823L25.5113 13.272Z' fill='white' stroke='white' stroke-width='0.5'/%3e%3c/svg%3e";

var img$m = "data:image/svg+xml,%3csvg width='16' height='9' viewBox='0 0 16 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6.9906 8.60023L0.418792 2.32688C-0.139597 1.79385 -0.139597 0.932801 0.418792 0.399772C0.977181 -0.133258 1.87919 -0.133258 2.43758 0.399772L8.00716 5.70273L13.5624 0.399772C14.1208 -0.133258 15.0228 -0.133258 15.5812 0.399772C16.1396 0.932801 16.1396 1.79385 15.5812 2.32688L9.0094 8.60023C8.46532 9.13326 7.54899 9.13326 6.9906 8.60023Z' fill='%23B4B4B4'/%3e%3c/svg%3e";

var img$l = "data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M16.25 3.125H3.75C3.40482 3.125 3.125 3.40482 3.125 3.75V16.25C3.125 16.5952 3.40482 16.875 3.75 16.875H16.25C16.5952 16.875 16.875 16.5952 16.875 16.25V3.75C16.875 3.40482 16.5952 3.125 16.25 3.125Z' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M13.75 1.875V4.375' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M6.25 1.875V4.375' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M3.125 6.875H16.875' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e";

/**
 * A button component.
 * @function Button
 * @param {IButtonProps} props - The props for the Button component.
 * @returns {JSX.Element} The rendered Button component.
 */

const Button$7 = props => {
  const theme = useContext(ThemeContext$1);
  const {
    onClick,
    width,
    height,
    customStyle
  } = props;
  return jsx(SpacesButton, Object.assign({
    onClick: onClick,
    width: width,
    height: height,
    theme: theme,
    customStyle: customStyle
  }, {
    children: props.children
  }));
};
/* styling */

const SpacesButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "Button__SpacesButton",
  componentId: "sc-1honbhg-0"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;padding:", ";margin-top:12px;background:", ";border:2px solid ", ";color:", ";border-radius:8px;font-size:14px;font-weight:", ";font-family:'Strawford';flex:none;order:0;flex-grow:0;transition:150ms ease-in-out;&:hover{cursor:pointer;}width:", ";height:", ";"], props => props.customStyle ? props.customStyle.padding : '10px 16px', props => props.customStyle ? props.customStyle.background : props.theme.btnColorPrimary, props => props.customStyle ? props.customStyle.borderColor : props.theme.btnOutline, props => props.customStyle ? props.customStyle.color : props.theme.titleTextColor, props => props.customStyle ? props.customStyle.fontWeight : '700', props => props.width ? props.width : '100%', props => props.height ? props.height : '100%');

var img$k = "data:image/svg+xml,%3csvg width='33' height='32' viewBox='0 0 33 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M25.5113 13.272L25.5114 13.2721L25.5173 13.2656C25.6713 13.0939 25.7538 12.8686 25.7499 12.6375C25.7459 12.4064 25.6558 12.1841 25.4959 12.0179C25.3356 11.8515 25.1174 11.7544 24.8867 11.7501C24.6559 11.7459 24.4344 11.835 24.2683 11.9957L24.2682 11.9956L24.2621 12.0019L16.5 20.0625L8.73789 12.0019L8.738 12.0018L8.73166 11.9957C8.56563 11.835 8.34408 11.7459 8.11332 11.7501C7.88259 11.7544 7.6644 11.8515 7.50414 12.0179C7.34416 12.1841 7.25406 12.4064 7.25013 12.6375C7.24621 12.8686 7.32869 13.0939 7.48273 13.2656L7.48262 13.2657L7.48873 13.272L15.8754 21.9823L15.8755 21.9825C16.0395 22.1526 16.2639 22.25 16.5 22.25C16.7361 22.25 16.9605 22.1526 17.1245 21.9825L17.1246 21.9823L25.5113 13.272Z' fill='%2382828A' stroke='%2382828A' stroke-width='0.5'/%3e%3c/svg%3e";

var img$j = "data:image/svg+xml,%3csvg width='33' height='32' viewBox='0 0 33 32' fill='none' xmlns='http://www.w3.org/2000/svg' transform='rotate(180)'%3e%3cpath d='M25.5113 13.272L25.5114 13.2721L25.5173 13.2656C25.6713 13.0939 25.7538 12.8686 25.7499 12.6375C25.7459 12.4064 25.6558 12.1841 25.4959 12.0179C25.3356 11.8515 25.1174 11.7544 24.8867 11.7501C24.6559 11.7459 24.4344 11.835 24.2683 11.9957L24.2682 11.9956L24.2621 12.0019L16.5 20.0625L8.73789 12.0019L8.738 12.0018L8.73166 11.9957C8.56563 11.835 8.34408 11.7459 8.11332 11.7501C7.88259 11.7544 7.6644 11.8515 7.50414 12.0179C7.34416 12.1841 7.25406 12.4064 7.25013 12.6375C7.24621 12.8686 7.32869 13.0939 7.48273 13.2656L7.48262 13.2657L7.48873 13.272L15.8754 21.9823L15.8755 21.9825C16.0395 22.1526 16.2639 22.25 16.5 22.25C16.7361 22.25 16.9605 22.1526 17.1245 21.9825L17.1246 21.9823L25.5113 13.272Z' fill='%2382828A' stroke='%2382828A' stroke-width='0.5'/%3e%3c/svg%3e";

const Accordion = ({
  title,
  items,
  children
}) => {
  const theme = useContext(ThemeContext$1);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return jsxs(AccordionParent, {
    children: [jsxs(AccordionTitle, Object.assign({
      onClick: toggleAccordion
    }, {
      children: [jsxs(Title$1, {
        children: [jsx("div", {
          children: title
        }), items ? jsx(PendingCount$1, Object.assign({
          theme: theme
        }, {
          children: items
        })) : null]
      }), jsx(Image$4, {
        src: isOpen ? img$j : img$k,
        alt: "Maximize/Minimize icon"
      })]
    })), jsx(AccordionBody, Object.assign({
      isOpen: isOpen
    }, {
      children: children
    }))]
  });
};
/* styling */

const AccordionParent = /*#__PURE__*/styled.div.withConfig({
  displayName: "Accordion__AccordionParent",
  componentId: "sc-13astz2-0"
})(["border:1px solid #E4E4E7;border-radius:8px;padding:6.5px 0;margin:16px 0;"]);
const AccordionBody = /*#__PURE__*/styled.div.withConfig({
  displayName: "Accordion__AccordionBody",
  componentId: "sc-13astz2-1"
})(["overflow-y:scroll;max-height:", ";transition:max-height 200ms ease-out;"], ({
  isOpen
}) => isOpen ? '200px' : '0');
const AccordionTitle = /*#__PURE__*/styled.div.withConfig({
  displayName: "Accordion__AccordionTitle",
  componentId: "sc-13astz2-2"
})(["display:flex;justify-content:space-between;align-items:center;padding:8px 16px;cursor:pointer;"]);
const Title$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "Accordion__Title",
  componentId: "sc-13astz2-3"
})(["display:flex;align-items:center;"]);
const PendingCount$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "Accordion__PendingCount",
  componentId: "sc-13astz2-4"
})(["background:", ";border-radius:8px;padding:4px 10px;margin-left:6px;font-size:13px;color:", ";"], props => props.theme.btnColorPrimary, props => props.theme.titleTextColor);
const Image$4 = /*#__PURE__*/styled.img.withConfig({
  displayName: "Accordion__Image",
  componentId: "sc-13astz2-5"
})(["display:flex;max-height:initial;vertical-align:middle;overflow:initial;cursor:pointer;height:", ";width:", ";align-self:center;"], props => props.height || '24px', props => props.width || '20px');

const SearchInput = props => {
  const theme = useContext(ThemeContext$1);

  const handleChange = event => {
    props.onInputChange(event);
  };

  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsxs(InputContainer$3, {
      children: [jsx(LabelContainer$7, {
        children: jsx("label", {
          children: props.labelName
        })
      }), jsxs(InputWrapper, {
        children: [jsx(Input$7, {
          theme: theme,
          value: props.inputValue,
          onChange: handleChange,
          placeholder: 'Search...'
        }), jsx(CloseBtn, Object.assign({
          onClick: props.clearInput
        }, {
          children: jsx(CloseSvg, {})
        }))]
      })]
    })
  }));
};
/* styling */

const InputContainer$3 = /*#__PURE__*/styled.div.withConfig({
  displayName: "SearchInput__InputContainer",
  componentId: "sc-1f35nbe-0"
})(["display:flex;flex-direction:column;margin:16px 0;font-family:'Strawford';"]);
const LabelContainer$7 = /*#__PURE__*/styled.div.withConfig({
  displayName: "SearchInput__LabelContainer",
  componentId: "sc-1f35nbe-1"
})(["display:flex;justify-content:space-between;font-weight:500;color:", ""], props => {
  var _a;

  return (_a = props.theme.textColorPrimary) !== null && _a !== void 0 ? _a : '#000';
});
const Input$7 = /*#__PURE__*/styled.input.withConfig({
  displayName: "SearchInput__Input",
  componentId: "sc-1f35nbe-2"
})(["padding:16px;margin-top:12px;width:330px;background:#FFFFFF;border:2px solid ", ";border-radius:12px;"], props => props.theme.btnOutline);
const InputWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "SearchInput__InputWrapper",
  componentId: "sc-1f35nbe-3"
})(["position:relative;"]);
const CloseBtn = /*#__PURE__*/styled.div.withConfig({
  displayName: "SearchInput__CloseBtn",
  componentId: "sc-1f35nbe-4"
})(["position:absolute;right:0;top:0;padding:1.75rem 0.75rem;"]);

const SettingsLogo = ({
  height,
  width,
  color
}) => {
  return jsxs("svg", Object.assign({
    width: width !== null && width !== void 0 ? width : "36",
    height: height !== null && height !== void 0 ? height : "40",
    viewBox: "0 0 36 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsx("path", {
      d: "M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12Z",
      fill: color !== null && color !== void 0 ? color : "black"
    }), jsx("path", {
      d: "M16 20C16 21.1046 16.8954 22 18 22C19.1046 22 20 21.1046 20 20C20 18.8954 19.1046 18 18 18C16.8954 18 16 18.8954 16 20Z",
      fill: color !== null && color !== void 0 ? color : "black"
    }), jsx("path", {
      d: "M16 28C16 29.1046 16.8954 30 18 30C19.1046 30 20 29.1046 20 28C20 26.8954 19.1046 26 18 26C16.8954 26 16 26.8954 16 28Z",
      fill: color !== null && color !== void 0 ? color : "black"
    })]
  }));
};

const SCWInviteModal = props => {
  var _a;

  const {
    closeInviteModal,
    makeScheduleVisible,
    createSpace,
    isLoading,
    invitedMembersList,
    setInvitedMembersList,
    invitedAddressList,
    setInvitedAddressList,
    adminsList,
    setAdminsList,
    adminsAddressList,
    setAdminsAddressList,
    onClose,
    btnString
  } = props;
  const theme = useContext(ThemeContext$1);
  const {
    env,
    account,
    customSearch
  } = useSpaceData();
  const [invitedMember, setInvitedMember] = useState('');
  const [loadingAccount, setLoadingAccount] = useState(false);
  const [searchedUser, setSearchedUser] = useState({});
  const [errorMsg, setErrorMsg] = useState('');

  const searchMember = event => __awaiter(void 0, void 0, void 0, function* () {
    setInvitedMember(event.target.value);

    if (event.target.value === account) {
      handleError('Cannot add Host to members');
      return;
    }

    if (customSearch) {
      const customUserResponse = customSearch(event.target.value);

      const hasAccount = (obj, uniqueKey) => {
        const keys = Object.keys(obj);
        return keys.length < 4 && keys[0] === uniqueKey;
      };

      if (hasAccount(customUserResponse, 'account')) {
        const icon = createIcon({
          seed: customUserResponse.account,
          size: 10,
          scale: 3
        });
        const searchedUser = {
          handle: customUserResponse.account,
          name: customUserResponse.account,
          image: icon.toDataURL()
        };
        setSearchedUser(searchedUser);
      } else {
        setSearchedUser(customUserResponse);
      }

      return;
    }

    try {
      setLoadingAccount(true);
      const response = yield PushAPI.user.get({
        account: event.target.value,
        env
      });

      if (response === null) {
        const icon = createIcon({
          seed: event.target.value,
          size: 10,
          scale: 3
        });
        const nullUser = {
          handle: event.target.value,
          name: event.target.value,
          image: icon.toDataURL()
        };
        setSearchedUser(nullUser);
      } else {
        setSearchedUser(response);
      }

      setErrorMsg('');
    } catch (e) {
      console.error(e.message);
      setSearchedUser({});
      setErrorMsg(e.message);
    } finally {
      setLoadingAccount(false);
    }
  });

  const clearInput = () => {
    setInvitedMember('');
    setSearchedUser({});
    setErrorMsg('');
  };

  const handleError = errMsg => {
    setErrorMsg(errMsg);
    setTimeout(() => {
      setErrorMsg('');
    }, 2000);
  };

  const handleInviteMember = user => {
    if (invitedAddressList.length !== 0 && adminsAddressList.length !== 0 && (invitedAddressList.includes(user.did.substring(7)) || adminsAddressList.includes(user.did.substring(7)))) {
      handleError('Already Invited');
      return;
    }

    if (user.did) {
      setInvitedAddressList([...invitedAddressList, user.did.substring(7)]);
      setInvitedMembersList([...invitedMembersList, user]);
    } else {
      setInvitedAddressList([...invitedAddressList, user.handle]);
      setInvitedMembersList([...invitedMembersList, user]);
    }

    clearInput();
  };

  const handlePromoteToAdmin = user => {
    if (user.did) {
      setAdminsList([...adminsList, user]);
      setAdminsAddressList([...adminsAddressList, user.did.substring(7)]);
    } else {
      setAdminsList([...adminsList, user]);
      setAdminsAddressList([...adminsAddressList, user.handle]);
    }

    const updatedArray = invitedMembersList.filter(item => item !== user);
    setInvitedMembersList(updatedArray);

    if (user.did) {
      const updateAddressArray = invitedAddressList.filter(item => item !== user.did.substring(7));
      setInvitedAddressList(updateAddressArray);
    } else {
      const updateAddressArray = invitedAddressList.filter(item => item !== user.handle);
      setInvitedAddressList(updateAddressArray);
    }

    clearInput();
  };

  const handleDeleteInvitedUser = user => {
    const updatedArray = invitedMembersList.filter(item => item !== user);
    setInvitedMembersList(updatedArray);

    if (user.did) {
      const updateAddressArray = invitedAddressList.filter(item => item !== user.did.substring(7));
      setInvitedAddressList(updateAddressArray);
    } else {
      const updateAddressArray = invitedAddressList.filter(item => item !== user.handle);
      setInvitedAddressList(updateAddressArray);
    }
  };

  const handleDeleteInvitedAdmin = user => {
    const updatedArray = adminsList.filter(item => item !== user);
    setAdminsList(updatedArray);

    if (user.did) {
      const updateAdminAddressArray = adminsAddressList.filter(item => item !== user.did.substring(7));
      setAdminsAddressList(updateAdminAddressArray);
    } else {
      const updateAddressArray = adminsAddressList.filter(item => item !== user.handle);
      setAdminsAddressList(updateAddressArray);
    }
  };

  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsxs(Modal$3, Object.assign({
      clickawayClose: onClose
    }, {
      children: [jsx(ModalHeader$2, {
        heading: 'Invite members',
        backCallback: makeScheduleVisible,
        closeCallback: closeInviteModal
      }), jsx(SearchInput, {
        labelName: 'Add users',
        inputValue: invitedMember,
        onInputChange: searchMember,
        clearInput: clearInput
      }), jsx(ErrorMessage, {
        children: errorMsg
      }), jsxs(MembersList, {
        children: [loadingAccount && jsx(Spinner$2, {}), Object.keys(searchedUser).length === 0 ? null : searchedUser.hasOwnProperty('handle') ? jsx(ProfileContainer$1, {
          imageHeight: '48px',
          handle: searchedUser.handle,
          name: searchedUser.name,
          imageUrl: searchedUser.image,
          contBtn: jsx(ContBtn, {
            children: "Add +"
          }),
          btnCallback: () => handleInviteMember(searchedUser),
          border: true
        }) : jsx(ProfileContainer$1, {
          imageHeight: '48px',
          handle: searchedUser.did.substring(7),
          name: (_a = searchedUser.profile.name) !== null && _a !== void 0 ? _a : searchedUser.did.substring(7),
          imageUrl: searchedUser.profile.picture,
          contBtn: jsx(ContBtn, {
            children: "Add +"
          }),
          btnCallback: () => handleInviteMember(searchedUser),
          border: true
        })]
      }), invitedMembersList.length ? jsxs(InvitedList, {
        children: [jsxs(Heading, {
          children: ["Invited Members ", jsx(PendingCount, Object.assign({
            theme: theme
          }, {
            children: invitedMembersList.length
          }))]
        }), invitedMembersList.map(item => {
          var _a;

          if (item.hasOwnProperty('handle')) {
            return jsx(ProfileContainer$1, {
              imageHeight: '48px',
              handle: item.handle,
              name: item.name,
              imageUrl: item.image,
              contBtn: jsx(SettingsCont, {
                children: jsx(SettingsLogo, {
                  color: theme.textColorPrimary
                })
              }),
              removeCallback: () => handleDeleteInvitedUser(item),
              promoteCallback: () => handlePromoteToAdmin(item),
              border: true
            });
          } else {
            return jsx(ProfileContainer$1, {
              imageHeight: '48px',
              handle: item.did.substring(7),
              name: (_a = item.profile.name) !== null && _a !== void 0 ? _a : item.did.substring(7),
              imageUrl: item.profile.picture,
              contBtn: jsx(SettingsCont, {
                children: jsx(SettingsLogo, {
                  color: theme.textColorPrimary
                })
              }),
              removeCallback: () => handleDeleteInvitedUser(item),
              promoteCallback: () => handlePromoteToAdmin(item),
              border: true
            });
          }
        })]
      }) : null, adminsList.length ? jsxs(InvitedList, {
        children: [jsxs(Heading, {
          children: ["Speakers ", jsx(PendingCount, Object.assign({
            theme: theme
          }, {
            children: adminsList.length
          }))]
        }), adminsList.map(item => {
          var _a;

          if (item.hasOwnProperty('handle')) {
            return jsx(ProfileContainer$1, {
              imageHeight: '48px',
              handle: item.handle,
              name: item.name,
              imageUrl: item.image,
              contBtn: jsx(SettingsCont, {
                children: jsx(SettingsLogo, {
                  color: theme.textColorPrimary
                })
              }),
              removeCallback: () => handleDeleteInvitedAdmin(item),
              // promoteCallback={() => handlePromoteToAdmin(item)}
              border: true
            });
          } else {
            return jsx(ProfileContainer$1, {
              imageHeight: '48px',
              handle: item.did.substring(7),
              name: (_a = item.profile.name) !== null && _a !== void 0 ? _a : item.did.substring(7),
              imageUrl: item.profile.picture,
              contBtn: jsx(SettingsCont, {
                children: jsx(SettingsLogo, {
                  color: theme.textColorPrimary
                })
              }),
              removeCallback: () => handleDeleteInvitedAdmin(item),
              // promoteCallback={() => handlePromoteToAdmin(item)}
              border: true
            });
          }
        })]
      }) : null, jsx(Button$7, Object.assign({
        onClick: createSpace,
        width: 'max-content'
      }, {
        children: isLoading ? jsx(CircularProgressSpinner$1, {}) : btnString !== null && btnString !== void 0 ? btnString : 'Create Space'
      }))]
    }))
  }));
};
const MembersList = /*#__PURE__*/styled.div.withConfig({
  displayName: "SCWInviteModal__MembersList",
  componentId: "sc-1kkr9mx-0"
})(["width:100%;display:flex;flex-direction:column;gap:8px;"]);
const InvitedList = /*#__PURE__*/styled.div.withConfig({
  displayName: "SCWInviteModal__InvitedList",
  componentId: "sc-1kkr9mx-1"
})(["width:100%;display:flex;flex-direction:column;gap:8px;margin-top:28px;"]);
const Heading = /*#__PURE__*/styled.div.withConfig({
  displayName: "SCWInviteModal__Heading",
  componentId: "sc-1kkr9mx-2"
})(["display:flex;align-items:center;"]);
const PendingCount = /*#__PURE__*/styled.div.withConfig({
  displayName: "SCWInviteModal__PendingCount",
  componentId: "sc-1kkr9mx-3"
})(["background:", ";border-radius:8px;padding:4px 10px;margin-left:6px;font-size:13px;color:", ";"], props => props.theme.btnColorPrimary, props => props.theme.titleTextColor);
const SettingsCont = /*#__PURE__*/styled.div.withConfig({
  displayName: "SCWInviteModal__SettingsCont",
  componentId: "sc-1kkr9mx-4"
})(["display:flex;justify-content:center;align-items:center;cursor:pointer;"]);
const ContBtn = /*#__PURE__*/styled.button.withConfig({
  displayName: "SCWInviteModal__ContBtn",
  componentId: "sc-1kkr9mx-5"
})(["display:flex;flex-direction:row;align-items:center;margin-left:8px;line-height:18px;width:max-content;background:transparent;color:", ";border-radius:6px;font-weight:500;font-size:12px;padding:4px 8px;border-radius:8px;border:1px solid ", ";cursor:pointer;"], props => props.theme.btnColorPrimary, props => props.theme.btnOutline);
const ErrorMessage = /*#__PURE__*/styled.div.withConfig({
  displayName: "SCWInviteModal__ErrorMessage",
  componentId: "sc-1kkr9mx-6"
})(["color:#E93636;font-size:14px;margin-bottom:8px;"]);

const SpacesInfo = props => {
  var _a, _b, _c, _d, _e, _f, _g, _h;

  const {
    spaceData
  } = props;
  const theme = useContext(ThemeContext$1);
  const [isInviteVisible, setIsInviteVisible] = useState(false);
  const [invitedMembersList, setInvitedMembersList] = useState([]);
  const [invitedAddressList, setInvitedAddressList] = useState([]);
  const [adminsList, setAdminsList] = useState([]);
  const [adminsAddressList, setAdminsAddressList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const {
    signer,
    env,
    pgpPrivateKey
  } = useSpaceData();
  const customStyle = {
    color: theme === null || theme === void 0 ? void 0 : theme.textColorPrimary,
    background: theme === null || theme === void 0 ? void 0 : theme.bgColorPrimary,
    borderColor: theme === null || theme === void 0 ? void 0 : theme.borderColor,
    fontWeight: '500',
    padding: '14px'
  };

  const showExplicitInvite = () => {
    setIsInviteVisible(!isInviteVisible);
  };

  const closeInviteModal = () => {
    setIsInviteVisible(false);
  };

  const adminsArray = (_a = spaceData === null || spaceData === void 0 ? void 0 : spaceData.members) === null || _a === void 0 ? void 0 : _a.filter(member => member.isSpeaker);

  const updateSpace = () => __awaiter(void 0, void 0, void 0, function* () {
    const spaceUpdate = Object.assign({
      spaceName: spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceName,
      spaceDescription: 'Push Space',
      listeners: invitedAddressList,
      spaceImage: 'asd',
      speakers: adminsAddressList,
      isPublic: true,
      scheduleAt: new Date(Date.now() + 120000),
      signer: signer,
      env,
      spaceId: spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceId,
      status: spaceData === null || spaceData === void 0 ? void 0 : spaceData.status
    }, pgpPrivateKey && pgpPrivateKey !== '' && {
      pgpPrivateKey
    });

    try {
      setLoading(true);
      const response = yield PushAPI.space.update(spaceUpdate);
      console.log(response);
    } catch (e) {
      console.error(e.message);
    } finally {
      setLoading(false);
      closeInviteModal();
    }
  });

  return jsx(Modal$3, Object.assign({
    width: '400px'
  }, {
    children: jsxs(SpacesInfoContainer, Object.assign({
      theme: theme
    }, {
      children: [jsx(ModalHeader$2, {
        heading: 'Spaces Info',
        closeCallback: props.closeSpacesInfo
      }), jsx(ProfileContainer$1, {
        imageUrl: (_b = spaceData === null || spaceData === void 0 ? void 0 : spaceData.members[0]) === null || _b === void 0 ? void 0 : _b.image,
        name: (_d = (_c = spaceData === null || spaceData === void 0 ? void 0 : spaceData.members[0]) === null || _c === void 0 ? void 0 : _c.wallet) === null || _d === void 0 ? void 0 : _d.substring(7),
        handle: (_f = (_e = spaceData === null || spaceData === void 0 ? void 0 : spaceData.members[0]) === null || _e === void 0 ? void 0 : _e.wallet) === null || _f === void 0 ? void 0 : _f.substring(7),
        imageHeight: '48px',
        tag: 'Host'
      }), jsxs(SpacesDetailsContainer, {
        children: [jsx(Title, {
          children: spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceName
        }), jsx(Description, Object.assign({
          theme: theme
        }, {
          children: spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceDescription
        }))]
      }), jsx(Button$7, Object.assign({
        customStyle: customStyle,
        onClick: showExplicitInvite
      }, {
        children: "Invite Members"
      })), ((_g = spaceData === null || spaceData === void 0 ? void 0 : spaceData.pendingMembers) === null || _g === void 0 ? void 0 : _g.length) ? jsx(Accordion, Object.assign({
        title: 'Pending Invites',
        items: (_h = spaceData === null || spaceData === void 0 ? void 0 : spaceData.pendingMembers) === null || _h === void 0 ? void 0 : _h.length
      }, {
        children: (spaceData === null || spaceData === void 0 ? void 0 : spaceData.pendingMembers) && spaceData.pendingMembers.map(item => {
          var _a, _b;

          return jsx(ProfileContainer$1, {
            tag: (item === null || item === void 0 ? void 0 : item.isSpeaker) ? 'Co-Host' : undefined,
            imageHeight: '48px',
            handle: (_a = item === null || item === void 0 ? void 0 : item.wallet) === null || _a === void 0 ? void 0 : _a.substring(7),
            name: (_b = item === null || item === void 0 ? void 0 : item.wallet) === null || _b === void 0 ? void 0 : _b.substring(7),
            imageUrl: item === null || item === void 0 ? void 0 : item.image
          });
        })
      })) : null, jsx(AdminsList, {
        children: adminsArray && adminsArray.slice(1).map(item => {
          var _a, _b;

          return jsx(ProfileContainer$1, {
            border: true,
            tag: "Co-Host",
            imageHeight: '48px',
            handle: (_a = item === null || item === void 0 ? void 0 : item.wallet) === null || _a === void 0 ? void 0 : _a.substring(7),
            name: (_b = item === null || item === void 0 ? void 0 : item.wallet) === null || _b === void 0 ? void 0 : _b.substring(7),
            imageUrl: item === null || item === void 0 ? void 0 : item.image
          });
        })
      }), isInviteVisible ? jsx(SCWInviteModal, {
        closeInviteModal: showExplicitInvite,
        makeScheduleVisible: showExplicitInvite,
        createSpace: updateSpace,
        isLoading: isLoading,
        invitedMembersList: invitedMembersList,
        setInvitedMembersList: setInvitedMembersList,
        invitedAddressList: invitedAddressList,
        setInvitedAddressList: setInvitedAddressList,
        adminsList: adminsList,
        setAdminsList: setAdminsList,
        adminsAddressList: adminsAddressList,
        setAdminsAddressList: setAdminsAddressList,
        onClose: showExplicitInvite,
        btnString: 'Update Space'
      }) : null]
    }))
  }));
};
/** styling */

const SpacesInfoContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpacesInfo__SpacesInfoContainer",
  componentId: "sc-12pbtz1-0"
})(["color:", ";width:100%;"], props => {
  var _a;

  return (_a = props.theme) === null || _a === void 0 ? void 0 : _a.textColorPrimary;
});
const SpacesDetailsContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpacesInfo__SpacesDetailsContainer",
  componentId: "sc-12pbtz1-1"
})(["padding:0 16px;margin:24px 0;"]);
const Title = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpacesInfo__Title",
  componentId: "sc-12pbtz1-2"
})(["font-weight:500;"]);
const Description = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpacesInfo__Description",
  componentId: "sc-12pbtz1-3"
})(["color:", ";"], props => {
  var _a;

  return (_a = props.theme) === null || _a === void 0 ? void 0 : _a.textColorSecondary;
});
const AdminsList = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpacesInfo__AdminsList",
  componentId: "sc-12pbtz1-4"
})(["display:flex;flex-direction:column;gap:8px;margin-top:8px;"]);

const WidgetHeader = ({
  onClose,
  isMinimized,
  isHost,
  setIsMinimized,
  toggleWidgetVisibility,
  spaceData,
  spaceStatus
}) => {
  var _a, _b, _c, _d, _e;

  const theme = useContext(ThemeContext$1);
  const {
    isJoined
  } = useSpaceData();
  const tempImageUrl = 'https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg';
  const [isSpacesInfoVisible, setIsSpacesInfoVisible] = useState(false);
  const [isSpaceLive, setIsSpaceLive] = useState(SpaceStatus.Scheduled);

  const handleCloseWidget = event => {
    // Call for hiding the widget
    toggleWidgetVisibility(); // Call for running onClose handler from prop

    onClose(event);
  };

  const showSpacesInfo = () => {
    setIsSpacesInfoVisible(!isSpacesInfoVisible);
    console.log(isSpacesInfoVisible);
  };

  const closeSpacesInfo = () => {
    setIsSpacesInfoVisible(false);
  };

  useEffect(() => {
    if (spaceStatus === SpaceStatus.Live) {
      setIsSpaceLive(SpaceStatus.Live);
    }

    if (spaceStatus === SpaceStatus.Scheduled) {
      setIsSpaceLive(SpaceStatus.Scheduled);
    }

    if (spaceStatus === SpaceStatus.Ended) {
      setIsSpaceLive(SpaceStatus.Ended);
    }
  }, [spaceStatus]);
  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsxs(Container$i, Object.assign({
      theme: theme
    }, {
      children: [(isSpaceLive === SpaceStatus.Scheduled || isSpaceLive === SpaceStatus.Ended) && jsxs(Section$3, {
        children: [jsx(Item$1, Object.assign({
          marginBottom: '12px'
        }, {
          children: jsx(HostPfpContainer, {
            statusTheme: "Live",
            imageUrl: ((_a = spaceData === null || spaceData === void 0 ? void 0 : spaceData.members[0]) === null || _a === void 0 ? void 0 : _a.image) || tempImageUrl,
            name: `${(_b = spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceCreator) === null || _b === void 0 ? void 0 : _b.slice(7, 12)}...${(_c = spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceCreator) === null || _c === void 0 ? void 0 : _c.slice(-6, -1)}` || 'Host',
            handle: `${(_d = spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceCreator) === null || _d === void 0 ? void 0 : _d.slice(7, 12)}...${(_e = spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceCreator) === null || _e === void 0 ? void 0 : _e.slice(-6, -1)}` || 'Host'
          })
        })), jsxs(Item$1, Object.assign({
          display: 'flex',
          alignSelf: 'flex-start',
          alignItems: 'center'
        }, {
          children: [jsx(Item$1, Object.assign({
            marginLeft: '8px',
            display: 'flex',
            onClick: showSpacesInfo
          }, {
            children: jsx(Image$3, {
              alt: "Settings icon",
              src: img$o
            })
          })), jsx(Item$1, Object.assign({
            marginLeft: '8px',
            display: 'flex'
          }, {
            children: jsx(Image$3, {
              onClick: () => setIsMinimized(!isMinimized),
              src: isMinimized ? img$m : img$n,
              alt: "Maximize/Minimize icon"
            })
          })), !isJoined && jsx(Item$1, Object.assign({
            marginLeft: '8px',
            display: 'flex',
            onClick: handleCloseWidget
          }, {
            children: jsx(CloseSvg, {
              stroke: "white",
              height: "15",
              width: "15"
            })
          }))]
        }))]
      }), jsxs(Section$3, {
        children: [jsx(Text, Object.assign({
          fontSize: '16px',
          fontWeight: 700
        }, {
          children: (spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceName) || 'Test Space'
        })), isSpaceLive === SpaceStatus.Live && jsxs(Item$1, Object.assign({
          display: 'flex',
          alignSelf: 'flex-start',
          alignItems: 'center',
          marginLeft: '24px'
        }, {
          children: [jsx(Item$1, Object.assign({
            marginLeft: '8px',
            display: 'flex',
            onClick: showSpacesInfo
          }, {
            children: jsx(Image$3, {
              alt: "Settings icon",
              src: img$o
            })
          })), jsx(Item$1, Object.assign({
            marginLeft: '8px',
            display: 'flex'
          }, {
            children: jsx(Image$3, {
              onClick: () => setIsMinimized(!isMinimized),
              src: isMinimized ? img$m : img$n,
              alt: "Maximize/Minimize icon"
            })
          })), !isJoined && jsx(Item$1, Object.assign({
            marginLeft: '8px',
            display: 'flex',
            onClick: handleCloseWidget
          }, {
            children: jsx(CloseSvg, {
              stroke: "white",
              height: "15",
              width: "15"
            })
          }))]
        }))]
      }), isSpaceLive === SpaceStatus.Scheduled && jsxs(Item$1, Object.assign({
        display: 'flex',
        marginTop: '12px',
        alignItems: 'center'
      }, {
        children: [jsx(Image$3, {
          src: img$l,
          alt: "Calendar Icon"
        }), jsx(Item$1, Object.assign({
          marginLeft: '4px',
          fontSize: '14px',
          fontWeight: 600
        }, {
          children: formatDate((spaceData === null || spaceData === void 0 ? void 0 : spaceData.scheduleAt) || new Date())
        }))]
      })), isSpaceLive === SpaceStatus.Live && jsxs(Section$3, Object.assign({
        marginTop: "12px"
      }, {
        children: [jsxs(Item$1, Object.assign({
          display: 'flex',
          alignItems: 'center'
        }, {
          children: [jsx(Image$3, {
            src: img$A,
            alt: "Calendar Icon"
          }), jsx(Text, Object.assign({
            fontSize: '14px',
            fontWeight: 600,
            marginLeft: '4px'
          }, {
            children: "Live"
          }))]
        })), jsx(Item$1, Object.assign({
          display: 'flex',
          alignItems: 'center'
        }, {
          children: jsx(Item$1, {
            children: jsx(ParticipantContainer, {
              participants: spaceData === null || spaceData === void 0 ? void 0 : spaceData.members,
              orientation: "maximized"
            })
          })
        }))]
      })), isSpacesInfoVisible ? jsx(SpacesInfo, {
        closeSpacesInfo: closeSpacesInfo,
        spaceData: spaceData
      }) : null]
    }))
  }));
}; //styles

const Container$i = /*#__PURE__*/styled.div.withConfig({
  displayName: "WidgetHeader__Container",
  componentId: "sc-1va1891-0"
})(["display:flex;flex-direction:column;color:", ";padding:16px 24px;background:", ";"], props => props.theme.titleTextColor, props => props.theme.titleBg);
const Image$3 = /*#__PURE__*/styled.img.withConfig({
  displayName: "WidgetHeader__Image",
  componentId: "sc-1va1891-1"
})(["display:flex;max-height:initial;vertical-align:middle;overflow:initial;cursor:pointer;height:", ";width:", ";align-self:center;"], props => props.height || '24px', props => props.width || '20px');
const Section$3 = /*#__PURE__*/styled.div.withConfig({
  displayName: "WidgetHeader__Section",
  componentId: "sc-1va1891-2"
})(["display:flex;justify-content:space-between;margin-top:", ";"], props => props.marginTop);

const isHostOfSpace = (account, spaceData) => {
  return isAccountsEqual(account, spaceData === null || spaceData === void 0 ? void 0 : spaceData.spaceCreator);
};
const isMemberOfSpace = (account, spaceData) => {
  const isMemberArr = spaceData === null || spaceData === void 0 ? void 0 : spaceData.members.filter(member => isAccountsEqual(account, member.wallet));
  return (isMemberArr === null || isMemberArr === void 0 ? void 0 : isMemberArr.length) > 0;
};

const DEFAULT_OFFSET = 16;
const DEFAULT_MAXWIDTH = 415;
const SpaceWidget = options => {
  const {
    bottomOffset = DEFAULT_OFFSET,
    rightOffset = DEFAULT_OFFSET,
    width,
    zIndex = 1000,
    spaceId,
    share,
    onClose = () => {
      /** */
    },
    isTimeToStartSpace
  } = options || {};
  const spaceStatusRef = useRef();
  const [widgetHidden, setWidgetHidden] = useState(!spaceId);
  const [isMinimized, setIsMinimized] = useState(false);
  const [spaceData, setSpaceData] = useState();
  const {
    getSpaceInfo,
    setSpaceInfo,
    account,
    env,
    spaceInfo
  } = useSpaceData();
  useEffect(() => {
    if (!spaceId) {
      return;
    }

    setWidgetHidden(!spaceId);

    const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
      try {
        if (getSpaceInfo(spaceId)) {
          setSpaceData(getSpaceInfo(spaceId));
          return;
        }

        const response = yield PushAPI.space.get({
          spaceId,
          env
        });
        setSpaceInfo(spaceId, response);
        setSpaceData(response);
      } catch (error) {
        console.error(error);
      }
    });

    fetchData();
  }, [env, getSpaceInfo, setSpaceInfo, spaceId]);
  useEffect(() => {
    if (spaceId && spaceInfo[spaceId]) {
      spaceStatusRef.current = spaceInfo[spaceId].status;
    }
  }, [spaceId, spaceInfo]); // To Be Implemented Later via Meta messages.
  // useEffect(() => {
  //   (async () => {
  //     if (!spaceData) {
  //       return;
  //     }
  //     if (isLiveSpace(spaceData as SpaceDTO)) {
  //       await initSpaceObject(spaceData?.spaceId as string);
  //     }
  //   })();
  // }, [spaceData]);

  const isHost = isHostOfSpace(account, spaceData);
  const isMember = isMemberOfSpace(account, spaceData);

  const toggleWidgetVisibility = () => {
    setWidgetHidden(!widgetHidden);
  }; // console.log('Rendering SpaceWidget');
  // Implement the SpaceWidget component


  return jsx(ThemeProvider, Object.assign({
    theme: React__default.useContext(ThemeContext$1)
  }, {
    children: jsxs(Container$h, Object.assign({
      bottomOffset: bottomOffset,
      rightOffset: rightOffset,
      hidden: widgetHidden,
      width: width,
      zIndex: zIndex
    }, {
      children: [jsx(WidgetHeader, {
        onClose: onClose,
        isMinimized: isMinimized,
        setIsMinimized: setIsMinimized,
        toggleWidgetVisibility: toggleWidgetVisibility,
        isHost: isHost,
        spaceStatus: spaceStatusRef.current,
        spaceData: spaceData
      }), jsx(WidgetContent, {
        onClose: onClose,
        account: account,
        spaceData: spaceData,
        share: share,
        isHost: isHost,
        spaceStatus: spaceStatusRef.current,
        isMember: isMember,
        isTimeToStartSpace: isTimeToStartSpace,
        isMinimized: isMinimized,
        toggleWidgetVisibility: toggleWidgetVisibility
      })]
    }))
  }));
};
const Container$h = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceWidget__Container",
  componentId: "sc-1nlioj1-0"
})(["font-family:'Strawford';border-radius:12px;border:1px solid ", ";display:flex;flex-direction:column;width:", ";max-width:", ";min-width:320px;background:", ";justify-content:flex-start;position:fixed;bottom:", "px;right:", "px;visibility:", ";opacity:", ";transition:opacity 0.3s ease;z-index:", ";overflow:hidden;"], props => props.theme.borderColor, props => props.width ? `${props.width}px` : `${DEFAULT_MAXWIDTH}px`, props => props.width ? `${props.width}px` : `${DEFAULT_MAXWIDTH}px`, props => props.theme.bgColorPrimary, props => props.bottomOffset, props => props.rightOffset, props => props.hidden ? 'hidden' : 'visible', props => props.hidden ? 0 : 1, props => {
  var _a;

  return (_a = props.zIndex) !== null && _a !== void 0 ? _a : '1000';
});

var OrientationEnums;

(function (OrientationEnums) {
  OrientationEnums["Horizontal"] = "horizontal";
  OrientationEnums["Vertical"] = "vertical";
})(OrientationEnums || (OrientationEnums = {}));

var FeedTabs$1;

(function (FeedTabs) {
  FeedTabs["ForYou"] = "For You";
  FeedTabs["Popular"] = "Popular";
  FeedTabs["HostedByYou"] = "Hosted by you";
})(FeedTabs$1 || (FeedTabs$1 = {}));

var FilterEnums;

(function (FilterEnums) {
  FilterEnums["All"] = "All";
  FilterEnums["Live"] = "Live";
  FilterEnums["Scheduled"] = "Scheduled";
})(FilterEnums || (FilterEnums = {}));

const SpaceFeed = ({
  orientation: _orientation = OrientationEnums.Vertical,
  height,
  width,
  sortingOrder: _sortingOrder = ['Popular', 'ForYou', 'HostedByYou'],
  showTabs: _showTabs = true,
  filter: _filter = FilterEnums.All,
  showFilter: _showFilter = true,
  onBannerClickHandler
}) => {
  var _a, _b, _c;

  const theme = useContext(ThemeContext$1);
  const [filterTab, setFilterTab] = useState(_filter);
  const {
    selectedFeedTab,
    setSelectedFeedTab
  } = useSpaceData();
  const {
    account,
    mySpaces,
    setMySpaces,
    popularSpaces,
    setPopularSpaces,
    spaceRequests,
    setSpaceRequests
  } = useSpaceData();
  const listInnerRef = useFeedScroll((_a = mySpaces.apiData) === null || _a === void 0 ? void 0 : _a.length);

  const handleFilterData = spacesList => {
    if (filterTab === FilterEnums.All) {
      return spacesList;
    } else if (filterTab === FilterEnums.Live) {
      return spacesList.filter(space => {
        var _a;

        return ((_a = space.spaceInformation) === null || _a === void 0 ? void 0 : _a.status) === 'ACTIVE';
      });
    } else if (filterTab === FilterEnums.Scheduled) {
      return spacesList.filter(space => {
        var _a;

        return ((_a = space.spaceInformation) === null || _a === void 0 ? void 0 : _a.status) === 'PENDING';
      });
    } else {
      return spacesList;
    }
  };

  const handleMySpacesFilter = spacesList => {
    if (selectedFeedTab === FeedTabs$1.HostedByYou) {
      return spacesList.filter(space => {
        var _a;

        return isAccountsEqual(account, (_a = space.spaceInformation) === null || _a === void 0 ? void 0 : _a.spaceCreator);
      });
    }

    if (selectedFeedTab === FeedTabs$1.ForYou) {
      return spacesList.filter(space => {
        var _a;

        return !isAccountsEqual(account, (_a = space.spaceInformation) === null || _a === void 0 ? void 0 : _a.spaceCreator);
      });
    } else {
      return handleFilterData(spacesList);
    }
  };

  const handleClick = spaceId => {
    if (onBannerClickHandler) {
      return onBannerClickHandler(spaceId || '');
    }
  };

  const incrementSpacePage = spaces => __awaiter(void 0, void 0, void 0, function* () {
    if (loading === false && spaces.currentPage && spaces.lastPage && spaces.currentPage < spaces.lastPage) {
      if (spaces === mySpaces) spaces.currentPage && console.log('spaces.currentPage', spaces.currentPage, Date.now());
      setMySpaces({
        currentPage: spaces.currentPage + 1,
        lastPage: spaces.lastPage + 1
      });
      if (spaces === popularSpaces) spaces.currentPage && setPopularSpaces({
        currentPage: spaces.currentPage + 1,
        lastPage: spaces.lastPage + 1
      });
      if (spaces === spaceRequests) spaces.currentPage && setSpaceRequests({
        currentPage: spaces.currentPage + 1,
        lastPage: spaces.lastPage + 1
      });
    } else {
      return;
    }
  });

  const loadMoreData = () => __awaiter(void 0, void 0, void 0, function* () {
    if (selectedFeedTab === FeedTabs$1.ForYou) {
      incrementSpacePage(mySpaces);
    }

    if (selectedFeedTab === FeedTabs$1.Popular) {
      incrementSpacePage(popularSpaces);
    }

    if (selectedFeedTab === FeedTabs$1.HostedByYou) {
      incrementSpacePage(spaceRequests);
    }
  });

  const onScroll = () => {
    if (listInnerRef.current) {
      const {
        scrollTop
      } = listInnerRef.current;
      const {
        offsetHeight
      } = listInnerRef.current;
      const {
        scrollHeight
      } = listInnerRef.current;

      if (scrollTop + offsetHeight + 1 >= scrollHeight) {
        loadMoreData();
      }
    }
  }; //API calls


  const mySpaceLoading = useMySpaces(account);
  const popularSpaceLoading = usePopularSpaces();
  const spaceRequestsLoading = useSpaceRequests(account);
  const {
    loading
  } = mySpaceLoading || popularSpaceLoading || spaceRequestsLoading;
  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsx("div", Object.assign({
      style: {
        background: theme.bgColorPrimary,
        color: theme.textColorPrimary,
        padding: "10px"
      }
    }, {
      children: _orientation === OrientationEnums.Horizontal ? jsx(Spaces, Object.assign({
        orientation: _orientation
      }, {
        children: _orientation === OrientationEnums.Horizontal ? mySpaces && ((_b = mySpaces.apiData) === null || _b === void 0 ? void 0 : _b.map(space => {
          return jsx(SpaceBanner, {
            spaceId: space.spaceId,
            orientation: "pill",
            onBannerClick: onBannerClickHandler ? handleClick : undefined
          });
        })) : mySpaces && ((_c = mySpaces.apiData) === null || _c === void 0 ? void 0 : _c.map(space => {
          return jsx(SpaceBanner, {
            spaceId: space.spaceId,
            orientation: "maximized",
            onBannerClick: onBannerClickHandler ? handleClick : undefined
          });
        }))
      })) : jsxs(Fragment, {
        children: [jsx(Navigation, Object.assign({
          showTabs: _showTabs,
          width: width,
          showFilter: _showFilter
        }, {
          children: jsx(NavButtonWrapper, {
            children: _sortingOrder.map(tabName => {
              return jsx(NavButton, Object.assign({
                active: selectedFeedTab === FeedTabs$1[tabName],
                onClick: () => setSelectedFeedTab(FeedTabs$1[tabName])
              }, {
                children: FeedTabs$1[tabName]
              }));
            })
          })
        })), jsxs(Filter, Object.assign({
          showFilter: _showFilter
        }, {
          children: [jsx(FilterButton, Object.assign({
            active: filterTab === FilterEnums.All,
            onClick: () => setFilterTab(FilterEnums.All)
          }, {
            children: "All"
          })), jsx(FilterButton, Object.assign({
            active: filterTab === FilterEnums.Live,
            onClick: () => setFilterTab(FilterEnums.Live)
          }, {
            children: "Live"
          })), jsx(FilterButton, Object.assign({
            active: filterTab === FilterEnums.Scheduled,
            onClick: () => setFilterTab(FilterEnums.Scheduled)
          }, {
            children: "Scheduled"
          }))]
        })), jsx(ScrollContainer$1, Object.assign({
          width: width,
          height: height,
          ref: listInnerRef,
          onScroll: onScroll
        }, {
          children: jsxs(Container$g, {
            children: [selectedFeedTab === FeedTabs$1.ForYou ? jsx(Spaces, Object.assign({
              orientation: _orientation
            }, {
              children: mySpaces.apiData && (handleFilterData(handleMySpacesFilter(mySpaces.apiData)).length === 0 ? jsxs(NoSpaces, {
                children: [jsx(SpacesIcon, {
                  src: img$t
                }), jsx(NoSpacesTextV1, {
                  children: "Join a space"
                }), jsx(NoSpacesTextV2, {
                  children: "Get started by joining a space"
                })]
              }) : handleFilterData(handleMySpacesFilter(mySpaces.apiData)).map(space => {
                return jsx(SpaceBanner, {
                  spaceId: space.spaceId,
                  orientation: "maximized",
                  onBannerClick: onBannerClickHandler ? handleClick : undefined
                });
              }))
            })) : selectedFeedTab === FeedTabs$1.Popular ? jsx(PopularSpaces, {
              children: popularSpaces.apiData && handleFilterData(popularSpaces.apiData).map(space => {
                return jsx(SpaceBanner, {
                  spaceId: space.spaceId,
                  orientation: "maximized",
                  onBannerClick: onBannerClickHandler ? handleClick : undefined
                });
              })
            }) : jsx(Spaces, Object.assign({
              orientation: _orientation
            }, {
              children: mySpaces.apiData && (handleFilterData(handleMySpacesFilter(mySpaces.apiData)).length === 0 ? jsxs(NoSpaces, {
                children: [jsx(SpacesIcon, {
                  src: img$t
                }), jsx(NoSpacesTextV1, {
                  children: "Create a space"
                }), jsx(NoSpacesTextV2, {
                  children: "Get started by creating a space"
                })]
              }) : handleFilterData(handleMySpacesFilter(mySpaces.apiData)).map(space => {
                return jsx(SpaceBanner, {
                  spaceId: space.spaceId,
                  orientation: "maximized",
                  onBannerClick: onBannerClickHandler ? handleClick : undefined
                });
              }))
            })), loading && jsx(Spinner$2, {
              size: "40"
            })]
          })
        }))]
      })
    }))
  }));
}; //Styling

const ScrollContainer$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceFeed__ScrollContainer",
  componentId: "sc-tm8f47-0"
})(["width:", ";height:", ";overflow-y:auto;"], props => props.width ? `${props.width}px` : 'inherit', props => props.height ? `${props.height}px` : 'auto');
const Container$g = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceFeed__Container",
  componentId: "sc-tm8f47-1"
})(["display:flex;flex-direction:column;align-items:center;background:", ";border:1px solid ", ";border-radius:12px;padding:24px 32px;"], props => props.theme.bgColorPrimary, props => props.theme.borderColor);
const Navigation = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceFeed__Navigation",
  componentId: "sc-tm8f47-2"
})(["display:", ";flex-direction:row;justify-content:space-between;align-items:center;width:", ";border-bottom:1px solid ", ";margin-bottom:", ";background:", ";}"], props => props.showTabs ? 'flex' : 'none', props => props.width ? `${props.width}px` : 'inherit', props => props.theme.borderColor, props => props.showFilter ? '0' : '27px', props => props.theme.bgColorPrimary);
const NavButtonWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceFeed__NavButtonWrapper",
  componentId: "sc-tm8f47-3"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;"]);
const NavButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "SpaceFeed__NavButton",
  componentId: "sc-tm8f47-4"
})(["padding:10px 30px;font-weight:450;font-size:14px;border:none;border-bottom:", ";background:none;color:", ";&:hover{cursor:pointer;}"], props => props.active ? `2px solid ${props.theme.btnColorPrimary}` : 'none', props => props.active ? `${props.theme.textColorPrimary}` : `${props.theme.textColorSecondary}`);
const Spaces = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceFeed__Spaces",
  componentId: "sc-tm8f47-5"
})(["display:flex;flex-direction:", ";justify-content:flex-start;align-items:center;background:", ";width:", ";height:auto;gap:16px;"], props => props.orientation === 'horizontal' ? 'row' : 'column', props => props.theme.bgColorPrimary, props => props.orientation === 'horizontal' ? 'inherit' : '100%');
const PopularSpaces = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceFeed__PopularSpaces",
  componentId: "sc-tm8f47-6"
})(["display:flex;flex-direction:column;justify-content:space-between;align-items:center;background:", ";width:100%;height:auto;gap:16px;"], props => props.theme.bgColorPrimary);
const Filter = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceFeed__Filter",
  componentId: "sc-tm8f47-8"
})(["display:", ";flex-direction:row;justify-content:flex-start;align-items:center;background:", ";width:100%;margin:22px 0;"], props => props.showFilter ? 'flex' : 'none', props => props.theme.bgColorPrimary);
const FilterButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "SpaceFeed__FilterButton",
  componentId: "sc-tm8f47-9"
})(["display:inline-flex;height:30px;padding:0px 16px;justify-content:center;align-items:center;border-radius:99px;border:1px solid ", ";background:", ";color:", ";margin-right:8px;font-size:14px;&:hover{cursor:pointer;}"], props => props.theme.borderColor, props => props.active ? `${props.theme.btnColorPrimary}` : `${props.theme.bgColorSecondary}`, props => props.active ? `${props.theme.titleTextColor}` : `${props.theme.textColorPrimary}`);
const NoSpaces = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceFeed__NoSpaces",
  componentId: "sc-tm8f47-10"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;margin:130px 0;"]);
const SpacesIcon = /*#__PURE__*/styled.img.withConfig({
  displayName: "SpaceFeed__SpacesIcon",
  componentId: "sc-tm8f47-11"
})(["width:36px;height:36px;"]);
const NoSpacesTextV1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceFeed__NoSpacesTextV1",
  componentId: "sc-tm8f47-12"
})(["font-family:'Strawford';font-weight:450;font-size:16px;color:", "};}"], props => props.theme.textColorPrimary);
const NoSpacesTextV2 = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceFeed__NoSpacesTextV2",
  componentId: "sc-tm8f47-13"
})(["font-family:'Strawford';font-weight:450;color:", "};font-size:14px;"], props => props.theme.textColorSecondary);

const SpaceInvites = ({
  children,
  actionCallback,
  onBannerClickHandler
}) => {
  var _a, _b, _c;

  const theme = useContext(ThemeContext$1);
  const [modalOpen, setModalOpen] = useState(false);
  const {
    spaceRequests,
    setSpaceRequests
  } = useSpaceData();
  const containerRef = useFeedScroll((_a = spaceRequests.apiData) === null || _a === void 0 ? void 0 : _a.length);
  const {
    account
  } = useSpaceData();

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCustomClose = () => {
    if (actionCallback) {
      actionCallback();
    }

    setModalOpen(false);
  };

  const handleClick = spaceId => {
    if (onBannerClickHandler) {
      return onBannerClickHandler(spaceId || '');
    }
  };

  const loadMoreData = () => {
    if (loading === false && spaceRequests.currentPage && spaceRequests.lastPage && spaceRequests.currentPage < spaceRequests.lastPage) {
      setSpaceRequests({
        currentPage: spaceRequests.currentPage + 1,
        lastPage: spaceRequests.lastPage + 1
      });
    }
  };

  const onScrollContainer = () => {
    if (containerRef.current) {
      const {
        scrollTop,
        scrollHeight,
        clientHeight
      } = containerRef.current;

      if (scrollTop + clientHeight >= scrollHeight) {
        loadMoreData();
      }
    }
  };

  const {
    loading
  } = useSpaceRequests(account);
  return jsxs(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: [!children && jsx(Button$6, Object.assign({
      onClick: handleOpenModal
    }, {
      children: "Space Invites"
    })), children && jsx("div", Object.assign({
      onClick: handleOpenModal
    }, {
      children: children
    })), modalOpen && jsxs(Modal$3, Object.assign({
      clickawayClose: handleCloseModal,
      width: "450px"
    }, {
      children: [jsx(ModalHeader$2, {
        heading: "Spaces Invites",
        headingBadgeNumber: ((_b = spaceRequests.apiData) === null || _b === void 0 ? void 0 : _b.length) > 0 ? (_c = spaceRequests.apiData) === null || _c === void 0 ? void 0 : _c.length : undefined,
        closeCallback: handleCloseModal
      }), jsx(ScrollContainer, Object.assign({
        ref: containerRef,
        onScroll: onScrollContainer
      }, {
        children: jsxs(InviteContainer, {
          children: [spaceRequests.apiData ? spaceRequests.apiData.map(space => {
            return jsx(SpaceBanner, {
              spaceId: space.spaceId,
              orientation: "maximized",
              isInvite: true,
              actionCallback: handleCustomClose,
              onBannerClick: onBannerClickHandler ? handleClick : undefined
            });
          }) : null, loading ? jsx(Spinner$2, {
            size: "40"
          }) : null]
        })
      }))]
    }))]
  }));
};
const Button$6 = /*#__PURE__*/styled.button.withConfig({
  displayName: "SpaceInvites__Button",
  componentId: "sc-hjjf1x-0"
})(["padding:8px 16px;background-color:", ";color:", ";border:none;border-radius:4px;cursor:pointer;"], props => props.theme.btnColorPrimary, props => props.theme.textColorPrimary);
const ScrollContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceInvites__ScrollContainer",
  componentId: "sc-hjjf1x-1"
})(["max-height:400px;width:inherit;margin-top:24px;overflow-y:scroll;&::-webkit-scrollbar{margin-left:10px;width:8px;height:8px;}&::-webkit-scrollbar-thumb{-webkit-appearance:none;width:4px;height:auto;background:", ";border-radius:99px;}"], props => props.theme.btnColorPrimary);
const InviteContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceInvites__InviteContainer",
  componentId: "sc-hjjf1x-2"
})(["display:flex;flex-direction:column;gap:16px;margin:0 10px;"]);

const TextInputWithCounter = props => {
  const theme = useContext(ThemeContext$1);

  const handleChange = event => {
    const newText = event.target.value;
    const count = newText.length;

    if (count <= props.charCount) {
      props.onInputChange(event);
    }
  };

  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsxs(InputContainer$2, {
      children: [jsxs(LabelContainer$6, {
        children: [jsx("label", {
          children: props.labelName
        }), jsxs(CharCounter$2, Object.assign({
          theme: theme
        }, {
          children: [props.inputValue.length, " / ", props.charCount]
        }))]
      }), jsx(Input$6, {
        theme: theme,
        value: props.inputValue,
        onChange: handleChange
      })]
    })
  }));
};
/* styling */

const InputContainer$2 = /*#__PURE__*/styled.div.withConfig({
  displayName: "TextInput__InputContainer",
  componentId: "sc-qbpum2-0"
})(["display:flex;flex-direction:column;margin:16px 0;font-family:'Strawford';"]);
const LabelContainer$6 = /*#__PURE__*/styled.div.withConfig({
  displayName: "TextInput__LabelContainer",
  componentId: "sc-qbpum2-1"
})(["display:flex;justify-content:space-between;font-weight:500;color:", ""], props => {
  var _a;

  return (_a = props.theme.textColorPrimary) !== null && _a !== void 0 ? _a : '#000';
});
const Input$6 = /*#__PURE__*/styled.input.withConfig({
  displayName: "TextInput__Input",
  componentId: "sc-qbpum2-2"
})(["padding:16px;margin-top:12px;width:330px;background:#FFFFFF;border:2px solid ", ";border-radius:12px;font-family:'Strawford';font-size:14px;"], props => props.theme.btnOutline);
const CharCounter$2 = /*#__PURE__*/styled.div.withConfig({
  displayName: "TextInput__CharCounter",
  componentId: "sc-qbpum2-3"
})(["color:", ";"], props => props.theme.textColorSecondary);

const CalendarPurple = ({
  height,
  width,
  color
}) => {
  return jsxs("svg", Object.assign({
    width: width || "15",
    height: height || "14",
    viewBox: "0 0 15 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsx("path", {
      d: "M5.72237 11.7409H3.94459C3.31593 11.7409 2.71301 11.4912 2.26848 11.0466C1.82395 10.6021 1.57422 9.99918 1.57422 9.37052V4.03718C1.57422 3.40852 1.82395 2.80561 2.26848 2.36108C2.71301 1.91655 3.31593 1.66681 3.94459 1.66681H10.4631C11.0918 1.66681 11.6947 1.91655 12.1392 2.36108C12.5837 2.80561 12.8335 3.40852 12.8335 4.03718V5.81496M5.12977 1.07422V2.2594M9.27792 1.07422V2.2594M1.57422 4.62977H12.8335M11.352 9.15896L10.4631 10.0478",
      stroke: color !== null && color !== void 0 ? color : "#8B5CF6",
      "stroke-width": "1.18519",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), jsx("path", {
      d: "M10.463 12.9259C12.0994 12.9259 13.4259 11.5994 13.4259 9.96296C13.4259 8.32656 12.0994 7 10.463 7C8.82656 7 7.5 8.32656 7.5 9.96296C7.5 11.5994 8.82656 12.9259 10.463 12.9259Z",
      stroke: color !== null && color !== void 0 ? color : "#8B5CF6",
      "stroke-width": "1.18519",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })]
  }));
};

const SCWCreateModal = props => {
  const theme = useContext(ThemeContext$1);
  const {
    isInviteVisible,
    closeCreateModal,
    handleNameChange,
    handleDescriptionChange,
    nameValue,
    descriptionValue,
    isDescriptionEnabled,
    isScheduleVisible,
    onClose
  } = props;
  const secBtn = {
    background: 'transparent',
    borderColor: theme.btnOutline
  };
  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsxs(Modal$3, Object.assign({
      clickawayClose: onClose
    }, {
      children: [jsx(ModalHeader$2, {
        heading: 'Create your space',
        closeCallback: closeCreateModal
      }), jsx(TextInputWithCounter, {
        labelName: 'Name',
        inputValue: nameValue,
        onInputChange: handleNameChange,
        charCount: 50
      }), isDescriptionEnabled ? jsx(TextInputWithCounter, {
        labelName: 'Description',
        inputValue: descriptionValue,
        onInputChange: handleDescriptionChange,
        charCount: 120
      }) : null, jsxs(ButtonContainer$2, {
        children: [jsx(Button$7, Object.assign({
          onClick: isInviteVisible,
          width: '85%'
        }, {
          children: "Create Space"
        })), jsx("div", Object.assign({
          title: "Schedule your Space"
        }, {
          children: jsx(Button$7, Object.assign({
            width: '40px',
            height: '41px',
            customStyle: secBtn,
            onClick: isScheduleVisible
          }, {
            children: jsx(CalendarPurple, {
              height: '20',
              width: '20',
              color: theme.btnColorPrimary
            })
          }))
        }))]
      })]
    }))
  }));
};
/* styling */

const ButtonContainer$2 = /*#__PURE__*/styled.div.withConfig({
  displayName: "SCWCreateModal__ButtonContainer",
  componentId: "sc-gl8ef6-0"
})(["display:flex;justify-content:space-between;width:100%;"]);

const DateTimePicker = props => {
  const {
    propsDate,
    onDateChange,
    onTimeChange
  } = props;
  const theme = useContext(ThemeContext$1);
  const [selectedHours, setSelectedHours] = useState('0');
  const [selectedMinutes, setSelectedMinutes] = useState('0');
  const [selectedAMPM, setSelectedAMPM] = useState('AM');
  const [timeHumanReadable, setTimeHumanReadable] = useState(0);
  console.log("🚀 ~ file: DateTimePicker.tsx:24 ~ timeHumanReadable:", timeHumanReadable);

  const handleDateChange = event => {
    const date = new Date(event.target.value);
    onDateChange(date);
  };

  const getTime = (hours, minutes, ampm, propsDate) => {
    let totalMinutes = hours * 60 + minutes;

    if (ampm === 'PM' && hours !== 12) {
      totalMinutes += 12 * 60;
    } else if (ampm === 'AM' && hours === 12) {
      totalMinutes -= 12 * 60;
    }

    const date = new Date(propsDate);
    date.setHours(0, 0, 0, 0);
    date.setMinutes(totalMinutes);
    return date.getTime();
  };

  useEffect(() => {
    const hours = parseInt(selectedHours, 10);
    const minutes = parseInt(selectedMinutes, 10);
    const ampm = selectedAMPM;
    const newTimeEpoch = getTime(hours, minutes, ampm, propsDate);
    setTimeHumanReadable(newTimeEpoch);
    onTimeChange(newTimeEpoch);
  }, [selectedHours, selectedMinutes, selectedAMPM, propsDate]);
  return jsxs(DateTimeCont, {
    children: [jsx("div", {
      children: "Select date and time"
    }), jsx(Input$5, {
      theme: theme,
      type: "date",
      value: propsDate.toISOString().split('T')[0],
      onChange: handleDateChange
    }), jsxs(TimeContainer, {
      children: [jsxs(Select, Object.assign({
        theme: theme,
        value: selectedHours,
        onChange: e => setSelectedHours(e.target.value),
        placeholder: 'Hours'
      }, {
        children: [jsx("option", Object.assign({
          value: '00'
        }, {
          children: "12"
        })), jsx("option", Object.assign({
          value: '01'
        }, {
          children: "01"
        })), jsx("option", Object.assign({
          value: '02'
        }, {
          children: "02"
        })), jsx("option", Object.assign({
          value: '03'
        }, {
          children: "03"
        })), jsx("option", Object.assign({
          value: '04'
        }, {
          children: "04"
        })), jsx("option", Object.assign({
          value: '05'
        }, {
          children: "05"
        })), jsx("option", Object.assign({
          value: '06'
        }, {
          children: "06"
        })), jsx("option", Object.assign({
          value: '07'
        }, {
          children: "07"
        })), jsx("option", Object.assign({
          value: '08'
        }, {
          children: "08"
        })), jsx("option", Object.assign({
          value: '09'
        }, {
          children: "09"
        })), jsx("option", Object.assign({
          value: '10'
        }, {
          children: "10"
        })), jsx("option", Object.assign({
          value: '11'
        }, {
          children: "11"
        }))]
      })), jsxs(Select, Object.assign({
        theme: theme,
        value: selectedMinutes,
        onChange: e => setSelectedMinutes(e.target.value),
        placeholder: 'Minutes'
      }, {
        children: [jsx("option", Object.assign({
          value: '00'
        }, {
          children: "00"
        })), jsx("option", Object.assign({
          value: '15'
        }, {
          children: "15"
        })), jsx("option", Object.assign({
          value: '30'
        }, {
          children: "30"
        })), jsx("option", Object.assign({
          value: '45'
        }, {
          children: "45"
        }))]
      })), jsxs(Select, Object.assign({
        theme: theme,
        value: selectedAMPM,
        onChange: e => setSelectedAMPM(e.target.value),
        placeholder: 'AM/PM'
      }, {
        children: [jsx("option", Object.assign({
          value: 'AM'
        }, {
          children: "AM"
        })), jsx("option", Object.assign({
          value: 'PM'
        }, {
          children: "PM"
        }))]
      }))]
    })]
  });
};

const DateTimeCont = /*#__PURE__*/styled.div.withConfig({
  displayName: "DateTimePicker__DateTimeCont",
  componentId: "sc-a5tvc-0"
})(["display:flex;flex-direction:column;margin-top:24px;"]);
const Input$5 = /*#__PURE__*/styled.input.withConfig({
  displayName: "DateTimePicker__Input",
  componentId: "sc-a5tvc-1"
})(["padding:16px;margin-top:12px;width:330px;background:#FFFFFF;border:2px solid ", ";border-radius:12px;font-size:16px;font-family:'Strawford';"], props => props.theme.btnOutline);
const TimeContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "DateTimePicker__TimeContainer",
  componentId: "sc-a5tvc-2"
})(["display:flex;width:100%;gap:12px;"]);
const Select = /*#__PURE__*/styled.select.withConfig({
  displayName: "DateTimePicker__Select",
  componentId: "sc-a5tvc-3"
})(["padding:16px;margin-top:12px;background:#FFFFFF;border:2px solid ", ";border-radius:12px;font-size:16px;font-family:'Strawford';width:", ";"], props => props.theme.btnOutline, props => props.width ? props.width : '100%');

const SCWScheduleModal = props => {
  const {
    closeScheduleModal,
    makeCreateVisible,
    makeInviteVisible,
    dateValue,
    timeValue,
    onDateChange,
    onTimeChange,
    onClose
  } = props;
  return jsxs(Modal$3, Object.assign({
    clickawayClose: onClose
  }, {
    children: [jsx(ModalHeader$2, {
      heading: 'Schedule your space',
      backCallback: makeCreateVisible,
      closeCallback: closeScheduleModal
    }), jsx(DateTimePicker, {
      onDateChange: onDateChange,
      onTimeChange: onTimeChange,
      propsDate: dateValue,
      propsTime: timeValue
    }), jsx(ButtonContainer$1, {
      children: jsx(Button$7, Object.assign({
        onClick: makeInviteVisible
      }, {
        children: "Schedule Space"
      }))
    })]
  }));
};
const ButtonContainer$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "SCWScheduleModal__ButtonContainer",
  componentId: "sc-1kbpgt-0"
})(["display:flex;justify-content:space-between;width:100%;"]);

const SpacesLogo = ({
  height,
  width,
  color
}) => {
  return jsxs("svg", Object.assign({
    width: width || "16",
    height: height || "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsx("path", {
      d: "M0 5.6V14.5227C0 15.083 0.668977 15.3728 1.07772 14.9896L4.13843 12.1202C4.22082 12.043 4.32952 12 4.44245 12H10C13.3137 12 16 9.31371 16 6C16 2.68629 13.3137 0 10 0H5.6C2.50721 0 0 2.50721 0 5.6Z",
      fill: "white"
    }), jsxs("g", Object.assign({
      "clip-path": "url(#clip0_13894_56259)"
    }, {
      children: [jsx("path", {
        d: "M4.48022 5.12109V7.04109",
        stroke: color !== null && color !== void 0 ? color : "#8B5CF6",
        "stroke-width": "1.28",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), jsx("path", {
        d: "M7.04028 2.56055V9.60055",
        stroke: color !== null && color !== void 0 ? color : "#8B5CF6",
        "stroke-width": "1.28",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), jsx("path", {
        d: "M9.60034 3.83984L9.60034 8.31984",
        stroke: color !== null && color !== void 0 ? color : "#8B5CF6",
        "stroke-width": "1.28",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), jsx("path", {
        d: "M12.1602 5.12109L12.1602 7.04109",
        stroke: color !== null && color !== void 0 ? color : "#8B5CF6",
        "stroke-width": "1.28",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      })]
    })), jsx("defs", {
      children: jsx("clipPath", Object.assign({
        id: "clip0_13894_56259"
      }, {
        children: jsx("rect", {
          width: "14.08",
          height: "14.08",
          fill: "white",
          transform: "translate(0.960449)"
        })
      }))
    })]
  }));
};

const defaultProps = {
  btnText: 'Create your Space',
  customStyle: {
    padding: '14px 20px',
    borderRadius: '12px',
    border: '0px solid transparent',
    fontSize: '1rem'
  }
};
const SCWButton = props => {
  const {
    btnText,
    customStyle,
    onCreate
  } = props;
  const theme = useContext(ThemeContext$1);
  return jsx("div", {
    children: jsxs(CreateButton, Object.assign({
      customStyle: customStyle,
      theme: theme,
      onClick: onCreate
    }, {
      children: [jsx(SpacesLogo, {
        color: theme.btnColorPrimary
      }), jsx(BtnText, {
        children: btnText
      })]
    }))
  });
};
/* styling */

const CreateButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "SCWButton__CreateButton",
  componentId: "sc-npo33l-0"
})(["padding:", ";border-radius:", ";border:", ";font-size:", ";background:", ";color:", ";display:flex;align-items:center;font-family:'Strawford';cursor:pointer;"], props => props.customStyle.padding, props => props.customStyle.borderRadius, props => props.customStyle.border, props => props.customStyle.fontSize, props => props.theme.btnColorPrimary, props => props.theme.titleTextColor);
const BtnText = /*#__PURE__*/styled.div.withConfig({
  displayName: "SCWButton__BtnText",
  componentId: "sc-npo33l-1"
})(["margin-left:6px;"]);
SCWButton.defaultProps = defaultProps;

const SpaceCreationWidget = props => {
  const {
    children
  } = props;
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [isScheduleModalVisible, setIsScheduleModalVisible] = useState(false);
  const [isInviteModalVisible, setIsInviteModalVisible] = useState(false);
  const [invitedMembersList, setInvitedMembersList] = useState([]);
  const [invitedAddressList, setInvitedAddressList] = useState([]);
  const [adminsList, setAdminsList] = useState([]);
  const [adminsAddressList, setAdminsAddressList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [spaceState, setSpaceState] = useState({
    spaceName: '',
    spaceDescription: '',
    date: new Date(),
    time: Date.now()
  });
  const {
    signer,
    env,
    account,
    pgpPrivateKey
  } = useSpaceData();

  const handleNameChange = event => {
    setSpaceState(prevState => Object.assign(Object.assign({}, prevState), {
      spaceName: event.target.value
    }));
  };

  const handleDescriptionChange = event => {
    setSpaceState(prevState => Object.assign(Object.assign({}, prevState), {
      spaceDescription: event.target.value
    }));
  };

  const onDateChange = dateValue => {
    setSpaceState(prevState => Object.assign(Object.assign({}, prevState), {
      date: dateValue
    }));
  };

  const onTimeChange = timeValue => {
    setSpaceState(prevState => Object.assign(Object.assign({}, prevState), {
      time: timeValue
    }));
  };

  const showCreateSpace = () => {
    setIsCreateModalVisible(!isCreateModalVisible);
    setIsScheduleModalVisible(false);
    setIsInviteModalVisible(false);
  };

  const showScheduleSpace = () => {
    setIsScheduleModalVisible(!isScheduleModalVisible);
    setIsCreateModalVisible(false);
    setIsInviteModalVisible(false);
  };

  const showInviteSpace = () => {
    setIsInviteModalVisible(!isInviteModalVisible);
    setIsScheduleModalVisible(false);
    setIsCreateModalVisible(false);
  };

  const closeCreateModal = () => {
    setIsCreateModalVisible(false);
  };

  const closeScheduleModal = () => {
    setIsScheduleModalVisible(false);
  };

  const closeInviteModal = () => {
    setIsInviteModalVisible(false);
  };

  const clearAllState = () => {
    setIsCreateModalVisible(false);
    setIsScheduleModalVisible(false);
    setIsInviteModalVisible(false);
    setInvitedMembersList([]);
    setInvitedAddressList([]);
    setAdminsList([]);
    setAdminsAddressList([]);
    setLoading(false);
    setSpaceState({
      spaceName: '',
      spaceDescription: '',
      date: new Date(),
      time: Date.now()
    });
  };

  const createSpace = () => __awaiter(void 0, void 0, void 0, function* () {
    const spaceCreate = Object.assign({
      spaceName: spaceState.spaceName.length === 0 ? `${account}'s Space` : spaceState.spaceName,
      spaceDescription: 'Push Space',
      listeners: invitedAddressList,
      spaceImage: 'asd',
      speakers: adminsAddressList,
      isPublic: true,
      scheduleAt: spaceState.time > Date.now() ? new Date(spaceState.time) : new Date(Date.now() + 120000),
      signer: signer,
      env
    }, pgpPrivateKey && pgpPrivateKey !== '' && {
      pgpPrivateKey
    });

    try {
      setLoading(true);
      const response = yield PushAPI.space.create(spaceCreate);
      console.log(response);
    } catch (e) {
      console.error(e.message);
    } finally {
      setLoading(false);
      closeInviteModal();
      clearAllState();
    }
  });

  return jsx("div", {
    children: jsxs(SCWContainer, {
      children: [!children && jsx(SCWButton, {
        onCreate: showCreateSpace
      }), children && jsx("div", Object.assign({
        onClick: showCreateSpace
      }, {
        children: children
      })), isCreateModalVisible && jsx(SCWCreateModal, {
        isInviteVisible: showInviteSpace,
        closeCreateModal: closeCreateModal,
        nameValue: spaceState.spaceName,
        descriptionValue: spaceState.spaceDescription,
        handleNameChange: handleNameChange,
        handleDescriptionChange: handleDescriptionChange,
        isDescriptionEnabled: false,
        isScheduleVisible: showScheduleSpace,
        onClose: closeCreateModal
      }), isScheduleModalVisible && jsx(SCWScheduleModal, {
        closeScheduleModal: closeScheduleModal,
        makeCreateVisible: showCreateSpace,
        makeInviteVisible: showInviteSpace,
        dateValue: spaceState.date,
        timeValue: spaceState.time,
        onDateChange: onDateChange,
        onTimeChange: onTimeChange,
        onClose: closeScheduleModal
      }), isInviteModalVisible && jsx(SCWInviteModal, {
        closeInviteModal: closeInviteModal,
        makeScheduleVisible: showCreateSpace,
        createSpace: createSpace,
        isLoading: isLoading,
        invitedMembersList: invitedMembersList,
        setInvitedMembersList: setInvitedMembersList,
        invitedAddressList: invitedAddressList,
        setInvitedAddressList: setInvitedAddressList,
        adminsList: adminsList,
        setAdminsList: setAdminsList,
        adminsAddressList: adminsAddressList,
        setAdminsAddressList: setAdminsAddressList,
        onClose: closeInviteModal
      })]
    })
  });
};
const SCWContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "SpaceCreationWidget__SCWContainer",
  componentId: "sc-rt5fqp-0"
})(["font-family:'Strawford';"]);

class SpacesUI {
  constructor(props) {
    this.SpaceBanner = options => {
      useSpaceData(); // Use spaceBannerData and setSpaceBannerData in your component

      return jsx(SpaceBanner, Object.assign({}, options));
    };

    this.SpaceWidget = options => {
      const {
        spaceId
      } = options;
      const {
        spaceWidgetId
      } = useSpaceData();
      const [SpaceId, setSpaceId] = useState(spaceId);
      useEffect(() => {
        setSpaceId(spaceId);
      }, [spaceId, setSpaceId]);
      useEffect(() => {
        if (spaceWidgetId) setSpaceId(spaceWidgetId);
      }, [spaceWidgetId]);
      return jsx(SpaceWidget, Object.assign({}, options, {
        spaceId: SpaceId
      }));
    };

    this.SpaceFeed = options => {
      return jsx(SpaceFeed, Object.assign({}, options));
    };

    this.SpaceInvites = options => {
      return jsx(SpaceInvites, Object.assign({}, options));
    };

    this.SpaceCreationButtonWidget = options => {
      return jsx(SpaceCreationWidget, Object.assign({}, options));
    };

    this.connectToSockets = () => {
      // Connect to sockets and listen for events
      // Update spaceBannerData or trendingListData based on events
      useSpaceData(); // Example of updating spaceBannerData
      //setSpaceBannerData();
    };

    this.init = () => {
      // Initialization logic
      // Call connectToSockets or any other initialization tasks
      this.connectToSockets();
    };

    this.account = props.account;
    this.signer = props.signer;
    this.pgpPrivateKey = props.pgpPrivateKey;
    this.env = props.env;
    this.customSearch = props.customSearch;
  }

}

var tryToString = tryToString$5;

var $TypeError = TypeError;

var deletePropertyOrThrow$1 = function (O, P) {
  if (!delete O[P]) throw $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};

var toAbsoluteIndex = toAbsoluteIndex$2;
var lengthOfArrayLike$1 = lengthOfArrayLike$5;
var createProperty = createProperty$2;

var $Array = Array;
var max = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$1(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};

var arraySlice = arraySliceSimple;

var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice(array, 0, middle), comparefn),
    mergeSort(arraySlice(array, middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = (lindex < llength && rindex < rlength)
      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
      : lindex < llength ? left[lindex++] : right[rindex++];
  } return array;
};

var arraySort = mergeSort;

var userAgent$1 = engineUserAgent;

var firefox = userAgent$1.match(/firefox\/(\d+)/i);

var engineFfVersion = !!firefox && +firefox[1];

var UA = engineUserAgent;

var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

var userAgent = engineUserAgent;

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

var engineWebkitVersion = !!webkit && +webkit[1];

var $$1 = _export;
var uncurryThis = functionUncurryThis;
var aCallable = aCallable$a;
var toObject = toObject$7;
var lengthOfArrayLike = lengthOfArrayLike$5;
var deletePropertyOrThrow = deletePropertyOrThrow$1;
var toString = toString$b;
var fails$1 = fails$q;
var internalSort = arraySort;
var arrayMethodIsStrict = arrayMethodIsStrict$2;
var FF = engineFfVersion;
var IE_OR_EDGE = engineIsIeOrEdge;
var V8 = engineV8Version;
var WEBKIT = engineWebkitVersion;

var test = [];
var nativeSort = uncurryThis(test.sort);
var push = uncurryThis(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails$1(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails$1(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails$1(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$$1({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = lengthOfArrayLike(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});

const ChatIcon = () => {
  return jsx("svg", Object.assign({
    width: "29",
    height: "28",
    viewBox: "0 0 29 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: jsx("path", {
      d: "M0.625 10.3438V26.3168C0.625 27.1922 1.67028 27.6451 2.30894 27.0463L7.89958 21.8051C8.0444 21.6693 8.23548 21.5938 8.434 21.5938H18.2031C24.028 21.5938 28.75 16.8718 28.75 11.0469C28.75 5.222 24.028 0.5 18.2031 0.5H10.4688C5.0322 0.5 0.625 4.9072 0.625 10.3438Z",
      fill: "white"
    })
  }));
};

var PROPER_FUNCTION_NAME = functionName.PROPER;
var fails = fails$q;
var whitespaces = whitespaces$3;

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
var stringTrimForced = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};

var $ = _export;
var $trim = stringTrim.trim;
var forcedStringTrimMethod = stringTrimForced;

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

const SendIconSvg = ({
  fill
}) => {
  return jsx("svg", Object.assign({
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: fill !== null && fill !== void 0 ? fill : "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: jsx("path", {
      fill: "current",
      d: "M27.4625 3.24124L20.9125 26.4787C20.8033 26.8722 20.5755 27.2225 20.2602 27.4819C19.9448 27.7414 19.5572 27.8974 19.15 27.9287H18.975C18.5983 27.9279 18.2295 27.8207 17.9111 27.6194C17.5926 27.4182 17.3375 27.1311 17.175 26.7912L12.7125 17.3662C12.6687 17.2716 12.6548 17.1659 12.6727 17.0631C12.6906 16.9604 12.7394 16.8655 12.8125 16.7912L19.225 10.3787C19.3254 10.2878 19.4063 10.1774 19.4627 10.0542C19.5191 9.93107 19.55 9.79773 19.5533 9.6623C19.5566 9.52688 19.5324 9.39219 19.4821 9.26641C19.4318 9.14063 19.3565 9.02637 19.2607 8.93058C19.1649 8.8348 19.0507 8.75947 18.9249 8.70917C18.7991 8.65888 18.6644 8.63466 18.529 8.638C18.3936 8.64133 18.2602 8.67214 18.1371 8.72857C18.0139 8.785 17.9035 8.86585 17.8125 8.96624L11.4 15.3912C11.3258 15.4644 11.2309 15.5132 11.1282 15.5311C11.0254 15.549 10.9197 15.5351 10.825 15.4912L1.45004 11.0537C1.08311 10.8804 0.775053 10.6033 0.563988 10.2567C0.352924 9.91016 0.248118 9.50928 0.262542 9.10374C0.284668 8.68619 0.437922 8.28625 0.700498 7.96083C0.963074 7.63542 1.32159 7.40111 1.72504 7.29124L25.0125 0.728741C25.4198 0.612421 25.8536 0.628425 26.2512 0.774446C26.6488 0.920467 26.9898 1.18896 27.225 1.54124C27.3829 1.79158 27.4857 2.07261 27.5266 2.3657C27.5676 2.65879 27.5457 2.95723 27.4625 3.24124Z"
    })
  }));
};

const Spinner$1 = ({
  size: _size = 42,
  color
}) => {
  const {
    theme
  } = useContext(SupportChatPropsContext);
  return jsx(SpinLoader$1, Object.assign({
    width: `${_size}px`
  }, {
    children: jsx(SpinnerSvg, {
      color: color !== null && color !== void 0 ? color : theme.btnColorPrimary
    })
  }));
}; //styles

const spinAnimation$1 = /*#__PURE__*/keyframes(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const SpinLoader$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "Spinner__SpinLoader",
  componentId: "sc-rmciqr-0"
})(["display:flex;flex:initial;align-self:center;width:", ";animation-name:", ";animation-duration:2500ms;animation-iteration-count:infinite;animation-timing-function:linear;"], props => props.width, spinAnimation$1);

const ChatInput = () => {
  useState(false);
  useRef(null);
  const [filesUploading, setFileUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    account,
    env,
    supportAddress,
    apiKey,
    theme,
    pushUser
  } = useContext(SupportChatPropsContext);
  const {
    messageBeingSent,
    message,
    setMessage,
    setToastMessage,
    socketData,
    setToastType,
    connectedUser,
    chats,
    setChatsSorted
  } = useContext(SupportChatMainStateContext);

  const handleSubmit = e => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    setLoading(true);

    if (message.trim() !== '' && connectedUser) {
      const sendResponse = yield pushUser.chat.send(supportAddress, {
        type: 'Text',
        content: message
      });

      if (!sendResponse) {
        setToastMessage(sendResponse);
        setToastType('error');
        setLoading(false);
      }

      if (typeof sendResponse !== 'string') {
        // sendResponse.messageContent = message;
        // setChatsSorted([...chats, sendResponse]);
        setMessage('');
        setLoading(false);
      } else {
        setToastMessage(sendResponse);
        setToastType('error');
        setLoading(false);
      }
    }
  });

  const handleKeyPress = e => {
    const x = e.keyCode;

    if (x === 13) {
      handleSubmit(e);
    }
  };

  const textOnChange = e => {
    if (!messageBeingSent) {
      setMessage(e.target.value);
    }
  };

  return jsx(Container$f, Object.assign({
    theme: theme
  }, {
    children: messageBeingSent ? jsx(ItemHV2, {
      children: "Loading..."
    }) : jsxs(Fragment, {
      children: [jsx(TextInput$1, {
        placeholder: "Type your message...",
        onKeyDown: handleKeyPress,
        onChange: textOnChange,
        value: message
      }), jsxs(Fragment, {
        children: [jsx("label", {}), filesUploading || loading ? jsx(Spinner$1, {
          size: "35"
        }) : jsx("div", Object.assign({
          onClick: handleSubmit
        }, {
          children: jsx(SendIconSvg, {
            fill: theme.btnColorPrimary
          })
        }))]
      })]
    })
  }));
}; //styles
const Container$f = /*#__PURE__*/styled.div.withConfig({
  displayName: "ChatInput__Container",
  componentId: "sc-1ksvjax-3"
})(["padding:8px 10px 8px 8px;display:flex;align-items:center;justify-content:space-between;background:", ";border:", ";margin:10px 0;border-radius:16px;"], props => props.theme.bgColorPrimary || '#fff', props => props.theme.border);
const TextInput$1 = /*#__PURE__*/styled.textarea.withConfig({
  displayName: "ChatInput__TextInput",
  componentId: "sc-1ksvjax-5"
})(["font-family:'Strawford';font-size:16px;width:100%;height:25px;outline:none;padding-top:4px;border:none;resize:none;background:transparent;color:black;&&::-webkit-scrollbar{width:0;height:0;}::placeholder{color:#494d5f;}"]);
const ItemHV2 = /*#__PURE__*/styled.div.withConfig({
  displayName: "ChatInput__ItemHV2",
  componentId: "sc-1ksvjax-8"
})(["position:absolute;top:0;right:10px;bottom:0;justifycontent:flex-end;background:transparent;"]);

const MinimizeIcon = () => {
  return jsx("svg", Object.assign({
    width: "12",
    height: "14",
    viewBox: "0 0 12 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: jsx("path", {
      d: "M6 14L0 8L1.4 6.6L6 11.175L10.6 6.6L12 8L6 14ZM6 8L0 2L1.4 0.6L6 5.175L10.6 0.6L12 2L6 8Z",
      fill: "#62626A"
    })
  }));
};

const ModalHeader$1 = () => {
  const {
    modalTitle,
    theme
  } = useContext(SupportChatPropsContext);
  const {
    isModalOpen,
    setIsModalOpen
  } = useContext(SupportChatMainStateContext);
  return jsxs(Container$e, Object.assign({
    theme: theme
  }, {
    children: [jsx(Span$4, Object.assign({
      theme: theme
    }, {
      children: modalTitle
    })), jsx(Section$2, Object.assign({
      onClick: () => handleOnChatIconClick({
        isModalOpen,
        setIsModalOpen
      })
    }, {
      children: jsx(Div$1, {
        children: jsx(MinimizeIcon, {})
      })
    }))]
  }));
}; //styles

const Container$e = /*#__PURE__*/styled.div.withConfig({
  displayName: "ModalHeader__Container",
  componentId: "sc-yjqrej-0"
})(["display:flex;border-bottom:", ";align-items:center;justify-content:space-between;padding:17px;"], props => props.theme.border);
const Section$2 = /*#__PURE__*/styled.div.withConfig({
  displayName: "ModalHeader__Section",
  componentId: "sc-yjqrej-1"
})(["padding:10px 5px;cursor:pointer;"]);
const Div$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "ModalHeader__Div",
  componentId: "sc-yjqrej-2"
})(["display:flex;max-height:initial;vertical-align:middle;overflow:initial;cursor:pointer;justify-content:flex-end;"]);
const Span$4 = /*#__PURE__*/styled.span.withConfig({
  displayName: "ModalHeader__Span",
  componentId: "sc-yjqrej-3"
})(["font-weight:500;font-size:20px;line-height:28px;display:flex;align-items:center;text-align:center;color:", ";margin-left:27%;flex:none;order:0;flex-grow:0;"], props => props.theme.textColorPrimary || '#000');

const CopySvg = ({
  stroke,
  fill
}) => {
  return jsxs("svg", Object.assign({
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: fill !== null && fill !== void 0 ? fill : "none",
    xmlns: "http://www.w3.org/2000/svg",
    cursor: "pointer",
    stroke: stroke
  }, {
    children: [jsx("path", {
      d: "M17.1865 13.7498V2.81226H6.24902",
      stroke: "#657795",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), jsx("path", {
      d: "M14.0635 5.9375H3.12598V16.875H14.0635V5.9375Z",
      stroke: "#657795",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })]
  }));
};

const AddressInfo = () => {
  var _a;

  const {
    supportAddress,
    env,
    theme,
    pushUser
  } = useContext(SupportChatPropsContext);
  const [ensName, setEnsName] = useState('');
  const [user, setUser] = useState({});
  const [isCopied, setIsCopied] = useState(false);
  const walletAddress = pCAIP10ToWallet(supportAddress);
  useEffect(() => {
    const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
      if (pushUser) {
        const user = yield pushUser.info();
        setUser(user);
      }
    });

    getUser();
  }, [supportAddress, pushUser]);
  return jsxs(Container$d, Object.assign({
    theme: theme
  }, {
    children: [jsxs(Section$1, {
      children: [jsx(ImgSpan, {
        children: jsx(Image$2, {
          src: ((_a = user === null || user === void 0 ? void 0 : user.profile) === null || _a === void 0 ? void 0 : _a.picture) ? user === null || user === void 0 ? void 0 : user.profile.picture : Constants.DEFAULT_PROFILE_PICTURE,
          alt: "address profile"
        })
      }), jsxs(Span$3, Object.assign({
        theme: theme
      }, {
        children: [ensName && `${ensName}`, !ensName && `${walletAddress.substring(0, 8)}...${walletAddress.substring(walletAddress.length - 8)}`]
      }))]
    }), !isCopied && jsx("div", Object.assign({
      onClick: () => {
        copyToClipboard(walletAddress);
        setIsCopied(true);
      }
    }, {
      children: jsx(CopySvg, {
        stroke: theme.btnColorSecondary
      })
    })), isCopied && jsx("div", Object.assign({
      onMouseLeave: () => setIsCopied(false)
    }, {
      children: jsx(CopySvg, {
        stroke: theme.btnColorSecondary,
        fill: theme.btnColorSecondary
      })
    }))]
  }));
}; //styles

const Container$d = /*#__PURE__*/styled.div.withConfig({
  displayName: "AddressInfo__Container",
  componentId: "sc-f3zheg-0"
})(["display:flex;align-items:center;justify-content:space-between;flex-direction:row;box-sizing:border-box;background:", ";border:", ";padding:5px 20px 5px 5px;margin:13px 0;border-radius:29px;"], props => props.theme.bgColorPrimary || '#fff', props => props.theme.border);
const Section$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "AddressInfo__Section",
  componentId: "sc-f3zheg-1"
})(["display:flex;"]);
const ImgSpan = /*#__PURE__*/styled.span.withConfig({
  displayName: "AddressInfo__ImgSpan",
  componentId: "sc-f3zheg-2"
})(["display:flex;max-height:initial;vertical-align:middle;overflow:hidden;height:48px;width:47.5px;border-radius:99px;"]);
const Image$2 = /*#__PURE__*/styled.img.withConfig({
  displayName: "AddressInfo__Image",
  componentId: "sc-f3zheg-3"
})(["width:100%;height:100%;"]);
const Span$3 = /*#__PURE__*/styled.span.withConfig({
  displayName: "AddressInfo__Span",
  componentId: "sc-f3zheg-4"
})(["font-weight:500;font-size:17px;display:flex;flex-wrap:wrap;margin:0 10px;align-items:center;line-height:25px;letter-spacing:-0.019em;color:", ";"], props => props.theme.textColorPrimary || '#000');

const SponserPushIcon = () => {
  return jsxs("svg", Object.assign({
    width: "145",
    height: "18",
    viewBox: "0 0 145 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsx("path", {
      d: "M1.592 12V10.056H2.728C3.808 10.056 4.616 9.216 4.616 8.2C4.616 7.2 3.768 6.4 2.728 6.4H0.752V12H1.592ZM1.592 7.16H2.592C3.248 7.16 3.728 7.608 3.728 8.2C3.728 8.816 3.248 9.28 2.592 9.28H1.592V7.16ZM9.69231 12.08C11.3243 12.08 12.6043 10.816 12.6043 9.2C12.6043 7.584 11.3243 6.32 9.69231 6.32C8.05231 6.32 6.78031 7.584 6.78031 9.2C6.78031 10.816 8.05231 12.08 9.69231 12.08ZM9.69231 11.264C8.52431 11.264 7.67631 10.352 7.67631 9.2C7.67631 8.048 8.52431 7.136 9.69231 7.136C10.8603 7.136 11.7163 8.048 11.7163 9.2C11.7163 10.352 10.8603 11.264 9.69231 11.264ZM17.1454 12.08L18.5854 7.816L20.0894 12.08H20.5614L22.3614 6.4H21.4654L20.2974 10.288L18.9614 6.4H18.2094L16.9374 10.288L15.7454 6.4H14.8494L16.6734 12.08H17.1454ZM28.2831 12V11.232H25.5871V9.488H28.0511V8.736H25.5871V7.168H28.2831V6.4H24.7551V12H28.2831ZM33.008 9.84H33.104C34.272 9.84 34.968 9.016 34.968 8.104C34.968 7.192 34.232 6.4 33.104 6.4H31.152V12H31.992V9.856L34.112 12H35.24L33.008 9.84ZM33.008 7.168C33.688 7.168 34.088 7.56 34.088 8.104C34.088 8.664 33.688 9.072 33.008 9.072H31.992V7.168H33.008ZM41.2566 12V11.232H38.5606V9.488H41.0246V8.736H38.5606V7.168H41.2566V6.4H37.7286V12H41.2566ZM46.1494 12C47.7174 12 48.9574 10.744 48.9574 9.192C48.9574 7.656 47.7174 6.4 46.1494 6.4H44.1254V12H46.1494ZM44.9654 7.176H46.0134C47.1654 7.176 48.0694 7.96 48.0694 9.192C48.0694 10.432 47.1654 11.224 46.0134 11.224H44.9654V7.176ZM57.5403 12C58.5163 12 59.2683 11.352 59.2683 10.384C59.2683 9.688 58.9003 9.248 58.5003 9.064C58.7323 8.92 59.0843 8.528 59.0843 7.944C59.0843 7.064 58.3723 6.4 57.4123 6.4H55.3723V12H57.5403ZM56.1963 7.144H57.3163C57.8363 7.144 58.2283 7.448 58.2283 7.96C58.2283 8.528 57.8363 8.8 57.3163 8.8H56.1963V7.144ZM56.1963 9.52H57.4523C58.0523 9.52 58.4123 9.896 58.4043 10.384C58.4043 10.872 58.0683 11.272 57.4523 11.272H56.1963V9.52ZM64.0884 12V9.96L66.1764 6.4H65.2004L63.6484 9.136L62.0964 6.4H61.1124L63.2324 9.976V12H64.0884Z",
      fill: "#494D5F"
    }), jsx("path", {
      d: "M94.388 13V10.084H96.092C97.712 10.084 98.924 8.824 98.924 7.3C98.924 5.8 97.652 4.6 96.092 4.6H93.128V13H94.388ZM94.388 5.74H95.888C96.872 5.74 97.592 6.412 97.592 7.3C97.592 8.224 96.872 8.92 95.888 8.92H94.388V5.74ZM102.098 13.132C103.718 13.132 104.51 12.004 104.51 10.636V7.552H103.37V10.66C103.37 11.5 102.878 12.04 102.098 12.04C101.306 12.04 100.826 11.5 100.826 10.66V7.552H99.6865V10.636C99.6865 12.004 100.466 13.132 102.098 13.132ZM107.386 13.132C108.766 13.132 109.474 12.328 109.474 11.416C109.474 10.6 109.006 9.94 107.602 9.688C107.038 9.592 106.678 9.412 106.678 8.992C106.678 8.668 106.954 8.404 107.446 8.404C107.842 8.404 108.226 8.632 108.346 9.04L109.294 8.608C109.042 7.912 108.394 7.42 107.434 7.42C106.246 7.42 105.538 8.164 105.538 9.004C105.538 10.144 106.45 10.552 107.374 10.72C107.962 10.84 108.322 11.032 108.322 11.44C108.322 11.836 107.986 12.076 107.398 12.076C106.942 12.076 106.534 11.812 106.354 11.392L105.358 11.848C105.658 12.544 106.294 13.132 107.386 13.132ZM111.636 13V9.928C111.636 9.064 112.2 8.488 112.956 8.488C113.724 8.488 114.204 9.028 114.204 9.808V13H115.344V9.568C115.344 8.356 114.468 7.42 113.184 7.42C112.416 7.42 111.888 7.768 111.636 8.08V4.6H110.496V13H111.636ZM123.704 13.12C125.288 13.12 126.62 12.352 127.352 11.164L126.272 10.516C125.768 11.332 124.844 11.896 123.704 11.896C122 11.896 120.692 10.54 120.692 8.8C120.692 7.06 122 5.704 123.704 5.704C124.844 5.704 125.768 6.256 126.272 7.084L127.352 6.424C126.608 5.248 125.324 4.48 123.704 4.48C121.268 4.48 119.36 6.376 119.36 8.8C119.36 11.224 121.268 13.12 123.704 13.12ZM129.666 13V9.928C129.666 9.064 130.23 8.488 130.986 8.488C131.754 8.488 132.234 9.028 132.234 9.808V13H133.374V9.568C133.374 8.356 132.498 7.42 131.214 7.42C130.446 7.42 129.918 7.768 129.666 8.08V4.6H128.526V13H129.666ZM136.625 13.132C137.477 13.132 138.053 12.712 138.257 12.4V13H139.313V9.556C139.313 8.452 138.473 7.42 136.937 7.42C135.797 7.42 135.053 8.032 134.705 8.812L135.557 9.364C135.773 8.848 136.205 8.452 136.937 8.452C137.765 8.452 138.161 8.92 138.161 9.28C138.161 9.58 137.945 9.784 137.597 9.784H136.349C135.293 9.784 134.525 10.396 134.525 11.356C134.525 12.34 135.341 13.132 136.625 13.132ZM136.721 12.148C136.073 12.148 135.713 11.8 135.713 11.368C135.713 10.972 136.025 10.672 136.481 10.672H138.185V10.744C138.185 11.56 137.633 12.148 136.721 12.148ZM143.918 13.072V12.016H143.27C142.754 12.016 142.274 11.752 142.274 11.02V8.548H143.918V7.552H142.274V6.232H141.434V6.256C141.434 7.228 140.846 7.72 140.21 7.72H140.174V8.548H141.134V11.128C141.134 12.436 141.926 13.072 143.126 13.072H143.918Z",
      fill: "black"
    }), jsx("path", {
      d: "M81.4773 16.2944C81.9092 16.2941 82.3317 16.1728 82.6935 15.9452C83.0553 15.7176 83.3408 15.3935 83.5151 15.0123C83.5353 14.97 83.544 14.9234 83.5404 14.877C83.5368 14.8306 83.5211 14.7858 83.4947 14.7469C83.4683 14.7079 83.432 14.6761 83.3894 14.6543C83.3467 14.6326 83.299 14.6216 83.2508 14.6225H79.7038C79.6556 14.6217 79.608 14.6328 79.5654 14.6546C79.5229 14.6764 79.4867 14.7082 79.4604 14.7472C79.4341 14.7861 79.4184 14.8308 79.4148 14.8772C79.4113 14.9236 79.42 14.97 79.4401 15.0123C79.6145 15.3934 79.8998 15.7174 80.2614 15.945C80.6231 16.1726 81.0455 16.294 81.4773 16.2944V16.2944Z",
      fill: "url(#paint0_linear_3808_9309)"
    }), jsx("path", {
      d: "M86.9221 12.5533C86.6451 12.5533 86.3794 12.4471 86.1835 12.2581C85.9876 12.0691 85.8775 11.8128 85.8775 11.5455V7.88416C85.8773 6.94002 85.5509 6.02288 84.95 5.27774C84.349 4.53261 83.5077 4.00199 82.5592 3.76978C82.5244 3.5131 82.3938 3.27746 82.1919 3.10698C81.99 2.9365 81.7306 2.84287 81.4623 2.84363C81.194 2.84439 80.9351 2.93948 80.7342 3.1111C80.5334 3.28272 80.4042 3.51909 80.371 3.77596C79.525 3.9893 78.7641 4.44078 78.185 5.07287C77.606 5.70497 77.2351 6.48907 77.1196 7.32526C77.1196 7.35069 77.1125 7.37544 77.1097 7.40088C77.1068 7.42631 77.1018 7.46962 77.099 7.504C77.0961 7.53837 77.0933 7.57274 77.0904 7.60643C77.0876 7.64011 77.0869 7.66348 77.0854 7.69236C77.0854 7.75079 77.0812 7.80854 77.0805 7.86766V11.5448C77.0805 11.8108 76.9715 12.066 76.7773 12.2548C76.5831 12.4436 76.3194 12.5506 76.0437 12.5526C75.9789 12.5519 75.9147 12.5635 75.8546 12.5867C75.7945 12.61 75.7397 12.6444 75.6934 12.6881C75.647 12.7317 75.6101 12.7838 75.5846 12.8412C75.5592 12.8986 75.5457 12.9604 75.5449 13.0228V13.027C75.5449 13.1528 75.5967 13.2734 75.6889 13.3624C75.7811 13.4513 75.9062 13.5013 76.0366 13.5013H86.9221C87.0492 13.4966 87.1694 13.4446 87.2576 13.3563C87.3458 13.2679 87.395 13.15 87.395 13.0273C87.395 12.9046 87.3458 12.7867 87.2576 12.6983C87.1694 12.61 87.0492 12.558 86.9221 12.5533V12.5533Z",
      fill: "url(#paint1_linear_3808_9309)"
    }), jsx("path", {
      d: "M84.6296 3.05068C85.2306 3.17935 85.7742 3.48793 86.1826 3.93237C86.5911 4.37681 86.8436 4.93438 86.904 5.52549C86.9069 5.55738 86.9163 5.58841 86.9316 5.61677C86.947 5.64514 86.9681 5.67028 86.9936 5.69074C87.0191 5.7112 87.0486 5.72657 87.0803 5.73597C87.112 5.74536 87.1453 5.7486 87.1784 5.74548C87.2449 5.73934 87.3063 5.70824 87.3494 5.65886C87.3706 5.63427 87.3865 5.60588 87.3963 5.57532C87.4061 5.54477 87.4095 5.51265 87.4064 5.48081C87.3405 4.78434 87.0458 4.12637 86.5653 3.60271C86.0848 3.07906 85.4436 2.71707 84.735 2.56946C84.7177 2.56597 84.7 2.56413 84.6823 2.56396C84.6201 2.56411 84.5602 2.58642 84.514 2.62661C84.4678 2.66681 84.4386 2.72205 84.4321 2.78174C84.4255 2.84142 84.4421 2.90133 84.4785 2.94995C84.515 2.99858 84.5688 3.03249 84.6296 3.04518V3.05068Z",
      fill: "url(#paint2_linear_3808_9309)"
    }), jsx("path", {
      d: "M84.9128 1.48117C85.8483 1.68062 86.6944 2.16038 87.3302 2.85182C87.9661 3.54327 88.3589 4.41099 88.4527 5.33088C88.4557 5.36273 88.4651 5.39371 88.4805 5.42203C88.4959 5.45035 88.517 5.47546 88.5425 5.4959C88.568 5.51635 88.5974 5.53172 88.6291 5.54116C88.6607 5.55059 88.694 5.55389 88.727 5.55086C88.7936 5.54473 88.855 5.51362 88.898 5.46424C88.9192 5.43965 88.9352 5.41126 88.945 5.38071C88.9547 5.35015 88.9582 5.31803 88.955 5.28619C88.855 4.26214 88.4196 3.29542 87.7119 2.52612C87.0042 1.75683 86.061 1.22493 85.019 1.00751C85.0016 1.00402 84.9839 1.00218 84.9662 1.00201C84.904 1.00199 84.8439 1.02418 84.7976 1.06432C84.7512 1.10446 84.7219 1.15971 84.7153 1.21945C84.7087 1.27918 84.7252 1.33916 84.7616 1.38786C84.7981 1.43656 84.8519 1.47053 84.9128 1.48323V1.48117Z",
      fill: "url(#paint3_linear_3808_9309)"
    }), jsx("path", {
      d: "M78.3258 3.05061C78.3866 3.03792 78.4404 3.00401 78.4768 2.95539C78.5133 2.90676 78.5298 2.84685 78.5233 2.78717C78.5167 2.72749 78.4876 2.67224 78.4414 2.63205C78.3952 2.59185 78.3352 2.56954 78.273 2.5694C78.2553 2.56957 78.2376 2.57141 78.2203 2.5749C77.5129 2.72209 76.8726 3.08297 76.3922 3.60513C75.9118 4.12729 75.6165 4.78356 75.549 5.47868C75.5458 5.51052 75.5493 5.54264 75.5591 5.57319C75.5688 5.60375 75.5848 5.63214 75.606 5.65673C75.627 5.68147 75.653 5.70188 75.6824 5.71676C75.7118 5.73164 75.7439 5.74068 75.777 5.74335C75.81 5.74647 75.8433 5.74323 75.8751 5.73384C75.9068 5.72444 75.9362 5.70907 75.9618 5.68861C75.9873 5.66815 76.0083 5.64301 76.0237 5.61464C76.0391 5.58628 76.0485 5.55525 76.0513 5.52336C76.1122 4.93262 76.3649 4.37551 76.7733 3.93148C77.1817 3.48745 77.725 3.17917 78.3258 3.05061V3.05061Z",
      fill: "url(#paint4_linear_3808_9309)"
    }), jsx("path", {
      d: "M78.0427 1.48121C78.1035 1.46853 78.1573 1.43461 78.1937 1.38599C78.2302 1.33736 78.2467 1.27745 78.2402 1.21777C78.2337 1.15809 78.2045 1.10284 78.1583 1.06265C78.1121 1.02245 78.0521 1.00014 77.9899 1C77.9722 1.00013 77.9546 1.00197 77.9372 1.0055C76.8952 1.22292 75.9519 1.75482 75.2443 2.52411C74.5366 3.2934 74.1011 4.26013 74.0011 5.28418C73.998 5.31601 74.0014 5.34813 74.0112 5.37869C74.021 5.40925 74.0369 5.43764 74.0581 5.46223C74.0792 5.48697 74.1052 5.50738 74.1345 5.52226C74.1639 5.53714 74.1961 5.54618 74.2291 5.54884C74.2621 5.55187 74.2954 5.54857 74.3271 5.53914C74.3588 5.52971 74.3882 5.51433 74.4137 5.49389C74.4392 5.47344 74.4603 5.44834 74.4757 5.42002C74.4911 5.3917 74.5005 5.36072 74.5035 5.32886C74.5977 4.40947 74.9907 3.54234 75.6263 2.85133C76.262 2.16031 77.1077 1.68078 78.0427 1.48121V1.48121Z",
      fill: "url(#paint5_linear_3808_9309)"
    }), jsxs("defs", {
      children: [jsxs("linearGradient", Object.assign({
        id: "paint0_linear_3808_9309",
        x1: "83.8614",
        y1: "11.0044",
        x2: "81.1098",
        y2: "15.8527",
        gradientUnits: "userSpaceOnUse"
      }, {
        children: [jsx("stop", {
          "stop-color": "#FF94A6"
        }), jsx("stop", {
          offset: "0.32",
          "stop-color": "#E03DC1"
        }), jsx("stop", {
          offset: "1",
          "stop-color": "#8247E5"
        })]
      })), jsxs("linearGradient", Object.assign({
        id: "paint1_linear_3808_9309",
        x1: "85.2526",
        y1: "5.7345",
        x2: "79.4177",
        y2: "14.3293",
        gradientUnits: "userSpaceOnUse"
      }, {
        children: [jsx("stop", {
          "stop-color": "#FF94A6"
        }), jsx("stop", {
          offset: "0.32",
          "stop-color": "#E03DC1"
        }), jsx("stop", {
          offset: "1",
          "stop-color": "#8247E5"
        })]
      })), jsxs("linearGradient", Object.assign({
        id: "paint2_linear_3808_9309",
        x1: "90.186",
        y1: "1.42074",
        x2: "75.6444",
        y2: "11.4259",
        gradientUnits: "userSpaceOnUse"
      }, {
        children: [jsx("stop", {
          "stop-color": "#FF94A6"
        }), jsx("stop", {
          offset: "0.32",
          "stop-color": "#E03DC1"
        }), jsx("stop", {
          offset: "1",
          "stop-color": "#8247E5"
        })]
      })), jsxs("linearGradient", Object.assign({
        id: "paint3_linear_3808_9309",
        x1: "90.0467",
        y1: "1.21856",
        x2: "75.5051",
        y2: "11.223",
        gradientUnits: "userSpaceOnUse"
      }, {
        children: [jsx("stop", {
          "stop-color": "#FF94A6"
        }), jsx("stop", {
          offset: "0.32",
          "stop-color": "#E03DC1"
        }), jsx("stop", {
          offset: "1",
          "stop-color": "#8247E5"
        })]
      })), jsxs("linearGradient", Object.assign({
        id: "paint4_linear_3808_9309",
        x1: "87.4086",
        y1: "-2.61534",
        x2: "72.8677",
        y2: "7.38912",
        gradientUnits: "userSpaceOnUse"
      }, {
        children: [jsx("stop", {
          "stop-color": "#FF94A6"
        }), jsx("stop", {
          offset: "0.32",
          "stop-color": "#E03DC1"
        }), jsx("stop", {
          offset: "1",
          "stop-color": "#8247E5"
        })]
      })), jsxs("linearGradient", Object.assign({
        id: "paint5_linear_3808_9309",
        x1: "86.678",
        y1: "-3.67671",
        x2: "72.1427",
        y2: "6.32344",
        gradientUnits: "userSpaceOnUse"
      }, {
        children: [jsx("stop", {
          "stop-color": "#FF94A6"
        }), jsx("stop", {
          offset: "0.32",
          "stop-color": "#E03DC1"
        }), jsx("stop", {
          offset: "1",
          "stop-color": "#8247E5"
        })]
      }))]
    })]
  }));
};

const HandWaveSvg = ({
  fill
}) => {
  return jsx("svg", Object.assign({
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: fill !== null && fill !== void 0 ? fill : "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: jsx("path", {
      fill: "current",
      d: "M21.5035 10.1562L19.5504 6.76758C19.318 6.37006 18.9893 6.03742 18.5945 5.8003C18.1998 5.56318 17.7517 5.42921 17.2916 5.41073C16.8315 5.39225 16.3742 5.48985 15.9617 5.69454C15.5492 5.89923 15.1948 6.20444 14.9313 6.58203L13.2418 3.65234C12.8782 3.02407 12.2805 2.56547 11.5794 2.37695C10.8784 2.18843 10.1313 2.28535 9.50159 2.64648C9.10956 2.87792 8.77818 3.19925 8.53479 3.58398C8.21364 3.29612 7.82874 3.08861 7.41175 2.97852C7.06616 2.88129 6.7044 2.85539 6.34848 2.9024C5.99256 2.9494 5.64993 3.06833 5.34143 3.25195C5.02972 3.43014 4.75629 3.66818 4.53688 3.9524C4.31746 4.23661 4.15639 4.56139 4.06291 4.90806C3.96944 5.25473 3.94541 5.61646 3.9922 5.97246C4.03899 6.32845 4.15569 6.67168 4.33558 6.98242L4.66761 7.54883C4.26168 7.58348 3.8683 7.70682 3.51526 7.91016C2.89128 8.27535 2.43664 8.87204 2.25012 9.57056C2.0636 10.2691 2.16029 11.013 2.51917 11.6406L6.62073 18.75C7.17614 19.7442 7.92361 20.6181 8.8197 21.3209C9.71579 22.0237 10.7426 22.5413 11.8405 22.8438C12.9384 23.1463 14.0855 23.2275 15.2151 23.0828C16.3447 22.9381 17.4342 22.5704 18.4204 22.0009C19.4066 21.4314 20.2698 20.6716 20.9598 19.7657C21.6498 18.8597 22.1529 17.8256 22.4398 16.7235C22.7266 15.6214 22.7916 14.4733 22.6309 13.3459C22.4701 12.2185 22.0869 11.1343 21.5035 10.1562ZM20.8492 16.2695C20.6146 17.1624 20.2044 17.9997 19.6427 18.7324C19.0811 19.4651 18.3791 20.0786 17.5778 20.5371C15.9624 21.4687 14.0435 21.7215 12.242 21.24C10.4405 20.7585 8.90353 19.5821 7.96839 17.9688L3.86683 10.8594C3.71143 10.59 3.66939 10.27 3.74998 9.9696C3.83056 9.66925 4.02715 9.41321 4.29651 9.25781C4.56587 9.10241 4.88593 9.06038 5.18629 9.14096C5.48664 9.22154 5.74268 9.41814 5.89808 9.6875L8.04651 13.4082C8.09781 13.4973 8.16616 13.5755 8.24766 13.6382C8.32916 13.7009 8.42222 13.747 8.52152 13.7737C8.62081 13.8005 8.72441 13.8074 8.82638 13.7941C8.92836 13.7808 9.02672 13.7476 9.11585 13.6963C9.20498 13.645 9.28313 13.5766 9.34585 13.4951C9.40856 13.4136 9.45461 13.3206 9.48136 13.2213C9.50811 13.122 9.51504 13.0184 9.50176 12.9164C9.48847 12.8144 9.45523 12.7161 9.40393 12.627L7.2555 8.90625L5.693 6.20117C5.53771 5.93218 5.49556 5.61255 5.57581 5.3125C5.61458 5.16311 5.68296 5.02302 5.7769 4.90056C5.87085 4.7781 5.98843 4.67576 6.12268 4.59961C6.39167 4.44432 6.71131 4.40217 7.01136 4.48242C7.30987 4.56745 7.56479 4.763 7.72425 5.0293L8.49573 6.38672H8.5055L11.0446 10.7812C11.1105 10.9017 11.2082 11.0017 11.327 11.0706C11.4457 11.1395 11.5811 11.1745 11.7184 11.1719C11.8562 11.1746 11.9919 11.1373 12.109 11.0645C12.2872 10.9604 12.4171 10.7901 12.4701 10.5906C12.5232 10.3912 12.4952 10.1789 12.3922 10L9.85315 5.60547C9.69775 5.33611 9.65572 5.01605 9.7363 4.7157C9.81688 4.41535 10.0135 4.15931 10.2828 4.00391C10.5522 3.84851 10.8723 3.80647 11.1726 3.88706C11.473 3.96764 11.729 4.16423 11.8844 4.43359L14.8141 9.50195L15.4293 10.5762C14.5783 11.2844 14.0048 12.2705 13.81 13.3604C13.6153 14.4504 13.8118 15.5741 14.3649 16.5332C14.4765 16.6951 14.645 16.809 14.8369 16.8521C15.0288 16.8952 15.2298 16.8643 15.3999 16.7657C15.5701 16.6671 15.6967 16.5079 15.7547 16.32C15.8126 16.1321 15.7976 15.9293 15.7125 15.752C15.2984 15.0345 15.1862 14.1819 15.4004 13.3816C15.6147 12.5814 16.1379 11.899 16.8551 11.4844C16.9454 11.4329 17.0246 11.3641 17.0883 11.282C17.1519 11.1999 17.1988 11.1061 17.2262 11.0059C17.2739 10.8076 17.246 10.5987 17.1481 10.4199L16.1715 8.7207C16.0584 8.52014 16.007 8.2907 16.0235 8.06105C16.04 7.8314 16.1238 7.61171 16.2645 7.42941C16.4051 7.2471 16.5963 7.11027 16.8143 7.03598C17.0322 6.9617 17.2672 6.95326 17.4899 7.01172C17.6367 7.05051 17.7744 7.11792 17.895 7.2101C18.0157 7.30228 18.117 7.41739 18.193 7.54883L20.1461 10.9375C20.613 11.7344 20.9158 12.6167 21.0366 13.5325C21.1573 14.4482 21.0936 15.3788 20.8492 16.2695ZM8.56409 23.8867C8.49035 23.9889 8.39355 24.0722 8.28155 24.1299C8.16956 24.1875 8.04554 24.218 7.91956 24.2188C7.75987 24.2168 7.60404 24.1694 7.47034 24.082C6.04995 23.1006 4.86846 21.8123 4.01331 20.3125C3.95217 20.2238 3.91003 20.1234 3.88955 20.0176C3.86907 19.9119 3.87068 19.803 3.8943 19.6979C3.91791 19.5928 3.96301 19.4937 4.02675 19.4068C4.0905 19.32 4.17153 19.2473 4.26473 19.1932C4.35794 19.1392 4.46131 19.105 4.56836 19.0929C4.6754 19.0807 4.78381 19.0908 4.88676 19.1225C4.98971 19.1543 5.08498 19.207 5.16659 19.2773C5.2482 19.3477 5.31437 19.4341 5.36097 19.5312C6.10722 20.8296 7.13502 21.9442 8.36878 22.793C8.53855 22.913 8.65424 23.0951 8.69079 23.2998C8.72734 23.5045 8.68182 23.7153 8.56409 23.8867ZM16.4059 3.02734C16.4059 2.82014 16.4882 2.62143 16.6347 2.47492C16.7812 2.3284 16.9799 2.24609 17.1871 2.24609C18.2159 2.24741 19.2263 2.51867 20.1174 3.03277C21.0086 3.54688 21.7492 4.28582 22.2653 5.17578C22.3172 5.2646 22.3508 5.3629 22.3641 5.4649C22.3775 5.5669 22.3703 5.67053 22.343 5.76971C22.3157 5.86889 22.2688 5.96161 22.2052 6.04242C22.1415 6.12322 22.0623 6.19048 21.9723 6.24023C21.8557 6.31413 21.7197 6.35154 21.5817 6.34766C21.445 6.34717 21.3108 6.31085 21.1926 6.2423C21.0744 6.17376 20.9762 6.07539 20.9078 5.95703C20.5308 5.3039 19.9884 4.76152 19.3353 4.38439C18.6822 4.00727 17.9413 3.80868 17.1871 3.80859C16.9799 3.80859 16.7812 3.72628 16.6347 3.57977C16.4882 3.43326 16.4059 3.23454 16.4059 3.02734Z"
    })
  }));
};

const formatTime = timestamp => {
  let date;
  let timestamp1;

  if (typeof timestamp === "string") {
    timestamp1 = parseInt(timestamp);
  } else {
    timestamp1 = timestamp;
  }

  const time = new Date(timestamp1);

  if (!isNaN(time.getTime())) {
    const time1 = time.toLocaleTimeString('en-US');
    date = time1.slice(0, -6) + time1.slice(-2);
  }

  return date;
};

//   content: string;
//   name: string;
//   type: string;
//   size: number;
// };

const Chats = ({
  msg,
  caip10,
  messageBeingSent
}) => {
  var _a, _b, _c;

  const {
    theme
  } = useContext(SupportChatPropsContext);
  useContext(SupportChatMainStateContext);
  useState(false);
  useState('');
  const date = formatTime(msg.timestamp);
  return jsx(Container$c, {
    children: jsx(Fragment, {
      children: msg.messageType === 'Text' || ((_a = msg.message) === null || _a === void 0 ? void 0 : _a.type) ? jsx(Fragment, {
        children: msg.fromCAIP10 === caip10 || msg.from === caip10 ? jsx(MessageWrapper$1, Object.assign({
          align: "row-reverse"
        }, {
          children: jsxs(SenderMessage, Object.assign({
            theme: theme
          }, {
            children: [jsx(TextMessage, {
              children: msg.messageContent || ((_b = msg.message) === null || _b === void 0 ? void 0 : _b.content)
            }), msg.timestamp !== undefined && jsx(TimeStamp, {
              children: date
            })]
          }))
        })) : jsx(MessageWrapper$1, Object.assign({
          align: "row"
        }, {
          children: jsxs(ReceivedMessage, Object.assign({
            theme: theme
          }, {
            children: [(msg === null || msg === void 0 ? void 0 : msg.icon) && msg.icon, jsx(TextMessage, {
              children: ((_c = msg.message) === null || _c === void 0 ? void 0 : _c.content) || msg.messageContent
            }), msg.timestamp !== undefined && jsx(TimeStamp, {
              children: date
            })]
          }))
        }))
      }) : // : msg.messageType === 'Image' ? (
      //   <>
      //     {msg.fromCAIP10 === caip10 ? (
      //       <MessageWrapper height="138px" align="row-reverse">
      //         <SenderMessage color="transparent">
      //           <ImageMessage
      //             src={
      //               (JSON.parse(msg.messageContent) as FileMessageContent)
      //                 .content
      //             }
      //             onClick={() => {
      //               setShowImageModal(true);
      //               setImageUrl(
      //                 (JSON.parse(msg.messageContent) as FileMessageContent)
      //                   .content
      //               );
      //             }}
      //           />
      //         </SenderMessage>
      //       </MessageWrapper>
      //     ) : (
      //       <MessageWrapper height="138px" align="row">
      //         <ReceivedMessage color="transparent">
      //           <ImageMessage
      //             src={
      //               (JSON.parse(msg.messageContent) as FileMessageContent)
      //                 .content
      //             }
      //             onClick={() => {
      //               setShowImageModal(true);
      //               setImageUrl(
      //                 (JSON.parse(msg.messageContent) as FileMessageContent)
      //                   .content
      //               );
      //             }}
      //           />
      //         </ReceivedMessage>
      //       </MessageWrapper>
      //     )}
      //     {/* {showImageModal && (
      //     //   <Modal
      //     //     showImageModal={showImageModal}
      //     //     onClose={() => setShowImageModal(false)}
      //     //     src={imageUrl}
      //     //     time={msg.timestamp}
      //     //   />
      //     )} */}
      //   </>
      //  )
      // : msg.messageType === 'File' ? (
      //   <>
      //     {msg.fromCAIP10 === caip10 ? (
      //       <MessageWrapper align="row-reverse">
      //         <SenderMessage color="transparent">
      //           <FileMessage>
      //             {/* <Files msg={msg} /> */}
      //           </FileMessage>
      //         </SenderMessage>
      //       </MessageWrapper>
      //     ) : (
      //       <MessageWrapper align="row">
      //         <ReceivedMessage color="transparent">
      //           <FileMessage>
      //             {/* <Files msg={msg} /> */}
      //           </FileMessage>
      //         </ReceivedMessage>
      //       </MessageWrapper>
      //     )}
      //   </>
      // )
      null
    })
  });
}; //styles

const Container$c = /*#__PURE__*/styled.div.withConfig({
  displayName: "Chats__Container",
  componentId: "sc-bx8urd-0"
})(["display:flex;flex-direction:column;"]);
const TextMessage = /*#__PURE__*/styled.p.withConfig({
  displayName: "Chats__TextMessage",
  componentId: "sc-bx8urd-3"
})(["word-wrap:break-word;padding:0 45px 6px 4px;text-align:left;font-weight:400;font-size:15px;line-height:130%;margin:0px;"]);
const TimeStamp = /*#__PURE__*/styled.span.withConfig({
  displayName: "Chats__TimeStamp",
  componentId: "sc-bx8urd-4"
})(["min-width:44px;font-weight:400;font-size:13px;line-height:130%;display:flex;justify-content:flex-end;align-items:flex-end;position:absolute;right:10px;bottom:5px;"]);
const MessageWrapper$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "Chats__MessageWrapper",
  componentId: "sc-bx8urd-5"
})(["width:100%;min-height:", ";padding:0;margin-bottom:10px;display:flex;flex-direction:", ";"], props => props.height || '48px', props => props.align || 'row');
const ReceivedMessage = /*#__PURE__*/styled.div.withConfig({
  displayName: "Chats__ReceivedMessage",
  componentId: "sc-bx8urd-6"
})(["box-sizing:border-box;position:relative;max-width:250px;padding:", ";background:", ";text-align:left;border:", ";border-radius:2px 16px 16px 16px;display:flex;justify-content:space-between;align-items:center;color:", ";"], props => props.padding || '12px 15px 12px 11px', props => props.theme.bgColorPrimary || '#ffffff', props => props.theme.border, props => props.theme.textColorPrimary || '#000');
const SenderMessage = /*#__PURE__*/styled.div.withConfig({
  displayName: "Chats__SenderMessage",
  componentId: "sc-bx8urd-7"
})(["box-sizing:border-box;position:relative;max-width:250px;text-align:left;padding:", ";background:", ";border:", ";border-radius:16px 2px 16px 16px;display:flex;justify-content:flex-strt;align-items:center;color:", ";"], props => props.padding || '12px 15px 12px 11px', props => props.theme.bgColorSecondary || '#ca599b', props => props.theme.border, props => props.theme.textColorSecondary || '#ffffff');

const ErrorSvg = () => {
  return jsx("svg", Object.assign({
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: jsx("path", {
      d: "M13 0C10.4288 0 7.91543 0.762437 5.77759 2.1909C3.63975 3.61935 1.97351 5.64968 0.989572 8.02512C0.0056327 10.4006 -0.251811 13.0144 0.249797 15.5362C0.751405 18.0579 1.98953 20.3743 3.80762 22.1924C5.6257 24.0105 7.94208 25.2486 10.4638 25.7502C12.9856 26.2518 15.5995 25.9944 17.9749 25.0104C20.3503 24.0265 22.3807 22.3603 23.8091 20.2224C25.2376 18.0846 26 15.5712 26 13C25.9934 9.55422 24.6216 6.25145 22.1851 3.81491C19.7486 1.37837 16.4458 0.00660747 13 0ZM12 7C12 6.73478 12.1054 6.48043 12.2929 6.29289C12.4804 6.10536 12.7348 6 13 6C13.2652 6 13.5196 6.10536 13.7071 6.29289C13.8946 6.48043 14 6.73478 14 7V14C14 14.2652 13.8946 14.5196 13.7071 14.7071C13.5196 14.8946 13.2652 15 13 15C12.7348 15 12.4804 14.8946 12.2929 14.7071C12.1054 14.5196 12 14.2652 12 14V7ZM13 20C12.7033 20 12.4133 19.912 12.1667 19.7472C11.92 19.5824 11.7277 19.3481 11.6142 19.074C11.5007 18.7999 11.471 18.4983 11.5288 18.2074C11.5867 17.9164 11.7296 17.6491 11.9393 17.4393C12.1491 17.2296 12.4164 17.0867 12.7074 17.0288C12.9983 16.9709 13.2999 17.0007 13.574 17.1142C13.8481 17.2277 14.0824 17.42 14.2472 17.6666C14.412 17.9133 14.5 18.2033 14.5 18.5C14.5 18.8978 14.342 19.2794 14.0607 19.5607C13.7794 19.842 13.3978 20 13 20Z",
      fill: "#E93636"
    })
  }));
};

const Toaster = ({
  message,
  type
}) => {
  const {
    theme
  } = useContext(SupportChatPropsContext);
  const {
    setToastMessage
  } = useContext(SupportChatMainStateContext);
  useEffect(() => {
    const interval = setInterval(() => {
      onClose();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const onClose = () => {
    setToastMessage('');
  };

  return jsxs(Container$b, Object.assign({
    theme: theme,
    type: type
  }, {
    children: [type === 'error' && jsx(ErrorSvg, {}), jsx(Span$2, {
      children: message
    }), jsx("div", Object.assign({
      onClick: () => onClose()
    }, {
      children: jsx(CloseSvg, {})
    }))]
  }));
}; //styles

const Container$b = /*#__PURE__*/styled.div.withConfig({
  displayName: "Toaster__Container",
  componentId: "sc-1vzs537-0"
})(["display:flex;box-sizing:border-box;justify-content:space-between;", " box-shadow:0px 0px 10px rgba(0,0,0,0.1);border-radius:16px;padding:13px;margin-bottom:6px;"], props => props.type === 'error' && css(["background:linear-gradient( 90.15deg,#ff2070 -125.65%,#ff2d79 -125.63%,#fff9fb 42.81% );"]));
const Span$2 = /*#__PURE__*/styled.span.withConfig({
  displayName: "Toaster__Span",
  componentId: "sc-1vzs537-1"
})(["font-family:'Strawford';font-style:normal;font-weight:400;font-size:15px;line-height:140%;display:flex;align-items:center;color:#657795;padding:0 20px 0 5px;"]);

const Span$1 = /*#__PURE__*/styled.span.withConfig({
  displayName: "sharedStyling__Span",
  componentId: "sc-lhr0ta-0"
})(["align-self:", ";background:", ";border-radius:", ";border:", ";bottom:", ";color:", ";flex:", ";font-size:", ";font-weight:", ";left:", ";letter-spacing:", ";line-height:", ";cursor:", ";margin:", ";padding:", ";position:", ";right:", ";text-align:", ";text-transform:", ";top:", ";width:", ";z-index:", ";max-width:", ";"], props => props.alignSelf || 'auto', props => props.background || 'transparent', props => props.borderRadius || 'initial', props => props.border || 'initial', props => props.bottom || 'auto', props => props.color || 'inherit', props => props.flex || 'initial', props => props.fontSize || 'inherit', props => props.fontWeight || '300', props => props.left || 'auto', props => props.letterSpacing || 'inherit', props => props.lineHeight || 'initial', props => props.cursor || 'default', props => props.margin || '0px', props => props.padding || '0px', props => props.position || 'relative', props => props.right || 'auto', props => props.textAlign || 'center', props => props.textTransform || 'inherit', props => props.top || 'auto', props => props.width || 'auto', props => props.zIndex || 'auto', props => props.maxWidth || 'initial');
const Section = /*#__PURE__*/styled.div.withConfig({
  displayName: "sharedStyling__Section",
  componentId: "sc-lhr0ta-1"
})(["display:flex;cursor:", ";flex:", ";flex-direction:", ";gap:", ";align-items:", ";justify-content:", ";align-self:", ";margin:", ";min-height:", ";max-height:", ";max-width:", ";min-width:", ";height:", ";width:", ";overflow:", ";padding:", ";position:", ";background:", ";right:", ";top:", ";bottom:", ";left:", ";border-radius:", ";border-width:", ";border-color:", ";border-style:", ";z-index:", ";"], props => props.cursor || 'default', props => props.flex || 'default', props => props.flexDirection || 'row', props => props.gap || '0px', props => props.alignItems || 'center', props => props.justifyContent || 'center', props => props.alignSelf || 'stretch', props => props.margin || '0px', props => props.minHeight || 'auto', props => props.maxHeight || 'auto', props => props.maxWidth || 'auto', props => props.minWidth || 'auto', props => props.height || 'auto', props => props.width || 'auto', props => props.overflow || 'default', props => props.padding || '0px', props => props.position || 'relative', props => props.gradient ? props.gradient : props.background ? props.background : 'transparent' , props => props.right || 'auto', props => props.top || 'auto', props => props.bottom || 'auto', props => props.left || 'auto', props => props.borderRadius || '0px', props => props.borderWidth || 'initial', props => props.borderColor || 'initial', props => props.borderStyle || 'initial', props => props.zIndex || '0');
const Image$1 = /*#__PURE__*/styled.img.withConfig({
  displayName: "sharedStyling__Image",
  componentId: "sc-lhr0ta-2"
})(["display:", ";height:", ";max-height:", ";padding:", ";width:", ";margin:", ";vertical-align:", ";border-radius:", ";overflow:", ";cursor:", ";filter:", ";alt:", ";object-fit:", ";"], props => props.display || 'flex', props => props.height || 'auto', props => props.maxHeight || 'initial', props => props.padding || '0px', props => props.width || '100%', props => props.margin || '0px', props => props.verticalAlign || 'auto', props => props.borderRadius || 'initial', props => props.overflow || 'hidden', props => props.cursor || 'default', props => props.filter || 'none', props => props.alt || 'Image', props => props.objectFit || 'fill');
const Div = /*#__PURE__*/styled.div.withConfig({
  displayName: "sharedStyling__Div",
  componentId: "sc-lhr0ta-3"
})(["height:", ";width:", ";margin:", ";cursor:", ";align-self:", ";text-align:", ";"], props => props.height || 'auto', props => props.width || '100%', props => props.margin || '0px', props => props.cursor || 'default', props => props.alignSelf || 'center', props => props.textAlign || 'default');

const chatsFetchedLimit = 10;
const Modal$2 = () => {
  const [loading, setLoading] = useState(false);
  const [lastThreadHashFetched, setLastThreadHashFetched] = useState(null);
  const [wasLastListPresent, setWasLastListPresent] = useState(false);
  const {
    supportAddress,
    pushUser,
    env,
    account,
    signer,
    greetingMsg,
    theme
  } = useContext(SupportChatPropsContext);
  const {
    chats,
    setChatsSorted,
    connectedUser,
    setConnectedUser,
    toastMessage,
    toastType,
    setToastMessage,
    setToastType,
    socketData
  } = useContext(SupportChatMainStateContext);
  const listInnerRef = useChatScroll(0);
  const greetingMsgObject = {
    fromDID: walletToPCAIP10(supportAddress),
    toDID: walletToPCAIP10(account),
    fromCAIP10: walletToPCAIP10(supportAddress),
    toCAIP10: walletToPCAIP10(account),
    messageContent: greetingMsg,
    messageType: 'Text',
    signature: '',
    encType: '',
    encryptedSecret: '',
    sigType: '',
    link: null,
    timestamp: undefined,
    icon: jsx(HandWaveSvg, {
      fill: theme.btnColorPrimary
    })
  };

  const onScroll = () => {
    if (listInnerRef.current) {
      const {
        scrollTop
      } = listInnerRef.current;

      if (scrollTop === 0) {
        const content = listInnerRef.current;
        const curScrollPos = content.scrollTop;
        const oldScroll = content.scrollHeight - content.clientHeight;
        getChatCall();
        const newScroll = content.scrollHeight - content.clientHeight;
        content.scrollTop = curScrollPos + (newScroll - oldScroll);
      }
    }
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      if (listInnerRef.current) {
        listInnerRef.current.scrollTop = listInnerRef.current.scrollHeight + 100;
      }
    }, 0);
  };

  const getChatCall = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!connectedUser) return;
    if (wasLastListPresent && !lastThreadHashFetched) return;
    setLoading(true);
    const {
      chatsResponse,
      lastThreadHash,
      lastListPresent
    } = yield getChats({
      account,
      pushUser,
      // pgpPrivateKey: connectedUser.privateKey,
      supportAddress,
      threadHash: lastThreadHashFetched,
      limit: chatsFetchedLimit,
      env
    });
    setChatsSorted([...chats, ...chatsResponse]);
    setLastThreadHashFetched(lastThreadHash);
    setWasLastListPresent(lastListPresent);
    setLoading(false);
  });

  const connectUser = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;

    setLoading(true);

    try {
      if (!((_a = socketData.epnsSDKSocket) === null || _a === void 0 ? void 0 : _a.connected)) {
        (_b = socketData.epnsSDKSocket) === null || _b === void 0 ? void 0 : _b.connect();
      }

      const user = yield createUserIfNecessary({
        account,
        signer,
        env,
        pushUser
      });
      setConnectedUser(user);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setToastMessage(err === null || err === void 0 ? void 0 : err.message);
      setToastType('error');
    }
  });

  useEffect(() => {
    if (socketData.messagesSinceLastConnection) {
      const message = socketData.messagesSinceLastConnection;

      if (message) {
        setChatsSorted([...chats, message]);
      }
    }
  }, [socketData.messagesSinceLastConnection]);
  useEffect(() => {
    getChatCall();
  }, [connectedUser, env, account, signer, supportAddress, pushUser]);
  useEffect(() => {
    scrollToBottom();
  }, [connectedUser, env, account, socketData]);
  return jsxs(Container$a, Object.assign({
    theme: theme
  }, {
    children: [jsxs(HeaderSection, {
      children: [jsx(ModalHeader$1, {}), jsx(AddressInfo, {})]
    }), !connectedUser && jsx(Chats, {
      msg: greetingMsgObject,
      caip10: walletToPCAIP10(account),
      messageBeingSent: true
    }), loading && jsx(Spinner$1, {
      size: "40"
    }), jsx(ChatSection, Object.assign({
      ref: listInnerRef,
      onScroll: onScroll,
      theme: theme
    }, {
      children: connectedUser && chats.length ? chats.map((chat, index) => jsx(Chats, {
        msg: chat,
        caip10: walletToPCAIP10(account),
        messageBeingSent: true
      }, index)) : jsx(Fragment, {})
    })), !connectedUser && !loading && jsxs(ConnectSection, {
      children: [jsx(Button$5, Object.assign({
        onClick: () => connectUser(),
        theme: theme
      }, {
        children: "Connect"
      })), jsx(Span, {
        children: "Connect your wallet to continue"
      })]
    }), toastMessage && jsx(Toaster, {
      message: toastMessage,
      type: toastType
    }), jsxs(InputSection$1, {
      children: [connectedUser && jsx(ChatInput, {}), jsx(Div, Object.assign({
        height: "18px",
        width: "145px"
      }, {
        children: jsx(SponserPushIcon, {})
      }))]
    })]
  }));
}; //styles

const Container$a = /*#__PURE__*/styled.div.withConfig({
  displayName: "Modal__Container",
  componentId: "sc-s2d07d-0"
})(["display:flex;flex-direction:column;justify-content:space-between;box-sizing:border-box;background:", ";border:", ";box-shadow:0px 0px 5px rgba(0,0,0,0.07);border-radius:", ";height:585px;max-height:585px;width:350px;max-width:350px;padding:0 15px 9px 15px;"], props => props.theme.moduleColor, props => props.theme.border, props => props.theme.borderRadius);
const ChatSection = /*#__PURE__*/styled.div.withConfig({
  displayName: "Modal__ChatSection",
  componentId: "sc-s2d07d-1"
})(["height:350px;overflow:auto;padding:0 5px;&::-webkit-scrollbar{width:5px;}&::-webkit-scrollbar-track{border-radius:20px;margin:0 0 0 4px;}&::-webkit-scrollbar-thumb{background:", ";border-radius:20px;}"], props => props.theme.bgColorSecondary);
const ConnectSection = /*#__PURE__*/styled.div.withConfig({
  displayName: "Modal__ConnectSection",
  componentId: "sc-s2d07d-2"
})(["display:flex;flex-direction:column;margin-bottom:30%;"]);
const Button$5 = /*#__PURE__*/styled.button.withConfig({
  displayName: "Modal__Button",
  componentId: "sc-s2d07d-3"
})(["background:", ";border-radius:15px;align-self:center;padding:11px 36px;border:none;font-weight:500;font-size:17px;line-height:150%;display:flex;align-items:center;text-align:center;letter-spacing:-0.019em;color:", ";margin-bottom:10px;cursor:pointer;"], props => props.theme.btnColorPrimary, props => props.theme.textColorSecondary);
const HeaderSection = /*#__PURE__*/styled.div.withConfig({
  displayName: "Modal__HeaderSection",
  componentId: "sc-s2d07d-4"
})([""]);
const InputSection$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "Modal__InputSection",
  componentId: "sc-s2d07d-5"
})(["display:flex;flex-direction:column;"]);
const Span = /*#__PURE__*/styled.span.withConfig({
  displayName: "Modal__Span",
  componentId: "sc-s2d07d-7"
})(["font-weight:400;font-size:15px;line-height:140%;display:flex;text-align:center;justify-content:center;margin-bottom:30%;color:#657795;"]);

const Chat = ({
  account: _account = null,
  signer: _signer = null,
  supportAddress,
  greetingMsg: _greetingMsg = Constants.DEFAULT_GREETING_MSG,
  modalTitle: _modalTitle = Constants.DEFAULT_TITLE,
  theme: _theme = Object.assign({}, lightTheme$2),
  apiKey: _apiKey = '',
  env: _env = Constants.ENV.PROD
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [connectedUser, setConnectedUser] = useState(null);
  const [messageBeingSent, setMessageBeingSent] = useState(false);
  const [message, setMessage] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState();
  const [chats, setChats] = useState([]);
  const [accountadd, setAccountadd] = useState(_account);
  const [pushUser, setPushUser] = useState(null);

  const setChatsSorted = chats => {
    const chatsWithNumericTimestamps = chats.map(item => Object.assign(Object.assign({}, item), {
      timestamp: typeof item.timestamp === 'string' ? parseInt(item.timestamp) : item.timestamp
    }));
    const uniqueChats = [...new Map(chatsWithNumericTimestamps.map(item => [item.timestamp, item])).values()];
    uniqueChats.sort((a, b) => {
      return a.timestamp > b.timestamp ? 1 : -1;
    });
    setChats(uniqueChats);
  };

  const socketData = useSDKSocket({
    account: accountadd,
    env: _env,
    apiKey: _apiKey,
    pushUser: pushUser,
    supportAddress,
    signer: _signer
  });
  const chatPropsData = {
    account: accountadd,
    signer: _signer,
    pushUser,
    supportAddress,
    greetingMsg: _greetingMsg,
    modalTitle: _modalTitle,
    theme: Object.assign(Object.assign({}, lightTheme$2), _theme),
    apiKey: _apiKey,
    env: _env
  };
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      if (_signer) {
        if (!_account) {
          const address = yield getAddressFromSigner(_signer);
          setAccountadd(address);
        } else {
          setAccountadd(_account);
        }
      }
    }))();
  }, [_signer]);
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      if (Object.keys(_signer || {}).length && accountadd) {
        const pushUser = yield PushAPI$1.initialize(_signer, {
          env: _env,
          account: accountadd
        });
        setPushUser(pushUser);
      }
    }))();
  }, [_signer, accountadd]);
  useEffect(() => {
    setChats([]);
    setConnectedUser(null);
  }, [_account, supportAddress]);
  const chatMainStateData = {
    isModalOpen,
    socketData,
    setIsModalOpen,
    connectedUser,
    setConnectedUser,
    messageBeingSent,
    setMessageBeingSent,
    setToastMessage,
    setToastType,
    message,
    setMessage,
    chats,
    setChatsSorted,
    toastMessage,
    toastType
  };
  return jsx(Container$9, {
    children: jsx(SupportChatPropsContext.Provider, Object.assign({
      value: chatPropsData
    }, {
      children: jsxs(SupportChatMainStateContext.Provider, Object.assign({
        value: chatMainStateData
      }, {
        children: [!isModalOpen && jsx(Button$4, Object.assign({
          bgColor: _theme.btnColorPrimary,
          onClick: () => handleOnChatIconClick({
            isModalOpen,
            setIsModalOpen
          })
        }, {
          children: jsx(Div, Object.assign({
            cursor: 'pointer'
          }, {
            children: jsx(ChatIcon, {})
          }))
        })), isModalOpen && jsx(Modal$2, {})]
      }))
    }))
  });
}; //styles

const Container$9 = /*#__PURE__*/styled.div.withConfig({
  displayName: "Chat__Container",
  componentId: "sc-7lciwu-0"
})(["font-family:'Strawford';flex:1;display:flex;position:fixed;bottom:0;right:0;width:fit-content;margin:0 3rem 2rem 0;align-items:center;justify-content:center;"]);
const Button$4 = /*#__PURE__*/styled.button.withConfig({
  displayName: "Chat__Button",
  componentId: "sc-7lciwu-1"
})(["background:", ";border:none;cursor:pointer;border-radius:18px;padding:16.5px 16.5px 13px 18.5px;"], props => props.bgColor);

const MaximizeIcon = () => {
  return jsx("svg", Object.assign({
    width: "12",
    height: "14",
    viewBox: "0 0 12 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: jsx("path", {
      d: "M1.4 13.4L0 12L6 6L12 12L10.6 13.4L6 8.825L1.4 13.4ZM1.4 7.4L0 6L6 0L12 6L10.6 7.4L6 2.825L1.4 7.4Z",
      fill: "#62626A"
    })
  }));
};

const NewChatIcon = ({
  stroke,
  fill
}) => {
  return jsx("svg", Object.assign({
    width: "19",
    height: "17",
    viewBox: "0 0 19 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: jsx("path", {
      d: "M0 17V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H14C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2V7.075C15.8333 7.04167 15.6667 7.02083 15.5 7.0125C15.3333 7.00417 15.1667 7 15 7C14.8333 7 14.6667 7.00417 14.5 7.0125C14.3333 7.02083 14.1667 7.04167 14 7.075V2H2V12H9.075C9.04167 12.1667 9.02083 12.3333 9.0125 12.5C9.00417 12.6667 9 12.8333 9 13C9 13.1667 9.00417 13.3333 9.0125 13.5C9.02083 13.6667 9.04167 13.8333 9.075 14H3L0 17ZM4 6H12V4H4V6ZM4 10H9V8H4V10ZM14 17V14H11V12H14V9H16V12H19V14H16V17H14Z",
      fill: "#62626A"
    })
  }));
};

const BackIcon = () => {
  return jsxs("svg", Object.assign({
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsx("path", {
      d: "M27 16H5",
      stroke: "#657795",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), jsx("path", {
      d: "M14 7L5 16L14 25",
      stroke: "#657795",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })]
  }));
};

const Spinner = ({
  size: _size = 42,
  color: _color = '#000'
}) => {
  return jsx(SpinLoader, Object.assign({
    width: `${_size}px`
  }, {
    children: jsx(SpinnerSvg, {
      color: _color
    })
  }));
}; //styles

const spinAnimation = /*#__PURE__*/keyframes(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const SpinLoader = /*#__PURE__*/styled.div.withConfig({
  displayName: "Spinner__SpinLoader",
  componentId: "sc-skkbw8-0"
})(["display:flex;flex:initial;align-self:center;width:", ";animation-name:", ";animation-duration:2500ms;animation-iteration-count:infinite;animation-timing-function:linear;"], props => props.width, spinAnimation);

const Tooltip = ({
  children,
  content,
  direction,
  delay
}) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return jsxs(TooltipWrapper // When to show the tooltip
  , Object.assign({
    // When to show the tooltip
    onMouseEnter: showTip,
    onMouseLeave: hideTip
  }, {
    children: [children, active && jsx(TooltipContent, Object.assign({
      className: `${direction || 'top'}`
    }, {
      children: content
    }))]
  }));
}; //styles

/* Wrapping */

const TooltipWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "Tooltip__TooltipWrapper",
  componentId: "sc-ksqm3c-0"
})(["display:inline-block;position:relative;z-index:1;"]);
/* Absolute positioning */

const TooltipContent = /*#__PURE__*/styled.div.withConfig({
  displayName: "Tooltip__TooltipContent",
  componentId: "sc-ksqm3c-1"
})(["position:absolute;border-radius:4px;left:50%;transform:translateX(-50%);padding:7px;color:#fff;background:#000;font-size:13px;font-family:sans-serif;line-height:1;z-index:100;white-space:nowrap;&::before{content:' ';left:50%;border:solid transparent;height:0;width:0;position:absolute;pointer-events:none;border-width:6px;margin-left:calc(6px * -1);}&.top{top:calc(30px * -1);&::before{top:100%;border-top-color:#000;}}&.right{left:calc(100% + 10px);top:50%;transform:translateX(0) translateY(-50%);&::before{left:calc(6px * -1);top:50%;transform:translateX(0) translateY(-50%);border-right-color:#000;}}&.bottom{bottom:calc(30px * -1);&::before{bottom:100%;border-bottom-color:#000;}}&.bottom-right{bottom:calc(30px * -1);transform:translateX(-32%) translateY(5%);&::before{bottom:100%;border-bottom-color:#000;left:10%;}}&.left{left:auto;right:calc(100% + 10px);top:50%;transform:translateX(0);&::before{left:auto;right:calc(6px * -2);top:50%;transform:translateX(0) translateY(-50%);border-left-color:#000;}}"]);

const Message = ({
  messageContent,
  messageType
}) => {
  const isMobile = useDeviceWidthCheck(425);
  const digitsToDisplay = isMobile ? 27 : 48;
  return messageType === 'Text' ? jsx(Span$1, Object.assign({
    textAlign: "left",
    fontWeight: "400",
    fontSize: "16px",
    color: "#62626A",
    cursor: "pointer"
  }, {
    children: shortenText(messageContent, digitsToDisplay)
  })) : messageType === 'Image' ? jsxs(Span$1, Object.assign({
    textAlign: "left",
    fontWeight: "400",
    fontSize: "16px",
    color: "#62626A",
    cursor: "pointer"
  }, {
    children: [jsx("i", {
      className: "fa fa-picture-o",
      "aria-hidden": "true"
    }), " Image"]
  })) : messageType === 'File' ? jsxs(Span$1, Object.assign({
    textAlign: "left",
    fontWeight: "400",
    fontSize: "16px",
    color: "#62626A",
    cursor: "pointer"
  }, {
    children: [jsx("i", {
      className: "fa fa-file",
      "aria-hidden": "true"
    }), " File"]
  })) : messageType === 'GIF' || messageType === 'MediaEmbed' ? jsxs(Span$1, Object.assign({
    textAlign: "left",
    fontWeight: "400",
    fontSize: "16px",
    color: "#62626A",
    cursor: "pointer"
  }, {
    children: [jsx("i", {
      className: "fa fa-picture-o",
      "aria-hidden": "true"
    }), " Media"]
  })) : null;
};

const ChatSnap = ({
  chat,
  id,
  modalOpen
}) => {
  var _a, _b, _c, _d, _e, _f;

  const {
    setSelectedChatId,
    web3NameList
  } = useContext(ChatMainStateContext);
  const {
    env
  } = useContext(ChatAndNotificationPropsContext);
  const isMobile = useDeviceWidthCheck(425);
  const digitsToDisplay = (chat === null || chat === void 0 ? void 0 : chat.name) ? isMobile ? 15 : 30 : isMobile ? 6 : 8;
  useResolveWeb3Name(chat === null || chat === void 0 ? void 0 : chat.did, env); //shift to helper

  const walletLowercase = (_a = pCAIP10ToWallet(chat === null || chat === void 0 ? void 0 : chat.did)) === null || _a === void 0 ? void 0 : _a.toLowerCase();
  const checksumWallet = walletLowercase ? ethers.utils.getAddress(walletLowercase) : null;
  const web3Name = checksumWallet ? web3NameList[checksumWallet.toLowerCase()] : null;

  const handleOnClick = () => {
    setSelectedChatId(id);
    setData({
      chatId: id,
      value: chat
    });
  };

  const open = modalOpen === undefined ? true : modalOpen;
  return jsxs(Container$8, Object.assign({
    justifyContent: "flex-start",
    padding: open ? '15px 15px' : ' 0px ',
    onClick: () => handleOnClick(),
    active: open,
    gap: "18px",
    cursor: "pointer"
  }, {
    children: [jsx(Image$1, {
      src: chat.profilePicture,
      alt: "profile picture",
      width: "36px",
      height: "36px",
      borderRadius: "100%",
      cursor: "pointer"
    }), jsxs(Section, Object.assign({
      flexDirection: "column",
      flex: "2"
    }, {
      children: [jsxs(Section, Object.assign({
        gap: open ? '8px' : ' 2px ',
        justifyContent: "space-between",
        cursor: "pointer"
      }, {
        children: [jsx(NameSpan, Object.assign({
          fontWeight: "700",
          color: "#000",
          cursor: "pointer"
        }, {
          children: (chat === null || chat === void 0 ? void 0 : chat.name) ? shortenText(chat === null || chat === void 0 ? void 0 : chat.name, digitsToDisplay, false) : web3Name !== null && web3Name !== void 0 ? web3Name : shortenText((_b = chat === null || chat === void 0 ? void 0 : chat.did) === null || _b === void 0 ? void 0 : _b.split(':')[1], digitsToDisplay, true)
        })), open && jsx(Span$1, Object.assign({
          fontWeight: "400",
          fontSize: "12px",
          color: "#62626A",
          cursor: "pointer"
        }, {
          children: ((_c = chat === null || chat === void 0 ? void 0 : chat.msg) === null || _c === void 0 ? void 0 : _c.timestamp) ? dateToFromNowDaily((_d = chat === null || chat === void 0 ? void 0 : chat.msg) === null || _d === void 0 ? void 0 : _d.timestamp) : ''
        }))]
      })), jsxs(Section, Object.assign({
        gap: "12px",
        cursor: "pointer",
        justifyContent: "space-between"
      }, {
        children: [jsx(Message, {
          messageContent: (_e = chat === null || chat === void 0 ? void 0 : chat.msg) === null || _e === void 0 ? void 0 : _e.messageContent,
          messageType: (_f = chat === null || chat === void 0 ? void 0 : chat.msg) === null || _f === void 0 ? void 0 : _f.messageType
        }), open && checkIfUnread(id, chat) && jsx(UnreadChats //  numberOfUnreadMessages="3"
        , {})]
      }))]
    }))]
  }));
}; //styles

const Container$8 = /*#__PURE__*/styled(Section).withConfig({
  displayName: "ChatSnap__Container",
  componentId: "sc-r4kigr-0"
})(["border-bottom:", ";cursor:", ";", ";"], props => props.active && '1px dashed #ededee', props => props.active && 'pointer', props => props.active && css(["&:hover{background:#f4f5fa;border-radius:10px;}"]));
const NameSpan = /*#__PURE__*/styled(Span$1).withConfig({
  displayName: "ChatSnap__NameSpan",
  componentId: "sc-r4kigr-1"
})(["font-size:16px;@media ", "{font-size:14px;}"], device.mobileL);

const UnreadChats = ({
  // numberOfUnreadMessages,
  background,
  color
}) => {
  return jsx(Span$1, {
    fontWeight: "600",
    fontSize: "12px",
    color: color !== null && color !== void 0 ? color : '#fff',
    background: background !== null && background !== void 0 ? background : '#0D67FE',
    padding: "8px",
    borderRadius: "100%"
  });
};
const MessageBoxHeader = () => {
  var _a, _b;

  const {
    activeTab,
    setActiveTab,
    setActiveSubTab,
    activeSubTab
  } = useContext(ChatAndNotificationMainContext);
  const {
    selectedChatId,
    chatsFeed,
    requestsFeed,
    web3NameList,
    searchedChats,
    setSearchedChats,
    setSelectedChatId
  } = useContext(ChatMainStateContext);
  const {
    env
  } = useContext(ChatAndNotificationPropsContext);
  const {
    spamNotifsFeed
  } = useContext(NotificationMainStateContext);
  const selectedChat = chatsFeed[selectedChatId] || requestsFeed[selectedChatId] || (Object.keys(searchedChats || {}).length ? searchedChats[selectedChatId] : null);
  useResolveWeb3Name(selectedChat === null || selectedChat === void 0 ? void 0 : selectedChat.did, env);
  const walletLowercase = (_a = pCAIP10ToWallet(selectedChat === null || selectedChat === void 0 ? void 0 : selectedChat.did)) === null || _a === void 0 ? void 0 : _a.toLowerCase();
  const checksumWallet = walletLowercase ? ethers.utils.getAddress(walletLowercase) : null;
  const web3Name = checksumWallet ? web3NameList[checksumWallet.toLowerCase()] : null;

  const handleBack = () => {
    if (activeSubTab && (activeSubTab === PUSH_SUB_TABS.REQUESTS && Object.keys(requestsFeed || {}).length || activeSubTab === PUSH_SUB_TABS.SPAM && Object.keys(spamNotifsFeed || {}).length)) {
      setActiveSubTab(PUSH_SUB_TABS[activeSubTab]);
    } else {
      setActiveTab(PUSH_TABS[activeTab]);
    }

    if (activeSubTab === PUSH_SUB_TABS.REQUESTS || !activeSubTab) {
      setSelectedChatId(null);
      setSearchedChats(null);
    }
  };

  return selectedChat ? jsxs(Section, Object.assign({
    gap: "12px",
    padding: '23px 2px'
  }, {
    children: [jsx(Div, Object.assign({
      width: "16px",
      height: "16px",
      cursor: "pointer",
      onClick: () => handleBack()
    }, {
      children: jsx(BackIcon, {})
    })), jsxs(Section, Object.assign({
      gap: "8px"
    }, {
      children: [jsx(Image$1, {
        src: selectedChat.profilePicture,
        alt: "profile picture",
        width: "24px",
        height: "24px",
        borderRadius: "100%"
      }), jsx(Tooltip, Object.assign({
        content: pCAIP10ToWallet(selectedChat === null || selectedChat === void 0 ? void 0 : selectedChat.did),
        direction: "bottom-right"
      }, {
        children: jsxs(Span$1, Object.assign({
          fontWeight: "700",
          fontSize: "16px",
          cursor: "pointer"
        }, {
          children: [' ', (selectedChat === null || selectedChat === void 0 ? void 0 : selectedChat.name) ? shortenText(selectedChat === null || selectedChat === void 0 ? void 0 : selectedChat.name, 30) : web3Name !== null && web3Name !== void 0 ? web3Name : shortenText((_b = selectedChat === null || selectedChat === void 0 ? void 0 : selectedChat.did) === null || _b === void 0 ? void 0 : _b.split(':')[1], 20)]
        }))
      }))]
    }))]
  })) : null;
};
const SubTabHeader = () => {
  const {
    activeTab,
    setActiveTab,
    activeSubTab
  } = useContext(ChatAndNotificationMainContext);
  const {
    setSearchedChats,
    setSelectedChatId
  } = useContext(ChatMainStateContext);
  const {
    setSearchedNotifications
  } = useContext(NotificationMainStateContext);
  return jsxs(Section, Object.assign({
    gap: "12px",
    padding: '23px 2px'
  }, {
    children: [jsx(Div, Object.assign({
      width: "16px",
      height: "16px",
      cursor: "pointer",
      onClick: () => {
        setActiveTab(activeTab);

        if (activeSubTab === PUSH_SUB_TABS.REQUESTS) {
          setSearchedChats(null);
          setSelectedChatId(null);
        }

        if (activeSubTab === PUSH_SUB_TABS.SPAM) {
          setSearchedNotifications(null);
        }
      }
    }, {
      children: jsx(BackIcon, {})
    })), jsx(Span$1, Object.assign({
      fontWeight: "700",
      fontSize: "16px"
    }, {
      children: PushSubTabTitle[activeSubTab].title
    }))]
  }));
};
const MinimisedModalHeader = ({
  onMaximizeMinimizeToggle,
  modalOpen
}) => {
  const {
    newChat,
    setNewChat,
    setActiveTab,
    activeSubTab
  } = useContext(ChatAndNotificationMainContext);
  const {
    selectedChatId,
    chatsFeed,
    requestsFeed,
    setSearchedChats,
    setSelectedChatId,
    searchedChats
  } = useContext(ChatMainStateContext);

  const SnapMessageHeader = () => {
    const selectedChat = chatsFeed[selectedChatId] || requestsFeed[selectedChatId] || (Object.keys(searchedChats || {}).length ? searchedChats[selectedChatId] : null);
    return jsx(ChatSnap, {
      chat: selectedChat,
      id: selectedChatId,
      modalOpen: modalOpen
    });
  };

  const condition = selectedChatId && modalOpen || !selectedChatId && modalOpen && activeSubTab;
  const snapCondition = selectedChatId && !modalOpen;
  return jsxs(Container$7, Object.assign({
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${snapCondition ? '12px' : '0'} 0 `,
    borderWidth: `0 0 ${condition ? '1px' : '0'} 0 `,
    borderStyle: `none none ${condition ? 'dashed' : 'none'} none `,
    borderColor: `transparent transparent ${condition ? '#ededee' : 'transparent'}  transparent`
  }, {
    children: [selectedChatId && !!(Object.keys(chatsFeed || {}).length || Object.keys(requestsFeed || {}).length || Object.keys(searchedChats || {}).length) && modalOpen && jsx(MessageBoxHeader, {}), selectedChatId && !modalOpen && jsx(SnapMessageHeader, {}), !selectedChatId && modalOpen && activeSubTab && jsx(SubTabHeader, {}), (!selectedChatId && modalOpen && !activeSubTab || !modalOpen && !selectedChatId) && jsx(Section, Object.assign({
      gap: "4px"
    }, {
      children: jsx(Span$1, Object.assign({
        fontWeight: "700",
        fontSize: "18px",
        padding: '24px 2px',
        cursor: !modalOpen ? 'default' : 'pointer',
        onClick: () => {
          setActiveTab(PUSH_TABS.CHATS);
          setSearchedChats(null);
          setSelectedChatId(null);
        }
      }, {
        children: newChat ? 'New Message' : 'Messages'
      }))
    })), jsxs(Section, Object.assign({
      gap: "20px"
    }, {
      children: [(!selectedChatId && modalOpen && !activeSubTab && !newChat || !modalOpen && !selectedChatId) && jsx(Div, Object.assign({
        width: "20px",
        height: "20px",
        cursor: "pointer",
        onClick: () => {
          if (modalOpen) {
            setNewChat(true);
          }
        }
      }, {
        children: jsx(NewChatIcon, {})
      })), jsx(Div, Object.assign({
        width: "12px",
        height: "13.4px",
        cursor: "pointer",
        // alignSelf={selectedChatId && !modalOpen ? 'center' : 'baseline'}
        margin: "0 0 10px 0",
        alignSelf: 'center',
        onClick: onMaximizeMinimizeToggle
      }, {
        children: modalOpen ? jsx(MinimizeIcon, {}) : jsx(MaximizeIcon, {})
      }))]
    }))]
  }));
}; //styles

const Container$7 = /*#__PURE__*/styled(Section).withConfig({
  displayName: "MinimisedModalHeader__Container",
  componentId: "sc-1nzg6zv-0"
})(["box-sizing:border-box;"]);

const EmojiIcon = ({
  color: _color = "#494D5F"
}) => {
  return jsxs("svg", Object.assign({
    width: "25",
    height: "25",
    viewBox: "0 0 32 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsx("path", {
      d: "M16 28.7407C22.6274 28.7407 28 23.2686 28 16.5185C28 9.76831 22.6274 4.29623 16 4.29623C9.37258 4.29623 4 9.76831 4 16.5185C4 23.2686 9.37258 28.7407 16 28.7407Z",
      stroke: _color,
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), jsx("path", {
      d: "M11.5 15.5C12.3284 15.5 13 14.8159 13 13.9722C13 13.1284 12.3284 12.4444 11.5 12.4444C10.6716 12.4444 10 13.1284 10 13.9722C10 14.8159 10.6716 15.5 11.5 15.5Z",
      fill: _color
    }), jsx("path", {
      d: "M20.5 15.5C21.3284 15.5 22 14.8159 22 13.9722C22 13.1284 21.3284 12.4444 20.5 12.4444C19.6716 12.4444 19 13.1284 19 13.9722C19 14.8159 19.6716 15.5 20.5 15.5Z",
      fill: _color
    }), jsx("path", {
      d: "M21.2 19.574C20.6714 20.5016 19.9128 21.2716 19.0003 21.8068C18.0877 22.342 17.0531 22.6237 16 22.6237C14.947 22.6237 13.9124 22.342 12.9998 21.8068C12.0873 21.2716 11.3287 20.5016 10.8 19.574",
      stroke: _color,
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })]
  }));
};

const SendIcon = () => {
  return jsx("svg", Object.assign({
    width: "19",
    height: "17",
    viewBox: "0 0 19 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: jsx("path", {
      d: "M0 16.5V0.5L19 8.5L0 16.5ZM2 13.5L13.85 8.5L2 3.5V7L8 8.5L2 10V13.5ZM2 13.5V3.5V10V13.5Z",
      fill: "#0D67FE"
    })
  }));
};

const GifIcon = () => {
  return jsxs("svg", Object.assign({
    width: "36",
    height: "24",
    viewBox: "0 0 36 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsx("rect", {
      y: "0.800049",
      width: "35.2",
      height: "22.4",
      rx: "8",
      fill: "#F5F2FF"
    }), jsx("path", {
      d: "M12.5055 15.944C12.0703 15.944 11.6559 15.8672 11.2623 15.7136C10.8687 15.5568 10.5199 15.3264 10.2159 15.0224C9.91507 14.7184 9.67667 14.3424 9.50067 13.8944C9.32787 13.4464 9.24147 12.9296 9.24147 12.344C9.24147 11.5792 9.38707 10.9296 9.67827 10.3952C9.97267 9.85765 10.3663 9.44805 10.8591 9.16645C11.3551 8.88485 11.9039 8.74405 12.5055 8.74405C13.3951 8.74405 14.0943 8.95045 14.6031 9.36325C15.1119 9.77605 15.4527 10.36 15.6255 11.1152L14.2911 11.3072C14.1663 10.904 13.9615 10.5824 13.6767 10.3424C13.3951 10.0992 13.0335 9.97605 12.5919 9.97285C12.1535 9.96645 11.7887 10.0608 11.4975 10.256C11.2063 10.4512 10.9871 10.728 10.8399 11.0864C10.6959 11.4448 10.6239 11.864 10.6239 12.344C10.6239 12.824 10.6959 13.24 10.8399 13.592C10.9871 13.944 11.2063 14.2176 11.4975 14.4128C11.7887 14.608 12.1535 14.7088 12.5919 14.7152C12.8895 14.7216 13.1583 14.6704 13.3983 14.5616C13.6415 14.4528 13.8463 14.2816 14.0127 14.048C14.1791 13.8144 14.2975 13.5152 14.3679 13.1504H13.2735V12.1424H15.7599C15.7663 12.184 15.7711 12.2576 15.7743 12.3632C15.7775 12.4688 15.7791 12.5296 15.7791 12.5456C15.7791 13.208 15.6447 13.7952 15.3759 14.3072C15.1071 14.8192 14.7279 15.2208 14.2383 15.512C13.7487 15.8 13.1711 15.944 12.5055 15.944ZM17.5091 15.8V8.88805H18.8147V15.8H17.5091ZM20.9257 15.8V8.88805H25.1497V10.1936H22.2313V11.6912H24.5737V12.9968H22.2313V15.8H20.9257Z",
      fill: "#494D5F"
    })]
  }));
};

const AttachmentIcon = ({
  color: _color = "#494D5F"
}) => {
  return jsx("svg", Object.assign({
    width: "23",
    height: "27",
    viewBox: "0 0 23 27",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: jsx("path", {
      d: "M15.9927 7.38877L5.58023 18.1723C5.23551 18.5598 5.0503 19.0675 5.06293 19.5902C5.07557 20.113 5.28509 20.6108 5.64811 20.9805C6.01114 21.3503 6.49986 21.5637 7.0131 21.5765C7.52634 21.5894 8.02478 21.4008 8.40523 21.0497L20.8177 8.22905C21.5072 7.45406 21.8776 6.43872 21.8523 5.39323C21.8271 4.34775 21.408 3.3522 20.682 2.6127C19.9559 1.87321 18.9785 1.44641 17.952 1.42067C16.9255 1.39493 15.9286 1.77222 15.1677 2.47442L2.75523 15.295C1.63138 16.4397 1 17.9922 1 19.611C1 21.2298 1.63138 22.7823 2.75523 23.927C3.87908 25.0716 5.40336 25.7147 6.99273 25.7147C8.5821 25.7147 10.1064 25.0716 11.2302 23.927L21.4927 13.4999",
      stroke: _color,
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })
  }));
};

const requestLimit = 30;
const page = 1;
const Typebar = ({
  scrollToBottom
}) => {
  const [typedMessage, setTypedMessage] = useState('');
  const [showEmojis, setShowEmojis] = useState(false);
  const [gifOpen, setGifOpen] = useState(false);
  const modalRef = useRef(null);
  const fileUploadInputRef = React__default.useRef(null);
  const {
    selectedChatId,
    chatsFeed,
    setSearchedChats,
    requestsFeed
  } = useContext(ChatMainStateContext);
  const {
    newChat,
    setNewChat
  } = useContext(ChatAndNotificationMainContext);
  const {
    sendMessage,
    loading
  } = usePushSendMessage();
  const [filesUploading, setFileUploading] = useState(false);
  const {
    fetchRequests
  } = useFetchRequests();

  const onChangeTypedMessage = val => {
    if (val.trim() !== '') setTypedMessage(val);
  };

  const isMobile = useDeviceWidthCheck(425);
  useClickAway(modalRef, () => {
    setGifOpen(false);
    setShowEmojis(false);
  });

  const sendPushMessage = (content, type) => __awaiter(void 0, void 0, void 0, function* () {
    try {
      yield sendMessage({
        message: content,
        receiver: selectedChatId,
        messageType: type
      });
      scrollToBottom();
      if (chatsFeed[selectedChatId] || requestsFeed[selectedChatId]) setSearchedChats(null);
      if (newChat) setNewChat(false);
      if (!chatsFeed[selectedChatId]) fetchRequests({
        page,
        requestLimit
      });
    } catch (error) {
      console.log(error); //handle error
    }
  });

  const sendGIF = emojiObject => __awaiter(void 0, void 0, void 0, function* () {
    sendPushMessage(emojiObject.url, 'GIF');
    setGifOpen(false);
  });

  const sendTextMsg = () => __awaiter(void 0, void 0, void 0, function* () {
    if (typedMessage.trim() !== '') {
      yield sendPushMessage(typedMessage, 'Text');
      setTypedMessage('');
    }
  });

  const addEmoji = (emojiData, event) => {
    setTypedMessage(typedMessage + emojiData.emoji);
    setShowEmojis(false);
  };

  const handleUploadFile = () => {
    if (fileUploadInputRef.current) {
      fileUploadInputRef.current.click();
    }
  };

  const uploadFile = e => __awaiter(void 0, void 0, void 0, function* () {
    if (!(e.target instanceof HTMLInputElement)) {
      return;
    }

    if (!e.target.files) {
      return;
    }

    if (e.target && e.target.files && e.target.files.length) {
      const file = e.target.files[0];

      if (file) {
        try {
          const TWO_MB = 1024 * 1024 * 2;

          if (file.size > TWO_MB) {
            console.log('Files larger than 2mb is now allowed');
            throw new Error('Files larger than 2mb is now allowed');
          }

          setFileUploading(true);
          const messageType = file.type.startsWith('image') ? 'Image' : 'File';
          const reader = new FileReader();
          let fileMessageContent;
          reader.readAsDataURL(file);

          reader.onloadend = e => __awaiter(void 0, void 0, void 0, function* () {
            fileMessageContent = {
              content: e.target.result,
              name: file.name,
              type: file.type,
              size: file.size
            };
            sendPushMessage(JSON.stringify(fileMessageContent), messageType);
          });
        } catch (err) {
          console.log(err);
        } finally {
          setFileUploading(false);
        }
      }
    }
  }); //for fixing the typebar height


  const textAreaRef = useRef(null);
  useEffect(() => {
    var _a, _b;

    if ((_a = textAreaRef === null || textAreaRef === void 0 ? void 0 : textAreaRef.current) === null || _a === void 0 ? void 0 : _a.style) {
      textAreaRef.current.style.height = 25 + 'px';
      const scrollHeight = (_b = textAreaRef.current) === null || _b === void 0 ? void 0 : _b.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + 'px';
    }
  }, [textAreaRef, typedMessage]);
  return jsx(Container$6, {
    children: jsxs(TypebarSection$1, Object.assign({
      borderColor: "#DDDDDF",
      borderStyle: "solid",
      borderWidth: "1px",
      borderRadius: "8px",
      padding: "12px 17px 15px 17px",
      background: "#fff",
      alignItems: "center",
      justifyContent: "space-between"
    }, {
      children: [jsxs(Section, Object.assign({
        gap: "8px",
        flex: "1"
      }, {
        children: [jsx(Div, Object.assign({
          width: "20px",
          cursor: "pointer",
          height: "20px",
          alignSelf: "end",
          onClick: () => setShowEmojis(!showEmojis)
        }, {
          children: jsx(EmojiIcon, {})
        })), showEmojis && jsx(Section, Object.assign({
          ref: modalRef,
          position: "absolute",
          bottom: "3.5rem",
          left: "3.5rem"
        }, {
          children: jsx(EmojiPicker, {
            onEmojiClick: addEmoji,
            width: isMobile ? 260 : 320,
            height: 370
          })
        })), jsx(MultiLineInput$1, {
          onKeyDown: event => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault();
              sendTextMsg();
            }
          },
          placeholder: "Type your message...",
          onChange: e => onChangeTypedMessage(e.target.value),
          value: typedMessage,
          ref: textAreaRef,
          rows: 1
        })]
      })), jsxs(SendSection$1, {
        children: [jsx(Section, Object.assign({
          width: "34px",
          height: "24px",
          cursor: "pointer",
          alignSelf: "end",
          onClick: () => setGifOpen(!gifOpen)
        }, {
          children: jsx(GifIcon, {})
        })), gifOpen && jsx(Section, Object.assign({
          position: "absolute",
          bottom: "3.5rem",
          right: isMobile ? '5rem' : '8rem',
          ref: modalRef
        }, {
          children: jsx(GifPicker, {
            onGifClick: sendGIF,
            width: isMobile ? 260 : 320,
            height: 370,
            tenorApiKey: String(PUBLIC_GOOGLE_TOKEN)
          })
        })), jsx(Section, Object.assign({
          onClick: handleUploadFile
        }, {
          children: !filesUploading && jsxs(Fragment, {
            children: [jsx(Section, Object.assign({
              width: "17px",
              height: "24px",
              cursor: "pointer",
              alignSelf: "end",
              onClick: () => setNewChat(true)
            }, {
              children: jsx(AttachmentIcon, {})
            })), jsx(FileInput$2, {
              type: "file",
              ref: fileUploadInputRef,
              onChange: e => uploadFile(e)
            })]
          })
        })), !(loading || filesUploading) && jsx(Section, Object.assign({
          cursor: "pointer",
          alignSelf: "end",
          height: "24px",
          onClick: () => sendTextMsg()
        }, {
          children: jsx(SendIcon, {})
        })), (loading || filesUploading) && jsx(Section, Object.assign({
          alignSelf: "end",
          height: "24px"
        }, {
          children: jsx(Spinner, {
            size: "22"
          })
        }))]
      })]
    }))
  });
}; //styles

const Container$6 = /*#__PURE__*/styled.div.withConfig({
  displayName: "Typebar__Container",
  componentId: "sc-cu9bt3-0"
})(["width:100%;border-top:1px solid #dddddf;overflow:hidden;padding:15px 0px;"]);
const TypebarSection$1 = /*#__PURE__*/styled(Section).withConfig({
  displayName: "Typebar__TypebarSection",
  componentId: "sc-cu9bt3-1"
})(["gap:10px;@media ", "{gap:0px;}"], device.mobileL);
const SendSection$1 = /*#__PURE__*/styled(Section).withConfig({
  displayName: "Typebar__SendSection",
  componentId: "sc-cu9bt3-2"
})(["gap:11.5px;@media ", "{gap:7.5px;}"], device.mobileL);
const MultiLineInput$1 = /*#__PURE__*/styled.textarea.withConfig({
  displayName: "Typebar__MultiLineInput",
  componentId: "sc-cu9bt3-3"
})(["font-family:inherit;font-weight:400;transform:translateY(3px);font-size:16px;outline:none;overflow-y:auto;box-sizing:border-box;border:none;color:#000;resize:none;flex:1;padding-right:5px;align-self:end;@media ", "{font-size:14px;}&&::-webkit-scrollbar{width:4px;padding-right:0px;}::-webkit-scrollbar-thumb{background:rgb(181 181 186);border-radius:10px;height:50px;}::placeholder{color:#000;transform:translateY(1px);@media ", "{font-size:14px;}}min-height:25px;max-height:80px;word-break:break-word;"], device.mobileL, device.mobileL);
const FileInput$2 = /*#__PURE__*/styled.input.withConfig({
  displayName: "Typebar__FileInput",
  componentId: "sc-cu9bt3-4"
})(["display:none;"]);

const EncryptionIcon = ({
  size
}) => {
  return jsx("svg", Object.assign({
    width: size !== null && size !== void 0 ? size : '25',
    height: size !== null && size !== void 0 ? size : '25',
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: jsx("g", Object.assign({
      id: "lock_FILL0_wght500_GRAD0_opsz48 1"
    }, {
      children: jsx("path", {
        id: "Vector",
        d: "M4.62836 18.4476C4.23803 18.4476 3.90388 18.3086 3.62592 18.0307C3.34796 17.7527 3.20898 17.4186 3.20898 17.0283V8.07625C3.20898 7.68455 3.34796 7.34923 3.62592 7.07029C3.90388 6.79135 4.23803 6.65188 4.62836 6.65188H5.98707V4.76148C5.98707 3.64529 6.3778 2.69489 7.15926 1.91029C7.94073 1.1257 8.88805 0.733398 10.0012 0.733398C11.1144 0.733398 12.0613 1.1257 12.8421 1.91029C13.6229 2.69489 14.0133 3.64529 14.0133 4.76148V6.65188H15.372C15.7637 6.65188 16.099 6.79135 16.378 7.07029C16.6569 7.34923 16.7964 7.68455 16.7964 8.07625V17.0283C16.7964 17.4186 16.6569 17.7527 16.378 18.0307C16.099 18.3086 15.7637 18.4476 15.372 18.4476H4.62836ZM4.62836 17.0283H15.372V8.07625H4.62836V17.0283ZM10.0037 14.1564C10.4458 14.1564 10.8231 14.0034 11.1356 13.6974C11.4481 13.3914 11.6044 13.0236 11.6044 12.5939C11.6044 12.1773 11.4469 11.7988 11.1321 11.4585C10.8173 11.1182 10.4388 10.9481 9.99669 10.9481C9.55458 10.9481 9.17728 11.1182 8.86478 11.4585C8.55228 11.7988 8.39603 12.1807 8.39603 12.6043C8.39603 13.0279 8.55344 13.3925 8.86828 13.6981C9.18311 14.0036 9.56158 14.1564 10.0037 14.1564ZM7.40644 6.65188H12.5939V4.76263C12.5939 4.03502 12.3429 3.41897 11.8408 2.91448C11.3387 2.41001 10.7263 2.15777 10.0038 2.15777C9.28129 2.15777 8.66776 2.41001 8.16323 2.91448C7.65871 3.41897 7.40644 4.03502 7.40644 4.76263V6.65188Z",
        fill: "#62626A"
      })
    }))
  }));
};

const NoEncryptionIcon = ({
  size
}) => {
  return jsx("svg", Object.assign({
    width: size !== null && size !== void 0 ? size : "21",
    height: size !== null && size !== void 0 ? size : "20",
    viewBox: "0 0 21 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: jsx("g", Object.assign({
      id: "no_encryption"
    }, {
      children: jsx("path", {
        id: "Vector",
        d: "M17.1668 14.2913L15.5002 12.6247V8.33301H11.2085L9.54183 6.66634H13.0002V4.99967C13.0002 4.30523 12.7606 3.71495 12.2814 3.22884C11.8022 2.74273 11.2154 2.49967 10.521 2.49967C9.82655 2.49967 9.24322 2.73926 8.771 3.21842C8.29877 3.69759 8.06266 4.29134 8.06266 4.99967V5.18717L6.54183 3.66634C6.84738 2.81912 7.36822 2.13509 8.10433 1.61426C8.84044 1.09342 9.646 0.833008 10.521 0.833008C11.6738 0.833008 12.6529 1.23926 13.4585 2.05176C14.2641 2.86426 14.6668 3.8469 14.6668 4.99967V6.66634H15.5002C15.9585 6.66634 16.3509 6.82954 16.6772 7.15592C17.0036 7.48231 17.1668 7.87467 17.1668 8.33301V14.2913ZM17.5835 19.4163L16.2918 18.1247C16.1391 18.1941 16.0002 18.2462 15.8752 18.2809C15.7502 18.3156 15.6252 18.333 15.5002 18.333H5.50016C5.04183 18.333 4.64947 18.1698 4.32308 17.8434C3.99669 17.517 3.8335 17.1247 3.8335 16.6663V8.33301C3.8335 7.98579 3.93419 7.66634 4.13558 7.37467C4.33697 7.08301 4.59738 6.87467 4.91683 6.74967L1.0835 2.91634L2.25016 1.74967L18.7502 18.2497L17.5835 19.4163ZM14.7918 16.6663L11.7293 13.5622C11.5766 13.715 11.3995 13.833 11.1981 13.9163C10.9967 13.9997 10.7779 14.0413 10.5418 14.0413C10.0835 14.0413 9.69113 13.8781 9.36475 13.5518C9.03836 13.2254 8.87516 12.833 8.87516 12.3747C8.87516 12.1386 8.91683 11.9198 9.00016 11.7184C9.0835 11.517 9.20155 11.34 9.35433 11.1872L6.4585 8.33301H5.50016V16.6663H14.7918Z",
        fill: "#62626A"
      })
    }))
  }));
};

const CHATS_FETCH_LIMIT = 15;
const EncryptionMessageContent$1 = {
  ENCRYPTED: {
    IconComponent: jsx(EncryptionIcon, {}),
    text: 'Messages are end-to-end encrypted. Only users in this chat can view or listen to them.'
  },
  NO_ENCRYPTED: {
    IconComponent: jsx(NoEncryptionIcon, {}),
    text: 'Messages are not encrypted until chat request is accepted.'
  }
};

const EncryptionMessage$1 = ({
  id
}) => {
  return jsxs(Section, Object.assign({
    padding: "12px",
    gap: "8px",
    borderRadius: "12px",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "var(--neutral-neutral-100, #EDEDEE)",
    background: "var(--neutral-neutral-050, #F5F5F5)",
    margin: "10px 10px 0px"
  }, {
    children: [EncryptionMessageContent$1[id].IconComponent, jsx(Span$1, Object.assign({
      fontSize: "13px",
      color: "var(--neutral-neutral-600, #62626A)",
      fontWeight: "600",
      textAlign: "left"
    }, {
      children: EncryptionMessageContent$1[id].text
    }))]
  }));
};

const FileCard$1 = ({
  chat,
  position
}) => {
  const fileContent = JSON.parse(chat.messageContent);
  const name = fileContent.name;
  const content = fileContent.content;
  const size = fileContent.size;
  return jsxs(Section, Object.assign({
    alignSelf: position ? 'end' : 'start',
    maxWidth: "80%",
    margin: "5px 0",
    background: "#343536",
    borderRadius: "8px",
    justifyContent: "space-around",
    padding: "10px 13px",
    gap: "15px"
  }, {
    children: [jsx(Image$1, {
      src: FILE_ICON(name.split('.').slice(-1)[0]),
      alt: "extension icon",
      width: "20px",
      height: "20px"
    }), jsxs(Section, Object.assign({
      flexDirection: "column",
      gap: "5px"
    }, {
      children: [jsx(Span$1, Object.assign({
        color: "#fff",
        fontSize: "15px"
      }, {
        children: shortenText(name, 11)
      })), jsx(Span$1, Object.assign({
        color: "#fff",
        fontSize: "12px"
      }, {
        children: formatFileSize(size)
      }))]
    })), jsx(FileDownloadIconAnchor$1, Object.assign({
      href: content,
      target: "_blank",
      rel: "noopener noreferrer",
      download: true
    }, {
      children: jsx(FileDownloadIcon$1, {
        className: "fa fa-download",
        "aria-hidden": "true"
      })
    }))]
  }));
};

const ImageCard$1 = ({
  chat,
  position
}) => {
  return jsx(Section, Object.assign({
    alignSelf: position ? 'end' : 'start',
    maxWidth: "65%",
    margin: "5px 0"
  }, {
    children: jsx(Image$1, {
      src: JSON.parse(chat.messageContent).content,
      alt: "",
      width: "100%",
      borderRadius: position ? '12px 12px 0px 12px' : '12px 12px 12px 0px'
    })
  }));
};

const GIFCard$1 = ({
  chat,
  position
}) => {
  return jsx(Section, Object.assign({
    alignSelf: position ? 'end' : 'start',
    maxWidth: "65%",
    margin: "5px 0"
  }, {
    children: jsx(Image$1, {
      src: chat.messageContent,
      alt: "",
      width: "100%",
      borderRadius: position ? '12px 12px 0px 12px' : '12px 12px 12px 0px'
    })
  }));
};

const MessageCard$1 = ({
  chat,
  position
}) => {
  const time = moment(chat.timestamp).format('hh:mm a');
  return jsxs(Section, Object.assign({
    gap: "5px",
    background: position ? '#0D67FE' : '#EDEDEE',
    padding: "8px 12px",
    borderRadius: position ? '12px 12px 0px 12px' : '12px 12px 12px 0px',
    margin: "5px 0",
    alignSelf: position ? 'end' : 'start',
    justifyContent: "start",
    maxWidth: "80%",
    minWidth: "71px",
    position: "relative"
  }, {
    children: [' ', jsx(Section, Object.assign({
      flexDirection: "column",
      padding: "5px 0 15px 0"
    }, {
      children: chat.messageContent.split('\n').map(str => jsx(Span$1, Object.assign({
        alignSelf: "start",
        textAlign: "left",
        fontSize: "16px",
        fontWeight: "400",
        color: position ? '#fff' : '#000'
      }, {
        children: str
      }), Math.random().toString()))
    })), jsx(Span$1, Object.assign({
      position: "absolute",
      fontSize: "12px",
      fontWeight: "400",
      color: position ? '#A9C8FF' : '#62626A',
      bottom: "6px",
      right: "10px"
    }, {
      children: time
    }))]
  }));
};

const Messages = ({
  chat
}) => {
  const {
    account
  } = useContext(ChatAndNotificationPropsContext);
  const position = pCAIP10ToWallet(chat.fromDID).toLowerCase() !== account.toLowerCase() ? 0 : 1;

  if (chat.messageType === 'GIF') {
    return jsx(GIFCard$1, {
      chat: chat,
      position: position
    });
  }

  if (chat.messageType === 'Image') {
    return jsx(ImageCard$1, {
      chat: chat,
      position: position
    });
  }

  if (chat.messageType === 'File') {
    return jsx(FileCard$1, {
      chat: chat,
      position: position
    });
  }

  return jsx(MessageCard$1, {
    chat: chat,
    position: position
  });
};

const MessageBox = () => {
  useContext(ChatAndNotificationMainContext);
  const {
    selectedChatId,
    chatsFeed,
    requestsFeed,
    chats,
    setRequestsFeed,
    setChatFeed,
    setSearchedChats,
    searchedChats,
    setSelectedChatId
  } = useContext(ChatMainStateContext);
  const {
    account,
    env,
    decryptedPgpPvtKey
  } = useContext(ChatAndNotificationPropsContext);
  const selectedChat = chatsFeed[selectedChatId] || requestsFeed[selectedChatId] || (searchedChats ? searchedChats[selectedChatId] : null);
  const requestFeedids = Object.keys(requestsFeed);
  const selectedMessages = chats.get(selectedChatId);
  const dates = new Set();
  const listInnerRef = useRef(null);
  const bottomRef = useRef(null);
  const {
    historyMessages,
    loading
  } = useFetchHistoryMessages();
  const {
    approveChatRequest,
    loading: approveLoading
  } = useApproveChatRequest$1();

  const renderDate = ({
    chat,
    dateNum
  }) => {
    const timestampDate = dateToFromNowDaily(chat.timestamp);
    dates.add(dateNum);
    return jsx(Span$1, Object.assign({
      margin: "15px 0",
      fontSize: "14px",
      fontWeight: "600",
      color: "#AFAFB6",
      textAlign: "center"
    }, {
      children: timestampDate
    }));
  };

  const scrollToBottom = behavior => {
    var _a;

    (_a = bottomRef === null || bottomRef === void 0 ? void 0 : bottomRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView(!behavior ? true : {
      behavior: 'smooth'
    });
  };

  const onScroll = () => __awaiter(void 0, void 0, void 0, function* () {
    if (listInnerRef.current) {
      const {
        scrollTop
      } = listInnerRef.current;

      if (scrollTop === 0) {
        const content = listInnerRef.current;
        const curScrollPos = content.scrollTop;
        const oldScroll = content.scrollHeight - content.clientHeight;
        yield getChatCall();
        const newScroll = content.scrollHeight - content.clientHeight;
        content.scrollTop = curScrollPos + (newScroll - oldScroll);
      }
    }
  });

  useEffect(() => {
    scrollToBottom();
  }, [selectedChatId]);
  useEffect(() => {
    if (selectedChatId && selectedMessages && (selectedMessages === null || selectedMessages === void 0 ? void 0 : selectedMessages.messages.length) // selectedMessages?.messages.length <= CHATS_FETCH_LIMIT
    ) {
      scrollToBottom(null);
    }
  }, [chats.get(selectedChatId)]); //optimise it

  const getChatCall = () => __awaiter(void 0, void 0, void 0, function* () {
    let threadHash = null;

    if (!selectedMessages && (selectedChat === null || selectedChat === void 0 ? void 0 : selectedChat.threadhash)) {
      threadHash = selectedChat === null || selectedChat === void 0 ? void 0 : selectedChat.threadhash;
    } else if (chats.size && (selectedMessages === null || selectedMessages === void 0 ? void 0 : selectedMessages.lastThreadHash)) {
      threadHash = selectedMessages === null || selectedMessages === void 0 ? void 0 : selectedMessages.lastThreadHash;
    }

    if (threadHash) {
      yield historyMessages({
        limit: CHATS_FETCH_LIMIT,
        threadHash
      });
    }
  });

  useEffect(() => {
    // // only for user who has requests but hasn't created user in push chat yet
    // if (selectedMessages?.messages.length) {
    //   return;
    // }
    (function () {
      return __awaiter(this, void 0, void 0, function* () {
        yield getChatCall();
      });
    })();
  }, [selectedChatId]);

  const handleApproveChatRequest = () => __awaiter(void 0, void 0, void 0, function* () {
    if (selectedChatId) {
      try {
        if (!decryptedPgpPvtKey) {
          return;
        }

        const response = yield approveChatRequest({
          senderAddress: selectedChatId
        });

        if (response) {
          const updatedRequestsfeed = Object.assign({}, requestsFeed);
          const selectedRequest = updatedRequestsfeed[selectedChatId];
          delete updatedRequestsfeed[selectedChatId];
          setChatFeed(selectedChatId, selectedRequest);
          setSearchedChats(null);
          setRequestsFeed(updatedRequestsfeed);
        }
      } catch (error_) {
        console.log(error_.message);
      }
    } else {
      return;
    }
  });

  return jsxs(Section, Object.assign({
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    width: "100%",
    overflow: "hidden",
    height: "100%"
  }, {
    children: [jsx(Container$5, Object.assign({
      width: "100%",
      height: !requestFeedids.includes(selectedChatId) ? '85%' : '97%',
      justifyContent: "start",
      flexDirection: "column",
      alignItems: "start",
      borderWidth: "0 0 1px 0",
      borderStyle: "none none none none",
      overflow: "hidden scroll",
      ref: listInnerRef,
      onScroll: onScroll,
      borderColor: "transparent transparent #dddddf transparent"
    }, {
      children: jsxs(Fragment, {
        children: [selectedChat && !selectedChat.publicKey ? jsx(EncryptionMessage$1, {
          id: 'NO_ENCRYPTED'
        }) : jsx(EncryptionMessage$1, {
          id: 'ENCRYPTED'
        }), loading ? jsx(Spinner, {}) : '', selectedMessages ? jsxs(MessageListCard, Object.assign({
          flexDirection: "column",
          justifyContent: "start",
          // width="100%"
          padding: "0 2px 15px 2px"
        }, {
          children: [selectedMessages === null || selectedMessages === void 0 ? void 0 : selectedMessages.messages.map((chat, index) => {
            const dateNum = moment(chat.timestamp).format('L');
            return jsxs(Fragment, {
              children: [dates.has(dateNum) ? null : renderDate({
                chat,
                dateNum
              }), jsx(Messages, {
                chat: chat
              }, index)]
            });
          }), requestFeedids.includes(selectedChatId) && jsxs(Section, Object.assign({
            gap: "5px",
            background: "#EDEDEE",
            padding: "8px 12px",
            margin: "5px 0",
            borderRadius: "12px 12px 12px 0px",
            alignSelf: "start",
            justifyContent: "start",
            maxWidth: "68%",
            minWidth: "15%",
            position: "relative",
            flexDirection: "column"
          }, {
            children: [jsx(Span$1, Object.assign({
              alignSelf: "center",
              textAlign: "left",
              fontSize: "16px",
              fontWeight: "400",
              color: "#000",
              lineHeight: "24px"
            }, {
              children: "Please accept the Push Chat request to continue the conversation"
            })), jsx(Button$3, Object.assign({
              onClick: () => !approveLoading ? handleApproveChatRequest() : null
            }, {
              children: approveLoading ? jsx(Spinner, {
                color: "#fff",
                size: "24"
              }) : 'Accept'
            }))]
          })), jsx("div", {
            ref: bottomRef
          })]
        })) : null]
      })
    })), !requestFeedids.includes(selectedChatId) && jsx(Typebar, {
      scrollToBottom: scrollToBottom
    })]
  }));
}; //styles

const MessageListCard = /*#__PURE__*/styled(Section).withConfig({
  displayName: "MessageBox__MessageListCard",
  componentId: "sc-7co3u0-0"
})([""]);
const Container$5 = /*#__PURE__*/styled(Section).withConfig({
  displayName: "MessageBox__Container",
  componentId: "sc-7co3u0-1"
})(["&::-webkit-scrollbar-thumb{background:rgb(181 181 186);border-radius:10px;}&::-webkit-scrollbar{width:5px;}"]);
const FileDownloadIcon$1 = /*#__PURE__*/styled.i.withConfig({
  displayName: "MessageBox__FileDownloadIcon",
  componentId: "sc-7co3u0-2"
})(["color:#575757;"]);
const FileDownloadIconAnchor$1 = /*#__PURE__*/styled.a.withConfig({
  displayName: "MessageBox__FileDownloadIconAnchor",
  componentId: "sc-7co3u0-3"
})(["font-size:20px;"]);
const Button$3 = /*#__PURE__*/styled.button.withConfig({
  displayName: "MessageBox__Button",
  componentId: "sc-7co3u0-4"
})(["border:none;cursor:pointer;border-radius:8px;margin:15px 0px 8px 0px;background:#0D67FE;color:white;width:100%;font-size:16px;font-weight:600;line-height:24px;max-height:48px;min-height:48px;padding:0px 24px;display:flex;justify-content:center;align-items:center;"]);

const ChatList = ({
  chatsFeed
}) => {
  useContext(ChatAndNotificationMainContext);
  return jsx(Fragment, {
    children: !!Object.keys(chatsFeed || {}).length && Object.keys(chatsFeed).map(id => jsx(ChatSnap, {
      chat: chatsFeed[id],
      id: id
    }, id))
  });
};

const RequestsFeedList = () => {
  const {
    requestsFeed,
    setRequestsFeed,
    finishedFetchingRequests,
    setFinishedFetchingRequests
  } = useContext(ChatMainStateContext);
  const pageRef = useRef(null);
  const [page, setPage] = useState(1);
  const [paginateLoading, setPaginateLoading] = useState(false);
  const isInViewport1 = useIsInViewport(pageRef, '1px');
  const {
    decryptedPgpPvtKey,
    env
  } = useContext(ChatAndNotificationPropsContext);
  const {
    fetchRequests,
    loading
  } = useFetchRequests();

  const fetchRequestList = () => __awaiter(void 0, void 0, void 0, function* () {
    const feeds = yield fetchRequests({
      page,
      requestLimit: requestLimit$1
    });
    const firstFeeds = Object.assign({}, feeds);
    setRequestsFeed(firstFeeds);
  });

  useEffect(() => {
    if (Object.keys(requestsFeed).length) {
      return;
    }

    if (decryptedPgpPvtKey) {
      fetchRequestList();
    }
  }, [fetchRequests, decryptedPgpPvtKey, env, page]);
  useEffect(() => {
    if (!isInViewport1 || loading || finishedFetchingRequests // ||
    // Object.keys(requestsFeed).length < requestLimit
    ) {
      return;
    }

    const newPage = page + 1;
    setPage(newPage); // eslint-disable-next-line no-use-before-define

    callFeeds(newPage);
  }, [isInViewport1]);

  const callFeeds = page => __awaiter(void 0, void 0, void 0, function* () {
    if (!decryptedPgpPvtKey) {
      return;
    }

    try {
      setPaginateLoading(true);
      const feeds = yield fetchRequests({
        page,
        requestLimit: requestLimit$1
      });
      if (!Object.keys(feeds || {}).length) setFinishedFetchingRequests(true);
      const newFeed = Object.assign(Object.assign({}, requestsFeed), feeds);
      setRequestsFeed(newFeed);
    } catch (error) {
      console.log(error);
      setPaginateLoading(false);
    } finally {
      setPaginateLoading(false);
    }
  });

  return jsxs(ChatListCard$2, Object.assign({
    overflow: "hidden auto",
    justifyContent: "start",
    width: '100%',
    flexDirection: "column"
  }, {
    children: [(!loading || paginateLoading) && Object.keys(requestsFeed || {}).length ? jsx(ChatList, {
      chatsFeed: requestsFeed
    }) : !paginateLoading && loading && jsx(Section, Object.assign({
      margin: "10px  0"
    }, {
      children: jsx(Spinner, {})
    })), !loading && Object.keys(requestsFeed).length === 0 && jsx(Span$1, Object.assign({
      margin: '20px 0 0 0'
    }, {
      children: "No Requests yet"
    })), jsx("div", {
      ref: pageRef,
      style: {
        padding: '1px'
      }
    }), paginateLoading && jsx(Section, Object.assign({
      margin: "10px 0"
    }, {
      children: jsx(Spinner, {})
    }))]
  }));
}; //styles

const ChatListCard$2 = /*#__PURE__*/styled(Section).withConfig({
  displayName: "RequestsFeedList__ChatListCard",
  componentId: "sc-50sva4-0"
})(["&::-webkit-scrollbar-thumb{background:rgb(181 181 186);border-radius:10px;}&::-webkit-scrollbar{width:5px;}"]);

const customTheme = Object.assign(Object.assign({}, lightTheme$1), {
  borderRadius: Object.assign(Object.assign({}, lightTheme$1.borderRadius), {
    modal: '12px'
  }),
  color: Object.assign(Object.assign({}, lightTheme$1.color), {
    channelNameText: '#62626A',
    notificationTitleText: '#000',
    notificationContentText: '#62626A',
    modalBorder: '#C8C8CB',
    timestamp: '#62626A'
  }),
  fontWeight: Object.assign(Object.assign({}, lightTheme$1.fontWeight), {
    channelNameText: 600,
    notificationTitleText: 600,
    notificationContentText: 500,
    timestamp: 400
  }),
  fontSize: Object.assign(Object.assign({}, lightTheme$1.fontSize), {
    channelNameText: '16px',
    notificationTitleText: '16px',
    notificationContentText: '16px',
    timestamp: '12px'
  }),
  modalDivider: 'none'
});
const NotificationFeedList = ({
  notificationFeeds
}) => {
  const {
    subscriptionStatus
  } = useContext(NotificationMainStateContext);
  const {
    onSubscribeToChannel
  } = useOnSubscribeToChannel();
  const {
    signer
  } = useContext(ChatAndNotificationPropsContext);

  const isSubscribedFn = channel => {
    return !!subscriptionStatus.get(channel);
  };

  return jsx(Fragment, {
    children: !!Object.keys(notificationFeeds || {}).length && Object.keys(notificationFeeds).map(id => jsx(NotificationItem, {
      notificationTitle: notificationFeeds[id].title,
      notificationBody: notificationFeeds[id].message,
      cta: notificationFeeds[id].cta,
      app: notificationFeeds[id].app,
      icon: notificationFeeds[id].icon,
      image: notificationFeeds[id].image,
      // theme={'light'}
      customTheme: customTheme,
      isSpam: !!signer && !subscriptionStatus.get(notificationFeeds[id].channel),
      subscribeFn: !!signer && !subscriptionStatus.get(notificationFeeds[id].channel) ? () => onSubscribeToChannel({
        channelAddress: notificationFeeds[id].channel
      }) : undefined,
      isSubscribedFn: !!signer && !subscriptionStatus.get(notificationFeeds[id].channel) ? () => __awaiter(void 0, void 0, void 0, function* () {
        return isSubscribedFn(notificationFeeds[id].channel);
      }) : undefined,
      chainName: notificationFeeds[id].blockchain,
      url: notificationFeeds[id].url
    }, id))
  });
};

const SpamNotificationFeedList = () => {
  const {
    spamNotifsFeed,
    setSpamNotifsFeed,
    finishedFetchingSpam,
    setFinishedFetchingSpam
  } = useContext(NotificationMainStateContext);
  const pageRef = useRef(null);
  const {
    account,
    env
  } = useContext(ChatAndNotificationPropsContext);
  const [page, setPage] = useState(1);
  const [paginateLoading, setPaginateLoading] = useState(false);
  const isInViewport1 = useIsInViewport(pageRef, '1px');
  const {
    fetchNotification,
    loading
  } = useFetchNotification();

  const fetchSpamNotificationList = () => __awaiter(void 0, void 0, void 0, function* () {
    const feeds = yield fetchNotification({
      page: 1,
      limit: notificationLimit,
      spam: true
    });

    if (feeds) {
      const firstFeeds = Object.assign({}, feeds);
      setSpamNotifsFeed(firstFeeds);
    }
  });

  useEffect(() => {
    if (Object.keys(spamNotifsFeed).length) {
      return;
    }

    fetchSpamNotificationList();
  }, [env, account]);
  useEffect(() => {
    if (!isInViewport1 || loading || finishedFetchingSpam || Object.keys(spamNotifsFeed).length < notificationLimit) {
      return;
    }

    const newPage = page + 1;
    setPage(newPage); // eslint-disable-next-line no-use-before-define

    callFeeds(newPage);
  }, [isInViewport1]);

  const callFeeds = page => __awaiter(void 0, void 0, void 0, function* () {
    if (!account) {
      return;
    }

    try {
      setPaginateLoading(true);
      const feeds = yield fetchNotification({
        page,
        limit: notificationLimit,
        spam: true
      });
      if (!Object.keys(feeds || {}).length) setFinishedFetchingSpam(true);
      const newFeed = Object.assign(Object.assign({}, spamNotifsFeed), feeds);
      setSpamNotifsFeed(newFeed);
    } catch (error) {
      console.log(error);
      setPaginateLoading(false);
    } finally {
      setPaginateLoading(false);
    }
  });

  return jsxs(SpamNotifListCard, Object.assign({
    overflow: "hidden auto",
    justifyContent: "start",
    flexDirection: "column",
    width: "100%",
    padding: "0 3px"
  }, {
    children: [(!loading || paginateLoading) && Object.keys(spamNotifsFeed || {}).length ? jsx(Div, {
      children: jsx(NotificationFeedList, {
        notificationFeeds: spamNotifsFeed
      })
    }) : !paginateLoading && loading && jsx(Section, Object.assign({
      margin: "10px 0"
    }, {
      children: jsx(Spinner, {})
    })), !loading && Object.keys(spamNotifsFeed).length === 0 && jsx(Span$1, Object.assign({
      margin: "20px 0 0 0"
    }, {
      children: "No messages from apps yet"
    })), jsx("div", {
      ref: pageRef,
      style: {
        padding: '1px'
      }
    }), paginateLoading && jsx(Section, Object.assign({
      margin: "10px  0"
    }, {
      children: jsx(Spinner, {})
    }))]
  }));
}; //styles

const SpamNotifListCard = /*#__PURE__*/styled(Section).withConfig({
  displayName: "SpamNotificationFeedList__SpamNotifListCard",
  componentId: "sc-78wpz2-0"
})(["&::-webkit-scrollbar-thumb{background:rgb(181 181 186);border-radius:10px;}&::-webkit-scrollbar{width:5px;}"]);

const SearchIcon = ({
  height,
  width
}) => {
  return jsx("svg", Object.assign({
    width: width ? width : '18',
    height: height ? height : '18',
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: jsx("path", {
      d: "M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z",
      fill: "#7A7A85"
    })
  }));
};

const CloseIcon = () => {
  return jsxs("svg", Object.assign({
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsx("path", {
      d: "M15.625 4.375L4.375 15.625",
      stroke: "#82828A",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), jsx("path", {
      d: "M15.0799 15.4442L4.375 4.375",
      stroke: "#82828A",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })]
  }));
};

const Search = ({
  feed,
  handleSearch,
  onSearchReset,
  placeholder
}) => {
  const [searchedText, setSearchedText] = useState('');
  const [loading, setLoading] = useState(false);

  const onChangeSearchText = val => {
    setSearchedText(val);
  };

  const {
    setSearchedChats
  } = useContext(ChatMainStateContext);
  const {
    newChat,
    setActiveTab
  } = useContext(ChatAndNotificationMainContext);
  React__default.useEffect(() => {
    setLoading(true);
    const getData = setTimeout(() => {
      onSearch();
      setLoading(false);
    }, 2000);
    return () => clearTimeout(getData);
  }, [searchedText]);

  const onSearch = () => {
    if (searchedText.trim() !== '') {
      handleSearch({
        searchedText,
        feed
      });
    } else {
      onSearchReset();
    }
  };

  return jsxs(Container$4, Object.assign({
    justifyContent: "space-between",
    margin: "4px 0",
    gap: "15px",
    alignItems: "center"
  }, {
    children: [newChat && jsx(Section, Object.assign({
      width: "auto",
      cursor: "pointer",
      onClick: () => {
        setSearchedChats(null);
        setActiveTab(PUSH_TABS.CHATS);
      }
    }, {
      children: jsx(BackIcon, {})
    })), jsxs(Section, Object.assign({
      width: "100%",
      background: "#ededee",
      padding: "8px 12px",
      borderRadius: "4px"
    }, {
      children: [jsx(Input$4, {
        type: "text",
        value: searchedText,
        onChange: e => onChangeSearchText(e.target.value),
        placeholder: placeholder,
        onKeyDown: event => {
          if (event.key === 'Enter') {
            onSearch();
          }
        }
      }), jsxs(Span$1, {
        children: [!loading && !searchedText && jsx(Div, Object.assign({
          cursor: "pointer",
          width: "17.49px",
          height: "17.49px",
          onClick: () => onSearch()
        }, {
          children: jsx(SearchIcon, {})
        })), !loading && searchedText && jsx(Div, Object.assign({
          cursor: "pointer",
          onClick: () => {
            setSearchedText('');
            onSearchReset();
          },
          width: "17.49px",
          height: "17.49px"
        }, {
          children: jsx(CloseIcon, {})
        })), loading && jsx(Spinner, {
          size: "17.49"
        })]
      })]
    }))]
  }));
}; //styles

const Container$4 = /*#__PURE__*/styled(Section).withConfig({
  displayName: "Search__Container",
  componentId: "sc-4t27cf-0"
})(["border-radius:4px;"]); //   background: #ededee;
//   border: none;
//   width: 90%;
//   &:focus {
//     outline: none;
//     background-origin: border;
//     background-clip: padding-box, border-box;
//   }
//   &::placeholder {
//     color: #7a7a85;
//   }
// `;
// const Image = styled.img`
//   vertical-align: middle;
//   cursor: pointer;
// `;
// const SubSection = styled(Section)`
//   background: #ffffff;
//   border: 1px solid #c8c8cb;
//   border-radius: 8px;
//   flex: 1;
//   padding: 10px 10px 10px 15px;
//   margin-left: 18px;
// `;

const Input$4 = /*#__PURE__*/styled.input.withConfig({
  displayName: "Search__Input",
  componentId: "sc-4t27cf-1"
})(["border:none;background:#ededee;width:100%;flex:1;margin-left:10px;font-style:normal;font-weight:400;font-size:16px;line-height:24px;&:focus{outline:none;background-origin:border;background-clip:padding-box,border-box;}&::placeholder{color:#62626a;}"]);

const NewMessage = ({
  stroke,
  fill
}) => {
  return jsx("svg", Object.assign({
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: jsx("path", {
      d: "M0 30V2C0 1.43333 0.191667 0.958333 0.575 0.575C0.958333 0.191667 1.43333 0 2 0H28C28.5667 0 29.0417 0.191667 29.425 0.575C29.8083 0.958333 30 1.43333 30 2V20C30 20.5667 29.8083 21.0417 29.425 21.425C29.0417 21.8083 28.5667 22 28 22H8L0 30ZM10 32C9.43333 32 8.95833 31.8083 8.575 31.425C8.19167 31.0417 8 30.5667 8 30V26H34V8H38C38.5667 8 39.0417 8.19167 39.425 8.575C39.8083 8.95833 40 9.43333 40 10V40L32 32H10ZM26 4H4V20.35L6.35 18H26V4Z",
      fill: "#62626A"
    })
  }));
};

const SidebarPlaceholderContent = {
  SEARCH: {
    title: 'No Results',
    subTitle: '',
    IconComponent: jsx(SearchIcon, {
      height: "40",
      width: "40"
    })
  },
  NEW_CHAT: {
    title: 'Start a new chat',
    subTitle: 'Start by searching for a domain or wallet address.',
    IconComponent: jsx(NewMessage, {})
  },
  NOTIFICATION: {
    title: 'No message from apps yest',
    subTitle: 'Keep an eye out for upcoming messages from the apps you connect with.',
    IconComponent: jsx(NewMessage, {})
  },
  CHAT: {
    title: 'Start your first chat',
    subTitle: 'Get started by messaging a friend.',
    IconComponent: jsx(NewMessage, {})
  }
};
const SidebarPlaceholder = ({
  id
}) => {
  return jsxs(Section, Object.assign({
    flexDirection: "column",
    margin: "77px 0 0 0 ",
    gap: "15px"
  }, {
    children: [SidebarPlaceholderContent[id].IconComponent, jsxs(Section, Object.assign({
      flexDirection: "column",
      gap: "7px"
    }, {
      children: [jsx(Span$1, Object.assign({
        textAlign: "center",
        fontSize: "18px",
        fontWeight: "700",
        lineHeight: "24px",
        color: '#62626A'
      }, {
        children: SidebarPlaceholderContent[id].title
      })), jsx(Span$1, Object.assign({
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "20px",
        color: '#62626A',
        padding: "0px 100px"
      }, {
        children: SidebarPlaceholderContent[id].subTitle
      }))]
    }))]
  }));
};

const ChatsFeedList = () => {
  const {
    chatsFeed,
    setChatsFeed,
    finishedFetchingChats,
    setFinishedFetchingChats
  } = useContext(ChatMainStateContext);
  const pageRef = useRef(null);
  const [page, setPage] = useState(1);
  const [paginateLoading, setPaginateLoading] = useState(false);
  const isInViewport1 = useIsInViewport(pageRef, '1px');
  const {
    decryptedPgpPvtKey,
    account,
    env
  } = useContext(ChatAndNotificationPropsContext);
  const {
    fetchChats,
    loading
  } = useFetchChats();

  const fetchChatList = () => __awaiter(void 0, void 0, void 0, function* () {
    const feeds = yield fetchChats({
      page,
      chatLimit
    });
    const firstFeeds = Object.assign({}, feeds);
    setChatsFeed(firstFeeds);
  });

  useEffect(() => {
    if (Object.keys(chatsFeed).length) {
      return;
    }

    if (decryptedPgpPvtKey) {
      fetchChatList();
    }
  }, [fetchChats, env, page, account]);
  useEffect(() => {
    if (!isInViewport1 || loading || finishedFetchingChats // ||
    // Object.keys(chatsFeed).length < chatLimit
    ) {
      return;
    }

    const newPage = page + 1;
    setPage(newPage); // eslint-disable-next-line no-use-before-define

    callFeeds(newPage);
  }, [isInViewport1]);

  const callFeeds = page => __awaiter(void 0, void 0, void 0, function* () {
    if (!decryptedPgpPvtKey) {
      return;
    }

    try {
      setPaginateLoading(true);
      const feeds = yield fetchChats({
        page,
        chatLimit
      });
      if (!Object.keys(feeds || {}).length) setFinishedFetchingChats(true);
      const newFeed = Object.assign(Object.assign({}, chatsFeed), feeds);
      setChatsFeed(newFeed);
    } catch (error) {
      console.log(error);
      setPaginateLoading(false);
    } finally {
      setPaginateLoading(false);
    }
  });

  return jsxs(ChatListCard$1, Object.assign({
    overflow: "hidden auto",
    justifyContent: "start",
    flexDirection: "column"
  }, {
    children: [(!loading || paginateLoading) && Object.keys(chatsFeed || {}).length ? jsx(ChatList, {
      chatsFeed: chatsFeed
    }) : !paginateLoading && loading && jsx(Section, Object.assign({
      margin: "10px 0"
    }, {
      children: jsx(Spinner, {})
    })), !loading && Object.keys(chatsFeed).length === 0 && jsx(SidebarPlaceholder, {
      id: SIDEBAR_PLACEHOLDER_KEYS.CHAT
    }), jsx("div", {
      ref: pageRef,
      style: {
        padding: '1px'
      }
    }), paginateLoading && jsx(Section, Object.assign({
      margin: "10px  0"
    }, {
      children: jsx(Spinner, {})
    }))]
  }));
}; //styles

const ChatListCard$1 = /*#__PURE__*/styled(Section).withConfig({
  displayName: "ChatsFeedList__ChatListCard",
  componentId: "sc-77y3ob-0"
})(["padding:0px 3px 0px 0px;&::-webkit-scrollbar-thumb{background:rgb(181 181 186);border-radius:10px;}&::-webkit-scrollbar{width:5px;}"]);

const AngleArrowIcon = () => {
  return jsx("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: jsx("path", {
      d: "M0 15V5H2V11.6L13.6 0L15 1.4L3.4 13H10V15H0Z",
      fill: "black"
    })
  }));
};

const SpamIconSvg = ({
  fill
}) => {
  return jsx("svg", Object.assign({
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: jsx("path", {
      d: "M9 5H11V7H9V5ZM9 9H11V15H9V9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z",
      fill: "black"
    })
  }));
};

const InboxNotificationFeedList = () => {
  const {
    inboxNotifsFeed,
    setInboxNotifsFeed,
    allInboxNotifFeed,
    setAllInboxNotifsFeed,
    setSpamNotifsFeed,
    spamNotifsFeed,
    finishedFetchingInbox,
    setFinishedFetchingInbox
  } = useContext(NotificationMainStateContext);
  const pageRef = useRef(null);
  const {
    account,
    env
  } = useContext(ChatAndNotificationPropsContext);
  const [page, setPage] = useState(1);
  const [paginateLoading, setPaginateLoading] = useState(false);
  const isInViewport1 = useIsInViewport(pageRef, '1px');
  const {
    fetchNotification,
    loading
  } = useFetchNotification();

  const fetchSpamNotificationList = () => __awaiter(void 0, void 0, void 0, function* () {
    const feeds = yield fetchNotification({
      page: 1,
      limit: notificationLimit,
      spam: true
    }); //change type of notification

    if (feeds) {
      const firstFeeds = Object.assign({}, feeds);
      setSpamNotifsFeed(firstFeeds);
    }
  });

  useEffect(() => {
    if (Object.keys(spamNotifsFeed).length) {
      return;
    }

    fetchSpamNotificationList();
  }, [env, account]);

  const fetchInboxNotificationList = () => __awaiter(void 0, void 0, void 0, function* () {
    const feeds = yield fetchNotification({
      page: 1,
      limit: notificationLimit
    }); //change type of notification

    if (feeds) {
      const firstFeeds = Object.assign({}, feeds);
      setInboxNotifsFeed(firstFeeds);
    }
  });

  useEffect(() => {
    if (Object.keys(inboxNotifsFeed).length) {
      return;
    }

    if (account) {
      fetchInboxNotificationList();
    }
  }, [fetchNotification, env, page, account]);
  useEffect(() => {
    if (Object.keys(allInboxNotifFeed).length) {
      return;
    }

    if (account) {
      (() => __awaiter(void 0, void 0, void 0, function* () {
        const feeds = yield fetchNotification({
          page,
          limit: 10000
        });
        setAllInboxNotifsFeed(Object.assign({}, feeds));
      }))();
    }
  }, [fetchNotification, env, page, account]);
  useEffect(() => {
    if (!isInViewport1 || loading || finishedFetchingInbox || Object.keys(inboxNotifsFeed).length < notificationLimit) {
      return;
    }

    const newPage = page + 1;
    setPage(newPage); // eslint-disable-next-line no-use-before-define

    callFeeds(newPage);
  }, [isInViewport1]);

  const callFeeds = page => __awaiter(void 0, void 0, void 0, function* () {
    if (!account) {
      return;
    }

    try {
      setPaginateLoading(true);
      const feeds = yield fetchNotification({
        page,
        limit: notificationLimit
      });
      if (!Object.keys(feeds || {}).length) setFinishedFetchingInbox(true);
      const newFeed = Object.assign(Object.assign({}, inboxNotifsFeed), feeds);
      setInboxNotifsFeed(newFeed);
    } catch (error) {
      console.log(error);
      setPaginateLoading(false);
    } finally {
      setPaginateLoading(false);
    }
  });

  return jsxs(InboxNotifListCard, Object.assign({
    overflow: "hidden auto",
    justifyContent: "start",
    flexDirection: "column",
    padding: "0 3px"
  }, {
    children: [(!loading || paginateLoading) && Object.keys(inboxNotifsFeed || {}).length ? jsx(Div, {
      children: jsx(NotificationFeedList, {
        notificationFeeds: inboxNotifsFeed
      })
    }) : !paginateLoading && loading && jsx(Section, Object.assign({
      margin: "10px 0"
    }, {
      children: jsx(Spinner, {})
    })), !loading && Object.keys(inboxNotifsFeed).length === 0 && jsx(SidebarPlaceholder, {
      id: SIDEBAR_PLACEHOLDER_KEYS.NOTIFICATION
    }), jsx("div", {
      ref: pageRef,
      style: {
        padding: '1px'
      }
    }), paginateLoading && jsx(Section, Object.assign({
      margin: "10px  0"
    }, {
      children: jsx(Spinner, {})
    }))]
  }));
}; //styles

const InboxNotifListCard = /*#__PURE__*/styled(Section).withConfig({
  displayName: "InboxNotificationFeedList__InboxNotifListCard",
  componentId: "sc-rvetgw-0"
})(["&::-webkit-scrollbar-thumb{background:rgb(181 181 186);border-radius:10px;}&::-webkit-scrollbar{width:5px;}"]);

const Tab = ({
  tabName,
  tabValue
}) => {
  const {
    activeTab,
    setActiveTab
  } = useContext(ChatAndNotificationMainContext);
  const {
    setSearchedChats,
    setSelectedChatId
  } = useContext(ChatMainStateContext);
  const {
    setSearchedNotifications
  } = useContext(NotificationMainStateContext); // const UnreadChats = () => {
  //   return (
  //     <Section
  //       borderRadius='100px'
  //       background={activeTab === tabValue ? '#0D67FE' : '#62626A'}
  //       height='20px'
  //       width='20px'
  //       alignSelf='center'
  //     >
  //       <Span
  //         fontSize='12px'
  //         color='#FFFFFF'
  //       >
  //         2
  //       </Span>
  //     </Section>
  //   )
  //}

  return jsx(Section, Object.assign({
    gap: "10px",
    flex: "1",
    cursor: "pointer",
    onClick: () => {
      setActiveTab(tabValue);

      if (activeTab === PUSH_TABS.CHATS) {
        setSearchedChats(null);
        setSelectedChatId(null);
      } else if (activeTab === PUSH_TABS.APP_NOTIFICATIONS) {
        setSearchedNotifications(null);
      }
    },
    borderColor: activeTab === tabValue ? '#0D67FE' : '#C8C8CB',
    borderStyle: activeTab === tabValue ? ' solid ' : tabValue === PUSH_TABS.CHATS ? 'solid none solid solid' : 'solid solid solid none',
    borderWidth: "2px",
    borderRadius: activeTab === tabValue ? '8px' : tabValue === PUSH_TABS.CHATS ? '8px 0px 0px 8px' : '0px 8px 8px 0px',
    position: "relative",
    background: activeTab === tabValue ? '#F0F5FF;' : '#FFF',
    left: tabValue === PUSH_TABS.APP_NOTIFICATIONS ? '-2.2px' : 'auto',
    right: tabValue === PUSH_TABS.CHATS ? '-2.6px' : 'auto',
    padding: "8px 0",
    zIndex: activeTab === tabValue ? '10' : '0'
  }, {
    children: jsx(TabTitleSpan, Object.assign({
      color: activeTab === tabValue ? '#0D67FE' : '#62626A',
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer"
    }, {
      children: tabName
    }))
  }));
};

const SidebarTabs = () => {
  return jsxs(Section, Object.assign({
    margin: " 0 0 5px 0"
  }, {
    children: [jsx(Tab, {
      tabName: "Chat",
      tabValue: PUSH_TABS.CHATS
    }), jsx(Tab, {
      tabName: "App Notifications",
      tabValue: PUSH_TABS.APP_NOTIFICATIONS
    })]
  }));
};

const SidebarSubTabs = ({
  subTab,
  tabValue,
  isClickable: _isClickable = false
}) => {
  const {
    setActiveSubTab,
    activeSubTab
  } = useContext(ChatAndNotificationMainContext);
  const {
    setSearchedChats,
    setSelectedChatId
  } = useContext(ChatMainStateContext);
  const {
    setSearchedNotifications
  } = useContext(NotificationMainStateContext);
  return jsxs(SubContainer, Object.assign({
    justifyContent: "start",
    gap: "15px",
    padding: "15px 8px",
    cursor: _isClickable ? 'pointer' : 'default',
    onClick: () => {
      if (_isClickable) {
        setActiveSubTab(tabValue);

        if (activeSubTab === PUSH_SUB_TABS.REQUESTS) {
          setSearchedChats(null);
          setSelectedChatId(null);
        } else if (activeSubTab === PUSH_SUB_TABS.SPAM) {
          setSearchedNotifications(null);
        }
      }
    }
  }, {
    children: [jsx(Span$1, Object.assign({
      padding: tabValue === PUSH_SUB_TABS.REQUESTS ? '16px 17px 15px 18px' : '15px 15px 11px 16px',
      borderRadius: "100%",
      border: "1px solid #DDDDDF",
      cursor: _isClickable ? 'pointer' : 'default'
    }, {
      children: subTab.icon
    })), jsxs(Section, Object.assign({
      flexDirection: "column",
      alignItems: "start",
      gap: "5px",
      cursor: _isClickable ? 'pointer' : 'default'
    }, {
      children: [jsx(Span$1, Object.assign({
        fontWeight: "700",
        fontSize: "16px",
        color: "#000"
      }, {
        children: subTab.title
      })), jsx(Span$1, Object.assign({
        cursor: _isClickable ? 'pointer ' : 'default',
        textAlign: "left",
        fontWeight: "400",
        fontSize: "16px",
        color: _isClickable ? '#0D67FE ' : '#62626A'
      }, {
        children: subTab.subTitle
      }))]
    }))]
  }));
};

const Sidebar = () => {
  const {
    loading: chatsLoading
  } = useFetchChats();
  const {
    fetchChat
  } = useFetchChat();
  const {
    newChat,
    setNewChat,
    activeTab,
    activeSubTab
  } = useContext(ChatAndNotificationMainContext);
  const {
    chatsFeed,
    requestsFeed,
    searchedChats,
    web3NameList,
    selectedChatId,
    setSearchedChats
  } = useContext(ChatMainStateContext);
  const {
    env
  } = useContext(ChatAndNotificationPropsContext);
  const {
    spamNotifsFeed,
    allInboxNotifFeed,
    setSearchedNotifications,
    searchedNotifications
  } = useContext(NotificationMainStateContext);
  const {
    fetchChatProfile
  } = useGetChatProfile();
  const PushSubTabDetails = {
    REQUESTS: {
      title: PushSubTabTitle.REQUESTS.title,
      subTitle: ` ${shortenNumber(Object.keys(requestsFeed || {}).length, 10)} requests from people you may know`,
      icon: jsx(AngleArrowIcon, {})
    },
    SPAM: {
      title: PushSubTabTitle.SPAM.title,
      subTitle: `${shortenNumber(Object.keys(spamNotifsFeed || {}).length, 5)} messages in your spam box`,
      icon: jsx(SpamIconSvg, {})
    }
  };

  const handleChatSearch = ({
    searchedText,
    feed
  }) => __awaiter(void 0, void 0, void 0, function* () {
    const result = getObjectsWithMatchingKeys(feed, searchedText, web3NameList);
    if (Object.keys(result || {}).length) setSearchedChats(result);else {
      // const address = await getAddress(searchedText, env);
      let newChatFeed;
      const newChatUser = yield getNewChatUser({
        searchText: searchedText,
        fetchChatProfile,
        env
      });

      if (newChatUser) {
        newChatFeed = yield fetchChat({
          recipientAddress: newChatUser.did
        });

        if (!Object.keys(newChatFeed || {}).length) {
          newChatFeed = getDefaultFeedObject({
            user: newChatUser
          });
          setSearchedChats({
            [newChatFeed.did.toLowerCase()]: newChatFeed
          });
          setNewChat(true);
        } else {
          setSearchedChats({
            [newChatFeed.did.toLowerCase()]: newChatFeed
          });
        }
      } else {
        if (!Object.keys(newChatFeed || {}).length) {
          setSearchedChats({});
        }
      }
    }
  });

  const onChatSearchReset = () => {
    setSearchedChats(null);
  };

  const handleNotifSearch = ({
    searchedText,
    feed
  }) => __awaiter(void 0, void 0, void 0, function* () {
    const result = getSearchedNotificationsList(searchedText, feed);
    setSearchedNotifications(result);
  });

  return jsxs(Section, Object.assign({
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "start"
  }, {
    children: [!newChat && jsx(SidebarTabs, {}), activeSubTab !== PUSH_SUB_TABS.REQUESTS && (activeTab === PUSH_TABS.CHATS || newChat) && jsx(Search, {
      feed: chatsFeed,
      handleSearch: handleChatSearch,
      onSearchReset: onChatSearchReset,
      placeholder: "Search name or domain"
    }), activeSubTab !== PUSH_SUB_TABS.SPAM && activeTab === PUSH_TABS.APP_NOTIFICATIONS && !newChat && jsx(Search, {
      feed: allInboxNotifFeed,
      handleSearch: handleNotifSearch,
      onSearchReset: () => setSearchedNotifications(null),
      placeholder: "Search Notification"
    }), !searchedChats && newChat && jsx(SidebarPlaceholder, {
      id: SIDEBAR_PLACEHOLDER_KEYS.NEW_CHAT
    }), !newChat && !chatsLoading && !searchedChats && activeTab === PUSH_TABS.CHATS && jsxs(Fragment, {
      children: [jsx(SidebarSubTabs, {
        subTab: PushSubTabDetails.REQUESTS,
        tabValue: "REQUESTS",
        isClickable: !!Object.keys(requestsFeed).length
      }), activeSubTab !== PUSH_SUB_TABS.REQUESTS && jsx(ChatsFeedList, {})]
    }), !newChat && !searchedNotifications && activeTab === PUSH_TABS.APP_NOTIFICATIONS && jsxs(Fragment, {
      children: [jsx(SidebarSubTabs, {
        subTab: PushSubTabDetails.SPAM,
        tabValue: "SPAM",
        isClickable: !!Object.keys(spamNotifsFeed).length
      }), activeSubTab !== PUSH_SUB_TABS.SPAM && jsx(InboxNotificationFeedList, {})]
    }), (activeTab === PUSH_TABS.CHATS || newChat) && jsxs(Fragment, {
      children: [jsx(ChatListCard, Object.assign({
        overflow: "hidden auto",
        justifyContent: "start",
        gap: "2.5px",
        width: "100%",
        flexDirection: "column"
      }, {
        children: searchedChats && !!Object.keys(searchedChats).length && jsx(ChatList, {
          chatsFeed: searchedChats
        })
      })), searchedChats && !Object.keys(searchedChats).length && jsx(SidebarPlaceholder, {
        id: SIDEBAR_PLACEHOLDER_KEYS.SEARCH
      })]
    }), activeTab === PUSH_TABS.APP_NOTIFICATIONS && !newChat && jsxs(Fragment, {
      children: [jsx(NotificationListCard, {
        children: searchedNotifications && !!Object.keys(searchedNotifications).length && jsx(NotificationFeedList, {
          notificationFeeds: searchedNotifications
        })
      }), searchedNotifications && !Object.keys(searchedNotifications).length && jsx(SidebarPlaceholder, {
        id: SIDEBAR_PLACEHOLDER_KEYS.SEARCH
      })]
    })]
  }));
}; //styles

const SubContainer = /*#__PURE__*/styled(Section).withConfig({
  displayName: "Sidebar__SubContainer",
  componentId: "sc-nibeu-0"
})(["border-bottom:1px dashed #ededee;cursor:pointer;&:hover{background:#f4f5fa;}"]);
const ChatListCard = /*#__PURE__*/styled(Section).withConfig({
  displayName: "Sidebar__ChatListCard",
  componentId: "sc-nibeu-1"
})(["&::-webkit-scrollbar-thumb{background:rgb(181 181 186);border-radius:10px;}&::-webkit-scrollbar{width:5px;}"]);
const NotificationListCard = /*#__PURE__*/styled(Div).withConfig({
  displayName: "Sidebar__NotificationListCard",
  componentId: "sc-nibeu-2"
})(["overflow:hidden auto;padding:0 1px;&::-webkit-scrollbar-thumb{background:rgb(181 181 186);border-radius:10px;}&::-webkit-scrollbar{width:5px;}"]);
const TabTitleSpan = /*#__PURE__*/styled(Span$1).withConfig({
  displayName: "Sidebar__TabTitleSpan",
  componentId: "sc-nibeu-3"
})(["@media ", "{font-size:14px;}"], device.mobileL);

const Modal$1 = () => {
  const {
    activeSubTab
  } = useContext(ChatAndNotificationMainContext);
  const {
    selectedChatId,
    chatsFeed,
    requestsFeed,
    searchedChats
  } = useContext(ChatMainStateContext);
  return jsxs(Section, Object.assign({
    height: "550px",
    width: "100%",
    maxHeight: "550px",
    overflow: "hidden"
  }, {
    children: [!selectedChatId && !activeSubTab && jsx(Sidebar, {}), !selectedChatId && activeSubTab === PUSH_SUB_TABS.REQUESTS && jsx(RequestsFeedList, {}), activeSubTab === PUSH_SUB_TABS.SPAM && jsx(SpamNotificationFeedList, {}), selectedChatId && (Object.keys(chatsFeed || {}).length || Object.keys(requestsFeed || {}).length || Object.keys(searchedChats || {}).length ? jsx(MessageBox, {}) : jsx(Spinner, {}))]
  }));
};

const ChatAndNotification = () => {
  const {
    setNewChat,
    setActiveTab,
    setActiveSubTab
  } = useContext(ChatAndNotificationMainContext);
  const {
    setChatsFeed,
    setRequestsFeed,
    setSelectedChatId,
    setSearchedChats,
    chats,
    setConnectedProfile,
    requestsFeed,
    chatsFeed,
    selectedChatId,
    setFinishedFetchingChats,
    setFinishedFetchingRequests,
    setChats
  } = useContext(ChatMainStateContext);
  const {
    setInboxNotifsFeed,
    setSpamNotifsFeed,
    setFinishedFetchingInbox,
    setFinishedFetchingSpam
  } = useContext(NotificationMainStateContext);
  const {
    decryptedPgpPvtKey,
    account,
    env,
    activeChosenTab,
    activeChat,
    onClose
  } = useContext(ChatAndNotificationPropsContext);
  const [modalOpen, setModalOpen] = useState(false);
  const {
    fetchChatProfile
  } = useGetChatProfile();
  const {
    fetchRequests
  } = useFetchRequests();
  const {
    fetchChats
  } = useFetchChats();
  const {
    fetchChat
  } = useFetchChat();
  const modalRef = useRef(null);
  const {
    fetchUserSubscriptions
  } = useFetchUserSubscriptions();
  useChatNotificationSocket({});
  useChatNotificationSocket({
    socketType: SOCKET_TYPE.CHAT
  });
  useEffect(() => {
    setChatsFeed({});
    setRequestsFeed({});
    setInboxNotifsFeed({});
    setSpamNotifsFeed({});
    setFinishedFetchingInbox(false);
    setFinishedFetchingSpam(false);
    setFinishedFetchingChats(false);
    setFinishedFetchingRequests(false); // set active tab if present

    if (activeChosenTab) {
      setActiveTab(activeChosenTab);
      setModalOpen(true);
    } else {
      setActiveTab(PUSH_TABS.CHATS);
    }

    setActiveSubTab(null);
    setChats(new Map());
    setNewChat(false);
  }, [account, env, activeChosenTab]); //make a helper for the function

  const fetchRequestList = () => __awaiter(void 0, void 0, void 0, function* () {
    const feeds = yield fetchRequests({
      page: 1,
      requestLimit: requestLimit$1
    });
    const firstFeeds = Object.assign({}, feeds);
    setRequestsFeed(firstFeeds);
  });

  useEffect(() => {
    if (Object.keys(requestsFeed).length) {
      return;
    }

    if (decryptedPgpPvtKey) {
      fetchRequestList();
    }
  }, [fetchRequests, decryptedPgpPvtKey, env]);

  const fetchChatList = () => __awaiter(void 0, void 0, void 0, function* () {
    const feeds = yield fetchChats({
      page: 1,
      chatLimit
    });
    const firstFeeds = Object.assign({}, feeds);
    setChatsFeed(firstFeeds);
  });

  useEffect(() => {
    if (Object.keys(chatsFeed).length) {
      return;
    }

    if (decryptedPgpPvtKey) {
      fetchChatList();
    }
  }, [fetchChats, env, account]);
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      let user;

      if (account) {
        user = yield fetchChatProfile({
          profileId: account,
          env
        });
        if (user) setConnectedProfile(user);
      }
    }))();
  }, [account]);
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      fetchUserSubscriptions();
    }))();
  }, [env, account]);
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      var _a;

      if (activeChat) {
        const address = yield getAddress(activeChat, env);

        if (address) {
          setModalOpen(true);
          setSelectedChatId(walletToPCAIP10(address).toLowerCase());
          let selectedChat = chatsFeed[walletToPCAIP10(address).toLowerCase()] || requestsFeed[walletToPCAIP10(address).toLowerCase()];

          if (!selectedChat) {
            selectedChat = yield fetchChat({
              recipientAddress: walletToPCAIP10(address)
            });

            if (!Object.keys(selectedChat || {}).length) {
              const result = yield getNewChatUser({
                searchText: address,
                fetchChatProfile,
                env
              });

              if (result) {
                selectedChat = getDefaultFeedObject({
                  user: result
                });
              }
            }
          }

          setSearchedChats({
            [(_a = selectedChat.did.toLowerCase()) !== null && _a !== void 0 ? _a : selectedChat.chatId]: selectedChat
          });
        } else {
          setSearchedChats(null);
          setSelectedChatId(null);
        }
      } else {
        setSelectedChatId(null);
        setSearchedChats(null);
      } // setChats(new Map())

    }))();
  }, [activeChat, env, account]);

  const onMaximizeMinimizeToggle = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalElement) return;

    const handleScroll = event => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight
      } = modalElement;
      const isScrolledToBottom = scrollTop + clientHeight >= scrollHeight; // If scrolled to the bottom of the modal, prevent further scrolling

      if (isScrolledToBottom && event.deltaY > 0) {
        // event.preventDefault();
        event.stopPropagation();
      }
    };

    modalElement.addEventListener('wheel', handleScroll); // Cleanup the event listener when the component unmounts

    return () => {
      modalElement.removeEventListener('wheel', handleScroll);
    };
  }, []);
  return jsxs(Container$3, Object.assign({
    width: "470px",
    flexDirection: "column",
    maxHeight: "600px",
    position: "fixed",
    background: "#fff",
    right: "12px",
    bottom: "18px",
    className: 'modal',
    overflow: "hidden",
    ref: modalRef
  }, {
    children: [jsx(MinimisedModalHeader, {
      onMaximizeMinimizeToggle: onClose !== null && onClose !== void 0 ? onClose : onMaximizeMinimizeToggle,
      modalOpen: modalOpen
    }), modalOpen && jsx(Modal$1, {})]
  }));
}; //styles

const Container$3 = /*#__PURE__*/styled(Section).withConfig({
  displayName: "ChatAndNotification__Container",
  componentId: "sc-1521ie2-0"
})(["border:1px solid #dddddf;padding:0 20px 0 21px;box-shadow:0px 0px 4px rgba(0,0,0,0.08),0px 0px 96px rgba(0,0,0,0.12);backdrop-filter:blur(5px);border-radius:8px;@media ", "{width:330px;padding:0px 12px 0 12px;}"], device.mobileL);

const ChatAndNotificationWidget = ({
  account,
  decryptedPgpPvtKey: _decryptedPgpPvtKey = null,
  activeTab: _activeTab = null,
  activeChat: _activeChat = null,
  onClose: _onClose = null,
  signer: _signer = null,
  env: _env = Constants.ENV.PROD
}) => {
  const chatAndNotificationPropsData = {
    account: pCAIP10ToWallet(account),
    decryptedPgpPvtKey: _decryptedPgpPvtKey,
    activeChosenTab: _activeTab,
    activeChat: _activeChat,
    onClose: _onClose,
    signer: _signer,
    env: _env
  };
  return jsx(ChatAndNotificationPropsContext.Provider, Object.assign({
    value: chatAndNotificationPropsData
  }, {
    children: jsx(ChatAndNotificationMainContextProvider, {
      children: jsx(ChatMainStateContextProvider, {
        children: jsx(NotificationMainStateContextProvider, {
          children: jsx(ChatAndNotification, {})
        })
      })
    })
  }));
};

const checkTwitterUrl = ({
  message
}) => {
  let tweetId = "";
  let messageType = "";
  const URL_REGEX = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/)?([\w#!:.?+=&%@!-]+)/;
  const messageContent = message === null || message === void 0 ? void 0 : message.split(" ");

  for (let i = 0; i < messageContent.length; i++) {
    if (URL_REGEX.test(messageContent[i]) && messageContent[i].toLowerCase().includes("twitter")) {
      // Extracting tweetId
      const wordArray = messageContent[i].split("?")[0].split("/"); // split url at '?' and take first element and split at '/'

      if ((wordArray === null || wordArray === void 0 ? void 0 : wordArray.length) >= 6) {
        tweetId = wordArray[(wordArray === null || wordArray === void 0 ? void 0 : wordArray.length) - 1];
        messageType = "TwitterFeedLink";
        break;
      } else {
        messageType = "Text";
        break;
      }
    }
  }

  return {
    tweetId,
    messageType
  };
};

//dark theme object
const lightChatTheme = {
  borderRadius: {
    chatViewComponent: '24px',
    chatProfile: '32px',
    messageInput: '13px',
    searchInput: '99px',
    modal: '16px',
    modalInnerComponents: '12px'
  },
  backgroundColor: {
    chatViewComponentBackground: 'linear-gradient(179.97deg, #EEF5FF 0.02%, #ECE9FA 123.25%)',
    chatProfileBackground: '#fff',
    messageInputBackground: '#fff',
    chatSentBubbleBackground: 'rgb(202, 89, 155)',
    chatReceivedBubbleBackground: '#fff',
    encryptionMessageBackground: '#fff',
    buttonBackground: 'rgb(202, 89, 155)',
    searchInputBackground: 'rgb(244, 245, 250)',
    modalBackground: '#fff',
    modalInputBackground: 'transparent',
    modalHoverBackground: 'rgb(244, 245, 250)',
    buttonDisableBackground: '#DFDEE9',
    toastSuccessBackground: 'linear-gradient(90.15deg, #30CC8B -125.65%, #30CC8B -125.63%, #F3FFF9 42.81%)',
    toastErrorBackground: 'linear-gradient(90.15deg, #FF2070 -125.65%, #FF2D79 -125.63%, #FFF9FB 42.81%)',
    toastShadowBackground: '#ccc',
    criteriaLabelBackground: '#657795'
  },
  fontSize: {
    chatProfileText: '17px',
    messageInputText: '16px',
    chatSentBubbleText: '16px',
    chatReceivedBubbleText: '16px',
    timestamp: '12px',
    encryptionMessageText: '13px',
    chatReceivedBubbleAddressText: '16px',
    chatReceivedBubbleTimestampText: '12px',
    chatSentBubbleTimestampText: '12px',
    searchInputText: '16px',
    searchPlaceholderText: '16px'
  },
  fontWeight: {
    chatProfileText: '300',
    messageInputText: '400',
    chatSentBubbleText: '400',
    chatReceivedBubbleText: '400',
    timestamp: '400',
    encryptionMessageText: '400',
    chatReceivedBubbleAddressText: '300',
    chatReceivedBubbleTimestampText: '400',
    chatSentBubbleTimestampText: '400',
    searchInputText: '400',
    searchPlaceholderText: '400'
  },
  fontFamily: 'inherit',
  border: {
    chatViewComponent: 'none',
    chatProfile: 'none',
    messageInput: 'none',
    searchInput: '1px solid transparent',
    modal: 'none',
    modalInnerComponents: '1px solid rgb(194, 203, 219)'
  },
  iconColor: {
    emoji: 'rgb(101, 119, 149)',
    attachment: 'rgb(101, 119, 149)',
    sendButton: 'rgb(101, 119, 149)',
    groupSettings: 'rgb(101, 119, 149)'
  },
  textColor: {
    chatProfileText: '#000',
    messageInputText: '#000',
    chatSentBubbleText: '#fff',
    chatReceivedBubbleText: '#000',
    timestamp: '400',
    encryptionMessageText: '#000',
    buttonText: '#fff',
    buttonDisableText: '#AFB3BF',
    chatReceivedBubbleAddressText: '#000',
    chatReceivedBubbleTimestampText: '#000',
    chatSentBubbleTimestampText: '#fff',
    searchInputText: '#000',
    searchPlaceholderText: 'rgb(101, 119, 149)',
    modalHeadingText: '#000',
    modalSubHeadingText: 'rgb(101, 119, 149)'
  },
  backdropFilter: 'none',
  spinnerColor: 'rgb(202, 89, 155)',
  scrollbarColor: 'rgb(202, 89, 155)'
};
const darkChatTheme = {
  borderRadius: {
    chatViewComponent: '24px',
    chatProfile: '32px',
    messageInput: '13px',
    searchInput: '99px',
    modal: '16px',
    modalInnerComponents: '12px'
  },
  backgroundColor: {
    chatViewComponentBackground: 'rgb(40, 42, 46);',
    chatProfileBackground: 'rgb(64, 70, 80);',
    messageInputBackground: 'rgb(64, 70, 80);',
    chatSentBubbleBackground: 'rgb(202, 89, 155)',
    chatReceivedBubbleBackground: 'rgb(64, 70, 80);',
    encryptionMessageBackground: 'rgb(64, 70, 80);',
    buttonBackground: 'rgb(202, 89, 155)',
    modalBackground: 'rgb(47, 49, 55)',
    criteriaLabelBackground: 'rgb(47, 49, 55)',
    modalInputBackground: 'transparent',
    modalHoverBackground: 'rgb(64, 70, 80)',
    buttonDisableBackground: '#787E99',
    toastSuccessBackground: 'linear-gradient(90.15deg, #30CC8B -125.65%, #30CC8B -125.63%, #2F3137 42.81%)',
    toastErrorBackground: 'linear-gradient(89.96deg, #FF2070 -101.85%, #2F3137 51.33%)',
    toastShadowBackground: '#00000010'
  },
  fontSize: {
    chatProfileText: '17px',
    messageInputText: '16px',
    chatSentBubbleText: '16px',
    chatReceivedBubbleText: '16px',
    timestamp: '12px',
    encryptionMessageText: '13px',
    chatReceivedBubbleAddressText: '16px',
    chatReceivedBubbleTimestampText: '12px',
    chatSentBubbleTimestampText: '12px',
    searchInputText: '16px',
    searchPlaceholderText: '16px'
  },
  fontWeight: {
    chatProfileText: '300',
    messageInputText: '400',
    chatSentBubbleText: '400',
    chatReceivedBubbleText: '400',
    timestamp: '400',
    encryptionMessageText: '400',
    chatReceivedBubbleAddressText: '300',
    chatReceivedBubbleTimestampText: '400',
    chatSentBubbleTimestampText: '400',
    searchInputText: '400',
    searchPlaceholderText: '400'
  },
  fontFamily: 'inherit',
  border: {
    chatViewComponent: 'none',
    chatProfile: 'none',
    messageInput: 'none',
    searchInput: '1px solid transparent',
    modal: 'none',
    modalInnerComponents: '1px solid rgb(74, 79, 103)'
  },
  iconColor: {
    emoji: 'rgba(120, 126, 153, 1)',
    attachment: 'rgba(120, 126, 153, 1)',
    sendButton: 'rgba(120, 126, 153, 1)',
    groupSettings: 'rgba(120, 126, 153, 1)'
  },
  textColor: {
    chatProfileText: 'rgb(182, 188, 214)',
    messageInputText: 'rgb(182, 188, 214)',
    chatSentBubbleText: '#fff',
    chatReceivedBubbleText: 'rgb(182, 188, 214)',
    timestamp: 'rgb(182, 188, 214)',
    encryptionMessageText: 'rgb(182, 188, 214)',
    buttonText: '#fff',
    chatReceivedBubbleAddressText: 'rgb(182, 188, 214)',
    chatReceivedBubbleTimestampText: 'rgb(182, 188, 214)',
    chatSentBubbleTimestampText: '#fff',
    searchInputText: '#fff',
    searchPlaceholderText: 'rgb(101, 119, 149)',
    modalHeadingText: '#fff',
    modalSubHeadingText: 'rgb(182, 188, 214)',
    buttonDisableText: '#B6BCD6'
  },
  backdropFilter: 'none',
  spinnerColor: 'rgb(202, 89, 155)',
  scrollbarColor: 'rgb(202, 89, 155)'
};

/**
 * @file ThemeProvider.tsx: This acts as the custom theme provider for the entire app.
 */
const ThemeContext = /*#__PURE__*/createContext(lightChatTheme);

const SenderMessageAddress = ({
  chat
}) => {
  var _a, _b, _c;

  const {
    account
  } = useContext(ChatDataContext);
  const theme = useContext(ThemeContext);
  return jsx(Fragment, {
    children: chat.fromCAIP10.split(':')[1] !== account && jsxs(Span$1, Object.assign({
      theme: theme,
      alignSelf: "start",
      textAlign: "start",
      fontSize: (_a = theme.fontSize) === null || _a === void 0 ? void 0 : _a.chatReceivedBubbleAddressText,
      fontWeight: (_b = theme.fontWeight) === null || _b === void 0 ? void 0 : _b.chatReceivedBubbleAddressText,
      color: (_c = theme.textColor) === null || _c === void 0 ? void 0 : _c.chatReceivedBubbleAddressText
    }, {
      children: [chat.fromDID.split(':')[1].slice(0, 6), "...", chat.fromDID.split(':')[1].slice(-6)]
    }))
  });
};

const SenderMessageProfilePicture = ({
  chat
}) => {
  const {
    account,
    env
  } = useContext(ChatDataContext);
  const [pfp, setPfp] = useState('');

  const getUserPfp = () => __awaiter(void 0, void 0, void 0, function* () {
    const pfp = yield getPfp({
      account: chat.fromCAIP10.split(':')[1],
      env: env
    });

    if (pfp) {
      setPfp(pfp);
    }
  });

  useEffect(() => {
    getUserPfp();
  }, [account, chat.fromCAIP10]);
  return jsx(Section, Object.assign({
    justifyContent: "start",
    alignItems: "start"
  }, {
    children: chat.fromCAIP10.split(':')[1] !== account && jsx(Section, Object.assign({
      alignItems: "start"
    }, {
      children: pfp && jsx(Image$1, {
        src: pfp,
        alt: "profile picture",
        width: "40px",
        height: "40px",
        borderRadius: "50%"
      })
    }))
  }));
};

const MessageWrapper = ({
  chat,
  children,
  isGroup,
  maxWidth
}) => {
  const theme = useContext(ThemeContext);
  return jsxs(Section, Object.assign({
    theme: theme,
    flexDirection: "row",
    justifyContent: "start",
    gap: "6px",
    width: "fit-content",
    maxWidth: maxWidth || 'auto'
  }, {
    children: [isGroup && jsx(SenderMessageProfilePicture, {
      chat: chat
    }), jsxs(Section, Object.assign({
      justifyContent: "start",
      flexDirection: "column"
    }, {
      children: [isGroup && jsx(SenderMessageAddress, {
        chat: chat
      }), children]
    }))]
  }));
};

const MessageCard = ({
  chat,
  position,
  isGroup
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

  const theme = useContext(ThemeContext);
  const time = moment(chat.timestamp).format('hh:mm a');
  return jsx(MessageWrapper, Object.assign({
    chat: chat,
    isGroup: isGroup,
    maxWidth: "70%"
  }, {
    children: jsxs(Section, Object.assign({
      gap: "5px",
      background: position ? `${(_a = theme.backgroundColor) === null || _a === void 0 ? void 0 : _a.chatSentBubbleBackground}` : `${(_b = theme.backgroundColor) === null || _b === void 0 ? void 0 : _b.chatReceivedBubbleBackground}`,
      padding: "8px 12px",
      borderRadius: position ? '12px 0px 12px 12px' : '0px 12px 12px 12px',
      margin: "5px 0",
      alignSelf: position ? 'end' : 'start',
      justifyContent: "start",
      minWidth: "71px",
      position: "relative",
      width: "fit-content",
      color: position ? `${(_c = theme.textColor) === null || _c === void 0 ? void 0 : _c.chatSentBubbleText}` : `${(_d = theme.textColor) === null || _d === void 0 ? void 0 : _d.chatReceivedBubbleText}`
    }, {
      children: [' ', jsx(Section, Object.assign({
        flexDirection: "column",
        padding: "5px 0 15px 0"
      }, {
        children: chat.messageContent.split('\n').map(str => {
          var _a, _b, _c, _d, _e, _f;

          return jsx(Span$1, Object.assign({
            alignSelf: "start",
            textAlign: "left",
            fontSize: position ? `${(_a = theme.fontSize) === null || _a === void 0 ? void 0 : _a.chatSentBubbleText}` : `${(_b = theme.fontSize) === null || _b === void 0 ? void 0 : _b.chatReceivedBubbleText}`,
            fontWeight: position ? `${(_c = theme.fontWeight) === null || _c === void 0 ? void 0 : _c.chatSentBubbleText}` : `${(_d = theme.fontWeight) === null || _d === void 0 ? void 0 : _d.chatReceivedBubbleText}`,
            color: position ? `${(_e = theme.textColor) === null || _e === void 0 ? void 0 : _e.chatSentBubbleText}` : `${(_f = theme.textColor) === null || _f === void 0 ? void 0 : _f.chatReceivedBubbleText}`
          }, {
            children: str
          }), Math.random().toString());
        })
      })), jsx(Span$1, Object.assign({
        position: "absolute",
        fontSize: position ? `${(_e = theme.fontSize) === null || _e === void 0 ? void 0 : _e.chatSentBubbleTimestampText}` : `${(_f = theme.fontSize) === null || _f === void 0 ? void 0 : _f.chatReceivedBubbleTimestampText}`,
        fontWeight: position ? `${(_g = theme.fontWeight) === null || _g === void 0 ? void 0 : _g.chatSentBubbleTimestampText}` : `${(_h = theme.fontWeight) === null || _h === void 0 ? void 0 : _h.chatReceivedBubbleTimestampText}`,
        color: position ? `${(_j = theme.textColor) === null || _j === void 0 ? void 0 : _j.chatSentBubbleText}` : `${(_k = theme.textColor) === null || _k === void 0 ? void 0 : _k.chatReceivedBubbleText}`,
        bottom: "6px",
        right: "10px"
      }, {
        children: time
      }))]
    }))
  }));
};

const FileCard = ({
  chat,
  isGroup
}) => {
  const fileContent = JSON.parse(chat.messageContent);
  const name = fileContent.name;
  const content = fileContent.content;
  const size = fileContent.size;
  return jsx(MessageWrapper, Object.assign({
    maxWidth: "fit-content",
    chat: chat,
    isGroup: isGroup
  }, {
    children: jsxs(Section, Object.assign({
      alignSelf: "start",
      maxWidth: "100%",
      margin: "5px 0",
      background: "#343536",
      borderRadius: "8px",
      justifyContent: "space-around",
      padding: "10px 13px",
      gap: "15px",
      width: "fit-content"
    }, {
      children: [jsx(Image$1, {
        src: FILE_ICON(name.split('.').slice(-1)[0]),
        alt: "extension icon",
        width: "20px",
        height: "20px"
      }), jsxs(Section, Object.assign({
        flexDirection: "column",
        gap: "5px"
      }, {
        children: [jsx(Span$1, Object.assign({
          color: "#fff",
          fontSize: "15px"
        }, {
          children: shortenText(name, 11)
        })), jsx(Span$1, Object.assign({
          color: "#fff",
          fontSize: "12px"
        }, {
          children: formatFileSize(size)
        }))]
      })), jsx(FileDownloadIconAnchor, Object.assign({
        href: content,
        target: "_blank",
        rel: "noopener noreferrer",
        download: true
      }, {
        children: jsx(FileDownloadIcon, {
          className: "fa fa-download",
          "aria-hidden": "true"
        })
      }))]
    }))
  }));
};

const ImageCard = ({
  chat,
  position,
  isGroup
}) => {
  return jsx(MessageWrapper, Object.assign({
    chat: chat,
    isGroup: isGroup
  }, {
    children: jsx(Section, Object.assign({
      alignSelf: position ? 'end' : 'start',
      maxWidth: "65%",
      width: "fit-content",
      margin: "5px 0"
    }, {
      children: jsx(Image$1, {
        src: JSON.parse(chat.messageContent).content,
        alt: "",
        width: "100%",
        borderRadius: position ? '12px 0px 12px 12px' : '0px 12px 12px 12px'
      })
    }))
  }));
};

const GIFCard = ({
  chat,
  position,
  isGroup
}) => {
  return jsx(MessageWrapper, Object.assign({
    chat: chat,
    isGroup: isGroup,
    maxWidth: "fit-content"
  }, {
    children: jsx(Section, Object.assign({
      alignSelf: position ? 'end' : 'start',
      maxWidth: "65%",
      margin: "5px 0",
      width: "fit-content"
    }, {
      children: jsx(Image$1, {
        src: chat.messageContent,
        alt: "",
        width: "100%",
        borderRadius: position ? '12px 0px 12px 12px' : '0px 12px 12px 12px'
      })
    }))
  }));
};

const TwitterCard = ({
  chat,
  tweetId,
  isGroup,
  position
}) => {
  return jsx(MessageWrapper, Object.assign({
    chat: chat,
    isGroup: isGroup,
    maxWidth: "fit-content"
  }, {
    children: jsx(Section, Object.assign({
      alignSelf: position ? 'end' : 'start',
      maxWidth: "100%",
      width: "fit-content",
      margin: "5px 0"
    }, {
      children: jsx(TwitterTweetEmbed, {
        tweetId: tweetId
      })
    }))
  }));
};

const ChatViewBubble = ({
  decryptedMessagePayload
}) => {
  const {
    account
  } = useChatData();
  const position = pCAIP10ToWallet(decryptedMessagePayload.fromDID).toLowerCase() !== (account === null || account === void 0 ? void 0 : account.toLowerCase()) ? 0 : 1;
  const {
    tweetId,
    messageType
  } = checkTwitterUrl({
    message: decryptedMessagePayload === null || decryptedMessagePayload === void 0 ? void 0 : decryptedMessagePayload.messageContent
  });
  const [isGroup, setIsGroup] = useState(false);
  useEffect(() => {
    if (decryptedMessagePayload.toDID.split(':')[0] === 'eip155') {
      if (isGroup) {
        setIsGroup(false);
      }
    } else {
      if (!isGroup) {
        setIsGroup(true);
      }
    }
  }, [decryptedMessagePayload.toDID, isGroup]);

  if (messageType === 'TwitterFeedLink') {
    decryptedMessagePayload.messageType = 'TwitterFeedLink';
  }

  if (decryptedMessagePayload.messageType === 'GIF') {
    return jsx(GIFCard, {
      isGroup: isGroup,
      chat: decryptedMessagePayload,
      position: position
    });
  }

  if (decryptedMessagePayload.messageType === 'Image') {
    return jsx(ImageCard, {
      isGroup: isGroup,
      chat: decryptedMessagePayload,
      position: position
    });
  }

  if (decryptedMessagePayload.messageType === 'File') {
    return jsx(FileCard, {
      isGroup: isGroup,
      chat: decryptedMessagePayload,
      position: position
    });
  }

  if (decryptedMessagePayload.messageType === 'TwitterFeedLink') {
    return jsx(TwitterCard, {
      tweetId: tweetId,
      isGroup: isGroup,
      chat: decryptedMessagePayload,
      position: position
    });
  }

  return jsx(MessageCard, {
    isGroup: isGroup,
    chat: decryptedMessagePayload,
    position: position
  });
};
const FileDownloadIcon = /*#__PURE__*/styled.i.withConfig({
  displayName: "ChatViewBubble__FileDownloadIcon",
  componentId: "sc-15kn8zb-0"
})(["color:#575757;"]);
const FileDownloadIconAnchor = /*#__PURE__*/styled.a.withConfig({
  displayName: "ChatViewBubble__FileDownloadIconAnchor",
  componentId: "sc-15kn8zb-1"
})(["font-size:20px;"]);

const ENCRYPTION_KEYS = {
  ENCRYPTED: 'ENCRYPTED',
  NO_ENCRYPTED: 'NO_ENCRYPTED',
  NO_ENCRYPTED_GROUP: 'NO_ENCRYPTED_GROUP'
};
const EncryptionMessageContent = {
  ENCRYPTED: {
    IconComponent: jsx(EncryptionIcon, {
      size: "15"
    }),
    text: 'Messages are end-to-end encrypted. Only users in this chat can view or listen to them. Click to learn more.'
  },
  NO_ENCRYPTED: {
    IconComponent: jsx(NoEncryptionIcon, {
      size: "15"
    }),
    text: `Messages are not encrypted`
  },
  NO_ENCRYPTED_GROUP: {
    IconComponent: jsx(NoEncryptionIcon, {
      size: "15"
    }),
    text: `Messages in this group are not encrypted`
  }
};
const EncryptionMessage = ({
  id
}) => {
  var _a, _b;

  const theme = useContext(ThemeContext);
  const isMobile = useDeviceWidthCheck(771);
  return jsx(Section, Object.assign({
    padding: "10px",
    alignSelf: "center",
    borderRadius: "12px",
    background: (_a = theme.backgroundColor) === null || _a === void 0 ? void 0 : _a.encryptionMessageBackground,
    margin: "10px 10px 0px",
    width: isMobile ? '80%' : 'fit-content'
  }, {
    children: jsxs(EncryptionMessageDiv, Object.assign({
      textAlign: "center"
    }, {
      children: [EncryptionMessageContent[id].IconComponent, jsx(Span$1, Object.assign({
        fontSize: "13px",
        margin: "0 0 0 5px",
        color: (_b = theme.textColor) === null || _b === void 0 ? void 0 : _b.encryptionMessageText,
        fontWeight: "400",
        textAlign: "left"
      }, {
        children: EncryptionMessageContent[id].text
      }))]
    }))
  }));
}; //styles

const EncryptionMessageDiv = /*#__PURE__*/styled(Div).withConfig({
  displayName: "MessageEncryption__EncryptionMessageDiv",
  componentId: "sc-dk1cef-0"
})(["display:flex;text-align:center;svg{vertical-align:middle;}"]);

const useGetGroup = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const {
    env
  } = useChatData();
  const getGroup = useCallback(({
    searchText
  }) => __awaiter(void 0, void 0, void 0, function* () {
    setLoading(true);
    let group;

    try {
      group = yield PushAPI.chat.getGroup({
        chatId: searchText,
        env
      });
    } catch (error) {
      if (error.message.includes('No group with chatId')) {
        try {
          group = yield PushAPI.chat.getGroupByName({
            groupName: searchText,
            env
          });
        } catch (err) {
          setLoading(false);
          setError(error.message);
          console.log(error);
          return;
        }
      } else {
        setLoading(false);
        setError(error.message);
        console.log(error);
        return;
      }
    }

    return group;
  }), [env]);
  return {
    getGroup,
    error,
    loading
  };
};

const useApproveChatRequest = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const {
    account,
    env,
    pgpPrivateKey,
    signer
  } = useChatData();
  const approveChatRequest = useCallback(options => __awaiter(void 0, void 0, void 0, function* () {
    const {
      chatId
    } = options || {};
    setLoading(true);

    try {
      const response = yield PushAPI.chat.approve({
        status: 'Approved',
        account: account,
        senderAddress: chatId,
        signer: signer,
        pgpPrivateKey: pgpPrivateKey,
        env: env
      });
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
      return;
    }
  }), [account, env, signer, pgpPrivateKey]);
  return {
    approveChatRequest,
    error,
    loading
  };
};

const ApproveRequestBubble = ({
  chatFeed,
  chatId,
  setChatFeed
}) => {
  var _a, _b, _c, _d, _e, _f;

  const {
    pgpPrivateKey
  } = useChatData();
  const ApproveRequestText = {
    GROUP: `You were invited to the group ${(_a = chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation) === null || _a === void 0 ? void 0 : _a.groupName}. Please accept to continue messaging in this group.`,
    W2W: ` Please accept to enable push chat from this wallet`
  };
  const theme = useContext(ThemeContext);
  const {
    approveChatRequest,
    loading: approveLoading
  } = useApproveChatRequest();

  const handleApproveChatRequest = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      if (!pgpPrivateKey) {
        return;
      }

      const response = yield approveChatRequest({
        chatId
      });

      if (response) {
        const updatedChatFeed = Object.assign({}, chatFeed);
        updatedChatFeed.intent = response;
        setChatFeed(updatedChatFeed);
      }
    } catch (error_) {
      console.log(error_.message);
    }
  });

  return jsxs(Section, Object.assign({
    color: (_b = theme.textColor) === null || _b === void 0 ? void 0 : _b.chatReceivedBubbleText,
    gap: "10px",
    background: (_c = theme.backgroundColor) === null || _c === void 0 ? void 0 : _c.chatReceivedBubbleBackground,
    padding: "8px 12px",
    margin: "7px 0",
    borderRadius: " 0px 12px 12px 12px",
    alignSelf: "start",
    justifyContent: "start",
    maxWidth: "68%",
    minWidth: "15%",
    position: "relative",
    flexDirection: "column"
  }, {
    children: [jsx(Span$1, Object.assign({
      alignSelf: "center",
      textAlign: "left",
      fontSize: (_d = theme.fontSize) === null || _d === void 0 ? void 0 : _d.chatReceivedBubbleText,
      fontWeight: (_e = theme.fontWeight) === null || _e === void 0 ? void 0 : _e.chatReceivedBubbleText,
      color: (_f = theme.textColor) === null || _f === void 0 ? void 0 : _f.chatReceivedBubbleText,
      lineHeight: "24px"
    }, {
      children: (chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation) ? ApproveRequestText.GROUP : ApproveRequestText.W2W
    })), jsx(Button$2, Object.assign({
      theme: theme,
      onClick: () => !approveLoading ? handleApproveChatRequest() : null
    }, {
      children: approveLoading ? jsx(Spinner, {
        color: "#fff",
        size: "24"
      }) : 'Accept'
    }))]
  }));
}; //styles

const Button$2 = /*#__PURE__*/styled.button.withConfig({
  displayName: "ApproveRequestBubble__Button",
  componentId: "sc-n86oiw-0"
})(["border:none;cursor:pointer;border-radius:8px;background:", ";border:none;color:", ";width:100%;font-size:16px;font-weight:600;line-height:24px;max-height:48px;min-height:48px;padding:0px 24px;display:flex;justify-content:center;align-items:center;"], props => props.theme.backgroundColor.buttonBackground, props => props.theme.textColor.buttonText);

const ChatStatus = {
  FIRST_CHAT: `This is your first conversation with recipient.\n Start the conversation by sending a message.`,
  INVALID_CHAT: 'Invalid chatId'
};
const ChatViewList = options => {
  var _a, _b, _c;

  const {
    chatId,
    limit = chatLimit,
    chatFilterList = []
  } = options || {};
  const {
    pgpPrivateKey,
    account,
    connectedProfile,
    setConnectedProfile
  } = useChatData();
  const [chatFeed, setChatFeed] = useState({});
  const [chatStatusText, setChatStatusText] = useState('');
  const [messages, setMessages] = useState();
  const [loading, setLoading] = useState(true);
  const [conversationHash, setConversationHash] = useState();
  const {
    historyMessages,
    loading: messageLoading
  } = useFetchHistoryMessages$1();
  const listInnerRef = useRef(null);
  const [isMember, setIsMember] = useState(false);
  const {
    fetchChat
  } = useFetchChat$1();
  const {
    fetchChatProfile
  } = useGetChatProfile();
  const {
    getGroup
  } = useGetGroup();
  const {
    messagesSinceLastConnection,
    groupInformationSinceLastConnection
  } = usePushChatSocket();
  const theme = useContext(ThemeContext);
  const dates = new Set();
  const {
    env
  } = useChatData();
  useEffect(() => {
    setChatStatusText('');
  }, [chatId, account, env]);
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      if (!connectedProfile && account) {
        const user = yield fetchChatProfile({
          profileId: account,
          env
        });
        if (user) setConnectedProfile(user);
      }
    }))();
  }, [account]);
  useEffect(() => {
    setMessages(undefined);
    setConversationHash(undefined);
  }, [chatId, account, pgpPrivateKey, env]); //need to make a common method for fetching chatFeed to ruse in messageInput

  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      if (!account && !env) return;
      const chat = yield fetchChat({
        chatId
      });

      if (Object.keys(chat || {}).length) {
        setConversationHash(chat === null || chat === void 0 ? void 0 : chat.threadhash);
        setChatFeed(chat);
      } else {
        let newChatFeed;
        let group;
        const result = yield getNewChatUser({
          searchText: chatId,
          fetchChatProfile,
          env
        });

        if (result) {
          newChatFeed = getDefaultFeedObject({
            user: result
          });
        } else {
          group = yield getGroup({
            searchText: chatId
          });

          if (group) {
            newChatFeed = getDefaultFeedObject({
              groupInformation: group
            });
          }
        }

        if (newChatFeed) {
          if (!(newChatFeed === null || newChatFeed === void 0 ? void 0 : newChatFeed.groupInformation)) {
            setChatStatusText(ChatStatus.FIRST_CHAT);
          }

          setConversationHash(newChatFeed.threadhash);
          setChatFeed(newChatFeed);
        } else {
          setChatStatusText(ChatStatus.INVALID_CHAT);
        }
      }

      setLoading(false);
    }))();
  }, [chatId, pgpPrivateKey, account, env]); //moniters socket changes

  useEffect(() => {
    if (checkIfSameChat(messagesSinceLastConnection, account, chatId)) {
      const updatedChatFeed = chatFeed;
      updatedChatFeed.msg = messagesSinceLastConnection;

      if (!Object.keys(messages || {}).length) {
        setFilteredMessages([messagesSinceLastConnection]);
        setConversationHash(messagesSinceLastConnection.cid);
      } else {
        const newChatViewList = appendUniqueMessages(messages, [messagesSinceLastConnection], false);
        setFilteredMessages(newChatViewList);
      }

      setChatStatusText('');
      setChatFeed(updatedChatFeed);
      scrollToBottom();
    }
  }, [messagesSinceLastConnection]);
  useEffect(() => {
    var _a;

    if (Object.keys(groupInformationSinceLastConnection || {}).length) {
      if (((_a = chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation) === null || _a === void 0 ? void 0 : _a.chatId.toLowerCase()) === groupInformationSinceLastConnection.chatId.toLowerCase()) {
        const updateChatFeed = chatFeed;
        updateChatFeed.groupInformation = groupInformationSinceLastConnection;
        setChatFeed(updateChatFeed);
      }
    }
  }, [groupInformationSinceLastConnection]);
  useEffect(() => {
    if (conversationHash) {
      (function () {
        return __awaiter(this, void 0, void 0, function* () {
          yield getMessagesCall();
        });
      })();
    }
  }, [conversationHash, pgpPrivateKey, account, env, chatFeed]);
  useEffect(() => {
    scrollToBottom();
  }, [conversationHash]);
  useEffect(() => {
    if (conversationHash && Object.keys(messages || {}).length && (messages === null || messages === void 0 ? void 0 : messages.messages.length) && (messages === null || messages === void 0 ? void 0 : messages.messages.length) <= limit) {
      setChatStatusText('');
      scrollToBottom();
    }
  }, [messages]);
  useEffect(() => {
    var _a, _b;

    if (chatFeed && !((_a = chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation) === null || _a === void 0 ? void 0 : _a.isPublic) && account) {
      (_b = chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation) === null || _b === void 0 ? void 0 : _b.members.forEach(acc => {
        if (acc.wallet.toLowerCase() === walletToPCAIP10(account).toLowerCase()) {
          setIsMember(true);
        }
      });
    }
  }, [account, chatFeed]); //methods

  const scrollToBottom = () => {
    setTimeout(() => {
      if (listInnerRef.current) {
        listInnerRef.current.scrollTop = listInnerRef.current.scrollHeight + 100;
      }
    }, 0);
  };

  const onScroll = () => __awaiter(void 0, void 0, void 0, function* () {
    if (listInnerRef.current) {
      const {
        scrollTop
      } = listInnerRef.current;

      if (scrollTop === 0) {
        const content = listInnerRef.current;
        const curScrollPos = content.scrollTop;
        const oldScroll = content.scrollHeight - content.clientHeight;
        yield getMessagesCall();
        const newScroll = content.scrollHeight - content.clientHeight;
        content.scrollTop = curScrollPos + (newScroll - oldScroll);
      }
    }
  });

  const getMessagesCall = () => __awaiter(void 0, void 0, void 0, function* () {
    let threadHash = null;

    if (!messages) {
      threadHash = conversationHash;
    } else {
      threadHash = messages === null || messages === void 0 ? void 0 : messages.lastThreadHash;
    }

    if (threadHash && (account && pgpPrivateKey && chatFeed && !(chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation) || chatFeed && (chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation))) {
      const chatHistory = yield historyMessages({
        limit: limit,
        threadHash
      });

      if (chatHistory === null || chatHistory === void 0 ? void 0 : chatHistory.length) {
        if (Object.keys(messages || {}) && (messages === null || messages === void 0 ? void 0 : messages.messages.length)) {
          const newChatViewList = appendUniqueMessages(messages, chatHistory, true);
          setFilteredMessages(newChatViewList);
        } else {
          setFilteredMessages(chatHistory);
        }
      }
    }
  });

  const setFilteredMessages = messageList => {
    const updatedMessageList = messageList.filter(msg => !chatFilterList.includes(msg.cid));

    if (updatedMessageList && updatedMessageList.length) {
      setMessages({
        messages: updatedMessageList,
        lastThreadHash: updatedMessageList[0].link
      });
    }
  };

  const ifBlurChat = () => {
    var _a;

    return !!(chatFeed && (chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation) && !((_a = chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation) === null || _a === void 0 ? void 0 : _a.isPublic) && (!isMember && pgpPrivateKey || !pgpPrivateKey));
  };

  const renderDate = ({
    chat,
    dateNum
  }) => {
    var _a, _b, _c;

    const timestampDate = dateToFromNowDaily(chat.timestamp);
    dates.add(dateNum);
    return jsx(Span$1, Object.assign({
      margin: "15px 0",
      fontSize: (_a = theme.fontSize) === null || _a === void 0 ? void 0 : _a.timestamp,
      fontWeight: (_b = theme.fontWeight) === null || _b === void 0 ? void 0 : _b.timestamp,
      color: (_c = theme.textColor) === null || _c === void 0 ? void 0 : _c.timestamp,
      textAlign: "center"
    }, {
      children: timestampDate
    }));
  };

  return jsxs(ChatViewListCard, Object.assign({
    overflow: "hidden scroll",
    flexDirection: "column",
    ref: listInnerRef,
    width: "100%",
    justifyContent: "start",
    padding: "0 2px",
    theme: theme,
    blur: ifBlurChat(),
    onScroll: e => {
      e.stopPropagation();
      onScroll();
    }
  }, {
    children: [loading ? jsx(Spinner, {
      color: theme.spinnerColor
    }) : '', !loading && jsxs(Fragment, {
      children: [chatFeed && (chatFeed.publicKey || (chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation) && !((_a = chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation) === null || _a === void 0 ? void 0 : _a.isPublic)) ? jsx(EncryptionMessage, {
        id: ENCRYPTION_KEYS.ENCRYPTED
      }) : jsx(EncryptionMessage, {
        id: (chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation) ? ENCRYPTION_KEYS.NO_ENCRYPTED_GROUP : ENCRYPTION_KEYS.NO_ENCRYPTED
      }), chatStatusText && jsx(Section, Object.assign({
        margin: "20px 0 0 0"
      }, {
        children: jsx(Span$1, Object.assign({
          fontSize: "13px",
          color: (_b = theme.textColor) === null || _b === void 0 ? void 0 : _b.encryptionMessageText,
          fontWeight: "400"
        }, {
          children: chatStatusText
        }))
      })), messageLoading ? jsx(Spinner, {
        color: theme.spinnerColor
      }) : '', !messageLoading && jsxs(Fragment, {
        children: [jsx(Section, Object.assign({
          flexDirection: "column",
          justifyContent: "start",
          width: "100%"
        }, {
          children: (messages === null || messages === void 0 ? void 0 : messages.messages) && ((_c = messages === null || messages === void 0 ? void 0 : messages.messages) === null || _c === void 0 ? void 0 : _c.map((chat, index) => {
            const dateNum = moment(chat.timestamp).format('L');
            const position = pCAIP10ToWallet(chat.fromDID).toLowerCase() !== (account === null || account === void 0 ? void 0 : account.toLowerCase()) ? 0 : 1;
            return jsxs(Fragment, {
              children: [dates.has(dateNum) ? null : renderDate({
                chat,
                dateNum
              }), jsx(Section, Object.assign({
                justifyContent: position ? 'end' : 'start',
                margin: "7px"
              }, {
                children: jsx(ChatViewBubble, {
                  decryptedMessagePayload: chat
                }, index)
              }))]
            });
          }))
        })), chatFeed && account && checkIfIntent({
          chat: chatFeed,
          account: account
        }) && jsx(ApproveRequestBubble, {
          chatFeed: chatFeed,
          chatId: chatId,
          setChatFeed: setChatFeed
        })]
      })]
    })]
  }));
}; //styles

const ChatViewListCard = /*#__PURE__*/styled(Section).withConfig({
  displayName: "ChatViewList__ChatViewListCard",
  componentId: "sc-1e83dab-0"
})(["&::-webkit-scrollbar-thumb{background:", ";border-radius:10px;}&::-webkit-scrollbar{width:5px;}", " overscroll-behavior:contain;scroll-behavior:smooth;"], props => props.theme.scrollbarColor, ({
  blur
}) => blur && `
  filter: blur(12px);
  `);

const CHAT_THEME_OPTIONS = {
  LIGHT: 'light',
  DARK: 'dark'
};
const MODAL_BACKGROUND_TYPE = {
  OVERLAY: 'OVERLAY',
  BLUR: 'BLUR',
  TRANSPARENT: 'TRANSPARENT'
};
const MODAL_POSITION_TYPE = {
  RELATIVE: 'RELATIVE',
  GLOBAL: 'GLOBAL'
};

const MoreDarkIcon = ({
  color,
  width,
  height
}) => {
  return jsxs("svg", Object.assign({
    width: width !== null && width !== void 0 ? width : "32",
    height: height !== null && height !== void 0 ? height : "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    cursor: "pointer"
  }, {
    children: [jsx("path", {
      d: "M16 10C17.1046 10 18 9.10457 18 8C18 6.89543 17.1046 6 16 6C14.8954 6 14 6.89543 14 8C14 9.10457 14.8954 10 16 10Z",
      fill: color !== null && color !== void 0 ? color : "#787E99"
    }), jsx("path", {
      d: "M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z",
      fill: color !== null && color !== void 0 ? color : "#787E99"
    }), jsx("path", {
      d: "M16 26C17.1046 26 18 25.1046 18 24C18 22.8954 17.1046 22 16 22C14.8954 22 14 22.8954 14 24C14 25.1046 14.8954 26 16 26Z",
      fill: color !== null && color !== void 0 ? color : "#787E99"
    })]
  }));
};

const AddUserDarkIcon = () => {
  return jsxs("svg", Object.assign({
    width: "49",
    height: "21",
    viewBox: "0 0 49 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    cursor: "pointer"
  }, {
    children: [jsx("rect", {
      width: "49",
      height: "21",
      rx: "6",
      fill: "#282A2E"
    }), jsx("path", {
      d: "M13.86 14L10.656 5.6H9.348L6.084 14H7.428L8.076 12.26H11.868L12.516 14H13.86ZM9.972 7.208L11.424 11.096H8.52L9.972 7.208ZM19.0121 9.056C18.5201 8.648 17.8841 8.42 17.2361 8.42C15.6281 8.42 14.3561 9.68 14.3561 11.276C14.3561 12.884 15.6281 14.132 17.2361 14.132C17.8841 14.132 18.5201 13.904 19.0121 13.496V14H20.1521V5.6H19.0121V9.056ZM17.2841 13.028C16.2881 13.028 15.5561 12.284 15.5561 11.276C15.5561 10.268 16.2881 9.524 17.2841 9.512C18.2681 9.524 19.0121 10.268 19.0121 11.276C19.0121 12.284 18.2681 13.028 17.2841 13.028ZM26.1371 9.056C25.6451 8.648 25.0091 8.42 24.3611 8.42C22.7531 8.42 21.4811 9.68 21.4811 11.276C21.4811 12.884 22.7531 14.132 24.3611 14.132C25.0091 14.132 25.6451 13.904 26.1371 13.496V14H27.2771V5.6H26.1371V9.056ZM24.4091 13.028C23.4131 13.028 22.6811 12.284 22.6811 11.276C22.6811 10.268 23.4131 9.524 24.4091 9.512C25.3931 9.524 26.1371 10.268 26.1371 11.276C26.1371 12.284 25.3931 13.028 24.4091 13.028Z",
      fill: "white"
    }), jsx("path", {
      d: "M41.9062 10.5C41.9062 10.6243 41.8569 10.7435 41.769 10.8315C41.681 10.9194 41.5618 10.9688 41.4375 10.9688H38.4688V13.9375C38.4688 14.0618 38.4194 14.181 38.3315 14.269C38.2435 14.3569 38.1243 14.4062 38 14.4062C37.8757 14.4062 37.7565 14.3569 37.6685 14.269C37.5806 14.181 37.5312 14.0618 37.5312 13.9375V10.9688H34.5625C34.4382 10.9688 34.319 10.9194 34.231 10.8315C34.1431 10.7435 34.0938 10.6243 34.0938 10.5C34.0938 10.3757 34.1431 10.2565 34.231 10.1685C34.319 10.0806 34.4382 10.0312 34.5625 10.0312H37.5312V7.0625C37.5312 6.93818 37.5806 6.81895 37.6685 6.73104C37.7565 6.64314 37.8757 6.59375 38 6.59375C38.1243 6.59375 38.2435 6.64314 38.3315 6.73104C38.4194 6.81895 38.4688 6.93818 38.4688 7.0625V10.0312H41.4375C41.5618 10.0312 41.681 10.0806 41.769 10.1685C41.8569 10.2565 41.9062 10.3757 41.9062 10.5Z",
      fill: "white"
    })]
  }));
};

function Dropdown({
  dropdownValues,
  textColor,
  iconFilter,
  hoverBGColor
}) {
  const theme = useContext(ThemeContext);

  const getTextColor = dropdownValue => {
    var _a;

    return dropdownValue.textColor ? dropdownValue.textColor : textColor ? textColor : (_a = theme.textColor) === null || _a === void 0 ? void 0 : _a.modalSubHeadingText;
  };

  const copyToClipboard = address => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(address);
    } else {
      const el = document.createElement('textarea');
      el.value = address;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
  };

  return jsx(Fragment, {
    children: dropdownValues.map(dropdownValue => {
      var _a;

      return (dropdownValue === null || dropdownValue === void 0 ? void 0 : dropdownValue.id) === 'walletAddress' ? jsxs(Section, Object.assign({
        background: "linear-gradient(87.17deg, #B6A0F5 0%, #F46EF7 57.29%, #FF95D5 100%)",
        // flexDirection='column'
        borderRadius: "17px",
        padding: "2px 12px",
        // wrap="nowrap"
        margin: "0px 0 8px 0",
        width: "100%",
        style: {
          cursor: 'pointer'
        },
        onClick: () => {
          dropdownValue === null || dropdownValue === void 0 ? void 0 : dropdownValue.function(); // setshowDropdown?(false): true
        }
      }, {
        children: [jsxs(Span$1, Object.assign({
          margin: "11px 22px 11px 2px",
          fontWeight: "400",
          fontSize: "14px",
          textTransform: "uppercase",
          color: "#fff",
          textAlign: "start",
          letterSpacing: "1px",
          width: "100%"
        }, {
          children: [jsx(DesktopAddress, {
            children: dropdownValue === null || dropdownValue === void 0 ? void 0 : dropdownValue.title
          }), jsx(MobileAddress, {
            children: shortenText(dropdownValue === null || dropdownValue === void 0 ? void 0 : dropdownValue.title, 6)
          })]
        })), (dropdownValue === null || dropdownValue === void 0 ? void 0 : dropdownValue.invertedIcon) && jsx(Image$1, {
          src: dropdownValue.invertedIcon,
          alt: "icon",
          width: "auto",
          cursor: "pointer",
          filter: "brightness(0) invert(1)",
          onClick: () => {
            copyToClipboard((dropdownValue === null || dropdownValue === void 0 ? void 0 : dropdownValue.value) || '');
          }
        }), (dropdownValue === null || dropdownValue === void 0 ? void 0 : dropdownValue.icon) && jsx(Image$1, {
          src: dropdownValue.icon,
          alt: "icon",
          width: "auto",
          cursor: "pointer",
          onClick: () => {
            copyToClipboard((dropdownValue === null || dropdownValue === void 0 ? void 0 : dropdownValue.value) || '');
          }
        })]
      })) : jsxs(DropdownItemContainer, Object.assign({
        hoverBGColor: hoverBGColor,
        onClick: () => dropdownValue === null || dropdownValue === void 0 ? void 0 : dropdownValue.function()
      }, {
        children: [(dropdownValue === null || dropdownValue === void 0 ? void 0 : dropdownValue.invertedIcon) && jsx(Image$1, {
          src: dropdownValue.invertedIcon,
          alt: "icon",
          width: "100%",
          // spacing="1px"
          filter: iconFilter ? iconFilter : (_a = theme.textColor) === null || _a === void 0 ? void 0 : _a.modalSubHeadingText
        }), (dropdownValue === null || dropdownValue === void 0 ? void 0 : dropdownValue.icon) && jsx(Image$1, {
          src: dropdownValue.icon,
          alt: "icon",
          width: "24px",
          cursor: "pointer"
        }), !(dropdownValue === null || dropdownValue === void 0 ? void 0 : dropdownValue.link) && jsx(Span$1 // width="100%"
        , Object.assign({
          // width="100%"
          color: getTextColor(dropdownValue),
          textAlign: "start",
          margin: "8px 10px",
          fontWeight: "400",
          fontSize: "15px",
          cursor: "pointer"
        }, {
          children: dropdownValue.title
        })), (dropdownValue === null || dropdownValue === void 0 ? void 0 : dropdownValue.link) && jsx(A, Object.assign({
          href: dropdownValue === null || dropdownValue === void 0 ? void 0 : dropdownValue.link,
          target: "_blank",
          rel: "nofollow",
          color: getTextColor(dropdownValue)
        }, {
          children: dropdownValue.title
        }))]
      }));
    })
  });
} // css styles


const SpanAddress = /*#__PURE__*/styled(Span$1).withConfig({
  displayName: "DropDown__SpanAddress",
  componentId: "sc-1x3mmiu-0"
})(["margin:11px 22px 11px 2px;font-weight:400;size:14px;text-transform:uppercase;color:#fff;spacing:1px;width:100%;"]);
const MobileAddress = /*#__PURE__*/styled(SpanAddress).withConfig({
  displayName: "DropDown__MobileAddress",
  componentId: "sc-1x3mmiu-1"
})(["@media (min-width:993px){display:none;}"]);
const DesktopAddress = /*#__PURE__*/styled(SpanAddress).withConfig({
  displayName: "DropDown__DesktopAddress",
  componentId: "sc-1x3mmiu-2"
})(["@media (max-width:992px){display:none;}"]);
const DropdownItemContainer = /*#__PURE__*/styled(Section).withConfig({
  displayName: "DropDown__DropdownItemContainer",
  componentId: "sc-1x3mmiu-3"
})(["justify-content:flex-start;flex-wrap:nowrap;white-space:nowrap;margin:1px 0;padding:2px 8px;border-radius:12px;cursor:pointer;text-align:left;span{text-wrap:nowrap;}&:hover{background-color:", ";}"], props => props.hoverBGColor || 'none');
const A = /*#__PURE__*/styled.a.withConfig({
  displayName: "DropDown__A",
  componentId: "sc-1x3mmiu-4"
})(["margin:8px 10px;font-weight:400;font-size:16px;width:max-content;background:", ";z-index:11;&:hover{background:transparent !important;}"], props => props.color);

var img$i = "data:image/svg+xml,%3csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4.1875 3L27.8125 29' stroke='%23787E99' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M23.4375 24.1875C20.75 27.2625 17.3375 28.5625 16.3125 28.9C16.1109 28.9747 15.8891 28.9747 15.6875 28.9C13.9125 28.3125 5 24.8375 5 14.3375V7C5 6.73478 5.10536 6.48043 5.29289 6.29289C5.48043 6.10536 5.73478 6 6 6H6.9125' stroke='%23787E99' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M12.3125 6H26C26.2652 6 26.5196 6.10536 26.7071 6.29289C26.8946 6.48043 27 6.73478 27 7V14.3375C27 16.85 26.4875 18.95 25.6875 20.7125' stroke='%23787E99' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e";

var img$h = "data:image/svg+xml,%3csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1 9.3375V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H22C22.2652 1 22.5196 1.10536 22.7071 1.29289C22.8946 1.48043 23 1.73478 23 2V9.3375C23 19.8375 14.0875 23.3125 12.3125 23.9C12.1109 23.9747 11.8891 23.9747 11.6875 23.9C9.9125 23.3125 1 19.8375 1 9.3375Z' stroke='%23657795' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e";

var img$g = "data:image/svg+xml,%3csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z' stroke='%23E93636' stroke-width='2' stroke-miterlimit='10'/%3e%3cpath d='M11 16H21' stroke='%23E93636' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e";

const findObject = (data, parentArray, property) => {
  let isPresent = false;

  if (data) {
    parentArray.map(value => {
      if (value[property] == data[property]) {
        isPresent = true;
      }
    });
  }

  return isPresent;
};
const MemberAlreadyPresent = (member, groupMembers) => {
  const memberCheck = groupMembers === null || groupMembers === void 0 ? void 0 : groupMembers.find(x => {
    var _a, _b;

    return ((_a = x.wallet) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == ((_b = member.wallets) === null || _b === void 0 ? void 0 : _b.toLowerCase());
  });

  if (memberCheck) {
    return true;
  }

  return false;
};
const addWalletValidation = (member, memberList, groupMembers, account) => {
  var _a, _b;

  const checkIfMemberisAlreadyPresent = MemberAlreadyPresent(member, groupMembers);
  let errorMessage = '';

  if (checkIfMemberisAlreadyPresent) {
    errorMessage = "This Member is Already present in the group";
  }

  if ((memberList === null || memberList === void 0 ? void 0 : memberList.length) + (groupMembers === null || groupMembers === void 0 ? void 0 : groupMembers.length) >= 9) {
    errorMessage = 'No More Addresses can be added';
  }

  if ((memberList === null || memberList === void 0 ? void 0 : memberList.length) >= 9) {
    errorMessage = 'No More Addresses can be added';
  }

  if (findObject(member, memberList, 'wallets')) {
    errorMessage = 'Address is already added';
  }

  if (((_a = member === null || member === void 0 ? void 0 : member.wallets) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === ((_b = walletToPCAIP10(account)) === null || _b === void 0 ? void 0 : _b.toLowerCase())) {
    errorMessage = 'Group Creator cannot be added as Member';
  }

  return errorMessage;
};
function isValidETHAddress(address) {
  return ethers.utils.isAddress(address);
}
const checkIfMember = (chatFeed, account) => {
  var _a, _b;

  const members = ((_a = chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation) === null || _a === void 0 ? void 0 : _a.members) || [];
  const pendingMembers = ((_b = chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation) === null || _b === void 0 ? void 0 : _b.pendingMembers) || [];
  const allMembers = [...members, ...pendingMembers];
  let isMember = false;
  allMembers.forEach(acc => {
    if (acc.wallet.toLowerCase() === walletToPCAIP10(account).toLowerCase()) {
      isMember = true;
    }
  });
  return isMember;
};
const checkIfAccessVerifiedGroup = chatFeed => {
  var _a, _b, _c, _d, _e;

  let isRules = false;

  if (((_a = chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation) === null || _a === void 0 ? void 0 : _a.rules) && (((_c = (_b = chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation) === null || _b === void 0 ? void 0 : _b.rules) === null || _c === void 0 ? void 0 : _c.entry) || ((_e = (_d = chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation) === null || _d === void 0 ? void 0 : _d.rules) === null || _e === void 0 ? void 0 : _e.chat))) {
    isRules = true;
  }

  return isRules;
};

const ChatSearchInput = ({
  handleSearch,
  clearInput,
  customStyle: _customStyle = null,
  placeholder
}) => {
  var _a, _b;

  const theme = useContext(ThemeContext);
  const [searchedText, setSearchedText] = useState('');
  const [loading, setLoading] = useState(false);

  const onChangeSearchText = val => {
    setSearchedText(val);
  };

  React__default.useEffect(() => {
    setLoading(true);
    const getData = setTimeout(() => {
      onSearch();
      setLoading(false);
    }, 2000);
    return () => clearTimeout(getData);
  }, [searchedText]);

  const onSearch = () => {
    if (searchedText.trim() !== '') {
      handleSearch({
        searchedText
      });
    } else {
      clearInput();
    }
  };

  return jsx(Container$2, Object.assign({
    justifyContent: "space-between",
    margin: "4px 0",
    gap: "15px",
    width: "100%",
    alignItems: "center"
  }, {
    children: jsxs(InputSection, Object.assign({
      theme: theme,
      width: "100%",
      background: (_customStyle === null || _customStyle === void 0 ? void 0 : _customStyle.background) ? _customStyle.background : (_a = theme.backgroundColor) === null || _a === void 0 ? void 0 : _a.searchInputBackground,
      padding: "8px 12px",
      borderRadius: (_customStyle === null || _customStyle === void 0 ? void 0 : _customStyle.borderRadius) ? _customStyle.borderRadius : (_b = theme.borderRadius) === null || _b === void 0 ? void 0 : _b.searchInput,
      customStyle: _customStyle
    }, {
      children: [jsx(Input$3, {
        theme: theme,
        customStyle: _customStyle,
        type: "text",
        value: searchedText,
        onChange: e => onChangeSearchText(e.target.value),
        placeholder: placeholder,
        onKeyDown: event => {
          if (event.key === 'Enter') {
            onSearch();
          }
        }
      }), jsxs(Span$1, {
        children: [!loading && !searchedText && jsx(Div, Object.assign({
          cursor: "pointer",
          width: "17.49px",
          height: "17.49px",
          onClick: () => onSearch()
        }, {
          children: jsx(SearchIcon, {})
        })), !loading && searchedText && jsx(Div, Object.assign({
          cursor: "pointer",
          onClick: () => {
            setSearchedText('');
            clearInput();
          },
          width: "17.49px",
          height: "17.49px"
        }, {
          children: jsx(CloseIcon, {})
        })), loading && jsx(Spinner, {
          size: "17.49",
          color: theme.spinnerColor
        })]
      })]
    }))
  }));
}; //styles

const Container$2 = /*#__PURE__*/styled(Section).withConfig({
  displayName: "ChatSearchInput__Container",
  componentId: "sc-i2ykdd-0"
})(["border-radius:4px;"]);
const InputSection = /*#__PURE__*/styled(Section).withConfig({
  displayName: "ChatSearchInput__InputSection",
  componentId: "sc-i2ykdd-1"
})(["border:", ";"], props => {
  var _a, _b;

  return ((_a = props.customStyle) === null || _a === void 0 ? void 0 : _a.border) ? props.customStyle.border : (_b = props.theme.border) === null || _b === void 0 ? void 0 : _b.searchInput;
});
const Input$3 = /*#__PURE__*/styled.input.withConfig({
  displayName: "ChatSearchInput__Input",
  componentId: "sc-i2ykdd-2"
})(["border:none;background:", ";width:100%;flex:1;margin-left:10px;font-style:normal;color:", ";font-weight:", ";font-size:", ";line-height:24px;&:focus{outline:none;background-origin:border;background-clip:padding-box,border-box;}&::placeholder{color:", ";font-weight:", ";font-size:", ";}"], props => {
  var _a, _b;

  return ((_a = props.customStyle) === null || _a === void 0 ? void 0 : _a.background) ? props.customStyle.background : (_b = props.theme.backgroundColor) === null || _b === void 0 ? void 0 : _b.searchInputBackground;
}, props => {
  var _a, _b;

  return ((_a = props.customStyle) === null || _a === void 0 ? void 0 : _a.color) ? props.customStyle.color : (_b = props.theme.textColor) === null || _b === void 0 ? void 0 : _b.searchInputText;
}, props => {
  var _a, _b;

  return ((_a = props.customStyle) === null || _a === void 0 ? void 0 : _a.fontWeight) ? props.customStyle.fontWeight : (_b = props.theme.fontWeight) === null || _b === void 0 ? void 0 : _b.searchInputText;
}, props => {
  var _a, _b;

  return ((_a = props.customStyle) === null || _a === void 0 ? void 0 : _a.fontSize) ? props.customStyle.fontSize : (_b = props.theme.fontSize) === null || _b === void 0 ? void 0 : _b.searchInputText;
}, props => {
  var _a, _b;

  return ((_a = props.customStyle) === null || _a === void 0 ? void 0 : _a.placeholderColor) ? props.customStyle.placeholderColor : (_b = props.theme.textColor) === null || _b === void 0 ? void 0 : _b.searchPlaceholderText;
}, props => {
  var _a, _b;

  return ((_a = props.customStyle) === null || _a === void 0 ? void 0 : _a.fontWeight) ? props.customStyle.fontWeight : (_b = props.theme.fontWeight) === null || _b === void 0 ? void 0 : _b.searchInputText;
}, props => {
  var _a, _b;

  return ((_a = props.customStyle) === null || _a === void 0 ? void 0 : _a.fontSize) ? props.customStyle.fontSize : (_b = props.theme.fontSize) === null || _b === void 0 ? void 0 : _b.searchInputText;
});

const ProfileContainer = ({
  theme,
  member,
  customStyle
}) => {
  var _a, _b, _c, _d, _e, _f;

  return jsxs(Section, Object.assign({
    justifyContent: "flex-start"
  }, {
    children: [jsx(Section, Object.assign({
      height: (_a = customStyle === null || customStyle === void 0 ? void 0 : customStyle.imgHeight) !== null && _a !== void 0 ? _a : '48px',
      maxWidth: "48px",
      borderRadius: "100%",
      overflow: "hidden",
      margin: "0px 12px 0px 0px",
      position: "relative"
    }, {
      children: jsx(Image$1, {
        height: (_b = customStyle === null || customStyle === void 0 ? void 0 : customStyle.imgHeight) !== null && _b !== void 0 ? _b : '48px',
        maxHeight: (_c = customStyle === null || customStyle === void 0 ? void 0 : customStyle.imgMaxHeight) !== null && _c !== void 0 ? _c : '48px',
        width: 'auto',
        cursor: "pointer",
        src: member === null || member === void 0 ? void 0 : member.image
      })
    })), jsx(Span$1, Object.assign({
      fontSize: (_d = customStyle === null || customStyle === void 0 ? void 0 : customStyle.fontSize) !== null && _d !== void 0 ? _d : '18px',
      fontWeight: (_e = customStyle === null || customStyle === void 0 ? void 0 : customStyle.fontWeight) !== null && _e !== void 0 ? _e : '400',
      color: (_f = theme.textColor) === null || _f === void 0 ? void 0 : _f.modalSubHeadingText,
      position: "relative"
    }, {
      children: member.wallet
    }))]
  }));
};

var img$f = "data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M15.625 4.375L4.375 15.625' stroke='%23657795' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M15.0799 15.4442L4.375 4.375' stroke='%23657795' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e";

const ClickawayCloseModal = ({
  children,
  clickawayClose,
  width
}) => {
  const modalRef = useRef(null);
  const theme = useContext(ThemeContext);
  useClickAway(modalRef, () => {
    if (clickawayClose) {
      clickawayClose();
    }
  });
  return jsx(ModalParent, Object.assign({
    ref: modalRef,
    width: width,
    theme: theme
  }, {
    children: children
  }));
};

const Modal = ({
  clickawayClose,
  children,
  width,
  modalBackground: _modalBackground = MODAL_BACKGROUND_TYPE.OVERLAY,
  modalPositionType: _modalPositionType = MODAL_POSITION_TYPE.GLOBAL
}) => {
  const theme = useContext(ThemeContext);
  return jsx(ModalOverlay, Object.assign({
    theme: theme,
    modalBackground: _modalBackground,
    modalPositionType: _modalPositionType
  }, {
    children: clickawayClose ? jsx(ClickawayCloseModal, Object.assign({
      clickawayClose: clickawayClose,
      width: width
    }, {
      children: children
    })) : jsx(ModalParent, Object.assign({
      width: width,
      theme: theme
    }, {
      children: children
    }))
  }));
};
const ModalHeader = ({
  handlePrevious,
  handleClose,
  title
}) => {
  var _a;

  const theme = useContext(ThemeContext);
  return jsxs(Section, Object.assign({
    justifyContent: "center",
    alignItems: "center",
    width: '100%'
  }, {
    children: [handlePrevious && jsx(Span$1, Object.assign({
      onClick: () => handlePrevious(),
      cursor: "pointer"
    }, {
      children: jsx(BackIcon, {})
    })), jsx(Span$1, Object.assign({
      fontWeight: "500",
      fontSize: "24px",
      color: (_a = theme.textColor) === null || _a === void 0 ? void 0 : _a.modalHeadingText,
      flex: "1"
    }, {
      children: title
    })), handleClose && jsx(Image$1, {
      src: img$f,
      height: "24px",
      maxHeight: "24px",
      width: 'auto',
      onClick: () => handleClose(),
      cursor: "pointer"
    }), ' ']
  }));
};
/* styling */

const ModalOverlay = /*#__PURE__*/styled.div.withConfig({
  displayName: "Modal__ModalOverlay",
  componentId: "sc-fq4i0y-0"
})(["position:", ";top:0;left:0;right:0;bottom:0;width:100%;height:100%;backdrop-filter:", ";background-color:", ";display:flex;color:", ";justify-content:center;align-items:center;z-index:2000;max-height:100vh;overflow-y:auto;margin:auto !important;"], props => props.modalPositionType === MODAL_POSITION_TYPE.GLOBAL ? 'fixed' : 'absolute', props => props.modalBackground === MODAL_BACKGROUND_TYPE.BLUR ? 'blur(3px)' : 'none', props => props.modalBackground === MODAL_BACKGROUND_TYPE.OVERLAY ? 'rgba(0, 0, 0, 0.5)' : ' transparent', props => {
  var _a;

  return (_a = props.theme.textColor.modalHeadingText) !== null && _a !== void 0 ? _a : '#000';
});
const ModalParent = /*#__PURE__*/styled.div.withConfig({
  displayName: "Modal__ModalParent",
  componentId: "sc-fq4i0y-1"
})(["display:flex;flex-direction:column;align-items:center;padding:24px 20px;max-height:75vh;background:", ";border-radius:", ";width:", ";margin:auto !important;@media (max-width:425px){min-width:300px;}"], props => {
  var _a;

  return (_a = props.theme.backgroundColor) === null || _a === void 0 ? void 0 : _a.modalBackground;
}, props => {
  var _a;

  return (_a = props.theme.borderRadius) === null || _a === void 0 ? void 0 : _a.modal;
}, props => props.width ? props.width : 'auto');

const LoaderToast = ({
  msg,
  loaderColor,
  textColor
}) => jsxs(LoaderNotification, {
  children: [jsx(Spinner$1, {
    color: loaderColor,
    size: '35px'
  }), jsx(LoaderMessage, Object.assign({
    style: {
      color: textColor
    }
  }, {
    children: msg
  }))]
});

const CloseButton = ({
  closeToast
}) => jsx(Button$1, Object.assign({
  onClick: closeToast
}, {
  children: jsx(MdOutlineClose, {
    color: "#657795",
    size: "100%"
  })
}));

const useToast = (autoClose = 3000, position = 'top-right') => {
  const toastId = useRef(null);
  const theme = useContext(ThemeContext);
  const isMobile = useMediaQuery(device.tablet);
  let isLoaderToastShown = false;

  const showLoaderToast = ({
    loaderMessage
  }) => {
    var _a, _b, _c;

    isLoaderToastShown = true;
    return toastId.current = toast(jsx(ThemeProvider, Object.assign({
      theme: theme
    }, {
      children: jsx(LoaderToast, {
        msg: loaderMessage,
        loaderColor: theme.spinnerColor,
        textColor: theme.textColor.modalHeadingText
      })
    })), {
      position,
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      closeButton: false,
      style: {
        background: (_a = theme.backgroundColor) === null || _a === void 0 ? void 0 : _a.modalBackground,
        border: (_b = theme.border) === null || _b === void 0 ? void 0 : _b.modalInnerComponents,
        boxShadow: `8px 8px 8px ${(_c = theme.backgroundColor) === null || _c === void 0 ? void 0 : _c.toastShadowBackground}`,
        borderRadius: '20px'
      }
    });
  };

  const showMessageToast = ({
    toastTitle,
    toastMessage,
    toastType,
    getToastIcon
  }) => {
    var _a, _b, _c, _d, _e;

    const toastUI = jsxs(Toast, {
      children: [jsx(ToastIcon, {
        children: getToastIcon ? getToastIcon(30) : ''
      }), jsxs(ToastContent, {
        children: [jsx(ToastTitle, Object.assign({
          style: {
            color: (_a = theme.textColor) === null || _a === void 0 ? void 0 : _a.modalHeadingText
          }
        }, {
          children: toastTitle
        })), jsx(ToastMessage, Object.assign({
          style: {
            color: (_b = theme.textColor) === null || _b === void 0 ? void 0 : _b.modalSubHeadingText
          }
        }, {
          children: toastMessage
        }))]
      })]
    });

    const toastRenderParams = {
      position,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: toast.TYPE.DEFAULT,
      closeButton: CloseButton,
      autoClose: autoClose,
      style: {
        background: toastType === 'SUCCESS' ? (_c = theme.backgroundColor) === null || _c === void 0 ? void 0 : _c.toastSuccessBackground : (_d = theme.backgroundColor) === null || _d === void 0 ? void 0 : _d.toastErrorBackground,
        boxShadow: `10px 10px 10px ${(_e = theme.backgroundColor) === null || _e === void 0 ? void 0 : _e.toastShadowBackground}`,
        borderRadius: '20px',
        margin: isMobile ? '20px' : '0px'
      }
    };

    if (!isLoaderToastShown) {
      // render a new toast
      toastId.current = toast(toastUI, Object.assign({}, toastRenderParams));
    } // update the old toast


    toast.update(toastId.current, Object.assign({
      render: toastUI
    }, toastRenderParams));
  };

  return {
    showLoaderToast,
    showMessageToast
  };
};

const LoaderNotification = /*#__PURE__*/styled.div.withConfig({
  displayName: "NewToast__LoaderNotification",
  componentId: "sc-1y55fqo-0"
})(["display:flex;flex-direction:row;align-items:center;justify-content:center;margin:1% 3%;"]);
const LoaderMessage = /*#__PURE__*/styled.div.withConfig({
  displayName: "NewToast__LoaderMessage",
  componentId: "sc-1y55fqo-1"
})(["margin-left:3%;font-size:1rem;font-weight:600;line-height:1.3rem;letter-spacing:0em;text-align:left;"]);
const Toast = /*#__PURE__*/styled.div.withConfig({
  displayName: "NewToast__Toast",
  componentId: "sc-1y55fqo-2"
})(["display:flex;flex-direction:row;align-items:flex-start;margin:1.5% 1%;"]);
const ToastIcon = /*#__PURE__*/styled.div.withConfig({
  displayName: "NewToast__ToastIcon",
  componentId: "sc-1y55fqo-3"
})(["width:15%;margin-right:4%;"]);
const ToastContent = /*#__PURE__*/styled.div.withConfig({
  displayName: "NewToast__ToastContent",
  componentId: "sc-1y55fqo-4"
})(["display:flex;flex-direction:column;align-items:flex-start;"]);
const ToastTitle = /*#__PURE__*/styled.div.withConfig({
  displayName: "NewToast__ToastTitle",
  componentId: "sc-1y55fqo-5"
})(["font-weight:500;font-size:1.125rem;letter-spacing:-0.019em;line-height:1.4rem;letter-spacing:0em;text-align:left;margin-bottom:1%;"]);
const ToastMessage = /*#__PURE__*/styled.div.withConfig({
  displayName: "NewToast__ToastMessage",
  componentId: "sc-1y55fqo-6"
})(["font-weight:400;font-size:0.9375rem;line-height:1.3rem;text-align:left;"]);
const Button$1 = /*#__PURE__*/styled.button.withConfig({
  displayName: "NewToast__Button",
  componentId: "sc-1y55fqo-7"
})(["cursor:pointer;background:none;margin:0;padding:0;width:1.3rem;height:1.3rem;border:none;"]);

const TextInput = props => {
  const theme = useContext(ThemeContext);

  const handleChange = event => {
    if (props.charCount) {
      const newText = event.target.value;
      const count = newText.length;

      if (count <= props.charCount) {
        props.onInputChange(event);
      }
    } else {
      props.onInputChange(event);
    }
  };

  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsxs(InputContainer$1, {
      children: [jsxs(LabelContainer$5, {
        children: [jsx("label", {
          children: props.labelName
        }), props.charCount && jsxs(CharCounter$1, Object.assign({
          theme: theme
        }, {
          children: [props.inputValue.length, " / ", props.charCount]
        }))]
      }), jsx(Input$2, {
        customStyle: props.customStyle,
        disabled: !!props.disabled,
        theme: theme,
        error: props.error || false,
        value: props.inputValue,
        onChange: handleChange,
        placeholder: props.placeholder
      })]
    })
  }));
};
/* styling */

const InputContainer$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "TextInput__InputContainer",
  componentId: "sc-dumje7-0"
})(["display:flex;flex-direction:column;width:100%;font-family:", ";"], props => props.theme.fontFamily);
const LabelContainer$5 = /*#__PURE__*/styled.div.withConfig({
  displayName: "TextInput__LabelContainer",
  componentId: "sc-dumje7-1"
})(["display:flex;justify-content:space-between;font-weight:500;font-size:16px;color:", ";"], props => {
  var _a, _b;

  return (_b = (_a = props.theme.textColor) === null || _a === void 0 ? void 0 : _a.modalHeadingText) !== null && _b !== void 0 ? _b : '#000';
});
const Input$2 = /*#__PURE__*/styled.input.withConfig({
  displayName: "TextInput__Input",
  componentId: "sc-dumje7-2"
})(["padding:16px;margin-top:8px;color:", ";background:", ";border:", ";border-radius:", ";font-family:", ";font-size:16px;font-weight:500;[readonly='readonly']{pointer-events:none;}&:focus{border:1px solid #ffdbf0;}"], props => {
  var _a, _b;

  return (_b = (_a = props.theme.textColor) === null || _a === void 0 ? void 0 : _a.modalHeadingText) !== null && _b !== void 0 ? _b : '#000';
}, props => {
  var _a;

  return ((_a = props.customStyle) === null || _a === void 0 ? void 0 : _a.background) ? props.customStyle.background : props.theme.backgroundColor.modalInputBackground;
}, props => props.error ? ' 1px solid #ED5858' : props.theme.border.modalInnerComponents, props => props.theme.borderRadius.modalInnerComponents, props => props.theme.fontFamily);
const CharCounter$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "TextInput__CharCounter",
  componentId: "sc-dumje7-3"
})(["color:", ";font-size:14px;font-weight:400;"], props => {
  var _a;

  return (_a = props.theme.textColor) === null || _a === void 0 ? void 0 : _a.modalSubHeadingText;
});

const ToggleInput = props => {
  var _a, _b;

  const theme = useContext(ThemeContext);
  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsxs(ToggleContainer, {
      children: [jsxs(LabelContainer$4, {
        children: [jsx(Label, Object.assign({
          textColor: (_a = theme.textColor) === null || _a === void 0 ? void 0 : _a.modalHeadingText
        }, {
          children: props.labelHeading
        })), jsx(Label, Object.assign({
          textColor: (_b = theme.textColor) === null || _b === void 0 ? void 0 : _b.modalSubHeadingText,
          fontSize: '12px',
          fontWeight: '400'
        }, {
          children: props.labelSubHeading
        }))]
      }), jsxs(ToggleLabel, Object.assign({
        htmlFor: "checkbox"
      }, {
        children: [jsx("input", {
          type: "checkbox",
          id: "checkbox",
          checked: props.checked,
          onChange: () => props.onToggle()
        }), jsx("div", {
          className: "slider round"
        })]
      }))]
    })
  }));
};
/* styling */

const ToggleContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "ToggleInput__ToggleContainer",
  componentId: "sc-dj907w-0"
})(["display:flex;justify-content:space-between;width:100%;gap:10px;font-family:", ";align-items:center;"], props => props.theme.fontFamily);
const LabelContainer$4 = /*#__PURE__*/styled.div.withConfig({
  displayName: "ToggleInput__LabelContainer",
  componentId: "sc-dj907w-1"
})(["display:flex;flex-direction:column;gap:4px;width:73%;"]);
const Label = /*#__PURE__*/styled.label.withConfig({
  displayName: "ToggleInput__Label",
  componentId: "sc-dj907w-2"
})(["font-size:", ";font-weight:", ";color:", ";"], props => {
  var _a;

  return (_a = props.fontSize) !== null && _a !== void 0 ? _a : '16px';
}, props => {
  var _a;

  return (_a = props.fontWeight) !== null && _a !== void 0 ? _a : '500';
}, props => {
  var _a;

  return (_a = props.textColor) !== null && _a !== void 0 ? _a : '#000';
});
const ToggleLabel = /*#__PURE__*/styled.label.withConfig({
  displayName: "ToggleInput__ToggleLabel",
  componentId: "sc-dj907w-3"
})(["display:inline-block;height:24px;position:relative;width:44px;padding:2px;input{display:none;}.slider{background-color:#ccc;bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0;transition:0.4s;}.slider:before{background-color:#fff;bottom:4px;content:'';height:20px;left:4px;position:absolute;transition:0.4s;width:20px;}input:checked + .slider{background-color:", ";}input:checked + .slider:before{transform:translateX(20px);}.slider.round{border-radius:34px;}.slider.round:before{border-radius:50%;}"], props => props.theme.backgroundColor.buttonBackground);

const DropDownInput = props => {
  var _a;

  const theme = useContext(ThemeContext);
  const [showDropdown, setshowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const {
    selectedValue,
    dropdownValues,
    labelName,
    error
  } = props; // useClickAway(dropdownRef, ()=> setshowDropdown(!showDropdown));

  const closeDropdown = () => {
    setshowDropdown(!showDropdown);
  };

  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsxs(DropdownContainer$3, {
      children: [jsx(LabelContainer$3, {
        children: jsx("label", {
          children: props.labelName
        })
      }), jsxs(DropdownDiv, Object.assign({
        ref: dropdownRef,
        onClick: closeDropdown,
        error: error || false
      }, {
        children: [jsxs(Span$1, Object.assign({
          margin: "0 7px 0 0"
        }, {
          children: [dropdownValues[selectedValue].title, ' ']
        })), jsx(ArrowImage$1, {
          src: img$m,
          width: 'auto',
          setPosition: !showDropdown,
          borderRadius: "100%"
        })]
      })), showDropdown && jsx(DropdownListContainer, Object.assign({
        theme: theme,
        onClick: closeDropdown
      }, {
        children: jsx(Dropdown, {
          dropdownValues: dropdownValues,
          hoverBGColor: (_a = theme.backgroundColor) === null || _a === void 0 ? void 0 : _a.modalHoverBackground
        })
      }))]
    })
  }));
}; //style

const DropdownContainer$3 = /*#__PURE__*/styled(Section).withConfig({
  displayName: "DropDownInput__DropdownContainer",
  componentId: "sc-10t42zf-0"
})(["display:flex;flex-direction:column;width:100%;z-index:unset;align-items:flex-start;font-family:", ";gap:8px;"], props => props.theme.fontFamily);
const LabelContainer$3 = /*#__PURE__*/styled.div.withConfig({
  displayName: "DropDownInput__LabelContainer",
  componentId: "sc-10t42zf-1"
})(["font-weight:400;font-size:16px;color:", ";"], props => {
  var _a, _b;

  return (_b = (_a = props.theme.textColor) === null || _a === void 0 ? void 0 : _a.modalHeadingText) !== null && _b !== void 0 ? _b : '#000';
});
const DropdownDiv = /*#__PURE__*/styled(Section).withConfig({
  displayName: "DropDownInput__DropdownDiv",
  componentId: "sc-10t42zf-2"
})(["padding:16px;display:flex;justify-content:space-between;align-items:center;background:", ";border:", ";border-radius:", ";font-family:", ";font-size:16px;span{white-space:nowrap;}font-weight:500;"], props => props.theme.backgroundColor.modalInputBackground, props => props.error ? ' 1px solid #ED5858' : props.theme.border.modalInnerComponents, props => props.theme.borderRadius.modalInnerComponents, props => props.theme.fontFamily);
const ArrowImage$1 = /*#__PURE__*/styled(Image$1).withConfig({
  displayName: "DropDownInput__ArrowImage",
  componentId: "sc-10t42zf-3"
})(["margin-left:auto;transform:", ";"], props => (props === null || props === void 0 ? void 0 : props.setPosition) ? 'rotate(0)' : 'rotate(180deg)');
const DropdownListContainer = /*#__PURE__*/styled(Section).withConfig({
  displayName: "DropDownInput__DropdownListContainer",
  componentId: "sc-10t42zf-4"
})(["position:absolute;width:96%;top:30%;right:0;border-radius:", ";padding:8px;z-index:100;display:flex;flex-direction:column !important;background:", ";border:", ";"], props => props.theme.borderRadius.modalInnerComponents, props => props.theme.backgroundColor.modalBackground, props => props.theme.border.modalInnerComponents);

const TextArea = props => {
  const theme = useContext(ThemeContext);

  const handleChange = event => {
    const newText = event.target.value;
    const count = newText.length;

    if (count <= props.charCount) {
      props.onInputChange(event);
    }
  };

  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsxs(InputContainer, {
      children: [jsxs(LabelContainer$2, {
        children: [jsx("label", {
          children: props.labelName
        }), jsxs(CharCounter, Object.assign({
          theme: theme
        }, {
          children: [props.inputValue.length, " / ", props.charCount]
        }))]
      }), jsx(Input$1, {
        error: props.error || false,
        theme: theme,
        value: props.inputValue,
        onChange: handleChange
      })]
    })
  }));
};
const InputContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "TextArea__InputContainer",
  componentId: "sc-1ku7ybj-0"
})(["display:flex;flex-direction:column;width:100%;font-family:", ";"], props => props.theme.fontFamily);
const LabelContainer$2 = /*#__PURE__*/styled.div.withConfig({
  displayName: "TextArea__LabelContainer",
  componentId: "sc-1ku7ybj-1"
})(["display:flex;justify-content:space-between;font-weight:500;color:", ";"], props => {
  var _a, _b;

  return (_b = (_a = props.theme.textColor) === null || _a === void 0 ? void 0 : _a.modalHeadingText) !== null && _b !== void 0 ? _b : '#000';
});
const Input$1 = /*#__PURE__*/styled.textarea.withConfig({
  displayName: "TextArea__Input",
  componentId: "sc-1ku7ybj-2"
})(["padding:16px;margin-top:8px;height:121px;color:", ";background:", ";border:", ";border-radius:", ";font-family:", ";font-size:14px;&:focus{border:1px solid #ffdbf0;}"], props => {
  var _a, _b;

  return (_b = (_a = props.theme.textColor) === null || _a === void 0 ? void 0 : _a.modalHeadingText) !== null && _b !== void 0 ? _b : '#000';
}, props => props.theme.backgroundColor.modalInputBackground, props => props.error ? ' 1px solid #ED5858' : props.theme.border.modalInnerComponents, props => props.theme.borderRadius.modalInnerComponents, props => props.theme.fontFamily);
const CharCounter = /*#__PURE__*/styled.div.withConfig({
  displayName: "TextArea__CharCounter",
  componentId: "sc-1ku7ybj-3"
})(["color:", ";font-size:14px;font-weight:400;"], props => {
  var _a;

  return (_a = props.theme.textColor) === null || _a === void 0 ? void 0 : _a.modalSubHeadingText;
});

const OptionDescripton = ({
  heading,
  subHeading,
  value
}) => {
  var _a, _b;

  const theme = useContext(ThemeContext);
  return jsxs(Fragment, {
    children: [jsx(Span$1, Object.assign({
      color: // selectedValue === value?
      // theme.textColor?.modalHeadingText
      // :
      (_a = theme.textColor) === null || _a === void 0 ? void 0 : _a.modalHeadingText,
      fontSize: "18px",
      fontWeight: "500"
    }, {
      children: heading
    })), jsx(Span$1, Object.assign({
      color: (_b = theme.textColor) === null || _b === void 0 ? void 0 : _b.modalSubHeadingText,
      fontWeight: "400",
      fontSize: "12px",
      width: '132px',
      lineHeight: '130%'
    }, {
      children: subHeading
    }))]
  });
};

const OptionButtons = ({
  options,
  selectedValue,
  handleClick,
  totalWidth: _totalWidth = '400px',
  error
}) => {
  const theme = useContext(ThemeContext);

  const getBorderWidth = index => {
    if (index === 0) return '1px 1px 1px 1px';
    if (index > 0 && index < options.length - 1) return '1px 1px 1px 0px';
    return '1px 1px 1px 0px';
  };

  const getBorderRadius = index => {
    if (index === 0) return '12px 0px 0px 12px';
    if (index > 0 && index < options.length - 1) return '0px';
    return '0px 12px 12px 0px';
  };

  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsx(ButtonContainer, {
      children: options.map((option, index) => {
        var _a;

        return jsx(ButtonSection, Object.assign({
          totalWidth: _totalWidth,
          noOfOptions: options.length,
          borderRadius: getBorderRadius(index),
          error: error || false,
          borderColor: theme.border.modalInnerComponents,
          borderWidth: getBorderWidth(index),
          background: selectedValue === option.value ? (_a = theme.backgroundColor) === null || _a === void 0 ? void 0 : _a.modalHoverBackground : 'none',
          onClick: () => {
            handleClick(option.value);
          }
        }, {
          children: jsx(OptionDescripton, Object.assign({}, option))
        }));
      })
    })
  }));
};
const ButtonContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "OptionButtons__ButtonContainer",
  componentId: "sc-3jtp97-0"
})(["display:flex;"]);
const ButtonSection = /*#__PURE__*/styled(Section).withConfig({
  displayName: "OptionButtons__ButtonSection",
  componentId: "sc-3jtp97-1"
})(["cursor:pointer;justify-content:center;align-items:center;gap:3px;width:", ";@media ", "{width:", ";}padding:10px;border:", ";border:", ";border-width:", ";border-style:solid;border-radius:", ";flex-direction:column;&:hover{background:", ";}"], props => `calc((${props.totalWidth} - 80px) / ${props.noOfOptions})`, device.mobileL, props => `calc(((${props.totalWidth} - 80px) / ${props.noOfOptions}) - 30px)`, props => props.borderColor, props => props.error ? '  #ED5858' : props.borderColor, props => props.borderWidth, props => props.borderRadius, props => props.theme.backgroundColor.modalHoverBackground);

/**
 * A button component.
 * @function Button
 * @param {IButtonProps} props - The props for the Button component.
 * @returns {JSX.Element} The rendered Button component.
 */

const Button = props => {
  const theme = useContext(ThemeContext);
  const {
    onClick,
    width,
    height,
    customStyle
  } = props;
  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsx(ChatButton, Object.assign({
      onClick: onClick,
      width: width,
      height: height,
      theme: theme,
      customStyle: customStyle
    }, {
      children: props.children
    }))
  }));
};
/* styling */

const ChatButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "Button__ChatButton",
  componentId: "sc-17z3e9-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;gap:'2px';padding:", ";margin-top:12px;background:", ";color:", ";border-radius:", ";border:", ";font-size:16px;font-weight:", ";font-family:", ";flex:none;order:0;flex-grow:0;transition:150ms ease-in-out;&:hover{cursor:pointer;}width:", ";height:", ";"], props => {
  var _a;

  return ((_a = props.customStyle) === null || _a === void 0 ? void 0 : _a.padding) ? props.customStyle.padding : '16px';
}, props => {
  var _a;

  return ((_a = props.customStyle) === null || _a === void 0 ? void 0 : _a.background) ? props.customStyle.background : props.theme.backgroundColor.buttonBackground;
}, props => {
  var _a;

  return ((_a = props.customStyle) === null || _a === void 0 ? void 0 : _a.color) ? props.customStyle.color : props.theme.textColor.buttonText;
}, props => {
  var _a;

  return ((_a = props.customStyle) === null || _a === void 0 ? void 0 : _a.borderRadius) ? props.customStyle.borderRadius : props.theme.borderRadius.modalInnerComponents;
}, props => {
  var _a;

  return ((_a = props.customStyle) === null || _a === void 0 ? void 0 : _a.border) ? props.customStyle.border : props.theme.border.modal;
}, props => {
  var _a;

  return ((_a = props.customStyle) === null || _a === void 0 ? void 0 : _a.fontWeight) ? props.customStyle.fontWeight : '500';
}, props => props.theme.fontFamily, props => props.width ? props.width : '100%', props => props.height ? props.height : '100%');

const QuantityInput = props => {
  var _a;

  const theme = useContext(ThemeContext);

  const handleChange = event => {
    props.onInputChange(event);
  };

  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsxs(QuantityInputContainer, {
      children: [jsx(LabelContainer$1, {
        children: jsx("label", {
          children: props.labelName
        })
      }), jsxs(Section, Object.assign({
        gap: "4px",
        alignItems: "center"
      }, {
        children: [jsx(Section, Object.assign({
          zIndex: '500'
        }, {
          children: jsx(DropDownInput, {
            selectedValue: props.inputValue.range,
            dropdownValues: props.dropDownValues
          })
        })), jsxs(Section, Object.assign({
          alignItems: "baseline",
          width: 'fit-content'
        }, {
          children: [jsx(Input, {
            type: "number",
            error: props.error || false,
            theme: theme,
            value: props.inputValue.value,
            onChange: handleChange,
            placeholder: props.placeholder
          }), jsx(Unit, Object.assign({
            alignSelf: 'auto',
            background: (_a = theme.backgroundColor) === null || _a === void 0 ? void 0 : _a.modalHoverBackground,
            width: '40%',
            height: 'fit-content',
            error: props.error || false
          }, {
            children: shortenText(props.unit, 15)
          }))]
        }))]
      }))]
    })
  }));
};
/* styling */

const QuantityInputContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "QuantityInput__QuantityInputContainer",
  componentId: "sc-1br3sg4-0"
})(["display:flex;flex-direction:column;width:100%;font-family:", ";"], props => props.theme.fontFamily);
const LabelContainer$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "QuantityInput__LabelContainer",
  componentId: "sc-1br3sg4-1"
})(["display:flex;justify-content:space-between;font-weight:500;font-size:16px;color:", ";"], props => {
  var _a, _b;

  return (_b = (_a = props.theme.textColor) === null || _a === void 0 ? void 0 : _a.modalHeadingText) !== null && _b !== void 0 ? _b : '#000';
});
const Input = /*#__PURE__*/styled.input.withConfig({
  displayName: "QuantityInput__Input",
  componentId: "sc-1br3sg4-2"
})(["padding:16px;margin-top:8px;color:", ";background:", ";border:", ";border-width:1px 0px 1px 1px;border-radius:12px 0 0 12px;font-family:", ";font-size:16px;width:60%;font-weight:500;"], props => {
  var _a, _b;

  return (_b = (_a = props.theme.textColor) === null || _a === void 0 ? void 0 : _a.modalHeadingText) !== null && _b !== void 0 ? _b : '#000';
}, props => props.theme.backgroundColor.modalInputBackground, props => props.error ? ' 1px solid #ED5858' : props.theme.border.modalInnerComponents, props => props.theme.fontFamily);
const Unit = /*#__PURE__*/styled(Section).withConfig({
  displayName: "QuantityInput__Unit",
  componentId: "sc-1br3sg4-3"
})(["font-size:14px;font-weight:600;white-space:nowrap;border-radius:0 12px 12px 0;padding:18px 17.2px 16.5px 17.2px;border:", ";@media ", "{padding:21px 17.2px 17.5px 17.2px;font-size:10px;font-weight:400}"], props => props.error ? ' 1px solid #ED5858' : props.theme.border.modalInnerComponents, device.mobileL);

const Checkbox = props => {
  const theme = useContext(ThemeContext);
  return jsx(ThemeProvider, Object.assign({
    theme: theme
  }, {
    children: jsxs(CheckboxContainer, {
      children: [jsx("input", {
        type: "checkbox",
        id: "checkbox",
        checked: props.checked,
        onChange: () => props.onToggle()
      }), jsx(LabelContainer, {
        children: jsx("label", {
          children: props.labelName
        })
      })]
    })
  }));
};
/* styling */

const CheckboxContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "Checkbox__CheckboxContainer",
  componentId: "sc-tq23cv-0"
})(["display:flex;width:100%;gap:5px;align-items:center;font-family:", ";input{width:18px;height:18px}"], props => props.theme.fontFamily);
const LabelContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "Checkbox__LabelContainer",
  componentId: "sc-tq23cv-1"
})(["display:flex;font-weight:400;font-size:16px;color:", ";"], props => {
  var _a, _b;

  return (_b = (_a = props.theme.textColor) === null || _a === void 0 ? void 0 : _a.modalHeadingText) !== null && _b !== void 0 ? _b : '#000';
});

const SpamIcon = ({
  color
}) => {
  return jsxs("svg", Object.assign({
    width: "16",
    height: "16",
    viewBox: "0 0 18 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [jsx("path", {
      d: "M8.15234 6.10618C8.15234 5.63757 8.53222 5.25769 9.00083 5.25769C9.46943 5.25769 9.84931 5.63757 9.84931 6.10618C9.84931 6.57478 9.46943 6.95466 9.00083 6.95466C8.53222 6.95466 8.15234 6.57478 8.15234 6.10618ZM8.15234 9.50011C8.15234 9.03151 8.53222 8.65163 9.00083 8.65163C9.46943 8.65163 9.84931 9.03151 9.84931 9.50011V12.8941C9.84931 13.3627 9.46943 13.7425 9.00083 13.7425C8.53222 13.7425 8.15234 13.3627 8.15234 12.8941V9.50011Z",
      fill: color ? color : '#575D73'
    }), jsx("circle", {
      cx: "9",
      cy: "9.5",
      r: "8",
      stroke: color ? color : '#575D73',
      "stroke-width": "1.5"
    })]
  }));
};

const InfoContainer = ({
  label,
  cta
}) => {
  var _a;

  const theme = useContext(ThemeContext);
  return jsx(Section, Object.assign({
    cursor: "pointer"
  }, {
    children: jsxs(Link$1, Object.assign({
      href: cta,
      target: cta ? '_target' : ''
    }, {
      children: [jsx(SpamIcon, {}), label && jsx(Span$1, Object.assign({
        color: (_a = theme.textColor) === null || _a === void 0 ? void 0 : _a.modalSubHeadingText,
        fontSize: "15px",
        cursor: "pointer"
      }, {
        children: label
      }))]
    }))
  }));
};
const Link$1 = /*#__PURE__*/styled.a.withConfig({
  displayName: "InfoContainer__Link",
  componentId: "sc-2gglnx-0"
})(["text-decoration:none;display:flex;align-items:center;justify-content:center;gap:6px;"]);

const MemberListContainer = ({
  key,
  memberData,
  handleMembers,
  handleMemberList,
  darkIcon,
  memberList
}) => {
  var _a, _b, _c, _d, _e, _f;

  const theme = useContext(ThemeContext);
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const dropdownRef = useRef(null);
  useClickAway(dropdownRef, () => setSelectedWallet(null));
  const removeAdminDropdown = {
    id: 'dismiss_admin',
    title: 'Dismiss as admin',
    icon: img$i,
    function: () => dismissGroupAdmin()
  };
  const addAdminDropdown = {
    id: 'dismiss_admin',
    title: 'Make group admin',
    icon: img$h,
    function: () => makeGroupAdmin()
  };
  const removeUserDropdown = {
    id: 'remove_user',
    title: 'Remove',
    icon: img$g,
    function: () => removeUser()
  };

  const dismissGroupAdmin = () => {
    const updatedMembers = memberList.map(member => {
      var _a, _b;

      return ((_a = member === null || member === void 0 ? void 0 : member.wallets) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == ((_b = memberData === null || memberData === void 0 ? void 0 : memberData.wallets) === null || _b === void 0 ? void 0 : _b.toLowerCase()) ? Object.assign(Object.assign({}, member), {
        isAdmin: false
      }) : member;
    });
    handleMembers === null || handleMembers === void 0 ? void 0 : handleMembers(updatedMembers);
    setSelectedWallet(null);
  };

  const makeGroupAdmin = () => {
    const updatedMembers = memberList.map(member => {
      var _a, _b;

      return ((_a = member === null || member === void 0 ? void 0 : member.wallets) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == ((_b = memberData === null || memberData === void 0 ? void 0 : memberData.wallets) === null || _b === void 0 ? void 0 : _b.toLowerCase()) ? Object.assign(Object.assign({}, member), {
        isAdmin: true
      }) : member;
    });
    handleMembers === null || handleMembers === void 0 ? void 0 : handleMembers(updatedMembers);
    setSelectedWallet(null);
  };

  const removeUser = () => {
    handleMemberList(memberData);
    setSelectedWallet(null);
  };

  const handleHeight = id => {
    var _a;

    const containerHeight = (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
    setDropdownHeight(containerHeight === null || containerHeight === void 0 ? void 0 : containerHeight.top);
  };

  return jsxs(WalletProfileContainer, Object.assign({
    id: memberData === null || memberData === void 0 ? void 0 : memberData.wallets,
    background: memberList ? 'transparent' : (_a = theme.backgroundColor) === null || _a === void 0 ? void 0 : _a.modalHoverBackground,
    border: memberList ? (_b = theme.border) === null || _b === void 0 ? void 0 : _b.modalInnerComponents : 'none',
    borderRadius: (_c = theme.borderRadius) === null || _c === void 0 ? void 0 : _c.modalInnerComponents
  }, {
    children: [jsx(ProfileContainer, {
      theme: theme,
      member: {
        wallet: shortenText((_d = memberData.wallets) === null || _d === void 0 ? void 0 : _d.split(':')[1], 6, true),
        image: memberData.profilePicture || ''
      }
    }), jsxs(Section, Object.assign({
      justifyContent: "flex-end"
    }, {
      children: [(memberData === null || memberData === void 0 ? void 0 : memberData.isAdmin) && jsx(Span$1, Object.assign({
        background: "#F4DCEA",
        color: "#D53A94",
        borderRadius: "8px",
        padding: "6px",
        fontWeight: "500",
        fontSize: "10px"
      }, {
        children: "Admin"
      })), jsx(Section, Object.assign({
        maxWidth: "fit-content",
        onClick: () => {
          handleHeight(memberData === null || memberData === void 0 ? void 0 : memberData.wallets);
          setSelectedWallet(null);
          memberList ? findObject(memberData, memberList, 'wallets') ? setSelectedWallet(memberData === null || memberData === void 0 ? void 0 : memberData.wallets) : handleMemberList(memberData) : handleMemberList(memberData);
        }
      }, {
        children: darkIcon
      }))]
    })), (selectedWallet === null || selectedWallet === void 0 ? void 0 : selectedWallet.toLowerCase()) == ((_e = memberData === null || memberData === void 0 ? void 0 : memberData.wallets) === null || _e === void 0 ? void 0 : _e.toLowerCase()) && jsx(DropdownContainer$2, Object.assign({
      style: {
        top: dropdownHeight > 500 ? '30%' : '45%'
      },
      ref: dropdownRef,
      theme: theme
    }, {
      children: jsx(Dropdown, {
        dropdownValues: (memberData === null || memberData === void 0 ? void 0 : memberData.isAdmin) ? [removeAdminDropdown, removeUserDropdown] : [addAdminDropdown, removeUserDropdown],
        hoverBGColor: (_f = theme.backgroundColor) === null || _f === void 0 ? void 0 : _f.modalHoverBackground
      })
    }))]
  }));
};
const WalletProfileContainer = /*#__PURE__*/styled(Section).withConfig({
  displayName: "MemberListContainer__WalletProfileContainer",
  componentId: "sc-6hilce-0"
})(["justify-content:space-between;padding:8px 16px;border:", ";position:relative;box-sizing:border-box;width:100%;max-height:64px;align-self:stretch;display:flex;height:auto;z-index:auto;flex:1;@media (max-width:480px){max-width:100%;}"], props => props.border);
const DropdownContainer$2 = /*#__PURE__*/styled.div.withConfig({
  displayName: "MemberListContainer__DropdownContainer",
  componentId: "sc-6hilce-1"
})(["position:absolute;left:48%;top:69%;border-radius:", ";padding:14px 8px;z-index:999999999999 !important;display:flex;flex-direction:column !important;background:", ";border:", ";@media ", "{left:27%;}@media (min-width:426px) and (max-width:1150px){left:48%;}@media (max-width:480px){left:25%;}"], props => props.theme.borderRadius.modalInnerComponents, props => props.theme.backgroundColor.modalBackground, props => props.theme.border.modalInnerComponents, device.mobileL);

const AddWalletContent = ({
  onSubmit,
  handlePrevious,
  onClose,
  memberList,
  handleMemberList,
  groupMembers,
  isLoading
}) => {
  var _a, _b, _c, _d, _e;

  const theme = useContext(ThemeContext);
  const [filteredUserData, setFilteredUserData] = useState(null);
  const {
    account,
    env
  } = useChatData();
  const isMobile = useMediaQuery(device.mobileL);
  const {
    fetchChatProfile
  } = useGetChatProfile();
  const groupInfoToast = useToast();
  const customSearchStyle = {
    background: (_a = theme.backgroundColor) === null || _a === void 0 ? void 0 : _a.modalInputBackground,
    border: (_b = theme.border) === null || _b === void 0 ? void 0 : _b.modalInnerComponents,
    placeholderColor: (_c = theme.textColor) === null || _c === void 0 ? void 0 : _c.modalSubHeadingText,
    fontSize: '15px',
    fontWeight: '400'
  };

  const handleSearch = ({
    searchedText
  }) => __awaiter(void 0, void 0, void 0, function* () {
    //fix ens search 
    const newChatUser = yield getNewChatUser({
      searchText: searchedText,
      fetchChatProfile,
      env
    });

    if (newChatUser) {
      setFilteredUserData(newChatUser);
    } else {
      groupInfoToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: 'Invalid Address',
        toastType: 'ERROR',
        getToastIcon: size => jsx(MdError, {
          size: size,
          color: "red"
        })
      });
    }
  });

  const clearInput = () => {
    setFilteredUserData(null);
  };

  const addMemberToList = member => {
    let errorMessage = '';
    errorMessage = addWalletValidation(member, memberList, groupMembers, account);

    if (errorMessage) {
      groupInfoToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: errorMessage,
        toastType: 'ERROR',
        getToastIcon: size => jsx(MdError, {
          size: size,
          color: "red"
        })
      });
    } else {
      handleMemberList(prev => [...prev, Object.assign(Object.assign({}, member), {
        isAdmin: false
      })]);
    }

    setFilteredUserData('');
    clearInput();
  };

  const removeMemberFromList = member => {
    const filteredMembers = memberList === null || memberList === void 0 ? void 0 : memberList.filter(user => user.wallets.toLowerCase() !== member.wallets.toLowerCase());
    handleMemberList(filteredMembers);
  };

  return jsxs(Section, Object.assign({
    margin: "auto",
    width: isMobile ? '100%' : '410px',
    flexDirection: "column",
    padding: isMobile ? '0px auto' : '0px 10px'
  }, {
    children: [jsx(ModalHeader, {
      title: 'Add More Wallets',
      handleClose: onClose,
      handlePrevious: handlePrevious
    }), jsxs(Section, Object.assign({
      margin: "50px 0 10px 0",
      flex: "1",
      flexDirection: "row",
      justifyContent: "space-between"
    }, {
      children: [jsx(Span$1, Object.assign({
        fontSize: "18px",
        color: (_d = theme.textColor) === null || _d === void 0 ? void 0 : _d.modalSubHeadingText
      }, {
        children: "Add Wallets"
      })), jsx(Span$1, Object.assign({
        fontSize: "14px",
        color: (_e = theme.textColor) === null || _e === void 0 ? void 0 : _e.modalSubHeadingText
      }, {
        children: groupMembers ? `0${(memberList === null || memberList === void 0 ? void 0 : memberList.length) + (groupMembers === null || groupMembers === void 0 ? void 0 : groupMembers.length)} / 09 Members` : `0${memberList === null || memberList === void 0 ? void 0 : memberList.length} / 09 Members`
      }))]
    })), jsx(Section, Object.assign({
      flex: "1"
    }, {
      children: jsx(ChatSearchInput, {
        handleSearch: handleSearch,
        clearInput: clearInput,
        placeholder: "Search Web3 domain or 0x123...",
        customStyle: customSearchStyle
      })
    })), filteredUserData && jsx(MemberList, {
      children: jsx(MemberListContainer, {
        memberData: filteredUserData,
        handleMemberList: addMemberToList,
        darkIcon: jsx(AddUserDarkIcon, {})
      })
    }), jsx(MultipleMemberList, {
      children: memberList === null || memberList === void 0 ? void 0 : memberList.map((member, index) => jsx(MemberListContainer, {
        memberList: memberList,
        memberData: member,
        handleMembers: handleMemberList,
        handleMemberList: removeMemberFromList,
        darkIcon: jsx(MoreDarkIcon, {})
      }, index))
    }), jsx(Section, Object.assign({
      flex: "1",
      alignSelf: "center"
    }, {
      children: jsxs(ModalConfirmButton, Object.assign({
        onClick: () => onSubmit(),
        isLoading: isLoading,
        memberListCount: (memberList === null || memberList === void 0 ? void 0 : memberList.length) > 0,
        theme: theme
      }, {
        children: [!isLoading && groupMembers ? 'Add To Group' : '', isLoading && jsx(Spinner$1, {
          size: "30",
          color: "#fff"
        })]
      }))
    }))]
  }));
};
const MemberList = /*#__PURE__*/styled.div.withConfig({
  displayName: "AddWalletContent__MemberList",
  componentId: "sc-19wsss8-0"
})(["flex:1;width:100%;margin-bottom:40px;"]);
const MultipleMemberList = /*#__PURE__*/styled.div.withConfig({
  displayName: "AddWalletContent__MultipleMemberList",
  componentId: "sc-19wsss8-1"
})(["height:fit-content;max-height:216px;padding:0px 2px;width:100%;&::-webkit-scrollbar-track{background-color:", ";}&::-webkit-scrollbar{background-color:", ";width:6px;}@media (max-width:768px){padding:0px 0px 0px 0px;max-height:35vh;&::-webkit-scrollbar-track{background-color:none;border-radius:9px;}&::-webkit-scrollbar{background-color:none;width:4px;}}&::-webkit-scrollbar-thumb{border-radius:10px;background-image:-webkit-gradient( linear,left top,left bottom,color-stop(0.44,#cf1c84),color-stop(0.72,#cf1c84),color-stop(0.86,#cf1c84) );}"], props => props.theme.scrollbarColor, props => props.theme.scrollbarColor);
const ModalConfirmButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "AddWalletContent__ModalConfirmButton",
  componentId: "sc-19wsss8-2"
})(["margin:60px 0 0 0;width:197px;background:", ";color:", ";border:", ";min-width:50%;box-sizing:border-box;cursor:pointer;border-radius:12px;padding:16px;font-size:16px;font-weight:500;display:flex;align-items:center;justify-content:center;box-shadow:none;height:48px;"], props => props.memberListCount ? props.theme.backgroundColor.buttonBackground : props.theme.backgroundColor.buttonDisableBackground, props => props.memberListCount ? props.theme.textColor.buttonText : props.theme.textColor.buttonDisableText, props => props.memberListCount ? 'none' : props.theme.border.modal);

const MoreLightIcon = ({
  fill
}) => {
  return jsxs("svg", Object.assign({
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    cursor: "pointer"
  }, {
    children: [jsx("path", {
      d: "M16 10C17.1046 10 18 9.10457 18 8C18 6.89543 17.1046 6 16 6C14.8954 6 14 6.89543 14 8C14 9.10457 14.8954 10 16 10Z",
      fill: fill
    }), jsx("path", {
      d: "M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z",
      fill: fill
    }), jsx("path", {
      d: "M16 26C17.1046 26 18 25.1046 18 24C18 22.8954 17.1046 22 16 22C14.8954 22 14 22.8954 14 24C14 25.1046 14.8954 26 16 26Z",
      fill: fill
    })]
  }));
};

const MemberProfileCard = ({
  key,
  member,
  dropdownValues,
  selectedMemberAddress,
  setSelectedMemberAddress,
  dropdownRef
}) => {
  var _a, _b, _c, _d, _e, _f, _g;

  const theme = useContext(ThemeContext);
  const {
    account
  } = useChatData();
  const [dropdownHeight, setDropdownHeight] = useState(0);

  const handleHeight = id => {
    var _a;

    const containerHeight = (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
    setDropdownHeight(containerHeight === null || containerHeight === void 0 ? void 0 : containerHeight.top);
  };

  return jsxs(ProfileCardItem, Object.assign({
    background: ((_a = member.wallet) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === (selectedMemberAddress === null || selectedMemberAddress === void 0 ? void 0 : selectedMemberAddress.toLowerCase()) ? (_b = theme.backgroundColor) === null || _b === void 0 ? void 0 : _b.modalHoverBackground : '',
    id: member.wallet,
    theme: theme
  }, {
    children: [jsx(ProfileContainer, {
      theme: theme,
      member: {
        wallet: shortenText((_c = member === null || member === void 0 ? void 0 : member.wallet) === null || _c === void 0 ? void 0 : _c.split(':')[1], 6, true),
        image: member.image
      }
    }), jsxs(Section, Object.assign({
      justifyContent: "flex-end",
      position: "relative",
      zIndex: "2"
    }, {
      children: [(member === null || member === void 0 ? void 0 : member.isAdmin) && jsx(Span$1, Object.assign({
        background: "#F4DCEA",
        color: "#D53A94",
        borderRadius: "8px",
        padding: "6px",
        fontWeight: "500",
        fontSize: "10px"
      }, {
        children: "Admin"
      })), ((_d = pCAIP10ToWallet(member === null || member === void 0 ? void 0 : member.wallet)) === null || _d === void 0 ? void 0 : _d.toLowerCase()) !== (account === null || account === void 0 ? void 0 : account.toLowerCase()) && dropdownValues.length > 0 && jsx(Section, Object.assign({
        maxWidth: "fit-content",
        padding: "0 0px 0 0",
        position: "relative",
        zIndex: "2",
        onClick: () => {
          handleHeight(member.wallet);
          setSelectedMemberAddress(member === null || member === void 0 ? void 0 : member.wallet);
        },
        style: {
          cursor: 'pointer'
        }
      }, {
        children: jsx(MoreLightIcon, {
          fill: (_e = theme.iconColor) === null || _e === void 0 ? void 0 : _e.groupSettings
        })
      }))]
    })), (selectedMemberAddress === null || selectedMemberAddress === void 0 ? void 0 : selectedMemberAddress.toLowerCase()) == ((_f = member === null || member === void 0 ? void 0 : member.wallet) === null || _f === void 0 ? void 0 : _f.toLowerCase()) && jsx(DropdownContainer$1, Object.assign({
      style: {
        top: dropdownHeight > 570 ? '30%' : '40%'
      },
      theme: theme,
      ref: dropdownRef
    }, {
      children: jsx(Dropdown, {
        dropdownValues: dropdownValues,
        hoverBGColor: (_g = theme.backgroundColor) === null || _g === void 0 ? void 0 : _g.modalHoverBackground
      })
    }))]
  }), key);
}; //styles

const ProfileCardItem = /*#__PURE__*/styled(Section).withConfig({
  displayName: "MemberProfileCard__ProfileCardItem",
  componentId: "sc-g1t8d9-0"
})(["justify-content:space-between;padding:8px 8px;border-bottom:", ";position:relative;box-sizing:border-box;width:100%;max-height:64px;align-self:stretch;display:flex;height:auto;z-index:auto;flex:1;@media (max-width:480px){max-width:100%;}"], props => props.theme.border.modalInnerComponents);
const DropdownContainer$1 = /*#__PURE__*/styled(Section).withConfig({
  displayName: "MemberProfileCard__DropdownContainer",
  componentId: "sc-g1t8d9-1"
})(["position:absolute;left:48%;top:69%;border-radius:", ";padding:14px 8px;z-index:999999999999 !important;display:flex;flex-direction:column !important;background:", ";border:", ";@media ", "{left:27%;}@media (min-width:426px) and (max-width:1150px){left:48%;}@media (max-width:480px){left:25%;}"], props => props.theme.borderRadius.modalInnerComponents, props => props.theme.backgroundColor.modalBackground, props => props.theme.border.modal, device.mobileL);

const getAdminList = groupInformation => {
  const adminsFromMembers = convertToWalletAddressList(groupInformation === null || groupInformation === void 0 ? void 0 : groupInformation.members.filter(admin => admin.isAdmin == true));
  const adminsFromPendingMembers = convertToWalletAddressList(groupInformation === null || groupInformation === void 0 ? void 0 : groupInformation.pendingMembers.filter(admin => admin.isAdmin == true));
  const adminList = [...adminsFromMembers, ...adminsFromPendingMembers];
  return adminList;
};
const convertToWalletAddressList = memberList => {
  return memberList ? memberList.map(member => member.wallet) : [];
};
const getUpdatedMemberList = (groupInfo, walletAddress) => {
  var _a;

  const members = (_a = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.members) === null || _a === void 0 ? void 0 : _a.filter(i => {
    var _a;

    return ((_a = i.wallet) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== (walletAddress === null || walletAddress === void 0 ? void 0 : walletAddress.toLowerCase());
  });
  return convertToWalletAddressList([...members, ...groupInfo.pendingMembers]);
};
const getUpdatedAdminList = (groupInfo, walletAddress, toRemove) => {
  const groupAdminList = getAdminList(groupInfo);

  if (!toRemove) {
    return [...groupAdminList, walletAddress];
  } else {
    const newAdminList = groupAdminList.filter(wallet => wallet.toLowerCase() !== (walletAddress === null || walletAddress === void 0 ? void 0 : walletAddress.toLowerCase()));
    return newAdminList;
  }
};
const isAccountOwnerAdmin = (groupInfo, account) => {
  var _a;

  if (account && groupInfo) {
    return (_a = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.members) === null || _a === void 0 ? void 0 : _a.some(member => {
      var _a;

      return ((_a = pCAIP10ToWallet(member === null || member === void 0 ? void 0 : member.wallet)) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === (account === null || account === void 0 ? void 0 : account.toLowerCase()) && (member === null || member === void 0 ? void 0 : member.isAdmin);
    });
  }

  return false;
};

var img$e = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAABACAYAAABcIPRGAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALISURBVHgB7Zp/bhJBFMffmy1o/3KP0BsUT1A4gXgCMdKmtpq2iWLjP8A/hqBJSUwLAZLiCSwnKJ7AvYF4AvuPbmS785xpU9M/dvYXS6ck80kgG97M7PvO8N78yCBkxPZ+d+0y75cttNY58CIB2QhoS5t4vhDPU/khTmPPYpNR6+UUMgBhTl7UTsoMYU+4WYRE4AQ4fRl83B3BHKQWUH3TLaLld0QT6zAfU0L+fNh6PYEUMEjB1ruTI7T4eQbOS9aQ2PlWrVuHFCQagUrj1M65vycZOR6E463OSqPGwUXcCrEF3IHzNyQSsQIxybnu1zjOkwxO9L8RBwcZXDkhnkVGYgVA3MDoYC/k3AfiXVCCGMQagWrtuI4IjYhiIwtZsxeRHrcPRbrlfgMRn4WVQ8KDfnunAxFECqiIF+aI/whpYMpTZJHq4eciI3ZKIoiVhSx4PPiw64S1E5mFVkRvqWzSeYaslCYFyjqyrmxDWcjHI4ggdATCev/G+d6cM6r8S/nEv4tHO8gu5ojQDgodgbDeJ4RmL4PlgGyDiJoqu5gjymH1QwWIQNsI/F30/qA13xLgNsP2q87V0iKY0GBXCth8e1wARYDJ3oeMIeJjhcnefN8vqOopBRCq87X3cHYGGXM580Yqm+95aQTgmsLkJJnq4zLqiDYJAlOmxSC5ADGR2ArTT1gQIpgVbbNHqjopVqPsFywKZIlHNtVy+j5hBOjGCNCNEaCbpRfwfz8gz3mA8eItwxPxFTSFO0QwhsU4E++dnE+Gn673CHh92iA37ElP1nSDE2/171OWd9368jkvoWL+T36fiYPXCiwpYl+yJ4PYhuXFNmlUN0aAbowA3RgBujECdGME6MYI0I0RoBsjQDdGgG6MAN0YAboxAnRjBOjGCNANC7lotAw4jNDP/PLSXYGETSYv1MmLdaS4q3MfkZdrpc/99s7ZPz9F/3IJqyPbAAAAAElFTkSuQmCC";

var img$d = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAABACAYAAAC3F09FAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATrSURBVHgB1ZpNTxtHGMefGYMlQKr8DereequpequqmFt7qBQ+QRYFoxYaYUutIb3EuVTErYQjYlIBUZxPEPfQ9mgiJccEfwTnliMHwovBM3meta3geGY9ux6v1z8JIXaNvT/Py/7nmWVgEafwNDF1cp5iMXET/7yBPwn8SV57SZ0BawgpXlzxWLWy9XMDLMLAAiQRPz1fF6yVxYtNmP8nOwQhn+3/uVYBCwwts5J/fM+/RB+NS8YXhm2pwDLO5uPktGxV8S2+AkswyXJ7xdUSBCQGAWiLiBp+/JdgEwbff/Ptj/D61b8vIAC+ZT6K9AxsDfIYr/CdBFbvdIHBXZHJdFAh390ss/Go7t215LFk8iFr8SoO7Pr1M1mcKE7OT1IgmMMYuwUeCMkWnxRXq+ADXzKZjfI6/vLq0w/nZmYLpcLSMQzgJ2xhnKJrUt/Cx5czzS8qhdzA9+piLDOwezFY2t/yP8Uu5x9VdK2EM2Rp78FqDgzhpi+cEoI+MKk6J6XMBREhDoq/OHjRyu4kQWadwrbxlG8swxg4mlMVvKDA0ynRvLhYwi7SUJ2Ln8azYIiRzPKvO2lQtApdQIzx+zAklVIOJw1Qvg8evwWGmLUM52nVYRy8h39byledbqoa7EmaLMAAMxkpU8rDTDwDiwgA5fs1WyINBhjJ4Gzzuer4wdadQ7CIFFBXHefMLPcZyUgu/lEcboBluBQN9RlpTwZboIBdauiBPmqmaC0yfXb2HO3TQN92DBb3/1jra24SymyWGzjqn0JE4VOn70sdESIJLahlfi8rBzzNOBhBFkE964wdrogSCRQ6Wrm7q5zfnxTvVHHaWcAWegsRg7tLVwVSyAqtIlXnKA3Pzc7ehIjBY4xpowQO+oJOyCQZhw2nOzjH9XcQoajhTs1dIRwHypuWK7Sxuw0Rp2c942S3E9PxeA2PptQvZtXmzMWSbsHUrpudpCAonKVwQlJ9aRXZ+hidDv5SJ4++xdlyvnwP434B9NRxBbigE7q9sVPiwNdhtCjvhz0ymd/KDnY8k5uiZ51reXOnwCQf9TjrW1b3xhnOTNcO7hLa0UTzkOJPgr+P99wejFeaCqIg1MMwMgQJHeniDwlRoQNCYlgZguJP7XZ+V5kI3BWkgHkIIc/ZkCESnMnnK/ldZfHBLQZinmMjWANdx5aMC1Yyt73ynFfSsIFVGcIr/gyKTsNiXYYwEdJFp2EYiQxBQlibVt6ASeiy2bQuNDKZDg4KHalKrFT42y+uzWNp11q5atQyRGr6LK6/uWKt2dbNNQwZIhVGWghLhhh5/AlThnCFvOIPbY9AQMKWITzLWe72SDvP+Y4/45AhPMtZnTy3AD6FxiXj0i5n6fMc7v3M+0kLY5UhvPKc3/gzdhnCVp6LhAzhVc4ioeZFc35Q/ImMDEG7y5TndPGH8pxuZ5qIlEwHx40/GqG9B6uLujwXRRmC8tyR3zwXVRliYPz5bG62p8tFWYbwFPp0JyLqMoRnnrvOJMgQSa9yVpdJkSHa5SxNniMmScbFa3ty4mQIXfzpkZGyFehBz3GgEuqRuWpelUZdQrXJp3lO+VhjZhM3nSS/ARGCgUjrnufsbk9aeXw+LDyf55RwP9BD2uPizav/ql9/9wNuubJ030nGGxMlQ7x5+f+hSmjiWqZLV4gDS7qrIAl3sdRb+QDqbV31OTmBWAAAAABJRU5ErkJggg==";

var img$c = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4.5 12H20.5' stroke='%23787E99' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M12.5 4V20' stroke='%23787E99' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e";

var img$b = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.00899 15H1.60869C1.44726 15 1.29243 14.9359 1.17828 14.8217C1.06413 14.7076 1 14.5527 1 14.3913V10.991C1.00007 10.8298 1.06411 10.6752 1.17804 10.5611L10.561 1.17814C10.6752 1.06407 10.8299 1 10.9913 1C11.1527 1 11.3074 1.06407 11.4216 1.17814L14.8219 4.57616C14.9359 4.6903 15 4.84506 15 5.00643C15 5.16779 14.9359 5.32256 14.8219 5.4367L5.43888 14.822C5.32482 14.9359 5.17021 14.9999 5.00899 15Z' stroke='rgba(120%2c 126%2c 153%2c 1)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M8.30469 3.43481L12.5655 7.69565' stroke='rgba(120%2c 126%2c 153%2c 1)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e";

var img$a = "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6 9H12' stroke='rgba(120%2c 126%2c 153%2c 1)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z' stroke='rgba(120%2c 126%2c 153%2c 1)' stroke-width='2' stroke-miterlimit='10'/%3e%3c/svg%3e";

const createSVGIcon = (element, chainName) => {
  return jsx(Tooltip$1, Object.assign({
    tooltipContent: `${chainName}`
  }, {
    children: element
  }));
};

const NETWORK_ICON_DETAILS = {
  11155111: {
    label: 'ETHEREUM SEPOLIA',
    icon: createSVGIcon(jsx(EthereumSvg, {}), 'Ethereum Sepolia')
  },
  1: {
    label: 'ETHEREUM MAINNET',
    icon: createSVGIcon(jsx(EthereumSvg, {}), 'Ethereum Mainnet')
  },
  80001: {
    label: 'POLYGON MUMBAI',
    icon: createSVGIcon(jsx(PolygonSvg, {}), 'Polygon Mumbai')
  },
  137: {
    label: 'POLYGON MAINNET',
    icon: createSVGIcon(jsx(PolygonSvg, {}), 'Polygon Mainnet')
  },
  97: {
    label: 'BSC TESTNET',
    icon: createSVGIcon(jsx(BSCSvg, {}), 'Bsc Testnet')
  },
  56: {
    label: 'BSC MAINNET',
    icon: createSVGIcon(jsx(BSCSvg, {}), 'Bsc Mainnet')
  },
  420: {
    label: 'OPTIMISM TESTNET',
    icon: createSVGIcon(jsx(OptimismSvg, {}), 'Optimism Testnet')
  },
  10: {
    label: 'OPTIMISM MAINNET',
    icon: createSVGIcon(jsx(OptimismSvg, {}), 'Optimism Mainnet')
  },
  1442: {
    label: 'POLYGON ZK EVM TESTNET',
    icon: createSVGIcon(jsx(PolygonzkevmSvg, {}), 'Polygon ZK EVM Testnet')
  },
  1101: {
    label: 'POLYGON ZK EVM MAINNET',
    icon: createSVGIcon(jsx(PolygonzkevmSvg, {}), 'Polygon ZK EVM Mainnet')
  },
  42161: {
    label: 'ARBITRUMONE MAINNET',
    icon: createSVGIcon(jsx(ArbitrumSvg, {}), 'Arbitrum Mainnet')
  },
  421613: {
    label: 'ARBITRUM TESTNET',
    icon: createSVGIcon(jsx(ArbitrumSvg, {}), 'Arbitrum Testnet')
  }
};

const INVITE_CHECKBOX_LABEL = {
  owner: 'Only Owner can invite',
  admin: 'Only Admin can invite'
};
const GUILD_COMPARISON_OPTIONS = [{
  heading: 'ALL',
  value: 'all'
}, {
  heading: 'ANY',
  value: 'any'
}, {
  heading: 'SPECIFIC',
  value: 'specific'
}];
const OPERATOR_OPTIONS = [{
  heading: 'Any',
  value: 'any'
}, {
  heading: 'All',
  value: 'all'
}];
const OPERATOR_OPTIONS_INFO = {
  any: {
    head: 'Any one',
    tail: 'of the following criteria must be true'
  },
  all: {
    head: 'All',
    tail: 'of the following criteria must be true'
  }
};
const ACCESS_TYPE_TITLE = {
  ENTRY: {
    heading: 'Conditions to Join',
    subHeading: 'Add a condition to join or leave it open for everyone'
  },
  CHAT: {
    heading: 'Conditions to Chat',
    subHeading: 'Add a condition to join or leave it open for everyone'
  }
};

const MoreOptionsContainer = ({
  handleMoreOptionsClick,
  setSelectedIndex,
  selectedIndex,
  row,
  col,
  dropDownValues
}) => {
  var _a, _b;

  const theme = useContext(ThemeContext);
  const dropdownRef = useRef(null);
  useClickAway(dropdownRef, () => setSelectedIndex(null));
  return jsxs(Section, Object.assign({
    onClick: () => handleMoreOptionsClick(row, col),
    position: "static"
  }, {
    children: [jsx(MoreDarkIcon, {
      color: (_a = theme.iconColor) === null || _a === void 0 ? void 0 : _a.groupSettings,
      width: "24",
      height: "24"
    }), (selectedIndex === null || selectedIndex === void 0 ? void 0 : selectedIndex.length) && selectedIndex[0] === row && jsx(DropdownContainer, Object.assign({
      ref: dropdownRef,
      theme: theme
    }, {
      children: jsx(Dropdown, {
        dropdownValues: dropDownValues,
        hoverBGColor: (_b = theme.backgroundColor) === null || _b === void 0 ? void 0 : _b.modalHoverBackground
      })
    }))]
  }));
};

const CriteriaSection = ({
  criteria
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

  const theme = useContext(ThemeContext);

  const getTokenNftComparisionLabel = () => {
    var _a;

    return TOKEN_NFT_COMPARISION[(_a = criteria === null || criteria === void 0 ? void 0 : criteria.data) === null || _a === void 0 ? void 0 : _a['comparison']];
  };

  const checkIfNftToken = () => {
    if ((criteria === null || criteria === void 0 ? void 0 : criteria.category) === CATEGORY.ERC721 || (criteria === null || criteria === void 0 ? void 0 : criteria.category) === CATEGORY.ERC20) return true;
    return false;
  };

  const getGuildRole = () => {
    var _a, _b;

    if (!((_a = criteria === null || criteria === void 0 ? void 0 : criteria.data) === null || _a === void 0 ? void 0 : _a['comparison'])) {
      return 'SPECIFIC';
    }

    return (_b = GUILD_COMPARISON_OPTIONS.find(option => {
      var _a;

      return option.value === ((_a = criteria === null || criteria === void 0 ? void 0 : criteria.data) === null || _a === void 0 ? void 0 : _a['comparison']);
    })) === null || _b === void 0 ? void 0 : _b.heading;
  };

  const [tokenSymbol] = useTokenSymbolLoader(criteria);
  return jsxs(Section, Object.assign({
    gap: "8px",
    width: "100%",
    justifyContent: 'start'
  }, {
    children: [jsx(Span$1, Object.assign({
      alignSelf: "center",
      background: (_a = theme.backgroundColor) === null || _a === void 0 ? void 0 : _a.criteriaLabelBackground,
      borderRadius: "4px",
      fontSize: "10px",
      color: (_b = theme.textColor) === null || _b === void 0 ? void 0 : _b.buttonText,
      padding: "4px 8px 4px 8px"
    }, {
      children: CRITERIA_TYPE[criteria.category]
    })), checkIfNftToken() && jsxs(Section, Object.assign({
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center"
    }, {
      children: [jsxs(Span$1, Object.assign({
        fontWeight: "700",
        color: (_c = theme.textColor) === null || _c === void 0 ? void 0 : _c.modalHeadingText
      }, {
        children: [jsxs(Span$1, Object.assign({
          fontWeight: "500",
          color: (_d = theme.textColor) === null || _d === void 0 ? void 0 : _d.modalSubHeadingText
        }, {
          children: [getTokenNftComparisionLabel(), ' ']
        })), (_e = criteria === null || criteria === void 0 ? void 0 : criteria.data) === null || _e === void 0 ? void 0 : _e['amount'], " ", tokenSymbol]
      })), jsx(ChainIconSVG, Object.assign({
        padding: "3px 6px 0 0"
      }, {
        children: NETWORK_ICON_DETAILS[(_f = criteria === null || criteria === void 0 ? void 0 : criteria.data) === null || _f === void 0 ? void 0 : _f['contract'].split(':')[1]].icon
      }))]
    })), criteria.category === CATEGORY.INVITE && jsx(Span$1, Object.assign({
      fontWeight: "500",
      color: (_g = theme.textColor) === null || _g === void 0 ? void 0 : _g.modalSubHeadingText
    }, {
      children: "Owner and Admin can invite"
    })), criteria.category === CATEGORY.CustomEndpoint && jsx(Span$1, Object.assign({
      fontWeight: "500",
      fontSize: "14px",
      color: (_h = theme.textColor) === null || _h === void 0 ? void 0 : _h.modalSubHeadingText
    }, {
      children: shortenText((_j = criteria.data) === null || _j === void 0 ? void 0 : _j['url'], 30)
    })), criteria.category === CATEGORY.ROLES && jsxs(Span$1, Object.assign({
      fontWeight: "700",
      color: (_k = theme.textColor) === null || _k === void 0 ? void 0 : _k.modalHeadingText
    }, {
      children: [(_l = criteria === null || criteria === void 0 ? void 0 : criteria.data) === null || _l === void 0 ? void 0 : _l['id'], ' ', jsxs(Span$1, Object.assign({
        fontWeight: "500",
        color: (_m = theme.textColor) === null || _m === void 0 ? void 0 : _m.modalSubHeadingText
      }, {
        children: ["with", ' ']
      })), getGuildRole(), " role"]
    }))]
  }));
}; // fix  dropdown ui


const ConditionsComponent = ({
  conditionData,
  deleteFunction,
  updateFunction,
  moreOptions: _moreOptions = true
}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const dropdownRef = useRef(null);
  const dropDownValues = [{
    id: 0,
    value: 'Edit',
    title: 'Edit',
    icon: img$b,
    function: () => {
      if (updateFunction) {
        if (selectedIndex) {
          updateFunction(selectedIndex[0]);
          setSelectedIndex(null);
        }
      }
    }
  }, {
    id: 1,
    value: 'Remove',
    title: 'Remove',
    icon: img$a,
    function: () => {
      if (deleteFunction) {
        if (selectedIndex) {
          deleteFunction(selectedIndex[0]);
          setSelectedIndex(null);
        }
      }
    }
  }];
  const theme = useContext(ThemeContext);
  useClickAway(dropdownRef, () => setSelectedIndex(null));

  const handleMoreOptionsClick = (row, col) => {
    setSelectedIndex([row, col]);
  };

  return jsx(Section, Object.assign({
    flexDirection: "column",
    width: "100%",
    height: "100%"
  }, {
    children: conditionData && conditionData.slice(1).map((criteria, row) => {
      var _a, _b, _c;

      return jsxs(Section, Object.assign({
        flexDirection: "column"
      }, {
        children: [criteria.length <= 2 && criteria.length >= 1 && criteria.map((singleCriteria, col) => {
          var _a, _b;

          return jsx(Fragment, {
            children: singleCriteria.type && jsxs(Section, Object.assign({
              borderRadius: (_a = theme.borderRadius) === null || _a === void 0 ? void 0 : _a.modalInnerComponents,
              background: (_b = theme.backgroundColor) === null || _b === void 0 ? void 0 : _b.modalHoverBackground,
              padding: "15px 4px 15px 12px",
              justifyContent: "space-between"
            }, {
              children: [jsx(CriteriaSection, {
                criteria: singleCriteria
              }), _moreOptions && jsx(MoreOptionsContainer, {
                handleMoreOptionsClick: handleMoreOptionsClick,
                row: row,
                col: col,
                dropDownValues: dropDownValues,
                setSelectedIndex: setSelectedIndex,
                selectedIndex: selectedIndex
              })]
            }))
          });
        }), ((_a = criteria[0]) === null || _a === void 0 ? void 0 : _a.operator) && criteria.length > 2 && jsxs(CriteriaGroup, Object.assign({
          theme: theme,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: (_b = theme.borderRadius) === null || _b === void 0 ? void 0 : _b.modalInnerComponents,
          padding: "8px 0px 8px 8px",
          gap: "25px"
        }, {
          children: [jsx(Section, Object.assign({
            flexDirection: "column",
            gap: "8px",
            width: "100%"
          }, {
            children: criteria.map((singleCriteria, col) => {
              var _a, _b;

              return jsx(Fragment, {
                children: singleCriteria.type && jsx(Fragment, {
                  children: jsx(Section, Object.assign({
                    borderRadius: (_a = theme.borderRadius) === null || _a === void 0 ? void 0 : _a.modalInnerComponents,
                    background: (_b = theme.backgroundColor) === null || _b === void 0 ? void 0 : _b.modalHoverBackground,
                    padding: "15px 4px 15px 12px",
                    justifyContent: "space-between",
                    width: "100%"
                  }, {
                    children: jsx(CriteriaSection, {
                      criteria: singleCriteria
                    })
                  }))
                })
              });
            })
          })), jsxs(Section, {
            children: [criteria.map(singleCriteria => jsx(Fragment, {
              children: criteria.length > 2 && singleCriteria.operator && !singleCriteria.type && jsx(OperatorSpan, Object.assign({
                theme: theme
              }, {
                children: singleCriteria.operator
              }))
            })), _moreOptions && jsx(MoreOptionsContainer, {
              handleMoreOptionsClick: handleMoreOptionsClick,
              row: row,
              col: 0,
              dropDownValues: dropDownValues,
              setSelectedIndex: setSelectedIndex,
              selectedIndex: selectedIndex
            })]
          })]
        })), conditionData && row < conditionData.length - 2 && ((_c = conditionData[0][0]) === null || _c === void 0 ? void 0 : _c.operator) && // this can be reused
        jsx(OperatorSpan, Object.assign({
          theme: theme,
          zIndex: "-2"
        }, {
          children: conditionData[0][0].operator
        }))]
      }));
    })
  }));
};
const DropdownContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "ConditionsComponent__DropdownContainer",
  componentId: "sc-v7lmqz-0"
})(["position:absolute;top:0;right:0;border-radius:", ";padding:6px 32px 6px 12px;z-index:999999999999 !important;display:flex;flex-direction:column !important;background:", ";border:", ";"], props => props.theme.borderRadius.modalInnerComponents, props => props.theme.backgroundColor.modalBackground, props => props.theme.border.modalInnerComponents);
const OperatorSpan = /*#__PURE__*/styled(Span$1).withConfig({
  displayName: "ConditionsComponent__OperatorSpan",
  componentId: "sc-v7lmqz-1"
})(["padding:4px 8px;margin:8px 0;border-radius:", ";background:", ";color:", ";"], props => {
  var _a;

  return (_a = props.theme.borderRadius) === null || _a === void 0 ? void 0 : _a.modalInnerComponents;
}, props => {
  var _a;

  return (_a = props.theme.backgroundColor) === null || _a === void 0 ? void 0 : _a.modalHoverBackground;
}, props => {
  var _a;

  return (_a = props.theme.textColor) === null || _a === void 0 ? void 0 : _a.modalSubHeadingText;
});
const CriteriaGroup = /*#__PURE__*/styled(Section).withConfig({
  displayName: "ConditionsComponent__CriteriaGroup",
  componentId: "sc-v7lmqz-2"
})(["border:", ";"], props => {
  var _a;

  return (_a = props.theme.border) === null || _a === void 0 ? void 0 : _a.modalInnerComponents;
});
const ChainIconSVG = /*#__PURE__*/styled(Section).withConfig({
  displayName: "ConditionsComponent__ChainIconSVG",
  componentId: "sc-v7lmqz-3"
})(["width:20px;height:20px;svg,svg image,img{width:100%;height:100%;}"]);

const getRuleInfo = rules => {
  if (!rules) {
    return {
      CHAT: [],
      ENTRY: []
    };
  }

  const [chatRules, entryRules] = [getRulesToCondtionArray(rules.chat), getRulesToCondtionArray(rules.entry)];
  return {
    CHAT: chatRules,
    ENTRY: entryRules
  };
};

const getRulesToCondtionArray = arr => {
  const getKey = _json => {
    return Object.keys(_json)[0];
  };

  if (!arr) {
    return [];
  }

  const data = [];
  const conditions = Array.isArray(arr.conditions) ? arr.conditions[0] : arr.conditions;
  const rootOperator = getKey(conditions);
  data.push([{
    operator: rootOperator
  }]);

  if (conditions[rootOperator].length === 0) {
    return [];
  }

  const rules = conditions[rootOperator];

  for (const rule of rules) {
    const nodeOperator = getKey(rule);

    if (nodeOperator === 'type') {
      data.push([rule]);
    } else {
      data.push([{
        operator: nodeOperator
      }, ...rule[nodeOperator].map(el => Object.assign({}, el))]);
    }
  }

  return data;
};

const TokenGatedSvg = ({
  color
}) => {
  return jsx("svg", Object.assign({
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: 'none',
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: jsx("path", {
      d: "M9.75 0.25C7.82164 0.25 5.93657 0.821828 4.33319 1.89317C2.72982 2.96452 1.48013 4.48726 0.742179 6.26884C0.00422448 8.05042 -0.188858 10.0108 0.187348 11.9021C0.563554 13.7934 1.49215 15.5307 2.85571 16.8943C4.21927 18.2579 5.95656 19.1865 7.84787 19.5627C9.73919 19.9389 11.6996 19.7458 13.4812 19.0078C15.2627 18.2699 16.7855 17.0202 17.8568 15.4168C18.9282 13.8134 19.5 11.9284 19.5 10C19.4973 7.41498 18.4692 4.93661 16.6413 3.10872C14.8134 1.28084 12.335 0.25273 9.75 0.25ZM15.7613 12.7319C15.9318 12.8343 16.0547 13.0003 16.1029 13.1934C16.1511 13.3864 16.1206 13.5907 16.0181 13.7612C15.9157 13.9318 15.7497 14.0547 15.5566 14.1029C15.3636 14.1511 15.1593 14.1206 14.9888 14.0181L10.5 11.3247V16.1875C10.5 16.3864 10.421 16.5772 10.2803 16.7178C10.1397 16.8585 9.94892 16.9375 9.75 16.9375C9.55109 16.9375 9.36033 16.8585 9.21967 16.7178C9.07902 16.5772 9 16.3864 9 16.1875V11.3247L4.51125 14.0181C4.34069 14.1206 4.13641 14.1511 3.94337 14.1029C3.75032 14.0547 3.58432 13.9318 3.48188 13.7612C3.37944 13.5907 3.34895 13.3864 3.39713 13.1934C3.4453 13.0003 3.56819 12.8343 3.73875 12.7319L8.29219 10L3.73875 7.26813C3.56819 7.16569 3.4453 6.99968 3.39713 6.80664C3.34895 6.61359 3.37944 6.40932 3.48188 6.23875C3.58432 6.06818 3.75032 5.9453 3.94337 5.89712C4.13641 5.84895 4.34069 5.87944 4.51125 5.98187L9 8.67531V3.8125C9 3.61359 9.07902 3.42282 9.21967 3.28217C9.36033 3.14152 9.55109 3.0625 9.75 3.0625C9.94892 3.0625 10.1397 3.14152 10.2803 3.28217C10.421 3.42282 10.5 3.61359 10.5 3.8125V8.67531L14.9888 5.98187C15.0732 5.93115 15.1668 5.89756 15.2643 5.88302C15.3617 5.86848 15.4611 5.87327 15.5566 5.89712C15.6522 5.92098 15.7422 5.96342 15.8214 6.02204C15.9005 6.08065 15.9674 6.15429 16.0181 6.23875C16.0689 6.32321 16.1024 6.41683 16.117 6.51427C16.1315 6.6117 16.1267 6.71105 16.1029 6.80664C16.079 6.90222 16.0366 6.99218 15.978 7.07136C15.9193 7.15054 15.8457 7.2174 15.7613 7.26813L11.2078 10L15.7613 12.7319Z",
      fill: color !== null && color !== void 0 ? color : "#657795"
    })
  }));
};

const UPDATE_KEYS = {
  REMOVE_MEMBER: 'REMOVE_MEMBER',
  ADD_MEMBER: 'ADD_MEMBER',
  REMOVE_ADMIN: 'REMOVE_ADMIN',
  ADD_ADMIN: 'ADD_ADMIN'
};
const SUCCESS_MESSAGE = {
  REMOVE_MEMBER: 'Removed Member successfully',
  ADD_MEMBER: 'Group Invitation sent',
  REMOVE_ADMIN: 'Admin added successfully',
  ADD_ADMIN: 'Removed added successfully'
};

const PendingMembers = ({
  groupInfo,
  setShowPendingRequests,
  showPendingRequests,
  theme
}) => {
  var _a, _b, _c;

  if (groupInfo) {
    return jsxs(PendingRequestWrapper, Object.assign({
      theme: theme
    }, {
      children: [jsxs(PendingSection, Object.assign({
        onClick: () => setShowPendingRequests(!showPendingRequests)
      }, {
        children: [jsx(Span$1, Object.assign({
          fontSize: "18px",
          color: (_a = theme.textColor) === null || _a === void 0 ? void 0 : _a.modalSubHeadingText
        }, {
          children: "Pending Requests"
        })), jsx(Badge, {
          children: (_b = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.pendingMembers) === null || _b === void 0 ? void 0 : _b.length
        }), jsx(ArrowImage, {
          src: img$m,
          width: 'auto',
          setPosition: !showPendingRequests,
          borderRadius: "100%"
        })]
      })), showPendingRequests && jsx(ProfileSection, Object.assign({
        flexDirection: "column",
        flex: "1",
        justifyContent: "start",
        borderRadius: "16px"
      }, {
        children: (groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.pendingMembers) && ((_c = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.pendingMembers) === null || _c === void 0 ? void 0 : _c.length) > 0 && (groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.pendingMembers.map(item => {
          var _a;

          return jsx(GroupPendingMembers, Object.assign({
            theme: theme
          }, {
            children: jsx(ProfileContainer, {
              theme: theme,
              member: {
                wallet: shortenText((_a = item.wallet) === null || _a === void 0 ? void 0 : _a.split(':')[1], 6, true),
                image: (item === null || item === void 0 ? void 0 : item.image) || ''
              },
              customStyle: {
                imgHeight: '36px',
                imgMaxHeight: '36px',
                fontSize: 'inherit',
                fontWeight: '300'
              }
            })
          }));
        }))
      }))]
    }));
  } else {
    return null;
  }
};

const ConditionsInformation = ({
  theme,
  groupInfo,
  alert,
  header,
  subheader
}) => {
  var _a, _b, _c, _d;

  const groupRules = getRuleInfo(groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.rules);
  const isMobile = useMediaQuery(device.mobileL);

  const getOperator = key => {
    var _a;

    if (groupRules[key].length) {
      return (_a = groupRules[key][0][0]) === null || _a === void 0 ? void 0 : _a.operator;
    }

    return null;
  };

  return jsxs(Section, Object.assign({
    margin: "5px 0px 0px 0px",
    gap: "16px",
    flexDirection: "column",
    width: "100%"
  }, {
    children: [(((_b = (_a = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.rules) === null || _a === void 0 ? void 0 : _a.chat) === null || _b === void 0 ? void 0 : _b.conditions) || ((_d = (_c = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.rules) === null || _c === void 0 ? void 0 : _c.entry) === null || _d === void 0 ? void 0 : _d.conditions)) && jsx(GroupTypeBadge, {
      theme: theme,
      icon: jsx(TokenGatedSvg, {
        color: alert ? '#E93636' : undefined
      }),
      header: header !== null && header !== void 0 ? header : 'Gated group',
      subheader: subheader !== null && subheader !== void 0 ? subheader : 'Conditions must be true to join and chat',
      alert: alert
    }), jsx(ConditionSection$1, Object.assign({
      overflow: "hidden auto",
      maxHeight: isMobile ? '46vh' : '49vh',
      justifyContent: "start",
      flexDirection: "column",
      padding: "0 2px 0 0",
      theme: theme
    }, {
      children: Object.keys(ACCESS_TYPE_TITLE).map((key, idx) => {
        var _a, _b, _c, _d, _e, _f;

        return jsx(Fragment, {
          children: getOperator(key) ? jsxs(Section, Object.assign({
            flexDirection: "column"
          }, {
            children: [jsx(Span$1, Object.assign({
              fontSize: "16px",
              fontWeight: "500",
              alignSelf: "start",
              margin: "5px 0"
            }, {
              children: (_a = ACCESS_TYPE_TITLE[key]) === null || _a === void 0 ? void 0 : _a.heading
            })), jsxs(Span$1, Object.assign({
              fontSize: "14px",
              margin: "15px 0"
            }, {
              children: [(_c = OPERATOR_OPTIONS_INFO[(_b = groupRules[key][0][0]) === null || _b === void 0 ? void 0 : _b.operator]) === null || _c === void 0 ? void 0 : _c.head, jsxs(Span$1, Object.assign({
                color: (_d = theme.textColor) === null || _d === void 0 ? void 0 : _d.modalSubHeadingText
              }, {
                children: [' ', (_f = OPERATOR_OPTIONS_INFO[(_e = groupRules[key][0][0]) === null || _e === void 0 ? void 0 : _e.operator]) === null || _f === void 0 ? void 0 : _f.tail]
              }))]
            })), jsx(Section, Object.assign({
              width: "100%",
              justifyContent: "start",
              flexDirection: "column"
            }, {
              children: jsx(ConditionsComponent, {
                moreOptions: false,
                conditionData: groupRules[key]
              })
            }))]
          }), idx) : null
        });
      })
    }))]
  }));
};
const GroupTypeBadge = ({
  theme,
  icon,
  header,
  subheader,
  handleNextInformation,
  cursor,
  alert
}) => {
  var _a, _b;

  return (// <Section cursor={cursor} justifyContent='start' alignItems='start'>
    jsxs(PublicEncrypted, Object.assign({
      onClick: handleNextInformation,
      theme: theme,
      alert: alert,
      cursor: "pointer",
      justifyContent: "start"
    }, {
      children: [icon, jsxs(Section, Object.assign({
        cursor: cursor,
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "5px"
      }, {
        children: [jsx(Span$1, Object.assign({
          cursor: cursor,
          fontSize: "18px",
          textAlign: "left",
          color: (_a = theme.textColor) === null || _a === void 0 ? void 0 : _a.modalHeadingText
        }, {
          children: header
        })), jsx(Span$1, Object.assign({
          cursor: cursor,
          textAlign: "left",
          fontSize: "12px",
          color: (_b = theme.textColor) === null || _b === void 0 ? void 0 : _b.modalSubHeadingText
        }, {
          children: subheader
        }))]
      }))]
    })) // </Section>

  );
};
const GROUPINFO_STEPS = {
  GROUP_INFO: 1,
  CRITERIA: 2
};

const GroupInformation = ({
  theme,
  groupInfo,
  handleNextInformation,
  handleAddRemove,
  setShowAddMoreWalletModal,
  selectedMemberAddress,
  setSelectedMemberAddress
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;

  const {
    account
  } = useChatData();
  const [showPendingRequests, setShowPendingRequests] = useState(false);
  const [copyText, setCopyText] = useState('');
  const isMobile = useMediaQuery(device.mobileL);
  const dropdownRef = useRef(null);
  useClickAway(dropdownRef, () => setSelectedMemberAddress(null));

  const removeMember = () => __awaiter(void 0, void 0, void 0, function* () {
    const updatedMemberList = getUpdatedMemberList(groupInfo, selectedMemberAddress);
    const adminList = getUpdatedAdminList(groupInfo, selectedMemberAddress, true);
    yield handleAddRemove({
      memberList: updatedMemberList,
      adminList,
      updateKey: UPDATE_KEYS.REMOVE_MEMBER
    });
  });

  const updateGroupAdmin = updateKey => __awaiter(void 0, void 0, void 0, function* () {
    const groupMemberList = convertToWalletAddressList([...groupInfo.members, ...groupInfo.pendingMembers]);
    const newAdminList = getUpdatedAdminList(groupInfo, selectedMemberAddress, !(updateKey === UPDATE_KEYS.ADD_ADMIN));
    yield handleAddRemove({
      memberList: groupMemberList,
      adminList: newAdminList,
      updateKey
    });
  }); // const messageUserDropdown: DropdownValueType = {
  //     id: 'message_user',
  //     title: 'Message user',
  //     icon: Message,
  //     function: () => messageUser(),
  //   };


  const removeAdminDropdown = {
    id: 'dismiss_admin',
    title: 'Dismiss as admin',
    icon: img$i,
    function: () => updateGroupAdmin(UPDATE_KEYS.REMOVE_ADMIN)
  };
  const addAdminDropdown = {
    id: 'add_admin',
    title: 'Make group admin',
    icon: img$h,
    function: () => updateGroupAdmin(UPDATE_KEYS.ADD_ADMIN)
  };
  const removeMemberDropdown = {
    id: 'remove_member',
    title: 'Remove',
    icon: img$g,
    function: () => removeMember(),
    textColor: '#ED5858'
  };
  return jsxs(ScrollSection$2, Object.assign({
    margin: "auto",
    width: "100%",
    flexDirection: "column",
    gap: "16px",
    maxHeight: isMobile ? '59vh' : '61vh',
    height: isMobile ? '59vh' : '61vh',
    overflow: "hidden auto",
    justifyContent: "start",
    padding: "0 2px 0 0",
    theme: theme
  }, {
    children: [jsxs(GroupDescription, {
      children: [jsx(Span$1, Object.assign({
        fontSize: "18px",
        color: (_a = theme.textColor) === null || _a === void 0 ? void 0 : _a.modalHeadingText
      }, {
        children: "Chat ID"
      })), jsxs(Section, Object.assign({
        gap: "5px",
        alignSelf: "start",
        onClick: () => {
          copyToClipboard(groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.chatId);
          setCopyText('copied');
        },
        onMouseEnter: () => {
          setCopyText('click to copy');
        },
        onMouseLeave: () => {
          setCopyText('');
        }
      }, {
        children: [jsx(Span$1, Object.assign({
          textAlign: "start",
          fontSize: "16px",
          fontWeight: "400",
          color: (_b = theme.textColor) === null || _b === void 0 ? void 0 : _b.modalSubHeadingText
        }, {
          children: shortenText(groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.chatId, 8, true)
        })), !!copyText && jsx(Span$1, Object.assign({
          cursor: "pointer",
          position: "relative",
          padding: "2px 10px",
          color: (_c = theme.textColor) === null || _c === void 0 ? void 0 : _c.modalSubHeadingText,
          fontSize: "14px",
          fontWeight: "400",
          background: (_d = theme.backgroundColor) === null || _d === void 0 ? void 0 : _d.modalHoverBackground,
          borderRadius: "16px"
        }, {
          children: copyText
        }))]
      }))]
    }), jsxs(GroupDescription, {
      children: [jsx(Span$1, Object.assign({
        fontSize: "18px",
        color: (_e = theme.textColor) === null || _e === void 0 ? void 0 : _e.modalHeadingText
      }, {
        children: "Group Description"
      })), jsx(Span$1, Object.assign({
        textAlign: "start",
        fontSize: "16px",
        fontWeight: "400",
        color: (_f = theme.textColor) === null || _f === void 0 ? void 0 : _f.modalSubHeadingText
      }, {
        children: groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.groupDescription
      }))]
    }), jsx(GroupTypeBadge, {
      theme: theme,
      icon: jsx(Image$1, {
        cursor: "default",
        src: (groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.isPublic) ? img$e : img$d,
        height: "24px",
        maxHeight: "24px",
        width: 'auto'
      }),
      header: (groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.isPublic) ? 'Open' : 'Encrypted',
      subheader: (groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.isPublic) ? 'Chats are not encrypted' : 'Chats are end-to-end encrypted'
    }), (((_h = (_g = groupInfo.rules) === null || _g === void 0 ? void 0 : _g.chat) === null || _h === void 0 ? void 0 : _h.conditions) || ((_k = (_j = groupInfo.rules) === null || _j === void 0 ? void 0 : _j.entry) === null || _k === void 0 ? void 0 : _k.conditions)) && jsx(GroupTypeBadge, {
      cursor: "pointer",
      handleNextInformation: handleNextInformation,
      theme: theme,
      icon: jsx(TokenGatedSvg, {}),
      header: 'Gated group',
      subheader: 'Conditions must be true to join'
    }), isAccountOwnerAdmin(groupInfo, account) && (groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.members) && ((_l = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.members) === null || _l === void 0 ? void 0 : _l.length) < 10 && jsxs(AddWalletContainer, Object.assign({
      theme: theme,
      onClick: () => setShowAddMoreWalletModal(true)
    }, {
      children: [jsx(Image$1, {
        cursor: "pointer",
        src: img$c,
        height: "18px",
        maxHeight: "18px",
        width: 'auto'
      }), jsx(Span$1, Object.assign({
        cursor: "pointer",
        color: (_m = theme.textColor) === null || _m === void 0 ? void 0 : _m.modalSubHeadingText,
        margin: "0px 14px",
        fontSize: "16px",
        fontWeight: "400"
      }, {
        children: "Add more wallets"
      }))]
    })), jsx(Section, Object.assign({
      borderRadius: "16px"
    }, {
      children: ((_o = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.pendingMembers) === null || _o === void 0 ? void 0 : _o.length) > 0 && jsx(PendingMembers, {
        groupInfo: groupInfo,
        setShowPendingRequests: setShowPendingRequests,
        showPendingRequests: showPendingRequests,
        theme: theme
      })
    })), jsx(ProfileSection // margin="15px 10px"
    , Object.assign({
      // margin="15px 10px"
      flexDirection: "column",
      zIndex: "2",
      justifyContent: "start"
    }, {
      children: (groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.members) && ((_p = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.members) === null || _p === void 0 ? void 0 : _p.length) > 0 && (groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.members.map((item, index) => jsx(MemberProfileCard, {
        member: item,
        dropdownValues: (item === null || item === void 0 ? void 0 : item.isAdmin) && isAccountOwnerAdmin(groupInfo, account) ? [removeAdminDropdown, removeMemberDropdown] : isAccountOwnerAdmin(groupInfo, account) ? [addAdminDropdown, removeMemberDropdown] : [],
        selectedMemberAddress: selectedMemberAddress,
        setSelectedMemberAddress: setSelectedMemberAddress,
        dropdownRef: dropdownRef
      }, index)))
    }))]
  }));
};

const GroupInfoModal = ({
  theme,
  setModal,
  groupInfo,
  setGroupInfo,
  groupInfoModalBackground: _groupInfoModalBackground = MODAL_BACKGROUND_TYPE.OVERLAY,
  groupInfoModalPositionType: _groupInfoModalPositionType = MODAL_POSITION_TYPE.GLOBAL
}) => {
  var _a, _b, _c, _d, _e;

  const [activeComponent, setActiveComponent] = useState(GROUPINFO_STEPS.GROUP_INFO);
  const [memberList, setMemberList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAddMoreWalletModal, setShowAddMoreWalletModal] = useState(false);
  useState(false);
  const [selectedMemberAddress, setSelectedMemberAddress] = useState(null);
  const isMobile = useMediaQuery(device.mobileL);
  const groupInfoToast = useToast();
  const {
    updateGroup
  } = useUpdateGroup();
  const groupCreator = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.groupCreator;
  const membersExceptGroupCreator = (_a = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.members) === null || _a === void 0 ? void 0 : _a.filter(x => {
    var _a;

    return ((_a = x.wallet) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== (groupCreator === null || groupCreator === void 0 ? void 0 : groupCreator.toLowerCase());
  });
  const groupMembers = [...membersExceptGroupCreator, ...groupInfo.pendingMembers];
  const dropdownRef = useRef(null);

  const handleNextInfo = () => {
    setActiveComponent(activeComponent + 1);
  };

  const handlePreviousInfo = () => {
    setActiveComponent(activeComponent - 1);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case GROUPINFO_STEPS.GROUP_INFO:
        return jsx(GroupInformation, {
          handleNextInformation: handleNextInfo,
          theme: theme,
          setModal: setModal,
          groupInfo: groupInfo,
          setGroupInfo: setGroupInfo,
          handleAddRemove: handleAddRemove,
          setShowAddMoreWalletModal: setShowAddMoreWalletModal,
          selectedMemberAddress: selectedMemberAddress,
          setSelectedMemberAddress: setSelectedMemberAddress
        });

      case GROUPINFO_STEPS.CRITERIA:
        return jsx(ConditionsInformation, {
          groupInfo: groupInfo,
          theme: theme
        });

      default:
        return jsx(GroupInformation, {
          handleNextInformation: handleNextInfo,
          theme: theme,
          setModal: setModal,
          groupInfo: groupInfo,
          setGroupInfo: setGroupInfo,
          handleAddRemove: handleAddRemove,
          setShowAddMoreWalletModal: setShowAddMoreWalletModal,
          selectedMemberAddress: selectedMemberAddress,
          setSelectedMemberAddress: setSelectedMemberAddress
        });
    }
  };

  useClickAway(dropdownRef, () => setSelectedMemberAddress(null));

  const onClose = () => {
    setModal(false);
  };

  const handleUpdateGroup = options => __awaiter(void 0, void 0, void 0, function* () {
    const {
      adminList,
      memberList
    } = options || {};
    const updateResponse = yield updateGroup({
      groupInfo,
      memberList,
      adminList
    });
    return {
      updateResponse
    };
  });

  const handleClose = () => onClose();

  const handleAddRemove = options => __awaiter(void 0, void 0, void 0, function* () {
    const {
      adminList,
      memberList,
      updateKey
    } = options || {};

    try {
      setIsLoading(true);
      const {
        updateResponse
      } = yield handleUpdateGroup({
        adminList,
        memberList
      });

      if (typeof updateResponse !== 'string') {
        setGroupInfo(updateResponse);
        groupInfoToast.showMessageToast({
          toastTitle: 'Success',
          toastMessage: SUCCESS_MESSAGE[updateKey],
          toastType: 'SUCCESS',
          getToastIcon: size => jsx(MdCheckCircle, {
            size: size,
            color: "green"
          })
        });
      } else {
        groupInfoToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: updateResponse,
          toastType: 'ERROR',
          getToastIcon: size => jsx(MdError, {
            size: size,
            color: "red"
          })
        });
      }
    } catch (error) {
      console.error('Error', error);
      groupInfoToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: 'Please, try again',
        toastType: 'ERROR',
        getToastIcon: size => jsx(MdError, {
          size: size,
          color: "red"
        })
      });
    } finally {
      if (updateKey === UPDATE_KEYS.ADD_MEMBER) handleClose();
      setIsLoading(false);
      setSelectedMemberAddress(null);
    }
  });

  const addMembers = () => __awaiter(void 0, void 0, void 0, function* () {
    //Already Present Members and PendingMembers
    const groupMemberList = convertToWalletAddressList([...groupInfo.members, ...groupInfo.pendingMembers]); //Newly Added Members and alreadyPresent Members in the groupchat

    const newMembersToAdd = memberList.map(member => member.wallets);
    const members = [...groupMemberList, ...newMembersToAdd]; //Admins wallet address from both members and pendingMembers

    const adminList = getAdminList === null || getAdminList === void 0 ? void 0 : getAdminList(groupInfo);
    yield handleAddRemove({
      memberList: members,
      adminList,
      updateKey: UPDATE_KEYS.ADD_MEMBER
    });
  });

  const handlePrevious = () => {
    setShowAddMoreWalletModal(false);
  };

  if (groupInfo) {
    return jsxs(Modal, Object.assign({
      clickawayClose: onClose,
      modalBackground: _groupInfoModalBackground,
      modalPositionType: _groupInfoModalPositionType
    }, {
      children: [!showAddMoreWalletModal && jsxs(Section, Object.assign({
        margin: "auto",
        width: isMobile ? '100%' : '410px',
        flexDirection: "column",
        gap: "16px",
        padding: isMobile ? '0px auto' : '0px 10px'
      }, {
        children: [jsx(ModalHeader, {
          handlePrevious: activeComponent == 2 ? handlePreviousInfo : undefined,
          title: "Group Info",
          handleClose: onClose
        }), jsxs(GroupHeader, {
          children: [jsx(Image$1, {
            src: (_b = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.groupImage) !== null && _b !== void 0 ? _b : '',
            height: "64px",
            maxHeight: "64px",
            width: 'auto',
            borderRadius: "16px"
          }), jsxs(Section, Object.assign({
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "5px"
          }, {
            children: [jsx(Span$1, Object.assign({
              fontSize: "20px",
              fontWeight: "500",
              color: (_c = theme.textColor) === null || _c === void 0 ? void 0 : _c.modalHeadingText
            }, {
              children: groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.groupName
            })), jsxs(Span$1, Object.assign({
              fontSize: "16px",
              fontWeight: "500",
              color: (_d = theme.textColor) === null || _d === void 0 ? void 0 : _d.modalSubHeadingText
            }, {
              children: [(_e = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.members) === null || _e === void 0 ? void 0 : _e.length, " Members"]
            }))]
          }))]
        }), renderComponent()]
      })), showAddMoreWalletModal && jsx(AddWalletContent, {
        onSubmit: addMembers,
        handlePrevious: handlePrevious,
        onClose: onClose,
        memberList: memberList,
        handleMemberList: setMemberList,
        groupMembers: groupMembers,
        isLoading: isLoading,
        modalHeader: 'Add More Wallets'
      })]
    }));
  } else {
    return null;
  }
}; //styles

const GroupHeader = /*#__PURE__*/styled.div.withConfig({
  displayName: "GroupInfoModal__GroupHeader",
  componentId: "sc-x8f4tb-0"
})(["display:flex;flex-direction:row;width:100%;gap:19px;"]);
const GroupDescription = /*#__PURE__*/styled.div.withConfig({
  displayName: "GroupInfoModal__GroupDescription",
  componentId: "sc-x8f4tb-1"
})(["display:flex;flex-direction:column;width:100%;align-items:flex-start;gap:5px;"]);
const PublicEncrypted = /*#__PURE__*/styled(Section).withConfig({
  displayName: "GroupInfoModal__PublicEncrypted",
  componentId: "sc-x8f4tb-2"
})(["display:flex;flex-direction:row;width:100%;gap:12px;align-items:center;border:", ";border-radius:", ";padding:12px 16px;box-sizing:border-box;background:", ";"], props => (props === null || props === void 0 ? void 0 : props.alert) ? '1px solid #E93636' : props.theme.border.modalInnerComponents, props => props.theme.borderRadius.modalInnerComponents, props => props.theme.backgroundColor.modalHoverBackground);
const AddWalletContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "GroupInfoModal__AddWalletContainer",
  componentId: "sc-x8f4tb-3"
})(["border:", ";border-radius:", ";width:100%;padding:20px 16px;box-sizing:border-box;display:flex;flex-direction:row;justify-content:center;cursor:pointer;align-items:center;"], props => props.theme.border.modalInnerComponents, props => props.theme.borderRadius.modalInnerComponents);
const GroupPendingMembers = /*#__PURE__*/styled.div.withConfig({
  displayName: "GroupInfoModal__GroupPendingMembers",
  componentId: "sc-x8f4tb-4"
})(["margin-top:3px;display:flex;flex-direction:row;width:100%;align-items:center;background:", ";padding:10px 15px;box-sizing:border-box;&:last-child{border-radius:0px 0px 16px 16px;}"], props => props.theme.backgroundColor.modalHoverBackground);
const PendingRequestWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "GroupInfoModal__PendingRequestWrapper",
  componentId: "sc-x8f4tb-5"
})(["width:100%;border:", ";border-radius:", ";padding:0px 0px;box-sizing:border-box;"], props => props.theme.border.modalInnerComponents, props => props.theme.borderRadius.modalInnerComponents);
const PendingSection = /*#__PURE__*/styled.div.withConfig({
  displayName: "GroupInfoModal__PendingSection",
  componentId: "sc-x8f4tb-6"
})(["width:100%;display:flex;flex-direction:row;align-items:center;flex:1;cursor:pointer;padding:15px 20px;box-sizing:border-box;"]);
const ArrowImage = /*#__PURE__*/styled(Image$1).withConfig({
  displayName: "GroupInfoModal__ArrowImage",
  componentId: "sc-x8f4tb-7"
})(["margin-left:auto;transform:", ";"], props => (props === null || props === void 0 ? void 0 : props.setPosition) ? 'rotate(0)' : 'rotate(180deg)');
const Badge = /*#__PURE__*/styled.div.withConfig({
  displayName: "GroupInfoModal__Badge",
  componentId: "sc-x8f4tb-8"
})(["margin:0 0 0 5px;font-size:13px;background:rgb(207,28,132);padding:4px 8px;border-radius:7px;color:white;font-weight:700;"]);
const ConditionSection$1 = /*#__PURE__*/styled(Section).withConfig({
  displayName: "GroupInfoModal__ConditionSection",
  componentId: "sc-x8f4tb-9"
})(["&::-webkit-scrollbar-thumb{background:", ";border-radius:10px;}&::-webkit-scrollbar-button{height:20px;}&::-webkit-scrollbar{width:4px;}"], props => props.theme.scrollbarColor);
const ProfileSection = /*#__PURE__*/styled(Section).withConfig({
  displayName: "GroupInfoModal__ProfileSection",
  componentId: "sc-x8f4tb-10"
})(["height:fit-content;"]);
const ScrollSection$2 = /*#__PURE__*/styled(Section).withConfig({
  displayName: "GroupInfoModal__ScrollSection",
  componentId: "sc-x8f4tb-11"
})(["&::-webkit-scrollbar-thumb{background:", ";border-radius:10px;}&::-webkit-scrollbar-button{height:40px;}&::-webkit-scrollbar{width:4px;}"], props => props.theme.scrollbarColor);

var img$9 = "data:image/svg+xml,%3csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M30.9137 15.595C30.87 15.4963 29.8112 13.1475 27.4575 10.7937C24.3212 7.6575 20.36 6 16 6C11.64 6 7.67874 7.6575 4.54249 10.7937C2.18874 13.1475 1.12499 15.5 1.08624 15.595C1.02938 15.7229 1 15.8613 1 16.0012C1 16.1412 1.02938 16.2796 1.08624 16.4075C1.12999 16.5062 2.18874 18.8538 4.54249 21.2075C7.67874 24.3425 11.64 26 16 26C20.36 26 24.3212 24.3425 27.4575 21.2075C29.8112 18.8538 30.87 16.5062 30.9137 16.4075C30.9706 16.2796 31 16.1412 31 16.0012C31 15.8613 30.9706 15.7229 30.9137 15.595ZM16 24C12.1525 24 8.79124 22.6012 6.00874 19.8438C4.86704 18.7084 3.89572 17.4137 3.12499 16C3.89551 14.5862 4.86686 13.2915 6.00874 12.1562C8.79124 9.39875 12.1525 8 16 8C19.8475 8 23.2087 9.39875 25.9912 12.1562C27.1352 13.2912 28.1086 14.5859 28.8812 16C27.98 17.6825 24.0537 24 16 24ZM16 10C14.8133 10 13.6533 10.3519 12.6666 11.0112C11.6799 11.6705 10.9108 12.6075 10.4567 13.7039C10.0026 14.8003 9.88377 16.0067 10.1153 17.1705C10.3468 18.3344 10.9182 19.4035 11.7573 20.2426C12.5965 21.0818 13.6656 21.6532 14.8294 21.8847C15.9933 22.1162 17.1997 21.9974 18.2961 21.5433C19.3924 21.0892 20.3295 20.3201 20.9888 19.3334C21.6481 18.3467 22 17.1867 22 16C21.9983 14.4092 21.3657 12.884 20.2408 11.7592C19.1159 10.6343 17.5908 10.0017 16 10ZM16 20C15.2089 20 14.4355 19.7654 13.7777 19.3259C13.1199 18.8864 12.6072 18.2616 12.3045 17.5307C12.0017 16.7998 11.9225 15.9956 12.0768 15.2196C12.2312 14.4437 12.6122 13.731 13.1716 13.1716C13.731 12.6122 14.4437 12.2312 15.2196 12.0769C15.9956 11.9225 16.7998 12.0017 17.5307 12.3045C18.2616 12.6072 18.8863 13.1199 19.3259 13.7777C19.7654 14.4355 20 15.2089 20 16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20Z' fill='%23787E99'/%3e%3c/svg%3e";

var img$8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC";

var img$7 = "data:image/svg+xml,%3csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z' stroke='%23787E99' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M16 15V22' stroke='%23787E99' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M15.75 12C16.5784 12 17.25 11.3284 17.25 10.5C17.25 9.67157 16.5784 9 15.75 9C14.9216 9 14.25 9.67157 14.25 10.5C14.25 11.3284 14.9216 12 15.75 12Z' fill='%23787E99'/%3e%3c/svg%3e";

var img$6 = "data:image/svg+xml,%3csvg width='20' height='22' viewBox='0 0 20 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8 2.5C8 2.10444 8.1173 1.71776 8.33706 1.38886C8.55682 1.05996 8.86918 0.803617 9.23463 0.652242C9.60009 0.500867 10.0022 0.46126 10.3902 0.53843C10.7781 0.615601 11.1345 0.806082 11.4142 1.08579C11.6939 1.36549 11.8844 1.72186 11.9616 2.10982C12.0387 2.49778 11.9991 2.89992 11.8478 3.26537C11.6964 3.63082 11.44 3.94318 11.1111 4.16294C10.7822 4.3827 10.3956 4.5 10 4.5C9.46957 4.5 8.96086 4.28929 8.58579 3.91421C8.21072 3.53914 8 3.03043 8 2.5ZM10 9C9.60444 9 9.21776 9.1173 8.88886 9.33706C8.55996 9.55682 8.30362 9.86918 8.15224 10.2346C8.00087 10.6001 7.96126 11.0022 8.03843 11.3902C8.1156 11.7781 8.30608 12.1345 8.58579 12.4142C8.86549 12.6939 9.22186 12.8844 9.60982 12.9616C9.99778 13.0387 10.3999 12.9991 10.7654 12.8478C11.1308 12.6964 11.4432 12.44 11.6629 12.1111C11.8827 11.7822 12 11.3956 12 11C12 10.4696 11.7893 9.96086 11.4142 9.58579C11.0391 9.21072 10.5304 9 10 9ZM10 17.5C9.60444 17.5 9.21776 17.6173 8.88886 17.8371C8.55996 18.0568 8.30362 18.3692 8.15224 18.7346C8.00087 19.1001 7.96126 19.5022 8.03843 19.8902C8.1156 20.2781 8.30608 20.6345 8.58579 20.9142C8.86549 21.1939 9.22186 21.3844 9.60982 21.4616C9.99778 21.5387 10.3999 21.4991 10.7654 21.3478C11.1308 21.1964 11.4432 20.94 11.6629 20.6111C11.8827 20.2822 12 19.8956 12 19.5C12 18.9696 11.7893 18.4609 11.4142 18.0858C11.0391 17.7107 10.5304 17.5 10 17.5Z' fill='%23787E99'/%3e%3c/svg%3e";

const ChatProfile = ({
  chatId,
  style,
  groupInfoModalBackground: _groupInfoModalBackground = MODAL_BACKGROUND_TYPE.OVERLAY,
  groupInfoModalPositionType: _groupInfoModalPositionType = MODAL_POSITION_TYPE.GLOBAL
}) => {
  var _a, _b, _c, _d;

  const theme = useContext(ThemeContext);
  const {
    account,
    env
  } = useChatData();
  const {
    getGroupByID
  } = useGetGroupByID();
  const {
    fetchUserChatProfile
  } = useChatProfile();
  const [isGroup, setIsGroup] = useState(false);
  const [options, setOptions] = useState(false);
  const [chatInfo, setChatInfo] = useState();
  const [groupInfo, setGroupInfo] = useState();
  const [ensName, setEnsName] = useState('');
  const isMobile = useMediaQuery(device.tablet);
  const l1ChainId = allowedNetworks[env].includes(1) ? 1 : 5;
  const provider = new ethers.providers.InfuraProvider(l1ChainId, InfuraAPIKey);
  const DropdownRef = useRef(null);
  const [modal, setModal] = useState(false);
  useClickAway(DropdownRef, () => {
    setOptions(false);
  });

  const ShowModal = () => {
    setModal(true);
  };

  const fetchProfileData = () => __awaiter(void 0, void 0, void 0, function* () {
    if (isValidETHAddress(chatId)) {
      const ChatProfile = yield fetchUserChatProfile({
        profileId: chatId
      });
      const result = yield resolveNewEns(chatId, provider);
      setEnsName(result);
      setChatInfo(ChatProfile);
      setGroupInfo(null);
      setIsGroup(false);
    } else {
      const GroupProfile = yield getGroupByID({
        groupId: chatId
      });
      setGroupInfo(GroupProfile);
      setChatInfo(null);
      setIsGroup(true);
    }
  });

  const getImage = () => {
    var _a, _b, _c, _d, _e, _f, _g;

    if (chatInfo || groupInfo) {
      return isGroup ? (_a = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.groupImage) !== null && _a !== void 0 ? _a : img$8 : (_c = (_b = chatInfo === null || chatInfo === void 0 ? void 0 : chatInfo.profile) === null || _b === void 0 ? void 0 : _b.picture) !== null && _c !== void 0 ? _c : (_e = (_d = createBlockie === null || createBlockie === void 0 ? void 0 : createBlockie(chatId)) === null || _d === void 0 ? void 0 : _d.toDataURL()) === null || _e === void 0 ? void 0 : _e.toString();
    } else {
      return (_g = (_f = createBlockie === null || createBlockie === void 0 ? void 0 : createBlockie(chatId)) === null || _f === void 0 ? void 0 : _f.toDataURL()) === null || _g === void 0 ? void 0 : _g.toString();
    }
  };

  const getProfileName = () => {
    var _a, _b, _c, _d;

    return isGroup ? groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.groupName : ensName ? `${ensName} (${isMobile ? shortenText((_b = (_a = chatInfo === null || chatInfo === void 0 ? void 0 : chatInfo.did) === null || _a === void 0 ? void 0 : _a.split(':')[1]) !== null && _b !== void 0 ? _b : '', 4, true) : chatId})` : chatInfo ? shortenText((_d = (_c = chatInfo.did) === null || _c === void 0 ? void 0 : _c.split(':')[1]) !== null && _d !== void 0 ? _d : '', 6, true) : shortenText(chatId, 6, true);
  };

  useEffect(() => {
    if (!chatId) return;
    fetchProfileData();
  }, [chatId, account, env]);

  if (chatId && style === 'Info') {
    return jsxs(Container$1, Object.assign({
      theme: theme
    }, {
      children: [jsx(ProfileContainer, {
        theme: theme,
        member: {
          wallet: getProfileName(),
          image: getImage()
        },
        customStyle: {
          fontSize: '17px'
        }
      }), jsxs(Section, Object.assign({
        zIndex: "unset",
        flexDirection: "row",
        gap: "10px",
        margin: "0 20px 0 auto",
        alignSelf: "center"
      }, {
        children: [(((_b = (_a = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.rules) === null || _a === void 0 ? void 0 : _a.chat) === null || _b === void 0 ? void 0 : _b.conditions) || ((_d = (_c = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.rules) === null || _c === void 0 ? void 0 : _c.entry) === null || _d === void 0 ? void 0 : _d.conditions)) && jsx(TokenGatedSvg, {}), !!(groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.isPublic) && jsx(Image$1, {
          src: img$9,
          height: "28px",
          maxHeight: "32px",
          width: 'auto'
        }), !!groupInfo && isGroup && jsxs(ImageItem, Object.assign({
          onClick: () => setOptions(true)
        }, {
          children: [jsx(Image$1, {
            src: img$6,
            height: "21px",
            maxHeight: "32px",
            width: 'auto',
            cursor: "pointer"
          }), options && jsx(DropDownBar, Object.assign({
            theme: theme,
            ref: DropdownRef
          }, {
            children: jsxs(DropDownItem, Object.assign({
              cursor: "pointer",
              onClick: ShowModal
            }, {
              children: [jsx(Image$1, {
                src: img$7,
                height: "21px",
                maxHeight: "21px",
                width: 'auto',
                cursor: "pointer"
              }), jsx(TextItem, Object.assign({
                cursor: "pointer"
              }, {
                children: "Group Info"
              }))]
            }))
          }))]
        }))]
      })), modal && jsx(GroupInfoModal, {
        theme: theme,
        setModal: setModal,
        groupInfo: groupInfo,
        setGroupInfo: setGroupInfo,
        groupInfoModalBackground: _groupInfoModalBackground,
        groupInfoModalPositionType: _groupInfoModalPositionType
      }), jsx(ToastContainer, {})]
    }));
  } else {
    return null;
  }
};
const Container$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "ChatProfile__Container",
  componentId: "sc-1z0n7or-0"
})(["width:100%;background:", ";border:", ";border-radius:", ";display:flex;flex-direction:row;align-items:center;padding:6px;box-sizing:border-box;"], props => props.theme.backgroundColor.chatProfileBackground, props => {
  var _a;

  return (_a = props.theme.border) === null || _a === void 0 ? void 0 : _a.chatProfile;
}, props => {
  var _a;

  return (_a = props.theme.borderRadius) === null || _a === void 0 ? void 0 : _a.chatProfile;
});
const ImageItem = /*#__PURE__*/styled.div.withConfig({
  displayName: "ChatProfile__ImageItem",
  componentId: "sc-1z0n7or-1"
})(["position:relative;"]);
const DropDownBar = /*#__PURE__*/styled.div.withConfig({
  displayName: "ChatProfile__DropDownBar",
  componentId: "sc-1z0n7or-2"
})(["position:absolute;top:30px;left:-130px;cursor:pointer;display:block;min-width:140px;color:rgb(101,119,149);background:", ";border:", ";z-index:10;border-radius:", ";"], props => props.theme.backgroundColor.modalBackground, props => props.theme.border.modalInnerComponents, props => props.theme.borderRadius.modalInnerComponents);
const DropDownItem = /*#__PURE__*/styled(Span$1).withConfig({
  displayName: "ChatProfile__DropDownItem",
  componentId: "sc-1z0n7or-4"
})(["display:flex;flex-direction:row;align-items:center;gap:8px;padding:10px 16px;border-radius:16px;z-index:3000000;width:100%;"]);
const TextItem = /*#__PURE__*/styled(Span$1).withConfig({
  displayName: "ChatProfile__TextItem",
  componentId: "sc-1z0n7or-5"
})(["white-space:nowrap;overflow:hidden;"]);

const SendCompIcon = () => {
  return jsx("svg", Object.assign({
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: jsx("path", {
      d: "M27.4625 3.24124L20.9125 26.4787C20.8033 26.8722 20.5755 27.2225 20.2602 27.4819C19.9448 27.7414 19.5572 27.8974 19.15 27.9287H18.975C18.5983 27.9279 18.2295 27.8207 17.9111 27.6194C17.5926 27.4182 17.3375 27.1311 17.175 26.7912L12.7125 17.3662C12.6687 17.2716 12.6548 17.1659 12.6727 17.0631C12.6906 16.9604 12.7394 16.8655 12.8125 16.7912L19.225 10.3787C19.3254 10.2878 19.4063 10.1774 19.4627 10.0542C19.5191 9.93107 19.55 9.79773 19.5533 9.6623C19.5566 9.52688 19.5324 9.39219 19.4821 9.26641C19.4318 9.14063 19.3565 9.02637 19.2607 8.93058C19.1649 8.8348 19.0507 8.75947 18.9249 8.70917C18.7991 8.65888 18.6644 8.63466 18.529 8.638C18.3936 8.64133 18.2602 8.67214 18.1371 8.72857C18.0139 8.785 17.9035 8.86585 17.8125 8.96624L11.4 15.3912C11.3258 15.4644 11.2309 15.5132 11.1282 15.5311C11.0254 15.549 10.9197 15.5351 10.825 15.4912L1.45004 11.0537C1.08311 10.8804 0.775053 10.6033 0.563988 10.2567C0.352924 9.91016 0.248118 9.50928 0.262542 9.10374C0.284668 8.68619 0.437922 8.28625 0.700498 7.96083C0.963074 7.63542 1.32159 7.40111 1.72504 7.29124L25.0125 0.728741C25.4198 0.612421 25.8536 0.628425 26.2512 0.774446C26.6488 0.920467 26.9898 1.18896 27.225 1.54124C27.3829 1.79158 27.4857 2.07261 27.5266 2.3657C27.5676 2.65879 27.5457 2.95723 27.4625 3.24124Z",
      fill: "#D53A94"
    })
  }));
};

const OpenLink = ({
  height: _height = "8",
  width: _width = "8"
}) => {
  return jsx("svg", Object.assign({
    width: _width,
    height: _height,
    viewBox: "0 0 8 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: jsx("path", {
      d: "M0.130244 7.24089L6.48282 0.888862H1.77797C1.6601 0.888862 1.54706 0.842038 1.46371 0.758691C1.38036 0.675344 1.33354 0.562301 1.33354 0.444431C1.33354 0.32656 1.38036 0.213518 1.46371 0.130171C1.54706 0.0468235 1.6601 4.76837e-07 1.77797 4.76837e-07H7.55557C7.67344 4.76837e-07 7.78648 0.0468235 7.86983 0.130171C7.95318 0.213518 8 0.32656 8 0.444431V6.22203C8 6.3399 7.95318 6.45294 7.86983 6.53629C7.78648 6.61964 7.67344 6.66646 7.55557 6.66646C7.4377 6.66646 7.32466 6.61964 7.24131 6.53629C7.15796 6.45294 7.11114 6.3399 7.11114 6.22203V1.51718L0.759113 7.86976C0.717821 7.91105 0.6688 7.9438 0.61485 7.96615C0.560899 7.9885 0.503074 8 0.444678 8C0.386282 8 0.328458 7.9885 0.274508 7.96615C0.220557 7.9438 0.171535 7.91105 0.130244 7.86976C0.0889516 7.82846 0.0561972 7.77944 0.0338502 7.72549C0.0115027 7.67154 4.76837e-07 7.61372 4.76837e-07 7.55532C4.76837e-07 7.49693 0.0115027 7.4391 0.0338502 7.38515C0.0561972 7.3312 0.0889516 7.28218 0.130244 7.24089Z",
      fill: "#D53A94"
    })
  }));
};

const useVerifyAccessControl = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [verificationSuccessfull, setVerificationSuccessfull] = useState(true);
  const [verified, setVerified] = useState(false);
  const {
    pgpPrivateKey,
    env,
    account
  } = useChatData();
  const verifyAccessControl = useCallback(options => __awaiter(void 0, void 0, void 0, function* () {
    const {
      chatId,
      did
    } = options || {};
    setLoading(true);

    try {
      const response = yield PushAPI.chat.getGroupAccess({
        chatId: chatId,
        did: `eip155:${did}`,
        env: env
      });
      setLoading(false);

      if (response.chat === false) {
        setVerificationSuccessfull(false);
      } else if (response.chat === true) {
        setVerified(true);
        setAccessControl(chatId, false);
      }

      if (!response) {
        return false;
      }

      return;
    } catch (error) {
      setLoading(false);
      setVerificationSuccessfull(false);
      setError(error.message);
      console.log(error);
      return;
    }
  }), [pgpPrivateKey, account, env]);
  return {
    verifyAccessControl,
    error,
    loading,
    verificationSuccessfull,
    setVerificationSuccessfull,
    verified,
    setVerified
  };
};

const ConnectButtonSub = ({
  autoConnect: _autoConnect = false
}) => {
  const {
    wallet,
    connecting,
    connect,
    disconnect
  } = useAccount();
  const {
    signer,
    setAccount,
    setSigner
  } = useChatData();
  const theme = useContext(ThemeContext);

  const setUserData = () => {
    if (wallet) {
      (() => __awaiter(void 0, void 0, void 0, function* () {
        const ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any');
        const signer = ethersProvider.getSigner();
        const newAdd = yield getAddressFromSigner(signer);
        setSigner(signer);
        setAccount(newAdd);
      }))();
    } else if (!wallet) {
      setAccount('');
      setSigner(undefined);
    }
  };

  useEffect(() => {
    if (wallet && !_autoConnect) disconnect(wallet);
    setUserData();
  }, [wallet]);
  return !signer ? jsx(ConnectButtonDiv, Object.assign({
    theme: theme
  }, {
    children: jsx("button", Object.assign({
      onClick: () => wallet ? disconnect(wallet) : connect()
    }, {
      children: connecting ? 'connecting' : wallet ? 'disconnect' : 'Connect Wallet'
    }))
  })) : jsx(Fragment, {});
}; //styles

const ConnectButtonDiv = /*#__PURE__*/styled.div.withConfig({
  displayName: "ConnectButton__ConnectButtonDiv",
  componentId: "sc-c9327r-0"
})(["width:fit-content;button{background:", ";color:", ";text-align:center;font-size:1em;cursor:pointer;border-radius:10px;padding:10px 20px;outline:none;border:none;cursor:pointer;font-weight:600;}button:hover{scale:1.05;transition:0.3s;}@media ", "{font-size:12px;}body.modal-open{overflow-y:hidden;}"], props => {
  var _a;

  return `${(_a = props.theme.backgroundColor) === null || _a === void 0 ? void 0 : _a.buttonBackground}!important`;
}, props => {
  var _a;

  return `${(_a = props.theme.textColor) === null || _a === void 0 ? void 0 : _a.buttonText}!important`;
}, device.mobileL);

var img$5 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8'%3f%3e%3csvg id='a' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 329.62 452.94'%3e%3cdefs%3e%3cstyle%3e.h%7bfill:url(%23e)%3b%7d.i%7bfill:url(%23d)%3b%7d.j%7bfill:url(%23g)%3b%7d.k%7bfill:url(%23f)%3b%7d.l%7bfill:url(%23c)%3b%7d.m%7bfill:url(%23b)%3b%7d%3c/style%3e%3clinearGradient id='b' x1='188.38' y1='180.56' x2='147.63' y2='111.29' gradientTransform='translate(0 438.53) scale(1 -1)' gradientUnits='userSpaceOnUse'%3e%3cstop offset='0' stop-color='%23ff94a6'/%3e%3cstop offset='.32' stop-color='%23e03dc1'/%3e%3cstop offset='1' stop-color='%238247e5'/%3e%3c/linearGradient%3e%3clinearGradient id='c' x1='207.9' y1='181.3' x2='121.94' y2='303.46' gradientTransform='matrix(1%2c 0%2c 0%2c 1%2c 0%2c 0)' xlink:href='%23b'/%3e%3clinearGradient id='d' x1='277.12' y1='319.97' x2='68.41' y2='181.43' xlink:href='%23b'/%3e%3clinearGradient id='e' x1='275.17' y1='322.92' x2='66.45' y2='184.38' xlink:href='%23b'/%3e%3clinearGradient id='f' x1='238.15' y1='378.69' x2='29.43' y2='240.15' xlink:href='%23b'/%3e%3clinearGradient id='g' x1='227.9' y1='394.13' x2='19.27' y2='255.65' xlink:href='%23b'/%3e%3c/defs%3e%3cpath class='m' d='M154.92%2c334.91c12.77%2c0%2c23.73-7.65%2c28.6-18.61%2c1.18-2.67-.79-5.67-3.71-5.67h-49.78c-2.92%2c0-4.9%2c3-3.71%2c5.67%2c4.87%2c10.96%2c15.83%2c18.61%2c28.6%2c18.61Z'/%3e%3cpath class='l' d='M231.3%2c280.49c-8.1%2c0-14.66-6.56-14.66-14.66v-53.26c0-28.86-19.81-53.09-46.57-59.85-.98-7.61-7.47-13.5-15.35-13.5s-14.42%2c5.94-15.36%2c13.59c-24.02%2c6.23-42.34%2c26.56-45.64%2c51.63-.05%2c.37-.1%2c.73-.14%2c1.1-.06%2c.5-.11%2c.99-.15%2c1.49-.04%2c.5-.08%2c1-.11%2c1.5-.03%2c.42-.06%2c.83-.08%2c1.25-.04%2c.84-.06%2c1.69-.06%2c2.55%2c0%2c.08%2c0%2c.16%2c0%2c.24v53.25c0%2c8.06-6.5%2c14.6-14.55%2c14.66-3.84%2c.03-7.01%2c2.99-7.01%2c6.84v.06c0%2c3.81%2c3.09%2c6.9%2c6.9%2c6.9H231.28c3.81%2c0%2c6.9-3.09%2c6.9-6.9%2c.02-3.8-3.07-6.89-6.88-6.89Z'/%3e%3cg%3e%3cpath class='i' d='M199.15%2c142.21c17.18%2c3.68%2c30.3%2c18.47%2c31.92%2c35.97%2c.18%2c1.94%2c1.87%2c3.39%2c3.85%2c3.2%2c.94-.09%2c1.79-.54%2c2.4-1.26%2c.6-.73%2c.89-1.65%2c.8-2.59-.95-10.22-5.07-19.67-11.92-27.35-6.8-7.61-15.64-12.76-25.57-14.89-.25-.05-.5-.08-.74-.08-1.63%2c0-3.11%2c1.14-3.46%2c2.8-.41%2c1.91%2c.81%2c3.79%2c2.72%2c4.2Z'/%3e%3cpath class='h' d='M203.12%2c119.43c26.73%2c5.73%2c47.16%2c28.75%2c49.68%2c55.97%2c.18%2c1.94%2c1.87%2c3.38%2c3.85%2c3.2%2c.94-.09%2c1.79-.54%2c2.4-1.26%2c.6-.73%2c.89-1.65%2c.8-2.59-1.39-15.05-7.47-28.99-17.57-40.29-10.02-11.22-23.05-18.81-37.67-21.95-.25-.05-.5-.08-.74-.08-1.63%2c0-3.11%2c1.14-3.46%2c2.8-.42%2c1.91%2c.8%2c3.79%2c2.71%2c4.2Z'/%3e%3cpath class='k' d='M110.68%2c142.21c1.91-.41%2c3.13-2.3%2c2.72-4.21-.36-1.66-1.83-2.8-3.46-2.8-.24%2c0-.49%2c.03-.74%2c.08-9.93%2c2.13-18.77%2c7.28-25.57%2c14.89-6.85%2c7.67-10.98%2c17.13-11.92%2c27.35-.09%2c.94%2c.2%2c1.86%2c.8%2c2.59s1.46%2c1.18%2c2.4%2c1.26c1.99%2c.18%2c3.67-1.26%2c3.85-3.2%2c1.62-17.48%2c14.75-32.27%2c31.92-35.96Z'/%3e%3cpath class='j' d='M106.71%2c119.43c1.91-.41%2c3.13-2.3%2c2.72-4.21-.36-1.66-1.83-2.8-3.46-2.8-.25%2c0-.49%2c.03-.74%2c.08-14.63%2c3.14-27.65%2c10.73-37.67%2c21.95-10.1%2c11.31-16.17%2c25.24-17.57%2c40.29-.09%2c.94%2c.2%2c1.86%2c.8%2c2.59s1.46%2c1.18%2c2.4%2c1.26c1.98%2c.18%2c3.67-1.26%2c3.85-3.2%2c2.52-27.21%2c22.95-50.22%2c49.67-55.96Z'/%3e%3c/g%3e%3c/svg%3e";

const APP_META_DATA = {
  name: 'Push Protocol',
  logo: img$5,
  icon: img$5,
  description: 'Example showcasing how to connect a wallet.',
  recommendedInjectedWallets: [{
    name: 'MetaMask',
    url: 'https://metamask.io'
  }]
};
const wcv2InitOptions = {
  projectId: BLOCKNATIVE_PROJECT_ID,
  requiredChains: [1, 56]
};
const walletConnect = walletConnectModule(wcv2InitOptions);
const coinbaseWalletSdk = coinbaseWalletModule({
  darkMode: true
});
const CHAINS = [{
  id: '0x1',
  token: 'ETH',
  label: 'Ethereum Mainnet',
  rpcUrl: `https://mainnet.infura.io/v3/${InfuraAPIKey}`
}, {
  id: '0xAA36A7',
  token: 'ETH',
  label: 'Sepolia',
  rpcUrl: `https://sepolia.infura.io/v3/${InfuraAPIKey}`
}, {
  id: '0x13881',
  token: 'MATIC',
  label: 'Polygon - Mumbai',
  rpcUrl: 'https://matic-mumbai.chainstacklabs.com'
}, {
  id: '0x38',
  token: 'BNB',
  label: 'Binance',
  rpcUrl: 'https://bsc-dataseed.binance.org/'
}, {
  id: '0xA',
  token: 'OETH',
  label: 'Optimism',
  rpcUrl: 'https://mainnet.optimism.io'
}, {
  id: '0xA4B1',
  token: 'ARB-ETH',
  label: 'Arbitrum',
  rpcUrl: 'https://rpc.ankr.com/arbitrum'
}];
const wallets = [injectedModule(), walletConnect, coinbaseWalletSdk];
const web3OnBoard = init({
  wallets,
  chains: CHAINS,
  appMetadata: APP_META_DATA,
  accountCenter: {
    desktop: {
      enabled: false
    },
    mobile: {
      enabled: false
    }
  },
  connect: {
    autoConnectLastWallet: true
  }
});
const ConnectButtonComp = ({
  autoConnect
}) => {
  return jsx(Web3OnboardProvider, Object.assign({
    web3Onboard: web3OnBoard
  }, {
    children: jsx(ConnectButtonSub, {
      autoConnect: autoConnect
    })
  }));
};

const handleDefineCondition = (entryCriteria, handlePrevious) => {
  if (entryCriteria.isCondtionUpdateEnabled()) {
    // handle update
    entryCriteria.updateCondition();
  } else {
    // handle insertion
    entryCriteria.addNewCondtion();
  }

  if (handlePrevious) {
    handlePrevious();
  }
};

const validateCustomEndpointData = condition => __awaiter(void 0, void 0, void 0, function* () {
  const {
    data,
    type,
    subcategory
  } = condition;

  if (!data.url) {
    return {
      url: 'URL is missing'
    };
  } else {
    // Protocol Validation
    if (!(data === null || data === void 0 ? void 0 : data.url.startsWith('http://')) && !data.url.startsWith('https://')) {
      return {
        url: 'Invalid URL protocol. Only "http://" and "https://" are allowed.'
      };
    } // URL Length Check


    if ((data === null || data === void 0 ? void 0 : data.url.length) > 2083) {
      return {
        url: 'URL is too long.'
      };
    } // Check for GET and Template


    if (subcategory === 'GET') {
      if (!(data === null || data === void 0 ? void 0 : data.url.includes('{{user_address}}'))) {
        return {
          url: `GET request URL should have the '{{user_address}}' template.`
        };
      } // Ensure proper number of expected templates


      const matches = (data === null || data === void 0 ? void 0 : data.url.match(/{{user_address}}/g)) || [];

      if (matches.length > 1) {
        return {
          url: `GET request URL should not have multiple '{{user_address}}' templates.`
        };
      }
    }
  }

  return {};
});

const validateGUILDData = condition => __awaiter(void 0, void 0, void 0, function* () {
  const {
    data
  } = condition;
  const errors = {}; // Check for guild ID presence

  if (!data.id) {
    return Object.assign(Object.assign({}, errors), {
      guildId: 'Guild ID is missing'
    });
  } else {
    try {
      const response = yield axios.get(`https://api.guild.xyz/v1/guild/${data.id}`);

      if (response.status !== 200) {
        return Object.assign(Object.assign({}, errors), {
          guildId: 'Guild ID is missing'
        });
      } else {
        // Validate the role values
        if (data.role === '*') {
          if (data.comparison !== 'all' && data.comparison !== 'any') {
            return Object.assign(Object.assign({}, errors), {
              guildComparison: 'Invalid comparison value'
            });
          }
        } else if (data.role) {
          const roleExists = response.data.roles.some(role => role.id.toString() === data.role);

          if (!roleExists) {
            return Object.assign(Object.assign({}, errors), {
              guildRole: 'Invalid Guild Role ID'
            });
          } // For specific role, comparison can be null or empty


          if (data.comparison) {
            return Object.assign(Object.assign({}, errors), {
              guildComparison: 'Comparison should be empty for specific role'
            });
          }
        } else {
          return Object.assign(Object.assign({}, errors), {
            guildRole: 'Invalid role value'
          });
        }
      }
    } catch (error) {
      return Object.assign(Object.assign({}, errors), {
        guildId: 'Error validating Guild ID'
      });
    }
  }

  return {};
});

const validateTokenData = condition => __awaiter(void 0, void 0, void 0, function* () {
  const data = condition.data;

  const _contract = data.contract || "";

  const _eip155Format = _contract.split(":");

  if (_eip155Format.length !== 3) {
    return {
      tokenError: "Invalid contract address"
    };
  }

  const [chainId, address] = [parseInt(_eip155Format[1]), _eip155Format[2]];

  if (!ethers.utils.isAddress(address)) {
    return {
      tokenError: `Invalid contract address`
    };
  }

  const [err] = condition.category === CATEGORY.ERC721 ? yield fetchERC721nfo(address, chainId) : yield fetchERC20Info(address, chainId);

  if (err) {
    return {
      tokenError: `Invalid ${condition.category} contract`
    };
  }

  if (!data.amount) {
    return {
      tokenAmount: `Amount cannot be 0`
    };
  } else {
    if (data.amount < 0) {
      return {
        tokenAmount: `Amount cannot be in negative`
      };
    }
  }

  return {};
});

const validationCriteria = condition => __awaiter(void 0, void 0, void 0, function* () {
  if (condition.type === TYPE.GUILD) {
    return validateGUILDData(condition);
  } else {
    if (condition.category === CATEGORY.INVITE) {
      return {};
    } else if (condition.category === CATEGORY.CustomEndpoint) {
      return validateCustomEndpointData(condition);
    } else {
      return validateTokenData(condition);
    }
  }
});

const getCategoryDropdownValues = ({
  dropdownCategoryValues,
  dropdownTypeValues,
  selectedTypeValue
}) => {
  var _a;

  return dropdownCategoryValues[(_a = dropdownTypeValues[selectedTypeValue]) === null || _a === void 0 ? void 0 : _a.value];
};
const getSelectedCategoryValue = ({
  dropdownCategoryValues,
  dropdownTypeValues,
  selectedCategoryValue,
  selectedTypeValue
}) => {
  const category = getCategoryDropdownValues({
    dropdownCategoryValues,
    dropdownTypeValues,
    selectedTypeValue
  });
  if (Array.isArray(category)) return category[selectedCategoryValue].value;else return category.value;
};
const checkIfTokenNFT = ({
  dropdownCategoryValues,
  dropdownTypeValues,
  selectedCategoryValue,
  selectedTypeValue
}) => {
  const category = getSelectedCategoryValue({
    dropdownCategoryValues,
    dropdownTypeValues,
    selectedTypeValue,
    selectedCategoryValue
  });
  if (category === CATEGORY.ERC20 || category === CATEGORY.ERC721) return true;
  return false;
};
const checkIfCustomEndpoint = ({
  dropdownCategoryValues,
  dropdownTypeValues,
  selectedCategoryValue,
  selectedTypeValue
}) => {
  const category = getSelectedCategoryValue({
    dropdownCategoryValues,
    selectedTypeValue,
    dropdownTypeValues,
    selectedCategoryValue
  });
  if (category === CATEGORY.CustomEndpoint) return true;
  return false;
};
const checkIfPushInvite = ({
  dropdownCategoryValues,
  dropdownTypeValues,
  selectedCategoryValue,
  selectedTypeValue
}) => {
  const accessType = dropdownTypeValues[selectedTypeValue].value;

  if (accessType === TYPE.PUSH) {
    const category = getSelectedCategoryValue({
      dropdownCategoryValues,
      selectedTypeValue,
      dropdownTypeValues,
      selectedCategoryValue
    });
    if (category === CATEGORY.INVITE) return true;
  }

  return false;
};
const checkIfGuild = (dropdownTypeValues, selectedTypeValue) => {
  const accessType = dropdownTypeValues[selectedTypeValue].value;

  if (accessType === TYPE.GUILD) {
    return true;
  }

  return false;
};
const getSubCategoryDropdownValues = ({
  dropdownCategoryValues,
  dropdownTypeValues,
  selectedCategoryValue,
  dropdownSubCategoryValues,
  selectedTypeValue
}) => {
  const category = getCategoryDropdownValues({
    dropdownCategoryValues,
    dropdownTypeValues,
    selectedCategoryValue,
    selectedTypeValue
  });
  if (Array.isArray(category)) return dropdownSubCategoryValues[category[selectedCategoryValue].value];else return dropdownSubCategoryValues[category.value];
};
const getSeletedType = ({
  dropdownTypeValues,
  selectedTypeValue
}) => {
  return dropdownTypeValues[selectedTypeValue].value || 'PUSH';
};
const getSelectedCategory = ({
  dropdownCategoryValues,
  selectedCategoryValue
}) => {
  const category = dropdownCategoryValues['PUSH'][selectedCategoryValue].value || CATEGORY.ERC20;
  return category;
};
const getSelectedChain = (dropdownChainsValues, selectedChainValue) => {
  return dropdownChainsValues[selectedChainValue].value || 'eip155:1';
};
const fetchContractInfo = ({
  setValidationErrors,
  selectedCategoryValue,
  selectedTypeValue,
  dropdownCategoryValues,
  dropdownTypeValues,
  contract,
  setUnit,
  setDecimals,
  selectedChainValue,
  dropdownChainsValues
}) => __awaiter(void 0, void 0, void 0, function* () {
  setValidationErrors(prev => Object.assign(Object.assign({}, prev), {
    tokenError: undefined
  }));

  const _type = getSeletedType({
    selectedTypeValue,
    dropdownTypeValues
  });

  const _category = getSelectedCategory({
    dropdownCategoryValues,
    selectedCategoryValue
  });

  const _chainInfo = getSelectedChain(dropdownChainsValues, selectedChainValue);

  yield tokenFetchHandler(contract, _type, _category, _chainInfo, setUnit, setDecimals);
});
const getCriteriaData = ({
  type,
  category,
  contract,
  quantity,
  decimals,
  unit,
  url,
  inviteCheckboxes,
  guildComparison,
  specificRoleId,
  guildId,
  dropdownQuantityRangeValues,
  selectedChainValue,
  dropdownChainsValues
}) => {
  if (type === 'PUSH') {
    if (category === CATEGORY.ERC20 || category === CATEGORY.ERC721) {
      const selectedChain = dropdownChainsValues[selectedChainValue].value || 'eip155:1';
      return {
        contract: `${selectedChain}:${contract}`,
        amount: quantity.value,
        comparison: dropdownQuantityRangeValues[quantity.range].value,
        decimals: category === CATEGORY.ERC20 ? decimals : undefined,
        token: unit
      };
    } else if (category === CATEGORY.INVITE) {
      const _inviteRoles = [];

      if (inviteCheckboxes.admin) {
        _inviteRoles.push('ADMIN');
      }

      if (inviteCheckboxes.owner) {
        _inviteRoles.push('OWNER');
      }

      return {
        inviterRoles: _inviteRoles
      };
    } else {
      return {
        url: url
      };
    }
  } else {
    return {
      id: guildId,
      comparison: guildComparison === 'specific' ? '' : guildComparison,
      role: guildComparison === 'specific' ? specificRoleId : '*'
    };
  }
};

const ConnectButtonSection = ({
  autoConnect
}) => {
  const {
    signer
  } = useChatData();
  return jsxs(Section, Object.assign({
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px"
  }, {
    children: [!signer && jsx(Span$1, Object.assign({
      padding: "8px 8px 8px 16px",
      color: "#B6BCD6",
      fontSize: "15px",
      fontWeight: "400",
      textAlign: "start"
    }, {
      children: "You need to connect your wallet to get started"
    })), jsx(ConnectButtonComp, {
      autoConnect: autoConnect
    })]
  }));
};

const MessageInput = ({
  chatId,
  emoji: _emoji = true,
  gif: _gif = true,
  file: _file = true,
  isConnected: _isConnected = true,
  autoConnect: _autoConnect = false,
  verificationFailModalBackground: _verificationFailModalBackground = MODAL_BACKGROUND_TYPE.OVERLAY,
  verificationFailModalPosition: _verificationFailModalPosition = MODAL_POSITION_TYPE.GLOBAL,
  onVerificationFail
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

  const [typedMessage, setTypedMessage] = useState('');
  const [showEmojis, setShowEmojis] = useState(false);
  const [gifOpen, setGifOpen] = useState(false);
  const modalRef = useRef(null);
  const fileUploadInputRef = useRef(null);
  const [fileUploading, setFileUploading] = useState(false);
  const [isRules, setIsRules] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const {
    approveChatRequest,
    loading: approveLoading
  } = useApproveChatRequest();
  const {
    acceptedRequestMessage,
    groupInformationSinceLastConnection
  } = usePushChatSocket();
  const [chatFeed, setChatFeed] = useState({});
  const theme = useContext(ThemeContext);
  const isMobile = useDeviceWidthCheck(425);
  const {
    sendMessage,
    loading
  } = usePushSendMessage$1();
  const {
    verifyAccessControl,
    setVerificationSuccessfull,
    verificationSuccessfull,
    verified,
    setVerified,
    loading: accessLoading
  } = useVerifyAccessControl();
  const {
    account,
    env,
    connectedProfile,
    setConnectedProfile,
    pgpPrivateKey,
    signer
  } = useChatData();
  const {
    fetchChat
  } = useFetchChat$1();
  const {
    fetchChatProfile
  } = useGetChatProfile();
  const {
    getGroup
  } = useGetGroup();
  const statusToast = useToast();
  const textAreaRef = useRef(null);

  const onChangeTypedMessage = val => {
    setTypedMessage(val);
  };

  useClickAway(modalRef, () => {
    setShowEmojis(false);
    setGifOpen(false);
  });
  useEffect(() => {
    var _a, _b;

    if ((_a = textAreaRef === null || textAreaRef === void 0 ? void 0 : textAreaRef.current) === null || _a === void 0 ? void 0 : _a.style) {
      textAreaRef.current.style.height = 25 + 'px';
      const scrollHeight = (_b = textAreaRef.current) === null || _b === void 0 ? void 0 : _b.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + 'px';
    }
  }, [textAreaRef, typedMessage]); //need to do something about fetching connectedUser in every component

  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      if (!connectedProfile && account) {
        const user = yield fetchChatProfile({
          profileId: account,
          env
        });
        if (user) setConnectedProfile(user);
      }
    }))();
  }, [account]);
  useEffect(() => {
    const storedTimestampJSON = localStorage.getItem(chatId);

    if (storedTimestampJSON) {
      const storedTimestamp = JSON.parse(storedTimestampJSON);
      const currentTimestamp = new Date().getTime();
      const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000;

      if (Math.abs(currentTimestamp - storedTimestamp) < twentyFourHoursInMilliseconds) {
        setVerified(true);
      } else {
        setVerified(false);
        setAccessControl(chatId, true);
      }
    }
  }, [chatId, verified, isMember, account, env]);
  useEffect(() => {
    var _a;

    if (Object.keys(groupInformationSinceLastConnection || {}).length) {
      if (((_a = chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation) === null || _a === void 0 ? void 0 : _a.chatId.toLowerCase()) === groupInformationSinceLastConnection.chatId.toLowerCase()) {
        const updateChatFeed = chatFeed;
        updateChatFeed.groupInformation = groupInformationSinceLastConnection;
        setChatFeed(updateChatFeed);
      }
    }
  }, [groupInformationSinceLastConnection]);
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      if (Object.keys(acceptedRequestMessage || {}).length && Object.keys(chatFeed || {}).length) {
        yield updateChatFeed();
      }
    }))();
  }, [acceptedRequestMessage]); //need to makea common method for fetching chatFeed to ruse in messageInput

  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      if (!account && !env) return;

      if (account && env) {
        const chat = yield fetchChat({
          chatId
        });
        if (Object.keys(chat || {}).length) setChatFeed(chat);else {
          let newChatFeed;
          let group;
          const result = yield getNewChatUser({
            searchText: chatId,
            fetchChatProfile,
            env
          });

          if (result) {
            newChatFeed = getDefaultFeedObject({
              user: result
            });
          } else {
            group = yield getGroup({
              searchText: chatId
            });

            if (group) {
              newChatFeed = getDefaultFeedObject({
                groupInformation: group
              });
            }
          }

          if (newChatFeed) {
            setChatFeed(newChatFeed);
          }
        }
      }
    }))();
  }, [chatId, pgpPrivateKey, account, env]);
  useEffect(() => {
    if (!account && !env && !chatId) return;

    if (account && env && chatId && chatFeed && (chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation)) {
      setIsMember(checkIfMember(chatFeed, account));
      setIsRules(checkIfAccessVerifiedGroup(chatFeed));
    }
  }, [chatId, chatFeed, account, env]);

  const addEmoji = (emojiData, event) => {
    setTypedMessage(typedMessage + emojiData.emoji);
    setShowEmojis(false);
  };

  const handleUploadFile = () => {
    if (fileUploadInputRef.current) {
      fileUploadInputRef.current.click();
    }
  };

  const checkVerification = () => {
    verifyAccessControl({
      chatId,
      did: account
    });
  };

  const handleJoinGroup = () => __awaiter(void 0, void 0, void 0, function* () {
    var _l, _m;

    if (chatFeed && ((_l = chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation) === null || _l === void 0 ? void 0 : _l.isPublic)) {
      const response = yield approveChatRequest({
        chatId
      });

      if (response) {
        yield updateChatFeed();
      }
    } else {
      const sendTextMessage = yield sendMessage({
        message: `Hello, please let me join this group, my wallet address is ${account}`,
        chatId: ((_m = chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation) === null || _m === void 0 ? void 0 : _m.groupCreator) || '',
        messageType: 'Text'
      });

      if (sendTextMessage) {
        statusToast.showMessageToast({
          toastTitle: 'Success',
          toastMessage: 'Request sent successfully',
          toastType: 'SUCCESS',
          getToastIcon: size => jsx(MdCheckCircle, {
            size: size,
            color: "green"
          })
        });
      } else {
        statusToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: 'Unable to send request',
          toastType: 'ERROR',
          getToastIcon: size => jsx(MdError, {
            size: size,
            color: "red"
          })
        });
      }
    }
  });

  const uploadFile = e => __awaiter(void 0, void 0, void 0, function* () {
    if (!(e.target instanceof HTMLInputElement)) {
      return;
    }

    if (!e.target.files) {
      return;
    }

    if (e.target && e.target.files && e.target.files.length) {
      const file = e.target.files[0];

      if (file) {
        try {
          const TWO_MB = 1024 * 1024 * 2;

          if (file.size > TWO_MB) {
            console.log('Files larger than 2mb is now allowed');
            throw new Error('Files larger than 2mb is now allowed');
          }

          setFileUploading(true);
          const messageType = file.type.startsWith('image') ? 'Image' : 'File';
          const reader = new FileReader();
          let fileMessageContent;
          reader.readAsDataURL(file);

          reader.onloadend = e => __awaiter(void 0, void 0, void 0, function* () {
            fileMessageContent = {
              content: e.target.result,
              name: file.name,
              type: file.type,
              size: file.size
            };
            sendPushMessage(JSON.stringify(fileMessageContent), messageType);
          });
        } catch (err) {
          console.log(err);
        } finally {
          setFileUploading(false);
        }
      }
    }
  });

  const isJoinGroup = () => {
    return !!pgpPrivateKey && !isMember;
  };

  const isNotVerified = () => {
    return !!pgpPrivateKey && !verified && isMember && isRules;
  };

  const sendPushMessage = (content, type) => __awaiter(void 0, void 0, void 0, function* () {
    try {
      const sendMessageResponse = yield sendMessage({
        message: content,
        chatId,
        messageType: type
      });

      if (sendMessageResponse && typeof sendMessageResponse === 'string' && sendMessageResponse.includes('403')) {
        setAccessControl(chatId, true);
        setVerified(false);
        setVerificationSuccessfull(false);
      }
    } catch (error) {
      console.log(error);
    }
  });

  const sendTextMsg = () => __awaiter(void 0, void 0, void 0, function* () {
    if (typedMessage.trim() !== '') {
      yield sendPushMessage(typedMessage, 'Text');
      setTypedMessage('');
    }
  });

  const sendGIF = emojiObject => __awaiter(void 0, void 0, void 0, function* () {
    sendPushMessage(emojiObject.url, 'GIF');
    setGifOpen(false);
  });

  const updateChatFeed = () => __awaiter(void 0, void 0, void 0, function* () {
    const chat = yield fetchChat({
      chatId
    });

    if (Object.keys(chat || {}).length) {
      setChatFeed(chat);
    }
  });

  return !(pgpPrivateKey && account) && _isConnected ? jsx(TypebarSection, Object.assign({
    width: "100%",
    overflow: "hidden",
    borderRadius: "13px",
    position: "static",
    padding: ` ${pgpPrivateKey ? '13px 16px' : ''}`,
    background: `${(_a = theme.backgroundColor) === null || _a === void 0 ? void 0 : _a.messageInputBackground}`,
    alignItems: "center",
    justifyContent: "space-between"
  }, {
    children: jsx(ConnectButtonSection, {
      autoConnect: _autoConnect
    })
  })) : !checkIfIntent({
    chat: chatFeed,
    account: account
  }) && Object.keys(chatFeed || {}).length ? jsxs(TypebarSection, Object.assign({
    width: "100%",
    overflow: "hidden",
    borderRadius: (_b = theme.borderRadius) === null || _b === void 0 ? void 0 : _b.messageInput,
    position: "static",
    border: (_c = theme.border) === null || _c === void 0 ? void 0 : _c.messageInput,
    padding: ` ${pgpPrivateKey ? '13px 16px' : ''}`,
    background: `${(_d = theme.backgroundColor) === null || _d === void 0 ? void 0 : _d.messageInputBackground}`,
    alignItems: "center",
    justifyContent: "space-between"
  }, {
    children: [Object.keys(chatFeed || {}).length && (chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation) ? jsxs(Fragment, {
      children: [(isJoinGroup() || isNotVerified()) && jsxs(Section, Object.assign({
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
      }, {
        children: [jsxs(Span$1, Object.assign({
          padding: "8px 8px 8px 16px",
          color: (_e = theme.textColor) === null || _e === void 0 ? void 0 : _e.chatReceivedBubbleText,
          fontSize: "15px",
          fontWeight: "500",
          textAlign: "start"
        }, {
          children: [isJoinGroup() && 'Click on the button to join the group', isNotVerified() && jsxs(Fragment, {
            children: ["Sending messages requires", ' ', jsx(Span$1, Object.assign({
              color: (_f = theme.backgroundColor) === null || _f === void 0 ? void 0 : _f.chatSentBubbleBackground
            }, {
              children: "1 PUSH Token"
            })), ' ', "for participation.", ' ', jsxs(Link, Object.assign({
              href: "https://docs.push.org/developers/developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-restapi/for-chat/group-chat#to-create-a-token-gated-group",
              target: "_blank",
              color: (_g = theme.backgroundColor) === null || _g === void 0 ? void 0 : _g.chatSentBubbleBackground
            }, {
              children: ["Learn More ", jsx(OpenLink, {})]
            }))]
          })]
        })), jsx(ConnectWrapper, {
          children: jsxs(Connect, Object.assign({
            onClick: () => __awaiter(void 0, void 0, void 0, function* () {
              return isJoinGroup() ? yield handleJoinGroup() : yield checkVerification();
            })
          }, {
            children: [isJoinGroup() && jsx(Fragment, {
              children: approveLoading ? jsx(Spinner, {
                color: "#fff",
                size: "24"
              }) : ' Join Group '
            }), isNotVerified() && jsx(Fragment, {
              children: accessLoading ? jsx(Spinner, {
                color: "#fff",
                size: "24"
              }) : 'Verify Access'
            })]
          }))
        })]
      })), !!pgpPrivateKey && !verificationSuccessfull && jsx(Modal, Object.assign({
        width: "550px",
        modalBackground: _verificationFailModalBackground,
        modalPositionType: _verificationFailModalPosition
      }, {
        children: jsxs(Section, Object.assign({
          margin: "5px 0px 0px 0px",
          gap: "16px",
          flexDirection: "column",
          width: "100%"
        }, {
          children: [jsx(ModalHeader, {
            title: "Access Failed"
          }), jsx(ConditionsInformation, {
            theme: theme,
            groupInfo: chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation,
            subheader: "Please make sure the following conditions\n                   are met to pariticpate and send messages.",
            alert: true
          }), jsx(ConnectWrapperClose, Object.assign({
            onClick: () => {
              if (onVerificationFail) {
                onVerificationFail();
              }

              setVerificationSuccessfull(true);
            }
          }, {
            children: jsx(ConnectClose, {
              children: "Cancel"
            })
          })), jsx(InfoContainer, {
            cta: "https://push.org/docs/chat/build/conditional-rules-for-group/",
            label: "Learn more about access gating rules"
          })]
        }))
      }))]
    }) : null, !!pgpPrivateKey && ((isRules ? verified : true) && isMember || chatFeed && !(chatFeed === null || chatFeed === void 0 ? void 0 : chatFeed.groupInformation)) && jsxs(Fragment, {
      children: [jsxs(Section, Object.assign({
        gap: "8px",
        flex: "1",
        position: "static"
      }, {
        children: [_emoji && jsx(Div, Object.assign({
          width: "25px",
          cursor: "pointer",
          height: "25px",
          alignSelf: "end",
          onClick: () => setShowEmojis(!showEmojis)
        }, {
          children: jsx(EmojiIcon, {
            color: (_h = theme.iconColor) === null || _h === void 0 ? void 0 : _h.emoji
          })
        })), showEmojis && jsx(Section, Object.assign({
          ref: modalRef,
          position: "absolute",
          bottom: "2.5rem",
          left: "2.5rem",
          zIndex: "700"
        }, {
          children: jsx(EmojiPicker, {
            width: isMobile ? 260 : 320,
            height: 370,
            onEmojiClick: addEmoji
          })
        })), jsx(MultiLineInput, {
          disabled: loading ? true : false,
          theme: theme,
          onKeyDown: event => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault();
              sendTextMsg();
            }
          },
          placeholder: "Type your message...",
          onChange: e => onChangeTypedMessage(e.target.value),
          value: typedMessage,
          ref: textAreaRef,
          rows: 1
        })]
      })), jsxs(SendSection, Object.assign({
        position: "static"
      }, {
        children: [_gif && jsx(Section, Object.assign({
          width: "34px",
          height: "24px",
          cursor: "pointer",
          alignSelf: "end",
          onClick: () => setGifOpen(!gifOpen)
        }, {
          children: jsx(GifIcon, {})
        })), gifOpen && jsx(Section, Object.assign({
          position: "absolute",
          bottom: "2.5rem",
          zIndex: "1",
          right: isMobile ? '7rem' : '8rem',
          ref: modalRef
        }, {
          children: jsx(GifPicker, {
            onGifClick: sendGIF,
            width: isMobile ? 260 : 320,
            height: 370,
            tenorApiKey: String(PUBLIC_GOOGLE_TOKEN)
          })
        })), jsx(Section, Object.assign({
          onClick: handleUploadFile
        }, {
          children: !fileUploading && _file && jsxs(Fragment, {
            children: [jsx(Section, Object.assign({
              width: "17",
              height: "24px",
              cursor: "pointer",
              alignSelf: "end"
            }, {
              children: jsx(AttachmentIcon, {
                color: (_j = theme.iconColor) === null || _j === void 0 ? void 0 : _j.attachment
              })
            })), jsx(FileInput$1, {
              type: "file",
              ref: fileUploadInputRef,
              onChange: e => uploadFile(e)
            })]
          })
        })), !(loading || fileUploading) && jsx(Section, Object.assign({
          cursor: "pointer",
          alignSelf: "end",
          height: "24px",
          onClick: () => sendTextMsg()
        }, {
          children: jsx(SendCompIcon, {
            color: (_k = theme.iconColor) === null || _k === void 0 ? void 0 : _k.sendButton
          })
        })), (loading || fileUploading) && jsx(Section, Object.assign({
          alignSelf: "end",
          height: "24px"
        }, {
          children: jsx(Spinner, {
            color: theme.spinnerColor,
            size: "22"
          })
        }))]
      }))]
    }), jsx(ToastContainer, {})]
  })) : jsx(Fragment, {});
};
const TypebarSection = /*#__PURE__*/styled(Section).withConfig({
  displayName: "MessageInput__TypebarSection",
  componentId: "sc-xbdscc-0"
})(["gap:10px;border:", ";@media ", "{gap:0px;}"], props => props.border || 'none', device.mobileL);
const SendSection = /*#__PURE__*/styled(Section).withConfig({
  displayName: "MessageInput__SendSection",
  componentId: "sc-xbdscc-1"
})(["gap:11.5px;@media ", "{gap:7.5px;}"], device.mobileL);
const MultiLineInput = /*#__PURE__*/styled.textarea.withConfig({
  displayName: "MessageInput__MultiLineInput",
  componentId: "sc-xbdscc-2"
})(["font-family:inherit;font-weight:400;transform:translateY(3px);font-size:16px;outline:none;overflow-y:auto;box-sizing:border-box;background:", ";border:none;color:", ";resize:none;flex:1;padding-right:5px;align-self:end;@media ", "{font-size:14px;}&&::-webkit-scrollbar{width:4px;padding-right:0px;}::-webkit-scrollbar-thumb{background:rgb(181 181 186);border-radius:10px;height:50px;}::placeholder{color:", ";transform:translateY(0px);@media ", "{font-size:14px;}}min-height:25px;max-height:80px;word-break:break-word;"], props => {
  var _a;

  return (_a = props.theme.backgroundColor) === null || _a === void 0 ? void 0 : _a.messageInputBackground;
}, props => {
  var _a;

  return (_a = props.theme.textColor) === null || _a === void 0 ? void 0 : _a.messageInputText;
}, device.mobileL, props => {
  var _a;

  return (_a = props.theme.textColor) === null || _a === void 0 ? void 0 : _a.messageInputText;
}, device.mobileL);
const FileInput$1 = /*#__PURE__*/styled.input.withConfig({
  displayName: "MessageInput__FileInput",
  componentId: "sc-xbdscc-3"
})(["display:none;"]);
const ConnectWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "MessageInput__ConnectWrapper",
  componentId: "sc-xbdscc-4"
})(["display:flex;align-items:center;flex-direction:column;cursor:pointer;"]);
const StyledButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "MessageInput__StyledButton",
  componentId: "sc-xbdscc-5"
})(["border:0px;outline:0px;padding:24px 9px;font-weight:500;border-radius:12px;font-size:17px;cursor:pointer;width:147px;height:44px;text-align:start;align-items:center;display:flex;justify-content:center;"]);
const Connect = /*#__PURE__*/styled(StyledButton).withConfig({
  displayName: "MessageInput__Connect",
  componentId: "sc-xbdscc-6"
})(["color:rgb(255,255,255);background:#d53a94;"]);
const ConnectWrapperClose = /*#__PURE__*/styled.div.withConfig({
  displayName: "MessageInput__ConnectWrapperClose",
  componentId: "sc-xbdscc-7"
})(["display:flex;align-items:center;flex-direction:column;"]);
const StyledButtonClose = /*#__PURE__*/styled.button.withConfig({
  displayName: "MessageInput__StyledButtonClose",
  componentId: "sc-xbdscc-8"
})(["border:0px;outline:0px;padding:24px 9px;font-weight:500;border-radius:12px;font-size:17px;cursor:pointer;width:147px;height:44px;text-align:start;align-items:center;display:flex;justify-content:center;"]);
const ConnectClose = /*#__PURE__*/styled(StyledButtonClose).withConfig({
  displayName: "MessageInput__ConnectClose",
  componentId: "sc-xbdscc-9"
})(["color:rgb(255,255,255);background:#d53a94;gap:8px;"]);
const Link = /*#__PURE__*/styled.a.withConfig({
  displayName: "MessageInput__Link",
  componentId: "sc-xbdscc-13"
})(["color:#d53a94;link-decoration:none;text-decoration:none;"]);

const ChatViewComponent = options => {
  var _a, _b;

  const {
    chatId,
    chatFilterList = [],
    messageInput = true,
    chatViewList = true,
    chatProfile = true,
    limit = chatLimit,
    emoji = true,
    file = true,
    gif = true,
    isConnected = true,
    autoConnect = false,
    onVerificationFail,
    groupInfoModalBackground = MODAL_BACKGROUND_TYPE.OVERLAY,
    groupInfoModalPositionType = MODAL_POSITION_TYPE.GLOBAL,
    verificationFailModalBackground = MODAL_BACKGROUND_TYPE.OVERLAY,
    verificationFailModalPosition = MODAL_POSITION_TYPE.GLOBAL
  } = options || {};
  const {
    env,
    signer,
    account,
    pgpPrivateKey
  } = useChatData(); // const [conversationHash, setConversationHash] = useState<string>();

  const theme = useContext(ThemeContext);
  const isMobile = useMediaQuery(device.mobileL);
  return jsxs(Conatiner, Object.assign({
    width: "100%",
    height: "inherit",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
    background: (_a = theme.backgroundColor) === null || _a === void 0 ? void 0 : _a.chatViewComponentBackground,
    borderRadius: (_b = theme.borderRadius) === null || _b === void 0 ? void 0 : _b.chatViewComponent,
    padding: "13px",
    theme: theme
  }, {
    children: [chatProfile && jsx(ChatProfile, {
      chatId: chatId,
      style: "Info",
      groupInfoModalBackground: groupInfoModalBackground,
      groupInfoModalPositionType: groupInfoModalPositionType
    }), jsx(Section, Object.assign({
      flex: "1 1 auto",
      overflow: "hidden",
      padding: isMobile ? '0 10px' : '0 20px',
      margin: "0 0px 10px 0px",
      flexDirection: "column",
      justifyContent: "start"
    }, {
      children: chatId && chatViewList && jsx(ChatViewList, {
        chatFilterList: chatFilterList,
        limit: limit,
        chatId: chatId
      })
    })), !signer && !(!!account && !!pgpPrivateKey) && !isConnected && jsx(Section, Object.assign({
      flex: "0 1 auto"
    }, {
      children: jsxs(Span$1, {
        children: ["You need to either pass signer or isConnected  to send messages", ' ']
      })
    })), messageInput && (!!signer || !!account && !!pgpPrivateKey || isConnected) && jsx(Section, Object.assign({
      flex: "0 1 auto",
      position: 'static'
    }, {
      children: jsx(MessageInput, {
        onVerificationFail: onVerificationFail,
        chatId: chatId,
        file: file,
        emoji: emoji,
        gif: gif,
        isConnected: isConnected,
        verificationFailModalBackground: verificationFailModalBackground,
        verificationFailModalPosition: verificationFailModalPosition,
        autoConnect: autoConnect
      })
    }))]
  }));
}; //styles

const Conatiner = /*#__PURE__*/styled(Section).withConfig({
  displayName: "ChatViewComponent__Conatiner",
  componentId: "sc-1hbxenz-0"
})(["border:", ";backdrop-filter:", ";box-sizing:border-box;"], props => {
  var _a;

  return (_a = props.theme.border) === null || _a === void 0 ? void 0 : _a.chatViewComponent;
}, props => props.theme.backdropFilter);

const OperatorContainer = ({
  operator,
  setOperator
}) => {
  var _a, _b, _c;

  const theme = useContext(ThemeContext);
  return jsxs(Section, Object.assign({
    flexDirection: "column",
    gap: "12px"
  }, {
    children: [jsx(OptionButtons, {
      options: OPERATOR_OPTIONS,
      selectedValue: operator,
      handleClick: newEl => {
        setOperator(newEl);
      }
    }), jsxs(Span$1, Object.assign({
      fontSize: "14px"
    }, {
      children: [(_a = OPERATOR_OPTIONS_INFO[operator]) === null || _a === void 0 ? void 0 : _a.head, jsxs(Span$1, Object.assign({
        color: (_b = theme.textColor) === null || _b === void 0 ? void 0 : _b.modalSubHeadingText
      }, {
        children: [' ', (_c = OPERATOR_OPTIONS_INFO[operator]) === null || _c === void 0 ? void 0 : _c.tail]
      }))]
    }))]
  }));
};

const useCriteriaState = (defaultRules, defaultConditionTypes) => {
  var _a, _b;

  const [entryRootCondition, setEntryRootCondition] = useState((_a = OPERATOR_OPTIONS[1]) === null || _a === void 0 ? void 0 : _a.value);
  const [entryRuleTypeCondition, setEntryRuleTypeCondition] = useState((_b = OPERATOR_OPTIONS[1]) === null || _b === void 0 ? void 0 : _b.value);
  const [entryOptionTypeArray, setEntryOptionTypeArray] = useState(defaultConditionTypes);
  const [entryOptionsDataArray, setEntryOptionsDataArray] = useState(defaultRules);
  const [selectedCriteria, setSelectedCriteria] = useState(-1);
  const [selectedRules, setSelectedRule] = useState([]);
  const [entryOptionsDataArrayUpdate, setEntryOptionsDataArrayUpdate] = useState(-1);
  const [updateCriteriaIdx, setUpdateCriteriaIdx] = useState(-1);

  const isDuplicateRule = rule => {
    const newRule = JSON.stringify(rule); // check on current conditions

    for (let i = 0; i < selectedRules.length; i++) {
      const selectedRule = JSON.stringify(selectedRules[i]);

      if (newRule === selectedRule) {
        console.log(newRule, " equals ", selectedRule);
        return true;
      }
    } // check on already selected condtions


    for (let i = 0; i < entryOptionsDataArray.length; i++) {
      const _rules = entryOptionsDataArray[i];

      for (let j = 0; j < _rules.length; j++) {
        const selectedRule = JSON.stringify(_rules[j]);

        if (newRule === selectedRule) {
          console.log(newRule, " equals ", selectedRule);
          return true;
        }
      }
    }

    return false;
  };

  const addNewRule = newRule => {
    if (isDuplicateRule(newRule)) {
      return false;
    }

    if (selectedCriteria === -1) {
      setSelectedCriteria(entryOptionTypeArray.length);
    }

    if (updateCriteriaIdx !== -1) {
      // update existing
      const _rulesToUpdate = [...selectedRules];
      _rulesToUpdate[updateCriteriaIdx] = newRule;
      setSelectedRule(_rulesToUpdate);
    } else {
      // add new
      setSelectedRule(prev => [...prev, newRule]);
    }

    return true;
  };

  const deleteRule = idx => {
    const removedRule = [...selectedRules];
    removedRule.splice(idx, 1);
    setSelectedRule(removedRule);
  };

  const addNewCondtion = () => {
    if (selectedRules.length > 0) {
      setEntryOptionTypeArray(prev => [...prev, entryRuleTypeCondition]);
      setEntryOptionsDataArray(prev => [...prev, [...selectedRules]]);
    }

    setSelectedRule([]);
  };

  const updateCondition = () => {
    const optionTypeArrayUpdated = [...entryOptionTypeArray];
    optionTypeArrayUpdated[entryOptionsDataArrayUpdate] = entryRuleTypeCondition;
    const entryOptionsDataArrayUpdated = [...entryOptionsDataArray];
    entryOptionsDataArrayUpdated[entryOptionsDataArrayUpdate] = [...selectedRules];
    setEntryOptionTypeArray(optionTypeArrayUpdated);
    setEntryOptionsDataArray(entryOptionsDataArrayUpdated);
    setSelectedRule([]);
  };

  const isCondtionUpdateEnabled = () => {
    return entryOptionsDataArrayUpdate !== -1;
  };

  const deleteEntryOptionsDataArray = idx => {
    const removedRule = [...entryOptionsDataArray];
    removedRule.splice(idx, 1);
    setEntryOptionsDataArray(removedRule);
  };

  const selectEntryOptionsDataArrayForUpdate = idx => {
    setEntryOptionsDataArrayUpdate(idx);
  };

  const isUpdateCriteriaEnabled = () => {
    return updateCriteriaIdx !== -1;
  };

  return {
    entryRootCondition,
    setEntryRootCondition,
    entryRuleTypeCondition,
    setEntryRuleTypeCondition,
    entryOptionTypeArray,
    setEntryOptionTypeArray,
    entryOptionsDataArray,
    setEntryOptionsDataArray,
    selectedCriteria,
    setSelectedCriteria,
    addNewCondtion,
    selectedRules,
    addNewRule,
    deleteRule,
    deleteEntryOptionsDataArray,
    selectEntryOptionsDataArrayForUpdate,
    entryOptionsDataArrayUpdate,
    isCondtionUpdateEnabled,
    updateCondition,
    setSelectedRule,
    updateCriteriaIdx,
    setUpdateCriteriaIdx,
    isUpdateCriteriaEnabled
  };
};
var SelectedCriteria;

(function (SelectedCriteria) {
  SelectedCriteria[SelectedCriteria["ENTRY"] = 0] = "ENTRY";
  SelectedCriteria[SelectedCriteria["CHAT"] = 1] = "CHAT";
})(SelectedCriteria || (SelectedCriteria = {}));

const useCriteriaStateManager = () => {
  const [seletedCriteria, setSelectedCriteria] = useState(SelectedCriteria.CHAT);
  const entryCriteria = useCriteriaState([[{
    type: 'PUSH',
    category: 'INVITE',
    subcategory: 'DEFAULT',
    data: {
      inviterRoles: ['ADMIN', 'OWNER']
    }
  }]], ['all']);
  const chatCriteria = useCriteriaState([], []);

  const getSelectedCriteria = () => {
    if (seletedCriteria === SelectedCriteria.CHAT) {
      return chatCriteria;
    } else {
      return entryCriteria;
    }
  };

  const resetRules = () => {
    entryCriteria.selectEntryOptionsDataArrayForUpdate(-1);
    entryCriteria.setSelectedRule([]);
    chatCriteria.selectEntryOptionsDataArrayForUpdate(-1);
    chatCriteria.setSelectedRule([]);
  };

  const resetCriteriaIdx = () => {
    entryCriteria.setUpdateCriteriaIdx(-1);
    chatCriteria.setUpdateCriteriaIdx(-1);
  };

  const _generate = (rules, conditionTypes) => {
    if (rules.length === 0) {
      return [];
    }

    console.log(`Generating for ${JSON.stringify(rules)}`);
    console.log("condition type", conditionTypes);
    return conditionTypes.map((el, idx) => ({
      [el]: rules[idx].map(_el => _el)
    }));
  };

  const generateRule = () => {
    return {
      entry: {
        conditions: {
          [entryCriteria.entryRootCondition]: _generate(entryCriteria.entryOptionsDataArray, entryCriteria.entryOptionTypeArray)
        }
      },
      chat: {
        conditions: {
          [chatCriteria.entryRootCondition]: _generate(chatCriteria.entryOptionsDataArray, chatCriteria.entryOptionTypeArray)
        }
      }
    };
  };

  return {
    entryCriteria,
    chatCriteria,
    seletedCriteria,
    setSelectedCriteria,
    getSelectedCriteria,
    resetRules,
    resetCriteriaIdx,
    generateRule
  };
};

const useCreateGatedGroup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const {
    pgpPrivateKey,
    env,
    account
  } = useChatData();
  const createGatedGroup = useCallback((groupInfoType, rules) => __awaiter(void 0, void 0, void 0, function* () {
    setLoading(true);

    try {
      const payload = {
        groupName: groupInfoType.groupName,
        groupDescription: groupInfoType.groupDescription,
        groupImage: groupInfoType.groupImage,
        isPublic: groupInfoType.isPublic,
        members: [],
        admins: [],
        account: account || undefined,
        env: env,
        pgpPrivateKey: pgpPrivateKey || undefined,
        rules: rules
      };
      const response = yield PushAPI.chat.createGroup(payload);
      setLoading(false);
      console.log(response);

      if (!response) {
        return false;
      }

      return true;
    } catch (error) {
      setLoading(false);
      setError(error.message);
      return error.message;
    }
  }), [pgpPrivateKey, account, env]);
  return {
    createGatedGroup,
    error,
    loading
  };
};

const GROUP_TYPE_OPTIONS = [{
  heading: 'Public',
  subHeading: 'Anyone can view chats, even without joining',
  value: 'open'
}, {
  heading: 'Private',
  subHeading: 'Encrypted Chats, Users must join group to view',
  value: 'encrypted'
}];

const AddConditionSection = ({
  heading,
  subHeading,
  handleNext,
  criteriaState
}) => {
  var _a, _b, _c, _d;

  const theme = useContext(ThemeContext);

  const generateMapping = () => {
    return criteriaState.entryOptionsDataArray.map((rule, idx) => [{
      operator: criteriaState.entryOptionTypeArray[idx]
    }, ...rule.map(el => el)]);
  };

  return jsxs(Section, Object.assign({
    alignItems: "start",
    flexDirection: "column",
    gap: "0px"
  }, {
    children: [jsxs(Section, Object.assign({
      flexDirection: "column",
      alignItems: "start",
      gap: "5px",
      margin: '0 0 5px 0'
    }, {
      children: [jsx(Span$1, Object.assign({
        color: (_a = theme.textColor) === null || _a === void 0 ? void 0 : _a.modalHeadingText,
        fontSize: "16px",
        fontWeight: "500"
      }, {
        children: heading
      })), jsx(Span$1, Object.assign({
        color: (_b = theme.textColor) === null || _b === void 0 ? void 0 : _b.modalSubHeadingText,
        fontWeight: "400",
        fontSize: "12px"
      }, {
        children: subHeading
      }))]
    })), criteriaState.entryOptionsDataArray.length > 1 && jsx(Section, Object.assign({
      margin: "10px"
    }, {
      children: jsx(OperatorContainer, {
        operator: criteriaState.entryRootCondition,
        setOperator: newEl => {
          criteriaState.setEntryRootCondition(newEl);
        }
      })
    })), jsx(ConditionsComponent, {
      conditionData: [[{
        operator: criteriaState.entryRootCondition
      }], ...generateMapping()],
      deleteFunction: idx => {
        criteriaState.deleteEntryOptionsDataArray(idx);
      },
      updateFunction: idx => {
        criteriaState.selectEntryOptionsDataArrayForUpdate(idx);

        if (handleNext) {
          handleNext();
        }
      }
    }), jsx(Button, Object.assign({
      onClick: () => {
        if (handleNext) {
          criteriaState.setSelectedRule([]);
          criteriaState.setSelectedCriteria(-1);
          handleNext();
        }
      },
      customStyle: {
        color: `${(_c = theme.backgroundColor) === null || _c === void 0 ? void 0 : _c.buttonBackground}`,
        fontSize: '15px',
        fontWeight: '500',
        border: `${(_d = theme.border) === null || _d === void 0 ? void 0 : _d.modalInnerComponents}`,
        background: 'transparent'
      }
    }, {
      children: "+ Add conditions"
    }))]
  }));
};

const CreateGroupType = ({
  onClose,
  handlePrevious,
  groupInputDetails,
  handleNext,
  criteriaStateManager
}) => {
  const [checked, setChecked] = useState(true);
  const [groupEncryptionType, setGroupEncryptionType] = useState(GROUP_TYPE_OPTIONS[0].value);
  const {
    createGatedGroup,
    loading
  } = useCreateGatedGroup();
  const groupInfoToast = useToast();
  const theme = useContext(ThemeContext);

  const getEncryptionType = () => {
    if (groupEncryptionType === 'encrypted') {
      return false;
    }

    return true;
  };

  const createGroupService = () => __awaiter(void 0, void 0, void 0, function* () {
    const groupInfo = {
      groupName: groupInputDetails.groupName,
      groupDescription: groupInputDetails.groupDescription,
      groupImage: groupInputDetails.groupImage || ProfilePicture,
      isPublic: getEncryptionType()
    };
    const rules = checked ? criteriaStateManager.generateRule() : {};
    const isSuccess = yield createGatedGroup(groupInfo, rules);

    if (isSuccess === true) {
      groupInfoToast.showMessageToast({
        toastTitle: 'Success',
        toastMessage: 'Group created successfully',
        toastType: 'SUCCESS',
        getToastIcon: size => jsx(MdCheckCircle, {
          size: size,
          color: "green"
        })
      });
    } else {
      showError('Group creation failed');
    }

    onClose();
  });

  const verifyAndCreateGroup = () => __awaiter(void 0, void 0, void 0, function* () {
    if (groupEncryptionType.trim() === '') {
      showError('Group encryption type is not selected');
      return;
    }

    yield createGroupService();
  });

  const showError = errorMessage => {
    groupInfoToast.showMessageToast({
      toastTitle: 'Error',
      toastMessage: errorMessage,
      toastType: 'ERROR',
      getToastIcon: size => jsx(MdError, {
        size: size,
        color: "red"
      })
    });
  };

  return jsxs(Section, Object.assign({
    flexDirection: "column",
    gap: "16px"
  }, {
    children: [jsx(ModalHeader, {
      title: "Create Group",
      handleClose: onClose,
      handlePrevious: handlePrevious
    }), jsx(ScrollSection$1, Object.assign({
      width: "100%",
      overflow: "hidden auto",
      maxHeight: "53vh",
      theme: theme,
      padding: "5px 4px 5px 0"
    }, {
      children: jsxs(Section, Object.assign({
        gap: "20px",
        flexDirection: "column",
        height: "100%"
      }, {
        children: [jsx(OptionButtons, {
          options: GROUP_TYPE_OPTIONS,
          selectedValue: groupEncryptionType,
          handleClick: newEl => {
            setGroupEncryptionType(newEl);
          }
        }), jsx(ToggleInput, {
          labelHeading: "Gated Group",
          labelSubHeading: "Turn this on for Token/NFT gating options",
          checked: checked,
          onToggle: () => setChecked(!checked)
        }), checked && jsxs(Section, Object.assign({
          flexDirection: "column",
          gap: "20px"
        }, {
          children: [jsx(AddConditionSection, Object.assign({
            criteriaState: criteriaStateManager.entryCriteria,
            handleNext: () => {
              if (handleNext) {
                criteriaStateManager.setSelectedCriteria(SelectedCriteria.ENTRY);
                handleNext();
              }
            }
          }, ACCESS_TYPE_TITLE.ENTRY)), jsx(AddConditionSection, Object.assign({
            handleNext: () => {
              if (handleNext) {
                criteriaStateManager.setSelectedCriteria(SelectedCriteria.CHAT);
                handleNext();
              }
            },
            criteriaState: criteriaStateManager.chatCriteria
          }, ACCESS_TYPE_TITLE.CHAT))]
        }))]
      }))
    })), jsxs(Section, Object.assign({
      gap: "16px",
      flexDirection: "column"
    }, {
      children: [jsxs(Button, Object.assign({
        width: "197px",
        onClick: verifyAndCreateGroup
      }, {
        children: [!loading && 'Create Group', loading && jsx(Spinner, {
          size: "20",
          color: "#fff"
        })]
      })), jsx(InfoContainer, {
        label: 'Learn more about access gating rules',
        cta: 'https://push.org/docs/chat/build/conditional-rules-for-group/'
      })]
    }))]
  }));
}; //styles

const ScrollSection$1 = /*#__PURE__*/styled(Section).withConfig({
  displayName: "CreateGroupType__ScrollSection",
  componentId: "sc-lwmsdd-0"
})(["&::-webkit-scrollbar-thumb{background:", ";border-radius:10px;}&::-webkit-scrollbar-button{height:40px;}&::-webkit-scrollbar{width:4px;}"], props => props.theme.scrollbarColor);

const AddButtons = ({
  title,
  handleNext
}) => {
  var _a, _b;

  const theme = useContext(ThemeContext);
  return jsx(Button, Object.assign({
    customStyle: {
      color: `${(_a = theme.backgroundColor) === null || _a === void 0 ? void 0 : _a.buttonBackground}`,
      fontSize: '15px',
      fontWeight: '500',
      border: `${(_b = theme.border) === null || _b === void 0 ? void 0 : _b.modalInnerComponents}`,
      background: 'transparent'
    },
    onClick: handleNext
  }, {
    children: title
  }));
};

const DefineCondtion = ({
  onClose,
  handlePrevious,
  handleNext,
  criteriaStateManager
}) => {
  var _a, _b, _c, _d, _e;

  const theme = useContext(ThemeContext);
  const isMobile = useMediaQuery(device.mobileL);
  const criteriaState = criteriaStateManager.getSelectedCriteria();
  const customButtonStyle = {
    background: criteriaState.selectedRules.length < 1 ? (_a = theme.backgroundColor) === null || _a === void 0 ? void 0 : _a.buttonDisableBackground : (_b = theme.backgroundColor) === null || _b === void 0 ? void 0 : _b.buttonBackground,
    color: criteriaState.selectedRules.length < 1 ? (_c = theme.textColor) === null || _c === void 0 ? void 0 : _c.buttonDisableText : (_d = theme.textColor) === null || _d === void 0 ? void 0 : _d.buttonText
  };

  const verifyAndDoNext = () => {
    handleDefineCondition(criteriaState, handlePrevious);
  };

  const getRules = () => {
    return [[{
      operator: criteriaState.entryRuleTypeCondition
    }], ...criteriaState.selectedRules.map(el => [el])];
  }; // set state for edit condition


  useEffect(() => {
    if (criteriaState.isCondtionUpdateEnabled()) {
      criteriaState.setEntryRuleTypeCondition(criteriaState.entryOptionTypeArray[criteriaState.entryOptionsDataArrayUpdate]);

      if (criteriaState.selectedRules.length === 0) {
        criteriaState.setSelectedRule([...criteriaState.entryOptionsDataArray[criteriaState.entryOptionsDataArrayUpdate]]);
      }
    }
  }, []);
  return jsxs(Section, Object.assign({
    flexDirection: "column",
    gap: "16px",
    width: isMobile ? '300px' : '400px'
  }, {
    children: [jsx(ModalHeader, {
      title: criteriaState.isCondtionUpdateEnabled() ? 'Update Condition' : 'Define Condition',
      handleClose: onClose,
      handlePrevious: handlePrevious
    }), jsxs(Section, Object.assign({
      flexDirection: "column"
    }, {
      children: [criteriaState.selectedRules.length > 1 && jsx(Section, Object.assign({
        margin: "5px 0 16px 0"
      }, {
        children: jsx(OperatorContainer, {
          operator: criteriaState.entryRuleTypeCondition,
          setOperator: newEl => {
            criteriaState.setEntryRuleTypeCondition(newEl);
          }
        })
      })), criteriaState.selectedRules.length > 0 && jsx(ConditionSection, Object.assign({
        width: "100%",
        overflow: "hidden auto",
        maxHeight: "15vh",
        theme: theme,
        padding: "5px 4px 5px 0"
      }, {
        children: jsx(ConditionsComponent, {
          conditionData: getRules(),
          deleteFunction: idx => {
            criteriaState.deleteRule(idx);
          },
          updateFunction: idx => {
            criteriaState.setUpdateCriteriaIdx(idx);

            if (handleNext) {
              handleNext();
            }
          }
        })
      })), jsx(AddButtons, {
        handleNext: handleNext,
        title: '+ Add criteria'
      })]
    })), !criteriaState.selectedRules.length && jsx(Span$1, Object.assign({
      fontSize: "15px",
      fontWeight: "400",
      color: (_e = theme.textColor) === null || _e === void 0 ? void 0 : _e.modalSubHeadingText
    }, {
      children: "You must add at least 1 criteria to enable gating"
    })), jsx(Button, Object.assign({
      onClick: verifyAndDoNext,
      customStyle: customButtonStyle,
      width: "158px"
    }, {
      children: criteriaState.isCondtionUpdateEnabled() ? 'Update' : 'Add'
    })), jsx(InfoContainer, {
      label: 'Learn more about access gating rules',
      cta: 'https://push.org/docs/chat/build/conditional-rules-for-group/'
    })]
  }));
};
const ConditionSection = /*#__PURE__*/styled(Section).withConfig({
  displayName: "DefineCondition__ConditionSection",
  componentId: "sc-aqetzr-0"
})(["&::-webkit-scrollbar-thumb{background:", ";border-radius:10px;}&::-webkit-scrollbar-button{height:40px;}&::-webkit-scrollbar{width:4px;}"], props => props.theme.scrollbarColor);

var img$4 = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z' fill='%23627EEA'/%3e %3cpath d='M12.3735 3V9.6525L17.9963 12.165L12.3735 3Z' fill='white' fill-opacity='0.602'/%3e %3cpath d='M12.3735 3L6.75 12.165L12.3735 9.6525V3Z' fill='white'/%3e %3cpath d='M12.3735 16.476V20.9963L18 13.212L12.3735 16.476Z' fill='white' fill-opacity='0.602'/%3e %3cpath d='M12.3735 20.9963V16.4753L6.75 13.212L12.3735 20.9963Z' fill='white'/%3e %3cpath d='M12.3735 15.4298L17.9963 12.1651L12.3735 9.65405V15.4298Z' fill='white' fill-opacity='0.2'/%3e %3cpath d='M6.75 12.1651L12.3735 15.4298V9.65405L6.75 12.1651Z' fill='white' fill-opacity='0.602'/%3e %3c/svg%3e";

var img$3 = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_5284_6348)'%3e %3cpath d='M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z' fill='%237B3FE4'/%3e %3cpath d='M20 12.2801V15.9003C19.9987 16.1261 19.9391 16.3476 19.8269 16.5433C19.7147 16.739 19.5538 16.9021 19.36 17.0168L16.235 18.8231C16.0415 18.9389 15.8203 19 15.595 19C15.3697 19 15.1485 18.9389 14.955 18.8231L11.83 17.0168C11.6362 16.9021 11.4753 16.739 11.3631 16.5433C11.251 16.3476 11.1913 16.1261 11.19 15.9003V14.8842L12.79 13.9522V15.7184L15.59 17.3492L18.39 15.7184V12.4645L15.59 10.8337L9.03001 14.6472C8.83465 14.7576 8.61421 14.8157 8.38999 14.8157C8.16577 14.8157 7.94536 14.7576 7.75 14.6472L4.62499 12.8333C4.43416 12.7169 4.27639 12.5532 4.16692 12.3579C4.05745 12.1625 3.99997 11.9422 4 11.7181V8.09786C4.00129 7.87211 4.06096 7.65056 4.17313 7.45487C4.28533 7.25918 4.44619 7.09604 4.63999 6.98144L7.765 5.17508C7.95895 5.06045 8.17993 5 8.40499 5C8.63008 5 8.85106 5.06045 9.04501 5.17508L12.17 6.98144C12.3638 7.09604 12.5247 7.25918 12.6369 7.45487C12.7491 7.65056 12.8087 7.87211 12.81 8.09786V9.11393L11.2 10.0397V8.28353L8.40001 6.65279L5.59999 8.28353V11.5337L8.40001 13.1644L14.96 9.35102C15.1553 9.24056 15.3758 9.18254 15.6 9.18254C15.8242 9.18254 16.0446 9.24056 16.24 9.35102L19.365 11.1649C19.5577 11.28 19.7175 11.4433 19.8287 11.6386C19.94 11.8341 19.999 12.055 20 12.2801Z' fill='white'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_5284_6348'%3e %3crect width='24' height='24' fill='white'/%3e %3c/clipPath%3e %3c/defs%3e %3c/svg%3e";

var img$2 = "data:image/svg+xml,%3csvg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1080 1218.5' xmlSpace='preserve' %3e %3cpath className='st0' d='M541.8 76.4c2.9 0 5.8.8 8.4 2.3l446.1 259.5c5.2 3 8.4 8.6 8.3 14.5l-1.7 516.1c0 6-3.2 11.5-8.4 14.5l-447.8 256.6c-2.5 1.5-5.5 2.2-8.4 2.2-2.9 0-5.8-.8-8.4-2.3L83.8 880.3c-5.2-3-8.4-8.6-8.3-14.5l1.7-516.1c0-6 3.2-11.5 8.4-14.5L533.4 78.6c2.5-1.5 5.4-2.2 8.4-2.2M542 1c-15.9-.1-31.8 4-46.1 12.2L48.1 269.7c-28.6 16.4-46.2 46.7-46.4 79.7L0 865.5c-.1 32.9 17.4 63.4 45.8 80L491.9 1205c14.2 8.3 30.1 12.4 46.1 12.5 15.9.1 31.8-4 46.1-12.2l447.8-256.6c28.6-16.4 46.2-46.7 46.4-79.7l1.7-516c.1-32.9-17.4-63.4-45.8-80L588.1 13.5C573.8 5.2 557.9 1 542 1z' /%3e %3cpath className='st0' d='M632.4 282.3H567c-4.9 0-9.3 3.1-11 7.7L345.8 866.4c-1.4 3.8 1.4 7.8 5.5 7.8h65.4c4.9 0 9.3-3.1 11-7.7L638 290c1.2-3.7-1.6-7.7-5.6-7.7zm-114.4 0h-65.4c-4.9 0-9.3 3.1-11 7.7L231.4 866.4c-1.4 3.8 1.4 7.8 5.5 7.8h65.4c4.9 0 9.3-3.1 11-7.7L523.6 290c1.3-3.7-1.5-7.7-5.6-7.7zm84.7 223.5c-1.9-5.1-9.1-5.1-11 0l-34 93.2c-.9 2.6-.9 5.4 0 8l94.7 259.6c1.7 4.6 6.1 7.7 11 7.7h65.4c4.1 0 6.9-4 5.5-7.8L602.7 505.8zm245.9 360.6L659.9 349.1c-1.9-5.1-9.1-5.1-11 0l-34 93.2c-.9 2.6-.9 5.4 0 8l151.9 416.3c1.7 4.6 6.1 7.7 11 7.7h65.4c3.9-.1 6.8-4.1 5.4-7.9z' /%3e %3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3ccircle cx='12' cy='12' r='12' fill='%231D1D1D'/%3e %3cpath d='M8.16193 12L6.58295 13.579L5 12L6.57898 10.421L8.16193 12ZM12 8.16193L14.7085 10.8705L16.2875 9.29148L12 5L7.70852 9.29148L9.2875 10.8705L12 8.16193ZM17.417 10.421L15.8381 12L17.417 13.579L18.996 12L17.417 10.421ZM12 15.8381L9.29148 13.1295L7.7125 14.7085L12 19L16.2875 14.7085L14.7085 13.1295L12 15.8381ZM12 13.579L13.579 12L12 10.421L10.417 12L12 13.579Z' fill='%23F0B90B'/%3e %3c/svg%3e";

var img = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_9390_20606)'%3e %3cpath d='M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z' fill='%23FF0420'/%3e %3cpath d='M8.50098 15.1872C7.78578 15.1872 7.20018 15.0192 6.74418 14.6832C6.29298 14.3424 6.06738 13.8528 6.06738 13.224C6.06738 13.0896 6.08178 12.9312 6.11058 12.7392C6.18738 12.3072 6.29778 11.7888 6.44178 11.1792C6.84978 9.52799 7.90578 8.70239 9.60498 8.70239C10.0658 8.70239 10.4834 8.77919 10.8482 8.93759C11.213 9.08639 11.501 9.31679 11.7122 9.62399C11.9234 9.92639 12.029 10.2864 12.029 10.704C12.029 10.8288 12.0146 10.9872 11.9858 11.1792C11.8946 11.712 11.789 12.2352 11.6594 12.7392C11.4482 13.56 11.0882 14.1792 10.5698 14.5872C10.0562 14.9904 9.36498 15.1872 8.50098 15.1872ZM8.63058 13.8912C8.96658 13.8912 9.24978 13.7904 9.48498 13.5936C9.72498 13.3968 9.89778 13.0944 9.99858 12.6816C10.1378 12.1152 10.2434 11.6256 10.3154 11.2032C10.3394 11.0784 10.3538 10.9488 10.3538 10.8144C10.3538 10.2672 10.0706 9.99359 9.49938 9.99359C9.16338 9.99359 8.87538 10.0944 8.63538 10.2912C8.40018 10.488 8.23218 10.7904 8.13138 11.2032C8.02098 11.6064 7.91538 12.096 7.80498 12.6816C7.78098 12.8016 7.76658 12.9264 7.76658 13.0608C7.76178 13.6176 8.05458 13.8912 8.63058 13.8912Z' fill='white'/%3e %3cpath d='M12.4463 15.1009C12.3791 15.1009 12.3311 15.0817 12.2927 15.0385C12.2639 14.9905 12.2543 14.9377 12.2639 14.8753L13.5071 9.0193C13.5167 8.9521 13.5503 8.8993 13.6079 8.8561C13.6607 8.8129 13.7183 8.7937 13.7807 8.7937H16.1759C16.8431 8.7937 17.3759 8.9329 17.7791 9.2065C18.1871 9.4849 18.3935 9.8833 18.3935 10.4065C18.3935 10.5553 18.3743 10.7137 18.3407 10.8769C18.1919 11.5681 17.8895 12.0769 17.4287 12.4081C16.9775 12.7393 16.3583 12.9025 15.5711 12.9025H14.3567L13.9439 14.8753C13.9295 14.9425 13.9007 14.9953 13.8431 15.0385C13.7903 15.0817 13.7327 15.1009 13.6703 15.1009H12.4463ZM15.6335 11.6593C15.8879 11.6593 16.1039 11.5921 16.2911 11.4529C16.4831 11.3137 16.6079 11.1169 16.6703 10.8577C16.6895 10.7569 16.6991 10.6657 16.6991 10.5889C16.6991 10.4161 16.6463 10.2817 16.5455 10.1905C16.4447 10.0945 16.2671 10.0465 16.0223 10.0465H14.9423L14.6015 11.6593H15.6335Z' fill='white'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_9390_20606'%3e %3crect width='24' height='24' fill='white'/%3e %3c/clipPath%3e %3c/defs%3e %3c/svg%3e";

const AddCriteria = ({
  handlePrevious,
  onClose,
  criteriaStateManager
}) => {
  var _a, _b, _c, _d;

  const [selectedTypeValue, setSelectedTypeValue] = useState(0);
  const [validationErrors, setValidationErrors] = useState({});
  const [selectedCategoryValue, setSelectedCategoryValue] = useState(0);
  const [selectedSubCategoryValue, setSelectedSubCategoryValue] = useState(0);
  const [validationLoading, setValidationLoading] = useState(false);
  const [guildComparison, setGuildComparison] = useState('');
  const [selectedChainValue, setSelectedChainValue] = useState(0);
  const [contract, setContract] = useState('');
  const [inviteCheckboxes, setInviteCheckboxes] = useState({
    admin: true,
    owner: true
  });
  const [url, setUrl] = useState('');
  const [guildId, setGuildId] = useState('');
  const [specificRoleId, setSpecificRoleId] = useState('');
  const [unit, setUnit] = useState('TOKEN');
  const [decimals, setDecimals] = useState(18);
  const [quantity, setQuantity] = useState({
    value: 0,
    range: 0
  });
  const {
    env
  } = useChatData();
  const theme = useContext(ThemeContext);
  const groupInfoToast = useToast();
  const isMobile = useMediaQuery(device.mobileL);
  const dropdownQuantityRangeValues = [{
    id: 0,
    title: 'Greater than',
    value: '>',
    function: () => setQuantity(Object.assign(Object.assign({}, quantity), {
      range: 0
    }))
  }, {
    id: 1,
    title: 'Greater or equal to',
    value: '>=',
    function: () => setQuantity(Object.assign(Object.assign({}, quantity), {
      range: 1
    }))
  }, {
    id: 2,
    title: 'Less than',
    value: '<',
    function: () => setQuantity(Object.assign(Object.assign({}, quantity), {
      range: 2
    }))
  }, {
    id: 3,
    title: 'Less or equal to',
    value: '<=',
    function: () => setQuantity(Object.assign(Object.assign({}, quantity), {
      range: 3
    }))
  }, {
    id: 4,
    title: 'Equal to',
    value: '==',
    function: () => setQuantity(Object.assign(Object.assign({}, quantity), {
      range: 4
    }))
  }, {
    id: 5,
    title: 'Not equal to',
    value: '!=',
    function: () => setQuantity(Object.assign(Object.assign({}, quantity), {
      range: 5
    }))
  }];
  const dropdownTypeValues = [{
    id: 0,
    title: 'Push protocol',
    value: TYPE.PUSH,
    function: () => setSelectedTypeValue(0)
  }, {
    id: 1,
    title: 'Guild',
    value: TYPE.GUILD,
    function: () => setSelectedTypeValue(1)
  }];
  const dropdownCategoryValues = {
    PUSH: [{
      id: 0,
      value: CATEGORY.ERC20,
      title: 'Token ERC20',
      function: () => setSelectedCategoryValue(0)
    }, {
      id: 1,
      value: CATEGORY.ERC721,
      title: 'NFT ERC721',
      function: () => setSelectedCategoryValue(1)
    }, {
      id: 2,
      value: CATEGORY.INVITE,
      title: 'Invite',
      function: () => setSelectedCategoryValue(2)
    }, {
      id: 3,
      value: CATEGORY.CustomEndpoint,
      title: 'Custom Endpoint',
      function: () => setSelectedCategoryValue(3)
    }],
    GUILD: {
      value: CATEGORY.ROLES,
      title: 'Roles'
    }
  };
  const dropdownSubCategoryValues = {
    ERC20: {
      value: SUBCATEGORY.HOLDER,
      title: 'Holder'
    },
    ERC721: {
      value: SUBCATEGORY.HOLDER,
      title: 'Holder'
    },
    INVITE: {
      value: SUBCATEGORY.DEFAULT,
      title: 'Default'
    },
    CustomEndpoint: [{
      id: 0,
      value: SUBCATEGORY.GET,
      title: 'Get',
      function: () => setSelectedSubCategoryValue(0)
    }],
    ROLES: {
      value: SUBCATEGORY.DEFAULT,
      title: 'Default'
    }
  };
  const dropdownChainsValues = [{
    id: 0,
    value: BLOCKCHAIN_NETWORK[env].ETHEREUM,
    title: 'Ethereum',
    icon: img$4,
    function: () => setSelectedChainValue(0)
  }, {
    id: 1,
    value: BLOCKCHAIN_NETWORK[env].POLYGON,
    title: 'Polygon',
    icon: img$3,
    function: () => setSelectedChainValue(1)
  }, {
    id: 2,
    value: BLOCKCHAIN_NETWORK[env].BSC,
    title: 'BSC',
    icon: img$1,
    function: () => setSelectedChainValue(2)
  }, {
    id: 3,
    value: BLOCKCHAIN_NETWORK[env].OPTIMISM,
    title: 'Optimism',
    icon: img,
    function: () => setSelectedChainValue(3)
  }, {
    id: 4,
    value: BLOCKCHAIN_NETWORK[env].ARBITRUM,
    title: 'Arbitrim',
    icon: img$2,
    function: () => setSelectedChainValue(4)
  }];

  const onQuantityChange = e => {
    setQuantity(Object.assign(Object.assign({}, quantity), {
      value: e.target.value
    }));
  };

  const verifyAndDoNext = () => __awaiter(void 0, void 0, void 0, function* () {
    setValidationLoading(true);
    const _type = dropdownTypeValues[selectedTypeValue].value;
    const category = _type === 'PUSH' ? dropdownCategoryValues[_type][selectedCategoryValue].value || CATEGORY.ERC20 : 'ROLES';
    let subCategory = 'DEFAULT';

    if (_type === 'PUSH') {
      if (category === CATEGORY.ERC20 || category === CATEGORY.ERC721) {
        subCategory = SUBCATEGORY.HOLDER;
      } else if (category === CATEGORY.CustomEndpoint) {
        subCategory = 'GET';
      }
    }

    const rule = {
      type: _type,
      category: category,
      subcategory: subCategory,
      data: getCriteriaData({
        type: _type,
        category,
        contract,
        quantity,
        decimals,
        unit,
        url,
        inviteCheckboxes,
        guildComparison,
        specificRoleId,
        guildId,
        dropdownQuantityRangeValues,
        selectedChainValue,
        dropdownChainsValues
      })
    }; //guild validation added

    const errors = yield validationCriteria(rule);
    setValidationLoading(false);

    if (Object.keys(errors).length) {
      setValidationErrors(errors);
    } else {
      const isSuccess = criteriaState.addNewRule(rule);

      if (!isSuccess) {
        showError('Selected Criteria was already added');
        return;
      }

      if (handlePrevious) {
        handlePrevious();
      }
    }
  });

  const criteriaState = criteriaStateManager.getSelectedCriteria(); // Autofill the form for the update

  useEffect(() => {
    if (criteriaState.isUpdateCriteriaEnabled()) {
      //Load the states
      const oldValue = criteriaState.selectedRules[criteriaState.updateCriteriaIdx];

      if (oldValue.type === 'PUSH') {
        // category
        setSelectedCategoryValue(dropdownCategoryValues.PUSH.findIndex(obj => obj.value === oldValue.category));
        const pushData = oldValue.data; // sub category

        if (oldValue.category === CATEGORY.ERC20 || oldValue.category === CATEGORY.ERC721) {
          if (pushData.token) {
            setUnit(pushData.token);
          }

          if (pushData.decimals) {
            setDecimals(decimals);
          } // TODO: make helper function for this


          const contractAndChain = (pushData.contract || 'eip155:1:0x').split(':');
          setSelectedChainValue(dropdownChainsValues.findIndex(obj => obj.value === contractAndChain[0] + ':' + contractAndChain[1]));
          setContract(contractAndChain.length === 3 ? contractAndChain[2] : '');
          setQuantity({
            value: pushData.amount || 0,
            range: dropdownQuantityRangeValues.findIndex(obj => obj.value === pushData.comparison)
          });
        } else if (oldValue.category === CATEGORY.INVITE) {
          setInviteCheckboxes({
            admin: true,
            owner: true
          });
        } else {
          // invite
          setUrl(pushData.url || '');
        }
      } else {
        // guild condition
        setGuildId(oldValue.data.id);
        setSpecificRoleId(oldValue.data.role);
        setGuildComparison(oldValue.data.comparison || GUILD_COMPARISON_OPTIONS[2].value);
      }

      setSelectedTypeValue(dropdownTypeValues.findIndex(obj => obj.value === oldValue.type));
    }
  }, []);
  useEffect(() => {
    // Debouncing
    // Fetch the contract info
    const getData = setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
      yield fetchContractInfo({
        setValidationErrors,
        selectedCategoryValue,
        selectedTypeValue,
        dropdownCategoryValues,
        dropdownTypeValues,
        contract,
        setUnit,
        setDecimals,
        selectedChainValue,
        dropdownChainsValues
      });
    }), 2000);
    return () => clearTimeout(getData);
  }, [contract, selectedCategoryValue, selectedChainValue]);

  const showError = errorMessage => {
    groupInfoToast.showMessageToast({
      toastTitle: 'Error',
      toastMessage: errorMessage,
      toastType: 'ERROR',
      getToastIcon: size => jsx(MdError, {
        size: size,
        color: "red"
      })
    });
  };

  return jsxs(ScrollSection, Object.assign({
    theme: theme,
    flexDirection: "column",
    gap: "12px",
    overflow: "hidden scroll",
    justifyContent: "start",
    padding: '0 2px 0 10px',
    width: isMobile ? '300px' : '400px'
  }, {
    children: [jsx(Section, Object.assign({
      margin: "0 0 5px 0"
    }, {
      children: jsx(ModalHeader, {
        handleClose: onClose,
        handlePrevious: handlePrevious,
        title: criteriaState.isUpdateCriteriaEnabled() ? 'Update Criteria' : 'Add Criteria'
      })
    })), jsx(DropDownInput, {
      labelName: "Type",
      selectedValue: selectedTypeValue,
      dropdownValues: dropdownTypeValues
    }), jsxs(Section, Object.assign({
      zIndex: "unset",
      justifyContent: "space-between",
      alignItems: "center"
    }, {
      children: [jsx(Section, Object.assign({
        width: "48%",
        zIndex: 'unset'
      }, {
        children: Array.isArray(getCategoryDropdownValues({
          dropdownCategoryValues,
          dropdownTypeValues,
          selectedTypeValue
        })) ? jsx(DropDownInput, {
          labelName: "Gating Category",
          selectedValue: selectedCategoryValue,
          dropdownValues: getCategoryDropdownValues({
            dropdownCategoryValues,
            dropdownTypeValues,
            selectedCategoryValue,
            selectedTypeValue
          })
        }) : jsx(TextInput, {
          labelName: "Gating category",
          inputValue: (_a = getCategoryDropdownValues({
            dropdownCategoryValues,
            dropdownTypeValues,
            selectedCategoryValue,
            selectedTypeValue
          })) === null || _a === void 0 ? void 0 : _a.title,
          disabled: true,
          customStyle: {
            background: (_b = theme.backgroundColor) === null || _b === void 0 ? void 0 : _b.modalHoverBackground
          }
        })
      })), jsx(Section, Object.assign({
        width: "48%"
      }, {
        children: Array.isArray(getSubCategoryDropdownValues({
          dropdownCategoryValues,
          dropdownTypeValues,
          selectedCategoryValue,
          dropdownSubCategoryValues,
          selectedTypeValue
        })) ? jsx(DropDownInput, {
          labelName: "Sub-Category",
          selectedValue: selectedSubCategoryValue,
          dropdownValues: getSubCategoryDropdownValues({
            dropdownCategoryValues,
            dropdownTypeValues,
            selectedCategoryValue,
            dropdownSubCategoryValues,
            selectedTypeValue
          })
        }) : jsx(TextInput, {
          labelName: "Sub-category",
          inputValue: (_c = getSubCategoryDropdownValues({
            dropdownCategoryValues,
            dropdownTypeValues,
            selectedCategoryValue,
            dropdownSubCategoryValues,
            selectedTypeValue
          })) === null || _c === void 0 ? void 0 : _c.title,
          disabled: true,
          customStyle: {
            background: (_d = theme.backgroundColor) === null || _d === void 0 ? void 0 : _d.modalHoverBackground
          }
        })
      }))]
    })), checkIfTokenNFT({
      dropdownCategoryValues,
      dropdownTypeValues,
      selectedCategoryValue,
      selectedTypeValue
    }) && jsxs(Fragment, {
      children: [jsx(DropDownInput, {
        labelName: "Blockchain",
        selectedValue: selectedChainValue,
        dropdownValues: dropdownChainsValues
      }), jsxs(Section, Object.assign({
        gap: "10px",
        flexDirection: "column",
        alignItems: "start"
      }, {
        children: [jsx(TextInput, {
          labelName: "Contract",
          inputValue: contract,
          onInputChange: e => setContract(e.target.value),
          placeholder: "e.g. 0x123...",
          error: !!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.tokenError)
        }), !!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.tokenError) && jsx(ErrorSpan$1, {
          children: validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.tokenError
        })]
      })), jsxs(Section, Object.assign({
        gap: "10px",
        flexDirection: "column",
        alignItems: "start"
      }, {
        children: [jsx(QuantityInput, {
          dropDownValues: dropdownQuantityRangeValues,
          labelName: "Quantity",
          inputValue: quantity,
          error: !!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.tokenAmount),
          onInputChange: onQuantityChange,
          placeholder: "e.g. 1.45678",
          unit: unit
        }), !!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.tokenAmount) && jsx(ErrorSpan$1, {
          children: validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.tokenAmount
        })]
      }))]
    }), checkIfCustomEndpoint({
      dropdownCategoryValues,
      dropdownTypeValues,
      selectedCategoryValue,
      selectedTypeValue
    }) && jsxs(Section, Object.assign({
      gap: "10px",
      flexDirection: "column",
      alignItems: "start"
    }, {
      children: [jsx(TextInput, {
        labelName: "URL",
        inputValue: url,
        onInputChange: e => setUrl(e.target.value),
        placeholder: "e.g. abc.com",
        error: !!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.url)
      }), !!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.url) && jsx(ErrorSpan$1, {
        children: validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.url
      })]
    })), checkIfPushInvite({
      dropdownCategoryValues,
      dropdownTypeValues,
      selectedCategoryValue,
      selectedTypeValue
    }) && jsx(Section, Object.assign({
      flexDirection: "column",
      gap: "10px"
    }, {
      children: Object.keys(INVITE_CHECKBOX_LABEL).map(key => jsx(Checkbox, {
        labelName: INVITE_CHECKBOX_LABEL[key],
        onToggle: () => setInviteCheckboxes({
          admin: true,
          owner: true
        }),
        checked: inviteCheckboxes[key]
      }))
    })), checkIfGuild(dropdownTypeValues, selectedTypeValue) && jsxs(Fragment, {
      children: [jsxs(Section, Object.assign({
        gap: "10px",
        flexDirection: "column",
        alignItems: "start"
      }, {
        children: [jsx(TextInput, {
          labelName: "ID",
          inputValue: guildId,
          onInputChange: e => setGuildId(e.target.value),
          placeholder: "e.g. 4687",
          error: !!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.guildId)
        }), !!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.guildId) && jsx(ErrorSpan$1, {
          children: validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.guildId
        })]
      })), jsxs(Section, Object.assign({
        gap: "10px",
        flexDirection: "column",
        alignItems: "start"
      }, {
        children: [jsx(OptionButtons, {
          options: GUILD_COMPARISON_OPTIONS,
          totalWidth: isMobile ? '400px' : '410px',
          selectedValue: guildComparison,
          error: !!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.guildComparison),
          handleClick: newEl => {
            setGuildComparison(newEl);
          }
        }), !!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.guildComparison) && jsx(ErrorSpan$1, {
          children: validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.guildComparison
        })]
      })), guildComparison === 'specific' && jsxs(Section, Object.assign({
        gap: "10px",
        flexDirection: "column",
        alignItems: "start"
      }, {
        children: [jsx(TextInput, {
          labelName: "Specific Role",
          inputValue: specificRoleId,
          onInputChange: e => setSpecificRoleId(e.target.value),
          placeholder: "e.g. 4687",
          error: !!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.guildRole)
        }), !!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.guildRole) && jsx(ErrorSpan$1, {
          children: validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.guildRole
        })]
      }))]
    }), jsxs(Button, Object.assign({
      width: "197px",
      onClick: verifyAndDoNext
    }, {
      children: [!validationLoading && (criteriaState.isUpdateCriteriaEnabled() ? 'Update' : 'Add'), validationLoading && jsx(Spinner, {
        size: "20",
        color: "#fff"
      })]
    })), jsx(InfoContainer, {
      label: 'Learn more about access gating rules',
      cta: 'https://push.org/docs/chat/build/conditional-rules-for-group/'
    })]
  }));
};
const ErrorSpan$1 = /*#__PURE__*/styled(Span$1).withConfig({
  displayName: "AddCriteria__ErrorSpan",
  componentId: "sc-l617j0-0"
})(["font-size:12px;font-weight:500;color:#ed5858;"]);
const ScrollSection = /*#__PURE__*/styled(Section).withConfig({
  displayName: "AddCriteria__ScrollSection",
  componentId: "sc-l617j0-1"
})(["&::-webkit-scrollbar-thumb{background:", ";border-radius:10px;}&::-webkit-scrollbar-button{height:40px;}&::-webkit-scrollbar{width:4px;}"], props => props.theme.scrollbarColor);

const AutoImageClipper = props => {
  const {
    imageSrc,
    onImageCropped,
    width,
    height
  } = props;
  const [crop, setCrop] = useState({
    x: 0,
    y: 0
  });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState('');
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  React__default.useEffect(() => {
    function showCroppedImage() {
      return __awaiter(this, void 0, void 0, function* () {
        try {
          if (imageSrc) {
            const croppedImage = yield getCroppedImg(imageSrc, croppedAreaPixels);
            const image = yield resizeFile(croppedImage);
            onImageCropped(image);
            return;
          } else {
            return;
          }
        } catch (e) {
          console.error(e);
          return;
        }
      });
    }

    showCroppedImage();
  }, [crop]);

  function getCroppedImg(imageSrc, pixelCrop) {
    return __awaiter(this, void 0, void 0, function* () {
      const image = yield createImage(imageSrc);
      const canvas = document.createElement("canvas");
      canvas.width = pixelCrop === null || pixelCrop === void 0 ? void 0 : pixelCrop.width;
      canvas.height = pixelCrop === null || pixelCrop === void 0 ? void 0 : pixelCrop.height;
      const ctx = canvas.getContext("2d");
      const fileName = "none.jpg";
      ctx.drawImage(image, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height); // As Base64 string
      // return canvas.toDataURL('image/jpeg');
      // As a blob

      return new Promise((resolve, reject) => {
        canvas.toBlob(file => {
          //   resolve(URL.createObjectURL(file));
          resolve(new File([file], fileName, {
            type: "image/jpeg",
            lastModified: Date.now()
          }));
        }, "image/jpeg");
      });
    });
  }

  const resizeFile = file => {
    return new Promise(resolve => {
      Resizer.imageFileResizer(file, 128, 128, "JPEG", 80, 0, uri => {
        resolve(uri);
        setCroppedImage(uri);
      }, "base64");
    });
  };

  const createImage = url => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", error => reject(error));
      image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox

      image.src = url;
    });
  };

  const onZoomChange = zoom => {
    setZoom(zoom);
  };

  return jsx(Fragment$1, {
    children: jsx(Container, {
      children: jsx(Cropper, {
        image: imageSrc,
        crop: crop,
        zoom: zoom,
        aspect: 1,
        onCropChange: setCrop,
        onCropComplete: onCropComplete,
        onZoomChange: onZoomChange,
        style: {
          containerStyle: {
            width: width ? width : "0.1px",
            height: height ? height : "0.1px",
            position: "relative",
            borderRadius: "16px"
          }
        }
      })
    })
  });
};

const Container = /*#__PURE__*/styled.div.withConfig({
  displayName: "AutoImageClipper__Container",
  componentId: "sc-6yh8fx-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;"]);

const CREATE_GROUP_STEP_KEYS = {
  INPUT_DETAILS: 1,
  GROUP_TYPE: 2,
  DEFINITE_CONDITION: 3,
  ADD_CRITERIA: 4
};
const CreateGroupModal = ({
  onClose,
  modalBackground: _modalBackground = MODAL_BACKGROUND_TYPE.OVERLAY,
  modalPositionType: _modalPositionType = MODAL_POSITION_TYPE.GLOBAL
}) => {
  const [activeComponent, setActiveComponent] = useState( // replace it with info one
  CREATE_GROUP_STEP_KEYS.INPUT_DETAILS);

  const handleNext = () => {
    setActiveComponent(activeComponent + 1);
  };

  const handlePrevious = () => {
    setActiveComponent(activeComponent - 1);
  };

  const criteriaStateManager = useCriteriaStateManager();
  useEffect(() => {
    // reset update rules
    if (activeComponent === 2) {
      criteriaStateManager.resetRules();
    } else if (activeComponent === 3) {
      criteriaStateManager.resetCriteriaIdx();
    }
  }, [activeComponent]);
  const [groupInputDetails, setGroupInputDetails] = useState({
    groupName: '',
    groupDescription: '',
    groupImage: ''
  });

  const renderComponent = () => {
    switch (activeComponent) {
      case CREATE_GROUP_STEP_KEYS.INPUT_DETAILS:
        return jsx(CreateGroupDetail, {
          criteriaStateManager: criteriaStateManager,
          handleNext: handleNext,
          onClose: onClose,
          groupInputDetails: groupInputDetails,
          setGroupInputDetails: setGroupInputDetails
        });

      case CREATE_GROUP_STEP_KEYS.GROUP_TYPE:
        return jsx(CreateGroupType, {
          criteriaStateManager: criteriaStateManager,
          groupInputDetails: groupInputDetails,
          handleNext: handleNext,
          onClose: onClose,
          handlePrevious: handlePrevious
        });

      case CREATE_GROUP_STEP_KEYS.DEFINITE_CONDITION:
        return jsx(DefineCondtion, {
          criteriaStateManager: criteriaStateManager,
          handleNext: handleNext,
          handlePrevious: handlePrevious,
          onClose: onClose
        });

      case CREATE_GROUP_STEP_KEYS.ADD_CRITERIA:
        return jsx(AddCriteria, {
          criteriaStateManager: criteriaStateManager,
          handlePrevious: handlePrevious,
          onClose: onClose
        });

      default:
        return jsx(CreateGroupDetail, {
          criteriaStateManager: criteriaStateManager,
          handlePrevious: handlePrevious,
          onClose: onClose,
          groupInputDetails: groupInputDetails,
          setGroupInputDetails: setGroupInputDetails
        });
    }
  };

  return jsxs(Modal, Object.assign({
    clickawayClose: onClose,
    modalBackground: _modalBackground,
    modalPositionType: _modalPositionType
  }, {
    children: [renderComponent(), " ", jsx(ToastContainer, {})]
  }));
};

const CreateGroupDetail = ({
  handleNext,
  onClose,
  groupInputDetails,
  setGroupInputDetails
}) => {
  useToast();
  const {
    groupName,
    groupDescription,
    groupImage
  } = groupInputDetails;
  const theme = useContext(ThemeContext);
  const [validationErrors, setValidationErrors] = useState({});
  const fileUploadInputRef = useRef(null);
  const isMobile = useMediaQuery(device.mobileL);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [imageSrc, setImageSrc] = useState();

  const handleChange = e => {
    if (!(e.target instanceof HTMLInputElement)) {
      return;
    }

    if (!e.target.files) {
      return;
    }

    if (e.target.files && e.target.files.length) {
      setIsImageUploaded(true);
      setGroupInputDetails({
        groupDescription,
        groupName,
        groupImage: ''
      });
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.onloadend = function () {
        setImageSrc(reader.result); // setGroupInputDetails({
        //   groupDescription,
        //   groupName,
        //   groupImage: reader.result as string,
        // });
      };
    }
  };

  const verifyAndHandelNext = () => {

    {
      // verify name
      if (groupName.trim().length === 0) {
        setValidationErrors({
          groupName: 'Group name cannot be empty'
        });
        return;
      } // verify description


      if (groupDescription.trim().length === 0) {
        setValidationErrors({
          groupDescription: 'Group Description is empty'
        });
        return;
      }
    }

    if (handleNext) {
      handleNext();
    }
  };

  const handleUpload = () => {
    if (fileUploadInputRef.current) {
      fileUploadInputRef.current.click();
    }
  }; //groupImage and desccription is optional


  return jsxs(Section, Object.assign({
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    overflow: 'hidden auto',
    justifyContent: 'start',
    width: !isMobile ? '400px' : '300px'
  }, {
    children: [jsx(ModalHeader, {
      title: "Create Group",
      handleClose: onClose
    }), jsxs(UploadContainer, Object.assign({
      onClick: handleUpload
    }, {
      children: [isImageUploaded ? groupImage ? jsx(UpdatedImageContainer, {
        children: jsx(Image$5, {
          src: groupImage,
          objectFit: "contain",
          alt: "group image",
          width: "100%",
          height: "100%"
        })
      }) : jsx(AutoImageClipper, {
        imageSrc: imageSrc,
        onImageCropped: croppedImage => setGroupInputDetails({
          groupDescription,
          groupName,
          groupImage: croppedImage
        }),
        width: undefined,
        height: undefined
      }) : jsx(ImageContainer, Object.assign({
        theme: theme
      }, {
        children: jsx(AiTwotoneCamera, {
          fontSize: 40,
          color: 'rgba(87, 93, 115, 1)'
        })
      })), jsx(FileInput, {
        type: "file",
        accept: "image/*",
        className: "hidden",
        ref: fileUploadInputRef,
        onChange: e => handleChange(e)
      })]
    })), jsxs(Section, Object.assign({
      gap: "10px",
      flexDirection: "column",
      alignItems: "start"
    }, {
      children: [jsx(TextInput, {
        labelName: "Group Name",
        charCount: 30,
        inputValue: groupName,
        onInputChange: e => setGroupInputDetails({
          groupDescription,
          groupName: e.target.value,
          groupImage
        }),
        error: !!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.groupName)
      }), !!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.groupName) && jsx(ErrorSpan, {
        children: validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.groupName
      })]
    })), jsxs(Section, Object.assign({
      gap: "10px",
      flexDirection: "column",
      alignItems: "start"
    }, {
      children: [jsx(TextArea, {
        labelName: "Group Description",
        charCount: 80,
        inputValue: groupDescription,
        onInputChange: e => setGroupInputDetails({
          groupDescription: e.target.value,
          groupName,
          groupImage
        }),
        error: !!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.groupDescription)
      }), !!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.groupDescription) && jsx(ErrorSpan, {
        children: validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.groupDescription
      })]
    })), jsx(Button, Object.assign({
      width: "197px",
      onClick: verifyAndHandelNext
    }, {
      children: "Next"
    }))]
  }));
}; //use the theme


const UploadContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "CreateGroupModal__UploadContainer",
  componentId: "sc-2039dd-0"
})(["width:fit-content;min-width:128px;min-height:128px;cursor:pointer;align-self:center;"]);
const ImageContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "CreateGroupModal__ImageContainer",
  componentId: "sc-2039dd-1"
})(["margin-top:10px;cursor:pointer;border-radius:32px;background:", ";width:128px;cursor:pointer;height:128px;max-height:128px;display:flex;align-items:center;justify-content:center;"], props => props.theme.backgroundColor.modalHoverBackground);
const UpdatedImageContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "CreateGroupModal__UpdatedImageContainer",
  componentId: "sc-2039dd-2"
})(["margin-top:10px;width:128px;cursor:pointer;height:128px;overflow:hidden;max-height:128px;border-radius:32px;"]);
const FileInput = /*#__PURE__*/styled.input.withConfig({
  displayName: "CreateGroupModal__FileInput",
  componentId: "sc-2039dd-3"
})(["display:none;"]);
const ErrorSpan = /*#__PURE__*/styled(Span$1).withConfig({
  displayName: "CreateGroupModal__ErrorSpan",
  componentId: "sc-2039dd-4"
})(["font-size:12px;font-weight:500;color:#ed5858;"]);

const SpaceComponentWrapper = ({
  children
}) => {
  const {
    account,
    env,
    acceptSpaceRequest,
    connectSpaceRequest,
    broadcastRaisedHand
  } = useSpaceData();
  useSpaceNotificationSocket({
    account,
    env,
    acceptSpaceRequest,
    connectSpaceRequest,
    broadcastRaisedHand
  });
  usePushSpaceSocket({
    account,
    env
  }); // eslint-disable-next-line react/jsx-no-useless-fragment

  return jsx(Fragment, {
    children: children
  });
};

var FeedTabs;

(function (FeedTabs) {
  FeedTabs["ForYou"] = "For You";
  FeedTabs["Popular"] = "Popular";
  FeedTabs["HostedByYou"] = "Hosted by you";
})(FeedTabs || (FeedTabs = {}));

const SpacesUIProvider = ({
  spaceUI,
  theme,
  children
}) => {
  var _a, _b, _c, _d, _e, _f, _g;

  const spacesObjectRef = useRef({});
  const [account, setAccount] = useState(walletToPCAIP10(spaceUI.account));
  const [signer, setSigner] = useState(spaceUI.signer);
  const [pgpPrivateKey, setPgpPrivateKey] = useState(spaceUI.pgpPrivateKey);
  const [env, setEnv] = useState(spaceUI.env);
  const [chainId, setChainId] = useState(spaceChainId(spaceUI.account, spaceUI.env));
  const [spaceWidgetId, setSpaceWidgetId] = useState('');
  const [selectedFeedTab, setSelectedFeedTab] = useState(FeedTabs['Popular']);
  const [speakerData, setSpeakerData] = useState({});
  const [trendingListData, setTrendingListData] = useState(null);
  const [spaceInfo, setSpaceInfo] = useState({});
  const [spaceObjectData, setSpaceObjectData] = useState(PushAPI.space.initSpaceData);
  const [raisedHandInfo, setRaisedHandInfo] = useState({});
  const [mySpaces, setMySpaces] = useState({
    apiData: [],
    currentPage: 1,
    lastPage: 2
  });
  const [popularSpaces, setPopularSpaces] = useState({
    apiData: [],
    currentPage: 1,
    lastPage: 2
  });
  const [spaceRequests, setSpaceRequests] = useState({
    apiData: [],
    currentPage: 1,
    lastPage: 2
  });
  const [pushSpaceSocket, setPushSpaceSocket] = useState(null);
  const [isPushSDKSocketConnected, setIsPushSDKSocketConnected] = useState(false);
  const isJoined = Boolean(((_c = (_b = (_a = spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.connectionData) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.broadcast) === null || _c === void 0 ? void 0 : _c.livepeerInfo) || (spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.spaceDescription));
  const livepeerClient = createReactClient({
    provider: studioProvider({
      apiKey: 'ac9d3e33-56c2-4a22-a328-a08a46fd9356'
    })
  }); // const isLive = isLiveSpace();

  const setSpaceInfoItem = (key, value) => {
    setSpaceInfo(prevState => Object.assign(Object.assign({}, prevState), {
      [key]: value
    }));
  };

  const setSpeakerDataItem = (key, value) => {
    setSpeakerData(prevState => Object.assign(Object.assign({}, prevState), {
      [key]: value
    }));
  };

  const initSpaceObject = spaceId => __awaiter(void 0, void 0, void 0, function* () {
    spacesObjectRef.current = new PushAPI.space.Space({
      signer,
      pgpPrivateKey,
      address: account,
      chainId: chainId,
      env,
      setSpaceData: setSpaceObjectData
    });
    yield spacesObjectRef.current.initialize({
      spaceId
    });
  });

  const acceptSpaceRequest = ({
    senderAddress,
    recipientAddress,
    chatId,
    signalData
  }) => __awaiter(void 0, void 0, void 0, function* () {
    var _h;

    console.log('INSIDE WRAPPER ACCEPT REQUEST', 'spacesObjectRef?.current', spacesObjectRef === null || spacesObjectRef === void 0 ? void 0 : spacesObjectRef.current);
    yield (_h = spacesObjectRef.current) === null || _h === void 0 ? void 0 : _h.acceptRequest({
      recipientAddress: senderAddress,
      senderAddress: recipientAddress,
      chatId,
      signalData
    });
  });

  const connectSpaceRequest = ({
    senderAddress,
    signalData
  }) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('INSIDE WRAPPER CONNECT', 'spacesObjectRef?.current', spacesObjectRef === null || spacesObjectRef === void 0 ? void 0 : spacesObjectRef.current);
    yield spacesObjectRef.current.connect({
      peerAddress: senderAddress,
      signalData
    });
  });

  const broadcastRaisedHand = receivedSpaceMetaData => __awaiter(void 0, void 0, void 0, function* () {
    yield spacesObjectRef.current.broadcastRaisedHand({
      promoteeAddress: pCAIP10ToWallet(receivedSpaceMetaData.senderAddress)
    });
    setRaisedHandInfo(prevMap => Object.assign(Object.assign({}, prevMap), {
      [receivedSpaceMetaData.senderAddress]: receivedSpaceMetaData
    }));
  });

  const getSpaceInfo = spaceId => {
    return spaceInfo[spaceId];
  };

  const setMySpacePaginationInfo = paginationInfo => {
    const {
      apiData,
      currentPage,
      lastPage
    } = paginationInfo;
    setMySpaces(prevState => {
      var _a;

      if (apiData) {
        const existingIds = new Set((_a = prevState.apiData) === null || _a === void 0 ? void 0 : _a.map(space => space.spaceId));
        const uniqueSpaces = apiData === null || apiData === void 0 ? void 0 : apiData.filter(space => !existingIds.has(space.spaceId));
        let updatedApiData = [];

        if (prevState.apiData) {
          updatedApiData = [...prevState.apiData, ...uniqueSpaces];
          updatedApiData.sort((a, b) => new Date(b.intentTimestamp).getTime() - new Date(a.intentTimestamp).getTime());
        } else {
          updatedApiData = uniqueSpaces;
        }

        return Object.assign(Object.assign({}, prevState), updatedApiData.length > 0 && {
          apiData: updatedApiData
        });
      }

      return Object.assign(Object.assign(Object.assign({}, prevState), currentPage && {
        currentPage
      }), lastPage && {
        lastPage
      });
    });
  };

  const setPopularSpacePaginationInfo = paginationInfo => {
    const {
      apiData,
      currentPage,
      lastPage
    } = paginationInfo;
    setPopularSpaces(prevState => {
      var _a;

      if (apiData) {
        const existingIds = new Set((_a = prevState.apiData) === null || _a === void 0 ? void 0 : _a.map(space => space.spaceId));
        const uniqueSpaces = apiData === null || apiData === void 0 ? void 0 : apiData.filter(space => !existingIds.has(space.spaceId));
        let updatedApiData = [];

        if (prevState.apiData) {
          updatedApiData = [...prevState.apiData, ...uniqueSpaces];
          updatedApiData.sort((a, b) => new Date(b.intentTimestamp).getTime() - new Date(a.intentTimestamp).getTime());
        } else {
          updatedApiData = uniqueSpaces;
        }

        return Object.assign(Object.assign({}, prevState), updatedApiData.length > 0 && {
          apiData: updatedApiData
        });
      }

      return Object.assign(Object.assign(Object.assign({}, prevState), currentPage && {
        currentPage
      }), lastPage && {
        lastPage
      });
    });
  };

  const setSpacesRequestPaginationInfo = paginationInfo => {
    const {
      apiData,
      currentPage,
      lastPage
    } = paginationInfo;
    setSpaceRequests(prevState => {
      var _a;

      if (apiData) {
        const existingIds = new Set((_a = prevState.apiData) === null || _a === void 0 ? void 0 : _a.map(space => space.spaceId));
        const uniqueSpaces = apiData === null || apiData === void 0 ? void 0 : apiData.filter(space => !existingIds.has(space.spaceId));
        let updatedApiData = [];

        if (prevState.apiData) {
          updatedApiData = [...prevState.apiData, ...uniqueSpaces];
          updatedApiData.sort((a, b) => new Date(b.intentTimestamp).getTime() - new Date(a.intentTimestamp).getTime());
        } else {
          updatedApiData = uniqueSpaces;
        }

        return Object.assign(Object.assign({}, prevState), updatedApiData.length > 0 && {
          apiData: updatedApiData
        });
      }

      return Object.assign(Object.assign(Object.assign({}, prevState), currentPage && {
        currentPage
      }), lastPage && {
        lastPage
      });
    });
  };

  const isSpeaker = Boolean( // for the case when space isnt live
  ((_d = spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.members) === null || _d === void 0 ? void 0 : _d.find(member => {
    if (isAccountsEqual(account, spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.spaceCreator)) return false;
    const address = member.wallet;
    return isAccountsEqual(account, address) && member.isSpeaker;
  })) || ((_e = spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.pendingMembers) === null || _e === void 0 ? void 0 : _e.find(member => {
    const address = member.wallet;
    return isAccountsEqual(account, address) && member.isSpeaker;
  })) || ( // for the case when the space is live
  (_g = (_f = spaceObjectData === null || spaceObjectData === void 0 ? void 0 : spaceObjectData.liveSpaceData) === null || _f === void 0 ? void 0 : _f.speakers) === null || _g === void 0 ? void 0 : _g.find(member => {
    const address = member.address;
    return address === pCAIP10ToWallet(account);
  })));
  const isListener = spaceObjectData.spaceId ? !isSpeaker : false;
  const customSearch = undefined;
  const value = {
    account,
    setAccount,
    signer,
    setSigner,
    pgpPrivateKey,
    setPgpPrivateKey,
    env,
    setEnv,
    chainId,
    setChainId,
    trendingListData,
    setTrendingListData,
    spaceInfo,
    setSpaceInfo: setSpaceInfoItem,
    getSpaceInfo,
    spaceWidgetId,
    setSpaceWidgetId,
    selectedFeedTab,
    setSelectedFeedTab,
    mySpaces,
    setMySpaces: setMySpacePaginationInfo,
    popularSpaces,
    setPopularSpaces: setPopularSpacePaginationInfo,
    spaceRequests,
    setSpaceRequests: setSpacesRequestPaginationInfo,
    pushSpaceSocket,
    setPushSpaceSocket,
    isPushSDKSocketConnected,
    setIsPushSDKSocketConnected,
    spaceObjectData,
    setSpaceObjectData,
    initSpaceObject,
    spacesObjectRef,
    isJoined,
    isSpeaker,
    isListener,
    speakerData,
    setSpeakerData: setSpeakerDataItem,
    acceptSpaceRequest,
    connectSpaceRequest,
    broadcastRaisedHand,
    customSearch,
    raisedHandInfo
  };

  const resetStates = () => {
    setSpeakerData({});
    setSpaceObjectData(PushAPI.space.initSpaceData);
    setSpaceRequests({
      apiData: [],
      currentPage: 1,
      lastPage: 2
    });
    setMySpaces({
      apiData: [],
      currentPage: 1,
      lastPage: 2
    });
  };

  useEffect(() => {
    resetStates();
    setAccount(walletToPCAIP10(spaceUI.account));
    setEnv(spaceUI.env); // reset

    setChainId(spaceChainId(spaceUI.account, spaceUI.env)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spaceUI.account, spaceUI.env]);
  useEffect(() => {
    setSigner(spaceUI.signer);
    setPgpPrivateKey(spaceUI.pgpPrivateKey);
  }, [spaceUI.pgpPrivateKey, spaceUI.signer]);
  const PROVIDER_THEME = Object.assign({}, lightTheme, theme);
  spaceUI.init();
  return jsx(LivepeerConfig, Object.assign({
    client: livepeerClient
  }, {
    children: jsx(ThemeContext$1.Provider, Object.assign({
      value: PROVIDER_THEME
    }, {
      children: jsx(SpaceDataContext.Provider, Object.assign({
        value: value
      }, {
        children: jsx(SpaceComponentWrapper, {
          children: children
        })
      }))
    }))
  }));
};

const ChatUIProvider = ({
  children,
  account: _account = null,
  theme,
  pgpPrivateKey: _pgpPrivateKey = null,
  signer: _signer = undefined,
  env: _env = Constants.ENV.PROD
}) => {
  const [accountVal, setAccountVal] = useState(pCAIP10ToWallet(_account));
  const [pushChatSocket, setPushChatSocket] = useState(null);
  const [signerVal, setSignerVal] = useState(_signer);
  const [pgpPrivateKeyVal, setPgpPrivateKeyVal] = useState(_pgpPrivateKey);
  const [envVal, setEnvVal] = useState(_env);
  const {
    fetchChatProfile
  } = useGetChatProfile();
  const [connectedProfile, setConnectedProfile] = useState(undefined);
  const [isPushChatSocketConnected, setIsPushChatSocketConnected] = useState(false);
  const {
    createChatProfile
  } = useCreateChatProfile();
  const {
    decryptPGPKey
  } = useDecryptPGPKey();
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      resetStates();
      setEnvVal(_env);

      if (_signer) {
        if (!_account) {
          const address = yield getAddressFromSigner(_signer);
          setAccountVal(address);
        } else {
          setAccountVal(_account);
        }
      }

      setSignerVal(_signer);
      setPgpPrivateKeyVal(_pgpPrivateKey);
    }))();
  }, [_env, _account, _signer, _pgpPrivateKey]);
  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      if (accountVal && signerVal) {
        if (!pgpPrivateKeyVal) yield handleUserCreation();
      }
    }))();
  }, [accountVal, signerVal]);

  const handleUserCreation = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!accountVal && !envVal) return;

    try {
      let user = yield fetchChatProfile({
        profileId: accountVal,
        env: envVal
      });

      if (!user) {
        if (!signerVal) return;
        user = yield createChatProfile({
          signer: signerVal,
          env: envVal
        });
      }

      if ((user === null || user === void 0 ? void 0 : user.encryptedPrivateKey) && !_pgpPrivateKey) {
        const decryptedPgpKey = yield decryptPGPKey({
          encryptedPrivateKey: user.encryptedPrivateKey,
          account: accountVal,
          signer: signerVal,
          env: envVal
        });
        if (decryptedPgpKey) setPgpPrivateKeyVal(decryptedPgpKey);
      }
    } catch (e) {
      console.log(e);
    }
  });

  const resetStates = () => {
    setPushChatSocket(null);
    setIsPushChatSocketConnected(false);
  };

  useEffect(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      let user;

      if (_account) {
        user = yield fetchChatProfile({
          profileId: _account,
          env: _env
        });
        if (user) setConnectedProfile(user);
      }
    }))();
  }, [_account, _env, _pgpPrivateKey]);
  const value = {
    account: accountVal,
    signer: signerVal,
    setSigner: setSignerVal,
    setAccount: setAccountVal,
    pgpPrivateKey: pgpPrivateKeyVal,
    setPgpPrivateKey: setPgpPrivateKeyVal,
    env: envVal,
    setEnv: setEnvVal,
    pushChatSocket,
    setPushChatSocket,
    isPushChatSocketConnected,
    setIsPushChatSocketConnected,
    connectedProfile,
    setConnectedProfile
  };
  const PROVIDER_THEME = Object.assign({}, lightChatTheme, theme);
  return jsx(ThemeContext.Provider, Object.assign({
    value: PROVIDER_THEME
  }, {
    children: jsx(ChatDataContext.Provider, Object.assign({
      value: value
    }, {
      children: children
    }))
  }));
};

export { ALCHEMY_API_KEY, Anchor, BLOCKCHAIN_NETWORK, BLOCKNATIVE_PROJECT_ID, Button$8 as Button, CHAT_THEME_OPTIONS, Chat, ChatAndNotificationWidget, ChatProfile, ChatUIProvider, ChatViewComponent as ChatView, ChatViewBubble, ChatViewComponent, ChatViewList, Constants, Container$m as Container, CoreContractChainId, CreateGroupModal, ENV, FILE_ICON, FeedTabs, Heading$1 as Heading, Image$5 as Image, InfuraAPIKey, Item$1 as Item, LIVEKIT_SERVER_URL, LIVEKIT_SERVER_WEBSOCKET_URL, LIVEKIT_TOKEN_GENERATOR_SERVER_URL, LOCAL_STORAGE_KEYS, MODAL_BACKGROUND_TYPE, MODAL_POSITION_TYPE, MessageInput, NETWORK_DETAILS, NotificationItem, PUBLIC_GOOGLE_TOKEN, PUSH_SUB_TABS, PUSH_TABS, ParseMarkdownText, ProfilePicture, PushSubTabTitle, SIDEBAR_PLACEHOLDER_KEYS, SOCKET_TYPE, SpacesUI, SpacesUIProvider, SubscribedModal, Chat as SupportChat, Text, allowedNetworks, chatLimit, darkChatTheme, device, lightChatTheme, lightTheme$2 as lightTheme, baseTheme as notificationBaseTheme, darkTheme as notificationDarkTheme, lightTheme$1 as notificationLightTheme, notificationLimit, requestLimit$1 as requestLimit, usePushChatSocket };
