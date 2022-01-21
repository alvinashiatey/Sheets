var __defProp = Object.defineProperty,
  __defNormalProp = (e, t, i) =>
    t in e
      ? __defProp(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: i,
        })
      : (e[t] = i),
  __publicField = (e, t, i) => (
    __defNormalProp(e, "symbol" != typeof t ? t + "" : t, i), i
  );
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Sheets =
        t());
})(this, function () {
  "use strict";
  return class {
    constructor(e, t = "") {
      __publicField(this, "url", "https://sheets.alvinashiatey.com/sheetapi/"),
        __publicField(this, "data", {}),
        (this.id = e),
        (this.name = t);
    }
    async getMyData() {
      try {
        let { data: e } = await fetch(`${this.url}${this.id}`).then((e) =>
          e.json()
        );
        return (this.data = e), e;
      } catch (e) {
        console.log("There was an Error: ", e);
      }
    }
  };
});
