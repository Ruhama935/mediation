const e = require('express');
const Property = require('../models/Property');
const User = require('../models/User')

const createProperty = async (req, res) => {
    console.log(req.files)
    console.log("I am in the createProperty")
    const { type, address, buildingFloor, floor, rooms, price, size, date, description, condition, comments } = req.body
    const imgs = req.files.map(file => file.filename);
    console.log("I am in the createProperty after imgs")
    // const planImg = req.files[0].path
    const tags = JSON.parse(req.body.tags)
    if (!type || !address || !floor || !rooms || !price || !size || !date || !description || !condition) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    if (isNaN(Date.parse(date))) {
        return res.status(400).json({ message: "Invalid date format" });
    }
    const property = await Property.create({
        type, address, buildingFloor, floor, rooms, imgs, price, size, date, description, condition, comments, tags, user: req.user._id
    })
    res.json(property)
}

const getAwaitingProperties = async (req, res) => {
    const properties = await Property.find({ status: 'Awaiting confirmation' }).lean()
    if (!properties?.length) {
        return res.status(400).json({ message: 'No properties found' })
    }
    res.json(properties)
}

const getConfirmedAndSoldProperties = async (req, res) => {
    const properties = await Property.find({ status: { $in: ['Confirmed', 'Sold'] } }).lean()
    if (!properties?.length) {
        return res.status(400).json({ message: 'No properties found' })
    }
    res.json(properties)
}

const getMyProperties = async (req, res) => {
    const properties = await Property.find({ user: req.user._id }).lean()
    if (!properties?.length) {
        return res.status(400).json({ message: 'No properties found' })
    }
    res.json(properties)
}

const getOneProperty = async (req, res) => {
    const property = await Property.findById(req.params.id).lean()
    if (!property) {
        return res.status(400).json({ message: 'No property found' })
    }
    res.json(property)
}

///////////////////////////////////////////

const updateProperty = async (req, res) => {
    const propertyId = req.params.id;
    console.log('BODY.PRICE:', req.body.price);
    console.log('FILES:', req.files);
    const updatedData = req.body;
    const newImgs = Array.isArray(req.files) ? req.files.map(file => file.filename) : [];

    // if (req.files ) {
    //     const newImgs = req.files.map(file => file.filename);
    // }
    // else {
    //     const newImgs = [];
    // }
    // if (newImgs.length > 0) {
    //     updatedData.imgs = imgs;
    // }
    console.log('prevImgs:', req.body.prevImgs)
    let prevImgsArray = [];

    if (req.body.prevImgs) {
        if (Array.isArray(req.body.prevImgs)) {
            prevImgsArray = req.body.prevImgs;
        } else if (typeof req.body.prevImgs === 'string' && req.body.prevImgs.trim() !== '') {
            prevImgsArray = [req.body.prevImgs];
        }
    }
    // מיזוג תמונות ישנות וחדשות
    updatedData.imgs = [...prevImgsArray, ...newImgs];

    updatedData.status = "Awaiting confirmation";
    const property = await Property.findByIdAndUpdate(propertyId, updatedData, { new: true }).lean()
    if (!property) {
        return res.status(400).json({ message: 'No property found' })
    }
    res.json(property)
}

const updateStatusProperty = async (req, res) => {
    const { status } = req.body
    const property = await Property.findByIdAndUpdate(req.params.id, { status: status }, { new: true }).lean()
    if (!property) {
        return res.status(400).json({ message: 'No property found' })
    }
    res.json(property)
}

const deleteProperty = async (req, res) => {
    console.log("I am in the deleteProperty")
    const property = await Property.findByIdAndDelete(req.params.id).lean()
    if (!property) {
        return res.status(400).json({ message: 'No property found' })
    }
    res.json(property)
}

const getUserDetails = async (req, res) => {
    const propertyId = req.params.id;
    const property = await Property.findById(propertyId).populate('user').lean()
    if (!property) {
        return res.status(400).json({ message: 'No property found' })
    }
    res.json(property.user)
}

module.exports = { createProperty, getAwaitingProperties, getConfirmedAndSoldProperties, getMyProperties, getOneProperty, updateProperty, updateStatusProperty, deleteProperty, getUserDetails }