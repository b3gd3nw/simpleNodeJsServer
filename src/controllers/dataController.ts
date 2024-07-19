import { Request, Response } from "express";
const getData = (req: Request, res: Response) => {
    const data = {
        message: 'Hello World!',
        success: true
    };
    res.json(data);
};

export default getData;