import { Db, MongoClient } from "mongodb";

interface ConnectType {
    db: Db;
    client: MongoClient;
}

const client = new MongoClient(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default async function connect(): Promise<ConnectType> {
    await client.connect()

    const db = client.db('gu_blog');
    return{db, client };

}