import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  if (!req.body) {
    res.sendStatus(400)
    return
  }

  const { email, password } = req.body;

  if (!email || !password) {
    res.sendStatus(400)
    return
  }

  if (email === 'test@test.com' && password === 'test@1234') {
    res.sendStatus(200)
  } else {
    res.sendStatus(401)
  }
}