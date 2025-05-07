const Recommendation = require('../models/Recommendation')

const createRecommendation = async (req, res) => {  
    const { body, name, phone, email } = req.body
    if (!body || !name) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    const recommendation = await Recommendation.create({
        body, name, phone, email
    })
    res.json(recommendation)
}

const getAwaitingRecommendations = async (req, res) => {
    const recommendations = await Recommendation.find( {status: 'Awaiting confirmation'} ).lean()
    if (!recommendations?.length) {
        return res.status(400).json({ message: 'No recommendations found' })
    }
    res.json(recommendations)
}

const getConfirmedRecommendations = async (req, res) => {
    const recommendations = await Recommendation.find( {status: 'Confirmed'} ).lean()
    if (!recommendations?.length) {
        return res.status(400).json({ message: 'No recommendations found' })
    }
    res.json(recommendations)
}

const updateStatusRecommendation = async (req, res) => {
    const { status } = req.body
    const recommendation = await Recommendation.findByIdAndUpdate(req.params.id, { status: status }, { new: true }).lean()
    if (!recommendation) {
        return res.status(400).json({ message: 'No recommendation found' })
    }
    res.json(recommendation)
}


const deleteRecommendation = async (req, res) => {
    console.log("I am in the deleteRecommendation")
    const recommendation = await Recommendation.findByIdAndDelete(req.params.id).lean()
    if (!recommendation) {
        return res.status(400).json({ message: 'No recommendation found' })
    }
    res.json(recommendation)
}

module.exports = { createRecommendation, getAwaitingRecommendations, getConfirmedRecommendations, updateStatusRecommendation, deleteRecommendation }