/*!
 * TIFY v0.23.1
 * (c) 2020 Tobias Schäfer (https://aspectis.net/)
 * AGPL-3.0
 * https://github.com/tify-iiif-viewer/tify
 */
!function (t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {i: i, l: !1, exports: {}};
        return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }

    var n = {};
    e.m = t, e.c = n, e.d = function (t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, {configurable: !1, enumerable: !0, get: i})
    }, e.n = function (t) {
        var n = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 52)
}([function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (t, e) {
    var n = t.exports = {version: "2.6.10"};
    "number" == typeof __e && (__e = n)
}, function (t, e, n) {
    var i = n(38)("wks"), r = n(25), o = n(0).Symbol, s = "function" == typeof o;
    (t.exports = function (t) {
        return i[t] || (i[t] = s && o[t] || (s ? o : r)("Symbol." + t))
    }).store = i
}, function (t, e) {
    t.exports = function (t, e, n, i, r, o) {
        var s, a = t = t || {}, l = typeof t.default;
        "object" !== l && "function" !== l || (s = t, a = t.default);
        var c = "function" == typeof a ? a.options : a;
        e && (c.render = e.render, c.staticRenderFns = e.staticRenderFns, c._compiled = !0), n && (c.functional = !0), r && (c._scopeId = r);
        var u;
        if (o ? (u = function (t) {
            t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(o)
        }, c._ssrRegister = u) : i && (u = i), u) {
            var h = c.functional, d = h ? c.render : c.beforeCreate;
            h ? (c._injectStyles = u, c.render = function (t, e) {
                return u.call(e), d(t, e)
            }) : c.beforeCreate = d ? [].concat(d, u) : [u]
        }
        return {esModule: s, exports: a, options: c}
    }
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return "[object Array]" === P.call(t)
    }

    function r(t) {
        return "[object ArrayBuffer]" === P.call(t)
    }

    function o(t) {
        return "undefined" != typeof FormData && t instanceof FormData
    }

    function s(t) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
    }

    function a(t) {
        return "string" == typeof t
    }

    function l(t) {
        return "number" == typeof t
    }

    function c(t) {
        return void 0 === t
    }

    function u(t) {
        return null !== t && "object" == typeof t
    }

    function h(t) {
        return "[object Date]" === P.call(t)
    }

    function d(t) {
        return "[object File]" === P.call(t)
    }

    function f(t) {
        return "[object Blob]" === P.call(t)
    }

    function p(t) {
        return "[object Function]" === P.call(t)
    }

    function v(t) {
        return u(t) && p(t.pipe)
    }

    function g(t) {
        return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
    }

    function m(t) {
        return t.replace(/^\s*/, "").replace(/\s*$/, "")
    }

    function y() {
        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
    }

    function w(t, e) {
        if (null !== t && void 0 !== t) if ("object" != typeof t && (t = [t]), i(t)) for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t); else for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t)
    }

    function _() {
        function t(t, n) {
            "object" == typeof e[n] && "object" == typeof t ? e[n] = _(e[n], t) : e[n] = t
        }

        for (var e = {}, n = 0, i = arguments.length; n < i; n++) w(arguments[n], t);
        return e
    }

    function x() {
        function t(t, n) {
            "object" == typeof e[n] && "object" == typeof t ? e[n] = x(e[n], t) : e[n] = "object" == typeof t ? x({}, t) : t
        }

        for (var e = {}, n = 0, i = arguments.length; n < i; n++) w(arguments[n], t);
        return e
    }

    function T(t, e, n) {
        return w(e, function (e, i) {
            t[i] = n && "function" == typeof e ? b(e, n) : e
        }), t
    }

    var b = n(89), S = n(207), P = Object.prototype.toString;
    t.exports = {
        isArray: i,
        isArrayBuffer: r,
        isBuffer: S,
        isFormData: o,
        isArrayBufferView: s,
        isString: a,
        isNumber: l,
        isObject: u,
        isUndefined: c,
        isDate: h,
        isFile: d,
        isBlob: f,
        isFunction: p,
        isStream: v,
        isURLSearchParams: g,
        isStandardBrowserEnv: y,
        forEach: w,
        merge: _,
        deepMerge: x,
        extend: T,
        trim: m
    }
}, function (t, e, n) {
    var i = n(0), r = n(1), o = n(11), s = n(9), a = n(13), l = function (t, e, n) {
        var c, u, h, d = t & l.F, f = t & l.G, p = t & l.S, v = t & l.P, g = t & l.B, m = t & l.W,
            y = f ? r : r[e] || (r[e] = {}), w = y.prototype, _ = f ? i : p ? i[e] : (i[e] || {}).prototype;
        f && (n = e);
        for (c in n) (u = !d && _ && void 0 !== _[c]) && a(y, c) || (h = u ? _[c] : n[c], y[c] = f && "function" != typeof _[c] ? n[c] : g && u ? o(h, i) : m && _[c] == h ? function (t) {
            var e = function (e, n, i) {
                if (this instanceof t) {
                    switch (arguments.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(e);
                        case 2:
                            return new t(e, n)
                    }
                    return new t(e, n, i)
                }
                return t.apply(this, arguments)
            };
            return e.prototype = t.prototype, e
        }(h) : v && "function" == typeof h ? o(Function.call, h) : h, v && ((y.virtual || (y.virtual = {}))[c] = h, t & l.R && w && !w[c] && s(w, c, h)))
    };
    l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t.exports = l
}, function (t, e, n) {
    t.exports = !n(12)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e) {
    t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function (t, e, n) {
    var i = n(10), r = n(54), o = n(33), s = Object.defineProperty;
    e.f = n(6) ? Object.defineProperty : function (t, e, n) {
        if (i(t), e = o(e, !0), i(n), r) try {
            return s(t, e, n)
        } catch (t) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function (t, e, n) {
    var i = n(8), r = n(24);
    t.exports = n(6) ? function (t, e, n) {
        return i.f(t, e, r(1, n))
    } : function (t, e, n) {
        return t[e] = n, t
    }
}, function (t, e, n) {
    var i = n(7);
    t.exports = function (t) {
        if (!i(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function (t, e, n) {
    var i = n(17);
    t.exports = function (t, e, n) {
        if (i(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function (n) {
                    return t.call(e, n)
                };
            case 2:
                return function (n, i) {
                    return t.call(e, n, i)
                };
            case 3:
                return function (n, i, r) {
                    return t.call(e, n, i, r)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
        return n.call(t, e)
    }
}, function (t, e, n) {
    var i = n(35), r = n(30);
    t.exports = function (t) {
        return i(r(t))
    }
}, function (t, e, n) {
    var i = n(56), r = n(39);
    t.exports = Object.keys || function (t) {
        return i(t, r)
    }
}, function (t, e) {
    t.exports = !0
}, function (t, e) {
    t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function (t, e) {
    t.exports = {}
}, function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
        return n.call(t).slice(8, -1)
    }
}, function (t, e, n) {
    var i = n(8).f, r = n(13), o = n(2)("toStringTag");
    t.exports = function (t, e, n) {
        t && !r(t = n ? t : t.prototype, o) && i(t, o, {configurable: !0, value: e})
    }
}, function (t, e, n) {
    var i = n(30);
    t.exports = function (t) {
        return Object(i(t))
    }
}, function (t, e, n) {
    var i = n(11), r = n(107), o = n(108), s = n(10), a = n(36), l = n(109), c = {}, u = {},
        e = t.exports = function (t, e, n, h, d) {
            var f, p, v, g, m = d ? function () {
                return t
            } : l(t), y = i(n, h, e ? 2 : 1), w = 0;
            if ("function" != typeof m) throw TypeError(t + " is not iterable!");
            if (o(m)) {
                for (f = a(t.length); f > w; w++) if ((g = e ? y(s(p = t[w])[0], p[1]) : y(t[w])) === c || g === u) return g
            } else for (v = m.call(t); !(p = v.next()).done;) if ((g = r(v, y, p.value, e)) === c || g === u) return g
        };
    e.BREAK = c, e.RETURN = u
}, function (t, e) {
    e.f = {}.propertyIsEnumerable
}, function (t, e) {
    t.exports = function (t, e) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }
}, function (t, e) {
    var n = 0, i = Math.random();
    t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
    }
}, function (t, e, n) {
    "use strict";
    (function (t, n) {
        function i(t) {
            return void 0 === t || null === t
        }

        function r(t) {
            return void 0 !== t && null !== t
        }

        function o(t) {
            return !0 === t
        }

        function s(t) {
            return !1 === t
        }

        function a(t) {
            return "string" == typeof t || "number" == typeof t || "symbol" == typeof t || "boolean" == typeof t
        }

        function l(t) {
            return null !== t && "object" == typeof t
        }

        function c(t) {
            return "[object Object]" === Ri.call(t)
        }

        function u(t) {
            return "[object RegExp]" === Ri.call(t)
        }

        function h(t) {
            var e = parseFloat(String(t));
            return e >= 0 && Math.floor(e) === e && isFinite(t)
        }

        function d(t) {
            return r(t) && "function" == typeof t.then && "function" == typeof t.catch
        }

        function f(t) {
            return null == t ? "" : Array.isArray(t) || c(t) && t.toString === Ri ? JSON.stringify(t, null, 2) : String(t)
        }

        function p(t) {
            var e = parseFloat(t);
            return isNaN(e) ? t : e
        }

        function v(t, e) {
            for (var n = Object.create(null), i = t.split(","), r = 0; r < i.length; r++) n[i[r]] = !0;
            return e ? function (t) {
                return n[t.toLowerCase()]
            } : function (t) {
                return n[t]
            }
        }

        function g(t, e) {
            if (t.length) {
                var n = t.indexOf(e);
                if (n > -1) return t.splice(n, 1)
            }
        }

        function m(t, e) {
            return Oi.call(t, e)
        }

        function y(t) {
            var e = Object.create(null);
            return function (n) {
                return e[n] || (e[n] = t(n))
            }
        }

        function w(t, e) {
            function n(n) {
                var i = arguments.length;
                return i ? i > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e)
            }

            return n._length = t.length, n
        }

        function _(t, e) {
            return t.bind(e)
        }

        function x(t, e) {
            e = e || 0;
            for (var n = t.length - e, i = new Array(n); n--;) i[n] = t[n + e];
            return i
        }

        function T(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function b(t) {
            for (var e = {}, n = 0; n < t.length; n++) t[n] && T(e, t[n]);
            return e
        }

        function S(t, e, n) {
        }

        function P(t, e) {
            if (t === e) return !0;
            var n = l(t), i = l(e);
            if (!n || !i) return !n && !i && String(t) === String(e);
            try {
                var r = Array.isArray(t), o = Array.isArray(e);
                if (r && o) return t.length === e.length && t.every(function (t, n) {
                    return P(t, e[n])
                });
                if (t instanceof Date && e instanceof Date) return t.getTime() === e.getTime();
                if (r || o) return !1;
                var s = Object.keys(t), a = Object.keys(e);
                return s.length === a.length && s.every(function (n) {
                    return P(t[n], e[n])
                })
            } catch (t) {
                return !1
            }
        }

        function C(t, e) {
            for (var n = 0; n < t.length; n++) if (P(t[n], e)) return n;
            return -1
        }

        function E(t) {
            var e = !1;
            return function () {
                e || (e = !0, t.apply(this, arguments))
            }
        }

        function R(t) {
            var e = (t + "").charCodeAt(0);
            return 36 === e || 95 === e
        }

        function k(t, e, n, i) {
            Object.defineProperty(t, e, {value: n, enumerable: !!i, writable: !0, configurable: !0})
        }

        function O(t) {
            if (!Ui.test(t)) {
                var e = t.split(".");
                return function (t) {
                    for (var n = 0; n < e.length; n++) {
                        if (!t) return;
                        t = t[e[n]]
                    }
                    return t
                }
            }
        }

        function I(t) {
            return "function" == typeof t && /native code/.test(t.toString())
        }

        function A(t) {
            dr.push(t), hr.target = t
        }

        function $() {
            dr.pop(), hr.target = dr[dr.length - 1]
        }

        function D(t) {
            return new fr(void 0, void 0, void 0, String(t))
        }

        function M(t) {
            var e = new fr(t.tag, t.data, t.children && t.children.slice(), t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
            return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, e.asyncMeta = t.asyncMeta, e.isCloned = !0, e
        }

        function F(t) {
            wr = t
        }

        function L(t, e) {
            t.__proto__ = e
        }

        function B(t, e, n) {
            for (var i = 0, r = n.length; i < r; i++) {
                var o = n[i];
                k(t, o, e[o])
            }
        }

        function H(t, e) {
            if (l(t) && !(t instanceof fr)) {
                var n;
                return m(t, "__ob__") && t.__ob__ instanceof _r ? n = t.__ob__ : wr && !sr() && (Array.isArray(t) || c(t)) && Object.isExtensible(t) && !t._isVue && (n = new _r(t)), e && n && n.vmCount++, n
            }
        }

        function N(t, e, n, i, r) {
            var o = new hr, s = Object.getOwnPropertyDescriptor(t, e);
            if (!s || !1 !== s.configurable) {
                var a = s && s.get, l = s && s.set;
                a && !l || 2 !== arguments.length || (n = t[e]);
                var c = !r && H(n);
                Object.defineProperty(t, e, {
                    enumerable: !0, configurable: !0, get: function () {
                        var e = a ? a.call(t) : n;
                        return hr.target && (o.depend(), c && (c.dep.depend(), Array.isArray(e) && V(e))), e
                    }, set: function (e) {
                        var i = a ? a.call(t) : n;
                        e === i || e !== e && i !== i || a && !l || (l ? l.call(t, e) : n = e, c = !r && H(e), o.notify())
                    }
                })
            }
        }

        function z(t, e, n) {
            if (Array.isArray(t) && h(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), n;
            if (e in t && !(e in Object.prototype)) return t[e] = n, n;
            var i = t.__ob__;
            return t._isVue || i && i.vmCount ? n : i ? (N(i.value, e, n), i.dep.notify(), n) : (t[e] = n, n)
        }

        function j(t, e) {
            if (Array.isArray(t) && h(e)) return void t.splice(e, 1);
            var n = t.__ob__;
            t._isVue || n && n.vmCount || m(t, e) && (delete t[e], n && n.dep.notify())
        }

        function V(t) {
            for (var e = void 0, n = 0, i = t.length; n < i; n++) e = t[n], e && e.__ob__ && e.__ob__.dep.depend(), Array.isArray(e) && V(e)
        }

        function U(t, e) {
            if (!e) return t;
            for (var n, i, r, o = lr ? Reflect.ownKeys(e) : Object.keys(e), s = 0; s < o.length; s++) "__ob__" !== (n = o[s]) && (i = t[n], r = e[n], m(t, n) ? i !== r && c(i) && c(r) && U(i, r) : z(t, n, r));
            return t
        }

        function W(t, e, n) {
            return n ? function () {
                var i = "function" == typeof e ? e.call(n, n) : e, r = "function" == typeof t ? t.call(n, n) : t;
                return i ? U(i, r) : r
            } : e ? t ? function () {
                return U("function" == typeof e ? e.call(this, this) : e, "function" == typeof t ? t.call(this, this) : t)
            } : e : t
        }

        function q(t, e) {
            var n = e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t;
            return n ? G(n) : n
        }

        function G(t) {
            for (var e = [], n = 0; n < t.length; n++) -1 === e.indexOf(t[n]) && e.push(t[n]);
            return e
        }

        function Z(t, e, n, i) {
            var r = Object.create(t || null);
            return e ? T(r, e) : r
        }

        function X(t, e) {
            var n = t.props;
            if (n) {
                var i, r, o, s = {};
                if (Array.isArray(n)) for (i = n.length; i--;) "string" == typeof (r = n[i]) && (o = Ai(r), s[o] = {type: null}); else if (c(n)) for (var a in n) r = n[a], o = Ai(a), s[o] = c(r) ? r : {type: r};
                t.props = s
            }
        }

        function K(t, e) {
            var n = t.inject;
            if (n) {
                var i = t.inject = {};
                if (Array.isArray(n)) for (var r = 0; r < n.length; r++) i[n[r]] = {from: n[r]}; else if (c(n)) for (var o in n) {
                    var s = n[o];
                    i[o] = c(s) ? T({from: o}, s) : {from: s}
                }
            }
        }

        function Y(t) {
            var e = t.directives;
            if (e) for (var n in e) {
                var i = e[n];
                "function" == typeof i && (e[n] = {bind: i, update: i})
            }
        }

        function J(t, e, n) {
            function i(i) {
                var r = xr[i] || br;
                a[i] = r(t[i], e[i], n, i)
            }

            if ("function" == typeof e && (e = e.options), X(e, n), K(e, n), Y(e), !e._base && (e.extends && (t = J(t, e.extends, n)), e.mixins)) for (var r = 0, o = e.mixins.length; r < o; r++) t = J(t, e.mixins[r], n);
            var s, a = {};
            for (s in t) i(s);
            for (s in e) m(t, s) || i(s);
            return a
        }

        function Q(t, e, n, i) {
            if ("string" == typeof n) {
                var r = t[e];
                if (m(r, n)) return r[n];
                var o = Ai(n);
                if (m(r, o)) return r[o];
                var s = $i(o);
                if (m(r, s)) return r[s];
                return r[n] || r[o] || r[s]
            }
        }

        function tt(t, e, n, i) {
            var r = e[t], o = !m(n, t), s = n[t], a = rt(Boolean, r.type);
            if (a > -1) if (o && !m(r, "default")) s = !1; else if ("" === s || s === Mi(t)) {
                var l = rt(String, r.type);
                (l < 0 || a < l) && (s = !0)
            }
            if (void 0 === s) {
                s = et(i, r, t);
                var c = wr;
                F(!0), H(s), F(c)
            }
            return s
        }

        function et(t, e, n) {
            if (m(e, "default")) {
                var i = e.default;
                return t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n] ? t._props[n] : "function" == typeof i && "Function" !== nt(e.type) ? i.call(t) : i
            }
        }

        function nt(t) {
            var e = t && t.toString().match(/^\s*function (\w+)/);
            return e ? e[1] : ""
        }

        function it(t, e) {
            return nt(t) === nt(e)
        }

        function rt(t, e) {
            if (!Array.isArray(e)) return it(e, t) ? 0 : -1;
            for (var n = 0, i = e.length; n < i; n++) if (it(e[n], t)) return n;
            return -1
        }

        function ot(t, e, n) {
            A();
            try {
                if (e) for (var i = e; i = i.$parent;) {
                    var r = i.$options.errorCaptured;
                    if (r) for (var o = 0; o < r.length; o++) try {
                        var s = !1 === r[o].call(i, t, e, n);
                        if (s) return
                    } catch (t) {
                        at(t, i, "errorCaptured hook")
                    }
                }
                at(t, e, n)
            } finally {
                $()
            }
        }

        function st(t, e, n, i, r) {
            var o;
            try {
                o = n ? t.apply(e, n) : t.call(e), o && !o._isVue && d(o) && !o._handled && (o.catch(function (t) {
                    return ot(t, i, r + " (Promise/async)")
                }), o._handled = !0)
            } catch (t) {
                ot(t, i, r)
            }
            return o
        }

        function at(t, e, n) {
            if (ji.errorHandler) try {
                return ji.errorHandler.call(null, t, e, n)
            } catch (e) {
                e !== t && lt(e, null, "config.errorHandler")
            }
            lt(t, e, n)
        }

        function lt(t, e, n) {
            if (!qi && !Gi || "undefined" == typeof console) throw t;
            console.error(t)
        }

        function ct() {
            Cr = !1;
            var t = Pr.slice(0);
            Pr.length = 0;
            for (var e = 0; e < t.length; e++) t[e]()
        }

        function ut(t, e) {
            var n;
            if (Pr.push(function () {
                if (t) try {
                    t.call(e)
                } catch (t) {
                    ot(t, e, "nextTick")
                } else n && n(e)
            }), Cr || (Cr = !0, Tr()), !t && "undefined" != typeof Promise) return new Promise(function (t) {
                n = t
            })
        }

        function ht(t) {
            dt(t, Ir), Ir.clear()
        }

        function dt(t, e) {
            var n, i, r = Array.isArray(t);
            if (!(!r && !l(t) || Object.isFrozen(t) || t instanceof fr)) {
                if (t.__ob__) {
                    var o = t.__ob__.dep.id;
                    if (e.has(o)) return;
                    e.add(o)
                }
                if (r) for (n = t.length; n--;) dt(t[n], e); else for (i = Object.keys(t), n = i.length; n--;) dt(t[i[n]], e)
            }
        }

        function ft(t, e) {
            function n() {
                var t = arguments, i = n.fns;
                if (!Array.isArray(i)) return st(i, null, arguments, e, "v-on handler");
                for (var r = i.slice(), o = 0; o < r.length; o++) st(r[o], null, t, e, "v-on handler")
            }

            return n.fns = t, n
        }

        function pt(t, e, n, r, s, a) {
            var l, c, u, h;
            for (l in t) c = t[l], u = e[l], h = Ar(l), i(c) || (i(u) ? (i(c.fns) && (c = t[l] = ft(c, a)), o(h.once) && (c = t[l] = s(h.name, c, h.capture)), n(h.name, c, h.capture, h.passive, h.params)) : c !== u && (u.fns = c, t[l] = u));
            for (l in e) i(t[l]) && (h = Ar(l), r(h.name, e[l], h.capture))
        }

        function vt(t, e, n) {
            function s() {
                n.apply(this, arguments), g(a.fns, s)
            }

            t instanceof fr && (t = t.data.hook || (t.data.hook = {}));
            var a, l = t[e];
            i(l) ? a = ft([s]) : r(l.fns) && o(l.merged) ? (a = l, a.fns.push(s)) : a = ft([l, s]), a.merged = !0, t[e] = a
        }

        function gt(t, e, n) {
            var o = e.options.props;
            if (!i(o)) {
                var s = {}, a = t.attrs, l = t.props;
                if (r(a) || r(l)) for (var c in o) {
                    var u = Mi(c);
                    mt(s, l, c, u, !0) || mt(s, a, c, u, !1)
                }
                return s
            }
        }

        function mt(t, e, n, i, o) {
            if (r(e)) {
                if (m(e, n)) return t[n] = e[n], o || delete e[n], !0;
                if (m(e, i)) return t[n] = e[i], o || delete e[i], !0
            }
            return !1
        }

        function yt(t) {
            for (var e = 0; e < t.length; e++) if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
            return t
        }

        function wt(t) {
            return a(t) ? [D(t)] : Array.isArray(t) ? xt(t) : void 0
        }

        function _t(t) {
            return r(t) && r(t.text) && s(t.isComment)
        }

        function xt(t, e) {
            var n, s, l, c, u = [];
            for (n = 0; n < t.length; n++) s = t[n], i(s) || "boolean" == typeof s || (l = u.length - 1, c = u[l], Array.isArray(s) ? s.length > 0 && (s = xt(s, (e || "") + "_" + n), _t(s[0]) && _t(c) && (u[l] = D(c.text + s[0].text), s.shift()), u.push.apply(u, s)) : a(s) ? _t(c) ? u[l] = D(c.text + s) : "" !== s && u.push(D(s)) : _t(s) && _t(c) ? u[l] = D(c.text + s.text) : (o(t._isVList) && r(s.tag) && i(s.key) && r(e) && (s.key = "__vlist" + e + "_" + n + "__"), u.push(s)));
            return u
        }

        function Tt(t) {
            var e = t.$options.provide;
            e && (t._provided = "function" == typeof e ? e.call(t) : e)
        }

        function bt(t) {
            var e = St(t.$options.inject, t);
            e && (F(!1), Object.keys(e).forEach(function (n) {
                N(t, n, e[n])
            }), F(!0))
        }

        function St(t, e) {
            if (t) {
                for (var n = Object.create(null), i = lr ? Reflect.ownKeys(t) : Object.keys(t), r = 0; r < i.length; r++) {
                    var o = i[r];
                    if ("__ob__" !== o) {
                        for (var s = t[o].from, a = e; a;) {
                            if (a._provided && m(a._provided, s)) {
                                n[o] = a._provided[s];
                                break
                            }
                            a = a.$parent
                        }
                        if (!a && "default" in t[o]) {
                            var l = t[o].default;
                            n[o] = "function" == typeof l ? l.call(e) : l
                        }
                    }
                }
                return n
            }
        }

        function Pt(t, e) {
            if (!t || !t.length) return {};
            for (var n = {}, i = 0, r = t.length; i < r; i++) {
                var o = t[i], s = o.data;
                if (s && s.attrs && s.attrs.slot && delete s.attrs.slot, o.context !== e && o.fnContext !== e || !s || null == s.slot) (n.default || (n.default = [])).push(o); else {
                    var a = s.slot, l = n[a] || (n[a] = []);
                    "template" === o.tag ? l.push.apply(l, o.children || []) : l.push(o)
                }
            }
            for (var c in n) n[c].every(Ct) && delete n[c];
            return n
        }

        function Ct(t) {
            return t.isComment && !t.asyncFactory || " " === t.text
        }

        function Et(t, e, n) {
            var i, r = Object.keys(e).length > 0, o = t ? !!t.$stable : !r, s = t && t.$key;
            if (t) {
                if (t._normalized) return t._normalized;
                if (o && n && n !== Ei && s === n.$key && !r && !n.$hasNormal) return n;
                i = {};
                for (var a in t) t[a] && "$" !== a[0] && (i[a] = Rt(e, a, t[a]))
            } else i = {};
            for (var l in e) l in i || (i[l] = kt(e, l));
            return t && Object.isExtensible(t) && (t._normalized = i), k(i, "$stable", o), k(i, "$key", s), k(i, "$hasNormal", r), i
        }

        function Rt(t, e, n) {
            var i = function () {
                var t = arguments.length ? n.apply(null, arguments) : n({});
                return t = t && "object" == typeof t && !Array.isArray(t) ? [t] : wt(t), t && (0 === t.length || 1 === t.length && t[0].isComment) ? void 0 : t
            };
            return n.proxy && Object.defineProperty(t, e, {get: i, enumerable: !0, configurable: !0}), i
        }

        function kt(t, e) {
            return function () {
                return t[e]
            }
        }

        function Ot(t, e) {
            var n, i, o, s, a;
            if (Array.isArray(t) || "string" == typeof t) for (n = new Array(t.length), i = 0, o = t.length; i < o; i++) n[i] = e(t[i], i); else if ("number" == typeof t) for (n = new Array(t), i = 0; i < t; i++) n[i] = e(i + 1, i); else if (l(t)) if (lr && t[Symbol.iterator]) {
                n = [];
                for (var c = t[Symbol.iterator](), u = c.next(); !u.done;) n.push(e(u.value, n.length)), u = c.next()
            } else for (s = Object.keys(t), n = new Array(s.length), i = 0, o = s.length; i < o; i++) a = s[i], n[i] = e(t[a], a, i);
            return r(n) || (n = []), n._isVList = !0, n
        }

        function It(t, e, n, i) {
            var r, o = this.$scopedSlots[t];
            o ? (n = n || {}, i && (n = T(T({}, i), n)), r = o(n) || e) : r = this.$slots[t] || e;
            var s = n && n.slot;
            return s ? this.$createElement("template", {slot: s}, r) : r
        }

        function At(t) {
            return Q(this.$options, "filters", t, !0) || Bi
        }

        function $t(t, e) {
            return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e
        }

        function Dt(t, e, n, i, r) {
            var o = ji.keyCodes[e] || n;
            return r && i && !ji.keyCodes[e] ? $t(r, i) : o ? $t(o, t) : i ? Mi(i) !== e : void 0
        }

        function Mt(t, e, n, i, r) {
            if (n) if (l(n)) {
                Array.isArray(n) && (n = b(n));
                var o;
                for (var s in n) !function (s) {
                    if ("class" === s || "style" === s || ki(s)) o = t; else {
                        var a = t.attrs && t.attrs.type;
                        o = i || ji.mustUseProp(e, a, s) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {})
                    }
                    var l = Ai(s), c = Mi(s);
                    if (!(l in o || c in o) && (o[s] = n[s], r)) {
                        (t.on || (t.on = {}))["update:" + s] = function (t) {
                            n[s] = t
                        }
                    }
                }(s)
            } else ;
            return t
        }

        function Ft(t, e) {
            var n = this._staticTrees || (this._staticTrees = []), i = n[t];
            return i && !e ? i : (i = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), Bt(i, "__static__" + t, !1), i)
        }

        function Lt(t, e, n) {
            return Bt(t, "__once__" + e + (n ? "_" + n : ""), !0), t
        }

        function Bt(t, e, n) {
            if (Array.isArray(t)) for (var i = 0; i < t.length; i++) t[i] && "string" != typeof t[i] && Ht(t[i], e + "_" + i, n); else Ht(t, e, n)
        }

        function Ht(t, e, n) {
            t.isStatic = !0, t.key = e, t.isOnce = n
        }

        function Nt(t, e) {
            if (e) if (c(e)) {
                var n = t.on = t.on ? T({}, t.on) : {};
                for (var i in e) {
                    var r = n[i], o = e[i];
                    n[i] = r ? [].concat(r, o) : o
                }
            } else ;
            return t
        }

        function zt(t, e, n, i) {
            e = e || {$stable: !n};
            for (var r = 0; r < t.length; r++) {
                var o = t[r];
                Array.isArray(o) ? zt(o, e, n) : o && (o.proxy && (o.fn.proxy = !0), e[o.key] = o.fn)
            }
            return i && (e.$key = i), e
        }

        function jt(t, e) {
            for (var n = 0; n < e.length; n += 2) {
                var i = e[n];
                "string" == typeof i && i && (t[e[n]] = e[n + 1])
            }
            return t
        }

        function Vt(t, e) {
            return "string" == typeof t ? e + t : t
        }

        function Ut(t) {
            t._o = Lt, t._n = p, t._s = f, t._l = Ot, t._t = It, t._q = P, t._i = C, t._m = Ft, t._f = At, t._k = Dt, t._b = Mt, t._v = D, t._e = vr, t._u = zt, t._g = Nt, t._d = jt, t._p = Vt
        }

        function Wt(t, e, n, i, r) {
            var s, a = this, l = r.options;
            m(i, "_uid") ? (s = Object.create(i), s._original = i) : (s = i, i = i._original);
            var c = o(l._compiled), u = !c;
            this.data = t, this.props = e, this.children = n, this.parent = i, this.listeners = t.on || Ei, this.injections = St(l.inject, i), this.slots = function () {
                return a.$slots || Et(t.scopedSlots, a.$slots = Pt(n, i)), a.$slots
            }, Object.defineProperty(this, "scopedSlots", {
                enumerable: !0, get: function () {
                    return Et(t.scopedSlots, this.slots())
                }
            }), c && (this.$options = l, this.$slots = this.slots(), this.$scopedSlots = Et(t.scopedSlots, this.$slots)), l._scopeId ? this._c = function (t, e, n, r) {
                var o = te(s, t, e, n, r, u);
                return o && !Array.isArray(o) && (o.fnScopeId = l._scopeId, o.fnContext = i), o
            } : this._c = function (t, e, n, i) {
                return te(s, t, e, n, i, u)
            }
        }

        function qt(t, e, n, i, o) {
            var s = t.options, a = {}, l = s.props;
            if (r(l)) for (var c in l) a[c] = tt(c, l, e || Ei); else r(n.attrs) && Zt(a, n.attrs), r(n.props) && Zt(a, n.props);
            var u = new Wt(n, a, o, i, t), h = s.render.call(null, u._c, u);
            if (h instanceof fr) return Gt(h, n, u.parent, s, u);
            if (Array.isArray(h)) {
                for (var d = wt(h) || [], f = new Array(d.length), p = 0; p < d.length; p++) f[p] = Gt(d[p], n, u.parent, s, u);
                return f
            }
        }

        function Gt(t, e, n, i, r) {
            var o = M(t);
            return o.fnContext = n, o.fnOptions = i, e.slot && ((o.data || (o.data = {})).slot = e.slot), o
        }

        function Zt(t, e) {
            for (var n in e) t[Ai(n)] = e[n]
        }

        function Xt(t, e, n, s, a) {
            if (!i(t)) {
                var c = n.$options._base;
                if (l(t) && (t = c.extend(t)), "function" == typeof t) {
                    var u;
                    if (i(t.cid) && (u = t, void 0 === (t = ae(u, c)))) return se(u, e, n, s, a);
                    e = e || {}, je(t), r(e.model) && Qt(t.options, e);
                    var h = gt(e, t, a);
                    if (o(t.options.functional)) return qt(t, h, e, n, s);
                    var d = e.on;
                    if (e.on = e.nativeOn, o(t.options.abstract)) {
                        var f = e.slot;
                        e = {}, f && (e.slot = f)
                    }
                    Yt(e);
                    var p = t.options.name || a;
                    return new fr("vue-component-" + t.cid + (p ? "-" + p : ""), e, void 0, void 0, void 0, n, {
                        Ctor: t,
                        propsData: h,
                        listeners: d,
                        tag: a,
                        children: s
                    }, u)
                }
            }
        }

        function Kt(t, e) {
            var n = {_isComponent: !0, _parentVnode: t, parent: e}, i = t.data.inlineTemplate;
            return r(i) && (n.render = i.render, n.staticRenderFns = i.staticRenderFns), new t.componentOptions.Ctor(n)
        }

        function Yt(t) {
            for (var e = t.hook || (t.hook = {}), n = 0; n < Mr.length; n++) {
                var i = Mr[n], r = e[i], o = Dr[i];
                r === o || r && r._merged || (e[i] = r ? Jt(o, r) : o)
            }
        }

        function Jt(t, e) {
            var n = function (n, i) {
                t(n, i), e(n, i)
            };
            return n._merged = !0, n
        }

        function Qt(t, e) {
            var n = t.model && t.model.prop || "value", i = t.model && t.model.event || "input";
            (e.attrs || (e.attrs = {}))[n] = e.model.value;
            var o = e.on || (e.on = {}), s = o[i], a = e.model.callback;
            r(s) ? (Array.isArray(s) ? -1 === s.indexOf(a) : s !== a) && (o[i] = [a].concat(s)) : o[i] = a
        }

        function te(t, e, n, i, r, s) {
            return (Array.isArray(n) || a(n)) && (r = i, i = n, n = void 0), o(s) && (r = Lr), ee(t, e, n, i, r)
        }

        function ee(t, e, n, i, o) {
            if (r(n) && r(n.__ob__)) return vr();
            if (r(n) && r(n.is) && (e = n.is), !e) return vr();
            Array.isArray(i) && "function" == typeof i[0] && (n = n || {}, n.scopedSlots = {default: i[0]}, i.length = 0), o === Lr ? i = wt(i) : o === Fr && (i = yt(i));
            var s, a;
            if ("string" == typeof e) {
                var l;
                a = t.$vnode && t.$vnode.ns || ji.getTagNamespace(e), s = ji.isReservedTag(e) ? new fr(ji.parsePlatformTagName(e), n, i, void 0, void 0, t) : n && n.pre || !r(l = Q(t.$options, "components", e)) ? new fr(e, n, i, void 0, void 0, t) : Xt(l, n, t, i, e)
            } else s = Xt(e, n, t, i);
            return Array.isArray(s) ? s : r(s) ? (r(a) && ne(s, a), r(n) && ie(n), s) : vr()
        }

        function ne(t, e, n) {
            if (t.ns = e, "foreignObject" === t.tag && (e = void 0, n = !0), r(t.children)) for (var s = 0, a = t.children.length; s < a; s++) {
                var l = t.children[s];
                r(l.tag) && (i(l.ns) || o(n) && "svg" !== l.tag) && ne(l, e, n)
            }
        }

        function ie(t) {
            l(t.style) && ht(t.style), l(t.class) && ht(t.class)
        }

        function re(t) {
            t._vnode = null, t._staticTrees = null;
            var e = t.$options, n = t.$vnode = e._parentVnode, i = n && n.context;
            t.$slots = Pt(e._renderChildren, i), t.$scopedSlots = Ei, t._c = function (e, n, i, r) {
                return te(t, e, n, i, r, !1)
            }, t.$createElement = function (e, n, i, r) {
                return te(t, e, n, i, r, !0)
            };
            var r = n && n.data;
            N(t, "$attrs", r && r.attrs || Ei, null, !0), N(t, "$listeners", e._parentListeners || Ei, null, !0)
        }

        function oe(t, e) {
            return (t.__esModule || lr && "Module" === t[Symbol.toStringTag]) && (t = t.default), l(t) ? e.extend(t) : t
        }

        function se(t, e, n, i, r) {
            var o = vr();
            return o.asyncFactory = t, o.asyncMeta = {data: e, context: n, children: i, tag: r}, o
        }

        function ae(t, e) {
            if (o(t.error) && r(t.errorComp)) return t.errorComp;
            if (r(t.resolved)) return t.resolved;
            var n = Br;
            if (n && r(t.owners) && -1 === t.owners.indexOf(n) && t.owners.push(n), o(t.loading) && r(t.loadingComp)) return t.loadingComp;
            if (n && !r(t.owners)) {
                var s = t.owners = [n], a = !0, c = null, u = null;
                n.$on("hook:destroyed", function () {
                    return g(s, n)
                });
                var h = function (t) {
                    for (var e = 0, n = s.length; e < n; e++) s[e].$forceUpdate();
                    t && (s.length = 0, null !== c && (clearTimeout(c), c = null), null !== u && (clearTimeout(u), u = null))
                }, f = E(function (n) {
                    t.resolved = oe(n, e), a ? s.length = 0 : h(!0)
                }), p = E(function (e) {
                    r(t.errorComp) && (t.error = !0, h(!0))
                }), v = t(f, p);
                return l(v) && (d(v) ? i(t.resolved) && v.then(f, p) : d(v.component) && (v.component.then(f, p), r(v.error) && (t.errorComp = oe(v.error, e)), r(v.loading) && (t.loadingComp = oe(v.loading, e), 0 === v.delay ? t.loading = !0 : c = setTimeout(function () {
                    c = null, i(t.resolved) && i(t.error) && (t.loading = !0, h(!1))
                }, v.delay || 200)), r(v.timeout) && (u = setTimeout(function () {
                    u = null, i(t.resolved) && p(null)
                }, v.timeout)))), a = !1, t.loading ? t.loadingComp : t.resolved
            }
        }

        function le(t) {
            return t.isComment && t.asyncFactory
        }

        function ce(t) {
            if (Array.isArray(t)) for (var e = 0; e < t.length; e++) {
                var n = t[e];
                if (r(n) && (r(n.componentOptions) || le(n))) return n
            }
        }

        function ue(t) {
            t._events = Object.create(null), t._hasHookEvent = !1;
            var e = t.$options._parentListeners;
            e && pe(t, e)
        }

        function he(t, e) {
            $r.$on(t, e)
        }

        function de(t, e) {
            $r.$off(t, e)
        }

        function fe(t, e) {
            var n = $r;
            return function i() {
                null !== e.apply(null, arguments) && n.$off(t, i)
            }
        }

        function pe(t, e, n) {
            $r = t, pt(e, n || {}, he, de, fe, t), $r = void 0
        }

        function ve(t) {
            var e = Hr;
            return Hr = t, function () {
                Hr = e
            }
        }

        function ge(t) {
            var e = t.$options, n = e.parent;
            if (n && !e.abstract) {
                for (; n.$options.abstract && n.$parent;) n = n.$parent;
                n.$children.push(t)
            }
            t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1
        }

        function me(t, e, n) {
            t.$el = e, t.$options.render || (t.$options.render = vr), Te(t, "beforeMount");
            var i;
            return i = function () {
                t._update(t._render(), n)
            }, new Kr(t, i, S, {
                before: function () {
                    t._isMounted && !t._isDestroyed && Te(t, "beforeUpdate")
                }
            }, !0), n = !1, null == t.$vnode && (t._isMounted = !0, Te(t, "mounted")), t
        }

        function ye(t, e, n, i, r) {
            var o = i.data.scopedSlots, s = t.$scopedSlots,
                a = !!(o && !o.$stable || s !== Ei && !s.$stable || o && t.$scopedSlots.$key !== o.$key),
                l = !!(r || t.$options._renderChildren || a);
            if (t.$options._parentVnode = i, t.$vnode = i, t._vnode && (t._vnode.parent = i), t.$options._renderChildren = r, t.$attrs = i.data.attrs || Ei, t.$listeners = n || Ei, e && t.$options.props) {
                F(!1);
                for (var c = t._props, u = t.$options._propKeys || [], h = 0; h < u.length; h++) {
                    var d = u[h], f = t.$options.props;
                    c[d] = tt(d, f, e, t)
                }
                F(!0), t.$options.propsData = e
            }
            n = n || Ei;
            var p = t.$options._parentListeners;
            t.$options._parentListeners = n, pe(t, n, p), l && (t.$slots = Pt(r, i.context), t.$forceUpdate())
        }

        function we(t) {
            for (; t && (t = t.$parent);) if (t._inactive) return !0;
            return !1
        }

        function _e(t, e) {
            if (e) {
                if (t._directInactive = !1, we(t)) return
            } else if (t._directInactive) return;
            if (t._inactive || null === t._inactive) {
                t._inactive = !1;
                for (var n = 0; n < t.$children.length; n++) _e(t.$children[n]);
                Te(t, "activated")
            }
        }

        function xe(t, e) {
            if (!(e && (t._directInactive = !0, we(t)) || t._inactive)) {
                t._inactive = !0;
                for (var n = 0; n < t.$children.length; n++) xe(t.$children[n]);
                Te(t, "deactivated")
            }
        }

        function Te(t, e) {
            A();
            var n = t.$options[e], i = e + " hook";
            if (n) for (var r = 0, o = n.length; r < o; r++) st(n[r], t, null, t, i);
            t._hasHookEvent && t.$emit("hook:" + e), $()
        }

        function be() {
            Wr = Nr.length = zr.length = 0, jr = {}, Vr = Ur = !1
        }

        function Se() {
            qr = Gr(), Ur = !0;
            var t, e;
            for (Nr.sort(function (t, e) {
                return t.id - e.id
            }), Wr = 0; Wr < Nr.length; Wr++) t = Nr[Wr], t.before && t.before(), e = t.id, jr[e] = null, t.run();
            var n = zr.slice(), i = Nr.slice();
            be(), Ee(n), Pe(i), ar && ji.devtools && ar.emit("flush")
        }

        function Pe(t) {
            for (var e = t.length; e--;) {
                var n = t[e], i = n.vm;
                i._watcher === n && i._isMounted && !i._isDestroyed && Te(i, "updated")
            }
        }

        function Ce(t) {
            t._inactive = !1, zr.push(t)
        }

        function Ee(t) {
            for (var e = 0; e < t.length; e++) t[e]._inactive = !0, _e(t[e], !0)
        }

        function Re(t) {
            var e = t.id;
            if (null == jr[e]) {
                if (jr[e] = !0, Ur) {
                    for (var n = Nr.length - 1; n > Wr && Nr[n].id > t.id;) n--;
                    Nr.splice(n + 1, 0, t)
                } else Nr.push(t);
                Vr || (Vr = !0, ut(Se))
            }
        }

        function ke(t, e, n) {
            Yr.get = function () {
                return this[e][n]
            }, Yr.set = function (t) {
                this[e][n] = t
            }, Object.defineProperty(t, n, Yr)
        }

        function Oe(t) {
            t._watchers = [];
            var e = t.$options;
            e.props && Ie(t, e.props), e.methods && Be(t, e.methods), e.data ? Ae(t) : H(t._data = {}, !0), e.computed && De(t, e.computed), e.watch && e.watch !== er && He(t, e.watch)
        }

        function Ie(t, e) {
            var n = t.$options.propsData || {}, i = t._props = {}, r = t.$options._propKeys = [], o = !t.$parent;
            o || F(!1);
            for (var s in e) !function (o) {
                r.push(o);
                var s = tt(o, e, n, t);
                N(i, o, s), o in t || ke(t, "_props", o)
            }(s);
            F(!0)
        }

        function Ae(t) {
            var e = t.$options.data;
            e = t._data = "function" == typeof e ? $e(e, t) : e || {}, c(e) || (e = {});
            for (var n = Object.keys(e), i = t.$options.props, r = (t.$options.methods, n.length); r--;) {
                var o = n[r];
                i && m(i, o) || R(o) || ke(t, "_data", o)
            }
            H(e, !0)
        }

        function $e(t, e) {
            A();
            try {
                return t.call(e, e)
            } catch (t) {
                return ot(t, e, "data()"), {}
            } finally {
                $()
            }
        }

        function De(t, e) {
            var n = t._computedWatchers = Object.create(null), i = sr();
            for (var r in e) {
                var o = e[r], s = "function" == typeof o ? o : o.get;
                i || (n[r] = new Kr(t, s || S, S, Jr)), r in t || Me(t, r, o)
            }
        }

        function Me(t, e, n) {
            var i = !sr();
            "function" == typeof n ? (Yr.get = i ? Fe(e) : Le(n), Yr.set = S) : (Yr.get = n.get ? i && !1 !== n.cache ? Fe(e) : Le(n.get) : S, Yr.set = n.set || S), Object.defineProperty(t, e, Yr)
        }

        function Fe(t) {
            return function () {
                var e = this._computedWatchers && this._computedWatchers[t];
                if (e) return e.dirty && e.evaluate(), hr.target && e.depend(), e.value
            }
        }

        function Le(t) {
            return function () {
                return t.call(this, this)
            }
        }

        function Be(t, e) {
            t.$options.props;
            for (var n in e) t[n] = "function" != typeof e[n] ? S : Fi(e[n], t)
        }

        function He(t, e) {
            for (var n in e) {
                var i = e[n];
                if (Array.isArray(i)) for (var r = 0; r < i.length; r++) Ne(t, n, i[r]); else Ne(t, n, i)
            }
        }

        function Ne(t, e, n, i) {
            return c(n) && (i = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, i)
        }

        function ze(t, e) {
            var n = t.$options = Object.create(t.constructor.options), i = e._parentVnode;
            n.parent = e.parent, n._parentVnode = i;
            var r = i.componentOptions;
            n.propsData = r.propsData, n._parentListeners = r.listeners, n._renderChildren = r.children, n._componentTag = r.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns)
        }

        function je(t) {
            var e = t.options;
            if (t.super) {
                var n = je(t.super);
                if (n !== t.superOptions) {
                    t.superOptions = n;
                    var i = Ve(t);
                    i && T(t.extendOptions, i), e = t.options = J(n, t.extendOptions), e.name && (e.components[e.name] = t)
                }
            }
            return e
        }

        function Ve(t) {
            var e, n = t.options, i = t.sealedOptions;
            for (var r in n) n[r] !== i[r] && (e || (e = {}), e[r] = n[r]);
            return e
        }

        function Ue(t) {
            this._init(t)
        }

        function We(t) {
            t.use = function (t) {
                var e = this._installedPlugins || (this._installedPlugins = []);
                if (e.indexOf(t) > -1) return this;
                var n = x(arguments, 1);
                return n.unshift(this), "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n), e.push(t), this
            }
        }

        function qe(t) {
            t.mixin = function (t) {
                return this.options = J(this.options, t), this
            }
        }

        function Ge(t) {
            t.cid = 0;
            var e = 1;
            t.extend = function (t) {
                t = t || {};
                var n = this, i = n.cid, r = t._Ctor || (t._Ctor = {});
                if (r[i]) return r[i];
                var o = t.name || n.options.name, s = function (t) {
                    this._init(t)
                };
                return s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.cid = e++, s.options = J(n.options, t), s.super = n, s.options.props && Ze(s), s.options.computed && Xe(s), s.extend = n.extend, s.mixin = n.mixin, s.use = n.use, Ni.forEach(function (t) {
                    s[t] = n[t]
                }), o && (s.options.components[o] = s), s.superOptions = n.options, s.extendOptions = t, s.sealedOptions = T({}, s.options), r[i] = s, s
            }
        }

        function Ze(t) {
            var e = t.options.props;
            for (var n in e) ke(t.prototype, "_props", n)
        }

        function Xe(t) {
            var e = t.options.computed;
            for (var n in e) Me(t.prototype, n, e[n])
        }

        function Ke(t) {
            Ni.forEach(function (e) {
                t[e] = function (t, n) {
                    return n ? ("component" === e && c(n) && (n.name = n.name || t, n = this.options._base.extend(n)), "directive" === e && "function" == typeof n && (n = {
                        bind: n,
                        update: n
                    }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t]
                }
            })
        }

        function Ye(t) {
            return t && (t.Ctor.options.name || t.tag)
        }

        function Je(t, e) {
            return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : !!u(t) && t.test(e)
        }

        function Qe(t, e) {
            var n = t.cache, i = t.keys, r = t._vnode;
            for (var o in n) {
                var s = n[o];
                if (s) {
                    var a = Ye(s.componentOptions);
                    a && !e(a) && tn(n, o, i, r)
                }
            }
        }

        function tn(t, e, n, i) {
            var r = t[e];
            !r || i && r.tag === i.tag || r.componentInstance.$destroy(), t[e] = null, g(n, e)
        }

        function en(t) {
            for (var e = t.data, n = t, i = t; r(i.componentInstance);) (i = i.componentInstance._vnode) && i.data && (e = nn(i.data, e));
            for (; r(n = n.parent);) n && n.data && (e = nn(e, n.data));
            return rn(e.staticClass, e.class)
        }

        function nn(t, e) {
            return {staticClass: on(t.staticClass, e.staticClass), class: r(t.class) ? [t.class, e.class] : e.class}
        }

        function rn(t, e) {
            return r(t) || r(e) ? on(t, sn(e)) : ""
        }

        function on(t, e) {
            return t ? e ? t + " " + e : t : e || ""
        }

        function sn(t) {
            return Array.isArray(t) ? an(t) : l(t) ? ln(t) : "string" == typeof t ? t : ""
        }

        function an(t) {
            for (var e, n = "", i = 0, o = t.length; i < o; i++) r(e = sn(t[i])) && "" !== e && (n && (n += " "), n += e);
            return n
        }

        function ln(t) {
            var e = "";
            for (var n in t) t[n] && (e && (e += " "), e += n);
            return e
        }

        function cn(t) {
            return _o(t) ? "svg" : "math" === t ? "math" : void 0
        }

        function un(t) {
            if (!qi) return !0;
            if (xo(t)) return !1;
            if (t = t.toLowerCase(), null != To[t]) return To[t];
            var e = document.createElement(t);
            return t.indexOf("-") > -1 ? To[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : To[t] = /HTMLUnknownElement/.test(e.toString())
        }

        function hn(t) {
            if ("string" == typeof t) {
                var e = document.querySelector(t);
                return e || document.createElement("div")
            }
            return t
        }

        function dn(t, e) {
            var n = document.createElement(t);
            return "select" !== t ? n : (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n)
        }

        function fn(t, e) {
            return document.createElementNS(yo[t], e)
        }

        function pn(t) {
            return document.createTextNode(t)
        }

        function vn(t) {
            return document.createComment(t)
        }

        function gn(t, e, n) {
            t.insertBefore(e, n)
        }

        function mn(t, e) {
            t.removeChild(e)
        }

        function yn(t, e) {
            t.appendChild(e)
        }

        function wn(t) {
            return t.parentNode
        }

        function _n(t) {
            return t.nextSibling
        }

        function xn(t) {
            return t.tagName
        }

        function Tn(t, e) {
            t.textContent = e
        }

        function bn(t, e) {
            t.setAttribute(e, "")
        }

        function Sn(t, e) {
            var n = t.data.ref;
            if (r(n)) {
                var i = t.context, o = t.componentInstance || t.elm, s = i.$refs;
                e ? Array.isArray(s[n]) ? g(s[n], o) : s[n] === o && (s[n] = void 0) : t.data.refInFor ? Array.isArray(s[n]) ? s[n].indexOf(o) < 0 && s[n].push(o) : s[n] = [o] : s[n] = o
            }
        }

        function Pn(t, e) {
            return t.key === e.key && (t.tag === e.tag && t.isComment === e.isComment && r(t.data) === r(e.data) && Cn(t, e) || o(t.isAsyncPlaceholder) && t.asyncFactory === e.asyncFactory && i(e.asyncFactory.error))
        }

        function Cn(t, e) {
            if ("input" !== t.tag) return !0;
            var n, i = r(n = t.data) && r(n = n.attrs) && n.type, o = r(n = e.data) && r(n = n.attrs) && n.type;
            return i === o || bo(i) && bo(o)
        }

        function En(t, e, n) {
            var i, o, s = {};
            for (i = e; i <= n; ++i) o = t[i].key, r(o) && (s[o] = i);
            return s
        }

        function Rn(t, e) {
            (t.data.directives || e.data.directives) && kn(t, e)
        }

        function kn(t, e) {
            var n, i, r, o = t === Co, s = e === Co, a = On(t.data.directives, t.context),
                l = On(e.data.directives, e.context), c = [], u = [];
            for (n in l) i = a[n], r = l[n], i ? (r.oldValue = i.value, r.oldArg = i.arg, An(r, "update", e, t), r.def && r.def.componentUpdated && u.push(r)) : (An(r, "bind", e, t), r.def && r.def.inserted && c.push(r));
            if (c.length) {
                var h = function () {
                    for (var n = 0; n < c.length; n++) An(c[n], "inserted", e, t)
                };
                o ? vt(e, "insert", h) : h()
            }
            if (u.length && vt(e, "postpatch", function () {
                for (var n = 0; n < u.length; n++) An(u[n], "componentUpdated", e, t)
            }), !o) for (n in a) l[n] || An(a[n], "unbind", t, t, s)
        }

        function On(t, e) {
            var n = Object.create(null);
            if (!t) return n;
            var i, r;
            for (i = 0; i < t.length; i++) r = t[i], r.modifiers || (r.modifiers = ko), n[In(r)] = r, r.def = Q(e.$options, "directives", r.name, !0);
            return n
        }

        function In(t) {
            return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
        }

        function An(t, e, n, i, r) {
            var o = t.def && t.def[e];
            if (o) try {
                o(n.elm, t, n, i, r)
            } catch (i) {
                ot(i, n.context, "directive " + t.name + " " + e + " hook")
            }
        }

        function $n(t, e) {
            var n = e.componentOptions;
            if (!(r(n) && !1 === n.Ctor.options.inheritAttrs || i(t.data.attrs) && i(e.data.attrs))) {
                var o, s, a = e.elm, l = t.data.attrs || {}, c = e.data.attrs || {};
                r(c.__ob__) && (c = e.data.attrs = T({}, c));
                for (o in c) s = c[o], l[o] !== s && Dn(a, o, s);
                (Ki || Ji) && c.value !== l.value && Dn(a, "value", c.value);
                for (o in l) i(c[o]) && (vo(o) ? a.removeAttributeNS(po, go(o)) : co(o) || a.removeAttribute(o))
            }
        }

        function Dn(t, e, n) {
            t.tagName.indexOf("-") > -1 ? Mn(t, e, n) : fo(e) ? mo(n) ? t.removeAttribute(e) : (n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, t.setAttribute(e, n)) : co(e) ? t.setAttribute(e, ho(e, n)) : vo(e) ? mo(n) ? t.removeAttributeNS(po, go(e)) : t.setAttributeNS(po, e, n) : Mn(t, e, n)
        }

        function Mn(t, e, n) {
            if (mo(n)) t.removeAttribute(e); else {
                if (Ki && !Yi && "TEXTAREA" === t.tagName && "placeholder" === e && "" !== n && !t.__ieph) {
                    var i = function (e) {
                        e.stopImmediatePropagation(), t.removeEventListener("input", i)
                    };
                    t.addEventListener("input", i), t.__ieph = !0
                }
                t.setAttribute(e, n)
            }
        }

        function Fn(t, e) {
            var n = e.elm, o = e.data, s = t.data;
            if (!(i(o.staticClass) && i(o.class) && (i(s) || i(s.staticClass) && i(s.class)))) {
                var a = en(e), l = n._transitionClasses;
                r(l) && (a = on(a, sn(l))), a !== n._prevClass && (n.setAttribute("class", a), n._prevClass = a)
            }
        }

        function Ln(t) {
            if (r(t[$o])) {
                var e = Ki ? "change" : "input";
                t[e] = [].concat(t[$o], t[e] || []), delete t[$o]
            }
            r(t[Do]) && (t.change = [].concat(t[Do], t.change || []), delete t[Do])
        }

        function Bn(t, e, n) {
            var i = io;
            return function r() {
                null !== e.apply(null, arguments) && Nn(t, r, n, i)
            }
        }

        function Hn(t, e, n, i) {
            if (Mo) {
                var r = qr, o = e;
                e = o._wrapper = function (t) {
                    if (t.target === t.currentTarget || t.timeStamp >= r || t.timeStamp <= 0 || t.target.ownerDocument !== document) return o.apply(this, arguments)
                }
            }
            io.addEventListener(t, e, nr ? {capture: n, passive: i} : n)
        }

        function Nn(t, e, n, i) {
            (i || io).removeEventListener(t, e._wrapper || e, n)
        }

        function zn(t, e) {
            if (!i(t.data.on) || !i(e.data.on)) {
                var n = e.data.on || {}, r = t.data.on || {};
                io = e.elm, Ln(n), pt(n, r, Hn, Nn, Bn, e.context), io = void 0
            }
        }

        function jn(t, e) {
            if (!i(t.data.domProps) || !i(e.data.domProps)) {
                var n, o, s = e.elm, a = t.data.domProps || {}, l = e.data.domProps || {};
                r(l.__ob__) && (l = e.data.domProps = T({}, l));
                for (n in a) n in l || (s[n] = "");
                for (n in l) {
                    if (o = l[n], "textContent" === n || "innerHTML" === n) {
                        if (e.children && (e.children.length = 0), o === a[n]) continue;
                        1 === s.childNodes.length && s.removeChild(s.childNodes[0])
                    }
                    if ("value" === n && "PROGRESS" !== s.tagName) {
                        s._value = o;
                        var c = i(o) ? "" : String(o);
                        Vn(s, c) && (s.value = c)
                    } else if ("innerHTML" === n && _o(s.tagName) && i(s.innerHTML)) {
                        ro = ro || document.createElement("div"), ro.innerHTML = "<svg>" + o + "</svg>";
                        for (var u = ro.firstChild; s.firstChild;) s.removeChild(s.firstChild);
                        for (; u.firstChild;) s.appendChild(u.firstChild)
                    } else if (o !== a[n]) try {
                        s[n] = o
                    } catch (t) {
                    }
                }
            }
        }

        function Vn(t, e) {
            return !t.composing && ("OPTION" === t.tagName || Un(t, e) || Wn(t, e))
        }

        function Un(t, e) {
            var n = !0;
            try {
                n = document.activeElement !== t
            } catch (t) {
            }
            return n && t.value !== e
        }

        function Wn(t, e) {
            var n = t.value, i = t._vModifiers;
            if (r(i)) {
                if (i.number) return p(n) !== p(e);
                if (i.trim) return n.trim() !== e.trim()
            }
            return n !== e
        }

        function qn(t) {
            var e = Gn(t.style);
            return t.staticStyle ? T(t.staticStyle, e) : e
        }

        function Gn(t) {
            return Array.isArray(t) ? b(t) : "string" == typeof t ? Bo(t) : t
        }

        function Zn(t, e) {
            var n, i = {};
            if (e) for (var r = t; r.componentInstance;) (r = r.componentInstance._vnode) && r.data && (n = qn(r.data)) && T(i, n);
            (n = qn(t.data)) && T(i, n);
            for (var o = t; o = o.parent;) o.data && (n = qn(o.data)) && T(i, n);
            return i
        }

        function Xn(t, e) {
            var n = e.data, o = t.data;
            if (!(i(n.staticStyle) && i(n.style) && i(o.staticStyle) && i(o.style))) {
                var s, a, l = e.elm, c = o.staticStyle, u = o.normalizedStyle || o.style || {}, h = c || u,
                    d = Gn(e.data.style) || {};
                e.data.normalizedStyle = r(d.__ob__) ? T({}, d) : d;
                var f = Zn(e, !0);
                for (a in h) i(f[a]) && zo(l, a, "");
                for (a in f) (s = f[a]) !== h[a] && zo(l, a, null == s ? "" : s)
            }
        }

        function Kn(t, e) {
            if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(Wo).forEach(function (e) {
                return t.classList.add(e)
            }) : t.classList.add(e); else {
                var n = " " + (t.getAttribute("class") || "") + " ";
                n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim())
            }
        }

        function Yn(t, e) {
            if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(Wo).forEach(function (e) {
                return t.classList.remove(e)
            }) : t.classList.remove(e), t.classList.length || t.removeAttribute("class"); else {
                for (var n = " " + (t.getAttribute("class") || "") + " ", i = " " + e + " "; n.indexOf(i) >= 0;) n = n.replace(i, " ");
                n = n.trim(), n ? t.setAttribute("class", n) : t.removeAttribute("class")
            }
        }

        function Jn(t) {
            if (t) {
                if ("object" == typeof t) {
                    var e = {};
                    return !1 !== t.css && T(e, qo(t.name || "v")), T(e, t), e
                }
                return "string" == typeof t ? qo(t) : void 0
            }
        }

        function Qn(t) {
            ts(function () {
                ts(t)
            })
        }

        function ti(t, e) {
            var n = t._transitionClasses || (t._transitionClasses = []);
            n.indexOf(e) < 0 && (n.push(e), Kn(t, e))
        }

        function ei(t, e) {
            t._transitionClasses && g(t._transitionClasses, e), Yn(t, e)
        }

        function ni(t, e, n) {
            var i = ii(t, e), r = i.type, o = i.timeout, s = i.propCount;
            if (!r) return n();
            var a = r === Zo ? Yo : Qo, l = 0, c = function () {
                t.removeEventListener(a, u), n()
            }, u = function (e) {
                e.target === t && ++l >= s && c()
            };
            setTimeout(function () {
                l < s && c()
            }, o + 1), t.addEventListener(a, u)
        }

        function ii(t, e) {
            var n, i = window.getComputedStyle(t), r = (i[Ko + "Delay"] || "").split(", "),
                o = (i[Ko + "Duration"] || "").split(", "), s = ri(r, o), a = (i[Jo + "Delay"] || "").split(", "),
                l = (i[Jo + "Duration"] || "").split(", "), c = ri(a, l), u = 0, h = 0;
            return e === Zo ? s > 0 && (n = Zo, u = s, h = o.length) : e === Xo ? c > 0 && (n = Xo, u = c, h = l.length) : (u = Math.max(s, c), n = u > 0 ? s > c ? Zo : Xo : null, h = n ? n === Zo ? o.length : l.length : 0), {
                type: n,
                timeout: u,
                propCount: h,
                hasTransform: n === Zo && es.test(i[Ko + "Property"])
            }
        }

        function ri(t, e) {
            for (; t.length < e.length;) t = t.concat(t);
            return Math.max.apply(null, e.map(function (e, n) {
                return oi(e) + oi(t[n])
            }))
        }

        function oi(t) {
            return 1e3 * Number(t.slice(0, -1).replace(",", "."))
        }

        function si(t, e) {
            var n = t.elm;
            r(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
            var o = Jn(t.data.transition);
            if (!i(o) && !r(n._enterCb) && 1 === n.nodeType) {
                for (var s = o.css, a = o.type, c = o.enterClass, u = o.enterToClass, h = o.enterActiveClass, d = o.appearClass, f = o.appearToClass, v = o.appearActiveClass, g = o.beforeEnter, m = o.enter, y = o.afterEnter, w = o.enterCancelled, _ = o.beforeAppear, x = o.appear, T = o.afterAppear, b = o.appearCancelled, S = o.duration, P = Hr, C = Hr.$vnode; C && C.parent;) P = C.context, C = C.parent;
                var R = !P._isMounted || !t.isRootInsert;
                if (!R || x || "" === x) {
                    var k = R && d ? d : c, O = R && v ? v : h, I = R && f ? f : u, A = R ? _ || g : g,
                        $ = R && "function" == typeof x ? x : m, D = R ? T || y : y, M = R ? b || w : w,
                        F = p(l(S) ? S.enter : S), L = !1 !== s && !Yi, B = ci($), H = n._enterCb = E(function () {
                            L && (ei(n, I), ei(n, O)), H.cancelled ? (L && ei(n, k), M && M(n)) : D && D(n), n._enterCb = null
                        });
                    t.data.show || vt(t, "insert", function () {
                        var e = n.parentNode, i = e && e._pending && e._pending[t.key];
                        i && i.tag === t.tag && i.elm._leaveCb && i.elm._leaveCb(), $ && $(n, H)
                    }), A && A(n), L && (ti(n, k), ti(n, O), Qn(function () {
                        ei(n, k), H.cancelled || (ti(n, I), B || (li(F) ? setTimeout(H, F) : ni(n, a, H)))
                    })), t.data.show && (e && e(), $ && $(n, H)), L || B || H()
                }
            }
        }

        function ai(t, e) {
            function n() {
                b.cancelled || (!t.data.show && o.parentNode && ((o.parentNode._pending || (o.parentNode._pending = {}))[t.key] = t), f && f(o), _ && (ti(o, u), ti(o, d), Qn(function () {
                    ei(o, u), b.cancelled || (ti(o, h), x || (li(T) ? setTimeout(b, T) : ni(o, c, b)))
                })), v && v(o, b), _ || x || b())
            }

            var o = t.elm;
            r(o._enterCb) && (o._enterCb.cancelled = !0, o._enterCb());
            var s = Jn(t.data.transition);
            if (i(s) || 1 !== o.nodeType) return e();
            if (!r(o._leaveCb)) {
                var a = s.css, c = s.type, u = s.leaveClass, h = s.leaveToClass, d = s.leaveActiveClass,
                    f = s.beforeLeave, v = s.leave, g = s.afterLeave, m = s.leaveCancelled, y = s.delayLeave,
                    w = s.duration, _ = !1 !== a && !Yi, x = ci(v), T = p(l(w) ? w.leave : w),
                    b = o._leaveCb = E(function () {
                        o.parentNode && o.parentNode._pending && (o.parentNode._pending[t.key] = null), _ && (ei(o, h), ei(o, d)), b.cancelled ? (_ && ei(o, u), m && m(o)) : (e(), g && g(o)), o._leaveCb = null
                    });
                y ? y(n) : n()
            }
        }

        function li(t) {
            return "number" == typeof t && !isNaN(t)
        }

        function ci(t) {
            if (i(t)) return !1;
            var e = t.fns;
            return r(e) ? ci(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1
        }

        function ui(t, e) {
            !0 !== e.data.show && si(e)
        }

        function hi(t, e, n) {
            di(t, e, n), (Ki || Ji) && setTimeout(function () {
                di(t, e, n)
            }, 0)
        }

        function di(t, e, n) {
            var i = e.value, r = t.multiple;
            if (!r || Array.isArray(i)) {
                for (var o, s, a = 0, l = t.options.length; a < l; a++) if (s = t.options[a], r) o = C(i, pi(s)) > -1, s.selected !== o && (s.selected = o); else if (P(pi(s), i)) return void (t.selectedIndex !== a && (t.selectedIndex = a));
                r || (t.selectedIndex = -1)
            }
        }

        function fi(t, e) {
            return e.every(function (e) {
                return !P(e, t)
            })
        }

        function pi(t) {
            return "_value" in t ? t._value : t.value
        }

        function vi(t) {
            t.target.composing = !0
        }

        function gi(t) {
            t.target.composing && (t.target.composing = !1, mi(t.target, "input"))
        }

        function mi(t, e) {
            var n = document.createEvent("HTMLEvents");
            n.initEvent(e, !0, !0), t.dispatchEvent(n)
        }

        function yi(t) {
            return !t.componentInstance || t.data && t.data.transition ? t : yi(t.componentInstance._vnode)
        }

        function wi(t) {
            var e = t && t.componentOptions;
            return e && e.Ctor.options.abstract ? wi(ce(e.children)) : t
        }

        function _i(t) {
            var e = {}, n = t.$options;
            for (var i in n.propsData) e[i] = t[i];
            var r = n._parentListeners;
            for (var o in r) e[Ai(o)] = r[o];
            return e
        }

        function xi(t, e) {
            if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", {props: e.componentOptions.propsData})
        }

        function Ti(t) {
            for (; t = t.parent;) if (t.data.transition) return !0
        }

        function bi(t, e) {
            return e.key === t.key && e.tag === t.tag
        }

        function Si(t) {
            t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb()
        }

        function Pi(t) {
            t.data.newPos = t.elm.getBoundingClientRect()
        }

        function Ci(t) {
            var e = t.data.pos, n = t.data.newPos, i = e.left - n.left, r = e.top - n.top;
            if (i || r) {
                t.data.moved = !0;
                var o = t.elm.style;
                o.transform = o.WebkitTransform = "translate(" + i + "px," + r + "px)", o.transitionDuration = "0s"
            }
        }/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
        var Ei = Object.freeze({}), Ri = Object.prototype.toString,
            ki = (v("slot,component", !0), v("key,ref,slot,slot-scope,is")), Oi = Object.prototype.hasOwnProperty,
            Ii = /-(\w)/g, Ai = y(function (t) {
                return t.replace(Ii, function (t, e) {
                    return e ? e.toUpperCase() : ""
                })
            }), $i = y(function (t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }), Di = /\B([A-Z])/g, Mi = y(function (t) {
                return t.replace(Di, "-$1").toLowerCase()
            }), Fi = Function.prototype.bind ? _ : w, Li = function (t, e, n) {
                return !1
            }, Bi = function (t) {
                return t
            }, Hi = "data-server-rendered", Ni = ["component", "directive", "filter"],
            zi = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
            ji = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: Li,
                isReservedAttr: Li,
                isUnknownElement: Li,
                getTagNamespace: S,
                parsePlatformTagName: Bi,
                mustUseProp: Li,
                async: !0,
                _lifecycleHooks: zi
            },
            Vi = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/,
            Ui = new RegExp("[^" + Vi.source + ".$_\\d]"), Wi = "__proto__" in {}, qi = "undefined" != typeof window,
            Gi = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
            Zi = Gi && WXEnvironment.platform.toLowerCase(), Xi = qi && window.navigator.userAgent.toLowerCase(),
            Ki = Xi && /msie|trident/.test(Xi), Yi = Xi && Xi.indexOf("msie 9.0") > 0,
            Ji = Xi && Xi.indexOf("edge/") > 0,
            Qi = (Xi && Xi.indexOf("android"), Xi && /iphone|ipad|ipod|ios/.test(Xi) || "ios" === Zi),
            tr = (Xi && /chrome\/\d+/.test(Xi), Xi && /phantomjs/.test(Xi), Xi && Xi.match(/firefox\/(\d+)/)),
            er = {}.watch, nr = !1;
        if (qi) try {
            var ir = {};
            Object.defineProperty(ir, "passive", {
                get: function () {
                    nr = !0
                }
            }), window.addEventListener("test-passive", null, ir)
        } catch (t) {
        }
        var rr, or, sr = function () {
                return void 0 === rr && (rr = !qi && !Gi && void 0 !== t && (t.process && "server" === t.process.env.VUE_ENV)), rr
            }, ar = qi && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
            lr = "undefined" != typeof Symbol && I(Symbol) && "undefined" != typeof Reflect && I(Reflect.ownKeys);
        or = "undefined" != typeof Set && I(Set) ? Set : function () {
            function t() {
                this.set = Object.create(null)
            }

            return t.prototype.has = function (t) {
                return !0 === this.set[t]
            }, t.prototype.add = function (t) {
                this.set[t] = !0
            }, t.prototype.clear = function () {
                this.set = Object.create(null)
            }, t
        }();
        var cr = S, ur = 0, hr = function () {
            this.id = ur++, this.subs = []
        };
        hr.prototype.addSub = function (t) {
            this.subs.push(t)
        }, hr.prototype.removeSub = function (t) {
            g(this.subs, t)
        }, hr.prototype.depend = function () {
            hr.target && hr.target.addDep(this)
        }, hr.prototype.notify = function () {
            for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++) t[e].update()
        }, hr.target = null;
        var dr = [], fr = function (t, e, n, i, r, o, s, a) {
            this.tag = t, this.data = e, this.children = n, this.text = i, this.elm = r, this.ns = void 0, this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = e && e.key, this.componentOptions = s, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = a, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
        }, pr = {child: {configurable: !0}};
        pr.child.get = function () {
            return this.componentInstance
        }, Object.defineProperties(fr.prototype, pr);
        var vr = function (t) {
            void 0 === t && (t = "");
            var e = new fr;
            return e.text = t, e.isComment = !0, e
        }, gr = Array.prototype, mr = Object.create(gr);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (t) {
            var e = gr[t];
            k(mr, t, function () {
                for (var n = [], i = arguments.length; i--;) n[i] = arguments[i];
                var r, o = e.apply(this, n), s = this.__ob__;
                switch (t) {
                    case"push":
                    case"unshift":
                        r = n;
                        break;
                    case"splice":
                        r = n.slice(2)
                }
                return r && s.observeArray(r), s.dep.notify(), o
            })
        });
        var yr = Object.getOwnPropertyNames(mr), wr = !0, _r = function (t) {
            this.value = t, this.dep = new hr, this.vmCount = 0, k(t, "__ob__", this), Array.isArray(t) ? (Wi ? L(t, mr) : B(t, mr, yr), this.observeArray(t)) : this.walk(t)
        };
        _r.prototype.walk = function (t) {
            for (var e = Object.keys(t), n = 0; n < e.length; n++) N(t, e[n])
        }, _r.prototype.observeArray = function (t) {
            for (var e = 0, n = t.length; e < n; e++) H(t[e])
        };
        var xr = ji.optionMergeStrategies;
        xr.data = function (t, e, n) {
            return n ? W(t, e, n) : e && "function" != typeof e ? t : W(t, e)
        }, zi.forEach(function (t) {
            xr[t] = q
        }), Ni.forEach(function (t) {
            xr[t + "s"] = Z
        }), xr.watch = function (t, e, n, i) {
            if (t === er && (t = void 0), e === er && (e = void 0), !e) return Object.create(t || null);
            if (!t) return e;
            var r = {};
            T(r, t);
            for (var o in e) {
                var s = r[o], a = e[o];
                s && !Array.isArray(s) && (s = [s]), r[o] = s ? s.concat(a) : Array.isArray(a) ? a : [a]
            }
            return r
        }, xr.props = xr.methods = xr.inject = xr.computed = function (t, e, n, i) {
            if (!t) return e;
            var r = Object.create(null);
            return T(r, t), e && T(r, e), r
        }, xr.provide = W;
        var Tr, br = function (t, e) {
            return void 0 === e ? t : e
        }, Sr = !1, Pr = [], Cr = !1;
        if ("undefined" != typeof Promise && I(Promise)) {
            var Er = Promise.resolve();
            Tr = function () {
                Er.then(ct), Qi && setTimeout(S)
            }, Sr = !0
        } else if (Ki || "undefined" == typeof MutationObserver || !I(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Tr = void 0 !== n && I(n) ? function () {
            n(ct)
        } : function () {
            setTimeout(ct, 0)
        }; else {
            var Rr = 1, kr = new MutationObserver(ct), Or = document.createTextNode(String(Rr));
            kr.observe(Or, {characterData: !0}), Tr = function () {
                Rr = (Rr + 1) % 2, Or.data = String(Rr)
            }, Sr = !0
        }
        var Ir = new or, Ar = y(function (t) {
            var e = "&" === t.charAt(0);
            t = e ? t.slice(1) : t;
            var n = "~" === t.charAt(0);
            t = n ? t.slice(1) : t;
            var i = "!" === t.charAt(0);
            return t = i ? t.slice(1) : t, {name: t, once: n, capture: i, passive: e}
        });
        Ut(Wt.prototype);
        var $r, Dr = {
                init: function (t, e) {
                    if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                        var n = t;
                        Dr.prepatch(n, n)
                    } else {
                        (t.componentInstance = Kt(t, Hr)).$mount(e ? t.elm : void 0, e)
                    }
                }, prepatch: function (t, e) {
                    var n = e.componentOptions;
                    ye(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children)
                }, insert: function (t) {
                    var e = t.context, n = t.componentInstance;
                    n._isMounted || (n._isMounted = !0, Te(n, "mounted")), t.data.keepAlive && (e._isMounted ? Ce(n) : _e(n, !0))
                }, destroy: function (t) {
                    var e = t.componentInstance;
                    e._isDestroyed || (t.data.keepAlive ? xe(e, !0) : e.$destroy())
                }
            }, Mr = Object.keys(Dr), Fr = 1, Lr = 2, Br = null, Hr = null, Nr = [], zr = [], jr = {}, Vr = !1, Ur = !1,
            Wr = 0, qr = 0, Gr = Date.now;
        if (qi && !Ki) {
            var Zr = window.performance;
            Zr && "function" == typeof Zr.now && Gr() > document.createEvent("Event").timeStamp && (Gr = function () {
                return Zr.now()
            })
        }
        var Xr = 0, Kr = function (t, e, n, i, r) {
            this.vm = t, r && (t._watcher = this), t._watchers.push(this), i ? (this.deep = !!i.deep, this.user = !!i.user, this.lazy = !!i.lazy, this.sync = !!i.sync, this.before = i.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++Xr, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new or, this.newDepIds = new or, this.expression = "", "function" == typeof e ? this.getter = e : (this.getter = O(e), this.getter || (this.getter = S)), this.value = this.lazy ? void 0 : this.get()
        };
        Kr.prototype.get = function () {
            A(this);
            var t, e = this.vm;
            try {
                t = this.getter.call(e, e)
            } catch (t) {
                if (!this.user) throw t;
                ot(t, e, 'getter for watcher "' + this.expression + '"')
            } finally {
                this.deep && ht(t), $(), this.cleanupDeps()
            }
            return t
        }, Kr.prototype.addDep = function (t) {
            var e = t.id;
            this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this))
        }, Kr.prototype.cleanupDeps = function () {
            for (var t = this.deps.length; t--;) {
                var e = this.deps[t];
                this.newDepIds.has(e.id) || e.removeSub(this)
            }
            var n = this.depIds;
            this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
        }, Kr.prototype.update = function () {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : Re(this)
        }, Kr.prototype.run = function () {
            if (this.active) {
                var t = this.get();
                if (t !== this.value || l(t) || this.deep) {
                    var e = this.value;
                    if (this.value = t, this.user) try {
                        this.cb.call(this.vm, t, e)
                    } catch (t) {
                        ot(t, this.vm, 'callback for watcher "' + this.expression + '"')
                    } else this.cb.call(this.vm, t, e)
                }
            }
        }, Kr.prototype.evaluate = function () {
            this.value = this.get(), this.dirty = !1
        }, Kr.prototype.depend = function () {
            for (var t = this.deps.length; t--;) this.deps[t].depend()
        }, Kr.prototype.teardown = function () {
            if (this.active) {
                this.vm._isBeingDestroyed || g(this.vm._watchers, this);
                for (var t = this.deps.length; t--;) this.deps[t].removeSub(this);
                this.active = !1
            }
        };
        var Yr = {enumerable: !0, configurable: !0, get: S, set: S}, Jr = {lazy: !0}, Qr = 0;
        !function (t) {
            t.prototype._init = function (t) {
                var e = this;
                e._uid = Qr++, e._isVue = !0, t && t._isComponent ? ze(e, t) : e.$options = J(je(e.constructor), t || {}, e), e._renderProxy = e, e._self = e, ge(e), ue(e), re(e), Te(e, "beforeCreate"), bt(e), Oe(e), Tt(e), Te(e, "created"), e.$options.el && e.$mount(e.$options.el)
            }
        }(Ue), function (t) {
            var e = {};
            e.get = function () {
                return this._data
            };
            var n = {};
            n.get = function () {
                return this._props
            }, Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), t.prototype.$set = z, t.prototype.$delete = j, t.prototype.$watch = function (t, e, n) {
                var i = this;
                if (c(e)) return Ne(i, t, e, n);
                n = n || {}, n.user = !0;
                var r = new Kr(i, t, e, n);
                if (n.immediate) try {
                    e.call(i, r.value)
                } catch (t) {
                    ot(t, i, 'callback for immediate watcher "' + r.expression + '"')
                }
                return function () {
                    r.teardown()
                }
            }
        }(Ue), function (t) {
            var e = /^hook:/;
            t.prototype.$on = function (t, n) {
                var i = this;
                if (Array.isArray(t)) for (var r = 0, o = t.length; r < o; r++) i.$on(t[r], n); else (i._events[t] || (i._events[t] = [])).push(n), e.test(t) && (i._hasHookEvent = !0);
                return i
            }, t.prototype.$once = function (t, e) {
                function n() {
                    i.$off(t, n), e.apply(i, arguments)
                }

                var i = this;
                return n.fn = e, i.$on(t, n), i
            }, t.prototype.$off = function (t, e) {
                var n = this;
                if (!arguments.length) return n._events = Object.create(null), n;
                if (Array.isArray(t)) {
                    for (var i = 0, r = t.length; i < r; i++) n.$off(t[i], e);
                    return n
                }
                var o = n._events[t];
                if (!o) return n;
                if (!e) return n._events[t] = null, n;
                for (var s, a = o.length; a--;) if ((s = o[a]) === e || s.fn === e) {
                    o.splice(a, 1);
                    break
                }
                return n
            }, t.prototype.$emit = function (t) {
                var e = this, n = e._events[t];
                if (n) {
                    n = n.length > 1 ? x(n) : n;
                    for (var i = x(arguments, 1), r = 'event handler for "' + t + '"', o = 0, s = n.length; o < s; o++) st(n[o], e, i, e, r)
                }
                return e
            }
        }(Ue), function (t) {
            t.prototype._update = function (t, e) {
                var n = this, i = n.$el, r = n._vnode, o = ve(n);
                n._vnode = t, n.$el = r ? n.__patch__(r, t) : n.__patch__(n.$el, t, e, !1), o(), i && (i.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
            }, t.prototype.$forceUpdate = function () {
                var t = this;
                t._watcher && t._watcher.update()
            }, t.prototype.$destroy = function () {
                var t = this;
                if (!t._isBeingDestroyed) {
                    Te(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                    var e = t.$parent;
                    !e || e._isBeingDestroyed || t.$options.abstract || g(e.$children, t), t._watcher && t._watcher.teardown();
                    for (var n = t._watchers.length; n--;) t._watchers[n].teardown();
                    t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), Te(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null)
                }
            }
        }(Ue), function (t) {
            Ut(t.prototype), t.prototype.$nextTick = function (t) {
                return ut(t, this)
            }, t.prototype._render = function () {
                var t = this, e = t.$options, n = e.render, i = e._parentVnode;
                i && (t.$scopedSlots = Et(i.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = i;
                var r;
                try {
                    Br = t, r = n.call(t._renderProxy, t.$createElement)
                } catch (e) {
                    ot(e, t, "render"), r = t._vnode
                } finally {
                    Br = null
                }
                return Array.isArray(r) && 1 === r.length && (r = r[0]), r instanceof fr || (r = vr()), r.parent = i, r
            }
        }(Ue);
        var to = [String, RegExp, Array], eo = {
            name: "keep-alive",
            abstract: !0,
            props: {include: to, exclude: to, max: [String, Number]},
            created: function () {
                this.cache = Object.create(null), this.keys = []
            },
            destroyed: function () {
                for (var t in this.cache) tn(this.cache, t, this.keys)
            },
            mounted: function () {
                var t = this;
                this.$watch("include", function (e) {
                    Qe(t, function (t) {
                        return Je(e, t)
                    })
                }), this.$watch("exclude", function (e) {
                    Qe(t, function (t) {
                        return !Je(e, t)
                    })
                })
            },
            render: function () {
                var t = this.$slots.default, e = ce(t), n = e && e.componentOptions;
                if (n) {
                    var i = Ye(n), r = this, o = r.include, s = r.exclude;
                    if (o && (!i || !Je(o, i)) || s && i && Je(s, i)) return e;
                    var a = this, l = a.cache, c = a.keys,
                        u = null == e.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key;
                    l[u] ? (e.componentInstance = l[u].componentInstance, g(c, u), c.push(u)) : (l[u] = e, c.push(u), this.max && c.length > parseInt(this.max) && tn(l, c[0], c, this._vnode)), e.data.keepAlive = !0
                }
                return e || t && t[0]
            }
        }, no = {KeepAlive: eo};
        !function (t) {
            var e = {};
            e.get = function () {
                return ji
            }, Object.defineProperty(t, "config", e), t.util = {
                warn: cr,
                extend: T,
                mergeOptions: J,
                defineReactive: N
            }, t.set = z, t.delete = j, t.nextTick = ut, t.observable = function (t) {
                return H(t), t
            }, t.options = Object.create(null), Ni.forEach(function (e) {
                t.options[e + "s"] = Object.create(null)
            }), t.options._base = t, T(t.options.components, no), We(t), qe(t), Ge(t), Ke(t)
        }(Ue), Object.defineProperty(Ue.prototype, "$isServer", {get: sr}), Object.defineProperty(Ue.prototype, "$ssrContext", {
            get: function () {
                return this.$vnode && this.$vnode.ssrContext
            }
        }), Object.defineProperty(Ue, "FunctionalRenderContext", {value: Wt}), Ue.version = "2.6.10";
        var io, ro, oo, so = v("style,class"), ao = v("input,textarea,option,select,progress"),
            lo = function (t, e, n) {
                return "value" === n && ao(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t
            }, co = v("contenteditable,draggable,spellcheck"), uo = v("events,caret,typing,plaintext-only"),
            ho = function (t, e) {
                return mo(e) || "false" === e ? "false" : "contenteditable" === t && uo(e) ? e : "true"
            },
            fo = v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
            po = "http://www.w3.org/1999/xlink", vo = function (t) {
                return ":" === t.charAt(5) && "xlink" === t.slice(0, 5)
            }, go = function (t) {
                return vo(t) ? t.slice(6, t.length) : ""
            }, mo = function (t) {
                return null == t || !1 === t
            }, yo = {svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML"},
            wo = v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
            _o = v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
            xo = function (t) {
                return wo(t) || _o(t)
            }, To = Object.create(null), bo = v("text,number,password,search,email,tel,url"), So = Object.freeze({
                createElement: dn,
                createElementNS: fn,
                createTextNode: pn,
                createComment: vn,
                insertBefore: gn,
                removeChild: mn,
                appendChild: yn,
                parentNode: wn,
                nextSibling: _n,
                tagName: xn,
                setTextContent: Tn,
                setStyleScope: bn
            }), Po = {
                create: function (t, e) {
                    Sn(e)
                }, update: function (t, e) {
                    t.data.ref !== e.data.ref && (Sn(t, !0), Sn(e))
                }, destroy: function (t) {
                    Sn(t, !0)
                }
            }, Co = new fr("", {}, []), Eo = ["create", "activate", "update", "remove", "destroy"], Ro = {
                create: Rn, update: Rn, destroy: function (t) {
                    Rn(t, Co)
                }
            }, ko = Object.create(null), Oo = [Po, Ro], Io = {create: $n, update: $n}, Ao = {create: Fn, update: Fn},
            $o = "__r", Do = "__c", Mo = Sr && !(tr && Number(tr[1]) <= 53), Fo = {create: zn, update: zn},
            Lo = {create: jn, update: jn}, Bo = y(function (t) {
                var e = {}, n = /;(?![^(]*\))/g, i = /:(.+)/;
                return t.split(n).forEach(function (t) {
                    if (t) {
                        var n = t.split(i);
                        n.length > 1 && (e[n[0].trim()] = n[1].trim())
                    }
                }), e
            }), Ho = /^--/, No = /\s*!important$/, zo = function (t, e, n) {
                if (Ho.test(e)) t.style.setProperty(e, n); else if (No.test(n)) t.style.setProperty(Mi(e), n.replace(No, ""), "important"); else {
                    var i = Vo(e);
                    if (Array.isArray(n)) for (var r = 0, o = n.length; r < o; r++) t.style[i] = n[r]; else t.style[i] = n
                }
            }, jo = ["Webkit", "Moz", "ms"], Vo = y(function (t) {
                if (oo = oo || document.createElement("div").style, "filter" !== (t = Ai(t)) && t in oo) return t;
                for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < jo.length; n++) {
                    var i = jo[n] + e;
                    if (i in oo) return i
                }
            }), Uo = {create: Xn, update: Xn}, Wo = /\s+/, qo = y(function (t) {
                return {
                    enterClass: t + "-enter",
                    enterToClass: t + "-enter-to",
                    enterActiveClass: t + "-enter-active",
                    leaveClass: t + "-leave",
                    leaveToClass: t + "-leave-to",
                    leaveActiveClass: t + "-leave-active"
                }
            }), Go = qi && !Yi, Zo = "transition", Xo = "animation", Ko = "transition", Yo = "transitionend",
            Jo = "animation", Qo = "animationend";
        Go && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Ko = "WebkitTransition", Yo = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Jo = "WebkitAnimation", Qo = "webkitAnimationEnd"));
        var ts = qi ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (t) {
            return t()
        }, es = /\b(transform|all)(,|$)/, ns = qi ? {
            create: ui, activate: ui, remove: function (t, e) {
                !0 !== t.data.show ? ai(t, e) : e()
            }
        } : {}, is = [Io, Ao, Fo, Lo, Uo, ns], rs = is.concat(Oo), os = function (t) {
            function e(t) {
                return new fr(I.tagName(t).toLowerCase(), {}, [], void 0, t)
            }

            function n(t, e) {
                function n() {
                    0 == --n.listeners && s(t)
                }

                return n.listeners = e, n
            }

            function s(t) {
                var e = I.parentNode(t);
                r(e) && I.removeChild(e, t)
            }

            function l(t, e, n, i, s, a, l) {
                if (r(t.elm) && r(a) && (t = a[l] = M(t)), t.isRootInsert = !s, !c(t, e, n, i)) {
                    var u = t.data, h = t.children, p = t.tag;
                    r(p) ? (t.elm = t.ns ? I.createElementNS(t.ns, p) : I.createElement(p, t), m(t), f(t, h, e), r(u) && g(t, e), d(n, t.elm, i)) : o(t.isComment) ? (t.elm = I.createComment(t.text), d(n, t.elm, i)) : (t.elm = I.createTextNode(t.text), d(n, t.elm, i))
                }
            }

            function c(t, e, n, i) {
                var s = t.data;
                if (r(s)) {
                    var a = r(t.componentInstance) && s.keepAlive;
                    if (r(s = s.hook) && r(s = s.init) && s(t, !1), r(t.componentInstance)) return u(t, e), d(n, t.elm, i), o(a) && h(t, e, n, i), !0
                }
            }

            function u(t, e) {
                r(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), t.elm = t.componentInstance.$el, p(t) ? (g(t, e), m(t)) : (Sn(t), e.push(t))
            }

            function h(t, e, n, i) {
                for (var o, s = t; s.componentInstance;) if (s = s.componentInstance._vnode, r(o = s.data) && r(o = o.transition)) {
                    for (o = 0; o < k.activate.length; ++o) k.activate[o](Co, s);
                    e.push(s);
                    break
                }
                d(n, t.elm, i)
            }

            function d(t, e, n) {
                r(t) && (r(n) ? I.parentNode(n) === t && I.insertBefore(t, e, n) : I.appendChild(t, e))
            }

            function f(t, e, n) {
                if (Array.isArray(e)) for (var i = 0; i < e.length; ++i) l(e[i], n, t.elm, null, !0, e, i); else a(t.text) && I.appendChild(t.elm, I.createTextNode(String(t.text)))
            }

            function p(t) {
                for (; t.componentInstance;) t = t.componentInstance._vnode;
                return r(t.tag)
            }

            function g(t, e) {
                for (var n = 0; n < k.create.length; ++n) k.create[n](Co, t);
                E = t.data.hook, r(E) && (r(E.create) && E.create(Co, t), r(E.insert) && e.push(t))
            }

            function m(t) {
                var e;
                if (r(e = t.fnScopeId)) I.setStyleScope(t.elm, e); else for (var n = t; n;) r(e = n.context) && r(e = e.$options._scopeId) && I.setStyleScope(t.elm, e), n = n.parent;
                r(e = Hr) && e !== t.context && e !== t.fnContext && r(e = e.$options._scopeId) && I.setStyleScope(t.elm, e)
            }

            function y(t, e, n, i, r, o) {
                for (; i <= r; ++i) l(n[i], o, t, e, !1, n, i)
            }

            function w(t) {
                var e, n, i = t.data;
                if (r(i)) for (r(e = i.hook) && r(e = e.destroy) && e(t), e = 0; e < k.destroy.length; ++e) k.destroy[e](t);
                if (r(e = t.children)) for (n = 0; n < t.children.length; ++n) w(t.children[n])
            }

            function _(t, e, n, i) {
                for (; n <= i; ++n) {
                    var o = e[n];
                    r(o) && (r(o.tag) ? (x(o), w(o)) : s(o.elm))
                }
            }

            function x(t, e) {
                if (r(e) || r(t.data)) {
                    var i, o = k.remove.length + 1;
                    for (r(e) ? e.listeners += o : e = n(t.elm, o), r(i = t.componentInstance) && r(i = i._vnode) && r(i.data) && x(i, e), i = 0; i < k.remove.length; ++i) k.remove[i](t, e);
                    r(i = t.data.hook) && r(i = i.remove) ? i(t, e) : e()
                } else s(t.elm)
            }

            function T(t, e, n, o, s) {
                for (var a, c, u, h, d = 0, f = 0, p = e.length - 1, v = e[0], g = e[p], m = n.length - 1, w = n[0], x = n[m], T = !s; d <= p && f <= m;) i(v) ? v = e[++d] : i(g) ? g = e[--p] : Pn(v, w) ? (S(v, w, o, n, f), v = e[++d], w = n[++f]) : Pn(g, x) ? (S(g, x, o, n, m), g = e[--p], x = n[--m]) : Pn(v, x) ? (S(v, x, o, n, m), T && I.insertBefore(t, v.elm, I.nextSibling(g.elm)), v = e[++d], x = n[--m]) : Pn(g, w) ? (S(g, w, o, n, f), T && I.insertBefore(t, g.elm, v.elm), g = e[--p], w = n[++f]) : (i(a) && (a = En(e, d, p)), c = r(w.key) ? a[w.key] : b(w, e, d, p), i(c) ? l(w, o, t, v.elm, !1, n, f) : (u = e[c], Pn(u, w) ? (S(u, w, o, n, f), e[c] = void 0, T && I.insertBefore(t, u.elm, v.elm)) : l(w, o, t, v.elm, !1, n, f)), w = n[++f]);
                d > p ? (h = i(n[m + 1]) ? null : n[m + 1].elm, y(t, h, n, f, m, o)) : f > m && _(t, e, d, p)
            }

            function b(t, e, n, i) {
                for (var o = n; o < i; o++) {
                    var s = e[o];
                    if (r(s) && Pn(t, s)) return o
                }
            }

            function S(t, e, n, s, a, l) {
                if (t !== e) {
                    r(e.elm) && r(s) && (e = s[a] = M(e));
                    var c = e.elm = t.elm;
                    if (o(t.isAsyncPlaceholder)) return void (r(e.asyncFactory.resolved) ? C(t.elm, e, n) : e.isAsyncPlaceholder = !0);
                    if (o(e.isStatic) && o(t.isStatic) && e.key === t.key && (o(e.isCloned) || o(e.isOnce))) return void (e.componentInstance = t.componentInstance);
                    var u, h = e.data;
                    r(h) && r(u = h.hook) && r(u = u.prepatch) && u(t, e);
                    var d = t.children, f = e.children;
                    if (r(h) && p(e)) {
                        for (u = 0; u < k.update.length; ++u) k.update[u](t, e);
                        r(u = h.hook) && r(u = u.update) && u(t, e)
                    }
                    i(e.text) ? r(d) && r(f) ? d !== f && T(c, d, f, n, l) : r(f) ? (r(t.text) && I.setTextContent(c, ""), y(c, null, f, 0, f.length - 1, n)) : r(d) ? _(c, d, 0, d.length - 1) : r(t.text) && I.setTextContent(c, "") : t.text !== e.text && I.setTextContent(c, e.text), r(h) && r(u = h.hook) && r(u = u.postpatch) && u(t, e)
                }
            }

            function P(t, e, n) {
                if (o(n) && r(t.parent)) t.parent.data.pendingInsert = e; else for (var i = 0; i < e.length; ++i) e[i].data.hook.insert(e[i])
            }

            function C(t, e, n, i) {
                var s, a = e.tag, l = e.data, c = e.children;
                if (i = i || l && l.pre, e.elm = t, o(e.isComment) && r(e.asyncFactory)) return e.isAsyncPlaceholder = !0, !0;
                if (r(l) && (r(s = l.hook) && r(s = s.init) && s(e, !0), r(s = e.componentInstance))) return u(e, n), !0;
                if (r(a)) {
                    if (r(c)) if (t.hasChildNodes()) if (r(s = l) && r(s = s.domProps) && r(s = s.innerHTML)) {
                        if (s !== t.innerHTML) return !1
                    } else {
                        for (var h = !0, d = t.firstChild, p = 0; p < c.length; p++) {
                            if (!d || !C(d, c[p], n, i)) {
                                h = !1;
                                break
                            }
                            d = d.nextSibling
                        }
                        if (!h || d) return !1
                    } else f(e, c, n);
                    if (r(l)) {
                        var v = !1;
                        for (var m in l) if (!A(m)) {
                            v = !0, g(e, n);
                            break
                        }
                        !v && l.class && ht(l.class)
                    }
                } else t.data !== e.text && (t.data = e.text);
                return !0
            }

            var E, R, k = {}, O = t.modules, I = t.nodeOps;
            for (E = 0; E < Eo.length; ++E) for (k[Eo[E]] = [], R = 0; R < O.length; ++R) r(O[R][Eo[E]]) && k[Eo[E]].push(O[R][Eo[E]]);
            var A = v("attrs,class,staticClass,staticStyle,key");
            return function (t, n, s, a) {
                if (i(n)) return void (r(t) && w(t));
                var c = !1, u = [];
                if (i(t)) c = !0, l(n, u); else {
                    var h = r(t.nodeType);
                    if (!h && Pn(t, n)) S(t, n, u, null, null, a); else {
                        if (h) {
                            if (1 === t.nodeType && t.hasAttribute(Hi) && (t.removeAttribute(Hi), s = !0), o(s) && C(t, n, u)) return P(n, u, !0), t;
                            t = e(t)
                        }
                        var d = t.elm, f = I.parentNode(d);
                        if (l(n, u, d._leaveCb ? null : f, I.nextSibling(d)), r(n.parent)) for (var v = n.parent, g = p(n); v;) {
                            for (var m = 0; m < k.destroy.length; ++m) k.destroy[m](v);
                            if (v.elm = n.elm, g) {
                                for (var y = 0; y < k.create.length; ++y) k.create[y](Co, v);
                                var x = v.data.hook.insert;
                                if (x.merged) for (var T = 1; T < x.fns.length; T++) x.fns[T]()
                            } else Sn(v);
                            v = v.parent
                        }
                        r(f) ? _(f, [t], 0, 0) : r(t.tag) && w(t)
                    }
                }
                return P(n, u, c), n.elm
            }
        }({nodeOps: So, modules: rs});
        Yi && document.addEventListener("selectionchange", function () {
            var t = document.activeElement;
            t && t.vmodel && mi(t, "input")
        });
        var ss = {
            inserted: function (t, e, n, i) {
                "select" === n.tag ? (i.elm && !i.elm._vOptions ? vt(n, "postpatch", function () {
                    ss.componentUpdated(t, e, n)
                }) : hi(t, e, n.context), t._vOptions = [].map.call(t.options, pi)) : ("textarea" === n.tag || bo(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("compositionstart", vi), t.addEventListener("compositionend", gi), t.addEventListener("change", gi), Yi && (t.vmodel = !0)))
            }, componentUpdated: function (t, e, n) {
                if ("select" === n.tag) {
                    hi(t, e, n.context);
                    var i = t._vOptions, r = t._vOptions = [].map.call(t.options, pi);
                    if (r.some(function (t, e) {
                        return !P(t, i[e])
                    })) {
                        (t.multiple ? e.value.some(function (t) {
                            return fi(t, r)
                        }) : e.value !== e.oldValue && fi(e.value, r)) && mi(t, "change")
                    }
                }
            }
        }, as = {
            bind: function (t, e, n) {
                var i = e.value;
                n = yi(n);
                var r = n.data && n.data.transition,
                    o = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                i && r ? (n.data.show = !0, si(n, function () {
                    t.style.display = o
                })) : t.style.display = i ? o : "none"
            }, update: function (t, e, n) {
                var i = e.value;
                !i != !e.oldValue && (n = yi(n), n.data && n.data.transition ? (n.data.show = !0, i ? si(n, function () {
                    t.style.display = t.__vOriginalDisplay
                }) : ai(n, function () {
                    t.style.display = "none"
                })) : t.style.display = i ? t.__vOriginalDisplay : "none")
            }, unbind: function (t, e, n, i, r) {
                r || (t.style.display = t.__vOriginalDisplay)
            }
        }, ls = {model: ss, show: as}, cs = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterToClass: String,
            leaveToClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String,
            appearToClass: String,
            duration: [Number, String, Object]
        }, us = function (t) {
            return t.tag || le(t)
        }, hs = function (t) {
            return "show" === t.name
        }, ds = {
            name: "transition", props: cs, abstract: !0, render: function (t) {
                var e = this, n = this.$slots.default;
                if (n && (n = n.filter(us), n.length)) {
                    var i = this.mode, r = n[0];
                    if (Ti(this.$vnode)) return r;
                    var o = wi(r);
                    if (!o) return r;
                    if (this._leaving) return xi(t, r);
                    var s = "__transition-" + this._uid + "-";
                    o.key = null == o.key ? o.isComment ? s + "comment" : s + o.tag : a(o.key) ? 0 === String(o.key).indexOf(s) ? o.key : s + o.key : o.key;
                    var l = (o.data || (o.data = {})).transition = _i(this), c = this._vnode, u = wi(c);
                    if (o.data.directives && o.data.directives.some(hs) && (o.data.show = !0), u && u.data && !bi(o, u) && !le(u) && (!u.componentInstance || !u.componentInstance._vnode.isComment)) {
                        var h = u.data.transition = T({}, l);
                        if ("out-in" === i) return this._leaving = !0, vt(h, "afterLeave", function () {
                            e._leaving = !1, e.$forceUpdate()
                        }), xi(t, r);
                        if ("in-out" === i) {
                            if (le(o)) return c;
                            var d, f = function () {
                                d()
                            };
                            vt(l, "afterEnter", f), vt(l, "enterCancelled", f), vt(h, "delayLeave", function (t) {
                                d = t
                            })
                        }
                    }
                    return r
                }
            }
        }, fs = T({tag: String, moveClass: String}, cs);
        delete fs.mode;
        var ps = {
            props: fs, beforeMount: function () {
                var t = this, e = this._update;
                this._update = function (n, i) {
                    var r = ve(t);
                    t.__patch__(t._vnode, t.kept, !1, !0), t._vnode = t.kept, r(), e.call(t, n, i)
                }
            }, render: function (t) {
                for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), i = this.prevChildren = this.children, r = this.$slots.default || [], o = this.children = [], s = _i(this), a = 0; a < r.length; a++) {
                    var l = r[a];
                    if (l.tag) if (null != l.key && 0 !== String(l.key).indexOf("__vlist")) o.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = s; else ;
                }
                if (i) {
                    for (var c = [], u = [], h = 0; h < i.length; h++) {
                        var d = i[h];
                        d.data.transition = s, d.data.pos = d.elm.getBoundingClientRect(), n[d.key] ? c.push(d) : u.push(d)
                    }
                    this.kept = t(e, null, c), this.removed = u
                }
                return t(e, null, o)
            }, updated: function () {
                var t = this.prevChildren, e = this.moveClass || (this.name || "v") + "-move";
                t.length && this.hasMove(t[0].elm, e) && (t.forEach(Si), t.forEach(Pi), t.forEach(Ci), this._reflow = document.body.offsetHeight, t.forEach(function (t) {
                    if (t.data.moved) {
                        var n = t.elm, i = n.style;
                        ti(n, e), i.transform = i.WebkitTransform = i.transitionDuration = "", n.addEventListener(Yo, n._moveCb = function t(i) {
                            i && i.target !== n || i && !/transform$/.test(i.propertyName) || (n.removeEventListener(Yo, t), n._moveCb = null, ei(n, e))
                        })
                    }
                }))
            }, methods: {
                hasMove: function (t, e) {
                    if (!Go) return !1;
                    if (this._hasMove) return this._hasMove;
                    var n = t.cloneNode();
                    t._transitionClasses && t._transitionClasses.forEach(function (t) {
                        Yn(n, t)
                    }), Kn(n, e), n.style.display = "none", this.$el.appendChild(n);
                    var i = ii(n);
                    return this.$el.removeChild(n), this._hasMove = i.hasTransform
                }
            }
        }, vs = {Transition: ds, TransitionGroup: ps};
        Ue.config.mustUseProp = lo, Ue.config.isReservedTag = xo, Ue.config.isReservedAttr = so, Ue.config.getTagNamespace = cn, Ue.config.isUnknownElement = un, T(Ue.options.directives, ls), T(Ue.options.components, vs), Ue.prototype.__patch__ = qi ? os : S, Ue.prototype.$mount = function (t, e) {
            return t = t && qi ? hn(t) : void 0, me(this, t, e)
        }, qi && setTimeout(function () {
            ji.devtools && ar && ar.emit("init", Ue)
        }, 0), e.a = Ue
    }).call(e, n(49), n(71).setImmediate)
}, function (t, e) {
}, function (t, e, n) {
    "use strict";
    var i = n(98)(!0);
    n(31)(String, "String", function (t) {
        this._t = String(t), this._i = 0
    }, function () {
        var t, e = this._t, n = this._i;
        return n >= e.length ? {value: void 0, done: !0} : (t = i(e, n), this._i += t.length, {value: t, done: !1})
    })
}, function (t, e) {
    var n = Math.ceil, i = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
    }
}, function (t, e) {
    t.exports = function (t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function (t, e, n) {
    "use strict";
    var i = n(16), r = n(5), o = n(55), s = n(9), a = n(18), l = n(99), c = n(20), u = n(103), h = n(2)("iterator"),
        d = !([].keys && "next" in [].keys()), f = function () {
            return this
        };
    t.exports = function (t, e, n, p, v, g, m) {
        l(n, e, p);
        var y, w, _, x = function (t) {
                if (!d && t in P) return P[t];
                switch (t) {
                    case"keys":
                    case"values":
                        return function () {
                            return new n(this, t)
                        }
                }
                return function () {
                    return new n(this, t)
                }
            }, T = e + " Iterator", b = "values" == v, S = !1, P = t.prototype, C = P[h] || P["@@iterator"] || v && P[v],
            E = C || x(v), R = v ? b ? x("entries") : E : void 0, k = "Array" == e ? P.entries || C : C;
        if (k && (_ = u(k.call(new t))) !== Object.prototype && _.next && (c(_, T, !0), i || "function" == typeof _[h] || s(_, h, f)), b && C && "values" !== C.name && (S = !0, E = function () {
            return C.call(this)
        }), i && !m || !d && !S && P[h] || s(P, h, E), a[e] = E, a[T] = f, v) if (y = {
            values: b ? E : x("values"),
            keys: g ? E : x("keys"),
            entries: R
        }, m) for (w in y) w in P || o(P, w, y[w]); else r(r.P + r.F * (d || S), e, y);
        return y
    }
}, function (t, e, n) {
    var i = n(7), r = n(0).document, o = i(r) && i(r.createElement);
    t.exports = function (t) {
        return o ? r.createElement(t) : {}
    }
}, function (t, e, n) {
    var i = n(7);
    t.exports = function (t, e) {
        if (!i(t)) return t;
        var n, r;
        if (e && "function" == typeof (n = t.toString) && !i(r = n.call(t))) return r;
        if ("function" == typeof (n = t.valueOf) && !i(r = n.call(t))) return r;
        if (!e && "function" == typeof (n = t.toString) && !i(r = n.call(t))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (t, e, n) {
    var i = n(10), r = n(100), o = n(39), s = n(37)("IE_PROTO"), a = function () {
    }, l = function () {
        var t, e = n(32)("iframe"), i = o.length;
        for (e.style.display = "none", n(57).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; i--;) delete l.prototype[o[i]];
        return l()
    };
    t.exports = Object.create || function (t, e) {
        var n;
        return null !== t ? (a.prototype = i(t), n = new a, a.prototype = null, n[s] = t) : n = l(), void 0 === e ? n : r(n, e)
    }
}, function (t, e, n) {
    var i = n(19);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == i(t) ? t.split("") : Object(t)
    }
}, function (t, e, n) {
    var i = n(29), r = Math.min;
    t.exports = function (t) {
        return t > 0 ? r(i(t), 9007199254740991) : 0
    }
}, function (t, e, n) {
    var i = n(38)("keys"), r = n(25);
    t.exports = function (t) {
        return i[t] || (i[t] = r(t))
    }
}, function (t, e, n) {
    var i = n(1), r = n(0), o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    (t.exports = function (t, e) {
        return o[t] || (o[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: i.version,
        mode: n(16) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (t, e, n) {
    n(104);
    for (var i = n(0), r = n(9), o = n(18), s = n(2)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < a.length; l++) {
        var c = a[l], u = i[c], h = u && u.prototype;
        h && !h[s] && r(h, s, c), o[c] = o.Array
    }
}, function (t, e, n) {
    var i = n(19), r = n(2)("toStringTag"), o = "Arguments" == i(function () {
        return arguments
    }()), s = function (t, e) {
        try {
            return t[e]
        } catch (t) {
        }
    };
    t.exports = function (t) {
        var e, n, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = s(e = Object(t), r)) ? n : o ? i(e) : "Object" == (a = i(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
}, function (t, e) {
    t.exports = function (t, e, n, i) {
        if (!(t instanceof e) || void 0 !== i && i in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
}, function (t, e, n) {
    "use strict";

    function i(t) {
        var e, n;
        this.promise = new t(function (t, i) {
            if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
            e = t, n = i
        }), this.resolve = r(e), this.reject = r(n)
    }

    var r = n(17);
    t.exports.f = function (t) {
        return new i(t)
    }
}, function (t, e, n) {
    var i = n(9);
    t.exports = function (t, e, n) {
        for (var r in e) n && t[r] ? t[r] = e[r] : i(t, r, e[r]);
        return t
    }
}, function (t, e) {
    e.f = Object.getOwnPropertySymbols
}, function (t, e, n) {
    var i = n(25)("meta"), r = n(7), o = n(13), s = n(8).f, a = 0, l = Object.isExtensible || function () {
        return !0
    }, c = !n(12)(function () {
        return l(Object.preventExtensions({}))
    }), u = function (t) {
        s(t, i, {value: {i: "O" + ++a, w: {}}})
    }, h = function (t, e) {
        if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
        if (!o(t, i)) {
            if (!l(t)) return "F";
            if (!e) return "E";
            u(t)
        }
        return t[i].i
    }, d = function (t, e) {
        if (!o(t, i)) {
            if (!l(t)) return !0;
            if (!e) return !1;
            u(t)
        }
        return t[i].w
    }, f = function (t) {
        return c && p.NEED && l(t) && !o(t, i) && u(t), t
    }, p = t.exports = {KEY: i, NEED: !1, fastKey: h, getWeak: d, onFreeze: f}
}, function (t, e, n) {
    e.f = n(2)
}, function (t, e, n) {
    var i = n(0), r = n(1), o = n(16), s = n(47), a = n(8).f;
    t.exports = function (t) {
        var e = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
        "_" == t.charAt(0) || t in e || a(e, t, {value: s.f(t)})
    }
}, function (t, e) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function (t, e) {
    t.exports = {
        methods: {
            preventKeyboardEvent: function (t) {
                return !!(t.altKey || t.ctrlKey || t.metaKey) || ["INPUT", "SELECT", "TEXTAREA"].indexOf(t.target.nodeName) > -1 && "range" !== t.target.type
            }
        }
    }
}, function (t, e) {
    t.exports = {
        computed: {
            structures: function () {
                var t = this;
                if (!this.$root.manifest.structures) return [];
                for (var e = [], n = [], i = this.$root.manifest.structures.length, r = 0; r < i; r += 1) {
                    var o = this.$root.manifest.structures[r];
                    if (o.label ? o.label = this.$root.iiifConvertToArray(o.label)[0].trim() : o.label = "—", o.canvases) {
                        if ("continue" === function () {
                            var e = o.canvases[0];
                            o.firstPage = t.$root.canvases.findIndex(function (t) {
                                return t["@id"] === e
                            }) + 1;
                            var n = o.canvases[o.canvases.length - 1];
                            o.lastPage = t.$root.canvases.findIndex(function (t) {
                                return t["@id"] === n
                            }) + 1;
                            var i = t.$root.canvases[o.firstPage - 1];
                            if (!i) return "continue";
                            o.pageLabel = i.label
                        }()) continue
                    } else this.$root.canvases[0] && (o.firstPage = 1, o.lastPage = this.$root.pageCount, o.pageLabel = this.$root.canvases[0].label);
                    o.pageCount = o.lastPage - o.firstPage + 1, o.within && n.push(o), e.push(o)
                }
                for (var s = n.length, a = 0; a < i; a += 1) {
                    for (var l = [], c = 0; c < s; c += 1) {
                        var u = n[c];
                        u.within === e[a]["@id"] && l.push(u)
                    }
                    l.length && (e[a].childStructures = l.sort(function (t, e) {
                        return t.firstPage - e.firstPage
                    }))
                }
                return e.filter(function (t) {
                    return !t.within
                }).sort(function (t, e) {
                    return t.firstPage - e.firstPage
                })
            }, currentStructure: function () {
                var t = this;
                if (!Array.isArray(this.$root.manifest.structures)) return !1;
                var e = [];
                this.$root.params.pages.forEach(function (n) {
                    n && e.push(t.$root.canvases[n - 1]["@id"])
                });
                for (var n = this.$root.manifest.structures.length, i = void 0, r = void 0, o = 0; o < n; o += 1) {
                    var s = this.$root.manifest.structures[o], a = s.canvases;
                    if (a && a.some(function (t) {
                        return e.indexOf(t) > -1
                    }) && s.firstPage && s.lastPage) {
                        var l = s.lastPage - s.firstPage;
                        if ((l < r || !r) && (i = o, 0 === (r = l))) break
                    }
                }
                return "number" == typeof i && i >= 0 && this.$root.manifest.structures[i]
            }, currentStructureLabel: function () {
                return this.currentStructure.label
            }, currentStructureMetadata: function () {
                return this.currentStructure.metadata
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(53), r = n.n(i), o = n(64), s = n.n(o), a = n(65), l = n.n(a), c = n(120), u = n.n(c), h = n(135),
        d = n.n(h), f = n(68), p = n.n(f), v = n(69), g = n.n(v), m = n(26), y = n(150), w = n(196),
        _ = (n(198), n(199), n(201), n(202));
    n.n(_);
    if (window.Promise || (window.Promise = n(203)), m.a.component("Icon", w.a), m.a.prototype.$http = n(205), window.tifyOptions) {
        if ("object" !== g()(window.tifyOptions)) throw new Error("tifyOptions must be an object");
        p()(window.tifyOptions).forEach(function (t) {
            switch (t) {
                case"breakpoints":
                    if ("object" !== ("undefined" == typeof breakpoints ? "undefined" : g()(breakpoints))) throw new Error("TIFY option " + t + " must be an object (keys: breakpoint names, values: widths in px)");
                    break;
                case"container":
                    if ("string" != typeof window.tifyOptions[t] && !(window.tifyOptions[t] instanceof HTMLElement)) throw new Error("TIFY option " + t + " must be a string or an HTMLElement");
                    break;
                case"immediateRender":
                case"init":
                    if ("boolean" != typeof window.tifyOptions[t]) throw new Error('TIFY option "' + t + '" must be boolean');
                    break;
                case"language":
                    if ("string" != typeof window.tifyOptions[t]) throw new Error('TIFY option "' + t + '" must be a string');
                    break;
                case"title":
                case"manifest":
                case"stylesheet":
                    if ("string" != typeof window.tifyOptions[t] && null !== window.tifyOptions[t]) throw new Error('TIFY option "' + t + '" must be a string (URL) or null');
                    break;
                default:
                    throw new Error('Unknown TIFY option: "' + t + '"')
            }
        })
    }
    var x = void 0, T = void 0, b = document.getElementsByTagName("script"), S = b[b.length - 1];
    x = S.src.substring(0, S.src.lastIndexOf("/")), T = x + "/tify.css";
    var P = d()({
        breakpoints: {large: 1300, medium: 1e3, small: 700, tiny: 359},
        container: "#tify",
        immediateRender: !0,
        init: !0,
        language: "en",
        manifest: null,
        stylesheet: T,
        title: "TIFY"
    }, window.tifyOptions), C = new m.a({
        render: function (t) {
            return t(y.a)
        },
        data: {
            error: "",
            loading: 0,
            manifest: null,
            manifestUrl: "",
            messages: null,
            options: P,
            params: {},
            paramsTimer: null
        },
        computed: {
            canvases: function () {
                return this.manifest.sequences[0].canvases
            }, pageCount: function () {
                return this.manifest.sequences[0].canvases.length
            }
        },
        methods: {
            appendStylesheet: function (t) {
                var e = document.createElement("link");
                e.href = t, e.rel = "stylesheet", document.head.appendChild(e)
            }, getParams: function () {
                var t = {};
                try {
                    t = JSON.parse(this.getQueryParam("tify")) || {}
                } catch (t) {
                }
                this.isMobile() && !t.view ? t.view = "scan" : void 0 === t.view && (t.view = "info");
                var e = void 0;
                return this.isValidPagesArray(t.pages) ? e = t.pages : (t.pages && (this.error = "Invalid pages, reset to first page"), e = [1]), {
                    filters: t.filters || {},
                    pages: e,
                    panX: parseFloat(t.panX) || null,
                    panY: parseFloat(t.panY) || null,
                    rotation: parseInt(t.rotation, 10) || null,
                    view: t.view,
                    zoom: parseFloat(t.zoom) || null
                }
            }, getQueryParam: function (t) {
                var e = RegExp("[?&]" + t + "=([^&]*)").exec(window.location.search);
                return e && decodeURIComponent(e[1].replace(/\+/g, " "))
            }, iiifConvertToArray: function (t) {
                var e = this.$options.filters.filterHtml;
                if (!(t instanceof Array)) {
                    if ("object" === (void 0 === t ? "undefined" : g()(t))) {
                        if (t["@value"]) return [e(t["@value"])];
                        if (t["@id"]) {
                            var n = e(t["@id"]);
                            return [{"@id": n, label: t.label ? e(t.label) : n}]
                        }
                        return ["(Invalid value)"]
                    }
                    return [e(t)]
                }
                var i = this.options.language, r = [], o = {};
                t.forEach(function (t) {
                    "string" == typeof t || t["@id"] && t.label ? r.push(t) : t && "object" !== (void 0 === t ? "undefined" : g()(t)) ? r.push(e(t)) : t["@language"] && t["@value"] && (o.fallback || (o.fallback = t["@value"]), 0 === t["@language"].indexOf("en") ? o.en = t["@value"] : t["@language"] === i && (o.preferred = t["@value"]))
                });
                var s = o.preferred || o.en || o.fallback || null;
                return s && r.push(e(s)), r
            }, isMobile: function () {
                return this.$root.$el.offsetWidth < this.options.breakpoints.medium
            }, isValidPagesArray: function (t) {
                if (!Array.isArray(t)) return !1;
                if (new u.a(t).size !== t.length) return !1;
                for (var e = 0; e < t.length; e += 1) if (isNaN(t[e]) || e > 0 && t[e] > 0 && t[e] <= t[e - 1] || t[e] < 0 || t[e] > this.pageCount) return !1;
                return !0
            }, setPage: function (t) {
                var e = this.params.pages;
                if (e[0] % 2 < 1 && (e[1] === e[0] + 1 || 0 === e[1])) {
                    var n = t % 2 > 0 ? t - 1 : t;
                    return void this.updateParams({pages: [n, n === this.pageCount ? 0 : n + 1]})
                }
                this.updateParams({pages: [t]})
            }, updateBreakpoint: function () {
                var t = this;
                p()(this.options.breakpoints).forEach(function (e) {
                    t.$el.clientWidth <= t.options.breakpoints[e] ? t.$el.classList.add("-" + e) : t.$el.classList.remove("-" + e)
                })
            }, updateParams: function (t) {
                var e = this;
                l()(this.params, t), window.history && (clearTimeout(this.paramsTimeout), this.paramsTimeout = setTimeout(function () {
                    var n = {};
                    p()(e.params).forEach(function (t) {
                        var i = e.params[t];
                        null === i || "pages" === t && i.length < 2 && i[0] < 2 || "object" === (void 0 === i ? "undefined" : g()(i)) && !p()(i).length ? delete n[t] : n[t] = e.params[t]
                    });
                    var i = /([?&])tify=.*?(&|$)/, r = "tify=" + s()(n), o = window.location.href,
                        a = o.match(i) ? o.replace(i, "$1" + r + "$2") : o + (o.indexOf("?") < 0 ? "?" : "&") + r;
                    t.pages ? (e.error = "", window.history.pushState({}, "", a)) : window.history.replaceState({}, "", a)
                }, 100))
            }
        },
        mounted: function () {
            var t = this;
            if (this.$http.interceptors.request.use(function (e) {
                return t.loading += 1, e
            }), this.$http.interceptors.response.use(function (e) {
                return t.loading > 0 && (t.loading -= 1), e
            }, function (e) {
                return t.loading = 0, r.a.reject(e)
            }), this.options.stylesheet && this.appendStylesheet(this.options.stylesheet), this.manifestUrl = this.options.manifest || this.getQueryParam("manifest") || this.getQueryParam("manifestUrl"), !this.manifestUrl) return void (this.error = "Missing query parameter or option: manifest");
            if (this.options.manifest && this.params.manifest && (this.error = "Setting manifest via query parameter is disabled"), window.addEventListener("resize", function () {
                t.updateBreakpoint()
            }), this.updateBreakpoint(), this.$http.get(this.manifestUrl).then(function (e) {
                t.manifest = e.data, t.params = t.getParams(), window.addEventListener("popstate", function () {
                    t.params = t.getParams()
                }), t.options.title && (window.document.title = t.iiifConvertToArray(t.manifest.label)[0] + " | " + t.options.title)
            }, function (e) {
                var n = e.response ? e.response.statusText : e.message;
                t.error = "Error loading IIIF manifest: " + n
            }), "en" !== this.options.language) {
                var e = x + "/translations/" + this.options.language + ".json";
                this.$http.get(e).then(function (e) {
                    t.messages = e.data
                }, function (e) {
                    var n = e.response ? e.response.statusText : e.message;
                    t.error = "Error loading translation " + t.options.language + ": " + n, console.warn(t.error)
                })
            }
        }
    });
    C.init = function () {
        var t = "string" == typeof P.container ? document.querySelector(P.container) : P.container;
        if (t) {
            var e = document.createElement("div");
            t.appendChild(e), C.$mount(e)
        }
    }, P.init && C.init(), window.Tify = C, e.default = C
}, function (t, e, n) {
    t.exports = {default: n(97), __esModule: !0}
}, function (t, e, n) {
    t.exports = !n(6) && !n(12)(function () {
        return 7 != Object.defineProperty(n(32)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e, n) {
    t.exports = n(9)
}, function (t, e, n) {
    var i = n(13), r = n(14), o = n(101)(!1), s = n(37)("IE_PROTO");
    t.exports = function (t, e) {
        var n, a = r(t), l = 0, c = [];
        for (n in a) n != s && i(a, n) && c.push(n);
        for (; e.length > l;) i(a, n = e[l++]) && (~o(c, n) || c.push(n));
        return c
    }
}, function (t, e, n) {
    var i = n(0).document;
    t.exports = i && i.documentElement
}, function (t, e) {
    t.exports = function (t, e) {
        return {value: e, done: !!t}
    }
}, function (t, e, n) {
    var i = n(10), r = n(17), o = n(2)("species");
    t.exports = function (t, e) {
        var n, s = i(t).constructor;
        return void 0 === s || void 0 == (n = i(s)[o]) ? e : r(n)
    }
}, function (t, e, n) {
    var i, r, o, s = n(11), a = n(110), l = n(57), c = n(32), u = n(0), h = u.process, d = u.setImmediate,
        f = u.clearImmediate, p = u.MessageChannel, v = u.Dispatch, g = 0, m = {}, y = function () {
            var t = +this;
            if (m.hasOwnProperty(t)) {
                var e = m[t];
                delete m[t], e()
            }
        }, w = function (t) {
            y.call(t.data)
        };
    d && f || (d = function (t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return m[++g] = function () {
            a("function" == typeof t ? t : Function(t), e)
        }, i(g), g
    }, f = function (t) {
        delete m[t]
    }, "process" == n(19)(h) ? i = function (t) {
        h.nextTick(s(y, t, 1))
    } : v && v.now ? i = function (t) {
        v.now(s(y, t, 1))
    } : p ? (r = new p, o = r.port2, r.port1.onmessage = w, i = s(o.postMessage, o, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (i = function (t) {
        u.postMessage(t + "", "*")
    }, u.addEventListener("message", w, !1)) : i = "onreadystatechange" in c("script") ? function (t) {
        l.appendChild(c("script")).onreadystatechange = function () {
            l.removeChild(this), y.call(t)
        }
    } : function (t) {
        setTimeout(s(y, t, 1), 0)
    }), t.exports = {set: d, clear: f}
}, function (t, e) {
    t.exports = function (t) {
        try {
            return {e: !1, v: t()}
        } catch (t) {
            return {e: !0, v: t}
        }
    }
}, function (t, e, n) {
    var i = n(10), r = n(7), o = n(43);
    t.exports = function (t, e) {
        if (i(t), r(e) && e.constructor === t) return e;
        var n = o.f(t);
        return (0, n.resolve)(e), n.promise
    }
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(1), o = n(8), s = n(6), a = n(2)("species");
    t.exports = function (t) {
        var e = "function" == typeof r[t] ? r[t] : i[t];
        s && e && !e[a] && o.f(e, a, {
            configurable: !0, get: function () {
                return this
            }
        })
    }
}, function (t, e, n) {
    t.exports = {default: n(116), __esModule: !0}
}, function (t, e, n) {
    t.exports = {default: n(117), __esModule: !0}
}, function (t, e, n) {
    var i = n(7);
    t.exports = function (t, e) {
        if (!i(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
        return t
    }
}, function (t, e, n) {
    var i = n(19);
    t.exports = Array.isArray || function (t) {
        return "Array" == i(t)
    }
}, function (t, e, n) {
    t.exports = {default: n(136), __esModule: !0}
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {default: t}
    }

    e.__esModule = !0;
    var r = n(139), o = i(r), s = n(141), a = i(s),
        l = "function" == typeof a.default && "symbol" == typeof o.default ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof a.default && t.constructor === a.default && t !== a.default.prototype ? "symbol" : typeof t
        };
    e.default = "function" == typeof a.default && "symbol" === l(o.default) ? function (t) {
        return void 0 === t ? "undefined" : l(t)
    } : function (t) {
        return t && "function" == typeof a.default && t.constructor === a.default && t !== a.default.prototype ? "symbol" : void 0 === t ? "undefined" : l(t)
    }
}, function (t, e, n) {
    var i = n(56), r = n(39).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function (t) {
        return i(t, r)
    }
}, function (t, e, n) {
    (function (t) {
        function i(t, e) {
            this._id = t, this._clearFn = e
        }

        var r = void 0 !== t && t || "undefined" != typeof self && self || window, o = Function.prototype.apply;
        e.setTimeout = function () {
            return new i(o.call(setTimeout, r, arguments), clearTimeout)
        }, e.setInterval = function () {
            return new i(o.call(setInterval, r, arguments), clearInterval)
        }, e.clearTimeout = e.clearInterval = function (t) {
            t && t.close()
        }, i.prototype.unref = i.prototype.ref = function () {
        }, i.prototype.close = function () {
            this._clearFn.call(r, this._id)
        }, e.enroll = function (t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e
        }, e.unenroll = function (t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
        }, e._unrefActive = e.active = function (t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function () {
                t._onTimeout && t._onTimeout()
            }, e))
        }, n(149), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
    }).call(e, n(49))
}, function (t, e) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function r(t) {
        if (u === setTimeout) return setTimeout(t, 0);
        if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
        try {
            return u(t, 0)
        } catch (e) {
            try {
                return u.call(null, t, 0)
            } catch (e) {
                return u.call(this, t, 0)
            }
        }
    }

    function o(t) {
        if (h === clearTimeout) return clearTimeout(t);
        if ((h === i || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t);
        try {
            return h(t)
        } catch (e) {
            try {
                return h.call(null, t)
            } catch (e) {
                return h.call(this, t)
            }
        }
    }

    function s() {
        v && f && (v = !1, f.length ? p = f.concat(p) : g = -1, p.length && a())
    }

    function a() {
        if (!v) {
            var t = r(s);
            v = !0;
            for (var e = p.length; e;) {
                for (f = p, p = []; ++g < e;) f && f[g].run();
                g = -1, e = p.length
            }
            f = null, v = !1, o(t)
        }
    }

    function l(t, e) {
        this.fun = t, this.array = e
    }

    function c() {
    }

    var u, h, d = t.exports = {};
    !function () {
        try {
            u = "function" == typeof setTimeout ? setTimeout : n
        } catch (t) {
            u = n
        }
        try {
            h = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (t) {
            h = i
        }
    }();
    var f, p = [], v = !1, g = -1;
    d.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        p.push(new l(t, e)), 1 !== p.length || v || r(a)
    }, l.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = c, d.addListener = c, d.once = c, d.off = c, d.removeListener = c, d.removeAllListeners = c, d.emit = c, d.prependListener = c, d.prependOnceListener = c, d.listeners = function (t) {
        return []
    }, d.binding = function (t) {
        throw new Error("process.binding is not supported")
    }, d.cwd = function () {
        return "/"
    }, d.chdir = function (t) {
        throw new Error("process.chdir is not supported")
    }, d.umask = function () {
        return 0
    }
}, function (t, e, n) {
    "use strict";
    var i = n(152), r = n(156), o = n(159), s = n(161), a = n(163), l = n(171), c = n(191), u = n(193);
    e.a = {
        components: {
            AppHeader: i.a,
            Export: r.a,
            Help: s.a,
            Info: a.a,
            Scan: l.a,
            Thumbnails: c.a,
            Toc: u.a,
            Fulltext: o.a
        }, computed: {
            hasOtherContent: function () {
                return this.$root.canvases.some(function (t) {
                    return "otherContent" in t
                })
            }, hasToc: function () {
                return !(!this.$root.manifest.structures || !this.$root.manifest.structures.length)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(153), r = n(50), o = n.n(r), s = n(76), a = n.n(s);
    e.a = {
        components: {PageSelect: i.a}, mixins: [o.a, a.a], props: ["fulltextEnabled", "tocEnabled"], data: function () {
            return {controlsVisible: !1, fullscreenActive: !1, screen: this.$root.$el.parentNode, sections: []}
        }, computed: {
            fullscreenSupported: function () {
                return null === document.fullscreenElement || null === document.msFullscreenElement || null === document.webkitFullscreenElement
            }, isLastSection: function () {
                var t = this.$root.params.pages, e = t.length - 1;
                return (t[e] ? t[e] : t[e - 1]) >= this.sections[this.sections.length - 1].firstPage
            }, structures: function () {
                return this.$root.manifest.structures
            }, titles: function () {
                return this.$root.iiifConvertToArray(this.$root.manifest.label)
            }
        }, methods: {
            closeControlsPopup: function () {
                this.controlsVisible = !1
            }, detectFullscreen: function () {
                var t = void 0;
                switch (null) {
                    case document.msFullscreenElement:
                        t = document.msFullscreenElement;
                        break;
                    case document.webkitFullscreenElement:
                        t = document.webkitFullscreenElement;
                        break;
                    case document.fullscreenElement:
                        t = document.fullscreenElement;
                        break;
                    default:
                        t = !1
                }
                return t
            }, goToNextSection: function () {
                for (var t = this.$root.params.pages, e = t.length - 1, n = t[e] ? t[e] : t[e - 1], i = 0; n >= this.sections[i].firstPage || n && n >= this.sections[i].firstPage;) i += 1;
                this.$root.setPage(this.sections[i].firstPage)
            }, goToPreviousSection: function () {
                for (var t = this.$root.params.pages, e = t[0] ? t[0] : t[1], n = this.sections.length - 1; e <= this.sections[n].firstPage || e && e <= this.sections[n].firstPage;) n -= 1;
                this.$root.setPage(this.sections[n].firstPage)
            }, toggleControlsPopup: function () {
                this.controlsVisible = !this.controlsVisible
            }, toggleDoublePage: function () {
                var t = this.$root.params.pages, e = void 0;
                if (t.length > 1) e = [t[0] < 1 ? 1 : t[0]]; else if (t[0] < 2) e = [0, 1]; else if (t[0] % 2 > 0) e = [t[0] - 1, t[0]]; else {
                    var n = t[0] < this.$root.pageCount ? t[0] + 1 : 0;
                    e = [t[0], n]
                }
                this.$root.updateParams({pages: e})
            }, toggleFullscreen: function () {
                if (this.fullscreenActive) return void (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen());
                this.screen.requestFullscreen ? this.screen.requestFullscreen() : this.screen.mozRequestFullScreen ? this.screen.mozRequestFullScreen() : this.screen.webkitRequestFullscreen ? this.screen.webkitRequestFullscreen() : this.screen.msRequestFullscreen && this.screen.msRequestFullscreen()
            }, toggleFullscreenActive: function () {
                this.fullscreenActive = !this.fullscreenActive
            }, toggleView: function (t) {
                var e = t !== this.$root.params.view || this.$root.isMobile() ? t : "";
                this.$root.updateParams({view: e})
            }
        }, created: function () {
            var t = this;
            if (this.structures) {
                var e = [];
                this.structures.forEach(function (n) {
                    if (!n.canvases) return void e.push({firstPage: 1, lastPage: t.$root.pageCount});
                    var i = n.canvases[0], r = t.$root.canvases.findIndex(function (t) {
                        return t["@id"] === i
                    }) + 1, o = n.canvases[n.canvases.length - 1], s = t.$root.canvases.findIndex(function (t) {
                        return t["@id"] === o
                    }) + 1;
                    e.push({firstPage: r, lastPage: s})
                }), this.sections = e
            }
        }, mounted: function () {
            var t = this;
            window.addEventListener("keydown", function (e) {
                if (!t.preventKeyboardEvent(e)) {
                    if ("Escape" === e.key) return void (t.controlsVisible = !1);
                    switch (e.key) {
                        case"Backspace":
                            t.$refs.switchViewSmall.offsetParent && t.toggleView("scan");
                            break;
                        case"1":
                            t.fulltextEnabled && t.toggleView("fulltext");
                            break;
                        case"2":
                            t.toggleView("thumbnails");
                            break;
                        case"3":
                            t.tocEnabled && t.toggleView("toc");
                            break;
                        case"4":
                            t.toggleView("info");
                            break;
                        case"5":
                            t.toggleView("export");
                            break;
                        case"6":
                            t.toggleView("help");
                            break;
                        case"b":
                            t.toggleDoublePage();
                            break;
                        case"f":
                            t.toggleFullscreen()
                    }
                    if (!t.customPageViewActive) {
                        var n = t.$root.params.pages;
                        switch (e.key) {
                            case"q":
                            case",":
                                n[0] > 1 && t.goToPreviousPage();
                                break;
                            case"e":
                            case".":
                                t.isLastPage || t.goToNextPage();
                                break;
                            case"Q":
                                n[0] > 1 && t.goToFirstPage();
                                break;
                            case"E":
                                t.isLastPage || t.goToLastPage()
                        }
                    }
                }
            }), ["", "moz", "ms", "webkit"].forEach(function (e) {
                document.addEventListener(e + "fullscreenchange", t.toggleFullscreenActive)
            })
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(50), r = n.n(i);
    e.a = {
        mixins: [r.a], data: function () {
            return {filter: "", filteredCanvases: [], highlightIndex: 0, isOpen: !1}
        }, computed: {
            pageTitleAttr: function () {
                var t = this.$root.params.pages, e = 0 === t[0] && t.length > 1 ? 1 : t[0];
                return this.$options.filters.trans("Physical page") + ": " + e + "\n" + this.$options.filters.trans("Logical page") + ": " + this.$root.iiifConvertToArray(this.$root.canvases[e - 1].label)[0]
            }
        }, watch: {
            filter: function () {
                this.updateFilteredCanvases()
            }, highlightIndex: function () {
                var t = this;
                this.$nextTick(function () {
                    return t.updateScroll()
                })
            }, isOpen: function () {
                this.isOpen || (this.filter = "", this.highlightIndex = this.$root.params.pages[0] - 1)
            }
        }, methods: {
            setPage: function (t) {
                this.closeDropdown(), this.$root.setPage(t), this.$root.isMobile() && this.$root.updateParams({view: "scan"})
            }, toggleDropdown: function () {
                var t = this;
                this.isOpen = !this.isOpen, this.isOpen && this.$nextTick(function () {
                    t.$refs.search.focus(), t.updateScroll()
                })
            }, closeDropdown: function () {
                this.isOpen = !1
            }, updateFilteredCanvases: function () {
                var t = this, e = [], n = this.filter.toLowerCase(), i = -1;
                this.$root.canvases.forEach(function (r, o) {
                    var s = t.$root.iiifConvertToArray(r.label)[0], a = s.toLowerCase().indexOf(n) > -1,
                        l = (o + 1).toFixed().indexOf(n) > -1;
                    if (a || l) {
                        var c = r;
                        c.page = o + 1, c.page === t.$root.params.pages[0] && (i = e.length), e.push(c)
                    }
                }), this.highlightIndex = i < 0 ? 0 : i, this.filteredCanvases = e
            }, updateScroll: function () {
                var t = this.$refs.list;
                if (t.children[this.highlightIndex]) {
                    var e = t.children[this.highlightIndex].offsetTop;
                    t.scrollTop = e - (t.offsetHeight / 2 - t.children[0].offsetHeight)
                }
            }
        }, mounted: function () {
            var t = this;
            this.updateFilteredCanvases(), window.addEventListener("keydown", function (e) {
                if (!t.preventKeyboardEvent(e)) return "Escape" === e.key ? void t.closeDropdown() : void ("x" === e.key && (t.toggleDropdown(), e.preventDefault()))
            })
        }
    }
}, function (t, e) {
    t.exports = {
        computed: {
            customPageViewActive: function () {
                var t = this.$root.params.pages;
                return t.length > 2 || 2 === t.length && (t[0] % 2 > 0 || t[1] !== t[0] + 1) && t[1] > 0
            }, isFirstPage: function () {
                return this.$root.params.pages[0] < 2
            }, isLastPage: function () {
                var t = this.$root.params.pages, e = this.$root.pageCount;
                return t[0] >= e || t[t.length - 1] >= e
            }
        }, methods: {
            goToFirstPage: function () {
                this.$root.setPage(1)
            }, goToLastPage: function () {
                this.$root.setPage(this.$root.pageCount)
            }, goToNextPage: function () {
                var t = this.$root.params.pages, e = t[0] + 1;
                t.length > 1 && e % 2 > 0 && e < this.$root.pageCount && (e += 1), this.$root.setPage(e)
            }, goToPreviousPage: function () {
                var t = this.$root.params.pages, e = t[0] - 1;
                t.length > 1 && e % 2 > 0 && e > 0 && (e -= 1), this.$root.setPage(e)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(69), r = n.n(i), o = n(64), s = n.n(o), a = n(78), l = n(51), c = n.n(l),
        u = [{label: "BibTex", profile: "http://www.bibtex.org/Format/", type: "literature"}, {
            label: "EndNote",
            profile: "http://endnote.com/",
            type: "literature"
        }, {
            label: "RIS",
            profile: "http://referencemanager.com/sites/rm/files/m/direct_export_ris.pdf",
            type: "literature"
        }, {
            label: "METS",
            profile: "http://www.loc.gov/standards/mets/profile_docs/mets.profile.v2-0.xsd",
            type: "other"
        }, {label: "MODS", format: "application/mods+xml", type: "other"}];
    e.a = {
        components: {TocList: a.a}, mixins: [c.a], data: function () {
            return {literatureItems: [], otherItems: [], perElementPdfLinksVisible: !1}
        }, computed: {
            hasElementPdfLinks: function () {
                var t = this.$root.manifest;
                return !!(Array.isArray(t.structures) && t.structures[0] && t.structures[0].rendering) && this.$root.iiifConvertToArray(t.structures[0].rendering).some(function (t) {
                    return t.format && "application/pdf" === t.format
                })
            }, imageUrls: function () {
                var t = this, e = {};
                return this.$root.params.pages.forEach(function (n) {
                    if (n) {
                        var i = t.$root.canvases[n - 1].images[0].resource;
                        if (i.service) {
                            var r = "http://iiif.io/api/image/2/context.json" === i.service["@context"] ? "default" : "native",
                                o = i.service["@id"];
                            e[n] = o + ("/" === o.slice(-1) ? "" : "/") + "full/full/0/" + r + ".jpg"
                        } else e[n] = i["@id"]
                    }
                }), e
            }
        }, created: function () {
            var t = this, e = this.$root.manifest.seeAlso;
            if (e) {
                JSON.parse(s()(Array.isArray(e) ? e : [e])).forEach(function (e) {
                    var n = "object" === (void 0 === e ? "undefined" : r()(e)) ? e : {"@id": e}, i = !1;
                    u.some(function (t) {
                        var r = e.format && t.format === e.format, o = e.profile && t.profile === e.profile;
                        return !(!r && !o) && (n.label = t.label, "literature" === t.type && (i = !0), !0)
                    }), i ? t.literatureItems.push(n) : t.otherItems.push(n)
                })
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(79), r = n(157), o = n(3), s = o(i.a, r.a, !1, null, null, null);
    e.a = s.exports
}, function (t, e, n) {
    "use strict";
    e.a = {
        name: "toc-list", props: ["level", "structures", "parentStructure", "purpose"], data: function () {
            return {expandedStructures: []}
        }, methods: {
            checkIfPagesInStructure: function (t) {
                return this.$root.params.pages.some(function (e) {
                    return e >= t.firstPage && e <= t.lastPage
                })
            }, setPage: function (t) {
                this.$root.setPage(t), this.$root.isMobile() && this.$root.updateParams({view: "scan"})
            }, toggleAllChildren: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (this.$refs.children) {
                    for (var e = this.structures.length - 1; e >= 0; e -= 1) this.toggleChildren(e, t);
                    this.$refs.children.forEach(function (e) {
                        e.toggleAllChildren(t)
                    })
                }
            }, toggleChildren: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                this.structures[t].childStructures && ((null !== e ? e : !this.expandedStructures[t]) ? this.$set(this.expandedStructures, t, !0) : this.$set(this.expandedStructures, t, !1))
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    e.a = {
        data: function () {
            return {fulltextAvailable: !1, fulltexts: []}
        }, watch: {
            "$root.params.pages": function () {
                this.loadFulltexts()
            }
        }, methods: {
            loadFulltexts: function () {
                var t = this;
                this.fulltextAvailable = !1, this.fulltexts = [], this.$root.params.pages.forEach(function (e) {
                    if (!(e < 1 || t.fulltexts[e])) {
                        var n = t.$root.canvases[e - 1];
                        if ("otherContent" in n) {
                            t.$set(t.fulltexts, e, []);
                            var i = n.otherContent[0]["@id"];
                            t.$http.get(i).then(function (n) {
                                var i = n.data.resources;
                                Array.isArray(i) && i.forEach(function (n, i) {
                                    var r = n.resource;
                                    if (r && r.chars) {
                                        var o = t.$options.filters.filterHtml(r.chars);
                                        o && (t.fulltextAvailable = !0), t.$set(t.fulltexts[e], i, o)
                                    } else r["@id"] && t.loadRemoteFulltext(e, i, r["@id"])
                                })
                            }, function (e) {
                                var n = e.response ? e.response.statusText : e.message;
                                t.$root.error = "Error loading other content: " + n
                            })
                        }
                    }
                })
            }, loadRemoteFulltext: function (t, e, n) {
                var i = this;
                this.$http.get(n).then(function (n) {
                    var r = i.$options.filters.filterHtml(n.data);
                    r && (i.fulltextAvailable = !0), i.$set(i.fulltexts[t], e, r)
                }, function (t) {
                    var e = t.response ? t.response.statusText : t.message;
                    i.$root.error = "Error loading fulltext: " + e
                })
            }
        }, mounted: function () {
            this.loadFulltexts()
        }
    }
}, function (t, e, n) {
    "use strict";
    e.a = {
        computed: {
            info: function () {
                return JSON.parse(unescape("%7B%22VERSION%22%3A%220.23.1%22%2C%22AUTHOR%22%3A%7B%22name%22%3A%22Tobias%20Sch%E4fer%22%2C%22url%22%3A%22https%3A//aspectis.net/%22%7D%2C%22LICENSE%22%3A%22AGPL-3.0%22%2C%22REPOSITORY_URL%22%3A%22https%3A//github.com/tify-iiif-viewer/tify%22%2C%22BUGS_URL%22%3A%22https%3A//github.com/tify-iiif-viewer/tify/issues%22%2C%22DOCS_URL%22%3A%22https%3A//github.com/tify-iiif-viewer/tify/blob/v0.23.1/doc%22%7D"))
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(164), r = n(51), o = n.n(r);
    e.a = {
        components: {MetadataList: i.a}, mixins: [o.a], data: function () {
            return {collapsedStyle: ""}
        }, computed: {
            license: function () {
                return this.manifest.license ? this.$root.iiifConvertToArray(this.manifest.license) : []
            }, logoId: function () {
                return this.manifest.logo["@id"] ? this.manifest.logo["@id"] : this.manifest.logo
            }, manifest: function () {
                return this.$root.manifest
            }, related: function () {
                return this.manifest.related ? this.$root.iiifConvertToArray(this.manifest.related) : []
            }
        }, methods: {
            init: function () {
                this.isInited = !0
            }, isUrl: function (t) {
                return /^https?:\/\//.test(t)
            }
        }, watch: {
            "$root.params.view": function (t) {
                "info" === t && (this.isInited || this.init())
            }
        }, mounted: function () {
            "info" === this.$root.params.view && this.init()
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(165), r = n.n(i);
    e.a = {
        props: ["metadata"], data: function () {
            return {infoItems: null}
        }, watch: {
            metadata: function () {
                this.updateInfoItems()
            }
        }, filters: {
            cleanLabel: function (t) {
                var e = t.replace("_", " ");
                return e.charAt(0).toUpperCase() + e.substr(1)
            }
        }, mounted: function () {
            this.updateInfoItems()
        }, methods: {
            updateInfoItems: function () {
                var t = this;
                this.collapsedStyle = "max-height: 120px; overflow: hidden";
                for (var e = [], n = r()(this.metadata), i = n.length, o = 0; o < i; o += 1) {
                    var s = this.metadata[o], a = this.$root.iiifConvertToArray(s.value), l = a.reduce(function (e, n) {
                        var i = Math.ceil(t.stripHtml(n).length / 42);
                        return i < 1 && (i = 1), e + i
                    }, 0), c = l > 5, u = {isCollapsed: c, isInitiallyCollapsed: c};
                    e.push(u)
                }
                this.infoItems = e
            }, stripHtml: function (t) {
                return (new DOMParser).parseFromString(t, "text/html").body.textContent || ""
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(53), r = n.n(i), o = n(68), s = n.n(o), a = n(172), l = n.n(a), c = n(50), u = n.n(c), h = n(76),
        d = n.n(h);
    window.OpenSeadragon = l.a, n(173), n(174), n(175), n(176), n(177), n(178), n(179), n(180), n(181), n(182), n(183), n(184), n(185), n(186), n(187), n(188), n(189);
    var f = ["-webkit-", "-moz-", "-o-", "-ms-"];
    e.a = {
        mixins: [u.a, d.a], data: function () {
            return {filtersVisible: !1, loadingTimeout: null, tileSources: {}, viewer: null, zoomFactor: 1.5}
        }, computed: {
            cssFiltersSupported: function () {
                var t = document.createElement("a");
                return t.style.cssText = f.join("filter:blur(2px);"), !!t.style.length && (void 0 === document.documentMode || document.documentMode > 9)
            }, filtersActive: function () {
                return s()(this.$root.params.filters).length > 0
            }, isMinZoom: function () {
                return !this.viewer || this.viewer.viewport.getZoom() <= this.viewer.viewport.getMinZoom()
            }, isMaxZoom: function () {
                return !this.viewer || this.viewer.viewport.getZoom() >= this.viewer.viewport.getMaxZoom()
            }, isReset: function () {
                var t = this.viewer.viewport.getHomeBounds(), e = this.viewer.viewport.getBounds();
                return Math.abs(t.height - e.height) < 1e-9 && Math.abs(t.width - e.width) < 1e-9 && Math.abs(t.x - e.x) < 1e-9 && Math.abs(t.y - e.y) < 1e-9
            }, saturation: function () {
                var t = this.$parent.$parent.params.filters.saturate;
                return "number" == typeof t ? t : 1
            }
        }, watch: {
            "$root.params.pages": function (t, e) {
                var n = t.length !== e.length;
                this.loadImageInfo(n)
            }
        }, methods: {
            closeFilters: function () {
                this.filtersVisible = !1
            }, initViewer: function (t) {
                var e = this, n = this.$root.params, i = [], r = 0, o = void 0, s = 0;
                if (n.pages.forEach(function (t, n) {
                    var a = 1;
                    t < 1 ? (a = 0, o = n > 0 ? e.$root.pageCount : 1) : o = t;
                    var l = e.tileSources[o];
                    if (l) {
                        r || (r = l.width);
                        var c = l.width / r;
                        i.push({opacity: a, tileSource: l, width: c, x: s}), s += c + .01
                    }
                }), this.viewer) return this.viewer.addOnceHandler("open", function () {
                    if (e.isReset || t) e.resetView(); else {
                        e.viewer.viewport.applyConstraints(!0);
                        var i = e.viewer.viewport.getBounds();
                        if (i.x <= 0 && i.y <= 0) return;
                        var r = n.pages[0] ? 0 : 1;
                        e.viewer.viewport.panTo({
                            x: i.x > 0 ? i.width / 2 + r : n.panX,
                            y: i.y > 0 ? i.height / 2 : n.panY
                        })
                    }
                }), void this.viewer.open(i);
                this.viewer = l()({
                    animationTime: .4,
                    id: "tify-scan_image",
                    immediateRender: this.$root.options.immediateRender,
                    preload: !this.$root.isMobile(),
                    preserveImageSizeOnResize: !0,
                    preserveViewport: !0,
                    showNavigationControl: !1,
                    showZoomControl: !1,
                    tileSources: i,
                    visibilityRatio: .2
                }), this.viewer.gestureSettingsMouse.clickToZoom = !1, this.viewer.addHandler("animation-finish", function () {
                    if (e.isReset) return void e.removeScanParams();
                    var t = e.viewer.viewport.getCenter();
                    e.$root.updateParams({
                        panX: Math.round(1e3 * t.x) / 1e3,
                        panY: Math.round(1e3 * t.y) / 1e3,
                        zoom: Math.round(1e3 * e.viewer.viewport.getZoom()) / 1e3
                    })
                }), this.viewer.addHandler("canvas-click", function () {
                    document.body.click()
                }), this.viewer.addHandler("open", function () {
                    e.startLoadingWatch(), null !== n.panX && null !== n.panY ? (e.viewer.viewport.panTo({
                        x: n.panX,
                        y: n.panY
                    }, !0), e.viewer.viewport.zoomTo(n.zoom, null, !0)) : e.viewer.viewport.goHome(), null !== n.rotation && e.viewer.viewport.setRotation(n.rotation)
                }), this.viewer.addHandler("tile-load-failed", function (t) {
                    e.$root.error = "Error loading image: " + t.message
                })
            }, loadImageInfo: function () {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.stopLoadingWatch();
                var n = [];
                this.$root.params.pages.forEach(function (e) {
                    if (!(e < 1 || t.tileSources[e])) {
                        var i = t.$root.canvases[e - 1].images[0].resource;
                        if (i.service) {
                            var r = i.service["@id"], o = r + ("/" === r.slice(-1) ? "" : "/") + "info.json";
                            n.push(t.$http.get(o).then(function (t) {
                                return t.page = e, t
                            }, function (n) {
                                var i = void 0;
                                n.response && n.response.statusText ? i = n.response.statusText : n.message && (i = n.message), t.$root.error = "Error loading info file for page " + e + (i ? ": " + i : "")
                            }))
                        } else t.tileSources[e] = {type: "image", url: i["@id"], width: i.width, height: i.height}
                    }
                }), n.length ? r.a.all(n).then(function (n) {
                    n.forEach(function (e) {
                        e && (t.tileSources[e.page] = e.data)
                    }), t.initViewer(e)
                }) : this.initViewer(e)
            }, propagateKeyPress: function (t) {
                if (0 !== t.target.className.indexOf("openseadragon")) {
                    var e = this.$refs.image.querySelector(".openseadragon-canvas");
                    if (e) {
                        var n = new t.constructor(t.type, t);
                        Object.defineProperty(n, "keyCode", {
                            get: function () {
                                return t.keyCode
                            }
                        }), e.dispatchEvent(n)
                    }
                }
            }, resetFilters: function () {
                this.$refs.image.style.cssText = "", this.$root.updateParams({filters: {}})
            }, removeScanParams: function () {
                this.$root.updateParams({panX: null, panY: null, zoom: null})
            }, resetView: function (t) {
                t && t.shiftKey && (this.viewer.viewport.setRotation(0), this.$root.updateParams({rotation: null}), this.filtersActive && this.resetFilters()), this.viewer.viewport.goHome(), this.removeScanParams()
            }, rotateRight: function (t) {
                var e = this.viewer.viewport, n = t && t.shiftKey ? 0 : (e.getRotation() + 90) % 360;
                e.setRotation(n), this.$root.updateParams({rotation: n || null})
            }, setFilter: function (t, e) {
                var n = e.target.valueAsNumber;
                1 === n ? this.$delete(this.$root.params.filters, t) : this.$set(this.$root.params.filters, t, n), this.$root.updateParams({filters: this.$root.params.filters}), this.updateFilterStyle()
            }, startLoadingWatch: function () {
                for (var t = 0, e = this.viewer.world.getItemCount() - 1; e >= 0; e -= 1) {
                    var n = this.viewer.world.getItemAt(e);
                    n && n._tilesLoading && (t = 1)
                }
                this.$root.loading = t, this.loadingTimeout = setTimeout(this.startLoadingWatch, 200)
            }, stopLoadingWatch: function () {
                clearTimeout(this.loadingTimeout)
            }, updateFilterStyle: function () {
                var t = this;
                if (this.filtersActive && this.cssFiltersSupported) {
                    var e = [];
                    s()(this.$root.params.filters).forEach(function (n) {
                        e.push(n + "(" + t.$root.params.filters[n] + ")")
                    });
                    var n = this.$refs.image, i = e.join(" ");
                    n.style.cssText = f.join("filter:" + i + ";")
                }
            }, zoomIn: function () {
                this.viewer.viewport.zoomBy(this.zoomFactor)
            }, zoomOut: function () {
                this.viewer.viewport.zoomBy(1 / this.zoomFactor)
            }
        }, mounted: function () {
            var t = this;
            this.loadImageInfo(), this.updateFilterStyle(), window.addEventListener("keydown", function (e) {
                "Escape" === e.key && (t.filtersVisible = !1);
                var n = [45, 48, 96];
                e.shiftKey && n.indexOf(e.keyCode) > -1 && t.resetView(e)
            }), window.addEventListener("keypress", function (e) {
                if (!t.preventKeyboardEvent(e)) switch (e.key) {
                    case"r":
                    case"R":
                        t.rotateRight(e);
                        break;
                    case"i":
                        t.filtersVisible = !t.filtersVisible, t.filtersVisible && t.$nextTick(function () {
                            t.$refs.firstSlider.focus()
                        });
                        break;
                    case"I":
                        t.resetFilters();
                        break;
                    default:
                        t.propagateKeyPress(e)
                }
            })
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(86), r = n.n(i);
    e.a = {
        mixins: [r.a], data: function () {
            return {
                itemHeight: 0,
                itemVMargin: 0,
                items: [{label: ""}],
                itemsPerRow: 0,
                knownImages: [],
                lastScrollTop: 0,
                style: {},
                thumbnailWidth: 0,
                touchTimer: null
            }
        }, watch: {
            "$root.params.pages": function (t) {
                var e = this;
                this.$nextTick(function () {
                    t.length > 2 || t.length > 1 && t[1] !== t[0] + 1 || (e.$refs.container.querySelector(".tify-thumbnails_item.-current") ? e.updateScrollPos(".tify-thumbnails_item.-current") : e.scrollToCurrentPage())
                })
            }, "$root.params.view": function (t) {
                "thumbnails" === t && this.updateDimensions()
            }
        }, methods: {
            updateDimensions: function () {
                var t = this.$refs.container.querySelector(".tify-thumbnails_item"),
                    e = t.currentStyle || window.getComputedStyle(t),
                    n = parseInt(e.marginTop, 10) + parseFloat(e.marginBottom, 10);
                this.itemHeight = t.offsetHeight + n, this.itemVMargin = n;
                var i = parseInt(e.marginLeft, 10) + parseFloat(e.marginRight, 10), r = t.offsetWidth + i;
                this.thumbnailWidth = t.offsetWidth, this.itemsPerRow = Math.floor(this.$refs.container.clientWidth / r);
                var o = Math.ceil(this.$root.canvases.length / this.itemsPerRow), s = o * this.itemHeight;
                this.$refs.container.style.height = s + "px", this.redrawThumbnails(), this.scrollToCurrentPage(!1)
            }, init: function () {
                var t = this;
                this.updateDimensions(), this.scrollToCurrentPage(!1);
                var e = void 0;
                window.addEventListener("resize", function () {
                    clearTimeout(e), e = setTimeout(function () {
                        "thumbnails" === t.$root.params.view && t.updateDimensions()
                    }, 200)
                })
            }, redrawThumbnails: function () {
                for (var t = this, e = this.$el.scrollTop, n = Math.floor(e / this.itemHeight) * this.itemsPerRow + 1, i = Math.ceil(this.$el.offsetHeight / this.itemHeight), r = i * this.itemsPerRow, o = n + this.itemsPerRow + r, s = Math.min(this.$root.canvases.length, o), a = [], l = n - 1; l < s; l += 1) {
                    var c = this.$root.canvases[l].images[0].resource;
                    if (c.service) {
                        var u = "http://iiif.io/api/image/2/context.json" === c.service["@context"] ? "default" : "native",
                            h = c.service["@id"];
                        a.push({
                            label: this.$root.iiifConvertToArray(this.$root.canvases[l].label)[0],
                            imgUrl: h + ("/" === h.slice(-1) ? "" : "/") + "full/" + this.thumbnailWidth + ",/0/" + u + ".jpg",
                            page: l + 1
                        })
                    } else a.push({
                        label: this.$root.iiifConvertToArray(this.$root.canvases[l].label)[0],
                        imgUrl: c["@id"],
                        page: l + 1
                    })
                }
                this.items = a, this.$nextTick(function () {
                    var e = Math.floor(n / t.itemsPerRow);
                    t.$refs.container.style.paddingTop = e * t.itemHeight + "px"
                })
            }, scrollToCurrentPage: function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    e = Math.floor((this.$root.params.pages[0] - 1) / this.itemsPerRow),
                    n = e * this.itemHeight + (this.itemVMargin - 50);
                t ? this.scrollTo(this.$el, n) : this.$el.scrollTop = n
            }, setPageAndSwitchView: function (t) {
                if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) {
                    var e = this.$root.params.pages.slice(0), n = e.indexOf(t);
                    return n < 0 ? (e.push(t), e.sort(function (t, e) {
                        return t - e
                    }), 0 === e[0] && e.shift()) : e.length > 1 && e.splice(n, 1), void this.$root.updateParams({pages: e})
                }
                this.$root.setPage(t), this.$root.isMobile() && this.$root.updateParams({view: "scan"})
            }, touchStartTogglePage: function (t) {
                var e = this;
                this.lastScrollTop = this.$el.scrollTop, this.touchTimer = setTimeout(function () {
                    e.$el.scrollTop === e.lastScrollTop && e.setPageAndSwitchView(t, !0)
                }, 750)
            }, touchEnd: function () {
                clearTimeout(this.touchTimer)
            }
        }, mounted: function () {
            this.style.flex = this.$el.style.flex, "thumbnails" === this.$root.params.view && this.init()
        }
    }
}, function (t, e) {
    t.exports = {
        methods: {
            updateScrollPos: function (t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = this.$el.querySelectorAll(t);
                if (n.length) {
                    var i = n[0], r = n[n.length - 1];
                    Array.prototype.forEach.call(n, function (t) {
                        t.dataset.level > i.dataset.level && (i = t)
                    });
                    var o = this.$el.getBoundingClientRect(), s = i.getBoundingClientRect(),
                        a = r.getBoundingClientRect();
                    if (s.top < o.top) {
                        var l = s.top - o.top + this.$el.scrollTop;
                        this.scrollTo(this.$el, l - 50, e)
                    } else if (a.bottom > o.bottom) {
                        var c = a.bottom - o.bottom + this.$el.scrollTop;
                        this.scrollTo(this.$el, c + 50, e)
                    }
                }
            }, scrollTo: function (t, e) {
                var n = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 120, r = t,
                    o = !0 === i ? 120 : i;
                if (!o || o < 0) return void (r.scrollTop = e);
                var s = e - t.scrollTop, a = s / o / .1;
                setTimeout(function () {
                    r.scrollTop += a, r.scrollTop !== e && n.scrollTo(r, e, o - 10)
                }, 10)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(78), r = n(86), o = n.n(r), s = n(51), a = n.n(s);
    e.a = {
        mixins: [o.a, a.a], components: {TocList: i.a}, data: function () {
            return {isInited: !1}
        }, computed: {
            hasChildStructures: function () {
                return this.structures.some(function (t) {
                    return t.childStructures
                })
            }
        }, methods: {
            init: function () {
                var t = this;
                this.isInited = !0, this.$nextTick(function () {
                    return t.updateScrollPos(".tify-toc_structure.-current", !1)
                })
            }
        }, watch: {
            "$root.params.pages": function () {
                var t = this;
                this.$nextTick(function () {
                    return t.updateScrollPos(".tify-toc_structure.-current")
                })
            }, "$root.params.view": function (t) {
                "toc" === t && this.init()
            }
        }, mounted: function () {
            "toc" === this.$root.params.view && this.init()
        }
    }
}, function (t, e, n) {
    "use strict";
    e.a = {props: ["name"]}
}, function (t, e, n) {
    "use strict";
    t.exports = function (t, e) {
        return function () {
            for (var n = new Array(arguments.length), i = 0; i < n.length; i++) n[i] = arguments[i];
            return t.apply(e, n)
        }
    }
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    var r = n(4);
    t.exports = function (t, e, n) {
        if (!e) return t;
        var o;
        if (n) o = n(e); else if (r.isURLSearchParams(e)) o = e.toString(); else {
            var s = [];
            r.forEach(e, function (t, e) {
                null !== t && void 0 !== t && (r.isArray(t) ? e += "[]" : t = [t], r.forEach(t, function (t) {
                    r.isDate(t) ? t = t.toISOString() : r.isObject(t) && (t = JSON.stringify(t)), s.push(i(e) + "=" + i(t))
                }))
            }), o = s.join("&")
        }
        if (o) {
            var a = t.indexOf("#");
            -1 !== a && (t = t.slice(0, a)), t += (-1 === t.indexOf("?") ? "?" : "&") + o
        }
        return t
    }
}, function (t, e, n) {
    "use strict";
    t.exports = function (t) {
        return !(!t || !t.__CANCEL__)
    }
}, function (t, e, n) {
    "use strict";
    (function (e) {
        function i(t, e) {
            !r.isUndefined(t) && r.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
        }

        var r = n(4), o = n(212), s = {"Content-Type": "application/x-www-form-urlencoded"}, a = {
            adapter: function () {
                var t;
                return void 0 !== e && "[object process]" === Object.prototype.toString.call(e) ? t = n(93) : "undefined" != typeof XMLHttpRequest && (t = n(93)), t
            }(),
            transformRequest: [function (t, e) {
                return o(e, "Accept"), o(e, "Content-Type"), r.isFormData(t) || r.isArrayBuffer(t) || r.isBuffer(t) || r.isStream(t) || r.isFile(t) || r.isBlob(t) ? t : r.isArrayBufferView(t) ? t.buffer : r.isURLSearchParams(t) ? (i(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : r.isObject(t) ? (i(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t
            }],
            transformResponse: [function (t) {
                if ("string" == typeof t) try {
                    t = JSON.parse(t)
                } catch (t) {
                }
                return t
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function (t) {
                return t >= 200 && t < 300
            }
        };
        a.headers = {common: {Accept: "application/json, text/plain, */*"}}, r.forEach(["delete", "get", "head"], function (t) {
            a.headers[t] = {}
        }), r.forEach(["post", "put", "patch"], function (t) {
            a.headers[t] = r.merge(s)
        }), t.exports = a
    }).call(e, n(72))
}, function (t, e, n) {
    "use strict";
    var i = n(4), r = n(213), o = n(90), s = n(215), a = n(216), l = n(94);
    t.exports = function (t) {
        return new Promise(function (e, c) {
            var u = t.data, h = t.headers;
            i.isFormData(u) && delete h["Content-Type"];
            var d = new XMLHttpRequest;
            if (t.auth) {
                var f = t.auth.username || "", p = t.auth.password || "";
                h.Authorization = "Basic " + btoa(f + ":" + p)
            }
            if (d.open(t.method.toUpperCase(), o(t.url, t.params, t.paramsSerializer), !0), d.timeout = t.timeout, d.onreadystatechange = function () {
                if (d && 4 === d.readyState && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
                    var n = "getAllResponseHeaders" in d ? s(d.getAllResponseHeaders()) : null,
                        i = t.responseType && "text" !== t.responseType ? d.response : d.responseText,
                        o = {data: i, status: d.status, statusText: d.statusText, headers: n, config: t, request: d};
                    r(e, c, o), d = null
                }
            }, d.onabort = function () {
                d && (c(l("Request aborted", t, "ECONNABORTED", d)), d = null)
            }, d.onerror = function () {
                c(l("Network Error", t, null, d)), d = null
            }, d.ontimeout = function () {
                c(l("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED", d)), d = null
            }, i.isStandardBrowserEnv()) {
                var v = n(217),
                    g = (t.withCredentials || a(t.url)) && t.xsrfCookieName ? v.read(t.xsrfCookieName) : void 0;
                g && (h[t.xsrfHeaderName] = g)
            }
            if ("setRequestHeader" in d && i.forEach(h, function (t, e) {
                void 0 === u && "content-type" === e.toLowerCase() ? delete h[e] : d.setRequestHeader(e, t)
            }), t.withCredentials && (d.withCredentials = !0), t.responseType) try {
                d.responseType = t.responseType
            } catch (e) {
                if ("json" !== t.responseType) throw e
            }
            "function" == typeof t.onDownloadProgress && d.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && d.upload && d.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then(function (t) {
                d && (d.abort(), c(t), d = null)
            }), void 0 === u && (u = null), d.send(u)
        })
    }
}, function (t, e, n) {
    "use strict";
    var i = n(214);
    t.exports = function (t, e, n, r, o) {
        var s = new Error(t);
        return i(s, e, n, r, o)
    }
}, function (t, e, n) {
    "use strict";
    var i = n(4);
    t.exports = function (t, e) {
        e = e || {};
        var n = {};
        return i.forEach(["url", "method", "params", "data"], function (t) {
            void 0 !== e[t] && (n[t] = e[t])
        }), i.forEach(["headers", "auth", "proxy"], function (r) {
            i.isObject(e[r]) ? n[r] = i.deepMerge(t[r], e[r]) : void 0 !== e[r] ? n[r] = e[r] : i.isObject(t[r]) ? n[r] = i.deepMerge(t[r]) : void 0 !== t[r] && (n[r] = t[r])
        }), i.forEach(["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"], function (i) {
            void 0 !== e[i] ? n[i] = e[i] : void 0 !== t[i] && (n[i] = t[i])
        }), n
    }
}, function (t, e, n) {
    "use strict";

    function i(t) {
        this.message = t
    }

    i.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, i.prototype.__CANCEL__ = !0, t.exports = i
}, function (t, e, n) {
    n(27), n(28), n(40), n(106), n(114), n(115), t.exports = n(1).Promise
}, function (t, e, n) {
    var i = n(29), r = n(30);
    t.exports = function (t) {
        return function (e, n) {
            var o, s, a = String(r(e)), l = i(n), c = a.length;
            return l < 0 || l >= c ? t ? "" : void 0 : (o = a.charCodeAt(l), o < 55296 || o > 56319 || l + 1 === c || (s = a.charCodeAt(l + 1)) < 56320 || s > 57343 ? t ? a.charAt(l) : o : t ? a.slice(l, l + 2) : s - 56320 + (o - 55296 << 10) + 65536)
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(34), r = n(24), o = n(20), s = {};
    n(9)(s, n(2)("iterator"), function () {
        return this
    }), t.exports = function (t, e, n) {
        t.prototype = i(s, {next: r(1, n)}), o(t, e + " Iterator")
    }
}, function (t, e, n) {
    var i = n(8), r = n(10), o = n(15);
    t.exports = n(6) ? Object.defineProperties : function (t, e) {
        r(t);
        for (var n, s = o(e), a = s.length, l = 0; a > l;) i.f(t, n = s[l++], e[n]);
        return t
    }
}, function (t, e, n) {
    var i = n(14), r = n(36), o = n(102);
    t.exports = function (t) {
        return function (e, n, s) {
            var a, l = i(e), c = r(l.length), u = o(s, c);
            if (t && n != n) {
                for (; c > u;) if ((a = l[u++]) != a) return !0
            } else for (; c > u; u++) if ((t || u in l) && l[u] === n) return t || u || 0;
            return !t && -1
        }
    }
}, function (t, e, n) {
    var i = n(29), r = Math.max, o = Math.min;
    t.exports = function (t, e) {
        return t = i(t), t < 0 ? r(t + e, 0) : o(t, e)
    }
}, function (t, e, n) {
    var i = n(13), r = n(21), o = n(37)("IE_PROTO"), s = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
        return t = r(t), i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
    }
}, function (t, e, n) {
    "use strict";
    var i = n(105), r = n(58), o = n(18), s = n(14);
    t.exports = n(31)(Array, "Array", function (t, e) {
        this._t = s(t), this._i = 0, this._k = e
    }, function () {
        var t = this._t, e = this._k, n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, r(1)) : "keys" == e ? r(0, n) : "values" == e ? r(0, t[n]) : r(0, [n, t[n]])
    }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
}, function (t, e) {
    t.exports = function () {
    }
}, function (t, e, n) {
    "use strict";
    var i, r, o, s, a = n(16), l = n(0), c = n(11), u = n(41), h = n(5), d = n(7), f = n(17), p = n(42), v = n(22),
        g = n(59), m = n(60).set, y = n(111)(), w = n(43), _ = n(61), x = n(112), T = n(62), b = l.TypeError,
        S = l.process, P = S && S.versions, C = P && P.v8 || "", E = l.Promise, R = "process" == u(S), k = function () {
        }, O = r = w.f, I = !!function () {
            try {
                var t = E.resolve(1), e = (t.constructor = {})[n(2)("species")] = function (t) {
                    t(k, k)
                };
                return (R || "function" == typeof PromiseRejectionEvent) && t.then(k) instanceof e && 0 !== C.indexOf("6.6") && -1 === x.indexOf("Chrome/66")
            } catch (t) {
            }
        }(), A = function (t) {
            var e;
            return !(!d(t) || "function" != typeof (e = t.then)) && e
        }, $ = function (t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                y(function () {
                    for (var i = t._v, r = 1 == t._s, o = 0; n.length > o;) !function (e) {
                        var n, o, s, a = r ? e.ok : e.fail, l = e.resolve, c = e.reject, u = e.domain;
                        try {
                            a ? (r || (2 == t._h && F(t), t._h = 1), !0 === a ? n = i : (u && u.enter(), n = a(i), u && (u.exit(), s = !0)), n === e.promise ? c(b("Promise-chain cycle")) : (o = A(n)) ? o.call(n, l, c) : l(n)) : c(i)
                        } catch (t) {
                            u && !s && u.exit(), c(t)
                        }
                    }(n[o++]);
                    t._c = [], t._n = !1, e && !t._h && D(t)
                })
            }
        }, D = function (t) {
            m.call(l, function () {
                var e, n, i, r = t._v, o = M(t);
                if (o && (e = _(function () {
                    R ? S.emit("unhandledRejection", r, t) : (n = l.onunhandledrejection) ? n({
                        promise: t,
                        reason: r
                    }) : (i = l.console) && i.error && i.error("Unhandled promise rejection", r)
                }), t._h = R || M(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v
            })
        }, M = function (t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        }, F = function (t) {
            m.call(l, function () {
                var e;
                R ? S.emit("rejectionHandled", t) : (e = l.onrejectionhandled) && e({promise: t, reason: t._v})
            })
        }, L = function (t) {
            var e = this;
            e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), $(e, !0))
        }, B = function (t) {
            var e, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === t) throw b("Promise can't be resolved itself");
                    (e = A(t)) ? y(function () {
                        var i = {_w: n, _d: !1};
                        try {
                            e.call(t, c(B, i, 1), c(L, i, 1))
                        } catch (t) {
                            L.call(i, t)
                        }
                    }) : (n._v = t, n._s = 1, $(n, !1))
                } catch (t) {
                    L.call({_w: n, _d: !1}, t)
                }
            }
        };
    I || (E = function (t) {
        p(this, E, "Promise", "_h"), f(t), i.call(this);
        try {
            t(c(B, this, 1), c(L, this, 1))
        } catch (t) {
            L.call(this, t)
        }
    }, i = function (t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }, i.prototype = n(44)(E.prototype, {
        then: function (t, e) {
            var n = O(g(this, E));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = R ? S.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && $(this, !1), n.promise
        }, catch: function (t) {
            return this.then(void 0, t)
        }
    }), o = function () {
        var t = new i;
        this.promise = t, this.resolve = c(B, t, 1), this.reject = c(L, t, 1)
    }, w.f = O = function (t) {
        return t === E || t === s ? new o(t) : r(t)
    }), h(h.G + h.W + h.F * !I, {Promise: E}), n(20)(E, "Promise"), n(63)("Promise"), s = n(1).Promise, h(h.S + h.F * !I, "Promise", {
        reject: function (t) {
            var e = O(this);
            return (0, e.reject)(t), e.promise
        }
    }), h(h.S + h.F * (a || !I), "Promise", {
        resolve: function (t) {
            return T(a && this === s ? E : this, t)
        }
    }), h(h.S + h.F * !(I && n(113)(function (t) {
        E.all(t).catch(k)
    })), "Promise", {
        all: function (t) {
            var e = this, n = O(e), i = n.resolve, r = n.reject, o = _(function () {
                var n = [], o = 0, s = 1;
                v(t, !1, function (t) {
                    var a = o++, l = !1;
                    n.push(void 0), s++, e.resolve(t).then(function (t) {
                        l || (l = !0, n[a] = t, --s || i(n))
                    }, r)
                }), --s || i(n)
            });
            return o.e && r(o.v), n.promise
        }, race: function (t) {
            var e = this, n = O(e), i = n.reject, r = _(function () {
                v(t, !1, function (t) {
                    e.resolve(t).then(n.resolve, i)
                })
            });
            return r.e && i(r.v), n.promise
        }
    })
}, function (t, e, n) {
    var i = n(10);
    t.exports = function (t, e, n, r) {
        try {
            return r ? e(i(n)[0], n[1]) : e(n)
        } catch (e) {
            var o = t.return;
            throw void 0 !== o && i(o.call(t)), e
        }
    }
}, function (t, e, n) {
    var i = n(18), r = n(2)("iterator"), o = Array.prototype;
    t.exports = function (t) {
        return void 0 !== t && (i.Array === t || o[r] === t)
    }
}, function (t, e, n) {
    var i = n(41), r = n(2)("iterator"), o = n(18);
    t.exports = n(1).getIteratorMethod = function (t) {
        if (void 0 != t) return t[r] || t["@@iterator"] || o[i(t)]
    }
}, function (t, e) {
    t.exports = function (t, e, n) {
        var i = void 0 === n;
        switch (e.length) {
            case 0:
                return i ? t() : t.call(n);
            case 1:
                return i ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return i ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return i ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return i ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}, function (t, e, n) {
    var i = n(0), r = n(60).set, o = i.MutationObserver || i.WebKitMutationObserver, s = i.process, a = i.Promise,
        l = "process" == n(19)(s);
    t.exports = function () {
        var t, e, n, c = function () {
            var i, r;
            for (l && (i = s.domain) && i.exit(); t;) {
                r = t.fn, t = t.next;
                try {
                    r()
                } catch (i) {
                    throw t ? n() : e = void 0, i
                }
            }
            e = void 0, i && i.enter()
        };
        if (l) n = function () {
            s.nextTick(c)
        }; else if (!o || i.navigator && i.navigator.standalone) if (a && a.resolve) {
            var u = a.resolve(void 0);
            n = function () {
                u.then(c)
            }
        } else n = function () {
            r.call(i, c)
        }; else {
            var h = !0, d = document.createTextNode("");
            new o(c).observe(d, {characterData: !0}), n = function () {
                d.data = h = !h
            }
        }
        return function (i) {
            var r = {fn: i, next: void 0};
            e && (e.next = r), t || (t = r, n()), e = r
        }
    }
}, function (t, e, n) {
    var i = n(0), r = i.navigator;
    t.exports = r && r.userAgent || ""
}, function (t, e, n) {
    var i = n(2)("iterator"), r = !1;
    try {
        var o = [7][i]();
        o.return = function () {
            r = !0
        }, Array.from(o, function () {
            throw 2
        })
    } catch (t) {
    }
    t.exports = function (t, e) {
        if (!e && !r) return !1;
        var n = !1;
        try {
            var o = [7], s = o[i]();
            s.next = function () {
                return {done: n = !0}
            }, o[i] = function () {
                return s
            }, t(o)
        } catch (t) {
        }
        return n
    }
}, function (t, e, n) {
    "use strict";
    var i = n(5), r = n(1), o = n(0), s = n(59), a = n(62);
    i(i.P + i.R, "Promise", {
        finally: function (t) {
            var e = s(this, r.Promise || o.Promise), n = "function" == typeof t;
            return this.then(n ? function (n) {
                return a(e, t()).then(function () {
                    return n
                })
            } : t, n ? function (n) {
                return a(e, t()).then(function () {
                    throw n
                })
            } : t)
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(5), r = n(43), o = n(61);
    i(i.S, "Promise", {
        try: function (t) {
            var e = r.f(this), n = o(t);
            return (n.e ? e.reject : e.resolve)(n.v), e.promise
        }
    })
}, function (t, e, n) {
    var i = n(1), r = i.JSON || (i.JSON = {stringify: JSON.stringify});
    t.exports = function (t) {
        return r.stringify.apply(r, arguments)
    }
}, function (t, e, n) {
    n(118), t.exports = n(1).Object.assign
}, function (t, e, n) {
    var i = n(5);
    i(i.S + i.F, "Object", {assign: n(119)})
}, function (t, e, n) {
    "use strict";
    var i = n(6), r = n(15), o = n(45), s = n(23), a = n(21), l = n(35), c = Object.assign;
    t.exports = !c || n(12)(function () {
        var t = {}, e = {}, n = Symbol(), i = "abcdefghijklmnopqrst";
        return t[n] = 7, i.split("").forEach(function (t) {
            e[t] = t
        }), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != i
    }) ? function (t, e) {
        for (var n = a(t), c = arguments.length, u = 1, h = o.f, d = s.f; c > u;) for (var f, p = l(arguments[u++]), v = h ? r(p).concat(h(p)) : r(p), g = v.length, m = 0; g > m;) f = v[m++], i && !d.call(p, f) || (n[f] = p[f]);
        return n
    } : c
}, function (t, e, n) {
    t.exports = {default: n(121), __esModule: !0}
}, function (t, e, n) {
    n(27), n(28), n(40), n(122), n(128), n(131), n(133), t.exports = n(1).Set
}, function (t, e, n) {
    "use strict";
    var i = n(123), r = n(66);
    t.exports = n(124)("Set", function (t) {
        return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function (t) {
            return i.def(r(this, "Set"), t = 0 === t ? 0 : t, t)
        }
    }, i)
}, function (t, e, n) {
    "use strict";
    var i = n(8).f, r = n(34), o = n(44), s = n(11), a = n(42), l = n(22), c = n(31), u = n(58), h = n(63), d = n(6),
        f = n(46).fastKey, p = n(66), v = d ? "_s" : "size", g = function (t, e) {
            var n, i = f(e);
            if ("F" !== i) return t._i[i];
            for (n = t._f; n; n = n.n) if (n.k == e) return n
        };
    t.exports = {
        getConstructor: function (t, e, n, c) {
            var u = t(function (t, i) {
                a(t, u, e, "_i"), t._t = e, t._i = r(null), t._f = void 0, t._l = void 0, t[v] = 0, void 0 != i && l(i, n, t[c], t)
            });
            return o(u.prototype, {
                clear: function () {
                    for (var t = p(this, e), n = t._i, i = t._f; i; i = i.n) i.r = !0, i.p && (i.p = i.p.n = void 0), delete n[i.i];
                    t._f = t._l = void 0, t[v] = 0
                }, delete: function (t) {
                    var n = p(this, e), i = g(n, t);
                    if (i) {
                        var r = i.n, o = i.p;
                        delete n._i[i.i], i.r = !0, o && (o.n = r), r && (r.p = o), n._f == i && (n._f = r), n._l == i && (n._l = o), n[v]--
                    }
                    return !!i
                }, forEach: function (t) {
                    p(this, e);
                    for (var n, i = s(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;) for (i(n.v, n.k, this); n && n.r;) n = n.p
                }, has: function (t) {
                    return !!g(p(this, e), t)
                }
            }), d && i(u.prototype, "size", {
                get: function () {
                    return p(this, e)[v]
                }
            }), u
        }, def: function (t, e, n) {
            var i, r, o = g(t, e);
            return o ? o.v = n : (t._l = o = {
                i: r = f(e, !0),
                k: e,
                v: n,
                p: i = t._l,
                n: void 0,
                r: !1
            }, t._f || (t._f = o), i && (i.n = o), t[v]++, "F" !== r && (t._i[r] = o)), t
        }, getEntry: g, setStrong: function (t, e, n) {
            c(t, e, function (t, n) {
                this._t = p(t, e), this._k = n, this._l = void 0
            }, function () {
                for (var t = this, e = t._k, n = t._l; n && n.r;) n = n.p;
                return t._t && (t._l = n = n ? n.n : t._t._f) ? "keys" == e ? u(0, n.k) : "values" == e ? u(0, n.v) : u(0, [n.k, n.v]) : (t._t = void 0, u(1))
            }, n ? "entries" : "values", !n, !0), h(e)
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(5), o = n(46), s = n(12), a = n(9), l = n(44), c = n(22), u = n(42), h = n(7), d = n(20),
        f = n(8).f, p = n(125)(0), v = n(6);
    t.exports = function (t, e, n, g, m, y) {
        var w = i[t], _ = w, x = m ? "set" : "add", T = _ && _.prototype, b = {};
        return v && "function" == typeof _ && (y || T.forEach && !s(function () {
            (new _).entries().next()
        })) ? (_ = e(function (e, n) {
            u(e, _, t, "_c"), e._c = new w, void 0 != n && c(n, m, e[x], e)
        }), p("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function (t) {
            var e = "add" == t || "set" == t;
            t in T && (!y || "clear" != t) && a(_.prototype, t, function (n, i) {
                if (u(this, _, t), !e && y && !h(n)) return "get" == t && void 0;
                var r = this._c[t](0 === n ? 0 : n, i);
                return e ? this : r
            })
        }), y || f(_.prototype, "size", {
            get: function () {
                return this._c.size
            }
        })) : (_ = g.getConstructor(e, t, m, x), l(_.prototype, n), o.NEED = !0), d(_, t), b[t] = _, r(r.G + r.W + r.F, b), y || g.setStrong(_, t, m), _
    }
}, function (t, e, n) {
    var i = n(11), r = n(35), o = n(21), s = n(36), a = n(126);
    t.exports = function (t, e) {
        var n = 1 == t, l = 2 == t, c = 3 == t, u = 4 == t, h = 6 == t, d = 5 == t || h, f = e || a;
        return function (e, a, p) {
            for (var v, g, m = o(e), y = r(m), w = i(a, p, 3), _ = s(y.length), x = 0, T = n ? f(e, _) : l ? f(e, 0) : void 0; _ > x; x++) if ((d || x in y) && (v = y[x], g = w(v, x, m), t)) if (n) T[x] = g; else if (g) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return v;
                case 6:
                    return x;
                case 2:
                    T.push(v)
            } else if (u) return !1;
            return h ? -1 : c || u ? u : T
        }
    }
}, function (t, e, n) {
    var i = n(127);
    t.exports = function (t, e) {
        return new (i(t))(e)
    }
}, function (t, e, n) {
    var i = n(7), r = n(67), o = n(2)("species");
    t.exports = function (t) {
        var e;
        return r(t) && (e = t.constructor, "function" != typeof e || e !== Array && !r(e.prototype) || (e = void 0), i(e) && null === (e = e[o]) && (e = void 0)), void 0 === e ? Array : e
    }
}, function (t, e, n) {
    var i = n(5);
    i(i.P + i.R, "Set", {toJSON: n(129)("Set")})
}, function (t, e, n) {
    var i = n(41), r = n(130);
    t.exports = function (t) {
        return function () {
            if (i(this) != t) throw TypeError(t + "#toJSON isn't generic");
            return r(this)
        }
    }
}, function (t, e, n) {
    var i = n(22);
    t.exports = function (t, e) {
        var n = [];
        return i(t, !1, n.push, n, e), n
    }
}, function (t, e, n) {
    n(132)("Set")
}, function (t, e, n) {
    "use strict";
    var i = n(5);
    t.exports = function (t) {
        i(i.S, t, {
            of: function () {
                for (var t = arguments.length, e = new Array(t); t--;) e[t] = arguments[t];
                return new this(e)
            }
        })
    }
}, function (t, e, n) {
    n(134)("Set")
}, function (t, e, n) {
    "use strict";
    var i = n(5), r = n(17), o = n(11), s = n(22);
    t.exports = function (t) {
        i(i.S, t, {
            from: function (t) {
                var e, n, i, a, l = arguments[1];
                return r(this), e = void 0 !== l, e && r(l), void 0 == t ? new this : (n = [], e ? (i = 0, a = o(l, arguments[2], 2), s(t, !1, function (t) {
                    n.push(a(t, i++))
                })) : s(t, !1, n.push, n), new this(n))
            }
        })
    }
}, function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    var i = n(65), r = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(i);
    e.default = r.default || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
}, function (t, e, n) {
    n(137), t.exports = n(1).Object.keys
}, function (t, e, n) {
    var i = n(21), r = n(15);
    n(138)("keys", function () {
        return function (t) {
            return r(i(t))
        }
    })
}, function (t, e, n) {
    var i = n(5), r = n(1), o = n(12);
    t.exports = function (t, e) {
        var n = (r.Object || {})[t] || Object[t], s = {};
        s[t] = e(n), i(i.S + i.F * o(function () {
            n(1)
        }), "Object", s)
    }
}, function (t, e, n) {
    t.exports = {default: n(140), __esModule: !0}
}, function (t, e, n) {
    n(28), n(40), t.exports = n(47).f("iterator")
}, function (t, e, n) {
    t.exports = {default: n(142), __esModule: !0}
}, function (t, e, n) {
    n(143), n(27), n(147), n(148), t.exports = n(1).Symbol
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(13), o = n(6), s = n(5), a = n(55), l = n(46).KEY, c = n(12), u = n(38), h = n(20), d = n(25),
        f = n(2), p = n(47), v = n(48), g = n(144), m = n(67), y = n(10), w = n(7), _ = n(21), x = n(14), T = n(33),
        b = n(24), S = n(34), P = n(145), C = n(146), E = n(45), R = n(8), k = n(15), O = C.f, I = R.f, A = P.f,
        $ = i.Symbol, D = i.JSON, M = D && D.stringify, F = f("_hidden"), L = f("toPrimitive"),
        B = {}.propertyIsEnumerable, H = u("symbol-registry"), N = u("symbols"), z = u("op-symbols"),
        j = Object.prototype, V = "function" == typeof $ && !!E.f, U = i.QObject,
        W = !U || !U.prototype || !U.prototype.findChild, q = o && c(function () {
            return 7 != S(I({}, "a", {
                get: function () {
                    return I(this, "a", {value: 7}).a
                }
            })).a
        }) ? function (t, e, n) {
            var i = O(j, e);
            i && delete j[e], I(t, e, n), i && t !== j && I(j, e, i)
        } : I, G = function (t) {
            var e = N[t] = S($.prototype);
            return e._k = t, e
        }, Z = V && "symbol" == typeof $.iterator ? function (t) {
            return "symbol" == typeof t
        } : function (t) {
            return t instanceof $
        }, X = function (t, e, n) {
            return t === j && X(z, e, n), y(t), e = T(e, !0), y(n), r(N, e) ? (n.enumerable ? (r(t, F) && t[F][e] && (t[F][e] = !1), n = S(n, {enumerable: b(0, !1)})) : (r(t, F) || I(t, F, b(1, {})), t[F][e] = !0), q(t, e, n)) : I(t, e, n)
        }, K = function (t, e) {
            y(t);
            for (var n, i = g(e = x(e)), r = 0, o = i.length; o > r;) X(t, n = i[r++], e[n]);
            return t
        }, Y = function (t, e) {
            return void 0 === e ? S(t) : K(S(t), e)
        }, J = function (t) {
            var e = B.call(this, t = T(t, !0));
            return !(this === j && r(N, t) && !r(z, t)) && (!(e || !r(this, t) || !r(N, t) || r(this, F) && this[F][t]) || e)
        }, Q = function (t, e) {
            if (t = x(t), e = T(e, !0), t !== j || !r(N, e) || r(z, e)) {
                var n = O(t, e);
                return !n || !r(N, e) || r(t, F) && t[F][e] || (n.enumerable = !0), n
            }
        }, tt = function (t) {
            for (var e, n = A(x(t)), i = [], o = 0; n.length > o;) r(N, e = n[o++]) || e == F || e == l || i.push(e);
            return i
        }, et = function (t) {
            for (var e, n = t === j, i = A(n ? z : x(t)), o = [], s = 0; i.length > s;) !r(N, e = i[s++]) || n && !r(j, e) || o.push(N[e]);
            return o
        };
    V || ($ = function () {
        if (this instanceof $) throw TypeError("Symbol is not a constructor!");
        var t = d(arguments.length > 0 ? arguments[0] : void 0), e = function (n) {
            this === j && e.call(z, n), r(this, F) && r(this[F], t) && (this[F][t] = !1), q(this, t, b(1, n))
        };
        return o && W && q(j, t, {configurable: !0, set: e}), G(t)
    }, a($.prototype, "toString", function () {
        return this._k
    }), C.f = Q, R.f = X, n(70).f = P.f = tt, n(23).f = J, E.f = et, o && !n(16) && a(j, "propertyIsEnumerable", J, !0), p.f = function (t) {
        return G(f(t))
    }), s(s.G + s.W + s.F * !V, {Symbol: $});
    for (var nt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), it = 0; nt.length > it;) f(nt[it++]);
    for (var rt = k(f.store), ot = 0; rt.length > ot;) v(rt[ot++]);
    s(s.S + s.F * !V, "Symbol", {
        for: function (t) {
            return r(H, t += "") ? H[t] : H[t] = $(t)
        }, keyFor: function (t) {
            if (!Z(t)) throw TypeError(t + " is not a symbol!");
            for (var e in H) if (H[e] === t) return e
        }, useSetter: function () {
            W = !0
        }, useSimple: function () {
            W = !1
        }
    }), s(s.S + s.F * !V, "Object", {
        create: Y,
        defineProperty: X,
        defineProperties: K,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: tt,
        getOwnPropertySymbols: et
    });
    var st = c(function () {
        E.f(1)
    });
    s(s.S + s.F * st, "Object", {
        getOwnPropertySymbols: function (t) {
            return E.f(_(t))
        }
    }), D && s(s.S + s.F * (!V || c(function () {
        var t = $();
        return "[null]" != M([t]) || "{}" != M({a: t}) || "{}" != M(Object(t))
    })), "JSON", {
        stringify: function (t) {
            for (var e, n, i = [t], r = 1; arguments.length > r;) i.push(arguments[r++]);
            if (n = e = i[1], (w(e) || void 0 !== t) && !Z(t)) return m(e) || (e = function (t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !Z(e)) return e
            }), i[1] = e, M.apply(D, i)
        }
    }), $.prototype[L] || n(9)($.prototype, L, $.prototype.valueOf), h($, "Symbol"), h(Math, "Math", !0), h(i.JSON, "JSON", !0)
}, function (t, e, n) {
    var i = n(15), r = n(45), o = n(23);
    t.exports = function (t) {
        var e = i(t), n = r.f;
        if (n) for (var s, a = n(t), l = o.f, c = 0; a.length > c;) l.call(t, s = a[c++]) && e.push(s);
        return e
    }
}, function (t, e, n) {
    var i = n(14), r = n(70).f, o = {}.toString,
        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        a = function (t) {
            try {
                return r(t)
            } catch (t) {
                return s.slice()
            }
        };
    t.exports.f = function (t) {
        return s && "[object Window]" == o.call(t) ? a(t) : r(i(t))
    }
}, function (t, e, n) {
    var i = n(23), r = n(24), o = n(14), s = n(33), a = n(13), l = n(54), c = Object.getOwnPropertyDescriptor;
    e.f = n(6) ? c : function (t, e) {
        if (t = o(t), e = s(e, !0), l) try {
            return c(t, e)
        } catch (t) {
        }
        if (a(t, e)) return r(!i.f.call(t, e), t[e])
    }
}, function (t, e, n) {
    n(48)("asyncIterator")
}, function (t, e, n) {
    n(48)("observable")
}, function (t, e, n) {
    (function (t, e) {
        !function (t, n) {
            "use strict";

            function i(t) {
                "function" != typeof t && (t = new Function("" + t));
                for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                var i = {callback: t, args: e};
                return c[l] = i, a(l), l++
            }

            function r(t) {
                delete c[t]
            }

            function o(t) {
                var e = t.callback, i = t.args;
                switch (i.length) {
                    case 0:
                        e();
                        break;
                    case 1:
                        e(i[0]);
                        break;
                    case 2:
                        e(i[0], i[1]);
                        break;
                    case 3:
                        e(i[0], i[1], i[2]);
                        break;
                    default:
                        e.apply(n, i)
                }
            }

            function s(t) {
                if (u) setTimeout(s, 0, t); else {
                    var e = c[t];
                    if (e) {
                        u = !0;
                        try {
                            o(e)
                        } finally {
                            r(t), u = !1
                        }
                    }
                }
            }

            if (!t.setImmediate) {
                var a, l = 1, c = {}, u = !1, h = t.document, d = Object.getPrototypeOf && Object.getPrototypeOf(t);
                d = d && d.setTimeout ? d : t, "[object process]" === {}.toString.call(t.process) ? function () {
                    a = function (t) {
                        e.nextTick(function () {
                            s(t)
                        })
                    }
                }() : function () {
                    if (t.postMessage && !t.importScripts) {
                        var e = !0, n = t.onmessage;
                        return t.onmessage = function () {
                            e = !1
                        }, t.postMessage("", "*"), t.onmessage = n, e
                    }
                }() ? function () {
                    var e = "setImmediate$" + Math.random() + "$", n = function (n) {
                        n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && s(+n.data.slice(e.length))
                    };
                    t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), a = function (n) {
                        t.postMessage(e + n, "*")
                    }
                }() : t.MessageChannel ? function () {
                    var t = new MessageChannel;
                    t.port1.onmessage = function (t) {
                        s(t.data)
                    }, a = function (e) {
                        t.port2.postMessage(e)
                    }
                }() : h && "onreadystatechange" in h.createElement("script") ? function () {
                    var t = h.documentElement;
                    a = function (e) {
                        var n = h.createElement("script");
                        n.onreadystatechange = function () {
                            s(e), n.onreadystatechange = null, t.removeChild(n), n = null
                        }, t.appendChild(n)
                    }
                }() : function () {
                    a = function (t) {
                        setTimeout(s, 0, t)
                    }
                }(), d.setImmediate = i, d.clearImmediate = r
            }
        }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }).call(e, n(49), n(72))
}, function (t, e, n) {
    "use strict";

    function i(t) {
        n(151)
    }

    var r = n(73), o = n(195), s = n(3), a = i, l = s(r.a, o.a, !1, a, null, null);
    e.a = l.exports
}, function (t, e) {
}, function (t, e, n) {
    "use strict";
    var i = n(74), r = n(155), o = n(3), s = o(i.a, r.a, !1, null, null, null);
    e.a = s.exports
}, function (t, e, n) {
    "use strict";
    var i = n(75), r = n(154), o = n(3), s = o(i.a, r.a, !1, null, null, null);
    e.a = s.exports
}, function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {staticClass: "tify-page-select"}, [n("button", {
            directives: [{
                name: "click-outside",
                rawName: "v-click-outside",
                value: t.closeDropdown,
                expression: "closeDropdown"
            }], staticClass: "tify-page-select_button", attrs: {title: t.pageTitleAttr}, on: {click: t.toggleDropdown}
        }, [n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Current page")))]), t._v("\n\t\t" + t._s(t.$root.params.pages[0] || 1) + "\n\t\t:\n\t\t" + t._s(t.$root.iiifConvertToArray(t.$root.canvases[t.$root.params.pages[0] ? t.$root.params.pages[0] - 1 : 0].label)[0]) + "\n\t")]), t._v(" "), n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: t.isOpen,
                expression: "isOpen"
            }], key: "dropdown", staticClass: "tify-page-select_dropdown", on: {
                click: function (t) {
                    t.stopPropagation()
                }
            }
        }, [n("div", {staticClass: "tify-page-select_filter"}, [n("label", {staticClass: "tify-sr-only"}, [t._v(t._s("Filter pages"))]), t._v(" "), n("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: t.filter,
                expression: "filter"
            }],
            ref: "search",
            staticClass: "tify-page-select_input",
            attrs: {type: "text"},
            domProps: {value: t.filter},
            on: {
                keyup: function (e) {
                    if (!e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                    t.filteredCanvases[t.highlightIndex] && t.setPage(t.filteredCanvases[t.highlightIndex].page)
                }, keydown: [function (e) {
                    if (!e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"])) return null;
                    e.preventDefault(), t.filter ? t.filter = "" : t.closeDropdown()
                }, function (e) {
                    if (!e.type.indexOf("key") && t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"])) return null;
                    e.preventDefault(), t.highlightIndex > 0 && (t.highlightIndex -= 1)
                }, function (e) {
                    if (!e.type.indexOf("key") && t._k(e.keyCode, "down", 40, e.key, ["Down", "ArrowDown"])) return null;
                    e.preventDefault(), t.highlightIndex < t.filteredCanvases.length - 1 && (t.highlightIndex += 1)
                }], input: function (e) {
                    e.target.composing || (t.filter = e.target.value)
                }
            }
        })]), t._v(" "), n("ol", {
            ref: "list",
            staticClass: "tify-page-select_list"
        }, t._l(t.filteredCanvases, function (e, i) {
            return n("li", {
                class: {
                    "-current": t.$root.params.pages.indexOf(e.page) > -1,
                    "-highlighted": t.highlightIndex === i
                }, on: {
                    click: function (n) {
                        return t.setPage(e.page)
                    }
                }
            }, [t._v("\n\t\t\t\t" + t._s(e.page) + "\n\t\t\t\t:\n\t\t\t\t" + t._s(t.$root.iiifConvertToArray(e.label)[0]) + "\n\t\t\t")])
        }), 0)])])
    }, r = [], o = {render: i, staticRenderFns: r};
    e.a = o
}, function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("header", {staticClass: "tify-header"}, [n("div", {staticClass: "tify-header_column -title"}, [n("h1", {
            staticClass: "tify-header_title",
            attrs: {title: t.titles.join(", ")}
        }, [t._v("\n\t\t\t" + t._s(t.titles.join(", ")) + "\n\t\t")])]), t._v(" "), n("div", {staticClass: "tify-header_column -pagination"}, [n("div", {staticClass: "tify-header_button-group"}, [n("page-select", {staticClass: "tify-header_button"}), t._v(" "), n("button", {
            staticClass: "tify-header_button",
            class: {"-active": t.$root.params.pages.length > 1, "-warning": t.customPageViewActive},
            attrs: {title: t._f("trans")("Toggle double-page")},
            on: {click: t.toggleDoublePage}
        }, [t.customPageViewActive ? n("icon", {attrs: {name: "view_module"}}) : n("icon", {attrs: {name: "import_contacts"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Toggle double-page")))])], 1)], 1), t._v(" "), n("div", {staticClass: "tify-header_button-group -pagination"}, [n("button", {
            staticClass: "tify-header_button",
            attrs: {disabled: t.customPageViewActive || t.isFirstPage, title: t._f("trans")("First page")},
            on: {click: t.goToFirstPage}
        }, [n("icon", {attrs: {name: "first_page"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("First page")))])], 1), t._v(" "), t.structures && t.structures.length ? n("button", {
            staticClass: "tify-header_button",
            attrs: {disabled: t.customPageViewActive || t.isFirstPage, title: t._f("trans")("Previous section")},
            on: {click: t.goToPreviousSection}
        }, [n("icon", {attrs: {name: "skip_previous"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Previous section")))])], 1) : t._e(), t._v(" "), n("button", {
            staticClass: "tify-header_button",
            attrs: {disabled: t.customPageViewActive || t.isFirstPage, title: t._f("trans")("Previous page")},
            on: {click: t.goToPreviousPage}
        }, [n("icon", {attrs: {name: "navigate_before"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Previous page")))])], 1), t._v(" "), n("button", {
            staticClass: "tify-header_button",
            attrs: {disabled: t.customPageViewActive || t.isLastPage, title: t._f("trans")("Next page")},
            on: {click: t.goToNextPage}
        }, [n("icon", {attrs: {name: "navigate_next"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Next page")))])], 1), t._v(" "), t.structures && t.structures.length ? n("button", {
            staticClass: "tify-header_button",
            attrs: {disabled: t.customPageViewActive || t.isLastSection, title: t._f("trans")("Next section")},
            on: {click: t.goToNextSection}
        }, [n("icon", {attrs: {name: "skip_next"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Next section")))])], 1) : t._e(), t._v(" "), n("button", {
            staticClass: "tify-header_button",
            attrs: {disabled: t.customPageViewActive || t.isLastPage, title: t._f("trans")("Last page")},
            on: {click: t.goToLastPage}
        }, [n("icon", {attrs: {name: "last_page"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Last page")))])], 1)])]), t._v(" "), n("div", {staticClass: "tify-header_column -controls-toggle"}, [n("div", {
            ref: "switchViewSmall",
            staticClass: "tify-header_button-group"
        }, [n("button", {
            directives: [{
                name: "click-outside",
                rawName: "v-click-outside",
                value: t.closeControlsPopup,
                expression: "closeControlsPopup"
            }], staticClass: "tify-header_button", on: {click: t.toggleControlsPopup}
        }, [n("icon", {attrs: {name: "menu"}}), t._v("\n\t\t\t\t" + t._s(t._f("trans")("View")) + "\n\t\t\t")], 1)])]), t._v(" "), n("div", {
            staticClass: "tify-header_column -controls",
            class: {"-visible": t.controlsVisible}
        }, [n("div", {staticClass: "tify-header_button-group -view"}, [n("button", {
            staticClass: "tify-header_button -scan",
            class: {"-active": "scan" === t.$root.params.view},
            on: {
                click: function (e) {
                    return t.toggleView("scan")
                }
            }
        }, [n("icon", {attrs: {name: "photo"}}), t._v("\n\t\t\t\t" + t._s(t._f("trans")("Scan")) + "\n\t\t\t")], 1), t._v(" "), t.fulltextEnabled ? n("button", {
            staticClass: "tify-header_button",
            class: {"-active": "fulltext" === t.$root.params.view},
            on: {
                click: function (e) {
                    return t.toggleView("fulltext")
                }
            }
        }, [n("icon", {attrs: {name: "subject"}}), t._v("\n\t\t\t\t" + t._s(t._f("trans")("Fulltext")) + "\n\t\t\t")], 1) : t._e(), t._v(" "), n("button", {
            staticClass: "tify-header_button",
            class: {"-active": "thumbnails" === t.$root.params.view},
            on: {
                click: function (e) {
                    return t.toggleView("thumbnails")
                }
            }
        }, [n("icon", {attrs: {name: "view_module"}}), t._v("\n\t\t\t\t" + t._s(t._f("trans")("Pages")) + "\n\t\t\t")], 1), t._v(" "), t.tocEnabled ? n("button", {
            staticClass: "tify-header_button",
            class: {"-active": "toc" === t.$root.params.view},
            on: {
                click: function (e) {
                    return t.toggleView("toc")
                }
            }
        }, [n("icon", {attrs: {name: "toc"}}), t._v("\n\t\t\t\t" + t._s(t._f("trans")("Contents")) + "\n\t\t\t")], 1) : t._e(), t._v(" "), n("button", {
            staticClass: "tify-header_button",
            class: {"-active": "info" === t.$root.params.view},
            on: {
                click: function (e) {
                    return t.toggleView("info")
                }
            }
        }, [n("icon", {attrs: {name: "info_outline"}}), t._v("\n\t\t\t\t" + t._s(t._f("trans")("Info")) + "\n\t\t\t")], 1), t._v(" "), n("button", {
            staticClass: "tify-header_button",
            class: {"-active": "export" === t.$root.params.view},
            on: {
                click: function (e) {
                    return t.toggleView("export")
                }
            }
        }, [n("icon", {attrs: {name: "file_download"}}), t._v("\n\t\t\t\t" + t._s(t._f("trans")("Export")) + "\n\t\t\t")], 1), t._v(" "), n("button", {
            staticClass: "tify-header_button -icon-only",
            class: {"-active": "help" === t.$root.params.view},
            attrs: {title: t.$options.filters.trans("Help")},
            on: {
                click: function (e) {
                    return t.toggleView("help")
                }
            }
        }, [n("icon", {attrs: {name: "help_outline"}}), t._v("\n\t\t\t\t" + t._s(t._f("trans")("Help")) + "\n\t\t\t")], 1)]), t._v(" "), t.fullscreenSupported ? n("div", {staticClass: "tify-header_button-group -view"}, [t.fullscreenActive ? n("button", {
            staticClass: "tify-header_button -icon-only",
            attrs: {title: t._f("trans")("Exit fullscreen")},
            on: {click: t.toggleFullscreen}
        }, [n("icon", {attrs: {name: "fullscreen_exit"}}), t._v("\n\t\t\t\t" + t._s(t._f("trans")("Exit fullscreen")) + "\n\t\t\t")], 1) : n("button", {
            staticClass: "tify-header_button -icon-only",
            attrs: {title: t._f("trans")("Fullscreen")},
            on: {click: t.toggleFullscreen}
        }, [n("icon", {attrs: {name: "fullscreen"}}), t._v("\n\t\t\t\t" + t._s(t._f("trans")("Fullscreen")) + "\n\t\t\t")], 1)]) : t._e(), t._v(" "), n("div", {staticClass: "tify-header_button-group -popup"}, [n("button", {
            staticClass: "tify-header_button",
            attrs: {disabled: t.customPageViewActive || t.isFirstPage, title: t._f("trans")("First page")},
            on: {click: t.goToFirstPage}
        }, [n("icon", {attrs: {name: "first_page"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("First page")))])], 1), t._v(" "), t.structures && t.structures.length ? n("button", {
            staticClass: "tify-header_button",
            attrs: {disabled: t.customPageViewActive || t.isFirstPage, title: t._f("trans")("Previous section")},
            on: {click: t.goToPreviousSection}
        }, [n("icon", {attrs: {name: "skip_previous"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Previous section")))])], 1) : t._e(), t._v(" "), n("button", {
            staticClass: "tify-header_button",
            attrs: {disabled: t.customPageViewActive || t.isFirstPage, title: t._f("trans")("Previous page")},
            on: {click: t.goToPreviousPage}
        }, [n("icon", {attrs: {name: "navigate_before"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Previous page")))])], 1), t._v(" "), n("button", {
            staticClass: "tify-header_button",
            attrs: {disabled: t.customPageViewActive || t.isLastPage, title: t._f("trans")("Next page")},
            on: {click: t.goToNextPage}
        }, [n("icon", {attrs: {name: "navigate_next"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Next page")))])], 1), t._v(" "), t.structures && t.structures.length ? n("button", {
            staticClass: "tify-header_button",
            attrs: {disabled: t.customPageViewActive || t.isLastSection, title: t._f("trans")("Next section")},
            on: {click: t.goToNextSection}
        }, [n("icon", {attrs: {name: "skip_next"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Next section")))])], 1) : t._e(), t._v(" "), n("button", {
            staticClass: "tify-header_button",
            attrs: {disabled: t.customPageViewActive || t.isLastPage, title: t._f("trans")("Last page")},
            on: {click: t.goToLastPage}
        }, [n("icon", {attrs: {name: "last_page"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Last page")))])], 1)])])])
    }, r = [], o = {render: i, staticRenderFns: r};
    e.a = o
}, function (t, e, n) {
    "use strict";
    var i = n(77), r = n(158), o = n(3), s = o(i.a, r.a, !1, null, null, null);
    e.a = s.exports
}, function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("ul", {staticClass: "tify-toc_list"}, t._l(t.structures, function (e, i) {
            return n("li", {
                key: i,
                staticClass: "tify-toc_structure",
                class: {"-current": t.checkIfPagesInStructure(e), "-expanded": t.expandedStructures[i]},
                attrs: {"data-level": t.level}
            }, [e.childStructures ? n("button", {
                staticClass: "tify-toc_toggle",
                attrs: {title: t.$options.filters.trans(t.expandedStructures[i] ? "Collapse" : "Expand")},
                on: {
                    click: function (e) {
                        return t.toggleChildren(i)
                    }
                }
            }, [t.expandedStructures[i] ? [n("icon", {attrs: {name: "remove"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Collapse")))])] : [n("icon", {attrs: {name: "add"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Expand")))])]], 2) : t._e(), t._v(" "), "pdf" === t.purpose ? n("a", {
                staticClass: "tify-toc_link",
                attrs: {download: "", href: t.$root.iiifConvertToArray(e.rendering)[0]["@id"]}
            }, [n("i", {staticClass: "tify-badge"}, [t._v("PDF")]), t._v("\n\t\t\t" + t._s(e.label) + "\n\t\t\t(" + t._s(e.pageCount) + " " + t._s(t._f("trans")(1 === e.pageCount ? "page" : "pages")) + ")\n\t\t")]) : n("a", {
                staticClass: "tify-toc_link -dots",
                on: {
                    click: function (n) {
                        return t.setPage(e.firstPage)
                    }
                }
            }, [n("span", {staticClass: "tify-toc_label"}, [t._v(t._s(e.label))]), t._v(" "), n("span", {staticClass: "tify-toc_page"}, [t._v(t._s(e.pageLabel))])]), t._v(" "), e.childStructures ? n("toc-list", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.expandedStructures[i],
                    expression: "expandedStructures[index]"
                }],
                ref: "children",
                refInFor: !0,
                attrs: {level: t.level + 1, parentStructure: e, purpose: t.purpose, structures: e.childStructures}
            }) : t._e()], 1)
        }), 0)
    }, r = [], o = {render: i, staticRenderFns: r};
    e.a = o
}, function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("section", {staticClass: "tify-export"}, [n("h2", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Export")))]), t._v(" "), n("div", {staticClass: "tify-export_section -links"}, [n("h3", [t._v(t._s(t._f("trans")("Download Individual Images")))]), t._v(" "), n("ul", t._l(t.$root.params.pages, function (e) {
            return e ? n("li", [n("a", {
                attrs: {
                    href: t.imageUrls[e],
                    download: e + ".jpg"
                }
            }, [t._v("\n\t\t\t\t\t" + t._s(t._f("trans")("Page")) + " " + t._s(e) + "\n\t\t\t\t\t:\n\t\t\t\t\t" + t._s(t.$root.iiifConvertToArray(t.$root.canvases[e - 1].label)[0]) + "\n\t\t\t\t")])]) : t._e()
        }), 0)]), t._v(" "), t.$root.manifest.rendering ? n("div", {staticClass: "tify-export_section -renderings"}, [n("h3", [t._v(t._s(t._f("trans")("Renderings")))]), t._v(" "), n("ul", t._l(t.$root.manifest.rendering, function (e) {
            return n("li", [/\.pdf$/i.test(e["@id"]) ? [/\.pdf$/i.test(e["@id"]) ? n("i", {staticClass: "tify-badge"}, [t._v("PDF")]) : t._e(), t._v(" "), n("a", {
                attrs: {
                    href: e["@id"],
                    download: ""
                }
            }, [t._v(t._s(e.label))])] : [n("a", {attrs: {href: e["@id"]}}, [t._v(t._s(e.label))])]], 2)
        }), 0), t._v(" "), t.hasElementPdfLinks ? n("div", {staticClass: "tify-export_container"}, [n("button", {
            staticClass: "tify-export_toggle",
            on: {
                click: function (e) {
                    t.perElementPdfLinksVisible = !t.perElementPdfLinksVisible
                }
            }
        }, [t.perElementPdfLinksVisible ? [t._v(t._s(t._f("trans")("Close PDF list")))] : [t._v(t._s(t._f("trans")("PDFs for each element")))]], 2), t._v(" "), n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: t.perElementPdfLinksVisible,
                expression: "perElementPdfLinksVisible"
            }], staticClass: "tify-export_toc"
        }, [n("toc-list", {
            ref: "children",
            attrs: {purpose: "pdf", level: 0, structures: t.structures}
        })], 1)]) : t._e()]) : t._e(), t._v(" "), t.literatureItems.length ? n("div", {staticClass: "tify-export_section -literature"}, [n("h3", [t._v(t._s(t._f("trans")("Literature Management")))]), t._v(" "), n("ul", t._l(t.literatureItems, function (e) {
            return n("li", [n("a", {
                attrs: {
                    href: e["@id"],
                    download: ""
                }
            }, [t._v("\n\t\t\t\t\t" + t._s(e.label) + "\n\t\t\t\t")])])
        }), 0)]) : t._e(), t._v(" "), n("div", {staticClass: "tify-export_section -other"}, [n("h3", [t._v(t._s(t._f("trans")("Other Formats")))]), t._v(" "), n("ul", [n("li", [n("a", {
            attrs: {
                href: t.$root.manifestUrl,
                download: "manifest.json"
            }
        }, [t._v("\n\t\t\t\t\t" + t._s(t._f("trans")("IIIF manifest")) + "\n\t\t\t\t")])]), t._v(" "), t._l(t.otherItems, function (e) {
            return n("li", [n("a", {
                attrs: {
                    href: e["@id"],
                    download: ""
                }
            }, [t._v("\n\t\t\t\t\t" + t._s(e.label || e["@id"]) + "\n\t\t\t\t")])])
        })], 2)])])
    }, r = [], o = {render: i, staticRenderFns: r};
    e.a = o
}, function (t, e, n) {
    "use strict";
    var i = n(80), r = n(160), o = n(3), s = o(i.a, r.a, !1, null, null, null);
    e.a = s.exports
}, function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("section", {staticClass: "tify-fulltext"}, [n("h2", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Fulltext")))]), t._v(" "), t.fulltextAvailable ? n("div", {staticClass: "tify-fulltext_texts"}, [t._l(this.$root.params.pages, function (e, i) {
            return e ? [i && e > 1 ? n("hr", {staticClass: "tify-fulltext_separator"}) : t._e(), t._v(" "), t._l(t.fulltexts[e], function (e) {
                return [n("div", {staticClass: "tify-fulltext_text", domProps: {innerHTML: t._s(e)}})]
            })] : t._e()
        })], 2) : n("div", {staticClass: "tify-fulltext_none"}, [t._v("\n\t\t" + t._s(t._f("trans")("Fulltext not available for this page")) + "\n\t")])])
    }, r = [], o = {render: i, staticRenderFns: r};
    e.a = o
}, function (t, e, n) {
    "use strict";
    var i = n(81), r = n(162), o = n(3), s = o(i.a, r.a, !1, null, null, null);
    e.a = s.exports
}, function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("section", {staticClass: "tify-help"}, [n("h2", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Help")))]), t._v(" "), n("div", {staticClass: "tify-help_section -doc"}, [n("h3", [t._v(t._s(t._f("trans")("Documentation")))]), t._v(" "), n("p", [n("a", {attrs: {href: t.info.DOCS_URL}}, [t._v(t._s(t._f("trans")("Open documentation")))])])]), t._v(" "), n("div", {staticClass: "tify-help_section -about"}, [n("h3", [t._v(t._s(t._f("trans")("About TIFY")))]), t._v(" "), n("p", {domProps: {innerHTML: t._s(t.$root.$options.filters.trans("TIFY is a slim and mobile-friendly IIIF document viewer."))}}), t._v(" "), n("dl", [n("dt", [t._v(t._s(t._f("trans")("Author")))]), t._v(" "), n("dd", [n("a", {attrs: {href: t.info.AUTHOR.url}}, [t._v(t._s(t.info.AUTHOR.name))])]), t._v(" "), n("dt", [t._v(t._s(t._f("trans")("Version")))]), t._v(" "), n("dd", [t._v(t._s(t.info.VERSION))]), t._v(" "), n("dt", [t._v(t._s(t._f("trans")("License")))]), t._v(" "), n("dd", [t._v(t._s(t.info.LICENSE))])]), t._v(" "), n("p", [n("a", {attrs: {href: t.info.REPOSITORY_URL}}, [t._v(t._s(t._f("trans")("Source code")))])]), t._v(" "), n("p", [n("a", {attrs: {href: t.info.BUGS_URL}}, [t._v(t._s(t._f("trans")("Report a bug")))])])])])
    }, r = [], o = {render: i, staticRenderFns: r};
    e.a = o
}, function (t, e, n) {
    "use strict";
    var i = n(82), r = n(170), o = n(3), s = o(i.a, r.a, !1, null, null, null);
    e.a = s.exports
}, function (t, e, n) {
    "use strict";
    var i = n(83), r = n(169), o = n(3), s = o(i.a, r.a, !1, null, null, null);
    e.a = s.exports
}, function (t, e, n) {
    t.exports = {default: n(166), __esModule: !0}
}, function (t, e, n) {
    n(167), t.exports = n(1).Object.values
}, function (t, e, n) {
    var i = n(5), r = n(168)(!1);
    i(i.S, "Object", {
        values: function (t) {
            return r(t)
        }
    })
}, function (t, e, n) {
    var i = n(6), r = n(15), o = n(14), s = n(23).f;
    t.exports = function (t) {
        return function (e) {
            for (var n, a = o(e), l = r(a), c = l.length, u = 0, h = []; c > u;) n = l[u++], i && !s.call(a, n) || h.push(t ? [n, a[n]] : a[n]);
            return h
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {staticClass: "tify-info_metadata"}, t._l(t.metadata, function (e, i) {
            return n("div", {key: i}, [[n("h4", t._l(t.$root.iiifConvertToArray(e.label), function (e) {
                return n("div", [t._v("\n\t\t\t\t\t" + t._s(t._f("cleanLabel")(e)) + "\n\t\t\t\t")])
            }), 0), t._v(" "), n("div", {staticClass: "tify-info_content"}, [n("div", {
                staticClass: "tify-info_value",
                class: {"-collapsed": t.infoItems && t.infoItems[i] && t.infoItems[i].isCollapsed},
                style: t.infoItems && t.infoItems[i] && t.infoItems[i].isCollapsed ? t.collapsedStyle : null
            }, t._l(t.$root.iiifConvertToArray(e.value), function (e) {
                return n("div", {domProps: {innerHTML: t._s(e)}})
            }), 0), t._v(" "), !t.infoItems || t.infoItems && t.infoItems[i] && t.infoItems[i].isInitiallyCollapsed ? n("button", {
                staticClass: "tify-info_toggle",
                on: {
                    click: function (e) {
                        t.infoItems[i].isCollapsed = !t.infoItems[i].isCollapsed
                    }
                }
            }, [!t.infoItems || t.infoItems && t.infoItems[i] && t.infoItems[i].isCollapsed ? [n("icon", {attrs: {name: "expand_more"}}), t._v("\n\t\t\t\t\t\t" + t._s(t._f("trans")("Expand")) + "\n\t\t\t\t\t")] : [n("icon", {attrs: {name: "expand_less"}}), t._v("\n\t\t\t\t\t\t" + t._s(t._f("trans")("Collapse")) + "\n\t\t\t\t\t")]], 2) : t._e()])]], 2)
        }), 0)
    }, r = [], o = {render: i, staticRenderFns: r};
    e.a = o
}, function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("section", {staticClass: "tify-info"}, [n("h2", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Info")))]), t._v(" "), t.manifest.label ? n("div", {staticClass: "tify-info_section -title"}, [n("h3", {staticClass: "tify-info_heading"}, [t._v(t._s(t._f("trans")("Title")))]), t._v(" "), t._l(t.$root.iiifConvertToArray(t.manifest.label), function (e) {
            return n("div", [t._v("\n\t\t\t" + t._s(e) + "\n\t\t")])
        })], 2) : t._e(), t._v(" "), t.manifest.metadata && t.manifest.metadata.length ? n("div", {staticClass: "tify-info_section -metadata"}, [n("h3", [t._v(t._s(t._f("trans")("Metadata")))]), t._v(" "), n("metadata-list", {attrs: {metadata: t.manifest.metadata}})], 1) : t._e(), t._v(" "), t.currentStructureLabel || t.currentStructureMetadata ? n("div", {staticClass: "tify-info_section -metadata -structure"}, [n("h3", [t._v("\n\t\t\t" + t._s(t._f("trans")("Current Element")) + "\n\t\t")]), t._v(" "), t.currentStructureLabel ? n("p", {staticClass: "tify-info_structure"}, [t._v("\n\t\t\t" + t._s(t.currentStructureLabel) + "\n\t\t")]) : t._e(), t._v(" "), t.currentStructureMetadata ? n("metadata-list", {
            staticClass: "tify-info_section -metadata",
            attrs: {metadata: t.currentStructureMetadata}
        }) : t._e()], 1) : t._e(), t._v(" "), t.manifest.description ? n("div", {staticClass: "tify-info_section -description"}, [n("h3", [t._v(t._s(t._f("trans")("Description")))]), t._v(" "), t._l(t.$root.iiifConvertToArray(t.manifest.description), function (e) {
            return n("div", {domProps: {innerHTML: t._s(e)}})
        })], 2) : t._e(), t._v(" "), t.license.length ? n("div", {staticClass: "tify-info_section -license"}, [n("h3", [t._v(t._s(t._f("trans")("License")))]), t._v(" "), t._l(t.license, function (e) {
            return n("div", ["string" == typeof e ? [t.isUrl(e) ? n("a", {attrs: {href: e}}, [t._v("\n\t\t\t\t\t" + t._s(e) + "\n\t\t\t\t")]) : [t._v("\n\t\t\t\t\t" + t._s(e) + "\n\t\t\t\t")]] : [t.isUrl(e["@id"]) ? n("a", {attrs: {href: e}}, [t._v("\n\t\t\t\t\t" + t._s(e.label || e["@id"]) + "\n\t\t\t\t")]) : [t._v("\n\t\t\t\t\t" + t._s(e.label || e["@id"]) + "\n\t\t\t\t")]]], 2)
        })], 2) : t._e(), t._v(" "), t.related.length ? n("div", {staticClass: "tify-info_section -related"}, [n("h3", [t._v(t._s(t._f("trans")("Related Resources")))]), t._v(" "), t._l(t.related, function (e) {
            return n("div", ["string" == typeof e ? n("a", {attrs: {href: e}}, [t._v("\n\t\t\t\t" + t._s(e) + "\n\t\t\t")]) : n("a", {attrs: {href: e["@id"]}}, [t._v("\n\t\t\t\t" + t._s(e.label || e["@id"]) + "\n\t\t\t")])])
        })], 2) : t._e(), t._v(" "), t.manifest.attribution ? n("div", {staticClass: "tify-info_section -attribution"}, [n("h3", [t._v(t._s(t._f("trans")("Provided by")))]), t._v(" "), t._l(t.$root.iiifConvertToArray(t.manifest.attribution), function (e) {
            return n("div", {domProps: {innerHTML: t._s(e)}})
        })], 2) : t._e(), t._v(" "), t.manifest.logo ? n("div", {staticClass: "tify-info_section -logo"}, [t.logoId && t.manifest.logo.service && t.manifest.logo.service["@id"] ? n("a", {attrs: {href: t.manifest.logo.service["@id"]}}, [n("img", {
            staticClass: "tify-info_logo",
            attrs: {src: t.logoId, alt: ""}
        })]) : n("img", {staticClass: "tify-info_logo", attrs: {src: t.logoId, alt: ""}})]) : t._e()])
    }, r = [], o = {render: i, staticRenderFns: r};
    e.a = o
}, function (t, e, n) {
    "use strict";
    var i = n(84), r = n(190), o = n(3), s = o(i.a, r.a, !1, null, null, null);
    e.a = s.exports
}, function (module, exports, __webpack_require__) {
    function OpenSeadragon(t) {
        return new OpenSeadragon.Viewer(t)
    }

    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function (t) {
        t.version = {
            versionStr: "<%= osdVersion.versionStr %>",
            major: parseInt("<%= osdVersion.major %>", 10),
            minor: parseInt("<%= osdVersion.minor %>", 10),
            revision: parseInt("<%= osdVersion.revision %>", 10)
        };
        var e = {
            "[object Boolean]": "boolean",
            "[object Number]": "number",
            "[object String]": "string",
            "[object Function]": "function",
            "[object Array]": "array",
            "[object Date]": "date",
            "[object RegExp]": "regexp",
            "[object Object]": "object"
        }, n = Object.prototype.toString, i = Object.prototype.hasOwnProperty;
        t.isFunction = function (e) {
            return "function" === t.type(e)
        }, t.isArray = Array.isArray || function (e) {
            return "array" === t.type(e)
        }, t.isWindow = function (t) {
            return t && "object" == typeof t && "setInterval" in t
        }, t.type = function (t) {
            return null === t || void 0 === t ? String(t) : e[n.call(t)] || "object"
        }, t.isPlainObject = function (e) {
            if (!e || "object" !== OpenSeadragon.type(e) || e.nodeType || t.isWindow(e)) return !1;
            if (e.constructor && !i.call(e, "constructor") && !i.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            var n;
            for (var r in e) n = r;
            return void 0 === n || i.call(e, n)
        }, t.isEmptyObject = function (t) {
            for (var e in t) return !1;
            return !0
        }, t.freezeObject = function (e) {
            return Object.freeze ? t.freezeObject = Object.freeze : t.freezeObject = function (t) {
                return t
            }, t.freezeObject(e)
        }, t.supportsCanvas = function () {
            var e = document.createElement("canvas");
            return !(!t.isFunction(e.getContext) || !e.getContext("2d"))
        }(), t.isCanvasTainted = function (t) {
            var e = !1;
            try {
                t.getContext("2d").getImageData(0, 0, 1, 1)
            } catch (t) {
                e = !0
            }
            return e
        }, t.pixelDensityRatio = function () {
            if (t.supportsCanvas) {
                var e = document.createElement("canvas").getContext("2d"), n = window.devicePixelRatio || 1,
                    i = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
                return Math.max(n, 1) / i
            }
            return 1
        }()
    }(OpenSeadragon), function ($) {
        function getOffsetParent(t, e) {
            return e && t != document.body ? document.body : t.offsetParent
        }

        $.extend = function () {
            var t, e, n, i, r, o, s = arguments[0] || {}, a = arguments.length, l = !1, c = 1;
            for ("boolean" == typeof s && (l = s, s = arguments[1] || {}, c = 2), "object" == typeof s || OpenSeadragon.isFunction(s) || (s = {}), a === c && (s = this, --c); c < a; c++) if (null !== (t = arguments[c]) || void 0 !== t) for (e in t) n = s[e], i = t[e], s !== i && (l && i && (OpenSeadragon.isPlainObject(i) || (r = OpenSeadragon.isArray(i))) ? (r ? (r = !1, o = n && OpenSeadragon.isArray(n) ? n : []) : o = n && OpenSeadragon.isPlainObject(n) ? n : {}, s[e] = OpenSeadragon.extend(l, o, i)) : void 0 !== i && (s[e] = i));
            return s
        };
        var isIOSDevice = function () {
            if ("object" != typeof navigator) return !1;
            var t = navigator.userAgent;
            return "string" == typeof t && (-1 !== t.indexOf("iPhone") || -1 !== t.indexOf("iPad") || -1 !== t.indexOf("iPod"))
        };
        $.extend($, {
            DEFAULT_SETTINGS: {
                xmlPath: null,
                tileSources: null,
                tileHost: null,
                initialPage: 0,
                crossOriginPolicy: !1,
                ajaxWithCredentials: !1,
                loadTilesWithAjax: !1,
                ajaxHeaders: {},
                panHorizontal: !0,
                panVertical: !0,
                constrainDuringPan: !1,
                wrapHorizontal: !1,
                wrapVertical: !1,
                visibilityRatio: .5,
                minPixelRatio: .5,
                defaultZoomLevel: 0,
                minZoomLevel: null,
                maxZoomLevel: null,
                homeFillsViewer: !1,
                clickTimeThreshold: 300,
                clickDistThreshold: 5,
                dblClickTimeThreshold: 300,
                dblClickDistThreshold: 20,
                springStiffness: 6.5,
                animationTime: 1.2,
                gestureSettingsMouse: {
                    scrollToZoom: !0,
                    clickToZoom: !0,
                    dblClickToZoom: !1,
                    pinchToZoom: !1,
                    zoomToRefPoint: !0,
                    flickEnabled: !1,
                    flickMinSpeed: 120,
                    flickMomentum: .25,
                    pinchRotate: !1
                },
                gestureSettingsTouch: {
                    scrollToZoom: !1,
                    clickToZoom: !1,
                    dblClickToZoom: !0,
                    pinchToZoom: !0,
                    zoomToRefPoint: !0,
                    flickEnabled: !0,
                    flickMinSpeed: 120,
                    flickMomentum: .25,
                    pinchRotate: !1
                },
                gestureSettingsPen: {
                    scrollToZoom: !1,
                    clickToZoom: !0,
                    dblClickToZoom: !1,
                    pinchToZoom: !1,
                    zoomToRefPoint: !0,
                    flickEnabled: !1,
                    flickMinSpeed: 120,
                    flickMomentum: .25,
                    pinchRotate: !1
                },
                gestureSettingsUnknown: {
                    scrollToZoom: !1,
                    clickToZoom: !1,
                    dblClickToZoom: !0,
                    pinchToZoom: !0,
                    zoomToRefPoint: !0,
                    flickEnabled: !0,
                    flickMinSpeed: 120,
                    flickMomentum: .25,
                    pinchRotate: !1
                },
                zoomPerClick: 2,
                zoomPerScroll: 1.2,
                zoomPerSecond: 1,
                blendTime: 0,
                alwaysBlend: !1,
                autoHideControls: !0,
                immediateRender: !1,
                minZoomImageRatio: .9,
                maxZoomPixelRatio: 1.1,
                smoothTileEdgesMinZoom: 1.1,
                iOSDevice: isIOSDevice(),
                pixelsPerWheelLine: 40,
                pixelsPerArrowPress: 40,
                autoResize: !0,
                preserveImageSizeOnResize: !1,
                minScrollDeltaTime: 50,
                rotationIncrement: 90,
                showSequenceControl: !0,
                sequenceControlAnchor: null,
                preserveViewport: !1,
                preserveOverlays: !1,
                navPrevNextWrap: !1,
                showNavigationControl: !0,
                navigationControlAnchor: null,
                showZoomControl: !0,
                showHomeControl: !0,
                showFullPageControl: !0,
                showRotationControl: !1,
                showFlipControl: !1,
                controlsFadeDelay: 2e3,
                controlsFadeLength: 1500,
                mouseNavEnabled: !0,
                showNavigator: !1,
                navigatorId: null,
                navigatorPosition: null,
                navigatorSizeRatio: .2,
                navigatorMaintainSizeRatio: !1,
                navigatorTop: null,
                navigatorLeft: null,
                navigatorHeight: null,
                navigatorWidth: null,
                navigatorAutoResize: !0,
                navigatorAutoFade: !0,
                navigatorRotate: !0,
                navigatorBackground: "#000",
                navigatorOpacity: .8,
                navigatorBorderColor: "#555",
                navigatorDisplayRegionColor: "#900",
                degrees: 0,
                flipped: !1,
                opacity: 1,
                preload: !1,
                compositeOperation: null,
                imageSmoothingEnabled: !0,
                placeholderFillStyle: null,
                showReferenceStrip: !1,
                referenceStripScroll: "horizontal",
                referenceStripElement: null,
                referenceStripHeight: null,
                referenceStripWidth: null,
                referenceStripPosition: "BOTTOM_LEFT",
                referenceStripSizeRatio: .2,
                collectionRows: 3,
                collectionColumns: 0,
                collectionLayout: "horizontal",
                collectionMode: !1,
                collectionTileSize: 800,
                collectionTileMargin: 80,
                imageLoaderLimit: 0,
                maxImageCacheCount: 200,
                timeout: 3e4,
                useCanvas: !0,
                prefixUrl: "/images/",
                navImages: {
                    zoomIn: {
                        REST: "zoomin_rest.png",
                        GROUP: "zoomin_grouphover.png",
                        HOVER: "zoomin_hover.png",
                        DOWN: "zoomin_pressed.png"
                    },
                    zoomOut: {
                        REST: "zoomout_rest.png",
                        GROUP: "zoomout_grouphover.png",
                        HOVER: "zoomout_hover.png",
                        DOWN: "zoomout_pressed.png"
                    },
                    home: {
                        REST: "home_rest.png",
                        GROUP: "home_grouphover.png",
                        HOVER: "home_hover.png",
                        DOWN: "home_pressed.png"
                    },
                    fullpage: {
                        REST: "fullpage_rest.png",
                        GROUP: "fullpage_grouphover.png",
                        HOVER: "fullpage_hover.png",
                        DOWN: "fullpage_pressed.png"
                    },
                    rotateleft: {
                        REST: "rotateleft_rest.png",
                        GROUP: "rotateleft_grouphover.png",
                        HOVER: "rotateleft_hover.png",
                        DOWN: "rotateleft_pressed.png"
                    },
                    rotateright: {
                        REST: "rotateright_rest.png",
                        GROUP: "rotateright_grouphover.png",
                        HOVER: "rotateright_hover.png",
                        DOWN: "rotateright_pressed.png"
                    },
                    flip: {
                        REST: "flip_rest.png",
                        GROUP: "flip_grouphover.png",
                        HOVER: "flip_hover.png",
                        DOWN: "flip_pressed.png"
                    },
                    previous: {
                        REST: "previous_rest.png",
                        GROUP: "previous_grouphover.png",
                        HOVER: "previous_hover.png",
                        DOWN: "previous_pressed.png"
                    },
                    next: {
                        REST: "next_rest.png",
                        GROUP: "next_grouphover.png",
                        HOVER: "next_hover.png",
                        DOWN: "next_pressed.png"
                    }
                },
                debugMode: !1,
                debugGridColor: ["#437AB2", "#1B9E77", "#D95F02", "#7570B3", "#E7298A", "#66A61E", "#E6AB02", "#A6761D", "#666666"]
            }, SIGNAL: "----seadragon----", delegate: function (t, e) {
                return function () {
                    var n = arguments;
                    return void 0 === n && (n = []), e.apply(t, n)
                }
            }, BROWSERS: {UNKNOWN: 0, IE: 1, FIREFOX: 2, SAFARI: 3, CHROME: 4, OPERA: 5}, getElement: function (t) {
                return "string" == typeof t && (t = document.getElementById(t)), t
            }, getElementPosition: function (t) {
                var e, n, i = new $.Point;
                for (t = $.getElement(t), e = "fixed" == $.getElementStyle(t).position, n = getOffsetParent(t, e); n;) i.x += t.offsetLeft, i.y += t.offsetTop, e && (i = i.plus($.getPageScroll())), t = n, e = "fixed" == $.getElementStyle(t).position, n = getOffsetParent(t, e);
                return i
            }, getElementOffset: function (t) {
                t = $.getElement(t);
                var e, n, i = t && t.ownerDocument, r = {top: 0, left: 0};
                return i ? (e = i.documentElement, void 0 !== t.getBoundingClientRect && (r = t.getBoundingClientRect()), n = i == i.window ? i : 9 === i.nodeType && (i.defaultView || i.parentWindow), new $.Point(r.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0), r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0))) : new $.Point
            }, getElementSize: function (t) {
                return t = $.getElement(t), new $.Point(t.clientWidth, t.clientHeight)
            }, getElementStyle: document.documentElement.currentStyle ? function (t) {
                return t = $.getElement(t), t.currentStyle
            } : function (t) {
                return t = $.getElement(t), window.getComputedStyle(t, "")
            }, getCssPropertyWithVendorPrefix: function (t) {
                var e = {};
                return $.getCssPropertyWithVendorPrefix = function (t) {
                    if (void 0 !== e[t]) return e[t];
                    var n = document.createElement("div").style, i = null;
                    if (void 0 !== n[t]) i = t; else for (var r = ["Webkit", "Moz", "MS", "O", "webkit", "moz", "ms", "o"], o = $.capitalizeFirstLetter(t), s = 0; s < r.length; s++) {
                        var a = r[s] + o;
                        if (void 0 !== n[a]) {
                            i = a;
                            break
                        }
                    }
                    return e[t] = i, i
                }, $.getCssPropertyWithVendorPrefix(t)
            }, capitalizeFirstLetter: function (t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }, positiveModulo: function (t, e) {
                var n = t % e;
                return n < 0 && (n += e), n
            }, pointInElement: function (t, e) {
                t = $.getElement(t);
                var n = $.getElementOffset(t), i = $.getElementSize(t);
                return e.x >= n.x && e.x < n.x + i.x && e.y < n.y + i.y && e.y >= n.y
            }, getEvent: function (t) {
                return $.getEvent = t ? function (t) {
                    return t
                } : function () {
                    return window.event
                }, $.getEvent(t)
            }, getMousePosition: function (t) {
                if ("number" == typeof t.pageX) $.getMousePosition = function (t) {
                    var e = new $.Point;
                    return t = $.getEvent(t), e.x = t.pageX, e.y = t.pageY, e
                }; else {
                    if ("number" != typeof t.clientX) throw new Error("Unknown event mouse position, no known technique.");
                    $.getMousePosition = function (t) {
                        var e = new $.Point;
                        return t = $.getEvent(t), e.x = t.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, e.y = t.clientY + document.body.scrollTop + document.documentElement.scrollTop, e
                    }
                }
                return $.getMousePosition(t)
            }, getPageScroll: function () {
                var t = document.documentElement || {}, e = document.body || {};
                if ("number" == typeof window.pageXOffset) $.getPageScroll = function () {
                    return new $.Point(window.pageXOffset, window.pageYOffset)
                }; else if (e.scrollLeft || e.scrollTop) $.getPageScroll = function () {
                    return new $.Point(document.body.scrollLeft, document.body.scrollTop)
                }; else {
                    if (!t.scrollLeft && !t.scrollTop) return new $.Point(0, 0);
                    $.getPageScroll = function () {
                        return new $.Point(document.documentElement.scrollLeft, document.documentElement.scrollTop)
                    }
                }
                return $.getPageScroll()
            }, setPageScroll: function (t) {
                if (void 0 !== window.scrollTo) $.setPageScroll = function (t) {
                    window.scrollTo(t.x, t.y)
                }; else {
                    var e = $.getPageScroll();
                    if (e.x === t.x && e.y === t.y) return;
                    document.body.scrollLeft = t.x, document.body.scrollTop = t.y;
                    var n = $.getPageScroll();
                    if (n.x !== e.x && n.y !== e.y) return void ($.setPageScroll = function (t) {
                        document.body.scrollLeft = t.x, document.body.scrollTop = t.y
                    });
                    if (document.documentElement.scrollLeft = t.x, document.documentElement.scrollTop = t.y, n = $.getPageScroll(), n.x !== e.x && n.y !== e.y) return void ($.setPageScroll = function (t) {
                        document.documentElement.scrollLeft = t.x, document.documentElement.scrollTop = t.y
                    });
                    $.setPageScroll = function (t) {
                    }
                }
                return $.setPageScroll(t)
            }, getWindowSize: function () {
                var t = document.documentElement || {}, e = document.body || {};
                if ("number" == typeof window.innerWidth) $.getWindowSize = function () {
                    return new $.Point(window.innerWidth, window.innerHeight)
                }; else if (t.clientWidth || t.clientHeight) $.getWindowSize = function () {
                    return new $.Point(document.documentElement.clientWidth, document.documentElement.clientHeight)
                }; else {
                    if (!e.clientWidth && !e.clientHeight) throw new Error("Unknown window size, no known technique.");
                    $.getWindowSize = function () {
                        return new $.Point(document.body.clientWidth, document.body.clientHeight)
                    }
                }
                return $.getWindowSize()
            }, makeCenteredNode: function (t) {
                t = $.getElement(t);
                var e = [$.makeNeutralElement("div"), $.makeNeutralElement("div"), $.makeNeutralElement("div")];
                return $.extend(e[0].style, {
                    display: "table",
                    height: "100%",
                    width: "100%"
                }), $.extend(e[1].style, {display: "table-row"}), $.extend(e[2].style, {
                    display: "table-cell",
                    verticalAlign: "middle",
                    textAlign: "center"
                }), e[0].appendChild(e[1]), e[1].appendChild(e[2]), e[2].appendChild(t), e[0]
            }, makeNeutralElement: function (t) {
                var e = document.createElement(t), n = e.style;
                return n.background = "transparent none", n.border = "none", n.margin = "0px", n.padding = "0px", n.position = "static", e
            }, now: function () {
                return Date.now ? $.now = Date.now : $.now = function () {
                    return (new Date).getTime()
                }, $.now()
            }, makeTransparentImage: function (t) {
                return $.makeTransparentImage = function (t) {
                    var e = $.makeNeutralElement("img");
                    return e.src = t, e
                }, $.Browser.vendor == $.BROWSERS.IE && $.Browser.version < 7 && ($.makeTransparentImage = function (t) {
                    var e = $.makeNeutralElement("img"), n = null;
                    return n = $.makeNeutralElement("span"), n.style.display = "inline-block", e.onload = function () {
                        n.style.width = n.style.width || e.width + "px", n.style.height = n.style.height || e.height + "px", e.onload = null, e = null
                    }, e.src = t, n.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + t + "', sizingMethod='scale')", n
                }), $.makeTransparentImage(t)
            }, setElementOpacity: function (t, e, n) {
                var i, r;
                t = $.getElement(t), n && !$.Browser.alpha && (e = Math.round(e)), $.Browser.opacity ? t.style.opacity = e < 1 ? e : "" : e < 1 ? (i = Math.round(100 * e), r = "alpha(opacity=" + i + ")", t.style.filter = r) : t.style.filter = ""
            }, setElementTouchActionNone: function (t) {
                t = $.getElement(t), void 0 !== t.style.touchAction ? t.style.touchAction = "none" : void 0 !== t.style.msTouchAction && (t.style.msTouchAction = "none")
            }, addClass: function (t, e) {
                t = $.getElement(t), t.className ? -1 === (" " + t.className + " ").indexOf(" " + e + " ") && (t.className += " " + e) : t.className = e
            }, indexOf: function (t, e, n) {
                return Array.prototype.indexOf ? this.indexOf = function (t, e, n) {
                    return t.indexOf(e, n)
                } : this.indexOf = function (t, e, n) {
                    var i, r, o = n || 0;
                    if (!t) throw new TypeError;
                    if (0 === (r = t.length) || o >= r) return -1;
                    for (o < 0 && (o = r - Math.abs(o)), i = o; i < r; i++) if (t[i] === e) return i;
                    return -1
                }, this.indexOf(t, e, n)
            }, removeClass: function (t, e) {
                var n, i, r = [];
                for (t = $.getElement(t), n = t.className.split(/\s+/), i = 0; i < n.length; i++) n[i] && n[i] !== e && r.push(n[i]);
                t.className = r.join(" ")
            }, addEvent: function () {
                if (window.addEventListener) return function (t, e, n, i) {
                    t = $.getElement(t), t.addEventListener(e, n, i)
                };
                if (window.attachEvent) return function (t, e, n, i) {
                    t = $.getElement(t), t.attachEvent("on" + e, n)
                };
                throw new Error("No known event model.")
            }(), removeEvent: function () {
                if (window.removeEventListener) return function (t, e, n, i) {
                    t = $.getElement(t), t.removeEventListener(e, n, i)
                };
                if (window.detachEvent) return function (t, e, n, i) {
                    t = $.getElement(t), t.detachEvent("on" + e, n)
                };
                throw new Error("No known event model.")
            }(), cancelEvent: function (t) {
                t = $.getEvent(t), t.preventDefault ? $.cancelEvent = function (t) {
                    t.preventDefault()
                } : $.cancelEvent = function (t) {
                    t = $.getEvent(t), t.cancel = !0, t.returnValue = !1
                }, $.cancelEvent(t)
            }, stopEvent: function (t) {
                t = $.getEvent(t), t.stopPropagation ? $.stopEvent = function (t) {
                    t.stopPropagation()
                } : $.stopEvent = function (t) {
                    t = $.getEvent(t), t.cancelBubble = !0
                }, $.stopEvent(t)
            }, createCallback: function (t, e) {
                var n, i = [];
                for (n = 2; n < arguments.length; n++) i.push(arguments[n]);
                return function () {
                    var n, r = i.concat([]);
                    for (n = 0; n < arguments.length; n++) r.push(arguments[n]);
                    return e.apply(t, r)
                }
            }, getUrlParameter: function (t) {
                var e = URLPARAMS[t];
                return e || null
            }, getUrlProtocol: function (t) {
                var e = t.match(/^([a-z]+:)\/\//i);
                return null === e ? window.location.protocol : e[1].toLowerCase()
            }, createAjaxRequest: function (t) {
                var e;
                try {
                    e = !!new ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {
                    e = !1
                }
                if (e) window.XMLHttpRequest ? $.createAjaxRequest = function (t) {
                    return t ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest
                } : $.createAjaxRequest = function () {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                }; else {
                    if (!window.XMLHttpRequest) throw new Error("Browser doesn't support XMLHttpRequest.");
                    $.createAjaxRequest = function () {
                        return new XMLHttpRequest
                    }
                }
                return $.createAjaxRequest(t)
            }, makeAjaxRequest: function (t, e, n) {
                var i, r, o;
                $.isPlainObject(t) && (e = t.success, n = t.error, i = t.withCredentials, r = t.headers, o = t.responseType || null, t = t.url);
                var s = $.getUrlProtocol(t), a = $.createAjaxRequest("file:" === s);
                if (!$.isFunction(e)) throw new Error("makeAjaxRequest requires a success callback");
                a.onreadystatechange = function () {
                    4 == a.readyState && (a.onreadystatechange = function () {
                    }, a.status >= 200 && a.status < 300 || 0 === a.status && "http:" !== s && "https:" !== s ? e(a) : ($.console.log("AJAX request returned %d: %s", a.status, t), $.isFunction(n) && n(a)))
                };
                try {
                    if (a.open("GET", t, !0), o && (a.responseType = o), r) for (var l in r) r.hasOwnProperty(l) && r[l] && a.setRequestHeader(l, r[l]);
                    i && (a.withCredentials = !0), a.send(null)
                } catch (i) {
                    var c = i.message, u = $.Browser.vendor == $.BROWSERS.IE && $.Browser.version < 10;
                    if (u && void 0 !== i.number && -2147024891 == i.number && (c += "\nSee http://msdn.microsoft.com/en-us/library/ms537505(v=vs.85).aspx#xdomain"), $.console.log("%s while making AJAX request: %s", i.name, c), a.onreadystatechange = function () {
                    }, window.XDomainRequest) {
                        var h = new XDomainRequest;
                        if (h) {
                            h.onload = function (t) {
                                $.isFunction(e) && e({responseText: h.responseText, status: 200, statusText: "OK"})
                            }, h.onerror = function (t) {
                                $.isFunction(n) && n({
                                    responseText: h.responseText,
                                    status: 444,
                                    statusText: "An error happened. Due to an XDomainRequest deficiency we can not extract any information about this error. Upgrade your browser."
                                })
                            };
                            try {
                                h.open("GET", t), h.send()
                            } catch (t) {
                                $.isFunction(n) && n(a, i)
                            }
                        }
                    } else $.isFunction(n) && n(a, i)
                }
                return a
            }, jsonp: function (t) {
                var e, n = t.url,
                    i = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
                    r = t.callbackName || "openseadragon" + $.now(), o = window[r], s = "$1" + r + "$2",
                    a = t.param || "callback", l = t.callback;
                n = n.replace(/(\=)\?(&|$)|\?\?/i, s), n += (/\?/.test(n) ? "&" : "?") + a + "=" + r, window[r] = function (t) {
                    if (o) window[r] = o; else try {
                        delete window[r]
                    } catch (t) {
                    }
                    l && $.isFunction(l) && l(t)
                }, e = document.createElement("script"), void 0 === t.async && !1 === t.async || (e.async = "async"), t.scriptCharset && (e.charset = t.scriptCharset), e.src = n, e.onload = e.onreadystatechange = function (t, n) {
                    (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, i && e.parentNode && i.removeChild(e), e = void 0)
                }, i.insertBefore(e, i.firstChild)
            }, createFromDZI: function () {
                throw"OpenSeadragon.createFromDZI is deprecated, use Viewer.open."
            }, parseXml: function (t) {
                if (window.DOMParser) $.parseXml = function (t) {
                    var e;
                    return e = new DOMParser, e.parseFromString(t, "text/xml")
                }; else {
                    if (!window.ActiveXObject) throw new Error("Browser doesn't support XML DOM.");
                    $.parseXml = function (t) {
                        var e = null;
                        return e = new ActiveXObject("Microsoft.XMLDOM"), e.async = !1, e.loadXML(t), e
                    }
                }
                return $.parseXml(t)
            }, parseJSON: function (string) {
                return window.JSON && window.JSON.parse ? $.parseJSON = window.JSON.parse : $.parseJSON = function (string) {
                    return eval("(" + string + ")")
                }, $.parseJSON(string)
            }, imageFormatSupported: function (t) {
                return t = t || "", !!FILEFORMATS[t.toLowerCase()]
            }
        }), $.Browser = {vendor: $.BROWSERS.UNKNOWN, version: 0, alpha: !0};
        var FILEFORMATS = {bmp: !1, jpeg: !0, jpg: !0, png: !0, tif: !1, wdp: !1}, URLPARAMS = {};
        !function () {
            var t, e = navigator.appVersion, n = navigator.userAgent;
            switch (navigator.appName) {
                case"Microsoft Internet Explorer":
                    window.attachEvent && window.ActiveXObject && ($.Browser.vendor = $.BROWSERS.IE, $.Browser.version = parseFloat(n.substring(n.indexOf("MSIE") + 5, n.indexOf(";", n.indexOf("MSIE")))));
                    break;
                case"Netscape":
                    window.addEventListener && (n.indexOf("Firefox") >= 0 ? ($.Browser.vendor = $.BROWSERS.FIREFOX, $.Browser.version = parseFloat(n.substring(n.indexOf("Firefox") + 8))) : n.indexOf("Safari") >= 0 ? ($.Browser.vendor = n.indexOf("Chrome") >= 0 ? $.BROWSERS.CHROME : $.BROWSERS.SAFARI, $.Browser.version = parseFloat(n.substring(n.substring(0, n.indexOf("Safari")).lastIndexOf("/") + 1, n.indexOf("Safari")))) : (t = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"), null !== t.exec(n) && ($.Browser.vendor = $.BROWSERS.IE, $.Browser.version = parseFloat(RegExp.$1))));
                    break;
                case"Opera":
                    $.Browser.vendor = $.BROWSERS.OPERA, $.Browser.version = parseFloat(e)
            }
            var i, r, o, s = window.location.search.substring(1), a = s.split("&");
            for (o = 0; o < a.length; o++) i = a[o], (r = i.indexOf("=")) > 0 && (URLPARAMS[i.substring(0, r)] = decodeURIComponent(i.substring(r + 1)));
            $.Browser.alpha = !($.Browser.vendor == $.BROWSERS.IE && $.Browser.version < 9 || $.Browser.vendor == $.BROWSERS.CHROME && $.Browser.version < 2), $.Browser.opacity = !($.Browser.vendor == $.BROWSERS.IE && $.Browser.version < 9)
        }();
        var nullfunction = function (t) {
        };
        $.console = window.console || {
            log: nullfunction,
            debug: nullfunction,
            info: nullfunction,
            warn: nullfunction,
            error: nullfunction,
            assert: nullfunction
        }, function (t) {
            var e = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame,
                n = t.cancelAnimationFrame || t.mozCancelAnimationFrame || t.webkitCancelAnimationFrame || t.msCancelAnimationFrame;
            if (e && n) $.requestAnimationFrame = function () {
                return e.apply(t, arguments)
            }, $.cancelAnimationFrame = function () {
                return n.apply(t, arguments)
            }; else {
                var i, r = [], o = [], s = 0;
                $.requestAnimationFrame = function (t) {
                    return r.push([++s, t]), i || (i = setInterval(function () {
                        if (r.length) {
                            var t = $.now(), e = o;
                            for (o = r, r = e; o.length;) o.shift()[1](t)
                        } else clearInterval(i), i = void 0
                    }, 20)), s
                }, $.cancelAnimationFrame = function (t) {
                    var e, n;
                    for (e = 0, n = r.length; e < n; e += 1) if (r[e][0] === t) return void r.splice(e, 1);
                    for (e = 0, n = o.length; e < n; e += 1) if (o[e][0] === t) return void o.splice(e, 1)
                }
            }
        }(window)
    }(OpenSeadragon), function (t, e) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = e, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
    }(window, function () {
        return OpenSeadragon
    })
}, function (t, e) {
    !function (t) {
        function e(t, e) {
            var n, i = t.controls;
            for (n = i.length - 1; n >= 0; n--) if (i[n].element == e) return n;
            return -1
        }

        t.ControlDock = function (e) {
            var n, i, r = ["topleft", "topright", "bottomright", "bottomleft"];
            for (t.extend(!0, this, {
                id: "controldock-" + t.now() + "-" + Math.floor(1e6 * Math.random()),
                container: t.makeNeutralElement("div"),
                controls: []
            }, e), this.container.onsubmit = function () {
                return !1
            }, this.element && (this.element = t.getElement(this.element), this.element.appendChild(this.container), this.element.style.position = "relative", this.container.style.width = "100%", this.container.style.height = "100%"), i = 0; i < r.length; i++) n = r[i], this.controls[n] = t.makeNeutralElement("div"), this.controls[n].style.position = "absolute", n.match("left") && (this.controls[n].style.left = "0px"), n.match("right") && (this.controls[n].style.right = "0px"), n.match("top") && (this.controls[n].style.top = "0px"), n.match("bottom") && (this.controls[n].style.bottom = "0px");
            this.container.appendChild(this.controls.topleft), this.container.appendChild(this.controls.topright), this.container.appendChild(this.controls.bottomright), this.container.appendChild(this.controls.bottomleft)
        }, t.ControlDock.prototype = {
            addControl: function (n, i) {
                n = t.getElement(n);
                var r = null;
                if (!(e(this, n) >= 0)) {
                    switch (i.anchor) {
                        case t.ControlAnchor.TOP_RIGHT:
                            r = this.controls.topright, n.style.position = "relative", n.style.paddingRight = "0px", n.style.paddingTop = "0px";
                            break;
                        case t.ControlAnchor.BOTTOM_RIGHT:
                            r = this.controls.bottomright, n.style.position = "relative", n.style.paddingRight = "0px", n.style.paddingBottom = "0px";
                            break;
                        case t.ControlAnchor.BOTTOM_LEFT:
                            r = this.controls.bottomleft, n.style.position = "relative", n.style.paddingLeft = "0px", n.style.paddingBottom = "0px";
                            break;
                        case t.ControlAnchor.TOP_LEFT:
                            r = this.controls.topleft, n.style.position = "relative", n.style.paddingLeft = "0px", n.style.paddingTop = "0px";
                            break;
                        case t.ControlAnchor.ABSOLUTE:
                            r = this.container, n.style.margin = "0px", n.style.padding = "0px";
                            break;
                        default:
                        case t.ControlAnchor.NONE:
                            r = this.container, n.style.margin = "0px", n.style.padding = "0px"
                    }
                    this.controls.push(new t.Control(n, i, r)), n.style.display = "inline-block"
                }
            }, removeControl: function (n) {
                n = t.getElement(n);
                var i = e(this, n);
                return i >= 0 && (this.controls[i].destroy(), this.controls.splice(i, 1)), this
            }, clearControls: function () {
                for (; this.controls.length > 0;) this.controls.pop().destroy();
                return this
            }, areControlsEnabled: function () {
                var t;
                for (t = this.controls.length - 1; t >= 0; t--) if (this.controls[t].isVisible()) return !0;
                return !1
            }, setControlsEnabled: function (t) {
                var e;
                for (e = this.controls.length - 1; e >= 0; e--) this.controls[e].setVisible(t);
                return this
            }
        }
    }(OpenSeadragon)
}, function (t, e) {
    !function (t) {
        t.EventSource = function () {
            this.events = {}
        }, t.EventSource.prototype = {
            addOnceHandler: function (t, e, n, i) {
                var r = this;
                i = i || 1;
                var o = 0, s = function (n) {
                    o++, o === i && r.removeHandler(t, s), e(n)
                };
                this.addHandler(t, s, n)
            }, addHandler: function (e, n, i) {
                var r = this.events[e];
                r || (this.events[e] = r = []), n && t.isFunction(n) && (r[r.length] = {
                    handler: n,
                    userData: i || null
                })
            }, removeHandler: function (e, n) {
                var i, r = this.events[e], o = [];
                if (r && t.isArray(r)) {
                    for (i = 0; i < r.length; i++) r[i].handler !== n && o.push(r[i]);
                    this.events[e] = o
                }
            }, removeAllHandlers: function (t) {
                if (t) this.events[t] = []; else for (var e in this.events) this.events[e] = []
            }, getHandler: function (t) {
                var e = this.events[t];
                return e && e.length ? (e = 1 === e.length ? [e[0]] : Array.apply(null, e), function (t, n) {
                    var i, r = e.length;
                    for (i = 0; i < r; i++) e[i] && (n.eventSource = t, n.userData = e[i].userData, e[i].handler(n))
                }) : null
            }, raiseEvent: function (t, e) {
                var n = this.getHandler(t);
                n && (e || (e = {}), n(this, e))
            }
        }
    }(OpenSeadragon)
}, function (t, e) {
    !function (t) {
        function e(e) {
            var n, i, r = e.responseText, o = e.status;
            if (!e) throw new Error(t.getString("Errors.Security"));
            if (200 !== e.status && 0 !== e.status) throw o = e.status, n = 404 == o ? "Not Found" : e.statusText, new Error(t.getString("Errors.Status", o, n));
            if (r.match(/\s*<.*/)) try {
                i = e.responseXML && e.responseXML.documentElement ? e.responseXML : t.parseXml(r)
            } catch (t) {
                i = e.responseText
            } else if (r.match(/\s*[\{\[].*/)) try {
                i = t.parseJSON(r)
            } catch (t) {
                i = r
            } else i = r;
            return i
        }

        t.TileSource = function (e, n, i, r, o, s) {
            var a, l, c = this, u = arguments;
            if (a = t.isPlainObject(e) ? e : {
                width: u[0],
                height: u[1],
                tileSize: u[2],
                tileOverlap: u[3],
                minLevel: u[4],
                maxLevel: u[5]
            }, t.EventSource.call(this), t.extend(!0, this, a), !this.success) for (l = 0; l < arguments.length; l++) if (t.isFunction(arguments[l])) {
                this.success = arguments[l];
                break
            }
            this.success && this.addHandler("ready", function (t) {
                c.success(t)
            }), "string" == t.type(arguments[0]) && (this.url = arguments[0]), this.url ? (this.aspectRatio = 1, this.dimensions = new t.Point(10, 10), this._tileWidth = 0, this._tileHeight = 0, this.tileOverlap = 0, this.minLevel = 0, this.maxLevel = 0, this.ready = !1, this.getImageInfo(this.url)) : (this.ready = !0, this.aspectRatio = a.width && a.height ? a.width / a.height : 1, this.dimensions = new t.Point(a.width, a.height), this.tileSize ? (this._tileWidth = this._tileHeight = this.tileSize, delete this.tileSize) : (this.tileWidth ? (this._tileWidth = this.tileWidth, delete this.tileWidth) : this._tileWidth = 0, this.tileHeight ? (this._tileHeight = this.tileHeight, delete this.tileHeight) : this._tileHeight = 0), this.tileOverlap = a.tileOverlap ? a.tileOverlap : 0, this.minLevel = a.minLevel ? a.minLevel : 0, this.maxLevel = void 0 !== a.maxLevel && null !== a.maxLevel ? a.maxLevel : a.width && a.height ? Math.ceil(Math.log(Math.max(a.width, a.height)) / Math.log(2)) : 0, this.success && t.isFunction(this.success) && this.success(this))
        }, t.TileSource.prototype = {
            getTileSize: function (e) {
                return t.console.error("[TileSource.getTileSize] is deprecated. Use TileSource.getTileWidth() and TileSource.getTileHeight() instead"), this._tileWidth
            }, getTileWidth: function (t) {
                return this._tileWidth ? this._tileWidth : this.getTileSize(t)
            }, getTileHeight: function (t) {
                return this._tileHeight ? this._tileHeight : this.getTileSize(t)
            }, getLevelScale: function (t) {
                var e, n = {};
                for (e = 0; e <= this.maxLevel; e++) n[e] = 1 / Math.pow(2, this.maxLevel - e);
                return this.getLevelScale = function (t) {
                    return n[t]
                }, this.getLevelScale(t)
            }, getNumTiles: function (e) {
                var n = this.getLevelScale(e), i = Math.ceil(n * this.dimensions.x / this.getTileWidth(e)),
                    r = Math.ceil(n * this.dimensions.y / this.getTileHeight(e));
                return new t.Point(i, r)
            }, getPixelRatio: function (e) {
                var n = this.dimensions.times(this.getLevelScale(e)), i = 1 / n.x, r = 1 / n.y;
                return new t.Point(i, r)
            }, getClosestLevel: function () {
                var t, e;
                for (t = this.minLevel + 1; t <= this.maxLevel && (e = this.getNumTiles(t), !(e.x > 1 || e.y > 1)); t++) ;
                return t - 1
            }, getTileAtPoint: function (e, n) {
                var i = n.x >= 0 && n.x <= 1 && n.y >= 0 && n.y <= 1 / this.aspectRatio;
                t.console.assert(i, "[TileSource.getTileAtPoint] must be called with a valid point.");
                var r = this.dimensions.x * this.getLevelScale(e), o = n.x * r, s = n.y * r,
                    a = Math.floor(o / this.getTileWidth(e)), l = Math.floor(s / this.getTileHeight(e));
                n.x >= 1 && (a = this.getNumTiles(e).x - 1);
                return n.y >= 1 / this.aspectRatio - 1e-15 && (l = this.getNumTiles(e).y - 1), new t.Point(a, l)
            }, getTileBounds: function (e, n, i, r) {
                var o = this.dimensions.times(this.getLevelScale(e)), s = this.getTileWidth(e),
                    a = this.getTileHeight(e), l = 0 === n ? 0 : s * n - this.tileOverlap,
                    c = 0 === i ? 0 : a * i - this.tileOverlap, u = s + (0 === n ? 1 : 2) * this.tileOverlap,
                    h = a + (0 === i ? 1 : 2) * this.tileOverlap, d = 1 / o.x;
                return u = Math.min(u, o.x - l), h = Math.min(h, o.y - c), r ? new t.Rect(0, 0, u, h) : new t.Rect(l * d, c * d, u * d, h * d)
            }, getImageInfo: function (n) {
                var i, r, o, s, a, l, c, u = this;
                n && (a = n.split("/"), l = a[a.length - 1], (c = l.lastIndexOf(".")) > -1 && (a[a.length - 1] = l.slice(0, c))), r = function (e) {
                    "string" == typeof e && (e = t.parseXml(e));
                    var i = t.TileSource.determineType(u, e, n);
                    if (!i) return void u.raiseEvent("open-failed", {message: "Unable to load TileSource", source: n});
                    s = i.prototype.configure.apply(u, [e, n]), void 0 === s.ajaxWithCredentials && (s.ajaxWithCredentials = u.ajaxWithCredentials), o = new i(s), u.ready = !0, u.raiseEvent("ready", {tileSource: o})
                }, n.match(/\.js$/) ? (i = n.split("/").pop().replace(".js", ""), t.jsonp({
                    url: n,
                    async: !1,
                    callbackName: i,
                    callback: r
                })) : t.makeAjaxRequest({
                    url: n,
                    withCredentials: this.ajaxWithCredentials,
                    headers: this.ajaxHeaders,
                    success: function (t) {
                        var n = e(t);
                        r(n)
                    },
                    error: function (t, e) {
                        var i;
                        try {
                            i = "HTTP " + t.status + " attempting to load TileSource"
                        } catch (t) {
                            var r;
                            r = void 0 !== e && e.toString ? e.toString() : "Unknown error", i = r + " attempting to load TileSource"
                        }
                        u.raiseEvent("open-failed", {message: i, source: n})
                    }
                })
            }, supports: function (t, e) {
                return !1
            }, configure: function (t, e) {
                throw new Error("Method not implemented.")
            }, getTileUrl: function (t, e, n) {
                throw new Error("Method not implemented.")
            }, getTileAjaxHeaders: function (t, e, n) {
                return {}
            }, tileExists: function (t, e, n) {
                var i = this.getNumTiles(t);
                return t >= this.minLevel && t <= this.maxLevel && e >= 0 && n >= 0 && e < i.x && n < i.y
            }
        }, t.extend(!0, t.TileSource.prototype, t.EventSource.prototype), t.TileSource.determineType = function (e, n, i) {
            var r;
            for (r in OpenSeadragon) if (r.match(/.+TileSource$/) && t.isFunction(OpenSeadragon[r]) && t.isFunction(OpenSeadragon[r].prototype.supports) && OpenSeadragon[r].prototype.supports.call(e, n, i)) return OpenSeadragon[r];
            t.console.error("No TileSource was able to open %s %s", i, n)
        }
    }(OpenSeadragon)
}, function (t, e) {
    !function (t) {
        function e(t) {
            var e = ["http://library.stanford.edu/iiif/image-api/compliance.html#level0", "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0", "http://iiif.io/api/image/2/level0.json"],
                n = -1 !== e.indexOf(t[0]), i = !1;
            return t.length > 1 && t[1].supports && (i = -1 !== t[1].supports.indexOf("sizeByW")), !n || i
        }

        function n(t) {
            for (var e = [], n = 0; n < t.sizes.length; n++) e.push({
                url: t["@id"] + "/full/" + t.sizes[n].width + ",/0/default." + t.tileFormat,
                width: t.sizes[n].width,
                height: t.sizes[n].height
            });
            return e.sort(function (t, e) {
                return t.width - e.width
            })
        }

        function i(e) {
            if (!e || !e.documentElement) throw new Error(t.getString("Errors.Xml"));
            var n = e.documentElement, i = n.tagName, o = null;
            if ("info" == i) try {
                return o = {}, r(n, o), o
            } catch (e) {
                throw e instanceof Error ? e : new Error(t.getString("Errors.IIIF"))
            }
            throw new Error(t.getString("Errors.IIIF"))
        }

        function r(e, n, i) {
            var o, s;
            if (3 == e.nodeType && i) s = e.nodeValue.trim(), s.match(/^\d*$/) && (s = Number(s)), n[i] ? (t.isArray(n[i]) || (n[i] = [n[i]]), n[i].push(s)) : n[i] = s; else if (1 == e.nodeType) for (o = 0; o < e.childNodes.length; o++) r(e.childNodes[o], n, e.nodeName)
        }

        t.IIIFTileSource = function (i) {
            if (t.extend(!0, this, i), !(this.height && this.width && this["@id"])) throw new Error("IIIF required parameters not provided.");
            if (i.tileSizePerScaleFactor = {}, this.tileFormat = this.tileFormat || "jpg", this.tile_width && this.tile_height) i.tileWidth = this.tile_width, i.tileHeight = this.tile_height; else if (this.tile_width) i.tileSize = this.tile_width; else if (this.tile_height) i.tileSize = this.tile_height; else if (this.tiles) if (1 == this.tiles.length) i.tileWidth = this.tiles[0].width, i.tileHeight = this.tiles[0].height || this.tiles[0].width, this.scale_factors = this.tiles[0].scaleFactors; else {
                this.scale_factors = [];
                for (var r = 0; r < this.tiles.length; r++) for (var o = 0; o < this.tiles[r].scaleFactors.length; o++) {
                    var s = this.tiles[r].scaleFactors[o];
                    this.scale_factors.push(s), i.tileSizePerScaleFactor[s] = {
                        width: this.tiles[r].width,
                        height: this.tiles[r].height || this.tiles[r].width
                    }
                }
            } else if (e(i.profile)) {
                for (var a = Math.min(this.height, this.width), l = [256, 512, 1024], c = [], u = 0; u < l.length; u++) l[u] <= a && c.push(l[u]);
                c.length > 0 ? i.tileSize = Math.max.apply(null, c) : i.tileSize = a
            } else this.sizes && this.sizes.length > 0 ? (this.emulateLegacyImagePyramid = !0, i.levels = n(this), t.extend(!0, i, {
                width: i.levels[i.levels.length - 1].width,
                height: i.levels[i.levels.length - 1].height,
                tileSize: Math.max(i.height, i.width),
                tileOverlap: 0,
                minLevel: 0,
                maxLevel: i.levels.length - 1
            }), this.levels = i.levels) : t.console.error("Nothing in the info.json to construct image pyramids from");
            if (!i.maxLevel && !this.emulateLegacyImagePyramid) if (this.scale_factors) {
                var h = Math.max.apply(null, this.scale_factors);
                i.maxLevel = Math.round(Math.log(h) * Math.LOG2E)
            } else i.maxLevel = Number(Math.ceil(Math.log(Math.max(this.width, this.height), 2)));
            t.TileSource.apply(this, [i])
        }, t.extend(t.IIIFTileSource.prototype, t.TileSource.prototype, {
            supports: function (t, e) {
                return !(!t.protocol || "http://iiif.io/api/image" != t.protocol) || (!(!t["@context"] || "http://library.stanford.edu/iiif/image-api/1.1/context.json" != t["@context"] && "http://iiif.io/api/image/1/context.json" != t["@context"]) || (!(!t.profile || 0 !== t.profile.indexOf("http://library.stanford.edu/iiif/image-api/compliance.html")) || (!!(t.identifier && t.width && t.height) || !(!t.documentElement || "info" != t.documentElement.tagName || "http://library.stanford.edu/iiif/image-api/ns/" != t.documentElement.namespaceURI))))
            }, configure: function (e, n) {
                if (t.isPlainObject(e)) {
                    if (e["@context"] || (e["@context"] = "http://iiif.io/api/image/1.0/context.json", e["@id"] = n.replace("/info.json", "")), e.preferredFormats) for (var r = 0; r < e.preferredFormats.length; r++) if (OpenSeadragon.imageFormatSupported(e.preferredFormats[r])) {
                        e.tileFormat = e.preferredFormats[r];
                        break
                    }
                    return e
                }
                var o = i(e);
                return o["@context"] = "http://iiif.io/api/image/1.0/context.json", o["@id"] = n.replace("/info.xml", ""), o
            }, getTileWidth: function (e) {
                if (this.emulateLegacyImagePyramid) return t.TileSource.prototype.getTileWidth.call(this, e);
                var n = Math.pow(2, this.maxLevel - e);
                return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[n] ? this.tileSizePerScaleFactor[n].width : this._tileWidth
            }, getTileHeight: function (e) {
                if (this.emulateLegacyImagePyramid) return t.TileSource.prototype.getTileHeight.call(this, e);
                var n = Math.pow(2, this.maxLevel - e);
                return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[n] ? this.tileSizePerScaleFactor[n].height : this._tileHeight
            }, getLevelScale: function (e) {
                if (this.emulateLegacyImagePyramid) {
                    var n = NaN;
                    return this.levels.length > 0 && e >= this.minLevel && e <= this.maxLevel && (n = this.levels[e].width / this.levels[this.maxLevel].width), n
                }
                return t.TileSource.prototype.getLevelScale.call(this, e)
            }, getNumTiles: function (e) {
                if (this.emulateLegacyImagePyramid) {
                    return this.getLevelScale(e) ? new t.Point(1, 1) : new t.Point(0, 0)
                }
                return t.TileSource.prototype.getNumTiles.call(this, e)
            }, getTileAtPoint: function (e, n) {
                return this.emulateLegacyImagePyramid ? new t.Point(0, 0) : t.TileSource.prototype.getTileAtPoint.call(this, e, n)
            }, getTileUrl: function (t, e, n) {
                if (this.emulateLegacyImagePyramid) {
                    var i = null;
                    return this.levels.length > 0 && t >= this.minLevel && t <= this.maxLevel && (i = this.levels[t].url), i
                }
                var r, o, s, a, l, c, u, h, d, f, p, v, g, m = Math.pow(.5, this.maxLevel - t),
                    y = Math.ceil(this.width * m), w = Math.ceil(this.height * m);
                return r = this.getTileWidth(t), o = this.getTileHeight(t), s = Math.ceil(r / m), a = Math.ceil(o / m), g = this["@context"].indexOf("/1.0/context.json") > -1 || this["@context"].indexOf("/1.1/context.json") > -1 || this["@context"].indexOf("/1/context.json") > -1, v = g ? "native." + this.tileFormat : "default." + this.tileFormat, y < r && w < o ? (f = g || y !== this.width ? y + "," : "max", l = "full") : (c = e * s, u = n * a, h = Math.min(s, this.width - c), d = Math.min(a, this.height - u), l = 0 === e && 0 === n && h === this.width && d === this.height ? "full" : [c, u, h, d].join(","), p = Math.ceil(h * m), f = g || p !== this.width ? p + "," : "max"), [this["@id"], l, f, "0", v].join("/")
            }
        })
    }(OpenSeadragon)
}, function (t, e) {
    !function (t) {
        t.Drawer = function (e) {
            t.console.assert(e.viewer, "[Drawer] options.viewer is required");
            var n = arguments;
            if (t.isPlainObject(e) || (e = {
                source: n[0],
                viewport: n[1],
                element: n[2]
            }), t.console.assert(e.viewport, "[Drawer] options.viewport is required"), t.console.assert(e.element, "[Drawer] options.element is required"), e.source && t.console.error("[Drawer] options.source is no longer accepted; use TiledImage instead"), this.viewer = e.viewer, this.viewport = e.viewport, this.debugGridColor = "string" == typeof e.debugGridColor ? [e.debugGridColor] : e.debugGridColor || t.DEFAULT_SETTINGS.debugGridColor, e.opacity && t.console.error("[Drawer] options.opacity is no longer accepted; set the opacity on the TiledImage instead"), this.useCanvas = t.supportsCanvas && (!this.viewer || this.viewer.useCanvas), this.container = t.getElement(e.element), this.canvas = t.makeNeutralElement(this.useCanvas ? "canvas" : "div"), this.context = this.useCanvas ? this.canvas.getContext("2d") : null, this.sketchCanvas = null, this.sketchContext = null, this.element = this.container, this.container.dir = "ltr", this.useCanvas) {
                var i = this._calculateCanvasSize();
                this.canvas.width = i.x, this.canvas.height = i.y
            }
            this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.position = "absolute", t.setElementOpacity(this.canvas, this.opacity, !0), this.container.style.textAlign = "left", this.container.appendChild(this.canvas), this._imageSmoothingEnabled = !0
        }, t.Drawer.prototype = {
            addOverlay: function (e, n, i, r) {
                return t.console.error("drawer.addOverlay is deprecated. Use viewer.addOverlay instead."), this.viewer.addOverlay(e, n, i, r), this
            }, updateOverlay: function (e, n, i) {
                return t.console.error("drawer.updateOverlay is deprecated. Use viewer.updateOverlay instead."), this.viewer.updateOverlay(e, n, i), this
            }, removeOverlay: function (e) {
                return t.console.error("drawer.removeOverlay is deprecated. Use viewer.removeOverlay instead."), this.viewer.removeOverlay(e), this
            }, clearOverlays: function () {
                return t.console.error("drawer.clearOverlays is deprecated. Use viewer.clearOverlays instead."), this.viewer.clearOverlays(), this
            }, setOpacity: function (e) {
                t.console.error("drawer.setOpacity is deprecated. Use tiledImage.setOpacity instead.");
                for (var n = this.viewer.world, i = 0; i < n.getItemCount(); i++) n.getItemAt(i).setOpacity(e);
                return this
            }, getOpacity: function () {
                t.console.error("drawer.getOpacity is deprecated. Use tiledImage.getOpacity instead.");
                for (var e = this.viewer.world, n = 0, i = 0; i < e.getItemCount(); i++) {
                    var r = e.getItemAt(i).getOpacity();
                    r > n && (n = r)
                }
                return n
            }, needsUpdate: function () {
                return t.console.error("[Drawer.needsUpdate] this function is deprecated. Use World.needsDraw instead."), this.viewer.world.needsDraw()
            }, numTilesLoaded: function () {
                return t.console.error("[Drawer.numTilesLoaded] this function is deprecated. Use TileCache.numTilesLoaded instead."), this.viewer.tileCache.numTilesLoaded()
            }, reset: function () {
                return t.console.error("[Drawer.reset] this function is deprecated. Use World.resetItems instead."), this.viewer.world.resetItems(), this
            }, update: function () {
                return t.console.error("[Drawer.update] this function is deprecated. Use Drawer.clear and World.draw instead."), this.clear(), this.viewer.world.draw(), this
            }, canRotate: function () {
                return this.useCanvas
            }, destroy: function () {
                this.canvas.width = 1, this.canvas.height = 1, this.sketchCanvas = null, this.sketchContext = null
            }, clear: function () {
                if (this.canvas.innerHTML = "", this.useCanvas) {
                    var t = this._calculateCanvasSize();
                    if ((this.canvas.width != t.x || this.canvas.height != t.y) && (this.canvas.width = t.x, this.canvas.height = t.y, this._updateImageSmoothingEnabled(this.context), null !== this.sketchCanvas)) {
                        var e = this._calculateSketchCanvasSize();
                        this.sketchCanvas.width = e.x, this.sketchCanvas.height = e.y, this._updateImageSmoothingEnabled(this.sketchContext)
                    }
                    this._clear()
                }
            }, _clear: function (t, e) {
                if (this.useCanvas) {
                    var n = this._getContext(t);
                    if (e) n.clearRect(e.x, e.y, e.width, e.height); else {
                        var i = n.canvas;
                        n.clearRect(0, 0, i.width, i.height)
                    }
                }
            }, viewportToDrawerRectangle: function (e) {
                var n = this.viewport.pixelFromPointNoRotate(e.getTopLeft(), !0),
                    i = this.viewport.deltaPixelsFromPointsNoRotate(e.getSize(), !0);
                return new t.Rect(n.x * t.pixelDensityRatio, n.y * t.pixelDensityRatio, i.x * t.pixelDensityRatio, i.y * t.pixelDensityRatio)
            }, drawTile: function (e, n, i, r, o) {
                if (t.console.assert(e, "[Drawer.drawTile] tile is required"), t.console.assert(n, "[Drawer.drawTile] drawingHandler is required"), this.useCanvas) {
                    var s = this._getContext(i);
                    r = r || 1, e.drawCanvas(s, n, r, o)
                } else e.drawHTML(this.canvas)
            }, _getContext: function (t) {
                var e = this.context;
                if (t) {
                    if (null === this.sketchCanvas) {
                        this.sketchCanvas = document.createElement("canvas");
                        var n = this._calculateSketchCanvasSize();
                        if (this.sketchCanvas.width = n.x, this.sketchCanvas.height = n.y, this.sketchContext = this.sketchCanvas.getContext("2d"), 0 === this.viewport.getRotation()) {
                            var i = this;
                            this.viewer.addHandler("rotate", function t() {
                                if (0 !== i.viewport.getRotation()) {
                                    i.viewer.removeHandler("rotate", t);
                                    var e = i._calculateSketchCanvasSize();
                                    i.sketchCanvas.width = e.x, i.sketchCanvas.height = e.y
                                }
                            })
                        }
                        this._updateImageSmoothingEnabled(this.sketchContext)
                    }
                    e = this.sketchContext
                }
                return e
            }, saveContext: function (t) {
                this.useCanvas && this._getContext(t).save()
            }, restoreContext: function (t) {
                this.useCanvas && this._getContext(t).restore()
            }, setClip: function (t, e) {
                if (this.useCanvas) {
                    var n = this._getContext(e);
                    n.beginPath(), n.rect(t.x, t.y, t.width, t.height), n.clip()
                }
            }, drawRectangle: function (t, e, n) {
                if (this.useCanvas) {
                    var i = this._getContext(n);
                    i.save(), i.fillStyle = e, i.fillRect(t.x, t.y, t.width, t.height), i.restore()
                }
            }, blendSketch: function (e, n, i, r) {
                var o = e;
                if (t.isPlainObject(o) || (o = {
                    opacity: e,
                    scale: n,
                    translate: i,
                    compositeOperation: r
                }), this.useCanvas && this.sketchCanvas) {
                    e = o.opacity, r = o.compositeOperation;
                    var s = o.bounds;
                    if (this.context.save(), this.context.globalAlpha = e, r && (this.context.globalCompositeOperation = r), s) s.x < 0 && (s.width += s.x, s.x = 0), s.x + s.width > this.canvas.width && (s.width = this.canvas.width - s.x), s.y < 0 && (s.height += s.y, s.y = 0), s.y + s.height > this.canvas.height && (s.height = this.canvas.height - s.y), this.context.drawImage(this.sketchCanvas, s.x, s.y, s.width, s.height, s.x, s.y, s.width, s.height); else {
                        n = o.scale || 1, i = o.translate;
                        var a = i instanceof t.Point ? i : new t.Point(0, 0), l = 0, c = 0;
                        if (i) {
                            var u = this.sketchCanvas.width - this.canvas.width,
                                h = this.sketchCanvas.height - this.canvas.height;
                            l = Math.round(u / 2), c = Math.round(h / 2)
                        }
                        this.context.drawImage(this.sketchCanvas, a.x - l * n, a.y - c * n, (this.canvas.width + 2 * l) * n, (this.canvas.height + 2 * c) * n, -l, -c, this.canvas.width + 2 * l, this.canvas.height + 2 * c)
                    }
                    this.context.restore()
                }
            }, drawDebugInfo: function (e, n, i, r) {
                if (this.useCanvas) {
                    var o = this.viewer.world.getIndexOfItem(r) % this.debugGridColor.length, s = this.context;
                    s.save(), s.lineWidth = 2 * t.pixelDensityRatio, s.font = "small-caps bold " + 13 * t.pixelDensityRatio + "px arial", s.strokeStyle = this.debugGridColor[o], s.fillStyle = this.debugGridColor[o], 0 !== this.viewport.degrees && this._offsetForRotation({degrees: this.viewport.degrees}), r.getRotation(!0) % 360 != 0 && this._offsetForRotation({
                        degrees: r.getRotation(!0),
                        point: r.viewport.pixelFromPointNoRotate(r._getRotationPoint(!0), !0)
                    }), 0 === r.viewport.degrees && r.getRotation(!0) % 360 == 0 && r._drawer.viewer.viewport.getFlip() && r._drawer._flip(), s.strokeRect(e.position.x * t.pixelDensityRatio, e.position.y * t.pixelDensityRatio, e.size.x * t.pixelDensityRatio, e.size.y * t.pixelDensityRatio);
                    var a = (e.position.x + e.size.x / 2) * t.pixelDensityRatio,
                        l = (e.position.y + e.size.y / 2) * t.pixelDensityRatio;
                    s.translate(a, l), s.rotate(Math.PI / 180 * -this.viewport.degrees), s.translate(-a, -l), 0 === e.x && 0 === e.y && (s.fillText("Zoom: " + this.viewport.getZoom(), e.position.x * t.pixelDensityRatio, (e.position.y - 30) * t.pixelDensityRatio), s.fillText("Pan: " + this.viewport.getBounds().toString(), e.position.x * t.pixelDensityRatio, (e.position.y - 20) * t.pixelDensityRatio)), s.fillText("Level: " + e.level, (e.position.x + 10) * t.pixelDensityRatio, (e.position.y + 20) * t.pixelDensityRatio), s.fillText("Column: " + e.x, (e.position.x + 10) * t.pixelDensityRatio, (e.position.y + 30) * t.pixelDensityRatio), s.fillText("Row: " + e.y, (e.position.x + 10) * t.pixelDensityRatio, (e.position.y + 40) * t.pixelDensityRatio), s.fillText("Order: " + i + " of " + n, (e.position.x + 10) * t.pixelDensityRatio, (e.position.y + 50) * t.pixelDensityRatio), s.fillText("Size: " + e.size.toString(), (e.position.x + 10) * t.pixelDensityRatio, (e.position.y + 60) * t.pixelDensityRatio), s.fillText("Position: " + e.position.toString(), (e.position.x + 10) * t.pixelDensityRatio, (e.position.y + 70) * t.pixelDensityRatio), 0 !== this.viewport.degrees && this._restoreRotationChanges(), r.getRotation(!0) % 360 != 0 && this._restoreRotationChanges(), 0 === r.viewport.degrees && r.getRotation(!0) % 360 == 0 && r._drawer.viewer.viewport.getFlip() && r._drawer._flip(), s.restore()
                }
            }, debugRect: function (e) {
                if (this.useCanvas) {
                    var n = this.context;
                    n.save(), n.lineWidth = 2 * t.pixelDensityRatio, n.strokeStyle = this.debugGridColor[0], n.fillStyle = this.debugGridColor[0], n.strokeRect(e.x * t.pixelDensityRatio, e.y * t.pixelDensityRatio, e.width * t.pixelDensityRatio, e.height * t.pixelDensityRatio), n.restore()
                }
            }, setImageSmoothingEnabled: function (t) {
                this.useCanvas && (this._imageSmoothingEnabled = t, this._updateImageSmoothingEnabled(this.context), this.viewer.forceRedraw())
            }, _updateImageSmoothingEnabled: function (t) {
                t.mozImageSmoothingEnabled = this._imageSmoothingEnabled, t.webkitImageSmoothingEnabled = this._imageSmoothingEnabled, t.msImageSmoothingEnabled = this._imageSmoothingEnabled, t.imageSmoothingEnabled = this._imageSmoothingEnabled
            }, getCanvasSize: function (e) {
                var n = this._getContext(e).canvas;
                return new t.Point(n.width, n.height)
            }, getCanvasCenter: function () {
                return new t.Point(this.canvas.width / 2, this.canvas.height / 2)
            }, _offsetForRotation: function (e) {
                var n = e.point ? e.point.times(t.pixelDensityRatio) : this.getCanvasCenter(),
                    i = this._getContext(e.useSketch);
                i.save(), i.translate(n.x, n.y), this.viewer.viewport.flipped ? (i.rotate(Math.PI / 180 * -e.degrees), i.scale(-1, 1)) : i.rotate(Math.PI / 180 * e.degrees), i.translate(-n.x, -n.y)
            }, _flip: function (e) {
                e = e || {};
                var n = e.point ? e.point.times(t.pixelDensityRatio) : this.getCanvasCenter(),
                    i = this._getContext(e.useSketch);
                i.translate(n.x, 0), i.scale(-1, 1), i.translate(-n.x, 0)
            }, _restoreRotationChanges: function (t) {
                this._getContext(t).restore()
            }, _calculateCanvasSize: function () {
                var e = t.pixelDensityRatio, n = this.viewport.getContainerSize();
                return {x: Math.round(n.x * e), y: Math.round(n.y * e)}
            }, _calculateSketchCanvasSize: function () {
                var t = this._calculateCanvasSize();
                if (0 === this.viewport.getRotation()) return t;
                var e = Math.ceil(Math.sqrt(t.x * t.x + t.y * t.y));
                return {x: e, y: e}
            }
        }
    }(OpenSeadragon)
}, function (t, e) {
    !function (t) {
        function e(e) {
            t.extend(!0, this, {timeout: t.DEFAULT_SETTINGS.timeout, jobId: null}, e), this.image = null
        }

        function n(t, e, n) {
            var i;
            t.jobsInProgress--, (!t.jobLimit || t.jobsInProgress < t.jobLimit) && t.jobQueue.length > 0 && (i = t.jobQueue.shift(), i.start(), t.jobsInProgress++), n(e.image, e.errorMsg, e.request)
        }

        e.prototype = {
            errorMsg: null, start: function () {
                var e = this, n = this.abort;
                this.image = new Image, this.image.onload = function () {
                    e.finish(!0)
                }, this.image.onabort = this.image.onerror = function () {
                    e.errorMsg = "Image load aborted", e.finish(!1)
                }, this.jobId = window.setTimeout(function () {
                    e.errorMsg = "Image load exceeded timeout (" + e.timeout + " ms)", e.finish(!1)
                }, this.timeout), this.loadWithAjax ? (this.request = t.makeAjaxRequest({
                    url: this.src,
                    withCredentials: this.ajaxWithCredentials,
                    headers: this.ajaxHeaders,
                    responseType: "arraybuffer",
                    success: function (t) {
                        var n;
                        try {
                            n = new window.Blob([t.response])
                        } catch (e) {
                            var i = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
                            if ("TypeError" === e.name && i) {
                                var r = new i;
                                r.append(t.response), n = r.getBlob()
                            }
                        }
                        0 === n.size && (e.errorMsg = "Empty image response.", e.finish(!1));
                        var o = (window.URL || window.webkitURL).createObjectURL(n);
                        e.image.src = o
                    },
                    error: function (t) {
                        e.errorMsg = "Image load aborted - XHR error", e.finish(!1)
                    }
                }), this.abort = function () {
                    e.request.abort(), "function" == typeof n && n()
                }) : (!1 !== this.crossOriginPolicy && (this.image.crossOrigin = this.crossOriginPolicy), this.image.src = this.src)
            }, finish: function (t) {
                this.image.onload = this.image.onerror = this.image.onabort = null, t || (this.image = null), this.jobId && window.clearTimeout(this.jobId), this.callback(this)
            }
        }, t.ImageLoader = function (e) {
            t.extend(!0, this, {
                jobLimit: t.DEFAULT_SETTINGS.imageLoaderLimit,
                timeout: t.DEFAULT_SETTINGS.timeout,
                jobQueue: [],
                jobsInProgress: 0
            }, e)
        }, t.ImageLoader.prototype = {
            addJob: function (t) {
                var i = this, r = function (e) {
                    n(i, e, t.callback)
                }, o = {
                    src: t.src,
                    loadWithAjax: t.loadWithAjax,
                    ajaxHeaders: t.loadWithAjax ? t.ajaxHeaders : null,
                    crossOriginPolicy: t.crossOriginPolicy,
                    ajaxWithCredentials: t.ajaxWithCredentials,
                    callback: r,
                    abort: t.abort,
                    timeout: this.timeout
                }, s = new e(o);
                !this.jobLimit || this.jobsInProgress < this.jobLimit ? (s.start(), this.jobsInProgress++) : this.jobQueue.push(s)
            }, clear: function () {
                for (var t = 0; t < this.jobQueue.length; t++) {
                    var e = this.jobQueue[t];
                    "function" == typeof e.abort && e.abort()
                }
                this.jobQueue = []
            }
        }
    }(OpenSeadragon)
}, function (t, e) {
    !function (t) {
        function e(e) {
            var n, i = vt[e.hash], r = i.activePointersLists.length;
            for (n = 0; n < r; n++) i.activePointersLists[n].captureCount > 0 && (t.removeEvent(t.MouseTracker.captureElement, "mousemove", i.mousemovecaptured, !0), t.removeEvent(t.MouseTracker.captureElement, "mouseup", i.mouseupcaptured, !0), t.removeEvent(t.MouseTracker.captureElement, t.MouseTracker.unprefixedPointerEvents ? "pointermove" : "MSPointerMove", i.pointermovecaptured, !0), t.removeEvent(t.MouseTracker.captureElement, t.MouseTracker.unprefixedPointerEvents ? "pointerup" : "MSPointerUp", i.pointerupcaptured, !0), t.removeEvent(t.MouseTracker.captureElement, "touchmove", i.touchmovecaptured, !0), t.removeEvent(t.MouseTracker.captureElement, "touchend", i.touchendcaptured, !0), i.activePointersLists[n].captureCount = 0);
            for (n = 0; n < r; n++) i.activePointersLists.pop()
        }

        function n(n) {
            var i, r, o = vt[n.hash];
            if (!o.tracking) {
                for (r = 0; r < t.MouseTracker.subscribeEvents.length; r++) i = t.MouseTracker.subscribeEvents[r], t.addEvent(n.element, i, o[i], !1);
                e(n), o.tracking = !0
            }
        }

        function i(n) {
            var i, r, o = vt[n.hash];
            if (o.tracking) {
                for (r = 0; r < t.MouseTracker.subscribeEvents.length; r++) i = t.MouseTracker.subscribeEvents[r], t.removeEvent(n.element, i, o[i], !1);
                e(n), o.tracking = !1
            }
        }

        function r(e, n) {
            var i = vt[e.hash];
            if ("pointerevent" === n) return {
                upName: t.MouseTracker.unprefixedPointerEvents ? "pointerup" : "MSPointerUp",
                upHandler: i.pointerupcaptured,
                moveName: t.MouseTracker.unprefixedPointerEvents ? "pointermove" : "MSPointerMove",
                moveHandler: i.pointermovecaptured
            };
            if ("mouse" === n) return {
                upName: "mouseup",
                upHandler: i.mouseupcaptured,
                moveName: "mousemove",
                moveHandler: i.mousemovecaptured
            };
            if ("touch" === n) return {
                upName: "touchend",
                upHandler: i.touchendcaptured,
                moveName: "touchmove",
                moveHandler: i.touchmovecaptured
            };
            throw new Error("MouseTracker.getCaptureEventParams: Unknown pointer type.")
        }

        function o(e, n, i) {
            var o, s = e.getActivePointersListByType(n);
            s.captureCount += i || 1, 1 === s.captureCount && (t.Browser.vendor === t.BROWSERS.IE && t.Browser.version < 9 ? e.element.setCapture(!0) : (o = r(e, t.MouseTracker.havePointerEvents ? "pointerevent" : n), gt && ft(window.top) && t.addEvent(window.top, o.upName, o.upHandler, !0), t.addEvent(t.MouseTracker.captureElement, o.upName, o.upHandler, !0), t.addEvent(t.MouseTracker.captureElement, o.moveName, o.moveHandler, !0)))
        }

        function s(e, n, i) {
            var o, s = e.getActivePointersListByType(n);
            s.captureCount -= i || 1, 0 === s.captureCount && (t.Browser.vendor === t.BROWSERS.IE && t.Browser.version < 9 ? e.element.releaseCapture() : (o = r(e, t.MouseTracker.havePointerEvents ? "pointerevent" : n), gt && ft(window.top) && t.removeEvent(window.top, o.upName, o.upHandler, !0), t.removeEvent(t.MouseTracker.captureElement, o.moveName, o.moveHandler, !0), t.removeEvent(t.MouseTracker.captureElement, o.upName, o.upHandler, !0)))
        }

        function a(e) {
            var n;
            if (t.MouseTracker.unprefixedPointerEvents) n = e.pointerType; else switch (e.pointerType) {
                case 2:
                    n = "touch";
                    break;
                case 3:
                    n = "pen";
                    break;
                case 4:
                    n = "mouse";
                    break;
                default:
                    n = ""
            }
            return n
        }

        function l(e) {
            return t.getMousePosition(e)
        }

        function c(t, e) {
            return u(l(t), e)
        }

        function u(e, n) {
            var i = t.getElementOffset(n);
            return e.minus(i)
        }

        function h(e, n) {
            return new t.Point((e.x + n.x) / 2, (e.y + n.y) / 2)
        }

        function d(e, n) {
            e.clickHandler && t.cancelEvent(n)
        }

        function f(e, n) {
            e.dblClickHandler && t.cancelEvent(n)
        }

        function p(e, n) {
            e.keyDownHandler && (n = t.getEvent(n), e.keyDownHandler({
                eventSource: e,
                keyCode: n.keyCode ? n.keyCode : n.charCode,
                ctrl: n.ctrlKey,
                shift: n.shiftKey,
                alt: n.altKey,
                meta: n.metaKey,
                originalEvent: n,
                preventDefaultAction: !1,
                userData: e.userData
            }) || t.cancelEvent(n))
        }

        function v(e, n) {
            e.keyUpHandler && (n = t.getEvent(n), e.keyUpHandler({
                eventSource: e,
                keyCode: n.keyCode ? n.keyCode : n.charCode,
                ctrl: n.ctrlKey,
                shift: n.shiftKey,
                alt: n.altKey,
                meta: n.metaKey,
                originalEvent: n,
                preventDefaultAction: !1,
                userData: e.userData
            }) || t.cancelEvent(n))
        }

        function g(e, n) {
            e.keyHandler && (n = t.getEvent(n), e.keyHandler({
                eventSource: e,
                keyCode: n.keyCode ? n.keyCode : n.charCode,
                ctrl: n.ctrlKey,
                shift: n.shiftKey,
                alt: n.altKey,
                meta: n.metaKey,
                originalEvent: n,
                preventDefaultAction: !1,
                userData: e.userData
            }) || t.cancelEvent(n))
        }

        function m(e, n) {
            e.focusHandler && (n = t.getEvent(n), !1 === e.focusHandler({
                eventSource: e,
                originalEvent: n,
                preventDefaultAction: !1,
                userData: e.userData
            }) && t.cancelEvent(n))
        }

        function y(e, n) {
            e.blurHandler && (n = t.getEvent(n), !1 === e.blurHandler({
                eventSource: e,
                originalEvent: n,
                preventDefaultAction: !1,
                userData: e.userData
            }) && t.cancelEvent(n))
        }

        function w(t, e) {
            x(t, e, e)
        }

        function _(e, n) {
            n = t.getEvent(n);
            var i = {
                target: n.target || n.srcElement,
                type: "wheel",
                shiftKey: n.shiftKey || !1,
                clientX: n.clientX,
                clientY: n.clientY,
                pageX: n.pageX ? n.pageX : n.clientX,
                pageY: n.pageY ? n.pageY : n.clientY,
                deltaMode: "MozMousePixelScroll" == n.type ? 0 : 1,
                deltaX: 0,
                deltaZ: 0
            };
            "mousewheel" == t.MouseTracker.wheelEventName ? i.deltaY = -n.wheelDelta / t.DEFAULT_SETTINGS.pixelsPerWheelLine : i.deltaY = n.detail, x(e, i, n)
        }

        function x(e, n, i) {
            var r = 0;
            r = n.deltaY < 0 ? 1 : -1, e.scrollHandler && !1 === e.scrollHandler({
                eventSource: e,
                pointerType: "mouse",
                position: c(n, e.element),
                scroll: r,
                shift: n.shiftKey,
                isTouchEvent: !1,
                originalEvent: i,
                preventDefaultAction: !1,
                userData: e.userData
            }) && t.cancelEvent(i)
        }

        function T(t, e) {
            if (t === e) return !1;
            for (; e && e !== t;) e = e.parentNode;
            return e === t
        }

        function b(e, n) {
            n = t.getEvent(n), P(e, n)
        }

        function S(e, n) {
            n = t.getEvent(n), n.currentTarget === n.relatedTarget || T(n.currentTarget, n.relatedTarget) || P(e, n)
        }

        function P(e, n) {
            st(e, n, [{
                id: t.MouseTracker.mousePointerId,
                type: "mouse",
                isPrimary: !0,
                currentPos: l(n),
                currentTime: t.now()
            }])
        }

        function C(e, n) {
            n = t.getEvent(n), R(e, n)
        }

        function E(e, n) {
            n = t.getEvent(n), n.currentTarget === n.relatedTarget || T(n.currentTarget, n.relatedTarget) || R(e, n)
        }

        function R(e, n) {
            at(e, n, [{
                id: t.MouseTracker.mousePointerId,
                type: "mouse",
                isPrimary: !0,
                currentPos: l(n),
                currentTime: t.now()
            }])
        }

        function k(e) {
            return t.Browser.vendor === t.BROWSERS.IE && t.Browser.version < 9 ? 1 === e ? 0 : 2 === e ? 2 : 4 === e ? 1 : -1 : e
        }

        function O(e, n) {
            var i;
            n = t.getEvent(n), i = {
                id: t.MouseTracker.mousePointerId,
                type: "mouse",
                isPrimary: !0,
                currentPos: l(n),
                currentTime: t.now()
            }, lt(e, n, [i], k(n.button)) && (t.stopEvent(n), o(e, "mouse")), (e.clickHandler || e.dblClickHandler || e.pressHandler || e.dragHandler || e.dragEndHandler) && t.cancelEvent(n)
        }

        function I(t, e) {
            $(t, e)
        }

        function A(e, n) {
            $(e, n), t.stopEvent(n)
        }

        function $(e, n) {
            var i;
            n = t.getEvent(n), i = {
                id: t.MouseTracker.mousePointerId,
                type: "mouse",
                isPrimary: !0,
                currentPos: l(n),
                currentTime: t.now()
            }, ct(e, n, [i], k(n.button)) && s(e, "mouse")
        }

        function D(t, e) {
            F(t, e)
        }

        function M(e, n) {
            F(e, n), t.stopEvent(n)
        }

        function F(e, n) {
            var i;
            n = t.getEvent(n), i = {
                id: t.MouseTracker.mousePointerId,
                type: "mouse",
                isPrimary: !0,
                currentPos: l(n),
                currentTime: t.now()
            }, ut(e, n, [i])
        }

        function L(t, e, n) {
            var i, r = n.getLength(), o = [];
            if ("touch" === n.type || n.contacts > 0) {
                for (i = 0; i < r; i++) o.push(n.getByIndex(i));
                o.length > 0 && (ct(t, e, o, 0), n.captureCount = 1, s(t, n.type), at(t, e, o))
            }
        }

        function B(e, n) {
            var i, r, s, a, c = n.changedTouches.length, u = [], h = e.getActivePointersListByType("touch");
            for (i = t.now(), h.getLength() > n.touches.length - c && (t.console.warn("Tracked touch contact count doesn't match event.touches.length. Removing all tracked touch pointers."), L(e, n, h)), r = 0; r < c; r++) u.push({
                id: n.changedTouches[r].identifier,
                type: "touch",
                currentPos: l(n.changedTouches[r]),
                currentTime: i
            });
            for (st(e, n, u), r = 0; r < pt.length; r++) if (pt[r] !== e && pt[r].isTracking() && T(pt[r].element, e.element)) {
                for (a = [], s = 0; s < c; s++) a.push({
                    id: n.changedTouches[s].identifier,
                    type: "touch",
                    currentPos: l(n.changedTouches[s]),
                    currentTime: i
                });
                st(pt[r], n, a)
            }
            lt(e, n, u, 0) && (t.stopEvent(n), o(e, "touch", c)), t.cancelEvent(n)
        }

        function H(t, e) {
            z(t, e)
        }

        function N(e, n) {
            z(e, n), t.stopEvent(n)
        }

        function z(e, n) {
            var i, r, o, a, c = n.changedTouches.length, u = [];
            for (i = t.now(), r = 0; r < c; r++) u.push({
                id: n.changedTouches[r].identifier,
                type: "touch",
                currentPos: l(n.changedTouches[r]),
                currentTime: i
            });
            for (ct(e, n, u, 0) && s(e, "touch", c), at(e, n, u), r = 0; r < pt.length; r++) if (pt[r] !== e && pt[r].isTracking() && T(pt[r].element, e.element)) {
                for (a = [], o = 0; o < c; o++) a.push({
                    id: n.changedTouches[o].identifier,
                    type: "touch",
                    currentPos: l(n.changedTouches[o]),
                    currentTime: i
                });
                at(pt[r], n, a)
            }
            t.cancelEvent(n)
        }

        function j(t, e) {
            U(t, e)
        }

        function V(e, n) {
            U(e, n), t.stopEvent(n)
        }

        function U(e, n) {
            var i, r = n.changedTouches.length, o = [];
            for (i = 0; i < r; i++) o.push({
                id: n.changedTouches[i].identifier,
                type: "touch",
                currentPos: l(n.changedTouches[i]),
                currentTime: t.now()
            });
            ut(e, n, o), t.cancelEvent(n)
        }

        function W(t, e) {
            L(t, e, t.getActivePointersListByType("touch"))
        }

        function q(t, e) {
            return e.stopPropagation(), e.preventDefault(), !1
        }

        function G(t, e) {
            return e.stopPropagation(), e.preventDefault(), !1
        }

        function Z(e, n) {
            var i;
            n.currentTarget === n.relatedTarget || T(n.currentTarget, n.relatedTarget) || (i = {
                id: n.pointerId,
                type: a(n),
                isPrimary: n.isPrimary,
                currentPos: l(n),
                currentTime: t.now()
            }, st(e, n, [i]))
        }

        function X(e, n) {
            var i;
            n.currentTarget === n.relatedTarget || T(n.currentTarget, n.relatedTarget) || (i = {
                id: n.pointerId,
                type: a(n),
                isPrimary: n.isPrimary,
                currentPos: l(n),
                currentTime: t.now()
            }, at(e, n, [i]))
        }

        function K(e, n) {
            var i;
            i = {
                id: n.pointerId,
                type: a(n),
                isPrimary: n.isPrimary,
                currentPos: l(n),
                currentTime: t.now()
            }, lt(e, n, [i], n.button) && (t.stopEvent(n), o(e, i.type)), (e.clickHandler || e.dblClickHandler || e.pressHandler || e.dragHandler || e.dragEndHandler || e.pinchHandler) && t.cancelEvent(n)
        }

        function Y(t, e) {
            Q(t, e)
        }

        function J(e, n) {
            e.getActivePointersListByType(a(n)).getById(n.pointerId) && Q(e, n), t.stopEvent(n)
        }

        function Q(e, n) {
            var i;
            i = {
                id: n.pointerId,
                type: a(n),
                isPrimary: n.isPrimary,
                currentPos: l(n),
                currentTime: t.now()
            }, ct(e, n, [i], n.button) && s(e, i.type)
        }

        function tt(t, e) {
            nt(t, e)
        }

        function et(e, n) {
            e.getActivePointersListByType(a(n)).getById(n.pointerId) && nt(e, n), t.stopEvent(n)
        }

        function nt(e, n) {
            var i;
            i = {
                id: n.pointerId,
                type: a(n),
                isPrimary: n.isPrimary,
                currentPos: l(n),
                currentTime: t.now()
            }, ut(e, n, [i])
        }

        function it(t, e) {
            var n;
            n = {id: e.pointerId, type: a(e)}, ht(t, e, [n])
        }

        function rt(t, e) {
            return e.hasOwnProperty("isPrimary") || (0 === t.getLength() ? e.isPrimary = !0 : e.isPrimary = !1), e.speed = 0, e.direction = 0, e.contactPos = e.currentPos, e.contactTime = e.currentTime, e.lastPos = e.currentPos, e.lastTime = e.currentTime, t.add(e)
        }

        function ot(t, e) {
            var n, i;
            return t.getById(e.id) ? (n = t.removeById(e.id), e.hasOwnProperty("isPrimary") || (i = t.getPrimary()) || (i = t.getByIndex(0)) && (i.isPrimary = !0)) : n = t.getLength(), n
        }

        function st(e, n, i) {
            var r, o, s, a = e.getActivePointersListByType(i[0].type), l = i.length;
            for (r = 0; r < l; r++) o = i[r], s = a.getById(o.id), s ? (s.insideElement = !0, s.lastPos = s.currentPos, s.lastTime = s.currentTime, s.currentPos = o.currentPos, s.currentTime = o.currentTime, o = s) : (o.captured = !1, o.insideElementPressed = !1, o.insideElement = !0, rt(a, o)), e.enterHandler && !1 === e.enterHandler({
                eventSource: e,
                pointerType: o.type,
                position: u(o.currentPos, e.element),
                buttons: a.buttons,
                pointers: e.getActivePointerCount(),
                insideElementPressed: o.insideElementPressed,
                buttonDownAny: 0 !== a.buttons,
                isTouchEvent: "touch" === o.type,
                originalEvent: n,
                preventDefaultAction: !1,
                userData: e.userData
            }) && t.cancelEvent(n)
        }

        function at(e, n, i) {
            var r, o, s, a = e.getActivePointersListByType(i[0].type), l = i.length;
            for (r = 0; r < l; r++) o = i[r], s = a.getById(o.id), s && (s.captured ? (s.insideElement = !1, s.lastPos = s.currentPos, s.lastTime = s.currentTime, s.currentPos = o.currentPos, s.currentTime = o.currentTime) : ot(a, s), o = s), e.exitHandler && !1 === e.exitHandler({
                eventSource: e,
                pointerType: o.type,
                position: u(o.currentPos, e.element),
                buttons: a.buttons,
                pointers: e.getActivePointerCount(),
                insideElementPressed: !!s && s.insideElementPressed,
                buttonDownAny: 0 !== a.buttons,
                isTouchEvent: "touch" === o.type,
                originalEvent: n,
                preventDefaultAction: !1,
                userData: e.userData
            }) && t.cancelEvent(n)
        }

        function lt(e, n, i, r) {
            var o, s, a, l = vt[e.hash], c = e.getActivePointersListByType(i[0].type), d = i.length;
            void 0 !== n.buttons ? c.buttons = n.buttons : t.Browser.vendor === t.BROWSERS.IE && t.Browser.version < 9 ? 0 === r ? c.buttons += 1 : 1 === r ? c.buttons += 4 : 2 === r ? c.buttons += 2 : 3 === r ? c.buttons += 8 : 4 === r ? c.buttons += 16 : 5 === r && (c.buttons += 32) : 0 === r ? c.buttons |= 1 : 1 === r ? c.buttons |= 4 : 2 === r ? c.buttons |= 2 : 3 === r ? c.buttons |= 8 : 4 === r ? c.buttons |= 16 : 5 === r && (c.buttons |= 32);
            var f = e.getActivePointersListsExceptType(i[0].type);
            for (o = 0; o < f.length; o++) L(e, n, f[o]);
            if (0 !== r) return e.nonPrimaryPressHandler && !1 === e.nonPrimaryPressHandler({
                eventSource: e,
                pointerType: i[0].type,
                position: u(i[0].currentPos, e.element),
                button: r,
                buttons: c.buttons,
                isTouchEvent: "touch" === i[0].type,
                originalEvent: n,
                preventDefaultAction: !1,
                userData: e.userData
            }) && t.cancelEvent(n), !1;
            for (o = 0; o < d; o++) s = i[o], a = c.getById(s.id), a ? (a.captured = !0, a.insideElementPressed = !0, a.insideElement = !0, a.contactPos = s.currentPos, a.contactTime = s.currentTime, a.lastPos = a.currentPos, a.lastTime = a.currentTime, a.currentPos = s.currentPos, a.currentTime = s.currentTime, s = a) : (s.captured = !0, s.insideElementPressed = !0, s.insideElement = !0, rt(c, s)), c.addContact(), (e.dragHandler || e.dragEndHandler || e.pinchHandler) && t.MouseTracker.gesturePointVelocityTracker.addPoint(e, s), 1 === c.contacts ? e.pressHandler && !1 === e.pressHandler({
                eventSource: e,
                pointerType: s.type,
                position: u(s.contactPos, e.element),
                buttons: c.buttons,
                isTouchEvent: "touch" === s.type,
                originalEvent: n,
                preventDefaultAction: !1,
                userData: e.userData
            }) && t.cancelEvent(n) : 2 === c.contacts && e.pinchHandler && "touch" === s.type && (l.pinchGPoints = c.asArray(), l.lastPinchDist = l.currentPinchDist = l.pinchGPoints[0].currentPos.distanceTo(l.pinchGPoints[1].currentPos), l.lastPinchCenter = l.currentPinchCenter = h(l.pinchGPoints[0].currentPos, l.pinchGPoints[1].currentPos));
            return !0
        }

        function ct(e, n, i, r) {
            var o, s, a, l, c, d, f = vt[e.hash], p = e.getActivePointersListByType(i[0].type), v = i.length, g = !1,
                m = !1;
            if (void 0 !== n.buttons ? p.buttons = n.buttons : t.Browser.vendor === t.BROWSERS.IE && t.Browser.version < 9 ? 0 === r ? p.buttons -= 1 : 1 === r ? p.buttons -= 4 : 2 === r ? p.buttons -= 2 : 3 === r ? p.buttons -= 8 : 4 === r ? p.buttons -= 16 : 5 === r && (p.buttons -= 32) : 0 === r ? p.buttons ^= -2 : 1 === r ? p.buttons ^= -5 : 2 === r ? p.buttons ^= -3 : 3 === r ? p.buttons ^= -9 : 4 === r ? p.buttons ^= -17 : 5 === r && (p.buttons ^= -33), 0 !== r) {
                e.nonPrimaryReleaseHandler && !1 === e.nonPrimaryReleaseHandler({
                    eventSource: e,
                    pointerType: i[0].type,
                    position: u(i[0].currentPos, e.element),
                    button: r,
                    buttons: p.buttons,
                    isTouchEvent: "touch" === i[0].type,
                    originalEvent: n,
                    preventDefaultAction: !1,
                    userData: e.userData
                }) && t.cancelEvent(n);
                return L(e, n, e.getActivePointersListByType("mouse")), !1
            }
            for (a = 0; a < v; a++) l = i[a], (c = p.getById(l.id)) && (c.captured && (c.captured = !1, g = !0, m = !0), c.lastPos = c.currentPos, c.lastTime = c.currentTime, c.currentPos = l.currentPos, c.currentTime = l.currentTime, c.insideElement || ot(p, c), o = c.currentPos, s = c.currentTime, m ? (p.removeContact(), (e.dragHandler || e.dragEndHandler || e.pinchHandler) && t.MouseTracker.gesturePointVelocityTracker.removePoint(e, c), 0 === p.contacts ? (e.releaseHandler && !1 === e.releaseHandler({
                eventSource: e,
                pointerType: c.type,
                position: u(o, e.element),
                buttons: p.buttons,
                insideElementPressed: c.insideElementPressed,
                insideElementReleased: c.insideElement,
                isTouchEvent: "touch" === c.type,
                originalEvent: n,
                preventDefaultAction: !1,
                userData: e.userData
            }) && t.cancelEvent(n), e.dragEndHandler && !c.currentPos.equals(c.contactPos) && !1 === e.dragEndHandler({
                eventSource: e,
                pointerType: c.type,
                position: u(c.currentPos, e.element),
                speed: c.speed,
                direction: c.direction,
                shift: n.shiftKey,
                isTouchEvent: "touch" === c.type,
                originalEvent: n,
                preventDefaultAction: !1,
                userData: e.userData
            }) && t.cancelEvent(n), (e.clickHandler || e.dblClickHandler) && c.insideElement && (d = s - c.contactTime <= e.clickTimeThreshold && c.contactPos.distanceTo(o) <= e.clickDistThreshold, e.clickHandler && !1 === e.clickHandler({
                eventSource: e,
                pointerType: c.type,
                position: u(c.currentPos, e.element),
                quick: d,
                shift: n.shiftKey,
                isTouchEvent: "touch" === c.type,
                originalEvent: n,
                preventDefaultAction: !1,
                userData: e.userData
            }) && t.cancelEvent(n), e.dblClickHandler && d && (p.clicks++, 1 === p.clicks ? (f.lastClickPos = o, f.dblClickTimeOut = setTimeout(function () {
                p.clicks = 0
            }, e.dblClickTimeThreshold)) : 2 === p.clicks && (clearTimeout(f.dblClickTimeOut), p.clicks = 0, f.lastClickPos.distanceTo(o) <= e.dblClickDistThreshold && !1 === e.dblClickHandler({
                eventSource: e,
                pointerType: c.type,
                position: u(c.currentPos, e.element),
                shift: n.shiftKey,
                isTouchEvent: "touch" === c.type,
                originalEvent: n,
                preventDefaultAction: !1,
                userData: e.userData
            }) && t.cancelEvent(n), f.lastClickPos = null)))) : 2 === p.contacts && e.pinchHandler && "touch" === c.type && (f.pinchGPoints = p.asArray(), f.lastPinchDist = f.currentPinchDist = f.pinchGPoints[0].currentPos.distanceTo(f.pinchGPoints[1].currentPos), f.lastPinchCenter = f.currentPinchCenter = h(f.pinchGPoints[0].currentPos, f.pinchGPoints[1].currentPos))) : e.releaseHandler && !1 === e.releaseHandler({
                eventSource: e,
                pointerType: c.type,
                position: u(o, e.element),
                buttons: p.buttons,
                insideElementPressed: c.insideElementPressed,
                insideElementReleased: c.insideElement,
                isTouchEvent: "touch" === c.type,
                originalEvent: n,
                preventDefaultAction: !1,
                userData: e.userData
            }) && t.cancelEvent(n));
            return g
        }

        function ut(e, n, i) {
            var r, o, s, a, l, c = vt[e.hash], d = e.getActivePointersListByType(i[0].type), f = i.length;
            for (void 0 !== n.buttons && (d.buttons = n.buttons), r = 0; r < f; r++) o = i[r], s = d.getById(o.id), s ? (o.hasOwnProperty("isPrimary") && (s.isPrimary = o.isPrimary), s.lastPos = s.currentPos, s.lastTime = s.currentTime, s.currentPos = o.currentPos, s.currentTime = o.currentTime) : (o.captured = !1, o.insideElementPressed = !1, o.insideElement = !0, rt(d, o));
            e.stopHandler && "mouse" === i[0].type && (clearTimeout(e.stopTimeOut), e.stopTimeOut = setTimeout(function () {
                dt(e, n, i[0].type)
            }, e.stopDelay)), 0 === d.contacts ? e.moveHandler && !1 === e.moveHandler({
                eventSource: e,
                pointerType: i[0].type,
                position: u(i[0].currentPos, e.element),
                buttons: d.buttons,
                isTouchEvent: "touch" === i[0].type,
                originalEvent: n,
                preventDefaultAction: !1,
                userData: e.userData
            }) && t.cancelEvent(n) : 1 === d.contacts ? (e.moveHandler && (s = d.asArray()[0], !1 === e.moveHandler({
                eventSource: e,
                pointerType: s.type,
                position: u(s.currentPos, e.element),
                buttons: d.buttons,
                isTouchEvent: "touch" === s.type,
                originalEvent: n,
                preventDefaultAction: !1,
                userData: e.userData
            }) && t.cancelEvent(n)), e.dragHandler && (s = d.asArray()[0], l = s.currentPos.minus(s.lastPos), !1 === e.dragHandler({
                eventSource: e,
                pointerType: s.type,
                position: u(s.currentPos, e.element),
                buttons: d.buttons,
                delta: l,
                speed: s.speed,
                direction: s.direction,
                shift: n.shiftKey,
                isTouchEvent: "touch" === s.type,
                originalEvent: n,
                preventDefaultAction: !1,
                userData: e.userData
            }) && t.cancelEvent(n))) : 2 === d.contacts && (e.moveHandler && (a = d.asArray(), !1 === e.moveHandler({
                eventSource: e,
                pointerType: a[0].type,
                position: u(h(a[0].currentPos, a[1].currentPos), e.element),
                buttons: d.buttons,
                isTouchEvent: "touch" === a[0].type,
                originalEvent: n,
                preventDefaultAction: !1,
                userData: e.userData
            }) && t.cancelEvent(n)), e.pinchHandler && "touch" === i[0].type && (l = c.pinchGPoints[0].currentPos.distanceTo(c.pinchGPoints[1].currentPos)) != c.currentPinchDist && (c.lastPinchDist = c.currentPinchDist, c.currentPinchDist = l, c.lastPinchCenter = c.currentPinchCenter, c.currentPinchCenter = h(c.pinchGPoints[0].currentPos, c.pinchGPoints[1].currentPos), !1 === e.pinchHandler({
                eventSource: e,
                pointerType: "touch",
                gesturePoints: c.pinchGPoints,
                lastCenter: u(c.lastPinchCenter, e.element),
                center: u(c.currentPinchCenter, e.element),
                lastDistance: c.lastPinchDist,
                distance: c.currentPinchDist,
                shift: n.shiftKey,
                originalEvent: n,
                preventDefaultAction: !1,
                userData: e.userData
            }) && t.cancelEvent(n)))
        }

        function ht(t, e, n) {
            ct(t, e, n, 0), at(t, e, n)
        }

        function dt(t, e, n) {
            t.stopHandler && t.stopHandler({
                eventSource: t,
                pointerType: n,
                position: c(e, t.element),
                buttons: t.getActivePointersListByType(n).buttons,
                isTouchEvent: "touch" === n,
                originalEvent: e,
                preventDefaultAction: !1,
                userData: t.userData
            })
        }

        function ft(t) {
            try {
                return t.addEventListener && t.removeEventListener
            } catch (t) {
                return !1
            }
        }

        var pt = [], vt = {};
        t.MouseTracker = function (e) {
            pt.push(this);
            var n = arguments;
            t.isPlainObject(e) || (e = {
                element: n[0],
                clickTimeThreshold: n[1],
                clickDistThreshold: n[2]
            }), this.hash = Math.random(), this.element = t.getElement(e.element), this.clickTimeThreshold = e.clickTimeThreshold || t.DEFAULT_SETTINGS.clickTimeThreshold, this.clickDistThreshold = e.clickDistThreshold || t.DEFAULT_SETTINGS.clickDistThreshold, this.dblClickTimeThreshold = e.dblClickTimeThreshold || t.DEFAULT_SETTINGS.dblClickTimeThreshold, this.dblClickDistThreshold = e.dblClickDistThreshold || t.DEFAULT_SETTINGS.dblClickDistThreshold, this.userData = e.userData || null, this.stopDelay = e.stopDelay || 50, this.enterHandler = e.enterHandler || null, this.exitHandler = e.exitHandler || null, this.pressHandler = e.pressHandler || null, this.nonPrimaryPressHandler = e.nonPrimaryPressHandler || null, this.releaseHandler = e.releaseHandler || null, this.nonPrimaryReleaseHandler = e.nonPrimaryReleaseHandler || null, this.moveHandler = e.moveHandler || null, this.scrollHandler = e.scrollHandler || null, this.clickHandler = e.clickHandler || null, this.dblClickHandler = e.dblClickHandler || null, this.dragHandler = e.dragHandler || null, this.dragEndHandler = e.dragEndHandler || null, this.pinchHandler = e.pinchHandler || null, this.stopHandler = e.stopHandler || null, this.keyDownHandler = e.keyDownHandler || null, this.keyUpHandler = e.keyUpHandler || null, this.keyHandler = e.keyHandler || null, this.focusHandler = e.focusHandler || null, this.blurHandler = e.blurHandler || null;
            var i = this;
            vt[this.hash] = {
                click: function (t) {
                    d(i, t)
                },
                dblclick: function (t) {
                    f(i, t)
                },
                keydown: function (t) {
                    p(i, t)
                },
                keyup: function (t) {
                    v(i, t)
                },
                keypress: function (t) {
                    g(i, t)
                },
                focus: function (t) {
                    m(i, t)
                },
                blur: function (t) {
                    y(i, t)
                },
                wheel: function (t) {
                    w(i, t)
                },
                mousewheel: function (t) {
                    _(i, t)
                },
                DOMMouseScroll: function (t) {
                    _(i, t)
                },
                MozMousePixelScroll: function (t) {
                    _(i, t)
                },
                mouseenter: function (t) {
                    b(i, t)
                },
                mouseleave: function (t) {
                    C(i, t)
                },
                mouseover: function (t) {
                    S(i, t)
                },
                mouseout: function (t) {
                    E(i, t)
                },
                mousedown: function (t) {
                    O(i, t)
                },
                mouseup: function (t) {
                    I(i, t)
                },
                mouseupcaptured: function (t) {
                    A(i, t)
                },
                mousemove: function (t) {
                    D(i, t)
                },
                mousemovecaptured: function (t) {
                    M(i, t)
                },
                touchstart: function (t) {
                    B(i, t)
                },
                touchend: function (t) {
                    H(i, t)
                },
                touchendcaptured: function (t) {
                    N(i, t)
                },
                touchmove: function (t) {
                    j(i, t)
                },
                touchmovecaptured: function (t) {
                    V(i, t)
                },
                touchcancel: function (t) {
                    W(i, t)
                },
                gesturestart: function (t) {
                    q(i, t)
                },
                gesturechange: function (t) {
                    G(i, t)
                },
                pointerover: function (t) {
                    Z(i, t)
                },
                MSPointerOver: function (t) {
                    Z(i, t)
                },
                pointerout: function (t) {
                    X(i, t)
                },
                MSPointerOut: function (t) {
                    X(i, t)
                },
                pointerdown: function (t) {
                    K(i, t)
                },
                MSPointerDown: function (t) {
                    K(i, t)
                },
                pointerup: function (t) {
                    Y(i, t)
                },
                MSPointerUp: function (t) {
                    Y(i, t)
                },
                pointermove: function (t) {
                    tt(i, t)
                },
                MSPointerMove: function (t) {
                    tt(i, t)
                },
                pointercancel: function (t) {
                    it(i, t)
                },
                MSPointerCancel: function (t) {
                    it(i, t)
                },
                pointerupcaptured: function (t) {
                    J(i, t)
                },
                pointermovecaptured: function (t) {
                    et(i, t)
                },
                tracking: !1,
                activePointersLists: [],
                lastClickPos: null,
                dblClickTimeOut: null,
                pinchGPoints: [],
                lastPinchDist: 0,
                currentPinchDist: 0,
                lastPinchCenter: null,
                currentPinchCenter: null
            }, e.startDisabled || this.setTracking(!0)
        }, t.MouseTracker.prototype = {
            destroy: function () {
                var t;
                for (i(this), this.element = null, t = 0; t < pt.length; t++) if (pt[t] === this) {
                    pt.splice(t, 1);
                    break
                }
                vt[this.hash] = null, delete vt[this.hash]
            }, isTracking: function () {
                return vt[this.hash].tracking
            }, setTracking: function (t) {
                return t ? n(this) : i(this), this
            }, getActivePointersListsExceptType: function (t) {
                for (var e = vt[this.hash], n = [], i = 0; i < e.activePointersLists.length; ++i) e.activePointersLists[i].type !== t && n.push(e.activePointersLists[i]);
                return n
            }, getActivePointersListByType: function (e) {
                var n, i, r = vt[this.hash], o = r.activePointersLists.length;
                for (n = 0; n < o; n++) if (r.activePointersLists[n].type === e) return r.activePointersLists[n];
                return i = new t.MouseTracker.GesturePointList(e), r.activePointersLists.push(i), i
            }, getActivePointerCount: function () {
                var t, e = vt[this.hash], n = e.activePointersLists.length, i = 0;
                for (t = 0; t < n; t++) i += e.activePointersLists[t].getLength();
                return i
            }, enterHandler: function () {
            }, exitHandler: function () {
            }, pressHandler: function () {
            }, nonPrimaryPressHandler: function () {
            }, releaseHandler: function () {
            }, nonPrimaryReleaseHandler: function () {
            }, moveHandler: function () {
            }, scrollHandler: function () {
            }, clickHandler: function () {
            }, dblClickHandler: function () {
            }, dragHandler: function () {
            }, dragEndHandler: function () {
            }, pinchHandler: function () {
            }, stopHandler: function () {
            }, keyDownHandler: function () {
            }, keyUpHandler: function () {
            }, keyHandler: function () {
            }, focusHandler: function () {
            }, blurHandler: function () {
            }
        }, t.MouseTracker.resetAllMouseTrackers = function () {
            for (var t = 0; t < pt.length; t++) pt[t].isTracking() && (pt[t].setTracking(!1), pt[t].setTracking(!0))
        }, t.MouseTracker.gesturePointVelocityTracker = function () {
            var e = [], n = 0, i = 0, r = function (t, e) {
                return t.hash.toString() + e.type + e.id.toString()
            }, o = function () {
                var n, r, o, s, a, l, c = e.length, u = t.now();
                for (s = u - i, i = u, n = 0; n < c; n++) r = e[n], o = r.gPoint, o.direction = Math.atan2(o.currentPos.y - r.lastPos.y, o.currentPos.x - r.lastPos.x), a = r.lastPos.distanceTo(o.currentPos), r.lastPos = o.currentPos, l = 1e3 * a / (s + 1), o.speed = .75 * l + .25 * o.speed
            };
            return {
                addPoint: function (s, a) {
                    var l = r(s, a);
                    e.push({
                        guid: l,
                        gPoint: a,
                        lastPos: a.currentPos
                    }), 1 === e.length && (i = t.now(), n = window.setInterval(o, 50))
                }, removePoint: function (t, i) {
                    var o, s = r(t, i), a = e.length;
                    for (o = 0; o < a; o++) if (e[o].guid === s) {
                        e.splice(o, 1), 0 === --a && window.clearInterval(n);
                        break
                    }
                }
            }
        }(), t.MouseTracker.captureElement = document, t.MouseTracker.wheelEventName = t.Browser.vendor == t.BROWSERS.IE && t.Browser.version > 8 || "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll", t.MouseTracker.supportsMouseCapture = function () {
            var e = document.createElement("div");
            return t.isFunction(e.setCapture) && t.isFunction(e.releaseCapture)
        }(), t.MouseTracker.subscribeEvents = ["click", "dblclick", "keydown", "keyup", "keypress", "focus", "blur", t.MouseTracker.wheelEventName], "DOMMouseScroll" == t.MouseTracker.wheelEventName && t.MouseTracker.subscribeEvents.push("MozMousePixelScroll"), window.PointerEvent && (window.navigator.pointerEnabled || t.Browser.vendor !== t.BROWSERS.IE) ? (t.MouseTracker.havePointerEvents = !0, t.MouseTracker.subscribeEvents.push("pointerover", "pointerout", "pointerdown", "pointerup", "pointermove", "pointercancel"), t.MouseTracker.unprefixedPointerEvents = !0, navigator.maxTouchPoints ? t.MouseTracker.maxTouchPoints = navigator.maxTouchPoints : t.MouseTracker.maxTouchPoints = 0, t.MouseTracker.haveMouseEnter = !1) : window.MSPointerEvent && window.navigator.msPointerEnabled ? (t.MouseTracker.havePointerEvents = !0, t.MouseTracker.subscribeEvents.push("MSPointerOver", "MSPointerOut", "MSPointerDown", "MSPointerUp", "MSPointerMove", "MSPointerCancel"), t.MouseTracker.unprefixedPointerEvents = !1, navigator.msMaxTouchPoints ? t.MouseTracker.maxTouchPoints = navigator.msMaxTouchPoints : t.MouseTracker.maxTouchPoints = 0, t.MouseTracker.haveMouseEnter = !1) : (t.MouseTracker.havePointerEvents = !1, t.Browser.vendor === t.BROWSERS.IE && t.Browser.version < 9 ? (t.MouseTracker.subscribeEvents.push("mouseenter", "mouseleave"), t.MouseTracker.haveMouseEnter = !0) : (t.MouseTracker.subscribeEvents.push("mouseover", "mouseout"), t.MouseTracker.haveMouseEnter = !1), t.MouseTracker.subscribeEvents.push("mousedown", "mouseup", "mousemove"), "ontouchstart" in window && t.MouseTracker.subscribeEvents.push("touchstart", "touchend", "touchmove", "touchcancel"), "ongesturestart" in window && t.MouseTracker.subscribeEvents.push("gesturestart", "gesturechange"), t.MouseTracker.mousePointerId = "legacy-mouse", t.MouseTracker.maxTouchPoints = 10), t.MouseTracker.GesturePointList = function (t) {
            this._gPoints = [], this.type = t, this.buttons = 0, this.contacts = 0, this.clicks = 0, this.captureCount = 0
        }, t.MouseTracker.GesturePointList.prototype = {
            getLength: function () {
                return this._gPoints.length
            }, asArray: function () {
                return this._gPoints
            }, add: function (t) {
                return this._gPoints.push(t)
            }, removeById: function (t) {
                var e, n = this._gPoints.length;
                for (e = 0; e < n; e++) if (this._gPoints[e].id === t) {
                    this._gPoints.splice(e, 1);
                    break
                }
                return this._gPoints.length
            }, getByIndex: function (t) {
                return t < this._gPoints.length ? this._gPoints[t] : null
            }, getById: function (t) {
                var e, n = this._gPoints.length;
                for (e = 0; e < n; e++) if (this._gPoints[e].id === t) return this._gPoints[e];
                return null
            }, getPrimary: function (t) {
                var e, n = this._gPoints.length;
                for (e = 0; e < n; e++) if (this._gPoints[e].isPrimary) return this._gPoints[e];
                return null
            }, addContact: function () {
                ++this.contacts > 1 && ("mouse" === this.type || "pen" === this.type) && (this.contacts = 1)
            }, removeContact: function () {
                --this.contacts < 0 && (this.contacts = 0)
            }
        };
        var gt = function () {
            try {
                return window.self !== window.top
            } catch (t) {
                return !0
            }
        }()
    }(OpenSeadragon)
}, function (t, e) {
    !function (t) {
        t.Placement = t.freezeObject({
            CENTER: 0,
            TOP_LEFT: 1,
            TOP: 2,
            TOP_RIGHT: 3,
            RIGHT: 4,
            BOTTOM_RIGHT: 5,
            BOTTOM: 6,
            BOTTOM_LEFT: 7,
            LEFT: 8,
            properties: {
                0: {
                    isLeft: !1,
                    isHorizontallyCentered: !0,
                    isRight: !1,
                    isTop: !1,
                    isVerticallyCentered: !0,
                    isBottom: !1
                },
                1: {
                    isLeft: !0,
                    isHorizontallyCentered: !1,
                    isRight: !1,
                    isTop: !0,
                    isVerticallyCentered: !1,
                    isBottom: !1
                },
                2: {
                    isLeft: !1,
                    isHorizontallyCentered: !0,
                    isRight: !1,
                    isTop: !0,
                    isVerticallyCentered: !1,
                    isBottom: !1
                },
                3: {
                    isLeft: !1,
                    isHorizontallyCentered: !1,
                    isRight: !0,
                    isTop: !0,
                    isVerticallyCentered: !1,
                    isBottom: !1
                },
                4: {
                    isLeft: !1,
                    isHorizontallyCentered: !1,
                    isRight: !0,
                    isTop: !1,
                    isVerticallyCentered: !0,
                    isBottom: !1
                },
                5: {
                    isLeft: !1,
                    isHorizontallyCentered: !1,
                    isRight: !0,
                    isTop: !1,
                    isVerticallyCentered: !1,
                    isBottom: !0
                },
                6: {
                    isLeft: !1,
                    isHorizontallyCentered: !0,
                    isRight: !1,
                    isTop: !1,
                    isVerticallyCentered: !1,
                    isBottom: !0
                },
                7: {
                    isLeft: !0,
                    isHorizontallyCentered: !1,
                    isRight: !1,
                    isTop: !1,
                    isVerticallyCentered: !1,
                    isBottom: !0
                },
                8: {
                    isLeft: !0,
                    isHorizontallyCentered: !1,
                    isRight: !1,
                    isTop: !1,
                    isVerticallyCentered: !0,
                    isBottom: !1
                }
            }
        })
    }(OpenSeadragon)
}, function (t, e) {
    !function (t) {
        t.Point = function (t, e) {
            this.x = "number" == typeof t ? t : 0, this.y = "number" == typeof e ? e : 0
        }, t.Point.prototype = {
            clone: function () {
                return new t.Point(this.x, this.y)
            }, plus: function (e) {
                return new t.Point(this.x + e.x, this.y + e.y)
            }, minus: function (e) {
                return new t.Point(this.x - e.x, this.y - e.y)
            }, times: function (e) {
                return new t.Point(this.x * e, this.y * e)
            }, divide: function (e) {
                return new t.Point(this.x / e, this.y / e)
            }, negate: function () {
                return new t.Point(-this.x, -this.y)
            }, distanceTo: function (t) {
                return Math.sqrt(Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2))
            }, squaredDistanceTo: function (t) {
                return Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2)
            }, apply: function (e) {
                return new t.Point(e(this.x), e(this.y))
            }, equals: function (e) {
                return e instanceof t.Point && this.x === e.x && this.y === e.y
            }, rotate: function (e, n) {
                n = n || new t.Point(0, 0);
                var i, r;
                if (e % 90 == 0) {
                    switch (t.positiveModulo(e, 360)) {
                        case 0:
                            i = 1, r = 0;
                            break;
                        case 90:
                            i = 0, r = 1;
                            break;
                        case 180:
                            i = -1, r = 0;
                            break;
                        case 270:
                            i = 0, r = -1
                    }
                } else {
                    var o = e * Math.PI / 180;
                    i = Math.cos(o), r = Math.sin(o)
                }
                var s = i * (this.x - n.x) - r * (this.y - n.y) + n.x,
                    a = r * (this.x - n.x) + i * (this.y - n.y) + n.y;
                return new t.Point(s, a)
            }, toString: function () {
                return "(" + Math.round(100 * this.x) / 100 + "," + Math.round(100 * this.y) / 100 + ")"
            }
        }
    }(OpenSeadragon)
}, function (t, e) {
    !function (t) {
        function e(t, e) {
            return (1 - Math.exp(t * -e)) / (1 - Math.exp(-t))
        }

        t.Spring = function (e) {
            var n = arguments;
            "object" != typeof e && (e = {
                initial: n.length && "number" == typeof n[0] ? n[0] : void 0,
                springStiffness: n.length > 1 ? n[1].springStiffness : 5,
                animationTime: n.length > 1 ? n[1].animationTime : 1.5
            }), t.console.assert("number" == typeof e.springStiffness && 0 !== e.springStiffness, "[OpenSeadragon.Spring] options.springStiffness must be a non-zero number"), t.console.assert("number" == typeof e.animationTime && e.animationTime >= 0, "[OpenSeadragon.Spring] options.animationTime must be a number greater than or equal to 0"), e.exponential && (this._exponential = !0, delete e.exponential), t.extend(!0, this, e), this.current = {
                value: "number" == typeof this.initial ? this.initial : this._exponential ? 0 : 1,
                time: t.now()
            }, t.console.assert(!this._exponential || 0 !== this.current.value, "[OpenSeadragon.Spring] value must be non-zero for exponential springs"), this.start = {
                value: this.current.value,
                time: this.current.time
            }, this.target = {
                value: this.current.value,
                time: this.current.time
            }, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value))
        }, t.Spring.prototype = {
            resetTo: function (e) {
                t.console.assert(!this._exponential || 0 !== e, "[OpenSeadragon.Spring.resetTo] target must be non-zero for exponential springs"), this.start.value = this.target.value = this.current.value = e, this.start.time = this.target.time = this.current.time = t.now(), this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value))
            }, springTo: function (e) {
                t.console.assert(!this._exponential || 0 !== e, "[OpenSeadragon.Spring.springTo] target must be non-zero for exponential springs"), this.start.value = this.current.value, this.start.time = this.current.time, this.target.value = e, this.target.time = this.start.time + 1e3 * this.animationTime, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value))
            }, shiftBy: function (e) {
                this.start.value += e, this.target.value += e, this._exponential && (t.console.assert(0 !== this.target.value && 0 !== this.start.value, "[OpenSeadragon.Spring.shiftBy] spring value must be non-zero for exponential springs"), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value))
            }, setExponential: function (e) {
                this._exponential = e, this._exponential && (t.console.assert(0 !== this.current.value && 0 !== this.target.value && 0 !== this.start.value, "[OpenSeadragon.Spring.setExponential] spring value must be non-zero for exponential springs"), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value))
            }, update: function () {
                this.current.time = t.now();
                var n, i;
                this._exponential ? (n = this.start._logValue, i = this.target._logValue) : (n = this.start.value, i = this.target.value);
                var r = this.current.time >= this.target.time ? i : n + (i - n) * e(this.springStiffness, (this.current.time - this.start.time) / (this.target.time - this.start.time)),
                    o = this.current.value;
                return this._exponential ? this.current.value = Math.exp(r) : this.current.value = r, o != this.current.value
            }, isAtTargetValue: function () {
                return this.current.value === this.target.value
            }
        }
    }(OpenSeadragon)
}, function (t, e) {
    !function (t) {
        t.Tile = function (t, e, n, i, r, o, s, a, l, c) {
            this.level = t, this.x = e, this.y = n, this.bounds = i, this.sourceBounds = c, this.exists = r, this.url = o, this.context2D = s, this.loadWithAjax = a, this.ajaxHeaders = l, this.ajaxHeaders ? this.cacheKey = this.url + "+" + JSON.stringify(this.ajaxHeaders) : this.cacheKey = this.url, this.loaded = !1, this.loading = !1, this.element = null, this.imgElement = null, this.image = null, this.style = null, this.position = null, this.size = null, this.blendStart = null, this.opacity = null, this.squaredDistance = null, this.visibility = null, this.beingDrawn = !1, this.lastTouchTime = 0, this.isRightMost = !1, this.isBottomMost = !1
        }, t.Tile.prototype = {
            toString: function () {
                return this.level + "/" + this.x + "_" + this.y
            }, _hasTransparencyChannel: function () {
                return !!this.context2D || this.url.match(".png")
            }, drawHTML: function (e) {
                return this.cacheImageRecord ? this.loaded ? (this.element || (this.element = t.makeNeutralElement("div"), this.imgElement = this.cacheImageRecord.getImage().cloneNode(), this.imgElement.style.msInterpolationMode = "nearest-neighbor", this.imgElement.style.width = "100%", this.imgElement.style.height = "100%", this.style = this.element.style, this.style.position = "absolute"), this.element.parentNode != e && e.appendChild(this.element), this.imgElement.parentNode != this.element && this.element.appendChild(this.imgElement), this.style.top = this.position.y + "px", this.style.left = this.position.x + "px", this.style.height = this.size.y + "px", this.style.width = this.size.x + "px", void t.setElementOpacity(this.element, this.opacity)) : void t.console.warn("Attempting to draw tile %s when it's not yet loaded.", this.toString()) : void t.console.warn("[Tile.drawHTML] attempting to draw tile %s when it's not cached", this.toString())
            }, drawCanvas: function (e, n, i, r) {
                var o, s = this.position.times(t.pixelDensityRatio), a = this.size.times(t.pixelDensityRatio);
                if (!this.context2D && !this.cacheImageRecord) return void t.console.warn("[Tile.drawCanvas] attempting to draw tile %s when it's not cached", this.toString());
                if (o = this.context2D || this.cacheImageRecord.getRenderedContext(), !this.loaded || !o) return void t.console.warn("Attempting to draw tile %s when it's not yet loaded.", this.toString());
                e.save(), e.globalAlpha = this.opacity, "number" == typeof i && 1 !== i && (s = s.times(i), a = a.times(i)), r instanceof t.Point && (s = s.plus(r)), 1 === e.globalAlpha && this._hasTransparencyChannel() && e.clearRect(s.x, s.y, a.x, a.y), n({
                    context: e,
                    tile: this,
                    rendered: o
                });
                var l, c;
                this.sourceBounds ? (l = Math.min(this.sourceBounds.width, o.canvas.width), c = Math.min(this.sourceBounds.height, o.canvas.height)) : (l = o.canvas.width, c = o.canvas.height), e.drawImage(o.canvas, 0, 0, l, c, s.x, s.y, a.x, a.y), e.restore()
            }, getScaleForEdgeSmoothing: function () {
                var e;
                if (this.cacheImageRecord) e = this.cacheImageRecord.getRenderedContext(); else {
                    if (!this.context2D) return t.console.warn("[Tile.drawCanvas] attempting to get tile scale %s when tile's not cached", this.toString()), 1;
                    e = this.context2D
                }
                return e.canvas.width / (this.size.x * t.pixelDensityRatio)
            }, getTranslationForEdgeSmoothing: function (e, n, i) {
                var r = Math.max(1, Math.ceil((i.x - n.x) / 2)), o = Math.max(1, Math.ceil((i.y - n.y) / 2));
                return new t.Point(r, o).minus(this.position.times(t.pixelDensityRatio).times(e || 1).apply(function (t) {
                    return t % 1
                }))
            }, unload: function () {
                this.imgElement && this.imgElement.parentNode && this.imgElement.parentNode.removeChild(this.imgElement), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.imgElement = null, this.loaded = !1, this.loading = !1
            }
        }
    }(OpenSeadragon)
}, function (t, e) {
    !function (t) {
        var e = function (e) {
            t.console.assert(e, "[TileCache.cacheTile] options is required"), t.console.assert(e.tile, "[TileCache.cacheTile] options.tile is required"), t.console.assert(e.tiledImage, "[TileCache.cacheTile] options.tiledImage is required"), this.tile = e.tile, this.tiledImage = e.tiledImage
        }, n = function (e) {
            t.console.assert(e, "[ImageRecord] options is required"), t.console.assert(e.image, "[ImageRecord] options.image is required"), this._image = e.image, this._tiles = []
        };
        n.prototype = {
            destroy: function () {
                this._image = null, this._renderedContext = null, this._tiles = null
            }, getImage: function () {
                return this._image
            }, getRenderedContext: function () {
                if (!this._renderedContext) {
                    var t = document.createElement("canvas");
                    t.width = this._image.width, t.height = this._image.height, this._renderedContext = t.getContext("2d"), this._renderedContext.drawImage(this._image, 0, 0), this._image = null
                }
                return this._renderedContext
            }, setRenderedContext: function (e) {
                t.console.error("ImageRecord.setRenderedContext is deprecated. The rendered context should be created by the ImageRecord itself when calling ImageRecord.getRenderedContext."), this._renderedContext = e
            }, addTile: function (e) {
                t.console.assert(e, "[ImageRecord.addTile] tile is required"), this._tiles.push(e)
            }, removeTile: function (e) {
                for (var n = 0; n < this._tiles.length; n++) if (this._tiles[n] === e) return void this._tiles.splice(n, 1);
                t.console.warn("[ImageRecord.removeTile] trying to remove unknown tile", e)
            }, getTileCount: function () {
                return this._tiles.length
            }
        }, t.TileCache = function (e) {
            e = e || {}, this._maxImageCacheCount = e.maxImageCacheCount || t.DEFAULT_SETTINGS.maxImageCacheCount, this._tilesLoaded = [], this._imagesLoaded = [], this._imagesLoadedCount = 0
        }, t.TileCache.prototype = {
            numTilesLoaded: function () {
                return this._tilesLoaded.length
            }, cacheTile: function (i) {
                t.console.assert(i, "[TileCache.cacheTile] options is required"), t.console.assert(i.tile, "[TileCache.cacheTile] options.tile is required"), t.console.assert(i.tile.cacheKey, "[TileCache.cacheTile] options.tile.cacheKey is required"), t.console.assert(i.tiledImage, "[TileCache.cacheTile] options.tiledImage is required");
                var r = i.cutoff || 0, o = this._tilesLoaded.length, s = this._imagesLoaded[i.tile.cacheKey];
                if (s || (t.console.assert(i.image, "[TileCache.cacheTile] options.image is required to create an ImageRecord"), s = this._imagesLoaded[i.tile.cacheKey] = new n({image: i.image}), this._imagesLoadedCount++), s.addTile(i.tile), i.tile.cacheImageRecord = s, this._imagesLoadedCount > this._maxImageCacheCount) {
                    for (var a, l, c, u, h, d, f = null, p = -1, v = null, g = this._tilesLoaded.length - 1; g >= 0; g--) d = this._tilesLoaded[g], a = d.tile, a.level <= r || a.beingDrawn || (f ? (u = a.lastTouchTime, l = f.lastTouchTime, h = a.level, c = f.level, (u < l || u == l && h > c) && (f = a, p = g, v = d)) : (f = a, p = g, v = d));
                    f && p >= 0 && (this._unloadTile(v), o = p)
                }
                this._tilesLoaded[o] = new e({tile: i.tile, tiledImage: i.tiledImage})
            }, clearTilesFor: function (e) {
                t.console.assert(e, "[TileCache.clearTilesFor] tiledImage is required");
                for (var n, i = 0; i < this._tilesLoaded.length; ++i) n = this._tilesLoaded[i], n.tiledImage === e && (this._unloadTile(n), this._tilesLoaded.splice(i, 1), i--)
            }, getImageRecord: function (e) {
                return t.console.assert(e, "[TileCache.getImageRecord] cacheKey is required"), this._imagesLoaded[e]
            }, _unloadTile: function (e) {
                t.console.assert(e, "[TileCache._unloadTile] tileRecord is required");
                var n = e.tile, i = e.tiledImage;
                n.unload(), n.cacheImageRecord = null;
                var r = this._imagesLoaded[n.cacheKey];
                r.removeTile(n), r.getTileCount() || (r.destroy(), delete this._imagesLoaded[n.cacheKey], this._imagesLoadedCount--), i.viewer.raiseEvent("tile-unloaded", {
                    tile: n,
                    tiledImage: i
                })
            }
        }
    }(OpenSeadragon)
}, function (t, e) {
    !function (t) {
        function e(t, e, i, r, o, s, a, l, c) {
            var u = a.getBoundingBox().getTopLeft(), h = a.getBoundingBox().getBottomRight();
            t.viewer && t.viewer.raiseEvent("update-level", {
                tiledImage: t,
                havedrawn: e,
                level: r,
                opacity: o,
                visibility: s,
                drawArea: a,
                topleft: u,
                bottomright: h,
                currenttime: l,
                best: c
            }), d(t.coverage, r), d(t.loadingCoverage, r);
            for (var f = t._getCornerTiles(r, u, h), p = f.topLeft, v = f.bottomRight, g = t.source.getNumTiles(r), m = t.viewport.pixelFromPoint(t.viewport.getCenter()), y = p.x; y <= v.x; y++) for (var w = p.y; w <= v.y; w++) {
                if (!t.wrapHorizontal && !t.wrapVertical) {
                    var _ = t.source.getTileBounds(r, y, w);
                    if (null === a.intersection(_)) continue
                }
                c = n(t, i, e, y, w, r, o, s, m, g, l, c)
            }
            return c
        }

        function n(t, e, n, r, o, c, d, p, v, g, m, y) {
            var w = i(r, o, c, t, t.source, t.tilesMatrix, m, g, t._worldWidthCurrent, t._worldHeightCurrent), _ = n;
            t.viewer && t.viewer.raiseEvent("update-tile", {tiledImage: t, tile: w}), h(t.coverage, c, r, o, !1);
            var x = w.loaded || w.loading || u(t.loadingCoverage, c, r, o);
            if (h(t.loadingCoverage, c, r, o, x), !w.exists) return y;
            if (e && !_ && (u(t.coverage, c, r, o) ? h(t.coverage, c, r, o, !0) : _ = !0), !_) return y;
            if (a(w, t.source.tileOverlap, t.viewport, v, p, t), !w.loaded) if (w.context2D) s(t, w); else {
                var T = t._tileCache.getImageRecord(w.cacheKey);
                if (T) {
                    var b = T.getImage();
                    s(t, w, b)
                }
            }
            if (w.loaded) {
                l(t, w, r, o, c, d, m) && (t._needsDraw = !0)
            } else w.loading ? t._tilesLoading++ : x || (y = f(y, w));
            return y
        }

        function i(e, n, i, r, o, s, a, l, c, u) {
            var h, d, f, p, v, g, m, y, w;
            return s[i] || (s[i] = {}), s[i][e] || (s[i][e] = {}), s[i][e][n] || (h = (l.x + e % l.x) % l.x, d = (l.y + n % l.y) % l.y, f = o.getTileBounds(i, h, d), p = o.getTileBounds(i, h, d, !0), v = o.tileExists(i, h, d), g = o.getTileUrl(i, h, d), r.loadTilesWithAjax ? (m = o.getTileAjaxHeaders(i, h, d), t.isPlainObject(r.ajaxHeaders) && (m = t.extend({}, r.ajaxHeaders, m))) : m = null, y = o.getContext2D ? o.getContext2D(i, h, d) : void 0, f.x += (e - h) / l.x, f.y += u / c * ((n - d) / l.y), w = new t.Tile(i, e, n, f, v, g, y, r.loadTilesWithAjax, m, p), h === l.x - 1 && (w.isRightMost = !0), d === l.y - 1 && (w.isBottomMost = !0), s[i][e][n] = w), w = s[i][e][n], w.lastTouchTime = a, w
        }

        function r(t, e, n) {
            e.loading = !0, t._imageLoader.addJob({
                src: e.url,
                loadWithAjax: e.loadWithAjax,
                ajaxHeaders: e.ajaxHeaders,
                crossOriginPolicy: t.crossOriginPolicy,
                ajaxWithCredentials: t.ajaxWithCredentials,
                callback: function (i, r, s) {
                    o(t, e, n, i, r, s)
                },
                abort: function () {
                    e.loading = !1
                }
            })
        }

        function o(e, n, i, r, o, a) {
            if (!r) return t.console.log("Tile %s failed to load: %s - error: %s", n, n.url, o), e.viewer.raiseEvent("tile-load-failed", {
                tile: n,
                tiledImage: e,
                time: i,
                message: o,
                tileRequest: a
            }), n.loading = !1, void (n.exists = !1);
            if (i < e.lastResetTime) return t.console.log("Ignoring tile %s loaded before reset: %s", n, n.url), void (n.loading = !1);
            var l = function () {
                var t = e.source.getClosestLevel();
                s(e, n, r, t, a)
            };
            e._midDraw ? window.setTimeout(l, 1) : l()
        }

        function s(t, e, n, i, r) {
            function o() {
                return a++, s
            }

            function s() {
                0 === --a && (e.loading = !1, e.loaded = !0, e.context2D || t._tileCache.cacheTile({
                    image: n,
                    tile: e,
                    cutoff: i,
                    tiledImage: t
                }), t._needsDraw = !0)
            }

            var a = 0;
            t.viewer.raiseEvent("tile-loaded", {
                tile: e,
                tiledImage: t,
                tileRequest: r,
                image: n,
                getCompletionCallback: o
            }), o()()
        }

        function a(e, n, i, r, o, s) {
            var a = e.bounds.getTopLeft();
            a.x *= s._scaleSpring.current.value, a.y *= s._scaleSpring.current.value, a.x += s._xSpring.current.value, a.y += s._ySpring.current.value;
            var l = e.bounds.getSize();
            l.x *= s._scaleSpring.current.value, l.y *= s._scaleSpring.current.value;
            var c = i.pixelFromPointNoRotate(a, !0), u = i.pixelFromPointNoRotate(a, !1),
                h = i.deltaPixelsFromPointsNoRotate(l, !0), d = i.deltaPixelsFromPointsNoRotate(l, !1),
                f = u.plus(d.divide(2)), p = r.squaredDistanceTo(f);
            n || (h = h.plus(new t.Point(1, 1))), e.isRightMost && s.wrapHorizontal && (h.x += .75), e.isBottomMost && s.wrapVertical && (h.y += .75), e.position = c, e.size = h, e.squaredDistance = p, e.visibility = o
        }

        function l(t, e, n, i, r, o, s) {
            var a, l, c = 1e3 * t.blendTime;
            if (e.blendStart || (e.blendStart = s), a = s - e.blendStart, l = c ? Math.min(1, a / c) : 1, t.alwaysBlend && (l *= o), e.opacity = l, t.lastDrawn.push(e), 1 === l) h(t.coverage, r, n, i, !0), t._hasOpaqueTile = !0; else if (a < c) return !0;
            return !1
        }

        function c(t, e, n, i) {
            var r, o, s, a;
            if (!t[e]) return !1;
            if (void 0 === n || void 0 === i) {
                r = t[e];
                for (s in r) if (r.hasOwnProperty(s)) {
                    o = r[s];
                    for (a in o) if (o.hasOwnProperty(a) && !o[a]) return !1
                }
                return !0
            }
            return void 0 === t[e][n] || void 0 === t[e][n][i] || !0 === t[e][n][i]
        }

        function u(t, e, n, i) {
            return void 0 === n || void 0 === i ? c(t, e + 1) : c(t, e + 1, 2 * n, 2 * i) && c(t, e + 1, 2 * n, 2 * i + 1) && c(t, e + 1, 2 * n + 1, 2 * i) && c(t, e + 1, 2 * n + 1, 2 * i + 1)
        }

        function h(e, n, i, r, o) {
            if (!e[n]) return void t.console.warn("Setting coverage for a tile before its level's coverage has been reset: %s", n);
            e[n][i] || (e[n][i] = {}), e[n][i][r] = o
        }

        function d(t, e) {
            t[e] = {}
        }

        function f(t, e) {
            return t ? e.visibility > t.visibility ? e : e.visibility == t.visibility && e.squaredDistance < t.squaredDistance ? e : t : e
        }

        function p(e, n) {
            if (0 !== e.opacity && (0 !== n.length || e.placeholderFillStyle)) {
                var i, r = n[0];
                r && (i = e.opacity < 1 || e.compositeOperation && "source-over" !== e.compositeOperation || !e._isBottomItem() && r._hasTransparencyChannel());
                var o, s, a = e.viewport.getZoom(!0), l = e.viewportToImageZoom(a);
                n.length > 1 && l > e.smoothTileEdgesMinZoom && !e.iOSDevice && e.getRotation(!0) % 360 == 0 && t.supportsCanvas && (i = !0, o = r.getScaleForEdgeSmoothing(), s = r.getTranslationForEdgeSmoothing(o, e._drawer.getCanvasSize(!1), e._drawer.getCanvasSize(!0)));
                var c;
                i && (o || (c = e.viewport.viewportToViewerElementRectangle(e.getClippedBounds(!0)).getIntegerBoundingBox().times(t.pixelDensityRatio), e._drawer.viewer.viewport.getFlip() && (0 === e.viewport.degrees && e.getRotation(!0) % 360 == 0 || (c.x = e._drawer.viewer.container.clientWidth - (c.x + c.width)))), e._drawer._clear(!0, c)), o || (0 !== e.viewport.degrees && e._drawer._offsetForRotation({
                    degrees: e.viewport.degrees,
                    useSketch: i
                }), e.getRotation(!0) % 360 != 0 && e._drawer._offsetForRotation({
                    degrees: e.getRotation(!0),
                    point: e.viewport.pixelFromPointNoRotate(e._getRotationPoint(!0), !0),
                    useSketch: i
                }), 0 === e.viewport.degrees && e.getRotation(!0) % 360 == 0 && e._drawer.viewer.viewport.getFlip() && e._drawer._flip());
                var u = !1;
                if (e._clip) {
                    e._drawer.saveContext(i);
                    var h = e.imageToViewportRectangle(e._clip, !0);
                    h = h.rotate(-e.getRotation(!0), e._getRotationPoint(!0));
                    var d = e._drawer.viewportToDrawerRectangle(h);
                    o && (d = d.times(o)), s && (d = d.translate(s)), e._drawer.setClip(d, i), u = !0
                }
                if (e.placeholderFillStyle && !1 === e._hasOpaqueTile) {
                    var f = e._drawer.viewportToDrawerRectangle(e.getBounds(!0));
                    o && (f = f.times(o)), s && (f = f.translate(s));
                    var p = null;
                    p = "function" == typeof e.placeholderFillStyle ? e.placeholderFillStyle(e, e._drawer.context) : e.placeholderFillStyle, e._drawer.drawRectangle(f, p, i)
                }
                for (var g = n.length - 1; g >= 0; g--) r = n[g], e._drawer.drawTile(r, e._drawingHandler, i, o, s), r.beingDrawn = !0, e.viewer && e.viewer.raiseEvent("tile-drawn", {
                    tiledImage: e,
                    tile: r
                });
                u && e._drawer.restoreContext(i), o || (e.getRotation(!0) % 360 != 0 && e._drawer._restoreRotationChanges(i), 0 !== e.viewport.degrees && e._drawer._restoreRotationChanges(i)), i && (o && (0 !== e.viewport.degrees && e._drawer._offsetForRotation({
                    degrees: e.viewport.degrees,
                    useSketch: !1
                }), e.getRotation(!0) % 360 != 0 && e._drawer._offsetForRotation({
                    degrees: e.getRotation(!0),
                    point: e.viewport.pixelFromPointNoRotate(e._getRotationPoint(!0), !0),
                    useSketch: !1
                })), e._drawer.blendSketch({
                    opacity: e.opacity,
                    scale: o,
                    translate: s,
                    compositeOperation: e.compositeOperation,
                    bounds: c
                }), o && (e.getRotation(!0) % 360 != 0 && e._drawer._restoreRotationChanges(!1), 0 !== e.viewport.degrees && e._drawer._restoreRotationChanges(!1))), o || 0 === e.viewport.degrees && e.getRotation(!0) % 360 == 0 && e._drawer.viewer.viewport.getFlip() && e._drawer._flip(), v(e, n)
            }
        }

        function v(e, n) {
            if (e.debugMode) for (var i = n.length - 1; i >= 0; i--) {
                var r = n[i];
                try {
                    e._drawer.drawDebugInfo(r, n.length, i, e)
                } catch (e) {
                    t.console.error(e)
                }
            }
        }

        t.TiledImage = function (e) {
            var n = this;
            t.console.assert(e.tileCache, "[TiledImage] options.tileCache is required"), t.console.assert(e.drawer, "[TiledImage] options.drawer is required"), t.console.assert(e.viewer, "[TiledImage] options.viewer is required"), t.console.assert(e.imageLoader, "[TiledImage] options.imageLoader is required"), t.console.assert(e.source, "[TiledImage] options.source is required"), t.console.assert(!e.clip || e.clip instanceof t.Rect, "[TiledImage] options.clip must be an OpenSeadragon.Rect if present"), t.EventSource.call(this), this._tileCache = e.tileCache, delete e.tileCache, this._drawer = e.drawer, delete e.drawer, this._imageLoader = e.imageLoader, delete e.imageLoader, e.clip instanceof t.Rect && (this._clip = e.clip.clone()), delete e.clip;
            var i = e.x || 0;
            delete e.x;
            var r = e.y || 0;
            delete e.y, this.normHeight = e.source.dimensions.y / e.source.dimensions.x, this.contentAspectX = e.source.dimensions.x / e.source.dimensions.y;
            var o = 1;
            e.width ? (o = e.width, delete e.width, e.height && (t.console.error("specifying both width and height to a tiledImage is not supported"), delete e.height)) : e.height && (o = e.height / this.normHeight, delete e.height);
            var s = e.fitBounds;
            delete e.fitBounds;
            var a = e.fitBoundsPlacement || OpenSeadragon.Placement.CENTER;
            delete e.fitBoundsPlacement;
            var l = e.degrees || 0;
            delete e.degrees, t.extend(!0, this, {
                viewer: null,
                tilesMatrix: {},
                coverage: {},
                loadingCoverage: {},
                lastDrawn: [],
                lastResetTime: 0,
                _midDraw: !1,
                _needsDraw: !0,
                _hasOpaqueTile: !1,
                _tilesLoading: 0,
                springStiffness: t.DEFAULT_SETTINGS.springStiffness,
                animationTime: t.DEFAULT_SETTINGS.animationTime,
                minZoomImageRatio: t.DEFAULT_SETTINGS.minZoomImageRatio,
                wrapHorizontal: t.DEFAULT_SETTINGS.wrapHorizontal,
                wrapVertical: t.DEFAULT_SETTINGS.wrapVertical,
                immediateRender: t.DEFAULT_SETTINGS.immediateRender,
                blendTime: t.DEFAULT_SETTINGS.blendTime,
                alwaysBlend: t.DEFAULT_SETTINGS.alwaysBlend,
                minPixelRatio: t.DEFAULT_SETTINGS.minPixelRatio,
                smoothTileEdgesMinZoom: t.DEFAULT_SETTINGS.smoothTileEdgesMinZoom,
                iOSDevice: t.DEFAULT_SETTINGS.iOSDevice,
                debugMode: t.DEFAULT_SETTINGS.debugMode,
                crossOriginPolicy: t.DEFAULT_SETTINGS.crossOriginPolicy,
                ajaxWithCredentials: t.DEFAULT_SETTINGS.ajaxWithCredentials,
                placeholderFillStyle: t.DEFAULT_SETTINGS.placeholderFillStyle,
                opacity: t.DEFAULT_SETTINGS.opacity,
                preload: t.DEFAULT_SETTINGS.preload,
                compositeOperation: t.DEFAULT_SETTINGS.compositeOperation
            }, e), this._preload = this.preload, delete this.preload, this._fullyLoaded = !1, this._xSpring = new t.Spring({
                initial: i,
                springStiffness: this.springStiffness,
                animationTime: this.animationTime
            }), this._ySpring = new t.Spring({
                initial: r,
                springStiffness: this.springStiffness,
                animationTime: this.animationTime
            }), this._scaleSpring = new t.Spring({
                initial: o,
                springStiffness: this.springStiffness,
                animationTime: this.animationTime
            }), this._degreesSpring = new t.Spring({
                initial: l,
                springStiffness: this.springStiffness,
                animationTime: this.animationTime
            }), this._updateForScale(), s && this.fitBounds(s, a, !0), this._drawingHandler = function (e) {
                n.viewer.raiseEvent("tile-drawing", t.extend({tiledImage: n}, e))
            }
        }, t.extend(t.TiledImage.prototype, t.EventSource.prototype, {
            needsDraw: function () {
                return this._needsDraw
            }, getFullyLoaded: function () {
                return this._fullyLoaded
            }, _setFullyLoaded: function (t) {
                t !== this._fullyLoaded && (this._fullyLoaded = t, this.raiseEvent("fully-loaded-change", {fullyLoaded: this._fullyLoaded}))
            }, reset: function () {
                this._tileCache.clearTilesFor(this), this.lastResetTime = t.now(), this._needsDraw = !0
            }, update: function () {
                var t = this._xSpring.update(), e = this._ySpring.update(), n = this._scaleSpring.update(),
                    i = this._degreesSpring.update();
                return !!(t || e || n || i) && (this._updateForScale(), this._needsDraw = !0, !0)
            }, draw: function () {
                0 !== this.opacity || this._preload ? (this._midDraw = !0, this._updateViewport(), this._midDraw = !1) : this._needsDraw = !1
            }, destroy: function () {
                this.reset()
            }, getBounds: function (t) {
                return this.getBoundsNoRotate(t).rotate(this.getRotation(t), this._getRotationPoint(t))
            }, getBoundsNoRotate: function (e) {
                return e ? new t.Rect(this._xSpring.current.value, this._ySpring.current.value, this._worldWidthCurrent, this._worldHeightCurrent) : new t.Rect(this._xSpring.target.value, this._ySpring.target.value, this._worldWidthTarget, this._worldHeightTarget)
            }, getWorldBounds: function () {
                return t.console.error("[TiledImage.getWorldBounds] is deprecated; use TiledImage.getBounds instead"), this.getBounds()
            }, getClippedBounds: function (e) {
                var n = this.getBoundsNoRotate(e);
                if (this._clip) {
                    var i = e ? this._worldWidthCurrent : this._worldWidthTarget, r = i / this.source.dimensions.x,
                        o = this._clip.times(r);
                    n = new t.Rect(n.x + o.x, n.y + o.y, o.width, o.height)
                }
                return n.rotate(this.getRotation(e), this._getRotationPoint(e))
            }, getContentSize: function () {
                return new t.Point(this.source.dimensions.x, this.source.dimensions.y)
            }, _viewportToImageDelta: function (e, n, i) {
                var r = i ? this._scaleSpring.current.value : this._scaleSpring.target.value;
                return new t.Point(e * (this.source.dimensions.x / r), n * (this.source.dimensions.y * this.contentAspectX / r))
            }, viewportToImageCoordinates: function (e, n, i) {
                var r;
                return e instanceof t.Point ? (i = n, r = e) : r = new t.Point(e, n), r = r.rotate(-this.getRotation(i), this._getRotationPoint(i)), i ? this._viewportToImageDelta(r.x - this._xSpring.current.value, r.y - this._ySpring.current.value) : this._viewportToImageDelta(r.x - this._xSpring.target.value, r.y - this._ySpring.target.value)
            }, _imageToViewportDelta: function (e, n, i) {
                var r = i ? this._scaleSpring.current.value : this._scaleSpring.target.value;
                return new t.Point(e / this.source.dimensions.x * r, n / this.source.dimensions.y / this.contentAspectX * r)
            }, imageToViewportCoordinates: function (e, n, i) {
                e instanceof t.Point && (i = n, n = e.y, e = e.x);
                var r = this._imageToViewportDelta(e, n);
                return i ? (r.x += this._xSpring.current.value, r.y += this._ySpring.current.value) : (r.x += this._xSpring.target.value, r.y += this._ySpring.target.value), r.rotate(this.getRotation(i), this._getRotationPoint(i))
            }, imageToViewportRectangle: function (e, n, i, r, o) {
                var s = e;
                s instanceof t.Rect ? o = n : s = new t.Rect(e, n, i, r);
                var a = this.imageToViewportCoordinates(s.getTopLeft(), o),
                    l = this._imageToViewportDelta(s.width, s.height, o);
                return new t.Rect(a.x, a.y, l.x, l.y, s.degrees + this.getRotation(o))
            }, viewportToImageRectangle: function (e, n, i, r, o) {
                var s = e;
                e instanceof t.Rect ? o = n : s = new t.Rect(e, n, i, r);
                var a = this.viewportToImageCoordinates(s.getTopLeft(), o),
                    l = this._viewportToImageDelta(s.width, s.height, o);
                return new t.Rect(a.x, a.y, l.x, l.y, s.degrees - this.getRotation(o))
            }, viewerElementToImageCoordinates: function (t) {
                var e = this.viewport.pointFromPixel(t, !0);
                return this.viewportToImageCoordinates(e)
            }, imageToViewerElementCoordinates: function (t) {
                var e = this.imageToViewportCoordinates(t);
                return this.viewport.pixelFromPoint(e, !0)
            }, windowToImageCoordinates: function (t) {
                var e = t.minus(OpenSeadragon.getElementPosition(this.viewer.element));
                return this.viewerElementToImageCoordinates(e)
            }, imageToWindowCoordinates: function (t) {
                return this.imageToViewerElementCoordinates(t).plus(OpenSeadragon.getElementPosition(this.viewer.element))
            }, _viewportToTiledImageRectangle: function (e) {
                var n = this._scaleSpring.current.value;
                return e = e.rotate(-this.getRotation(!0), this._getRotationPoint(!0)), new t.Rect((e.x - this._xSpring.current.value) / n, (e.y - this._ySpring.current.value) / n, e.width / n, e.height / n, e.degrees)
            }, viewportToImageZoom: function (t) {
                return this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x * t
            }, imageToViewportZoom: function (t) {
                return t / (this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x)
            }, setPosition: function (t, e) {
                var n = this._xSpring.target.value === t.x && this._ySpring.target.value === t.y;
                if (e) {
                    if (n && this._xSpring.current.value === t.x && this._ySpring.current.value === t.y) return;
                    this._xSpring.resetTo(t.x), this._ySpring.resetTo(t.y), this._needsDraw = !0
                } else {
                    if (n) return;
                    this._xSpring.springTo(t.x), this._ySpring.springTo(t.y), this._needsDraw = !0
                }
                n || this._raiseBoundsChange()
            }, setWidth: function (t, e) {
                this._setScale(t, e)
            }, setHeight: function (t, e) {
                this._setScale(t / this.normHeight, e)
            }, fitBounds: function (e, n, i) {
                n = n || t.Placement.CENTER;
                var r = t.Placement.properties[n], o = this.contentAspectX, s = 0, a = 0, l = 1, c = 1;
                if (this._clip && (o = this._clip.getAspectRatio(), l = this._clip.width / this.source.dimensions.x, c = this._clip.height / this.source.dimensions.y, e.getAspectRatio() > o ? (s = this._clip.x / this._clip.height * e.height, a = this._clip.y / this._clip.height * e.height) : (s = this._clip.x / this._clip.width * e.width, a = this._clip.y / this._clip.width * e.width)), e.getAspectRatio() > o) {
                    var u = e.height / c, h = 0;
                    r.isHorizontallyCentered ? h = (e.width - e.height * o) / 2 : r.isRight && (h = e.width - e.height * o), this.setPosition(new t.Point(e.x - s + h, e.y - a), i), this.setHeight(u, i)
                } else {
                    var d = e.width / l, f = 0;
                    r.isVerticallyCentered ? f = (e.height - e.width / o) / 2 : r.isBottom && (f = e.height - e.width / o), this.setPosition(new t.Point(e.x - s, e.y - a + f), i), this.setWidth(d, i)
                }
            }, getClip: function () {
                return this._clip ? this._clip.clone() : null
            }, setClip: function (e) {
                t.console.assert(!e || e instanceof t.Rect, "[TiledImage.setClip] newClip must be an OpenSeadragon.Rect or null"), e instanceof t.Rect ? this._clip = e.clone() : this._clip = null, this._needsDraw = !0, this.raiseEvent("clip-change")
            }, getOpacity: function () {
                return this.opacity
            }, setOpacity: function (t) {
                t !== this.opacity && (this.opacity = t, this._needsDraw = !0, this.raiseEvent("opacity-change", {opacity: this.opacity}))
            }, getPreload: function () {
                return this._preload
            }, setPreload: function (t) {
                this._preload = !!t, this._needsDraw = !0
            }, getRotation: function (t) {
                return t ? this._degreesSpring.current.value : this._degreesSpring.target.value
            }, setRotation: function (t, e) {
                this._degreesSpring.target.value === t && this._degreesSpring.isAtTargetValue() || (e ? this._degreesSpring.resetTo(t) : this._degreesSpring.springTo(t), this._needsDraw = !0, this._raiseBoundsChange())
            }, _getRotationPoint: function (t) {
                return this.getBoundsNoRotate(t).getCenter()
            }, getCompositeOperation: function () {
                return this.compositeOperation
            }, setCompositeOperation: function (t) {
                t !== this.compositeOperation && (this.compositeOperation = t, this._needsDraw = !0, this.raiseEvent("composite-operation-change", {compositeOperation: this.compositeOperation}))
            }, _setScale: function (t, e) {
                var n = this._scaleSpring.target.value === t;
                if (e) {
                    if (n && this._scaleSpring.current.value === t) return;
                    this._scaleSpring.resetTo(t), this._updateForScale(), this._needsDraw = !0
                } else {
                    if (n) return;
                    this._scaleSpring.springTo(t), this._updateForScale(), this._needsDraw = !0
                }
                n || this._raiseBoundsChange()
            }, _updateForScale: function () {
                this._worldWidthTarget = this._scaleSpring.target.value, this._worldHeightTarget = this.normHeight * this._scaleSpring.target.value, this._worldWidthCurrent = this._scaleSpring.current.value, this._worldHeightCurrent = this.normHeight * this._scaleSpring.current.value
            }, _raiseBoundsChange: function () {
                this.raiseEvent("bounds-change")
            }, _isBottomItem: function () {
                return this.viewer.world.getItemAt(0) === this
            }, _getLevelsInterval: function () {
                var t = Math.max(this.source.minLevel, Math.floor(Math.log(this.minZoomImageRatio) / Math.log(2))),
                    e = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(0), !0).x * this._scaleSpring.current.value,
                    n = Math.min(Math.abs(this.source.maxLevel), Math.abs(Math.floor(Math.log(e / this.minPixelRatio) / Math.log(2))));
                return n = Math.max(n, this.source.minLevel || 0), t = Math.min(t, n), {lowestLevel: t, highestLevel: n}
            }, _updateViewport: function () {
                for (this._needsDraw = !1, this._tilesLoading = 0, this.loadingCoverage = {}; this.lastDrawn.length > 0;) {
                    this.lastDrawn.pop().beingDrawn = !1
                }
                var n = this.viewport, i = this._viewportToTiledImageRectangle(n.getBoundsWithMargins(!0));
                if (!this.wrapHorizontal && !this.wrapVertical) {
                    var o = this._viewportToTiledImageRectangle(this.getClippedBounds(!0));
                    if (null === (i = i.intersection(o))) return
                }
                for (var s = this._getLevelsInterval(), a = s.lowestLevel, l = s.highestLevel, u = null, h = !1, d = t.now(), f = l; f >= a; f--) {
                    var v = !1,
                        g = n.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(f), !0).x * this._scaleSpring.current.value;
                    if (f === a || !h && g >= this.minPixelRatio) v = !0, h = !0; else if (!h) continue;
                    var m = n.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(f), !1).x * this._scaleSpring.current.value,
                        y = n.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(Math.max(this.source.getClosestLevel(), 0)), !1).x * this._scaleSpring.current.value,
                        w = this.immediateRender ? 1 : y;
                    if (u = e(this, h, v, f, Math.min(1, (g - .5) / .5), w / Math.abs(w - m), i, d, u), c(this.coverage, f)) break
                }
                p(this, this.lastDrawn), u && !u.context2D ? (r(this, u, d), this._needsDraw = !0, this._setFullyLoaded(!1)) : this._setFullyLoaded(0 === this._tilesLoading)
            }, _getCornerTiles: function (e, n, i) {
                var r, o;
                this.wrapHorizontal ? (r = t.positiveModulo(n.x, 1), o = t.positiveModulo(i.x, 1)) : (r = Math.max(0, n.x), o = Math.min(1, i.x));
                var s, a, l = 1 / this.source.aspectRatio;
                this.wrapVertical ? (s = t.positiveModulo(n.y, l), a = t.positiveModulo(i.y, l)) : (s = Math.max(0, n.y), a = Math.min(l, i.y));
                var c = this.source.getTileAtPoint(e, new t.Point(r, s)),
                    u = this.source.getTileAtPoint(e, new t.Point(o, a)), h = this.source.getNumTiles(e);
                return this.wrapHorizontal && (c.x += h.x * Math.floor(n.x), u.x += h.x * Math.floor(i.x)), this.wrapVertical && (c.y += h.y * Math.floor(n.y / l), u.y += h.y * Math.floor(i.y / l)), {
                    topLeft: c,
                    bottomRight: u
                }
            }
        })
    }(OpenSeadragon)
}, function (t, e) {
    !function (t) {
        t.Rect = function (e, n, i, r, o) {
            this.x = "number" == typeof e ? e : 0, this.y = "number" == typeof n ? n : 0, this.width = "number" == typeof i ? i : 0, this.height = "number" == typeof r ? r : 0, this.degrees = "number" == typeof o ? o : 0, this.degrees = t.positiveModulo(this.degrees, 360);
            var s, a;
            this.degrees >= 270 ? (s = this.getTopRight(), this.x = s.x, this.y = s.y, a = this.height, this.height = this.width, this.width = a, this.degrees -= 270) : this.degrees >= 180 ? (s = this.getBottomRight(), this.x = s.x, this.y = s.y, this.degrees -= 180) : this.degrees >= 90 && (s = this.getBottomLeft(), this.x = s.x, this.y = s.y, a = this.height, this.height = this.width, this.width = a, this.degrees -= 90)
        }, t.Rect.fromSummits = function (e, n, i) {
            var r = e.distanceTo(n), o = e.distanceTo(i), s = n.minus(e), a = Math.atan(s.y / s.x);
            return s.x < 0 ? a += Math.PI : s.y < 0 && (a += 2 * Math.PI), new t.Rect(e.x, e.y, r, o, a / Math.PI * 180)
        }, t.Rect.prototype = {
            clone: function () {
                return new t.Rect(this.x, this.y, this.width, this.height, this.degrees)
            }, getAspectRatio: function () {
                return this.width / this.height
            }, getTopLeft: function () {
                return new t.Point(this.x, this.y)
            }, getBottomRight: function () {
                return new t.Point(this.x + this.width, this.y + this.height).rotate(this.degrees, this.getTopLeft())
            }, getTopRight: function () {
                return new t.Point(this.x + this.width, this.y).rotate(this.degrees, this.getTopLeft())
            }, getBottomLeft: function () {
                return new t.Point(this.x, this.y + this.height).rotate(this.degrees, this.getTopLeft())
            }, getCenter: function () {
                return new t.Point(this.x + this.width / 2, this.y + this.height / 2).rotate(this.degrees, this.getTopLeft())
            }, getSize: function () {
                return new t.Point(this.width, this.height)
            }, equals: function (e) {
                return e instanceof t.Rect && this.x === e.x && this.y === e.y && this.width === e.width && this.height === e.height && this.degrees === e.degrees
            }, times: function (e) {
                return new t.Rect(this.x * e, this.y * e, this.width * e, this.height * e, this.degrees)
            }, translate: function (e) {
                return new t.Rect(this.x + e.x, this.y + e.y, this.width, this.height, this.degrees)
            }, union: function (e) {
                var n = this.getBoundingBox(), i = e.getBoundingBox(), r = Math.min(n.x, i.x), o = Math.min(n.y, i.y),
                    s = Math.max(n.x + n.width, i.x + i.width), a = Math.max(n.y + n.height, i.y + i.height);
                return new t.Rect(r, o, s - r, a - o)
            }, intersection: function (e) {
                var n = 1e-10, i = [], r = this.getTopLeft();
                e.containsPoint(r, n) && i.push(r);
                var o = this.getTopRight();
                e.containsPoint(o, n) && i.push(o);
                var s = this.getBottomLeft();
                e.containsPoint(s, n) && i.push(s);
                var a = this.getBottomRight();
                e.containsPoint(a, n) && i.push(a);
                var l = e.getTopLeft();
                this.containsPoint(l, n) && i.push(l);
                var c = e.getTopRight();
                this.containsPoint(c, n) && i.push(c);
                var u = e.getBottomLeft();
                this.containsPoint(u, n) && i.push(u);
                var h = e.getBottomRight();
                this.containsPoint(h, n) && i.push(h);
                for (var d = this._getSegments(), f = e._getSegments(), p = 0; p < d.length; p++) for (var v = d[p], g = 0; g < f.length; g++) {
                    var m = f[g], y = function (e, i, r, o) {
                        var s = i.minus(e), a = o.minus(r), l = -a.x * s.y + s.x * a.y;
                        if (0 === l) return null;
                        var c = (s.x * (e.y - r.y) - s.y * (e.x - r.x)) / l,
                            u = (a.x * (e.y - r.y) - a.y * (e.x - r.x)) / l;
                        return -n <= c && c <= 1 - n && -n <= u && u <= 1 - n ? new t.Point(e.x + u * s.x, e.y + u * s.y) : null
                    }(v[0], v[1], m[0], m[1]);
                    y && i.push(y)
                }
                if (0 === i.length) return null;
                for (var w = i[0].x, _ = i[0].x, x = i[0].y, T = i[0].y, b = 1; b < i.length; b++) {
                    var S = i[b];
                    S.x < w && (w = S.x), S.x > _ && (_ = S.x), S.y < x && (x = S.y), S.y > T && (T = S.y)
                }
                return new t.Rect(w, x, _ - w, T - x)
            }, _getSegments: function () {
                var t = this.getTopLeft(), e = this.getTopRight(), n = this.getBottomLeft(), i = this.getBottomRight();
                return [[t, e], [e, i], [i, n], [n, t]]
            }, rotate: function (e, n) {
                if (0 === (e = t.positiveModulo(e, 360))) return this.clone();
                n = n || this.getCenter();
                var i = this.getTopLeft().rotate(e, n), r = this.getTopRight().rotate(e, n), o = r.minus(i);
                o = o.apply(function (t) {
                    return Math.abs(t) < 1e-15 ? 0 : t
                });
                var s = Math.atan(o.y / o.x);
                return o.x < 0 ? s += Math.PI : o.y < 0 && (s += 2 * Math.PI), new t.Rect(i.x, i.y, this.width, this.height, s / Math.PI * 180)
            }, getBoundingBox: function () {
                if (0 === this.degrees) return this.clone();
                var e = this.getTopLeft(), n = this.getTopRight(), i = this.getBottomLeft(), r = this.getBottomRight(),
                    o = Math.min(e.x, n.x, i.x, r.x), s = Math.max(e.x, n.x, i.x, r.x),
                    a = Math.min(e.y, n.y, i.y, r.y), l = Math.max(e.y, n.y, i.y, r.y);
                return new t.Rect(o, a, s - o, l - a)
            }, getIntegerBoundingBox: function () {
                var e = this.getBoundingBox(), n = Math.floor(e.x), i = Math.floor(e.y),
                    r = Math.ceil(e.width + e.x - n), o = Math.ceil(e.height + e.y - i);
                return new t.Rect(n, i, r, o)
            }, containsPoint: function (t, e) {
                e = e || 0;
                var n = this.getTopLeft(), i = this.getTopRight(), r = this.getBottomLeft(), o = i.minus(n),
                    s = r.minus(n);
                return (t.x - n.x) * o.x + (t.y - n.y) * o.y >= -e && (t.x - i.x) * o.x + (t.y - i.y) * o.y <= e && (t.x - n.x) * s.x + (t.y - n.y) * s.y >= -e && (t.x - r.x) * s.x + (t.y - r.y) * s.y <= e
            }, toString: function () {
                return "[" + Math.round(100 * this.x) / 100 + ", " + Math.round(100 * this.y) / 100 + ", " + Math.round(100 * this.width) / 100 + "x" + Math.round(100 * this.height) / 100 + ", " + Math.round(100 * this.degrees) / 100 + "deg]"
            }
        }
    }(OpenSeadragon)
}, function (t, e) {
    !function (t) {
        function e(e) {
            return e = t.getElement(e), new t.Point(0 === e.clientWidth ? 1 : e.clientWidth, 0 === e.clientHeight ? 1 : e.clientHeight)
        }

        function n(e, n, i, r, o) {
            function s(t, e) {
                t.ready ? r(t) : (t.addHandler("ready", function () {
                    r(t)
                }), t.addHandler("open-failed", function (t) {
                    o({message: t.message, source: e})
                }))
            }

            var a = e;
            if ("string" == t.type(n)) if (n.match(/^\s*<.*>\s*$/)) n = t.parseXml(n); else if (n.match(/^\s*[\{\[].*[\}\]]\s*$/)) try {
                var l = t.parseJSON(n);
                n = l
            } catch (t) {
            }
            setTimeout(function () {
                if ("string" == t.type(n)) n = new t.TileSource({
                    url: n,
                    crossOriginPolicy: void 0 !== i.crossOriginPolicy ? i.crossOriginPolicy : e.crossOriginPolicy,
                    ajaxWithCredentials: e.ajaxWithCredentials,
                    ajaxHeaders: e.ajaxHeaders,
                    useCanvas: e.useCanvas,
                    success: function (t) {
                        r(t.tileSource)
                    }
                }), n.addHandler("open-failed", function (t) {
                    o(t)
                }); else if (t.isPlainObject(n) || n.nodeType) if (void 0 !== n.crossOriginPolicy || void 0 === i.crossOriginPolicy && void 0 === e.crossOriginPolicy || (n.crossOriginPolicy = void 0 !== i.crossOriginPolicy ? i.crossOriginPolicy : e.crossOriginPolicy), void 0 === n.ajaxWithCredentials && (n.ajaxWithCredentials = e.ajaxWithCredentials), void 0 === n.useCanvas && (n.useCanvas = e.useCanvas), t.isFunction(n.getTileUrl)) {
                    var l = new t.TileSource(n);
                    l.getTileUrl = n.getTileUrl, r(l)
                } else {
                    var c = t.TileSource.determineType(a, n);
                    if (!c) return void o({message: "Unable to load TileSource", source: n});
                    var u = c.prototype.configure.apply(a, [n]);
                    s(new c(u), n)
                } else s(n, n)
            })
        }

        function i(e, n) {
            if (n instanceof t.Overlay) return n;
            var i = null;
            if (n.element) i = t.getElement(n.element); else {
                var r = n.id ? n.id : "openseadragon-overlay-" + Math.floor(1e7 * Math.random());
                i = t.getElement(n.id), i || (i = document.createElement("a"), i.href = "#/overlay/" + r), i.id = r, t.addClass(i, n.className ? n.className : "openseadragon-overlay")
            }
            var o = n.location, s = n.width, a = n.height;
            if (!o) {
                var l = n.x, c = n.y;
                if (void 0 !== n.px) {
                    var u = e.viewport.imageToViewportRectangle(new t.Rect(n.px, n.py, s || 0, a || 0));
                    l = u.x, c = u.y, s = void 0 !== s ? u.width : void 0, a = void 0 !== a ? u.height : void 0
                }
                o = new t.Point(l, c)
            }
            var h = n.placement;
            return h && "string" === t.type(h) && (h = t.Placement[n.placement.toUpperCase()]), new t.Overlay({
                element: i,
                location: o,
                placement: h,
                onDraw: n.onDraw,
                checkResize: n.checkResize,
                width: s,
                height: a,
                rotationMode: n.rotationMode
            })
        }

        function r(t, e) {
            var n;
            for (n = t.length - 1; n >= 0; n--) if (t[n].element === e) return n;
            return -1
        }

        function o(e, n) {
            return t.requestAnimationFrame(function () {
                n(e)
            })
        }

        function s(e) {
            t.requestAnimationFrame(function () {
                l(e)
            })
        }

        function a(e) {
            e.autoHideControls && (e.controlsShouldFade = !0, e.controlsFadeBeginTime = t.now() + e.controlsFadeDelay, window.setTimeout(function () {
                s(e)
            }, e.controlsFadeDelay))
        }

        function l(e) {
            var n, i, r, o;
            if (e.controlsShouldFade) {
                for (n = t.now(), i = n - e.controlsFadeBeginTime, r = 1 - i / e.controlsFadeLength, r = Math.min(1, r), r = Math.max(0, r), o = e.controls.length - 1; o >= 0; o--) e.controls[o].autoFade && e.controls[o].setOpacity(r);
                r > 0 && s(e)
            }
        }

        function c(t) {
            var e;
            for (t.controlsShouldFade = !1, e = t.controls.length - 1; e >= 0; e--) t.controls[e].setOpacity(1)
        }

        function u() {
            c(this)
        }

        function h() {
            a(this)
        }

        function d(e) {
            var n = {
                originalEvent: e.originalEvent,
                preventDefaultAction: e.preventDefaultAction,
                preventVerticalPan: e.preventVerticalPan,
                preventHorizontalPan: e.preventHorizontalPan
            };
            if (this.raiseEvent("canvas-key", n), n.preventDefaultAction || e.ctrl || e.alt || e.meta) return !0;
            switch (e.keyCode) {
                case 38:
                    return n.preventVerticalPan || (e.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new t.Point(0, -this.pixelsPerArrowPress))), this.viewport.applyConstraints()), !1;
                case 40:
                    return n.preventVerticalPan || (e.shift ? this.viewport.zoomBy(.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new t.Point(0, this.pixelsPerArrowPress))), this.viewport.applyConstraints()), !1;
                case 37:
                    return n.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new t.Point(-this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), !1;
                case 39:
                    return n.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new t.Point(this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), !1;
                default:
                    return !0
            }
        }

        function f(e) {
            var n = {
                originalEvent: e.originalEvent,
                preventDefaultAction: e.preventDefaultAction,
                preventVerticalPan: e.preventVerticalPan,
                preventHorizontalPan: e.preventHorizontalPan
            };
            if (this.raiseEvent("canvas-key", n), n.preventDefaultAction || e.ctrl || e.alt || e.meta) return !0;
            switch (e.keyCode) {
                case 43:
                case 61:
                    return this.viewport.zoomBy(1.1), this.viewport.applyConstraints(), !1;
                case 45:
                    return this.viewport.zoomBy(.9), this.viewport.applyConstraints(), !1;
                case 48:
                    return this.viewport.goHome(), this.viewport.applyConstraints(), !1;
                case 119:
                case 87:
                    return n.preventVerticalPan || (e.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new t.Point(0, -40))), this.viewport.applyConstraints()), !1;
                case 115:
                case 83:
                    return n.preventVerticalPan || (e.shift ? this.viewport.zoomBy(.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new t.Point(0, 40))), this.viewport.applyConstraints()), !1;
                case 97:
                    return n.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new t.Point(-40, 0))), this.viewport.applyConstraints()), !1;
                case 100:
                    return n.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new t.Point(40, 0))), this.viewport.applyConstraints()), !1;
                case 114:
                    return this.viewport.flipped ? this.viewport.setRotation(t.positiveModulo(this.viewport.degrees - this.rotationIncrement, 360)) : this.viewport.setRotation(t.positiveModulo(this.viewport.degrees + this.rotationIncrement, 360)), this.viewport.applyConstraints(), !1;
                case 82:
                    return this.viewport.flipped ? this.viewport.setRotation(t.positiveModulo(this.viewport.degrees + this.rotationIncrement, 360)) : this.viewport.setRotation(t.positiveModulo(this.viewport.degrees - this.rotationIncrement, 360)), this.viewport.applyConstraints(), !1;
                case 102:
                    return this.viewport.toggleFlip(), !1;
                default:
                    return !0
            }
        }

        function p(t) {
            var e;
            document.activeElement == this.canvas || this.canvas.focus(), this.viewport.flipped && (t.position.x = this.viewport.getContainerSize().x - t.position.x);
            var n = {
                tracker: t.eventSource,
                position: t.position,
                quick: t.quick,
                shift: t.shift,
                originalEvent: t.originalEvent,
                preventDefaultAction: t.preventDefaultAction
            };
            this.raiseEvent("canvas-click", n), !n.preventDefaultAction && this.viewport && t.quick && (e = this.gestureSettingsByDeviceType(t.pointerType), e.clickToZoom && (this.viewport.zoomBy(t.shift ? 1 / this.zoomPerClick : this.zoomPerClick, e.zoomToRefPoint ? this.viewport.pointFromPixel(t.position, !0) : null), this.viewport.applyConstraints()))
        }

        function v(t) {
            var e, n = {
                tracker: t.eventSource,
                position: t.position,
                shift: t.shift,
                originalEvent: t.originalEvent,
                preventDefaultAction: t.preventDefaultAction
            };
            this.raiseEvent("canvas-double-click", n), !n.preventDefaultAction && this.viewport && (e = this.gestureSettingsByDeviceType(t.pointerType), e.dblClickToZoom && (this.viewport.zoomBy(t.shift ? 1 / this.zoomPerClick : this.zoomPerClick, e.zoomToRefPoint ? this.viewport.pointFromPixel(t.position, !0) : null), this.viewport.applyConstraints()))
        }

        function g(t) {
            var e, n = {
                tracker: t.eventSource,
                position: t.position,
                delta: t.delta,
                speed: t.speed,
                direction: t.direction,
                shift: t.shift,
                originalEvent: t.originalEvent,
                preventDefaultAction: t.preventDefaultAction
            };
            if (this.raiseEvent("canvas-drag", n), !n.preventDefaultAction && this.viewport) {
                if (e = this.gestureSettingsByDeviceType(t.pointerType), this.panHorizontal || (t.delta.x = 0), this.panVertical || (t.delta.y = 0), this.viewport.flipped && (t.delta.x = -t.delta.x), this.constrainDuringPan) {
                    var i = this.viewport.deltaPointsFromPixels(t.delta.negate());
                    this.viewport.centerSpringX.target.value += i.x, this.viewport.centerSpringY.target.value += i.y;
                    var r = this.viewport.getBounds(), o = this.viewport.getConstrainedBounds();
                    this.viewport.centerSpringX.target.value -= i.x, this.viewport.centerSpringY.target.value -= i.y, r.x != o.x && (t.delta.x = 0), r.y != o.y && (t.delta.y = 0)
                }
                this.viewport.panBy(this.viewport.deltaPointsFromPixels(t.delta.negate()), e.flickEnabled && !this.constrainDuringPan)
            }
        }

        function m(e) {
            if (!e.preventDefaultAction && this.viewport) {
                var n = this.gestureSettingsByDeviceType(e.pointerType);
                if (n.flickEnabled && e.speed >= n.flickMinSpeed) {
                    var i = 0;
                    this.panHorizontal && (i = n.flickMomentum * e.speed * Math.cos(e.direction));
                    var r = 0;
                    this.panVertical && (r = n.flickMomentum * e.speed * Math.sin(e.direction));
                    var o = this.viewport.pixelFromPoint(this.viewport.getCenter(!0)),
                        s = this.viewport.pointFromPixel(new t.Point(o.x - i, o.y - r));
                    this.viewport.panTo(s, !1)
                }
                this.viewport.applyConstraints()
            }
            this.raiseEvent("canvas-drag-end", {
                tracker: e.eventSource,
                position: e.position,
                speed: e.speed,
                direction: e.direction,
                shift: e.shift,
                originalEvent: e.originalEvent
            })
        }

        function y(t) {
            this.raiseEvent("canvas-enter", {
                tracker: t.eventSource,
                pointerType: t.pointerType,
                position: t.position,
                buttons: t.buttons,
                pointers: t.pointers,
                insideElementPressed: t.insideElementPressed,
                buttonDownAny: t.buttonDownAny,
                originalEvent: t.originalEvent
            })
        }

        function w(e) {
            window.location != window.parent.location && t.MouseTracker.resetAllMouseTrackers(), this.raiseEvent("canvas-exit", {
                tracker: e.eventSource,
                pointerType: e.pointerType,
                position: e.position,
                buttons: e.buttons,
                pointers: e.pointers,
                insideElementPressed: e.insideElementPressed,
                buttonDownAny: e.buttonDownAny,
                originalEvent: e.originalEvent
            })
        }

        function _(t) {
            this.raiseEvent("canvas-press", {
                tracker: t.eventSource,
                pointerType: t.pointerType,
                position: t.position,
                insideElementPressed: t.insideElementPressed,
                insideElementReleased: t.insideElementReleased,
                originalEvent: t.originalEvent
            })
        }

        function x(t) {
            this.raiseEvent("canvas-release", {
                tracker: t.eventSource,
                pointerType: t.pointerType,
                position: t.position,
                insideElementPressed: t.insideElementPressed,
                insideElementReleased: t.insideElementReleased,
                originalEvent: t.originalEvent
            })
        }

        function T(t) {
            this.raiseEvent("canvas-nonprimary-press", {
                tracker: t.eventSource,
                position: t.position,
                pointerType: t.pointerType,
                button: t.button,
                buttons: t.buttons,
                originalEvent: t.originalEvent
            })
        }

        function b(t) {
            this.raiseEvent("canvas-nonprimary-release", {
                tracker: t.eventSource,
                position: t.position,
                pointerType: t.pointerType,
                button: t.button,
                buttons: t.buttons,
                originalEvent: t.originalEvent
            })
        }

        function S(t) {
            var e, n, i, r;
            if (!t.preventDefaultAction && this.viewport && (e = this.gestureSettingsByDeviceType(t.pointerType), e.pinchToZoom && (n = this.viewport.pointFromPixel(t.center, !0), i = this.viewport.pointFromPixel(t.lastCenter, !0), r = i.minus(n), this.panHorizontal || (r.x = 0), this.panVertical || (r.y = 0), this.viewport.zoomBy(t.distance / t.lastDistance, n, !0), e.zoomToRefPoint && this.viewport.panBy(r, !0), this.viewport.applyConstraints()), e.pinchRotate)) {
                var o = Math.atan2(t.gesturePoints[0].currentPos.y - t.gesturePoints[1].currentPos.y, t.gesturePoints[0].currentPos.x - t.gesturePoints[1].currentPos.x),
                    s = Math.atan2(t.gesturePoints[0].lastPos.y - t.gesturePoints[1].lastPos.y, t.gesturePoints[0].lastPos.x - t.gesturePoints[1].lastPos.x);
                this.viewport.setRotation(this.viewport.getRotation() + (o - s) * (180 / Math.PI))
            }
            return this.raiseEvent("canvas-pinch", {
                tracker: t.eventSource,
                gesturePoints: t.gesturePoints,
                lastCenter: t.lastCenter,
                center: t.center,
                lastDistance: t.lastDistance,
                distance: t.distance,
                shift: t.shift,
                originalEvent: t.originalEvent
            }), !1
        }

        function P(e) {
            var n, i, r;
            if (r = t.now(), r - this._lastScrollTime > this.minScrollDeltaTime) {
                if (this._lastScrollTime = r, this.viewport.flipped && (e.position.x = this.viewport.getContainerSize().x - e.position.x), !e.preventDefaultAction && this.viewport && (n = this.gestureSettingsByDeviceType(e.pointerType), n.scrollToZoom && (i = Math.pow(this.zoomPerScroll, e.scroll), this.viewport.zoomBy(i, n.zoomToRefPoint ? this.viewport.pointFromPixel(e.position, !0) : null), this.viewport.applyConstraints())), this.raiseEvent("canvas-scroll", {
                    tracker: e.eventSource,
                    position: e.position,
                    scroll: e.scroll,
                    shift: e.shift,
                    originalEvent: e.originalEvent
                }), n && n.scrollToZoom) return !1
            } else if ((n = this.gestureSettingsByDeviceType(e.pointerType)) && n.scrollToZoom) return !1
        }

        function C(t) {
            G[this.hash].mouseInside = !0, c(this), this.raiseEvent("container-enter", {
                tracker: t.eventSource,
                position: t.position,
                buttons: t.buttons,
                pointers: t.pointers,
                insideElementPressed: t.insideElementPressed,
                buttonDownAny: t.buttonDownAny,
                originalEvent: t.originalEvent
            })
        }

        function E(t) {
            t.pointers < 1 && (G[this.hash].mouseInside = !1, G[this.hash].animating || a(this)), this.raiseEvent("container-exit", {
                tracker: t.eventSource,
                position: t.position,
                buttons: t.buttons,
                pointers: t.pointers,
                insideElementPressed: t.insideElementPressed,
                buttonDownAny: t.buttonDownAny,
                originalEvent: t.originalEvent
            })
        }

        function R(t) {
            k(t), t.isOpen() ? t._updateRequestId = o(t, R) : t._updateRequestId = !1
        }

        function k(t) {
            if (!t._opening) {
                if (t.autoResize) {
                    var n = e(t.container), i = G[t.hash].prevContainerSize;
                    if (!n.equals(i)) {
                        var r = t.viewport;
                        if (t.preserveImageSizeOnResize) {
                            var o = i.x / n.x, s = r.getZoom() * o, l = r.getCenter();
                            r.resize(n, !1), r.zoomTo(s, null, !0), r.panTo(l, !0)
                        } else {
                            var u = r.getBounds();
                            r.resize(n, !0), r.fitBoundsWithConstraints(u, !0)
                        }
                        G[t.hash].prevContainerSize = n, G[t.hash].forceRedraw = !0
                    }
                }
                var h = t.viewport.update(), d = t.world.update() || h;
                h && t.raiseEvent("viewport-change"), t.referenceStrip && (d = t.referenceStrip.update(t.viewport) || d), !G[t.hash].animating && d && (t.raiseEvent("animation-start"), c(t)), (d || G[t.hash].forceRedraw || t.world.needsDraw()) && (O(t), t._drawOverlays(), t.navigator && t.navigator.update(t.viewport), G[t.hash].forceRedraw = !1, d && t.raiseEvent("animation")), G[t.hash].animating && !d && (t.raiseEvent("animation-finish"), G[t.hash].mouseInside || a(t)), G[t.hash].animating = d
            }
        }

        function O(t) {
            t.imageLoader.clear(), t.drawer.clear(), t.world.draw(), t.raiseEvent("update-viewport", {})
        }

        function I(t, e) {
            return t ? t + e : e
        }

        function A() {
            G[this.hash].lastZoomTime = t.now(), G[this.hash].zoomFactor = this.zoomPerSecond, G[this.hash].zooming = !0, M(this)
        }

        function $() {
            G[this.hash].lastZoomTime = t.now(), G[this.hash].zoomFactor = 1 / this.zoomPerSecond, G[this.hash].zooming = !0, M(this)
        }

        function D() {
            G[this.hash].zooming = !1
        }

        function M(e) {
            t.requestAnimationFrame(t.delegate(e, F))
        }

        function F() {
            var e, n, i;
            G[this.hash].zooming && this.viewport && (e = t.now(), n = e - G[this.hash].lastZoomTime, i = Math.pow(G[this.hash].zoomFactor, n / 1e3), this.viewport.zoomBy(i), this.viewport.applyConstraints(), G[this.hash].lastZoomTime = e, M(this))
        }

        function L() {
            this.viewport && (G[this.hash].zooming = !1, this.viewport.zoomBy(this.zoomPerClick / 1), this.viewport.applyConstraints())
        }

        function B() {
            this.viewport && (G[this.hash].zooming = !1, this.viewport.zoomBy(1 / this.zoomPerClick), this.viewport.applyConstraints())
        }

        function H() {
            this.buttons.emulateEnter(), this.buttons.emulateExit()
        }

        function N() {
            this.viewport && this.viewport.goHome()
        }

        function z() {
            this.isFullPage() && !t.isFullScreen() ? this.setFullPage(!1) : this.setFullScreen(!this.isFullPage()), this.buttons && this.buttons.emulateExit(), this.fullPageButton.element.focus(), this.viewport && this.viewport.applyConstraints()
        }

        function j() {
            if (this.viewport) {
                var e = this.viewport.getRotation();
                e = this.viewport.flipped ? t.positiveModulo(e + this.rotationIncrement, 360) : t.positiveModulo(e - this.rotationIncrement, 360), this.viewport.setRotation(e)
            }
        }

        function V() {
            if (this.viewport) {
                var e = this.viewport.getRotation();
                e = this.viewport.flipped ? t.positiveModulo(e - this.rotationIncrement, 360) : t.positiveModulo(e + this.rotationIncrement, 360), this.viewport.setRotation(e)
            }
        }

        function U() {
            this.viewport.toggleFlip()
        }

        function W() {
            var t = this._sequenceIndex - 1;
            this.navPrevNextWrap && t < 0 && (t += this.tileSources.length), this.goToPage(t)
        }

        function q() {
            var t = this._sequenceIndex + 1;
            this.navPrevNextWrap && t >= this.tileSources.length && (t = 0), this.goToPage(t)
        }

        var G = {}, Z = 1;
        t.Viewer = function (n) {
            var i, r = arguments, s = this;
            if (t.isPlainObject(n) || (n = {
                id: r[0],
                xmlPath: r.length > 1 ? r[1] : void 0,
                prefixUrl: r.length > 2 ? r[2] : void 0,
                controls: r.length > 3 ? r[3] : void 0,
                overlays: r.length > 4 ? r[4] : void 0
            }), n.config && (t.extend(!0, n, n.config), delete n.config), t.extend(!0, this, {
                id: n.id,
                hash: n.hash || Z++,
                initialPage: 0,
                element: null,
                container: null,
                canvas: null,
                overlays: [],
                overlaysContainer: null,
                previousBody: [],
                customControls: [],
                source: null,
                drawer: null,
                world: null,
                viewport: null,
                navigator: null,
                collectionViewport: null,
                collectionDrawer: null,
                navImages: null,
                buttons: null,
                profiler: null
            }, t.DEFAULT_SETTINGS, n), void 0 === this.hash) throw new Error("A hash must be defined, either by specifying options.id or options.hash.");
            for (void 0 !== G[this.hash] && t.console.warn("Hash " + this.hash + " has already been used."), G[this.hash] = {
                fsBoundsDelta: new t.Point(1, 1),
                prevContainerSize: null,
                animating: !1,
                forceRedraw: !1,
                mouseInside: !1,
                group: null,
                zooming: !1,
                zoomFactor: null,
                lastZoomTime: null,
                fullPage: !1,
                onfullscreenchange: null
            }, this._sequenceIndex = 0, this._firstOpen = !0, this._updateRequestId = null, this._loadQueue = [], this.currentOverlays = [], this._lastScrollTime = t.now(), t.EventSource.call(this), this.addHandler("open-failed", function (e) {
                var n = t.getString("Errors.OpenFailed", e.eventSource, e.message);
                s._showMessage(n)
            }), t.ControlDock.call(this, n), this.xmlPath && (this.tileSources = [this.xmlPath]), this.element = this.element || document.getElementById(this.id), this.canvas = t.makeNeutralElement("div"), this.canvas.className = "openseadragon-canvas", function (t) {
                t.width = "100%", t.height = "100%", t.overflow = "hidden", t.position = "absolute", t.top = "0px", t.left = "0px"
            }(this.canvas.style), t.setElementTouchActionNone(this.canvas), "" !== n.tabIndex && (this.canvas.tabIndex = void 0 === n.tabIndex ? 0 : n.tabIndex), this.container.className = "openseadragon-container", function (t) {
                t.width = "100%", t.height = "100%", t.position = "relative", t.overflow = "hidden", t.left = "0px", t.top = "0px", t.textAlign = "left"
            }(this.container.style), this.container.insertBefore(this.canvas, this.container.firstChild), this.element.appendChild(this.container), this.bodyWidth = document.body.style.width, this.bodyHeight = document.body.style.height, this.bodyOverflow = document.body.style.overflow, this.docOverflow = document.documentElement.style.overflow, this.innerTracker = new t.MouseTracker({
                element: this.canvas,
                startDisabled: !this.mouseNavEnabled,
                clickTimeThreshold: this.clickTimeThreshold,
                clickDistThreshold: this.clickDistThreshold,
                dblClickTimeThreshold: this.dblClickTimeThreshold,
                dblClickDistThreshold: this.dblClickDistThreshold,
                keyDownHandler: t.delegate(this, d),
                keyHandler: t.delegate(this, f),
                clickHandler: t.delegate(this, p),
                dblClickHandler: t.delegate(this, v),
                dragHandler: t.delegate(this, g),
                dragEndHandler: t.delegate(this, m),
                enterHandler: t.delegate(this, y),
                exitHandler: t.delegate(this, w),
                pressHandler: t.delegate(this, _),
                releaseHandler: t.delegate(this, x),
                nonPrimaryPressHandler: t.delegate(this, T),
                nonPrimaryReleaseHandler: t.delegate(this, b),
                scrollHandler: t.delegate(this, P),
                pinchHandler: t.delegate(this, S)
            }), this.outerTracker = new t.MouseTracker({
                element: this.container,
                startDisabled: !this.mouseNavEnabled,
                clickTimeThreshold: this.clickTimeThreshold,
                clickDistThreshold: this.clickDistThreshold,
                dblClickTimeThreshold: this.dblClickTimeThreshold,
                dblClickDistThreshold: this.dblClickDistThreshold,
                enterHandler: t.delegate(this, C),
                exitHandler: t.delegate(this, E)
            }), this.toolbar && (this.toolbar = new t.ControlDock({element: this.toolbar})), this.bindStandardControls(), G[this.hash].prevContainerSize = e(this.container), this.world = new t.World({viewer: this}), this.world.addHandler("add-item", function (t) {
                s.source = s.world.getItemAt(0).source, G[s.hash].forceRedraw = !0, s._updateRequestId || (s._updateRequestId = o(s, R))
            }), this.world.addHandler("remove-item", function (t) {
                s.world.getItemCount() ? s.source = s.world.getItemAt(0).source : s.source = null, G[s.hash].forceRedraw = !0
            }), this.world.addHandler("metrics-change", function (t) {
                s.viewport && s.viewport._setContentBounds(s.world.getHomeBounds(), s.world.getContentFactor())
            }), this.world.addHandler("item-index-change", function (t) {
                s.source = s.world.getItemAt(0).source
            }), this.viewport = new t.Viewport({
                containerSize: G[this.hash].prevContainerSize,
                springStiffness: this.springStiffness,
                animationTime: this.animationTime,
                minZoomImageRatio: this.minZoomImageRatio,
                maxZoomPixelRatio: this.maxZoomPixelRatio,
                visibilityRatio: this.visibilityRatio,
                wrapHorizontal: this.wrapHorizontal,
                wrapVertical: this.wrapVertical,
                defaultZoomLevel: this.defaultZoomLevel,
                minZoomLevel: this.minZoomLevel,
                maxZoomLevel: this.maxZoomLevel,
                viewer: this,
                degrees: this.degrees,
                flipped: this.flipped,
                navigatorRotate: this.navigatorRotate,
                homeFillsViewer: this.homeFillsViewer,
                margins: this.viewportMargins
            }), this.viewport._setContentBounds(this.world.getHomeBounds(), this.world.getContentFactor()), this.imageLoader = new t.ImageLoader({
                jobLimit: this.imageLoaderLimit,
                timeout: n.timeout
            }), this.tileCache = new t.TileCache({maxImageCacheCount: this.maxImageCacheCount}), this.drawer = new t.Drawer({
                viewer: this,
                viewport: this.viewport,
                element: this.canvas,
                debugGridColor: this.debugGridColor
            }), this.overlaysContainer = t.makeNeutralElement("div"), this.canvas.appendChild(this.overlaysContainer), this.drawer.canRotate() || (this.rotateLeft && (i = this.buttons.buttons.indexOf(this.rotateLeft), this.buttons.buttons.splice(i, 1), this.buttons.element.removeChild(this.rotateLeft.element)), this.rotateRight && (i = this.buttons.buttons.indexOf(this.rotateRight), this.buttons.buttons.splice(i, 1), this.buttons.element.removeChild(this.rotateRight.element))), this.showNavigator && (this.navigator = new t.Navigator({
                id: this.navigatorId,
                position: this.navigatorPosition,
                sizeRatio: this.navigatorSizeRatio,
                maintainSizeRatio: this.navigatorMaintainSizeRatio,
                top: this.navigatorTop,
                left: this.navigatorLeft,
                width: this.navigatorWidth,
                height: this.navigatorHeight,
                autoResize: this.navigatorAutoResize,
                autoFade: this.navigatorAutoFade,
                prefixUrl: this.prefixUrl,
                viewer: this,
                navigatorRotate: this.navigatorRotate,
                background: this.navigatorBackground,
                opacity: this.navigatorOpacity,
                borderColor: this.navigatorBorderColor,
                displayRegionColor: this.navigatorDisplayRegionColor,
                crossOriginPolicy: this.crossOriginPolicy
            })), this.sequenceMode && this.bindSequenceControls(), this.tileSources && this.open(this.tileSources), i = 0; i < this.customControls.length; i++) this.addControl(this.customControls[i].id, {anchor: this.customControls[i].anchor});
            t.requestAnimationFrame(function () {
                a(s)
            }), void 0 === this.imageSmoothingEnabled || this.imageSmoothingEnabled || this.drawer.setImageSmoothingEnabled(this.imageSmoothingEnabled)
        }, t.extend(t.Viewer.prototype, t.EventSource.prototype, t.ControlDock.prototype, {
            isOpen: function () {
                return !!this.world.getItemCount()
            }, openDzi: function (e) {
                return t.console.error("[Viewer.openDzi] this function is deprecated; use Viewer.open() instead."), this.open(e)
            }, openTileSource: function (e) {
                return t.console.error("[Viewer.openTileSource] this function is deprecated; use Viewer.open() instead."), this.open(e)
            }, open: function (e, n) {
                var r = this;
                if (this.close(), e) {
                    if (this.sequenceMode && t.isArray(e)) return this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null), void 0 === n || isNaN(n) || (this.initialPage = n), this.tileSources = e, this._sequenceIndex = Math.max(0, Math.min(this.tileSources.length - 1, this.initialPage)), this.tileSources.length && (this.open(this.tileSources[this._sequenceIndex]), this.showReferenceStrip && this.addReferenceStrip()), void this._updateSequenceButtons(this._sequenceIndex);
                    if (t.isArray(e) || (e = [e]), e.length) {
                        this._opening = !0;
                        for (var o, s = e.length, a = 0, l = 0, c = function () {
                            if (a + l === s) if (a) {
                                !r._firstOpen && r.preserveViewport || (r.viewport.goHome(!0), r.viewport.update()), r._firstOpen = !1;
                                var t = e[0];
                                if (t.tileSource && (t = t.tileSource), r.overlays && !r.preserveOverlays) for (var n = 0; n < r.overlays.length; n++) r.currentOverlays[n] = i(r, r.overlays[n]);
                                r._drawOverlays(), r._opening = !1, r.raiseEvent("open", {source: t})
                            } else r._opening = !1, r.raiseEvent("open-failed", o)
                        }, u = 0; u < e.length; u++) !function (e) {
                            t.isPlainObject(e) && e.tileSource || (e = {tileSource: e}), void 0 !== e.index && (t.console.error("[Viewer.open] setting indexes here is not supported; use addTiledImage instead"), delete e.index), void 0 === e.collectionImmediately && (e.collectionImmediately = !0);
                            var n = e.success;
                            e.success = function (t) {
                                if (a++, e.tileSource.overlays) for (var i = 0; i < e.tileSource.overlays.length; i++) r.addOverlay(e.tileSource.overlays[i]);
                                n && n(t), c()
                            };
                            var i = e.error;
                            e.error = function (t) {
                                l++, o || (o = t), i && i(t), c()
                            }, r.addTiledImage(e)
                        }(e[u]);
                        return this
                    }
                }
            }, close: function () {
                return G[this.hash] ? (this._opening = !1, this.navigator && this.navigator.close(), this.preserveOverlays || (this.clearOverlays(), this.overlaysContainer.innerHTML = ""), G[this.hash].animating = !1, this.world.removeAll(), this.imageLoader.clear(), this.raiseEvent("close"), this) : this
            }, destroy: function () {
                if (G[this.hash]) {
                    if (this.close(), this.clearOverlays(), this.overlaysContainer.innerHTML = "", this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null), null !== this._updateRequestId && (t.cancelAnimationFrame(this._updateRequestId), this._updateRequestId = null), this.drawer && this.drawer.destroy(), this.removeAllHandlers(), this.element) for (; this.element.firstChild;) this.element.removeChild(this.element.firstChild);
                    this.innerTracker && this.innerTracker.destroy(), this.outerTracker && this.outerTracker.destroy(), G[this.hash] = null, delete G[this.hash], this.canvas = null, this.container = null, this.element = null
                }
            }, isMouseNavEnabled: function () {
                return this.innerTracker.isTracking()
            }, setMouseNavEnabled: function (t) {
                return this.innerTracker.setTracking(t), this.outerTracker.setTracking(t), this.raiseEvent("mouse-enabled", {enabled: t}), this
            }, areControlsEnabled: function () {
                var t, e = this.controls.length;
                for (t = 0; t < this.controls.length; t++) e = e && this.controls[t].isVisible();
                return e
            }, setControlsEnabled: function (t) {
                return t ? c(this) : a(this), this.raiseEvent("controls-enabled", {enabled: t}), this
            }, setDebugMode: function (t) {
                for (var e = 0; e < this.world.getItemCount(); e++) this.world.getItemAt(e).debugMode = t;
                this.debugMode = t, this.forceRedraw()
            }, isFullPage: function () {
                return G[this.hash].fullPage
            }, setFullPage: function (e) {
                var n, i, r = document.body, o = r.style, s = document.documentElement.style, a = this;
                if (e == this.isFullPage()) return this;
                var l = {fullPage: e, preventDefaultAction: !1};
                if (this.raiseEvent("pre-full-page", l), l.preventDefaultAction) return this;
                if (e) {
                    for (this.elementSize = t.getElementSize(this.element), this.pageScroll = t.getPageScroll(), this.elementMargin = this.element.style.margin, this.element.style.margin = "0", this.elementPadding = this.element.style.padding, this.element.style.padding = "0", this.bodyMargin = o.margin, this.docMargin = s.margin, o.margin = "0", s.margin = "0", this.bodyPadding = o.padding, this.docPadding = s.padding, o.padding = "0", s.padding = "0", this.bodyWidth = o.width, this.docWidth = s.width, o.width = "100%", s.width = "100%", this.bodyHeight = o.height, this.docHeight = s.height, o.height = "100%", s.height = "100%", this.previousBody = [], G[this.hash].prevElementParent = this.element.parentNode, G[this.hash].prevNextSibling = this.element.nextSibling, G[this.hash].prevElementWidth = this.element.style.width, G[this.hash].prevElementHeight = this.element.style.height, n = r.childNodes.length, i = 0; i < n; i++) this.previousBody.push(r.childNodes[0]), r.removeChild(r.childNodes[0]);
                    this.toolbar && this.toolbar.element && (this.toolbar.parentNode = this.toolbar.element.parentNode, this.toolbar.nextSibling = this.toolbar.element.nextSibling, r.appendChild(this.toolbar.element), t.addClass(this.toolbar.element, "fullpage")), t.addClass(this.element, "fullpage"), r.appendChild(this.element), this.element.style.height = t.getWindowSize().y + "px", this.element.style.width = t.getWindowSize().x + "px", this.toolbar && this.toolbar.element && (this.element.style.height = t.getElementSize(this.element).y - t.getElementSize(this.toolbar.element).y + "px"), G[this.hash].fullPage = !0, t.delegate(this, C)({})
                } else {
                    for (this.element.style.margin = this.elementMargin, this.element.style.padding = this.elementPadding, o.margin = this.bodyMargin, s.margin = this.docMargin, o.padding = this.bodyPadding, s.padding = this.docPadding, o.width = this.bodyWidth, s.width = this.docWidth, o.height = this.bodyHeight, s.height = this.docHeight, r.removeChild(this.element), n = this.previousBody.length, i = 0; i < n; i++) r.appendChild(this.previousBody.shift());
                    t.removeClass(this.element, "fullpage"), G[this.hash].prevElementParent.insertBefore(this.element, G[this.hash].prevNextSibling), this.toolbar && this.toolbar.element && (r.removeChild(this.toolbar.element), t.removeClass(this.toolbar.element, "fullpage"), this.toolbar.parentNode.insertBefore(this.toolbar.element, this.toolbar.nextSibling), delete this.toolbar.parentNode, delete this.toolbar.nextSibling), this.element.style.width = G[this.hash].prevElementWidth, this.element.style.height = G[this.hash].prevElementHeight;
                    var c = 0, u = function () {
                        t.setPageScroll(a.pageScroll);
                        var e = t.getPageScroll();
                        ++c < 10 && (e.x !== a.pageScroll.x || e.y !== a.pageScroll.y) && t.requestAnimationFrame(u)
                    };
                    t.requestAnimationFrame(u), G[this.hash].fullPage = !1, t.delegate(this, E)({})
                }
                return this.navigator && this.viewport && this.navigator.update(this.viewport), this.raiseEvent("full-page", {fullPage: e}), this
            }, setFullScreen: function (e) {
                var n = this;
                if (!t.supportsFullScreen) return this.setFullPage(e);
                if (t.isFullScreen() === e) return this;
                var i = {fullScreen: e, preventDefaultAction: !1};
                if (this.raiseEvent("pre-full-screen", i), i.preventDefaultAction) return this;
                if (e) {
                    if (this.setFullPage(!0), !this.isFullPage()) return this;
                    this.fullPageStyleWidth = this.element.style.width, this.fullPageStyleHeight = this.element.style.height, this.element.style.width = "100%", this.element.style.height = "100%";
                    var r = function () {
                        var e = t.isFullScreen();
                        e || (t.removeEvent(document, t.fullScreenEventName, r), t.removeEvent(document, t.fullScreenErrorEventName, r), n.setFullPage(!1), n.isFullPage() && (n.element.style.width = n.fullPageStyleWidth, n.element.style.height = n.fullPageStyleHeight)), n.navigator && n.viewport && setTimeout(function () {
                            n.navigator.update(n.viewport)
                        }), n.raiseEvent("full-screen", {fullScreen: e})
                    };
                    t.addEvent(document, t.fullScreenEventName, r), t.addEvent(document, t.fullScreenErrorEventName, r), t.requestFullScreen(document.body)
                } else t.exitFullScreen();
                return this
            }, isVisible: function () {
                return "hidden" != this.container.style.visibility
            }, setVisible: function (t) {
                return this.container.style.visibility = t ? "" : "hidden", this.raiseEvent("visible", {visible: t}), this
            }, addTiledImage: function (e) {
                function i(t) {
                    for (var n = 0; n < s._loadQueue.length; n++) if (s._loadQueue[n] === a) {
                        s._loadQueue.splice(n, 1);
                        break
                    }
                    0 === s._loadQueue.length && r(a), s.raiseEvent("add-item-failed", t), e.error && e.error(t)
                }

                function r(t) {
                    s.collectionMode && (s.world.arrange({
                        immediately: t.options.collectionImmediately,
                        rows: s.collectionRows,
                        columns: s.collectionColumns,
                        layout: s.collectionLayout,
                        tileSize: s.collectionTileSize,
                        tileMargin: s.collectionTileMargin
                    }), s.world.setAutoRefigureSizes(!0))
                }

                function o() {
                    for (var e, n, i; s._loadQueue.length && (e = s._loadQueue[0], e.tileSource);) {
                        if (s._loadQueue.splice(0, 1), e.options.replace) {
                            var o = s.world.getIndexOfItem(e.options.replaceItem);
                            -1 != o && (e.options.index = o), s.world.removeItem(e.options.replaceItem)
                        }
                        n = new t.TiledImage({
                            viewer: s,
                            source: e.tileSource,
                            viewport: s.viewport,
                            drawer: s.drawer,
                            tileCache: s.tileCache,
                            imageLoader: s.imageLoader,
                            x: e.options.x,
                            y: e.options.y,
                            width: e.options.width,
                            height: e.options.height,
                            fitBounds: e.options.fitBounds,
                            fitBoundsPlacement: e.options.fitBoundsPlacement,
                            clip: e.options.clip,
                            placeholderFillStyle: e.options.placeholderFillStyle,
                            opacity: e.options.opacity,
                            preload: e.options.preload,
                            degrees: e.options.degrees,
                            compositeOperation: e.options.compositeOperation,
                            springStiffness: s.springStiffness,
                            animationTime: s.animationTime,
                            minZoomImageRatio: s.minZoomImageRatio,
                            wrapHorizontal: s.wrapHorizontal,
                            wrapVertical: s.wrapVertical,
                            immediateRender: s.immediateRender,
                            blendTime: s.blendTime,
                            alwaysBlend: s.alwaysBlend,
                            minPixelRatio: s.minPixelRatio,
                            smoothTileEdgesMinZoom: s.smoothTileEdgesMinZoom,
                            iOSDevice: s.iOSDevice,
                            crossOriginPolicy: e.options.crossOriginPolicy,
                            ajaxWithCredentials: e.options.ajaxWithCredentials,
                            loadTilesWithAjax: e.options.loadTilesWithAjax,
                            ajaxHeaders: e.options.ajaxHeaders,
                            debugMode: s.debugMode
                        }), s.collectionMode && s.world.setAutoRefigureSizes(!1), s.world.addItem(n, {index: e.options.index}), 0 === s._loadQueue.length && r(e), 1 !== s.world.getItemCount() || s.preserveViewport || s.viewport.goHome(!0), s.navigator && (i = t.extend({}, e.options, {
                            replace: !1,
                            originalTiledImage: n,
                            tileSource: e.tileSource
                        }), s.navigator.addTiledImage(i)), e.options.success && e.options.success({item: n})
                    }
                }

                t.console.assert(e, "[Viewer.addTiledImage] options is required"), t.console.assert(e.tileSource, "[Viewer.addTiledImage] options.tileSource is required"), t.console.assert(!e.replace || e.index > -1 && e.index < this.world.getItemCount(), "[Viewer.addTiledImage] if options.replace is used, options.index must be a valid index in Viewer.world");
                var s = this;
                e.replace && (e.replaceItem = s.world.getItemAt(e.index)), this._hideMessage(), void 0 === e.placeholderFillStyle && (e.placeholderFillStyle = this.placeholderFillStyle), void 0 === e.opacity && (e.opacity = this.opacity), void 0 === e.preload && (e.preload = this.preload), void 0 === e.compositeOperation && (e.compositeOperation = this.compositeOperation), void 0 === e.crossOriginPolicy && (e.crossOriginPolicy = void 0 !== e.tileSource.crossOriginPolicy ? e.tileSource.crossOriginPolicy : this.crossOriginPolicy), void 0 === e.ajaxWithCredentials && (e.ajaxWithCredentials = this.ajaxWithCredentials), void 0 === e.loadTilesWithAjax && (e.loadTilesWithAjax = this.loadTilesWithAjax), void 0 === e.ajaxHeaders || null === e.ajaxHeaders ? e.ajaxHeaders = this.ajaxHeaders : t.isPlainObject(e.ajaxHeaders) && t.isPlainObject(this.ajaxHeaders) && (e.ajaxHeaders = t.extend({}, this.ajaxHeaders, e.ajaxHeaders));
                var a = {options: e};
                if (t.isArray(e.tileSource)) return void setTimeout(function () {
                    i({
                        message: "[Viewer.addTiledImage] Sequences can not be added; add them one at a time instead.",
                        source: e.tileSource,
                        options: e
                    })
                });
                this._loadQueue.push(a), n(this, e.tileSource, e, function (t) {
                    a.tileSource = t, o()
                }, function (t) {
                    t.options = e, i(t), o()
                })
            }, addSimpleImage: function (e) {
                t.console.assert(e, "[Viewer.addSimpleImage] options is required"), t.console.assert(e.url, "[Viewer.addSimpleImage] options.url is required");
                var n = t.extend({}, e, {tileSource: {type: "image", url: e.url}});
                delete n.url, this.addTiledImage(n)
            }, addLayer: function (e) {
                var n = this;
                t.console.error("[Viewer.addLayer] this function is deprecated; use Viewer.addTiledImage() instead.");
                var i = t.extend({}, e, {
                    success: function (t) {
                        n.raiseEvent("add-layer", {options: e, drawer: t.item})
                    }, error: function (t) {
                        n.raiseEvent("add-layer-failed", t)
                    }
                });
                return this.addTiledImage(i), this
            }, getLayerAtLevel: function (e) {
                return t.console.error("[Viewer.getLayerAtLevel] this function is deprecated; use World.getItemAt() instead."), this.world.getItemAt(e)
            }, getLevelOfLayer: function (e) {
                return t.console.error("[Viewer.getLevelOfLayer] this function is deprecated; use World.getIndexOfItem() instead."), this.world.getIndexOfItem(e)
            }, getLayersCount: function () {
                return t.console.error("[Viewer.getLayersCount] this function is deprecated; use World.getItemCount() instead."), this.world.getItemCount()
            }, setLayerLevel: function (e, n) {
                return t.console.error("[Viewer.setLayerLevel] this function is deprecated; use World.setItemIndex() instead."), this.world.setItemIndex(e, n)
            }, removeLayer: function (e) {
                return t.console.error("[Viewer.removeLayer] this function is deprecated; use World.removeItem() instead."), this.world.removeItem(e)
            }, forceRedraw: function () {
                return G[this.hash].forceRedraw = !0, this
            }, bindSequenceControls: function () {
                var e = t.delegate(this, u), n = t.delegate(this, h), i = t.delegate(this, q), r = t.delegate(this, W),
                    o = this.navImages, s = !0;
                return this.showSequenceControl && ((this.previousButton || this.nextButton) && (s = !1), this.previousButton = new t.Button({
                    element: this.previousButton ? t.getElement(this.previousButton) : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: t.getString("Tooltips.PreviousPage"),
                    srcRest: I(this.prefixUrl, o.previous.REST),
                    srcGroup: I(this.prefixUrl, o.previous.GROUP),
                    srcHover: I(this.prefixUrl, o.previous.HOVER),
                    srcDown: I(this.prefixUrl, o.previous.DOWN),
                    onRelease: r,
                    onFocus: e,
                    onBlur: n
                }), this.nextButton = new t.Button({
                    element: this.nextButton ? t.getElement(this.nextButton) : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: t.getString("Tooltips.NextPage"),
                    srcRest: I(this.prefixUrl, o.next.REST),
                    srcGroup: I(this.prefixUrl, o.next.GROUP),
                    srcHover: I(this.prefixUrl, o.next.HOVER),
                    srcDown: I(this.prefixUrl, o.next.DOWN),
                    onRelease: i,
                    onFocus: e,
                    onBlur: n
                }), this.navPrevNextWrap || this.previousButton.disable(), this.tileSources && this.tileSources.length || this.nextButton.disable(), s && (this.paging = new t.ButtonGroup({
                    buttons: [this.previousButton, this.nextButton],
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold
                }), this.pagingControl = this.paging.element, this.toolbar ? this.toolbar.addControl(this.pagingControl, {anchor: t.ControlAnchor.BOTTOM_RIGHT}) : this.addControl(this.pagingControl, {anchor: this.sequenceControlAnchor || t.ControlAnchor.TOP_LEFT}))), this
            }, bindStandardControls: function () {
                var e = t.delegate(this, A), n = t.delegate(this, D), i = t.delegate(this, L), r = t.delegate(this, $),
                    o = t.delegate(this, B), s = t.delegate(this, N), a = t.delegate(this, z), l = t.delegate(this, j),
                    c = t.delegate(this, V), d = t.delegate(this, U), f = t.delegate(this, u), p = t.delegate(this, h),
                    v = this.navImages, g = [], m = !0;
                return this.showNavigationControl && ((this.zoomInButton || this.zoomOutButton || this.homeButton || this.fullPageButton || this.rotateLeftButton || this.rotateRightButton || this.flipButton) && (m = !1), this.showZoomControl && (g.push(this.zoomInButton = new t.Button({
                    element: this.zoomInButton ? t.getElement(this.zoomInButton) : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: t.getString("Tooltips.ZoomIn"),
                    srcRest: I(this.prefixUrl, v.zoomIn.REST),
                    srcGroup: I(this.prefixUrl, v.zoomIn.GROUP),
                    srcHover: I(this.prefixUrl, v.zoomIn.HOVER),
                    srcDown: I(this.prefixUrl, v.zoomIn.DOWN),
                    onPress: e,
                    onRelease: n,
                    onClick: i,
                    onEnter: e,
                    onExit: n,
                    onFocus: f,
                    onBlur: p
                })), g.push(this.zoomOutButton = new t.Button({
                    element: this.zoomOutButton ? t.getElement(this.zoomOutButton) : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: t.getString("Tooltips.ZoomOut"),
                    srcRest: I(this.prefixUrl, v.zoomOut.REST),
                    srcGroup: I(this.prefixUrl, v.zoomOut.GROUP),
                    srcHover: I(this.prefixUrl, v.zoomOut.HOVER),
                    srcDown: I(this.prefixUrl, v.zoomOut.DOWN),
                    onPress: r,
                    onRelease: n,
                    onClick: o,
                    onEnter: r,
                    onExit: n,
                    onFocus: f,
                    onBlur: p
                }))), this.showHomeControl && g.push(this.homeButton = new t.Button({
                    element: this.homeButton ? t.getElement(this.homeButton) : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: t.getString("Tooltips.Home"),
                    srcRest: I(this.prefixUrl, v.home.REST),
                    srcGroup: I(this.prefixUrl, v.home.GROUP),
                    srcHover: I(this.prefixUrl, v.home.HOVER),
                    srcDown: I(this.prefixUrl, v.home.DOWN),
                    onRelease: s,
                    onFocus: f,
                    onBlur: p
                })), this.showFullPageControl && g.push(this.fullPageButton = new t.Button({
                    element: this.fullPageButton ? t.getElement(this.fullPageButton) : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: t.getString("Tooltips.FullPage"),
                    srcRest: I(this.prefixUrl, v.fullpage.REST),
                    srcGroup: I(this.prefixUrl, v.fullpage.GROUP),
                    srcHover: I(this.prefixUrl, v.fullpage.HOVER),
                    srcDown: I(this.prefixUrl, v.fullpage.DOWN),
                    onRelease: a,
                    onFocus: f,
                    onBlur: p
                })), this.showRotationControl && (g.push(this.rotateLeftButton = new t.Button({
                    element: this.rotateLeftButton ? t.getElement(this.rotateLeftButton) : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: t.getString("Tooltips.RotateLeft"),
                    srcRest: I(this.prefixUrl, v.rotateleft.REST),
                    srcGroup: I(this.prefixUrl, v.rotateleft.GROUP),
                    srcHover: I(this.prefixUrl, v.rotateleft.HOVER),
                    srcDown: I(this.prefixUrl, v.rotateleft.DOWN),
                    onRelease: l,
                    onFocus: f,
                    onBlur: p
                })), g.push(this.rotateRightButton = new t.Button({
                    element: this.rotateRightButton ? t.getElement(this.rotateRightButton) : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: t.getString("Tooltips.RotateRight"),
                    srcRest: I(this.prefixUrl, v.rotateright.REST),
                    srcGroup: I(this.prefixUrl, v.rotateright.GROUP),
                    srcHover: I(this.prefixUrl, v.rotateright.HOVER),
                    srcDown: I(this.prefixUrl, v.rotateright.DOWN),
                    onRelease: c,
                    onFocus: f,
                    onBlur: p
                }))), this.showFlipControl && g.push(this.flipButton = new t.Button({
                    element: this.flipButton ? t.getElement(this.flipButton) : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: t.getString("Tooltips.Flip"),
                    srcRest: I(this.prefixUrl, v.flip.REST),
                    srcGroup: I(this.prefixUrl, v.flip.GROUP),
                    srcHover: I(this.prefixUrl, v.flip.HOVER),
                    srcDown: I(this.prefixUrl, v.flip.DOWN),
                    onRelease: d,
                    onFocus: f,
                    onBlur: p
                })), m && (this.buttons = new t.ButtonGroup({
                    buttons: g,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold
                }), this.navControl = this.buttons.element, this.addHandler("open", t.delegate(this, H)), this.toolbar ? this.toolbar.addControl(this.navControl, {anchor: this.navigationControlAnchor || t.ControlAnchor.TOP_LEFT}) : this.addControl(this.navControl, {anchor: this.navigationControlAnchor || t.ControlAnchor.TOP_LEFT}))), this
            }, currentPage: function () {
                return this._sequenceIndex
            }, goToPage: function (t) {
                return this.tileSources && t >= 0 && t < this.tileSources.length && (this._sequenceIndex = t, this._updateSequenceButtons(t), this.open(this.tileSources[t]), this.referenceStrip && this.referenceStrip.setFocus(t), this.raiseEvent("page", {page: t})), this
            }, addOverlay: function (e, n, o, s) {
                var a;
                if (a = t.isPlainObject(e) ? e : {
                    element: e,
                    location: n,
                    placement: o,
                    onDraw: s
                }, e = t.getElement(a.element), r(this.currentOverlays, e) >= 0) return this;
                var l = i(this, a);
                return this.currentOverlays.push(l), l.drawHTML(this.overlaysContainer, this.viewport), this.raiseEvent("add-overlay", {
                    element: e,
                    location: a.location,
                    placement: a.placement
                }), this
            }, updateOverlay: function (e, n, i) {
                var o;
                return e = t.getElement(e), o = r(this.currentOverlays, e), o >= 0 && (this.currentOverlays[o].update(n, i), G[this.hash].forceRedraw = !0, this.raiseEvent("update-overlay", {
                    element: e,
                    location: n,
                    placement: i
                })), this
            }, removeOverlay: function (e) {
                var n;
                return e = t.getElement(e), n = r(this.currentOverlays, e), n >= 0 && (this.currentOverlays[n].destroy(), this.currentOverlays.splice(n, 1), G[this.hash].forceRedraw = !0, this.raiseEvent("remove-overlay", {element: e})), this
            }, clearOverlays: function () {
                for (; this.currentOverlays.length > 0;) this.currentOverlays.pop().destroy();
                return G[this.hash].forceRedraw = !0, this.raiseEvent("clear-overlay", {}), this
            }, getOverlayById: function (e) {
                var n;
                return e = t.getElement(e), n = r(this.currentOverlays, e), n >= 0 ? this.currentOverlays[n] : null
            }, _updateSequenceButtons: function (t) {
                this.nextButton && (this.tileSources && this.tileSources.length - 1 !== t ? this.nextButton.enable() : this.navPrevNextWrap || this.nextButton.disable()), this.previousButton && (t > 0 ? this.previousButton.enable() : this.navPrevNextWrap || this.previousButton.disable())
            }, _showMessage: function (e) {
                this._hideMessage();
                var n = t.makeNeutralElement("div");
                n.appendChild(document.createTextNode(e)), this.messageDiv = t.makeCenteredNode(n), t.addClass(this.messageDiv, "openseadragon-message"), this.container.appendChild(this.messageDiv)
            }, _hideMessage: function () {
                var t = this.messageDiv;
                t && (t.parentNode.removeChild(t), delete this.messageDiv)
            }, gestureSettingsByDeviceType: function (t) {
                switch (t) {
                    case"mouse":
                        return this.gestureSettingsMouse;
                    case"touch":
                        return this.gestureSettingsTouch;
                    case"pen":
                        return this.gestureSettingsPen;
                    default:
                        return this.gestureSettingsUnknown
                }
            }, _drawOverlays: function () {
                var t, e = this.currentOverlays.length;
                for (t = 0; t < e; t++) this.currentOverlays[t].drawHTML(this.overlaysContainer, this.viewport)
            }, _cancelPendingImages: function () {
                this._loadQueue = []
            }, removeReferenceStrip: function () {
                this.showReferenceStrip = !1, this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null)
            }, addReferenceStrip: function () {
                if (this.showReferenceStrip = !0, this.sequenceMode) {
                    if (this.referenceStrip) return;
                    this.tileSources.length && this.tileSources.length > 1 && (this.referenceStrip = new t.ReferenceStrip({
                        id: this.referenceStripElement,
                        position: this.referenceStripPosition,
                        sizeRatio: this.referenceStripSizeRatio,
                        scroll: this.referenceStripScroll,
                        height: this.referenceStripHeight,
                        width: this.referenceStripWidth,
                        tileSources: this.tileSources,
                        prefixUrl: this.prefixUrl,
                        viewer: this
                    }), this.referenceStrip.setFocus(this._sequenceIndex))
                } else t.console.warn('Attempting to display a reference strip while "sequenceMode" is off.')
            }
        })
    }(OpenSeadragon)
}, function (t, e) {
    !function (t) {
        t.Viewport = function (e) {
            var n = arguments;
            n.length && n[0] instanceof t.Point && (e = {
                containerSize: n[0],
                contentSize: n[1],
                config: n[2]
            }), e.config && (t.extend(!0, e, e.config), delete e.config), this._margins = t.extend({
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }, e.margins || {}), delete e.margins, t.extend(!0, this, {
                containerSize: null,
                contentSize: null,
                zoomPoint: null,
                viewer: null,
                springStiffness: t.DEFAULT_SETTINGS.springStiffness,
                animationTime: t.DEFAULT_SETTINGS.animationTime,
                minZoomImageRatio: t.DEFAULT_SETTINGS.minZoomImageRatio,
                maxZoomPixelRatio: t.DEFAULT_SETTINGS.maxZoomPixelRatio,
                visibilityRatio: t.DEFAULT_SETTINGS.visibilityRatio,
                wrapHorizontal: t.DEFAULT_SETTINGS.wrapHorizontal,
                wrapVertical: t.DEFAULT_SETTINGS.wrapVertical,
                defaultZoomLevel: t.DEFAULT_SETTINGS.defaultZoomLevel,
                minZoomLevel: t.DEFAULT_SETTINGS.minZoomLevel,
                maxZoomLevel: t.DEFAULT_SETTINGS.maxZoomLevel,
                degrees: t.DEFAULT_SETTINGS.degrees,
                flipped: t.DEFAULT_SETTINGS.flipped,
                homeFillsViewer: t.DEFAULT_SETTINGS.homeFillsViewer
            }, e), this._updateContainerInnerSize(), this.centerSpringX = new t.Spring({
                initial: 0,
                springStiffness: this.springStiffness,
                animationTime: this.animationTime
            }), this.centerSpringY = new t.Spring({
                initial: 0,
                springStiffness: this.springStiffness,
                animationTime: this.animationTime
            }), this.zoomSpring = new t.Spring({
                exponential: !0,
                initial: 1,
                springStiffness: this.springStiffness,
                animationTime: this.animationTime
            }), this._oldCenterX = this.centerSpringX.current.value, this._oldCenterY = this.centerSpringY.current.value, this._oldZoom = this.zoomSpring.current.value, this._setContentBounds(new t.Rect(0, 0, 1, 1), 1), this.goHome(!0), this.update()
        }, t.Viewport.prototype = {
            resetContentSize: function (e) {
                return t.console.assert(e, "[Viewport.resetContentSize] contentSize is required"), t.console.assert(e instanceof t.Point, "[Viewport.resetContentSize] contentSize must be an OpenSeadragon.Point"), t.console.assert(e.x > 0, "[Viewport.resetContentSize] contentSize.x must be greater than 0"), t.console.assert(e.y > 0, "[Viewport.resetContentSize] contentSize.y must be greater than 0"), this._setContentBounds(new t.Rect(0, 0, 1, e.y / e.x), e.x), this
            }, setHomeBounds: function (e, n) {
                t.console.error("[Viewport.setHomeBounds] this function is deprecated; The content bounds should not be set manually."), this._setContentBounds(e, n)
            }, _setContentBounds: function (e, n) {
                t.console.assert(e, "[Viewport._setContentBounds] bounds is required"), t.console.assert(e instanceof t.Rect, "[Viewport._setContentBounds] bounds must be an OpenSeadragon.Rect"), t.console.assert(e.width > 0, "[Viewport._setContentBounds] bounds.width must be greater than 0"), t.console.assert(e.height > 0, "[Viewport._setContentBounds] bounds.height must be greater than 0"), this._contentBoundsNoRotate = e.clone(), this._contentSizeNoRotate = this._contentBoundsNoRotate.getSize().times(n), this._contentBounds = e.rotate(this.degrees).getBoundingBox(), this._contentSize = this._contentBounds.getSize().times(n), this._contentAspectRatio = this._contentSize.x / this._contentSize.y, this.viewer && this.viewer.raiseEvent("reset-size", {
                    contentSize: this._contentSizeNoRotate.clone(),
                    contentFactor: n,
                    homeBounds: this._contentBoundsNoRotate.clone(),
                    contentBounds: this._contentBounds.clone()
                })
            }, getHomeZoom: function () {
                if (this.defaultZoomLevel) return this.defaultZoomLevel;
                var t = this._contentAspectRatio / this.getAspectRatio();
                return (this.homeFillsViewer ? t >= 1 ? t : 1 : t >= 1 ? 1 : t) / this._contentBounds.width
            }, getHomeBounds: function () {
                return this.getHomeBoundsNoRotate().rotate(-this.getRotation())
            }, getHomeBoundsNoRotate: function () {
                var e = this._contentBounds.getCenter(), n = 1 / this.getHomeZoom(), i = n / this.getAspectRatio();
                return new t.Rect(e.x - n / 2, e.y - i / 2, n, i)
            }, goHome: function (t) {
                return this.viewer && this.viewer.raiseEvent("home", {immediately: t}), this.fitBounds(this.getHomeBounds(), t)
            }, getMinZoom: function () {
                var t = this.getHomeZoom();
                return this.minZoomLevel ? this.minZoomLevel : this.minZoomImageRatio * t
            }, getMaxZoom: function () {
                var t = this.maxZoomLevel;
                return t || (t = this._contentSize.x * this.maxZoomPixelRatio / this._containerInnerSize.x, t /= this._contentBounds.width), Math.max(t, this.getHomeZoom())
            }, getAspectRatio: function () {
                return this._containerInnerSize.x / this._containerInnerSize.y
            }, getContainerSize: function () {
                return new t.Point(this.containerSize.x, this.containerSize.y)
            }, getMargins: function () {
                return t.extend({}, this._margins)
            }, setMargins: function (e) {
                t.console.assert("object" === t.type(e), "[Viewport.setMargins] margins must be an object"), this._margins = t.extend({
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }, e), this._updateContainerInnerSize(), this.viewer && this.viewer.forceRedraw()
            }, getBounds: function (t) {
                return this.getBoundsNoRotate(t).rotate(-this.getRotation())
            }, getBoundsNoRotate: function (e) {
                var n = this.getCenter(e), i = 1 / this.getZoom(e), r = i / this.getAspectRatio();
                return new t.Rect(n.x - i / 2, n.y - r / 2, i, r)
            }, getBoundsWithMargins: function (t) {
                return this.getBoundsNoRotateWithMargins(t).rotate(-this.getRotation(), this.getCenter(t))
            }, getBoundsNoRotateWithMargins: function (t) {
                var e = this.getBoundsNoRotate(t), n = this._containerInnerSize.x * this.getZoom(t);
                return e.x -= this._margins.left / n, e.y -= this._margins.top / n, e.width += (this._margins.left + this._margins.right) / n, e.height += (this._margins.top + this._margins.bottom) / n, e
            }, getCenter: function (e) {
                var n, i, r, o, s, a, l, c,
                    u = new t.Point(this.centerSpringX.current.value, this.centerSpringY.current.value),
                    h = new t.Point(this.centerSpringX.target.value, this.centerSpringY.target.value);
                return e ? u : this.zoomPoint ? (n = this.pixelFromPoint(this.zoomPoint, !0), i = this.getZoom(), r = 1 / i, o = r / this.getAspectRatio(), s = new t.Rect(u.x - r / 2, u.y - o / 2, r, o), a = this._pixelFromPoint(this.zoomPoint, s), l = a.minus(n), c = l.divide(this._containerInnerSize.x * i), h.plus(c)) : h
            }, getZoom: function (t) {
                return t ? this.zoomSpring.current.value : this.zoomSpring.target.value
            }, _applyZoomConstraints: function (t) {
                return Math.max(Math.min(t, this.getMaxZoom()), this.getMinZoom())
            }, _applyBoundaryConstraints: function (e) {
                var n = new t.Rect(e.x, e.y, e.width, e.height);
                if (this.wrapHorizontal) ; else {
                    var i = this.visibilityRatio * n.width, r = n.x + n.width,
                        o = this._contentBoundsNoRotate.x + this._contentBoundsNoRotate.width,
                        s = this._contentBoundsNoRotate.x - r + i, a = o - n.x - i;
                    i > this._contentBoundsNoRotate.width ? n.x += (s + a) / 2 : a < 0 ? n.x += a : s > 0 && (n.x += s)
                }
                if (this.wrapVertical) ; else {
                    var l = this.visibilityRatio * n.height, c = n.y + n.height,
                        u = this._contentBoundsNoRotate.y + this._contentBoundsNoRotate.height,
                        h = this._contentBoundsNoRotate.y - c + l, d = u - n.y - l;
                    l > this._contentBoundsNoRotate.height ? n.y += (h + d) / 2 : d < 0 ? n.y += d : h > 0 && (n.y += h)
                }
                return n
            }, _raiseConstraintsEvent: function (t) {
                this.viewer && this.viewer.raiseEvent("constrain", {immediately: t})
            }, applyConstraints: function (t) {
                var e = this.getZoom(), n = this._applyZoomConstraints(e);
                e !== n && this.zoomTo(n, this.zoomPoint, t);
                var i = this.getBoundsNoRotate(), r = this._applyBoundaryConstraints(i);
                return this._raiseConstraintsEvent(t), (i.x !== r.x || i.y !== r.y || t) && this.fitBounds(r.rotate(-this.getRotation()), t), this
            }, ensureVisible: function (t) {
                return this.applyConstraints(t)
            }, _fitBounds: function (e, n) {
                n = n || {};
                var i = n.immediately || !1, r = n.constraints || !1, o = this.getAspectRatio(), s = e.getCenter(),
                    a = new t.Rect(e.x, e.y, e.width, e.height, e.degrees + this.getRotation()).getBoundingBox();
                a.getAspectRatio() >= o ? a.height = a.width / o : a.width = a.height * o, a.x = s.x - a.width / 2, a.y = s.y - a.height / 2;
                var l = 1 / a.width;
                if (r) {
                    var c = a.getAspectRatio(), u = this._applyZoomConstraints(l);
                    l !== u && (l = u, a.width = 1 / l, a.x = s.x - a.width / 2, a.height = a.width / c, a.y = s.y - a.height / 2), a = this._applyBoundaryConstraints(a), s = a.getCenter(), this._raiseConstraintsEvent(i)
                }
                if (i) return this.panTo(s, !0), this.zoomTo(l, null, !0);
                this.panTo(this.getCenter(!0), !0), this.zoomTo(this.getZoom(!0), null, !0);
                var h = this.getBounds(), d = this.getZoom();
                if (0 === d || Math.abs(l / d - 1) < 1e-8) return this.zoomTo(l, !0), this.panTo(s, i);
                a = a.rotate(-this.getRotation());
                var f = a.getTopLeft().times(l).minus(h.getTopLeft().times(d)).divide(l - d);
                return this.zoomTo(l, f, i)
            }, fitBounds: function (t, e) {
                return this._fitBounds(t, {immediately: e, constraints: !1})
            }, fitBoundsWithConstraints: function (t, e) {
                return this._fitBounds(t, {immediately: e, constraints: !0})
            }, fitVertically: function (e) {
                var n = new t.Rect(this._contentBounds.x + this._contentBounds.width / 2, this._contentBounds.y, 0, this._contentBounds.height);
                return this.fitBounds(n, e)
            }, fitHorizontally: function (e) {
                var n = new t.Rect(this._contentBounds.x, this._contentBounds.y + this._contentBounds.height / 2, this._contentBounds.width, 0);
                return this.fitBounds(n, e)
            }, getConstrainedBounds: function (t) {
                var e;
                return e = this.getBounds(t), this._applyBoundaryConstraints(e)
            }, panBy: function (e, n) {
                var i = new t.Point(this.centerSpringX.target.value, this.centerSpringY.target.value);
                return this.panTo(i.plus(e), n)
            }, panTo: function (t, e) {
                return e ? (this.centerSpringX.resetTo(t.x), this.centerSpringY.resetTo(t.y)) : (this.centerSpringX.springTo(t.x), this.centerSpringY.springTo(t.y)), this.viewer && this.viewer.raiseEvent("pan", {
                    center: t,
                    immediately: e
                }), this
            }, zoomBy: function (t, e, n) {
                return this.zoomTo(this.zoomSpring.target.value * t, e, n)
            }, zoomTo: function (e, n, i) {
                var r = this;
                return this.zoomPoint = n instanceof t.Point && !isNaN(n.x) && !isNaN(n.y) ? n : null, i ? this._adjustCenterSpringsForZoomPoint(function () {
                    r.zoomSpring.resetTo(e)
                }) : this.zoomSpring.springTo(e), this.viewer && this.viewer.raiseEvent("zoom", {
                    zoom: e,
                    refPoint: n,
                    immediately: i
                }), this
            }, setRotation: function (e) {
                return this.viewer && this.viewer.drawer.canRotate() ? (this.degrees = t.positiveModulo(e, 360), this._setContentBounds(this.viewer.world.getHomeBounds(), this.viewer.world.getContentFactor()), this.viewer.forceRedraw(), this.viewer.raiseEvent("rotate", {degrees: e}), this) : this
            }, getRotation: function () {
                return this.degrees
            }, resize: function (t, e) {
                var n, i = this.getBoundsNoRotate(), r = i;
                return this.containerSize.x = t.x, this.containerSize.y = t.y, this._updateContainerInnerSize(), e && (n = t.x / this.containerSize.x, r.width = i.width * n, r.height = r.width / this.getAspectRatio()), this.viewer && this.viewer.raiseEvent("resize", {
                    newContainerSize: t,
                    maintain: e
                }), this.fitBounds(r, !0)
            }, _updateContainerInnerSize: function () {
                this._containerInnerSize = new t.Point(Math.max(1, this.containerSize.x - (this._margins.left + this._margins.right)), Math.max(1, this.containerSize.y - (this._margins.top + this._margins.bottom)))
            }, update: function () {
                var t = this;
                this._adjustCenterSpringsForZoomPoint(function () {
                    t.zoomSpring.update()
                }), this.centerSpringX.update(), this.centerSpringY.update();
                var e = this.centerSpringX.current.value !== this._oldCenterX || this.centerSpringY.current.value !== this._oldCenterY || this.zoomSpring.current.value !== this._oldZoom;
                return this._oldCenterX = this.centerSpringX.current.value, this._oldCenterY = this.centerSpringY.current.value, this._oldZoom = this.zoomSpring.current.value, e
            }, _adjustCenterSpringsForZoomPoint: function (t) {
                if (this.zoomPoint) {
                    var e = this.pixelFromPoint(this.zoomPoint, !0);
                    t();
                    var n = this.pixelFromPoint(this.zoomPoint, !0), i = n.minus(e),
                        r = this.deltaPointsFromPixels(i, !0);
                    this.centerSpringX.shiftBy(r.x), this.centerSpringY.shiftBy(r.y), this.zoomSpring.isAtTargetValue() && (this.zoomPoint = null)
                } else t()
            }, deltaPixelsFromPointsNoRotate: function (t, e) {
                return t.times(this._containerInnerSize.x * this.getZoom(e))
            }, deltaPixelsFromPoints: function (t, e) {
                return this.deltaPixelsFromPointsNoRotate(t.rotate(this.getRotation()), e)
            }, deltaPointsFromPixelsNoRotate: function (t, e) {
                return t.divide(this._containerInnerSize.x * this.getZoom(e))
            }, deltaPointsFromPixels: function (t, e) {
                return this.deltaPointsFromPixelsNoRotate(t, e).rotate(-this.getRotation())
            }, pixelFromPointNoRotate: function (t, e) {
                return this._pixelFromPointNoRotate(t, this.getBoundsNoRotate(e))
            }, pixelFromPoint: function (t, e) {
                return this._pixelFromPoint(t, this.getBoundsNoRotate(e))
            }, _pixelFromPointNoRotate: function (e, n) {
                return e.minus(n.getTopLeft()).times(this._containerInnerSize.x / n.width).plus(new t.Point(this._margins.left, this._margins.top))
            }, _pixelFromPoint: function (t, e) {
                return this._pixelFromPointNoRotate(t.rotate(this.getRotation(), this.getCenter(!0)), e)
            }, pointFromPixelNoRotate: function (e, n) {
                var i = this.getBoundsNoRotate(n);
                return e.minus(new t.Point(this._margins.left, this._margins.top)).divide(this._containerInnerSize.x / i.width).plus(i.getTopLeft())
            }, pointFromPixel: function (t, e) {
                return this.pointFromPixelNoRotate(t, e).rotate(-this.getRotation(), this.getCenter(!0))
            }, _viewportToImageDelta: function (e, n) {
                var i = this._contentBoundsNoRotate.width;
                return new t.Point(e * this._contentSizeNoRotate.x / i, n * this._contentSizeNoRotate.x / i)
            }, viewportToImageCoordinates: function (e, n) {
                if (e instanceof t.Point) return this.viewportToImageCoordinates(e.x, e.y);
                if (this.viewer) {
                    var i = this.viewer.world.getItemCount();
                    if (i > 1) t.console.error("[Viewport.viewportToImageCoordinates] is not accurate with multi-image; use TiledImage.viewportToImageCoordinates instead."); else if (1 === i) {
                        var r = this.viewer.world.getItemAt(0);
                        return r.viewportToImageCoordinates(e, n, !0)
                    }
                }
                return this._viewportToImageDelta(e - this._contentBoundsNoRotate.x, n - this._contentBoundsNoRotate.y)
            }, _imageToViewportDelta: function (e, n) {
                var i = this._contentBoundsNoRotate.width;
                return new t.Point(e / this._contentSizeNoRotate.x * i, n / this._contentSizeNoRotate.x * i)
            }, imageToViewportCoordinates: function (e, n) {
                if (e instanceof t.Point) return this.imageToViewportCoordinates(e.x, e.y);
                if (this.viewer) {
                    var i = this.viewer.world.getItemCount();
                    if (i > 1) t.console.error("[Viewport.imageToViewportCoordinates] is not accurate with multi-image; use TiledImage.imageToViewportCoordinates instead."); else if (1 === i) {
                        var r = this.viewer.world.getItemAt(0);
                        return r.imageToViewportCoordinates(e, n, !0)
                    }
                }
                var o = this._imageToViewportDelta(e, n);
                return o.x += this._contentBoundsNoRotate.x, o.y += this._contentBoundsNoRotate.y, o
            }, imageToViewportRectangle: function (e, n, i, r) {
                var o = e;
                if (o instanceof t.Rect || (o = new t.Rect(e, n, i, r)), this.viewer) {
                    var s = this.viewer.world.getItemCount();
                    if (s > 1) t.console.error("[Viewport.imageToViewportRectangle] is not accurate with multi-image; use TiledImage.imageToViewportRectangle instead."); else if (1 === s) {
                        var a = this.viewer.world.getItemAt(0);
                        return a.imageToViewportRectangle(e, n, i, r, !0)
                    }
                }
                var l = this.imageToViewportCoordinates(o.x, o.y), c = this._imageToViewportDelta(o.width, o.height);
                return new t.Rect(l.x, l.y, c.x, c.y, o.degrees)
            }, viewportToImageRectangle: function (e, n, i, r) {
                var o = e;
                if (o instanceof t.Rect || (o = new t.Rect(e, n, i, r)), this.viewer) {
                    var s = this.viewer.world.getItemCount();
                    if (s > 1) t.console.error("[Viewport.viewportToImageRectangle] is not accurate with multi-image; use TiledImage.viewportToImageRectangle instead."); else if (1 === s) {
                        var a = this.viewer.world.getItemAt(0);
                        return a.viewportToImageRectangle(e, n, i, r, !0)
                    }
                }
                var l = this.viewportToImageCoordinates(o.x, o.y), c = this._viewportToImageDelta(o.width, o.height);
                return new t.Rect(l.x, l.y, c.x, c.y, o.degrees)
            }, viewerElementToImageCoordinates: function (t) {
                var e = this.pointFromPixel(t, !0);
                return this.viewportToImageCoordinates(e)
            }, imageToViewerElementCoordinates: function (t) {
                var e = this.imageToViewportCoordinates(t);
                return this.pixelFromPoint(e, !0)
            }, windowToImageCoordinates: function (e) {
                t.console.assert(this.viewer, "[Viewport.windowToImageCoordinates] the viewport must have a viewer.");
                var n = e.minus(t.getElementPosition(this.viewer.element));
                return this.viewerElementToImageCoordinates(n)
            }, imageToWindowCoordinates: function (e) {
                return t.console.assert(this.viewer, "[Viewport.imageToWindowCoordinates] the viewport must have a viewer."), this.imageToViewerElementCoordinates(e).plus(t.getElementPosition(this.viewer.element))
            }, viewerElementToViewportCoordinates: function (t) {
                return this.pointFromPixel(t, !0)
            }, viewportToViewerElementCoordinates: function (t) {
                return this.pixelFromPoint(t, !0)
            }, viewerElementToViewportRectangle: function (e) {
                return t.Rect.fromSummits(this.pointFromPixel(e.getTopLeft(), !0), this.pointFromPixel(e.getTopRight(), !0), this.pointFromPixel(e.getBottomLeft(), !0))
            }, viewportToViewerElementRectangle: function (e) {
                return t.Rect.fromSummits(this.pixelFromPoint(e.getTopLeft(), !0), this.pixelFromPoint(e.getTopRight(), !0), this.pixelFromPoint(e.getBottomLeft(), !0))
            }, windowToViewportCoordinates: function (e) {
                t.console.assert(this.viewer, "[Viewport.windowToViewportCoordinates] the viewport must have a viewer.");
                var n = e.minus(t.getElementPosition(this.viewer.element));
                return this.viewerElementToViewportCoordinates(n)
            }, viewportToWindowCoordinates: function (e) {
                return t.console.assert(this.viewer, "[Viewport.viewportToWindowCoordinates] the viewport must have a viewer."), this.viewportToViewerElementCoordinates(e).plus(t.getElementPosition(this.viewer.element))
            }, viewportToImageZoom: function (e) {
                if (this.viewer) {
                    var n = this.viewer.world.getItemCount();
                    if (n > 1) t.console.error("[Viewport.viewportToImageZoom] is not accurate with multi-image."); else if (1 === n) {
                        var i = this.viewer.world.getItemAt(0);
                        return i.viewportToImageZoom(e)
                    }
                }
                var r = this._contentSizeNoRotate.x;
                return e * (this._containerInnerSize.x / r * this._contentBoundsNoRotate.width)
            }, imageToViewportZoom: function (e) {
                if (this.viewer) {
                    var n = this.viewer.world.getItemCount();
                    if (n > 1) t.console.error("[Viewport.imageToViewportZoom] is not accurate with multi-image."); else if (1 === n) {
                        var i = this.viewer.world.getItemAt(0);
                        return i.imageToViewportZoom(e)
                    }
                }
                return e * (this._contentSizeNoRotate.x / this._containerInnerSize.x / this._contentBoundsNoRotate.width)
            }, toggleFlip: function () {
                return this.setFlip(!this.getFlip()), this
            }, getFlip: function () {
                return this.flipped
            }, setFlip: function (t) {
                return this.flipped === t ? this : (this.flipped = t, this.viewer.navigator && this.viewer.navigator.setFlip(this.getFlip()), this.viewer.forceRedraw(), this.viewer.raiseEvent("flip", {flipped: t}), this)
            }
        }
    }(OpenSeadragon)
}, function (t, e) {
    !function (t) {
        t.World = function (e) {
            var n = this;
            t.console.assert(e.viewer, "[World] options.viewer is required"), t.EventSource.call(this), this.viewer = e.viewer, this._items = [], this._needsDraw = !1, this._autoRefigureSizes = !0, this._needsSizesFigured = !1, this._delegatedFigureSizes = function (t) {
                n._autoRefigureSizes ? n._figureSizes() : n._needsSizesFigured = !0
            }, this._figureSizes()
        }, t.extend(t.World.prototype, t.EventSource.prototype, {
            addItem: function (e, n) {
                if (t.console.assert(e, "[World.addItem] item is required"), t.console.assert(e instanceof t.TiledImage, "[World.addItem] only TiledImages supported at this time"), n = n || {}, void 0 !== n.index) {
                    var i = Math.max(0, Math.min(this._items.length, n.index));
                    this._items.splice(i, 0, e)
                } else this._items.push(e);
                this._autoRefigureSizes ? this._figureSizes() : this._needsSizesFigured = !0, this._needsDraw = !0, e.addHandler("bounds-change", this._delegatedFigureSizes), e.addHandler("clip-change", this._delegatedFigureSizes), this.raiseEvent("add-item", {item: e})
            }, getItemAt: function (e) {
                return t.console.assert(void 0 !== e, "[World.getItemAt] index is required"), this._items[e]
            }, getIndexOfItem: function (e) {
                return t.console.assert(e, "[World.getIndexOfItem] item is required"), t.indexOf(this._items, e)
            }, getItemCount: function () {
                return this._items.length
            }, setItemIndex: function (e, n) {
                t.console.assert(e, "[World.setItemIndex] item is required"), t.console.assert(void 0 !== n, "[World.setItemIndex] index is required");
                var i = this.getIndexOfItem(e);
                if (n >= this._items.length) throw new Error("Index bigger than number of layers.");
                n !== i && -1 !== i && (this._items.splice(i, 1), this._items.splice(n, 0, e), this._needsDraw = !0, this.raiseEvent("item-index-change", {
                    item: e,
                    previousIndex: i,
                    newIndex: n
                }))
            }, removeItem: function (e) {
                t.console.assert(e, "[World.removeItem] item is required");
                var n = t.indexOf(this._items, e);
                -1 !== n && (e.removeHandler("bounds-change", this._delegatedFigureSizes), e.removeHandler("clip-change", this._delegatedFigureSizes), e.destroy(), this._items.splice(n, 1), this._figureSizes(), this._needsDraw = !0, this._raiseRemoveItem(e))
            }, removeAll: function () {
                this.viewer._cancelPendingImages();
                var t, e;
                for (e = 0; e < this._items.length; e++) t = this._items[e], t.removeHandler("bounds-change", this._delegatedFigureSizes), t.removeHandler("clip-change", this._delegatedFigureSizes), t.destroy();
                var n = this._items;
                for (this._items = [], this._figureSizes(), this._needsDraw = !0, e = 0; e < n.length; e++) t = n[e], this._raiseRemoveItem(t)
            }, resetItems: function () {
                for (var t = 0; t < this._items.length; t++) this._items[t].reset()
            }, update: function () {
                for (var t = !1, e = 0; e < this._items.length; e++) t = this._items[e].update() || t;
                return t
            }, draw: function () {
                for (var t = 0; t < this._items.length; t++) this._items[t].draw();
                this._needsDraw = !1
            }, needsDraw: function () {
                for (var t = 0; t < this._items.length; t++) if (this._items[t].needsDraw()) return !0;
                return this._needsDraw
            }, getHomeBounds: function () {
                return this._homeBounds.clone()
            }, getContentFactor: function () {
                return this._contentFactor
            }, setAutoRefigureSizes: function (t) {
                this._autoRefigureSizes = t, t & this._needsSizesFigured && (this._figureSizes(), this._needsSizesFigured = !1)
            }, arrange: function (e) {
                e = e || {};
                var n, i = e.immediately || !1, r = e.layout || t.DEFAULT_SETTINGS.collectionLayout,
                    o = e.rows || t.DEFAULT_SETTINGS.collectionRows,
                    s = e.columns || t.DEFAULT_SETTINGS.collectionColumns,
                    a = e.tileSize || t.DEFAULT_SETTINGS.collectionTileSize,
                    l = e.tileMargin || t.DEFAULT_SETTINGS.collectionTileMargin, c = a + l;
                n = !e.rows && s ? s : Math.ceil(this._items.length / o);
                var u, h, d, f, p, v = 0, g = 0;
                this.setAutoRefigureSizes(!1);
                for (var m = 0; m < this._items.length; m++) m && m % n == 0 && ("horizontal" === r ? (g += c, v = 0) : (v += c, g = 0)), u = this._items[m], h = u.getBounds(), d = h.width > h.height ? a : a * (h.width / h.height), f = d * (h.height / h.width), p = new t.Point(v + (a - d) / 2, g + (a - f) / 2), u.setPosition(p, i), u.setWidth(d, i), "horizontal" === r ? v += c : g += c;
                this.setAutoRefigureSizes(!0)
            }, _figureSizes: function () {
                var e = this._homeBounds ? this._homeBounds.clone() : null,
                    n = this._contentSize ? this._contentSize.clone() : null, i = this._contentFactor || 0;
                if (this._items.length) {
                    var r = this._items[0], o = r.getBounds();
                    this._contentFactor = r.getContentSize().x / o.width;
                    for (var s = r.getClippedBounds().getBoundingBox(), a = s.x, l = s.y, c = s.x + s.width, u = s.y + s.height, h = 1; h < this._items.length; h++) r = this._items[h], o = r.getBounds(), this._contentFactor = Math.max(this._contentFactor, r.getContentSize().x / o.width), s = r.getClippedBounds().getBoundingBox(), a = Math.min(a, s.x), l = Math.min(l, s.y), c = Math.max(c, s.x + s.width), u = Math.max(u, s.y + s.height);
                    this._homeBounds = new t.Rect(a, l, c - a, u - l), this._contentSize = new t.Point(this._homeBounds.width * this._contentFactor, this._homeBounds.height * this._contentFactor)
                } else this._homeBounds = new t.Rect(0, 0, 1, 1), this._contentSize = new t.Point(1, 1), this._contentFactor = 1;
                this._contentFactor === i && this._homeBounds.equals(e) && this._contentSize.equals(n) || this.raiseEvent("metrics-change", {})
            }, _raiseRemoveItem: function (t) {
                this.raiseEvent("remove-item", {item: t})
            }
        })
    }(OpenSeadragon)
}, function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("section", {staticClass: "tify-scan"}, [n("h2", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Scan")))]), t._v(" "), t.customPageViewActive || t.isFirstPage ? t._e() : n("button", {
            staticClass: "tify-scan_page-button -previous",
            attrs: {title: t._f("trans")("Previous page")},
            on: {click: t.goToPreviousPage}
        }, [n("icon", {attrs: {name: "navigate_before"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Previous page")))])], 1), t._v(" "), t.customPageViewActive || t.isLastPage ? t._e() : n("button", {
            staticClass: "tify-scan_page-button -next",
            attrs: {title: t._f("trans")("Next page")},
            on: {click: t.goToNextPage}
        }, [n("icon", {attrs: {name: "navigate_next"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Next page")))])], 1), t._v(" "), t.viewer ? n("div", {staticClass: "tify-scan_buttons"}, [n("button", {
            staticClass: "tify-scan_button",
            attrs: {disabled: t.isMaxZoom, title: t._f("trans")("Zoom in")},
            on: {click: t.zoomIn}
        }, [n("icon", {attrs: {name: "zoom_in"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Zoom in")))])], 1), t._v(" "), n("button", {
            staticClass: "tify-scan_button",
            attrs: {disabled: t.isReset, title: t._f("trans")("Reset")},
            on: {
                click: function (e) {
                    return t.resetView(e)
                }
            }
        }, [n("icon", {attrs: {name: "aspect_ratio"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Reset")))])], 1), t._v(" "), n("button", {
            staticClass: "tify-scan_button",
            attrs: {disabled: t.isMinZoom, title: t._f("trans")("Zoom out")},
            on: {click: t.zoomOut}
        }, [n("icon", {attrs: {name: "zoom_out"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Zoom out")))])], 1), t._v(" "), n("button", {
            staticClass: "tify-scan_button",
            class: {"-active": t.$root.params.rotation},
            attrs: {title: t._f("trans")("Rotate")},
            on: {
                click: function (e) {
                    return t.rotateRight(e)
                }
            }
        }, [n("icon", {attrs: {name: "rotate_right"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Rotate")))])], 1), t._v(" "), t.cssFiltersSupported ? n("div", {
            directives: [{
                name: "click-outside",
                rawName: "v-click-outside",
                value: t.closeFilters,
                expression: "closeFilters"
            }], staticClass: "tify-scan_filters", class: {"-open": t.filtersVisible}
        }, [n("button", {
            staticClass: "tify-scan_button",
            class: {"-active": t.filtersActive},
            attrs: {title: t._f("trans")("Toggle image filters")},
            on: {
                click: function (e) {
                    t.filtersVisible = !t.filtersVisible
                }
            }
        }, [n("icon", {attrs: {name: "tune"}}), t._v(" "), n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Toggle image filters")))])], 1), t._v(" "), n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: t.filtersVisible,
                expression: "filtersVisible"
            }], staticClass: "tify-scan_filter-popup"
        }, [n("p", [n("label", {attrs: {for: "tify-scan_brightness"}}, [n("icon", {
            staticClass: "-light",
            attrs: {name: "wb_sunny"}
        }), t._v("\n\t\t\t\t\t\t" + t._s(t._f("trans")("Brightness:")) + "\n\t\t\t\t\t\t" + t._s(Math.round(100 * (t.$root.params.filters.brightness || 1))) + " %\n\t\t\t\t\t")], 1), t._v(" "), n("input", {
            ref: "firstSlider",
            staticClass: "tify-scan_range",
            attrs: {id: "tify-scan_brightness", max: "2", min: ".5", step: ".01", type: "range"},
            domProps: {value: t.$root.params.filters.brightness || 1},
            on: {
                input: function (e) {
                    return t.setFilter("brightness", e)
                }
            }
        })]), t._v(" "), n("p", [n("label", {attrs: {for: "tify-scan_contrast"}}, [n("icon", {
            staticClass: "-light",
            attrs: {name: "brightness_medium"}
        }), t._v("\n\t\t\t\t\t\t" + t._s(t._f("trans")("Contrast:")) + "\n\t\t\t\t\t\t" + t._s(Math.round(100 * (t.$root.params.filters.contrast || 1))) + " %\n\t\t\t\t\t")], 1), t._v(" "), n("input", {
            staticClass: "tify-scan_range",
            attrs: {id: "tify-scan_contrast", max: "2", min: ".5", step: ".01", type: "range"},
            domProps: {value: t.$root.params.filters.contrast || 1},
            on: {
                input: function (e) {
                    return t.setFilter("contrast", e)
                }
            }
        })]), t._v(" "), n("p", [n("label", {attrs: {for: "tify-scan_saturation"}}, [n("icon", {
            staticClass: "-light",
            attrs: {name: "palette"}
        }), t._v("\n\t\t\t\t\t\t" + t._s(t._f("trans")("Saturation:")) + "\n\t\t\t\t\t\t" + t._s(Math.round(100 * t.saturation)) + " %\n\t\t\t\t\t")], 1), t._v(" "), n("input", {
            staticClass: "tify-scan_range",
            attrs: {id: "tify-scan_saturation", max: "3", min: "0", step: ".01", type: "range"},
            domProps: {value: t.saturation},
            on: {
                input: function (e) {
                    return t.setFilter("saturate", e)
                }
            }
        })]), t._v(" "), n("p", [n("button", {
            staticClass: "tify-scan_reset",
            attrs: {disabled: !t.filtersActive},
            on: {click: t.resetFilters}
        }, [n("icon", {attrs: {name: "settings_backup_restore"}}), t._v("\n\t\t\t\t\t\t" + t._s(t._f("trans")("Reset")) + "\n\t\t\t\t\t")], 1)])])]) : t._e()]) : t._e(), t._v(" "), n("div", {
            ref: "image",
            staticClass: "tify-scan_image",
            attrs: {id: "tify-scan_image"}
        })])
    }, r = [], o = {render: i, staticRenderFns: r};
    e.a = o
}, function (t, e, n) {
    "use strict";
    var i = n(85), r = n(192), o = n(3), s = o(i.a, r.a, !1, null, null, null);
    e.a = s.exports
}, function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("section", {
            staticClass: "tify-thumbnails",
            on: {scroll: t.redrawThumbnails}
        }, [n("h2", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Pages")))]), t._v(" "), n("div", {
            ref: "container",
            staticClass: "tify-thumbnails_list"
        }, t._l(t.items, function (e) {
            return n("a", {
                key: e.page,
                staticClass: "tify-thumbnails_item",
                class: {"-current": t.$root.params.pages.indexOf(e.page) > -1},
                attrs: {href: ""},
                on: {
                    click: function (n) {
                        return n.preventDefault(), t.setPageAndSwitchView(e.page, n.ctrlKey)
                    }, touchstart: function (n) {
                        return t.touchStartTogglePage(e.page)
                    }, touchend: t.touchEnd
                }
            }, [n("img", {
                attrs: {
                    alt: "",
                    src: e.imgUrl
                }
            }), t._v(" "), n("span", {staticClass: "tify-thumbnails_page"}, [t._v("\n\t\t\t\t" + t._s(e.page) + " : " + t._s(e.label) + "\n\t\t\t")])])
        }), 0)])
    }, r = [], o = {render: i, staticRenderFns: r};
    e.a = o
}, function (t, e, n) {
    "use strict";
    var i = n(87), r = n(194), o = n(3), s = o(i.a, r.a, !1, null, null, null);
    e.a = s.exports
}, function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("section", {staticClass: "tify-toc"}, [n("h2", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Table of Contents")))]), t._v(" "), t.hasChildStructures ? n("div", {staticClass: "tify-toc_header"}, [n("button", {
            staticClass: "tify-toc_toggle-all",
            on: {
                click: function (e) {
                    return t.$refs.children.toggleAllChildren(!0)
                }
            }
        }, [t._v("\n\t\t\t" + t._s(t._f("trans")("Expand all")) + "\n\t\t")]), t._v(" "), n("button", {
            staticClass: "tify-toc_toggle-all",
            on: {
                click: function (e) {
                    return t.$refs.children.toggleAllChildren(!1)
                }
            }
        }, [t._v("\n\t\t\t" + t._s(t._f("trans")("Collapse all")) + "\n\t\t")])]) : t._e(), t._v(" "), t.isInited ? n("toc-list", {
            ref: "children",
            attrs: {level: 0, structures: t.structures}
        }) : t._e()], 1)
    }, r = [], o = {render: i, staticRenderFns: r};
    e.a = o
}, function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {staticClass: "tify-app"}, [t.$root.manifest ? n("app-header", {
            attrs: {
                fulltextEnabled: t.hasOtherContent,
                tocEnabled: t.hasToc
            }
        }) : t._e(), t._v(" "), t.$root.manifest ? n("div", {staticClass: "tify-app_main"}, [n("scan"), t._v(" "), t.hasOtherContent ? n("fulltext", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: "fulltext" === t.$root.params.view,
                expression: "$root.params.view === 'fulltext'"
            }]
        }) : t._e(), t._v(" "), t.hasToc ? n("toc", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: "toc" === t.$root.params.view,
                expression: "$root.params.view === 'toc'"
            }]
        }) : t._e(), t._v(" "), n("thumbnails", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: "thumbnails" === t.$root.params.view,
                expression: "$root.params.view === 'thumbnails'"
            }]
        }), t._v(" "), n("info", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: "info" === t.$root.params.view,
                expression: "$root.params.view === 'info'"
            }]
        }), t._v(" "), n("export", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: "export" === t.$root.params.view,
                expression: "$root.params.view === 'export'"
            }]
        }), t._v(" "), n("help", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: "help" === t.$root.params.view,
                expression: "$root.params.view === 'help'"
            }]
        })], 1) : t._e(), t._v(" "), t.$root.loading ? n("div", {
            staticClass: "tify-app_loading",
            class: {"-centered": !t.$root.manifest}
        }, [n("span", {staticClass: "tify-sr-only"}, [t._v(t._s(t._f("trans")("Loading")))])]) : t._e(), t._v(" "), t.$root.error ? n("div", {staticClass: "tify-app_error"}, [n("button", {
            staticClass: "tify-app_error-close",
            on: {
                click: function (e) {
                    t.$root.error = ""
                }
            }
        }, [n("icon", {attrs: {name: "close"}})], 1), t._v(" "), n("span", {domProps: {innerHTML: t._s(t.$root.error)}})]) : t._e()], 1)
    }, r = [], o = {render: i, staticRenderFns: r};
    e.a = o
}, function (t, e, n) {
    "use strict";
    var i = n(88), r = n(197), o = n(3), s = o(i.a, r.a, !1, null, null, null);
    e.a = s.exports
}, function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this, e = t.$createElement;
        return (t._self._c || e)("i", {class: "tify-icon -" + t.name}, [t._v(t._s(t.name))])
    }, r = [], o = {render: i, staticRenderFns: r};
    e.a = o
}, function (t, e, n) {
    "use strict";
    n(26).a.directive("click-outside", {
        bind: function (t, e, n) {
            t.event = function (i) {
                t === i.target || t.contains(i.target) || n.context[e.expression](i)
            }, document.body.addEventListener("click", t.event)
        }, unbind: function (t) {
            document.body.removeEventListener("click", t.event)
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(26), r = n(200), o = n.n(r);
    i.a.filter("filterHtml", function (t) {
        var e = ["a", "b", "br", "i", "img", "p", "span"], n = {a: ["href"], img: ["alt", "src"]}, i = o()(t, e),
            r = /<(\w+)((\s+.+?(\s*=\s*(?:".*?"|'.*?'|.*?|[\^'">\s]+))?)+\s*|\s*)>/g;
        return i = i.replace(r, function (t, e, i) {
            if (!i) return "<" + e + ">";
            var r = /(?:([^\s]+)=(?:"(.*?)"|'(.*?)'))|([^\s]+)/g, o = [];
            return i.replace(r, function (t, i) {
                t !== i && n[e] && n[e].indexOf(i) > -1 && o.push(t)
            }), o.length > 0 ? "<" + e + " " + o.join(" ") + ">" : "<" + e + ">"
        })
    })
}, function (t, e, n) {
    "use strict";
    var i, r, o;
    !function (n, s) {
        r = [], i = s, void 0 !== (o = "function" == typeof i ? i.apply(e, r) : i) && (t.exports = o)
    }(0, function () {
        function t(t, a, l) {
            function c(t) {
                f == n ? v += t : a && f == i && (g += t)
            }

            var u, h, d, t = t || "", f = n, p = 0, v = "", g = "", m = !1;
            for ("string" == typeof a ? a = e(a) : Array.isArray(a) || (a = null), u = 0, h = t.length; u < h; u++) switch (d = t[u]) {
                case"<":
                    if (m) break;
                    if (" " == t[u + 1]) {
                        c(d);
                        break
                    }
                    if (f == n) {
                        f = i, c(d);
                        break
                    }
                    if (f == i) {
                        p++;
                        break
                    }
                    c(d);
                    break;
                case">":
                    if (p) {
                        p--;
                        break
                    }
                    if (m) break;
                    if (f == i) {
                        m = f = 0, a && (g += ">", function () {
                            var t, e, n, i = "", r = !1;
                            t:for (t = 0, e = g.length; t < e; t++) switch (n = g[t].toLowerCase()) {
                                case"<":
                                    break;
                                case">":
                                    break t;
                                case"/":
                                    r = !0;
                                    break;
                                default:
                                    if (n.match(s)) {
                                        if (r) break t
                                    } else r = !0, i += n
                            }
                            -1 !== a.indexOf(i) ? v += g : l && (v += l), g = ""
                        }());
                        break
                    }
                    if (f == r) {
                        m = f = 0, g = "";
                        break
                    }
                    if (f == o && "-" == t[u - 1] && "-" == t[u - 2]) {
                        m = f = 0, g = "";
                        break
                    }
                    c(d);
                    break;
                case'"':
                case"'":
                    f == i && (m == d ? m = !1 : m || (m = d)), c(d);
                    break;
                case"!":
                    if (f == i && "<" == t[u - 1]) {
                        f = r;
                        break
                    }
                    c(d);
                    break;
                case"-":
                    if (f == r && "-" == t[u - 1] && "!" == t[u - 2]) {
                        f = o;
                        break
                    }
                    c(d);
                    break;
                case"E":
                case"e":
                    if (f == r && "doctype" == t.substr(u - 6, 7).toLowerCase()) {
                        f = i;
                        break
                    }
                    c(d);
                    break;
                default:
                    c(d)
            }
            return v
        }

        function e(t) {
            for (var e, n = []; null !== (e = a.exec(t));) n.push(e[1]);
            return 0 !== n.length ? n : null
        }

        var n = 0, i = 1, r = 2, o = 3, s = /\s/, a = /<(\w*)>/g;
        return t
    })
}, function (t, e, n) {
    "use strict";
    var i = n(26), r = n(52);
    i.a.filter("trans", function (t) {
        return r.default.messages ? r.default.messages[t] ? r.default.messages[t] : ("en" !== r.default.options.language && console.warn('Missing translation for "' + t + '"'), t) : t
    })
}, function (t, e) {
    Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
        value: function (t) {
            if (null == this) throw new TypeError("Array.prototype.findIndex called on null or undefined");
            if ("function" != typeof t) throw new TypeError("predicate must be a function");
            for (var e = Object(this), n = e.length >>> 0, i = arguments[1], r = void 0, o = 0; o < n; o += 1) if (r = e[o], t.call(i, r, o, e)) return o;
            return -1
        }, enumerable: !1, configurable: !1, writable: !1
    })
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), function (t) {
        function i(t) {
            return Boolean(t && void 0 !== t.length)
        }

        function r() {
        }

        function o(t, e) {
            return function () {
                t.apply(e, arguments)
            }
        }

        function s(t) {
            if (!(this instanceof s)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof t) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(t, this)
        }

        function a(t, e) {
            for (; 3 === t._state;) t = t._value;
            if (0 === t._state) return void t._deferreds.push(e);
            t._handled = !0, s._immediateFn(function () {
                var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                if (null === n) return void (1 === t._state ? l : c)(e.promise, t._value);
                var i;
                try {
                    i = n(t._value)
                } catch (t) {
                    return void c(e.promise, t)
                }
                l(e.promise, i)
            })
        }

        function l(t, e) {
            try {
                if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                if (e && ("object" == typeof e || "function" == typeof e)) {
                    var n = e.then;
                    if (e instanceof s) return t._state = 3, t._value = e, void u(t);
                    if ("function" == typeof n) return void d(o(n, e), t)
                }
                t._state = 1, t._value = e, u(t)
            } catch (e) {
                c(t, e)
            }
        }

        function c(t, e) {
            t._state = 2, t._value = e, u(t)
        }

        function u(t) {
            2 === t._state && 0 === t._deferreds.length && s._immediateFn(function () {
                t._handled || s._unhandledRejectionFn(t._value)
            });
            for (var e = 0, n = t._deferreds.length; e < n; e++) a(t, t._deferreds[e]);
            t._deferreds = null
        }

        function h(t, e, n) {
            this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
        }

        function d(t, e) {
            var n = !1;
            try {
                t(function (t) {
                    n || (n = !0, l(e, t))
                }, function (t) {
                    n || (n = !0, c(e, t))
                })
            } catch (t) {
                if (n) return;
                n = !0, c(e, t)
            }
        }

        var f = n(204), p = setTimeout;
        s.prototype.catch = function (t) {
            return this.then(null, t)
        }, s.prototype.then = function (t, e) {
            var n = new this.constructor(r);
            return a(this, new h(t, e, n)), n
        }, s.prototype.finally = f.a, s.all = function (t) {
            return new s(function (e, n) {
                function r(t, i) {
                    try {
                        if (i && ("object" == typeof i || "function" == typeof i)) {
                            var a = i.then;
                            if ("function" == typeof a) return void a.call(i, function (e) {
                                r(t, e)
                            }, n)
                        }
                        o[t] = i, 0 == --s && e(o)
                    } catch (t) {
                        n(t)
                    }
                }

                if (!i(t)) return n(new TypeError("Promise.all accepts an array"));
                var o = Array.prototype.slice.call(t);
                if (0 === o.length) return e([]);
                for (var s = o.length, a = 0; a < o.length; a++) r(a, o[a])
            })
        }, s.resolve = function (t) {
            return t && "object" == typeof t && t.constructor === s ? t : new s(function (e) {
                e(t)
            })
        }, s.reject = function (t) {
            return new s(function (e, n) {
                n(t)
            })
        }, s.race = function (t) {
            return new s(function (e, n) {
                if (!i(t)) return n(new TypeError("Promise.race accepts an array"));
                for (var r = 0, o = t.length; r < o; r++) s.resolve(t[r]).then(e, n)
            })
        }, s._immediateFn = "function" == typeof t && function (e) {
            t(e)
        } || function (t) {
            p(t, 0)
        }, s._unhandledRejectionFn = function (t) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
        }, e.default = s
    }.call(e, n(71).setImmediate)
}, function (t, e, n) {
    "use strict";

    function i(t) {
        var e = this.constructor;
        return this.then(function (n) {
            return e.resolve(t()).then(function () {
                return n
            })
        }, function (n) {
            return e.resolve(t()).then(function () {
                return e.reject(n)
            })
        })
    }

    e.a = i
}, function (t, e, n) {
    t.exports = n(206)
}, function (t, e, n) {
    "use strict";

    function i(t) {
        var e = new s(t), n = o(s.prototype.request, e);
        return r.extend(n, s.prototype, e), r.extend(n, e), n
    }

    var r = n(4), o = n(89), s = n(208), a = n(95), l = n(92), c = i(l);
    c.Axios = s, c.create = function (t) {
        return i(a(c.defaults, t))
    }, c.Cancel = n(96), c.CancelToken = n(220), c.isCancel = n(91), c.all = function (t) {
        return Promise.all(t)
    }, c.spread = n(221), t.exports = c, t.exports.default = c
}, function (t, e) {/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
    t.exports = function (t) {
        return null != t && null != t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
    }
}, function (t, e, n) {
    "use strict";

    function i(t) {
        this.defaults = t, this.interceptors = {request: new s, response: new s}
    }

    var r = n(4), o = n(90), s = n(209), a = n(210), l = n(95);
    i.prototype.request = function (t) {
        "string" == typeof t ? (t = arguments[1] || {}, t.url = arguments[0]) : t = t || {}, t = l(this.defaults, t), t.method = t.method ? t.method.toLowerCase() : "get";
        var e = [a, void 0], n = Promise.resolve(t);
        for (this.interceptors.request.forEach(function (t) {
            e.unshift(t.fulfilled, t.rejected)
        }), this.interceptors.response.forEach(function (t) {
            e.push(t.fulfilled, t.rejected)
        }); e.length;) n = n.then(e.shift(), e.shift());
        return n
    }, i.prototype.getUri = function (t) {
        return t = l(this.defaults, t), o(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
    }, r.forEach(["delete", "get", "head", "options"], function (t) {
        i.prototype[t] = function (e, n) {
            return this.request(r.merge(n || {}, {method: t, url: e}))
        }
    }), r.forEach(["post", "put", "patch"], function (t) {
        i.prototype[t] = function (e, n, i) {
            return this.request(r.merge(i || {}, {method: t, url: e, data: n}))
        }
    }), t.exports = i
}, function (t, e, n) {
    "use strict";

    function i() {
        this.handlers = []
    }

    var r = n(4);
    i.prototype.use = function (t, e) {
        return this.handlers.push({fulfilled: t, rejected: e}), this.handlers.length - 1
    }, i.prototype.eject = function (t) {
        this.handlers[t] && (this.handlers[t] = null)
    }, i.prototype.forEach = function (t) {
        r.forEach(this.handlers, function (e) {
            null !== e && t(e)
        })
    }, t.exports = i
}, function (t, e, n) {
    "use strict";

    function i(t) {
        t.cancelToken && t.cancelToken.throwIfRequested()
    }

    var r = n(4), o = n(211), s = n(91), a = n(92), l = n(218), c = n(219);
    t.exports = function (t) {
        return i(t), t.baseURL && !l(t.url) && (t.url = c(t.baseURL, t.url)), t.headers = t.headers || {}, t.data = o(t.data, t.headers, t.transformRequest), t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (e) {
            delete t.headers[e]
        }), (t.adapter || a.adapter)(t).then(function (e) {
            return i(t), e.data = o(e.data, e.headers, t.transformResponse), e
        }, function (e) {
            return s(e) || (i(t), e && e.response && (e.response.data = o(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
        })
    }
}, function (t, e, n) {
    "use strict";
    var i = n(4);
    t.exports = function (t, e, n) {
        return i.forEach(n, function (n) {
            t = n(t, e)
        }), t
    }
}, function (t, e, n) {
    "use strict";
    var i = n(4);
    t.exports = function (t, e) {
        i.forEach(t, function (n, i) {
            i !== e && i.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[i])
        })
    }
}, function (t, e, n) {
    "use strict";
    var i = n(94);
    t.exports = function (t, e, n) {
        var r = n.config.validateStatus;
        !r || r(n.status) ? t(n) : e(i("Request failed with status code " + n.status, n.config, null, n.request, n))
    }
}, function (t, e, n) {
    "use strict";
    t.exports = function (t, e, n, i, r) {
        return t.config = e, n && (t.code = n), t.request = i, t.response = r, t.isAxiosError = !0, t.toJSON = function () {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code
            }
        }, t
    }
}, function (t, e, n) {
    "use strict";
    var i = n(4),
        r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    t.exports = function (t) {
        var e, n, o, s = {};
        return t ? (i.forEach(t.split("\n"), function (t) {
            if (o = t.indexOf(":"), e = i.trim(t.substr(0, o)).toLowerCase(), n = i.trim(t.substr(o + 1)), e) {
                if (s[e] && r.indexOf(e) >= 0) return;
                s[e] = "set-cookie" === e ? (s[e] ? s[e] : []).concat([n]) : s[e] ? s[e] + ", " + n : n
            }
        }), s) : s
    }
}, function (t, e, n) {
    "use strict";
    var i = n(4);
    t.exports = i.isStandardBrowserEnv() ? function () {
        function t(t) {
            var e = t;
            return n && (r.setAttribute("href", e), e = r.href), r.setAttribute("href", e), {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
            }
        }

        var e, n = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
        return e = t(window.location.href), function (n) {
            var r = i.isString(n) ? t(n) : n;
            return r.protocol === e.protocol && r.host === e.host
        }
    }() : function () {
        return function () {
            return !0
        }
    }()
}, function (t, e, n) {
    "use strict";
    var i = n(4);
    t.exports = i.isStandardBrowserEnv() ? function () {
        return {
            write: function (t, e, n, r, o, s) {
                var a = [];
                a.push(t + "=" + encodeURIComponent(e)), i.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), i.isString(r) && a.push("path=" + r), i.isString(o) && a.push("domain=" + o), !0 === s && a.push("secure"), document.cookie = a.join("; ")
            }, read: function (t) {
                var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                return e ? decodeURIComponent(e[3]) : null
            }, remove: function (t) {
                this.write(t, "", Date.now() - 864e5)
            }
        }
    }() : function () {
        return {
            write: function () {
            }, read: function () {
                return null
            }, remove: function () {
            }
        }
    }()
}, function (t, e, n) {
    "use strict";
    t.exports = function (t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    }
}, function (t, e, n) {
    "use strict";
    t.exports = function (t, e) {
        return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
    }
}, function (t, e, n) {
    "use strict";

    function i(t) {
        if ("function" != typeof t) throw new TypeError("executor must be a function.");
        var e;
        this.promise = new Promise(function (t) {
            e = t
        });
        var n = this;
        t(function (t) {
            n.reason || (n.reason = new r(t), e(n.reason))
        })
    }

    var r = n(96);
    i.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
    }, i.source = function () {
        var t;
        return {
            token: new i(function (e) {
                t = e
            }), cancel: t
        }
    }, t.exports = i
}, function (t, e, n) {
    "use strict";
    t.exports = function (t) {
        return function (e) {
            return t.apply(null, e)
        }
    }
}]);