class FilterService {
  /**
   * Constructor
   * @param {*} datafile Path to a JSOn file that contains the speakers data
   */
  constructor(datafile) {
    this.datafile = datafile;
    // console.log(datafile[0]);
  }

  async filterName() {
    const data = await this.datafile;
    return data[0];
  }
}

module.exports = FilterService;
