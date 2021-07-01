module.exports = (sequelize, DataTypes) => {
  const Bills = sequelize.define('Bills', {
    amount: DataTypes.DOUBLE,
    product: DataTypes.STRING,
    paymentMethod: DataTypes.STRING,
    customer: DataTypes.STRING
  })

  return Bills
}