const express = require("express")
const route = require("./routes/route.js")
const app = express()

const mongoose = require("mongoose")

app.use(express.json())




mongoose.connect("mongodb+srv://priyanka912066:Pie5MEDyx8B1zOiq@cluster0.ucnslwp.mongodb.net/cryptocoins",
    { useNewUrlParser: true })
    .then(() => console.log(("Mongoose is connected")))
    .catch(err => console.log(err.message))

app.use("/", route)

app.listen(process.env.PORT || 3000, function () {
    console.log("Express is running on port " + (process.env.PORT || 3000))
})




