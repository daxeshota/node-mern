const express = require("express")
const mongoose = require("mongoose")
const app = express()
const User = require("./models/user.model.js")
const userRoute = require("./route/user.route.js")
const cors = require('cors');

//middleware
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: false }))

//routes
app.use("/api/users", userRoute)

//mongoDBconnection
mongoose.connect('mongodb+srv://daxeshota:4lTO9YQdYzk7MX9B@backenddb.ehsbtd1.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    app.listen(5000, () => {
        console.log(`Server Listening on 5000`)
    })
    console.log("mongoDB connected")
})
.catch(() => {
    console.log("not connected")
})

