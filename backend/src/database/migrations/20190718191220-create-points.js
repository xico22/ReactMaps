module.exports = {
  up: (queryInterface, Sequilize) => {
    return queryInterface.createTable("points", {
      id: {
        type: Sequilize.INTEGER,
        allowNull: false,
        autoIncryement: true,
        primaryKey: true
      },
      name: {
        type: Sequilize.STRING,
        allowNull: false
      },
      latitude: {
        type: Sequilize.DECIMAL(9, 6),
        allowNull: false
      },
      longitude: {
        type: Sequilize.DECIMAL(9, 6),
        allowNull: false
      },
      created_at: {
        type: Sequilize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequilize.DATE,
        allowNull: false
      }
    });
  }
};
