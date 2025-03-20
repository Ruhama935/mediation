const express = require("express")
const router = express.Router()
const propertyController = require("../controllers/propertyController")
const checkAdmin = require("../middleware/checkAdmin")
const verifyJWT = require("../middleware/verifyJWT")

// { createProperty, getAwaitingProperties, getConfirmedProperties, getMyProperties, getOneProperty, updateProperty, updateStatusProperty, deleteProperty }
router.get("/", propertyController.getConfirmedProperties)
router.get("/id/:id", propertyController.getOneProperty)

router.use(verifyJWT)

router.get("/my-properties", propertyController.getMyProperties)
// router.get("/confirmed-properties", propertyController.getConfirmedProperties)
router.post("/", propertyController.createProperty)
router.put("/:id", propertyController.updateProperty)

router.use(checkAdmin)

router.get("/awaiting-confirmation-properties", propertyController.getAwaitingProperties)
router.put("/updateStatus/:id", propertyController.updateStatusProperty)
router.delete("/:id", propertyController.deleteProperty)


module.exports = router