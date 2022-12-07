const mongoose = require("mongoose")
const coinSchema = new mongoose.Schema(
    {
        symbol:
        {
            type: String,
            required: true
        },

        name: {
            type: String,
            required: true
        },

        marketCapUsd: {
            type: String
        },

        priceUsd: {
            type: String
        },


    },
    { timestamps: true })

    module.exports =mongoose.model("coin",coinSchema)

