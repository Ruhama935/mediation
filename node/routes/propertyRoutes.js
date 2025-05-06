const express = require("express")
const router = express.Router()
const propertyController = require("../controllers/propertyController")
const checkAdmin = require("../middleware/checkAdmin")
const verifyJWT = require("../middleware/verifyJWT")
const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'C:/Users/This User/Desktop/mediation/node/public/uploads')
    },
    filename: function (req, file, cb) {
        console.log("I am in the storage")
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

router.get("/", propertyController.getConfirmedAndSoldProperties)
router.get("/id/:id", propertyController.getOneProperty)

router.use(verifyJWT)

router.get("/my-properties", propertyController.getMyProperties)
// router.get("/confirmed-properties", propertyController.getConfirmedProperties)
router.post("/", upload.array('Images', 15), propertyController.createProperty)
router.put("/:id", upload.array('Images', 15), propertyController.updateProperty)

router.use(checkAdmin)

router.get("/awaiting-confirmation-properties", propertyController.getAwaitingProperties)
router.put("/updateStatus/:id", propertyController.updateStatusProperty)
router.delete("/:id", propertyController.deleteProperty)
router.get("/user-details/:id", propertyController.getUserDetails)

module.exports = router