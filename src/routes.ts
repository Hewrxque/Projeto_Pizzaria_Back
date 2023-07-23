import { Router, Request, Response } from "express";

const router = Router(); 

router.get('/teste', (req: Request, res: Response) => {
    return res.json({name: 'Henrique'})
    // throw new Error('Erro ao fazer essa requisiçao')
})

export { router };