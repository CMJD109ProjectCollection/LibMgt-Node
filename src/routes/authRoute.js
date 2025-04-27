const express = require("express");
const router = express.Router();
require('dotenv').config()
const bcrypt = require("bcryptjs");
const User = require("../model/userModel");
const { addUser } = require("../service/userService");
const url = "/auth"
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET;
// sign up
router.post(`${url}/signup`,async(req,res)=>{
    const {firstName, lastName, email, password, role} = req.body

    if(!firstName || !lastName || !email || !password || !role){
        return res.status(401).json({ error: "Missing required filed/s"})
    }
    try{
        const user = addUser(req.body)
        // generate token
        const token = jwt.sign({userId: user.email},jwtSecret,{expiresIn: '1h'})
        res.status(201).json({message:"User added",token})

    }catch(err){
        console.error(err)
        return res.status(500).json({error: "Internal Server Error"})
    }
})

// sign in
router.post(`${url}/signin`,async(req,res)=>{
    const { email, password } = req.body;

    //is User exist
    const user = await User.findOne({email})
    const isPasswordValid = await bcrypt.compare(password,user.password)
    if(!user || !isPasswordValid){
        return res.status(401).json({ error: "Invalid credentials"})
    }
    // generate token
    const token = jwt.sign({userId: user.email},jwtSecret,{expiresIn: '1h'})
    res.json(token)
})

module.exports = router;