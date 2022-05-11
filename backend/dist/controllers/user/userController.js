"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const userModel_1 = __importDefault(require("../../models/userModel"));
// update User
exports.updateUser = (0, express_async_handler_1.default)(async (req, res) => {
    try {
        // grab id from url
        const { id } = req.params;
        // update the user
        const updatedUser = await userModel_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json({ message: 'User updated', updatedUser });
    }
    catch (err) {
        res.status(400);
        throw new Error('Error updating user');
    }
});
// delete user
exports.deleteUser = (0, express_async_handler_1.default)(async (req, res) => {
    try {
        // grab id from url
        const { id } = req.params;
        // find user by id to delete
        const deleted = await userModel_1.default.findByIdAndDelete(id);
        // if delete successful
        if (deleted) {
            res.status(200).json({ message: 'user deleted', deleted });
        }
        throw new Error('user not found');
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
