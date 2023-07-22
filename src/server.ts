import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";

const app = express();

app.listen(333, () => console.log('Servidor On'))