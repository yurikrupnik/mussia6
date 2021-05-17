import path from "path";
import copy from "rollup-plugin-copy";
import esBuild from "rollup-plugin-esbuild";

const cwd = process.cwd();

const globals = {};

const defaultModule = {
    input: "src/index.ts",
    output: {
        file: "dist/index.js",
        format: "cjs",
        globals
    },
    plugins: [
        esBuild({}),
        copy({
            targets: [{ src: path.join(cwd, "package.json"), dest: "dist" }]
        })
    ]
};

export default defaultModule;
