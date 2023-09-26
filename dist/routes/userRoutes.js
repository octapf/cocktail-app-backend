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
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const userModel_1 = __importDefault(require("../models/userModel"));
exports.userRoutes = express_1.default.Router();
exports.userRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userModel_1.default.find();
    res.json(users);
}));
exports.userRoutes.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
    };
    try {
        const userFound = yield userModel_1.default.findOne({ email: req.body.email });
        if (userFound !== null) {
            res.status(409).send('User already exists');
        }
        const createdUser = yield userModel_1.default.create(newUser);
        res.json(createdUser);
    }
    catch (error) {
        console.log(error);
    }
}));
