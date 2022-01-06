import Login from "../../components/Login";
import connect from "../../utils/Database.ts";

const { ObjectId } = require("mongodb");


export default async function user(req,res) {
    req.method = 'GET'
    if (req.method === 'POST'){
        const {db} = await connect();
        const data = req.body
        const response = await db.collection('users').insertOne(data);
    
        res.status(200).send(response)
    }if (req.method === 'GET'){
        const {db} = await connect()
        const data = "61d2f483cad3b76b8daa6235"
        const response = await db
            .collection('users')
            .find({_id: ObjectId(data)})
            .toArray();
        res.status(200).send(response[0])
        console.log(response[0])
    }else{
        
        res.status(400).json('Wrong method')
        
    }
    
}