"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors = require('cors');
const index_1 = __importDefault(require("./Routes/index"));
const PORT = 8000 || process.env.PORT;
//Middlewares
app.use(express_1.default.json());
app.use(cors());
//Router
app.use(index_1.default);
app.listen(PORT, () => {
    console.log("server is running successfully at", PORT);
});
