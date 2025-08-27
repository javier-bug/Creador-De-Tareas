import express from "express";
import webRouter from "./Routes/WebRoutes.js";

const app = express();

app.set("appName", "Creador De Tareas");
app.set("port", 3000);

app.use(webRouter);

app.listen(3000);
console.log(`Server ${app.get("appName")} on port ${app.get("port")}`);
