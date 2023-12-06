import styled from 'styled-components';
import { useState, useEffect } from 'react';
import {
  CategoryInfoType,
  CategoryListInfoType,
  CategoryQuizItemsType,
  CategorySummaryItemsType,
  CategoryType,
} from '../../../types';
import NoCategory from './NoCategory';
import Sidebar from './Sidebar';
import NoItem from './NoItem';
import CategoryItemsView from './CategoryItemsView';
import { CATEGORY_TYPE_MAPPING } from '../../../constants';

function MyCategory() {
  const [activeTabBar, setActiveTabBar] = useState<CategoryType>('퀴즈'); // 탭바 (퀴즈/요약)
  const [showNoCategoryView, setShowNoCategoryView] = useState(false); // NoCategory 출력 여부
  const [categoryList, setCategoryList] = useState<CategoryListInfoType>({
    quiz: [],
    summary: [],
  }); // 카테고리 전체 목록 (퀴즈/요약)
  const [activeCategory, setActiveCategory] = useState<CategoryInfoType | null>(null); // 조회 중인 카테고리 (퀴즈/요약)
  const [activeCategoryQuizItems, setActiveCategoryQuizItems] = useState<CategoryQuizItemsType[]>([]);
  const [activeCategorySummaryItems, setActiveCategorySummaryItems] = useState<CategorySummaryItemsType[]>([]);

  useEffect(() => {
    if (categoryList.quiz.length === 0 && categoryList.summary.length === 0) setShowNoCategoryView(true);
  }, [categoryList]);

  useEffect(() => {
    setActiveCategory(null);
  }, [activeTabBar]);

  if (showNoCategoryView) return <NoCategory setShowNoCategoryView={setShowNoCategoryView} />;

  return (
    <Container>
      <Sidebar
        activeTabBar={activeTabBar}
        categoryList={activeTabBar === '퀴즈' ? categoryList.quiz : categoryList.summary}
        activeCategory={activeCategory}
        setActiveTabBar={setActiveTabBar}
        setCategoryList={setCategoryList}
        setActiveCategory={setActiveCategory}
      />
      {categoryList[CATEGORY_TYPE_MAPPING[activeTabBar]].length === 0 ? (
        <NoItem categoryType={activeTabBar} />
      ) : (
        <CategoryItemsView
          activeTabBar={activeTabBar}
          activeCategoryQuizItems={activeCategoryQuizItems}
          activeCategorySummaryItems={activeCategorySummaryItems}
          setActiveCategoryQuizItems={setActiveCategoryQuizItems}
          setActiveCategorySummaryItems={setActiveCategorySummaryItems}
        />
      )}
    </Container>
  );
}

export default MyCategory;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  max-height: calc(100vh - 65px - 190px);
  min-height: 572px;
  padding: 0px 20px;

  & > div:nth-child(2) {
    width: 800px;
  }
`;
