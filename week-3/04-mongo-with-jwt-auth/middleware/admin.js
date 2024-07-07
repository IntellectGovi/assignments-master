const jwt = require("jsonwebtoken")
import {JWT_SECRET} from "../config/auth.js"
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const word = token.split(" ");
    const jwtToken = word[1];

    try{
        const isAdmin = jwt.verify(jwtToken , JWT_SECRET);
        if(isAdmin.username){
            next();
        }else{
            res.status(403).json({
                msg:"You are not Authenticated!"
            })
        }
    }catch(e){
        console.log(error)
        res.json({
            msg:"Incorrect inputs"
        })
    }
}

module.exports = adminMiddleware;