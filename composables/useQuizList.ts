import { useApi, useState } from '#imports';
import { Quiz } from '~/domain/quiz';
import { QuizListResponse } from '~/server/api/quiz/list.get';

export default function useQuizList() {
  const list = useState<Quiz[]>(() => []);

  return {
    list,
    async load() {
      const { items } = await useApi<QuizListResponse>('/api/quiz/list');
      list.value = items;
    },
  }
}