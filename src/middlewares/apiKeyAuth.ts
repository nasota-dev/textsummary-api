import {Request, Response, NextFunction} from "express"

export default function apiKeyAuth(req:Request, res:Response, next:NextFunction) {
  const clientKey =  req.header('X-API-key')

  if(!clientKey) {
    return res.status(401).send({error: "API KEY not provided!"})
  }
  if(clientKey !== process.env.API_KEY_CLIENT) {
    return res.status(402).send({error: "API KEY invalid!"})
  }

  next()
}
