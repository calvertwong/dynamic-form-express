import { app } from "../../server"
import express from "express"

export const ExpressParser = () => {
  app.use(express.json())
  app.use(express.urlencoded())
}