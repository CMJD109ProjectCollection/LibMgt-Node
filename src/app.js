const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3500
const bookRoutes = require("./routes/bookRoutes")
const staffRoutes = require("./routes/staffRoutes")
const lendingRoutes = require("./routes/lendingRoutes")
const memberRoutes = require("./routes/memberRoutes")
const authRoutes = require("./routes/authRoute")
const mongoose = require("mongoose")
const cors = require("cors")



app.use(express.json())
//handle CORS issue
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ['GET','POST','PATCH','PUT','DELETE','OPTIONS'],
  allowedHeaders:['Content-Type','Authorization'],
  credentials: true
}));

//handle routes
app.use("/api/v1", bookRoutes)
app.use("/api/v1", authRoutes)
// app.use("/api/v1",staffRoutes)
// app.use("/api/v1",lendingRoutes)
// app.use("/api/v1",memberRoutes)

mongoose.connect("mongodb://localhost:27017/bookLibCMJD109",
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Failed to connect to MongoDB", err))

app.listen(PORT, () => {
  console.log(`BookLIBNode-109 listening on port ${PORT}`)
})