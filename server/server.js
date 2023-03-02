const express = require("express");
const connectDB = require("./db/conn");
const cors = require("cors");
const router = require("./routes/routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("",router);

connectDB();

app.listen(5000,()=>{
    console.log("app is listening on port : 5000");
})