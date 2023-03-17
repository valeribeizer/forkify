// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"d8XZh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _esRegexpFlagsJs = require("core-js/modules/es.regexp.flags.js");
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _runtime = require("regenerator-runtime/runtime");
var _modelJs = require("./model.js");
var _recipeViewJs = require("./views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarksViewJs = require("./views/bookmarksView.js");
var _bookmarksViewJsDefault = parcelHelpers.interopDefault(_bookmarksViewJs);
var _addRecipeViewJs = require("./views/addRecipeView.js");
var _addRecipeViewJsDefault = parcelHelpers.interopDefault(_addRecipeViewJs);
var _configJs = require("./config.js");
const { async  } = require("87bc29d241c0a60");
if (module.hot) module.hot.accept();
const controlRecipes = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        (0, _recipeViewJsDefault.default).renderSpinner();
        (0, _resultsViewJsDefault.default).update(_modelJs.getSearchResultPage());
        (0, _bookmarksViewJsDefault.default).update(_modelJs.state.bookmarks);
        // 1. loading recipe
        await _modelJs.loadRecipe(id);
        // 2. rendering recipe
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
    } catch (err) {
        (0, _recipeViewJsDefault.default).renderError();
    }
};
const controlSearchResults = async function() {
    try {
        (0, _resultsViewJsDefault.default).renderSpinner();
        // searching results
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        // loading results
        await _modelJs.loadSearchResults(query);
        // rendering results
        (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultPage());
        // rendering pagination buttons
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (err) {
        console.log(err);
    }
};
const controlPagination = function(goToPage) {
    (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultPage(goToPage));
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
};
const controlServings = function(newServings) {
    // update the recipe servings
    _modelJs.updateServings(newServings);
    // update the recipe view
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
};
const controlAddBookmark = function() {
    // add/remove a bookmark
    if (!_modelJs.state.recipe.bookmarked) _modelJs.addBookmark(_modelJs.state.recipe);
    else _modelJs.deleteBookmark(_modelJs.state.recipe.id);
    // update view
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
    // render bookmarks
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlBookmarks = function() {
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlAddRecipe = async function(newRecipe) {
    try {
        (0, _addRecipeViewJsDefault.default).renderSpinner();
        await _modelJs.uploadRecipe(newRecipe);
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
        (0, _addRecipeViewJsDefault.default).renderMessage();
        (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
        window.history.pushState(null, "", `#${_modelJs.state.recipe.id}`);
        setTimeout(function() {
            (0, _addRecipeViewJsDefault.default).toggleWindow();
        }, (0, _configJs.MODAL_CLOSE_SEC) * 1000);
    } catch (err) {
        console.error(err);
        (0, _addRecipeViewJsDefault.default).renderError(err.message);
    }
};
const init = function() {
    (0, _bookmarksViewJsDefault.default).addHandlerRender(controlBookmarks);
    (0, _recipeViewJsDefault.default).addHandlerRender(controlRecipes);
    (0, _recipeViewJsDefault.default).addHandlerUpdateServings(controlServings);
    (0, _recipeViewJsDefault.default).addHandlerAddBookmark(controlAddBookmark);
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchResults);
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
    (0, _addRecipeViewJsDefault.default).addHandlerUpload(controlAddRecipe);
};
init();

},{"87bc29d241c0a60":"dXNgZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","core-js/modules/es.regexp.flags.js":"gSXXb","core-js/modules/web.immediate.js":"49tUX","regenerator-runtime/runtime":"dXNgZ","./model.js":"Y4A21","./views/recipeView.js":"l60JC","./views/searchView.js":"9OQAM","./views/resultsView.js":"cSbZE","./views/paginationView.js":"6z7bi","./views/bookmarksView.js":"4Lqzq","./views/addRecipeView.js":"i6DNj","./config.js":"k5Hzs"}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next mehtod, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gSXXb":[function(require,module,exports) {
var global = require("6932488854e832");
var DESCRIPTORS = require("7664539c21cabe3c");
var defineBuiltInAccessor = require("d62f9189bd6ee5de");
var regExpFlags = require("8e0bda3988b5b1af");
var fails = require("2518259a6b2d1d88");
// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp = global.RegExp;
var RegExpPrototype = RegExp.prototype;
var FORCED = DESCRIPTORS && fails(function() {
    var INDICES_SUPPORT = true;
    try {
        RegExp(".", "d");
    } catch (error) {
        INDICES_SUPPORT = false;
    }
    var O = {};
    // modern V8 bug
    var calls = "";
    var expected = INDICES_SUPPORT ? "dgimsy" : "gimsy";
    var addGetter = function(key, chr) {
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        Object.defineProperty(O, key, {
            get: function() {
                calls += chr;
                return true;
            }
        });
    };
    var pairs = {
        dotAll: "s",
        global: "g",
        ignoreCase: "i",
        multiline: "m",
        sticky: "y"
    };
    if (INDICES_SUPPORT) pairs.hasIndices = "d";
    for(var key in pairs)addGetter(key, pairs[key]);
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var result = Object.getOwnPropertyDescriptor(RegExpPrototype, "flags").get.call(O);
    return result !== expected || calls !== expected;
});
// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (FORCED) defineBuiltInAccessor(RegExpPrototype, "flags", {
    configurable: true,
    get: regExpFlags
});

},{"6932488854e832":"i8HOC","7664539c21cabe3c":"92ZIi","d62f9189bd6ee5de":"592rH","8e0bda3988b5b1af":"9bz1x","2518259a6b2d1d88":"hL6D2"}],"i8HOC":[function(require,module,exports) {
var global = arguments[3];
var check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();

},{}],"92ZIi":[function(require,module,exports) {
var fails = require("666fa6010cbd7418");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});

},{"666fa6010cbd7418":"hL6D2"}],"hL6D2":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"592rH":[function(require,module,exports) {
var makeBuiltIn = require("f35aa33f061e753f");
var defineProperty = require("122a1909798fb9f1");
module.exports = function(target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, {
        getter: true
    });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, {
        setter: true
    });
    return defineProperty.f(target, name, descriptor);
};

},{"f35aa33f061e753f":"cTB4k","122a1909798fb9f1":"iJR4w"}],"cTB4k":[function(require,module,exports) {
var uncurryThis = require("730f4982c17e5495");
var fails = require("a43ea8d8977f7578");
var isCallable = require("8c8792cbc53885b5");
var hasOwn = require("94787eec8c993d4f");
var DESCRIPTORS = require("5ac1cb8824ffc981");
var CONFIGURABLE_FUNCTION_NAME = require("9d0223d18563278e").CONFIGURABLE;
var inspectSource = require("d81fa70f769eabbe");
var InternalStateModule = require("87414333832526d7");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis("".slice);
var replace = uncurryThis("".replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === "Symbol(") name = "[" + replace($String(name), /^Symbol\(([^)]*)\)/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"730f4982c17e5495":"7GlkT","a43ea8d8977f7578":"hL6D2","8c8792cbc53885b5":"l3Kyn","94787eec8c993d4f":"gC2Q5","5ac1cb8824ffc981":"92ZIi","9d0223d18563278e":"l6Kgd","d81fa70f769eabbe":"9jh7O","87414333832526d7":"7AMlF"}],"7GlkT":[function(require,module,exports) {
var NATIVE_BIND = require("d49dc1371599963e");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"d49dc1371599963e":"i16Dq"}],"i16Dq":[function(require,module,exports) {
var fails = require("6242ad73e6588e30");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"6242ad73e6588e30":"hL6D2"}],"l3Kyn":[function(require,module,exports) {
var $documentAll = require("149494677b75b13");
var documentAll = $documentAll.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{"149494677b75b13":"5MHqB"}],"5MHqB":[function(require,module,exports) {
var documentAll = typeof document == "object" && document.all;
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== undefined;
module.exports = {
    all: documentAll,
    IS_HTMLDDA: IS_HTMLDDA
};

},{}],"gC2Q5":[function(require,module,exports) {
var uncurryThis = require("aa6ce20354cfa782");
var toObject = require("90a7c5f59245b467");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"aa6ce20354cfa782":"7GlkT","90a7c5f59245b467":"5cb35"}],"5cb35":[function(require,module,exports) {
var requireObjectCoercible = require("38aef32c5b268ed7");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"38aef32c5b268ed7":"fOR0B"}],"fOR0B":[function(require,module,exports) {
var isNullOrUndefined = require("720d2c8c363cc680");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
    return it;
};

},{"720d2c8c363cc680":"gM5ar"}],"gM5ar":[function(require,module,exports) {
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"l6Kgd":[function(require,module,exports) {
var DESCRIPTORS = require("16fcd8bd570a3f0a");
var hasOwn = require("9bd0375202ee50b9");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"16fcd8bd570a3f0a":"92ZIi","9bd0375202ee50b9":"gC2Q5"}],"9jh7O":[function(require,module,exports) {
var uncurryThis = require("a038a81caaa26977");
var isCallable = require("36adbaf217e4629a");
var store = require("ae33502d7a3c9710");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"a038a81caaa26977":"7GlkT","36adbaf217e4629a":"l3Kyn","ae33502d7a3c9710":"l4ncH"}],"l4ncH":[function(require,module,exports) {
var global = require("5f7b6e6b62e8478a");
var defineGlobalProperty = require("80cab6907b13fae6");
var SHARED = "__core-js_shared__";
var store = global[SHARED] || defineGlobalProperty(SHARED, {});
module.exports = store;

},{"5f7b6e6b62e8478a":"i8HOC","80cab6907b13fae6":"ggjnO"}],"ggjnO":[function(require,module,exports) {
var global = require("99b3c3c08da4918c");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"99b3c3c08da4918c":"i8HOC"}],"7AMlF":[function(require,module,exports) {
var NATIVE_WEAK_MAP = require("a8c15835bf06e9b1");
var global = require("5f03770663d292f1");
var isObject = require("ad598fa3ad5c851d");
var createNonEnumerableProperty = require("24996392e2e22b44");
var hasOwn = require("6a3e096272e1ff19");
var shared = require("c89b755a34d2157c");
var sharedKey = require("820ad90f3cefc5f2");
var hiddenKeys = require("1107b018e58e3e00");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"a8c15835bf06e9b1":"2PZTl","5f03770663d292f1":"i8HOC","ad598fa3ad5c851d":"Z0pBo","24996392e2e22b44":"8CL42","6a3e096272e1ff19":"gC2Q5","c89b755a34d2157c":"l4ncH","820ad90f3cefc5f2":"eAjGz","1107b018e58e3e00":"661m4"}],"2PZTl":[function(require,module,exports) {
var global = require("c5dd2bf9cd72e5d1");
var isCallable = require("8c7098a040732c9f");
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"c5dd2bf9cd72e5d1":"i8HOC","8c7098a040732c9f":"l3Kyn"}],"Z0pBo":[function(require,module,exports) {
var isCallable = require("66a943f5dae59e82");
var $documentAll = require("89a32851a4a449e6");
var documentAll = $documentAll.all;
module.exports = $documentAll.IS_HTMLDDA ? function(it) {
    return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
} : function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"66a943f5dae59e82":"l3Kyn","89a32851a4a449e6":"5MHqB"}],"8CL42":[function(require,module,exports) {
var DESCRIPTORS = require("dcf40b8387cec909");
var definePropertyModule = require("83116efea2b51227");
var createPropertyDescriptor = require("a8df73b162ed1aea");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"dcf40b8387cec909":"92ZIi","83116efea2b51227":"iJR4w","a8df73b162ed1aea":"1lpav"}],"iJR4w":[function(require,module,exports) {
var DESCRIPTORS = require("dc63290987455d75");
var IE8_DOM_DEFINE = require("23e91094b92a4443");
var V8_PROTOTYPE_DEFINE_BUG = require("e24e3b93ced5dacd");
var anObject = require("59d261134eb34096");
var toPropertyKey = require("f544abdc4a886275");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"dc63290987455d75":"92ZIi","23e91094b92a4443":"qS9uN","e24e3b93ced5dacd":"ka1Un","59d261134eb34096":"4isCr","f544abdc4a886275":"5XWKd"}],"qS9uN":[function(require,module,exports) {
var DESCRIPTORS = require("a8dd6f7ebd1f8787");
var fails = require("1b9fc51ef78d666c");
var createElement = require("13950c8778a6b439");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"a8dd6f7ebd1f8787":"92ZIi","1b9fc51ef78d666c":"hL6D2","13950c8778a6b439":"4bOHl"}],"4bOHl":[function(require,module,exports) {
var global = require("1faa9b1e1a227464");
var isObject = require("962406a0a6da29ed");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"1faa9b1e1a227464":"i8HOC","962406a0a6da29ed":"Z0pBo"}],"ka1Un":[function(require,module,exports) {
var DESCRIPTORS = require("68de76b63ca4f445");
var fails = require("43b0f46d578d0179");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype != 42;
});

},{"68de76b63ca4f445":"92ZIi","43b0f46d578d0179":"hL6D2"}],"4isCr":[function(require,module,exports) {
var isObject = require("c4c24517464d99af");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw $TypeError($String(argument) + " is not an object");
};

},{"c4c24517464d99af":"Z0pBo"}],"5XWKd":[function(require,module,exports) {
var toPrimitive = require("6b4fb3cf1e073552");
var isSymbol = require("da321fee1e172324");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"6b4fb3cf1e073552":"a2mK1","da321fee1e172324":"4aV4F"}],"a2mK1":[function(require,module,exports) {
var call = require("db6ace4b1d493adc");
var isObject = require("7ed2688da1be803b");
var isSymbol = require("c7188028467ec517");
var getMethod = require("1399cffe29a1996e");
var ordinaryToPrimitive = require("5e78b4b5dd6ba40e");
var wellKnownSymbol = require("491b62b9d95a39fa");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"db6ace4b1d493adc":"d7JlP","7ed2688da1be803b":"Z0pBo","c7188028467ec517":"4aV4F","1399cffe29a1996e":"9Zfiw","5e78b4b5dd6ba40e":"7MME2","491b62b9d95a39fa":"gTwyA"}],"d7JlP":[function(require,module,exports) {
var NATIVE_BIND = require("103c3903e7d20975");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"103c3903e7d20975":"i16Dq"}],"4aV4F":[function(require,module,exports) {
var getBuiltIn = require("e2f788e38c84c79");
var isCallable = require("46cb2b3c02db388a");
var isPrototypeOf = require("9bb37df0ce3d8148");
var USE_SYMBOL_AS_UID = require("8c6942839b71828a");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"e2f788e38c84c79":"6ZUSY","46cb2b3c02db388a":"l3Kyn","9bb37df0ce3d8148":"3jtKQ","8c6942839b71828a":"2Ye8Q"}],"6ZUSY":[function(require,module,exports) {
var global = require("5817a993b13cb6bb");
var isCallable = require("5513a0fdfe88743b");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"5817a993b13cb6bb":"i8HOC","5513a0fdfe88743b":"l3Kyn"}],"3jtKQ":[function(require,module,exports) {
var uncurryThis = require("e787bfcd42af4527");
module.exports = uncurryThis({}.isPrototypeOf);

},{"e787bfcd42af4527":"7GlkT"}],"2Ye8Q":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("6755740025f49d27");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"6755740025f49d27":"8KyTD"}],"8KyTD":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("48ec2b0d9e03e471");
var fails = require("e7273fad4e611029");
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"48ec2b0d9e03e471":"bjFlO","e7273fad4e611029":"hL6D2"}],"bjFlO":[function(require,module,exports) {
var global = require("16c4032f7decf2aa");
var userAgent = require("4fcf451fbe8f82c6");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"16c4032f7decf2aa":"i8HOC","4fcf451fbe8f82c6":"73xBt"}],"73xBt":[function(require,module,exports) {
module.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";

},{}],"9Zfiw":[function(require,module,exports) {
var aCallable = require("efe8bf845940c16e");
var isNullOrUndefined = require("14d3244138594ae8");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"efe8bf845940c16e":"gOMir","14d3244138594ae8":"gM5ar"}],"gOMir":[function(require,module,exports) {
var isCallable = require("644af12345dca38");
var tryToString = require("f28a0397ed6accb");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw $TypeError(tryToString(argument) + " is not a function");
};

},{"644af12345dca38":"l3Kyn","f28a0397ed6accb":"4O7d7"}],"4O7d7":[function(require,module,exports) {
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"7MME2":[function(require,module,exports) {
var call = require("f119f4124d482b4d");
var isCallable = require("15cf2b1afb55e298");
var isObject = require("ddb14a69f1a91bf0");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw $TypeError("Can't convert object to primitive value");
};

},{"f119f4124d482b4d":"d7JlP","15cf2b1afb55e298":"l3Kyn","ddb14a69f1a91bf0":"Z0pBo"}],"gTwyA":[function(require,module,exports) {
var global = require("f307987cd36ebf05");
var shared = require("8dae891077714241");
var hasOwn = require("890029f7c52745b0");
var uid = require("1da3992cf8f17d90");
var NATIVE_SYMBOL = require("2f9d2a32e97ab045");
var USE_SYMBOL_AS_UID = require("b71a142e6b034b9b");
var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
    return WellKnownSymbolsStore[name];
};

},{"f307987cd36ebf05":"i8HOC","8dae891077714241":"i1mHK","890029f7c52745b0":"gC2Q5","1da3992cf8f17d90":"a3SEE","2f9d2a32e97ab045":"8KyTD","b71a142e6b034b9b":"2Ye8Q"}],"i1mHK":[function(require,module,exports) {
var IS_PURE = require("c9067e8365d88018");
var store = require("d3533a56ce428ac3");
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: "3.29.1",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"c9067e8365d88018":"5ZsyC","d3533a56ce428ac3":"l4ncH"}],"5ZsyC":[function(require,module,exports) {
module.exports = false;

},{}],"a3SEE":[function(require,module,exports) {
var uncurryThis = require("ee71f5db9188769e");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"ee71f5db9188769e":"7GlkT"}],"1lpav":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"eAjGz":[function(require,module,exports) {
var shared = require("66f668c91fcf4a04");
var uid = require("36cfac656019890d");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"66f668c91fcf4a04":"i1mHK","36cfac656019890d":"a3SEE"}],"661m4":[function(require,module,exports) {
module.exports = {};

},{}],"9bz1x":[function(require,module,exports) {
"use strict";
var anObject = require("701bcc58565a6e8d");
// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function() {
    var that = anObject(this);
    var result = "";
    if (that.hasIndices) result += "d";
    if (that.global) result += "g";
    if (that.ignoreCase) result += "i";
    if (that.multiline) result += "m";
    if (that.dotAll) result += "s";
    if (that.unicode) result += "u";
    if (that.unicodeSets) result += "v";
    if (that.sticky) result += "y";
    return result;
};

},{"701bcc58565a6e8d":"4isCr"}],"49tUX":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("13f5fd2979d5d02a");
require("4aca97469251370a");

},{"13f5fd2979d5d02a":"fOGFr","4aca97469251370a":"l7FDS"}],"fOGFr":[function(require,module,exports) {
var $ = require("1301250bc553fcb6");
var global = require("d3495ea211edea4d");
var clearImmediate = require("ea4b9ed85f33a2ac").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"1301250bc553fcb6":"dIGt4","d3495ea211edea4d":"i8HOC","ea4b9ed85f33a2ac":"7jDg7"}],"dIGt4":[function(require,module,exports) {
var global = require("5a41149e518b526d");
var getOwnPropertyDescriptor = require("8e29b57885ed6a93").f;
var createNonEnumerableProperty = require("ed4eb02ae1930acf");
var defineBuiltIn = require("ada4deef39287b75");
var defineGlobalProperty = require("ed8445f5cd1bfc92");
var copyConstructorProperties = require("ff368b9816786138");
var isForced = require("fad167344b58b83");
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
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {});
    else target = (global[TARGET] || {}).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"5a41149e518b526d":"i8HOC","8e29b57885ed6a93":"lk5NI","ed4eb02ae1930acf":"8CL42","ada4deef39287b75":"6XwEX","ed8445f5cd1bfc92":"ggjnO","ff368b9816786138":"9Z12i","fad167344b58b83":"6uTCZ"}],"lk5NI":[function(require,module,exports) {
var DESCRIPTORS = require("33b72ddce2847f82");
var call = require("ae5742b1acc320fd");
var propertyIsEnumerableModule = require("b96eb6878e7a0ba7");
var createPropertyDescriptor = require("50bd5a991158a15a");
var toIndexedObject = require("b11beb0989a7fa6");
var toPropertyKey = require("718a7b37856cac93");
var hasOwn = require("6c3b5db247be096f");
var IE8_DOM_DEFINE = require("51c7af08e5e002d3");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"33b72ddce2847f82":"92ZIi","ae5742b1acc320fd":"d7JlP","b96eb6878e7a0ba7":"7SuiS","50bd5a991158a15a":"1lpav","b11beb0989a7fa6":"jLWwQ","718a7b37856cac93":"5XWKd","6c3b5db247be096f":"gC2Q5","51c7af08e5e002d3":"qS9uN"}],"7SuiS":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"jLWwQ":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("38f69f45c669637b");
var requireObjectCoercible = require("d733350067ea5747");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"38f69f45c669637b":"kPk5h","d733350067ea5747":"fOR0B"}],"kPk5h":[function(require,module,exports) {
var uncurryThis = require("604b1b931b263184");
var fails = require("ab4f1dee0fd6ef97");
var classof = require("5fcf4aed69f134ae");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) == "String" ? split(it, "") : $Object(it);
} : $Object;

},{"604b1b931b263184":"7GlkT","ab4f1dee0fd6ef97":"hL6D2","5fcf4aed69f134ae":"bdfmm"}],"bdfmm":[function(require,module,exports) {
var uncurryThis = require("39b1060ecd4e0c09");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"39b1060ecd4e0c09":"7GlkT"}],"6XwEX":[function(require,module,exports) {
var isCallable = require("9b64de98c7cfa24a");
var definePropertyModule = require("6c399060693eef6b");
var makeBuiltIn = require("ab7f876a4e954f8");
var defineGlobalProperty = require("4c55497ef27da622");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"9b64de98c7cfa24a":"l3Kyn","6c399060693eef6b":"iJR4w","ab7f876a4e954f8":"cTB4k","4c55497ef27da622":"ggjnO"}],"9Z12i":[function(require,module,exports) {
var hasOwn = require("be534c04c74a39d2");
var ownKeys = require("5ae560fde5c17e81");
var getOwnPropertyDescriptorModule = require("737da099e3db6de2");
var definePropertyModule = require("8c678cf9e718a76a");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"be534c04c74a39d2":"gC2Q5","5ae560fde5c17e81":"1CX1A","737da099e3db6de2":"lk5NI","8c678cf9e718a76a":"iJR4w"}],"1CX1A":[function(require,module,exports) {
var getBuiltIn = require("10c72bd1b639c63c");
var uncurryThis = require("bb87048d466570e3");
var getOwnPropertyNamesModule = require("ca6e3a627d1c3dd4");
var getOwnPropertySymbolsModule = require("c5857611c4597f68");
var anObject = require("b4d8fe50cfdd9f31");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"10c72bd1b639c63c":"6ZUSY","bb87048d466570e3":"7GlkT","ca6e3a627d1c3dd4":"fjY04","c5857611c4597f68":"4DWO3","b4d8fe50cfdd9f31":"4isCr"}],"fjY04":[function(require,module,exports) {
var internalObjectKeys = require("41827b4db102900f");
var enumBugKeys = require("c948f0352ada469");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"41827b4db102900f":"hl5T1","c948f0352ada469":"9RnJm"}],"hl5T1":[function(require,module,exports) {
var uncurryThis = require("4f0e8a7a3a4c30f");
var hasOwn = require("2112cd937ca38fe4");
var toIndexedObject = require("f23f84376ed31784");
var indexOf = require("99ca5e78c53e368c").indexOf;
var hiddenKeys = require("154d82365a71fb43");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"4f0e8a7a3a4c30f":"7GlkT","2112cd937ca38fe4":"gC2Q5","f23f84376ed31784":"jLWwQ","99ca5e78c53e368c":"n5IsC","154d82365a71fb43":"661m4"}],"n5IsC":[function(require,module,exports) {
var toIndexedObject = require("dfcf6c41520225fd");
var toAbsoluteIndex = require("d898b6c361311919");
var lengthOfArrayLike = require("f42a7773538e97cf");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"dfcf6c41520225fd":"jLWwQ","d898b6c361311919":"5yh27","f42a7773538e97cf":"lY4mS"}],"5yh27":[function(require,module,exports) {
var toIntegerOrInfinity = require("9770a83d4ade0645");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"9770a83d4ade0645":"kLXGe"}],"kLXGe":[function(require,module,exports) {
var trunc = require("ef06c9cd3177214");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"ef06c9cd3177214":"7O8gb"}],"7O8gb":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"lY4mS":[function(require,module,exports) {
var toLength = require("e50fe729f38815f3");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"e50fe729f38815f3":"fU04N"}],"fU04N":[function(require,module,exports) {
var toIntegerOrInfinity = require("e358150b3b830b38");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"e358150b3b830b38":"kLXGe"}],"9RnJm":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"4DWO3":[function(require,module,exports) {
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"6uTCZ":[function(require,module,exports) {
var fails = require("c7519f68e0256f66");
var isCallable = require("b2c3c959144604d8");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"c7519f68e0256f66":"hL6D2","b2c3c959144604d8":"l3Kyn"}],"7jDg7":[function(require,module,exports) {
var global = require("c14087b6566042a6");
var apply = require("65f798dcc2ab6996");
var bind = require("77b6c8f7a754a37a");
var isCallable = require("a77dd70cf6107250");
var hasOwn = require("24646be1a5cf0668");
var fails = require("6a5de8910f4a860e");
var html = require("d6562612f4497aa9");
var arraySlice = require("f8263bb1236dacfa");
var createElement = require("89ae54f65aff83f5");
var validateArgumentsLength = require("bce10de75354c4ba");
var IS_IOS = require("f60b03c52d593c7b");
var IS_NODE = require("21d2917f0bfe5784");
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
fails(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global.location;
});
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var eventListener = function(event) {
    run(event.data);
};
var globalPostMessageDefer = function(id) {
    // old engines have not location.origin
    global.postMessage(String(id), $location.protocol + "//" + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        global.addEventListener("message", eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"c14087b6566042a6":"i8HOC","65f798dcc2ab6996":"148ka","77b6c8f7a754a37a":"7vpmS","a77dd70cf6107250":"l3Kyn","24646be1a5cf0668":"gC2Q5","6a5de8910f4a860e":"hL6D2","d6562612f4497aa9":"2pze4","f8263bb1236dacfa":"RsFXo","89ae54f65aff83f5":"4bOHl","bce10de75354c4ba":"b9O3D","f60b03c52d593c7b":"bzGah","21d2917f0bfe5784":"2Jcp4"}],"148ka":[function(require,module,exports) {
var NATIVE_BIND = require("dfaff0b0230f8e0b");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"dfaff0b0230f8e0b":"i16Dq"}],"7vpmS":[function(require,module,exports) {
var uncurryThis = require("13f97176b108bc4f");
var aCallable = require("460aeab0bee3a571");
var NATIVE_BIND = require("e298be77532a05af");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"13f97176b108bc4f":"5Hioa","460aeab0bee3a571":"gOMir","e298be77532a05af":"i16Dq"}],"5Hioa":[function(require,module,exports) {
var classofRaw = require("56b85afbf4365a58");
var uncurryThis = require("d447ae33b6363022");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === "Function") return uncurryThis(fn);
};

},{"56b85afbf4365a58":"bdfmm","d447ae33b6363022":"7GlkT"}],"2pze4":[function(require,module,exports) {
var getBuiltIn = require("aab7f61e567e4cc0");
module.exports = getBuiltIn("document", "documentElement");

},{"aab7f61e567e4cc0":"6ZUSY"}],"RsFXo":[function(require,module,exports) {
var uncurryThis = require("e105caf16021e5ca");
module.exports = uncurryThis([].slice);

},{"e105caf16021e5ca":"7GlkT"}],"b9O3D":[function(require,module,exports) {
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw $TypeError("Not enough arguments");
    return passed;
};

},{}],"bzGah":[function(require,module,exports) {
var userAgent = require("c0f7fa97f53062bc");
// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"c0f7fa97f53062bc":"73xBt"}],"2Jcp4":[function(require,module,exports) {
var process = require("192b71d7e81d7407");
var classof = require("3ee3e772bf026391");
module.exports = typeof process != "undefined" && classof(process) == "process";

},{"192b71d7e81d7407":"d5jf4","3ee3e772bf026391":"bdfmm"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"l7FDS":[function(require,module,exports) {
var $ = require("2f74f369597b4e36");
var global = require("27b63f3a78d40779");
var setTask = require("1c0135c709dc65b6").set;
var schedulersFix = require("f8238d355c87b8e9");
// https://github.com/oven-sh/bun/issues/1633
var setImmediate = global.setImmediate ? schedulersFix(setTask, false) : setTask;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"2f74f369597b4e36":"dIGt4","27b63f3a78d40779":"i8HOC","1c0135c709dc65b6":"7jDg7","f8238d355c87b8e9":"cAPb6"}],"cAPb6":[function(require,module,exports) {
"use strict";
var global = require("daf19cef8e60d5b1");
var apply = require("dfd3e1737c0deeeb");
var isCallable = require("65d86ba4af8ac5ef");
var ENGINE_IS_BUN = require("5f2ecf5daa8f3900");
var USER_AGENT = require("70953088dd6beb6f");
var arraySlice = require("8af2953fff4afc51");
var validateArgumentsLength = require("380994951fd47776");
var Function = global.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function() {
    var version = global.Bun.version.split(".");
    return version.length < 3 || version[0] == 0 && (version[1] < 3 || version[1] == 3 && version[2] == 0);
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
        var fn = isCallable(handler) ? handler : Function(handler);
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            apply(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};

},{"daf19cef8e60d5b1":"i8HOC","dfd3e1737c0deeeb":"148ka","65d86ba4af8ac5ef":"l3Kyn","5f2ecf5daa8f3900":"2BA6V","70953088dd6beb6f":"73xBt","8af2953fff4afc51":"RsFXo","380994951fd47776":"b9O3D"}],"2BA6V":[function(require,module,exports) {
/* global Bun -- Deno case */ module.exports = typeof Bun == "function" && Bun && typeof Bun.version == "string";

},{}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "getSearchResultPage", ()=>getSearchResultPage);
parcelHelpers.export(exports, "updateServings", ()=>updateServings);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe);
var _configJs = require("./config.js");
var _helpersJs = require("./helpers.js");
const state = {
    recipe: {},
    search: {
        query: "",
        results: [],
        page: 1,
        resultsPerPage: (0, _configJs.RES_PER_PAGE)
    },
    bookmarks: []
};
const createRecipeObject = function(data) {
    const { recipe  } = data.data;
    return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
        ...recipe.key && {
            key: recipe.key
        }
    };
};
const loadRecipe = async function(id) {
    try {
        const data = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}${id}?key=${(0, _configJs.KEY)}`);
        state.recipe = createRecipeObject(data);
        if (state.bookmarks.some((bookmark)=>bookmark.id === id)) state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
    } catch (err) {
        throw err;
    }
};
const loadSearchResults = async function(query) {
    try {
        state.search.query = query;
        const data = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}?search=${query}&?key=${(0, _configJs.KEY)}`);
        state.search.results = data.data.recipes.map((rec)=>{
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
                ...rec.key && {
                    key: rec.key
                }
            };
        });
        state.search.page = 1;
    } catch (err) {
        throw err;
    }
};
const getSearchResultPage = function(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage; // 0
    const end = page * state.search.resultsPerPage; // 9
    return state.search.results.slice(start, end);
};
const updateServings = function(newServings) {
    state.recipe.ingredients.forEach((ing)=>{
        ing.quantity = ing.quantity * newServings / state.recipe.servings;
    });
    state.recipe.servings = newServings;
};
const persistBookmarks = function() {
    localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};
