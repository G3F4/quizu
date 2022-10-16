import { defineEventHandler } from 'h3';
import { Quiz } from '~/domain/quiz';
import { Pagination } from '~/domain/pagination';
import dummyQuiz from '~/server/dummy/dummyQuiz';

export interface QuizListResponse {
  items: Quiz[];
  pagination: Pagination;
}

export default defineEventHandler<QuizListResponse>((event) => {
  const page = 0;
  const pageSize = 10;
  const items = Array.from({ length: 123 }).map((_, index) => dummyQuiz(`${index}`));
  const offset = page * pageSize;

  return {
    items: items.slice(offset, offset + pageSize),
    pagination: {
      page,
      pageSize,
      total: items.length,
    },
  }
});
