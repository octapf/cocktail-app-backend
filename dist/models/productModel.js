"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    ingredients: [
        {
            name: { type: String, required: true },
            quantity: { type: String, required: true },
        },
    ],
    method: { type: String, required: true },
    glass: { type: String, required: true },
    ice: { type: String, required: true },
    garnish: { type: String, required: true },
    optional: [String],
    price: { type: Number, required: true },
    history: { type: String, required: true },
}, {
    timestamps: true,
});
const Product = mongoose_1.default.model('Product', productSchema);
exports.default = Product;
