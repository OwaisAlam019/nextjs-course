import { MongoClient} from 'mongodb'
// Connection URL

const url = "mongodb+srv://owaisAlam:4YTWLNCh56tr7fAI@cluster0.qzf3whg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

export default async function handler(req, res){
const {body,method} = req
const {eventId} = req.query
const {name, email, text} = body
    console.log(req.body,"requestBody")
    if(method === 'POST' || body){
        if(!email.includes('@'|| !name || name.trim() === ''|| !text || text.trim() === '')){
            return res.status(422).json({message:"Invalid params"})
        }

        const newComment = { name: name, email: email, text: text, eventId };
        const dbConnection = await client.connect()
        const response = await dbConnection.db('events').collection('comments').insertOne(newComment)
        await client.close()
        newComment.id = response.insertedId
        res.status(201).json({messaga:"Added Comment",newComment})
    }
     
    if(req.method === 'GET'){

        const dbConnection = await client.connect()
        const response = await dbConnection.db('events').collection('comments').find().sort({_id:-1}).toArray()
        console.log(response,"response from server");
        const dummyList = response

        res.status(201).json({message:"Success",data:dummyList})
    }

}