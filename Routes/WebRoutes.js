import express from "express";
import { join  } from 'path';
import { createDirname } from '../utils/dirname.js'

const { __dirname } = createDirname(import.meta.url)

const webRouter = express.Router(); 

webRouter.get("/home",(req, res)=>{
    res.sendFile(join(__dirname, "../src/view/home.html"));
})
      
export default webRouter;
