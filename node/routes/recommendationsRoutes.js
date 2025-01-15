const express = require("express")
const router = express.Router()
const blogController = require("../controllers/blogController")
const verifyJWT = require("../middleware/verifyJWT")

router.use(verifyJWT)

