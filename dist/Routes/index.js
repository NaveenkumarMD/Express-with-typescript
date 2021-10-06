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
const express_1 = require("express");
const route = (0, express_1.Router)();
const currencies_json_1 = __importDefault(require("../Data/currencies.json"));
const path = require('path');
const fs = require('fs');
route.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(currencies_json_1.default);
}));
route.post("/add", (req, res) => {
    var coindata = req.body;
    var jsonpath = path.resolve(__dirname, "../Data/currencies.json");
    var obj = Object.assign(Object.assign({}, currencies_json_1.default), { coindata });
    console.log(obj);
    fs.writeFile(jsonpath, JSON.stringify(obj), 'utf8', () => {
        console.log("Done");
    });
    return res.json({
        "msg": "success"
    });
});
exports.default = route;
