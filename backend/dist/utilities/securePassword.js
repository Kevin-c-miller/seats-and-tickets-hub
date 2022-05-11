"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.securePassword = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const securePassword = async (password) => {
    const salt = await bcryptjs_1.default.genSalt(10); // adding 10 random chars
    const hashedPassword = await bcryptjs_1.default.hash(password, salt); // hash pw w/ special/extra 10 chars
    return hashedPassword;
};
exports.securePassword = securePassword;