const addBookmark = function(recipe) {
    // add bookmark
    state.bookmarks.push(recipe);
    // mark curr recipe as bookmarked
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    persistBookmarks();
};
const deleteBookmark = function(id) {
    // delete bookmark
    const index = state.bookmarks.findIndex((el)=>el.id === id);
    state.bookmarks.splice(index, 1);
    // mark curr recipe as not bookmarked
    if (id === state.recipe.id) state.recipe.bookmarked = false;
    persistBookmarks();
};
const init = function() {
    const storage = localStorage.getItem("bookmarks");
    if (storage) state.bookmarks = JSON.parse(storage);
};
init();
const uploadRecipe = async function(newRecipe) {
    try {
        const ingredients = Object.entries(newRecipe).filter((entry)=>entry[0].startsWith("ingredient") && entry[1] !== "").map((ing)=>{
            const ingArr = ing[1].split(",").map((el)=>el.trim());
            if (ingArr.length !== 3) throw new Error("Wrong format of ingredients!");
            const [quantity, unit, description] = ingArr;
            return {
                quantity: quantity ? +quantity : null,
                unit,
                description
            };
        });
        const recipe = {
            title: newRecipe.title,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            publisher: newRecipe.publisher,
            cooking_time: +newRecipe.cookingTime,
            servings: +newRecipe.servings,
            ingredients
        };
        const data = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}?key=${(0, _configJs.KEY)}`, recipe);
        state.recipe = createRecipeObject(data);
        addBookmark(state.recipe);
    } catch (err) {
        throw err;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./config.js":"k5Hzs","./helpers.js":"hGI1E"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIMEOUT_SECOND", ()=>TIMEOUT_SECOND);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
parcelHelpers.export(exports, "KEY", ()=>KEY);
parcelHelpers.export(exports, "MODAL_CLOSE_SEC", ()=>MODAL_CLOSE_SEC);
const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
const TIMEOUT_SECOND = 10;
const RES_PER_PAGE = 10;
const KEY = "01d8ae1a-b803-4739-8373-089baed4571e";
const MODAL_CLOSE_SEC = 2.5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
var _regeneratorRuntime = require("regenerator-runtime");
var _configJs = require("./config.js");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const AJAX = async function(url, uploadData) {
    try {
        const fetchPro = uploadData ? fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url);
        const res = await Promise.race([
            fetchPro,
            timeout((0, _configJs.TIMEOUT_SECOND))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
}; // export const getJSON = async function (url) {
 //   try {
 //     const fetchPro = fetch(url);
 //     const res = await Promise.race([fetchPro, timeout(TIMEOUT_SECOND)]);
 //     const data = await res.json();
 //     if (!res.ok) throw new Error(`${data.message} (${res.status})`);
 //     return data;
 //   } catch (err) {
 //     throw err;
 //   }
 // };
 // export const sendJSON = async function (url, uploadData) {
 //   try {
 //     const fetchPro = fetch(url, {
 //       method: "POST",
 //       headers: {
 //         "Content-Type": "application/json",
 //       },
 //       body: JSON.stringify(uploadData),
 //     });
 //     const res = await Promise.race([fetchPro, timeout(TIMEOUT_SECOND)]);
 //     const data = await res.json();
 //     if (!res.ok) throw new Error(`${data.message} (${res.status})`);
 //     return data;
 //   } catch (err) {
 //     throw err;
 //   }
 // };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./config.js":"k5Hzs","regenerator-runtime":"dXNgZ"}],"l60JC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _fractional = require("fractional");
var _fractionalDefault = parcelHelpers.interopDefault(_fractional);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class RecipeView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".recipe");
    _errorMessage = "We could not find a recipe. Please try another one!";
    _message = "";
    addHandlerRender(handler) {
        [
            "hashchange",
            "load"
        ].forEach((ev)=>window.addEventListener(ev, handler));
    }
    addHandlerUpdateServings(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--increase-servings");
            if (!btn) return;
            const updateTo = +btn.dataset.updateTo;
            if (updateTo > 0) handler(updateTo);
        });
    }
    addHandlerAddBookmark(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--bookmark");
            if (!btn) return;
            handler();
        });
    }
    _generateMarkUp() {
        return `<figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings" data-update-to="${this._data.servings - 1}">
                <svg>
                  <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings" data-update-to="${this._data.servings + 1}">
                <svg>
                  <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key ? "" : "hidden"}">
            <svg>
              <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${0, _iconsSvgDefault.default}#icon-bookmark${this._data.bookmarked ? "-fill" : ""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">

          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`;
    }
    _generateMarkupIngredient(ing) {
        return `
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${ing.quantity ? new (0, _fractionalDefault.default).Fraction(ing.quantity).toString() : ""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
                ${ing.description}
              </div>
            </li>
            `;
    }
}
exports.default = new RecipeView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","url:../../img/icons.svg":"loVOp","fractional":"3SU56","./view.js":"bWlJ9"}],"loVOp":[function(require,module,exports) {
module.exports = require("2025305f4f3c264a").getBundleURL("hWUTQ") + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"2025305f4f3c264a":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3SU56":[function(require,module,exports) {
/*
fraction.js
A Javascript fraction library.

Copyright (c) 2009  Erik Garrison <erik@hypervolu.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/ /* Fractions */ /* 
 *
 * Fraction objects are comprised of a numerator and a denomenator.  These
 * values can be accessed at fraction.numerator and fraction.denomenator.
 *
 * Fractions are always returned and stored in lowest-form normalized format.
 * This is accomplished via Fraction.normalize.
 *
 * The following mathematical operations on fractions are supported:
 *
 * Fraction.equals
 * Fraction.add
 * Fraction.subtract
 * Fraction.multiply
 * Fraction.divide
 *
 * These operations accept both numbers and fraction objects.  (Best results
 * are guaranteed when the input is a fraction object.)  They all return a new
 * Fraction object.
 *
 * Usage:
 *
 * TODO
 *
 */ /*
 * The Fraction constructor takes one of:
 *   an explicit numerator (integer) and denominator (integer),
 *   a string representation of the fraction (string),
 *   or a floating-point number (float)
 *
 * These initialization methods are provided for convenience.  Because of
 * rounding issues the best results will be given when the fraction is
 * constructed from an explicit integer numerator and denomenator, and not a
 * decimal number.
 *
 *
 * e.g. new Fraction(1, 2) --> 1/2
 *      new Fraction('1/2') --> 1/2
 *      new Fraction('2 3/4') --> 11/4  (prints as 2 3/4)
 *
 */ Fraction = function(numerator, denominator) {
    /* double argument invocation */ if (typeof numerator !== "undefined" && denominator) {
        if (typeof numerator === "number" && typeof denominator === "number") {
            this.numerator = numerator;
            this.denominator = denominator;
        } else if (typeof numerator === "string" && typeof denominator === "string") {
            // what are they?
            // hmm....
            // assume they are ints?
            this.numerator = parseInt(numerator);
            this.denominator = parseInt(denominator);
        }
    /* single-argument invocation */ } else if (typeof denominator === "undefined") {
        num = numerator; // swap variable names for legibility
        if (typeof num === "number") {
            this.numerator = num;
            this.denominator = 1;
        } else if (typeof num === "string") {
            var a, b; // hold the first and second part of the fraction, e.g. a = '1' and b = '2/3' in 1 2/3
            // or a = '2/3' and b = undefined if we are just passed a single-part number
            var arr = num.split(" ");
            if (arr[0]) a = arr[0];
            if (arr[1]) b = arr[1];
            /* compound fraction e.g. 'A B/C' */ //  if a is an integer ...
            if (a % 1 === 0 && b && b.match("/")) return new Fraction(a).add(new Fraction(b));
            else if (a && !b) {
                /* simple fraction e.g. 'A/B' */ if (typeof a === "string" && a.match("/")) {
                    // it's not a whole number... it's actually a fraction without a whole part written
                    var f = a.split("/");
                    this.numerator = f[0];
                    this.denominator = f[1];
                /* string floating point */ } else if (typeof a === "string" && a.match(".")) return new Fraction(parseFloat(a));
                else {
                    this.numerator = parseInt(a);
                    this.denominator = 1;
                }
            } else return undefined; // could not parse
        }
    }
    this.normalize();
};
Fraction.prototype.clone = function() {
    return new Fraction(this.numerator, this.denominator);
};
/* pretty-printer, converts fractions into whole numbers and fractions */ Fraction.prototype.toString = function() {
    if (this.denominator === "NaN") return "NaN";
    var wholepart = this.numerator / this.denominator > 0 ? Math.floor(this.numerator / this.denominator) : Math.ceil(this.numerator / this.denominator);
    var numerator = this.numerator % this.denominator;
    var denominator = this.denominator;
    var result = [];
    if (wholepart != 0) result.push(wholepart);
    if (numerator != 0) result.push((wholepart === 0 ? numerator : Math.abs(numerator)) + "/" + denominator);
    return result.length > 0 ? result.join(" ") : 0;
};
/* destructively rescale the fraction by some integral factor */ Fraction.prototype.rescale = function(factor) {
    this.numerator *= factor;
    this.denominator *= factor;
    return this;
};
Fraction.prototype.add = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone();
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator += b.numerator;
    return a.normalize();
};
Fraction.prototype.subtract = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone(); // we scale our argument destructively, so clone
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator -= b.numerator;
    return a.normalize();
};
Fraction.prototype.multiply = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.numerator;
        a.denominator *= b.denominator;
    } else if (typeof b === "number") a.numerator *= b;
    else return a.multiply(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.divide = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.denominator;
        a.denominator *= b.numerator;
    } else if (typeof b === "number") a.denominator *= b;
    else return a.divide(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.equals = function(b) {
    if (!(b instanceof Fraction)) b = new Fraction(b);
    // fractions that are equal should have equal normalized forms
    var a = this.clone().normalize();
    var b = b.clone().normalize();
    return a.numerator === b.numerator && a.denominator === b.denominator;
};
/* Utility functions */ /* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */ Fraction.prototype.normalize = function() {
    var isFloat = function(n) {
        return typeof n === "number" && (n > 0 && n % 1 > 0 && n % 1 < 1 || n < 0 && n % -1 < 0 && n % -1 > -1);
    };
    var roundToPlaces = function(n, places) {
        if (!places) return Math.round(n);
        else {
            var scalar = Math.pow(10, places);
            return Math.round(n * scalar) / scalar;
        }
    };
    return function() {
        // XXX hackish.  Is there a better way to address this issue?
        //
        /* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */ if (isFloat(this.denominator)) {
            var rounded = roundToPlaces(this.denominator, 9);
            var scaleup = Math.pow(10, rounded.toString().split(".")[1].length);
            this.denominator = Math.round(this.denominator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.numerator *= scaleup;
        }
        if (isFloat(this.numerator)) {
            var rounded = roundToPlaces(this.numerator, 9);
            var scaleup = Math.pow(10, rounded.toString().split(".")[1].length);
            this.numerator = Math.round(this.numerator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.denominator *= scaleup;
        }
        var gcf = Fraction.gcf(this.numerator, this.denominator);
        this.numerator /= gcf;
        this.denominator /= gcf;
        if (this.numerator < 0 && this.denominator < 0 || this.numerator > 0 && this.denominator < 0) {
            this.numerator *= -1;
            this.denominator *= -1;
        }
        return this;
    };
}();
/* Takes two numbers and returns their greatest common factor.
 */ Fraction.gcf = function(a, b) {
    var common_factors = [];
    var fa = Fraction.primeFactors(a);
    var fb = Fraction.primeFactors(b);
    // for each factor in fa
    // if it's also in fb
    // put it into the common factors
    fa.forEach(function(factor) {
        var i = fb.indexOf(factor);
        if (i >= 0) {
            common_factors.push(factor);
            fb.splice(i, 1); // remove from fb
        }
    });
    if (common_factors.length === 0) return 1;
    var gcf = function() {
        var r = common_factors[0];
        var i;
        for(i = 1; i < common_factors.length; i++)r = r * common_factors[i];
        return r;
    }();
    return gcf;
};
// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors = function(n) {
    var num1 = Math.abs(n);
    var factors = [];
    var _factor = 2; // first potential prime factor
    while(_factor * _factor <= num1)if (num1 % _factor === 0) {
        factors.push(_factor); // so keep it
        num1 = num1 / _factor; // and divide our search point by it
    } else _factor++; // and increment
    if (num1 != 1) factors.push(num1); //    so it too should be recorded
    return factors; // Return the prime factors
};
module.exports.Fraction = Fraction;

},{}],"bWlJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("constants");
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    render(data, render = true) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        const markup = this._generateMarkUp();
        if (!render) return markup;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkUp();
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newEl = Array.from(newDOM.querySelectorAll("*"));
        const curEl = Array.from(this._parentElement.querySelectorAll("*"));
        newEl.forEach((el, i)=>{
            const cur = curEl[i];
            if (!el.isEqualNode(cur) && el.firstChild?.nodeValue.trim() !== "") cur.textContent = el.textContent;
            if (!el.isEqualNode(cur)) Array.from(el.attributes).forEach((attr)=>cur.setAttribute(attr.name, attr.value));
        });
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    renderSpinner() {
        const markup = `
        <div class="spinner">
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
          </svg>
        </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `<div class="error">
            <div>
              <svg>
                <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderMessage(message = this._message) {
        const markup = `<div class="message">
            <div>
              <svg>
                <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","url:../../img/icons.svg":"loVOp","constants":"g88Db"}],"g88Db":[function(require,module,exports) {
module.exports = JSON.parse('{"O_RDONLY":0,"O_WRONLY":1,"O_RDWR":2,"S_IFMT":61440,"S_IFREG":32768,"S_IFDIR":16384,"S_IFCHR":8192,"S_IFBLK":24576,"S_IFIFO":4096,"S_IFLNK":40960,"S_IFSOCK":49152,"O_CREAT":512,"O_EXCL":2048,"O_NOCTTY":131072,"O_TRUNC":1024,"O_APPEND":8,"O_DIRECTORY":1048576,"O_NOFOLLOW":256,"O_SYNC":128,"O_SYMLINK":2097152,"O_NONBLOCK":4,"S_IRWXU":448,"S_IRUSR":256,"S_IWUSR":128,"S_IXUSR":64,"S_IRWXG":56,"S_IRGRP":32,"S_IWGRP":16,"S_IXGRP":8,"S_IRWXO":7,"S_IROTH":4,"S_IWOTH":2,"S_IXOTH":1,"E2BIG":7,"EACCES":13,"EADDRINUSE":48,"EADDRNOTAVAIL":49,"EAFNOSUPPORT":47,"EAGAIN":35,"EALREADY":37,"EBADF":9,"EBADMSG":94,"EBUSY":16,"ECANCELED":89,"ECHILD":10,"ECONNABORTED":53,"ECONNREFUSED":61,"ECONNRESET":54,"EDEADLK":11,"EDESTADDRREQ":39,"EDOM":33,"EDQUOT":69,"EEXIST":17,"EFAULT":14,"EFBIG":27,"EHOSTUNREACH":65,"EIDRM":90,"EILSEQ":92,"EINPROGRESS":36,"EINTR":4,"EINVAL":22,"EIO":5,"EISCONN":56,"EISDIR":21,"ELOOP":62,"EMFILE":24,"EMLINK":31,"EMSGSIZE":40,"EMULTIHOP":95,"ENAMETOOLONG":63,"ENETDOWN":50,"ENETRESET":52,"ENETUNREACH":51,"ENFILE":23,"ENOBUFS":55,"ENODATA":96,"ENODEV":19,"ENOENT":2,"ENOEXEC":8,"ENOLCK":77,"ENOLINK":97,"ENOMEM":12,"ENOMSG":91,"ENOPROTOOPT":42,"ENOSPC":28,"ENOSR":98,"ENOSTR":99,"ENOSYS":78,"ENOTCONN":57,"ENOTDIR":20,"ENOTEMPTY":66,"ENOTSOCK":38,"ENOTSUP":45,"ENOTTY":25,"ENXIO":6,"EOPNOTSUPP":102,"EOVERFLOW":84,"EPERM":1,"EPIPE":32,"EPROTO":100,"EPROTONOSUPPORT":43,"EPROTOTYPE":41,"ERANGE":34,"EROFS":30,"ESPIPE":29,"ESRCH":3,"ESTALE":70,"ETIME":101,"ETIMEDOUT":60,"ETXTBSY":26,"EWOULDBLOCK":35,"EXDEV":18,"SIGHUP":1,"SIGINT":2,"SIGQUIT":3,"SIGILL":4,"SIGTRAP":5,"SIGABRT":6,"SIGIOT":6,"SIGBUS":10,"SIGFPE":8,"SIGKILL":9,"SIGUSR1":30,"SIGSEGV":11,"SIGUSR2":31,"SIGPIPE":13,"SIGALRM":14,"SIGTERM":15,"SIGCHLD":20,"SIGCONT":19,"SIGSTOP":17,"SIGTSTP":18,"SIGTTIN":21,"SIGTTOU":22,"SIGURG":16,"SIGXCPU":24,"SIGXFSZ":25,"SIGVTALRM":26,"SIGPROF":27,"SIGWINCH":28,"SIGIO":23,"SIGSYS":12,"SSL_OP_ALL":2147486719,"SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION":262144,"SSL_OP_CIPHER_SERVER_PREFERENCE":4194304,"SSL_OP_CISCO_ANYCONNECT":32768,"SSL_OP_COOKIE_EXCHANGE":8192,"SSL_OP_CRYPTOPRO_TLSEXT_BUG":2147483648,"SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS":2048,"SSL_OP_EPHEMERAL_RSA":0,"SSL_OP_LEGACY_SERVER_CONNECT":4,"SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER":32,"SSL_OP_MICROSOFT_SESS_ID_BUG":1,"SSL_OP_MSIE_SSLV2_RSA_PADDING":0,"SSL_OP_NETSCAPE_CA_DN_BUG":536870912,"SSL_OP_NETSCAPE_CHALLENGE_BUG":2,"SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG":1073741824,"SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG":8,"SSL_OP_NO_COMPRESSION":131072,"SSL_OP_NO_QUERY_MTU":4096,"SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION":65536,"SSL_OP_NO_SSLv2":16777216,"SSL_OP_NO_SSLv3":33554432,"SSL_OP_NO_TICKET":16384,"SSL_OP_NO_TLSv1":67108864,"SSL_OP_NO_TLSv1_1":268435456,"SSL_OP_NO_TLSv1_2":134217728,"SSL_OP_PKCS1_CHECK_1":0,"SSL_OP_PKCS1_CHECK_2":0,"SSL_OP_SINGLE_DH_USE":1048576,"SSL_OP_SINGLE_ECDH_USE":524288,"SSL_OP_SSLEAY_080_CLIENT_DH_BUG":128,"SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG":0,"SSL_OP_TLS_BLOCK_PADDING_BUG":512,"SSL_OP_TLS_D5_BUG":256,"SSL_OP_TLS_ROLLBACK_BUG":8388608,"ENGINE_METHOD_DSA":2,"ENGINE_METHOD_DH":4,"ENGINE_METHOD_RAND":8,"ENGINE_METHOD_ECDH":16,"ENGINE_METHOD_ECDSA":32,"ENGINE_METHOD_CIPHERS":64,"ENGINE_METHOD_DIGESTS":128,"ENGINE_METHOD_STORE":256,"ENGINE_METHOD_PKEY_METHS":512,"ENGINE_METHOD_PKEY_ASN1_METHS":1024,"ENGINE_METHOD_ALL":65535,"ENGINE_METHOD_NONE":0,"DH_CHECK_P_NOT_SAFE_PRIME":2,"DH_CHECK_P_NOT_PRIME":1,"DH_UNABLE_TO_CHECK_GENERATOR":4,"DH_NOT_SUITABLE_GENERATOR":8,"NPN_ENABLED":1,"RSA_PKCS1_PADDING":1,"RSA_SSLV23_PADDING":2,"RSA_NO_PADDING":3,"RSA_PKCS1_OAEP_PADDING":4,"RSA_X931_PADDING":5,"RSA_PKCS1_PSS_PADDING":6,"POINT_CONVERSION_COMPRESSED":2,"POINT_CONVERSION_UNCOMPRESSED":4,"POINT_CONVERSION_HYBRID":6,"F_OK":0,"R_OK":4,"W_OK":2,"X_OK":1,"UV_UDP_REUSEADDR":4}');

},{}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    _parentEl = document.querySelector(".search");
    getQuery() {
        const query = this._parentEl.querySelector(".search__field").value;
        this._clearInput();
        return query;
    }
    _clearInput() {
        this._parentEl.querySelector(".search__field").value = "";
    }
    addHandlerSearch(handler) {
        this._parentEl.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSbZE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
class ResultsView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".results");
    _errorMessage = "No recipes found for your query. Please try another one!";
    _message = "";
    _generateMarkUp() {
        return this._data.map((result)=>(0, _previewViewJsDefault.default).render(result, false)).join("");
    }
}
exports.default = new ResultsView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./previewView.js":"1FDQ6"}],"1FDQ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PreviewView extends (0, _viewJsDefault.default) {
    _parentElement = "";
    _generateMarkUp() {
        const id = window.location.hash.slice(1);
        return `
        <li class="preview">
            <a class="preview__link ${this._data.id === id ? "preview__link--active" : ""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                  <div class="recipe__user-generated ${this._data.key ? "" : "hidden"}">
                    <svg>
                     <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
                    </svg>
                  </div>
              </div>
            </a>
          </li>
        `;
    }
}
exports.default = new PreviewView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","url:../../img/icons.svg":"loVOp"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".pagination");
    addHandlerClick(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            const gotToPage = +btn.dataset.goto;
            handler(gotToPage);
        });
    }
    _generateMarkUp() {
        // page 1 and there are other pages
        const numPages = (this._data.results.length + 1) / this._data.resultsPerPage;
        console.log(numPages);
        if (this._data.page === 1 && numPages > 1) return `
        <button data-goto='${this._data.page + 1}' class="btn--inline pagination__btn--next">
            <span>Page ${this._data.page + 1}</span>
            <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
            </svg>
        </button>
        `;
        // last page
        if (this._data.page === numPages && numPages > 1) return `
      <button data-goto='${this._data.page - 1}' class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.page - 1}</span>
          </button>
          `;
        // other pages
        if (this._data.page < numPages) return `
      <button data-goto='${this._data.page - 1}' class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.page - 1}</span>
          </button>
          <button data-goto='${this._data.page + 1}' class="btn--inline pagination__btn--next">
            <span>Page ${this._data.page + 1}</span>
            <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
            </svg>
        </button>
          `;
        // page 1 and there is no pages
        return "";
    }
}
exports.default = new PaginationView();

},{"./view":"bWlJ9","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Lqzq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
class BookmarksView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".bookmarks__list");
    _errorMessage = "No bookmarks yet. Find a nice recipe and bookmark it!";
    _message = "";
    addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
    _generateMarkUp() {
        return this._data.map((bookmark)=>(0, _previewViewJsDefault.default).render(bookmark, false)).join("");
    }
}
exports.default = new BookmarksView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./previewView.js":"1FDQ6"}],"i6DNj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _browserslist = require("browserslist");
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class AddRecipeView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".upload");
    _message = "Recipe was successfully uploaded :)";
    _window = document.querySelector(".add-recipe-window");
    _overlay = document.querySelector(".overlay");
    _btnOpenForm = document.querySelector(".nav__btn--add-recipe");
    _btnCloseForm = document.querySelector(".btn--close-modal");
    constructor(){
        super();
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }
    toggleWindow() {
        this._overlay.classList.toggle("hidden");
        this._window.classList.toggle("hidden");
    }
    _addHandlerShowWindow() {
        this._btnOpenForm.addEventListener("click", this.toggleWindow.bind(this));
    }
    _addHandlerHideWindow() {
        this._btnCloseForm.addEventListener("click", this.toggleWindow.bind(this));
    }
    addHandlerUpload(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            const dataArray = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArray);
            handler(data);
        });
    }
    _generateMarkUp() {}
}
exports.default = new AddRecipeView();

},{"./view":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","browserslist":"h32Zo"}],"h32Zo":[function(require,module,exports) {
var jsReleases = require("2dbbbb0bc07c87c9");
var agents = require("bf482965d275e354").agents;
var jsEOL = require("3f437ee999fcc89e");
var path = require("d610fb3e1f32be4c");
var e2c = require("4bd56fb766e60c44");
var BrowserslistError = require("ce5345215222ec0");
var parse = require("f113e7c12a3ee40e");
var env = require("d68b08d31de290b6") // Will load browser.js in webpack
;
var YEAR = 365.259641 * 86400000;
var ANDROID_EVERGREEN_FIRST = 37;
// Helpers
function isVersionsMatch(versionA, versionB) {
    return (versionA + ".").indexOf(versionB + ".") === 0;
}
function isEolReleased(name) {
    var version = name.slice(1);
    return browserslist.nodeVersions.some(function(i) {
        return isVersionsMatch(i, version);
    });
}
function normalize(versions) {
    return versions.filter(function(version) {
        return typeof version === "string";
    });
}
function normalizeElectron(version) {
    var versionToUse = version;
    if (version.split(".").length === 3) versionToUse = version.split(".").slice(0, -1).join(".");
    return versionToUse;
}
function nameMapper(name) {
    return function mapName(version) {
        return name + " " + version;
    };
}
function getMajor(version) {
    return parseInt(version.split(".")[0]);
}
function getMajorVersions(released, number) {
    if (released.length === 0) return [];
    var majorVersions = uniq(released.map(getMajor));
    var minimum = majorVersions[majorVersions.length - number];
    if (!minimum) return released;
    var selected = [];
    for(var i = released.length - 1; i >= 0; i--){
        if (minimum > getMajor(released[i])) break;
        selected.unshift(released[i]);
    }
    return selected;
}
function uniq(array) {
    var filtered = [];
    for(var i = 0; i < array.length; i++)if (filtered.indexOf(array[i]) === -1) filtered.push(array[i]);
    return filtered;
}
function fillUsage(result, name, data) {
    for(var i in data)result[name + " " + i] = data[i];
}
function generateFilter(sign, version) {
    version = parseFloat(version);
    if (sign === ">") return function(v) {
        return parseFloat(v) > version;
    };
    else if (sign === ">=") return function(v) {
        return parseFloat(v) >= version;
    };
    else if (sign === "<") return function(v) {
        return parseFloat(v) < version;
    };
    else return function(v) {
        return parseFloat(v) <= version;
    };
}
function generateSemverFilter(sign, version) {
    version = version.split(".").map(parseSimpleInt);
    version[1] = version[1] || 0;
    version[2] = version[2] || 0;
    if (sign === ">") return function(v) {
        v = v.split(".").map(parseSimpleInt);
        return compareSemver(v, version) > 0;
    };
    else if (sign === ">=") return function(v) {
        v = v.split(".").map(parseSimpleInt);
        return compareSemver(v, version) >= 0;
    };
    else if (sign === "<") return function(v) {
        v = v.split(".").map(parseSimpleInt);
        return compareSemver(version, v) > 0;
    };
    else return function(v) {
        v = v.split(".").map(parseSimpleInt);
        return compareSemver(version, v) >= 0;
    };
}
function parseSimpleInt(x) {
    return parseInt(x);
}
function compare(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}
function compareSemver(a, b) {
    return compare(parseInt(a[0]), parseInt(b[0])) || compare(parseInt(a[1] || "0"), parseInt(b[1] || "0")) || compare(parseInt(a[2] || "0"), parseInt(b[2] || "0"));
}
// this follows the npm-like semver behavior
function semverFilterLoose(operator, range) {
    range = range.split(".").map(parseSimpleInt);
    if (typeof range[1] === "undefined") range[1] = "x";
    // ignore any patch version because we only return minor versions
    // range[2] = 'x'
    switch(operator){
        case "<=":
            return function(version) {
                version = version.split(".").map(parseSimpleInt);
                return compareSemverLoose(version, range) <= 0;
            };
        case ">=":
        default:
            return function(version) {
                version = version.split(".").map(parseSimpleInt);
                return compareSemverLoose(version, range) >= 0;
            };
    }
}
// this follows the npm-like semver behavior
function compareSemverLoose(version, range) {
    if (version[0] !== range[0]) return version[0] < range[0] ? -1 : 1;
    if (range[1] === "x") return 0;
    if (version[1] !== range[1]) return version[1] < range[1] ? -1 : 1;
    return 0;
}
function resolveVersion(data, version) {
    if (data.versions.indexOf(version) !== -1) return version;
    else if (browserslist.versionAliases[data.name][version]) return browserslist.versionAliases[data.name][version];
    else return false;
}
function normalizeVersion(data, version) {
    var resolved = resolveVersion(data, version);
    if (resolved) return resolved;
    else if (data.versions.length === 1) return data.versions[0];
    else return false;
}
function filterByYear(since, context) {
    since = since / 1000;
    return Object.keys(agents).reduce(function(selected, name) {
        var data = byName(name, context);
        if (!data) return selected;
        var versions = Object.keys(data.releaseDate).filter(function(v) {
            var date = data.releaseDate[v];
            return date !== null && date >= since;
        });
        return selected.concat(versions.map(nameMapper(data.name)));
    }, []);
}
function cloneData(data) {
    return {
        name: data.name,
        versions: data.versions,
        released: data.released,
        releaseDate: data.releaseDate
    };
}
function mapVersions(data, map) {
    data.versions = data.versions.map(function(i) {
        return map[i] || i;
    });
    data.released = data.released.map(function(i) {
        return map[i] || i;
    });
    var fixedDate = {};
    for(var i in data.releaseDate)fixedDate[map[i] || i] = data.releaseDate[i];
    data.releaseDate = fixedDate;
    return data;
}
function byName(name, context) {
    name = name.toLowerCase();
    name = browserslist.aliases[name] || name;
    if (context.mobileToDesktop && browserslist.desktopNames[name]) {
        var desktop = browserslist.data[browserslist.desktopNames[name]];
        if (name === "android") return normalizeAndroidData(cloneData(browserslist.data[name]), desktop);
        else {
            var cloned = cloneData(desktop);
            cloned.name = name;
            if (name === "op_mob") cloned = mapVersions(cloned, {
                "10.0-10.1": "10"
            });
            return cloned;
        }
    }
    return browserslist.data[name];
}
function normalizeAndroidVersions(androidVersions, chromeVersions) {
    var firstEvergreen = ANDROID_EVERGREEN_FIRST;
    var last = chromeVersions[chromeVersions.length - 1];
    return androidVersions.filter(function(version) {
        return /^(?:[2-4]\.|[34]$)/.test(version);
    }).concat(chromeVersions.slice(firstEvergreen - last - 1));
}
function normalizeAndroidData(android, chrome) {
    android.released = normalizeAndroidVersions(android.released, chrome.released);
    android.versions = normalizeAndroidVersions(android.versions, chrome.versions);
    return android;
}
function checkName(name, context) {
    var data = byName(name, context);
    if (!data) throw new BrowserslistError("Unknown browser " + name);
    return data;
}
function unknownQuery(query) {
    return new BrowserslistError("Unknown browser query `" + query + "`. " + "Maybe you are using old Browserslist or made typo in query.");
}
function filterAndroid(list, versions, context) {
    if (context.mobileToDesktop) return list;
    var released = browserslist.data.android.released;
    var last = released[released.length - 1];
    var diff = last - ANDROID_EVERGREEN_FIRST - versions;
    if (diff > 0) return list.slice(-1);
    else return list.slice(diff - 1);
}
function resolve(queries, context) {
    return parse(QUERIES, queries).reduce(function(result, node, index) {
        if (node.not && index === 0) throw new BrowserslistError("Write any browsers query (for instance, `defaults`) before `" + node.query + "`");
        var type = QUERIES[node.type];
        var array = type.select.call(browserslist, context, node).map(function(j) {
            var parts = j.split(" ");
            if (parts[1] === "0") return parts[0] + " " + byName(parts[0], context).versions[0];
            else return j;
        });
        if (node.compose === "and") {
            if (node.not) return result.filter(function(j) {
                return array.indexOf(j) === -1;
            });
            else return result.filter(function(j) {
                return array.indexOf(j) !== -1;
            });
        } else {
            if (node.not) {
                var filter = {};
                array.forEach(function(j) {
                    filter[j] = true;
                });
                return result.filter(function(j) {
                    return !filter[j];
                });
            }
            return result.concat(array);
        }
    }, []);
}
function prepareOpts(opts) {
    if (typeof opts === "undefined") opts = {};
    if (typeof opts.path === "undefined") opts.path = path.resolve ? path.resolve(".") : ".";
    return opts;
}
function prepareQueries(queries, opts) {
    if (typeof queries === "undefined" || queries === null) {
        var config = browserslist.loadConfig(opts);
        if (config) queries = config;
        else queries = browserslist.defaults;
    }
    return queries;
}
function checkQueries(queries) {
    if (!(typeof queries === "string" || Array.isArray(queries))) throw new BrowserslistError("Browser queries must be an array or string. Got " + typeof queries + ".");
}
var cache = {};
function browserslist(queries, opts) {
    opts = prepareOpts(opts);
    queries = prepareQueries(queries, opts);
    checkQueries(queries);
    var context = {
        ignoreUnknownVersions: opts.ignoreUnknownVersions,
        dangerousExtend: opts.dangerousExtend,
        mobileToDesktop: opts.mobileToDesktop,
        path: opts.path,
        env: opts.env
    };
    env.oldDataWarning(browserslist.data);
    var stats = env.getStat(opts, browserslist.data);
    if (stats) {
        context.customUsage = {};
        for(var browser in stats)fillUsage(context.customUsage, browser, stats[browser]);
    }
    var cacheKey = JSON.stringify([
        queries,
        context
    ]);
    if (cache[cacheKey]) return cache[cacheKey];
    var result = uniq(resolve(queries, context)).sort(function(name1, name2) {
        name1 = name1.split(" ");
        name2 = name2.split(" ");
        if (name1[0] === name2[0]) {
            // assumptions on caniuse data
            // 1) version ranges never overlaps
            // 2) if version is not a range, it never contains `-`
            var version1 = name1[1].split("-")[0];
            var version2 = name2[1].split("-")[0];
            return compareSemver(version2.split("."), version1.split("."));
        } else return compare(name1[0], name2[0]);
    });
    if (!env.env.BROWSERSLIST_DISABLE_CACHE) cache[cacheKey] = result;
    return result;
}
browserslist.parse = function(queries, opts) {
    opts = prepareOpts(opts);
    queries = prepareQueries(queries, opts);
    checkQueries(queries);
    return parse(QUERIES, queries);
};
// Will be filled by Can I Use data below
browserslist.cache = {};
browserslist.data = {};
browserslist.usage = {
    global: {},
    custom: null
};
// Default browsers query
browserslist.defaults = [
    "> 0.5%",
    "last 2 versions",
    "Firefox ESR",
    "not dead"
];
// Browser names aliases
browserslist.aliases = {
    fx: "firefox",
    ff: "firefox",
    ios: "ios_saf",
    explorer: "ie",
    blackberry: "bb",
    explorermobile: "ie_mob",
    operamini: "op_mini",
    operamobile: "op_mob",
    chromeandroid: "and_chr",
    firefoxandroid: "and_ff",
    ucandroid: "and_uc",
    qqandroid: "and_qq"
};
// Can I Use only provides a few versions for some browsers (e.g. and_chr).
// Fallback to a similar browser for unknown versions
browserslist.desktopNames = {
    and_chr: "chrome",
    and_ff: "firefox",
    ie_mob: "ie",
    op_mob: "opera",
    android: "chrome" // has extra processing logic
};
// Aliases to work with joined versions like `ios_saf 7.0-7.1`
browserslist.versionAliases = {};
browserslist.clearCaches = env.clearCaches;
browserslist.parseConfig = env.parseConfig;
browserslist.readConfig = env.readConfig;
browserslist.findConfig = env.findConfig;
browserslist.loadConfig = env.loadConfig;
browserslist.coverage = function(browsers, stats) {
    var data;
    if (typeof stats === "undefined") data = browserslist.usage.global;
    else if (stats === "my stats") {
        var opts = {};
        opts.path = path.resolve ? path.resolve(".") : ".";
        var customStats = env.getStat(opts);
        if (!customStats) throw new BrowserslistError("Custom usage statistics was not provided");
        data = {};
        for(var browser in customStats)fillUsage(data, browser, customStats[browser]);
    } else if (typeof stats === "string") {
        if (stats.length > 2) stats = stats.toLowerCase();
        else stats = stats.toUpperCase();
        env.loadCountry(browserslist.usage, stats, browserslist.data);
        data = browserslist.usage[stats];
    } else {
        if ("dataByBrowser" in stats) stats = stats.dataByBrowser;
        data = {};
        for(var name in stats)for(var version in stats[name])data[name + " " + version] = stats[name][version];
    }
    return browsers.reduce(function(all, i) {
        var usage = data[i];
        if (usage === undefined) usage = data[i.replace(/ \S+$/, " 0")];
        return all + (usage || 0);
    }, 0);
};
function nodeQuery(context, node) {
    var matched = browserslist.nodeVersions.filter(function(i) {
        return isVersionsMatch(i, node.version);
    });
    if (matched.length === 0) {
        if (context.ignoreUnknownVersions) return [];
        else throw new BrowserslistError("Unknown version " + node.version + " of Node.js");
    }
    return [
        "node " + matched[matched.length - 1]
    ];
}
function sinceQuery(context, node) {
    var year = parseInt(node.year);
    var month = parseInt(node.month || "01") - 1;
    var day = parseInt(node.day || "01");
    return filterByYear(Date.UTC(year, month, day, 0, 0, 0), context);
}
function coverQuery(context, node) {
    var coverage = parseFloat(node.coverage);
    var usage = browserslist.usage.global;
    if (node.place) {
        if (node.place.match(/^my\s+stats$/i)) {
            if (!context.customUsage) throw new BrowserslistError("Custom usage statistics was not provided");
            usage = context.customUsage;
        } else {
            var place;
            if (node.place.length === 2) place = node.place.toUpperCase();
            else place = node.place.toLowerCase();
            env.loadCountry(browserslist.usage, place, browserslist.data);
            usage = browserslist.usage[place];
        }
    }
    var versions = Object.keys(usage).sort(function(a, b) {
        return usage[b] - usage[a];
    });
    var coveraged = 0;
    var result = [];
    var version;
    for(var i = 0; i < versions.length; i++){
        version = versions[i];
        if (usage[version] === 0) break;
        coveraged += usage[version];
        result.push(version);
        if (coveraged >= coverage) break;
    }
    return result;
}
var QUERIES = {
    last_major_versions: {
        matches: [
            "versions"
        ],
        regexp: /^last\s+(\d+)\s+major\s+versions?$/i,
        select: function(context, node) {
            return Object.keys(agents).reduce(function(selected, name) {
                var data = byName(name, context);
                if (!data) return selected;
                var list = getMajorVersions(data.released, node.versions);
                list = list.map(nameMapper(data.name));
                if (data.name === "android") list = filterAndroid(list, node.versions, context);
                return selected.concat(list);
            }, []);
        }
    },
    last_versions: {
        matches: [
            "versions"
        ],
        regexp: /^last\s+(\d+)\s+versions?$/i,
        select: function(context, node) {
            return Object.keys(agents).reduce(function(selected, name) {
                var data = byName(name, context);
                if (!data) return selected;
                var list = data.released.slice(-node.versions);
                list = list.map(nameMapper(data.name));
                if (data.name === "android") list = filterAndroid(list, node.versions, context);
                return selected.concat(list);
            }, []);
        }
    },
    last_electron_major_versions: {
        matches: [
            "versions"
        ],
        regexp: /^last\s+(\d+)\s+electron\s+major\s+versions?$/i,
        select: function(context, node) {
            var validVersions = getMajorVersions(Object.keys(e2c), node.versions);
            return validVersions.map(function(i) {
                return "chrome " + e2c[i];
            });
        }
    },
    last_node_major_versions: {
        matches: [
            "versions"
        ],
        regexp: /^last\s+(\d+)\s+node\s+major\s+versions?$/i,
        select: function(context, node) {
            return getMajorVersions(browserslist.nodeVersions, node.versions).map(function(version) {
                return "node " + version;
            });
        }
    },
    last_browser_major_versions: {
        matches: [
            "versions",
            "browser"
        ],
        regexp: /^last\s+(\d+)\s+(\w+)\s+major\s+versions?$/i,
        select: function(context, node) {
            var data = checkName(node.browser, context);
            var validVersions = getMajorVersions(data.released, node.versions);
            var list = validVersions.map(nameMapper(data.name));
            if (data.name === "android") list = filterAndroid(list, node.versions, context);
            return list;
        }
    },
    last_electron_versions: {
        matches: [
            "versions"
        ],
        regexp: /^last\s+(\d+)\s+electron\s+versions?$/i,
        select: function(context, node) {
            return Object.keys(e2c).slice(-node.versions).map(function(i) {
                return "chrome " + e2c[i];
            });
        }
    },
    last_node_versions: {
        matches: [
            "versions"
        ],
        regexp: /^last\s+(\d+)\s+node\s+versions?$/i,
        select: function(context, node) {
            return browserslist.nodeVersions.slice(-node.versions).map(function(version) {
                return "node " + version;
            });
        }
    },
    last_browser_versions: {
        matches: [
            "versions",
            "browser"
        ],
        regexp: /^last\s+(\d+)\s+(\w+)\s+versions?$/i,
        select: function(context, node) {
            var data = checkName(node.browser, context);
            var list = data.released.slice(-node.versions).map(nameMapper(data.name));
            if (data.name === "android") list = filterAndroid(list, node.versions, context);
            return list;
        }
    },
    unreleased_versions: {
        matches: [],
        regexp: /^unreleased\s+versions$/i,
        select: function(context) {
            return Object.keys(agents).reduce(function(selected, name) {
                var data = byName(name, context);
                if (!data) return selected;
                var list = data.versions.filter(function(v) {
                    return data.released.indexOf(v) === -1;
                });
                list = list.map(nameMapper(data.name));
                return selected.concat(list);
            }, []);
        }
    },
    unreleased_electron_versions: {
        matches: [],
        regexp: /^unreleased\s+electron\s+versions?$/i,
        select: function() {
            return [];
        }
    },
    unreleased_browser_versions: {
        matches: [
            "browser"
        ],
        regexp: /^unreleased\s+(\w+)\s+versions?$/i,
        select: function(context, node) {
            var data = checkName(node.browser, context);
            return data.versions.filter(function(v) {
                return data.released.indexOf(v) === -1;
            }).map(nameMapper(data.name));
        }
    },
    last_years: {
        matches: [
            "years"
        ],
        regexp: /^last\s+(\d*.?\d+)\s+years?$/i,
        select: function(context, node) {
            return filterByYear(Date.now() - YEAR * node.years, context);
        }
    },
    since_y: {
        matches: [
            "year"
        ],
        regexp: /^since (\d+)$/i,
        select: sinceQuery
    },
    since_y_m: {
        matches: [
            "year",
            "month"
        ],
        regexp: /^since (\d+)-(\d+)$/i,
        select: sinceQuery
    },
    since_y_m_d: {
        matches: [
            "year",
            "month",
            "day"
        ],
        regexp: /^since (\d+)-(\d+)-(\d+)$/i,
        select: sinceQuery
    },
    popularity: {
        matches: [
            "sign",
            "popularity"
        ],
        regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%$/,
        select: function(context, node) {
            var popularity = parseFloat(node.popularity);
            var usage = browserslist.usage.global;
            return Object.keys(usage).reduce(function(result, version) {
                if (node.sign === ">") {
                    if (usage[version] > popularity) result.push(version);
                } else if (node.sign === "<") {
                    if (usage[version] < popularity) result.push(version);
                } else if (node.sign === "<=") {
                    if (usage[version] <= popularity) result.push(version);
                } else if (usage[version] >= popularity) result.push(version);
                return result;
            }, []);
        }
    },
    popularity_in_my_stats: {
        matches: [
            "sign",
            "popularity"
        ],
        regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+my\s+stats$/,
        select: function(context, node) {
            var popularity = parseFloat(node.popularity);
            if (!context.customUsage) throw new BrowserslistError("Custom usage statistics was not provided");
            var usage = context.customUsage;
            return Object.keys(usage).reduce(function(result, version) {
                var percentage = usage[version];
                if (percentage == null) return result;
                if (node.sign === ">") {
                    if (percentage > popularity) result.push(version);
                } else if (node.sign === "<") {
                    if (percentage < popularity) result.push(version);
                } else if (node.sign === "<=") {
                    if (percentage <= popularity) result.push(version);
                } else if (percentage >= popularity) result.push(version);
                return result;
            }, []);
        }
    },
    popularity_in_config_stats: {
        matches: [
            "sign",
            "popularity",
            "config"
        ],
        regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+(\S+)\s+stats$/,
        select: function(context, node) {
            var popularity = parseFloat(node.popularity);
            var stats = env.loadStat(context, node.config, browserslist.data);
            if (stats) {
                context.customUsage = {};
                for(var browser in stats)fillUsage(context.customUsage, browser, stats[browser]);
            }
            if (!context.customUsage) throw new BrowserslistError("Custom usage statistics was not provided");
            var usage = context.customUsage;
            return Object.keys(usage).reduce(function(result, version) {
                var percentage = usage[version];
                if (percentage == null) return result;
                if (node.sign === ">") {
                    if (percentage > popularity) result.push(version);
                } else if (node.sign === "<") {
                    if (percentage < popularity) result.push(version);
                } else if (node.sign === "<=") {
                    if (percentage <= popularity) result.push(version);
                } else if (percentage >= popularity) result.push(version);
                return result;
            }, []);
        }
    },
    popularity_in_place: {
        matches: [
            "sign",
            "popularity",
            "place"
        ],
        regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+((alt-)?\w\w)$/,
        select: function(context, node) {
            var popularity = parseFloat(node.popularity);
            var place = node.place;
            if (place.length === 2) place = place.toUpperCase();
            else place = place.toLowerCase();
            env.loadCountry(browserslist.usage, place, browserslist.data);
            var usage = browserslist.usage[place];
            return Object.keys(usage).reduce(function(result, version) {
                var percentage = usage[version];
                if (percentage == null) return result;
                if (node.sign === ">") {
                    if (percentage > popularity) result.push(version);
                } else if (node.sign === "<") {
                    if (percentage < popularity) result.push(version);
                } else if (node.sign === "<=") {
                    if (percentage <= popularity) result.push(version);
                } else if (percentage >= popularity) result.push(version);
                return result;
            }, []);
        }
    },
    cover: {
        matches: [
            "coverage"
        ],
        regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%$/i,
        select: coverQuery
    },
    cover_in: {
        matches: [
            "coverage",
            "place"
        ],
        regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%\s+in\s+(my\s+stats|(alt-)?\w\w)$/i,
        select: coverQuery
    },
    supports: {
        matches: [
            "feature"
        ],
        regexp: /^supports\s+([\w-]+)$/,
        select: function(context, node) {
            env.loadFeature(browserslist.cache, node.feature);
            var features = browserslist.cache[node.feature];
            return Object.keys(features).reduce(function(result, version) {
                var flags = features[version];
                if (flags.indexOf("y") >= 0 || flags.indexOf("a") >= 0) result.push(version);
                return result;
            }, []);
        }
    },
    electron_range: {
        matches: [
            "from",
            "to"
        ],
        regexp: /^electron\s+([\d.]+)\s*-\s*([\d.]+)$/i,
        select: function(context, node) {
            var fromToUse = normalizeElectron(node.from);
            var toToUse = normalizeElectron(node.to);
            var from = parseFloat(node.from);
            var to = parseFloat(node.to);
            if (!e2c[fromToUse]) throw new BrowserslistError("Unknown version " + from + " of electron");
            if (!e2c[toToUse]) throw new BrowserslistError("Unknown version " + to + " of electron");
            return Object.keys(e2c).filter(function(i) {
                var parsed = parseFloat(i);
                return parsed >= from && parsed <= to;
            }).map(function(i) {
                return "chrome " + e2c[i];
            });
        }
    },
    node_range: {
        matches: [
            "from",
            "to"
        ],
        regexp: /^node\s+([\d.]+)\s*-\s*([\d.]+)$/i,
        select: function(context, node) {
            return browserslist.nodeVersions.filter(semverFilterLoose(">=", node.from)).filter(semverFilterLoose("<=", node.to)).map(function(v) {
                return "node " + v;
            });
        }
    },
    browser_range: {
        matches: [
            "browser",
            "from",
            "to"
        ],
        regexp: /^(\w+)\s+([\d.]+)\s*-\s*([\d.]+)$/i,
        select: function(context, node) {
            var data = checkName(node.browser, context);
            var from = parseFloat(normalizeVersion(data, node.from) || node.from);
            var to = parseFloat(normalizeVersion(data, node.to) || node.to);
            function filter(v) {
                var parsed = parseFloat(v);
                return parsed >= from && parsed <= to;
            }
            return data.released.filter(filter).map(nameMapper(data.name));
        }
    },
    electron_ray: {
        matches: [
            "sign",
            "version"
        ],
        regexp: /^electron\s*(>=?|<=?)\s*([\d.]+)$/i,
        select: function(context, node) {
            var versionToUse = normalizeElectron(node.version);
            return Object.keys(e2c).filter(generateFilter(node.sign, versionToUse)).map(function(i) {
                return "chrome " + e2c[i];
            });
        }
    },
    node_ray: {
        matches: [
            "sign",
            "version"
        ],
        regexp: /^node\s*(>=?|<=?)\s*([\d.]+)$/i,
        select: function(context, node) {
            return browserslist.nodeVersions.filter(generateSemverFilter(node.sign, node.version)).map(function(v) {
                return "node " + v;
            });
        }
    },
    browser_ray: {
        matches: [
            "browser",
            "sign",
            "version"
        ],
        regexp: /^(\w+)\s*(>=?|<=?)\s*([\d.]+)$/,
        select: function(context, node) {
            var version = node.version;
            var data = checkName(node.browser, context);
            var alias = browserslist.versionAliases[data.name][version];
            if (alias) version = alias;
            return data.released.filter(generateFilter(node.sign, version)).map(function(v) {
                return data.name + " " + v;
            });
        }
    },
    firefox_esr: {
        matches: [],
        regexp: /^(firefox|ff|fx)\s+esr$/i,
        select: function() {
            return [
                "firefox 102"
            ];
        }
    },
    opera_mini_all: {
        matches: [],
        regexp: /(operamini|op_mini)\s+all/i,
        select: function() {
            return [
                "op_mini all"
            ];
        }
    },
    electron_version: {
        matches: [
            "version"
        ],
        regexp: /^electron\s+([\d.]+)$/i,
        select: function(context, node) {
            var versionToUse = normalizeElectron(node.version);
            var chrome = e2c[versionToUse];
            if (!chrome) throw new BrowserslistError("Unknown version " + node.version + " of electron");
            return [
                "chrome " + chrome
            ];
        }
    },
    node_major_version: {
        matches: [
            "version"
        ],
        regexp: /^node\s+(\d+)$/i,
        select: nodeQuery
    },
    node_minor_version: {
        matches: [
            "version"
        ],
        regexp: /^node\s+(\d+\.\d+)$/i,
        select: nodeQuery
    },
    node_patch_version: {
        matches: [
            "version"
        ],
        regexp: /^node\s+(\d+\.\d+\.\d+)$/i,
        select: nodeQuery
    },
    current_node: {
        matches: [],
        regexp: /^current\s+node$/i,
        select: function(context) {
            return [
                env.currentNode(resolve, context)
            ];
        }
    },
    maintained_node: {
        matches: [],
        regexp: /^maintained\s+node\s+versions$/i,
        select: function(context) {
            var now = Date.now();
            var queries = Object.keys(jsEOL).filter(function(key) {
                return now < Date.parse(jsEOL[key].end) && now > Date.parse(jsEOL[key].start) && isEolReleased(key);
            }).map(function(key) {
                return "node " + key.slice(1);
            });
            return resolve(queries, context);
        }
    },
    phantomjs_1_9: {
        matches: [],
        regexp: /^phantomjs\s+1.9$/i,
        select: function() {
            return [
                "safari 5"
            ];
        }
    },
    phantomjs_2_1: {
        matches: [],
        regexp: /^phantomjs\s+2.1$/i,
        select: function() {
            return [
                "safari 6"
            ];
        }
    },
    browser_version: {
        matches: [
            "browser",
            "version"
        ],
        regexp: /^(\w+)\s+(tp|[\d.]+)$/i,
        select: function(context, node) {
            var version = node.version;
            if (/^tp$/i.test(version)) version = "TP";
            var data = checkName(node.browser, context);
            var alias = normalizeVersion(data, version);
            if (alias) version = alias;
            else {
                if (version.indexOf(".") === -1) alias = version + ".0";
                else alias = version.replace(/\.0$/, "");
                alias = normalizeVersion(data, alias);
                if (alias) version = alias;
                else if (context.ignoreUnknownVersions) return [];
                else throw new BrowserslistError("Unknown version " + version + " of " + node.browser);
            }
            return [
                data.name + " " + version
            ];
        }
    },
    browserslist_config: {
        matches: [],
        regexp: /^browserslist config$/i,
        select: function(context) {
            return browserslist(undefined, context);
        }
    },
    extends: {
        matches: [
            "config"
        ],
        regexp: /^extends (.+)$/i,
        select: function(context, node) {
            return resolve(env.loadQueries(context, node.config), context);
        }
    },
    defaults: {
        matches: [],
        regexp: /^defaults$/i,
        select: function(context) {
            return resolve(browserslist.defaults, context);
        }
    },
    dead: {
        matches: [],
        regexp: /^dead$/i,
        select: function(context) {
            var dead = [
                "Baidu >= 0",
                "ie <= 11",
                "ie_mob <= 11",
                "bb <= 10",
                "op_mob <= 12.1",
                "samsung 4"
            ];
            return resolve(dead, context);
        }
    },
    unknown: {
        matches: [],
        regexp: /^(\w+)$/i,
        select: function(context, node) {
            if (byName(node.query, context)) throw new BrowserslistError("Specify versions in Browserslist query for browser " + node.query);
            else throw unknownQuery(node.query);
        }
    }
};
(function() {
    for(var name in agents){
        var browser = agents[name];
        browserslist.data[name] = {
            name: name,
            versions: normalize(agents[name].versions),
            released: normalize(agents[name].versions.slice(0, -3)),
            releaseDate: agents[name].release_date
        };
        fillUsage(browserslist.usage.global, name, browser.usage_global);
        browserslist.versionAliases[name] = {};
        for(var i = 0; i < browser.versions.length; i++){
            var full = browser.versions[i];
            if (!full) continue;
            if (full.indexOf("-") !== -1) {
                var interval = full.split("-");
                for(var j = 0; j < interval.length; j++)browserslist.versionAliases[name][interval[j]] = full;
            }
        }
    }
    browserslist.versionAliases.op_mob["59"] = "58";
    browserslist.nodeVersions = jsReleases.map(function(release) {
        return release.version;
    });
})();
module.exports = browserslist;

},{"2dbbbb0bc07c87c9":"qrnUB","bf482965d275e354":"1o0P3","3f437ee999fcc89e":"b7Kzh","d610fb3e1f32be4c":"jhUEF","4bd56fb766e60c44":"i95xm","ce5345215222ec0":"4GzM4","f113e7c12a3ee40e":"a4Lkh","d68b08d31de290b6":"hteYL"}],"qrnUB":[function(require,module,exports) {
module.exports = JSON.parse('[{"name":"nodejs","version":"0.2.0","date":"2011-08-26","lts":false,"security":false},{"name":"nodejs","version":"0.3.0","date":"2011-08-26","lts":false,"security":false},{"name":"nodejs","version":"0.4.0","date":"2011-08-26","lts":false,"security":false},{"name":"nodejs","version":"0.5.0","date":"2011-08-26","lts":false,"security":false},{"name":"nodejs","version":"0.6.0","date":"2011-11-04","lts":false,"security":false},{"name":"nodejs","version":"0.7.0","date":"2012-01-17","lts":false,"security":false},{"name":"nodejs","version":"0.8.0","date":"2012-06-22","lts":false,"security":false},{"name":"nodejs","version":"0.9.0","date":"2012-07-20","lts":false,"security":false},{"name":"nodejs","version":"0.10.0","date":"2013-03-11","lts":false,"security":false},{"name":"nodejs","version":"0.11.0","date":"2013-03-28","lts":false,"security":false},{"name":"nodejs","version":"0.12.0","date":"2015-02-06","lts":false,"security":false},{"name":"nodejs","version":"4.0.0","date":"2015-09-08","lts":false,"security":false},{"name":"nodejs","version":"4.1.0","date":"2015-09-17","lts":false,"security":false},{"name":"nodejs","version":"4.2.0","date":"2015-10-12","lts":"Argon","security":false},{"name":"nodejs","version":"4.3.0","date":"2016-02-09","lts":"Argon","security":false},{"name":"nodejs","version":"4.4.0","date":"2016-03-08","lts":"Argon","security":false},{"name":"nodejs","version":"4.5.0","date":"2016-08-16","lts":"Argon","security":false},{"name":"nodejs","version":"4.6.0","date":"2016-09-27","lts":"Argon","security":true},{"name":"nodejs","version":"4.7.0","date":"2016-12-06","lts":"Argon","security":false},{"name":"nodejs","version":"4.8.0","date":"2017-02-21","lts":"Argon","security":false},{"name":"nodejs","version":"4.9.0","date":"2018-03-28","lts":"Argon","security":true},{"name":"nodejs","version":"5.0.0","date":"2015-10-29","lts":false,"security":false},{"name":"nodejs","version":"5.1.0","date":"2015-11-17","lts":false,"security":false},{"name":"nodejs","version":"5.2.0","date":"2015-12-09","lts":false,"security":false},{"name":"nodejs","version":"5.3.0","date":"2015-12-15","lts":false,"security":false},{"name":"nodejs","version":"5.4.0","date":"2016-01-06","lts":false,"security":false},{"name":"nodejs","version":"5.5.0","date":"2016-01-21","lts":false,"security":false},{"name":"nodejs","version":"5.6.0","date":"2016-02-09","lts":false,"security":false},{"name":"nodejs","version":"5.7.0","date":"2016-02-23","lts":false,"security":false},{"name":"nodejs","version":"5.8.0","date":"2016-03-09","lts":false,"security":false},{"name":"nodejs","version":"5.9.0","date":"2016-03-16","lts":false,"security":false},{"name":"nodejs","version":"5.10.0","date":"2016-04-01","lts":false,"security":false},{"name":"nodejs","version":"5.11.0","date":"2016-04-21","lts":false,"security":false},{"name":"nodejs","version":"5.12.0","date":"2016-06-23","lts":false,"security":false},{"name":"nodejs","version":"6.0.0","date":"2016-04-26","lts":false,"security":false},{"name":"nodejs","version":"6.1.0","date":"2016-05-05","lts":false,"security":false},{"name":"nodejs","version":"6.2.0","date":"2016-05-17","lts":false,"security":false},{"name":"nodejs","version":"6.3.0","date":"2016-07-06","lts":false,"security":false},{"name":"nodejs","version":"6.4.0","date":"2016-08-12","lts":false,"security":false},{"name":"nodejs","version":"6.5.0","date":"2016-08-26","lts":false,"security":false},{"name":"nodejs","version":"6.6.0","date":"2016-09-14","lts":false,"security":false},{"name":"nodejs","version":"6.7.0","date":"2016-09-27","lts":false,"security":true},{"name":"nodejs","version":"6.8.0","date":"2016-10-12","lts":false,"security":false},{"name":"nodejs","version":"6.9.0","date":"2016-10-18","lts":"Boron","security":false},{"name":"nodejs","version":"6.10.0","date":"2017-02-21","lts":"Boron","security":false},{"name":"nodejs","version":"6.11.0","date":"2017-06-06","lts":"Boron","security":false},{"name":"nodejs","version":"6.12.0","date":"2017-11-06","lts":"Boron","security":false},{"name":"nodejs","version":"6.13.0","date":"2018-02-10","lts":"Boron","security":false},{"name":"nodejs","version":"6.14.0","date":"2018-03-28","lts":"Boron","security":true},{"name":"nodejs","version":"6.15.0","date":"2018-11-27","lts":"Boron","security":true},{"name":"nodejs","version":"6.16.0","date":"2018-12-26","lts":"Boron","security":false},{"name":"nodejs","version":"6.17.0","date":"2019-02-28","lts":"Boron","security":true},{"name":"nodejs","version":"7.0.0","date":"2016-10-25","lts":false,"security":false},{"name":"nodejs","version":"7.1.0","date":"2016-11-08","lts":false,"security":false},{"name":"nodejs","version":"7.2.0","date":"2016-11-22","lts":false,"security":false},{"name":"nodejs","version":"7.3.0","date":"2016-12-20","lts":false,"security":false},{"name":"nodejs","version":"7.4.0","date":"2017-01-04","lts":false,"security":false},{"name":"nodejs","version":"7.5.0","date":"2017-01-31","lts":false,"security":false},{"name":"nodejs","version":"7.6.0","date":"2017-02-21","lts":false,"security":false},{"name":"nodejs","version":"7.7.0","date":"2017-02-28","lts":false,"security":false},{"name":"nodejs","version":"7.8.0","date":"2017-03-29","lts":false,"security":false},{"name":"nodejs","version":"7.9.0","date":"2017-04-11","lts":false,"security":false},{"name":"nodejs","version":"7.10.0","date":"2017-05-02","lts":false,"security":false},{"name":"nodejs","version":"8.0.0","date":"2017-05-30","lts":false,"security":false},{"name":"nodejs","version":"8.1.0","date":"2017-06-08","lts":false,"security":false},{"name":"nodejs","version":"8.2.0","date":"2017-07-19","lts":false,"security":false},{"name":"nodejs","version":"8.3.0","date":"2017-08-08","lts":false,"security":false},{"name":"nodejs","version":"8.4.0","date":"2017-08-15","lts":false,"security":false},{"name":"nodejs","version":"8.5.0","date":"2017-09-12","lts":false,"security":false},{"name":"nodejs","version":"8.6.0","date":"2017-09-26","lts":false,"security":false},{"name":"nodejs","version":"8.7.0","date":"2017-10-11","lts":false,"security":false},{"name":"nodejs","version":"8.8.0","date":"2017-10-24","lts":false,"security":false},{"name":"nodejs","version":"8.9.0","date":"2017-10-31","lts":"Carbon","security":false},{"name":"nodejs","version":"8.10.0","date":"2018-03-06","lts":"Carbon","security":false},{"name":"nodejs","version":"8.11.0","date":"2018-03-28","lts":"Carbon","security":true},{"name":"nodejs","version":"8.12.0","date":"2018-09-10","lts":"Carbon","security":false},{"name":"nodejs","version":"8.13.0","date":"2018-11-20","lts":"Carbon","security":false},{"name":"nodejs","version":"8.14.0","date":"2018-11-27","lts":"Carbon","security":true},{"name":"nodejs","version":"8.15.0","date":"2018-12-26","lts":"Carbon","security":false},{"name":"nodejs","version":"8.16.0","date":"2019-04-16","lts":"Carbon","security":false},{"name":"nodejs","version":"8.17.0","date":"2019-12-17","lts":"Carbon","security":true},{"name":"nodejs","version":"9.0.0","date":"2017-10-31","lts":false,"security":false},{"name":"nodejs","version":"9.1.0","date":"2017-11-07","lts":false,"security":false},{"name":"nodejs","version":"9.2.0","date":"2017-11-14","lts":false,"security":false},{"name":"nodejs","version":"9.3.0","date":"2017-12-12","lts":false,"security":false},{"name":"nodejs","version":"9.4.0","date":"2018-01-10","lts":false,"security":false},{"name":"nodejs","version":"9.5.0","date":"2018-01-31","lts":false,"security":false},{"name":"nodejs","version":"9.6.0","date":"2018-02-21","lts":false,"security":false},{"name":"nodejs","version":"9.7.0","date":"2018-03-01","lts":false,"security":false},{"name":"nodejs","version":"9.8.0","date":"2018-03-07","lts":false,"security":false},{"name":"nodejs","version":"9.9.0","date":"2018-03-21","lts":false,"security":false},{"name":"nodejs","version":"9.10.0","date":"2018-03-28","lts":false,"security":true},{"name":"nodejs","version":"9.11.0","date":"2018-04-04","lts":false,"security":false},{"name":"nodejs","version":"10.0.0","date":"2018-04-24","lts":false,"security":false},{"name":"nodejs","version":"10.1.0","date":"2018-05-08","lts":false,"security":false},{"name":"nodejs","version":"10.2.0","date":"2018-05-23","lts":false,"security":false},{"name":"nodejs","version":"10.3.0","date":"2018-05-29","lts":false,"security":false},{"name":"nodejs","version":"10.4.0","date":"2018-06-06","lts":false,"security":false},{"name":"nodejs","version":"10.5.0","date":"2018-06-20","lts":false,"security":false},{"name":"nodejs","version":"10.6.0","date":"2018-07-04","lts":false,"security":false},{"name":"nodejs","version":"10.7.0","date":"2018-07-18","lts":false,"security":false},{"name":"nodejs","version":"10.8.0","date":"2018-08-01","lts":false,"security":false},{"name":"nodejs","version":"10.9.0","date":"2018-08-15","lts":false,"security":false},{"name":"nodejs","version":"10.10.0","date":"2018-09-06","lts":false,"security":false},{"name":"nodejs","version":"10.11.0","date":"2018-09-19","lts":false,"security":false},{"name":"nodejs","version":"10.12.0","date":"2018-10-10","lts":false,"security":false},{"name":"nodejs","version":"10.13.0","date":"2018-10-30","lts":"Dubnium","security":false},{"name":"nodejs","version":"10.14.0","date":"2018-11-27","lts":"Dubnium","security":true},{"name":"nodejs","version":"10.15.0","date":"2018-12-26","lts":"Dubnium","security":false},{"name":"nodejs","version":"10.16.0","date":"2019-05-28","lts":"Dubnium","security":false},{"name":"nodejs","version":"10.17.0","date":"2019-10-22","lts":"Dubnium","security":false},{"name":"nodejs","version":"10.18.0","date":"2019-12-17","lts":"Dubnium","security":true},{"name":"nodejs","version":"10.19.0","date":"2020-02-05","lts":"Dubnium","security":true},{"name":"nodejs","version":"10.20.0","date":"2020-03-26","lts":"Dubnium","security":false},{"name":"nodejs","version":"10.21.0","date":"2020-06-02","lts":"Dubnium","security":true},{"name":"nodejs","version":"10.22.0","date":"2020-07-21","lts":"Dubnium","security":false},{"name":"nodejs","version":"10.23.0","date":"2020-10-27","lts":"Dubnium","security":false},{"name":"nodejs","version":"10.24.0","date":"2021-02-23","lts":"Dubnium","security":true},{"name":"nodejs","version":"11.0.0","date":"2018-10-23","lts":false,"security":false},{"name":"nodejs","version":"11.1.0","date":"2018-10-30","lts":false,"security":false},{"name":"nodejs","version":"11.2.0","date":"2018-11-15","lts":false,"security":false},{"name":"nodejs","version":"11.3.0","date":"2018-11-27","lts":false,"security":true},{"name":"nodejs","version":"11.4.0","date":"2018-12-07","lts":false,"security":false},{"name":"nodejs","version":"11.5.0","date":"2018-12-18","lts":false,"security":false},{"name":"nodejs","version":"11.6.0","date":"2018-12-26","lts":false,"security":false},{"name":"nodejs","version":"11.7.0","date":"2019-01-17","lts":false,"security":false},{"name":"nodejs","version":"11.8.0","date":"2019-01-24","lts":false,"security":false},{"name":"nodejs","version":"11.9.0","date":"2019-01-30","lts":false,"security":false},{"name":"nodejs","version":"11.10.0","date":"2019-02-14","lts":false,"security":false},{"name":"nodejs","version":"11.11.0","date":"2019-03-05","lts":false,"security":false},{"name":"nodejs","version":"11.12.0","date":"2019-03-14","lts":false,"security":false},{"name":"nodejs","version":"11.13.0","date":"2019-03-28","lts":false,"security":false},{"name":"nodejs","version":"11.14.0","date":"2019-04-10","lts":false,"security":false},{"name":"nodejs","version":"11.15.0","date":"2019-04-30","lts":false,"security":false},{"name":"nodejs","version":"12.0.0","date":"2019-04-23","lts":false,"security":false},{"name":"nodejs","version":"12.1.0","date":"2019-04-29","lts":false,"security":false},{"name":"nodejs","version":"12.2.0","date":"2019-05-07","lts":false,"security":false},{"name":"nodejs","version":"12.3.0","date":"2019-05-21","lts":false,"security":false},{"name":"nodejs","version":"12.4.0","date":"2019-06-04","lts":false,"security":false},{"name":"nodejs","version":"12.5.0","date":"2019-06-26","lts":false,"security":false},{"name":"nodejs","version":"12.6.0","date":"2019-07-03","lts":false,"security":false},{"name":"nodejs","version":"12.7.0","date":"2019-07-23","lts":false,"security":false},{"name":"nodejs","version":"12.8.0","date":"2019-08-06","lts":false,"security":false},{"name":"nodejs","version":"12.9.0","date":"2019-08-20","lts":false,"security":false},{"name":"nodejs","version":"12.10.0","date":"2019-09-04","lts":false,"security":false},{"name":"nodejs","version":"12.11.0","date":"2019-09-25","lts":false,"security":false},{"name":"nodejs","version":"12.12.0","date":"2019-10-11","lts":false,"security":false},{"name":"nodejs","version":"12.13.0","date":"2019-10-21","lts":"Erbium","security":false},{"name":"nodejs","version":"12.14.0","date":"2019-12-17","lts":"Erbium","security":true},{"name":"nodejs","version":"12.15.0","date":"2020-02-05","lts":"Erbium","security":true},{"name":"nodejs","version":"12.16.0","date":"2020-02-11","lts":"Erbium","security":false},{"name":"nodejs","version":"12.17.0","date":"2020-05-26","lts":"Erbium","security":false},{"name":"nodejs","version":"12.18.0","date":"2020-06-02","lts":"Erbium","security":true},{"name":"nodejs","version":"12.19.0","date":"2020-10-06","lts":"Erbium","security":false},{"name":"nodejs","version":"12.20.0","date":"2020-11-24","lts":"Erbium","security":false},{"name":"nodejs","version":"12.21.0","date":"2021-02-23","lts":"Erbium","security":true},{"name":"nodejs","version":"12.22.0","date":"2021-03-30","lts":"Erbium","security":false},{"name":"nodejs","version":"13.0.0","date":"2019-10-22","lts":false,"security":false},{"name":"nodejs","version":"13.1.0","date":"2019-11-05","lts":false,"security":false},{"name":"nodejs","version":"13.2.0","date":"2019-11-21","lts":false,"security":false},{"name":"nodejs","version":"13.3.0","date":"2019-12-03","lts":false,"security":false},{"name":"nodejs","version":"13.4.0","date":"2019-12-17","lts":false,"security":true},{"name":"nodejs","version":"13.5.0","date":"2019-12-18","lts":false,"security":false},{"name":"nodejs","version":"13.6.0","date":"2020-01-07","lts":false,"security":false},{"name":"nodejs","version":"13.7.0","date":"2020-01-21","lts":false,"security":false},{"name":"nodejs","version":"13.8.0","date":"2020-02-05","lts":false,"security":true},{"name":"nodejs","version":"13.9.0","date":"2020-02-18","lts":false,"security":false},{"name":"nodejs","version":"13.10.0","date":"2020-03-04","lts":false,"security":false},{"name":"nodejs","version":"13.11.0","date":"2020-03-12","lts":false,"security":false},{"name":"nodejs","version":"13.12.0","date":"2020-03-26","lts":false,"security":false},{"name":"nodejs","version":"13.13.0","date":"2020-04-14","lts":false,"security":false},{"name":"nodejs","version":"13.14.0","date":"2020-04-29","lts":false,"security":false},{"name":"nodejs","version":"14.0.0","date":"2020-04-21","lts":false,"security":false},{"name":"nodejs","version":"14.1.0","date":"2020-04-29","lts":false,"security":false},{"name":"nodejs","version":"14.2.0","date":"2020-05-05","lts":false,"security":false},{"name":"nodejs","version":"14.3.0","date":"2020-05-19","lts":false,"security":false},{"name":"nodejs","version":"14.4.0","date":"2020-06-02","lts":false,"security":true},{"name":"nodejs","version":"14.5.0","date":"2020-06-30","lts":false,"security":false},{"name":"nodejs","version":"14.6.0","date":"2020-07-20","lts":false,"security":false},{"name":"nodejs","version":"14.7.0","date":"2020-07-29","lts":false,"security":false},{"name":"nodejs","version":"14.8.0","date":"2020-08-11","lts":false,"security":false},{"name":"nodejs","version":"14.9.0","date":"2020-08-27","lts":false,"security":false},{"name":"nodejs","version":"14.10.0","date":"2020-09-08","lts":false,"security":false},{"name":"nodejs","version":"14.11.0","date":"2020-09-15","lts":false,"security":true},{"name":"nodejs","version":"14.12.0","date":"2020-09-22","lts":false,"security":false},{"name":"nodejs","version":"14.13.0","date":"2020-09-29","lts":false,"security":false},{"name":"nodejs","version":"14.14.0","date":"2020-10-15","lts":false,"security":false},{"name":"nodejs","version":"14.15.0","date":"2020-10-27","lts":"Fermium","security":false},{"name":"nodejs","version":"14.16.0","date":"2021-02-23","lts":"Fermium","security":true},{"name":"nodejs","version":"14.17.0","date":"2021-05-11","lts":"Fermium","security":false},{"name":"nodejs","version":"14.18.0","date":"2021-09-28","lts":"Fermium","security":false},{"name":"nodejs","version":"14.19.0","date":"2022-02-01","lts":"Fermium","security":false},{"name":"nodejs","version":"14.20.0","date":"2022-07-07","lts":"Fermium","security":true},{"name":"nodejs","version":"14.21.0","date":"2022-11-01","lts":"Fermium","security":false},{"name":"nodejs","version":"15.0.0","date":"2020-10-20","lts":false,"security":false},{"name":"nodejs","version":"15.1.0","date":"2020-11-04","lts":false,"security":false},{"name":"nodejs","version":"15.2.0","date":"2020-11-10","lts":false,"security":false},{"name":"nodejs","version":"15.3.0","date":"2020-11-24","lts":false,"security":false},{"name":"nodejs","version":"15.4.0","date":"2020-12-09","lts":false,"security":false},{"name":"nodejs","version":"15.5.0","date":"2020-12-22","lts":false,"security":false},{"name":"nodejs","version":"15.6.0","date":"2021-01-14","lts":false,"security":false},{"name":"nodejs","version":"15.7.0","date":"2021-01-25","lts":false,"security":false},{"name":"nodejs","version":"15.8.0","date":"2021-02-02","lts":false,"security":false},{"name":"nodejs","version":"15.9.0","date":"2021-02-18","lts":false,"security":false},{"name":"nodejs","version":"15.10.0","date":"2021-02-23","lts":false,"security":true},{"name":"nodejs","version":"15.11.0","date":"2021-03-03","lts":false,"security":false},{"name":"nodejs","version":"15.12.0","date":"2021-03-17","lts":false,"security":false},{"name":"nodejs","version":"15.13.0","date":"2021-03-31","lts":false,"security":false},{"name":"nodejs","version":"15.14.0","date":"2021-04-06","lts":false,"security":false},{"name":"nodejs","version":"16.0.0","date":"2021-04-20","lts":false,"security":false},{"name":"nodejs","version":"16.1.0","date":"2021-05-04","lts":false,"security":false},{"name":"nodejs","version":"16.2.0","date":"2021-05-19","lts":false,"security":false},{"name":"nodejs","version":"16.3.0","date":"2021-06-03","lts":false,"security":false},{"name":"nodejs","version":"16.4.0","date":"2021-06-23","lts":false,"security":false},{"name":"nodejs","version":"16.5.0","date":"2021-07-14","lts":false,"security":false},{"name":"nodejs","version":"16.6.0","date":"2021-07-29","lts":false,"security":true},{"name":"nodejs","version":"16.7.0","date":"2021-08-18","lts":false,"security":false},{"name":"nodejs","version":"16.8.0","date":"2021-08-25","lts":false,"security":false},{"name":"nodejs","version":"16.9.0","date":"2021-09-07","lts":false,"security":false},{"name":"nodejs","version":"16.10.0","date":"2021-09-22","lts":false,"security":false},{"name":"nodejs","version":"16.11.0","date":"2021-10-08","lts":false,"security":false},{"name":"nodejs","version":"16.12.0","date":"2021-10-20","lts":false,"security":false},{"name":"nodejs","version":"16.13.0","date":"2021-10-26","lts":"Gallium","security":false},{"name":"nodejs","version":"16.14.0","date":"2022-02-08","lts":"Gallium","security":false},{"name":"nodejs","version":"16.15.0","date":"2022-04-26","lts":"Gallium","security":false},{"name":"nodejs","version":"16.16.0","date":"2022-07-07","lts":"Gallium","security":true},{"name":"nodejs","version":"16.17.0","date":"2022-08-16","lts":"Gallium","security":false},{"name":"nodejs","version":"16.18.0","date":"2022-10-12","lts":"Gallium","security":false},{"name":"nodejs","version":"16.19.0","date":"2022-12-13","lts":"Gallium","security":false},{"name":"nodejs","version":"17.0.0","date":"2021-10-19","lts":false,"security":false},{"name":"nodejs","version":"17.1.0","date":"2021-11-09","lts":false,"security":false},{"name":"nodejs","version":"17.2.0","date":"2021-11-30","lts":false,"security":false},{"name":"nodejs","version":"17.3.0","date":"2021-12-17","lts":false,"security":false},{"name":"nodejs","version":"17.4.0","date":"2022-01-18","lts":false,"security":false},{"name":"nodejs","version":"17.5.0","date":"2022-02-10","lts":false,"security":false},{"name":"nodejs","version":"17.6.0","date":"2022-02-22","lts":false,"security":false},{"name":"nodejs","version":"17.7.0","date":"2022-03-09","lts":false,"security":false},{"name":"nodejs","version":"17.8.0","date":"2022-03-22","lts":false,"security":false},{"name":"nodejs","version":"17.9.0","date":"2022-04-07","lts":false,"security":false},{"name":"nodejs","version":"18.0.0","date":"2022-04-18","lts":false,"security":false},{"name":"nodejs","version":"18.1.0","date":"2022-05-03","lts":false,"security":false},{"name":"nodejs","version":"18.2.0","date":"2022-05-17","lts":false,"security":false},{"name":"nodejs","version":"18.3.0","date":"2022-06-02","lts":false,"security":false},{"name":"nodejs","version":"18.4.0","date":"2022-06-16","lts":false,"security":false},{"name":"nodejs","version":"18.5.0","date":"2022-07-06","lts":false,"security":true},{"name":"nodejs","version":"18.6.0","date":"2022-07-13","lts":false,"security":false},{"name":"nodejs","version":"18.7.0","date":"2022-07-26","lts":false,"security":false},{"name":"nodejs","version":"18.8.0","date":"2022-08-24","lts":false,"security":false},{"name":"nodejs","version":"18.9.0","date":"2022-09-07","lts":false,"security":false},{"name":"nodejs","version":"18.10.0","date":"2022-09-28","lts":false,"security":false},{"name":"nodejs","version":"18.11.0","date":"2022-10-13","lts":false,"security":false},{"name":"nodejs","version":"18.12.0","date":"2022-10-25","lts":"Hydrogen","security":false},{"name":"nodejs","version":"18.13.0","date":"2023-01-05","lts":"Hydrogen","security":false},{"name":"nodejs","version":"18.14.0","date":"2023-02-01","lts":"Hydrogen","security":false},{"name":"nodejs","version":"19.0.0","date":"2022-10-17","lts":false,"security":false},{"name":"nodejs","version":"19.1.0","date":"2022-11-14","lts":false,"security":false},{"name":"nodejs","version":"19.2.0","date":"2022-11-29","lts":false,"security":false},{"name":"nodejs","version":"19.3.0","date":"2022-12-14","lts":false,"security":false},{"name":"nodejs","version":"19.4.0","date":"2023-01-05","lts":false,"security":false},{"name":"nodejs","version":"19.5.0","date":"2023-01-24","lts":false,"security":false},{"name":"nodejs","version":"19.6.0","date":"2023-02-01","lts":false,"security":false}]');

},{}],"1o0P3":[function(require,module,exports) {
"use strict";
const browsers = require("a47f6e612bc663c2").browsers;
const versions = require("107d27a6af2a55fd").browserVersions;
const agentsData = require("68d4fed2cffd5fce");
function unpackBrowserVersions(versionsData) {
    return Object.keys(versionsData).reduce((usage, version)=>{
        usage[versions[version]] = versionsData[version];
        return usage;
    }, {});
}
module.exports.agents = Object.keys(agentsData).reduce((map, key)=>{
    let versionsData = agentsData[key];
    map[browsers[key]] = Object.keys(versionsData).reduce((data, entry)=>{
        if (entry === "A") data.usage_global = unpackBrowserVersions(versionsData[entry]);
        else if (entry === "C") data.versions = versionsData[entry].reduce((list, version)=>{
            if (version === "") list.push(null);
            else list.push(versions[version]);
            return list;
        }, []);
        else if (entry === "D") data.prefix_exceptions = unpackBrowserVersions(versionsData[entry]);
        else if (entry === "E") data.browser = versionsData[entry];
        else if (entry === "F") data.release_date = Object.keys(versionsData[entry]).reduce((map2, key2)=>{
            map2[versions[key2]] = versionsData[entry][key2];
            return map2;
        }, {});
        else // entry is B
        data.prefix = versionsData[entry];
        return data;
    }, {});
    return map;
}, {});

},{"a47f6e612bc663c2":"1klRD","107d27a6af2a55fd":"gSgrO","68d4fed2cffd5fce":"dwIbB"}],"1klRD":[function(require,module,exports) {
module.exports.browsers = require("9fa40a637f3d8ed4");

},{"9fa40a637f3d8ed4":"dD80h"}],"dD80h":[function(require,module,exports) {
module.exports = {
    A: "ie",
    B: "edge",
    C: "firefox",
    D: "chrome",
    E: "safari",
    F: "opera",
    G: "ios_saf",
    H: "op_mini",
    I: "android",
    J: "bb",
    K: "op_mob",
    L: "and_chr",
    M: "and_ff",
    N: "ie_mob",
    O: "and_uc",
    P: "samsung",
    Q: "and_qq",
    R: "baidu",
    S: "kaios"
};

},{}],"gSgrO":[function(require,module,exports) {
module.exports.browserVersions = require("b15a08aeef1f6c3c");

},{"b15a08aeef1f6c3c":"jocZZ"}],"jocZZ":[function(require,module,exports) {
module.exports = {
    "0": "24",
    "1": "25",
    "2": "26",
    "3": "27",
    "4": "28",
    "5": "29",
    "6": "30",
    "7": "31",
    "8": "32",
    "9": "33",
    A: "10",
    B: "11",
    C: "12",
    D: "7",
    E: "8",
    F: "9",
    G: "15",
    H: "110",
    I: "4",
    J: "6",
    K: "13",
    L: "14",
    M: "16",
    N: "17",
    O: "18",
    P: "79",
    Q: "80",
    R: "81",
    S: "83",
    T: "84",
    U: "85",
    V: "86",
    W: "87",
    X: "88",
    Y: "89",
    Z: "90",
    a: "91",
    b: "92",
    c: "93",
    d: "94",
    e: "95",
    f: "109",
    g: "20",
    h: "73",
    i: "96",
    j: "97",
    k: "98",
    l: "99",
    m: "100",
    n: "101",
    o: "102",
    p: "103",
    q: "104",
    r: "105",
    s: "106",
    t: "107",
    u: "108",
    v: "5",
    w: "19",
    x: "21",
    y: "22",
    z: "23",
    AB: "34",
    BB: "35",
    CB: "36",
    DB: "37",
    EB: "38",
    FB: "39",
    GB: "40",
    HB: "41",
    IB: "42",
    JB: "43",
    KB: "44",
    LB: "45",
    MB: "46",
    NB: "47",
    OB: "48",
    PB: "49",
    QB: "50",
    RB: "51",
    SB: "52",
    TB: "53",
    UB: "54",
    VB: "55",
    WB: "56",
    XB: "57",
    YB: "58",
    ZB: "60",
    aB: "62",
    bB: "63",
    cB: "64",
    dB: "65",
    eB: "66",
    fB: "67",
    gB: "68",
    hB: "69",
    iB: "70",
    jB: "71",
    kB: "72",
    lB: "74",
    mB: "75",
    nB: "76",
    oB: "77",
    pB: "78",
    qB: "11.1",
    rB: "12.1",
    sB: "16.0",
    tB: "3",
    uB: "59",
    vB: "61",
    wB: "82",
    xB: "111",
    yB: "112",
    zB: "3.2",
    "0B": "10.1",
    "1B": "13.1",
    "2B": "15.2-15.3",
    "3B": "15.4",
    "4B": "15.5",
    "5B": "15.6",
    "6B": "16.1",
    "7B": "16.2",
    "8B": "16.3",
    "9B": "16.4",
    AC: "11.5",
    BC: "4.2-4.3",
    CC: "5.5",
    DC: "2",
    EC: "3.5",
    FC: "3.6",
    GC: "113",
    HC: "3.1",
    IC: "5.1",
    JC: "6.1",
    KC: "7.1",
    LC: "9.1",
    MC: "14.1",
    NC: "15.1",
    OC: "TP",
    PC: "9.5-9.6",
    QC: "10.0-10.1",
    RC: "10.5",
    SC: "10.6",
    TC: "11.6",
    UC: "4.0-4.1",
    VC: "5.0-5.1",
    WC: "6.0-6.1",
    XC: "7.0-7.1",
    YC: "8.1-8.4",
    ZC: "9.0-9.2",
    aC: "9.3",
    bC: "10.0-10.2",
    cC: "10.3",
    dC: "11.0-11.2",
    eC: "11.3-11.4",
    fC: "12.0-12.1",
    gC: "12.2-12.5",
    hC: "13.0-13.1",
    iC: "13.2",
    jC: "13.3",
    kC: "13.4-13.7",
    lC: "14.0-14.4",
    mC: "14.5-14.8",
    nC: "15.0-15.1",
    oC: "all",
    pC: "2.1",
    qC: "2.2",
    rC: "2.3",
    sC: "4.1",
    tC: "4.4",
    uC: "4.4.3-4.4.4",
    vC: "13.4",
    wC: "5.0-5.4",
    xC: "6.2-6.4",
    yC: "7.2-7.4",
    zC: "8.2",
    "0C": "9.2",
    "1C": "11.1-11.2",
    "2C": "12.0",
    "3C": "13.0",
    "4C": "14.0",
    "5C": "15.0",
    "6C": "17.0",
    "7C": "18.0",
    "8C": "19.0",
    "9C": "13.18",
    AD: "2.5",
    BD: "3.0-3.1"
};

},{}],"dwIbB":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            J: 0.0131217,
            D: 0.00621152,
            E: 0.0478029,
            F: 0.0573634,
            A: 0.00956057,
            B: 0.487589,
            CC: 0.009298
        },
        B: "ms",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "CC",
            "J",
            "D",
            "E",
            "F",
            "A",
            "B",
            "",
            "",
            ""
        ],
        E: "IE",
        F: {
            CC: 962323200,
            J: 998870400,
            D: 1161129600,
            E: 1237420800,
            F: 1300060800,
            A: 1346716800,
            B: 1381968000
        }
    },
    B: {
        A: {
            C: 0.003861,
            K: 0.004267,
            L: 0.004268,
            G: 0.003861,
            M: 0.003702,
            N: 0.003861,
            O: 0.015444,
            P: 0,
            Q: 0.004298,
            R: 0.00944,
            S: 0.004043,
            T: 0.007722,
            U: 0.003861,
            V: 0.003861,
            W: 0.003861,
            X: 0.003943,
            Y: 0.007722,
            Z: 0.003943,
            a: 0.003943,
            b: 0.007722,
            c: 0.004118,
            d: 0.003939,
            e: 0.003943,
            i: 0.003943,
            j: 0.003943,
            k: 0.003929,
            l: 0.003901,
            m: 0.011829,
            n: 0.007886,
            o: 0.003943,
            p: 0.007722,
            q: 0.003861,
            r: 0.007722,
            s: 0.011583,
            t: 0.073359,
            u: 0.111969,
            f: 1.66023,
            H: 2.23552
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "C",
            "K",
            "L",
            "G",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            "a",
            "b",
            "c",
            "d",
            "e",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "f",
            "H",
            "",
            "",
            ""
        ],
        E: "Edge",
        F: {
            C: 1438128000,
            K: 1447286400,
            L: 1470096000,
            G: 1491868800,
            M: 1508198400,
            N: 1525046400,
            O: 1542067200,
            P: 1579046400,
            Q: 1581033600,
            R: 1586736000,
            S: 1590019200,
            T: 1594857600,
            U: 1598486400,
            V: 1602201600,
            W: 1605830400,
            X: 1611360000,
            Y: 1614816000,
            Z: 1618358400,
            a: 1622073600,
            b: 1626912000,
            c: 1630627200,
            d: 1632441600,
            e: 1634774400,
            i: 1637539200,
            j: 1641427200,
            k: 1643932800,
            l: 1646265600,
            m: 1649635200,
            n: 1651190400,
            o: 1653955200,
            p: 1655942400,
            q: 1659657600,
            r: 1661990400,
            s: 1664755200,
            t: 1666915200,
            u: 1670198400,
            f: 1673481600,
            H: 1675900800
        },
        D: {
            C: "ms",
            K: "ms",
            L: "ms",
            G: "ms",
            M: "ms",
            N: "ms",
            O: "ms"
        }
    },
    C: {
        A: {
            "0": 0.008786,
            "1": 0.004118,
            "2": 0.004317,
            "3": 0.004393,
            "4": 0.004418,
            "5": 0.008834,
            "6": 0.008322,
            "7": 0.008928,
            "8": 0.004471,
            "9": 0.009284,
            DC: 0.004118,
            tB: 0.004271,
            I: 0.011703,
            v: 0.004879,
            J: 0.020136,
            D: 0.005725,
            E: 0.004525,
            F: 0.00533,
            A: 0.004283,
            B: 0.007722,
            C: 0.004471,
            K: 0.004486,
            L: 0.00453,
            G: 0.008322,
            M: 0.004417,
            N: 0.004425,
            O: 0.004161,
            w: 0.004443,
            g: 0.004283,
            x: 0.008322,
            y: 0.013698,
            z: 0.004161,
            AB: 0.004707,
            BB: 0.009076,
            CB: 0.003861,
            DB: 0.004783,
            EB: 0.003929,
            FB: 0.004783,
            GB: 0.00487,
            HB: 0.005029,
            IB: 0.0047,
            JB: 0.019305,
            KB: 0.003861,
            LB: 0.003867,
            MB: 0.004525,
            NB: 0.004293,
            OB: 0.003861,
            PB: 0.004538,
            QB: 0.008282,
            RB: 0.011601,
            SB: 0.046332,
            TB: 0.011601,
            UB: 0.003929,
            VB: 0.003974,
            WB: 0.003861,
            XB: 0.011601,
            YB: 0.003939,
            uB: 0.003861,
            ZB: 0.003929,
            vB: 0.004356,
            aB: 0.004425,
            bB: 0.008322,
            cB: 0.00415,
            dB: 0.004267,
            eB: 0.003801,
            fB: 0.004267,
            gB: 0.003861,
            hB: 0.00415,
            iB: 0.004293,
            jB: 0.004425,
            kB: 0.003861,
            h: 0.00415,
            lB: 0.00415,
            mB: 0.004318,
            nB: 0.004356,
            oB: 0.003974,
            pB: 0.034749,
            P: 0.003861,
            Q: 0.003861,
            R: 0.003861,
            wB: 0.003861,
            S: 0.003861,
            T: 0.003929,
            U: 0.004268,
            V: 0.003801,
            W: 0.015444,
            X: 0.007722,
            Y: 0.003943,
            Z: 0.003943,
            a: 0.011583,
            b: 0.003801,
            c: 0.007722,
            d: 0.011583,
            e: 0.003773,
            i: 0.007886,
            j: 0.003901,
            k: 0.003901,
            l: 0.003861,
            m: 0.003861,
            n: 0.003861,
            o: 0.096525,
            p: 0.042471,
            q: 0.007722,
            r: 0.011583,
            s: 0.015444,
            t: 0.019305,
            u: 0.069498,
            f: 1.22008,
            H: 0.814671,
            xB: 0.007722,
            yB: 0,
            EC: 0.008786,
            FC: 0.00487
        },
        B: "moz",
        C: [
            "DC",
            "tB",
            "EC",
            "FC",
            "I",
            "v",
            "J",
            "D",
            "E",
            "F",
            "A",
            "B",
            "C",
            "K",
            "L",
            "G",
            "M",
            "N",
            "O",
            "w",
            "g",
            "x",
            "y",
            "z",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "AB",
            "BB",
            "CB",
            "DB",
            "EB",
            "FB",
            "GB",
            "HB",
            "IB",
            "JB",
            "KB",
            "LB",
            "MB",
            "NB",
            "OB",
            "PB",
            "QB",
            "RB",
            "SB",
            "TB",
            "UB",
            "VB",
            "WB",
            "XB",
            "YB",
            "uB",
            "ZB",
            "vB",
            "aB",
            "bB",
            "cB",
            "dB",
            "eB",
            "fB",
            "gB",
            "hB",
            "iB",
            "jB",
            "kB",
            "h",
            "lB",
            "mB",
            "nB",
            "oB",
            "pB",
            "P",
            "Q",
            "R",
            "wB",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            "a",
            "b",
            "c",
            "d",
            "e",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "f",
            "H",
            "xB",
            "yB",
            ""
        ],
        E: "Firefox",
        F: {
            "0": 1375747200,
            "1": 1379376000,
            "2": 1386633600,
            "3": 1391472000,
            "4": 1395100800,
            "5": 1398729600,
            "6": 1402358400,
            "7": 1405987200,
            "8": 1409616000,
            "9": 1413244800,
            DC: 1161648000,
            tB: 1213660800,
            EC: 1246320000,
            FC: 1264032000,
            I: 1300752000,
            v: 1308614400,
            J: 1313452800,
            D: 1317081600,
            E: 1317081600,
            F: 1320710400,
            A: 1324339200,
            B: 1327968000,
            C: 1331596800,
            K: 1335225600,
            L: 1338854400,
            G: 1342483200,
            M: 1346112000,
            N: 1349740800,
            O: 1353628800,
            w: 1357603200,
            g: 1361232000,
            x: 1364860800,
            y: 1368489600,
            z: 1372118400,
            AB: 1417392000,
            BB: 1421107200,
            CB: 1424736000,
            DB: 1428278400,
            EB: 1431475200,
            FB: 1435881600,
            GB: 1439251200,
            HB: 1442880000,
            IB: 1446508800,
            JB: 1450137600,
            KB: 1453852800,
            LB: 1457395200,
            MB: 1461628800,
            NB: 1465257600,
            OB: 1470096000,
            PB: 1474329600,
            QB: 1479168000,
            RB: 1485216000,
            SB: 1488844800,
            TB: 1492560000,
            UB: 1497312000,
            VB: 1502150400,
            WB: 1506556800,
            XB: 1510617600,
            YB: 1516665600,
            uB: 1520985600,
            ZB: 1525824000,
            vB: 1529971200,
            aB: 1536105600,
            bB: 1540252800,
            cB: 1544486400,
            dB: 1548720000,
            eB: 1552953600,
            fB: 1558396800,
            gB: 1562630400,
            hB: 1567468800,
            iB: 1571788800,
            jB: 1575331200,
            kB: 1578355200,
            h: 1581379200,
            lB: 1583798400,
            mB: 1586304000,
            nB: 1588636800,
            oB: 1591056000,
            pB: 1593475200,
            P: 1595894400,
            Q: 1598313600,
            R: 1600732800,
            wB: 1603152000,
            S: 1605571200,
            T: 1607990400,
            U: 1611619200,
            V: 1614038400,
            W: 1616457600,
            X: 1618790400,
            Y: 1622505600,
            Z: 1626134400,
            a: 1628553600,
            b: 1630972800,
            c: 1633392000,
            d: 1635811200,
            e: 1638835200,
            i: 1641859200,
            j: 1644364800,
            k: 1646697600,
            l: 1649116800,
            m: 1651536000,
            n: 1653955200,
            o: 1656374400,
            p: 1658793600,
            q: 1661212800,
            r: 1663632000,
            s: 1666051200,
            t: 1668470400,
            u: 1670889600,
            f: 1673913600,
            H: 1676332800,
            xB: null,
            yB: null
        }
    },
    D: {
        A: {
            "0": 0.003939,
            "1": 0.004461,
            "2": 0.004141,
            "3": 0.004326,
            "4": 0.0047,
            "5": 0.004538,
            "6": 0.008322,
            "7": 0.008596,
            "8": 0.004566,
            "9": 0.004118,
            I: 0.004706,
            v: 0.004879,
            J: 0.004879,
            D: 0.005591,
            E: 0.005591,
            F: 0.005591,
            A: 0.004534,
            B: 0.004464,
            C: 0.010424,
            K: 0.0083,
            L: 0.004706,
            G: 0.015087,
            M: 0.004393,
            N: 0.004393,
            O: 0.008652,
            w: 0.008322,
            g: 0.004393,
            x: 0.004317,
            y: 0.003901,
            z: 0.008786,
            AB: 0.003861,
            BB: 0.003861,
            CB: 0.004335,
            DB: 0.004464,
            EB: 0.015444,
            FB: 0.003867,
            GB: 0.015444,
            HB: 0.003773,
            IB: 0.003974,
            JB: 0.007722,
            KB: 0.007948,
            LB: 0.003974,
            MB: 0.003867,
            NB: 0.007722,
            OB: 0.019305,
            PB: 0.03861,
            QB: 0.003867,
            RB: 0.003929,
            SB: 0.007722,
            TB: 0.007722,
            UB: 0.003867,
            VB: 0.007722,
            WB: 0.069498,
            XB: 0.003861,
            YB: 0.015772,
            uB: 0.003773,
            ZB: 0.015444,
            vB: 0.007722,
            aB: 0.003773,
            bB: 0.007722,
            cB: 0.003943,
            dB: 0.007722,
            eB: 0.027027,
            fB: 0.007722,
            gB: 0.011583,
            hB: 0.054054,
            iB: 0.019305,
            jB: 0.015444,
            kB: 0.023166,
            h: 0.011583,
            lB: 0.042471,
            mB: 0.046332,
            nB: 0.042471,
            oB: 0.015444,
            pB: 0.030888,
            P: 0.127413,
            Q: 0.03861,
            R: 0.042471,
            S: 0.073359,
            T: 0.042471,
            U: 0.088803,
            V: 0.07722,
            W: 0.081081,
            X: 0.027027,
            Y: 0.03861,
            Z: 0.046332,
            a: 0.084942,
            b: 0.050193,
            c: 0.065637,
            d: 0.046332,
            e: 0.019305,
            i: 0.03861,
            j: 0.050193,
            k: 0.092664,
            l: 0.050193,
            m: 0.057915,
            n: 0.061776,
            o: 0.084942,
            p: 0.235521,
            q: 0.084942,
            r: 0.131274,
            s: 0.100386,
            t: 0.19305,
            u: 0.984555,
            f: 12.4054,
            H: 7.25482,
            xB: 0.015444,
            yB: 0.019305,
            GC: 0
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "I",
            "v",
            "J",
            "D",
            "E",
            "F",
            "A",
            "B",
            "C",
            "K",
            "L",
            "G",
            "M",
            "N",
            "O",
            "w",
            "g",
            "x",
            "y",
            "z",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "AB",
            "BB",
            "CB",
            "DB",
            "EB",
            "FB",
            "GB",
            "HB",
            "IB",
            "JB",
            "KB",
            "LB",
            "MB",
            "NB",
            "OB",
            "PB",
            "QB",
            "RB",
            "SB",
            "TB",
            "UB",
            "VB",
            "WB",
            "XB",
            "YB",
            "uB",
            "ZB",
            "vB",
            "aB",
            "bB",
            "cB",
            "dB",
            "eB",
            "fB",
            "gB",
            "hB",
            "iB",
            "jB",
            "kB",
            "h",
            "lB",
            "mB",
            "nB",
            "oB",
            "pB",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            "a",
            "b",
            "c",
            "d",
            "e",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "f",
            "H",
            "xB",
            "yB",
            "GC"
        ],
        E: "Chrome",
        F: {
            "0": 1352246400,
            "1": 1357862400,
            "2": 1361404800,
            "3": 1364428800,
            "4": 1369094400,
            "5": 1374105600,
            "6": 1376956800,
            "7": 1384214400,
            "8": 1389657600,
            "9": 1392940800,
            I: 1264377600,
            v: 1274745600,
            J: 1283385600,
            D: 1287619200,
            E: 1291248000,
            F: 1296777600,
            A: 1299542400,
            B: 1303862400,
            C: 1307404800,
            K: 1312243200,
            L: 1316131200,
            G: 1316131200,
            M: 1319500800,
            N: 1323734400,
            O: 1328659200,
            w: 1332892800,
            g: 1337040000,
            x: 1340668800,
            y: 1343692800,
            z: 1348531200,
            AB: 1397001600,
            BB: 1400544000,
            CB: 1405468800,
            DB: 1409011200,
            EB: 1412640000,
            FB: 1416268800,
            GB: 1421798400,
            HB: 1425513600,
            IB: 1429401600,
            JB: 1432080000,
            KB: 1437523200,
            LB: 1441152000,
            MB: 1444780800,
            NB: 1449014400,
            OB: 1453248000,
            PB: 1456963200,
            QB: 1460592000,
            RB: 1464134400,
            SB: 1469059200,
            TB: 1472601600,
            UB: 1476230400,
            VB: 1480550400,
            WB: 1485302400,
            XB: 1489017600,
            YB: 1492560000,
            uB: 1496707200,
            ZB: 1500940800,
            vB: 1504569600,
            aB: 1508198400,
            bB: 1512518400,
            cB: 1516752000,
            dB: 1520294400,
            eB: 1523923200,
            fB: 1527552000,
            gB: 1532390400,
            hB: 1536019200,
            iB: 1539648000,
            jB: 1543968000,
            kB: 1548720000,
            h: 1552348800,
            lB: 1555977600,
            mB: 1559606400,
            nB: 1564444800,
            oB: 1568073600,
            pB: 1571702400,
            P: 1575936000,
            Q: 1580860800,
            R: 1586304000,
            S: 1589846400,
            T: 1594684800,
            U: 1598313600,
            V: 1601942400,
            W: 1605571200,
            X: 1611014400,
            Y: 1614556800,
            Z: 1618272000,
            a: 1621987200,
            b: 1626739200,
            c: 1630368000,
            d: 1632268800,
            e: 1634601600,
            i: 1637020800,
            j: 1641340800,
            k: 1643673600,
            l: 1646092800,
            m: 1648512000,
            n: 1650931200,
            o: 1653350400,
            p: 1655769600,
            q: 1659398400,
            r: 1661817600,
            s: 1664236800,
            t: 1666656000,
            u: 1669680000,
            f: 1673308800,
            H: 1675728000,
            xB: null,
            yB: null,
            GC: null
        }
    },
    E: {
        A: {
            I: 0,
            v: 0.008322,
            J: 0.004656,
            D: 0.004465,
            E: 0.003974,
            F: 0.003929,
            A: 0.004425,
            B: 0.004318,
            C: 0.003801,
            K: 0.019305,
            L: 0.096525,
            G: 0.023166,
            HC: 0,
            zB: 0.008692,
            IC: 0.007722,
            JC: 0.00456,
            KC: 0.004283,
            LC: 0.057915,
            "0B": 0.007802,
            qB: 0.007722,
            rB: 0.030888,
            "1B": 0.169884,
            MC: 0.258687,
            NC: 0.042471,
            "2B": 0.034749,
            "3B": 0.088803,
            "4B": 0.169884,
            "5B": 0.857142,
            sB: 0.088803,
            "6B": 0.293436,
            "7B": 0.922779,
            "8B": 0.621621,
            "9B": 0,
            OC: 0
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "HC",
            "zB",
            "I",
            "v",
            "IC",
            "J",
            "JC",
            "D",
            "KC",
            "E",
            "F",
            "LC",
            "A",
            "0B",
            "B",
            "qB",
            "C",
            "rB",
            "K",
            "1B",
            "L",
            "MC",
            "G",
            "NC",
            "2B",
            "3B",
            "4B",
            "5B",
            "sB",
            "6B",
            "7B",
            "8B",
            "9B",
            "OC",
            ""
        ],
        E: "Safari",
        F: {
            HC: 1205798400,
            zB: 1226534400,
            I: 1244419200,
            v: 1275868800,
            IC: 1311120000,
            J: 1343174400,
            JC: 1382400000,
            D: 1382400000,
            KC: 1410998400,
            E: 1413417600,
            F: 1443657600,
            LC: 1458518400,
            A: 1474329600,
            "0B": 1490572800,
            B: 1505779200,
            qB: 1522281600,
            C: 1537142400,
            rB: 1553472000,
            K: 1568851200,
            "1B": 1585008000,
            L: 1600214400,
            MC: 1619395200,
            G: 1632096000,
            NC: 1635292800,
            "2B": 1639353600,
            "3B": 1647216000,
            "4B": 1652745600,
            "5B": 1658275200,
            sB: 1662940800,
            "6B": 1666569600,
            "7B": 1670889600,
            "8B": 1674432000,
            "9B": null,
            OC: null
        }
    },
    F: {
        A: {
            "0": 0.006702,
            "1": 0.006015,
            "2": 0.005595,
            "3": 0.004393,
            "4": 0.003861,
            "5": 0.004879,
            "6": 0.004879,
            "7": 0.003861,
            "8": 0.005152,
            "9": 0.005014,
            F: 0.0082,
            B: 0.016581,
            C: 0.004317,
            G: 0.00685,
            M: 0.00685,
            N: 0.00685,
            O: 0.005014,
            w: 0.006015,
            g: 0.004879,
            x: 0.006597,
            y: 0.006597,
            z: 0.013434,
            AB: 0.009758,
            BB: 0.004879,
            CB: 0.007722,
            DB: 0.004283,
            EB: 0.004367,
            FB: 0.004534,
            GB: 0.003861,
            HB: 0.004227,
            IB: 0.004418,
            JB: 0.004161,
            KB: 0.004227,
            LB: 0.004725,
            MB: 0.011583,
            NB: 0.008942,
            OB: 0.004707,
            PB: 0.004827,
            QB: 0.004707,
            RB: 0.004707,
            SB: 0.004326,
            TB: 0.008922,
            UB: 0.014349,
            VB: 0.004425,
            WB: 0.00472,
            XB: 0.004425,
            YB: 0.004425,
            ZB: 0.00472,
            aB: 0.004532,
            bB: 0.004566,
            cB: 0.02283,
            dB: 0.00867,
            eB: 0.004656,
            fB: 0.004642,
            gB: 0.003929,
            hB: 0.00944,
            iB: 0.004293,
            jB: 0.003929,
            kB: 0.004298,
            h: 0.096692,
            lB: 0.004201,
            mB: 0.004141,
            nB: 0.004257,
            oB: 0.003939,
            pB: 0.008236,
            P: 0.003855,
            Q: 0.003939,
            R: 0.008514,
            wB: 0.003939,
            S: 0.003939,
            T: 0.003702,
            U: 0.007722,
            V: 0.003855,
            W: 0.003855,
            X: 0.003929,
            Y: 0.003861,
            Z: 0.011703,
            a: 0.007546,
            b: 0.011829,
            c: 0.069498,
            d: 0.648648,
            e: 0.370656,
            PC: 0.00685,
            QC: 0,
            RC: 0.008392,
            SC: 0.004706,
            qB: 0.006229,
            AC: 0.004879,
            TC: 0.008786,
            rB: 0.00472
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "F",
            "PC",
            "QC",
            "RC",
            "SC",
            "B",
            "qB",
            "AC",
            "TC",
            "C",
            "rB",
            "G",
            "M",
            "N",
            "O",
            "w",
            "g",
            "x",
            "y",
            "z",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "AB",
            "BB",
            "CB",
            "DB",
            "EB",
            "FB",
            "GB",
            "HB",
            "IB",
            "JB",
            "KB",
            "LB",
            "MB",
            "NB",
            "OB",
            "PB",
            "QB",
            "RB",
            "SB",
            "TB",
            "UB",
            "VB",
            "WB",
            "XB",
            "YB",
            "ZB",
            "aB",
            "bB",
            "cB",
            "dB",
            "eB",
            "fB",
            "gB",
            "hB",
            "iB",
            "jB",
            "kB",
            "h",
            "lB",
            "mB",
            "nB",
            "oB",
            "pB",
            "P",
            "Q",
            "R",
            "wB",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            "a",
            "b",
            "c",
            "d",
            "e",
            "",
            "",
            ""
        ],
        E: "Opera",
        F: {
            "0": 1409616000,
            "1": 1413331200,
            "2": 1417132800,
            "3": 1422316800,
            "4": 1425945600,
            "5": 1430179200,
            "6": 1433808000,
            "7": 1438646400,
            "8": 1442448000,
            "9": 1445904000,
            F: 1150761600,
            PC: 1223424000,
            QC: 1251763200,
            RC: 1267488000,
            SC: 1277942400,
            B: 1292457600,
            qB: 1302566400,
            AC: 1309219200,
            TC: 1323129600,
            C: 1323129600,
            rB: 1352073600,
            G: 1372723200,
            M: 1377561600,
            N: 1381104000,
            O: 1386288000,
            w: 1390867200,
            g: 1393891200,
            x: 1399334400,
            y: 1401753600,
            z: 1405987200,
            AB: 1449100800,
            BB: 1454371200,
            CB: 1457308800,
            DB: 1462320000,
            EB: 1465344000,
            FB: 1470096000,
            GB: 1474329600,
            HB: 1477267200,
            IB: 1481587200,
            JB: 1486425600,
            KB: 1490054400,
            LB: 1494374400,
            MB: 1498003200,
            NB: 1502236800,
            OB: 1506470400,
            PB: 1510099200,
            QB: 1515024000,
            RB: 1517961600,
            SB: 1521676800,
            TB: 1525910400,
            UB: 1530144000,
            VB: 1534982400,
            WB: 1537833600,
            XB: 1543363200,
            YB: 1548201600,
            ZB: 1554768000,
            aB: 1561593600,
            bB: 1566259200,
            cB: 1570406400,
            dB: 1573689600,
            eB: 1578441600,
            fB: 1583971200,
            gB: 1587513600,
            hB: 1592956800,
            iB: 1595894400,
            jB: 1600128000,
            kB: 1603238400,
            h: 1613520000,
            lB: 1612224000,
            mB: 1616544000,
            nB: 1619568000,
            oB: 1623715200,
            pB: 1627948800,
            P: 1631577600,
            Q: 1633392000,
            R: 1635984000,
            wB: 1638403200,
            S: 1642550400,
            T: 1644969600,
            U: 1647993600,
            V: 1650412800,
            W: 1652745600,
            X: 1654646400,
            Y: 1657152000,
            Z: 1660780800,
            a: 1663113600,
            b: 1668816000,
            c: 1668643200,
            d: 1671062400,
            e: 1675209600
        },
        D: {
            F: "o",
            B: "o",
            C: "o",
            PC: "o",
            QC: "o",
            RC: "o",
            SC: "o",
            qB: "o",
            AC: "o",
            TC: "o",
            rB: "o"
        }
    },
    G: {
        A: {
            E: 0,
            zB: 0,
            UC: 0,
            BC: 0.00156679,
            VC: 0.00313358,
            WC: 0.00313358,
            XC: 0.0125343,
            YC: 0.00626717,
            ZC: 0.0172347,
            aC: 0.0564045,
            bC: 0.00470038,
            cC: 0.0987079,
            dC: 0.0250687,
            eC: 0.0235019,
            fC: 0.0219351,
            gC: 0.394832,
            hC: 0.0156679,
            iC: 0.0360362,
            jC: 0.0344694,
            kC: 0.108109,
            lC: 0.282023,
            mC: 0.532709,
            nC: 0.153546,
            "2B": 0.195849,
            "3B": 0.233452,
            "4B": 0.412066,
            "5B": 1.40071,
            sB: 1.43988,
            "6B": 3.51431,
            "7B": 3.62556,
            "8B": 2.04623,
            "9B": 0.00940075
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "zB",
            "UC",
            "BC",
            "VC",
            "WC",
            "XC",
            "E",
            "YC",
            "ZC",
            "aC",
            "bC",
            "cC",
            "dC",
            "eC",
            "fC",
            "gC",
            "hC",
            "iC",
            "jC",
            "kC",
            "lC",
            "mC",
            "nC",
            "2B",
            "3B",
            "4B",
            "5B",
            "sB",
            "6B",
            "7B",
            "8B",
            "9B",
            "",
            ""
        ],
        E: "Safari on iOS",
        F: {
            zB: 1270252800,
            UC: 1283904000,
            BC: 1299628800,
            VC: 1331078400,
            WC: 1359331200,
            XC: 1394409600,
            E: 1410912000,
            YC: 1413763200,
            ZC: 1442361600,
            aC: 1458518400,
            bC: 1473724800,
            cC: 1490572800,
            dC: 1505779200,
            eC: 1522281600,
            fC: 1537142400,
            gC: 1553472000,
            hC: 1568851200,
            iC: 1572220800,
            jC: 1580169600,
            kC: 1585008000,
            lC: 1600214400,
            mC: 1619395200,
            nC: 1632096000,
            "2B": 1639353600,
            "3B": 1647216000,
            "4B": 1652659200,
            "5B": 1658275200,
            sB: 1662940800,
            "6B": 1666569600,
            "7B": 1670889600,
            "8B": 1674432000,
            "9B": null
        }
    },
    H: {
        A: {
            oC: 0.993853
        },
        B: "o",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "oC",
            "",
            "",
            ""
        ],
        E: "Opera Mini",
        F: {
            oC: 1426464000
        }
    },
    I: {
        A: {
            tB: 0,
            I: 0.019696,
            f: 0,
            pC: 0,
            qC: 0,
            rC: 0,
            sC: 0.0787838,
            BC: 0.0689359,
            tC: 0,
            uC: 0.305287
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "pC",
            "qC",
            "rC",
            "tB",
            "I",
            "sC",
            "BC",
            "tC",
            "uC",
            "f",
            "",
            "",
            ""
        ],
        E: "Android Browser",
        F: {
            pC: 1256515200,
            qC: 1274313600,
            rC: 1291593600,
            tB: 1298332800,
            I: 1318896000,
            sC: 1341792000,
            BC: 1374624000,
            tC: 1386547200,
            uC: 1401667200,
            f: 1673568000
        }
    },
    J: {
        A: {
            D: 0,
            A: 0
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "D",
            "A",
            "",
            "",
            ""
        ],
        E: "Blackberry Browser",
        F: {
            D: 1325376000,
            A: 1359504000
        }
    },
    K: {
        A: {
            A: 0,
            B: 0,
            C: 0,
            h: 0.0111391,
            qB: 0,
            AC: 0,
            rB: 0
        },
        B: "o",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "A",
            "B",
            "qB",
            "AC",
            "C",
            "rB",
            "h",
            "",
            "",
            ""
        ],
        E: "Opera Mobile",
        F: {
            A: 1287100800,
            B: 1300752000,
            qB: 1314835200,
            AC: 1318291200,
            C: 1330300800,
            rB: 1349740800,
            h: 1673827200
        },
        D: {
            h: "webkit"
        }
    },
    L: {
        A: {
            H: 42.629
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "H",
            "",
            "",
            ""
        ],
        E: "Chrome for Android",
        F: {
            H: 1675728000
        }
    },
    M: {
        A: {
            H: 0.294672
        },
        B: "moz",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "H",
            "",
            "",
            ""
        ],
        E: "Firefox for Android",
        F: {
            H: 1676332800
        }
    },
    N: {
        A: {
            A: 0.0115934,
            B: 0.022664
        },
        B: "ms",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "A",
            "B",
            "",
            "",
            ""
        ],
        E: "IE Mobile",
        F: {
            A: 1340150400,
            B: 1353456000
        }
    },
    O: {
        A: {
            vC: 0.896294
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "vC",
            "",
            "",
            ""
        ],
        E: "UC Browser for Android",
        F: {
            vC: 1634688000
        },
        D: {
            vC: "webkit"
        }
    },
    P: {
        A: {
            I: 0.166372,
            g: 0,
            wC: 0.0103543,
            xC: 0.010304,
            yC: 0.0519911,
            zC: 0.0103584,
            "0C": 0.0104443,
            "0B": 0.0105043,
            "1C": 0.0311947,
            "2C": 0.0103982,
            "3C": 0.0311947,
            "4C": 0.0311947,
            "5C": 0.0207965,
            sB: 0.0727876,
            "6C": 0.0727876,
            "7C": 0.0935841,
            "8C": 1.32057
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "I",
            "wC",
            "xC",
            "yC",
            "zC",
            "0C",
            "0B",
            "1C",
            "2C",
            "3C",
            "4C",
            "5C",
            "sB",
            "6C",
            "7C",
            "8C",
            "g",
            "",
            "",
            ""
        ],
        E: "Samsung Internet",
        F: {
            I: 1461024000,
            wC: 1481846400,
            xC: 1509408000,
            yC: 1528329600,
            zC: 1546128000,
            "0C": 1554163200,
            "0B": 1567900800,
            "1C": 1582588800,
            "2C": 1593475200,
            "3C": 1605657600,
            "4C": 1618531200,
            "5C": 1629072000,
            sB: 1640736000,
            "6C": 1651708800,
            "7C": 1659657600,
            "8C": 1667260800,
            g: 1677369600
        }
    },
    Q: {
        A: {
            "1B": 0.12278
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "1B",
            "",
            "",
            ""
        ],
        E: "QQ Browser",
        F: {
            "1B": 1663718400
        }
    },
    R: {
        A: {
            "9C": 0
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "9C",
            "",
            "",
            ""
        ],
        E: "Baidu Browser",
        F: {
            "9C": 1663027200
        }
    },
    S: {
        A: {
            AD: 0.079807,
            BD: 0
        },
        B: "moz",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "AD",
            "BD",
            "",
            "",
            ""
        ],
        E: "KaiOS Browser",
        F: {
            AD: 1527811200,
            BD: 1631664000
        }
    }
};

},{}],"b7Kzh":[function(require,module,exports) {
module.exports = JSON.parse('{"v0.8":{"start":"2012-06-25","end":"2014-07-31"},"v0.10":{"start":"2013-03-11","end":"2016-10-31"},"v0.12":{"start":"2015-02-06","end":"2016-12-31"},"v4":{"start":"2015-09-08","lts":"2015-10-12","maintenance":"2017-04-01","end":"2018-04-30","codename":"Argon"},"v5":{"start":"2015-10-29","maintenance":"2016-04-30","end":"2016-06-30"},"v6":{"start":"2016-04-26","lts":"2016-10-18","maintenance":"2018-04-30","end":"2019-04-30","codename":"Boron"},"v7":{"start":"2016-10-25","maintenance":"2017-04-30","end":"2017-06-30"},"v8":{"start":"2017-05-30","lts":"2017-10-31","maintenance":"2019-01-01","end":"2019-12-31","codename":"Carbon"},"v9":{"start":"2017-10-01","maintenance":"2018-04-01","end":"2018-06-30"},"v10":{"start":"2018-04-24","lts":"2018-10-30","maintenance":"2020-05-19","end":"2021-04-30","codename":"Dubnium"},"v11":{"start":"2018-10-23","maintenance":"2019-04-22","end":"2019-06-01"},"v12":{"start":"2019-04-23","lts":"2019-10-21","maintenance":"2020-11-30","end":"2022-04-30","codename":"Erbium"},"v13":{"start":"2019-10-22","maintenance":"2020-04-01","end":"2020-06-01"},"v14":{"start":"2020-04-21","lts":"2020-10-27","maintenance":"2021-10-19","end":"2023-04-30","codename":"Fermium"},"v15":{"start":"2020-10-20","maintenance":"2021-04-01","end":"2021-06-01"},"v16":{"start":"2021-04-20","lts":"2021-10-26","maintenance":"2022-10-18","end":"2023-09-11","codename":"Gallium"},"v17":{"start":"2021-10-19","maintenance":"2022-04-01","end":"2022-06-01"},"v18":{"start":"2022-04-19","lts":"2022-10-25","maintenance":"2023-10-18","end":"2025-04-30","codename":"Hydrogen"},"v19":{"start":"2022-10-18","maintenance":"2023-04-01","end":"2023-06-01"},"v20":{"start":"2023-04-18","lts":"2023-10-24","maintenance":"2024-10-22","end":"2026-04-30","codename":""}}');

},{}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"i95xm":[function(require,module,exports) {
module.exports = {
    "0.20": "39",
    "0.21": "41",
    "0.22": "41",
    "0.23": "41",
    "0.24": "41",
    "0.25": "42",
    "0.26": "42",
    "0.27": "43",
    "0.28": "43",
    "0.29": "43",
    "0.30": "44",
    "0.31": "45",
    "0.32": "45",
    "0.33": "45",
    "0.34": "45",
    "0.35": "45",
    "0.36": "47",
    "0.37": "49",
    "1.0": "49",
    "1.1": "50",
    "1.2": "51",
    "1.3": "52",
    "1.4": "53",
    "1.5": "54",
    "1.6": "56",
    "1.7": "58",
    "1.8": "59",
    "2.0": "61",
    "2.1": "61",
    "3.0": "66",
    "3.1": "66",
    "4.0": "69",
    "4.1": "69",
    "4.2": "69",
    "5.0": "73",
    "6.0": "76",
    "6.1": "76",
    "7.0": "78",
    "7.1": "78",
    "7.2": "78",
    "7.3": "78",
    "8.0": "80",
    "8.1": "80",
    "8.2": "80",
    "8.3": "80",
    "8.4": "80",
    "8.5": "80",
    "9.0": "83",
    "9.1": "83",
    "9.2": "83",
    "9.3": "83",
    "9.4": "83",
    "10.0": "85",
    "10.1": "85",
    "10.2": "85",
    "10.3": "85",
    "10.4": "85",
    "11.0": "87",
    "11.1": "87",
    "11.2": "87",
    "11.3": "87",
    "11.4": "87",
    "11.5": "87",
    "12.0": "89",
    "12.1": "89",
    "12.2": "89",
    "13.0": "91",
    "13.1": "91",
    "13.2": "91",
    "13.3": "91",
    "13.4": "91",
    "13.5": "91",
    "13.6": "91",
    "14.0": "93",
    "14.1": "93",
    "14.2": "93",
    "15.0": "94",
    "15.1": "94",
    "15.2": "94",
    "15.3": "94",
    "15.4": "94",
    "15.5": "94",
    "16.0": "96",
    "16.1": "96",
    "16.2": "96",
    "17.0": "98",
    "17.1": "98",
    "17.2": "98",
    "17.3": "98",
    "17.4": "98",
    "18.0": "100",
    "18.1": "100",
    "18.2": "100",
    "18.3": "100",
    "19.0": "102",
    "19.1": "102",
    "20.0": "104",
    "20.1": "104",
    "20.2": "104",
    "20.3": "104",
    "21.0": "106",
    "21.1": "106",
    "21.2": "106",
    "21.3": "106",
    "21.4": "106",
    "22.0": "108",
    "22.1": "108",
    "22.2": "108",
    "22.3": "108",
    "23.0": "110",
    "23.1": "110",
    "24.0": "111"
};

},{}],"4GzM4":[function(require,module,exports) {
function BrowserslistError(message) {
    this.name = "BrowserslistError";
    this.message = message;
    this.browserslist = true;
    if (Error.captureStackTrace) Error.captureStackTrace(this, BrowserslistError);
}
BrowserslistError.prototype = Error.prototype;
module.exports = BrowserslistError;

},{}],"a4Lkh":[function(require,module,exports) {
var AND_REGEXP = /^\s+and\s+(.*)/i;
var OR_REGEXP = /^(?:,\s*|\s+or\s+)(.*)/i;
function flatten(array) {
    if (!Array.isArray(array)) return [
        array
    ];
    return array.reduce(function(a, b) {
        return a.concat(flatten(b));
    }, []);
}
function find(string, predicate) {
    for(var n = 1, max = string.length; n <= max; n++){
        var parsed = string.substr(-n, n);
        if (predicate(parsed, n, max)) return string.slice(0, -n);
    }
    return "";
}
function matchQuery(all, query) {
    var node = {
        query: query
    };
    if (query.indexOf("not ") === 0) {
        node.not = true;
        query = query.slice(4);
    }
    for(var name in all){
        var type = all[name];
        var match = query.match(type.regexp);
        if (match) {
            node.type = name;
            for(var i = 0; i < type.matches.length; i++)node[type.matches[i]] = match[i + 1];
            return node;
        }
    }
    node.type = "unknown";
    return node;
}
function matchBlock(all, string, qs) {
    var node;
    return find(string, function(parsed, n, max) {
        if (AND_REGEXP.test(parsed)) {
            node = matchQuery(all, parsed.match(AND_REGEXP)[1]);
            node.compose = "and";
            qs.unshift(node);
            return true;
        } else if (OR_REGEXP.test(parsed)) {
            node = matchQuery(all, parsed.match(OR_REGEXP)[1]);
            node.compose = "or";
            qs.unshift(node);
            return true;
        } else if (n === max) {
            node = matchQuery(all, parsed.trim());
            node.compose = "or";
            qs.unshift(node);
            return true;
        }
        return false;
    });
}
module.exports = function parse(all, queries) {
    if (!Array.isArray(queries)) queries = [
        queries
    ];
    return flatten(queries.map(function(block) {
        var qs = [];
        do block = matchBlock(all, block, qs);
        while (block);
        return qs;
    }));
};

},{}],"hteYL":[function(require,module,exports) {
var BrowserslistError = require("b896a2ba7d864b46");
function noop() {}
module.exports = {
    loadQueries: function loadQueries() {
        throw new BrowserslistError("Sharable configs are not supported in client-side build of Browserslist");
    },
    getStat: function getStat(opts) {
        return opts.stats;
    },
    loadConfig: function loadConfig(opts) {
        if (opts.config) throw new BrowserslistError("Browserslist config are not supported in client-side build");
    },
    loadCountry: function loadCountry() {
        throw new BrowserslistError("Country statistics are not supported in client-side build of Browserslist");
    },
    loadFeature: function loadFeature() {
        throw new BrowserslistError("Supports queries are not available in client-side build of Browserslist");
    },
    currentNode: function currentNode(resolve, context) {
        return resolve([
            "maintained node versions"
        ], context)[0];
    },
    parseConfig: noop,
    readConfig: noop,
    findConfig: noop,
    clearCaches: noop,
    oldDataWarning: noop,
    env: {}
};

},{"b896a2ba7d864b46":"4GzM4"}]},["d8XZh","aenu9"], "aenu9", "parcelRequire3a11")

//# sourceMappingURL=index.e37f48ea.js.map
