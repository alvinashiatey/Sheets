class Sheet {
  url = `https://sheets.alvinashiatey.com/sheetapi/`;
  data = {};
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
      return data;
    } catch (e) {
      console.log("There was an Error: ", e);
    }
  }
}

export default Sheet;
