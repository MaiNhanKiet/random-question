import databaseServices from './database.services'

class QuestionServices {
  async getRandomQuestion() {
    return databaseServices.questions.aggregate([{ $sample: { size: 10 } }]).toArray()
  }
}

const questionServices = new QuestionServices()
export default questionServices
