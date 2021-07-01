module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bills', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      amount: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        unique: true
      },
      product: {
        type: Sequelize.STRING,
        allowNull: false
      },
      paymentMethod: {
        type: Sequelize.STRING,
        allowNull: false
      },
      customer: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bills')
  }
}
