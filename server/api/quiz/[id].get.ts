import { defineEventHandler } from 'h3';
import { Quiz } from '~/domain/quiz';
import dummyQuiz from '~/server/dummy/dummyQuiz';

export type QuizDetailsResponse = Quiz;

export default defineEventHandler<QuizDetailsResponse>((event) => {
  const quizId = event.req.url.split('/').pop();

  return dummyQuiz(quizId)
});
