const Sequilize = require('sequelize');

const Point = require('../app/models/Point');

const databaseConfig = require('../config/database');

const models = [Point];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequilize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

module.exports = new Database();
