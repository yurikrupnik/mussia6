import app from "./server";
import json from "../package.json";

const port = Number(process.env.PORT) || json.config.port || 8080;
console.log("json.config.port", json.config.port);
console.log("port", port);

app.listen(port, () => {
    console.log(`listening on port ${port}`); // eslint-disable-line
});
