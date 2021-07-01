const { Bills } = require('../models')

module.exports = {
  create: async (req, res) => {
    const { amount, product, paymentMethod, customer } = req.body

    const bill = await Bills.create({ amount, product, paymentMethod, customer })

    return res.json(bill)
  },

  listByCustomer: async (req, res) => {
    const { customer } = req.query

    const bill = await Bills.findOne({ where: { customer } })

    if(!bill){
      return res.status(404).json()
    }

    return res.json(bill)
  },

  delete: async (req, res) => {
    const { id } = req.params

    const deleted = await Bills.destroy({ where: { id } })

    if(!deleted){
      return res.status(404).json()
    }

    return res.status(204).json()
  }
}