const { MongoClient } = require("mongodb")
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true }
  
const connectDB = async props => {
  try {
    const mongoClient = new MongoClient(process.env.DB_URI, mongoOptions)
    await mongoClient.connect()
    const database = mongoClient.db(process.env.DATABASE)
    const colection = database.collection(props.collection)    
    let response = {}

    if (props.action === 'find') {
      response = await colection.find(props.params)
      .sort(props.sort).project(props.fields).limit(props.limit ? props.limit : 0).skip(props.start ? props.start : 0).toArray()

    } else if (props.action === 'insert') {
      response = await colection.insertOne(props.object)

    } else if (props.action === 'update') {
      response = await colection.updateOne(props.currentObject,{$set:props.newObject})

    } else if (props.action === 'deleteOne') {
      response = await colection.deleteOne(props.currentObject)
    }
    await mongoClient.close()
    return response
  } catch(error) {
    if (error.codeName === 'AuthenticationFailed') {
      console.log(">>> AuthenticationFailed!!!")

      return "Invalid credentials.Check the database connection string."
    }
  }
}
 
module.exports = { connectDB }