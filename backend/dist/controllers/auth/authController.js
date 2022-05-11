"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.signUpUser = exports.authRequired = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const userModel_1 = __importDefault(require("../../models/userModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const securePassword_1 = require("../../utilities/securePassword");
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
            const token = (0, exports.createToken)(newUser._id);
            res.cookie('jwt', token, { maxAge: 84000 });
            //   use secure password function to hash the new user's password
            newUser.password = await (0, securePassword_1.securePassword)(newUser.password);
            newUser.confirmPassword = newUser.password;
            res.json({
                message: `Hi ${newUser.userName}! Welcome to my User API`,
                user: newUser._id,
            });
            //   save new user to db
            await newUser.save();
            res.status(201);
        }
        else {
            res.status(400);
            throw new Error('Error registering new user');
        }
    }
    catch (err) {
        res.status(400);
        throw new Error('Error registering new user');
    }
});
// login user
exports.loginUser = (0, express_async_handler_1.default)(async (req, res, next) => {
    try {
        // destructure from req.body
        const { email, password } = req.body;
        // check for user
        const user = await userModel_1.default.findOne({ email });
        // if user found and pw matches
        if (user && bcryptjs_1.default.compare(password, user.password)) {
            res.status(200).json({
                _id: user._id,
                userName: user.userName,
                name: user.name,
                email: user.email,
                token: (0, exports.createToken)(user._id),
            });
        }
        else {
            // unauthorized
            res.status(401);
            throw new Error('Invalid Credentials');
        }
    }
    catch (err) {
        res.status(401);
        throw new Error('Invalid Credentials');
    }
});
