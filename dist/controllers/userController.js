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
exports.createUser = exports.getUserById = exports.getUsers = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const mongoose_1 = __importDefault(require("mongoose"));
const userModel_1 = __importDefault(require("../models/userModel"));
exports.getUsers = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel_1.default.find({});
        res.status(200).json(users);
    }
    catch (error) {
        console.error(error);
        res.status(404);
        throw new Error('No users found.');
    }
}));
exports.getUserById = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        if (id !== null && mongoose_1.default.Types.ObjectId.isValid(id)) {
            const _id = new mongoose_1.default.Types.ObjectId(id);
            const foundUser = yield userModel_1.default.findById({ _id });
            if (foundUser !== null) {
                res.send(foundUser);
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
exports.createUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstname, lastname, email } = req.body;
    try {
        if (firstname !== undefined &&
            lastname !== undefined &&
            email !== undefined) {
            const newUser = {
                firstname,
                lastname,
                email,
            };
            const userFound = yield userModel_1.default.findOne({ email });
            if (userFound !== undefined) {
                res.status(409).send('User already exists');
            }
            else {
                const createdUser = yield userModel_1.default.create(newUser);
                res.json(createdUser);
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
