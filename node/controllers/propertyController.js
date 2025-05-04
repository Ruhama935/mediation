const Property = require('../models/Property');

const createProperty = async (req, res) => {
    console.log(req.files)
    console.log("I am in the createProperty")
    const { type, address, buildingFloor, floor, rooms, price, size, date, description, condition, comments } = req.body
    const imgs = req.files
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
    const properties = await Property.find( {status: 'Awaiting confirmation'}).lean()
    if (!properties?.length) {
        return res.status(400).json({ message: 'No properties found' })
    }
    res.json(properties)
}

const getConfirmedAndSoldProperties = async (req, res) => {
    const properties = await Property.find( {status:{ $in: ['Confirmed', 'Sold'] }}).lean()
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
    const updatedData = req.body;
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

module.exports = { createProperty, getAwaitingProperties, getConfirmedAndSoldProperties, getMyProperties, getOneProperty, updateProperty, updateStatusProperty, deleteProperty }