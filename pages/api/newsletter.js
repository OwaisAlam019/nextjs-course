import { MongoClient } from "mongodb";
// Connection URL

const url =
  "mongodb+srv://owaisAlam:4YTWLNCh56tr7fAI@cluster0.qzf3whg.mongodb.net/demodb?retryWrites=true&w=majority";
const client = new MongoClient(url);

export default async function handler(req, res) {
  if (req.body.email && req.body.email.includes("@")) {
    console.log(req.query.body);

    const dbClient = await client.connect();
    const db = dbClient.db("newsletter");

    await db.collection("emails").insertOne({ email: req.body.email });
    client.close();
    res.status(201).json({ message: "Email registered successfully" });
  } else {
    res.status(201).json({ message: "In valid email" });
  }
}
