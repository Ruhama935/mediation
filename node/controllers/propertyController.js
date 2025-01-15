const Property = require('../models/Property');

const createProperty = async (req, res) => {
    const { type, address, buildingFloor, floor, rooms, imgs, price, size, date, planImg, description, condition, tags } = req.body
    if (!type || !address || !floor || !rooms || !imgs || !price || !size || !date) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    const property = await Property.create({
        type, address, buildingFloor, floor, rooms, imgs, price, size, date, planImg, description, condition, tags, user: req.user._id 
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

const getConfirmedProperties = async (req, res) => {
    const properties = await Property.find( {status: 'Confirmed'}).lean()
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
    const property = await Property.findByIdAndDelete(req.params.id).lean()
    if (!property) {
        return res.status(400).json({ message: 'No property found' })
    }
    res.json(property)
}

module.exports = { createProperty, getAwaitingProperties, getConfirmedProperties, getMyProperties, getOneProperty, updateProperty, updateStatusProperty, deleteProperty }