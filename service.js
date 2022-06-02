const Model = require('./model');

class Service {
  async createRecord(body) {
    try {
      const phonebook = new Model(body);
      await phonebook.save()

      return { status: 200 };
    } catch(e) {
      console.log('!!!createRecord!!!', e);
      return { status: 500 };
    }
  }

  async updateRecord(body) {
    try {
      const { _id } = body;
      await Model.findOneAndUpdate({ _id }, body);
      return { status: 200 };
    } catch(e) {
      console.log('!!!updateRecord!!!', e);
      return { status: 500 };
    }
  }

  async getRecord(_id) {
    try {
      const record = await Model.findById(_id);
      return { status: 200, record };
    } catch(e) {
      console.log('!!!updateRecord!!!', e);
      return { status: 500 };
    }
  }

  async getRecords() {
    try {
      const records = await Model.find();
      return { status: 200, records };
    } catch(e) {
      console.log('!!!updateRecord!!!', e);
      return { status: 500 };
    }
  }

  async deleteRecord(_id) {
    try {
      await Model.findByIdAndDelete(_id);
      return { status: 200 };
    } catch(e) {
      console.log('!!!deleteRecord!!!', e);
      return { status: 500 };
    }
  }
}

module.exports = new Service();
