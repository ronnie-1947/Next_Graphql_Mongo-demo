import mongodb from 'mongodb'
const MongoClient = mongodb.MongoClient

let _db:any


const mongoConnect = async ()=>{
    try {
        if(_db)return

        const client = await MongoClient.connect(process.env.MONGODB_URI?process.env.MONGODB_URI:'')
        _db = client.db('databaseName')
        console.log('Database Connected')
        
    } catch (error) {
        throw error
    }
}


export const getDb = async ()=> {
    if(_db)return _db
    
    // If there is no database connected
    await mongoConnect()
    return _db
}