const { MongoClient, ObjectId } = require('mongodb');

const uri = "mongodb+srv://velykoivanstas:VggsA2QeKqGMMyvf@cluster0.yrmkcjs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


class Database {
  constructor() {
    this.client = new MongoClient(uri);
  }

  async connect() {
    try {
      await this.client.connect();
      console.log("Connected to MongoDB!");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }

  async disconnect() {
    try {
      await this.client.close();
      console.log("Disconnected from MongoDB!");
    } catch (error) {
      console.error("Error disconnecting from MongoDB:", error);
    }
  }

  async deleteDocument(databaseName, collectionName, documentId) {
    try {
      const db = this.client.db(databaseName);
      const collection = db.collection(collectionName);
      const result = await collection.deleteOne({ _id: new ObjectId(documentId) }); // Используем new перед ObjectId
      if (result.deletedCount === 1) {
        console.log(`Deleted document with id ${documentId} from ${collectionName}.`);
      } else {
        console.log(`Document with id ${documentId} not found in ${collectionName}.`);
      }
    } catch (error) {
      console.error("Error deleting document:", error);
      throw error;
    }
  }

  async insertDocument(databaseName, collectionName, document) {
    try {
      const db = this.client.db(databaseName);
      const collection = db.collection(collectionName);
  
      if (!document) {
        throw new Error("Document is empty or undefined.");
      }
  
      const newDocument = { ...document, _id: new ObjectId() };
  
      const result = await collection.insertOne(newDocument);
      if (!result) {
        throw new Error("Insert operation returned undefined.");
      }
  
      console.log(`Inserted ${result.insertedCount} document into ${collectionName}.`);
    } catch (error) {
      console.error("Error inserting document:", error);
    }
  }
  
  async getAllDocuments(databaseName, collectionName) {
    try {
      const db = this.client.db(databaseName);
      const collection = db.collection(collectionName);
      const documents = await collection.find({}).toArray();
      return documents;
    } catch (error) {
      console.error("Error retrieving documents:", error);
      throw error;
    }
  }
}



module.exports = Database;
