"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductById = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const productModel_1 = __importDefault(require("../models/productModel"));
const mongoose_1 = __importDefault(require("mongoose"));
exports.getProducts = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productModel_1.default.find({});
        res.status(200).json(products);
    }
    catch (error) {
        console.error(error);
        res.status(404);
        throw new Error('No Products found.');
    }
}));
exports.getProductById = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        if (id !== undefined && mongoose_1.default.Types.ObjectId.isValid(id)) {
            const _id = new mongoose_1.default.Types.ObjectId(id);
            const foundProduct = yield productModel_1.default.findById({ _id });
            if (foundProduct !== null) {
                res.send(foundProduct);
            }
            else {
                res.status(400).json('Bad request');
            }
        }
        else {
            res.status(400).json('Bad request');
        }
    }
    catch (error) {
        console.error(error);
        throw new Error('Error');
    }
}));
exports.createProduct = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, name, type, ingredients, method, glass, ice, garnish, optional, price, history, } = req.body;
    try {
        if (user !== undefined &&
            name !== undefined &&
            type !== undefined &&
            ingredients !== undefined) {
            const newProduct = {
                user,
                name,
                type,
                ingredients,
                method,
                glass,
                ice,
                garnish,
                optional,
                price,
                history,
            };
            const productFound = yield productModel_1.default.findOne({ name });
            if (productFound !== undefined) {
                res.status(409).send('Product already exists');
            }
            else {
                const createdProduct = yield productModel_1.default.create(newProduct);
                res.json(createdProduct);
            }
        }
        else {
            res.status(400).send('Bad request');
        }
    }
    catch (error) {
        console.log(error);
    }
}));
exports.deleteProductById = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('hi');
}));
// export const deleteProductById = asyncHandler(
// 	async (req: Request, res: Response) => {
// 		// const { id } = req.params
// 		console.log('HI')
// 		// try {
// 		// 	if (id !== undefined && mongoose.Types.ObjectId.isValid(id)) {
// 		// 		const _id = new mongoose.Types.ObjectId(id)
// 		// 		const response = await Product.deleteOne({ _id })
// 		// 		console.log(response)
// 		// 		res.send(response)
// 		// 	} else {
// 		// 		res.status(400).json('Bad Request')
// 		// 	}
// 		// } catch (error) {
// 		// 	console.error(error)
// 		// }
// 	}
// )
