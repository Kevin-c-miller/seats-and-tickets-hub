"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// userSchema corresponding to User interface
const userSchema = new mongoose_1.Schema({
    userName: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    confirmPassword: { type: String, required: true, trim: true },
    isAdmin: false,
}, { timestamps: true });
exports.default = userSchema;
