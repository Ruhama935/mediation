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

module.exports = { createRecommendation, getAwaitingRecommendations, getConfirmedRecommendations }