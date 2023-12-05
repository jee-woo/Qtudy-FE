import { HeaderContentType, TabType } from '../types';

// TODO : 각 메뉴 path 수정
export const HEADER_MENU_LIST = [
  { menu: '퀴즈 생성', path: '/quiz/ai' },
  { menu: '요약 정리 생성', path: '/summary' },
  { menu: '관리 및 복습', path: '/category' },
];

export const HEADER_CONTENT: { [key: string]: { header: HeaderContentType; tabs: TabType[] } } = {
  createQuiz: {
    header: {
      main: '퀴즈 생성',
      sub: 'AI와 함께 혹은 자체적으로 퀴즈를 만들어보세요',
    },
    tabs: [
      { tab: 'AI 퀴즈 생성', path: '/create/quiz/ai' },
      { tab: '자체 퀴즈 생성', path: '/create/quiz/own' },
    ],
  },
  createSummary: {
    header: {
      main: '요약정리 생성',
      sub: 'AI와 함께 혹은 자체적으로 요약해 보세요',
    },
    tabs: [
      { tab: 'AI 요약 생성', path: '/' },
      { tab: '자체 요약 생성', path: '/' },
    ],
  },
  manage: {
    header: {
      main: '관리 및 복습',
      sub: '히스토리와 카테고리로 관리하고 복습할 수 있어요',
    },
    tabs: [
      { tab: '생성 히스토리', path: '/' },
      { tab: '나만의 카테고리', path: '/' },
    ],
  },
};
