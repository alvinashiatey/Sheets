var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class Sheet {
  constructor(id, name = "") {
    __publicField(this, "url", `https://sheets.alvinashiatey.com/sheetapi/`);
    __publicField(this, "data", {});
    this.id = id;
    this.name = name;
  }
  async getMyData() {
    try {
      let { data } = await fetch(`${this.url}${this.id}`).then((res) => res.json());
      this.data = data;
      return data;
    } catch (e) {
      console.log("There was an Error: ", e);
    }
  }
}
export { Sheet as default };
