const Service = require('../models/serviceModel');

const createService = async (req, res) => { 
    const { title, body, icon } = req.body
    if (!title || !body || !icon) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    const service = await Service.create({
        title, body, icon
    })
    res.json(service)
}

const getAllServices = async (req, res) => {
    const services = await Service.find().lean()
    if (!services?.length) {
        return res.status(400).json({ message: 'No services found' })
    }
    res.json(services)
}

const updateService = async (req, res) => {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean()  
    if (!service) {
        return res.status(400).json({ message: 'No service found' })
    }
    res.json(service)
}

const deleteService = async (req, res) => {
    const service = await Service.findByIdAndDelete(req.params.id).lean()
    if (!service) {
        return res.status(400).json({ message: 'No service found' })
    }
    res.json(service)
}

module.exports = { createService, getAllServices, updateService, deleteService }