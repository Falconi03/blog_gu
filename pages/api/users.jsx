import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../utils/Database.ts";



export default async function user(req,res) {
    if (req.method === 'POST'){
        const {db} = await connect();
        const {name} = req.body
        const response = await db.collection('users').insertOne({
        name : 'Anderson',
        age : 31
        });
    
        res.status(200).json({name})
    }else{
        
        res.status(400).json('Wrong method')
        
    }
    
}