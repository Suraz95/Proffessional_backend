import express from "express"
import dotenv from "dotenv"
dotenv.config({
  path: "./.env",
});
const app = express()
app.listen(process.env.PORT, () => {
    console.log(`port is connected ${process.env.PORT}`)
})
app.get("/", (req, res) => {
    res.send("Hello world");
})