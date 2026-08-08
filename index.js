require("dotenv").config();

const express = require("express");
const connectDB = require("./db");

const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
    res.json({
        message: "Hello from GitHub Actions"
    });
});

app.get("/test", (req, res) => {
    res.json({
        message: "Testing SonarQube"
    });
});

async function startServer() {
    await connectDB();

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Application running on port ${PORT}`);
    });
}

startServer();