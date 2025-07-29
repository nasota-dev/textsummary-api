import {Request, Response} from "express"
import { summaryText } from "../services/geminiService"

export async function generateSummary(req:Request, res:Response) {
  const { text } = req.body
  if(!text) {
    return res.status(400).json({error: "text is required!"})
  }
  try {
    const summary = await summaryText(text)
    res.json({ summary })
  } catch (error) {
    console.log(error)
    res.status(500).json({error})
  }
}
