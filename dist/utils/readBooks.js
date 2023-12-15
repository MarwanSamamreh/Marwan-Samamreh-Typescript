"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const readBooks = () => {
    const filePath = path_1.default.join(__dirname, "../data/books.json");
    if (!fs_1.default.existsSync(filePath)) {
        console.error("Books file does not exist.");
        return [];
    }
    try {
        const data = fs_1.default.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    }
    catch (error) {
        console.error("Error reading books file:", error);
        return [];
    }
};
exports.default = readBooks;
