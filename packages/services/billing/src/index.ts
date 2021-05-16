import app from "./server";

const port = Number(process.env.PORT) || 8080;

app.listen(port, () => {
    console.log(`listening on port ${port}`); // eslint-disable-line
});
