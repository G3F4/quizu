import { useApi, useRoute, useState } from '#imports';
import { Quiz } from '~/domain/quiz';
import { QuizDetailsResponse } from '~/server/api/quiz/[id].get';

export default function useQuizDetails() {
  const { id } = useRoute().params;
  const details = useState<Quiz>(() => null);

  return {
    details,
    async load() {
      details.value = await useApi<QuizDetailsResponse>(`/api/quiz/${id}`);
    },
  }
}