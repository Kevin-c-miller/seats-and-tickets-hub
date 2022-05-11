"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpUser = exports.authRequired = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const userModel_1 = __importDefault(require("../../models/userModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// create token
const createToken = (id) => {
    const secret = process.env.JWT_SECRET;
    return jsonwebtoken_1.default.sign({ id }, secret, { expiresIn: 84000 });
};
exports.createToken = createToken;
// auth function
const authRequired = (req, res, next) => {
    // grab jwt secret
    const secret = process.env.JWT_SECRET;
    // grab token
    const token = req.cookies.jwt;
    // check if token is present
    if (token) {
        jsonwebtoken_1.default.verify(token, secret, (error, decodedToken) => {
            // if there is an error
            if (error) {
                return res
                    .status(401)
                    .json({ message: 'Auth Error' })
                    .redirect('/login');
            }
            else {
                next();
            }
        });
    }
    else {
        res.status(401).json({ message: 'Auth Error' });
    }
};
exports.authRequired = authRequired;
// Sign up a user
exports.signUpUser = (0, express_async_handler_1.default)(async (req, res, next) => {
    try {
        // destructure of of the req body
        const { userName, name, email, password, confirmPassword, isAdmin } = req.body;
        // check to make sure all fields filled out
        if (!userName || !name || !email || !password || !confirmPassword) {
            throw new Error('Please fill out all fields');
        }
        // check if user already exists
        const existingUser = await userModel_1.default.findOne({ email });
        // if user exists
        if (existingUser) {
            res.status(400);
            throw new Error('User with that email already exists');
        }
        // hash password
        const salt = await bcryptjs_1.default.genSalt(10); // adding 10 random chars
        const hashedPassword = await bcryptjs_1.default.hash(password, salt); // hash pw w/ special/extra 10 chars
        // create the new user
        const newUser = new userModel_1.default({
            userName,
            name,
            email,
            password,
            confirmPassword,
            isAdmin,
        });
        // if user successfully created
        if (newUser) {
        }
    }
    catch (err) { }
});
