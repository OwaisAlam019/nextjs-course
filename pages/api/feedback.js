import fs from 'fs'
import path from 'path'
async function handler(req,res){
console.log(req,"request ........");
    if(req.method =="POST"){
        const email = req.body.email
        const feedback = req.body.text

        const newFeedback ={
            id: new Date().toISOString(),
            email:email,
            feedback:feedback
        }

        const storagePath = path.join(process.cwd() ,'data','feedback.json')
        const fileData = fs.readFileSync(storagePath,'utf-8')
        const data = JSON.parse(fileData)
        data.push(newFeedback)
        fs.writeFileSync(storagePath,JSON.stringify(data))
        
        res.status(201).json({message:"success",feedback:newFeedback})
    }else{
        res.status(201).json({message:"working"})

    }
}
export default handler