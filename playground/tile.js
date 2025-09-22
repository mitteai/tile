var Tile = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/.deno/react@18.3.1/node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/.deno/react@18.3.1/node_modules/react/cjs/react.development.js"(exports, module) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          }
          var ReactVersion = "18.3.1";
          var REACT_ELEMENT_TYPE = Symbol.for("react.element");
          var REACT_PORTAL_TYPE = Symbol.for("react.portal");
          var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
          var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
          var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
          var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
          var REACT_CONTEXT_TYPE = Symbol.for("react.context");
          var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
          var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
          var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
          var REACT_MEMO_TYPE = Symbol.for("react.memo");
          var REACT_LAZY_TYPE = Symbol.for("react.lazy");
          var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
          var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactCurrentDispatcher = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactCurrentBatchConfig = {
            transition: null
          };
          var ReactCurrentActQueue = {
            current: null,
            // Used to reproduce behavior of `batchedUpdates` in legacy mode.
            isBatchingLegacy: false,
            didScheduleLegacyUpdate: false
          };
          var ReactCurrentOwner = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactDebugCurrentFrame = {};
          var currentExtraStackFrame = null;
          function setExtraStackFrame(stack) {
            {
              currentExtraStackFrame = stack;
            }
          }
          {
            ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
              {
                currentExtraStackFrame = stack;
              }
            };
            ReactDebugCurrentFrame.getCurrentStack = null;
            ReactDebugCurrentFrame.getStackAddendum = function() {
              var stack = "";
              if (currentExtraStackFrame) {
                stack += currentExtraStackFrame;
              }
              var impl = ReactDebugCurrentFrame.getCurrentStack;
              if (impl) {
                stack += impl() || "";
              }
              return stack;
            };
          }
          var enableScopeAPI = false;
          var enableCacheElement = false;
          var enableTransitionTracing = false;
          var enableLegacyHidden = false;
          var enableDebugTracing = false;
          var ReactSharedInternals = {
            ReactCurrentDispatcher,
            ReactCurrentBatchConfig,
            ReactCurrentOwner
          };
          {
            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
            ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
          }
          function warn(format) {
            {
              {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
                }
                printWarning("warn", format, args);
              }
            }
          }
          function error(format) {
            {
              {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                printWarning("error", format, args);
              }
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return String(item);
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var didWarnStateUpdateForUnmountedComponent = {};
          function warnNoop(publicInstance, callerName) {
            {
              var _constructor = publicInstance.constructor;
              var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
              var warningKey = componentName + "." + callerName;
              if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
              }
              error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
              didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
          }
          var ReactNoopUpdateQueue = {
            /**
             * Checks whether or not this composite component is mounted.
             * @param {ReactClass} publicInstance The instance we want to test.
             * @return {boolean} True if mounted, false otherwise.
             * @protected
             * @final
             */
            isMounted: function(publicInstance) {
              return false;
            },
            /**
             * Forces an update. This should only be invoked when it is known with
             * certainty that we are **not** in a DOM transaction.
             *
             * You may want to call this when you know that some deeper aspect of the
             * component's state has changed but `setState` was not called.
             *
             * This will not invoke `shouldComponentUpdate`, but it will invoke
             * `componentWillUpdate` and `componentDidUpdate`.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueForceUpdate: function(publicInstance, callback, callerName) {
              warnNoop(publicInstance, "forceUpdate");
            },
            /**
             * Replaces all of the state. Always use this or `setState` to mutate state.
             * You should treat `this.state` as immutable.
             *
             * There is no guarantee that `this.state` will be immediately updated, so
             * accessing `this.state` after calling this method may return the old value.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} completeState Next state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
              warnNoop(publicInstance, "replaceState");
            },
            /**
             * Sets a subset of the state. This only exists because _pendingState is
             * internal. This provides a merging strategy that is not available to deep
             * properties which is confusing. TODO: Expose pendingState or don't use it
             * during the merge.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} partialState Next partial state to be merged with state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} Name of the calling function in the public API.
             * @internal
             */
            enqueueSetState: function(publicInstance, partialState, callback, callerName) {
              warnNoop(publicInstance, "setState");
            }
          };
          var assign = Object.assign;
          var emptyObject = {};
          {
            Object.freeze(emptyObject);
          }
          function Component(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          Component.prototype.isReactComponent = {};
          Component.prototype.setState = function(partialState, callback) {
            if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
              throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
            this.updater.enqueueSetState(this, partialState, callback, "setState");
          };
          Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
          };
          {
            var deprecatedAPIs = {
              isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
              replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
            };
            var defineDeprecationWarning = function(methodName, info) {
              Object.defineProperty(Component.prototype, methodName, {
                get: function() {
                  warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                  return void 0;
                }
              });
            };
            for (var fnName in deprecatedAPIs) {
              if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
              }
            }
          }
          function ComponentDummy() {
          }
          ComponentDummy.prototype = Component.prototype;
          function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
          pureComponentPrototype.constructor = PureComponent;
          assign(pureComponentPrototype, Component.prototype);
          pureComponentPrototype.isPureReactComponent = true;
          function createRef() {
            var refObject = {
              current: null
            };
            {
              Object.seal(refObject);
            }
            return refObject;
          }
          var isArrayImpl = Array.isArray;
          function isArray(a2) {
            return isArrayImpl(a2);
          }
          function typeName(value) {
            {
              var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
              var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
              return type;
            }
          }
          function willCoercionThrow(value) {
            {
              try {
                testStringCoercion(value);
                return false;
              } catch (e2) {
                return true;
              }
            }
          }
          function testStringCoercion(value) {
            return "" + value;
          }
          function checkKeyStringCoercion(value) {
            {
              if (willCoercionThrow(value)) {
                error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                return testStringCoercion(value);
              }
            }
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
              return displayName;
            }
            var functionName = innerType.displayName || innerType.name || "";
            return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
          }
          function getContextName(type) {
            return type.displayName || "Context";
          }
          function getComponentNameFromType(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  var outerName = type.displayName || null;
                  if (outerName !== null) {
                    return outerName;
                  }
                  return getComponentNameFromType(type.type) || "Memo";
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init2 = lazyComponent._init;
                  try {
                    return getComponentNameFromType(init2(payload));
                  } catch (x2) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function() {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
          function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function() {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
          function warnIfStringRefCannotBeAutoConverted(config) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          var ReactElement = function(type, key, ref, self, source, owner, props) {
            var element = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: REACT_ELEMENT_TYPE,
              // Built-in properties that belong on the element
              type,
              key,
              ref,
              props,
              // Record the component responsible for creating this element.
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function createElement(type, config, children) {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            var self = null;
            var source = null;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                {
                  warnIfStringRefCannotBeAutoConverted(config);
                }
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              self = config.__self === void 0 ? null : config.__self;
              source = config.__source === void 0 ? null : config.__source;
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i2 = 0; i2 < childrenLength; i2++) {
                childArray[i2] = arguments[i2 + 2];
              }
              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props.children = childArray;
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            {
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
          function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
          }
          function cloneElement(element, config, children) {
            if (element === null || element === void 0) {
              throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
            var propName;
            var props = assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                owner = ReactCurrentOwner.current;
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              var defaultProps;
              if (element.type && element.type.defaultProps) {
                defaultProps = element.type.defaultProps;
              }
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  if (config[propName] === void 0 && defaultProps !== void 0) {
                    props[propName] = defaultProps[propName];
                  } else {
                    props[propName] = config[propName];
                  }
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i2 = 0; i2 < childrenLength; i2++) {
                childArray[i2] = arguments[i2 + 2];
              }
              props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self, source, owner, props);
          }
          function isValidElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          var SEPARATOR = ".";
          var SUBSEPARATOR = ":";
          function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
              "=": "=0",
              ":": "=2"
            };
            var escapedString = key.replace(escapeRegex, function(match) {
              return escaperLookup[match];
            });
            return "$" + escapedString;
          }
          var didWarnAboutMaps = false;
          var userProvidedKeyEscapeRegex = /\/+/g;
          function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, "$&/");
          }
          function getElementKey(element, index) {
            if (typeof element === "object" && element !== null && element.key != null) {
              {
                checkKeyStringCoercion(element.key);
              }
              return escape("" + element.key);
            }
            return index.toString(36);
          }
          function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
            var type = typeof children;
            if (type === "undefined" || type === "boolean") {
              children = null;
            }
            var invokeCallback = false;
            if (children === null) {
              invokeCallback = true;
            } else {
              switch (type) {
                case "string":
                case "number":
                  invokeCallback = true;
                  break;
                case "object":
                  switch (children.$$typeof) {
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                      invokeCallback = true;
                  }
              }
            }
            if (invokeCallback) {
              var _child = children;
              var mappedChild = callback(_child);
              var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
              if (isArray(mappedChild)) {
                var escapedChildKey = "";
                if (childKey != null) {
                  escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                }
                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c2) {
                  return c2;
                });
              } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) {
                  {
                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                      checkKeyStringCoercion(mappedChild.key);
                    }
                  }
                  mappedChild = cloneAndReplaceKey(
                    mappedChild,
                    // Keep both the (mapped) and old keys if they differ, just as
                    // traverseAllChildren used to do for objects as children
                    escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                    (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                      // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                      // eslint-disable-next-line react-internal/safe-string-coercion
                      escapeUserProvidedKey("" + mappedChild.key) + "/"
                    ) : "") + childKey
                  );
                }
                array.push(mappedChild);
              }
              return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (isArray(children)) {
              for (var i2 = 0; i2 < children.length; i2++) {
                child = children[i2];
                nextName = nextNamePrefix + getElementKey(child, i2);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else {
              var iteratorFn = getIteratorFn(children);
              if (typeof iteratorFn === "function") {
                var iterableChildren = children;
                {
                  if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) {
                      warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    }
                    didWarnAboutMaps = true;
                  }
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while (!(step = iterator.next()).done) {
                  child = step.value;
                  nextName = nextNamePrefix + getElementKey(child, ii++);
                  subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
              } else if (type === "object") {
                var childrenString = String(children);
                throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
              }
            }
            return subtreeCount;
          }
          function mapChildren(children, func, context) {
            if (children == null) {
              return children;
            }
            var result = [];
            var count = 0;
            mapIntoArray(children, result, "", "", function(child) {
              return func.call(context, child, count++);
            });
            return result;
          }
          function countChildren(children) {
            var n2 = 0;
            mapChildren(children, function() {
              n2++;
            });
            return n2;
          }
          function forEachChildren(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
              forEachFunc.apply(this, arguments);
            }, forEachContext);
          }
          function toArray(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          }
          function onlyChild(children) {
            if (!isValidElement(children)) {
              throw new Error("React.Children.only expected to receive a single React element child.");
            }
            return children;
          }
          function createContext(defaultValue) {
            var context = {
              $$typeof: REACT_CONTEXT_TYPE,
              // As a workaround to support multiple concurrent renderers, we categorize
              // some renderers as primary and others as secondary. We only expect
              // there to be two concurrent renderers at most: React Native (primary) and
              // Fabric (secondary); React DOM (primary) and React ART (secondary).
              // Secondary renderers store their context values on separate fields.
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              // Used to track how many concurrent renderers this context currently
              // supports within in a single renderer. Such as parallel server rendering.
              _threadCount: 0,
              // These are circular
              Provider: null,
              Consumer: null,
              // Add these to use same hidden class in VM as ServerContext
              _defaultValue: null,
              _globalName: null
            };
            context.Provider = {
              $$typeof: REACT_PROVIDER_TYPE,
              _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            var hasWarnedAboutDisplayNameOnConsumer = false;
            {
              var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context
              };
              Object.defineProperties(Consumer, {
                Provider: {
                  get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                      hasWarnedAboutUsingConsumerProvider = true;
                      error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                  },
                  set: function(_Provider) {
                    context.Provider = _Provider;
                  }
                },
                _currentValue: {
                  get: function() {
                    return context._currentValue;
                  },
                  set: function(_currentValue) {
                    context._currentValue = _currentValue;
                  }
                },
                _currentValue2: {
                  get: function() {
                    return context._currentValue2;
                  },
                  set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                  }
                },
                _threadCount: {
                  get: function() {
                    return context._threadCount;
                  },
                  set: function(_threadCount) {
                    context._threadCount = _threadCount;
                  }
                },
                Consumer: {
                  get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                      hasWarnedAboutUsingNestedContextConsumers = true;
                      error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                  }
                },
                displayName: {
                  get: function() {
                    return context.displayName;
                  },
                  set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                      warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                      hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                  }
                }
              });
              context.Consumer = Consumer;
            }
            {
              context._currentRenderer = null;
              context._currentRenderer2 = null;
            }
            return context;
          }
          var Uninitialized = -1;
          var Pending = 0;
          var Resolved = 1;
          var Rejected = 2;
          function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
              var ctor = payload._result;
              var thenable = ctor();
              thenable.then(function(moduleObject2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var resolved = payload;
                  resolved._status = Resolved;
                  resolved._result = moduleObject2;
                }
              }, function(error2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var rejected = payload;
                  rejected._status = Rejected;
                  rejected._result = error2;
                }
              });
              if (payload._status === Uninitialized) {
                var pending = payload;
                pending._status = Pending;
                pending._result = thenable;
              }
            }
            if (payload._status === Resolved) {
              var moduleObject = payload._result;
              {
                if (moduleObject === void 0) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
                }
              }
              {
                if (!("default" in moduleObject)) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                }
              }
              return moduleObject.default;
            } else {
              throw payload._result;
            }
          }
          function lazy(ctor) {
            var payload = {
              // We use these fields to store the result.
              _status: Uninitialized,
              _result: ctor
            };
            var lazyType = {
              $$typeof: REACT_LAZY_TYPE,
              _payload: payload,
              _init: lazyInitializer
            };
            {
              var defaultProps;
              var propTypes;
              Object.defineProperties(lazyType, {
                defaultProps: {
                  configurable: true,
                  get: function() {
                    return defaultProps;
                  },
                  set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps;
                    Object.defineProperty(lazyType, "defaultProps", {
                      enumerable: true
                    });
                  }
                },
                propTypes: {
                  configurable: true,
                  get: function() {
                    return propTypes;
                  },
                  set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes;
                    Object.defineProperty(lazyType, "propTypes", {
                      enumerable: true
                    });
                  }
                }
              });
            }
            return lazyType;
          }
          function forwardRef(render) {
            {
              if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
              } else if (typeof render !== "function") {
                error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
              } else {
                if (render.length !== 0 && render.length !== 2) {
                  error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                }
              }
              if (render != null) {
                if (render.defaultProps != null || render.propTypes != null) {
                  error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                }
              }
            }
            var elementType = {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!render.name && !render.displayName) {
                    render.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          var REACT_MODULE_REFERENCE;
          {
            REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
          }
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
              // types supported by any Flight configuration anywhere since
              // we don't know which Flight build this will end up being used
              // with.
              type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                return true;
              }
            }
            return false;
          }
          function memo(type, compare) {
            {
              if (!isValidElementType(type)) {
                error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
              }
            }
            var elementType = {
              $$typeof: REACT_MEMO_TYPE,
              type,
              compare: compare === void 0 ? null : compare
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!type.name && !type.displayName) {
                    type.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;
            {
              if (dispatcher === null) {
                error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
              }
            }
            return dispatcher;
          }
          function useContext(Context) {
            var dispatcher = resolveDispatcher();
            {
              if (Context._context !== void 0) {
                var realContext = Context._context;
                if (realContext.Consumer === Context) {
                  error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                } else if (realContext.Provider === Context) {
                  error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                }
              }
            }
            return dispatcher.useContext(Context);
          }
          function useState(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
          }
          function useReducer(reducer, initialArg, init2) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init2);
          }
          function useRef(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
          }
          function useEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create, deps);
          }
          function useInsertionEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useInsertionEffect(create, deps);
          }
          function useLayoutEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create, deps);
          }
          function useCallback(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }
          function useMemo(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
          }
          function useImperativeHandle(ref, create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create, deps);
          }
          function useDebugValue(value, formatterFn) {
            {
              var dispatcher = resolveDispatcher();
              return dispatcher.useDebugValue(value, formatterFn);
            }
          }
          function useTransition() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useTransition();
          }
          function useDeferredValue(value) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDeferredValue(value);
          }
          function useId() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useId();
          }
          function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
          }
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: assign({}, props, {
                    value: prevLog
                  }),
                  info: assign({}, props, {
                    value: prevInfo
                  }),
                  warn: assign({}, props, {
                    value: prevWarn
                  }),
                  error: assign({}, props, {
                    value: prevError
                  }),
                  group: assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === void 0) {
                try {
                  throw Error();
                } catch (x2) {
                  var match = x2.stack.trim().match(/\n( *(at )?)/);
                  prefix = match && match[1] || "";
                }
              }
              return "\n" + prefix + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x2) {
                    control = x2;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x2) {
                    control = x2;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x2) {
                  control = x2;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s2 = sampleLines.length - 1;
                var c2 = controlLines.length - 1;
                while (s2 >= 1 && c2 >= 0 && sampleLines[s2] !== controlLines[c2]) {
                  c2--;
                }
                for (; s2 >= 1 && c2 >= 0; s2--, c2--) {
                  if (sampleLines[s2] !== controlLines[c2]) {
                    if (s2 !== 1 || c2 !== 1) {
                      do {
                        s2--;
                        c2--;
                        if (c2 < 0 || sampleLines[s2] !== controlLines[c2]) {
                          var _frame = "\n" + sampleLines[s2].replace(" at new ", " at ");
                          if (fn.displayName && _frame.includes("<anonymous>")) {
                            _frame = _frame.replace("<anonymous>", fn.displayName);
                          }
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s2 >= 1 && c2 >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher$1.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component2) {
            var prototype = Component2.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init2 = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init2(payload), source, ownerFn);
                  } catch (x2) {
                  }
                }
              }
            }
            return "";
          }
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values, location2, componentName, element) {
            {
              var has = Function.call.bind(hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location2 + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location2, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location2, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location2, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                setExtraStackFrame(stack);
              } else {
                setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
              var name = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
          function getSourceInfoErrorAddendum(source) {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
          function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== void 0) {
              return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return "";
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
          function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            {
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node, parentType) {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i2 = 0; i2 < node.length; i2++) {
                var child = node[i2];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentNameFromType(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentNameFromType(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i2 = 0; i2 < keys.length; i2++) {
                var key = keys[i2];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendumForProps(props);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              {
                error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
            }
            var element = createElement.apply(this, arguments);
            if (element == null) {
              return element;
            }
            if (validType) {
              for (var i2 = 2; i2 < arguments.length; i2++) {
                validateChildKeys(arguments[i2], type);
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
          var didWarnAboutDeprecatedCreateFactory = false;
          function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
              if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
              }
              Object.defineProperty(validatedFactory, "type", {
                enumerable: false,
                get: function() {
                  warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                  Object.defineProperty(this, "type", {
                    value: type
                  });
                  return type;
                }
              });
            }
            return validatedFactory;
          }
          function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement.apply(this, arguments);
            for (var i2 = 2; i2 < arguments.length; i2++) {
              validateChildKeys(arguments[i2], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
          }
          function startTransition(scope, options) {
            var prevTransition = ReactCurrentBatchConfig.transition;
            ReactCurrentBatchConfig.transition = {};
            var currentTransition = ReactCurrentBatchConfig.transition;
            {
              ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
            }
            try {
              scope();
            } finally {
              ReactCurrentBatchConfig.transition = prevTransition;
              {
                if (prevTransition === null && currentTransition._updatedFibers) {
                  var updatedFibersCount = currentTransition._updatedFibers.size;
                  if (updatedFibersCount > 10) {
                    warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                  }
                  currentTransition._updatedFibers.clear();
                }
              }
            }
          }
          var didWarnAboutMessageChannel = false;
          var enqueueTaskImpl = null;
          function enqueueTask(task) {
            if (enqueueTaskImpl === null) {
              try {
                var requireString = ("require" + Math.random()).slice(0, 7);
                var nodeRequire = module && module[requireString];
                enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
              } catch (_err) {
                enqueueTaskImpl = function(callback) {
                  {
                    if (didWarnAboutMessageChannel === false) {
                      didWarnAboutMessageChannel = true;
                      if (typeof MessageChannel === "undefined") {
                        error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                      }
                    }
                  }
                  var channel = new MessageChannel();
                  channel.port1.onmessage = callback;
                  channel.port2.postMessage(void 0);
                };
              }
            }
            return enqueueTaskImpl(task);
          }
          var actScopeDepth = 0;
          var didWarnNoAwaitAct = false;
          function act(callback) {
            {
              var prevActScopeDepth = actScopeDepth;
              actScopeDepth++;
              if (ReactCurrentActQueue.current === null) {
                ReactCurrentActQueue.current = [];
              }
              var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
              var result;
              try {
                ReactCurrentActQueue.isBatchingLegacy = true;
                result = callback();
                if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                  var queue = ReactCurrentActQueue.current;
                  if (queue !== null) {
                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                    flushActQueue(queue);
                  }
                }
              } catch (error2) {
                popActScope(prevActScopeDepth);
                throw error2;
              } finally {
                ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
              }
              if (result !== null && typeof result === "object" && typeof result.then === "function") {
                var thenableResult = result;
                var wasAwaited = false;
                var thenable = {
                  then: function(resolve, reject) {
                    wasAwaited = true;
                    thenableResult.then(function(returnValue2) {
                      popActScope(prevActScopeDepth);
                      if (actScopeDepth === 0) {
                        recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                      } else {
                        resolve(returnValue2);
                      }
                    }, function(error2) {
                      popActScope(prevActScopeDepth);
                      reject(error2);
                    });
                  }
                };
                {
                  if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                    Promise.resolve().then(function() {
                    }).then(function() {
                      if (!wasAwaited) {
                        didWarnNoAwaitAct = true;
                        error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                      }
                    });
                  }
                }
                return thenable;
              } else {
                var returnValue = result;
                popActScope(prevActScopeDepth);
                if (actScopeDepth === 0) {
                  var _queue = ReactCurrentActQueue.current;
                  if (_queue !== null) {
                    flushActQueue(_queue);
                    ReactCurrentActQueue.current = null;
                  }
                  var _thenable = {
                    then: function(resolve, reject) {
                      if (ReactCurrentActQueue.current === null) {
                        ReactCurrentActQueue.current = [];
                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                      } else {
                        resolve(returnValue);
                      }
                    }
                  };
                  return _thenable;
                } else {
                  var _thenable2 = {
                    then: function(resolve, reject) {
                      resolve(returnValue);
                    }
                  };
                  return _thenable2;
                }
              }
            }
          }
          function popActScope(prevActScopeDepth) {
            {
              if (prevActScopeDepth !== actScopeDepth - 1) {
                error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
              }
              actScopeDepth = prevActScopeDepth;
            }
          }
          function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
            {
              var queue = ReactCurrentActQueue.current;
              if (queue !== null) {
                try {
                  flushActQueue(queue);
                  enqueueTask(function() {
                    if (queue.length === 0) {
                      ReactCurrentActQueue.current = null;
                      resolve(returnValue);
                    } else {
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    }
                  });
                } catch (error2) {
                  reject(error2);
                }
              } else {
                resolve(returnValue);
              }
            }
          }
          var isFlushing = false;
          function flushActQueue(queue) {
            {
              if (!isFlushing) {
                isFlushing = true;
                var i2 = 0;
                try {
                  for (; i2 < queue.length; i2++) {
                    var callback = queue[i2];
                    do {
                      callback = callback(true);
                    } while (callback !== null);
                  }
                  queue.length = 0;
                } catch (error2) {
                  queue = queue.slice(i2 + 1);
                  throw error2;
                } finally {
                  isFlushing = false;
                }
              }
            }
          }
          var createElement$1 = createElementWithValidation;
          var cloneElement$1 = cloneElementWithValidation;
          var createFactory = createFactoryWithValidation;
          var Children = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray,
            only: onlyChild
          };
          exports.Children = Children;
          exports.Component = Component;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.Profiler = REACT_PROFILER_TYPE;
          exports.PureComponent = PureComponent;
          exports.StrictMode = REACT_STRICT_MODE_TYPE;
          exports.Suspense = REACT_SUSPENSE_TYPE;
          exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
          exports.act = act;
          exports.cloneElement = cloneElement$1;
          exports.createContext = createContext;
          exports.createElement = createElement$1;
          exports.createFactory = createFactory;
          exports.createRef = createRef;
          exports.forwardRef = forwardRef;
          exports.isValidElement = isValidElement;
          exports.lazy = lazy;
          exports.memo = memo;
          exports.startTransition = startTransition;
          exports.unstable_act = act;
          exports.useCallback = useCallback;
          exports.useContext = useContext;
          exports.useDebugValue = useDebugValue;
          exports.useDeferredValue = useDeferredValue;
          exports.useEffect = useEffect;
          exports.useId = useId;
          exports.useImperativeHandle = useImperativeHandle;
          exports.useInsertionEffect = useInsertionEffect;
          exports.useLayoutEffect = useLayoutEffect;
          exports.useMemo = useMemo;
          exports.useReducer = useReducer;
          exports.useRef = useRef;
          exports.useState = useState;
          exports.useSyncExternalStore = useSyncExternalStore;
          exports.useTransition = useTransition;
          exports.version = ReactVersion;
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
          }
        })();
      }
    }
  });

  // node_modules/.deno/react@18.3.1/node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/.deno/react@18.3.1/node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // lib/index.ts
  var lib_exports = {};
  __export(lib_exports, {
    Cursor: () => Cursor,
    Frame: () => Frame,
    Grid: () => Grid,
    HStack: () => HStack,
    ScrollView: () => ScrollView,
    Spacer: () => Spacer,
    VStack: () => VStack,
    View: () => View,
    init: () => init,
    style: () => style
  });

  // node_modules/.deno/@stitches+react@1.2.8/node_modules/@stitches/react/dist/index.mjs
  var import_react = __toESM(require_react(), 1);
  var e = "colors";
  var t = "sizes";
  var r = "space";
  var n = { gap: r, gridGap: r, columnGap: r, gridColumnGap: r, rowGap: r, gridRowGap: r, inset: r, insetBlock: r, insetBlockEnd: r, insetBlockStart: r, insetInline: r, insetInlineEnd: r, insetInlineStart: r, margin: r, marginTop: r, marginRight: r, marginBottom: r, marginLeft: r, marginBlock: r, marginBlockEnd: r, marginBlockStart: r, marginInline: r, marginInlineEnd: r, marginInlineStart: r, padding: r, paddingTop: r, paddingRight: r, paddingBottom: r, paddingLeft: r, paddingBlock: r, paddingBlockEnd: r, paddingBlockStart: r, paddingInline: r, paddingInlineEnd: r, paddingInlineStart: r, top: r, right: r, bottom: r, left: r, scrollMargin: r, scrollMarginTop: r, scrollMarginRight: r, scrollMarginBottom: r, scrollMarginLeft: r, scrollMarginX: r, scrollMarginY: r, scrollMarginBlock: r, scrollMarginBlockEnd: r, scrollMarginBlockStart: r, scrollMarginInline: r, scrollMarginInlineEnd: r, scrollMarginInlineStart: r, scrollPadding: r, scrollPaddingTop: r, scrollPaddingRight: r, scrollPaddingBottom: r, scrollPaddingLeft: r, scrollPaddingX: r, scrollPaddingY: r, scrollPaddingBlock: r, scrollPaddingBlockEnd: r, scrollPaddingBlockStart: r, scrollPaddingInline: r, scrollPaddingInlineEnd: r, scrollPaddingInlineStart: r, fontSize: "fontSizes", background: e, backgroundColor: e, backgroundImage: e, borderImage: e, border: e, borderBlock: e, borderBlockEnd: e, borderBlockStart: e, borderBottom: e, borderBottomColor: e, borderColor: e, borderInline: e, borderInlineEnd: e, borderInlineStart: e, borderLeft: e, borderLeftColor: e, borderRight: e, borderRightColor: e, borderTop: e, borderTopColor: e, caretColor: e, color: e, columnRuleColor: e, fill: e, outline: e, outlineColor: e, stroke: e, textDecorationColor: e, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: t, minBlockSize: t, maxBlockSize: t, inlineSize: t, minInlineSize: t, maxInlineSize: t, width: t, minWidth: t, maxWidth: t, height: t, minHeight: t, maxHeight: t, flexBasis: t, gridTemplateColumns: t, gridTemplateRows: t, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" };
  var i = (e2, t2) => "function" == typeof t2 ? { "()": Function.prototype.toString.call(t2) } : t2;
  var o = () => {
    const e2 = /* @__PURE__ */ Object.create(null);
    return (t2, r2, ...n2) => {
      const o2 = ((e3) => JSON.stringify(e3, i))(t2);
      return o2 in e2 ? e2[o2] : e2[o2] = r2(t2, ...n2);
    };
  };
  var l = Symbol.for("sxs.internal");
  var s = (e2, t2) => Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2));
  var a = (e2) => {
    for (const t2 in e2)
      return true;
    return false;
  };
  var { hasOwnProperty: c } = Object.prototype;
  var d = (e2) => e2.includes("-") ? e2 : e2.replace(/[A-Z]/g, (e3) => "-" + e3.toLowerCase());
  var g = /\s+(?![^()]*\))/;
  var p = (e2) => (t2) => e2(..."string" == typeof t2 ? String(t2).split(g) : [t2]);
  var u = { appearance: (e2) => ({ WebkitAppearance: e2, appearance: e2 }), backfaceVisibility: (e2) => ({ WebkitBackfaceVisibility: e2, backfaceVisibility: e2 }), backdropFilter: (e2) => ({ WebkitBackdropFilter: e2, backdropFilter: e2 }), backgroundClip: (e2) => ({ WebkitBackgroundClip: e2, backgroundClip: e2 }), boxDecorationBreak: (e2) => ({ WebkitBoxDecorationBreak: e2, boxDecorationBreak: e2 }), clipPath: (e2) => ({ WebkitClipPath: e2, clipPath: e2 }), content: (e2) => ({ content: e2.includes('"') || e2.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e2) ? e2 : `"${e2}"` }), hyphens: (e2) => ({ WebkitHyphens: e2, hyphens: e2 }), maskImage: (e2) => ({ WebkitMaskImage: e2, maskImage: e2 }), maskSize: (e2) => ({ WebkitMaskSize: e2, maskSize: e2 }), tabSize: (e2) => ({ MozTabSize: e2, tabSize: e2 }), textSizeAdjust: (e2) => ({ WebkitTextSizeAdjust: e2, textSizeAdjust: e2 }), userSelect: (e2) => ({ WebkitUserSelect: e2, userSelect: e2 }), marginBlock: p((e2, t2) => ({ marginBlockStart: e2, marginBlockEnd: t2 || e2 })), marginInline: p((e2, t2) => ({ marginInlineStart: e2, marginInlineEnd: t2 || e2 })), maxSize: p((e2, t2) => ({ maxBlockSize: e2, maxInlineSize: t2 || e2 })), minSize: p((e2, t2) => ({ minBlockSize: e2, minInlineSize: t2 || e2 })), paddingBlock: p((e2, t2) => ({ paddingBlockStart: e2, paddingBlockEnd: t2 || e2 })), paddingInline: p((e2, t2) => ({ paddingInlineStart: e2, paddingInlineEnd: t2 || e2 })) };
  var h = /([\d.]+)([^]*)/;
  var f = (e2, t2) => e2.length ? e2.reduce((e3, r2) => (e3.push(...t2.map((e4) => e4.includes("&") ? e4.replace(/&/g, /[ +>|~]/.test(r2) && /&.*&/.test(e4) ? `:is(${r2})` : r2) : r2 + " " + e4)), e3), []) : t2;
  var m = (e2, t2) => e2 in b && "string" == typeof t2 ? t2.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t3, r2, n2, i2) => r2 + ("stretch" === n2 ? `-moz-available${i2};${d(e2)}:${r2}-webkit-fill-available` : `-moz-fit-content${i2};${d(e2)}:${r2}fit-content`) + i2) : String(t2);
  var b = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 };
  var S = (e2) => e2 ? e2 + "-" : "";
  var k = (e2, t2, r2) => e2.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (e3, n2, i2, o2, l2) => "$" == o2 == !!i2 ? e3 : (n2 || "--" == o2 ? "calc(" : "") + "var(--" + ("$" === o2 ? S(t2) + (l2.includes("$") ? "" : S(r2)) + l2.replace(/\$/g, "-") : l2) + ")" + (n2 || "--" == o2 ? "*" + (n2 || "") + (i2 || "1") + ")" : ""));
  var y = /\s*,\s*(?![^()]*\))/;
  var B = Object.prototype.toString;
  var $ = (e2, t2, r2, n2, i2) => {
    let o2, l2, s2;
    const a2 = (e3, t3, r3) => {
      let c2, g2;
      const p2 = (e4) => {
        for (c2 in e4) {
          const R2 = 64 === c2.charCodeAt(0), z2 = R2 && Array.isArray(e4[c2]) ? e4[c2] : [e4[c2]];
          for (g2 of z2) {
            const e5 = /[A-Z]/.test($2 = c2) ? $2 : $2.replace(/-[^]/g, (e6) => e6[1].toUpperCase()), z3 = "object" == typeof g2 && g2 && g2.toString === B && (!n2.utils[e5] || !t3.length);
            if (e5 in n2.utils && !z3) {
              const t4 = n2.utils[e5];
              if (t4 !== l2) {
                l2 = t4, p2(t4(g2)), l2 = null;
                continue;
              }
            } else if (e5 in u) {
              const t4 = u[e5];
              if (t4 !== s2) {
                s2 = t4, p2(t4(g2)), s2 = null;
                continue;
              }
            }
            if (R2 && (b2 = c2.slice(1) in n2.media ? "@media " + n2.media[c2.slice(1)] : c2, c2 = b2.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (e6, t4, r4, n3, i3, o3) => {
              const l3 = h.test(t4), s3 = 0.0625 * (l3 ? -1 : 1), [a3, c3] = l3 ? [n3, t4] : [t4, n3];
              return "(" + ("=" === r4[0] ? "" : ">" === r4[0] === l3 ? "max-" : "min-") + a3 + ":" + ("=" !== r4[0] && 1 === r4.length ? c3.replace(h, (e7, t5, n4) => Number(t5) + s3 * (">" === r4 ? 1 : -1) + n4) : c3) + (i3 ? ") and (" + (">" === i3[0] ? "min-" : "max-") + a3 + ":" + (1 === i3.length ? o3.replace(h, (e7, t5, r5) => Number(t5) + s3 * (">" === i3 ? -1 : 1) + r5) : o3) : "") + ")";
            })), z3) {
              const e6 = R2 ? r3.concat(c2) : [...r3], n3 = R2 ? [...t3] : f(t3, c2.split(y));
              void 0 !== o2 && i2(x(...o2)), o2 = void 0, a2(g2, n3, e6);
            } else
              void 0 === o2 && (o2 = [[], t3, r3]), c2 = R2 || 36 !== c2.charCodeAt(0) ? c2 : `--${S(n2.prefix)}${c2.slice(1).replace(/\$/g, "-")}`, g2 = z3 ? g2 : "number" == typeof g2 ? g2 && e5 in I ? String(g2) + "px" : String(g2) : k(m(e5, null == g2 ? "" : g2), n2.prefix, n2.themeMap[e5]), o2[0].push(`${R2 ? `${c2} ` : `${d(c2)}:`}${g2}`);
          }
        }
        var b2, $2;
      };
      p2(e3), void 0 !== o2 && i2(x(...o2)), o2 = void 0;
    };
    a2(e2, t2, r2);
  };
  var x = (e2, t2, r2) => `${r2.map((e3) => `${e3}{`).join("")}${t2.length ? `${t2.join(",")}{` : ""}${e2.join(";")}${t2.length ? "}" : ""}${Array(r2.length ? r2.length + 1 : 0).join("}")}`;
  var I = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 };
  var R = (e2) => String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
  var z = (e2) => ((e3) => {
    let t2, r2 = "";
    for (t2 = Math.abs(e3); t2 > 52; t2 = t2 / 52 | 0)
      r2 = R(t2 % 52) + r2;
    return R(t2 % 52) + r2;
  })(((e3, t2) => {
    let r2 = t2.length;
    for (; r2; )
      e3 = 33 * e3 ^ t2.charCodeAt(--r2);
    return e3;
  })(5381, JSON.stringify(e2)) >>> 0);
  var W = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"];
  var j = (e2) => {
    if (e2.href && !e2.href.startsWith(location.origin))
      return false;
    try {
      return !!e2.cssRules;
    } catch (e3) {
      return false;
    }
  };
  var E = (e2) => {
    let t2;
    const r2 = () => {
      const { cssRules: e3 } = t2.sheet;
      return [].map.call(e3, (r3, n3) => {
        const { cssText: i2 } = r3;
        let o2 = "";
        if (i2.startsWith("--sxs"))
          return "";
        if (e3[n3 - 1] && (o2 = e3[n3 - 1].cssText).startsWith("--sxs")) {
          if (!r3.cssRules.length)
            return "";
          for (const e4 in t2.rules)
            if (t2.rules[e4].group === r3)
              return `--sxs{--sxs:${[...t2.rules[e4].cache].join(" ")}}${i2}`;
          return r3.cssRules.length ? `${o2}${i2}` : "";
        }
        return i2;
      }).join("");
    }, n2 = () => {
      if (t2) {
        const { rules: e3, sheet: r3 } = t2;
        if (!r3.deleteRule) {
          for (; 3 === Object(Object(r3.cssRules)[0]).type; )
            r3.cssRules.splice(0, 1);
          r3.cssRules = [];
        }
        for (const t3 in e3)
          delete e3[t3];
      }
      const i2 = Object(e2).styleSheets || [];
      for (const e3 of i2)
        if (j(e3)) {
          for (let i3 = 0, o3 = e3.cssRules; o3[i3]; ++i3) {
            const l3 = Object(o3[i3]);
            if (1 !== l3.type)
              continue;
            const s2 = Object(o3[i3 + 1]);
            if (4 !== s2.type)
              continue;
            ++i3;
            const { cssText: a2 } = l3;
            if (!a2.startsWith("--sxs"))
              continue;
            const c2 = a2.slice(14, -3).trim().split(/\s+/), d2 = W[c2[0]];
            d2 && (t2 || (t2 = { sheet: e3, reset: n2, rules: {}, toString: r2 }), t2.rules[d2] = { group: s2, index: i3, cache: new Set(c2) });
          }
          if (t2)
            break;
        }
      if (!t2) {
        const i3 = (e3, t3) => ({ type: t3, cssRules: [], insertRule(e4, t4) {
          this.cssRules.splice(t4, 0, i3(e4, { import: 3, undefined: 1 }[(e4.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
        }, get cssText() {
          return "@media{}" === e3 ? `@media{${[].map.call(this.cssRules, (e4) => e4.cssText).join("")}}` : e3;
        } });
        t2 = { sheet: e2 ? (e2.head || e2).appendChild(document.createElement("style")).sheet : i3("", "text/css"), rules: {}, reset: n2, toString: r2 };
      }
      const { sheet: o2, rules: l2 } = t2;
      for (let e3 = W.length - 1; e3 >= 0; --e3) {
        const t3 = W[e3];
        if (!l2[t3]) {
          const r3 = W[e3 + 1], n3 = l2[r3] ? l2[r3].index : o2.cssRules.length;
          o2.insertRule("@media{}", n3), o2.insertRule(`--sxs{--sxs:${e3}}`, n3), l2[t3] = { group: o2.cssRules[n3 + 1], index: n3, cache: /* @__PURE__ */ new Set([e3]) };
        }
        v(l2[t3]);
      }
    };
    return n2(), t2;
  };
  var v = (e2) => {
    const t2 = e2.group;
    let r2 = t2.cssRules.length;
    e2.apply = (e3) => {
      try {
        t2.insertRule(e3, r2), ++r2;
      } catch (e4) {
      }
    };
  };
  var T = Symbol();
  var w = o();
  var M = (e2, t2) => w(e2, () => (...r2) => {
    let n2 = { type: null, composers: /* @__PURE__ */ new Set() };
    for (const t3 of r2)
      if (null != t3)
        if (t3[l]) {
          null == n2.type && (n2.type = t3[l].type);
          for (const e3 of t3[l].composers)
            n2.composers.add(e3);
        } else
          t3.constructor !== Object || t3.$$typeof ? null == n2.type && (n2.type = t3) : n2.composers.add(C(t3, e2));
    return null == n2.type && (n2.type = "span"), n2.composers.size || n2.composers.add(["PJLV", {}, [], [], {}, []]), P(e2, n2, t2);
  });
  var C = ({ variants: e2, compoundVariants: t2, defaultVariants: r2, ...n2 }, i2) => {
    const o2 = `${S(i2.prefix)}c-${z(n2)}`, l2 = [], s2 = [], d2 = /* @__PURE__ */ Object.create(null), g2 = [];
    for (const e3 in r2)
      d2[e3] = String(r2[e3]);
    if ("object" == typeof e2 && e2)
      for (const t3 in e2) {
        p2 = d2, u2 = t3, c.call(p2, u2) || (d2[t3] = "undefined");
        const r3 = e2[t3];
        for (const e3 in r3) {
          const n3 = { [t3]: String(e3) };
          "undefined" === String(e3) && g2.push(t3);
          const i3 = r3[e3], o3 = [n3, i3, !a(i3)];
          l2.push(o3);
        }
      }
    var p2, u2;
    if ("object" == typeof t2 && t2)
      for (const e3 of t2) {
        let { css: t3, ...r3 } = e3;
        t3 = "object" == typeof t3 && t3 || {};
        for (const e4 in r3)
          r3[e4] = String(r3[e4]);
        const n3 = [r3, t3, !a(t3)];
        s2.push(n3);
      }
    return [o2, n2, l2, s2, d2, g2];
  };
  var P = (e2, t2, r2) => {
    const [n2, i2, o2, a2] = L(t2.composers), c2 = "function" == typeof t2.type || t2.type.$$typeof ? ((e3) => {
      function t3() {
        for (let r3 = 0; r3 < t3[T].length; r3++) {
          const [n3, i3] = t3[T][r3];
          e3.rules[n3].apply(i3);
        }
        return t3[T] = [], null;
      }
      return t3[T] = [], t3.rules = {}, W.forEach((e4) => t3.rules[e4] = { apply: (r3) => t3[T].push([e4, r3]) }), t3;
    })(r2) : null, d2 = (c2 || r2).rules, g2 = `.${n2}${i2.length > 1 ? `:where(.${i2.slice(1).join(".")})` : ""}`, p2 = (l2) => {
      l2 = "object" == typeof l2 && l2 || A;
      const { css: s2, ...p3 } = l2, u2 = {};
      for (const e3 in o2)
        if (delete p3[e3], e3 in l2) {
          let t3 = l2[e3];
          "object" == typeof t3 && t3 ? u2[e3] = { "@initial": o2[e3], ...t3 } : (t3 = String(t3), u2[e3] = "undefined" !== t3 || a2.has(e3) ? t3 : o2[e3]);
        } else
          u2[e3] = o2[e3];
      const h2 = /* @__PURE__ */ new Set([...i2]);
      for (const [n3, i3, o3, l3] of t2.composers) {
        r2.rules.styled.cache.has(n3) || (r2.rules.styled.cache.add(n3), $(i3, [`.${n3}`], [], e2, (e3) => {
          d2.styled.apply(e3);
        }));
        const t3 = O(o3, u2, e2.media), s3 = O(l3, u2, e2.media, true);
        for (const i4 of t3)
          if (void 0 !== i4)
            for (const [t4, o4, l4] of i4) {
              const i5 = `${n3}-${z(o4)}-${t4}`;
              h2.add(i5);
              const s4 = (l4 ? r2.rules.resonevar : r2.rules.onevar).cache, a3 = l4 ? d2.resonevar : d2.onevar;
              s4.has(i5) || (s4.add(i5), $(o4, [`.${i5}`], [], e2, (e3) => {
                a3.apply(e3);
              }));
            }
        for (const t4 of s3)
          if (void 0 !== t4)
            for (const [i4, o4] of t4) {
              const t5 = `${n3}-${z(o4)}-${i4}`;
              h2.add(t5), r2.rules.allvar.cache.has(t5) || (r2.rules.allvar.cache.add(t5), $(o4, [`.${t5}`], [], e2, (e3) => {
                d2.allvar.apply(e3);
              }));
            }
      }
      if ("object" == typeof s2 && s2) {
        const t3 = `${n2}-i${z(s2)}-css`;
        h2.add(t3), r2.rules.inline.cache.has(t3) || (r2.rules.inline.cache.add(t3), $(s2, [`.${t3}`], [], e2, (e3) => {
          d2.inline.apply(e3);
        }));
      }
      for (const e3 of String(l2.className || "").trim().split(/\s+/))
        e3 && h2.add(e3);
      const f2 = p3.className = [...h2].join(" ");
      return { type: t2.type, className: f2, selector: g2, props: p3, toString: () => f2, deferredInjector: c2 };
    };
    return s(p2, { className: n2, selector: g2, [l]: t2, toString: () => (r2.rules.styled.cache.has(n2) || p2(), n2) });
  };
  var L = (e2) => {
    let t2 = "";
    const r2 = [], n2 = {}, i2 = [];
    for (const [o2, , , , l2, s2] of e2) {
      "" === t2 && (t2 = o2), r2.push(o2), i2.push(...s2);
      for (const e3 in l2) {
        const t3 = l2[e3];
        (void 0 === n2[e3] || "undefined" !== t3 || s2.includes(t3)) && (n2[e3] = t3);
      }
    }
    return [t2, r2, n2, new Set(i2)];
  };
  var O = (e2, t2, r2, n2) => {
    const i2 = [];
    e:
      for (let [o2, l2, s2] of e2) {
        if (s2)
          continue;
        let e3, a2 = 0, c2 = false;
        for (e3 in o2) {
          const n3 = o2[e3];
          let i3 = t2[e3];
          if (i3 !== n3) {
            if ("object" != typeof i3 || !i3)
              continue e;
            {
              let e4, t3, o3 = 0;
              for (const l3 in i3) {
                if (n3 === String(i3[l3])) {
                  if ("@initial" !== l3) {
                    const e5 = l3.slice(1);
                    (t3 = t3 || []).push(e5 in r2 ? r2[e5] : l3.replace(/^@media ?/, "")), c2 = true;
                  }
                  a2 += o3, e4 = true;
                }
                ++o3;
              }
              if (t3 && t3.length && (l2 = { ["@media " + t3.join(", ")]: l2 }), !e4)
                continue e;
            }
          }
        }
        (i2[a2] = i2[a2] || []).push([n2 ? "cv" : `${e3}-${o2[e3]}`, l2, c2]);
      }
    return i2;
  };
  var A = {};
  var N = o();
  var D = (e2, t2) => N(e2, () => (...r2) => {
    const n2 = () => {
      for (let n3 of r2) {
        n3 = "object" == typeof n3 && n3 || {};
        let r3 = z(n3);
        if (!t2.rules.global.cache.has(r3)) {
          if (t2.rules.global.cache.add(r3), "@import" in n3) {
            let e3 = [].indexOf.call(t2.sheet.cssRules, t2.rules.themed.group) - 1;
            for (let r4 of [].concat(n3["@import"]))
              r4 = r4.includes('"') || r4.includes("'") ? r4 : `"${r4}"`, t2.sheet.insertRule(`@import ${r4};`, e3++);
            delete n3["@import"];
          }
          $(n3, [], [], e2, (e3) => {
            t2.rules.global.apply(e3);
          });
        }
      }
      return "";
    };
    return s(n2, { toString: n2 });
  });
  var H = o();
  var V = (e2, t2) => H(e2, () => (r2) => {
    const n2 = `${S(e2.prefix)}k-${z(r2)}`, i2 = () => {
      if (!t2.rules.global.cache.has(n2)) {
        t2.rules.global.cache.add(n2);
        const i3 = [];
        $(r2, [], [], e2, (e3) => i3.push(e3));
        const o2 = `@keyframes ${n2}{${i3.join("")}}`;
        t2.rules.global.apply(o2);
      }
      return n2;
    };
    return s(i2, { get name() {
      return i2();
    }, toString: i2 });
  });
  var G = class {
    constructor(e2, t2, r2, n2) {
      this.token = null == e2 ? "" : String(e2), this.value = null == t2 ? "" : String(t2), this.scale = null == r2 ? "" : String(r2), this.prefix = null == n2 ? "" : String(n2);
    }
    get computedValue() {
      return "var(" + this.variable + ")";
    }
    get variable() {
      return "--" + S(this.prefix) + S(this.scale) + this.token;
    }
    toString() {
      return this.computedValue;
    }
  };
  var F = o();
  var J = (e2, t2) => F(e2, () => (r2, n2) => {
    n2 = "object" == typeof r2 && r2 || Object(n2);
    const i2 = `.${r2 = (r2 = "string" == typeof r2 ? r2 : "") || `${S(e2.prefix)}t-${z(n2)}`}`, o2 = {}, l2 = [];
    for (const t3 in n2) {
      o2[t3] = {};
      for (const r3 in n2[t3]) {
        const i3 = `--${S(e2.prefix)}${t3}-${r3}`, s3 = k(String(n2[t3][r3]), e2.prefix, t3);
        o2[t3][r3] = new G(r3, s3, t3, e2.prefix), l2.push(`${i3}:${s3}`);
      }
    }
    const s2 = () => {
      if (l2.length && !t2.rules.themed.cache.has(r2)) {
        t2.rules.themed.cache.add(r2);
        const i3 = `${n2 === e2.theme ? ":root," : ""}.${r2}{${l2.join(";")}}`;
        t2.rules.themed.apply(i3);
      }
      return r2;
    };
    return { ...o2, get className() {
      return s2();
    }, selector: i2, toString: s2 };
  });
  var U = o();
  var Y = o();
  var q = (e2) => {
    const t2 = ((e3) => {
      let t3 = false;
      const r2 = U(e3, (e4) => {
        t3 = true;
        const r3 = "prefix" in (e4 = "object" == typeof e4 && e4 || {}) ? String(e4.prefix) : "", i2 = "object" == typeof e4.media && e4.media || {}, o2 = "object" == typeof e4.root ? e4.root || null : globalThis.document || null, l2 = "object" == typeof e4.theme && e4.theme || {}, s2 = { prefix: r3, media: i2, theme: l2, themeMap: "object" == typeof e4.themeMap && e4.themeMap || { ...n }, utils: "object" == typeof e4.utils && e4.utils || {} }, a2 = E(o2), c2 = { css: M(s2, a2), globalCss: D(s2, a2), keyframes: V(s2, a2), createTheme: J(s2, a2), reset() {
          a2.reset(), c2.theme.toString();
        }, theme: {}, sheet: a2, config: s2, prefix: r3, getCssText: a2.toString, toString: a2.toString };
        return String(c2.theme = c2.createTheme(l2)), c2;
      });
      return t3 || r2.reset(), r2;
    })(e2);
    return t2.styled = (({ config: e3, sheet: t3 }) => Y(e3, () => {
      const r2 = M(e3, t3);
      return (...e4) => {
        const t4 = r2(...e4), n2 = t4[l].type, i2 = import_react.default.forwardRef((e5, r3) => {
          const i3 = e5 && e5.as || n2, { props: o2, deferredInjector: l2 } = t4(e5);
          return delete o2.as, o2.ref = r3, l2 ? import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(i3, o2), import_react.default.createElement(l2, null)) : import_react.default.createElement(i3, o2);
        });
        return i2.className = t4.className, i2.displayName = `Styled.${n2.displayName || n2.name || n2}`, i2.selector = t4.selector, i2.toString = () => t4.selector, i2[l] = t4[l], i2;
      };
    }))(t2), t2;
  };

  // lib/box.ts
  var box_exports = {};
  __export(box_exports, {
    Appearance: () => Appearance,
    applyBoxOptions: () => applyBoxOptions,
    register: () => register2
  });

  // lib/align.ts
  var align_exports = {};
  __export(align_exports, {
    applyAlign: () => applyAlign,
    applyFlexAlignOptions: () => applyFlexAlignOptions,
    applyGridAlignOptions: () => applyGridAlignOptions,
    register: () => register
  });
  function register(method) {
    method("align", applyAlign);
  }
  function applyAlign(css, alignment) {
    if (css.display === "grid") {
      return applyGridAlignOptions(css, alignment);
    }
    return applyFlexAlignOptions(css, alignment);
  }
  function applyFlexAlignOptions(css, alignment) {
    const result = { ...css };
    const alignmentMap = {
      top: "flex-start",
      center: "center",
      bottom: "flex-end",
      left: "flex-start",
      right: "flex-end",
      start: "flex-start",
      end: "flex-end",
      leading: "flex-start",
      trailing: "flex-end"
    };
    let hor;
    let ver;
    if (typeof alignment === "string") {
      hor = ver = alignment;
    } else if (Array.isArray(alignment)) {
      [hor, ver] = alignment;
    } else {
      hor = alignment.horizontal || alignment.x;
      ver = alignment.vertical || alignment.y;
    }
    const isRow = css.flexDirection !== "column";
    if (isRow && hor) {
      result.justifyContent = alignmentMap[hor];
    } else if (!isRow && ver) {
      result.justifyContent = alignmentMap[ver];
    }
    if (isRow && ver) {
      result.alignItems = alignmentMap[ver];
    } else if (!isRow && hor) {
      result.alignItems = alignmentMap[hor];
    }
    return result;
  }
  function applyGridAlignOptions(css, alignment) {
    const result = { ...css };
    const alignmentMap = {
      top: "start",
      center: "center",
      bottom: "end",
      left: "start",
      right: "end",
      start: "start",
      end: "end",
      leading: "start",
      trailing: "end"
    };
    let hor;
    let ver;
    if (typeof alignment === "string") {
      hor = ver = alignment;
    } else if (Array.isArray(alignment)) {
      [hor, ver] = alignment;
    } else {
      hor = alignment.horizontal || alignment.x;
      ver = alignment.vertical || alignment.y;
    }
    if (hor) {
      result.justifyContent = alignmentMap[hor];
    }
    if (ver) {
      result.alignContent = alignmentMap[ver];
    }
    return result;
  }

  // lib/box.ts
  function register2(method) {
    method("box", applyBoxOptions);
    method("frame", applyFrame);
    method("display", applyDisplay);
    method("absolute", applyAbsolute);
    method("position", applyPosition);
    method("pin", applyPin);
    method("relative", applyRelative);
    method("opacity", applyOpacity);
    method("zIndex", applyZIndex);
    method("content", applyContent);
    method("appear", applyAppearance);
  }
  var Appearance = /* @__PURE__ */ ((Appearance2) => {
    Appearance2["None"] = "none";
    Appearance2["Auto"] = "auto";
    Appearance2["MenuList"] = "menulist";
    Appearance2["TextField"] = "textfield";
    Appearance2["Button"] = "button";
    Appearance2["SearchField"] = "searchfield";
    Appearance2["Textarea"] = "textarea";
    return Appearance2;
  })(Appearance || {});
  function applyFrame(input, options) {
    const defaultFrameOptions = {
      display: "flex",
      justify: "center",
      items: "center"
    };
    return applyBoxOptions(input, { ...defaultFrameOptions, ...options });
  }
  function applyBoxOptions(input, options) {
    let css = { ...input };
    const map = {
      justify: "justifyContent",
      items: "alignItems",
      flexDir: "flexDirection",
      x: "left",
      y: "top",
      aspect: "aspectRatio"
    };
    for (const key in options) {
      if (key in map) {
        css[map[key]] = options[key];
      } else {
        css[key] = options[key];
      }
    }
    if (options.align) {
      css = applyAlign(css, options.align);
    }
    if (options.opacity) {
      css = applyOpacity(css, options.opacity);
    }
    if (options.zIndex) {
      css = applyZIndex(css, options.zIndex);
    }
    if (options.content !== void 0) {
      css.content = options.content;
    }
    return css;
  }
  function applyDisplay(input, display, options = {}) {
    return applyBoxOptions(input, { display, ...options });
  }
  function applyAbsolute(input, xOrOptions, yOrOptions, options) {
    if (arguments.length === 1) {
      return applyBoxOptions(input, { position: "absolute" });
    }
    if (typeof xOrOptions === "object") {
      return applyBoxOptions(input, { position: "absolute", ...xOrOptions });
    }
    if (typeof yOrOptions === "object") {
      return applyBoxOptions(input, {
        position: "absolute",
        x: xOrOptions,
        ...yOrOptions
      });
    }
    return applyBoxOptions(input, {
      position: "absolute",
      x: xOrOptions,
      y: yOrOptions,
      ...options
    });
  }
  function applyPosition(input, xOrOptions, yOrOptions, options) {
    return applyAbsolute(input, xOrOptions, yOrOptions, options);
  }
  function applyPin(input, xOrOptions, yOrOptions, options) {
    if (arguments.length === 1) {
      return applyBoxOptions(input, { position: "fixed" });
    }
    let css = applyAbsolute(input, xOrOptions, yOrOptions, options);
    return applyBoxOptions(css, { position: "fixed" });
  }
  function applyRelative(input, xOrOptions, yOrOptions, options) {
    if (arguments.length === 1) {
      return applyBoxOptions(input, { position: "relative" });
    }
    let css = applyAbsolute(input, xOrOptions, yOrOptions, options);
    return applyBoxOptions(css, { position: "relative" });
  }
  function applyOpacity(css, value) {
    return {
      ...css,
      opacity: value
    };
  }
  function applyZIndex(css, value) {
    return {
      ...css,
      zIndex: value
    };
  }
  function applyContent(css, value) {
    return {
      ...css,
      content: value
    };
  }
  function applyAppearance(css, value) {
    return {
      ...css,
      appearance: value,
      WebkitAppearance: value,
      MozAppearance: value
    };
  }

  // lib/size.ts
  var size_exports = {};
  __export(size_exports, {
    applySizeOptions: () => applySizeOptions,
    register: () => register3
  });
  function register3(method) {
    method("size", applySize);
    method("width", applyWidth);
    method("height", applyHeight);
  }
  function applyWidth(input, widthOrOptions, options) {
    if (typeof widthOrOptions === "object") {
      return applySizeOptions(input, {
        maxWidth: widthOrOptions?.max,
        minWidth: widthOrOptions?.min
      });
    }
    return applySizeOptions(input, {
      width: widthOrOptions,
      maxWidth: options?.max,
      minWidth: options?.min
    });
  }
  function applyHeight(input, heightOrOptions, options) {
    if (typeof heightOrOptions === "object") {
      return applySizeOptions(input, {
        maxHeight: heightOrOptions?.max,
        minHeight: heightOrOptions?.min
      });
    }
    return applySizeOptions(input, {
      height: heightOrOptions,
      maxHeight: options?.max,
      minHeight: options?.min
    });
  }
  function applySize(input, widthOrOptions, heightOrOptions) {
    let output = { ...input };
    if (typeof widthOrOptions === "object") {
      output = applySizeOptions(output, widthOrOptions);
    }
    if (typeof heightOrOptions === "object") {
      output = applySizeOptions(output, heightOrOptions);
    }
    if (arguments.length === 1) {
      heightOrOptions = widthOrOptions;
    }
    if (typeof heightOrOptions === "string" || typeof heightOrOptions === "number") {
      output = applySizeOptions(output, { height: heightOrOptions });
    }
    if (typeof widthOrOptions === "string" || typeof widthOrOptions === "number") {
      output = applySizeOptions(output, { width: widthOrOptions });
      if (arguments.length === 2) {
        output = applySizeOptions(output, { height: widthOrOptions });
      }
    }
    return output;
  }
  function applySizeOptions(css, options) {
    const result = { ...css };
    if (options.width !== void 0) {
      result.width = options.width;
    }
    if (options.height !== void 0) {
      result.height = options.height;
    }
    if (options.maxWidth !== void 0) {
      result.maxWidth = options.maxWidth;
    }
    if (options.maxHeight !== void 0) {
      result.maxHeight = options.maxHeight;
    }
    if (options.minWidth !== void 0) {
      result.minWidth = options.minWidth;
    }
    if (options.minHeight !== void 0) {
      result.minHeight = options.minHeight;
    }
    if (options.aspect !== void 0) {
      result.aspectRatio = `${options.aspect}`;
    }
    return result;
  }

  // lib/colors.ts
  var colors_exports = {};
  __export(colors_exports, {
    register: () => register5
  });

  // lib/accessibility.ts
  var accessibility_exports = {};
  __export(accessibility_exports, {
    applySelection: () => applySelection,
    register: () => register4
  });
  function register4(method) {
    method("selection", applySelection);
  }
  function applySelection(css, options) {
    const output = { ...css };
    if (options === false) {
      output.userSelect = "none";
      return output;
    }
    if (options === true) {
      output.userselect = "auto";
      return output;
    }
    if (options.bg || options.fg) {
      output["::selection"] = {
        ...output["::selection"],
        backgroundColor: options.bg,
        color: options.fg
      };
    }
    if (options.enabled !== void 0) {
      output.userSelect = options.enabled ? "auto" : "none";
    }
    if (options.userSelect !== void 0) {
      output.userSelect = options.userSelect === true ? "auto" : options.userSelect === false ? "none" : options.userSelect;
    }
    return output;
  }

  // lib/colors.ts
  function register5(method) {
    method("color", applyColor);
    method("fg", applyFg);
    method("bg", applyBg);
    method("fill", applyBg);
    method("placeholder", applyPlaceholder);
  }
  function applyColor(input, options) {
    return applyColorOptions(input, options);
  }
  function applyFg(input, color) {
    return applyColorOptions(input, { fg: color });
  }
  function applyBg(input, options) {
    return applyBackgroundOptions(input, options);
  }
  function applyPlaceholder(input, fg) {
    return applyColorOptions(input, { placeholder: fg });
  }
  function applyColorOptions(css, options) {
    let output = { ...css };
    const map = {
      fg: "color",
      bg: "backgroundColor",
      caret: "caretColor",
      border: "borderColor"
    };
    for (const key in options) {
      if (key in map) {
        output[map[key]] = options[key];
      } else {
        output[key] = options[key];
      }
    }
    if (options.placeholder) {
      output["&::placeholder"] = {
        color: options.placeholder
      };
    }
    if (options.selectionBg || options.selectionFg) {
      output = applySelection(output, {
        fg: options.selectionFg,
        bg: options.selectionBg
      });
    }
    if (typeof options.bg === "object") {
      Object.assign(output, applyBackgroundOptions({}, options.bg));
    }
    return output;
  }
  function applyBackgroundOptions(input, options) {
    const output = { ...input };
    if (typeof options === "string") {
      output.background = options;
      return output;
    }
    if (options.color) {
      output.backgroundColor = options.color;
    }
    if (options.url) {
      output.backgroundImage = `url(${options.url})`;
    }
    if (options.src) {
      output.backgroundImage = options.src;
    }
    if (options.base64) {
      output.backgroundImage = `url(data:image/png;base64,${options.base64})`;
    }
    if (options.size) {
      output.backgroundSize = options.size;
    }
    if (options.position) {
      output.backgroundPosition = Array.isArray(options.position) ? options.position.join(" ") : options.position;
    }
    if (options.repeat) {
      output.backgroundRepeat = options.repeat;
    }
    return output;
  }

  // lib/aspect.ts
  var aspect_exports = {};
  __export(aspect_exports, {
    register: () => register6
  });
  function register6(method) {
    method("aspect", applyAspectOptions);
  }
  function applyAspectOptions(css, ratio) {
    return {
      ...css,
      aspectRatio: `${ratio}`
    };
  }

  // lib/border.ts
  var border_exports = {};
  __export(border_exports, {
    applyBorderOptions: () => applyBorderOptions,
    applyRoundedCornerOptions: () => applyRoundedCornerOptions,
    register: () => register7
  });

  // lib/utils.ts
  function isDefined(input) {
    return input !== void 0 && input !== null;
  }
  function or(a2, b2) {
    return isDefined(a2) ? a2 : b2;
  }
  function toPx(value) {
    if (typeof value === "number") {
      return `${value}px`;
    }
    return value;
  }

  // lib/box-sides.ts
  function boxSideProps(propertyName, values, propertySuffix, opt) {
    const result = {};
    const sideNames = ["top", "right", "bottom", "left"];
    if (typeof values === "number" || typeof values === "string") {
      result[`${propertyName}${propertySuffix || ""}`] = opt?.override ? opt.override : values;
      return result;
    }
    if (Array.isArray(values)) {
      values.forEach((value, index) => {
        if (value != null) {
          const sideName = sideNames[index];
          result[generatePropertyName(propertyName, sideName, propertySuffix)] = opt?.override ? opt.override : value;
        }
      });
      return result;
    }
    if (typeof values === "object") {
      for (const [side, value] of Object.entries(expandXYToSides(values))) {
        if (value != null) {
          result[generatePropertyName(propertyName, side, propertySuffix)] = opt?.override ? opt.override : value;
        }
      }
      return result;
    }
    return result;
  }
  function generatePropertyName(baseProperty, side, suffix) {
    return `${baseProperty}${side.charAt(0).toUpperCase() + side.slice(1)}${suffix || ""}`;
  }
  function expandSidesToCorners(input) {
    if (typeof input !== "object" || Array.isArray(input)) {
      return input;
    }
    if ("topLeft" in input || "topRight" in input || "bottomRight" in input || "bottomLeft" in input || "leftTop" in input || "rightTop" in input || "rightBottom" in input || "leftBottom" in input) {
      return normalizeBoxCorners(input);
    }
    const { top, right, bottom, left } = input;
    return {
      topLeft: or(top, left),
      topRight: or(top, right),
      bottomRight: or(bottom, right),
      bottomLeft: or(bottom, left)
    };
  }
  function expandXYToSides(sides) {
    if (Array.isArray(sides))
      return sides;
    const result = { ...sides };
    if (sides.x !== void 0) {
      result.left = sides.x;
      result.right = sides.x;
      delete result.x;
    }
    if (sides.y !== void 0) {
      result.top = sides.y;
      result.bottom = sides.y;
      delete result.y;
    }
    return result;
  }
  function normalizeBoxCorners(input) {
    if (Array.isArray(input) || typeof input !== "object")
      return input;
    const normalized = { ...input };
    if (input.leftTop !== void 0)
      normalized.topLeft = input.leftTop;
    if (input.rightTop !== void 0)
      normalized.topRight = input.rightTop;
    if (input.rightBottom !== void 0)
      normalized.bottomRight = input.rightBottom;
    if (input.leftBottom !== void 0)
      normalized.bottomLeft = input.leftBottom;
    return normalized;
  }

  // lib/border.ts
  function register7(method) {
    method("border", applyBorder);
    method("stroke", applyStroke);
    method("round", applyRound);
  }
  function applyBorder(input, widthOrOptions, options) {
    let output = { ...input };
    if (typeof widthOrOptions === "object") {
      output = applyBorderOptions(output, widthOrOptions);
    } else if (options) {
      output = applyBorderOptions(
        applyBorderOptions(output, { width: widthOrOptions }),
        typeof options === "string" ? { color: options } : options
      );
    } else {
      output = applyBorderOptions(output, { width: widthOrOptions });
    }
    if (options?.radius) {
      output = applyRoundedCornerOptions(output, options.radius);
    }
    return output;
  }
  function applyStroke(input, widthOrOptions, options) {
    return applyBorder(input, widthOrOptions, options);
  }
  function applyRound(input, valueOrOptions, options) {
    let output = { ...input };
    if (typeof valueOrOptions === "undefined") {
      output = applyRoundedCornerOptions(output, "$sm");
    } else {
      output = applyRoundedCornerOptions(output, valueOrOptions);
    }
    if (options) {
      output = applyRoundedCornerOptions(output, options);
    }
    return output;
  }
  function applyBorderOptions(css, options) {
    const result = {
      ...css,
      ...boxSideProps(
        "border",
        isDefined(options.width) ? options.width : options,
        "Width"
      ),
      ...boxSideProps(
        "border",
        isDefined(options.width) ? options.width : options,
        "Style",
        {
          override: css.borderStyle || "solid"
        }
      )
    };
    if (options.color) {
      result.borderColor = options.color;
    }
    return result;
  }
  function applyRoundedCornerOptions(css, input) {
    const result = { ...css };
    const corners = ["topLeft", "topRight", "bottomRight", "bottomLeft"];
    if (typeof input === "number" || typeof input === "string") {
      result.borderRadius = input;
      return result;
    }
    if (Array.isArray(input)) {
      input.forEach((value, index) => {
        if (value != null) {
          const corner = corners[index];
          result[generatePropertyName("border", corner, "Radius")] = value;
        }
      });
      return result;
    }
    if (typeof input === "object") {
      const values = expandSidesToCorners(input);
      for (const corner of corners) {
        if (typeof values[corner] != "undefined") {
          result[generatePropertyName("border", corner, "Radius")] = values[corner];
        }
      }
      return result;
    }
    return result;
  }

  // lib/cursor.ts
  var cursor_exports = {};
  __export(cursor_exports, {
    Cursor: () => Cursor,
    register: () => register8
  });
  function register8(method) {
    method("cursor", applyCursor);
  }
  var Cursor = /* @__PURE__ */ ((Cursor2) => {
    Cursor2["Auto"] = "auto";
    Cursor2["Default"] = "default";
    Cursor2["Pointer"] = "pointer";
    Cursor2["Wait"] = "wait";
    Cursor2["Text"] = "text";
    Cursor2["Move"] = "move";
    Cursor2["Help"] = "help";
    Cursor2["NotAllowed"] = "not-allowed";
    Cursor2["None"] = "none";
    Cursor2["ContextMenu"] = "context-menu";
    Cursor2["Progress"] = "progress";
    Cursor2["Cell"] = "cell";
    Cursor2["Crosshair"] = "crosshair";
    Cursor2["VerticalText"] = "vertical-text";
    Cursor2["Alias"] = "alias";
    Cursor2["Copy"] = "copy";
    Cursor2["NoDrop"] = "no-drop";
    Cursor2["Grab"] = "grab";
    Cursor2["Grabbing"] = "grabbing";
    Cursor2["AllScroll"] = "all-scroll";
    Cursor2["ColResize"] = "col-resize";
    Cursor2["RowResize"] = "row-resize";
    Cursor2["NResize"] = "n-resize";
    Cursor2["EResize"] = "e-resize";
    Cursor2["SResize"] = "s-resize";
    Cursor2["WResize"] = "w-resize";
    Cursor2["NEResize"] = "ne-resize";
    Cursor2["NWResize"] = "nw-resize";
    Cursor2["SEResize"] = "se-resize";
    Cursor2["SWResize"] = "sw-resize";
    Cursor2["EWResize"] = "ew-resize";
    Cursor2["NSResize"] = "ns-resize";
    Cursor2["NESWResize"] = "nesw-resize";
    Cursor2["NWSEResize"] = "nwse-resize";
    Cursor2["ZoomIn"] = "zoom-in";
    Cursor2["ZoomOut"] = "zoom-out";
    return Cursor2;
  })(Cursor || {});
  function applyCursor(css, input) {
    const options = typeof input === "string" ? { cursor: input } : input;
    return applyCursorOptions(css, options);
  }
  function applyCursorOptions(css, options) {
    let cursorValue;
    if (options.url) {
      options.src = `url(${options.url})`;
    }
    if (options.src) {
      cursorValue = options.cursor ? `${options.src}, ${options.cursor}` : `${options.src}, auto`;
    } else if (options.cursor) {
      cursorValue = options.cursor;
    } else {
      cursorValue = "default" /* Default */;
    }
    return { ...css, cursor: cursorValue };
  }

  // lib/outline.ts
  var outline_exports = {};
  __export(outline_exports, {
    register: () => register9
  });
  function register9(method) {
    method("outline", applyOutline);
  }
  function applyOutline(css, widthOrOptions, options) {
    if (typeof widthOrOptions === "object") {
      return applyOutlineOptions(css, widthOrOptions);
    } else if (options) {
      return applyOutlineOptions(
        applyOutlineOptions(css, { width: widthOrOptions }),
        options
      );
    } else {
      return applyOutlineOptions(css, { width: widthOrOptions });
    }
  }
  function applyOutlineOptions(css, options) {
    const result = { ...css };
    if (options.width !== void 0) {
      result.outlineWidth = options.width;
    }
    if (options.color !== void 0) {
      result.outlineColor = options.color;
    }
    result.outlineStyle = options.style || "solid";
    if (options.offset !== void 0) {
      result.outlineOffset = options.offset;
    }
    return result;
  }

  // lib/shadow.ts
  var shadow_exports = {};
  __export(shadow_exports, {
    applyTextShadow: () => applyTextShadow,
    register: () => register10
  });
  function register10(method) {
    method("shadow", applyShadow);
    method("textShadow", applyTextShadow);
  }
  var defaultShadow = {
    x: 0,
    y: 4,
    blur: 4,
    spread: 0,
    color: "rgba(0, 0, 0, 0.25)",
    inset: false
  };
  function applyShadow(css, options) {
    if (options === void 0 || options === true) {
      return applyShadowOptions(css, defaultShadow);
    }
    if (options === 0 || options === false) {
      return { ...css, boxShadow: "none" };
    }
    if (typeof options === "number") {
      const opacity = Math.min(1, Math.max(0, options));
      return applyShadowOptions(css, {
        ...defaultShadow,
        color: `rgba(0, 0, 0, ${opacity})`
      });
    }
    return applyShadowOptions(css, options);
  }
  function applyShadowOptions(css, options) {
    const shadowOptions = { ...defaultShadow, ...options };
    const { x: x2, y: y2, blur, spread, color, inset } = shadowOptions;
    const shadowValue = `${inset ? "inset " : ""}${toPx(x2)} ${toPx(y2)} ${toPx(
      blur
    )} ${toPx(spread)} ${color}`;
    return {
      ...css,
      boxShadow: shadowValue
    };
  }
  var defaultTextShadow = {
    x: 1,
    y: 1,
    blur: 2,
    color: "rgba(0, 0, 0, 0.25)"
  };
  function applyTextShadow(css, options) {
    if (options === void 0) {
      return applyTextShadowOptions(css, defaultTextShadow);
    }
    if (typeof options === "number") {
      const opacity = Math.min(1, Math.max(0, options));
      return applyTextShadowOptions(css, {
        ...defaultTextShadow,
        color: `rgba(0, 0, 0, ${opacity})`
      });
    }
    return applyTextShadowOptions(css, options);
  }
  function applyTextShadowOptions(css, options) {
    const shadowOptions = { ...defaultTextShadow, ...options };
    const { x: x2, y: y2, blur, color } = shadowOptions;
    const shadowValue = `${toPx(x2)} ${toPx(y2)} ${blur ? toPx(blur) : ""} ${color}`.trim();
    return {
      ...css,
      textShadow: shadowValue
    };
  }

  // lib/spacing.ts
  var spacing_exports = {};
  __export(spacing_exports, {
    register: () => register11
  });
  function register11(method) {
    method("space", applySpace);
    method("margin", applyMargin);
    method("padding", applyPadding);
    method("gap", applyGap);
  }
  function applySpace(css, options) {
    return applySpacingOptions(css, options);
  }
  function applyMargin(css, options, override) {
    let result = applySpacingOptions(css, { outer: options });
    if (override) {
      result = applySpacingOptions(result, { outer: override });
    }
    return result;
  }
  function applyPadding(css, options, override) {
    let result = applySpacingOptions(css, { inner: options });
    if (override) {
      result = applySpacingOptions(result, { inner: override });
    }
    return result;
  }
  function applyGap(css, value) {
    return {
      ...css,
      gap: typeof value === "number" ? `${value}px` : value
    };
  }
  function applySpacingOptions(css, options) {
    const result = {
      ...css,
      ...boxSideProps("padding", options.inner),
      ...boxSideProps("margin", options.outer)
    };
    if (options.gap !== void 0) {
      result.gap = typeof options.gap === "number" ? `${options.gap}px` : options.gap;
    }
    return result;
  }

  // lib/text.ts
  var text_exports = {};
  __export(text_exports, {
    register: () => register12
  });
  function register12(method) {
    method("text", applyText);
    method("sans", applySans);
    method("mono", applyMono);
    method("serif", applySerif);
    method("ellipsis", applyEllipsis);
  }
  function applyText(css, sizeOrOptions, options) {
    if (typeof sizeOrOptions === "number" || typeof sizeOrOptions === "string") {
      return applyTextOptions(css, { size: sizeOrOptions, ...options });
    } else {
      return applyTextOptions(css, { ...sizeOrOptions, ...options });
    }
  }
  function applySans(css, sizeOrOptions, options) {
    return applyText(css, sizeOrOptions, { family: "$sans", ...options });
  }
  function applyMono(css, sizeOrOptions, options) {
    return applyText(css, sizeOrOptions, { family: "$mono", ...options });
  }
  function applySerif(css, sizeOrOptions, options) {
    return applyText(css, sizeOrOptions, { family: "$serif", ...options });
  }
  function applyTextOptions(css, options) {
    let output = { ...css };
    const map = {
      color: "color",
      size: "fontSize",
      family: "fontFamily",
      weight: "fontWeight",
      tracking: "letterSpacing",
      leading: "lineHeight",
      height: "lineHeight",
      wrap: "whiteSpace",
      whiteSpace: "whiteSpace",
      align: "textAlign",
      cursor: "cursor",
      decoration: "textDecoration"
    };
    const caseMap = {
      upper: "uppercase",
      lower: "lowercase",
      capitalize: "capitalize",
      normal: "none"
    };
    for (const [key, value] of Object.entries(options)) {
      if (key in map) {
        output[map[key]] = value;
      } else if (key === "case") {
        output.textTransform = caseMap[value] || "none";
      } else {
        output[key] = value;
      }
    }
    if (options.ellipsis) {
      output = applyEllipsis(output);
    }
    if (options.shadow) {
      output = applyTextShadow(output, options.shadow);
    }
    return output;
  }
  function applyEllipsis(css) {
    return {
      ...css,
      overflowX: "hidden",
      overflowY: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    };
  }

  // lib/transition.ts
  var transition_exports = {};
  __export(transition_exports, {
    register: () => register13
  });
  function register13(method) {
    method("transition", applyTransition);
  }
  var defaultTransitionProps = [
    "color",
    "background-color",
    "border-color",
    "text-decoration-color",
    "fill",
    "stroke",
    "opacity",
    "box-shadow",
    "transform",
    "filter",
    "backdrop-filter"
  ];
  function applyTransition(css, speed, props) {
    return applyTransitionOptions(css, speed, props);
  }
  function applyTransitionOptions(css, speed, props) {
    const output = { ...css };
    output.transitionProperty = (props || defaultTransitionProps).join(", ");
    output.transitionTimingFunction = "cubic-bezier(0.4, 0, 0.2, 1)";
    output.transitionDuration = speed ? typeof speed === "number" ? `${speed}ms` : speed : "150ms";
    return output;
  }

  // lib/scroll.ts
  var scroll_exports = {};
  __export(scroll_exports, {
    register: () => register14
  });
  function register14(method) {
    method("scroll", applyScrollOptions);
    method("scrollbar", applyCustomScrollbarOptions);
    method("overflow", applyOverflow);
  }
  function applyScrollOptions(css, options) {
    const result = { ...css };
    if (typeof options === "boolean") {
      return { ...css, overflow: options ? "scroll" : "hidden" };
    }
    if (options.x !== void 0) {
      result.overflowX = options.x ? "scroll" : "hidden";
    }
    if (options.y !== void 0) {
      result.overflowY = options.y ? "scroll" : "hidden";
    }
    return result;
  }
  function applyCustomScrollbarOptions(css, options) {
    const scrollWidth = options.width || "5px";
    const scrollRadius = options.borderRadius || "10px";
    return {
      ...css,
      overflow: "hidden",
      "&:hover": {
        overflowX: options.x ? "overlay" : "hidden",
        overflowY: options.y ? "overlay" : "hidden"
      },
      "&::-webkit-scrollbar": {
        width: scrollWidth,
        opacity: "0",
        background: "transparent",
        position: "absolute",
        zIndex: "9999999"
      },
      "&::-webkit-scrollbar-track": {
        background: options.trackBg || ""
      },
      "&::-webkit-scrollbar-thumb": {
        background: options.thumbBg || "rgba(59, 63, 67)",
        borderRadius: scrollRadius,
        width: `calc(${scrollWidth} - 0.5px)`
      },
      "&::-webkit-scrollbar:hover": {
        opacity: "1"
      },
      ...options.hoverOnly ? {
        "&:not(:hover)": {
          "&::-webkit-scrollbar-thumb": {
            background: "transparent"
          }
        }
      } : {}
    };
  }
  function applyOverflow(css, value) {
    if (typeof value === "string") {
      return { ...css, overflow: value };
    }
    if (typeof value === "boolean") {
      return { ...css, overflow: value ? "visible" : "hidden" };
    }
    const result = { ...css };
    if (value.x !== void 0) {
      result.overflowX = value.x;
    }
    if (value.y !== void 0) {
      result.overflowY = value.y;
    }
    return result;
  }

  // lib/flex.ts
  var flex_exports = {};
  __export(flex_exports, {
    register: () => register15
  });
  function register15(method) {
    method("flex", applyFlex);
    method("hstack", applyHstack);
    method("vstack", applyVstack);
    method("center", applyCenter);
  }
  function applyFlex(input, options = {}) {
    let output = { ...input, display: "flex" };
    if (options.direction)
      output.flexDirection = options.direction;
    if (options.justify)
      output.justifyContent = options.justify;
    if (options.items)
      output.alignItems = options.items;
    if (options.wrap)
      output.flexWrap = options.wrap;
    if (options.grow !== void 0)
      output.flexGrow = options.grow;
    if (options.shrink !== void 0)
      output.flexShrink = options.shrink;
    if (options.basis !== void 0)
      output.flexBasis = options.basis;
    if (options.align) {
      output = applyFlexAlignOptions(output, options.align);
    }
    return output;
  }
  function applyHstack(input, options = {}) {
    return applyFlex(input, { direction: "row", ...options });
  }
  function applyVstack(input, options = {}) {
    return applyFlex(input, { direction: "column", ...options });
  }
  function applyCenter(input, options = {}) {
    return applyFlex(input, {
      items: "center",
      justify: "center",
      ...options
    });
  }

  // lib/selectors.ts
  var selectors_exports = {};
  __export(selectors_exports, {
    register: () => register16
  });
  function register16(method) {
    method("onHover", applyHover);
    method("onFocus", applyFocus);
    method("onActive", applyActive);
    method("before", applyBefore);
    method("after", applyAfter);
    method("attr", applyAttr);
  }
  function applyHover(css, styles) {
    return applySelector.call(this, css, "&:hover", styles);
  }
  function applyFocus(css, styles) {
    return applySelector.call(this, css, "&:focus", styles);
  }
  function applyActive(css, styles) {
    return applySelector.call(this, css, "&:active", styles);
  }
  function applyBefore(css, styles) {
    return applySelector.call(this, css, "&::before", styles);
  }
  function applyAfter(css, styles) {
    return applySelector.call(this, css, "&::after", styles);
  }
  function applySelector(css, selector, styles) {
    this.select(selector, styles);
    return {
      ...css
    };
  }
  function applyAttr(css, attrName, optionsOrChain, chainOrRawStyle) {
    let options;
    let styles = chainOrRawStyle;
    if (arguments.length === 3) {
      options = void 0;
      styles = optionsOrChain;
    } else {
      options = optionsOrChain;
    }
    let selector = `&[${attrName}`;
    if (options) {
      if (options.eq !== void 0) {
        selector += `="${options.eq}"`;
      } else if (options.contains !== void 0) {
        selector += `*="${options.contains}"`;
      } else if (options.startsWith !== void 0) {
        selector += `^="${options.startsWith}"`;
      } else if (options.endsWith !== void 0) {
        selector += `$="${options.endsWith}"`;
      } else if (options.includes !== void 0) {
        selector += `~="${options.includes}"`;
      } else if (options.dashMatch !== void 0) {
        selector += `|="${options.dashMatch}"`;
      }
      if (options.caseSensitive !== void 0) {
        selector += options.caseSensitive ? " s" : " i";
      }
    }
    selector += "]";
    this.select(selector, styles);
    return css;
  }

  // lib/grid.ts
  var grid_exports = {};
  __export(grid_exports, {
    register: () => register17
  });
  function register17(method) {
    method("grid", applyGrid);
    method("columns", applyColumns);
    method("rows", applyRows);
  }
  function applyGrid(css, options) {
    return applyGridOptions(css, { ...options });
  }
  function applyColumns(css, template, options = {}) {
    const columns = typeof template === "number" ? `repeat(${template}, 1fr)` : template;
    return applyGridOptions(css, { columns, ...options });
  }
  function applyRows(css, template, options = {}) {
    const rows = typeof template === "number" ? `repeat(${template}, 1fr)` : template;
    return applyGridOptions(css, { rows, ...options });
  }
  function applyGridOptions(css, options) {
    let output = { ...css, display: "grid" };
    const propertyMap = {
      gap: "gap",
      columnGap: "columnGap",
      rowGap: "rowGap",
      autoFlow: "gridAutoFlow",
      autoColumns: "gridAutoColumns",
      autoRows: "gridAutoRows",
      columns: "gridTemplateColumns",
      rows: "gridTemplateRows",
      templateAreas: "gridTemplateAreas",
      alignContent: "alignContent",
      justifyContent: "justifyContent",
      alignItems: "alignItems",
      justifyItems: "justifyItems"
    };
    for (const [key, value] of Object.entries(options)) {
      if (key in propertyMap && value !== void 0) {
        output[propertyMap[key]] = value;
      }
    }
    if (options.align) {
      output = applyGridAlignOptions(output, options.align);
    }
    return output;
  }

  // lib/responsive.ts
  var responsive_exports = {};
  __export(responsive_exports, {
    register: () => register18
  });
  function register18(method) {
    method("geometry", applyGeometry);
    method("media", applyMedia);
    method("mobile", applyMobile);
    method("desktop", applyDesktop);
    method("portrait", applyPortrait);
    method("landscape", applyLandscape);
  }
  function applyGeometry(css, options, styles) {
    const mediaQuery = convertToMediaQuery(options);
    if (mediaQuery) {
      this.select(`@media ${mediaQuery}`, styles);
    }
    return { ...css };
  }
  function applyMedia(css, breakpoint, styles) {
    this.select(`@media ${breakpoint}`, styles);
    return { ...css };
  }
  function applyMobile(css, styles) {
    return applyMediaQueryOptions.call(this, css, { maxWidth: 767 }, styles);
  }
  function applyDesktop(css, styles) {
    return applyMediaQueryOptions.call(this, css, { minWidth: 768 }, styles);
  }
  function applyPortrait(css, styles) {
    return applyMediaQueryOptions.call(
      this,
      css,
      { orientation: "portrait" },
      styles
    );
  }
  function applyLandscape(css, styles) {
    return applyMediaQueryOptions.call(
      this,
      css,
      { orientation: "landscape" },
      styles
    );
  }
  function applyMediaQueryOptions(css, options, styles) {
    const mediaQuery = convertToMediaQuery(options);
    this.select(`@media ${mediaQuery}`, styles);
    return { ...css };
  }
  function convertToMediaQuery(options) {
    const conditions = [];
    if ("minWidth" in options)
      conditions.push(`(min-width: ${options.minWidth}px)`);
    if ("maxWidth" in options)
      conditions.push(`(max-width: ${options.maxWidth}px)`);
    if ("minHeight" in options)
      conditions.push(`(min-height: ${options.minHeight}px)`);
    if ("maxHeight" in options)
      conditions.push(`(max-height: ${options.maxHeight}px)`);
    if ("orientation" in options)
      conditions.push(`(orientation: ${options.orientation})`);
    return conditions.join(" and ");
  }

  // lib/transform.ts
  var transform_exports = {};
  __export(transform_exports, {
    register: () => register19
  });
  function register19(method) {
    method("transform", applyTransform);
    method("rotate", applyRotate);
    method("scale", applyScale);
    method("translate", applyTranslate);
    method("skew", applySkew);
    method("perspective", applyPerspective);
  }
  function applyTransform(css, value) {
    return { ...css, transform: value };
  }
  function applyRotate(css, angle) {
    const value = typeof angle === "number" ? `${angle}deg` : angle;
    return {
      ...css,
      transform: `${css.transform || ""} rotate(${value})`.trim()
    };
  }
  function applyScale(css, x2, y2) {
    const value = y2 === void 0 ? `${x2}` : `${x2}, ${y2}`;
    return { ...css, transform: `${css.transform || ""} scale(${value})`.trim() };
  }
  function applyTranslate(css, x2, y2) {
    const xValue = typeof x2 === "number" ? `${x2}px` : x2;
    const yValue = y2 === void 0 ? "" : typeof y2 === "number" ? `${y2}px` : y2;
    const value = yValue ? `${xValue}, ${yValue}` : xValue;
    return {
      ...css,
      transform: `${css.transform || ""} translate(${value})`.trim()
    };
  }
  function applySkew(css, x2, y2) {
    const xValue = typeof x2 === "number" ? `${x2}deg` : x2;
    const yValue = y2 === void 0 ? "" : typeof y2 === "number" ? `${y2}deg` : y2;
    const value = yValue ? `${xValue}, ${yValue}` : xValue;
    return { ...css, transform: `${css.transform || ""} skew(${value})`.trim() };
  }
  function applyPerspective(css, value) {
    const perspectiveValue = typeof value === "number" ? `${value}px` : value;
    return {
      ...css,
      transform: `${css.transform || ""} perspective(${perspectiveValue})`.trim()
    };
  }

  // lib/backdrop.ts
  var backdrop_exports = {};
  __export(backdrop_exports, {
    register: () => register20
  });
  function register20(method) {
    method("backdrop", applyBackdrop);
  }
  var defaultBackdropOptions = {
    blur: 20,
    saturate: "190%",
    contrast: "70%",
    brightness: "80%"
  };
  function applyBackdrop(css, options) {
    const backdrop = { ...defaultBackdropOptions, ...options };
    return {
      ...css,
      backdropFilter: `blur(${toPx(backdrop.blur)}) saturate(${toPx(backdrop.saturate)}) contrast(${toPx(backdrop.contrast)}) brightness(${toPx(backdrop.brightness)})`
    };
  }

  // lib/gradient.ts
  var gradient_exports = {};
  __export(gradient_exports, {
    register: () => register21
  });
  function register21(method) {
    method("gradient", applyGradient);
  }
  function applyGradient(css, direction, colors, options) {
    const gradientValue = buildGradientValue(direction, colors, options);
    return {
      ...css,
      backgroundImage: gradientValue
    };
  }
  function buildGradientValue(direction, colors, options) {
    const colorString = buildColorString(colors);
    if (direction === "radial") {
      return buildRadialGradient(colorString, options);
    }
    if (direction === "conic") {
      return buildConicGradient(colorString, options);
    }
    return buildLinearGradient(direction, colorString);
  }
  function buildColorString(colors) {
    return colors.map((color) => {
      if (typeof color === "string") {
        return color;
      }
      return color.stop ? `${color.color} ${color.stop}` : color.color;
    }).join(", ");
  }
  function buildLinearGradient(direction, colorString) {
    const directionMap = {
      "to-top": "to top",
      "to-top-right": "to top right",
      "to-right": "to right",
      "to-bottom-right": "to bottom right",
      "to-bottom": "to bottom",
      "to-bottom-left": "to bottom left",
      "to-left": "to left",
      "to-top-left": "to top left"
    };
    const cssDirection = directionMap[direction] || direction;
    return `linear-gradient(${cssDirection}, ${colorString})`;
  }
  function buildRadialGradient(colorString, options) {
    const parts = [];
    if (options?.shape) {
      parts.push(options.shape);
    }
    if (options?.size) {
      parts.push(options.size);
    }
    if (options?.center) {
      const centerMap = {
        "top-left": "top left",
        "top-right": "top right",
        "bottom-left": "bottom left",
        "bottom-right": "bottom right"
      };
      const center = centerMap[options.center] || options.center;
      parts.push(`at ${center}`);
    }
    const optionsString = parts.length > 0 ? `${parts.join(" ")}, ` : "";
    return `radial-gradient(${optionsString}${colorString})`;
  }
  function buildConicGradient(colorString, options) {
    const parts = [];
    if (options?.from !== void 0) {
      const fromValue = typeof options.from === "number" ? `${options.from}deg` : options.from;
      parts.push(`from ${fromValue}`);
    }
    if (options?.center) {
      parts.push(`at ${options.center}`);
    }
    const optionsString = parts.length > 0 ? `${parts.join(" ")}, ` : "";
    return `conic-gradient(${optionsString}${colorString})`;
  }

  // lib/chain.ts
  var modules = [
    align_exports,
    aspect_exports,
    border_exports,
    box_exports,
    colors_exports,
    cursor_exports,
    size_exports,
    outline_exports,
    shadow_exports,
    spacing_exports,
    text_exports,
    transition_exports,
    scroll_exports,
    flex_exports,
    selectors_exports,
    responsive_exports,
    grid_exports,
    transform_exports,
    accessibility_exports,
    backdrop_exports,
    gradient_exports
  ];
  function createChain(stitches, elementTag, startingValues) {
    let tree = { ...startingValues?.tree };
    const variants = { ...startingValues?.variants };
    const children = { ...startingValues?.children };
    const chain = {
      extend: (newElementTag) => {
        return createChain(stitches, newElementTag || elementTag, {
          tree,
          variants,
          children
        });
      },
      compile,
      // @ts-ignore
      select: (selector, subchain) => {
        children[selector] = subchain;
        return chain;
      },
      // In your element method:
      element: (rawCSS) => {
        const component = stitches.styled(elementTag || "div", {
          ...chain.compile(),
          ...rawCSS
        });
        return component;
      },
      variant: (name, value, subchain) => {
        if (!subchain) {
          subchain = value;
          value = true;
        }
        if (variants[name]) {
          variants[name].push({ chain: subchain, value });
        } else {
          variants[name] = [
            {
              value,
              chain: subchain
            }
          ];
        }
        return chain;
      },
      css: (rawCSS) => {
        update(rawCSS);
        return chain;
      }
    };
    modules.forEach((m2) => m2.register(addMethod));
    return chain;
    function addMethod(name, fn) {
      chain[name] = (...args) => {
        update(fn.apply(chain, [tree, ...args]));
        return chain;
      };
    }
    function update(updates) {
      tree = { ...tree, ...updates };
    }
    function compile() {
      const output = {
        ...tree
      };
      output.variants = {};
      for (const name in variants) {
        output.variants[name] = {};
        for (const variant of variants[name]) {
          output.variants[name][variant.value] = typeof variant.chain.compile === "function" ? variant.chain.compile() : variant.chain;
        }
      }
      for (const selector in children) {
        output[selector] = typeof children[selector].compile === "function" ? children[selector].compile() : children[selector];
      }
      return output;
    }
  }

  // lib/breakpoints.ts
  var breakpoints = {
    "max-2xs": "(max-width: 359px)",
    "min-2xs": "(min-width: 360px)",
    "max-xs": "(max-width: 479px)",
    "min-xs": "(min-width: 480px)",
    "max-sm": "(max-width: 639px)",
    "min-sm": "(min-width: 640px)",
    "max-md": "(max-width: 767px)",
    "min-md": "(min-width: 768px)",
    "max-lg": "(max-width: 1023px)",
    "min-lg": "(min-width: 1024px)",
    "max-xl": "(max-width: 1279px)",
    "min-xl": "(min-width: 1280px)",
    "max-2xl": "(max-width: 1535px)",
    "min-2xl": "(min-width: 1536px)",
    // Device aliases
    mobile: "(max-width: 767px)",
    tablet: "(min-width: 768px) and (max-width: 1023px)",
    desktop: "(min-width: 1024px)",
    // Specific device aliases
    "iphone-se": "(max-width: 375px)",
    iphone: "(max-width: 428px)",
    // Covers most iPhone models
    ipad: "(min-width: 768px) and (max-width: 1024px)",
    "ipad-pro": "(min-width: 1024px) and (max-width: 1366px)",
    // Orientation aliases
    portrait: "(orientation: portrait)",
    landscape: "(orientation: landscape)",
    // High-resolution screens
    retina: "(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
  };

  // lib/themes/tailwind.ts
  var tailwindColors = {
    slate50: "#f8fafc",
    slate100: "#f1f5f9",
    slate200: "#e2e8f0",
    slate300: "#cbd5e1",
    slate400: "#94a3b8",
    slate500: "#64748b",
    slate600: "#475569",
    slate700: "#334155",
    slate800: "#1e293b",
    slate900: "#0f172a",
    slate950: "#020617",
    gray50: "#f9fafb",
    gray100: "#f3f4f6",
    gray200: "#e5e7eb",
    gray300: "#d1d5db",
    gray400: "#9ca3af",
    gray500: "#6b7280",
    gray600: "#4b5563",
    gray700: "#374151",
    gray800: "#1f2937",
    gray900: "#111827",
    gray950: "#030712",
    zinc50: "#fafafa",
    zinc100: "#f4f4f5",
    zinc200: "#e4e4e7",
    zinc300: "#d4d4d8",
    zinc400: "#a1a1aa",
    zinc500: "#71717a",
    zinc600: "#52525b",
    zinc700: "#3f3f46",
    zinc800: "#27272a",
    zinc900: "#18181b",
    zinc950: "#09090b",
    neutral50: "#fafafa",
    neutral100: "#f5f5f5",
    neutral200: "#e5e5e5",
    neutral300: "#d4d4d4",
    neutral400: "#a3a3a3",
    neutral500: "#737373",
    neutral600: "#525252",
    neutral700: "#404040",
    neutral800: "#262626",
    neutral900: "#171717",
    neutral950: "#0a0a0a",
    stone50: "#fafaf9",
    stone100: "#f5f5f4",
    stone200: "#e7e5e4",
    stone300: "#d6d3d1",
    stone400: "#a8a29e",
    stone500: "#78716c",
    stone600: "#57534e",
    stone700: "#44403c",
    stone800: "#292524",
    stone900: "#1c1917",
    stone950: "#0c0a09",
    red50: "#fef2f2",
    red100: "#fee2e2",
    red200: "#fecaca",
    red300: "#fca5a5",
    red400: "#f87171",
    red500: "#ef4444",
    red600: "#dc2626",
    red700: "#b91c1c",
    red800: "#991b1b",
    red900: "#7f1d1d",
    red950: "#450a0a",
    orange50: "#fff7ed",
    orange100: "#ffedd5",
    orange200: "#fed7aa",
    orange300: "#fdba74",
    orange400: "#fb923c",
    orange500: "#f97316",
    orange600: "#ea580c",
    orange700: "#c2410c",
    orange800: "#9a3412",
    orange900: "#7c2d12",
    orange950: "#431407",
    amber50: "#fffbeb",
    amber100: "#fef3c7",
    amber200: "#fde68a",
    amber300: "#fcd34d",
    amber400: "#fbbf24",
    amber500: "#f59e0b",
    amber600: "#d97706",
    amber700: "#b45309",
    amber800: "#92400e",
    amber900: "#78350f",
    amber950: "#451a03",
    yellow50: "#fefce8",
    yellow100: "#fef9c3",
    yellow200: "#fef08a",
    yellow300: "#fde047",
    yellow400: "#facc15",
    yellow500: "#eab308",
    yellow600: "#ca8a04",
    yellow700: "#a16207",
    yellow800: "#854d0e",
    yellow900: "#713f12",
    yellow950: "#422006",
    lime50: "#f7fee7",
    lime100: "#ecfccb",
    lime200: "#d9f99d",
    lime300: "#bef264",
    lime400: "#a3e635",
    lime500: "#84cc16",
    lime600: "#65a30d",
    lime700: "#4d7c0f",
    lime800: "#3f6212",
    lime900: "#365314",
    lime950: "#1a2e05",
    green50: "#f0fdf4",
    green100: "#dcfce7",
    green200: "#bbf7d0",
    green300: "#86efac",
    green400: "#4ade80",
    green500: "#22c55e",
    green600: "#16a34a",
    green700: "#15803d",
    green800: "#166534",
    green900: "#14532d",
    green950: "#052e16",
    emerald50: "#ecfdf5",
    emerald100: "#d1fae5",
    emerald200: "#a7f3d0",
    emerald300: "#6ee7b7",
    emerald400: "#34d399",
    emerald500: "#10b981",
    emerald600: "#059669",
    emerald700: "#047857",
    emerald800: "#065f46",
    emerald900: "#064e3b",
    emerald950: "#022c22",
    teal50: "#f0fdfa",
    teal100: "#ccfbf1",
    teal200: "#99f6e4",
    teal300: "#5eead4",
    teal400: "#2dd4bf",
    teal500: "#14b8a6",
    teal600: "#0d9488",
    teal700: "#0f766e",
    teal800: "#115e59",
    teal900: "#134e4a",
    teal950: "#042f2e",
    cyan50: "#ecfeff",
    cyan100: "#cffafe",
    cyan200: "#a5f3fc",
    cyan300: "#67e8f9",
    cyan400: "#22d3ee",
    cyan500: "#06b6d4",
    cyan600: "#0891b2",
    cyan700: "#0e7490",
    cyan800: "#155e75",
    cyan900: "#164e63",
    cyan950: "#083344",
    sky50: "#f0f9ff",
    sky100: "#e0f2fe",
    sky200: "#bae6fd",
    sky300: "#7dd3fc",
    sky400: "#38bdf8",
    sky500: "#0ea5e9",
    sky600: "#0284c7",
    sky700: "#0369a1",
    sky800: "#075985",
    sky900: "#0c4a6e",
    sky950: "#082f49",
    blue50: "#eff6ff",
    blue100: "#dbeafe",
    blue200: "#bfdbfe",
    blue300: "#93c5fd",
    blue400: "#60a5fa",
    blue500: "#3b82f6",
    blue600: "#2563eb",
    blue700: "#1d4ed8",
    blue800: "#1e40af",
    blue900: "#1e3a8a",
    blue950: "#172554",
    indigo50: "#eef2ff",
    indigo100: "#e0e7ff",
    indigo200: "#c7d2fe",
    indigo300: "#a5b4fc",
    indigo400: "#818cf8",
    indigo500: "#6366f1",
    indigo600: "#4f46e5",
    indigo700: "#4338ca",
    indigo800: "#3730a3",
    indigo900: "#312e81",
    indigo950: "#1e1b4b",
    violet50: "#f5f3ff",
    violet100: "#ede9fe",
    violet200: "#ddd6fe",
    violet300: "#c4b5fd",
    violet400: "#a78bfa",
    violet500: "#8b5cf6",
    violet600: "#7c3aed",
    violet700: "#6d28d9",
    violet800: "#5b21b6",
    violet900: "#4c1d95",
    violet950: "#2e1065",
    purple50: "#faf5ff",
    purple100: "#f3e8ff",
    purple200: "#e9d5ff",
    purple300: "#d8b4fe",
    purple400: "#c084fc",
    purple500: "#a855f7",
    purple600: "#9333ea",
    purple700: "#7e22ce",
    purple800: "#6b21a8",
    purple900: "#581c87",
    purple950: "#3b0764",
    fuchsia50: "#fdf4ff",
    fuchsia100: "#fae8ff",
    fuchsia200: "#f5d0fe",
    fuchsia300: "#f0abfc",
    fuchsia400: "#e879f9",
    fuchsia500: "#d946ef",
    fuchsia600: "#c026d3",
    fuchsia700: "#a21caf",
    fuchsia800: "#86198f",
    fuchsia900: "#701a75",
    fuchsia950: "#4a044e",
    pink50: "#fdf2f8",
    pink100: "#fce7f3",
    pink200: "#fbcfe8",
    pink300: "#f9a8d4",
    pink400: "#f472b6",
    pink500: "#ec4899",
    pink600: "#db2777",
    pink700: "#be185d",
    pink800: "#9d174d",
    pink900: "#831843",
    pink950: "#500724",
    rose50: "#fff1f2",
    rose100: "#ffe4e6",
    rose200: "#fecdd3",
    rose300: "#fda4af",
    rose400: "#fb7185",
    rose500: "#f43f5e",
    rose600: "#e11d48",
    rose700: "#be123c",
    rose800: "#9f1239",
    rose900: "#881337",
    rose950: "#4c0519"
  };

  // lib/tokens.ts
  var tokens = {
    colors: {
      ...tailwindColors
    },
    space: {},
    fontSizes: {
      xs: "0.75rem",
      // 12px
      sm: "0.875rem",
      // 14px
      base: "1rem",
      // 16px
      lg: "1.125rem",
      // 18px
      xl: "1.25rem",
      // 20px
      "2xl": "1.5rem",
      // 24px
      "3xl": "1.875rem",
      // 30px
      "4xl": "2.25rem",
      // 36px
      "5xl": "3rem",
      // 48px
      "6xl": "3.75rem",
      // 60px
      "7xl": "4.5rem",
      // 72px
      "8xl": "6rem",
      // 96px
      "9xl": "8rem"
      // 128px
    },
    fonts: {
      sans: '"Inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      mono: '"Berkeley Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    },
    fontWeights: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    lineHeights: {
      3: "0.75rem",
      // 12px
      4: "1rem",
      // 16px
      5: "1.25rem",
      // 20px
      6: "1.5rem",
      // 24px
      7: "1.75rem",
      // 28px
      8: "2rem",
      // 32px
      9: "2.25rem",
      // 36px
      10: "2.5rem",
      // 40px
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2"
    },
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },
    radii: {
      sm: "0.25rem",
      // 4px
      md: "0.375rem",
      // 6px
      lg: "0.5rem",
      // 8px
      xl: "0.75rem",
      // 12px
      "2xl": "1rem",
      // 16px
      "3xl": "1.5rem",
      // 24px
      full: "9999px"
    },
    zIndices: {
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50"
    },
    transitions: {}
  };

  // lib/index.ts
  var defaultInstance = init();
  var { View, style, Frame, ScrollView, VStack, HStack, Grid, Spacer } = defaultInstance;
  function init(options) {
    const stitches = q({
      media: {
        ...breakpoints,
        ...options?.breakpoints
      },
      theme: options?.tokens || tokens
    });
    const chain = (tag) => createChain(stitches, tag);
    const Spacer2 = chain("div").flex({
      grow: 1
    }).element();
    return {
      /**
       * Creates a new Chain instance for a div or specified element.
       *
       * @param elementTag - Optional HTML tag (default: 'div')
       * @returns A new Chain instance
       *
       * @example
       * const MyComponent = View().bg('red').text('white').element();
       */
      View: (elementTag) => {
        return chain(elementTag || "div");
      },
      /**
       * Creates a new Chain instance for a div element.
       *
       * @returns A new Chain instance
       *
       * @example
       * const MyStyle = style().padding(20).margin(10);
       */
      style: (tagOrElement) => {
        return chain(tagOrElement);
      },
      /**
       * Creates a flexible frame layout with customizable dimensions and alignment. Frames center their content by default.
       *
       * @param widthOrBoxOptions - Width or BoxOptions for the frame
       * @param heightOrBoxOptions - Height or BoxOptions for the frame
       * @param align - Optional alignment options
       * @returns A new Chain instance configured as a frame
       *
       * @example
       * const MyFrame = Frame(200, 200).bg('red').element();
       * const MyCustomFrame = Frame(200, { opacity: 0.5 }).element();
       * const MyAlignedFrame = Frame(200, 200, { x: "center", y: "end" }).element();
       */
      Frame: (widthOrBoxOptions, heightOrBoxOptions, align) => {
        let width;
        let height;
        let boxOptions = {};
        if (typeof widthOrBoxOptions === "object") {
          boxOptions = widthOrBoxOptions;
        } else {
          width = widthOrBoxOptions;
        }
        if (typeof heightOrBoxOptions === "object") {
          boxOptions = { ...boxOptions, ...heightOrBoxOptions };
        } else {
          height = heightOrBoxOptions;
        }
        const c2 = chain("div").vstack().box({ ...boxOptions, width, height });
        if (!align) {
          return c2.align("center");
        }
        if (typeof align === "string") {
          return c2.align(align);
        }
        if (Array.isArray(align)) {
          return c2.align(align);
        }
        return c2.align({
          horizontal: align.horizontal || align.x || "center",
          vertical: align.vertical || align.y || "center"
        });
      },
      /**
       * Creates a scrollable view with customizable scroll behavior.
       *
       * @param options - Scroll options for x and y axes
       * @returns A new Chain instance configured as a scrollable view
       *
       * @example
       * const VerticalScroll = ScrollView({ y: true }).height(300).padding(20).element();
       * const HorizontalScroll = ScrollView({ x: true }).width(500).padding(20).element();
       */
      ScrollView: (options2 = { x: true, y: true }) => {
        return chain("div").scroll(options2);
      },
      /**
       * Creates a vertically stacked layout.
       *
       * @param widthOrOptions - Width or BoxOptions for the stack
       * @param heightOrOptions - Height or BoxOptions for the stack
       * @param options - Additional BoxOptions
       * @returns A new Chain instance with vertical stack styles
       *
       * @example
       * const SimpleVStack = VStack(100, 100).element();
       * const AspectVStack = VStack(200, { aspect: 1 }).element();
       * const ComplexVStack = VStack(100, 200, { maxHeight: "100%" }).element();
       */
      VStack: (widthOrOptions, heightOrOptions, options2) => {
        let width;
        let height;
        let boxOptions = {};
        if (typeof widthOrOptions === "object") {
          boxOptions = widthOrOptions;
        } else {
          width = widthOrOptions;
        }
        if (typeof heightOrOptions === "object") {
          boxOptions = { ...boxOptions, ...heightOrOptions };
        } else {
          height = heightOrOptions;
        }
        if (options2) {
          boxOptions = { ...boxOptions, ...options2 };
        }
        return chain("div").vstack().box({ ...boxOptions, width, height });
      },
      /**
       * Creates a horizontally stacked layout.
       *
       * @param widthOrOptions - Width or BoxOptions for the stack
       * @param heightOrOptions - Height or BoxOptions for the stack
       * @param options - Additional BoxOptions
       * @returns A new Chain instance with horizontal stack styles
       *
       * @example
       * const SimpleHStack = HStack(100, 100).element();
       * const MaxWidthHStack = HStack(100, { maxWidth: "500px" }).element();
       * const ComplexHStack = HStack(200, 200, { maxHeight: "100%" }).element();
       */
      HStack: (widthOrOptions, heightOrOptions, options2) => {
        let width;
        let height;
        let boxOptions = {};
        if (typeof widthOrOptions === "object") {
          boxOptions = widthOrOptions;
        } else {
          width = widthOrOptions;
        }
        if (typeof heightOrOptions === "object") {
          boxOptions = { ...boxOptions, ...heightOrOptions };
        } else {
          height = heightOrOptions;
        }
        if (options2) {
          boxOptions = { ...boxOptions, ...options2 };
        }
        return chain("div").hstack().box({ ...boxOptions, width, height });
      },
      /**
       * Creates a grid layout.
       *
       * @param options - Grid options
       * @returns A new Chain instance with grid styles
       *
       * @example
       * const SimpleGrid = Grid({ columns: 3, gap: 10 }).element();
       * const ComplexGrid = Grid({ columns: '1fr 2fr 1fr', rows: '100px auto' }).element();
       */
      Grid: (options2) => {
        return chain("div").grid(options2);
      },
      /**
       * Creates a flexible spacer that expands to fill available space.
       * Useful for creating space between elements in a layout.
       *
       * @returns A new Chain instance configured as a spacer
       *
       * @example
       * import { HStack, Spacer } from "tile-css"
       *
       * const Container = HStack().element()
       *
       * <Container>
       *   <span>Left</span>
       *   <Spacer />
       *   <span>Right</span>
       * </Container>
       *
       */
      Spacer: Spacer2
    };
  }
  return __toCommonJS(lib_exports);
})();
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
