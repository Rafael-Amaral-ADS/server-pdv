const Sale = require('../../models/Sale');

const SaleController = {
    async createSale(req, res) {
        const bodyData = req.body
        const { user_id } = req.params

        try {
            const createdSale = await Sale.create({...bodyData, username: user_id});
            await createdSale.populate('products').execPopulate();

            return res.status(200).json(createdSale);
        } catch(err) {
            return res.status(400).json(err);
        }
    },

    async getSalesUser(req, res) {
        const { user_id } = req.params

        try {
            const salesUser = await Sale.find({ username: user_id }).populate('products');
            return res.status(200).json(salesUser);
        } catch(err) {
            return res.status(400).json(err);
        }
    },

    async getSale(req, res) {
        const { user_id, sale_id } = req.params
        
        try {
            const sale = await Sale.findById(sale_id).populate('products');
            return res.status(200).json(sale);
        } catch(err) {
            return res.status(400).json(err);
        }
    }
};

module.exports = SaleController;