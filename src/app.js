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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})