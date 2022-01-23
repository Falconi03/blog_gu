import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../utils/Database";

interface ErrorResponseType{
    error: string
}

interface SuccessResponseType{
    _email: string
    _password: string
}

export default async (
    req: NextApiRequest, 
    res: NextApiResponse<ErrorResponseType | SuccessResponseType>
): Promise<void> => {
    if (req.method === 'POST'){
        const {email, password} = req.body
        if(!email || !password){
            res.status(400).json({error: 'missing body parameter'})
            return
        }
        const {db} = await connect()

        const response = await db.collection('users').insertOne({
            email, password
        })
        
        res.status(200).json(response.ops[0])
    }else{
        
        res.status(400).json({error:'wrong request method'})
    }
    
}