const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = Schema({
    item:String,
    quantity:Number
});

const Inventory = mongoose.model('inventory', InventorySchema);

module.exports = Inventory;
