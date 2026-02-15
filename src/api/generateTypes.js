import process from "node:process";
import openapiTS, { astToString } from "openapi-typescript";
import fs from "node:fs";

const ast = await openapiTS(`${process.env.API_URL}/swagger/v1/swagger.json`);
const contents = astToString(ast);

fs.writeFileSync("./src/api/generated-api-schema.ts", contents);
