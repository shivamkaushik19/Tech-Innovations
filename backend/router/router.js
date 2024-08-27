const express=require("express")

const router=express.Router();

const posttodo=require("../controllers/user.todopost.controller")

router.post("/posttodo",posttodo)

module.exports=router

