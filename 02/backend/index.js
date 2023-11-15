import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.send("server is ready")
})

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "a joke",
            content: "this is a joke"
        },
        {
            id: 2,
            title: "another joke",
            content: "this is another joke"
        }
    ]
    res.send(jokes)
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
})