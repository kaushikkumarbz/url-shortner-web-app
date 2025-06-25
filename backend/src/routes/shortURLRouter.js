import { Router } from "express";
import { nanoid } from 'nanoid'
import { ShortURL } from "../models/shorturl.model.js";

const shortURLRouter = Router();



shortURLRouter.post("/", async (req, res)=>{

    try{
        
        const longUrl = req.body.url;

        if(!longUrl){
            return res.status(400).send({status: "url is empty"});
        }


        const shortURL = nanoid()


       const newShortURL = new ShortURL({

         originalUrl: longUrl,
         shortCode: shortURL

       })

       await newShortURL.save();



        res.status(200).send({ shortUrl: newShortURL});

    }catch(error){

        console.log(error);
        res.status(500).send({status: "SERVER ERROR"});
    }

})


shortURLRouter.get("/:short", async (req, res)=>{

    try{
        
        const shortUrl = req.params.short;

        if(!shortUrl){
            return res.status(400).send({status: "short url is empty"});
        }

        const matchData = await ShortURL.findOne({shortCode:shortUrl});


        return res.redirect(matchData.originalUrl);


    }catch(error){

        console.log(error);
        res.status(500).send({status: "SERVER ERROR"});
    }

})





export default shortURLRouter;


