"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/auth/authController");
const userController_1 = require("../controllers/user/userController");
const router = (0, express_1.Router)();
// register user
router
    .post('/register', authController_1.signUpUser)
    // login user
    .post('/login', authController_1.loginUser)
    // update user
    .patch('/:id', userController_1.updateUser)
    // delete user
    .delete('/:id', userController_1.deleteUser);
exports.default = router;
