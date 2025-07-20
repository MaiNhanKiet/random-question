import { NextFunction, Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import HTTP_STATUS from '~/constants/httpStatus'
import { USERS_MESSAGES } from '~/constants/messages'
import questionServices from '~/services/question.services'

const shuffleOptions = (question: any) => {
  const shuffledOptions = question.options.sort(() => Math.random() - 0.5)
  return {
    ...question,
    options: shuffledOptions
  }
}

export const getRandomQuestionController = async (
  req: Request<ParamsDictionary, any, any>,
  res: Response,
  next: NextFunction
) => {
  const data = await questionServices.getRandomQuestion()

  const result = data.map(shuffleOptions)

  res.status(HTTP_STATUS.OK).json({
    message: USERS_MESSAGES.GET_QUESTION_SUCCESSFULLY,
    result
  })
}
