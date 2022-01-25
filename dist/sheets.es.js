var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _collapseArray, collapseArray_fn, _zip, zip_fn;
class Sheets {
  constructor(id, name = "") {
    __privateAdd(this, _collapseArray);
    __privateAdd(this, _zip);
    __publicField(this, "url", `https://sheets.alvinashiatey.com/sheetapi/`);
    __publicField(this, "data", {});
    __publicField(this, "element", null);
    this.id = id;
    this.name = name;
  }
  async getMyData() {
    try {
      let { data } = await fetch(`${this.url}${this.id}`).then((res) => res.json());
      this.data = data;
      return __privateMethod(this, _collapseArray, collapseArray_fn).call(this, this.data);
    } catch (e) {
      console.log("There was an Error: ", e);
    }
  }
  collapseKeys(...keys) {
    let newArr = [];
    this.data.forEach((item) => {
      let newItem = {};
      keys.forEach((key) => {
        newItem[key] = item[key];
      });
      newArr.push(newItem);
    });
    return newArr;
  }
  getKey(key) {
    let res;
    let newArr = [];
    this.data.forEach((item) => {
      newArr.push(item[key]);
    });
    newArr = newArr.filter((item) => item !== "");
    if (newArr.length === 1) {
      res = newArr[0];
    } else {
      res = newArr;
    }
    return res;
  }
  createElement({ tag, className, content, attributes, children }) {
    let acceptedTags = [
      "div",
      "p",
      "span",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "ul",
      "ol",
      "li",
      "a",
      "img",
      "button",
      "input",
      "select",
      "option",
      "textarea",
      "label",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td"
    ];
    if (!acceptedTags.includes(tag)) {
      throw new Error(`${tag} is not a valid tag`);
    }
    const element = document.createElement(tag);
    if (className) {
      element.className = className;
    }
    if (content) {
      element.innerHTML = content;
    }
    if (attributes) {
      for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
      }
    }
    if (Array.isArray(children)) {
      children.forEach((child) => {
        const childElement = this.createElement(child).element;
        element.appendChild(childElement);
      });
    }
    this.element = element;
    return this;
  }
  appendTo(parent) {
    document.querySelector(parent).appendChild(this.element);
    return this;
  }
  prependTo(parent) {
    document.querySelector(parent).prepend(this.element);
    return this;
  }
}
_collapseArray = new WeakSet();
collapseArray_fn = function(array) {
  const result = {};
  const keys = Object.keys(array[0]);
  keys.forEach((key) => {
    result[key] = [];
  });
  array.forEach((item) => {
    for (const [k, value] of Object.entries(item)) {
      if (item[k] !== "" && item[k] !== void 0) {
        result[k].push(value);
      }
    }
  });
  return result;
};
_zip = new WeakSet();
zip_fn = function(...arrays) {
  let zipped = [];
  for (let i = 0; i < arrays[0].length; i++) {
    if (!Array.isArray(zipped[i])) {
      zipped[i] = [];
    }
    for (const arr of arrays) {
      zipped[i].push(arr[i]);
    }
  }
  return zipped;
};
export { Sheets as default };
