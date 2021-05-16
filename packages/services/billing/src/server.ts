import express from "express";

const app = express();

app.use((req, res) => {
    res.json({
        allGood: true
    });
});

// app.listen(5000);

export default app;
