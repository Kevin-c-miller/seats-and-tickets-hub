"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRequired = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
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
