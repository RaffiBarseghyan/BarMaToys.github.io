!(function (e, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? n(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], n)
    : n(
        ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).reasons =
          {})
      );
})(this, function (e) {
  "use strict";
  const n = Math.pow(36, 9),
    t = 35 * n - 1;
  let i = {
    handler: "/aer-reasons/",
    service: "",
    details: { pkg: "0.19.0" },
    payload: {},
  };
  let a = [];
  function r(e) {
    const { payload: n } = i,
      t = Object.assign(Object.assign({}, e), {
        ts: new Date().toISOString(),
        payload: Object.assign(Object.assign({}, n), e.payload),
      });
    a.push(t);
  }
  let o = 0;
  function s() {
    if (!a.length) return;
    const { handler: e, service: n, details: t } = i,
      r = { version: 1, details: t, messages: a, messageIndex: o };
    if ((o++, !r.messages.length)) return;
    r.messages = (function (e) {
      const n = e.filter(({ code: e }) => "PERF" === e);
      if (n.length <= 1) return e;
      const t = n.reduce(
        (e, n) => ({
          perf: Object.assign(Object.assign({}, e.perf), n.perf),
          payload: Object.assign(Object.assign({}, e.payload), n.payload),
        }),
        {}
      );
      return [
        ...e.filter(({ code: e }) => "PERF" !== e),
        Object.assign({ code: "PERF", message: "" }, t),
      ];
    })(r.messages);
    const s = e + n,
      c = JSON.stringify(r);
    !/\sWindVane\//.test(window.navigator.userAgent) &&
    "undefined" != typeof navigator &&
    navigator.sendBeacon
      ? navigator.sendBeacon(s, c)
      : fetch(s, { method: "POST", mode: "cors", body: c }).catch((e) => {
          console.error("Couldn't send a message to reason server", e);
        }),
      (a = []);
  }
  var c,
    d,
    u,
    f,
    l = function (e, n) {
      return {
        name: e,
        value: void 0 === n ? -1 : n,
        delta: 0,
        entries: [],
        id: "v2-"
          .concat(Date.now(), "-")
          .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
      };
    },
    m = function (e, n) {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
          if ("first-input" === e && !("PerformanceEventTiming" in self))
            return;
          var t = new PerformanceObserver(function (e) {
            return e.getEntries().map(n);
          });
          return t.observe({ type: e, buffered: !0 }), t;
        }
      } catch (e) {}
    },
    v = function (e, n) {
      var t = function t(i) {
        ("pagehide" !== i.type && "hidden" !== document.visibilityState) ||
          (e(i),
          n &&
            (removeEventListener("visibilitychange", t, !0),
            removeEventListener("pagehide", t, !0)));
      };
      addEventListener("visibilitychange", t, !0),
        addEventListener("pagehide", t, !0);
    },
    p = function (e) {
      addEventListener(
        "pageshow",
        function (n) {
          n.persisted && e(n);
        },
        !0
      );
    },
    g = function (e, n, t) {
      var i;
      return function (a) {
        n.value >= 0 &&
          (a || t) &&
          ((n.delta = n.value - (i || 0)),
          (n.delta || void 0 === i) && ((i = n.value), e(n)));
      };
    },
    y = -1,
    h = function () {
      return "hidden" === document.visibilityState ? 0 : 1 / 0;
    },
    w = function () {
      v(function (e) {
        var n = e.timeStamp;
        y = n;
      }, !0);
    },
    E = function () {
      return (
        y < 0 &&
          ((y = h()),
          w(),
          p(function () {
            setTimeout(function () {
              (y = h()), w();
            }, 0);
          })),
        {
          get firstHiddenTime() {
            return y;
          },
        }
      );
    },
    b = function (e, n) {
      var t,
        i = E(),
        a = l("FCP"),
        r = function (e) {
          "first-contentful-paint" === e.name &&
            (s && s.disconnect(),
            e.startTime < i.firstHiddenTime &&
              ((a.value = e.startTime), a.entries.push(e), t(!0)));
        },
        o =
          window.performance &&
          performance.getEntriesByName &&
          performance.getEntriesByName("first-contentful-paint")[0],
        s = o ? null : m("paint", r);
      (o || s) &&
        ((t = g(e, a, n)),
        o && r(o),
        p(function (i) {
          (a = l("FCP")),
            (t = g(e, a, n)),
            requestAnimationFrame(function () {
              requestAnimationFrame(function () {
                (a.value = performance.now() - i.timeStamp), t(!0);
              });
            });
        }));
    },
    T = !1,
    S = -1,
    L = { passive: !0, capture: !0 },
    O = new Date(),
    _ = function (e, n) {
      c || ((c = n), (d = e), (u = new Date()), k(removeEventListener), j());
    },
    j = function () {
      if (d >= 0 && d < u - O) {
        var e = {
          entryType: "first-input",
          name: c.type,
          target: c.target,
          cancelable: c.cancelable,
          startTime: c.timeStamp,
          processingStart: c.timeStamp + d,
        };
        f.forEach(function (n) {
          n(e);
        }),
          (f = []);
      }
    },
    P = function (e) {
      if (e.cancelable) {
        var n =
          (e.timeStamp > 1e12 ? new Date() : performance.now()) - e.timeStamp;
        "pointerdown" == e.type
          ? (function (e, n) {
              var t = function () {
                  _(e, n), a();
                },
                i = function () {
                  a();
                },
                a = function () {
                  removeEventListener("pointerup", t, L),
                    removeEventListener("pointercancel", i, L);
                };
              addEventListener("pointerup", t, L),
                addEventListener("pointercancel", i, L);
            })(n, e)
          : _(n, e);
      }
    },
    k = function (e) {
      ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (
        n
      ) {
        return e(n, P, L);
      });
    },
    F = {};
  function R(e, n = 0) {
    return +`${Math.round(`${e}e+${n}`)}e-${n}`;
  }
  const C = (e, n, t = 0) => {
    e.value && r({ code: "PERF", message: "", perf: { [n]: R(e.value, t) } });
  };
  function M() {
    !(function (e, n) {
      T ||
        (b(function (e) {
          S = e.value;
        }),
        (T = !0));
      var t,
        i = function (n) {
          S > -1 && e(n);
        },
        a = l("CLS", 0),
        r = 0,
        o = [],
        s = function (e) {
          if (!e.hadRecentInput) {
            var n = o[0],
              i = o[o.length - 1];
            r &&
            e.startTime - i.startTime < 1e3 &&
            e.startTime - n.startTime < 5e3
              ? ((r += e.value), o.push(e))
              : ((r = e.value), (o = [e])),
              r > a.value && ((a.value = r), (a.entries = o), t());
          }
        },
        c = m("layout-shift", s);
      c &&
        ((t = g(i, a, n)),
        v(function () {
          c.takeRecords().map(s), t(!0);
        }),
        p(function () {
          (r = 0), (S = -1), (a = l("CLS", 0)), (t = g(i, a, n));
        }));
    })((e) => C(e, "cumulative_layout_shift", 4)),
      (function (e, n) {
        var t,
          i = E(),
          a = l("FID"),
          r = function (e) {
            e.startTime < i.firstHiddenTime &&
              ((a.value = e.processingStart - e.startTime),
              a.entries.push(e),
              t(!0));
          },
          o = m("first-input", r);
        (t = g(e, a, n)),
          o &&
            v(function () {
              o.takeRecords().map(r), o.disconnect();
            }, !0),
          o &&
            p(function () {
              var i;
              (a = l("FID")),
                (t = g(e, a, n)),
                (f = []),
                (d = -1),
                (c = null),
                k(addEventListener),
                (i = r),
                f.push(i),
                j();
            });
      })((e) => C(e, "first_input_delay")),
      (function (e, n) {
        var t,
          i = E(),
          a = l("LCP"),
          r = function (e) {
            var n = e.startTime;
            n < i.firstHiddenTime && ((a.value = n), a.entries.push(e)), t();
          },
          o = m("largest-contentful-paint", r);
        if (o) {
          t = g(e, a, n);
          var s = function () {
            F[a.id] ||
              (o.takeRecords().map(r), o.disconnect(), (F[a.id] = !0), t(!0));
          };
          ["keydown", "click"].forEach(function (e) {
            addEventListener(e, s, { once: !0, capture: !0 });
          }),
            v(s, !0),
            p(function (i) {
              (a = l("LCP")),
                (t = g(e, a, n)),
                requestAnimationFrame(function () {
                  requestAnimationFrame(function () {
                    (a.value = performance.now() - i.timeStamp),
                      (F[a.id] = !0),
                      t(!0);
                  });
                });
            });
        }
      })((e) => C(e, "largest_contentful_paint")),
      b((e) => C(e, "first_contentful_paint")),
      (function (e) {
        var n,
          t = l("TTFB");
        (n = function () {
          try {
            var n =
              performance.getEntriesByType("navigation")[0] ||
              (function () {
                var e = performance.timing,
                  n = { entryType: "navigation", startTime: 0 };
                for (var t in e)
                  "navigationStart" !== t &&
                    "toJSON" !== t &&
                    (n[t] = Math.max(e[t] - e.navigationStart, 0));
                return n;
              })();
            if (
              ((t.value = t.delta = n.responseStart),
              t.value < 0 || t.value > performance.now())
            )
              return;
            (t.entries = [n]), e(t);
          } catch (e) {}
        }),
          "complete" === document.readyState
            ? setTimeout(n, 0)
            : addEventListener("pageshow", n);
      })((e) => C(e, "time_to_first_byte"));
  }
  let D,
    I = !1;
  function N(e, n) {
    if (I !== !!e)
      if (((I = !!e), I)) {
        if (Math.random() >= n) return;
        M(),
          (D = function () {
            const e = (function () {
              var e;
              const n = window.performance;
              if (!n) return null;
              const t = n.getEntriesByType("navigation")[0],
                i = {},
                a = {};
              if (t) {
                const {
                  requestStart: n,
                  responseStart: r,
                  responseEnd: o,
                  domInteractive: s,
                  domComplete: c,
                  fetchStart: d,
                } = t;
                Object.assign(a, {
                  requestStart: n,
                  responseStart: r,
                  responseEnd: o,
                  domInteractive: s,
                  domComplete: c,
                  navigationStart: d,
                });
                const u = navigator;
                "undefined" != typeof navigator &&
                  Object.assign(a, {
                    memory: u.deviceMemory,
                    cpus: u.hardwareConcurrency,
                    connection:
                      null === (e = u.connection) || void 0 === e
                        ? void 0
                        : e.effectiveType,
                  }),
                  o && n && (i.download_time = R(o - n)),
                  r && n && (i.time_to_first_byte_naive = R(r - n)),
                  c && d && (i.time_to_rendering = R(c - d)),
                  s && d && (i.time_to_dom_interactive = R(s - d));
              }
              return (
                window.performance
                  .getEntriesByType("paint")
                  .forEach(({ name: e, startTime: n }) => {
                    "first-paint" === e && (i.first_paint = R(n));
                  }),
                { code: "PERF", message: "", perf: i, payload: a }
              );
            })();
            e && r(e);
          }),
          window.addEventListener("beforeunload", D);
      } else window.removeEventListener("beforeunload", D);
  }
  function B(e) {
    const { error: n, filename: t, lineno: i, colno: a } = e;
    r({
      message: `${(null == n ? void 0 : n.message) || n} at ${t}:${i}:${a}`,
      code: "UNHANDLED",
      stack: n ? n.stack : void 0,
    });
  }
  function $(e) {
    const { reason: n } = e;
    r({
      message: null == n ? void 0 : n.message,
      code: "UNHANDLED_PROMISE",
      stack: null == n ? void 0 : n.stack,
      payload: { reason: n ? JSON.stringify(n) : void 0 },
    });
  }
  let A = !1;
  function q(e) {
    A !== !!e &&
      ((A = !!e),
      A
        ? (window.addEventListener("error", B),
          window.addEventListener("unhandledrejection", $))
        : (window.removeEventListener("error", B),
          window.removeEventListener("unhandledrejection", $)));
  }
  let H = 0;
  function x() {
    setTimeout(() => {
      H < 30 && ((H += 1), s(), x());
    }, 12e4);
  }
  (e.reasonsInit = function (e) {
    const {
      trackClientPerf: a = !1,
      trackClientPerfRate: o = 1,
      trackClientImgPerf: c = !0,
      trackUnhandled: d = !0,
      service: u,
    } = e;
    if (!u) throw new Error("Please provide service name for Reasons");
    !(function (e) {
      const { handler: a, service: r, details: o, payload: s } = e;
      i = Object.assign(Object.assign({}, i), {
        handler: void 0 !== a ? a + (a.endsWith("/") ? "" : "/") : i.handler,
        service: r || i.service,
        details: Object.assign(
          Object.assign(Object.assign({}, i.details), {
            url: window.location.href,
            reason_id: Math.floor(Math.random() * t + n).toString(36),
          }),
          o
        ),
        payload: Object.assign(Object.assign({}, i.payload), s),
      });
    })(e),
      q(d),
      N(a, o),
      (function (e) {
        if (!e || !window.PerformanceObserver) return;
        const n = [];
        new PerformanceObserver((e) => {
          e.getEntries()
            .filter(
              ({ name: e, initiatorType: n }) =>
                "img" === n && e.includes("alicdn.com")
            )
            .forEach(({ duration: e, name: t }) => {
              const i = { downloadTime: e, name: t };
              n.push(i);
            });
        }).observe({ type: "resource", buffered: !0 }),
          window.addEventListener("beforeunload", () => {
            r({ code: "IMG-PERF", message: "", perf: { imgs_data: n } });
          });
      })(c),
      window.addEventListener("load", s),
      window.addEventListener("load", x),
      window.addEventListener("beforeunload", s);
  }),
    (e.sendReason = r),
    (e.trackUnhandledErrors = q),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=reasons.0.19.0.js.map
