"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const express_1 = __importDefault(require("express"));
exports.errorHandler = express_1.default.Router();
exports.errorHandler.get('*', (req, res) => {
    res.status(404).send('ERROR NOT FOUND');
});
