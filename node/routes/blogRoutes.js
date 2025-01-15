const express = require("express")
const router = express.Router()
const recommendationController = require("../controllers/recommendationController")
const verifyJWT = require("../middleware/verifyJWT")
const checkAdmin = require("../middleware/checkAdmin")

router.get("/Confirmed-Recommendations", recommendationController.getConfirmedRecommendations)

router.use(verifyJWT)
router.post("/",  recommendationController.createRecommendation)

router.use(checkAdmin)
router.get("/Awaiting-Recommendations", recommendationController.getAwaitingRecommendations)

module.exports = router

