"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const userModel_1 = __importDefault(require("../models/userModel"));
//  function to protect routes
const protect = (0, express_async_handler_1.default)(async (req, res, next) => {
    // initialze token
    let token;
    //  check for the token in headers
    if (req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')) {
        try {
            // get token from header
            // this will split into array, splitting at the space so it will look like ['bearer', 'token']
            // token will be at the 1 index
            token = req.headers.authorization.split(' ')[1];
            // verify token
            const { id } = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            //   const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            // get the user from token using that decodedTOken variable(has an id)and excluding the pw using 'select' keyword and minus sign pw
            req.user = await userModel_1.default.findById(id).select('-password');
            // call next function
            next();
        }
        catch (err) {
            console.error(err);
            res.status(401);
            throw new Error('Not Authorized');
        }
    }
    if (!token) {
        res.status(401);
        throw new Error('Not Authorized');
    }
});
