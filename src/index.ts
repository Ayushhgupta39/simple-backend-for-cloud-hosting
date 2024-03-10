import express, { Express, Request, Response } from "express";
import { PORT } from "./config/config";

const app:Express = express();

app.use(express.json());

app.get("/", (req:Request, res:Response) => {
    res.json({ message: "Hello world!" })
})

app.get("/twitter", (req:Request, res:Response) => {
    res.json({
        twitter: "0xAyushhh"
    })
})

app.get("/login", (req:Request, res:Response) => {
    res.send("<h1>Login page</h1>")
})

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
})