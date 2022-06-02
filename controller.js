const Service = require('./service');

class InstaPhotosController {
  async createRecord(req, res) {
    try {
      const { body } = req;
      const { status } = await Service.createRecord(body);
      return res.sendStatus(status);
    } catch(e) {
      console.log(e);
      res.sendStatus(500);
    }
  }

  async updateRecord(req, res) {
    try {
      const { body } = req;
      const { status } = await Service.updateRecord(body);
      return res.sendStatus(status);
    } catch(e) {
      console.log(e);
      res.sendStatus(500);
    }
  }

  async getRecord(req, res) {
    try {
      const _id = req.query.id;
      const response = await Service.getRecord(_id);
      return res.send(response);
    } catch(e) {
      console.log(e);
      res.sendStatus(500);
    }
  }

  async getRecords(req, res) {
    try {
      const response = await Service.getRecords();
      return res.send(response);
    } catch(e) {
      console.log(e);
      res.sendStatus(500);
    }
  }

  async deleteRecord(req, res) {
    try {
      const _id = req.query.id;
      const { status } = await Service.deleteRecord(_id);
      return res.send(status);
    } catch(e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
}

module.exports = new InstaPhotosController;
