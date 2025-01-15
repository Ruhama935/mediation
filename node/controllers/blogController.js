const Blog = require("../models/Blog")

const createBlog = async (req, res) => {
    const { title, body } = req.body
    if (!title || !body) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    const blog = await Blog.create({
        title, body
    })
    res.json(blog)
}

const getAllBlogs = async (req, res) => {
    const blogs = await Blog.find().lean()
    // If no blogs
    if (!blogs?.length) {
        return res.status(400).json({ message: 'No blogs found' })
    }
    res.json(blogs)
}

module.exports = { createBlog, getAllBlogs }
