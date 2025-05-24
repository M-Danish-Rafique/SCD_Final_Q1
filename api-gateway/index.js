const express = require("express");
const httpProxy = require("express-http-proxy");

const app = express();

const authServiceProxy = httpProxy("http://localhost:5001");

const blogServiceProxy = httpProxy("http://localhost:5002");

const commentServiceProxy = httpProxy("http://localhost:5003");

const profileServiceProxy = httpProxy("http://localhost:5004");

app.use(express.json());

app.use("/auth", (req, res, next) => {
    authServiceProxy(req, res, next);
});

app.use("/blog", (req, res, next) => {
    blogServiceProxy(req, res, next);
});

app.use("/comment", (req, res, next) => {
    commentServiceProxy(req, res, next);
});

app.use("/profile", (req, res, next) => {
    profileServiceProxy(req, res, next);
});

app.use((req, res) => {
    res.status(404).json({ error: "API endpoint not found" });
});

app.listen(5000, () => {
    console.log("API Gateway running on port 5000");
});