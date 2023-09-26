"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
exports.productRoutes = express_1.default.Router();
exports.productRoutes.get('/', (req, res) => {
    res.send('PRODUCTS');
});
exports.productRoutes.post('/', (req, res) => {
    const product = {};
});
exports.productRoutes.put('/', (req, res) => {
    res.send('PRODUCTS');
});
exports.productRoutes.delete('/', (req, res) => {
    res.send('PRODUCTS');
});
