const express=require("express")
const customerController = require("../controllers/customerController")
const getController = require("../controllers/getController")

const router=express.Router()

router.post("/postData",customerController)
router.get("/getData",getController)

module.exports=router