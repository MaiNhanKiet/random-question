import { Collection, Db, MongoClient } from 'mongodb'
import dotenv from 'dotenv'
import Question from '~/models/Question'
dotenv.config()

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@genderhealthcarecluster.wvxqp0e.mongodb.net/?retryWrites=true&w=majority&appName=GenderHealthcareCluster`

class DatabaseServices {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
  }

  async connect() {
    try {
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  get questions(): Collection<Question> {
    return this.db.collection(process.env.DB_QUESTIONS_COLLECTION as string)
  }
}

export const databaseServices = new DatabaseServices()
export default databaseServices
