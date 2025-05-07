const express = require("express")
const router = express.Router()
const recommendationController = require("../controllers/recommendationController")
const checkAdmin = require("../middleware/checkAdmin")
// const blogController = require("../controllers/blogController")
const verifyJWT = require("../middleware/verifyJWT")

router.get("/", recommendationController.getConfirmedRecommendations)

router.post("/", recommendationController.createRecommendation)

router.use(verifyJWT)
router.use(checkAdmin)
router.get("/awaitingRecommendations", recommendationController.getAwaitingRecommendations)
router.put("/updateStatus/:id", recommendationController.updateStatusRecommendation)
router.delete("/:id", recommendationController.deleteRecommendation)

module.exports = router