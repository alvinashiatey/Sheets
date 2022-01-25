class Sheets {
  url = `https://sheets.alvinashiatey.com/sheetapi/`;
  data = {};
  element = null;
  constructor(id, name = "") {
    this.id = id;
    this.name = name;
  }

  async getMyData() {
    try {
      let { data } = await fetch(`${this.url}${this.id}`).then((res) =>
        res.json()
      );
      this.data = data;
      return this.#collapseArray(this.data);
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

  //return key from data
  getKey(key) {
    let res;
    let newArr = [];
    this.data.forEach((item) => {
      newArr.push(item[key]);
    });
    //remove "" from array
    newArr = newArr.filter((item) => item !== "");
    // if array.length === 1, return array[0]
    if (newArr.length === 1) {
      res = newArr[0];
    } else {
      res = newArr;
    }
    return res;
  }

  #collapseArray(array) {
    const result = {};
    const keys = Object.keys(array[0]);
    keys.forEach((key) => {
      result[key] = [];
    });
    array.forEach((item) => {
      for (const [k, value] of Object.entries(item)) {
        if (item[k] !== "" && item[k] !== undefined) {
          result[k].push(value);
        }
      }
    });
    return result;
  }

  #zip(...arrays) {
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
  }

  createElement({ tag, className, content, attributes, children }) {
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

export default Sheets;
