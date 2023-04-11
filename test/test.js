"use strict";
(self.webpackChunkweb_app = self.webpackChunkweb_app || []).push([
  [104],
  {
    8169: (e, t, r) => {
      r.d(t, { Z: () => m });
      var n = r(5671),
        o = r(3144),
        i = r(7326),
        s = r(136),
        a = r(2963),
        c = r(1120),
        l = r(4942),
        u = r(7294),
        d = r(982),
        f = r(9417),
        h = r(5893);
      function p(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = (0, c.Z)(e);
          if (t) {
            var o = (0, c.Z)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (0, a.Z)(this, r);
        };
      }
      const m = (function (e) {
        (0, s.Z)(r, e);
        var t = p(r);
        function r(e) {
          var o;
          (0, n.Z)(this, r),
            (o = t.call(this, e)),
            (0, l.Z)((0, i.Z)(o), "modal", (0, u.createRef)()),
            (0, l.Z)((0, i.Z)(o), "overlay", (0, u.createRef)()),
            (0, l.Z)((0, i.Z)(o), "handleOutsideClick", function (e) {
              if (!1 !== o.state.showModal && e) {
                var t = e.target.nodeName;
                t && "main" === t.toLowerCase() && o.removeModal();
              }
            }),
            (0, l.Z)((0, i.Z)(o), "removeModal", function () {
              var e = o.props.onClose;
              o.setState({ showModal: !1 }, function () {
                e && e();
              });
            }),
            (0, l.Z)((0, i.Z)(o), "handleKeyUp", function (e) {
              27 === e.keyCode && (e.preventDefault(), o.removeModal());
            });
          var s = o.props.isOpen;
          return (o.state = { showModal: s || !1 }), o;
        }
        return (
          (0, o.Z)(r, [
            {
              key: "componentDidMount",
              value: function () {
                window.addEventListener("keyup", this.handleKeyUp, !1),
                  this.overlay.current &&
                    this.overlay.current.addEventListener(
                      "click",
                      this.handleOutsideClick,
                      !1
                    );
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                window.removeEventListener("keyup", this.handleKeyUp, !1),
                  this.overlay.current &&
                    this.overlay.current.removeEventListener(
                      "click",
                      this.handleOutsideClick,
                      !1
                    );
              },
            },
            {
              key: "render",
              value: function () {
                return !1 === this.state.showModal
                  ? null
                  : (0, h.jsx)("main", {
                      ref: this.overlay,
                      className:
                        "flex justify-center items-center inset-0 fixed bg-gray-500 bg-opacity-40 z-50",
                      children: (0, h.jsxs)("div", {
                        className:
                          "bg-white dark:bg-night-400 p-10 shadow relative text-center opacity-1 ".concat(
                            this.props.className
                          ),
                        ref: this.modal,
                        children: [
                          this.props.children,
                          (0, h.jsx)("button", {
                            className: "absolute -top-4 -right-4",
                            onClick: this.removeModal,
                            children: (0, h.jsx)(d.G, {
                              icon: f._Ob,
                              size: "3x",
                              className: "text-blue-500",
                            }),
                          }),
                        ],
                      }),
                    });
              },
            },
          ]),
          r
        );
      })(u.Component);
    },
    8910: (e, t, r) => {
      r.d(t, { Z: () => p });
      var n = r(5671),
        o = r(3144),
        i = r(7326),
        s = r(136),
        a = r(2963),
        c = r(1120),
        l = r(4942),
        u = r(7294),
        d = r(4012),
        f = r(5893);
      function h(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = (0, c.Z)(e);
          if (t) {
            var o = (0, c.Z)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (0, a.Z)(this, r);
        };
      }
      const p = (function (e) {
        (0, s.Z)(r, e);
        var t = h(r);
        function r() {
          var e;
          (0, n.Z)(this, r);
          for (var o = arguments.length, s = new Array(o), a = 0; a < o; a++)
            s[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(s))),
            (0, l.Z)((0, i.Z)(e), "actionEl", u.createRef()),
            (0, l.Z)((0, i.Z)(e), "renderShortDomain", function (t) {
              return (0,
              f.jsxs)("a", { href: "//9xbud.com/".concat(t), className: "text-blue-500 no-underline hover:underline", children: [(0, f.jsx)("span", { className: "text-orange-400 bold", ref: e.actionEl, children: "9xbud.com/" }), t] });
            }),
            (0, l.Z)((0, i.Z)(e), "renderShortYoutube", function (t) {
              var r = t.replace("https://www.", "");
              return (0,
              f.jsxs)("a", { href: "//www.9x".concat(r), className: "text-blue-500 no-underline hover:underline", children: ["https://www.", (0, f.jsx)("span", { className: "text-orange-400 bold", ref: e.actionEl, children: "9x" }), r] });
            }),
            (0, l.Z)((0, i.Z)(e), "renderElements", function (t) {
              return (0,
              f.jsx)("div", { className: "w-auto md:w-8/12 mx-auto md:max-w-lg border border-gray-200 dark:border-night-500 px-4 py-1 leading-8 truncate text-blue-500", children: 1 === t.type || -1 !== t.url.indexOf("www.youtube.com") ? e.renderShortYoutube(t.url) : e.renderShortDomain(t.url) });
            }),
            e
          );
        }
        return (
          (0, o.Z)(r, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this;
                (this.isValidMount = !0),
                  (this.animateInterval = setInterval(function () {
                    e.isValidMount &&
                      (e.actionEl.current.classList.add("hidden"),
                      setTimeout(function () {
                        e.isValidMount &&
                          e.actionEl.current.classList.remove("hidden");
                      }, 700));
                  }, 1400));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                (this.isValidMount = !1),
                  this.animateInterval && clearInterval(this.animateInterval);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.query;
                return e.parentStyle
                  ? (0, f.jsxs)("div", {
                      className:
                        "my-8 md:flex justify-center items-center text-center md:text-left px-4",
                      children: [
                        (0, f.jsx)("div", {
                          className:
                            "w-auto md:w-4/12 text-center uppercase mb-4 md:mb-0 border border-indigo-500 text-indigo-500 py-1 leading-8 px-4 truncate",
                          children: (0, f.jsx)(d.Z, { id: "L8yZ4O" }),
                        }),
                        this.renderElements(t),
                      ],
                    })
                  : this.renderElements(t);
              },
            },
          ]),
          r
        );
      })(u.Component);
    },
    1338: (e, t, r) => {
      r.d(t, { Z: () => c });
      var n = r(4942),
        o = r(8008),
        i = r(5893);
      function s(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      const c = function (e) {
        return function (t) {
          return (0, i.jsx)(o.N.Consumer, {
            children: function (r) {
              return (0, i.jsx)(e, a(a({}, t), {}, { theme: r }));
            },
          });
        };
      };
    },
    9775: (e, t, r) => {
      r.r(t), r.d(t, { default: () => ue });
      var n = r(5671),
        o = r(3144),
        i = r(7326),
        s = r(136),
        a = r(2963),
        c = r(1120),
        l = r(4942),
        u = r(7294),
        d = r(5977),
        f = r(982),
        h = r(9417),
        p = r(4012),
        m = r(9070),
        x = r(3024),
        y = r(9824);
      const v = function (e, t) {
        for (var r = e.parentElement, n = null; r; )
          r.nodeName.toLowerCase() === t
            ? ((n = r), (r = null))
            : (r = r.parentElement);
        return n;
      };
      var g = r(5893);
      function b(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = (0, c.Z)(e);
          if (t) {
            var o = (0, c.Z)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (0, a.Z)(this, r);
        };
      }
      var j = (function (e) {
        (0, s.Z)(r, e);
        var t = b(r);
        function r() {
          var e;
          (0, n.Z)(this, r);
          for (var o = arguments.length, s = new Array(o), a = 0; a < o; a++)
            s[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(s))),
            (0, l.Z)((0, i.Z)(e), "handleShareClick", function (e) {
              e.stopPropagation(), e.preventDefault();
              var t = (
                  "a" !== e.target.nodeName.toLowerCase()
                    ? v(e.target, "a")
                    : e.target
                ).getAttribute("href"),
                r = window.open(t, "Sharing", "height=400,width=800");
              window.focus && r.focus();
            }),
            (0, l.Z)((0, i.Z)(e), "handleMobileShare", function () {
              navigator.share &&
                navigator.share({
                  title: "Hey, check this out!",
                  text: r.location,
                });
            }),
            e
          );
        }
        return (
          (0, o.Z)(r, [
            {
              key: "renderButtons",
              value: function () {
                var e = this.props.userIntl.isRTL ? "mr-6" : "";
                return (0, g.jsxs)("div", {
                  className:
                    "container mx-auto list-reset leading-normal max-w-2xl sm:flex sm:justify-center",
                  children: [
                    (0, g.jsxs)("a", {
                      className:
                        "transition-opacity bg-white dark:bg-night-400  border border-blue-400 text-blue-400 text-sm hover:opacity-80 px-4 leading-loose py-1 no-underline shadow w-1/3 text-center mr-6 truncate",
                      rel: "noreferrer noopener",
                      target: "_blank",
                      onClick: this.handleShareClick,
                      href: "https://www.facebook.com/sharer/sharer.php?u=".concat(
                        r.location
                      ),
                      children: [
                        (0, g.jsx)(f.G, { icon: x.AYu, className: "mr-2" }),
                        (0, g.jsx)(p.Z, { id: "T7Cn8Y" }),
                      ],
                    }),
                    (0, g.jsxs)("a", {
                      className:
                        "transition-opacity bg-white border dark:bg-night-400 border-blue-400 text-blue-400 text-sm hover:opacity-80 px-4 py-1 leading-loose no-underline shadow w-1/3 text-center mr-6 truncate",
                      rel: "noreferrer noopener",
                      target: "_blank",
                      onClick: this.handleShareClick,
                      href: "https://twitter.com/intent/tweet?url=".concat(
                        encodeURIComponent(r.location)
                      ),
                      children: [
                        (0, g.jsx)(f.G, { icon: x.mdU, className: "mx-2" }),
                        (0, g.jsx)(p.Z, { id: "uWrxDJ", values: { 1: "@" } }),
                      ],
                    }),
                    (0, g.jsxs)("a", {
                      className: "".concat(
                        e,
                        " transition-opacity bg-white dark:bg-night-400  border border-blue-400 text-blue-400 text-sm hover:opacity-80 px-4 py-1 leading-loose no-underlin shadow w-1/3 text-center truncate"
                      ),
                      rel: "noreferrer noopener",
                      target: "_blank",
                      onClick: this.handleShareClick,
                      href: "https://vk.com/share.php?url=".concat(
                        encodeURIComponent(r.location)
                      ),
                      children: [
                        (0, g.jsx)(f.G, { icon: x.iD2, className: "mx-2" }),
                        (0, g.jsx)(p.Z, { id: "VGAmxc" }),
                      ],
                    }),
                  ],
                });
              },
            },
            {
              key: "renderMobileShare",
              value: function () {
                return (0, g.jsx)("div", {
                  className:
                    "mx-auto leading-normal max-w-lg sm:flex sm:justify-center",
                  children: (0, g.jsxs)("button", {
                    className:
                      "bg-white dark:bg-night-400 text-sm px-4 leading-loose py-2 border no-underline border-blue-400 text-blue-400 shadow w-full block text-center",
                    onClick: this.handleMobileShare,
                    children: [
                      (0, g.jsx)(f.G, { icon: h.EfQ, className: "mr-2" }),
                      "Share With Friends",
                    ],
                  }),
                });
              },
            },
            {
              key: "render",
              value: function () {
                return navigator.share
                  ? (0, g.jsx)(g.Fragment, {
                      children: (0, g.jsx)("section", {
                        className:
                          "bg-gray-100 container mx-auto max-w-5xl dark:bg-night-400 py-3 px-4 sm:block mt-2 mb-4",
                        children: this.renderMobileShare(),
                      }),
                    })
                  : (0, g.jsx)("section", {
                      className:
                        "container mx-auto max-w-5xl bg-gray-100 dark:bg-night-400 py-4 px-4 hidden sm:block mt-2 mb-4",
                      children: this.renderButtons(),
                    });
              },
            },
          ]),
          r
        );
      })(u.Component);
      (0, l.Z)(j, "location", document.location.href);
      const Z = (0, y.Z)(j);
      var w = r(3727),
        k = r(8910),
        N = r(4704);
      function O(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = (0, c.Z)(e);
          if (t) {
            var o = (0, c.Z)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (0, a.Z)(this, r);
        };
      }
      var R = (function (e) {
        (0, s.Z)(r, e);
        var t = O(r);
        function r() {
          return (0, n.Z)(this, r), t.apply(this, arguments);
        }
        return (
          (0, o.Z)(r, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this.props.response;
                document.title = e.title;
              },
            },
            {
              key: "renderElement",
              value: function (e, t) {
                var r = "/process?url=".concat(e.pageAddress),
                  n = e.thumbnail;
                return (0, g.jsxs)(
                  "div",
                  {
                    children: [
                      (0, g.jsxs)("div", {
                        className:
                          "flex justify-between items-center bg-gray-100 dark:bg-night-400 px-4 py-3 truncate text-blue-500 relative leading-normal sm:leading-none",
                        children: [
                          (0, g.jsx)("div", {
                            className: "truncate w-full sm:w-8/12",
                            children: (0, g.jsx)(w.rU, {
                              href: "!#",
                              to: r,
                              className:
                                "no-underline hover:underline leading-5",
                              children: e.title,
                            }),
                          }),
                          (0, g.jsx)(w.rU, {
                            href: "!#",
                            to: r,
                            className:
                              "hidden sm:inline-block no-underline text-white transition-opacity hover:opacity-80 shadow leading-normal px-5 py-1 text-sm uppercase bg-blue-500 ring-2",
                            children: (0, g.jsx)(p.Z, { id: "OInBzh" }),
                          }),
                        ],
                      }),
                      (0, g.jsxs)("div", {
                        className:
                          "content flex flex-col sm:flex-row justify-center items-center sm:h-36 px-0 sm:px-4 py-3",
                        children: [
                          (0, g.jsx)(w.rU, {
                            href: "!#",
                            to: r,
                            className:
                              "block sm:mr-3 relative w-full sm:w-1/4 overflow-hidden",
                            children: (0, g.jsxs)("picture", {
                              className:
                                "block shadow transform hover:scale-125 transition-transform",
                              children: [
                                (0, g.jsx)("source", {
                                  srcSet: n,
                                  type: "image/jpeg",
                                }),
                                (0, g.jsx)("img", {
                                  src: n,
                                  loading: "lazy",
                                  alt: e.title,
                                  className:
                                    "scale-1 h-42 px-4 sm:px-0 sm:h-24 mx-auto",
                                }),
                              ],
                            }),
                          }),
                          (0, g.jsxs)("div", {
                            className: "p-3 w-full sm:w-3/4",
                            children: [
                              (0, g.jsxs)("p", {
                                className:
                                  "text-sm text-gray-500 dark:text-gray-200 mb-2",
                                children: [
                                  "By",
                                  "uploaderAddress" in e
                                    ? (0, g.jsx)(w.rU, {
                                        href: "!#",
                                        to: "process?url=https://www.youtube.com".concat(
                                          e.uploaderAddress
                                        ),
                                        className:
                                          "text-blue-500 no-underline hover:underline ml-1",
                                        children: e.uploader,
                                      })
                                    : (0, g.jsx)("span", {
                                        className: "ml-1 capitalize",
                                        children: e.uploader,
                                      }),
                                ],
                              }),
                              (0, g.jsx)("p", {
                                className:
                                  "text-sm text-gray-500 dark:text-gray-200 leading-normal break-words",
                                children: e.desc,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  "".concat(e.id, "_").concat(t)
                );
              },
            },
            {
              key: "renderContent",
              value: function (e) {
                var t = this,
                  r = [];
                return (
                  e.forEach(function (e, n) {
                    r.push(t.renderElement(e, n));
                  }),
                  (0, g.jsx)("section", { className: "py-6 px-4", children: r })
                );
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.response,
                  r = e.cache.settings.hideMessages;
                return (0, g.jsxs)(g.Fragment, {
                  children: [
                    !r &&
                      (0, g.jsx)(k.Z, {
                        parentStyle: !0,
                        query: { type: 2, url: t.request.url },
                      }),
                    (0, g.jsxs)("div", {
                      className:
                        "md:flex justify-center items-center text-gray-500 px-6 pb-4 pt-6 text-lg text-center leading-normal dark:text-gray-200",
                      children: [
                        (0, g.jsx)(f.G, { icon: h.wn1, className: "mx-4" }),
                        (0, g.jsx)(p.Z, { id: "e2HdA6" }),
                        (0, g.jsx)("span", {
                          className: "mx-1",
                          children: "-",
                        }),
                        " ",
                        t.title,
                      ],
                    }),
                    this.renderContent(t.formats),
                  ],
                });
              },
            },
          ]),
          r
        );
      })(u.Component);
      const C = (0, N.Z)(R);
      function S(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = (0, c.Z)(e);
          if (t) {
            var o = (0, c.Z)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (0, a.Z)(this, r);
        };
      }
      var E = (function (e) {
        (0, s.Z)(r, e);
        var t = S(r);
        function r() {
          return (0, n.Z)(this, r), t.apply(this, arguments);
        }
        return (
          (0, o.Z)(r, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this.props.response;
                document.title = e.title;
              },
            },
            {
              key: "renderElement",
              value: function (e, t) {
                var r = "process?url=".concat(encodeURIComponent(e.url));
                return (0, g.jsxs)(
                  "div",
                  {
                    className:
                      "flex flex-col sm:flex-row justify-between items-center mb-4 py-4 text-gray-600 dark:text-gray-200 border-b-2 dark:border-night-500 border-gray-200 px-4",
                    children: [
                      (0, g.jsxs)("span", {
                        className: "hidden sm:block w-12 text-center",
                        children: [t + 1, "."],
                      }),
                      (0, g.jsx)("div", {
                        className: "w-full sm:w-1/2 lg:w-8/12",
                        children: (0, g.jsx)(w.rU, {
                          href: "!#",
                          to: r,
                          className:
                            "block text-blue-500 no-underline hover:underline w-full truncate",
                          children: e.title,
                        }),
                      }),
                      (0, g.jsx)("div", {
                        className:
                          "w-full sm:w-1/2 lg:w-4/12 text-center sm:text-right mt-4 sm:mt-0",
                        children: (0, g.jsx)(w.rU, {
                          href: "!#",
                          to: r,
                          className:
                            "inline-block px-8 sm:px-4 py-1 mx-4 text-sm uppercase tracking-wide shadow-inner text-blue-500 border border-blue-500 transition-opacity hover:opacity-80 cursor-pointer no-underline truncate",
                          children: (0, g.jsx)(p.Z, { id: "OInBzh" }),
                        }),
                      }),
                      (0, g.jsx)("div", { className: "clearfix" }),
                    ],
                  },
                  t
                );
              },
            },
            {
              key: "renderContent",
              value: function (e) {
                var t = this,
                  r = [];
                return (
                  e.forEach(function (e, n) {
                    r.push(t.renderElement(e, n));
                  }),
                  (0, g.jsx)("section", {
                    className: "py-6 px-4 mb-12",
                    children: r,
                  })
                );
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.response,
                  r = e.cache.settings.hideMessages;
                return (0, g.jsxs)(g.Fragment, {
                  children: [
                    !r &&
                      (0, g.jsx)(k.Z, {
                        parentStyle: !0,
                        query: { type: 0, url: t.request.url },
                      }),
                    (0, g.jsxs)("div", {
                      className:
                        "mt-4 capitalize md:flex justify-center items-center text-gray-500 px-6 py-4 text-lg text-center leading-normal dark:text-gray-200",
                      children: [
                        (0, g.jsx)(f.G, { icon: h.nNP, className: "mx-4" }),
                        t.title,
                      ],
                    }),
                    this.renderContent(t.formats),
                  ],
                });
              },
            },
          ]),
          r
        );
      })(u.Component);
      const P = (0, N.Z)(E);
      var B = r(8169),
        D = r(5930);
      function A(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = (0, c.Z)(e);
          if (t) {
            var o = (0, c.Z)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (0, a.Z)(this, r);
        };
      }
      const L = (function (e) {
        (0, s.Z)(r, e);
        var t = A(r);
        function r() {
          var e;
          (0, n.Z)(this, r);
          for (var o = arguments.length, s = new Array(o), a = 0; a < o; a++)
            s[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(s))),
            (0, l.Z)((0, i.Z)(e), "state", {
              caption: (0, g.jsx)(p.Z, { id: "iHTXCZ" }),
            }),
            (0, l.Z)((0, i.Z)(e), "timeout", !1),
            (0, l.Z)((0, i.Z)(e), "renderContent", function () {
              return (0,
              g.jsx)(g.Fragment, { children: (0, g.jsx)("div", { className: "border-t-2 border-b-2 border-gray-200 dark:border-night-500 my-2 px-2 py-3", children: (0, g.jsx)("div", { className: "text-gray-600 dark:text-gray-200 py-6", children: (0, g.jsx)(D.Z, { content: e.state.caption, margin: "my-2" }) }) }) });
            }),
            e
          );
        }
        return (
          (0, o.Z)(r, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this;
                this.timeout = setTimeout(function () {
                  e.setState({ caption: (0, g.jsx)(p.Z, { id: "WFdKjg" }) });
                }, 3e3);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.timeout && window.clearTimeout(this.timeout);
              },
            },
            {
              key: "render",
              value: function () {
                return (0, g.jsx)(B.Z, {
                  isOpen: !0,
                  onClose: this.props.onClose,
                  className: "w-10/12 lg:w-1/2",
                  children: this.renderContent(),
                });
              },
            },
          ]),
          r
        );
      })(u.Component);
      function M(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = (0, c.Z)(e);
          if (t) {
            var o = (0, c.Z)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (0, a.Z)(this, r);
        };
      }
      var U = (function (e) {
        (0, s.Z)(r, e);
        var t = M(r);
        function r() {
          var e;
          (0, n.Z)(this, r);
          for (var o = arguments.length, s = new Array(o), a = 0; a < o; a++)
            s[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(s))),
            (0, l.Z)((0, i.Z)(e), "state", { isVisible: !1 }),
            (0, l.Z)((0, i.Z)(e), "changeVisibility", function () {
              e.setState({ isVisible: !e.state.isVisible });
            }),
            (0, l.Z)((0, i.Z)(e), "renderSetting", function (t, r) {
              return e.state.isVisible
                ? (0, g.jsx)("section", {
                    className:
                      "px-6 shadow-inner py-8 md:py-4 border-b border-r border-l border-gray-200 mx-1 dark:border-night-500",
                    children: (0, g.jsxs)("label", {
                      className:
                        "text-gray-600 dark:text-gray-200 mb-4 sm:mb-0 md:flex justify-center items-center px-2",
                      htmlFor: "input_name",
                      children: [
                        (0, g.jsx)("span", {
                          className:
                            "w-full md:w-3/12 text-center md:px-4 truncate",
                          children: (0, g.jsx)(p.Z, { id: "jbLoJJ" }),
                        }),
                        (0, g.jsx)("input", {
                          id: "input_name",
                          type: "text",
                          className:
                            "text-gray-600 dark:bg-night-400 dark:border-0 dark:text-gray-200 border shadow-inner md:shadow-none md:border-0 md:border-b w-full md:w-8/12 px-4 py-2 border-gray-200 my-3 ml-2 sm:ml-0",
                          value: t,
                          onChange: r,
                          required: !0,
                        }),
                      ],
                    }),
                  })
                : null;
            }),
            e
          );
        }
        return (
          (0, o.Z)(r, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.isCustom,
                  r = e.fileName,
                  n = e.handleFileNameChange,
                  o = this.state.isVisible;
                return t
                  ? (0, g.jsxs)("section", {
                      className: "px-4 sm:px-0 container mx-auto mb-4 mt-10",
                      children: [
                        (0, g.jsxs)("button", {
                          onClick: this.changeVisibility,
                          className:
                            "w-full flex justify-between border-b border-grey-light border border-gray-200 dark:border-night-500 px-4 py-2 uppercase tracking-wide text-gray-600 dark:text-gray-200 cursor-pointer",
                          children: [
                            (0, g.jsxs)("div", {
                              children: [
                                (0, g.jsx)(f.G, {
                                  icon: h.Kb6,
                                  className: this.props.userIntl.isRTL
                                    ? "ml-4"
                                    : "mr-4",
                                }),
                                (0, g.jsx)(p.Z, { id: "ejUr6+" }),
                              ],
                            }),
                            (0, g.jsx)("div", {
                              children: (0, g.jsx)(f.G, {
                                icon: o ? h.l1h : h.eW2,
                                className: "mr-2",
                                "aria-hidden": "true",
                              }),
                            }),
                          ],
                        }),
                        this.renderSetting(r, n),
                      ],
                    })
                  : null;
              },
            },
          ]),
          r
        );
      })(u.Component);
      const T = (0, y.Z)(U);
      function I(e, t) {
        var r =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return _(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === r && e.constructor && (r = e.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(e);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return _(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          s = !0,
          a = !1;
        return {
          s: function () {
            r = r.call(e);
          },
          n: function () {
            var e = r.next();
            return (s = e.done), e;
          },
          e: function (e) {
            (a = !0), (i = e);
          },
          f: function () {
            try {
              s || null == r.return || r.return();
            } finally {
              if (a) throw i;
            }
          },
        };
      }
      function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function q(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = (0, c.Z)(e);
          if (t) {
            var o = (0, c.Z)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (0, a.Z)(this, r);
        };
      }
      const z = (function (e) {
        (0, s.Z)(r, e);
        var t = q(r);
        function r() {
          var e;
          (0, n.Z)(this, r);
          for (var o = arguments.length, s = new Array(o), a = 0; a < o; a++)
            s[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(s))),
            (0, l.Z)((0, i.Z)(e), "state", { filterObj: {} }),
            (0, l.Z)((0, i.Z)(e), "toggleFilters", function (t) {
              var r = t.target.getAttribute("data-index");
              if (r) {
                var n,
                  o = e.props,
                  i = o.formats,
                  s = o.setResponseState,
                  a = e.state.filterObj,
                  c = Object.assign({}, a, (0, l.Z)({}, r, !a[r])),
                  u = [],
                  d = I(i);
                try {
                  for (d.s(); !(n = d.n()).done; ) {
                    var f = n.value,
                      h = "".concat(f.quality).toLowerCase();
                    (("audio" === f.type && !1 === c.audio) ||
                      ("subs" === f.type && !1 === c.subtitles) ||
                      ("video" === f.type && !1 === c.video) ||
                      ("external" in f && !1 === c.external) ||
                      (("remote" in f || "convert" in f) && !1 === c.convert) ||
                      (h.includes("backup") && !1 === c.backup) ||
                      (h.includes("original") && !1 === c.original)) &&
                      u.push(f);
                  }
                } catch (e) {
                  d.e(e);
                } finally {
                  d.f();
                }
                u.length || (u = i),
                  e.setState({ filterObj: c }, function () {
                    s(u);
                  });
              }
            }),
            (0, l.Z)((0, i.Z)(e), "createFilters", function () {
              var t = e.props.formats,
                r = {};
              t.forEach(function (e) {
                if ("type" in e)
                  switch (e.type) {
                    case "audio":
                      r.audio = !0;
                      break;
                    case "video":
                      r.video = !0;
                      break;
                    case "subs":
                      r.subtitles = !0;
                  }
                if (("external" in e && (r.external = !0), "quality" in e)) {
                  var t = "".concat(e.quality).toLowerCase();
                  t.includes("backup") && (r.backup = !0),
                    t.includes("original") && (r.original = !0);
                }
                ("remote" in e || "convert" in e) && (r.convert = !0);
              }),
                e.setState({ filterObj: r });
            }),
            e
          );
        }
        return (
          (0, o.Z)(r, [
            {
              key: "componentDidMount",
              value: function () {
                this.createFilters();
              },
            },
            {
              key: "getTranslation",
              value: function (e) {
                var t = e,
                  r = {
                    audio: (0, g.jsx)(p.Z, { id: "JO+nns" }),
                    subtitles: (0, g.jsx)(p.Z, { id: "VlUZAP" }),
                    video: (0, g.jsx)(p.Z, { id: "y2V2Z3" }),
                    external: (0, g.jsx)(p.Z, { id: "0nE6hD" }),
                    backup: (0, g.jsx)(p.Z, { id: "uKwiCq" }),
                    convert: (0, g.jsx)(p.Z, { id: "pexxMQ" }),
                    original: (0, g.jsx)(p.Z, { id: "ivg3Gn" }),
                  };
                return e in r ? r[e] : t;
              },
            },
            {
              key: "render",
              value: function () {
                for (
                  var e = this.state.filterObj,
                    t = [],
                    r = 0,
                    n = Object.keys(e);
                  r < n.length;
                  r++
                ) {
                  var o = n[r],
                    i = e[o];
                  t.push(
                    (0, g.jsxs)(
                      "button",
                      {
                        "data-index": o,
                        onClick: this.toggleFilters,
                        className:
                          "inline-flex justify-center items-center uppercase text-sm sm:px-2 transform tracking-wide transition-transform hover:scale-95 py-1 sm:border m-2 ".concat(
                            i
                              ? "border-indigo-400 text-indigo-400 sm:shadow"
                              : "border-gray-300 text-gray-300"
                          ),
                        children: [
                          this.getTranslation(o),
                          (0, g.jsx)(f.G, {
                            icon: i ? h.r8p : h.NBC,
                            className: "mx-1 sm:mx-2 text-xs text-gray-400",
                          }),
                        ],
                      },
                      o
                    )
                  );
                }
                return t.length
                  ? (0, g.jsx)("section", {
                      className:
                        "px-1 sm:px-3 py-3 leading-normal shadow-inner text-center border border-gray-200 dark:border-night-500",
                      children: t,
                    })
                  : null;
              },
            },
          ]),
          r
        );
      })(u.Component);
      var F = r(8819);
      const G = function (e, t) {
        if (!e || !t) return null;
        var r = document.head.innerHTML,
          n = /\/build\/main\.([^"]+?).css/g.exec(r);
        if (!n) return "";
        var o = n[1],
          i = new F.Z().hex2bin(e).split("").reverse().join(""),
          s = [69, 84, 65, 77, 95, 89, 82, 82, 79, 83]
            .map(function (e) {
              return String.fromCharCode(e);
            })
            .join("")
            .split("")
            .reverse()
            .join(""),
          a = ""
            .concat(s)
            .concat(document.location.hostname.length)
            .concat(o)
            .concat(t);
        return new F.Z().decrypt(i, a);
      };
      var V = r(2124);
      const H = (0, o.Z)(function e(t) {
        if (((0, n.Z)(this, e), (this.url = t), !t)) return Promise.resolve();
        var r = { url: encodeURIComponent(this.url) };
        return new V.Z("size", r);
      });
      function K(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = (0, c.Z)(e);
          if (t) {
            var o = (0, c.Z)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (0, a.Z)(this, r);
        };
      }
      const Y = (function (e) {
          (0, s.Z)(r, e);
          var t = K(r);
          function r() {
            var e;
            (0, n.Z)(this, r);
            for (var o = arguments.length, s = new Array(o), a = 0; a < o; a++)
              s[a] = arguments[a];
            return (
              (e = t.call.apply(t, [this].concat(s))),
              (0, l.Z)((0, i.Z)(e), "sizeRef", (0, u.createRef)()),
              (0, l.Z)((0, i.Z)(e), "getTranslation", function (e) {
                var t = e,
                  r = {
                    audio: (0, g.jsx)(p.Z, { id: "JO+nns" }),
                    subtitles: (0, g.jsx)(p.Z, { id: "VlUZAP" }),
                    backup: (0, g.jsx)(p.Z, { id: "uKwiCq" }),
                    original: (0, g.jsx)(p.Z, { id: "ivg3Gn" }),
                  },
                  n = "".concat(e).toLowerCase();
                return (
                  n.includes("backup") && (t = r.backup), n in r ? r[n] : t
                );
              }),
              (0, l.Z)((0, i.Z)(e), "getSize", function () {
                var t = e.sizeRef.current;
                t.textContent = "...";
                var r = e.props,
                  n = r.videoObj,
                  o = r.token,
                  i = G(n.url, o);
                new H(i)
                  .then(function (e) {
                    var r = e ? e.data : null;
                    t.textContent =
                      !r || "message" in r || "size" in r == !1
                        ? "N/A"
                        : r.size;
                  })
                  .catch(function () {
                    t.textContent = "N/A";
                  });
              }),
              e
            );
          }
          return (
            (0, o.Z)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.videoObj,
                    r = e.token,
                    n = e.fileName,
                    o = e.triggerDownloadBox,
                    i = G(t.url, r);
                  if (
                    ("inline" in t && (i = "process?url=".concat(i)),
                    "remote" in t || "convert" in t)
                  ) {
                    var s = ""
                      .concat(t.quality)
                      .replace(/backup\s*?-\s*?/gi, "");
                    i = (function (e, t) {
                      var r = "https://9xbud.com",
                        n = {};
                      try {
                        n = new URL(e);
                      } catch (t) {
                        n = new URL(r + e);
                      }
                      for (var o = 0, i = Object.keys(t); o < i.length; o++) {
                        var s = i[o];
                        n.searchParams.append(s, t[s]);
                      }
                      return n.toString().replace(r, "");
                    })(i, { customName: n.replace("[quality]", s) });
                  }
                  var a = 0 === i.indexOf("/convert/") || "inline" in t != !1,
                    c = "".concat(t.quality).toLowerCase(),
                    l = c.includes("embed"),
                    u = l ? "-" : t.size,
                    d = "external" in t,
                    m = a || d ? function () {} : o,
                    x =
                      d || a
                        ? (0, g.jsx)(p.Z, { id: "OInBzh" })
                        : (0, g.jsx)(p.Z, { id: "Mh0UlP" });
                  return (0, g.jsxs)("div", {
                    className:
                      "lg:flex lg:justify-center items-center text-gray-600 dark:text-gray-200 capitalize sm:uppercase text-sm tracking-wide px-3 py-3 pb-5 mb-2 border-b-2 border-gray-200 dark:border-night-500",
                    children: [
                      (0, g.jsxs)("div", {
                        className:
                          "w-full lg:w-2/3 flex justify-center items-center",
                        children: [
                          (0, g.jsx)("div", {
                            className:
                              "w-24 sm:w-1/3 lg:w-24 text-blue-500 uppercase",
                            children: l ? "- " : t.ext,
                          }),
                          (0, g.jsxs)("div", {
                            className: "w-1/2 sm:w-1/3 lg:w-1/2 truncate",
                            children: [
                              this.getTranslation(t.quality),
                              c.includes("backup") && c.replace("backup", ""),
                            ],
                          }),
                          (0, g.jsx)("div", {
                            className: "w-2/5 sm:w-1/3 lg:w-2/5",
                            ref: this.sizeRef,
                            children:
                              l || "unknown" !== t.size
                                ? u
                                : (0, g.jsxs)("button", {
                                    type: "button",
                                    onClick: this.getSize,
                                    className:
                                      "text-blue-500 cursor-pointer transition-colors capitalize sm:uppercase hover:text-red-400",
                                    children: [
                                      "(",
                                      (0, g.jsx)(p.Z, { id: "bkEeVi" }),
                                      ")",
                                    ],
                                  }),
                          }),
                        ],
                      }),
                      (0, g.jsx)("div", {
                        className: "w-full mt-6 sm:mt-8 lg:mt-0 lg:w-1/3",
                        children: a
                          ? (0, g.jsxs)(w.rU, {
                              to: i,
                              className:
                                "max-w-sm mx-auto group block sm:inline-block border border-blue-500 px-6 w-full lg:w-auto lg:px-6 py-2 leading-4 text-blue-500 no-underline hover:border-blue-300 shadow",
                              rel: "noreferrer nofollow noopener",
                              onClick: m,
                              children: [
                                (0, g.jsx)(f.G, {
                                  icon: h.r5q,
                                  className: "mr-2 group-hover:animate-bounce",
                                  "aria-hidden": "true",
                                }),
                                (0, g.jsx)("span", { children: x }),
                              ],
                            })
                          : (0, g.jsxs)("a", {
                              href: i,
                              className:
                                "max-w-sm mx-auto group block sm:inline-block border border-blue-500 px-6 w-full lg:w-auto lg:px-6 py-2 leading-4 text-blue-500 no-underline hover:border-blue-300 shadow",
                              rel: "noreferrer nofollow noopener",
                              onClick: m,
                              children: [
                                (0, g.jsx)(f.G, {
                                  icon: h.r5q,
                                  className: "mr-2 group-hover:animate-bounce",
                                  "aria-hidden": "true",
                                }),
                                (0, g.jsx)("span", { children: x }),
                              ],
                            }),
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(u.Component),
        W = r.p + "bddcb5cd2357411ec12c.png";
      function J(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? J(Object(r), !0).forEach(function (t) {
                (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : J(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function X(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = (0, c.Z)(e);
          if (t) {
            var o = (0, c.Z)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (0, a.Z)(this, r);
        };
      }
      var $ = (function (e) {
        (0, s.Z)(r, e);
        var t = X(r);
        function r(e) {
          var o;
          (0, n.Z)(this, r),
            (o = t.call(this, e)),
            (0, l.Z)((0, i.Z)(o), "triggerDownloadBox", function () {
              o.setState({ isDownloadOpen: !0 });
            }),
            (0, l.Z)((0, i.Z)(o), "closeDownloadBox", function () {
              o.setState({ isDownloadOpen: !1 });
            }),
            (0, l.Z)((0, i.Z)(o), "setResponseState", function (e) {
              o.setState(function (t) {
                return {
                  customResponse: Q(
                    Q({}, t.customResponse),
                    {},
                    { formats: e }
                  ),
                };
              });
            }),
            (0, l.Z)((0, i.Z)(o), "handleFileNameChange", function (e) {
              o.setState({ fileName: e.target.value });
            }),
            (0, l.Z)((0, i.Z)(o), "renderThumbnail", function (e) {
              var t = W;
              return (
                "thumbnail" in e && !1 !== e.thumbnail && (t = e.thumbnail),
                (0, g.jsx)("img", {
                  src: t,
                  alt: e.title,
                  className:
                    "shadow border-2 border-gray-200 dark:border-night-500 h-48",
                })
              );
            }),
            (0, l.Z)((0, i.Z)(o), "renderBottomSection", function (e) {
              var t = [];
              return (
                e.forEach(function (e) {
                  var r = e.url.substr(0, 10) + e.quality;
                  t.push(
                    (0, g.jsx)(
                      Y,
                      {
                        triggerDownloadBox: o.triggerDownloadBox,
                        videoObj: e,
                        token: o.props.response.token,
                        fileName: o.state.fileName,
                      },
                      r
                    )
                  );
                }),
                (0, g.jsxs)("div", {
                  className: "mb-4 mt-8 text-center",
                  children: [
                    (0, g.jsxs)("div", {
                      className:
                        "border border-red-400 lg:flex lg:justify-center items-center text-red-400 uppercase text-sm tracking-wide px-3 py-4 mb-4",
                      children: [
                        (0, g.jsxs)("div", {
                          className:
                            "w-full lg:w-2/3 flex justify-center items-center",
                          children: [
                            (0, g.jsx)("div", {
                              className: "w-24 sm:w-1/3 lg:w-24",
                              children: (0, g.jsx)(p.Z, { id: "fc/lR/" }),
                            }),
                            (0, g.jsx)("div", {
                              className: "w-1/2 sm:w-1/3 lg:w-1/2",
                              children: (0, g.jsx)(p.Z, { id: "mxThcY" }),
                            }),
                            (0, g.jsx)("div", {
                              className: "w-2/5 sm:w-1/3 lg:w-2/5",
                              children: (0, g.jsx)(p.Z, { id: "q67yTZ" }),
                            }),
                          ],
                        }),
                        (0, g.jsx)("div", {
                          className: "w-full mt-4 lg:mt-0 lg:w-1/3 text-center",
                          children: (0, g.jsx)(p.Z, { id: "zfvpPg" }),
                        }),
                      ],
                    }),
                    t,
                  ],
                })
              );
            });
          var s = o.props,
            a = s.response,
            c = s.cache.settings.downloadFormat.replace("[title]", a.title);
          return (
            (document.title = a.title),
            (o.state = { isDownloadOpen: !1, customResponse: a, fileName: c }),
            o
          );
        }
        return (
          (0, o.Z)(r, [
            {
              key: "renderTopSection",
              value: function (e) {
                var t = this.props.response;
                return (0, g.jsx)(g.Fragment, {
                  children: (0, g.jsxs)("div", {
                    className: "mt-2 lg:flex lg:justify-center items-center",
                    children: [
                      (0, g.jsx)("div", {
                        className: "lg:w-2/5 mt-1 overflow-hidden text-center",
                        children: (0, g.jsx)("picture", {
                          className:
                            "inline-block transform hover:scale-125 transition-transform",
                          children: this.renderThumbnail(e),
                        }),
                      }),
                      (0, g.jsxs)("div", {
                        className: "lg:ml-4 lg:w-3/5 mt-6 lg:mt-0",
                        children: [
                          (0, g.jsxs)("div", {
                            className:
                              "bg-gray-100 dark:bg-night-400 w-full px-6 py-3 mb-2 leading-loose text-sm",
                            children: [
                              (0, g.jsxs)("p", {
                                className: "text-gray-500 dark:text-gray-200",
                                children: [
                                  (0, g.jsx)(p.Z, { id: "rcXVd/" }),
                                  (0, g.jsx)("span", {
                                    className: "mx-1",
                                    children: "-",
                                  }),
                                  (0, g.jsx)("span", {
                                    className: "text-blue-500",
                                    children: e.uploader,
                                  }),
                                ],
                              }),
                              (0, g.jsxs)("p", {
                                className: "text-gray-500 dark:text-gray-200",
                                children: [
                                  (0, g.jsx)(p.Z, { id: "U9Yr7Q" }),
                                  (0, g.jsx)("span", {
                                    className: "mx-1",
                                    children: "-",
                                  }),
                                  (0, g.jsx)("span", {
                                    className: "text-blue-500 ml-1",
                                    children: e.duration,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, g.jsx)(z, {
                            setResponseState: this.setResponseState,
                            formats: t.formats,
                          }),
                        ],
                      }),
                    ],
                  }),
                });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.state,
                  t = e.fileName,
                  r = e.isDownloadOpen,
                  n = e.customResponse,
                  o = this.props.cache.settings.hideMessages;
                return (0, g.jsxs)(g.Fragment, {
                  children: [
                    !o &&
                      (0, g.jsx)(k.Z, {
                        parentStyle: !0,
                        query: { type: 0, url: n.request.url },
                      }),
                    (0, g.jsx)(T, {
                      isCustom: n.isCustom,
                      fileName: t,
                      handleFileNameChange: this.handleFileNameChange,
                    }),
                    (0, g.jsxs)("div", {
                      className:
                        "mt-2 md:flex justify-center items-center text-gray-500 dark:text-gray-200 px-4 sm:px-6 py-4 text-lg text-center leading-normal",
                      children: [
                        (0, g.jsx)(f.G, {
                          icon: h.cwv,
                          className: "mx-2 text-blue-500",
                        }),
                        n.title,
                      ],
                    }),
                    (0, g.jsxs)("section", {
                      className: "py-3 lg:py-6 px-4",
                      children: [
                        this.renderTopSection(n),
                        this.renderBottomSection(n.formats),
                      ],
                    }),
                    r && (0, g.jsx)(L, { onClose: this.closeDownloadBox }),
                  ],
                });
              },
            },
          ]),
          r
        );
      })(u.Component);
      const ee = (0, N.Z)($);
      function te(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = (0, c.Z)(e);
          if (t) {
            var o = (0, c.Z)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (0, a.Z)(this, r);
        };
      }
      const re = (function (e) {
        (0, s.Z)(r, e);
        var t = te(r);
        function r() {
          return (0, n.Z)(this, r), t.apply(this, arguments);
        }
        return (
          (0, o.Z)(r, [
            {
              key: "renderContent",
              value: function () {
                var e = this.props,
                  t = e.initObject,
                  r = e.data.response;
                return "search" === r.type
                  ? (0, g.jsx)(C, { response: r })
                  : "list" === r.type
                  ? (0, g.jsx)(P, { response: r })
                  : (0, g.jsx)(ee, { response: r, initObject: t });
              },
            },
            {
              key: "render",
              value: function () {
                return (0, g.jsx)("section", {
                  className: "w-full max-w-4xl my-2 mx-auto",
                  children: this.renderContent(),
                });
              },
            },
          ]),
          r
        );
      })(u.Component);
      var ne = r(1338);
      function oe(e, t) {
        var r =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return ie(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === r && e.constructor && (r = e.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(e);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return ie(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          s = !0,
          a = !1;
        return {
          s: function () {
            r = r.call(e);
          },
          n: function () {
            var e = r.next();
            return (s = e.done), e;
          },
          e: function (e) {
            (a = !0), (i = e);
          },
          f: function () {
            try {
              s || null == r.return || r.return();
            } finally {
              if (a) throw i;
            }
          },
        };
      }
      function ie(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function se(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = (0, c.Z)(e);
          if (t) {
            var o = (0, c.Z)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (0, a.Z)(this, r);
        };
      }
      const ae = (function (e) {
        (0, s.Z)(r, e);
        var t = se(r);
        function r(e) {
          var o;
          return (
            (0, n.Z)(this, r),
            (o = t.call(this, e)),
            (0, l.Z)((0, i.Z)(o), "loadScript", function (e) {
              var t = document.createElement("script");
              (t.src = e), (t.async = !0), document.body.appendChild(t);
            }),
            (o.global = window),
            (o.scripts = e.initObject.onscripts),
            o
          );
        }
        return (
          (0, o.Z)(r, [
            {
              key: "renderScripts",
              value: function () {
                var e = this;
                if (this.scripts && this.scripts.length) {
                  this.global.__isGlLoaded = !0;
                  var t,
                    r = 500,
                    n = oe(this.scripts);
                  try {
                    var o = function () {
                      var n = t.value;
                      setTimeout(function () {
                        e.loadScript(n);
                      }, r),
                        (r += 1e3);
                    };
                    for (n.s(); !(t = n.n()).done; ) o();
                  } catch (e) {
                    n.e(e);
                  } finally {
                    n.f();
                  }
                }
              },
            },
            {
              key: "render",
              value: function () {
                return this.global.__isGlLoaded || this.renderScripts(), null;
              },
            },
          ]),
          r
        );
      })(u.Component);
      function ce(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = (0, c.Z)(e);
          if (t) {
            var o = (0, c.Z)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (0, a.Z)(this, r);
        };
      }
      var le = (function (e) {
        (0, s.Z)(r, e);
        var t = ce(r);
        function r() {
          var e;
          (0, n.Z)(this, r);
          for (var o = arguments.length, s = new Array(o), a = 0; a < o; a++)
            s[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(s))),
            (0, l.Z)((0, i.Z)(e), "state", {
              error: !1,
              response: !1,
              isLoading: !1,
            }),
            (0, l.Z)((0, i.Z)(e), "setResponse", function (t) {
              var r =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              t || r
                ? t && "message" in t
                  ? e.changeErrorState(t.message)
                  : e.setState({ response: t, error: !1, isLoading: !t })
                : e.changeErrorState("NO_SEARCH");
            }),
            (0, l.Z)((0, i.Z)(e), "changeIsLoadingState", function (t) {
              e.setState({ isLoading: t });
            }),
            (0, l.Z)((0, i.Z)(e), "changeErrorState", function (t) {
              e.setState({ error: t, isLoading: !t });
            }),
            (0, l.Z)((0, i.Z)(e), "getTranslation", function (e) {
              var t = e;
              if (-1 !== e.indexOf("NOT_SUPPORTED"))
                return (0, g.jsx)(p.Z, {
                  id: "enZexa",
                  values: { 1: e.replace("NOT_SUPPORTED", "") },
                });
              var r = {
                "Invalid access token": (0, g.jsx)(p.Z, { id: "E/w50J" }),
                NO_LINKS: (0, g.jsx)(p.Z, { id: "HSZY8Z" }),
                BLOCKED: (0, g.jsx)(p.Z, { id: "PMWwIp" }),
                please_wait_limit_reached: (0, g.jsx)(p.Z, { id: "YbvsVD" }),
              };
              return e in r ? r[e] : t;
            }),
            (0, l.Z)((0, i.Z)(e), "renderError", function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null,
                r = "";
              return (
                t && (r = String(t)),
                ((r = e.getTranslation(r)) && "NO_SEARCH" !== r) ||
                  (r = (0, g.jsx)(p.Z, { id: "YF8eH3" })),
                (0, g.jsxs)("div", {
                  className:
                    "max-w-3xl mx-auto border border-r-0 border-l-0 md:border-r md:border-l border-red-400 text-center px-4 py-4 my-10 sm:my-20 leading-normal ",
                  children: [
                    (0, g.jsx)(f.G, {
                      icon: h.eHv,
                      className: "text-4xl mr-4 text-red-400",
                    }),
                    (0, g.jsx)("p", {
                      className: "text-red-400 my-4 text-lg",
                      children: r,
                    }),
                  ],
                })
              );
            }),
            e
          );
        }
        return (
          (0, o.Z)(r, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.initObject,
                  r = e.location,
                  n = e.history,
                  o = e.match;
                if (
                  "engine" in o.params &&
                  void 0 !== o.params.engine &&
                  o.params.engine in t.searchProviders == !1
                )
                  return (0, g.jsx)(d.l_, { to: "/" });
                var i = this.state,
                  s = i.error,
                  a = i.response,
                  c = i.isLoading;
                return (0, g.jsxs)(g.Fragment, {
                  children: [
                    (0, g.jsx)(m.Z, {
                      initObject: t,
                      pageType: "process",
                      location: r,
                      history: n,
                      match: o,
                      setResponse: this.setResponse,
                      isLoading: c,
                      changeIsLoadingState: this.changeIsLoadingState,
                      changeErrorState: this.changeErrorState,
                    }),
                    (0, g.jsx)(Z, { initObject: t }),
                    s && this.renderError(s),
                    s && (0, g.jsx)(ae, { initObject: t }),
                    a && !a.isCached && (0, g.jsx)(ae, { initObject: t }),
                    a && (0, g.jsx)(re, { data: a, initObject: t }),
                  ],
                });
              },
            },
          ]),
          r
        );
      })(u.Component);
      const ue = (0, ne.Z)(le);
    },
  },
]);
