// const User = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const login = async (req, res) => {
    const { password, email } = req.body
    if (!email || !password) {
        return res.status(400).json({
            message: 'email and password fields are required'
        })
    }
    const foundUser = await User.findOne({ email }).lean()
    if (!foundUser || !foundUser.active) {
        return res.status(401).json({ message: 'Unauthorized' })

    }
    const match = await bcrypt.compare(password, foundUser.password)
    if (!match) return res.status(401).json({ message: 'Unauthorized' })
    const userInfo = {
        _id: foundUser._id,
        name: foundUser.name,
        email: foundUser.email,
        phone: foundUser.phone,
        permissions: foundUser.permissions
    }
    const accessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })
}

const register = async (req, res) => {
    const { name, password, email, phone } = req.body
    if (!email  || !password) {// Confirm data
        return res.status(400).json({ message: 'email and password fields are required' })
    }
    const duplicate = await User.findOne({ email: email }).lean()
    if (duplicate) {
        return res.status(409).json({ message: "Duplicate username" })
    }
    const hashedPwd = await bcrypt.hash(password, 10)
    const userObject = { name, email, phone, password: hashedPwd }
    const user = await User.create(userObject)
    if (user) { // Created
        return res.status(201).json({
            message: `New user ${user.username} created`
        })
    } else {
        return res.status(400).json({ message: 'Invalid user received' })
    }
}
module.exports = { login, register }
