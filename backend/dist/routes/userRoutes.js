"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/auth/authController");
const router = (0, express_1.Router)();
// register user
router
    .post('/register', authController_1.signUpUser)
    // login user
    .post('/login', authController_1.loginUser);
exports.default = router;
