import { Quiz } from '~/domain/quiz';

export default function dummyQuiz(id: string): Quiz {
  return {
    id,
    name: `Dummy quiz [${id}]`,
  };
}
