require("dotenv").config()
const express = require("express")
const cors = require("cors")

const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConn")
const mongoose  = require("mongoose")

const PORT = process.env.PORT || 2800
const app = express()
connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))

app.get("/", (req,res)=> {
    res.send("this is the home page")
})

app.use("/blogs", require("./routes/blogRoutes"))
app.use("/api/property", require("./routes/propertyRoutes"))
// app.use("/api/recommendations", require("./routes/recommendationsRoutes"))
app.use("/api/auth", require("./routes/authRoutes"))

mongoose.connection.once('open', ()=>{
    console.log('Connected to MongoDB')
    app.listen(PORT, ()=>{console.log(`Server running on port ${PORT}`)})
})

mongoose.connection.on('error', err=> {
    console.log(err)
})
