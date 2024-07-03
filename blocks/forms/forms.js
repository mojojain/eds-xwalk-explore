(()=>{
    "use strict";
    var e, t = {
        753: (e,t,r)=>{
            var a = r(540)
              , o = r(338);
            const n = ({formURL: e})=>{
                const [t,r] = (0,
                a.useState)();
                return (0,
                a.useEffect)((()=>{
                    (async()=>{
                        try {
                            const t = await fetch(e, {
                                headers: {
                                    "Content-Type": "application/json",
                                    Accept: "application/json"
                                }
                            });
                            if (!t.ok)
                                throw new Error(`HTTP error! Status: ${t.status}`);
                            const a = await t.json();
                            console.log("cdcdc", a);
                            o = await Promise.all(a?.data.map((async e=>{
                                console.log("1", e.Options);
                                if (e.Options && e.Options.endsWith(".json"))
                                    try {
                                        console.log("2");
                                        const t = await fetch(e.Options);
                                        if (t.ok) {
                                            console.log("3");
                                            const r = await t.json();
                                            console.log("4", r);
                                            const a = r?.data?.map((e=>e.location)).join(",") || "";
                                            console.log("5", a);
                                            console.log({
                                                ...e,
                                                option: a
                                            });
                                            return {
                                                ...e,
                                                option: a
                                            }
                                        }
                                    } catch (e) {}
                                return e
                            }
                            )));
                            r(o)
                        } catch (e) {}
                    }
                    )()
                }
                ), [e]),
                a.createElement("div", {
                    className: "react-form"
                }, a.createElement("h3", null, "Calculate Your Fee"), a.createElement("div", {
                    className: "react-form__sections"
                }, t?.data?.map(((e,t)=>a.createElement("div", {
                    key: t,
                    className: "react-form__section"
                }, "submit" != e.Type && a.createElement("label", null, e.Label), a.createElement("div", {
                    className: "react-form__section--options"
                }, "select" === e.Type && a.createElement("select", {
                    name: e.Name
                }, e.Options, e.Options.split(",").map(((e,t)=>a.createElement("option", {
                    key: t,
                    value: e
                }, e)))), "text" === e.Type && a.createElement("input", {
                    type: "text",
                    placeholder: e.Placeholder,
                    required: "True" == e.Mandatory
                })), "submit" === e.Type && a.createElement("button", null, e.Label))))))
            }
              , c = document.querySelector(".form");
            if (c) {
                let e = c.querySelector("form")?.dataset?.action;
                e || (e = c.querySelector(".button-container a").href);
                (0,
                o.H)(c).render(a.createElement(n, {
                    formURL: e
                }))
            }
        }
    }, r = {};
    function a(e) {
        var o = r[e];
        if (void 0 !== o)
            return o.exports;
        var n = r[e] = {
            exports: {}
        };
        return t[e](n, n.exports, a),
        n.exports
    }
    a.m = t,
    e = [],
    a.O = (t,r,o,n)=>{
        if (!r) {
            var c = 1 / 0;
            for (p = 0; p < e.length; p++) {
                for (var [r,o,n] = e[p], s = !0, l = 0; l < r.length; l++)
                    (!1 & n || c >= n) && Object.keys(a.O).every((e=>a.O[e](r[l]))) ? r.splice(l--, 1) : (s = !1,
                    n < c && (c = n));
                if (s) {
                    e.splice(p--, 1);
                    var i = o();
                    void 0 !== i && (t = i)
                }
            }
            return t
        }
        n = n || 0;
        for (var p = e.length; p > 0 && e[p - 1][2] > n; p--)
            e[p] = e[p - 1];
        e[p] = [r, o, n]
    }
    ,
    a.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    (()=>{
        var e = {
            forms: 0
        };
        a.O.j = t=>0 === e[t];
        var t = (t,r)=>{
            var o, n, [c,s,l] = r, i = 0;
            if (c.some((t=>0 !== e[t]))) {
                for (o in s)
                    a.o(s, o) && (a.m[o] = s[o]);
                if (l)
                    var p = l(a)
            }
            for (t && t(r); i < c.length; i++)
                n = c[i],
                a.o(e, n) && e[n] && e[n][0](),
                e[n] = 0;
            return a.O(p)
        }
          , r = self.webpackChunkreact_app = self.webpackChunkreact_app || [];
        r.forEach(t.bind(null, 0)),
        r.push = t.bind(null, r.push.bind(r))
    }
    )();
    var o = a.O(void 0, ["vendor"], (()=>a(753)));
    o = a.O(o)
}
)();
