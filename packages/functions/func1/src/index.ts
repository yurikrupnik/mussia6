// exports.function = (req, res) => {
//     res.status(200).json({
//         message: 'ok'
//     });
// };
import express, { Request, Response, Router } from "express";
import swaggerUi from "swagger-ui-express";
import path from "path";

const app = express();

const api = () => {
    const route = Router();
    route.get("/fun1", (req, res) => {
        res.status(200).json({
            data: "all goossd"
        });
    });
    route.get("/dam", (req, res) => {
        res.status(200).json({
            data: "all fd"
        });
    });
    return route;
};

app.use(api());
app.use(swaggerUI("http://localhost:3332"));

function swaggerUI(url: string) {
    // todo module
    const r = Router();
    r.get("/swagger", (req, res) => {
        res.header("Content-Type", "application/json");
        res.sendFile(path.join(__dirname, "swagger.json"));
    });
    r.use("/doc", swaggerUi.serve);
    r.get(
        "/doc",
        // swaggerUi.setup(openapiSpecification)
        swaggerUi.setup(
            {},
            {
                swaggerOptions: {
                    url: `${url}/swagger`
                }
            }
        )
    );
    return r;
}
// import button from '@krupnik/button';
// import axios from 'axios';
// import chalk from 'chalk';
// import mongoose from 'mongoose';
// import render from '@krupnik/render/dist/cjs/index';
// import morgan from 'morgan/index';
/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - Func1
 *     name: Func1
 *     summary: Find nothing
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A single project object
 *       401:
 *         description: No auth token
 */
const func1 = app;

const func3 = (req: Request, res: Response) => {
    res.status(200).json({
        ok: "yes funk 3"
    });
};
// const swagger = (req: Request, res: Response) => {
//     res.status(200).json({
//         ok: "yes funk 3"
//     });
// };
// exports.func1 = func1;
export { func3, func1 };

// function(req, res) => {
//     function: res.status(200).json({
//         message: 'ok'
//     })
// }
