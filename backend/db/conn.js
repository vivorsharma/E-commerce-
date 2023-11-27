const db = "mongodb+srv://vivhor3875sharma:Vivor3022@cluster0.mvbx9dc.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require('mongoose')

mongoose.connect(db).then(() => {
    console.log("Database connected successfully")
}).catch((err) => {
    console.log("Failed to connect with Database", err)
})