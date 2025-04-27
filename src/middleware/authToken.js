const jwt = require("jsonwebtoken")
require("dotenv").config()
const jwtSecret = process.env.JWT_SECRET;

const authToken = (req,res,next)=> {
    const token = req.header('Authorization') && req.header('Authorization').replace('Bearer ','');
    console.log(token);

    if(!token){
        return res.status(401).json({error: "No token and auth failed"})
    }

    try{
         //verify
         const decoded = jwt.verify(token,jwtSecret)
         req.user = decoded
         next();
    }catch(er){
        console.error(er)
        return res.status(401).json({error: "Invalid Token"})

    }
}
module.exports = authToken
