"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const userModel_1 = __importDefault(require("../models/userModel"));
exports.userRoutes = express_1.default.Router();
exports.userRoutes.get('/', (req, res) => {
    res.send('USERS');
});
exports.userRoutes.post('/', (req, res) => {
    const newUser = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
    };
    try {
        userModel_1.default.create(newUser).then((r) => {
            res.send(r);
        });
    }
    catch (error) {
        console.log(error);
    }
});
