const express = require("express");

const milk=require('./models/milkModel')
const app = express();

const db=require("./db.js")

app.use(express.json());

const milksRoute=require('./routes/milksRoute')
const userRoute = require('./routes/userRoute')
app.use('/api/milks/', milksRoute)
app.use('/api/users/', userRoute)

app.get("/", (req, res) => {
  res.send("Server working 🔥");
});


const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port port 🔥`);