const express = require('express')
const app = express()
const port = 3500
const bookRoutes = require("./routes/bookRoutes")
const staffRoutes = require("./routes/staffRoutes")
const lendingRoutes = require("./routes/lendingRoutes")
const memberRoutes = require("./routes/memberRoutes")

//handle routes
app.use("/api/v1",bookRoutes)
// app.use("/api/v1",staffRoutes)
// app.use("/api/v1",lendingRoutes)
// app.use("/api/v1",memberRoutes)

mongoose.connect("mongodb://localhost:27017/bookLibCMJD109",
{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Failed to connect to MongoDB",err))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})