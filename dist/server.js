"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const productRoutes_copy_1 = __importDefault(require("./routes/productRoutes copy"));
const errorHandler_1 = require("./routes/errorHandler");
const connectDB_1 = require("./connectDB");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
(0, connectDB_1.connect)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use('/products', productRoutes_copy_1.default);
app.use('/users', userRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.use('*', errorHandler_1.errorHandler);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
